const wp = require('./webpackage')

var form = {};
window = global;

function Po(e) {
            var t = e=>e ? function(t) {
                e({
                    data: t || {},
                    code: 1e3,
                    from: "net"
                })
            }
            : null;
            const o = 'fsdsogkndfokasodnaso';
            var n = e.data.domain ? {
                domain: e.data.domain
            } : {};
            Mo["a"].getTextTranslateResult(Object(Io["a"])(Object(Io["a"])({
                i: e.data.keyword,
                from: e.data.from,
                to: e.data.to
            }, n), {}, {
                dictResult: !0,
                keyid: "webfanyi"
            }), o).then(o=>{
                Mo["a"].cancelLastGpt();
                const n = Mo["a"].decodeData(o, Ko["a"].state.text.decodeKey, Ko["a"].state.text.decodeIv)
                  , a = n ? JSON.parse(n) : {};
                0 === a.code ? e.success && t(e.success)(a) : e.fail && t(e.fail)(a)
            }
            ).catch(o=>{
                e.fail && t(e.fail)({
                    online: !1
                })
            }
            )
        }

        var e={};
    e.data= {
        "keyword": "5ho",
        "from": "auto",
        "to": "",
        "keyfrom": "deskdict.main",
        "domain": "0"
    }
console.log(Po(e));

