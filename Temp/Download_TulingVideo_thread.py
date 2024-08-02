import os
import requests
from concurrent.futures import ThreadPoolExecutor

heads = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    'referer': 'https://appssry6rs71641.h5.xiaoeknow.com/'
}


def download_segment(url, segment_name, folder):
    response = requests.get(url, heads=heads, stream=True)
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
    response = requests.get(m3u8_url)
    m3u8_content = response.text

    # 解析 m3u8 文件，提取 ts 片段链接
    base_url = m3u8_url.rsplit('/', 1)[0]
    segment_urls = []
    for line in m3u8_content.splitlines():
        if line and not line.startswith('#'):
            segment_url = f"{base_url}/{line}"
            segment_urls.append((segment_url, line))

    # 使用多线程下载 ts 片段
    with ThreadPoolExecutor(max_workers=8) as executor:
        for segment_url, segment_name in segment_urls:
            file_name = segment_name.rsplit('?')[0]
            executor.submit(download_segment, segment_url, file_name, folder)

    # 等待所有 ts 片段下载完成
    executor.shutdown(wait=True)

    # 合并 ts 片段为 mp4 文件
    segment_paths = [segment[1] for segment in segment_urls]
    with open(os.path.join(folder, 'filelist.txt'), 'w') as f:
        for segment_path in segment_paths:
            f.write(f"file '{segment_path}'\n")

    os.system(
        f"ffmpeg -f concat -safe 0 -i {os.path.join(folder, 'filelist.txt')} -c copy {os.path.join(folder, 'output.mp4')}")


# 示例调用
m3u8_url = 'https://c-vod-hw-k.xiaoeknow.com/asset/bddfa762d14bd64ed2dc771d98664375/51be43cc9f7f2582ede448c02a2c4b24.m3u8?sign=5194ef2e4bd45c5eb24d8aec43636a07&t=66a6bd61&us=UVsmgfNEkj&time=1722160292712&uuid=u_64147a27be5ff_FDot6EOTta'
download_m3u8(m3u8_url)
