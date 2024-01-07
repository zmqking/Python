# -*- coding: UTF-8 -*-
# Project -> File:Python -> FirstClean 
# Author:king
# Date:12/27/2023

import pandas as pd

# pandas.Series( data, index, dtype, name, copy)
# Series 是 Pandas 中的一种基本数据结构，类似于一维数组或列表，但具有标签（索引），
# 参数说明：
#
# data：一组数据(ndarray 类型)。
#
# index：数据索引标签，如果不指定，默认从 0 开始。
#
# dtype：数据类型，默认会自己判断。
#
# name：设置名称。
#
# copy：拷贝数据，默认为 False。

# ids = [1,2,3]
# myvar = pd.Series(ids)
# print(myvar[1])

# 自定义索引
# txts = ["c#", "java", "python"]
# res = pd.Series(txts, index=["x", "y", "z"])
# print(res)

# 字典转换
sites = {1: "google", 2: "baidu", 3: "wiki"}
# myvar = pd.Series(sites, index=[1, 2])
myvar = pd.Series(sites, index=[1, 2], name="TEST")
print(myvar)
print(myvar[0:4])