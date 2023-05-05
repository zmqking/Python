# -*- coding: utf-8 -*-
"""
@File    : 迭代器.py
@Time    : 4/5/2023 10:42 AM
@Author  : king
@Desc    : 
"""
obj_iter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
obj_next = obj_iter.__iter__()
print(obj_next.__next__())
print(obj_next.__next__())

for i in obj_iter:
    print(i)

for i in obj_next:
    print(i)
