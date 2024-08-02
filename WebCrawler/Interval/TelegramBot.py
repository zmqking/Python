# -*- coding: UTF-8 -*-
# Project -> File:Python -> functionModel 
# Author:king
# Date:12/21/2023

# headers = {
#     'Content-Type': 'application/x-www-form-urlencoded',
# }
#
# data = 'chat_id=418345555&text=god bless u.'
#
# proxies = {
#     'http': 'http://127.0.0.1:7890',
#     'https': 'http://127.0.0.1:7890',
# }
#
# response = requests.post(
#     'https://api.telegram.org/bot6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw/sendMessage',
#     headers=headers,
#     data=data,
#     verify=False,
#     proxies=proxies
# )

# import requests
# import datetime
# import time
# import platform
# import psutil
# from telegram import Update
# from telegram.ext import ContextTypes, CommandHandler, Application
# from telegram.helpers import escape_markdown
# import os
#
#
# async def monitor_cpu_usage(context: ContextTypes.DEFAULT_TYPE):
#     cpu_percent = int(context.job.data)
#     cpu_usage = int(psutil.cpu_percent(interval=1))
#     if cpu_usage >= cpu_percent:
#         # 使用中文发送并且美化发送格式而且要添加emoji
#         await context.bot.send_message(chat_id=context.job.chat_id,
#                                        text=f"⚠️ *警告*: CPU 使用率已经达到 *{cpu_usage}%*\! 阈值设置为 *{cpu_percent}%*\.",
#                                        parse_mode="MarkdownV2")
#
#
# async def start_boot(context: ContextTypes.DEFAULT_TYPE):
#     await context.bot.send_message(chat_id=context.job.chat_id, text="🚀 *原神启动中\.\.\.*",
#                                    parse_mode="MarkdownV2")
#     time.sleep(1)
#     await context.bot.send_message(chat_id=context.job.chat_id, text="🎮 *原神启动完成\!*",
#                                    parse_mode="MarkdownV2")
#
#
# def main() -> None:
#     tg_api_token = '6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw'
#     tg_chat_id = 6136493797 #os.environ['TG_CHAT_ID']
#     tg_api_base_url = os.environ.get('TG_API_BASE_URL', 'https://api.telegram.org/bot')
#
#     application = Application.builder().connect_timeout(30).read_timeout(30).base_url(
#         base_url=tg_api_base_url).token(tg_api_token).build()
#     job_quene = application.job_queue
#     job_quene.run_once(start_boot, chat_id=tg_chat_id, when=2)
#
#
# if __name__ == '__main__':
#     main()


# import requests
# import datetime
# import time
# import platform
# import psutil
# from telegram import Update
# from telegram.ext import ContextTypes, CommandHandler, Application, JobQueue
# from telegram.helpers import escape_markdown
# import os
#
#
# async def monitor_cpu_usage(context: ContextTypes.DEFAULT_TYPE):
#     cpu_percent = int(context.job.data)
#     cpu_usage = int(psutil.cpu_percent(interval=1))
#     if cpu_usage >= cpu_percent:
#         # 使用中文发送并且美化发送格式而且要添加emoji
#         await context.bot.send_message(chat_id=context.job.chat_id,
#                                        text=f"⚠️ *警告*: CPU 使用率已经达到 *{cpu_usage}%*\! 阈值设置为 *{cpu_percent}%*\.",
#                                        parse_mode="MarkdownV2")
#
#
# async def start_boot(context: ContextTypes.DEFAULT_TYPE):
#     await context.bot.send_message(chat_id=context.job.chat_id, text="🚀 *原神启动中\.\.\.*",
#                                    parse_mode="MarkdownV2")
#     time.sleep(1)
#     await context.bot.send_message(chat_id=context.job.chat_id, text="🎮 *原神启动完成\!*",
#                                    parse_mode="MarkdownV2")
#
#
# def main() -> None:
#     tg_api_token = '6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw'
#     tg_chat_id = 6136493797  # Ensure this is an integer
#     tg_api_base_url = os.environ.get('TG_API_BASE_URL', 'https://api.telegram.org/bot')
#
#     application = Application.builder().connect_timeout(30).read_timeout(30).base_url(
#         base_url=tg_api_base_url).token(tg_api_token).build()
#
#     # Ensure the application is built and job_queue is initialized
#     if application.job_queue is not None:
#         job_queue = application.job_queue
#         job_queue.run_repeating(monitor_cpu_usage, interval=60, first=10, chat_id=tg_chat_id,
#                                 data=10)
#         job_queue.run_once(start_boot, when=datetime.timedelta(seconds=2), chat_id=tg_chat_id)
#     else:
#         print("JobQueue was not initialized properly.")
#
#     application.run_polling()
#
#
# if __name__ == '__main__':
#     main()


# import os
#
# import telebot
# import urllib3
#
# proxies = {
#     'http': 'http://127.0.0.1:7890',
#     'https': 'http://127.0.0.1:7890',
# }
# # 设置代理服务器参数
# proxy = {
#     'host': '127.0.0.1',
#     'port': 7980,
#     'type': 'http'
# }
#
# proxy_handler = urllib3.ProxyManager('https://127.0.0.1:7890')
#
# # BOT_TOKEN = os.environ.get('BOT_TOKEN')
# BOT_TOKEN = '6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw'
# print(BOT_TOKEN)
#
# bot = telebot.TeleBot(BOT_TOKEN, session=)
#
#
# @bot.message_handler(commands=['start', 'hello'])
# def send_welcome(message):
#     bot.reply_to(message, "Howdy, how are you doing?")
#
#
# @bot.message_handler(func=lambda msg: True)
# def echo_all(message):
#     bot.reply_to(message, message.text)
#
#
# bot.infinity_polling()


import  asyncio
from telegram import Bot

# 替换为你的Bot Token
TOKEN = '6136493797:AAHC5gjhFXq6Qkb0nLANzYx-QEycYWIZrxw'

# 初始化Bot
bot = Bot(token=TOKEN)


async def send_msg():
    global chat_id
    updates = await bot.get_updates()
    for update in updates:
        print(update.message.chat.id)
    # 替换为接收消息的用户的chat_id
    chat_id = 6136493797
    # 发送消息
    bot.send_message(chat_id=chat_id, text='Hello from Python!')


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait([send_msg()]))
    # 获取Chat ID
    # await send_msg()