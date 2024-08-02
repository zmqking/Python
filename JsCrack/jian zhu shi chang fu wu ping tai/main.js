/*
* 1、把下面代码放入解密的地方，通过chrome控制台override功能重写js;
* 2、然后启动python websocket服务端; 服务端直接跟服务器通信拿到加密数据；
* 3、js通过webscoket 拿到服务端的数据，再调用解密函数进行解密；
* */

// !(function () {
//     if (window.flag) {//定义只调用一次
//
//     } else {
//         const websoket = new WebSocket('ws://127.0.0.1:8080');
//
//         window.flag = true;
//         websoket.onmessage = function (event) {
//             var data = event.data //接受服务端发送过来的加密数据
//             var res = b(data);//解密方法
//             console.log(res);
//             //发送数据
//             websoket.send(res);//把解密以后的数据返回给服务端
//         }
//     }
// }());

// 代理器封装
function get_enviroment(proxy_array) {
    for(var i=0; i<proxy_array.length; i++){
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}
proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen','aaa','target' ]
get_enviroment(proxy_array)