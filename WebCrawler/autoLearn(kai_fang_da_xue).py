# -*- coding: UTF-8 -*-
# Project -> File:Python -> selenium 
# Author:king
# Date:2023/5/17
import math
import time
import logging
# 打开文本文档给人编辑
from selenium import webdriver
from selenium.common import NoSuchElementException, TimeoutException, StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# region 不自动关闭浏览器


class KaiFangDaXue:

    def __init__(self, name, pwd, speed, headless):
        self.speed = speed
        self.name = name
        self.pwd = pwd
        self.Watched = []
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
        options.add_argument("--incognito")
        # 添加静音参数
        options.add_argument("--mute-audio")
        options.add_experimental_option("detach", True)
        # 定义不同的User-Agent列表
        user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.4044.138 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
            # 添加更多的User-Agent...
        ]

        # 随机选择一个User-Agent
        import random
        user_agent = random.choice(user_agents)
        self.log_info(user_agent)
        # 设置user-agent，改变user-agent的值
        # user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        self.driver = webdriver.Chrome(options=options)
        self.driver.execute_cdp_cmd("Network.setUserAgentOverride", {"userAgent": user_agent})
        # 获取driver对象, 并将配置好的option传入进去
        # driver = webdriver.Chrome()
        self.driver.get('http://decai.hnzjpx.net/')
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

    # driver.get('https://www.baidu.com')

    def getObjectById(self, id):
        return self.driver.find_element(By.ID, id)

    def getObjectByXpath(self, path):
        return self.driver.find_element(By.XPATH, path)

    def getObjectByClassName(self, className):
        return self.driver.find_element(By.CLASS_NAME, className)

    def getObjectByCssSelector(self, css):
        return self.driver.find_element(By.CSS_SELECTOR, f"[class='{css}']")

    def get_is_done(self):
        str_dones = WebDriverWait(self.driver, 5).until(
            EC.presence_of_all_elements_located(
                (By.CLASS_NAME, "ant-tag-text"))
        )
        flag = any(element.text == '未完成' for element in str_dones)
        return flag

    def log_info(self, msg):
        logging.info(f'{msg}')
        print(f'{msg} {self.get_time()}')

    def login(self):
        try:
            btn_know = WebDriverWait(self.driver, 5).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ant-modal-close-x"))
            )
            # btn_know = self.getObjectByClassName('ant-modal-close-x')
            if btn_know is not None:
                self.log_info('点击知道了')
                btn_know.click()
        except NoSuchElementException:
            self.log_info('无知道了确认框！')

        self.login_process()

    def login_process(self):
        btn_login = WebDriverWait(self.driver, 5).until(
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
        btn_login1 = WebDriverWait(self.driver, 5).until(
            EC.presence_of_element_located((By.XPATH,
                                            '/html/body/div[4]/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[1]/form/div[5]/div/div/button'))
        )
        btn_login1.click()
        self.log_info('个人中心')
        time.sleep(1)
        while True:
            try:
                # 个人中心链接
                person = WebDriverWait(self.driver, 5).until(
                    EC.presence_of_element_located((By.CLASS_NAME, 'ant-dropdown-link'))
                )
                person.click()
                break
            except TimeoutException:
                self.driver.refresh()

        self.log_info('进行中')
        # self.get_btnProccess()

        self.log_info('查看详情')
        time.sleep(1)
        self.get_btn_details()

    # def get_btnProccess(self):
    #     while True:
    #         try:
    #             # 进行中链接
    #             self.btnProccess = WebDriverWait(self.driver, 5).until(
    #                 EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/div/div[2]/div[2]/div/div[3]/p/span[2]'))
    #             )
    #             self.btnProccess.click()
    #             break
    #         except TimeoutException:
    #             self.driver.refresh()

    def play_video(self):
        self.log_info(f"学习课程数：{len(self.btn_details)}")
        flag = True

        for de in range(len(self.btn_details)):
            try:
                print('进入查看详情循环遍历！')
                if self.btn_details[de].tag_name == 'button':
                    self.btn_details[de].click()
                    self.log_info('视频页面知道了')
                    # 知道了
                    try:
                        btn_know1 = WebDriverWait(self.driver, 5).until(
                            EC.presence_of_element_located(
                                (By.CSS_SELECTOR, "[class='ant-btn ant-btn-primary ant-btn-lg']"))
                        )
                        # btn_know1 = self.getObjectByCssSelector('ant-btn ant-btn-primary ant-btn-lg')
                        if btn_know1 is not None:
                            btn_know1.click()
                    except TimeoutException:
                        self.log_info('无知道了确认框！')

                    self.log_info('获取课程列表')
                    time.sleep(1)
                    # 获取进度集合
                    while True:
                        try:
                            p_progresss = WebDriverWait(self.driver, 5).until(
                                EC.presence_of_all_elements_located((By.CLASS_NAME, "progressWrap"))
                            )

                            titles = WebDriverWait(self.driver, 5).until(
                                EC.presence_of_all_elements_located((By.CSS_SELECTOR, "p[class='title']"))
                            )
                            break
                        except TimeoutException:
                            print('获取章节进度超时')
                            self.driver.refresh()

                    btn_studys = self.immediately_study()
                    self.log_info("立即学习按钮集合：%s" % len(btn_studys))
                    btn_studys.pop(0)
                    self.log_info("移除后的学习按钮集合：%s" % len(btn_studys))
                    for i in range(len(p_progresss)):
                        if titles[i].text.find('考试') > -1:
                            self.Watched.append(self.btn_details[de])
                            continue

                        progress = p_progresss[i].find_element(By.CLASS_NAME, 'ant-progress-text')
                        str_progress = progress.text
                        if i < len(p_progresss) and str_progress.strip() != "" and str_progress.endswith('%'):
                            self.log_info(f'第{i + 1}节《{titles[i].text}》，进度{str_progress}')
                            btn_studys[i].click()

                            try:
                                time.sleep(1)
                                # 视频页知道了
                                btn_video_know = self.getObjectByCssSelector('ant-btn ant-btn-primary ant-btn-lg')
                                # btn_video_know = WebDriverWait(self.driver, 5).until(
                                #     EC.presence_of_element_located(
                                #         (By.CSS_SELECTOR, "[class='ant-btn ant-btn-primary ant-btn-lg']"))
                                # )
                                if btn_video_know is not None:
                                    btn_video_know.click()
                            except NoSuchElementException:
                                self.log_info('无知道了确认框！')

                            time.sleep(1)
                            while True:
                                try:
                                    self.videoss = WebDriverWait(self.driver, 5).until(
                                        EC.presence_of_element_located((By.TAG_NAME, 'video'))
                                    )
                                    self.log_info('确认视频控件')
                                    break
                                except Exception as ex:
                                    self.log_info(f'视频控件控件不存在：{ex}')
                                    self.driver.refresh()

                            # 获取未播放完的节点
                            sections = WebDriverWait(self.driver, 5).until(
                                EC.presence_of_all_elements_located(
                                    (By.CLASS_NAME, "ant-tag-text"))
                            )
                            video_titles = WebDriverWait(self.driver, 5).until(
                                EC.presence_of_all_elements_located(
                                    (By.CSS_SELECTOR, "span[class='mr10']"))
                            )
                            for j in range(len(sections)):
                                print(f'{video_titles[j].text}；状态：{sections[j].text}')
                                if video_titles[j].text.find('练习') > 0:
                                    continue
                                if sections[j].text == '未完成':
                                    sections[j].click()

                                    self.log_info('设置速率')
                                    self.videoss = self.driver.find_element(By.TAG_NAME, 'video')
                                    print(self.videoss)
                                    cur_time = self.driver.execute_script("return arguments[0].currentTime",
                                                                          self.videoss)
                                    duration = self.driver.execute_script("return arguments[0].duration",
                                                                          self.videoss)
                                    # cur_time = float(self.videoss.get_attribute('currentTime'))
                                    # duration = float(self.videoss.get_attribute('duration'))
                                    while (
                                            cur_time + 30) > duration or cur_time is None or duration is None or math.isnan(
                                            cur_time) or math.isnan(duration):
                                        print('重新获取视频控件值')
                                        sections[j].click()
                                        time.sleep(1)
                                        # self.driver.refresh()
                                        cur_time = float(self.videoss.get_attribute('currentTime'))
                                        duration = float(self.videoss.get_attribute('duration'))

                                    print('cur_time:%s' % cur_time)
                                    print('duration:%s' % duration)
                                    while cur_time < duration:
                                        temp_cur_time = cur_time
                                        time.sleep(2)
                                        self.set_playRate()
                                        cur_time = float(self.videoss.get_attribute('currentTime'))
                                        duration = float(self.videoss.get_attribute('duration'))
                                        if temp_cur_time > cur_time:
                                            break
                                        print(cur_time)
                                        # self.videoss = self.driver.find_element(By.TAG_NAME, 'video')

                                    # sections = WebDriverWait(self.driver, 5).until(
                                    #     EC.presence_of_all_elements_located(
                                    #         (By.CLASS_NAME, "ant-tag-text"))
                                    # )

                            print('当前章节已完成-----------')
                            self.driver.back()  # 返回上一页

                            time.sleep(1)
                            while True:
                                try:
                                    p_progresss = WebDriverWait(self.driver, 5).until(
                                        EC.presence_of_all_elements_located(
                                            (By.CLASS_NAME, "progressWrap"))
                                    )
                                    titles = WebDriverWait(self.driver, 5).until(
                                        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "p[class='title']"))
                                    )
                                    break
                                except TimeoutException:
                                    self.driver.refresh()

                            btn_studys = self.immediately_study()
                            btn_studys.pop(0)

                self.driver.back()
                self.log_info('再次进行中。。。')
                # 进行中链接
                # self.get_btnProccess()

                time.sleep(1)
                self.log_info('再次获取查看详情。。。')
                self.get_btn_details()
            except StaleElementReferenceException:
                print('控件不是最新错误！')
                flag = False
                self.get_btn_details()
            # if flag:
            #     self.driver.back()

        self.log_info('恭喜，课程已全部学习完成！')

    def get_btn_details(self):
        while True:
            try:
                self.btn_details = []
                self.btn_detail_status = WebDriverWait(self.driver, 5).until(
                    EC.presence_of_all_elements_located(
                        (By.CSS_SELECTOR, "[class='train_list']"))
                )

                for status in self.btn_detail_status:
                    str_status_text = status.find_element(By.CLASS_NAME, 'score').text
                    if str_status_text.find('未结业') > 0:
                        btn_detail = status.find_element(By.CSS_SELECTOR,
                                                         "[class='btn-qm btn-qm-shadow btn-qm-xs btn-radius']")
                        self.btn_details.append(btn_detail)
                        self.log_info('《未结业》')
                    else:
                        self.log_info('《已结业》')
                break
            except TimeoutException:
                print('获取查询详情集合超时！')
                self.driver.refresh()

    def immediately_study(self):
        while True:
            try:
                # 获取立即学习按钮集合
                btn_studys = WebDriverWait(self.driver, 5).until(
                    EC.presence_of_all_elements_located(
                        (By.CSS_SELECTOR, "[class='btn-qm btn-qm-shadow btn-qm-xs']"))
                )
                break
            except TimeoutException:
                self.driver.refresh()
        return btn_studys

    # region 按倍率播放
    # def set_playRate(self):
    #     # 使用JavaScript覆盖元素的点击事件
    #     self.driver.execute_script("""
    #                                 var str_video = document.getElementsByTagName('video');
    #                                 if (str_video !== null && str_video !== undefined) {
    #                                     console.log('str_video-----',str_video);
    #                                         // 当视频播放时，设置播放速度
    #                                     str_video[0].playbackRate = %s;
    #                                 }
    #                                 """ % self.speed)
    # endregion

    # region 不按倍率播放
    def set_playRate(self):
        # 使用JavaScript覆盖元素的点击事件
        self.driver.execute_script("""  
                                        var str_video = document.getElementsByTagName('video');
                                        if (str_video !== null && str_video !== undefined) {
                                            // 移除事件处理程序
                                            str_video[0].restMove = null;
                                            str_video[0].onseeking = null;
                                            str_video[0].onseeked = null;
                                            console.log('str_video-----',str_video);
                                            var cur_time =parseFloat(str_video[0].currentTime); 
                                            console.log('cur_time-----',cur_time);
                                            if (cur_time === null || cur_time === undefined || isNaN(cur_time)) {
                                            } else {
                                                cur_time += 50;
                                                str_video[0].currentTime = cur_time;
                                            }
                                        }
                                    """)
    # endregion

if __name__ == '__main__':
    # region 命令行输入方式
    user_name = input('请输入用户名：').strip()
    while user_name == '':
        user_name = input('请输入用户名：').strip()
    pwd = input('请输入密码：').strip()
    while pwd == '':
        pwd = input('请输入密码：').strip()

    # headless = input('headless：').strip()
    # while headless == '':
    #     headless = input('headless：').strip()

    # user_name = '13875271978'
    # pwd = 'lql271978'
    # users = [{"name":"18674617528","pwd":"dxy617528"},
    #          {"name":"18674617528","pwd":"dxy617528"},
    #          {"name":"18674617528","pwd":"dxy617528"},
    #          {"name":"18674617528","pwd":"dxy617528"},
    #          {"name":"18674617528","pwd":"dxy617528"},
    #          {"name":"18674617528","pwd":"dxy617528"}]
    headless = 'y'
    _kaifang = KaiFangDaXue(user_name, pwd, '16', headless)
    _kaifang.login()
    _kaifang.play_video()
    # endregion
    # for user in users:
    #     _kaifang = KaiFangDaXue(user['name'], user['pwd'], '16', headless)
    #     _kaifang.login()
    #     _kaifang.play_video()

# endregion
