# -*- coding: UTF-8 -*-
# Project -> File:Python -> aioMysqlUse 
# Author:king
# Date:2023/5/16

import aiomysql
import asyncio

loop = asyncio.get_event_loop()


async def text_mysql():
    conn = cur = None
    try:
        conn = await aiomysql.connect(host='localhost', port=3306, user='root', password='123465', loop=loop)
        cur = await conn.cursor()
        await cur.execute('')

        print(cur.fetchall())
    except Exception as ex:
        print(ex)
    finally:
        if bool(cur):
            await cur.close()
        if bool(conn):
            conn.close()


loop.run_until_complete(text_mysql())
