(function(e) {
    function t(t) {
        for (var n, a, r = t[0], s = t[1], l = t[2], d = 0, u = []; d < r.length; d++)
            a = r[d],
            Object.prototype.hasOwnProperty.call(c, a) && c[a] && u.push(c[a][0]),
            c[a] = 0;
        for (n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        m && m(t);
        while (u.length)
            u.shift()();
        return i.push.apply(i, l || []),
        o()
    }
    function o() {
        for (var e, t = 0; t < i.length; t++) {
            for (var o = i[t], n = !0, a = 1; a < o.length; a++) {
                var r = o[a];
                0 !== c[r] && (n = !1)
            }
            n && (i.splice(t--, 1),
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
      , i = [];
    function r(e) {
        return s.p + "js/" + ({
            "DocHistory~termBank": "DocHistory~termBank",
            DocHistory: "DocHistory",
            termBank: "termBank",
            NoLogin: "NoLogin",
            Person: "Person",
            aiTranslate: "aiTranslate",
            "documentUpload~textTranslate": "documentUpload~textTranslate",
            documentUpload: "documentUpload",
            textTranslate: "textTranslate"
        }[e] || e) + "." + {
            "DocHistory~termBank": "7e3118db",
            DocHistory: "1c366523",
            termBank: "062d7b7b",
            NoLogin: "007f77d8",
            Person: "30140996",
            aiTranslate: "81872a85",
            "documentUpload~textTranslate": "e8f7a401",
            documentUpload: "0f815ff5",
            textTranslate: "f7dcf989"
        }[e] + ".js"
    }
    function s(t) {
        if (n[t])
            return n[t].exports;

        console.log(t,'miss');
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
                aiTranslate: "aiTranslate",
                "documentUpload~textTranslate": "documentUpload~textTranslate",
                documentUpload: "documentUpload",
                textTranslate: "textTranslate"
            }[e] || e) + "." + {
                "DocHistory~termBank": "9e706000",
                DocHistory: "088ee13f",
                termBank: "c6a579d8",
                NoLogin: "398de8b3",
                Person: "7ee97462",
                aiTranslate: "31d6cfe0",
                "documentUpload~textTranslate": "533fbc84",
                documentUpload: "6f7684e7",
                textTranslate: "b3929e30"
            }[e] + ".css", c = s.p + n, i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
                var l = i[r]
                  , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === n || d === c))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (r = 0; r < u.length; r++) {
                l = u[r],
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
                  , i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.request = n,
                delete a[e],
                m.parentNode.removeChild(m),
                o(i)
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
                var i = new Promise((function(t, o) {
                    n = c[e] = [t, o]
                }
                ));
                t.push(n[2] = i);
                var l, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                s.nc && d.setAttribute("nonce", s.nc),
                d.src = r(e);
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
    i.push([0, "chunk-vendors"]),
    // o()
        pk = s;
}
)({
});