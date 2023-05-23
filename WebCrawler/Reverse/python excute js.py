# -*- coding: utf-8 -*-
"""
@File    : python excute js.py
@Time    : 5/15/2023 9:56 PM
@Author  : king
@Desc    : 
"""


# import execjs
#
# print(execjs.eval("Date.now()"))
#
# js_code = '''
#     function test(obj){
#         return obj;
#     }
#
# '''
# res = execjs.compile(js_code).call('test', '123')
# print(res)
#
# # 外部js调用
# js = ''
# with open('外部调用js.js', 'r')as f:
#     js = f.read()
#
# res = execjs.compile(js).call('test', 2, 2)
# print(res)
