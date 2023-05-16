# -*- coding: UTF-8 -*-
# Project -> File:Python -> Mongodb 
# Author:king
# Date:2023/5/16

import pymongo

def excuteDB():
    try:
        with pymongo.MongoClient('mongodb://localhost:27017/')as conn:
            items = {"name": "kelly", "age": 50, "address": "中国香港", "hobby": "唱歌"}
            collection = conn["mydatabase"]["customers"]
            collection.insert_one(items)
            # <editor-fold desc="更新">
            query = {"name": "kelly"}
            val = {"$set": {"hobby": "跳舞"}}
            collection.update_one(query, val)
            print('update success!')
            # </editor-fold>
            # 查询
            list = collection.find()
            for item in list:
                print(item)
            print('query success!')
            # <editor-fold desc="删除">
            id = {"_id": "64631b72e0d4f1b5c2986dea"}
            collection.delete_one(id)
            print('delete success!')
            # </editor-fold>

    except Exception as ex:
        print(ex)

excuteDB()
print('excute done!')

