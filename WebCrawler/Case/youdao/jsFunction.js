const cypt = require('crypto-js')

var form = {};
window = global;
var wp;
//<editor-fold desc="加载器">
// (function (e) {
//         function t(t) {
//             for (var n, a, r = t[0], s = t[1], l = t[2], d = 0, u = []; d < r.length; d++)
//                 a = r[d],
//                 Object.prototype.hasOwnProperty.call(c, a) && c[a] && u.push(c[a][0]),
//                     c[a] = 0;
//             for (n in s)
//                 Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
//             m && m(t);
//             while (u.length)
//                 u.shift()();
//             return i.push.apply(i, l || []),
//                 o()
//         }
//
//         function o() {
//             for (var e, t = 0; t < i.length; t++) {
//                 for (var o = i[t], n = !0, a = 1; a < o.length; a++) {
//                     var r = o[a];
//                     0 !== c[r] && (n = !1)
//                 }
//                 n && (i.splice(t--, 1),
//                     e = s(s.s = o[0]))
//             }
//             return e
//         }
//
//         var n = {}
//             , a = {
//             app: 0
//         }
//             , c = {
//             app: 0
//         }
//             , i = [];
//
//         function r(e) {
//             return s.p + "js/" + ({
//                 "DocHistory~termBank": "DocHistory~termBank",
//                 DocHistory: "DocHistory",
//                 termBank: "termBank",
//                 NoLogin: "NoLogin",
//                 Person: "Person",
//                 "documentUpload~textTranslate": "documentUpload~textTranslate",
//                 documentUpload: "documentUpload",
//                 textTranslate: "textTranslate"
//             }[e] || e) + "." + {
//                 "DocHistory~termBank": "24a245c4",
//                 DocHistory: "1a28bc19",
//                 termBank: "ade9173a",
//                 NoLogin: "7899f997",
//                 Person: "d51f0fab",
//                 "documentUpload~textTranslate": "66ed4898",
//                 documentUpload: "9bd6a76c",
//                 textTranslate: "6713c225"
//             }[e] + ".js"
//         }
//
//         function s(t) {
//             if (n[t])
//                 return n[t].exports;
//             var o = n[t] = {
//                 i: t,
//                 l: !1,
//                 exports: {}
//             };
//             console.log(t);
//             return e[t].call(o.exports, o, o.exports, s),
//                 o.l = !0,
//                 o.exports
//         }
//
//         s.e = function (e) {
//             var t = []
//                 , o = {
//                 "DocHistory~termBank": 1,
//                 DocHistory: 1,
//                 termBank: 1,
//                 NoLogin: 1,
//                 Person: 1,
//                 "documentUpload~textTranslate": 1,
//                 documentUpload: 1,
//                 textTranslate: 1
//             };
//             a[e] ? t.push(a[e]) : 0 !== a[e] && o[e] && t.push(a[e] = new Promise((function (t, o) {
//                     for (var n = "css/" + ({
//                         "DocHistory~termBank": "DocHistory~termBank",
//                         DocHistory: "DocHistory",
//                         termBank: "termBank",
//                         NoLogin: "NoLogin",
//                         Person: "Person",
//                         "documentUpload~textTranslate": "documentUpload~textTranslate",
//                         documentUpload: "documentUpload",
//                         textTranslate: "textTranslate"
//                     }[e] || e) + "." + {
//                         "DocHistory~termBank": "fa29fc09",
//                         DocHistory: "4f1aad07",
//                         termBank: "c6a579d8",
//                         NoLogin: "602687cf",
//                         Person: "5b36ba5e",
//                         "documentUpload~textTranslate": "ea48e3fc",
//                         documentUpload: "5dc3c7f0",
//                         textTranslate: "8a064160"
//                     }[e] + ".css", c = s.p + n, i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
//                         var l = i[r]
//                             , d = l.getAttribute("data-href") || l.getAttribute("href");
//                         if ("stylesheet" === l.rel && (d === n || d === c))
//                             return t()
//                     }
//                     var u = document.getElementsByTagName("style");
//                     for (r = 0; r < u.length; r++) {
//                         l = u[r],
//                             d = l.getAttribute("data-href");
//                         if (d === n || d === c)
//                             return t()
//                     }
//                     var m = document.createElement("link");
//                     m.rel = "stylesheet",
//                         m.type = "text/css",
//                         m.onload = t,
//                         m.onerror = function (t) {
//                             var n = t && t.target && t.target.src || c
//                                 , i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
//                             i.code = "CSS_CHUNK_LOAD_FAILED",
//                                 i.request = n,
//                                 delete a[e],
//                                 m.parentNode.removeChild(m),
//                                 o(i)
//                         }
//                         ,
//                         m.href = c;
//                     var b = document.getElementsByTagName("head")[0];
//                     b.appendChild(m)
//                 }
//             )).then((function () {
//                     a[e] = 0
//                 }
//             )));
//             var n = c[e];
//             if (0 !== n)
//                 if (n)
//                     t.push(n[2]);
//                 else {
//                     var i = new Promise((function (t, o) {
//                             n = c[e] = [t, o]
//                         }
//                     ));
//                     t.push(n[2] = i);
//                     var l, d = document.createElement("script");
//                     d.charset = "utf-8",
//                         d.timeout = 120,
//                     s.nc && d.setAttribute("nonce", s.nc),
//                         d.src = r(e);
//                     var u = new Error;
//                     l = function (t) {
//                         d.onerror = d.onload = null,
//                             clearTimeout(m);
//                         var o = c[e];
//                         if (0 !== o) {
//                             if (o) {
//                                 var n = t && ("load" === t.type ? "missing" : t.type)
//                                     , a = t && t.target && t.target.src;
//                                 u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
//                                     u.name = "ChunkLoadError",
//                                     u.type = n,
//                                     u.request = a,
//                                     o[1](u)
//                             }
//                             c[e] = void 0
//                         }
//                     }
//                     ;
//                     var m = setTimeout((function () {
//                             l({
//                                 type: "timeout",
//                                 target: d
//                             })
//                         }
//                     ), 12e4);
//                     d.onerror = d.onload = l,
//                         document.head.appendChild(d)
//                 }
//             return Promise.all(t)
//         }
//             ,
//             s.m = e,
//             s.c = n,
//             s.d = function (e, t, o) {
//                 s.o(e, t) || Object.defineProperty(e, t, {
//                     enumerable: !0,
//                     get: o
//                 })
//             }
//             ,
//             s.r = function (e) {
//                 "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
//                     value: "Module"
//                 }),
//                     Object.defineProperty(e, "__esModule", {
//                         value: !0
//                     })
//             }
//             ,
//             s.t = function (e, t) {
//                 if (1 & t && (e = s(e)),
//                 8 & t)
//                     return e;
//                 if (4 & t && "object" === typeof e && e && e.__esModule)
//                     return e;
//                 var o = Object.create(null);
//                 if (s.r(o),
//                     Object.defineProperty(o, "default", {
//                         enumerable: !0,
//                         value: e
//                     }),
//                 2 & t && "string" != typeof e)
//                     for (var n in e)
//                         s.d(o, n, function (t) {
//                             return e[t]
//                         }
//                             .bind(null, n));
//                 return o
//             }
//             ,
//             s.n = function (e) {
//                 var t = e && e.__esModule ? function () {
//                         return e["default"]
//                     }
//                     : function () {
//                         return e
//                     }
//                 ;
//                 return s.d(t, "a", t),
//                     t
//             }
//             ,
//             s.o = function (e, t) {
//                 return Object.prototype.hasOwnProperty.call(e, t)
//             }
//             ,
//             s.p = "",
//             s.oe = function (e) {
//                 throw console.error(e),
//                     e
//             }
//         ;
//         var l = window["webpackJsonp"] = window["webpackJsonp"] || []
//             , d = l.push.bind(l);
//         l.push = t,
//             l = l.slice();
//         for (var u = 0; u < l.length; u++)
//             t(l[u]);
//         var m = d;
//         i.push([0, "chunk-vendors"]),
//             o(),
//             wp = s
//     }
// )({
//     "06cf": function (t, e, n) {
//         var r = n("83ab")
//             , i = n("c65b")
//             , o = n("d1e7")
//             , s = n("5c6c")
//             , a = n("fc6a")
//             , u = n("a04b")
//             , h = n("1a2d")
//             , f = n("0cfb")
//             , c = Object.getOwnPropertyDescriptor;
//         e.f = r ? c : function (t, e) {
//             if (t = a(t),
//                 e = u(e),
//                 f)
//                 try {
//                     return c(t, e)
//                 } catch (n) {
//                 }
//             if (h(t, e))
//                 return s(!i(o.f, t, e), t[e])
//         }
//     },
//     c8ba: function (t, e) {
//         var n;
//         n = function () {
//             return this
//         }();
//         try {
//             n = n || new Function("return this")()
//         } catch (r) {
//             "object" === typeof window && (n = window)
//         }
//         t.exports = n
//     },
//     da84: function (t, e, n) {
//         (function (e) {
//                 var n = function (t) {
//                     return t && t.Math == Math && t
//                 };
//                 t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
//                     return this
//                 }() || Function("return this")()
//             }
//         ).call(this, n("c8ba"))
//     },
//     "23e7": function (t, e, n) {
//         var r = n("da84")
//             , i = n("06cf").f
//             , o = n("9112")
//             , s = n("cb2d")
//             , a = n("6374")
//             , u = n("e893")
//             , h = n("94ca");
//         t.exports = function (t, e) {
//             var n, f, c, l, d, p, m = t.target, b = t.global, g = t.stat;
//             if (f = b ? r : g ? r[m] || a(m, {}) : (r[m] || {}).prototype,
//                 f)
//                 for (c in e) {
//                     if (d = e[c],
//                         t.dontCallGetSet ? (p = i(f, c),
//                             l = p && p.value) : l = f[c],
//                         n = h(b ? c : m + (g ? "." : "#") + c, t.forced),
//                     !n && void 0 !== l) {
//                         if (typeof d == typeof l)
//                             continue;
//                         u(d, l)
//                     }
//                     (t.sham || l && l.sham) && o(d, "sham", !0),
//                         s(f, c, d, t)
//                 }
//         }
//     },
//     5530: function (t, e, n) {
//         "use strict";
//         n.d(e, "a", (function () {
//                 return o
//             }
//         ));
//         n("14d9");
//
//         function r(t, e, n) {
//             return e in t ? Object.defineProperty(t, e, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0
//             }) : t[e] = n,
//                 t
//         }
//
//         function i(t, e) {
//             var n = Object.keys(t);
//             if (Object.getOwnPropertySymbols) {
//                 var r = Object.getOwnPropertySymbols(t);
//                 e && (r = r.filter((function (e) {
//                         return Object.getOwnPropertyDescriptor(t, e).enumerable
//                     }
//                 ))),
//                     n.push.apply(n, r)
//             }
//             return n
//         }
//
//         function o(t) {
//             for (var e = 1; e < arguments.length; e++) {
//                 var n = null != arguments[e] ? arguments[e] : {};
//                 e % 2 ? i(Object(n), !0).forEach((function (e) {
//                         r(t, e, n[e])
//                     }
//                 )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
//                         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//                     }
//                 ))
//             }
//             return t
//         }
//     },
//     "14d9": function (t, e, n) {
//         "use strict";
//         var r = n("23e7")
//             , i = n("7b0b")
//             , o = n("07fa")
//             , s = n("3a34")
//             , a = n("3511")
//             , u = n("d039")
//             , h = u((function () {
//                 return 4294967297 !== [].push.call({
//                     length: 4294967296
//                 }, 1)
//             }
//         ))
//             , f = !function () {
//             try {
//                 Object.defineProperty([], "length", {
//                     writable: !1
//                 }).push()
//             } catch (t) {
//                 return t instanceof TypeError
//             }
//         }();
//         r({
//             target: "Array",
//             proto: !0,
//             arity: 1,
//             forced: h || f
//         }, {
//             push: function (t) {
//                 var e = i(this)
//                     , n = o(e)
//                     , r = arguments.length;
//                 a(n + r);
//                 for (var u = 0; u < r; u++)
//                     e[n] = arguments[u],
//                         n++;
//                 return s(e, n),
//                     n
//             }
//         })
//     },
//     0: function (e, t, o) {
//         e.exports = o("56d7")
//     },
//     "04b3": function (e, t) {
//         e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII="
//     },
//     "0be0": function (e, t, o) {
//     },
//     1: function (e, t) {
//     },
//     10: function (e, t) {
//     },
//     11: function (e, t) {
//     },
//     12: function (e, t) {
//     },
//     13: function (e, t) {
//     },
//     14: function (e, t) {
//     },
//     "14c6": function (e, t, o) {
//     },
//     "1a68": function (e, t, o) {
//         "use strict";
//         o.r(t);
//         var n = o("8139")
//             , a = o("8544")
//             , c = o("c34f");
//         const i = {
//             secretKey: "",
//             dictResult: {},
//             decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
//             decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
//             allowStroke: !1,
//             showPjm: !1,
//             showRomanPronunciation: !1,
//             showWordsNumber: !0
//         }
//             , r = {
//             secretKey: e => e.secretKey,
//             dictResult: e => e.dictResult
//         }
//             , s = {
//             fetchTextTranslateSecretKey: ({commit: e}, t) => {
//                 const o = "webfanyi-key-getter"
//                     , a = "asdjnjfenknafdfsdfsd";
//                 n["a"].getTextTranslateSecretKey({
//                     keyid: o
//                 }, a).then(t => {
//                         0 === t.code && t.data.secretKey && e("UPDATE_SECRET_KEY", t.data.secretKey)
//                     }
//                 ).catch(e => {
//                     }
//                 )
//             }
//             ,
//             setDictResult: ({commit: e}, t) => {
//                 e("SET_DICTRESULT", t)
//             }
//             ,
//             initTextTranslateSettingStore: ({commit: e}, t) => {
//                 const o = a["a"].get("allowStroke")
//                     , n = a["a"].get("showPjm")
//                     , c = a["a"].get("showRomanPronunciation")
//                     , i = a["a"].get("showWordsNumber");
//                 e("SET_ALLOW_STROKE", null !== o && o),
//                     e("SET_SHOW_PJM", null !== n && n),
//                     e("SET_SHOW_ROMAN_PRONUNCICATION", null !== c && c),
//                     e("SET_SHOW_WORDS_NUMBER", null === i || i)
//             }
//         }
//             , l = {
//             UPDATE_SECRET_KEY(e, t) {
//                 e.secretKey = t
//             },
//             SET_DICTRESULT(e, t) {
//                 e.dictResult = t
//             },
//             SET_ALLOW_STROKE(e, t) {
//                 e.allowStroke = t,
//                     a["a"].set("allowStroke", t),
//                     Object(c["b"])(t)
//             },
//             SET_SHOW_PJM(e, t) {
//                 e.showPjm = t,
//                     a["a"].set("showPjm", t)
//             },
//             SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
//                 e.showRomanPronunciation = t,
//                     a["a"].set("showRomanPronunciation", t)
//             },
//             SET_SHOW_WORDS_NUMBER(e, t) {
//                 e.showWordsNumber = t,
//                     a["a"].set("showWordsNumber", t)
//             }
//         };
//         t["default"] = {
//             state: i,
//             getters: r,
//             mutations: l,
//             actions: s
//         }
//     },
//     "1dc7": function (e, t, o) {
//         "use strict";
//         o("b73a")
//     },
//     2: function (e, t) {
//     },
//     "2caa": function (e, t, o) {
//         "use strict";
//         var n = o("7a23");
//         const a = {
//             key: 0,
//             class: "interfaceDialogMask"
//         }
//             , c = {
//             class: "interfaceDialog-body"
//         };
//
//         function i(e, t, o, i, r, s) {
//             return o.dialogVisible ? (Object(n["openBlock"])(),
//                 Object(n["createElementBlock"])("div", a, [Object(n["createElementVNode"])("div", {
//                     class: Object(n["normalizeClass"])(["interfaceDialog", {
//                         "interfaceDialog-default-style": o.withDialogStyle
//                     }, {
//                         isCenter: o.isCenter
//                     }]),
//                     style: Object(n["normalizeStyle"])({
//                         width: s.pxStyle(o.width),
//                         height: s.pxStyle(o.height),
//                         top: s.pxStyle(o.top),
//                         left: s.pxStyle(o.left)
//                     }),
//                     ref: "interfaceDialog"
//                 }, [Object(n["createElementVNode"])("div", c, [Object(n["renderSlot"])(e.$slots, "default", {}, void 0, !0)])], 6)])) : Object(n["createCommentVNode"])("", !0)
//         }
//
//         var r = {
//             name: "InterfaceDialog",
//             components: {},
//             props: {
//                 dialogVisible: {
//                     type: Boolean,
//                     required: !0,
//                     default: !1
//                 },
//                 width: {
//                     type: [Number, String],
//                     required: !0,
//                     default: "auto"
//                 },
//                 height: {
//                     type: [Number, String],
//                     required: !0,
//                     default: "auto"
//                 },
//                 top: {
//                     type: [Number, String],
//                     required: !0,
//                     default: 0
//                 },
//                 left: {
//                     type: [Number, String],
//                     required: !0,
//                     default: 0
//                 },
//                 withDialogStyle: {
//                     type: Boolean,
//                     default: !0
//                 },
//                 isCenter: {
//                     type: Boolean,
//                     default: !1
//                 }
//             },
//             data() {
//                 return {
//                     promiseStatus: {}
//                 }
//             },
//             methods: {
//                 pxStyle(e) {
//                     return this.isString(e) ? e : e + "px"
//                 },
//                 isString(e) {
//                     return "string" === typeof e
//                 },
//                 isNumber(e) {
//                     return "number" === typeof e
//                 },
//                 closeinterfaceDialog() {
//                     this.$emit("closeDialog")
//                 },
//                 modalClickEventHandler(e) {
//                     this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
//                 }
//             },
//             watch: {
//                 dialogVisible: {
//                     handler: function (e) {
//                         e ? this.$nextTick(() => {
//                                 setTimeout(() => {
//                                         document.body.addEventListener("click", this.modalClickEventHandler, !0)
//                                     }
//                                     , 10)
//                             }
//                         ) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
//                     }
//                 }
//             }
//         }
//             , s = (o("fe14"),
//             o("6b0d"))
//             , l = o.n(s);
//         const d = l()(r, [["render", i], ["__scopeId", "data-v-3395756a"]]);
//         t["a"] = d
//     },
//     3: function (e, t) {
//     },
//     3102: function (e, t, o) {
//     },
//     4: function (e, t) {
//     },
//     4260: function (e, t, o) {
//         "use strict";
//         o.d(t, "b", (function () {
//                 return c
//             }
//         ));
//         const n = (e, t) => {
//                 const o = new Date
//                     , n = new Date(e)
//                     , a = new Date(t);
//                 return o >= n && o <= a
//             }
//             , a = (e, t) => {
//                 let o;
//                 return function (...n) {
//                     const a = this;
//                     clearTimeout(o),
//                         o = setTimeout(() => {
//                                 e.apply(a, n)
//                             }
//                             , t)
//                 }
//             }
//             , c = (e, t) => {
//                 let o, n = 0;
//                 return function () {
//                     const a = this
//                         , c = arguments
//                         , i = +Date.now();
//                     i - n >= t ? (clearTimeout(o),
//                         e.apply(a, c),
//                         n = i) : (clearTimeout(o),
//                         o = setTimeout(() => {
//                                 e.apply(a, c)
//                             }
//                             , t))
//                 }
//             }
//             , i = (e, t) => {
//                 const o = {
//                     "M+": t.getMonth() + 1,
//                     "d+": t.getDate(),
//                     "H+": t.getHours(),
//                     "h+": t.getHours(),
//                     "m+": t.getMinutes(),
//                     "s+": t.getSeconds(),
//                     "q+": Math.floor((t.getMonth() + 3) / 3),
//                     S: t.getMilliseconds()
//                 };
//                 /(y+)/.test(e) && (e = e.replace(RegExp.$1, ("" + t.getFullYear()).substr(4 - RegExp.$1.length)));
//                 for (const n in o)
//                     new RegExp(`(${n})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
//                 return e
//             }
//             , r = () => /macintosh|mac os x/i.test(navigator.userAgent)
//             , s = (e, t = "") => {
//                 const o = document.createElement("a");
//                 o.download = t,
//                     o.style.display = "none",
//                     o.href = e,
//                     document.body.appendChild(o),
//                     o.click(),
//                     document.body.removeChild(o)
//             }
//             , l = e => {
//                 var t = e.split("?")[1]
//                     , o = {};
//                 if (!t)
//                     return o;
//                 t = t.split("&");
//                 for (var n = 0, a = t.length; n < a; n++) {
//                     var c = t[n].split("=");
//                     o[c[0]] = decodeURIComponent(c[1])
//                 }
//                 return o
//             }
//         ;
//         t["a"] = {
//             isDuringDate: n,
//             debounce: a,
//             throttle: c,
//             dateFormat: i,
//             isMac: r,
//             downloadFile: s,
//             getUrlParams: l
//         }
//     },
//     "429e": function (e, t, o) {
//     },
//     4360: function (e, t, o) {
//         "use strict";
//         o("13d5"),
//             o("14d9");
//         var n = o("5502");
//         const a = []
//             , c = o("c653")
//             , i = c.keys().reduce((e, t) => {
//                 const o = t.replace(/^\.\/(.*)\.\w+$/, "$1");
//                 a.push(o);
//                 const n = c(t);
//                 return e[o] = n.default,
//                     e
//             }
//             , {});
//         t["a"] = Object(n["a"])({
//             modules: i
//         })
//     },
//     "44ae": function (e, t, o) {
//         "use strict";
//         o("918c")
//     },
//     4637: function (e, t, o) {
//     },
//     "48e8": function (e, t, o) {
//         "use strict";
//         t["a"] = [{
//             str: "0",
//             msg: "通用场景"
//         }, {
//             str: "2",
//             msg: "医学"
//         }, {
//             str: "1",
//             msg: "计算机"
//         }, {
//             str: "3",
//             msg: "金融经济"
//         }]
//     },
//     "49f5": function (e, t, o) {
//     },
//     "4c5a": function (e, t, o) {
//         "use strict";
//         o("429e")
//     },
//     "4ee2": function (e, t, o) {
//     },
//     "4ffd": function (e, t, o) {
//         e.exports = o.p + "img/logo.6ed1c44b.png"
//     },
//     5: function (e, t) {
//     },
//     "56d7": function (e, t, o) {
//         "use strict";
//         o.r(t);
//         var n = o("2b27")
//             , a = o.n(n)
//             , c = o("7a23")
//             , i = o("8393");
//
//         function r(e, t, o, n, a, i) {
//             return Object(c["openBlock"])(),
//                 Object(c["createBlock"])(c["Transition"], {
//                     name: "blankTooltip"
//                 }, {
//                     default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.text), 1)]),
//                     _: 1
//                 })
//         }
//
//         var s = {
//             setup() {
//                 const e = Object(c["ref"])();
//                 return {
//                     text: e
//                 }
//             }
//         }
//             , l = (o("cc83"),
//             o("6b0d"))
//             , d = o.n(l);
//         const u = d()(s, [["render", r], ["__scopeId", "data-v-13c25996"]]);
//         var m = u;
//         const b = {
//             beforeMount: function (e, t) {
//                 var o, n = "yd-tooltip", a = "", i = null, r = "bottom", s = "blank", l = !1;
//                 const d = () => {
//                         if (t.value && "function" === typeof t.value) {
//                             var d = t.value();
//                             const {component: e, data: n} = d;
//                             o = Object(c["createApp"])(e, n),
//                                 l = !0,
//                                 s = "custom"
//                         } else
//                             !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (a = e.dataset.tooltip) : a = t.value;
//                         if (e.dataset["tooltipStyle"] && (s = e.dataset["tooltipStyle"]),
//                         (l || "" != a.trim()) && (!l || o)) {
//                             Object.keys(t.modifiers)[0] && (r = Object.keys(t.modifiers)[0]),
//                                 i = document.createElement("div");
//                             var u = [n, s];
//                             if (i.setAttribute("class", u.join(" ")),
//                                 i.style.zIndex = 10,
//                                 l) {
//                                 var b = document.body.appendChild(i);
//                                 o.mount(b)
//                             } else {
//                                 b = document.body.appendChild(i);
//                                 var p = Object(c["createApp"])(m)
//                                     , f = p.mount(b);
//                                 f.text = a
//                             }
//                             var g = e.getBoundingClientRect();
//                             Object(c["nextTick"])(() => {
//                                     var e = 0
//                                         , t = 0
//                                         , o = 8
//                                         , n = 8;
//                                     switch (r) {
//                                         case "top":
//                                             e = g.left - i.offsetWidth / 2 + g.width / 2,
//                                                 t = g.top - i.offsetHeight - o;
//                                             break;
//                                         case "left":
//                                             e = g.left - i.offsetWidth - n,
//                                                 t = g.top + g.height / 2 - i.offsetHeight / 2;
//                                             break;
//                                         case "right":
//                                             e = g.left + g.width + n,
//                                                 t = g.top + g.height / 2 - i.offsetHeight / 2;
//                                             break;
//                                         case "bottom":
//                                             e = g.left - i.offsetWidth / 2 + g.width / 2,
//                                                 t = g.top + g.height + o;
//                                             break;
//                                         case "left-bottom":
//                                             e = g.left - i.offsetWidth - n,
//                                                 t = g.bottom - i.offsetHeight;
//                                             break;
//                                         case "left-top":
//                                             e = g.left - i.offsetWidth - n,
//                                                 t = g.top;
//                                             break;
//                                         case "right-top":
//                                             e = g.left + g.width + n,
//                                                 t = g.top;
//                                             break;
//                                         case "right-bottom":
//                                             e = g.left + g.width + n,
//                                                 t = g.bottom - i.offsetHeight;
//                                             break;
//                                         case "top-left":
//                                             e = g.left,
//                                                 t = g.top - i.offsetHeight - o;
//                                             break;
//                                         case "top-right":
//                                             e = g.left + g.width - i.offsetWidth,
//                                                 t = g.top - i.offsetHeight - o;
//                                             break;
//                                         case "bottom-left":
//                                             e = g.left,
//                                                 t = g.bottom + o;
//                                             break;
//                                         case "bottom-right":
//                                             e = g.left + g.width - i.offsetWidth,
//                                                 t = g.bottom + o;
//                                             break
//                                     }
//                                     var a = 20;
//                                     e < 0 && (e = 0 + a),
//                                     e + i.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - i.offsetWidth - a),
//                                     t < 0 && (t = 0 + a),
//                                     t + i.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - i.offsetHeight - a),
//                                         i.style.left = e + "px",
//                                         i.style.top = t + "px",
//                                         i.style.visibility = "visible"
//                                 }
//                             )
//                         }
//                     }
//                     , u = () => {
//                         i && i.parentNode.removeChild(i),
//                             o = null,
//                             a = "",
//                             l = !1,
//                             i = null
//                     }
//                 ;
//                 e.addEventListener("mouseenter", d),
//                     e.addEventListener("mouseleave", u)
//             },
//             updated(e, {value: t}) {
//                 e.$value = t
//             },
//             unmounted(e) {
//                 e.removeEventListener("mouseenter", e.mouseenterHandler),
//                     e.removeEventListener("mouseleave", e.mouseleaveHandler)
//             }
//         };
//         var p = b;
//         const f = {
//             tooltip: p
//         };
//         var g = {
//             install(e) {
//                 Object.keys(f).forEach(t => {
//                         e.directive(t, f[t])
//                     }
//                 )
//             }
//         }
//             , v = g
//             , h = o("0c0e")
//             , O = o.n(h);
//         const j = {
//             class: "sticky-sidebar"
//         };
//
//         function y(e, t, o, n, a, i) {
//             const r = Object(c["resolveComponent"])("router-view");
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createVNode"])(r, {
//                     class: Object(c["normalizeClass"])(["os_" + n.currentOS])
//                 }, null, 8, ["class"]), Object(c["createElementVNode"])("div", j, [Object(c["createElementVNode"])("div", {
//                     class: "feed",
//                     onClick: n.goFeed
//                 }), Object(c["createVNode"])(n["BackToTop"])])], 64)
//         }
//
//         function A(e, t, o, n, a, i) {
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", {
//                     class: "backToTopButton",
//                     style: Object(c["normalizeStyle"])({
//                         visibility: n.showButton ? "visible" : "hidden"
//                     }),
//                     onClick: n.scrollToTop
//                 }, null, 4)
//         }
//
//         var w = {
//             __name: "BackToTop",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(c["ref"])(!1)
//                     , n = window.innerHeight || document.body.clientHeight
//                     , a = () => {
//                         const e = document.documentElement.scrollTop || document.body.scrollTop;
//                         o.value = e >= n
//                     }
//                 ;
//                 window.addEventListener("scroll", a),
//                     Object(c["onBeforeUnmount"])(() => {
//                             window.removeEventListener("scroll", a)
//                         }
//                     );
//                 const i = () => {
//                     document.documentElement.scrollTo({
//                         top: 0,
//                         behavior: "smooth"
//                     })
//                 }
//                     , r = {
//                     showButton: o,
//                     winHeight: n,
//                     srollListener: a,
//                     scrollToTop: i
//                 };
//                 return Object.defineProperty(r, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     r
//             }
//         };
//         o("4c5a");
//         const k = d()(w, [["render", A], ["__scopeId", "data-v-d0d8f510"]]);
//         var E = k
//             , C = o("df52")
//             , T = o("5502")
//             , S = {
//             __name: "App",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(T["b"])()
//                     , n = Object(c["getCurrentInstance"])()
//                     , a = n.appContext.config.globalProperties
//                     , i = Object(c["ref"])("")
//                     , r = Object(c["ref"])("")
//                     , s = Object(c["ref"])("")
//                     ,
//                     l = Object(c["ref"])("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
//                     , d = Object(c["ref"])("")
//                     , u = () => {
//                         window.open("https://shared.youdao.com/dict/market/common-feedback/#/")
//                     }
//                     , m = e => {
//                         const t = {
//                             userid: e
//                         };
//                         C["a"].getBatchUrl(t).then(e => {
//                                 r.value = e.values.nickname,
//                                     o.dispatch("login/setNickName", r.value)
//                             }
//                         )
//                     }
//                     , b = () => {
//                         C["a"].getVipStatus().then(e => {
//                                 o.dispatch("login/setSvip", e.svip),
//                                     o.dispatch("login/setVip", e.vip)
//                             }
//                         )
//                     }
//                     , p = () => {
//                         C["a"].getAccountInfos().then(e => {
//                                 const t = e.data;
//                                 0 === e.code ? (o.dispatch("login/setLogin", !0),
//                                     i.value = t.yduserid,
//                                     s.value = l.value,
//                                     o.dispatch("login/setOptionAvatar", s.value),
//                                     m(i.value),
//                                     b()) : o.dispatch("login/setLogin", !1)
//                             }
//                         )
//                     }
//                 ;
//                 p();
//                 const f = () => {
//                         const e = navigator.userAgent.toLowerCase()
//                             , t = /macintosh|mac os x/i.test(e);
//                         d.value = t ? "Mac" : "Windows"
//                     }
//                 ;
//                 f();
//                 const g = {
//                     store: o,
//                     internalInstance: n,
//                     internalData: a,
//                     yduserid: i,
//                     nickname: r,
//                     optionAvatar: s,
//                     avatar: l,
//                     currentOS: d,
//                     goFeed: u,
//                     getBatchData: m,
//                     getVipInfo: b,
//                     getAccountInfo: p,
//                     getOS: f,
//                     BackToTop: E,
//                     service: C["a"],
//                     useStore: T["b"],
//                     ref: c["ref"],
//                     getCurrentInstance: c["getCurrentInstance"]
//                 };
//                 return Object.defineProperty(g, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     g
//             }
//         };
//         o("6fda");
//         const x = d()(S, [["render", y]]);
//         var N = x
//             , B = o("6605");
//         o("14d9");
//         const D = {
//                 id: "inner-box",
//                 class: "inner-box"
//             }
//             ,
//             I = Object(c["createStaticVNode"])('<div class="click-area" data-v-d59db9e0><a href="https://fanyi.youdao.com/trans/#/home" target="_blank" data-v-d59db9e0><p class="text" data-v-d59db9e0>输入arXiv论文检索地址，一键翻译全文</p><p class="text" data-v-d59db9e0>点击试试 👉 <span style="font-size:14px;" data-v-d59db9e0>https://arxiv.org/abs/2203.01927</span></p></a><span class="icon" data-v-d59db9e0></span></div>', 1)
//             , V = {
//                 class: "never-show"
//             };
//         var _ = {
//             __name: "ArxivPopUp",
//             setup(e) {
//                 const t = Object(B["e"])()
//                     , o = Object(c["getCurrentInstance"])()
//                     , n = o.appContext.config.globalProperties
//                     , a = Object(c["ref"])(!1)
//                     , i = "fanyiweb-showArxivTip"
//                     , r = "arxivShowTip"
//                     , s = Object(c["computed"])(() => "TextTranslate" === t.currentRoute.value.name)
//                     , l = () => {
//                     a.value && (a.value = !1)
//                 }
//                     , d = () => {
//                     a.value = !1,
//                         window.localStorage.setItem(i, !0)
//                 }
//                     , u = () => {
//                     const e = document.getElementById("js_fanyi_input_outside_container")
//                         , {top: t, left: o} = e.getBoundingClientRect()
//                         , n = document.getElementById("inner-box");
//                     n.offsetHeight,
//                         n.offsetWidth;
//                     n.style.top = t - 70 + "px",
//                         n.style.left = o + "px"
//                 }
//                     , m = {
//                     mounted() {
//                         document.body.style.cssText += "overflow: hidden"
//                     },
//                     unmounted() {
//                         document.body.style.cssText -= "overflow: hidden;"
//                     }
//                 };
//                 return Object(c["onMounted"])(() => {
//                         const e = localStorage.getItem(i);
//                         null !== n.$cookies.get(r) || e ? a.value = !1 : (a.value = !0,
//                             window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
//                             n.$cookies.set(r, !0, 86400),
//                             Object(c["nextTick"])(() => {
//                                     u()
//                                 }
//                             ))
//                     }
//                 ),
//                     (e, t) => a.value && Object(c["unref"])(s) ? Object(c["withDirectives"])((Object(c["openBlock"])(),
//                         Object(c["createElementBlock"])("div", {
//                             key: 0,
//                             class: "arxiv-pop-up",
//                             onClick: l
//                         }, [Object(c["createElementVNode"])("div", D, [Object(c["createElementVNode"])("div", {
//                             onClick: t[1] || (t[1] = Object(c["withModifiers"])(() => {
//                                 }
//                                 , ["stop"])),
//                             class: "inner-content"
//                         }, [I, Object(c["createElementVNode"])("div", V, [Object(c["createElementVNode"])("span", {
//                             onClick: t[0] || (t[0] = e => d())
//                         }, " 不再展示 ")])])])])), [[m]]) : Object(c["createCommentVNode"])("", !0)
//             }
//         };
//         o("cf6d");
//         const P = d()(_, [["__scopeId", "data-v-d59db9e0"]]);
//         var H = P
//             , M = o("04b3")
//             , L = o.n(M);
//         const U = ["src"];
//
//         function R(e, t, o, n, a, i) {
//             return Object(c["openBlock"])(),
//                 Object(c["createBlock"])(n["Overlay"], {
//                     visible: n.showAd,
//                     modalClosable: !0
//                 }, {
//                     content: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("img", {
//                         class: "ad",
//                         src: n.picture,
//                         onClick: n.goAd
//                     }, null, 8, U), Object(c["createElementVNode"])("img", {
//                         class: "close",
//                         src: L.a,
//                         onClick: n.closeAd
//                     })]),
//                     _: 1
//                 }, 8, ["visible"])
//         }
//
//         var Q = o("d706")
//             , W = o("5724");
//         const Y = "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod"
//             , J = () => Object(W["a"])(Y + "/translateMainPageBanner")
//             , F = () => Object(W["a"])(Y + "/translateMainPagePopup");
//         var G = {
//             getBannerInfos: J,
//             getPopUpInfos: F
//         }
//             , K = o("4260")
//             , q = {
//             __name: "AdPopUp",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(c["ref"])(!1)
//                     , n = Object(c["ref"])("")
//                     , a = Object(c["ref"])("")
//                     , i = Object(c["getCurrentInstance"])()
//                     , r = i.appContext.config.globalProperties
//                     , s = () => {
//                         o.value = !1
//                     }
//                     , l = () => {
//                         window.open(n.value, "_self"),
//                             window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
//                     }
//                 ;
//                 Object(c["onMounted"])(() => {
//                         G.getPopUpInfos().then(e => {
//                                 if (0 !== Object.keys(e.data.value).length) {
//                                     const t = e.data.value;
//                                     n.value = t.url,
//                                         a.value = t.picture,
//                                         K["a"].isDuringDate(t.startTime, t.endTime) && null === r.$cookies.get("adcookie") ? (o.value = !0,
//                                             window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
//                                             r.$cookies.set("adcookie", !0, 86400)) : o.value = !1
//                                 }
//                             }
//                         )
//                     }
//                 );
//                 const d = {
//                     showAd: o,
//                     url: n,
//                     picture: a,
//                     internalInstance: i,
//                     internalData: r,
//                     closeAd: s,
//                     goAd: l,
//                     ref: c["ref"],
//                     onMounted: c["onMounted"],
//                     getCurrentInstance: c["getCurrentInstance"],
//                     Overlay: Q["a"],
//                     service: G,
//                     util: K["a"]
//                 };
//                 return Object.defineProperty(d, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     d
//             }
//         };
//         o("ffd2");
//         const Z = d()(q, [["render", R], ["__scopeId", "data-v-05c25f5a"]]);
//         var z = Z
//             , X = o("c866")
//             , $ = o.n(X);
//         const ee = ["src"]
//             , te = ["onClick"];
//
//         function oe(e, t, o, n, a, i) {
//             return n.showBanner ? (Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", {
//                     key: 0,
//                     class: "banner",
//                     onClick: n.goBanner
//                 }, [Object(c["createElementVNode"])("img", {
//                     class: "banner-img",
//                     src: n.picture
//                 }, null, 8, ee), Object(c["createElementVNode"])("img", {
//                     class: "close",
//                     src: $.a,
//                     onClick: Object(c["withModifiers"])(n.closeBanner, ["stop"])
//                 }, null, 8, te)])) : Object(c["createCommentVNode"])("", !0)
//         }
//
//         var ne = {
//             __name: "Banner",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(c["ref"])("")
//                     , n = Object(c["ref"])("")
//                     , a = Object(c["ref"])(!0)
//                     , i = Object(c["getCurrentInstance"])()
//                     , r = i.appContext.config.globalProperties;
//                 Object(c["onMounted"])(() => {
//                         G.getBannerInfos().then(e => {
//                                 const t = e.data.value;
//                                 o.value = t.url,
//                                     n.value = t.picture,
//                                     K["a"].isDuringDate(t.startTime, t.endTime) && null === r.$cookies.get("bannercookie") ? a.value = !0 : a.value = !1
//                             }
//                         )
//                     }
//                 );
//                 const s = () => {
//                     r.$cookies.set("bannercookie", !0, 86400),
//                         a.value = !1
//                 }
//                     , l = () => {
//                     window.open(o.value)
//                 }
//                     , d = {
//                     url: o,
//                     picture: n,
//                     showBanner: a,
//                     internalInstance: i,
//                     internalData: r,
//                     closeBanner: s,
//                     goBanner: l,
//                     service: G,
//                     util: K["a"]
//                 };
//                 return Object.defineProperty(d, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     d
//             }
//         };
//         o("e79d");
//         const ae = d()(ne, [["render", oe], ["__scopeId", "data-v-04a83aae"]]);
//         var ce = ae
//             , ie = o("5894");
//         const re = {
//             class: "index"
//         };
//
//         function se(e, t, o, n, a, i) {
//             const r = ie["a"]
//                 , s = Object(c["resolveComponent"])("TranslateTab")
//                 , l = ce
//                 , d = Object(c["resolveComponent"])("vue3WebsiteFooter")
//                 , u = z
//                 , m = H;
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", re, [Object(c["createVNode"])(r), Object(c["createVNode"])(s), Object(c["createVNode"])(l), Object(c["createVNode"])(d), Object(c["createVNode"])(u), Object(c["createVNode"])(m)])
//         }
//
//         const le = {
//             class: "translate-tab-container"
//         }
//             , de = {
//             class: "tab-body-border-box"
//         }
//             , ue = {
//             class: "tab-body color_bg_3"
//         };
//
//         function me(e, t, o, n, a, i) {
//             const r = Object(c["resolveComponent"])("router-view");
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", le, [Object(c["createVNode"])(n["TabHeader"]), Object(c["createElementVNode"])("div", de, [Object(c["createElementVNode"])("div", ue, [Object(c["createVNode"])(r, null, {
//                     default: Object(c["withCtx"])(({Component: e}) => [(Object(c["openBlock"])(),
//                         Object(c["createBlock"])(c["KeepAlive"], null, [(Object(c["openBlock"])(),
//                             Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(e)))], 1024))]),
//                     _: 1
//                 })])])])
//         }
//
//         const be = e => (Object(c["pushScopeId"])("data-v-3e1f02ad"),
//             e = e(),
//             Object(c["popScopeId"])(),
//             e)
//             , pe = {
//             class: "TextTranslateSetting yd-form-container"
//         }
//             , fe = {
//             class: "checkbox"
//         }
//             , ge = be(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1 label-text"
//         }, "日语假名（仅译文）", -1))
//             , ve = {
//             class: "checkbox"
//         }
//             , he = be(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1 label-text"
//         }, "日语罗马音（仅译文）", -1))
//             , Oe = {
//             class: "checkbox"
//         }
//             , je = be(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1 label-text"
//         }, "显示原文字数", -1));
//
//         function ye(e, t, o, n, a, i) {
//             return Object(c["openBlock"])(),
//                 Object(c["createBlock"])(n["InterfaceDialog"], {
//                     dialogVisible: !0,
//                     width: "auto",
//                     height: "auto",
//                     top: 28,
//                     left: -162,
//                     onCloseDialog: n.closeDialog
//                 }, {
//                     default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", pe, [Object(c["createVNode"])(n["StrokeSwitch"]), Object(c["createElementVNode"])("label", fe, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
//                         class: "g-checkbox",
//                         type: "checkbox",
//                         "onUpdate:modelValue": t[0] || (t[0] = e => n.showPjm = e)
//                     }, null, 512), [[c["vModelCheckbox"], n.showPjm]]), ge]), Object(c["createElementVNode"])("label", ve, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
//                         class: "g-checkbox",
//                         type: "checkbox",
//                         "onUpdate:modelValue": t[1] || (t[1] = e => n.showRomanPronunciation = e)
//                     }, null, 512), [[c["vModelCheckbox"], n.showRomanPronunciation]]), he]), Object(c["createElementVNode"])("label", Oe, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
//                         class: "g-checkbox",
//                         type: "checkbox",
//                         "onUpdate:modelValue": t[2] || (t[2] = e => n.showWordsNumber = e)
//                     }, null, 512), [[c["vModelCheckbox"], n.showWordsNumber]]), je])])]),
//                     _: 1
//                 })
//         }
//
//         var Ae = o("a1e9")
//             , we = o("5c40")
//             , ke = o("2caa");
//         const Ee = {
//             class: "stroke-switch yd-form-container"
//         }
//             , Ce = {
//             class: "checkbox"
//         }
//             , Te = Object(c["createElementVNode"])("span", {
//             class: "color_text_1 label-text"
//         }, "划词（仅中英）", -1);
//
//         function Se(e, t, o, n, a, i) {
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", Ee, [Object(c["createElementVNode"])("label", Ce, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
//                     class: "g-checkbox",
//                     type: "checkbox",
//                     "onUpdate:modelValue": t[0] || (t[0] = e => n.allowStroke = e)
//                 }, null, 512), [[c["vModelCheckbox"], n.allowStroke]]), Te])])
//         }
//
//         var xe = {
//             name: "StrokeSwitch",
//             setup(e, t) {
//                 const o = Object(T["b"])()
//                     , n = Object(Ae["s"])(o.state.text.allowStroke);
//                 return Object(we["kc"])(n, (e, t) => {
//                         e !== t && o.commit("SET_ALLOW_STROKE", e)
//                     }
//                 ),
//                     {
//                         allowStroke: n
//                     }
//             }
//         };
//         const Ne = d()(xe, [["render", Se]]);
//         var Be = Ne
//             , De = {
//             __name: "TextTranslateSetting",
//             emits: ["closeDialog"],
//             setup(e, {expose: t, emit: o}) {
//                 t();
//                 const n = Object(T["b"])()
//                     , a = Object(Ae["s"])(!1)
//                     , i = Object(Ae["s"])(!1)
//                     , r = Object(Ae["s"])(!0);
//                 Object(c["onBeforeMount"])(() => {
//                         n.dispatch("initTextTranslateSettingStore"),
//                             a.value = n.state.text.showPjm,
//                             i.value = n.state.text.showRomanPronunciation,
//                             r.value = n.state.text.showWordsNumber
//                     }
//                 ),
//                     Object(we["kc"])(a, (e, t) => {
//                             e !== t && n.commit("SET_SHOW_PJM", e)
//                         }
//                     ),
//                     Object(we["kc"])(i, (e, t) => {
//                             e !== t && n.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
//                         }
//                     ),
//                     Object(we["kc"])(r, (e, t) => {
//                             e !== t && n.commit("SET_SHOW_WORDS_NUMBER", e)
//                         }
//                     );
//                 const s = () => {
//                     o("closeDialog")
//                 }
//                     , l = {
//                     store: n,
//                     emit: o,
//                     showPjm: a,
//                     showRomanPronunciation: i,
//                     showWordsNumber: r,
//                     closeDialog: s,
//                     computed: we["q"],
//                     ref: Ae["s"],
//                     watch: we["kc"],
//                     useStore: T["b"],
//                     InterfaceDialog: ke["a"],
//                     StrokeSwitch: Be
//                 };
//                 return Object.defineProperty(l, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     l
//             }
//         };
//         o("aad4");
//         const Ie = d()(De, [["render", ye], ["__scopeId", "data-v-3e1f02ad"]]);
//         var Ve = Ie;
//         const _e = e => (Object(c["pushScopeId"])("data-v-6e71f92b"),
//             e = e(),
//             Object(c["popScopeId"])(),
//             e)
//             , Pe = {
//             class: "tab-header"
//         }
//             , He = {
//             class: "tab-left"
//         }
//             , Me = ["onClick"]
//             , Le = {
//             class: "color_text_1"
//         }
//             , Ue = _e(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1"
//         }, "人工翻译", -1))
//             , Re = [Ue]
//             , Qe = _e(() => Object(c["createElementVNode"])("i", {
//             class: "ic_new_tag"
//         }, null, -1))
//             , We = {
//             class: "tab-right"
//         }
//             , Ye = _e(() => Object(c["createElementVNode"])("i", {
//             class: "icon ic_text_translate_setting"
//         }, null, -1))
//             , Je = _e(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1"
//         }, "设置", -1))
//             , Fe = _e(() => Object(c["createElementVNode"])("i", {
//             class: "icon ic_leftbar_document_normal"
//         }, null, -1))
//             , Ge = _e(() => Object(c["createElementVNode"])("span", {
//             class: "color_text_1"
//         }, "文档翻译记录", -1))
//             , Ke = [Fe, Ge];
//
//         function qe(e, t, o, n, a, i) {
//             const r = Ve
//                 , s = Object(c["resolveDirective"])("tooltip");
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", Pe, [Object(c["createElementVNode"])("div", He, [(Object(c["openBlock"])(!0),
//                     Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(a.tabList, (e, t) => (Object(c["openBlock"])(),
//                         Object(c["createElementBlock"])("div", {
//                             class: Object(c["normalizeClass"])(["tab-item", [e.value === a.currentTab ? "active color_text_1" : "color_text_3"]]),
//                             key: t,
//                             onClick: t => i.tabItemClickHandler(e)
//                         }, [Object(c["createElementVNode"])("span", Le, Object(c["toDisplayString"])(e.label), 1)], 10, Me))), 128)), Object(c["withDirectives"])((Object(c["openBlock"])(),
//                     Object(c["createElementBlock"])("div", {
//                         class: "tab-item color_text_3",
//                         onClick: t[0] || (t[0] = e => i.hunmanTranslateButtonClickHandler())
//                     }, Re)), [[s, i.HumanTranslateHoverTip, void 0, {
//                     "bottom-left": !0
//                 }]]), Qe]), Object(c["createElementVNode"])("div", We, ["TextTranslate" === i.routeName ? (Object(c["openBlock"])(),
//                     Object(c["createElementBlock"])("div", {
//                         key: 0,
//                         class: "tool-button",
//                         onClick: t[1] || (t[1] = (...e) => i.textTranslateSettingButtonClickHander && i.textTranslateSettingButtonClickHander(...e))
//                     }, [Ye, Je, Object(c["createVNode"])(r, {
//                         dialogVisible: a.textTranslateSettingDialogVisible,
//                         onCloseDialog: i.textTranslateSettingCloseCallbackHandler
//                     }, null, 8, ["dialogVisible", "onCloseDialog"])])) : Object(c["createCommentVNode"])("", !0), "DocumentUpload" === i.routeName ? (Object(c["openBlock"])(),
//                     Object(c["createElementBlock"])("div", {
//                         key: 1,
//                         class: "tool-button",
//                         onClick: t[2] || (t[2] = (...e) => i.docHistoryEntryClickHandler && i.docHistoryEntryClickHandler(...e))
//                     }, Ke)) : Object(c["createCommentVNode"])("", !0)])])
//         }
//
//         const Ze = {
//                 class: "hunman-translate-hover-tip"
//             }
//             ,
//             ze = Object(c["createStaticVNode"])('<h5 class="tip-title" data-v-bd7d7622><span class="color_main_1_text" data-v-bd7d7622>母语润色</span><span class="color_text_1" data-v-bd7d7622>服务全新上线</span></h5><ul class="tip-list" data-v-bd7d7622><li class="tip-list-item color_text_2" data-v-bd7d7622>专业译员随时待命</li><li class="tip-list-item color_text_2" data-v-bd7d7622>最快1分钟返回精准译文</li></ul>', 2)
//             , Xe = [ze];
//
//         function $e(e, t) {
//             return Object(c["openBlock"])(),
//                 Object(c["createElementBlock"])("div", Ze, Xe)
//         }
//
//         o("ad58");
//         const et = {}
//             , tt = d()(et, [["render", $e], ["__scopeId", "data-v-bd7d7622"]]);
//         var ot = tt
//             , nt = {
//             name: "TabHeader",
//             data() {
//                 return {
//                     tabList: [{
//                         label: "文本",
//                         value: "TextTranslate"
//                     }, {
//                         label: "文档",
//                         value: "DocumentUpload"
//                     }],
//                     currentTab: "",
//                     textTranslateSettingDialogVisible: !1
//                 }
//             },
//             computed: {
//                 routeName() {
//                     return this.$route.name
//                 },
//                 isLogin() {
//                     return this.$store.state.login.isLogin
//                 }
//             },
//             components: {
//                 TextTranslateSetting: Ve
//             },
//             methods: {
//                 HumanTranslateHoverTip() {
//                     return {
//                         component: ot
//                     }
//                 },
//                 tabItemClickHandler(e) {
//                     this.$router.push({
//                         name: "" + e.value
//                     })
//                 },
//                 hunmanTranslateButtonClickHandler() {
//                     window._rlog.push(["_trackCustom", "event", [["action", "human_translation"]]]),
//                         window.open("https://f.youdao.com/?vendor=fanyibanner", "_blank")
//                 },
//                 textTranslateSettingButtonClickHander() {
//                     this.textTranslateSettingDialogVisible = !0
//                 },
//                 textTranslateSettingCloseCallbackHandler() {
//                     this.textTranslateSettingDialogVisible = !1
//                 },
//                 docHistoryEntryClickHandler() {
//                     if (this.isLogin) {
//                         const e = this.$router.resolve({
//                             path: "/person/docHistory"
//                         });
//                         window.open(e.href, "_blank")
//                     } else {
//                         const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
//                         window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + encodeURIComponent(e)
//                     }
//                 }
//             },
//             watch: {
//                 $route: {
//                     handler() {
//                         this.currentTab = decodeURIComponent(this.$route.name)
//                     },
//                     immediate: !0
//                 }
//             }
//         };
//         o("6401");
//         const at = d()(nt, [["render", qe], ["__scopeId", "data-v-6e71f92b"]]);
//         var ct = at
//             , it = o("8139")
//             , rt = {
//             __name: "index",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(c["getCurrentInstance"])()
//                     , n = o.appContext.config.globalProperties
//                     , a = Object(T["b"])();
//                 Object(c["onBeforeMount"])(() => {
//                         a.dispatch("fetchLanguageData"),
//                             a.dispatch("fetchDomainData");
//                         const e = {
//                             keyid: "minor-search-server"
//                         }
//                             , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
//                         it["a"].getAigcEntrance(e, t).then(o => {
//                                 a.commit("SET_ISALLOWAIGC", o.data.isAllow),
//                                 !o.data.isAllow && a.state.login.isLogin || it["a"].getAigcStyle(e, t).then(e => {
//                                         a.commit("SET_AIGCDOMAINMAP", e.data.styleList),
//                                         null !== n.$cookies.get("participation-aigc-invitation") && a.dispatch("updateDomainMap")
//                                     }
//                                 )
//                             }
//                         )
//                     }
//                 );
//                 const i = {
//                     internalInstance: o,
//                     internalData: n,
//                     store: a,
//                     getCurrentInstance: c["getCurrentInstance"],
//                     TabHeader: ct,
//                     useStore: T["b"],
//                     service: it["a"]
//                 };
//                 return Object.defineProperty(i, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     i
//             }
//         };
//         o("c23f");
//         const st = d()(rt, [["render", me], ["__scopeId", "data-v-30e6cf08"]]);
//         var lt = st
//             , dt = {
//             name: "Home",
//             components: {
//                 VHeader: ie["a"],
//                 Banner: ce,
//                 AdPopUp: z,
//                 ArxivPopUp: H,
//                 TranslateTab: lt
//             }
//         };
//         o("1dc7");
//         const ut = d()(dt, [["render", se], ["__scopeId", "data-v-72e88ab5"]]);
//         var mt = ut
//             , bt = o("4360");
//         const pt = [{
//             path: "/",
//             name: "Home",
//             component: mt,
//             children: [{
//                 path: "",
//                 name: "TextTranslate",
//                 component: () => Promise.all([o.e("documentUpload~textTranslate"), o.e("textTranslate")]).then(o.bind(null, "5bac"))
//             }, {
//                 path: "documentUpload",
//                 name: "DocumentUpload",
//                 component: () => Promise.all([o.e("documentUpload~textTranslate"), o.e("documentUpload")]).then(o.bind(null, "211a"))
//             }]
//         }, {
//             path: "/person",
//             name: "person",
//             component: () => o.e("Person").then(o.bind(null, "ce40")),
//             beforeEnter(e, t, o) {
//                 console.log(bt["a"].state.login.isLogin);
//                 const {isLogin: n} = bt["a"].state.login;
//                 n ? o() : o({
//                     name: "Home"
//                 })
//             },
//             children: [{
//                 path: "docHistory",
//                 name: "docHistory",
//                 component: () => Promise.all([o.e("DocHistory~termBank"), o.e("DocHistory")]).then(o.bind(null, "20ce"))
//             }, {
//                 path: "termBank",
//                 name: "termBank",
//                 component: () => Promise.all([o.e("DocHistory~termBank"), o.e("termBank")]).then(o.bind(null, "a983"))
//             }]
//         }, {
//             path: "/login/:redirectUrl?",
//             name: "NoLogin",
//             component: () => o.e("NoLogin").then(o.bind(null, "e0bc"))
//         }]
//             , ft = Object(B["a"])({
//             history: Object(B["b"])(),
//             routes: pt
//         });
//         ft.beforeEach((e, t, o) => {
//                 document.body.scrollTop = 0,
//                     document.documentElement.scrollTop = 0,
//                     o()
//             }
//         );
//         var gt = ft;
//         o("4ee2"),
//             o("d662"),
//             o("5c54"),
//             o("d007");
//         const vt = Object(c["createApp"])(N);
//         vt.config.globalProperties.$cookies = a.a,
//             vt.config.globalProperties.$toast = i["a"],
//             vt.use(bt["a"]).use(gt).use(a.a).use(v).use(O.a).mount("#app")
//     },
//     5724: function (e, t, o) {
//         "use strict";
//         o.d(t, "a", (function () {
//                 return i
//             }
//         )),
//             o.d(t, "b", (function () {
//                     return r
//                 }
//             )),
//             o.d(t, "c", (function () {
//                     return s
//                 }
//             )),
//             o.d(t, "d", (function () {
//                     return l
//                 }
//             ));
//         var n = o("5530")
//             , a = o("bc3a")
//             , c = (o("7a23"),
//             o("8393"));
//
//         function i(e, t, o = {}) {
//             return new Promise((c, i) => {
//                     a["a"].get(e, Object(n["a"])({
//                         params: t
//                     }, o)).then(e => {
//                             c(e.data)
//                         }
//                     ).catch(e => {
//                             i(e)
//                         }
//                     )
//                 }
//             )
//         }
//
//         function r(e, t, o) {
//             return new Promise(n => {
//                     o ? a["a"].post(e, t, {
//                         timeout: o
//                     }).then(e => {
//                             n(e.data)
//                         }
//                     ).catch(e => {
//                             n(e)
//                         }
//                     ) : a["a"].post(e, t).then(e => {
//                             n(e.data)
//                         }
//                     ).catch(e => {
//                             n(e)
//                         }
//                     )
//                 }
//             )
//         }
//
//         function s(e, t) {
//             const o = t
//                 , n = new FormData;
//             return Object.keys(o).forEach(e => {
//                     n.append(e, o[e])
//                 }
//             ),
//                 new Promise((t, o) => {
//                         a["a"].post(e, n).then(e => {
//                                 t(e.data)
//                             }
//                         ).catch(e => {
//                                 o(e)
//                             }
//                         )
//                     }
//                 )
//         }
//
//         function l(e, t, o) {
//             return new Promise((n, c) => {
//                     a["a"].post(e, t, o).then(e => {
//                             n(e.data)
//                         }
//                     ).catch(e => {
//                             c(e)
//                         }
//                     )
//                 }
//             )
//         }
//
//         a["a"].defaults.withCredentials = !0,
//             a["a"].interceptors.response.use(e => e, e => (e.code && "ERR_CANCELED" === e.code || Object(c["a"])("网络异常，请检查网络"),
//                 Promise.reject(e)))
//     },
//     5894: function (e, t, o) {
//         "use strict";
//         var n = o("7a23")
//             , a = o("4ffd")
//             , c = o.n(a)
//             , i = o("79e2")
//             , r = o.n(i)
//             , s = o("a16c")
//             , l = o.n(s);
//         const d = e => (Object(n["pushScopeId"])("data-v-830a1b10"),
//             e = e(),
//             Object(n["popScopeId"])(),
//             e)
//             , u = {
//             class: "top-area"
//         }
//             , m = {
//             class: "nav_list color_text_1"
//         }
//             , b = {
//             class: "nav_item"
//         }
//             , p = d(() => Object(n["createElementVNode"])("div", {
//             class: "active-bottom"
//         }, null, -1))
//             , f = {
//             class: "nav_item"
//         }
//             , g = d(() => Object(n["createElementVNode"])("div", {
//             class: "vip-tip color_text_vip_2"
//         }, [Object(n["createElementVNode"])("span", null, "全新上线")], -1))
//             , v = {
//             class: "nav_item"
//         }
//             , h = {
//             class: "nav_item"
//         }
//             , O = {
//             class: "nav_item"
//         }
//             , j = {
//             class: "nav_item"
//         }
//             , y = {
//             class: "nav_item"
//         }
//             , A = d(() => Object(n["createElementVNode"])("div", {
//             class: "vip-tip color_text_vip_2"
//         }, [Object(n["createElementVNode"])("span", null, "免费下载")], -1))
//             , w = {
//             class: "account"
//         }
//             , k = d(() => Object(n["createElementVNode"])("img", {
//             class: "user_avatar",
//             src: l.a
//         }, null, -1))
//             , E = d(() => Object(n["createElementVNode"])("div", {
//             class: "login-area"
//         }, "登录", -1))
//             , C = [k, E]
//             , T = {
//             class: "user-info"
//         }
//             , S = ["src"]
//             , x = d(() => Object(n["createElementVNode"])("div", {
//             class: "icon-nav"
//         }, null, -1))
//             , N = {
//             class: "user-options_cover"
//         }
//             , B = {
//             class: "user-item"
//         };
//
//         function D(e, t, o, a, i, s) {
//             return Object(n["openBlock"])(),
//                 Object(n["createElementBlock"])("div", {
//                     class: Object(n["normalizeClass"])(["top-nav", [a.isTop ? "top" : "not-top"]])
//                 }, [Object(n["createElementVNode"])("div", u, [Object(n["createElementVNode"])("img", {
//                     class: "logo",
//                     src: c.a,
//                     onClick: a.goHome
//                 }), Object(n["createElementVNode"])("ul", m, [Object(n["createElementVNode"])("li", b, [Object(n["createElementVNode"])("div", {
//                     class: "active",
//                     onClick: t[0] || (t[0] = e => a.goNavigation(0))
//                 }, "在线翻译"), p]), Object(n["createElementVNode"])("li", f, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[1] || (t[1] = e => a.goNavigation(8))
//                 }, "有道速读"), g]), Object(n["createElementVNode"])("li", v, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[2] || (t[2] = e => a.goNavigation(7))
//                 }, "arXiv论文翻译")]), Object(n["createElementVNode"])("li", h, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[3] || (t[3] = e => a.goNavigation(1))
//                 }, "英文写作")]), Object(n["createElementVNode"])("li", O, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[4] || (t[4] = e => a.goNavigation(2))
//                 }, "同传翻译")]), Object(n["createElementVNode"])("li", {
//                     class: "nav_item",
//                     onClick: a.goVip
//                 }, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[5] || (t[5] = e => a.goNavigation(3))
//                 }, "超级会员")]), Object(n["createElementVNode"])("li", j, [Object(n["createElementVNode"])("div", {
//                     class: "item",
//                     onClick: t[6] || (t[6] = e => a.goNavigation(4))
//                 }, "翻译API")]), Object(n["createElementVNode"])("li", y, [Object(n["createElementVNode"])("div", {
//                     class: "item rg-item",
//                     onClick: t[7] || (t[7] = e => a.goNavigation(5))
//                 }, "人工翻译"), Object(n["createElementVNode"])("img", {
//                     class: "rg",
//                     src: r.a,
//                     onClick: a.goFanyi
//                 })]), Object(n["createElementVNode"])("li", {
//                     class: "nav_item"
//                 }, [Object(n["createElementVNode"])("div", {
//                     class: "item download-item",
//                     onClick: a.downLoad
//                 }, "桌面端"), A])]), Object(n["createElementVNode"])("div", w, [Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
//                     class: "login",
//                     onClick: a.login
//                 }, C, 512), [[n["vShow"], !a.isLogin]]), Object(n["withDirectives"])(Object(n["createElementVNode"])("div", T, [Object(n["createElementVNode"])("img", {
//                     class: "user_avatar",
//                     src: a.optionAvatar
//                 }, null, 8, S), x, Object(n["createElementVNode"])("div", N, [Object(n["createElementVNode"])("div", B, Object(n["toDisplayString"])(a.nickname), 1), Object(n["createElementVNode"])("div", {
//                     class: "user-item person",
//                     onClick: a.goPersonCenter
//                 }, "个人中心"), Object(n["createElementVNode"])("div", {
//                     class: "user-item invoice",
//                     onClick: a.goInvoice
//                 }, "开具发票"), Object(n["createElementVNode"])("div", {
//                     class: "user-item quit",
//                     onClick: a.quit
//                 }, "退出登录")])], 512), [[n["vShow"], a.isLogin]])]), Object(n["createVNode"])(a["PopUp"], {
//                     visible: a.showQuit,
//                     text: a.quitText,
//                     onConfirm: a.confirm,
//                     modalClosable: !0,
//                     onClosePop: a.closePop
//                 }, null, 8, ["visible", "text"])])], 2)
//         }
//
//         o("14d9");
//         var I = o("df52")
//             , V = o("5502")
//             , _ = o("6605")
//             , P = o("c0ee")
//             , H = o("e550")
//             , M = o("4260")
//             , L = {
//             __name: "VHeader",
//             setup(e, {expose: t}) {
//                 t();
//                 const o = Object(_["e"])()
//                     , a = Object(V["b"])()
//                     , c = Object(n["ref"])(!1)
//                     , i = Object(n["ref"])("确定退出当前账号吗？")
//                     , r = Object(n["computed"])(() => a.state.login.isLogin)
//                     , s = Object(n["computed"])(() => a.state.login.optionAvatar)
//                     , l = Object(n["computed"])(() => a.state.login.nickname)
//                     , d = Object(n["ref"])(!1)
//                     , {protocol: u} = window.location
//                     , m = Object(n["ref"])(!0)
//                     , b = [{
//                         tabIndex: 0,
//                         name: "在线翻译",
//                         url: "/home"
//                     }, {
//                         tabIndex: 1,
//                         name: "英文写作",
//                         url: "https://write.youdao.com/#/homepage?from=fanyi_top"
//                     }, {
//                         tabIndex: 2,
//                         name: "同传翻译",
//                         url: "https://tongchuan.youdao.com/?keyfrom=fanyi_web_tab"
//                     }, {
//                         tabIndex: 3,
//                         name: "超级会员",
//                         url: "https://fanyi.youdao.com/vip.html#/?keyfrom=fanyi_top"
//                     }, {
//                         tabIndex: 4,
//                         name: "翻译API",
//                         url: "https://ai.youdao.com/?keyfrom=fanyi-new-nav#/"
//                     }, {
//                         tabIndex: 5,
//                         name: "人工翻译",
//                         url: "https://f.youdao.com/?vendor=fanyi-new-nav"
//                     }, {
//                         tabIndex: 6,
//                         name: "客户端",
//                         url: ""
//                     }, {
//                         tabIndex: 7,
//                         name: "arxiv论文翻译",
//                         url: "https://fanyi.youdao.com/trans/#/home"
//                     }, {
//                         tabIndex: 8,
//                         name: "有道速读",
//                         url: "https://read.youdao.com/#/home"
//                     }]
//                     , p = Object(n["computed"])(() => M["a"].isMac() ? "Mac" : "Windows")
//                     , f = () => {
//                         window.open("https://fanyi.youdao.com/download/?keyfrom=fanyiweb_navigation")
//                     }
//                     , g = () => {
//                         "/" === o.currentRoute.value.path ? window.location.reload() : o.replace({
//                             path: "/"
//                         })
//                     }
//                     , v = () => {
//                         localStorage.setItem("showFirst", !0)
//                     }
//                     , h = e => {
//                         0 === e ? g() : "" !== b[e].url && window.open(b[e].url),
//                         3 === e && v(),
//                             window._rlog.push(["_trackCustom", "event", [["action", "navigation"], ["type", b[e].name]]])
//                     }
//                     , O = () => {
//                         const e = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
//                         if (e) {
//                             const e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//                             m.value = 0 === e
//                         }
//                     }
//                 ;
//                 Object(n["onMounted"])(() => {
//                         window.addEventListener("scroll", O),
//                             null === localStorage.getItem("showFirst") ? d.value = !0 : d.value = !1
//                     }
//                 );
//                 const j = () => {
//                     H["a"].$emit("saveTextTranslateContentToLS");
//                     const e = encodeURIComponent(window.location.href);
//                     window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + e
//                 }
//                     , y = () => {
//                     window.location.href = "https://f.youdao.com/?vendor=fanyi-new-fanyicover"
//                 }
//                     , A = () => {
//                     o.push({
//                         path: "/person/docHistory"
//                     })
//                 }
//                     , w = () => {
//                     window.open("https://c.youdao.com/dict/vip/invoice.html")
//                 }
//                     , k = () => {
//                     c.value = !1
//                 }
//                     , E = () => {
//                     c.value = !1,
//                         H["a"].$emit("saveTextTranslateContentToLS");
//                     const e = encodeURIComponent(window.location.href);
//                     console.log("router", o.currentRoute.value.path),
//                         "/" === o.currentRoute.value.path ? window.location.href = "https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=" + e : window.location.replace("https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=https://c.youdao.com/common-login-web/index.html?redirect_url=" + e)
//                 }
//                     , C = () => {
//                     c.value = !0
//                 }
//                     , T = {
//                     router: o,
//                     store: a,
//                     showQuit: c,
//                     quitText: i,
//                     isLogin: r,
//                     optionAvatar: s,
//                     nickname: l,
//                     showFirst: d,
//                     protocol: u,
//                     isTop: m,
//                     navList: b,
//                     platform: p,
//                     downLoad: f,
//                     goHome: g,
//                     goVip: v,
//                     goNavigation: h,
//                     showScroll: O,
//                     login: j,
//                     goFanyi: y,
//                     goPersonCenter: A,
//                     goInvoice: w,
//                     closePop: k,
//                     confirm: E,
//                     quit: C,
//                     service: I["a"],
//                     useStore: V["b"],
//                     useRouter: _["e"],
//                     PopUp: P["a"],
//                     eventBus: H["a"],
//                     util: M["a"]
//                 };
//                 return Object.defineProperty(T, "__isScriptSetup", {
//                     enumerable: !1,
//                     value: !0
//                 }),
//                     T
//             }
//         }
//             , U = (o("d94e"),
//             o("6b0d"))
//             , R = o.n(U);
//         const Q = R()(L, [["render", D], ["__scopeId", "data-v-830a1b10"]]);
//         t["a"] = Q
//     },
//     "594a": function (e, t, o) {
//         "use strict";
//         o("8121")
//     },
//     "5c54": function (e, t, o) {
//     },
//     6: function (e, t) {
//     },
//     "62bf": function (e, t, o) {
//     },
//     6401: function (e, t, o) {
//         "use strict";
//         o("62bf")
//     },
//     "6fda": function (e, t, o) {
//         "use strict";
//         o("3102")
//     },
//     7: function (e, t) {
//     },
//     "79e2": function (e, t, o) {
//         e.exports = o.p + "img/rg.527c9cc6.png"
//     },
//     8: function (e, t) {
//     },
//     8121: function (e, t, o) {
//     },
//     8139: function (e, t, o) {
//         "use strict";
//         (function (e) {
//                 var n = o("5530")
//                     , a = o("5724")
//                     , c = o("1c46")
//                     , i = o.n(c)
//                     , r = o("bc3a");
//                 const {CancelToken: s} = r["a"];
//                 let l;
//                 const d = "fanyideskweb"
//                     , u = "webfanyi"
//                     , m = "client,mysticTime,product"
//                     , b = "1.0.0"
//                     , p = "web"
//                     , f = "fanyi.web";
//
//                 function g(e) {
//                     return i.a.createHash("md5").update(e).digest()
//                 }
//
//                 function v(e) {
//                     return i.a.createHash("md5").update(e.toString()).digest("hex")
//                 }
//
//                 function h(e, t) {
//                     return v(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
//                 }
//
//                 function O(e) {
//                     const t = (new Date).getTime();
//                     return {
//                         sign: h(t, e),
//                         client: d,
//                         product: u,
//                         appVersion: b,
//                         vendor: p,
//                         pointParam: m,
//                         mysticTime: t,
//                         keyfrom: f
//                     }
//                 }
//
//                 const j = (e, t) => Object(a["a"])("https://dict.youdao.com/webtranslate/key", Object(n["a"])(Object(n["a"])({}, e), O(t)))
//                     ,
//                     y = (e, t) => Object(a["d"])("https://dict.youdao.com/webtranslate", Object(n["a"])(Object(n["a"])({}, e), O(t)), {
//                         headers: {
//                             "Content-Type": "application/x-www-form-urlencoded"
//                         }
//                     })
//                     , A = () => {
//                         l && l()
//                     }
//                     , w = e => Object(a["c"])("https://dict.youdao.com/keyword/key", e)
//                     ,
//                     k = (e, t) => Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/entrance", Object(n["a"])(Object(n["a"])({}, e), O(t)))
//                     ,
//                     E = (e, t) => Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/style", Object(n["a"])(Object(n["a"])({}, e), O(t)))
//                     ,
//                     C = (e, t) => Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/tran", Object(n["a"])(Object(n["a"])({}, e), O(t)), {
//                         cancelToken: new s(e => {
//                                 l = e
//                             }
//                         )
//                     })
//                     , T = e => Object(a["c"])("https://fanyi.youdao.com/feedback", e)
//                     , S = (t, o, n) => {
//                         if (!t)
//                             return null;
//                         const a = e.alloc(16, g(o))
//                             , c = e.alloc(16, g(n))
//                             , r = i.a.createDecipheriv("aes-128-cbc", a, c);
//                         let s = r.update(t, "base64", "utf-8");
//                         return s += r.final("utf-8"),
//                             s
//                     }
//                     , x = "https://lunafeedback.youdao.com/feedback"
//                     , N = e => {
//                         const t = "product=deskdict_contentCorrection&client=fanyiweb&appVersion=1.0.0&comments=" + e;
//                         return Object(a["b"])(x + "/add", t)
//                     }
//                 ;
//                 t["a"] = {
//                     getTextTranslateSecretKey: j,
//                     getTextTranslateResult: y,
//                     getTextTranslateKeyword: w,
//                     decodeData: S,
//                     feedback: N,
//                     getAigcEntrance: k,
//                     getAigcStyle: E,
//                     getAigcTran: C,
//                     fanyiFeedback: T,
//                     cancelLastGpt: A
//                 }
//             }
//         ).call(this, o("b639").Buffer)
//     },
//     8393: function (e, t, o) {
//         "use strict";
//         var n = o("7a23");
//
//         function a(e, t, o, a, c, i) {
//             return Object(n["openBlock"])(),
//                 Object(n["createBlock"])(n["Transition"], {
//                     name: "fade"
//                 }, {
//                     default: Object(n["withCtx"])(() => [Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
//                         class: "toasts"
//                     }, Object(n["toDisplayString"])(o.text), 513), [[n["vShow"], a.visible]])]),
//                     _: 1
//                 })
//         }
//
//         var c = {
//             name: "toast",
//             props: {
//                 text: {
//                     type: String,
//                     default: ""
//                 }
//             },
//             setup() {
//                 const e = Object(n["ref"])(!1);
//                 return Object(n["onMounted"])(() => {
//                         e.value = !0
//                     }
//                 ),
//                     {
//                         visible: e
//                     }
//             }
//         }
//             , i = (o("44ae"),
//             o("6b0d"))
//             , r = o.n(i);
//         const s = r()(c, [["render", a], ["__scopeId", "data-v-67be4052"]]);
//         var l = s;
//         const d = document.createElement("div");
//         d.setAttribute("class", "toast"),
//             document.body.appendChild(d);
//         let u = null;
//         t["a"] = (e, t = 1500) => {
//             const o = Object(n["createVNode"])(l, {
//                 text: e
//             });
//             Object(n["render"])(o, d),
//                 clearTimeout(u),
//                 u = setTimeout(() => {
//                         Object(n["render"])(null, d)
//                     }
//                     , t)
//         }
//     },
//     8498: function (e, t, o) {
//     },
//     8544: function (e, t, o) {
//         "use strict";
//         let n;
//         const a = "fanyiweb"
//             , c = window.localStorage;
//
//         function i(e) {
//             return `${a}-${e}`
//         }
//
//         n = "undefined" !== typeof localStorage && null !== localStorage && {
//             set: function (e, t) {
//                 var o = JSON.stringify(t);
//                 e = i(e);
//                 try {
//                     return c.setItem(e, o)
//                 } catch (n) {
//                     "QuotaExceededError" === n.name && (c.clear(),
//                         c.setItem(e, o))
//                 }
//             },
//             get: function (e) {
//                 var t = JSON.parse(c.getItem(i(e)));
//                 return t
//             },
//             remove: function (e) {
//                 c.removeItem(i(e))
//             }
//         },
//             t["a"] = n
//     },
//     9: function (e, t) {
//     },
//     "918c": function (e, t, o) {
//     },
//     "99fe": function (e, t, o) {
//         "use strict";
//         o("0be0")
//     },
//     a16c: function (e, t) {
//         e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApeSURBVHgB1VtdchNJEs5qqWUbDBhsJsbe2Rj5BMDjRuzGmteN2JidE4w5AXAC4AQDJxi4wczTPuyD/cbTBt4TWMREIGIXYwG2ZUvdlZtZXT9ZLdmW7G6H+WZA3a3qVn1ZmV9lZTUKasZ2t99O03StqdQdUNjWoNoKYAEQ21FDpToI0EsAO3mO/8mV2kqHw63l5bkO1AgFNeD3/w3X0iT5ARX8Y4To9OhQNzczrV/98Xa6CRWjMgNsb+PC7IJ+qDQ+Qh7hetDJEZ41hsPNqjzj3Aa4IOIRqNM9+vslDgYvzmuIcxng/W7+EDQ+vSjiY2A84rul5ks4I85kgC4JG8ykvwDCGlwOdGAwvH8Wb0hgSvCoq1b65hKRZ7S5T+92Bo9gSkzlAUT+Z6RYh8uMRD1dvtl4NmnziQ3Q3c1+AQ3r8HXg5fJi88EkDScywLud/I0CvAtfEZASqZVbjXuntTtVA3jkvzbyDIV4t7tDXnsKTjRAdzd/8hW5/Tisv9/Jfz6pwbEhwGpPgvccKgQiQqYBsjyHIU3gOtegNUKSKFoKKGg1E5ibaULVoF96vLLYGstlrAF4nudppcoEJyPCR8Mcck2ksTAGGZiO6ZPONV2nDxJxgPm5FlyZTaEqcOaIg+G9cXnC+BBotTaqJH9Ew94/yog8mhFH+1mQR0u++BxS24+f+/Bp7xCqguHCidsYjBig+yFbp1vaUBEGRGhAI6/BkQZB3BoE3Sf4490vh7BDhqgMlLiNS5SiEDApLo1+VQbgOD8cZIGkc3VH1BrCG4D7GXkGwrdL83B1tgVVgEOhnzRWV2+qnrsWeYCabT2scvSZfG4JFaMfyDsNwJIXaOkZ9Of9hy/muApwKLSyLPIC7wFVCx+7/sFhFkZYjrQTvrIHWC+JBRLh9s2rcOvGFagCZS8IHkBlqyqFb5DlRthi8uCJ+z9ENJezAWoTJu57/m7/cABVoewFwQBKPYEKkeejLm3IobbnOoyydffcXvNGsl5xcDiEKtFI1EN3bAzANbwqY58xJA8wIymMEMW7vFYKAXefa3dEU2iVYC/oGs7WAK1E/QQVw5MxI6zjUDDXrLu7a2BDwbm/1t5LsBoNjJBzwRasAahUvQYVg5JbQ1zbzM8lQWHUtc0A43ygLIhsjJm0+vS4oZIf+LNp5v6K3d/8QEOREIaRdmS9MOogejIBkkagW40R09bUhasJgO13u/h9otO0lqVuSgsbH/9YmuslUekFfnaAYjq0127Mz0Id0MPhfdqIqWet7xYzI/EuXD634RB0QawNsAiTVrMJSwtXoRYk6m5CrnoHakBCy9tb1+eCAJYXQFYcpeBpmyvIaXLl9nWoCxRY7USjakNNYC+YvzIDuc/4dCkvQC+SQRDDjLHyzQ1YulnT6AMPUvJ9U9W8qbG0cIVyLICd3oGP9yg9FllgWBQhfHPrGvyBDFAnOB9QVDerYZYdBa/v//txzxRFHFHAeE3gqkOr3y2a8LkIXJgBHHZpjf+ZjHE4zOCgPzCkWejmZptwjcJlkVy+2ahj2huPCzfAZcPFmfqSgnJM1akjEyyDl8eZKY9R3S/XxYxgq0BcEW5S7CdJAillkK1Wk9LfBtQP1Wnyaym1vCYCharvU1GEl7Ma7VzHawSmbf4voo9ngkHO5zmYKuD+gFLpBFppAtevzpIm1NNDLo6Q4bFD/ao0G2Tie/2hIY7FBUtV2WMMXQAQ59ZGdG72DrIM9uk5VymfuD4/U7k4Uqb5tklu+JZdsCoc0Np972BgEhqGp2ZGnK9Z0pYojlnruu+KYzbmwNQX2Qi8Z1AV6NFblAipLagIXw6OzIih/wE08S05OsJl4oF0CBF3hb/kAgsnU1xiryxHoA1U1d2l5bBOt+EcYDIfqY7PnbMcCoKFwokQiImj1QR/E4TiRxw68XGLBHJ58ZpJms6FZLhqntDdybfPMxN8oJFhZQ8DJ6o4fGC8wI7uiMsL0mO9wrYJh+ZsbiaF5aVrcA50lhebq0nxQ/o3OCM+7R+Z7Sxf68eYEB+6un5BEMN/KMrgLjQA/LogtJPXimMW2J3ePpwdapP/NgZQCL/CGcCd2CfBc6RD52Wsg/90+o+22IGiQWRA2Q5DO8S4HW+f9b6ccQ9R61eGuzt/v5PtTrMvkJHKf+j1KbnJR76Trlt2+5ADxDfELm4foiAWUPGXu065E6yu3JpWD4z7m/vdFarOvIAp8IWSlTJ5ubJDOWLRiAoix4QMiPb+uqsYRUKJZv/hw6fpQoHfLXTH3gCDZvN58Qbm6chI8Pb7A9E54faicz62hSHksZYGisiKYx20AeT9GDxp91N/4v1D5thoDDdHDMB7ZZN6wWcSvhDnqiRiceeCYUY9IzSC2GNkO0CbRsfaEoxVeMvHzweTdJ2f9Wr5ZnhRIsotJ/WCI8rKgluHTuiSGIJ0fwA/hYWRBHtfaSYoe8aIYWwVyf8OGeDTRAboqEYWvSoTGYC9gNZoJ75kyCkpT3swMjWVRhMwkPaqH8JFgyRdGn1JHDAysvQqdy8bg1/BOeifvInKsS9HnzH+HaGP2QYc8yosl7Z6e0dBub1Lxilswd0Lgu28+z7ODqPZQoX2fooUzcrP9L9EJ99Sdri4cOw2uld+ifHLKzV8cFwo+Jqei2uAUigIFy2Ntu+7VHvhQeZTlM6li8ciWvpN+9zjPMBwSYb3x3031gDsJseFQpbrMDI+uMPIiEjwZEGQiRTeHetYOO0DI4OiJ47ecACxNhwMxm+j08p0xPVPNACD36ujh47MCrwqQ+nmiOIFJxGbGF9zgnCspwBEGhEbNNYKWVqXupCPK29qfLZyu3Xs+44nVhhWltJHNDyv5LU81979tIhjT1QYZkTVheuGOAef8WFkpOAZfrbQ4TdCeIQHcRElAvV9+Xb6FE7AqSWW5aXWOr94HIgJMsL9QMZnOUalwcp/AAVRHYeIMKaMN0ccxeyhZfiYlmqL+w6nYKIak3nr2nqCUuXEZ1QAy8SdBggB9+cyrgFGjRZ7js01QE6T9n7EsB6gvq4snv6m+MQGYBhrUjy5slyIbaH2ZRfHkpKD2xEKAgcy7ssaAuWwwPEeZq+ljQafv5hk5Kc2gDFCEU+P6cd6UrACwujpaPTi6UpOkXJ0y5oB4hlBM2IPA/CG7vUPDx8b3ZoCZ6opbbzptqmWuEF1hLbvlPheimGY2kT8ltrJ8Bj3DO/yEApozqOKE7V51Mgf/Pin1Q5MiXMV1Tb+3V03r9fpopwWOjSedPH9aCk8IiMzQXtzrB/CMMh7GvrZ3/68eubX+s9dD9943W3rNH9E+zo/UYcWfDdjftHQjxCKjGaPg9XC/U7jiDjV9F/QtsHzH++vTrSEPw6VbQgYQzTyNZKVJygKrNLNFcRx7tuExuLYfUTte6TwLwbzRPze+Yg71LLn9K/Xv6/RPLxOEvtX6n/bXXejHesmlsPfK7896aDC3ygJ+vXvf1ndhIpR17agxz9fb7cTbNzVCu8mKrlDK6M2UeZQaZdcvgPmn8+rTg75W9om3BqksHkWYZsG/wejzRmB5sM5YAAAAABJRU5ErkJggg=="
//     },
//     aad4: function (e, t, o) {
//         "use strict";
//         o("8498")
//     },
//     ad58: function (e, t, o) {
//         "use strict";
//         o("bd51")
//     },
//     b5ce: function (e, t, o) {
//         "use strict";
//         o.r(t);
//         const n = {
//             isLogin: !0,
//             isSvip: !1,
//             isVip: !1,
//             optionAvatar: "",
//             nickname: ""
//         }
//             , a = {
//             isLogin: e => e.isLogin,
//             optionAvatar: e => e.optionAvatar,
//             nickname: e => e.nickname,
//             isSvip: e => e.isSvip,
//             isVip: e => e.isVip
//         }
//             , c = {
//             setOptionAvatar: ({commit: e}, t) => {
//                 e("SET_OPTIONAVATAR", t)
//             }
//             ,
//             setNickName: ({commit: e}, t) => {
//                 e("SET_NICKNAME", t)
//             }
//             ,
//             setLogin: ({commit: e}, t) => {
//                 e("SET_LOGIN", t)
//             }
//             ,
//             setSvip: ({commit: e}, t) => {
//                 e("SET_SVIP", t)
//             }
//             ,
//             setVip: ({commit: e}, t) => {
//                 e("SET_VIP", t)
//             }
//         }
//             , i = {
//             SET_OPTIONAVATAR(e, t) {
//                 e.optionAvatar = t
//             },
//             SET_NICKNAME(e, t) {
//                 e.nickname = t
//             },
//             SET_LOGIN(e, t) {
//                 e.isLogin = t
//             },
//             SET_SVIP(e, t) {
//                 e.isSvip = t
//             },
//             SET_VIP(e, t) {
//                 e.isVip = t
//             }
//         };
//         t["default"] = {
//             namespaced: !0,
//             state: n,
//             getters: a,
//             mutations: i,
//             actions: c
//         }
//     },
//     b73a: function (e, t, o) {
//     },
//     bd51: function (e, t, o) {
//     },
//     c083: function (e, t, o) {
//         "use strict";
//         o.r(t);
//         var n = o("5724");
//         const a = "UPDATE_LANGUAGE_MAP";
//         var c = {
//             UPDATE_LANGUAGE_MAP: a
//         };
//         const i = {
//             languageMap: {},
//             rtlLanguageList: ["ar"]
//         }
//             , r = {
//             [c.UPDATE_LANGUAGE_MAP](e, t) {
//                 e.languageMap = t
//             }
//         }
//             , s = {
//             async fetchLanguageData({commit: e, state: t}, o) {
//                 const a = await Object(n["a"])("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType");
//                 a.data.value && e(c.UPDATE_LANGUAGE_MAP, a.data.value)
//             }
//         }
//             , l = {
//             termSpecifyData(e) {
//                 return e.languageMap.term ? e.languageMap.term.specify : []
//             },
//             isTermLanguageSupport(e, t, o) {
//                 const n = `${o.transInfo.lanFrom}2 ${o.transInfo.lanTo}`;
//                 return !!t.termSpecifyData.find(e => e.code === n)
//             }
//         };
//         t["default"] = {
//             state: i,
//             mutations: r,
//             actions: s,
//             getters: l
//         }
//     },
//     c0ee: function (e, t, o) {
//         "use strict";
//         var n = o("7a23");
//         const a = {
//             class: "inner-content"
//         }
//             , c = {
//             class: "title color_text_1"
//         }
//             , i = {
//             class: "btn-ara"
//         };
//
//         function r(e, t, o, r, s, l) {
//             const d = Object(n["resolveDirective"])("fixed");
//             return Object(n["openBlock"])(),
//                 Object(n["createBlock"])(n["Teleport"], {
//                     to: "body"
//                 }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
//                     Object(n["createElementBlock"])("div", {
//                         key: 0,
//                         class: "pop-up-comp mask",
//                         onClick: t[2] || (t[2] = Object(n["withModifiers"])((...e) => r.close && r.close(...e), ["self"]))
//                     }, [Object(n["createElementVNode"])("div", a, [Object(n["createElementVNode"])("div", c, Object(n["toDisplayString"])(o.text), 1), Object(n["createElementVNode"])("div", i, [Object(n["createElementVNode"])("div", {
//                         class: "cancel btn color_text_1",
//                         onClick: t[0] || (t[0] = (...e) => r.closePop && r.closePop(...e))
//                     }, "取消"), Object(n["createElementVNode"])("div", {
//                         class: "confirm btn color_text_white",
//                         onClick: t[1] || (t[1] = (...e) => r.confirm && r.confirm(...e))
//                     }, "确认")])])])), [[d]]) : Object(n["createCommentVNode"])("", !0)])
//         }
//
//         var s = {
//             name: "PopUp",
//             props: {
//                 text: String,
//                 visible: Boolean,
//                 modalClosable: {
//                     type: Boolean,
//                     default: !0
//                 }
//             },
//             setup(e, t) {
//                 const o = () => {
//                         e.modalClosable && t.emit("update:visible", !1)
//                     }
//                     , n = () => {
//                         t.emit("closePop")
//                     }
//                     , a = () => {
//                         t.emit("confirm")
//                     }
//                 ;
//                 return {
//                     close: o,
//                     confirm: a,
//                     closePop: n
//                 }
//             },
//             directives: {
//                 fixed: {
//                     mounted() {
//                         document.body.style.cssText += "overflow: hidden"
//                     },
//                     unmounted() {
//                         document.body.style.cssText -= "overflow: hidden;"
//                     }
//                 }
//             }
//         }
//             , l = (o("99fe"),
//             o("6b0d"))
//             , d = o.n(l);
//         const u = d()(s, [["render", r], ["__scopeId", "data-v-170d148e"]]);
//         t["a"] = u
//     },
//     c23f: function (e, t, o) {
//         "use strict";
//         o("e925")
//     },
//     c34f: function (e, t, o) {
//         "use strict";
//         o.d(t, "b", (function () {
//                 return c
//             }
//         )),
//             o.d(t, "a", (function () {
//                     return i
//                 }
//             ));
//         var n = o("8544");
//
//         function a() {
//             const e = n["a"].get("allowStroke")
//                 , t = null !== e && e;
//             return t
//         }
//
//         function c(e) {
//             window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
//         }
//
//         function i() {
//             const e = document.createElement("script");
//             e.type = "text/javascript",
//                 e.src = "https://shared.ydstatic.com/api/fanyi-web-v1.3/assets/index.min.js",
//                 document.body.appendChild(e),
//                 e.onload = e.onreadystatechange = function () {
//                     if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
//                         const e = a();
//                         c(e)
//                     }
//                     e.onload = e.onreadystatechange = null
//                 }
//         }
//     },
//     c564: function (e, t, o) {
//     },
//     c653: function (e, t, o) {
//         var n = {
//             "./domain.js": "d2a7",
//             "./language.js": "c083",
//             "./login.js": "b5ce",
//             "./text.js": "1a68"
//         };
//
//         function a(e) {
//             var t = c(e);
//             return o(t)
//         }
//
//         function c(e) {
//             if (!o.o(n, e)) {
//                 var t = new Error("Cannot find module '" + e + "'");
//                 throw t.code = "MODULE_NOT_FOUND",
//                     t
//             }
//             return n[e]
//         }
//
//         a.keys = function () {
//             return Object.keys(n)
//         }
//             ,
//             a.resolve = c,
//             e.exports = a,
//             a.id = "c653"
//     },
//     c866: function (e, t) {
//         e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII="
//     },
//     cc83: function (e, t, o) {
//         "use strict";
//         o("49f5")
//     },
//     cf6d: function (e, t, o) {
//         "use strict";
//         o("d2b1")
//     },
//     d007: function (e, t, o) {
//     },
//     d2a7: function (e, t, o) {
//         "use strict";
//         o.r(t);
//         o("14d9");
//         var n = o("bc3a")
//             , a = o("48e8")
//             , c = o("8544");
//         const i = "DOMAIN"
//             , r = "DOMAIN_MAP"
//             , s = "TEXTDOMAIN_MAP"
//             , l = {
//             domainMap: a["a"],
//             allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
//             isAllowAigc: !1,
//             textTransDomainMap: a["a"],
//             aigcDomainMap: []
//         }
//             , d = {
//             [r](e, t) {
//                 e.domainMap = t
//             },
//             [s](e, t) {
//                 e.textTransDomainMap = JSON.parse(JSON.stringify(t))
//             },
//             SET_ISALLOWAIGC(e, t) {
//                 e.isAllowAigc = t
//             },
//             SET_AIGCDOMAINMAP(e, t) {
//                 e.aigcDomainMap = t
//             }
//         }
//             , u = {
//             initDictDomainFromLS({commit: e, state: t}, o) {
//                 var n = c["a"].get("" + o);
//                 e(i, null !== n ? n : "0")
//             },
//             async fetchDomainData({commit: e, state: t}, o) {
//                 var a = await n["a"].get("https://doctrans-service.youdao.com/common/enums/list?key=domain");
//                 a.data.data && (e(r, a.data.data),
//                     e(s, a.data.data))
//             },
//             updateDomainMap({commit: e, state: t}) {
//                 if (0 !== t.aigcDomainMap.length) {
//                     const e = t.textTransDomainMap.length;
//                     t.aigcDomainMap.forEach((o, n) => {
//                             t.textTransDomainMap.push({
//                                 str: String(e + n),
//                                 msg: o,
//                                 from: "aigc"
//                             })
//                         }
//                     )
//                 }
//             }
//         }
//             , m = {
//             getDomainLabelByValue: e => t => {
//                 let o = "";
//                 for (var n = 0; n < e.domainMap.length; n += 1)
//                     if (t === e.domainMap[n].str) {
//                         o = e.domainMap[n].msg;
//                         break
//                     }
//                 return o
//             }
//             ,
//             getTextDomainLabelByValue: e => t => {
//                 let o = "";
//                 for (var n = 0; n < e.textTransDomainMap.length; n += 1)
//                     if (t === e.textTransDomainMap[n].str) {
//                         o = e.textTransDomainMap[n].msg;
//                         break
//                     }
//                 return o
//             }
//         };
//         t["default"] = {
//             state: l,
//             mutations: d,
//             actions: u,
//             getters: m
//         }
//     },
//     d2b1: function (e, t, o) {
//     },
//     d706: function (e, t, o) {
//         "use strict";
//         var n = o("7a23");
//         const a = {
//             class: "inner-content"
//         };
//
//         function c(e, t, o, c, i, r) {
//             const s = Object(n["resolveDirective"])("fixed");
//             return Object(n["openBlock"])(),
//                 Object(n["createBlock"])(n["Teleport"], {
//                     to: "body"
//                 }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
//                     Object(n["createElementBlock"])("div", {
//                         key: 0,
//                         class: "pop-up-comp mask",
//                         onClick: t[0] || (t[0] = Object(n["withModifiers"])((...e) => c.close && c.close(...e), ["self"]))
//                     }, [Object(n["createElementVNode"])("div", a, [Object(n["renderSlot"])(e.$slots, "content", {}, void 0, !0)])])), [[s]]) : Object(n["createCommentVNode"])("", !0)])
//         }
//
//         var i = {
//             name: "PopUp",
//             props: {
//                 visible: Boolean,
//                 modalClosable: {
//                     type: Boolean,
//                     default: !0
//                 }
//             },
//             setup(e, t) {
//                 function o() {
//                     e.modalClosable && t.emit("update:visible", !1)
//                 }
//
//                 return {
//                     close: o
//                 }
//             },
//             directives: {
//                 fixed: {
//                     mounted() {
//                         const e = document.body.scrollTop || document.documentElement.scrollTop;
//                         document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
//                     },
//                     unmounted() {
//                         const {body: e} = document;
//                         e.style.position = "static";
//                         const {top: t} = e.style;
//                         document.body.scrollTop = -parseInt(t, 10),
//                             document.documentElement.scrollTop = -parseInt(t, 10),
//                             e.style.top = ""
//                     }
//                 }
//             }
//         }
//             , r = (o("594a"),
//             o("6b0d"))
//             , s = o.n(r);
//         const l = s()(i, [["render", c], ["__scopeId", "data-v-909b0550"]]);
//         t["a"] = l
//     },
//     d94e: function (e, t, o) {
//         "use strict";
//         o("dfd9")
//     },
//     df52: function (e, t, o) {
//         "use strict";
//         var n = o("5724");
//         const a = "https://dict.youdao.com"
//             , c = "https://dict.youdao.com/vip"
//             , i = ["option_avatar", "nickname"]
//             , r = e => Object(n["b"])(c + "/user/status", e)
//             , s = () => Object(n["a"])(a + "/login/acc/query/accountinfo")
//             , l = e => Object(n["a"])(`${a}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(i))}`, e);
//         t["a"] = {
//             getAccountInfos: s,
//             getBatchUrl: l,
//             getVipStatus: r
//         }
//     },
//     dfd9: function (e, t, o) {
//     },
//     e550: function (e, t, o) {
//         "use strict";
//         var n = o("1344");
//         const a = {}
//             , c = Object(n["a"])();
//         a.$on = c.on,
//             a.$off = c.off,
//             a.$emit = c.emit,
//             t["a"] = a
//     },
//     e79d: function (e, t, o) {
//         "use strict";
//         o("14c6")
//     },
//     e925: function (e, t, o) {
//     },
//     fe14: function (e, t, o) {
//         "use strict";
//         o("c564")
//     },
//     ffd2: function (e, t, o) {
//         "use strict";
//         o("4637")
//     }
// });
//</editor-fold>

var decodeKey = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl";
let sign = cypt.MD5(decodeKey);
console.log(sign);

var decodeIv = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4";
var response = "Z21kD9ZK1ke6ugku2ccWuz4Ip5f4PLCoxWstZf_6UUyBoy8dpWc3NOXFRrnPMya7obXzv_0taL0Gb95sNor2boYlviirk2UnsMzl5XcsVS4NZbdRGl27LwTReKxlzFfrpZo1ex71MeAw6njWfMRgff0xD_-KLo_CqaWLab_IchF6mlq1k0Gv3sHlsEjoiRAf3qwzWkxL1Eh2UC4TzQ3AXzYdcdvZe6Y2PMv2iS5ap6tZRo7LXisDrkBbJaJ0GRmiTIVy2a5feqn3MD4RMeKzBAJm7XHXcfb2nGx0pFianSQR_r4N2GaNN-swcCGd7g0Mvg4V4cdu6unLhRnLV1AW02rcjE5y4jNK-GXwVfSLtIE=";
var nn = function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? i(Object(n), !0).forEach((function (e) {
                r(t, e, n[e])
            }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
        ))
    }
    return t
}

var an = (wp("14d9"),
    wp("8139"));
form.data = {
    "from": "auto",
    "keyfrom": "deskdict.main",
    "keyword": "hello",
    "to": ""
}

y = (e, t) => Object(a["d"])("https://dict.youdao.com/webtranslate", Object(n["a"])(Object(n["a"])({}, e), O(t)), {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

function p(t, e, n) {
    var a = cypt.AES('aes-128-cbc'); //o[t.toLowerCase()];
    if (!a)
        throw new TypeError("invalid suite type");
    if ("string" === typeof n && (n = i.from(n)),
    "GCM" !== a.mode && n.length !== a.iv)
        throw new TypeError("invalid iv length " + n.length);
    if ("string" === typeof e && (e = i.from(e)),
    e.length !== a.key / 8)
        throw new TypeError("invalid key length " + e.length);
    return "stream" === a.type ? new s(a.module, e, n, !0) : "auth" === a.type ? new r(a.module, e, n, !0) : new c(a.module, e, n)
}

//<editor-fold desc="算法">
var _a = 1732584193;
var _b = 4023233417;
var _c = 2562383102;
var _d = 271733878;
function u(t, e) {
            return t << e | t >>> 32 - e
        }
        function h(t, e, n, r, i, o, s) {
            return u(t + (e & n | ~e & r) + i + o | 0, s) + e | 0
        }
        function f(t, e, n, r, i, o, s) {
            return u(t + (e & r | n & ~r) + i + o | 0, s) + e | 0
        }
        function c(t, e, n, r, i, o, s) {
            return u(t + (e ^ n ^ r) + i + o | 0, s) + e | 0
        }
        function l(t, e, n, r, i, o, s) {
            return u(t + (n ^ (e | ~r)) + i + o | 0, s) + e | 0
        }
        a.prototype._update = function() {
            for (var t = s, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(4 * e);
            var n = this._a
              , r = this._b
              , i = this._c
              , o = this._d;
            n = h(n, r, i, o, t[0], 3614090360, 7),
            o = h(o, n, r, i, t[1], 3905402710, 12),
            i = h(i, o, n, r, t[2], 606105819, 17),
            r = h(r, i, o, n, t[3], 3250441966, 22),
            n = h(n, r, i, o, t[4], 4118548399, 7),
            o = h(o, n, r, i, t[5], 1200080426, 12),
            i = h(i, o, n, r, t[6], 2821735955, 17),
            r = h(r, i, o, n, t[7], 4249261313, 22),
            n = h(n, r, i, o, t[8], 1770035416, 7),
            o = h(o, n, r, i, t[9], 2336552879, 12),
            i = h(i, o, n, r, t[10], 4294925233, 17),
            r = h(r, i, o, n, t[11], 2304563134, 22),
            n = h(n, r, i, o, t[12], 1804603682, 7),
            o = h(o, n, r, i, t[13], 4254626195, 12),
            i = h(i, o, n, r, t[14], 2792965006, 17),
            r = h(r, i, o, n, t[15], 1236535329, 22),
            n = f(n, r, i, o, t[1], 4129170786, 5),
            o = f(o, n, r, i, t[6], 3225465664, 9),
            i = f(i, o, n, r, t[11], 643717713, 14),
            r = f(r, i, o, n, t[0], 3921069994, 20),
            n = f(n, r, i, o, t[5], 3593408605, 5),
            o = f(o, n, r, i, t[10], 38016083, 9),
            i = f(i, o, n, r, t[15], 3634488961, 14),
            r = f(r, i, o, n, t[4], 3889429448, 20),
            n = f(n, r, i, o, t[9], 568446438, 5),
            o = f(o, n, r, i, t[14], 3275163606, 9),
            i = f(i, o, n, r, t[3], 4107603335, 14),
            r = f(r, i, o, n, t[8], 1163531501, 20),
            n = f(n, r, i, o, t[13], 2850285829, 5),
            o = f(o, n, r, i, t[2], 4243563512, 9),
            i = f(i, o, n, r, t[7], 1735328473, 14),
            r = f(r, i, o, n, t[12], 2368359562, 20),
            n = c(n, r, i, o, t[5], 4294588738, 4),
            o = c(o, n, r, i, t[8], 2272392833, 11),
            i = c(i, o, n, r, t[11], 1839030562, 16),
            r = c(r, i, o, n, t[14], 4259657740, 23),
            n = c(n, r, i, o, t[1], 2763975236, 4),
            o = c(o, n, r, i, t[4], 1272893353, 11),
            i = c(i, o, n, r, t[7], 4139469664, 16),
            r = c(r, i, o, n, t[10], 3200236656, 23),
            n = c(n, r, i, o, t[13], 681279174, 4),
            o = c(o, n, r, i, t[0], 3936430074, 11),
            i = c(i, o, n, r, t[3], 3572445317, 16),
            r = c(r, i, o, n, t[6], 76029189, 23),
            n = c(n, r, i, o, t[9], 3654602809, 4),
            o = c(o, n, r, i, t[12], 3873151461, 11),
            i = c(i, o, n, r, t[15], 530742520, 16),
            r = c(r, i, o, n, t[2], 3299628645, 23),
            n = l(n, r, i, o, t[0], 4096336452, 6),
            o = l(o, n, r, i, t[7], 1126891415, 10),
            i = l(i, o, n, r, t[14], 2878612391, 15),
            r = l(r, i, o, n, t[5], 4237533241, 21),
            n = l(n, r, i, o, t[12], 1700485571, 6),
            o = l(o, n, r, i, t[3], 2399980690, 10),
            i = l(i, o, n, r, t[10], 4293915773, 15),
            r = l(r, i, o, n, t[1], 2240044497, 21),
            n = l(n, r, i, o, t[8], 1873313359, 6),
            o = l(o, n, r, i, t[15], 4264355552, 10),
            i = l(i, o, n, r, t[6], 2734768916, 15),
            r = l(r, i, o, n, t[13], 1309151649, 21),
            n = l(n, r, i, o, t[4], 4149444226, 6),
            o = l(o, n, r, i, t[11], 3174756917, 10),
            i = l(i, o, n, r, t[2], 718787259, 15),
            r = l(r, i, o, n, t[9], 3951481745, 21),
            this._a = this._a + n | 0,
            this._b = this._b + r | 0,
            this._c = this._c + i | 0,
            this._d = this._d + o | 0
        }

        a.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = o.allocUnsafe(16);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
        }
//</editor-fold>

function g(e) {
     return i.a.createHash("md5").update(e).digest()
}

var decodeData = (t, o, n) => {
    if (!t)
        return null;
    const a = e.alloc(16, g(o))
        , c = e.alloc(16, g(n))
        , r = i.a.createDecipheriv("aes-128-cbc", a, c);
    let s = r.update(t, "base64", "utf-8");
    return s += r.final("utf-8"),
        s
}


an["a"].getTextTranslateResult(Object(nn["a"])(Object(nn["a"])({
    i: form.data.keyword,
    from: form.data.from,
    to: form.data.to
}, n), {}, {
    dictResult: !0,
    keyid: "webfanyi"
}), o).then(o => {
        an["a"].cancelLastGpt();
        const n = decodeData(response, decodeKey, decodeIv)
            , a = n ? JSON.parse(n) : {};
        0 === a.code ? e.success && t(e.success)(a) : e.fail && t(e.fail)(a)
    }
).catch(o => {
        e.fail && t(e.fail)({
            online: !1
        })
    }
)