# -*- coding: utf-8 -*-
"""
@File    : b站.py
@Time    : 5/5/2023 8:17 PM
@Author  : king
@Desc    : 
"""
# import asyncio
# import aiohttp
# import time
# import os
import requests
import pymysql
from lxml import etree

head = {
    "authority": "api.bilibili.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3",
    "cache-control": "no-cache",
    "dnt": "1",
    "origin": "https://search.bilibili.com",
    "pragma": "no-cache",
    "referer": "https://search.bilibili.com/all?vt=51279634&keyword=^%^E9^%^93^%^B6^%^E6^%^B2^%^B3^%^E6^%^8A^%^A4^%^E5^%^8D^%^AB^%^E9^%^98^%^9F&search_source=1",
    "sec-ch-ua": "^\\^Chromium^^;v=^\\^112^^, ^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
}
cookies = {
    "nostalgia_conf": "-1",
    "buvid3": "56D0AAA9-D6E2-FB9B-AE16-46AA0DA1A2B478543infoc",
    "b_nut": "100",
    "_uuid": "CAB3C84A-10A92-9C410-FEE9-84EFA85CF2F1081971infoc",
    "rpdid": "^|(J~R^|~Yl~Jk0J'uYYmkmmYJJ",
    "buvid_fp_plain": "undefined",
    "i-wanna-go-back": "-1",
    "DedeUserID": "471955361",
    "DedeUserID__ckMd5": "4fc372de8fd65f4b",
    "CURRENT_QUALITY": "80",
    "CURRENT_FNVAL": "4048",
    "PVID": "1",
    "b_ut": "5",
    "header_theme_version": "CLOSE",
    "home_feed_column": "4",
    "buvid4": "A3AB58F6-FE8F-21B6-9191-D767712BDDCA80552-022102315-l1^%^2BOsuGKNV36rMBAXe^%^2FPbw^%^3D^%^3D",
    "fingerprint": "c4715043dbbffb2776e1114bf3c0e816",
    "buvid_fp": "8edb7292d8e856bcc42dd0741087147b",
    "CURRENT_PID": "9390e200-e727-11ed-ae2f-cd7db06c2585",
    "bp_video_offset_471955361": "790225982160109600",
    "b_lsid": "77BD7F34_187FB3A6A91",
    "SESSDATA": "d2846992^%^2C1699099120^%^2Cdda2d^%^2A52",
    "bili_jct": "9618262031be9de15cfa610ac9612df3",
    "sid": "7q7hli83",
    "FEED_LIVE_VERSION": "V8",
    "innersign": "1",
    "browser_resolution": "1278-1287"
}
params = {
    "__refresh__": "true",
    "_extra": "",
    "context": "",
    "page": "1",
    "page_size": "42",
    "order": "",
    "duration": "",
    "from_source": "",
    "from_spmid": "333.337",
    "platform": "pc",
    "highlight": "1",
    "single_column": "0",
    "keyword": "^%^E9^%^93^%^B6^%^E6^%^B2^%^B3^%^E6^%^8A^%^A4^%^E5^%^8D^%^AB^%^E9^%^98^%^9F",
    "qv_id": "Dp2fGAYdDIrhFYNpRDMFtmF6VC7jJV6C",
    "ad_resource": "5646",
    "source_tag": "3",
    "w_rid": "d7b7bab717a88c41f1afe5c3c06ade32",
    "wts": "1683551476"
}


def db_connect():
    db = pymysql.connect(host='localhost', user='root', passwd='123456')
    cursor = db.cursor()
    cursor.execute('select version()')
    data = cursor.fetchone()
    print(data)
    cursor.close()


def getHtml(url):
    import csv
    with open('b站.csv', 'a', encoding='utf-8', newline='')as f:
        file_names = ['作者', '地址', '描述', '类型']
        writer = csv.DictWriter(f, fieldnames=file_names)
        writer.writeheader()
        response = requests.get(url, headers=head, cookies=cookies, params=params)
        js = response.json()
        for item in js['data']['result']:
            if item['result_type'] == 'video':
                for dt in item['data']:
                    item = {'作者': dt['author'], '地址': dt['arcurl'], '描述': dt['description'], '类型': dt['typename']}
                    writer.writerow(item)


url = "https://api.bilibili.com/x/web-interface/wbi/search/all/v2"
getHtml(url)

# db_connect()
