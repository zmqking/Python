# -*- coding: UTF-8 -*-
# Project -> File:Python -> Mysql 
# Author:king
# Date:2023/5/16


import pymysql


def operationDb():
    with pymysql.connect(host='localhost', port=3306, user='root', password='123456', db='test', charset='utf8')as conn:
        try:
            cursor = conn.cursor()
            sql = 'DROP TABLE IF EXISTS student;'
            cursor.execute(sql)
            # 创建表
            sql = '''
                    create table student(
                        id int not null AUTO_INCREMENT,
                        name varchar(20) not null,
                        age int not null,
                        sex varchar(2) not null,
                        hobbies varchar(100),
                        primary key(id)
                    );
                '''
            cursor.execute(sql)
            print('-------创建成功-------')
            # 插入四条数据
            sql = '''
                insert into student values(%s,%s,%s,%s,%s);
            '''
            val = [
                (0, 'king', 20, '男', '电影，新闻'),
                (0, 'andy', 60, '男', '唱歌'),
                (0, 'kelly', 50, '女', '跳舞'),
                (0, 'jay', 40, '男', '游泳，下棋')
            ]
            cursor.executemany(sql, val)
            print('-------插入数据成功-------')
            # 查询
            sql = '''
                select * from student where sex='男';
            '''
            rows = cursor.execute(sql)
            for row in rows:
                print(row["name"])
            # 删除
            sql = '''
                delete from student where id=3;
            '''
            cursor.execute(sql)
            print('-------删除成功-------')
            # 更新
            sql = '''
                update student set sex='男' where sex='女';
            '''
            cursor.execute(sql)
            print('-------更新成功-------')
        except Exception as ex:
            print(ex)


operationDb()
