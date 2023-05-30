//导入express
const express = require('express')

//创建web服务器
const app = express();

function enc_pwd(val){
    let res = btoa(val)
    return res
}

//启动监听
app.listen(8080, () => {
    console.log("express starting at http://127.0.0.1:8080")
})

app.get('/user', (req, res) => {
    let pwd = req.query.name
    let re = enc_pwd(pwd)
    res.send(re)
})