# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def getAge(self):
#         return self.name + self.age
#
#
# class Person:
#     def init(self, name, age):
#         self.name = name
#         self.age = age
#         return {name, age}
#
#
# class Student(Person):
#     def init(self, name, age, grade):
#         super().init(name, age)
#         self.grade = grade
#
#
# per = Person()
# res = per.init('jar', 43)
# print(res)
#
#
# per = Person()
# ress = per.init('andy', 60)
# print(ress)


# 1、class;
# 2、C;

# 第三题
# class Cectangle:
#     def __init__(self):
#         self.width = 10
#         self.height = 20
#
#     def calc(self):
#         print(self.width * self.height)
#
#
# res = Cectangle()
# res.calc()
#
#
# # 第四题
# class Student:
#     def __init__(self):
#         self.name = 'king'
#         self.age = 30
#         self.sex = '男'
#
#     def introduce(self):
#         print('''
#         姓名：%s
#         年龄：%s
#         性别：%s
#         ''' % (self.name, self.age, self.sex))
#
#
# st = Student()
# st.introduce()

#
# class test:
#     def tests(self):
#         print('调用不了')
#
#     def terst(self):
#         self.tests()
#
#     @staticmethod
#     def print_info(res):
#         print('我是一个静态方法' + res)
#
#
# t = test()
# t.terst()
# t.print_info('这也行？')
# test.print_info('haha')


# 第一题：B,C
# 第二题：1，1，1


# def my_range(n):
#     i = 0
#     while i < n:
#         yield i
#         i += 1
#
#
# print(my_range(10))


# class Parent:
#     x = 1
#
#
# class Child1(Parent):
#     pass
#
#
# class Child2(Parent):
#     pass
#
#
# print(Parent.x, Child1.x, Child2.x)
#
# Child1.x = 2
#
# print(Parent.x, Child1.x, Child2.x)
#
# Child1.x = 3
#
# print(Parent.x, Child1.x, Child2.x)


# 第一题：B,C
# 第二题：1 1 1
1
2
1
1
3
1


# 第三题：

# class Rectangle:
#     def __init__(self, length, width):
#         self.length = length
#         self.width = width
#
#     def calcArea(self):
#         return self.width * self.length
#
#
# class Square(Rectangle):
#     def calc(self):
#         if self.length != self.width:
#             print('不是正方形')
#         else:
#             print('周长是：' + str((self.length + self.width) * 2))
#
#
# sq = Square(10, 10)
# print('面积是:%s' % sq.calcArea())
# sq.calc()


# class A:
#
#     def __init__(self, i=1):
#         self.i = i
#
#
# class B(A):
#
#     def __init__(self, j=2):
#         super().__init__()
#
#         self.j = j
#
#
# b = B()
#
# print(b.i, b.j)

class People:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender


class Student(People):
    def __init__(self, name, age, gender, score):
        super().__init__(name, age, gender)
        self.score = score


st = Student('king', 22, '男', 100)
print(f'姓名：{st.name}\n 年龄：{st.age}\n 性别：{st.gender}\n 分数：{st.score}' )
# print('分数：' + str(st.score))
