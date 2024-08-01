from playwright.sync_api import sync_playwright
import shutil

# 获取本地 Chrome 浏览器的可执行文件路径
chrome_path = shutil.which("C:\Program Files\Google\Chrome\Application\chrome.exe")  # 在某些系统上可能需要指定 "google-chrome"

if not chrome_path:
    raise Exception("Chrome 浏览器未安装或未在 PATH 中找到")

with sync_playwright() as p:
    # 使用本地 Chrome 浏览器启动 Playwright
    browser = p.chromium.launch(executable_path=chrome_path, headless=False)
    context = browser.new_context()
    page = context.new_page()

    # 导航到目标URL
    page.goto('https://example.com')

    # # 查找包含 "开始学习" 的 uni-button
    # button = page.query_selector('uni-button:has-text("开始学习")')
    #
    # if button:
    #     print("找到按钮:", button)
    #     # 可以在这里点击按钮或进行其他操作
    #     button.click()
    # else:
    #     print("未找到包含 '开始学习' 文本的 uni-button")

    # 进行其他操作
    # ...
    input('test')
    # browser.close()
