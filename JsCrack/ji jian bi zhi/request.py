import execjs
import requests


class JiJian():
    def __init__(self):
        self.headers = {

        }
        self.url = ""
        self.js = execjs.compile(open('main.js', encoding='utf-8').read())

    def get_data(self):
        data = {}
        response = requests.post(self.url,headers = self.headers,json=data)
        return response.json()

    # def
