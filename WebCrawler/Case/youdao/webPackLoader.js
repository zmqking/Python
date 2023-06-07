(function(e) {
    function t(t) {
        for (var n, a, i = t[0], s = t[1], l = t[2], d = 0, u = []; d < i.length; d++)
            a = i[d],
            Object.prototype.hasOwnProperty.call(c, a) && c[a] && u.push(c[a][0]),
            c[a] = 0;
        for (n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        m && m(t);
        while (u.length)
            u.shift()();
        return r.push.apply(r, l || []),
        o()
    }
    function o() {
        for (var e, t = 0; t < r.length; t++) {
            for (var o = r[t], n = !0, a = 1; a < o.length; a++) {
                var i = o[a];
                0 !== c[i] && (n = !1)
            }
            n && (r.splice(t--, 1),
            e = s(s.s = o[0]))
        }
        return e
    }
    var n = {}
      , a = {
        app: 0
    }
      , c = {
        app: 0
    }
      , r = [];
    function i(e) {
        return s.p + "js/" + ({
            "DocHistory~termBank": "DocHistory~termBank",
            DocHistory: "DocHistory",
            termBank: "termBank",
            NoLogin: "NoLogin",
            Person: "Person",
            "documentUpload~textTranslate": "documentUpload~textTranslate",
            documentUpload: "documentUpload",
            textTranslate: "textTranslate"
        }[e] || e) + "." + {
            "DocHistory~termBank": "24a245c4",
            DocHistory: "1a28bc19",
            termBank: "ade9173a",
            NoLogin: "7899f997",
            Person: "d51f0fab",
            "documentUpload~textTranslate": "66ed4898",
            documentUpload: "9bd6a76c",
            textTranslate: "6713c225"
        }[e] + ".js"
    }
    function s(t) {
        if (n[t])
            return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, s),
        o.l = !0,
        o.exports
    }
    s.e = function(e) {
        var t = []
          , o = {
            "DocHistory~termBank": 1,
            DocHistory: 1,
            termBank: 1,
            NoLogin: 1,
            Person: 1,
            "documentUpload~textTranslate": 1,
            documentUpload: 1,
            textTranslate: 1
        };
        a[e] ? t.push(a[e]) : 0 !== a[e] && o[e] && t.push(a[e] = new Promise((function(t, o) {
            for (var n = "css/" + ({
                "DocHistory~termBank": "DocHistory~termBank",
                DocHistory: "DocHistory",
                termBank: "termBank",
                NoLogin: "NoLogin",
                Person: "Person",
                "documentUpload~textTranslate": "documentUpload~textTranslate",
                documentUpload: "documentUpload",
                textTranslate: "textTranslate"
            }[e] || e) + "." + {
                "DocHistory~termBank": "fa29fc09",
                DocHistory: "4f1aad07",
                termBank: "c6a579d8",
                NoLogin: "602687cf",
                Person: "5b36ba5e",
                "documentUpload~textTranslate": "ea48e3fc",
                documentUpload: "5dc3c7f0",
                textTranslate: "8a064160"
            }[e] + ".css", c = s.p + n, r = document.getElementsByTagName("link"), i = 0; i < r.length; i++) {
                var l = r[i]
                  , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === n || d === c))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
                l = u[i],
                d = l.getAttribute("data-href");
                if (d === n || d === c)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
            m.type = "text/css",
            m.onload = t,
            m.onerror = function(t) {
                var n = t && t.target && t.target.src || c
                  , r = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = n,
                delete a[e],
                m.parentNode.removeChild(m),
                o(r)
            }
            ,
            m.href = c;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        }
        )).then((function() {
            a[e] = 0
        }
        )));
        var n = c[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function(t, o) {
                    n = c[e] = [t, o]
                }
                ));
                t.push(n[2] = r);
                var l, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                s.nc && d.setAttribute("nonce", s.nc),
                d.src = i(e);
                var u = new Error;
                l = function(t) {
                    d.onerror = d.onload = null,
                    clearTimeout(m);
                    var o = c[e];
                    if (0 !== o) {
                        if (o) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
                            u.name = "ChunkLoadError",
                            u.type = n,
                            u.request = a,
                            o[1](u)
                        }
                        c[e] = void 0
                    }
                }
                ;
                var m = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = l,
                document.head.appendChild(d)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = n,
    s.d = function(e, t, o) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (s.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                s.d(o, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return o
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , d = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var u = 0; u < l.length; u++)
        t(l[u]);
    var m = d;
    r.push([0, "chunk-vendors"]),
    o()
}
)({
    0: function(e, t, o) {
        e.exports = o("56d7")
    },
    "04b3": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII="
    },
    "0be0": function(e, t, o) {},
    1: function(e, t) {},
    10: function(e, t) {},
    11: function(e, t) {},
    12: function(e, t) {},
    13: function(e, t) {},
    14: function(e, t) {},
    "14c6": function(e, t, o) {},
    "1a68": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("8139")
          , a = o("8544")
          , c = o("c34f");
        const r = {
            secretKey: "",
            dictResult: {},
            decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
            decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
            allowStroke: !1,
            showPjm: !1,
            showRomanPronunciation: !1,
            showWordsNumber: !0
        }
          , i = {
            secretKey: e=>e.secretKey,
            dictResult: e=>e.dictResult
        }
          , s = {
            fetchTextTranslateSecretKey: ({commit: e},t)=>{
                const o = "webfanyi-key-getter"
                  , a = "asdjnjfenknafdfsdfsd";
                n["a"].getTextTranslateSecretKey({
                    keyid: o
                }, a).then(t=>{
                    0 === t.code && t.data.secretKey && e("UPDATE_SECRET_KEY", t.data.secretKey)
                }
                ).catch(e=>{}
                )
            }
            ,
            setDictResult: ({commit: e},t)=>{
                e("SET_DICTRESULT", t)
            }
            ,
            initTextTranslateSettingStore: ({commit: e},t)=>{
                const o = a["a"].get("allowStroke")
                  , n = a["a"].get("showPjm")
                  , c = a["a"].get("showRomanPronunciation")
                  , r = a["a"].get("showWordsNumber");
                e("SET_ALLOW_STROKE", null !== o && o),
                e("SET_SHOW_PJM", null !== n && n),
                e("SET_SHOW_ROMAN_PRONUNCICATION", null !== c && c),
                e("SET_SHOW_WORDS_NUMBER", null === r || r)
            }
        }
          , l = {
            UPDATE_SECRET_KEY(e, t) {
                e.secretKey = t
            },
            SET_DICTRESULT(e, t) {
                e.dictResult = t
            },
            SET_ALLOW_STROKE(e, t) {
                e.allowStroke = t,
                a["a"].set("allowStroke", t),
                Object(c["b"])(t)
            },
            SET_SHOW_PJM(e, t) {
                e.showPjm = t,
                a["a"].set("showPjm", t)
            },
            SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
                e.showRomanPronunciation = t,
                a["a"].set("showRomanPronunciation", t)
            },
            SET_SHOW_WORDS_NUMBER(e, t) {
                e.showWordsNumber = t,
                a["a"].set("showWordsNumber", t)
            }
        };
        t["default"] = {
            state: r,
            getters: i,
            mutations: l,
            actions: s
        }
    },
    "1dc7": function(e, t, o) {
        "use strict";
        o("b73a")
    },
    2: function(e, t) {},
    "2caa": function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            key: 0,
            class: "interfaceDialogMask"
        }
          , c = {
            class: "interfaceDialog-body"
        };
        function r(e, t, o, r, i, s) {
            return o.dialogVisible ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", a, [Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["interfaceDialog", {
                    "interfaceDialog-default-style": o.withDialogStyle
                }, {
                    isCenter: o.isCenter
                }]),
                style: Object(n["normalizeStyle"])({
                    width: s.pxStyle(o.width),
                    height: s.pxStyle(o.height),
                    top: s.pxStyle(o.top),
                    left: s.pxStyle(o.left)
                }),
                ref: "interfaceDialog"
            }, [Object(n["createElementVNode"])("div", c, [Object(n["renderSlot"])(e.$slots, "default", {}, void 0, !0)])], 6)])) : Object(n["createCommentVNode"])("", !0)
        }
        var i = {
            name: "InterfaceDialog",
            components: {},
            props: {
                dialogVisible: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                width: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                height: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                top: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                left: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                withDialogStyle: {
                    type: Boolean,
                    default: !0
                },
                isCenter: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    promiseStatus: {}
                }
            },
            methods: {
                pxStyle(e) {
                    return this.isString(e) ? e : e + "px"
                },
                isString(e) {
                    return "string" === typeof e
                },
                isNumber(e) {
                    return "number" === typeof e
                },
                closeinterfaceDialog() {
                    this.$emit("closeDialog")
                },
                modalClickEventHandler(e) {
                    this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
                }
            },
            watch: {
                dialogVisible: {
                    handler: function(e) {
                        e ? this.$nextTick(()=>{
                            setTimeout(()=>{
                                document.body.addEventListener("click", this.modalClickEventHandler, !0)
                            }
                            , 10)
                        }
                        ) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                    }
                }
            }
        }
          , s = (o("fe14"),
        o("6b0d"))
          , l = o.n(s);
        const d = l()(i, [["render", r], ["__scopeId", "data-v-3395756a"]]);
        t["a"] = d
    },
    3: function(e, t) {},
    3102: function(e, t, o) {},
    4: function(e, t) {},
    4260: function(e, t, o) {
        "use strict";
        o.d(t, "b", (function() {
            return c
        }
        ));
        const n = (e,t)=>{
            const o = new Date
              , n = new Date(e)
              , a = new Date(t);
            return o >= n && o <= a
        }
          , a = (e,t)=>{
            let o;
            return function(...n) {
                const a = this;
                clearTimeout(o),
                o = setTimeout(()=>{
                    e.apply(a, n)
                }
                , t)
            }
        }
          , c = (e,t)=>{
            let o, n = 0;
            return function() {
                const a = this
                  , c = arguments
                  , r = +Date.now();
                r - n >= t ? (clearTimeout(o),
                e.apply(a, c),
                n = r) : (clearTimeout(o),
                o = setTimeout(()=>{
                    e.apply(a, c)
                }
                , t))
            }
        }
          , r = (e,t)=>{
            const o = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "H+": t.getHours(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, ("" + t.getFullYear()).substr(4 - RegExp.$1.length)));
            for (const n in o)
                new RegExp(`(${n})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
            return e
        }
          , i = ()=>/macintosh|mac os x/i.test(navigator.userAgent)
          , s = (e,t="")=>{
            const o = document.createElement("a");
            o.download = t,
            o.style.display = "none",
            o.href = e,
            document.body.appendChild(o),
            o.click(),
            document.body.removeChild(o)
        }
          , l = e=>{
            var t = e.split("?")[1]
              , o = {};
            if (!t)
                return o;
            t = t.split("&");
            for (var n = 0, a = t.length; n < a; n++) {
                var c = t[n].split("=");
                o[c[0]] = decodeURIComponent(c[1])
            }
            return o
        }
        ;
        t["a"] = {
            isDuringDate: n,
            debounce: a,
            throttle: c,
            dateFormat: r,
            isMac: i,
            downloadFile: s,
            getUrlParams: l
        }
    },
    "429e": function(e, t, o) {},
    4360: function(e, t, o) {
        "use strict";
        o("13d5"),
        o("14d9");
        var n = o("5502");
        const a = []
          , c = o("c653")
          , r = c.keys().reduce((e,t)=>{
            const o = t.replace(/^\.\/(.*)\.\w+$/, "$1");
            a.push(o);
            const n = c(t);
            return e[o] = n.default,
            e
        }
        , {});
        t["a"] = Object(n["a"])({
            modules: r
        })
    },
    "44ae": function(e, t, o) {
        "use strict";
        o("918c")
    },
    4637: function(e, t, o) {},
    "48e8": function(e, t, o) {
        "use strict";
        t["a"] = [{
            str: "0",
            msg: "通用场景"
        }, {
            str: "2",
            msg: "医学"
        }, {
            str: "1",
            msg: "计算机"
        }, {
            str: "3",
            msg: "金融经济"
        }]
    },
    "49f5": function(e, t, o) {},
    "4c5a": function(e, t, o) {
        "use strict";
        o("429e")
    },
    "4ee2": function(e, t, o) {},
    "4ffd": function(e, t, o) {
        e.exports = o.p + "img/logo.6ed1c44b.png"
    },
    5: function(e, t) {},
    "56d7": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("2b27")
          , a = o.n(n)
          , c = o("7a23")
          , r = o("8393");
        function i(e, t, o, n, a, r) {
            return Object(c["openBlock"])(),
            Object(c["createBlock"])(c["Transition"], {
                name: "blankTooltip"
            }, {
                default: Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.text), 1)]),
                _: 1
            })
        }
        var s = {
            setup() {
                const e = Object(c["ref"])();
                return {
                    text: e
                }
            }
        }
          , l = (o("cc83"),
        o("6b0d"))
          , d = o.n(l);
        const u = d()(s, [["render", i], ["__scopeId", "data-v-13c25996"]]);
        var m = u;
        const p = {
            beforeMount: function(e, t) {
                var o, n = "yd-tooltip", a = "", r = null, i = "bottom", s = "blank", l = !1;
                const d = ()=>{
                    if (t.value && "function" === typeof t.value) {
                        var d = t.value();
                        const {component: e, data: n} = d;
                        o = Object(c["createApp"])(e, n),
                        l = !0,
                        s = "custom"
                    } else
                        !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (a = e.dataset.tooltip) : a = t.value;
                    if (e.dataset["tooltipStyle"] && (s = e.dataset["tooltipStyle"]),
                    (l || "" != a.trim()) && (!l || o)) {
                        Object.keys(t.modifiers)[0] && (i = Object.keys(t.modifiers)[0]),
                        r = document.createElement("div");
                        var u = [n, s];
                        if (r.setAttribute("class", u.join(" ")),
                        r.style.zIndex = 10,
                        l) {
                            var p = document.body.appendChild(r);
                            o.mount(p)
                        } else {
                            p = document.body.appendChild(r);
                            var b = Object(c["createApp"])(m)
                              , f = b.mount(p);
                            f.text = a
                        }
                        var v = e.getBoundingClientRect();
                        Object(c["nextTick"])(()=>{
                            var e = 0
                              , t = 0
                              , o = 8
                              , n = 8;
                            switch (i) {
                            case "top":
                                e = v.left - r.offsetWidth / 2 + v.width / 2,
                                t = v.top - r.offsetHeight - o;
                                break;
                            case "left":
                                e = v.left - r.offsetWidth - n,
                                t = v.top + v.height / 2 - r.offsetHeight / 2;
                                break;
                            case "right":
                                e = v.left + v.width + n,
                                t = v.top + v.height / 2 - r.offsetHeight / 2;
                                break;
                            case "bottom":
                                e = v.left - r.offsetWidth / 2 + v.width / 2,
                                t = v.top + v.height + o;
                                break;
                            case "left-bottom":
                                e = v.left - r.offsetWidth - n,
                                t = v.bottom - r.offsetHeight;
                                break;
                            case "left-top":
                                e = v.left - r.offsetWidth - n,
                                t = v.top;
                                break;
                            case "right-top":
                                e = v.left + v.width + n,
                                t = v.top;
                                break;
                            case "right-bottom":
                                e = v.left + v.width + n,
                                t = v.bottom - r.offsetHeight;
                                break;
                            case "top-left":
                                e = v.left,
                                t = v.top - r.offsetHeight - o;
                                break;
                            case "top-right":
                                e = v.left + v.width - r.offsetWidth,
                                t = v.top - r.offsetHeight - o;
                                break;
                            case "bottom-left":
                                e = v.left,
                                t = v.bottom + o;
                                break;
                            case "bottom-right":
                                e = v.left + v.width - r.offsetWidth,
                                t = v.bottom + o;
                                break
                            }
                            var a = 20;
                            e < 0 && (e = 0 + a),
                            e + r.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - r.offsetWidth - a),
                            t < 0 && (t = 0 + a),
                            t + r.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - r.offsetHeight - a),
                            r.style.left = e + "px",
                            r.style.top = t + "px",
                            r.style.visibility = "visible"
                        }
                        )
                    }
                }
                  , u = ()=>{
                    r && r.parentNode.removeChild(r),
                    o = null,
                    a = "",
                    l = !1,
                    r = null
                }
                ;
                e.addEventListener("mouseenter", d),
                e.addEventListener("mouseleave", u)
            },
            updated(e, {value: t}) {
                e.$value = t
            },
            unmounted(e) {
                e.removeEventListener("mouseenter", e.mouseenterHandler),
                e.removeEventListener("mouseleave", e.mouseleaveHandler)
            }
        };
        var b = p;
        const f = {
            tooltip: b
        };
        var v = {
            install(e) {
                Object.keys(f).forEach(t=>{
                    e.directive(t, f[t])
                }
                )
            }
        }
          , g = v
          , h = o("0c0e")
          , O = o.n(h);
        const j = {
            class: "sticky-sidebar"
        };
        function y(e, t, o, n, a, r) {
            const i = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createVNode"])(i, {
                class: Object(c["normalizeClass"])(["os_" + n.currentOS])
            }, null, 8, ["class"]), Object(c["createElementVNode"])("div", j, [Object(c["createElementVNode"])("div", {
                class: "feed",
                onClick: n.goFeed
            }), Object(c["createVNode"])(n["BackToTop"])])], 64)
        }
        function w(e, t, o, n, a, r) {
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                class: "backToTopButton",
                style: Object(c["normalizeStyle"])({
                    visibility: n.showButton ? "visible" : "hidden"
                }),
                onClick: n.scrollToTop
            }, null, 4)
        }
        var A = {
            __name: "BackToTop",
            setup(e, {expose: t}) {
                t();
                const o = Object(c["ref"])(!1)
                  , n = window.innerHeight || document.body.clientHeight
                  , a = ()=>{
                    const e = document.documentElement.scrollTop || document.body.scrollTop;
                    o.value = e >= n
                }
                ;
                window.addEventListener("scroll", a),
                Object(c["onBeforeUnmount"])(()=>{
                    window.removeEventListener("scroll", a)
                }
                );
                const r = ()=>{
                    document.documentElement.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
                  , i = {
                    showButton: o,
                    winHeight: n,
                    srollListener: a,
                    scrollToTop: r
                };
                return Object.defineProperty(i, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                i
            }
        };
        o("4c5a");
        const k = d()(A, [["render", w], ["__scopeId", "data-v-d0d8f510"]]);
        var E = k
          , _ = o("df52")
          , C = o("5502")
          , T = {
            __name: "App",
            setup(e, {expose: t}) {
                t();
                const o = Object(C["b"])()
                  , n = Object(c["getCurrentInstance"])()
                  , a = n.appContext.config.globalProperties
                  , r = Object(c["ref"])("")
                  , i = Object(c["ref"])("")
                  , s = Object(c["ref"])("")
                  , l = Object(c["ref"])("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
                  , d = Object(c["ref"])("")
                  , u = ()=>{
                    window.open("https://shared.youdao.com/dict/market/common-feedback/#/")
                }
                  , m = e=>{
                    const t = {
                        userid: e
                    };
                    _["a"].getBatchUrl(t).then(e=>{
                        i.value = e.values.nickname,
                        o.dispatch("login/setNickName", i.value)
                    }
                    )
                }
                  , p = ()=>{
                    _["a"].getVipStatus().then(e=>{
                        o.dispatch("login/setSvip", e.svip),
                        o.dispatch("login/setVip", e.vip)
                    }
                    )
                }
                  , b = ()=>{
                    _["a"].getAccountInfos().then(e=>{
                        const t = e.data;
                        0 === e.code ? (o.dispatch("login/setLogin", !0),
                        r.value = t.yduserid,
                        s.value = l.value,
                        o.dispatch("login/setOptionAvatar", s.value),
                        m(r.value),
                        p()) : o.dispatch("login/setLogin", !1)
                    }
                    )
                }
                ;
                b();
                const f = ()=>{
                    const e = navigator.userAgent.toLowerCase()
                      , t = /macintosh|mac os x/i.test(e);
                    d.value = t ? "Mac" : "Windows"
                }
                ;
                f();
                const v = {
                    store: o,
                    internalInstance: n,
                    internalData: a,
                    yduserid: r,
                    nickname: i,
                    optionAvatar: s,
                    avatar: l,
                    currentOS: d,
                    goFeed: u,
                    getBatchData: m,
                    getVipInfo: p,
                    getAccountInfo: b,
                    getOS: f,
                    BackToTop: E,
                    service: _["a"],
                    useStore: C["b"],
                    ref: c["ref"],
                    getCurrentInstance: c["getCurrentInstance"]
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        };
        o("6fda");
        const S = d()(T, [["render", y]]);
        var N = S
          , x = o("6605");
        o("14d9");
        const B = {
            id: "inner-box",
            class: "inner-box"
        }
          , D = Object(c["createStaticVNode"])('<div class="click-area" data-v-d59db9e0><a href="https://fanyi.youdao.com/trans/#/home" target="_blank" data-v-d59db9e0><p class="text" data-v-d59db9e0>输入arXiv论文检索地址，一键翻译全文</p><p class="text" data-v-d59db9e0>点击试试 👉 <span style="font-size:14px;" data-v-d59db9e0>https://arxiv.org/abs/2203.01927</span></p></a><span class="icon" data-v-d59db9e0></span></div>', 1)
          , I = {
            class: "never-show"
        };
        var V = {
            __name: "ArxivPopUp",
            setup(e) {
                const t = Object(x["e"])()
                  , o = Object(c["getCurrentInstance"])()
                  , n = o.appContext.config.globalProperties
                  , a = Object(c["ref"])(!1)
                  , r = "fanyiweb-showArxivTip"
                  , i = "arxivShowTip"
                  , s = Object(c["computed"])(()=>"TextTranslate" === t.currentRoute.value.name)
                  , l = ()=>{
                    a.value && (a.value = !1)
                }
                  , d = ()=>{
                    a.value = !1,
                    window.localStorage.setItem(r, !0)
                }
                  , u = ()=>{
                    const e = document.getElementById("js_fanyi_input_outside_container")
                      , {top: t, left: o} = e.getBoundingClientRect()
                      , n = document.getElementById("inner-box");
                    n.offsetHeight,
                    n.offsetWidth;
                    n.style.top = t - 70 + "px",
                    n.style.left = o + "px"
                }
                  , m = {
                    mounted() {
                        document.body.style.cssText += "overflow: hidden"
                    },
                    unmounted() {
                        document.body.style.cssText -= "overflow: hidden;"
                    }
                };
                return Object(c["onMounted"])(()=>{
                    const e = localStorage.getItem(r);
                    null !== n.$cookies.get(i) || e ? a.value = !1 : (a.value = !0,
                    window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                    n.$cookies.set(i, !0, 86400),
                    Object(c["nextTick"])(()=>{
                        u()
                    }
                    ))
                }
                ),
                (e,t)=>a.value && Object(c["unref"])(s) ? Object(c["withDirectives"])((Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", {
                    key: 0,
                    class: "arxiv-pop-up",
                    onClick: l
                }, [Object(c["createElementVNode"])("div", B, [Object(c["createElementVNode"])("div", {
                    onClick: t[1] || (t[1] = Object(c["withModifiers"])(()=>{}
                    , ["stop"])),
                    class: "inner-content"
                }, [D, Object(c["createElementVNode"])("div", I, [Object(c["createElementVNode"])("span", {
                    onClick: t[0] || (t[0] = e=>d())
                }, " 不再展示 ")])])])])), [[m]]) : Object(c["createCommentVNode"])("", !0)
            }
        };
        o("cf6d");
        const P = d()(V, [["__scopeId", "data-v-d59db9e0"]]);
        var L = P
          , H = o("04b3")
          , U = o.n(H);
        const M = ["src"];
        function R(e, t, o, n, a, r) {
            return Object(c["openBlock"])(),
            Object(c["createBlock"])(n["Overlay"], {
                visible: n.showAd,
                modalClosable: !0
            }, {
                content: Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("img", {
                    class: "ad",
                    src: n.picture,
                    onClick: n.goAd
                }, null, 8, M), Object(c["createElementVNode"])("img", {
                    class: "close",
                    src: U.a,
                    onClick: n.closeAd
                })]),
                _: 1
            }, 8, ["visible"])
        }
        var Q = o("d706")
          , W = o("5724");
        const Y = "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod"
          , J = ()=>Object(W["a"])(Y + "/translateMainPageBanner")
          , F = ()=>Object(W["a"])(Y + "/translateMainPagePopup");
        var G = {
            getBannerInfos: J,
            getPopUpInfos: F
        }
          , q = o("4260")
          , K = {
            __name: "AdPopUp",
            setup(e, {expose: t}) {
                t();
                const o = Object(c["ref"])(!1)
                  , n = Object(c["ref"])("")
                  , a = Object(c["ref"])("")
                  , r = Object(c["getCurrentInstance"])()
                  , i = r.appContext.config.globalProperties
                  , s = ()=>{
                    o.value = !1
                }
                  , l = ()=>{
                    window.open(n.value, "_self"),
                    window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
                }
                ;
                Object(c["onMounted"])(()=>{
                    G.getPopUpInfos().then(e=>{
                        if (0 !== Object.keys(e.data.value).length) {
                            const t = e.data.value;
                            n.value = t.url,
                            a.value = t.picture,
                            q["a"].isDuringDate(t.startTime, t.endTime) && null === i.$cookies.get("adcookie") ? (o.value = !0,
                            window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                            i.$cookies.set("adcookie", !0, 86400)) : o.value = !1
                        }
                    }
                    )
                }
                );
                const d = {
                    showAd: o,
                    url: n,
                    picture: a,
                    internalInstance: r,
                    internalData: i,
                    closeAd: s,
                    goAd: l,
                    ref: c["ref"],
                    onMounted: c["onMounted"],
                    getCurrentInstance: c["getCurrentInstance"],
                    Overlay: Q["a"],
                    service: G,
                    util: q["a"]
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        };
        o("ffd2");
        const Z = d()(K, [["render", R], ["__scopeId", "data-v-05c25f5a"]]);
        var z = Z
          , X = o("c866")
          , $ = o.n(X);
        const ee = ["src"]
          , te = ["onClick"];
        function oe(e, t, o, n, a, r) {
            return n.showBanner ? (Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                key: 0,
                class: "banner",
                onClick: n.goBanner
            }, [Object(c["createElementVNode"])("img", {
                class: "banner-img",
                src: n.picture
            }, null, 8, ee), Object(c["createElementVNode"])("img", {
                class: "close",
                src: $.a,
                onClick: Object(c["withModifiers"])(n.closeBanner, ["stop"])
            }, null, 8, te)])) : Object(c["createCommentVNode"])("", !0)
        }
        var ne = {
            __name: "Banner",
            setup(e, {expose: t}) {
                t();
                const o = Object(c["ref"])("")
                  , n = Object(c["ref"])("")
                  , a = Object(c["ref"])(!0)
                  , r = Object(c["getCurrentInstance"])()
                  , i = r.appContext.config.globalProperties;
                Object(c["onMounted"])(()=>{
                    G.getBannerInfos().then(e=>{
                        const t = e.data.value;
                        o.value = t.url,
                        n.value = t.picture,
                        q["a"].isDuringDate(t.startTime, t.endTime) && null === i.$cookies.get("bannercookie") ? a.value = !0 : a.value = !1
                    }
                    )
                }
                );
                const s = ()=>{
                    i.$cookies.set("bannercookie", !0, 86400),
                    a.value = !1
                }
                  , l = ()=>{
                    window.open(o.value)
                }
                  , d = {
                    url: o,
                    picture: n,
                    showBanner: a,
                    internalInstance: r,
                    internalData: i,
                    closeBanner: s,
                    goBanner: l,
                    service: G,
                    util: q["a"]
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        };
        o("e79d");
        const ae = d()(ne, [["render", oe], ["__scopeId", "data-v-04a83aae"]]);
        var ce = ae
          , re = o("5894");
        const ie = {
            class: "index"
        };
        function se(e, t, o, n, a, r) {
            const i = re["a"]
              , s = Object(c["resolveComponent"])("TranslateTab")
              , l = ce
              , d = Object(c["resolveComponent"])("vue3WebsiteFooter")
              , u = z
              , m = L;
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", ie, [Object(c["createVNode"])(i), Object(c["createVNode"])(s), Object(c["createVNode"])(l), Object(c["createVNode"])(d), Object(c["createVNode"])(u), Object(c["createVNode"])(m)])
        }
        const le = {
            class: "translate-tab-container"
        }
          , de = {
            class: "tab-body-border-box"
        }
          , ue = {
            class: "tab-body color_bg_3"
        };
        function me(e, t, o, n, a, r) {
            const i = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", le, [Object(c["createVNode"])(n["TabHeader"]), Object(c["createElementVNode"])("div", de, [Object(c["createElementVNode"])("div", ue, [Object(c["createVNode"])(i, null, {
                default: Object(c["withCtx"])(({Component: e})=>[(Object(c["openBlock"])(),
                Object(c["createBlock"])(c["KeepAlive"], null, [(Object(c["openBlock"])(),
                Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(e)))], 1024))]),
                _: 1
            })])])])
        }
        const pe = e=>(Object(c["pushScopeId"])("data-v-3e1f02ad"),
        e = e(),
        Object(c["popScopeId"])(),
        e)
          , be = {
            class: "TextTranslateSetting yd-form-container"
        }
          , fe = {
            class: "checkbox"
        }
          , ve = pe(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1 label-text"
        }, "日语假名（仅译文）", -1))
          , ge = {
            class: "checkbox"
        }
          , he = pe(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1 label-text"
        }, "日语罗马音（仅译文）", -1))
          , Oe = {
            class: "checkbox"
        }
          , je = pe(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1 label-text"
        }, "显示原文字数", -1));
        function ye(e, t, o, n, a, r) {
            return Object(c["openBlock"])(),
            Object(c["createBlock"])(n["InterfaceDialog"], {
                dialogVisible: !0,
                width: "auto",
                height: "auto",
                top: 28,
                left: -162,
                onCloseDialog: n.closeDialog
            }, {
                default: Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div", be, [Object(c["createVNode"])(n["StrokeSwitch"]), Object(c["createElementVNode"])("label", fe, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                    class: "g-checkbox",
                    type: "checkbox",
                    "onUpdate:modelValue": t[0] || (t[0] = e=>n.showPjm = e)
                }, null, 512), [[c["vModelCheckbox"], n.showPjm]]), ve]), Object(c["createElementVNode"])("label", ge, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                    class: "g-checkbox",
                    type: "checkbox",
                    "onUpdate:modelValue": t[1] || (t[1] = e=>n.showRomanPronunciation = e)
                }, null, 512), [[c["vModelCheckbox"], n.showRomanPronunciation]]), he]), Object(c["createElementVNode"])("label", Oe, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                    class: "g-checkbox",
                    type: "checkbox",
                    "onUpdate:modelValue": t[2] || (t[2] = e=>n.showWordsNumber = e)
                }, null, 512), [[c["vModelCheckbox"], n.showWordsNumber]]), je])])]),
                _: 1
            })
        }
        var we = o("a1e9")
          , Ae = o("5c40")
          , ke = o("2caa");
        const Ee = {
            class: "stroke-switch yd-form-container"
        }
          , _e = {
            class: "checkbox"
        }
          , Ce = Object(c["createElementVNode"])("span", {
            class: "color_text_1 label-text"
        }, "划词（仅中英）", -1);
        function Te(e, t, o, n, a, r) {
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", Ee, [Object(c["createElementVNode"])("label", _e, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                class: "g-checkbox",
                type: "checkbox",
                "onUpdate:modelValue": t[0] || (t[0] = e=>n.allowStroke = e)
            }, null, 512), [[c["vModelCheckbox"], n.allowStroke]]), Ce])])
        }
        var Se = {
            name: "StrokeSwitch",
            setup(e, t) {
                const o = Object(C["b"])()
                  , n = Object(we["s"])(o.state.text.allowStroke);
                return Object(Ae["kc"])(n, (e,t)=>{
                    e !== t && o.commit("SET_ALLOW_STROKE", e)
                }
                ),
                {
                    allowStroke: n
                }
            }
        };
        const Ne = d()(Se, [["render", Te]]);
        var xe = Ne
          , Be = {
            __name: "TextTranslateSetting",
            emits: ["closeDialog"],
            setup(e, {expose: t, emit: o}) {
                t();
                const n = Object(C["b"])()
                  , a = Object(we["s"])(!1)
                  , r = Object(we["s"])(!1)
                  , i = Object(we["s"])(!0);
                Object(c["onBeforeMount"])(()=>{
                    n.dispatch("initTextTranslateSettingStore"),
                    a.value = n.state.text.showPjm,
                    r.value = n.state.text.showRomanPronunciation,
                    i.value = n.state.text.showWordsNumber
                }
                ),
                Object(Ae["kc"])(a, (e,t)=>{
                    e !== t && n.commit("SET_SHOW_PJM", e)
                }
                ),
                Object(Ae["kc"])(r, (e,t)=>{
                    e !== t && n.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
                }
                ),
                Object(Ae["kc"])(i, (e,t)=>{
                    e !== t && n.commit("SET_SHOW_WORDS_NUMBER", e)
                }
                );
                const s = ()=>{
                    o("closeDialog")
                }
                  , l = {
                    store: n,
                    emit: o,
                    showPjm: a,
                    showRomanPronunciation: r,
                    showWordsNumber: i,
                    closeDialog: s,
                    computed: Ae["q"],
                    ref: we["s"],
                    watch: Ae["kc"],
                    useStore: C["b"],
                    InterfaceDialog: ke["a"],
                    StrokeSwitch: xe
                };
                return Object.defineProperty(l, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                l
            }
        };
        o("aad4");
        const De = d()(Be, [["render", ye], ["__scopeId", "data-v-3e1f02ad"]]);
        var Ie = De;
        const Ve = e=>(Object(c["pushScopeId"])("data-v-6e71f92b"),
        e = e(),
        Object(c["popScopeId"])(),
        e)
          , Pe = {
            class: "tab-header"
        }
          , Le = {
            class: "tab-left"
        }
          , He = ["onClick"]
          , Ue = {
            class: "color_text_1"
        }
          , Me = Ve(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1"
        }, "人工翻译", -1))
          , Re = [Me]
          , Qe = Ve(()=>Object(c["createElementVNode"])("i", {
            class: "ic_new_tag"
        }, null, -1))
          , We = {
            class: "tab-right"
        }
          , Ye = Ve(()=>Object(c["createElementVNode"])("i", {
            class: "icon ic_text_translate_setting"
        }, null, -1))
          , Je = Ve(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1"
        }, "设置", -1))
          , Fe = Ve(()=>Object(c["createElementVNode"])("i", {
            class: "icon ic_leftbar_document_normal"
        }, null, -1))
          , Ge = Ve(()=>Object(c["createElementVNode"])("span", {
            class: "color_text_1"
        }, "文档翻译记录", -1))
          , qe = [Fe, Ge];
        function Ke(e, t, o, n, a, r) {
            const i = Ie
              , s = Object(c["resolveDirective"])("tooltip");
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", Pe, [Object(c["createElementVNode"])("div", Le, [(Object(c["openBlock"])(!0),
            Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(a.tabList, (e,t)=>(Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                class: Object(c["normalizeClass"])(["tab-item", [e.value === a.currentTab ? "active color_text_1" : "color_text_3"]]),
                key: t,
                onClick: t=>r.tabItemClickHandler(e)
            }, [Object(c["createElementVNode"])("span", Ue, Object(c["toDisplayString"])(e.label), 1)], 10, He))), 128)), Object(c["withDirectives"])((Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                class: "tab-item color_text_3",
                onClick: t[0] || (t[0] = e=>r.hunmanTranslateButtonClickHandler())
            }, Re)), [[s, r.HumanTranslateHoverTip, void 0, {
                "bottom-left": !0
            }]]), Qe]), Object(c["createElementVNode"])("div", We, ["TextTranslate" === r.routeName ? (Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                key: 0,
                class: "tool-button",
                onClick: t[1] || (t[1] = (...e)=>r.textTranslateSettingButtonClickHander && r.textTranslateSettingButtonClickHander(...e))
            }, [Ye, Je, Object(c["createVNode"])(i, {
                dialogVisible: a.textTranslateSettingDialogVisible,
                onCloseDialog: r.textTranslateSettingCloseCallbackHandler
            }, null, 8, ["dialogVisible", "onCloseDialog"])])) : Object(c["createCommentVNode"])("", !0), "DocumentUpload" === r.routeName ? (Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", {
                key: 1,
                class: "tool-button",
                onClick: t[2] || (t[2] = (...e)=>r.docHistoryEntryClickHandler && r.docHistoryEntryClickHandler(...e))
            }, qe)) : Object(c["createCommentVNode"])("", !0)])])
        }
        const Ze = {
            class: "hunman-translate-hover-tip"
        }
          , ze = Object(c["createStaticVNode"])('<h5 class="tip-title" data-v-bd7d7622><span class="color_main_1_text" data-v-bd7d7622>母语润色</span><span class="color_text_1" data-v-bd7d7622>服务全新上线</span></h5><ul class="tip-list" data-v-bd7d7622><li class="tip-list-item color_text_2" data-v-bd7d7622>专业译员随时待命</li><li class="tip-list-item color_text_2" data-v-bd7d7622>最快1分钟返回精准译文</li></ul>', 2)
          , Xe = [ze];
        function $e(e, t) {
            return Object(c["openBlock"])(),
            Object(c["createElementBlock"])("div", Ze, Xe)
        }
        o("ad58");
        const et = {}
          , tt = d()(et, [["render", $e], ["__scopeId", "data-v-bd7d7622"]]);
        var ot = tt
          , nt = {
            name: "TabHeader",
            data() {
                return {
                    tabList: [{
                        label: "文本",
                        value: "TextTranslate"
                    }, {
                        label: "文档",
                        value: "DocumentUpload"
                    }],
                    currentTab: "",
                    textTranslateSettingDialogVisible: !1
                }
            },
            computed: {
                routeName() {
                    return this.$route.name
                },
                isLogin() {
                    return this.$store.state.login.isLogin
                }
            },
            components: {
                TextTranslateSetting: Ie
            },
            methods: {
                HumanTranslateHoverTip() {
                    return {
                        component: ot
                    }
                },
                tabItemClickHandler(e) {
                    this.$router.push({
                        name: "" + e.value
                    })
                },
                hunmanTranslateButtonClickHandler() {
                    window._rlog.push(["_trackCustom", "event", [["action", "human_translation"]]]),
                    window.open("https://f.youdao.com/?vendor=fanyibanner", "_blank")
                },
                textTranslateSettingButtonClickHander() {
                    this.textTranslateSettingDialogVisible = !0
                },
                textTranslateSettingCloseCallbackHandler() {
                    this.textTranslateSettingDialogVisible = !1
                },
                docHistoryEntryClickHandler() {
                    if (this.isLogin) {
                        const e = this.$router.resolve({
                            path: "/person/docHistory"
                        });
                        window.open(e.href, "_blank")
                    } else {
                        const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
                        window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + encodeURIComponent(e)
                    }
                }
            },
            watch: {
                $route: {
                    handler() {
                        this.currentTab = decodeURIComponent(this.$route.name)
                    },
                    immediate: !0
                }
            }
        };
        o("6401");
        const at = d()(nt, [["render", Ke], ["__scopeId", "data-v-6e71f92b"]]);
        var ct = at
          , rt = o("8139")
          , it = {
            __name: "index",
            setup(e, {expose: t}) {
                t();
                const o = Object(c["getCurrentInstance"])()
                  , n = o.appContext.config.globalProperties
                  , a = Object(C["b"])();
                Object(c["onBeforeMount"])(()=>{
                    a.dispatch("fetchLanguageData"),
                    a.dispatch("fetchDomainData");
                    const e = {
                        keyid: "minor-search-server"
                    }
                      , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
                    rt["a"].getAigcEntrance(e, t).then(o=>{
                        a.commit("SET_ISALLOWAIGC", o.data.isAllow),
                        !o.data.isAllow && a.state.login.isLogin || rt["a"].getAigcStyle(e, t).then(e=>{
                            a.commit("SET_AIGCDOMAINMAP", e.data.styleList),
                            null !== n.$cookies.get("participation-aigc-invitation") && a.dispatch("updateDomainMap")
                        }
                        )
                    }
                    )
                }
                );
                const r = {
                    internalInstance: o,
                    internalData: n,
                    store: a,
                    getCurrentInstance: c["getCurrentInstance"],
                    TabHeader: ct,
                    useStore: C["b"],
                    service: rt["a"]
                };
                return Object.defineProperty(r, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                r
            }
        };
        o("c23f");
        const st = d()(it, [["render", me], ["__scopeId", "data-v-30e6cf08"]]);
        var lt = st
          , dt = {
            name: "Home",
            components: {
                VHeader: re["a"],
                Banner: ce,
                AdPopUp: z,
                ArxivPopUp: L,
                TranslateTab: lt
            }
        };
        o("1dc7");
        const ut = d()(dt, [["render", se], ["__scopeId", "data-v-72e88ab5"]]);
        var mt = ut
          , pt = o("4360");
        const bt = [{
            path: "/",
            name: "Home",
            component: mt,
            children: [{
                path: "",
                name: "TextTranslate",
                component: ()=>Promise.all([o.e("documentUpload~textTranslate"), o.e("textTranslate")]).then(o.bind(null, "5bac"))
            }, {
                path: "documentUpload",
                name: "DocumentUpload",
                component: ()=>Promise.all([o.e("documentUpload~textTranslate"), o.e("documentUpload")]).then(o.bind(null, "211a"))
            }]
        }, {
            path: "/person",
            name: "person",
            component: ()=>o.e("Person").then(o.bind(null, "ce40")),
            beforeEnter(e, t, o) {
                console.log(pt["a"].state.login.isLogin);
                const {isLogin: n} = pt["a"].state.login;
                n ? o() : o({
                    name: "Home"
                })
            },
            children: [{
                path: "docHistory",
                name: "docHistory",
                component: ()=>Promise.all([o.e("DocHistory~termBank"), o.e("DocHistory")]).then(o.bind(null, "20ce"))
            }, {
                path: "termBank",
                name: "termBank",
                component: ()=>Promise.all([o.e("DocHistory~termBank"), o.e("termBank")]).then(o.bind(null, "a983"))
            }]
        }, {
            path: "/login/:redirectUrl?",
            name: "NoLogin",
            component: ()=>o.e("NoLogin").then(o.bind(null, "e0bc"))
        }]
          , ft = Object(x["a"])({
            history: Object(x["b"])(),
            routes: bt
        });
        ft.beforeEach((e,t,o)=>{
            document.body.scrollTop = 0,
            document.documentElement.scrollTop = 0,
            o()
        }
        );
        var vt = ft;
        o("4ee2"),
        o("d662"),
        o("5c54"),
        o("d007"),
        o("d75d");
        const gt = Object(c["createApp"])(N);
        gt.config.globalProperties.$cookies = a.a,
        gt.config.globalProperties.$toast = r["a"],
        gt.use(pt["a"]).use(vt).use(a.a).use(g).use(O.a).mount("#app")
    },
    5724: function(e, t, o) {
        "use strict";
        o.d(t, "a", (function() {
            return r
        }
        )),
        o.d(t, "b", (function() {
            return i
        }
        )),
        o.d(t, "c", (function() {
            return s
        }
        )),
        o.d(t, "d", (function() {
            return l
        }
        ));
        var n = o("5530")
          , a = o("bc3a")
          , c = (o("7a23"),
        o("8393"));
        function r(e, t, o={}) {
            return new Promise((c,r)=>{
                a["a"].get(e, Object(n["a"])({
                    params: t
                }, o)).then(e=>{
                    c(e.data)
                }
                ).catch(e=>{
                    r(e)
                }
                )
            }
            )
        }
        function i(e, t, o) {
            return new Promise(n=>{
                o ? a["a"].post(e, t, {
                    timeout: o
                }).then(e=>{
                    n(e.data)
                }
                ).catch(e=>{
                    n(e)
                }
                ) : a["a"].post(e, t).then(e=>{
                    n(e.data)
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        function s(e, t) {
            const o = t
              , n = new FormData;
            return Object.keys(o).forEach(e=>{
                n.append(e, o[e])
            }
            ),
            new Promise((t,o)=>{
                a["a"].post(e, n).then(e=>{
                    t(e.data)
                }
                ).catch(e=>{
                    o(e)
                }
                )
            }
            )
        }
        function l(e, t, o) {
            return new Promise((n,c)=>{
                a["a"].post(e, t, o).then(e=>{
                    n(e.data)
                }
                ).catch(e=>{
                    c(e)
                }
                )
            }
            )
        }
        a["a"].defaults.withCredentials = !0,
        a["a"].interceptors.response.use(e=>e, e=>(e.code && "ERR_CANCELED" === e.code || Object(c["a"])("网络异常，请检查网络"),
        Promise.reject(e)))
    },
    5894: function(e, t, o) {
        "use strict";
        var n = o("7a23")
          , a = o("4ffd")
          , c = o.n(a)
          , r = o("79e2")
          , i = o.n(r)
          , s = o("a16c")
          , l = o.n(s);
        const d = e=>(Object(n["pushScopeId"])("data-v-830a1b10"),
        e = e(),
        Object(n["popScopeId"])(),
        e)
          , u = {
            class: "top-area"
        }
          , m = {
            class: "nav_list color_text_1"
        }
          , p = {
            class: "nav_item"
        }
          , b = d(()=>Object(n["createElementVNode"])("div", {
            class: "active-bottom"
        }, null, -1))
          , f = {
            class: "nav_item"
        }
          , v = d(()=>Object(n["createElementVNode"])("div", {
            class: "vip-tip color_text_vip_2"
        }, [Object(n["createElementVNode"])("span", null, "全新上线")], -1))
          , g = {
            class: "nav_item"
        }
          , h = {
            class: "nav_item"
        }
          , O = {
            class: "nav_item"
        }
          , j = {
            class: "nav_item"
        }
          , y = {
            class: "nav_item"
        }
          , w = d(()=>Object(n["createElementVNode"])("div", {
            class: "vip-tip color_text_vip_2"
        }, [Object(n["createElementVNode"])("span", null, "免费下载")], -1))
          , A = {
            class: "account"
        }
          , k = d(()=>Object(n["createElementVNode"])("img", {
            class: "user_avatar",
            src: l.a
        }, null, -1))
          , E = d(()=>Object(n["createElementVNode"])("div", {
            class: "login-area"
        }, "登录", -1))
          , _ = [k, E]
          , C = {
            class: "user-info"
        }
          , T = ["src"]
          , S = d(()=>Object(n["createElementVNode"])("div", {
            class: "icon-nav"
        }, null, -1))
          , N = {
            class: "user-options_cover"
        }
          , x = {
            class: "user-item"
        };
        function B(e, t, o, a, r, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                class: Object(n["normalizeClass"])(["top-nav", [a.isTop ? "top" : "not-top"]])
            }, [Object(n["createElementVNode"])("div", u, [Object(n["createElementVNode"])("img", {
                class: "logo",
                src: c.a,
                onClick: a.goHome
            }), Object(n["createElementVNode"])("ul", m, [Object(n["createElementVNode"])("li", p, [Object(n["createElementVNode"])("div", {
                class: "active",
                onClick: t[0] || (t[0] = e=>a.goNavigation(0))
            }, "在线翻译"), b]), Object(n["createElementVNode"])("li", f, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[1] || (t[1] = e=>a.goNavigation(8))
            }, "有道速读"), v]), Object(n["createElementVNode"])("li", g, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[2] || (t[2] = e=>a.goNavigation(7))
            }, "arXiv论文翻译")]), Object(n["createElementVNode"])("li", h, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[3] || (t[3] = e=>a.goNavigation(1))
            }, "英文写作")]), Object(n["createElementVNode"])("li", O, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[4] || (t[4] = e=>a.goNavigation(2))
            }, "同传翻译")]), Object(n["createElementVNode"])("li", {
                class: "nav_item",
                onClick: a.goVip
            }, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[5] || (t[5] = e=>a.goNavigation(3))
            }, "超级会员")]), Object(n["createElementVNode"])("li", j, [Object(n["createElementVNode"])("div", {
                class: "item",
                onClick: t[6] || (t[6] = e=>a.goNavigation(4))
            }, "翻译API")]), Object(n["createElementVNode"])("li", y, [Object(n["createElementVNode"])("div", {
                class: "item rg-item",
                onClick: t[7] || (t[7] = e=>a.goNavigation(5))
            }, "人工翻译"), Object(n["createElementVNode"])("img", {
                class: "rg",
                src: i.a,
                onClick: a.goFanyi
            })]), Object(n["createElementVNode"])("li", {
                class: "nav_item"
            }, [Object(n["createElementVNode"])("div", {
                class: "item download-item",
                onClick: a.downLoad
            }, "桌面端"), w])]), Object(n["createElementVNode"])("div", A, [Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
                class: "login",
                onClick: a.login
            }, _, 512), [[n["vShow"], !a.isLogin]]), Object(n["withDirectives"])(Object(n["createElementVNode"])("div", C, [Object(n["createElementVNode"])("img", {
                class: "user_avatar",
                src: a.optionAvatar
            }, null, 8, T), S, Object(n["createElementVNode"])("div", N, [Object(n["createElementVNode"])("div", x, Object(n["toDisplayString"])(a.nickname), 1), Object(n["createElementVNode"])("div", {
                class: "user-item person",
                onClick: a.goPersonCenter
            }, "个人中心"), Object(n["createElementVNode"])("div", {
                class: "user-item invoice",
                onClick: a.goInvoice
            }, "开具发票"), Object(n["createElementVNode"])("div", {
                class: "user-item quit",
                onClick: a.quit
            }, "退出登录")])], 512), [[n["vShow"], a.isLogin]])]), Object(n["createVNode"])(a["PopUp"], {
                visible: a.showQuit,
                text: a.quitText,
                onConfirm: a.confirm,
                modalClosable: !0,
                onClosePop: a.closePop
            }, null, 8, ["visible", "text"])])], 2)
        }
        o("14d9");
        var D = o("df52")
          , I = o("5502")
          , V = o("6605")
          , P = o("c0ee")
          , L = o("e550")
          , H = o("4260")
          , U = {
            __name: "VHeader",
            setup(e, {expose: t}) {
                t();
                const o = Object(V["e"])()
                  , a = Object(I["b"])()
                  , c = Object(n["ref"])(!1)
                  , r = Object(n["ref"])("确定退出当前账号吗？")
                  , i = Object(n["computed"])(()=>a.state.login.isLogin)
                  , s = Object(n["computed"])(()=>a.state.login.optionAvatar)
                  , l = Object(n["computed"])(()=>a.state.login.nickname)
                  , d = Object(n["ref"])(!1)
                  , {protocol: u} = window.location
                  , m = Object(n["ref"])(!0)
                  , p = [{
                    tabIndex: 0,
                    name: "在线翻译",
                    url: "/home"
                }, {
                    tabIndex: 1,
                    name: "英文写作",
                    url: "https://write.youdao.com/#/homepage?from=fanyi_top"
                }, {
                    tabIndex: 2,
                    name: "同传翻译",
                    url: "https://tongchuan.youdao.com/?keyfrom=fanyi_web_tab"
                }, {
                    tabIndex: 3,
                    name: "超级会员",
                    url: "https://fanyi.youdao.com/vip.html#/?keyfrom=fanyi_top"
                }, {
                    tabIndex: 4,
                    name: "翻译API",
                    url: "https://ai.youdao.com/?keyfrom=fanyi-new-nav#/"
                }, {
                    tabIndex: 5,
                    name: "人工翻译",
                    url: "https://f.youdao.com/?vendor=fanyi-new-nav"
                }, {
                    tabIndex: 6,
                    name: "客户端",
                    url: ""
                }, {
                    tabIndex: 7,
                    name: "arxiv论文翻译",
                    url: "https://fanyi.youdao.com/trans/#/home"
                }, {
                    tabIndex: 8,
                    name: "有道速读",
                    url: "https://read.youdao.com/#/home"
                }]
                  , b = Object(n["computed"])(()=>H["a"].isMac() ? "Mac" : "Windows")
                  , f = ()=>{
                    window.open("https://fanyi.youdao.com/download/?keyfrom=fanyiweb_navigation")
                }
                  , v = ()=>{
                    "/" === o.currentRoute.value.path ? window.location.reload() : o.replace({
                        path: "/"
                    })
                }
                  , g = ()=>{
                    localStorage.setItem("showFirst", !0)
                }
                  , h = e=>{
                    0 === e ? v() : "" !== p[e].url && window.open(p[e].url),
                    3 === e && g(),
                    window._rlog.push(["_trackCustom", "event", [["action", "navigation"], ["type", p[e].name]]])
                }
                  , O = ()=>{
                    const e = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
                    if (e) {
                        const e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                        m.value = 0 === e
                    }
                }
                ;
                Object(n["onMounted"])(()=>{
                    window.addEventListener("scroll", O),
                    null === localStorage.getItem("showFirst") ? d.value = !0 : d.value = !1
                }
                );
                const j = ()=>{
                    L["a"].$emit("saveTextTranslateContentToLS");
                    const e = encodeURIComponent(window.location.href);
                    window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + e
                }
                  , y = ()=>{
                    window.location.href = "https://f.youdao.com/?vendor=fanyi-new-fanyicover"
                }
                  , w = ()=>{
                    o.push({
                        path: "/person/docHistory"
                    })
                }
                  , A = ()=>{
                    window.open("https://c.youdao.com/dict/vip/invoice.html")
                }
                  , k = ()=>{
                    c.value = !1
                }
                  , E = ()=>{
                    c.value = !1,
                    L["a"].$emit("saveTextTranslateContentToLS");
                    const e = encodeURIComponent(window.location.href);
                    console.log("router", o.currentRoute.value.path),
                    "/" === o.currentRoute.value.path ? window.location.href = "https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=" + e : window.location.replace("https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=https://c.youdao.com/common-login-web/index.html?redirect_url=" + e)
                }
                  , _ = ()=>{
                    c.value = !0
                }
                  , C = {
                    router: o,
                    store: a,
                    showQuit: c,
                    quitText: r,
                    isLogin: i,
                    optionAvatar: s,
                    nickname: l,
                    showFirst: d,
                    protocol: u,
                    isTop: m,
                    navList: p,
                    platform: b,
                    downLoad: f,
                    goHome: v,
                    goVip: g,
                    goNavigation: h,
                    showScroll: O,
                    login: j,
                    goFanyi: y,
                    goPersonCenter: w,
                    goInvoice: A,
                    closePop: k,
                    confirm: E,
                    quit: _,
                    service: D["a"],
                    useStore: I["b"],
                    useRouter: V["e"],
                    PopUp: P["a"],
                    eventBus: L["a"],
                    util: H["a"]
                };
                return Object.defineProperty(C, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                C
            }
        }
          , M = (o("d94e"),
        o("6b0d"))
          , R = o.n(M);
        const Q = R()(U, [["render", B], ["__scopeId", "data-v-830a1b10"]]);
        t["a"] = Q
    },
    "594a": function(e, t, o) {
        "use strict";
        o("8121")
    },
    "5c54": function(e, t, o) {},
    6: function(e, t) {},
    "62bf": function(e, t, o) {},
    6401: function(e, t, o) {
        "use strict";
        o("62bf")
    },
    "6fda": function(e, t, o) {
        "use strict";
        o("3102")
    },
    7: function(e, t) {},
    "79e2": function(e, t, o) {
        e.exports = o.p + "img/rg.527c9cc6.png"
    },
    8: function(e, t) {},
    8121: function(e, t, o) {},
    8139: function(e, t, o) {
        "use strict";
        (function(e) {
            var n = o("5530")
              , a = o("5724")
              , c = o("1c46")
              , r = o.n(c)
              , i = o("bc3a");
            const {CancelToken: s} = i["a"];
            let l;
            const d = "fanyideskweb"
              , u = "webfanyi"
              , m = "client,mysticTime,product"
              , p = "1.0.0"
              , b = "web"
              , f = "fanyi.web";
            function v(e) {
                return r.a.createHash("md5").update(e).digest()
            }
            function g(e) {
                return r.a.createHash("md5").update(e.toString()).digest("hex")
            }
            function h(e, t) {
                return g(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
            }
            function O(e) {
                const t = (new Date).getTime();
                return {
                    sign: h(t, e),
                    client: d,
                    product: u,
                    appVersion: p,
                    vendor: b,
                    pointParam: m,
                    mysticTime: t,
                    keyfrom: f
                }
            }
            const j = (e,t)=>Object(a["a"])("https://dict.youdao.com/webtranslate/key", Object(n["a"])(Object(n["a"])({}, e), O(t)))
              , y = (e,t)=>Object(a["d"])("https://dict.youdao.com/webtranslate", Object(n["a"])(Object(n["a"])({}, e), O(t)), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
              , w = ()=>{
                l && l()
            }
              , A = e=>Object(a["c"])("https://dict.youdao.com/keyword/key", e)
              , k = (e,t)=>Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/entrance", Object(n["a"])(Object(n["a"])({}, e), O(t)))
              , E = (e,t)=>Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/style", Object(n["a"])(Object(n["a"])({}, e), O(t)))
              , _ = (e,t)=>Object(a["a"])(" https://dict-subsidiary.youdao.com/aigc/tran", Object(n["a"])(Object(n["a"])({}, e), O(t)), {
                cancelToken: new s(e=>{
                    l = e
                }
                )
            })
              , C = e=>Object(a["c"])("https://fanyi.youdao.com/feedback", e)
              , T = (t,o,n)=>{
                if (!t)
                    return null;
                const a = e.alloc(16, v(o))
                  , c = e.alloc(16, v(n))
                  , i = r.a.createDecipheriv("aes-128-cbc", a, c);
                let s = i.update(t, "base64", "utf-8");
                return s += i.final("utf-8"),
                s
            }
              , S = "https://lunafeedback.youdao.com/feedback"
              , N = e=>{
                const t = "product=deskdict_contentCorrection&client=fanyiweb&appVersion=1.0.0&comments=" + e;
                return Object(a["b"])(S + "/add", t)
            }
            ;
            t["a"] = {
                getTextTranslateSecretKey: j,
                getTextTranslateResult: y,
                getTextTranslateKeyword: A,
                decodeData: T,
                feedback: N,
                getAigcEntrance: k,
                getAigcStyle: E,
                getAigcTran: _,
                fanyiFeedback: C,
                cancelLastGpt: w
            }
        }
        ).call(this, o("b639").Buffer)
    },
    8393: function(e, t, o) {
        "use strict";
        var n = o("7a23");
        function a(e, t, o, a, c, r) {
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(n["Transition"], {
                name: "fade"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
                    class: "toasts"
                }, Object(n["toDisplayString"])(o.text), 513), [[n["vShow"], a.visible]])]),
                _: 1
            })
        }
        var c = {
            name: "toast",
            props: {
                text: {
                    type: String,
                    default: ""
                }
            },
            setup() {
                const e = Object(n["ref"])(!1);
                return Object(n["onMounted"])(()=>{
                    e.value = !0
                }
                ),
                {
                    visible: e
                }
            }
        }
          , r = (o("44ae"),
        o("6b0d"))
          , i = o.n(r);
        const s = i()(c, [["render", a], ["__scopeId", "data-v-67be4052"]]);
        var l = s;
        const d = document.createElement("div");
        d.setAttribute("class", "toast"),
        document.body.appendChild(d);
        let u = null;
        t["a"] = (e,t=1500)=>{
            const o = Object(n["createVNode"])(l, {
                text: e
            });
            Object(n["render"])(o, d),
            clearTimeout(u),
            u = setTimeout(()=>{
                Object(n["render"])(null, d)
            }
            , t)
        }
    },
    8498: function(e, t, o) {},
    8544: function(e, t, o) {
        "use strict";
        let n;
        const a = "fanyiweb"
          , c = window.localStorage;
        function r(e) {
            return `${a}-${e}`
        }
        n = "undefined" !== typeof localStorage && null !== localStorage && {
            set: function(e, t) {
                var o = JSON.stringify(t);
                e = r(e);
                try {
                    return c.setItem(e, o)
                } catch (n) {
                    "QuotaExceededError" === n.name && (c.clear(),
                    c.setItem(e, o))
                }
            },
            get: function(e) {
                var t = JSON.parse(c.getItem(r(e)));
                return t
            },
            remove: function(e) {
                c.removeItem(r(e))
            }
        },
        t["a"] = n
    },
    9: function(e, t) {},
    "918c": function(e, t, o) {},
    "99fe": function(e, t, o) {
        "use strict";
        o("0be0")
    },
    a16c: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApeSURBVHgB1VtdchNJEs5qqWUbDBhsJsbe2Rj5BMDjRuzGmteN2JidE4w5AXAC4AQDJxi4wczTPuyD/cbTBt4TWMREIGIXYwG2ZUvdlZtZXT9ZLdmW7G6H+WZA3a3qVn1ZmV9lZTUKasZ2t99O03StqdQdUNjWoNoKYAEQ21FDpToI0EsAO3mO/8mV2kqHw63l5bkO1AgFNeD3/w3X0iT5ARX8Y4To9OhQNzczrV/98Xa6CRWjMgNsb+PC7IJ+qDQ+Qh7hetDJEZ41hsPNqjzj3Aa4IOIRqNM9+vslDgYvzmuIcxng/W7+EDQ+vSjiY2A84rul5ks4I85kgC4JG8ykvwDCGlwOdGAwvH8Wb0hgSvCoq1b65hKRZ7S5T+92Bo9gSkzlAUT+Z6RYh8uMRD1dvtl4NmnziQ3Q3c1+AQ3r8HXg5fJi88EkDScywLud/I0CvAtfEZASqZVbjXuntTtVA3jkvzbyDIV4t7tDXnsKTjRAdzd/8hW5/Tisv9/Jfz6pwbEhwGpPgvccKgQiQqYBsjyHIU3gOtegNUKSKFoKKGg1E5ibaULVoF96vLLYGstlrAF4nudppcoEJyPCR8Mcck2ksTAGGZiO6ZPONV2nDxJxgPm5FlyZTaEqcOaIg+G9cXnC+BBotTaqJH9Ew94/yog8mhFH+1mQR0u++BxS24+f+/Bp7xCqguHCidsYjBig+yFbp1vaUBEGRGhAI6/BkQZB3BoE3Sf4490vh7BDhqgMlLiNS5SiEDApLo1+VQbgOD8cZIGkc3VH1BrCG4D7GXkGwrdL83B1tgVVgEOhnzRWV2+qnrsWeYCabT2scvSZfG4JFaMfyDsNwJIXaOkZ9Of9hy/muApwKLSyLPIC7wFVCx+7/sFhFkZYjrQTvrIHWC+JBRLh9s2rcOvGFagCZS8IHkBlqyqFb5DlRthi8uCJ+z9ENJezAWoTJu57/m7/cABVoewFwQBKPYEKkeejLm3IobbnOoyydffcXvNGsl5xcDiEKtFI1EN3bAzANbwqY58xJA8wIymMEMW7vFYKAXefa3dEU2iVYC/oGs7WAK1E/QQVw5MxI6zjUDDXrLu7a2BDwbm/1t5LsBoNjJBzwRasAahUvQYVg5JbQ1zbzM8lQWHUtc0A43ygLIhsjJm0+vS4oZIf+LNp5v6K3d/8QEOREIaRdmS9MOogejIBkkagW40R09bUhasJgO13u/h9otO0lqVuSgsbH/9YmuslUekFfnaAYjq0127Mz0Id0MPhfdqIqWet7xYzI/EuXD634RB0QawNsAiTVrMJSwtXoRYk6m5CrnoHakBCy9tb1+eCAJYXQFYcpeBpmyvIaXLl9nWoCxRY7USjakNNYC+YvzIDuc/4dCkvQC+SQRDDjLHyzQ1YulnT6AMPUvJ9U9W8qbG0cIVyLICd3oGP9yg9FllgWBQhfHPrGvyBDFAnOB9QVDerYZYdBa/v//txzxRFHFHAeE3gqkOr3y2a8LkIXJgBHHZpjf+ZjHE4zOCgPzCkWejmZptwjcJlkVy+2ahj2huPCzfAZcPFmfqSgnJM1akjEyyDl8eZKY9R3S/XxYxgq0BcEW5S7CdJAillkK1Wk9LfBtQP1Wnyaym1vCYCharvU1GEl7Ma7VzHawSmbf4voo9ngkHO5zmYKuD+gFLpBFppAtevzpIm1NNDLo6Q4bFD/ao0G2Tie/2hIY7FBUtV2WMMXQAQ59ZGdG72DrIM9uk5VymfuD4/U7k4Uqb5tklu+JZdsCoc0Np972BgEhqGp2ZGnK9Z0pYojlnruu+KYzbmwNQX2Qi8Z1AV6NFblAipLagIXw6OzIih/wE08S05OsJl4oF0CBF3hb/kAgsnU1xiryxHoA1U1d2l5bBOt+EcYDIfqY7PnbMcCoKFwokQiImj1QR/E4TiRxw68XGLBHJ58ZpJms6FZLhqntDdybfPMxN8oJFhZQ8DJ6o4fGC8wI7uiMsL0mO9wrYJh+ZsbiaF5aVrcA50lhebq0nxQ/o3OCM+7R+Z7Sxf68eYEB+6un5BEMN/KMrgLjQA/LogtJPXimMW2J3ePpwdapP/NgZQCL/CGcCd2CfBc6RD52Wsg/90+o+22IGiQWRA2Q5DO8S4HW+f9b6ccQ9R61eGuzt/v5PtTrMvkJHKf+j1KbnJR76Trlt2+5ADxDfELm4foiAWUPGXu065E6yu3JpWD4z7m/vdFarOvIAp8IWSlTJ5ubJDOWLRiAoix4QMiPb+uqsYRUKJZv/hw6fpQoHfLXTH3gCDZvN58Qbm6chI8Pb7A9E54faicz62hSHksZYGisiKYx20AeT9GDxp91N/4v1D5thoDDdHDMB7ZZN6wWcSvhDnqiRiceeCYUY9IzSC2GNkO0CbRsfaEoxVeMvHzweTdJ2f9Wr5ZnhRIsotJ/WCI8rKgluHTuiSGIJ0fwA/hYWRBHtfaSYoe8aIYWwVyf8OGeDTRAboqEYWvSoTGYC9gNZoJ75kyCkpT3swMjWVRhMwkPaqH8JFgyRdGn1JHDAysvQqdy8bg1/BOeifvInKsS9HnzH+HaGP2QYc8yosl7Z6e0dBub1Lxilswd0Lgu28+z7ODqPZQoX2fooUzcrP9L9EJ99Sdri4cOw2uld+ifHLKzV8cFwo+Jqei2uAUigIFy2Ntu+7VHvhQeZTlM6li8ciWvpN+9zjPMBwSYb3x3031gDsJseFQpbrMDI+uMPIiEjwZEGQiRTeHetYOO0DI4OiJ47ecACxNhwMxm+j08p0xPVPNACD36ujh47MCrwqQ+nmiOIFJxGbGF9zgnCspwBEGhEbNNYKWVqXupCPK29qfLZyu3Xs+44nVhhWltJHNDyv5LU81979tIhjT1QYZkTVheuGOAef8WFkpOAZfrbQ4TdCeIQHcRElAvV9+Xb6FE7AqSWW5aXWOr94HIgJMsL9QMZnOUalwcp/AAVRHYeIMKaMN0ccxeyhZfiYlmqL+w6nYKIak3nr2nqCUuXEZ1QAy8SdBggB9+cyrgFGjRZ7js01QE6T9n7EsB6gvq4snv6m+MQGYBhrUjy5slyIbaH2ZRfHkpKD2xEKAgcy7ssaAuWwwPEeZq+ljQafv5hk5Kc2gDFCEU+P6cd6UrACwujpaPTi6UpOkXJ0y5oB4hlBM2IPA/CG7vUPDx8b3ZoCZ6opbbzptqmWuEF1hLbvlPheimGY2kT8ltrJ8Bj3DO/yEApozqOKE7V51Mgf/Pin1Q5MiXMV1Tb+3V03r9fpopwWOjSedPH9aCk8IiMzQXtzrB/CMMh7GvrZ3/68eubX+s9dD9943W3rNH9E+zo/UYcWfDdjftHQjxCKjGaPg9XC/U7jiDjV9F/QtsHzH++vTrSEPw6VbQgYQzTyNZKVJygKrNLNFcRx7tuExuLYfUTte6TwLwbzRPze+Yg71LLn9K/Xv6/RPLxOEvtX6n/bXXejHesmlsPfK7896aDC3ygJ+vXvf1ndhIpR17agxz9fb7cTbNzVCu8mKrlDK6M2UeZQaZdcvgPmn8+rTg75W9om3BqksHkWYZsG/wejzRmB5sM5YAAAAABJRU5ErkJggg=="
    },
    aad4: function(e, t, o) {
        "use strict";
        o("8498")
    },
    ad58: function(e, t, o) {
        "use strict";
        o("bd51")
    },
    b5ce: function(e, t, o) {
        "use strict";
        o.r(t);
        const n = {
            isLogin: !0,
            isSvip: !1,
            isVip: !1,
            optionAvatar: "",
            nickname: ""
        }
          , a = {
            isLogin: e=>e.isLogin,
            optionAvatar: e=>e.optionAvatar,
            nickname: e=>e.nickname,
            isSvip: e=>e.isSvip,
            isVip: e=>e.isVip
        }
          , c = {
            setOptionAvatar: ({commit: e},t)=>{
                e("SET_OPTIONAVATAR", t)
            }
            ,
            setNickName: ({commit: e},t)=>{
                e("SET_NICKNAME", t)
            }
            ,
            setLogin: ({commit: e},t)=>{
                e("SET_LOGIN", t)
            }
            ,
            setSvip: ({commit: e},t)=>{
                e("SET_SVIP", t)
            }
            ,
            setVip: ({commit: e},t)=>{
                e("SET_VIP", t)
            }
        }
          , r = {
            SET_OPTIONAVATAR(e, t) {
                e.optionAvatar = t
            },
            SET_NICKNAME(e, t) {
                e.nickname = t
            },
            SET_LOGIN(e, t) {
                e.isLogin = t
            },
            SET_SVIP(e, t) {
                e.isSvip = t
            },
            SET_VIP(e, t) {
                e.isVip = t
            }
        };
        t["default"] = {
            namespaced: !0,
            state: n,
            getters: a,
            mutations: r,
            actions: c
        }
    },
    b73a: function(e, t, o) {},
    bd51: function(e, t, o) {},
    c083: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("5724");
        const a = "UPDATE_LANGUAGE_MAP";
        var c = {
            UPDATE_LANGUAGE_MAP: a
        };
        const r = {
            languageMap: {},
            rtlLanguageList: ["ar"]
        }
          , i = {
            [c.UPDATE_LANGUAGE_MAP](e, t) {
                e.languageMap = t
            }
        }
          , s = {
            async fetchLanguageData({commit: e, state: t}, o) {
                const a = await Object(n["a"])("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType");
                a.data.value && e(c.UPDATE_LANGUAGE_MAP, a.data.value)
            }
        }
          , l = {
            termSpecifyData(e) {
                return e.languageMap.term ? e.languageMap.term.specify : []
            },
            isTermLanguageSupport(e, t, o) {
                const n = `${o.transInfo.lanFrom}2 ${o.transInfo.lanTo}`;
                return !!t.termSpecifyData.find(e=>e.code === n)
            }
        };
        t["default"] = {
            state: r,
            mutations: i,
            actions: s,
            getters: l
        }
    },
    c0ee: function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            class: "inner-content"
        }
          , c = {
            class: "title color_text_1"
        }
          , r = {
            class: "btn-ara"
        };
        function i(e, t, o, i, s, l) {
            const d = Object(n["resolveDirective"])("fixed");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(n["Teleport"], {
                to: "body"
            }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                key: 0,
                class: "pop-up-comp mask",
                onClick: t[2] || (t[2] = Object(n["withModifiers"])((...e)=>i.close && i.close(...e), ["self"]))
            }, [Object(n["createElementVNode"])("div", a, [Object(n["createElementVNode"])("div", c, Object(n["toDisplayString"])(o.text), 1), Object(n["createElementVNode"])("div", r, [Object(n["createElementVNode"])("div", {
                class: "cancel btn color_text_1",
                onClick: t[0] || (t[0] = (...e)=>i.closePop && i.closePop(...e))
            }, "取消"), Object(n["createElementVNode"])("div", {
                class: "confirm btn color_text_white",
                onClick: t[1] || (t[1] = (...e)=>i.confirm && i.confirm(...e))
            }, "确认")])])])), [[d]]) : Object(n["createCommentVNode"])("", !0)])
        }
        var s = {
            name: "PopUp",
            props: {
                text: String,
                visible: Boolean,
                modalClosable: {
                    type: Boolean,
                    default: !0
                }
            },
            setup(e, t) {
                const o = ()=>{
                    e.modalClosable && t.emit("update:visible", !1)
                }
                  , n = ()=>{
                    t.emit("closePop")
                }
                  , a = ()=>{
                    t.emit("confirm")
                }
                ;
                return {
                    close: o,
                    confirm: a,
                    closePop: n
                }
            },
            directives: {
                fixed: {
                    mounted() {
                        document.body.style.cssText += "overflow: hidden"
                    },
                    unmounted() {
                        document.body.style.cssText -= "overflow: hidden;"
                    }
                }
            }
        }
          , l = (o("99fe"),
        o("6b0d"))
          , d = o.n(l);
        const u = d()(s, [["render", i], ["__scopeId", "data-v-170d148e"]]);
        t["a"] = u
    },
    c23f: function(e, t, o) {
        "use strict";
        o("e925")
    },
    c34f: function(e, t, o) {
        "use strict";
        o.d(t, "b", (function() {
            return c
        }
        )),
        o.d(t, "a", (function() {
            return r
        }
        ));
        var n = o("8544");
        function a() {
            const e = n["a"].get("allowStroke")
              , t = null !== e && e;
            return t
        }
        function c(e) {
            window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
        }
        function r() {
            const e = document.createElement("script");
            e.type = "text/javascript",
            e.src = "https://shared.ydstatic.com/api/fanyi-web-v1.3/assets/index.min.js",
            document.body.appendChild(e),
            e.onload = e.onreadystatechange = function() {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                    const e = a();
                    c(e)
                }
                e.onload = e.onreadystatechange = null
            }
        }
    },
    c564: function(e, t, o) {},
    c653: function(e, t, o) {
        var n = {
            "./domain.js": "d2a7",
            "./language.js": "c083",
            "./login.js": "b5ce",
            "./text.js": "1a68"
        };
        function a(e) {
            var t = c(e);
            return o(t)
        }
        function c(e) {
            if (!o.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return n[e]
        }
        a.keys = function() {
            return Object.keys(n)
        }
        ,
        a.resolve = c,
        e.exports = a,
        a.id = "c653"
    },
    c866: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII="
    },
    cc83: function(e, t, o) {
        "use strict";
        o("49f5")
    },
    cf6d: function(e, t, o) {
        "use strict";
        o("d2b1")
    },
    d007: function(e, t, o) {},
    d2a7: function(e, t, o) {
        "use strict";
        o.r(t);
        o("14d9");
        var n = o("bc3a")
          , a = o("48e8")
          , c = o("8544");
        const r = "DOMAIN"
          , i = "DOMAIN_MAP"
          , s = "TEXTDOMAIN_MAP"
          , l = {
            domainMap: a["a"],
            allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
            isAllowAigc: !1,
            textTransDomainMap: a["a"],
            aigcDomainMap: []
        }
          , d = {
            [i](e, t) {
                e.domainMap = t
            },
            [s](e, t) {
                e.textTransDomainMap = JSON.parse(JSON.stringify(t))
            },
            SET_ISALLOWAIGC(e, t) {
                e.isAllowAigc = t
            },
            SET_AIGCDOMAINMAP(e, t) {
                e.aigcDomainMap = t
            }
        }
          , u = {
            initDictDomainFromLS({commit: e, state: t}, o) {
                var n = c["a"].get("" + o);
                e(r, null !== n ? n : "0")
            },
            async fetchDomainData({commit: e, state: t}, o) {
                var a = await n["a"].get("https://doctrans-service.youdao.com/common/enums/list?key=domain");
                a.data.data && (e(i, a.data.data),
                e(s, a.data.data))
            },
            updateDomainMap({commit: e, state: t}) {
                if (0 !== t.aigcDomainMap.length) {
                    const e = t.textTransDomainMap.length;
                    t.aigcDomainMap.forEach((o,n)=>{
                        t.textTransDomainMap.push({
                            str: String(e + n),
                            msg: o,
                            from: "aigc"
                        })
                    }
                    )
                }
            }
        }
          , m = {
            getDomainLabelByValue: e=>t=>{
                let o = "";
                for (var n = 0; n < e.domainMap.length; n += 1)
                    if (t === e.domainMap[n].str) {
                        o = e.domainMap[n].msg;
                        break
                    }
                return o
            }
            ,
            getTextDomainLabelByValue: e=>t=>{
                let o = "";
                for (var n = 0; n < e.textTransDomainMap.length; n += 1)
                    if (t === e.textTransDomainMap[n].str) {
                        o = e.textTransDomainMap[n].msg;
                        break
                    }
                return o
            }
        };
        t["default"] = {
            state: l,
            mutations: d,
            actions: u,
            getters: m
        }
    },
    d2b1: function(e, t, o) {},
    d706: function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            class: "inner-content"
        };
        function c(e, t, o, c, r, i) {
            const s = Object(n["resolveDirective"])("fixed");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(n["Teleport"], {
                to: "body"
            }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                key: 0,
                class: "pop-up-comp mask",
                onClick: t[0] || (t[0] = Object(n["withModifiers"])((...e)=>c.close && c.close(...e), ["self"]))
            }, [Object(n["createElementVNode"])("div", a, [Object(n["renderSlot"])(e.$slots, "content", {}, void 0, !0)])])), [[s]]) : Object(n["createCommentVNode"])("", !0)])
        }
        var r = {
            name: "PopUp",
            props: {
                visible: Boolean,
                modalClosable: {
                    type: Boolean,
                    default: !0
                }
            },
            setup(e, t) {
                function o() {
                    e.modalClosable && t.emit("update:visible", !1)
                }
                return {
                    close: o
                }
            },
            directives: {
                fixed: {
                    mounted() {
                        const e = document.body.scrollTop || document.documentElement.scrollTop;
                        document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
                    },
                    unmounted() {
                        const {body: e} = document;
                        e.style.position = "static";
                        const {top: t} = e.style;
                        document.body.scrollTop = -parseInt(t, 10),
                        document.documentElement.scrollTop = -parseInt(t, 10),
                        e.style.top = ""
                    }
                }
            }
        }
          , i = (o("594a"),
        o("6b0d"))
          , s = o.n(i);
        const l = s()(r, [["render", c], ["__scopeId", "data-v-909b0550"]]);
        t["a"] = l
    },
    d75d: function(e, t, o) {
        o("14d9");
        (function(e, t, o, n, a) {
            if (!e.__rl_event) {
                var c = navigator.userAgent.toLowerCase()
                  , r = /(mobile|iphone|ipod|blackberry)/.test(c)
                  , i = !1
                  , s = "@VERSION@"
                  , l = ""
                  , d = 0
                  , u = ""
                  , m = ""
                  , p = 0
                  , b = "NULL"
                  , f = "NULL"
                  , v = "NULL"
                  , g = ""
                  , h = ""
                  , O = W()
                  , j = (W(!0),
                V() + "//rlogs.youdao.com")
                  , y = B()
                  , w = {
                    _default: y
                }
                  , A = {}
                  , k = e._rlog
                  , E = e._rlog = {};
                E.push = function(e) {
                    var t = e[0].split(".")
                      , o = t.pop();
                    t = t.join("_"),
                    t || (t = "_default"),
                    y = w[t] || (w[t] = B());
                    var n = A[o];
                    n && n.apply(this, e.slice(1))
                }
                ,
                A._setAccount = function(e) {
                    e && (y.pid = e)
                }
                ,
                A._setAutoPageview = function(e) {
                    y.autopv = e
                }
                ,
                A._setAutoUserId = function(e) {
                    y.autouid = e
                }
                ,
                A._addPost = function(e, t) {
                    A._removePost(e),
                    y.post.push([e, t])
                }
                ,
                A._onPageViewFinished = function(e) {
                    y.pvcb.push(e)
                }
                ,
                A._trackCustom = function(e, t, o) {
                    var a;
                    y.pid && (y.cat = e,
                    a = D(t) ? M(t) : "_nhrf=" + n(t),
                    T(a, o))
                }
                ,
                A._trackEvent = function(e, t) {
                    A._trackCustom("event", e, t)
                }
                ,
                A._trackPageview = function(e) {
                    if (!y.ispvt || "ido" === e) {
                        var t = y;
                        C((function() {
                            var e;
                            while (e = t.pvcb.shift())
                                try {
                                    e()
                                } catch (o) {}
                            t.ispvt = 2
                        }
                        ), D(e) && e.length ? "&" + M(e) : "")
                    }
                }
                ,
                A._removePost = function(e) {
                    if (e) {
                        for (var t = y.post, o = 0, n = t.length; o < n; o++)
                            if (t[o] && t[o][0] == e)
                                return t.splice(o, 1),
                                o
                    } else
                        y.post = []
                }
                ,
                A._trackUserId = function() {
                    var e = !1
                      , t = U("DICT_LOGIN");
                    if (-1 == t || /^[0|8]\w*/.test(t))
                        H("DICT_USR", "-1");
                    else {
                        if (-1 != U("DICT_USR")) {
                            var o = U("DICT_USR").split("~");
                            2 == o.length ? (__rl_nuid = o[1],
                            t != o[0] && (e = !0)) : e = !0
                        } else
                            e = !0;
                        e && _rl_network.ajax({
                            url: location.protocol + "//dict.youdao.com/login/acc/co/cq?product=DICT&cf=1",
                            success: function(e) {
                                e.login ? (t = U("DICT_LOGIN"),
                                H("DICT_USR", t + "~" + e.userid),
                                __rl_nuid = e.userid) : __rl_nuid = "unknown"
                            },
                            fail: function() {
                                __rl_nuid = "unknown"
                            }
                        })
                    }
                }
                ,
                e.__rl_event = function(e, t) {
                    E.push(["_trackCustom", "event", e, t])
                }
                ,
                y.pid = e.__rl_npid || "",
                y.post = e.__rl_post || [],
                y.autopv = "undefined" == typeof __rl_pageview || !!e.__rl_pageview;
                var _ = function() {
                    var e, t = o.search.replace(/^\?/, "").split("&"), n = {}, c = 0;
                    for (c = 0; c < t.length; c++)
                        e = t[c],
                        e && (e = e.split("="),
                        n[e[0]] = void 0 === e[1] ? null : a(e[1]));
                    return n
                }();
                _.vendor && A._addPost("vendor", _.vendor),
                _.keyfrom && A._addPost("keyfrom", _.keyfrom),
                function() {
                    var e = o.hash;
                    if (e) {
                        var t, n, c;
                        e = e.replace(/^#/, "").split("&");
                        for (n = 0,
                        c = e.length; n < c; n++)
                            t = e[n],
                            t && (t = t.split("="),
                            A._addPost(t[0], a(t[1] || "NULL")))
                    }
                }(),
                function() {
                    try {
                        if (!k)
                            return;
                        for (var e = 1, t = k.length; e < t; e++)
                            if (/_setAccount$/.test(k[e][0])) {
                                var o = k[e];
                                k.splice(e, 1),
                                k.splice(0, 0, o)
                            }
                        for (e = 0,
                        t = k.length; e < t; e++)
                            console.log("Execute: ", k[e]),
                            E.push(k[e]);
                        k = null
                    } catch (n) {}
                }(),
                I(w, (function(e, t) {
                    t.autopv && E.push([e + "._trackPageview"]),
                    t.autouid && E.push([e + "._trackUserId"])
                }
                )),
                P("mousedown", x),
                function() {
                    var e = function(t) {
                        E.push(["_trackEvent", "first-touch"]),
                        L("touchstart", e)
                    };
                    P("touchstart", e)
                }(),
                e.__rl_click && P("click", N)
            }
            function C(e, t) {
                y.pid && 1 != y.ispvt && (y.ispvt = 1,
                y.cat = "pageview",
                T(Q() + t, e))
            }
            function T(e, t) {
                console.trace("[" + y.cat + "]", "send ", e);
                var o = ["_npid=" + y.pid, "_ncat=" + y.cat, R(), e];
                y.post.length && o.push(M(y.post));
                var n = j + "/rlog.php?" + o.join("&");
                S(n, t)
            }
            function S(e, t) {
                if (i)
                    navigator.sendBeacon(e),
                    t && t();
                else {
                    var o = new Image;
                    o.onload = o.onerror = function() {
                        t && t()
                    }
                    ,
                    o.src = e,
                    o = null
                }
            }
            function N(t) {
                var o = t || e.event
                  , n = o.target || o.srcElement;
                n.href && E.push(["_trackCustom", "click", n.href])
            }
            function x(o) {
                o = o || e.event;
                for (var n = o.target ? o.target : o.srcElement, a = t.body; n != a; n = n.parentNode || a)
                    if (1 === n.nodeType && !0 !== n.disabled) {
                        var c = n.getAttribute("data-rlog");
                        c && E.push(["_trackEvent", c])
                    }
            }
            function B() {
                return {
                    pid: "",
                    cat: "",
                    post: [],
                    ispvt: 0,
                    pvcb: [],
                    autopv: !0,
                    autouid: !1
                }
            }
            function D(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            function I(e, t) {
                var o;
                for (o in e)
                    e.hasOwnProperty(o) && t(o, e[o])
            }
            function V() {
                return "https:" == o.protocol ? "https:" : "http:"
            }
            function P(e, o) {
                r && "mousedown" == e ? t.addEventListener("touchstart", o, !1) : t.addEventListener ? t.addEventListener(e, o, !1) : t.attachEvent("on" + e, o)
            }
            function L(e, o) {
                r && "mousedown" == e ? t.removeEventListener("touchstart", o, !1) : t.removeEventListener ? t.removeEventListener(e, o, !1) : t.detachEvent("on" + e, o)
            }
            function H(e, t) {
                var o = new Date;
                o.setTime(o.getTime() + 63072e6),
                document.cookie = e + "=" + t + ";expires=" + o.toGMTString() + ";path=/;domain=" + O
            }
            function U(e) {
                var t = document.cookie
                  , o = e + "="
                  , n = t.length
                  , a = 0;
                while (a < n) {
                    var c = a + o.length;
                    if (t.substring(a, c) == o) {
                        var r = t.indexOf(";", c);
                        return -1 == r && (r = n),
                        unescape(t.substring(c, r))
                    }
                    if (a = t.indexOf(" ", a) + 1,
                    0 == a)
                        break
                }
                return -1
            }
            function M(e) {
                D(e) || (e = []);
                var t, o, a, c = [];
                for (t = 0,
                o = e.length; t < o; ++t)
                    a = e[t],
                    D(a) && c.push(a[0] + "=" + n(a[1]));
                return c.join("&")
            }
            function R() {
                var e = (new Date).getTime()
                  , o = [];
                return t.cookie = "___rl__test__cookies=" + e,
                v = U("OUTFOX_SEARCH_USER_ID_NCOO"),
                -1 == v && U("___rl__test__cookies") == e && (v = 2147483647 * Math.random(),
                H("OUTFOX_SEARCH_USER_ID_NCOO", v)),
                b = U("P_INFO"),
                b = -1 == b ? "NULL" : b.substr(0, b.indexOf("|")),
                f = U("DICT_UT"),
                -1 == f && (f = "NULL"),
                o = ["_ncoo=" + v, "_nssn=" + b, "_nver=" + s, "_ntms=" + e, "_dict_ut=" + f],
                y.autouid && o.push("_rl_nuid=" + __rl_nuid),
                o.join("&")
            }
            function Q() {
                if (m = "-",
                self.screen)
                    m = screen.width + "x" + screen.height;
                else if (self.java) {
                    var a = java.awt.Toolkit.getDefaultToolkit()
                      , c = a.getScreenSize();
                    m = c.width + "x" + c.height
                }
                var r = new Date(t.lastModified);
                p = r.getTime() / 1e3;
                var i = e.navigator;
                d = i && i.javaEnabled() ? 1 : 0,
                l = t.characterSet || t.charset || "-",
                l = l.toLowerCase(),
                u = n(t.referrer),
                h = n(o.href),
                g = o.hash ? n(o.hash.substring(1)) : "";
                i = ["_nref=" + u, "_nurl=" + h, "_nres=" + m, "_nlmf=" + p, "_njve=" + d, "_nchr=" + l, "_nfrg=" + g];
                return i.join("&")
            }
            function W(e) {
                var n = e ? 4 : 3
                  , a = "res:" === o.protocol ? "" : t.domain
                  , c = a.split(".")
                  , r = c.length
                  , i = /^\d+$/g;
                if (i.test(c[r - 1]))
                    return a;
                if (c.length < n)
                    return "." + a;
                var s, l = ["com", "net", "org", "gov", "co"], d = !1;
                for (s = 0; s < l.length; s++)
                    c[r - 2] == l[s] && (d = !0);
                var u = d ? n : n - 1
                  , m = [];
                while (u)
                    m.push(c[r - u]),
                    u--;
                return "." + m.join(".")
            }
        }
        )(window, document, location, encodeURIComponent, decodeURIComponent)
    },
    d94e: function(e, t, o) {
        "use strict";
        o("dfd9")
    },
    df52: function(e, t, o) {
        "use strict";
        var n = o("5724");
        const a = "https://dict.youdao.com"
          , c = "https://dict.youdao.com/vip"
          , r = ["option_avatar", "nickname"]
          , i = e=>Object(n["b"])(c + "/user/status", e)
          , s = ()=>Object(n["a"])(a + "/login/acc/query/accountinfo")
          , l = e=>Object(n["a"])(`${a}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(r))}`, e);
        t["a"] = {
            getAccountInfos: s,
            getBatchUrl: l,
            getVipStatus: i
        }
    },
    dfd9: function(e, t, o) {},
    e550: function(e, t, o) {
        "use strict";
        var n = o("1344");
        const a = {}
          , c = Object(n["a"])();
        a.$on = c.on,
        a.$off = c.off,
        a.$emit = c.emit,
        t["a"] = a
    },
    e79d: function(e, t, o) {
        "use strict";
        o("14c6")
    },
    e925: function(e, t, o) {},
    fe14: function(e, t, o) {
        "use strict";
        o("c564")
    },
    ffd2: function(e, t, o) {
        "use strict";
        o("4637")
    }
});
