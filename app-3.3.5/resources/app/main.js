/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      9e3: (e, t, r) => {
        var n = {};
        (e.exports = n), (n.themes = {});
        var o = r(3837),
          i = (n.styles = r(8093)),
          s = Object.defineProperties,
          a = new RegExp(/[\r\n]+/g);
        (n.supportsColor = r(3969).supportsColor),
          void 0 === n.enabled && (n.enabled = !1 !== n.supportsColor()),
          (n.enable = function () {
            n.enabled = !0;
          }),
          (n.disable = function () {
            n.enabled = !1;
          }),
          (n.stripColors = n.strip =
            function (e) {
              return ("" + e).replace(/\x1B\[\d+m/g, "");
            }),
          (n.stylize = function (e, t) {
            if (!n.enabled) return e + "";
            var r = i[t];
            return !r && t in n ? n[t](e) : r.open + e + r.close;
          });
        var l = /[|\\{}()[\]^$+*?.]/g;
        function c(e) {
          var t = function e() {
            return h.apply(e, arguments);
          };
          return (t._styles = e), (t.__proto__ = f), t;
        }
        var u,
          d =
            ((u = {}),
            (i.grey = i.gray),
            Object.keys(i).forEach(function (e) {
              (i[e].closeRe = new RegExp(
                (function (e) {
                  if ("string" != typeof e)
                    throw new TypeError("Expected a string");
                  return e.replace(l, "\\$&");
                })(i[e].close),
                "g"
              )),
                (u[e] = {
                  get: function () {
                    return c(this._styles.concat(e));
                  },
                });
            }),
            u),
          f = s(function () {}, d);
        function h() {
          var e = Array.prototype.slice.call(arguments),
            t = e
              .map(function (e) {
                return null != e && e.constructor === String ? e : o.inspect(e);
              })
              .join(" ");
          if (!n.enabled || !t) return t;
          for (
            var r = -1 != t.indexOf("\n"), s = this._styles, l = s.length;
            l--;

          ) {
            var c = i[s[l]];
            (t = c.open + t.replace(c.closeRe, c.open) + c.close),
              r &&
                (t = t.replace(a, function (e) {
                  return c.close + e + c.open;
                }));
          }
          return t;
        }
        n.setTheme = function (e) {
          if ("string" != typeof e)
            for (var t in e)
              !(function (t) {
                n[t] = function (r) {
                  if ("object" == typeof e[t]) {
                    var o = r;
                    for (var i in e[t]) o = n[e[t][i]](o);
                    return o;
                  }
                  return n[e[t]](r);
                };
              })(t);
          else
            console.log(
              "colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));"
            );
        };
        var p = function (e, t) {
          var r = t.split("");
          return (r = r.map(e)).join("");
        };
        for (var m in ((n.trap = r(1158)),
        (n.zalgo = r(7452)),
        (n.maps = {}),
        (n.maps.america = r(6315)(n)),
        (n.maps.zebra = r(1397)(n)),
        (n.maps.rainbow = r(6538)(n)),
        (n.maps.random = r(5044)(n)),
        n.maps))
          !(function (e) {
            n[e] = function (t) {
              return p(n.maps[e], t);
            };
          })(m);
        s(
          n,
          (function () {
            var e = {};
            return (
              Object.keys(d).forEach(function (t) {
                e[t] = {
                  get: function () {
                    return c([t]);
                  },
                };
              }),
              e
            );
          })()
        );
      },
      1158: (e) => {
        e.exports = function (e, t) {
          var r = "";
          e = (e = e || "Run the trap, drop the bass").split("");
          var n = {
            a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
            b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
            c: ["©", "Ȼ", "Ͼ"],
            d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
            e: ["Ë", "ĕ", "Ǝ", "ɘ", "Σ", "ξ", "Ҽ", "੬"],
            f: ["Ӻ"],
            g: ["ɢ"],
            h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
            i: ["༏"],
            j: ["Ĵ"],
            k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
            l: ["Ĺ"],
            m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
            n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
            o: ["Ø", "õ", "ø", "Ǿ", "ʘ", "Ѻ", "ם", "۝", "๏"],
            p: ["Ƿ", "Ҏ"],
            q: ["্"],
            r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
            s: ["§", "Ϟ", "ϟ", "Ϩ"],
            t: ["Ł", "Ŧ", "ͳ"],
            u: ["Ʊ", "Ս"],
            v: ["ט"],
            w: ["Ш", "Ѡ", "Ѽ", "൰"],
            x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
            y: ["¥", "Ұ", "Ӌ"],
            z: ["Ƶ", "ɀ"],
          };
          return (
            e.forEach(function (e) {
              e = e.toLowerCase();
              var t = n[e] || [" "],
                o = Math.floor(Math.random() * t.length);
              r += void 0 !== n[e] ? n[e][o] : e;
            }),
            r
          );
        };
      },
      7452: (e) => {
        e.exports = function (e, t) {
          e = e || "   he is here   ";
          var r = {
              up: [
                "̍",
                "̎",
                "̄",
                "̅",
                "̿",
                "̑",
                "̆",
                "̐",
                "͒",
                "͗",
                "͑",
                "̇",
                "̈",
                "̊",
                "͂",
                "̓",
                "̈",
                "͊",
                "͋",
                "͌",
                "̃",
                "̂",
                "̌",
                "͐",
                "̀",
                "́",
                "̋",
                "̏",
                "̒",
                "̓",
                "̔",
                "̽",
                "̉",
                "ͣ",
                "ͤ",
                "ͥ",
                "ͦ",
                "ͧ",
                "ͨ",
                "ͩ",
                "ͪ",
                "ͫ",
                "ͬ",
                "ͭ",
                "ͮ",
                "ͯ",
                "̾",
                "͛",
                "͆",
                "̚",
              ],
              down: [
                "̖",
                "̗",
                "̘",
                "̙",
                "̜",
                "̝",
                "̞",
                "̟",
                "̠",
                "̤",
                "̥",
                "̦",
                "̩",
                "̪",
                "̫",
                "̬",
                "̭",
                "̮",
                "̯",
                "̰",
                "̱",
                "̲",
                "̳",
                "̹",
                "̺",
                "̻",
                "̼",
                "ͅ",
                "͇",
                "͈",
                "͉",
                "͍",
                "͎",
                "͓",
                "͔",
                "͕",
                "͖",
                "͙",
                "͚",
                "̣",
              ],
              mid: [
                "̕",
                "̛",
                "̀",
                "́",
                "͘",
                "̡",
                "̢",
                "̧",
                "̨",
                "̴",
                "̵",
                "̶",
                "͜",
                "͝",
                "͞",
                "͟",
                "͠",
                "͢",
                "̸",
                "̷",
                "͡",
                " ҉",
              ],
            },
            n = [].concat(r.up, r.down, r.mid);
          function o(e) {
            return Math.floor(Math.random() * e);
          }
          function i(e) {
            var t = !1;
            return (
              n.filter(function (r) {
                t = r === e;
              }),
              t
            );
          }
          return (function (e, t) {
            var n,
              s,
              a = "";
            for (s in (((t = t || {}).up = void 0 === t.up || t.up),
            (t.mid = void 0 === t.mid || t.mid),
            (t.down = void 0 === t.down || t.down),
            (t.size = void 0 !== t.size ? t.size : "maxi"),
            (e = e.split(""))))
              if (!i(s)) {
                switch (
                  ((a += e[s]), (n = { up: 0, down: 0, mid: 0 }), t.size)
                ) {
                  case "mini":
                    (n.up = o(8)), (n.mid = o(2)), (n.down = o(8));
                    break;
                  case "maxi":
                    (n.up = o(16) + 3),
                      (n.mid = o(4) + 1),
                      (n.down = o(64) + 3);
                    break;
                  default:
                    (n.up = o(8) + 1), (n.mid = o(6) / 2), (n.down = o(8) + 1);
                }
                var l = ["up", "mid", "down"];
                for (var c in l)
                  for (var u = l[c], d = 0; d <= n[u]; d++)
                    t[u] && (a += r[u][o(r[u].length)]);
              }
            return a;
          })(e, t);
        };
      },
      6315: (e) => {
        e.exports = function (e) {
          return function (t, r, n) {
            if (" " === t) return t;
            switch (r % 3) {
              case 0:
                return e.red(t);
              case 1:
                return e.white(t);
              case 2:
                return e.blue(t);
            }
          };
        };
      },
      6538: (e) => {
        e.exports = function (e) {
          var t = ["red", "yellow", "green", "blue", "magenta"];
          return function (r, n, o) {
            return " " === r ? r : e[t[n++ % t.length]](r);
          };
        };
      },
      5044: (e) => {
        e.exports = function (e) {
          var t = [
            "underline",
            "inverse",
            "grey",
            "yellow",
            "red",
            "green",
            "blue",
            "white",
            "cyan",
            "magenta",
            "brightYellow",
            "brightRed",
            "brightGreen",
            "brightBlue",
            "brightWhite",
            "brightCyan",
            "brightMagenta",
          ];
          return function (r, n, o) {
            return " " === r
              ? r
              : e[t[Math.round(Math.random() * (t.length - 2))]](r);
          };
        };
      },
      1397: (e) => {
        e.exports = function (e) {
          return function (t, r, n) {
            return r % 2 == 0 ? t : e.inverse(t);
          };
        };
      },
      8093: (e) => {
        var t = {};
        e.exports = t;
        var r = {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          grey: [90, 39],
          brightRed: [91, 39],
          brightGreen: [92, 39],
          brightYellow: [93, 39],
          brightBlue: [94, 39],
          brightMagenta: [95, 39],
          brightCyan: [96, 39],
          brightWhite: [97, 39],
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgGray: [100, 49],
          bgGrey: [100, 49],
          bgBrightRed: [101, 49],
          bgBrightGreen: [102, 49],
          bgBrightYellow: [103, 49],
          bgBrightBlue: [104, 49],
          bgBrightMagenta: [105, 49],
          bgBrightCyan: [106, 49],
          bgBrightWhite: [107, 49],
          blackBG: [40, 49],
          redBG: [41, 49],
          greenBG: [42, 49],
          yellowBG: [43, 49],
          blueBG: [44, 49],
          magentaBG: [45, 49],
          cyanBG: [46, 49],
          whiteBG: [47, 49],
        };
        Object.keys(r).forEach(function (e) {
          var n = r[e],
            o = (t[e] = []);
          (o.open = "[" + n[0] + "m"), (o.close = "[" + n[1] + "m");
        });
      },
      5951: (e) => {
        "use strict";
        e.exports = function (e, t) {
          var r = (t = t || process.argv).indexOf("--"),
            n = /^-{1,2}/.test(e) ? "" : "--",
            o = t.indexOf(n + e);
          return -1 !== o && (-1 === r || o < r);
        };
      },
      3969: (e, t, r) => {
        "use strict";
        var n = r(2037),
          o = r(5951),
          i = process.env,
          s = void 0;
        function a(e) {
          var t = (function (e) {
            if (!1 === s) return 0;
            if (o("color=16m") || o("color=full") || o("color=truecolor"))
              return 3;
            if (o("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return 0;
            var t = n.release().split(".");
            return Number(process.versions.node.split(".")[0]) >= 8 &&
              Number(t[0]) >= 10 &&
              Number(t[2]) >= 10586
              ? Number(t[2]) >= 14931
                ? 3
                : 2
              : 1;
          })(e);
          return (function (e) {
            return (
              0 !== e && {
                level: e,
                hasBasic: !0,
                has256: e >= 2,
                has16m: e >= 3,
              }
            );
          })(t);
        }
        o("no-color") || o("no-colors") || o("color=false")
          ? (s = !1)
          : (o("color") ||
              o("colors") ||
              o("color=true") ||
              o("color=always")) &&
            (s = !0),
          "FORCE_COLOR" in i &&
            (s =
              0 === i.FORCE_COLOR.length || 0 !== parseInt(i.FORCE_COLOR, 10)),
          (e.exports = {
            supportsColor: a,
            stdout: a(process.stdout),
            stderr: a(process.stderr),
          });
      },
      3450: (e, t, r) => {
        var n = r(9e3);
        e.exports = n;
      },
      684: (e) => {
        var t = [],
          r = [],
          n = function () {};
        function o(e) {
          return !~t.indexOf(e) && (t.push(e), !0);
        }
        function i(e) {
          n = e;
        }
        function s(e) {
          for (var r = [], n = 0; n < t.length; n++)
            if (t[n].async) r.push(t[n]);
            else if (t[n](e)) return !0;
          return (
            !!r.length &&
            new Promise(function (t) {
              Promise.all(
                r.map(function (t) {
                  return t(e);
                })
              ).then(function (e) {
                t(e.some(Boolean));
              });
            })
          );
        }
        function a(e) {
          return !~r.indexOf(e) && (r.push(e), !0);
        }
        function l() {
          n.apply(n, arguments);
        }
        function c(e) {
          for (var t = 0; t < r.length; t++) e = r[t].apply(r[t], arguments);
          return e;
        }
        function u(e, t) {
          var r = Object.prototype.hasOwnProperty;
          for (var n in t) r.call(t, n) && (e[n] = t[n]);
          return e;
        }
        function d(e) {
          return (
            (e.enabled = !1),
            (e.modify = a),
            (e.set = i),
            (e.use = o),
            u(function () {
              return !1;
            }, e)
          );
        }
        function f(e) {
          return (
            (e.enabled = !0),
            (e.modify = a),
            (e.set = i),
            (e.use = o),
            u(function () {
              var t = Array.prototype.slice.call(arguments, 0);
              return l.call(l, e, c(t, e)), !0;
            }, e)
          );
        }
        e.exports = function (e) {
          return (
            (e.introduce = u),
            (e.enabled = s),
            (e.process = c),
            (e.modify = a),
            (e.write = l),
            (e.nope = d),
            (e.yep = f),
            (e.set = i),
            (e.use = o),
            e
          );
        };
      },
      9256: (e, t, r) => {
        e.exports = r(5811);
      },
      5811: (e, t, r) => {
        var n = r(684)(function e(t, r) {
          return (
            ((r = r || {}).namespace = t),
            (r.prod = !0),
            (r.dev = !1),
            r.force || e.force ? e.yep(r) : e.nope(r)
          );
        });
        e.exports = n;
      },
      2201: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return (0, i.isAsync)(e)
              ? function (...t) {
                  const r = t.pop();
                  return a(e.apply(this, t), r);
                }
              : (0, n.default)(function (t, r) {
                  var n;
                  try {
                    n = e.apply(this, t);
                  } catch (e) {
                    return r(e);
                  }
                  if (n && "function" == typeof n.then) return a(n, r);
                  r(null, n);
                });
          });
        var n = s(r(6646)),
          o = s(r(5933)),
          i = r(1940);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e, t) {
          return e.then(
            (e) => {
              l(t, null, e);
            },
            (e) => {
              l(t, e && e.message ? e : new Error(e));
            }
          );
        }
        function l(e, t, r) {
          try {
            e(t, r);
          } catch (e) {
            (0, o.default)((e) => {
              throw e;
            }, e);
          }
        }
        e.exports = t.default;
      },
      7931: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = u(r(1771)),
          o = u(r(2325)),
          i = u(r(9622)),
          s = u(r(5498)),
          a = u(r(9485)),
          l = u(r(1940)),
          c = u(r(3171));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e, t, r) {
          r = (0, s.default)(r);
          var n = 0,
            i = 0,
            { length: l } = e,
            c = !1;
          function u(e, t) {
            !1 === e && (c = !0),
              !0 !== c &&
                (e ? r(e) : (++i !== l && t !== o.default) || r(null));
          }
          for (0 === l && r(null); n < l; n++) t(e[n], n, (0, a.default)(u));
        }
        function f(e, t, r) {
          return (0, i.default)(e, 1 / 0, t, r);
        }
        (t.default = (0, c.default)(function (e, t, r) {
          return ((0, n.default)(e) ? d : f)(e, (0, l.default)(t), r);
        }, 3)),
          (e.exports = t.default);
      },
      9622: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = s(r(9925)),
          o = s(r(1940)),
          i = s(r(3171));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.default = (0, i.default)(function (e, t, r, i) {
          return (0, n.default)(t)(e, (0, o.default)(r), i);
        }, 4)),
          (e.exports = t.default);
      },
      1080: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(r(9622)),
          o = i(r(3171));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.default = (0, o.default)(function (e, t, r) {
          return (0, n.default)(e, 1, t, r);
        }, 3)),
          (e.exports = t.default);
      },
      9508: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = a(r(7931)),
          o = a(r(5926)),
          i = a(r(1940)),
          s = a(r(3171));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.default = (0, s.default)(function (e, t, r) {
          return (0, n.default)(e, (0, o.default)((0, i.default)(t)), r);
        }, 3)),
          (e.exports = t.default);
      },
      8463: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t, r, n) {
            let i = !1,
              s = !1,
              a = !1,
              l = 0,
              c = 0;
            function u() {
              l >= t ||
                a ||
                i ||
                ((a = !0),
                e
                  .next()
                  .then(({ value: e, done: t }) => {
                    if (!s && !i) {
                      if (((a = !1), t))
                        return (i = !0), void (l <= 0 && n(null));
                      l++, r(e, c, d), c++, u();
                    }
                  })
                  .catch(f));
            }
            function d(e, t) {
              if (((l -= 1), !s))
                return e
                  ? f(e)
                  : !1 === e
                  ? ((i = !0), void (s = !0))
                  : t === o.default || (i && l <= 0)
                  ? ((i = !0), n(null))
                  : void u();
            }
            function f(e) {
              s || ((a = !1), (i = !0), n(e));
            }
            u();
          });
        var n,
          o = (n = r(2325)) && n.__esModule ? n : { default: n };
        e.exports = t.default;
      },
      3171: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t = e.length) {
            if (!t) throw new Error("arity is undefined");
            return function (...r) {
              return "function" == typeof r[t - 1]
                ? e.apply(this, r)
                : new Promise((n, o) => {
                    (r[t - 1] = (e, ...t) => {
                      if (e) return o(e);
                      n(t.length > 1 ? t : t[0]);
                    }),
                      e.apply(this, r);
                  });
            };
          }),
          (e.exports = t.default);
      },
      2325: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {}),
          (e.exports = t.default);
      },
      9925: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = c(r(5498)),
          o = c(r(8561)),
          i = c(r(9485)),
          s = r(1940),
          a = c(r(8463)),
          l = c(r(2325));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.default = (e) => (t, r, c) => {
          if (((c = (0, n.default)(c)), e <= 0))
            throw new RangeError("concurrency limit cannot be less than 1");
          if (!t) return c(null);
          if ((0, s.isAsyncGenerator)(t)) return (0, a.default)(t, e, r, c);
          if ((0, s.isAsyncIterable)(t))
            return (0, a.default)(t[Symbol.asyncIterator](), e, r, c);
          var u = (0, o.default)(t),
            d = !1,
            f = !1,
            h = 0,
            p = !1;
          function m(e, t) {
            if (!f)
              if (((h -= 1), e)) (d = !0), c(e);
              else if (!1 === e) (d = !0), (f = !0);
              else {
                if (t === l.default || (d && h <= 0)) return (d = !0), c(null);
                p || g();
              }
          }
          function g() {
            for (p = !0; h < e && !d; ) {
              var t = u();
              if (null === t) return (d = !0), void (h <= 0 && c(null));
              (h += 1), r(t.value, t.key, (0, i.default)(m));
            }
            p = !1;
          }
          g();
        }),
          (e.exports = t.default);
      },
      4344: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return e[Symbol.iterator] && e[Symbol.iterator]();
          }),
          (e.exports = t.default);
      },
      6646: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return function (...t) {
              var r = t.pop();
              return e.call(this, t, r);
            };
          }),
          (e.exports = t.default);
      },
      1771: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return (
              e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              e.length % 1 == 0
            );
          }),
          (e.exports = t.default);
      },
      8561: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if ((0, n.default)(e))
              return (function (e) {
                var t = -1,
                  r = e.length;
                return function () {
                  return ++t < r ? { value: e[t], key: t } : null;
                };
              })(e);
            var t,
              r,
              i,
              s,
              a = (0, o.default)(e);
            return a
              ? (function (e) {
                  var t = -1;
                  return function () {
                    var r = e.next();
                    return r.done ? null : (t++, { value: r.value, key: t });
                  };
                })(a)
              : ((r = (t = e) ? Object.keys(t) : []),
                (i = -1),
                (s = r.length),
                function e() {
                  var n = r[++i];
                  return "__proto__" === n
                    ? e()
                    : i < s
                    ? { value: t[n], key: n }
                    : null;
                });
          });
        var n = i(r(1771)),
          o = i(r(4344));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e.exports = t.default;
      },
      5498: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            function t(...t) {
              if (null !== e) {
                var r = e;
                (e = null), r.apply(this, t);
              }
            }
            return Object.assign(t, e), t;
          }),
          (e.exports = t.default);
      },
      9485: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return function (...t) {
              if (null === e) throw new Error("Callback was already called.");
              var r = e;
              (e = null), r.apply(this, t);
            };
          }),
          (e.exports = t.default);
      },
      2686: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = s(r(1771)),
          o = s(r(1940)),
          i = s(r(3171));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.default = (0, i.default)((e, t, r) => {
          var i = (0, n.default)(t) ? [] : {};
          e(
            t,
            (e, t, r) => {
              (0, o.default)(e)((e, ...n) => {
                n.length < 2 && ([n] = n), (i[t] = n), r(e);
              });
            },
            (e) => r(e, i)
          );
        }, 3)),
          (e.exports = t.default);
      },
      5933: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.fallback = s),
          (t.wrap = a);
        var r,
          n = (t.hasQueueMicrotask =
            "function" == typeof queueMicrotask && queueMicrotask),
          o = (t.hasSetImmediate =
            "function" == typeof setImmediate && setImmediate),
          i = (t.hasNextTick =
            "object" == typeof process &&
            "function" == typeof process.nextTick);
        function s(e) {
          setTimeout(e, 0);
        }
        function a(e) {
          return (t, ...r) => e(() => t(...r));
        }
        (r = n ? queueMicrotask : o ? setImmediate : i ? process.nextTick : s),
          (t.default = a(r));
      },
      5926: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return (t, r, n) => e(t, n);
          }),
          (e.exports = t.default);
      },
      1940: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isAsyncIterable = t.isAsyncGenerator = t.isAsync = void 0);
        var n,
          o = (n = r(2201)) && n.__esModule ? n : { default: n };
        function i(e) {
          return "AsyncFunction" === e[Symbol.toStringTag];
        }
        (t.default = function (e) {
          if ("function" != typeof e) throw new Error("expected a function");
          return i(e) ? (0, o.default)(e) : e;
        }),
          (t.isAsync = i),
          (t.isAsyncGenerator = function (e) {
            return "AsyncGenerator" === e[Symbol.toStringTag];
          }),
          (t.isAsyncIterable = function (e) {
            return "function" == typeof e[Symbol.asyncIterator];
          });
      },
      8370: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            return (0, n.default)(o.default, e, t);
          });
        var n = i(r(2686)),
          o = i(r(1080));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e.exports = t.default;
      },
      7492: function (e, t) {
        var r, n;
        void 0 ===
          (n =
            "function" ==
            typeof (r = function () {
              var e =
                /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
              function t(e) {
                var t,
                  r,
                  n = e.replace(/^v/, "").replace(/\+.*$/, ""),
                  o =
                    ((r = "-"),
                    -1 === (t = n).indexOf(r) ? t.length : t.indexOf(r)),
                  i = n.substring(0, o).split(".");
                return i.push(n.substring(o + 1)), i;
              }
              function r(e) {
                return isNaN(Number(e)) ? e : Number(e);
              }
              function n(t) {
                if ("string" != typeof t)
                  throw new TypeError("Invalid argument expected string");
                if (!e.test(t))
                  throw new Error(
                    "Invalid argument not valid semver ('" + t + "' received)"
                  );
              }
              function o(e, o) {
                [e, o].forEach(n);
                for (
                  var i = t(e), s = t(o), a = 0;
                  a < Math.max(i.length - 1, s.length - 1);
                  a++
                ) {
                  var l = parseInt(i[a] || 0, 10),
                    c = parseInt(s[a] || 0, 10);
                  if (l > c) return 1;
                  if (c > l) return -1;
                }
                var u = i[i.length - 1],
                  d = s[s.length - 1];
                if (u && d) {
                  var f = u.split(".").map(r),
                    h = d.split(".").map(r);
                  for (a = 0; a < Math.max(f.length, h.length); a++) {
                    if (
                      void 0 === f[a] ||
                      ("string" == typeof h[a] && "number" == typeof f[a])
                    )
                      return -1;
                    if (
                      void 0 === h[a] ||
                      ("string" == typeof f[a] && "number" == typeof h[a])
                    )
                      return 1;
                    if (f[a] > h[a]) return 1;
                    if (h[a] > f[a]) return -1;
                  }
                } else if (u || d) return u ? -1 : 1;
                return 0;
              }
              var i = [">", ">=", "=", "<", "<="],
                s = {
                  ">": [1],
                  ">=": [0, 1],
                  "=": [0],
                  "<=": [-1, 0],
                  "<": [-1],
                };
              return (
                (o.validate = function (t) {
                  return "string" == typeof t && e.test(t);
                }),
                (o.compare = function (e, t, r) {
                  !(function (e) {
                    if ("string" != typeof e)
                      throw new TypeError(
                        "Invalid operator type, expected string but got " +
                          typeof e
                      );
                    if (-1 === i.indexOf(e))
                      throw new TypeError(
                        "Invalid operator, expected one of " + i.join("|")
                      );
                  })(r);
                  var n = o(e, t);
                  return s[r].indexOf(n) > -1;
                }),
                o
              );
            })
              ? r.apply(t, [])
              : r) || (e.exports = n);
      },
      3861: (e, t, r) => {
        "use strict";
        const n = r(2081),
          o = r(8032),
          i = r(463);
        function s(e, t, r) {
          const s = o(e, t, r),
            a = n.spawn(s.command, s.args, s.options);
          return i.hookChildProcess(a, s), a;
        }
        (e.exports = s),
          (e.exports.spawn = s),
          (e.exports.sync = function (e, t, r) {
            const s = o(e, t, r),
              a = n.spawnSync(s.command, s.args, s.options);
            return (a.error = a.error || i.verifyENOENTSync(a.status, s)), a;
          }),
          (e.exports._parse = o),
          (e.exports._enoent = i);
      },
      463: (e) => {
        "use strict";
        function t(e, t) {
          return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
            code: "ENOENT",
            errno: "ENOENT",
            syscall: `${t} ${e.command}`,
            path: e.command,
            spawnargs: e.args,
          });
        }
        function r(e, r) {
          return 1 !== e || r.file ? null : t(r.original, "spawn");
        }
        e.exports = {
          hookChildProcess: function (e, t) {
            const n = e.emit;
            e.emit = function (o, i) {
              if ("exit" === o) {
                const o = r(i, t);
                if (o) return n.call(e, "error", o);
              }
              return n.apply(e, arguments);
            };
          },
          verifyENOENT: r,
          verifyENOENTSync: function (e, r) {
            return 1 !== e || r.file ? null : t(r.original, "spawnSync");
          },
          notFoundError: t,
        };
      },
      8032: (e, t, r) => {
        "use strict";
        const n = r(1017),
          o = r(5419),
          i = r(9573),
          s = r(546),
          a = r(5339),
          l = r(7891),
          c = /\.(?:com|exe)$/i,
          u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
          d =
            o(() =>
              l.satisfies(process.version, "^4.8.0 || ^5.7.0 || >= 6.0.0", !0)
            ) || !1;
        e.exports = function (e, t, r) {
          t && !Array.isArray(t) && ((r = t), (t = null));
          const o = {
            command: e,
            args: (t = t ? t.slice(0) : []),
            options: (r = Object.assign({}, r)),
            file: void 0,
            original: { command: e, args: t },
          };
          return r.shell
            ? (function (e) {
                if (d) return e;
                const t = [e.command].concat(e.args).join(" ");
                return (
                  (e.command =
                    "string" == typeof e.options.shell
                      ? e.options.shell
                      : process.env.comspec || "cmd.exe"),
                  (e.args = ["/d", "/s", "/c", `"${t}"`]),
                  (e.options.windowsVerbatimArguments = !0),
                  e
                );
              })(o)
            : (function (e) {
                const t = (function (e) {
                    e.file = i(e);
                    const t = e.file && a(e.file);
                    return t
                      ? (e.args.unshift(e.file), (e.command = t), i(e))
                      : e.file;
                  })(e),
                  r = !c.test(t);
                if (e.options.forceShell || r) {
                  const r = u.test(t);
                  (e.command = n.normalize(e.command)),
                    (e.command = s.command(e.command)),
                    (e.args = e.args.map((e) => s.argument(e, r)));
                  const o = [e.command].concat(e.args).join(" ");
                  (e.args = ["/d", "/s", "/c", `"${o}"`]),
                    (e.command = process.env.comspec || "cmd.exe"),
                    (e.options.windowsVerbatimArguments = !0);
                }
                return e;
              })(o);
        };
      },
      546: (e) => {
        "use strict";
        const t = /([()\][%!^"`<>&|;, *?])/g;
        (e.exports.command = function (e) {
          return e.replace(t, "^$1");
        }),
          (e.exports.argument = function (e, r) {
            return (
              (e = (e = `"${(e = (e = (e = `${e}`).replace(
                /(\\*)"/g,
                '$1$1\\"'
              )).replace(/(\\*)$/, "$1$1"))}"`).replace(t, "^$1")),
              r && (e = e.replace(t, "^$1")),
              e
            );
          });
      },
      5339: (e, t, r) => {
        "use strict";
        const n = r(7147),
          o = r(7306);
        e.exports = function (e) {
          let t, r;
          Buffer.alloc
            ? (t = Buffer.alloc(150))
            : ((t = new Buffer(150)), t.fill(0));
          try {
            (r = n.openSync(e, "r")),
              n.readSync(r, t, 0, 150, 0),
              n.closeSync(r);
          } catch (e) {}
          return o(t.toString());
        };
      },
      9573: (e, t, r) => {
        "use strict";
        const n = r(1017),
          o = r(9891),
          i = r(5620)();
        function s(e, t) {
          const r = process.cwd(),
            s = null != e.options.cwd;
          if (s)
            try {
              process.chdir(e.options.cwd);
            } catch (e) {}
          let a;
          try {
            a = o.sync(e.command, {
              path: (e.options.env || process.env)[i],
              pathExt: t ? n.delimiter : void 0,
            });
          } catch (e) {
          } finally {
            process.chdir(r);
          }
          return a && (a = n.resolve(s ? e.options.cwd : "", a)), a;
        }
        e.exports = function (e) {
          return s(e) || s(e, !0);
        };
      },
      9379: (e, t, r) => {
        "use strict";
        var n = r(7231);
        Object.defineProperty(t, "_R", {
          enumerable: !0,
          get: function () {
            return n.initializeNotifications;
          },
        }),
          Object.defineProperty(t, "c0", {
            enumerable: !0,
            get: function () {
              return n.showNotification;
            },
          }),
          Object.defineProperty(t, "pD", {
            enumerable: !0,
            get: function () {
              return n.terminateNotifications;
            },
          }),
          Object.defineProperty(t, "X", {
            enumerable: !0,
            get: function () {
              return n.getNotificationsPermission;
            },
          }),
          Object.defineProperty(t, "QJ", {
            enumerable: !0,
            get: function () {
              return n.requestNotificationsPermission;
            },
          });
        r(7344), r(7838);
        var o = r(4747);
        Object.defineProperty(t, "V2", {
          enumerable: !0,
          get: function () {
            return o.onNotificationEvent;
          },
        });
      },
      7231: function (e, t, r) {
        "use strict";
        var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (o, i) {
              function s(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(s, a);
              }
              l((n = n.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.closeNotification =
            t.showNotification =
            t.requestNotificationsPermission =
            t.getNotificationsPermission =
            t.terminateNotifications =
            t.initializeNotifications =
              void 0);
        const o = r(7344),
          i = r(4747),
          s = r(7196);
        let a;
        function l() {
          return (
            void 0 !== a || (a = o.supportsNotifications() ? r(33) : null), a
          );
        }
        (t.initializeNotifications = (e) => {
          var t;
          return null === (t = l()) || void 0 === t
            ? void 0
            : t.initializeNotifications(i.notificationCallback, e);
        }),
          (t.terminateNotifications = () => {
            var e;
            return null === (e = l()) || void 0 === e
              ? void 0
              : e.terminateNotifications();
          }),
          (t.getNotificationsPermission = () => {
            var e;
            return null === (e = l()) || void 0 === e
              ? void 0
              : e.getNotificationsPermission();
          }),
          (t.requestNotificationsPermission = () => {
            var e;
            return null === (e = l()) || void 0 === e
              ? void 0
              : e.requestNotificationsPermission();
          }),
          (t.showNotification = (...e) =>
            n(void 0, void 0, void 0, function* () {
              var t;
              const r = s.v4();
              try {
                yield null === (t = l()) || void 0 === t
                  ? void 0
                  : t.showNotification(r, ...e);
              } catch (e) {
                return null;
              }
              return r;
            })),
          (t.closeNotification = (...e) => {
            var t;
            return null === (t = l()) || void 0 === t
              ? void 0
              : t.closeNotification(...e);
          });
      },
      4747: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.onNotificationEvent = t.notificationCallback = void 0);
        let r = null;
        (t.notificationCallback = (...e) => (null == r ? void 0 : r(...e))),
          (t.onNotificationEvent = (e) => {
            r = e;
          });
      },
      7838: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getNotificationSettingsUrl = void 0);
        const n = r(7344);
        t.getNotificationSettingsUrl = function () {
          return n.supportsNotifications() ? "ms-settings:notifications" : null;
        };
      },
      7344: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.supportsNotificationsPermissionRequest = t.supportsNotifications =
            void 0);
        const n = r(2037);
        (t.supportsNotifications = function () {
          return (function () {
            const e = n.release().split("."),
              t = parseInt(e[0], 10),
              r = e.length >= 3 ? parseInt(e[2], 10) : 15063;
            return t > 10 || (10 === t && r >= 15063);
          })();
        }),
          (t.supportsNotificationsPermissionRequest = function () {
            return !1;
          });
      },
      7196: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            NIL: () => E,
            parse: () => v,
            stringify: () => d,
            v1: () => g,
            v3: () => w,
            v4: () => b,
            v5: () => _,
            validate: () => c,
            version: () => S,
          });
        var n = r(6113),
          o = r.n(n);
        const i = new Uint8Array(256);
        let s = i.length;
        function a() {
          return (
            s > i.length - 16 && (o().randomFillSync(i), (s = 0)),
            i.slice(s, (s += 16))
          );
        }
        const l =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          c = function (e) {
            return "string" == typeof e && l.test(e);
          },
          u = [];
        for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).substr(1));
        const d = function (e, t = 0) {
          const r = (
            u[e[t + 0]] +
            u[e[t + 1]] +
            u[e[t + 2]] +
            u[e[t + 3]] +
            "-" +
            u[e[t + 4]] +
            u[e[t + 5]] +
            "-" +
            u[e[t + 6]] +
            u[e[t + 7]] +
            "-" +
            u[e[t + 8]] +
            u[e[t + 9]] +
            "-" +
            u[e[t + 10]] +
            u[e[t + 11]] +
            u[e[t + 12]] +
            u[e[t + 13]] +
            u[e[t + 14]] +
            u[e[t + 15]]
          ).toLowerCase();
          if (!c(r)) throw TypeError("Stringified UUID is invalid");
          return r;
        };
        let f,
          h,
          p = 0,
          m = 0;
        const g = function (e, t, r) {
            let n = (t && r) || 0;
            const o = t || new Array(16);
            let i = (e = e || {}).node || f,
              s = void 0 !== e.clockseq ? e.clockseq : h;
            if (null == i || null == s) {
              const t = e.random || (e.rng || a)();
              null == i && (i = f = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                null == s && (s = h = 16383 & ((t[6] << 8) | t[7]));
            }
            let l = void 0 !== e.msecs ? e.msecs : Date.now(),
              c = void 0 !== e.nsecs ? e.nsecs : m + 1;
            const u = l - p + (c - m) / 1e4;
            if (
              (u < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383),
              (u < 0 || l > p) && void 0 === e.nsecs && (c = 0),
              c >= 1e4)
            )
              throw new Error(
                "uuid.v1(): Can't create more than 10M uuids/sec"
              );
            (p = l), (m = c), (h = s), (l += 122192928e5);
            const g = (1e4 * (268435455 & l) + c) % 4294967296;
            (o[n++] = (g >>> 24) & 255),
              (o[n++] = (g >>> 16) & 255),
              (o[n++] = (g >>> 8) & 255),
              (o[n++] = 255 & g);
            const v = ((l / 4294967296) * 1e4) & 268435455;
            (o[n++] = (v >>> 8) & 255),
              (o[n++] = 255 & v),
              (o[n++] = ((v >>> 24) & 15) | 16),
              (o[n++] = (v >>> 16) & 255),
              (o[n++] = (s >>> 8) | 128),
              (o[n++] = 255 & s);
            for (let e = 0; e < 6; ++e) o[n + e] = i[e];
            return t || d(o);
          },
          v = function (e) {
            if (!c(e)) throw TypeError("Invalid UUID");
            let t;
            const r = new Uint8Array(16);
            return (
              (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
              (r[1] = (t >>> 16) & 255),
              (r[2] = (t >>> 8) & 255),
              (r[3] = 255 & t),
              (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
              (r[5] = 255 & t),
              (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
              (r[7] = 255 & t),
              (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
              (r[9] = 255 & t),
              (r[10] =
                ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
              (r[11] = (t / 4294967296) & 255),
              (r[12] = (t >>> 24) & 255),
              (r[13] = (t >>> 16) & 255),
              (r[14] = (t >>> 8) & 255),
              (r[15] = 255 & t),
              r
            );
          };
        function y(e, t, r) {
          function n(e, n, o, i) {
            if (
              ("string" == typeof e &&
                (e = (function (e) {
                  e = unescape(encodeURIComponent(e));
                  const t = [];
                  for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                  return t;
                })(e)),
              "string" == typeof n && (n = v(n)),
              16 !== n.length)
            )
              throw TypeError(
                "Namespace must be array-like (16 iterable integer values, 0-255)"
              );
            let s = new Uint8Array(16 + e.length);
            if (
              (s.set(n),
              s.set(e, n.length),
              (s = r(s)),
              (s[6] = (15 & s[6]) | t),
              (s[8] = (63 & s[8]) | 128),
              o)
            ) {
              i = i || 0;
              for (let e = 0; e < 16; ++e) o[i + e] = s[e];
              return o;
            }
            return d(s);
          }
          try {
            n.name = e;
          } catch (e) {}
          return (
            (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
            (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
            n
          );
        }
        const w = y("v3", 48, function (e) {
            return (
              Array.isArray(e)
                ? (e = Buffer.from(e))
                : "string" == typeof e && (e = Buffer.from(e, "utf8")),
              o().createHash("md5").update(e).digest()
            );
          }),
          b = function (e, t, r) {
            const n = (e = e || {}).random || (e.rng || a)();
            if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
              r = r || 0;
              for (let e = 0; e < 16; ++e) t[r + e] = n[e];
              return t;
            }
            return d(n);
          },
          _ = y("v5", 80, function (e) {
            return (
              Array.isArray(e)
                ? (e = Buffer.from(e))
                : "string" == typeof e && (e = Buffer.from(e, "utf8")),
              o().createHash("sha1").update(e).digest()
            );
          }),
          E = "00000000-0000-0000-0000-000000000000",
          S = function (e) {
            if (!c(e)) throw TypeError("Invalid UUID");
            return parseInt(e.substr(14, 1), 16);
          };
      },
      2382: (e, t, r) => {
        "use strict";
        const n = r(1017),
          o = r(2298),
          i = r(8822),
          s = r(7207);
        e.exports = function (e) {
          const t = o.app || o.remote.app,
            r = o.screen || o.remote.screen;
          let a, l, c;
          const u = Object.assign(
              {
                file: "window-state.json",
                path: t.getPath("userData"),
                maximize: !0,
                fullScreen: !0,
              },
              e
            ),
            d = n.join(u.path, u.file);
          function f() {
            return (
              a &&
              Number.isInteger(a.x) &&
              Number.isInteger(a.y) &&
              Number.isInteger(a.width) &&
              a.width > 0 &&
              Number.isInteger(a.height) &&
              a.height > 0
            );
          }
          function h() {
            const e = r.getPrimaryDisplay().bounds;
            a = {
              width: u.defaultWidth || 800,
              height: u.defaultHeight || 600,
              x: 0,
              y: 0,
              displayBounds: e,
            };
          }
          function p(e) {
            if ((e = e || l))
              try {
                const t = e.getBounds();
                (function (e) {
                  return (
                    !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
                  );
                })(e) &&
                  ((a.x = t.x),
                  (a.y = t.y),
                  (a.width = t.width),
                  (a.height = t.height)),
                  (a.isMaximized = e.isMaximized()),
                  (a.isFullScreen = e.isFullScreen()),
                  (a.displayBounds = r.getDisplayMatching(t).bounds);
              } catch (e) {}
          }
          function m(e) {
            e && p(e);
            try {
              s.sync(n.dirname(d)), i.writeFileSync(d, a);
            } catch (e) {}
          }
          function g() {
            clearTimeout(c), (c = setTimeout(p, 100));
          }
          function v() {
            p();
          }
          function y() {
            w(), m();
          }
          function w() {
            l &&
              (l.removeListener("resize", g),
              l.removeListener("move", g),
              clearTimeout(c),
              l.removeListener("close", v),
              l.removeListener("closed", y),
              (l = null));
          }
          try {
            a = i.readFileSync(d);
          } catch (e) {}
          return (
            a && (f() || a.isMaximized || a.isFullScreen)
              ? f() &&
                a.displayBounds &&
                (function () {
                  if (
                    !r.getAllDisplays().some((e) => {
                      return (
                        (t = e.bounds),
                        a.x >= t.x &&
                          a.y >= t.y &&
                          a.x + a.width <= t.x + t.width &&
                          a.y + a.height <= t.y + t.height
                      );
                      var t;
                    })
                  )
                    h();
                })()
              : (a = null),
            (a = Object.assign(
              { width: u.defaultWidth || 800, height: u.defaultHeight || 600 },
              a
            )),
            {
              get x() {
                return a.x;
              },
              get y() {
                return a.y;
              },
              get width() {
                return a.width;
              },
              get height() {
                return a.height;
              },
              get displayBounds() {
                return a.displayBounds;
              },
              get isMaximized() {
                return a.isMaximized;
              },
              get isFullScreen() {
                return a.isFullScreen;
              },
              saveState: m,
              unmanage: w,
              manage: function (e) {
                u.maximize && a.isMaximized && e.maximize(),
                  u.fullScreen && a.isFullScreen && e.setFullScreen(!0),
                  e.on("resize", g),
                  e.on("move", g),
                  e.on("close", v),
                  e.on("closed", y),
                  (l = e);
              },
              resetStateToDefault: h,
            }
          );
        };
      },
      3558: (e, t, r) => {
        var n = r(3417),
          o = function () {},
          i = function (e, t, r) {
            if ("function" == typeof t) return i(e, null, t);
            t || (t = {}), (r = n(r || o));
            var s = e._writableState,
              a = e._readableState,
              l = t.readable || (!1 !== t.readable && e.readable),
              c = t.writable || (!1 !== t.writable && e.writable),
              u = function () {
                e.writable || d();
              },
              d = function () {
                (c = !1), l || r.call(e);
              },
              f = function () {
                (l = !1), c || r.call(e);
              },
              h = function (t) {
                r.call(e, t ? new Error("exited with error code: " + t) : null);
              },
              p = function (t) {
                r.call(e, t);
              },
              m = function () {
                return (!l || (a && a.ended)) && (!c || (s && s.ended))
                  ? void 0
                  : r.call(e, new Error("premature close"));
              },
              g = function () {
                e.req.on("finish", d);
              };
            return (
              (function (e) {
                return e.setHeader && "function" == typeof e.abort;
              })(e)
                ? (e.on("complete", d),
                  e.on("abort", m),
                  e.req ? g() : e.on("request", g))
                : c && !s && (e.on("end", u), e.on("close", u)),
              (function (e) {
                return (
                  e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                );
              })(e) && e.on("exit", h),
              e.on("end", f),
              e.on("finish", d),
              !1 !== t.error && e.on("error", p),
              e.on("close", m),
              function () {
                e.removeListener("complete", d),
                  e.removeListener("abort", m),
                  e.removeListener("request", g),
                  e.req && e.req.removeListener("finish", d),
                  e.removeListener("end", u),
                  e.removeListener("close", u),
                  e.removeListener("finish", d),
                  e.removeListener("exit", h),
                  e.removeListener("end", f),
                  e.removeListener("error", p),
                  e.removeListener("close", m);
              }
            );
          };
        e.exports = i;
      },
      7750: function (e, t, r) {
        (function () {
          var t, n;
          (t = null),
            (e.exports = (function () {
              function e() {
                var e, t, r;
                for (
                  this.disposables = new Set(), t = 0, r = arguments.length;
                  t < r;
                  t++
                )
                  (e = arguments[t]), this.add(e);
              }
              return (
                (e.prototype.disposed = !1),
                (e.prototype.dispose = function () {
                  this.disposed ||
                    ((this.disposed = !0),
                    this.disposables.forEach(function (e) {
                      return e.dispose();
                    }),
                    (this.disposables = null));
                }),
                (e.prototype.add = function () {
                  var e, t, r;
                  if (!this.disposed)
                    for (t = 0, r = arguments.length; t < r; t += 1)
                      n((e = arguments[t])), this.disposables.add(e);
                }),
                (e.prototype.remove = function (e) {
                  this.disposed || this.disposables.delete(e);
                }),
                (e.prototype.delete = function (e) {
                  this.remove(e);
                }),
                (e.prototype.clear = function () {
                  this.disposed || this.disposables.clear();
                }),
                e
              );
            })()),
            (n = function (e) {
              if ((null == t && (t = r(6122)), !t.isDisposable(e)))
                throw new TypeError(
                  "Arguments to CompositeDisposable.add must have a .dispose() method"
                );
            });
        }).call(this);
      },
      6122: function (e) {
        (function () {
          e.exports = (function () {
            function e(e) {
              this.disposalAction = e;
            }
            return (
              (e.prototype.disposed = !1),
              (e.isDisposable = function (e) {
                return "function" == typeof (null != e ? e.dispose : void 0);
              }),
              (e.prototype.dispose = function () {
                this.disposed ||
                  ((this.disposed = !0),
                  "function" == typeof this.disposalAction &&
                    this.disposalAction(),
                  (this.disposalAction = null));
              }),
              e
            );
          })();
        }).call(this);
      },
      7601: function (e, t, r) {
        (function () {
          var t;
          (t = r(6122)),
            (e.exports = (function () {
              function e() {
                this.clear();
              }
              return (
                (e.exceptionHandlers = []),
                (e.onEventHandlerException = function (e) {
                  return (
                    0 === this.exceptionHandlers.length &&
                      (this.dispatch = this.exceptionHandlingDispatch),
                    this.exceptionHandlers.push(e),
                    new t(
                      ((r = this),
                      function () {
                        if (
                          (r.exceptionHandlers.splice(
                            r.exceptionHandlers.indexOf(e),
                            1
                          ),
                          0 === r.exceptionHandlers.length)
                        )
                          return (r.dispatch = r.simpleDispatch);
                      })
                    )
                  );
                  var r;
                }),
                (e.simpleDispatch = function (e, t) {
                  return e(t);
                }),
                (e.exceptionHandlingDispatch = function (e, t) {
                  var r, n, o, i, s, a;
                  try {
                    return e(t);
                  } catch (e) {
                    for (
                      r = e,
                        a = [],
                        o = 0,
                        i = (s = this.exceptionHandlers).length;
                      o < i;
                      o++
                    )
                      (n = s[o]), a.push(n(r));
                    return a;
                  }
                }),
                (e.dispatch = e.simpleDispatch),
                (e.prototype.disposed = !1),
                (e.prototype.clear = function () {
                  return (this.handlersByEventName = {});
                }),
                (e.prototype.dispose = function () {
                  return (
                    (this.handlersByEventName = null), (this.disposed = !0)
                  );
                }),
                (e.prototype.on = function (e, r, n) {
                  var o;
                  if ((null == n && (n = !1), this.disposed))
                    throw new Error("Emitter has been disposed");
                  if ("function" != typeof r)
                    throw new Error("Handler must be a function");
                  return (
                    (o = this.handlersByEventName[e])
                      ? (this.handlersByEventName[e] = n
                          ? [r].concat(o)
                          : o.concat(r))
                      : (this.handlersByEventName[e] = [r]),
                    new t(this.off.bind(this, e, r))
                  );
                }),
                (e.prototype.once = function (e, t, r) {
                  var n, o;
                  return (
                    null == r && (r = !1),
                    (o = function (e) {
                      return n.dispose(), t(e);
                    }),
                    (n = this.on(e, o, r))
                  );
                }),
                (e.prototype.preempt = function (e, t) {
                  return this.on(e, t, !0);
                }),
                (e.prototype.off = function (e, t) {
                  var r, n, o, i, s;
                  if (!this.disposed && (o = this.handlersByEventName[e])) {
                    for (n = [], i = 0, s = o.length; i < s; i++)
                      (r = o[i]) !== t && n.push(r);
                    n.length > 0
                      ? (this.handlersByEventName[e] = n)
                      : delete this.handlersByEventName[e];
                  }
                }),
                (e.prototype.emit = function (e, t) {
                  var r, n, o, i, s;
                  if (
                    (n = null != (s = this.handlersByEventName) ? s[e] : void 0)
                  )
                    for (o = 0, i = n.length; o < i; o++)
                      (r = n[o]), this.constructor.dispatch(r, t);
                }),
                (e.prototype.emitAsync = function (e, t) {
                  var r, n, o, i;
                  return (n =
                    null != (i = this.handlersByEventName) ? i[e] : void 0)
                    ? ((o = function () {
                        var e, o, i;
                        for (i = [], e = 0, o = n.length; e < o; e++)
                          (r = n[e]), i.push(this.constructor.dispatch(r, t));
                        return i;
                      }.call(this)),
                      Promise.all(o).then(function () {}))
                    : Promise.resolve();
                }),
                (e.prototype.getEventNames = function () {
                  return Object.keys(this.handlersByEventName);
                }),
                (e.prototype.listenerCountForEventName = function (e) {
                  var t, r;
                  return null !=
                    (t =
                      null != (r = this.handlersByEventName[e])
                        ? r.length
                        : void 0)
                    ? t
                    : 0;
                }),
                (e.prototype.getTotalListenerCount = function () {
                  var e, t, r, n, o;
                  for (
                    t = 0,
                      r = 0,
                      n = (o = Object.keys(this.handlersByEventName)).length;
                    r < n;
                    r++
                  )
                    (e = o[r]), (t += this.handlersByEventName[e].length);
                  return t;
                }),
                e
              );
            })());
        }).call(this);
      },
      1391: function (e, t, r) {
        (function () {
          (t.Emitter = r(7601)),
            (t.Disposable = r(6122)),
            (t.CompositeDisposable = r(7750));
        }).call(this);
      },
      8734: (e, t, r) => {
        "use strict";
        const n = r(1017),
          o = r(2081),
          i = r(3861),
          s = r(6097),
          a = r(1829),
          l = r(697),
          c = r(3675),
          u = r(8911),
          d = r(8419),
          f = r(8047),
          h = r(5709);
        function p(e, t, r) {
          let o;
          return (
            (r = Object.assign({ extendEnv: !0, env: {} }, r)).extendEnv &&
              (r.env = Object.assign({}, process.env, r.env)),
            !0 === r.__winShell
              ? (delete r.__winShell,
                (o = {
                  command: e,
                  args: t,
                  options: r,
                  file: e,
                  original: { cmd: e, args: t },
                }))
              : (o = i._parse(e, t, r)),
            ((r = Object.assign(
              {
                maxBuffer: 1e7,
                buffer: !0,
                stripEof: !0,
                preferLocal: !0,
                localDir: o.options.cwd || process.cwd(),
                encoding: "utf8",
                reject: !0,
                cleanup: !0,
              },
              o.options
            )).stdio = h(r)),
            r.preferLocal &&
              (r.env = a.env(Object.assign({}, r, { cwd: r.localDir }))),
            r.detached && (r.cleanup = !1),
            "cmd.exe" === n.basename(o.command) && o.args.unshift("/q"),
            { cmd: o.command, args: o.args, opts: r, parsed: o }
          );
        }
        function m(e, t) {
          return t && e.stripEof && (t = s(t)), t;
        }
        function g(e, t, r) {
          let n = "/bin/sh",
            o = ["-c", t];
          return (
            ((r = Object.assign({}, r)).__winShell = !0),
            (n = process.env.comspec || "cmd.exe"),
            (o = ["/s", "/c", `"${t}"`]),
            (r.windowsVerbatimArguments = !0),
            r.shell && ((n = r.shell), delete r.shell),
            e(n, o, r)
          );
        }
        function v(e, t, { encoding: r, buffer: n, maxBuffer: o }) {
          if (!e[t]) return null;
          let i;
          return (
            (i = n
              ? r
                ? c(e[t], { encoding: r, maxBuffer: o })
                : c.buffer(e[t], { maxBuffer: o })
              : new Promise((r, n) => {
                  e[t].once("end", r).once("error", n);
                })),
            i.catch((e) => {
              throw ((e.stream = t), (e.message = `${t} ${e.message}`), e);
            })
          );
        }
        function y(e, t) {
          const { stdout: r, stderr: n } = e;
          let o = e.error;
          const { code: i, signal: s } = e,
            { parsed: a, joinedCmd: l } = t,
            c = t.timedOut || !1;
          if (!o) {
            let e = "";
            Array.isArray(a.opts.stdio)
              ? ("inherit" !== a.opts.stdio[2] &&
                  (e += e.length > 0 ? n : `\n${n}`),
                "inherit" !== a.opts.stdio[1] && (e += `\n${r}`))
              : "inherit" !== a.opts.stdio && (e = `\n${n}${r}`),
              (o = new Error(`Command failed: ${l}${e}`)),
              (o.code = i < 0 ? f(i) : i);
          }
          return (
            (o.stdout = r),
            (o.stderr = n),
            (o.failed = !0),
            (o.signal = s || null),
            (o.cmd = l),
            (o.timedOut = c),
            o
          );
        }
        function w(e, t) {
          let r = e;
          return (
            Array.isArray(t) && t.length > 0 && (r += " " + t.join(" ")), r
          );
        }
        (e.exports = (e, t, r) => {
          const n = p(e, t, r),
            { encoding: s, buffer: a, maxBuffer: c } = n.opts,
            f = w(e, t);
          let h, g;
          try {
            h = o.spawn(n.cmd, n.args, n.opts);
          } catch (e) {
            return Promise.reject(e);
          }
          n.opts.cleanup &&
            (g = d(() => {
              h.kill();
            }));
          let b = null,
            _ = !1;
          const E = () => {
            b && (clearTimeout(b), (b = null)), g && g();
          };
          n.opts.timeout > 0 &&
            (b = setTimeout(() => {
              (b = null), (_ = !0), h.kill(n.opts.killSignal);
            }, n.opts.timeout));
          const S = new Promise((e) => {
            h.on("exit", (t, r) => {
              E(), e({ code: t, signal: r });
            }),
              h.on("error", (t) => {
                E(), e({ error: t });
              }),
              h.stdin &&
                h.stdin.on("error", (t) => {
                  E(), e({ error: t });
                });
          });
          function x() {
            h.stdout && h.stdout.destroy(), h.stderr && h.stderr.destroy();
          }
          const O = () =>
            u(
              Promise.all([
                S,
                v(h, "stdout", { encoding: s, buffer: a, maxBuffer: c }),
                v(h, "stderr", { encoding: s, buffer: a, maxBuffer: c }),
              ]).then((e) => {
                const t = e[0];
                if (
                  ((t.stdout = e[1]),
                  (t.stderr = e[2]),
                  t.error || 0 !== t.code || null !== t.signal)
                ) {
                  const e = y(t, { joinedCmd: f, parsed: n, timedOut: _ });
                  if (((e.killed = e.killed || h.killed), !n.opts.reject))
                    return e;
                  throw e;
                }
                return {
                  stdout: m(n.opts, t.stdout),
                  stderr: m(n.opts, t.stderr),
                  code: 0,
                  failed: !1,
                  killed: !1,
                  signal: null,
                  cmd: f,
                  timedOut: !1,
                };
              }),
              x
            );
          return (
            i._enoent.hookChildProcess(h, n.parsed),
            (function (e, t) {
              null != t && (l(t) ? t.pipe(e.stdin) : e.stdin.end(t));
            })(h, n.opts.input),
            (h.then = (e, t) => O().then(e, t)),
            (h.catch = (e) => O().catch(e)),
            h
          );
        }),
          (e.exports.stdout = (...t) => e.exports(...t).then((e) => e.stdout)),
          (e.exports.stderr = (...t) => e.exports(...t).then((e) => e.stderr)),
          (e.exports.shell = (t, r) => g(e.exports, t, r)),
          (e.exports.sync = (e, t, r) => {
            const n = p(e, t, r),
              i = w(e, t);
            if (l(n.opts.input))
              throw new TypeError(
                "The `input` option cannot be a stream in sync mode"
              );
            const s = o.spawnSync(n.cmd, n.args, n.opts);
            if (
              ((s.code = s.status),
              s.error || 0 !== s.status || null !== s.signal)
            ) {
              const e = y(s, { joinedCmd: i, parsed: n });
              if (!n.opts.reject) return e;
              throw e;
            }
            return {
              stdout: m(n.opts, s.stdout),
              stderr: m(n.opts, s.stderr),
              code: 0,
              failed: !1,
              signal: null,
              cmd: i,
              timedOut: !1,
            };
          }),
          (e.exports.shellSync = (t, r) => g(e.exports.sync, t, r));
      },
      8047: (e, t, r) => {
        "use strict";
        const n = r(3837);
        let o;
        if ("function" == typeof n.getSystemErrorName)
          e.exports = n.getSystemErrorName;
        else {
          try {
            if (((o = process.binding("uv")), "function" != typeof o.errname))
              throw new TypeError("uv.errname is not a function");
          } catch (e) {
            console.error(
              "execa/lib/errname: unable to establish process.binding('uv')",
              e
            ),
              (o = null);
          }
          e.exports = (e) => i(o, e);
        }
        function i(e, t) {
          if (e) return e.errname(t);
          if (!(t < 0)) throw new Error("err >= 0");
          return `Unknown system error ${t}`;
        }
        e.exports.__test__ = i;
      },
      5709: (e) => {
        "use strict";
        const t = ["stdin", "stdout", "stderr"];
        e.exports = (e) => {
          if (!e) return null;
          if (e.stdio && ((e) => t.some((t) => Boolean(e[t])))(e))
            throw new Error(
              `It's not possible to provide \`stdio\` in combination with one of ${t
                .map((e) => `\`${e}\``)
                .join(", ")}`
            );
          if ("string" == typeof e.stdio) return e.stdio;
          const r = e.stdio || [];
          if (!Array.isArray(r))
            throw new TypeError(
              `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof r}\``
            );
          const n = [],
            o = Math.max(r.length, t.length);
          for (let i = 0; i < o; i++) {
            let o = null;
            void 0 !== r[i] ? (o = r[i]) : void 0 !== e[t[i]] && (o = e[t[i]]),
              (n[i] = o);
          }
          return n;
        };
      },
      697: (e) => {
        "use strict";
        var t = (e.exports = function (e) {
          return (
            null !== e && "object" == typeof e && "function" == typeof e.pipe
          );
        });
        (t.writable = function (e) {
          return (
            t(e) &&
            !1 !== e.writable &&
            "function" == typeof e._write &&
            "object" == typeof e._writableState
          );
        }),
          (t.readable = function (e) {
            return (
              t(e) &&
              !1 !== e.readable &&
              "function" == typeof e._read &&
              "object" == typeof e._readableState
            );
          }),
          (t.duplex = function (e) {
            return t.writable(e) && t.readable(e);
          }),
          (t.transform = function (e) {
            return (
              t.duplex(e) &&
              "function" == typeof e._transform &&
              "object" == typeof e._transformState
            );
          });
      },
      1260: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            assign: () => u,
            default: () => j,
            defaultI18n: () => p,
            format: () => M,
            parse: () => A,
            setGlobalDateI18n: () => g,
            setGlobalDateMasks: () => R,
          });
        var n =
            /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
          o = "[1-9]\\d?",
          i = "\\d\\d",
          s = "[^\\s]+",
          a = /\[([^]*?)\]/gm;
        function l(e, t) {
          for (var r = [], n = 0, o = e.length; n < o; n++)
            r.push(e[n].substr(0, t));
          return r;
        }
        var c = function (e) {
          return function (t, r) {
            var n = r[e].map(function (e) {
                return e.toLowerCase();
              }),
              o = n.indexOf(t.toLowerCase());
            return o > -1 ? o : null;
          };
        };
        function u(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          for (var n = 0, o = t; n < o.length; n++) {
            var i = o[n];
            for (var s in i) e[s] = i[s];
          }
          return e;
        }
        var d = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          f = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          h = l(f, 3),
          p = {
            dayNamesShort: l(d, 3),
            dayNames: d,
            monthNamesShort: h,
            monthNames: f,
            amPm: ["am", "pm"],
            DoFn: function (e) {
              return (
                e +
                ["th", "st", "nd", "rd"][
                  e % 10 > 3 ? 0 : ((e - (e % 10) != 10 ? 1 : 0) * e) % 10
                ]
              );
            },
          },
          m = u({}, p),
          g = function (e) {
            return (m = u(m, e));
          },
          v = function (e) {
            return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
          },
          y = function (e, t) {
            for (void 0 === t && (t = 2), e = String(e); e.length < t; )
              e = "0" + e;
            return e;
          },
          w = {
            D: function (e) {
              return String(e.getDate());
            },
            DD: function (e) {
              return y(e.getDate());
            },
            Do: function (e, t) {
              return t.DoFn(e.getDate());
            },
            d: function (e) {
              return String(e.getDay());
            },
            dd: function (e) {
              return y(e.getDay());
            },
            ddd: function (e, t) {
              return t.dayNamesShort[e.getDay()];
            },
            dddd: function (e, t) {
              return t.dayNames[e.getDay()];
            },
            M: function (e) {
              return String(e.getMonth() + 1);
            },
            MM: function (e) {
              return y(e.getMonth() + 1);
            },
            MMM: function (e, t) {
              return t.monthNamesShort[e.getMonth()];
            },
            MMMM: function (e, t) {
              return t.monthNames[e.getMonth()];
            },
            YY: function (e) {
              return y(String(e.getFullYear()), 4).substr(2);
            },
            YYYY: function (e) {
              return y(e.getFullYear(), 4);
            },
            h: function (e) {
              return String(e.getHours() % 12 || 12);
            },
            hh: function (e) {
              return y(e.getHours() % 12 || 12);
            },
            H: function (e) {
              return String(e.getHours());
            },
            HH: function (e) {
              return y(e.getHours());
            },
            m: function (e) {
              return String(e.getMinutes());
            },
            mm: function (e) {
              return y(e.getMinutes());
            },
            s: function (e) {
              return String(e.getSeconds());
            },
            ss: function (e) {
              return y(e.getSeconds());
            },
            S: function (e) {
              return String(Math.round(e.getMilliseconds() / 100));
            },
            SS: function (e) {
              return y(Math.round(e.getMilliseconds() / 10), 2);
            },
            SSS: function (e) {
              return y(e.getMilliseconds(), 3);
            },
            a: function (e, t) {
              return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
            },
            A: function (e, t) {
              return e.getHours() < 12
                ? t.amPm[0].toUpperCase()
                : t.amPm[1].toUpperCase();
            },
            ZZ: function (e) {
              var t = e.getTimezoneOffset();
              return (
                (t > 0 ? "-" : "+") +
                y(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
              );
            },
            Z: function (e) {
              var t = e.getTimezoneOffset();
              return (
                (t > 0 ? "-" : "+") +
                y(Math.floor(Math.abs(t) / 60), 2) +
                ":" +
                y(Math.abs(t) % 60, 2)
              );
            },
          },
          b = function (e) {
            return +e - 1;
          },
          _ = [null, o],
          E = [null, s],
          S = [
            "isPm",
            s,
            function (e, t) {
              var r = e.toLowerCase();
              return r === t.amPm[0] ? 0 : r === t.amPm[1] ? 1 : null;
            },
          ],
          x = [
            "timezoneOffset",
            "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
            function (e) {
              var t = (e + "").match(/([+-]|\d\d)/gi);
              if (t) {
                var r = 60 * +t[1] + parseInt(t[2], 10);
                return "+" === t[0] ? r : -r;
              }
              return 0;
            },
          ],
          O = {
            D: ["day", o],
            DD: ["day", i],
            Do: [
              "day",
              "[1-9]\\d?[^\\s]+",
              function (e) {
                return parseInt(e, 10);
              },
            ],
            M: ["month", o, b],
            MM: ["month", i, b],
            YY: [
              "year",
              i,
              function (e) {
                var t = +("" + new Date().getFullYear()).substr(0, 2);
                return +("" + (+e > 68 ? t - 1 : t) + e);
              },
            ],
            h: ["hour", o, void 0, "isPm"],
            hh: ["hour", i, void 0, "isPm"],
            H: ["hour", o],
            HH: ["hour", i],
            m: ["minute", o],
            mm: ["minute", i],
            s: ["second", o],
            ss: ["second", i],
            YYYY: ["year", "\\d{4}"],
            S: [
              "millisecond",
              "\\d",
              function (e) {
                return 100 * +e;
              },
            ],
            SS: [
              "millisecond",
              i,
              function (e) {
                return 10 * +e;
              },
            ],
            SSS: ["millisecond", "\\d{3}"],
            d: _,
            dd: _,
            ddd: E,
            dddd: E,
            MMM: ["month", s, c("monthNamesShort")],
            MMMM: ["month", s, c("monthNames")],
            a: S,
            A: S,
            ZZ: x,
            Z: x,
          },
          C = {
            default: "ddd MMM DD YYYY HH:mm:ss",
            shortDate: "M/D/YY",
            mediumDate: "MMM D, YYYY",
            longDate: "MMMM D, YYYY",
            fullDate: "dddd, MMMM D, YYYY",
            isoDate: "YYYY-MM-DD",
            isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
            shortTime: "HH:mm",
            mediumTime: "HH:mm:ss",
            longTime: "HH:mm:ss.SSS",
          },
          R = function (e) {
            return u(C, e);
          },
          M = function (e, t, r) {
            if (
              (void 0 === t && (t = C.default),
              void 0 === r && (r = {}),
              "number" == typeof e && (e = new Date(e)),
              "[object Date]" !== Object.prototype.toString.call(e) ||
                isNaN(e.getTime()))
            )
              throw new Error("Invalid Date pass to format");
            var o = [];
            t = (t = C[t] || t).replace(a, function (e, t) {
              return o.push(t), "@@@";
            });
            var i = u(u({}, m), r);
            return (t = t.replace(n, function (t) {
              return w[t](e, i);
            })).replace(/@@@/g, function () {
              return o.shift();
            });
          };
        function A(e, t, r) {
          if ((void 0 === r && (r = {}), "string" != typeof t))
            throw new Error("Invalid format in fecha parse");
          if (((t = C[t] || t), e.length > 1e3)) return null;
          var o = {
              year: new Date().getFullYear(),
              month: 0,
              day: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
              isPm: null,
              timezoneOffset: null,
            },
            i = [],
            s = [],
            l = t.replace(a, function (e, t) {
              return s.push(v(t)), "@@@";
            }),
            c = {},
            d = {};
          (l = v(l).replace(n, function (e) {
            var t = O[e],
              r = t[0],
              n = t[1],
              o = t[3];
            if (c[r])
              throw new Error(
                "Invalid format. " + r + " specified twice in format"
              );
            return (c[r] = !0), o && (d[o] = !0), i.push(t), "(" + n + ")";
          })),
            Object.keys(d).forEach(function (e) {
              if (!c[e])
                throw new Error(
                  "Invalid format. " + e + " is required in specified format"
                );
            }),
            (l = l.replace(/@@@/g, function () {
              return s.shift();
            }));
          var f = e.match(new RegExp(l, "i"));
          if (!f) return null;
          for (var h = u(u({}, m), r), p = 1; p < f.length; p++) {
            var g = i[p - 1],
              y = g[0],
              w = g[2],
              b = w ? w(f[p], h) : +f[p];
            if (null == b) return null;
            o[y] = b;
          }
          1 === o.isPm && null != o.hour && 12 != +o.hour
            ? (o.hour = +o.hour + 12)
            : 0 === o.isPm && 12 == +o.hour && (o.hour = 0);
          for (
            var _ = new Date(
                o.year,
                o.month,
                o.day,
                o.hour,
                o.minute,
                o.second,
                o.millisecond
              ),
              E = [
                ["month", "getMonth"],
                ["day", "getDate"],
                ["hour", "getHours"],
                ["minute", "getMinutes"],
                ["second", "getSeconds"],
              ],
              S = ((p = 0), E.length);
            p < S;
            p++
          )
            if (c[E[p][0]] && o[E[p][0]] !== _[E[p][1]]()) return null;
          return null == o.timezoneOffset
            ? _
            : new Date(
                Date.UTC(
                  o.year,
                  o.month,
                  o.day,
                  o.hour,
                  o.minute - o.timezoneOffset,
                  o.second,
                  o.millisecond
                )
              );
        }
        const j = {
          format: M,
          parse: A,
          defaultI18n: p,
          setGlobalDateI18n: g,
          setGlobalDateMasks: R,
        };
      },
      3039: (e) => {
        "use strict";
        var t = Object.prototype.toString;
        e.exports = function (e) {
          if ("string" == typeof e.displayName && e.constructor.name)
            return e.displayName;
          if ("string" == typeof e.name && e.name) return e.name;
          if (
            "object" == typeof e &&
            e.constructor &&
            "string" == typeof e.constructor.name
          )
            return e.constructor.name;
          var r = e.toString(),
            n = t.call(e).slice(8, -1);
          return (
            (r =
              "Function" === n
                ? r.substring(r.indexOf("(") + 1, r.indexOf(")"))
                : n) || "anonymous"
          );
        };
      },
      3603: (e, t, r) => {
        "use strict";
        const { PassThrough: n } = r(2781);
        e.exports = (e) => {
          e = Object.assign({}, e);
          const { array: t } = e;
          let { encoding: r } = e;
          const o = "buffer" === r;
          let i = !1;
          t ? (i = !(r || o)) : (r = r || "utf8"), o && (r = null);
          let s = 0;
          const a = [],
            l = new n({ objectMode: i });
          return (
            r && l.setEncoding(r),
            l.on("data", (e) => {
              a.push(e), i ? (s = a.length) : (s += e.length);
            }),
            (l.getBufferedValue = () =>
              t ? a : o ? Buffer.concat(a, s) : a.join("")),
            (l.getBufferedLength = () => s),
            l
          );
        };
      },
      3675: (e, t, r) => {
        "use strict";
        const n = r(3021),
          o = r(3603);
        class i extends Error {
          constructor() {
            super("maxBuffer exceeded"), (this.name = "MaxBufferError");
          }
        }
        function s(e, t) {
          if (!e) return Promise.reject(new Error("Expected a stream"));
          t = Object.assign({ maxBuffer: 1 / 0 }, t);
          const { maxBuffer: r } = t;
          let s;
          return new Promise((a, l) => {
            const c = (e) => {
              e && (e.bufferedData = s.getBufferedValue()), l(e);
            };
            (s = n(e, o(t), (e) => {
              e ? c(e) : a();
            })),
              s.on("data", () => {
                s.getBufferedLength() > r && c(new i());
              });
          }).then(() => s.getBufferedValue());
        }
        (e.exports = s),
          (e.exports.buffer = (e, t) =>
            s(e, Object.assign({}, t, { encoding: "buffer" }))),
          (e.exports.array = (e, t) =>
            s(e, Object.assign({}, t, { array: !0 }))),
          (e.exports.MaxBufferError = i);
      },
      3901: (e, t, r) => {
        "use strict";
        var n = r(7147);
        e.exports = (function (e) {
          if (null === e || "object" != typeof e) return e;
          if (e instanceof Object) var t = { __proto__: e.__proto__ };
          else t = Object.create(null);
          return (
            Object.getOwnPropertyNames(e).forEach(function (r) {
              Object.defineProperty(
                t,
                r,
                Object.getOwnPropertyDescriptor(e, r)
              );
            }),
            t
          );
        })(n);
      },
      391: (e, t, r) => {
        var n,
          o,
          i = r(7147),
          s = r(9033),
          a = r(1215),
          l = [],
          c = r(3837),
          u = function () {};
        function d(e) {
          s(e),
            (e.gracefulify = d),
            (e.FileReadStream = p),
            (e.FileWriteStream = m),
            (e.createReadStream = function (e, t) {
              return new p(e, t);
            }),
            (e.createWriteStream = function (e, t) {
              return new m(e, t);
            });
          var t = e.readFile;
          e.readFile = function (e, r, n) {
            return (
              "function" == typeof r && ((n = r), (r = null)),
              (function e(r, n, o) {
                return t(r, n, function (t) {
                  !t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
                    ? ("function" == typeof o && o.apply(this, arguments), h())
                    : f([e, [r, n, o]]);
                });
              })(e, r, n)
            );
          };
          var r = e.writeFile;
          e.writeFile = function (e, t, n, o) {
            return (
              "function" == typeof n && ((o = n), (n = null)),
              (function e(t, n, o, i) {
                return r(t, n, o, function (r) {
                  !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
                    ? ("function" == typeof i && i.apply(this, arguments), h())
                    : f([e, [t, n, o, i]]);
                });
              })(e, t, n, o)
            );
          };
          var n = e.appendFile;
          n &&
            (e.appendFile = function (e, t, r, o) {
              return (
                "function" == typeof r && ((o = r), (r = null)),
                (function e(t, r, o, i) {
                  return n(t, r, o, function (n) {
                    !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
                      ? ("function" == typeof i && i.apply(this, arguments),
                        h())
                      : f([e, [t, r, o, i]]);
                  });
                })(e, t, r, o)
              );
            });
          var o = e.readdir;
          function i(t) {
            return o.apply(e, t);
          }
          if (
            ((e.readdir = function (e, t, r) {
              var n = [e];
              return (
                "function" != typeof t ? n.push(t) : (r = t),
                n.push(function (e, t) {
                  t && t.sort && t.sort(),
                    !e || ("EMFILE" !== e.code && "ENFILE" !== e.code)
                      ? ("function" == typeof r && r.apply(this, arguments),
                        h())
                      : f([i, [n]]);
                }),
                i(n)
              );
            }),
            "v0.8" === process.version.substr(0, 4))
          ) {
            var l = a(e);
            (p = l.ReadStream), (m = l.WriteStream);
          }
          var c = e.ReadStream;
          (p.prototype = Object.create(c.prototype)),
            (p.prototype.open = function () {
              var e = this;
              v(e.path, e.flags, e.mode, function (t, r) {
                t
                  ? (e.autoClose && e.destroy(), e.emit("error", t))
                  : ((e.fd = r), e.emit("open", r), e.read());
              });
            });
          var u = e.WriteStream;
          function p(e, t) {
            return this instanceof p
              ? (c.apply(this, arguments), this)
              : p.apply(Object.create(p.prototype), arguments);
          }
          function m(e, t) {
            return this instanceof m
              ? (u.apply(this, arguments), this)
              : m.apply(Object.create(m.prototype), arguments);
          }
          (m.prototype = Object.create(u.prototype)),
            (m.prototype.open = function () {
              var e = this;
              v(e.path, e.flags, e.mode, function (t, r) {
                t
                  ? (e.destroy(), e.emit("error", t))
                  : ((e.fd = r), e.emit("open", r));
              });
            }),
            (e.ReadStream = p),
            (e.WriteStream = m);
          var g = e.open;
          function v(e, t, r, n) {
            return (
              "function" == typeof r && ((n = r), (r = null)),
              (function e(t, r, n, o) {
                return g(t, r, n, function (i, s) {
                  !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
                    ? ("function" == typeof o && o.apply(this, arguments), h())
                    : f([e, [t, r, n, o]]);
                });
              })(e, t, r, n)
            );
          }
          return (e.open = v), e;
        }
        function f(e) {
          u("ENQUEUE", e[0].name, e[1]), l.push(e);
        }
        function h() {
          var e = l.shift();
          e && (u("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]));
        }
        c.debuglog
          ? (u = c.debuglog("gfs4"))
          : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
            (u = function () {
              var e = c.format.apply(c, arguments);
              (e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")), console.error(e);
            }),
          /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
            process.on("exit", function () {
              u(l), r(9491).equal(l.length, 0);
            }),
          (e.exports = d(r(3901))),
          process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && (e.exports = d(i)),
          (e.exports.close = i.close =
            ((n = i.close),
            function (e, t) {
              return n.call(i, e, function (e) {
                e || h(), "function" == typeof t && t.apply(this, arguments);
              });
            })),
          (e.exports.closeSync = i.closeSync =
            ((o = i.closeSync),
            function (e) {
              var t = o.apply(i, arguments);
              return h(), t;
            }));
      },
      1215: (e, t, r) => {
        var n = r(2781).Stream;
        e.exports = function (e) {
          return {
            ReadStream: function t(r, o) {
              if (!(this instanceof t)) return new t(r, o);
              n.call(this);
              var i = this;
              (this.path = r),
                (this.fd = null),
                (this.readable = !0),
                (this.paused = !1),
                (this.flags = "r"),
                (this.mode = 438),
                (this.bufferSize = 65536),
                (o = o || {});
              for (var s = Object.keys(o), a = 0, l = s.length; a < l; a++) {
                var c = s[a];
                this[c] = o[c];
              }
              if (
                (this.encoding && this.setEncoding(this.encoding),
                void 0 !== this.start)
              ) {
                if ("number" != typeof this.start)
                  throw TypeError("start must be a Number");
                if (void 0 === this.end) this.end = 1 / 0;
                else if ("number" != typeof this.end)
                  throw TypeError("end must be a Number");
                if (this.start > this.end)
                  throw new Error("start must be <= end");
                this.pos = this.start;
              }
              null === this.fd
                ? e.open(this.path, this.flags, this.mode, function (e, t) {
                    if (e) return i.emit("error", e), void (i.readable = !1);
                    (i.fd = t), i.emit("open", t), i._read();
                  })
                : process.nextTick(function () {
                    i._read();
                  });
            },
            WriteStream: function t(r, o) {
              if (!(this instanceof t)) return new t(r, o);
              n.call(this),
                (this.path = r),
                (this.fd = null),
                (this.writable = !0),
                (this.flags = "w"),
                (this.encoding = "binary"),
                (this.mode = 438),
                (this.bytesWritten = 0),
                (o = o || {});
              for (var i = Object.keys(o), s = 0, a = i.length; s < a; s++) {
                var l = i[s];
                this[l] = o[l];
              }
              if (void 0 !== this.start) {
                if ("number" != typeof this.start)
                  throw TypeError("start must be a Number");
                if (this.start < 0) throw new Error("start must be >= zero");
                this.pos = this.start;
              }
              (this.busy = !1),
                (this._queue = []),
                null === this.fd &&
                  ((this._open = e.open),
                  this._queue.push([
                    this._open,
                    this.path,
                    this.flags,
                    this.mode,
                    void 0,
                  ]),
                  this.flush());
            },
          };
        };
      },
      9033: (e, t, r) => {
        var n = r(3901),
          o = r(2057),
          i = process.cwd,
          s = null,
          a = process.env.GRACEFUL_FS_PLATFORM || "win32";
        process.cwd = function () {
          return s || (s = i.call(process)), s;
        };
        try {
          process.cwd();
        } catch (e) {}
        var l = process.chdir;
        function c(e) {
          return e
            ? function (t, r, o) {
                return e.call(n, t, r, function (e) {
                  m(e) && (e = null), o && o.apply(this, arguments);
                });
              }
            : e;
        }
        function u(e) {
          return e
            ? function (t, r) {
                try {
                  return e.call(n, t, r);
                } catch (e) {
                  if (!m(e)) throw e;
                }
              }
            : e;
        }
        function d(e) {
          return e
            ? function (t, r, o, i) {
                return e.call(n, t, r, o, function (e) {
                  m(e) && (e = null), i && i.apply(this, arguments);
                });
              }
            : e;
        }
        function f(e) {
          return e
            ? function (t, r, o) {
                try {
                  return e.call(n, t, r, o);
                } catch (e) {
                  if (!m(e)) throw e;
                }
              }
            : e;
        }
        function h(e) {
          return e
            ? function (t, r) {
                return e.call(n, t, function (e, t) {
                  if (!t) return r.apply(this, arguments);
                  t.uid < 0 && (t.uid += 4294967296),
                    t.gid < 0 && (t.gid += 4294967296),
                    r && r.apply(this, arguments);
                });
              }
            : e;
        }
        function p(e) {
          return e
            ? function (t) {
                var r = e.call(n, t);
                return (
                  r.uid < 0 && (r.uid += 4294967296),
                  r.gid < 0 && (r.gid += 4294967296),
                  r
                );
              }
            : e;
        }
        function m(e) {
          return (
            !e ||
            "ENOSYS" === e.code ||
            !(
              (process.getuid && 0 === process.getuid()) ||
              ("EINVAL" !== e.code && "EPERM" !== e.code)
            )
          );
        }
        (process.chdir = function (e) {
          (s = null), l.call(process, e);
        }),
          (e.exports = function (e) {
            var t, r, n;
            o.hasOwnProperty("O_SYMLINK") &&
              process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
              (function (e) {
                (e.lchmod = function (t, r, n) {
                  e.open(t, o.O_WRONLY | o.O_SYMLINK, r, function (t, o) {
                    t
                      ? n && n(t)
                      : e.fchmod(o, r, function (t) {
                          e.close(o, function (e) {
                            n && n(t || e);
                          });
                        });
                  });
                }),
                  (e.lchmodSync = function (t, r) {
                    var n,
                      i = e.openSync(t, o.O_WRONLY | o.O_SYMLINK, r),
                      s = !0;
                    try {
                      (n = e.fchmodSync(i, r)), (s = !1);
                    } finally {
                      if (s)
                        try {
                          e.closeSync(i);
                        } catch (e) {}
                      else e.closeSync(i);
                    }
                    return n;
                  });
              })(e),
              e.lutimes ||
                (function (e) {
                  o.hasOwnProperty("O_SYMLINK")
                    ? ((e.lutimes = function (t, r, n, i) {
                        e.open(t, o.O_SYMLINK, function (t, o) {
                          t
                            ? i && i(t)
                            : e.futimes(o, r, n, function (t) {
                                e.close(o, function (e) {
                                  i && i(t || e);
                                });
                              });
                        });
                      }),
                      (e.lutimesSync = function (t, r, n) {
                        var i,
                          s = e.openSync(t, o.O_SYMLINK),
                          a = !0;
                        try {
                          (i = e.futimesSync(s, r, n)), (a = !1);
                        } finally {
                          if (a)
                            try {
                              e.closeSync(s);
                            } catch (e) {}
                          else e.closeSync(s);
                        }
                        return i;
                      }))
                    : ((e.lutimes = function (e, t, r, n) {
                        n && process.nextTick(n);
                      }),
                      (e.lutimesSync = function () {}));
                })(e),
              (e.chown = d(e.chown)),
              (e.fchown = d(e.fchown)),
              (e.lchown = d(e.lchown)),
              (e.chmod = c(e.chmod)),
              (e.fchmod = c(e.fchmod)),
              (e.lchmod = c(e.lchmod)),
              (e.chownSync = f(e.chownSync)),
              (e.fchownSync = f(e.fchownSync)),
              (e.lchownSync = f(e.lchownSync)),
              (e.chmodSync = u(e.chmodSync)),
              (e.fchmodSync = u(e.fchmodSync)),
              (e.lchmodSync = u(e.lchmodSync)),
              (e.stat = h(e.stat)),
              (e.fstat = h(e.fstat)),
              (e.lstat = h(e.lstat)),
              (e.statSync = p(e.statSync)),
              (e.fstatSync = p(e.fstatSync)),
              (e.lstatSync = p(e.lstatSync)),
              e.lchmod ||
                ((e.lchmod = function (e, t, r) {
                  r && process.nextTick(r);
                }),
                (e.lchmodSync = function () {})),
              e.lchown ||
                ((e.lchown = function (e, t, r, n) {
                  n && process.nextTick(n);
                }),
                (e.lchownSync = function () {})),
              "win32" === a &&
                (e.rename =
                  ((t = e.rename),
                  function (r, n, o) {
                    var i = Date.now(),
                      s = 0;
                    t(r, n, function a(l) {
                      if (
                        l &&
                        ("EACCES" === l.code || "EPERM" === l.code) &&
                        Date.now() - i < 6e4
                      )
                        return (
                          setTimeout(function () {
                            e.stat(n, function (e, i) {
                              e && "ENOENT" === e.code ? t(r, n, a) : o(l);
                            });
                          }, s),
                          void (s < 100 && (s += 10))
                        );
                      o && o(l);
                    });
                  })),
              (e.read =
                ((n = e.read),
                function (t, r, o, i, s, a) {
                  var l;
                  if (a && "function" == typeof a) {
                    var c = 0;
                    l = function (u, d, f) {
                      if (u && "EAGAIN" === u.code && c < 10)
                        return c++, n.call(e, t, r, o, i, s, l);
                      a.apply(this, arguments);
                    };
                  }
                  return n.call(e, t, r, o, i, s, l);
                })),
              (e.readSync =
                ((r = e.readSync),
                function (t, n, o, i, s) {
                  for (var a = 0; ; )
                    try {
                      return r.call(e, t, n, o, i, s);
                    } catch (e) {
                      if ("EAGAIN" === e.code && a < 10) {
                        a++;
                        continue;
                      }
                      throw e;
                    }
                }));
          });
      },
      609: (e, t, r) => {
        try {
          var n = r(3837);
          if ("function" != typeof n.inherits) throw "";
          e.exports = n.inherits;
        } catch (t) {
          e.exports = r(4849);
        }
      },
      4849: (e) => {
        "function" == typeof Object.create
          ? (e.exports = function (e, t) {
              t &&
                ((e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (e.exports = function (e, t) {
              if (t) {
                e.super_ = t;
                var r = function () {};
                (r.prototype = t.prototype),
                  (e.prototype = new r()),
                  (e.prototype.constructor = e);
              }
            });
      },
      818: (e) => {
        "use strict";
        const t = (e) =>
          null !== e && "object" == typeof e && "function" == typeof e.pipe;
        (t.writable = (e) =>
          t(e) &&
          !1 !== e.writable &&
          "function" == typeof e._write &&
          "object" == typeof e._writableState),
          (t.readable = (e) =>
            t(e) &&
            !1 !== e.readable &&
            "function" == typeof e._read &&
            "object" == typeof e._readableState),
          (t.duplex = (e) => t.writable(e) && t.readable(e)),
          (t.transform = (e) =>
            t.duplex(e) && "function" == typeof e._transform),
          (e.exports = t);
      },
      557: (e, t, r) => {
        var n;
        function o(e, t, r) {
          if (("function" == typeof t && ((r = t), (t = {})), !r)) {
            if ("function" != typeof Promise)
              throw new TypeError("callback not provided");
            return new Promise(function (r, n) {
              o(e, t || {}, function (e, t) {
                e ? n(e) : r(t);
              });
            });
          }
          n(e, t || {}, function (e, n) {
            e &&
              ("EACCES" === e.code || (t && t.ignoreErrors)) &&
              ((e = null), (n = !1)),
              r(e, n);
          });
        }
        r(7147),
          (n = r(1905)),
          (e.exports = o),
          (o.sync = function (e, t) {
            try {
              return n.sync(e, t || {});
            } catch (e) {
              if ((t && t.ignoreErrors) || "EACCES" === e.code) return !1;
              throw e;
            }
          });
      },
      1905: (e, t, r) => {
        (e.exports = i),
          (i.sync = function (e, t) {
            return o(n.statSync(e), e, t);
          });
        var n = r(7147);
        function o(e, t, r) {
          return (
            !(!e.isSymbolicLink() && !e.isFile()) &&
            (function (e, t) {
              var r = void 0 !== t.pathExt ? t.pathExt : process.env.PATHEXT;
              if (!r) return !0;
              if (-1 !== (r = r.split(";")).indexOf("")) return !0;
              for (var n = 0; n < r.length; n++) {
                var o = r[n].toLowerCase();
                if (o && e.substr(-o.length).toLowerCase() === o) return !0;
              }
              return !1;
            })(t, r)
          );
        }
        function i(e, t, r) {
          n.stat(e, function (n, i) {
            r(n, !n && o(i, e, t));
          });
        }
      },
      8822: (e, t, r) => {
        var n;
        try {
          n = r(391);
        } catch (e) {
          n = r(7147);
        }
        function o(e, t) {
          var r,
            n = "\n";
          return (
            "object" == typeof t &&
              null !== t &&
              (t.spaces && (r = t.spaces), t.EOL && (n = t.EOL)),
            JSON.stringify(e, t ? t.replacer : null, r).replace(/\n/g, n) + n
          );
        }
        function i(e) {
          return (
            Buffer.isBuffer(e) && (e = e.toString("utf8")),
            e.replace(/^\uFEFF/, "")
          );
        }
        var s = {
          readFile: function (e, t, r) {
            null == r && ((r = t), (t = {})),
              "string" == typeof t && (t = { encoding: t });
            var o = (t = t || {}).fs || n,
              s = !0;
            "throws" in t && (s = t.throws),
              o.readFile(e, t, function (n, o) {
                if (n) return r(n);
                var a;
                o = i(o);
                try {
                  a = JSON.parse(o, t ? t.reviver : null);
                } catch (t) {
                  return s
                    ? ((t.message = e + ": " + t.message), r(t))
                    : r(null, null);
                }
                r(null, a);
              });
          },
          readFileSync: function (e, t) {
            "string" == typeof (t = t || {}) && (t = { encoding: t });
            var r = t.fs || n,
              o = !0;
            "throws" in t && (o = t.throws);
            try {
              var s = r.readFileSync(e, t);
              return (s = i(s)), JSON.parse(s, t.reviver);
            } catch (t) {
              if (o) throw ((t.message = e + ": " + t.message), t);
              return null;
            }
          },
          writeFile: function (e, t, r, i) {
            null == i && ((i = r), (r = {}));
            var s = (r = r || {}).fs || n,
              a = "";
            try {
              a = o(t, r);
            } catch (e) {
              return void (i && i(e, null));
            }
            s.writeFile(e, a, r, i);
          },
          writeFileSync: function (e, t, r) {
            var i = (r = r || {}).fs || n,
              s = o(t, r);
            return i.writeFileSync(e, s, r);
          },
        };
        e.exports = s;
      },
      7325: (e, t, r) => {
        var n = r(1794).Symbol;
        e.exports = n;
      },
      9382: (e) => {
        e.exports = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length, o = Array(n);
            ++r < n;

          )
            o[r] = t(e[r], r, e);
          return o;
        };
      },
      5635: (e, t, r) => {
        var n = r(7325),
          o = r(7926),
          i = r(3792),
          s = n ? n.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : s && s in Object(e)
            ? o(e)
            : i(e);
        };
      },
      8849: (e, t, r) => {
        var n = r(7325),
          o = r(9382),
          i = r(2441),
          s = r(6307),
          a = n ? n.prototype : void 0,
          l = a ? a.toString : void 0;
        e.exports = function e(t) {
          if ("string" == typeof t) return t;
          if (i(t)) return o(t, e) + "";
          if (s(t)) return l ? l.call(t) : "";
          var r = t + "";
          return "0" == r && 1 / t == -1 / 0 ? "-0" : r;
        };
      },
      1331: (e) => {
        var t =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global;
        e.exports = t;
      },
      7926: (e, t, r) => {
        var n = r(7325),
          o = Object.prototype,
          i = o.hasOwnProperty,
          s = o.toString,
          a = n ? n.toStringTag : void 0;
        e.exports = function (e) {
          var t = i.call(e, a),
            r = e[a];
          try {
            e[a] = void 0;
            var n = !0;
          } catch (e) {}
          var o = s.call(e);
          return n && (t ? (e[a] = r) : delete e[a]), o;
        };
      },
      3792: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      1794: (e, t, r) => {
        var n = r(1331),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = n || o || Function("return this")();
        e.exports = i;
      },
      6539: (e) => {
        e.exports = function (e) {
          return function () {
            return e;
          };
        };
      },
      2229: (e, t, r) => {
        var n = r(9948),
          o = /[\\^$.*+?()[\]{}|]/g,
          i = RegExp(o.source);
        e.exports = function (e) {
          return (e = n(e)) && i.test(e) ? e.replace(o, "\\$&") : e;
        };
      },
      2441: (e) => {
        var t = Array.isArray;
        e.exports = t;
      },
      8863: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      6307: (e, t, r) => {
        var n = r(5635),
          o = r(8863);
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == n(e));
        };
      },
      5478: (e) => {
        e.exports = function () {};
      },
      9948: (e, t, r) => {
        var n = r(8849);
        e.exports = function (e) {
          return null == e ? "" : n(e);
        };
      },
      6938: (e, t, r) => {
        "use strict";
        const n = r(9353);
        e.exports = n((e) => ((e.message = `\t${e.message}`), e));
      },
      4139: (e, t, r) => {
        "use strict";
        const { Colorizer: n } = r(838),
          { Padder: o } = r(3885),
          { configs: i, MESSAGE: s } = r(7286);
        class a {
          constructor(e = {}) {
            e.levels || (e.levels = i.cli.levels),
              (this.colorizer = new n(e)),
              (this.padder = new o(e)),
              (this.options = e);
          }
          transform(e, t) {
            return (
              this.colorizer.transform(this.padder.transform(e, t), t),
              (e[s] = `${e.level}:${e.message}`),
              e
            );
          }
        }
        (e.exports = (e) => new a(e)), (e.exports.Format = a);
      },
      838: (e, t, r) => {
        "use strict";
        const n = r(3450),
          { LEVEL: o, MESSAGE: i } = r(7286);
        n.enabled = !0;
        const s = /\s+/;
        class a {
          constructor(e = {}) {
            e.colors && this.addColors(e.colors), (this.options = e);
          }
          static addColors(e) {
            const t = Object.keys(e).reduce(
              (t, r) => ((t[r] = s.test(e[r]) ? e[r].split(s) : e[r]), t),
              {}
            );
            return (
              (a.allColors = Object.assign({}, a.allColors || {}, t)),
              a.allColors
            );
          }
          addColors(e) {
            return a.addColors(e);
          }
          colorize(e, t, r) {
            if ((void 0 === r && (r = t), !Array.isArray(a.allColors[e])))
              return n[a.allColors[e]](r);
            for (let t = 0, o = a.allColors[e].length; t < o; t++)
              r = n[a.allColors[e][t]](r);
            return r;
          }
          transform(e, t) {
            return (
              t.all &&
                "string" == typeof e[i] &&
                (e[i] = this.colorize(e[o], e.level, e[i])),
              (t.level || t.all || !t.message) &&
                (e.level = this.colorize(e[o], e.level)),
              (t.all || t.message) &&
                (e.message = this.colorize(e[o], e.level, e.message)),
              e
            );
          }
        }
        (e.exports = (e) => new a(e)),
          (e.exports.Colorizer = e.exports.Format = a);
      },
      248: (e, t, r) => {
        "use strict";
        const n = r(9353);
        function o(e) {
          if (e.every(i))
            return (t) => {
              let r = t;
              for (let t = 0; t < e.length; t++)
                if (((r = e[t].transform(r, e[t].options)), !r)) return !1;
              return r;
            };
        }
        function i(e) {
          if ("function" != typeof e.transform)
            throw new Error(
              [
                "No transform function found on format. Did you create a format instance?",
                "const myFormat = format(formatFn);",
                "const instance = myFormat();",
              ].join("\n")
            );
          return !0;
        }
        (e.exports = (...e) => {
          const t = n(o(e)),
            r = t();
          return (r.Format = t.Format), r;
        }),
          (e.exports.cascade = o);
      },
      3684: (e, t, r) => {
        "use strict";
        const n = r(9353),
          { LEVEL: o, MESSAGE: i } = r(7286);
        e.exports = n((e, { stack: t }) => {
          if (e instanceof Error) {
            const r = Object.assign({}, e, {
              level: e.level,
              [o]: e[o] || e.level,
              message: e.message,
              [i]: e[i] || e.message,
            });
            return t && (r.stack = e.stack), r;
          }
          if (!(e.message instanceof Error)) return e;
          const r = e.message;
          return (
            Object.assign(e, r),
            (e.message = r.message),
            (e[i] = r.message),
            t && (e.stack = r.stack),
            e
          );
        });
      },
      9353: (e) => {
        "use strict";
        class t extends Error {
          constructor(e) {
            super(
              `Format functions must be synchronous taking a two arguments: (info, opts)\nFound: ${
                e.toString().split("\n")[0]
              }\n`
            ),
              Error.captureStackTrace(this, t);
          }
        }
        e.exports = (e) => {
          if (e.length > 2) throw new t(e);
          function r(e = {}) {
            this.options = e;
          }
          function n(e) {
            return new r(e);
          }
          return (r.prototype.transform = e), (n.Format = r), n;
        };
      },
      3252: (e, t, r) => {
        "use strict";
        const n = (t.format = r(9353));
        function o(e, t) {
          Object.defineProperty(n, e, { get: () => t(), configurable: !0 });
        }
        (t.levels = r(9548)),
          o("align", function () {
            return r(6938);
          }),
          o("errors", function () {
            return r(3684);
          }),
          o("cli", function () {
            return r(4139);
          }),
          o("combine", function () {
            return r(248);
          }),
          o("colorize", function () {
            return r(838);
          }),
          o("json", function () {
            return r(5242);
          }),
          o("label", function () {
            return r(8826);
          }),
          o("logstash", function () {
            return r(6827);
          }),
          o("metadata", function () {
            return r(454);
          }),
          o("ms", function () {
            return r(8416);
          }),
          o("padLevels", function () {
            return r(3885);
          }),
          o("prettyPrint", function () {
            return r(9262);
          }),
          o("printf", function () {
            return r(5606);
          }),
          o("simple", function () {
            return r(8884);
          }),
          o("splat", function () {
            return r(6636);
          }),
          o("timestamp", function () {
            return r(7088);
          }),
          o("uncolorize", function () {
            return r(381);
          });
      },
      5242: (e, t, r) => {
        "use strict";
        const n = r(9353),
          { MESSAGE: o } = r(7286),
          i = r(2776);
        function s(e, t) {
          return "bigint" == typeof t ? t.toString() : t;
        }
        e.exports = n((e, t) => {
          const r = i.configure(t);
          return (e[o] = r(e, t.replacer || s, t.space)), e;
        });
      },
      8826: (e, t, r) => {
        "use strict";
        const n = r(9353);
        e.exports = n((e, t) =>
          t.message
            ? ((e.message = `[${t.label}] ${e.message}`), e)
            : ((e.label = t.label), e)
        );
      },
      9548: (e, t, r) => {
        "use strict";
        const { Colorizer: n } = r(838);
        e.exports = (e) => (n.addColors(e.colors || e), e);
      },
      6827: (e, t, r) => {
        "use strict";
        const n = r(9353),
          { MESSAGE: o } = r(7286),
          i = r(2776);
        e.exports = n((e) => {
          const t = {};
          return (
            e.message && ((t["@message"] = e.message), delete e.message),
            e.timestamp &&
              ((t["@timestamp"] = e.timestamp), delete e.timestamp),
            (t["@fields"] = e),
            (e[o] = i(t)),
            e
          );
        });
      },
      454: (e, t, r) => {
        "use strict";
        const n = r(9353);
        e.exports = n((e, t = {}) => {
          let r = "metadata";
          t.key && (r = t.key);
          let n = [];
          return (
            t.fillExcept || t.fillWith || (n.push("level"), n.push("message")),
            t.fillExcept && (n = t.fillExcept),
            n.length > 0
              ? (function (e, t, r) {
                  const n = t.reduce(
                      (t, r) => ((t[r] = e[r]), delete e[r], t),
                      {}
                    ),
                    o = Object.keys(e).reduce(
                      (t, r) => ((t[r] = e[r]), delete e[r], t),
                      {}
                    );
                  return Object.assign(e, n, { [r]: o }), e;
                })(e, n, r)
              : t.fillWith
              ? (function (e, t, r) {
                  return (
                    (e[r] = t.reduce(
                      (t, r) => ((t[r] = e[r]), delete e[r], t),
                      {}
                    )),
                    e
                  );
                })(e, t.fillWith, r)
              : e
          );
        });
      },
      8416: function (e, t, r) {
        "use strict";
        const n = r(9353),
          o = r(2079);
        e.exports = n((e) => {
          const t = +new Date();
          return (
            (this.diff = t - (this.prevTime || t)),
            (this.prevTime = t),
            (e.ms = `+${o(this.diff)}`),
            e
          );
        });
      },
      3885: (e, t, r) => {
        "use strict";
        const { configs: n, LEVEL: o, MESSAGE: i } = r(7286);
        class s {
          constructor(e = { levels: n.npm.levels }) {
            (this.paddings = s.paddingForLevels(e.levels, e.filler)),
              (this.options = e);
          }
          static getLongestLevel(e) {
            const t = Object.keys(e).map((e) => e.length);
            return Math.max(...t);
          }
          static paddingForLevel(e, t, r) {
            const n = r + 1 - e.length,
              o = Math.floor(n / t.length);
            return `${t}${t.repeat(o)}`.slice(0, n);
          }
          static paddingForLevels(e, t = " ") {
            const r = s.getLongestLevel(e);
            return Object.keys(e).reduce(
              (e, n) => ((e[n] = s.paddingForLevel(n, t, r)), e),
              {}
            );
          }
          transform(e, t) {
            return (
              (e.message = `${this.paddings[e[o]]}${e.message}`),
              e[i] && (e[i] = `${this.paddings[e[o]]}${e[i]}`),
              e
            );
          }
        }
        (e.exports = (e) => new s(e)),
          (e.exports.Padder = e.exports.Format = s);
      },
      9262: (e, t, r) => {
        "use strict";
        const n = r(3837).inspect,
          o = r(9353),
          { LEVEL: i, MESSAGE: s, SPLAT: a } = r(7286);
        e.exports = o((e, t = {}) => {
          const r = Object.assign({}, e);
          return (
            delete r[i],
            delete r[s],
            delete r[a],
            (e[s] = n(r, !1, t.depth || null, t.colorize)),
            e
          );
        });
      },
      5606: (e, t, r) => {
        "use strict";
        const { MESSAGE: n } = r(7286);
        class o {
          constructor(e) {
            this.template = e;
          }
          transform(e) {
            return (e[n] = this.template(e)), e;
          }
        }
        (e.exports = (e) => new o(e)),
          (e.exports.Printf = e.exports.Format = o);
      },
      8884: (e, t, r) => {
        "use strict";
        const n = r(9353),
          { MESSAGE: o } = r(7286),
          i = r(2776);
        e.exports = n((e) => {
          const t = i(
              Object.assign({}, e, {
                level: void 0,
                message: void 0,
                splat: void 0,
              })
            ),
            r = (e.padding && e.padding[e.level]) || "";
          return (
            (e[o] =
              "{}" !== t
                ? `${e.level}:${r} ${e.message} ${t}`
                : `${e.level}:${r} ${e.message}`),
            e
          );
        });
      },
      6636: (e, t, r) => {
        "use strict";
        const n = r(3837),
          { SPLAT: o } = r(7286),
          i = /%[scdjifoO%]/g,
          s = /%%/g;
        class a {
          constructor(e) {
            this.options = e;
          }
          _splat(e, t) {
            const r = e.message,
              i = e[o] || e.splat || [],
              a = r.match(s),
              l = (a && a.length) || 0,
              c = t.length - l - i.length,
              u = c < 0 ? i.splice(c, -1 * c) : [],
              d = u.length;
            if (d) for (let t = 0; t < d; t++) Object.assign(e, u[t]);
            return (e.message = n.format(r, ...i)), e;
          }
          transform(e) {
            const t = e.message,
              r = e[o] || e.splat;
            if (!r || !r.length) return e;
            const n = t && t.match && t.match(i);
            if (!n && (r || r.length)) {
              const t = r.length > 1 ? r.splice(0) : r,
                n = t.length;
              if (n) for (let r = 0; r < n; r++) Object.assign(e, t[r]);
              return e;
            }
            return n ? this._splat(e, n) : e;
          }
        }
        e.exports = (e) => new a(e);
      },
      7088: (e, t, r) => {
        "use strict";
        const n = r(1260),
          o = r(9353);
        e.exports = o(
          (e, t = {}) => (
            t.format &&
              (e.timestamp =
                "function" == typeof t.format
                  ? t.format()
                  : n.format(new Date(), t.format)),
            e.timestamp || (e.timestamp = new Date().toISOString()),
            t.alias && (e[t.alias] = e.timestamp),
            e
          )
        );
      },
      381: (e, t, r) => {
        "use strict";
        const n = r(3450),
          o = r(9353),
          { MESSAGE: i } = r(7286);
        e.exports = o(
          (e, t) => (
            !1 !== t.level && (e.level = n.strip(e.level)),
            !1 !== t.message && (e.message = n.strip(e.message)),
            !1 !== t.raw && e[i] && (e[i] = n.strip(e[i])),
            e
          )
        );
      },
      3229: function (e, t, r) {
        "use strict";
        var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, i) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  e.done
                    ? o(e.value)
                    : new r(function (t) {
                        t(e.value);
                      }).then(s, a);
                }
                l((n = n.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = o(r(3766));
        function s(e, t = "maxAge") {
          let r, o, s;
          const a = () =>
              n(this, void 0, void 0, function* () {
                if (void 0 !== r) return;
                const a = (a) =>
                  n(this, void 0, void 0, function* () {
                    s = i.default();
                    const n = a[1][t] - Date.now();
                    return n <= 0
                      ? (e.delete(a[0]), void s.resolve())
                      : ((r = a[0]),
                        (o = setTimeout(() => {
                          e.delete(a[0]), s && s.resolve();
                        }, n)),
                        "function" == typeof o.unref && o.unref(),
                        s.promise);
                  });
                try {
                  for (const t of e) yield a(t);
                } catch (e) {}
                r = void 0;
              }),
            l = e.set.bind(e);
          return (
            (e.set = (t, n) => {
              e.has(t) && e.delete(t);
              const i = l(t, n);
              return (
                r &&
                  r === t &&
                  ((r = void 0),
                  void 0 !== o && (clearTimeout(o), (o = void 0)),
                  void 0 !== s && (s.reject(void 0), (s = void 0))),
                a(),
                i
              );
            }),
            a(),
            e
          );
        }
        (t.default = s), (e.exports = s), (e.exports.default = s);
      },
      2878: (e, t, r) => {
        "use strict";
        const n = r(1689),
          o = r(3264),
          i = r(3229),
          s = new WeakMap(),
          a = (...e) => {
            if (0 === e.length) return "__defaultKey";
            if (1 === e.length) {
              const [t] = e;
              if (null == t || ("function" != typeof t && "object" != typeof t))
                return t;
            }
            return JSON.stringify(e);
          },
          l = (e, t) => {
            "number" ==
              typeof (t = Object.assign(
                { cacheKey: a, cache: new Map(), cachePromiseRejection: !1 },
                t
              )).maxAge && i(t.cache);
            const { cache: r } = t;
            t.maxAge = t.maxAge || 0;
            const l = function (...n) {
              const i = t.cacheKey(...n);
              if (r.has(i)) return r.get(i).data;
              const s = e.call(this, ...n);
              return (
                ((e, n) => {
                  r.set(e, { data: n, maxAge: Date.now() + t.maxAge });
                })(i, s),
                o(s) &&
                  !1 === t.cachePromiseRejection &&
                  s.catch(() => r.delete(i)),
                s
              );
            };
            try {
              n(l, e);
            } catch (e) {}
            return s.set(l, t.cache), l;
          };
        (e.exports = l),
          (e.exports.default = l),
          (e.exports.clear = (e) => {
            const t = s.get(e);
            t && "function" == typeof t.clear && t.clear();
          });
      },
      1689: (e) => {
        "use strict";
        const t = (e, t) => {
          for (const r of Reflect.ownKeys(t))
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          return e;
        };
        (e.exports = t), (e.exports.default = t);
      },
      7207: (e, t, r) => {
        var n = r(1017),
          o = r(7147),
          i = parseInt("0777", 8);
        function s(e, t, r, a) {
          "function" == typeof t
            ? ((r = t), (t = {}))
            : (t && "object" == typeof t) || (t = { mode: t });
          var l = t.mode,
            c = t.fs || o;
          void 0 === l && (l = i), a || (a = null);
          var u = r || function () {};
          (e = n.resolve(e)),
            c.mkdir(e, l, function (r) {
              if (!r) return u(null, (a = a || e));
              if ("ENOENT" === r.code) {
                if (n.dirname(e) === e) return u(r);
                s(n.dirname(e), t, function (r, n) {
                  r ? u(r, n) : s(e, t, u, n);
                });
              } else
                c.stat(e, function (e, t) {
                  e || !t.isDirectory() ? u(r, a) : u(null, a);
                });
            });
        }
        (e.exports = s.mkdirp = s.mkdirP = s),
          (s.sync = function e(t, r, s) {
            (r && "object" == typeof r) || (r = { mode: r });
            var a = r.mode,
              l = r.fs || o;
            void 0 === a && (a = i), s || (s = null), (t = n.resolve(t));
            try {
              l.mkdirSync(t, a), (s = s || t);
            } catch (o) {
              if ("ENOENT" === o.code) (s = e(n.dirname(t), r, s)), e(t, r, s);
              else {
                var c;
                try {
                  c = l.statSync(t);
                } catch (e) {
                  throw o;
                }
                if (!c.isDirectory()) throw o;
              }
            }
            return s;
          });
      },
      2079: (e) => {
        var t = 1e3,
          r = 60 * t,
          n = 60 * r,
          o = 24 * n;
        function i(e, t, r, n) {
          var o = t >= 1.5 * r;
          return Math.round(e / r) + " " + n + (o ? "s" : "");
        }
        e.exports = function (e, s) {
          s = s || {};
          var a,
            l,
            c = typeof e;
          if ("string" === c && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var i =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                if (i) {
                  var s = parseFloat(i[1]);
                  switch ((i[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s;
                    case "days":
                    case "day":
                    case "d":
                      return s * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s * r;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === c && isFinite(e))
            return s.long
              ? ((a = e),
                (l = Math.abs(a)) >= o
                  ? i(a, l, o, "day")
                  : l >= n
                  ? i(a, l, n, "hour")
                  : l >= r
                  ? i(a, l, r, "minute")
                  : l >= t
                  ? i(a, l, t, "second")
                  : a + " ms")
              : (function (e) {
                  var i = Math.abs(e);
                  return i >= o
                    ? Math.round(e / o) + "d"
                    : i >= n
                    ? Math.round(e / n) + "h"
                    : i >= r
                    ? Math.round(e / r) + "m"
                    : i >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
      5419: (e) => {
        "use strict";
        e.exports = function (e) {
          try {
            return e();
          } catch (e) {}
        };
      },
      1829: (e, t, r) => {
        "use strict";
        const n = r(1017),
          o = r(5620);
        (e.exports = (e) => {
          let t;
          e = Object.assign({ cwd: process.cwd(), path: process.env[o()] }, e);
          let r = n.resolve(e.cwd);
          const i = [];
          for (; t !== r; )
            i.push(n.join(r, "node_modules/.bin")),
              (t = r),
              (r = n.resolve(r, ".."));
          return (
            i.push(n.dirname(process.execPath)),
            i.concat(e.path).join(n.delimiter)
          );
        }),
          (e.exports.env = (t) => {
            t = Object.assign({ env: process.env }, t);
            const r = Object.assign({}, t.env),
              n = o({ env: r });
            return (t.path = r[n]), (r[n] = e.exports(t)), r;
          });
      },
      3417: (e, t, r) => {
        var n = r(4934);
        function o(e) {
          var t = function () {
            return t.called
              ? t.value
              : ((t.called = !0), (t.value = e.apply(this, arguments)));
          };
          return (t.called = !1), t;
        }
        function i(e) {
          var t = function () {
              if (t.called) throw new Error(t.onceError);
              return (t.called = !0), (t.value = e.apply(this, arguments));
            },
            r = e.name || "Function wrapped with `once`";
          return (
            (t.onceError = r + " shouldn't be called more than once"),
            (t.called = !1),
            t
          );
        }
        (e.exports = n(o)),
          (e.exports.strict = n(i)),
          (o.proto = o(function () {
            Object.defineProperty(Function.prototype, "once", {
              value: function () {
                return o(this);
              },
              configurable: !0,
            }),
              Object.defineProperty(Function.prototype, "onceStrict", {
                value: function () {
                  return i(this);
                },
                configurable: !0,
              });
          }));
      },
      7004: (e, t, r) => {
        "use strict";
        var n = r(3039);
        e.exports = function (e) {
          var t,
            r = 0;
          function o() {
            return (
              r || ((r = 1), (t = e.apply(this, arguments)), (e = null)), t
            );
          }
          return (o.displayName = n(e)), o;
        };
      },
      3766: (e) => {
        "use strict";
        e.exports = () => {
          const e = {};
          return (
            (e.promise = new Promise((t, r) => {
              (e.resolve = t), (e.reject = r);
            })),
            e
          );
        };
      },
      8911: (e) => {
        "use strict";
        e.exports = (e, t) => (
          (t = t || (() => {})),
          e.then(
            (e) =>
              new Promise((e) => {
                e(t());
              }).then(() => e),
            (e) =>
              new Promise((e) => {
                e(t());
              }).then(() => {
                throw e;
              })
          )
        );
      },
      3264: (e) => {
        "use strict";
        const t = (e) =>
          e instanceof Promise ||
          (null !== e &&
            "object" == typeof e &&
            "function" == typeof e.then &&
            "function" == typeof e.catch);
        (e.exports = t), (e.exports.default = t);
      },
      5620: (e) => {
        "use strict";
        e.exports = (e) => {
          const t = (e = e || {}).env || process.env;
          return "win32" !== (e.platform || "win32")
            ? "PATH"
            : Object.keys(t).find((e) => "PATH" === e.toUpperCase()) || "Path";
        };
      },
      3021: (e, t, r) => {
        var n = r(3417),
          o = r(3558),
          i = r(7147),
          s = function () {},
          a = /^v?\.0/.test(process.version),
          l = function (e) {
            return "function" == typeof e;
          },
          c = function (e, t, r, c) {
            c = n(c);
            var u = !1;
            e.on("close", function () {
              u = !0;
            }),
              o(e, { readable: t, writable: r }, function (e) {
                if (e) return c(e);
                (u = !0), c();
              });
            var d = !1;
            return function (t) {
              if (!u && !d)
                return (
                  (d = !0),
                  (function (e) {
                    return (
                      !!a &&
                      !!i &&
                      (e instanceof (i.ReadStream || s) ||
                        e instanceof (i.WriteStream || s)) &&
                      l(e.close)
                    );
                  })(e)
                    ? e.close(s)
                    : (function (e) {
                        return e.setHeader && l(e.abort);
                      })(e)
                    ? e.abort()
                    : l(e.destroy)
                    ? e.destroy()
                    : void c(t || new Error("stream was destroyed"))
                );
            };
          },
          u = function (e) {
            e();
          },
          d = function (e, t) {
            return e.pipe(t);
          };
        e.exports = function () {
          var e,
            t = Array.prototype.slice.call(arguments),
            r = (l(t[t.length - 1] || s) && t.pop()) || s;
          if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
            throw new Error("pump requires two streams per minimum");
          var n = t.map(function (o, i) {
            var s = i < t.length - 1;
            return c(o, s, i > 0, function (t) {
              e || (e = t), t && n.forEach(u), s || (n.forEach(u), r(e));
            });
          });
          return t.reduce(d);
        };
      },
      4274: (e) => {
        "use strict";
        const t = {};
        function r(e, r, n) {
          n || (n = Error);
          class o extends n {
            constructor(e, t, n) {
              super(
                (function (e, t, n) {
                  return "string" == typeof r ? r : r(e, t, n);
                })(e, t, n)
              );
            }
          }
          (o.prototype.name = n.name), (o.prototype.code = e), (t[e] = o);
        }
        function n(e, t) {
          if (Array.isArray(e)) {
            const r = e.length;
            return (
              (e = e.map((e) => String(e))),
              r > 2
                ? `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1]
                : 2 === r
                ? `one of ${t} ${e[0]} or ${e[1]}`
                : `of ${t} ${e[0]}`
            );
          }
          return `of ${t} ${String(e)}`;
        }
        r(
          "ERR_INVALID_OPT_VALUE",
          function (e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"';
          },
          TypeError
        ),
          r(
            "ERR_INVALID_ARG_TYPE",
            function (e, t, r) {
              let o;
              var i;
              let s;
              if (
                ("string" == typeof t &&
                ((i = "not "), t.substr(0, i.length) === i)
                  ? ((o = "must not be"), (t = t.replace(/^not /, "")))
                  : (o = "must be"),
                (function (e, t, r) {
                  return (
                    (void 0 === r || r > e.length) && (r = e.length),
                    e.substring(r - t.length, r) === t
                  );
                })(e, " argument"))
              )
                s = `The ${e} ${o} ${n(t, "type")}`;
              else {
                s = `The "${e}" ${
                  ("number" != typeof l && (l = 0),
                  l + ".".length > (a = e).length || -1 === a.indexOf(".", l)
                    ? "argument"
                    : "property")
                } ${o} ${n(t, "type")}`;
              }
              var a, l;
              return (s += ". Received type " + typeof r), s;
            },
            TypeError
          ),
          r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
          r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
            return "The " + e + " method is not implemented";
          }),
          r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
          r("ERR_STREAM_DESTROYED", function (e) {
            return "Cannot call " + e + " after a stream was destroyed";
          }),
          r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
          r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
          r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
          r(
            "ERR_STREAM_NULL_VALUES",
            "May not write null values to stream",
            TypeError
          ),
          r(
            "ERR_UNKNOWN_ENCODING",
            function (e) {
              return "Unknown encoding: " + e;
            },
            TypeError
          ),
          r(
            "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
            "stream.unshift() after end event"
          ),
          (e.exports.q = t);
      },
      686: (e, t, r) => {
        "use strict";
        var n =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
        e.exports = c;
        var o = r(4079),
          i = r(1739);
        r(609)(c, o);
        for (var s = n(i.prototype), a = 0; a < s.length; a++) {
          var l = s[a];
          c.prototype[l] || (c.prototype[l] = i.prototype[l]);
        }
        function c(e) {
          if (!(this instanceof c)) return new c(e);
          o.call(this, e),
            i.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", u)));
        }
        function u() {
          this._writableState.ended || process.nextTick(d, this);
        }
        function d(e) {
          e.end();
        }
        Object.defineProperty(c.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(c.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(c.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(c.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            },
          });
      },
      5114: (e, t, r) => {
        "use strict";
        e.exports = o;
        var n = r(3672);
        function o(e) {
          if (!(this instanceof o)) return new o(e);
          n.call(this, e);
        }
        r(609)(o, n),
          (o.prototype._transform = function (e, t, r) {
            r(null, e);
          });
      },
      4079: (e, t, r) => {
        "use strict";
        var n;
        (e.exports = x), (x.ReadableState = S), r(2361).EventEmitter;
        var o,
          i = function (e, t) {
            return e.listeners(t).length;
          },
          s = r(1647),
          a = r(4300).Buffer,
          l = global.Uint8Array || function () {},
          c = r(3837);
        o = c && c.debuglog ? c.debuglog("stream") : function () {};
        var u,
          d,
          f,
          h = r(4888),
          p = r(7498),
          m = r(653).getHighWaterMark,
          g = r(4274).q,
          v = g.ERR_INVALID_ARG_TYPE,
          y = g.ERR_STREAM_PUSH_AFTER_EOF,
          w = g.ERR_METHOD_NOT_IMPLEMENTED,
          b = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(609)(x, s);
        var _ = p.errorOrDestroy,
          E = ["error", "close", "destroy", "pause", "resume"];
        function S(e, t, o) {
          (n = n || r(686)),
            (e = e || {}),
            "boolean" != typeof o && (o = t instanceof n),
            (this.objectMode = !!e.objectMode),
            o && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = m(this, e, "readableHighWaterMark", o)),
            (this.buffer = new h()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (u || (u = r(3976).s),
              (this.decoder = new u(e.encoding)),
              (this.encoding = e.encoding));
        }
        function x(e) {
          if (((n = n || r(686)), !(this instanceof x))) return new x(e);
          var t = this instanceof n;
          (this._readableState = new S(e, this, t)),
            (this.readable = !0),
            e &&
              ("function" == typeof e.read && (this._read = e.read),
              "function" == typeof e.destroy && (this._destroy = e.destroy)),
            s.call(this);
        }
        function O(e, t, r, n, i) {
          o("readableAddChunk", t);
          var s,
            c = e._readableState;
          if (null === t)
            (c.reading = !1),
              (function (e, t) {
                if ((o("onEofChunk"), !t.ended)) {
                  if (t.decoder) {
                    var r = t.decoder.end();
                    r &&
                      r.length &&
                      (t.buffer.push(r),
                      (t.length += t.objectMode ? 1 : r.length));
                  }
                  (t.ended = !0),
                    t.sync
                      ? A(e)
                      : ((t.needReadable = !1),
                        t.emittedReadable || ((t.emittedReadable = !0), j(e)));
                }
              })(e, c);
          else if (
            (i ||
              (s = (function (e, t) {
                var r, n;
                return (
                  (n = t),
                  a.isBuffer(n) ||
                    n instanceof l ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new v("chunk", ["string", "Buffer", "Uint8Array"], t)),
                  r
                );
              })(c, t)),
            s)
          )
            _(e, s);
          else if (c.objectMode || (t && t.length > 0))
            if (
              ("string" == typeof t ||
                c.objectMode ||
                Object.getPrototypeOf(t) === a.prototype ||
                (t = (function (e) {
                  return a.from(e);
                })(t)),
              n)
            )
              c.endEmitted ? _(e, new b()) : C(e, c, t, !0);
            else if (c.ended) _(e, new y());
            else {
              if (c.destroyed) return !1;
              (c.reading = !1),
                c.decoder && !r
                  ? ((t = c.decoder.write(t)),
                    c.objectMode || 0 !== t.length ? C(e, c, t, !1) : k(e, c))
                  : C(e, c, t, !1);
            }
          else n || ((c.reading = !1), k(e, c));
          return !c.ended && (c.length < c.highWaterMark || 0 === c.length);
        }
        function C(e, t, r, n) {
          t.flowing && 0 === t.length && !t.sync
            ? ((t.awaitDrain = 0), e.emit("data", r))
            : ((t.length += t.objectMode ? 1 : r.length),
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && A(e)),
            k(e, t);
        }
        Object.defineProperty(x.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (x.prototype.destroy = p.destroy),
          (x.prototype._undestroy = p.undestroy),
          (x.prototype._destroy = function (e, t) {
            t(e);
          }),
          (x.prototype.push = function (e, t) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : "string" == typeof e &&
                  ((t = t || n.defaultEncoding) !== n.encoding &&
                    ((e = a.from(e, t)), (t = "")),
                  (r = !0)),
              O(this, e, t, !1, r)
            );
          }),
          (x.prototype.unshift = function (e) {
            return O(this, e, null, !0, !1);
          }),
          (x.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (x.prototype.setEncoding = function (e) {
            u || (u = r(3976).s);
            var t = new u(e);
            (this._readableState.decoder = t),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var n = this._readableState.buffer.head, o = ""; null !== n; )
              (o += t.write(n.data)), (n = n.next);
            return (
              this._readableState.buffer.clear(),
              "" !== o && this._readableState.buffer.push(o),
              (this._readableState.length = o.length),
              this
            );
          });
        var R = 1073741824;
        function M(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e != e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function (e) {
                  return (
                    e >= R
                      ? (e = R)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function A(e) {
          var t = e._readableState;
          o("emitReadable", t.needReadable, t.emittedReadable),
            (t.needReadable = !1),
            t.emittedReadable ||
              (o("emitReadable", t.flowing),
              (t.emittedReadable = !0),
              process.nextTick(j, e));
        }
        function j(e) {
          var t = e._readableState;
          o("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed ||
              (!t.length && !t.ended) ||
              (e.emit("readable"), (t.emittedReadable = !1)),
            (t.needReadable =
              !t.flowing && !t.ended && t.length <= t.highWaterMark),
            D(e);
        }
        function k(e, t) {
          t.readingMore || ((t.readingMore = !0), process.nextTick(T, e, t));
        }
        function T(e, t) {
          for (
            ;
            !t.reading &&
            !t.ended &&
            (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

          ) {
            var r = t.length;
            if ((o("maybeReadMore read 0"), e.read(0), r === t.length)) break;
          }
          t.readingMore = !1;
        }
        function L(e) {
          var t = e._readableState;
          (t.readableListening = e.listenerCount("readable") > 0),
            t.resumeScheduled && !t.paused
              ? (t.flowing = !0)
              : e.listenerCount("data") > 0 && e.resume();
        }
        function N(e) {
          o("readable nexttick read 0"), e.read(0);
        }
        function P(e, t) {
          o("resume", t.reading),
            t.reading || e.read(0),
            (t.resumeScheduled = !1),
            e.emit("resume"),
            D(e),
            t.flowing && !t.reading && e.read(0);
        }
        function D(e) {
          var t = e._readableState;
          for (o("flow", t.flowing); t.flowing && null !== e.read(); );
        }
        function $(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join("")
                    : 1 === t.buffer.length
                    ? t.buffer.first()
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = t.buffer.consume(e, t.decoder)),
              r);
          var r;
        }
        function I(e) {
          var t = e._readableState;
          o("endReadable", t.endEmitted),
            t.endEmitted || ((t.ended = !0), process.nextTick(F, t, e));
        }
        function F(e, t) {
          if (
            (o("endReadableNT", e.endEmitted, e.length),
            !e.endEmitted &&
              0 === e.length &&
              ((e.endEmitted = !0),
              (t.readable = !1),
              t.emit("end"),
              e.autoDestroy))
          ) {
            var r = t._writableState;
            (!r || (r.autoDestroy && r.finished)) && t.destroy();
          }
        }
        function B(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        (x.prototype.read = function (e) {
          o("read", e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              ((0 !== t.highWaterMark
                ? t.length >= t.highWaterMark
                : t.length > 0) ||
                t.ended))
          )
            return (
              o("read: emitReadable", t.length, t.ended),
              0 === t.length && t.ended ? I(this) : A(this),
              null
            );
          if (0 === (e = M(e, t)) && t.ended)
            return 0 === t.length && I(this), null;
          var n,
            i = t.needReadable;
          return (
            o("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              o("length less than watermark", (i = !0)),
            t.ended || t.reading
              ? o("reading or ended", (i = !1))
              : i &&
                (o("do read"),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = M(r, t))),
            null === (n = e > 0 ? $(e, t) : null)
              ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
              : ((t.length -= e), (t.awaitDrain = 0)),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && I(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
          (x.prototype._read = function (e) {
            _(this, new w("_read()"));
          }),
          (x.prototype.pipe = function (e, t) {
            var r = this,
              n = this._readableState;
            switch (n.pipesCount) {
              case 0:
                n.pipes = e;
                break;
              case 1:
                n.pipes = [n.pipes, e];
                break;
              default:
                n.pipes.push(e);
            }
            (n.pipesCount += 1), o("pipe count=%d opts=%j", n.pipesCount, t);
            var s =
              (t && !1 === t.end) ||
              e === process.stdout ||
              e === process.stderr
                ? p
                : a;
            function a() {
              o("onend"), e.end();
            }
            n.endEmitted ? process.nextTick(s) : r.once("end", s),
              e.on("unpipe", function t(i, s) {
                o("onunpipe"),
                  i === r &&
                    s &&
                    !1 === s.hasUnpiped &&
                    ((s.hasUnpiped = !0),
                    o("cleanup"),
                    e.removeListener("close", f),
                    e.removeListener("finish", h),
                    e.removeListener("drain", l),
                    e.removeListener("error", d),
                    e.removeListener("unpipe", t),
                    r.removeListener("end", a),
                    r.removeListener("end", p),
                    r.removeListener("data", u),
                    (c = !0),
                    !n.awaitDrain ||
                      (e._writableState && !e._writableState.needDrain) ||
                      l());
              });
            var l = (function (e) {
              return function () {
                var t = e._readableState;
                o("pipeOnDrain", t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    i(e, "data") &&
                    ((t.flowing = !0), D(e));
              };
            })(r);
            e.on("drain", l);
            var c = !1;
            function u(t) {
              o("ondata");
              var i = e.write(t);
              o("dest.write", i),
                !1 === i &&
                  (((1 === n.pipesCount && n.pipes === e) ||
                    (n.pipesCount > 1 && -1 !== B(n.pipes, e))) &&
                    !c &&
                    (o("false write response, pause", n.awaitDrain),
                    n.awaitDrain++),
                  r.pause());
            }
            function d(t) {
              o("onerror", t),
                p(),
                e.removeListener("error", d),
                0 === i(e, "error") && _(e, t);
            }
            function f() {
              e.removeListener("finish", h), p();
            }
            function h() {
              o("onfinish"), e.removeListener("close", f), p();
            }
            function p() {
              o("unpipe"), r.unpipe(e);
            }
            return (
              r.on("data", u),
              (function (e, t, r) {
                if ("function" == typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events.error
                  ? Array.isArray(e._events.error)
                    ? e._events.error.unshift(r)
                    : (e._events.error = [r, e._events.error])
                  : e.on(t, r);
              })(e, "error", d),
              e.once("close", f),
              e.once("finish", h),
              e.emit("pipe", r),
              n.flowing || (o("pipe resume"), r.resume()),
              e
            );
          }),
          (x.prototype.unpipe = function (e) {
            var t = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit("unpipe", this, r)),
                this
              );
            if (!e) {
              var n = t.pipes,
                o = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var i = 0; i < o; i++)
                n[i].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var s = B(t.pipes, e);
            return (
              -1 === s ||
                (t.pipes.splice(s, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit("unpipe", this, r)),
              this
            );
          }),
          (x.prototype.on = function (e, t) {
            var r = s.prototype.on.call(this, e, t),
              n = this._readableState;
            return (
              "data" === e
                ? ((n.readableListening = this.listenerCount("readable") > 0),
                  !1 !== n.flowing && this.resume())
                : "readable" === e &&
                  (n.endEmitted ||
                    n.readableListening ||
                    ((n.readableListening = n.needReadable = !0),
                    (n.flowing = !1),
                    (n.emittedReadable = !1),
                    o("on readable", n.length, n.reading),
                    n.length
                      ? A(this)
                      : n.reading || process.nextTick(N, this))),
              r
            );
          }),
          (x.prototype.addListener = x.prototype.on),
          (x.prototype.removeListener = function (e, t) {
            var r = s.prototype.removeListener.call(this, e, t);
            return "readable" === e && process.nextTick(L, this), r;
          }),
          (x.prototype.removeAllListeners = function (e) {
            var t = s.prototype.removeAllListeners.apply(this, arguments);
            return (
              ("readable" !== e && void 0 !== e) || process.nextTick(L, this), t
            );
          }),
          (x.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (o("resume"),
                (e.flowing = !e.readableListening),
                (function (e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), process.nextTick(P, e, t));
                })(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (x.prototype.pause = function () {
            return (
              o("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (o("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (x.prototype.wrap = function (e) {
            var t = this,
              r = this._readableState,
              n = !1;
            for (var i in (e.on("end", function () {
              if ((o("wrapped end"), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on("data", function (i) {
              o("wrapped data"),
                r.decoder && (i = r.decoder.write(i)),
                (r.objectMode && null == i) ||
                  ((r.objectMode || (i && i.length)) &&
                    (t.push(i) || ((n = !0), e.pause())));
            }),
            e))
              void 0 === this[i] &&
                "function" == typeof e[i] &&
                (this[i] = (function (t) {
                  return function () {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var s = 0; s < E.length; s++)
              e.on(E[s], this.emit.bind(this, E[s]));
            return (
              (this._read = function (t) {
                o("wrapped _read", t), n && ((n = !1), e.resume());
              }),
              this
            );
          }),
          "function" == typeof Symbol &&
            (x.prototype[Symbol.asyncIterator] = function () {
              return void 0 === d && (d = r(3105)), d(this);
            }),
          Object.defineProperty(x.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(x.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(x.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState && (this._readableState.flowing = e);
            },
          }),
          (x._fromList = $),
          Object.defineProperty(x.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" == typeof Symbol &&
            (x.from = function (e, t) {
              return void 0 === f && (f = r(2286)), f(x, e, t);
            });
      },
      3672: (e, t, r) => {
        "use strict";
        e.exports = u;
        var n = r(4274).q,
          o = n.ERR_METHOD_NOT_IMPLEMENTED,
          i = n.ERR_MULTIPLE_CALLBACK,
          s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
          a = n.ERR_TRANSFORM_WITH_LENGTH_0,
          l = r(686);
        function c(e, t) {
          var r = this._transformState;
          r.transforming = !1;
          var n = r.writecb;
          if (null === n) return this.emit("error", new i());
          (r.writechunk = null),
            (r.writecb = null),
            null != t && this.push(t),
            n(e);
          var o = this._readableState;
          (o.reading = !1),
            (o.needReadable || o.length < o.highWaterMark) &&
              this._read(o.highWaterMark);
        }
        function u(e) {
          if (!(this instanceof u)) return new u(e);
          l.call(this, e),
            (this._transformState = {
              afterTransform: c.bind(this),
              needTransform: !1,
              transforming: !1,
              writecb: null,
              writechunk: null,
              writeencoding: null,
            }),
            (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            e &&
              ("function" == typeof e.transform &&
                (this._transform = e.transform),
              "function" == typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", d);
        }
        function d() {
          var e = this;
          "function" != typeof this._flush || this._readableState.destroyed
            ? f(this, null, null)
            : this._flush(function (t, r) {
                f(e, t, r);
              });
        }
        function f(e, t, r) {
          if (t) return e.emit("error", t);
          if ((null != r && e.push(r), e._writableState.length)) throw new a();
          if (e._transformState.transforming) throw new s();
          return e.push(null);
        }
        r(609)(u, l),
          (u.prototype.push = function (e, t) {
            return (
              (this._transformState.needTransform = !1),
              l.prototype.push.call(this, e, t)
            );
          }),
          (u.prototype._transform = function (e, t, r) {
            r(new o("_transform()"));
          }),
          (u.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (
              ((n.writecb = r),
              (n.writechunk = e),
              (n.writeencoding = t),
              !n.transforming)
            ) {
              var o = this._readableState;
              (n.needTransform ||
                o.needReadable ||
                o.length < o.highWaterMark) &&
                this._read(o.highWaterMark);
            }
          }),
          (u.prototype._read = function (e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming
              ? (t.needTransform = !0)
              : ((t.transforming = !0),
                this._transform(
                  t.writechunk,
                  t.writeencoding,
                  t.afterTransform
                ));
          }),
          (u.prototype._destroy = function (e, t) {
            l.prototype._destroy.call(this, e, function (e) {
              t(e);
            });
          });
      },
      1739: (e, t, r) => {
        "use strict";
        function n(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (e, t, r) {
                var n = e.entry;
                for (e.entry = null; n; ) {
                  var o = n.callback;
                  t.pendingcb--, o(undefined), (n = n.next);
                }
                t.corkedRequestsFree.next = e;
              })(t, e);
            });
        }
        var o;
        (e.exports = x), (x.WritableState = S);
        var i,
          s = { deprecate: r(5902) },
          a = r(1647),
          l = r(4300).Buffer,
          c = global.Uint8Array || function () {},
          u = r(7498),
          d = r(653).getHighWaterMark,
          f = r(4274).q,
          h = f.ERR_INVALID_ARG_TYPE,
          p = f.ERR_METHOD_NOT_IMPLEMENTED,
          m = f.ERR_MULTIPLE_CALLBACK,
          g = f.ERR_STREAM_CANNOT_PIPE,
          v = f.ERR_STREAM_DESTROYED,
          y = f.ERR_STREAM_NULL_VALUES,
          w = f.ERR_STREAM_WRITE_AFTER_END,
          b = f.ERR_UNKNOWN_ENCODING,
          _ = u.errorOrDestroy;
        function E() {}
        function S(e, t, i) {
          (o = o || r(686)),
            (e = e || {}),
            "boolean" != typeof i && (i = t instanceof o),
            (this.objectMode = !!e.objectMode),
            i && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = d(this, e, "writableHighWaterMark", i)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var s = !1 === e.decodeStrings;
          (this.decodeStrings = !s),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              !(function (e, t) {
                var r = e._writableState,
                  n = r.sync,
                  o = r.writecb;
                if ("function" != typeof o) throw new m();
                if (
                  ((function (e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function (e, t, r, n, o) {
                    --t.pendingcb,
                      r
                        ? (process.nextTick(o, n),
                          process.nextTick(j, e, t),
                          (e._writableState.errorEmitted = !0),
                          _(e, n))
                        : (o(n),
                          (e._writableState.errorEmitted = !0),
                          _(e, n),
                          j(e, t));
                  })(e, r, n, t, o);
                else {
                  var i = M(r) || e.destroyed;
                  i ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    R(e, r),
                    n ? process.nextTick(C, e, r, i, o) : C(e, r, i, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new n(this));
        }
        function x(e) {
          var t = this instanceof (o = o || r(686));
          if (!t && !i.call(x, this)) return new x(e);
          (this._writableState = new S(e, this, t)),
            (this.writable = !0),
            e &&
              ("function" == typeof e.write && (this._write = e.write),
              "function" == typeof e.writev && (this._writev = e.writev),
              "function" == typeof e.destroy && (this._destroy = e.destroy),
              "function" == typeof e.final && (this._final = e.final)),
            a.call(this);
        }
        function O(e, t, r, n, o, i, s) {
          (t.writelen = n),
            (t.writecb = s),
            (t.writing = !0),
            (t.sync = !0),
            t.destroyed
              ? t.onwrite(new v("write"))
              : r
              ? e._writev(o, t.onwrite)
              : e._write(o, i, t.onwrite),
            (t.sync = !1);
        }
        function C(e, t, r, n) {
          r ||
            (function (e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit("drain"));
            })(e, t),
            t.pendingcb--,
            n(),
            j(e, t);
        }
        function R(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var o = t.bufferedRequestCount,
              i = new Array(o),
              s = t.corkedRequestsFree;
            s.entry = r;
            for (var a = 0, l = !0; r; )
              (i[a] = r), r.isBuf || (l = !1), (r = r.next), (a += 1);
            (i.allBuffers = l),
              O(e, t, !0, t.length, i, "", s.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              s.next
                ? ((t.corkedRequestsFree = s.next), (s.next = null))
                : (t.corkedRequestsFree = new n(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var c = r.chunk,
                u = r.encoding,
                d = r.callback;
              if (
                (O(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }
        function M(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function A(e, t) {
          e._final(function (r) {
            t.pendingcb--,
              r && _(e, r),
              (t.prefinished = !0),
              e.emit("prefinish"),
              j(e, t);
          });
        }
        function j(e, t) {
          var r = M(t);
          if (
            r &&
            ((function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++,
                    (t.finalCalled = !0),
                    process.nextTick(A, e, t)));
            })(e, t),
            0 === t.pendingcb &&
              ((t.finished = !0), e.emit("finish"), t.autoDestroy))
          ) {
            var n = e._readableState;
            (!n || (n.autoDestroy && n.endEmitted)) && e.destroy();
          }
          return r;
        }
        r(609)(x, a),
          (S.prototype.getBuffer = function () {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function () {
            try {
              Object.defineProperty(S.prototype, "buffer", {
                get: s.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (e) {}
          })(),
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((i = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(x, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!i.call(this, e) ||
                    (this === x && e && e._writableState instanceof S)
                  );
                },
              }))
            : (i = function (e) {
                return e instanceof this;
              }),
          (x.prototype.pipe = function () {
            _(this, new g());
          }),
          (x.prototype.write = function (e, t, r) {
            var n,
              o = this._writableState,
              i = !1,
              s = !o.objectMode && ((n = e), l.isBuffer(n) || n instanceof c);
            return (
              s &&
                !l.isBuffer(e) &&
                (e = (function (e) {
                  return l.from(e);
                })(e)),
              "function" == typeof t && ((r = t), (t = null)),
              s ? (t = "buffer") : t || (t = o.defaultEncoding),
              "function" != typeof r && (r = E),
              o.ending
                ? (function (e, t) {
                    var r = new w();
                    _(e, r), process.nextTick(t, r);
                  })(this, r)
                : (s ||
                    (function (e, t, r, n) {
                      var o;
                      return (
                        null === r
                          ? (o = new y())
                          : "string" == typeof r ||
                            t.objectMode ||
                            (o = new h("chunk", ["string", "Buffer"], r)),
                        !o || (_(e, o), process.nextTick(n, o), !1)
                      );
                    })(this, o, e, r)) &&
                  (o.pendingcb++,
                  (i = (function (e, t, r, n, o, i) {
                    if (!r) {
                      var s = (function (e, t, r) {
                        return (
                          e.objectMode ||
                            !1 === e.decodeStrings ||
                            "string" != typeof t ||
                            (t = l.from(t, r)),
                          t
                        );
                      })(t, n, o);
                      n !== s && ((r = !0), (o = "buffer"), (n = s));
                    }
                    var a = t.objectMode ? 1 : n.length;
                    t.length += a;
                    var c = t.length < t.highWaterMark;
                    if ((c || (t.needDrain = !0), t.writing || t.corked)) {
                      var u = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: n,
                        encoding: o,
                        isBuf: r,
                        callback: i,
                        next: null,
                      }),
                        u
                          ? (u.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else O(e, t, !1, a, n, o, i);
                    return c;
                  })(this, o, s, e, t, r))),
              i
            );
          }),
          (x.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (x.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                R(this, e));
          }),
          (x.prototype.setDefaultEncoding = function (e) {
            if (
              ("string" == typeof e && (e = e.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((e + "").toLowerCase()) > -1
              ))
            )
              throw new b(e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(x.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(x.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (x.prototype._write = function (e, t, r) {
            r(new p("_write()"));
          }),
          (x.prototype._writev = null),
          (x.prototype.end = function (e, t, r) {
            var n = this._writableState;
            return (
              "function" == typeof e
                ? ((r = e), (e = null), (t = null))
                : "function" == typeof t && ((r = t), (t = null)),
              null != e && this.write(e, t),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                (function (e, t, r) {
                  (t.ending = !0),
                    j(e, t),
                    r &&
                      (t.finished ? process.nextTick(r) : e.once("finish", r)),
                    (t.ended = !0),
                    (e.writable = !1);
                })(this, n, r),
              this
            );
          }),
          Object.defineProperty(x.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(x.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (x.prototype.destroy = u.destroy),
          (x.prototype._undestroy = u.undestroy),
          (x.prototype._destroy = function (e, t) {
            t(e);
          });
      },
      3105: (e, t, r) => {
        "use strict";
        var n;
        function o(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        var i = r(7117),
          s = Symbol("lastResolve"),
          a = Symbol("lastReject"),
          l = Symbol("error"),
          c = Symbol("ended"),
          u = Symbol("lastPromise"),
          d = Symbol("handlePromise"),
          f = Symbol("stream");
        function h(e, t) {
          return { value: e, done: t };
        }
        function p(e) {
          var t = e[s];
          if (null !== t) {
            var r = e[f].read();
            null !== r &&
              ((e[u] = null), (e[s] = null), (e[a] = null), t(h(r, !1)));
          }
        }
        function m(e) {
          process.nextTick(p, e);
        }
        var g = Object.getPrototypeOf(function () {}),
          v = Object.setPrototypeOf(
            (o(
              (n = {
                get stream() {
                  return this[f];
                },
                next: function () {
                  var e = this,
                    t = this[l];
                  if (null !== t) return Promise.reject(t);
                  if (this[c]) return Promise.resolve(h(void 0, !0));
                  if (this[f].destroyed)
                    return new Promise(function (t, r) {
                      process.nextTick(function () {
                        e[l] ? r(e[l]) : t(h(void 0, !0));
                      });
                    });
                  var r,
                    n = this[u];
                  if (n)
                    r = new Promise(
                      (function (e, t) {
                        return function (r, n) {
                          e.then(function () {
                            t[c] ? r(h(void 0, !0)) : t[d](r, n);
                          }, n);
                        };
                      })(n, this)
                    );
                  else {
                    var o = this[f].read();
                    if (null !== o) return Promise.resolve(h(o, !1));
                    r = new Promise(this[d]);
                  }
                  return (this[u] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            o(n, "return", function () {
              var e = this;
              return new Promise(function (t, r) {
                e[f].destroy(null, function (e) {
                  e ? r(e) : t(h(void 0, !0));
                });
              });
            }),
            n),
            g
          );
        e.exports = function (e) {
          var t,
            r = Object.create(
              v,
              (o((t = {}), f, { value: e, writable: !0 }),
              o(t, s, { value: null, writable: !0 }),
              o(t, a, { value: null, writable: !0 }),
              o(t, l, { value: null, writable: !0 }),
              o(t, c, { value: e._readableState.endEmitted, writable: !0 }),
              o(t, d, {
                value: function (e, t) {
                  var n = r[f].read();
                  n
                    ? ((r[u] = null), (r[s] = null), (r[a] = null), e(h(n, !1)))
                    : ((r[s] = e), (r[a] = t));
                },
                writable: !0,
              }),
              t)
            );
          return (
            (r[u] = null),
            i(e, function (e) {
              if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = r[a];
                return (
                  null !== t &&
                    ((r[u] = null), (r[s] = null), (r[a] = null), t(e)),
                  void (r[l] = e)
                );
              }
              var n = r[s];
              null !== n &&
                ((r[u] = null), (r[s] = null), (r[a] = null), n(h(void 0, !0))),
                (r[c] = !0);
            }),
            e.on("readable", m.bind(null, r)),
            r
          );
        };
      },
      4888: (e, t, r) => {
        "use strict";
        function n(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function o(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function i(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var s = r(4300).Buffer,
          a = r(3837).inspect,
          l = (a && a.custom) || "inspect";
        e.exports = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "push",
                value: function (e) {
                  var t = { data: e, next: null };
                  this.length > 0 ? (this.tail.next = t) : (this.head = t),
                    (this.tail = t),
                    ++this.length;
                },
              },
              {
                key: "unshift",
                value: function (e) {
                  var t = { data: e, next: this.head };
                  0 === this.length && (this.tail = t),
                    (this.head = t),
                    ++this.length;
                },
              },
              {
                key: "shift",
                value: function () {
                  if (0 !== this.length) {
                    var e = this.head.data;
                    return (
                      1 === this.length
                        ? (this.head = this.tail = null)
                        : (this.head = this.head.next),
                      --this.length,
                      e
                    );
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.head = this.tail = null), (this.length = 0);
                },
              },
              {
                key: "join",
                value: function (e) {
                  if (0 === this.length) return "";
                  for (var t = this.head, r = "" + t.data; (t = t.next); )
                    r += e + t.data;
                  return r;
                },
              },
              {
                key: "concat",
                value: function (e) {
                  if (0 === this.length) return s.alloc(0);
                  for (
                    var t,
                      r,
                      n,
                      o = s.allocUnsafe(e >>> 0),
                      i = this.head,
                      a = 0;
                    i;

                  )
                    (t = i.data),
                      (r = o),
                      (n = a),
                      s.prototype.copy.call(t, r, n),
                      (a += i.data.length),
                      (i = i.next);
                  return o;
                },
              },
              {
                key: "consume",
                value: function (e, t) {
                  var r;
                  return (
                    e < this.head.data.length
                      ? ((r = this.head.data.slice(0, e)),
                        (this.head.data = this.head.data.slice(e)))
                      : (r =
                          e === this.head.data.length
                            ? this.shift()
                            : t
                            ? this._getString(e)
                            : this._getBuffer(e)),
                    r
                  );
                },
              },
              {
                key: "first",
                value: function () {
                  return this.head.data;
                },
              },
              {
                key: "_getString",
                value: function (e) {
                  var t = this.head,
                    r = 1,
                    n = t.data;
                  for (e -= n.length; (t = t.next); ) {
                    var o = t.data,
                      i = e > o.length ? o.length : e;
                    if (
                      (i === o.length ? (n += o) : (n += o.slice(0, e)),
                      0 == (e -= i))
                    ) {
                      i === o.length
                        ? (++r,
                          t.next
                            ? (this.head = t.next)
                            : (this.head = this.tail = null))
                        : ((this.head = t), (t.data = o.slice(i)));
                      break;
                    }
                    ++r;
                  }
                  return (this.length -= r), n;
                },
              },
              {
                key: "_getBuffer",
                value: function (e) {
                  var t = s.allocUnsafe(e),
                    r = this.head,
                    n = 1;
                  for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                    var o = r.data,
                      i = e > o.length ? o.length : e;
                    if ((o.copy(t, t.length - e, 0, i), 0 == (e -= i))) {
                      i === o.length
                        ? (++n,
                          r.next
                            ? (this.head = r.next)
                            : (this.head = this.tail = null))
                        : ((this.head = r), (r.data = o.slice(i)));
                      break;
                    }
                    ++n;
                  }
                  return (this.length -= n), t;
                },
              },
              {
                key: l,
                value: function (e, t) {
                  return a(
                    this,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? n(Object(r), !0).forEach(function (t) {
                              o(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : n(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(r, t)
                              );
                            });
                      }
                      return e;
                    })({}, t, { depth: 0, customInspect: !1 })
                  );
                },
              },
            ]),
            r && i(t.prototype, r),
            e
          );
        })();
      },
      7498: (e) => {
        "use strict";
        function t(e, t) {
          n(e, t), r(e);
        }
        function r(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit("close");
        }
        function n(e, t) {
          e.emit("error", t);
        }
        e.exports = {
          destroy: function (e, o) {
            var i = this,
              s = this._readableState && this._readableState.destroyed,
              a = this._writableState && this._writableState.destroyed;
            return s || a
              ? (o
                  ? o(e)
                  : e &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        process.nextTick(n, this, e))
                      : process.nextTick(n, this, e)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !o && e
                    ? i._writableState
                      ? i._writableState.errorEmitted
                        ? process.nextTick(r, i)
                        : ((i._writableState.errorEmitted = !0),
                          process.nextTick(t, i, e))
                      : process.nextTick(t, i, e)
                    : o
                    ? (process.nextTick(r, i), o(e))
                    : process.nextTick(r, i);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (e, t) {
            var r = e._readableState,
              n = e._writableState;
            (r && r.autoDestroy) || (n && n.autoDestroy)
              ? e.destroy(t)
              : e.emit("error", t);
          },
        };
      },
      7117: (e, t, r) => {
        "use strict";
        var n = r(4274).q.ERR_STREAM_PREMATURE_CLOSE;
        function o() {}
        e.exports = function e(t, r, i) {
          if ("function" == typeof r) return e(t, null, r);
          r || (r = {}),
            (i = (function (e) {
              var t = !1;
              return function () {
                if (!t) {
                  t = !0;
                  for (
                    var r = arguments.length, n = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    n[o] = arguments[o];
                  e.apply(this, n);
                }
              };
            })(i || o));
          var s = r.readable || (!1 !== r.readable && t.readable),
            a = r.writable || (!1 !== r.writable && t.writable),
            l = function () {
              t.writable || u();
            },
            c = t._writableState && t._writableState.finished,
            u = function () {
              (a = !1), (c = !0), s || i.call(t);
            },
            d = t._readableState && t._readableState.endEmitted,
            f = function () {
              (s = !1), (d = !0), a || i.call(t);
            },
            h = function (e) {
              i.call(t, e);
            },
            p = function () {
              var e;
              return s && !d
                ? ((t._readableState && t._readableState.ended) ||
                    (e = new n()),
                  i.call(t, e))
                : a && !c
                ? ((t._writableState && t._writableState.ended) ||
                    (e = new n()),
                  i.call(t, e))
                : void 0;
            },
            m = function () {
              t.req.on("finish", u);
            };
          return (
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(t)
              ? (t.on("complete", u),
                t.on("abort", p),
                t.req ? m() : t.on("request", m))
              : a && !t._writableState && (t.on("end", l), t.on("close", l)),
            t.on("end", f),
            t.on("finish", u),
            !1 !== r.error && t.on("error", h),
            t.on("close", p),
            function () {
              t.removeListener("complete", u),
                t.removeListener("abort", p),
                t.removeListener("request", m),
                t.req && t.req.removeListener("finish", u),
                t.removeListener("end", l),
                t.removeListener("close", l),
                t.removeListener("finish", u),
                t.removeListener("end", f),
                t.removeListener("error", h),
                t.removeListener("close", p);
            }
          );
        };
      },
      2286: (e, t, r) => {
        "use strict";
        function n(e, t, r, n, o, i, s) {
          try {
            var a = e[i](s),
              l = a.value;
          } catch (e) {
            return void r(e);
          }
          a.done ? t(l) : Promise.resolve(l).then(n, o);
        }
        function o(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (o, i) {
              var s = e.apply(t, r);
              function a(e) {
                n(s, o, i, a, l, "next", e);
              }
              function l(e) {
                n(s, o, i, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function i(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function s(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        var a = r(4274).q.ERR_INVALID_ARG_TYPE;
        e.exports = function (e, t, r) {
          var n;
          if (t && "function" == typeof t.next) n = t;
          else if (t && t[Symbol.asyncIterator]) n = t[Symbol.asyncIterator]();
          else {
            if (!t || !t[Symbol.iterator])
              throw new a("iterable", ["Iterable"], t);
            n = t[Symbol.iterator]();
          }
          var l = new e(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? i(Object(r), !0).forEach(function (t) {
                        s(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : i(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({ objectMode: !0 }, r)
            ),
            c = !1;
          function u() {
            return d.apply(this, arguments);
          }
          function d() {
            return (d = o(function* () {
              try {
                var e = yield n.next(),
                  t = e.value;
                e.done ? l.push(null) : l.push(yield t) ? u() : (c = !1);
              } catch (e) {
                l.destroy(e);
              }
            })).apply(this, arguments);
          }
          return (
            (l._read = function () {
              c || ((c = !0), u());
            }),
            l
          );
        };
      },
      1872: (e, t, r) => {
        "use strict";
        var n,
          o = r(4274).q,
          i = o.ERR_MISSING_ARGS,
          s = o.ERR_STREAM_DESTROYED;
        function a(e) {
          if (e) throw e;
        }
        function l(e, t, o, i) {
          i = (function (e) {
            var t = !1;
            return function () {
              t || ((t = !0), e.apply(void 0, arguments));
            };
          })(i);
          var a = !1;
          e.on("close", function () {
            a = !0;
          }),
            void 0 === n && (n = r(7117)),
            n(e, { readable: t, writable: o }, function (e) {
              if (e) return i(e);
              (a = !0), i();
            });
          var l = !1;
          return function (t) {
            if (!a && !l)
              return (
                (l = !0),
                (function (e) {
                  return e.setHeader && "function" == typeof e.abort;
                })(e)
                  ? e.abort()
                  : "function" == typeof e.destroy
                  ? e.destroy()
                  : void i(t || new s("pipe"))
              );
          };
        }
        function c(e) {
          e();
        }
        function u(e, t) {
          return e.pipe(t);
        }
        function d(e) {
          return e.length
            ? "function" != typeof e[e.length - 1]
              ? a
              : e.pop()
            : a;
        }
        e.exports = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n,
            o = d(t);
          if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
            throw new i("streams");
          var s = t.map(function (e, r) {
            var i = r < t.length - 1;
            return l(e, i, r > 0, function (e) {
              n || (n = e), e && s.forEach(c), i || (s.forEach(c), o(n));
            });
          });
          return t.reduce(u);
        };
      },
      653: (e, t, r) => {
        "use strict";
        var n = r(4274).q.ERR_INVALID_OPT_VALUE;
        e.exports = {
          getHighWaterMark: function (e, t, r, o) {
            var i = (function (e, t, r) {
              return null != e.highWaterMark
                ? e.highWaterMark
                : t
                ? e[r]
                : null;
            })(t, o, r);
            if (null != i) {
              if (!isFinite(i) || Math.floor(i) !== i || i < 0)
                throw new n(o ? r : "highWaterMark", i);
              return Math.floor(i);
            }
            return e.objectMode ? 16 : 16384;
          },
        };
      },
      1647: (e, t, r) => {
        e.exports = r(2781);
      },
      6207: (e, t, r) => {
        var n = r(2781);
        "disable" === process.env.READABLE_STREAM && n
          ? ((e.exports = n.Readable),
            Object.assign(e.exports, n),
            (e.exports.Stream = n))
          : (((t = e.exports = r(4079)).Stream = n || t),
            (t.Readable = t),
            (t.Writable = r(1739)),
            (t.Duplex = r(686)),
            (t.Transform = r(3672)),
            (t.PassThrough = r(5114)),
            (t.finished = r(7117)),
            (t.pipeline = r(1872)));
      },
      6969: function (e, t, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    });
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r || t.hasOwnProperty(r) || n(t, e, r);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(r(5820), t);
      },
      5820: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setValueSafe =
            t.setValue =
            t.createKeySafe =
            t.createKey =
            t.enumerateKeysSafe =
            t.enumerateKeys =
            t.enumerateValuesSafe =
            t.enumerateValues =
            t.HKEY =
            t.RegistryValueType =
              void 0);
        const n = r(1323);
        var o, i;
        function s(e) {
          return e === i.HKEY_CLASSES_ROOT
            ? 2147483648
            : e === i.HKEY_CURRENT_USER
            ? 2147483649
            : e === i.HKEY_LOCAL_MACHINE
            ? 2147483650
            : e === i.HKEY_USERS
            ? 2147483651
            : e === i.HKEY_PERFORMANCE_DATA
            ? 2147483652
            : e === i.HKEY_CURRENT_CONFIG
            ? 2147483653
            : e === i.HKEY_DYN_DATA
            ? 2147483654
            : e === i.HKEY_CURRENT_USER_LOCAL_SETTINGS
            ? 2147483655
            : e === i.HKEY_PERFORMANCE_TEXT
            ? 2147483728
            : e === i.HKEY_PERFORMANCE_NLSTEXT
            ? 2147483744
            : (function (e, t) {
                throw new Error(
                  "The key does not map to an expected number value"
                );
              })();
        }
        function a(e, t) {
          if (!n) return [];
          const r = s(e);
          return n.readValues(r, t);
        }
        function l(e, t) {
          if (!n) return [];
          const r = s(e);
          return n.enumKeys(r, t);
        }
        function c(e, t) {
          if (!n) return !1;
          const r = s(e);
          return n.createKey(r, t);
        }
        function u(e, t, r, i, a) {
          if (!n) return !1;
          if (i != o.REG_SZ && i != o.REG_DWORD) return !1;
          const l = s(e);
          return n.setValue(l, t, r, i, a);
        }
        !(function (e) {
          (e.REG_BINARY = "REG_BINARY"),
            (e.REG_DWORD = "REG_DWORD"),
            (e.REG_DWORD_LITTLE_ENDIAN = "REG_DWORD_LITTLE_ENDIAN"),
            (e.REG_DWORD_BIG_ENDIAN = "REG_DWORD_BIG_ENDIAN"),
            (e.REG_EXPAND_SZ = "REG_EXPAND_SZ"),
            (e.REG_LINK = "REG_LINK"),
            (e.REG_MULTI_SZ = "REG_MULTI_SZ"),
            (e.REG_NONE = "REG_NONE"),
            (e.REG_QWORD = "REG_QWORD"),
            (e.REG_QWORD_LITTLE_ENDIAN = "REG_QWORD_LITTLE_ENDIAN"),
            (e.REG_SZ = "REG_SZ");
        })((o = t.RegistryValueType || (t.RegistryValueType = {}))),
          (function (e) {
            (e.HKEY_CLASSES_ROOT = "HKEY_CLASSES_ROOT"),
              (e.HKEY_CURRENT_CONFIG = "HKEY_CURRENT_CONFIG"),
              (e.HKEY_DYN_DATA = "HKEY_DYN_DATA"),
              (e.HKEY_CURRENT_USER_LOCAL_SETTINGS =
                "HKEY_CURRENT_USER_LOCAL_SETTINGS"),
              (e.HKEY_CURRENT_USER = "HKEY_CURRENT_USER"),
              (e.HKEY_LOCAL_MACHINE = "HKEY_LOCAL_MACHINE"),
              (e.HKEY_PERFORMANCE_DATA = "HKEY_PERFORMANCE_DATA"),
              (e.HKEY_PERFORMANCE_TEXT = "HKEY_PERFORMANCE_TEXT"),
              (e.HKEY_PERFORMANCE_NLSTEXT = "HKEY_PERFORMANCE_NLSTEXT"),
              (e.HKEY_USERS = "HKEY_USERS");
          })((i = t.HKEY || (t.HKEY = {}))),
          (t.enumerateValues = a),
          (t.enumerateValuesSafe = function (e, t) {
            try {
              return a(e, t);
            } catch (e) {
              return [];
            }
          }),
          (t.enumerateKeys = l),
          (t.enumerateKeysSafe = function (e, t) {
            try {
              return l(e, t);
            } catch (e) {
              return [];
            }
          }),
          (t.createKey = c),
          (t.createKeySafe = function (e, t) {
            try {
              return c(e, t);
            } catch (e) {
              return !1;
            }
          }),
          (t.setValue = u),
          (t.setValueSafe = function (e, t, r, n, o) {
            try {
              return u(e, t, r, n, o);
            } catch (e) {
              return !1;
            }
          });
      },
      2776: (e, t) => {
        "use strict";
        const r = g();
        (r.configure = g),
          (r.stringify = r),
          (r.default = r),
          (t.stringify = r),
          (t.configure = g),
          (e.exports = r);
        const n =
            /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/,
          o =
            /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/g,
          i = [
            "\\u0000",
            "\\u0001",
            "\\u0002",
            "\\u0003",
            "\\u0004",
            "\\u0005",
            "\\u0006",
            "\\u0007",
            "\\b",
            "\\t",
            "\\n",
            "\\u000b",
            "\\f",
            "\\r",
            "\\u000e",
            "\\u000f",
            "\\u0010",
            "\\u0011",
            "\\u0012",
            "\\u0013",
            "\\u0014",
            "\\u0015",
            "\\u0016",
            "\\u0017",
            "\\u0018",
            "\\u0019",
            "\\u001a",
            "\\u001b",
            "\\u001c",
            "\\u001d",
            "\\u001e",
            "\\u001f",
            "",
            "",
            '\\"',
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\\\\",
          ];
        function s(e) {
          if (2 === e.length) {
            const t = e.charCodeAt(1);
            return `${e[0]}\\u${t.toString(16)}`;
          }
          const t = e.charCodeAt(0);
          return i.length > t ? i[t] : `\\u${t.toString(16)}`;
        }
        function a(e) {
          if (e.length < 5e3 && !n.test(e)) return e;
          if (e.length > 100) return e.replace(o, s);
          let t = "",
            r = 0;
          for (let n = 0; n < e.length; n++) {
            const o = e.charCodeAt(n);
            if (34 === o || 92 === o || o < 32)
              (t += `${e.slice(r, n)}${i[o]}`), (r = n + 1);
            else if (o >= 55296 && o <= 57343) {
              if (o <= 56319 && n + 1 < e.length) {
                const t = e.charCodeAt(n + 1);
                if (t >= 56320 && t <= 57343) {
                  n++;
                  continue;
                }
              }
              (t += `${e.slice(r, n)}\\u${o.toString(16)}`), (r = n + 1);
            }
          }
          return (t += e.slice(r)), t;
        }
        function l(e) {
          if (e.length > 200) return e.sort();
          for (let t = 1; t < e.length; t++) {
            const r = e[t];
            let n = t;
            for (; 0 !== n && e[n - 1] > r; ) (e[n] = e[n - 1]), n--;
            e[n] = r;
          }
          return e;
        }
        const c = Object.getOwnPropertyDescriptor(
          Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())),
          Symbol.toStringTag
        ).get;
        function u(e) {
          return void 0 !== c.call(e) && 0 !== e.length;
        }
        function d(e, t, r) {
          e.length < r && (r = e.length);
          const n = "," === t ? "" : " ";
          let o = `"0":${n}${e[0]}`;
          for (let i = 1; i < r; i++) o += `${t}"${i}":${n}${e[i]}`;
          return o;
        }
        function f(e, t) {
          if (e && Object.prototype.hasOwnProperty.call(e, t)) {
            var r = e[t];
            if ("boolean" != typeof r)
              throw new TypeError(
                `The "${t}" argument must be of type boolean`
              );
          }
          return void 0 === r || r;
        }
        function h(e, t) {
          if (e && Object.prototype.hasOwnProperty.call(e, t)) {
            var r = e[t];
            if ("number" != typeof r)
              throw new TypeError(`The "${t}" argument must be of type number`);
            if (!Number.isInteger(r))
              throw new TypeError(`The "${t}" argument must be an integer`);
            if (r < 1) throw new RangeError(`The "${t}" argument must be >= 1`);
          }
          return void 0 === r ? 1 / 0 : r;
        }
        function p(e) {
          return 1 === e ? "1 item" : `${e} items`;
        }
        function m(e) {
          const t = new Set();
          for (const r of e)
            "string" == typeof r
              ? t.add(r)
              : "number" == typeof r && t.add(String(r));
          return t;
        }
        function g(e) {
          const t = (function (e) {
              if (
                e &&
                Object.prototype.hasOwnProperty.call(e, "circularValue")
              ) {
                var t = e.circularValue;
                if ("string" == typeof t) return `"${t}"`;
                if (null == t) return t;
                if (t === Error || t === TypeError)
                  return {
                    toString() {
                      throw new TypeError(
                        "Converting circular structure to JSON"
                      );
                    },
                  };
                throw new TypeError(
                  'The "circularValue" argument must be of type string or the value null or undefined'
                );
              }
              return '"[Circular]"';
            })(e),
            r = f(e, "bigint"),
            n = f(e, "deterministic"),
            o = h(e, "maximumDepth"),
            i = h(e, "maximumBreadth");
          function s(e, c, f, h, m, g) {
            let v = c[e];
            switch (
              ("object" == typeof v &&
                null !== v &&
                "function" == typeof v.toJSON &&
                (v = v.toJSON(e)),
              (v = h.call(c, e, v)),
              typeof v)
            ) {
              case "string":
                return `"${a(v)}"`;
              case "object": {
                if (null === v) return "null";
                if (-1 !== f.indexOf(v)) return t;
                let e = "",
                  r = ",";
                const c = g;
                if (Array.isArray(v)) {
                  if (0 === v.length) return "[]";
                  if (o < f.length + 1) return '"[Array]"';
                  f.push(v),
                    "" !== m && ((e += `\n${(g += m)}`), (r = `,\n${g}`));
                  const t = Math.min(v.length, i);
                  let n = 0;
                  for (; n < t - 1; n++) {
                    const t = s(n, v, f, h, m, g);
                    (e += void 0 !== t ? t : "null"), (e += r);
                  }
                  const a = s(n, v, f, h, m, g);
                  return (
                    (e += void 0 !== a ? a : "null"),
                    v.length - 1 > i &&
                      (e += `${r}"... ${p(v.length - i - 1)} not stringified"`),
                    "" !== m && (e += `\n${c}`),
                    f.pop(),
                    `[${e}]`
                  );
                }
                let y = Object.keys(v);
                const w = y.length;
                if (0 === w) return "{}";
                if (o < f.length + 1) return '"[Object]"';
                let b = "",
                  _ = "";
                "" !== m && ((r = `,\n${(g += m)}`), (b = " "));
                let E = Math.min(w, i);
                u(v) &&
                  ((e += d(v, r, i)),
                  (y = y.slice(v.length)),
                  (E -= v.length),
                  (_ = r)),
                  n && (y = l(y)),
                  f.push(v);
                for (let t = 0; t < E; t++) {
                  const n = y[t],
                    o = s(n, v, f, h, m, g);
                  void 0 !== o && ((e += `${_}"${a(n)}":${b}${o}`), (_ = r));
                }
                return (
                  w > i &&
                    ((e += `${_}"...":${b}"${p(w - i)} not stringified"`),
                    (_ = r)),
                  "" !== m && _.length > 1 && (e = `\n${g}${e}\n${c}`),
                  f.pop(),
                  `{${e}}`
                );
              }
              case "number":
                return isFinite(v) ? String(v) : "null";
              case "boolean":
                return !0 === v ? "true" : "false";
              case "bigint":
                return r ? String(v) : void 0;
            }
          }
          function c(e, n, s, l, u, d) {
            switch (
              ("object" == typeof n &&
                null !== n &&
                "function" == typeof n.toJSON &&
                (n = n.toJSON(e)),
              typeof n)
            ) {
              case "string":
                return `"${a(n)}"`;
              case "object": {
                if (null === n) return "null";
                if (-1 !== s.indexOf(n)) return t;
                const e = d;
                let r = "",
                  f = ",";
                if (Array.isArray(n)) {
                  if (0 === n.length) return "[]";
                  if (o < s.length + 1) return '"[Array]"';
                  s.push(n),
                    "" !== u && ((r += `\n${(d += u)}`), (f = `,\n${d}`));
                  const t = Math.min(n.length, i);
                  let a = 0;
                  for (; a < t - 1; a++) {
                    const e = c(a, n[a], s, l, u, d);
                    (r += void 0 !== e ? e : "null"), (r += f);
                  }
                  const h = c(a, n[a], s, l, u, d);
                  return (
                    (r += void 0 !== h ? h : "null"),
                    n.length - 1 > i &&
                      (r += `${f}"... ${p(n.length - i - 1)} not stringified"`),
                    "" !== u && (r += `\n${e}`),
                    s.pop(),
                    `[${r}]`
                  );
                }
                if (0 === l.size) return "{}";
                s.push(n);
                let h = "";
                "" !== u && ((f = `,\n${(d += u)}`), (h = " "));
                let m = "";
                for (const e of l) {
                  const t = c(e, n[e], s, l, u, d);
                  void 0 !== t && ((r += `${m}"${a(e)}":${h}${t}`), (m = f));
                }
                return (
                  "" !== u && m.length > 1 && (r = `\n${d}${r}\n${e}`),
                  s.pop(),
                  `{${r}}`
                );
              }
              case "number":
                return isFinite(n) ? String(n) : "null";
              case "boolean":
                return !0 === n ? "true" : "false";
              case "bigint":
                return r ? String(n) : void 0;
            }
          }
          function g(e, s, c, f, h) {
            switch (typeof s) {
              case "string":
                return `"${a(s)}"`;
              case "object": {
                if (null === s) return "null";
                if ("function" == typeof s.toJSON) {
                  if ("object" != typeof (s = s.toJSON(e)))
                    return g(e, s, c, f, h);
                  if (null === s) return "null";
                }
                if (-1 !== c.indexOf(s)) return t;
                const r = h;
                if (Array.isArray(s)) {
                  if (0 === s.length) return "[]";
                  if (o < c.length + 1) return '"[Array]"';
                  c.push(s);
                  let e = `\n${(h += f)}`;
                  const t = `,\n${h}`,
                    n = Math.min(s.length, i);
                  let a = 0;
                  for (; a < n - 1; a++) {
                    const r = g(a, s[a], c, f, h);
                    (e += void 0 !== r ? r : "null"), (e += t);
                  }
                  const l = g(a, s[a], c, f, h);
                  return (
                    (e += void 0 !== l ? l : "null"),
                    s.length - 1 > i &&
                      (e += `${t}"... ${p(s.length - i - 1)} not stringified"`),
                    (e += `\n${r}`),
                    c.pop(),
                    `[${e}]`
                  );
                }
                let m = Object.keys(s);
                const v = m.length;
                if (0 === v) return "{}";
                if (o < c.length + 1) return '"[Object]"';
                const y = `,\n${(h += f)}`;
                let w = "",
                  b = "",
                  _ = Math.min(v, i);
                u(s) &&
                  ((w += d(s, y, i)),
                  (m = m.slice(s.length)),
                  (_ -= s.length),
                  (b = y)),
                  n && (m = l(m)),
                  c.push(s);
                for (let e = 0; e < _; e++) {
                  const t = m[e],
                    r = g(t, s[t], c, f, h);
                  void 0 !== r && ((w += `${b}"${a(t)}": ${r}`), (b = y));
                }
                return (
                  v > i &&
                    ((w += `${b}"...": "${p(v - i)} not stringified"`),
                    (b = y)),
                  "" !== b && (w = `\n${h}${w}\n${r}`),
                  c.pop(),
                  `{${w}}`
                );
              }
              case "number":
                return isFinite(s) ? String(s) : "null";
              case "boolean":
                return !0 === s ? "true" : "false";
              case "bigint":
                return r ? String(s) : void 0;
            }
          }
          function v(e, s, c) {
            switch (typeof s) {
              case "string":
                return `"${a(s)}"`;
              case "object": {
                if (null === s) return "null";
                if ("function" == typeof s.toJSON) {
                  if ("object" != typeof (s = s.toJSON(e))) return v(e, s, c);
                  if (null === s) return "null";
                }
                if (-1 !== c.indexOf(s)) return t;
                let r = "";
                if (Array.isArray(s)) {
                  if (0 === s.length) return "[]";
                  if (o < c.length + 1) return '"[Array]"';
                  c.push(s);
                  const e = Math.min(s.length, i);
                  let t = 0;
                  for (; t < e - 1; t++) {
                    const e = v(t, s[t], c);
                    (r += void 0 !== e ? e : "null"), (r += ",");
                  }
                  const n = v(t, s[t], c);
                  return (
                    (r += void 0 !== n ? n : "null"),
                    s.length - 1 > i &&
                      (r += `,"... ${p(s.length - i - 1)} not stringified"`),
                    c.pop(),
                    `[${r}]`
                  );
                }
                let f = Object.keys(s);
                const h = f.length;
                if (0 === h) return "{}";
                if (o < c.length + 1) return '"[Object]"';
                let m = "",
                  g = Math.min(h, i);
                u(s) &&
                  ((r += d(s, ",", i)),
                  (f = f.slice(s.length)),
                  (g -= s.length),
                  (m = ",")),
                  n && (f = l(f)),
                  c.push(s);
                for (let e = 0; e < g; e++) {
                  const t = f[e],
                    n = v(t, s[t], c);
                  void 0 !== n && ((r += `${m}"${a(t)}":${n}`), (m = ","));
                }
                return (
                  h > i && (r += `${m}"...":"${p(h - i)} not stringified"`),
                  c.pop(),
                  `{${r}}`
                );
              }
              case "number":
                return isFinite(s) ? String(s) : "null";
              case "boolean":
                return !0 === s ? "true" : "false";
              case "bigint":
                return r ? String(s) : void 0;
            }
          }
          return function (e, t, r) {
            if (arguments.length > 1) {
              let n = "";
              if (
                ("number" == typeof r
                  ? (n = " ".repeat(Math.min(r, 10)))
                  : "string" == typeof r && (n = r.slice(0, 10)),
                null != t)
              ) {
                if ("function" == typeof t)
                  return s("", { "": e }, [], t, n, "");
                if (Array.isArray(t)) return c("", e, [], m(t), n, "");
              }
              if (0 !== n.length) return g("", e, [], n, "");
            }
            return v("", e, []);
          };
        }
      },
      7891: (e, t) => {
        var r;
        (t = e.exports = K),
          (r =
            "object" == typeof process &&
            process.env &&
            process.env.NODE_DEBUG &&
            /\bsemver\b/i.test(process.env.NODE_DEBUG)
              ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift("SEMVER"), console.log.apply(console, e);
                }
              : function () {}),
          (t.SEMVER_SPEC_VERSION = "2.0.0");
        var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
          o = (t.re = []),
          i = (t.safeRe = []),
          s = (t.src = []),
          a = 0,
          l = [
            ["\\s", 1],
            ["\\d", 256],
            ["[a-zA-Z0-9-]", 250],
          ];
        function c(e) {
          for (var t = 0; t < l.length; t++) {
            var r = l[t][0],
              n = l[t][1];
            e = e
              .split(r + "*")
              .join(r + "{0," + n + "}")
              .split(r + "+")
              .join(r + "{1," + n + "}");
          }
          return e;
        }
        var u = a++;
        s[u] = "0|[1-9]\\d*";
        var d = a++;
        s[d] = "\\d+";
        var f = a++;
        s[f] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        var h = a++;
        s[h] = "(" + s[u] + ")\\.(" + s[u] + ")\\.(" + s[u] + ")";
        var p = a++;
        s[p] = "(" + s[d] + ")\\.(" + s[d] + ")\\.(" + s[d] + ")";
        var m = a++;
        s[m] = "(?:" + s[u] + "|" + s[f] + ")";
        var g = a++;
        s[g] = "(?:" + s[d] + "|" + s[f] + ")";
        var v = a++;
        s[v] = "(?:-(" + s[m] + "(?:\\." + s[m] + ")*))";
        var y = a++;
        s[y] = "(?:-?(" + s[g] + "(?:\\." + s[g] + ")*))";
        var w = a++;
        s[w] = "[a-zA-Z0-9-]+";
        var b = a++;
        s[b] = "(?:\\+(" + s[w] + "(?:\\." + s[w] + ")*))";
        var _ = a++,
          E = "v?" + s[h] + s[v] + "?" + s[b] + "?";
        s[_] = "^" + E + "$";
        var S = "[v=\\s]*" + s[p] + s[y] + "?" + s[b] + "?",
          x = a++;
        s[x] = "^" + S + "$";
        var O = a++;
        s[O] = "((?:<|>)?=?)";
        var C = a++;
        s[C] = s[d] + "|x|X|\\*";
        var R = a++;
        s[R] = s[u] + "|x|X|\\*";
        var M = a++;
        s[M] =
          "[v=\\s]*(" +
          s[R] +
          ")(?:\\.(" +
          s[R] +
          ")(?:\\.(" +
          s[R] +
          ")(?:" +
          s[v] +
          ")?" +
          s[b] +
          "?)?)?";
        var A = a++;
        s[A] =
          "[v=\\s]*(" +
          s[C] +
          ")(?:\\.(" +
          s[C] +
          ")(?:\\.(" +
          s[C] +
          ")(?:" +
          s[y] +
          ")?" +
          s[b] +
          "?)?)?";
        var j = a++;
        s[j] = "^" + s[O] + "\\s*" + s[M] + "$";
        var k = a++;
        s[k] = "^" + s[O] + "\\s*" + s[A] + "$";
        var T = a++;
        s[T] =
          "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
        var L = a++;
        s[L] = "(?:~>?)";
        var N = a++;
        (s[N] = "(\\s*)" + s[L] + "\\s+"),
          (o[N] = new RegExp(s[N], "g")),
          (i[N] = new RegExp(c(s[N]), "g"));
        var P = a++;
        s[P] = "^" + s[L] + s[M] + "$";
        var D = a++;
        s[D] = "^" + s[L] + s[A] + "$";
        var $ = a++;
        s[$] = "(?:\\^)";
        var I = a++;
        (s[I] = "(\\s*)" + s[$] + "\\s+"),
          (o[I] = new RegExp(s[I], "g")),
          (i[I] = new RegExp(c(s[I]), "g"));
        var F = a++;
        s[F] = "^" + s[$] + s[M] + "$";
        var B = a++;
        s[B] = "^" + s[$] + s[A] + "$";
        var U = a++;
        s[U] = "^" + s[O] + "\\s*(" + S + ")$|^$";
        var H = a++;
        s[H] = "^" + s[O] + "\\s*(" + E + ")$|^$";
        var q = a++;
        (s[q] = "(\\s*)" + s[O] + "\\s*(" + S + "|" + s[M] + ")"),
          (o[q] = new RegExp(s[q], "g")),
          (i[q] = new RegExp(c(s[q]), "g"));
        var z = a++;
        s[z] = "^\\s*(" + s[M] + ")\\s+-\\s+(" + s[M] + ")\\s*$";
        var G = a++;
        s[G] = "^\\s*(" + s[A] + ")\\s+-\\s+(" + s[A] + ")\\s*$";
        var W = a++;
        s[W] = "(<|>)?=?\\s*\\*";
        for (var Y = 0; Y < 35; Y++)
          r(Y, s[Y]),
            o[Y] || ((o[Y] = new RegExp(s[Y])), (i[Y] = new RegExp(c(s[Y]))));
        function V(e, t) {
          if (
            ((t && "object" == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof K)
          )
            return e;
          if ("string" != typeof e) return null;
          if (e.length > 256) return null;
          if (!(t.loose ? i[x] : i[_]).test(e)) return null;
          try {
            return new K(e, t);
          } catch (e) {
            return null;
          }
        }
        function K(e, t) {
          if (
            ((t && "object" == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof K)
          ) {
            if (e.loose === t.loose) return e;
            e = e.version;
          } else if ("string" != typeof e)
            throw new TypeError("Invalid Version: " + e);
          if (e.length > 256)
            throw new TypeError("version is longer than 256 characters");
          if (!(this instanceof K)) return new K(e, t);
          r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
          var o = e.trim().match(t.loose ? i[x] : i[_]);
          if (!o) throw new TypeError("Invalid Version: " + e);
          if (
            ((this.raw = e),
            (this.major = +o[1]),
            (this.minor = +o[2]),
            (this.patch = +o[3]),
            this.major > n || this.major < 0)
          )
            throw new TypeError("Invalid major version");
          if (this.minor > n || this.minor < 0)
            throw new TypeError("Invalid minor version");
          if (this.patch > n || this.patch < 0)
            throw new TypeError("Invalid patch version");
          o[4]
            ? (this.prerelease = o[4].split(".").map(function (e) {
                if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < n) return t;
                }
                return e;
              }))
            : (this.prerelease = []),
            (this.build = o[5] ? o[5].split(".") : []),
            this.format();
        }
        (t.parse = V),
          (t.valid = function (e, t) {
            var r = V(e, t);
            return r ? r.version : null;
          }),
          (t.clean = function (e, t) {
            var r = V(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null;
          }),
          (t.SemVer = K),
          (K.prototype.format = function () {
            return (
              (this.version = this.major + "." + this.minor + "." + this.patch),
              this.prerelease.length &&
                (this.version += "-" + this.prerelease.join(".")),
              this.version
            );
          }),
          (K.prototype.toString = function () {
            return this.version;
          }),
          (K.prototype.compare = function (e) {
            return (
              r("SemVer.compare", this.version, this.options, e),
              e instanceof K || (e = new K(e, this.options)),
              this.compareMain(e) || this.comparePre(e)
            );
          }),
          (K.prototype.compareMain = function (e) {
            return (
              e instanceof K || (e = new K(e, this.options)),
              J(this.major, e.major) ||
                J(this.minor, e.minor) ||
                J(this.patch, e.patch)
            );
          }),
          (K.prototype.comparePre = function (e) {
            if (
              (e instanceof K || (e = new K(e, this.options)),
              this.prerelease.length && !e.prerelease.length)
            )
              return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            var t = 0;
            do {
              var n = this.prerelease[t],
                o = e.prerelease[t];
              if (
                (r("prerelease compare", t, n, o), void 0 === n && void 0 === o)
              )
                return 0;
              if (void 0 === o) return 1;
              if (void 0 === n) return -1;
              if (n !== o) return J(n, o);
            } while (++t);
          }),
          (K.prototype.inc = function (e, t) {
            switch (e) {
              case "premajor":
                (this.prerelease.length = 0),
                  (this.patch = 0),
                  (this.minor = 0),
                  this.major++,
                  this.inc("pre", t);
                break;
              case "preminor":
                (this.prerelease.length = 0),
                  (this.patch = 0),
                  this.minor++,
                  this.inc("pre", t);
                break;
              case "prepatch":
                (this.prerelease.length = 0),
                  this.inc("patch", t),
                  this.inc("pre", t);
                break;
              case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t),
                  this.inc("pre", t);
                break;
              case "major":
                (0 === this.minor &&
                  0 === this.patch &&
                  0 !== this.prerelease.length) ||
                  this.major++,
                  (this.minor = 0),
                  (this.patch = 0),
                  (this.prerelease = []);
                break;
              case "minor":
                (0 === this.patch && 0 !== this.prerelease.length) ||
                  this.minor++,
                  (this.patch = 0),
                  (this.prerelease = []);
                break;
              case "patch":
                0 === this.prerelease.length && this.patch++,
                  (this.prerelease = []);
                break;
              case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                  for (var r = this.prerelease.length; --r >= 0; )
                    "number" == typeof this.prerelease[r] &&
                      (this.prerelease[r]++, (r = -2));
                  -1 === r && this.prerelease.push(0);
                }
                t &&
                  (this.prerelease[0] === t
                    ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                    : (this.prerelease = [t, 0]));
                break;
              default:
                throw new Error("invalid increment argument: " + e);
            }
            return this.format(), (this.raw = this.version), this;
          }),
          (t.inc = function (e, t, r, n) {
            "string" == typeof r && ((n = r), (r = void 0));
            try {
              return new K(e, r).inc(t, n).version;
            } catch (e) {
              return null;
            }
          }),
          (t.diff = function (e, t) {
            if (te(e, t)) return null;
            var r = V(e),
              n = V(t),
              o = "";
            if (r.prerelease.length || n.prerelease.length) {
              o = "pre";
              var i = "prerelease";
            }
            for (var s in r)
              if (
                ("major" === s || "minor" === s || "patch" === s) &&
                r[s] !== n[s]
              )
                return o + s;
            return i;
          }),
          (t.compareIdentifiers = J);
        var Z = /^[0-9]+$/;
        function J(e, t) {
          var r = Z.test(e),
            n = Z.test(t);
          return (
            r && n && ((e = +e), (t = +t)),
            e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
          );
        }
        function X(e, t, r) {
          return new K(e, r).compare(new K(t, r));
        }
        function Q(e, t, r) {
          return X(e, t, r) > 0;
        }
        function ee(e, t, r) {
          return X(e, t, r) < 0;
        }
        function te(e, t, r) {
          return 0 === X(e, t, r);
        }
        function re(e, t, r) {
          return 0 !== X(e, t, r);
        }
        function ne(e, t, r) {
          return X(e, t, r) >= 0;
        }
        function oe(e, t, r) {
          return X(e, t, r) <= 0;
        }
        function ie(e, t, r, n) {
          switch (t) {
            case "===":
              return (
                "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e === r
              );
            case "!==":
              return (
                "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e !== r
              );
            case "":
            case "=":
            case "==":
              return te(e, r, n);
            case "!=":
              return re(e, r, n);
            case ">":
              return Q(e, r, n);
            case ">=":
              return ne(e, r, n);
            case "<":
              return ee(e, r, n);
            case "<=":
              return oe(e, r, n);
            default:
              throw new TypeError("Invalid operator: " + t);
          }
        }
        function se(e, t) {
          if (
            ((t && "object" == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof se)
          ) {
            if (e.loose === !!t.loose) return e;
            e = e.value;
          }
          if (!(this instanceof se)) return new se(e, t);
          (e = e.trim().split(/\s+/).join(" ")),
            r("comparator", e, t),
            (this.options = t),
            (this.loose = !!t.loose),
            this.parse(e),
            this.semver === ae
              ? (this.value = "")
              : (this.value = this.operator + this.semver.version),
            r("comp", this);
        }
        (t.rcompareIdentifiers = function (e, t) {
          return J(t, e);
        }),
          (t.major = function (e, t) {
            return new K(e, t).major;
          }),
          (t.minor = function (e, t) {
            return new K(e, t).minor;
          }),
          (t.patch = function (e, t) {
            return new K(e, t).patch;
          }),
          (t.compare = X),
          (t.compareLoose = function (e, t) {
            return X(e, t, !0);
          }),
          (t.rcompare = function (e, t, r) {
            return X(t, e, r);
          }),
          (t.sort = function (e, r) {
            return e.sort(function (e, n) {
              return t.compare(e, n, r);
            });
          }),
          (t.rsort = function (e, r) {
            return e.sort(function (e, n) {
              return t.rcompare(e, n, r);
            });
          }),
          (t.gt = Q),
          (t.lt = ee),
          (t.eq = te),
          (t.neq = re),
          (t.gte = ne),
          (t.lte = oe),
          (t.cmp = ie),
          (t.Comparator = se);
        var ae = {};
        function le(e, t) {
          if (
            ((t && "object" == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            e instanceof le)
          )
            return e.loose === !!t.loose &&
              e.includePrerelease === !!t.includePrerelease
              ? e
              : new le(e.raw, t);
          if (e instanceof se) return new le(e.value, t);
          if (!(this instanceof le)) return new le(e, t);
          if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().split(/\s+/).join(" ")),
            (this.set = this.raw
              .split("||")
              .map(function (e) {
                return this.parseRange(e.trim());
              }, this)
              .filter(function (e) {
                return e.length;
              })),
            !this.set.length)
          )
            throw new TypeError("Invalid SemVer Range: " + this.raw);
          this.format();
        }
        function ce(e) {
          return !e || "x" === e.toLowerCase() || "*" === e;
        }
        function ue(e, t, r, n, o, i, s, a, l, c, u, d, f) {
          return (
            (t = ce(r)
              ? ""
              : ce(n)
              ? ">=" + r + ".0.0"
              : ce(o)
              ? ">=" + r + "." + n + ".0"
              : ">=" + t) +
            " " +
            (a = ce(l)
              ? ""
              : ce(c)
              ? "<" + (+l + 1) + ".0.0"
              : ce(u)
              ? "<" + l + "." + (+c + 1) + ".0"
              : d
              ? "<=" + l + "." + c + "." + u + "-" + d
              : "<=" + a)
          ).trim();
        }
        function de(e, t, n) {
          for (var o = 0; o < e.length; o++) if (!e[o].test(t)) return !1;
          if (t.prerelease.length && !n.includePrerelease) {
            for (o = 0; o < e.length; o++)
              if (
                (r(e[o].semver),
                e[o].semver !== ae && e[o].semver.prerelease.length > 0)
              ) {
                var i = e[o].semver;
                if (
                  i.major === t.major &&
                  i.minor === t.minor &&
                  i.patch === t.patch
                )
                  return !0;
              }
            return !1;
          }
          return !0;
        }
        function fe(e, t, r) {
          try {
            t = new le(t, r);
          } catch (e) {
            return !1;
          }
          return t.test(e);
        }
        function he(e, t, r, n) {
          var o, i, s, a, l;
          switch (((e = new K(e, n)), (t = new le(t, n)), r)) {
            case ">":
              (o = Q), (i = oe), (s = ee), (a = ">"), (l = ">=");
              break;
            case "<":
              (o = ee), (i = ne), (s = Q), (a = "<"), (l = "<=");
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (fe(e, t, n)) return !1;
          for (var c = 0; c < t.set.length; ++c) {
            var u = t.set[c],
              d = null,
              f = null;
            if (
              (u.forEach(function (e) {
                e.semver === ae && (e = new se(">=0.0.0")),
                  (d = d || e),
                  (f = f || e),
                  o(e.semver, d.semver, n)
                    ? (d = e)
                    : s(e.semver, f.semver, n) && (f = e);
              }),
              d.operator === a || d.operator === l)
            )
              return !1;
            if ((!f.operator || f.operator === a) && i(e, f.semver)) return !1;
            if (f.operator === l && s(e, f.semver)) return !1;
          }
          return !0;
        }
        (se.prototype.parse = function (e) {
          var t = this.options.loose ? i[U] : i[H],
            r = e.match(t);
          if (!r) throw new TypeError("Invalid comparator: " + e);
          (this.operator = r[1]),
            "=" === this.operator && (this.operator = ""),
            r[2]
              ? (this.semver = new K(r[2], this.options.loose))
              : (this.semver = ae);
        }),
          (se.prototype.toString = function () {
            return this.value;
          }),
          (se.prototype.test = function (e) {
            return (
              r("Comparator.test", e, this.options.loose),
              this.semver === ae ||
                ("string" == typeof e && (e = new K(e, this.options)),
                ie(e, this.operator, this.semver, this.options))
            );
          }),
          (se.prototype.intersects = function (e, t) {
            if (!(e instanceof se))
              throw new TypeError("a Comparator is required");
            var r;
            if (
              ((t && "object" == typeof t) ||
                (t = { loose: !!t, includePrerelease: !1 }),
              "" === this.operator)
            )
              return (r = new le(e.value, t)), fe(this.value, r, t);
            if ("" === e.operator)
              return (r = new le(this.value, t)), fe(e.semver, r, t);
            var n = !(
                (">=" !== this.operator && ">" !== this.operator) ||
                (">=" !== e.operator && ">" !== e.operator)
              ),
              o = !(
                ("<=" !== this.operator && "<" !== this.operator) ||
                ("<=" !== e.operator && "<" !== e.operator)
              ),
              i = this.semver.version === e.semver.version,
              s = !(
                (">=" !== this.operator && "<=" !== this.operator) ||
                (">=" !== e.operator && "<=" !== e.operator)
              ),
              a =
                ie(this.semver, "<", e.semver, t) &&
                (">=" === this.operator || ">" === this.operator) &&
                ("<=" === e.operator || "<" === e.operator),
              l =
                ie(this.semver, ">", e.semver, t) &&
                ("<=" === this.operator || "<" === this.operator) &&
                (">=" === e.operator || ">" === e.operator);
            return n || o || (i && s) || a || l;
          }),
          (t.Range = le),
          (le.prototype.format = function () {
            return (
              (this.range = this.set
                .map(function (e) {
                  return e.join(" ").trim();
                })
                .join("||")
                .trim()),
              this.range
            );
          }),
          (le.prototype.toString = function () {
            return this.range;
          }),
          (le.prototype.parseRange = function (e) {
            var t = this.options.loose,
              n = t ? i[G] : i[z];
            (e = e.replace(n, ue)),
              r("hyphen replace", e),
              (e = e.replace(i[q], "$1$2$3")),
              r("comparator trim", e, i[q]),
              (e = (e = e.replace(i[N], "$1~")).replace(i[I], "$1^"));
            var o = t ? i[U] : i[H],
              s = e
                .split(" ")
                .map(function (e) {
                  return (function (e, t) {
                    return (
                      r("comp", e, t),
                      (e = (function (e, t) {
                        return e
                          .trim()
                          .split(/\s+/)
                          .map(function (e) {
                            return (function (e, t) {
                              r("caret", e, t);
                              var n = t.loose ? i[B] : i[F];
                              return e.replace(n, function (t, n, o, i, s) {
                                var a;
                                return (
                                  r("caret", e, t, n, o, i, s),
                                  ce(n)
                                    ? (a = "")
                                    : ce(o)
                                    ? (a =
                                        ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                                    : ce(i)
                                    ? (a =
                                        "0" === n
                                          ? ">=" +
                                            n +
                                            "." +
                                            o +
                                            ".0 <" +
                                            n +
                                            "." +
                                            (+o + 1) +
                                            ".0"
                                          : ">=" +
                                            n +
                                            "." +
                                            o +
                                            ".0 <" +
                                            (+n + 1) +
                                            ".0.0")
                                    : s
                                    ? (r("replaceCaret pr", s),
                                      (a =
                                        "0" === n
                                          ? "0" === o
                                            ? ">=" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              i +
                                              "-" +
                                              s +
                                              " <" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              (+i + 1)
                                            : ">=" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              i +
                                              "-" +
                                              s +
                                              " <" +
                                              n +
                                              "." +
                                              (+o + 1) +
                                              ".0"
                                          : ">=" +
                                            n +
                                            "." +
                                            o +
                                            "." +
                                            i +
                                            "-" +
                                            s +
                                            " <" +
                                            (+n + 1) +
                                            ".0.0"))
                                    : (r("no pr"),
                                      (a =
                                        "0" === n
                                          ? "0" === o
                                            ? ">=" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              i +
                                              " <" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              (+i + 1)
                                            : ">=" +
                                              n +
                                              "." +
                                              o +
                                              "." +
                                              i +
                                              " <" +
                                              n +
                                              "." +
                                              (+o + 1) +
                                              ".0"
                                          : ">=" +
                                            n +
                                            "." +
                                            o +
                                            "." +
                                            i +
                                            " <" +
                                            (+n + 1) +
                                            ".0.0")),
                                  r("caret return", a),
                                  a
                                );
                              });
                            })(e, t);
                          })
                          .join(" ");
                      })(e, t)),
                      r("caret", e),
                      (e = (function (e, t) {
                        return e
                          .trim()
                          .split(/\s+/)
                          .map(function (e) {
                            return (function (e, t) {
                              var n = t.loose ? i[D] : i[P];
                              return e.replace(n, function (t, n, o, i, s) {
                                var a;
                                return (
                                  r("tilde", e, t, n, o, i, s),
                                  ce(n)
                                    ? (a = "")
                                    : ce(o)
                                    ? (a =
                                        ">=" + n + ".0.0 <" + (+n + 1) + ".0.0")
                                    : ce(i)
                                    ? (a =
                                        ">=" +
                                        n +
                                        "." +
                                        o +
                                        ".0 <" +
                                        n +
                                        "." +
                                        (+o + 1) +
                                        ".0")
                                    : s
                                    ? (r("replaceTilde pr", s),
                                      (a =
                                        ">=" +
                                        n +
                                        "." +
                                        o +
                                        "." +
                                        i +
                                        "-" +
                                        s +
                                        " <" +
                                        n +
                                        "." +
                                        (+o + 1) +
                                        ".0"))
                                    : (a =
                                        ">=" +
                                        n +
                                        "." +
                                        o +
                                        "." +
                                        i +
                                        " <" +
                                        n +
                                        "." +
                                        (+o + 1) +
                                        ".0"),
                                  r("tilde return", a),
                                  a
                                );
                              });
                            })(e, t);
                          })
                          .join(" ");
                      })(e, t)),
                      r("tildes", e),
                      (e = (function (e, t) {
                        return (
                          r("replaceXRanges", e, t),
                          e
                            .split(/\s+/)
                            .map(function (e) {
                              return (function (e, t) {
                                e = e.trim();
                                var n = t.loose ? i[k] : i[j];
                                return e.replace(
                                  n,
                                  function (t, n, o, i, s, a) {
                                    r("xRange", e, t, n, o, i, s, a);
                                    var l = ce(o),
                                      c = l || ce(i),
                                      u = c || ce(s);
                                    return (
                                      "=" === n && u && (n = ""),
                                      l
                                        ? (t =
                                            ">" === n || "<" === n
                                              ? "<0.0.0"
                                              : "*")
                                        : n && u
                                        ? (c && (i = 0),
                                          (s = 0),
                                          ">" === n
                                            ? ((n = ">="),
                                              c
                                                ? ((o = +o + 1),
                                                  (i = 0),
                                                  (s = 0))
                                                : ((i = +i + 1), (s = 0)))
                                            : "<=" === n &&
                                              ((n = "<"),
                                              c ? (o = +o + 1) : (i = +i + 1)),
                                          (t = n + o + "." + i + "." + s))
                                        : c
                                        ? (t =
                                            ">=" +
                                            o +
                                            ".0.0 <" +
                                            (+o + 1) +
                                            ".0.0")
                                        : u &&
                                          (t =
                                            ">=" +
                                            o +
                                            "." +
                                            i +
                                            ".0 <" +
                                            o +
                                            "." +
                                            (+i + 1) +
                                            ".0"),
                                      r("xRange return", t),
                                      t
                                    );
                                  }
                                );
                              })(e, t);
                            })
                            .join(" ")
                        );
                      })(e, t)),
                      r("xrange", e),
                      (e = (function (e, t) {
                        return (
                          r("replaceStars", e, t), e.trim().replace(i[W], "")
                        );
                      })(e, t)),
                      r("stars", e),
                      e
                    );
                  })(e, this.options);
                }, this)
                .join(" ")
                .split(/\s+/);
            return (
              this.options.loose &&
                (s = s.filter(function (e) {
                  return !!e.match(o);
                })),
              s.map(function (e) {
                return new se(e, this.options);
              }, this)
            );
          }),
          (le.prototype.intersects = function (e, t) {
            if (!(e instanceof le)) throw new TypeError("a Range is required");
            return this.set.some(function (r) {
              return r.every(function (r) {
                return e.set.some(function (e) {
                  return e.every(function (e) {
                    return r.intersects(e, t);
                  });
                });
              });
            });
          }),
          (t.toComparators = function (e, t) {
            return new le(e, t).set.map(function (e) {
              return e
                .map(function (e) {
                  return e.value;
                })
                .join(" ")
                .trim()
                .split(" ");
            });
          }),
          (le.prototype.test = function (e) {
            if (!e) return !1;
            "string" == typeof e && (e = new K(e, this.options));
            for (var t = 0; t < this.set.length; t++)
              if (de(this.set[t], e, this.options)) return !0;
            return !1;
          }),
          (t.satisfies = fe),
          (t.maxSatisfying = function (e, t, r) {
            var n = null,
              o = null;
            try {
              var i = new le(t, r);
            } catch (e) {
              return null;
            }
            return (
              e.forEach(function (e) {
                i.test(e) &&
                  ((n && -1 !== o.compare(e)) || (o = new K((n = e), r)));
              }),
              n
            );
          }),
          (t.minSatisfying = function (e, t, r) {
            var n = null,
              o = null;
            try {
              var i = new le(t, r);
            } catch (e) {
              return null;
            }
            return (
              e.forEach(function (e) {
                i.test(e) &&
                  ((n && 1 !== o.compare(e)) || (o = new K((n = e), r)));
              }),
              n
            );
          }),
          (t.minVersion = function (e, t) {
            e = new le(e, t);
            var r = new K("0.0.0");
            if (e.test(r)) return r;
            if (((r = new K("0.0.0-0")), e.test(r))) return r;
            r = null;
            for (var n = 0; n < e.set.length; ++n)
              e.set[n].forEach(function (e) {
                var t = new K(e.semver.version);
                switch (e.operator) {
                  case ">":
                    0 === t.prerelease.length
                      ? t.patch++
                      : t.prerelease.push(0),
                      (t.raw = t.format());
                  case "":
                  case ">=":
                    (r && !Q(r, t)) || (r = t);
                    break;
                  case "<":
                  case "<=":
                    break;
                  default:
                    throw new Error("Unexpected operation: " + e.operator);
                }
              });
            return r && e.test(r) ? r : null;
          }),
          (t.validRange = function (e, t) {
            try {
              return new le(e, t).range || "*";
            } catch (e) {
              return null;
            }
          }),
          (t.ltr = function (e, t, r) {
            return he(e, t, "<", r);
          }),
          (t.gtr = function (e, t, r) {
            return he(e, t, ">", r);
          }),
          (t.outside = he),
          (t.prerelease = function (e, t) {
            var r = V(e, t);
            return r && r.prerelease.length ? r.prerelease : null;
          }),
          (t.intersects = function (e, t, r) {
            return (e = new le(e, r)), (t = new le(t, r)), e.intersects(t);
          }),
          (t.coerce = function (e) {
            if (e instanceof K) return e;
            if ("string" != typeof e) return null;
            var t = e.match(i[T]);
            return null == t
              ? null
              : V(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
          });
      },
      7306: (e, t, r) => {
        "use strict";
        var n = r(5663);
        e.exports = function (e) {
          var t = e.match(n);
          if (!t) return null;
          var r = t[0].replace(/#! ?/, "").split(" "),
            o = r[0].split("/").pop(),
            i = r[1];
          return "env" === o ? i : o + (i ? " " + i : "");
        };
      },
      5663: (e) => {
        "use strict";
        e.exports = /^#!.*/;
      },
      8419: (e, t, r) => {
        var n,
          o = r(9491),
          i = r(9291),
          s = r(2361);
        function a() {
          u &&
            ((u = !1),
            i.forEach(function (e) {
              try {
                process.removeListener(e, c[e]);
              } catch (e) {}
            }),
            (process.emit = p),
            (process.reallyExit = f),
            (n.count -= 1));
        }
        function l(e, t, r) {
          n.emitted[e] || ((n.emitted[e] = !0), n.emit(e, t, r));
        }
        "function" != typeof s && (s = s.EventEmitter),
          process.__signal_exit_emitter__
            ? (n = process.__signal_exit_emitter__)
            : (((n = process.__signal_exit_emitter__ = new s()).count = 0),
              (n.emitted = {})),
          n.infinite || (n.setMaxListeners(1 / 0), (n.infinite = !0)),
          (e.exports = function (e, t) {
            o.equal(
              typeof e,
              "function",
              "a callback must be provided for exit handler"
            ),
              !1 === u && d();
            var r = "exit";
            return (
              t && t.alwaysLast && (r = "afterexit"),
              n.on(r, e),
              function () {
                n.removeListener(r, e),
                  0 === n.listeners("exit").length &&
                    0 === n.listeners("afterexit").length &&
                    a();
              }
            );
          }),
          (e.exports.unload = a);
        var c = {};
        i.forEach(function (e) {
          c[e] = function () {
            process.listeners(e).length === n.count &&
              (a(),
              l("exit", null, e),
              l("afterexit", null, e),
              process.kill(process.pid, e));
          };
        }),
          (e.exports.signals = function () {
            return i;
          }),
          (e.exports.load = d);
        var u = !1;
        function d() {
          u ||
            ((u = !0),
            (n.count += 1),
            (i = i.filter(function (e) {
              try {
                return process.on(e, c[e]), !0;
              } catch (e) {
                return !1;
              }
            })),
            (process.emit = m),
            (process.reallyExit = h));
        }
        var f = process.reallyExit;
        function h(e) {
          (process.exitCode = e || 0),
            l("exit", process.exitCode, null),
            l("afterexit", process.exitCode, null),
            f.call(process, process.exitCode);
        }
        var p = process.emit;
        function m(e, t) {
          if ("exit" === e) {
            void 0 !== t && (process.exitCode = t);
            var r = p.apply(this, arguments);
            return (
              l("exit", process.exitCode, null),
              l("afterexit", process.exitCode, null),
              r
            );
          }
          return p.apply(this, arguments);
        }
      },
      9291: (e) => {
        e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
      },
      9764: (e, t, r) => {
        var n,
          o = r(6947).SourceMapConsumer,
          i = r(1017);
        try {
          ((n = r(7147)).existsSync && n.readFileSync) || (n = null);
        } catch (e) {}
        var s = !1,
          a = !1,
          l = !1,
          c = "auto",
          u = {},
          d = {},
          f = /^data:application\/json[^,]+base64,/,
          h = [],
          p = [];
        function m() {
          return (
            "browser" === c ||
            ("node" !== c &&
              "undefined" != typeof window &&
              "function" == typeof XMLHttpRequest &&
              !(
                window.require &&
                window.module &&
                window.process &&
                "renderer" === window.process.type
              ))
          );
        }
        function g(e) {
          return function (t) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r](t);
              if (n) return n;
            }
            return null;
          };
        }
        var v = g(h);
        function y(e, t) {
          if (!e) return t;
          var r = i.dirname(e),
            n = /^\w+:\/\/[^\/]*/.exec(r),
            o = n ? n[0] : "";
          return o + i.resolve(r.slice(o.length), t);
        }
        h.push(function (e) {
          if ((e = e.trim()) in u) return u[e];
          var t = null;
          if (n) {
            if (n.existsSync(e))
              try {
                t = n.readFileSync(e, "utf8");
              } catch (e) {
                t = "";
              }
          } else {
            var r = new XMLHttpRequest();
            r.open("GET", e, !1),
              r.send(null),
              (t = null),
              4 === r.readyState && 200 === r.status && (t = r.responseText);
          }
          return (u[e] = t);
        });
        var w = g(p);
        function b(e) {
          var t = d[e.source];
          if (!t) {
            var r = w(e.source);
            r
              ? (t = d[e.source] = { url: r.url, map: new o(r.map) }).map
                  .sourcesContent &&
                t.map.sources.forEach(function (e, r) {
                  var n = t.map.sourcesContent[r];
                  if (n) {
                    var o = y(t.url, e);
                    u[o] = n;
                  }
                })
              : (t = d[e.source] = { url: null, map: null });
          }
          if (t && t.map) {
            var n = t.map.originalPositionFor(e);
            if (null !== n.source) return (n.source = y(t.url, n.source)), n;
          }
          return e;
        }
        function _(e) {
          var t = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);
          if (t) {
            var r = b({ source: t[2], line: +t[3], column: t[4] - 1 });
            return (
              "eval at " +
              t[1] +
              " (" +
              r.source +
              ":" +
              r.line +
              ":" +
              (r.column + 1) +
              ")"
            );
          }
          return (t = /^eval at ([^(]+) \((.+)\)$/.exec(e))
            ? "eval at " + t[1] + " (" + _(t[2]) + ")"
            : e;
        }
        function E() {
          var e,
            t = "";
          if (this.isNative()) t = "native";
          else {
            !(e = this.getScriptNameOrSourceURL()) &&
              this.isEval() &&
              ((t = this.getEvalOrigin()), (t += ", ")),
              (t += e || "<anonymous>");
            var r = this.getLineNumber();
            if (null != r) {
              t += ":" + r;
              var n = this.getColumnNumber();
              n && (t += ":" + n);
            }
          }
          var o = "",
            i = this.getFunctionName(),
            s = !0,
            a = this.isConstructor();
          if (this.isToplevel() || a)
            a
              ? (o += "new " + (i || "<anonymous>"))
              : i
              ? (o += i)
              : ((o += t), (s = !1));
          else {
            var l = this.getTypeName();
            "[object Object]" === l && (l = "null");
            var c = this.getMethodName();
            i
              ? (l && 0 != i.indexOf(l) && (o += l + "."),
                (o += i),
                c &&
                  i.indexOf("." + c) != i.length - c.length - 1 &&
                  (o += " [as " + c + "]"))
              : (o += l + "." + (c || "<anonymous>"));
          }
          return s && (o += " (" + t + ")"), o;
        }
        function S(e) {
          var t = {};
          return (
            Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
              function (r) {
                t[r] = /^(?:is|get)/.test(r)
                  ? function () {
                      return e[r].call(e);
                    }
                  : e[r];
              }
            ),
            (t.toString = E),
            t
          );
        }
        function x(e) {
          if (e.isNative()) return e;
          var t = e.getFileName() || e.getScriptNameOrSourceURL();
          if (t) {
            var r = e.getLineNumber(),
              n = e.getColumnNumber() - 1;
            1 === r && n > 62 && !m() && !e.isEval() && (n -= 62);
            var o = b({ source: t, line: r, column: n });
            return (
              ((e = S(e)).getFileName = function () {
                return o.source;
              }),
              (e.getLineNumber = function () {
                return o.line;
              }),
              (e.getColumnNumber = function () {
                return o.column + 1;
              }),
              (e.getScriptNameOrSourceURL = function () {
                return o.source;
              }),
              e
            );
          }
          var i = e.isEval() && e.getEvalOrigin();
          return i
            ? ((i = _(i)),
              ((e = S(e)).getEvalOrigin = function () {
                return i;
              }),
              e)
            : e;
        }
        function O(e, t) {
          return (
            l && ((u = {}), (d = {})),
            e +
              t
                .map(function (e) {
                  return "\n    at " + x(e);
                })
                .join("")
          );
        }
        function C(e) {
          var t = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);
          if (t) {
            var r = t[1],
              o = +t[2],
              i = +t[3],
              s = u[r];
            if (!s && n && n.existsSync(r))
              try {
                s = n.readFileSync(r, "utf8");
              } catch (e) {
                s = "";
              }
            if (s) {
              var a = s.split(/(?:\r\n|\r|\n)/)[o - 1];
              if (a)
                return (
                  r + ":" + o + "\n" + a + "\n" + new Array(i).join(" ") + "^"
                );
            }
          }
          return null;
        }
        function R(e) {
          var t = C(e);
          t && (console.error(), console.error(t)),
            console.error(e.stack),
            process.exit(1);
        }
        p.push(function (e) {
          var t,
            r = (function (e) {
              var t;
              if (m())
                try {
                  var r = new XMLHttpRequest();
                  r.open("GET", e, !1),
                    r.send(null),
                    (t = 4 === r.readyState ? r.responseText : null);
                  var n =
                    r.getResponseHeader("SourceMap") ||
                    r.getResponseHeader("X-SourceMap");
                  if (n) return n;
                } catch (e) {}
              t = v(e);
              for (
                var o,
                  i,
                  s =
                    /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/gm;
                (i = s.exec(t));

              )
                o = i;
              return o ? o[1] : null;
            })(e);
          if (!r) return null;
          if (f.test(r)) {
            var n = r.slice(r.indexOf(",") + 1);
            (t = new Buffer(n, "base64").toString()), (r = e);
          } else (r = y(e, r)), (t = v(r));
          return t ? { url: r, map: t } : null;
        }),
          (t.wrapCallSite = x),
          (t.getErrorSource = C),
          (t.mapSourcePosition = b),
          (t.retrieveSourceMap = w),
          (t.install = function (e) {
            if (
              (e = e || {}).environment &&
              ((c = e.environment),
              -1 === ["node", "browser", "auto"].indexOf(c))
            )
              throw new Error(
                "environment " +
                  c +
                  " was unknown. Available options are {auto, browser, node}"
              );
            if (
              (e.retrieveFile &&
                (e.overrideRetrieveFile && (h.length = 0),
                h.unshift(e.retrieveFile)),
              e.retrieveSourceMap &&
                (e.overrideRetrieveSourceMap && (p.length = 0),
                p.unshift(e.retrieveSourceMap)),
              e.hookRequire && !m())
            ) {
              var t;
              try {
                t = r(8188);
              } catch (e) {}
              var n = t.prototype._compile;
              n.__sourceMapSupport ||
                ((t.prototype._compile = function (e, t) {
                  return (u[t] = e), (d[t] = void 0), n.call(this, e, t);
                }),
                (t.prototype._compile.__sourceMapSupport = !0));
            }
            var o;
            l ||
              (l =
                "emptyCacheBetweenOperations" in e &&
                e.emptyCacheBetweenOperations),
              s || ((s = !0), (Error.prepareStackTrace = O)),
              a ||
                ((!("handleUncaughtExceptions" in e) ||
                  e.handleUncaughtExceptions) &&
                  "object" == typeof process &&
                  null !== process &&
                  "function" == typeof process.on &&
                  ((a = !0),
                  (o = process.emit),
                  (process.emit = function (e) {
                    if ("uncaughtException" === e) {
                      var t = arguments[1] && arguments[1].stack,
                        r = this.listeners(e).length > 0;
                      if (t && !r) return R(arguments[1]);
                    }
                    return o.apply(this, arguments);
                  })));
          });
      },
      1862: (e, t, r) => {
        var n = r(6268),
          o = Object.prototype.hasOwnProperty,
          i = "undefined" != typeof Map;
        function s() {
          (this._array = []), (this._set = i ? new Map() : Object.create(null));
        }
        (s.fromArray = function (e, t) {
          for (var r = new s(), n = 0, o = e.length; n < o; n++) r.add(e[n], t);
          return r;
        }),
          (s.prototype.size = function () {
            return i
              ? this._set.size
              : Object.getOwnPropertyNames(this._set).length;
          }),
          (s.prototype.add = function (e, t) {
            var r = i ? e : n.toSetString(e),
              s = i ? this.has(e) : o.call(this._set, r),
              a = this._array.length;
            (s && !t) || this._array.push(e),
              s || (i ? this._set.set(e, a) : (this._set[r] = a));
          }),
          (s.prototype.has = function (e) {
            if (i) return this._set.has(e);
            var t = n.toSetString(e);
            return o.call(this._set, t);
          }),
          (s.prototype.indexOf = function (e) {
            if (i) {
              var t = this._set.get(e);
              if (t >= 0) return t;
            } else {
              var r = n.toSetString(e);
              if (o.call(this._set, r)) return this._set[r];
            }
            throw new Error('"' + e + '" is not in the set.');
          }),
          (s.prototype.at = function (e) {
            if (e >= 0 && e < this._array.length) return this._array[e];
            throw new Error("No element indexed by " + e);
          }),
          (s.prototype.toArray = function () {
            return this._array.slice();
          }),
          (t.I = s);
      },
      4754: (e, t, r) => {
        var n = r(5978);
        (t.encode = function (e) {
          var t,
            r = "",
            o = (function (e) {
              return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
            })(e);
          do {
            (t = 31 & o), (o >>>= 5) > 0 && (t |= 32), (r += n.encode(t));
          } while (o > 0);
          return r;
        }),
          (t.decode = function (e, t, r) {
            var o,
              i,
              s,
              a,
              l = e.length,
              c = 0,
              u = 0;
            do {
              if (t >= l)
                throw new Error("Expected more digits in base 64 VLQ value.");
              if (-1 === (i = n.decode(e.charCodeAt(t++))))
                throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
              (o = !!(32 & i)), (c += (i &= 31) << u), (u += 5);
            } while (o);
            (r.value = ((a = (s = c) >> 1), 1 == (1 & s) ? -a : a)),
              (r.rest = t);
          });
      },
      5978: (e, t) => {
        var r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
            ""
          );
        (t.encode = function (e) {
          if (0 <= e && e < r.length) return r[e];
          throw new TypeError("Must be between 0 and 63: " + e);
        }),
          (t.decode = function (e) {
            return 65 <= e && e <= 90
              ? e - 65
              : 97 <= e && e <= 122
              ? e - 97 + 26
              : 48 <= e && e <= 57
              ? e - 48 + 52
              : 43 == e
              ? 62
              : 47 == e
              ? 63
              : -1;
          });
      },
      5583: (e, t) => {
        function r(e, n, o, i, s, a) {
          var l = Math.floor((n - e) / 2) + e,
            c = s(o, i[l], !0);
          return 0 === c
            ? l
            : c > 0
            ? n - l > 1
              ? r(l, n, o, i, s, a)
              : a == t.LEAST_UPPER_BOUND
              ? n < i.length
                ? n
                : -1
              : l
            : l - e > 1
            ? r(e, l, o, i, s, a)
            : a == t.LEAST_UPPER_BOUND
            ? l
            : e < 0
            ? -1
            : e;
        }
        (t.GREATEST_LOWER_BOUND = 1),
          (t.LEAST_UPPER_BOUND = 2),
          (t.search = function (e, n, o, i) {
            if (0 === n.length) return -1;
            var s = r(-1, n.length, e, n, o, i || t.GREATEST_LOWER_BOUND);
            if (s < 0) return -1;
            for (; s - 1 >= 0 && 0 === o(n[s], n[s - 1], !0); ) --s;
            return s;
          });
      },
      6546: (e, t, r) => {
        var n = r(6268);
        function o() {
          (this._array = []),
            (this._sorted = !0),
            (this._last = { generatedLine: -1, generatedColumn: 0 });
        }
        (o.prototype.unsortedForEach = function (e, t) {
          this._array.forEach(e, t);
        }),
          (o.prototype.add = function (e) {
            var t, r, o, i, s, a;
            (r = e),
              (o = (t = this._last).generatedLine),
              (i = r.generatedLine),
              (s = t.generatedColumn),
              (a = r.generatedColumn),
              i > o ||
              (i == o && a >= s) ||
              n.compareByGeneratedPositionsInflated(t, r) <= 0
                ? ((this._last = e), this._array.push(e))
                : ((this._sorted = !1), this._array.push(e));
          }),
          (o.prototype.toArray = function () {
            return (
              this._sorted ||
                (this._array.sort(n.compareByGeneratedPositionsInflated),
                (this._sorted = !0)),
              this._array
            );
          }),
          (t.H = o);
      },
      9888: (e, t) => {
        function r(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function n(e, t, o, i) {
          if (o < i) {
            var s = o - 1;
            r(
              e,
              ((u = o), (d = i), Math.round(u + Math.random() * (d - u))),
              i
            );
            for (var a = e[i], l = o; l < i; l++)
              t(e[l], a) <= 0 && r(e, (s += 1), l);
            r(e, s + 1, l);
            var c = s + 1;
            n(e, t, o, c - 1), n(e, t, c + 1, i);
          }
          var u, d;
        }
        t.U = function (e, t) {
          n(e, t, 0, e.length - 1);
        };
      },
      5600: (e, t, r) => {
        var n = r(6268),
          o = r(5583),
          i = r(1862).I,
          s = r(4754),
          a = r(9888).U;
        function l(e) {
          var t = e;
          return (
            "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))),
            null != t.sections ? new d(t) : new c(t)
          );
        }
        function c(e) {
          var t = e;
          "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
          var r = n.getArg(t, "version"),
            o = n.getArg(t, "sources"),
            s = n.getArg(t, "names", []),
            a = n.getArg(t, "sourceRoot", null),
            l = n.getArg(t, "sourcesContent", null),
            c = n.getArg(t, "mappings"),
            u = n.getArg(t, "file", null);
          if (r != this._version) throw new Error("Unsupported version: " + r);
          (o = o
            .map(String)
            .map(n.normalize)
            .map(function (e) {
              return a && n.isAbsolute(a) && n.isAbsolute(e)
                ? n.relative(a, e)
                : e;
            })),
            (this._names = i.fromArray(s.map(String), !0)),
            (this._sources = i.fromArray(o, !0)),
            (this.sourceRoot = a),
            (this.sourcesContent = l),
            (this._mappings = c),
            (this.file = u);
        }
        function u() {
          (this.generatedLine = 0),
            (this.generatedColumn = 0),
            (this.source = null),
            (this.originalLine = null),
            (this.originalColumn = null),
            (this.name = null);
        }
        function d(e) {
          var t = e;
          "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
          var r = n.getArg(t, "version"),
            o = n.getArg(t, "sections");
          if (r != this._version) throw new Error("Unsupported version: " + r);
          (this._sources = new i()), (this._names = new i());
          var s = { line: -1, column: 0 };
          this._sections = o.map(function (e) {
            if (e.url)
              throw new Error(
                "Support for url field in sections not implemented."
              );
            var t = n.getArg(e, "offset"),
              r = n.getArg(t, "line"),
              o = n.getArg(t, "column");
            if (r < s.line || (r === s.line && o < s.column))
              throw new Error(
                "Section offsets must be ordered and non-overlapping."
              );
            return (
              (s = t),
              {
                generatedOffset: {
                  generatedLine: r + 1,
                  generatedColumn: o + 1,
                },
                consumer: new l(n.getArg(e, "map")),
              }
            );
          });
        }
        (l.fromSourceMap = function (e) {
          return c.fromSourceMap(e);
        }),
          (l.prototype._version = 3),
          (l.prototype.__generatedMappings = null),
          Object.defineProperty(l.prototype, "_generatedMappings", {
            get: function () {
              return (
                this.__generatedMappings ||
                  this._parseMappings(this._mappings, this.sourceRoot),
                this.__generatedMappings
              );
            },
          }),
          (l.prototype.__originalMappings = null),
          Object.defineProperty(l.prototype, "_originalMappings", {
            get: function () {
              return (
                this.__originalMappings ||
                  this._parseMappings(this._mappings, this.sourceRoot),
                this.__originalMappings
              );
            },
          }),
          (l.prototype._charIsMappingSeparator = function (e, t) {
            var r = e.charAt(t);
            return ";" === r || "," === r;
          }),
          (l.prototype._parseMappings = function (e, t) {
            throw new Error("Subclasses must implement _parseMappings");
          }),
          (l.GENERATED_ORDER = 1),
          (l.ORIGINAL_ORDER = 2),
          (l.GREATEST_LOWER_BOUND = 1),
          (l.LEAST_UPPER_BOUND = 2),
          (l.prototype.eachMapping = function (e, t, r) {
            var o,
              i = t || null;
            switch (r || l.GENERATED_ORDER) {
              case l.GENERATED_ORDER:
                o = this._generatedMappings;
                break;
              case l.ORIGINAL_ORDER:
                o = this._originalMappings;
                break;
              default:
                throw new Error("Unknown order of iteration.");
            }
            var s = this.sourceRoot;
            o.map(function (e) {
              var t = null === e.source ? null : this._sources.at(e.source);
              return (
                null != t && null != s && (t = n.join(s, t)),
                {
                  source: t,
                  generatedLine: e.generatedLine,
                  generatedColumn: e.generatedColumn,
                  originalLine: e.originalLine,
                  originalColumn: e.originalColumn,
                  name: null === e.name ? null : this._names.at(e.name),
                }
              );
            }, this).forEach(e, i);
          }),
          (l.prototype.allGeneratedPositionsFor = function (e) {
            var t = n.getArg(e, "line"),
              r = {
                source: n.getArg(e, "source"),
                originalLine: t,
                originalColumn: n.getArg(e, "column", 0),
              };
            if (
              (null != this.sourceRoot &&
                (r.source = n.relative(this.sourceRoot, r.source)),
              !this._sources.has(r.source))
            )
              return [];
            r.source = this._sources.indexOf(r.source);
            var i = [],
              s = this._findMapping(
                r,
                this._originalMappings,
                "originalLine",
                "originalColumn",
                n.compareByOriginalPositions,
                o.LEAST_UPPER_BOUND
              );
            if (s >= 0) {
              var a = this._originalMappings[s];
              if (void 0 === e.column)
                for (var l = a.originalLine; a && a.originalLine === l; )
                  i.push({
                    line: n.getArg(a, "generatedLine", null),
                    column: n.getArg(a, "generatedColumn", null),
                    lastColumn: n.getArg(a, "lastGeneratedColumn", null),
                  }),
                    (a = this._originalMappings[++s]);
              else
                for (
                  var c = a.originalColumn;
                  a && a.originalLine === t && a.originalColumn == c;

                )
                  i.push({
                    line: n.getArg(a, "generatedLine", null),
                    column: n.getArg(a, "generatedColumn", null),
                    lastColumn: n.getArg(a, "lastGeneratedColumn", null),
                  }),
                    (a = this._originalMappings[++s]);
            }
            return i;
          }),
          (t.SourceMapConsumer = l),
          (c.prototype = Object.create(l.prototype)),
          (c.prototype.consumer = l),
          (c.fromSourceMap = function (e) {
            var t = Object.create(c.prototype),
              r = (t._names = i.fromArray(e._names.toArray(), !0)),
              o = (t._sources = i.fromArray(e._sources.toArray(), !0));
            (t.sourceRoot = e._sourceRoot),
              (t.sourcesContent = e._generateSourcesContent(
                t._sources.toArray(),
                t.sourceRoot
              )),
              (t.file = e._file);
            for (
              var s = e._mappings.toArray().slice(),
                l = (t.__generatedMappings = []),
                d = (t.__originalMappings = []),
                f = 0,
                h = s.length;
              f < h;
              f++
            ) {
              var p = s[f],
                m = new u();
              (m.generatedLine = p.generatedLine),
                (m.generatedColumn = p.generatedColumn),
                p.source &&
                  ((m.source = o.indexOf(p.source)),
                  (m.originalLine = p.originalLine),
                  (m.originalColumn = p.originalColumn),
                  p.name && (m.name = r.indexOf(p.name)),
                  d.push(m)),
                l.push(m);
            }
            return a(t.__originalMappings, n.compareByOriginalPositions), t;
          }),
          (c.prototype._version = 3),
          Object.defineProperty(c.prototype, "sources", {
            get: function () {
              return this._sources.toArray().map(function (e) {
                return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e;
              }, this);
            },
          }),
          (c.prototype._parseMappings = function (e, t) {
            for (
              var r,
                o,
                i,
                l,
                c,
                d = 1,
                f = 0,
                h = 0,
                p = 0,
                m = 0,
                g = 0,
                v = e.length,
                y = 0,
                w = {},
                b = {},
                _ = [],
                E = [];
              y < v;

            )
              if (";" === e.charAt(y)) d++, y++, (f = 0);
              else if ("," === e.charAt(y)) y++;
              else {
                for (
                  (r = new u()).generatedLine = d, l = y;
                  l < v && !this._charIsMappingSeparator(e, l);
                  l++
                );
                if ((i = w[(o = e.slice(y, l))])) y += o.length;
                else {
                  for (i = []; y < l; )
                    s.decode(e, y, b), (c = b.value), (y = b.rest), i.push(c);
                  if (2 === i.length)
                    throw new Error("Found a source, but no line and column");
                  if (3 === i.length)
                    throw new Error("Found a source and line, but no column");
                  w[o] = i;
                }
                (r.generatedColumn = f + i[0]),
                  (f = r.generatedColumn),
                  i.length > 1 &&
                    ((r.source = m + i[1]),
                    (m += i[1]),
                    (r.originalLine = h + i[2]),
                    (h = r.originalLine),
                    (r.originalLine += 1),
                    (r.originalColumn = p + i[3]),
                    (p = r.originalColumn),
                    i.length > 4 && ((r.name = g + i[4]), (g += i[4]))),
                  E.push(r),
                  "number" == typeof r.originalLine && _.push(r);
              }
            a(E, n.compareByGeneratedPositionsDeflated),
              (this.__generatedMappings = E),
              a(_, n.compareByOriginalPositions),
              (this.__originalMappings = _);
          }),
          (c.prototype._findMapping = function (e, t, r, n, i, s) {
            if (e[r] <= 0)
              throw new TypeError(
                "Line must be greater than or equal to 1, got " + e[r]
              );
            if (e[n] < 0)
              throw new TypeError(
                "Column must be greater than or equal to 0, got " + e[n]
              );
            return o.search(e, t, i, s);
          }),
          (c.prototype.computeColumnSpans = function () {
            for (var e = 0; e < this._generatedMappings.length; ++e) {
              var t = this._generatedMappings[e];
              if (e + 1 < this._generatedMappings.length) {
                var r = this._generatedMappings[e + 1];
                if (t.generatedLine === r.generatedLine) {
                  t.lastGeneratedColumn = r.generatedColumn - 1;
                  continue;
                }
              }
              t.lastGeneratedColumn = 1 / 0;
            }
          }),
          (c.prototype.originalPositionFor = function (e) {
            var t = {
                generatedLine: n.getArg(e, "line"),
                generatedColumn: n.getArg(e, "column"),
              },
              r = this._findMapping(
                t,
                this._generatedMappings,
                "generatedLine",
                "generatedColumn",
                n.compareByGeneratedPositionsDeflated,
                n.getArg(e, "bias", l.GREATEST_LOWER_BOUND)
              );
            if (r >= 0) {
              var o = this._generatedMappings[r];
              if (o.generatedLine === t.generatedLine) {
                var i = n.getArg(o, "source", null);
                null !== i &&
                  ((i = this._sources.at(i)),
                  null != this.sourceRoot && (i = n.join(this.sourceRoot, i)));
                var s = n.getArg(o, "name", null);
                return (
                  null !== s && (s = this._names.at(s)),
                  {
                    source: i,
                    line: n.getArg(o, "originalLine", null),
                    column: n.getArg(o, "originalColumn", null),
                    name: s,
                  }
                );
              }
            }
            return { source: null, line: null, column: null, name: null };
          }),
          (c.prototype.hasContentsOfAllSources = function () {
            return (
              !!this.sourcesContent &&
              this.sourcesContent.length >= this._sources.size() &&
              !this.sourcesContent.some(function (e) {
                return null == e;
              })
            );
          }),
          (c.prototype.sourceContentFor = function (e, t) {
            if (!this.sourcesContent) return null;
            if (
              (null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)),
              this._sources.has(e))
            )
              return this.sourcesContent[this._sources.indexOf(e)];
            var r;
            if (null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
              var o = e.replace(/^file:\/\//, "");
              if ("file" == r.scheme && this._sources.has(o))
                return this.sourcesContent[this._sources.indexOf(o)];
              if ((!r.path || "/" == r.path) && this._sources.has("/" + e))
                return this.sourcesContent[this._sources.indexOf("/" + e)];
            }
            if (t) return null;
            throw new Error('"' + e + '" is not in the SourceMap.');
          }),
          (c.prototype.generatedPositionFor = function (e) {
            var t = n.getArg(e, "source");
            if (
              (null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)),
              !this._sources.has(t))
            )
              return { line: null, column: null, lastColumn: null };
            var r = {
                source: (t = this._sources.indexOf(t)),
                originalLine: n.getArg(e, "line"),
                originalColumn: n.getArg(e, "column"),
              },
              o = this._findMapping(
                r,
                this._originalMappings,
                "originalLine",
                "originalColumn",
                n.compareByOriginalPositions,
                n.getArg(e, "bias", l.GREATEST_LOWER_BOUND)
              );
            if (o >= 0) {
              var i = this._originalMappings[o];
              if (i.source === r.source)
                return {
                  line: n.getArg(i, "generatedLine", null),
                  column: n.getArg(i, "generatedColumn", null),
                  lastColumn: n.getArg(i, "lastGeneratedColumn", null),
                };
            }
            return { line: null, column: null, lastColumn: null };
          }),
          (d.prototype = Object.create(l.prototype)),
          (d.prototype.constructor = l),
          (d.prototype._version = 3),
          Object.defineProperty(d.prototype, "sources", {
            get: function () {
              for (var e = [], t = 0; t < this._sections.length; t++)
                for (
                  var r = 0;
                  r < this._sections[t].consumer.sources.length;
                  r++
                )
                  e.push(this._sections[t].consumer.sources[r]);
              return e;
            },
          }),
          (d.prototype.originalPositionFor = function (e) {
            var t = {
                generatedLine: n.getArg(e, "line"),
                generatedColumn: n.getArg(e, "column"),
              },
              r = o.search(t, this._sections, function (e, t) {
                return (
                  e.generatedLine - t.generatedOffset.generatedLine ||
                  e.generatedColumn - t.generatedOffset.generatedColumn
                );
              }),
              i = this._sections[r];
            return i
              ? i.consumer.originalPositionFor({
                  line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
                  column:
                    t.generatedColumn -
                    (i.generatedOffset.generatedLine === t.generatedLine
                      ? i.generatedOffset.generatedColumn - 1
                      : 0),
                  bias: e.bias,
                })
              : { source: null, line: null, column: null, name: null };
          }),
          (d.prototype.hasContentsOfAllSources = function () {
            return this._sections.every(function (e) {
              return e.consumer.hasContentsOfAllSources();
            });
          }),
          (d.prototype.sourceContentFor = function (e, t) {
            for (var r = 0; r < this._sections.length; r++) {
              var n = this._sections[r].consumer.sourceContentFor(e, !0);
              if (n) return n;
            }
            if (t) return null;
            throw new Error('"' + e + '" is not in the SourceMap.');
          }),
          (d.prototype.generatedPositionFor = function (e) {
            for (var t = 0; t < this._sections.length; t++) {
              var r = this._sections[t];
              if (-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
                var o = r.consumer.generatedPositionFor(e);
                if (o)
                  return {
                    line: o.line + (r.generatedOffset.generatedLine - 1),
                    column:
                      o.column +
                      (r.generatedOffset.generatedLine === o.line
                        ? r.generatedOffset.generatedColumn - 1
                        : 0),
                  };
              }
            }
            return { line: null, column: null };
          }),
          (d.prototype._parseMappings = function (e, t) {
            (this.__generatedMappings = []), (this.__originalMappings = []);
            for (var r = 0; r < this._sections.length; r++)
              for (
                var o = this._sections[r],
                  i = o.consumer._generatedMappings,
                  s = 0;
                s < i.length;
                s++
              ) {
                var l = i[s],
                  c = o.consumer._sources.at(l.source);
                null !== o.consumer.sourceRoot &&
                  (c = n.join(o.consumer.sourceRoot, c)),
                  this._sources.add(c),
                  (c = this._sources.indexOf(c));
                var u = o.consumer._names.at(l.name);
                this._names.add(u), (u = this._names.indexOf(u));
                var d = {
                  source: c,
                  generatedLine:
                    l.generatedLine + (o.generatedOffset.generatedLine - 1),
                  generatedColumn:
                    l.generatedColumn +
                    (o.generatedOffset.generatedLine === l.generatedLine
                      ? o.generatedOffset.generatedColumn - 1
                      : 0),
                  originalLine: l.originalLine,
                  originalColumn: l.originalColumn,
                  name: u,
                };
                this.__generatedMappings.push(d),
                  "number" == typeof d.originalLine &&
                    this.__originalMappings.push(d);
              }
            a(this.__generatedMappings, n.compareByGeneratedPositionsDeflated),
              a(this.__originalMappings, n.compareByOriginalPositions);
          });
      },
      9947: (e, t, r) => {
        var n = r(4754),
          o = r(6268),
          i = r(1862).I,
          s = r(6546).H;
        function a(e) {
          e || (e = {}),
            (this._file = o.getArg(e, "file", null)),
            (this._sourceRoot = o.getArg(e, "sourceRoot", null)),
            (this._skipValidation = o.getArg(e, "skipValidation", !1)),
            (this._sources = new i()),
            (this._names = new i()),
            (this._mappings = new s()),
            (this._sourcesContents = null);
        }
        (a.prototype._version = 3),
          (a.fromSourceMap = function (e) {
            var t = e.sourceRoot,
              r = new a({ file: e.file, sourceRoot: t });
            return (
              e.eachMapping(function (e) {
                var n = {
                  generated: {
                    line: e.generatedLine,
                    column: e.generatedColumn,
                  },
                };
                null != e.source &&
                  ((n.source = e.source),
                  null != t && (n.source = o.relative(t, n.source)),
                  (n.original = {
                    line: e.originalLine,
                    column: e.originalColumn,
                  }),
                  null != e.name && (n.name = e.name)),
                  r.addMapping(n);
              }),
              e.sources.forEach(function (t) {
                var n = e.sourceContentFor(t);
                null != n && r.setSourceContent(t, n);
              }),
              r
            );
          }),
          (a.prototype.addMapping = function (e) {
            var t = o.getArg(e, "generated"),
              r = o.getArg(e, "original", null),
              n = o.getArg(e, "source", null),
              i = o.getArg(e, "name", null);
            this._skipValidation || this._validateMapping(t, r, n, i),
              null != n &&
                ((n = String(n)), this._sources.has(n) || this._sources.add(n)),
              null != i &&
                ((i = String(i)), this._names.has(i) || this._names.add(i)),
              this._mappings.add({
                generatedLine: t.line,
                generatedColumn: t.column,
                originalLine: null != r && r.line,
                originalColumn: null != r && r.column,
                source: n,
                name: i,
              });
          }),
          (a.prototype.setSourceContent = function (e, t) {
            var r = e;
            null != this._sourceRoot && (r = o.relative(this._sourceRoot, r)),
              null != t
                ? (this._sourcesContents ||
                    (this._sourcesContents = Object.create(null)),
                  (this._sourcesContents[o.toSetString(r)] = t))
                : this._sourcesContents &&
                  (delete this._sourcesContents[o.toSetString(r)],
                  0 === Object.keys(this._sourcesContents).length &&
                    (this._sourcesContents = null));
          }),
          (a.prototype.applySourceMap = function (e, t, r) {
            var n = t;
            if (null == t) {
              if (null == e.file)
                throw new Error(
                  'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.'
                );
              n = e.file;
            }
            var s = this._sourceRoot;
            null != s && (n = o.relative(s, n));
            var a = new i(),
              l = new i();
            this._mappings.unsortedForEach(function (t) {
              if (t.source === n && null != t.originalLine) {
                var i = e.originalPositionFor({
                  line: t.originalLine,
                  column: t.originalColumn,
                });
                null != i.source &&
                  ((t.source = i.source),
                  null != r && (t.source = o.join(r, t.source)),
                  null != s && (t.source = o.relative(s, t.source)),
                  (t.originalLine = i.line),
                  (t.originalColumn = i.column),
                  null != i.name && (t.name = i.name));
              }
              var c = t.source;
              null == c || a.has(c) || a.add(c);
              var u = t.name;
              null == u || l.has(u) || l.add(u);
            }, this),
              (this._sources = a),
              (this._names = l),
              e.sources.forEach(function (t) {
                var n = e.sourceContentFor(t);
                null != n &&
                  (null != r && (t = o.join(r, t)),
                  null != s && (t = o.relative(s, t)),
                  this.setSourceContent(t, n));
              }, this);
          }),
          (a.prototype._validateMapping = function (e, t, r, n) {
            if (t && "number" != typeof t.line && "number" != typeof t.column)
              throw new Error(
                "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
              );
            if (
              (!(
                e &&
                "line" in e &&
                "column" in e &&
                e.line > 0 &&
                e.column >= 0
              ) ||
                t ||
                r ||
                n) &&
              !(
                e &&
                "line" in e &&
                "column" in e &&
                t &&
                "line" in t &&
                "column" in t &&
                e.line > 0 &&
                e.column >= 0 &&
                t.line > 0 &&
                t.column >= 0 &&
                r
              )
            )
              throw new Error(
                "Invalid mapping: " +
                  JSON.stringify({
                    generated: e,
                    source: r,
                    original: t,
                    name: n,
                  })
              );
          }),
          (a.prototype._serializeMappings = function () {
            for (
              var e,
                t,
                r,
                i,
                s = 0,
                a = 1,
                l = 0,
                c = 0,
                u = 0,
                d = 0,
                f = "",
                h = this._mappings.toArray(),
                p = 0,
                m = h.length;
              p < m;
              p++
            ) {
              if (((e = ""), (t = h[p]).generatedLine !== a))
                for (s = 0; t.generatedLine !== a; ) (e += ";"), a++;
              else if (p > 0) {
                if (!o.compareByGeneratedPositionsInflated(t, h[p - 1]))
                  continue;
                e += ",";
              }
              (e += n.encode(t.generatedColumn - s)),
                (s = t.generatedColumn),
                null != t.source &&
                  ((i = this._sources.indexOf(t.source)),
                  (e += n.encode(i - d)),
                  (d = i),
                  (e += n.encode(t.originalLine - 1 - c)),
                  (c = t.originalLine - 1),
                  (e += n.encode(t.originalColumn - l)),
                  (l = t.originalColumn),
                  null != t.name &&
                    ((r = this._names.indexOf(t.name)),
                    (e += n.encode(r - u)),
                    (u = r))),
                (f += e);
            }
            return f;
          }),
          (a.prototype._generateSourcesContent = function (e, t) {
            return e.map(function (e) {
              if (!this._sourcesContents) return null;
              null != t && (e = o.relative(t, e));
              var r = o.toSetString(e);
              return Object.prototype.hasOwnProperty.call(
                this._sourcesContents,
                r
              )
                ? this._sourcesContents[r]
                : null;
            }, this);
          }),
          (a.prototype.toJSON = function () {
            var e = {
              version: this._version,
              sources: this._sources.toArray(),
              names: this._names.toArray(),
              mappings: this._serializeMappings(),
            };
            return (
              null != this._file && (e.file = this._file),
              null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
              this._sourcesContents &&
                (e.sourcesContent = this._generateSourcesContent(
                  e.sources,
                  e.sourceRoot
                )),
              e
            );
          }),
          (a.prototype.toString = function () {
            return JSON.stringify(this.toJSON());
          }),
          (t.h = a);
      },
      4047: (e, t, r) => {
        var n = r(9947).h,
          o = r(6268),
          i = /(\r?\n)/,
          s = "$$$isSourceNode$$$";
        function a(e, t, r, n, o) {
          (this.children = []),
            (this.sourceContents = {}),
            (this.line = null == e ? null : e),
            (this.column = null == t ? null : t),
            (this.source = null == r ? null : r),
            (this.name = null == o ? null : o),
            (this[s] = !0),
            null != n && this.add(n);
        }
        (a.fromStringWithSourceMap = function (e, t, r) {
          var n = new a(),
            s = e.split(i),
            l = 0,
            c = function () {
              return e() + (e() || "");
              function e() {
                return l < s.length ? s[l++] : void 0;
              }
            },
            u = 1,
            d = 0,
            f = null;
          return (
            t.eachMapping(function (e) {
              if (null !== f) {
                if (!(u < e.generatedLine)) {
                  var t = (r = s[l]).substr(0, e.generatedColumn - d);
                  return (
                    (s[l] = r.substr(e.generatedColumn - d)),
                    (d = e.generatedColumn),
                    h(f, t),
                    void (f = e)
                  );
                }
                h(f, c()), u++, (d = 0);
              }
              for (; u < e.generatedLine; ) n.add(c()), u++;
              if (d < e.generatedColumn) {
                var r = s[l];
                n.add(r.substr(0, e.generatedColumn)),
                  (s[l] = r.substr(e.generatedColumn)),
                  (d = e.generatedColumn);
              }
              f = e;
            }, this),
            l < s.length && (f && h(f, c()), n.add(s.splice(l).join(""))),
            t.sources.forEach(function (e) {
              var i = t.sourceContentFor(e);
              null != i &&
                (null != r && (e = o.join(r, e)), n.setSourceContent(e, i));
            }),
            n
          );
          function h(e, t) {
            if (null === e || void 0 === e.source) n.add(t);
            else {
              var i = r ? o.join(r, e.source) : e.source;
              n.add(new a(e.originalLine, e.originalColumn, i, t, e.name));
            }
          }
        }),
          (a.prototype.add = function (e) {
            if (Array.isArray(e))
              e.forEach(function (e) {
                this.add(e);
              }, this);
            else {
              if (!e[s] && "string" != typeof e)
                throw new TypeError(
                  "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                    e
                );
              e && this.children.push(e);
            }
            return this;
          }),
          (a.prototype.prepend = function (e) {
            if (Array.isArray(e))
              for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
            else {
              if (!e[s] && "string" != typeof e)
                throw new TypeError(
                  "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                    e
                );
              this.children.unshift(e);
            }
            return this;
          }),
          (a.prototype.walk = function (e) {
            for (var t, r = 0, n = this.children.length; r < n; r++)
              (t = this.children[r])[s]
                ? t.walk(e)
                : "" !== t &&
                  e(t, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name,
                  });
          }),
          (a.prototype.join = function (e) {
            var t,
              r,
              n = this.children.length;
            if (n > 0) {
              for (t = [], r = 0; r < n - 1; r++)
                t.push(this.children[r]), t.push(e);
              t.push(this.children[r]), (this.children = t);
            }
            return this;
          }),
          (a.prototype.replaceRight = function (e, t) {
            var r = this.children[this.children.length - 1];
            return (
              r[s]
                ? r.replaceRight(e, t)
                : "string" == typeof r
                ? (this.children[this.children.length - 1] = r.replace(e, t))
                : this.children.push("".replace(e, t)),
              this
            );
          }),
          (a.prototype.setSourceContent = function (e, t) {
            this.sourceContents[o.toSetString(e)] = t;
          }),
          (a.prototype.walkSourceContents = function (e) {
            for (var t = 0, r = this.children.length; t < r; t++)
              this.children[t][s] && this.children[t].walkSourceContents(e);
            var n = Object.keys(this.sourceContents);
            for (t = 0, r = n.length; t < r; t++)
              e(o.fromSetString(n[t]), this.sourceContents[n[t]]);
          }),
          (a.prototype.toString = function () {
            var e = "";
            return (
              this.walk(function (t) {
                e += t;
              }),
              e
            );
          }),
          (a.prototype.toStringWithSourceMap = function (e) {
            var t = { code: "", line: 1, column: 0 },
              r = new n(e),
              o = !1,
              i = null,
              s = null,
              a = null,
              l = null;
            return (
              this.walk(function (e, n) {
                (t.code += e),
                  null !== n.source && null !== n.line && null !== n.column
                    ? ((i === n.source &&
                        s === n.line &&
                        a === n.column &&
                        l === n.name) ||
                        r.addMapping({
                          source: n.source,
                          original: { line: n.line, column: n.column },
                          generated: { line: t.line, column: t.column },
                          name: n.name,
                        }),
                      (i = n.source),
                      (s = n.line),
                      (a = n.column),
                      (l = n.name),
                      (o = !0))
                    : o &&
                      (r.addMapping({
                        generated: { line: t.line, column: t.column },
                      }),
                      (i = null),
                      (o = !1));
                for (var c = 0, u = e.length; c < u; c++)
                  10 === e.charCodeAt(c)
                    ? (t.line++,
                      (t.column = 0),
                      c + 1 === u
                        ? ((i = null), (o = !1))
                        : o &&
                          r.addMapping({
                            source: n.source,
                            original: { line: n.line, column: n.column },
                            generated: { line: t.line, column: t.column },
                            name: n.name,
                          }))
                    : t.column++;
              }),
              this.walkSourceContents(function (e, t) {
                r.setSourceContent(e, t);
              }),
              { code: t.code, map: r }
            );
          });
      },
      6268: (e, t) => {
        t.getArg = function (e, t, r) {
          if (t in e) return e[t];
          if (3 === arguments.length) return r;
          throw new Error('"' + t + '" is a required argument.');
        };
        var r =
            /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
          n = /^data:.+\,.+$/;
        function o(e) {
          var t = e.match(r);
          return t
            ? { scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5] }
            : null;
        }
        function i(e) {
          var t = "";
          return (
            e.scheme && (t += e.scheme + ":"),
            (t += "//"),
            e.auth && (t += e.auth + "@"),
            e.host && (t += e.host),
            e.port && (t += ":" + e.port),
            e.path && (t += e.path),
            t
          );
        }
        function s(e) {
          var r = e,
            n = o(e);
          if (n) {
            if (!n.path) return e;
            r = n.path;
          }
          for (
            var s,
              a = t.isAbsolute(r),
              l = r.split(/\/+/),
              c = 0,
              u = l.length - 1;
            u >= 0;
            u--
          )
            "." === (s = l[u])
              ? l.splice(u, 1)
              : ".." === s
              ? c++
              : c > 0 &&
                ("" === s
                  ? (l.splice(u + 1, c), (c = 0))
                  : (l.splice(u, 2), c--));
          return (
            "" === (r = l.join("/")) && (r = a ? "/" : "."),
            n ? ((n.path = r), i(n)) : r
          );
        }
        (t.urlParse = o),
          (t.urlGenerate = i),
          (t.normalize = s),
          (t.join = function (e, t) {
            "" === e && (e = "."), "" === t && (t = ".");
            var r = o(t),
              a = o(e);
            if ((a && (e = a.path || "/"), r && !r.scheme))
              return a && (r.scheme = a.scheme), i(r);
            if (r || t.match(n)) return t;
            if (a && !a.host && !a.path) return (a.host = t), i(a);
            var l =
              "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
            return a ? ((a.path = l), i(a)) : l;
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0) || !!e.match(r);
          }),
          (t.relative = function (e, t) {
            "" === e && (e = "."), (e = e.replace(/\/$/, ""));
            for (var r = 0; 0 !== t.indexOf(e + "/"); ) {
              var n = e.lastIndexOf("/");
              if (n < 0) return t;
              if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
              ++r;
            }
            return Array(r + 1).join("../") + t.substr(e.length + 1);
          });
        var a = !("__proto__" in Object.create(null));
        function l(e) {
          return e;
        }
        function c(e) {
          if (!e) return !1;
          var t = e.length;
          if (t < 9) return !1;
          if (
            95 !== e.charCodeAt(t - 1) ||
            95 !== e.charCodeAt(t - 2) ||
            111 !== e.charCodeAt(t - 3) ||
            116 !== e.charCodeAt(t - 4) ||
            111 !== e.charCodeAt(t - 5) ||
            114 !== e.charCodeAt(t - 6) ||
            112 !== e.charCodeAt(t - 7) ||
            95 !== e.charCodeAt(t - 8) ||
            95 !== e.charCodeAt(t - 9)
          )
            return !1;
          for (var r = t - 10; r >= 0; r--)
            if (36 !== e.charCodeAt(r)) return !1;
          return !0;
        }
        function u(e, t) {
          return e === t ? 0 : e > t ? 1 : -1;
        }
        (t.toSetString = a
          ? l
          : function (e) {
              return c(e) ? "$" + e : e;
            }),
          (t.fromSetString = a
            ? l
            : function (e) {
                return c(e) ? e.slice(1) : e;
              }),
          (t.compareByOriginalPositions = function (e, t, r) {
            var n = e.source - t.source;
            return 0 !== n ||
              0 != (n = e.originalLine - t.originalLine) ||
              0 != (n = e.originalColumn - t.originalColumn) ||
              r ||
              0 != (n = e.generatedColumn - t.generatedColumn) ||
              0 != (n = e.generatedLine - t.generatedLine)
              ? n
              : e.name - t.name;
          }),
          (t.compareByGeneratedPositionsDeflated = function (e, t, r) {
            var n = e.generatedLine - t.generatedLine;
            return 0 !== n ||
              0 != (n = e.generatedColumn - t.generatedColumn) ||
              r ||
              0 != (n = e.source - t.source) ||
              0 != (n = e.originalLine - t.originalLine) ||
              0 != (n = e.originalColumn - t.originalColumn)
              ? n
              : e.name - t.name;
          }),
          (t.compareByGeneratedPositionsInflated = function (e, t) {
            var r = e.generatedLine - t.generatedLine;
            return 0 !== r ||
              0 != (r = e.generatedColumn - t.generatedColumn) ||
              0 !== (r = u(e.source, t.source)) ||
              0 != (r = e.originalLine - t.originalLine) ||
              0 != (r = e.originalColumn - t.originalColumn)
              ? r
              : u(e.name, t.name);
          });
      },
      6947: (e, t, r) => {
        r(9947).h, (t.SourceMapConsumer = r(5600).SourceMapConsumer), r(4047);
      },
      9037: (e, t) => {
        function r(e) {
          for (var t in e) this[t] = e[t];
        }
        (t.get = function (e) {
          var r = Error.stackTraceLimit;
          Error.stackTraceLimit = 1 / 0;
          var n = {},
            o = Error.prepareStackTrace;
          (Error.prepareStackTrace = function (e, t) {
            return t;
          }),
            Error.captureStackTrace(n, e || t.get);
          var i = n.stack;
          return (Error.prepareStackTrace = o), (Error.stackTraceLimit = r), i;
        }),
          (t.parse = function (e) {
            if (!e.stack) return [];
            var t = this;
            return e.stack
              .split("\n")
              .slice(1)
              .map(function (e) {
                if (e.match(/^\s*[-]{4,}$/))
                  return t._createParsedCallSite({
                    fileName: e,
                    lineNumber: null,
                    functionName: null,
                    typeName: null,
                    methodName: null,
                    columnNumber: null,
                    native: null,
                  });
                var r = e.match(
                  /at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/
                );
                if (r) {
                  var n = null,
                    o = null,
                    i = null,
                    s = null,
                    a = null,
                    l = "native" === r[5];
                  if (r[1]) {
                    var c = (i = r[1]).lastIndexOf(".");
                    if (("." == i[c - 1] && c--, c > 0)) {
                      (n = i.substr(0, c)), (o = i.substr(c + 1));
                      var u = n.indexOf(".Module");
                      u > 0 && ((i = i.substr(u + 1)), (n = n.substr(0, u)));
                    }
                    s = null;
                  }
                  o && ((s = n), (a = o)),
                    "<anonymous>" === o && ((a = null), (i = null));
                  var d = {
                    fileName: r[2] || null,
                    lineNumber: parseInt(r[3], 10) || null,
                    functionName: i,
                    typeName: s,
                    methodName: a,
                    columnNumber: parseInt(r[4], 10) || null,
                    native: l,
                  };
                  return t._createParsedCallSite(d);
                }
              })
              .filter(function (e) {
                return !!e;
              });
          }),
          [
            "this",
            "typeName",
            "functionName",
            "methodName",
            "fileName",
            "lineNumber",
            "columnNumber",
            "function",
            "evalOrigin",
          ].forEach(function (e) {
            (r.prototype[e] = null),
              (r.prototype["get" + e[0].toUpperCase() + e.substr(1)] =
                function () {
                  return this[e];
                });
          }),
          ["topLevel", "eval", "native", "constructor"].forEach(function (e) {
            (r.prototype[e] = !1),
              (r.prototype["is" + e[0].toUpperCase() + e.substr(1)] =
                function () {
                  return this[e];
                });
          }),
          (t._createParsedCallSite = function (e) {
            return new r(e);
          });
      },
      3976: (e, t, r) => {
        "use strict";
        var n = r(496).Buffer,
          o =
            n.isEncoding ||
            function (e) {
              switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                  return !0;
                default:
                  return !1;
              }
            };
        function i(e) {
          var t;
          switch (
            ((this.encoding = (function (e) {
              var t = (function (e) {
                if (!e) return "utf8";
                for (var t; ; )
                  switch (e) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return e;
                    default:
                      if (t) return;
                      (e = ("" + e).toLowerCase()), (t = !0);
                  }
              })(e);
              if ("string" != typeof t && (n.isEncoding === o || !o(e)))
                throw new Error("Unknown encoding: " + e);
              return t || e;
            })(e)),
            this.encoding)
          ) {
            case "utf16le":
              (this.text = l), (this.end = c), (t = 4);
              break;
            case "utf8":
              (this.fillLast = a), (t = 4);
              break;
            case "base64":
              (this.text = u), (this.end = d), (t = 3);
              break;
            default:
              return (this.write = f), void (this.end = h);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = n.allocUnsafe(t));
        }
        function s(e) {
          return e <= 127
            ? 0
            : e >> 5 == 6
            ? 2
            : e >> 4 == 14
            ? 3
            : e >> 3 == 30
            ? 4
            : e >> 6 == 2
            ? -1
            : -2;
        }
        function a(e) {
          var t = this.lastTotal - this.lastNeed,
            r = (function (e, t, r) {
              if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
              if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                  return (e.lastNeed = 2), "�";
              }
            })(this, e);
          return void 0 !== r
            ? r
            : this.lastNeed <= e.length
            ? (e.copy(this.lastChar, t, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (e.copy(this.lastChar, t, 0, e.length),
              void (this.lastNeed -= e.length));
        }
        function l(e, t) {
          if ((e.length - t) % 2 == 0) {
            var r = e.toString("utf16le", t);
            if (r) {
              var n = r.charCodeAt(r.length - 1);
              if (n >= 55296 && n <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1]),
                  r.slice(0, -1)
                );
            }
            return r;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = e[e.length - 1]),
            e.toString("utf16le", t, e.length - 1)
          );
        }
        function c(e) {
          var t = e && e.length ? this.write(e) : "";
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString("utf16le", 0, r);
          }
          return t;
        }
        function u(e, t) {
          var r = (e.length - t) % 3;
          return 0 === r
            ? e.toString("base64", t)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 === r
                ? (this.lastChar[0] = e[e.length - 1])
                : ((this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1])),
              e.toString("base64", t, e.length - r));
        }
        function d(e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed
            ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
            : t;
        }
        function f(e) {
          return e.toString(this.encoding);
        }
        function h(e) {
          return e && e.length ? this.write(e) : "";
        }
        (t.s = i),
          (i.prototype.write = function (e) {
            if (0 === e.length) return "";
            var t, r;
            if (this.lastNeed) {
              if (void 0 === (t = this.fillLast(e))) return "";
              (r = this.lastNeed), (this.lastNeed = 0);
            } else r = 0;
            return r < e.length
              ? t
                ? t + this.text(e, r)
                : this.text(e, r)
              : t || "";
          }),
          (i.prototype.end = function (e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t;
          }),
          (i.prototype.text = function (e, t) {
            var r = (function (e, t, r) {
              var n = t.length - 1;
              if (n < r) return 0;
              var o = s(t[n]);
              return o >= 0
                ? (o > 0 && (e.lastNeed = o - 1), o)
                : --n < r || -2 === o
                ? 0
                : (o = s(t[n])) >= 0
                ? (o > 0 && (e.lastNeed = o - 2), o)
                : --n < r || -2 === o
                ? 0
                : (o = s(t[n])) >= 0
                ? (o > 0 && (2 === o ? (o = 0) : (e.lastNeed = o - 3)), o)
                : 0;
            })(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
          }),
          (i.prototype.fillLast = function (e) {
            if (this.lastNeed <= e.length)
              return (
                e.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
              (this.lastNeed -= e.length);
          });
      },
      496: (e, t, r) => {
        var n = r(4300),
          o = n.Buffer;
        function i(e, t) {
          for (var r in e) t[r] = e[r];
        }
        function s(e, t, r) {
          return o(e, t, r);
        }
        o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
          ? (e.exports = n)
          : (i(n, t), (t.Buffer = s)),
          (s.prototype = Object.create(o.prototype)),
          i(o, s),
          (s.from = function (e, t, r) {
            if ("number" == typeof e)
              throw new TypeError("Argument must not be a number");
            return o(e, t, r);
          }),
          (s.alloc = function (e, t, r) {
            if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
            var n = o(e);
            return (
              void 0 !== t
                ? "string" == typeof r
                  ? n.fill(t, r)
                  : n.fill(t)
                : n.fill(0),
              n
            );
          }),
          (s.allocUnsafe = function (e) {
            if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
            return o(e);
          }),
          (s.allocUnsafeSlow = function (e) {
            if ("number" != typeof e)
              throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e);
          });
      },
      6097: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = "string" == typeof e ? "\n" : "\n".charCodeAt(),
            r = "string" == typeof e ? "\r" : "\r".charCodeAt();
          return (
            e[e.length - 1] === t && (e = e.slice(0, e.length - 1)),
            e[e.length - 1] === r && (e = e.slice(0, e.length - 1)),
            e
          );
        };
      },
      3812: (e, t) => {
        "use strict";
        (t.levels = {
          error: 0,
          warn: 1,
          help: 2,
          data: 3,
          info: 4,
          debug: 5,
          prompt: 6,
          verbose: 7,
          input: 8,
          silly: 9,
        }),
          (t.colors = {
            error: "red",
            warn: "yellow",
            help: "cyan",
            data: "grey",
            info: "green",
            debug: "blue",
            prompt: "grey",
            verbose: "cyan",
            input: "grey",
            silly: "magenta",
          });
      },
      2343: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "cli", { value: r(3812) }),
          Object.defineProperty(t, "npm", { value: r(5609) }),
          Object.defineProperty(t, "syslog", { value: r(330) });
      },
      5609: (e, t) => {
        "use strict";
        (t.levels = {
          error: 0,
          warn: 1,
          info: 2,
          http: 3,
          verbose: 4,
          debug: 5,
          silly: 6,
        }),
          (t.colors = {
            error: "red",
            warn: "yellow",
            info: "green",
            http: "green",
            verbose: "cyan",
            debug: "blue",
            silly: "magenta",
          });
      },
      330: (e, t) => {
        "use strict";
        (t.levels = {
          emerg: 0,
          alert: 1,
          crit: 2,
          error: 3,
          warning: 4,
          notice: 5,
          info: 6,
          debug: 7,
        }),
          (t.colors = {
            emerg: "red",
            alert: "yellow",
            crit: "red",
            error: "red",
            warning: "red",
            notice: "yellow",
            info: "green",
            debug: "blue",
          });
      },
      7286: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "LEVEL", { value: Symbol.for("level") }),
          Object.defineProperty(t, "MESSAGE", { value: Symbol.for("message") }),
          Object.defineProperty(t, "SPLAT", { value: Symbol.for("splat") }),
          Object.defineProperty(t, "configs", { value: r(2343) });
      },
      4515: (e, t, r) => {
        "use strict";
        const n = r(2037),
          o = r(8734),
          i = r(2878),
          s = () => {
            const { env: e } = process;
            return (
              e.SUDO_USER ||
              e.C9_USER ||
              e.LOGNAME ||
              e.USER ||
              e.LNAME ||
              e.USERNAME
            );
          },
          a = () => {
            try {
              return n.userInfo().username;
            } catch (e) {}
          },
          l = (e) => e.replace(/^.*\\/, "");
        (e.exports = i(async () => {
          const e = s();
          if (e) return e;
          const t = a();
          if (t) return t;
          try {
            return l(await o.stdout("whoami"));
          } catch (e) {}
        })),
          (e.exports.sync = i(() => {
            const e = s();
            if (e) return e;
            const t = a();
            if (t) return t;
            try {
              return l(o.sync("whoami").stdout);
            } catch (e) {}
          }));
      },
      5902: (e, t, r) => {
        e.exports = r(3837).deprecate;
      },
      1875: (e) => {
        for (var t = [], r = 0; r < 256; ++r)
          t[r] = (r + 256).toString(16).substr(1);
        e.exports = function (e, r) {
          var n = r || 0,
            o = t;
          return (
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]] +
            "-" +
            o[e[n++]] +
            o[e[n++]] +
            "-" +
            o[e[n++]] +
            o[e[n++]] +
            "-" +
            o[e[n++]] +
            o[e[n++]] +
            "-" +
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]] +
            o[e[n++]]
          );
        };
      },
      1479: (e, t, r) => {
        var n = r(6113).randomBytes;
        e.exports = function () {
          return n(16);
        };
      },
      4790: (e, t, r) => {
        var n = r(1479),
          o = r(1875);
        e.exports = function (e, t, r) {
          var i = (t && r) || 0;
          "string" == typeof e &&
            ((t = "binary" == e ? new Array(16) : null), (e = null));
          var s = (e = e || {}).random || (e.rng || n)();
          if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
            for (var a = 0; a < 16; ++a) t[i + a] = s[a];
          return t || o(s);
        };
      },
      9891: (e, t, r) => {
        (e.exports = a),
          (a.sync = function (e, t) {
            for (
              var r = s(e, (t = t || {})),
                a = r.env,
                l = r.ext,
                c = r.extExe,
                u = [],
                d = 0,
                f = a.length;
              d < f;
              d++
            ) {
              var h = a[d];
              '"' === h.charAt(0) &&
                '"' === h.slice(-1) &&
                (h = h.slice(1, -1));
              var p = n.join(h, e);
              !h && /^\.[\\\/]/.test(e) && (p = e.slice(0, 2) + p);
              for (var m = 0, g = l.length; m < g; m++) {
                var v = p + l[m];
                try {
                  if (o.sync(v, { pathExt: c })) {
                    if (!t.all) return v;
                    u.push(v);
                  }
                } catch (e) {}
              }
            }
            if (t.all && u.length) return u;
            if (t.nothrow) return null;
            throw i(e);
          });
        var n = r(1017),
          o = r(557);
        function i(e) {
          var t = new Error("not found: " + e);
          return (t.code = "ENOENT"), t;
        }
        function s(e, t) {
          var r = t.colon || ";",
            n = t.path || process.env.PATH || "",
            o = [""],
            i = "";
          return (
            (n = n.split(r)).unshift(process.cwd()),
            (o = (i =
              t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM").split(
              r
            )),
            -1 !== e.indexOf(".") && "" !== o[0] && o.unshift(""),
            (e.match(/\//) || e.match(/\\/)) && (n = [""]),
            { env: n, ext: o, extExe: i }
          );
        }
        function a(e, t, r) {
          "function" == typeof t && ((r = t), (t = {}));
          var a = s(e, t),
            l = a.env,
            c = a.ext,
            u = a.extExe,
            d = [];
          !(function s(a, f) {
            if (a === f) return t.all && d.length ? r(null, d) : r(i(e));
            var h = l[a];
            '"' === h.charAt(0) && '"' === h.slice(-1) && (h = h.slice(1, -1));
            var p = n.join(h, e);
            !h && /^\.[\\\/]/.test(e) && (p = e.slice(0, 2) + p),
              (function e(n, i) {
                if (n === i) return s(a + 1, f);
                var l = c[n];
                o(p + l, { pathExt: u }, function (o, s) {
                  if (!o && s) {
                    if (!t.all) return r(null, p + l);
                    d.push(p + l);
                  }
                  return e(n + 1, i);
                });
              })(0, c.length);
          })(0, l.length);
        }
      },
      5496: (e, t, r) => {
        "use strict";
        const n = r(3837),
          o = r(1739),
          { LEVEL: i } = r(7286),
          s = (e.exports = function (e = {}) {
            o.call(this, { objectMode: !0, highWaterMark: e.highWaterMark }),
              (this.format = e.format),
              (this.level = e.level),
              (this.handleExceptions = e.handleExceptions),
              (this.handleRejections = e.handleRejections),
              (this.silent = e.silent),
              e.log && (this.log = e.log),
              e.logv && (this.logv = e.logv),
              e.close && (this.close = e.close),
              this.once("pipe", (e) => {
                (this.levels = e.levels), (this.parent = e);
              }),
              this.once("unpipe", (e) => {
                e === this.parent &&
                  ((this.parent = null), this.close && this.close());
              });
          });
        n.inherits(s, o),
          (s.prototype._write = function (e, t, r) {
            if (this.silent || (!0 === e.exception && !this.handleExceptions))
              return r(null);
            const n = this.level || (this.parent && this.parent.level);
            if (!n || this.levels[n] >= this.levels[e[i]]) {
              if (e && !this.format) return this.log(e, r);
              let t, n;
              try {
                n = this.format.transform(
                  Object.assign({}, e),
                  this.format.options
                );
              } catch (e) {
                t = e;
              }
              if (t || !n) {
                if ((r(), t)) throw t;
                return;
              }
              return this.log(n, r);
            }
            return (this._writableState.sync = !1), r(null);
          }),
          (s.prototype._writev = function (e, t) {
            if (this.logv) {
              const r = e.filter(this._accept, this);
              return r.length ? this.logv(r, t) : t(null);
            }
            for (let r = 0; r < e.length; r++) {
              if (!this._accept(e[r])) continue;
              if (e[r].chunk && !this.format) {
                this.log(e[r].chunk, e[r].callback);
                continue;
              }
              let n, o;
              try {
                o = this.format.transform(
                  Object.assign({}, e[r].chunk),
                  this.format.options
                );
              } catch (e) {
                n = e;
              }
              if (n || !o) {
                if ((e[r].callback(), n)) throw (t(null), n);
              } else this.log(o, e[r].callback);
            }
            return t(null);
          }),
          (s.prototype._accept = function (e) {
            const t = e.chunk;
            if (this.silent) return !1;
            const r = this.level || (this.parent && this.parent.level);
            return !(
              (!0 !== t.exception &&
                r &&
                !(this.levels[r] >= this.levels[t[i]])) ||
              (!this.handleExceptions && !0 === t.exception)
            );
          }),
          (s.prototype._nop = function () {}),
          (e.exports.LegacyTransportStream = r(6420));
      },
      6420: (e, t, r) => {
        "use strict";
        const n = r(3837),
          { LEVEL: o } = r(7286),
          i = r(5496),
          s = (e.exports = function (e = {}) {
            if (
              (i.call(this, e),
              !e.transport || "function" != typeof e.transport.log)
            )
              throw new Error(
                "Invalid transport, must be an object with a log method."
              );
            (this.transport = e.transport),
              (this.level = this.level || e.transport.level),
              (this.handleExceptions =
                this.handleExceptions || e.transport.handleExceptions),
              this._deprecated(),
              this.transport.__winstonError ||
                ((this.transport.__winstonError = function (e) {
                  this.emit("error", e, this.transport);
                }.bind(this)),
                this.transport.on("error", this.transport.__winstonError));
          });
        n.inherits(s, i),
          (s.prototype._write = function (e, t, r) {
            if (this.silent || (!0 === e.exception && !this.handleExceptions))
              return r(null);
            (!this.level || this.levels[this.level] >= this.levels[e[o]]) &&
              this.transport.log(e[o], e.message, e, this._nop),
              r(null);
          }),
          (s.prototype._writev = function (e, t) {
            for (let t = 0; t < e.length; t++)
              this._accept(e[t]) &&
                (this.transport.log(
                  e[t].chunk[o],
                  e[t].chunk.message,
                  e[t].chunk,
                  this._nop
                ),
                e[t].callback());
            return t(null);
          }),
          (s.prototype._deprecated = function () {
            console.error(
              [
                `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
                "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md",
              ].join("\n")
            );
          }),
          (s.prototype.close = function () {
            this.transport.close && this.transport.close(),
              this.transport.__winstonError &&
                (this.transport.removeListener(
                  "error",
                  this.transport.__winstonError
                ),
                (this.transport.__winstonError = null));
          });
      },
      5067: (e, t, r) => {
        "use strict";
        const n = r(3252),
          { warn: o } = r(3325);
        (t.version = r(9770).version),
          (t.transports = r(3830)),
          (t.config = r(8659)),
          (t.addColors = n.levels),
          (t.format = n.format),
          (t.createLogger = r(8677)),
          (t.ExceptionHandler = r(2807)),
          (t.RejectionHandler = r(7490)),
          (t.Container = r(6473)),
          (t.Transport = r(5496)),
          (t.loggers = new t.Container());
        const i = t.createLogger();
        Object.keys(t.config.npm.levels)
          .concat([
            "log",
            "query",
            "stream",
            "add",
            "remove",
            "clear",
            "profile",
            "startTimer",
            "handleExceptions",
            "unhandleExceptions",
            "handleRejections",
            "unhandleRejections",
            "configure",
            "child",
          ])
          .forEach((e) => (t[e] = (...t) => i[e](...t))),
          Object.defineProperty(t, "level", {
            get: () => i.level,
            set(e) {
              i.level = e;
            },
          }),
          Object.defineProperty(t, "exceptions", { get: () => i.exceptions }),
          ["exitOnError"].forEach((e) => {
            Object.defineProperty(t, e, {
              get: () => i[e],
              set(t) {
                i[e] = t;
              },
            });
          }),
          Object.defineProperty(t, "default", {
            get: () => ({
              exceptionHandlers: i.exceptionHandlers,
              rejectionHandlers: i.rejectionHandlers,
              transports: i.transports,
            }),
          }),
          o.deprecated(t, "setLevels"),
          o.forFunctions(t, "useFormat", ["cli"]),
          o.forProperties(t, "useFormat", ["padLevels", "stripColors"]),
          o.forFunctions(t, "deprecated", [
            "addRewriter",
            "addFilter",
            "clone",
            "extend",
          ]),
          o.forProperties(t, "deprecated", ["emitErrs", "levelLength"]),
          o.moved(t, "createLogger", "Logger");
      },
      3325: (e, t, r) => {
        "use strict";
        const { format: n } = r(3837);
        t.warn = {
          deprecated: (e) => () => {
            throw new Error(n("{ %s } was removed in winston@3.0.0.", e));
          },
          useFormat: (e) => () => {
            throw new Error(
              [
                n("{ %s } was removed in winston@3.0.0.", e),
                "Use a custom winston.format = winston.format(function) instead.",
              ].join("\n")
            );
          },
          forFunctions(e, r, n) {
            n.forEach((n) => {
              e[n] = t.warn[r](n);
            });
          },
          moved(e, t, r) {
            function o() {
              return () => {
                throw new Error(
                  [
                    n("winston.%s was moved in winston@3.0.0.", r),
                    n("Use a winston.%s instead.", t),
                  ].join("\n")
                );
              };
            }
            Object.defineProperty(e, r, { get: o, set: o });
          },
          forProperties(e, r, n) {
            n.forEach((n) => {
              const o = t.warn[r](n);
              Object.defineProperty(e, n, { get: o, set: o });
            });
          },
        };
      },
      8659: (e, t, r) => {
        "use strict";
        const n = r(3252),
          { configs: o } = r(7286);
        (t.cli = n.levels(o.cli)),
          (t.npm = n.levels(o.npm)),
          (t.syslog = n.levels(o.syslog)),
          (t.addColors = n.levels);
      },
      6473: (e, t, r) => {
        "use strict";
        const n = r(8677);
        e.exports = class {
          constructor(e = {}) {
            (this.loggers = new Map()), (this.options = e);
          }
          add(e, t) {
            if (!this.loggers.has(e)) {
              const r =
                (t = Object.assign({}, t || this.options)).transports ||
                this.options.transports;
              t.transports = r ? r.slice() : [];
              const o = n(t);
              o.on("close", () => this._delete(e)), this.loggers.set(e, o);
            }
            return this.loggers.get(e);
          }
          get(e, t) {
            return this.add(e, t);
          }
          has(e) {
            return !!this.loggers.has(e);
          }
          close(e) {
            if (e) return this._removeLogger(e);
            this.loggers.forEach((e, t) => this._removeLogger(t));
          }
          _removeLogger(e) {
            this.loggers.has(e) &&
              (this.loggers.get(e).close(), this._delete(e));
          }
          _delete(e) {
            this.loggers.delete(e);
          }
        };
      },
      8677: (e, t, r) => {
        "use strict";
        const { LEVEL: n } = r(7286),
          o = r(8659),
          i = r(8438),
          s = r(9256)("winston:create-logger");
        e.exports = function (e = {}) {
          e.levels = e.levels || o.npm.levels;
          class t extends i {
            constructor(e) {
              super(e);
            }
          }
          const r = new t(e);
          return (
            Object.keys(e.levels).forEach(function (e) {
              s('Define prototype method for "%s"', e),
                "log" !== e
                  ? ((t.prototype[e] = function (...t) {
                      const o = this || r;
                      if (1 === t.length) {
                        const [i] = t,
                          s = (i && i.message && i) || { message: i };
                        return (
                          (s.level = s[n] = e),
                          o._addDefaultMeta(s),
                          o.write(s),
                          this || r
                        );
                      }
                      return 0 === t.length
                        ? (o.log(e, ""), o)
                        : o.log(e, ...t);
                    }),
                    (t.prototype[
                      (function (e) {
                        return (
                          "is" +
                          e.charAt(0).toUpperCase() +
                          e.slice(1) +
                          "Enabled"
                        );
                      })(e)
                    ] = function () {
                      return (this || r).isLevelEnabled(e);
                    }))
                  : console.warn(
                      'Level "log" not defined: conflicts with the method "log". Use a different level name.'
                    );
            }),
            r
          );
        };
      },
      2807: (e, t, r) => {
        "use strict";
        const n = r(2037),
          o = r(9508),
          i = r(9256)("winston:exception"),
          s = r(7004),
          a = r(9037),
          l = r(6573);
        e.exports = class {
          constructor(e) {
            if (!e) throw new Error("Logger is required to handle exceptions");
            (this.logger = e), (this.handlers = new Map());
          }
          handle(...e) {
            e.forEach((e) => {
              if (Array.isArray(e))
                return e.forEach((e) => this._addHandler(e));
              this._addHandler(e);
            }),
              this.catcher ||
                ((this.catcher = this._uncaughtException.bind(this)),
                process.on("uncaughtException", this.catcher));
          }
          unhandle() {
            this.catcher &&
              (process.removeListener("uncaughtException", this.catcher),
              (this.catcher = !1),
              Array.from(this.handlers.values()).forEach((e) =>
                this.logger.unpipe(e)
              ));
          }
          getAllInfo(e) {
            let { message: t } = e;
            return (
              t || "string" != typeof e || (t = e),
              {
                error: e,
                level: "error",
                message: [
                  `uncaughtException: ${t || "(no error message)"}`,
                  e.stack || "  No stack trace",
                ].join("\n"),
                stack: e.stack,
                exception: !0,
                date: new Date().toString(),
                process: this.getProcessInfo(),
                os: this.getOsInfo(),
                trace: this.getTrace(e),
              }
            );
          }
          getProcessInfo() {
            return {
              pid: process.pid,
              uid: process.getuid ? process.getuid() : null,
              gid: process.getgid ? process.getgid() : null,
              cwd: process.cwd(),
              execPath: process.execPath,
              version: process.version,
              argv: process.argv,
              memoryUsage: process.memoryUsage(),
            };
          }
          getOsInfo() {
            return { loadavg: n.loadavg(), uptime: n.uptime() };
          }
          getTrace(e) {
            return (e ? a.parse(e) : a.get()).map((e) => ({
              column: e.getColumnNumber(),
              file: e.getFileName(),
              function: e.getFunctionName(),
              line: e.getLineNumber(),
              method: e.getMethodName(),
              native: e.isNative(),
            }));
          }
          _addHandler(e) {
            if (!this.handlers.has(e)) {
              e.handleExceptions = !0;
              const t = new l(e);
              this.handlers.set(e, t), this.logger.pipe(t);
            }
          }
          _uncaughtException(e) {
            const t = this.getAllInfo(e),
              r = this._getExceptionHandlers();
            let n,
              a =
                "function" == typeof this.logger.exitOnError
                  ? this.logger.exitOnError(e)
                  : this.logger.exitOnError;
            function l() {
              i("doExit", a),
                i("process._exiting", process._exiting),
                a &&
                  !process._exiting &&
                  (n && clearTimeout(n), process.exit(1));
            }
            if (
              (!r.length &&
                a &&
                (console.warn(
                  "winston: exitOnError cannot be true with no exception handlers."
                ),
                console.warn("winston: not exiting process."),
                (a = !1)),
              !r || 0 === r.length)
            )
              return process.nextTick(l);
            o(
              r,
              (e, t) => {
                const r = s(t),
                  n = e.transport || e;
                function o(e) {
                  return () => {
                    i(e), r();
                  };
                }
                (n._ending = !0),
                  n.once("finish", o("finished")),
                  n.once("error", o("error"));
              },
              () => a && l()
            ),
              this.logger.log(t),
              a && (n = setTimeout(l, 3e3));
          }
          _getExceptionHandlers() {
            return this.logger.transports.filter(
              (e) => (e.transport || e).handleExceptions
            );
          }
        };
      },
      6573: (e, t, r) => {
        "use strict";
        const { Writable: n } = r(6207);
        e.exports = class extends n {
          constructor(e) {
            if ((super({ objectMode: !0 }), !e))
              throw new Error(
                "ExceptionStream requires a TransportStream instance."
              );
            (this.handleExceptions = !0), (this.transport = e);
          }
          _write(e, t, r) {
            return e.exception ? this.transport.log(e, r) : (r(), !0);
          }
        };
      },
      8438: (e, t, r) => {
        "use strict";
        const { Stream: n, Transform: o } = r(6207),
          i = r(9508),
          { LEVEL: s, SPLAT: a } = r(7286),
          l = r(818),
          c = r(2807),
          u = r(7490),
          d = r(6420),
          f = r(8335),
          { warn: h } = r(3325),
          p = r(8659),
          m = /%[scdjifoO%]/g;
        class g extends o {
          constructor(e) {
            super({ objectMode: !0 }), this.configure(e);
          }
          child(e) {
            const t = this;
            return Object.create(t, {
              write: {
                value: function (r) {
                  const n = Object.assign({}, e, r);
                  r instanceof Error &&
                    ((n.stack = r.stack), (n.message = r.message)),
                    t.write(n);
                },
              },
            });
          }
          configure({
            silent: e,
            format: t,
            defaultMeta: n,
            levels: o,
            level: i = "info",
            exitOnError: s = !0,
            transports: a,
            colors: l,
            emitErrs: d,
            formatters: f,
            padLevels: h,
            rewriters: m,
            stripColors: g,
            exceptionHandlers: v,
            rejectionHandlers: y,
          } = {}) {
            if (
              (this.transports.length && this.clear(),
              (this.silent = e),
              (this.format = t || this.format || r(5242)()),
              (this.defaultMeta = n || null),
              (this.levels = o || this.levels || p.npm.levels),
              (this.level = i),
              this.exceptions && this.exceptions.unhandle(),
              this.rejections && this.rejections.unhandle(),
              (this.exceptions = new c(this)),
              (this.rejections = new u(this)),
              (this.profilers = {}),
              (this.exitOnError = s),
              a && (a = Array.isArray(a) ? a : [a]).forEach((e) => this.add(e)),
              l || d || f || h || m || g)
            )
              throw new Error(
                [
                  "{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.",
                  "Use a custom winston.format(function) instead.",
                  "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md",
                ].join("\n")
              );
            v && this.exceptions.handle(v), y && this.rejections.handle(y);
          }
          isLevelEnabled(e) {
            const t = v(this.levels, e);
            if (null === t) return !1;
            const r = v(this.levels, this.level);
            return (
              null !== r &&
              (this.transports && 0 !== this.transports.length
                ? -1 !==
                  this.transports.findIndex((e) => {
                    let n = v(this.levels, e.level);
                    return null === n && (n = r), n >= t;
                  })
                : r >= t)
            );
          }
          log(e, t, ...r) {
            if (1 === arguments.length)
              return (
                (e[s] = e.level), this._addDefaultMeta(e), this.write(e), this
              );
            if (2 === arguments.length)
              return t && "object" == typeof t
                ? ((t[s] = t.level = e),
                  this._addDefaultMeta(t),
                  this.write(t),
                  this)
                : ((t = { [s]: e, level: e, message: t }),
                  this._addDefaultMeta(t),
                  this.write(t),
                  this);
            const [n] = r;
            if (
              "object" == typeof n &&
              null !== n &&
              !(t && t.match && t.match(m))
            ) {
              const o = Object.assign({}, this.defaultMeta, n, {
                [s]: e,
                [a]: r,
                level: e,
                message: t,
              });
              return (
                n.message && (o.message = `${o.message} ${n.message}`),
                n.stack && (o.stack = n.stack),
                this.write(o),
                this
              );
            }
            return (
              this.write(
                Object.assign({}, this.defaultMeta, {
                  [s]: e,
                  [a]: r,
                  level: e,
                  message: t,
                })
              ),
              this
            );
          }
          _transform(e, t, r) {
            if (this.silent) return r();
            e[s] || (e[s] = e.level),
              this.levels[e[s]] ||
                0 === this.levels[e[s]] ||
                console.error("[winston] Unknown logger level: %s", e[s]),
              this._readableState.pipes ||
                console.error(
                  "[winston] Attempt to write logs with no transports %j",
                  e
                );
            try {
              this.push(this.format.transform(e, this.format.options));
            } finally {
              (this._writableState.sync = !1), r();
            }
          }
          _final(e) {
            const t = this.transports.slice();
            i(
              t,
              (e, t) => {
                if (!e || e.finished) return setImmediate(t);
                e.once("finish", t), e.end();
              },
              e
            );
          }
          add(e) {
            const t = !l(e) || e.log.length > 2 ? new d({ transport: e }) : e;
            if (!t._writableState || !t._writableState.objectMode)
              throw new Error(
                "Transports must WritableStreams in objectMode. Set { objectMode: true }."
              );
            return (
              this._onEvent("error", t),
              this._onEvent("warn", t),
              this.pipe(t),
              e.handleExceptions && this.exceptions.handle(),
              e.handleRejections && this.rejections.handle(),
              this
            );
          }
          remove(e) {
            if (!e) return this;
            let t = e;
            return (
              (!l(e) || e.log.length > 2) &&
                (t = this.transports.filter((t) => t.transport === e)[0]),
              t && this.unpipe(t),
              this
            );
          }
          clear() {
            return this.unpipe(), this;
          }
          close() {
            return (
              this.exceptions.unhandle(),
              this.rejections.unhandle(),
              this.clear(),
              this.emit("close"),
              this
            );
          }
          setLevels() {
            h.deprecated("setLevels");
          }
          query(e, t) {
            "function" == typeof e && ((t = e), (e = {})), (e = e || {});
            const r = {},
              n = Object.assign({}, e.query || {});
            i(
              this.transports.filter((e) => !!e.query),
              function (t, o) {
                !(function (t, r) {
                  e.query &&
                    "function" == typeof t.formatQuery &&
                    (e.query = t.formatQuery(n)),
                    t.query(e, (n, o) => {
                      if (n) return r(n);
                      "function" == typeof t.formatResults &&
                        (o = t.formatResults(o, e.format)),
                        r(null, o);
                    });
                })(t, (e, n) => {
                  o && ((n = e || n) && (r[t.name] = n), o()), (o = null);
                });
              },
              () => t(null, r)
            );
          }
          stream(e = {}) {
            const t = new n(),
              r = [];
            return (
              (t._streams = r),
              (t.destroy = () => {
                let e = r.length;
                for (; e--; ) r[e].destroy();
              }),
              this.transports
                .filter((e) => !!e.stream)
                .forEach((n) => {
                  const o = n.stream(e);
                  o &&
                    (r.push(o),
                    o.on("log", (e) => {
                      (e.transport = e.transport || []),
                        e.transport.push(n.name),
                        t.emit("log", e);
                    }),
                    o.on("error", (e) => {
                      (e.transport = e.transport || []),
                        e.transport.push(n.name),
                        t.emit("error", e);
                    }));
                }),
              t
            );
          }
          startTimer() {
            return new f(this);
          }
          profile(e, ...t) {
            const r = Date.now();
            if (this.profilers[e]) {
              const n = this.profilers[e];
              delete this.profilers[e],
                "function" == typeof t[t.length - 2] &&
                  (console.warn(
                    "Callback function no longer supported as of winston@3.0.0"
                  ),
                  t.pop());
              const o = "object" == typeof t[t.length - 1] ? t.pop() : {};
              return (
                (o.level = o.level || "info"),
                (o.durationMs = r - n),
                (o.message = o.message || e),
                this.write(o)
              );
            }
            return (this.profilers[e] = r), this;
          }
          handleExceptions(...e) {
            console.warn(
              "Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()"
            ),
              this.exceptions.handle(...e);
          }
          unhandleExceptions(...e) {
            console.warn(
              "Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()"
            ),
              this.exceptions.unhandle(...e);
          }
          cli() {
            throw new Error(
              [
                "Logger.cli() was removed in winston@3.0.0",
                "Use a custom winston.formats.cli() instead.",
                "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md",
              ].join("\n")
            );
          }
          _onEvent(e, t) {
            t["__winston" + e] ||
              ((t["__winston" + e] = function (r) {
                "error" !== e || this.transports.includes(t) || this.add(t),
                  this.emit(e, r, t);
              }.bind(this)),
              t.on(e, t["__winston" + e]));
          }
          _addDefaultMeta(e) {
            this.defaultMeta && Object.assign(e, this.defaultMeta);
          }
        }
        function v(e, t) {
          const r = e[t];
          return r || 0 === r ? r : null;
        }
        Object.defineProperty(g.prototype, "transports", {
          configurable: !1,
          enumerable: !0,
          get() {
            const { pipes: e } = this._readableState;
            return Array.isArray(e) ? e : [e].filter(Boolean);
          },
        }),
          (e.exports = g);
      },
      8335: (e) => {
        "use strict";
        e.exports = class {
          constructor(e) {
            if (!e) throw new Error("Logger is required for profiling.");
            (this.logger = e), (this.start = Date.now());
          }
          done(...e) {
            "function" == typeof e[e.length - 1] &&
              (console.warn(
                "Callback function no longer supported as of winston@3.0.0"
              ),
              e.pop());
            const t = "object" == typeof e[e.length - 1] ? e.pop() : {};
            return (
              (t.level = t.level || "info"),
              (t.durationMs = Date.now() - this.start),
              this.logger.write(t)
            );
          }
        };
      },
      7490: (e, t, r) => {
        "use strict";
        const n = r(2037),
          o = r(9508),
          i = r(9256)("winston:rejection"),
          s = r(7004),
          a = r(9037),
          l = r(6573);
        e.exports = class {
          constructor(e) {
            if (!e) throw new Error("Logger is required to handle rejections");
            (this.logger = e), (this.handlers = new Map());
          }
          handle(...e) {
            e.forEach((e) => {
              if (Array.isArray(e))
                return e.forEach((e) => this._addHandler(e));
              this._addHandler(e);
            }),
              this.catcher ||
                ((this.catcher = this._unhandledRejection.bind(this)),
                process.on("unhandledRejection", this.catcher));
          }
          unhandle() {
            this.catcher &&
              (process.removeListener("unhandledRejection", this.catcher),
              (this.catcher = !1),
              Array.from(this.handlers.values()).forEach((e) =>
                this.logger.unpipe(e)
              ));
          }
          getAllInfo(e) {
            let t = null;
            return (
              e && (t = "string" == typeof e ? e : e.message),
              {
                error: e,
                level: "error",
                message: [
                  `unhandledRejection: ${t || "(no error message)"}`,
                  (e && e.stack) || "  No stack trace",
                ].join("\n"),
                stack: e && e.stack,
                exception: !0,
                date: new Date().toString(),
                process: this.getProcessInfo(),
                os: this.getOsInfo(),
                trace: this.getTrace(e),
              }
            );
          }
          getProcessInfo() {
            return {
              pid: process.pid,
              uid: process.getuid ? process.getuid() : null,
              gid: process.getgid ? process.getgid() : null,
              cwd: process.cwd(),
              execPath: process.execPath,
              version: process.version,
              argv: process.argv,
              memoryUsage: process.memoryUsage(),
            };
          }
          getOsInfo() {
            return { loadavg: n.loadavg(), uptime: n.uptime() };
          }
          getTrace(e) {
            return (e ? a.parse(e) : a.get()).map((e) => ({
              column: e.getColumnNumber(),
              file: e.getFileName(),
              function: e.getFunctionName(),
              line: e.getLineNumber(),
              method: e.getMethodName(),
              native: e.isNative(),
            }));
          }
          _addHandler(e) {
            if (!this.handlers.has(e)) {
              e.handleRejections = !0;
              const t = new l(e);
              this.handlers.set(e, t), this.logger.pipe(t);
            }
          }
          _unhandledRejection(e) {
            const t = this.getAllInfo(e),
              r = this._getRejectionHandlers();
            let n,
              a =
                "function" == typeof this.logger.exitOnError
                  ? this.logger.exitOnError(e)
                  : this.logger.exitOnError;
            function l() {
              i("doExit", a),
                i("process._exiting", process._exiting),
                a &&
                  !process._exiting &&
                  (n && clearTimeout(n), process.exit(1));
            }
            if (
              (!r.length &&
                a &&
                (console.warn(
                  "winston: exitOnError cannot be true with no rejection handlers."
                ),
                console.warn("winston: not exiting process."),
                (a = !1)),
              !r || 0 === r.length)
            )
              return process.nextTick(l);
            o(
              r,
              (e, t) => {
                const r = s(t),
                  n = e.transport || e;
                function o(e) {
                  return () => {
                    i(e), r();
                  };
                }
                (n._ending = !0),
                  n.once("finish", o("finished")),
                  n.once("error", o("error"));
              },
              () => a && l()
            ),
              this.logger.log(t),
              a && (n = setTimeout(l, 3e3));
          }
          _getRejectionHandlers() {
            return this.logger.transports.filter(
              (e) => (e.transport || e).handleRejections
            );
          }
        };
      },
      2996: (e, t, r) => {
        "use strict";
        const n = r(7147),
          { StringDecoder: o } = r(1576),
          { Stream: i } = r(6207);
        function s() {}
        e.exports = (e, t) => {
          const r = Buffer.alloc(65536),
            a = new o("utf8"),
            l = new i();
          let c = "",
            u = 0,
            d = 0;
          return (
            -1 === e.start && delete e.start,
            (l.readable = !0),
            (l.destroy = () => {
              (l.destroyed = !0), l.emit("end"), l.emit("close");
            }),
            n.open(e.file, "a+", "0644", (o, i) => {
              if (o) return t ? t(o) : l.emit("error", o), void l.destroy();
              !(function o() {
                if (!l.destroyed)
                  return n.read(i, r, 0, r.length, u, (n, i) => {
                    if (n)
                      return t ? t(n) : l.emit("error", n), void l.destroy();
                    if (!i)
                      return (
                        c &&
                          ((null == e.start || d > e.start) &&
                            (t ? t(null, c) : l.emit("line", c)),
                          d++,
                          (c = "")),
                        setTimeout(o, 1e3)
                      );
                    let s = a.write(r.slice(0, i));
                    t || l.emit("data", s), (s = (c + s).split(/\n+/));
                    const f = s.length - 1;
                    let h = 0;
                    for (; h < f; h++)
                      (null == e.start || d > e.start) &&
                        (t ? t(null, s[h]) : l.emit("line", s[h])),
                        d++;
                    return (c = s[f]), (u += i), o();
                  });
                n.close(i, s);
              })();
            }),
            t ? l.destroy : l
          );
        };
      },
      7953: (e, t, r) => {
        "use strict";
        const n = r(2037),
          { LEVEL: o, MESSAGE: i } = r(7286),
          s = r(5496);
        e.exports = class extends s {
          constructor(e = {}) {
            super(e),
              (this.name = e.name || "console"),
              (this.stderrLevels = this._stringArrayToSet(e.stderrLevels)),
              (this.consoleWarnLevels = this._stringArrayToSet(
                e.consoleWarnLevels
              )),
              (this.eol = "string" == typeof e.eol ? e.eol : n.EOL),
              this.setMaxListeners(30);
          }
          log(e, t) {
            return (
              setImmediate(() => this.emit("logged", e)),
              this.stderrLevels[e[o]]
                ? (console._stderr
                    ? console._stderr.write(`${e[i]}${this.eol}`)
                    : console.error(e[i]),
                  void (t && t()))
                : this.consoleWarnLevels[e[o]]
                ? (console._stderr
                    ? console._stderr.write(`${e[i]}${this.eol}`)
                    : console.warn(e[i]),
                  void (t && t()))
                : (console._stdout
                    ? console._stdout.write(`${e[i]}${this.eol}`)
                    : console.log(e[i]),
                  void (t && t()))
            );
          }
          _stringArrayToSet(e, t) {
            if (!e) return {};
            if (
              ((t =
                t ||
                "Cannot make set from type other than Array of string elements"),
              !Array.isArray(e))
            )
              throw new Error(t);
            return e.reduce((e, r) => {
              if ("string" != typeof r) throw new Error(t);
              return (e[r] = !0), e;
            }, {});
          }
        };
      },
      6832: (e, t, r) => {
        "use strict";
        const n = r(7147),
          o = r(1017),
          i = r(8370),
          s = r(9796),
          { MESSAGE: a } = r(7286),
          { Stream: l, PassThrough: c } = r(6207),
          u = r(5496),
          d = r(9256)("winston:file"),
          f = r(2037),
          h = r(2996);
        e.exports = class extends u {
          constructor(e = {}) {
            function t(t, ...r) {
              r.slice(1).forEach((r) => {
                if (e[r]) throw new Error(`Cannot set ${r} and ${t} together`);
              });
            }
            if (
              (super(e),
              (this.name = e.name || "file"),
              (this._stream = new c()),
              this._stream.setMaxListeners(30),
              (this._onError = this._onError.bind(this)),
              e.filename || e.dirname)
            )
              t("filename or dirname", "stream"),
                (this._basename = this.filename =
                  e.filename ? o.basename(e.filename) : "winston.log"),
                (this.dirname = e.dirname || o.dirname(e.filename)),
                (this.options = e.options || { flags: "a" });
            else {
              if (!e.stream)
                throw new Error(
                  "Cannot log to file without filename or stream."
                );
              console.warn(
                "options.stream will be removed in winston@4. Use winston.transports.Stream"
              ),
                t("stream", "filename", "maxsize"),
                (this._dest = this._stream.pipe(this._setupStream(e.stream))),
                (this.dirname = o.dirname(this._dest.path));
            }
            (this.maxsize = e.maxsize || null),
              (this.rotationFormat = e.rotationFormat || !1),
              (this.zippedArchive = e.zippedArchive || !1),
              (this.maxFiles = e.maxFiles || null),
              (this.eol = "string" == typeof e.eol ? e.eol : f.EOL),
              (this.tailable = e.tailable || !1),
              (this._size = 0),
              (this._pendingSize = 0),
              (this._created = 0),
              (this._drain = !1),
              (this._opening = !1),
              (this._ending = !1),
              this.dirname && this._createLogDirIfNotExist(this.dirname),
              this.open();
          }
          finishIfEnding() {
            this._ending &&
              (this._opening
                ? this.once("open", () => {
                    this._stream.once("finish", () => this.emit("finish")),
                      setImmediate(() => this._stream.end());
                  })
                : (this._stream.once("finish", () => this.emit("finish")),
                  setImmediate(() => this._stream.end())));
          }
          log(e, t = () => {}) {
            if (this.silent) return t(), !0;
            if (this._drain)
              return void this._stream.once("drain", () => {
                (this._drain = !1), this.log(e, t);
              });
            if (this._rotate)
              return void this._stream.once("rotate", () => {
                (this._rotate = !1), this.log(e, t);
              });
            const r = `${e[a]}${this.eol}`,
              n = Buffer.byteLength(r);
            (this._pendingSize += n),
              this._opening &&
                !this.rotatedWhileOpening &&
                this._needsNewFile(this._size + this._pendingSize) &&
                (this.rotatedWhileOpening = !0);
            const o = this._stream.write(
              r,
              function () {
                (this._size += n),
                  (this._pendingSize -= n),
                  d("logged %s %s", this._size, r),
                  this.emit("logged", e),
                  this._opening ||
                    (this._needsNewFile() &&
                      ((this._rotate = !0),
                      this._endStream(() => this._rotateFile())));
              }.bind(this)
            );
            return (
              o
                ? t()
                : ((this._drain = !0),
                  this._stream.once("drain", () => {
                    (this._drain = !1), t();
                  })),
              d("written", o, this._drain),
              this.finishIfEnding(),
              o
            );
          }
          query(e, t) {
            "function" == typeof e && ((t = e), (e = {})),
              (e = (function (e) {
                return (
                  ((e = e || {}).rows = e.rows || e.limit || 10),
                  (e.start = e.start || 0),
                  (e.until = e.until || new Date()),
                  "object" != typeof e.until && (e.until = new Date(e.until)),
                  (e.from = e.from || e.until - 864e5),
                  "object" != typeof e.from && (e.from = new Date(e.from)),
                  (e.order = e.order || "desc"),
                  e
                );
              })(e));
            const r = o.join(this.dirname, this.filename);
            let i = "",
              s = [],
              a = 0;
            const l = n.createReadStream(r, { encoding: "utf8" });
            function c(t, r) {
              try {
                const r = JSON.parse(t);
                (function (t) {
                  if (!t) return;
                  if ("object" != typeof t) return;
                  const r = new Date(t.timestamp);
                  return (
                    !(
                      (e.from && r < e.from) ||
                      (e.until && r > e.until) ||
                      (e.level && e.level !== t.level)
                    ) || void 0
                  );
                })(r) &&
                  (function (t) {
                    e.rows && s.length >= e.rows && "desc" !== e.order
                      ? l.readable && l.destroy()
                      : (e.fields &&
                          (t = e.fields.reduce(
                            (e, r) => ((e[r] = t[r]), e),
                            {}
                          )),
                        "desc" === e.order && s.length >= e.rows && s.shift(),
                        s.push(t));
                  })(r);
              } catch (e) {
                r || l.emit("error", e);
              }
            }
            l.on("error", (e) => {
              if ((l.readable && l.destroy(), t))
                return "ENOENT" !== e.code ? t(e) : t(null, s);
            }),
              l.on("data", (t) => {
                const r = (t = (i + t).split(/\n+/)).length - 1;
                let n = 0;
                for (; n < r; n++) (!e.start || a >= e.start) && c(t[n]), a++;
                i = t[r];
              }),
              l.on("close", () => {
                i && c(i, !0),
                  "desc" === e.order && (s = s.reverse()),
                  t && t(null, s);
              });
          }
          stream(e = {}) {
            const t = o.join(this.dirname, this.filename),
              r = new l(),
              n = { file: t, start: e.start };
            return (
              (r.destroy = h(n, (e, t) => {
                if (e) return r.emit("error", e);
                try {
                  r.emit("data", t), (t = JSON.parse(t)), r.emit("log", t);
                } catch (e) {
                  r.emit("error", e);
                }
              })),
              r
            );
          }
          open() {
            this.filename &&
              (this._opening ||
                ((this._opening = !0),
                this.stat((e, t) => {
                  if (e) return this.emit("error", e);
                  d("stat done: %s { size: %s }", this.filename, t),
                    (this._size = t),
                    (this._dest = this._createStream(this._stream)),
                    (this._opening = !1),
                    this.once("open", () => {
                      this._stream.eventNames().includes("rotate")
                        ? this._stream.emit("rotate")
                        : (this._rotate = !1);
                    });
                })));
          }
          stat(e) {
            const t = this._getFile(),
              r = o.join(this.dirname, t);
            n.stat(r, (n, o) =>
              n && "ENOENT" === n.code
                ? (d("ENOENT ok", r), (this.filename = t), e(null, 0))
                : n
                ? (d(`err ${n.code} ${r}`), e(n))
                : !o || this._needsNewFile(o.size)
                ? this._incFile(() => this.stat(e))
                : ((this.filename = t), void e(null, o.size))
            );
          }
          close(e) {
            this._stream &&
              this._stream.end(() => {
                e && e(), this.emit("flush"), this.emit("closed");
              });
          }
          _needsNewFile(e) {
            return (e = e || this._size), this.maxsize && e >= this.maxsize;
          }
          _onError(e) {
            this.emit("error", e);
          }
          _setupStream(e) {
            return e.on("error", this._onError), e;
          }
          _cleanupStream(e) {
            return e.removeListener("error", this._onError), e;
          }
          _rotateFile() {
            this._incFile(() => this.open());
          }
          _endStream(e = () => {}) {
            this._dest
              ? (this._stream.unpipe(this._dest),
                this._dest.end(() => {
                  this._cleanupStream(this._dest), e();
                }))
              : e();
          }
          _createStream(e) {
            const t = o.join(this.dirname, this.filename);
            d("create stream start", t, this.options);
            const r = n
              .createWriteStream(t, this.options)
              .on("error", (e) => d(e))
              .on("close", () => d("close", r.path, r.bytesWritten))
              .on("open", () => {
                d("file open ok", t),
                  this.emit("open", t),
                  e.pipe(r),
                  this.rotatedWhileOpening &&
                    ((this._stream = new c()),
                    this._stream.setMaxListeners(30),
                    this._rotateFile(),
                    (this.rotatedWhileOpening = !1),
                    this._cleanupStream(r),
                    e.end());
              });
            if ((d("create stream ok", t), this.zippedArchive)) {
              const e = s.createGzip();
              return e.pipe(r), e;
            }
            return r;
          }
          _incFile(e) {
            d("_incFile", this.filename);
            const t = o.extname(this._basename),
              r = o.basename(this._basename, t);
            this.tailable
              ? this._checkMaxFilesTailable(t, r, e)
              : ((this._created += 1),
                this._checkMaxFilesIncrementing(t, r, e));
          }
          _getFile() {
            const e = o.extname(this._basename),
              t = o.basename(this._basename, e),
              r = this.rotationFormat ? this.rotationFormat() : this._created,
              n = !this.tailable && this._created ? `${t}${r}${e}` : `${t}${e}`;
            return this.zippedArchive && !this.tailable ? `${n}.gz` : n;
          }
          _checkMaxFilesIncrementing(e, t, r) {
            if (!this.maxFiles || this._created < this.maxFiles)
              return setImmediate(r);
            const i = this._created - this.maxFiles,
              s = `${t}${0 !== i ? i : ""}${e}${
                this.zippedArchive ? ".gz" : ""
              }`,
              a = o.join(this.dirname, s);
            n.unlink(a, r);
          }
          _checkMaxFilesTailable(e, t, r) {
            const s = [];
            if (!this.maxFiles) return;
            const a = this.zippedArchive ? ".gz" : "";
            for (let r = this.maxFiles - 1; r > 1; r--)
              s.push(
                function (r, i) {
                  let s = `${t}${r - 1}${e}${a}`;
                  const l = o.join(this.dirname, s);
                  n.exists(l, (c) => {
                    if (!c) return i(null);
                    (s = `${t}${r}${e}${a}`),
                      n.rename(l, o.join(this.dirname, s), i);
                  });
                }.bind(this, r)
              );
            i(s, () => {
              n.rename(
                o.join(this.dirname, `${t}${e}`),
                o.join(this.dirname, `${t}1${e}${a}`),
                r
              );
            });
          }
          _createLogDirIfNotExist(e) {
            n.existsSync(e) || n.mkdirSync(e, { recursive: !0 });
          }
        };
      },
      2930: (e, t, r) => {
        "use strict";
        const n = r(3685),
          o = r(5687),
          { Stream: i } = r(6207),
          s = r(5496),
          a = r(2776);
        e.exports = class extends s {
          constructor(e = {}) {
            super(e),
              (this.options = e),
              (this.name = e.name || "http"),
              (this.ssl = !!e.ssl),
              (this.host = e.host || "localhost"),
              (this.port = e.port),
              (this.auth = e.auth),
              (this.path = e.path || ""),
              (this.agent = e.agent),
              (this.headers = e.headers || {}),
              (this.headers["content-type"] = "application/json"),
              (this.batch = e.batch || !1),
              (this.batchInterval = e.batchInterval || 5e3),
              (this.batchCount = e.batchCount || 10),
              (this.batchOptions = []),
              (this.batchTimeoutID = -1),
              (this.batchCallback = {}),
              this.port || (this.port = this.ssl ? 443 : 80);
          }
          log(e, t) {
            this._request(e, (t, r) => {
              r &&
                200 !== r.statusCode &&
                (t = new Error(`Invalid HTTP Status Code: ${r.statusCode}`)),
                t ? this.emit("warn", t) : this.emit("logged", e);
            }),
              t && setImmediate(t);
          }
          query(e, t) {
            "function" == typeof e && ((t = e), (e = {})),
              (e = { method: "query", params: this.normalizeQuery(e) }).params
                .path && ((e.path = e.params.path), delete e.params.path),
              e.params.auth && ((e.auth = e.params.auth), delete e.params.auth),
              this._request(e, (e, r, n) => {
                if (
                  (r &&
                    200 !== r.statusCode &&
                    (e = new Error(
                      `Invalid HTTP Status Code: ${r.statusCode}`
                    )),
                  e)
                )
                  return t(e);
                if ("string" == typeof n)
                  try {
                    n = JSON.parse(n);
                  } catch (e) {
                    return t(e);
                  }
                t(null, n);
              });
          }
          stream(e = {}) {
            const t = new i();
            (e = { method: "stream", params: e }).params.path &&
              ((e.path = e.params.path), delete e.params.path),
              e.params.auth && ((e.auth = e.params.auth), delete e.params.auth);
            let r = "";
            const n = this._request(e);
            return (
              (t.destroy = () => n.destroy()),
              n.on("data", (e) => {
                const n = (e = (r + e).split(/\n+/)).length - 1;
                let o = 0;
                for (; o < n; o++)
                  try {
                    t.emit("log", JSON.parse(e[o]));
                  } catch (e) {
                    t.emit("error", e);
                  }
                r = e[n];
              }),
              n.on("error", (e) => t.emit("error", e)),
              t
            );
          }
          _request(e, t) {
            const r = (e = e || {}).auth || this.auth,
              n = e.path || this.path || "";
            delete e.auth,
              delete e.path,
              this.batch
                ? this._doBatch(e, t, r, n)
                : this._doRequest(e, t, r, n);
          }
          _doBatch(e, t, r, n) {
            if ((this.batchOptions.push(e), 1 === this.batchOptions.length)) {
              const e = this;
              (this.batchCallback = t),
                (this.batchTimeoutID = setTimeout(function () {
                  (e.batchTimeoutID = -1),
                    e._doBatchRequest(e.batchCallback, r, n);
                }, this.batchInterval));
            }
            this.batchOptions.length === this.batchCount &&
              this._doBatchRequest(this.batchCallback, r, n);
          }
          _doBatchRequest(e, t, r) {
            this.batchTimeoutID > 0 &&
              (clearTimeout(this.batchTimeoutID), (this.batchTimeoutID = -1));
            const n = this.batchOptions.slice();
            (this.batchOptions = []), this._doRequest(n, e, t, r);
          }
          _doRequest(e, t, r, i) {
            const s = Object.assign({}, this.headers);
            r && r.bearer && (s.Authorization = `Bearer ${r.bearer}`);
            const l = (this.ssl ? o : n).request({
              ...this.options,
              method: "POST",
              host: this.host,
              port: this.port,
              path: `/${i.replace(/^\//, "")}`,
              headers: s,
              auth:
                r && r.username && r.password
                  ? `${r.username}:${r.password}`
                  : "",
              agent: this.agent,
            });
            l.on("error", t),
              l.on("response", (e) => e.on("end", () => t(null, e)).resume()),
              l.end(Buffer.from(a(e), "utf8"));
          }
        };
      },
      3830: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "Console", {
          configurable: !0,
          enumerable: !0,
          get: () => r(7953),
        }),
          Object.defineProperty(t, "File", {
            configurable: !0,
            enumerable: !0,
            get: () => r(6832),
          }),
          Object.defineProperty(t, "Http", {
            configurable: !0,
            enumerable: !0,
            get: () => r(2930),
          }),
          Object.defineProperty(t, "Stream", {
            configurable: !0,
            enumerable: !0,
            get: () => r(7700),
          });
      },
      7700: (e, t, r) => {
        "use strict";
        const n = r(818),
          { MESSAGE: o } = r(7286),
          i = r(2037),
          s = r(5496);
        e.exports = class extends s {
          constructor(e = {}) {
            if ((super(e), !e.stream || !n(e.stream)))
              throw new Error("options.stream is required.");
            (this._stream = e.stream),
              this._stream.setMaxListeners(1 / 0),
              (this.isObjectMode = e.stream._writableState.objectMode),
              (this.eol = "string" == typeof e.eol ? e.eol : i.EOL);
          }
          log(e, t) {
            if ((setImmediate(() => this.emit("logged", e)), this.isObjectMode))
              return this._stream.write(e), void (t && t());
            this._stream.write(`${e[o]}${this.eol}`), t && t();
          }
        };
      },
      4934: (e) => {
        e.exports = function e(t, r) {
          if (t && r) return e(t)(r);
          if ("function" != typeof t)
            throw new TypeError("need wrapper function");
          return (
            Object.keys(t).forEach(function (e) {
              n[e] = t[e];
            }),
            n
          );
          function n() {
            for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
              e[r] = arguments[r];
            var n = t.apply(this, e),
              o = e[e.length - 1];
            return (
              "function" == typeof n &&
                n !== o &&
                Object.keys(o).forEach(function (e) {
                  n[e] = o[e];
                }),
              n
            );
          }
        };
      },
      33: (e, t, r) => {
        e = r.nmd(e);
        const n = r(1017).join(__dirname, "desktop-notifications.node");
        try {
          global.process.dlopen(e, n);
        } catch (e) {
          throw new Error("Cannot open " + n + ": " + e);
        }
      },
      1323: (e, t, r) => {
        e = r.nmd(e);
        const n = r(1017).join(__dirname, "registry.node");
        try {
          global.process.dlopen(e, n);
        } catch (e) {
          throw new Error("Cannot open " + n + ": " + e);
        }
      },
      9491: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      4300: (e) => {
        "use strict";
        e.exports = require("buffer");
      },
      2081: (e) => {
        "use strict";
        e.exports = require("child_process");
      },
      2057: (e) => {
        "use strict";
        e.exports = require("constants");
      },
      6113: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      2298: (e) => {
        "use strict";
        e.exports = require("electron");
      },
      2361: (e) => {
        "use strict";
        e.exports = require("events");
      },
      7147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      3685: (e) => {
        "use strict";
        e.exports = require("http");
      },
      5687: (e) => {
        "use strict";
        e.exports = require("https");
      },
      8188: (e) => {
        "use strict";
        e.exports = require("module");
      },
      2037: (e) => {
        "use strict";
        e.exports = require("os");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      1576: (e) => {
        "use strict";
        e.exports = require("string_decoder");
      },
      3837: (e) => {
        "use strict";
        e.exports = require("util");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      9770: (e) => {
        "use strict";
        e.exports = { version: "3.6.0" };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
  var n = {};
  (() => {
    "use strict";
    r.r(n);
    var e = r(5067),
      t = r(1017),
      o = r(2298);
    let i = null;
    function s() {
      if (!i) {
        const e = o.app.getPath("userData");
        i = t.join(e, "logs");
      }
      return i;
    }
    var a = r(5478),
      l = r.n(a),
      c = r(5496),
      u = r.n(c),
      d = r(7286);
    const f = {
      error: console.error,
      warn: console.warn,
      info: console.info,
      debug: console.debug,
    };
    class h extends u() {
      log(e, t) {
        setImmediate(() => this.emit("logged", e));
        const r = f[e[d.LEVEL]] ?? console.log;
        try {
          r(e[d.MESSAGE]);
        } catch {}
        t?.();
      }
    }
    var p = function (e, t) {
      return e === t;
    };
    const m = function (e, t) {
        var r;
        void 0 === t && (t = p);
        var n,
          o = [],
          i = !1,
          s = function (e, r) {
            return t(e, o[r]);
          };
        return function () {
          for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++)
            a[l] = arguments[l];
          return (
            (i && r === this && a.length === o.length && a.every(s)) ||
              ((n = e.apply(this, a)), (i = !0), (r = this), (o = a)),
            n
          );
        };
      },
      g = require("fs/promises");
    var v = r(7147),
      y = r(2037),
      w = r(3837),
      b = r(2229);
    const _ = ".desktop.production.log",
      E = new RegExp("(\\d{4}-\\d{2}-\\d{2})" + r.n(b)()(_) + "$");
    class S extends u() {
      stream;
      logDirectory;
      constructor(e) {
        const { logDirectory: t, ...r } = e;
        super(r), (this.logDirectory = t);
      }
      async log(e, t) {
        const r = O(this.logDirectory);
        (void 0 !== this.stream && this.stream.path === r) ||
          (this.stream?.end(),
          (this.stream = (0, v.createWriteStream)(r, { flags: "a" })),
          this.stream.on("error", (e) => {}),
          await C(this.logDirectory).catch((e) => {})),
          void 0 !== this.stream &&
            (await x(this.stream, `${e[d.MESSAGE]}${y.EOL}`).catch((e) => {}),
            this.emit("logged", e)),
          t?.();
      }
      close(e) {
        this.stream?.end(e), (this.stream = void 0);
      }
    }
    const x = (0, w.promisify)((e, t, r) => e.write(t, r)),
      O = (e) =>
        (0, t.join)(
          e,
          `${((e = new Date()) => e.toISOString().split("T", 1)[0])()}${_}`
        ),
      C = async (e) => {
        const r = await ((e) =>
          (0, g.readdir)(e, { withFileTypes: !0 })
            .then((e) => e.filter((e) => e.isFile() && E.test(e.name)))
            .catch((e) => {}))(e);
        if (r && r.length > 14) {
          const n = r.length - 14 + 1,
            o = r.sort().slice(0, n);
          for (const r of o)
            await (0, g.unlink)((0, t.join)(e, r.name)).catch((e) => {});
        }
      };
    const R = m(async () => {
      const t = s();
      return (
        await (0, g.mkdir)(t, { recursive: !0 }),
        (function (t) {
          const r = new S({
            logDirectory: t,
            level: "info",
            format: e.format.printf(
              ({ level: e, message: t }) =>
                `${new Date().toISOString()} - ${e}: ${t}`
            ),
          });
          r.on("error", l());
          const n = new h({ level: "error" });
          return (
            e.configure({ transports: [n, r], format: e.format.simple() }),
            e.log
          );
        })(t)
      );
    });
    async function M(e, t) {
      try {
        const r = await R();
        await new Promise((n, o) => {
          r(e, t, (e) => {
            e ? o(e) : n();
          });
        });
      } catch (e) {}
    }
    var A = r(9764);
    const j = require("url"),
      k = ["renderer.js", "main.js"];
    function T(e) {
      if (!k.some((t) => e.endsWith(t))) return null;
      e.startsWith("file://") && (e = (0, j.fileURLToPath)(e));
      const r = `${e}.map`;
      if (!v.existsSync(r)) return null;
      try {
        const e = v.readFileSync(r, "utf8");
        return { url: t.basename(r), map: e };
      } catch (e) {
        return null;
      }
    }
    const L = new WeakMap();
    let N;
    function P(e, t) {
      return L.set(e, t), e + t.map((e) => `\n    at ${e}`).join("");
    }
    function D(e) {
      return { name: e.name, message: e.message, stack: $(e) };
    }
    function $(e) {
      let t = L.get(e);
      return (
        t || ((e.stack || "").toString(), (t = L.get(e))), t ? N(e, t) : e.stack
      );
    }
    function I(e, t) {
      return (e = D(e)).stack
        ? t
          ? `${t}\n${e.stack}`
          : e.stack.trim()
        : t
        ? `${t}\n${e.name}: ${e.message}`
        : `${e.name}: ${e.message}`;
    }
    function F(e, t) {
      return t ? I(t, e) : e;
    }
    global.log = {
      error(e, t) {
        M("error", "[main] " + F(e, t));
      },
      warn(e, t) {
        M("warn", "[main] " + F(e, t));
      },
      info(e, t) {
        M("info", "[main] " + F(e, t));
      },
      debug(e, t) {
        M("debug", "[main] " + F(e, t));
      },
    };
    var B = r(1391);
    function U(e, t, ...r) {
      if (e.isDestroyed()) {
        const e = `failed to send on ${t}, webContents was destroyed`;
        log.error(e);
      } else e.send(t, ...r);
    }
    function H(e) {
      return e.isFullScreen()
        ? "full-screen"
        : e.isMaximized()
        ? "maximized"
        : e.isMinimized()
        ? "minimized"
        : e.isVisible()
        ? "normal"
        : "hidden";
    }
    function q(e) {
      e.on("enter-full-screen", () => z(e, "full-screen")),
        e.on("leave-full-screen", () => z(e, "normal")),
        e.on("maximize", () => z(e, "maximized")),
        e.on("minimize", () => z(e, "minimized")),
        e.on("unmaximize", () => z(e, "normal")),
        e.on("restore", () => z(e, "normal")),
        e.on("hide", () => z(e, "hidden")),
        e.on("show", () => {
          z(e, H(e));
        });
    }
    function z(e, t) {
      U(e.webContents, "window-state-changed", t);
    }
    function G(e) {
      throw new Error(e);
    }
    function W(e) {
      const t = e.id;
      if (!t) throw new Error(`menuItem must specify id: ${e.label}`);
      const r = e.enabled,
        n = e.visible,
        o = e.label,
        i = e.checked,
        s = (function (e) {
          if (e.accelerator) return e.accelerator;
          if (e.role) {
            const t = e.getDefaultRoleAccelerator;
            if ("function" == typeof t)
              try {
                const r = t.call(e);
                if ("string" == typeof r) return r;
              } catch (e) {
                console.error("Could not retrieve default accelerator", e);
              }
          }
          return null;
        })(e),
        a = (function (e) {
          const t = e.match(/&([^&])/);
          return t ? t[1] : null;
        })(e.label),
        l = (function (e) {
          switch (e) {
            case "normal":
            case "separator":
            case "submenu":
            case "checkbox":
            case "radio":
              return e;
            default:
              throw new Error(
                `Unable to parse string ${e} to a valid menu item type`
              );
          }
        })(e.type);
      switch (l) {
        case "normal":
          return {
            id: t,
            type: "menuItem",
            label: o,
            enabled: r,
            visible: n,
            accelerator: s,
            accessKey: a,
          };
        case "separator":
          return { id: t, type: "separator", visible: n };
        case "submenu":
          return {
            id: t,
            type: "submenuItem",
            label: o,
            enabled: r,
            visible: n,
            menu: Y(e.submenu, t),
            accessKey: a,
          };
        case "checkbox":
          return {
            id: t,
            type: "checkbox",
            label: o,
            enabled: r,
            visible: n,
            accelerator: s,
            checked: i,
            accessKey: a,
          };
        case "radio":
          return {
            id: t,
            type: "radio",
            label: o,
            enabled: r,
            visible: n,
            accelerator: s,
            checked: i,
            accessKey: a,
          };
        default:
          return (function (e, t) {
            throw new Error(t);
          })(0, `Unknown menu item type ${l}`);
      }
    }
    function Y(e, t) {
      return { id: t, type: "menu", items: e.items.map(W) };
    }
    function V() {
      const e = process.hrtime();
      return 1e3 * e[0] + e[1] / 1e6;
    }
    var K = r(2382),
      Z = r.n(K);
    const J = new Set(),
      X = (e) => {
        J.add(e.id), e.on("destroyed", () => J.delete(e.id));
      };
    function Q(e, t) {
      o.ipcMain.on(e, te(t));
    }
    function ee(e, t) {
      o.ipcMain.handle(e, te(t));
    }
    function te(e) {
      return (t, ...r) => {
        var n;
        if (((n = t.sender), J.has(n.id))) return e(t, ...r);
        log.error(
          `IPC message received from invalid sender: ${t.senderFrame.url}`
        );
      };
    }
    var re = r(9379);
    function ne(e) {
      try {
        const t = o.shell.readShortcutLink(e);
        if (void 0 === t.toastActivatorClsid || "" === t.toastActivatorClsid)
          return;
        return t.toastActivatorClsid;
      } catch (t) {
        return void log.error(
          `Error looking for toast activator CLSID in shortcut ${e}`,
          t
        );
      }
    }
    let oe;
    class ie {
      window;
      emitter = new B.Emitter();
      _loadTime = null;
      _rendererReadyTime = null;
      isDownloadingUpdate = !1;
      minWidth = 960;
      minHeight = 660;
      shouldMaximizeOnShow = !1;
      constructor() {
        const e = Z()({
            defaultWidth: this.minWidth,
            defaultHeight: this.minHeight,
            maximize: !1,
          }),
          t = {
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            show: !1,
            backgroundColor: "#fff",
            webPreferences: {
              disableBlinkFeatures: "Auxclick",
              nodeIntegration: !0,
              spellcheck: !0,
              contextIsolation: !1,
            },
            acceptFirstMouse: !0,
            frame: !1,
          };
        (this.window = new o.BrowserWindow(t)),
          X(this.window.webContents),
          (function (e) {
            (0, re.V2)((t, r, n) => {
              U(e.webContents, "notification-event", t, r, n);
            });
          })(this.window),
          e.manage(this.window),
          (this.shouldMaximizeOnShow = e.isMaximized);
        let r = !1,
          n = !1;
        o.app.on("before-quit", () => {
          r = !0;
        }),
          Q("will-quit", (e) => {
            (r = !0), (e.returnValue = !0);
          }),
          Q("will-quit-even-if-updating", (e) => {
            (r = !0), (n = !0), (e.returnValue = !0);
          }),
          Q("cancel-quitting", (e) => {
            (r = !1), (n = !1), (e.returnValue = !0);
          }),
          this.window.on("close", (e) => {
            if (!n && this.isDownloadingUpdate)
              return (
                e.preventDefault(),
                U(this.window.webContents, "show-installing-update"),
                void this.show()
              );
            o.nativeTheme.removeAllListeners(),
              o.autoUpdater.removeAllListeners(),
              (0, re.pD)();
          }),
          this.window.once("ready-to-show", () => {
            this.window.on("unmaximize", () => {
              setTimeout(() => {
                const e = this.window.getBounds();
                (e.width += 1),
                  this.window.setBounds(e),
                  (e.width -= 1),
                  this.window.setBounds(e);
              }, 5);
            });
          });
      }
      load() {
        let e = 0;
        var r;
        this.window.webContents.once("did-start-loading", () => {
          (this._rendererReadyTime = null), (this._loadTime = null), (e = V());
        }),
          this.window.webContents.once("did-finish-load", () => {
            (this._loadTime = V() - e), this.maybeEmitDidLoad();
          }),
          this.window.webContents.on("did-finish-load", () => {
            this.window.webContents.setVisualZoomLevelLimits(1, 1);
          }),
          this.window.webContents.on("did-fail-load", () => {
            this.window.webContents.openDevTools(), this.window.show();
          }),
          (r = (e, t) => {
            (this._rendererReadyTime = t), this.maybeEmitDidLoad();
          }),
          o.ipcMain.once("renderer-ready", te(r)),
          this.window.on("focus", () => U(this.window.webContents, "focus")),
          this.window.on("blur", () => U(this.window.webContents, "blur")),
          q(this.window),
          this.window.loadURL(
            ((...e) => (0, j.pathToFileURL)(t.resolve(...e)).toString())(
              __dirname,
              "index.html"
            )
          ),
          o.nativeTheme.addListener("updated", (e, t) => {
            U(this.window.webContents, "native-theme-updated");
          }),
          this.setupAutoUpdater();
      }
      maybeEmitDidLoad() {
        this.rendererLoaded && this.emitter.emit("did-load", null);
      }
      get rendererLoaded() {
        return !!this.loadTime && !!this.rendererReadyTime;
      }
      onClosed(e) {
        this.window.on("closed", e);
      }
      onDidLoad(e) {
        return this.emitter.on("did-load", e);
      }
      isMinimized() {
        return this.window.isMinimized();
      }
      isVisible() {
        return this.window.isVisible();
      }
      restore() {
        this.window.restore();
      }
      isFocused() {
        return this.window.isFocused();
      }
      focus() {
        this.window.focus();
      }
      selectAllWindowContents() {
        this.window.webContents.selectAll();
      }
      show() {
        this.window.show(),
          this.shouldMaximizeOnShow &&
            ((this.shouldMaximizeOnShow = !1), this.window.maximize());
      }
      sendMenuEvent(e) {
        this.show(), U(this.window.webContents, "menu-event", e);
      }
      sendURLAction(e) {
        this.show(), U(this.window.webContents, "url-action", e);
      }
      sendLaunchTimingStats(e) {
        U(this.window.webContents, "launch-timing-stats", e);
      }
      sendAppMenu() {
        const e = o.Menu.getApplicationMenu();
        if (e) {
          const t = Y(e);
          U(this.window.webContents, "app-menu", t);
        }
      }
      sendCertificateError(e, t, r) {
        U(this.window.webContents, "certificate-error", e, t, r);
      }
      showCertificateTrustDialog(e, t) {
        o.dialog.showCertificateTrustDialog(
          this.window,
          { certificate: e, message: t },
          () => {}
        );
      }
      get loadTime() {
        return this._loadTime;
      }
      get rendererReadyTime() {
        return this._rendererReadyTime;
      }
      destroy() {
        this.window.destroy();
      }
      setupAutoUpdater() {
        o.autoUpdater.on("error", (e) => {
          (this.isDownloadingUpdate = !1),
            U(this.window.webContents, "auto-updater-error", e);
        }),
          o.autoUpdater.on("checking-for-update", () => {
            (this.isDownloadingUpdate = !1),
              U(this.window.webContents, "auto-updater-checking-for-update");
          }),
          o.autoUpdater.on("update-available", () => {
            (this.isDownloadingUpdate = !0),
              U(this.window.webContents, "auto-updater-update-available");
          }),
          o.autoUpdater.on("update-not-available", () => {
            (this.isDownloadingUpdate = !1),
              U(this.window.webContents, "auto-updater-update-not-available");
          }),
          o.autoUpdater.on("update-downloaded", () => {
            (this.isDownloadingUpdate = !1),
              U(this.window.webContents, "auto-updater-update-downloaded");
          });
      }
      checkForUpdates(e) {
        try {
          o.autoUpdater.setFeedURL({ url: e }), o.autoUpdater.checkForUpdates();
        } catch (e) {
          return e;
        }
      }
      quitAndInstallUpdate() {
        o.autoUpdater.quitAndInstall();
      }
      minimizeWindow() {
        this.window.minimize();
      }
      maximizeWindow() {
        this.window.maximize();
      }
      unmaximizeWindow() {
        this.window.unmaximize();
      }
      closeWindow() {
        this.window.close();
      }
      isMaximized() {
        return this.window.isMaximized();
      }
      getCurrentWindowState() {
        return H(this.window);
      }
      getCurrentWindowZoomFactor() {
        return this.window.webContents.zoomFactor;
      }
      setWindowZoomFactor(e) {
        this.window.webContents.zoomFactor = e;
      }
      async showSaveDialog(e) {
        const { canceled: t, filePath: r } = await o.dialog.showSaveDialog(
          this.window,
          e
        );
        return t || void 0 === r ? null : r;
      }
      async showOpenDialog(e) {
        const { filePaths: t } = await o.dialog.showOpenDialog(this.window, e);
        return t.length > 0 ? t[0] : null;
      }
    }
    function se(e) {
      return e.id || e.label || e.role || "unknown";
    }
    function ae(e, t = "@", r = new Set()) {
      for (const n of e) {
        let e = 0,
          o = n.id;
        if (!o)
          do {
            o = `${t}.${se(n)}${e++ || ""}`;
          } while (r.has(o));
        (n.id = o), r.add(o), n.submenu && ae(n.submenu, n.id, r);
      }
    }
    function le(e) {
      const t = e.endsWith("\\") ? e : `${e}\\`;
      o.shell.openPath(t).then((t) => {
        "" !== t && log.error(`Failed to open directory (${e}): ${t}`);
      });
    }
    var ce;
    function ue({
      selectedExternalEditor: e,
      selectedShell: t,
      askForConfirmationOnForcePush: r,
      askForConfirmationOnRepositoryRemoval: n,
      hasCurrentPullRequest: i = !1,
      contributionTargetDefaultBranch: a = "default branch",
      isForcePushForCurrentRepository: l = !1,
      isStashedChangesVisible: c = !1,
      askForConfirmationWhenStashingAllChanges: u = !0,
    }) {
      a = (function (e, t) {
        if (e.length <= 25) return e;
        const r = [...e];
        if (r.length <= 25) return e;
        const n = r.reduce(
          (e, t) => (
            t >= "︀" && t <= "️"
              ? e.length && e.push(`${e.pop()}${t}`)
              : e.push(t),
            e
          ),
          []
        );
        return n.length <= 25 ? e : `${n.slice(0, 25).join("")}…`;
      })(a);
      const d = n ? "&删除…" : "&删除",
        f = i ? "&在GitHub上查看拉取请求" : "&创建拉取请求",
        h = new Array(),
        p = { type: "separator" },
        m = {
          label: "&文件",
          submenu: [
            {
              label: "&新仓库…",
              id: "new-repository",
              click: fe("create-repository"),
              accelerator: "CmdOrCtrl+N",
            },
            p,
            {
              label: "&导入本地仓库…",
              id: "add-local-repository",
              accelerator: "CmdOrCtrl+O",
              click: fe("add-local-repository"),
            },
            {
              label: "&克隆仓库…",
              id: "clone-repository",
              accelerator: "CmdOrCtrl+Shift+O",
              click: fe("clone-repository"),
            },
          ],
        };
      m.submenu.push(
        p,
        {
          label: "&选项…",
          id: "preferences",
          accelerator: "CmdOrCtrl+,",
          click: fe("show-preferences"),
        },
        p,
        { role: "quit", label: "&退出", accelerator: "Alt+F4" }
      ),
        h.push(m),
        h.push({
          label: "&编辑",
          submenu: [
            { role: "undo", label: "&撤销" },
            { role: "redo", label: "&恢复" },
            p,
            { role: "cut", label: "&剪切" },
            { role: "copy", label: "&复制" },
            { role: "paste", label: "&粘贴" },
            {
              label: "&全选",
              accelerator: "CmdOrCtrl+A",
              click: fe("select-all"),
            },
            p,
            {
              id: "find",
              label: "&查找",
              accelerator: "CmdOrCtrl+F",
              click: fe("find-text"),
            },
          ],
        }),
        h.push({
          label: "&查看",
          submenu: [
            {
              label: "&更改",
              id: "show-changes",
              accelerator: "CmdOrCtrl+1",
              click: fe("show-changes"),
            },
            {
              label: "&历史",
              id: "show-history",
              accelerator: "CmdOrCtrl+2",
              click: fe("show-history"),
            },
            {
              label: "&仓库列表",
              id: "show-repository-list",
              accelerator: "CmdOrCtrl+T",
              click: fe("choose-repository"),
            },
            {
              label: "&分支列表",
              id: "show-branches-list",
              accelerator: "CmdOrCtrl+B",
              click: fe("show-branches"),
            },
            p,
            {
              label: "&填写提交备注",
              id: "go-to-commit-message",
              accelerator: "CmdOrCtrl+G",
              click: fe("go-to-commit-message"),
            },
            {
              label: de(c),
              id: "toggle-stashed-changes",
              accelerator: "Ctrl+H",
              click: fe(c ? "hide-stashed-changes" : "show-stashed-changes"),
            },
            { label: "&切换为全屏", role: "togglefullscreen" },
            p,
            {
              label: "重置缩放",
              accelerator: "CmdOrCtrl+0",
              click: me(ce.Reset),
            },
            { label: "放大", accelerator: "CmdOrCtrl+=", click: me(ce.In) },
            {
              label: "缩小",
              accelerator: "CmdOrCtrl+-",
              click: me(ce.Out),
            },
            {
              label: "扩大活动项大小",
              id: "increase-active-resizable-width",
              accelerator: "CmdOrCtrl+9",
              click: fe("increase-active-resizable-width"),
            },
            {
              label: "缩小活动项大小",
              id: "decrease-active-resizable-width",
              accelerator: "CmdOrCtrl+8",
              click: fe("decrease-active-resizable-width"),
            },
            p,
            {
              label: "&重载",
              id: "reload-window",
              accelerator: "CmdOrCtrl+Alt+R",
              click(e, t) {
                t && t.reload();
              },
              visible: !1,
            },
            {
              id: "show-devtools",
              label: "&切换开发人员工具",
              accelerator: "Ctrl+Shift+I",
              click(e, t) {
                t && t.webContents.toggleDevTools();
              },
            },
          ],
        });
      const v = (function (e, t) {
          return e ? (t ? "Force P&ush…" : "Force P&ush") : "&推送";
        })(l, r),
        y = l ? "force-push" : "push";
      h.push({
        label: "&仓库",
        id: "repository",
        submenu: [
          { id: "push", label: v, accelerator: "CmdOrCtrl+P", click: fe(y) },
          {
            id: "pull",
            label: "&拉取",
            accelerator: "CmdOrCtrl+Shift+P",
            click: fe("pull"),
          },
          {
            id: "fetch",
            label: "&获取",
            accelerator: "CmdOrCtrl+Shift+T",
            click: fe("fetch"),
          },
          {
            label: d,
            id: "remove-repository",
            accelerator: "CmdOrCtrl+Backspace",
            click: fe("remove-repository"),
          },
          p,
          {
            id: "view-repository-on-github",
            label: "&在GitHub上查看",
            accelerator: "CmdOrCtrl+Shift+G",
            click: fe("view-repository-on-github"),
          },
          {
            label: `&在${t ?? "命令行"}中打开`,
            id: "open-in-shell",
            accelerator: "Ctrl+`",
            click: fe("open-in-shell"),
          },
          {
            label: "&在资源管理器中显示",
            id: "open-working-directory",
            accelerator: "CmdOrCtrl+Shift+F",
            click: fe("open-working-directory"),
          },
          {
            label: `&在${e ?? "外部编辑器"}中打开`,
            id: "open-external-editor",
            accelerator: "CmdOrCtrl+Shift+A",
            click: fe("open-external-editor"),
          },
          p,
          {
            id: "create-issue-in-repository-on-github",
            label: "&在GitHub上创建issue",
            accelerator: "CmdOrCtrl+I",
            click: fe("create-issue-in-repository-on-github"),
          },
          p,
          {
            label: "&仓库设置…",
            id: "show-repository-settings",
            click: fe("show-repository-settings"),
          },
        ],
      });
      const w = [
        {
          label: "&新建分支…",
          id: "create-branch",
          accelerator: "CmdOrCtrl+Shift+N",
          click: fe("create-branch"),
        },
        {
          label: "&重命名…",
          id: "rename-branch",
          accelerator: "CmdOrCtrl+Shift+R",
          click: fe("rename-branch"),
        },
        {
          label: "&删除当前分支…",
          id: "delete-branch",
          accelerator: "CmdOrCtrl+Shift+D",
          click: fe("delete-branch"),
        },
        p,
        {
          label: "放弃所有更改…",
          id: "discard-all-changes",
          accelerator: "CmdOrCtrl+Shift+Backspace",
          click: fe("discard-all-changes"),
        },
        {
          label: u ? "&暂存所有更改……" : "&暂存所有更改",
          id: "stash-all-changes",
          accelerator: "CmdOrCtrl+Shift+S",
          click: fe("stash-all-changes"),
        },
        p,
        {
          label: `&从${a}中拉取更新`,
          id: "update-branch-with-contribution-target-branch",
          accelerator: "CmdOrCtrl+Shift+U",
          click: fe("update-branch-with-contribution-target-branch"),
        },
        {
          label: "&比较分支",
          id: "compare-to-branch",
          accelerator: "CmdOrCtrl+Shift+B",
          click: fe("compare-to-branch"),
        },
        {
          label: "&合并到当前分支…",
          id: "merge-branch",
          accelerator: "CmdOrCtrl+Shift+M",
          click: fe("merge-branch"),
        },
        {
          label: "&挤压合并到当前分支…",
          id: "squash-and-merge-branch",
          accelerator: "CmdOrCtrl+Shift+H",
          click: fe("squash-and-merge-branch"),
        },
        {
          label: "&将当前分支变基…",
          id: "rebase-branch",
          accelerator: "CmdOrCtrl+Shift+E",
          click: fe("rebase-branch"),
        },
        p,
        {
          label: "&在GitHub上进行比较",
          id: "compare-on-github",
          accelerator: "CmdOrCtrl+Shift+C",
          click: fe("compare-on-github"),
        },
        {
          label: "查看GitHub上的分支",
          id: "branch-on-github",
          accelerator: "CmdOrCtrl+Alt+B",
          click: fe("branch-on-github"),
        },
      ];
      w.push({
        label: "预览拉取请求",
        id: "preview-pull-request",
        accelerator: "CmdOrCtrl+Alt+P",
        click: fe("preview-pull-request"),
      }),
        w.push({
          label: f,
          id: "create-pull-request",
          accelerator: "CmdOrCtrl+R",
          click: fe("open-pull-request"),
        }),
        h.push({ label: "&分支", id: "branch", submenu: w });
      const b = [
        {
          label: "报告问题…",
          click() {
            o.shell
              .openExternal(
                "https://github.com/desktop/desktop/issues/new/choose"
              )
              .catch((e) => log.error("Failed opening issue creation page", e));
          },
        },
        {
          label: "&联系GitHub支持…",
          click() {
            o.shell
              .openExternal(
                `https://github.com/contact?from_desktop_app=1&app_version=${o.app.getVersion()}`
              )
              .catch((e) =>
                log.error("Failed opening contact support page", e)
              );
          },
        },
        {
          label: "显示用户指南",
          click() {
            o.shell
              .openExternal("https://docs.github.com/en/desktop")
              .catch((e) => log.error("Failed opening user guides page", e));
          },
        },
        {
          label: "显示键盘快捷键",
          click() {
            o.shell
              .openExternal(
                "https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/keyboard-shortcuts"
              )
              .catch((e) =>
                log.error("Failed opening keyboard shortcuts page", e)
              );
          },
        },
        {
          label: "&显示本地日志",
          click() {
            const e = s();
            (0, g.mkdir)(e, { recursive: !0 })
              .then(() => le(e))
              .catch((e) => log.error("Failed opening logs directory", e));
          },
        },
      ];
      return (
        h.push({
          label: "&帮助",
          submenu: [
            ...b,
            p,
            {
              label: "&关于 GitHub Desktop",
              click: fe("show-about"),
              id: "about",
            },
          ],
        }),
        ae(h),
        o.Menu.buildFromTemplate(h)
      );
    }
    function de(e) {
      return e ? "&隐藏更改" : "&显示隐藏的更改";
    }
    function fe(e) {
      return (t, r) => {
        const n = r ?? o.BrowserWindow.getAllWindows()[0];
        void 0 !== n && U(n.webContents, "menu-event", e);
      };
    }
    !(function (e) {
      (e[(e.Reset = 0)] = "Reset"),
        (e[(e.In = 1)] = "In"),
        (e[(e.Out = 2)] = "Out");
    })(ce || (ce = {}));
    const he = [0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2],
      pe = he.slice().reverse();
    function me(e) {
      return (t, r) => {
        if (!r) return;
        const { webContents: n } = r;
        if (e === ce.Reset) (n.zoomFactor = 1), U(n, "zoom-factor-changed", 1);
        else {
          const t = n.zoomFactor,
            r = e === ce.In ? he : pe,
            i =
              ((o = t),
              r.reduce((e, t) => (Math.abs(t - o) < Math.abs(e - o) ? t : e))),
            s = r.find((t) => (e === ce.In ? t > i : t < i)),
            a = void 0 === s ? i : s;
          (n.zoomFactor = a), U(n, "zoom-factor-changed", a);
        }
        var o;
      };
    }
    function ge(e) {
      let t = !1;
      if (e.submenu instanceof o.Menu)
        for (const r of e.submenu.items) ge(r) && (t = !0);
      if (t || e.role) return !0;
      const r = e.id;
      return (
        "show-devtools" === r || "reload-window" === r || ((e.enabled = !1), !1)
      );
    }
    function* ve(e) {
      for (const t of e.items)
        yield t,
          "submenu" === t.type &&
            void 0 !== t.submenu &&
            (yield* ve(t.submenu));
    }
    var ye = r(2081);
    (0, w.promisify)(ye.execFile);
    var we = r(7492);
    function be() {
      return y.release();
    }
    m(() => !1);
    const _e = m(() => !1);
    m(() => !1),
      m(() => !1),
      m(() =>
        (function (e) {
          const t = be();
          return void 0 !== t && (0, we.compare)(t, "10.0.17666", ">=");
        })()
      ),
      m(() =>
        (function (e) {
          const t = be();
          return void 0 !== t && (0, we.compare)(t, "10", "<");
        })()
      ),
      new Set(["LOCAL_GIT_DIRECTORY"]);
    const Ee = /[\x00-\x20\x7F~^:?*\[\\|""<>]+|@{|\.\.+|^\.|\.$|\.lock$|\/$/g;
    function Se(e, t) {
      const r = e[t];
      return null == r ? null : Array.isArray(r) ? r[0] : r;
    }
    var xe = r(6969);
    function Oe() {
      for (const t of (0, xe.enumerateValues)(
        xe.HKEY.HKEY_CURRENT_USER,
        "Environment"
      ))
        if (
          "Path" === t.name &&
          ((e = t).type === xe.RegistryValueType.REG_SZ ||
            e.type === xe.RegistryValueType.REG_EXPAND_SZ)
        )
          return t.data.split(";").filter((e) => e.length > 0);
      var e;
      throw new Error("Could not find PATH environment variable");
    }
    async function Ce(e) {
      let r;
      const n = process.env.SystemRoot;
      if (n) {
        const e = t.join(n, "System32");
        r = t.join(e, "setx.exe");
      } else r = "setx.exe";
      await Re(r, ["Path", e.join(";")]);
    }
    function Re(e, t) {
      try {
        const r = (0, ye.spawn)(e, t);
        return new Promise((n, o) => {
          let i = "";
          r.stdout &&
            r.stdout.on("data", (e) => {
              i += e;
            }),
            r.on("close", (r) => {
              0 === r
                ? n(i)
                : o(new Error(`Command "${e} ${t}" failed: "${i}"`));
            }),
            r.on("error", (e) => {
              o(e);
            }),
            r.stdin && r.stdin.end();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
    var Me = r(6539),
      Ae = r.n(Me);
    const je = t.resolve(process.execPath, ".."),
      ke = t.resolve(je, ".."),
      Te = t.resolve(t.join(ke, "Update.exe")),
      Le = t.basename(process.execPath);
    async function Ne() {
      const e = Pe();
      await (0, g.mkdir)(e, { recursive: !0 }),
        await (function (e) {
          const r = `@echo off\n"%~dp0\\${De(
              e,
              "resources/app/static/github.bat"
            )}" %*`,
            n = t.join(e, "github.bat");
          return (0, g.writeFile)(n, r);
        })(e),
        await (function (e) {
          const r = `#!/usr/bin/env bash\n  DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" && pwd )"\n  sh "$DIR/${De(
              e,
              "resources/app/static/github.sh"
            ).replace(/\\/g, "/")}" "$@"`,
            n = t.join(e, "github");
          return (0, g.writeFile)(n, r, { encoding: "utf8", mode: 755 });
        })(e);
      try {
        const t = Oe();
        t.indexOf(e) < 0 && (await Ce([...t, e]));
      } catch (e) {
        log.error(
          "Failed inserting bin path into PATH environment variable",
          e
        );
      }
    }
    function Pe() {
      return t.resolve(process.execPath, "../../bin");
    }
    function De(e, r) {
      const n = t.resolve(process.execPath, "..");
      return t.relative(e, t.join(n, r));
    }
    async function $e(e) {
      await Re(Te, e);
    }
    function Ie(e) {
      return $e(["--createShortcut", Le, "-l", e.join(",")]);
    }
    function Fe(e) {
      return Be(e)
        ? "x64-emulated"
        : "arm64" === process.arch
        ? "arm64"
        : "x64";
    }
    function Be(e) {
      return "x64" === process.arch && !0 === e.runningUnderARM64Translation;
    }
    var Ue = r(6113),
      He = r(4790),
      qe = r.n(He);
    function ze(e) {
      if ("undefined" != typeof window && window.crypto) {
        const t = new Uint8Array(e);
        return crypto.getRandomValues(t), t;
      }
      return (0, Ue.randomBytes)(e);
    }
    let Ge = null;
    async function We() {
      if (!Ge) {
        let e = await (async function () {
          let e;
          try {
            (e = (await (0, g.readFile)(Ve(), "utf8")).trim()),
              36 !== e.length && (e = void 0);
          } catch (e) {}
          return e;
        })();
        void 0 === e &&
          ((e = qe()({ random: ze(16) })),
          await Ye(e).catch((e) => {
            log.error(e);
          })),
          (Ge = e);
      }
      return Ge;
    }
    async function Ye(e) {
      (Ge = e), await (0, g.writeFile)(Ve(), e, "utf8");
    }
    const Ve = () => (0, t.join)(o.app.getPath("userData"), ".guid");
    let Ke = !1;
    async function Ze(e, t, r) {
      if (!0 !== r) {
        if (Ke) return;
        Ke = !0;
      }
      const n = new Map();
      if (
        (n.set("name", e.name),
        n.set("message", e.message),
        e.stack && n.set("stack", e.stack),
        n.set("platform", "win32"),
        n.set("architecture", Fe(o.app)),
        n.set("sha", "765600597ca9c3d073e0810fe30d97f9a7491873"),
        n.set("version", o.app.getVersion()),
        n.set("guid", await We()),
        t)
      )
        for (const e of Object.keys(t)) n.set(e, t[e]);
      const i = [...n.entries()]
        .map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)
        .join("&");
      try {
        await new Promise((e, t) => {
          const n = r
              ? "https://central.github.com/api/desktop-non-fatal/exception"
              : "https://central.github.com/api/desktop/exception",
            s = o.net.request({ method: "POST", url: n });
          s.setHeader("Content-Type", "application/x-www-form-urlencoded"),
            s.on("response", (r) => {
              200 === r.statusCode
                ? e()
                : t(`Got ${r.statusCode} - ${r.statusMessage} from central`);
            }),
            s.on("error", t),
            s.end(i);
        }),
          log.info("Error report submitted");
      } catch (t) {
        log.error("Failed submitting error report", e);
      }
    }
    class Je {
      window;
      emitter = new B.Emitter();
      errorType;
      error;
      hasFinishedLoading = !1;
      hasSentReadyEvent = !1;
      constructor(e, t) {
        (this.window = new o.BrowserWindow({
          width: 600,
          height: 500,
          minWidth: 600,
          minHeight: 500,
          show: !1,
          backgroundColor: "#fff",
          webPreferences: {
            disableBlinkFeatures: "Auxclick",
            nodeIntegration: !0,
            spellcheck: !1,
            contextIsolation: !1,
          },
          frame: !1,
        })),
          X(this.window.webContents),
          (this.error = t),
          (this.errorType = e);
      }
      load() {
        log.debug("Starting crash process"),
          this.window.webContents.once("did-start-loading", () => {
            log.debug("Crash process in startup");
          }),
          this.window.webContents.once("did-finish-load", () => {
            log.debug("Crash process started"),
              (this.hasFinishedLoading = !0),
              this.maybeEmitDidLoad();
          }),
          this.window.webContents.on("did-finish-load", () => {
            this.window.webContents.setVisualZoomLevelLimits(1, 1);
          }),
          this.window.webContents.on("did-fail-load", () => {
            log.error("Crash process failed to load"),
              this.emitter.emit("did-fail-load", null);
          }),
          Q("crash-ready", () => {
            log.debug("Crash process is ready"),
              (this.hasSentReadyEvent = !0),
              this.sendError(),
              this.maybeEmitDidLoad();
          }),
          Q("crash-quit", () => {
            log.debug("Got quit signal from crash process"),
              this.window.close();
          }),
          q(this.window),
          this.window.loadURL(`file://${__dirname}/crash.html`);
      }
      maybeEmitDidLoad() {
        this.hasFinishedLoading &&
          this.hasSentReadyEvent &&
          this.emitter.emit("did-load", null);
      }
      onClose(e) {
        this.window.on("closed", e);
      }
      onFailedToLoad(e) {
        this.emitter.on("did-fail-load", e);
      }
      onDidLoad(e) {
        return this.emitter.on("did-load", e);
      }
      focus() {
        this.window.focus();
      }
      show() {
        log.debug("Showing crash process window"), this.window.show();
      }
      sendError() {
        const e = {
            stack: this.error.stack,
            message: this.error.message,
            name: this.error.name,
          },
          t = { type: this.errorType, error: e };
        U(this.window.webContents, "error", t);
      }
      destroy() {
        this.window.destroy();
      }
    }
    let Xe = !1;
    function Qe(e, t) {
      return (e ? e.toLowerCase() : e) === (t ? t.toLowerCase() : t);
    }
    function et() {
      const e = o.Menu.buildFromTemplate([{ role: "editMenu" }]).items[0];
      return (e && e.submenu ? e.submenu.items : []).filter(
        (e) => !Qe(e.role, "pasteandmatchstyle")
      );
    }
    function tt(e, t, r) {
      const n = rt(e, t);
      if (void 0 === r) return n;
      for (const e of r) n.append(e);
      return n;
    }
    function rt(e, t, r = []) {
      const n = new o.Menu();
      for (const [i, s] of e.entries())
        if (Qe(s.role, "editmenu")) for (const e of et()) n.append(e);
        else {
          const e = [...r, i];
          n.append(
            new o.MenuItem({
              label: s.label,
              type: s.type,
              enabled: s.enabled,
              role: s.role,
              click: () => t(e),
              submenu: s.submenu ? rt(s.submenu, t, e) : void 0,
            })
          );
        }
      return n;
    }
    class nt {
      subscribe;
      listeners = new Set();
      constructor(e) {
        this.subscribe = e;
      }
      addEventListener(e) {
        const t = 0 === this.listeners.size;
        this.listeners.add(e),
          t && this.subscribe((e) => this.listeners.forEach((t) => t(e)));
      }
      removeEventListener(e) {
        this.listeners.delete(e),
          0 === this.listeners.size && this.subscribe(null);
      }
    }
    class ot {
      subscribe;
      eventHandler;
      listeners = new Set();
      constructor(e, t) {
        (this.subscribe = e), (this.eventHandler = t);
      }
      addEventListener(e) {
        const t = 0 === this.listeners.size;
        this.listeners.add(e),
          t &&
            this.subscribe(async (e, t) => {
              t(await this.eventHandler([...this.listeners], e));
            });
      }
      removeEventListener(e) {
        this.listeners.delete(e),
          0 === this.listeners.size && this.subscribe(null);
      }
    }
    class it {
      onBeforeRedirect;
      onBeforeRequest;
      onBeforeSendHeaders;
      onCompleted;
      onErrorOccurred;
      onHeadersReceived;
      onResponseStarted;
      onSendHeaders;
      constructor(e) {
        (this.onBeforeRedirect = new nt(e.onBeforeRedirect.bind(e))),
          (this.onBeforeRequest = new ot(
            e.onBeforeRequest.bind(e),
            async (e, t) => {
              let r = {};
              for (const n of e)
                if (
                  ((r = await n(t)),
                  !0 === r.cancel || void 0 !== r.redirectURL)
                )
                  break;
              return r;
            }
          )),
          (this.onBeforeSendHeaders = new ot(
            e.onBeforeSendHeaders.bind(e),
            async (e, t) => {
              let r = t,
                n = {};
              for (const t of e) {
                if (((n = await t(r)), !0 === n.cancel)) break;
                if (void 0 !== n.requestHeaders) {
                  const e = st(n.requestHeaders);
                  r = { ...r, requestHeaders: e };
                }
              }
              return r;
            }
          )),
          (this.onCompleted = new nt(e.onCompleted.bind(e))),
          (this.onErrorOccurred = new nt(e.onErrorOccurred.bind(e))),
          (this.onHeadersReceived = new ot(
            e.onHeadersReceived.bind(e),
            async (e, t) => {
              let r = t,
                n = {};
              for (const t of e) {
                if (((n = await t(r)), !0 === n.cancel)) break;
                if (void 0 !== n.responseHeaders) {
                  const e = at(n.responseHeaders);
                  r = { ...r, responseHeaders: e };
                }
                if (void 0 !== n.statusLine) {
                  const { statusLine: e } = n,
                    t = parseInt(e.split(" ", 2)[1], 10);
                  r = { ...r, statusLine: e, statusCode: t };
                }
              }
              return r;
            }
          )),
          (this.onResponseStarted = new nt(e.onResponseStarted.bind(e))),
          (this.onSendHeaders = new nt(e.onSendHeaders.bind(e)));
      }
    }
    const st = (e) =>
        Object.entries(e).reduce(
          (e, [t, r]) => ((e[t] = Array.isArray(r) ? r.join(",") : r), e),
          {}
        ),
      at = (e) =>
        Object.entries(e).reduce(
          (e, [t, r]) => ((e[t] = Array.isArray(r) ? r : r.split(",")), e),
          {}
        );
    function lt(e, t) {
      return (...r) => (
        (r = r.length !== t ? r.slice(0, t) : r),
        (function (e, ...t) {
          return o.ipcRenderer.invoke(e, ...t);
        })(e, ...r)
      );
    }
    function ct(e, t) {
      return (...r) => {
        (r = r.length !== t ? r.slice(0, t) : r),
          (function (e, ...t) {
            o.ipcRenderer.send(e, ...t);
          })(e, ...r);
      };
    }
    var ut, dt;
    ct("select-all-window-contents", 0),
      ct("update-menu-state", 1),
      ct("renderer-ready", 1),
      ct("execute-menu-item-by-id", 1),
      lt("is-window-focused", 0),
      ct("focus-window", 0),
      lt("show-item-in-folder", 1),
      ct("unsafe-open-directory", 1),
      lt("open-external", 1),
      lt("move-to-trash", 1),
      lt("get-current-window-state", 0),
      lt("get-current-window-zoom-factor", 0),
      ct("set-window-zoom-factor", 1),
      lt("check-for-updates", 1),
      ct("quit-and-install-updates", 0),
      ct("quit-app", 0),
      ct("set-native-theme-source", 1),
      lt("should-use-dark-colors", 0),
      ct("minimize-window", 0),
      ct("maximize-window", 0),
      ct("unmaximize-window", 0),
      ct("close-window", 0),
      lt("is-window-maximized", 0),
      lt("get-apple-action-on-double-click", 0),
      ct("show-certificate-trust-dialog", 2),
      lt("get-path", 1),
      lt("get-app-architecture", 0),
      lt("get-app-path", 0),
      lt("is-running-under-arm64-translation", 0),
      lt("move-to-applications-folder", 0),
      ct("get-app-menu", 0),
      lt("show-contextual-menu", 2),
      ct("update-preferred-app-menu-item-labels", 1),
      ct("uncaught-exception", 1),
      ct("send-error-report", 3),
      ct("update-accounts", 1),
      lt("resolve-proxy", 1),
      lt("is-in-application-folder", 0),
      lt("show-save-dialog", 1),
      lt("show-open-dialog", 1),
      lt("save-guid", 1),
      lt("get-guid", 0),
      lt("show-notification", 3),
      lt("get-notifications-permission", 0),
      lt("request-notifications-permission", 0),
      Error,
      ((dt = ut || (ut = {}))[(dt.Sms = 0)] = "Sms"),
      (dt[(dt.App = 1)] = "App"),
      r(4515);
    var ft = r(7891);
    const ht = new ft.SemVer("3.1.0"),
      pt = new ft.SemVer("3.2.0"),
      mt = (new Map(), new Map()),
      gt = (e) => e === jt(),
      vt = (e) => /^https:\/\/[a-z0-9-]+\.ghe\.com$/i.test(e);
    function yt(e) {
      const t = `endpoint-version:${e}`,
        r = mt.get(t);
      if (void 0 !== r) return r;
      const n = localStorage.getItem(t),
        o = null === n ? null : ft.parse(n);
      return null !== o && mt.set(t, o), o;
    }
    function wt(e, t, r) {
      return (
        !1 !== e &&
        (!0 === e
          ? t
          : (null == r && G("Need to provide a version to compare against"),
            t && ft.satisfies(r, e)))
      );
    }
    const bt =
        ({ dotcom: e, ae: t, es: r }, n = yt) =>
        (o) =>
          wt(e, gt(o)) ||
          wt(t, vt(o), pt) ||
          wt(r, ((e) => !gt(e) && !vt(e))(o), n(o) ?? ht),
      _t =
        (bt({ dotcom: !1, ae: ">= 3.0.0", es: ">= 3.0.0" }),
        bt({ dotcom: !0, ae: ">= 3.4.0", es: ">= 3.4.0" }),
        bt({ dotcom: !0, ae: !1, es: !1 }),
        bt({ dotcom: !0, ae: !1, es: !1 }),
        bt({ dotcom: !0, ae: !1, es: !1 }),
        bt({ dotcom: !0, ae: !1, es: !1 }),
        process.env.DESKTOP_GITHUB_DOTCOM_API_ENDPOINT),
      Et = process.env.DESKTOP_GITHUB_DOTCOM_HTML_URL,
      St = process.env.DESKTOP_GITHUB_DOTCOM_ADDITIONAL_COOKIES;
    void 0 !== St && (document.cookie += "; " + St);
    var xt, Ot, Ct, Rt, Mt, At;
    function jt() {
      return _t && _t.length > 0 ? _t : "https://api.github.com";
    }
    ("de0e3c7e9973e1c4dd77".length &&
      "1273305a5fc2737c2ca2911948ba24a9d961e2a3".length) ||
      log.warn(
        "DESKTOP_OAUTH_CLIENT_ID and/or DESKTOP_OAUTH_CLIENT_SECRET is undefined. You won't be able to authenticate new users."
      ),
      (function (e) {
        (e[(e.NotModified = 304)] = "NotModified"),
          (e[(e.NotFound = 404)] = "NotFound");
      })(xt || (xt = {})),
      Error,
      (function (e) {
        (e.Queued = "queued"),
          (e.InProgress = "in_progress"),
          (e.Completed = "completed");
      })(Ot || (Ot = {})),
      (function (e) {
        (e.ActionRequired = "action_required"),
          (e.Canceled = "cancelled"),
          (e.TimedOut = "timed_out"),
          (e.Failure = "failure"),
          (e.Neutral = "neutral"),
          (e.Success = "success"),
          (e.Skipped = "skipped"),
          (e.Stale = "stale");
      })(Ct || (Ct = {})),
      (function (e) {
        (e.Creation = "creation"),
          (e.Update = "update"),
          (e.RequiredDeployments = "required_deployments"),
          (e.RequiredSignatures = "required_signatures"),
          (e.RequiredStatusChecks = "required_status_checks"),
          (e.PullRequest = "pull_request"),
          (e.CommitMessagePattern = "commit_message_pattern"),
          (e.CommitAuthorEmailPattern = "commit_author_email_pattern"),
          (e.CommitterEmailPattern = "committer_email_pattern"),
          (e.BranchNamePattern = "branch_name_pattern");
      })(Rt || (Rt = {})),
      (function (e) {
        (e.StartsWith = "starts_with"),
          (e.EndsWith = "ends_with"),
          (e.Contains = "contains"),
          (e.RegexMatch = "regex");
      })(Mt || (Mt = {})),
      new B.Emitter(),
      (function (e) {
        (e[(e.Authorized = 0)] = "Authorized"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.TwoFactorAuthenticationRequired = 2)] =
            "TwoFactorAuthenticationRequired"),
          (e[(e.UserRequiresVerification = 3)] = "UserRequiresVerification"),
          (e[(e.PersonalAccessTokenBlocked = 4)] =
            "PersonalAccessTokenBlocked"),
          (e[(e.Error = 5)] = "Error"),
          (e[(e.EnterpriseTooOld = 6)] = "EnterpriseTooOld"),
          (e[(e.WebFlowRequired = 7)] = "WebFlowRequired");
      })(At || (At = {}));
    const kt = "Set spellcheck to English",
      Tt = "Set spellcheck to system language";
    o.app.setAppLogsPath(),
      (function () {
        A.install({
          environment: "node",
          handleUncaughtExceptions: !1,
          retrieveSourceMap: T,
        });
        const e = Error;
        (N = e.prepareStackTrace), (e.prepareStackTrace = P);
      })();
    let Lt = null;
    const Nt = V();
    let Pt = !1,
      Dt = null,
      $t = [];
    function It(e) {
      Pt = !0;
      const t = null === Lt;
      Lt && (Lt.destroy(), (Lt = null)),
        (function (e, t) {
          if ((log.error(I(t)), Xe)) return;
          (Xe = !0),
            (function () {
              const e = o.Menu.getApplicationMenu();
              if (e) for (const t of e.items) ge(t);
            })();
          const r = new Je(e ? "launch" : "generic", t);
          r.onDidLoad(() => {
            r.show();
          }),
            r.onFailedToLoad(async () => {
              await o.dialog.showMessageBox({
                type: "error",
                title: "Unrecoverable error",
                message: `GitHub Desktop has encountered an unrecoverable error and will need to restart.\n\nThis has been reported to the team, but if you encounter this repeatedly please report this issue to the GitHub Desktop issue tracker.\n\n${
                  t.stack || t.message
                }`,
              }),
                o.app.relaunch(),
                o.app.quit();
            }),
            r.onClose(() => {
              o.app.relaunch(), o.app.quit();
            }),
            r.load();
        })(t, e);
    }
    function Ft() {
      return {
        uptime: ((V() - Nt) / 1e3).toFixed(3),
        time: new Date().toString(),
      };
    }
    const Bt = "--protocol-launcher",
      Ut = new Set(["x-github-client"]);
    Ut.add("x-github-desktop-auth"),
      Ut.add("github-windows"),
      o.app.on("window-all-closed", () => {}),
      process.on("uncaughtException", (e) => {
        Ze((e = D(e)), Ft()), It(e);
      });
    let Ht = !1;
    if (process.argv.length > 1) {
      const e = process.argv[1],
        r = (function (e) {
          switch (e) {
            case "--squirrel-install":
              return (async function () {
                await Ie(["StartMenu", "Desktop"]), await Ne();
              })();
            case "--squirrel-updated":
              return (async function () {
                await (async function () {
                  const e = y.homedir();
                  if (e) {
                    const n = t.join(e, "Desktop", "GitHub Desktop.lnk");
                    return Ie(
                      (await ((r = n),
                      (0, g.access)(r).then(Ae()(!0), Ae()(!1))))
                        ? ["StartMenu", "Desktop"]
                        : ["StartMenu"]
                    );
                  }
                  var r;
                  return Ie(["StartMenu", "Desktop"]);
                })(),
                  await Ne();
              })();
            case "--squirrel-uninstall":
              return (async function () {
                await $e(["--removeShortcut", Le]);
                try {
                  const e = Oe(),
                    t = Pe();
                  return Ce(e.filter((e) => e !== t));
                } catch (e) {
                  log.error(
                    "Failed removing bin path from PATH environment variable",
                    e
                  );
                }
              })();
            case "--squirrel-obsolete":
              return Promise.resolve();
          }
          return null;
        })(e);
      r
        ? ((Ht = !0),
          r
            .catch((t) => {
              log.error(`Failed handling Squirrel event: ${e}`, t);
            })
            .then(() => {
              o.app.quit();
            }))
        : Gt(process.argv);
    }
    function qt(e) {
      log.info("Processing protocol url");
      const t = (function (e) {
        const t = j.parse(e, !0),
          r = t.hostname,
          n = { name: "unknown", url: e };
        if (!r) return n;
        const o = t.query,
          i = r.toLowerCase();
        if ("oauth" === i) {
          const e = Se(o, "code"),
            t = Se(o, "state");
          return null != e && null != t
            ? { name: "oauth", code: e, state: t }
            : n;
        }
        const s = t.pathname;
        if (!s || s.length <= 1) return n;
        const a = s.substring(1);
        if ("openrepo" === i) {
          const e = Se(o, "pr"),
            t = Se(o, "branch"),
            r = Se(o, "filepath");
          if (null != e) {
            if (!/^\d+$/.test(e)) return n;
            if (null != t && !/^pr\/\d+$/.test(t)) return n;
          }
          return null != t && ((l = t), Ee.test(l))
            ? n
            : {
                name: "open-repository-from-url",
                url: a,
                branch: t,
                pr: e,
                filepath: r,
              };
        }
        var l;
        return "openlocalrepo" === i
          ? { name: "open-repository-from-path", path: decodeURIComponent(a) }
          : n;
      })(e);
      Wt((e) => {
        e.focus(), e.sendURLAction(t);
      });
    }
    void 0 === oe &&
      ((oe = (function () {
        const e = [
          t.join(
            y.homedir(),
            "AppData",
            "Roaming",
            "Microsoft",
            "Windows",
            "Start Menu",
            "Programs",
            "GitHub, Inc",
            "GitHub Desktop.lnk"
          ),
          t.join(y.homedir(), "Desktop", "GitHub Desktop.lnk"),
        ];
        for (const t of e) {
          const e = ne(t);
          if (void 0 !== e) return e;
        }
      })()),
      void 0 === oe &&
        (log.error(
          "Toast activator CLSID not found in any of the shortcuts. Falling back to known CLSIDs."
        ),
        (oe = "{27D44D0C-A542-5B90-BCDB-AC3126048BA2}")),
      log.info(`Using toast activator CLSID ${oe}`),
      (0, re._R)({ toastActivatorClsid: oe }));
    let zt = !1;
    if (!Ht) {
      const e = o.app.requestSingleInstanceLock();
      (zt = !e),
        o.app.on("second-instance", (e, t, r) => {
          Lt &&
            (Lt.isMinimized() && Lt.restore(),
            Lt.isVisible() || Lt.show(),
            Lt.focus()),
            Gt(t);
        }),
        zt && o.app.quit();
    }
    function Gt(e) {
      log.info(`Received possible protocol arguments: ${e.length}`);
      {
        const t = e.filter((e) => {
          try {
            const t = j.parse(e);
            return t.protocol && Ut.has(t.protocol.slice(0, -1));
          } catch (t) {
            return log.error(`Unable to parse argument as URL: ${e}`), !1;
          }
        });
        e.includes(Bt) && 1 === t.length
          ? qt(t[0])
          : log.error(`Malformed launch arguments received: ${e}`);
      }
    }
    function Wt(e) {
      $t ? $t.push(e) : Lt && e(Lt);
    }
    (function (e) {
      return "browser" === e.type && _e(), !1;
    })(process) && (async function () {})(),
      o.app.on("will-finish-launching", () => {
        o.app.on("open-url", (e, t) => {
          e.preventDefault(), qt(t);
        });
      }),
      process.env.GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION &&
        (log.info(
          "GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION environment variable set, disabling hardware acceleration"
        ),
        o.app.disableHardwareAcceleration()),
      o.app.on("ready", () => {
        if (zt || Ht) return;
        (Dt = V() - Nt),
          Ut.forEach((e) =>
            (function (e) {
              o.app.setAsDefaultProtocolClient(e, process.execPath, [Bt]);
            })(e)
          ),
          (function () {
            const e = new ie();
            e.onClosed(() => {
              (Lt = null), Pt || o.app.quit();
            }),
              e.onDidLoad(() => {
                e.show(),
                  e.sendLaunchTimingStats({
                    mainReadyTime: Dt,
                    loadTime: e.loadTime,
                    rendererReadyTime: e.rendererReadyTime,
                  });
                const t = $t;
                $t = null;
                for (const r of t) r(e);
              }),
              e.load(),
              (Lt = e);
          })();
        const e = new it(o.session.defaultSession.webRequest);
        !(function (e) {
          const t = new Map(),
            r = new Set(["devtools:", "file:", "chrome-extension:"]),
            n = new Set(["authentication", "authorization", "cookie"]);
          e.onBeforeRequest.addEventListener(async (e) => {
            const { protocol: n, origin: o } = new URL(e.url);
            return r.has(n) || t.has(e.id) || t.set(e.id, o), {};
          }),
            e.onBeforeSendHeaders.addEventListener(async (e) => {
              const r = t.get(e.id),
                { origin: o } = new URL(e.url);
              if (void 0 === r || r === o)
                return { requestHeaders: e.requestHeaders };
              const i = {};
              for (const [t, r] of Object.entries(e.requestHeaders))
                n.has(t.toLowerCase()) || (i[t] = r);
              return (
                log.debug(`Sanitizing cross-origin redirect to ${o}`),
                { requestHeaders: i }
              );
            }),
            e.onCompleted.addEventListener((e) => t.delete(e.id));
        })(e),
          (function (e) {
            e.onBeforeSendHeaders.addEventListener(async (e) => {
              const { protocol: t, host: r } = new URL(e.url);
              return "wss:" === t && /(^|\.)github\.com$/.test(r)
                ? {
                    requestHeaders: {
                      ...e.requestHeaders,
                      Origin: "https://desktop.github.com",
                    },
                  }
                : {};
            });
          })(e);
        const t = (function (e) {
          let t = new Map();
          return (
            e.onBeforeSendHeaders.addEventListener(async (e) => {
              const { origin: r, pathname: n } = new URL(e.url),
                o = t.get(r);
              return o &&
                ((function (e) {
                  return e.startsWith("/api/v3/enterprise/avatars/");
                })(n) ||
                  (function (e) {
                    return /^\/[^/]+\/[^/]+\/assets\/[^/]+\/[^/]+\/?$/.test(e);
                  })(n))
                ? {
                    requestHeaders: {
                      ...e.requestHeaders,
                      Authorization: `token ${o}`,
                    },
                  }
                : {};
            }),
            (e) => {
              t = new Map(
                e.map(({ endpoint: e, token: t }) => [new URL(e).origin, t])
              );
              const r = jt(),
                n = t.get(r);
              n &&
                t.set(
                  (function (e) {
                    if (void 0 !== Et) return Et;
                    if (e !== jt() || _t) {
                      const t = j.parse(e);
                      return `${t.protocol}//${t.hostname}`;
                    }
                    return "https://github.com";
                  })(r),
                  n
                );
            }
          );
        })(e);
        o.Menu.setApplicationMenu(
          ue({
            selectedShell: null,
            selectedExternalEditor: null,
            askForConfirmationOnRepositoryRemoval: !1,
            askForConfirmationOnForcePush: !1,
          })
        ),
          Q("update-accounts", (e, r) => t(r)),
          Q("update-preferred-app-menu-item-labels", (e, t) => {
            const r = ue(t),
              n = o.Menu.getApplicationMenu();
            if (null === n)
              return (
                o.Menu.setApplicationMenu(r),
                void (null !== Lt && Lt.sendAppMenu())
              );
            let i = !1;
            for (const e of ve(r)) {
              const t = e.id;
              if (!t) continue;
              const r = n.getMenuItemById(t);
              r
                ? (r.label !== e.label && (i = !0),
                  r.enabled !== e.enabled &&
                    ((e.enabled = r.enabled), (i = !0)))
                : (i = !0);
            }
            i && Lt && (o.Menu.setApplicationMenu(r), Lt.sendAppMenu());
          }),
          Q("execute-menu-item-by-id", (e, t) => {
            const r = o.Menu.getApplicationMenu();
            if (null === r) return;
            const n = r.getMenuItemById(t);
            if (n) {
              const t = o.BrowserWindow.fromWebContents(e.sender) || void 0,
                r = { preventDefault: () => {}, sender: e.sender };
              n.click(r, t, e.sender);
            }
          }),
          Q("update-menu-state", (e, t) => {
            let r = !1;
            const n = o.Menu.getApplicationMenu();
            if (null !== n) {
              for (const e of t) {
                const { id: t, state: o } = e,
                  i = n.getMenuItemById(t);
                i
                  ? void 0 !== o.enabled &&
                    i.enabled !== o.enabled &&
                    ((i.enabled = o.enabled), (r = !0))
                  : G(`Unknown menu id: ${t}`);
              }
              r && Lt && (o.Menu.setApplicationMenu(n), Lt.sendAppMenu());
            } else log.debug("unable to get current menu, bailing out...");
          }),
          ee(
            "show-contextual-menu",
            (e, t, r) =>
              new Promise(async (n) => {
                const i = o.BrowserWindow.fromWebContents(e.sender) || void 0,
                  s = r
                    ? await (async function (e) {
                        if (void 0 !== e)
                          return new Promise((t) => {
                            e.webContents.once("context-menu", (r, n) =>
                              t(
                                (function (e, t, r) {
                                  const {
                                    misspelledWord: n,
                                    dictionarySuggestions: i,
                                  } = t;
                                  if (!n && 0 === i.length) return;
                                  const s = new Array();
                                  s.push(new o.MenuItem({ type: "separator" }));
                                  for (const e of i)
                                    s.push(
                                      new o.MenuItem({
                                        label: e,
                                        click: () => r.replaceMisspelling(e),
                                      })
                                    );
                                  n &&
                                    s.push(
                                      new o.MenuItem({
                                        label: "Add to dictionary",
                                        click: () =>
                                          r.session.addWordToSpellCheckerDictionary(
                                            n
                                          ),
                                      })
                                    );
                                  {
                                    const { session: e } = r,
                                      t = (function (e, t, r) {
                                        const n = "en-US";
                                        if (
                                          (e === n && t.includes(n)) ||
                                          !r.includes(e)
                                        )
                                          return null;
                                        const o =
                                          t.includes(n) && !t.includes(e)
                                            ? e
                                            : n;
                                        return {
                                          label: o === n ? kt : Tt,
                                          languages: [o],
                                        };
                                      })(
                                        o.app.getLocale(),
                                        e.getSpellCheckerLanguages(),
                                        e.availableSpellCheckerLanguages
                                      );
                                    null !== t &&
                                      s.push(
                                        new o.MenuItem({
                                          label: t.label,
                                          click: () =>
                                            e.setSpellCheckerLanguages(
                                              t.languages
                                            ),
                                        })
                                      );
                                  }
                                  return s;
                                })(0, n, e.webContents)
                              )
                            );
                          });
                      })(i)
                    : void 0;
                tt(t, (e) => n(e), s).popup({
                  window: i,
                  callback: () => n(null),
                });
              })
          ),
          ee("check-for-updates", async (e, t) => Lt?.checkForUpdates(t)),
          Q("quit-and-install-updates", () => Lt?.quitAndInstallUpdate()),
          Q("quit-app", () => o.app.quit()),
          Q("minimize-window", () => Lt?.minimizeWindow()),
          Q("maximize-window", () => Lt?.maximizeWindow()),
          Q("unmaximize-window", () => Lt?.unmaximizeWindow()),
          Q("close-window", () => Lt?.closeWindow()),
          ee("is-window-maximized", async () => Lt?.isMaximized() ?? !1),
          ee("get-apple-action-on-double-click", async () =>
            o.systemPreferences.getUserDefault(
              "AppleActionOnDoubleClick",
              "string"
            )
          ),
          ee("get-current-window-state", async () =>
            Lt?.getCurrentWindowState()
          ),
          ee("get-current-window-zoom-factor", async () =>
            Lt?.getCurrentWindowZoomFactor()
          ),
          Q("set-window-zoom-factor", (e, t) => Lt?.setWindowZoomFactor(t)),
          Q("get-app-menu", () => Lt?.sendAppMenu()),
          Q("show-certificate-trust-dialog", (e, t, r) => {
            Wt((e) => {
              e.showCertificateTrustDialog(t, r);
            });
          }),
          Q("log", (e, t, r) => M(t, r)),
          Q("uncaught-exception", (e, t) => It(t)),
          Q("send-error-report", (e, t, r, n) => {
            Ze(t, { ...Ft(), ...r }, n);
          }),
          ee("open-external", async (e, t) => {
            const r = t.toLowerCase();
            (r.startsWith("http://") || r.startsWith("https://")) &&
              log.info(`opening in browser: ${t}`);
            try {
              return await o.shell.openExternal(t), !0;
            } catch (e) {
              return log.error(`Call to openExternal failed: '${e}'`), !1;
            }
          }),
          ee("get-path", async (e, t) => o.app.getPath(t)),
          ee("get-app-architecture", async () => Fe(o.app)),
          ee("get-app-path", async () => o.app.getAppPath()),
          ee("is-running-under-arm64-translation", async () => Be(o.app)),
          ee("move-to-applications-folder", async () => {
            o.app.moveToApplicationsFolder?.();
          }),
          ee("move-to-trash", (e, t) => o.shell.trashItem(t)),
          ee("show-item-in-folder", async (e, t) =>
            o.shell.showItemInFolder(t)
          ),
          Q("unsafe-open-directory", async (e, t) => le(t)),
          Q("select-all-window-contents", () => Lt?.selectAllWindowContents()),
          ee(
            "is-in-application-folder",
            async () => o.app.isInApplicationsFolder?.() ?? null
          ),
          ee("resolve-proxy", async (e, t) =>
            o.session.defaultSession.resolveProxy(t)
          ),
          ee("show-save-dialog", async (e, t) => Lt?.showSaveDialog(t) ?? null),
          ee("show-open-dialog", async (e, t) => Lt?.showOpenDialog(t) ?? null),
          ee("is-window-focused", async () => Lt?.isFocused() ?? !1),
          Q("focus-window", () => {
            Lt?.focus();
          }),
          Q("set-native-theme-source", (e, t) => {
            o.nativeTheme.themeSource = t;
          }),
          ee(
            "should-use-dark-colors",
            async () => o.nativeTheme.shouldUseDarkColors
          ),
          ee("get-guid", () => We()),
          ee("save-guid", (e, t) => Ye(t)),
          ee("show-notification", async (e, t, r, n) => (0, re.c0)(t, r, n)),
          ee("get-notifications-permission", async () => (0, re.X)()),
          ee("request-notifications-permission", async () => (0, re.QJ)());
      }),
      o.app.on("activate", () => {
        Wt((e) => {
          e.show();
        });
      }),
      o.app.on("web-contents-created", (e, t) => {
        t.setWindowOpenHandler(
          ({ url: e }) => (
            log.warn(`Prevented new window to: ${e}`), { action: "deny" }
          )
        ),
          t.on("will-navigate", (e, t) => {
            e.preventDefault(), log.warn(`Prevented navigation to: ${t}`);
          });
      }),
      o.app.on("certificate-error", (e, t, r, n, o, i) => {
        i(!1),
          Wt((e) => {
            e.sendCertificateError(o, n, r);
          });
      });
  })(),
    (module.exports.main = n);
})();
//# sourceMappingURL=main.js.map
