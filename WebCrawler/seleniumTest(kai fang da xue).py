# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17

import time
import logging
# 打开文本文档给人编辑
from selenium import webdriver
from selenium.webdriver.common.by import By
from PIL import Image
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import ctypes
from selenium.webdriver.common.action_chains import ActionChains

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

options = webdriver.ChromeOptions()
# options.add_argument('headless')
options.add_argument('window-size=1920x1080')

options.add_experimental_option("detach", True)

# 获取driver对象, 并将配置好的option传入进去
driver = webdriver.Chrome(options=options)
# driver = webdriver.Chrome()
driver.get('http://decai.hnzjpx.net/')


def getObjectById(id):
    return driver.find_element(By.ID, id)


def getObjectByXpath(path):
    return driver.find_element(By.XPATH, path)


def getObjectByClassName(css):
    return driver.find_element(By.CLASS_NAME, css)


btn_know = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "ant-modal-close-x"))
)

# time.sleep(1)
# str_know = driver.find_element(By.CLASS_NAME,"ant-modal-close-x")
btn_know.click()

btn_login = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[1]/div[2]/div[1]/div/div[2]/button[1]'))
)
btn_login.click()

txt_username = getObjectById("user_name")
txt_username.send_keys("13875271978")

txt_pwd = getObjectById("password")
txt_pwd.send_keys("lql271978")
print('登录')
# 登录按钮
btn_login1 = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH,
                                    '/html/body/div[4]/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[1]/form/div[5]/div/div/button'))
)
btn_login1.click()
print('个人中心')
# 个人中心链接
person = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, 'ant-dropdown-link'))
)
person.click()
print('进行中')
# 进行中链接
btnProccess = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[2]/div[2]/div/div[3]/p/span[2]'))
)

btnProccess.click()

print('查看详情')

# 查看详情
btn_details = WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, "[class='btn-qm btn-qm-shadow btn-qm-xs btn-radius']"))
)
print(len(btn_details))

for detail in btn_details:
    detail.click()
    print('知道了')
    # 知道了
    btn_know1  = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "[class='ant-btn ant-btn-primary ant-btn-lg']"))
    )
    btn_know1.click()



iframe = None
result = None


def switch_page_iframe(ifrName, index):
    # 切换到新窗口
    driver.switch_to.window(driver.window_handles[index])
    # 切换到iframe
    iframe = getObjectById(ifrName)
    driver.switch_to.frame(iframe)


def login():
    global iframe
    element = getObjectById('tbx_UserID')
    element.send_keys(idcard)
    element1 = getObjectById('tbx_UserName')
    element1.send_keys(user_name)
    element2 = getObjectById('tbx_Password')
    element2.send_keys(pwd)
    logging.info('%s 开始登录' % get_time())
    print('%s 开始登录' % get_time())
    element3 = getObjectById('btn_Login')
    element3.click()
    element4 = getObjectById('peixun')
    element4.click()
    print('%s 进入二维码页面' % get_time())
    logging.info('%s 进入二维码页面' % get_time())
    iframe = getObjectById('eduMainFrame')
    driver.switch_to.frame(iframe)  # 切换到页面iframe里面去后去元素
    qrCode = getObjectById('ImageWxLogin')
    qrCode.screenshot(r'D:\test.png')
    image = Image.open(r'D:\test.png')
    image.show()
    time.sleep(5)
    image.close()
    # 创建WebDriverWait实例，等待最多10秒
    wait = WebDriverWait(driver, 30)
    # 等待直到元素可见
    entry = wait.until(EC.element_to_be_clickable((By.ID, 'hlTrainLink')))
    entry.click()
    print('%s 进入告知培训页面' % get_time())
    logging.info('%s 进入告知培训页面' % get_time())
    # 进入新页面
    switch_page_iframe('eduMainFrame', 1)
    entryTrain = driver.find_element(By.LINK_TEXT, '>> 进入培训')
    entryTrain.click()
    print('%s 进入培训页面' % get_time())
    logging.info('%s 进入培训页面' % get_time())


# login()


# region methods
# 章节列表页面 第几讲
def course_list():
    print('%s 进入课程页面' % get_time())
    logging.info('%s 进入课程页面' % get_time())
    table = getObjectById('gvClassCourseList')
    trs = table.find_elements(By.TAG_NAME, 'tr')
    if len(trs) > 2:
        try:
            for i in range(2, len(trs)):
                # 使用XPath获取所需的元素 /html/body/form/div[6]/div/table/tbody/tr[2]/td[6]/div/span
                try:  # /html/body/form/div[6]/div/table/tbody/tr[3]/td[6]/div/span
                    ratio = getObjectByXpath("//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[6]/div/span")
                    curose_txt = getObjectByXpath("//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[4]")
                except Exception as ex:
                    logging.error("课程列表获取元素报错：", ex)
                    driver.refresh()
                    switch_page_iframe('eduMainFrame', 1)
                    ratio = getObjectByXpath("//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[6]/div/span")
                    curose_txt = getObjectByXpath("//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[4]")

                text = '{}:{}'
                text.format(curose_txt, ratio.text)
                # 获取第三个元素的文本值
                if ratio.text != '100%':  # /html/body/form/div[6]/div/table/tbody/tr[4]/td[3]/div[1]/a
                    try:
                        studySubject = getObjectByXpath(
                            "//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[3]/div[1]/a")
                    except Exception as ex:
                        logging.error("课程列表获取进度报错：", ex)
                        driver.refresh()
                        switch_page_iframe('eduMainFrame', 1)
                        studySubject = getObjectByXpath(
                            "//table[@id='gvClassCourseList']//tr[" + str(i) + "]/td[3]/div[1]/a")

                    driver.execute_script("arguments[0].setAttribute('target', '_blank')", studySubject)
                    studySubject.click()
                    driver.switch_to.window(driver.window_handles[2])
                    chapter_list()
                    print('%s 播放完成一个课程' % get_time())
                    logging.info('%s 播放完成一个课程' % get_time())
                    driver.close()
                    switch_page_iframe('eduMainFrame', 1)

        except Exception as ex:
            logging.error("course_list函数报错：", ex)
            result = ctypes.windll.user32.MessageBoxW(None, ex, '提示', MB_OK)
    print('%s %s%s-恭喜你，课程全部播放完成!!!' % (get_time(), user_name, idcard))
    # driver.quit()430903200104015130


def chapter_list():
    try:
        print('%s 进入第几讲列表页面' % get_time())
        print('%s 刷新列表' % get_time())
        getObjectById('LinkButton1').click()  # 刷新列表
        tableZhangjie = getObjectById("DataList1")
        tds = tableZhangjie.find_elements(By.TAG_NAME, 'td')  # 找到某一讲没有学完的
        for td in tds:
            elemA = td.find_element(By.TAG_NAME, "a")
            if td.text != '' and elemA.get_attribute('class') != 'WLinkW':  # 未完成
                print(elemA.text)
                elemA.click()
                curriculum_play()
    except Exception as ex:
        logging.error("chapter_list函数报错：", ex)
        result = ctypes.windll.user32.MessageBoxW(None, ex, '提示', MB_OK)


def curriculum_play():
    try:
        print('%s 进入正式视频学习页面' % get_time())
        switch_page_iframe('MediaAutoFrame', 3)
        play_m = driver.find_element(By.TAG_NAME, 'video')

        video_src = play_m.get_attribute('src')
        while video_src is None or video_src == '':
            driver.refresh()
            switch_page_iframe('MediaAutoFrame', 3)
            time.sleep(2)
            play_m = driver.find_element(By.TAG_NAME, 'video')
            video_src = play_m.get_attribute('src')
        play_m.click()
        # 获取视频当前播放进度（以秒为单位）

        # current_time = driver.execute_script("return arguments[0][0].currentTime;", play_m)
        current_time = play_m.get_attribute('currentTime')
        print('current_time：%s' % current_time)
        # current_time = driver.execute_script("return document.MediaPlayer.GetPosition();")/1000
        # 获取视频总时长（以秒为单位）
        # total_duration = driver.execute_script("return document.MediaPlayer.GetLength();")/1000
        # total_duration = driver.execute_script("return arguments[0][0].duration;", play_m)
        total_duration = play_m.get_attribute('duration')
        print('total_duration：%s' % total_duration)
        if current_time == total_duration:
            play_m.click()
            current_time, total_duration = retry_get_time(current_time, play_m, total_duration)
        else:
            while current_time == 'NaN' or total_duration == 'NaN':
                play_m = video_page_refresh(play_m)
                play_m.click()
                current_time, total_duration = retry_get_time(current_time, play_m, total_duration)

        while current_time == total_duration:
            play_m.click()
            current_time, total_duration = retry_get_time(current_time, play_m, total_duration)
            if current_time == total_duration:
                play_m = video_page_refresh(play_m)
                play_m.click()
                current_time, total_duration = retry_get_time(current_time, play_m, total_duration)

        total_time = float(total_duration)
        print('%s 开始播放视频' % get_time())
        print('%s 播放中...' % get_time())
        while float(current_time) < total_time:
            is_paused = driver.execute_script("return arguments[0].paused;", play_m)  # 判断视频是否被暂停
            while is_paused:
                print('%s 视频被暂停' % get_time())
                play_m.click()
                is_paused = driver.execute_script("return arguments[0].paused;", play_m)  # 判断视频是否被暂停
                print('%s 视频播放中...' % get_time())

            time.sleep(1)
            current_time = play_m.get_attribute('currentTime')
        driver.close()
        print('%s 看完关闭当前页' % get_time())
        driver.switch_to.window(driver.window_handles[2])
        # switch_page_iframe('eduMainFrame', 2)

    except Exception as ex:
        strEx = str(ex)
        if strEx.find("确定") > -1:
            # 弹出消息框
            result = ctypes.windll.user32.MessageBoxW(None, strEx, '提示', MB_OK)
        logging.error("curriculum_play函数报错：", ex)


def video_page_refresh(play_m):
    try:
        driver.refresh()
        switch_page_iframe('MediaAutoFrame', 3)
        play_m = driver.find_element(By.TAG_NAME, 'video')
        return play_m
    except Exception as ex:
        logging.error("video_page_refresh函数报错：", ex)
        result = ctypes.windll.user32.MessageBoxW(None, ex, '提示', MB_OK)


def retry_get_time(current_time, play_m, total_duration):
    try:
        current_time = play_m.get_attribute('currentTime')
        print('重新获取current_time：%s' % current_time)
        total_duration = play_m.get_attribute('duration')
        print('重新获取total_duration：%s' % total_duration)
        return current_time, total_duration
    except Exception as ex:
        logging.error("retry_get_time函数报错：", ex)
        result = ctypes.windll.user32.MessageBoxW(None, ex, '提示', MB_OK)

# endregion

# course_list()

# endregion

# region 自动关闭浏览器
# chrome = webdriver.Chrome()
# chrome.get("https://www.baidu.com")
# # chrome.implicitly_wait(10)  # 隐式等待 10 秒钟
# element = chrome.find_element(By.ID, 'kw')
# element.send_keys('test')
# time.sleep(2)
# endregion
