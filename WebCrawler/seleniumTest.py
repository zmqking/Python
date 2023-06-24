# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# region 不自动关闭浏览器
# 获取配置对象 => 什么样的浏览器就选择什么浏览器配置
option = webdriver.ChromeOptions()
option.add_experimental_option("detach", True)

# 获取driver对象, 并将配置好的option传入进去
driver = webdriver.Chrome(options=option)
driver.get('https://www.baidu.com')
element = driver.find_element(By.ID, 'kw')
element.send_keys('test')
# endregion


# region 自动关闭浏览器
# chrome = webdriver.Chrome()
# chrome.get("https://www.baidu.com")
# # chrome.implicitly_wait(10)  # 隐式等待 10 秒钟
# element = chrome.find_element(By.ID, 'kw')
# element.send_keys('test')
# time.sleep(2)
# endregion


