import pandas as pd
import os
# import sys
import time
# import schedule
# from aliyun_security import Sample as sec
import aliyun_security as sec
import requests
from lxml import etree
import re

# 指定要搜索的目录
log_directory = os.environ['LOG_PATH']
# 'C:/inetpub/logs/LogFiles/W3SVC12'  # 使用当前目录作为示例
# log_directory = 'D:/Temp Files'  # 使用当前目录作为示例

headrs = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}


# log_directory = 'D:/Temp Files'  # 使用当前目录作为示例

def extract_time(log_line):
    match = re.search(r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})', log_line)
    return match.group(1) if match else None


def get_log_time(log_file_path):
    # 读取文件，跳过以 '#' 开头的行
    with open(log_file_path, 'r', encoding='utf8') as file:
        logs = [line.strip() for line in file if not line.startswith('#') and line.strip()]

    # 提取时间
    timestamps = [extract_time(log) for log in logs]
    timestamps = [pd.to_datetime(ts) for ts in timestamps if ts]
    total_sec = 0
    if timestamps:
        earliest_time = min(timestamps)
        latest_time = max(timestamps)
        # print(f'最早的时间: {earliest_time}')
        # print(f'最晚的时间: {latest_time}')
        total_sec = (latest_time - earliest_time).total_seconds()
        # print(f'时间相隔: {(latest_time - earliest_time).total_seconds()}')
        # print(f'success:{time.time() - start}')

    return total_sec


def get_max_ips(path) -> []:
    frequent_ips = []
    try:
        # 定义日志字段名称
        log_field_names = ['date', 'time', 's-ip', 'cs-method', 'cs-uri-stem', 'cs-uri-query',
                           's-port', 'cs-username', 'c-ip', 'cs(User-Agent)', 'cs(Referer)',
                           'sc-status', 'sc-substatus', 'sc-win32-status', 'time-taken']
        # 读取日志文件
        df = pd.read_csv(path, sep=' ', comment='#', names=log_field_names,
                         engine='python')

        ip_counts = df['c-ip'].value_counts()
        # 大致判断是否为后台操作
        urls = df['cs-uri-stem'].values()

        str_url = any(search_string in item for item in urls)
        total_sec = get_log_time(path)
        max = int(os.environ['MAX_600'])
        min = int(os.environ['MIN_600'])
        mid = int(os.environ['MID_600'])
        sec.logger.info(f'log total_sec:{total_sec}')
        if total_sec < 600: # 小于十分钟
            if total_sec < 180: # 小于3分钟以内
                frequent_ips = ip_counts[ip_counts > min]
            else:# 3-10分钟区间
                frequent_ips = ip_counts[ip_counts > mid]
        else:
            frequent_ips = ip_counts[ip_counts > max]

        for ip, count in frequent_ips.items():
            sec.logger.info(f"最频繁的IP地址:{ip} {count}")
    except Exception as ex:
        sec.logger.error(ex)

        # 最常见的IP地址
        # print("最频繁的IP地址:")
        # print(df['c-ip'].value_counts().head())
        # # 最常访问的URL
        # print("\n最常访问的URL:")
        # print(df['cs-uri-stem'].value_counts().head())
        # # HTTP状态码统计
        # print("\nHTTP状态码统计:")
        # print(df['sc-status'].value_counts())
        # # 平均响应时间
        # print(f"\n平均响应时间: {df['time-taken'].mean():.2f} ms")
    return frequent_ips


def get_log_files(directory):
    return [f for f in os.listdir(directory) if f.endswith('.log')]


def filter_large_logs(log_files, directory, size_limit):
    large_logs = []
    for log in log_files:
        log_path = os.path.join(directory, log)
        if os.path.getsize(log_path) > size_limit:
            large_logs.append(log)
    return large_logs


def find_latest_log(log_files, directory):
    latest_log = None
    latest_time = 0
    for log in log_files:
        log_path = os.path.join(directory, log)
        log_time = os.path.getmtime(log_path)
        if log_time > latest_time:
            latest_time = log_time
            latest_log = log
    return latest_log


def get_new_log():
    # log_directory = 'D:/Temp Files'  # 使用当前目录作为示例
    # 获取所有日志文件
    log_files = get_log_files(log_directory)
    # 过滤大于2MB的日志文件
    size_limit = 1.9 * 1024 * 1024  # 2MB in bytes
    large_logs = filter_large_logs(log_files, log_directory, size_limit)
    # 在大文件中找到最新的日志文件
    latest_large_log = find_latest_log(large_logs, log_directory)
    return latest_large_log
    # if latest_large_log:
    #     print(f"最新的大于2MB的日志文件是: {log_directory}/{latest_large_log}")
    # else:
    #     print("没有找到大于2MB的日志文件")


def get_current_time():
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def get_ip_addr(ip):
    ip_addr = ''
    try:
        response = requests.get(f'https://cip.cc/{ip}', headers=headrs)
        res = response.content
        tree = etree.HTML(res)
        pre = tree.xpath('/html/body/div[1]/div/div[3]/pre')
        # 使用正则表达式匹配地址
        address_match = re.search(r"地址\s*:\s*(.+)", pre[0].text)
        ip_addr = address_match.group(1).strip() if address_match else None
        ip_addr = ip_addr.replace(' ', '')
    except Exception as ex:
        sec.logger.error(ex)

    return ip_addr


def add_ip_limit():
    try:
        log_name = get_new_log()
        log_path = f"{log_directory}/{log_name}"
        sec.logger.info(f"{get_current_time()} log_path：{log_path}")
        log_ips = get_max_ips(log_path)
        security_group = os.environ['SECURITY_GROUP']
        for ip, count in log_ips.items():
            ip_addr = get_ip_addr(ip)
            time.sleep(1)
            sec.logger.info(f'{get_current_time()} {ip} {ip_addr}')
            description = f'{log_name} {count} {ip_addr}'
            sec.Sample.main(['cn-hangzhou',
                      security_group,
                      '80/443',
                      'drop',
                      'intranet',
                      '1',
                      ip, description])
    except Exception as ex:
        sec.logger.error(ex)


if __name__ == '__main__':
    # add_ip_limit()

    while True:
        add_ip_limit()
        time.sleep(300)

    # schedule.every(6).minutes.do(add_ip_limit)
    # print('start application...')
    # while True:
    #     schedule.run_pending()
    #     time.sleep(1)
