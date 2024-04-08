# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17

import time
import logging
# 打开文本文档给人编辑
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# region 不自动关闭浏览器

# 配置日志记录
logging.basicConfig(filename='app.log', level=logging.INFO,
                    format='%(asctime)s %(levelname)s: %(message)s')


class KaiFangDaXue:

    def __init__(self, name, pwd, speed, headless):
        self.speed = speed
        self.name = name
        self.pwd = pwd
        options = webdriver.ChromeOptions()
        if headless == 'y':
            # 开启无头模式
            options.add_argument('headless')
        # 禁用图片
        prefs = {"profile.managed_default_content_settings.images": 2}
        options.add_experimental_option("prefs", prefs)
        # 隐藏自动化工具提示
        options.add_experimental_option("useAutomationExtension", False)
        options.add_experimental_option("excludeSwitches", ['enable-automation'])
        options.add_experimental_option("detach", True)
        # 设置user-agent，改变user-agent的值
        user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        self.driver = webdriver.Chrome(options=options)
        self.driver.execute_cdp_cmd("Network.setUserAgentOverride", {"userAgent": user_agent})
        # 获取driver对象, 并将配置好的option传入进去
        # driver = webdriver.Chrome()
        self.driver.get('http://decai.hnzjpx.net/')

    def get_time(self):
        # 获取当前时间的时间戳
        current_timestamp = time.time()
        # 将时间戳转换为本地时间的struct_time对象
        local_time = time.localtime(current_timestamp)
        # 使用strftime()方法将struct_time对象格式化为指定的时间字符串
        return time.strftime("%Y-%m-%d %H:%M:%S", local_time)

    # driver.get('https://www.baidu.com')

    def getObjectById(self, id):
        return self.driver.find_element(By.ID, id)

    def getObjectByXpath(self, path):
        return self.driver.find_element(By.XPATH, path)

    def getObjectByClassName(self, css):
        return self.driver.find_element(By.CLASS_NAME, css)

    def get_is_done(self):
        str_dones = WebDriverWait(self.driver, 10).until(
            EC.presence_of_all_elements_located(
                (By.CLASS_NAME, "ant-tag-text"))
        )
        flag = any(element.text == '未完成' for element in str_dones)

        return flag

    def log_info(self, msg):
        logging.info(f'{msg}')
        print(f'{msg} {self.get_time()}')

    def login(self):
        btn_know = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "ant-modal-close-x"))
        )

        self.log_info('点击知道了')
        btn_know.click()

        btn_login = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[1]/div[2]/div[1]/div/div[2]/button[1]'))
        )
        time.sleep(1)
        btn_login.click()
        self.log_info('点击首页登录')

        txt_username = self.getObjectById("user_name")
        txt_username.send_keys(self.name)

        txt_pwd = self.getObjectById("password")
        txt_pwd.send_keys(self.pwd)

        self.log_info('开始登录')
        # 登录按钮
        btn_login1 = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.XPATH,
                                            '/html/body/div[4]/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[1]/form/div[5]/div/div/button'))
        )
        btn_login1.click()
        self.log_info('个人中心')
        time.sleep(1)
        # 个人中心链接
        person = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'ant-dropdown-link'))
        )

        person.click()
        self.log_info('进行中')
        # 进行中链接
        self.btnProccess = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[2]/div[2]/div/div[3]/p/span[2]'))
        )

        self.btnProccess.click()

        self.log_info('查看详情')

        time.sleep(2)
        self.btn_details = WebDriverWait(self.driver, 10).until(
            EC.presence_of_all_elements_located(
                (By.CSS_SELECTOR, "[class='btn-qm btn-qm-shadow btn-qm-xs btn-radius']"))
        )
        self.log_info(f'需要学习的课程：{len(self.btn_details)}')

    def play_video(self):
        try:
            for detail in self.btn_details:
                if detail.tag_name == 'button':
                    detail.click()
                    self.log_info('视频页面知道了')
                    # 知道了
                    btn_know1 = WebDriverWait(self.driver, 10).until(
                        EC.presence_of_element_located(
                            (By.CSS_SELECTOR, "[class='ant-btn ant-btn-primary ant-btn-lg']"))
                    )
                    btn_know1.click()

                    self.log_info('获取课程列表')
                    time.sleep(1)
                    # 获取进度集合
                    progresss = WebDriverWait(self.driver, 10).until(
                        EC.presence_of_all_elements_located((By.CLASS_NAME, "ant-progress-text"))
                    )
                    btn_studys = self.immediately_study()
                    self.log_info("立即学习按钮集合：%s" % len(btn_studys))
                    btn_studys.pop(0)
                    self.log_info("移除后的学习按钮集合：%s" % len(btn_studys))
                    for i in range(len(progresss)):
                        self.log_info(progresss[i].text)
                        if progresss[i].text.strip() != "" and progresss[i].text.endswith('%'):
                            self.log_info('第%s节' % i)
                            btn_studys[i].click()

                            time.sleep(2)
                            # 视频页知道了
                            btn_video_know = WebDriverWait(self.driver, 10).until(
                                EC.presence_of_element_located(
                                    (By.CSS_SELECTOR, "[class='ant-btn ant-btn-primary ant-btn-lg']"))
                            )
                            if btn_video_know is not None:
                                btn_video_know.click()

                            time.sleep(1)
                            self.set_playRate()

                            while self.get_is_done():
                                time.sleep(2)
                                self.set_playRate()

                            self.driver.back()  # 返回上一页

                            time.sleep(1)
                            progresss = WebDriverWait(self.driver, 10).until(
                                EC.presence_of_all_elements_located((By.CLASS_NAME, "ant-progress-text"))
                            )

                        btn_studys = self.immediately_study()
                        btn_studys.pop(0)

                self.driver.back()
                time.sleep(1)
                self.btn_details = WebDriverWait(self.driver, 10).until(
                    EC.presence_of_all_elements_located(
                        (By.CSS_SELECTOR, "[class='btn-qm btn-qm-shadow btn-qm-xs btn-radius']"))
                )
        except Exception as ex:
            self.log_info(ex)

    def immediately_study(self):
        # 获取立即学习按钮集合
        btn_studys = WebDriverWait(self.driver, 10).until(
            EC.presence_of_all_elements_located(
                (By.CSS_SELECTOR, "[class='btn-qm btn-qm-shadow btn-qm-xs']"))
        )
        return btn_studys

    def set_playRate(self):
        # 使用JavaScript覆盖元素的点击事件
        self.driver.execute_script("""
                                    var str_video = document.getElementsByTagName('video');
                                    console.log('str_video-----',str_video);
                                        // 当视频播放时，设置播放速度
                                    str_video[0].playbackRate = %s; 
                                    """ % self.speed)


if __name__ == '__main__':
    # region 命令行输入方式
    user_name = input('请输入用户名：').strip()
    while user_name == '':
        user_name = input('请输入用户名：').strip()
    pwd = input('请输入密码：').strip()
    while pwd == '':
        pwd = input('请输入密码：').strip()
    headless = input('是否无头模式：').strip()
    while headless == '':
        headless = input('是否无头模式：').strip()
    # endregion
    _kaifang = KaiFangDaXue(user_name, pwd, '2', headless)
    _kaifang.login()
    _kaifang.play_video()

# endregion
