import pandas as pd
import os
import time
from aliyun_security import Sample as sec
import IISLog as iisLog

# import sys

# 指定要搜索的目录
log_directory = 'D:/Temp Files'  # 使用当前目录作为示例


def get_max_ips(path) -> []:
    # 定义日志字段名称
    log_field_names = ['date', 'time', 's-ip', 'cs-method', 'cs-uri-stem', 'cs-uri-query',
                       's-port', 'cs-username', 'c-ip', 'cs(User-Agent)', 'cs(Referer)',
                       'sc-status', 'sc-substatus', 'sc-win32-status', 'time-taken']
    # 读取日志文件
    df = pd.read_csv(path, sep=' ', comment='#', names=log_field_names,
                     engine='python')

    ip_counts = df['c-ip'].value_counts()
    total_sec = iisLog.get_log_time(path)
    max = int(os.environ['MAX_600'])
    min = int(os.environ['MIN_600'])
    print(f'total_sec:{total_sec}')
    if total_sec < 600:
        frequent_ips = ip_counts[ip_counts > min]
    else:
        frequent_ips = ip_counts[ip_counts > max]
    for ip, count in frequent_ips.items():
        print(f"最频繁的IP地址:{ip} {count}")

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


def add_ip_limit():
    log_name = get_new_log()
    log_path = f"{log_directory}/{log_name}"
    print(f"{get_current_time()} log_path：{log_path}")
    log_ips = get_max_ips(log_path)
    for ip, count in log_ips.items():
        ip_addr = iisLog.get_ip_addr(ip)
        time.sleep(1)
        print(f'{get_current_time()} {ip} {ip_addr}')
        description = f'{log_name} {count} {ip_addr}'
        sec.main(['cn-hangzhou',
                  'sg-bp11p8rar0xfagtk8r9x',
                  '80/443',
                  'drop',
                  'intranet',
                  '1',
                  # '116.162.1.155',description])
                  ip, description])


if __name__ == '__main__':
    add_ip_limit()
    # sys.exit(0)
