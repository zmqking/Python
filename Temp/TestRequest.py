# -*- coding: UTF-8 -*-
# Project -> File:Python -> TestRequest 
# Author:king
# Date:1/3/2024

import requests
import os
import math
import time
import random
url = 'http://cdn3.hnjsrcw.com/zctrain/2023101/1.mp4'
COMMENTS = ['很好', '非常棒', '视频质量不错', '学到了东西', '深有体会']

def create_dir():
    # 找到倒数第二个斜杠的位置
    last_slash_index = url.rfind('/')
    # 从后向前找到倒数第二个斜杠，需要先找到最后一个斜杠的位置
    if last_slash_index != -1:
        # 从倒数第一个斜杠向前数，直到找到倒数第二个斜杠
        second_last_slash_index = url.rfind('/', 0, last_slash_index)
    return url[second_last_slash_index + 1:last_slash_index], url[last_slash_index + 1:]


print(random.choice(COMMENTS))
# dir, fileName = create_dir()
# print(dir, fileName)
# print(time.time())
