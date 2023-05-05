# -*- coding: utf-8 -*-
"""
@File    : javImgs.py
@Time    : 5/5/2023 8:17 PM
@Author  : king
@Desc    : 
"""
import asyncio
import aiohttp
import time
import os

head = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}


# async def getHtml(url):
#     async with aiohttp.ClientSession()as session:
#         response = await session.get(url, headers=head)
#         return response.text()
#
# async def getImages(url):
#     html = await getImages(url)
