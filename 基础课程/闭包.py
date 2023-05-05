# -*- coding: utf-8 -*-
"""
@File    : 闭包.py
@Time    : 4/7/2023 8:52 PM
@Author  : king
@Desc    : 
"""


# def func1(x):
#     def func2(y):
#         return x * y
#
#     return func2
#
#
# res = func1(3)
#
# print(res(2))


# def func1(x):
#     a = 5
#
#     def func2():
#         return x * a
#
#     return func2
#
#
# func2 = func1(3)
# print(func2())


#父类方法
def func(a):
    #内部方法
    def innerfunc(b):
        return a + b

    return innerfunc


res = func(1)
print(res(2))
