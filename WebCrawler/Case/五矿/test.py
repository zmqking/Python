# -*- coding: UTF-8 -*-
# Project -> File:Python -> test 
# Author:king
# Date:2023/6/1
import requests

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

json_data = {
    'param': 'RcDNEI+6+xtnQ2gwWtqe651/C5jPTH+Jc+EHyzV6CPp80vqS/BJxoA5f+kBPpWvL5P0ufRequAzs77Viad6aJbY3dMdv1dO4fErbzQB7m/1jCJtb9T4UwEqRS2Owxs7pS3U1xhgGE8/WRIzUzIiEUXn6Ij/6MpzQYcJoONs+u4ZAlQCEY7EMemW6iQKnQf1NuKkmWrj6EPWCU9Dvbd6O+uDDwloEUki6pKJIwk24lniojjQzVAbyIvWOVfCh+17Rc2VL8300t6txoD0cb+WpAvIWrM7N+zjOFLbWMVpyciN8SL+9TLJRZaa30IAkUIbAyWJX4jUqKueLVIKizPQQvDnSqv0e5tpJ3TMyknWlf5l2hNpqRHJ9DYOdWjUPq+jdT0U4L6+JFM5z4DBFNfkNCM/9vv3IEk6OWMBcTuZsqJco3EyCEQMV0qNIbHC8+y/hc6XcNN5hqvyoB6uC6BLCRAQKO/Zqk5W7VrGz75Y8ozoNmQqgQfqAq2qU0/V3FYBsEkncd01Gh+7yNGHeh0Au9eEGALvPkUmTg4OoYgBYwApSEUdh2SO1vzmVoGDi8Vbje4p6xekCBc0tueiMcYVmx54+YiRGR17ice41oJKt5KV4f7ZQ2oDUvWSJeSgR6MrGikfPLxNFMdFToXGOLzmN+vj+Z3K1BNeDuB94hwogRmk=',
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
)
print(response.text)