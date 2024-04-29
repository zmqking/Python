# -*- coding: UTF-8 -*-
# Project -> File:Python -> FreeDisk 
# Author:king
# Date:4/21/2024

import psutil
import os
import schedule
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import atexit


class Monitor():
    sender_email = "276324922@qq.com"  # Modify to your email address
    sender_password = "yvqkogpmqjssbgjf"  # Modify to your email password
    receiver_email = "276324922@qq.com"  # Modify to receiver email address
    subject = "Disk Space Warning"

    def check_disk_space(self, path, min_space):
        disk_usage = psutil.disk_usage(path)
        free_space = disk_usage.free / (1024 ** 3)  # Convert bytes to gigabytes
        return free_space < min_space, free_space

    def del_files(self, file_path):
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)
                print(f"Deleted: {file_path}")
        except Exception as e:
            print(f"Error deleting {file_path}: {e}")

    def get_oldest_file(self, directory):
        files = [os.path.join(directory, filename) for filename in os.listdir(directory) if
                 os.path.isfile(os.path.join(directory, filename))]
        if len(files) < 6:
            oldest_file = ''
        else:
            oldest_file = min(files, key=os.path.getctime)
        return oldest_file

    def send_email(self, message):
        try:
            # Setup email message
            msg = MIMEMultipart()
            msg['From'] = self.sender_email
            msg['To'] = self.receiver_email
            msg['Subject'] = self.subject
            msg.attach(MIMEText(message, 'plain'))

            # Connect to SMTP server
            server = smtplib.SMTP_SSL('smtp.qq.com', 465)
            server.login(self.sender_email, self.sender_password)

            # Send email
            server.send_message(msg)

            # Quit SMTP server
            server.quit()
        except Exception as ex:
            print(f'send email error:{ex}')

    def job(self):
        # del_directory = "E:\Chrome\gate"
        del_directory = "D:\DBBase\MSSQL10.MSSQL2008\MSSQL\Backup\ZL_TrainingPlatform"

        disk_path = "D:\\"  # Modify to your D drive path
        min_disk_space = 5  # Minimum required space in GB

        oldest_file = self.get_oldest_file(del_directory)
        if len(oldest_file) > 0:
            self.del_files(oldest_file)
            _, free_space = self.check_disk_space(disk_path, min_disk_space)
            self.send_email(
                f'disk space remaining: {round(free_space, 2)}G \r\n deleted dabase backup files:{oldest_file}')
        else:
            print('Number of database files less than 5')
            self.send_email('168 server Number of database backup files less than 5')

        flag, _ = self.check_disk_space(disk_path, min_disk_space)
        if flag:
            self.send_email('168 server Disk space is less than 5GB. Please free up space immediately.')
            print("Disk space is less than 5GB. send mail notice...")
            # self.del_files(disk_path)
        else:
            print("Disk space is sufficient.")


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
