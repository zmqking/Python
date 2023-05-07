# -*- coding: utf-8 -*-
"""
@File    : GetBaiduImages.py
@Time    : 5/3/2023 8:08 PM
@Author  : king
@Desc    :
"""
import asyncio
import aiohttp
import requests
import time
import os

heads = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}

count = 0


# <editor-fold desc="高性能下载百度图片版本">
async def getImgurls(url):
    async with aiohttp.ClientSession()as client:
        response = await client.get(url, headers=heads)
        dict = await response.json()

        urls = []
        for item in dict['data']:
            if len(item) > 0 and item['thumbURL'] != None and item['thumbURL'] != '':
                urls.append(item['thumbURL'])
        return urls


async def downloadImgs(url):
    urls = await getImgurls(url)
    async with aiohttp.ClientSession()as client:
        for i in urls:
            task = asyncio.create_task(writeImgFile(client, i))
            await task


async def writeImgFile(client, i):
    response = await client.get(i, headers=heads)
    global count
    count += 1
    with open(f'imgs/{count}.jpg', 'wb') as f:
        f.write(await response.read())


if __name__ == '__main__':
    url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=9442100676687252916&ipn=rj&ct=201326592&is=&fp=result&fr=&word=张靓颖&cg=star&queryWord=张靓颖&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=30&rn=30&gsm=1e&1683115771526='
    if not os.path.exists('imgs'):
        os.mkdir('imgs')
    start = time.time()
    # asyncio.run(downloadImgs(url))

    loop = asyncio.get_event_loop()
    loop.run_until_complete(downloadImgs(url))

    end = time.time()
    print(f'用时：{(end - start)}s')
    print('success')
# </editor-fold>
#
# # <editor-fold desc="一般性能下载百度图片版本">
# async def getResponse(url):
#     heads = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
#     }
#     async with aiohttp.ClientSession()as client:
#         response = await client.get(url, headers=heads)
#         return await response.json()
#
#
# async def getImgurl(url):
#     txt = await getResponse(url)
#
#     # print(txt)
#     # dict = json.loads(txt)
#
#     urls = []
#     for item in txt['data']:
#         # try:
#         if item.get('thumbURL') != None and item['thumbURL'] != '':
#             urls.append(item['thumbURL'])
#         # except:
#         #     break
#     # print(urls)
#     return urls
#
#
# async def getBeauty(url):
#     urls = await getImgurl(url)
#     count = 0
#     heads = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
#     }
#     for i in urls:
#         async with aiohttp.ClientSession() as client:
#             response = await client.get(i, headers=heads)
#             count += 1
#             with open(f'imgs/{count}.jpg', 'wb') as f:
#                 f.write(await response.read())
# if __name__ == '__main__':
#     url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=9442100676687252916&ipn=rj&ct=201326592&is=&fp=result&fr=&word=张靓颖&cg=star&queryWord=张靓颖&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=30&rn=30&gsm=1e&1683115771526='
#     if not os.path.exists('imgs'):
#         os.mkdir('imgs')
#     start = time.time()
#     loop = asyncio.get_event_loop()
#     loop.run_until_complete(asyncio.wait([getBeauty(url)]))
#     # loop.run_until_complete(asyncio.wait([getBeauty(url)]))
#     end = time.time()
#     print(f'用时：{(end - start)}s')
#     print('success')
# # </editor-fold>


# <editor-fold desc="同步下载百度图片">

from retrying import retry

# 重试包
# @retry(stop_max_attempt_number=3)
# def getUrls(url):
#     # print('111')
#     # # 断言（自定义异常）
#     # assert 1 == 100, '数据错误'
#     # response = requests.get(url, headers=heads, timeout=0.1)
#     response = requests.get(url, headers=heads)
#     dict = response.json()
#     urls = []
#     for item in dict['data']:
#         if item and item['thumbURL'] != None and item['thumbURL'] != '':
#             urls.append(item['thumbURL'])
#     return urls
#
#
# def getImages(url):
#     urls = getUrls(url)
#     count = 0
#     for u in urls:
#         count += 1
#         response = requests.get(u, headers=heads)
#         with open(f'imgs/{count}.jpg', 'wb') as f:
#             f.write(response.content)
#             f.flush()
#
#
# url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=9442100676687252916&ipn=rj&ct=201326592&is=&fp=result&fr=&word=张靓颖&cg=star&queryWord=张靓颖&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=30&rn=30&gsm=1e&1683115771526='
# if not os.path.exists('imgs'):
#     os.mkdir('imgs')
# start = time.time()
# getImages(url)
# end = time.time()
# print(f'用时：{(end - start)}s')
# print('success')
# </editor-fold>
