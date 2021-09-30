(() => {
    "use strict";
    var t, e, r = function(t) {
            t.style.opacity = "20%"
        },
        n = function(t) {
            var e = function() {
                    var t = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.in-quiz > div.screen.screen-game > div.transitioner.transitioner-component > div > div > div > div > div > div.options-container > div");
                    if (!t) throw new Error("LỖI! Không thể truy xuất phần tử danh sách câu hỏi!");
                    return t
                }(),
                n = Array.prototype.slice.call(e.children);
            if (Array.isArray(t.structure.answer) && t.structure.answer.length < 1 && t.structure.options) {
                var o = t.structure.options.map((function(t) {
                    return t.text
                })).join(" or ");
                alert(o)
            } else n.filter((function(e) {
                return Array.isArray(t.structure.answer) && t.structure.answer.length > 0 ? !t.structure.answer.some((function(t) {
                    return e.__vue__.optionData.actualIndex === t
                })) : "number" == typeof t.structure.answer ? e.__vue__.optionData.actualIndex !== t.structure.answer : void console.error("LỖI! Nhận dạng câu hỏi gặp sự cố!", t)
            })).forEach(r)
        },
        o = function() {
            var t = document.querySelector("body > div");
            if (!t) throw new Error("LỖI! Không thể truy xuất đối tượng gốc");
            return t.__vue__.$store._vm._data.$$state.game.data.roomHash
        };
    e = function() {
        var t, e;
        return function(t, e) {
            var r, n, o, a, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function u(a) {
                return function(u) {
                    return function(a) {
                        if (r) throw new TypeError("LỖI! Tool hack đang chạy rùi mà? :");
                        for (; i;) try {
                            if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                            switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, n = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < o[1]) {
                                        i.label = o[1], o = a;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(a);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            a = e.call(t, i)
                        } catch (t) {
                            a = [6, t], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        }(this, (function(r) {
            switch (r.label) {
                case 0:
                    return console.log("%c \n    Hack Quizizz version 0.1.0 - Tiếng Việt  \n    Tạo bởi Hồ Anh Tuấn! \n        ", "color: red;"), [4, fetch("https://quizizz.com/api/main/game/" + o())];
                case 1:
                    return [4, r.sent().json()];
                case 2:
                    return t = r.sent(), e = void 0, setInterval((function() {
                        var r = function() {
                            var t = document.querySelector("body > div");
                            if (!t) throw new Error("LỖI! Không thể truy xuất đối tượng gốc!");
                            var e = t.__vue__;
                            return {
                                roomHash: e.$store._vm._data.$$state.game.data.roomHash,
                                playerId: e.$store._vm._data.$$state.game.player.playerId,
                                quizID: e.$store._vm._data.$$state.game.data.quizId,
                                roomCode: e.$store._vm._data.$$state.game.data.roomCode,
                                questionID: e.$store._vm._data.$$state.game.questions.currentId
                            }
                        }();
                        if (r.questionID !== e)
                            for (var o = 0, a = t.data.questions; o < a.length; o++) {
                                var i = a[o];
                                r.questionID === i._id && (console.log({
                                    q: i
                                }), n(i), e = r.questionID)
                            }
                    }), 500), [2]
            }
        }))
    }, new((t = void 0) || (t = Promise))((function(r, n) {
        function o(t) {
            try {
                i(e.next(t))
            } catch (t) {
                n(t)
            }
        }

        function a(t) {
            try {
                i(e.throw(t))
            } catch (t) {
                n(t)
            }
        }

        function i(e) {
            var n;
            e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t((function(t) {
                t(n)
            }))).then(o, a)
        }
        i((e = e.apply(void 0, [])).next())
    }))
})();
