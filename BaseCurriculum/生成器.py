# -*- coding: utf-8 -*-
"""
@File    : 生成器.py
@Time    : 4/5/2023 10:53 AM
@Author  : king
@Desc    : 
"""


# def func(a):
#     a = a + 4
#     yield a
#     a = a - 8
#     yield a
#
#
# g = func(26)
# res1 = next(g)
# print(res1)
# res2 = next(g)
# print(res2)

# def buildodd():
#     i = 1
#     while i < 10:
#         # if i % 2 != 0:
#         yield i
#         i += 2
#
#
# g = buildodd()  # 返回
# print(g)
# res1 = next(g)
# print(res1)
# res2 = next(g)
# print(res2)


def buildnums():
    num = 1
    while num <= 10:
        if num not in (3, 7, 8):
            yield num
        num += 1


g = buildnums()
for i in g:
    print(i)


# def odd_numbers():
#     num = 1
#     while num <= 10:
#         if num % 2 != 0:
#             yield num
#             num += 1
#
#
# # 使用 for 循环迭代生成器
# for num in odd_numbers():
#     print(num)
#
# # 使用 next() 函数迭代生成器
# gen = odd_numbers()
# print(next(gen))
# print(next(gen))
# print(next(gen))
