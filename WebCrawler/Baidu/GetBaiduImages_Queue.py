import asyncio
import aiohttp
from queue import Queue
import os
import time


class Baidu():
    def __int__(self):
        self.url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=9442100676687252916&ipn=rj&ct=201326592&is=&fp=result&fr=&word=张靓颖&cg=star&queryWord=张靓颖&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=30&rn=30&gsm=1e&1683115771526='
        self.heads = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
        }
        self.json_queue = Queue()
        self.count = 0

    async def getJsonData(self):
        async with aiohttp.ClientSession()as client:
            response = await client.get(self.url, headers=self.heads)
            dict = await response.json()
            if bool(dict):
                for item in dict['data']:
                    if len(item) > 0 and item['thumbURL'] != None and item['thumbURL'] != '':
                        self.json_queue.put(await response.json())

    async def downloadImgs(self):
        await self.getJsonData()
        async with aiohttp.ClientSession()as client:
            while not self.json_queue.empty():
                task = asyncio.create_task(self.writeImgFile(client))
                await task

    async def writeImgFile(self, client):
        while not self.json_queue.empty():
            try:
                ul = self.json_queue.get()
                response = await client.get(ul, headers=self.heads)
                self.count += 1
                with open(f'imgs/{self.count}.jpg', 'wb')as f:
                    f.write(await response.read())
            except Exception as ex:
                print(ex)
            finally:
                self.json_queue.task_done()


if __name__ == '__main__':
    t1 = time.time()
    if not os.path.exists('../imgs'):
        os.mkdir('../imgs')

    bd = Baidu()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(bd.downloadImgs())
    print('用时：', time.time() - t1)
