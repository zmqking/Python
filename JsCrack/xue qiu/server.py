# -*- coding: UTF-8 -*-
# Project -> File:Python -> server 
# Author:king
# Date:2/20/2024

import requests


headers = {
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "DNT": "1",
    "Pragma": "no-cache",
    "Referer": "https://xueqiu.com/today",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "^\\^Not",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^"
}
cookies = {
    "xqat": "f5e826d5be1c4265b380bc7d743963f24729480d",
}
url = "https://xueqiu.com/statuses/hot/listV2.json"
params = {
    "since_id": "-1",
    "max_id": "-1",
    "size": "15"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)

