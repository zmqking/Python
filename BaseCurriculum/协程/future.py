# -*- coding: utf-8 -*-
"""
@File    : future.py
@Time    : 5/16/2023 8:34 PM
@Author  : king
@Desc    : 
"""
# import asyncio

# async def func():
#     print(1)
#     await asyncio.sleep(1)
#     return '这是一个返回值'
#
# async def main():
#     # 创建future 对象
#     future_1 = asyncio.ensure_future(func())
#     future_2 = asyncio.ensure_future(func())
#
#     res_1 = await future_1 # 等待对象
#     res_2 = await future_2
#
#     print(res_1, res_2)

# # 普通任务
# def work():
#     time.sleep(2)
#     return '这是一个普通任务...'
#
#
# async def main():
#     # 先去获取一个事件循环, 需要使用事件循环对象运行不支持协程的任务
#     loop = asyncio.get_event_loop()
#     """
#     默认线程方式完成任务并发
#     """
#
#     # 使用进程池的方式完成并发任务
#     with concurrent.futures.ProcessPoolExecutor() as pool:
#         result = await loop.run_in_executor(pool, work)
#         print('当前进程池任务的返回值为: ', result)
#
# if __name__ == '__main__':
#     asyncio.run(main())

import asyncio
import requests

async def get_image(url):
    # 发送网络请求获取图片
    print('开始下载: ', url)
    # 获取事件循环
    loop = asyncio.get_event_loop()
    # 创建线程池运行
    future = loop.run_in_executor(None, requests.get, url)
    response = await future
    file_name = url.rsplit('/')[-1]
    with open(file_name, 'wb') as f:
        f.write(response.content)

url_list = [
    'http://pic.bizhi360.com/bbpic/98/10798.jpg',
    'http://pic.bizhi360.com/bbpic/92/10792.jpg',
    'http://pic.bizhi360.com/bbpic/86/10386.jpg'
]
# 直接将协程对象放入到事件循环中
tasks = [get_image(url) for url in url_list]
asyncio.run(asyncio.wait(tasks))