# -*- coding: UTF-8 -*-
# Project -> File:Python -> FastAPI_Demo 
# Author:king
# Date:4/23/2024

import uvicorn
from fastapi import FastAPI
import TestRequest as req
app = FastAPI()

@app.get('/test',description='测试',summary='ceshi')
def home(imei):
    res = {}
    res["code"] = 200
    res["result"]=f"IMEI: {imei}<br>解锁状态: <span style='color:green'> Unlocked（解锁成功）</span>"

    response = req.unlock_device(imei)
    if response["unlockCallSuccess"] == True:
        return res
    else:
        return response

if __name__ == '__main__':
    uvicorn.run(app)