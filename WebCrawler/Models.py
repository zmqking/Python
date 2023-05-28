# -*- coding: utf-8 -*-
"""
@File    : Models.py
@Time    : 5/21/2023 4:21 PM
@Author  : king
@Desc    : 
"""
import requests
import asyncio
import aiohttp
import time
from lxml import etree
# import logging
from loguru import logger
from retrying import retry

import os

headers = {
    "authority": "www.pornpics.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "dnt": "1",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
cookies = {
    "_stats-ref": "https%3A%2F%2Fwww.google.com%2F",
    "PP_UVM_NU": "1",
    "PP_UVM": "1",
    "_rel_uid": "16846563650262349915",
    "pp_lang": "en",
    "is_logged_3": "%7B%22status%22%3A%22error%22%2C%22message%22%3A%22session%20was%20not%20started%22%7D"
}

xpath = "//div[@id='main']/ul/li/a"
# 同步设置代理方式
proxies = {
    'http': 'http://127.0.0.1:7890',
    'https': 'http://127.0.0.1:7890'
}

# 异步设置代理方式
proxy = 'http://127.0.0.1:7890'

# logging.basicConfig(  # 针对 basicConfig 进行配置(basicConfig 其实就是对 logging 模块进行动态的调整，之后可以直接使用)
#     level=logging.INFO,  # INFO 等级以下的日志不会被记录
#     format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',  # 日志输出格式
#     filename='back.log',  # 日志存放路径(存放在当前相对路径)
#     filemode='w',  # 输入模式；如果当前我们文件已经存在，可以使用 'a' 模式替代 'w' 模式
#     # 与文件写入的模式相似，'w' 模式为没有文件时创建文件；'a' 模式为追加内容写入日志文件
# )


# region 同步下载
# def getHtml(url=None, params=None):
#     response = requests.get(url, headers=headers, cookies=cookies, params=params, proxies=proxies)
#     tree = etree.HTML(response.text)
#     links = tree.xpath(xpath)
#     hrefs = []
#     if bool(links):
#         for link in links:
#             print(link.get('href'))
#             hrefs.append(link.get('href'))
#     return hrefs
#
#
# def getImageAddress(name) -> []:
#     url = "https://www.pornpics.com/"
#     params = {
#         "q": name
#     }
#     links = getHtml(url, params)
#     res = []
#     if bool(links):
#         for link in links:
#             res.extend(getHtml(link))
#     return res
#
#
# def saveImages(name):
#     # https://cdni.pornpics.com/1280/7/499/78624968/78624968_003_a3cb.jpg;
#     try:
#         imgUrls = getImageAddress(name)
#         if bool(imgUrls):
#             for imgUrl in imgUrls:
#                 img = imgUrl[imgUrl.rindex('/') + 1:]
#                 print(img)
#                 response = requests.get(imgUrl, headers=headers, cookies=cookies, proxies=proxies)
#                 with open(f'F:/chrome/New folder/{img}', 'wb')as f:
#                     f.write(response.content)
#         else:
#             print('无图片地址！')
#     except Exception as ex:
#         print(ex)
#
#
# str = input('please input name：')
# while bool(str) and str != 'exit':
#     start = time.time()
#     saveImages(str)
#     print('download done!', time.time() - start)
#
#     str = input('please input name：')
# endregion


# region 异步下载
path = 'E:/chrome/New folder/'


async def get_html_async(url=None, params=None):
    hrefs = []
    try:
        async with aiohttp.ClientSession() as client:
            response = await client.get(url, headers=headers, cookies=cookies, params=params, proxy=proxy, timeout=3)
            text = await response.text()
            tree = etree.HTML(text)
            links = tree.xpath(xpath)
            if bool(links):
                for link in links:
                    print(link.get('href'))
                    hrefs.append(link.get('href'))
    except Exception as ex:
        print('getHtmlAsync报错：', ex)
    return hrefs


async def get_image_address_async(name):
    url = "https://www.pornpics.com/pornstars/" + name + "/"
    res = []
    try:
        links = await get_html_async(url)
        tasks = []
        if bool(links):
            for link in links:
                task = asyncio.create_task(get_html_async(link))
                tasks.append(task)
            result = await asyncio.gather(*tasks)  # 等待一起执行完毕
            return result
    except Exception as ex:
        print('getImageAddressAsync报错:', ex)
    return res


async def save_images_async(name):
    # https://cdni.pornpics.com/1280/7/499/78624968/78624968_003_a3cb.jpg;
    try:
        img_urls = await get_image_address_async(name)
        if bool(img_urls):
            tasks = []
            async with aiohttp.ClientSession() as client:
                for i in range(len(img_urls)):
                    task = asyncio.create_task(save_img_async(client, i, img_urls))
                    tasks.append(task)
                # await asyncio.gather(*tasks)
                await asyncio.wait(tasks)
        else:
            print('无图片地址！')
    except Exception as ex:
        print('saveImagesAsync报错：', ex)


async def save_img_async(client, i, imgUrls):
    if not os.path.exists(path):
        os.mkdir(path)
    for img_url in imgUrls[i]:
        img = img_url[img_url.rindex('/') + 1:]
        response = await client.get(img_url, headers=headers, cookies=cookies, proxy=proxy, timeout=3)
        content = await response.read()
        if bool(content):
            with open(f'{path}{img}', 'wb')as f:
                f.write(content)
                print(img + ' 下载成功！')
        else:
            logger.info('下载失败：' + img_url)


if __name__ == '__main__':

    str = input('please input name：')
    while bool(str) and str != 'exit':
        str = str.replace(' ', '-')
        start = time.time()
        loop = asyncio.get_event_loop()
        loop.run_until_complete(save_images_async(str))

        print('download done!', time.time() - start)

        str = input('please input name：')
# endregion
