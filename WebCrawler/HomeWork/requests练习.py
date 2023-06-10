# -*- coding: utf-8 -*-
"""
@File    : requests练习.py
@Time    : 6/10/2023 9:22 PM
@Author  : king
@Desc    : 
"""
import requests

heads = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}

url_list = ['https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1646.mp3',
            'https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1645.mp3',
            'https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1643.mp3',
            'https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1642.mp3',
            'https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1641.mp3']


def getImages():
    for i in url_list:
        # 截取文件名
        filename = i[i.rindex('/') + 1:]
        reponse = requests.get(i, headers=heads)
        with open('img_dir/' + filename, 'wb')as f:
            f.write(reponse.content)


getImages()
