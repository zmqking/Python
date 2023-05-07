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
import requests
from lxml import etree

head = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}


def getHtml(url):
    response = requests.get(url, headers=head)
    ht = etree.HTML(response.text)
    txt1 = ht.xpath('//a[@class="movie-box"]/div/span/text()')

    print(len(txt1))
    for t in txt1:
        v = etree.tostring(t)
        print(v)
    # print(response.text)


getHtml("https://www.javbus.com")
# async def getHtml(url):
#     async with aiohttp.ClientSession()as session:
#         response = await session.get(url, headers=head)
#         return response.text()
#
# async def getImages(url):
#     html = await getImages(url)
