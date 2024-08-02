(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-CourseList-CourseList"], {
    "005c": function(t, e, i) {
        "use strict";
        (function(t) {
            var s = i("4ea4");
            i("b680"),
            i("e25e"),
            i("ac1f"),
            i("5319"),
            i("1276"),
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = void 0;
            var a = s(i("ef15"))
              , o = {
                components: {
                    cmdCircle: a.default
                },
                data: function() {
                    return {
                        currentTime: 0,
                        initial_time: 0,
                        video_real_time: 0,
                        nitial_time: "",
                        Appraise: "",
                        isShowAppraise: !1,
                        iscomplete: !0,
                        isShow: !1,
                        type: "",
                        navigateFlag: !1,
                        getData: {
                            course_id: 0
                        },
                        isVideo: !1,
                        showprogress: !1,
                        ico: "",
                        time: "",
                        timelong: 0,
                        lastposition: 0,
                        state: "",
                        nowvideotitle: "",
                        t: null,
                        isStart: !1,
                        isscreen: !1,
                        autoplay: !1,
                        progress: 0,
                        videoIndex: 0,
                        courseListIndex: 0,
                        videoLen: 0,
                        videoSrc: "",
                        poster: "http://workertrain.hnjsrcw.com/h5/static/v.jpg",
                        CustomBar: this.CustomBar,
                        TabCur: 0,
                        avatar: ["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg", "https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg", "https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg", "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],
                        tabNav: ["观看课件"],
                        course: {
                            instro: "工种培训学习包括公共知识、理论知识和操作技能三部分，公共知识、理论知识培训学习采用线上自主学习，操作技能培训学习采用企业项目现场以工代训的形式进行，本标准适用于管道工中级工培训学习。公共知识有职业道德素养、法律法规常识和安全生产常识三个模块，每个模块后附测试题，即学即测，答对测试题计分，每个模块满分15分，12分为合格。理论知识每个学习模块后面附测试题，即学即测，答对测试题计分，满分100分，累计90分为合格。操作技能训练采用每个技能点即训即测的形式，由企业师傅、班组长组织实施，留影像资料存档，培训服务单位不定期抽查，满分100分，所有技能点累计积分，90分为合格。"
                        },
                        WareList: {
                            err_code: 200,
                            err_msg: "success",
                            data: {
                                is_exist_questions: "",
                                ware_id: 0,
                                ware_type_id: "0",
                                ware_name: "",
                                ware_url: "",
                                ware_url2: "",
                                ware_doc_url: "",
                                time_long: 0,
                                ware_desc: "",
                                preview_img: null,
                                teacher_name: "",
                                course_name: "",
                                course_desc: "",
                                videos: [{
                                    order_no: 1,
                                    preview_img: null,
                                    time_long: 10,
                                    video_id: 3,
                                    video_url: "http://cdn3.hnjsrcw.com/workertrain/20200190/1-1.mp4"
                                }, {
                                    order_no: 2,
                                    preview_img: null,
                                    time_long: 10,
                                    video_id: 3,
                                    video_url: "http://cdn3.hnjsrcw.com/workertrain/20200190/1-2.mp4"
                                }]
                            }
                        },
                        courseInfoList: {
                            err_code: 0,
                            err_msg: "",
                            course_id: 0,
                            course_name: "",
                            course_desc: "",
                            teacher_name: "",
                            data: [{
                                ware_id: 0,
                                ware_name: "",
                                ware_desc: "",
                                ware_url: "",
                                v_cnt: 0,
                                ware_doc_url: "",
                                preview_img: null,
                                test_score: null,
                                test_state: "",
                                playstate: "",
                                study_state: "Y"
                            }]
                        },
                        usestudyinfoList: {
                            data: {
                                ask_time_long: 0,
                                study_time_long: 0,
                                study_state: "Y",
                                unit: "second"
                            }
                        }
                    }
                },
                onLoad: function(t) {
                    if (this.type = this.$Type.TypeObj.type,
                    uni.showLoading({
                        title: "加载中..."
                    }),
                    "object" === typeof t)
                        try {
                            this.getData = t
                        } catch (e) {}
                },
                onReady: function() {
                    this.videoContext = uni.createVideoContext("myVideo1"),
                    this.initial_time = 10
                },
                onShow: function() {
                    this.showprogress || this.getCourseInfo()
                },
                methods: {
                    stopPlay: function() {
                        this.showprogress = !1,
                        clearInterval(this.t),
                        clearTimeout(this.t),
                        this.t = null,
                        t("log", "stop", " at pages/CourseList/CourseList.vue:293")
                    },
                    tabSelect: function(t) {
                        this.TabCur = t.currentTarget.dataset.id,
                        this.scrollLeft = 60 * (t.currentTarget.dataset.id - 1)
                    },
                    getCourseInfo: function() {
                        var e = this;
                        this.$trainapi.call("/Study/UserCoursewareList/" + this.type + "?course_id=" + e.getData.course_id, {}).then((function(i) {
                            if (200 == i.err_code) {
                                e.iscomplete = !0,
                                e.courseInfoList = i,
                                e.Appraise = i.Appraise,
                                t("log", e.Appraise, " at pages/CourseList/CourseList.vue:308");
                                for (var s = 0; s < e.courseInfoList.data.length; s++)
                                    t("log", e.courseInfoList.data[s].study_state, " at pages/CourseList/CourseList.vue:310"),
                                    "W" != e.courseInfoList.data[s].study_state && (e.iscomplete = !1);
                                t("log", e.iscomplete, " at pages/CourseList/CourseList.vue:316"),
                                t("log", e.Appraise, " at pages/CourseList/CourseList.vue:317"),
                                e.iscomplete && "" == e.Appraise ? (e.isShowAppraise = !0,
                                e.gotoAppraise()) : (t("log", i.Appraise, " at pages/CourseList/CourseList.vue:322"),
                                uni.hideLoading())
                            } else
                                uni.showModal({
                                    title: "错误",
                                    content: i.err_msg,
                                    showCancel: !1
                                }),
                                t("log", i, " at pages/CourseList/CourseList.vue:337")
                        }
                        ))
                    },
                    gotoAppraise: function() {
                        uni.navigateTo({
                            url: "../Appraise/Appraise?course_id=" + this.courseInfoList.course_id
                        })
                    },
                    playState: function() {
                        for (var t = 0; t < this.courseInfoList.data.length; t++)
                            this.courseInfoList.data[t].playstate = "";
                        this.courseInfoList.data[this.courseListIndex].playstate = "正在播放 第" + (parseInt(this.videoIndex) + 1) + "节",
                        this.$forceUpdate(),
                        this.nowvideotitle = this.courseInfoList.data[this.courseListIndex].ware_name,
                        this.t = setTimeout(this.updateTime, 5e3),
                        this.showprogress = !0,
                        uni.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        })
                    },
                    updateTime: function() {
                        var t = this;
                        this.$Type.TypeObj.type;
                        this.$trainapi.call("/Study/SaveUserPlayPosition/" + this.type + "?ware_id=" + this.WareList.ware_id + "&currentTime=" + t.currentTime, {}).then((function(e) {
                            200 == e.err_code ? (t.usestudyinfoList.data = e.data,
                            "W" == e.data.state ? (t.getCourseInfo(),
                            clearTimeout(t.t),
                            t.progress = 100,
                            t.courseInfoList.data[t.courseListIndex].study_state = "W") : (t.progress = Math.round(100 * (e.data.study_time_long / e.data.ask_time_long).toFixed(2)),
                            t.t = setTimeout(t.updateTime, 6e4))) : uni.showModal({
                                title: "错误",
                                content: e.err_msg,
                                showCancel: !1
                            })
                        }
                        ))
                    },
                    goPlayS: function(e, i) {
                        this.isVideo = !1;
                        for (var s = 0; s < this.courseInfoList.data.length; s++)
                            this.courseInfoList.data[s].playstate = "";
                        var a = this;
                        this.$trainapi.call("/Study/CoursewareDetail/" + this.type + "?ware_id=" + a.courseInfoList.data[e].ware_id, {}).then((function(s) {
                            200 == s.err_code ? (a.WareList = s.data,
                            a.courseListIndex = e,
                            a.videoIndex = 0,
                            a.videoSrc = a.WareList.videos[a.videoIndex].video_url + "?ali_audio_only=1",
                            i && (a.autoplay = !0,
                            a.videoContext.play(),
                            a.playState()),
                            a.poster = "http://workertrain.hnjsrcw.com/h5/static/s.jpg") : t("log", s.data, " at pages/CourseList/CourseList.vue:427")
                        }
                        ))
                    },
                    goPlay: function(e, i) {
                        this.isVideo = !0;
                        for (var s = 0; s < this.courseInfoList.data.length; s++)
                            this.courseInfoList.data[s].playstate = "";
                        var a = this;
                        this.$trainapi.call("/Study/CoursewareDetail/" + this.type + "?ware_id=" + a.courseInfoList.data[e].ware_id, {}).then((function(s) {
                            if (200 == s.err_code) {
                                if (t("log", s.data, " at pages/CourseList/CourseList.vue:441"),
                                s.data.is_courseDoc) {
                                    var o = {
                                        doc_title: s.data.WARE_NAME,
                                        doc_url: "http://cdn3.hnjsrcw.com/" + s.data.ware_doc_url.replace("play/pdf/viewer", "web/viewer")
                                    };
                                    t("log", o, " at pages/CourseList/CourseList.vue:449"),
                                    uni.navigateTo({
                                        url: "../showp/showp?query=" + encodeURIComponent(JSON.stringify(o))
                                    })
                                }
                                t("log", s.data.is_courseDoc, " at pages/CourseList/CourseList.vue:454"),
                                a.WareList = s.data,
                                a.courseListIndex = e,
                                a.videoIndex = 0,
                                a.videoSrc = a.WareList.video_url,
                                a.initial_time = s.data.LAST_POSITION,
                                i && (a.autoplay = !0,
                                a.videoContext.play(),
                                a.playState()),
                                a.poster = a.WareList.video_url
                            } else if (101 == s.err_code)
                                return void uni.showModal({
                                    title: "错误",
                                    content: s.err_msg,
                                    showCancel: !1
                                })
                        }
                        ))
                    },
                    openPDF: function(e) {
                        var i = {
                            doc_title: this.courseInfoList.course_name,
                            doc_url: "http://cdn3.hnjsrcw.com/" + this.courseInfoList.data[e].ware_doc_url.replace("play/pdf/viewer", "web/viewer")
                        };
                        t("log", i, " at pages/CourseList/CourseList.vue:496"),
                        uni.navigateTo({
                            url: "../showp/showp?query=" + encodeURIComponent(JSON.stringify(i))
                        })
                    },
                    endTime: function() {
                        this.videoLen = this.courseInfoList.data[this.courseListIndex].v_cnt,
                        this.videoIndex + 1 < this.videoLen ? (t("log", this.videoIndex, " at pages/CourseList/CourseList.vue:507"),
                        this.videoIndex = this.videoIndex + 1,
                        t("log", this.videoIndex, " at pages/CourseList/CourseList.vue:509"),
                        this.videoSrc = this.WareList.videos[this.videoIndex].video_url) : this.courseInfoList.data[this.courseListIndex].playstate = "本模块已播放完毕"
                    },
                    openPage: function(t) {
                        "W" == this.courseInfoList.data[t].study_state ? uni.navigateTo({
                            url: "../paper/paper?ware_id=" + this.courseInfoList.data[t].ware_id + "&course_name=" + this.courseInfoList.course_name
                        }) : uni.showToast({
                            title: "该模块视频学习未完成，请继续学习！",
                            icon: "none"
                        })
                    },
                    timeUpdate: function(t) {
                        var e = 1
                          , i = this
                          , s = (t.detail.duration,
                        parseInt(t.detail.currentTime));
                        if (0 == i.video_real_time)
                            var a = parseInt(i.initial_time) + parseInt(i.video_real_time);
                        else
                            a = parseInt(i.video_real_time);
                        if (1 == e && s > a && s - a > 3) {
                            var o = wx.createVideoContext("myVideo1");
                            o.seek(i.video_real_time),
                            wx.showToast({
                                title: "未完整看完该视频，不能快进",
                                icon: "none",
                                duration: 2e3
                            })
                        }
                        i.video_real_time = s,
                        i.currentTime = s
                    },
                    returnarr: function(t) {
                        return t.split(",")
                    }
                }
            };
            e.default = o
        }
        ).call(this, i("0de9")["log"])
    },
    "01c6": function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("3d97")
          , a = i("8f58");
        for (var o in a)
            "default" !== o && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(o);
        i("317e");
        var n, r = i("f0c5"), c = Object(r["a"])(a["default"], s["b"], s["c"], !1, null, "74a1f43a", null, !1, s["a"], n);
        e["default"] = c.exports
    },
    "317e": function(t, e, i) {
        "use strict";
        var s = i("ad84")
          , a = i.n(s);
        a.a
    },
    "3d97": function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return a
        }
        )),
        i.d(e, "c", (function() {
            return o
        }
        )),
        i.d(e, "a", (function() {
            return s
        }
        ));
        var s = {
            cmdCircle: i("ef15").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-uni-view", [i("cu-custom", {
                attrs: {
                    bgColor: "bg-orange",
                    isBack: !0
                }
            }, [i("template", {
                attrs: {
                    slot: "backText"
                },
                slot: "backText"
            }, [t._v("返回")]), i("template", {
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [t._v(t._s(t.courseInfoList.course_name))])], 2), i("v-uni-view", {
                staticClass: "cu-card case no-card "
            }, [i("v-uni-view", {
                staticClass: "cu-item shadow bg-orange"
            }, [i("v-uni-video", {
                attrs: {
                    src: t.videoSrc,
                    poster: t.poster,
                    muted: !1,
                    autoplay: t.autoplay,
                    playsinline: "true",
                    "webkit-playsinline": "true",
                    "x5-playsinline": "true",
                    "x5-video-player-type": "h5-page",
                    "show-fullscreen-btn": "true",
                    id: "myVideo1",
                    "show-progress": !0,
                    controls: !0,
                    "enable-progress-gesture": !1,
                    "initial-time": t.initial_time,
                    title: t.courseInfoList.course_name
                },
                on: {
                    ended: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.endTime()
                    },
                    stop: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.stopPlay()
                    },
                    pause: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.stopPlay()
                    },
                    play: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.playState()
                    },
                    timeupdate: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.timeUpdate.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                staticClass: "cu-list menu-avatar"
            }, [i("v-uni-view", {
                staticClass: "cu-item"
            }, [i("v-uni-view", {
                staticClass: "cu-avatar round lg",
                class: t.showprogress && t.isVideo ? "m-load" : "",
                staticStyle: {
                    "background-image": "url('/h5/static/kc.png')"
                }
            }), i("v-uni-view", {
                staticClass: "content flex-sub"
            }, [i("v-uni-view", {
                staticClass: "text-grey"
            }, [t._v(t._s("" == t.nowvideotitle ? t.courseInfoList.course_name : t.nowvideotitle))])], 1), t.showprogress ? i("v-uni-view", {
                staticClass: "flex "
            }, [i("v-uni-view", {
                staticClass: "text-grey"
            }, [i("cmd-circle", {
                attrs: {
                    cid: "circle10",
                    type: "circle",
                    percent: t.progress
                }
            })], 1)], 1) : t._e()], 1)], 1)], 1)], 1), i("v-uni-scroll-view", {
                staticClass: "bg-orange nav text-center text-black",
                style: [{
                    top: t.CustomBar + "px"
                }],
                attrs: {
                    "scroll-x": !0
                }
            }, t._l(t.tabNav, (function(e, s) {
                return i("v-uni-view", {
                    key: s,
                    staticClass: "cu-item",
                    class: s == t.TabCur ? "text-white cur" : "text-white",
                    attrs: {
                        "data-id": s
                    },
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.tabSelect.apply(void 0, arguments)
                        }
                    }
                }, [t._v(t._s(t.tabNav[s]))])
            }
            )), 1), 0 == t.TabCur ? ["0" != t.courseInfoList.err_code ? i("v-uni-view", {
                staticClass: "bg-white"
            }, t._l(t.courseInfoList.data, (function(e, s) {
                return i("v-uni-view", {
                    key: s,
                    staticClass: "listCourse"
                }, [i("v-uni-view", {
                    staticClass: "cu-bar solid-bottom light  bg-gray",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.goPlay(s, !0)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "action"
                }, [i("v-uni-text", {
                    staticClass: "cuIcon-title",
                    class: "W" == e.study_state ? "text-green" : "text-yellow"
                }), t._v(t._s(e.ware_name) + " 学习：" + t._s("W" == e.study_state ? "已完成" : "未完成"))], 1)], 1), i("v-uni-view", {
                    staticClass: "cu-list menu",
                    staticStyle: {
                        display: "none"
                    }
                }, [i("v-uni-view", {
                    staticClass: "grid  text-center col-2 margin-top course-btn-box",
                    attrs: {
                        "flex-warp": !0
                    }
                }, [i("v-uni-view", [i("v-uni-button", {
                    staticClass: "cu-btn round line-brown shadow",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.openPDF(s)
                        }
                    }
                }, [i("v-uni-text", {
                    staticClass: "cuIcon-file"
                }), t._v("打开课件")], 1)], 1), i("v-uni-view", [i("v-uni-button", {
                    staticClass: "cu-btn round line-brown  shadow",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.goPlay(s, !0)
                        }
                    }
                }, [i("v-uni-text", {
                    staticClass: "cuIcon-playfill"
                }), t._v("播放视频" + t._s(e.v_cnt))], 1)], 1)], 1), i("v-uni-view", {
                    staticClass: "cu-item",
                    staticStyle: {
                        display: "none"
                    }
                }, [i("v-uni-view", {
                    staticClass: "content text-center "
                }, [t._v("学习：" + t._s("W" == e.study_state ? "已完成" : "未完成"))])], 1)], 1)], 1)
            }
            )), 1) : t._e()] : t._e(), 2 == t.TabCur ? ["0" != t.courseInfoList.err_code ? i("v-uni-view", {
                staticClass: "bg-white"
            }, [i("v-uni-view", {
                staticClass: "videolist  padding"
            }, [i("v-uni-view", {
                staticClass: "cu-list menu-avatar "
            }, t._l(t.courseInfoList.data, (function(e, s) {
                return i("v-uni-view", {
                    key: s,
                    staticClass: "cu-item",
                    class: t.courseListIndex == s ? "text-brown" : "",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.goPlayS(s, !0)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "cu-avatar radius lg",
                    class: t.showprogress && !t.isVideo && t.courseListIndex == s ? "m-load" : "",
                    staticStyle: {
                        "background-image": "url(../../static/ting.jpg)"
                    }
                }), i("v-uni-view", {
                    staticClass: "content"
                }, [i("v-uni-view", [t._v(t._s(e.ware_name))]), i("v-uni-view", [t._v(t._s(e.playstate))])], 1), i("v-uni-view", {
                    staticClass: "action"
                }, [t._v(t._s(e.v_cnt) + "节")])], 1)
            }
            )), 1)], 1)], 1) : t._e()] : t._e()], 2)
        }
          , o = []
    },
    4603: function(t, e, i) {
        var s = i("24fb");
        e = s(!1),
        e.push([t.i, ".cmd-circle[data-v-39e75250]{display:inline-block;box-sizing:border-box;list-style:none;margin:0;padding:0}", ""]),
        t.exports = e
    },
    6118: function(t, e, i) {
        "use strict";
        i("99af"),
        i("caad"),
        i("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var s = {
            name: "cmd-circle",
            props: {
                cid: {
                    type: String,
                    default: "defaultCanvas"
                },
                type: {
                    type: String,
                    validator: function(t) {
                        return ["circle", "dashboard"].includes(t)
                    },
                    default: "circle"
                },
                percent: {
                    type: Number,
                    validator: function(t) {
                        return t >= 0 && t <= 100
                    },
                    default: 0
                },
                showInfo: {
                    type: Boolean,
                    default: !0
                },
                fontColor: {
                    type: String,
                    default: "#595959"
                },
                fontSize: {
                    type: Number,
                    default: 14
                },
                status: {
                    type: String,
                    validator: function(t) {
                        return ["normal", "success", "exception"].includes(t)
                    },
                    default: "normal"
                },
                strokeWidth: {
                    type: Number,
                    default: 2
                },
                strokeColor: {
                    type: String,
                    default: ""
                },
                strokeBackground: {
                    type: String,
                    default: "#eeeeee"
                },
                strokeShape: {
                    type: String,
                    validator: function(t) {
                        return ["round", "square"].includes(t)
                    },
                    default: "round"
                },
                width: {
                    type: Number,
                    default: 40
                },
                gapDegree: {
                    type: Number,
                    validator: function(t) {
                        return t >= 0 && t <= 360
                    },
                    default: 360
                },
                gapPosition: {
                    type: String,
                    validator: function(t) {
                        return ["top", "bottom", "left", "right"].includes(t)
                    },
                    default: "top"
                }
            },
            data: function() {
                return {
                    ctx: {},
                    width2px: ""
                }
            },
            computed: {
                calCircleStyle: function() {
                    return "width: ".concat(this.width, "px;\n\t\t\t\theight: ").concat(this.width, "px;")
                },
                calStatus: function() {
                    var t = {};
                    switch (this.status) {
                    case "normal":
                        t = {
                            color: "#1890ff",
                            value: 1
                        };
                        break;
                    case "success":
                        t = {
                            color: "#52c41a",
                            value: 2
                        };
                        break;
                    case "exception":
                        t = {
                            color: "#f5222d",
                            value: 3
                        };
                        break
                    }
                    return t
                },
                calGapDegree: function() {
                    return this.gapDegree <= 0 ? 360 : this.gapDegree
                },
                calGapPosition: function() {
                    var t = 0;
                    switch (this.gapPosition) {
                    case "bottom":
                        t = 90;
                        break;
                    case "left":
                        t = 180;
                        break;
                    case "top":
                        t = 270;
                        break;
                    case "right":
                        t = 360;
                        break
                    }
                    return t
                }
            },
            watch: {
                percent: function(t) {
                    this.drawStroke(t)
                }
            },
            mounted: function() {
                var t = this;
                this.ctx = uni.createCanvasContext(this.cid, this),
                this.width2px = uni.upx2px(this.width),
                this.$nextTick((function() {
                    t.drawStroke(t.percent)
                }
                ))
            },
            methods: {
                drawStroke: function(t) {
                    t = t >= 100 ? 100 : t < 0 ? 0 : t;
                    var e = this.strokeColor || this.calStatus.color;
                    if (this.showInfo)
                        switch (this.calStatus.value) {
                        case 1:
                            t >= 100 ? (this.drawSuccess(),
                            t = 100,
                            e = "#52c41a") : this.drawText(t);
                            break;
                        case 2:
                            this.drawSuccess(),
                            t = 100,
                            e = "#52c41a";
                            break;
                        case 3:
                            this.drawException(),
                            t = 0,
                            e = "#f5222d";
                            break;
                        default:
                            break
                        }
                    var i = this.calGapPosition
                      , s = this.calGapDegree;
                    "dashboard" === this.type && (i = 135,
                    s = 270),
                    this.ctx.setLineCap(this.strokeShape),
                    this.ctx.setLineWidth(this.strokeWidth),
                    this.ctx.translate(this.width2px, this.width2px),
                    this.ctx.rotate(i * Math.PI / 180),
                    this.ctx.beginPath(),
                    this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, s * Math.PI / 180),
                    this.ctx.setStrokeStyle(this.strokeBackground),
                    this.ctx.stroke(),
                    this.ctx.beginPath(),
                    this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, t * s * Math.PI / 18e3),
                    this.ctx.setStrokeStyle(e),
                    this.ctx.stroke(),
                    this.ctx.draw()
                },
                drawText: function(t) {
                    this.ctx.beginPath(),
                    this.ctx.setFontSize(this.fontSize),
                    this.ctx.setFillStyle(this.fontColor),
                    this.ctx.setTextAlign("center"),
                    this.ctx.fillText("".concat(t, "%"), this.width2px, this.width2px + this.fontSize / 2),
                    this.ctx.stroke()
                },
                drawSuccess: function() {
                    var t = this.width2px - this.fontSize / 2
                      , e = this.width2px + this.fontSize / 2;
                    this.ctx.beginPath(),
                    this.ctx.setLineCap("round"),
                    this.ctx.setLineWidth(this.fontSize / 4),
                    this.ctx.moveTo(this.width2px, e),
                    this.ctx.lineTo(e, t),
                    this.ctx.moveTo(this.width2px, e),
                    this.ctx.lineTo(t, this.width2px),
                    this.ctx.setStrokeStyle("#52c41a"),
                    this.ctx.stroke()
                },
                drawException: function() {
                    var t = this.width2px - this.fontSize / 2
                      , e = this.width2px + this.fontSize / 2;
                    this.ctx.beginPath(),
                    this.ctx.setLineCap("round"),
                    this.ctx.setLineWidth(this.fontSize / 4),
                    this.ctx.moveTo(t, t),
                    this.ctx.lineTo(e, e),
                    this.ctx.moveTo(e, t),
                    this.ctx.lineTo(t, e),
                    this.ctx.setStrokeStyle("#f5222d"),
                    this.ctx.stroke()
                }
            }
        };
        e.default = s
    },
    "7f18": function(t, e, i) {
        var s = i("4603");
        "string" === typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
        var a = i("4f06").default;
        a("6fe10fc8", s, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "81cf": function(t, e, i) {
        "use strict";
        var s;
        i.d(e, "b", (function() {
            return a
        }
        )),
        i.d(e, "c", (function() {
            return o
        }
        )),
        i.d(e, "a", (function() {
            return s
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "cmd-circle"
            }, [i("v-uni-canvas", {
                style: t.calCircleStyle,
                attrs: {
                    "canvas-id": t.cid
                }
            })], 1)
        }
          , o = []
    },
    "8f58": function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("005c")
          , a = i.n(s);
        for (var o in s)
            "default" !== o && function(t) {
                i.d(e, t, (function() {
                    return s[t]
                }
                ))
            }(o);
        e["default"] = a.a
    },
    ad84: function(t, e, i) {
        var s = i("e901");
        "string" === typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
        var a = i("4f06").default;
        a("e27f09de", s, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c7d0: function(t, e, i) {
        "use strict";
        var s = i("7f18")
          , a = i.n(s);
        a.a
    },
    c97b: function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("6118")
          , a = i.n(s);
        for (var o in s)
            "default" !== o && function(t) {
                i.d(e, t, (function() {
                    return s[t]
                }
                ))
            }(o);
        e["default"] = a.a
    },
    e901: function(t, e, i) {
        var s = i("24fb");
        e = s(!1),
        e.push([t.i, ".instro[data-v-74a1f43a]{line-height:150%;text-indent:2em}.videolist[data-v-74a1f43a]{line-height:150%;text-indent:2em}.cu-list .content[data-v-74a1f43a]{text-indent:0}.nav[data-v-74a1f43a]{font-size:calc(120%)}uni-video[data-v-74a1f43a]{width:100%}.gzbz[data-v-74a1f43a]{position:absolute;right:10px;top:5px}.course-btn-box[data-v-74a1f43a]{padding-bottom:%?15?%;border-bottom:1px solid #ebebeb}@-webkit-keyframes load-data-v-74a1f43a{100%{-webkit-transform:rotate(1turn)}}.m-load[data-v-74a1f43a]{-webkit-animation:load-data-v-74a1f43a 3.8s linear infinite;animation:load-data-v-74a1f43a 3.8s linear infinite}.list-mk[data-v-74a1f43a]{display:none;visibility:hidden}", ""]),
        t.exports = e
    },
    ef15: function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("81cf")
          , a = i("c97b");
        for (var o in a)
            "default" !== o && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(o);
        i("c7d0");
        var n, r = i("f0c5"), c = Object(r["a"])(a["default"], s["b"], s["c"], !1, null, "39e75250", null, !1, s["a"], n);
        e["default"] = c.exports
    }
}]);
