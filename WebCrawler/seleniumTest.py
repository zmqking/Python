# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

chrome = webdriver.Chrome()
chrome.get("https://www.baidu.com")
# chrome.implicitly_wait(10)  # 隐式等待 10 秒钟
element = chrome.find_element(By.ID, 'kw')
element.send_keys('test')
time.sleep(2)
