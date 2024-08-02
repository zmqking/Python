from playwright.sync_api import sync_playwright
from PIL import Image
import time


def handle_request(route, request):
    # page_url = route.request.frame.url
    request_url = request.url

    # 检查是否存在混合内容
    if request_url.startswith("http://"):
        secure_url = request_url.replace("http://", "https://")
        route.continue_(url=secure_url)
    else:
        route.continue_()


with sync_playwright() as p:
    user_data_dir = './user_data'

    # 启动浏览器并使用指定的用户数据目录
    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False,
                                                   executable_path='C:\Program Files\Google\Chrome\Application\chrome.exe',
                                                   devtools=True)
    # browser = p.chromium.launch(executable_path='C:\Program Files\Google\Chrome\Application\chrome.exe',headless=False, devtools=True)
    # 配置上下文以模拟移动设备并设置User-Agent

    # pixel_7 = p.devices['Pixel 7']
    # # 修改 user_agent 为微信浏览器的 user_agent
    # pixel_7[
    #     'user_agent'] = 'Mozilla/5.0 (Linux; Android 14; PHS110 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20240404 MMWEBID/3650 MicroMessenger/8.0.49.2600(0x2800313B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'
    # context = browser.new_context(**pixel_7)
    # page = context.new_page()  # login page
    # context = browser.new_context()
    page = browser.new_page()
    page.goto('http://user.hnjsrcw.com/Space/Login.aspx?')
    page.fill('input[name="tbx_UserID"]', '430111198303112140')
    page.fill('input[name="tbx_UserName"]', '黄芳')
    page.fill('input[name="tbx_Password"]', '111111')
    page.press('input[name="btn_Login"]', 'Enter')

    page.click('a[id="peixun"]')  # online train

    # 切换到 iframe
    frame = page.frame('eduMainFrame')

    # frame.wait_for_selector()
    # 获取 iframe 内的图像
    qrCode = frame.wait_for_selector('img[id="ImageWxLogin"]', state="visible", timeout=20000)
    qrCode.screenshot(path='test.png')

    time.sleep(2)
    image = Image.open('test.png')

    # open new tab

    page = browser.new_page()  # 监听所有请求
    # page.route("**/*", handle_request)
    # 弹出输入框获取扫码后的地址
    wechatUrl = input('please paste url here:')
    page.goto(wechatUrl)
    time.sleep(2)
    # page.goto('https://user.hnjsrcw.com/Space/Mobile/CEMBatchList.aspx')
    # page.route("**/*", handle_request)
    print('wechatUrl:', page.url)
    print('url:', page.url)
    # print(page.content())
    # face_verify = page.wait_for_selector('input[id="VideoComparison"]', state='attached')
    # print('第一页',page.content())
    # face_compare = page.wait_for_selector('input[id="VideoComparison"]', state='visible')
    # face_verify.click()  # click beging compare
    # print(page.content())

    #     # 注入 JavaScript 代码
    #     page.evaluate('''
    #   var canvs_img='';
    #   function compressImageDataURL(base64String, width = 500, height = 500) {
    #     return new Promise((resolve, reject) => {
    #     const image = new Image();
    #     image.crossOrigin = 'Anonymous'; // 避免跨域问题
    #     image.src = base64String;
    #     image.onload = () => {
    #       const canvas = document.createElement('canvas');
    #       const context = canvas.getContext('2d');
    #       // 设置canvas的宽度和高度
    #       canvas.width = width;
    #       canvas.height = height;
    #       // 绘制调整大小后的图片到canvas
    #       context.drawImage(image, 0, 0, width, height);
    #       // 获取调整大小后的图片的Base64编码
    #       const resizedDataUrl = canvas.toDataURL('image/jpeg',0.5);
    #       canvs_img=canvas
    #       document.appendChild(canvas)
    #       # document.querySelector('body').appendChild(canvas)
    #       resolve(resizedDataUrl);
    #     };
    #     image.onerror = (error) => {
    #       reject(error);
    #     };
    #   });
    # }
    #     // 创建一个新的div容器
    # const container = document.createElement('div');
    # container.style.maxWidth = '600px';
    # container.style.margin = '0 auto';
    # container.style.textAlign = 'center';
    # document.appendChild(container);
    # // 创建文件输入框
    # const imageInput = document.createElement('input');
    # imageInput.type = 'file';
    # imageInput.id = 'image';
    # imageInput.accept = 'image/*';
    # container.appendChild(imageInput);
    # // 为文件输入框添加事件监听器
    # imageInput.addEventListener('change', (event) => {
    #   const file = event.target.files[0];
    #   if (file) {
    #     const reader = new FileReader();
    #     reader.onload = (e) => {
    #       console.log(e.target.result,"e.target.result")
    # // 使用示例
    # const originalDataURL =e.target.result ; // 你的Base64字符串
    # compressImageDataURL(originalDataURL)
    #   .then((compressedDataURL) => {
    #     console.log('Compressed image:', compressedDataURL);
    #     var imgs=document.createElement('img');
    #     imgs.src=compressedDataURL;
    #     imgs.className="aaa"
    #     # document.querySelector('body').appendChild(imgs)
    #     document.appendChild(imgs)
    #       var obj={
    #         imgBase64:compressedDataURL.replace('data:image/jpeg;base64,', '')
    #       }
    #     $.ajax({
    #                     type: "POST",
    #                     url: "VTest.aspx/FacePhotoComparison",
    #                     data: JSON.stringify(obj),
    #                     contentType: "application/json; charset=utf-8",
    #                     dataType: "json",
    #                     success: function (data) {
    #                         if (data && typeof data === 'object') {
    #                             const result = data;
    #                             alert(result.d.message);
    #                              window.history.back();
    #                         } else {
    #                             console.error('Invalid response format.');
    #                         }
    #                     },
    #                     error: function (jqXHR, textStatus, errorThrown) {
    #                         console.error('Error:', textStatus, ', Details:', errorThrown);
    #                     }
    #                 });
    #   })
    #   .catch((error) => {
    #     console.error('Error compressing image:', error);
    #   });
    #     };
    #     reader.readAsDataURL(file);
    #   }
    # });
    # ''')

    # 进入培训
    enter_trian = page.wait_for_selector('input[id="Repeater1_ctl00_GotoTrain"]', timeout=1200000)
    enter_trian.click()
    print('进入培训...')
    # time.sleep(2)
    begin_study = page.wait_for_selector('uni-button:has-text("开始学习")')
    begin_study.click()  # click beging study
    print('点击开始学习')
    learn_curriculums = page.query_selector_all('uni-view[class="cu-item"]')
    print('总共章节:', learn_curriculums)
    for learn in learn_curriculums:
        print("章节名称：", learn.inner_text())
        if learn.inner_text().index('100%') == -1:  # 未完成进行学习
            learn.click()
            # 视频学习列表页面
            videos = page.query_selector_all('.listCourse')
            for video in videos:
                print("视频名称：", video.inner_text())
                if video.inner_text().index('未完成'):
                    video.click()
                    h5_video = page.wait_for_selector('video', timeout=5000)
                    duration = h5_video.get_attribute('duration')
                    current_Time = h5_video.get_attribute('currentTime')
                    while current_Time < duration:
                        time.sleep(1)
                        duration = h5_video.get_attribute('duration')
                        current_Time = h5_video.get_attribute('currentTime')
                    print(video.inner_text() + ': 播放完成')
            print(learn.inner_text() + ': 章节 播放完成！')
    print('恭喜全部章节已播放完成！')

    # 防止浏览器自动关闭
    input("Press Enter to close the browser...")
    browser.close()
