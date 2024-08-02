import os
import time
import aiohttp
import asyncio


async def download_segment(session, url, segment_name, folder):
    async with session.get(url) as response:
        segment_path = os.path.join(folder, segment_name)
        with open(segment_path, 'wb') as f:
            while True:
                chunk = await response.content.read(1024)
                if not chunk:
                    break
                f.write(chunk)


heads = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    'referer': 'https://appssry6rs71641.h5.xiaoeknow.com/'
}


async def download_m3u8(m3u8_url, folder='videos'):
    # 创建存储视频片段的文件夹
    if not os.path.exists(folder):
        os.makedirs(folder)

    async with aiohttp.ClientSession() as session:
        # 获取 m3u8 文件内容
        async with session.get(m3u8_url, headers=heads) as response:
            m3u8_content = await response.text()

        # 解析 m3u8 文件，提取 ts 片段链接
        base_url = m3u8_url.rsplit('/', 1)[0]
        segment_urls = []
        for line in m3u8_content.splitlines():
            if line and not line.startswith('#'):
                segment_url = f"{base_url}/{line}"
                segment_urls.append((segment_url, line))

        # 使用协程下载 ts 片段
        tasks = []
        for segment_url, segment_name in segment_urls:
            file_name = segment_name.rsplit('?')[0]
            task = download_segment(session, segment_url, file_name, folder)
            tasks.append(task)

        await asyncio.gather(*tasks)

    # 合并 ts 片段为 mp4 文件
    segment_paths = [os.path.join(folder, segment[1].rsplit('?')[0]) for segment in segment_urls]
    with open(os.path.join(folder, 'filelist.txt'), 'w') as f:
        for segment_path in segment_paths:
            f.write(f"file '{segment_path}'\n")

    # await merge_videos()


# async def merge_videos():
#     print(f'merge start!')
#     start = time.time()
#     os.system(
#         f"ffmpeg -f concat -safe 0 -i {'filelist.txt'} -c copy {'output.mp4'}")
#     print(f'Duration of use：{time.time() - start} merge done!')


# 示例调用
m3u8_url = 'https://encrypt-k-vod.xet.tech/522ff1e0vodcq1252524126/17ba99911253642701721850240/playlist_eof.m3u8?sign=866376e3a85b84aa2019be31eecc7a5d&t=66a6feed&us=ncOccgBlAr&time=1722177069656&uuid=u_64147a27be5ff_FDot6EOTta'
asyncio.get_event_loop().run_until_complete(download_m3u8(m3u8_url))
