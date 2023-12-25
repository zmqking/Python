# -*- coding: utf-8 -*-
"""
@File    : request.py
@Time    : 4/18/2023 8:49 PM
@Author  : king
@Desc    : 
"""
# import requests
#
# url = "https://www.baidu.com"
# header = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
# }
# param = {
#     "wd": 'test'
# }
# response = requests.get(url, headers=header, params=param)
#
# print(response.content.decode('utf-8'))


# from time import sleep, ctime
# import threading
# import logging
# from functools import reduce
#
# import ctypes


# region 系统消息框
# 定义消息框的类型常量
# MB_OK = 0x0  # 确认按钮
# MB_OKCANCEL = 0x1  # 确认和取消按钮
# MB_YESNO = 0x4  # 是和否按钮
#
# # 弹出消息框
# result = ctypes.windll.user32.MessageBoxW(None, '这是一个提示框', '提示', MB_OK)
#
# # 处理消息框的返回结果
# if result == 1:  # 用户点击了确认按钮
#     print('用户点击了确认按钮')
# else:  # 用户点击了其他按钮或关闭了窗口
#     print('用户点击了其他按钮或关闭了窗口')
# endregion

# region lambda表达式和高阶函数
# lst = [2, 4, 6, 8, 10]
# print(reduce(lambda x, y: x + y, lst))
# max = reduce(lambda x, y: x if x > y else y, lst)
# print(max)
# min = reduce(lambda x, y: x if x < y else x, lst)
# print(min)
#
# b = lambda x: "Even" if x % 2 == 0 else "Odd"
# print(b(2))
#
# students = [
#     {
#         "name": "John Doe",
#         "father name": "Robert Doe",
#         "Address": "123 Hall street"
#     },
#     {
#         "name": "Rahul Garg",
#         "father name": "Kamal Garg",
#         "Address": "3-Upper-Street corner"
#     },
#     {
#         "name": "Angela Steven",
#         "father name": "Jabob steven",
#         "Address": "Unknown"
#     }
# ]
# print(list(map(lambda student: student['name'], students)))
#
# fruits = ['mango', 'apple', 'orange', 'cherry', 'grapes']
# res = list(filter(lambda fruit: 'g' in fruit, fruits))
# print(res)
# endregion

# region 日志记录
# logging.basicConfig(filename='request.log', level=logging.DEBUG,
#                     format='%(asctime)s %(levelname)s: %(message)s')
#
# # 记录日志
# logging.debug('这是一个调试级别的日志')
# logging.info('这是一个信息级别的日志')
# logging.warning('这是一个警告级别的日志')
# logging.error('这是一个错误级别的日志')
# logging.critical('这是一个严重错误级别的日志')
# endregion

# region 线程
# def testLog():
#     try:
#         print((1 / 0))
#     except Exception as ex:
#         logging.error(ex)
#
# testLog()
#
# def task1():
#     for _ in range(3):
#         print('task1正在运行')
#         sleep(1)
#
#
# def task2():
#     for _ in range(3):
#         print('task2正在运行')
#         sleep(1)
#
#     # if __name__ == "__main__":
# t1 = threading.Thread(target=task1)
# t2 = threading.Thread(target=task2)
#
# t1.start()
# t2.start()
# endregion
