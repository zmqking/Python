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


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "DNT": "1",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "__jsluid_s": "7390eff962eefc6da1c72f9454597476",
    "__jsluid_h": "62fc7aeb6ba1f45f5abeb8fe1500c8f7",
    "SUNWAY-ESCM-COOKIE": "06e329e4-6c02-4529-8c6b-a9965c3032ee",
    "JSESSIONID": "5D7B91C70C27628BFB8F8EC5CBD3C786"
}
url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"
# data = {
#     "param": "h0WWO8x5vB6S3qxFRFmkrdSXT3LcKBUo7RGMD5u1z2d808CM39icy0RB6PRZJR3SSYNn+RfQD44XPMH4LHERiHI6ayG3nrhMNj55XD8iDlxT0APQ482RTJnJBI+05rRj4LkFOgukZFaNDZ2Zni97Mv7iBcxvHme0qneI84eIehtolxnSbuM9E3BTiO0NHIWKjhzCgww1dcnRoMwELLoCrEnpui7RDuwt+bQXsY7R/ZXaYHdms9Uy5AUXNB1LfeHlwOrvE5mfkW6a1LzTpcN92QN7ujFvsILPsgwvfZkXrWVqp/BgMd5qLIfBAAaSuZ3CDEZhzsuLLtzNGFEqsBpQuRMiyGaz/T+eIvbCywyq97pyeB+xlAvSK4QgHjvN+soB9RkGN2ao4s1R4Oh1l+T6eq2/lBb38y8r6gHth5UMz7WY2klj7UnnlevcoOOWgFKWC+G3OnMVaSYFed6v11oRTyUbQm0LAbmVYz4KelWukYjQjEEw21f+0larMYqzjpM4c35YyxM7R9PM6o31xdWINQGPZaUgPjOkKZ/TZ0bb6KSYGEng5qfke5gdLrq2qXdASwphvh27BeKz+4nXgdubg2r+NtDGZ7/3+4E5ux4EY0pMbHJzM6raISggxOhXFa+Os7bS3zagNU0CeEVFtRGCBqJfzzwC8QuOziC503dr/wQ="
# }
# response = requests.post(url, headers=headers, cookies=cookies, data=data)

# print(response.text)
# print(response)



data = {}
jsText = ''
with open('111.js', 'r', encoding='utf-8')as f:
    jsText = f.read()
    if bool(jsText):
        jsText = jsText.replace('\xa0', '')
cypt = execjs.compile(jsText).call('getCypt')
data['param'] = str(cypt)
# data = json.dumps(data, separators=(',', ':'))

response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
# print(response)
