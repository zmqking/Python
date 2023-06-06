const cypt = require('crypto')
const wp = require('./webpackage')

var form = {};
window = global;

var decodeKey = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl";

var decodeIv = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4";
var response = "Z21kD9ZK1ke6ugku2ccWuz4Ip5f4PLCoxWstZf_6UUyBoy8dpWc3NOXFRrnPMya7F8nc56bSQNVHrCArXF5FAxvKKNagF5FS49bFhGReRyRSOgvapSYbsNVf3UOmbZJc7cY5chOeiok97F1OXVUeK7Ykt1EZ9LtfPTa56HEPrUGMlFL-A87URx6rHb1fEdcDzEo0E7itxVmSwgV3gpF9ftz9FBZO6fU-DLdEvQ_ceNJ3jXzqgt6xx7EAZ49sl_v3ZXHJxrCL2pG8Z93vd5gOo3ymG3habQxgs2P-rvRgiHC0GJm-yPuDxDuc6n4GHL70_k0OAWNewDl4_CFMsAHBMzh3lgflN3gP18TCyirDZVjEY4wNCfT1BJklEJ3jMSpjTZbxzzA1XG27yI1VFcsWt1C5HqhEOqWXTIqAnUR1mrR9d6EjrHxCQjPUmKcH9aG3JfDo3Sn6SLbr1GKFtQ8wM9YUMMfhwyjfyep1xwM9DRBZK-8JnQ2NchZnso5O-f_qdqtjCW5glPJSpkcwS9nCV_0DwJ29T48q_lGcdoxohFG6LWGvQvrSEBhU44W9B7toCF89gMu3Y_MilwSqVieIMXp_KrhE9iHGcXZJN9L7sUw=";

c = wp("1c46")
r = wp.n(c)


function v(e) {
    return r.a.createHash("md5").update(e).digest()
}

function T() {
    const a = new Buffer.alloc(16, v(decodeKey))
        , c = new Buffer.alloc(16, v(decodeIv))
        , i = r.a.createDecipheriv("aes-128-cbc", a, c);
    let s = i.update(response, "base64", "utf-8");
    return s += i.final("utf-8"),
        s
}


console.log(T());