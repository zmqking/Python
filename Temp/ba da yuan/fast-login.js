var window = global;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-FastLogin-FastLogin"], {
    3102: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.default = void 0;
            var e = {
                data: function() {
                    return {}
                },
                onLoad: function(n) {
                    uni.showLoading({
                        title: "登录中..."
                    });
                    var e = this;
                    this.$trainapi.call("/Study/FastLogin/" + n.type + "/?id=" + n.id + "&sign=" + n.sign, {}).then((function(i) {
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
                                success: function() {
                                    setTimeout((function() {
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
                    goHome: function() {
                        uni.switchTab({
                            url: "/pages/home/home"
                        })
                    }
                }
            };
            n.default = e
        }
        ).call(this, e("0de9")["log"])
    },
    "36f4": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("6e36")
          , o = e("4586");
        for (var a in o)
            "default" !== a && function(t) {
                e.d(n, t, (function() {
                    return o[t]
                }
                ))
            }(a);
        var u, s = e("f0c5"), r = Object(s["a"])(o["default"], i["b"], i["c"], !1, null, "2685aca8", null, !1, i["a"], u);
        n["default"] = r.exports
    },
    4586: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("3102")
          , o = e.n(i);
        for (var a in i)
            "default" !== a && function(t) {
                e.d(n, t, (function() {
                    return i[t]
                }
                ))
            }(a);
        n["default"] = o.a
    },
    "6e36": function(t, n, e) {
        "use strict";
        var i;
        e.d(n, "b", (function() {
            return o
        }
        )),
        e.d(n, "c", (function() {
            return a
        }
        )),
        e.d(n, "a", (function() {
            return i
        }
        ));
        var o = function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("v-uni-view")
        }
          , a = []
    }
}]);
