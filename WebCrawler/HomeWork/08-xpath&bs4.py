# -*- coding: utf-8 -*-
"""
@File    : 08-xpath&bs4.py
@Time    : 6/23/2023 8:03 PM
@Author  : king
@Desc    : 
"""
# region xpath解析
# import requests
# from lxml import etree
#
# class LianJia():
#
#     def __init__(self):
#         self.head = {
#             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
#         }
#         self.url = 'https://sh.lianjia.com/ershoufang/pudong/pg2/'
#         self.titleXpath = '//li//div[@class="title"]/a'
#         self.positionXpath = '//div[@class="positionInfo"]/a'
#         self.layoutXpath = '//div[@class="houseInfo"]/text()'
#         self.fllowXpath = '//li//div[@class="followInfo"]/text()'
#         self.priceXpath = '//div[@class="priceInfo"]/div/span/text()'
#         self.amountXpath = '//li//div[@class="unitPrice"]/span/text()'
#
#     def getContent(self):
#         response = requests.get(self.url, self.head)
#         return response.text
#
#     def analysis(self):
#         txt = self.getContent()
#         tree = etree.HTML(txt)
#         title_list = tree.xpath(self.titleXpath)
#         positionXpath = tree.xpath(self.positionXpath)
#         layoutXpath = tree.xpath(self.layoutXpath)
#         fllowXpath = tree.xpath(self.fllowXpath)
#         priceXpath = tree.xpath(self.priceXpath)
#         amountXpath = tree.xpath(self.amountXpath)
#         for i in range(len(title_list)):
#             print(title_list[i].text)
#             print(positionXpath[i].text)
#             print(layoutXpath[i])
#             print(fllowXpath[i])
#             print(priceXpath[i])
#             print(amountXpath[i])
#             print('----------------------------')
#
# if __name__ == '__main__':
#     lianjia = LianJia()
#     lianjia.analysis()
# endregion

from bs4 import BeautifulSoup
import requests


class LianJia_bs4():
    def __init__(self):
        self.head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
        self.url = 'http://ip.yqie.com/ipproxy.htm'

    def GetContent(self):
        response = requests.get(self.url, headers=self.head)
        # 怎么判断当前用什么方式解析？
        # 从网页head 里面查找编码
        soup = BeautifulSoup(response.content.decode('utf-8'), 'lxml')
        # el_list = soup.find_all('span') #元素查找
        # el_list = soup.find_all(attrs={'class': 'divcenter'})  # 属性查找
        el_list = soup.select('#GridViewOrder tr:not(:first-child)')
        for item in el_list:
            tds = item.select('td')
            print(
                tds[0].text + ',' + tds[1].text + ',' + tds[2].text + ',' + tds[3].text + ',' + tds[4].text + ',' + tds[
                    5].text)


if __name__ == '__main__':
    lianjia = LianJia_bs4()
    lianjia.GetContent()
