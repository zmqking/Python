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


from time import sleep, ctime
import threading


def task1():
    for _ in range(3):
        print('task1正在运行')
        sleep(1)


def task2():
    for _ in range(3):
        print('task2正在运行')
        sleep(1)

    # if __name__ == "__main__":
t1 = threading.Thread(target=task1)
t2 = threading.Thread(target=task2)

t1.start()
t2.start()

