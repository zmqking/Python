import math
import random
import time

import requests
import cv2
import os
from urllib.parse import urlencode

headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Mobile/16D57 MicroMessenger/6.7.4 NetType/WIFI Language/zh_CN",
}
token = ''
COMMENTS = ['很好', '非常棒', '视频质量不错', '学到了东西', '深有体会']


# 定义一个类，将 JSON 数据映射到类的属性上
class JSONObject:
    def __init__(self, data):
        self.__dict__ = data


def download_video(url):
    dir, fileName = get_dir_fileName(url)
    dir_name = os.path.join("D:/IDM", dir)
    if not os.path.exists(dir_name):
        os.mkdir(dir_name)

    # 保存视频文件
    video_path = os.path.join(dir_name, fileName)
    if not os.path.exists(video_path):
        response = requests.get(url)
        with open(video_path, 'wb') as file:
            file.write(response.content)
    return video_path


def get_dir_fileName(url):
    # 找到倒数第二个斜杠的位置
    last_slash_index = url.rfind('/')
    # 从后向前找到倒数第二个斜杠，需要先找到最后一个斜杠的位置
    if last_slash_index != -1:
        # 从倒数第一个斜杠向前数，直到找到倒数第二个斜杠
        second_last_slash_index = url.rfind('/', 0, last_slash_index)
    return url[second_last_slash_index + 1:last_slash_index], url[last_slash_index + 1:]


def get_duration_from_cv2(filename):
    cap = cv2.VideoCapture(filename)
    if cap.isOpened():
        rate = cap.get(5)
        frame_num = cap.get(7)
        duration = frame_num / rate
        return duration
    return -1


def reqeust_json(url):
    headers["Token"] = token
    response = requests.post(url, headers=headers)
    print('request result：',response.text)
    return JSONObject(response.json())


def getCourseList():
    url = 'http://gwjxjytrainsys.hnjsrcw.com/api/Study/UserCourseList/CE2024?ms_code=99'  # 课程列表
    course_list = reqeust_json(url)
    if bool(course_list.data):
        print('开始遍历章节...')
        course_list_data = list(course_list.data)
        for course in course_list_data:
            print(f'开始【{course["course_name"]}】章节...')
            course_ware_list = get_Courseware(course['course_id'])  # 获取课件
            course_ware_list_data = list(course_ware_list.data)
            if bool(course_ware_list_data):
                print('开始遍历课件...')
                # todo:判断是否播放完成
                for course_ware in course_ware_list_data:  # 课件列表
                    print(f'开始【{course_ware["ware_name"]}】章节...')
                    print('获取单个课件信息...')
                    if course_ware['study_state'].upper() != 'W':
                        video_info = reqeust_json(
                            f'http://gwjxjytrainsys.hnjsrcw.com/api/Study/CoursewareDetail/CE2024?ware_id={course_ware["ware_id"]}')
                        if bool(video_info.data):
                            print('视频信息：', str(video_info.data))
                            video_path = download_video(video_info.data['video_url'])
                            currentTime = video_info.data['LAST_POSITION']
                            duration = get_duration_from_cv2(video_path)
                            loop_len = math.ceil(float(duration)) - currentTime  # 循环时长
                            start_time = time.time()
                            temp_len = 0
                            save_position_info = save_position(video_info.data['ware_id'], currentTime)
                            while save_position_info.data['state'] != 'W':
                                time.sleep(5)
                                currentTime = currentTime + 5
                                save_position_info = save_position(video_info.data['ware_id'], currentTime)
                                print('保存进度结果：', str(save_position_info.data))
                                # todo:正式放开
                                if bool(save_position_info) and save_position_info.data['state'] == 'W':
                                    break
                                temp_len = time.time() - start_time
                    else:
                        print('已看完')

            if course['COURSE_APPRAISE'] != '已评价':
                # 评论章节
                commet_res = submit_comment(course['course_id'], random.choice(COMMENTS))
                print('评价结果：', commet_res)


def get_Courseware(course_id):
    url = f'http://gwjxjytrainsys.hnjsrcw.com/api/Study/UserCoursewareList/CE2024?course_id={course_id}'
    print(f'获取课件url：{url}')
    return reqeust_json(url)


def save_position(ware_id, currentTime):
    url = f'http://gwjxjytrainsys.hnjsrcw.com/api/Study/SaveUserPlayPosition/CE2024?ware_id={ware_id}&currentTime={currentTime}'
    print(f'发起视频保存请求url：{url}')
    return reqeust_json(url)


def submit_comment(course_id, comment):
    url = f'http://gwjxjytrainsys.hnjsrcw.com/api/Study/CourseAppraise/CE2024?course_id={course_id}&Appraise={urlencode(comment)}'
    print(f'发起评论保存请求url：{url}')
    return reqeust_json(url)


if __name__ == '__main__':
    token = input('请输入token：')
    getCourseList()
