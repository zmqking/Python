# -*- coding: utf-8 -*-
"""
@File    : 代理.py
@Time    : 4/18/2023 9:43 PM
@Author  : king
@Desc    : 
"""
import requests

url = "http://httpbin.org/ip"
proxy = {"http": "http://185.147.35.240:80"}

response = requests.get(url, proxies=proxy)
print(response.text)
