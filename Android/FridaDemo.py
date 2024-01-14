# -*- coding: UTF-8 -*-
# Project -> File:Python -> FridaDemo 
# Author:king
# Date:1/10/2024
import frida
import sys

# 通过spawn 模式启动一个新的应用程序进程，并在该进程中加载frida脚本
device = frida.get_usb_device()
pid = device.spawn(["com.luoge.com"])
session = device.attach(pid)

js_code="""
Java.perform(function(){
    var utils = Java.use("com.luoge.com.Utils");
    utils.getCalc.implementation = function (arg1, arg2) {
        console.log("arg1 ===>", arg1);
        console.log("arg2 ===>", arg2);

        var result = this.getCalc(arg1, arg2);
        console.log("result===>", result);
        return 10000;
    }
    });
"""
script = session.create_script(js_code)
script.load()
# 恢复应用程序执行
device.resume(pid)
# 阻塞主线程，以保持脚本运行
sys.stdin.read()