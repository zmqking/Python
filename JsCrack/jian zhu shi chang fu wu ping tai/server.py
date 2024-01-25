# -*- coding: UTF-8 -*-
# Project -> File:Python -> server 
# Author:king
# Date:1/25/2024
import asyncio
import json
import websockets


def get_data(page):
    import requests

    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "DNT": "1",
        "Pragma": "no-cache",
        "Referer": "https://jzsc.mohurd.gov.cn/data/company",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "accessToken": "",
        "sec-ch-ua": "^\\^Not_A",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "timeout": "30000",
        "v": "231012"
    }
    url = "https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list"
    params = {
        "pg": page,
        "pgsz": "15",
        "total": "450"
    }
    response = requests.get(url, headers=headers, params=params)

    return response.text


async def echo(websoket):
    for i in range(1, 4):
        data = get_data(i)
        await websoket.send(data)


async def recv_msg(websocket):
    while 1:
        recv_text = await websocket.recv()
        print(json.loads(recv_text))


async def main_logic(websocket, path):
    await echo(websocket)
    await recv_msg(websocket)


start_server = websockets.serve(main_logic, '127.0.0.1', 8080)
loop = asyncio.get_event_loop()
loop.run_until_complete(start_server)

loop.run_forever()
