# -*- coding: UTF-8 -*-
# Project -> File:Python -> ChitChat 
# Author:king
# Date:2023/5/17

import time
import pymongo

import asyncio
import aiohttp
import requests

cookies = {
    'token': 'Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MTM1LCJyZWdpc3Rlcl90eXBlIjoib2F1dGgyIiwiYXBwX25hbWUiOiJzaWRlcl9jaHJvbWUiLCJpc3MiOiJnb2NoaXRjaGF0LmFpIiwiYXVkIjpbIiJdLCJleHAiOjE2ODUyNTcxNzUsIm5iZiI6MTY4MjY2NTE3NSwiaWF0IjoxNjgyNjY1MTc1fQ.ZWhzcWd9Dlr8QrUvPNykTiSf29IyThZn87VHi2bE9rs',
    'refresh_token': 'Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MTM1LCJyZWdpc3Rlcl90eXBlIjoib2F1dGgyIiwiYXBwX25hbWUiOiJzaWRlcl9jaHJvbWUiLCJpc3MiOiJnb2NoaXRjaGF0LmFpIiwiYXVkIjpbIiJdLCJleHAiOjE2ODc4NDkxNzUsIm5iZiI6MTY4MjY2NTE3NSwiaWF0IjoxNjgyNjY1MTc1fQ.o80GfDihn_QViZyGw2gZppMoqXnJhncZhM1bI3758fY',
    'userinfo-avatar': 'https://chitchat-avatar.s3.amazonaws.com/f6a826e805924a838937038945d6d771-1681620709.png',
    'userinfo-name': 'Page%20Brin',
    'userinfo-type': 'oauth2',
}

headers = {
    'authority': 'gochitchat.ai',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MTM1LCJyZWdpc3Rlcl90eXBlIjoib2F1dGgyIiwiYXBwX25hbWUiOiJzaWRlcl9jaHJvbWUiLCJpc3MiOiJnb2NoaXRjaGF0LmFpIiwiYXVkIjpbIiJdLCJleHAiOjE2ODUyNTcxNzUsIm5iZiI6MTY4MjY2NTE3NSwiaWF0IjoxNjgyNjY1MTc1fQ.ZWhzcWd9Dlr8QrUvPNykTiSf29IyThZn87VHi2bE9rs',
    'cache-control': 'no-cache',
    # 'cookie': 'token=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MTM1LCJyZWdpc3Rlcl90eXBlIjoib2F1dGgyIiwiYXBwX25hbWUiOiJzaWRlcl9jaHJvbWUiLCJpc3MiOiJnb2NoaXRjaGF0LmFpIiwiYXVkIjpbIiJdLCJleHAiOjE2ODUyNTcxNzUsIm5iZiI6MTY4MjY2NTE3NSwiaWF0IjoxNjgyNjY1MTc1fQ.ZWhzcWd9Dlr8QrUvPNykTiSf29IyThZn87VHi2bE9rs; refresh_token=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MTM1LCJyZWdpc3Rlcl90eXBlIjoib2F1dGgyIiwiYXBwX25hbWUiOiJzaWRlcl9jaHJvbWUiLCJpc3MiOiJnb2NoaXRjaGF0LmFpIiwiYXVkIjpbIiJdLCJleHAiOjE2ODc4NDkxNzUsIm5iZiI6MTY4MjY2NTE3NSwiaWF0IjoxNjgyNjY1MTc1fQ.o80GfDihn_QViZyGw2gZppMoqXnJhncZhM1bI3758fY; userinfo-avatar=https://chitchat-avatar.s3.amazonaws.com/f6a826e805924a838937038945d6d771-1681620709.png; userinfo-name=Page%20Brin; userinfo-type=oauth2',
    'dnt': '1',
    'pragma': 'no-cache',
    'referer': 'https://gochitchat.ai/mychats',
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
}


# region 普通下载
# def getData():
#     params = {
#         'page': '{}',
#         'page_size': '12',
#     }
#     list = []
#     i = 1
#     try:
#         while True:
#             params['page'] = '{}'.format(i)
#             response = requests.get('https://gochitchat.ai/api/v1/conversation/list/public', params=params,
#                                     cookies=cookies,
#                                     headers=headers)
#             jsons = response.json()
#             if bool(jsons['data']['items']):  # 获取集合对象id,用来获取保存的答案内容
#                 params = {
#                     'cid': '{}',
#                 }
#                 for item in jsons['data']['items']:
#                     params['cid'] = '{}'.format(item['id'])
#                     response = requests.get('https://gochitchat.ai/api/v1/conversation/detail',
#                                             params=params,
#                                             cookies=cookies, headers=headers)
#                     jsons = response.json()
#                     messages = jsons['data']['messages']
#                     if bool(messages):  # 获取集合对象id,用来获取答案内容
#                         list.append(messages[0])
#                 i += 1
#             else:
#                 print('页数遍历完成！')
#                 break
#     except Exception as ex:
#         print(ex)
#     return list
#
#
# def saveData():
#     list = getData()
#     try:
#         if bool(list):
#             with pymongo.MongoClient('mongodb://localhost:27017/')as conn:
#                 collection = conn["test"]["stu_test"]
#                 collection.drop()
#                 collection.insert_many(list)
#                 print('mongo insert success')
#         else:
#             print('no data！')
#     except Exception as ex:
#         print(ex)
#
#
# t1 = time.time()
# saveData()
# print('用时：', time.time() - t1)
# endregion

# region 异步下载
async def getDataAsync():
    params = {
        'page': '{}',
        'page_size': '12',
    }
    list = []
    i = 1
    try:
        while True:
            params['page'] = '{}'.format(i)
            async with aiohttp.client.ClientSession()as client:
                response = await client.get('https://gochitchat.ai/api/v1/conversation/list/public', params=params,
                                            cookies=cookies,
                                            headers=headers)
                jsons = await response.json()
                if bool(jsons['data']['items']):  # 获取集合对象id,用来获取保存的答案内容
                    tasks = []
                    for item in jsons['data']['items']:
                        task = asyncio.create_task(getJsonData(client, item, list))
                        tasks.append(task)

                    await asyncio.wait(tasks)
                    i += 1
                else:
                    print('页数遍历完成！')
                    break
    except Exception as ex:
        print(ex)
    return list


async def getJsonData(client, item, list):
    params = {
        'cid': '{}',
    }
    params['cid'] = '{}'.format(item['id'])
    response = await client.get('https://gochitchat.ai/api/v1/conversation/detail', params=params,
                                cookies=cookies,
                                headers=headers)
    jsons = await response.json()
    messages = jsons['data']['messages']
    if bool(messages):  # 获取集合对象id,用来获取答案内容
        list.append(messages[0])


async def saveDataAsync():
    list = await getDataAsync()
    try:
        if bool(list):
            with pymongo.MongoClient('mongodb://localhost:27017/')as conn:
                collection = conn["test"]["stu_test"]
                collection.drop()
                collection.insert_many(list)
                print('mongo insert success')
        else:
            print('no data！')
    except Exception as ex:
        print(ex)


if __name__ == '__main__':
    t1 = time.time()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(saveDataAsync())

    print('用时：', time.time() - t1)
# endregion
