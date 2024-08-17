import os
import requests
from concurrent.futures import ThreadPoolExecutor
import time

heads = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    'referer': 'https://javplayer.me/',
    'origin': 'https://javplayer.me',
    'sec-fetch-mode': 'cors',
    'authority': 'cdn.skyearth.xyz'
}


def download_segment(url, segment_name, folder):
    response = requests.get(url, headers=heads, stream=True)
    segment_path = os.path.join(folder, segment_name)
    with open(segment_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)


def download_m3u8(m3u8_url, folder='videos'):
    # 创建存储视频片段的文件夹
    if not os.path.exists(folder):
        os.makedirs(folder)

    # 获取 m3u8 文件内容
    response = requests.get(m3u8_url, headers=heads)
    m3u8_content = response.text
    # print('m3u8_content：' + m3u8_content)
    # 解析 m3u8 文件，提取 ts 片段链接
    base_url = 'https://cdn.skyearth.xyz/7/vod/31/54/8nzjrdq8_12a3d761fc10581aeb8c265fc6bae4188927ab4e5d/720'
    segment_urls = []
    for line in m3u8_content.splitlines():
        if line and not line.startswith('#'):
            segment_url = f"{base_url}/{line}"
            print('segment_url：' + segment_url)
            segment_urls.append((segment_url, line))

    # 使用多线程下载 ts 片段
    with ThreadPoolExecutor(max_workers=8) as executor:
        for segment_url, segment_name in segment_urls:
            file_name = segment_name #.rsplit('?')[0]
            print(file_name)
            executor.submit(download_segment, segment_url, file_name, folder)

    # 等待所有 ts 片段下载完成
    executor.shutdown(wait=True)

    # 合并 ts 片段为 mp4 文件
    segment_paths = [segment[1] for segment in segment_urls]
    with open(os.path.join(folder, 'filelist.txt'), 'w') as f:
        for segment_path in segment_paths:
            f.write(f"file '{segment_path}'\n")

    # os.system(
    #     f"ffmpeg -f concat -safe 0 -i {os.path.join(folder, 'filelist.txt')} -c copy {os.path.join(folder, 'output.mp4')}")


 # await merge_videos()


def merge_videos():
    print(f'merge start!')
    start = time.time()
    os.system(
        f"ffmpeg -f concat -safe 0 -i {'videos/filelist.txt'} -c copy {'output.mp4'}")
    print(f'Duration of use：{time.time() - start} merge done!')


merge_videos()


# 示例调用
# m3u8_url = 'https://cdn.skyearth.xyz/7/vod/31/54/8nzjrdq8_12a3d761fc10581aeb8c265fc6bae4188927ab4e5d/720/v.m3u8'
#
# download_m3u8(m3u8_url)
