
//导入express
const express = require('express')

//创建web服务器
const app = express();

//启动监听
app.listen(8080,()=>{
    console.log("express starting at http://127.0.0.1:8080")
})
