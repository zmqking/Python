# -*- coding: utf-8 -*-
"""
@File    : 并发.py
@Time    : 5/1/2023 10:11 AM
@Author  : king
@Desc    : 
"""

import time
import asyncio

now = lambda: time.time()


async def func():
    # task1 = asyncio.create_task(asyncio.sleep(1))
    # task2 = asyncio.create_task(asyncio.sleep(1))
    #
    # await task1
    # await task2

    # 不要在创建task的时候加上await,否则回变成同步执行效果
    await asyncio.create_task(asyncio.sleep(1))
    await asyncio.create_task(asyncio.sleep(1))


start = now()

for i in range(5):
    asyncio.run(func())

print('异步所花费时间：%f s' % (now() - start))
