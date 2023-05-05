# number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#
# print(number[3])
#
# print(number[3:5])
#
# # 第三题
# L = ['a', 'b', 'c', 'a']
# print(L.count('a'))
#
# # 第四题
# L = ['a', 'b', 'c', 'd']
# L.pop(len(L) - 1)
# print(L)
#
# # 第五题
# count = 0
# numbers = ['a', 1, 'b']
# for i in numbers:
#     if isinstance(i, int):
#         count += 1
#
# print(count)
#
# # 第六题
# list_data = [1, 2, 3]
# list_data.append('a')
# print(list_data)
#
# # 第七题
# msg = 'hello python'
# print(msg[msg.find('python'):])  # 奇葩的截取方式
#
# # 第八题
# list1 = ['真正的勇士', '敢于直面惨淡的人生', '敢于正视淋漓的鲜血']
# print(str.join(',', list1))
#
# # 第九题
# list2 = ['安琪拉', '妲己', '韩信', '典韦', '吕布']
# list2.append('小乔')
# list2.append('貂蝉')
# print(list2)
#
# print(list2.index('妲己'))
# list2.pop(list2.index('韩信'))
# print(list2)
# list2[len(list2) - 1] = '白起'
# print(list2)

#
# # 第一题
# L = ['a', 'b', 'c', 'd']
# print(tuple(L))
#
# # 第二题
# info = [
#
#     {'name': 'dahai', 'age': 18},
#
#     {'name': 'xialuo', 'age': 78},
#
#     {'name': 'xishi', 'age': 8},
#
#     {'name': 'dahai', 'age': 18},
#
#     {'name': 'dahai', 'age': 18}
#
# ]
#
# res = []
#
# for item in info:
#     if res.count(item) == 0:
#         res.append(item)
#
# print(res)

# # 第二题
# info = {'name': '大海', 'age': 38}
# print(info['name'])
#
# # 第五题
# L = ['夏洛', 1, 1.2, (1.22, {'name': [4, 5, '大海']})]
# print(L[3][1]['name'][2])
#
# # 第六题
# woman = {'name': '翠花', 'age': 18, 'gender': '女'}
# woman['addr'] = '北京';
# print(woman)
# woman['gender'] = '男'
# print(woman)
# woman.pop('age')
# print(woman)

s = (item for item in range(100))
for i in s:
    print(i)
