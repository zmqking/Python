function b(t) {
    return t < 10 ? "0" + t : t
}

function _(t) {
    var e = new Date(t);
    return e.getUTCFullYear() + "-" + b(e.getUTCMonth() + 1) + "-" + b(e.getUTCDate()) + "T" + b(e.getUTCHours()) + ":" + b(e.getUTCMinutes()) + ":" + b(e.getUTCSeconds()) + "Z"
}

function c(t) {
    var e = [];
    for (e[(t.length >> 2) - 1] = undefined,
             r = 0; r < e.length; r += 1)
        e[r] = 0;
    for (var n = 8 * t.length, r = 0; r < n; r += 8)
        e[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
    return e
}

function o(t) {
    for (var e, n = "0123456789abcdef", r = "", o = 0; o < t.length; o += 1)
        e = t.charCodeAt(o),
            r += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
    return r
}

function d(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}

function s(t, e, n, r, o, a) {
    return d((i = d(d(e, t), d(r, a))) << (s = o) | i >>> 32 - s, n);
    var i, s
}

function f(t, e, n, r, o, a, i) {
    return s(e & n | ~e & r, t, e, o, a, i)
}

function p(t, e, n, r, o, a, i) {
    return s(e & r | n & ~r, t, e, o, a, i)
}

function h(t, e, n, r, o, a, i) {
    return s(e ^ n ^ r, t, e, o, a, i)
}

function g(t, e, n, r, o, a, i) {
    return s(n ^ (e | ~r), t, e, o, a, i)
}

function u(t, e) {
    var n, r, o, a;
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    for (var i = 1732584193, s = -271733879, u = -1732584194, l = 271733878, c = 0; c < t.length; c += 16)
        i = f(n = i, r = s, o = u, a = l, t[c], 7, -680876936),
            l = f(l, i, s, u, t[c + 1], 12, -389564586),
            u = f(u, l, i, s, t[c + 2], 17, 606105819),
            s = f(s, u, l, i, t[c + 3], 22, -1044525330),
            i = f(i, s, u, l, t[c + 4], 7, -176418897),
            l = f(l, i, s, u, t[c + 5], 12, 1200080426),
            u = f(u, l, i, s, t[c + 6], 17, -1473231341),
            s = f(s, u, l, i, t[c + 7], 22, -45705983),
            i = f(i, s, u, l, t[c + 8], 7, 1770035416),
            l = f(l, i, s, u, t[c + 9], 12, -1958414417),
            u = f(u, l, i, s, t[c + 10], 17, -42063),
            s = f(s, u, l, i, t[c + 11], 22, -1990404162),
            i = f(i, s, u, l, t[c + 12], 7, 1804603682),
            l = f(l, i, s, u, t[c + 13], 12, -40341101),
            u = f(u, l, i, s, t[c + 14], 17, -1502002290),
            i = p(i, s = f(s, u, l, i, t[c + 15], 22, 1236535329), u, l, t[c + 1], 5, -165796510),
            l = p(l, i, s, u, t[c + 6], 9, -1069501632),
            u = p(u, l, i, s, t[c + 11], 14, 643717713),
            s = p(s, u, l, i, t[c], 20, -373897302),
            i = p(i, s, u, l, t[c + 5], 5, -701558691),
            l = p(l, i, s, u, t[c + 10], 9, 38016083),
            u = p(u, l, i, s, t[c + 15], 14, -660478335),
            s = p(s, u, l, i, t[c + 4], 20, -405537848),
            i = p(i, s, u, l, t[c + 9], 5, 568446438),
            l = p(l, i, s, u, t[c + 14], 9, -1019803690),
            u = p(u, l, i, s, t[c + 3], 14, -187363961),
            s = p(s, u, l, i, t[c + 8], 20, 1163531501),
            i = p(i, s, u, l, t[c + 13], 5, -1444681467),
            l = p(l, i, s, u, t[c + 2], 9, -51403784),
            u = p(u, l, i, s, t[c + 7], 14, 1735328473),
            i = h(i, s = p(s, u, l, i, t[c + 12], 20, -1926607734), u, l, t[c + 5], 4, -378558),
            l = h(l, i, s, u, t[c + 8], 11, -2022574463),
            u = h(u, l, i, s, t[c + 11], 16, 1839030562),
            s = h(s, u, l, i, t[c + 14], 23, -35309556),
            i = h(i, s, u, l, t[c + 1], 4, -1530992060),
            l = h(l, i, s, u, t[c + 4], 11, 1272893353),
            u = h(u, l, i, s, t[c + 7], 16, -155497632),
            s = h(s, u, l, i, t[c + 10], 23, -1094730640),
            i = h(i, s, u, l, t[c + 13], 4, 681279174),
            l = h(l, i, s, u, t[c], 11, -358537222),
            u = h(u, l, i, s, t[c + 3], 16, -722521979),
            s = h(s, u, l, i, t[c + 6], 23, 76029189),
            i = h(i, s, u, l, t[c + 9], 4, -640364487),
            l = h(l, i, s, u, t[c + 12], 11, -421815835),
            u = h(u, l, i, s, t[c + 15], 16, 530742520),
            i = g(i, s = h(s, u, l, i, t[c + 2], 23, -995338651), u, l, t[c], 6, -198630844),
            l = g(l, i, s, u, t[c + 7], 10, 1126891415),
            u = g(u, l, i, s, t[c + 14], 15, -1416354905),
            s = g(s, u, l, i, t[c + 5], 21, -57434055),
            i = g(i, s, u, l, t[c + 12], 6, 1700485571),
            l = g(l, i, s, u, t[c + 3], 10, -1894986606),
            u = g(u, l, i, s, t[c + 10], 15, -1051523),
            s = g(s, u, l, i, t[c + 1], 21, -2054922799),
            i = g(i, s, u, l, t[c + 8], 6, 1873313359),
            l = g(l, i, s, u, t[c + 15], 10, -30611744),
            u = g(u, l, i, s, t[c + 6], 15, -1560198380),
            s = g(s, u, l, i, t[c + 13], 21, 1309151649),
            i = g(i, s, u, l, t[c + 4], 6, -145523070),
            l = g(l, i, s, u, t[c + 11], 10, -1120210379),
            u = g(u, l, i, s, t[c + 2], 15, 718787259),
            s = g(s, u, l, i, t[c + 9], 21, -343485551),
            i = d(i, n),
            s = d(s, r),
            u = d(u, o),
            l = d(l, a);
    return [i, s, u, l]
}

function l(t) {
    for (var e = "", n = 32 * t.length, r = 0; r < n; r += 8)
        e += String.fromCharCode(t[r >> 5] >>> r % 32 & 255);
    return e
}

function a(t) {
    return unescape(encodeURIComponent(t))
}

function i(t) {
    return l(u(c(e = a(t)), 8 * e.length));
    var e
}

function v(t, e) {
    return function (t, e) {
        var n, r, o = c(t), a = [], i = [];
        for (a[15] = i[15] = undefined,
             16 < o.length && (o = u(o, 8 * t.length)),
                 n = 0; n < 16; n += 1)
            a[n] = 909522486 ^ o[n],
                i[n] = 1549556828 ^ o[n];
        return r = u(a.concat(c(e)), 512 + 8 * e.length),
            l(u(i.concat(r), 640))
    }(a(t), a(e))
}

function y(t, e, n) {
    return e ? n ? v(e, t) : o(v(e, t)) : n ? i(t) : o(i(t))
}

//POST/idquery2024-08-01T07:58:17
var ll = 'ieq%$jsaf23!@fkjwie'
var preStr = 'POST/idquery'
var cc = new Date();

function entry() {

    return _(cc) + "@" + y("" + preStr + _(cc) + ll, null, null);
}

console.log(entry());