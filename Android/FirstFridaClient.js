function demo() {
    var utils = Java.use("com.luoge.com.Utitls");
    utils.implementation = function (arg1, arg2) {
        console.log("arg1 ===>", arg1);
        console.log("arg2 ===>", arg2);

        var result = this.getCalc(arg1, arg2);
        console.log("result===>", result);
        return 10000;
    }
}

setImmediate(demo);
