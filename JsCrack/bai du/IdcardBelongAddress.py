import json
import time

import execjs
import requests
import random

# 预定义的 User-Agent 列表
user_agents = [
    # Android设备
    'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 9; ONEPLUS A6000) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 12; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36',

    # iOS设备
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPad; CPU OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1'
]

url = 'https://gwgp-3hmyv5v7mbb.i.bdcloudapi.com/idquery'


def get_headers():
    return {
        'User-Agent': random.choice(user_agents),
        'Content-type': 'application/json;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Connection': 'keep-alive',
    }


def get_timestamp():
    js = execjs.compile(open('jsParams.js', encoding='utf-8').read())
    return js.call('entry')


def get_idcard_info(jsonData):
    timestamp = get_timestamp()
    print(timestamp)
    heads = get_headers()
    heads['Timestamp'] = timestamp
    res = requests.post(url, headers=heads, json=jsonData).json()
    return res


def post_idcard(idcards):
    str_json = []
    for idcard in idcards.split(','):
        jsonData = {}
        jsonData["idNumber"] = idcard
        idcard_info = get_idcard_info(jsonData)
        str_json.append(f'{idcard}:{idcard_info["province"]}{idcard_info["city"]}{idcard_info["county"]}')
        time.sleep(1)
    return str_json


if __name__ == '__main__':
    ids = input('please input idcards：')
    print(post_idcard(ids))
