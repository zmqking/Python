from datetime import datetime


class TimeCombination:

    def __init__(self):
        self.combinations = []
        self.results = []

    def get_results(self, num1, num2, num3, num4):
        nums = []
        nums.append(num1)
        nums.append(num2)
        nums.append(num3)
        nums.append(num4)
        self.combination_number(nums)
        return self.judge_time()

    def combination_number(self, nums):
        for i in range(len(nums)):
            temp = str(nums[i])
            tempList = nums.copy()
            tempList.pop(i)
            for j in range(len(tempList)):
                temp1 = f'{temp}{str(tempList[j])}:{str(tempList[abs(j - 1)])}{str(tempList[abs(j - 2)])}'
                self.combinations.append(temp1)
                temp1 = f'{temp}{str(tempList[j])}:{str(tempList[abs(j - 2)])}{str(tempList[abs(j - 1)])}'
                self.combinations.append(temp1)

    def judge_time(self):
        for t in self.combinations:
            try:
                datetime.strptime(t, '%H:%M')

                if len(self.results) == 0 or t not in self.results:
                    self.results.append(t)
            except ValueError:
                print(f'时间格式错误{t}')
        return self.results


if __name__ == '__main__':
    tc = TimeCombination()
    res = tc.get_results(2, 3, 3, 2)
    for t in res:
        print(t)
