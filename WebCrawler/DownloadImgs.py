import asyncio
import aiohttp

import datetime
import time
import os

# import requests

heads = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}


# region 异步请求
async def writeImageFile(client, url):
    response = await client.get(url, headers=heads)

    if response.ok:
        # 获取当前时间
        now = datetime.datetime.now()

        # 提取年月日，小时、分钟、秒数和毫秒数
        file_name = now.strftime("%Y%m%d%H%M%S%f")[:-3]
        with open(f'E:/Download/imgs/{file_name}.jpg', 'wb')as f:
            f.write(await response.read())
    # else:
    #     raise FileNotFoundError(f"文件已下载完成：{url}")


def get_file_ser(i, length):
    return str(i).zfill(length)


async def downloadImages(start, end, length):
    async  with aiohttp.ClientSession()as client:
        tasks = []
        for i in range(start, end):
            url = 'https://shemaleleaks.com/photos/b/u/busty-ema/1000/busty-ema_{}.jpg'
            url = url.format(get_file_ser(i, length))
            task = asyncio.create_task(writeImageFile(client, url))
            tasks.append(task)

        await asyncio.wait(tasks)


if __name__ == '__main__':
    start = int(input('请输入开始字符串：'))
    end = int(input('请输入结束字符串：'))
    length = int(input('请输入长度：'))
    if not os.path.exists('E:/Download/imgs'):
        os.mkdir('E:/Download/imgs')

    startTime = time.time()

    loop = asyncio.get_event_loop()
    loop.run_until_complete(downloadImages(start, end, length))

    endTime = time.time()
    print(f'用时：{(endTime - startTime)}s')
    print('complete!')
# endregion


# region 正常请求
# https://shemaleleaks.com/photos/b/u/busty-ema/1000/busty-ema_0159.jpg
# def writeImageFile(url):
#     response = requests.get(url, headers=heads)
#
#     if response.ok:
#         # 获取当前时间
#         now = datetime.datetime.now()
#
#         # 提取年月日，小时、分钟、秒数和毫秒数
#         file_name = now.strftime("%Y%m%d%H%M%S%f")[:-3]
#         with open(f'E:/Download/imgs/{file_name}.jpg', 'wb')as f:
#             f.write(response.content)
#     else:
#         raise FileNotFoundError("文件已下载完成")
#
#
# def get_file_ser(i, length):
#     return str(i).zfill(length)
#
#
# def downloadImages(start, end, length):
#     for i in range(start, end):
#         url = 'https://shemaleleaks.com/photos/b/u/busty-ema/1000/busty-ema_{}.jpg'
#         url = url.format(get_file_ser(i, length))
#         writeImageFile(url)
#
#
# if __name__ == '__main__':
#     start = int(input('请输入起始字符串：'))
#     end = int(input('请输入起始字符串：'))
#     length = int(input('请输入长度：'))
#     if not os.path.exists('E:/Download/imgs'):
#         os.mkdir('E:/Download/imgs')
#
#     startTime = time.time()
#
#     downloadImages(start, end, length)
#
#     endTime = time.time()
#     print(f'用时：{(endTime - startTime)}s')
#     print('complete!')
# endregion
