import { R as h, r as p } from "./index-c013ead5.js";
import { g as ne } from "./commonjsHelpers-725317a4.js";
import { _ as ge, i as B, a as me } from "./doctrine-744fe685.js";
function _() {
  return (_ =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }).apply(this, arguments);
}
function A(e, n) {
  if (e == null) return {};
  var t,
    r,
    o = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n.indexOf((t = a[r])) >= 0 || (o[t] = e[t]);
  return o;
}
function D(e) {
  var n = p.useRef(e),
    t = p.useRef(function (r) {
      n.current && n.current(r);
    });
  return (n.current = e), t.current;
}
var C = function (e, n, t) {
    return (
      n === void 0 && (n = 0),
      t === void 0 && (t = 1),
      e > t ? t : e < n ? n : e
    );
  },
  j = function (e) {
    return "touches" in e;
  },
  L = function (e) {
    return (e && e.ownerDocument.defaultView) || self;
  },
  V = function (e, n, t) {
    var r = e.getBoundingClientRect(),
      o = j(n)
        ? (function (a, c) {
            for (var s = 0; s < a.length; s++)
              if (a[s].identifier === c) return a[s];
            return a[0];
          })(n.touches, t)
        : n;
    return {
      left: C((o.pageX - (r.left + L(e).pageXOffset)) / r.width),
      top: C((o.pageY - (r.top + L(e).pageYOffset)) / r.height),
    };
  },
  G = function (e) {
    !j(e) && e.preventDefault();
  },
  U = h.memo(function (e) {
    var n = e.onMove,
      t = e.onKey,
      r = A(e, ["onMove", "onKey"]),
      o = p.useRef(null),
      a = D(n),
      c = D(t),
      s = p.useRef(null),
      l = p.useRef(!1),
      u = p.useMemo(
        function () {
          var N = function (b) {
              G(b),
                (j(b) ? b.touches.length > 0 : b.buttons > 0) && o.current
                  ? a(V(o.current, b, s.current))
                  : M(!1);
            },
            H = function () {
              return M(!1);
            };
          function M(b) {
            var g = l.current,
              y = L(o.current),
              k = b ? y.addEventListener : y.removeEventListener;
            k(g ? "touchmove" : "mousemove", N),
              k(g ? "touchend" : "mouseup", H);
          }
          return [
            function (b) {
              var g = b.nativeEvent,
                y = o.current;
              if (
                y &&
                (G(g),
                !(function ($, O) {
                  return O && !j($);
                })(g, l.current) && y)
              ) {
                if (j(g)) {
                  l.current = !0;
                  var k = g.changedTouches || [];
                  k.length && (s.current = k[0].identifier);
                }
                y.focus(), a(V(y, g, s.current)), M(!0);
              }
            },
            function (b) {
              var g = b.which || b.keyCode;
              g < 37 ||
                g > 40 ||
                (b.preventDefault(),
                c({
                  left: g === 39 ? 0.05 : g === 37 ? -0.05 : 0,
                  top: g === 40 ? 0.05 : g === 38 ? -0.05 : 0,
                }));
            },
            M,
          ];
        },
        [c, a]
      ),
      f = u[0],
      d = u[1],
      x = u[2];
    return (
      p.useEffect(
        function () {
          return x;
        },
        [x]
      ),
      h.createElement(
        "div",
        _({}, r, {
          onTouchStart: f,
          onMouseDown: f,
          className: "react-colorful__interactive",
          ref: o,
          onKeyDown: d,
          tabIndex: 0,
          role: "slider",
        })
      )
    );
  }),
  F = function (e) {
    return e.filter(Boolean).join(" ");
  },
  X = function (e) {
    var n = e.color,
      t = e.left,
      r = e.top,
      o = r === void 0 ? 0.5 : r,
      a = F(["react-colorful__pointer", e.className]);
    return h.createElement(
      "div",
      { className: a, style: { top: 100 * o + "%", left: 100 * t + "%" } },
      h.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: { backgroundColor: n },
      })
    );
  },
  v = function (e, n, t) {
    return (
      n === void 0 && (n = 0),
      t === void 0 && (t = Math.pow(10, n)),
      Math.round(t * e) / t
    );
  },
  ve = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  be = function (e) {
    return oe(K(e));
  },
  K = function (e) {
    return (
      e[0] === "#" && (e = e.substring(1)),
      e.length < 6
        ? {
            r: parseInt(e[0] + e[0], 16),
            g: parseInt(e[1] + e[1], 16),
            b: parseInt(e[2] + e[2], 16),
            a: e.length === 4 ? v(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
          }
        : {
            r: parseInt(e.substring(0, 2), 16),
            g: parseInt(e.substring(2, 4), 16),
            b: parseInt(e.substring(4, 6), 16),
            a: e.length === 8 ? v(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
          }
    );
  },
  pe = function (e, n) {
    return n === void 0 && (n = "deg"), Number(e) * (ve[n] || 1);
  },
  ye = function (e) {
    var n =
      /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        e
      );
    return n
      ? xe({
          h: pe(n[1], n[2]),
          s: Number(n[3]),
          l: Number(n[4]),
          a: n[5] === void 0 ? 1 : Number(n[5]) / (n[6] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  xe = function (e) {
    var n = e.s,
      t = e.l;
    return {
      h: e.h,
      s:
        (n *= (t < 50 ? t : 100 - t) / 100) > 0 ? ((2 * n) / (t + n)) * 100 : 0,
      v: t + n,
      a: e.a,
    };
  },
  we = function (e) {
    return _e(re(e));
  },
  te = function (e) {
    var n = e.s,
      t = e.v,
      r = e.a,
      o = ((200 - n) * t) / 100;
    return {
      h: v(e.h),
      s: v(
        o > 0 && o < 200 ? ((n * t) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0
      ),
      l: v(o / 2),
      a: v(r, 2),
    };
  },
  P = function (e) {
    var n = te(e);
    return "hsl(" + n.h + ", " + n.s + "%, " + n.l + "%)";
  },
  R = function (e) {
    var n = te(e);
    return "hsla(" + n.h + ", " + n.s + "%, " + n.l + "%, " + n.a + ")";
  },
  re = function (e) {
    var n = e.h,
      t = e.s,
      r = e.v,
      o = e.a;
    (n = (n / 360) * 6), (t /= 100), (r /= 100);
    var a = Math.floor(n),
      c = r * (1 - t),
      s = r * (1 - (n - a) * t),
      l = r * (1 - (1 - n + a) * t),
      u = a % 6;
    return {
      r: v(255 * [r, s, c, c, l, r][u]),
      g: v(255 * [l, r, r, s, c, c][u]),
      b: v(255 * [c, c, l, r, r, s][u]),
      a: v(o, 2),
    };
  },
  ke = function (e) {
    var n =
      /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        e
      );
    return n
      ? oe({
          r: Number(n[1]) / (n[2] ? 100 / 255 : 1),
          g: Number(n[3]) / (n[4] ? 100 / 255 : 1),
          b: Number(n[5]) / (n[6] ? 100 / 255 : 1),
          a: n[7] === void 0 ? 1 : Number(n[7]) / (n[8] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  z = function (e) {
    var n = e.toString(16);
    return n.length < 2 ? "0" + n : n;
  },
  _e = function (e) {
    var n = e.r,
      t = e.g,
      r = e.b,
      o = e.a,
      a = o < 1 ? z(v(255 * o)) : "";
    return "#" + z(n) + z(t) + z(r) + a;
  },
  oe = function (e) {
    var n = e.r,
      t = e.g,
      r = e.b,
      o = e.a,
      a = Math.max(n, t, r),
      c = a - Math.min(n, t, r),
      s = c
        ? a === n
          ? (t - r) / c
          : a === t
          ? 2 + (r - n) / c
          : 4 + (n - t) / c
        : 0;
    return {
      h: v(60 * (s < 0 ? s + 6 : s)),
      s: v(a ? (c / a) * 100 : 0),
      v: v((a / 255) * 100),
      a: o,
    };
  },
  ae = h.memo(function (e) {
    var n = e.hue,
      t = e.onChange,
      r = F(["react-colorful__hue", e.className]);
    return h.createElement(
      "div",
      { className: r },
      h.createElement(
        U,
        {
          onMove: function (o) {
            t({ h: 360 * o.left });
          },
          onKey: function (o) {
            t({ h: C(n + 360 * o.left, 0, 360) });
          },
          "aria-label": "Hue",
          "aria-valuenow": v(n),
          "aria-valuemax": "360",
          "aria-valuemin": "0",
        },
        h.createElement(X, {
          className: "react-colorful__hue-pointer",
          left: n / 360,
          color: P({ h: n, s: 100, v: 100, a: 1 }),
        })
      )
    );
  }),
  ce = h.memo(function (e) {
    var n = e.hsva,
      t = e.onChange,
      r = { backgroundColor: P({ h: n.h, s: 100, v: 100, a: 1 }) };
    return h.createElement(
      "div",
      { className: "react-colorful__saturation", style: r },
      h.createElement(
        U,
        {
          onMove: function (o) {
            t({ s: 100 * o.left, v: 100 - 100 * o.top });
          },
          onKey: function (o) {
            t({
              s: C(n.s + 100 * o.left, 0, 100),
              v: C(n.v - 100 * o.top, 0, 100),
            });
          },
          "aria-label": "Color",
          "aria-valuetext":
            "Saturation " + v(n.s) + "%, Brightness " + v(n.v) + "%",
        },
        h.createElement(X, {
          className: "react-colorful__saturation-pointer",
          top: 1 - n.v / 100,
          left: n.s / 100,
          color: P(n),
        })
      )
    );
  }),
  se = function (e, n) {
    if (e === n) return !0;
    for (var t in e) if (e[t] !== n[t]) return !1;
    return !0;
  },
  le = function (e, n) {
    return e.replace(/\s/g, "") === n.replace(/\s/g, "");
  },
  Me = function (e, n) {
    return e.toLowerCase() === n.toLowerCase() || se(K(e), K(n));
  };
function ie(e, n, t) {
  var r = D(t),
    o = p.useState(function () {
      return e.toHsva(n);
    }),
    a = o[0],
    c = o[1],
    s = p.useRef({ color: n, hsva: a });
  p.useEffect(
    function () {
      if (!e.equal(n, s.current.color)) {
        var u = e.toHsva(n);
        (s.current = { hsva: u, color: n }), c(u);
      }
    },
    [n, e]
  ),
    p.useEffect(
      function () {
        var u;
        se(a, s.current.hsva) ||
          e.equal((u = e.fromHsva(a)), s.current.color) ||
          ((s.current = { hsva: a, color: u }), r(u));
      },
      [a, e, r]
    );
  var l = p.useCallback(function (u) {
    c(function (f) {
      return Object.assign({}, f, u);
    });
  }, []);
  return [a, l];
}
var Ee = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
  Ce = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  },
  J = new Map(),
  ue = function (e) {
    Ee(function () {
      var n = e.current ? e.current.ownerDocument : document;
      if (n !== void 0 && !J.has(n)) {
        var t = n.createElement("style");
        (t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
          J.set(n, t);
        var r = Ce();
        r && t.setAttribute("nonce", r), n.head.appendChild(t);
      }
    }, []);
  },
  Ne = function (e) {
    var n = e.className,
      t = e.colorModel,
      r = e.color,
      o = r === void 0 ? t.defaultColor : r,
      a = e.onChange,
      c = A(e, ["className", "colorModel", "color", "onChange"]),
      s = p.useRef(null);
    ue(s);
    var l = ie(t, o, a),
      u = l[0],
      f = l[1],
      d = F(["react-colorful", n]);
    return h.createElement(
      "div",
      _({}, c, { ref: s, className: d }),
      h.createElement(ce, { hsva: u, onChange: f }),
      h.createElement(ae, {
        hue: u.h,
        onChange: f,
        className: "react-colorful__last-control",
      })
    );
  },
  Oe = {
    defaultColor: "000",
    toHsva: be,
    fromHsva: function (e) {
      return we({ h: e.h, s: e.s, v: e.v, a: 1 });
    },
    equal: Me,
  },
  _n = function (e) {
    return h.createElement(Ne, _({}, e, { colorModel: Oe }));
  },
  Ie = function (e) {
    var n = e.className,
      t = e.hsva,
      r = e.onChange,
      o = {
        backgroundImage:
          "linear-gradient(90deg, " +
          R(Object.assign({}, t, { a: 0 })) +
          ", " +
          R(Object.assign({}, t, { a: 1 })) +
          ")",
      },
      a = F(["react-colorful__alpha", n]),
      c = v(100 * t.a);
    return h.createElement(
      "div",
      { className: a },
      h.createElement("div", {
        className: "react-colorful__alpha-gradient",
        style: o,
      }),
      h.createElement(
        U,
        {
          onMove: function (s) {
            r({ a: s.left });
          },
          onKey: function (s) {
            r({ a: C(t.a + s.left) });
          },
          "aria-label": "Alpha",
          "aria-valuetext": c + "%",
          "aria-valuenow": c,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
        },
        h.createElement(X, {
          className: "react-colorful__alpha-pointer",
          left: t.a,
          color: R(t),
        })
      )
    );
  },
  fe = function (e) {
    var n = e.className,
      t = e.colorModel,
      r = e.color,
      o = r === void 0 ? t.defaultColor : r,
      a = e.onChange,
      c = A(e, ["className", "colorModel", "color", "onChange"]),
      s = p.useRef(null);
    ue(s);
    var l = ie(t, o, a),
      u = l[0],
      f = l[1],
      d = F(["react-colorful", n]);
    return h.createElement(
      "div",
      _({}, c, { ref: s, className: d }),
      h.createElement(ce, { hsva: u, onChange: f }),
      h.createElement(ae, { hue: u.h, onChange: f }),
      h.createElement(Ie, {
        hsva: u,
        onChange: f,
        className: "react-colorful__last-control",
      })
    );
  },
  je = {
    defaultColor: "hsla(0, 0%, 0%, 1)",
    toHsva: ye,
    fromHsva: R,
    equal: le,
  },
  Mn = function (e) {
    return h.createElement(fe, _({}, e, { colorModel: je }));
  },
  Te = {
    defaultColor: "rgba(0, 0, 0, 1)",
    toHsva: ke,
    fromHsva: function (e) {
      var n = re(e);
      return "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + n.a + ")";
    },
    equal: le,
  },
  En = function (e) {
    return h.createElement(fe, _({}, e, { colorModel: Te }));
  },
  Fe = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
const T = Fe,
  he = {};
for (const e of Object.keys(T)) he[T[e]] = e;
const i = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] },
};
var de = i;
for (const e of Object.keys(i)) {
  if (!("channels" in i[e])) throw new Error("missing channels property: " + e);
  if (!("labels" in i[e]))
    throw new Error("missing channel labels property: " + e);
  if (i[e].labels.length !== i[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: n, labels: t } = i[e];
  delete i[e].channels,
    delete i[e].labels,
    Object.defineProperty(i[e], "channels", { value: n }),
    Object.defineProperty(i[e], "labels", { value: t });
}
i.rgb.hsl = function (e) {
  const n = e[0] / 255,
    t = e[1] / 255,
    r = e[2] / 255,
    o = Math.min(n, t, r),
    a = Math.max(n, t, r),
    c = a - o;
  let s, l;
  a === o
    ? (s = 0)
    : n === a
    ? (s = (t - r) / c)
    : t === a
    ? (s = 2 + (r - n) / c)
    : r === a && (s = 4 + (n - t) / c),
    (s = Math.min(s * 60, 360)),
    s < 0 && (s += 360);
  const u = (o + a) / 2;
  return (
    a === o ? (l = 0) : u <= 0.5 ? (l = c / (a + o)) : (l = c / (2 - a - o)),
    [s, l * 100, u * 100]
  );
};
i.rgb.hsv = function (e) {
  let n, t, r, o, a;
  const c = e[0] / 255,
    s = e[1] / 255,
    l = e[2] / 255,
    u = Math.max(c, s, l),
    f = u - Math.min(c, s, l),
    d = function (x) {
      return (u - x) / 6 / f + 1 / 2;
    };
  return (
    f === 0
      ? ((o = 0), (a = 0))
      : ((a = f / u),
        (n = d(c)),
        (t = d(s)),
        (r = d(l)),
        c === u
          ? (o = r - t)
          : s === u
          ? (o = 1 / 3 + n - r)
          : l === u && (o = 2 / 3 + t - n),
        o < 0 ? (o += 1) : o > 1 && (o -= 1)),
    [o * 360, a * 100, u * 100]
  );
};
i.rgb.hwb = function (e) {
  const n = e[0],
    t = e[1];
  let r = e[2];
  const o = i.rgb.hsl(e)[0],
    a = (1 / 255) * Math.min(n, Math.min(t, r));
  return (
    (r = 1 - (1 / 255) * Math.max(n, Math.max(t, r))), [o, a * 100, r * 100]
  );
};
i.rgb.cmyk = function (e) {
  const n = e[0] / 255,
    t = e[1] / 255,
    r = e[2] / 255,
    o = Math.min(1 - n, 1 - t, 1 - r),
    a = (1 - n - o) / (1 - o) || 0,
    c = (1 - t - o) / (1 - o) || 0,
    s = (1 - r - o) / (1 - o) || 0;
  return [a * 100, c * 100, s * 100, o * 100];
};
function ze(e, n) {
  return (e[0] - n[0]) ** 2 + (e[1] - n[1]) ** 2 + (e[2] - n[2]) ** 2;
}
i.rgb.keyword = function (e) {
  const n = he[e];
  if (n) return n;
  let t = 1 / 0,
    r;
  for (const o of Object.keys(T)) {
    const a = T[o],
      c = ze(e, a);
    c < t && ((t = c), (r = o));
  }
  return r;
};
i.keyword.rgb = function (e) {
  return T[e];
};
i.rgb.xyz = function (e) {
  let n = e[0] / 255,
    t = e[1] / 255,
    r = e[2] / 255;
  (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
    (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
    (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92);
  const o = n * 0.4124 + t * 0.3576 + r * 0.1805,
    a = n * 0.2126 + t * 0.7152 + r * 0.0722,
    c = n * 0.0193 + t * 0.1192 + r * 0.9505;
  return [o * 100, a * 100, c * 100];
};
i.rgb.lab = function (e) {
  const n = i.rgb.xyz(e);
  let t = n[0],
    r = n[1],
    o = n[2];
  (t /= 95.047),
    (r /= 100),
    (o /= 108.883),
    (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
    (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
    (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116);
  const a = 116 * r - 16,
    c = 500 * (t - r),
    s = 200 * (r - o);
  return [a, c, s];
};
i.hsl.rgb = function (e) {
  const n = e[0] / 360,
    t = e[1] / 100,
    r = e[2] / 100;
  let o, a, c;
  if (t === 0) return (c = r * 255), [c, c, c];
  r < 0.5 ? (o = r * (1 + t)) : (o = r + t - r * t);
  const s = 2 * r - o,
    l = [0, 0, 0];
  for (let u = 0; u < 3; u++)
    (a = n + (1 / 3) * -(u - 1)),
      a < 0 && a++,
      a > 1 && a--,
      6 * a < 1
        ? (c = s + (o - s) * 6 * a)
        : 2 * a < 1
        ? (c = o)
        : 3 * a < 2
        ? (c = s + (o - s) * (2 / 3 - a) * 6)
        : (c = s),
      (l[u] = c * 255);
  return l;
};
i.hsl.hsv = function (e) {
  const n = e[0];
  let t = e[1] / 100,
    r = e[2] / 100,
    o = t;
  const a = Math.max(r, 0.01);
  (r *= 2), (t *= r <= 1 ? r : 2 - r), (o *= a <= 1 ? a : 2 - a);
  const c = (r + t) / 2,
    s = r === 0 ? (2 * o) / (a + o) : (2 * t) / (r + t);
  return [n, s * 100, c * 100];
};
i.hsv.rgb = function (e) {
  const n = e[0] / 60,
    t = e[1] / 100;
  let r = e[2] / 100;
  const o = Math.floor(n) % 6,
    a = n - Math.floor(n),
    c = 255 * r * (1 - t),
    s = 255 * r * (1 - t * a),
    l = 255 * r * (1 - t * (1 - a));
  switch (((r *= 255), o)) {
    case 0:
      return [r, l, c];
    case 1:
      return [s, r, c];
    case 2:
      return [c, r, l];
    case 3:
      return [c, s, r];
    case 4:
      return [l, c, r];
    case 5:
      return [r, c, s];
  }
};
i.hsv.hsl = function (e) {
  const n = e[0],
    t = e[1] / 100,
    r = e[2] / 100,
    o = Math.max(r, 0.01);
  let a, c;
  c = (2 - t) * r;
  const s = (2 - t) * o;
  return (
    (a = t * o),
    (a /= s <= 1 ? s : 2 - s),
    (a = a || 0),
    (c /= 2),
    [n, a * 100, c * 100]
  );
};
i.hwb.rgb = function (e) {
  const n = e[0] / 360;
  let t = e[1] / 100,
    r = e[2] / 100;
  const o = t + r;
  let a;
  o > 1 && ((t /= o), (r /= o));
  const c = Math.floor(6 * n),
    s = 1 - r;
  (a = 6 * n - c), c & 1 && (a = 1 - a);
  const l = t + a * (s - t);
  let u, f, d;
  switch (c) {
    default:
    case 6:
    case 0:
      (u = s), (f = l), (d = t);
      break;
    case 1:
      (u = l), (f = s), (d = t);
      break;
    case 2:
      (u = t), (f = s), (d = l);
      break;
    case 3:
      (u = t), (f = l), (d = s);
      break;
    case 4:
      (u = l), (f = t), (d = s);
      break;
    case 5:
      (u = s), (f = t), (d = l);
      break;
  }
  return [u * 255, f * 255, d * 255];
};
i.cmyk.rgb = function (e) {
  const n = e[0] / 100,
    t = e[1] / 100,
    r = e[2] / 100,
    o = e[3] / 100,
    a = 1 - Math.min(1, n * (1 - o) + o),
    c = 1 - Math.min(1, t * (1 - o) + o),
    s = 1 - Math.min(1, r * (1 - o) + o);
  return [a * 255, c * 255, s * 255];
};
i.xyz.rgb = function (e) {
  const n = e[0] / 100,
    t = e[1] / 100,
    r = e[2] / 100;
  let o, a, c;
  return (
    (o = n * 3.2406 + t * -1.5372 + r * -0.4986),
    (a = n * -0.9689 + t * 1.8758 + r * 0.0415),
    (c = n * 0.0557 + t * -0.204 + r * 1.057),
    (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
    (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
    (c = c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92),
    (o = Math.min(Math.max(0, o), 1)),
    (a = Math.min(Math.max(0, a), 1)),
    (c = Math.min(Math.max(0, c), 1)),
    [o * 255, a * 255, c * 255]
  );
};
i.xyz.lab = function (e) {
  let n = e[0],
    t = e[1],
    r = e[2];
  (n /= 95.047),
    (t /= 100),
    (r /= 108.883),
    (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
    (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
    (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116);
  const o = 116 * t - 16,
    a = 500 * (n - t),
    c = 200 * (t - r);
  return [o, a, c];
};
i.lab.xyz = function (e) {
  const n = e[0],
    t = e[1],
    r = e[2];
  let o, a, c;
  (a = (n + 16) / 116), (o = t / 500 + a), (c = a - r / 200);
  const s = a ** 3,
    l = o ** 3,
    u = c ** 3;
  return (
    (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
    (o = l > 0.008856 ? l : (o - 16 / 116) / 7.787),
    (c = u > 0.008856 ? u : (c - 16 / 116) / 7.787),
    (o *= 95.047),
    (a *= 100),
    (c *= 108.883),
    [o, a, c]
  );
};
i.lab.lch = function (e) {
  const n = e[0],
    t = e[1],
    r = e[2];
  let o;
  (o = (Math.atan2(r, t) * 360) / 2 / Math.PI), o < 0 && (o += 360);
  const c = Math.sqrt(t * t + r * r);
  return [n, c, o];
};
i.lch.lab = function (e) {
  const n = e[0],
    t = e[1],
    o = (e[2] / 360) * 2 * Math.PI,
    a = t * Math.cos(o),
    c = t * Math.sin(o);
  return [n, a, c];
};
i.rgb.ansi16 = function (e, n = null) {
  const [t, r, o] = e;
  let a = n === null ? i.rgb.hsv(e)[2] : n;
  if (((a = Math.round(a / 50)), a === 0)) return 30;
  let c =
    30 +
    ((Math.round(o / 255) << 2) |
      (Math.round(r / 255) << 1) |
      Math.round(t / 255));
  return a === 2 && (c += 60), c;
};
i.hsv.ansi16 = function (e) {
  return i.rgb.ansi16(i.hsv.rgb(e), e[2]);
};
i.rgb.ansi256 = function (e) {
  const n = e[0],
    t = e[1],
    r = e[2];
  return n === t && t === r
    ? n < 8
      ? 16
      : n > 248
      ? 231
      : Math.round(((n - 8) / 247) * 24) + 232
    : 16 +
        36 * Math.round((n / 255) * 5) +
        6 * Math.round((t / 255) * 5) +
        Math.round((r / 255) * 5);
};
i.ansi16.rgb = function (e) {
  let n = e % 10;
  if (n === 0 || n === 7)
    return e > 50 && (n += 3.5), (n = (n / 10.5) * 255), [n, n, n];
  const t = (~~(e > 50) + 1) * 0.5,
    r = (n & 1) * t * 255,
    o = ((n >> 1) & 1) * t * 255,
    a = ((n >> 2) & 1) * t * 255;
  return [r, o, a];
};
i.ansi256.rgb = function (e) {
  if (e >= 232) {
    const a = (e - 232) * 10 + 8;
    return [a, a, a];
  }
  e -= 16;
  let n;
  const t = (Math.floor(e / 36) / 5) * 255,
    r = (Math.floor((n = e % 36) / 6) / 5) * 255,
    o = ((n % 6) / 5) * 255;
  return [t, r, o];
};
i.rgb.hex = function (e) {
  const t = (
    ((Math.round(e[0]) & 255) << 16) +
    ((Math.round(e[1]) & 255) << 8) +
    (Math.round(e[2]) & 255)
  )
    .toString(16)
    .toUpperCase();
  return "000000".substring(t.length) + t;
};
i.hex.rgb = function (e) {
  const n = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!n) return [0, 0, 0];
  let t = n[0];
  n[0].length === 3 &&
    (t = t
      .split("")
      .map((s) => s + s)
      .join(""));
  const r = parseInt(t, 16),
    o = (r >> 16) & 255,
    a = (r >> 8) & 255,
    c = r & 255;
  return [o, a, c];
};
i.rgb.hcg = function (e) {
  const n = e[0] / 255,
    t = e[1] / 255,
    r = e[2] / 255,
    o = Math.max(Math.max(n, t), r),
    a = Math.min(Math.min(n, t), r),
    c = o - a;
  let s, l;
  return (
    c < 1 ? (s = a / (1 - c)) : (s = 0),
    c <= 0
      ? (l = 0)
      : o === n
      ? (l = ((t - r) / c) % 6)
      : o === t
      ? (l = 2 + (r - n) / c)
      : (l = 4 + (n - t) / c),
    (l /= 6),
    (l %= 1),
    [l * 360, c * 100, s * 100]
  );
};
i.hsl.hcg = function (e) {
  const n = e[1] / 100,
    t = e[2] / 100,
    r = t < 0.5 ? 2 * n * t : 2 * n * (1 - t);
  let o = 0;
  return r < 1 && (o = (t - 0.5 * r) / (1 - r)), [e[0], r * 100, o * 100];
};
i.hsv.hcg = function (e) {
  const n = e[1] / 100,
    t = e[2] / 100,
    r = n * t;
  let o = 0;
  return r < 1 && (o = (t - r) / (1 - r)), [e[0], r * 100, o * 100];
};
i.hcg.rgb = function (e) {
  const n = e[0] / 360,
    t = e[1] / 100,
    r = e[2] / 100;
  if (t === 0) return [r * 255, r * 255, r * 255];
  const o = [0, 0, 0],
    a = (n % 1) * 6,
    c = a % 1,
    s = 1 - c;
  let l = 0;
  switch (Math.floor(a)) {
    case 0:
      (o[0] = 1), (o[1] = c), (o[2] = 0);
      break;
    case 1:
      (o[0] = s), (o[1] = 1), (o[2] = 0);
      break;
    case 2:
      (o[0] = 0), (o[1] = 1), (o[2] = c);
      break;
    case 3:
      (o[0] = 0), (o[1] = s), (o[2] = 1);
      break;
    case 4:
      (o[0] = c), (o[1] = 0), (o[2] = 1);
      break;
    default:
      (o[0] = 1), (o[1] = 0), (o[2] = s);
  }
  return (
    (l = (1 - t) * r),
    [(t * o[0] + l) * 255, (t * o[1] + l) * 255, (t * o[2] + l) * 255]
  );
};
i.hcg.hsv = function (e) {
  const n = e[1] / 100,
    t = e[2] / 100,
    r = n + t * (1 - n);
  let o = 0;
  return r > 0 && (o = n / r), [e[0], o * 100, r * 100];
};
i.hcg.hsl = function (e) {
  const n = e[1] / 100,
    r = (e[2] / 100) * (1 - n) + 0.5 * n;
  let o = 0;
  return (
    r > 0 && r < 0.5
      ? (o = n / (2 * r))
      : r >= 0.5 && r < 1 && (o = n / (2 * (1 - r))),
    [e[0], o * 100, r * 100]
  );
};
i.hcg.hwb = function (e) {
  const n = e[1] / 100,
    t = e[2] / 100,
    r = n + t * (1 - n);
  return [e[0], (r - n) * 100, (1 - r) * 100];
};
i.hwb.hcg = function (e) {
  const n = e[1] / 100,
    r = 1 - e[2] / 100,
    o = r - n;
  let a = 0;
  return o < 1 && (a = (r - o) / (1 - o)), [e[0], o * 100, a * 100];
};
i.apple.rgb = function (e) {
  return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
};
i.rgb.apple = function (e) {
  return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
};
i.gray.rgb = function (e) {
  return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
};
i.gray.hsl = function (e) {
  return [0, 0, e[0]];
};
i.gray.hsv = i.gray.hsl;
i.gray.hwb = function (e) {
  return [0, 100, e[0]];
};
i.gray.cmyk = function (e) {
  return [0, 0, 0, e[0]];
};
i.gray.lab = function (e) {
  return [e[0], 0, 0];
};
i.gray.hex = function (e) {
  const n = Math.round((e[0] / 100) * 255) & 255,
    r = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
i.rgb.gray = function (e) {
  return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
};
const q = de;
function Re() {
  const e = {},
    n = Object.keys(q);
  for (let t = n.length, r = 0; r < t; r++)
    e[n[r]] = { distance: -1, parent: null };
  return e;
}
function qe(e) {
  const n = Re(),
    t = [e];
  for (n[e].distance = 0; t.length; ) {
    const r = t.pop(),
      o = Object.keys(q[r]);
    for (let a = o.length, c = 0; c < a; c++) {
      const s = o[c],
        l = n[s];
      l.distance === -1 &&
        ((l.distance = n[r].distance + 1), (l.parent = r), t.unshift(s));
    }
  }
  return n;
}
function He(e, n) {
  return function (t) {
    return n(e(t));
  };
}
function $e(e, n) {
  const t = [n[e].parent, e];
  let r = q[n[e].parent][e],
    o = n[e].parent;
  for (; n[o].parent; )
    t.unshift(n[o].parent), (r = He(q[n[o].parent][o], r)), (o = n[o].parent);
  return (r.conversion = t), r;
}
var Se = function (e) {
  const n = qe(e),
    t = {},
    r = Object.keys(n);
  for (let o = r.length, a = 0; a < o; a++) {
    const c = r[a];
    n[c].parent !== null && (t[c] = $e(c, n));
  }
  return t;
};
const W = de,
  De = Se,
  E = {},
  Le = Object.keys(W);
function Ke(e) {
  const n = function (...t) {
    const r = t[0];
    return r == null ? r : (r.length > 1 && (t = r), e(t));
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
function Pe(e) {
  const n = function (...t) {
    const r = t[0];
    if (r == null) return r;
    r.length > 1 && (t = r);
    const o = e(t);
    if (typeof o == "object")
      for (let a = o.length, c = 0; c < a; c++) o[c] = Math.round(o[c]);
    return o;
  };
  return "conversion" in e && (n.conversion = e.conversion), n;
}
Le.forEach((e) => {
  (E[e] = {}),
    Object.defineProperty(E[e], "channels", { value: W[e].channels }),
    Object.defineProperty(E[e], "labels", { value: W[e].labels });
  const n = De(e);
  Object.keys(n).forEach((r) => {
    const o = n[r];
    (E[e][r] = Pe(o)), (E[e][r].raw = Ke(o));
  });
});
var We = E;
const Cn = ne(We);
var Be = ge,
  Ae = function () {
    return Be.Date.now();
  },
  Ue = Ae,
  Xe = /\s/;
function Ye(e) {
  for (var n = e.length; n-- && Xe.test(e.charAt(n)); );
  return n;
}
var Ve = Ye,
  Ge = Ve,
  Je = /^\s+/;
function Qe(e) {
  return e && e.slice(0, Ge(e) + 1).replace(Je, "");
}
var Ze = Qe,
  en = Ze,
  Q = B,
  nn = me,
  Z = 0 / 0,
  tn = /^[-+]0x[0-9a-f]+$/i,
  rn = /^0b[01]+$/i,
  on = /^0o[0-7]+$/i,
  an = parseInt;
function cn(e) {
  if (typeof e == "number") return e;
  if (nn(e)) return Z;
  if (Q(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Q(n) ? n + "" : n;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = en(e);
  var t = rn.test(e);
  return t || on.test(e) ? an(e.slice(2), t ? 2 : 8) : tn.test(e) ? Z : +e;
}
var sn = cn,
  ln = B,
  S = Ue,
  ee = sn,
  un = "Expected a function",
  fn = Math.max,
  hn = Math.min;
function dn(e, n, t) {
  var r,
    o,
    a,
    c,
    s,
    l,
    u = 0,
    f = !1,
    d = !1,
    x = !0;
  if (typeof e != "function") throw new TypeError(un);
  (n = ee(n) || 0),
    ln(t) &&
      ((f = !!t.leading),
      (d = "maxWait" in t),
      (a = d ? fn(ee(t.maxWait) || 0, n) : a),
      (x = "trailing" in t ? !!t.trailing : x));
  function N(m) {
    var w = r,
      I = o;
    return (r = o = void 0), (u = m), (c = e.apply(I, w)), c;
  }
  function H(m) {
    return (u = m), (s = setTimeout(g, n)), f ? N(m) : c;
  }
  function M(m) {
    var w = m - l,
      I = m - u,
      Y = n - w;
    return d ? hn(Y, a - I) : Y;
  }
  function b(m) {
    var w = m - l,
      I = m - u;
    return l === void 0 || w >= n || w < 0 || (d && I >= a);
  }
  function g() {
    var m = S();
    if (b(m)) return y(m);
    s = setTimeout(g, M(m));
  }
  function y(m) {
    return (s = void 0), x && r ? N(m) : ((r = o = void 0), c);
  }
  function k() {
    s !== void 0 && clearTimeout(s), (u = 0), (r = l = o = s = void 0);
  }
  function $() {
    return s === void 0 ? c : y(S());
  }
  function O() {
    var m = S(),
      w = b(m);
    if (((r = arguments), (o = this), (l = m), w)) {
      if (s === void 0) return H(l);
      if (d) return clearTimeout(s), (s = setTimeout(g, n)), N(l);
    }
    return s === void 0 && (s = setTimeout(g, n)), c;
  }
  return (O.cancel = k), (O.flush = $), O;
}
var gn = dn,
  mn = gn,
  vn = B,
  bn = "Expected a function";
function pn(e, n, t) {
  var r = !0,
    o = !0;
  if (typeof e != "function") throw new TypeError(bn);
  return (
    vn(t) &&
      ((r = "leading" in t ? !!t.leading : r),
      (o = "trailing" in t ? !!t.trailing : o)),
    mn(e, n, { leading: r, maxWait: n, trailing: o })
  );
}
var yn = pn;
const Nn = ne(yn);
export { En as H, _n as Z, Cn as c, Nn as t, Mn as u };
