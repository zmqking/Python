
var e = "zfzxbqzq0";

var _ = {};
var a = {};
_.reverseStr = function (e) {
    for (var t = "", n = e.length - 1; -1 < n; --n)
        t += e.charAt(n);
    return t
}

var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
_.digitToHex = function (e) {
    var t = "";
    for (i = 0; i < 4; ++i)
        t += u[15 & e],
            e >>>= 4;
    return _.reverseStr(t)
}
_.biToHex = function (e) {
    for (var t = "", n = (_.biHighIndex(e),
        _.biHighIndex(e)); -1 < n; --n)
        t += _.digitToHex(e.digits[n]);
    return t
}
_.charToHex = function (e) {
    e = 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0;
    return e
}
_.hexToDigit = function (e) {
    for (var t = 0, n = Math.min(e.length, 4), i = 0; i < n; ++i)
        t <<= 4,
            t |= _.charToHex(e.charCodeAt(i));
    return t
}
_.biFromHex = function (e) {
    for (var t = new C, n = e.length, i = 0; 0 < n; n -= 4,
        ++i)
        t.digits[i] = _.hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
    return t
}
_.biHighIndex = function (e) {
    for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t];)
        --t;
    return t
}
a.BarrettMu = function (e) {
    this.modulus = _.biCopy(e),
        this.k = _.biHighIndex(this.modulus) + 1;
    e = new C;
    e.digits[2 * this.k] = 1,
        this.mu = _.biDivide(e, this.modulus),
        this.bkplus1 = new C,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = r,
        this.multiplyMod = c,
        this.powMod = d
}
var f = function f(e, t, n) {
    var i = _;
    this.e = i.biFromHex(e),
        this.d = i.biFromHex(t),
        this.m = i.biFromHex(n),
        this.chunkSize = 2 * i.biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new a.BarrettMu(this.m)
};
_.getKeyPair = function (e, t, n) {
    return new f(e, t, n)
}

var o, s, b, a = {}, w = 65536, k = w - 1, C = function C(e) {
                this.digits = "boolean" == typeof e && !0 === e ? null : o.slice(0),
                    this.isNeg = !1
            };

_.encryptedString = function (e, t) {
    for (var n = [], i = t.length, o = 0; o < i;)
        n[o] = t.charCodeAt(o),
            o++;
    for (; n.length % e.chunkSize != 0;)
        n[o++] = 0;
    for (var s, a, r, c = n.length, d = "", o = 0; o < c; o += e.chunkSize) {
        for (r = new C,
                 s = 0,
                 a = o; a < o + e.chunkSize; ++s)
            r.digits[s] = n[a++],
                r.digits[s] += n[a++] << 8;
        var l = e.barrett.powMod(r, e.e);
        d += (16 == e.radix ? _.biToHex(l) : _.biToString(l, e.radix)) + " "
    }
    return d.substring(0, d.length - 1)
}

function rsaFun(e) {
    var t = _.getKeyPair("10001", "", "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd");
    return _.encryptedString(t, encodeURIComponent(e)).replace(/\s/g, "-")
}

rsaFun(e)