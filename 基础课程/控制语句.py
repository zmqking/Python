import random

# print(100 or 200) #100
# print(100 or 100 > 50) #100
# print(0 or 200) # 200
# print(0 or 100 > 50) # True


rd = random.randint(0, 2)
passenger = input('请问有多少钱：')
money = int(passenger)
if money >= 2:
    print('请上车！')
    if rd > 0:
        print(f'可以坐下，座位数：{rd}')
    else:
        print('不好意思，没座位了')
else:
    print('滚！！！')
