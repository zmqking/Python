# -*- coding: utf-8 -*-
"""
@File    : 装饰器.py
@Time    : 4/7/2023 8:52 PM
@Author  : king
@Desc    : 
"""
import time


def time_it(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f'{func.__name__} 耗时：{end_time - start_time:4f}秒')
        return result

    return wrapper


@time_it
def my_func(x, y):
    time.sleep(1)
    return x + y


print(my_func(2, 3))
