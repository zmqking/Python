const cypt = require('crypto-js')
window = global;
var t = {
    "keyword": "sourcing",
    "searchType": "2",
    "function": "",
    "industry": "",
    "jobArea": "000000",
    "jobArea2": "",
    "landmark": "",
    "metro": "",
    "salary": "",
    "workYear": "",
    "degree": "",
    "companyType": "",
    "companySize": "",
    "jobType": "",
    "issueDate": "",
    "sortType": 0,
    "pageNum": 1,
    "requestId": "",
    "pageSize": 20,
    "source": 1,
    "accountId": "",
    "pageCode": "sou|sou|soulb"
};
var cupid_sign_key = 'abfc8f9dcf8c3f3d8aa294ac5f2cf2cc7767e5592590f39c3f503271dd68562b'

//加密
function es() {
    e = t.url + (t.data || "");
    let sign = cypt.HmacSHA256(e, cupid_sign_key);
    return sign;
    // return t.headers.sign = cypt.HmacSHA256(e, cupid_sign_key),
    //     t.headers["uuid"] = l["a"].getuuid(),
    //     t.headers["From-Domain"] = c["a"].state.commonStore.fromdomain,
    //     t.headers["account-id"] = localStorage.getItem("accountId") || "",
    //     t.headers["user-token"] = localStorage.getItem("token") || "",
    //     t.headers["partner"] = c["a"].state.commonStore.partner,
    //     t.headers["property"] = encodeURIComponent(JSON.stringify(Object(i["a"])(Object(i["a"])({}, l["a"].getProperty()), t.property || {}))),
    //     t;
}

console.log(es());

function v(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        loading: !0,
        mock: !1,
        error: !0,
        property: {}
    }
        , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "post";
    if (!1 !== s.loading)
        var a = o["a"].loading({
            message: "Loading...",
            forbidClick: !0,
            duration: 0
        });
    var i = {
        url: "/" + t + "?api_key=51job&timestamp=" + parseInt((new Date).getTime() / 1e3),
        method: r,
        property: s.property
    };
    return "get" == r && "{}" != JSON.stringify(e) ? i.url = i.url + "&" + h.a.stringify(e) : "post" != r && "delete" != r || "{}" == JSON.stringify(e) || (i.data = JSON.stringify(e),
    s.postfix && (i.url = i.url + "&" + h.a.stringify(s.postfix))),
        new Promise((function (t) {
                m(i).then((function (e) {
                        t(e),
                        ["1", "100004"].includes(e.status) || void 0 === e.status || Object(o["a"])(e.message)
                    }
                )).catch((function (t) {
                        401 == t.status && ("androidApp" == c["a"].state.commonStore.device || "iosApp" == c["a"].state.commonStore.device ? l["a"].getUserToken() : location.href = c["a"].state.joburlStore.login + c["a"].state.commonStore.lang + "&url=" + encodeURIComponent(location.href))
                    }
                )).finally((function () {
                        a && a.clear()
                    }
                ))
            }
        ))
}

function A(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , s = arguments.length > 2 ? arguments[2] : void 0;
    return v(t, e, s, "get")
}

// A(t)

function k(e, t) {
    if (null !== e && "undefined" !== typeof e)
        if ("object" !== typeof e && (e = [e]),
            a(e))
            for (var n = 0, i = e.length; n < i; n++)
                t.call(null, e[n], n, e);
        else
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
}

// "setRequestHeader"in y && i.forEach(m, (function(e, t) {
//             "undefined" === typeof p && "content-type" === t.toLowerCase() ? delete m[t] : y.setRequestHeader(t, e)
//         }
//         ))

// f = d.Hex = {
//    stringify: function(e) {
function stringify(e) {
    for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
        var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
        i.push((a >>> 4).toString(16)),
            i.push((15 & a).toString(16))
    }
    return i.join("")
}

// parse: function(e) {
function parse(e) {
    for (var t = e.length, n = [], i = 0; i < t; i += 2)
        n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
    return new u.init(n, t / 2)
}

// }


// u = c.WordArray = l.extend({
var u = {
    init: function (e, n) {
        e = this.words = e || [],
            this.sigBytes = n != t ? n : 4 * e.length
    },
    toString: function (e) {
        // return (e || f).stringify(this)
        return stringify(e)
    },
    concat: function (e) {
        var t = this.words
            , n = e.words
            , i = this.sigBytes
            , r = e.sigBytes;
        if (this.clamp(),
        i % 4)
            for (var a = 0; a < r; a++) {
                var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                t[i + a >>> 2] |= o << 24 - (i + a) % 4 * 8
            }
        else
            for (var s = 0; s < r; s += 4)
                t[i + s >>> 2] = n[s >>> 2];
        return this.sigBytes += r,
            this
    },
    clamp: function () {
        var t = this.words
            , n = this.sigBytes;
        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
            t.length = e.ceil(n / 4)
    },
    clone: function () {
        var e = l.clone.call(this);
        return e.words = this.words.slice(0),
            e
    },
    random: function (e) {
        for (var t = [], n = 0; n < e; n += 4)
            t.push(a());
        return new u.init(t, e)
    }
}

console.log(u.toString(es()))