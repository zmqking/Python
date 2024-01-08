function demo() {
    var utils = Java.use("com.luoge.com.Utils");
    //获取报名下的类对象
    //应用hook 函数到静态方法
    utils.getCalc.implementation = function (arg1, arg2) {
        console.log("arg1 ===>", arg1);
        console.log("arg2 ===>", arg2);
        //调用原始方法
        var result = this.getCalc(arg1, arg2);
        console.log("result===>", result);
        return 100;
    }
}

function overrideDemo() {
    var utils = Java.use("com.luoge.com.Utils");
    utils.getOver.overload('int').implementation = function (arg) {
        arg = 111;
        var res = this.getOver(arg);
        console.log(res);
        return res;
    }
}

function main() {
    Java.perform(function () {
        // demo();
        overrideDemo();
    })
}

setImmediate(main);