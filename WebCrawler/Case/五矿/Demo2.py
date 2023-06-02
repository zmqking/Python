# -*- coding: UTF-8 -*-
# Project -> File:Python -> Demo2 
# Author:king
# Date:2023/6/1

import requests
import execjs

# import pyexecjs2


# cookie加密  加速乐  gov
cookies = {
    '__jsluid_s': 'e9fa4257ab65421b48504304a35cf14b',
    'SUNWAY-ESCM-COOKIE': '4b0cfe11-ea16-4c10-a299-35065d9f5c55',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': '__jsluid_s=e9fa4257ab65421b48504304a35cf14b; SUNWAY-ESCM-COOKIE=4b0cfe11-ea16-4c10-a299-35065d9f5c55',
    'Origin': 'https://ec.minmetals.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info/?tablndex=1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-GPC': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
}
rkey = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers).text

param = execjs.compile(open('./demo2.js', 'r', encoding='utf8').read()).call('main123', rkey, 3)
json = open('./Demo2.js', 'r', encoding='utf8').read()
# json = json.replace('\xa0','')
# param = execjs.compile(json).call('main123')
# print(param)
# 第一个问题: 分页操作采集采集 请求体是加密的
# 业务: 逆向  1. 找到对应的加密方法   2. 明文数据是什么样的
json_data = {
    'param': param
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()
print(response)
