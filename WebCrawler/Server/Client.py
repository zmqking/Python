# -*- coding: UTF-8 -*-
# Project -> File:Python -> Client 
# Author:king
# Date:2023/5/24


import requests

params = {
    'name': 'king'
}
response = requests.get('http://127.0.0.1:8080/user', params=params)
print(response.text)