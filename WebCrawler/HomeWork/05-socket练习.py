# -*- coding: utf-8 -*-
"""
@File    : 05-socket练习.py
@Time    : 6/10/2023 9:04 PM
@Author  : king
@Desc    : 
"""
import  os

#通过socket下载图片
# 获取到资源地址
import socket
import re
import os

url = ['https://pic.netbian.com/uploads/allimg/220211/004115-1644511275bc26.jpg',
       'https://pic.netbian.com/uploads/allimg/220215/233510-16449393101c46.jpg',
       'https://pic.netbian.com/uploads/allimg/211120/005250-1637340770807b.jpg']

def getImages():
    for i in url:
        # 创建套接字对象
        client = socket.socket()
        # 创建连接
        client.connect(('pic.netbian.com', 80))
        # 构造http请求
        res = 'GET ' + i + ' HTTP/1.0\r\nHost:pic.netbian.com\r\nUser-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.37\r\n\r\n'
        # 发送请求
        client.send(res.encode())
        # 接收数据
        data = client.recv(1024)
        result = b''
        while data:
            result += data
            data = client.recv(1024)

        # 提取数据
        img = re.findall(b'HIT\r\n\r\n(.*)', result, re.S)
        print(f'{i.split("/")[-1]}下载完成')
        if not os.path.exists('img_dir'):
            os.mkdir('img_dir')
        # 存储数据
        with open(f'img_dir/{i.split("/")[-1]}', 'wb') as f:
            f.write(img[0])

getImages()