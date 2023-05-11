# -*- coding: utf-8 -*-
"""
@File    : 进程.py
@Time    : 4/29/2023 9:41 AM
@Author  : king
@Desc    : 
"""
# import time
# from multiprocessing import Process
#
#
# def test1():
#     print("这是第一个进程")
#     time.sleep(1)
#
#
# def test2():
#     print("这是第二个进程")
#     time.sleep(1)
#
#
# if __name__ == '__main__':
#     p1 = Process(target=test1)
#     p2 = Process(target=test2)
#
#     p1.start()
#     p2.start()


# import time
# from multiprocessing import Process
#
#
# def test1():
#     print('这是由进程调用的代码！')
#     time.sleep(1)
#
#
# if __name__ == "__main__":
#     p = Process(target=test1)
#
#     p.start()


import time
from multiprocessing import Process, Queue


def test1(q):
    q.put('1')
    print('这是进程执行的第一个方法')
    print('传递了1')
    time.sleep(1)


def test2(q):
    print('这是进程执行的另一个方法')
    if not q.empty():
        val = q.get()
        print(f'拿到了test1进程传递的值:{val}')
    # time.sleep(1)


if __name__ == '__main__':
    q = Queue(1)
    p1 = Process(target=test1, args=(q,))
    p2 = Process(target=test2, args=(q,))

    p1.start()
    p1.join()
    p2.start()
