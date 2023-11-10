# -*- coding: utf-8 -*-
"""
@File    : test.py
@Time    : 5/13/2023 3:15 PM
@Author  : king
@Desc    : 
"""
# import execjs

# print(execjs.eval('Date.now()'))

import asyncio
import time

async def fetch_data(url):
    # 模拟异步网络请求，这里使用 asyncio.sleep 来代替实际的网络请求
    await asyncio.sleep(1)
    return f"Data fetched from {url}"

async def process_data(data):
    # 模拟异步数据处理
    await asyncio.sleep(2)
    return f"Processed data: {data.upper()}"

async def main():
    # 启动异步任务并等待结果
    start = time.time()
    url = "https://example.com"
    task1 = asyncio.create_task(fetch_data(url))
    task2 = asyncio.create_task(process_data(await task1))

    # 并发执行任务
    await asyncio.gather(task1, task2)

    # 获取结果
    fetched_data = task1.result()
    processed_data = task2.result()

    # 打印结果
    print(fetched_data)
    print(processed_data)
    print(f"用时：{time.time()-start}")
# 运行主函数
asyncio.run(main())



# 找出相同的值
# arrayA = [1, 3, 87, 28, 90]
# arrayB = [1, 96, 87, 8, 90]
#
# def getTextToC():
#     return 'from python';
#
# def findSameOrDiff():
#     diff = []
#     same = []
#     for a in arrayA:
#         for b in arrayB:
#             if a == b:
#                 same.append(a)
#
#     arrayA.extend(arrayB)
#     for i in arrayA:
#         if same.count(i) == 0:
#             diff.append(i)
#     print(f'相同:{same}')
#     print(f'不同:{diff}')
#
#
# findSameOrDiff()

# def login(func):
#     def wrapper(*args, **kwargs):
#         result = func(*args, **kwargs)
#         return result
#
#     return wrapper

#
# list1 = [1, 2, 3, 4, 5]
# list2 = [3, 4, 5, 6, 7]
#
# # 找出相同元素
# common = set(list1) & set(list2)
# print("相同元素：", common)
#
# # 找出不同元素
# different = set(list1) ^ set(list2)
# print("不同元素：", different)
