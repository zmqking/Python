# -*- coding: utf-8 -*-
"""
@File    : test.py
@Time    : 5/13/2023 3:15 PM
@Author  : king
@Desc    : 
"""
# import execjs

# print(execjs.eval('Date.now()'))

arrayA = [1, 3, 87, 28, 90]
arrayB = [1, 96, 87, 8, 90]

def getTextToC():
    return 'from python';

def findSameOrDiff():
    diff = []
    same = []
    for a in arrayA:
        for b in arrayB:
            if a == b:
                same.append(a)

    arrayA.extend(arrayB)
    for i in arrayA:
        if same.count(i) == 0:
            diff.append(i)
    print(f'相同:{same}')
    print(f'不同:{diff}')


findSameOrDiff()

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
