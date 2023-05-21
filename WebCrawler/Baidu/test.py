# -*- coding: utf-8 -*-
"""
@File    : test.py
@Time    : 5/11/2023 8:24 PM
@Author  : king
@Desc    : 
"""

import asyncio
import logging

logging.basicConfig(        # 针对 basicConfig 进行配置(basicConfig 其实就是对 logging 模块进行动态的调整，之后可以直接使用)
    level=logging.INFO,     # INFO 等级以下的日志不会被记录
    format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',    # 日志输出格式
    filename='back.log',    # 日志存放路径(存放在当前相对路径)
    filemode='w',           # 输入模式；如果当前我们文件已经存在，可以使用 'a' 模式替代 'w' 模式
                            # 与文件写入的模式相似，'w' 模式为没有文件时创建文件；'a' 模式为追加内容写入日志文件
)

async def my_function(arg):
    arg += 1
    logging.info('测试日志')
    return arg



async def main():
    # loop = asyncio.get_running_loop()
    tasks = []
    for _ in range(5):
        task = asyncio.create_task(my_function(1))
        tasks.append(task)
    result = await asyncio.gather(*tasks)
    return result


if __name__ == '__main__':
    # loop = asyncio.get_event_loop()
    # loop.run_until_complete(main())
    print(asyncio.run(main()))

# url = 'https://cdni.pornpics.com/1280/7/499/78624968/78624968_003_a3cb.jpg'
# print(url[url.rindex('/') + 1:])
#
# str = input('please input name：')
# while bool(str) and str != 'exit':
#     print('download done!')
#
#     str = input('please input name：')
