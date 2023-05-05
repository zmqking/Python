# -*- coding: utf-8 -*-
"""
@File    : 异步上下文管理器.py
@Time    : 5/1/2023 10:39 AM
@Author  : king
@Desc    : 
"""
import asyncio


class AsyncContextManager:
    def __init__(self, conn=None):
        self.conn = conn

    # 创建数据库异步读写任务
    async def do_something(self):
        print('模拟多个数据库完成增删改查并返回结果')

    # 使用 with 自动链接数据库
    async def __aenter__(self):
        print("__aenter__方法执行了")
        self.conn = await  asyncio.sleep(1, result=200)
        return self

    # 如果代码执行完毕自动断开数据库链接
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print('__aexit__方法执行了')
        await asyncio.sleep(1)


async def main():
    async  with AsyncContextManager() as am:
        result = await am.do_something()
        await asyncio.sleep(1)


asyncio.run(main())




