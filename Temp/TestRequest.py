import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ1c2VyIiwid2lyZWxlc3NfYnVzaW5lc3NfYWNjb3VudCI6ZmFsc2UsInNjb3BlIjpbIm9wZW5pZCJdLCJleHAiOjE3MjUxOTYwNzQsImlhdCI6MTcyNTE5NDI3NCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6Inh1aHZEeUluYlhaZlg2TDkxMV9RVFZoVDl4RSIsImNsaWVudF9pZCI6IndlYl9hcHAifQ.nbStwVfdkVOo8MpNZ9T7tV1vYmsG4kFPzHdEyZMt3egwiqHdmmGmA87zPlFyqgy_K2V8EZ7CZkKWJCccldGIjQbblFxhBrq3ptsdiVQ7PyUTaulXNa2mRYwcz87GNl3_OlzUgwoiHw4XoFFXxU61GBfllTeFC-tKgYwtgjbzY_PU-HaCaK8mS0yT51EyijFOepwPcAZm_HBNn96HBvX6QacdNFqVAd9Dgwt9obi4FUVVnyaTIuw_2SGk5a7ieV9aJRbG7Z-f-1s9pmw7F2PbunECgP-3H_KBgwTdEcmwAez4_Y3YF2t42NMtgk7AdY-oqoADVfylHv4LR-ndfV6RvQ",
    "cache-control": "no-cache",
    "client": "WEB",
    "content-type": "application/json",
    # "^cookie": "_cfuvid=WoIIxhmYh8RxfPHwSvOojf23Jqjat9qa8PTLl6jzczA-1725192379571-0.0.1.1-604800000; VOTER_REG=rvt132ec75be7; FB_LIKE=fblt132ec46153; BIGipServer~Web~prod_web_http_17700_pool=578621450.9285.0000; at_check=true; AMCVS_85279F01585CF4FA0A495CC3^%^40AdobeOrg=1; JSESSIONID=j2uteqggok5W0O5JDfdHzxUSw3EBbGLHq7zfzXCV3y5aqdp0br24^!516954670; _cls_v=4c82f94d-ff67-4140-bfd5-480bb868430f; _cls_s=788bd57d-3034-40d5-aa8c-6e838dbce239:0; s_cc=true; mbox=session^#729b079318d0423e85312b72f04494de^#1725196142; s_sq=^%^5B^%^5BB^%^5D^%^5D; AMCV_85279F01585CF4FA0A495CC3^%^40AdobeOrg=179643557^%^7CMCIDTS^%^7C19968^%^7CMCMID^%^7C85029313870294031428906864509067810777^%^7CMCOPTOUT-1725201529s^%^7CNONE^%^7CvVersion^%^7C5.5.0; serverTime=1725194320296; expiryTime=1725196120296; warningTime=1725195520296; TS018d3304=0135c98afcf0c795614e39d920fb7ab7fc39cb48ee4ba6c78a867c4215d912e5464e590e314f1751950020f43720628de17aa22d4ef7440ff313c56c8e8c4c29488201c88ddf3915f2c93d604c470a0b739126f03c78bac45a34cceb7d584450c1de66c205f825d219148e901ecddcebae361355137fb95f2ccd1fe3b28be95645a4e869c620aa1784653f995f27c65588fcddb818c8ccce05416f68b8102b2330911e34e1^",
    # "cs-session-id": "j2uteqggok5W0O5JDfd",
    "dnt": "1",
    "origin": "https://www.cspire.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.cspire.com/wireless/apps/device-unlock",
    "^sec-ch-ua": "^\\^Chromium^^;v=^\\^128^^, ^\\^Not;A=Brand^^;v=^\\^24^^, ^\\^Google",
    # "sec-ch-ua-mobile": "?0",
    # "^sec-ch-ua-platform": "^\\^Windows^^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}
url = "https://www.cspire.com/rest-services/web-wirelessaccount-services/v1/device-unlock"
params = {
    "imei": "355387498216508"
}
data = 'false'.encode('unicode_escape')
response = requests.post(url, headers=headers, params=params, data=data)

print(response.text)
print(response)