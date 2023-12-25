# -*- coding: UTF-8 -*-
# Project -> File:Python -> functionModel 
# Author:king
# Date:12/21/2023


import requests

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = 'chat_id=418345555&text=god bless u.'

proxies = {
    'http': 'http://127.0.0.1:7890',
    'https': 'http://127.0.0.1:7890',
}

response = requests.post(
    'https://api.telegram.org/bot6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw/sendMessage',
    headers=headers,
    data=data,
    verify=False,
    proxies=proxies
)