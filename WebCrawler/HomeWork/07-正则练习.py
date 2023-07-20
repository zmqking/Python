# -*- coding: utf-8 -*-
"""
@File    : 07-正则练习.py
@Time    : 6/23/2023 6:06 PM
@Author  : king
@Desc    : 
"""

import requests
import re


class Novel():

    def __init__(self):
        self.head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }

    def getContent(self, url):
        response = requests.get(url, headers=self.head)
        response.encoding = "gbk"
        return response.text

    def analysisContent(self, url):
        content = self.getContent(url)
        data_list = re.findall('<span class="sp_2"><a href="(.*?)" target="_blank" title=".*?">(.*?)</a></span>',
                               content)
        for item in data_list:
            print(item[0], item[1])


if __name__ == '__main__':
    novel = Novel()
    for i in range(10):
        i += 1
        novel.analysisContent(f'https://www.77xsw.cc/fenlei/1_{i}/')
