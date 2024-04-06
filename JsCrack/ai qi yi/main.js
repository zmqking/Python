var o, s, b, a = {}, _ = {}, w = 65536, k = w - 1, C = function C(e) {
    this.digits = "boolean" == typeof e && !0 === e ? null : o.slice(0),
        this.isNeg = !1
};

function r(e) {
    var t = _
        , n = t.biDivideByRadixPower(e, this.k - 1)
        , n = t.biMultiply(n, this.mu)
        , n = t.biDivideByRadixPower(n, this.k + 1)
        , e = t.biModuloByRadixPower(e, this.k + 1)
        , n = t.biMultiply(n, this.modulus)
        , n = t.biModuloByRadixPower(n, this.k + 1)
        , i = t.biSubtract(e, n);
    i.isNeg && (i = t.biAdd(i, this.bkplus1));
    for (var o = 0 <= t.biCompare(i, this.modulus); o;)
        i = t.biSubtract(i, this.modulus),
            o = 0 <= t.biCompare(i, this.modulus);
    return i
}

function c(e, t) {
    t = _.biMultiply(e, t);
    return this.modulo(t)
}

function d(e, t) {
    var n = new C;
    n.digits[0] = 1;
    for (var i = e, o = t; 0 != (1 & o.digits[0]) && (n = this.multiplyMod(n, i)),
    0 != (o = _.biShiftRight(o, 1)).digits[0] || 0 != _.biHighIndex(o);)
        i = this.multiplyMod(i, i);
    return n
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
    ,
    _.biModuloByRadixPower = function (e, t) {
        var n = new C;
        return _.arrayCopy(e.digits, 0, n.digits, 0, t),
            n
    }
    ,
    _.biMultiply = function (e, t) {
        for (var n, i, o, s = new C, a = _.biHighIndex(e), r = _.biHighIndex(t), c = 0; c <= r; ++c) {
            for (o = c,
                     j = n = 0; j <= a; ++j,
                     ++o)
                i = s.digits[o] + e.digits[j] * t.digits[c] + n,
                    s.digits[o] = i & k,
                    n = i >>> 16;
            s.digits[c + a + 1] = n
        }
        return s.isNeg = e.isNeg != t.isNeg,
            s
    }
    ,
    _.biDivideByRadixPower = function (e, t) {
        var n = new C;
        return _.arrayCopy(e.digits, t, n.digits, 0, n.digits.length - t),
            n
    }
    ,
    _.biDivide = function (e, t) {
        return _.biDivideModulo(e, t)[0]
    }
    ,
    _.setMaxDigits = function (e) {
        o = new Array(e);
        for (var t = 0; t < o.length; t++)
            o[t] = 0;
        s = new C,
            (b = new C).digits[0] = 1
    }
    ,
    _.setMaxDigits(20),
    _.biCopy = function (e) {
        var t = new C(!0);
        return t.digits = e.digits.slice(0),
            t.isNeg = e.isNeg,
            t
    }
    ,
    _.reverseStr = function (e) {
        for (var t = "", n = e.length - 1; -1 < n; --n)
            t += e.charAt(n);
        return t
    }
;
var l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
_.biToString = function (e, t) {
    var n = new C;
    n.digits[0] = t;
    for (var i = _.biDivideModulo(e, n), o = l[i[1].digits[0]]; 1 == _.biCompare(i[0], s);)
        i = _.biDivideModulo(i[0], n),
            digit = i[1].digits[0],
            o += l[i[1].digits[0]];
    return (e.isNeg ? "-" : "") + _.reverseStr(o)
}
;
var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
_.digitToHex = function (e) {
    var t = "";
    for (i = 0; i < 4; ++i)
        t += u[15 & e],
            e >>>= 4;
    return _.reverseStr(t)
}
    ,
    _.biToHex = function (e) {
        for (var t = "", n = (_.biHighIndex(e),
            _.biHighIndex(e)); -1 < n; --n)
            t += _.digitToHex(e.digits[n]);
        return t
    }
    ,
    _.charToHex = function (e) {
        e = 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0;
        return e
    }
    ,
    _.hexToDigit = function (e) {
        for (var t = 0, n = Math.min(e.length, 4), i = 0; i < n; ++i)
            t <<= 4,
                t |= _.charToHex(e.charCodeAt(i));
        return t
    }
    ,
    _.biFromHex = function (e) {
        for (var t = new C, n = e.length, i = 0; 0 < n; n -= 4,
            ++i)
            t.digits[i] = _.hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
        return t
    }
    ,
    _.biAdd = function (e, t) {
        var n;
        if (e.isNeg != t.isNeg)
            t.isNeg = !t.isNeg,
                n = _.biSubtract(e, t),
                t.isNeg = !t.isNeg;
        else {
            n = new C;
            for (var i, o = 0, s = 0; s < e.digits.length; ++s)
                i = e.digits[s] + t.digits[s] + o,
                    n.digits[s] = i % w,
                    o = Number(w <= i);
            n.isNeg = e.isNeg
        }
        return n
    }
    ,
    _.biSubtract = function (e, t) {
        if (e.isNeg != t.isNeg)
            t.isNeg = !t.isNeg,
                i = _.biAdd(e, t),
                t.isNeg = !t.isNeg;
        else {
            for (var n, i = new C, o = 0, s = 0; s < e.digits.length; ++s)
                n = e.digits[s] - t.digits[s] + o,
                    i.digits[s] = n % w,
                i.digits[s] < 0 && (i.digits[s] += w),
                    o = 0 - Number(n < 0);
            if (-1 == o) {
                for (s = o = 0; s < e.digits.length; ++s)
                    n = 0 - i.digits[s] + o,
                        i.digits[s] = n % w,
                    i.digits[s] < 0 && (i.digits[s] += w),
                        o = 0 - Number(n < 0);
                i.isNeg = !e.isNeg
            } else
                i.isNeg = e.isNeg
        }
        return i
    }
    ,
    _.biHighIndex = function (e) {
        for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t];)
            --t;
        return t
    }
    ,
    _.biNumBits = function (e) {
        for (var t = _.biHighIndex(e), n = e.digits[t], i = 16 * (t + 1), o = i; i - 16 < o && 0 == (32768 & n); --o)
            n <<= 1;
        return o
    }
    ,
    _.biMultiplyDigit = function (e, t) {
        var n, i, o;
        result = new C,
            n = _.biHighIndex(e);
        for (var s = i = 0; s <= n; ++s)
            o = result.digits[s] + e.digits[s] * t + i,
                result.digits[s] = o & k,
                i = o >>> 16;
        return result.digits[1 + n] = i,
            result
    }
    ,
    _.arrayCopy = function (e, t, n, i, o) {
        for (var s = Math.min(t + o, e.length), a = t, r = i; a < s; ++a,
            ++r)
            n[r] = e[a]
    }
;
var h = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
_.biShiftLeft = function (e, t) {
    var n = Math.floor(t / 16)
        , i = new C;
    _.arrayCopy(e.digits, 0, i.digits, n, i.digits.length - n);
    for (var o = t % 16, s = 16 - o, a = i.digits.length - 1, r = a - 1; 0 < a; --a,
        --r)
        i.digits[a] = i.digits[a] << o & k | (i.digits[r] & h[o]) >>> s;
    return i.digits[0] = i.digits[a] << o & k,
        i.isNeg = e.isNeg,
        i
}
;
var p = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
_.biShiftRight = function (e, t) {
    var n = Math.floor(t / 16)
        , i = new C;
    _.arrayCopy(e.digits, n, i.digits, 0, e.digits.length - n);
    for (var o = t % 16, s = 16 - o, a = 0, r = a + 1; a < i.digits.length - 1; ++a,
        ++r)
        i.digits[a] = i.digits[a] >>> o | (i.digits[r] & p[o]) << s;
    return i.digits[i.digits.length - 1] >>>= o,
        i.isNeg = e.isNeg,
        i
}
    ,
    _.biMultiplyByRadixPower = function (e, t) {
        var n = new C;
        return _.arrayCopy(e.digits, 0, n.digits, t, n.digits.length - t),
            n
    }
    ,
    _.biCompare = function (e, t) {
        if (e.isNeg != t.isNeg)
            return 1 - 2 * Number(e.isNeg);
        for (var n = e.digits.length - 1; 0 <= n; --n)
            if (e.digits[n] != t.digits[n])
                return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
        return 0
    }
    ,
    _.biDivideModulo = function (e, t) {
        var n, i, o = _.biNumBits(e), s = _.biNumBits(t), a = t.isNeg;
        if (o < s)
            return e.isNeg ? ((n = _.biCopy(b)).isNeg = !t.isNeg,
                e.isNeg = !1,
                t.isNeg = !1,
                i = biSubtract(t, e),
                e.isNeg = !0,
                t.isNeg = a) : (n = new C,
                i = _.biCopy(e)),
                [n, i];
        n = new C,
            i = e;
        for (var r = Math.ceil(s / 16) - 1, c = 0; t.digits[r] < 32768;)
            t = _.biShiftLeft(t, 1),
                ++c,
                ++s,
                r = Math.ceil(s / 16) - 1;
        i = _.biShiftLeft(i, c),
            o += c;
        for (var d = Math.ceil(o / 16) - 1, l = _.biMultiplyByRadixPower(t, d - r); -1 != _.biCompare(i, l);)
            ++n.digits[d - r],
                i = _.biSubtract(i, l);
        for (var u = d; r < u; --u) {
            var h = u >= i.digits.length ? 0 : i.digits[u]
                , p = u - 1 >= i.digits.length ? 0 : i.digits[u - 1]
                , f = u - 2 >= i.digits.length ? 0 : i.digits[u - 2]
                , g = r >= t.digits.length ? 0 : t.digits[r]
                , m = r - 1 >= t.digits.length ? 0 : t.digits[r - 1];
            n.digits[u - r - 1] = h == g ? k : Math.floor((h * w + p) / g);
            for (var v = n.digits[u - r - 1] * (g * w + m), y = 4294967296 * h + (p * w + f); y < v;)
                --n.digits[u - r - 1],
                    v = n.digits[u - r - 1] * (g * w | m),
                    y = h * w * w + (p * w + f);
            l = _.biMultiplyByRadixPower(t, u - r - 1),
            (i = _.biSubtract(i, _.biMultiplyDigit(l, n.digits[u - r - 1]))).isNeg && (i = _.biAdd(i, l),
                --n.digits[u - r - 1])
        }
        return i = _.biShiftRight(i, c),
            n.isNeg = e.isNeg != a,
        e.isNeg && (n = a ? _.biAdd(n, b) : _.biSubtract(n, b),
            t = _.biShiftRight(t, c),
            i = _.biSubtract(t, i)),
        0 == i.digits[0] && 0 == _.biHighIndex(i) && (i.isNeg = !1),
            [n, i]
    }
;
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
    ,
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
    ,
    _.setMaxDigits(130),

a.BarrettMu =function(e) {
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

function rsaFun(e) {
    var t = _.getKeyPair("10001", "", "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd");
    return _.encryptedString(t, encodeURIComponent(e)).replace(/\s/g, "-")
}
var val = "zfzxbqzq0";
console.log(rsaFun(val));


function aa(){
    console.log("hello");
}

(0,aa)();