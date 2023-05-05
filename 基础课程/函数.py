# # 第四题
# def calc():
#     j = 0
#     for i in range(1, 991):
#         j += i
#     return j
#
#
# print(calc())
#
#
# # 第五题
# def sort(a, b, c):
#     nums = [a, b, c]
#     nums.sort()
#     return nums
#
#
# print(sort(10, 4, 20))


# 1、D
# 2、B

# def currencyRate(money):
#     currencyName = money[0]
#     currency = money[1]
#     res = 0.0
#     if currencyName == "美元":
#         res = 100 * currency
#     elif currencyName == "日元":
#         res = 100 * currency
#     elif currencyName == "欧元":
#         res = 100 * currency
#     elif currencyName == "港元":
#         res = 100 * currency
#     elif currencyName == "澳元":
#         res = 100 * currency
#     return res
#
#
# # money = currencyRate({"currencyName": "美元", "currency": 6.84})
# money = currencyRate(("日元", 6.84))
# print("%s元"%money)


func = lambda name, age: print(name, age)
func('king', 20)


class Person:
    def __int__(self,name,age):
        self.name = name
        self.__age = age # 私有属性


anna = Person('king',18)



