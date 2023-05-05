# -*- coding: utf-8 -*-
"""
@File    : 基于asyncio完成requests爬虫.py
@Time    : 4/30/2023 5:00 PM
@Author  : king
@Desc    : 
"""
import asyncio
import requests


async def get_image(url):
    try:
        # 发送网络清求获取图片
        print('开始下载：', url)

        # 获取事件循环
        loop = asyncio.get_event_loop()

        # 创建线程池运行
        future = loop.run_in_executor(None, requests.get, url)
        response = await future

        if len(response.content) == 0:
            print(f'当前照片清求不到：{url}')
        else:
            file_name = url.rsplit('/')[-1]
            with open(file_name, 'wb') as f:
                f.write(response.content)
    except Exception as ex:
        print(ex)


url_list = [
    'http://pic.bizhi360com/bbpic/98/10798.jpg',
    'http://pic.bizhi360.com/bbpic/92/10792.jpg',
    'http://pic.bizhi360.com/bbpic/86/10386.jpg'
]

# 直接将协程对象放入到事件循环中
tasks = [get_image(url) for url in url_list]
asyncio.run(asyncio.wait(tasks))
