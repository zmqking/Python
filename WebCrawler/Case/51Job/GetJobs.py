# -*- coding: UTF-8 -*-
# Project -> File:Python -> GetJobs 
# Author:king
# Date:2023/5/29

import requests
import execjs
import urllib.parse
import time

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "DNT": "1",
    "From-Domain": "51job_web",
    "Pragma": "no-cache",
    "Referer": "https://we.51job.com/pc/search?keyword=c",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "account-id": "",
    "partner": "www_baidu_com",
    "property": "^%^7B^%^22partner^%^22^%^3A^%^22www_baidu_com^%^22^%^2C^%^22webId^%^22^%^3A2^%^2C^%^22fromdomain^%^22^%^3A^%^2251job_web^%^22^%^2C^%^22frompageUrl^%^22^%^3A^%^22https^%^3A^%^2F^%^2Fwe.51job.com^%^2F^%^22^%^2C^%^22pageUrl^%^22^%^3A^%^22https^%^3A^%^2F^%^2Fwe.51job.com^%^2Fpc^%^2Fsearch^%^3Fkeyword^%^3Dc^%^23^%^26searchType^%^3D2^%^26sortType^%^3D0^%^26metro^%^3D^%^22^%^2C^%^22identityType^%^22^%^3A^%^22^%^22^%^2C^%^22userType^%^22^%^3A^%^22^%^22^%^2C^%^22isLogin^%^22^%^3A^%^22^%^E5^%^90^%^A6^%^22^%^2C^%^22accountid^%^22^%^3A^%^22^%^22^%^7D",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sign": "fa39415d40c4eca2dd5d1a6904f4753486e4900f6a31386fc1ba970a1b4306e9",
    "user-token": "",
    "uuid": "fd6b4ae02c446a3714f2765e2d241b5a"
}
cookies = {
    "partner": "www_baidu_com",
    "seo_refer_info_2023": "^%^7B^%^22referUrl^%^22^%^3A^%^22https^%^3A^%^5C^%^2F^%^5C^%^2Fwww.baidu.com^%^5C^%^2Flink^%^3Furl^%^3DG3U34w0BREgXx4wYhNZh46r7PcMG652IgTtRloPjJvm^%^26wd^%^3D^%^26eqid^%^3Dc1b9d1a1000892f20000000664744934^%^22^%^2C^%^22referHost^%^22^%^3A^%^22www.baidu.com^%^22^%^2C^%^22landUrl^%^22^%^3A^%^22^%^5C^%^2F^%^5C^%^2Fwww.51job.com^%^5C^%^2F^%^22^%^2C^%^22landHost^%^22^%^3A^%^22www.51job.com^%^22^%^2C^%^22partner^%^22^%^3Anull^%^7D",
    "privacy": "1685342519",
    "guid": "fd6b4ae02c446a3714f2765e2d241b5a",
    "sajssdk_2015_cross_new_user": "1",
    "sensorsdata2015jssdkcross": "^%^7B^%^22distinct_id^%^22^%^3A^%^22fd6b4ae02c446a3714f2765e2d241b5a^%^22^%^2C^%^22first_id^%^22^%^3A^%^22188663e0eb3f09-0c8c77657ca9f7-26031a51-2073600-188663e0eb41172^%^22^%^2C^%^22props^%^22^%^3A^%^7B^%^22^%^24latest_traffic_source_type^%^22^%^3A^%^22^%^E8^%^87^%^AA^%^E7^%^84^%^B6^%^E6^%^90^%^9C^%^E7^%^B4^%^A2^%^E6^%^B5^%^81^%^E9^%^87^%^8F^%^22^%^2C^%^22^%^24latest_search_keyword^%^22^%^3A^%^22^%^E6^%^9C^%^AA^%^E5^%^8F^%^96^%^E5^%^88^%^B0^%^E5^%^80^%^BC^%^22^%^2C^%^22^%^24latest_referrer^%^22^%^3A^%^22https^%^3A^%^2F^%^2Fwww.baidu.com^%^2Flink^%^22^%^7D^%^2C^%^22identities^%^22^%^3A^%^22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjYzZTBlYjNmMDktMGM4Yzc3NjU3Y2E5ZjctMjYwMzFhNTEtMjA3MzYwMC0xODg2NjNlMGViNDExNzIiLCIkaWRlbnRpdHlfbG9naW5faWQiOiJmZDZiNGFlMDJjNDQ2YTM3MTRmMjc2NWUyZDI0MWI1YSJ9^%^22^%^2C^%^22history_login_id^%^22^%^3A^%^7B^%^22name^%^22^%^3A^%^22^%^24identity_login_id^%^22^%^2C^%^22value^%^22^%^3A^%^22fd6b4ae02c446a3714f2765e2d241b5a^%^22^%^7D^%^2C^%^22^%^24device_id^%^22^%^3A^%^22188663e0eb3f09-0c8c77657ca9f7-26031a51-2073600-188663e0eb41172^%^22^%^7D",
    "nsearch": "jobarea^%^3D^%^26^%^7C^%^26ord_field^%^3D^%^26^%^7C^%^26recentSearch0^%^3D^%^26^%^7C^%^26recentSearch1^%^3D^%^26^%^7C^%^26recentSearch2^%^3D^%^26^%^7C^%^26recentSearch3^%^3D^%^26^%^7C^%^26recentSearch4^%^3D^%^26^%^7C^%^26collapse_expansion^%^3D",
    "acw_tc": "ac11000116853446266058829e00de4ed40650971bca6ae6ea819385576d8e",
    "acw_sc__v2": "64745172a626d83b9a4c1b4bda4da3f7e6292d2c",
    "search": "jobarea^%^7E^%^60^%^7C^%^21recentSearch0^%^7E^%^60000000^%^A1^%^FB^%^A1^%^FA000000^%^A1^%^FB^%^A1^%^FA0000^%^A1^%^FB^%^A1^%^FA00^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA9^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA0^%^A1^%^FB^%^A1^%^FAjava^%^A1^%^FB^%^A1^%^FA2^%^A1^%^FB^%^A1^%^FA1^%^7C^%^21recentSearch1^%^7E^%^60000000^%^A1^%^FB^%^A1^%^FA000000^%^A1^%^FB^%^A1^%^FA0000^%^A1^%^FB^%^A1^%^FA00^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA9^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA0^%^A1^%^FB^%^A1^%^FAc^%^A1^%^FB^%^A1^%^FA2^%^A1^%^FB^%^A1^%^FA1^%^7C^%^21",
    "JSESSIONID": "66E9DC61B3E9389DF6F34F1CF297953C",
    "ssxmod_itna": "YqRxcQ0QG=iQDQD8bDX+=8kx02m+qKdGqrWkoKODlcA4WKGkD6DWP0WWurkNWqN4Z7qGkFOBrpKeD98BwFQhf2YWsqADB3DEPdx9K7xeeDvDCeDIDWeDiDG4Gm+xGUHD7qDdjpHyUkDbxi3jaqDYxDrjOKDRxi7DD5DA6PDwx0Cj6i4N09hk6BdWtH459iqjxG1F40HKj3vNRfLNAyhm88GL7KDX6dDvOydMPqpDBRkl1HGVe23pi2akihx6miqkiieo=RNdYbeeZi97jWqhVG5YmxP3x=DixxgH=GDD",
    "ssxmod_itna2": "YqRxcQ0QG=iQDQD8bDX+=8kx02m+qKdGqrWkoKD6E+mD0y94x03Pq9=YPrX=nD8xyIHBD8GKrwrb/3riDynl50v=SOCh6HN4tjAH8iZPloxR4vKl5rfjrVU36U3KlbzH+5vyeAWG2xriQEHqWZWhdcHqKhB1H=B+QxehNUrmP/vWPtOG5U7wd9PpZawCSOfw/aFsHzS1VZcfXtkC233Iy2Wz0KIzYx7sNrM0RtCCKOl8Zxjf8rjXyZjObuS7MrMmf9j0rdH8PUjzoXAyUaz8=Q9AVAuwlE/4yZeXMaVpcd7/bpXFcNDt/yUSqDgTIBucGW/47LBuOD+Veu17BOSbHG0qB4=/2DRAFj+N7Rk4x=7R7/D=iRO+0pn4ezrem4bmHe7+FKuPQ7rBHTbDZ84ogcD/hiE7YrANYSKuYNEEtOAbngPyYoWxDKTKe7x0ii=GDifw8oLk=EklL+lD+E=1OxN0pcnKd7DkBQK+K6Z6ebz9Pw+6d5D4jjjZ=oHnDNGL12DiEKHhocCq=A=V72=KUK86EnxkmxdpeQfjoD3+juPGDD7=DYFqB+h+Dzgb4907UbkbrL5Sz5xHY0xGb4jwS7ZqGb0dtHIhN9Zqli0v1LLdwRAkvUhB8qB3xRAheD=="
}
url = "https://we.51job.com/api/job/search-pc"
params = {
    "api_key": "51job",
    "timestamp": 0,
    "keyword": "",
    "searchType": "2",
    "function": "",
    "industry": "",
    "jobArea": "000000",
    "jobArea2": "",
    "landmark": "",
    "metro": "",
    "salary": "",
    "workYear": "",
    "degree": "",
    "companyType": "",
    "companySize": "",
    "jobType": "",
    "issueDate": "",
    "sortType": "0",
    "pageNum": "1",
    "requestId": "",
    "pageSize": "20",
    "source": "1",
    "accountId": "",
    "pageCode": "sou|sou|soulb"
}


def getJsText():
    global js
    js = ''
    with open('jsFunction.js', 'r')as f:
        js = f.read()
    return js


resJs = getJsText()
while True:
    txt = input('请输入要查询的工作名称：')
    params["keyword"] = txt
    params["timestamp"] = int(time.time())
    param = urllib.parse.urlencode(params)
    tempUrl = f"/api/job/search-pc?{param}"
    print(tempUrl)
    sign = execjs.compile(resJs).call('stringify', tempUrl)
    headers["sign"] = sign
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
