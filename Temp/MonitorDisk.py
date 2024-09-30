# -*- coding: UTF-8 -*-
# Project -> File:Python -> FreeDisk 
# Author:king
# Date:4/21/2024

import psutil
import os
import schedule
import time
import logging
import SendEmail as email


class Monitor():
    subject = "Disk Space Warning"

    def __init__(self):
        # 配置日志记录
        logging.basicConfig(filename=f'{self.get_time().replace("-", "").replace(":", "").replace(" ", "")[:8]}.log',
                            level=logging.INFO,
                            format='%(asctime)s %(levelname)s: %(message)s')

    def get_time(self):
        # 获取当前时间的时间戳
        current_timestamp = time.time()
        # 将时间戳转换为本地时间的struct_time对象
        local_time = time.localtime(current_timestamp)
        # 使用strftime()方法将struct_time对象格式化为指定的时间字符串
        return time.strftime("%Y-%m-%d %H:%M:%S", local_time)

    def check_disk_space(self, path, min_space):
        disk_usage = psutil.disk_usage(path)
        free_space = disk_usage.free / (1024 ** 3)  # Convert bytes to gigabytes
        return free_space < min_space, free_space

    def del_files(self, file_path):
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)
                logging.info(f"Deleted: {file_path}")
                print(f"Deleted: {file_path}")
        except Exception as e:
            logging.info(f"Error deleting {file_path}: {e}")
            print(f"Error deleting {file_path}: {e}")

    def get_oldest_file(self, directory):
        files = [os.path.join(directory, filename) for filename in os.listdir(directory) if
                 os.path.isfile(os.path.join(directory, filename))]
        if len(files) < 6:
            oldest_file = ''
        else:
            oldest_file = min(files, key=os.path.getctime)
        return oldest_file

    def job(self):
        logging.info("start calc")
        # del_directory = "E:\Chrome\gate"
        del_directory = os.environ['DEL_BAK_DIRECTORY']
        server_tag = os.environ['SERVER_TAG']
        # del_directory = "D:\DBBase\MSSQL10.MSSQL2008\MSSQL\Backup\ZL_TrainingPlatform"

        disk_path = "D:\\"  # Modify to your D drive path
        min_disk_space = 10  # Minimum required space in GB

        oldest_file = self.get_oldest_file(del_directory)
        if len(oldest_file) > 0:
            self.del_files(oldest_file)
            _, free_space = self.check_disk_space(disk_path, min_disk_space)

            logging.info(f"disk space remaining: {round(free_space, 2)}G \r\n deleted dabase backup files:{oldest_file}")
            email.send_email(
                f'{server_tag} disk space remaining: {round(free_space, 2)}G \r\n deleted dabase backup files:{oldest_file}',
                f'{server_tag} {Monitor.subject}')
        else:
            logging.info(f'Number of database files less than {min_disk_space}')
            print(f'Number of database files less than {min_disk_space}')
            email.send_email(f'{server_tag} server Number of database backup files less than {min_disk_space}', f'{server_tag} {Monitor.subject}')

        flag, _ = self.check_disk_space(disk_path, min_disk_space)
        if flag:
            email.send_email(f'{server_tag} server Disk space is less than {min_disk_space}GB. Please free up space immediately.',
                             f'{server_tag} {Monitor.subject}')
            print(f"Disk space is less than {min_disk_space}GB. send mail notice...")
            logging.info(f"Disk space is less than {min_disk_space}GB. send mail notice...")
            # self.del_files(disk_path)
        else:
            print("Disk space is sufficient.")
            logging.info("Disk space is sufficient.")


if __name__ == '__main__':
    monitor = Monitor()
    # monitor.job()
    # Schedule the job to run every day at 3:00 AM
    schedule.every().day.at("03:00").do(monitor.job)
    print('start application...')
    while True:
        # monitor.job()
        schedule.run_pending()
        time.sleep(1)
