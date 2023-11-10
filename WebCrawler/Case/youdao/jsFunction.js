const wp = require('./webpackage')

var form = {};
window = global;


// c = wp("1c46")
// r = wp.n(c)
var a=[
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
var o=[];
function H() {
            // var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
            let t = 32;
            let r = 16;
            if (r = r || a.length,
            t)
                for (e = 0; e < t; e++)
                    o[e] = a[0 | Math.random() * r];
            else
                for (o[8] = o[13] = o[18] = o[23] = "-",
                o[14] = "4",
                e = 0; e < 36; e++)
                    o[e] || (n = 0 | 16 * Math.random(),
                    o[e] = a[19 === e ? 3 & n | 8 : n]);
            return o.join("")
        }

console.log(H());
var n = (new Date).getTime() - 2605
              , t = "s54zv9bm1vd5czfujy6nnuxj1l4g2ny6"
              , r = Object(H)()
              , a = i()(n + r + i()(r + t + n));
            return e.params = Object.assign(e.params || {}, {
                mainVersion: h.getMainVersion(),
                comParam_curTime: n,
                comParam_seqCode: r,
                comParam_signature: a,
                isCheck: !0,
                locale: "zh-cn"
            })

console.log(T());