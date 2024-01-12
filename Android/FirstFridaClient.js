// 调用正常静态方法
function demo() {
    //找到对应的类名
    var utils = Java.use("com.luoge.com.Utils");
    utils.getCalc.implementation = function (arg1, arg2) {
        console.log("arg1 ===>", arg1);
        console.log("arg2 ===>", arg2);

        var result = this.getCalc(arg1, arg2);
        console.log("result===>", result);
        return 10000;
    }
}

//hook重载方法
function override() {
    var utils = Java.use("com.luoge.com.Utils");
    // utils.getOver.overload('int').implementation = function (arg) {
    //     arg = arg+100;
    //     var res = this.getOver(arg);
    //     console.log(arg);
    //     return res;
    // }
    //hook以类作为参数的方法
    utils.getOver.overload('com.luoge.com.Money').implementation = function (a) {
        console.log('重载方法');
        var res = this.getOver(a);
        console.log(res);
        return res;
    }
}

// hook所有重载方法
function getOverloads() {
    var targetClass = Java.use('com.luoge.com.Utils');
    var methods = targetClass['getOver'].overloads;
    console.log(methods);

    methods.forEach(function (method) {
        method.implementation = function () {
            console.log('方法被调用', method);
            return method.apply(this, arguments);
        }
    });
}

//hook 构造方法
function getConstruct() {
    let money = Java.use("com.luoge.com.Money");
    money["$init"].overload('java.lang.String', 'int').implementation = function (str, i) {
        console.log('Money.$init is called: str=${str},i=${i}');
        str = "king";
        i = 1000;
        this["$init"](str, i);
    }
}

//hook 类对象主动调用
function activeCall() {
    //新建对象调用
    var res = Java.use('com.luoge.com.Money').$new("kingjay", 18).getInfo();
    console.log("第一次主动调用结果：" + res);
    Java.choose("com.luoge.com.Money", {
        onMatch: function (obj) {
            console.log("主动调用==》" + obj.getInfo());
        },
        onComplete: function () {
            console.log("搜索完毕");
        }
    });
}

//hook 修改类里面的变量
function modifyClassVariable() {
    var money = Java.use("com.luoge.com.Money");
    console.log(JSON.stringify(money.flag.value));
    //对字段进行修改
    money.flag.value = "jay";
    console.log(money.flag.value, "修改后的值");
}

function enumClassMethods() {
    var money = Java.use("com.luoge.com.Money");
    //获取所有方法
    // var methods = money.class.getDeclaredMethods();
    //获取所有构造方法重载
    // var methods = money.class.getDeclaredConstructors();
    //获取所有字段
    var methods = money.class.getDeclaredFields();

    console.log(methods);
    methods.forEach(function (method) {
        console.log(method.getName());
    });
}

//hashMap
function hashMap() {
    var bufferMap = Java.use('com.luoge.com.BufferMap');
    bufferMap.show.implementation = function (arg) {
        console.log(JSON.stringify(arg));
        var key = arg.keySet();
        var it = key.iterator();
        var res = "";
        while (it.hasNext()) {
            var k = it.next();
            var value = arg.get(k);
            res += value + "\n";
        }
        console.log(res);
        var res = this.show(arg);
        return res;
    }
}

function get_String() {
    var stringClass = Java.use('java.lang.String');
    showStacks();
    //hook string 类的构造函数
    stringClass.getBytes.overload().implementation = function () {
        console.log('original value');
        //可在此处修改传入字符串参数
        var res = this.getBytes();
        var newString = stringClass.$new(res);
        //输出修改后的参数
        console.log('modify value:' + newString);
        return res;
    }
}

function main() {
    Java.perform(function () {
        get_String();
    })
}

//显示堆栈信息
function showStacks() {
    Java.perform(function () {
      console.log(Java.use("android.util.Log").getStackTraceString(
        Java.use("java.lang.Throwable").$new()
    ));
});
}



setImmediate(main);
