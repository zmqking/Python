# -*- coding: UTF-8 -*-
# Project -> File:Python -> main
# Author:king
# Date:12/21/2023

# scheduler.py

from redis import Redis
from rq_scheduler import Scheduler
from Function import test
# from datetime import datetime, timedelta

# Connect to Redis server
redis_conn = Redis(host='localhost', port=6379, db=0)

# Create a scheduler
scheduler = Scheduler(connection=redis_conn)

# Schedule the job to run every 10 seconds
scheduler.cron(
    cron_string='*/10 * * * *',  # Run every 10 seconds
    func=test,
    queue_name='default'
)

# Start the scheduler
scheduler.run()


# region 定时调用
# from Function import test
# import threading
# import time
#
# def my_function():
#     print("Timer expired! This function is called.")
#
# # 创建一个定时器，每5秒调用一次my_function
# timer = threading.Timer(5, my_function)
#
# # 启动定时器
# timer.start()
#
# # 主线程可以继续执行其他操作
#
# # 等待定时器完成
# timer.join()
#
# print("Main thread continues to run...")
# endregion
