# -*- coding: utf-8 -*-
"""
@File    : 08-xpath&bs4.py
@Time    : 6/23/2023 8:03 PM
@Author  : king
@Desc    : 
"""
import requests
from lxml import etree

class LianJia():

    def __init__(self):
        self.head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
        self.url = 'https://sh.lianjia.com/ershoufang/pudong/pg2/'
        self.titleXpath = '//li//div[@class="title"]/a'
        self.positionXpath = '//div[@class="positionInfo"]/a'
        self.layoutXpath = '//div[@class="houseInfo"]/text()'
        self.fllowXpath = '//li//div[@class="followInfo"]/text()'
        self.priceXpath = '//div[@class="priceInfo"]/div/span/text()'
        self.amountXpath = '//li//div[@class="unitPrice"]/span/text()'

    def getContent(self):
        response = requests.get(self.url, self.head)
        return response.text

    def analysis(self):
        txt = self.getContent()
        tree = etree.HTML(txt)
        title_list = tree.xpath(self.titleXpath)
        positionXpath = tree.xpath(self.positionXpath)
        layoutXpath = tree.xpath(self.layoutXpath)
        fllowXpath = tree.xpath(self.fllowXpath)
        priceXpath = tree.xpath(self.priceXpath)
        amountXpath = tree.xpath(self.amountXpath)
        for i in range(len(title_list)):
            print(title_list[i].text)
            print(positionXpath[i].text)
            print(layoutXpath[i])
            print(fllowXpath[i])
            print(priceXpath[i])
            print(amountXpath[i])
            print('----------------------------')

class LianJia_bs4():
    def __init__(self):
        self.head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
        self.url = 'http://ip.yqie.com/ipproxy.htm'


if __name__ == '__main__':
    lianjia = LianJia()
    lianjia.analysis()
