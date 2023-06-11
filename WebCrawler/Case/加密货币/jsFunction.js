window = global;

var API_KEY = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
var a = 1111111111111

function encryptTime(t) {
    var e = (1 * t + a).toString().split("")
        , n = parseInt(10 * Math.random(), 10)
        , r = parseInt(10 * Math.random(), 10)
        , o = parseInt(10 * Math.random(), 10);
    return e.concat([n, r, o]).join("")
}

function encryptApiKey() {
    var t = API_KEY
        , e = t.split("")
        , n = e.splice(0, 8);
    return t = e.concat(n).join("")
}

function comb(t, e) {
    var n = "".concat(t, "|").concat(e);
    const buff = Buffer.from(n);
    const base64 = buff.toString('base64');
    return base64;
}

function getApiKey() {
    var t = (new Date).getTime()
        , e = encryptApiKey();
    return t = encryptTime(t),
        comb(e, t)
}

console.log(getApiKey());

