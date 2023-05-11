import pymongo

# 连接 MongoDB 数据库
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
col = db["customers"]

# 定义要插入的数据
data = {"name": "John", "address": "Highway 37"}

# 插入一条数据
x = col.insert_one(data)
print(x.inserted_id)

# 插入多条数据
data_list = [
    {"name": "Amy", "address": "Apple st 652"},
    {"name": "Hannah", "address": "Mountain 21"},
    {"name": "Michael", "address": "Valley 345"},
    {"name": "Sandy", "address": "Ocean blvd 2"},
    {"name": "Betty", "address": "Green Grass 1"},
    {"name": "Richard", "address": "Sky st 331"},
    {"name": "Susan", "address": "One way 98"},
    {"name": "Vicky", "address": "Yellow Garden 2"},
    {"name": "Ben", "address": "Park Lane 38"},
    {"name": "William", "address": "Central st 954"},
    {"name": "Chuck", "address": "Main Road 989"},
    {"name": "Viola", "address": "Sideway 1633"}
]
x = col.insert_many(data_list)
print(x.inserted_ids)
