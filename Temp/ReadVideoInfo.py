import cv2
import os


def get_all_files(directory):
    all_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            all_files.append(os.path.join(root, file))
    return all_files


# 判断是否为视频文件
def is_video_file(file_path):
    video_extends = ['.mp4', '.ts']
    return any(file_path.lower().endswith(ext) for ext in video_extends)


# 获取视频长度
def Get_Video_Seconds(video_path):
    global seconds
    cap = cv2.VideoCapture(video_path)
    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    seconds = int(length / fps)


path = input('请输入目录地址：')
while not any(path):
    path = input('请输入目录地址：')

all_files = get_all_files(path)
# 遍历获取的视频列表
video_files = [file for file in all_files if is_video_file(file)]

print('视频列表:%s' % len(video_files))
for video_path in video_files:
    video_name = os.path.basename(video_path)
    Get_Video_Seconds(video_path)
    sql = "update T_XueXi_ZiYuan set Duration={} where SName='{}' and ZType=1;"
    print(sql.format(seconds, video_name))
    print('''
        IF @@ROWCOUNT = 0
        BEGIN
            PRINT '%s'
        END
        ELSE
        BEGIN
            IF @@ROWCOUNT > 1
            BEGIN
                PRINT '%s'
            END    
        END
    ''' %(video_name,video_name))
