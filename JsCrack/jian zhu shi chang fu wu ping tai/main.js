!(function () {
    if (window.flag) {

    } else {
        const websoket = new WebSocket('ws://127.0.0.1:8080');

        window.flag = true;
        websoket.onmessage = function (event) {
            var data = event.data //接受服务端发送过来的加密数据
            var res = b(data);//解密方法
            console.log(res);
            //发送数据
            websoket.send(res);//把解密以后的数据返回给服务端
        }
    }
}());