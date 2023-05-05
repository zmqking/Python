# -*- coding: utf-8 -*-
"""
@File    : sqlallchemy.py
@Time    : 5/1/2023 5:40 PM
@Author  : king
@Desc    : 
"""
import asyncio
import aiomysql
import sqlalchemy
import sqlalchemy as db
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession

Base = declarative_base()
print(sqlalchemy.__version__)

# 定义模型
class User(Base):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    age = db.Column(db.Integer)

    def __repr__(self):
        return f"<User(id={self.id}, name='{self.name}', age='{self.age}')>"


# 创建数据库引擎和会话工厂
# engine = create_async_engine("mysql://root:123456@localhost/python_test_1",
#                              connect_args={"encoding": "utf8"})
engine = create_async_engine("mysql+aiomysql://root:123456@localhost/python_test_1?encoding=utf8")
async_session = sessionmaker(bind=engine, class_=db.orm.AsyncSession)


async def create_user(name: str, age: int):
    async with async_session() as session:
        user = User(name=name, age=age)
        session.add(user)
        await session.commit()
        await session.refresh(user)
        return user


async def get_user(user_id: int):
    async with async_session() as session:
        user = await session.get(User, user_id)
        return user


async def update_user(user_id: int, name: str, age: int):
    async with async_session() as session:
        user = await session.get(User, user_id)
        if user:
            user.name = name
            user.age = age
            await session.commit()
            await session.refresh(user)
            return user


async def delete_user(user_id: int):
    async with async_session() as session:
        user = await session.get(User, user_id)
        if user:
            session.delete(user)
            await session.commit()
            return True
        return False


async def main():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    # 创建用户
    user = await create_user('Tom', 1)
    print(user)
    # 获取用户
    user = await get_user(user.id)
    print(user)
    # # 更新用户
    # user = await update_user(user.id, 'Tom', 'jerry@example.com')
    # print(user)
    # # 删除用户
    # result = await delete_user(user.id)
    # print(result)


if __name__ == '__main__':
    asyncio.run(main())
