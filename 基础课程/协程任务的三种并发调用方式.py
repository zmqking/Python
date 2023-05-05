# -*- coding: utf-8 -*-
"""
@File    : 协程任务的三种并发调用方式.py
@Time    : 5/1/2023 11:11 AM
@Author  : king
@Desc    : 
"""
import asyncio


async def work():
    print('当前是一个协程任务...')
    await asyncio.sleep(1)
    return '返回值...'


async def main():
    task1 = asyncio.create_task(work())
    task2 = asyncio.create_task(work())

    # 获取返回值
    # res = await asyncio.gather(task1, task2)
    # print(res)

    # done, pending = await  asyncio.wait([task1, task2])
    # for res in done:
    #     print(res.result())

    coro_list = [work() for _ in range(2)]
    for coro in asyncio.as_completed(coro_list):
        res = await  coro
        print(res)


asyncio.run(main())
