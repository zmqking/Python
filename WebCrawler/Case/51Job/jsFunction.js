const cypt = require('crypto-js')
// const request = require('axios')

var cupid_sign_key = 'abfc8f9dcf8c3f3d8aa294ac5f2cf2cc7767e5592590f39c3f503271dd68562b'

//加密
function es(url) {
    let sign = cypt.HmacSHA256(url, cupid_sign_key);
    return sign;
}

function stringify(url) {
    let e = es(url);
    for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
        var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
        i.push((a >>> 4).toString(16)),
            i.push((15 & a).toString(16))
    }
    return i.join("")
}
// var url ='/api/job/search-pc?api_key=51job&timestamp=1685348672&keyword=java&searchType=2&function=&industry=&jobArea=000000&jobArea2=&landmark=&metro=&salary=&workYear=&degree=&companyType=&companySize=&jobType=&issueDate=&sortType=0&pageNum=1&requestId=&pageSize=20&source=1&accountId=&pageCode=sou%7Csou%7Csoulb';
console.log(stringify('/api/job/search-pc?api_key=51job&timestamp=1685350526&keyword=c&searchType=2&function=&industry=&jobArea=000000&jobArea2=&landmark=&metro=&salary=&workYear=&degree=&companyType=&companySize=&jobType=&issueDate=&sortType=0&pageNum=1&requestId=&pageSize=20&source=1&accountId=&pageCode=sou%7Csou%7Csoulb'))