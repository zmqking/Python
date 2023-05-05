# -*- coding: utf-8 -*-
"""
@File    : 线程.py
@Time    : 3/26/2023 9:34 PM
@Author  : king
@Desc    : 
"""
import threading
from time import sleep, ctime


def sing(name):
    for i in range(3):
        print(f'{name}正在唱歌：{i}')
        sleep(1)


def dance(name):
    for i in range(3):
        print(f'{name}正在跳舞：{i}')
        sleep(1)


if __name__ == "__main__":
    print(f'程序开始：{ctime()}')
    t1 = threading.Thread(target=sing, name='唱歌', args=('test',))
    t2 = threading.Thread(target=dance, name='跳舞', args=('jay',))
    t1.start()
    t2.start()
    print(f'程序结束：{ctime()}')
