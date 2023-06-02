# -*- coding: utf-8 -*-
"""
@File    : GetBiddings.py
@Time    : 5/31/2023 9:34 PM
@Author  : king
@Desc    : 
"""
import requests
import execjs
import json

cookies = {
    '__jsluid_s': '4236d6684d0aa7a41c58c41d02d7a117',
    'SUNWAY-ESCM-COOKIE': '7d969bab-c3f6-4087-b71a-b414d2fa5391',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': '__jsluid_s=4236d6684d0aa7a41c58c41d02d7a117; SUNWAY-ESCM-COOKIE=7d969bab-c3f6-4087-b71a-b414d2fa5391',
    'DNT': '1',
    'Origin': 'https://ec.minmetals.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/public',
    cookies=cookies,
    headers=headers
)
rkey = response.text
json_data = {}
jsText = ''
with open('./jsFunction.js', 'r', encoding='utf8')as f:
    jsText = f.read()
cypt = execjs.compile(jsText).call('getCypt', rkey, 1)
json_data['param'] = cypt

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
)

print(response.text)
