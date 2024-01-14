# -*- coding: UTF-8 -*-
# Project -> File:Python -> TestRequest 
# Author:king
# Date:1/3/2024

import requests

cookies = {
    'msessionid': '3YS3U6G74RGZ3GM1PZXFX2EQM74TM28D61HS',
    'rURL': 'http%3A%2F%2Fwww.yhd.com',
    '_c_id': '66p8rh15aru45gz14hc17042666225389tbe',
    '_s_id': '51vh4upsmy8y03cz8ui1704266622538125e',
    '51vh4upsmy8y03cz8ui1704266622538125e': '-1562',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7,zh;q=0.6,ru;q=0.5,ja;q=0.4,id;q=0.3',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # 'Cookie': 'msessionid=3YS3U6G74RGZ3GM1PZXFX2EQM74TM28D61HS; rURL=http%3A%2F%2Fwww.yhd.com; _c_id=66p8rh15aru45gz14hc17042666225389tbe; _s_id=51vh4upsmy8y03cz8ui1704266622538125e; 51vh4upsmy8y03cz8ui1704266622538125e=-1562',
    'DNT': '1',
    'Origin': 'https://passport.yhd.com',
    'Pragma': 'no-cache',
    'Referer': 'https://passport.yhd.com/passport/login_input.do',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'X-k39sGHmW-a': 'L7NFnZPPmzXF88Yupl1l3e1Y8Ay2mhNtWW_tjksvqFsG-QXFVQG460lnmw53qPlO6_8-VeyiWe9rYaLxYl0nqa0nJ4KEYYcu3ayTgQNtqf8X_0JOdOqMQlJr3XJt3HXF_z=lV2Yi_ZhYg4_0EQxVdTFJ3Q_OG85xq4OPqUWN68_ejYcuNQ7uK4JwhznNV1NtdfdP=I1tYe=AVqcfKOsx3Xsb805_ILdwVWywYfjYd72QHWUMq4IrQ1yL-U5OKENbW0y4jQUw5t2XY1WYjL_bIm5YgjgNY8Yjql5E3d=vjHNaJQkndz_MKiclzcWbg4OYIjlQLF6M3UbrKhNiqkPvuTaY-QWPmwN0VOpn=4DtyYQrqXnYgrGhjznNse_vyFWP6ruvpiqPTqtlq4ywqOcwVz1jY4OK3Z5xWeEtKiuEgP04jzTKjU0F7Z1gtQtgqlyvjUysd9_iVmysJZVxj4DXYQjedwYbjEGidMJwjz1n3XtvHljeV_WS3wUSjEYwyF5ivegnIkjwHkkbjXJtjMfNdil4q48nIQGuLxllml5MKTctgPJe6q5TI0V4165MK4coVQ5vjkjbmz7imQcswsqGEa8GdPcSjQ1HI0vxmOQOVFPMqEWb_lYKjjgp3Z_ZMtgFE4CaGhN11Fci_UcT1eQx3QuoWENIYiiU3QVEEQcbdWYPGzygO7Uhcm-wH9cTV8xNEe_jWe=uIYls5WWZQQGtY8vA3ewwv4JihHxK39_vmF0HV0YPH1tiIYtsYQ-u6E0RVQ7w3rjiGdNrJ47bmzjwVztspE0nEZ5E9OP3wQWT7IYHQQC-nYUQj6yb7kaeqQ-NN-7Y7e_nKR-FmZ5rmlpO3XjY3ENsm85CJYgFd7NA-Q6sg4Z0cQ6M3ZJMYHNt34VjYziQqiCAmzX5hE=wVwckW_WY38JWqbVMnIYE341FOFJA5ZYGdnq0Vq6w92sbVZyn3eXnY1WYjeQrn2jN61yFdhGfmW5ldz1n3W5sjl2zqTprJ8Vt34Ow67co7euE-l5fVONM3ZWzje_tWNstqxGFd6j5q7VbWzEY_a-Z9Q_uYzcsI15sYPg4Y0rOgTDjj7tS7XPYSxuF3itngFqF8O6gjMJ0IjWQjccMEkst_kjSyXjXJ1NL6Q=OVz=NoYcfVeWDdWY0OFU-V1gFNeKvI0WwSltGHT-VV8VMWWjU-jysWePvp85igEsJdzcY-pg562jXj_Jv8t6v6Y=5Nl-KjZNb8zt0mYrrY8NiVzjwqcyFdmYPj0dNd86M6QlF_C--mZdP3fjMVQ_OjejPY8lFpOGF8fN86E7FvyNtEzusSa5OW11ngK5Yd_NMjQtv600Lu-Yedr7D84nM3lktjFpP3MJe3lgONajumZ0OIktFgfUbVCybYxqYgbjb-QDtJWNE9z1wjIcb8agFSzJsJPcNYksf7gvx600cVHGAV2sb8Pcb_w6CmF_Mw4tvw0jumWWcvQu1WzutLHNZgeEP7w_ZYHn',
    'X-k39sGHmW-b': 'cy7xoh',
    'X-k39sGHmW-c': 'A2kbteplAQAABo5dBoSpI01sCG1E6QiHbb28DzPfV3mvLjswUpcXBatVFi0EAawUIfGucinBwH8AAOfvAAAAAA==',
    'X-k39sGHmW-d': '0',
    'X-k39sGHmW-uniqueStateKey': 'Ax66teplAQAAd5EIY1ktYr5vg0Kiu1m1yQO6BLgRqQuMK8BfhRGck79FhIS4AawUIfCLr4YoFOgAAAAAAAAAAA==',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'credentials.username': '123456',
    'credentials.password': 'D0htWPjYrBWsIRn/C7VibaCzJLGh1WQbfuMMLBYZ/CFoFNeb7F2K1QuvRMmapeOwKE30b/YED6nPnZAnAvGHE2o/EehCuaQcdh6x/hQfr0GdkUAtYT5ljtxQ8zdHJqSEtAOwG1dbr0EYvJHCnS3aAb0NO1X37Tn+bW4Muav9dks=',
    'sig': '',
    'is_jab': 'true',
    'captchaToken': '51vh4upsmy8ppy03cz8ui1704266622538125e~NmZeSyVEbFNSdnd5dldbBH58AA9gRHpTBiUjb35DFm5vLUROOBEzLUF7G28iAAFBKBgVFA1EPwIVKDclGENXbm8iVlQiAwpTTx1lKSsTCG5vfmsaDUR6LUEnG29+PU9TKyICDzMFZkQBcXR5IVQIBXt1BF4zVm9IW3QifCUHWwUjKU1kc0oKUwoyKhFmWzEQKyVbSzQ6dF0/Yy8+MD1PCBFmR1kiFSYeETVpNCwFQ1EiKWsafTp0AQ0dZXcYQ0JCLDdESD4UIl4PLiAkKj4EXD0xQxY1CQpTTx1lPTA9TwgRZl9MJRYlSz9jaxFmEQRub35rGmVKZ11XbXdhdE1dbm85FRRzAzIVECZld2ZVHQM9ZhsaMhV0S0EyKTt0VgBTK3BVWjQDJBgZdDE4dQVZXngyDk8gCzcJBiBxPHNDQRAuZg0aZ1AmSREpdnglExgGeCNNCWUONUBUcXN/cldbAH9xBABoEjQUQW1lKTcPTwhvN1hQNwQvHBpja28tEk8Ib3UVFHMMPxJBe2V0fVhUEDA=|~1704266732823~1~20201218~eyJ2aXdlIjoiMCIsImJhaW4iOnt9fQ==~1~-1562~gplw|cw1v-494,911;gw1;1dbrs-rq,8a,rq,8a;1d8-rm,89,rm,89;1d8-rj,87,rj,87;1dg-rg,86,rg,86;1d8-rd,83,rd,83;1d8-rb,81,rb,81;1di-r4,7s,b0,4s;1de-qx,7i,at,4i;1d9-qt,7c,ap,4c;1d7-qq,76,am,46;1dg-ql,6w,ah,3w;1d8-qi,6t,ae,3t;1d7-qh,6o,ad,3o;1d9-qg,6o,ac,3o;1do-qe,6h,aa,3h;1dg-qd,6f,a9,3f;1do-qd,6e,a9,3e;1d8-qb,6b,a7,3b;1d9-qb,6a,a7,3a;1df-qa,67,a6,37;1d8-q9,66,a5,36;1d8-q9,65,a5,35;1d7k-q9,64,a5,34;1d8-q7,63,93,z;1d8-q6,62,92,y;1dg-py,62,8u,y;1d7-pu,62,8q,y;1d9-po,62,8k,y;1d8-pj,62,8f,y;30a-pa,62,6f,j;101-pa,62,6f,j;102o-md,62,3i,j;906m;b02-lm,61,2r,i;003x-lm,61,2r,i;201qi;201y;20g;20qe;2026;107o-lp,61,2u,i;40g-m7,68,3c,p;1d0-m7,68,53,14;1d1k-pi,6n,8f,1k;a0u6;1d154i-rr,8g,rr,8g;1dh-r4,8g,b0,5g;1d2u-nd,8y,6a,b;319d-l8,7y,2d,n;110-l8,7y,2d,n;4113-ku,75,1z,-6;1d0-ku,75,3q,9;1do-ko,6s,3l,1p;316p-kj,7b,1o,0;110-kj,7b,1o,0;907t;b12-kf,7o,1k,d;a01;910;012z-kf,7o,1k,d;21ql;216z;215p;214o;214z;11jt-kf,7r,1k,g;41v-kf,7z,1k,o;1d1-kf,7z,3b,13;3529-kn,9p,3k,4;151-kn,9p,3k,4;451x-ld,b1,4a,1g;1d0-ld,b1,4a,0;355u-le,b0,4b,1f;b58v-l4,a5,41,k;a10;951;a58f;doei:,1,2,0,0,2,1000,-1000,1000,-1000;dmei:,1,1,1,1000,-1000,1000,-1000,1000,-1000;emc:,0:24,1:19,5:24,d:123;emmm:,0:12-0,1:0-0,5:2-0,d:32-0;emcf:,d:37,0:24,d:61,1:5,d:13,1:14,d:10,5:9,d:2,5:15;ivli:,0:5,1:5;iivl:,0:9,1:0;ivcvj:,0:9:0;scvje:;ewhi:,0:233-24,1:233-24,5:330-52;1704266638768,1704266732822,2,1,79,79,0,150,0,0,0;e2qu',
    'jab_st': '1',
    'loginSource': '1',
    'returnUrl': 'http://www.yhd.com',
    'isAutoLogin': '0',
    'slideData': '',
}

response = requests.post('https://passport.yhd.com/publicPassport/login.do', cookies=cookies, headers=headers, data=data)
print(response.text)