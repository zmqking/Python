# -*- coding: utf-8 -*-
"""
@File    : 协程.py
@Time    : 4/30/2023 3:47 PM
@Author  : king
@Desc    : 
"""

# import asyncio
#
#
# async def func():
#     print(1)
#     await asyncio.sleep(2)
#     print(2)
#     return '这是一个返回值'
#
#
# async def main():
#     print('开始任务...')
#     task1 = asyncio.create_task(func())
#     task2 = asyncio.create_task(func())
#     # await 不要用在创建任务的时候，那样会变成同步
#     res = await task1
#     res1 = await task2
#
#     print(res, res1)
#
#
# asyncio.run(main())
#


import asyncio


async def hello():
    print('hello')
    await asyncio.sleep(0.2)
    print('world')


async def hello1():
    print('hello1')
    await asyncio.sleep(0.2)
    print('world1')


# loop = asyncio.get_event_loop()
# loop.run_until_complete(asyncio.wait([hello()]))


# asyncio.run(asyncio.wait([hello(), hello1()]))
asyncio.run(hello())
