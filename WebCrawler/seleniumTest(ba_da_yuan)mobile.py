# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17

import time
import logging
# 打开文本文档给人编辑
from selenium import webdriver
from selenium.common import UnexpectedAlertPresentException
from selenium.webdriver.common.by import By
from PIL import Image
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import ctypes

# 定义消息框的类型常量
MB_OK = 0x0  # 确认按钮
MB_OKCANCEL = 0x1  # 确认和取消按钮
MB_YESNO = 0x4  # 是和否按钮
# 获取配置对象 => 什么样的浏览器就选择什么浏览器配置
# region 不自动关闭浏览器

# 配置日志记录
logging.basicConfig(filename='app.log', level=logging.INFO,
                    format='%(asctime)s %(levelname)s: %(message)s')


def get_time():
    # 获取当前时间的时间戳
    current_timestamp = time.time()
    # 将时间戳转换为本地时间的struct_time对象
    local_time = time.localtime(current_timestamp)
    # 使用strftime()方法将struct_time对象格式化为指定的时间字符串
    return time.strftime("%Y-%m-%d %H:%M:%S", local_time)


# idcard=''
# user_name=''
# pwd = ''
# with open(file_path, 'r', encoding='utf-8')as f:
#         idcard = f.readline().strip()
#         print(idcard)
#         user_name = f.readline().strip()
#         print(user_name)
#         pwd = f.readline().strip()
#         print(pwd)
# endregion

# region 命令行输入方式
# idcard = input('请输入身份证：').strip()
# while idcard == '':
#     print('身份证不能为空！')
#     idcard = input('请输入身份证：').strip()
#
# user_name = input('请输入用户名：').strip()
# while user_name == '':
#     print('用户名不能为空！')
#     user_name = input('请输入用户名：').strip()
# pwd = input('请输入密码：').strip()
# while pwd == '':
#     print('密码不能为空！')
#     pwd = input('请输入密码：').strip()
# endregion

# options = webdriver.ChromeOptions()
# options.add_argument('headless')
# options.add_argument('window-size=1920x1080')

# options.add_experimental_option("detach", True)

# 获取driver对象, 并将配置好的option传入进去
# driver = webdriver.Chrome(options=options)
# 设置用户数据目录路径
# user_data_dir = "./user_data"

# 创建 ChromeOptions 对象

options = webdriver.ChromeOptions()
# options.add_argument('headless')
options.add_argument("--incognito")  # 启动Chrome的无痕模式
options.add_argument('window-size=1920x1080')
options.add_experimental_option("detach", True)
# options.add_argument(f"user-data-dir={user_data_dir}")
# 获取driver对象, 并将配置好的option传入进去
driver = webdriver.Chrome(options=options)

driver.get('http://user.hnjsrcw.com/Space/Login.aspx')


def getObjectById(id):
    return driver.find_element(By.ID, id)


def getObjectByXpath(path):
    return driver.find_element(By.XPATH, path)


def getObjectById_await(id):
    wait = WebDriverWait(driver, 600)
    # 等待直到元素可见
    element = wait.until(EC.element_to_be_clickable((By.ID, id)))
    return element


def getObjectByTagName_await(tagName):
    element = WebDriverWait(driver, 300).until(
        EC.presence_of_element_located((By.TAG_NAME, tagName))
    )

    # wait = WebDriverWait(driver, 600)
    # # 等待直到元素可见
    # element = wait.until(EC.element_to_be_clickable((By.TAG_NAME, tagName)))
    return element


def getObjectByXpath_await(path):
    element = WebDriverWait(driver, 300).until(
        EC.presence_of_element_located((By.XPATH, path))
    )

    # wait = WebDriverWait(driver, 600)
    # # 等待直到元素可见
    # element = wait.until(EC.element_to_be_clickable((By.XPATH, path)))
    return element


def getObjectByClassName_await(className):
    element = WebDriverWait(driver, 300).until(
        EC.presence_of_element_located((By.CLASS_NAME, className))
    )

    # wait = WebDriverWait(driver, 600)
    # # 等待直到元素可见
    # element = wait.until(EC.element_to_be_clickable((By.CLASS_NAME, className)))
    return element


def getObjectByCss_await(css):
    element = WebDriverWait(driver, 300).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, css))
    )

    # wait = WebDriverWait(driver, 300)
    # # 等待直到元素可见
    # element = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, f"[class='{css}']")))
    return element


# iframe = None
result = None


# def switch_page_iframe(ifrName, index):
#     # 切换到新窗口
#     driver.switch_to.window(driver.window_handles[index])
#     # 切换到iframe
#     iframe = getObjectById(ifrName)
#     driver.switch_to.frame(iframe)


def login():
    # global iframe
    element = getObjectById_await('tbx_UserID')
    # element.send_keys(idcard)
    element.send_keys('430111198303112140')
    element1 = getObjectById_await('tbx_UserName')
    # element1.send_keys(user_name)
    element1.send_keys('黄芳')
    element2 = getObjectById_await('tbx_Password')
    # element2.send_keys(pwd)
    element2.send_keys('111111')
    logging.info('%s 开始登录' % get_time())
    print('%s 开始登录' % get_time())
    element3 = getObjectById_await('btn_Login')
    element3.click()
    element4 = getObjectById_await('peixun')
    element4.click()
    print('%s 进入二维码页面' % get_time())
    logging.info('%s 进入二维码页面' % get_time())
    iframe = getObjectById_await('eduMainFrame')
    driver.switch_to.frame(iframe)  # 切换到页面iframe里面去后去元素

    # qrCode = getObjectById('ImageWxLogin')
    # qrCode.screenshot(r'D:\test.png')
    # image = Image.open(r'D:\test.png')
    # image.show()
    # time.sleep(5)
    # image.close()

    # 打开一个新的标签页
    print('等待人脸验证中。。。')

    # 通过JavaScript在新标签页打开URL
    url = input('please input wechat url：')
    driver.execute_script(f"window.open('{url}', '_blank');")
    # 等待新标签页加载完成
    time.sleep(2)  # 等待2秒，确保新标签页加载完成
    # 切换到新标签页
    new_tab = driver.window_handles[-1]  # 获取新标签页的句柄
    driver.switch_to.window(new_tab)

    entry_train()


def entry_train():
    try:
        print('进入培训...')
        ##Repeater1_ctl00_GotoTrain
        entry = getObjectById_await('Repeater1_ctl00_GotoTrain')
        print('进入培训对象', entry)
        entry.click()
        print('点击进入培训对象...')
        # 触发弹窗的操作
    except Exception as ex:
        print('抛出点击异常')
        wait = WebDriverWait(driver, 6000)
        alert = wait.until(EC.alert_is_present())
        while alert.text.index('成功') == -1:
            wait = WebDriverWait(driver, 6000)
            alert = wait.until(EC.alert_is_present())
            alert.accept()  # 或者使用 dismiss()

        alert.accept()  # 或者使用 dismiss()
        print('ok点击完成')
        time.sleep(2)
        print('点击ok后等待完成')
        entry = getObjectById('Repeater1_ctl00_GotoTrain')
        print('进入培训对象：', entry)
        entry.click()
        print('点击进入培训对象...')

    print('等待进入开始学习')
    time.sleep(10)
    print('开始学习等待完成')

    # 使用 JavaScript 获取元素并等待其出现
    script = """
        var callback = arguments[arguments.length - 1];
        var checkExist = function() {
            if (document.querySelector('.cu-btn.bg-orange.text-white.round')) {
                callback(true);
            } else {
                setTimeout(checkExist, 100); // 每100ms检查一次
            }
        };
        checkExist();
    """
    try:
        # 执行 JavaScript 脚本并等待结果
        WebDriverWait(driver, 10).until(
            lambda driver: driver.execute_async_script(script)
        )
        print("新页面已经加载，新元素已出现")
        new_page_element = driver.find_element(By.CSS_SELECTOR, '.cu-btn.bg-orange.text-white.round')
        new_page_element.click()
    except:
        print("新页面加载超时，开始学习按钮未出现")


    # 使用JavaScript获取元素对象
    # js = "return document.querySelector('.cu-btn.bg-orange.text-white.round');"
    # study = driver.execute_script(js)
    # print('开学习按钮python对象：', study)
    # study.click()
    print('点击开学习按钮...')

    # # 使用JavaScript检查元素状态
    # WebDriverWait(driver, 300).until(
    #     lambda driver: driver.execute_script(
    #         "return document.querySelector('.cu-btn.bg-orange.text-white.round') !== null")
    # )
    # print('开始学习...')
    # entry = driver.find_element(By.CSS_SELECTOR,'.cu-btn.bg-orange.text-white.round')
    # entry.click()

    time.sleep(5)
    print('等待获取学习课程列表')
    js = "return document.querySelectorAll('uni-view.cu-item');"
    study_subs = driver.execute_script(js)
    print('获取学习课程列表对象', study_subs)

    # study_subs = driver.find_elements(By.CLASS_NAME,"cu-item")
    # study_subs = getObjectByClassName_await("cu-item")

    for sub in study_subs:
        print("课程名称：", sub.text)
        if sub.text.index('100') == -1:
            print("未完成课程对象：", sub)
            sub.find_element(By.CSS_SELECTOR, '.cu-btn.bg-orange.text-white.round').click()
            print("点击未完成课程对象...")
            time.sleep(2)
            # jiangs = getObjectByClassName_await("listCourse")

            js = "return document.querySelectorAll('uni-view.listCourse');"
            jiangs = driver.execute_script(js)
            print("视频列表对象：", jiangs)
            # jiangs= driver.find_elements(By.CLASS_NAME, "listCourse")
            for jiang in jiangs:
                print("视频名称：", jiang.text)
                if jiang.text.index('未完成') > -1:
                    jiang.click()
                    print("点击未完成视频...")
                    time.sleep(1)
                    h5_video = getObjectByTagName_await('video')
                    print("视频播放器对象：", h5_video)
                    duration = h5_video.get_attribute('duration')
                    print("当前视频总时长：", duration)
                    current_time = h5_video.get_attribute('currentTime')
                    print("当前视频播放时间：", current_time)
                    print('当前视频播放中...')
                    while float(current_time) < float(duration):
                        time.sleep(1)
                        duration = h5_video.get_attribute('duration')
                        current_time = h5_video.get_attribute('currentTime')

                        is_paused = driver.execute_script("return arguments[0].paused;", is_paused)  # 判断视频是否被暂停
                        while is_paused:
                            print('%s 视频被暂停' % get_time())
                            h5_video.click()
                            is_paused = driver.execute_script("return arguments[0].paused;", is_paused)  # 判断视频是否被暂停
                            print('%s 视频播放中...' % get_time())

                        time.sleep(1)

                    print(jiang.text + ': 播放完成')
            print(sub.text + ': 章节 播放完成！')
    print('恭喜全部章节已播放完成！')


login()
