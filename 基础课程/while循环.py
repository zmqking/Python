"""
九九乘法表
"""
i = 9
j = 1
k = 1
while j <= i:
    k = 1
    while k <= j:
        print(f'{k}*{j}={j * k} ', end="")
        k += 1
    print('\n')
    j += 1

int_list = [i for i in range(1, 10)]
print(int_list)
