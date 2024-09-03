import requests


def get_token():
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        # "^cookie": "_cfuvid=AIkQRKYvhgW_AdUckUxF1QHzUVin5klID3Jx4tr.jdM-1725276664050-0.0.1.1-604800000; VOTER_REG=rvt132f73378d; FB_LIKE=fblt132f70bb67; BIGipServer~Web~prod_web_http_17700_pool=612175882.9285.0000; at_check=true; JSESSIONID=ipaygLtnDJXmFWOEVXOcVfVcD6EhygxoR1K_33xuUYyuWlvO4xaE^!-617092967; AMCVS_85279F01585CF4FA0A495CC3^%^40AdobeOrg=1; AMCV_85279F01585CF4FA0A495CC3^%^40AdobeOrg=179643557^%^7CMCIDTS^%^7C19969^%^7CMCMID^%^7C44571914149861708344277600695245618374^%^7CMCAAMLH-1725881467^%^7C11^%^7CMCAAMB-1725881467^%^7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y^%^7CMCOPTOUT-1725283867s^%^7CNONE^%^7CvVersion^%^7C5.5.0; _cls_v=af27e5a8-1fcd-478b-9411-d7a66390a39a; _cls_s=4bfcfa25-8030-4cae-860e-2d61a086c777:0; rto=c0; _fbp=fb.1.1725276671022.561552565513667500; s_cc=true; QSI_HistorySession=https^%^3A^%^2F^%^2Fwww.cspire.com^%^2Fwireless^%^2Fapps^%^2Fdevice-unlock~1725276673032; _tt_enable_cookie=1; _ttp=zSgN1VYSdS1s35hEaoG58XbsBgq; _ga_GQ7XNYBB62=GS1.1.1725276674.1.0.1725276674.60.0.0; _ga=GA1.1.590883901.1725276674; _gcl_au=1.1.993402233.1725276675; mbox=session^#79f1c2411480487fa2b8de1f6a17e162^#1725278842^|PC^#79f1c2411480487fa2b8de1f6a17e162.32_0^#1788521782; s_sq=^%^5B^%^5BB^%^5D^%^5D; serverTime=1725277250231; expiryTime=1725279050231; warningTime=1725278450231; TS018d3304=0135c98afc788ebb62c90849328c7792b93d9bd58cf2a1d6bc121a948d0d1382b6b7536e69c04135485708a530acc82e8ec9614c84c00cd2a1f297898ff53b4fee228e94e37bfeee6cf8095ae07c1904c6e49a851afbb9a1674c4e2ae8c9f38134890d1d033a796dd8b1b8f2ef248b7d8877461bd1a652b1a42cc4339451d8f9ec464eeadaa807acccfcdbe23b6da8fa592a532d459e4a5528bf12ddbcff36d6a66019f7db^",
        "dnt": "1",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.cspire.com/wireless/apps/device-unlock",
        "^sec-ch-ua": "^\\^Chromium^^;v=^\\^128^^, ^\\^Not;A=Brand^^;v=^\\^24^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "^sec-ch-ua-platform": "^\\^Windows^^^",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
    }
    url = "https://www.cspire.com/rest-api/token/v1/login-status"
    response = requests.get(url, headers=headers)
    res = response.json()
    print(res["token"])
    return res["token"]
    # print(response)


# get_token()
def unlock_device(imei):
    # global url, data
    headers = {
        "accept": "application/json, text/plain, */*",
        # "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ1c2VyIiwid2lyZWxlc3NfYnVzaW5lc3NfYWNjb3VudCI6ZmFsc2UsInNjb3BlIjpbIm9wZW5pZCJdLCJleHAiOjE3MjUyODA0MDksImlhdCI6MTcyNTI3ODYwOSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImFUbl8xaDk2ZGRWVExQSGFVSzgyNkNtWmp0USIsImNsaWVudF9pZCI6IndlYl9hcHAifQ.Ery_wFgkTetBItGatv5ZkuPrkB-mB5i1hKhPY0YCNtR99-k1hzDGcvsO3g7X0N4beY0vOSt7fzYbSMA-GSCzz2_eEjOby3A7N0ciRLZA6Y_wNVt9LiCzNSFPEgFi5Cwtzbqc8GAOx6N8B3PW7l0BWgP2i82n1CqGJFdK19RIBVF6zUuH67WBp5IWaUnt4ENuyWcyJB-Rf3lxbdQZVfT9vhKzFAuoBuE-TDKpKzzWC4tRiB3dRRpGqmWnmUBXp-Xf42jz9bYSBe_FTxtbSmDyScGhoNK07vHEnabMWNsuH3mC9fnf3jBN-y6Z3fu79No9Diqr1uxHW7ei3QA0m9tRsQ",
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
        "imei": imei
    }

    token = get_token()
    headers["authorization"] = f"Bearer {token}"
    data = 'false'.encode('unicode_escape')
    response = requests.post(url, headers=headers, params=params, data=data)
    print(response.text)
    print(response)
    return response.json()


unlock_device('458789524')
