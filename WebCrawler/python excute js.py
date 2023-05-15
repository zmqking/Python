# -*- coding: utf-8 -*-
"""
@File    : python excute js.py
@Time    : 5/15/2023 9:56 PM
@Author  : king
@Desc    : 
"""


import execjs

print(execjs.eval("Date.now()"))

js_code = '''
    function test(obj){
        return obj;
    }

'''
res = execjs.compile(js_code).call('test','123')
print(res)