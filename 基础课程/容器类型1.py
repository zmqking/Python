"""
数组切 步长位负数的，从右往左算
"""

# name = '1234567891011'
# print(name[1:4:2])#2,4  第三位是步程，相隔几个
# print(name[1:7:5])#2,7


# s = 'abcdefghijk'
# print(s[-3:-1])
#
# my_str = "welcome to www.tulingxueyuan.com"
# t = my_str.split(' ', 1)
# print(t)
# print("%s 大海" % 'aaa')
#
# # 1、荷兰人Guido van Rossum
#
# print(type([1, 2]))
#
# print(9 // 2)
#
# a = 10
#
# a *= 10
#
# print(a)
#
# x = (3 == 3, 5)
# print(x)


# user = input('请输入用户名：')
# pwd = input('请输入密码：')
# if user == "king" and pwd == "123":
#     print('登录成功')
# else:
#     print('登录失败')

# for i in [0, 1]:
#     print(i + 1)
#
# for i in range(3):
#     print(i)

#第六题
i = 1
while i < 11:
    if i != 3 and i != 7 and i != 8:
        print(i)
    i += 1

#第七题
i = 0
res = 0
while i < 10:
    i += 1
    res += i
print(res)

# 第八题
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        print('偶数')
    else:
        print('奇数')

for i in range(1, 11):
    if i % 2 == 0:
        print('偶数')
    else:
        print('奇数')
