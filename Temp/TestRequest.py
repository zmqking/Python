# -*- coding: UTF-8 -*-
# Project -> File:Python -> TestRequest 
# Author:king
# Date:1/3/2024

# import  time
# import pandas as pd
# import re


# 获取当前时间并格式化
# formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
# print(formatted_time)


import pandas as pd
import re
import os
import time

def extract_time(log_line):
    match = re.search(r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})', log_line)
    return match.group(1) if match else None


# 读取IIS日志文件
log_file_path = 'D:/Temp Files/u_extend50112.log'  # 替换为您的日志文件路径
start = time.time()
if os.path.exists(log_file_path):
    print(start)
    # 读取文件，跳过以 '#' 开头的行
    with open(log_file_path, 'r',encoding='utf8') as file:
        logs = [line.strip() for line in file if not line.startswith('#') and line.strip()]

    # 提取时间
    timestamps = [extract_time(log) for log in logs]
    timestamps = [pd.to_datetime(ts) for ts in timestamps if ts]

    if timestamps:
        earliest_time = min(timestamps)
        latest_time = max(timestamps)
        print(f'最早的时间: {earliest_time}')
        print(f'最晚的时间: {latest_time}')
        print(f'success:{time.time()-start}')
    else:
        print('日志文件中没有有效的时间戳。')
else:
    print(f'错误：文件 "{log_file_path}" 不存在。')
