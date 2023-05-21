from redis import Redis

def conn():
    try:
        redis_conn = Redis(host='localhost', port=6379, db=0)
        name = redis_conn.get('name')
        print(name)
        redis_conn.set('key1','1')
        res = redis_conn.delete('key1')
        print(res)
    except Exception as e:
        print(e)

conn()