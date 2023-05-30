# -*- coding: UTF-8 -*-
# Project -> File:Python -> test 
# Author:king
# Date:2023/5/29


import requests
import urllib.parse

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
    "sign": "4484d01ac1fab850128bfc3902d5395e3098b4eb97856fa894a1e5126788400e",
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
    "search": "jobarea^%^7E^%^60^%^7C^%^21recentSearch0^%^7E^%^60000000^%^A1^%^FB^%^A1^%^FA000000^%^A1^%^FB^%^A1^%^FA0000^%^A1^%^FB^%^A1^%^FA00^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA9^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA0^%^A1^%^FB^%^A1^%^FAc^%^23^%^A1^%^FB^%^A1^%^FA2^%^A1^%^FB^%^A1^%^FA1^%^7C^%^21recentSearch1^%^7E^%^60000000^%^A1^%^FB^%^A1^%^FA000000^%^A1^%^FB^%^A1^%^FA0000^%^A1^%^FB^%^A1^%^FA00^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA9^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA0^%^A1^%^FB^%^A1^%^FAjava^%^A1^%^FB^%^A1^%^FA2^%^A1^%^FB^%^A1^%^FA1^%^7C^%^21recentSearch2^%^7E^%^60000000^%^A1^%^FB^%^A1^%^FA000000^%^A1^%^FB^%^A1^%^FA0000^%^A1^%^FB^%^A1^%^FA00^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA9^%^A1^%^FB^%^A1^%^FA99^%^A1^%^FB^%^A1^%^FA^%^A1^%^FB^%^A1^%^FA0^%^A1^%^FB^%^A1^%^FAc^%^A1^%^FB^%^A1^%^FA2^%^A1^%^FB^%^A1^%^FA1^%^7C^%^21",
    "acw_tc": "ac11000116853482873336233e00dd140cae8edc76b5c6f2d207e0f89e64c8",
    "acw_sc__v2": "64745fbfebc5daaac4079a1ca6523da94d10dedd",
    "JSESSIONID": "0C519010FCAB5758403B4DF212BD5DBE",
    "ssxmod_itna": "YqRxcQ0QG=iQDQD8bDX+=8kx02m+qKdGqrOGKODlcm4WKGkD6DWP0WWRrkNWqNhzjx0=fQlAbq4V7olxLpNcWlOXxWDCPGnGpB8wLD44GTDt4DTD34DYDixib0DivdDjxGpc2EHX=DEDYpcAxDmDGAc3qDgDYQDGqDnn4G2D7UcFYh5Fui6WnpopdxqkAhcD0U3xBdqW1T5H6c5Ru0rdPia3qGynPGufuPZGObDC26Zjqis+ipbA0f=A0DFbAh=YY4mK2vPeo+hzDkQWfx0s0qeRBecsDDAG7CQK7DxD",
    "ssxmod_itna2": "YqRxcQ0QG=iQDQD8bDX+=8kx02m+qKdGqrOGKD6p+mD0vxr403=oqutNNeDylBf2j5u9B452=eG=jFeHd8Ujhi+TErCriqbqKEOX61kjxCi4wMcnBGfPN+lZGReqNi1bHoB8aN9yrWKeueFee2cbGmukoGKHKPxHrxotCO58fpBHn0FOB7n5ulAz4=8x+SmzorBreaEHuiwFphAdDnb4oim6eGqOknGde1B6hnmFBtlQNOM1=cDupCC2lo82BpqcLalHcaCCKOkqAcvBa5IBfoWB9npBnlg6i5MklFTZ=GqvRMKM/+Xi0xS8G8/RbeviFvl0rliBZKAi9v6ATZiw4vB9jP94HctYPrHWRw6fFB/TBSFZDH2RA32PdsEYMy6QElGOZAEdPotkoN6OBSEtuY3OHKpOulg3wOT3r=uqrbAQbxDKkqdGDdBPWrWZ0+rBdW2Yqbeomxci4qA=qYYrj5s6jP735S5cYxfErr7efaLK7U9i1GYY5S6KYhkA51GxLaWqthDFLiA1DwUZBtz=0+4xto3uxLZ0D3tbNcidLr3K4Ni=ki0CDDLxD249qA4zsGFzi4QjH4MzeF/niiKh0Y0xS2=4bN+=pNU8LZW4/qlGzu6jvb/Db6XtaRf=tqiA+DD="
}
url = "https://we.51job.com/api/job/search-pc"
params = {
    "api_key": "51job",
    "timestamp": "1685350526",
    "keyword": "c",
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

response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
# print(response)


# param = urllib.parse.urlencode(params)
# tempUrl = f"/api/job/search-pc?{param}"
# print(tempUrl)