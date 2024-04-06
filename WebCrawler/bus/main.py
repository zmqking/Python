import requests

cookies = {
    'PHPSESSID': 'f2b73l50a38muj16oeh6bqnta3',
    'existmag': 'mag',
    'age': 'verified',
    'dv': '1',
}

heads = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
}


def getDoc():
    response = requests.get("https://www.javbus.com/", cookies=cookies, headers=heads)
    print(response.text)


getDoc()
