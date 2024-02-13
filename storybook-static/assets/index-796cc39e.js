import { _ as At } from "./iframe-92f28330.js";
import { r as m, R as n } from "./index-c013ead5.js";
import {
  m as Ct,
  u as po,
  a as dn,
  b as pl,
  c as J,
  d as Ie,
  e as Dr,
  f as ft,
  r as Tt,
} from "./index-1b89a1c6.js";
import { r as fl, R as $s } from "./index-169ee69c.js";
import "./doctrine-744fe685.js";
import { d as we } from "./index-356e4a49.js";
const { global: Ps } = __STORYBOOK_MODULE_GLOBAL__,
  { logger: Zs } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var js = Object.create,
  ml = Object.defineProperty,
  Ns = Object.getOwnPropertyDescriptor,
  gl = Object.getOwnPropertyNames,
  Is = Object.getPrototypeOf,
  Hs = Object.prototype.hasOwnProperty,
  pn = (e, t) =>
    function () {
      return t || (0, e[gl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Vs = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of gl(t))
        !Hs.call(e, o) &&
          o !== r &&
          ml(e, o, {
            get: () => t[o],
            enumerable: !(a = Ns(t, o)) || a.enumerable,
          });
    return e;
  },
  hl = (e, t, r) => (
    (r = e != null ? js(Is(e)) : {}),
    Vs(
      t || !e || !e.__esModule
        ? ml(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
function Bt() {
  return (
    (Bt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Bt.apply(this, arguments)
  );
}
function zs(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ir(e, t) {
  return (
    (ir = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    ir(e, t)
  );
}
function qs(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ir(e, t);
}
function Pa(e) {
  return (
    (Pa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Pa(e)
  );
}
function Us(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ws() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Zr(e, t, r) {
  return (
    Ws()
      ? (Zr = Reflect.construct.bind())
      : (Zr = function (a, o, l) {
          var s = [null];
          s.push.apply(s, o);
          var u = Function.bind.apply(a, s),
            i = new u();
          return l && ir(i, l.prototype), i;
        }),
    Zr.apply(null, arguments)
  );
}
function Za(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Za = function (r) {
      if (r === null || !Us(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, a);
      }
      function a() {
        return Zr(r, arguments, Pa(this).constructor);
      }
      return (
        (a.prototype = Object.create(r.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ir(a, r)
      );
    }),
    Za(e)
  );
}
var Gs = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function Ys() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var a = t[0],
    o = [],
    l;
  for (l = 1; l < t.length; l += 1) o.push(t[l]);
  return (
    o.forEach(function (s) {
      a = a.replace(/%[a-z]/, s);
    }),
    a
  );
}
var qe = (function (e) {
  qs(t, e);
  function t(r) {
    for (
      var a, o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), s = 1;
      s < o;
      s++
    )
      l[s - 1] = arguments[s];
    return (
      (a = e.call(this, Ys.apply(void 0, [Gs[r]].concat(l))) || this), zs(a)
    );
  }
  return t;
})(Za(Error));
function wa(e) {
  return Math.round(e * 255);
}
function Ks(e, t, r) {
  return wa(e) + "," + wa(t) + "," + wa(r);
}
function sr(e, t, r, a) {
  if ((a === void 0 && (a = Ks), t === 0)) return a(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    s = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    i = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (i = s))
    : o >= 1 && o < 2
    ? ((u = s), (i = l))
    : o >= 2 && o < 3
    ? ((i = l), (c = s))
    : o >= 3 && o < 4
    ? ((i = s), (c = l))
    : o >= 4 && o < 5
    ? ((u = s), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = s));
  var d = r - l / 2,
    f = u + d,
    p = i + d,
    g = c + d;
  return a(f, p, g);
}
var fo = {
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
function Xs(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return fo[t] ? "#" + fo[t] : e;
}
var Js = /^#[a-fA-F0-9]{6}$/,
  Qs = /^#[a-fA-F0-9]{8}$/,
  e0 = /^#[a-fA-F0-9]{3}$/,
  t0 = /^#[a-fA-F0-9]{4}$/,
  Sa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  r0 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  a0 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  n0 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function ea(e) {
  if (typeof e != "string") throw new qe(3);
  var t = Xs(e);
  if (t.match(Js))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(Qs)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(e0))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(t0)) {
    var a = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: a,
    };
  }
  var o = Sa.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
    };
  var l = r0.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha:
        parseFloat("" + l[4]) > 1
          ? parseFloat("" + l[4]) / 100
          : parseFloat("" + l[4]),
    };
  var s = a0.exec(t);
  if (s) {
    var u = parseInt("" + s[1], 10),
      i = parseInt("" + s[2], 10) / 100,
      c = parseInt("" + s[3], 10) / 100,
      d = "rgb(" + sr(u, i, c) + ")",
      f = Sa.exec(d);
    if (!f) throw new qe(4, t, d);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10),
    };
  }
  var p = n0.exec(t.substring(0, 50));
  if (p) {
    var g = parseInt("" + p[1], 10),
      h = parseInt("" + p[2], 10) / 100,
      b = parseInt("" + p[3], 10) / 100,
      A = "rgb(" + sr(g, h, b) + ")",
      w = Sa.exec(A);
    if (!w) throw new qe(4, t, A);
    return {
      red: parseInt("" + w[1], 10),
      green: parseInt("" + w[2], 10),
      blue: parseInt("" + w[3], 10),
      alpha:
        parseFloat("" + p[4]) > 1
          ? parseFloat("" + p[4]) / 100
          : parseFloat("" + p[4]),
    };
  }
  throw new qe(5);
}
function o0(e) {
  var t = e.red / 255,
    r = e.green / 255,
    a = e.blue / 255,
    o = Math.max(t, r, a),
    l = Math.min(t, r, a),
    s = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: s };
  var u,
    i = o - l,
    c = s > 0.5 ? i / (2 - o - l) : i / (o + l);
  switch (o) {
    case t:
      u = (r - a) / i + (r < a ? 6 : 0);
      break;
    case r:
      u = (a - t) / i + 2;
      break;
    default:
      u = (t - r) / i + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: s, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: s }
  );
}
function bl(e) {
  return o0(ea(e));
}
var l0 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  ja = l0;
function mt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Ca(e) {
  return mt(Math.round(e * 255));
}
function i0(e, t, r) {
  return ja("#" + Ca(e) + Ca(t) + Ca(r));
}
function Wr(e, t, r) {
  return sr(e, t, r, i0);
}
function s0(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Wr(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Wr(e.hue, e.saturation, e.lightness);
  throw new qe(1);
}
function u0(e, t, r, a) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof a == "number"
  )
    return a >= 1 ? Wr(e, t, r) : "rgba(" + sr(e, t, r) + "," + a + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
    return e.alpha >= 1
      ? Wr(e.hue, e.saturation, e.lightness)
      : "rgba(" + sr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new qe(2);
}
function Na(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ja("#" + mt(e) + mt(t) + mt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ja("#" + mt(e.red) + mt(e.green) + mt(e.blue));
  throw new qe(6);
}
function ur(e, t, r, a) {
  if (typeof e == "string" && typeof t == "number") {
    var o = ea(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof a == "number"
    )
      return a >= 1
        ? Na(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + a + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
      return e.alpha >= 1
        ? Na(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new qe(7);
}
var c0 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  d0 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  p0 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  f0 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function yl(e) {
  if (typeof e != "object") throw new qe(8);
  if (d0(e)) return ur(e);
  if (c0(e)) return Na(e);
  if (f0(e)) return u0(e);
  if (p0(e)) return s0(e);
  throw new qe(8);
}
function vl(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : vl(e, t, a);
  };
}
function ta(e) {
  return vl(e, e.length, []);
}
function ra(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function m0(e, t) {
  if (t === "transparent") return t;
  var r = bl(t);
  return yl(Bt({}, r, { lightness: ra(0, 1, r.lightness - parseFloat(e)) }));
}
var g0 = ta(m0),
  h0 = g0;
function b0(e, t) {
  if (t === "transparent") return t;
  var r = bl(t);
  return yl(Bt({}, r, { lightness: ra(0, 1, r.lightness + parseFloat(e)) }));
}
var y0 = ta(b0),
  v0 = y0;
function E0(e, t) {
  if (t === "transparent") return t;
  var r = ea(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = Bt({}, r, { alpha: ra(0, 1, (a * 100 + parseFloat(e) * 100) / 100) });
  return ur(o);
}
var x0 = ta(E0),
  A0 = x0;
function w0(e, t) {
  if (t === "transparent") return t;
  var r = ea(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = Bt({}, r, {
      alpha: ra(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return ur(o);
}
var S0 = ta(w0),
  C0 = S0,
  j = {
    primary: "#FF4785",
    secondary: "#029CFD",
    tertiary: "#FAFBFC",
    ancillary: "#22a699",
    orange: "#FC521F",
    gold: "#FFAE00",
    green: "#66BF3C",
    seafoam: "#37D5D3",
    purple: "#6F2CAC",
    ultraviolet: "#2A0481",
    lightest: "#FFFFFF",
    lighter: "#F7FAFC",
    light: "#EEF3F6",
    mediumlight: "#ECF4F9",
    medium: "#D9E8F2",
    mediumdark: "#73828C",
    dark: "#5C6870",
    darker: "#454E54",
    darkest: "#2E3438",
    border: "hsla(203, 50%, 30%, 0.15)",
    positive: "#66BF3C",
    negative: "#FF4400",
    warning: "#E69D00",
    critical: "#FFFFFF",
    defaultText: "#2E3438",
    inverseText: "#FFFFFF",
    positiveText: "#448028",
    negativeText: "#D43900",
    warningText: "#A15C20",
  },
  it = {
    app: "#F6F9FC",
    bar: j.lightest,
    content: j.lightest,
    preview: j.lightest,
    gridCellSize: 10,
    hoverable: C0(0.9, j.secondary),
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
    critical: "#FF4400",
  },
  Ue = {
    fonts: {
      base: [
        '"Nunito Sans"',
        "-apple-system",
        '".SFNSText-Regular"',
        '"San Francisco"',
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(", "),
      mono: [
        "ui-monospace",
        "Menlo",
        "Monaco",
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        "monospace",
      ].join(", "),
    },
    weight: { regular: 400, bold: 700 },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  },
  _0 = {
    base: "light",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: it.app,
    appContentBg: j.lightest,
    appPreviewBg: j.lightest,
    appBorderColor: j.border,
    appBorderRadius: 4,
    fontBase: Ue.fonts.base,
    fontCode: Ue.fonts.mono,
    textColor: j.darkest,
    textInverseColor: j.lightest,
    textMutedColor: j.dark,
    barTextColor: j.mediumdark,
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: j.lightest,
    buttonBg: it.app,
    buttonBorder: j.medium,
    booleanBg: j.mediumlight,
    booleanSelectedBg: j.lightest,
    inputBg: j.lightest,
    inputBorder: j.border,
    inputTextColor: j.darkest,
    inputBorderRadius: 4,
  },
  mo = _0,
  k0 = {
    base: "dark",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: "#222425",
    appContentBg: "#1B1C1D",
    appPreviewBg: j.lightest,
    appBorderColor: "rgba(255,255,255,.1)",
    appBorderRadius: 4,
    fontBase: Ue.fonts.base,
    fontCode: Ue.fonts.mono,
    textColor: "#C9CDCF",
    textInverseColor: "#222425",
    textMutedColor: "#798186",
    barTextColor: "#798186",
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: "#292C2E",
    buttonBg: "#222425",
    buttonBorder: "rgba(255,255,255,.1)",
    booleanBg: "#222425",
    booleanSelectedBg: "#2E3438",
    inputBg: "#1B1C1D",
    inputBorder: "rgba(255,255,255,.1)",
    inputTextColor: j.lightest,
    inputBorderRadius: 4,
  },
  O0 = k0,
  { window: _a } = Ps,
  R0 = (e) => ({ color: e }),
  F0 = (e) =>
    typeof e != "string"
      ? (Zs.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
        ),
        !1)
      : !0,
  T0 = (e) => !/(gradient|var|calc)/.test(e),
  D0 = (e, t) =>
    e === "darken"
      ? ur(`${h0(1, t)}`, 0.95)
      : e === "lighten"
      ? ur(`${v0(1, t)}`, 0.95)
      : t,
  L0 = (e) => (t) => {
    if (!F0(t) || !T0(t)) return t;
    try {
      return D0(e, t);
    } catch {
      return t;
    }
  },
  nr = L0("lighten"),
  El = () =>
    !_a || !_a.matchMedia
      ? "light"
      : _a.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  Ia = { light: mo, dark: O0, normal: mo };
El();
__STORYBOOK_MODULE_CLIENT_LOGGER__;
var M0 = pn({
    "../../node_modules/react-is/cjs/react-is.development.js"(e) {
      (function () {
        var t = typeof Symbol == "function" && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          a = t ? Symbol.for("react.portal") : 60106,
          o = t ? Symbol.for("react.fragment") : 60107,
          l = t ? Symbol.for("react.strict_mode") : 60108,
          s = t ? Symbol.for("react.profiler") : 60114,
          u = t ? Symbol.for("react.provider") : 60109,
          i = t ? Symbol.for("react.context") : 60110,
          c = t ? Symbol.for("react.async_mode") : 60111,
          d = t ? Symbol.for("react.concurrent_mode") : 60111,
          f = t ? Symbol.for("react.forward_ref") : 60112,
          p = t ? Symbol.for("react.suspense") : 60113,
          g = t ? Symbol.for("react.suspense_list") : 60120,
          h = t ? Symbol.for("react.memo") : 60115,
          b = t ? Symbol.for("react.lazy") : 60116,
          A = t ? Symbol.for("react.block") : 60121,
          w = t ? Symbol.for("react.fundamental") : 60117,
          k = t ? Symbol.for("react.responder") : 60118,
          v = t ? Symbol.for("react.scope") : 60119;
        function E(B) {
          return (
            typeof B == "string" ||
            typeof B == "function" ||
            B === o ||
            B === d ||
            B === s ||
            B === l ||
            B === p ||
            B === g ||
            (typeof B == "object" &&
              B !== null &&
              (B.$$typeof === b ||
                B.$$typeof === h ||
                B.$$typeof === u ||
                B.$$typeof === i ||
                B.$$typeof === f ||
                B.$$typeof === w ||
                B.$$typeof === k ||
                B.$$typeof === v ||
                B.$$typeof === A))
          );
        }
        function y(B) {
          if (typeof B == "object" && B !== null) {
            var Fe = B.$$typeof;
            switch (Fe) {
              case r:
                var Me = B.type;
                switch (Me) {
                  case c:
                  case d:
                  case o:
                  case s:
                  case l:
                  case p:
                    return Me;
                  default:
                    var ut = Me && Me.$$typeof;
                    switch (ut) {
                      case i:
                      case f:
                      case b:
                      case h:
                      case u:
                        return ut;
                      default:
                        return Fe;
                    }
                }
              case a:
                return Fe;
            }
          }
        }
        var x = c,
          C = d,
          S = i,
          O = u,
          R = r,
          F = f,
          L = o,
          T = b,
          Z = h,
          D = a,
          M = s,
          N = l,
          V = p,
          $ = !1;
        function I(B) {
          return (
            $ ||
              (($ = !0),
              console.warn(
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              )),
            Y(B) || y(B) === c
          );
        }
        function Y(B) {
          return y(B) === d;
        }
        function ee(B) {
          return y(B) === i;
        }
        function G(B) {
          return y(B) === u;
        }
        function K(B) {
          return typeof B == "object" && B !== null && B.$$typeof === r;
        }
        function P(B) {
          return y(B) === f;
        }
        function z(B) {
          return y(B) === o;
        }
        function q(B) {
          return y(B) === b;
        }
        function oe(B) {
          return y(B) === h;
        }
        function de(B) {
          return y(B) === a;
        }
        function Je(B) {
          return y(B) === s;
        }
        function xe(B) {
          return y(B) === l;
        }
        function Le(B) {
          return y(B) === p;
        }
        (e.AsyncMode = x),
          (e.ConcurrentMode = C),
          (e.ContextConsumer = S),
          (e.ContextProvider = O),
          (e.Element = R),
          (e.ForwardRef = F),
          (e.Fragment = L),
          (e.Lazy = T),
          (e.Memo = Z),
          (e.Portal = D),
          (e.Profiler = M),
          (e.StrictMode = N),
          (e.Suspense = V),
          (e.isAsyncMode = I),
          (e.isConcurrentMode = Y),
          (e.isContextConsumer = ee),
          (e.isContextProvider = G),
          (e.isElement = K),
          (e.isForwardRef = P),
          (e.isFragment = z),
          (e.isLazy = q),
          (e.isMemo = oe),
          (e.isPortal = de),
          (e.isProfiler = Je),
          (e.isStrictMode = xe),
          (e.isSuspense = Le),
          (e.isValidElementType = E),
          (e.typeOf = y);
      })();
    },
  }),
  B0 = pn({
    "../../node_modules/react-is/index.js"(e, t) {
      t.exports = M0();
    },
  }),
  xl = pn({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      var r = B0(),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        l = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      (u[r.ForwardRef] = l), (u[r.Memo] = s);
      function i(A) {
        return r.isMemo(A) ? s : u[A.$$typeof] || a;
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        h = Object.prototype;
      function b(A, w, k) {
        if (typeof w != "string") {
          if (h) {
            var v = g(w);
            v && v !== h && b(A, v, k);
          }
          var E = d(w);
          f && (E = E.concat(f(w)));
          for (var y = i(A), x = i(w), C = 0; C < E.length; ++C) {
            var S = E[C];
            if (!o[S] && !(k && k[S]) && !(x && x[S]) && !(y && y[S])) {
              var O = p(w, S);
              try {
                c(A, S, O);
              } catch {}
            }
          }
        }
        return A;
      }
      t.exports = b;
    },
  });
function Ha() {
  return (
    (Ha = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Ha.apply(this, arguments)
  );
}
function Al(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  fn = Al(function (e) {
    return (
      $0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function P0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Z0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var j0 = (function () {
    function e(r) {
      var a = this;
      (this._insertTag = function (o) {
        var l;
        a.tags.length === 0
          ? a.insertionPoint
            ? (l = a.insertionPoint.nextSibling)
            : a.prepend
            ? (l = a.container.firstChild)
            : (l = a.before)
          : (l = a.tags[a.tags.length - 1].nextSibling),
          a.container.insertBefore(o, l),
          a.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Z0(this));
        var a = this.tags[this.tags.length - 1],
          o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
        if (
          (o &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !o),
          this.isSpeedy)
        ) {
          var l = P0(a);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch (s) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                s
              );
          }
        } else a.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  ce = "-ms-",
  Gr = "-moz-",
  U = "-webkit-",
  mn = "comm",
  gn = "rule",
  hn = "decl",
  N0 = "@import",
  wl = "@keyframes",
  I0 = "@layer",
  H0 = Math.abs,
  aa = String.fromCharCode,
  V0 = Object.assign;
function z0(e, t) {
  return se(e, 0) ^ 45
    ? (((((((t << 2) ^ se(e, 0)) << 2) ^ se(e, 1)) << 2) ^ se(e, 2)) << 2) ^
        se(e, 3)
    : 0;
}
function Sl(e) {
  return e.trim();
}
function q0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function Va(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, r) {
  return e.slice(t, r);
}
function He(e) {
  return e.length;
}
function bn(e) {
  return e.length;
}
function Lr(e, t) {
  return t.push(e), e;
}
function U0(e, t) {
  return e.map(t).join("");
}
var na = 1,
  $t = 1,
  Cl = 0,
  he = 0,
  re = 0,
  qt = "";
function oa(e, t, r, a, o, l, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: a,
    props: o,
    children: l,
    line: na,
    column: $t,
    length: s,
    return: "",
  };
}
function er(e, t) {
  return V0(oa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function W0() {
  return re;
}
function G0() {
  return (
    (re = he > 0 ? se(qt, --he) : 0), $t--, re === 10 && (($t = 1), na--), re
  );
}
function be() {
  return (
    (re = he < Cl ? se(qt, he++) : 0), $t++, re === 10 && (($t = 1), na++), re
  );
}
function Ye() {
  return se(qt, he);
}
function jr() {
  return he;
}
function xr(e, t) {
  return cr(qt, e, t);
}
function dr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _l(e) {
  return (na = $t = 1), (Cl = He((qt = e))), (he = 0), [];
}
function kl(e) {
  return (qt = ""), e;
}
function Nr(e) {
  return Sl(xr(he - 1, za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Y0(e) {
  for (; (re = Ye()) && re < 33; ) be();
  return dr(e) > 2 || dr(re) > 3 ? "" : " ";
}
function K0(e, t) {
  for (
    ;
    --t &&
    be() &&
    !(re < 48 || re > 102 || (re > 57 && re < 65) || (re > 70 && re < 97));

  );
  return xr(e, jr() + (t < 6 && Ye() == 32 && be() == 32));
}
function za(e) {
  for (; be(); )
    switch (re) {
      case e:
        return he;
      case 34:
      case 39:
        e !== 34 && e !== 39 && za(re);
        break;
      case 40:
        e === 41 && za(e);
        break;
      case 92:
        be();
        break;
    }
  return he;
}
function X0(e, t) {
  for (; be() && e + re !== 47 + 10 && !(e + re === 42 + 42 && Ye() === 47); );
  return "/*" + xr(t, he - 1) + "*" + aa(e === 47 ? e : be());
}
function J0(e) {
  for (; !dr(Ye()); ) be();
  return xr(e, he);
}
function Q0(e) {
  return kl(Ir("", null, null, null, [""], (e = _l(e)), 0, [0], e));
}
function Ir(e, t, r, a, o, l, s, u, i) {
  for (
    var c = 0,
      d = 0,
      f = s,
      p = 0,
      g = 0,
      h = 0,
      b = 1,
      A = 1,
      w = 1,
      k = 0,
      v = "",
      E = o,
      y = l,
      x = a,
      C = v;
    A;

  )
    switch (((h = k), (k = be()))) {
      case 40:
        if (h != 108 && se(C, f - 1) == 58) {
          Va((C += W(Nr(k), "&", "&\f")), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Nr(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Y0(h);
        break;
      case 92:
        C += K0(jr() - 1, 7);
        continue;
      case 47:
        switch (Ye()) {
          case 42:
          case 47:
            Lr(eu(X0(be(), jr()), t, r), i);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * b:
        u[c++] = He(C) * w;
      case 125 * b:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            A = 0;
          case 59 + d:
            w == -1 && (C = W(C, /\f/g, "")),
              g > 0 &&
                He(C) - f &&
                Lr(
                  g > 32
                    ? ho(C + ";", a, r, f - 1)
                    : ho(W(C, " ", "") + ";", a, r, f - 2),
                  i
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Lr((x = go(C, t, r, c, d, o, u, v, (E = []), (y = []), f)), l),
              k === 123)
            )
              if (d === 0) Ir(C, t, x, x, E, l, f, u, y);
              else
                switch (p === 99 && se(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ir(
                      e,
                      x,
                      x,
                      a && Lr(go(e, x, x, 0, 0, o, u, v, o, (E = []), f), y),
                      o,
                      y,
                      f,
                      u,
                      a ? E : y
                    );
                    break;
                  default:
                    Ir(C, x, x, x, [""], y, 0, u, y);
                }
        }
        (c = d = g = 0), (b = w = 1), (v = C = ""), (f = s);
        break;
      case 58:
        (f = 1 + He(C)), (g = h);
      default:
        if (b < 1) {
          if (k == 123) --b;
          else if (k == 125 && b++ == 0 && G0() == 125) continue;
        }
        switch (((C += aa(k)), k * b)) {
          case 38:
            w = d > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (u[c++] = (He(C) - 1) * w), (w = 1);
            break;
          case 64:
            Ye() === 45 && (C += Nr(be())),
              (p = Ye()),
              (d = f = He((v = C += J0(jr())))),
              k++;
            break;
          case 45:
            h === 45 && He(C) == 2 && (b = 0);
        }
    }
  return l;
}
function go(e, t, r, a, o, l, s, u, i, c, d) {
  for (
    var f = o - 1, p = o === 0 ? l : [""], g = bn(p), h = 0, b = 0, A = 0;
    h < a;
    ++h
  )
    for (var w = 0, k = cr(e, f + 1, (f = H0((b = s[h])))), v = e; w < g; ++w)
      (v = Sl(b > 0 ? p[w] + " " + k : W(k, /&\f/g, p[w]))) && (i[A++] = v);
  return oa(e, t, r, o === 0 ? gn : u, i, c, d);
}
function eu(e, t, r) {
  return oa(e, t, r, mn, aa(W0()), cr(e, 2, -2), 0);
}
function ho(e, t, r, a) {
  return oa(e, t, r, hn, cr(e, 0, a), cr(e, a + 1, -1), a);
}
function Mt(e, t) {
  for (var r = "", a = bn(e), o = 0; o < a; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function tu(e, t, r, a) {
  switch (e.type) {
    case I0:
      if (e.children.length) break;
    case N0:
    case hn:
      return (e.return = e.return || e.value);
    case mn:
      return "";
    case wl:
      return (e.return = e.value + "{" + Mt(e.children, a) + "}");
    case gn:
      e.value = e.props.join(",");
  }
  return He((r = Mt(e.children, a)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function ru(e) {
  var t = bn(e);
  return function (r, a, o, l) {
    for (var s = "", u = 0; u < t; u++) s += e[u](r, a, o, l) || "";
    return s;
  };
}
var bo = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var a = e(r);
      return t.set(r, a), a;
    };
  },
  au = function (e, t, r) {
    for (
      var a = 0, o = 0;
      (a = o), (o = Ye()), a === 38 && o === 12 && (t[r] = 1), !dr(o);

    )
      be();
    return xr(e, he);
  },
  nu = function (e, t) {
    var r = -1,
      a = 44;
    do
      switch (dr(a)) {
        case 0:
          a === 38 && Ye() === 12 && (t[r] = 1), (e[r] += au(he - 1, t, r));
          break;
        case 2:
          e[r] += Nr(a);
          break;
        case 4:
          if (a === 44) {
            (e[++r] = Ye() === 58 ? "&\f" : ""), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += aa(a);
      }
    while ((a = be()));
    return e;
  },
  ou = function (e, t) {
    return kl(nu(_l(e), t));
  },
  yo = new WeakMap(),
  lu = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          a = e.column === r.column && e.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !yo.get(r)) &&
        !a
      ) {
        yo.set(e, !0);
        for (
          var o = [], l = ou(t, o), s = r.props, u = 0, i = 0;
          u < l.length;
          u++
        )
          for (var c = 0; c < s.length; c++, i++)
            e.props[i] = o[u] ? l[u].replace(/&\f/g, s[c]) : s[c] + " " + l[u];
      }
    }
  },
  iu = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  },
  su =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  uu = function (e) {
    return e.type === "comm" && e.children.indexOf(su) > -1;
  },
  cu = function (e) {
    return function (t, r, a) {
      if (!(t.type !== "rule" || e.compat)) {
        var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (o) {
          for (
            var l = !!t.parent, s = l ? t.parent.children : a, u = s.length - 1;
            u >= 0;
            u--
          ) {
            var i = s[u];
            if (i.line < t.line) break;
            if (i.column < t.column) {
              if (uu(i)) return;
              break;
            }
          }
          o.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split("-child")[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  Ol = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  du = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Ol(t[r])) return !0;
    return !1;
  },
  vo = function (e) {
    (e.type = ""),
      (e.value = ""),
      (e.return = ""),
      (e.children = ""),
      (e.props = "");
  },
  pu = function (e, t, r) {
    Ol(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          vo(e))
        : du(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          vo(e)));
  };
function Rl(e, t) {
  switch (z0(e, t)) {
    case 5103:
      return U + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Gr + e + ce + e + e;
    case 6828:
    case 4268:
      return U + e + ce + e + e;
    case 6165:
      return U + e + ce + "flex-" + e + e;
    case 5187:
      return (
        U + e + W(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + ce + "flex-$1$2") + e
      );
    case 5443:
      return U + e + ce + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        U +
        e +
        ce +
        "flex-line-pack" +
        W(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return U + e + ce + W(e, "shrink", "negative") + e;
    case 5292:
      return U + e + ce + W(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        U +
        "box-" +
        W(e, "-grow", "") +
        U +
        e +
        ce +
        W(e, "grow", "positive") +
        e
      );
    case 4554:
      return U + W(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return (
        W(W(W(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return (
        W(
          W(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + ce + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        U +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (He(e) - 1 - t > 6)
        switch (se(e, t + 1)) {
          case 109:
            if (se(e, t + 4) !== 45) break;
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  U +
                  "$2-$3$1" +
                  Gr +
                  (se(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Va(e, "stretch")
              ? Rl(W(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115) break;
    case 6444:
      switch (se(e, He(e) - 3 - (~Va(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + U) + e;
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                U +
                (se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                U +
                "$2$3$1" +
                ce +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return U + e + ce + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + ce + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + ce + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + ce + e + e;
  }
  return e;
}
var fu = function (e, t, r, a) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case hn:
          e.return = Rl(e.value, e.length);
          break;
        case wl:
          return Mt([er(e, { value: W(e.value, "@", "@" + U) })], a);
        case gn:
          if (e.length)
            return U0(e.props, function (o) {
              switch (q0(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Mt(
                    [er(e, { props: [W(o, /:(read-\w+)/, ":" + Gr + "$1")] })],
                    a
                  );
                case "::placeholder":
                  return Mt(
                    [
                      er(e, {
                        props: [W(o, /:(plac\w+)/, ":" + U + "input-$1")],
                      }),
                      er(e, { props: [W(o, /:(plac\w+)/, ":" + Gr + "$1")] }),
                      er(e, { props: [W(o, /:(plac\w+)/, ce + "input-$1")] }),
                    ],
                    a
                  );
              }
              return "";
            });
      }
  },
  mu = [fu],
  gu = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (h) {
        var b = h.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var a = e.stylisPlugins || mu;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      );
    var o = {},
      l,
      s = [];
    (l = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (h) {
          for (
            var b = h.getAttribute("data-emotion").split(" "), A = 1;
            A < b.length;
            A++
          )
            o[b[A]] = !0;
          s.push(h);
        }
      );
    var u,
      i = [lu, iu];
    i.push(
      cu({
        get compat() {
          return g.compat;
        },
      }),
      pu
    );
    {
      var c,
        d = [
          tu,
          function (h) {
            h.root ||
              (h.return
                ? c.insert(h.return)
                : h.value && h.type !== mn && c.insert(h.value + "{}"));
          },
        ],
        f = ru(i.concat(a, d)),
        p = function (h) {
          return Mt(Q0(h), f);
        };
      u = function (h, b, A, w) {
        (c = A),
          b.map !== void 0 &&
            (c = {
              insert: function (k) {
                A.insert(k + b.map);
              },
            }),
          p(h ? h + "{" + b.styles + "}" : b.styles),
          w && (g.inserted[b.name] = !0);
      };
    }
    var g = {
      key: t,
      sheet: new j0({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: u,
    };
    return g.sheet.hydrate(s), g;
  };
function qa() {
  return (
    (qa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    qa.apply(this, arguments)
  );
}
hl(xl());
var hu = !0;
function yn(e, t, r) {
  var a = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (a += o + " ");
    }),
    a
  );
}
var la = function (e, t, r) {
    var a = e.key + "-" + t.name;
    (r === !1 || hu === !1) &&
      e.registered[a] === void 0 &&
      (e.registered[a] = t.styles);
  },
  ia = function (e, t, r) {
    la(e, t, r);
    var a = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? "." + a : "", o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function bu(e) {
  for (var t = 0, r, a = 0, o = e.length; o >= 4; ++a, o -= 4)
    (r =
      (e.charCodeAt(a) & 255) |
      ((e.charCodeAt(++a) & 255) << 8) |
      ((e.charCodeAt(++a) & 255) << 16) |
      ((e.charCodeAt(++a) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(a) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var yu = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Eo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  vu =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  Eu = /[A-Z]|^ms/g,
  Fl = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  vn = function (e) {
    return e.charCodeAt(1) === 45;
  },
  xo = function (e) {
    return e != null && typeof e != "boolean";
  },
  ka = Al(function (e) {
    return vn(e) ? e : e.replace(Eu, "-$&").toLowerCase();
  }),
  Yr = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(Fl, function (r, a, o) {
            return (Ve = { name: a, styles: o, next: Ve }), a;
          });
    }
    return yu[e] !== 1 && !vn(e) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
(Ao =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (wo = ["normal", "none", "initial", "inherit", "unset"]),
  (So = Yr),
  (Co = /^-ms-/),
  (_o = /-(.)/g),
  (Oa = {}),
  (Yr = function (e, t) {
    if (
      e === "content" &&
      (typeof t != "string" ||
        (wo.indexOf(t) === -1 &&
          !Ao.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          "\"'`"
      );
    var r = So(e, t);
    return (
      r !== "" &&
        !vn(e) &&
        e.indexOf("-") !== -1 &&
        Oa[e] === void 0 &&
        ((Oa[e] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            e.replace(Co, "ms-").replace(_o, function (a, o) {
              return o.toUpperCase();
            }) +
            "?"
        )),
      r
    );
  });
var Ao,
  wo,
  So,
  Co,
  _o,
  Oa,
  Tl =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function pr(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR") throw new Error(Tl);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Ve = { name: r.name, styles: r.styles, next: Ve }), r.name;
      if (r.styles !== void 0) {
        var a = r.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (Ve = { name: a.name, styles: a.styles, next: Ve }), (a = a.next);
        var o = r.styles + ";";
        return r.map !== void 0 && (o += r.map), o;
      }
      return xu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ve,
          s = r(e);
        return (Ve = l), pr(e, t, s);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case "string":
      var u = [],
        i = r.replace(Fl, function (d, f, p) {
          var g = "animation" + u.length;
          return (
            u.push(
              "const " +
                g +
                " = keyframes`" +
                p.replace(/^@keyframes animation-\w+/, "") +
                "`"
            ),
            "${" + g + "}"
          );
        });
      u.length &&
        console.error(
          "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
            [].concat(u, ["`" + i + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + i + "`")
        );
      break;
  }
  if (t == null) return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function xu(e, t, r) {
  var a = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) a += pr(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var s = r[l];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (a += l + "{" + t[s] + "}")
          : xo(s) && (a += ka(l) + ":" + Yr(l, s) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR") throw new Error(Tl);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var u = 0; u < s.length; u++)
            xo(s[u]) && (a += ka(l) + ":" + Yr(l, s[u]) + ";");
        else {
          var i = pr(e, t, s);
          switch (l) {
            case "animation":
            case "animationName": {
              a += ka(l) + ":" + i + ";";
              break;
            }
            default:
              l === "undefined" && console.error(vu), (a += l + "{" + i + "}");
          }
        }
      }
    }
  return a;
}
var ko = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Dl;
Dl = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Ve,
  Pt = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var a = !0,
      o = "";
    Ve = void 0;
    var l = e[0];
    l == null || l.raw === void 0
      ? ((a = !1), (o += pr(r, t, l)))
      : (l[0] === void 0 && console.error(Eo), (o += l[0]));
    for (var s = 1; s < e.length; s++)
      (o += pr(r, t, e[s])),
        a && (l[s] === void 0 && console.error(Eo), (o += l[s]));
    var u;
    (o = o.replace(Dl, function (f) {
      return (u = f), "";
    })),
      (ko.lastIndex = 0);
    for (var i = "", c; (c = ko.exec(o)) !== null; ) i += "-" + c[1];
    var d = bu(o) + i;
    return {
      name: d,
      styles: o,
      map: u,
      next: Ve,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  Au = {}.hasOwnProperty,
  En = m.createContext(typeof HTMLElement < "u" ? gu({ key: "css" }) : null);
En.displayName = "EmotionCacheContext";
En.Provider;
var sa = function (e) {
    return m.forwardRef(function (t, r) {
      var a = m.useContext(En);
      return e(t, a, r);
    });
  },
  wt = m.createContext({});
wt.displayName = "EmotionThemeContext";
var wu = function (e, t) {
    if (typeof t == "function") {
      var r = t(e);
      if (r == null || typeof r != "object" || Array.isArray(r))
        throw new Error(
          "[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!"
        );
      return r;
    }
    if (t == null || typeof t != "object" || Array.isArray(t))
      throw new Error(
        "[ThemeProvider] Please make your theme prop a plain object"
      );
    return qa({}, e, t);
  },
  Su = bo(function (e) {
    return bo(function (t) {
      return wu(e, t);
    });
  }),
  Cu = function (e) {
    var t = m.useContext(wt);
    return (
      e.theme !== t && (t = Su(t)(e.theme)),
      m.createElement(wt.Provider, { value: t }, e.children)
    );
  },
  Oo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Ro = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  _u = function (e) {
    var t = e.cache,
      r = e.serialized,
      a = e.isStringTag;
    return (
      la(t, r, a),
      dn(function () {
        return ia(t, r, a);
      }),
      null
    );
  },
  ku = sa(function (e, t, r) {
    var a = e.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var o = e[Oo],
      l = [a],
      s = "";
    typeof e.className == "string"
      ? (s = yn(t.registered, l, e.className))
      : e.className != null && (s = e.className + " ");
    var u = Pt(l, void 0, m.useContext(wt));
    if (u.name.indexOf("-") === -1) {
      var i = e[Ro];
      i && (u = Pt([u, "label:" + i + ";"]));
    }
    s += t.key + "-" + u.name;
    var c = {};
    for (var d in e)
      Au.call(e, d) && d !== "css" && d !== Oo && d !== Ro && (c[d] = e[d]);
    return (
      (c.ref = r),
      (c.className = s),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(_u, {
          cache: t,
          serialized: u,
          isStringTag: typeof o == "string",
        }),
        m.createElement(o, c)
      )
    );
  });
ku.displayName = "EmotionCssPropInternal";
hl(xl());
var Ou = {
    name: "@emotion/react",
    version: "11.11.1",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js",
    },
    exports: {
      ".": {
        module: {
          worker: "./dist/emotion-react.worker.esm.js",
          browser: "./dist/emotion-react.browser.esm.js",
          default: "./dist/emotion-react.esm.js",
        },
        import: "./dist/emotion-react.cjs.mjs",
        default: "./dist/emotion-react.cjs.js",
      },
      "./jsx-runtime": {
        module: {
          worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
          browser:
            "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
          default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
        },
        import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js",
      },
      "./_isolated-hnrs": {
        module: {
          worker:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
          browser:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
          default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
        },
        import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js",
      },
      "./jsx-dev-runtime": {
        module: {
          worker:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
          browser:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
          default:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
        },
        import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js",
      },
      "./package.json": "./package.json",
      "./types/css-prop": "./types/css-prop.d.ts",
      "./macro": {
        types: { import: "./macro.d.mts", default: "./macro.d.ts" },
        default: "./macro.js",
      },
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.*",
    ],
    sideEffects: !1,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: { "test:typescript": "dtslint types" },
    dependencies: {
      "@babel/runtime": "^7.18.3",
      "@emotion/babel-plugin": "^11.11.0",
      "@emotion/cache": "^11.11.0",
      "@emotion/serialize": "^1.1.2",
      "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
      "@emotion/utils": "^1.2.1",
      "@emotion/weak-memoize": "^0.3.1",
      "hoist-non-react-statics": "^3.3.1",
    },
    peerDependencies: { react: ">=16.8.0" },
    peerDependenciesMeta: { "@types/react": { optional: !0 } },
    devDependencies: {
      "@definitelytyped/dtslint": "0.0.112",
      "@emotion/css": "11.11.0",
      "@emotion/css-prettifier": "1.1.3",
      "@emotion/server": "11.11.0",
      "@emotion/styled": "11.11.0",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1",
      typescript: "^4.5.5",
    },
    repository:
      "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: { access: "public" },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js",
      ],
      umdName: "emotionReact",
      exports: {
        envConditions: ["browser", "worker"],
        extra: {
          "./types/css-prop": "./types/css-prop.d.ts",
          "./macro": {
            types: { import: "./macro.d.mts", default: "./macro.d.ts" },
            default: "./macro.js",
          },
        },
      },
    },
  },
  Fo = !1,
  Ru = sa(function (e, t) {
    !Fo &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (Fo = !0));
    var r = e.styles,
      a = Pt([r], void 0, m.useContext(wt)),
      o = m.useRef();
    return (
      po(
        function () {
          var l = t.key + "-global",
            s = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            u = !1,
            i = document.querySelector(
              'style[data-emotion="' + l + " " + a.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            i !== null &&
              ((u = !0), i.setAttribute("data-emotion", l), s.hydrate([i])),
            (o.current = [s, u]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      po(
        function () {
          var l = o.current,
            s = l[0],
            u = l[1];
          if (u) {
            l[1] = !1;
            return;
          }
          if ((a.next !== void 0 && ia(t, a.next, !0), s.tags.length)) {
            var i = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = i), s.flush();
          }
          t.insert("", a, s, !1);
        },
        [t, a.name]
      ),
      null
    );
  });
Ru.displayName = "EmotionGlobal";
function xn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Pt(t);
}
var Ut = function () {
    var e = xn.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Fu = function e(t) {
    for (var r = t.length, a = 0, o = ""; a < r; a++) {
      var l = t[a];
      if (l != null) {
        var s = void 0;
        switch (typeof l) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(l)) s = e(l);
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
                (s = "");
              for (var u in l) l[u] && u && (s && (s += " "), (s += u));
            }
            break;
          }
          default:
            s = l;
        }
        s && (o && (o += " "), (o += s));
      }
    }
    return o;
  };
function Tu(e, t, r) {
  var a = [],
    o = yn(e, a, r);
  return a.length < 2 ? r : o + t(a);
}
var Du = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      dn(function () {
        for (var a = 0; a < r.length; a++) ia(t, r[a], !1);
      }),
      null
    );
  },
  Lu = sa(function (e, t) {
    var r = !1,
      a = [],
      o = function () {
        if (r) throw new Error("css can only be used during render");
        for (var i = arguments.length, c = new Array(i), d = 0; d < i; d++)
          c[d] = arguments[d];
        var f = Pt(c, t.registered);
        return a.push(f), la(t, f, !1), t.key + "-" + f.name;
      },
      l = function () {
        if (r) throw new Error("cx can only be used during render");
        for (var i = arguments.length, c = new Array(i), d = 0; d < i; d++)
          c[d] = arguments[d];
        return Tu(t.registered, o, Fu(c));
      },
      s = { css: o, cx: l, theme: m.useContext(wt) },
      u = e.children(s);
    return (
      (r = !0),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(Du, { cache: t, serializedArr: a }),
        u
      )
    );
  });
Lu.displayName = "EmotionClassNames";
(Ra = !0),
  (To = typeof jest < "u" || typeof vi < "u"),
  Ra &&
    !To &&
    ((Fa = typeof globalThis < "u" ? globalThis : Ra ? window : global),
    (Ta = "__EMOTION_REACT_" + Ou.version.split(".")[0] + "__"),
    Fa[Ta] &&
      console.warn(
        "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
      ),
    (Fa[Ta] = !0));
var Ra,
  To,
  Fa,
  Ta,
  Mu = fn,
  Bu = function (e) {
    return e !== "theme";
  },
  Do = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Mu : Bu;
  },
  Lo = function (e, t, r) {
    var a;
    if (t) {
      var o = t.shouldForwardProp;
      a =
        e.__emotion_forwardProp && o
          ? function (l) {
              return e.__emotion_forwardProp(l) && o(l);
            }
          : o;
    }
    return typeof a != "function" && r && (a = e.__emotion_forwardProp), a;
  },
  Mo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  $u = function (e) {
    var t = e.cache,
      r = e.serialized,
      a = e.isStringTag;
    return (
      la(t, r, a),
      dn(function () {
        return ia(t, r, a);
      }),
      null
    );
  },
  Pu = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var a = t.__emotion_real === t,
      o = (a && t.__emotion_base) || t,
      l,
      s;
    r !== void 0 && ((l = r.label), (s = r.target));
    var u = Lo(t, r, a),
      i = u || Do(o),
      c = !i("as");
    return function () {
      var d = arguments,
        f =
          a && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && f.push("label:" + l + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d);
      else {
        d[0][0] === void 0 && console.error(Mo), f.push(d[0][0]);
        for (var p = d.length, g = 1; g < p; g++)
          d[0][g] === void 0 && console.error(Mo), f.push(d[g], d[0][g]);
      }
      var h = sa(function (b, A, w) {
        var k = (c && b.as) || o,
          v = "",
          E = [],
          y = b;
        if (b.theme == null) {
          y = {};
          for (var x in b) y[x] = b[x];
          y.theme = m.useContext(wt);
        }
        typeof b.className == "string"
          ? (v = yn(A.registered, E, b.className))
          : b.className != null && (v = b.className + " ");
        var C = Pt(f.concat(E), A.registered, y);
        (v += A.key + "-" + C.name), s !== void 0 && (v += " " + s);
        var S = c && u === void 0 ? Do(k) : i,
          O = {};
        for (var R in b) (c && R === "as") || (S(R) && (O[R] = b[R]));
        return (
          (O.className = v),
          (O.ref = w),
          m.createElement(
            m.Fragment,
            null,
            m.createElement($u, {
              cache: A,
              serialized: C,
              isStringTag: typeof k == "string",
            }),
            m.createElement(k, O)
          )
        );
      });
      return (
        (h.displayName =
          l !== void 0
            ? l
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = f),
        (h.__emotion_forwardProp = u),
        Object.defineProperty(h, "toString", {
          value: function () {
            return s === void 0 ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (h.withComponent = function (b, A) {
          return e(b, Ha({}, r, A, { shouldForwardProp: Lo(h, A, !0) })).apply(
            void 0,
            f
          );
        }),
        h
      );
    };
  },
  Zu = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  _ = Pu.bind();
Zu.forEach(function (e) {
  _[e] = _(e);
});
var ju = Ct(1)(({ typography: e }) => ({
  body: {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  },
  "*": { boxSizing: "border-box" },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: e.weight.regular,
    margin: 0,
    padding: 0,
  },
  "button, input, textarea, select": {
    fontFamily: "inherit",
    fontSize: "inherit",
    boxSizing: "border-box",
  },
  sub: { fontSize: "0.8em", bottom: "-0.2em" },
  sup: { fontSize: "0.8em", top: "-0.2em" },
  "b, strong": { fontWeight: e.weight.bold },
  hr: {
    border: "none",
    borderTop: "1px solid silver",
    clear: "both",
    marginBottom: "1.25rem",
  },
  code: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit",
  },
  pre: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
  },
}));
Ct(1)(({ color: e, background: t, typography: r }) => {
  let a = ju({ typography: r });
  return {
    ...a,
    body: {
      ...a.body,
      color: e.defaultText,
      background: t.app,
      overflow: "hidden",
    },
    hr: { ...a.hr, borderTop: `1px solid ${e.border}` },
  };
});
var Nu = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  Iu = Ut`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Ll = Ut`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  Hu = Ut`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  Vu = Ut`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  zu = xn`
  animation: ${Ll} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  qu = xn`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  Uu = {
    rotate360: Iu,
    glow: Ll,
    float: Hu,
    jiggle: Vu,
    inlineGlow: zu,
    hoverable: qu,
  },
  Wu = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Gu = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Yu = (e) =>
    Object.entries(e).reduce((t, [r, a]) => ({ ...t, [r]: R0(a) }), {}),
  Ku = ({ colors: e, mono: t }) => {
    let r = Yu(e);
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: "antialiased",
        "&.tag": r.red3,
        "&.comment": { ...r.green1, fontStyle: "italic" },
        "&.prolog": { ...r.green1, fontStyle: "italic" },
        "&.doctype": { ...r.green1, fontStyle: "italic" },
        "&.cdata": { ...r.green1, fontStyle: "italic" },
        "&.string": r.red1,
        "&.url": r.cyan1,
        "&.symbol": r.cyan1,
        "&.number": r.cyan1,
        "&.boolean": r.cyan1,
        "&.variable": r.cyan1,
        "&.constant": r.cyan1,
        "&.inserted": r.cyan1,
        "&.atrule": r.blue1,
        "&.keyword": r.blue1,
        "&.attr-value": r.blue1,
        "&.punctuation": r.gray1,
        "&.operator": r.gray1,
        "&.function": r.gray1,
        "&.deleted": r.red2,
        "&.important": { fontWeight: "bold" },
        "&.bold": { fontWeight: "bold" },
        "&.italic": { fontStyle: "italic" },
        "&.class-name": r.cyan2,
        "&.selector": r.red3,
        "&.attr-name": r.red4,
        "&.property": r.red4,
        "&.regex": r.red4,
        "&.entity": r.red4,
        "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 },
      },
      "language-json .token.boolean": r.blue1,
      "language-json .token.number": r.blue1,
      "language-json .token.property": r.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  Xu = {
    green1: "#008000",
    red1: "#A31515",
    red2: "#9a050f",
    red3: "#800000",
    red4: "#ff0000",
    gray1: "#393A34",
    cyan1: "#36acaa",
    cyan2: "#2B91AF",
    blue1: "#0000ff",
    blue2: "#00009f",
  },
  Ju = {
    green1: "#7C7C7C",
    red1: "#92C379",
    red2: "#9a050f",
    red3: "#A8FF60",
    red4: "#96CBFE",
    gray1: "#EDEDED",
    cyan1: "#C6C5FE",
    cyan2: "#FFFFB6",
    blue1: "#B474DD",
    blue2: "#00009f",
  },
  Qu = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: j.tertiary,
    ancillary: j.ancillary,
    orange: j.orange,
    gold: j.gold,
    green: j.green,
    seafoam: j.seafoam,
    purple: j.purple,
    ultraviolet: j.ultraviolet,
    lightest: j.lightest,
    lighter: j.lighter,
    light: j.light,
    mediumlight: j.mediumlight,
    medium: j.medium,
    mediumdark: j.mediumdark,
    dark: j.dark,
    darker: j.darker,
    darkest: j.darkest,
    border: j.border,
    positive: j.positive,
    negative: j.negative,
    warning: j.warning,
    critical: j.critical,
    defaultText: e.textColor || j.darkest,
    inverseText: e.textInverseColor || j.lightest,
    positiveText: j.positiveText,
    negativeText: j.negativeText,
    warningText: j.warningText,
  }),
  ec = (e = Ia[El()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: a,
      appBg: o,
      appContentBg: l,
      appPreviewBg: s,
      appBorderColor: u,
      appBorderRadius: i,
      fontBase: c,
      fontCode: d,
      textColor: f,
      textInverseColor: p,
      barTextColor: g,
      barHoverColor: h,
      barSelectedColor: b,
      barBg: A,
      buttonBg: w,
      buttonBorder: k,
      booleanBg: v,
      booleanSelectedBg: E,
      inputBg: y,
      inputBorder: x,
      inputTextColor: C,
      inputBorderRadius: S,
      brandTitle: O,
      brandUrl: R,
      brandImage: F,
      brandTarget: L,
      gridCellSize: T,
      ...Z
    } = e;
    return {
      ...Z,
      base: t,
      color: Qu(e),
      background: {
        app: o,
        bar: A,
        content: l,
        preview: s,
        gridCellSize: T || it.gridCellSize,
        hoverable: it.hoverable,
        positive: it.positive,
        negative: it.negative,
        warning: it.warning,
        critical: it.critical,
      },
      typography: {
        fonts: { base: c, mono: d },
        weight: Ue.weight,
        size: Ue.size,
      },
      animation: Uu,
      easing: Nu,
      input: { background: y, border: x, borderRadius: S, color: C },
      button: { background: w || y, border: k || x },
      boolean: { background: v || x, selectedBackground: E || y },
      layoutMargin: 10,
      appBorderColor: u,
      appBorderRadius: i,
      barTextColor: g,
      barHoverColor: h || a,
      barSelectedColor: b || a,
      barBg: A,
      brand: { title: O, url: R, image: F || (O ? null : void 0), target: L },
      code: Ku({ colors: t === "light" ? Xu : Ju, mono: d }),
      addonActionsTheme: {
        ...(t === "light" ? Gu : Wu),
        BASE_FONT_FAMILY: d,
        BASE_FONT_SIZE: Ue.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: f,
        ARROW_COLOR: A0(0.2, u),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: d,
        TREENODE_FONT_SIZE: Ue.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  Ua =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  tc = Object.create,
  Ml = Object.defineProperty,
  rc = Object.getOwnPropertyDescriptor,
  Bl = Object.getOwnPropertyNames,
  ac = Object.getPrototypeOf,
  nc = Object.prototype.hasOwnProperty,
  H = (e, t) =>
    function () {
      return t || (0, e[Bl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  oc = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Bl(t))
        !nc.call(e, o) &&
          o !== r &&
          Ml(e, o, {
            get: () => t[o],
            enumerable: !(a = rc(t, o)) || a.enumerable,
          });
    return e;
  },
  ve = (e, t, r) => (
    (r = e != null ? tc(ac(e)) : {}),
    oc(
      t || !e || !e.__esModule
        ? Ml(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  lc = H({
    "../../node_modules/refractor/lang/markdown.js"(e, t) {
      (t.exports = r), (r.displayName = "markdown"), (r.aliases = ["md"]);
      function r(a) {
        (function (o) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function s(h) {
            return (
              (h = h.replace(/<inner>/g, function () {
                return l;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")")
            );
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return u;
              }
            ),
            c =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (o.languages.markdown = o.languages.extend("markup", {})),
            o.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: o.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + i + c + "(?:" + i + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + i + c + ")(?:" + i + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(u),
                        inside: o.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + i + ")" + c + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + i + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(u),
                        alias: "important",
                        inside: o.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: s(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: s(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: s(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: s(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (h) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (b) {
                  h !== b &&
                    (o.languages.markdown[h].inside.content.inside[b] =
                      o.languages.markdown[b]);
                }
              );
            }),
            o.hooks.add("after-tokenize", function (h) {
              if (h.language !== "markdown" && h.language !== "md") return;
              function b(A) {
                if (!(!A || typeof A == "string"))
                  for (var w = 0, k = A.length; w < k; w++) {
                    var v = A[w];
                    if (v.type !== "code") {
                      b(v.content);
                      continue;
                    }
                    var E = v.content[1],
                      y = v.content[3];
                    if (
                      E &&
                      y &&
                      E.type === "code-language" &&
                      y.type === "code-block" &&
                      typeof E.content == "string"
                    ) {
                      var x = E.content
                        .replace(/\b#/g, "sharp")
                        .replace(/\b\+\+/g, "pp");
                      x = (/[a-z][\w-]*/i.exec(x) || [""])[0].toLowerCase();
                      var C = "language-" + x;
                      y.alias
                        ? typeof y.alias == "string"
                          ? (y.alias = [y.alias, C])
                          : y.alias.push(C)
                        : (y.alias = [C]);
                    }
                  }
              }
              b(h.tokens);
            }),
            o.hooks.add("wrap", function (h) {
              if (h.type === "code-block") {
                for (var b = "", A = 0, w = h.classes.length; A < w; A++) {
                  var k = h.classes[A],
                    v = /language-(.+)/.exec(k);
                  if (v) {
                    b = v[1];
                    break;
                  }
                }
                var E = o.languages[b];
                if (E) h.content = o.highlight(g(h.content.value), E, b);
                else if (b && b !== "none" && o.plugins.autoloader) {
                  var y =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(Math.random() * 1e16);
                  (h.attributes.id = y),
                    o.plugins.autoloader.loadLanguages(b, function () {
                      var x = document.getElementById(y);
                      x &&
                        (x.innerHTML = o.highlight(
                          x.textContent,
                          o.languages[b],
                          b
                        ));
                    });
                }
              }
            });
          var d = RegExp(o.languages.markup.tag.pattern.source, "gi"),
            f = { amp: "&", lt: "<", gt: ">", quot: '"' },
            p = String.fromCodePoint || String.fromCharCode;
          function g(h) {
            var b = h.replace(d, "");
            return (
              (b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (A, w) {
                if (((w = w.toLowerCase()), w[0] === "#")) {
                  var k;
                  return (
                    w[1] === "x"
                      ? (k = parseInt(w.slice(2), 16))
                      : (k = Number(w.slice(1))),
                    p(k)
                  );
                } else {
                  var v = f[w];
                  return v || A;
                }
              })),
              b
            );
          }
          o.languages.md = o.languages.markdown;
        })(a);
      }
    },
  }),
  ic = H({
    "../../node_modules/refractor/lang/yaml.js"(e, t) {
      (t.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
      function r(a) {
        (function (o) {
          var l = /[*&][^\s[\]{},]+/,
            s =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u =
              "(?:" +
              s.source +
              "(?:[ 	]+" +
              l.source +
              ")?|" +
              l.source +
              "(?:[ 	]+" +
              s.source +
              ")?)",
            i =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function d(f, p) {
            p = (p || "").replace(/m/g, "") + "m";
            var g =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return u;
                })
                .replace(/<<value>>/g, function () {
                  return f;
                });
            return RegExp(g, p);
          }
          (o.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return u;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return u;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + i + "|" + c + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: d(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: d(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: d(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: d(c), lookbehind: !0, greedy: !0 },
            number: {
              pattern: d(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: s,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (o.languages.yml = o.languages.yaml);
        })(a);
      }
    },
  }),
  $l = H({
    "../../node_modules/refractor/lang/typescript.js"(e, t) {
      (t.exports = r), (r.displayName = "typescript"), (r.aliases = ["ts"]);
      function r(a) {
        (function (o) {
          (o.languages.typescript = o.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            o.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete o.languages.typescript.parameter,
            delete o.languages.typescript["literal-property"];
          var l = o.languages.extend("typescript", {});
          delete l["class-name"],
            (o.languages.typescript["class-name"].inside = l),
            o.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: l,
                  },
                },
              },
            }),
            (o.languages.ts = o.languages.typescript);
        })(a);
      }
    },
  }),
  Pl = H({
    "../../node_modules/refractor/lang/jsx.js"(e, t) {
      (t.exports = r), (r.displayName = "jsx"), (r.aliases = []);
      function r(a) {
        (function (o) {
          var l = o.util.clone(o.languages.javascript),
            s = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function c(p, g) {
            return (
              (p = p
                .replace(/<S>/g, function () {
                  return s;
                })
                .replace(/<BRACES>/g, function () {
                  return u;
                })
                .replace(/<SPREAD>/g, function () {
                  return i;
                })),
              RegExp(p, g)
            );
          }
          (i = c(i).source),
            (o.languages.jsx = o.languages.extend("markup", l)),
            (o.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (o.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (o.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (o.languages.jsx.tag.inside.comment = l.comment),
            o.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: c(/<SPREAD>/.source),
                  inside: o.languages.jsx,
                },
              },
              o.languages.jsx.tag
            ),
            o.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: o.languages.jsx,
                  },
                },
              },
              o.languages.jsx.tag
            );
          var d = function (p) {
              return p
                ? typeof p == "string"
                  ? p
                  : typeof p.content == "string"
                  ? p.content
                  : p.content.map(d).join("")
                : "";
            },
            f = function (p) {
              for (var g = [], h = 0; h < p.length; h++) {
                var b = p[h],
                  A = !1;
                if (
                  (typeof b != "string" &&
                    (b.type === "tag" &&
                    b.content[0] &&
                    b.content[0].type === "tag"
                      ? b.content[0].content[0].content === "</"
                        ? g.length > 0 &&
                          g[g.length - 1].tagName ===
                            d(b.content[0].content[1]) &&
                          g.pop()
                        : b.content[b.content.length - 1].content === "/>" ||
                          g.push({
                            tagName: d(b.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : g.length > 0 &&
                        b.type === "punctuation" &&
                        b.content === "{"
                      ? g[g.length - 1].openedBraces++
                      : g.length > 0 &&
                        g[g.length - 1].openedBraces > 0 &&
                        b.type === "punctuation" &&
                        b.content === "}"
                      ? g[g.length - 1].openedBraces--
                      : (A = !0)),
                  (A || typeof b == "string") &&
                    g.length > 0 &&
                    g[g.length - 1].openedBraces === 0)
                ) {
                  var w = d(b);
                  h < p.length - 1 &&
                    (typeof p[h + 1] == "string" ||
                      p[h + 1].type === "plain-text") &&
                    ((w += d(p[h + 1])), p.splice(h + 1, 1)),
                    h > 0 &&
                      (typeof p[h - 1] == "string" ||
                        p[h - 1].type === "plain-text") &&
                      ((w = d(p[h - 1]) + w), p.splice(h - 1, 1), h--),
                    (p[h] = new o.Token("plain-text", w, null, w));
                }
                b.content && typeof b.content != "string" && f(b.content);
              }
            };
          o.hooks.add("after-tokenize", function (p) {
            (p.language !== "jsx" && p.language !== "tsx") || f(p.tokens);
          });
        })(a);
      }
    },
  }),
  sc = H({
    "../../node_modules/refractor/lang/tsx.js"(e, t) {
      var r = Pl(),
        a = $l();
      (t.exports = o), (o.displayName = "tsx"), (o.aliases = []);
      function o(l) {
        l.register(r),
          l.register(a),
          (function (s) {
            var u = s.util.clone(s.languages.typescript);
            (s.languages.tsx = s.languages.extend("jsx", u)),
              delete s.languages.tsx.parameter,
              delete s.languages.tsx["literal-property"];
            var i = s.languages.tsx.tag;
            (i.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + i.pattern.source + ")",
              i.pattern.flags
            )),
              (i.lookbehind = !0);
          })(l);
      }
    },
  }),
  uc = H({
    "../../node_modules/refractor/lang/clike.js"(e, t) {
      (t.exports = r), (r.displayName = "clike"), (r.aliases = []);
      function r(a) {
        a.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
    },
  }),
  cc = H({
    "../../node_modules/refractor/lang/javascript.js"(e, t) {
      (t.exports = r), (r.displayName = "javascript"), (r.aliases = ["js"]);
      function r(a) {
        (a.languages.javascript = a.languages.extend("clike", {
          "class-name": [
            a.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|" +
                  /\d+(?:_\d+)*n/.source +
                  "|" +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (a.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          a.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: a.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: a.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          a.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: a.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          a.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          a.languages.markup &&
            (a.languages.markup.tag.addInlined("script", "javascript"),
            a.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (a.languages.js = a.languages.javascript);
      }
    },
  }),
  Zl = H({
    "../../node_modules/refractor/lang/css.js"(e, t) {
      (t.exports = r), (r.displayName = "css"), (r.aliases = []);
      function r(a) {
        (function (o) {
          var l =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (o.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  l.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + l.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  l.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: l, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (o.languages.css.atrule.inside.rest = o.languages.css);
          var s = o.languages.markup;
          s &&
            (s.tag.addInlined("style", "css"),
            s.tag.addAttribute("style", "css"));
        })(a);
      }
    },
  }),
  jl = H({
    "../../node_modules/refractor/lang/markup.js"(e, t) {
      (t.exports = r),
        (r.displayName = "markup"),
        (r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
      function r(a) {
        (a.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (a.languages.markup.tag.inside["attr-value"].inside.entity =
            a.languages.markup.entity),
          (a.languages.markup.doctype.inside["internal-subset"].inside =
            a.languages.markup),
          a.hooks.add("wrap", function (o) {
            o.type === "entity" &&
              (o.attributes.title = o.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(a.languages.markup.tag, "addInlined", {
            value: function (o, l) {
              var s = {};
              (s["language-" + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[l],
              }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var u = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: s,
                },
              };
              u["language-" + l] = {
                pattern: /[\s\S]+/,
                inside: a.languages[l],
              };
              var i = {};
              (i[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u,
              }),
                a.languages.insertBefore("markup", "cdata", i);
            },
          }),
          Object.defineProperty(a.languages.markup.tag, "addAttribute", {
            value: function (o, l) {
              a.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    o +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, "language-" + l],
                        inside: a.languages[l],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (a.languages.html = a.languages.markup),
          (a.languages.mathml = a.languages.markup),
          (a.languages.svg = a.languages.markup),
          (a.languages.xml = a.languages.extend("markup", {})),
          (a.languages.ssml = a.languages.xml),
          (a.languages.atom = a.languages.xml),
          (a.languages.rss = a.languages.xml);
      }
    },
  }),
  dc = H({
    "../../node_modules/xtend/immutable.js"(e, t) {
      t.exports = a;
      var r = Object.prototype.hasOwnProperty;
      function a() {
        for (var o = {}, l = 0; l < arguments.length; l++) {
          var s = arguments[l];
          for (var u in s) r.call(s, u) && (o[u] = s[u]);
        }
        return o;
      }
    },
  }),
  Nl = H({
    "../../node_modules/property-information/lib/util/schema.js"(e, t) {
      t.exports = a;
      var r = a.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function a(o, l, s) {
        (this.property = o), (this.normal = l), s && (this.space = s);
      }
    },
  }),
  pc = H({
    "../../node_modules/property-information/lib/util/merge.js"(e, t) {
      var r = dc(),
        a = Nl();
      t.exports = o;
      function o(l) {
        for (var s = l.length, u = [], i = [], c = -1, d, f; ++c < s; )
          (d = l[c]), u.push(d.property), i.push(d.normal), (f = d.space);
        return new a(r.apply(null, u), r.apply(null, i), f);
      }
    },
  }),
  An = H({
    "../../node_modules/property-information/normalize.js"(e, t) {
      t.exports = r;
      function r(a) {
        return a.toLowerCase();
      }
    },
  }),
  Il = H({
    "../../node_modules/property-information/lib/util/info.js"(e, t) {
      t.exports = a;
      var r = a.prototype;
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
      function a(o, l) {
        (this.property = o), (this.attribute = l);
      }
    },
  }),
  wn = H({
    "../../node_modules/property-information/lib/util/types.js"(e) {
      var t = 0;
      (e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r());
      function r() {
        return Math.pow(2, ++t);
      }
    },
  }),
  Hl = H({
    "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
      var r = Il(),
        a = wn();
      (t.exports = s), (s.prototype = new r()), (s.prototype.defined = !0);
      var o = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        l = o.length;
      function s(i, c, d, f) {
        var p = -1,
          g;
        for (u(this, "space", f), r.call(this, i, c); ++p < l; )
          (g = o[p]), u(this, g, (d & a[g]) === a[g]);
      }
      function u(i, c, d) {
        d && (i[c] = d);
      }
    },
  }),
  Ar = H({
    "../../node_modules/property-information/lib/util/create.js"(e, t) {
      var r = An(),
        a = Nl(),
        o = Hl();
      t.exports = l;
      function l(s) {
        var u = s.space,
          i = s.mustUseProperty || [],
          c = s.attributes || {},
          d = s.properties,
          f = s.transform,
          p = {},
          g = {},
          h,
          b;
        for (h in d)
          (b = new o(h, f(c, h), d[h], u)),
            i.indexOf(h) !== -1 && (b.mustUseProperty = !0),
            (p[h] = b),
            (g[r(h)] = h),
            (g[r(b.attribute)] = h);
        return new a(p, g, u);
      }
    },
  }),
  fc = H({
    "../../node_modules/property-information/lib/xlink.js"(e, t) {
      var r = Ar();
      t.exports = r({
        space: "xlink",
        transform: a,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function a(o, l) {
        return "xlink:" + l.slice(5).toLowerCase();
      }
    },
  }),
  mc = H({
    "../../node_modules/property-information/lib/xml.js"(e, t) {
      var r = Ar();
      t.exports = r({
        space: "xml",
        transform: a,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
      function a(o, l) {
        return "xml:" + l.slice(3).toLowerCase();
      }
    },
  }),
  gc = H({
    "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(
      e,
      t
    ) {
      t.exports = r;
      function r(a, o) {
        return o in a ? a[o] : o;
      }
    },
  }),
  Vl = H({
    "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(
      e,
      t
    ) {
      var r = gc();
      t.exports = a;
      function a(o, l) {
        return r(o, l.toLowerCase());
      }
    },
  }),
  hc = H({
    "../../node_modules/property-information/lib/xmlns.js"(e, t) {
      var r = Ar(),
        a = Vl();
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: a,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  bc = H({
    "../../node_modules/property-information/lib/aria.js"(e, t) {
      var r = wn(),
        a = Ar(),
        o = r.booleanish,
        l = r.number,
        s = r.spaceSeparated;
      t.exports = a({
        transform: u,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: o,
          ariaAutoComplete: null,
          ariaBusy: o,
          ariaChecked: o,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: s,
          ariaCurrent: null,
          ariaDescribedBy: s,
          ariaDetails: null,
          ariaDisabled: o,
          ariaDropEffect: s,
          ariaErrorMessage: null,
          ariaExpanded: o,
          ariaFlowTo: s,
          ariaGrabbed: o,
          ariaHasPopup: null,
          ariaHidden: o,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: s,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: o,
          ariaMultiLine: o,
          ariaMultiSelectable: o,
          ariaOrientation: null,
          ariaOwns: s,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: o,
          ariaReadOnly: o,
          ariaRelevant: null,
          ariaRequired: o,
          ariaRoleDescription: s,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: o,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null,
        },
      });
      function u(i, c) {
        return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
      }
    },
  }),
  yc = H({
    "../../node_modules/property-information/lib/html.js"(e, t) {
      var r = wn(),
        a = Ar(),
        o = Vl(),
        l = r.boolean,
        s = r.overloadedBoolean,
        u = r.booleanish,
        i = r.number,
        c = r.spaceSeparated,
        d = r.commaSeparated;
      t.exports = a({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: o,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: d,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: c,
          cols: i,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: i | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: s,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: c,
          height: i,
          hidden: l,
          high: i,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: d,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: l,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: l,
          low: i,
          manifest: null,
          max: null,
          maxLength: i,
          media: null,
          method: null,
          min: null,
          minLength: i,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: i,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: c,
          required: l,
          reversed: l,
          rows: i,
          rowSpan: i,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: i,
          sizes: null,
          slot: null,
          span: i,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: i,
          step: null,
          style: null,
          tabIndex: i,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: i,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: i,
          borderColor: null,
          bottomMargin: i,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: i,
          leftMargin: i,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: i,
          marginWidth: i,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: i,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: i,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: i,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: i,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  vc = H({
    "../../node_modules/property-information/html.js"(e, t) {
      var r = pc(),
        a = fc(),
        o = mc(),
        l = hc(),
        s = bc(),
        u = yc();
      t.exports = r([o, a, l, s, u]);
    },
  }),
  Ec = H({
    "../../node_modules/property-information/find.js"(e, t) {
      var r = An(),
        a = Hl(),
        o = Il(),
        l = "data";
      t.exports = c;
      var s = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        i = /[A-Z]/g;
      function c(h, b) {
        var A = r(b),
          w = b,
          k = o;
        return A in h.normal
          ? h.property[h.normal[A]]
          : (A.length > 4 &&
              A.slice(0, 4) === l &&
              s.test(b) &&
              (b.charAt(4) === "-" ? (w = d(b)) : (b = f(b)), (k = a)),
            new k(w, b));
      }
      function d(h) {
        var b = h.slice(5).replace(u, g);
        return l + b.charAt(0).toUpperCase() + b.slice(1);
      }
      function f(h) {
        var b = h.slice(4);
        return u.test(b)
          ? h
          : ((b = b.replace(i, p)),
            b.charAt(0) !== "-" && (b = "-" + b),
            l + b);
      }
      function p(h) {
        return "-" + h.toLowerCase();
      }
      function g(h) {
        return h.charAt(1).toUpperCase();
      }
    },
  }),
  xc = H({
    "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
      t.exports = a;
      var r = /[#.]/g;
      function a(o, l) {
        for (
          var s = o || "", u = l || "div", i = {}, c = 0, d, f, p;
          c < s.length;

        )
          (r.lastIndex = c),
            (p = r.exec(s)),
            (d = s.slice(c, p ? p.index : s.length)),
            d &&
              (f
                ? f === "#"
                  ? (i.id = d)
                  : i.className
                  ? i.className.push(d)
                  : (i.className = [d])
                : (u = d),
              (c += d.length)),
            p && ((f = p[0]), c++);
        return { type: "element", tagName: u, properties: i, children: [] };
      }
    },
  }),
  Ac = H({
    "../../node_modules/space-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = "",
        r = " ",
        a = /[ \t\n\r\f]+/g;
      function o(s) {
        var u = String(s || t).trim();
        return u === t ? [] : u.split(a);
      }
      function l(s) {
        return s.join(r).trim();
      }
    },
  }),
  wc = H({
    "../../node_modules/comma-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = ",",
        r = " ",
        a = "";
      function o(s) {
        for (
          var u = [], i = String(s || a), c = i.indexOf(t), d = 0, f = !1, p;
          !f;

        )
          c === -1 && ((c = i.length), (f = !0)),
            (p = i.slice(d, c).trim()),
            (p || !f) && u.push(p),
            (d = c + 1),
            (c = i.indexOf(t, d));
        return u;
      }
      function l(s, u) {
        var i = u || {},
          c = i.padLeft === !1 ? a : r,
          d = i.padRight ? r : a;
        return (
          s[s.length - 1] === a && (s = s.concat(a)), s.join(d + t + c).trim()
        );
      }
    },
  }),
  Sc = H({
    "../../node_modules/hastscript/factory.js"(e, t) {
      var r = Ec(),
        a = An(),
        o = xc(),
        l = Ac().parse,
        s = wc().parse;
      t.exports = i;
      var u = {}.hasOwnProperty;
      function i(A, w, k) {
        var v = k ? b(k) : null;
        return E;
        function E(x, C) {
          var S = o(x, w),
            O = Array.prototype.slice.call(arguments, 2),
            R = S.tagName.toLowerCase(),
            F;
          if (
            ((S.tagName = v && u.call(v, R) ? v[R] : R),
            C && c(C, S) && (O.unshift(C), (C = null)),
            C)
          )
            for (F in C) y(S.properties, F, C[F]);
          return (
            f(S.children, O),
            S.tagName === "template" &&
              ((S.content = { type: "root", children: S.children }),
              (S.children = [])),
            S
          );
        }
        function y(x, C, S) {
          var O, R, F;
          S == null ||
            S !== S ||
            ((O = r(A, C)),
            (R = O.property),
            (F = S),
            typeof F == "string" &&
              (O.spaceSeparated
                ? (F = l(F))
                : O.commaSeparated
                ? (F = s(F))
                : O.commaOrSpaceSeparated && (F = l(s(F).join(" ")))),
            R === "style" && typeof S != "string" && (F = h(F)),
            R === "className" && x.className && (F = x.className.concat(F)),
            (x[R] = p(O, R, F)));
        }
      }
      function c(A, w) {
        return typeof A == "string" || "length" in A || d(w.tagName, A);
      }
      function d(A, w) {
        var k = w.type;
        return A === "input" || !k || typeof k != "string"
          ? !1
          : typeof w.children == "object" && "length" in w.children
          ? !0
          : ((k = k.toLowerCase()),
            A === "button"
              ? k !== "menu" &&
                k !== "submit" &&
                k !== "reset" &&
                k !== "button"
              : "value" in w);
      }
      function f(A, w) {
        var k, v;
        if (typeof w == "string" || typeof w == "number") {
          A.push({ type: "text", value: String(w) });
          return;
        }
        if (typeof w == "object" && "length" in w) {
          for (k = -1, v = w.length; ++k < v; ) f(A, w[k]);
          return;
        }
        if (typeof w != "object" || !("type" in w))
          throw new Error("Expected node, nodes, or string, got `" + w + "`");
        A.push(w);
      }
      function p(A, w, k) {
        var v, E, y;
        if (typeof k != "object" || !("length" in k)) return g(A, w, k);
        for (E = k.length, v = -1, y = []; ++v < E; ) y[v] = g(A, w, k[v]);
        return y;
      }
      function g(A, w, k) {
        var v = k;
        return (
          A.number || A.positiveNumber
            ? !isNaN(v) && v !== "" && (v = Number(v))
            : (A.boolean || A.overloadedBoolean) &&
              typeof v == "string" &&
              (v === "" || a(k) === a(w)) &&
              (v = !0),
          v
        );
      }
      function h(A) {
        var w = [],
          k;
        for (k in A) w.push([k, A[k]].join(": "));
        return w.join("; ");
      }
      function b(A) {
        for (var w = A.length, k = -1, v = {}, E; ++k < w; )
          (E = A[k]), (v[E.toLowerCase()] = E);
        return v;
      }
    },
  }),
  Cc = H({
    "../../node_modules/hastscript/html.js"(e, t) {
      var r = vc(),
        a = Sc(),
        o = a(r, "div");
      (o.displayName = "html"), (t.exports = o);
    },
  }),
  _c = H({
    "../../node_modules/hastscript/index.js"(e, t) {
      t.exports = Cc();
    },
  }),
  kc = H({
    "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(
      e,
      t
    ) {
      t.exports = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Acirc: "Â",
        Agrave: "À",
        Aring: "Å",
        Atilde: "Ã",
        Auml: "Ä",
        COPY: "©",
        Ccedil: "Ç",
        ETH: "Ð",
        Eacute: "É",
        Ecirc: "Ê",
        Egrave: "È",
        Euml: "Ë",
        GT: ">",
        Iacute: "Í",
        Icirc: "Î",
        Igrave: "Ì",
        Iuml: "Ï",
        LT: "<",
        Ntilde: "Ñ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ograve: "Ò",
        Oslash: "Ø",
        Otilde: "Õ",
        Ouml: "Ö",
        QUOT: '"',
        REG: "®",
        THORN: "Þ",
        Uacute: "Ú",
        Ucirc: "Û",
        Ugrave: "Ù",
        Uuml: "Ü",
        Yacute: "Ý",
        aacute: "á",
        acirc: "â",
        acute: "´",
        aelig: "æ",
        agrave: "à",
        amp: "&",
        aring: "å",
        atilde: "ã",
        auml: "ä",
        brvbar: "¦",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        ecirc: "ê",
        egrave: "è",
        eth: "ð",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        iacute: "í",
        icirc: "î",
        iexcl: "¡",
        igrave: "ì",
        iquest: "¿",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        oacute: "ó",
        ocirc: "ô",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        otilde: "õ",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        raquo: "»",
        reg: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        times: "×",
        uacute: "ú",
        ucirc: "û",
        ugrave: "ù",
        uml: "¨",
        uuml: "ü",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ",
      };
    },
  }),
  Oc = H({
    "../../node_modules/character-reference-invalid/index.json"(e, t) {
      t.exports = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      };
    },
  }),
  zl = H({
    "../../node_modules/is-decimal/index.js"(e, t) {
      t.exports = r;
      function r(a) {
        var o = typeof a == "string" ? a.charCodeAt(0) : a;
        return o >= 48 && o <= 57;
      }
    },
  }),
  Rc = H({
    "../../node_modules/is-hexadecimal/index.js"(e, t) {
      t.exports = r;
      function r(a) {
        var o = typeof a == "string" ? a.charCodeAt(0) : a;
        return (
          (o >= 97 && o <= 102) || (o >= 65 && o <= 70) || (o >= 48 && o <= 57)
        );
      }
    },
  }),
  Fc = H({
    "../../node_modules/is-alphabetical/index.js"(e, t) {
      t.exports = r;
      function r(a) {
        var o = typeof a == "string" ? a.charCodeAt(0) : a;
        return (o >= 97 && o <= 122) || (o >= 65 && o <= 90);
      }
    },
  }),
  Tc = H({
    "../../node_modules/is-alphanumerical/index.js"(e, t) {
      var r = Fc(),
        a = zl();
      t.exports = o;
      function o(l) {
        return r(l) || a(l);
      }
    },
  }),
  Dc = H({
    "../../node_modules/parse-entities/node_modules/character-entities/index.json"(
      e,
      t
    ) {
      t.exports = {
        AEli: "Æ",
        AElig: "Æ",
        AM: "&",
        AMP: "&",
        Aacut: "Á",
        Aacute: "Á",
        Abreve: "Ă",
        Acir: "Â",
        Acirc: "Â",
        Acy: "А",
        Afr: "𝔄",
        Agrav: "À",
        Agrave: "À",
        Alpha: "Α",
        Amacr: "Ā",
        And: "⩓",
        Aogon: "Ą",
        Aopf: "𝔸",
        ApplyFunction: "⁡",
        Arin: "Å",
        Aring: "Å",
        Ascr: "𝒜",
        Assign: "≔",
        Atild: "Ã",
        Atilde: "Ã",
        Aum: "Ä",
        Auml: "Ä",
        Backslash: "∖",
        Barv: "⫧",
        Barwed: "⌆",
        Bcy: "Б",
        Because: "∵",
        Bernoullis: "ℬ",
        Beta: "Β",
        Bfr: "𝔅",
        Bopf: "𝔹",
        Breve: "˘",
        Bscr: "ℬ",
        Bumpeq: "≎",
        CHcy: "Ч",
        COP: "©",
        COPY: "©",
        Cacute: "Ć",
        Cap: "⋒",
        CapitalDifferentialD: "ⅅ",
        Cayleys: "ℭ",
        Ccaron: "Č",
        Ccedi: "Ç",
        Ccedil: "Ç",
        Ccirc: "Ĉ",
        Cconint: "∰",
        Cdot: "Ċ",
        Cedilla: "¸",
        CenterDot: "·",
        Cfr: "ℭ",
        Chi: "Χ",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        Colon: "∷",
        Colone: "⩴",
        Congruent: "≡",
        Conint: "∯",
        ContourIntegral: "∮",
        Copf: "ℂ",
        Coproduct: "∐",
        CounterClockwiseContourIntegral: "∳",
        Cross: "⨯",
        Cscr: "𝒞",
        Cup: "⋓",
        CupCap: "≍",
        DD: "ⅅ",
        DDotrahd: "⤑",
        DJcy: "Ђ",
        DScy: "Ѕ",
        DZcy: "Џ",
        Dagger: "‡",
        Darr: "↡",
        Dashv: "⫤",
        Dcaron: "Ď",
        Dcy: "Д",
        Del: "∇",
        Delta: "Δ",
        Dfr: "𝔇",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        Dopf: "𝔻",
        Dot: "¨",
        DotDot: "⃜",
        DotEqual: "≐",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        Downarrow: "⇓",
        Dscr: "𝒟",
        Dstrok: "Đ",
        ENG: "Ŋ",
        ET: "Ð",
        ETH: "Ð",
        Eacut: "É",
        Eacute: "É",
        Ecaron: "Ě",
        Ecir: "Ê",
        Ecirc: "Ê",
        Ecy: "Э",
        Edot: "Ė",
        Efr: "𝔈",
        Egrav: "È",
        Egrave: "È",
        Element: "∈",
        Emacr: "Ē",
        EmptySmallSquare: "◻",
        EmptyVerySmallSquare: "▫",
        Eogon: "Ę",
        Eopf: "𝔼",
        Epsilon: "Ε",
        Equal: "⩵",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Escr: "ℰ",
        Esim: "⩳",
        Eta: "Η",
        Eum: "Ë",
        Euml: "Ë",
        Exists: "∃",
        ExponentialE: "ⅇ",
        Fcy: "Ф",
        Ffr: "𝔉",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        Fopf: "𝔽",
        ForAll: "∀",
        Fouriertrf: "ℱ",
        Fscr: "ℱ",
        GJcy: "Ѓ",
        G: ">",
        GT: ">",
        Gamma: "Γ",
        Gammad: "Ϝ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        Gcy: "Г",
        Gdot: "Ġ",
        Gfr: "𝔊",
        Gg: "⋙",
        Gopf: "𝔾",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        Gt: "≫",
        HARDcy: "Ъ",
        Hacek: "ˇ",
        Hat: "^",
        Hcirc: "Ĥ",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        Hopf: "ℍ",
        HorizontalLine: "─",
        Hscr: "ℋ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        IEcy: "Е",
        IJlig: "Ĳ",
        IOcy: "Ё",
        Iacut: "Í",
        Iacute: "Í",
        Icir: "Î",
        Icirc: "Î",
        Icy: "И",
        Idot: "İ",
        Ifr: "ℑ",
        Igrav: "Ì",
        Igrave: "Ì",
        Im: "ℑ",
        Imacr: "Ī",
        ImaginaryI: "ⅈ",
        Implies: "⇒",
        Int: "∬",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Iogon: "Į",
        Iopf: "𝕀",
        Iota: "Ι",
        Iscr: "ℐ",
        Itilde: "Ĩ",
        Iukcy: "І",
        Ium: "Ï",
        Iuml: "Ï",
        Jcirc: "Ĵ",
        Jcy: "Й",
        Jfr: "𝔍",
        Jopf: "𝕁",
        Jscr: "𝒥",
        Jsercy: "Ј",
        Jukcy: "Є",
        KHcy: "Х",
        KJcy: "Ќ",
        Kappa: "Κ",
        Kcedil: "Ķ",
        Kcy: "К",
        Kfr: "𝔎",
        Kopf: "𝕂",
        Kscr: "𝒦",
        LJcy: "Љ",
        L: "<",
        LT: "<",
        Lacute: "Ĺ",
        Lambda: "Λ",
        Lang: "⟪",
        Laplacetrf: "ℒ",
        Larr: "↞",
        Lcaron: "Ľ",
        Lcedil: "Ļ",
        Lcy: "Л",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessLess: "⪡",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Lfr: "𝔏",
        Ll: "⋘",
        Lleftarrow: "⇚",
        Lmidot: "Ŀ",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lopf: "𝕃",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        Lscr: "ℒ",
        Lsh: "↰",
        Lstrok: "Ł",
        Lt: "≪",
        Map: "⤅",
        Mcy: "М",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        MinusPlus: "∓",
        Mopf: "𝕄",
        Mscr: "ℳ",
        Mu: "Μ",
        NJcy: "Њ",
        Nacute: "Ń",
        Ncaron: "Ň",
        Ncedil: "Ņ",
        Ncy: "Н",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: `
`,
        Nfr: "𝔑",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        Nscr: "𝒩",
        Ntild: "Ñ",
        Ntilde: "Ñ",
        Nu: "Ν",
        OElig: "Œ",
        Oacut: "Ó",
        Oacute: "Ó",
        Ocir: "Ô",
        Ocirc: "Ô",
        Ocy: "О",
        Odblac: "Ő",
        Ofr: "𝔒",
        Ograv: "Ò",
        Ograve: "Ò",
        Omacr: "Ō",
        Omega: "Ω",
        Omicron: "Ο",
        Oopf: "𝕆",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        Or: "⩔",
        Oscr: "𝒪",
        Oslas: "Ø",
        Oslash: "Ø",
        Otild: "Õ",
        Otilde: "Õ",
        Otimes: "⨷",
        Oum: "Ö",
        Ouml: "Ö",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        PartialD: "∂",
        Pcy: "П",
        Pfr: "𝔓",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Poincareplane: "ℌ",
        Popf: "ℙ",
        Pr: "⪻",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Prime: "″",
        Product: "∏",
        Proportion: "∷",
        Proportional: "∝",
        Pscr: "𝒫",
        Psi: "Ψ",
        QUO: '"',
        QUOT: '"',
        Qfr: "𝔔",
        Qopf: "ℚ",
        Qscr: "𝒬",
        RBarr: "⤐",
        RE: "®",
        REG: "®",
        Racute: "Ŕ",
        Rang: "⟫",
        Rarr: "↠",
        Rarrtl: "⤖",
        Rcaron: "Ř",
        Rcedil: "Ŗ",
        Rcy: "Р",
        Re: "ℜ",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        Rfr: "ℜ",
        Rho: "Ρ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        Rightarrow: "⇒",
        Ropf: "ℝ",
        RoundImplies: "⥰",
        Rrightarrow: "⇛",
        Rscr: "ℛ",
        Rsh: "↱",
        RuleDelayed: "⧴",
        SHCHcy: "Щ",
        SHcy: "Ш",
        SOFTcy: "Ь",
        Sacute: "Ś",
        Sc: "⪼",
        Scaron: "Š",
        Scedil: "Ş",
        Scirc: "Ŝ",
        Scy: "С",
        Sfr: "𝔖",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sopf: "𝕊",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Sscr: "𝒮",
        Star: "⋆",
        Sub: "⋐",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Sup: "⋑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        THOR: "Þ",
        THORN: "Þ",
        TRADE: "™",
        TSHcy: "Ћ",
        TScy: "Ц",
        Tab: "	",
        Tau: "Τ",
        Tcaron: "Ť",
        Tcedil: "Ţ",
        Tcy: "Т",
        Tfr: "𝔗",
        Therefore: "∴",
        Theta: "Θ",
        ThickSpace: "  ",
        ThinSpace: " ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        Topf: "𝕋",
        TripleDot: "⃛",
        Tscr: "𝒯",
        Tstrok: "Ŧ",
        Uacut: "Ú",
        Uacute: "Ú",
        Uarr: "↟",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        Ubreve: "Ŭ",
        Ucir: "Û",
        Ucirc: "Û",
        Ucy: "У",
        Udblac: "Ű",
        Ufr: "𝔘",
        Ugrav: "Ù",
        Ugrave: "Ù",
        Umacr: "Ū",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        Uopf: "𝕌",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        Upsilon: "Υ",
        Uring: "Ů",
        Uscr: "𝒰",
        Utilde: "Ũ",
        Uum: "Ü",
        Uuml: "Ü",
        VDash: "⊫",
        Vbar: "⫫",
        Vcy: "В",
        Vdash: "⊩",
        Vdashl: "⫦",
        Vee: "⋁",
        Verbar: "‖",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        Vopf: "𝕍",
        Vscr: "𝒱",
        Vvdash: "⊪",
        Wcirc: "Ŵ",
        Wedge: "⋀",
        Wfr: "𝔚",
        Wopf: "𝕎",
        Wscr: "𝒲",
        Xfr: "𝔛",
        Xi: "Ξ",
        Xopf: "𝕏",
        Xscr: "𝒳",
        YAcy: "Я",
        YIcy: "Ї",
        YUcy: "Ю",
        Yacut: "Ý",
        Yacute: "Ý",
        Ycirc: "Ŷ",
        Ycy: "Ы",
        Yfr: "𝔜",
        Yopf: "𝕐",
        Yscr: "𝒴",
        Yuml: "Ÿ",
        ZHcy: "Ж",
        Zacute: "Ź",
        Zcaron: "Ž",
        Zcy: "З",
        Zdot: "Ż",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        Zfr: "ℨ",
        Zopf: "ℤ",
        Zscr: "𝒵",
        aacut: "á",
        aacute: "á",
        abreve: "ă",
        ac: "∾",
        acE: "∾̳",
        acd: "∿",
        acir: "â",
        acirc: "â",
        acut: "´",
        acute: "´",
        acy: "а",
        aeli: "æ",
        aelig: "æ",
        af: "⁡",
        afr: "𝔞",
        agrav: "à",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        amacr: "ā",
        amalg: "⨿",
        am: "&",
        amp: "&",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        aopf: "𝕒",
        ap: "≈",
        apE: "⩰",
        apacir: "⩯",
        ape: "≊",
        apid: "≋",
        apos: "'",
        approx: "≈",
        approxeq: "≊",
        arin: "å",
        aring: "å",
        ascr: "𝒶",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atild: "ã",
        atilde: "ã",
        aum: "ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        bNot: "⫭",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        barvee: "⊽",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxDL: "╗",
        boxDR: "╔",
        boxDl: "╖",
        boxDr: "╓",
        boxH: "═",
        boxHD: "╦",
        boxHU: "╩",
        boxHd: "╤",
        boxHu: "╧",
        boxUL: "╝",
        boxUR: "╚",
        boxUl: "╜",
        boxUr: "╙",
        boxV: "║",
        boxVH: "╬",
        boxVL: "╣",
        boxVR: "╠",
        boxVh: "╫",
        boxVl: "╢",
        boxVr: "╟",
        boxbox: "⧉",
        boxdL: "╕",
        boxdR: "╒",
        boxdl: "┐",
        boxdr: "┌",
        boxh: "─",
        boxhD: "╥",
        boxhU: "╨",
        boxhd: "┬",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxuL: "╛",
        boxuR: "╘",
        boxul: "┘",
        boxur: "└",
        boxv: "│",
        boxvH: "╪",
        boxvL: "╡",
        boxvR: "╞",
        boxvh: "┼",
        boxvl: "┤",
        boxvr: "├",
        bprime: "‵",
        breve: "˘",
        brvba: "¦",
        brvbar: "¦",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        bumpeq: "≏",
        cacute: "ć",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        ccaps: "⩍",
        ccaron: "č",
        ccedi: "ç",
        ccedil: "ç",
        ccirc: "ĉ",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        cedi: "¸",
        cedil: "¸",
        cemptyv: "⦲",
        cen: "¢",
        cent: "¢",
        centerdot: "·",
        cfr: "𝔠",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        cir: "○",
        cirE: "⧃",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        conint: "∮",
        copf: "𝕔",
        coprod: "∐",
        cop: "©",
        copy: "©",
        copysr: "℗",
        crarr: "↵",
        cross: "✗",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        cupbrcap: "⩈",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curre: "¤",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dArr: "⇓",
        dHar: "⥥",
        dagger: "†",
        daleth: "ℸ",
        darr: "↓",
        dash: "‐",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        dcy: "д",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        ddotseq: "⩷",
        de: "°",
        deg: "°",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        dharl: "⇃",
        dharr: "⇂",
        diam: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divid: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        dot: "˙",
        doteq: "≐",
        doteqdot: "≑",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        downarrow: "↓",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        dscy: "ѕ",
        dsol: "⧶",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        dzigrarr: "⟿",
        eDDot: "⩷",
        eDot: "≑",
        eacut: "é",
        eacute: "é",
        easter: "⩮",
        ecaron: "ě",
        ecir: "ê",
        ecirc: "ê",
        ecolon: "≕",
        ecy: "э",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        eg: "⪚",
        egrav: "è",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        emptyv: "∅",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        eng: "ŋ",
        ensp: " ",
        eogon: "ę",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        equals: "=",
        equest: "≟",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erDot: "≓",
        erarr: "⥱",
        escr: "ℯ",
        esdot: "≐",
        esim: "≂",
        eta: "η",
        et: "ð",
        eth: "ð",
        eum: "ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        filig: "ﬁ",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        fpartint: "⨍",
        frac1: "¼",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac3: "¾",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        gE: "≧",
        gEl: "⪌",
        gacute: "ǵ",
        gamma: "γ",
        gammad: "ϝ",
        gap: "⪆",
        gbreve: "ğ",
        gcirc: "ĝ",
        gcy: "г",
        gdot: "ġ",
        ge: "≥",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        gl: "≷",
        glE: "⪒",
        gla: "⪥",
        glj: "⪤",
        gnE: "≩",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        grave: "`",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        g: ">",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        hArr: "⇔",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        hbar: "ℏ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        horbar: "―",
        hscr: "𝒽",
        hslash: "ℏ",
        hstrok: "ħ",
        hybull: "⁃",
        hyphen: "‐",
        iacut: "í",
        iacute: "í",
        ic: "⁣",
        icir: "î",
        icirc: "î",
        icy: "и",
        iecy: "е",
        iexc: "¡",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        igrav: "ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        imacr: "ī",
        image: "ℑ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        intercal: "⊺",
        intlarhk: "⨗",
        intprod: "⨼",
        iocy: "ё",
        iogon: "į",
        iopf: "𝕚",
        iota: "ι",
        iprod: "⨼",
        iques: "¿",
        iquest: "¿",
        iscr: "𝒾",
        isin: "∈",
        isinE: "⋹",
        isindot: "⋵",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        iukcy: "і",
        ium: "ï",
        iuml: "ï",
        jcirc: "ĵ",
        jcy: "й",
        jfr: "𝔧",
        jmath: "ȷ",
        jopf: "𝕛",
        jscr: "𝒿",
        jsercy: "ј",
        jukcy: "є",
        kappa: "κ",
        kappav: "ϰ",
        kcedil: "ķ",
        kcy: "к",
        kfr: "𝔨",
        kgreen: "ĸ",
        khcy: "х",
        kjcy: "ќ",
        kopf: "𝕜",
        kscr: "𝓀",
        lAarr: "⇚",
        lArr: "⇐",
        lAtail: "⤛",
        lBarr: "⤎",
        lE: "≦",
        lEg: "⪋",
        lHar: "⥢",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        laqu: "«",
        laquo: "«",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        leftarrow: "←",
        leftarrowtail: "↢",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        leftthreetimes: "⋋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        lessgtr: "≶",
        lesssim: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        l: "<",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltrPar: "⦖",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        mDDot: "∺",
        mac: "¯",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        mdash: "—",
        measuredangle: "∡",
        mfr: "𝔪",
        mho: "℧",
        micr: "µ",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middo: "·",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        mstpos: "∾",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nGg: "⋙̸",
        nGt: "≫⃒",
        nGtv: "≫̸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nLl: "⋘̸",
        nLt: "≪⃒",
        nLtv: "≪̸",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        nabla: "∇",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbs: " ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        neArr: "⇗",
        nearhk: "⤤",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        ngsim: "≵",
        ngt: "≯",
        ngtr: "≯",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        nlArr: "⇍",
        nlE: "≦̸",
        nlarr: "↚",
        nldr: "‥",
        nle: "≰",
        nleftarrow: "↚",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nlsim: "≴",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nmid: "∤",
        nopf: "𝕟",
        no: "¬",
        not: "¬",
        notin: "∉",
        notinE: "⋹̸",
        notindot: "⋵̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntild: "ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvDash: "⊭",
        nvHarr: "⤄",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwArr: "⇖",
        nwarhk: "⤣",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        oS: "Ⓢ",
        oacut: "ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "ô",
        ocirc: "ô",
        ocy: "о",
        odash: "⊝",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        ofcir: "⦿",
        ofr: "𝔬",
        ogon: "˛",
        ograv: "ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        omega: "ω",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        opar: "⦷",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        orarr: "↻",
        ord: "º",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oscr: "ℴ",
        oslas: "ø",
        oslash: "ø",
        osol: "⊘",
        otild: "õ",
        otilde: "õ",
        otimes: "⊗",
        otimesas: "⨶",
        oum: "ö",
        ouml: "ö",
        ovbar: "⌽",
        par: "¶",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        plusm: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        pointint: "⨕",
        popf: "𝕡",
        poun: "£",
        pound: "£",
        pr: "≺",
        prE: "⪳",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        primes: "ℙ",
        prnE: "⪵",
        prnap: "⪹",
        prnsim: "⋨",
        prod: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        psi: "ψ",
        puncsp: " ",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        qprime: "⁗",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quo: '"',
        quot: '"',
        rAarr: "⇛",
        rArr: "⇒",
        rAtail: "⤜",
        rBarr: "⤏",
        rHar: "⥤",
        race: "∽̱",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raqu: "»",
        raquo: "»",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        re: "®",
        reg: "®",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        rhov: "ϱ",
        rightarrow: "→",
        rightarrowtail: "↣",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        rightthreetimes: "⋌",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        rsaquo: "›",
        rscr: "𝓇",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        sbquo: "‚",
        sc: "≻",
        scE: "⪴",
        scap: "⪸",
        scaron: "š",
        sccue: "≽",
        sce: "⪰",
        scedil: "ş",
        scirc: "ŝ",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        seArr: "⇘",
        searhk: "⤥",
        searr: "↘",
        searrow: "↘",
        sec: "§",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        shcy: "ш",
        shortmid: "∣",
        shortparallel: "∥",
        sh: "­",
        shy: "­",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        subE: "⫅",
        subdot: "⪽",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        sum: "∑",
        sung: "♪",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supE: "⫆",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supedot: "⫄",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swArr: "⇙",
        swarhk: "⤦",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szli: "ß",
        szlig: "ß",
        target: "⌖",
        tau: "τ",
        tbrk: "⎴",
        tcaron: "ť",
        tcedil: "ţ",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        thor: "þ",
        thorn: "þ",
        tilde: "˜",
        time: "×",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        tscy: "ц",
        tshcy: "ћ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uArr: "⇑",
        uHar: "⥣",
        uacut: "ú",
        uacute: "ú",
        uarr: "↑",
        ubrcy: "ў",
        ubreve: "ŭ",
        ucir: "û",
        ucirc: "û",
        ucy: "у",
        udarr: "⇅",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        ugrav: "ù",
        ugrave: "ù",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        um: "¨",
        uml: "¨",
        uogon: "ų",
        uopf: "𝕦",
        uparrow: "↑",
        updownarrow: "↕",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        upsi: "υ",
        upsih: "ϒ",
        upsilon: "υ",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        urtri: "◹",
        uscr: "𝓊",
        utdot: "⋰",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uum: "ü",
        uuml: "ü",
        uwangle: "⦧",
        vArr: "⇕",
        vBar: "⫨",
        vBarv: "⫩",
        vDash: "⊨",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vcy: "в",
        vdash: "⊢",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        vert: "|",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        vzigzag: "⦚",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacut: "ý",
        yacute: "ý",
        yacy: "я",
        ycirc: "ŷ",
        ycy: "ы",
        ye: "¥",
        yen: "¥",
        yfr: "𝔶",
        yicy: "ї",
        yopf: "𝕪",
        yscr: "𝓎",
        yucy: "ю",
        yum: "ÿ",
        yuml: "ÿ",
        zacute: "ź",
        zcaron: "ž",
        zcy: "з",
        zdot: "ż",
        zeetrf: "ℨ",
        zeta: "ζ",
        zfr: "𝔷",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌",
      };
    },
  }),
  Lc = H({
    "../../node_modules/parse-entities/decode-entity.js"(e, t) {
      var r = Dc();
      t.exports = o;
      var a = {}.hasOwnProperty;
      function o(l) {
        return a.call(r, l) ? r[l] : !1;
      }
    },
  }),
  Mc = H({
    "../../node_modules/parse-entities/index.js"(e, t) {
      var r = kc(),
        a = Oc(),
        o = zl(),
        l = Rc(),
        s = Tc(),
        u = Lc();
      t.exports = Y;
      var i = {}.hasOwnProperty,
        c = String.fromCharCode,
        d = Function.prototype,
        f = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        p = 9,
        g = 10,
        h = 12,
        b = 32,
        A = 38,
        w = 59,
        k = 60,
        v = 61,
        E = 35,
        y = 88,
        x = 120,
        C = 65533,
        S = "named",
        O = "hexadecimal",
        R = "decimal",
        F = {};
      (F[O] = 16), (F[R] = 10);
      var L = {};
      (L[S] = s), (L[R] = o), (L[O] = l);
      var T = 1,
        Z = 2,
        D = 3,
        M = 4,
        N = 5,
        V = 6,
        $ = 7,
        I = {};
      (I[T] = "Named character references must be terminated by a semicolon"),
        (I[Z] =
          "Numeric character references must be terminated by a semicolon"),
        (I[D] = "Named character references cannot be empty"),
        (I[M] = "Numeric character references cannot be empty"),
        (I[N] = "Named character references must be known"),
        (I[V] = "Numeric character references cannot be disallowed"),
        (I[$] =
          "Numeric character references cannot be outside the permissible Unicode range");
      function Y(P, z) {
        var q = {},
          oe,
          de;
        z || (z = {});
        for (de in f) (oe = z[de]), (q[de] = oe ?? f[de]);
        return (
          (q.position.indent || q.position.start) &&
            ((q.indent = q.position.indent || []),
            (q.position = q.position.start)),
          ee(P, q)
        );
      }
      function ee(P, z) {
        var q = z.additional,
          oe = z.nonTerminated,
          de = z.text,
          Je = z.reference,
          xe = z.warning,
          Le = z.textContext,
          B = z.referenceContext,
          Fe = z.warningContext,
          Me = z.position,
          ut = z.indent || [],
          Ot = P.length,
          Be = 0,
          Rr = -1,
          pe = Me.column || 1,
          ct = Me.line || 1,
          $e = "",
          Rt = [],
          Pe,
          Ft,
          Ze,
          ue,
          Te,
          le,
          te,
          je,
          Fr,
          xa,
          dt,
          Xt,
          pt,
          Qe,
          io,
          Jt,
          Tr,
          Ne,
          ie;
        for (
          typeof q == "string" && (q = q.charCodeAt(0)),
            Jt = Qt(),
            je = xe ? Bs : d,
            Be--,
            Ot++;
          ++Be < Ot;

        )
          if (
            (Te === g && (pe = ut[Rr] || 1), (Te = P.charCodeAt(Be)), Te === A)
          ) {
            if (
              ((te = P.charCodeAt(Be + 1)),
              te === p ||
                te === g ||
                te === h ||
                te === b ||
                te === A ||
                te === k ||
                te !== te ||
                (q && te === q))
            ) {
              ($e += c(Te)), pe++;
              continue;
            }
            for (
              pt = Be + 1,
                Xt = pt,
                ie = pt,
                te === E
                  ? ((ie = ++Xt),
                    (te = P.charCodeAt(ie)),
                    te === y || te === x ? ((Qe = O), (ie = ++Xt)) : (Qe = R))
                  : (Qe = S),
                Pe = "",
                dt = "",
                ue = "",
                io = L[Qe],
                ie--;
              ++ie < Ot && ((te = P.charCodeAt(ie)), !!io(te));

            )
              (ue += c(te)),
                Qe === S && i.call(r, ue) && ((Pe = ue), (dt = r[ue]));
            (Ze = P.charCodeAt(ie) === w),
              Ze &&
                (ie++,
                (Ft = Qe === S ? u(ue) : !1),
                Ft && ((Pe = ue), (dt = Ft))),
              (Ne = 1 + ie - pt),
              (!Ze && !oe) ||
                (ue
                  ? Qe === S
                    ? (Ze && !dt
                        ? je(N, 1)
                        : (Pe !== ue &&
                            ((ie = Xt + Pe.length),
                            (Ne = 1 + ie - Xt),
                            (Ze = !1)),
                          Ze ||
                            ((Fr = Pe ? T : D),
                            z.attribute
                              ? ((te = P.charCodeAt(ie)),
                                te === v
                                  ? (je(Fr, Ne), (dt = null))
                                  : s(te)
                                  ? (dt = null)
                                  : je(Fr, Ne))
                              : je(Fr, Ne))),
                      (le = dt))
                    : (Ze || je(Z, Ne),
                      (le = parseInt(ue, F[Qe])),
                      G(le)
                        ? (je($, Ne), (le = c(C)))
                        : le in a
                        ? (je(V, Ne), (le = a[le]))
                        : ((xa = ""),
                          K(le) && je(V, Ne),
                          le > 65535 &&
                            ((le -= 65536),
                            (xa += c((le >>> 10) | 55296)),
                            (le = 56320 | (le & 1023))),
                          (le = xa + c(le))))
                  : Qe !== S && je(M, Ne)),
              le
                ? (so(),
                  (Jt = Qt()),
                  (Be = ie - 1),
                  (pe += ie - pt + 1),
                  Rt.push(le),
                  (Tr = Qt()),
                  Tr.offset++,
                  Je &&
                    Je.call(B, le, { start: Jt, end: Tr }, P.slice(pt - 1, ie)),
                  (Jt = Tr))
                : ((ue = P.slice(pt - 1, ie)),
                  ($e += ue),
                  (pe += ue.length),
                  (Be = ie - 1));
          } else
            Te === 10 && (ct++, Rr++, (pe = 0)),
              Te === Te ? (($e += c(Te)), pe++) : so();
        return Rt.join("");
        function Qt() {
          return { line: ct, column: pe, offset: Be + (Me.offset || 0) };
        }
        function Bs(uo, co) {
          var Aa = Qt();
          (Aa.column += co), (Aa.offset += co), xe.call(Fe, I[uo], Aa, uo);
        }
        function so() {
          $e &&
            (Rt.push($e),
            de && de.call(Le, $e, { start: Jt, end: Qt() }),
            ($e = ""));
        }
      }
      function G(P) {
        return (P >= 55296 && P <= 57343) || P > 1114111;
      }
      function K(P) {
        return (
          (P >= 1 && P <= 8) ||
          P === 11 ||
          (P >= 13 && P <= 31) ||
          (P >= 127 && P <= 159) ||
          (P >= 64976 && P <= 65007) ||
          (P & 65535) === 65535 ||
          (P & 65535) === 65534
        );
      }
    },
  }),
  Bc = H({
    "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(
      e,
      t
    ) {
      var r =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        a = (function (o) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            s = 0,
            u = {},
            i = {
              manual: o.Prism && o.Prism.manual,
              disableWorkerMessageHandler:
                o.Prism && o.Prism.disableWorkerMessageHandler,
              util: {
                encode: function v(E) {
                  return E instanceof c
                    ? new c(E.type, v(E.content), E.alias)
                    : Array.isArray(E)
                    ? E.map(v)
                    : E.replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (v) {
                  return Object.prototype.toString.call(v).slice(8, -1);
                },
                objId: function (v) {
                  return (
                    v.__id || Object.defineProperty(v, "__id", { value: ++s }),
                    v.__id
                  );
                },
                clone: function v(E, y) {
                  y = y || {};
                  var x, C;
                  switch (i.util.type(E)) {
                    case "Object":
                      if (((C = i.util.objId(E)), y[C])) return y[C];
                      (x = {}), (y[C] = x);
                      for (var S in E)
                        E.hasOwnProperty(S) && (x[S] = v(E[S], y));
                      return x;
                    case "Array":
                      return (
                        (C = i.util.objId(E)),
                        y[C]
                          ? y[C]
                          : ((x = []),
                            (y[C] = x),
                            E.forEach(function (O, R) {
                              x[R] = v(O, y);
                            }),
                            x)
                      );
                    default:
                      return E;
                  }
                },
                getLanguage: function (v) {
                  for (; v; ) {
                    var E = l.exec(v.className);
                    if (E) return E[1].toLowerCase();
                    v = v.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (v, E) {
                  (v.className = v.className.replace(RegExp(l, "gi"), "")),
                    v.classList.add("language-" + E);
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if ("currentScript" in document && 1 < 2)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (x) {
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      x.stack
                    ) || [])[1];
                    if (v) {
                      var E = document.getElementsByTagName("script");
                      for (var y in E) if (E[y].src == v) return E[y];
                    }
                    return null;
                  }
                },
                isActive: function (v, E, y) {
                  for (var x = "no-" + E; v; ) {
                    var C = v.classList;
                    if (C.contains(E)) return !0;
                    if (C.contains(x)) return !1;
                    v = v.parentElement;
                  }
                  return !!y;
                },
              },
              languages: {
                plain: u,
                plaintext: u,
                text: u,
                txt: u,
                extend: function (v, E) {
                  var y = i.util.clone(i.languages[v]);
                  for (var x in E) y[x] = E[x];
                  return y;
                },
                insertBefore: function (v, E, y, x) {
                  x = x || i.languages;
                  var C = x[v],
                    S = {};
                  for (var O in C)
                    if (C.hasOwnProperty(O)) {
                      if (O == E)
                        for (var R in y) y.hasOwnProperty(R) && (S[R] = y[R]);
                      y.hasOwnProperty(O) || (S[O] = C[O]);
                    }
                  var F = x[v];
                  return (
                    (x[v] = S),
                    i.languages.DFS(i.languages, function (L, T) {
                      T === F && L != v && (this[L] = S);
                    }),
                    S
                  );
                },
                DFS: function v(E, y, x, C) {
                  C = C || {};
                  var S = i.util.objId;
                  for (var O in E)
                    if (E.hasOwnProperty(O)) {
                      y.call(E, O, E[O], x || O);
                      var R = E[O],
                        F = i.util.type(R);
                      F === "Object" && !C[S(R)]
                        ? ((C[S(R)] = !0), v(R, y, null, C))
                        : F === "Array" &&
                          !C[S(R)] &&
                          ((C[S(R)] = !0), v(R, y, O, C));
                    }
                },
              },
              plugins: {},
              highlightAll: function (v, E) {
                i.highlightAllUnder(document, v, E);
              },
              highlightAllUnder: function (v, E, y) {
                var x = {
                  callback: y,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                i.hooks.run("before-highlightall", x),
                  (x.elements = Array.prototype.slice.apply(
                    x.container.querySelectorAll(x.selector)
                  )),
                  i.hooks.run("before-all-elements-highlight", x);
                for (var C = 0, S; (S = x.elements[C++]); )
                  i.highlightElement(S, E === !0, x.callback);
              },
              highlightElement: function (v, E, y) {
                var x = i.util.getLanguage(v),
                  C = i.languages[x];
                i.util.setLanguage(v, x);
                var S = v.parentElement;
                S &&
                  S.nodeName.toLowerCase() === "pre" &&
                  i.util.setLanguage(S, x);
                var O = v.textContent,
                  R = { element: v, language: x, grammar: C, code: O };
                function F(T) {
                  (R.highlightedCode = T),
                    i.hooks.run("before-insert", R),
                    (R.element.innerHTML = R.highlightedCode),
                    i.hooks.run("after-highlight", R),
                    i.hooks.run("complete", R),
                    y && y.call(R.element);
                }
                if (
                  (i.hooks.run("before-sanity-check", R),
                  (S = R.element.parentElement),
                  S &&
                    S.nodeName.toLowerCase() === "pre" &&
                    !S.hasAttribute("tabindex") &&
                    S.setAttribute("tabindex", "0"),
                  !R.code)
                ) {
                  i.hooks.run("complete", R), y && y.call(R.element);
                  return;
                }
                if ((i.hooks.run("before-highlight", R), !R.grammar)) {
                  F(i.util.encode(R.code));
                  return;
                }
                if (E && o.Worker) {
                  var L = new Worker(i.filename);
                  (L.onmessage = function (T) {
                    F(T.data);
                  }),
                    L.postMessage(
                      JSON.stringify({
                        language: R.language,
                        code: R.code,
                        immediateClose: !0,
                      })
                    );
                } else F(i.highlight(R.code, R.grammar, R.language));
              },
              highlight: function (v, E, y) {
                var x = { code: v, grammar: E, language: y };
                if ((i.hooks.run("before-tokenize", x), !x.grammar))
                  throw new Error(
                    'The language "' + x.language + '" has no grammar.'
                  );
                return (
                  (x.tokens = i.tokenize(x.code, x.grammar)),
                  i.hooks.run("after-tokenize", x),
                  c.stringify(i.util.encode(x.tokens), x.language)
                );
              },
              tokenize: function (v, E) {
                var y = E.rest;
                if (y) {
                  for (var x in y) E[x] = y[x];
                  delete E.rest;
                }
                var C = new p();
                return g(C, C.head, v), f(v, C, E, C.head, 0), b(C);
              },
              hooks: {
                all: {},
                add: function (v, E) {
                  var y = i.hooks.all;
                  (y[v] = y[v] || []), y[v].push(E);
                },
                run: function (v, E) {
                  var y = i.hooks.all[v];
                  if (!(!y || !y.length))
                    for (var x = 0, C; (C = y[x++]); ) C(E);
                },
              },
              Token: c,
            };
          o.Prism = i;
          function c(v, E, y, x) {
            (this.type = v),
              (this.content = E),
              (this.alias = y),
              (this.length = (x || "").length | 0);
          }
          c.stringify = function v(E, y) {
            if (typeof E == "string") return E;
            if (Array.isArray(E)) {
              var x = "";
              return (
                E.forEach(function (F) {
                  x += v(F, y);
                }),
                x
              );
            }
            var C = {
                type: E.type,
                content: v(E.content, y),
                tag: "span",
                classes: ["token", E.type],
                attributes: {},
                language: y,
              },
              S = E.alias;
            S &&
              (Array.isArray(S)
                ? Array.prototype.push.apply(C.classes, S)
                : C.classes.push(S)),
              i.hooks.run("wrap", C);
            var O = "";
            for (var R in C.attributes)
              O +=
                " " +
                R +
                '="' +
                (C.attributes[R] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              C.tag +
              ' class="' +
              C.classes.join(" ") +
              '"' +
              O +
              ">" +
              C.content +
              "</" +
              C.tag +
              ">"
            );
          };
          function d(v, E, y, x) {
            v.lastIndex = E;
            var C = v.exec(y);
            if (C && x && C[1]) {
              var S = C[1].length;
              (C.index += S), (C[0] = C[0].slice(S));
            }
            return C;
          }
          function f(v, E, y, x, C, S) {
            for (var O in y)
              if (!(!y.hasOwnProperty(O) || !y[O])) {
                var R = y[O];
                R = Array.isArray(R) ? R : [R];
                for (var F = 0; F < R.length; ++F) {
                  if (S && S.cause == O + "," + F) return;
                  var L = R[F],
                    T = L.inside,
                    Z = !!L.lookbehind,
                    D = !!L.greedy,
                    M = L.alias;
                  if (D && !L.pattern.global) {
                    var N = L.pattern.toString().match(/[imsuy]*$/)[0];
                    L.pattern = RegExp(L.pattern.source, N + "g");
                  }
                  for (
                    var V = L.pattern || L, $ = x.next, I = C;
                    $ !== E.tail && !(S && I >= S.reach);
                    I += $.value.length, $ = $.next
                  ) {
                    var Y = $.value;
                    if (E.length > v.length) return;
                    if (!(Y instanceof c)) {
                      var ee = 1,
                        G;
                      if (D) {
                        if (((G = d(V, I, v, Z)), !G || G.index >= v.length))
                          break;
                        var q = G.index,
                          K = G.index + G[0].length,
                          P = I;
                        for (P += $.value.length; q >= P; )
                          ($ = $.next), (P += $.value.length);
                        if (
                          ((P -= $.value.length), (I = P), $.value instanceof c)
                        )
                          continue;
                        for (
                          var z = $;
                          z !== E.tail && (P < K || typeof z.value == "string");
                          z = z.next
                        )
                          ee++, (P += z.value.length);
                        ee--, (Y = v.slice(I, P)), (G.index -= I);
                      } else if (((G = d(V, 0, Y, Z)), !G)) continue;
                      var q = G.index,
                        oe = G[0],
                        de = Y.slice(0, q),
                        Je = Y.slice(q + oe.length),
                        xe = I + Y.length;
                      S && xe > S.reach && (S.reach = xe);
                      var Le = $.prev;
                      de && ((Le = g(E, Le, de)), (I += de.length)),
                        h(E, Le, ee);
                      var B = new c(O, T ? i.tokenize(oe, T) : oe, M, oe);
                      if ((($ = g(E, Le, B)), Je && g(E, $, Je), ee > 1)) {
                        var Fe = { cause: O + "," + F, reach: xe };
                        f(v, E, y, $.prev, I, Fe),
                          S && Fe.reach > S.reach && (S.reach = Fe.reach);
                      }
                    }
                  }
                }
              }
          }
          function p() {
            var v = { value: null, prev: null, next: null },
              E = { value: null, prev: v, next: null };
            (v.next = E), (this.head = v), (this.tail = E), (this.length = 0);
          }
          function g(v, E, y) {
            var x = E.next,
              C = { value: y, prev: E, next: x };
            return (E.next = C), (x.prev = C), v.length++, C;
          }
          function h(v, E, y) {
            for (var x = E.next, C = 0; C < y && x !== v.tail; C++) x = x.next;
            (E.next = x), (x.prev = E), (v.length -= C);
          }
          function b(v) {
            for (var E = [], y = v.head.next; y !== v.tail; )
              E.push(y.value), (y = y.next);
            return E;
          }
          if (!o.document)
            return (
              o.addEventListener &&
                (i.disableWorkerMessageHandler ||
                  o.addEventListener(
                    "message",
                    function (v) {
                      var E = JSON.parse(v.data),
                        y = E.language,
                        x = E.code,
                        C = E.immediateClose;
                      o.postMessage(i.highlight(x, i.languages[y], y)),
                        C && o.close();
                    },
                    !1
                  )),
              i
            );
          var A = i.util.currentScript();
          A &&
            ((i.filename = A.src),
            A.hasAttribute("data-manual") && (i.manual = !0));
          function w() {
            i.manual || i.highlightAll();
          }
          if (!i.manual) {
            var k = document.readyState;
            k === "loading" || (k === "interactive" && A && A.defer)
              ? document.addEventListener("DOMContentLoaded", w)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(w)
              : window.setTimeout(w, 16);
          }
          return i;
        })(r);
      typeof t < "u" && t.exports && (t.exports = a),
        typeof global < "u" && (global.Prism = a);
    },
  }),
  $c = H({
    "../../node_modules/refractor/core.js"(e, t) {
      var r =
          typeof globalThis == "object"
            ? globalThis
            : typeof self == "object"
            ? self
            : typeof window == "object"
            ? window
            : typeof global == "object"
            ? global
            : {},
        a = C();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var o = _c(),
        l = Mc(),
        s = Bc(),
        u = jl(),
        i = Zl(),
        c = uc(),
        d = cc();
      a();
      var f = {}.hasOwnProperty;
      function p() {}
      p.prototype = s;
      var g = new p();
      (t.exports = g),
        (g.highlight = A),
        (g.register = h),
        (g.alias = b),
        (g.registered = w),
        (g.listLanguages = k),
        h(u),
        h(i),
        h(c),
        h(d),
        (g.util.encode = y),
        (g.Token.stringify = v);
      function h(S) {
        if (typeof S != "function" || !S.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + S + "`");
        g.languages[S.displayName] === void 0 && S(g);
      }
      function b(S, O) {
        var R = g.languages,
          F = S,
          L,
          T,
          Z,
          D;
        O && ((F = {}), (F[S] = O));
        for (L in F)
          for (
            T = F[L], T = typeof T == "string" ? [T] : T, Z = T.length, D = -1;
            ++D < Z;

          )
            R[T[D]] = R[L];
      }
      function A(S, O) {
        var R = s.highlight,
          F;
        if (typeof S != "string")
          throw new Error("Expected `string` for `value`, got `" + S + "`");
        if (g.util.type(O) === "Object") (F = O), (O = null);
        else {
          if (typeof O != "string")
            throw new Error("Expected `string` for `name`, got `" + O + "`");
          if (f.call(g.languages, O)) F = g.languages[O];
          else
            throw new Error("Unknown language: `" + O + "` is not registered");
        }
        return R.call(this, S, F, O);
      }
      function w(S) {
        if (typeof S != "string")
          throw new Error("Expected `string` for `language`, got `" + S + "`");
        return f.call(g.languages, S);
      }
      function k() {
        var S = g.languages,
          O = [],
          R;
        for (R in S) f.call(S, R) && typeof S[R] == "object" && O.push(R);
        return O;
      }
      function v(S, O, R) {
        var F;
        return typeof S == "string"
          ? { type: "text", value: S }
          : g.util.type(S) === "Array"
          ? E(S, O)
          : ((F = {
              type: S.type,
              content: g.Token.stringify(S.content, O, R),
              tag: "span",
              classes: ["token", S.type],
              attributes: {},
              language: O,
              parent: R,
            }),
            S.alias && (F.classes = F.classes.concat(S.alias)),
            g.hooks.run("wrap", F),
            o(F.tag + "." + F.classes.join("."), x(F.attributes), F.content));
      }
      function E(S, O) {
        for (var R = [], F = S.length, L = -1, T; ++L < F; )
          (T = S[L]), T !== "" && T !== null && T !== void 0 && R.push(T);
        for (L = -1, F = R.length; ++L < F; )
          (T = R[L]), (R[L] = g.Token.stringify(T, O, R));
        return R;
      }
      function y(S) {
        return S;
      }
      function x(S) {
        var O;
        for (O in S) S[O] = l(S[O]);
        return S;
      }
      function C() {
        var S = "Prism" in r,
          O = S ? r.Prism : void 0;
        return R;
        function R() {
          S ? (r.Prism = O) : delete r.Prism, (S = void 0), (O = void 0);
        }
      }
    },
  }),
  Pc = H({
    "../../node_modules/refractor/lang/bash.js"(e, t) {
      (t.exports = r), (r.displayName = "bash"), (r.aliases = ["shell"]);
      function r(a) {
        (function (o) {
          var l =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            s = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            u = {
              bash: s,
              environment: { pattern: RegExp("\\$" + l), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + l),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (o.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: s },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: u.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + l), alias: "constant" },
            variable: u.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (s.inside = o.languages.bash);
          for (
            var i = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              c = u.variable[1].inside,
              d = 0;
            d < i.length;
            d++
          )
            c[i[d]] = o.languages.bash[i[d]];
          o.languages.shell = o.languages.bash;
        })(a);
      }
    },
  }),
  Zc = H({
    "../../node_modules/refractor/lang/js-extras.js"(e, t) {
      (t.exports = r), (r.displayName = "jsExtras"), (r.aliases = []);
      function r(a) {
        (function (o) {
          o.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  o.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            o.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + o.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            o.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            });
          function l(f, p) {
            return RegExp(
              f.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              p
            );
          }
          o.languages.insertBefore("javascript", "keyword", {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
            exports: {
              pattern: l(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
          }),
            o.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            o.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            o.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: l(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var s = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              u = 0;
            u < s.length;
            u++
          ) {
            var i = s[u],
              c = o.languages.javascript[i];
            o.util.type(c) === "RegExp" &&
              (c = o.languages.javascript[i] = { pattern: c });
            var d = c.inside || {};
            (c.inside = d), (d["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(a);
      }
    },
  }),
  jc = H({
    "../../node_modules/refractor/lang/json.js"(e, t) {
      (t.exports = r), (r.displayName = "json"), (r.aliases = ["webmanifest"]);
      function r(a) {
        (a.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (a.languages.webmanifest = a.languages.json);
      }
    },
  }),
  Nc = H({
    "../../node_modules/refractor/lang/graphql.js"(e, t) {
      (t.exports = r), (r.displayName = "graphql"), (r.aliases = []);
      function r(a) {
        (a.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: a.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          a.hooks.add("after-tokenize", function (o) {
            if (o.language !== "graphql") return;
            var l = o.tokens.filter(function (k) {
                return (
                  typeof k != "string" &&
                  k.type !== "comment" &&
                  k.type !== "scalar"
                );
              }),
              s = 0;
            function u(k) {
              return l[s + k];
            }
            function i(k, v) {
              v = v || 0;
              for (var E = 0; E < k.length; E++) {
                var y = u(E + v);
                if (!y || y.type !== k[E]) return !1;
              }
              return !0;
            }
            function c(k, v) {
              for (var E = 1, y = s; y < l.length; y++) {
                var x = l[y],
                  C = x.content;
                if (x.type === "punctuation" && typeof C == "string") {
                  if (k.test(C)) E++;
                  else if (v.test(C) && (E--, E === 0)) return y;
                }
              }
              return -1;
            }
            function d(k, v) {
              var E = k.alias;
              E ? Array.isArray(E) || (k.alias = E = [E]) : (k.alias = E = []),
                E.push(v);
            }
            for (; s < l.length; ) {
              var f = l[s++];
              if (f.type === "keyword" && f.content === "mutation") {
                var p = [];
                if (
                  i(["definition-mutation", "punctuation"]) &&
                  u(1).content === "("
                ) {
                  s += 2;
                  var g = c(/^\($/, /^\)$/);
                  if (g === -1) continue;
                  for (; s < g; s++) {
                    var h = u(0);
                    h.type === "variable" &&
                      (d(h, "variable-input"), p.push(h.content));
                  }
                  s = g + 1;
                }
                if (
                  i(["punctuation", "property-query"]) &&
                  u(0).content === "{" &&
                  (s++, d(u(0), "property-mutation"), p.length > 0)
                ) {
                  var b = c(/^\{$/, /^\}$/);
                  if (b === -1) continue;
                  for (var A = s; A < b; A++) {
                    var w = l[A];
                    w.type === "variable" &&
                      p.indexOf(w.content) >= 0 &&
                      d(w, "variable-input");
                  }
                }
              }
            }
          });
      }
    },
  });
const { logger: Ic } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { global: Hc } = __STORYBOOK_MODULE_GLOBAL__;
var Vc = ve(Pl()),
  zc = Vc.default,
  qc = ve(Pc()),
  Uc = qc.default,
  Wc = ve(Zl()),
  Gc = Wc.default,
  Yc = ve(Zc()),
  Kc = Yc.default,
  Xc = ve(jc()),
  Jc = Xc.default,
  Qc = ve(Nc()),
  e1 = Qc.default,
  t1 = ve(jl()),
  r1 = t1.default,
  a1 = ve(lc()),
  n1 = a1.default,
  o1 = ve(ic()),
  l1 = o1.default,
  i1 = ve(sc()),
  s1 = i1.default,
  u1 = ve($l()),
  c1 = u1.default;
function d1(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function p1(e, t) {
  if (e == null) return {};
  var r = d1(e, t),
    a,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      (a = l[o]),
        !(t.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, a) &&
          (r[a] = e[a]);
  }
  return r;
}
function Wa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function f1(e) {
  if (Array.isArray(e)) return Wa(e);
}
function m1(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function g1(e, t) {
  if (e) {
    if (typeof e == "string") return Wa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wa(e, t);
  }
}
function h1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b1(e) {
  return f1(e) || m1(e) || g1(e) || h1();
}
function fr(e) {
  "@babel/helpers - typeof";
  return (
    (fr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fr(e)
  );
}
function y1(e, t) {
  if (fr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (fr(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v1(e) {
  var t = y1(e, "string");
  return fr(t) === "symbol" ? t : String(t);
}
function ql(e, t, r) {
  return (
    (t = v1(t)),
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
function Ga() {
  return (
    (Ga = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Ga.apply(this, arguments)
  );
}
function Bo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bo(Object(r), !0).forEach(function (a) {
          ql(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bo(Object(r)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
        });
  }
  return e;
}
function E1(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [
      e[0],
      e[1],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0]),
    ];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3]),
      "".concat(e[3], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
}
var Da = {};
function x1(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return Da[t] || (Da[t] = E1(e)), Da[t];
}
function A1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    a = e.filter(function (l) {
      return l !== "token";
    }),
    o = x1(a);
  return o.reduce(function (l, s) {
    return Dt(Dt({}, l), r[s]);
  }, t);
}
function $o(e) {
  return e.join(" ");
}
function w1(e, t) {
  var r = 0;
  return function (a) {
    return (
      (r += 1),
      a.map(function (o, l) {
        return Sn({
          node: o,
          stylesheet: e,
          useInlineStyles: t,
          key: "code-segment-".concat(r, "-").concat(l),
        });
      })
    );
  };
}
function Sn(e) {
  var t = e.node,
    r = e.stylesheet,
    a = e.style,
    o = a === void 0 ? {} : a,
    l = e.useInlineStyles,
    s = e.key,
    u = t.properties,
    i = t.type,
    c = t.tagName,
    d = t.value;
  if (i === "text") return d;
  if (c) {
    var f = w1(r, l),
      p;
    if (!l) p = Dt(Dt({}, u), {}, { className: $o(u.className) });
    else {
      var g = Object.keys(r).reduce(function (w, k) {
          return (
            k.split(".").forEach(function (v) {
              w.includes(v) || w.push(v);
            }),
            w
          );
        }, []),
        h = u.className && u.className.includes("token") ? ["token"] : [],
        b =
          u.className &&
          h.concat(
            u.className.filter(function (w) {
              return !g.includes(w);
            })
          );
      p = Dt(
        Dt({}, u),
        {},
        {
          className: $o(b) || void 0,
          style: A1(u.className, Object.assign({}, u.style, o), r),
        }
      );
    }
    var A = f(t.children);
    return n.createElement(c, Ga({ key: s }, p), A);
  }
}
var S1 = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  C1 = [
    "language",
    "children",
    "style",
    "customStyle",
    "codeTagProps",
    "useInlineStyles",
    "showLineNumbers",
    "showInlineLineNumbers",
    "startingLineNumber",
    "lineNumberContainerStyle",
    "lineNumberStyle",
    "wrapLines",
    "wrapLongLines",
    "lineProps",
    "renderer",
    "PreTag",
    "CodeTag",
    "code",
    "astGenerator",
  ];
function Po(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Po(Object(r), !0).forEach(function (a) {
          ql(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Po(Object(r)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
        });
  }
  return e;
}
var _1 = /\n/g;
function k1(e) {
  return e.match(_1);
}
function O1(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    a = e.style;
  return t.map(function (o, l) {
    var s = l + r;
    return n.createElement(
      "span",
      {
        key: "line-".concat(l),
        className: "react-syntax-highlighter-line-number",
        style: typeof a == "function" ? a(s) : a,
      },
      "".concat(
        s,
        `
`
      )
    );
  });
}
function R1(e) {
  var t = e.codeString,
    r = e.codeStyle,
    a = e.containerStyle,
    o = a === void 0 ? { float: "left", paddingRight: "10px" } : a,
    l = e.numberStyle,
    s = l === void 0 ? {} : l,
    u = e.startingLineNumber;
  return n.createElement(
    "code",
    { style: Object.assign({}, r, o) },
    O1({
      lines: t.replace(/\n$/, "").split(`
`),
      style: s,
      startingLineNumber: u,
    })
  );
}
function F1(e) {
  return "".concat(e.toString().length, ".25em");
}
function Ul(e, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: [
        "comment",
        "linenumber",
        "react-syntax-highlighter-line-number",
      ],
      style: t,
    },
    children: [{ type: "text", value: e }],
  };
}
function Wl(e, t, r) {
  var a = {
      display: "inline-block",
      minWidth: F1(r),
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
    },
    o = typeof e == "function" ? e(t) : e,
    l = ze(ze({}, a), o);
  return l;
}
function Hr(e) {
  var t = e.children,
    r = e.lineNumber,
    a = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    s = e.lineProps,
    u = s === void 0 ? {} : s,
    i = e.className,
    c = i === void 0 ? [] : i,
    d = e.showLineNumbers,
    f = e.wrapLongLines,
    p = typeof u == "function" ? u(r) : u;
  if (((p.className = c), r && l)) {
    var g = Wl(a, r, o);
    t.unshift(Ul(r, g));
  }
  return (
    f & d && (p.style = ze(ze({}, p.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: p, children: t }
  );
}
function Gl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var o = e[a];
    if (o.type === "text")
      r.push(Hr({ children: [o], className: b1(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      Gl(o.children, l).forEach(function (s) {
        return r.push(s);
      });
    }
  }
  return r;
}
function T1(e, t, r, a, o, l, s, u, i) {
  var c,
    d = Gl(e.value),
    f = [],
    p = -1,
    g = 0;
  function h(y, x) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Hr({
      children: y,
      lineNumber: x,
      lineNumberStyle: u,
      largestLineNumber: s,
      showInlineLineNumbers: o,
      lineProps: r,
      className: C,
      showLineNumbers: a,
      wrapLongLines: i,
    });
  }
  function b(y, x) {
    if (a && x && o) {
      var C = Wl(u, x, s);
      y.unshift(Ul(x, C));
    }
    return y;
  }
  function A(y, x) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || C.length > 0 ? h(y, x, C) : b(y, x);
  }
  for (
    var w = function () {
      var y = d[g],
        x = y.children[0].value,
        C = k1(x);
      if (C) {
        var S = x.split(`
`);
        S.forEach(function (O, R) {
          var F = a && f.length + l,
            L = {
              type: "text",
              value: "".concat(
                O,
                `
`
              ),
            };
          if (R === 0) {
            var T = d
                .slice(p + 1, g)
                .concat(
                  Hr({ children: [L], className: y.properties.className })
                ),
              Z = A(T, F);
            f.push(Z);
          } else if (R === S.length - 1) {
            var D = d[g + 1] && d[g + 1].children && d[g + 1].children[0],
              M = { type: "text", value: "".concat(O) };
            if (D) {
              var N = Hr({ children: [M], className: y.properties.className });
              d.splice(g + 1, 0, N);
            } else {
              var V = [M],
                $ = A(V, F, y.properties.className);
              f.push($);
            }
          } else {
            var I = [L],
              Y = A(I, F, y.properties.className);
            f.push(Y);
          }
        }),
          (p = g);
      }
      g++;
    };
    g < d.length;

  )
    w();
  if (p !== d.length - 1) {
    var k = d.slice(p + 1, d.length);
    if (k && k.length) {
      var v = a && f.length + l,
        E = A(k, v);
      f.push(E);
    }
  }
  return t ? f : (c = []).concat.apply(c, f);
}
function D1(e) {
  var t = e.rows,
    r = e.stylesheet,
    a = e.useInlineStyles;
  return t.map(function (o, l) {
    return Sn({
      node: o,
      stylesheet: r,
      useInlineStyles: a,
      key: "code-segement".concat(l),
    });
  });
}
function Yl(e) {
  return e && typeof e.highlightAuto < "u";
}
function L1(e) {
  var t = e.astGenerator,
    r = e.language,
    a = e.code,
    o = e.defaultCodeValue;
  if (Yl(t)) {
    var l = S1(t, r);
    return r === "text"
      ? { value: o, language: "text" }
      : l
      ? t.highlight(r, a)
      : t.highlightAuto(a);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(a, r) } : { value: o };
  } catch {
    return { value: o };
  }
}
function M1(e, t) {
  return function (r) {
    var a = r.language,
      o = r.children,
      l = r.style,
      s = l === void 0 ? t : l,
      u = r.customStyle,
      i = u === void 0 ? {} : u,
      c = r.codeTagProps,
      d =
        c === void 0
          ? {
              className: a ? "language-".concat(a) : void 0,
              style: ze(
                ze({}, s['code[class*="language-"]']),
                s['code[class*="language-'.concat(a, '"]')]
              ),
            }
          : c,
      f = r.useInlineStyles,
      p = f === void 0 ? !0 : f,
      g = r.showLineNumbers,
      h = g === void 0 ? !1 : g,
      b = r.showInlineLineNumbers,
      A = b === void 0 ? !0 : b,
      w = r.startingLineNumber,
      k = w === void 0 ? 1 : w,
      v = r.lineNumberContainerStyle,
      E = r.lineNumberStyle,
      y = E === void 0 ? {} : E,
      x = r.wrapLines,
      C = r.wrapLongLines,
      S = C === void 0 ? !1 : C,
      O = r.lineProps,
      R = O === void 0 ? {} : O,
      F = r.renderer,
      L = r.PreTag,
      T = L === void 0 ? "pre" : L,
      Z = r.CodeTag,
      D = Z === void 0 ? "code" : Z,
      M = r.code,
      N = M === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : M,
      V = r.astGenerator,
      $ = p1(r, C1);
    V = V || e;
    var I = h
        ? n.createElement(R1, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: y,
            startingLineNumber: k,
            codeString: N,
          })
        : null,
      Y = s.hljs || s['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      ee = Yl(V) ? "hljs" : "prismjs",
      G = p
        ? Object.assign({}, $, { style: Object.assign({}, Y, i) })
        : Object.assign({}, $, {
            className: $.className
              ? "".concat(ee, " ").concat($.className)
              : ee,
            style: Object.assign({}, i),
          });
    if (
      (S
        ? (d.style = ze(ze({}, d.style), {}, { whiteSpace: "pre-wrap" }))
        : (d.style = ze(ze({}, d.style), {}, { whiteSpace: "pre" })),
      !V)
    )
      return n.createElement(T, G, I, n.createElement(D, d, N));
    ((x === void 0 && F) || S) && (x = !0), (F = F || D1);
    var K = [{ type: "text", value: N }],
      P = L1({ astGenerator: V, language: a, code: N, defaultCodeValue: K });
    P.language === null && (P.value = K);
    var z = P.value.length + k,
      q = T1(P, x, R, h, A, k, z, y, S);
    return n.createElement(
      T,
      G,
      n.createElement(
        D,
        d,
        !A && I,
        F({ rows: q, stylesheet: s, useInlineStyles: p })
      )
    );
  };
}
var Cn = ve($c()),
  _n = M1(Cn.default, {});
_n.registerLanguage = function (e, t) {
  return Cn.default.register(t);
};
_n.alias = function (e, t) {
  return Cn.default.alias(e, t);
};
var Ee = _n,
  B1 = _.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1,
  })),
  Kl = _.button(
    ({ theme: e }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` },
      "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none",
      },
    }),
    ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 }
  );
Kl.displayName = "ActionButton";
var kn = ({ actionItems: e, ...t }) =>
  n.createElement(
    B1,
    { ...t },
    e.map(({ title: r, className: a, onClick: o, disabled: l }, s) =>
      n.createElement(Kl, { key: s, className: a, onClick: o, disabled: l }, r)
    )
  );
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    ae.apply(this, arguments)
  );
}
function Ya() {
  return (
    (Ya = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Ya.apply(this, arguments)
  );
}
function Kr() {
  return (
    (Kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Kr.apply(this, arguments)
  );
}
function $1(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Xl(...e) {
  return (t) => e.forEach((r) => $1(r, t));
}
function _t(...e) {
  return m.useCallback(Xl(...e), e);
}
var Jl = m.forwardRef((e, t) => {
  let { children: r, ...a } = e,
    o = m.Children.toArray(r),
    l = o.find(Z1);
  if (l) {
    let s = l.props.children,
      u = o.map((i) =>
        i === l
          ? m.Children.count(s) > 1
            ? m.Children.only(null)
            : m.isValidElement(s)
            ? s.props.children
            : null
          : i
      );
    return m.createElement(
      Ka,
      Kr({}, a, { ref: t }),
      m.isValidElement(s) ? m.cloneElement(s, void 0, u) : null
    );
  }
  return m.createElement(Ka, Kr({}, a, { ref: t }), r);
});
Jl.displayName = "Slot";
var Ka = m.forwardRef((e, t) => {
  let { children: r, ...a } = e;
  return m.isValidElement(r)
    ? m.cloneElement(r, { ...j1(a, r.props), ref: t ? Xl(t, r.ref) : r.ref })
    : m.Children.count(r) > 1
    ? m.Children.only(null)
    : null;
});
Ka.displayName = "SlotClone";
var P1 = ({ children: e }) => m.createElement(m.Fragment, null, e);
function Z1(e) {
  return m.isValidElement(e) && e.type === P1;
}
function j1(e, t) {
  let r = { ...t };
  for (let a in t) {
    let o = e[a],
      l = t[a];
    /^on[A-Z]/.test(a)
      ? o && l
        ? (r[a] = (...s) => {
            l(...s), o(...s);
          })
        : o && (r[a] = o)
      : a === "style"
      ? (r[a] = { ...o, ...l })
      : a === "className" && (r[a] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
var N1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  wr = N1.reduce((e, t) => {
    let r = m.forwardRef((a, o) => {
      let { asChild: l, ...s } = a,
        u = l ? Jl : t;
      return (
        m.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        m.createElement(u, Ya({}, s, { ref: o }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  Xa = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {};
function I1(e, t) {
  return m.useReducer((r, a) => t[r][a] ?? r, e);
}
var Sr = (e) => {
  let { present: t, children: r } = e,
    a = H1(t),
    o =
      typeof r == "function" ? r({ present: a.isPresent }) : m.Children.only(r),
    l = _t(a.ref, o.ref);
  return typeof r == "function" || a.isPresent
    ? m.cloneElement(o, { ref: l })
    : null;
};
Sr.displayName = "Presence";
function H1(e) {
  let [t, r] = m.useState(),
    a = m.useRef({}),
    o = m.useRef(e),
    l = m.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [u, i] = I1(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      let c = Mr(a.current);
      l.current = u === "mounted" ? c : "none";
    }, [u]),
    Xa(() => {
      let c = a.current,
        d = o.current;
      if (d !== e) {
        let f = l.current,
          p = Mr(c);
        e
          ? i("MOUNT")
          : p === "none" || (c == null ? void 0 : c.display) === "none"
          ? i("UNMOUNT")
          : i(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, i]),
    Xa(() => {
      if (t) {
        let c = (f) => {
            let p = Mr(a.current).includes(f.animationName);
            f.target === t && p && fl.flushSync(() => i("ANIMATION_END"));
          },
          d = (f) => {
            f.target === t && (l.current = Mr(a.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else i("ANIMATION_END");
    }, [t, i]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(u),
      ref: m.useCallback((c) => {
        c && (a.current = getComputedStyle(c)), r(c);
      }, []),
    }
  );
}
function Mr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function V1(e, t = []) {
  let r = [];
  function a(l, s) {
    let u = m.createContext(s),
      i = r.length;
    r = [...r, s];
    function c(f) {
      let { scope: p, children: g, ...h } = f,
        b = (p == null ? void 0 : p[e][i]) || u,
        A = m.useMemo(() => h, Object.values(h));
      return m.createElement(b.Provider, { value: A }, g);
    }
    function d(f, p) {
      let g = (p == null ? void 0 : p[e][i]) || u,
        h = m.useContext(g);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${l}\``);
    }
    return (c.displayName = l + "Provider"), [c, d];
  }
  let o = () => {
    let l = r.map((s) => m.createContext(s));
    return function (s) {
      let u = (s == null ? void 0 : s[e]) || l;
      return m.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (o.scopeName = e), [a, z1(o, ...t)];
}
function z1(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = () => {
    let a = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (o) {
      let l = a.reduce((s, { useScope: u, scopeName: i }) => {
        let c = u(o)[`__scope${i}`];
        return { ...s, ...c };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function ht(e) {
  let t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    m.useMemo(
      () =>
        (...r) => {
          var a;
          return (a = t.current) === null || a === void 0
            ? void 0
            : a.call(t, ...r);
        },
      []
    )
  );
}
var q1 = m.createContext(void 0);
function U1(e) {
  let t = m.useContext(q1);
  return e || t || "ltr";
}
function W1(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function yt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), r === !1 || !a.defaultPrevented))
      return t == null ? void 0 : t(a);
  };
}
function G1(e, t) {
  return m.useReducer((r, a) => t[r][a] ?? r, e);
}
var Ql = "ScrollArea",
  [ei, o3] = V1(Ql),
  [Y1, Oe] = ei(Ql),
  K1 = m.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        type: a = "hover",
        dir: o,
        scrollHideDelay: l = 600,
        ...s
      } = e,
      [u, i] = m.useState(null),
      [c, d] = m.useState(null),
      [f, p] = m.useState(null),
      [g, h] = m.useState(null),
      [b, A] = m.useState(null),
      [w, k] = m.useState(0),
      [v, E] = m.useState(0),
      [y, x] = m.useState(!1),
      [C, S] = m.useState(!1),
      O = _t(t, (F) => i(F)),
      R = U1(o);
    return m.createElement(
      Y1,
      {
        scope: r,
        type: a,
        dir: R,
        scrollHideDelay: l,
        scrollArea: u,
        viewport: c,
        onViewportChange: d,
        content: f,
        onContentChange: p,
        scrollbarX: g,
        onScrollbarXChange: h,
        scrollbarXEnabled: y,
        onScrollbarXEnabledChange: x,
        scrollbarY: b,
        onScrollbarYChange: A,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: S,
        onCornerWidthChange: k,
        onCornerHeightChange: E,
      },
      m.createElement(
        wr.div,
        ae({ dir: R }, s, {
          ref: O,
          style: {
            position: "relative",
            "--radix-scroll-area-corner-width": w + "px",
            "--radix-scroll-area-corner-height": v + "px",
            ...e.style,
          },
        })
      )
    );
  }),
  X1 = "ScrollAreaViewport",
  J1 = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, children: a, ...o } = e,
      l = Oe(X1, r),
      s = m.useRef(null),
      u = _t(t, s, l.onViewportChange);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      m.createElement(
        wr.div,
        ae({ "data-radix-scroll-area-viewport": "" }, o, {
          ref: u,
          style: {
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
        }),
        m.createElement(
          "div",
          {
            ref: l.onContentChange,
            style: { minWidth: "100%", display: "table" },
          },
          a
        )
      )
    );
  }),
  at = "ScrollAreaScrollbar",
  Q1 = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Oe(at, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: s } = o,
      u = e.orientation === "horizontal";
    return (
      m.useEffect(
        () => (
          u ? l(!0) : s(!0),
          () => {
            u ? l(!1) : s(!1);
          }
        ),
        [u, l, s]
      ),
      o.type === "hover"
        ? m.createElement(ed, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "scroll"
        ? m.createElement(td, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "auto"
        ? m.createElement(ti, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "always"
        ? m.createElement(On, ae({}, a, { ref: t }))
        : null
    );
  }),
  ed = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Oe(at, e.__scopeScrollArea),
      [l, s] = m.useState(!1);
    return (
      m.useEffect(() => {
        let u = o.scrollArea,
          i = 0;
        if (u) {
          let c = () => {
              window.clearTimeout(i), s(!0);
            },
            d = () => {
              i = window.setTimeout(() => s(!1), o.scrollHideDelay);
            };
          return (
            u.addEventListener("pointerenter", c),
            u.addEventListener("pointerleave", d),
            () => {
              window.clearTimeout(i),
                u.removeEventListener("pointerenter", c),
                u.removeEventListener("pointerleave", d);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      m.createElement(
        Sr,
        { present: r || l },
        m.createElement(
          ti,
          ae({ "data-state": l ? "visible" : "hidden" }, a, { ref: t })
        )
      )
    );
  }),
  td = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Oe(at, e.__scopeScrollArea),
      l = e.orientation === "horizontal",
      s = ca(() => i("SCROLL_END"), 100),
      [u, i] = G1("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      m.useEffect(() => {
        if (u === "idle") {
          let c = window.setTimeout(() => i("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [u, o.scrollHideDelay, i]),
      m.useEffect(() => {
        let c = o.viewport,
          d = l ? "scrollLeft" : "scrollTop";
        if (c) {
          let f = c[d],
            p = () => {
              let g = c[d];
              f !== g && (i("SCROLL"), s()), (f = g);
            };
          return (
            c.addEventListener("scroll", p),
            () => c.removeEventListener("scroll", p)
          );
        }
      }, [o.viewport, l, i, s]),
      m.createElement(
        Sr,
        { present: r || u !== "hidden" },
        m.createElement(
          On,
          ae({ "data-state": u === "hidden" ? "hidden" : "visible" }, a, {
            ref: t,
            onPointerEnter: yt(e.onPointerEnter, () => i("POINTER_ENTER")),
            onPointerLeave: yt(e.onPointerLeave, () => i("POINTER_LEAVE")),
          })
        )
      )
    );
  }),
  ti = m.forwardRef((e, t) => {
    let r = Oe(at, e.__scopeScrollArea),
      { forceMount: a, ...o } = e,
      [l, s] = m.useState(!1),
      u = e.orientation === "horizontal",
      i = ca(() => {
        if (r.viewport) {
          let c = r.viewport.offsetWidth < r.viewport.scrollWidth,
            d = r.viewport.offsetHeight < r.viewport.scrollHeight;
          s(u ? c : d);
        }
      }, 10);
    return (
      Zt(r.viewport, i),
      Zt(r.content, i),
      m.createElement(
        Sr,
        { present: a || l },
        m.createElement(
          On,
          ae({ "data-state": l ? "visible" : "hidden" }, o, { ref: t })
        )
      )
    );
  }),
  On = m.forwardRef((e, t) => {
    let { orientation: r = "vertical", ...a } = e,
      o = Oe(at, e.__scopeScrollArea),
      l = m.useRef(null),
      s = m.useRef(0),
      [u, i] = m.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = oi(u.viewport, u.content),
      d = {
        ...a,
        sizes: u,
        onSizesChange: i,
        hasThumb: c > 0 && c < 1,
        onThumbChange: (p) => (l.current = p),
        onThumbPointerUp: () => (s.current = 0),
        onThumbPointerDown: (p) => (s.current = p),
      };
    function f(p, g) {
      return ud(p, s.current, u, g);
    }
    return r === "horizontal"
      ? m.createElement(
          rd,
          ae({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let p = o.viewport.scrollLeft,
                  g = Zo(p, u, o.dir);
                l.current.style.transform = `translate3d(${g}px, 0, 0)`;
              }
            },
            onWheelScroll: (p) => {
              o.viewport && (o.viewport.scrollLeft = p);
            },
            onDragScroll: (p) => {
              o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
            },
          })
        )
      : r === "vertical"
      ? m.createElement(
          ad,
          ae({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let p = o.viewport.scrollTop,
                  g = Zo(p, u);
                l.current.style.transform = `translate3d(0, ${g}px, 0)`;
              }
            },
            onWheelScroll: (p) => {
              o.viewport && (o.viewport.scrollTop = p);
            },
            onDragScroll: (p) => {
              o.viewport && (o.viewport.scrollTop = f(p));
            },
          })
        )
      : null;
  }),
  rd = m.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: a, ...o } = e,
      l = Oe(at, e.__scopeScrollArea),
      [s, u] = m.useState(),
      i = m.useRef(null),
      c = _t(t, i, l.onScrollbarXChange);
    return (
      m.useEffect(() => {
        i.current && u(getComputedStyle(i.current));
      }, [i]),
      m.createElement(
        ai,
        ae({ "data-orientation": "horizontal" }, o, {
          ref: c,
          sizes: r,
          style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": ua(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
          onDragScroll: (d) => e.onDragScroll(d.x),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let p = l.viewport.scrollLeft + d.deltaX;
              e.onWheelScroll(p), ii(p, f) && d.preventDefault();
            }
          },
          onResize: () => {
            i.current &&
              l.viewport &&
              s &&
              a({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: i.current.clientWidth,
                  paddingStart: Xr(s.paddingLeft),
                  paddingEnd: Xr(s.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  ad = m.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: a, ...o } = e,
      l = Oe(at, e.__scopeScrollArea),
      [s, u] = m.useState(),
      i = m.useRef(null),
      c = _t(t, i, l.onScrollbarYChange);
    return (
      m.useEffect(() => {
        i.current && u(getComputedStyle(i.current));
      }, [i]),
      m.createElement(
        ai,
        ae({ "data-orientation": "vertical" }, o, {
          ref: c,
          sizes: r,
          style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": ua(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
          onDragScroll: (d) => e.onDragScroll(d.y),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let p = l.viewport.scrollTop + d.deltaY;
              e.onWheelScroll(p), ii(p, f) && d.preventDefault();
            }
          },
          onResize: () => {
            i.current &&
              l.viewport &&
              s &&
              a({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: i.current.clientHeight,
                  paddingStart: Xr(s.paddingTop),
                  paddingEnd: Xr(s.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [nd, ri] = ei(at),
  ai = m.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        sizes: a,
        hasThumb: o,
        onThumbChange: l,
        onThumbPointerUp: s,
        onThumbPointerDown: u,
        onThumbPositionChange: i,
        onDragScroll: c,
        onWheelScroll: d,
        onResize: f,
        ...p
      } = e,
      g = Oe(at, r),
      [h, b] = m.useState(null),
      A = _t(t, (O) => b(O)),
      w = m.useRef(null),
      k = m.useRef(""),
      v = g.viewport,
      E = a.content - a.viewport,
      y = ht(d),
      x = ht(i),
      C = ca(f, 10);
    function S(O) {
      if (w.current) {
        let R = O.clientX - w.current.left,
          F = O.clientY - w.current.top;
        c({ x: R, y: F });
      }
    }
    return (
      m.useEffect(() => {
        let O = (R) => {
          let F = R.target;
          h != null && h.contains(F) && y(R, E);
        };
        return (
          document.addEventListener("wheel", O, { passive: !1 }),
          () => document.removeEventListener("wheel", O, { passive: !1 })
        );
      }, [v, h, E, y]),
      m.useEffect(x, [a, x]),
      Zt(h, C),
      Zt(g.content, C),
      m.createElement(
        nd,
        {
          scope: r,
          scrollbar: h,
          hasThumb: o,
          onThumbChange: ht(l),
          onThumbPointerUp: ht(s),
          onThumbPositionChange: x,
          onThumbPointerDown: ht(u),
        },
        m.createElement(
          wr.div,
          ae({}, p, {
            ref: A,
            style: { position: "absolute", ...p.style },
            onPointerDown: yt(e.onPointerDown, (O) => {
              O.button === 0 &&
                (O.target.setPointerCapture(O.pointerId),
                (w.current = h.getBoundingClientRect()),
                (k.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                g.viewport && (g.viewport.style.scrollBehavior = "auto"),
                S(O));
            }),
            onPointerMove: yt(e.onPointerMove, S),
            onPointerUp: yt(e.onPointerUp, (O) => {
              let R = O.target;
              R.hasPointerCapture(O.pointerId) &&
                R.releasePointerCapture(O.pointerId),
                (document.body.style.webkitUserSelect = k.current),
                g.viewport && (g.viewport.style.scrollBehavior = ""),
                (w.current = null);
            }),
          })
        )
      )
    );
  }),
  Ja = "ScrollAreaThumb",
  od = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = ri(Ja, e.__scopeScrollArea);
    return m.createElement(
      Sr,
      { present: r || o.hasThumb },
      m.createElement(ld, ae({ ref: t }, a))
    );
  }),
  ld = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, style: a, ...o } = e,
      l = Oe(Ja, r),
      s = ri(Ja, r),
      { onThumbPositionChange: u } = s,
      i = _t(t, (f) => s.onThumbChange(f)),
      c = m.useRef(),
      d = ca(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      m.useEffect(() => {
        let f = l.viewport;
        if (f) {
          let p = () => {
            if ((d(), !c.current)) {
              let g = cd(f, u);
              (c.current = g), u();
            }
          };
          return (
            u(),
            f.addEventListener("scroll", p),
            () => f.removeEventListener("scroll", p)
          );
        }
      }, [l.viewport, d, u]),
      m.createElement(
        wr.div,
        ae({ "data-state": s.hasThumb ? "visible" : "hidden" }, o, {
          ref: i,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...a,
          },
          onPointerDownCapture: yt(e.onPointerDownCapture, (f) => {
            let p = f.target.getBoundingClientRect(),
              g = f.clientX - p.left,
              h = f.clientY - p.top;
            s.onThumbPointerDown({ x: g, y: h });
          }),
          onPointerUp: yt(e.onPointerUp, s.onThumbPointerUp),
        })
      )
    );
  }),
  ni = "ScrollAreaCorner",
  id = m.forwardRef((e, t) => {
    let r = Oe(ni, e.__scopeScrollArea),
      a = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && a
      ? m.createElement(sd, ae({}, e, { ref: t }))
      : null;
  }),
  sd = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, ...a } = e,
      o = Oe(ni, r),
      [l, s] = m.useState(0),
      [u, i] = m.useState(0),
      c = !!(l && u);
    return (
      Zt(o.scrollbarX, () => {
        var d;
        let f =
          ((d = o.scrollbarX) === null || d === void 0
            ? void 0
            : d.offsetHeight) || 0;
        o.onCornerHeightChange(f), i(f);
      }),
      Zt(o.scrollbarY, () => {
        var d;
        let f =
          ((d = o.scrollbarY) === null || d === void 0
            ? void 0
            : d.offsetWidth) || 0;
        o.onCornerWidthChange(f), s(f);
      }),
      c
        ? m.createElement(
            wr.div,
            ae({}, a, {
              ref: t,
              style: {
                width: l,
                height: u,
                position: "absolute",
                right: o.dir === "ltr" ? 0 : void 0,
                left: o.dir === "rtl" ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    );
  });
function Xr(e) {
  return e ? parseInt(e, 10) : 0;
}
function oi(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function ua(e) {
  let t = oi(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    a = (e.scrollbar.size - r) * t;
  return Math.max(a, 18);
}
function ud(e, t, r, a = "ltr") {
  let o = ua(r),
    l = o / 2,
    s = t || l,
    u = o - s,
    i = r.scrollbar.paddingStart + s,
    c = r.scrollbar.size - r.scrollbar.paddingEnd - u,
    d = r.content - r.viewport,
    f = a === "ltr" ? [0, d] : [d * -1, 0];
  return li([i, c], f)(e);
}
function Zo(e, t, r = "ltr") {
  let a = ua(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - o,
    s = t.content - t.viewport,
    u = l - a,
    i = r === "ltr" ? [0, s] : [s * -1, 0],
    c = W1(e, i);
  return li([0, s], [0, u])(c);
}
function li(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (r - e[0]);
  };
}
function ii(e, t) {
  return e > 0 && e < t;
}
var cd = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    a = 0;
  return (
    (function o() {
      let l = { left: e.scrollLeft, top: e.scrollTop },
        s = r.left !== l.left,
        u = r.top !== l.top;
      (s || u) && t(), (r = l), (a = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(a)
  );
};
function ca(e, t) {
  let r = ht(e),
    a = m.useRef(0);
  return (
    m.useEffect(() => () => window.clearTimeout(a.current), []),
    m.useCallback(() => {
      window.clearTimeout(a.current), (a.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function Zt(e, t) {
  let r = ht(t);
  Xa(() => {
    let a = 0;
    if (e) {
      let o = new ResizeObserver(() => {
        cancelAnimationFrame(a), (a = window.requestAnimationFrame(r));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(a), o.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
var dd = K1,
  pd = J1,
  fd = Q1,
  md = od,
  gd = id,
  hd = _(dd)(({ scrollbarsize: e, offset: t }) => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "--scrollbar-size": `${e + t}px`,
    "--radix-scroll-area-thumb-width": `${e}px`,
  })),
  bd = _(pd)({ width: "100%", height: "100%" }),
  jo = _(fd)(({ offset: e, horizontal: t, vertical: r }) => ({
    display: "flex",
    userSelect: "none",
    touchAction: "none",
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e,
      marginTop: e,
      marginBottom: t === "true" && r === "true" ? 0 : e,
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e,
      marginLeft: e,
      marginRight: t === "true" && r === "true" ? 0 : e,
    },
  })),
  No = _(md)(({ theme: e }) => ({
    flex: 1,
    background: e.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%",
      minWidth: 44,
      minHeight: 44,
    },
  })),
  Rn = ({
    children: e,
    horizontal: t = !1,
    vertical: r = !1,
    offset: a = 2,
    scrollbarSize: o = 6,
    className: l,
  }) =>
    n.createElement(
      hd,
      { scrollbarsize: o, offset: a, className: l },
      n.createElement(bd, null, e),
      t &&
        n.createElement(
          jo,
          {
            orientation: "horizontal",
            offset: a,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          n.createElement(No, null)
        ),
      r &&
        n.createElement(
          jo,
          {
            orientation: "vertical",
            offset: a,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          n.createElement(No, null)
        ),
      t && r && n.createElement(gd, null)
    ),
  { navigator: Br, document: tr, window: yd } = Hc;
Ee.registerLanguage("jsextra", Kc);
Ee.registerLanguage("jsx", zc);
Ee.registerLanguage("json", Jc);
Ee.registerLanguage("yml", l1);
Ee.registerLanguage("md", n1);
Ee.registerLanguage("bash", Uc);
Ee.registerLanguage("css", Gc);
Ee.registerLanguage("html", r1);
Ee.registerLanguage("tsx", s1);
Ee.registerLanguage("typescript", c1);
Ee.registerLanguage("graphql", e1);
var vd = Ct(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, a]) => ({ ...t, [`* .${r}`]: a }),
      {}
    )
  ),
  Ed = si();
function si() {
  return Br != null && Br.clipboard
    ? (e) => Br.clipboard.writeText(e)
    : async (e) => {
        let t = tr.createElement("TEXTAREA"),
          r = tr.activeElement;
        (t.value = e),
          tr.body.appendChild(t),
          t.select(),
          tr.execCommand("copy"),
          tr.body.removeChild(t),
          r.focus();
      };
}
var xd = _.div(
    ({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      color: e.color.defaultText,
    }),
    ({ theme: e, bordered: t }) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content,
          }
        : {},
    ({ showLineNumbers: e }) =>
      e
        ? {
            ".react-syntax-highlighter-line-number::before": {
              content: "attr(data-line-number)",
            },
          }
        : {}
  ),
  Ad = ({ children: e, className: t }) =>
    n.createElement(Rn, { horizontal: !0, vertical: !0, className: t }, e),
  wd = _(Ad)({ position: "relative" }, ({ theme: e }) => vd(e)),
  Sd = _.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  Cd = _.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
  })),
  ui = (e) => {
    let t = [...e.children],
      r = t[0],
      a = r.children[0].value,
      o = {
        ...r,
        children: [],
        properties: {
          ...r.properties,
          "data-line-number": a,
          style: { ...r.properties.style, userSelect: "auto" },
        },
      };
    return (t[0] = o), { ...e, children: t };
  },
  _d = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((a, o) =>
      Sn({
        node: ui(a),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${o}`,
      })
    ),
  kd = (e, t) =>
    t
      ? e
        ? ({ rows: r, ...a }) => e({ rows: r.map((o) => ui(o)), ...a })
        : _d
      : e,
  Fn = ({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: a = !1,
    padded: o = !1,
    format: l = !0,
    formatter: s = null,
    className: u = null,
    showLineNumbers: i = !1,
    ...c
  }) => {
    if (typeof e != "string" || !e.trim()) return null;
    let d = s ? s(l, e) : e.trim(),
      [f, p] = m.useState(!1),
      g = m.useCallback(
        (b) => {
          b.preventDefault(),
            Ed(d)
              .then(() => {
                p(!0), yd.setTimeout(() => p(!1), 1500);
              })
              .catch(Ic.error);
        },
        [d]
      ),
      h = kd(c.renderer, i);
    return n.createElement(
      xd,
      { bordered: a, padded: o, showLineNumbers: i, className: u },
      n.createElement(
        wd,
        null,
        n.createElement(
          Ee,
          {
            padded: o || a,
            language: t,
            showLineNumbers: i,
            showInlineLineNumbers: i,
            useInlineStyles: !1,
            PreTag: Sd,
            CodeTag: Cd,
            lineNumberContainerStyle: {},
            ...c,
            renderer: h,
          },
          d
        )
      ),
      r
        ? n.createElement(kn, {
            actionItems: [{ title: f ? "Copied" : "Copy", onClick: g }],
          })
        : null
    );
  };
Fn.registerLanguage = (...e) => Ee.registerLanguage(...e);
var l3 = Fn;
const { global: Od } = __STORYBOOK_MODULE_GLOBAL__;
var Rd = H({
  "../../node_modules/react-fast-compare/index.js"(e, t) {
    var r = typeof Element < "u",
      a = typeof Map == "function",
      o = typeof Set == "function",
      l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function s(u, i) {
      if (u === i) return !0;
      if (u && i && typeof u == "object" && typeof i == "object") {
        if (u.constructor !== i.constructor) return !1;
        var c, d, f;
        if (Array.isArray(u)) {
          if (((c = u.length), c != i.length)) return !1;
          for (d = c; d-- !== 0; ) if (!s(u[d], i[d])) return !1;
          return !0;
        }
        var p;
        if (a && u instanceof Map && i instanceof Map) {
          if (u.size !== i.size) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!i.has(d.value[0])) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!s(d.value[1], i.get(d.value[0]))) return !1;
          return !0;
        }
        if (o && u instanceof Set && i instanceof Set) {
          if (u.size !== i.size) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!i.has(d.value[0])) return !1;
          return !0;
        }
        if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(i)) {
          if (((c = u.length), c != i.length)) return !1;
          for (d = c; d-- !== 0; ) if (u[d] !== i[d]) return !1;
          return !0;
        }
        if (u.constructor === RegExp)
          return u.source === i.source && u.flags === i.flags;
        if (
          u.valueOf !== Object.prototype.valueOf &&
          typeof u.valueOf == "function" &&
          typeof i.valueOf == "function"
        )
          return u.valueOf() === i.valueOf();
        if (
          u.toString !== Object.prototype.toString &&
          typeof u.toString == "function" &&
          typeof i.toString == "function"
        )
          return u.toString() === i.toString();
        if (((f = Object.keys(u)), (c = f.length), c !== Object.keys(i).length))
          return !1;
        for (d = c; d-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(i, f[d])) return !1;
        if (r && u instanceof Element) return !1;
        for (d = c; d-- !== 0; )
          if (
            !(
              (f[d] === "_owner" || f[d] === "__v" || f[d] === "__o") &&
              u.$$typeof
            ) &&
            !s(u[f[d]], i[f[d]])
          )
            return !1;
        return !0;
      }
      return u !== u && i !== i;
    }
    t.exports = function (u, i) {
      try {
        return s(u, i);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw c;
      }
    };
  },
});
function Fd(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function et() {
  return (
    (et = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    et.apply(this, arguments)
  );
}
var Io = function (e) {
    return e.reduce(function (t, r) {
      var a = r[0],
        o = r[1];
      return (t[a] = o), t;
    }, {});
  },
  Ho =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  me = "top",
  _e = "bottom",
  ke = "right",
  ge = "left",
  da = "auto",
  Cr = [me, _e, ke, ge],
  jt = "start",
  mr = "end",
  Td = "clippingParents",
  ci = "viewport",
  rr = "popper",
  Dd = "reference",
  Vo = Cr.reduce(function (e, t) {
    return e.concat([t + "-" + jt, t + "-" + mr]);
  }, []),
  di = [].concat(Cr, [da]).reduce(function (e, t) {
    return e.concat([t, t + "-" + jt, t + "-" + mr]);
  }, []),
  Ld = "beforeRead",
  Md = "read",
  Bd = "afterRead",
  $d = "beforeMain",
  Pd = "main",
  Zd = "afterMain",
  jd = "beforeWrite",
  Nd = "write",
  Id = "afterWrite",
  Hd = [Ld, Md, Bd, $d, Pd, Zd, jd, Nd, Id];
function Xe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ye(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function St(e) {
  var t = ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ce(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Tn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var a = t.styles[r] || {},
      o = t.attributes[r] || {},
      l = t.elements[r];
    !Ce(l) ||
      !Xe(l) ||
      (Object.assign(l.style, a),
      Object.keys(o).forEach(function (s) {
        var u = o[s];
        u === !1 ? l.removeAttribute(s) : l.setAttribute(s, u === !0 ? "" : u);
      }));
  });
}
function zd(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (a) {
        var o = t.elements[a],
          l = t.attributes[a] || {},
          s = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : r[a]),
          u = s.reduce(function (i, c) {
            return (i[c] = ""), i;
          }, {});
        !Ce(o) ||
          !Xe(o) ||
          (Object.assign(o.style, u),
          Object.keys(l).forEach(function (i) {
            o.removeAttribute(i);
          }));
      });
    }
  );
}
var qd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vd,
  effect: zd,
  requires: ["computeStyles"],
};
function Ke(e) {
  return e.split("-")[0];
}
var vt = Math.max,
  Jr = Math.min,
  Nt = Math.round;
function Qa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function pi() {
  return !/^((?!chrome|android).)*safari/i.test(Qa());
}
function It(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(),
    o = 1,
    l = 1;
  t &&
    Ce(e) &&
    ((o = (e.offsetWidth > 0 && Nt(a.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && Nt(a.height) / e.offsetHeight) || 1));
  var s = St(e) ? ye(e) : window,
    u = s.visualViewport,
    i = !pi() && r,
    c = (a.left + (i && u ? u.offsetLeft : 0)) / o,
    d = (a.top + (i && u ? u.offsetTop : 0)) / l,
    f = a.width / o,
    p = a.height / l;
  return {
    width: f,
    height: p,
    top: d,
    right: c + f,
    bottom: d + p,
    left: c,
    x: c,
    y: d,
  };
}
function Dn(e) {
  var t = It(e),
    r = e.offsetWidth,
    a = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - a) <= 1 && (a = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: a }
  );
}
function fi(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Tn(r)) {
    var a = t;
    do {
      if (a && e.isSameNode(a)) return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function rt(e) {
  return ye(e).getComputedStyle(e);
}
function Ud(e) {
  return ["table", "td", "th"].indexOf(Xe(e)) >= 0;
}
function st(e) {
  return ((St(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function pa(e) {
  return Xe(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Tn(e) ? e.host : null) || st(e);
}
function zo(e) {
  return !Ce(e) || rt(e).position === "fixed" ? null : e.offsetParent;
}
function Wd(e) {
  var t = /firefox/i.test(Qa()),
    r = /Trident/i.test(Qa());
  if (r && Ce(e)) {
    var a = rt(e);
    if (a.position === "fixed") return null;
  }
  var o = pa(e);
  for (Tn(o) && (o = o.host); Ce(o) && ["html", "body"].indexOf(Xe(o)) < 0; ) {
    var l = rt(o);
    if (
      l.transform !== "none" ||
      l.perspective !== "none" ||
      l.contain === "paint" ||
      ["transform", "perspective"].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === "filter") ||
      (t && l.filter && l.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = ye(e), r = zo(e); r && Ud(r) && rt(r).position === "static"; )
    r = zo(r);
  return r &&
    (Xe(r) === "html" || (Xe(r) === "body" && rt(r).position === "static"))
    ? t
    : r || Wd(e) || t;
}
function Ln(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function or(e, t, r) {
  return vt(e, Jr(t, r));
}
function Gd(e, t, r) {
  var a = or(e, t, r);
  return a > r ? r : a;
}
function mi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function gi(e) {
  return Object.assign({}, mi(), e);
}
function hi(e, t) {
  return t.reduce(function (r, a) {
    return (r[a] = e), r;
  }, {});
}
var Yd = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    gi(typeof e != "number" ? e : hi(e, Cr))
  );
};
function Kd(e) {
  var t,
    r = e.state,
    a = e.name,
    o = e.options,
    l = r.elements.arrow,
    s = r.modifiersData.popperOffsets,
    u = Ke(r.placement),
    i = Ln(u),
    c = [ge, ke].indexOf(u) >= 0,
    d = c ? "height" : "width";
  if (!(!l || !s)) {
    var f = Yd(o.padding, r),
      p = Dn(l),
      g = i === "y" ? me : ge,
      h = i === "y" ? _e : ke,
      b =
        r.rects.reference[d] + r.rects.reference[i] - s[i] - r.rects.popper[d],
      A = s[i] - r.rects.reference[i],
      w = _r(l),
      k = w ? (i === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      v = b / 2 - A / 2,
      E = f[g],
      y = k - p[d] - f[h],
      x = k / 2 - p[d] / 2 + v,
      C = or(E, x, y),
      S = i;
    r.modifiersData[a] = ((t = {}), (t[S] = C), (t.centerOffset = C - x), t);
  }
}
function Xd(e) {
  var t = e.state,
    r = e.options,
    a = r.element,
    o = a === void 0 ? "[data-popper-arrow]" : a;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (fi(t.elements.popper, o) && (t.elements.arrow = o)));
}
var Jd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Kd,
  effect: Xd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ht(e) {
  return e.split("-")[1];
}
var Qd = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ep(e, t) {
  var r = e.x,
    a = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Nt(r * o) / o || 0, y: Nt(a * o) / o || 0 };
}
function qo(e) {
  var t,
    r = e.popper,
    a = e.popperRect,
    o = e.placement,
    l = e.variation,
    s = e.offsets,
    u = e.position,
    i = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    f = e.isFixed,
    p = s.x,
    g = p === void 0 ? 0 : p,
    h = s.y,
    b = h === void 0 ? 0 : h,
    A = typeof d == "function" ? d({ x: g, y: b }) : { x: g, y: b };
  (g = A.x), (b = A.y);
  var w = s.hasOwnProperty("x"),
    k = s.hasOwnProperty("y"),
    v = ge,
    E = me,
    y = window;
  if (c) {
    var x = _r(r),
      C = "clientHeight",
      S = "clientWidth";
    if (
      (x === ye(r) &&
        ((x = st(r)),
        rt(x).position !== "static" &&
          u === "absolute" &&
          ((C = "scrollHeight"), (S = "scrollWidth"))),
      (x = x),
      o === me || ((o === ge || o === ke) && l === mr))
    ) {
      E = _e;
      var O = f && x === y && y.visualViewport ? y.visualViewport.height : x[C];
      (b -= O - a.height), (b *= i ? 1 : -1);
    }
    if (o === ge || ((o === me || o === _e) && l === mr)) {
      v = ke;
      var R = f && x === y && y.visualViewport ? y.visualViewport.width : x[S];
      (g -= R - a.width), (g *= i ? 1 : -1);
    }
  }
  var F = Object.assign({ position: u }, c && Qd),
    L = d === !0 ? ep({ x: g, y: b }, ye(r)) : { x: g, y: b };
  if (((g = L.x), (b = L.y), i)) {
    var T;
    return Object.assign(
      {},
      F,
      ((T = {}),
      (T[E] = k ? "0" : ""),
      (T[v] = w ? "0" : ""),
      (T.transform =
        (y.devicePixelRatio || 1) <= 1
          ? "translate(" + g + "px, " + b + "px)"
          : "translate3d(" + g + "px, " + b + "px, 0)"),
      T)
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}),
    (t[E] = k ? b + "px" : ""),
    (t[v] = w ? g + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function tp(e) {
  var t = e.state,
    r = e.options,
    a = r.gpuAcceleration,
    o = a === void 0 ? !0 : a,
    l = r.adaptive,
    s = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    i = u === void 0 ? !0 : u,
    c = {
      placement: Ke(t.placement),
      variation: Ht(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      qo(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: i,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        qo(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: i,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var rp = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: tp,
    data: {},
  },
  $r = { passive: !0 };
function ap(e) {
  var t = e.state,
    r = e.instance,
    a = e.options,
    o = a.scroll,
    l = o === void 0 ? !0 : o,
    s = a.resize,
    u = s === void 0 ? !0 : s,
    i = ye(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      c.forEach(function (d) {
        d.addEventListener("scroll", r.update, $r);
      }),
    u && i.addEventListener("resize", r.update, $r),
    function () {
      l &&
        c.forEach(function (d) {
          d.removeEventListener("scroll", r.update, $r);
        }),
        u && i.removeEventListener("resize", r.update, $r);
    }
  );
}
var np = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: ap,
    data: {},
  },
  op = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return op[t];
  });
}
var lp = { start: "end", end: "start" };
function Uo(e) {
  return e.replace(/start|end/g, function (t) {
    return lp[t];
  });
}
function Mn(e) {
  var t = ye(e),
    r = t.pageXOffset,
    a = t.pageYOffset;
  return { scrollLeft: r, scrollTop: a };
}
function Bn(e) {
  return It(st(e)).left + Mn(e).scrollLeft;
}
function ip(e, t) {
  var r = ye(e),
    a = st(e),
    o = r.visualViewport,
    l = a.clientWidth,
    s = a.clientHeight,
    u = 0,
    i = 0;
  if (o) {
    (l = o.width), (s = o.height);
    var c = pi();
    (c || (!c && t === "fixed")) && ((u = o.offsetLeft), (i = o.offsetTop));
  }
  return { width: l, height: s, x: u + Bn(e), y: i };
}
function sp(e) {
  var t,
    r = st(e),
    a = Mn(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = vt(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = vt(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    u = -a.scrollLeft + Bn(e),
    i = -a.scrollTop;
  return (
    rt(o || r).direction === "rtl" &&
      (u += vt(r.clientWidth, o ? o.clientWidth : 0) - l),
    { width: l, height: s, x: u, y: i }
  );
}
function $n(e) {
  var t = rt(e),
    r = t.overflow,
    a = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + a);
}
function bi(e) {
  return ["html", "body", "#document"].indexOf(Xe(e)) >= 0
    ? e.ownerDocument.body
    : Ce(e) && $n(e)
    ? e
    : bi(pa(e));
}
function lr(e, t) {
  var r;
  t === void 0 && (t = []);
  var a = bi(e),
    o = a === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = ye(a),
    s = o ? [l].concat(l.visualViewport || [], $n(a) ? a : []) : a,
    u = t.concat(s);
  return o ? u : u.concat(lr(pa(s)));
}
function en(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function up(e, t) {
  var r = It(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Wo(e, t, r) {
  return t === ci ? en(ip(e, r)) : St(t) ? up(t, r) : en(sp(st(e)));
}
function cp(e) {
  var t = lr(pa(e)),
    r = ["absolute", "fixed"].indexOf(rt(e).position) >= 0,
    a = r && Ce(e) ? _r(e) : e;
  return St(a)
    ? t.filter(function (o) {
        return St(o) && fi(o, a) && Xe(o) !== "body";
      })
    : [];
}
function dp(e, t, r, a) {
  var o = t === "clippingParents" ? cp(e) : [].concat(t),
    l = [].concat(o, [r]),
    s = l[0],
    u = l.reduce(function (i, c) {
      var d = Wo(e, c, a);
      return (
        (i.top = vt(d.top, i.top)),
        (i.right = Jr(d.right, i.right)),
        (i.bottom = Jr(d.bottom, i.bottom)),
        (i.left = vt(d.left, i.left)),
        i
      );
    }, Wo(e, s, a));
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function yi(e) {
  var t = e.reference,
    r = e.element,
    a = e.placement,
    o = a ? Ke(a) : null,
    l = a ? Ht(a) : null,
    s = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    i;
  switch (o) {
    case me:
      i = { x: s, y: t.y - r.height };
      break;
    case _e:
      i = { x: s, y: t.y + t.height };
      break;
    case ke:
      i = { x: t.x + t.width, y: u };
      break;
    case ge:
      i = { x: t.x - r.width, y: u };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = o ? Ln(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (l) {
      case jt:
        i[c] = i[c] - (t[d] / 2 - r[d] / 2);
        break;
      case mr:
        i[c] = i[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return i;
}
function gr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    a = r.placement,
    o = a === void 0 ? e.placement : a,
    l = r.strategy,
    s = l === void 0 ? e.strategy : l,
    u = r.boundary,
    i = u === void 0 ? Td : u,
    c = r.rootBoundary,
    d = c === void 0 ? ci : c,
    f = r.elementContext,
    p = f === void 0 ? rr : f,
    g = r.altBoundary,
    h = g === void 0 ? !1 : g,
    b = r.padding,
    A = b === void 0 ? 0 : b,
    w = gi(typeof A != "number" ? A : hi(A, Cr)),
    k = p === rr ? Dd : rr,
    v = e.rects.popper,
    E = e.elements[h ? k : p],
    y = dp(St(E) ? E : E.contextElement || st(e.elements.popper), i, d, s),
    x = It(e.elements.reference),
    C = yi({ reference: x, element: v, strategy: "absolute", placement: o }),
    S = en(Object.assign({}, v, C)),
    O = p === rr ? S : x,
    R = {
      top: y.top - O.top + w.top,
      bottom: O.bottom - y.bottom + w.bottom,
      left: y.left - O.left + w.left,
      right: O.right - y.right + w.right,
    },
    F = e.modifiersData.offset;
  if (p === rr && F) {
    var L = F[o];
    Object.keys(R).forEach(function (T) {
      var Z = [ke, _e].indexOf(T) >= 0 ? 1 : -1,
        D = [me, _e].indexOf(T) >= 0 ? "y" : "x";
      R[T] += L[D] * Z;
    });
  }
  return R;
}
function pp(e, t) {
  t === void 0 && (t = {});
  var r = t,
    a = r.placement,
    o = r.boundary,
    l = r.rootBoundary,
    s = r.padding,
    u = r.flipVariations,
    i = r.allowedAutoPlacements,
    c = i === void 0 ? di : i,
    d = Ht(a),
    f = d
      ? u
        ? Vo
        : Vo.filter(function (h) {
            return Ht(h) === d;
          })
      : Cr,
    p = f.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  p.length === 0 && (p = f);
  var g = p.reduce(function (h, b) {
    return (
      (h[b] = gr(e, { placement: b, boundary: o, rootBoundary: l, padding: s })[
        Ke(b)
      ]),
      h
    );
  }, {});
  return Object.keys(g).sort(function (h, b) {
    return g[h] - g[b];
  });
}
function fp(e) {
  if (Ke(e) === da) return [];
  var t = Vr(e);
  return [Uo(e), t, Uo(t)];
}
function mp(e) {
  var t = e.state,
    r = e.options,
    a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (
      var o = r.mainAxis,
        l = o === void 0 ? !0 : o,
        s = r.altAxis,
        u = s === void 0 ? !0 : s,
        i = r.fallbackPlacements,
        c = r.padding,
        d = r.boundary,
        f = r.rootBoundary,
        p = r.altBoundary,
        g = r.flipVariations,
        h = g === void 0 ? !0 : g,
        b = r.allowedAutoPlacements,
        A = t.options.placement,
        w = Ke(A),
        k = w === A,
        v = i || (k || !h ? [Vr(A)] : fp(A)),
        E = [A].concat(v).reduce(function (K, P) {
          return K.concat(
            Ke(P) === da
              ? pp(t, {
                  placement: P,
                  boundary: d,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: b,
                })
              : P
          );
        }, []),
        y = t.rects.reference,
        x = t.rects.popper,
        C = new Map(),
        S = !0,
        O = E[0],
        R = 0;
      R < E.length;
      R++
    ) {
      var F = E[R],
        L = Ke(F),
        T = Ht(F) === jt,
        Z = [me, _e].indexOf(L) >= 0,
        D = Z ? "width" : "height",
        M = gr(t, {
          placement: F,
          boundary: d,
          rootBoundary: f,
          altBoundary: p,
          padding: c,
        }),
        N = Z ? (T ? ke : ge) : T ? _e : me;
      y[D] > x[D] && (N = Vr(N));
      var V = Vr(N),
        $ = [];
      if (
        (l && $.push(M[L] <= 0),
        u && $.push(M[N] <= 0, M[V] <= 0),
        $.every(function (K) {
          return K;
        }))
      ) {
        (O = F), (S = !1);
        break;
      }
      C.set(F, $);
    }
    if (S)
      for (
        var I = h ? 3 : 1,
          Y = function (K) {
            var P = E.find(function (z) {
              var q = C.get(z);
              if (q)
                return q.slice(0, K).every(function (oe) {
                  return oe;
                });
            });
            if (P) return (O = P), "break";
          },
          ee = I;
        ee > 0;
        ee--
      ) {
        var G = Y(ee);
        if (G === "break") break;
      }
    t.placement !== O &&
      ((t.modifiersData[a]._skip = !0), (t.placement = O), (t.reset = !0));
  }
}
var gp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mp,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Go(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function Yo(e) {
  return [me, ke, _e, ge].some(function (t) {
    return e[t] >= 0;
  });
}
function hp(e) {
  var t = e.state,
    r = e.name,
    a = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    s = gr(t, { elementContext: "reference" }),
    u = gr(t, { altBoundary: !0 }),
    i = Go(s, a),
    c = Go(u, o, l),
    d = Yo(i),
    f = Yo(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": f,
    }));
}
var bp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hp,
};
function yp(e, t, r) {
  var a = Ke(e),
    o = [ge, me].indexOf(a) >= 0 ? -1 : 1,
    l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    s = l[0],
    u = l[1];
  return (
    (s = s || 0),
    (u = (u || 0) * o),
    [ge, ke].indexOf(a) >= 0 ? { x: u, y: s } : { x: s, y: u }
  );
}
function vp(e) {
  var t = e.state,
    r = e.options,
    a = e.name,
    o = r.offset,
    l = o === void 0 ? [0, 0] : o,
    s = di.reduce(function (d, f) {
      return (d[f] = yp(f, t.rects, l)), d;
    }, {}),
    u = s[t.placement],
    i = u.x,
    c = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += i),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[a] = s);
}
var Ep = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vp,
};
function xp(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = yi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var Ap = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xp,
  data: {},
};
function wp(e) {
  return e === "x" ? "y" : "x";
}
function Sp(e) {
  var t = e.state,
    r = e.options,
    a = e.name,
    o = r.mainAxis,
    l = o === void 0 ? !0 : o,
    s = r.altAxis,
    u = s === void 0 ? !1 : s,
    i = r.boundary,
    c = r.rootBoundary,
    d = r.altBoundary,
    f = r.padding,
    p = r.tether,
    g = p === void 0 ? !0 : p,
    h = r.tetherOffset,
    b = h === void 0 ? 0 : h,
    A = gr(t, { boundary: i, rootBoundary: c, padding: f, altBoundary: d }),
    w = Ke(t.placement),
    k = Ht(t.placement),
    v = !k,
    E = Ln(w),
    y = wp(E),
    x = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    S = t.rects.popper,
    O =
      typeof b == "function"
        ? b(Object.assign({}, t.rects, { placement: t.placement }))
        : b,
    R =
      typeof O == "number"
        ? { mainAxis: O, altAxis: O }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (x) {
    if (l) {
      var T,
        Z = E === "y" ? me : ge,
        D = E === "y" ? _e : ke,
        M = E === "y" ? "height" : "width",
        N = x[E],
        V = N + A[Z],
        $ = N - A[D],
        I = g ? -S[M] / 2 : 0,
        Y = k === jt ? C[M] : S[M],
        ee = k === jt ? -S[M] : -C[M],
        G = t.elements.arrow,
        K = g && G ? Dn(G) : { width: 0, height: 0 },
        P = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : mi(),
        z = P[Z],
        q = P[D],
        oe = or(0, C[M], K[M]),
        de = v ? C[M] / 2 - I - oe - z - R.mainAxis : Y - oe - z - R.mainAxis,
        Je = v ? -C[M] / 2 + I + oe + q + R.mainAxis : ee + oe + q + R.mainAxis,
        xe = t.elements.arrow && _r(t.elements.arrow),
        Le = xe ? (E === "y" ? xe.clientTop || 0 : xe.clientLeft || 0) : 0,
        B = (T = F == null ? void 0 : F[E]) != null ? T : 0,
        Fe = N + de - B - Le,
        Me = N + Je - B,
        ut = or(g ? Jr(V, Fe) : V, N, g ? vt($, Me) : $);
      (x[E] = ut), (L[E] = ut - N);
    }
    if (u) {
      var Ot,
        Be = E === "x" ? me : ge,
        Rr = E === "x" ? _e : ke,
        pe = x[y],
        ct = y === "y" ? "height" : "width",
        $e = pe + A[Be],
        Rt = pe - A[Rr],
        Pe = [me, ge].indexOf(w) !== -1,
        Ft = (Ot = F == null ? void 0 : F[y]) != null ? Ot : 0,
        Ze = Pe ? $e : pe - C[ct] - S[ct] - Ft + R.altAxis,
        ue = Pe ? pe + C[ct] + S[ct] - Ft - R.altAxis : Rt,
        Te = g && Pe ? Gd(Ze, pe, ue) : or(g ? Ze : $e, pe, g ? ue : Rt);
      (x[y] = Te), (L[y] = Te - pe);
    }
    t.modifiersData[a] = L;
  }
}
var Cp = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sp,
  requiresIfExists: ["offset"],
};
function _p(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function kp(e) {
  return e === ye(e) || !Ce(e) ? Mn(e) : _p(e);
}
function Op(e) {
  var t = e.getBoundingClientRect(),
    r = Nt(t.width) / e.offsetWidth || 1,
    a = Nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Rp(e, t, r) {
  r === void 0 && (r = !1);
  var a = Ce(t),
    o = Ce(t) && Op(t),
    l = st(t),
    s = It(e, o, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    i = { x: 0, y: 0 };
  return (
    (a || (!a && !r)) &&
      ((Xe(t) !== "body" || $n(l)) && (u = kp(t)),
      Ce(t)
        ? ((i = It(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop))
        : l && (i.x = Bn(l))),
    {
      x: s.left + u.scrollLeft - i.x,
      y: s.top + u.scrollTop - i.y,
      width: s.width,
      height: s.height,
    }
  );
}
function Fp(e) {
  var t = new Map(),
    r = new Set(),
    a = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function o(l) {
    r.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function (u) {
      if (!r.has(u)) {
        var i = t.get(u);
        i && o(i);
      }
    }),
      a.push(l);
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || o(l);
    }),
    a
  );
}
function Tp(e) {
  var t = Fp(e);
  return Hd.reduce(function (r, a) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === a;
      })
    );
  }, []);
}
function Dp(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function Lp(e) {
  var t = e.reduce(function (r, a) {
    var o = r[a.name];
    return (
      (r[a.name] = o
        ? Object.assign({}, o, a, {
            options: Object.assign({}, o.options, a.options),
            data: Object.assign({}, o.data, a.data),
          })
        : a),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Ko = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Mp(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    a = r === void 0 ? [] : r,
    o = t.defaultOptions,
    l = o === void 0 ? Ko : o;
  return function (s, u, i) {
    i === void 0 && (i = l);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ko, l),
        modifiersData: {},
        elements: { reference: s, popper: u },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (b) {
          var A = typeof b == "function" ? b(c.options) : b;
          h(),
            (c.options = Object.assign({}, l, c.options, A)),
            (c.scrollParents = {
              reference: St(s)
                ? lr(s)
                : s.contextElement
                ? lr(s.contextElement)
                : [],
              popper: lr(u),
            });
          var w = Tp(Lp([].concat(a, c.options.modifiers)));
          return (
            (c.orderedModifiers = w.filter(function (k) {
              return k.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = c.elements,
              A = b.reference,
              w = b.popper;
            if (Xo(A, w)) {
              (c.rects = {
                reference: Rp(A, _r(w), c.options.strategy === "fixed"),
                popper: Dn(w),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (S) {
                  return (c.modifiersData[S.name] = Object.assign({}, S.data));
                });
              for (var k = 0; k < c.orderedModifiers.length; k++) {
                if (c.reset === !0) {
                  (c.reset = !1), (k = -1);
                  continue;
                }
                var v = c.orderedModifiers[k],
                  E = v.fn,
                  y = v.options,
                  x = y === void 0 ? {} : y,
                  C = v.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: x, name: C, instance: p }) || c);
              }
            }
          }
        },
        update: Dp(function () {
          return new Promise(function (b) {
            p.forceUpdate(), b(c);
          });
        }),
        destroy: function () {
          h(), (f = !0);
        },
      };
    if (!Xo(s, u)) return p;
    p.setOptions(i).then(function (b) {
      !f && i.onFirstUpdate && i.onFirstUpdate(b);
    });
    function g() {
      c.orderedModifiers.forEach(function (b) {
        var A = b.name,
          w = b.options,
          k = w === void 0 ? {} : w,
          v = b.effect;
        if (typeof v == "function") {
          var E = v({ state: c, name: A, instance: p, options: k }),
            y = function () {};
          d.push(E || y);
        }
      });
    }
    function h() {
      d.forEach(function (b) {
        return b();
      }),
        (d = []);
    }
    return p;
  };
}
var Bp = [np, Ap, rp, qd, Ep, gp, Cp, Jd, bp],
  $p = Mp({ defaultModifiers: Bp }),
  Pp = ve(Rd()),
  Zp = [],
  jp = function (e, t, r) {
    r === void 0 && (r = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || Zp,
      },
      l = m.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = l[0],
      u = l[1],
      i = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (f) {
            var p = f.state,
              g = Object.keys(p.elements);
            fl.flushSync(function () {
              u({
                styles: Io(
                  g.map(function (h) {
                    return [h, p.styles[h] || {}];
                  })
                ),
                attributes: Io(
                  g.map(function (h) {
                    return [h, p.attributes[h]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      c = m.useMemo(
        function () {
          var f = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [
              i,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return (0, Pp.default)(a.current, f)
            ? a.current || f
            : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, i]
      ),
      d = m.useRef();
    return (
      Ho(
        function () {
          d.current && d.current.setOptions(c);
        },
        [c]
      ),
      Ho(
        function () {
          if (!(e == null || t == null)) {
            var f = r.createPopper || $p,
              p = f(e, t, c);
            return (
              (d.current = p),
              function () {
                p.destroy(), (d.current = null);
              }
            );
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  };
function Ei(e) {
  var t = m.useRef(e);
  return (
    (t.current = e),
    m.useCallback(function () {
      return t.current;
    }, [])
  );
}
var Np = function () {};
function Ip(e) {
  var t = e.initial,
    r = e.value,
    a = e.onChange,
    o = a === void 0 ? Np : a;
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  var l = m.useState(t),
    s = l[0],
    u = l[1],
    i = Ei(s),
    c = m.useCallback(
      function (f) {
        var p = i(),
          g = typeof f == "function" ? f(p) : f;
        typeof g.persist == "function" && g.persist(),
          u(g),
          typeof o == "function" && o(g);
      },
      [i, o]
    ),
    d = r !== void 0;
  return [d ? r : s, d ? o : c];
}
function xi(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var Hp = ["styles", "attributes"],
  Jo = { getBoundingClientRect: xi() },
  Qo = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: "hover",
  };
function Vp(e, t) {
  var r, a, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(Qo).reduce(function (D, M) {
      var N;
      return et({}, D, ((N = {}), (N[M] = D[M] !== void 0 ? D[M] : Qo[M]), N));
    }, e),
    s = m.useMemo(
      function () {
        return [{ name: "offset", options: { offset: l.offset } }];
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = et({}, t, {
      placement: t.placement || l.placement,
      modifiers: t.modifiers || s,
    }),
    i = m.useState(null),
    c = i[0],
    d = i[1],
    f = m.useState(null),
    p = f[0],
    g = f[1],
    h = Ip({
      initial: l.defaultVisible,
      value: l.visible,
      onChange: l.onVisibleChange,
    }),
    b = h[0],
    A = h[1],
    w = m.useRef();
  m.useEffect(function () {
    return function () {
      return clearTimeout(w.current);
    };
  }, []);
  var k = jp(l.followCursor ? Jo : c, p, u),
    v = k.styles,
    E = k.attributes,
    y = Fd(k, Hp),
    x = y.update,
    C = Ei({ visible: b, triggerRef: c, tooltipRef: p, finalConfig: l }),
    S = m.useCallback(
      function (D) {
        return Array.isArray(l.trigger)
          ? l.trigger.includes(D)
          : l.trigger === D;
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger]
    ),
    O = m.useCallback(
      function () {
        clearTimeout(w.current),
          (w.current = window.setTimeout(function () {
            return A(!1);
          }, l.delayHide));
      },
      [l.delayHide, A]
    ),
    R = m.useCallback(
      function () {
        clearTimeout(w.current),
          (w.current = window.setTimeout(function () {
            return A(!0);
          }, l.delayShow));
      },
      [l.delayShow, A]
    ),
    F = m.useCallback(
      function () {
        C().visible ? O() : R();
      },
      [C, O, R]
    );
  m.useEffect(
    function () {
      if (C().finalConfig.closeOnOutsideClick) {
        var D = function (M) {
          var N,
            V = C(),
            $ = V.tooltipRef,
            I = V.triggerRef,
            Y =
              (M.composedPath == null || (N = M.composedPath()) == null
                ? void 0
                : N[0]) || M.target;
          Y instanceof Node &&
            $ != null &&
            I != null &&
            !$.contains(Y) &&
            !I.contains(Y) &&
            O();
        };
        return (
          document.addEventListener("mousedown", D),
          function () {
            return document.removeEventListener("mousedown", D);
          }
        );
      }
    },
    [C, O]
  ),
    m.useEffect(
      function () {
        if (!(c == null || !S("click")))
          return (
            c.addEventListener("click", F),
            function () {
              return c.removeEventListener("click", F);
            }
          );
      },
      [c, S, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !S("double-click")))
          return (
            c.addEventListener("dblclick", F),
            function () {
              return c.removeEventListener("dblclick", F);
            }
          );
      },
      [c, S, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !S("right-click"))) {
          var D = function (M) {
            M.preventDefault(), F();
          };
          return (
            c.addEventListener("contextmenu", D),
            function () {
              return c.removeEventListener("contextmenu", D);
            }
          );
        }
      },
      [c, S, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !S("focus")))
          return (
            c.addEventListener("focus", R),
            c.addEventListener("blur", O),
            function () {
              c.removeEventListener("focus", R),
                c.removeEventListener("blur", O);
            }
          );
      },
      [c, S, R, O]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !S("hover")))
          return (
            c.addEventListener("mouseenter", R),
            c.addEventListener("mouseleave", O),
            function () {
              c.removeEventListener("mouseenter", R),
                c.removeEventListener("mouseleave", O);
            }
          );
      },
      [c, S, R, O]
    ),
    m.useEffect(
      function () {
        if (!(p == null || !S("hover") || !C().finalConfig.interactive))
          return (
            p.addEventListener("mouseenter", R),
            p.addEventListener("mouseleave", O),
            function () {
              p.removeEventListener("mouseenter", R),
                p.removeEventListener("mouseleave", O);
            }
          );
      },
      [p, S, R, O, C]
    );
  var L =
    y == null ||
    (r = y.state) == null ||
    (a = r.modifiersData) == null ||
    (o = a.hide) == null
      ? void 0
      : o.isReferenceHidden;
  m.useEffect(
    function () {
      l.closeOnTriggerHidden && L && O();
    },
    [l.closeOnTriggerHidden, O, L]
  ),
    m.useEffect(
      function () {
        if (!l.followCursor || c == null) return;
        function D(M) {
          var N = M.clientX,
            V = M.clientY;
          (Jo.getBoundingClientRect = xi(N, V)), x == null || x();
        }
        return (
          c.addEventListener("mousemove", D),
          function () {
            return c.removeEventListener("mousemove", D);
          }
        );
      },
      [l.followCursor, c, x]
    ),
    m.useEffect(
      function () {
        if (!(p == null || x == null || l.mutationObserverOptions == null)) {
          var D = new MutationObserver(x);
          return (
            D.observe(p, l.mutationObserverOptions),
            function () {
              return D.disconnect();
            }
          );
        }
      },
      [l.mutationObserverOptions, p, x]
    );
  var T = function (D) {
      return (
        D === void 0 && (D = {}),
        et({}, D, { style: et({}, D.style, v.popper) }, E.popper, {
          "data-popper-interactive": l.interactive,
        })
      );
    },
    Z = function (D) {
      return (
        D === void 0 && (D = {}),
        et({}, D, E.arrow, {
          style: et({}, D.style, v.arrow),
          "data-popper-arrow": !0,
        })
      );
    };
  return et(
    {
      getArrowProps: Z,
      getTooltipProps: T,
      setTooltipRef: g,
      setTriggerRef: d,
      tooltipRef: p,
      triggerRef: c,
      visible: b,
    },
    y
  );
}
var Ae = Ct(1e3)((e, t, r, a = 0) => (t.split("-")[0] === e ? r : a)),
  ot = 8,
  zp = _.div(
    { position: "absolute", borderStyle: "solid" },
    ({ placement: e }) => {
      let t = 0,
        r = 0;
      switch (!0) {
        case e.startsWith("left") || e.startsWith("right"): {
          r = 8;
          break;
        }
        case e.startsWith("top") || e.startsWith("bottom"): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${Ae("top", r, `${ot * -1}px`, "auto")}`,
      top: `${Ae("bottom", r, `${ot * -1}px`, "auto")}`,
      right: `${Ae("left", r, `${ot * -1}px`, "auto")}`,
      left: `${Ae("right", r, `${ot * -1}px`, "auto")}`,
      borderBottomWidth: `${Ae("top", r, "0", ot)}px`,
      borderTopWidth: `${Ae("bottom", r, "0", ot)}px`,
      borderRightWidth: `${Ae("left", r, "0", ot)}px`,
      borderLeftWidth: `${Ae("right", r, "0", ot)}px`,
      borderTopColor: Ae(
        "top",
        r,
        e.color[t] || t || e.base === "light"
          ? nr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderBottomColor: Ae(
        "bottom",
        r,
        e.color[t] || t || e.base === "light"
          ? nr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderLeftColor: Ae(
        "left",
        r,
        e.color[t] || t || e.base === "light"
          ? nr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderRightColor: Ae(
        "right",
        r,
        e.color[t] || t || e.base === "light"
          ? nr(e.background.app)
          : e.background.app,
        "transparent"
      ),
    })
  ),
  qp = _.div(
    ({ hidden: e }) => ({
      display: e ? "none" : "inline-block",
      zIndex: 2147483647,
    }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === "light"
                ? nr(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {}
  ),
  Pn = n.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: a,
        tooltipRef: o,
        color: l,
        withArrows: s,
        ...u
      },
      i
    ) =>
      n.createElement(
        qp,
        { "data-testid": "tooltip", hasChrome: t, ref: i, ...u, color: l },
        t && s && n.createElement(zp, { placement: e, ...a, color: l }),
        r
      )
  );
Pn.displayName = "Tooltip";
Pn.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {},
};
var { document: zr } = Od,
  Up = _.div`
  display: inline-block;
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  Wp = _.g`
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  Ai = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: a,
    hasChrome: o,
    withArrows: l,
    offset: s,
    tooltip: u,
    children: i,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: f,
    tooltipShown: p,
    onVisibilityChange: g,
    defaultVisible: h,
    delayHide: b,
    visible: A,
    interactive: w,
    delayShow: k,
    modifiers: v,
    strategy: E,
    followCursor: y,
    onVisibleChange: x,
    ...C
  }) => {
    let S = e ? Wp : Up,
      {
        getArrowProps: O,
        getTooltipProps: R,
        setTooltipRef: F,
        setTriggerRef: L,
        visible: T,
        state: Z,
      } = Vp(
        {
          trigger: t,
          placement: a,
          defaultVisible: h ?? p,
          delayHide: b,
          interactive: w,
          closeOnOutsideClick: r ?? f,
          closeOnTriggerHidden: c,
          onVisibleChange: (M) => {
            g == null || g(M), x == null || x(M);
          },
          delayShow: k,
          followCursor: y,
          mutationObserverOptions: d,
          visible: A,
          offset: s,
        },
        { modifiers: v, strategy: E }
      ),
      D = n.createElement(
        Pn,
        {
          placement: Z == null ? void 0 : Z.placement,
          ref: F,
          hasChrome: o,
          arrowProps: O(),
          withArrows: l,
          ...R(),
        },
        typeof u == "function" ? u({ onHide: () => x(!1) }) : u
      );
    return n.createElement(
      n.Fragment,
      null,
      n.createElement(S, { trigger: t, ref: L, ...C }, i),
      T && $s.createPortal(D, zr.body)
    );
  };
Ai.defaultProps = {
  svg: !1,
  trigger: "click",
  closeOnOutsideClick: !1,
  placement: "top",
  modifiers: [
    { name: "preventOverflow", options: { padding: 8 } },
    { name: "offset", options: { offset: [8, 8] } },
    { name: "arrow", options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var Gp = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
    let [a, o] = m.useState(e),
      l = m.useCallback(
        (s) => {
          (t && t(s) === !1) || o(s);
        },
        [t]
      );
    return (
      m.useEffect(() => {
        let s = () => l(!1);
        zr.addEventListener("keydown", s, !1);
        let u = Array.from(zr.getElementsByTagName("iframe")),
          i = [];
        return (
          u.forEach((c) => {
            let d = () => {
              try {
                c.contentWindow.document &&
                  (c.contentWindow.document.addEventListener("click", s),
                  i.push(() => {
                    try {
                      c.contentWindow.document.removeEventListener("click", s);
                    } catch {}
                  }));
              } catch {}
            };
            d(),
              c.addEventListener("load", d),
              i.push(() => {
                c.removeEventListener("load", d);
              });
          }),
          () => {
            zr.removeEventListener("keydown", s),
              i.forEach((c) => {
                c();
              });
          }
        );
      }),
      n.createElement(Ai, { ...r, visible: a, onVisibleChange: l })
    );
  },
  Yp = Object.create,
  wi = Object.defineProperty,
  Kp = Object.getOwnPropertyDescriptor,
  Xp = Object.getOwnPropertyNames,
  Jp = Object.getPrototypeOf,
  Qp = Object.prototype.hasOwnProperty,
  e5 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  t5 = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Xp(t))
        !Qp.call(e, o) &&
          o !== r &&
          wi(e, o, {
            get: () => t[o],
            enumerable: !(a = Kp(t, o)) || a.enumerable,
          });
    return e;
  },
  r5 = (e, t, r) => (
    (r = e != null ? Yp(Jp(e)) : {}),
    t5(
      t || !e || !e.__esModule
        ? wi(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  a5 = e5((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isEqual = (function () {
        var t = Object.prototype.toString,
          r = Object.getPrototypeOf,
          a = Object.getOwnPropertySymbols
            ? function (o) {
                return Object.keys(o).concat(Object.getOwnPropertySymbols(o));
              }
            : Object.keys;
        return function (o, l) {
          return (function s(u, i, c) {
            var d,
              f,
              p,
              g = t.call(u),
              h = t.call(i);
            if (u === i) return !0;
            if (u == null || i == null) return !1;
            if (c.indexOf(u) > -1 && c.indexOf(i) > -1) return !0;
            if (
              (c.push(u, i),
              g != h ||
                ((d = a(u)),
                (f = a(i)),
                d.length != f.length ||
                  d.some(function (b) {
                    return !s(u[b], i[b], c);
                  })))
            )
              return !1;
            switch (g.slice(8, -1)) {
              case "Symbol":
                return u.valueOf() == i.valueOf();
              case "Date":
              case "Number":
                return +u == +i || (+u != +u && +i != +i);
              case "RegExp":
              case "Function":
              case "String":
              case "Boolean":
                return "" + u == "" + i;
              case "Set":
              case "Map":
                (d = u.entries()), (f = i.entries());
                do if (!s((p = d.next()).value, f.next().value, c)) return !1;
                while (!p.done);
                return !0;
              case "ArrayBuffer":
                (u = new Uint8Array(u)), (i = new Uint8Array(i));
              case "DataView":
                (u = new Uint8Array(u.buffer)), (i = new Uint8Array(i.buffer));
              case "Float32Array":
              case "Float64Array":
              case "Int8Array":
              case "Int16Array":
              case "Int32Array":
              case "Uint8Array":
              case "Uint16Array":
              case "Uint32Array":
              case "Uint8ClampedArray":
              case "Arguments":
              case "Array":
                if (u.length != i.length) return !1;
                for (p = 0; p < u.length; p++)
                  if (
                    (p in u || p in i) &&
                    (p in u != p in i || !s(u[p], i[p], c))
                  )
                    return !1;
                return !0;
              case "Object":
                return s(r(u), r(i), c);
              default:
                return !1;
            }
          })(o, l, []);
        };
      })());
  });
r5(a5());
var Si = (e) =>
  e
    .toLowerCase()
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
const { global: n5 } = __STORYBOOK_MODULE_GLOBAL__;
var X = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return (
    delete e.class,
    (e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" ")),
    e
  );
};
function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    hr.apply(this, arguments)
  );
}
function o5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function br(e, t) {
  return (
    (br = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    br(e, t)
  );
}
function l5(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    br(e, t);
}
function tn(e) {
  return (
    (tn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    tn(e)
  );
}
function i5(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function s5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function qr(e, t, r) {
  return (
    s5()
      ? (qr = Reflect.construct.bind())
      : (qr = function (a, o, l) {
          var s = [null];
          s.push.apply(s, o);
          var u = Function.bind.apply(a, s),
            i = new u();
          return l && br(i, l.prototype), i;
        }),
    qr.apply(null, arguments)
  );
}
function rn(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (rn = function (r) {
      if (r === null || !i5(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, a);
      }
      function a() {
        return qr(r, arguments, tn(this).constructor);
      }
      return (
        (a.prototype = Object.create(r.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        br(a, r)
      );
    }),
    rn(e)
  );
}
var We = (function (e) {
  l5(t, e);
  function t(r) {
    var a;
    return (
      (a =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information."
        ) || this),
      o5(a)
    );
  }
  return t;
})(rn(Error));
function La(e) {
  return Math.round(e * 255);
}
function u5(e, t, r) {
  return La(e) + "," + La(t) + "," + La(r);
}
function yr(e, t, r, a) {
  if ((a === void 0 && (a = u5), t === 0)) return a(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    s = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    i = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (i = s))
    : o >= 1 && o < 2
    ? ((u = s), (i = l))
    : o >= 2 && o < 3
    ? ((i = l), (c = s))
    : o >= 3 && o < 4
    ? ((i = s), (c = l))
    : o >= 4 && o < 5
    ? ((u = s), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = s));
  var d = r - l / 2,
    f = u + d,
    p = i + d,
    g = c + d;
  return a(f, p, g);
}
var el = {
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
function c5(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return el[t] ? "#" + el[t] : e;
}
var d5 = /^#[a-fA-F0-9]{6}$/,
  p5 = /^#[a-fA-F0-9]{8}$/,
  f5 = /^#[a-fA-F0-9]{3}$/,
  m5 = /^#[a-fA-F0-9]{4}$/,
  Ma = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  g5 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  h5 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  b5 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Zn(e) {
  if (typeof e != "string") throw new We(3);
  var t = c5(e);
  if (t.match(d5))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(p5)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(f5))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(m5)) {
    var a = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: a,
    };
  }
  var o = Ma.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
    };
  var l = g5.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha:
        parseFloat("" + l[4]) > 1
          ? parseFloat("" + l[4]) / 100
          : parseFloat("" + l[4]),
    };
  var s = h5.exec(t);
  if (s) {
    var u = parseInt("" + s[1], 10),
      i = parseInt("" + s[2], 10) / 100,
      c = parseInt("" + s[3], 10) / 100,
      d = "rgb(" + yr(u, i, c) + ")",
      f = Ma.exec(d);
    if (!f) throw new We(4, t, d);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10),
    };
  }
  var p = b5.exec(t.substring(0, 50));
  if (p) {
    var g = parseInt("" + p[1], 10),
      h = parseInt("" + p[2], 10) / 100,
      b = parseInt("" + p[3], 10) / 100,
      A = "rgb(" + yr(g, h, b) + ")",
      w = Ma.exec(A);
    if (!w) throw new We(4, t, A);
    return {
      red: parseInt("" + w[1], 10),
      green: parseInt("" + w[2], 10),
      blue: parseInt("" + w[3], 10),
      alpha:
        parseFloat("" + p[4]) > 1
          ? parseFloat("" + p[4]) / 100
          : parseFloat("" + p[4]),
    };
  }
  throw new We(5);
}
function y5(e) {
  var t = e.red / 255,
    r = e.green / 255,
    a = e.blue / 255,
    o = Math.max(t, r, a),
    l = Math.min(t, r, a),
    s = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: s };
  var u,
    i = o - l,
    c = s > 0.5 ? i / (2 - o - l) : i / (o + l);
  switch (o) {
    case t:
      u = (r - a) / i + (r < a ? 6 : 0);
      break;
    case r:
      u = (a - t) / i + 2;
      break;
    default:
      u = (t - r) / i + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: s, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: s }
  );
}
function Ci(e) {
  return y5(Zn(e));
}
var v5 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  an = v5;
function gt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Ba(e) {
  return gt(Math.round(e * 255));
}
function E5(e, t, r) {
  return an("#" + Ba(e) + Ba(t) + Ba(r));
}
function Qr(e, t, r) {
  return yr(e, t, r, E5);
}
function x5(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Qr(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Qr(e.hue, e.saturation, e.lightness);
  throw new We(1);
}
function A5(e, t, r, a) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof a == "number"
  )
    return a >= 1 ? Qr(e, t, r) : "rgba(" + yr(e, t, r) + "," + a + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
    return e.alpha >= 1
      ? Qr(e.hue, e.saturation, e.lightness)
      : "rgba(" + yr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new We(2);
}
function nn(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return an("#" + gt(e) + gt(t) + gt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return an("#" + gt(e.red) + gt(e.green) + gt(e.blue));
  throw new We(6);
}
function tt(e, t, r, a) {
  if (typeof e == "string" && typeof t == "number") {
    var o = Zn(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof a == "number"
    )
      return a >= 1
        ? nn(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + a + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
      return e.alpha >= 1
        ? nn(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new We(7);
}
var w5 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  S5 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  C5 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  _5 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function _i(e) {
  if (typeof e != "object") throw new We(8);
  if (S5(e)) return tt(e);
  if (w5(e)) return nn(e);
  if (_5(e)) return A5(e);
  if (C5(e)) return x5(e);
  throw new We(8);
}
function ki(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : ki(e, t, a);
  };
}
function jn(e) {
  return ki(e, e.length, []);
}
function Nn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function k5(e, t) {
  if (t === "transparent") return t;
  var r = Ci(t);
  return _i(hr({}, r, { lightness: Nn(0, 1, r.lightness - parseFloat(e)) }));
}
var O5 = jn(k5),
  Lt = O5;
function R5(e, t) {
  if (t === "transparent") return t;
  var r = Ci(t);
  return _i(hr({}, r, { lightness: Nn(0, 1, r.lightness + parseFloat(e)) }));
}
var F5 = jn(R5),
  T5 = F5;
function D5(e, t) {
  if (t === "transparent") return t;
  var r = Zn(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = hr({}, r, {
      alpha: Nn(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return tt(o);
}
var L5 = jn(D5),
  fe = L5,
  Wt = ({ theme: e }) => ({
    margin: "20px 0 8px",
    padding: 0,
    cursor: "text",
    position: "relative",
    color: e.color.defaultText,
    "&:first-of-type": { marginTop: 0, paddingTop: 0 },
    "&:hover a.anchor": { textDecoration: "none" },
    "& tt, & code": { fontSize: "inherit" },
  }),
  nt = ({ theme: e }) => ({
    lineHeight: 1,
    margin: "0 2px",
    padding: "3px 5px",
    whiteSpace: "nowrap",
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === "light"
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === "light"
        ? fe(0.1, e.color.defaultText)
        : fe(0.3, e.color.defaultText),
    backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
  }),
  Q = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  }),
  kt = { margin: "16px 0" },
  M5 = ({ href: e, children: t, ...r }) => {
    let a = /^\//.test(e),
      o = /^#.*/.test(e),
      l = a ? `./?path=${e}` : e;
    return n.createElement(
      "a",
      { href: l, target: o ? "_self" : "_top", ...r },
      t
    );
  },
  Oi = _(M5)(Q, ({ theme: e }) => ({
    fontSize: "inherit",
    lineHeight: "24px",
    color: e.color.secondary,
    textDecoration: "none",
    "&.absent": { color: "#cc0000" },
    "&.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
  })),
  Ri = _.blockquote(Q, kt, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: "0 15px",
    color: e.color.dark,
    "& > :first-of-type": { marginTop: 0 },
    "& > :last-child": { marginBottom: 0 },
  })),
  B5 = (e) => typeof e == "string",
  $5 = /[\n\r]/g,
  P5 = _.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    }),
    nt
  ),
  Z5 = _(Fn)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  Fi = ({ className: e, children: t, ...r }) => {
    let a = (e || "").match(/lang-(\S+)/),
      o = m.Children.toArray(t);
    return o.filter(B5).some((l) => l.match($5))
      ? n.createElement(
          Z5,
          {
            bordered: !0,
            copyable: !0,
            language: (a == null ? void 0 : a[1]) ?? "plaintext",
            format: !1,
            ...r,
          },
          t
        )
      : n.createElement(P5, { ...r, className: e }, o);
  },
  Ti = _.div(Q),
  Di = _.dl(Q, {
    ...kt,
    padding: 0,
    "& dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      padding: 0,
      margin: "16px 0 4px",
    },
    "& dt:first-of-type": { padding: 0 },
    "& dt > :first-of-type": { marginTop: 0 },
    "& dt > :last-child": { marginBottom: 0 },
    "& dd": { margin: "0 0 16px", padding: "0 15px" },
    "& dd > :first-of-type": { marginTop: 0 },
    "& dd > :last-child": { marginBottom: 0 },
  }),
  Li = _.h1(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  In = _.h2(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  Mi = _.h3(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`,
  })),
  Bi = _.h4(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`,
  })),
  $i = _.h5(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
  })),
  Pi = _.h6(Q, Wt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  Zi = _.hr(({ theme: e }) => ({
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  ji = _.img({ maxWidth: "100%" }),
  Ni = _.li(Q, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: "24px",
    "& + li": { marginTop: ".25em" },
    "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
    "& code": nt({ theme: e }),
  })),
  j5 = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  Ii = _.ol(Q, kt, { ...j5, listStyle: "decimal" }),
  Hi = _.p(Q, kt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    color: e.color.defaultText,
    "& code": nt({ theme: e }),
  })),
  Vi = _.pre(Q, kt, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
    "&:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "& pre, &.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
      code: { color: "inherit", fontSize: "inherit" },
    },
    "& code": { whiteSpace: "pre" },
    "& code, & tt": { border: "none" },
  })),
  zi = _.span(Q, ({ theme: e }) => ({
    "&.frame": {
      display: "block",
      overflow: "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "&.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "&.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "&.float-left": {
      display: "block",
      marginRight: 13,
      overflow: "hidden",
      float: "left",
      "& span": { margin: "13px 0 0" },
    },
    "&.float-right": {
      display: "block",
      marginLeft: 13,
      overflow: "hidden",
      float: "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
  })),
  qi = _.table(Q, kt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0,
    },
    "& tr:nth-of-type(2n)": {
      backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
    },
    "& tr th": {
      fontWeight: "bold",
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr td": {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
    "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
  })),
  Ui = _.title(nt),
  N5 = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  Wi = _.ul(Q, kt, { ...N5, listStyle: "disc" }),
  Gi = _.div(Q),
  Yi = {
    h1: (e) => n.createElement(Li, { ...X(e, "h1") }),
    h2: (e) => n.createElement(In, { ...X(e, "h2") }),
    h3: (e) => n.createElement(Mi, { ...X(e, "h3") }),
    h4: (e) => n.createElement(Bi, { ...X(e, "h4") }),
    h5: (e) => n.createElement($i, { ...X(e, "h5") }),
    h6: (e) => n.createElement(Pi, { ...X(e, "h6") }),
    pre: (e) => n.createElement(Vi, { ...X(e, "pre") }),
    a: (e) => n.createElement(Oi, { ...X(e, "a") }),
    hr: (e) => n.createElement(Zi, { ...X(e, "hr") }),
    dl: (e) => n.createElement(Di, { ...X(e, "dl") }),
    blockquote: (e) => n.createElement(Ri, { ...X(e, "blockquote") }),
    table: (e) => n.createElement(qi, { ...X(e, "table") }),
    img: (e) => n.createElement(ji, { ...X(e, "img") }),
    div: (e) => n.createElement(Ti, { ...X(e, "div") }),
    span: (e) => n.createElement(zi, { ...X(e, "span") }),
    li: (e) => n.createElement(Ni, { ...X(e, "li") }),
    ul: (e) => n.createElement(Wi, { ...X(e, "ul") }),
    ol: (e) => n.createElement(Ii, { ...X(e, "ol") }),
    p: (e) => n.createElement(Hi, { ...X(e, "p") }),
    code: (e) => n.createElement(Fi, { ...X(e, "code") }),
    tt: (e) => n.createElement(Ui, { ...X(e, "tt") }),
    resetwrapper: (e) => n.createElement(Gi, { ...X(e, "resetwrapper") }),
  },
  I5 = _.div(
    ({ theme: e }) => ({
      display: "inline-block",
      fontSize: 11,
      lineHeight: "12px",
      alignSelf: "center",
      padding: "4px 12px",
      borderRadius: "3em",
      fontWeight: e.typography.weight.bold,
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: { fill: "currentColor" },
      },
    },
    ({ theme: e, status: t }) => {
      switch (t) {
        case "critical":
          return { color: e.color.critical, background: e.background.critical };
        case "negative":
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${fe(0.9, e.color.negativeText)}`
                : "none",
          };
        case "warning":
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${fe(0.9, e.color.warningText)}`
                : "none",
          };
        case "neutral":
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${fe(0.9, e.color.dark)}`
                : "none",
          };
        case "positive":
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${fe(0.9, e.color.positiveText)}`
                : "none",
          };
        default:
          return {};
      }
    }
  ),
  H5 = ({ ...e }) => n.createElement(I5, { ...e }),
  vr = {
    user: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z",
      })
    ),
    useralt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z",
      })
    ),
    useradd: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    users: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z",
      }),
      n.createElement("path", {
        d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z",
      })
    ),
    profile: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z",
      })
    ),
    facehappy: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    faceneutral: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    facesad: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    accessibility: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      }),
      n.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    accessibilityalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      })
    ),
    arrowup: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowdown: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z",
      })
    ),
    arrowleft: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z",
      })
    ),
    arrowright: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
      })
    ),
    arrowupalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z",
      })
    ),
    arrowdownalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z",
      })
    ),
    arrowleftalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowrightalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    expandalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z",
      })
    ),
    collapse: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z",
      })
    ),
    expand: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z",
      })
    ),
    unfold: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z",
      }),
      n.createElement("path", {
        d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z",
      }),
      n.createElement("path", {
        d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
      })
    ),
    transfer: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z",
      })
    ),
    redirect: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    undo: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z",
      })
    ),
    reply: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z",
      })
    ),
    sync: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z",
      })
    ),
    upload: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    download: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z",
      })
    ),
    back: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z",
      })
    ),
    proceed: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z",
      })
    ),
    refresh: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z",
      })
    ),
    globe: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z",
      })
    ),
    compass: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    location: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z",
      })
    ),
    pin: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z",
      })
    ),
    time: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    dashboard: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z",
      })
    ),
    timer: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z",
      })
    ),
    home: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z",
      })
    ),
    admin: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z",
      }),
      n.createElement("path", {
        d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z",
      })
    ),
    info: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    question: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    support: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      })
    ),
    alert: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z",
      })
    ),
    email: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z",
      })
    ),
    phone: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z",
      })
    ),
    link: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z",
      }),
      n.createElement("path", {
        d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z",
      })
    ),
    unlink: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    bell: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z",
      })
    ),
    rss: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      })
    ),
    sharealt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z",
      }),
      n.createElement("path", {
        d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z",
      })
    ),
    share: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      n.createElement("path", {
        d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z",
      })
    ),
    circlehollow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z",
      })
    ),
    circle: n.createElement("path", {
      d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z",
    }),
    bookmarkhollow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z",
      })
    ),
    bookmark: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z",
      })
    ),
    hearthollow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2",
      })
    ),
    heart: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z",
      })
    ),
    starhollow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z",
      })
    ),
    star: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z",
      })
    ),
    certificate: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z",
      })
    ),
    verified: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    thumbsup: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    shield: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z",
      })
    ),
    basket: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z",
      }),
      n.createElement("path", {
        d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z",
      }),
      n.createElement("path", {
        d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z",
      })
    ),
    beaker: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z",
      })
    ),
    hourglass: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z",
      })
    ),
    flag: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    cloudhollow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z",
      })
    ),
    cloud: n.createElement("path", {
      d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z",
    }),
    edit: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z",
      })
    ),
    cog: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z",
        fill: "#333",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z",
      })
    ),
    nut: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z",
      })
    ),
    wrench: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    ellipsis: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
      })
    ),
    check: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z",
      })
    ),
    form: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z",
      }),
      n.createElement("path", {
        d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z",
      })
    ),
    batchdeny: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    batchaccept: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    controls: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z",
      })
    ),
    plus: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z",
      })
    ),
    closeAlt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z",
      })
    ),
    cross: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z",
      })
    ),
    trash: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z",
      })
    ),
    pinalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z",
      })
    ),
    unpin: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    add: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    subtract: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    close: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    delete: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z",
      })
    ),
    passed: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    changed: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      })
    ),
    failed: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      })
    ),
    clear: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    comment: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z",
      })
    ),
    commentadd: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    requestchange: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    comments: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z",
      })
    ),
    lock: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z",
      })
    ),
    unlock: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z",
      })
    ),
    key: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z",
      })
    ),
    outbox: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z",
      }),
      n.createElement("path", {
        d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z",
      })
    ),
    credit: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z",
      })
    ),
    button: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z",
      }),
      n.createElement("path", {
        d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z",
      })
    ),
    type: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z",
      })
    ),
    pointerdefault: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z",
      })
    ),
    pointerhand: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z",
      })
    ),
    browser: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    tablet: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z",
      })
    ),
    mobile: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z",
      })
    ),
    watch: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        key: "watch",
        fillRule: "evenodd",
        d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      })
    ),
    sidebar: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z",
      })
    ),
    sidebaralt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z",
      })
    ),
    sidebaralttoggle: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z",
      })
    ),
    sidebartoggle: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z",
      })
    ),
    bottombar: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z",
      })
    ),
    bottombartoggle: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z",
      })
    ),
    cpu: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z",
      })
    ),
    database: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z",
      })
    ),
    memory: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z",
      })
    ),
    structure: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z",
      })
    ),
    box: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z",
      })
    ),
    power: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z",
      }),
      n.createElement("path", {
        d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z",
      })
    ),
    photo: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z",
      })
    ),
    component: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z",
      })
    ),
    grid: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z",
      })
    ),
    outline: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      })
    ),
    photodrag: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z",
      }),
      n.createElement("path", {
        d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z",
      })
    ),
    search: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoom: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoomout: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
      })
    ),
    zoomreset: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z",
      })
    ),
    eye: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z",
      })
    ),
    eyeclose: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z",
      }),
      n.createElement("path", {
        d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z",
      })
    ),
    lightning: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z",
      })
    ),
    lightningoff: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    contrast: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z",
      })
    ),
    switchalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z",
      })
    ),
    mirror: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z",
      })
    ),
    grow: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z",
      }),
      n.createElement("path", {
        d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z",
      })
    ),
    paintbrush: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z",
      })
    ),
    ruler: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z",
      })
    ),
    stop: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    camera: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z",
      })
    ),
    video: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z",
      })
    ),
    speaker: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z",
      }),
      n.createElement("path", {
        d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z",
      }),
      n.createElement("path", {
        d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z",
      })
    ),
    play: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z",
      })
    ),
    playback: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z",
      })
    ),
    playnext: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z",
      })
    ),
    rewind: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z",
      })
    ),
    fastforward: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z",
      })
    ),
    stopalt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z",
      })
    ),
    sidebyside: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z",
      })
    ),
    stacked: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z",
      })
    ),
    sun: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
      n.createElement("path", {
        d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z",
      })
    ),
    moon: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z",
      })
    ),
    book: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z",
      })
    ),
    document: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z",
      })
    ),
    copy: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z",
      })
    ),
    category: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z",
      })
    ),
    folder: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z",
      })
    ),
    print: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z",
      })
    ),
    graphline: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z",
      })
    ),
    calendar: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z",
      })
    ),
    graphbar: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z",
      })
    ),
    menu: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z",
      })
    ),
    menualt: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z",
      })
    ),
    filter: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      })
    ),
    docchart: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z",
      })
    ),
    doclist: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z",
      })
    ),
    markup: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z",
      })
    ),
    bold: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z",
      })
    ),
    italic: n.createElement("path", {
      d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z",
    }),
    paperclip: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z",
      })
    ),
    listordered: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z",
      })
    ),
    listunordered: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      })
    ),
    paragraph: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z",
      })
    ),
    markdown: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z",
      })
    ),
    repository: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z",
      }),
      n.createElement("path", {
        d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z",
      }),
      n.createElement("path", {
        d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z",
      }),
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z",
      })
    ),
    commit: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      })
    ),
    branch: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    pullrequest: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    merge: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    apple: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z",
      })
    ),
    linux: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z",
      })
    ),
    ubuntu: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z",
      })
    ),
    windows: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z",
      })
    ),
    storybook: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z",
      })
    ),
    azuredevops: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z",
      })
    ),
    bitbucket: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z",
      })
    ),
    chrome: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z",
      })
    ),
    chromatic: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z",
      })
    ),
    componentdriven: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z",
      })
    ),
    discord: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z",
      })
    ),
    facebook: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z",
      })
    ),
    figma: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        fillRule: "evenodd",
        d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z",
      })
    ),
    gdrive: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z",
      })
    ),
    github: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z",
      })
    ),
    gitlab: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z",
      })
    ),
    google: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z",
      })
    ),
    graphql: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z",
      })
    ),
    medium: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z",
      })
    ),
    redux: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z",
      })
    ),
    twitter: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z",
      })
    ),
    youtube: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z",
      })
    ),
    vscode: n.createElement(
      n.Fragment,
      null,
      n.createElement("path", {
        d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z",
      })
    ),
  },
  Ki = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  De = ({ icon: e, useSymbol: t, ...r }) =>
    n.createElement(
      Ki,
      { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r },
      t ? n.createElement("use", { xlinkHref: `#icon--${e}` }) : vr[e]
    ),
  V5 = m.memo(function ({ icons: e = Object.keys(vr) }) {
    return n.createElement(
      Ki,
      {
        viewBox: "0 0 14 14",
        style: { position: "absolute", width: 0, height: 0 },
        "data-chromatic": "ignore",
      },
      e.map((t) =>
        n.createElement("symbol", { id: `icon--${t}`, key: t }, vr[t])
      )
    );
  }),
  z5 = 0,
  q5 = (e) =>
    e.button === z5 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  U5 = (e, t) => {
    q5(e) && (e.preventDefault(), t(e));
  },
  W5 = _.span(
    ({ withArrow: e }) =>
      e
        ? {
            "> svg:last-of-type": {
              height: "0.7em",
              width: "0.7em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: "1em",
              width: "1em",
              verticalAlign: "middle",
              position: "relative",
              bottom: 0,
              marginRight: 0,
            },
          }
        : {}
  ),
  G5 = _.a(
    ({ theme: e }) => ({
      display: "inline-block",
      transition: "all 150ms ease-out",
      textDecoration: "none",
      color: e.color.secondary,
      "&:hover, &:focus": {
        cursor: "pointer",
        color: Lt(0.07, e.color.secondary),
        "svg path:not([fill])": { fill: Lt(0.07, e.color.secondary) },
      },
      "&:active": {
        color: Lt(0.1, e.color.secondary),
        "svg path:not([fill])": { fill: Lt(0.1, e.color.secondary) },
      },
      svg: {
        display: "inline-block",
        height: "1em",
        width: "1em",
        verticalAlign: "text-top",
        position: "relative",
        bottom: "-0.125em",
        marginRight: "0.4em",
        "& path": { fill: e.color.secondary },
      },
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let a;
      return (
        t && (a = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (a = [e.color.dark, e.color.darkest, e.textMutedColor]),
        a
          ? {
              color: a[0],
              "svg path:not([fill])": { fill: a[0] },
              "&:hover": {
                color: a[1],
                "svg path:not([fill])": { fill: a[1] },
              },
              "&:active": {
                color: a[2],
                "svg path:not([fill])": { fill: a[2] },
              },
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e
        ? {
            color: "inherit",
            "&:hover, &:active": {
              color: "inherit",
              textDecoration: "underline",
            },
          }
        : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            ":not([fill])": { fill: e.color.lightest },
            "&:hover": {
              color: e.color.lighter,
              "svg path:not([fill])": { fill: e.color.lighter },
            },
            "&:active": {
              color: e.color.light,
              "svg path:not([fill])": { fill: e.color.light },
            },
          }
        : {},
    ({ isButton: e }) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: "none",
            padding: 0,
            fontSize: "inherit",
          }
        : {}
  ),
  Hn = ({
    cancel: e,
    children: t,
    onClick: r,
    withArrow: a,
    containsIcon: o,
    className: l,
    ...s
  }) =>
    n.createElement(
      G5,
      { ...s, onClick: r && e ? (u) => U5(u, r) : r, className: l },
      n.createElement(
        W5,
        { withArrow: a, containsIcon: o },
        t,
        a && n.createElement(De, { icon: "arrowright" })
      )
    );
Hn.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
};
var Y5 = _.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: "1.6",
    h1: {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    h2: {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    "pre:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "pre pre, pre.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
    },
    "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" },
    "pre code": {
      margin: 0,
      padding: 0,
      whiteSpace: "pre",
      border: "none",
      background: "transparent",
    },
    "pre code, pre tt": { backgroundColor: "transparent", border: "none" },
    "body > *:first-of-type": { marginTop: "0 !important" },
    "body > *:last-child": { marginBottom: "0 !important" },
    a: { color: e.color.secondary, textDecoration: "none" },
    "a.absent": { color: "#cc0000" },
    "a.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      margin: "20px 0 10px",
      padding: 0,
      cursor: "text",
      position: "relative",
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& tt, & code": { fontSize: "inherit" },
    },
    "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" },
    hr: {
      border: "0 none",
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type":
      { marginTop: 0, paddingTop: 0 },
    "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6":
      { marginTop: 0, paddingTop: 0 },
    "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 },
    "li p.first": { display: "inline-block" },
    "ul, ol": {
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
    },
    dl: { padding: 0 },
    "dl dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      margin: "0 0 15px",
      padding: "0 15px",
      "&:first-of-type": { padding: 0 },
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: "0 15px",
      color: e.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    table: {
      padding: 0,
      borderCollapse: "collapse",
      "& tr": {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: "white",
        margin: 0,
        padding: 0,
        "& th": {
          fontWeight: "bold",
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "& td": {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "&:nth-of-type(2n)": { backgroundColor: e.color.lighter },
        "& th :first-of-type, & td :first-of-type": { marginTop: 0 },
        "& th :last-child, & td :last-child": { marginBottom: 0 },
      },
    },
    img: { maxWidth: "100%" },
    "span.frame": {
      display: "block",
      overflow: "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "span.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "span.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "span.float-left": {
      display: "block",
      marginRight: 13,
      overflow: "hidden",
      float: "left",
      "& span": { margin: "13px 0 0" },
    },
    "span.float-right": {
      display: "block",
      marginLeft: 13,
      overflow: "hidden",
      float: "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
    "code, tt": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === "dark" && e.color.darkest,
    },
  })),
  Et = [],
  Vt = null,
  K5 = m.lazy(async () => {
    let { SyntaxHighlighter: e } = await At(
      () => import("./syntaxhighlighter-V7JZZA35-82a72ebf.js"),
      [
        "./syntaxhighlighter-V7JZZA35-82a72ebf.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    );
    return (
      Et.length > 0 &&
        (Et.forEach((t) => {
          e.registerLanguage(...t);
        }),
        (Et = [])),
      Vt === null && (Vt = e),
      { default: (t) => n.createElement(e, { ...t }) }
    );
  }),
  X5 = m.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      At(
        () => import("./syntaxhighlighter-V7JZZA35-82a72ebf.js"),
        [
          "./syntaxhighlighter-V7JZZA35-82a72ebf.js",
          "./iframe-92f28330.js",
          "./index-c013ead5.js",
          "./commonjsHelpers-725317a4.js",
          "./index-1b89a1c6.js",
          "./isNativeReflectConstruct-81b4d0cb.js",
          "./doctrine-744fe685.js",
          "./index-169ee69c.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
      At(
        () => import("./formatter-SWP5E3XI-5fd950a5.js"),
        [
          "./formatter-SWP5E3XI-5fd950a5.js",
          "./index-1b89a1c6.js",
          "./index-c013ead5.js",
          "./commonjsHelpers-725317a4.js",
          "./isNativeReflectConstruct-81b4d0cb.js",
          "./doctrine-744fe685.js",
          "./iframe-92f28330.js",
          "./index-169ee69c.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
    ]);
    return (
      Et.length > 0 &&
        (Et.forEach((r) => {
          e.registerLanguage(...r);
        }),
        (Et = [])),
      Vt === null && (Vt = e),
      { default: (r) => n.createElement(e, { ...r, formatter: t }) }
    );
  }),
  Vn = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      e.format !== !1
        ? n.createElement(X5, { ...e })
        : n.createElement(K5, { ...e })
    );
Vn.registerLanguage = (...e) => {
  if (Vt !== null) {
    Vt.registerLanguage(...e);
    return;
  }
  Et.push(e);
};
var J5 = (e) => (typeof e == "number" ? e : Number(e)),
  Q5 = _.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: "inline-block",
            verticalAlign: "inherit",
            "& > *": {
              marginLeft: t * e.layoutMargin,
              verticalAlign: "inherit",
            },
            [`& > *:first-child${Ua}`]: { marginLeft: 0 },
          }
        : {
            "& > *": { marginTop: r * e.layoutMargin },
            [`& > *:first-child${Ua}`]: { marginTop: 0 },
          },
    ({ theme: e, outer: t, col: r, row: a }) => {
      switch (!0) {
        case !!(t && r):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin,
          };
        case !!(t && a):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin,
          };
        default:
          return {};
      }
    }
  ),
  e2 = ({ col: e, row: t, outer: r, children: a, ...o }) => {
    let l = J5(typeof r == "number" || !r ? r : e || t);
    return n.createElement(Q5, { col: e, row: t, outer: l, ...o }, a);
  },
  t2 = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  r2 = _.div(),
  a2 = _.div(({ theme: e }) => ({
    padding: 30,
    textAlign: "center",
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  Xi = ({ children: e, ...t }) => {
    let [r, a] = m.Children.toArray(e);
    return n.createElement(
      a2,
      { ...t },
      n.createElement(t2, null, r),
      a && n.createElement(r2, null, a)
    );
  },
  n2 = _.div(({ scale: e = 1, elementHeight: t }) => ({
    height: t || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / e})`,
  }));
function o2({ scale: e, children: t }) {
  let r = m.useRef(null),
    [a, o] = m.useState(0),
    l = m.useCallback(
      ({ height: s }) => {
        s && o(s / e);
      },
      [e]
    );
  return (
    m.useEffect(() => {
      r.current && o(r.current.getBoundingClientRect().height);
    }, [e]),
    pl({ ref: r, onResize: l }),
    n.createElement(
      n2,
      { scale: e, elementHeight: a },
      n.createElement(
        "div",
        { ref: r, className: "innerZoomElementWrapper" },
        t
      )
    )
  );
}
var l2 = class extends m.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active &&
          this.iframe.setAttribute(
            "data-is-storybook",
            e.active ? "true" : "false"
          ),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: "top left",
        });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: "top left",
      });
    }
    render() {
      let { children: e } = this.props;
      return n.createElement(n.Fragment, null, e);
    }
  },
  Ji = { Element: o2, IFrame: l2 },
  { document: i2 } = n5,
  s2 = _.strong(({ theme: e }) => ({ color: e.color.orange })),
  u2 = _.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: "underline",
  })),
  tl = _.em(({ theme: e }) => ({ color: e.textMutedColor })),
  c2 = /(Error): (.*)\n/,
  d2 = /at (?:(.*) )?\(?(.+)\)?/,
  p2 = /([^@]+)?(?:\/<)?@(.+)?/,
  f2 = /([^@]+)?@(.+)?/,
  Qi = ({ error: e }) => {
    if (!e)
      return n.createElement(
        m.Fragment,
        null,
        "This error has no stack or message"
      );
    if (!e.stack)
      return n.createElement(
        m.Fragment,
        null,
        e.message || "This error has no stack or message"
      );
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let r = t.match(c2);
    if (!r) return n.createElement(m.Fragment, null, t);
    let [, a, o] = r,
      l = t.split(/\n/).slice(1),
      [, ...s] = l
        .map((u) => {
          let i = u.match(d2) || u.match(p2) || u.match(f2);
          return i
            ? {
                name: (i[1] || "").replace("/<", ""),
                location: i[2].replace(i2.location.origin, ""),
              }
            : null;
        })
        .filter(Boolean);
    return n.createElement(
      m.Fragment,
      null,
      n.createElement("span", null, a),
      ": ",
      n.createElement(s2, null, o),
      n.createElement("br", null),
      s.map((u, i) =>
        u.name
          ? n.createElement(
              m.Fragment,
              { key: i },
              "  ",
              "at ",
              n.createElement(u2, null, u.name),
              " (",
              n.createElement(tl, null, u.location),
              ")",
              n.createElement("br", null)
            )
          : n.createElement(
              m.Fragment,
              { key: i },
              "  ",
              "at ",
              n.createElement(tl, null, u.location),
              n.createElement("br", null)
            )
      )
    );
  },
  es = _.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: "3em",
      cursor: "pointer",
      display: "inline-block",
      overflow: "hidden",
      padding: e ? "8px 16px" : "13px 20px",
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      transitionProperty: "background, box-shadow",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-out",
      verticalAlign: "top",
      whiteSpace: "nowrap",
      userSelect: "none",
      opacity: 1,
      margin: 0,
      background: "transparent",
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: "1",
      svg: {
        display: "inline-block",
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: "top",
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: "none",
        path: { fill: "currentColor" },
      },
    }),
    ({ disabled: e }) =>
      e
        ? {
            cursor: "not-allowed !important",
            opacity: 0.5,
            "&:hover": { transform: "none" },
          }
        : {},
    ({ containsIcon: e, small: t }) =>
      e
        ? {
            svg: { display: "block", margin: 0 },
            ...(t ? { padding: 10 } : { padding: 13 }),
          }
        : {},
    ({ theme: e, primary: t, secondary: r, gray: a }) => {
      let o;
      return (
        a
          ? (o = e.color.mediumlight)
          : r
          ? (o = e.color.secondary)
          : t && (o = e.color.primary),
        o
          ? {
              background: o,
              color: a ? e.color.darkest : e.color.lightest,
              "&:hover": { background: Lt(0.05, o) },
              "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" },
              "&:focus": {
                boxShadow: `${tt(o, 1)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": { boxShadow: `${tt(o, 0.2)} 0 8px 18px 0px` },
            }
          : {}
      );
    },
    ({ theme: e, tertiary: t, inForm: r, small: a }) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(r && a ? { padding: "10px 16px" } : {}),
            "&:hover": {
              background:
                e.base === "light"
                  ? Lt(0.02, e.button.background)
                  : T5(0.03, e.button.background),
              ...(r
                ? {}
                : {
                    boxShadow:
                      "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset",
                  }),
            },
            "&:active": { background: e.button.background },
            "&:focus": {
              boxShadow: `${tt(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: "none",
            },
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${fe(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: fe(0.3, e.color.defaultText),
            background: "transparent",
            "&:hover, &:focus": {
              boxShadow: `${fe(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: "none",
            },
            "&:active": {
              boxShadow: `${fe(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: fe(0, e.color.defaultText),
            },
          }
        : {},
    ({ theme: e, outline: t, primary: r }) => {
      let a = e.color.primary;
      return t && r
        ? {
            boxShadow: `${a} 0 0 0 1px inset`,
            color: a,
            "svg path:not([fill])": { fill: a },
            "&:hover": {
              boxShadow: `${a} 0 0 0 1px inset`,
              background: "transparent",
            },
            "&:active": {
              background: a,
              boxShadow: `${a} 0 0 0 1px inset`,
              color: e.color.tertiary,
            },
            "&:focus": {
              boxShadow: `${a} 0 0 0 1px inset, ${tt(a, 0.4)} 0 1px 9px 2px`,
              outline: "none",
            },
            "&:focus:hover": {
              boxShadow: `${a} 0 0 0 1px inset, ${tt(a, 0.2)} 0 8px 18px 0px`,
            },
          }
        : {};
    },
    ({ theme: e, outline: t, primary: r, secondary: a }) => {
      let o;
      return (
        a ? (o = e.color.secondary) : r && (o = e.color.primary),
        t && o
          ? {
              boxShadow: `${o} 0 0 0 1px inset`,
              color: o,
              "svg path:not([fill])": { fill: o },
              "&:hover": {
                boxShadow: `${o} 0 0 0 1px inset`,
                background: "transparent",
              },
              "&:active": {
                background: o,
                boxShadow: `${o} 0 0 0 1px inset`,
                color: e.color.tertiary,
              },
              "&:focus": {
                boxShadow: `${o} 0 0 0 1px inset, ${tt(o, 0.4)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": {
                boxShadow: `${o} 0 0 0 1px inset, ${tt(o, 0.2)} 0 8px 18px 0px`,
              },
            }
          : {}
      );
    }
  ),
  m2 = es.withComponent("a"),
  ts = Object.assign(
    m.forwardRef(function ({ isLink: e, children: t, ...r }, a) {
      return e
        ? n.createElement(m2, { ...r, ref: a }, t)
        : n.createElement(es, { ...r, ref: a }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  g2 = _.label(({ theme: e }) => ({
    display: "flex",
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: "0 15px",
    padding: "8px 0",
    "&:last-child": { marginBottom: "3rem" },
  })),
  h2 = _.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    lineHeight: "16px",
  })),
  rs = ({ label: e, children: t, ...r }) =>
    n.createElement(
      g2,
      { ...r },
      e ? n.createElement(h2, null, n.createElement("span", null, e)) : null,
      t
    );
rs.defaultProps = { label: void 0 };
function on() {
  return (
    (on = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    on.apply(this, arguments)
  );
}
function b2(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var rl = function (e, t) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    e.current = t;
  },
  y2 = function (e, t) {
    var r = m.useRef();
    return m.useCallback(
      function (a) {
        (e.current = a),
          r.current && rl(r.current, null),
          (r.current = t),
          t && rl(t, a);
      },
      [t]
    );
  },
  v2 = y2,
  E2 = function () {},
  x2 = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  A2 = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows;
    var r = e.onChange,
      a = r === void 0 ? E2 : r;
    e.onHeightChange;
    var o = b2(e, x2);
    o.value;
    var l = m.useRef(null),
      s = v2(l, t);
    return (
      m.useRef(0),
      m.useRef(),
      m.createElement("textarea", on({}, o, { onChange: a, ref: s }))
    );
  },
  w2 = m.forwardRef(A2),
  S2 = {
    appearance: "none",
    border: "0 none",
    boxSizing: "inherit",
    display: " block",
    margin: " 0",
    background: "transparent",
    padding: 0,
    fontSize: "inherit",
    position: "relative",
  },
  zn = ({ theme: e }) => ({
    ...S2,
    transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
    color: e.input.color || "inherit",
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: "20px",
    padding: "6px 10px",
    boxSizing: "border-box",
    height: 32,
    '&[type="file"]': { height: "auto" },
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    "&::placeholder": { color: e.textMutedColor, opacity: 1 },
  }),
  fa = ({ size: e }) => {
    switch (e) {
      case "100%":
        return { width: "100%" };
      case "flex":
        return { flex: 1 };
      case "auto":
      default:
        return { display: "inline" };
    }
  },
  as = ({ align: e }) => {
    switch (e) {
      case "end":
        return { textAlign: "right" };
      case "center":
        return { textAlign: "center" };
      case "start":
      default:
        return { textAlign: "left" };
    }
  },
  ma = ({ valid: e, theme: t }) => {
    switch (e) {
      case "valid":
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case "error":
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case "warn":
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  C2 = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement("input", { ...a, ref: o });
      })
    )(zn, fa, as, ma, { minHeight: 32 }),
    { displayName: "Input" }
  ),
  _2 = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement("select", { ...a, ref: o });
      })
    )(zn, fa, ma, {
      height: 32,
      userSelect: "none",
      paddingRight: 20,
      appearance: "menulist",
    }),
    { displayName: "Select" }
  ),
  k2 = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement(w2, { ...a, ref: o });
      })
    )(zn, fa, as, ma, ({ height: e = 400 }) => ({
      overflow: "visible",
      maxHeight: e,
    })),
    { displayName: "Textarea" }
  ),
  O2 = _(
    m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
      return n.createElement(ts, { ...a, ref: o });
    })
  )(fa, ma, {
    userSelect: "none",
    overflow: "visible",
    zIndex: 2,
    "&:hover": { transform: "none" },
  }),
  R2 = Object.assign(
    m.forwardRef(function (e, t) {
      return n.createElement(O2, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t,
      });
    }),
    { displayName: "Button" }
  ),
  qn = Object.assign(_.form({ boxSizing: "border-box", width: "100%" }), {
    Field: rs,
    Input: C2,
    Select: _2,
    Textarea: k2,
    Button: R2,
  }),
  F2 = m.lazy(() =>
    At(
      () => import("./WithTooltip-V3YHNWJZ-e2efc1ae.js"),
      [
        "./WithTooltip-V3YHNWJZ-e2efc1ae.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  T2 = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      n.createElement(F2, { ...e })
    ),
  D2 = m.lazy(() =>
    At(
      () => import("./WithTooltip-V3YHNWJZ-e2efc1ae.js"),
      [
        "./WithTooltip-V3YHNWJZ-e2efc1ae.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  L2 = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      n.createElement(D2, { ...e })
    ),
  M2 = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  B2 = _.span(),
  $2 = _.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: "center",
    "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold },
  })),
  P2 = _.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: "18px",
  })),
  Z2 = _.div({ padding: 15, width: 280, boxSizing: "border-box" }),
  ns = ({ title: e, desc: t, links: r }) =>
    n.createElement(
      Z2,
      null,
      n.createElement(
        P2,
        null,
        e && n.createElement(M2, null, e),
        t && n.createElement(B2, null, t)
      ),
      r &&
        n.createElement(
          $2,
          null,
          r.map(({ title: a, ...o }) =>
            n.createElement(Hn, { ...o, key: a }, a)
          )
        )
    );
ns.defaultProps = { title: null, desc: null, links: null };
var j2 = _.div(({ theme: e }) => ({
    padding: "2px 6px",
    lineHeight: "16px",
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: -1,
    background:
      e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
    margin: 6,
  })),
  N2 = ({ note: e, ...t }) => n.createElement(j2, { ...t }, e),
  I2 = _(({ active: e, loading: t, disabled: r, ...a }) =>
    n.createElement("span", { ...a })
  )(
    ({ theme: e }) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular,
    }),
    ({ active: e, theme: t }) =>
      e
        ? { color: t.color.secondary, fontWeight: t.typography.weight.bold }
        : {},
    ({ loading: e, theme: t }) =>
      e
        ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow }
        : {},
    ({ disabled: e, theme: t }) =>
      e ? { color: fe(0.7, t.color.defaultText) } : {}
  ),
  H2 = _.span({
    display: "flex",
    "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" },
    "& path": { fill: "inherit" },
  }),
  V2 = _.span(
    { flex: 1, textAlign: "left", display: "flex", flexDirection: "column" },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {})
  ),
  z2 = _.span(
    ({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  al = _.span(
    ({ active: e, theme: t }) =>
      e
        ? {
            "& svg": { opacity: 1 },
            "& svg path:not([fill])": { fill: t.color.secondary },
          }
        : {},
    () => ({ display: "flex", maxWidth: 14 })
  ),
  q2 = _.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: "all 150ms ease-out",
      color: e.color.dark,
      textDecoration: "none",
      cursor: "pointer",
      justifyContent: "space-between",
      lineHeight: "18px",
      padding: "7px 10px",
      display: "flex",
      alignItems: "center",
      "& > * + *": { paddingLeft: 10 },
      "&:hover": { background: e.background.hoverable },
      "&:hover svg": { opacity: 1 },
    }),
    ({ disabled: e }) => (e ? { cursor: "not-allowed" } : {})
  ),
  U2 = Ct(100)((e, t, r) => {
    let a = {};
    return (
      e && Object.assign(a, { onClick: e }),
      t && Object.assign(a, { href: t }),
      r && t && Object.assign(a, { to: t, as: r }),
      a
    );
  }),
  os = ({
    loading: e,
    left: t,
    title: r,
    center: a,
    right: o,
    icon: l,
    active: s,
    disabled: u,
    isIndented: i,
    href: c,
    onClick: d,
    LinkWrapper: f,
    ...p
  }) => {
    let g = U2(d, c, f),
      h = { active: s, disabled: u },
      b = typeof l == "string" && vr[l];
    return n.createElement(
      q2,
      { ...h, ...p, ...g },
      l
        ? n.createElement(
            al,
            { ...h },
            b ? n.createElement(De, { icon: l }) : l
          )
        : t && n.createElement(al, { ...h }, t),
      r || a
        ? n.createElement(
            V2,
            { isIndented: !t && !l && i },
            r && n.createElement(I2, { ...h, loading: e }, r),
            a && n.createElement(z2, { ...h }, a)
          )
        : null,
      o && n.createElement(H2, { ...h }, o)
    );
  };
os.defaultProps = {
  loading: !1,
  left: null,
  title: n.createElement("span", null, "Loading state"),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
var Un = os,
  W2 = _.div(
    {
      minWidth: 180,
      overflow: "hidden",
      overflowY: "auto",
      maxHeight: 15.5 * 32,
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius })
  ),
  G2 = (e) => {
    let { LinkWrapper: t, onClick: r, id: a, isIndented: o, ...l } = e,
      { title: s, href: u, active: i } = l,
      c = m.useCallback(
        (f) => {
          r(f, l);
        },
        [r]
      ),
      d = !!r;
    return n.createElement(Un, {
      title: s,
      active: i,
      href: u,
      id: `list-item-${a}`,
      LinkWrapper: t,
      isIndented: o,
      ...l,
      ...(d ? { onClick: c } : {}),
    });
  },
  Wn = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((a) => a.left || a.icon);
    return n.createElement(
      W2,
      null,
      e.map(({ isGatsby: a, ...o }) =>
        n.createElement(G2, {
          key: o.id,
          LinkWrapper: a ? t : null,
          isIndented: r,
          ...o,
        })
      )
    );
  };
Wn.defaultProps = { LinkWrapper: Un.defaultProps.LinkWrapper };
var Gn = n.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? n.createElement("a", { ref: r, ...t }, e)
    : n.createElement("button", { ref: r, type: "button", ...t }, e)
);
Gn.displayName = "ButtonOrLink";
var kr = _(Gn, { shouldForwardProp: fn })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": { display: "none" },
  },
  ({ theme: e }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary },
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? {
          color: t || r.barSelectedColor,
          borderBottomColor: r.barSelectedColor,
        }
      : { color: t || r.barTextColor, borderBottomColor: "transparent" }
);
kr.displayName = "TabButton";
var xt = _(Gn, { shouldForwardProp: fn })(
  () => ({
    alignItems: "center",
    background: "transparent",
    border: "none",
    borderRadius: 4,
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: 13,
    fontWeight: "bold",
    height: 28,
    justifyContent: "center",
    marginTop: 6,
    padding: "8px 7px",
    "& > svg": { width: 14 },
  }),
  ({ active: e, theme: t }) =>
    e
      ? { backgroundColor: t.background.hoverable, color: t.barSelectedColor }
      : {},
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: "not-allowed" }
      : {
          "&:hover, &:focus-visible": {
            background: fe(0.88, t.color.secondary),
            color: t.barHoverColor,
          },
          "&:focus-visible": { outline: da },
          "&:focus:not(:focus-visible)": { outline: "none" },
        }
);
xt.displayName = "IconButton";
var Y2 = _.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  K2 = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  ls = () => n.createElement(K2, null, n.createElement(Y2, null)),
  ln = _.div(
    {
      display: "flex",
      whiteSpace: "nowrap",
      flexBasis: "auto",
      marginLeft: 3,
      marginRight: 3,
    },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { "& > *": { marginLeft: 4 } } : {}),
    ({ right: e }) => (e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {})
  );
ln.displayName = "Side";
var X2 = ({ children: e, className: t, scrollable: r }) =>
    r
      ? n.createElement(Rn, { vertical: !1, className: t }, e)
      : n.createElement("div", { className: t }, e),
  Yn = _(X2)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: "100%",
      height: 40,
      flexShrink: 0,
      overflow: t ? "auto" : "hidden",
      overflowY: "hidden",
    }),
    ({ theme: e, border: t = !1 }) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg,
          }
        : {}
  );
Yn.displayName = "Bar";
var J2 = _.div(({ bgColor: e }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    backgroundColor: e || "",
  })),
  ga = ({ children: e, backgroundColor: t, ...r }) => {
    let [a, o] = m.Children.toArray(e);
    return n.createElement(
      Yn,
      { ...r },
      n.createElement(
        J2,
        { bgColor: t },
        n.createElement(ln, { scrollable: r.scrollable, left: !0 }, a),
        o ? n.createElement(ln, { right: !0 }, o) : null
      )
    );
  };
ga.displayName = "FlexBar";
var is = _.div(({ active: e }) =>
    e ? { display: "block" } : { display: "none" }
  ),
  nl = (e) =>
    m.Children.toArray(e).map(
      ({ props: { title: t, id: r, color: a, children: o } }) => {
        let l = Array.isArray(o) ? o[0] : o;
        return {
          title: t,
          id: r,
          ...(a ? { color: a } : {}),
          render:
            typeof l == "function"
              ? l
              : ({ active: s }) =>
                  n.createElement(is, { active: s, role: "tabpanel" }, l),
        };
      }
    ),
  Q2 = _.span(({ theme: e, isActive: t }) => ({
    display: "inline-block",
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: "3px solid transparent",
    borderLeft: "3px solid transparent",
    borderTop: "3px solid",
    transition: "transform .1s ease-out",
  })),
  ef = _(kr)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  );
function tf(e) {
  let t = m.useRef(),
    r = m.useRef(),
    a = m.useRef(new Map()),
    { width: o = 1 } = pl({ ref: t }),
    [l, s] = m.useState(e),
    [u, i] = m.useState([]),
    c = m.useRef(e),
    d = m.useCallback(
      ({ menuName: p, actions: g }) => {
        let h = u.some(({ active: w }) => w),
          [b, A] = m.useState(!1);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            Gp,
            {
              interactive: !0,
              visible: b,
              onVisibleChange: A,
              placement: "bottom",
              delayHide: 100,
              tooltip: n.createElement(Wn, {
                links: u.map(({ title: w, id: k, color: v, active: E }) => ({
                  id: k,
                  title: w,
                  color: v,
                  active: E,
                  onClick: (y) => {
                    y.preventDefault(), g.onSelect(k);
                  },
                })),
              }),
            },
            n.createElement(
              ef,
              {
                ref: r,
                active: h,
                preActive: b,
                style: { visibility: u.length ? "visible" : "hidden" },
                "aria-hidden": !u.length,
                className: "tabbutton",
                type: "button",
                role: "tab",
              },
              p,
              n.createElement(Q2, {
                className: "addon-collapsible-icon",
                isActive: h || b,
              })
            )
          ),
          u.map(({ title: w, id: k, color: v }, E) => {
            let y = `index-${E}`;
            return n.createElement(
              kr,
              {
                id: `tabbutton-${Si(k) ?? y}`,
                style: { visibility: "hidden" },
                "aria-hidden": !0,
                tabIndex: -1,
                ref: (x) => {
                  a.current.set(k, x);
                },
                className: "tabbutton",
                type: "button",
                key: k,
                textColor: v,
                role: "tab",
              },
              w
            );
          })
        );
      },
      [u]
    ),
    f = m.useCallback(() => {
      if (!t.current || !r.current) return;
      let { x: p, width: g } = t.current.getBoundingClientRect(),
        { width: h } = r.current.getBoundingClientRect(),
        b = u.length ? p + g - h : p + g,
        A = [],
        w = 0,
        k = e.filter((v) => {
          let { id: E } = v,
            y = a.current.get(E),
            { width: x = 0 } =
              (y == null ? void 0 : y.getBoundingClientRect()) || {},
            C = p + w + x > b;
          return (!C || !y) && A.push(v), (w += x), C;
        });
      (A.length !== l.length || c.current !== e) &&
        (s(A), i(k), (c.current = e));
    }, [u.length, e, l]);
  return (
    m.useLayoutEffect(f, [f, o]),
    {
      tabRefs: a,
      addonsRef: r,
      tabBarRef: t,
      visibleList: l,
      invisibleList: u,
      AddonTab: d,
    }
  );
}
var rf =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  af = _.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: "padding-box",
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: "hidden",
            boxSizing: "border-box",
          }
        : {},
    ({ absolute: e }) =>
      e
        ? {
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }
        : { display: "block" }
  ),
  Kn = _.div({
    overflow: "hidden",
    "&:first-of-type": { marginLeft: -3 },
    whiteSpace: "nowrap",
    flexGrow: 1,
  });
Kn.displayName = "TabBar";
var nf = _.div(
    { display: "block", position: "relative" },
    ({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    }),
    ({ bordered: e, theme: t }) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${
              t.appBorderRadius - 1
            }px`,
          }
        : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: "absolute",
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: "auto",
            [`& > *:first-child${rf}`]: {
              position: "absolute",
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: "auto",
            },
          }
        : {}
  ),
  of = ({ active: e, render: t, children: r }) =>
    n.createElement(is, { active: e }, t ? t() : r),
  ha = m.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: a,
      bordered: o,
      tools: l,
      backgroundColor: s,
      id: u,
      menuName: i,
    }) => {
      let c = nl(e).map((b) => b.id),
        d = m.useMemo(
          () =>
            nl(e).map((b, A) => ({ ...b, active: t ? b.id === t : A === 0 })),
          [t, ...c]
        ),
        { visibleList: f, tabBarRef: p, tabRefs: g, AddonTab: h } = tf(d);
      return d.length
        ? n.createElement(
            af,
            { absolute: a, bordered: o, id: u },
            n.createElement(
              ga,
              { scrollable: !1, border: !0, backgroundColor: s },
              n.createElement(
                Kn,
                { style: { whiteSpace: "normal" }, ref: p, role: "tablist" },
                f.map(({ title: b, id: A, active: w, color: k }, v) => {
                  let E = `index-${v}`;
                  return n.createElement(
                    kr,
                    {
                      id: `tabbutton-${Si(A) ?? E}`,
                      ref: (y) => {
                        g.current.set(A, y);
                      },
                      className: `tabbutton ${w ? "tabbutton-active" : ""}`,
                      type: "button",
                      key: A,
                      active: w,
                      textColor: k,
                      onClick: (y) => {
                        y.preventDefault(), r.onSelect(A);
                      },
                      role: "tab",
                    },
                    typeof b == "function" ? n.createElement("title", null) : b
                  );
                }),
                n.createElement(h, { menuName: i, actions: r })
              ),
              l
            ),
            n.createElement(
              nf,
              { id: "panel-tab-content", bordered: o, absolute: a },
              d.map(({ id: b, active: A, render: w }) =>
                n.createElement(w, { key: b, active: A }, null)
              )
            )
          )
        : n.createElement(
            Xi,
            null,
            n.createElement(m.Fragment, { key: "title" }, "Nothing found")
          );
    }
  );
ha.displayName = "Tabs";
ha.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: "Tabs",
};
var ss = class extends m.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: r,
        backgroundColor: a,
        menuName: o,
      } = this.props,
      { selected: l } = this.state;
    return n.createElement(
      ha,
      {
        bordered: e,
        absolute: t,
        selected: l,
        backgroundColor: a,
        menuName: o,
        actions: this.handlers,
      },
      r
    );
  }
};
ss.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: "",
  menuName: void 0,
};
var Xn = _.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2,
  }),
  ({ force: e }) => (e ? {} : { "& + &": { display: "none" } })
);
Xn.displayName = "Separator";
var lf = (e) =>
    e.reduce(
      (t, r, a) =>
        r
          ? n.createElement(
              m.Fragment,
              { key: r.id || r.key || `f-${a}` },
              t,
              a > 0 ? n.createElement(Xn, { key: `s-${a}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  sf = (e) => {
    let t = m.useRef();
    return (
      m.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  uf = (e, t) => {
    let r = sf(t);
    return e ? t : r;
  },
  cf = ({ active: e, children: t }) =>
    n.createElement("div", { hidden: !e }, uf(e, t)),
  df = ({ alt: e, ...t }) =>
    n.createElement(
      "svg",
      {
        width: "200px",
        height: "40px",
        viewBox: "0 0 200 40",
        ...t,
        role: "img",
      },
      e ? n.createElement("title", null, e) : null,
      n.createElement(
        "defs",
        null,
        n.createElement("path", {
          d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
          id: "a",
        })
      ),
      n.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        n.createElement("path", {
          d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
          fill: "currentColor",
        }),
        n.createElement(
          "mask",
          { id: "b", fill: "#fff" },
          n.createElement("use", { xlinkHref: "#a" })
        ),
        n.createElement("use", {
          fill: "#FF4785",
          fillRule: "nonzero",
          xlinkHref: "#a",
        }),
        n.createElement("path", {
          d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
          fill: "#FFF",
          fillRule: "nonzero",
          mask: "url(#b)",
        })
      )
    ),
  pf = ({ ...e }) =>
    n.createElement(
      "svg",
      { viewBox: "0 0 64 64", ...e },
      n.createElement("title", null, "Storybook icon"),
      n.createElement(
        "g",
        {
          id: "Artboard",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
        },
        n.createElement("path", {
          d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
          id: "path-1",
          fill: "#FF4785",
          fillRule: "nonzero",
        }),
        n.createElement("path", {
          d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
          id: "path9_fill-path",
          fill: "#FFFFFF",
          fillRule: "nonzero",
        }),
        n.createElement("path", {
          d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
          id: "Path",
          fill: "#FFFFFF",
        })
      )
    ),
  ff = Ut`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  mf = _.div(({ size: e = 32 }) => ({
    borderRadius: "50%",
    cursor: "progress",
    display: "inline-block",
    overflow: "hidden",
    position: "absolute",
    transition: "all 200ms ease-out",
    verticalAlign: "top",
    top: "50%",
    left: "50%",
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(97, 97, 97, 0.29)",
    borderTopColor: "rgb(100,100,100)",
    animation: `${ff} 0.7s linear infinite`,
    mixBlendMode: "difference",
  })),
  ol = _.div({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }),
  gf = _.div(({ theme: e }) => ({
    position: "relative",
    width: "80%",
    marginBottom: "0.75rem",
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: fe(0.8, e.color.secondary),
    overflow: "hidden",
    cursor: "progress",
  })),
  hf = _.div(({ theme: e }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: e.color.secondary,
  })),
  ll = _.div(({ theme: e }) => ({
    minHeight: "2em",
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  bf = _(De)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: "0.5rem",
    color: e.textMutedColor,
  })),
  yf = Ut`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  vf = _.span({
    "&::after": {
      content: "'...'",
      animation: `${yf} 1s linear infinite`,
      animationDelay: "1s",
      display: "inline-block",
      width: "1em",
      height: "auto",
    },
  }),
  us = ({ progress: e, error: t, size: r, ...a }) => {
    if (t)
      return n.createElement(
        ol,
        {
          "aria-label": t.toString(),
          "aria-live": "polite",
          role: "status",
          ...a,
        },
        n.createElement(bf, { icon: "lightningoff" }),
        n.createElement(ll, null, t.message)
      );
    if (e) {
      let { value: o, modules: l } = e,
        { message: s } = e;
      return (
        l && (s += ` ${l.complete} / ${l.total} modules`),
        n.createElement(
          ol,
          {
            "aria-label": "Content is loading...",
            "aria-live": "polite",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": o * 100,
            "aria-valuetext": s,
            role: "progressbar",
            ...a,
          },
          n.createElement(
            gf,
            null,
            n.createElement(hf, { style: { width: `${o * 100}%` } })
          ),
          n.createElement(ll, null, s, o < 1 && n.createElement(vf, { key: s }))
        )
      );
    }
    return n.createElement(mf, {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...a,
    });
  };
function Ef(e) {
  let t = {},
    r = e.split("&");
  for (let a = 0; a < r.length; a++) {
    let o = r[a].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var cs = (e, t, r = {}) => {
    let [a, o] = e.split("?"),
      l = o ? { ...Ef(o), ...r, id: t } : { ...r, id: t };
    return `${a}?${Object.entries(l)
      .map((s) => `${s[0]}=${s[1]}`)
      .join("&")}`;
  },
  xf = _.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${j.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${Ue.fonts.mono};
  font-size: ${Ue.size.s2 - 1}px;
`,
  Af = ({ code: e, ...t }) =>
    n.createElement(xf, { id: "clipboard-code", ...t }, e),
  ds = Yi,
  ps = {};
Object.keys(Yi).forEach((e) => {
  ps[e] = m.forwardRef((t, r) => m.createElement(e, { ...t, ref: r }));
});
const wf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: Oi,
      ActionBar: kn,
      AddonPanel: cf,
      Badge: H5,
      Bar: Yn,
      Blockquote: Ri,
      Button: ts,
      ClipboardCode: Af,
      Code: Fi,
      DL: Di,
      Div: Ti,
      DocumentWrapper: Y5,
      ErrorFormatter: Qi,
      FlexBar: ga,
      Form: qn,
      H1: Li,
      H2: In,
      H3: Mi,
      H4: Bi,
      H5: $i,
      H6: Pi,
      HR: Zi,
      IconButton: xt,
      IconButtonSkeleton: ls,
      Icons: De,
      Img: ji,
      LI: Ni,
      Link: Hn,
      ListItem: Un,
      Loader: us,
      OL: Ii,
      P: Hi,
      Placeholder: Xi,
      Pre: Vi,
      ResetWrapper: Gi,
      ScrollArea: Rn,
      Separator: Xn,
      Spaced: e2,
      Span: zi,
      StorybookIcon: pf,
      StorybookLogo: df,
      Symbols: V5,
      SyntaxHighlighter: Vn,
      TT: Ui,
      TabBar: Kn,
      TabButton: kr,
      TabWrapper: of,
      Table: qi,
      Tabs: ha,
      TabsState: ss,
      TooltipLinkList: Wn,
      TooltipMessage: ns,
      TooltipNote: N2,
      UL: Wi,
      WithTooltip: T2,
      WithTooltipPure: L2,
      Zoom: Ji,
      codeCommon: nt,
      components: ds,
      createCopyToClipboardFunction: si,
      getStoryHref: cs,
      icons: vr,
      interleaveSeparators: lf,
      nameSpaceClassNames: X,
      resetComponents: ps,
      withReset: Q,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
__STORYBOOK_MODULE_PREVIEW_API__;
var Sf = ((e) => (
    (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown"),
    e
  ))(Sf || {}),
  Ur = ((e) => (
    (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
  ))(Ur || {}),
  Cf = Object.create,
  fs = Object.defineProperty,
  _f = Object.getOwnPropertyDescriptor,
  ms = Object.getOwnPropertyNames,
  kf = Object.getPrototypeOf,
  Of = Object.prototype.hasOwnProperty,
  Re = (e, t) =>
    function () {
      return t || (0, e[ms(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Rf = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of ms(t))
        !Of.call(e, o) &&
          o !== r &&
          fs(e, o, {
            get: () => t[o],
            enumerable: !(a = _f(t, o)) || a.enumerable,
          });
    return e;
  },
  Jn = (e, t, r) => (
    (r = e != null ? Cf(kf(e)) : {}),
    Rf(
      t || !e || !e.__esModule
        ? fs(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Ff = [
    "bubbles",
    "cancelBubble",
    "cancelable",
    "composed",
    "currentTarget",
    "defaultPrevented",
    "eventPhase",
    "isTrusted",
    "returnValue",
    "srcElement",
    "target",
    "timeStamp",
    "type",
  ],
  Tf = ["detail"];
function Df(e) {
  const t = Ff.filter((r) => e[r] !== void 0).reduce(
    (r, a) => ({ ...r, [a]: e[a] }),
    {}
  );
  return (
    e instanceof CustomEvent &&
      Tf.filter((r) => e[r] !== void 0).forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
var gs = Re({
    "node_modules/has-symbols/shams.js"(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var a = {},
          o = Symbol("test"),
          l = Object(o);
        if (
          typeof o == "string" ||
          Object.prototype.toString.call(o) !== "[object Symbol]" ||
          Object.prototype.toString.call(l) !== "[object Symbol]"
        )
          return !1;
        var s = 42;
        a[o] = s;
        for (o in a) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(a).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(a).length !== 0)
        )
          return !1;
        var u = Object.getOwnPropertySymbols(a);
        if (
          u.length !== 1 ||
          u[0] !== o ||
          !Object.prototype.propertyIsEnumerable.call(a, o)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var i = Object.getOwnPropertyDescriptor(a, o);
          if (i.value !== s || i.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  hs = Re({
    "node_modules/has-symbols/index.js"(e, t) {
      var r = typeof Symbol < "u" && Symbol,
        a = gs();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : a();
      };
    },
  }),
  Lf = Re({
    "node_modules/function-bind/implementation.js"(e, t) {
      var r = "Function.prototype.bind called on incompatible ",
        a = Array.prototype.slice,
        o = Object.prototype.toString,
        l = "[object Function]";
      t.exports = function (u) {
        var i = this;
        if (typeof i != "function" || o.call(i) !== l)
          throw new TypeError(r + i);
        for (
          var c = a.call(arguments, 1),
            d,
            f = function () {
              if (this instanceof d) {
                var A = i.apply(this, c.concat(a.call(arguments)));
                return Object(A) === A ? A : this;
              } else return i.apply(u, c.concat(a.call(arguments)));
            },
            p = Math.max(0, i.length - c.length),
            g = [],
            h = 0;
          h < p;
          h++
        )
          g.push("$" + h);
        if (
          ((d = Function(
            "binder",
            "return function (" +
              g.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(f)),
          i.prototype)
        ) {
          var b = function () {};
          (b.prototype = i.prototype),
            (d.prototype = new b()),
            (b.prototype = null);
        }
        return d;
      };
    },
  }),
  Qn = Re({
    "node_modules/function-bind/index.js"(e, t) {
      var r = Lf();
      t.exports = Function.prototype.bind || r;
    },
  }),
  Mf = Re({
    "node_modules/has/src/index.js"(e, t) {
      var r = Qn();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  bs = Re({
    "node_modules/get-intrinsic/index.js"(e, t) {
      var r,
        a = SyntaxError,
        o = Function,
        l = TypeError,
        s = function (L) {
          try {
            return o('"use strict"; return (' + L + ").constructor;")();
          } catch {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, "");
        } catch {
          u = null;
        }
      var i = function () {
          throw new l();
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, i;
              } catch {
                try {
                  return u(arguments, "callee").get;
                } catch {
                  return i;
                }
              }
            })()
          : i,
        d = hs()(),
        f =
          Object.getPrototypeOf ||
          function (L) {
            return L.__proto__;
          },
        p = {},
        g = typeof Uint8Array > "u" ? r : f(Uint8Array),
        h = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": d ? f([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": p,
          "%AsyncGenerator%": p,
          "%AsyncGeneratorFunction%": p,
          "%AsyncIteratorPrototype%": p,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": p,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": d ? f(f([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !d ? r : f(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !d ? r : f(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": d ? f(""[Symbol.iterator]()) : r,
          "%Symbol%": d ? Symbol : r,
          "%SyntaxError%": a,
          "%ThrowTypeError%": c,
          "%TypedArray%": g,
          "%TypeError%": l,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        b = function L(T) {
          var Z;
          if (T === "%AsyncFunction%") Z = s("async function () {}");
          else if (T === "%GeneratorFunction%") Z = s("function* () {}");
          else if (T === "%AsyncGeneratorFunction%")
            Z = s("async function* () {}");
          else if (T === "%AsyncGenerator%") {
            var D = L("%AsyncGeneratorFunction%");
            D && (Z = D.prototype);
          } else if (T === "%AsyncIteratorPrototype%") {
            var M = L("%AsyncGenerator%");
            M && (Z = f(M.prototype));
          }
          return (h[T] = Z), Z;
        },
        A = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        w = Qn(),
        k = Mf(),
        v = w.call(Function.call, Array.prototype.concat),
        E = w.call(Function.apply, Array.prototype.splice),
        y = w.call(Function.call, String.prototype.replace),
        x = w.call(Function.call, String.prototype.slice),
        C = w.call(Function.call, RegExp.prototype.exec),
        S =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        R = function (T) {
          var Z = x(T, 0, 1),
            D = x(T, -1);
          if (Z === "%" && D !== "%")
            throw new a("invalid intrinsic syntax, expected closing `%`");
          if (D === "%" && Z !== "%")
            throw new a("invalid intrinsic syntax, expected opening `%`");
          var M = [];
          return (
            y(T, S, function (N, V, $, I) {
              M[M.length] = $ ? y(I, O, "$1") : V || N;
            }),
            M
          );
        },
        F = function (T, Z) {
          var D = T,
            M;
          if ((k(A, D) && ((M = A[D]), (D = "%" + M[0] + "%")), k(h, D))) {
            var N = h[D];
            if ((N === p && (N = b(D)), typeof N > "u" && !Z))
              throw new l(
                "intrinsic " +
                  T +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: M, name: D, value: N };
          }
          throw new a("intrinsic " + T + " does not exist!");
        };
      t.exports = function (T, Z) {
        if (typeof T != "string" || T.length === 0)
          throw new l("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof Z != "boolean")
          throw new l('"allowMissing" argument must be a boolean');
        if (C(/^%?[^%]*%?$/, T) === null)
          throw new a(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var D = R(T),
          M = D.length > 0 ? D[0] : "",
          N = F("%" + M + "%", Z),
          V = N.name,
          $ = N.value,
          I = !1,
          Y = N.alias;
        Y && ((M = Y[0]), E(D, v([0, 1], Y)));
        for (var ee = 1, G = !0; ee < D.length; ee += 1) {
          var K = D[ee],
            P = x(K, 0, 1),
            z = x(K, -1);
          if (
            (P === '"' ||
              P === "'" ||
              P === "`" ||
              z === '"' ||
              z === "'" ||
              z === "`") &&
            P !== z
          )
            throw new a("property names with quotes must have matching quotes");
          if (
            ((K === "constructor" || !G) && (I = !0),
            (M += "." + K),
            (V = "%" + M + "%"),
            k(h, V))
          )
            $ = h[V];
          else if ($ != null) {
            if (!(K in $)) {
              if (!Z)
                throw new l(
                  "base intrinsic for " +
                    T +
                    " exists, but the property is not available."
                );
              return;
            }
            if (u && ee + 1 >= D.length) {
              var q = u($, K);
              (G = !!q),
                G && "get" in q && !("originalValue" in q.get)
                  ? ($ = q.get)
                  : ($ = $[K]);
            } else (G = k($, K)), ($ = $[K]);
            G && !I && (h[V] = $);
          }
        }
        return $;
      };
    },
  }),
  Bf = Re({
    "node_modules/call-bind/index.js"(e, t) {
      var r = Qn(),
        a = bs(),
        o = a("%Function.prototype.apply%"),
        l = a("%Function.prototype.call%"),
        s = a("%Reflect.apply%", !0) || r.call(l, o),
        u = a("%Object.getOwnPropertyDescriptor%", !0),
        i = a("%Object.defineProperty%", !0),
        c = a("%Math.max%");
      if (i)
        try {
          i({}, "a", { value: 1 });
        } catch {
          i = null;
        }
      t.exports = function (p) {
        var g = s(r, l, arguments);
        if (u && i) {
          var h = u(g, "length");
          h.configurable &&
            i(g, "length", {
              value: 1 + c(0, p.length - (arguments.length - 1)),
            });
        }
        return g;
      };
      var d = function () {
        return s(r, o, arguments);
      };
      i ? i(t.exports, "apply", { value: d }) : (t.exports.apply = d);
    },
  }),
  $f = Re({
    "node_modules/call-bind/callBound.js"(e, t) {
      var r = bs(),
        a = Bf(),
        o = a(r("String.prototype.indexOf"));
      t.exports = function (s, u) {
        var i = r(s, !!u);
        return typeof i == "function" && o(s, ".prototype.") > -1 ? a(i) : i;
      };
    },
  }),
  Pf = Re({
    "node_modules/has-tostringtag/shams.js"(e, t) {
      var r = gs();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  Zf = Re({
    "node_modules/is-regex/index.js"(e, t) {
      var r = $f(),
        a = Pf()(),
        o,
        l,
        s,
        u;
      a &&
        ((o = r("Object.prototype.hasOwnProperty")),
        (l = r("RegExp.prototype.exec")),
        (s = {}),
        (i = function () {
          throw s;
        }),
        (u = { toString: i, valueOf: i }),
        typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = i));
      var i,
        c = r("Object.prototype.toString"),
        d = Object.getOwnPropertyDescriptor,
        f = "[object RegExp]";
      t.exports = a
        ? function (g) {
            if (!g || typeof g != "object") return !1;
            var h = d(g, "lastIndex"),
              b = h && o(h, "value");
            if (!b) return !1;
            try {
              l(g, u);
            } catch (A) {
              return A === s;
            }
          }
        : function (g) {
            return !g || (typeof g != "object" && typeof g != "function")
              ? !1
              : c(g) === f;
          };
    },
  }),
  jf = Re({
    "node_modules/is-function/index.js"(e, t) {
      t.exports = a;
      var r = Object.prototype.toString;
      function a(o) {
        if (!o) return !1;
        var l = r.call(o);
        return (
          l === "[object Function]" ||
          (typeof o == "function" && l !== "[object RegExp]") ||
          (typeof window < "u" &&
            (o === window.setTimeout ||
              o === window.alert ||
              o === window.confirm ||
              o === window.prompt))
        );
      }
    },
  }),
  Nf = Re({
    "node_modules/is-symbol/index.js"(e, t) {
      var r = Object.prototype.toString,
        a = hs()();
      a
        ? ((o = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (s = function (i) {
            return typeof i.valueOf() != "symbol" ? !1 : l.test(o.call(i));
          }),
          (t.exports = function (i) {
            if (typeof i == "symbol") return !0;
            if (r.call(i) !== "[object Symbol]") return !1;
            try {
              return s(i);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (i) {
            return !1;
          });
      var o, l, s;
    },
  }),
  If = Jn(Zf()),
  Hf = Jn(jf()),
  Vf = Jn(Nf());
function zf(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var qf =
    typeof global == "object" && global && global.Object === Object && global,
  Uf = qf,
  Wf = typeof self == "object" && self && self.Object === Object && self,
  Gf = Uf || Wf || Function("return this")(),
  eo = Gf,
  Yf = eo.Symbol,
  zt = Yf,
  ys = Object.prototype,
  Kf = ys.hasOwnProperty,
  Xf = ys.toString,
  ar = zt ? zt.toStringTag : void 0;
function Jf(e) {
  var t = Kf.call(e, ar),
    r = e[ar];
  try {
    e[ar] = void 0;
    var a = !0;
  } catch {}
  var o = Xf.call(e);
  return a && (t ? (e[ar] = r) : delete e[ar]), o;
}
var Qf = Jf,
  em = Object.prototype,
  tm = em.toString;
function rm(e) {
  return tm.call(e);
}
var am = rm,
  nm = "[object Null]",
  om = "[object Undefined]",
  il = zt ? zt.toStringTag : void 0;
function lm(e) {
  return e == null
    ? e === void 0
      ? om
      : nm
    : il && il in Object(e)
    ? Qf(e)
    : am(e);
}
var im = lm,
  sl = zt ? zt.prototype : void 0;
sl && sl.toString;
function sm(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vs = sm,
  um = "[object AsyncFunction]",
  cm = "[object Function]",
  dm = "[object GeneratorFunction]",
  pm = "[object Proxy]";
function fm(e) {
  if (!vs(e)) return !1;
  var t = im(e);
  return t == cm || t == dm || t == um || t == pm;
}
var mm = fm,
  gm = eo["__core-js_shared__"],
  $a = gm,
  ul = (function () {
    var e = /[^.]+$/.exec(($a && $a.keys && $a.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function hm(e) {
  return !!ul && ul in e;
}
var bm = hm,
  ym = Function.prototype,
  vm = ym.toString;
function Em(e) {
  if (e != null) {
    try {
      return vm.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var xm = Em,
  Am = /[\\^$.*+?()[\]{}|]/g,
  wm = /^\[object .+?Constructor\]$/,
  Sm = Function.prototype,
  Cm = Object.prototype,
  _m = Sm.toString,
  km = Cm.hasOwnProperty,
  Om = RegExp(
    "^" +
      _m
        .call(km)
        .replace(Am, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function Rm(e) {
  if (!vs(e) || bm(e)) return !1;
  var t = mm(e) ? Om : wm;
  return t.test(xm(e));
}
var Fm = Rm;
function Tm(e, t) {
  return e == null ? void 0 : e[t];
}
var Dm = Tm;
function Lm(e, t) {
  var r = Dm(e, t);
  return Fm(r) ? r : void 0;
}
var Es = Lm;
function Mm(e, t) {
  return e === t || (e !== e && t !== t);
}
var Bm = Mm,
  $m = Es(Object, "create"),
  Er = $m;
function Pm() {
  (this.__data__ = Er ? Er(null) : {}), (this.size = 0);
}
var Zm = Pm;
function jm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Nm = jm,
  Im = "__lodash_hash_undefined__",
  Hm = Object.prototype,
  Vm = Hm.hasOwnProperty;
function zm(e) {
  var t = this.__data__;
  if (Er) {
    var r = t[e];
    return r === Im ? void 0 : r;
  }
  return Vm.call(t, e) ? t[e] : void 0;
}
var qm = zm,
  Um = Object.prototype,
  Wm = Um.hasOwnProperty;
function Gm(e) {
  var t = this.__data__;
  return Er ? t[e] !== void 0 : Wm.call(t, e);
}
var Ym = Gm,
  Km = "__lodash_hash_undefined__";
function Xm(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = Er && t === void 0 ? Km : t),
    this
  );
}
var Jm = Xm;
function Gt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Gt.prototype.clear = Zm;
Gt.prototype.delete = Nm;
Gt.prototype.get = qm;
Gt.prototype.has = Ym;
Gt.prototype.set = Jm;
var cl = Gt;
function Qm() {
  (this.__data__ = []), (this.size = 0);
}
var eg = Qm;
function tg(e, t) {
  for (var r = e.length; r--; ) if (Bm(e[r][0], t)) return r;
  return -1;
}
var ba = tg,
  rg = Array.prototype,
  ag = rg.splice;
function ng(e) {
  var t = this.__data__,
    r = ba(t, e);
  if (r < 0) return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : ag.call(t, r, 1), --this.size, !0;
}
var og = ng;
function lg(e) {
  var t = this.__data__,
    r = ba(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ig = lg;
function sg(e) {
  return ba(this.__data__, e) > -1;
}
var ug = sg;
function cg(e, t) {
  var r = this.__data__,
    a = ba(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
}
var dg = cg;
function Yt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Yt.prototype.clear = eg;
Yt.prototype.delete = og;
Yt.prototype.get = ig;
Yt.prototype.has = ug;
Yt.prototype.set = dg;
var pg = Yt,
  fg = Es(eo, "Map"),
  mg = fg;
function gg() {
  (this.size = 0),
    (this.__data__ = {
      hash: new cl(),
      map: new (mg || pg)(),
      string: new cl(),
    });
}
var hg = gg;
function bg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var yg = bg;
function vg(e, t) {
  var r = e.__data__;
  return yg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ya = vg;
function Eg(e) {
  var t = ya(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var xg = Eg;
function Ag(e) {
  return ya(this, e).get(e);
}
var wg = Ag;
function Sg(e) {
  return ya(this, e).has(e);
}
var Cg = Sg;
function _g(e, t) {
  var r = ya(this, e),
    a = r.size;
  return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
}
var kg = _g;
function Kt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Kt.prototype.clear = hg;
Kt.prototype.delete = xg;
Kt.prototype.get = wg;
Kt.prototype.has = Cg;
Kt.prototype.set = kg;
var xs = Kt,
  Og = "Expected a function";
function to(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(Og);
  var r = function () {
    var a = arguments,
      o = t ? t.apply(this, a) : a[0],
      l = r.cache;
    if (l.has(o)) return l.get(o);
    var s = e.apply(this, a);
    return (r.cache = l.set(o, s) || l), s;
  };
  return (r.cache = new (to.Cache || xs)()), r;
}
to.Cache = xs;
var Rg = to,
  Fg = 500;
function Tg(e) {
  var t = Rg(e, function (a) {
      return r.size === Fg && r.clear(), a;
    }),
    r = t.cache;
  return t;
}
var Dg = Tg,
  Lg =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Mg = /\\(\\)?/g;
Dg(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(""),
    e.replace(Lg, function (r, a, o, l) {
      t.push(o ? l.replace(Mg, "$1") : a || r);
    }),
    t
  );
});
var Bg = zf,
  $g = (e) => {
    let t = null,
      r = !1,
      a = !1,
      o = !1,
      l = "";
    if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
      for (let s = 0; s < e.length; s += 1)
        !t && !r && !a && !o
          ? e[s] === '"' || e[s] === "'" || e[s] === "`"
            ? (t = e[s])
            : e[s] === "/" && e[s + 1] === "*"
            ? (r = !0)
            : e[s] === "/" && e[s + 1] === "/"
            ? (a = !0)
            : e[s] === "/" && e[s + 1] !== "/" && (o = !0)
          : (t &&
              ((e[s] === t && e[s - 1] !== "\\") ||
                (e[s] ===
                  `
` &&
                  t !== "`")) &&
              (t = null),
            o &&
              ((e[s] === "/" && e[s - 1] !== "\\") ||
                e[s] ===
                  `
`) &&
              (o = !1),
            r && e[s - 1] === "/" && e[s - 2] === "*" && (r = !1),
            a &&
              e[s] ===
                `
` &&
              (a = !1)),
          !r && !a && (l += e[s]);
    else l = e;
    return l;
  },
  Pg = Ct(1e4)((e) => $g(e).replace(/\n\s*/g, "").trim()),
  Zg = function (t, r) {
    const a = r.slice(0, r.indexOf("{")),
      o = r.slice(r.indexOf("{"));
    if (a.includes("=>") || a.includes("function")) return r;
    let l = a;
    return (l = l.replace(t, "function")), l + o;
  },
  jg = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function As(e) {
  if (!Bg(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < "u" && e instanceof Event && ((t = Df(t)), (r = !0)),
    (t = Object.keys(t).reduce((a, o) => {
      try {
        t[o] && t[o].toJSON, (a[o] = t[o]);
      } catch {
        r = !0;
      }
      return a;
    }, {})),
    r ? t : e
  );
}
var Ng = function (t) {
    let r, a, o, l;
    return function (u, i) {
      try {
        if (u === "")
          return (
            (l = []), (r = new Map([[i, "[]"]])), (a = new Map()), (o = []), i
          );
        const c = a.get(this) || this;
        for (; o.length && c !== o[0]; ) o.shift(), l.pop();
        if (typeof i == "boolean") return i;
        if (i === void 0) return t.allowUndefined ? "_undefined_" : void 0;
        if (i === null) return null;
        if (typeof i == "number")
          return i === -1 / 0
            ? "_-Infinity_"
            : i === 1 / 0
            ? "_Infinity_"
            : Number.isNaN(i)
            ? "_NaN_"
            : i;
        if (typeof i == "bigint") return `_bigint_${i.toString()}`;
        if (typeof i == "string")
          return jg.test(i) ? (t.allowDate ? `_date_${i}` : void 0) : i;
        if ((0, If.default)(i))
          return t.allowRegExp ? `_regexp_${i.flags}|${i.source}` : void 0;
        if ((0, Hf.default)(i)) {
          if (!t.allowFunction) return;
          const { name: f } = i,
            p = i.toString();
          return p.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${f}|${(() => {}).toString()}`
            : `_function_${f}|${Pg(Zg(u, p))}`;
        }
        if ((0, Vf.default)(i)) {
          if (!t.allowSymbol) return;
          const f = Symbol.keyFor(i);
          return f !== void 0
            ? `_gsymbol_${f}`
            : `_symbol_${i.toString().slice(7, -1)}`;
        }
        if (o.length >= t.maxDepth)
          return Array.isArray(i) ? `[Array(${i.length})]` : "[Object]";
        if (i === this) return `_duplicate_${JSON.stringify(l)}`;
        if (i instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(i.cause ? { cause: i.cause } : {}),
              ...i,
              name: i.name,
              message: i.message,
              stack: i.stack,
              "_constructor-name_": i.constructor.name,
            },
          };
        if (
          i.constructor &&
          i.constructor.name &&
          i.constructor.name !== "Object" &&
          !Array.isArray(i) &&
          !t.allowClass
        )
          return;
        const d = r.get(i);
        if (!d) {
          const f = Array.isArray(i) ? i : As(i);
          if (
            i.constructor &&
            i.constructor.name &&
            i.constructor.name !== "Object" &&
            !Array.isArray(i) &&
            t.allowClass
          )
            try {
              Object.assign(f, { "_constructor-name_": i.constructor.name });
            } catch {}
          return (
            l.push(u),
            o.unshift(f),
            r.set(i, JSON.stringify(l)),
            i !== f && a.set(i, f),
            f
          );
        }
        return `_duplicate_${d}`;
      } catch {
        return;
      }
    };
  },
  Ig = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  Hg = (e, t = {}) => {
    const r = { ...Ig, ...t };
    return JSON.stringify(As(e), Ng(r), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ const { global: Ge } = __STORYBOOK_MODULE_GLOBAL__,
  { deprecate: Se, once: i3, logger: s3 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
__STORYBOOK_MODULE_PREVIEW_API__;
const {
  STORY_ARGS_UPDATED: u3,
  UPDATE_STORY_ARGS: c3,
  RESET_STORY_ARGS: d3,
  GLOBALS_UPDATED: p3,
  NAVIGATE_URL: Vg,
} = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var zg = _.div(Q, ({ theme: e }) => ({
    backgroundColor:
      e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: "25px 0 40px",
    color: J(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  qg = (e) =>
    n.createElement(zg, { ...e, className: "docblock-emptyblock sb-unstyled" }),
  Ug = _(Vn)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  Wg = _.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    margin: "25px 0 40px",
    padding: "20px 20px 20px 22px",
  })),
  Pr = _.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: "60%",
    [`&:first-child${Ua}`]: { margin: 0 },
  })),
  Gg = () =>
    n.createElement(
      Wg,
      null,
      n.createElement(Pr, null),
      n.createElement(Pr, { style: { width: "80%" } }),
      n.createElement(Pr, { style: { width: "30%" } }),
      n.createElement(Pr, { style: { width: "80%" } })
    ),
  ws = ({
    isLoading: e,
    error: t,
    language: r,
    code: a,
    dark: o,
    format: l,
    ...s
  }) => {
    if (e) return n.createElement(Gg, null);
    if (t) return n.createElement(qg, null, t);
    let u = n.createElement(
      Ug,
      {
        bordered: !0,
        copyable: !0,
        format: l,
        language: r,
        className: "docblock-source sb-unstyled",
        ...s,
      },
      a
    );
    if (typeof o > "u") return u;
    let i = o ? Ia.dark : Ia.light;
    return n.createElement(Cu, { theme: ec(i) }, u);
  };
ws.defaultProps = { format: !1 };
var ne = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  ro = 600;
_.h1(Q, ({ theme: e }) => ({
  color: e.color.defaultText,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  lineHeight: "32px",
  [`@media (min-width: ${ro}px)`]: {
    fontSize: e.typography.size.l1,
    lineHeight: "36px",
    marginBottom: "16px",
  },
}));
_.h2(Q, ({ theme: e }) => ({
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s3,
  lineHeight: "20px",
  borderBottom: "none",
  marginBottom: 15,
  [`@media (min-width: ${ro}px)`]: {
    fontSize: e.typography.size.m1,
    lineHeight: "28px",
    marginBottom: 24,
  },
  color: J(0.25, e.color.defaultText),
}));
_.div(({ theme: e }) => {
  let t = {
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch",
    },
    r = {
      margin: "20px 0 8px",
      padding: 0,
      cursor: "text",
      position: "relative",
      color: e.color.defaultText,
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& code": { fontSize: "inherit" },
    },
    a = {
      lineHeight: 1,
      margin: "0 2px",
      padding: "3px 5px",
      whiteSpace: "nowrap",
      borderRadius: 3,
      fontSize: e.typography.size.s2 - 1,
      border:
        e.base === "light"
          ? `1px solid ${e.color.mediumlight}`
          : `1px solid ${e.color.darker}`,
      color:
        e.base === "light"
          ? J(0.1, e.color.defaultText)
          : J(0.3, e.color.defaultText),
      backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
    };
  return {
    maxWidth: 1e3,
    width: "100%",
    [ne("a")]: {
      ...t,
      fontSize: "inherit",
      lineHeight: "24px",
      color: e.color.secondary,
      textDecoration: "none",
      "&.absent": { color: "#cc0000" },
      "&.anchor": {
        display: "block",
        paddingLeft: 30,
        marginLeft: -30,
        cursor: "pointer",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      },
    },
    [ne("blockquote")]: {
      ...t,
      margin: "16px 0",
      borderLeft: `4px solid ${e.color.medium}`,
      padding: "0 15px",
      color: e.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    [ne("div")]: t,
    [ne("dl")]: {
      ...t,
      margin: "16px 0",
      padding: 0,
      "& dt": {
        fontSize: "14px",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 0,
        margin: "16px 0 4px",
      },
      "& dt:first-of-type": { padding: 0 },
      "& dt > :first-of-type": { marginTop: 0 },
      "& dt > :last-child": { marginBottom: 0 },
      "& dd": { margin: "0 0 16px", padding: "0 15px" },
      "& dd > :first-of-type": { marginTop: 0 },
      "& dd > :last-child": { marginBottom: 0 },
    },
    [ne("h1")]: {
      ...t,
      ...r,
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    [ne("h2")]: {
      ...t,
      ...r,
      fontSize: `${e.typography.size.m2}px`,
      paddingBottom: 4,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    [ne("h3")]: {
      ...t,
      ...r,
      fontSize: `${e.typography.size.m1}px`,
      fontWeight: e.typography.weight.bold,
    },
    [ne("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
    [ne("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
    [ne("h6")]: {
      ...t,
      ...r,
      fontSize: `${e.typography.size.s2}px`,
      color: e.color.dark,
    },
    [ne("hr")]: {
      border: "0 none",
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    [ne("img")]: { maxWidth: "100%" },
    [ne("li")]: {
      ...t,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      lineHeight: "24px",
      "& + li": { marginTop: ".25em" },
      "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
      "& code": a,
    },
    [ne("ol")]: {
      ...t,
      margin: "16px 0",
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
    },
    [ne("p")]: {
      ...t,
      margin: "16px 0",
      fontSize: e.typography.size.s2,
      lineHeight: "24px",
      color: e.color.defaultText,
      "& code": a,
    },
    [ne("pre")]: {
      ...t,
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0",
      "&:not(.prismjs)": {
        background: "transparent",
        border: "none",
        borderRadius: 0,
        padding: 0,
        margin: 0,
      },
      "& pre, &.prismjs": {
        padding: 15,
        margin: 0,
        whiteSpace: "pre-wrap",
        color: "inherit",
        fontSize: "13px",
        lineHeight: "19px",
        code: { color: "inherit", fontSize: "inherit" },
      },
      "& code": { whiteSpace: "pre" },
      "& code, & tt": { border: "none" },
    },
    [ne("span")]: {
      ...t,
      "&.frame": {
        display: "block",
        overflow: "hidden",
        "& > span": {
          border: `1px solid ${e.color.medium}`,
          display: "block",
          float: "left",
          overflow: "hidden",
          margin: "13px 0 0",
          padding: 7,
          width: "auto",
        },
        "& span img": { display: "block", float: "left" },
        "& span span": {
          clear: "both",
          color: e.color.darkest,
          display: "block",
          padding: "5px 0 0",
        },
      },
      "&.align-center": {
        display: "block",
        overflow: "hidden",
        clear: "both",
        "& > span": {
          display: "block",
          overflow: "hidden",
          margin: "13px auto 0",
          textAlign: "center",
        },
        "& span img": { margin: "0 auto", textAlign: "center" },
      },
      "&.align-right": {
        display: "block",
        overflow: "hidden",
        clear: "both",
        "& > span": {
          display: "block",
          overflow: "hidden",
          margin: "13px 0 0",
          textAlign: "right",
        },
        "& span img": { margin: 0, textAlign: "right" },
      },
      "&.float-left": {
        display: "block",
        marginRight: 13,
        overflow: "hidden",
        float: "left",
        "& span": { margin: "13px 0 0" },
      },
      "&.float-right": {
        display: "block",
        marginLeft: 13,
        overflow: "hidden",
        float: "right",
        "& > span": {
          display: "block",
          overflow: "hidden",
          margin: "13px auto 0",
          textAlign: "right",
        },
      },
    },
    [ne("table")]: {
      ...t,
      margin: "16px 0",
      fontSize: e.typography.size.s2,
      lineHeight: "24px",
      padding: 0,
      borderCollapse: "collapse",
      "& tr": {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: e.appContentBg,
        margin: 0,
        padding: 0,
      },
      "& tr:nth-of-type(2n)": {
        backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
      },
      "& tr th": {
        fontWeight: "bold",
        color: e.color.defaultText,
        border: `1px solid ${e.appBorderColor}`,
        margin: 0,
        padding: "6px 13px",
      },
      "& tr td": {
        border: `1px solid ${e.appBorderColor}`,
        color: e.color.defaultText,
        margin: 0,
        padding: "6px 13px",
      },
      "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
      "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
    },
    [ne("ul")]: {
      ...t,
      margin: "16px 0",
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
      listStyle: "disc",
    },
  };
});
_.div(({ theme: e }) => ({
  background: e.background.content,
  display: "flex",
  justifyContent: "center",
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
  gap: "3rem",
  [`@media (min-width: ${ro}px)`]: {},
}));
var va = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    border: `1px solid ${e.appBorderColor}`,
  }),
  Yg = ({ zoom: e, resetZoom: t }) =>
    n.createElement(
      n.Fragment,
      null,
      n.createElement(
        xt,
        {
          key: "zoomin",
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: "Zoom in",
        },
        n.createElement(De, { icon: "zoom" })
      ),
      n.createElement(
        xt,
        {
          key: "zoomout",
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: "Zoom out",
        },
        n.createElement(De, { icon: "zoomout" })
      ),
      n.createElement(
        xt,
        {
          key: "zoomreset",
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: "Reset zoom",
        },
        n.createElement(De, { icon: "zoomreset" })
      )
    ),
  Kg = _(ga)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    transition: "transform .2s linear",
  }),
  Xg = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: a,
    resetZoom: o,
    ...l
  }) =>
    n.createElement(
      Kg,
      { ...l },
      n.createElement(
        m.Fragment,
        { key: "left" },
        e
          ? [1, 2, 3].map((s) => n.createElement(ls, { key: s }))
          : n.createElement(Yg, { zoom: a, resetZoom: o })
      )
    ),
  Ss = m.createContext({ scale: 1 }),
  { window: Jg } = Ge,
  Qg = class extends m.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = Jg.document.getElementById(e);
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: "top left",
          }),
        !1
      );
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }
    render() {
      let {
        id: e,
        title: t,
        src: r,
        allowFullScreen: a,
        scale: o,
        ...l
      } = this.props;
      return n.createElement("iframe", {
        id: e,
        title: t,
        src: r,
        ...(a ? { allow: "fullscreen" } : {}),
        loading: "lazy",
        ...l,
      });
    }
  },
  { PREVIEW_URL: eh } = Ge,
  th = eh || "iframe.html",
  sn = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
  rh = (e) => {
    let t = m.useRef(),
      [r, a] = m.useState(!0),
      [o, l] = m.useState(),
      {
        story: s,
        height: u,
        autoplay: i,
        forceInitialArgs: c,
        renderStoryToElement: d,
      } = e;
    return (
      m.useEffect(() => {
        if (!(s && t.current)) return () => {};
        let f = t.current,
          p = d(
            s,
            f,
            {
              showMain: () => {},
              showError: ({ title: g, description: h }) =>
                l(new Error(`${g} - ${h}`)),
              showException: (g) => l(g),
            },
            { autoplay: i, forceInitialArgs: c }
          );
        return (
          a(!1),
          () => {
            Promise.resolve().then(() => p());
          }
        );
      }, [i, d, s]),
      o
        ? n.createElement("pre", null, n.createElement(Qi, { error: o }))
        : n.createElement(
            n.Fragment,
            null,
            u
              ? n.createElement(
                  "style",
                  null,
                  `#${sn(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && n.createElement(ao, null),
            n.createElement("div", {
              ref: t,
              id: `${sn(e)}-inner`,
              "data-name": s.name,
            })
          )
    );
  },
  ah = ({ story: e, height: t = "500px" }) =>
    n.createElement(
      "div",
      { style: { width: "100%", height: t } },
      n.createElement(Ss.Consumer, null, ({ scale: r }) =>
        n.createElement(Qg, {
          key: "iframe",
          id: `iframe--${e.id}`,
          title: e.name,
          src: cs(th, e.id, { viewMode: "story" }),
          allowFullScreen: !0,
          scale: r,
          style: { width: "100%", height: "100%", border: "0 none" },
        })
      )
    ),
  nh = (e) => {
    let { inline: t } = e;
    return n.createElement(
      "div",
      {
        id: sn(e),
        className: "sb-story sb-unstyled",
        "data-story-block": "true",
      },
      t ? n.createElement(rh, { ...e }) : n.createElement(ah, { ...e })
    );
  },
  ao = () => n.createElement(us, null),
  oh = _.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      display: e || !t ? "block" : "flex",
      position: "relative",
      flexWrap: "wrap",
      overflow: "auto",
      flexDirection: e ? "column" : "row",
      "& .innerZoomElementWrapper > *": e
        ? {
            width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "block",
          }
        : {
            maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "inline-block",
          },
    }),
    ({ layout: e = "padded" }) =>
      e === "centered" || e === "padded"
        ? {
            padding: "30px 20px",
            "& .innerZoomElementWrapper > *": {
              width: "auto",
              border: "10px solid transparent!important",
            },
          }
        : {},
    ({ layout: e = "padded" }) =>
      e === "centered"
        ? {
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            ".innerZoomElementWrapper > *": {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {}
  ),
  dl = _(ws)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: "none",
    background:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.85)"
        : Ie(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : Ie(0.05, e.background.content),
    },
  })),
  lh = _.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: "relative",
      overflow: "hidden",
      margin: "25px 0 40px",
      ...va(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      "h3 + &": { marginTop: "16px" },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  ih = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: "No code available",
            className: "docblock-code-toggle docblock-code-toggle--disabled",
            disabled: !0,
            onClick: () => r(!1),
          },
        };
      case t:
        return {
          source: n.createElement(dl, { ...e, dark: !0 }),
          actionItem: {
            title: "Hide code",
            className: "docblock-code-toggle docblock-code-toggle--expanded",
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: n.createElement(dl, { ...e, dark: !0 }),
          actionItem: {
            title: "Show code",
            className: "docblock-code-toggle",
            onClick: () => r(!0),
          },
        };
    }
  };
function sh(e) {
  if (m.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var uh = _(Xg)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
  ch = _.div({ overflow: "hidden", position: "relative" }),
  un = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: a,
    withSource: o,
    withToolbar: l = !1,
    isExpanded: s = !1,
    additionalActions: u,
    className: i,
    layout: c = "padded",
    ...d
  }) => {
    let [f, p] = m.useState(s),
      { source: g, actionItem: h } = ih(o, f, p),
      [b, A] = m.useState(1),
      w = [i].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
      k = o ? [h] : [],
      [v, E] = m.useState(u ? [...u] : []),
      y = [...k, ...v],
      { window: x } = Ge,
      C = m.useCallback(async (O) => {
        let { createCopyToClipboardFunction: R } = await At(
          () => Promise.resolve().then(() => wf),
          void 0,
          import.meta.url
        );
        R();
      }, []),
      S = (O) => {
        let R = x.getSelection();
        (R && R.type === "Range") ||
          (O.preventDefault(),
          v.filter((F) => F.title === "Copied").length === 0 &&
            C(g.props.code).then(() => {
              E([...v, { title: "Copied", onClick: () => {} }]),
                x.setTimeout(
                  () => E(v.filter((F) => F.title !== "Copied")),
                  1500
                );
            }));
      };
    return n.createElement(
      lh,
      { withSource: o, withToolbar: l, ...d, className: w.join(" ") },
      l &&
        n.createElement(uh, {
          isLoading: e,
          border: !0,
          zoom: (O) => A(b * O),
          resetZoom: () => A(1),
          storyId: sh(a),
          baseUrl: "./iframe.html",
        }),
      n.createElement(
        Ss.Provider,
        { value: { scale: b } },
        n.createElement(
          ch,
          { className: "docs-story", onCopyCapture: o && S },
          n.createElement(
            oh,
            { isColumn: t || !Array.isArray(a), columns: r, layout: c },
            n.createElement(
              Ji.Element,
              { scale: b },
              Array.isArray(a)
                ? a.map((O, R) => n.createElement("div", { key: R }, O))
                : n.createElement("div", null, a)
            )
          ),
          n.createElement(kn, { actionItems: y })
        )
      ),
      o && f && g
    );
  },
  dh = _(un)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })),
  ph = () =>
    n.createElement(
      dh,
      { isLoading: !0, withToolbar: !0 },
      n.createElement(ao, null)
    );
_.table(({ theme: e }) => ({
  "&&": {
    borderCollapse: "collapse",
    borderSpacing: 0,
    border: "none",
    tr: { border: "none !important", background: "none" },
    "td, th": { padding: 0, border: "none", width: "auto!important" },
    marginTop: 0,
    marginBottom: 0,
    "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
    "th:last-of-type, td:last-of-type": { paddingRight: 0 },
    td: {
      paddingTop: 0,
      paddingBottom: 4,
      "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
    },
    tbody: { boxShadow: "none", border: "none" },
    code: nt({ theme: e }),
    div: { span: { fontWeight: "bold" } },
    "& code": {
      margin: 0,
      display: "inline-block",
      fontSize: e.typography.size.s1,
    },
  },
}));
_.div(({ isExpanded: e }) => ({
  display: "flex",
  flexDirection: e ? "column" : "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  marginBottom: "-4px",
  minWidth: 100,
}));
_.span(nt, ({ theme: e, simple: t = !1 }) => ({
  flex: "0 0 auto",
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  wordBreak: "break-word",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: 0,
  marginRight: "4px",
  marginBottom: "4px",
  paddingTop: "2px",
  paddingBottom: "2px",
  lineHeight: "13px",
  ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
}));
_.button(({ theme: e }) => ({
  fontFamily: e.typography.fonts.mono,
  color: e.color.secondary,
  marginBottom: "4px",
  background: "none",
  border: "none",
}));
_.div(nt, ({ theme: e }) => ({
  fontFamily: e.typography.fonts.mono,
  color: e.color.secondary,
  fontSize: e.typography.size.s1,
  margin: 0,
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
}));
_.div(({ theme: e, width: t }) => ({
  width: t,
  minWidth: 200,
  maxWidth: 800,
  padding: 15,
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  boxSizing: "content-box",
  "& code": { padding: "0 !important" },
}));
_(De)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 });
Ct(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
});
_.label(({ theme: e }) => ({
  lineHeight: "18px",
  alignItems: "center",
  marginBottom: 8,
  display: "inline-block",
  position: "relative",
  whiteSpace: "nowrap",
  background: e.boolean.background,
  borderRadius: "3em",
  padding: 1,
  input: {
    appearance: "none",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    borderRadius: "3em",
    "&:focus": {
      outline: "none",
      boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
    },
  },
  span: {
    textAlign: "center",
    fontSize: e.typography.size.s1,
    fontWeight: e.typography.weight.bold,
    lineHeight: "1",
    cursor: "pointer",
    display: "inline-block",
    padding: "7px 15px",
    transition: "all 100ms ease-out",
    userSelect: "none",
    borderRadius: "3em",
    color: J(0.5, e.color.defaultText),
    background: "transparent",
    "&:hover": { boxShadow: `${Dr(0.3, e.appBorderColor)} 0 0 0 1px inset` },
    "&:active": {
      boxShadow: `${Dr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
      color: Dr(1, e.appBorderColor),
    },
    "&:first-of-type": { paddingRight: 8 },
    "&:last-of-type": { paddingLeft: 8 },
  },
  "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
    {
      background: e.boolean.selectedBackground,
      boxShadow:
        e.base === "light"
          ? `${Dr(0.1, e.appBorderColor)} 0 0 2px`
          : `${e.appBorderColor} 0 0 0 1px`,
      color: e.color.defaultText,
      padding: "7px 15px",
    },
}));
_.div(({ theme: e }) => ({
  flex: 1,
  display: "flex",
  input: {
    marginLeft: 10,
    flex: 1,
    height: 32,
    "&::-webkit-calendar-picker-indicator": {
      opacity: 0.5,
      height: 12,
      filter: e.base === "light" ? void 0 : "invert(1)",
    },
  },
  "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
  "input:last-of-type": { flexGrow: 3 },
}));
_.label({ display: "flex" });
_.div(({ isInline: e }) =>
  e
    ? {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        label: { display: "inline-flex", marginRight: 15 },
      }
    : { label: { display: "flex" } }
);
_.span({});
_.label({
  lineHeight: "20px",
  alignItems: "center",
  marginBottom: 8,
  "&:last-child": { marginBottom: 0 },
  input: { margin: 0, marginRight: 6 },
});
_.div(({ isInline: e }) =>
  e
    ? {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        label: { display: "inline-flex", marginRight: 15 },
      }
    : { label: { display: "flex" } }
);
_.span({});
_.label({
  lineHeight: "20px",
  alignItems: "center",
  marginBottom: 8,
  "&:last-child": { marginBottom: 0 },
  input: { margin: 0, marginRight: 6 },
});
var fh = {
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative",
};
_.select(({ theme: e }) => ({
  ...fh,
  boxSizing: "border-box",
  position: "relative",
  padding: "6px 10px",
  width: "100%",
  color: e.input.color || "inherit",
  background: e.input.background,
  borderRadius: e.input.borderRadius,
  boxShadow: `${e.input.border} 0 0 0 1px inset`,
  fontSize: e.typography.size.s2 - 1,
  lineHeight: "20px",
  "&:focus": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    outline: "none",
  },
  "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
  "::placeholder": { color: e.textMutedColor },
  "&[multiple]": {
    overflow: "auto",
    padding: 0,
    option: {
      display: "block",
      padding: "6px 10px",
      marginLeft: 1,
      marginRight: 1,
    },
  },
}));
_.span(({ theme: e }) => ({
  display: "inline-block",
  lineHeight: "normal",
  overflow: "hidden",
  position: "relative",
  verticalAlign: "top",
  width: "100%",
  svg: {
    position: "absolute",
    zIndex: 1,
    pointerEvents: "none",
    height: "12px",
    marginTop: "-6px",
    right: "12px",
    top: "50%",
    fill: e.textMutedColor,
    path: { fill: e.textMutedColor },
  },
}));
var no = "value",
  mh = "key",
  gh = "Error",
  hh = "Object",
  bh = "Array",
  yh = "String",
  vh = "Number",
  Eh = "Boolean",
  xh = "Date",
  Ah = "Null",
  wh = "Undefined",
  Sh = "Function",
  Ch = "Symbol",
  Cs = "ADD_DELTA_TYPE",
  _s = "REMOVE_DELTA_TYPE",
  ks = "UPDATE_DELTA_TYPE";
function bt(e) {
  return e !== null &&
    typeof e == "object" &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(e).slice(8, -1);
}
function Os(e, t) {
  let r = bt(e),
    a = bt(t);
  return (r === "Function" || a === "Function") && a !== r;
}
var oo = class extends m.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this));
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(),
      r && t && typeof t.focus == "function" && t.focus(),
      document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: a,
        deep: o,
      } = this.props,
      { inputRefKey: l, inputRefValue: s } = this.state,
      u = {};
    if (!t) {
      if (!l.value) return;
      u.key = l.value;
    }
    (u.newValue = r(!1, a, o, u.key, s.value)), e(u);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: a,
        inputElementGenerator: o,
        keyPath: l,
        deep: s,
      } = this.props,
      u = m.cloneElement(r, { onClick: this.onSubmit }),
      i = m.cloneElement(a, { onClick: e }),
      c = o(no, l, s),
      d = m.cloneElement(c, { placeholder: "Value", ref: this.refInputValue }),
      f = null;
    if (!t) {
      let p = o(mh, l, s);
      f = m.cloneElement(p, { placeholder: "Key", ref: this.refInputKey });
    }
    return n.createElement(
      "span",
      { className: "rejt-add-value-node" },
      f,
      d,
      i,
      u
    );
  }
};
oo.defaultProps = {
  onlyValue: !1,
  addButtonElement: n.createElement("button", null, "+"),
  cancelButtonElement: n.createElement("button", null, "c"),
};
var Rs = class extends m.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: a } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: o } = this.props,
      l = a.length;
    o(a[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: a, keyPath: o, nextDeep: l } = this.state,
        s = a[e];
      t(e, o, l, s)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: s, type: _s };
          a.splice(e, 1), this.setState({ data: a });
          let { onUpdate: i, onDeltaUpdate: c } = this.props;
          i(o[o.length - 1], a), c(u);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: a } = this.state,
      { beforeAddAction: o, logger: l } = this.props;
    o(t.length, r, a, e)
      .then(() => {
        let s = [...t, e];
        this.setState({ data: s }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: i } = this.props;
        u(r[r.length - 1], s),
          i({ type: Cs, keyPath: r, deep: a, key: s.length - 1, newValue: e });
      })
      .catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, a) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: s, nextDeep: u } = this.state,
        i = l[e];
      o(e, s, u, i, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(s[s.length - 1], l),
            d({
              type: ks,
              keyPath: s,
              deep: u,
              key: e,
              newValue: t,
              oldValue: i,
            }),
            r(void 0);
        })
        .catch(a);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: a } = this.state,
      {
        handleRemove: o,
        readOnly: l,
        getStyle: s,
        dataType: u,
        minusMenuElement: i,
      } = this.props,
      { minus: c, collapsed: d } = s(e, t, r, a, u),
      f = l(e, t, r, a, u),
      p = m.cloneElement(i, {
        onClick: o,
        className: "rejt-minus-menu",
        style: c,
      });
    return n.createElement(
      "span",
      { className: "rejt-collapsed" },
      n.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: d,
          onClick: this.handleCollapseMode,
        },
        "[...] ",
        t.length,
        " ",
        t.length === 1 ? "item" : "items"
      ),
      !f && p
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: a,
        addFormVisible: o,
        nextDeep: l,
      } = this.state,
      {
        isCollapsed: s,
        handleRemove: u,
        onDeltaUpdate: i,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: p,
        cancelButtonElement: g,
        editButtonElement: h,
        inputElementGenerator: b,
        textareaElementGenerator: A,
        minusMenuElement: w,
        plusMenuElement: k,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: y,
        logger: x,
        onSubmitValueParser: C,
      } = this.props,
      { minus: S, plus: O, delimiter: R, ul: F, addForm: L } = d(e, t, r, a, f),
      T = c(e, t, r, a, f),
      Z = m.cloneElement(k, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: O,
      }),
      D = m.cloneElement(w, {
        onClick: u,
        className: "rejt-minus-menu",
        style: S,
      }),
      M = !0,
      N = "[",
      V = "]";
    return n.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      n.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: R },
        N
      ),
      !o && Z,
      n.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: F },
        t.map(($, I) =>
          n.createElement(Ea, {
            key: I,
            name: I.toString(),
            data: $,
            keyPath: r,
            deep: l,
            isCollapsed: s,
            handleRemove: this.handleRemoveItem(I),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: i,
            readOnly: c,
            getStyle: d,
            addButtonElement: p,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: b,
            textareaElementGenerator: A,
            minusMenuElement: w,
            plusMenuElement: k,
            beforeRemoveAction: v,
            beforeAddAction: E,
            beforeUpdateAction: y,
            logger: x,
            onSubmitValueParser: C,
          })
        )
      ),
      !T &&
        o &&
        n.createElement(
          "div",
          { className: "rejt-add-form", style: L },
          n.createElement(oo, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: M,
            addButtonElement: p,
            cancelButtonElement: g,
            inputElementGenerator: b,
            keyPath: r,
            deep: a,
            onSubmitValueParser: C,
          })
        ),
      n.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: R },
        V
      ),
      !T && D
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: a, deep: o } = this.state,
      { dataType: l, getStyle: s } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      i = s(e, r, a, o, l);
    return n.createElement(
      "div",
      { className: "rejt-array-node" },
      n.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        n.createElement(
          "span",
          { className: "rejt-name", style: i.name },
          e,
          " :",
          " "
        )
      ),
      u
    );
  }
};
Rs.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: n.createElement("span", null, " - "),
  plusMenuElement: n.createElement("span", null, " + "),
};
var Fs = class extends m.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: a,
        keyPath: o,
        deep: l,
      } = this.state,
      { readOnly: s, dataType: u } = this.props,
      i = s(r, a, o, l, u);
    e && !i && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: a,
        keyPath: o,
      } = this.props,
      { inputRef: l, name: s, deep: u } = this.state;
    if (!l) return;
    let i = a(!0, o, u, s, l.value);
    e({ value: i, key: s })
      .then(() => {
        Os(t, i) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: a, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: s,
        readOnly: u,
        dataType: i,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        textareaElementGenerator: p,
        minusMenuElement: g,
        keyPath: h,
      } = this.props,
      b = c(e, s, a, o, i),
      A = null,
      w = null,
      k = u(e, s, a, o, i);
    if (r && !k) {
      let v = p(no, h, o, e, s, i),
        E = m.cloneElement(d, { onClick: this.handleEdit }),
        y = m.cloneElement(f, { onClick: this.handleCancelEdit }),
        x = m.cloneElement(v, { ref: this.refInput, defaultValue: s });
      (A = n.createElement(
        "span",
        { className: "rejt-edit-form", style: b.editForm },
        x,
        " ",
        y,
        E
      )),
        (w = null);
    } else {
      A = n.createElement(
        "span",
        {
          className: "rejt-value",
          style: b.value,
          onClick: k ? null : this.handleEditMode,
        },
        t
      );
      let v = m.cloneElement(g, {
        onClick: l,
        className: "rejt-minus-menu",
        style: b.minus,
      });
      w = k ? null : v;
    }
    return n.createElement(
      "li",
      { className: "rejt-function-value-node", style: b.li },
      n.createElement(
        "span",
        { className: "rejt-name", style: b.name },
        e,
        " :",
        " "
      ),
      A,
      w
    );
  }
};
Fs.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: n.createElement("button", null, "e"),
  cancelButtonElement: n.createElement("button", null, "c"),
  minusMenuElement: n.createElement("span", null, " - "),
};
var Ea = class extends m.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep,
      });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: a } = this.state,
      {
        isCollapsed: o,
        handleRemove: l,
        handleUpdateValue: s,
        onUpdate: u,
        onDeltaUpdate: i,
        readOnly: c,
        getStyle: d,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: g,
        inputElementGenerator: h,
        textareaElementGenerator: b,
        minusMenuElement: A,
        plusMenuElement: w,
        beforeRemoveAction: k,
        beforeAddAction: v,
        beforeUpdateAction: E,
        logger: y,
        onSubmitValueParser: x,
      } = this.props,
      C = () => !0,
      S = bt(e);
    switch (S) {
      case gh:
        return n.createElement(cn, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: i,
          readOnly: C,
          dataType: S,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: A,
          plusMenuElement: w,
          beforeRemoveAction: k,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: x,
        });
      case hh:
        return n.createElement(cn, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: A,
          plusMenuElement: w,
          beforeRemoveAction: k,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: x,
        });
      case bh:
        return n.createElement(Rs, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: A,
          plusMenuElement: w,
          beforeRemoveAction: k,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: x,
        });
      case yh:
        return n.createElement(lt, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case vh:
        return n.createElement(lt, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case Eh:
        return n.createElement(lt, {
          name: t,
          value: e ? "true" : "false",
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case xh:
        return n.createElement(lt, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: C,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case Ah:
        return n.createElement(lt, {
          name: t,
          value: "null",
          originalValue: "null",
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case wh:
        return n.createElement(lt, {
          name: t,
          value: "undefined",
          originalValue: "undefined",
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case Sh:
        return n.createElement(Fs, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          textareaElementGenerator: b,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      case Ch:
        return n.createElement(lt, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: s,
          readOnly: C,
          dataType: S,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: A,
          logger: y,
          onSubmitValueParser: x,
        });
      default:
        return null;
    }
  }
};
Ea.defaultProps = { keyPath: [], deep: 0 };
var cn = class extends m.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    (this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: a } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: o } = this.props,
      l = a.length;
    o(a[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: a, nextDeep: o } = this.state,
      { beforeAddAction: l, logger: s } = this.props;
    l(e, a, o, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: i } = this.props;
        u(a[a.length - 1], r),
          i({ type: Cs, keyPath: a, deep: o, key: e, newValue: t });
      })
      .catch(s.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: a, keyPath: o, nextDeep: l } = this.state,
        s = a[e];
      t(e, o, l, s)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: s, type: _s };
          delete a[e], this.setState({ data: a });
          let { onUpdate: i, onDeltaUpdate: c } = this.props;
          i(o[o.length - 1], a), c(u);
        })
        .catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, a) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: s, nextDeep: u } = this.state,
        i = l[e];
      o(e, s, u, i, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(s[s.length - 1], l),
            d({
              type: ks,
              keyPath: s,
              deep: u,
              key: e,
              newValue: t,
              oldValue: i,
            }),
            r();
        })
        .catch(a);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: a } = this.state,
      {
        handleRemove: o,
        readOnly: l,
        dataType: s,
        getStyle: u,
        minusMenuElement: i,
      } = this.props,
      { minus: c, collapsed: d } = u(e, a, t, r, s),
      f = Object.getOwnPropertyNames(a),
      p = l(e, a, t, r, s),
      g = m.cloneElement(i, {
        onClick: o,
        className: "rejt-minus-menu",
        style: c,
      });
    return n.createElement(
      "span",
      { className: "rejt-collapsed" },
      n.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: d,
          onClick: this.handleCollapseMode,
        },
        "{...}",
        " ",
        f.length,
        " ",
        f.length === 1 ? "key" : "keys"
      ),
      !p && g
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: a,
        nextDeep: o,
        addFormVisible: l,
      } = this.state,
      {
        isCollapsed: s,
        handleRemove: u,
        onDeltaUpdate: i,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: p,
        cancelButtonElement: g,
        editButtonElement: h,
        inputElementGenerator: b,
        textareaElementGenerator: A,
        minusMenuElement: w,
        plusMenuElement: k,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: y,
        logger: x,
        onSubmitValueParser: C,
      } = this.props,
      { minus: S, plus: O, addForm: R, ul: F, delimiter: L } = d(e, t, r, a, f),
      T = Object.getOwnPropertyNames(t),
      Z = c(e, t, r, a, f),
      D = m.cloneElement(k, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: O,
      }),
      M = m.cloneElement(w, {
        onClick: u,
        className: "rejt-minus-menu",
        style: S,
      }),
      N = T.map((I) =>
        n.createElement(Ea, {
          key: I,
          name: I,
          data: t[I],
          keyPath: r,
          deep: o,
          isCollapsed: s,
          handleRemove: this.handleRemoveValue(I),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: i,
          readOnly: c,
          getStyle: d,
          addButtonElement: p,
          cancelButtonElement: g,
          editButtonElement: h,
          inputElementGenerator: b,
          textareaElementGenerator: A,
          minusMenuElement: w,
          plusMenuElement: k,
          beforeRemoveAction: v,
          beforeAddAction: E,
          beforeUpdateAction: y,
          logger: x,
          onSubmitValueParser: C,
        })
      ),
      V = "{",
      $ = "}";
    return n.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      n.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: L },
        V
      ),
      !Z && D,
      n.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: F },
        N
      ),
      !Z &&
        l &&
        n.createElement(
          "div",
          { className: "rejt-add-form", style: R },
          n.createElement(oo, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: p,
            cancelButtonElement: g,
            inputElementGenerator: b,
            keyPath: r,
            deep: a,
            onSubmitValueParser: C,
          })
        ),
      n.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: L },
        $
      ),
      !Z && M
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: a, deep: o } = this.state,
      { getStyle: l, dataType: s } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      i = l(e, r, a, o, s);
    return n.createElement(
      "div",
      { className: "rejt-object-node" },
      n.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        n.createElement(
          "span",
          { className: "rejt-name", style: i.name },
          e,
          " :",
          " "
        )
      ),
      u
    );
  }
};
cn.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: n.createElement("span", null, " - "),
  plusMenuElement: n.createElement("span", null, " + "),
};
var lt = class extends m.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: a,
        keyPath: o,
        deep: l,
      } = this.state,
      { readOnly: s, dataType: u } = this.props,
      i = s(r, a, o, l, u);
    e && !i && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: a,
        keyPath: o,
      } = this.props,
      { inputRef: l, name: s, deep: u } = this.state;
    if (!l) return;
    let i = a(!0, o, u, s, l.value);
    e({ value: i, key: s })
      .then(() => {
        Os(t, i) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: a, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: s,
        readOnly: u,
        dataType: i,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        inputElementGenerator: p,
        minusMenuElement: g,
        keyPath: h,
      } = this.props,
      b = c(e, s, a, o, i),
      A = u(e, s, a, o, i),
      w = r && !A,
      k = p(no, h, o, e, s, i),
      v = m.cloneElement(d, { onClick: this.handleEdit }),
      E = m.cloneElement(f, { onClick: this.handleCancelEdit }),
      y = m.cloneElement(k, {
        ref: this.refInput,
        defaultValue: JSON.stringify(s),
      }),
      x = m.cloneElement(g, {
        onClick: l,
        className: "rejt-minus-menu",
        style: b.minus,
      });
    return n.createElement(
      "li",
      { className: "rejt-value-node", style: b.li },
      n.createElement(
        "span",
        { className: "rejt-name", style: b.name },
        e,
        " : "
      ),
      w
        ? n.createElement(
            "span",
            { className: "rejt-edit-form", style: b.editForm },
            y,
            " ",
            E,
            v
          )
        : n.createElement(
            "span",
            {
              className: "rejt-value",
              style: b.value,
              onClick: A ? null : this.handleEditMode,
            },
            String(t)
          ),
      !A && !w && x
    );
  }
};
lt.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: n.createElement("button", null, "e"),
  cancelButtonElement: n.createElement("button", null, "c"),
  minusMenuElement: n.createElement("span", null, " - "),
};
var _h = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  kh = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  Oh = {
    minus: { color: "red" },
    editForm: {},
    value: { color: "#7bba3d" },
    li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
    name: { color: "#2287CD" },
  };
function Rh(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var Fh = class extends m.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? { data: e.data, rootName: e.rootName }
      : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: a,
        readOnly: o,
        getStyle: l,
        addButtonElement: s,
        cancelButtonElement: u,
        editButtonElement: i,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: f,
        plusMenuElement: p,
        beforeRemoveAction: g,
        beforeAddAction: h,
        beforeUpdateAction: b,
        logger: A,
        onSubmitValueParser: w,
        fallback: k = null,
      } = this.props,
      v = bt(e),
      E = o;
    bt(o) === "Boolean" && (E = () => o);
    let y = c;
    c && bt(c) !== "Function" && (y = () => c);
    let x = d;
    return (
      d && bt(d) !== "Function" && (x = () => d),
      v === "Object" || v === "Array"
        ? n.createElement(
            "div",
            { className: "rejt-tree" },
            n.createElement(Ea, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: a,
              readOnly: E,
              getStyle: l,
              addButtonElement: s,
              cancelButtonElement: u,
              editButtonElement: i,
              inputElementGenerator: y,
              textareaElementGenerator: x,
              minusMenuElement: f,
              plusMenuElement: p,
              handleRemove: this.removeRoot,
              beforeRemoveAction: g,
              beforeAddAction: h,
              beforeUpdateAction: b,
              logger: A,
              onSubmitValueParser: w,
            })
          )
        : k
    );
  }
};
Fh.defaultProps = {
  rootName: "root",
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, a, o) => {
    switch (o) {
      case "Object":
      case "Error":
        return _h;
      case "Array":
        return kh;
      default:
        return Oh;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, a, o) => Rh(o),
  inputElement: () => n.createElement("input", null),
  textareaElement: () => n.createElement("textarea", null),
  fallback: null,
};
_.div(({ theme: e }) => ({
  position: "relative",
  display: "flex",
  ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
  ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
    { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
  ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
    { "& > svg": { opacity: 1 } },
  ".rejt-edit-form button": { display: "none" },
  ".rejt-add-form": { marginLeft: 10 },
  ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
  ".rejt-name": { lineHeight: "22px" },
  ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
  ".rejt-plus-menu": { marginLeft: 5 },
  ".rejt-object-node > span > *, .rejt-array-node > span > *": {
    position: "relative",
    zIndex: 2,
  },
  ".rejt-object-node, .rejt-array-node": { position: "relative" },
  ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
    {
      content: '""',
      position: "absolute",
      top: 0,
      display: "block",
      width: "100%",
      marginLeft: "-1rem",
      padding: "0 4px 0 1rem",
      height: 22,
    },
  ".rejt-collapsed::before, .rejt-not-collapsed::before": {
    zIndex: 1,
    background: "transparent",
    borderRadius: 4,
    transition: "background 0.2s",
    pointerEvents: "none",
    opacity: 0.1,
  },
  ".rejt-object-node:hover, .rejt-array-node:hover": {
    "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
      background: e.color.secondary,
    },
  },
  ".rejt-collapsed::after, .rejt-not-collapsed::after": {
    content: '""',
    position: "absolute",
    display: "inline-block",
    pointerEvents: "none",
    width: 0,
    height: 0,
  },
  ".rejt-collapsed::after": {
    left: -8,
    top: 8,
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    borderLeft: "3px solid rgba(153,153,153,0.6)",
  },
  ".rejt-not-collapsed::after": {
    left: -10,
    top: 10,
    borderTop: "3px solid rgba(153,153,153,0.6)",
    borderLeft: "3px solid transparent",
    borderRight: "3px solid transparent",
  },
  ".rejt-value": {
    display: "inline-block",
    border: "1px solid transparent",
    borderRadius: 4,
    margin: "1px 0",
    padding: "0 4px",
    cursor: "text",
    color: e.color.defaultText,
  },
  ".rejt-value-node:hover > .rejt-value": {
    background: e.color.lighter,
    borderColor: e.appBorderColor,
  },
}));
_.button(({ theme: e, primary: t }) => ({
  border: 0,
  height: 20,
  margin: 1,
  borderRadius: 4,
  background: t ? e.color.secondary : "transparent",
  color: t ? e.color.lightest : e.color.dark,
  fontWeight: t ? "bold" : "normal",
  cursor: "pointer",
  order: t ? "initial" : 9,
}));
_(De)(({ theme: e, icon: t, disabled: r }) => ({
  display: "inline-block",
  verticalAlign: "middle",
  width: 15,
  height: 15,
  padding: 3,
  marginLeft: 5,
  cursor: r ? "not-allowed" : "pointer",
  color: e.textMutedColor,
  "&:hover": r
    ? {}
    : { color: t === "subtract" ? e.color.negative : e.color.ancillary },
  "svg + &": { marginLeft: 0 },
}));
_.input(({ theme: e, placeholder: t }) => ({
  outline: 0,
  margin: t ? 1 : "1px 0",
  padding: "3px 4px",
  color: e.color.defaultText,
  background: e.background.app,
  border: `1px solid ${e.appBorderColor}`,
  borderRadius: 4,
  lineHeight: "14px",
  width: t === "Key" ? 80 : 120,
  "&:focus": { border: `1px solid ${e.color.secondary}` },
}));
_(xt)(({ theme: e }) => ({
  position: "absolute",
  zIndex: 2,
  top: 2,
  right: 2,
  height: 21,
  padding: "0 3px",
  background: e.background.bar,
  border: `1px solid ${e.appBorderColor}`,
  borderRadius: 3,
  color: e.textMutedColor,
  fontSize: "9px",
  fontWeight: "bold",
  textDecoration: "none",
  span: { marginLeft: 3, marginTop: 1 },
}));
_(qn.Textarea)(({ theme: e }) => ({
  flex: 1,
  padding: "7px 6px",
  fontFamily: e.typography.fonts.mono,
  fontSize: "12px",
  lineHeight: "18px",
  "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
  "&:placeholder-shown": { padding: "7px 10px" },
}));
_.input(({ theme: e, min: t, max: r, value: a }) => ({
  "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
  "&::-webkit-slider-runnable-track": {
    background:
      e.base === "light"
        ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${Ie(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ie(0.02, e.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${ft(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${ft(0.02, e.input.background)} 100%)`,
    boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
    borderRadius: 6,
    width: "100%",
    height: 6,
    cursor: "pointer",
  },
  "&::-webkit-slider-thumb": {
    marginTop: "-6px",
    width: 16,
    height: 16,
    border: `1px solid ${Tt(e.appBorderColor, 0.2)}`,
    borderRadius: "50px",
    boxShadow: `0 1px 3px 0px ${Tt(e.appBorderColor, 0.2)}`,
    cursor: "grab",
    appearance: "none",
    background: `${e.input.background}`,
    transition: "all 150ms ease-out",
    "&:hover": {
      background: `${Ie(0.05, e.input.background)}`,
      transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
      transition: "all 50ms ease-out",
    },
    "&:active": {
      background: `${e.input.background}`,
      transform: "scale3d(1, 1, 1) translateY(0px)",
      cursor: "grabbing",
    },
  },
  "&:focus": {
    outline: "none",
    "&::-webkit-slider-runnable-track": {
      borderColor: Tt(e.color.secondary, 0.4),
    },
    "&::-webkit-slider-thumb": {
      borderColor: e.color.secondary,
      boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
    },
  },
  "&::-moz-range-track": {
    background:
      e.base === "light"
        ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${Ie(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ie(0.02, e.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${ft(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${ft(0.02, e.input.background)} 100%)`,
    boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
    borderRadius: 6,
    width: "100%",
    height: 6,
    cursor: "pointer",
    outline: "none",
  },
  "&::-moz-range-thumb": {
    width: 16,
    height: 16,
    border: `1px solid ${Tt(e.appBorderColor, 0.2)}`,
    borderRadius: "50px",
    boxShadow: `0 1px 3px 0px ${Tt(e.appBorderColor, 0.2)}`,
    cursor: "grab",
    background: `${e.input.background}`,
    transition: "all 150ms ease-out",
    "&:hover": {
      background: `${Ie(0.05, e.input.background)}`,
      transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
      transition: "all 50ms ease-out",
    },
    "&:active": {
      background: `${e.input.background}`,
      transform: "scale3d(1, 1, 1) translateY(0px)",
      cursor: "grabbing",
    },
  },
  "&::-ms-track": {
    background:
      e.base === "light"
        ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${Ie(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ie(0.02, e.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
            ((a - t) / (r - t)) * 100
          }%, 
            ${ft(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${ft(0.02, e.input.background)} 100%)`,
    boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
    color: "transparent",
    width: "100%",
    height: "6px",
    cursor: "pointer",
  },
  "&::-ms-fill-lower": { borderRadius: 6 },
  "&::-ms-fill-upper": { borderRadius: 6 },
  "&::-ms-thumb": {
    width: 16,
    height: 16,
    background: `${e.input.background}`,
    border: `1px solid ${Tt(e.appBorderColor, 0.2)}`,
    borderRadius: 50,
    cursor: "grab",
    marginTop: 0,
  },
  "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
}));
var Th = _.span({
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 12,
  whiteSpace: "nowrap",
  fontFeatureSettings: "tnum",
  fontVariantNumeric: "tabular-nums",
});
_(Th)(({ numberOFDecimalsPlaces: e, max: t }) => ({
  width: `${e + t.toString().length * 2 + 3}ch`,
  textAlign: "right",
  flexShrink: 0,
}));
_.div({ display: "flex", alignItems: "center", width: "100%" });
_.label({ display: "flex" });
_.div(({ isMaxed: e }) => ({
  marginLeft: "0.75rem",
  paddingTop: "0.35rem",
  color: e ? "red" : void 0,
}));
_(qn.Input)({ padding: 10 });
m.lazy(() =>
  At(
    () => import("./Color-6VNJS4EI-6911cd53.js"),
    [
      "./Color-6VNJS4EI-6911cd53.js",
      "./index-c013ead5.js",
      "./commonjsHelpers-725317a4.js",
      "./throttle-bc039b84.js",
      "./doctrine-744fe685.js",
      "./iframe-92f28330.js",
      "./index-1b89a1c6.js",
      "./isNativeReflectConstruct-81b4d0cb.js",
      "./index-169ee69c.js",
      "./index-356e4a49.js",
    ],
    import.meta.url
  )
);
_.span({ fontWeight: "bold" });
_.span(({ theme: e }) => ({
  color: e.color.negative,
  fontFamily: e.typography.fonts.mono,
  cursor: "help",
}));
_.div(({ theme: e }) => ({
  "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
  code: {
    ...nt({ theme: e }),
    fontSize: 12,
    fontFamily: e.typography.fonts.mono,
  },
  "& code": { margin: 0, display: "inline-block" },
  "& pre > code": { whiteSpace: "pre-wrap" },
}));
_.div(({ theme: e, hasDescription: t }) => ({
  color:
    e.base === "light"
      ? J(0.1, e.color.defaultText)
      : J(0.2, e.color.defaultText),
  marginTop: t ? 4 : 0,
}));
_.div(({ theme: e, hasDescription: t }) => ({
  color:
    e.base === "light"
      ? J(0.1, e.color.defaultText)
      : J(0.2, e.color.defaultText),
  marginTop: t ? 12 : 0,
  marginBottom: 12,
}));
_.td(({ theme: e, expandable: t }) => ({
  paddingLeft: t ? "40px !important" : "20px !important",
}));
_(De)(({ theme: e }) => ({
  marginRight: 8,
  marginLeft: -10,
  marginTop: -2,
  height: 12,
  width: 12,
  color:
    e.base === "light"
      ? J(0.25, e.color.defaultText)
      : J(0.3, e.color.defaultText),
  border: "none",
  display: "inline-block",
}));
_.span(({ theme: e }) => ({
  display: "flex",
  lineHeight: "20px",
  alignItems: "center",
}));
_.td(({ theme: e }) => ({
  position: "relative",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s1 - 1,
  color:
    e.base === "light"
      ? J(0.4, e.color.defaultText)
      : J(0.6, e.color.defaultText),
  background: `${e.background.app} !important`,
  "& ~ td": { background: `${e.background.app} !important` },
}));
_.td(({ theme: e }) => ({
  position: "relative",
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2 - 1,
  background: e.background.app,
}));
_.td(() => ({ position: "relative" }));
_.tr(({ theme: e }) => ({
  "&:hover > td": {
    backgroundColor: `${ft(0.005, e.background.app)} !important`,
    boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
    cursor: "row-resize",
  },
}));
_.button(() => ({
  background: "none",
  border: "none",
  padding: "0",
  font: "inherit",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  color: "transparent",
  cursor: "row-resize !important",
}));
_.div(({ theme: e }) => ({
  display: "flex",
  gap: 16,
  borderBottom: `1px solid ${e.appBorderColor}`,
  "&:last-child": { borderBottom: 0 },
}));
_.div(({ numColumn: e }) => ({
  display: "flex",
  flexDirection: "column",
  flex: e || 1,
  gap: 5,
  padding: "12px 20px",
}));
_.div(({ theme: e, width: t, height: r }) => ({
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  background: e.appBorderColor,
  width: t || "100%",
  height: r || 16,
  borderRadius: 3,
}));
_.div(({ inAddonPanel: e, theme: t }) => ({
  height: e ? "100%" : "auto",
  display: "flex",
  border: e ? "none" : `1px solid ${t.appBorderColor}`,
  borderRadius: e ? 0 : t.appBorderRadius,
  padding: e ? 0 : 40,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: t.background.content,
  boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0",
}));
_.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 });
_.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2 - 1,
  textAlign: "center",
  color: e.textColor,
}));
_.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2 - 1,
  textAlign: "center",
  color: e.textMutedColor,
}));
_.div(({ theme: e }) => ({
  display: "flex",
  fontSize: e.typography.size.s2 - 1,
  gap: 25,
}));
_.div(({ theme: e }) => ({
  width: 1,
  height: 16,
  backgroundColor: e.appBorderColor,
}));
_.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
  "&&": {
    borderSpacing: 0,
    color: e.color.defaultText,
    "td, th": {
      padding: 0,
      border: "none",
      verticalAlign: "top",
      textOverflow: "ellipsis",
    },
    fontSize: e.typography.size.s2 - 1,
    lineHeight: "20px",
    textAlign: "left",
    width: "100%",
    marginTop: r ? 0 : 25,
    marginBottom: r ? 0 : 40,
    "thead th:first-of-type, td:first-of-type": { width: "25%" },
    "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
    "th:nth-of-type(2), td:nth-of-type(2)": {
      ...(t ? null : { width: "35%" }),
    },
    "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
    "th:last-of-type, td:last-of-type": {
      paddingRight: 20,
      ...(t ? null : { width: "25%" }),
    },
    th: {
      color:
        e.base === "light"
          ? J(0.25, e.color.defaultText)
          : J(0.45, e.color.defaultText),
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    td: {
      paddingTop: "10px",
      paddingBottom: "10px",
      "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
      "&:last-of-type": { paddingRight: 20 },
    },
    marginLeft: r ? 0 : 1,
    marginRight: r ? 0 : 1,
    tbody: {
      ...(r
        ? null
        : {
            filter:
              e.base === "light"
                ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
          }),
      "> tr > *": {
        background: e.background.content,
        borderTop: `1px solid ${e.appBorderColor}`,
      },
      ...(r
        ? null
        : {
            "> tr:first-of-type > *": {
              borderBlockStart: `1px solid ${e.appBorderColor}`,
            },
            "> tr:last-of-type > *": {
              borderBlockEnd: `1px solid ${e.appBorderColor}`,
            },
            "> tr > *:first-of-type": {
              borderInlineStart: `1px solid ${e.appBorderColor}`,
            },
            "> tr > *:last-of-type": {
              borderInlineEnd: `1px solid ${e.appBorderColor}`,
            },
            "> tr:first-of-type > td:first-of-type": {
              borderTopLeftRadius: e.appBorderRadius,
            },
            "> tr:first-of-type > td:last-of-type": {
              borderTopRightRadius: e.appBorderRadius,
            },
            "> tr:last-of-type > td:first-of-type": {
              borderBottomLeftRadius: e.appBorderRadius,
            },
            "> tr:last-of-type > td:last-of-type": {
              borderBottomRightRadius: e.appBorderRadius,
            },
          }),
    },
  },
}));
_(xt)(({ theme: e }) => ({
  color: e.barTextColor,
  margin: "-4px -12px -4px 0",
}));
_.span({ display: "flex", justifyContent: "space-between" });
_.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === "light"
      ? J(0.4, e.color.defaultText)
      : J(0.6, e.color.defaultText),
}));
_.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
_.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" },
});
_.div(Q, ({ theme: e }) => ({
  ...va(e),
  margin: "25px 0 40px",
  padding: "30px 20px",
}));
_.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
}));
_.div(({ theme: e }) => ({
  color:
    e.base === "light"
      ? J(0.2, e.color.defaultText)
      : J(0.6, e.color.defaultText),
}));
_.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
_.div(({ theme: e }) => ({
  flex: 1,
  textAlign: "center",
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: "hidden",
  color:
    e.base === "light"
      ? J(0.4, e.color.defaultText)
      : J(0.6, e.color.defaultText),
  "> div": {
    display: "inline-block",
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis",
  },
  span: { display: "block", marginTop: 2 },
}));
_.div({ display: "flex", flexDirection: "row" });
_.div(({ background: e }) => ({
  position: "relative",
  flex: 1,
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: e,
    content: '""',
  },
}));
_.div(({ theme: e }) => ({
  ...va(e),
  display: "flex",
  flexDirection: "row",
  height: 50,
  marginBottom: 5,
  overflow: "hidden",
  backgroundColor: "white",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
  backgroundClip: "padding-box",
}));
_.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  position: "relative",
  marginBottom: 30,
});
_.div({ flex: 1, display: "flex", flexDirection: "row" });
_.div({ display: "flex", alignItems: "flex-start" });
_.div({ flex: "0 0 30%" });
_.div({ flex: 1 });
_.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === "light"
      ? J(0.4, e.color.defaultText)
      : J(0.6, e.color.defaultText),
}));
_.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  display: "flex",
  flexDirection: "column",
}));
_.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));
_.div(({ theme: e }) => ({
  ...va(e),
  overflow: "hidden",
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  "> img, > svg": { width: 20, height: 20 },
}));
_.div({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "0 1 calc(20% - 10px)",
  minWidth: 120,
  margin: "0px 10px 30px 0",
});
_.div({ display: "flex", flexFlow: "row wrap" });
var Dh = (e) => `anchor--${e}`,
  Lh = ({ storyId: e, children: t }) =>
    n.createElement("div", { id: Dh(e), className: "sb-anchor" }, t);
Ge &&
  Ge.__DOCS_CONTEXT__ === void 0 &&
  ((Ge.__DOCS_CONTEXT__ = m.createContext(null)),
  (Ge.__DOCS_CONTEXT__.displayName = "DocsContext"));
var Or = Ge ? Ge.__DOCS_CONTEXT__ : m.createContext(null),
  Mh = (e, t) => m.useContext(Or).resolveOf(e, t);
function Bh(e, t) {
  let r = lo([e], t);
  return r && r[0];
}
function lo(e, t) {
  let [r, a] = m.useState({});
  return (
    m.useEffect(() => {
      Promise.all(
        e.map(async (o) => {
          let l = await t.loadStory(o);
          a((s) => (s[o] === l ? s : { ...s, [o]: l }));
        })
      );
    }),
    e.map((o) => {
      if (r[o]) return r[o];
      try {
        return t.storyById(o);
      } catch {
        return null;
      }
    })
  );
}
function $h(e) {
  return Hg(e);
}
var Ph = m.createContext({ sources: {} }),
  Zh = "--unknown--",
  jh = ((e) => (
    (e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e
  ))(jh || {}),
  Nh = (e) => {
    let t = e
      .map((r) => {
        var a, o;
        return (o = (a = r.parameters.docs) == null ? void 0 : a.source) == null
          ? void 0
          : o.state;
      })
      .filter(Boolean);
    return t.length === 0 ? "closed" : t[0];
  },
  Ih = (e, t, r) => {
    let { sources: a } = r,
      o = a == null ? void 0 : a[e];
    return (
      (o == null ? void 0 : o[$h(t)]) ||
      (o == null ? void 0 : o[Zh]) || { code: "" }
    );
  },
  Hh = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: a,
  }) => {
    var i, c, d, f, p, g;
    let { __isArgsStory: o } = t.parameters,
      l = ((i = t.parameters.docs) == null ? void 0 : i.source) || {},
      s = r || l.type || Ur.AUTO;
    if (l.code !== void 0) return l.code;
    let u =
      s === Ur.DYNAMIC || (s === Ur.AUTO && e && o)
        ? e
        : l.originalSource || "";
    return (
      l.transformSource &&
        Se(we`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        Se(we`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        Se(we`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((g =
        a ??
        l.transform ??
        l.transformSource ??
        ((f = t.parameters.docs) == null ? void 0 : f.transformSource) ??
        ((p = t.parameters.jsx) == null ? void 0 : p.transformSource)) == null
        ? void 0
        : g(u, t)) || u
    );
  },
  Ts = (e, t, r) => {
    var g, h, b;
    let a = e.ids || (e.id ? [e.id] : []),
      o = lo(a, t),
      l = o,
      { of: s } = e;
    if ("of" in e && s === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (s) l = [t.resolveOf(s, ["story"]).story];
    else if (l.length === 0)
      try {
        l = [t.storyById()];
      } catch {}
    if (!o.every(Boolean))
      return { error: "Oh no! The source is not available.", state: "none" };
    let u =
        ((b =
          (h = (g = l[0]) == null ? void 0 : g.parameters) == null
            ? void 0
            : h.docs) == null
          ? void 0
          : b.source) || {},
      { code: i } = e,
      c = e.format ?? u.format,
      d = e.language ?? u.language ?? "jsx",
      f = e.dark ?? u.dark ?? !1;
    i ||
      (i = l.map((A, w) => {
        var y, x;
        if (!A) return "";
        let k = t.getStoryContext(A),
          v = e.__forceInitialArgs ? k.initialArgs : k.unmappedArgs,
          E = Ih(A.id, v, r);
        return (
          w === 0 &&
            (c =
              E.format ??
              ((x = (y = A.parameters.docs) == null ? void 0 : y.source) == null
                ? void 0
                : x.format) ??
              !1),
          Hh({
            snippet: E.code,
            storyContext: { ...k, args: v },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    let p = Nh(l);
    return i
      ? { code: i, format: c, language: d, dark: f, state: p }
      : { error: "Oh no! The source is not available.", state: p };
  },
  Ds = (e, t) => {
    let { id: r, of: a, meta: o, story: l } = e;
    if ("of" in e && a === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (r)
      return (
        Se(we`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    let { name: s } = e;
    return s
      ? (Se(we`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(s))
      : (l &&
          Se(we`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        o && t.referenceMeta(o, !1),
        t.resolveOf(a || l || "story", ["story"]).story.id);
  },
  Vh = (e, t, r) => {
    let { parameters: a = {} } = t || {},
      { docs: o = {} } = a,
      l = o.story || {};
    if (o.disable) return null;
    let { inlineStories: s, iframeHeight: u } = o;
    typeof s < "u" &&
      Se(we`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let i = e.inline ?? l.inline ?? s ?? !1;
    if (
      (typeof u < "u" &&
        Se(we`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      i)
    ) {
      let d = e.height ?? l.height,
        f = e.autoplay ?? l.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: d,
        autoplay: f,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? "100px";
    return { story: t, inline: !1, height: c, primary: !!e.__primary };
  },
  zh = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = m.useContext(Or),
      r = Ds(e, t),
      a = Bh(r, t);
    if (!a) return n.createElement(ao, null);
    let o = Vh(e, a, t);
    return o ? n.createElement(nh, { ...o }) : null;
  },
  qh = (
    { withSource: e, mdxSource: t, children: r, layout: a, ...o },
    l,
    s
  ) => {
    let u = m.Children.toArray(r)
        .filter((p) => p.props && (p.props.id || p.props.name || p.props.of))
        .map((p) => Ds(p.props, l)),
      i = lo(u, l),
      c = i.some((p) => !p),
      d = Ts(
        {
          ...(t ? { code: decodeURI(t) } : { ids: u }),
          ...(o.of && { of: o.of }),
        },
        l,
        s
      );
    if (e === "none") return { isLoading: c, previewProps: o };
    let f = a;
    return (
      m.Children.forEach(r, (p) => {
        var g, h;
        f ||
          (f =
            (h =
              (g = p == null ? void 0 : p.props) == null
                ? void 0
                : g.parameters) == null
              ? void 0
              : h.layout);
      }),
      i.forEach((p) => {
        var g, h;
        f ||
          !p ||
          (f =
            (p == null ? void 0 : p.parameters.layout) ??
            ((h = (g = p.parameters.docs) == null ? void 0 : g.canvas) == null
              ? void 0
              : h.layout));
      }),
      {
        isLoading: c,
        previewProps: {
          ...o,
          layout: f ?? "padded",
          withSource: d,
          isExpanded: (e || d.state) === "open",
        },
      }
    );
  },
  f3 = (e) => {
    var A, w, k, v, E, y, x, C, S, O;
    let t = m.useContext(Or),
      r = m.useContext(Ph),
      { children: a, of: o, source: l } = e;
    if ("of" in e && o === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let { isLoading: s, previewProps: u } = qh(e, t, r),
      i,
      c,
      d;
    try {
      ({ story: i } = Mh(o || "story", ["story"]));
    } catch (R) {
      a || (d = R);
    }
    try {
      c = Ts({ ...l, ...(o && { of: o }) }, t, r);
    } catch (R) {
      a || (d = R);
    }
    if (d) throw d;
    if (
      (e.withSource &&
        Se(we`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        Se(we`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        Se(we`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      a)
    )
      return (
        Se(we`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        s ? n.createElement(ph, null) : n.createElement(un, { ...u }, a)
      );
    let f =
        e.layout ??
        i.parameters.layout ??
        ((w = (A = i.parameters.docs) == null ? void 0 : A.canvas) == null
          ? void 0
          : w.layout) ??
        "padded",
      p =
        e.withToolbar ??
        ((v = (k = i.parameters.docs) == null ? void 0 : k.canvas) == null
          ? void 0
          : v.withToolbar) ??
        !1,
      g =
        e.additionalActions ??
        ((y = (E = i.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : y.additionalActions),
      h =
        e.sourceState ??
        ((C = (x = i.parameters.docs) == null ? void 0 : x.canvas) == null
          ? void 0
          : C.sourceState) ??
        "hidden",
      b =
        e.className ??
        ((O = (S = i.parameters.docs) == null ? void 0 : S.canvas) == null
          ? void 0
          : O.className);
    return n.createElement(
      un,
      {
        withSource: h === "none" ? void 0 : c,
        isExpanded: h === "shown",
        withToolbar: p,
        additionalActions: g,
        className: b,
        layout: f,
      },
      n.createElement(zh, { of: o || i.moduleExport, meta: e.meta, ...e.story })
    );
  },
  { document: Uh } = Ge;
function Wh(e, t) {
  e.channel.emit(Vg, t);
}
ds.a;
var Ls = ["h1", "h2", "h3", "h4", "h5", "h6"],
  Gh = Ls.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
        "&:hover svg": { visibility: "visible" },
      }),
    }),
    {}
  ),
  Yh = _.a(() => ({
    float: "left",
    lineHeight: "inherit",
    paddingRight: "10px",
    marginLeft: "-24px",
    color: "inherit",
  })),
  Kh = ({ as: e, id: t, children: r, ...a }) => {
    let o = m.useContext(Or),
      l = Gh[e],
      s = `#${t}`;
    return n.createElement(
      l,
      { id: t, ...a },
      n.createElement(
        Yh,
        {
          "aria-hidden": "true",
          href: s,
          tabIndex: -1,
          target: "_self",
          onClick: (u) => {
            Uh.getElementById(t) && Wh(o, s);
          },
        },
        n.createElement(De, { icon: "link" })
      ),
      r
    );
  },
  Ms = (e) => {
    let { as: t, id: r, children: a, ...o } = e;
    if (r) return n.createElement(Kh, { as: t, id: r, ...o }, a);
    let l = t,
      { as: s, ...u } = e;
    return n.createElement(l, { ...X(u, t) });
  };
Ls.reduce(
  (e, t) => ({ ...e, [t]: (r) => n.createElement(Ms, { as: t, ...r }) }),
  {}
);
var Xh = ((e) => (
  (e.INFO = "info"),
  (e.NOTES = "notes"),
  (e.DOCGEN = "docgen"),
  (e.AUTO = "auto"),
  e
))(Xh || {});
_.div(({ theme: e }) => ({
  width: "10rem",
  "@media (max-width: 768px)": { display: "none" },
}));
_.div(({ theme: e }) => ({
  position: "fixed",
  bottom: 0,
  top: 0,
  width: "10rem",
  paddingTop: "4rem",
  paddingBottom: "2rem",
  overflowY: "auto",
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch",
  "& *": { boxSizing: "border-box" },
  "& > .toc-wrapper > .toc-list": {
    paddingLeft: 0,
    borderLeft: `solid 2px ${e.color.mediumlight}`,
    ".toc-list": {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      ".toc-list": {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
      },
    },
  },
  "& .toc-list-item": {
    position: "relative",
    listStyleType: "none",
    marginLeft: 20,
    paddingTop: 3,
    paddingBottom: 3,
  },
  "& .toc-list-item::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    top: 0,
    left: 0,
    transform: "translateX(calc(-2px - 20px))",
    borderLeft: `solid 2px ${e.color.mediumdark}`,
    opacity: 0,
    transition: "opacity 0.2s",
  },
  "& .toc-list-item.is-active-li::before": { opacity: 1 },
  "& .toc-list-item > a": {
    color: e.color.defaultText,
    textDecoration: "none",
  },
  "& .toc-list-item.is-active-li > a": {
    fontWeight: 600,
    color: e.color.secondary,
    textDecoration: "none",
  },
}));
_.p(({ theme: e }) => ({
  fontWeight: 600,
  fontSize: "0.875em",
  color: e.textColor,
  textTransform: "uppercase",
  marginBottom: 10,
}));
var Jh = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string") return n.createElement(In, null, e);
  let a = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return n.createElement(Ms, { as: "h2", id: a, ...r }, e);
};
_(Jh)(({ theme: e }) => ({
  fontSize: `${e.typography.size.s2 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  border: 0,
  marginBottom: "12px",
  "&:first-of-type": { marginTop: "56px" },
}));
var m3 = ({ of: e }) => {
  let t = m.useContext(Or);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return n.createElement(Lh, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  f3 as C,
  qn as F,
  De as I,
  m3 as M,
  Fn as S,
  N2 as T,
  Gp as W,
  ve as _,
  Ai as a,
  H as b,
  si as c,
  T2 as d,
  _ as n,
  l3 as s,
};
