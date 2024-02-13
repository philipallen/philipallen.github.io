import { r as T, a as we } from "./index-c013ead5.js";
import { g as jr, c as J } from "./commonjsHelpers-725317a4.js";
import {
  _ as be,
  a as Hr,
  b as Nr,
  c as Rr,
} from "./isNativeReflectConstruct-81b4d0cb.js";
import {
  r as Ze,
  B as Mr,
  C as Fr,
  z as Ye,
  D as Qe,
  E as qr,
  i as ye,
  F as Je,
  G as Pr,
  H as zr,
  I as Br,
  J as Ur,
  v as Dr,
  l as Ve,
  _ as Gr,
  K as Wr,
  L as Kr,
  f as ve,
  k as er,
  M as rr,
  N as tr,
  c as Xr,
  g as Zr,
  b as Yr,
  j as Qr,
} from "./doctrine-744fe685.js";
var Jr = function (r) {
    return r();
  },
  nr = we["useInsertionEffect"] ? we["useInsertionEffect"] : !1,
  ro = nr || Jr,
  to = nr || T.useLayoutEffect;
function B(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var ar = { exports: {} };
(function (e, r) {
  (function (t) {
    e.exports = t();
  })(function () {
    return (function t(a, i, c) {
      function l(f, b) {
        if (!i[f]) {
          if (!a[f]) {
            var g = typeof B == "function" && B;
            if (!b && g) return g(f, !0);
            if (u) return u(f, !0);
            var v = new Error("Cannot find module '" + f + "'");
            throw ((v.code = "MODULE_NOT_FOUND"), v);
          }
          var n = (i[f] = { exports: {} });
          a[f][0].call(
            n.exports,
            function (o) {
              var s = a[f][1][o];
              return l(s || o);
            },
            n,
            n.exports,
            t,
            a,
            i,
            c
          );
        }
        return i[f].exports;
      }
      for (var u = typeof B == "function" && B, p = 0; p < c.length; p++)
        l(c[p]);
      return l;
    })(
      {
        1: [
          function (t, a, i) {
            a.exports = function (c) {
              if (typeof Map != "function" || c) {
                var l = t("./similar");
                return new l();
              } else return new Map();
            };
          },
          { "./similar": 2 },
        ],
        2: [
          function (t, a, i) {
            function c() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (c.prototype.get = function (l) {
              var u;
              if (this.lastItem && this.isEqual(this.lastItem.key, l))
                return this.lastItem.val;
              if (((u = this.indexOf(l)), u >= 0))
                return (this.lastItem = this.list[u]), this.list[u].val;
            }),
              (c.prototype.set = function (l, u) {
                var p;
                return this.lastItem && this.isEqual(this.lastItem.key, l)
                  ? ((this.lastItem.val = u), this)
                  : ((p = this.indexOf(l)),
                    p >= 0
                      ? ((this.lastItem = this.list[p]),
                        (this.list[p].val = u),
                        this)
                      : ((this.lastItem = { key: l, val: u }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (c.prototype.delete = function (l) {
                var u;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, l) &&
                    (this.lastItem = void 0),
                  (u = this.indexOf(l)),
                  u >= 0)
                )
                  return this.size--, this.list.splice(u, 1)[0];
              }),
              (c.prototype.has = function (l) {
                var u;
                return this.lastItem && this.isEqual(this.lastItem.key, l)
                  ? !0
                  : ((u = this.indexOf(l)),
                    u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1);
              }),
              (c.prototype.forEach = function (l, u) {
                var p;
                for (p = 0; p < this.size; p++)
                  l.call(u || this, this.list[p].val, this.list[p].key, this);
              }),
              (c.prototype.indexOf = function (l) {
                var u;
                for (u = 0; u < this.size; u++)
                  if (this.isEqual(this.list[u].key, l)) return u;
                return -1;
              }),
              (c.prototype.isEqual = function (l, u) {
                return l === u || (l !== l && u !== u);
              }),
              (a.exports = c);
          },
          {},
        ],
        3: [
          function (t, a, i) {
            var c = t("map-or-similar");
            a.exports = function (f) {
              var b = new c(!1),
                g = [];
              return function (v) {
                var n = function () {
                  var o = b,
                    s,
                    y,
                    d = arguments.length - 1,
                    h = Array(d + 1),
                    m = !0,
                    x;
                  if ((n.numArgs || n.numArgs === 0) && n.numArgs !== d + 1)
                    throw new Error(
                      "Memoizerific functions should always be called with the same number of arguments"
                    );
                  for (x = 0; x < d; x++) {
                    if (
                      ((h[x] = { cacheItem: o, arg: arguments[x] }),
                      o.has(arguments[x]))
                    ) {
                      o = o.get(arguments[x]);
                      continue;
                    }
                    (m = !1), (s = new c(!1)), o.set(arguments[x], s), (o = s);
                  }
                  return (
                    m &&
                      (o.has(arguments[d])
                        ? (y = o.get(arguments[d]))
                        : (m = !1)),
                    m ||
                      ((y = v.apply(null, arguments)), o.set(arguments[d], y)),
                    f > 0 &&
                      ((h[d] = { cacheItem: o, arg: arguments[d] }),
                      m ? l(g, h) : g.push(h),
                      g.length > f && u(g.shift())),
                    (n.wasMemoized = m),
                    (n.numArgs = d + 1),
                    y
                  );
                };
                return (
                  (n.limit = f),
                  (n.wasMemoized = !1),
                  (n.cache = b),
                  (n.lru = g),
                  n
                );
              };
            };
            function l(f, b) {
              var g = f.length,
                v = b.length,
                n,
                o,
                s;
              for (o = 0; o < g; o++) {
                for (n = !0, s = 0; s < v; s++)
                  if (!p(f[o][s].arg, b[s].arg)) {
                    n = !1;
                    break;
                  }
                if (n) break;
              }
              f.push(f.splice(o, 1)[0]);
            }
            function u(f) {
              var b = f.length,
                g = f[b - 1],
                v,
                n;
              for (
                g.cacheItem.delete(g.arg), n = b - 2;
                n >= 0 &&
                ((g = f[n]), (v = g.cacheItem.get(g.arg)), !v || !v.size);
                n--
              )
                g.cacheItem.delete(g.arg);
            }
            function p(f, b) {
              return f === b || (f !== f && b !== b);
            }
          },
          { "map-or-similar": 1 },
        ],
      },
      {},
      [3]
    )(3);
  });
})(ar);
var Vr = ar.exports;
const no = jr(Vr);
function et(e, r) {
  var t = T.useRef(null),
    a = T.useRef(null);
  a.current = r;
  var i = T.useRef(null);
  T.useEffect(function () {
    c();
  });
  var c = T.useCallback(
    function () {
      var l = i.current,
        u = a.current,
        p = l || (u ? (u instanceof Element ? u : u.current) : null);
      (t.current && t.current.element === p && t.current.subscriber === e) ||
        (t.current && t.current.cleanup && t.current.cleanup(),
        (t.current = {
          element: p,
          subscriber: e,
          cleanup: p ? e(p) : void 0,
        }));
    },
    [e]
  );
  return (
    T.useEffect(function () {
      return function () {
        t.current &&
          t.current.cleanup &&
          (t.current.cleanup(), (t.current = null));
      };
    }, []),
    T.useCallback(
      function (l) {
        (i.current = l), c();
      },
      [c]
    )
  );
}
function $e(e, r, t) {
  return e[r]
    ? e[r][0]
      ? e[r][0][t]
      : e[r][t]
    : r === "contentBoxSize"
    ? e.contentRect[t === "inlineSize" ? "width" : "height"]
    : void 0;
}
function ao(e) {
  e === void 0 && (e = {});
  var r = e.onResize,
    t = T.useRef(void 0);
  t.current = r;
  var a = e.round || Math.round,
    i = T.useRef(),
    c = T.useState({ width: void 0, height: void 0 }),
    l = c[0],
    u = c[1],
    p = T.useRef(!1);
  T.useEffect(function () {
    return (
      (p.current = !1),
      function () {
        p.current = !0;
      }
    );
  }, []);
  var f = T.useRef({ width: void 0, height: void 0 }),
    b = et(
      T.useCallback(
        function (g) {
          return (
            (!i.current || i.current.box !== e.box || i.current.round !== a) &&
              (i.current = {
                box: e.box,
                round: a,
                instance: new ResizeObserver(function (v) {
                  var n = v[0],
                    o =
                      e.box === "border-box"
                        ? "borderBoxSize"
                        : e.box === "device-pixel-content-box"
                        ? "devicePixelContentBoxSize"
                        : "contentBoxSize",
                    s = $e(n, o, "inlineSize"),
                    y = $e(n, o, "blockSize"),
                    d = s ? a(s) : void 0,
                    h = y ? a(y) : void 0;
                  if (f.current.width !== d || f.current.height !== h) {
                    var m = { width: d, height: h };
                    (f.current.width = d),
                      (f.current.height = h),
                      t.current ? t.current(m) : p.current || u(m);
                  }
                }),
              }),
            i.current.instance.observe(g, { box: e.box }),
            function () {
              i.current && i.current.instance.unobserve(g);
            }
          );
        },
        [e.box, a]
      ),
      e.ref
    );
  return T.useMemo(
    function () {
      return { ref: b, width: l.width, height: l.height };
    },
    [b, l.width, l.height]
  );
}
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        }),
    F.apply(this, arguments)
  );
}
function rt(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    be(e, r);
}
function tt(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function U(e, r, t) {
  return (
    Hr()
      ? (U = Reflect.construct.bind())
      : (U = function (i, c, l) {
          var u = [null];
          u.push.apply(u, c);
          var p = Function.bind.apply(i, u),
            f = new p();
          return l && be(f, l.prototype), f;
        }),
    U.apply(null, arguments)
  );
}
function de(e) {
  var r = typeof Map == "function" ? new Map() : void 0;
  return (
    (de = function (a) {
      if (a === null || !tt(a)) return a;
      if (typeof a != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof r < "u") {
        if (r.has(a)) return r.get(a);
        r.set(a, i);
      }
      function i() {
        return U(a, arguments, Nr(this).constructor);
      }
      return (
        (i.prototype = Object.create(a.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        be(i, a)
      );
    }),
    de(e)
  );
}
var O = (function (e) {
  rt(r, e);
  function r(t) {
    var a;
    return (
      (a =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            t +
            " for more information."
        ) || this),
      Rr(a)
    );
  }
  return r;
})(de(Error));
function V(e) {
  return Math.round(e * 255);
}
function nt(e, r, t) {
  return V(e) + "," + V(r) + "," + V(t);
}
function z(e, r, t, a) {
  if ((a === void 0 && (a = nt), r === 0)) return a(t, t, t);
  var i = (((e % 360) + 360) % 360) / 60,
    c = (1 - Math.abs(2 * t - 1)) * r,
    l = c * (1 - Math.abs((i % 2) - 1)),
    u = 0,
    p = 0,
    f = 0;
  i >= 0 && i < 1
    ? ((u = c), (p = l))
    : i >= 1 && i < 2
    ? ((u = l), (p = c))
    : i >= 2 && i < 3
    ? ((p = c), (f = l))
    : i >= 3 && i < 4
    ? ((p = l), (f = c))
    : i >= 4 && i < 5
    ? ((u = l), (f = c))
    : i >= 5 && i < 6 && ((u = c), (f = l));
  var b = t - c / 2,
    g = u + b,
    v = p + b,
    n = f + b;
  return a(g, v, n);
}
var Te = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function at(e) {
  if (typeof e != "string") return e;
  var r = e.toLowerCase();
  return Te[r] ? "#" + Te[r] : e;
}
var it = /^#[a-fA-F0-9]{6}$/,
  st = /^#[a-fA-F0-9]{8}$/,
  ot = /^#[a-fA-F0-9]{3}$/,
  lt = /^#[a-fA-F0-9]{4}$/,
  ee = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  ct =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  ut =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  ft =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function X(e) {
  if (typeof e != "string") throw new O(3);
  var r = at(e);
  if (r.match(it))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
    };
  if (r.match(st)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t,
    };
  }
  if (r.match(ot))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
    };
  if (r.match(lt)) {
    var a = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: a,
    };
  }
  var i = ee.exec(r);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
    };
  var c = ct.exec(r.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha:
        parseFloat("" + c[4]) > 1
          ? parseFloat("" + c[4]) / 100
          : parseFloat("" + c[4]),
    };
  var l = ut.exec(r);
  if (l) {
    var u = parseInt("" + l[1], 10),
      p = parseInt("" + l[2], 10) / 100,
      f = parseInt("" + l[3], 10) / 100,
      b = "rgb(" + z(u, p, f) + ")",
      g = ee.exec(b);
    if (!g) throw new O(4, r, b);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10),
    };
  }
  var v = ft.exec(r.substring(0, 50));
  if (v) {
    var n = parseInt("" + v[1], 10),
      o = parseInt("" + v[2], 10) / 100,
      s = parseInt("" + v[3], 10) / 100,
      y = "rgb(" + z(n, o, s) + ")",
      d = ee.exec(y);
    if (!d) throw new O(4, r, y);
    return {
      red: parseInt("" + d[1], 10),
      green: parseInt("" + d[2], 10),
      blue: parseInt("" + d[3], 10),
      alpha:
        parseFloat("" + v[4]) > 1
          ? parseFloat("" + v[4]) / 100
          : parseFloat("" + v[4]),
    };
  }
  throw new O(5);
}
function dt(e) {
  var r = e.red / 255,
    t = e.green / 255,
    a = e.blue / 255,
    i = Math.max(r, t, a),
    c = Math.min(r, t, a),
    l = (i + c) / 2;
  if (i === c)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: l };
  var u,
    p = i - c,
    f = l > 0.5 ? p / (2 - i - c) : p / (i + c);
  switch (i) {
    case r:
      u = (t - a) / p + (t < a ? 6 : 0);
      break;
    case t:
      u = (a - r) / p + 2;
      break;
    default:
      u = (r - t) / p + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: f, lightness: l, alpha: e.alpha }
      : { hue: u, saturation: f, lightness: l }
  );
}
function ir(e) {
  return dt(X(e));
}
var pt = function (r) {
    return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6]
      ? "#" + r[1] + r[3] + r[5]
      : r;
  },
  pe = pt;
function H(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function re(e) {
  return H(Math.round(e * 255));
}
function ht(e, r, t) {
  return pe("#" + re(e) + re(r) + re(t));
}
function W(e, r, t) {
  return z(e, r, t, ht);
}
function gt(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return W(e, r, t);
  if (typeof e == "object" && r === void 0 && t === void 0)
    return W(e.hue, e.saturation, e.lightness);
  throw new O(1);
}
function mt(e, r, t, a) {
  if (
    typeof e == "number" &&
    typeof r == "number" &&
    typeof t == "number" &&
    typeof a == "number"
  )
    return a >= 1 ? W(e, r, t) : "rgba(" + z(e, r, t) + "," + a + ")";
  if (typeof e == "object" && r === void 0 && t === void 0 && a === void 0)
    return e.alpha >= 1
      ? W(e.hue, e.saturation, e.lightness)
      : "rgba(" + z(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new O(2);
}
function he(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return pe("#" + H(e) + H(r) + H(t));
  if (typeof e == "object" && r === void 0 && t === void 0)
    return pe("#" + H(e.red) + H(e.green) + H(e.blue));
  throw new O(6);
}
function xe(e, r, t, a) {
  if (typeof e == "string" && typeof r == "number") {
    var i = X(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + r + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof r == "number" &&
      typeof t == "number" &&
      typeof a == "number"
    )
      return a >= 1
        ? he(e, r, t)
        : "rgba(" + e + "," + r + "," + t + "," + a + ")";
    if (typeof e == "object" && r === void 0 && t === void 0 && a === void 0)
      return e.alpha >= 1
        ? he(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new O(7);
}
var bt = function (r) {
    return (
      typeof r.red == "number" &&
      typeof r.green == "number" &&
      typeof r.blue == "number" &&
      (typeof r.alpha != "number" || typeof r.alpha > "u")
    );
  },
  yt = function (r) {
    return (
      typeof r.red == "number" &&
      typeof r.green == "number" &&
      typeof r.blue == "number" &&
      typeof r.alpha == "number"
    );
  },
  vt = function (r) {
    return (
      typeof r.hue == "number" &&
      typeof r.saturation == "number" &&
      typeof r.lightness == "number" &&
      (typeof r.alpha != "number" || typeof r.alpha > "u")
    );
  },
  xt = function (r) {
    return (
      typeof r.hue == "number" &&
      typeof r.saturation == "number" &&
      typeof r.lightness == "number" &&
      typeof r.alpha == "number"
    );
  };
function sr(e) {
  if (typeof e != "object") throw new O(8);
  if (yt(e)) return xe(e);
  if (bt(e)) return he(e);
  if (xt(e)) return mt(e);
  if (vt(e)) return gt(e);
  throw new O(8);
}
function or(e, r, t) {
  return function () {
    var i = t.concat(Array.prototype.slice.call(arguments));
    return i.length >= r ? e.apply(this, i) : or(e, r, i);
  };
}
function Z(e) {
  return or(e, e.length, []);
}
function Y(e, r, t) {
  return Math.max(e, Math.min(r, t));
}
function kt(e, r) {
  if (r === "transparent") return r;
  var t = ir(r);
  return sr(F({}, t, { lightness: Y(0, 1, t.lightness - parseFloat(e)) }));
}
var St = Z(kt),
  io = St;
function Ct(e, r) {
  if (r === "transparent") return r;
  var t = ir(r);
  return sr(F({}, t, { lightness: Y(0, 1, t.lightness + parseFloat(e)) }));
}
var It = Z(Ct),
  so = It;
function wt(e, r) {
  if (r === "transparent") return r;
  var t = X(r),
    a = typeof t.alpha == "number" ? t.alpha : 1,
    i = F({}, t, { alpha: Y(0, 1, (a * 100 + parseFloat(e) * 100) / 100) });
  return xe(i);
}
var $t = Z(wt),
  oo = $t;
function Tt(e, r) {
  if (r === "transparent") return r;
  var t = X(r),
    a = typeof t.alpha == "number" ? t.alpha : 1,
    i = F({}, t, {
      alpha: Y(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return xe(i);
}
var At = Z(Tt),
  lo = At,
  _t = Ze,
  Ot = Mr,
  Et = Object.prototype,
  Lt = Et.hasOwnProperty;
function jt(e, r, t) {
  var a = e[r];
  (!(Lt.call(e, r) && Ot(a, t)) || (t === void 0 && !(r in e))) && _t(e, r, t);
}
var lr = jt,
  Ht = Fr,
  Nt = Ye,
  Rt = Qe,
  Mt = qr,
  Ft = Object.getOwnPropertySymbols,
  qt = Ft
    ? function (e) {
        for (var r = []; e; ) Ht(r, Rt(e)), (e = Nt(e));
        return r;
      }
    : Mt,
  cr = qt;
function Pt(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var zt = Pt,
  Bt = ye,
  Ut = Je,
  Dt = zt,
  Gt = Object.prototype,
  Wt = Gt.hasOwnProperty;
function Kt(e) {
  if (!Bt(e)) return Dt(e);
  var r = Ut(e),
    t = [];
  for (var a in e) (a == "constructor" && (r || !Wt.call(e, a))) || t.push(a);
  return t;
}
var Xt = Kt,
  Zt = Pr,
  Yt = Xt,
  Qt = zr;
function Jt(e) {
  return Qt(e) ? Zt(e, !0) : Yt(e);
}
var ke = Jt,
  Vt = Br,
  en = cr,
  rn = ke;
function tn(e) {
  return Vt(e, rn, en);
}
var nn = tn;
function N() {
  return (
    (N =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    N.apply(this, arguments)
  );
}
const an = ["children", "options"],
  Ae = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "className",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap",
  ].reduce((e, r) => ((e[r.toLowerCase()] = r), e), { for: "htmlFor" }),
  _e = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  sn = ["style", "script"],
  on =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  ln = /mailto:/i,
  cn = /\n{2,}$/,
  ur = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  un = /^ *> ?/gm,
  fn = /^ {2,}\n/,
  dn = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  fr = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  dr = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  pn = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  hn = /^(?:\n *)*\n/,
  gn = /\r\n?/g,
  mn = /^\[\^([^\]]+)](:.*)\n/,
  bn = /^\[\^([^\]]+)]/,
  yn = /\f/g,
  vn = /^\s*?\[(x|\s)\]/,
  pr = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  hr = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  ge =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  xn = /&([a-zA-Z]+);/g,
  gr = /^<!--[\s\S]*?(?:-->)/,
  kn = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  me = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  Sn = /^\{.*\}$/,
  Cn = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  In = /^<([^ >]+@[^ >]+)>/,
  wn = /^<([^ >]+:\/[^ >]+)>/,
  $n = /-([a-z])?/gi,
  mr = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  Tn = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  An = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  _n = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  On = /(\[|\])/g,
  En = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  Ln = /\t/g,
  jn = /^ *\| */,
  Hn = /(^ *\||\| *$)/g,
  Nn = / *$/,
  Rn = /^ *:-+: *$/,
  Mn = /^ *:-+ *$/,
  Fn = /^ *-+: *$/,
  qn =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  Pn =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  zn = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  Bn = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Un = /^\\([^0-9A-Za-z\s])/,
  Dn =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  Gn = /^\n+/,
  Wn = /^([ \t]*)/,
  Kn = /\\([^\\])/g,
  Oe = / *\n+$/,
  Xn = /(?:^|\n)( *)$/,
  Se = "(?:\\d+\\.)",
  Ce = "(?:[*+-])";
function br(e) {
  return "( *)(" + (e === 1 ? Se : Ce) + ") +";
}
const yr = br(1),
  vr = br(2);
function xr(e) {
  return new RegExp("^" + (e === 1 ? yr : vr));
}
const Zn = xr(1),
  Yn = xr(2);
function kr(e) {
  return new RegExp(
    "^" +
      (e === 1 ? yr : vr) +
      "[^\\n]*(?:\\n(?!\\1" +
      (e === 1 ? Se : Ce) +
      " )[^\\n]*)*(\\n|$)",
    "gm"
  );
}
const Sr = kr(1),
  Cr = kr(2);
function Ir(e) {
  const r = e === 1 ? Se : Ce;
  return new RegExp(
    "^( *)(" +
      r +
      ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
      r +
      " (?!" +
      r +
      " ))\\n*|\\s*\\n*$)"
  );
}
const wr = Ir(1),
  $r = Ir(2);
function Ee(e, r) {
  const t = r === 1,
    a = t ? wr : $r,
    i = t ? Sr : Cr,
    c = t ? Zn : Yn;
  return {
    t(l, u, p) {
      const f = Xn.exec(p);
      return f && (u.o || (!u._ && !u.u)) ? a.exec((l = f[1] + l)) : null;
    },
    i: S.HIGH,
    l(l, u, p) {
      const f = t ? +l[2] : void 0,
        b = l[0]
          .replace(
            cn,
            `
`
          )
          .match(i);
      let g = !1;
      return {
        p: b.map(function (v, n) {
          const o = c.exec(v)[0].length,
            s = new RegExp("^ {1," + o + "}", "gm"),
            y = v.replace(s, "").replace(c, ""),
            d = n === b.length - 1,
            h =
              y.indexOf(`

`) !== -1 ||
              (d && g);
          g = h;
          const m = p._,
            x = p.o;
          let C;
          (p.o = !0),
            h
              ? ((p._ = !1),
                (C = y.replace(
                  Oe,
                  `

`
                )))
              : ((p._ = !0), (C = y.replace(Oe, "")));
          const I = u(C, p);
          return (p._ = m), (p.o = x), I;
        }),
        m: t,
        g: f,
      };
    },
    h: (l, u, p) =>
      e(
        l.m ? "ol" : "ul",
        { key: p.k, start: l.g },
        l.p.map(function (f, b) {
          return e("li", { key: b }, u(f, p));
        })
      ),
  };
}
const Qn = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Jn = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Tr = [ur, fr, dr, pr, hr, gr, mr, Sr, wr, Cr, $r],
  Vn = [...Tr, /^[^\n]+(?:  \n|\n{2,})/, ge, me];
function ea(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase();
}
function ra(e) {
  return Fn.test(e)
    ? "right"
    : Rn.test(e)
    ? "center"
    : Mn.test(e)
    ? "left"
    : null;
}
function Le(e, r, t) {
  const a = t.v;
  t.v = !0;
  const i = r(e.trim(), t);
  t.v = a;
  let c = [[]];
  return (
    i.forEach(function (l, u) {
      l.type === "tableSeparator"
        ? u !== 0 && u !== i.length - 1 && c.push([])
        : (l.type !== "text" ||
            (i[u + 1] != null && i[u + 1].type !== "tableSeparator") ||
            (l.$ = l.$.replace(Nn, "")),
          c[c.length - 1].push(l));
    }),
    c
  );
}
function ta(e, r, t) {
  t._ = !0;
  const a = Le(e[1], r, t),
    i = e[2].replace(Hn, "").split("|").map(ra),
    c = (function (l, u, p) {
      return l
        .trim()
        .split(
          `
`
        )
        .map(function (f) {
          return Le(f, u, p);
        });
    })(e[3], r, t);
  return (t._ = !1), { S: i, A: c, L: a, type: "table" };
}
function je(e, r) {
  return e.S[r] == null ? {} : { textAlign: e.S[r] };
}
function L(e) {
  return function (r, t) {
    return t._ ? e.exec(r) : null;
  };
}
function j(e) {
  return function (r, t) {
    return t._ || t.u ? e.exec(r) : null;
  };
}
function E(e) {
  return function (r, t) {
    return t._ || t.u ? null : e.exec(r);
  };
}
function P(e) {
  return function (r) {
    return e.exec(r);
  };
}
function na(e, r, t) {
  if (
    r._ ||
    r.u ||
    (t &&
      !t.endsWith(`
`))
  )
    return null;
  let a = "";
  e.split(
    `
`
  ).every(
    (c) =>
      !Tr.some((l) => l.test(c)) &&
      ((a +=
        c +
        `
`),
      c.trim())
  );
  const i = a.trimEnd();
  return i == "" ? null : [a, i];
}
function M(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return null;
  } catch {
    return null;
  }
  return e;
}
function He(e) {
  return e.replace(Kn, "$1");
}
function D(e, r, t) {
  const a = t._ || !1,
    i = t.u || !1;
  (t._ = !0), (t.u = !0);
  const c = e(r, t);
  return (t._ = a), (t.u = i), c;
}
function aa(e, r, t) {
  const a = t._ || !1,
    i = t.u || !1;
  (t._ = !1), (t.u = !0);
  const c = e(r, t);
  return (t._ = a), (t.u = i), c;
}
function ia(e, r, t) {
  return (
    (t._ = !1),
    e(
      r +
        `

`,
      t
    )
  );
}
const te = (e, r, t) => ({ $: D(r, e[1], t) });
function ne() {
  return {};
}
function ae() {
  return null;
}
function sa(...e) {
  return e.filter(Boolean).join(" ");
}
function ie(e, r, t) {
  let a = e;
  const i = r.split(".");
  for (; i.length && ((a = a[i[0]]), a !== void 0); ) i.shift();
  return a || t;
}
var S;
function oa(e, r = {}) {
  (r.overrides = r.overrides || {}),
    (r.slugify = r.slugify || ea),
    (r.namedCodesToUnicode = r.namedCodesToUnicode
      ? N({}, _e, r.namedCodesToUnicode)
      : _e);
  const t = r.createElement || T.createElement;
  function a(n, o, ...s) {
    const y = ie(r.overrides, `${n}.props`, {});
    return t(
      (function (d, h) {
        const m = ie(h, d);
        return m
          ? typeof m == "function" || (typeof m == "object" && "render" in m)
            ? m
            : ie(h, `${d}.component`, d)
          : d;
      })(n, r.overrides),
      N({}, o, y, {
        className: sa(o == null ? void 0 : o.className, y.className) || void 0,
      }),
      ...s
    );
  }
  function i(n) {
    let o = !1;
    r.forceInline ? (o = !0) : r.forceBlock || (o = En.test(n) === !1);
    const s = b(
      f(
        o
          ? n
          : `${n.trimEnd().replace(Gn, "")}

`,
        { _: o }
      )
    );
    for (; typeof s[s.length - 1] == "string" && !s[s.length - 1].trim(); )
      s.pop();
    if (r.wrapper === null) return s;
    const y = r.wrapper || (o ? "span" : "div");
    let d;
    if (s.length > 1 || r.forceWrapper) d = s;
    else {
      if (s.length === 1)
        return (
          (d = s[0]), typeof d == "string" ? a("span", { key: "outer" }, d) : d
        );
      d = null;
    }
    return T.createElement(y, { key: "outer" }, d);
  }
  function c(n) {
    const o = n.match(on);
    return o
      ? o.reduce(function (s, y, d) {
          const h = y.indexOf("=");
          if (h !== -1) {
            const m = (function (w) {
                return (
                  w.indexOf("-") !== -1 &&
                    w.match(kn) === null &&
                    (w = w.replace($n, function (k, A) {
                      return A.toUpperCase();
                    })),
                  w
                );
              })(y.slice(0, h)).trim(),
              x = (function (w) {
                const k = w[0];
                return (k === '"' || k === "'") &&
                  w.length >= 2 &&
                  w[w.length - 1] === k
                  ? w.slice(1, -1)
                  : w;
              })(y.slice(h + 1).trim()),
              C = Ae[m] || m,
              I = (s[C] = (function (w, k) {
                return w === "style"
                  ? k.split(/;\s?/).reduce(function (A, q) {
                      const _ = q.slice(0, q.indexOf(":"));
                      return (
                        (A[_.replace(/(-[a-z])/g, (R) => R[1].toUpperCase())] =
                          q.slice(_.length + 1).trim()),
                        A
                      );
                    }, {})
                  : w === "href"
                  ? M(k)
                  : (k.match(Sn) && (k = k.slice(1, k.length - 1)),
                    k === "true" || (k !== "false" && k));
              })(m, x));
            typeof I == "string" &&
              (ge.test(I) || me.test(I)) &&
              (s[C] = T.cloneElement(i(I.trim()), { key: d }));
          } else y !== "style" && (s[Ae[y] || y] = !0);
          return s;
        }, {})
      : null;
  }
  const l = [],
    u = {},
    p = {
      blockQuote: {
        t: E(ur),
        i: S.HIGH,
        l: (n, o, s) => ({ $: o(n[0].replace(un, ""), s) }),
        h: (n, o, s) => a("blockquote", { key: s.k }, o(n.$, s)),
      },
      breakLine: {
        t: P(fn),
        i: S.HIGH,
        l: ne,
        h: (n, o, s) => a("br", { key: s.k }),
      },
      breakThematic: {
        t: E(dn),
        i: S.HIGH,
        l: ne,
        h: (n, o, s) => a("hr", { key: s.k }),
      },
      codeBlock: {
        t: E(dr),
        i: S.MAX,
        l: (n) => ({
          $: n[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
          M: void 0,
        }),
        h: (n, o, s) =>
          a(
            "pre",
            { key: s.k },
            a("code", N({}, n.I, { className: n.M ? `lang-${n.M}` : "" }), n.$)
          ),
      },
      codeFenced: {
        t: E(fr),
        i: S.MAX,
        l: (n) => ({
          I: c(n[3] || ""),
          $: n[4],
          M: n[2] || void 0,
          type: "codeBlock",
        }),
      },
      codeInline: {
        t: j(pn),
        i: S.LOW,
        l: (n) => ({ $: n[2] }),
        h: (n, o, s) => a("code", { key: s.k }, n.$),
      },
      footnote: {
        t: E(mn),
        i: S.MAX,
        l: (n) => (l.push({ O: n[2], B: n[1] }), {}),
        h: ae,
      },
      footnoteReference: {
        t: L(bn),
        i: S.HIGH,
        l: (n) => ({ $: n[1], R: `#${r.slugify(n[1])}` }),
        h: (n, o, s) =>
          a("a", { key: s.k, href: M(n.R) }, a("sup", { key: s.k }, n.$)),
      },
      gfmTask: {
        t: L(vn),
        i: S.HIGH,
        l: (n) => ({ T: n[1].toLowerCase() === "x" }),
        h: (n, o, s) =>
          a("input", {
            checked: n.T,
            key: s.k,
            readOnly: !0,
            type: "checkbox",
          }),
      },
      heading: {
        t: E(pr),
        i: S.HIGH,
        l: (n, o, s) => ({
          $: D(o, n[2], s),
          j: r.slugify(n[2]),
          C: n[1].length,
        }),
        h: (n, o, s) => a(`h${n.C}`, { id: n.j, key: s.k }, o(n.$, s)),
      },
      headingSetext: {
        t: E(hr),
        i: S.MAX,
        l: (n, o, s) => ({
          $: D(o, n[1], s),
          C: n[2] === "=" ? 1 : 2,
          type: "heading",
        }),
      },
      htmlComment: { t: P(gr), i: S.HIGH, l: () => ({}), h: ae },
      image: {
        t: j(Jn),
        i: S.HIGH,
        l: (n) => ({ D: n[1], R: He(n[2]), N: n[3] }),
        h: (n, o, s) =>
          a("img", {
            key: s.k,
            alt: n.D || void 0,
            title: n.N || void 0,
            src: M(n.R),
          }),
      },
      link: {
        t: L(Qn),
        i: S.LOW,
        l: (n, o, s) => ({ $: aa(o, n[1], s), R: He(n[2]), N: n[3] }),
        h: (n, o, s) =>
          a("a", { key: s.k, href: M(n.R), title: n.N }, o(n.$, s)),
      },
      linkAngleBraceStyleDetector: {
        t: L(wn),
        i: S.MAX,
        l: (n) => ({ $: [{ $: n[1], type: "text" }], R: n[1], type: "link" }),
      },
      linkBareUrlDetector: {
        t: (n, o) => (o.Z ? null : L(Cn)(n, o)),
        i: S.MAX,
        l: (n) => ({
          $: [{ $: n[1], type: "text" }],
          R: n[1],
          N: void 0,
          type: "link",
        }),
      },
      linkMailtoDetector: {
        t: L(In),
        i: S.MAX,
        l(n) {
          let o = n[1],
            s = n[1];
          return (
            ln.test(s) || (s = "mailto:" + s),
            {
              $: [{ $: o.replace("mailto:", ""), type: "text" }],
              R: s,
              type: "link",
            }
          );
        },
      },
      orderedList: Ee(a, 1),
      unorderedList: Ee(a, 2),
      newlineCoalescer: {
        t: E(hn),
        i: S.LOW,
        l: ne,
        h: () => `
`,
      },
      paragraph: {
        t: na,
        i: S.LOW,
        l: te,
        h: (n, o, s) => a("p", { key: s.k }, o(n.$, s)),
      },
      ref: {
        t: L(Tn),
        i: S.MAX,
        l: (n) => ((u[n[1]] = { R: n[2], N: n[4] }), {}),
        h: ae,
      },
      refImage: {
        t: j(An),
        i: S.MAX,
        l: (n) => ({ D: n[1] || void 0, F: n[2] }),
        h: (n, o, s) =>
          a("img", { key: s.k, alt: n.D, src: M(u[n.F].R), title: u[n.F].N }),
      },
      refLink: {
        t: L(_n),
        i: S.MAX,
        l: (n, o, s) => ({
          $: o(n[1], s),
          P: o(n[0].replace(On, "\\$1"), s),
          F: n[2],
        }),
        h: (n, o, s) =>
          u[n.F]
            ? a(
                "a",
                { key: s.k, href: M(u[n.F].R), title: u[n.F].N },
                o(n.$, s)
              )
            : a("span", { key: s.k }, o(n.P, s)),
      },
      table: {
        t: E(mr),
        i: S.HIGH,
        l: ta,
        h: (n, o, s) =>
          a(
            "table",
            { key: s.k },
            a(
              "thead",
              null,
              a(
                "tr",
                null,
                n.L.map(function (y, d) {
                  return a("th", { key: d, style: je(n, d) }, o(y, s));
                })
              )
            ),
            a(
              "tbody",
              null,
              n.A.map(function (y, d) {
                return a(
                  "tr",
                  { key: d },
                  y.map(function (h, m) {
                    return a("td", { key: m, style: je(n, m) }, o(h, s));
                  })
                );
              })
            )
          ),
      },
      tableSeparator: {
        t: function (n, o) {
          return o.v ? jn.exec(n) : null;
        },
        i: S.HIGH,
        l: function () {
          return { type: "tableSeparator" };
        },
        h: () => " | ",
      },
      text: {
        t: P(Dn),
        i: S.MIN,
        l: (n) => ({
          $: n[0].replace(xn, (o, s) =>
            r.namedCodesToUnicode[s] ? r.namedCodesToUnicode[s] : o
          ),
        }),
        h: (n) => n.$,
      },
      textBolded: {
        t: j(qn),
        i: S.MED,
        l: (n, o, s) => ({ $: o(n[2], s) }),
        h: (n, o, s) => a("strong", { key: s.k }, o(n.$, s)),
      },
      textEmphasized: {
        t: j(Pn),
        i: S.LOW,
        l: (n, o, s) => ({ $: o(n[2], s) }),
        h: (n, o, s) => a("em", { key: s.k }, o(n.$, s)),
      },
      textEscaped: {
        t: j(Un),
        i: S.HIGH,
        l: (n) => ({ $: n[1], type: "text" }),
      },
      textMarked: {
        t: j(zn),
        i: S.LOW,
        l: te,
        h: (n, o, s) => a("mark", { key: s.k }, o(n.$, s)),
      },
      textStrikethroughed: {
        t: j(Bn),
        i: S.LOW,
        l: te,
        h: (n, o, s) => a("del", { key: s.k }, o(n.$, s)),
      },
    };
  r.disableParsingRawHTML !== !0 &&
    ((p.htmlBlock = {
      t: P(ge),
      i: S.HIGH,
      l(n, o, s) {
        const [, y] = n[3].match(Wn),
          d = new RegExp(`^${y}`, "gm"),
          h = n[3].replace(d, ""),
          m = ((x = h), Vn.some((k) => k.test(x)) ? ia : D);
        var x;
        const C = n[1].toLowerCase(),
          I = sn.indexOf(C) !== -1;
        s.Z = s.Z || C === "a";
        const w = I ? n[3] : m(o, h, s);
        return (s.Z = !1), { I: c(n[2]), $: w, G: I, H: I ? C : n[1] };
      },
      h: (n, o, s) => a(n.H, N({ key: s.k }, n.I), n.G ? n.$ : o(n.$, s)),
    }),
    (p.htmlSelfClosing = {
      t: P(me),
      i: S.HIGH,
      l: (n) => ({ I: c(n[2] || ""), H: n[1] }),
      h: (n, o, s) => a(n.H, N({}, n.I, { key: s.k })),
    }));
  const f = (function (n) {
      let o = Object.keys(n);
      function s(y, d) {
        let h = [],
          m = "";
        for (; y; ) {
          let x = 0;
          for (; x < o.length; ) {
            const C = o[x],
              I = n[C],
              w = I.t(y, d, m);
            if (w) {
              const k = w[0];
              y = y.substring(k.length);
              const A = I.l(w, s, d);
              A.type == null && (A.type = C), h.push(A), (m = k);
              break;
            }
            x++;
          }
        }
        return h;
      }
      return (
        o.sort(function (y, d) {
          let h = n[y].i,
            m = n[d].i;
          return h !== m ? h - m : y < d ? -1 : 1;
        }),
        function (y, d) {
          return s(
            (function (h) {
              return h
                .replace(
                  gn,
                  `
`
                )
                .replace(yn, "")
                .replace(Ln, "    ");
            })(y),
            d
          );
        }
      );
    })(p),
    b =
      ((g = (function (n) {
        return function (o, s, y) {
          return n[o.type].h(o, s, y);
        };
      })(p)),
      function n(o, s = {}) {
        if (Array.isArray(o)) {
          const y = s.k,
            d = [];
          let h = !1;
          for (let m = 0; m < o.length; m++) {
            s.k = m;
            const x = n(o[m], s),
              C = typeof x == "string";
            C && h ? (d[d.length - 1] += x) : x !== null && d.push(x), (h = C);
          }
          return (s.k = y), d;
        }
        return g(o, n, s);
      });
  var g;
  const v = i(e);
  return l.length
    ? a(
        "div",
        null,
        v,
        a(
          "footer",
          { key: "footer" },
          l.map(function (n) {
            return a(
              "div",
              { id: r.slugify(n.B), key: n.B },
              n.B,
              b(f(n.O, { _: !0 }))
            );
          })
        )
      )
    : v;
}
(function (e) {
  (e[(e.MAX = 0)] = "MAX"),
    (e[(e.HIGH = 1)] = "HIGH"),
    (e[(e.MED = 2)] = "MED"),
    (e[(e.LOW = 3)] = "LOW"),
    (e[(e.MIN = 4)] = "MIN");
})(S || (S = {}));
const co = (e) => {
  let { children: r, options: t } = e,
    a = (function (i, c) {
      if (i == null) return {};
      var l,
        u,
        p = {},
        f = Object.keys(i);
      for (u = 0; u < f.length; u++)
        c.indexOf((l = f[u])) >= 0 || (p[l] = i[l]);
      return p;
    })(e, an);
  return T.cloneElement(oa(r, t), a);
};
function la() {}
var ca = la,
  se = Ur,
  ua = ca,
  fa = Dr,
  da = 1 / 0,
  pa =
    se && 1 / fa(new se([, -0]))[1] == da
      ? function (e) {
          return new se(e);
        }
      : ua,
  uo = pa;
function ha(e, r) {
  for (
    var t = -1, a = e == null ? 0 : e.length;
    ++t < a && r(e[t], t, e) !== !1;

  );
  return e;
}
var ga = ha,
  ma = lr,
  ba = Ze;
function ya(e, r, t, a) {
  var i = !t;
  t || (t = {});
  for (var c = -1, l = r.length; ++c < l; ) {
    var u = r[c],
      p = a ? a(t[u], e[u], u, t, e) : void 0;
    p === void 0 && (p = e[u]), i ? ba(t, u, p) : ma(t, u, p);
  }
  return t;
}
var Q = ya,
  va = Q,
  xa = Ve;
function ka(e, r) {
  return e && va(r, xa(r), e);
}
var Sa = ka,
  Ca = Q,
  Ia = ke;
function wa(e, r) {
  return e && Ca(r, Ia(r), e);
}
var $a = wa,
  K = { exports: {} };
K.exports;
(function (e, r) {
  var t = Gr,
    a = r && !r.nodeType && r,
    i = a && !0 && e && !e.nodeType && e,
    c = i && i.exports === a,
    l = c ? t.Buffer : void 0,
    u = l ? l.allocUnsafe : void 0;
  function p(f, b) {
    if (b) return f.slice();
    var g = f.length,
      v = u ? u(g) : new f.constructor(g);
    return f.copy(v), v;
  }
  e.exports = p;
})(K, K.exports);
var Ta = K.exports;
function Aa(e, r) {
  var t = -1,
    a = e.length;
  for (r || (r = Array(a)); ++t < a; ) r[t] = e[t];
  return r;
}
var _a = Aa,
  Oa = Q,
  Ea = Qe;
function La(e, r) {
  return Oa(e, Ea(e), r);
}
var ja = La,
  Ha = Q,
  Na = cr;
function Ra(e, r) {
  return Ha(e, Na(e), r);
}
var Ma = Ra,
  Fa = Object.prototype,
  qa = Fa.hasOwnProperty;
function Pa(e) {
  var r = e.length,
    t = new e.constructor(r);
  return (
    r &&
      typeof e[0] == "string" &&
      qa.call(e, "index") &&
      ((t.index = e.index), (t.input = e.input)),
    t
  );
}
var za = Pa,
  Ne = Wr;
function Ba(e) {
  var r = new e.constructor(e.byteLength);
  return new Ne(r).set(new Ne(e)), r;
}
var Ie = Ba,
  Ua = Ie;
function Da(e, r) {
  var t = r ? Ua(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Ga = Da,
  Wa = /\w*$/;
function Ka(e) {
  var r = new e.constructor(e.source, Wa.exec(e));
  return (r.lastIndex = e.lastIndex), r;
}
var Xa = Ka,
  Re = Kr,
  Me = Re ? Re.prototype : void 0,
  Fe = Me ? Me.valueOf : void 0;
function Za(e) {
  return Fe ? Object(Fe.call(e)) : {};
}
var Ya = Za,
  Qa = Ie;
function Ja(e, r) {
  var t = r ? Qa(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Va = Ja,
  ei = Ie,
  ri = Ga,
  ti = Xa,
  ni = Ya,
  ai = Va,
  ii = "[object Boolean]",
  si = "[object Date]",
  oi = "[object Map]",
  li = "[object Number]",
  ci = "[object RegExp]",
  ui = "[object Set]",
  fi = "[object String]",
  di = "[object Symbol]",
  pi = "[object ArrayBuffer]",
  hi = "[object DataView]",
  gi = "[object Float32Array]",
  mi = "[object Float64Array]",
  bi = "[object Int8Array]",
  yi = "[object Int16Array]",
  vi = "[object Int32Array]",
  xi = "[object Uint8Array]",
  ki = "[object Uint8ClampedArray]",
  Si = "[object Uint16Array]",
  Ci = "[object Uint32Array]";
function Ii(e, r, t) {
  var a = e.constructor;
  switch (r) {
    case pi:
      return ei(e);
    case ii:
    case si:
      return new a(+e);
    case hi:
      return ri(e, t);
    case gi:
    case mi:
    case bi:
    case yi:
    case vi:
    case xi:
    case ki:
    case Si:
    case Ci:
      return ai(e, t);
    case oi:
      return new a();
    case li:
    case fi:
      return new a(e);
    case ci:
      return ti(e);
    case ui:
      return new a();
    case di:
      return ni(e);
  }
}
var wi = Ii,
  $i = ye,
  qe = Object.create,
  Ti = (function () {
    function e() {}
    return function (r) {
      if (!$i(r)) return {};
      if (qe) return qe(r);
      e.prototype = r;
      var t = new e();
      return (e.prototype = void 0), t;
    };
  })(),
  Ai = Ti,
  _i = Ai,
  Oi = Ye,
  Ei = Je;
function Li(e) {
  return typeof e.constructor == "function" && !Ei(e) ? _i(Oi(e)) : {};
}
var ji = Li,
  Hi = ve,
  Ni = er,
  Ri = "[object Map]";
function Mi(e) {
  return Ni(e) && Hi(e) == Ri;
}
var Fi = Mi,
  qi = Fi,
  Pi = tr,
  Pe = rr,
  ze = Pe && Pe.isMap,
  zi = ze ? Pi(ze) : qi,
  Bi = zi,
  Ui = ve,
  Di = er,
  Gi = "[object Set]";
function Wi(e) {
  return Di(e) && Ui(e) == Gi;
}
var Ki = Wi,
  Xi = Ki,
  Zi = tr,
  Be = rr,
  Ue = Be && Be.isSet,
  Yi = Ue ? Zi(Ue) : Xi,
  Qi = Yi,
  Ji = Xr,
  Vi = ga,
  es = lr,
  rs = Sa,
  ts = $a,
  ns = Ta,
  as = _a,
  is = ja,
  ss = Ma,
  os = Yr,
  ls = nn,
  cs = ve,
  us = za,
  fs = wi,
  ds = ji,
  ps = Qr,
  hs = Zr,
  gs = Bi,
  ms = ye,
  bs = Qi,
  ys = Ve,
  vs = ke,
  xs = 1,
  ks = 2,
  Ss = 4,
  Ar = "[object Arguments]",
  Cs = "[object Array]",
  Is = "[object Boolean]",
  ws = "[object Date]",
  $s = "[object Error]",
  _r = "[object Function]",
  Ts = "[object GeneratorFunction]",
  As = "[object Map]",
  _s = "[object Number]",
  Or = "[object Object]",
  Os = "[object RegExp]",
  Es = "[object Set]",
  Ls = "[object String]",
  js = "[object Symbol]",
  Hs = "[object WeakMap]",
  Ns = "[object ArrayBuffer]",
  Rs = "[object DataView]",
  Ms = "[object Float32Array]",
  Fs = "[object Float64Array]",
  qs = "[object Int8Array]",
  Ps = "[object Int16Array]",
  zs = "[object Int32Array]",
  Bs = "[object Uint8Array]",
  Us = "[object Uint8ClampedArray]",
  Ds = "[object Uint16Array]",
  Gs = "[object Uint32Array]",
  $ = {};
$[Ar] =
  $[Cs] =
  $[Ns] =
  $[Rs] =
  $[Is] =
  $[ws] =
  $[Ms] =
  $[Fs] =
  $[qs] =
  $[Ps] =
  $[zs] =
  $[As] =
  $[_s] =
  $[Or] =
  $[Os] =
  $[Es] =
  $[Ls] =
  $[js] =
  $[Bs] =
  $[Us] =
  $[Ds] =
  $[Gs] =
    !0;
$[$s] = $[_r] = $[Hs] = !1;
function G(e, r, t, a, i, c) {
  var l,
    u = r & xs,
    p = r & ks,
    f = r & Ss;
  if ((t && (l = i ? t(e, a, i, c) : t(e)), l !== void 0)) return l;
  if (!ms(e)) return e;
  var b = ps(e);
  if (b) {
    if (((l = us(e)), !u)) return as(e, l);
  } else {
    var g = cs(e),
      v = g == _r || g == Ts;
    if (hs(e)) return ns(e, u);
    if (g == Or || g == Ar || (v && !i)) {
      if (((l = p || v ? {} : ds(e)), !u))
        return p ? ss(e, ts(l, e)) : is(e, rs(l, e));
    } else {
      if (!$[g]) return i ? e : {};
      l = fs(e, g, u);
    }
  }
  c || (c = new Ji());
  var n = c.get(e);
  if (n) return n;
  c.set(e, l),
    bs(e)
      ? e.forEach(function (y) {
          l.add(G(y, r, t, y, e, c));
        })
      : gs(e) &&
        e.forEach(function (y, d) {
          l.set(d, G(y, r, t, d, e, c));
        });
  var o = f ? (p ? ls : os) : p ? vs : ys,
    s = b ? void 0 : o(e);
  return (
    Vi(s || e, function (y, d) {
      s && ((d = y), (y = e[d])), es(l, d, G(y, r, t, d, e, c));
    }),
    l
  );
}
var fo = G,
  Er = { exports: {} },
  oe,
  De;
function Ws() {
  return (
    De ||
      ((De = 1),
      (oe = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: "",
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      })),
    oe
  );
}
var le, Ge;
function Ks() {
  return (
    Ge ||
      ((Ge = 1),
      (le = function (e) {
        var r = [].forEach,
          t = [].some,
          a = document.body,
          i,
          c = !0,
          l = " ";
        function u(d, h) {
          var m = h.appendChild(f(d));
          if (d.children.length) {
            var x = b(d.isCollapsed);
            d.children.forEach(function (C) {
              u(C, x);
            }),
              m.appendChild(x);
          }
        }
        function p(d, h) {
          var m = !1,
            x = b(m);
          if (
            (h.forEach(function (C) {
              u(C, x);
            }),
            (i = d || i),
            i !== null)
          )
            return (
              i.firstChild && i.removeChild(i.firstChild),
              h.length === 0 ? i : i.appendChild(x)
            );
        }
        function f(d) {
          var h = document.createElement("li"),
            m = document.createElement("a");
          return (
            e.listItemClass && h.setAttribute("class", e.listItemClass),
            e.onClick && (m.onclick = e.onClick),
            e.includeTitleTags && m.setAttribute("title", d.textContent),
            e.includeHtml && d.childNodes.length
              ? r.call(d.childNodes, function (x) {
                  m.appendChild(x.cloneNode(!0));
                })
              : (m.textContent = d.textContent),
            m.setAttribute("href", e.basePath + "#" + d.id),
            m.setAttribute(
              "class",
              e.linkClass +
                l +
                "node-name--" +
                d.nodeName +
                l +
                e.extraLinkClasses
            ),
            h.appendChild(m),
            h
          );
        }
        function b(d) {
          var h = e.orderedList ? "ol" : "ul",
            m = document.createElement(h),
            x = e.listClass + l + e.extraListClasses;
          return (
            d &&
              ((x = x + l + e.collapsibleClass),
              (x = x + l + e.isCollapsedClass)),
            m.setAttribute("class", x),
            m
          );
        }
        function g() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var d;
            d = document.querySelector(e.scrollContainer).scrollTop;
          } else d = document.documentElement.scrollTop || a.scrollTop;
          var h = document.querySelector(e.positionFixedSelector);
          e.fixedSidebarOffset === "auto" &&
            (e.fixedSidebarOffset = i.offsetTop),
            d > e.fixedSidebarOffset
              ? h.className.indexOf(e.positionFixedClass) === -1 &&
                (h.className += l + e.positionFixedClass)
              : (h.className = h.className
                  .split(l + e.positionFixedClass)
                  .join(""));
        }
        function v(d) {
          var h = 0;
          return (
            d !== null &&
              ((h = d.offsetTop),
              e.hasInnerContainers && (h += v(d.offsetParent))),
            h
          );
        }
        function n(d) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var h;
            h = document.querySelector(e.scrollContainer).scrollTop;
          } else h = document.documentElement.scrollTop || a.scrollTop;
          e.positionFixedSelector && g();
          var m = d,
            x;
          if (c && i !== null && m.length > 0) {
            t.call(m, function (_, R) {
              if (v(_) > h + e.headingsOffset + 10) {
                var Lr = R === 0 ? R : R - 1;
                return (x = m[Lr]), !0;
              } else if (R === m.length - 1) return (x = m[m.length - 1]), !0;
            });
            var C = i.querySelector("." + e.activeLinkClass),
              I = i.querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  x.nodeName +
                  '[href="' +
                  e.basePath +
                  "#" +
                  x.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                  '"]'
              );
            if (C === I) return;
            var w = i.querySelectorAll("." + e.linkClass);
            r.call(w, function (_) {
              _.className = _.className.split(l + e.activeLinkClass).join("");
            });
            var k = i.querySelectorAll("." + e.listItemClass);
            r.call(k, function (_) {
              _.className = _.className
                .split(l + e.activeListItemClass)
                .join("");
            }),
              I &&
                I.className.indexOf(e.activeLinkClass) === -1 &&
                (I.className += l + e.activeLinkClass);
            var A = I && I.parentNode;
            A &&
              A.className.indexOf(e.activeListItemClass) === -1 &&
              (A.className += l + e.activeListItemClass);
            var q = i.querySelectorAll(
              "." + e.listClass + "." + e.collapsibleClass
            );
            r.call(q, function (_) {
              _.className.indexOf(e.isCollapsedClass) === -1 &&
                (_.className += l + e.isCollapsedClass);
            }),
              I &&
                I.nextSibling &&
                I.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                (I.nextSibling.className = I.nextSibling.className
                  .split(l + e.isCollapsedClass)
                  .join("")),
              o(I && I.parentNode.parentNode);
          }
        }
        function o(d) {
          return d &&
            d.className.indexOf(e.collapsibleClass) !== -1 &&
            d.className.indexOf(e.isCollapsedClass) !== -1
            ? ((d.className = d.className
                .split(l + e.isCollapsedClass)
                .join("")),
              o(d.parentNode.parentNode))
            : d;
        }
        function s(d) {
          var h = d.target || d.srcElement;
          typeof h.className != "string" ||
            h.className.indexOf(e.linkClass) === -1 ||
            (c = !1);
        }
        function y() {
          c = !0;
        }
        return {
          enableTocAnimation: y,
          disableTocAnimation: s,
          render: p,
          updateToc: n,
        };
      })),
    le
  );
}
var ce, We;
function Xs() {
  return (
    We ||
      ((We = 1),
      (ce = function (r) {
        var t = [].reduce;
        function a(f) {
          return f[f.length - 1];
        }
        function i(f) {
          return +f.nodeName.toUpperCase().replace("H", "");
        }
        function c(f) {
          if (!(f instanceof window.HTMLElement)) return f;
          if (r.ignoreHiddenElements && (!f.offsetHeight || !f.offsetParent))
            return null;
          const b =
            f.getAttribute("data-heading-label") ||
            (r.headingLabelCallback
              ? String(r.headingLabelCallback(f.textContent))
              : f.textContent.trim());
          var g = {
            id: f.id,
            children: [],
            nodeName: f.nodeName,
            headingLevel: i(f),
            textContent: b,
          };
          return (
            r.includeHtml && (g.childNodes = f.childNodes),
            r.headingObjectCallback ? r.headingObjectCallback(g, f) : g
          );
        }
        function l(f, b) {
          for (
            var g = c(f),
              v = g.headingLevel,
              n = b,
              o = a(n),
              s = o ? o.headingLevel : 0,
              y = v - s;
            y > 0 && ((o = a(n)), !(o && v === o.headingLevel));

          )
            o && o.children !== void 0 && (n = o.children), y--;
          return v >= r.collapseDepth && (g.isCollapsed = !0), n.push(g), n;
        }
        function u(f, b) {
          var g = b;
          r.ignoreSelector &&
            (g = b.split(",").map(function (n) {
              return n.trim() + ":not(" + r.ignoreSelector + ")";
            }));
          try {
            return f.querySelectorAll(g);
          } catch {
            return console.warn("Headers not found with selector: " + g), null;
          }
        }
        function p(f) {
          return t.call(
            f,
            function (g, v) {
              var n = c(v);
              return n && l(n, g.nest), g;
            },
            { nest: [] }
          );
        }
        return { nestHeadingsArray: p, selectHeadings: u };
      })),
    ce
  );
}
var ue, Ke;
function Zs() {
  return (
    Ke ||
      ((Ke = 1),
      (ue = function (r) {
        var t = r.tocElement || document.querySelector(r.tocSelector);
        if (t && t.scrollHeight > t.clientHeight) {
          var a = t.querySelector("." + r.activeListItemClass);
          a && (t.scrollTop = a.offsetTop - r.tocScrollOffset);
        }
      })),
    ue
  );
}
var fe = {},
  Xe;
function Ys() {
  if (Xe) return fe;
  (Xe = 1), (fe.initSmoothScrolling = e);
  function e(t) {
    var a = t.duration,
      i = t.offset,
      c = location.hash ? p(location.href) : location.href;
    l();
    function l() {
      document.body.addEventListener("click", b, !1);
      function b(g) {
        !u(g.target) ||
          g.target.className.indexOf("no-smooth-scroll") > -1 ||
          (g.target.href.charAt(g.target.href.length - 2) === "#" &&
            g.target.href.charAt(g.target.href.length - 1) === "!") ||
          g.target.className.indexOf(t.linkClass) === -1 ||
          r(g.target.hash, {
            duration: a,
            offset: i,
            callback: function () {
              f(g.target.hash);
            },
          });
      }
    }
    function u(b) {
      return (
        b.tagName.toLowerCase() === "a" &&
        (b.hash.length > 0 || b.href.charAt(b.href.length - 1) === "#") &&
        (p(b.href) === c || p(b.href) + "#" === c)
      );
    }
    function p(b) {
      return b.slice(0, b.lastIndexOf("#"));
    }
    function f(b) {
      var g = document.getElementById(b.substring(1));
      g &&
        (/^(?:a|select|input|button|textarea)$/i.test(g.tagName) ||
          (g.tabIndex = -1),
        g.focus());
    }
  }
  function r(t, a) {
    var i = window.pageYOffset,
      c = {
        duration: a.duration,
        offset: a.offset || 0,
        callback: a.callback,
        easing: a.easing || n,
      },
      l =
        document.querySelector(
          '[id="' + decodeURI(t).split("#").join("") + '"]'
        ) || document.querySelector('[id="' + t.split("#").join("") + '"]'),
      u =
        typeof t == "string"
          ? c.offset +
            (t
              ? (l && l.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : t,
      p = typeof c.duration == "function" ? c.duration(u) : c.duration,
      f,
      b;
    requestAnimationFrame(function (o) {
      (f = o), g(o);
    });
    function g(o) {
      (b = o - f),
        window.scrollTo(0, c.easing(b, i, u, p)),
        b < p ? requestAnimationFrame(g) : v();
    }
    function v() {
      window.scrollTo(0, i + u),
        typeof c.callback == "function" && c.callback();
    }
    function n(o, s, y, d) {
      return (
        (o /= d / 2),
        o < 1 ? (y / 2) * o * o + s : (o--, (-y / 2) * (o * (o - 2) - 1) + s)
      );
    }
  }
  return fe;
}
(function (e, r) {
  (function (t, a) {
    e.exports = a(t);
  })(typeof J < "u" ? J : window || J, function (t) {
    var a = Ws(),
      i = {},
      c = {},
      l = Ks(),
      u = Xs(),
      p = Zs(),
      f,
      b,
      g =
        !!t &&
        !!t.document &&
        !!t.document.querySelector &&
        !!t.addEventListener;
    if (typeof window > "u" && !g) return;
    var v,
      n = Object.prototype.hasOwnProperty;
    function o() {
      for (var h = {}, m = 0; m < arguments.length; m++) {
        var x = arguments[m];
        for (var C in x) n.call(x, C) && (h[C] = x[C]);
      }
      return h;
    }
    function s(h, m, x) {
      m || (m = 250);
      var C, I;
      return function () {
        var w = x || this,
          k = +new Date(),
          A = arguments;
        C && k < C + m
          ? (clearTimeout(I),
            (I = setTimeout(function () {
              (C = k), h.apply(w, A);
            }, m)))
          : ((C = k), h.apply(w, A));
      };
    }
    function y(h) {
      try {
        return h.contentElement || document.querySelector(h.contentSelector);
      } catch {
        return (
          console.warn("Contents element not found: " + h.contentSelector), null
        );
      }
    }
    function d(h) {
      try {
        return h.tocElement || document.querySelector(h.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + h.tocSelector), null;
      }
    }
    return (
      (c.destroy = function () {
        var h = d(i);
        h !== null &&
          (i.skipRendering || (h && (h.innerHTML = "")),
          i.scrollContainer && document.querySelector(i.scrollContainer)
            ? (document
                .querySelector(i.scrollContainer)
                .removeEventListener("scroll", this._scrollListener, !1),
              document
                .querySelector(i.scrollContainer)
                .removeEventListener("resize", this._scrollListener, !1),
              f &&
                document
                  .querySelector(i.scrollContainer)
                  .removeEventListener("click", this._clickListener, !1))
            : (document.removeEventListener("scroll", this._scrollListener, !1),
              document.removeEventListener("resize", this._scrollListener, !1),
              f &&
                document.removeEventListener(
                  "click",
                  this._clickListener,
                  !1
                )));
      }),
      (c.init = function (h) {
        if (g) {
          (i = o(a, h || {})),
            (this.options = i),
            (this.state = {}),
            i.scrollSmooth &&
              ((i.duration = i.scrollSmoothDuration),
              (i.offset = i.scrollSmoothOffset),
              (c.scrollSmooth = Ys().initSmoothScrolling(i))),
            (f = l(i)),
            (b = u(i)),
            (this._buildHtml = f),
            (this._parseContent = b),
            (this._headingsArray = v),
            c.destroy();
          var m = y(i);
          if (m !== null) {
            var x = d(i);
            if (
              x !== null &&
              ((v = b.selectHeadings(m, i.headingSelector)), v !== null)
            ) {
              var C = b.nestHeadingsArray(v),
                I = C.nest;
              i.skipRendering || f.render(x, I),
                (this._scrollListener = s(function (k) {
                  f.updateToc(v), !i.disableTocScrollSync && p(i);
                  var A =
                    k &&
                    k.target &&
                    k.target.scrollingElement &&
                    k.target.scrollingElement.scrollTop === 0;
                  ((k && (k.eventPhase === 0 || k.currentTarget === null)) ||
                    A) &&
                    (f.updateToc(v),
                    i.scrollEndCallback && i.scrollEndCallback(k));
                }, i.throttleTimeout)),
                this._scrollListener(),
                i.scrollContainer && document.querySelector(i.scrollContainer)
                  ? (document
                      .querySelector(i.scrollContainer)
                      .addEventListener("scroll", this._scrollListener, !1),
                    document
                      .querySelector(i.scrollContainer)
                      .addEventListener("resize", this._scrollListener, !1))
                  : (document.addEventListener(
                      "scroll",
                      this._scrollListener,
                      !1
                    ),
                    document.addEventListener(
                      "resize",
                      this._scrollListener,
                      !1
                    ));
              var w = null;
              return (
                (this._clickListener = s(function (k) {
                  i.scrollSmooth && f.disableTocAnimation(k),
                    f.updateToc(v),
                    w && clearTimeout(w),
                    (w = setTimeout(function () {
                      f.enableTocAnimation();
                    }, i.scrollSmoothDuration));
                }, i.throttleTimeout)),
                i.scrollContainer && document.querySelector(i.scrollContainer)
                  ? document
                      .querySelector(i.scrollContainer)
                      .addEventListener("click", this._clickListener, !1)
                  : document.addEventListener("click", this._clickListener, !1),
                this
              );
            }
          }
        }
      }),
      (c.refresh = function (h) {
        c.destroy(), c.init(h || this.options);
      }),
      (t.tocbot = c),
      c
    );
  });
})(Er);
var po = Er.exports;
export {
  co as M,
  lr as _,
  ro as a,
  ao as b,
  lo as c,
  io as d,
  oo as e,
  so as f,
  nn as g,
  uo as h,
  fo as i,
  po as j,
  no as m,
  xe as r,
  to as u,
};
