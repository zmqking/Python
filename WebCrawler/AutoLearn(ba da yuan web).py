from playwright.sync_api import sync_playwright
from PIL import Image
import time

with sync_playwright() as p:
    user_data_dir = './user_data'

    # 启动浏览器并使用指定的用户数据目录
    # browser = p.chromium.launch_persistent_context(user_data_dir, headless=False,
    #                                                executable_path='C:\Program Files\Google\Chrome\Application\chrome.exe',
    #                                                devtools=True)
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()

    page.goto('http://user.hnjsrcw.com/Space/Login.aspx?')
    page.fill('input[name="tbx_UserID"]', '430111198303112140')
    page.fill('input[name="tbx_UserName"]', '黄芳')
    page.fill('input[name="tbx_Password"]', '111111')
    page.press('input[name="btn_Login"]', 'Enter')

    page.click('a[id="peixun"]')  # online train

    # 切换到 iframe
    # frame = page.frame_locator('iframe#eduMainFrame')

    print('等待扫码...')
    # 获取 iframe 内的图像
    frame = page.frame('eduMainFrame')
    while frame == None:
        frame = page.frame('eduMainFrame')
    enter_train = frame.wait_for_selector('a[id="hlTrainLink"]', state="visible", timeout=2000000)
    # enter_train = page.wait_for_selector('iframe#eduMainFrame a[id="hlTrainLink"]', state="visible", timeout=2000000)
    # qrCode.screenshot(path='test.png')
    #
    # time.sleep(2)
    # image = Image.open('test.png')

    # open new tab
    # 进入培训
    # enter_trian = page.wait_for_selector('a[id="hlTrainLink"]', timeout=1200000)
    # enter_trian.click()

    with context.expect_page() as new_page_info:
        enter_train.click()
        print('点此进入网上培训...')

    new_page = new_page_info.value
    new_page.wait_for_load_state()

    iframe = new_page.frame('eduMainFrame')
    element = iframe.query_selector('#eduMainFrame |> td:nth-child(3) > div')
    if element:
        element.click()
        print('进入培训')
    else:
        print("元素未找到")


    print('恭喜全部章节已播放完成！')

    # 防止浏览器自动关闭
    input("Press Enter to close the browser...")
    browser.close()
