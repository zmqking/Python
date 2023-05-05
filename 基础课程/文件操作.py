# -*- coding: utf-8 -*-
"""
@File    : 文件操作.py
@Time    : 4/14/2023 10:00 PM
@Author  : king
@Desc    : 
"""


# def readText(path):
#     try:
#         txt = '1'
#         file_obj = open(path, 'r', 100, 'utf-8')
#         while txt != '':
#             txt = file_obj.readline()
#             print(txt)
#
#     except Exception as e:
#         print(e)
#     finally:
#         file_obj.close()  # 关闭文件对象
#
#
# readText("E://New Text Document.txt")

#
# class Test:
#     def __enter__(self):
#         print('开始运行')
#     def __exit__(self, exc_type, exc_val, exc_tb):
#         print('结束了')

# path = "E://New Text Document.txt"
# with open(path, 'r', 100, 'utf-8') as f:
#     print(f.readline())


def extractcharter():
    try:
        str_1 = 'd52a733i2327ha244i982d23s553b245'
        raise NameError
    except Exception as e:
        for i in str_1:
            if i.islower():
                print(i)


extractcharter()
