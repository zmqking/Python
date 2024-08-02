# -*- coding: UTF-8 -*-
# Project -> File:Python -> FastAPI_Demo 
# Author:king
# Date:4/23/2024

import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get('/test',description='测试',summary='ceshi')
def home():
    return 'hello world'

if __name__ == '__main__':
    uvicorn.run(app)