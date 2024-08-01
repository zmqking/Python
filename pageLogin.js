var res;

!(function (e) {
    var i = {}
      , o = {
        index: 0
    }
      , a = [];
        function c(t) {
            if (i[t])
                return i[t].exports;
            var n = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, c),
                n.l = !0,
                n.exports
        }

        res = c
    }
)({
    "0de9": function (t, e, n) {
        "use strict";

        function i(t) {
            var e = Object.prototype.toString.call(t);
            return e.substring(8, e.length - 1)
        }

        function r() {
            return "string" === typeof __channelId__ && __channelId__
        }

        function o(t, e) {
            switch (i(e)) {
                case "Function":
                    return "function() { [native code] }";
                default:
                    return e
            }
        }

        function a(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i];
            console[t].apply(console, n)
        }

        function s() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            var a = e.shift();
            if (r())
                return e.push(e.pop().replace("at ", "uni-app:///")),
                    console[a].apply(console, e);
            var s = e.map((function (t) {
                    var e = Object.prototype.toString.call(t).toLowerCase();
                    if ("[object object]" === e || "[object array]" === e)
                        try {
                            t = "---BEGIN:JSON---" + JSON.stringify(t, o) + "---END:JSON---"
                        } catch (r) {
                            t = e
                        }
                    else if (null === t)
                        t = "---NULL---";
                    else if (void 0 === t)
                        t = "---UNDEFINED---";
                    else {
                        var n = i(t).toUpperCase();
                        t = "NUMBER" === n || "BOOLEAN" === n ? "---BEGIN:" + n + "---" + t + "---END:" + n + "---" : String(t)
                    }
                    return t
                }
            ))
                , c = "";
            if (s.length > 1) {
                var u = s.pop();
                c = s.join("---COMMA---"),
                    0 === u.indexOf(" at ") ? c += u : c += "---COMMA---" + u
            } else
                c = s[0];
            console[a](c)
        }

        n.r(e),
            n.d(e, "log", (function () {
                    return a
                }
            )),
            n.d(e, "default", (function () {
                    return s
                }
            ))
    },
    3102: function (t, n, e) {
        "use strict";
        (function (t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }),
                    n.default = void 0;
                var e = {
                    data: function () {
                        return {}
                    },
                    onLoad: function (n) {
                        uni.showLoading({
                            title: "登录中..."
                        });
                        var e = this;
                        this.$trainapi.call("/Study/FastLogin/" + n.type + "/?id=" + n.id + "&sign=" + n.sign, {}).then((function (i) {
                                if (uni.hideLoading(),
                                200 == i.err_code) {
                                    uni.showToast({
                                        title: "登录成功！"
                                    });
                                    var o = {
                                        type: n.type
                                    };
                                    e.$Type.setTypeObj(o),
                                        t("log", e.$Type.TypeObj, " at pages/FastLogin/FastLogin.vue:36"),
                                        uni.setStorage({
                                            key: "name",
                                            data: i.name
                                        }),
                                        uni.setStorage({
                                            key: "idno",
                                            data: n.id
                                        }),
                                        uni.setStorage({
                                            key: "session_traintoken",
                                            data: i.token,
                                            success: function () {
                                                setTimeout((function () {
                                                        e.goHome()
                                                    }
                                                ), 1e3)
                                            }
                                        })
                                } else
                                    uni.showModal({
                                        title: "登录失败",
                                        content: i.err_msg,
                                        showCancel: !1
                                    })
                            }
                        ))
                    },
                    methods: {
                        goHome: function () {
                            uni.switchTab({
                                url: "/pages/home/home"
                            })
                        }
                    }
                };
                n.default = e
            }
        ).call(this, e("0de9")["log"])
    }
})

console.log(res("3102"));