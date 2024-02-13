import { _ as Ft } from "./iframe-92f28330.js";
import { r as m, R as n } from "./index-c013ead5.js";
import {
  m as Dt,
  u as Zo,
  a as Bn,
  b as ri,
  _ as ju,
  g as Nu,
  h as Zu,
  i as Hu,
  c as J,
  d as Ge,
  e as Nr,
  f as At,
  r as It,
  j as Ho,
  M as ai,
} from "./index-1b89a1c6.js";
import { r as ni, R as Vu } from "./index-169ee69c.js";
import { L as oi, O as zu } from "./index-11d98b33.js";
import { g as $n } from "./commonjsHelpers-725317a4.js";
import {
  p as qu,
  i as Uu,
  t as Wu,
  u as Gu,
  v as Yu,
  w as Ku,
} from "./doctrine-744fe685.js";
import {
  _ as li,
  a as Xu,
  b as Ju,
  c as Qu,
  S as Vo,
  d as $a,
  s as tn,
} from "./index-cf0e44f3.js";
import { d as ve } from "./index-356e4a49.js";
var je = (e) => `control-${e.replace(/\s+/g, "-")}`,
  da = (e) => `set-${e.replace(/\s+/g, "-")}`;
const { global: ec } = __STORYBOOK_MODULE_GLOBAL__,
  { logger: tc } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var rc = Object.create,
  ii = Object.defineProperty,
  ac = Object.getOwnPropertyDescriptor,
  si = Object.getOwnPropertyNames,
  nc = Object.getPrototypeOf,
  oc = Object.prototype.hasOwnProperty,
  Pn = (e, t) =>
    function () {
      return t || (0, e[si(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  lc = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of si(t))
        !oc.call(e, o) &&
          o !== r &&
          ii(e, o, {
            get: () => t[o],
            enumerable: !(a = ac(t, o)) || a.enumerable,
          });
    return e;
  },
  ui = (e, t, r) => (
    (r = e != null ? rc(nc(e)) : {}),
    lc(
      t || !e || !e.__esModule
        ? ii(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Vt.apply(this, arguments)
  );
}
function ic(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function gr(e, t) {
  return (
    (gr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    gr(e, t)
  );
}
function sc(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    gr(e, t);
}
function rn(e) {
  return (
    (rn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    rn(e)
  );
}
function uc(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function cc() {
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
function Gr(e, t, r) {
  return (
    cc()
      ? (Gr = Reflect.construct.bind())
      : (Gr = function (a, o, l) {
          var i = [null];
          i.push.apply(i, o);
          var u = Function.bind.apply(a, i),
            s = new u();
          return l && gr(s, l.prototype), s;
        }),
    Gr.apply(null, arguments)
  );
}
function an(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (an = function (r) {
      if (r === null || !uc(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, a);
      }
      function a() {
        return Gr(r, arguments, rn(this).constructor);
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
        gr(a, r)
      );
    }),
    an(e)
  );
}
var dc = {
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
function pc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var a = t[0],
    o = [],
    l;
  for (l = 1; l < t.length; l += 1) o.push(t[l]);
  return (
    o.forEach(function (i) {
      a = a.replace(/%[a-z]/, i);
    }),
    a
  );
}
var Je = (function (e) {
  sc(t, e);
  function t(r) {
    for (
      var a, o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1;
      i < o;
      i++
    )
      l[i - 1] = arguments[i];
    return (
      (a = e.call(this, pc.apply(void 0, [dc[r]].concat(l))) || this), ic(a)
    );
  }
  return t;
})(an(Error));
function Pa(e) {
  return Math.round(e * 255);
}
function fc(e, t, r) {
  return Pa(e) + "," + Pa(t) + "," + Pa(r);
}
function hr(e, t, r, a) {
  if ((a === void 0 && (a = fc), t === 0)) return a(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i));
  var d = r - l / 2,
    f = u + d,
    p = s + d,
    g = c + d;
  return a(f, p, g);
}
var zo = {
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
function mc(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return zo[t] ? "#" + zo[t] : e;
}
var gc = /^#[a-fA-F0-9]{6}$/,
  hc = /^#[a-fA-F0-9]{8}$/,
  bc = /^#[a-fA-F0-9]{3}$/,
  yc = /^#[a-fA-F0-9]{4}$/,
  Ia = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  vc =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Ec =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  xc =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function pa(e) {
  if (typeof e != "string") throw new Je(3);
  var t = mc(e);
  if (t.match(gc))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(hc)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(bc))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(yc)) {
    var a = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: a,
    };
  }
  var o = Ia.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
    };
  var l = vc.exec(t.substring(0, 50));
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
  var i = Ec.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      c = parseInt("" + i[3], 10) / 100,
      d = "rgb(" + hr(u, s, c) + ")",
      f = Ia.exec(d);
    if (!f) throw new Je(4, t, d);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10),
    };
  }
  var p = xc.exec(t.substring(0, 50));
  if (p) {
    var g = parseInt("" + p[1], 10),
      h = parseInt("" + p[2], 10) / 100,
      b = parseInt("" + p[3], 10) / 100,
      x = "rgb(" + hr(g, h, b) + ")",
      w = Ia.exec(x);
    if (!w) throw new Je(4, t, x);
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
  throw new Je(5);
}
function Ac(e) {
  var t = e.red / 255,
    r = e.green / 255,
    a = e.blue / 255,
    o = Math.max(t, r, a),
    l = Math.min(t, r, a),
    i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - a) / s + (r < a ? 6 : 0);
      break;
    case r:
      u = (a - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function ci(e) {
  return Ac(pa(e));
}
var wc = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  nn = wc;
function wt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ja(e) {
  return wt(Math.round(e * 255));
}
function Sc(e, t, r) {
  return nn("#" + ja(e) + ja(t) + ja(r));
}
function aa(e, t, r) {
  return hr(e, t, r, Sc);
}
function Cc(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return aa(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return aa(e.hue, e.saturation, e.lightness);
  throw new Je(1);
}
function kc(e, t, r, a) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof a == "number"
  )
    return a >= 1 ? aa(e, t, r) : "rgba(" + hr(e, t, r) + "," + a + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
    return e.alpha >= 1
      ? aa(e.hue, e.saturation, e.lightness)
      : "rgba(" + hr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Je(2);
}
function on(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return nn("#" + wt(e) + wt(t) + wt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return nn("#" + wt(e.red) + wt(e.green) + wt(e.blue));
  throw new Je(6);
}
function br(e, t, r, a) {
  if (typeof e == "string" && typeof t == "number") {
    var o = pa(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof a == "number"
    )
      return a >= 1
        ? on(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + a + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
      return e.alpha >= 1
        ? on(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Je(7);
}
var _c = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  Oc = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  Rc = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  Fc = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function di(e) {
  if (typeof e != "object") throw new Je(8);
  if (Oc(e)) return br(e);
  if (_c(e)) return on(e);
  if (Fc(e)) return kc(e);
  if (Rc(e)) return Cc(e);
  throw new Je(8);
}
function pi(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : pi(e, t, a);
  };
}
function fa(e) {
  return pi(e, e.length, []);
}
function ma(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Tc(e, t) {
  if (t === "transparent") return t;
  var r = ci(t);
  return di(Vt({}, r, { lightness: ma(0, 1, r.lightness - parseFloat(e)) }));
}
var Dc = fa(Tc),
  Lc = Dc;
function Mc(e, t) {
  if (t === "transparent") return t;
  var r = ci(t);
  return di(Vt({}, r, { lightness: ma(0, 1, r.lightness + parseFloat(e)) }));
}
var Bc = fa(Mc),
  $c = Bc;
function Pc(e, t) {
  if (t === "transparent") return t;
  var r = pa(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = Vt({}, r, { alpha: ma(0, 1, (a * 100 + parseFloat(e) * 100) / 100) });
  return br(o);
}
var Ic = fa(Pc),
  jc = Ic;
function Nc(e, t) {
  if (t === "transparent") return t;
  var r = pa(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = Vt({}, r, {
      alpha: ma(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return br(o);
}
var Zc = fa(Nc),
  Hc = Zc,
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
  ft = {
    app: "#F6F9FC",
    bar: j.lightest,
    content: j.lightest,
    preview: j.lightest,
    gridCellSize: 10,
    hoverable: Hc(0.9, j.secondary),
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
    critical: "#FF4400",
  },
  Qe = {
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
  Vc = {
    base: "light",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: ft.app,
    appContentBg: j.lightest,
    appPreviewBg: j.lightest,
    appBorderColor: j.border,
    appBorderRadius: 4,
    fontBase: Qe.fonts.base,
    fontCode: Qe.fonts.mono,
    textColor: j.darkest,
    textInverseColor: j.lightest,
    textMutedColor: j.dark,
    barTextColor: j.mediumdark,
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: j.lightest,
    buttonBg: ft.app,
    buttonBorder: j.medium,
    booleanBg: j.mediumlight,
    booleanSelectedBg: j.lightest,
    inputBg: j.lightest,
    inputBorder: j.border,
    inputTextColor: j.darkest,
    inputBorderRadius: 4,
  },
  na = Vc,
  zc = {
    base: "dark",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: "#222425",
    appContentBg: "#1B1C1D",
    appPreviewBg: j.lightest,
    appBorderColor: "rgba(255,255,255,.1)",
    appBorderRadius: 4,
    fontBase: Qe.fonts.base,
    fontCode: Qe.fonts.mono,
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
  qc = zc,
  { window: Na } = ec,
  Uc = (e) => ({ color: e }),
  Wc = (e) =>
    typeof e != "string"
      ? (tc.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
        ),
        !1)
      : !0,
  Gc = (e) => !/(gradient|var|calc)/.test(e),
  Yc = (e, t) =>
    e === "darken"
      ? br(`${Lc(1, t)}`, 0.95)
      : e === "lighten"
      ? br(`${$c(1, t)}`, 0.95)
      : t,
  Kc = (e) => (t) => {
    if (!Wc(t) || !Gc(t)) return t;
    try {
      return Yc(e, t);
    } catch {
      return t;
    }
  },
  pr = Kc("lighten"),
  fi = () =>
    !Na || !Na.matchMedia
      ? "light"
      : Na.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  ln = { light: na, dark: qc, normal: na };
fi();
const { logger: Xc } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var Jc = Pn({
    "../../node_modules/react-is/cjs/react-is.development.js"(e) {
      (function () {
        var t = typeof Symbol == "function" && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          a = t ? Symbol.for("react.portal") : 60106,
          o = t ? Symbol.for("react.fragment") : 60107,
          l = t ? Symbol.for("react.strict_mode") : 60108,
          i = t ? Symbol.for("react.profiler") : 60114,
          u = t ? Symbol.for("react.provider") : 60109,
          s = t ? Symbol.for("react.context") : 60110,
          c = t ? Symbol.for("react.async_mode") : 60111,
          d = t ? Symbol.for("react.concurrent_mode") : 60111,
          f = t ? Symbol.for("react.forward_ref") : 60112,
          p = t ? Symbol.for("react.suspense") : 60113,
          g = t ? Symbol.for("react.suspense_list") : 60120,
          h = t ? Symbol.for("react.memo") : 60115,
          b = t ? Symbol.for("react.lazy") : 60116,
          x = t ? Symbol.for("react.block") : 60121,
          w = t ? Symbol.for("react.fundamental") : 60117,
          S = t ? Symbol.for("react.responder") : 60118,
          v = t ? Symbol.for("react.scope") : 60119;
        function E(B) {
          return (
            typeof B == "string" ||
            typeof B == "function" ||
            B === o ||
            B === d ||
            B === i ||
            B === l ||
            B === p ||
            B === g ||
            (typeof B == "object" &&
              B !== null &&
              (B.$$typeof === b ||
                B.$$typeof === h ||
                B.$$typeof === u ||
                B.$$typeof === s ||
                B.$$typeof === f ||
                B.$$typeof === w ||
                B.$$typeof === S ||
                B.$$typeof === v ||
                B.$$typeof === x))
          );
        }
        function y(B) {
          if (typeof B == "object" && B !== null) {
            var $e = B.$$typeof;
            switch ($e) {
              case r:
                var Ze = B.type;
                switch (Ze) {
                  case c:
                  case d:
                  case o:
                  case i:
                  case l:
                  case p:
                    return Ze;
                  default:
                    var yt = Ze && Ze.$$typeof;
                    switch (yt) {
                      case s:
                      case f:
                      case b:
                      case h:
                      case u:
                        return yt;
                      default:
                        return $e;
                    }
                }
              case a:
                return $e;
            }
          }
        }
        var A = c,
          k = d,
          C = s,
          O = u,
          R = r,
          F = f,
          L = o,
          T = b,
          I = h,
          D = a,
          M = i,
          N = l,
          V = p,
          $ = !1;
        function Z(B) {
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
          return y(B) === s;
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
        function le(B) {
          return y(B) === h;
        }
        function ge(B) {
          return y(B) === a;
        }
        function nt(B) {
          return y(B) === i;
        }
        function Oe(B) {
          return y(B) === l;
        }
        function Ne(B) {
          return y(B) === p;
        }
        (e.AsyncMode = A),
          (e.ConcurrentMode = k),
          (e.ContextConsumer = C),
          (e.ContextProvider = O),
          (e.Element = R),
          (e.ForwardRef = F),
          (e.Fragment = L),
          (e.Lazy = T),
          (e.Memo = I),
          (e.Portal = D),
          (e.Profiler = M),
          (e.StrictMode = N),
          (e.Suspense = V),
          (e.isAsyncMode = Z),
          (e.isConcurrentMode = Y),
          (e.isContextConsumer = ee),
          (e.isContextProvider = G),
          (e.isElement = K),
          (e.isForwardRef = P),
          (e.isFragment = z),
          (e.isLazy = q),
          (e.isMemo = le),
          (e.isPortal = ge),
          (e.isProfiler = nt),
          (e.isStrictMode = Oe),
          (e.isSuspense = Ne),
          (e.isValidElementType = E),
          (e.typeOf = y);
      })();
    },
  }),
  Qc = Pn({
    "../../node_modules/react-is/index.js"(e, t) {
      t.exports = Jc();
    },
  }),
  mi = Pn({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      var r = Qc(),
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
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      (u[r.ForwardRef] = l), (u[r.Memo] = i);
      function s(x) {
        return r.isMemo(x) ? i : u[x.$$typeof] || a;
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        h = Object.prototype;
      function b(x, w, S) {
        if (typeof w != "string") {
          if (h) {
            var v = g(w);
            v && v !== h && b(x, v, S);
          }
          var E = d(w);
          f && (E = E.concat(f(w)));
          for (var y = s(x), A = s(w), k = 0; k < E.length; ++k) {
            var C = E[k];
            if (!o[C] && !(S && S[C]) && !(A && A[C]) && !(y && y[C])) {
              var O = p(w, C);
              try {
                c(x, C, O);
              } catch {}
            }
          }
        }
        return x;
      }
      t.exports = b;
    },
  });
function sn() {
  return (
    (sn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    sn.apply(this, arguments)
  );
}
function gi(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var e0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  In = gi(function (e) {
    return (
      e0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function t0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function r0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var a0 = (function () {
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
          this._insertTag(r0(this));
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
          var l = t0(a);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch (i) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                i
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
  me = "-ms-",
  oa = "-moz-",
  U = "-webkit-",
  jn = "comm",
  Nn = "rule",
  Zn = "decl",
  n0 = "@import",
  hi = "@keyframes",
  o0 = "@layer",
  l0 = Math.abs,
  ga = String.fromCharCode,
  i0 = Object.assign;
function s0(e, t) {
  return ue(e, 0) ^ 45
    ? (((((((t << 2) ^ ue(e, 0)) << 2) ^ ue(e, 1)) << 2) ^ ue(e, 2)) << 2) ^
        ue(e, 3)
    : 0;
}
function bi(e) {
  return e.trim();
}
function u0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function un(e, t) {
  return e.indexOf(t);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function yr(e, t, r) {
  return e.slice(t, r);
}
function Ye(e) {
  return e.length;
}
function Hn(e) {
  return e.length;
}
function Zr(e, t) {
  return t.push(e), e;
}
function c0(e, t) {
  return e.map(t).join("");
}
var ha = 1,
  zt = 1,
  yi = 0,
  Ae = 0,
  re = 0,
  Qt = "";
function ba(e, t, r, a, o, l, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: a,
    props: o,
    children: l,
    line: ha,
    column: zt,
    length: i,
    return: "",
  };
}
function sr(e, t) {
  return i0(ba("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function d0() {
  return re;
}
function p0() {
  return (
    (re = Ae > 0 ? ue(Qt, --Ae) : 0), zt--, re === 10 && ((zt = 1), ha--), re
  );
}
function Se() {
  return (
    (re = Ae < yi ? ue(Qt, Ae++) : 0), zt++, re === 10 && ((zt = 1), ha++), re
  );
}
function tt() {
  return ue(Qt, Ae);
}
function Yr() {
  return Ae;
}
function Rr(e, t) {
  return yr(Qt, e, t);
}
function vr(e) {
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
function Ei(e) {
  return (ha = zt = 1), (yi = Ye((Qt = e))), (Ae = 0), [];
}
function xi(e) {
  return (Qt = ""), e;
}
function Kr(e) {
  return bi(Rr(Ae - 1, cn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function f0(e) {
  for (; (re = tt()) && re < 33; ) Se();
  return vr(e) > 2 || vr(re) > 3 ? "" : " ";
}
function m0(e, t) {
  for (
    ;
    --t &&
    Se() &&
    !(re < 48 || re > 102 || (re > 57 && re < 65) || (re > 70 && re < 97));

  );
  return Rr(e, Yr() + (t < 6 && tt() == 32 && Se() == 32));
}
function cn(e) {
  for (; Se(); )
    switch (re) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cn(re);
        break;
      case 40:
        e === 41 && cn(e);
        break;
      case 92:
        Se();
        break;
    }
  return Ae;
}
function g0(e, t) {
  for (; Se() && e + re !== 47 + 10 && !(e + re === 42 + 42 && tt() === 47); );
  return "/*" + Rr(t, Ae - 1) + "*" + ga(e === 47 ? e : Se());
}
function h0(e) {
  for (; !vr(tt()); ) Se();
  return Rr(e, Ae);
}
function b0(e) {
  return xi(Xr("", null, null, null, [""], (e = Ei(e)), 0, [0], e));
}
function Xr(e, t, r, a, o, l, i, u, s) {
  for (
    var c = 0,
      d = 0,
      f = i,
      p = 0,
      g = 0,
      h = 0,
      b = 1,
      x = 1,
      w = 1,
      S = 0,
      v = "",
      E = o,
      y = l,
      A = a,
      k = v;
    x;

  )
    switch (((h = S), (S = Se()))) {
      case 40:
        if (h != 108 && ue(k, f - 1) == 58) {
          un((k += W(Kr(S), "&", "&\f")), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Kr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += f0(h);
        break;
      case 92:
        k += m0(Yr() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            Zr(y0(g0(Se(), Yr()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * b:
        u[c++] = Ye(k) * w;
      case 125 * b:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            x = 0;
          case 59 + d:
            w == -1 && (k = W(k, /\f/g, "")),
              g > 0 &&
                Ye(k) - f &&
                Zr(
                  g > 32
                    ? Uo(k + ";", a, r, f - 1)
                    : Uo(W(k, " ", "") + ";", a, r, f - 2),
                  s
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Zr((A = qo(k, t, r, c, d, o, u, v, (E = []), (y = []), f)), l),
              S === 123)
            )
              if (d === 0) Xr(k, t, A, A, E, l, f, u, y);
              else
                switch (p === 99 && ue(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(
                      e,
                      A,
                      A,
                      a && Zr(qo(e, A, A, 0, 0, o, u, v, o, (E = []), f), y),
                      o,
                      y,
                      f,
                      u,
                      a ? E : y
                    );
                    break;
                  default:
                    Xr(k, A, A, A, [""], y, 0, u, y);
                }
        }
        (c = d = g = 0), (b = w = 1), (v = k = ""), (f = i);
        break;
      case 58:
        (f = 1 + Ye(k)), (g = h);
      default:
        if (b < 1) {
          if (S == 123) --b;
          else if (S == 125 && b++ == 0 && p0() == 125) continue;
        }
        switch (((k += ga(S)), S * b)) {
          case 38:
            w = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (u[c++] = (Ye(k) - 1) * w), (w = 1);
            break;
          case 64:
            tt() === 45 && (k += Kr(Se())),
              (p = tt()),
              (d = f = Ye((v = k += h0(Yr())))),
              S++;
            break;
          case 45:
            h === 45 && Ye(k) == 2 && (b = 0);
        }
    }
  return l;
}
function qo(e, t, r, a, o, l, i, u, s, c, d) {
  for (
    var f = o - 1, p = o === 0 ? l : [""], g = Hn(p), h = 0, b = 0, x = 0;
    h < a;
    ++h
  )
    for (var w = 0, S = yr(e, f + 1, (f = l0((b = i[h])))), v = e; w < g; ++w)
      (v = bi(b > 0 ? p[w] + " " + S : W(S, /&\f/g, p[w]))) && (s[x++] = v);
  return ba(e, t, r, o === 0 ? Nn : u, s, c, d);
}
function y0(e, t, r) {
  return ba(e, t, r, jn, ga(d0()), yr(e, 2, -2), 0);
}
function Uo(e, t, r, a) {
  return ba(e, t, r, Zn, yr(e, 0, a), yr(e, a + 1, -1), a);
}
function Ht(e, t) {
  for (var r = "", a = Hn(e), o = 0; o < a; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function v0(e, t, r, a) {
  switch (e.type) {
    case o0:
      if (e.children.length) break;
    case n0:
    case Zn:
      return (e.return = e.return || e.value);
    case jn:
      return "";
    case hi:
      return (e.return = e.value + "{" + Ht(e.children, a) + "}");
    case Nn:
      e.value = e.props.join(",");
  }
  return Ye((r = Ht(e.children, a)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function E0(e) {
  var t = Hn(e);
  return function (r, a, o, l) {
    for (var i = "", u = 0; u < t; u++) i += e[u](r, a, o, l) || "";
    return i;
  };
}
var Wo = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var a = e(r);
      return t.set(r, a), a;
    };
  },
  x0 = function (e, t, r) {
    for (
      var a = 0, o = 0;
      (a = o), (o = tt()), a === 38 && o === 12 && (t[r] = 1), !vr(o);

    )
      Se();
    return Rr(e, Ae);
  },
  A0 = function (e, t) {
    var r = -1,
      a = 44;
    do
      switch (vr(a)) {
        case 0:
          a === 38 && tt() === 12 && (t[r] = 1), (e[r] += x0(Ae - 1, t, r));
          break;
        case 2:
          e[r] += Kr(a);
          break;
        case 4:
          if (a === 44) {
            (e[++r] = tt() === 58 ? "&\f" : ""), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += ga(a);
      }
    while ((a = Se()));
    return e;
  },
  w0 = function (e, t) {
    return xi(A0(Ei(e), t));
  },
  Go = new WeakMap(),
  S0 = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          a = e.column === r.column && e.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Go.get(r)) &&
        !a
      ) {
        Go.set(e, !0);
        for (
          var o = [], l = w0(t, o), i = r.props, u = 0, s = 0;
          u < l.length;
          u++
        )
          for (var c = 0; c < i.length; c++, s++)
            e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + " " + l[u];
      }
    }
  },
  C0 = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  },
  k0 =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  _0 = function (e) {
    return e.type === "comm" && e.children.indexOf(k0) > -1;
  },
  O0 = function (e) {
    return function (t, r, a) {
      if (!(t.type !== "rule" || e.compat)) {
        var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (o) {
          for (
            var l = !!t.parent, i = l ? t.parent.children : a, u = i.length - 1;
            u >= 0;
            u--
          ) {
            var s = i[u];
            if (s.line < t.line) break;
            if (s.column < t.column) {
              if (_0(s)) return;
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
  Ai = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  R0 = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Ai(t[r])) return !0;
    return !1;
  },
  Yo = function (e) {
    (e.type = ""),
      (e.value = ""),
      (e.return = ""),
      (e.children = ""),
      (e.props = "");
  },
  F0 = function (e, t, r) {
    Ai(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Yo(e))
        : R0(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Yo(e)));
  };
function wi(e, t) {
  switch (s0(e, t)) {
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
      return U + e + oa + e + me + e + e;
    case 6828:
    case 4268:
      return U + e + me + e + e;
    case 6165:
      return U + e + me + "flex-" + e + e;
    case 5187:
      return (
        U + e + W(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + me + "flex-$1$2") + e
      );
    case 5443:
      return U + e + me + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        U +
        e +
        me +
        "flex-line-pack" +
        W(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return U + e + me + W(e, "shrink", "negative") + e;
    case 5292:
      return U + e + me + W(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        U +
        "box-" +
        W(e, "-grow", "") +
        U +
        e +
        me +
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
          W(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + me + "flex-pack:$3"),
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
      if (Ye(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45) break;
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  U +
                  "$2-$3$1" +
                  oa +
                  (ue(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~un(e, "stretch")
              ? wi(W(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ue(e, t + 1) !== 115) break;
    case 6444:
      switch (ue(e, Ye(e) - 3 - (~un(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + U) + e;
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                U +
                (ue(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                U +
                "$2$3$1" +
                me +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return U + e + me + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + me + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + me + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + me + e + e;
  }
  return e;
}
var T0 = function (e, t, r, a) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Zn:
          e.return = wi(e.value, e.length);
          break;
        case hi:
          return Ht([sr(e, { value: W(e.value, "@", "@" + U) })], a);
        case Nn:
          if (e.length)
            return c0(e.props, function (o) {
              switch (u0(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ht(
                    [sr(e, { props: [W(o, /:(read-\w+)/, ":" + oa + "$1")] })],
                    a
                  );
                case "::placeholder":
                  return Ht(
                    [
                      sr(e, {
                        props: [W(o, /:(plac\w+)/, ":" + U + "input-$1")],
                      }),
                      sr(e, { props: [W(o, /:(plac\w+)/, ":" + oa + "$1")] }),
                      sr(e, { props: [W(o, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    a
                  );
              }
              return "";
            });
      }
  },
  D0 = [T0],
  L0 = function (e) {
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
    var a = e.stylisPlugins || D0;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      );
    var o = {},
      l,
      i = [];
    (l = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (h) {
          for (
            var b = h.getAttribute("data-emotion").split(" "), x = 1;
            x < b.length;
            x++
          )
            o[b[x]] = !0;
          i.push(h);
        }
      );
    var u,
      s = [S0, C0];
    s.push(
      O0({
        get compat() {
          return g.compat;
        },
      }),
      F0
    );
    {
      var c,
        d = [
          v0,
          function (h) {
            h.root ||
              (h.return
                ? c.insert(h.return)
                : h.value && h.type !== jn && c.insert(h.value + "{}"));
          },
        ],
        f = E0(s.concat(a, d)),
        p = function (h) {
          return Ht(b0(h), f);
        };
      u = function (h, b, x, w) {
        (c = x),
          b.map !== void 0 &&
            (c = {
              insert: function (S) {
                x.insert(S + b.map);
              },
            }),
          p(h ? h + "{" + b.styles + "}" : b.styles),
          w && (g.inserted[b.name] = !0);
      };
    }
    var g = {
      key: t,
      sheet: new a0({
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
    return g.sheet.hydrate(i), g;
  };
function dn() {
  return (
    (dn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    dn.apply(this, arguments)
  );
}
ui(mi());
var M0 = !0;
function Vn(e, t, r) {
  var a = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (a += o + " ");
    }),
    a
  );
}
var ya = function (e, t, r) {
    var a = e.key + "-" + t.name;
    (r === !1 || M0 === !1) &&
      e.registered[a] === void 0 &&
      (e.registered[a] = t.styles);
  },
  va = function (e, t, r) {
    ya(e, t, r);
    var a = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? "." + a : "", o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function B0(e) {
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
var $0 = {
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
  Ko = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  P0 =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  I0 = /[A-Z]|^ms/g,
  Si = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  zn = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Xo = function (e) {
    return e != null && typeof e != "boolean";
  },
  Za = gi(function (e) {
    return zn(e) ? e : e.replace(I0, "-$&").toLowerCase();
  }),
  la = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(Si, function (r, a, o) {
            return (Ke = { name: a, styles: o, next: Ke }), a;
          });
    }
    return $0[e] !== 1 && !zn(e) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
(Jo =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (Qo = ["normal", "none", "initial", "inherit", "unset"]),
  (el = la),
  (tl = /^-ms-/),
  (rl = /-(.)/g),
  (Ha = {}),
  (la = function (e, t) {
    if (
      e === "content" &&
      (typeof t != "string" ||
        (Qo.indexOf(t) === -1 &&
          !Jo.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          "\"'`"
      );
    var r = el(e, t);
    return (
      r !== "" &&
        !zn(e) &&
        e.indexOf("-") !== -1 &&
        Ha[e] === void 0 &&
        ((Ha[e] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            e.replace(tl, "ms-").replace(rl, function (a, o) {
              return o.toUpperCase();
            }) +
            "?"
        )),
      r
    );
  });
var Jo,
  Qo,
  el,
  tl,
  rl,
  Ha,
  Ci =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Er(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR") throw new Error(Ci);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Ke = { name: r.name, styles: r.styles, next: Ke }), r.name;
      if (r.styles !== void 0) {
        var a = r.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (Ke = { name: a.name, styles: a.styles, next: Ke }), (a = a.next);
        var o = r.styles + ";";
        return r.map !== void 0 && (o += r.map), o;
      }
      return j0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ke,
          i = r(e);
        return (Ke = l), Er(e, t, i);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case "string":
      var u = [],
        s = r.replace(Si, function (d, f, p) {
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
            [].concat(u, ["`" + s + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + s + "`")
        );
      break;
  }
  if (t == null) return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function j0(e, t, r) {
  var a = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) a += Er(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0
          ? (a += l + "{" + t[i] + "}")
          : Xo(i) && (a += Za(l) + ":" + la(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR") throw new Error(Ci);
        if (
          Array.isArray(i) &&
          typeof i[0] == "string" &&
          (t == null || t[i[0]] === void 0)
        )
          for (var u = 0; u < i.length; u++)
            Xo(i[u]) && (a += Za(l) + ":" + la(l, i[u]) + ";");
        else {
          var s = Er(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              a += Za(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(P0), (a += l + "{" + s + "}");
          }
        }
      }
    }
  return a;
}
var al = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ki;
ki = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Ke,
  qt = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var a = !0,
      o = "";
    Ke = void 0;
    var l = e[0];
    l == null || l.raw === void 0
      ? ((a = !1), (o += Er(r, t, l)))
      : (l[0] === void 0 && console.error(Ko), (o += l[0]));
    for (var i = 1; i < e.length; i++)
      (o += Er(r, t, e[i])),
        a && (l[i] === void 0 && console.error(Ko), (o += l[i]));
    var u;
    (o = o.replace(ki, function (f) {
      return (u = f), "";
    })),
      (al.lastIndex = 0);
    for (var s = "", c; (c = al.exec(o)) !== null; ) s += "-" + c[1];
    var d = B0(o) + s;
    return {
      name: d,
      styles: o,
      map: u,
      next: Ke,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  N0 = {}.hasOwnProperty,
  qn = m.createContext(typeof HTMLElement < "u" ? L0({ key: "css" }) : null);
qn.displayName = "EmotionCacheContext";
qn.Provider;
var Ea = function (e) {
    return m.forwardRef(function (t, r) {
      var a = m.useContext(qn);
      return e(t, a, r);
    });
  },
  ht = m.createContext({});
ht.displayName = "EmotionThemeContext";
var Z0 = function () {
    return m.useContext(ht);
  },
  H0 = function (e, t) {
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
    return dn({}, e, t);
  },
  V0 = Wo(function (e) {
    return Wo(function (t) {
      return H0(e, t);
    });
  }),
  _i = function (e) {
    var t = m.useContext(ht);
    return (
      e.theme !== t && (t = V0(t)(e.theme)),
      m.createElement(ht.Provider, { value: t }, e.children)
    );
  },
  nl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  ol = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  z0 = function (e) {
    var t = e.cache,
      r = e.serialized,
      a = e.isStringTag;
    return (
      ya(t, r, a),
      Bn(function () {
        return va(t, r, a);
      }),
      null
    );
  },
  q0 = Ea(function (e, t, r) {
    var a = e.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var o = e[nl],
      l = [a],
      i = "";
    typeof e.className == "string"
      ? (i = Vn(t.registered, l, e.className))
      : e.className != null && (i = e.className + " ");
    var u = qt(l, void 0, m.useContext(ht));
    if (u.name.indexOf("-") === -1) {
      var s = e[ol];
      s && (u = qt([u, "label:" + s + ";"]));
    }
    i += t.key + "-" + u.name;
    var c = {};
    for (var d in e)
      N0.call(e, d) && d !== "css" && d !== nl && d !== ol && (c[d] = e[d]);
    return (
      (c.ref = r),
      (c.className = i),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(z0, {
          cache: t,
          serialized: u,
          isStringTag: typeof o == "string",
        }),
        m.createElement(o, c)
      )
    );
  });
q0.displayName = "EmotionCssPropInternal";
ui(mi());
var U0 = {
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
  ll = !1,
  W0 = Ea(function (e, t) {
    !ll &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (ll = !0));
    var r = e.styles,
      a = qt([r], void 0, m.useContext(ht)),
      o = m.useRef();
    return (
      Zo(
        function () {
          var l = t.key + "-global",
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            u = !1,
            s = document.querySelector(
              'style[data-emotion="' + l + " " + a.name + '"]'
            );
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null &&
              ((u = !0), s.setAttribute("data-emotion", l), i.hydrate([s])),
            (o.current = [i, u]),
            function () {
              i.flush();
            }
          );
        },
        [t]
      ),
      Zo(
        function () {
          var l = o.current,
            i = l[0],
            u = l[1];
          if (u) {
            l[1] = !1;
            return;
          }
          if ((a.next !== void 0 && va(t, a.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = s), i.flush();
          }
          t.insert("", a, i, !1);
        },
        [t, a.name]
      ),
      null
    );
  });
W0.displayName = "EmotionGlobal";
function Un() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return qt(t);
}
var er = function () {
    var e = Un.apply(void 0, arguments),
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
  G0 = function e(t) {
    for (var r = t.length, a = 0, o = ""; a < r; a++) {
      var l = t[a];
      if (l != null) {
        var i = void 0;
        switch (typeof l) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(l)) i = e(l);
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
                (i = "");
              for (var u in l) l[u] && u && (i && (i += " "), (i += u));
            }
            break;
          }
          default:
            i = l;
        }
        i && (o && (o += " "), (o += i));
      }
    }
    return o;
  };
function Y0(e, t, r) {
  var a = [],
    o = Vn(e, a, r);
  return a.length < 2 ? r : o + t(a);
}
var K0 = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      Bn(function () {
        for (var a = 0; a < r.length; a++) va(t, r[a], !1);
      }),
      null
    );
  },
  X0 = Ea(function (e, t) {
    var r = !1,
      a = [],
      o = function () {
        if (r) throw new Error("css can only be used during render");
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d];
        var f = qt(c, t.registered);
        return a.push(f), ya(t, f, !1), t.key + "-" + f.name;
      },
      l = function () {
        if (r) throw new Error("cx can only be used during render");
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d];
        return Y0(t.registered, o, G0(c));
      },
      i = { css: o, cx: l, theme: m.useContext(ht) },
      u = e.children(i);
    return (
      (r = !0),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(K0, { cache: t, serializedArr: a }),
        u
      )
    );
  });
X0.displayName = "EmotionClassNames";
(Va = !0),
  (il = typeof jest < "u" || typeof vi < "u"),
  Va &&
    !il &&
    ((za = typeof globalThis < "u" ? globalThis : Va ? window : global),
    (qa = "__EMOTION_REACT_" + U0.version.split(".")[0] + "__"),
    za[qa] &&
      console.warn(
        "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
      ),
    (za[qa] = !0));
var Va,
  il,
  za,
  qa,
  J0 = In,
  Q0 = function (e) {
    return e !== "theme";
  },
  sl = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? J0 : Q0;
  },
  ul = function (e, t, r) {
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
  cl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  e1 = function (e) {
    var t = e.cache,
      r = e.serialized,
      a = e.isStringTag;
    return (
      ya(t, r, a),
      Bn(function () {
        return va(t, r, a);
      }),
      null
    );
  },
  t1 = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var a = t.__emotion_real === t,
      o = (a && t.__emotion_base) || t,
      l,
      i;
    r !== void 0 && ((l = r.label), (i = r.target));
    var u = ul(t, r, a),
      s = u || sl(o),
      c = !s("as");
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
        d[0][0] === void 0 && console.error(cl), f.push(d[0][0]);
        for (var p = d.length, g = 1; g < p; g++)
          d[0][g] === void 0 && console.error(cl), f.push(d[g], d[0][g]);
      }
      var h = Ea(function (b, x, w) {
        var S = (c && b.as) || o,
          v = "",
          E = [],
          y = b;
        if (b.theme == null) {
          y = {};
          for (var A in b) y[A] = b[A];
          y.theme = m.useContext(ht);
        }
        typeof b.className == "string"
          ? (v = Vn(x.registered, E, b.className))
          : b.className != null && (v = b.className + " ");
        var k = qt(f.concat(E), x.registered, y);
        (v += x.key + "-" + k.name), i !== void 0 && (v += " " + i);
        var C = c && u === void 0 ? sl(S) : s,
          O = {};
        for (var R in b) (c && R === "as") || (C(R) && (O[R] = b[R]));
        return (
          (O.className = v),
          (O.ref = w),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(e1, {
              cache: x,
              serialized: k,
              isStringTag: typeof S == "string",
            }),
            m.createElement(S, O)
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
            return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
          },
        }),
        (h.withComponent = function (b, x) {
          return e(b, sn({}, r, x, { shouldForwardProp: ul(h, x, !0) })).apply(
            void 0,
            f
          );
        }),
        h
      );
    };
  },
  r1 = [
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
  _ = t1.bind();
r1.forEach(function (e) {
  _[e] = _(e);
});
var a1 = Dt(1)(({ typography: e }) => ({
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
Dt(1)(({ color: e, background: t, typography: r }) => {
  let a = a1({ typography: r });
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
var n1 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  o1 = er`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Oi = er`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  l1 = er`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  i1 = er`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  s1 = Un`
  animation: ${Oi} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  u1 = Un`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  c1 = {
    rotate360: o1,
    glow: Oi,
    float: l1,
    jiggle: i1,
    inlineGlow: s1,
    hoverable: u1,
  },
  d1 = {
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
  p1 = {
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
  f1 = (e) =>
    Object.entries(e).reduce((t, [r, a]) => ({ ...t, [r]: Uc(a) }), {}),
  m1 = ({ colors: e, mono: t }) => {
    let r = f1(e);
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
  g1 = {
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
  h1 = {
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
  b1 = (e) => ({
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
  pn = (e = ln[fi()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: a,
      appBg: o,
      appContentBg: l,
      appPreviewBg: i,
      appBorderColor: u,
      appBorderRadius: s,
      fontBase: c,
      fontCode: d,
      textColor: f,
      textInverseColor: p,
      barTextColor: g,
      barHoverColor: h,
      barSelectedColor: b,
      barBg: x,
      buttonBg: w,
      buttonBorder: S,
      booleanBg: v,
      booleanSelectedBg: E,
      inputBg: y,
      inputBorder: A,
      inputTextColor: k,
      inputBorderRadius: C,
      brandTitle: O,
      brandUrl: R,
      brandImage: F,
      brandTarget: L,
      gridCellSize: T,
      ...I
    } = e;
    return {
      ...I,
      base: t,
      color: b1(e),
      background: {
        app: o,
        bar: x,
        content: l,
        preview: i,
        gridCellSize: T || ft.gridCellSize,
        hoverable: ft.hoverable,
        positive: ft.positive,
        negative: ft.negative,
        warning: ft.warning,
        critical: ft.critical,
      },
      typography: {
        fonts: { base: c, mono: d },
        weight: Qe.weight,
        size: Qe.size,
      },
      animation: c1,
      easing: n1,
      input: { background: y, border: A, borderRadius: C, color: k },
      button: { background: w || y, border: S || A },
      boolean: { background: v || A, selectedBackground: E || y },
      layoutMargin: 10,
      appBorderColor: u,
      appBorderRadius: s,
      barTextColor: g,
      barHoverColor: h || a,
      barSelectedColor: b || a,
      barBg: x,
      brand: { title: O, url: R, image: F || (O ? null : void 0), target: L },
      code: m1({ colors: t === "light" ? g1 : h1, mono: d }),
      addonActionsTheme: {
        ...(t === "light" ? p1 : d1),
        BASE_FONT_FAMILY: d,
        BASE_FONT_SIZE: Qe.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: f,
        ARROW_COLOR: jc(0.2, u),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: d,
        TREENODE_FONT_SIZE: Qe.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  y1 = (e) => Object.keys(e).length === 0,
  Ua = (e) => e != null && typeof e == "object",
  v1 = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  E1 = () => Object.create(null),
  Ri = (e, t) =>
    e === t || !Ua(e) || !Ua(t)
      ? {}
      : Object.keys(e).reduce((r, a) => {
          if (v1(t, a)) {
            let o = Ri(e[a], t[a]);
            return (Ua(o) && y1(o)) || (r[a] = o), r;
          }
          return (r[a] = void 0), r;
        }, E1()),
  x1 = Ri;
function A1(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var a = Array.from(typeof e == "string" ? [e] : e);
  a[a.length - 1] = a[a.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = a.reduce(function (u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? u.concat(
          c.map(function (d) {
            var f, p;
            return (p =
              (f = d.match(/[\t ]/g)) === null || f === void 0
                ? void 0
                : f.length) !== null && p !== void 0
              ? p
              : 0;
          })
        )
      : u;
  }, []);
  if (o.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        "}",
      "g"
    );
    a = a.map(function (u) {
      return u.replace(
        l,
        `
`
      );
    });
  }
  a[0] = a[0].replace(/^\r?\n/, "");
  var i = a[0];
  return (
    t.forEach(function (u, s) {
      var c = i.match(/(?:^|\n)( *)$/),
        d = c ? c[1] : "",
        f = u;
      typeof u == "string" &&
        u.includes(`
`) &&
        (f = String(u)
          .split(
            `
`
          )
          .map(function (p, g) {
            return g === 0 ? p : "" + d + p;
          }).join(`
`)),
        (i += f + a[s + 1]);
    }),
    i
  );
}
var w1 = (e) => {
    if (!e) return pn(na);
    let t = x1(na, e);
    return (
      Object.keys(t).length &&
        Xc.warn(
          A1`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      pn(e)
    );
  },
  fn =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  S1 = Object.create,
  Fi = Object.defineProperty,
  C1 = Object.getOwnPropertyDescriptor,
  Ti = Object.getOwnPropertyNames,
  k1 = Object.getPrototypeOf,
  _1 = Object.prototype.hasOwnProperty,
  H = (e, t) =>
    function () {
      return t || (0, e[Ti(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  O1 = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Ti(t))
        !_1.call(e, o) &&
          o !== r &&
          Fi(e, o, {
            get: () => t[o],
            enumerable: !(a = C1(t, o)) || a.enumerable,
          });
    return e;
  },
  ke = (e, t, r) => (
    (r = e != null ? S1(k1(e)) : {}),
    O1(
      t || !e || !e.__esModule
        ? Fi(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  R1 = H({
    "../../node_modules/refractor/lang/markdown.js"(e, t) {
      (t.exports = r), (r.displayName = "markdown"), (r.aliases = ["md"]);
      function r(a) {
        (function (o) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function i(h) {
            return (
              (h = h.replace(/<inner>/g, function () {
                return l;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")")
            );
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
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
                pattern: RegExp("^" + s + c + "(?:" + s + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + s + c + ")(?:" + s + ")*$"),
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
                    pattern: RegExp("^(" + s + ")" + c + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + s + "$"),
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
                pattern: i(
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
                pattern: i(
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
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
                pattern: i(
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
              function b(x) {
                if (!(!x || typeof x == "string"))
                  for (var w = 0, S = x.length; w < S; w++) {
                    var v = x[w];
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
                      var A = E.content
                        .replace(/\b#/g, "sharp")
                        .replace(/\b\+\+/g, "pp");
                      A = (/[a-z][\w-]*/i.exec(A) || [""])[0].toLowerCase();
                      var k = "language-" + A;
                      y.alias
                        ? typeof y.alias == "string"
                          ? (y.alias = [y.alias, k])
                          : y.alias.push(k)
                        : (y.alias = [k]);
                    }
                  }
              }
              b(h.tokens);
            }),
            o.hooks.add("wrap", function (h) {
              if (h.type === "code-block") {
                for (var b = "", x = 0, w = h.classes.length; x < w; x++) {
                  var S = h.classes[x],
                    v = /language-(.+)/.exec(S);
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
                      var A = document.getElementById(y);
                      A &&
                        (A.innerHTML = o.highlight(
                          A.textContent,
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
              (b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (x, w) {
                if (((w = w.toLowerCase()), w[0] === "#")) {
                  var S;
                  return (
                    w[1] === "x"
                      ? (S = parseInt(w.slice(2), 16))
                      : (S = Number(w.slice(1))),
                    p(S)
                  );
                } else {
                  var v = f[w];
                  return v || x;
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
  F1 = H({
    "../../node_modules/refractor/lang/yaml.js"(e, t) {
      (t.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
      function r(a) {
        (function (o) {
          var l = /[*&][^\s[\]{},]+/,
            i =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u =
              "(?:" +
              i.source +
              "(?:[ 	]+" +
              l.source +
              ")?|" +
              l.source +
              "(?:[ 	]+" +
              i.source +
              ")?)",
            s =
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
                    return "(?:" + s + "|" + c + ")";
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
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (o.languages.yml = o.languages.yaml);
        })(a);
      }
    },
  }),
  Di = H({
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
  Li = H({
    "../../node_modules/refractor/lang/jsx.js"(e, t) {
      (t.exports = r), (r.displayName = "jsx"), (r.aliases = []);
      function r(a) {
        (function (o) {
          var l = o.util.clone(o.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function c(p, g) {
            return (
              (p = p
                .replace(/<S>/g, function () {
                  return i;
                })
                .replace(/<BRACES>/g, function () {
                  return u;
                })
                .replace(/<SPREAD>/g, function () {
                  return s;
                })),
              RegExp(p, g)
            );
          }
          (s = c(s).source),
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
                  x = !1;
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
                      : (x = !0)),
                  (x || typeof b == "string") &&
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
  T1 = H({
    "../../node_modules/refractor/lang/tsx.js"(e, t) {
      var r = Li(),
        a = Di();
      (t.exports = o), (o.displayName = "tsx"), (o.aliases = []);
      function o(l) {
        l.register(r),
          l.register(a),
          (function (i) {
            var u = i.util.clone(i.languages.typescript);
            (i.languages.tsx = i.languages.extend("jsx", u)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx["literal-property"];
            var s = i.languages.tsx.tag;
            (s.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")",
              s.pattern.flags
            )),
              (s.lookbehind = !0);
          })(l);
      }
    },
  }),
  D1 = H({
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
  L1 = H({
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
  Mi = H({
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
          var i = o.languages.markup;
          i &&
            (i.tag.addInlined("style", "css"),
            i.tag.addAttribute("style", "css"));
        })(a);
      }
    },
  }),
  Bi = H({
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
              var i = {};
              (i["language-" + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[l],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var u = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i,
                },
              };
              u["language-" + l] = {
                pattern: /[\s\S]+/,
                inside: a.languages[l],
              };
              var s = {};
              (s[o] = {
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
                a.languages.insertBefore("markup", "cdata", s);
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
  M1 = H({
    "../../node_modules/xtend/immutable.js"(e, t) {
      t.exports = a;
      var r = Object.prototype.hasOwnProperty;
      function a() {
        for (var o = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          for (var u in i) r.call(i, u) && (o[u] = i[u]);
        }
        return o;
      }
    },
  }),
  $i = H({
    "../../node_modules/property-information/lib/util/schema.js"(e, t) {
      t.exports = a;
      var r = a.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function a(o, l, i) {
        (this.property = o), (this.normal = l), i && (this.space = i);
      }
    },
  }),
  B1 = H({
    "../../node_modules/property-information/lib/util/merge.js"(e, t) {
      var r = M1(),
        a = $i();
      t.exports = o;
      function o(l) {
        for (var i = l.length, u = [], s = [], c = -1, d, f; ++c < i; )
          (d = l[c]), u.push(d.property), s.push(d.normal), (f = d.space);
        return new a(r.apply(null, u), r.apply(null, s), f);
      }
    },
  }),
  Wn = H({
    "../../node_modules/property-information/normalize.js"(e, t) {
      t.exports = r;
      function r(a) {
        return a.toLowerCase();
      }
    },
  }),
  Pi = H({
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
  Gn = H({
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
  Ii = H({
    "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
      var r = Pi(),
        a = Gn();
      (t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0);
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
      function i(s, c, d, f) {
        var p = -1,
          g;
        for (u(this, "space", f), r.call(this, s, c); ++p < l; )
          (g = o[p]), u(this, g, (d & a[g]) === a[g]);
      }
      function u(s, c, d) {
        d && (s[c] = d);
      }
    },
  }),
  Fr = H({
    "../../node_modules/property-information/lib/util/create.js"(e, t) {
      var r = Wn(),
        a = $i(),
        o = Ii();
      t.exports = l;
      function l(i) {
        var u = i.space,
          s = i.mustUseProperty || [],
          c = i.attributes || {},
          d = i.properties,
          f = i.transform,
          p = {},
          g = {},
          h,
          b;
        for (h in d)
          (b = new o(h, f(c, h), d[h], u)),
            s.indexOf(h) !== -1 && (b.mustUseProperty = !0),
            (p[h] = b),
            (g[r(h)] = h),
            (g[r(b.attribute)] = h);
        return new a(p, g, u);
      }
    },
  }),
  $1 = H({
    "../../node_modules/property-information/lib/xlink.js"(e, t) {
      var r = Fr();
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
  P1 = H({
    "../../node_modules/property-information/lib/xml.js"(e, t) {
      var r = Fr();
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
  I1 = H({
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
  ji = H({
    "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(
      e,
      t
    ) {
      var r = I1();
      t.exports = a;
      function a(o, l) {
        return r(o, l.toLowerCase());
      }
    },
  }),
  j1 = H({
    "../../node_modules/property-information/lib/xmlns.js"(e, t) {
      var r = Fr(),
        a = ji();
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: a,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  N1 = H({
    "../../node_modules/property-information/lib/aria.js"(e, t) {
      var r = Gn(),
        a = Fr(),
        o = r.booleanish,
        l = r.number,
        i = r.spaceSeparated;
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
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: o,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: o,
          ariaFlowTo: i,
          ariaGrabbed: o,
          ariaHasPopup: null,
          ariaHidden: o,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: o,
          ariaMultiLine: o,
          ariaMultiSelectable: o,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: o,
          ariaReadOnly: o,
          ariaRelevant: null,
          ariaRequired: o,
          ariaRoleDescription: i,
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
      function u(s, c) {
        return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
      }
    },
  }),
  Z1 = H({
    "../../node_modules/property-information/lib/html.js"(e, t) {
      var r = Gn(),
        a = Fr(),
        o = ji(),
        l = r.boolean,
        i = r.overloadedBoolean,
        u = r.booleanish,
        s = r.number,
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
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: s | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
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
          height: s,
          hidden: l,
          high: s,
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
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
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
          optimum: s,
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
          rows: s,
          rowSpan: s,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
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
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  H1 = H({
    "../../node_modules/property-information/html.js"(e, t) {
      var r = B1(),
        a = $1(),
        o = P1(),
        l = j1(),
        i = N1(),
        u = Z1();
      t.exports = r([o, a, l, i, u]);
    },
  }),
  V1 = H({
    "../../node_modules/property-information/find.js"(e, t) {
      var r = Wn(),
        a = Ii(),
        o = Pi(),
        l = "data";
      t.exports = c;
      var i = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        s = /[A-Z]/g;
      function c(h, b) {
        var x = r(b),
          w = b,
          S = o;
        return x in h.normal
          ? h.property[h.normal[x]]
          : (x.length > 4 &&
              x.slice(0, 4) === l &&
              i.test(b) &&
              (b.charAt(4) === "-" ? (w = d(b)) : (b = f(b)), (S = a)),
            new S(w, b));
      }
      function d(h) {
        var b = h.slice(5).replace(u, g);
        return l + b.charAt(0).toUpperCase() + b.slice(1);
      }
      function f(h) {
        var b = h.slice(4);
        return u.test(b)
          ? h
          : ((b = b.replace(s, p)),
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
  z1 = H({
    "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
      t.exports = a;
      var r = /[#.]/g;
      function a(o, l) {
        for (
          var i = o || "", u = l || "div", s = {}, c = 0, d, f, p;
          c < i.length;

        )
          (r.lastIndex = c),
            (p = r.exec(i)),
            (d = i.slice(c, p ? p.index : i.length)),
            d &&
              (f
                ? f === "#"
                  ? (s.id = d)
                  : s.className
                  ? s.className.push(d)
                  : (s.className = [d])
                : (u = d),
              (c += d.length)),
            p && ((f = p[0]), c++);
        return { type: "element", tagName: u, properties: s, children: [] };
      }
    },
  }),
  q1 = H({
    "../../node_modules/space-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = "",
        r = " ",
        a = /[ \t\n\r\f]+/g;
      function o(i) {
        var u = String(i || t).trim();
        return u === t ? [] : u.split(a);
      }
      function l(i) {
        return i.join(r).trim();
      }
    },
  }),
  U1 = H({
    "../../node_modules/comma-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = ",",
        r = " ",
        a = "";
      function o(i) {
        for (
          var u = [], s = String(i || a), c = s.indexOf(t), d = 0, f = !1, p;
          !f;

        )
          c === -1 && ((c = s.length), (f = !0)),
            (p = s.slice(d, c).trim()),
            (p || !f) && u.push(p),
            (d = c + 1),
            (c = s.indexOf(t, d));
        return u;
      }
      function l(i, u) {
        var s = u || {},
          c = s.padLeft === !1 ? a : r,
          d = s.padRight ? r : a;
        return (
          i[i.length - 1] === a && (i = i.concat(a)), i.join(d + t + c).trim()
        );
      }
    },
  }),
  W1 = H({
    "../../node_modules/hastscript/factory.js"(e, t) {
      var r = V1(),
        a = Wn(),
        o = z1(),
        l = q1().parse,
        i = U1().parse;
      t.exports = s;
      var u = {}.hasOwnProperty;
      function s(x, w, S) {
        var v = S ? b(S) : null;
        return E;
        function E(A, k) {
          var C = o(A, w),
            O = Array.prototype.slice.call(arguments, 2),
            R = C.tagName.toLowerCase(),
            F;
          if (
            ((C.tagName = v && u.call(v, R) ? v[R] : R),
            k && c(k, C) && (O.unshift(k), (k = null)),
            k)
          )
            for (F in k) y(C.properties, F, k[F]);
          return (
            f(C.children, O),
            C.tagName === "template" &&
              ((C.content = { type: "root", children: C.children }),
              (C.children = [])),
            C
          );
        }
        function y(A, k, C) {
          var O, R, F;
          C == null ||
            C !== C ||
            ((O = r(x, k)),
            (R = O.property),
            (F = C),
            typeof F == "string" &&
              (O.spaceSeparated
                ? (F = l(F))
                : O.commaSeparated
                ? (F = i(F))
                : O.commaOrSpaceSeparated && (F = l(i(F).join(" ")))),
            R === "style" && typeof C != "string" && (F = h(F)),
            R === "className" && A.className && (F = A.className.concat(F)),
            (A[R] = p(O, R, F)));
        }
      }
      function c(x, w) {
        return typeof x == "string" || "length" in x || d(w.tagName, x);
      }
      function d(x, w) {
        var S = w.type;
        return x === "input" || !S || typeof S != "string"
          ? !1
          : typeof w.children == "object" && "length" in w.children
          ? !0
          : ((S = S.toLowerCase()),
            x === "button"
              ? S !== "menu" &&
                S !== "submit" &&
                S !== "reset" &&
                S !== "button"
              : "value" in w);
      }
      function f(x, w) {
        var S, v;
        if (typeof w == "string" || typeof w == "number") {
          x.push({ type: "text", value: String(w) });
          return;
        }
        if (typeof w == "object" && "length" in w) {
          for (S = -1, v = w.length; ++S < v; ) f(x, w[S]);
          return;
        }
        if (typeof w != "object" || !("type" in w))
          throw new Error("Expected node, nodes, or string, got `" + w + "`");
        x.push(w);
      }
      function p(x, w, S) {
        var v, E, y;
        if (typeof S != "object" || !("length" in S)) return g(x, w, S);
        for (E = S.length, v = -1, y = []; ++v < E; ) y[v] = g(x, w, S[v]);
        return y;
      }
      function g(x, w, S) {
        var v = S;
        return (
          x.number || x.positiveNumber
            ? !isNaN(v) && v !== "" && (v = Number(v))
            : (x.boolean || x.overloadedBoolean) &&
              typeof v == "string" &&
              (v === "" || a(S) === a(w)) &&
              (v = !0),
          v
        );
      }
      function h(x) {
        var w = [],
          S;
        for (S in x) w.push([S, x[S]].join(": "));
        return w.join("; ");
      }
      function b(x) {
        for (var w = x.length, S = -1, v = {}, E; ++S < w; )
          (E = x[S]), (v[E.toLowerCase()] = E);
        return v;
      }
    },
  }),
  G1 = H({
    "../../node_modules/hastscript/html.js"(e, t) {
      var r = H1(),
        a = W1(),
        o = a(r, "div");
      (o.displayName = "html"), (t.exports = o);
    },
  }),
  Y1 = H({
    "../../node_modules/hastscript/index.js"(e, t) {
      t.exports = G1();
    },
  }),
  K1 = H({
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
  X1 = H({
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
  Ni = H({
    "../../node_modules/is-decimal/index.js"(e, t) {
      t.exports = r;
      function r(a) {
        var o = typeof a == "string" ? a.charCodeAt(0) : a;
        return o >= 48 && o <= 57;
      }
    },
  }),
  J1 = H({
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
  Q1 = H({
    "../../node_modules/is-alphabetical/index.js"(e, t) {
      t.exports = r;
      function r(a) {
        var o = typeof a == "string" ? a.charCodeAt(0) : a;
        return (o >= 97 && o <= 122) || (o >= 65 && o <= 90);
      }
    },
  }),
  ed = H({
    "../../node_modules/is-alphanumerical/index.js"(e, t) {
      var r = Q1(),
        a = Ni();
      t.exports = o;
      function o(l) {
        return r(l) || a(l);
      }
    },
  }),
  td = H({
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
  rd = H({
    "../../node_modules/parse-entities/decode-entity.js"(e, t) {
      var r = td();
      t.exports = o;
      var a = {}.hasOwnProperty;
      function o(l) {
        return a.call(r, l) ? r[l] : !1;
      }
    },
  }),
  ad = H({
    "../../node_modules/parse-entities/index.js"(e, t) {
      var r = K1(),
        a = X1(),
        o = Ni(),
        l = J1(),
        i = ed(),
        u = rd();
      t.exports = Y;
      var s = {}.hasOwnProperty,
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
        x = 38,
        w = 59,
        S = 60,
        v = 61,
        E = 35,
        y = 88,
        A = 120,
        k = 65533,
        C = "named",
        O = "hexadecimal",
        R = "decimal",
        F = {};
      (F[O] = 16), (F[R] = 10);
      var L = {};
      (L[C] = i), (L[R] = o), (L[O] = l);
      var T = 1,
        I = 2,
        D = 3,
        M = 4,
        N = 5,
        V = 6,
        $ = 7,
        Z = {};
      (Z[T] = "Named character references must be terminated by a semicolon"),
        (Z[I] =
          "Numeric character references must be terminated by a semicolon"),
        (Z[D] = "Named character references cannot be empty"),
        (Z[M] = "Numeric character references cannot be empty"),
        (Z[N] = "Named character references must be known"),
        (Z[V] = "Numeric character references cannot be disallowed"),
        (Z[$] =
          "Numeric character references cannot be outside the permissible Unicode range");
      function Y(P, z) {
        var q = {},
          le,
          ge;
        z || (z = {});
        for (ge in f) (le = z[ge]), (q[ge] = le ?? f[ge]);
        return (
          (q.position.indent || q.position.start) &&
            ((q.indent = q.position.indent || []),
            (q.position = q.position.start)),
          ee(P, q)
        );
      }
      function ee(P, z) {
        var q = z.additional,
          le = z.nonTerminated,
          ge = z.text,
          nt = z.reference,
          Oe = z.warning,
          Ne = z.textContext,
          B = z.referenceContext,
          $e = z.warningContext,
          Ze = z.position,
          yt = z.indent || [],
          Bt = P.length,
          He = 0,
          Pr = -1,
          he = Ze.column || 1,
          vt = Ze.line || 1,
          Ve = "",
          $t = [],
          ze,
          Pt,
          qe,
          de,
          Pe,
          ie,
          te,
          Ue,
          Ir,
          Ma,
          Et,
          or,
          xt,
          ot,
          Po,
          lr,
          jr,
          We,
          se;
        for (
          typeof q == "string" && (q = q.charCodeAt(0)),
            lr = ir(),
            Ue = Oe ? Iu : d,
            He--,
            Bt++;
          ++He < Bt;

        )
          if (
            (Pe === g && (he = yt[Pr] || 1), (Pe = P.charCodeAt(He)), Pe === x)
          ) {
            if (
              ((te = P.charCodeAt(He + 1)),
              te === p ||
                te === g ||
                te === h ||
                te === b ||
                te === x ||
                te === S ||
                te !== te ||
                (q && te === q))
            ) {
              (Ve += c(Pe)), he++;
              continue;
            }
            for (
              xt = He + 1,
                or = xt,
                se = xt,
                te === E
                  ? ((se = ++or),
                    (te = P.charCodeAt(se)),
                    te === y || te === A ? ((ot = O), (se = ++or)) : (ot = R))
                  : (ot = C),
                ze = "",
                Et = "",
                de = "",
                Po = L[ot],
                se--;
              ++se < Bt && ((te = P.charCodeAt(se)), !!Po(te));

            )
              (de += c(te)),
                ot === C && s.call(r, de) && ((ze = de), (Et = r[de]));
            (qe = P.charCodeAt(se) === w),
              qe &&
                (se++,
                (Pt = ot === C ? u(de) : !1),
                Pt && ((ze = de), (Et = Pt))),
              (We = 1 + se - xt),
              (!qe && !le) ||
                (de
                  ? ot === C
                    ? (qe && !Et
                        ? Ue(N, 1)
                        : (ze !== de &&
                            ((se = or + ze.length),
                            (We = 1 + se - or),
                            (qe = !1)),
                          qe ||
                            ((Ir = ze ? T : D),
                            z.attribute
                              ? ((te = P.charCodeAt(se)),
                                te === v
                                  ? (Ue(Ir, We), (Et = null))
                                  : i(te)
                                  ? (Et = null)
                                  : Ue(Ir, We))
                              : Ue(Ir, We))),
                      (ie = Et))
                    : (qe || Ue(I, We),
                      (ie = parseInt(de, F[ot])),
                      G(ie)
                        ? (Ue($, We), (ie = c(k)))
                        : ie in a
                        ? (Ue(V, We), (ie = a[ie]))
                        : ((Ma = ""),
                          K(ie) && Ue(V, We),
                          ie > 65535 &&
                            ((ie -= 65536),
                            (Ma += c((ie >>> 10) | 55296)),
                            (ie = 56320 | (ie & 1023))),
                          (ie = Ma + c(ie))))
                  : ot !== C && Ue(M, We)),
              ie
                ? (Io(),
                  (lr = ir()),
                  (He = se - 1),
                  (he += se - xt + 1),
                  $t.push(ie),
                  (jr = ir()),
                  jr.offset++,
                  nt &&
                    nt.call(B, ie, { start: lr, end: jr }, P.slice(xt - 1, se)),
                  (lr = jr))
                : ((de = P.slice(xt - 1, se)),
                  (Ve += de),
                  (he += de.length),
                  (He = se - 1));
          } else
            Pe === 10 && (vt++, Pr++, (he = 0)),
              Pe === Pe ? ((Ve += c(Pe)), he++) : Io();
        return $t.join("");
        function ir() {
          return { line: vt, column: he, offset: He + (Ze.offset || 0) };
        }
        function Iu(jo, No) {
          var Ba = ir();
          (Ba.column += No), (Ba.offset += No), Oe.call($e, Z[jo], Ba, jo);
        }
        function Io() {
          Ve &&
            ($t.push(Ve),
            ge && ge.call(Ne, Ve, { start: lr, end: ir() }),
            (Ve = ""));
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
  nd = H({
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
            i = 0,
            u = {},
            s = {
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
                    v.__id || Object.defineProperty(v, "__id", { value: ++i }),
                    v.__id
                  );
                },
                clone: function v(E, y) {
                  y = y || {};
                  var A, k;
                  switch (s.util.type(E)) {
                    case "Object":
                      if (((k = s.util.objId(E)), y[k])) return y[k];
                      (A = {}), (y[k] = A);
                      for (var C in E)
                        E.hasOwnProperty(C) && (A[C] = v(E[C], y));
                      return A;
                    case "Array":
                      return (
                        (k = s.util.objId(E)),
                        y[k]
                          ? y[k]
                          : ((A = []),
                            (y[k] = A),
                            E.forEach(function (O, R) {
                              A[R] = v(O, y);
                            }),
                            A)
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
                  } catch (A) {
                    var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      A.stack
                    ) || [])[1];
                    if (v) {
                      var E = document.getElementsByTagName("script");
                      for (var y in E) if (E[y].src == v) return E[y];
                    }
                    return null;
                  }
                },
                isActive: function (v, E, y) {
                  for (var A = "no-" + E; v; ) {
                    var k = v.classList;
                    if (k.contains(E)) return !0;
                    if (k.contains(A)) return !1;
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
                  var y = s.util.clone(s.languages[v]);
                  for (var A in E) y[A] = E[A];
                  return y;
                },
                insertBefore: function (v, E, y, A) {
                  A = A || s.languages;
                  var k = A[v],
                    C = {};
                  for (var O in k)
                    if (k.hasOwnProperty(O)) {
                      if (O == E)
                        for (var R in y) y.hasOwnProperty(R) && (C[R] = y[R]);
                      y.hasOwnProperty(O) || (C[O] = k[O]);
                    }
                  var F = A[v];
                  return (
                    (A[v] = C),
                    s.languages.DFS(s.languages, function (L, T) {
                      T === F && L != v && (this[L] = C);
                    }),
                    C
                  );
                },
                DFS: function v(E, y, A, k) {
                  k = k || {};
                  var C = s.util.objId;
                  for (var O in E)
                    if (E.hasOwnProperty(O)) {
                      y.call(E, O, E[O], A || O);
                      var R = E[O],
                        F = s.util.type(R);
                      F === "Object" && !k[C(R)]
                        ? ((k[C(R)] = !0), v(R, y, null, k))
                        : F === "Array" &&
                          !k[C(R)] &&
                          ((k[C(R)] = !0), v(R, y, O, k));
                    }
                },
              },
              plugins: {},
              highlightAll: function (v, E) {
                s.highlightAllUnder(document, v, E);
              },
              highlightAllUnder: function (v, E, y) {
                var A = {
                  callback: y,
                  container: v,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                s.hooks.run("before-highlightall", A),
                  (A.elements = Array.prototype.slice.apply(
                    A.container.querySelectorAll(A.selector)
                  )),
                  s.hooks.run("before-all-elements-highlight", A);
                for (var k = 0, C; (C = A.elements[k++]); )
                  s.highlightElement(C, E === !0, A.callback);
              },
              highlightElement: function (v, E, y) {
                var A = s.util.getLanguage(v),
                  k = s.languages[A];
                s.util.setLanguage(v, A);
                var C = v.parentElement;
                C &&
                  C.nodeName.toLowerCase() === "pre" &&
                  s.util.setLanguage(C, A);
                var O = v.textContent,
                  R = { element: v, language: A, grammar: k, code: O };
                function F(T) {
                  (R.highlightedCode = T),
                    s.hooks.run("before-insert", R),
                    (R.element.innerHTML = R.highlightedCode),
                    s.hooks.run("after-highlight", R),
                    s.hooks.run("complete", R),
                    y && y.call(R.element);
                }
                if (
                  (s.hooks.run("before-sanity-check", R),
                  (C = R.element.parentElement),
                  C &&
                    C.nodeName.toLowerCase() === "pre" &&
                    !C.hasAttribute("tabindex") &&
                    C.setAttribute("tabindex", "0"),
                  !R.code)
                ) {
                  s.hooks.run("complete", R), y && y.call(R.element);
                  return;
                }
                if ((s.hooks.run("before-highlight", R), !R.grammar)) {
                  F(s.util.encode(R.code));
                  return;
                }
                if (E && o.Worker) {
                  var L = new Worker(s.filename);
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
                } else F(s.highlight(R.code, R.grammar, R.language));
              },
              highlight: function (v, E, y) {
                var A = { code: v, grammar: E, language: y };
                if ((s.hooks.run("before-tokenize", A), !A.grammar))
                  throw new Error(
                    'The language "' + A.language + '" has no grammar.'
                  );
                return (
                  (A.tokens = s.tokenize(A.code, A.grammar)),
                  s.hooks.run("after-tokenize", A),
                  c.stringify(s.util.encode(A.tokens), A.language)
                );
              },
              tokenize: function (v, E) {
                var y = E.rest;
                if (y) {
                  for (var A in y) E[A] = y[A];
                  delete E.rest;
                }
                var k = new p();
                return g(k, k.head, v), f(v, k, E, k.head, 0), b(k);
              },
              hooks: {
                all: {},
                add: function (v, E) {
                  var y = s.hooks.all;
                  (y[v] = y[v] || []), y[v].push(E);
                },
                run: function (v, E) {
                  var y = s.hooks.all[v];
                  if (!(!y || !y.length))
                    for (var A = 0, k; (k = y[A++]); ) k(E);
                },
              },
              Token: c,
            };
          o.Prism = s;
          function c(v, E, y, A) {
            (this.type = v),
              (this.content = E),
              (this.alias = y),
              (this.length = (A || "").length | 0);
          }
          c.stringify = function v(E, y) {
            if (typeof E == "string") return E;
            if (Array.isArray(E)) {
              var A = "";
              return (
                E.forEach(function (F) {
                  A += v(F, y);
                }),
                A
              );
            }
            var k = {
                type: E.type,
                content: v(E.content, y),
                tag: "span",
                classes: ["token", E.type],
                attributes: {},
                language: y,
              },
              C = E.alias;
            C &&
              (Array.isArray(C)
                ? Array.prototype.push.apply(k.classes, C)
                : k.classes.push(C)),
              s.hooks.run("wrap", k);
            var O = "";
            for (var R in k.attributes)
              O +=
                " " +
                R +
                '="' +
                (k.attributes[R] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              k.tag +
              ' class="' +
              k.classes.join(" ") +
              '"' +
              O +
              ">" +
              k.content +
              "</" +
              k.tag +
              ">"
            );
          };
          function d(v, E, y, A) {
            v.lastIndex = E;
            var k = v.exec(y);
            if (k && A && k[1]) {
              var C = k[1].length;
              (k.index += C), (k[0] = k[0].slice(C));
            }
            return k;
          }
          function f(v, E, y, A, k, C) {
            for (var O in y)
              if (!(!y.hasOwnProperty(O) || !y[O])) {
                var R = y[O];
                R = Array.isArray(R) ? R : [R];
                for (var F = 0; F < R.length; ++F) {
                  if (C && C.cause == O + "," + F) return;
                  var L = R[F],
                    T = L.inside,
                    I = !!L.lookbehind,
                    D = !!L.greedy,
                    M = L.alias;
                  if (D && !L.pattern.global) {
                    var N = L.pattern.toString().match(/[imsuy]*$/)[0];
                    L.pattern = RegExp(L.pattern.source, N + "g");
                  }
                  for (
                    var V = L.pattern || L, $ = A.next, Z = k;
                    $ !== E.tail && !(C && Z >= C.reach);
                    Z += $.value.length, $ = $.next
                  ) {
                    var Y = $.value;
                    if (E.length > v.length) return;
                    if (!(Y instanceof c)) {
                      var ee = 1,
                        G;
                      if (D) {
                        if (((G = d(V, Z, v, I)), !G || G.index >= v.length))
                          break;
                        var q = G.index,
                          K = G.index + G[0].length,
                          P = Z;
                        for (P += $.value.length; q >= P; )
                          ($ = $.next), (P += $.value.length);
                        if (
                          ((P -= $.value.length), (Z = P), $.value instanceof c)
                        )
                          continue;
                        for (
                          var z = $;
                          z !== E.tail && (P < K || typeof z.value == "string");
                          z = z.next
                        )
                          ee++, (P += z.value.length);
                        ee--, (Y = v.slice(Z, P)), (G.index -= Z);
                      } else if (((G = d(V, 0, Y, I)), !G)) continue;
                      var q = G.index,
                        le = G[0],
                        ge = Y.slice(0, q),
                        nt = Y.slice(q + le.length),
                        Oe = Z + Y.length;
                      C && Oe > C.reach && (C.reach = Oe);
                      var Ne = $.prev;
                      ge && ((Ne = g(E, Ne, ge)), (Z += ge.length)),
                        h(E, Ne, ee);
                      var B = new c(O, T ? s.tokenize(le, T) : le, M, le);
                      if ((($ = g(E, Ne, B)), nt && g(E, $, nt), ee > 1)) {
                        var $e = { cause: O + "," + F, reach: Oe };
                        f(v, E, y, $.prev, Z, $e),
                          C && $e.reach > C.reach && (C.reach = $e.reach);
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
            var A = E.next,
              k = { value: y, prev: E, next: A };
            return (E.next = k), (A.prev = k), v.length++, k;
          }
          function h(v, E, y) {
            for (var A = E.next, k = 0; k < y && A !== v.tail; k++) A = A.next;
            (E.next = A), (A.prev = E), (v.length -= k);
          }
          function b(v) {
            for (var E = [], y = v.head.next; y !== v.tail; )
              E.push(y.value), (y = y.next);
            return E;
          }
          if (!o.document)
            return (
              o.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  o.addEventListener(
                    "message",
                    function (v) {
                      var E = JSON.parse(v.data),
                        y = E.language,
                        A = E.code,
                        k = E.immediateClose;
                      o.postMessage(s.highlight(A, s.languages[y], y)),
                        k && o.close();
                    },
                    !1
                  )),
              s
            );
          var x = s.util.currentScript();
          x &&
            ((s.filename = x.src),
            x.hasAttribute("data-manual") && (s.manual = !0));
          function w() {
            s.manual || s.highlightAll();
          }
          if (!s.manual) {
            var S = document.readyState;
            S === "loading" || (S === "interactive" && x && x.defer)
              ? document.addEventListener("DOMContentLoaded", w)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(w)
              : window.setTimeout(w, 16);
          }
          return s;
        })(r);
      typeof t < "u" && t.exports && (t.exports = a),
        typeof global < "u" && (global.Prism = a);
    },
  }),
  od = H({
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
        a = k();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var o = Y1(),
        l = ad(),
        i = nd(),
        u = Bi(),
        s = Mi(),
        c = D1(),
        d = L1();
      a();
      var f = {}.hasOwnProperty;
      function p() {}
      p.prototype = i;
      var g = new p();
      (t.exports = g),
        (g.highlight = x),
        (g.register = h),
        (g.alias = b),
        (g.registered = w),
        (g.listLanguages = S),
        h(u),
        h(s),
        h(c),
        h(d),
        (g.util.encode = y),
        (g.Token.stringify = v);
      function h(C) {
        if (typeof C != "function" || !C.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + C + "`");
        g.languages[C.displayName] === void 0 && C(g);
      }
      function b(C, O) {
        var R = g.languages,
          F = C,
          L,
          T,
          I,
          D;
        O && ((F = {}), (F[C] = O));
        for (L in F)
          for (
            T = F[L], T = typeof T == "string" ? [T] : T, I = T.length, D = -1;
            ++D < I;

          )
            R[T[D]] = R[L];
      }
      function x(C, O) {
        var R = i.highlight,
          F;
        if (typeof C != "string")
          throw new Error("Expected `string` for `value`, got `" + C + "`");
        if (g.util.type(O) === "Object") (F = O), (O = null);
        else {
          if (typeof O != "string")
            throw new Error("Expected `string` for `name`, got `" + O + "`");
          if (f.call(g.languages, O)) F = g.languages[O];
          else
            throw new Error("Unknown language: `" + O + "` is not registered");
        }
        return R.call(this, C, F, O);
      }
      function w(C) {
        if (typeof C != "string")
          throw new Error("Expected `string` for `language`, got `" + C + "`");
        return f.call(g.languages, C);
      }
      function S() {
        var C = g.languages,
          O = [],
          R;
        for (R in C) f.call(C, R) && typeof C[R] == "object" && O.push(R);
        return O;
      }
      function v(C, O, R) {
        var F;
        return typeof C == "string"
          ? { type: "text", value: C }
          : g.util.type(C) === "Array"
          ? E(C, O)
          : ((F = {
              type: C.type,
              content: g.Token.stringify(C.content, O, R),
              tag: "span",
              classes: ["token", C.type],
              attributes: {},
              language: O,
              parent: R,
            }),
            C.alias && (F.classes = F.classes.concat(C.alias)),
            g.hooks.run("wrap", F),
            o(F.tag + "." + F.classes.join("."), A(F.attributes), F.content));
      }
      function E(C, O) {
        for (var R = [], F = C.length, L = -1, T; ++L < F; )
          (T = C[L]), T !== "" && T !== null && T !== void 0 && R.push(T);
        for (L = -1, F = R.length; ++L < F; )
          (T = R[L]), (R[L] = g.Token.stringify(T, O, R));
        return R;
      }
      function y(C) {
        return C;
      }
      function A(C) {
        var O;
        for (O in C) C[O] = l(C[O]);
        return C;
      }
      function k() {
        var C = "Prism" in r,
          O = C ? r.Prism : void 0;
        return R;
        function R() {
          C ? (r.Prism = O) : delete r.Prism, (C = void 0), (O = void 0);
        }
      }
    },
  }),
  ld = H({
    "../../node_modules/refractor/lang/bash.js"(e, t) {
      (t.exports = r), (r.displayName = "bash"), (r.aliases = ["shell"]);
      function r(a) {
        (function (o) {
          var l =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            i = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            u = {
              bash: i,
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
                inside: { bash: i },
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
            (i.inside = o.languages.bash);
          for (
            var s = [
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
            d < s.length;
            d++
          )
            c[s[d]] = o.languages.bash[s[d]];
          o.languages.shell = o.languages.bash;
        })(a);
      }
    },
  }),
  id = H({
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
            var i = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u],
              c = o.languages.javascript[s];
            o.util.type(c) === "RegExp" &&
              (c = o.languages.javascript[s] = { pattern: c });
            var d = c.inside || {};
            (c.inside = d), (d["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(a);
      }
    },
  }),
  sd = H({
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
  ud = H({
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
            var l = o.tokens.filter(function (S) {
                return (
                  typeof S != "string" &&
                  S.type !== "comment" &&
                  S.type !== "scalar"
                );
              }),
              i = 0;
            function u(S) {
              return l[i + S];
            }
            function s(S, v) {
              v = v || 0;
              for (var E = 0; E < S.length; E++) {
                var y = u(E + v);
                if (!y || y.type !== S[E]) return !1;
              }
              return !0;
            }
            function c(S, v) {
              for (var E = 1, y = i; y < l.length; y++) {
                var A = l[y],
                  k = A.content;
                if (A.type === "punctuation" && typeof k == "string") {
                  if (S.test(k)) E++;
                  else if (v.test(k) && (E--, E === 0)) return y;
                }
              }
              return -1;
            }
            function d(S, v) {
              var E = S.alias;
              E ? Array.isArray(E) || (S.alias = E = [E]) : (S.alias = E = []),
                E.push(v);
            }
            for (; i < l.length; ) {
              var f = l[i++];
              if (f.type === "keyword" && f.content === "mutation") {
                var p = [];
                if (
                  s(["definition-mutation", "punctuation"]) &&
                  u(1).content === "("
                ) {
                  i += 2;
                  var g = c(/^\($/, /^\)$/);
                  if (g === -1) continue;
                  for (; i < g; i++) {
                    var h = u(0);
                    h.type === "variable" &&
                      (d(h, "variable-input"), p.push(h.content));
                  }
                  i = g + 1;
                }
                if (
                  s(["punctuation", "property-query"]) &&
                  u(0).content === "{" &&
                  (i++, d(u(0), "property-mutation"), p.length > 0)
                ) {
                  var b = c(/^\{$/, /^\}$/);
                  if (b === -1) continue;
                  for (var x = i; x < b; x++) {
                    var w = l[x];
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
const { logger: cd } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { global: dd } = __STORYBOOK_MODULE_GLOBAL__;
var pd = ke(Li()),
  fd = pd.default,
  md = ke(ld()),
  gd = md.default,
  hd = ke(Mi()),
  bd = hd.default,
  yd = ke(id()),
  vd = yd.default,
  Ed = ke(sd()),
  xd = Ed.default,
  Ad = ke(ud()),
  wd = Ad.default,
  Sd = ke(Bi()),
  Cd = Sd.default,
  kd = ke(R1()),
  _d = kd.default,
  Od = ke(F1()),
  Rd = Od.default,
  Fd = ke(T1()),
  Td = Fd.default,
  Dd = ke(Di()),
  Ld = Dd.default;
function Md(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Bd(e, t) {
  if (e == null) return {};
  var r = Md(e, t),
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
function mn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function $d(e) {
  if (Array.isArray(e)) return mn(e);
}
function Pd(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Id(e, t) {
  if (e) {
    if (typeof e == "string") return mn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mn(e, t);
  }
}
function jd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nd(e) {
  return $d(e) || Pd(e) || Id(e) || jd();
}
function xr(e) {
  "@babel/helpers - typeof";
  return (
    (xr =
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
    xr(e)
  );
}
function Zd(e, t) {
  if (xr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (xr(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hd(e) {
  var t = Zd(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function Zi(e, t, r) {
  return (
    (t = Hd(t)),
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
function gn() {
  return (
    (gn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    gn.apply(this, arguments)
  );
}
function dl(e, t) {
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
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dl(Object(r), !0).forEach(function (a) {
          Zi(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : dl(Object(r)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
        });
  }
  return e;
}
function Vd(e) {
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
var Wa = {};
function zd(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return Wa[t] || (Wa[t] = Vd(e)), Wa[t];
}
function qd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    a = e.filter(function (l) {
      return l !== "token";
    }),
    o = zd(a);
  return o.reduce(function (l, i) {
    return Nt(Nt({}, l), r[i]);
  }, t);
}
function pl(e) {
  return e.join(" ");
}
function Ud(e, t) {
  var r = 0;
  return function (a) {
    return (
      (r += 1),
      a.map(function (o, l) {
        return Yn({
          node: o,
          stylesheet: e,
          useInlineStyles: t,
          key: "code-segment-".concat(r, "-").concat(l),
        });
      })
    );
  };
}
function Yn(e) {
  var t = e.node,
    r = e.stylesheet,
    a = e.style,
    o = a === void 0 ? {} : a,
    l = e.useInlineStyles,
    i = e.key,
    u = t.properties,
    s = t.type,
    c = t.tagName,
    d = t.value;
  if (s === "text") return d;
  if (c) {
    var f = Ud(r, l),
      p;
    if (!l) p = Nt(Nt({}, u), {}, { className: pl(u.className) });
    else {
      var g = Object.keys(r).reduce(function (w, S) {
          return (
            S.split(".").forEach(function (v) {
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
      p = Nt(
        Nt({}, u),
        {},
        {
          className: pl(b) || void 0,
          style: qd(u.className, Object.assign({}, u.style, o), r),
        }
      );
    }
    var x = f(t.children);
    return n.createElement(c, gn({ key: i }, p), x);
  }
}
var Wd = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  Gd = [
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
function fl(e, t) {
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
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fl(Object(r), !0).forEach(function (a) {
          Zi(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : fl(Object(r)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
        });
  }
  return e;
}
var Yd = /\n/g;
function Kd(e) {
  return e.match(Yd);
}
function Xd(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    a = e.style;
  return t.map(function (o, l) {
    var i = l + r;
    return n.createElement(
      "span",
      {
        key: "line-".concat(l),
        className: "react-syntax-highlighter-line-number",
        style: typeof a == "function" ? a(i) : a,
      },
      "".concat(
        i,
        `
`
      )
    );
  });
}
function Jd(e) {
  var t = e.codeString,
    r = e.codeStyle,
    a = e.containerStyle,
    o = a === void 0 ? { float: "left", paddingRight: "10px" } : a,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    u = e.startingLineNumber;
  return n.createElement(
    "code",
    { style: Object.assign({}, r, o) },
    Xd({
      lines: t.replace(/\n$/, "").split(`
`),
      style: i,
      startingLineNumber: u,
    })
  );
}
function Qd(e) {
  return "".concat(e.toString().length, ".25em");
}
function Hi(e, t) {
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
function Vi(e, t, r) {
  var a = {
      display: "inline-block",
      minWidth: Qd(r),
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
    },
    o = typeof e == "function" ? e(t) : e,
    l = Xe(Xe({}, a), o);
  return l;
}
function Jr(e) {
  var t = e.children,
    r = e.lineNumber,
    a = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    u = i === void 0 ? {} : i,
    s = e.className,
    c = s === void 0 ? [] : s,
    d = e.showLineNumbers,
    f = e.wrapLongLines,
    p = typeof u == "function" ? u(r) : u;
  if (((p.className = c), r && l)) {
    var g = Vi(a, r, o);
    t.unshift(Hi(r, g));
  }
  return (
    f & d && (p.style = Xe(Xe({}, p.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: p, children: t }
  );
}
function zi(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var o = e[a];
    if (o.type === "text")
      r.push(Jr({ children: [o], className: Nd(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      zi(o.children, l).forEach(function (i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function ep(e, t, r, a, o, l, i, u, s) {
  var c,
    d = zi(e.value),
    f = [],
    p = -1,
    g = 0;
  function h(y, A) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Jr({
      children: y,
      lineNumber: A,
      lineNumberStyle: u,
      largestLineNumber: i,
      showInlineLineNumbers: o,
      lineProps: r,
      className: k,
      showLineNumbers: a,
      wrapLongLines: s,
    });
  }
  function b(y, A) {
    if (a && A && o) {
      var k = Vi(u, A, i);
      y.unshift(Hi(A, k));
    }
    return y;
  }
  function x(y, A) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || k.length > 0 ? h(y, A, k) : b(y, A);
  }
  for (
    var w = function () {
      var y = d[g],
        A = y.children[0].value,
        k = Kd(A);
      if (k) {
        var C = A.split(`
`);
        C.forEach(function (O, R) {
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
                  Jr({ children: [L], className: y.properties.className })
                ),
              I = x(T, F);
            f.push(I);
          } else if (R === C.length - 1) {
            var D = d[g + 1] && d[g + 1].children && d[g + 1].children[0],
              M = { type: "text", value: "".concat(O) };
            if (D) {
              var N = Jr({ children: [M], className: y.properties.className });
              d.splice(g + 1, 0, N);
            } else {
              var V = [M],
                $ = x(V, F, y.properties.className);
              f.push($);
            }
          } else {
            var Z = [L],
              Y = x(Z, F, y.properties.className);
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
    var S = d.slice(p + 1, d.length);
    if (S && S.length) {
      var v = a && f.length + l,
        E = x(S, v);
      f.push(E);
    }
  }
  return t ? f : (c = []).concat.apply(c, f);
}
function tp(e) {
  var t = e.rows,
    r = e.stylesheet,
    a = e.useInlineStyles;
  return t.map(function (o, l) {
    return Yn({
      node: o,
      stylesheet: r,
      useInlineStyles: a,
      key: "code-segement".concat(l),
    });
  });
}
function qi(e) {
  return e && typeof e.highlightAuto < "u";
}
function rp(e) {
  var t = e.astGenerator,
    r = e.language,
    a = e.code,
    o = e.defaultCodeValue;
  if (qi(t)) {
    var l = Wd(t, r);
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
function ap(e, t) {
  return function (r) {
    var a = r.language,
      o = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      u = r.customStyle,
      s = u === void 0 ? {} : u,
      c = r.codeTagProps,
      d =
        c === void 0
          ? {
              className: a ? "language-".concat(a) : void 0,
              style: Xe(
                Xe({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(a, '"]')]
              ),
            }
          : c,
      f = r.useInlineStyles,
      p = f === void 0 ? !0 : f,
      g = r.showLineNumbers,
      h = g === void 0 ? !1 : g,
      b = r.showInlineLineNumbers,
      x = b === void 0 ? !0 : b,
      w = r.startingLineNumber,
      S = w === void 0 ? 1 : w,
      v = r.lineNumberContainerStyle,
      E = r.lineNumberStyle,
      y = E === void 0 ? {} : E,
      A = r.wrapLines,
      k = r.wrapLongLines,
      C = k === void 0 ? !1 : k,
      O = r.lineProps,
      R = O === void 0 ? {} : O,
      F = r.renderer,
      L = r.PreTag,
      T = L === void 0 ? "pre" : L,
      I = r.CodeTag,
      D = I === void 0 ? "code" : I,
      M = r.code,
      N = M === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : M,
      V = r.astGenerator,
      $ = Bd(r, Gd);
    V = V || e;
    var Z = h
        ? n.createElement(Jd, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: y,
            startingLineNumber: S,
            codeString: N,
          })
        : null,
      Y = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      ee = qi(V) ? "hljs" : "prismjs",
      G = p
        ? Object.assign({}, $, { style: Object.assign({}, Y, s) })
        : Object.assign({}, $, {
            className: $.className
              ? "".concat(ee, " ").concat($.className)
              : ee,
            style: Object.assign({}, s),
          });
    if (
      (C
        ? (d.style = Xe(Xe({}, d.style), {}, { whiteSpace: "pre-wrap" }))
        : (d.style = Xe(Xe({}, d.style), {}, { whiteSpace: "pre" })),
      !V)
    )
      return n.createElement(T, G, Z, n.createElement(D, d, N));
    ((A === void 0 && F) || C) && (A = !0), (F = F || tp);
    var K = [{ type: "text", value: N }],
      P = rp({ astGenerator: V, language: a, code: N, defaultCodeValue: K });
    P.language === null && (P.value = K);
    var z = P.value.length + S,
      q = ep(P, A, R, h, x, S, z, y, C);
    return n.createElement(
      T,
      G,
      n.createElement(
        D,
        d,
        !x && Z,
        F({ rows: q, stylesheet: i, useInlineStyles: p })
      )
    );
  };
}
var Kn = ke(od()),
  Xn = ap(Kn.default, {});
Xn.registerLanguage = function (e, t) {
  return Kn.default.register(t);
};
Xn.alias = function (e, t) {
  return Kn.default.alias(e, t);
};
var _e = Xn,
  np = _.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1,
  })),
  Ui = _.button(
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
Ui.displayName = "ActionButton";
var Jn = ({ actionItems: e, ...t }) =>
  n.createElement(
    np,
    { ...t },
    e.map(({ title: r, className: a, onClick: o, disabled: l }, i) =>
      n.createElement(Ui, { key: i, className: a, onClick: o, disabled: l }, r)
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
function hn() {
  return (
    (hn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    hn.apply(this, arguments)
  );
}
function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    ia.apply(this, arguments)
  );
}
function op(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Wi(...e) {
  return (t) => e.forEach((r) => op(r, t));
}
function Lt(...e) {
  return m.useCallback(Wi(...e), e);
}
var Gi = m.forwardRef((e, t) => {
  let { children: r, ...a } = e,
    o = m.Children.toArray(r),
    l = o.find(ip);
  if (l) {
    let i = l.props.children,
      u = o.map((s) =>
        s === l
          ? m.Children.count(i) > 1
            ? m.Children.only(null)
            : m.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return m.createElement(
      bn,
      ia({}, a, { ref: t }),
      m.isValidElement(i) ? m.cloneElement(i, void 0, u) : null
    );
  }
  return m.createElement(bn, ia({}, a, { ref: t }), r);
});
Gi.displayName = "Slot";
var bn = m.forwardRef((e, t) => {
  let { children: r, ...a } = e;
  return m.isValidElement(r)
    ? m.cloneElement(r, { ...sp(a, r.props), ref: t ? Wi(t, r.ref) : r.ref })
    : m.Children.count(r) > 1
    ? m.Children.only(null)
    : null;
});
bn.displayName = "SlotClone";
var lp = ({ children: e }) => m.createElement(m.Fragment, null, e);
function ip(e) {
  return m.isValidElement(e) && e.type === lp;
}
function sp(e, t) {
  let r = { ...t };
  for (let a in t) {
    let o = e[a],
      l = t[a];
    /^on[A-Z]/.test(a)
      ? o && l
        ? (r[a] = (...i) => {
            l(...i), o(...i);
          })
        : o && (r[a] = o)
      : a === "style"
      ? (r[a] = { ...o, ...l })
      : a === "className" && (r[a] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
var up = [
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
  Tr = up.reduce((e, t) => {
    let r = m.forwardRef((a, o) => {
      let { asChild: l, ...i } = a,
        u = l ? Gi : t;
      return (
        m.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        m.createElement(u, hn({}, i, { ref: o }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  yn = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {};
function cp(e, t) {
  return m.useReducer((r, a) => t[r][a] ?? r, e);
}
var Dr = (e) => {
  let { present: t, children: r } = e,
    a = dp(t),
    o =
      typeof r == "function" ? r({ present: a.isPresent }) : m.Children.only(r),
    l = Lt(a.ref, o.ref);
  return typeof r == "function" || a.isPresent
    ? m.cloneElement(o, { ref: l })
    : null;
};
Dr.displayName = "Presence";
function dp(e) {
  let [t, r] = m.useState(),
    a = m.useRef({}),
    o = m.useRef(e),
    l = m.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [u, s] = cp(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      let c = Hr(a.current);
      l.current = u === "mounted" ? c : "none";
    }, [u]),
    yn(() => {
      let c = a.current,
        d = o.current;
      if (d !== e) {
        let f = l.current,
          p = Hr(c);
        e
          ? s("MOUNT")
          : p === "none" || (c == null ? void 0 : c.display) === "none"
          ? s("UNMOUNT")
          : s(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    yn(() => {
      if (t) {
        let c = (f) => {
            let p = Hr(a.current).includes(f.animationName);
            f.target === t && p && ni.flushSync(() => s("ANIMATION_END"));
          },
          d = (f) => {
            f.target === t && (l.current = Hr(a.current));
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
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(u),
      ref: m.useCallback((c) => {
        c && (a.current = getComputedStyle(c)), r(c);
      }, []),
    }
  );
}
function Hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pp(e, t = []) {
  let r = [];
  function a(l, i) {
    let u = m.createContext(i),
      s = r.length;
    r = [...r, i];
    function c(f) {
      let { scope: p, children: g, ...h } = f,
        b = (p == null ? void 0 : p[e][s]) || u,
        x = m.useMemo(() => h, Object.values(h));
      return m.createElement(b.Provider, { value: x }, g);
    }
    function d(f, p) {
      let g = (p == null ? void 0 : p[e][s]) || u,
        h = m.useContext(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${l}\``);
    }
    return (c.displayName = l + "Provider"), [c, d];
  }
  let o = () => {
    let l = r.map((i) => m.createContext(i));
    return function (i) {
      let u = (i == null ? void 0 : i[e]) || l;
      return m.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: u } }), [i, u]);
    };
  };
  return (o.scopeName = e), [a, fp(o, ...t)];
}
function fp(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = () => {
    let a = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (o) {
      let l = a.reduce((i, { useScope: u, scopeName: s }) => {
        let c = u(o)[`__scope${s}`];
        return { ...i, ...c };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Ct(e) {
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
var mp = m.createContext(void 0);
function gp(e) {
  let t = m.useContext(mp);
  return e || t || "ltr";
}
function hp(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function kt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), r === !1 || !a.defaultPrevented))
      return t == null ? void 0 : t(a);
  };
}
function bp(e, t) {
  return m.useReducer((r, a) => t[r][a] ?? r, e);
}
var Yi = "ScrollArea",
  [Ki, _7] = pp(Yi),
  [yp, Me] = Ki(Yi),
  vp = m.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        type: a = "hover",
        dir: o,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [u, s] = m.useState(null),
      [c, d] = m.useState(null),
      [f, p] = m.useState(null),
      [g, h] = m.useState(null),
      [b, x] = m.useState(null),
      [w, S] = m.useState(0),
      [v, E] = m.useState(0),
      [y, A] = m.useState(!1),
      [k, C] = m.useState(!1),
      O = Lt(t, (F) => s(F)),
      R = gp(o);
    return m.createElement(
      yp,
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
        onScrollbarXEnabledChange: A,
        scrollbarY: b,
        onScrollbarYChange: x,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: C,
        onCornerWidthChange: S,
        onCornerHeightChange: E,
      },
      m.createElement(
        Tr.div,
        ae({ dir: R }, i, {
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
  Ep = "ScrollAreaViewport",
  xp = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, children: a, ...o } = e,
      l = Me(Ep, r),
      i = m.useRef(null),
      u = Lt(t, i, l.onViewportChange);
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
        Tr.div,
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
  ut = "ScrollAreaScrollbar",
  Ap = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Me(ut, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = o,
      u = e.orientation === "horizontal";
    return (
      m.useEffect(
        () => (
          u ? l(!0) : i(!0),
          () => {
            u ? l(!1) : i(!1);
          }
        ),
        [u, l, i]
      ),
      o.type === "hover"
        ? m.createElement(wp, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "scroll"
        ? m.createElement(Sp, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "auto"
        ? m.createElement(Xi, ae({}, a, { ref: t, forceMount: r }))
        : o.type === "always"
        ? m.createElement(Qn, ae({}, a, { ref: t }))
        : null
    );
  }),
  wp = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Me(ut, e.__scopeScrollArea),
      [l, i] = m.useState(!1);
    return (
      m.useEffect(() => {
        let u = o.scrollArea,
          s = 0;
        if (u) {
          let c = () => {
              window.clearTimeout(s), i(!0);
            },
            d = () => {
              s = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            u.addEventListener("pointerenter", c),
            u.addEventListener("pointerleave", d),
            () => {
              window.clearTimeout(s),
                u.removeEventListener("pointerenter", c),
                u.removeEventListener("pointerleave", d);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      m.createElement(
        Dr,
        { present: r || l },
        m.createElement(
          Xi,
          ae({ "data-state": l ? "visible" : "hidden" }, a, { ref: t })
        )
      )
    );
  }),
  Sp = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Me(ut, e.__scopeScrollArea),
      l = e.orientation === "horizontal",
      i = Aa(() => s("SCROLL_END"), 100),
      [u, s] = bp("hidden", {
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
          let c = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [u, o.scrollHideDelay, s]),
      m.useEffect(() => {
        let c = o.viewport,
          d = l ? "scrollLeft" : "scrollTop";
        if (c) {
          let f = c[d],
            p = () => {
              let g = c[d];
              f !== g && (s("SCROLL"), i()), (f = g);
            };
          return (
            c.addEventListener("scroll", p),
            () => c.removeEventListener("scroll", p)
          );
        }
      }, [o.viewport, l, s, i]),
      m.createElement(
        Dr,
        { present: r || u !== "hidden" },
        m.createElement(
          Qn,
          ae({ "data-state": u === "hidden" ? "hidden" : "visible" }, a, {
            ref: t,
            onPointerEnter: kt(e.onPointerEnter, () => s("POINTER_ENTER")),
            onPointerLeave: kt(e.onPointerLeave, () => s("POINTER_LEAVE")),
          })
        )
      )
    );
  }),
  Xi = m.forwardRef((e, t) => {
    let r = Me(ut, e.__scopeScrollArea),
      { forceMount: a, ...o } = e,
      [l, i] = m.useState(!1),
      u = e.orientation === "horizontal",
      s = Aa(() => {
        if (r.viewport) {
          let c = r.viewport.offsetWidth < r.viewport.scrollWidth,
            d = r.viewport.offsetHeight < r.viewport.scrollHeight;
          i(u ? c : d);
        }
      }, 10);
    return (
      Ut(r.viewport, s),
      Ut(r.content, s),
      m.createElement(
        Dr,
        { present: a || l },
        m.createElement(
          Qn,
          ae({ "data-state": l ? "visible" : "hidden" }, o, { ref: t })
        )
      )
    );
  }),
  Qn = m.forwardRef((e, t) => {
    let { orientation: r = "vertical", ...a } = e,
      o = Me(ut, e.__scopeScrollArea),
      l = m.useRef(null),
      i = m.useRef(0),
      [u, s] = m.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = ts(u.viewport, u.content),
      d = {
        ...a,
        sizes: u,
        onSizesChange: s,
        hasThumb: c > 0 && c < 1,
        onThumbChange: (p) => (l.current = p),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (p) => (i.current = p),
      };
    function f(p, g) {
      return Dp(p, i.current, u, g);
    }
    return r === "horizontal"
      ? m.createElement(
          Cp,
          ae({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let p = o.viewport.scrollLeft,
                  g = ml(p, u, o.dir);
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
          kp,
          ae({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                let p = o.viewport.scrollTop,
                  g = ml(p, u);
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
  Cp = m.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: a, ...o } = e,
      l = Me(ut, e.__scopeScrollArea),
      [i, u] = m.useState(),
      s = m.useRef(null),
      c = Lt(t, s, l.onScrollbarXChange);
    return (
      m.useEffect(() => {
        s.current && u(getComputedStyle(s.current));
      }, [s]),
      m.createElement(
        Qi,
        ae({ "data-orientation": "horizontal" }, o, {
          ref: c,
          sizes: r,
          style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": xa(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
          onDragScroll: (d) => e.onDragScroll(d.x),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let p = l.viewport.scrollLeft + d.deltaX;
              e.onWheelScroll(p), as(p, f) && d.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              a({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: sa(i.paddingLeft),
                  paddingEnd: sa(i.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  kp = m.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: a, ...o } = e,
      l = Me(ut, e.__scopeScrollArea),
      [i, u] = m.useState(),
      s = m.useRef(null),
      c = Lt(t, s, l.onScrollbarYChange);
    return (
      m.useEffect(() => {
        s.current && u(getComputedStyle(s.current));
      }, [s]),
      m.createElement(
        Qi,
        ae({ "data-orientation": "vertical" }, o, {
          ref: c,
          sizes: r,
          style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": xa(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
          onDragScroll: (d) => e.onDragScroll(d.y),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let p = l.viewport.scrollTop + d.deltaY;
              e.onWheelScroll(p), as(p, f) && d.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              a({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: sa(i.paddingTop),
                  paddingEnd: sa(i.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [_p, Ji] = Ki(ut),
  Qi = m.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        sizes: a,
        hasThumb: o,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: u,
        onThumbPositionChange: s,
        onDragScroll: c,
        onWheelScroll: d,
        onResize: f,
        ...p
      } = e,
      g = Me(ut, r),
      [h, b] = m.useState(null),
      x = Lt(t, (O) => b(O)),
      w = m.useRef(null),
      S = m.useRef(""),
      v = g.viewport,
      E = a.content - a.viewport,
      y = Ct(d),
      A = Ct(s),
      k = Aa(f, 10);
    function C(O) {
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
      m.useEffect(A, [a, A]),
      Ut(h, k),
      Ut(g.content, k),
      m.createElement(
        _p,
        {
          scope: r,
          scrollbar: h,
          hasThumb: o,
          onThumbChange: Ct(l),
          onThumbPointerUp: Ct(i),
          onThumbPositionChange: A,
          onThumbPointerDown: Ct(u),
        },
        m.createElement(
          Tr.div,
          ae({}, p, {
            ref: x,
            style: { position: "absolute", ...p.style },
            onPointerDown: kt(e.onPointerDown, (O) => {
              O.button === 0 &&
                (O.target.setPointerCapture(O.pointerId),
                (w.current = h.getBoundingClientRect()),
                (S.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                g.viewport && (g.viewport.style.scrollBehavior = "auto"),
                C(O));
            }),
            onPointerMove: kt(e.onPointerMove, C),
            onPointerUp: kt(e.onPointerUp, (O) => {
              let R = O.target;
              R.hasPointerCapture(O.pointerId) &&
                R.releasePointerCapture(O.pointerId),
                (document.body.style.webkitUserSelect = S.current),
                g.viewport && (g.viewport.style.scrollBehavior = ""),
                (w.current = null);
            }),
          })
        )
      )
    );
  }),
  vn = "ScrollAreaThumb",
  Op = m.forwardRef((e, t) => {
    let { forceMount: r, ...a } = e,
      o = Ji(vn, e.__scopeScrollArea);
    return m.createElement(
      Dr,
      { present: r || o.hasThumb },
      m.createElement(Rp, ae({ ref: t }, a))
    );
  }),
  Rp = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, style: a, ...o } = e,
      l = Me(vn, r),
      i = Ji(vn, r),
      { onThumbPositionChange: u } = i,
      s = Lt(t, (f) => i.onThumbChange(f)),
      c = m.useRef(),
      d = Aa(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      m.useEffect(() => {
        let f = l.viewport;
        if (f) {
          let p = () => {
            if ((d(), !c.current)) {
              let g = Lp(f, u);
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
        Tr.div,
        ae({ "data-state": i.hasThumb ? "visible" : "hidden" }, o, {
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...a,
          },
          onPointerDownCapture: kt(e.onPointerDownCapture, (f) => {
            let p = f.target.getBoundingClientRect(),
              g = f.clientX - p.left,
              h = f.clientY - p.top;
            i.onThumbPointerDown({ x: g, y: h });
          }),
          onPointerUp: kt(e.onPointerUp, i.onThumbPointerUp),
        })
      )
    );
  }),
  es = "ScrollAreaCorner",
  Fp = m.forwardRef((e, t) => {
    let r = Me(es, e.__scopeScrollArea),
      a = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && a
      ? m.createElement(Tp, ae({}, e, { ref: t }))
      : null;
  }),
  Tp = m.forwardRef((e, t) => {
    let { __scopeScrollArea: r, ...a } = e,
      o = Me(es, r),
      [l, i] = m.useState(0),
      [u, s] = m.useState(0),
      c = !!(l && u);
    return (
      Ut(o.scrollbarX, () => {
        var d;
        let f =
          ((d = o.scrollbarX) === null || d === void 0
            ? void 0
            : d.offsetHeight) || 0;
        o.onCornerHeightChange(f), s(f);
      }),
      Ut(o.scrollbarY, () => {
        var d;
        let f =
          ((d = o.scrollbarY) === null || d === void 0
            ? void 0
            : d.offsetWidth) || 0;
        o.onCornerWidthChange(f), i(f);
      }),
      c
        ? m.createElement(
            Tr.div,
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
function sa(e) {
  return e ? parseInt(e, 10) : 0;
}
function ts(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function xa(e) {
  let t = ts(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    a = (e.scrollbar.size - r) * t;
  return Math.max(a, 18);
}
function Dp(e, t, r, a = "ltr") {
  let o = xa(r),
    l = o / 2,
    i = t || l,
    u = o - i,
    s = r.scrollbar.paddingStart + i,
    c = r.scrollbar.size - r.scrollbar.paddingEnd - u,
    d = r.content - r.viewport,
    f = a === "ltr" ? [0, d] : [d * -1, 0];
  return rs([s, c], f)(e);
}
function ml(e, t, r = "ltr") {
  let a = xa(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - o,
    i = t.content - t.viewport,
    u = l - a,
    s = r === "ltr" ? [0, i] : [i * -1, 0],
    c = hp(e, s);
  return rs([0, i], [0, u])(c);
}
function rs(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (r - e[0]);
  };
}
function as(e, t) {
  return e > 0 && e < t;
}
var Lp = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    a = 0;
  return (
    (function o() {
      let l = { left: e.scrollLeft, top: e.scrollTop },
        i = r.left !== l.left,
        u = r.top !== l.top;
      (i || u) && t(), (r = l), (a = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(a)
  );
};
function Aa(e, t) {
  let r = Ct(e),
    a = m.useRef(0);
  return (
    m.useEffect(() => () => window.clearTimeout(a.current), []),
    m.useCallback(() => {
      window.clearTimeout(a.current), (a.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function Ut(e, t) {
  let r = Ct(t);
  yn(() => {
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
var Mp = vp,
  Bp = xp,
  $p = Ap,
  Pp = Op,
  Ip = Fp,
  jp = _(Mp)(({ scrollbarsize: e, offset: t }) => ({
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "--scrollbar-size": `${e + t}px`,
    "--radix-scroll-area-thumb-width": `${e}px`,
  })),
  Np = _(Bp)({ width: "100%", height: "100%" }),
  gl = _($p)(({ offset: e, horizontal: t, vertical: r }) => ({
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
  hl = _(Pp)(({ theme: e }) => ({
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
  eo = ({
    children: e,
    horizontal: t = !1,
    vertical: r = !1,
    offset: a = 2,
    scrollbarSize: o = 6,
    className: l,
  }) =>
    n.createElement(
      jp,
      { scrollbarsize: o, offset: a, className: l },
      n.createElement(Np, null, e),
      t &&
        n.createElement(
          gl,
          {
            orientation: "horizontal",
            offset: a,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          n.createElement(hl, null)
        ),
      r &&
        n.createElement(
          gl,
          {
            orientation: "vertical",
            offset: a,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          n.createElement(hl, null)
        ),
      t && r && n.createElement(Ip, null)
    ),
  { navigator: Vr, document: ur, window: Zp } = dd;
_e.registerLanguage("jsextra", vd);
_e.registerLanguage("jsx", fd);
_e.registerLanguage("json", xd);
_e.registerLanguage("yml", Rd);
_e.registerLanguage("md", _d);
_e.registerLanguage("bash", gd);
_e.registerLanguage("css", bd);
_e.registerLanguage("html", Cd);
_e.registerLanguage("tsx", Td);
_e.registerLanguage("typescript", Ld);
_e.registerLanguage("graphql", wd);
var Hp = Dt(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, a]) => ({ ...t, [`* .${r}`]: a }),
      {}
    )
  ),
  Vp = ns();
function ns() {
  return Vr != null && Vr.clipboard
    ? (e) => Vr.clipboard.writeText(e)
    : async (e) => {
        let t = ur.createElement("TEXTAREA"),
          r = ur.activeElement;
        (t.value = e),
          ur.body.appendChild(t),
          t.select(),
          ur.execCommand("copy"),
          ur.body.removeChild(t),
          r.focus();
      };
}
var zp = _.div(
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
  qp = ({ children: e, className: t }) =>
    n.createElement(eo, { horizontal: !0, vertical: !0, className: t }, e),
  Up = _(qp)({ position: "relative" }, ({ theme: e }) => Hp(e)),
  Wp = _.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  Gp = _.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
  })),
  os = (e) => {
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
  Yp = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((a, o) =>
      Yn({
        node: os(a),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${o}`,
      })
    ),
  Kp = (e, t) =>
    t
      ? e
        ? ({ rows: r, ...a }) => e({ rows: r.map((o) => os(o)), ...a })
        : Yp
      : e,
  to = ({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: a = !1,
    padded: o = !1,
    format: l = !0,
    formatter: i = null,
    className: u = null,
    showLineNumbers: s = !1,
    ...c
  }) => {
    if (typeof e != "string" || !e.trim()) return null;
    let d = i ? i(l, e) : e.trim(),
      [f, p] = m.useState(!1),
      g = m.useCallback(
        (b) => {
          b.preventDefault(),
            Vp(d)
              .then(() => {
                p(!0), Zp.setTimeout(() => p(!1), 1500);
              })
              .catch(cd.error);
        },
        [d]
      ),
      h = Kp(c.renderer, s);
    return n.createElement(
      zp,
      { bordered: a, padded: o, showLineNumbers: s, className: u },
      n.createElement(
        Up,
        null,
        n.createElement(
          _e,
          {
            padded: o || a,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: Wp,
            CodeTag: Gp,
            lineNumberContainerStyle: {},
            ...c,
            renderer: h,
          },
          d
        )
      ),
      r
        ? n.createElement(Jn, {
            actionItems: [{ title: f ? "Copied" : "Copy", onClick: g }],
          })
        : null
    );
  };
to.registerLanguage = (...e) => _e.registerLanguage(...e);
var O7 = to;
const { global: Xp } = __STORYBOOK_MODULE_GLOBAL__;
var Jp = H({
  "../../node_modules/react-fast-compare/index.js"(e, t) {
    var r = typeof Element < "u",
      a = typeof Map == "function",
      o = typeof Set == "function",
      l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function i(u, s) {
      if (u === s) return !0;
      if (u && s && typeof u == "object" && typeof s == "object") {
        if (u.constructor !== s.constructor) return !1;
        var c, d, f;
        if (Array.isArray(u)) {
          if (((c = u.length), c != s.length)) return !1;
          for (d = c; d-- !== 0; ) if (!i(u[d], s[d])) return !1;
          return !0;
        }
        var p;
        if (a && u instanceof Map && s instanceof Map) {
          if (u.size !== s.size) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!s.has(d.value[0])) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!i(d.value[1], s.get(d.value[0]))) return !1;
          return !0;
        }
        if (o && u instanceof Set && s instanceof Set) {
          if (u.size !== s.size) return !1;
          for (p = u.entries(); !(d = p.next()).done; )
            if (!s.has(d.value[0])) return !1;
          return !0;
        }
        if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
          if (((c = u.length), c != s.length)) return !1;
          for (d = c; d-- !== 0; ) if (u[d] !== s[d]) return !1;
          return !0;
        }
        if (u.constructor === RegExp)
          return u.source === s.source && u.flags === s.flags;
        if (
          u.valueOf !== Object.prototype.valueOf &&
          typeof u.valueOf == "function" &&
          typeof s.valueOf == "function"
        )
          return u.valueOf() === s.valueOf();
        if (
          u.toString !== Object.prototype.toString &&
          typeof u.toString == "function" &&
          typeof s.toString == "function"
        )
          return u.toString() === s.toString();
        if (((f = Object.keys(u)), (c = f.length), c !== Object.keys(s).length))
          return !1;
        for (d = c; d-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(s, f[d])) return !1;
        if (r && u instanceof Element) return !1;
        for (d = c; d-- !== 0; )
          if (
            !(
              (f[d] === "_owner" || f[d] === "__v" || f[d] === "__o") &&
              u.$$typeof
            ) &&
            !i(u[f[d]], s[f[d]])
          )
            return !1;
        return !0;
      }
      return u !== u && s !== s;
    }
    t.exports = function (u, s) {
      try {
        return i(u, s);
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
function Qp(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function lt() {
  return (
    (lt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    lt.apply(this, arguments)
  );
}
var bl = function (e) {
    return e.reduce(function (t, r) {
      var a = r[0],
        o = r[1];
      return (t[a] = o), t;
    }, {});
  },
  yl =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Ee = "top",
  De = "bottom",
  Le = "right",
  xe = "left",
  wa = "auto",
  Lr = [Ee, De, Le, xe],
  Wt = "start",
  Ar = "end",
  e5 = "clippingParents",
  ls = "viewport",
  cr = "popper",
  t5 = "reference",
  vl = Lr.reduce(function (e, t) {
    return e.concat([t + "-" + Wt, t + "-" + Ar]);
  }, []),
  is = [].concat(Lr, [wa]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Wt, t + "-" + Ar]);
  }, []),
  r5 = "beforeRead",
  a5 = "read",
  n5 = "afterRead",
  o5 = "beforeMain",
  l5 = "main",
  i5 = "afterMain",
  s5 = "beforeWrite",
  u5 = "write",
  c5 = "afterWrite",
  d5 = [r5, a5, n5, o5, l5, i5, s5, u5, c5];
function at(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ce(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Tt(e) {
  var t = Ce(e).Element;
  return e instanceof t || e instanceof Element;
}
function Te(e) {
  var t = Ce(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ro(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ce(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function p5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var a = t.styles[r] || {},
      o = t.attributes[r] || {},
      l = t.elements[r];
    !Te(l) ||
      !at(l) ||
      (Object.assign(l.style, a),
      Object.keys(o).forEach(function (i) {
        var u = o[i];
        u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? "" : u);
      }));
  });
}
function f5(e) {
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
          i = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : r[a]),
          u = i.reduce(function (s, c) {
            return (s[c] = ""), s;
          }, {});
        !Te(o) ||
          !at(o) ||
          (Object.assign(o.style, u),
          Object.keys(l).forEach(function (s) {
            o.removeAttribute(s);
          }));
      });
    }
  );
}
var m5 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: p5,
  effect: f5,
  requires: ["computeStyles"],
};
function rt(e) {
  return e.split("-")[0];
}
var _t = Math.max,
  ua = Math.min,
  Gt = Math.round;
function En() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ss() {
  return !/^((?!chrome|android).)*safari/i.test(En());
}
function Yt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(),
    o = 1,
    l = 1;
  t &&
    Te(e) &&
    ((o = (e.offsetWidth > 0 && Gt(a.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && Gt(a.height) / e.offsetHeight) || 1));
  var i = Tt(e) ? Ce(e) : window,
    u = i.visualViewport,
    s = !ss() && r,
    c = (a.left + (s && u ? u.offsetLeft : 0)) / o,
    d = (a.top + (s && u ? u.offsetTop : 0)) / l,
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
function ao(e) {
  var t = Yt(e),
    r = e.offsetWidth,
    a = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - a) <= 1 && (a = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: a }
  );
}
function us(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ro(r)) {
    var a = t;
    do {
      if (a && e.isSameNode(a)) return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function st(e) {
  return Ce(e).getComputedStyle(e);
}
function g5(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function bt(e) {
  return ((Tt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Sa(e) {
  return at(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (ro(e) ? e.host : null) || bt(e);
}
function El(e) {
  return !Te(e) || st(e).position === "fixed" ? null : e.offsetParent;
}
function h5(e) {
  var t = /firefox/i.test(En()),
    r = /Trident/i.test(En());
  if (r && Te(e)) {
    var a = st(e);
    if (a.position === "fixed") return null;
  }
  var o = Sa(e);
  for (ro(o) && (o = o.host); Te(o) && ["html", "body"].indexOf(at(o)) < 0; ) {
    var l = st(o);
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
function Mr(e) {
  for (var t = Ce(e), r = El(e); r && g5(r) && st(r).position === "static"; )
    r = El(r);
  return r &&
    (at(r) === "html" || (at(r) === "body" && st(r).position === "static"))
    ? t
    : r || h5(e) || t;
}
function no(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fr(e, t, r) {
  return _t(e, ua(t, r));
}
function b5(e, t, r) {
  var a = fr(e, t, r);
  return a > r ? r : a;
}
function cs() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ds(e) {
  return Object.assign({}, cs(), e);
}
function ps(e, t) {
  return t.reduce(function (r, a) {
    return (r[a] = e), r;
  }, {});
}
var y5 = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    ds(typeof e != "number" ? e : ps(e, Lr))
  );
};
function v5(e) {
  var t,
    r = e.state,
    a = e.name,
    o = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = rt(r.placement),
    s = no(u),
    c = [xe, Le].indexOf(u) >= 0,
    d = c ? "height" : "width";
  if (!(!l || !i)) {
    var f = y5(o.padding, r),
      p = ao(l),
      g = s === "y" ? Ee : xe,
      h = s === "y" ? De : Le,
      b =
        r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d],
      x = i[s] - r.rects.reference[s],
      w = Mr(l),
      S = w ? (s === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      v = b / 2 - x / 2,
      E = f[g],
      y = S - p[d] - f[h],
      A = S / 2 - p[d] / 2 + v,
      k = fr(E, A, y),
      C = s;
    r.modifiersData[a] = ((t = {}), (t[C] = k), (t.centerOffset = k - A), t);
  }
}
function E5(e) {
  var t = e.state,
    r = e.options,
    a = r.element,
    o = a === void 0 ? "[data-popper-arrow]" : a;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (us(t.elements.popper, o) && (t.elements.arrow = o)));
}
var x5 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: v5,
  effect: E5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Kt(e) {
  return e.split("-")[1];
}
var A5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function w5(e, t) {
  var r = e.x,
    a = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Gt(r * o) / o || 0, y: Gt(a * o) / o || 0 };
}
function xl(e) {
  var t,
    r = e.popper,
    a = e.popperRect,
    o = e.placement,
    l = e.variation,
    i = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    f = e.isFixed,
    p = i.x,
    g = p === void 0 ? 0 : p,
    h = i.y,
    b = h === void 0 ? 0 : h,
    x = typeof d == "function" ? d({ x: g, y: b }) : { x: g, y: b };
  (g = x.x), (b = x.y);
  var w = i.hasOwnProperty("x"),
    S = i.hasOwnProperty("y"),
    v = xe,
    E = Ee,
    y = window;
  if (c) {
    var A = Mr(r),
      k = "clientHeight",
      C = "clientWidth";
    if (
      (A === Ce(r) &&
        ((A = bt(r)),
        st(A).position !== "static" &&
          u === "absolute" &&
          ((k = "scrollHeight"), (C = "scrollWidth"))),
      (A = A),
      o === Ee || ((o === xe || o === Le) && l === Ar))
    ) {
      E = De;
      var O = f && A === y && y.visualViewport ? y.visualViewport.height : A[k];
      (b -= O - a.height), (b *= s ? 1 : -1);
    }
    if (o === xe || ((o === Ee || o === De) && l === Ar)) {
      v = Le;
      var R = f && A === y && y.visualViewport ? y.visualViewport.width : A[C];
      (g -= R - a.width), (g *= s ? 1 : -1);
    }
  }
  var F = Object.assign({ position: u }, c && A5),
    L = d === !0 ? w5({ x: g, y: b }, Ce(r)) : { x: g, y: b };
  if (((g = L.x), (b = L.y), s)) {
    var T;
    return Object.assign(
      {},
      F,
      ((T = {}),
      (T[E] = S ? "0" : ""),
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
    (t[E] = S ? b + "px" : ""),
    (t[v] = w ? g + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function S5(e) {
  var t = e.state,
    r = e.options,
    a = r.gpuAcceleration,
    o = a === void 0 ? !0 : a,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: rt(t.placement),
      variation: Kt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      xl(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        xl(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var C5 = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: S5,
    data: {},
  },
  zr = { passive: !0 };
function k5(e) {
  var t = e.state,
    r = e.instance,
    a = e.options,
    o = a.scroll,
    l = o === void 0 ? !0 : o,
    i = a.resize,
    u = i === void 0 ? !0 : i,
    s = Ce(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      c.forEach(function (d) {
        d.addEventListener("scroll", r.update, zr);
      }),
    u && s.addEventListener("resize", r.update, zr),
    function () {
      l &&
        c.forEach(function (d) {
          d.removeEventListener("scroll", r.update, zr);
        }),
        u && s.removeEventListener("resize", r.update, zr);
    }
  );
}
var _5 = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: k5,
    data: {},
  },
  O5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qr(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return O5[t];
  });
}
var R5 = { start: "end", end: "start" };
function Al(e) {
  return e.replace(/start|end/g, function (t) {
    return R5[t];
  });
}
function oo(e) {
  var t = Ce(e),
    r = t.pageXOffset,
    a = t.pageYOffset;
  return { scrollLeft: r, scrollTop: a };
}
function lo(e) {
  return Yt(bt(e)).left + oo(e).scrollLeft;
}
function F5(e, t) {
  var r = Ce(e),
    a = bt(e),
    o = r.visualViewport,
    l = a.clientWidth,
    i = a.clientHeight,
    u = 0,
    s = 0;
  if (o) {
    (l = o.width), (i = o.height);
    var c = ss();
    (c || (!c && t === "fixed")) && ((u = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: l, height: i, x: u + lo(e), y: s };
}
function T5(e) {
  var t,
    r = bt(e),
    a = oo(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = _t(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    i = _t(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    u = -a.scrollLeft + lo(e),
    s = -a.scrollTop;
  return (
    st(o || r).direction === "rtl" &&
      (u += _t(r.clientWidth, o ? o.clientWidth : 0) - l),
    { width: l, height: i, x: u, y: s }
  );
}
function io(e) {
  var t = st(e),
    r = t.overflow,
    a = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + a);
}
function fs(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0
    ? e.ownerDocument.body
    : Te(e) && io(e)
    ? e
    : fs(Sa(e));
}
function mr(e, t) {
  var r;
  t === void 0 && (t = []);
  var a = fs(e),
    o = a === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Ce(a),
    i = o ? [l].concat(l.visualViewport || [], io(a) ? a : []) : a,
    u = t.concat(i);
  return o ? u : u.concat(mr(Sa(i)));
}
function xn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function D5(e, t) {
  var r = Yt(e, !1, t === "fixed");
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
function wl(e, t, r) {
  return t === ls ? xn(F5(e, r)) : Tt(t) ? D5(t, r) : xn(T5(bt(e)));
}
function L5(e) {
  var t = mr(Sa(e)),
    r = ["absolute", "fixed"].indexOf(st(e).position) >= 0,
    a = r && Te(e) ? Mr(e) : e;
  return Tt(a)
    ? t.filter(function (o) {
        return Tt(o) && us(o, a) && at(o) !== "body";
      })
    : [];
}
function M5(e, t, r, a) {
  var o = t === "clippingParents" ? L5(e) : [].concat(t),
    l = [].concat(o, [r]),
    i = l[0],
    u = l.reduce(function (s, c) {
      var d = wl(e, c, a);
      return (
        (s.top = _t(d.top, s.top)),
        (s.right = ua(d.right, s.right)),
        (s.bottom = ua(d.bottom, s.bottom)),
        (s.left = _t(d.left, s.left)),
        s
      );
    }, wl(e, i, a));
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function ms(e) {
  var t = e.reference,
    r = e.element,
    a = e.placement,
    o = a ? rt(a) : null,
    l = a ? Kt(a) : null,
    i = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (o) {
    case Ee:
      s = { x: i, y: t.y - r.height };
      break;
    case De:
      s = { x: i, y: t.y + t.height };
      break;
    case Le:
      s = { x: t.x + t.width, y: u };
      break;
    case xe:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = o ? no(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (l) {
      case Wt:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2);
        break;
      case Ar:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function wr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    a = r.placement,
    o = a === void 0 ? e.placement : a,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    u = r.boundary,
    s = u === void 0 ? e5 : u,
    c = r.rootBoundary,
    d = c === void 0 ? ls : c,
    f = r.elementContext,
    p = f === void 0 ? cr : f,
    g = r.altBoundary,
    h = g === void 0 ? !1 : g,
    b = r.padding,
    x = b === void 0 ? 0 : b,
    w = ds(typeof x != "number" ? x : ps(x, Lr)),
    S = p === cr ? t5 : cr,
    v = e.rects.popper,
    E = e.elements[h ? S : p],
    y = M5(Tt(E) ? E : E.contextElement || bt(e.elements.popper), s, d, i),
    A = Yt(e.elements.reference),
    k = ms({ reference: A, element: v, strategy: "absolute", placement: o }),
    C = xn(Object.assign({}, v, k)),
    O = p === cr ? C : A,
    R = {
      top: y.top - O.top + w.top,
      bottom: O.bottom - y.bottom + w.bottom,
      left: y.left - O.left + w.left,
      right: O.right - y.right + w.right,
    },
    F = e.modifiersData.offset;
  if (p === cr && F) {
    var L = F[o];
    Object.keys(R).forEach(function (T) {
      var I = [Le, De].indexOf(T) >= 0 ? 1 : -1,
        D = [Ee, De].indexOf(T) >= 0 ? "y" : "x";
      R[T] += L[D] * I;
    });
  }
  return R;
}
function B5(e, t) {
  t === void 0 && (t = {});
  var r = t,
    a = r.placement,
    o = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? is : s,
    d = Kt(a),
    f = d
      ? u
        ? vl
        : vl.filter(function (h) {
            return Kt(h) === d;
          })
      : Lr,
    p = f.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  p.length === 0 && (p = f);
  var g = p.reduce(function (h, b) {
    return (
      (h[b] = wr(e, { placement: b, boundary: o, rootBoundary: l, padding: i })[
        rt(b)
      ]),
      h
    );
  }, {});
  return Object.keys(g).sort(function (h, b) {
    return g[h] - g[b];
  });
}
function $5(e) {
  if (rt(e) === wa) return [];
  var t = Qr(e);
  return [Al(e), t, Al(t)];
}
function P5(e) {
  var t = e.state,
    r = e.options,
    a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (
      var o = r.mainAxis,
        l = o === void 0 ? !0 : o,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        c = r.padding,
        d = r.boundary,
        f = r.rootBoundary,
        p = r.altBoundary,
        g = r.flipVariations,
        h = g === void 0 ? !0 : g,
        b = r.allowedAutoPlacements,
        x = t.options.placement,
        w = rt(x),
        S = w === x,
        v = s || (S || !h ? [Qr(x)] : $5(x)),
        E = [x].concat(v).reduce(function (K, P) {
          return K.concat(
            rt(P) === wa
              ? B5(t, {
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
        A = t.rects.popper,
        k = new Map(),
        C = !0,
        O = E[0],
        R = 0;
      R < E.length;
      R++
    ) {
      var F = E[R],
        L = rt(F),
        T = Kt(F) === Wt,
        I = [Ee, De].indexOf(L) >= 0,
        D = I ? "width" : "height",
        M = wr(t, {
          placement: F,
          boundary: d,
          rootBoundary: f,
          altBoundary: p,
          padding: c,
        }),
        N = I ? (T ? Le : xe) : T ? De : Ee;
      y[D] > A[D] && (N = Qr(N));
      var V = Qr(N),
        $ = [];
      if (
        (l && $.push(M[L] <= 0),
        u && $.push(M[N] <= 0, M[V] <= 0),
        $.every(function (K) {
          return K;
        }))
      ) {
        (O = F), (C = !1);
        break;
      }
      k.set(F, $);
    }
    if (C)
      for (
        var Z = h ? 3 : 1,
          Y = function (K) {
            var P = E.find(function (z) {
              var q = k.get(z);
              if (q)
                return q.slice(0, K).every(function (le) {
                  return le;
                });
            });
            if (P) return (O = P), "break";
          },
          ee = Z;
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
var I5 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: P5,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Sl(e, t, r) {
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
function Cl(e) {
  return [Ee, Le, De, xe].some(function (t) {
    return e[t] >= 0;
  });
}
function j5(e) {
  var t = e.state,
    r = e.name,
    a = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = wr(t, { elementContext: "reference" }),
    u = wr(t, { altBoundary: !0 }),
    s = Sl(i, a),
    c = Sl(u, o, l),
    d = Cl(s),
    f = Cl(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": f,
    }));
}
var N5 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: j5,
};
function Z5(e, t, r) {
  var a = rt(e),
    o = [xe, Ee].indexOf(a) >= 0 ? -1 : 1,
    l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = l[0],
    u = l[1];
  return (
    (i = i || 0),
    (u = (u || 0) * o),
    [xe, Le].indexOf(a) >= 0 ? { x: u, y: i } : { x: i, y: u }
  );
}
function H5(e) {
  var t = e.state,
    r = e.options,
    a = e.name,
    o = r.offset,
    l = o === void 0 ? [0, 0] : o,
    i = is.reduce(function (d, f) {
      return (d[f] = Z5(f, t.rects, l)), d;
    }, {}),
    u = i[t.placement],
    s = u.x,
    c = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[a] = i);
}
var V5 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: H5,
};
function z5(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = ms({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var q5 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: z5,
  data: {},
};
function U5(e) {
  return e === "x" ? "y" : "x";
}
function W5(e) {
  var t = e.state,
    r = e.options,
    a = e.name,
    o = r.mainAxis,
    l = o === void 0 ? !0 : o,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    s = r.boundary,
    c = r.rootBoundary,
    d = r.altBoundary,
    f = r.padding,
    p = r.tether,
    g = p === void 0 ? !0 : p,
    h = r.tetherOffset,
    b = h === void 0 ? 0 : h,
    x = wr(t, { boundary: s, rootBoundary: c, padding: f, altBoundary: d }),
    w = rt(t.placement),
    S = Kt(t.placement),
    v = !S,
    E = no(w),
    y = U5(E),
    A = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    C = t.rects.popper,
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
  if (A) {
    if (l) {
      var T,
        I = E === "y" ? Ee : xe,
        D = E === "y" ? De : Le,
        M = E === "y" ? "height" : "width",
        N = A[E],
        V = N + x[I],
        $ = N - x[D],
        Z = g ? -C[M] / 2 : 0,
        Y = S === Wt ? k[M] : C[M],
        ee = S === Wt ? -C[M] : -k[M],
        G = t.elements.arrow,
        K = g && G ? ao(G) : { width: 0, height: 0 },
        P = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : cs(),
        z = P[I],
        q = P[D],
        le = fr(0, k[M], K[M]),
        ge = v ? k[M] / 2 - Z - le - z - R.mainAxis : Y - le - z - R.mainAxis,
        nt = v ? -k[M] / 2 + Z + le + q + R.mainAxis : ee + le + q + R.mainAxis,
        Oe = t.elements.arrow && Mr(t.elements.arrow),
        Ne = Oe ? (E === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0) : 0,
        B = (T = F == null ? void 0 : F[E]) != null ? T : 0,
        $e = N + ge - B - Ne,
        Ze = N + nt - B,
        yt = fr(g ? ua(V, $e) : V, N, g ? _t($, Ze) : $);
      (A[E] = yt), (L[E] = yt - N);
    }
    if (u) {
      var Bt,
        He = E === "x" ? Ee : xe,
        Pr = E === "x" ? De : Le,
        he = A[y],
        vt = y === "y" ? "height" : "width",
        Ve = he + x[He],
        $t = he - x[Pr],
        ze = [Ee, xe].indexOf(w) !== -1,
        Pt = (Bt = F == null ? void 0 : F[y]) != null ? Bt : 0,
        qe = ze ? Ve : he - k[vt] - C[vt] - Pt + R.altAxis,
        de = ze ? he + k[vt] + C[vt] - Pt - R.altAxis : $t,
        Pe = g && ze ? b5(qe, he, de) : fr(g ? qe : Ve, he, g ? de : $t);
      (A[y] = Pe), (L[y] = Pe - he);
    }
    t.modifiersData[a] = L;
  }
}
var G5 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W5,
  requiresIfExists: ["offset"],
};
function Y5(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function K5(e) {
  return e === Ce(e) || !Te(e) ? oo(e) : Y5(e);
}
function X5(e) {
  var t = e.getBoundingClientRect(),
    r = Gt(t.width) / e.offsetWidth || 1,
    a = Gt(t.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function J5(e, t, r) {
  r === void 0 && (r = !1);
  var a = Te(t),
    o = Te(t) && X5(t),
    l = bt(t),
    i = Yt(e, o, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (a || (!a && !r)) &&
      ((at(t) !== "body" || io(l)) && (u = K5(t)),
      Te(t)
        ? ((s = Yt(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : l && (s.x = lo(l))),
    {
      x: i.left + u.scrollLeft - s.x,
      y: i.top + u.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function Q5(e) {
  var t = new Map(),
    r = new Set(),
    a = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function o(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && o(s);
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
function e2(e) {
  var t = Q5(e);
  return d5.reduce(function (r, a) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === a;
      })
    );
  }, []);
}
function t2(e) {
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
function r2(e) {
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
var kl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _l() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function a2(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    a = r === void 0 ? [] : r,
    o = t.defaultOptions,
    l = o === void 0 ? kl : o;
  return function (i, u, s) {
    s === void 0 && (s = l);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, kl, l),
        modifiersData: {},
        elements: { reference: i, popper: u },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (b) {
          var x = typeof b == "function" ? b(c.options) : b;
          h(),
            (c.options = Object.assign({}, l, c.options, x)),
            (c.scrollParents = {
              reference: Tt(i)
                ? mr(i)
                : i.contextElement
                ? mr(i.contextElement)
                : [],
              popper: mr(u),
            });
          var w = e2(r2([].concat(a, c.options.modifiers)));
          return (
            (c.orderedModifiers = w.filter(function (S) {
              return S.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var b = c.elements,
              x = b.reference,
              w = b.popper;
            if (_l(x, w)) {
              (c.rects = {
                reference: J5(x, Mr(w), c.options.strategy === "fixed"),
                popper: ao(w),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (C) {
                  return (c.modifiersData[C.name] = Object.assign({}, C.data));
                });
              for (var S = 0; S < c.orderedModifiers.length; S++) {
                if (c.reset === !0) {
                  (c.reset = !1), (S = -1);
                  continue;
                }
                var v = c.orderedModifiers[S],
                  E = v.fn,
                  y = v.options,
                  A = y === void 0 ? {} : y,
                  k = v.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: A, name: k, instance: p }) || c);
              }
            }
          }
        },
        update: t2(function () {
          return new Promise(function (b) {
            p.forceUpdate(), b(c);
          });
        }),
        destroy: function () {
          h(), (f = !0);
        },
      };
    if (!_l(i, u)) return p;
    p.setOptions(s).then(function (b) {
      !f && s.onFirstUpdate && s.onFirstUpdate(b);
    });
    function g() {
      c.orderedModifiers.forEach(function (b) {
        var x = b.name,
          w = b.options,
          S = w === void 0 ? {} : w,
          v = b.effect;
        if (typeof v == "function") {
          var E = v({ state: c, name: x, instance: p, options: S }),
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
var n2 = [_5, q5, C5, m5, V5, I5, G5, x5, N5],
  o2 = a2({ defaultModifiers: n2 }),
  l2 = ke(Jp()),
  i2 = [],
  s2 = function (e, t, r) {
    r === void 0 && (r = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || i2,
      },
      l = m.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      i = l[0],
      u = l[1],
      s = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (f) {
            var p = f.state,
              g = Object.keys(p.elements);
            ni.flushSync(function () {
              u({
                styles: bl(
                  g.map(function (h) {
                    return [h, p.styles[h] || {}];
                  })
                ),
                attributes: bl(
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
              s,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return (0, l2.default)(a.current, f)
            ? a.current || f
            : ((a.current = f), f);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]
      ),
      d = m.useRef();
    return (
      yl(
        function () {
          d.current && d.current.setOptions(c);
        },
        [c]
      ),
      yl(
        function () {
          if (!(e == null || t == null)) {
            var f = r.createPopper || o2,
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
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  };
function gs(e) {
  var t = m.useRef(e);
  return (
    (t.current = e),
    m.useCallback(function () {
      return t.current;
    }, [])
  );
}
var u2 = function () {};
function c2(e) {
  var t = e.initial,
    r = e.value,
    a = e.onChange,
    o = a === void 0 ? u2 : a;
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  var l = m.useState(t),
    i = l[0],
    u = l[1],
    s = gs(i),
    c = m.useCallback(
      function (f) {
        var p = s(),
          g = typeof f == "function" ? f(p) : f;
        typeof g.persist == "function" && g.persist(),
          u(g),
          typeof o == "function" && o(g);
      },
      [s, o]
    ),
    d = r !== void 0;
  return [d ? r : i, d ? o : c];
}
function hs(e, t) {
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
var d2 = ["styles", "attributes"],
  Ol = { getBoundingClientRect: hs() },
  Rl = {
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
function p2(e, t) {
  var r, a, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(Rl).reduce(function (D, M) {
      var N;
      return lt({}, D, ((N = {}), (N[M] = D[M] !== void 0 ? D[M] : Rl[M]), N));
    }, e),
    i = m.useMemo(
      function () {
        return [{ name: "offset", options: { offset: l.offset } }];
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = lt({}, t, {
      placement: t.placement || l.placement,
      modifiers: t.modifiers || i,
    }),
    s = m.useState(null),
    c = s[0],
    d = s[1],
    f = m.useState(null),
    p = f[0],
    g = f[1],
    h = c2({
      initial: l.defaultVisible,
      value: l.visible,
      onChange: l.onVisibleChange,
    }),
    b = h[0],
    x = h[1],
    w = m.useRef();
  m.useEffect(function () {
    return function () {
      return clearTimeout(w.current);
    };
  }, []);
  var S = s2(l.followCursor ? Ol : c, p, u),
    v = S.styles,
    E = S.attributes,
    y = Qp(S, d2),
    A = y.update,
    k = gs({ visible: b, triggerRef: c, tooltipRef: p, finalConfig: l }),
    C = m.useCallback(
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
            return x(!1);
          }, l.delayHide));
      },
      [l.delayHide, x]
    ),
    R = m.useCallback(
      function () {
        clearTimeout(w.current),
          (w.current = window.setTimeout(function () {
            return x(!0);
          }, l.delayShow));
      },
      [l.delayShow, x]
    ),
    F = m.useCallback(
      function () {
        k().visible ? O() : R();
      },
      [k, O, R]
    );
  m.useEffect(
    function () {
      if (k().finalConfig.closeOnOutsideClick) {
        var D = function (M) {
          var N,
            V = k(),
            $ = V.tooltipRef,
            Z = V.triggerRef,
            Y =
              (M.composedPath == null || (N = M.composedPath()) == null
                ? void 0
                : N[0]) || M.target;
          Y instanceof Node &&
            $ != null &&
            Z != null &&
            !$.contains(Y) &&
            !Z.contains(Y) &&
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
    [k, O]
  ),
    m.useEffect(
      function () {
        if (!(c == null || !C("click")))
          return (
            c.addEventListener("click", F),
            function () {
              return c.removeEventListener("click", F);
            }
          );
      },
      [c, C, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !C("double-click")))
          return (
            c.addEventListener("dblclick", F),
            function () {
              return c.removeEventListener("dblclick", F);
            }
          );
      },
      [c, C, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !C("right-click"))) {
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
      [c, C, F]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !C("focus")))
          return (
            c.addEventListener("focus", R),
            c.addEventListener("blur", O),
            function () {
              c.removeEventListener("focus", R),
                c.removeEventListener("blur", O);
            }
          );
      },
      [c, C, R, O]
    ),
    m.useEffect(
      function () {
        if (!(c == null || !C("hover")))
          return (
            c.addEventListener("mouseenter", R),
            c.addEventListener("mouseleave", O),
            function () {
              c.removeEventListener("mouseenter", R),
                c.removeEventListener("mouseleave", O);
            }
          );
      },
      [c, C, R, O]
    ),
    m.useEffect(
      function () {
        if (!(p == null || !C("hover") || !k().finalConfig.interactive))
          return (
            p.addEventListener("mouseenter", R),
            p.addEventListener("mouseleave", O),
            function () {
              p.removeEventListener("mouseenter", R),
                p.removeEventListener("mouseleave", O);
            }
          );
      },
      [p, C, R, O, k]
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
          (Ol.getBoundingClientRect = hs(N, V)), A == null || A();
        }
        return (
          c.addEventListener("mousemove", D),
          function () {
            return c.removeEventListener("mousemove", D);
          }
        );
      },
      [l.followCursor, c, A]
    ),
    m.useEffect(
      function () {
        if (!(p == null || A == null || l.mutationObserverOptions == null)) {
          var D = new MutationObserver(A);
          return (
            D.observe(p, l.mutationObserverOptions),
            function () {
              return D.disconnect();
            }
          );
        }
      },
      [l.mutationObserverOptions, p, A]
    );
  var T = function (D) {
      return (
        D === void 0 && (D = {}),
        lt({}, D, { style: lt({}, D.style, v.popper) }, E.popper, {
          "data-popper-interactive": l.interactive,
        })
      );
    },
    I = function (D) {
      return (
        D === void 0 && (D = {}),
        lt({}, D, E.arrow, {
          style: lt({}, D.style, v.arrow),
          "data-popper-arrow": !0,
        })
      );
    };
  return lt(
    {
      getArrowProps: I,
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
var Re = Dt(1e3)((e, t, r, a = 0) => (t.split("-")[0] === e ? r : a)),
  dt = 8,
  f2 = _.div(
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
      bottom: `${Re("top", r, `${dt * -1}px`, "auto")}`,
      top: `${Re("bottom", r, `${dt * -1}px`, "auto")}`,
      right: `${Re("left", r, `${dt * -1}px`, "auto")}`,
      left: `${Re("right", r, `${dt * -1}px`, "auto")}`,
      borderBottomWidth: `${Re("top", r, "0", dt)}px`,
      borderTopWidth: `${Re("bottom", r, "0", dt)}px`,
      borderRightWidth: `${Re("left", r, "0", dt)}px`,
      borderLeftWidth: `${Re("right", r, "0", dt)}px`,
      borderTopColor: Re(
        "top",
        r,
        e.color[t] || t || e.base === "light"
          ? pr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderBottomColor: Re(
        "bottom",
        r,
        e.color[t] || t || e.base === "light"
          ? pr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderLeftColor: Re(
        "left",
        r,
        e.color[t] || t || e.base === "light"
          ? pr(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderRightColor: Re(
        "right",
        r,
        e.color[t] || t || e.base === "light"
          ? pr(e.background.app)
          : e.background.app,
        "transparent"
      ),
    })
  ),
  m2 = _.div(
    ({ hidden: e }) => ({
      display: e ? "none" : "inline-block",
      zIndex: 2147483647,
    }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === "light"
                ? pr(e.background.app)
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
  so = n.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: a,
        tooltipRef: o,
        color: l,
        withArrows: i,
        ...u
      },
      s
    ) =>
      n.createElement(
        m2,
        { "data-testid": "tooltip", hasChrome: t, ref: s, ...u, color: l },
        t && i && n.createElement(f2, { placement: e, ...a, color: l }),
        r
      )
  );
so.displayName = "Tooltip";
so.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {},
};
var { document: ea } = Xp,
  g2 = _.div`
  display: inline-block;
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  h2 = _.g`
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  bs = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: a,
    hasChrome: o,
    withArrows: l,
    offset: i,
    tooltip: u,
    children: s,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: f,
    tooltipShown: p,
    onVisibilityChange: g,
    defaultVisible: h,
    delayHide: b,
    visible: x,
    interactive: w,
    delayShow: S,
    modifiers: v,
    strategy: E,
    followCursor: y,
    onVisibleChange: A,
    ...k
  }) => {
    let C = e ? h2 : g2,
      {
        getArrowProps: O,
        getTooltipProps: R,
        setTooltipRef: F,
        setTriggerRef: L,
        visible: T,
        state: I,
      } = p2(
        {
          trigger: t,
          placement: a,
          defaultVisible: h ?? p,
          delayHide: b,
          interactive: w,
          closeOnOutsideClick: r ?? f,
          closeOnTriggerHidden: c,
          onVisibleChange: (M) => {
            g == null || g(M), A == null || A(M);
          },
          delayShow: S,
          followCursor: y,
          mutationObserverOptions: d,
          visible: x,
          offset: i,
        },
        { modifiers: v, strategy: E }
      ),
      D = n.createElement(
        so,
        {
          placement: I == null ? void 0 : I.placement,
          ref: F,
          hasChrome: o,
          arrowProps: O(),
          withArrows: l,
          ...R(),
        },
        typeof u == "function" ? u({ onHide: () => A(!1) }) : u
      );
    return n.createElement(
      n.Fragment,
      null,
      n.createElement(C, { trigger: t, ref: L, ...k }, s),
      T && Vu.createPortal(D, ea.body)
    );
  };
bs.defaultProps = {
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
var b2 = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [a, o] = m.useState(e),
    l = m.useCallback(
      (i) => {
        (t && t(i) === !1) || o(i);
      },
      [t]
    );
  return (
    m.useEffect(() => {
      let i = () => l(!1);
      ea.addEventListener("keydown", i, !1);
      let u = Array.from(ea.getElementsByTagName("iframe")),
        s = [];
      return (
        u.forEach((c) => {
          let d = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener("click", i),
                s.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener("click", i);
                  } catch {}
                }));
            } catch {}
          };
          d(),
            c.addEventListener("load", d),
            s.push(() => {
              c.removeEventListener("load", d);
            });
        }),
        () => {
          ea.removeEventListener("keydown", i),
            s.forEach((c) => {
              c();
            });
        }
      );
    }),
    n.createElement(bs, { ...r, visible: a, onVisibleChange: l })
  );
};
const { global: y2 } = __STORYBOOK_MODULE_GLOBAL__;
var X = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return (
    delete e.class,
    (e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" ")),
    e
  );
};
function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Sr.apply(this, arguments)
  );
}
function v2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Cr(e, t) {
  return (
    (Cr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    Cr(e, t)
  );
}
function E2(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Cr(e, t);
}
function An(e) {
  return (
    (An = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    An(e)
  );
}
function x2(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function A2() {
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
function ta(e, t, r) {
  return (
    A2()
      ? (ta = Reflect.construct.bind())
      : (ta = function (a, o, l) {
          var i = [null];
          i.push.apply(i, o);
          var u = Function.bind.apply(a, i),
            s = new u();
          return l && Cr(s, l.prototype), s;
        }),
    ta.apply(null, arguments)
  );
}
function wn(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (wn = function (r) {
      if (r === null || !x2(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, a);
      }
      function a() {
        return ta(r, arguments, An(this).constructor);
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
        Cr(a, r)
      );
    }),
    wn(e)
  );
}
var et = (function (e) {
  E2(t, e);
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
      v2(a)
    );
  }
  return t;
})(wn(Error));
function Ga(e) {
  return Math.round(e * 255);
}
function w2(e, t, r) {
  return Ga(e) + "," + Ga(t) + "," + Ga(r);
}
function kr(e, t, r, a) {
  if ((a === void 0 && (a = w2), t === 0)) return a(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i));
  var d = r - l / 2,
    f = u + d,
    p = s + d,
    g = c + d;
  return a(f, p, g);
}
var Fl = {
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
function S2(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Fl[t] ? "#" + Fl[t] : e;
}
var C2 = /^#[a-fA-F0-9]{6}$/,
  k2 = /^#[a-fA-F0-9]{8}$/,
  _2 = /^#[a-fA-F0-9]{3}$/,
  O2 = /^#[a-fA-F0-9]{4}$/,
  Ya = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  R2 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  F2 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  T2 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function uo(e) {
  if (typeof e != "string") throw new et(3);
  var t = S2(e);
  if (t.match(C2))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(k2)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(_2))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(O2)) {
    var a = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: a,
    };
  }
  var o = Ya.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
    };
  var l = R2.exec(t.substring(0, 50));
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
  var i = F2.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      c = parseInt("" + i[3], 10) / 100,
      d = "rgb(" + kr(u, s, c) + ")",
      f = Ya.exec(d);
    if (!f) throw new et(4, t, d);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10),
    };
  }
  var p = T2.exec(t.substring(0, 50));
  if (p) {
    var g = parseInt("" + p[1], 10),
      h = parseInt("" + p[2], 10) / 100,
      b = parseInt("" + p[3], 10) / 100,
      x = "rgb(" + kr(g, h, b) + ")",
      w = Ya.exec(x);
    if (!w) throw new et(4, t, x);
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
  throw new et(5);
}
function D2(e) {
  var t = e.red / 255,
    r = e.green / 255,
    a = e.blue / 255,
    o = Math.max(t, r, a),
    l = Math.min(t, r, a),
    i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - a) / s + (r < a ? 6 : 0);
      break;
    case r:
      u = (a - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function ys(e) {
  return D2(uo(e));
}
var L2 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  Sn = L2;
function St(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Ka(e) {
  return St(Math.round(e * 255));
}
function M2(e, t, r) {
  return Sn("#" + Ka(e) + Ka(t) + Ka(r));
}
function ca(e, t, r) {
  return kr(e, t, r, M2);
}
function B2(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ca(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ca(e.hue, e.saturation, e.lightness);
  throw new et(1);
}
function $2(e, t, r, a) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof a == "number"
  )
    return a >= 1 ? ca(e, t, r) : "rgba(" + kr(e, t, r) + "," + a + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
    return e.alpha >= 1
      ? ca(e.hue, e.saturation, e.lightness)
      : "rgba(" + kr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new et(2);
}
function Cn(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Sn("#" + St(e) + St(t) + St(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Sn("#" + St(e.red) + St(e.green) + St(e.blue));
  throw new et(6);
}
function it(e, t, r, a) {
  if (typeof e == "string" && typeof t == "number") {
    var o = uo(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof a == "number"
    )
      return a >= 1
        ? Cn(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + a + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && a === void 0)
      return e.alpha >= 1
        ? Cn(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new et(7);
}
var P2 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  I2 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  j2 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  N2 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function vs(e) {
  if (typeof e != "object") throw new et(8);
  if (I2(e)) return it(e);
  if (P2(e)) return Cn(e);
  if (N2(e)) return $2(e);
  if (j2(e)) return B2(e);
  throw new et(8);
}
function Es(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : Es(e, t, a);
  };
}
function co(e) {
  return Es(e, e.length, []);
}
function po(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Z2(e, t) {
  if (t === "transparent") return t;
  var r = ys(t);
  return vs(Sr({}, r, { lightness: po(0, 1, r.lightness - parseFloat(e)) }));
}
var H2 = co(Z2),
  Zt = H2;
function V2(e, t) {
  if (t === "transparent") return t;
  var r = ys(t);
  return vs(Sr({}, r, { lightness: po(0, 1, r.lightness + parseFloat(e)) }));
}
var z2 = co(V2),
  q2 = z2;
function U2(e, t) {
  if (t === "transparent") return t;
  var r = uo(t),
    a = typeof r.alpha == "number" ? r.alpha : 1,
    o = Sr({}, r, {
      alpha: po(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return it(o);
}
var W2 = co(U2),
  ye = W2,
  tr = ({ theme: e }) => ({
    margin: "20px 0 8px",
    padding: 0,
    cursor: "text",
    position: "relative",
    color: e.color.defaultText,
    "&:first-of-type": { marginTop: 0, paddingTop: 0 },
    "&:hover a.anchor": { textDecoration: "none" },
    "& tt, & code": { fontSize: "inherit" },
  }),
  ct = ({ theme: e }) => ({
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
        ? ye(0.1, e.color.defaultText)
        : ye(0.3, e.color.defaultText),
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
  Mt = { margin: "16px 0" },
  G2 = ({ href: e, children: t, ...r }) => {
    let a = /^\//.test(e),
      o = /^#.*/.test(e),
      l = a ? `./?path=${e}` : e;
    return n.createElement(
      "a",
      { href: l, target: o ? "_self" : "_top", ...r },
      t
    );
  },
  xs = _(G2)(Q, ({ theme: e }) => ({
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
  As = _.blockquote(Q, Mt, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: "0 15px",
    color: e.color.dark,
    "& > :first-of-type": { marginTop: 0 },
    "& > :last-child": { marginBottom: 0 },
  })),
  Y2 = (e) => typeof e == "string",
  K2 = /[\n\r]/g,
  X2 = _.code(
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
    ct
  ),
  J2 = _(to)(({ theme: e }) => ({
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
  fo = ({ className: e, children: t, ...r }) => {
    let a = (e || "").match(/lang-(\S+)/),
      o = m.Children.toArray(t);
    return o.filter(Y2).some((l) => l.match(K2))
      ? n.createElement(
          J2,
          {
            bordered: !0,
            copyable: !0,
            language: (a == null ? void 0 : a[1]) ?? "plaintext",
            format: !1,
            ...r,
          },
          t
        )
      : n.createElement(X2, { ...r, className: e }, o);
  },
  ws = _.div(Q),
  Ss = _.dl(Q, Mt, {
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
  Cs = _.h1(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  mo = _.h2(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  go = _.h3(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`,
  })),
  ks = _.h4(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`,
  })),
  _s = _.h5(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
  })),
  Os = _.h6(Q, tr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  Rs = _.hr(({ theme: e }) => ({
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  Fs = _.img({ maxWidth: "100%" }),
  Ts = _.li(Q, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: "24px",
    "& + li": { marginTop: ".25em" },
    "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
    "& code": ct({ theme: e }),
  })),
  Q2 = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  Ds = _.ol(Q, Mt, Q2, { listStyle: "decimal" }),
  Ls = _.p(Q, Mt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    color: e.color.defaultText,
    "& code": ct({ theme: e }),
  })),
  Ms = _.pre(Q, Mt, ({ theme: e }) => ({
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
  Bs = _.span(Q, ({ theme: e }) => ({
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
  $s = _.table(Q, Mt, ({ theme: e }) => ({
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
  Ps = _.title(ct),
  ef = {
    paddingLeft: 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  Is = _.ul(Q, Mt, ef, { listStyle: "disc" }),
  ho = _.div(Q),
  js = {
    h1: (e) => n.createElement(Cs, { ...X(e, "h1") }),
    h2: (e) => n.createElement(mo, { ...X(e, "h2") }),
    h3: (e) => n.createElement(go, { ...X(e, "h3") }),
    h4: (e) => n.createElement(ks, { ...X(e, "h4") }),
    h5: (e) => n.createElement(_s, { ...X(e, "h5") }),
    h6: (e) => n.createElement(Os, { ...X(e, "h6") }),
    pre: (e) => n.createElement(Ms, { ...X(e, "pre") }),
    a: (e) => n.createElement(xs, { ...X(e, "a") }),
    hr: (e) => n.createElement(Rs, { ...X(e, "hr") }),
    dl: (e) => n.createElement(Ss, { ...X(e, "dl") }),
    blockquote: (e) => n.createElement(As, { ...X(e, "blockquote") }),
    table: (e) => n.createElement($s, { ...X(e, "table") }),
    img: (e) => n.createElement(Fs, { ...X(e, "img") }),
    div: (e) => n.createElement(ws, { ...X(e, "div") }),
    span: (e) => n.createElement(Bs, { ...X(e, "span") }),
    li: (e) => n.createElement(Ts, { ...X(e, "li") }),
    ul: (e) => n.createElement(Is, { ...X(e, "ul") }),
    ol: (e) => n.createElement(Ds, { ...X(e, "ol") }),
    p: (e) => n.createElement(Ls, { ...X(e, "p") }),
    code: (e) => n.createElement(fo, { ...X(e, "code") }),
    tt: (e) => n.createElement(Ps, { ...X(e, "tt") }),
    resetwrapper: (e) => n.createElement(ho, { ...X(e, "resetwrapper") }),
  },
  tf = _.div(
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
                ? `inset 0 0 0 1px ${ye(0.9, e.color.negativeText)}`
                : "none",
          };
        case "warning":
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${ye(0.9, e.color.warningText)}`
                : "none",
          };
        case "neutral":
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${ye(0.9, e.color.dark)}`
                : "none",
          };
        case "positive":
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${ye(0.9, e.color.positiveText)}`
                : "none",
          };
        default:
          return {};
      }
    }
  ),
  rf = ({ ...e }) => n.createElement(tf, { ...e }),
  _r = {
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
  Ns = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  be = ({ icon: e, useSymbol: t, ...r }) =>
    n.createElement(
      Ns,
      { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r },
      t ? n.createElement("use", { xlinkHref: `#icon--${e}` }) : _r[e]
    ),
  af = m.memo(function ({ icons: e = Object.keys(_r) }) {
    return n.createElement(
      Ns,
      {
        viewBox: "0 0 14 14",
        style: { position: "absolute", width: 0, height: 0 },
        "data-chromatic": "ignore",
      },
      e.map((t) =>
        n.createElement("symbol", { id: `icon--${t}`, key: t }, _r[t])
      )
    );
  }),
  nf = 0,
  of = (e) =>
    e.button === nf && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  lf = (e, t) => {
    of(e) && (e.preventDefault(), t(e));
  },
  sf = _.span(
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
  uf = _.a(
    ({ theme: e }) => ({
      display: "inline-block",
      transition: "all 150ms ease-out",
      textDecoration: "none",
      color: e.color.secondary,
      "&:hover, &:focus": {
        cursor: "pointer",
        color: Zt(0.07, e.color.secondary),
        "svg path:not([fill])": { fill: Zt(0.07, e.color.secondary) },
      },
      "&:active": {
        color: Zt(0.1, e.color.secondary),
        "svg path:not([fill])": { fill: Zt(0.1, e.color.secondary) },
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
  gt = ({
    cancel: e,
    children: t,
    onClick: r,
    withArrow: a,
    containsIcon: o,
    className: l,
    ...i
  }) =>
    n.createElement(
      uf,
      { ...i, onClick: r && e ? (u) => lf(u, r) : r, className: l },
      n.createElement(
        sf,
        { withArrow: a, containsIcon: o },
        t,
        a && n.createElement(be, { icon: "arrowright" })
      )
    );
gt.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
};
var cf = _.div(({ theme: e }) => ({
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
  Ot = [],
  Xt = null,
  df = m.lazy(async () => {
    let { SyntaxHighlighter: e } = await Ft(
      () => import("./syntaxhighlighter-V7JZZA35-981d626e.js"),
      [
        "./syntaxhighlighter-V7JZZA35-981d626e.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-11d98b33.js",
        "./index-cf0e44f3.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    );
    return (
      Ot.length > 0 &&
        (Ot.forEach((t) => {
          e.registerLanguage(...t);
        }),
        (Ot = [])),
      Xt === null && (Xt = e),
      { default: (t) => n.createElement(e, { ...t }) }
    );
  }),
  pf = m.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      Ft(
        () => import("./syntaxhighlighter-V7JZZA35-981d626e.js"),
        [
          "./syntaxhighlighter-V7JZZA35-981d626e.js",
          "./iframe-92f28330.js",
          "./index-c013ead5.js",
          "./commonjsHelpers-725317a4.js",
          "./index-1b89a1c6.js",
          "./isNativeReflectConstruct-81b4d0cb.js",
          "./doctrine-744fe685.js",
          "./index-169ee69c.js",
          "./index-11d98b33.js",
          "./index-cf0e44f3.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
      Ft(
        () => import("./formatter-SWP5E3XI-46160b61.js"),
        [
          "./formatter-SWP5E3XI-46160b61.js",
          "./index-1b89a1c6.js",
          "./index-c013ead5.js",
          "./commonjsHelpers-725317a4.js",
          "./isNativeReflectConstruct-81b4d0cb.js",
          "./doctrine-744fe685.js",
          "./iframe-92f28330.js",
          "./index-169ee69c.js",
          "./index-11d98b33.js",
          "./index-cf0e44f3.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
    ]);
    return (
      Ot.length > 0 &&
        (Ot.forEach((r) => {
          e.registerLanguage(...r);
        }),
        (Ot = [])),
      Xt === null && (Xt = e),
      { default: (r) => n.createElement(e, { ...r, formatter: t }) }
    );
  }),
  Ca = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      e.format !== !1
        ? n.createElement(pf, { ...e })
        : n.createElement(df, { ...e })
    );
Ca.registerLanguage = (...e) => {
  if (Xt !== null) {
    Xt.registerLanguage(...e);
    return;
  }
  Ot.push(e);
};
var ff = (e) => (typeof e == "number" ? e : Number(e)),
  mf = _.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: "inline-block",
            verticalAlign: "inherit",
            "& > *": {
              marginLeft: t * e.layoutMargin,
              verticalAlign: "inherit",
            },
            [`& > *:first-child${fn}`]: { marginLeft: 0 },
          }
        : {
            "& > *": { marginTop: r * e.layoutMargin },
            [`& > *:first-child${fn}`]: { marginTop: 0 },
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
  gf = ({ col: e, row: t, outer: r, children: a, ...o }) => {
    let l = ff(typeof r == "number" || !r ? r : e || t);
    return n.createElement(mf, { col: e, row: t, outer: l, ...o }, a);
  },
  hf = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  bf = _.div(),
  yf = _.div(({ theme: e }) => ({
    padding: 30,
    textAlign: "center",
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  Zs = ({ children: e, ...t }) => {
    let [r, a] = m.Children.toArray(e);
    return n.createElement(
      yf,
      { ...t },
      n.createElement(hf, null, r),
      a && n.createElement(bf, null, a)
    );
  },
  vf = _.div(({ scale: e = 1, elementHeight: t }) => ({
    height: t || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / e})`,
  }));
function Ef({ scale: e, children: t }) {
  let r = m.useRef(null),
    [a, o] = m.useState(0),
    l = m.useCallback(
      ({ height: i }) => {
        i && o(i / e);
      },
      [e]
    );
  return (
    m.useEffect(() => {
      r.current && o(r.current.getBoundingClientRect().height);
    }, [e]),
    ri({ ref: r, onResize: l }),
    n.createElement(
      vf,
      { scale: e, elementHeight: a },
      n.createElement(
        "div",
        { ref: r, className: "innerZoomElementWrapper" },
        t
      )
    )
  );
}
var xf = class extends m.Component {
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
  Hs = { Element: Ef, IFrame: xf },
  { document: Af } = y2,
  wf = _.strong(({ theme: e }) => ({ color: e.color.orange })),
  Sf = _.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: "underline",
  })),
  Tl = _.em(({ theme: e }) => ({ color: e.textMutedColor })),
  Cf = /(Error): (.*)\n/,
  kf = /at (?:(.*) )?\(?(.+)\)?/,
  _f = /([^@]+)?(?:\/<)?@(.+)?/,
  Of = /([^@]+)?@(.+)?/,
  Vs = ({ error: e }) => {
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
    let r = t.match(Cf);
    if (!r) return n.createElement(m.Fragment, null, t);
    let [, a, o] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map((u) => {
          let s = u.match(kf) || u.match(_f) || u.match(Of);
          return s
            ? {
                name: (s[1] || "").replace("/<", ""),
                location: s[2].replace(Af.location.origin, ""),
              }
            : null;
        })
        .filter(Boolean);
    return n.createElement(
      m.Fragment,
      null,
      n.createElement("span", null, a),
      ": ",
      n.createElement(wf, null, o),
      n.createElement("br", null),
      i.map((u, s) =>
        u.name
          ? n.createElement(
              m.Fragment,
              { key: s },
              "  ",
              "at ",
              n.createElement(Sf, null, u.name),
              " (",
              n.createElement(Tl, null, u.location),
              ")",
              n.createElement("br", null)
            )
          : n.createElement(
              m.Fragment,
              { key: s },
              "  ",
              "at ",
              n.createElement(Tl, null, u.location),
              n.createElement("br", null)
            )
      )
    );
  },
  zs = _.button(
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
              "&:hover": { background: Zt(0.05, o) },
              "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" },
              "&:focus": {
                boxShadow: `${it(o, 1)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": { boxShadow: `${it(o, 0.2)} 0 8px 18px 0px` },
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
                  ? Zt(0.02, e.button.background)
                  : q2(0.03, e.button.background),
              ...(r
                ? {}
                : {
                    boxShadow:
                      "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset",
                  }),
            },
            "&:active": { background: e.button.background },
            "&:focus": {
              boxShadow: `${it(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: "none",
            },
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${ye(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: ye(0.3, e.color.defaultText),
            background: "transparent",
            "&:hover, &:focus": {
              boxShadow: `${ye(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: "none",
            },
            "&:active": {
              boxShadow: `${ye(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: ye(0, e.color.defaultText),
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
              boxShadow: `${a} 0 0 0 1px inset, ${it(a, 0.4)} 0 1px 9px 2px`,
              outline: "none",
            },
            "&:focus:hover": {
              boxShadow: `${a} 0 0 0 1px inset, ${it(a, 0.2)} 0 8px 18px 0px`,
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
                boxShadow: `${o} 0 0 0 1px inset, ${it(o, 0.4)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": {
                boxShadow: `${o} 0 0 0 1px inset, ${it(o, 0.2)} 0 8px 18px 0px`,
              },
            }
          : {}
      );
    }
  ),
  Rf = zs.withComponent("a"),
  qs = Object.assign(
    m.forwardRef(function ({ isLink: e, children: t, ...r }, a) {
      return e
        ? n.createElement(Rf, { ...r, ref: a }, t)
        : n.createElement(zs, { ...r, ref: a }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  Ff = _.label(({ theme: e }) => ({
    display: "flex",
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: "0 15px",
    padding: "8px 0",
    "&:last-child": { marginBottom: "3rem" },
  })),
  Tf = _.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    lineHeight: "16px",
  })),
  Us = ({ label: e, children: t, ...r }) =>
    n.createElement(
      Ff,
      { ...r },
      e ? n.createElement(Tf, null, n.createElement("span", null, e)) : null,
      t
    );
Us.defaultProps = { label: void 0 };
function kn() {
  return (
    (kn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    kn.apply(this, arguments)
  );
}
function Df(e, t) {
  if (e == null) return {};
  var r = {},
    a = Object.keys(e),
    o,
    l;
  for (l = 0; l < a.length; l++)
    (o = a[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Dl = function (e, t) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    e.current = t;
  },
  Lf = function (e, t) {
    var r = m.useRef();
    return m.useCallback(
      function (a) {
        (e.current = a),
          r.current && Dl(r.current, null),
          (r.current = t),
          t && Dl(t, a);
      },
      [t]
    );
  },
  Mf = Lf,
  Bf = function () {},
  $f = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  Pf = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows;
    var r = e.onChange,
      a = r === void 0 ? Bf : r;
    e.onHeightChange;
    var o = Df(e, $f);
    o.value;
    var l = m.useRef(null),
      i = Mf(l, t);
    return (
      m.useRef(0),
      m.useRef(),
      m.createElement("textarea", kn({}, o, { onChange: a, ref: i }))
    );
  },
  If = m.forwardRef(Pf),
  jf = {
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
  bo = ({ theme: e }) => ({
    ...jf,
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
  ka = ({ size: e }) => {
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
  Ws = ({ align: e }) => {
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
  _a = ({ valid: e, theme: t }) => {
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
  Nf = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement("input", { ...a, ref: o });
      })
    )(bo, ka, Ws, _a, { minHeight: 32 }),
    { displayName: "Input" }
  ),
  Zf = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement("select", { ...a, ref: o });
      })
    )(bo, ka, _a, {
      height: 32,
      userSelect: "none",
      paddingRight: 20,
      appearance: "menulist",
    }),
    { displayName: "Select" }
  ),
  Hf = Object.assign(
    _(
      m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
        return n.createElement(If, { ...a, ref: o });
      })
    )(bo, ka, Ws, _a, ({ height: e = 400 }) => ({
      overflow: "visible",
      maxHeight: e,
    })),
    { displayName: "Textarea" }
  ),
  Vf = _(
    m.forwardRef(function ({ size: e, valid: t, align: r, ...a }, o) {
      return n.createElement(qs, { ...a, ref: o });
    })
  )(ka, _a, {
    userSelect: "none",
    overflow: "visible",
    zIndex: 2,
    "&:hover": { transform: "none" },
  }),
  zf = Object.assign(
    m.forwardRef(function (e, t) {
      return n.createElement(Vf, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t,
      });
    }),
    { displayName: "Button" }
  ),
  Ie = Object.assign(_.form({ boxSizing: "border-box", width: "100%" }), {
    Field: Us,
    Input: Nf,
    Select: Zf,
    Textarea: Hf,
    Button: zf,
  }),
  qf = m.lazy(() =>
    Ft(
      () => import("./WithTooltip-V3YHNWJZ-bddd0f50.js"),
      [
        "./WithTooltip-V3YHNWJZ-bddd0f50.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-11d98b33.js",
        "./index-cf0e44f3.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  Uf = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      n.createElement(qf, { ...e })
    ),
  Wf = m.lazy(() =>
    Ft(
      () => import("./WithTooltip-V3YHNWJZ-bddd0f50.js"),
      [
        "./WithTooltip-V3YHNWJZ-bddd0f50.js",
        "./iframe-92f28330.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./doctrine-744fe685.js",
        "./index-169ee69c.js",
        "./index-11d98b33.js",
        "./index-cf0e44f3.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  Gs = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      n.createElement(Wf, { ...e })
    ),
  Gf = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Yf = _.span(),
  Kf = _.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: "center",
    "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold },
  })),
  Xf = _.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: "18px",
  })),
  Jf = _.div({ padding: 15, width: 280, boxSizing: "border-box" }),
  Ys = ({ title: e, desc: t, links: r }) =>
    n.createElement(
      Jf,
      null,
      n.createElement(
        Xf,
        null,
        e && n.createElement(Gf, null, e),
        t && n.createElement(Yf, null, t)
      ),
      r &&
        n.createElement(
          Kf,
          null,
          r.map(({ title: a, ...o }) =>
            n.createElement(gt, { ...o, key: a }, a)
          )
        )
    );
Ys.defaultProps = { title: null, desc: null, links: null };
var Qf = _.div(({ theme: e }) => ({
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
  em = ({ note: e, ...t }) => n.createElement(Qf, { ...t }, e),
  tm = _(({ active: e, loading: t, disabled: r, ...a }) =>
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
      e ? { color: ye(0.7, t.color.defaultText) } : {}
  ),
  rm = _.span({
    display: "flex",
    "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" },
    "& path": { fill: "inherit" },
  }),
  am = _.span(
    { flex: 1, textAlign: "left", display: "flex", flexDirection: "column" },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {})
  ),
  nm = _.span(
    ({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  Ll = _.span(
    ({ active: e, theme: t }) =>
      e
        ? {
            "& svg": { opacity: 1 },
            "& svg path:not([fill])": { fill: t.color.secondary },
          }
        : {},
    () => ({ display: "flex", maxWidth: 14 })
  ),
  om = _.a(
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
  lm = Dt(100)((e, t, r) => {
    let a = {};
    return (
      e && Object.assign(a, { onClick: e }),
      t && Object.assign(a, { href: t }),
      r && t && Object.assign(a, { to: t, as: r }),
      a
    );
  }),
  Ks = ({
    loading: e,
    left: t,
    title: r,
    center: a,
    right: o,
    icon: l,
    active: i,
    disabled: u,
    isIndented: s,
    href: c,
    onClick: d,
    LinkWrapper: f,
    ...p
  }) => {
    let g = lm(d, c, f),
      h = { active: i, disabled: u },
      b = typeof l == "string" && _r[l];
    return n.createElement(
      om,
      { ...h, ...p, ...g },
      l
        ? n.createElement(
            Ll,
            { ...h },
            b ? n.createElement(be, { icon: l }) : l
          )
        : t && n.createElement(Ll, { ...h }, t),
      r || a
        ? n.createElement(
            am,
            { isIndented: !t && !l && s },
            r && n.createElement(tm, { ...h, loading: e }, r),
            a && n.createElement(nm, { ...h }, a)
          )
        : null,
      o && n.createElement(rm, { ...h }, o)
    );
  };
Ks.defaultProps = {
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
var yo = Ks,
  im = _.div(
    {
      minWidth: 180,
      overflow: "hidden",
      overflowY: "auto",
      maxHeight: 15.5 * 32,
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius })
  ),
  sm = (e) => {
    let { LinkWrapper: t, onClick: r, id: a, isIndented: o, ...l } = e,
      { title: i, href: u, active: s } = l,
      c = m.useCallback(
        (f) => {
          r(f, l);
        },
        [r]
      ),
      d = !!r;
    return n.createElement(yo, {
      title: i,
      active: s,
      href: u,
      id: `list-item-${a}`,
      LinkWrapper: t,
      isIndented: o,
      ...l,
      ...(d ? { onClick: c } : {}),
    });
  },
  vo = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((a) => a.left || a.icon);
    return n.createElement(
      im,
      null,
      e.map(({ isGatsby: a, ...o }) =>
        n.createElement(sm, {
          key: o.id,
          LinkWrapper: a ? t : null,
          isIndented: r,
          ...o,
        })
      )
    );
  };
vo.defaultProps = { LinkWrapper: yo.defaultProps.LinkWrapper };
var Eo = n.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? n.createElement("a", { ref: r, ...t }, e)
    : n.createElement("button", { ref: r, type: "button", ...t }, e)
);
Eo.displayName = "ButtonOrLink";
var Br = _(Eo, { shouldForwardProp: In })(
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
Br.displayName = "TabButton";
var Rt = _(Eo, { shouldForwardProp: In })(
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
            background: ye(0.88, t.color.secondary),
            color: t.barHoverColor,
          },
          "&:focus-visible": { outline: wa },
          "&:focus:not(:focus-visible)": { outline: "none" },
        }
);
Rt.displayName = "IconButton";
var um = _.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  cm = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  Xs = () => n.createElement(cm, null, n.createElement(um, null)),
  _n = _.div(
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
_n.displayName = "Side";
var dm = ({ children: e, className: t, scrollable: r }) =>
    r
      ? n.createElement(eo, { vertical: !1, className: t }, e)
      : n.createElement("div", { className: t }, e),
  xo = _(dm)(
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
xo.displayName = "Bar";
var pm = _.div(({ bgColor: e }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    backgroundColor: e || "",
  })),
  Oa = ({ children: e, backgroundColor: t, ...r }) => {
    let [a, o] = m.Children.toArray(e);
    return n.createElement(
      xo,
      { ...r },
      n.createElement(
        pm,
        { bgColor: t },
        n.createElement(_n, { scrollable: r.scrollable, left: !0 }, a),
        o ? n.createElement(_n, { right: !0 }, o) : null
      )
    );
  };
Oa.displayName = "FlexBar";
var Js = _.div(({ active: e }) =>
    e ? { display: "block" } : { display: "none" }
  ),
  Ml = (e) =>
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
              : ({ active: i }) =>
                  n.createElement(Js, { active: i, role: "tabpanel" }, l),
        };
      }
    ),
  fm = _.span(({ theme: e, isActive: t }) => ({
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
  mm = _(Br)(
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
function gm(e) {
  let t = m.useRef(),
    r = m.useRef(),
    a = m.useRef(new Map()),
    { width: o = 1 } = ri({ ref: t }),
    [l, i] = m.useState(e),
    [u, s] = m.useState([]),
    c = m.useRef(e),
    d = m.useCallback(
      ({ menuName: p, actions: g }) => {
        let h = u.some(({ active: w }) => w),
          [b, x] = m.useState(!1);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            b2,
            {
              interactive: !0,
              visible: b,
              onVisibleChange: x,
              placement: "bottom",
              delayHide: 100,
              tooltip: n.createElement(vo, {
                links: u.map(({ title: w, id: S, color: v, active: E }) => ({
                  id: S,
                  title: w,
                  color: v,
                  active: E,
                  onClick: (y) => {
                    y.preventDefault(), g.onSelect(S);
                  },
                })),
              }),
            },
            n.createElement(
              mm,
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
              n.createElement(fm, {
                className: "addon-collapsible-icon",
                isActive: h || b,
              })
            )
          ),
          u.map(({ title: w, id: S, color: v }, E) => {
            let y = `index-${E}`;
            return n.createElement(
              Br,
              {
                id: `tabbutton-${oi(S) ?? y}`,
                style: { visibility: "hidden" },
                "aria-hidden": !0,
                tabIndex: -1,
                ref: (A) => {
                  a.current.set(S, A);
                },
                className: "tabbutton",
                type: "button",
                key: S,
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
        x = [],
        w = 0,
        S = e.filter((v) => {
          let { id: E } = v,
            y = a.current.get(E),
            { width: A = 0 } =
              (y == null ? void 0 : y.getBoundingClientRect()) || {},
            k = p + w + A > b;
          return (!k || !y) && x.push(v), (w += A), k;
        });
      (x.length !== l.length || c.current !== e) &&
        (i(x), s(S), (c.current = e));
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
var hm =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  bm = _.div(
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
  Ao = _.div({
    overflow: "hidden",
    "&:first-of-type": { marginLeft: -3 },
    whiteSpace: "nowrap",
    flexGrow: 1,
  });
Ao.displayName = "TabBar";
var ym = _.div(
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
            [`& > *:first-child${hm}`]: {
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
  vm = ({ active: e, render: t, children: r }) =>
    n.createElement(Js, { active: e }, t ? t() : r),
  Ra = m.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: a,
      bordered: o,
      tools: l,
      backgroundColor: i,
      id: u,
      menuName: s,
    }) => {
      let c = Ml(e).map((b) => b.id),
        d = m.useMemo(
          () =>
            Ml(e).map((b, x) => ({ ...b, active: t ? b.id === t : x === 0 })),
          [t, ...c]
        ),
        { visibleList: f, tabBarRef: p, tabRefs: g, AddonTab: h } = gm(d);
      return d.length
        ? n.createElement(
            bm,
            { absolute: a, bordered: o, id: u },
            n.createElement(
              Oa,
              { scrollable: !1, border: !0, backgroundColor: i },
              n.createElement(
                Ao,
                { style: { whiteSpace: "normal" }, ref: p, role: "tablist" },
                f.map(({ title: b, id: x, active: w, color: S }, v) => {
                  let E = `index-${v}`;
                  return n.createElement(
                    Br,
                    {
                      id: `tabbutton-${oi(x) ?? E}`,
                      ref: (y) => {
                        g.current.set(x, y);
                      },
                      className: `tabbutton ${w ? "tabbutton-active" : ""}`,
                      type: "button",
                      key: x,
                      active: w,
                      textColor: S,
                      onClick: (y) => {
                        y.preventDefault(), r.onSelect(x);
                      },
                      role: "tab",
                    },
                    typeof b == "function" ? n.createElement("title", null) : b
                  );
                }),
                n.createElement(h, { menuName: s, actions: r })
              ),
              l
            ),
            n.createElement(
              ym,
              { id: "panel-tab-content", bordered: o, absolute: a },
              d.map(({ id: b, active: x, render: w }) =>
                n.createElement(w, { key: b, active: x }, null)
              )
            )
          )
        : n.createElement(
            Zs,
            null,
            n.createElement(m.Fragment, { key: "title" }, "Nothing found")
          );
    }
  );
Ra.displayName = "Tabs";
Ra.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: "Tabs",
};
var Qs = class extends m.Component {
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
      Ra,
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
Qs.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: "",
  menuName: void 0,
};
var wo = _.span(
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
wo.displayName = "Separator";
var Em = (e) =>
    e.reduce(
      (t, r, a) =>
        r
          ? n.createElement(
              m.Fragment,
              { key: r.id || r.key || `f-${a}` },
              t,
              a > 0 ? n.createElement(wo, { key: `s-${a}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  xm = (e) => {
    let t = m.useRef();
    return (
      m.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  Am = (e, t) => {
    let r = xm(t);
    return e ? t : r;
  },
  wm = ({ active: e, children: t }) =>
    n.createElement("div", { hidden: !e }, Am(e, t)),
  Sm = ({ alt: e, ...t }) =>
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
  Cm = ({ ...e }) =>
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
  km = er`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  _m = _.div(({ size: e = 32 }) => ({
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
    animation: `${km} 0.7s linear infinite`,
    mixBlendMode: "difference",
  })),
  Bl = _.div({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }),
  Om = _.div(({ theme: e }) => ({
    position: "relative",
    width: "80%",
    marginBottom: "0.75rem",
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: ye(0.8, e.color.secondary),
    overflow: "hidden",
    cursor: "progress",
  })),
  Rm = _.div(({ theme: e }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: e.color.secondary,
  })),
  $l = _.div(({ theme: e }) => ({
    minHeight: "2em",
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  Fm = _(be)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: "0.5rem",
    color: e.textMutedColor,
  })),
  Tm = er`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  Dm = _.span({
    "&::after": {
      content: "'...'",
      animation: `${Tm} 1s linear infinite`,
      animationDelay: "1s",
      display: "inline-block",
      width: "1em",
      height: "auto",
    },
  }),
  eu = ({ progress: e, error: t, size: r, ...a }) => {
    if (t)
      return n.createElement(
        Bl,
        {
          "aria-label": t.toString(),
          "aria-live": "polite",
          role: "status",
          ...a,
        },
        n.createElement(Fm, { icon: "lightningoff" }),
        n.createElement($l, null, t.message)
      );
    if (e) {
      let { value: o, modules: l } = e,
        { message: i } = e;
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        n.createElement(
          Bl,
          {
            "aria-label": "Content is loading...",
            "aria-live": "polite",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": o * 100,
            "aria-valuetext": i,
            role: "progressbar",
            ...a,
          },
          n.createElement(
            Om,
            null,
            n.createElement(Rm, { style: { width: `${o * 100}%` } })
          ),
          n.createElement($l, null, i, o < 1 && n.createElement(Dm, { key: i }))
        )
      );
    }
    return n.createElement(_m, {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...a,
    });
  };
function Lm(e) {
  let t = {},
    r = e.split("&");
  for (let a = 0; a < r.length; a++) {
    let o = r[a].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var tu = (e, t, r = {}) => {
    let [a, o] = e.split("?"),
      l = o ? { ...Lm(o), ...r, id: t } : { ...r, id: t };
    return `${a}?${Object.entries(l)
      .map((i) => `${i[0]}=${i[1]}`)
      .join("&")}`;
  },
  Mm = _.pre`
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
  font-family: ${Qe.fonts.mono};
  font-size: ${Qe.size.s2 - 1}px;
`,
  Bm = ({ code: e, ...t }) =>
    n.createElement(Mm, { id: "clipboard-code", ...t }, e),
  ru = js,
  au = {};
Object.keys(js).forEach((e) => {
  au[e] = m.forwardRef((t, r) => m.createElement(e, { ...t, ref: r }));
});
const $m = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: xs,
      ActionBar: Jn,
      AddonPanel: wm,
      Badge: rf,
      Bar: xo,
      Blockquote: As,
      Button: qs,
      ClipboardCode: Bm,
      Code: fo,
      DL: Ss,
      Div: ws,
      DocumentWrapper: cf,
      ErrorFormatter: Vs,
      FlexBar: Oa,
      Form: Ie,
      H1: Cs,
      H2: mo,
      H3: go,
      H4: ks,
      H5: _s,
      H6: Os,
      HR: Rs,
      IconButton: Rt,
      IconButtonSkeleton: Xs,
      Icons: be,
      Img: Fs,
      LI: Ts,
      Link: gt,
      ListItem: yo,
      Loader: eu,
      OL: Ds,
      P: Ls,
      Placeholder: Zs,
      Pre: Ms,
      ResetWrapper: ho,
      ScrollArea: eo,
      Separator: wo,
      Spaced: gf,
      Span: Bs,
      StorybookIcon: Cm,
      StorybookLogo: Sm,
      Symbols: af,
      SyntaxHighlighter: Ca,
      TT: Ps,
      TabBar: Ao,
      TabButton: Br,
      TabWrapper: vm,
      Table: $s,
      Tabs: Ra,
      TabsState: Qs,
      TooltipLinkList: vo,
      TooltipMessage: Ys,
      TooltipNote: em,
      UL: Is,
      WithTooltip: Uf,
      WithTooltipPure: Gs,
      Zoom: Hs,
      codeCommon: ct,
      components: ru,
      createCopyToClipboardFunction: ns,
      getStoryHref: tu,
      icons: _r,
      interleaveSeparators: Em,
      nameSpaceClassNames: X,
      resetComponents: au,
      withReset: Q,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Pm = ju,
  Im = li,
  jm = qu,
  Pl = Uu,
  Nm = Xu;
function Zm(e, t, r, a) {
  if (!Pl(e)) return e;
  t = Im(t, e);
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = Nm(t[o]),
      c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
    if (o != i) {
      var d = u[s];
      (c = a ? a(d, s, u) : void 0),
        c === void 0 && (c = Pl(d) ? d : jm(t[o + 1]) ? [] : {});
    }
    Pm(u, s, c), (u = u[s]);
  }
  return e;
}
var Hm = Zm,
  Vm = Ju,
  zm = Hm,
  qm = li;
function Um(e, t, r) {
  for (var a = -1, o = t.length, l = {}; ++a < o; ) {
    var i = t[a],
      u = Vm(e, i);
    r(u, i) && zm(l, qm(i, e), u);
  }
  return l;
}
var Wm = Um,
  Gm = Wu,
  Ym = Qu,
  Km = Wm,
  Xm = Nu;
function Jm(e, t) {
  if (e == null) return {};
  var r = Gm(Xm(e), function (a) {
    return [a];
  });
  return (
    (t = Ym(t)),
    Km(e, r, function (a, o) {
      return t(a, o[0]);
    })
  );
}
var Qm = Jm;
const eg = $n(Qm);
function tg(e, t, r, a) {
  for (var o = e.length, l = r + (a ? 1 : -1); a ? l-- : ++l < o; )
    if (t(e[l], l, e)) return l;
  return -1;
}
var rg = tg;
function ag(e) {
  return e !== e;
}
var ng = ag;
function og(e, t, r) {
  for (var a = r - 1, o = e.length; ++a < o; ) if (e[a] === t) return a;
  return -1;
}
var lg = og,
  ig = rg,
  sg = ng,
  ug = lg;
function cg(e, t, r) {
  return t === t ? ug(e, t, r) : ig(e, sg, r);
}
var dg = cg,
  pg = dg;
function fg(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && pg(e, t, 0) > -1;
}
var mg = fg;
function gg(e, t, r) {
  for (var a = -1, o = e == null ? 0 : e.length; ++a < o; )
    if (r(t, e[a])) return !0;
  return !1;
}
var hg = gg,
  bg = Gu,
  yg = mg,
  vg = hg,
  Eg = Ku,
  xg = Zu,
  Ag = Yu,
  wg = 200;
function Sg(e, t, r) {
  var a = -1,
    o = yg,
    l = e.length,
    i = !0,
    u = [],
    s = u;
  if (r) (i = !1), (o = vg);
  else if (l >= wg) {
    var c = t ? null : xg(e);
    if (c) return Ag(c);
    (i = !1), (o = Eg), (s = new bg());
  } else s = t ? [] : u;
  e: for (; ++a < l; ) {
    var d = e[a],
      f = t ? t(d) : d;
    if (((d = r || d !== 0 ? d : 0), i && f === f)) {
      for (var p = s.length; p--; ) if (s[p] === f) continue e;
      t && s.push(f), u.push(d);
    } else o(s, f, r) || (s !== u && s.push(f), u.push(d));
  }
  return u;
}
var Cg = Sg,
  kg = Cg;
function _g(e) {
  return e && e.length ? kg(e) : [];
}
var Og = _g;
const Rg = $n(Og);
var Fg = Hu,
  Tg = 1,
  Dg = 4;
function Lg(e) {
  return Fg(e, Tg | Dg);
}
var Mg = Lg;
const Bg = $n(Mg);
var $g = Object.create,
  nu = Object.defineProperty,
  Pg = Object.getOwnPropertyDescriptor,
  ou = Object.getOwnPropertyNames,
  Ig = Object.getPrototypeOf,
  jg = Object.prototype.hasOwnProperty,
  Be = (e, t) =>
    function () {
      return t || (0, e[ou(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Ng = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of ou(t))
        !jg.call(e, o) &&
          o !== r &&
          nu(e, o, {
            get: () => t[o],
            enumerable: !(a = Pg(t, o)) || a.enumerable,
          });
    return e;
  },
  So = (e, t, r) => (
    (r = e != null ? $g(Ig(e)) : {}),
    Ng(
      t || !e || !e.__esModule
        ? nu(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Zg = [
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
  Hg = ["detail"];
function Vg(e) {
  const t = Zg.filter((r) => e[r] !== void 0).reduce(
    (r, a) => ({ ...r, [a]: e[a] }),
    {}
  );
  return (
    e instanceof CustomEvent &&
      Hg.filter((r) => e[r] !== void 0).forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
var lu = Be({
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
        var i = 42;
        a[o] = i;
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
          var s = Object.getOwnPropertyDescriptor(a, o);
          if (s.value !== i || s.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  iu = Be({
    "node_modules/has-symbols/index.js"(e, t) {
      var r = typeof Symbol < "u" && Symbol,
        a = lu();
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
  zg = Be({
    "node_modules/function-bind/implementation.js"(e, t) {
      var r = "Function.prototype.bind called on incompatible ",
        a = Array.prototype.slice,
        o = Object.prototype.toString,
        l = "[object Function]";
      t.exports = function (u) {
        var s = this;
        if (typeof s != "function" || o.call(s) !== l)
          throw new TypeError(r + s);
        for (
          var c = a.call(arguments, 1),
            d,
            f = function () {
              if (this instanceof d) {
                var x = s.apply(this, c.concat(a.call(arguments)));
                return Object(x) === x ? x : this;
              } else return s.apply(u, c.concat(a.call(arguments)));
            },
            p = Math.max(0, s.length - c.length),
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
          s.prototype)
        ) {
          var b = function () {};
          (b.prototype = s.prototype),
            (d.prototype = new b()),
            (b.prototype = null);
        }
        return d;
      };
    },
  }),
  Co = Be({
    "node_modules/function-bind/index.js"(e, t) {
      var r = zg();
      t.exports = Function.prototype.bind || r;
    },
  }),
  qg = Be({
    "node_modules/has/src/index.js"(e, t) {
      var r = Co();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  su = Be({
    "node_modules/get-intrinsic/index.js"(e, t) {
      var r,
        a = SyntaxError,
        o = Function,
        l = TypeError,
        i = function (L) {
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
      var s = function () {
          throw new l();
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, s;
              } catch {
                try {
                  return u(arguments, "callee").get;
                } catch {
                  return s;
                }
              }
            })()
          : s,
        d = iu()(),
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
          var I;
          if (T === "%AsyncFunction%") I = i("async function () {}");
          else if (T === "%GeneratorFunction%") I = i("function* () {}");
          else if (T === "%AsyncGeneratorFunction%")
            I = i("async function* () {}");
          else if (T === "%AsyncGenerator%") {
            var D = L("%AsyncGeneratorFunction%");
            D && (I = D.prototype);
          } else if (T === "%AsyncIteratorPrototype%") {
            var M = L("%AsyncGenerator%");
            M && (I = f(M.prototype));
          }
          return (h[T] = I), I;
        },
        x = {
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
        w = Co(),
        S = qg(),
        v = w.call(Function.call, Array.prototype.concat),
        E = w.call(Function.apply, Array.prototype.splice),
        y = w.call(Function.call, String.prototype.replace),
        A = w.call(Function.call, String.prototype.slice),
        k = w.call(Function.call, RegExp.prototype.exec),
        C =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        R = function (T) {
          var I = A(T, 0, 1),
            D = A(T, -1);
          if (I === "%" && D !== "%")
            throw new a("invalid intrinsic syntax, expected closing `%`");
          if (D === "%" && I !== "%")
            throw new a("invalid intrinsic syntax, expected opening `%`");
          var M = [];
          return (
            y(T, C, function (N, V, $, Z) {
              M[M.length] = $ ? y(Z, O, "$1") : V || N;
            }),
            M
          );
        },
        F = function (T, I) {
          var D = T,
            M;
          if ((S(x, D) && ((M = x[D]), (D = "%" + M[0] + "%")), S(h, D))) {
            var N = h[D];
            if ((N === p && (N = b(D)), typeof N > "u" && !I))
              throw new l(
                "intrinsic " +
                  T +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: M, name: D, value: N };
          }
          throw new a("intrinsic " + T + " does not exist!");
        };
      t.exports = function (T, I) {
        if (typeof T != "string" || T.length === 0)
          throw new l("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof I != "boolean")
          throw new l('"allowMissing" argument must be a boolean');
        if (k(/^%?[^%]*%?$/, T) === null)
          throw new a(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var D = R(T),
          M = D.length > 0 ? D[0] : "",
          N = F("%" + M + "%", I),
          V = N.name,
          $ = N.value,
          Z = !1,
          Y = N.alias;
        Y && ((M = Y[0]), E(D, v([0, 1], Y)));
        for (var ee = 1, G = !0; ee < D.length; ee += 1) {
          var K = D[ee],
            P = A(K, 0, 1),
            z = A(K, -1);
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
            ((K === "constructor" || !G) && (Z = !0),
            (M += "." + K),
            (V = "%" + M + "%"),
            S(h, V))
          )
            $ = h[V];
          else if ($ != null) {
            if (!(K in $)) {
              if (!I)
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
            } else (G = S($, K)), ($ = $[K]);
            G && !Z && (h[V] = $);
          }
        }
        return $;
      };
    },
  }),
  Ug = Be({
    "node_modules/call-bind/index.js"(e, t) {
      var r = Co(),
        a = su(),
        o = a("%Function.prototype.apply%"),
        l = a("%Function.prototype.call%"),
        i = a("%Reflect.apply%", !0) || r.call(l, o),
        u = a("%Object.getOwnPropertyDescriptor%", !0),
        s = a("%Object.defineProperty%", !0),
        c = a("%Math.max%");
      if (s)
        try {
          s({}, "a", { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (p) {
        var g = i(r, l, arguments);
        if (u && s) {
          var h = u(g, "length");
          h.configurable &&
            s(g, "length", {
              value: 1 + c(0, p.length - (arguments.length - 1)),
            });
        }
        return g;
      };
      var d = function () {
        return i(r, o, arguments);
      };
      s ? s(t.exports, "apply", { value: d }) : (t.exports.apply = d);
    },
  }),
  Wg = Be({
    "node_modules/call-bind/callBound.js"(e, t) {
      var r = su(),
        a = Ug(),
        o = a(r("String.prototype.indexOf"));
      t.exports = function (i, u) {
        var s = r(i, !!u);
        return typeof s == "function" && o(i, ".prototype.") > -1 ? a(s) : s;
      };
    },
  }),
  Gg = Be({
    "node_modules/has-tostringtag/shams.js"(e, t) {
      var r = lu();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  Yg = Be({
    "node_modules/is-regex/index.js"(e, t) {
      var r = Wg(),
        a = Gg()(),
        o,
        l,
        i,
        u;
      a &&
        ((o = r("Object.prototype.hasOwnProperty")),
        (l = r("RegExp.prototype.exec")),
        (i = {}),
        (s = function () {
          throw i;
        }),
        (u = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
      var s,
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
            } catch (x) {
              return x === i;
            }
          }
        : function (g) {
            return !g || (typeof g != "object" && typeof g != "function")
              ? !1
              : c(g) === f;
          };
    },
  }),
  Kg = Be({
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
  Xg = Be({
    "node_modules/is-symbol/index.js"(e, t) {
      var r = Object.prototype.toString,
        a = iu()();
      a
        ? ((o = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != "symbol" ? !1 : l.test(o.call(s));
          }),
          (t.exports = function (s) {
            if (typeof s == "symbol") return !0;
            if (r.call(s) !== "[object Symbol]") return !1;
            try {
              return i(s);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (s) {
            return !1;
          });
      var o, l, i;
    },
  }),
  Jg = So(Yg()),
  Qg = So(Kg()),
  eh = So(Xg());
function th(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var rh =
    typeof global == "object" && global && global.Object === Object && global,
  ah = rh,
  nh = typeof self == "object" && self && self.Object === Object && self,
  oh = ah || nh || Function("return this")(),
  ko = oh,
  lh = ko.Symbol,
  Jt = lh,
  uu = Object.prototype,
  ih = uu.hasOwnProperty,
  sh = uu.toString,
  dr = Jt ? Jt.toStringTag : void 0;
function uh(e) {
  var t = ih.call(e, dr),
    r = e[dr];
  try {
    e[dr] = void 0;
    var a = !0;
  } catch {}
  var o = sh.call(e);
  return a && (t ? (e[dr] = r) : delete e[dr]), o;
}
var ch = uh,
  dh = Object.prototype,
  ph = dh.toString;
function fh(e) {
  return ph.call(e);
}
var mh = fh,
  gh = "[object Null]",
  hh = "[object Undefined]",
  Il = Jt ? Jt.toStringTag : void 0;
function bh(e) {
  return e == null
    ? e === void 0
      ? hh
      : gh
    : Il && Il in Object(e)
    ? ch(e)
    : mh(e);
}
var yh = bh,
  jl = Jt ? Jt.prototype : void 0;
jl && jl.toString;
function vh(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cu = vh,
  Eh = "[object AsyncFunction]",
  xh = "[object Function]",
  Ah = "[object GeneratorFunction]",
  wh = "[object Proxy]";
function Sh(e) {
  if (!cu(e)) return !1;
  var t = yh(e);
  return t == xh || t == Ah || t == Eh || t == wh;
}
var Ch = Sh,
  kh = ko["__core-js_shared__"],
  Xa = kh,
  Nl = (function () {
    var e = /[^.]+$/.exec((Xa && Xa.keys && Xa.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function _h(e) {
  return !!Nl && Nl in e;
}
var Oh = _h,
  Rh = Function.prototype,
  Fh = Rh.toString;
function Th(e) {
  if (e != null) {
    try {
      return Fh.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Dh = Th,
  Lh = /[\\^$.*+?()[\]{}|]/g,
  Mh = /^\[object .+?Constructor\]$/,
  Bh = Function.prototype,
  $h = Object.prototype,
  Ph = Bh.toString,
  Ih = $h.hasOwnProperty,
  jh = RegExp(
    "^" +
      Ph.call(Ih)
        .replace(Lh, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function Nh(e) {
  if (!cu(e) || Oh(e)) return !1;
  var t = Ch(e) ? jh : Mh;
  return t.test(Dh(e));
}
var Zh = Nh;
function Hh(e, t) {
  return e == null ? void 0 : e[t];
}
var Vh = Hh;
function zh(e, t) {
  var r = Vh(e, t);
  return Zh(r) ? r : void 0;
}
var du = zh;
function qh(e, t) {
  return e === t || (e !== e && t !== t);
}
var Uh = qh,
  Wh = du(Object, "create"),
  Or = Wh;
function Gh() {
  (this.__data__ = Or ? Or(null) : {}), (this.size = 0);
}
var Yh = Gh;
function Kh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Xh = Kh,
  Jh = "__lodash_hash_undefined__",
  Qh = Object.prototype,
  eb = Qh.hasOwnProperty;
function tb(e) {
  var t = this.__data__;
  if (Or) {
    var r = t[e];
    return r === Jh ? void 0 : r;
  }
  return eb.call(t, e) ? t[e] : void 0;
}
var rb = tb,
  ab = Object.prototype,
  nb = ab.hasOwnProperty;
function ob(e) {
  var t = this.__data__;
  return Or ? t[e] !== void 0 : nb.call(t, e);
}
var lb = ob,
  ib = "__lodash_hash_undefined__";
function sb(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = Or && t === void 0 ? ib : t),
    this
  );
}
var ub = sb;
function rr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
rr.prototype.clear = Yh;
rr.prototype.delete = Xh;
rr.prototype.get = rb;
rr.prototype.has = lb;
rr.prototype.set = ub;
var Zl = rr;
function cb() {
  (this.__data__ = []), (this.size = 0);
}
var db = cb;
function pb(e, t) {
  for (var r = e.length; r--; ) if (Uh(e[r][0], t)) return r;
  return -1;
}
var Fa = pb,
  fb = Array.prototype,
  mb = fb.splice;
function gb(e) {
  var t = this.__data__,
    r = Fa(t, e);
  if (r < 0) return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : mb.call(t, r, 1), --this.size, !0;
}
var hb = gb;
function bb(e) {
  var t = this.__data__,
    r = Fa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var yb = bb;
function vb(e) {
  return Fa(this.__data__, e) > -1;
}
var Eb = vb;
function xb(e, t) {
  var r = this.__data__,
    a = Fa(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
}
var Ab = xb;
function ar(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ar.prototype.clear = db;
ar.prototype.delete = hb;
ar.prototype.get = yb;
ar.prototype.has = Eb;
ar.prototype.set = Ab;
var wb = ar,
  Sb = du(ko, "Map"),
  Cb = Sb;
function kb() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Zl(),
      map: new (Cb || wb)(),
      string: new Zl(),
    });
}
var _b = kb;
function Ob(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var Rb = Ob;
function Fb(e, t) {
  var r = e.__data__;
  return Rb(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ta = Fb;
function Tb(e) {
  var t = Ta(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var Db = Tb;
function Lb(e) {
  return Ta(this, e).get(e);
}
var Mb = Lb;
function Bb(e) {
  return Ta(this, e).has(e);
}
var $b = Bb;
function Pb(e, t) {
  var r = Ta(this, e),
    a = r.size;
  return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
}
var Ib = Pb;
function nr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
nr.prototype.clear = _b;
nr.prototype.delete = Db;
nr.prototype.get = Mb;
nr.prototype.has = $b;
nr.prototype.set = Ib;
var pu = nr,
  jb = "Expected a function";
function _o(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(jb);
  var r = function () {
    var a = arguments,
      o = t ? t.apply(this, a) : a[0],
      l = r.cache;
    if (l.has(o)) return l.get(o);
    var i = e.apply(this, a);
    return (r.cache = l.set(o, i) || l), i;
  };
  return (r.cache = new (_o.Cache || pu)()), r;
}
_o.Cache = pu;
var Nb = _o,
  Zb = 500;
function Hb(e) {
  var t = Nb(e, function (a) {
      return r.size === Zb && r.clear(), a;
    }),
    r = t.cache;
  return t;
}
var Vb = Hb,
  zb =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  qb = /\\(\\)?/g;
Vb(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(""),
    e.replace(zb, function (r, a, o, l) {
      t.push(o ? l.replace(qb, "$1") : a || r);
    }),
    t
  );
});
var Ub = th,
  Wb = (e) => {
    let t = null,
      r = !1,
      a = !1,
      o = !1,
      l = "";
    if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !a && !o
          ? e[i] === '"' || e[i] === "'" || e[i] === "`"
            ? (t = e[i])
            : e[i] === "/" && e[i + 1] === "*"
            ? (r = !0)
            : e[i] === "/" && e[i + 1] === "/"
            ? (a = !0)
            : e[i] === "/" && e[i + 1] !== "/" && (o = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== "\\") ||
                (e[i] ===
                  `
` &&
                  t !== "`")) &&
              (t = null),
            o &&
              ((e[i] === "/" && e[i - 1] !== "\\") ||
                e[i] ===
                  `
`) &&
              (o = !1),
            r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1),
            a &&
              e[i] ===
                `
` &&
              (a = !1)),
          !r && !a && (l += e[i]);
    else l = e;
    return l;
  },
  Gb = Dt(1e4)((e) => Wb(e).replace(/\n\s*/g, "").trim()),
  Yb = function (t, r) {
    const a = r.slice(0, r.indexOf("{")),
      o = r.slice(r.indexOf("{"));
    if (a.includes("=>") || a.includes("function")) return r;
    let l = a;
    return (l = l.replace(t, "function")), l + o;
  },
  Kb = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function fu(e) {
  if (!Ub(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < "u" && e instanceof Event && ((t = Vg(t)), (r = !0)),
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
var Xb = function (t) {
    let r, a, o, l;
    return function (u, s) {
      try {
        if (u === "")
          return (
            (l = []), (r = new Map([[s, "[]"]])), (a = new Map()), (o = []), s
          );
        const c = a.get(this) || this;
        for (; o.length && c !== o[0]; ) o.shift(), l.pop();
        if (typeof s == "boolean") return s;
        if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
        if (s === null) return null;
        if (typeof s == "number")
          return s === -1 / 0
            ? "_-Infinity_"
            : s === 1 / 0
            ? "_Infinity_"
            : Number.isNaN(s)
            ? "_NaN_"
            : s;
        if (typeof s == "bigint") return `_bigint_${s.toString()}`;
        if (typeof s == "string")
          return Kb.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
        if ((0, Jg.default)(s))
          return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
        if ((0, Qg.default)(s)) {
          if (!t.allowFunction) return;
          const { name: f } = s,
            p = s.toString();
          return p.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${f}|${(() => {}).toString()}`
            : `_function_${f}|${Gb(Yb(u, p))}`;
        }
        if ((0, eh.default)(s)) {
          if (!t.allowSymbol) return;
          const f = Symbol.keyFor(s);
          return f !== void 0
            ? `_gsymbol_${f}`
            : `_symbol_${s.toString().slice(7, -1)}`;
        }
        if (o.length >= t.maxDepth)
          return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
        if (s === this) return `_duplicate_${JSON.stringify(l)}`;
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? { cause: s.cause } : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              "_constructor-name_": s.constructor.name,
            },
          };
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== "Object" &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return;
        const d = r.get(s);
        if (!d) {
          const f = Array.isArray(s) ? s : fu(s);
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(f, { "_constructor-name_": s.constructor.name });
            } catch {}
          return (
            l.push(u),
            o.unshift(f),
            r.set(s, JSON.stringify(l)),
            s !== f && a.set(s, f),
            f
          );
        }
        return `_duplicate_${d}`;
      } catch {
        return;
      }
    };
  },
  Jb = {
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
  Qb = (e, t = {}) => {
    const r = { ...Jb, ...t };
    return JSON.stringify(fu(e), Xb(r), t.space);
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
 */ const { global: Fe } = __STORYBOOK_MODULE_GLOBAL__,
  { deprecate: ce, once: e3, logger: Oo } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: t3,
    composeConfigs: R7,
    Preview: F7,
    DocsContext: T7,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: Hl,
    UPDATE_STORY_ARGS: r3,
    RESET_STORY_ARGS: a3,
    GLOBALS_UPDATED: Vl,
    NAVIGATE_URL: n3,
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var o3 = _.div(Q, ({ theme: e }) => ({
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
  mu = (e) =>
    n.createElement(o3, { ...e, className: "docblock-emptyblock sb-unstyled" }),
  l3 = _(Ca)(({ theme: e }) => ({
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
  i3 = _.div(({ theme: e }) => ({
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
  qr = _.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: "60%",
    [`&:first-child${fn}`]: { margin: 0 },
  })),
  s3 = () =>
    n.createElement(
      i3,
      null,
      n.createElement(qr, null),
      n.createElement(qr, { style: { width: "80%" } }),
      n.createElement(qr, { style: { width: "30%" } }),
      n.createElement(qr, { style: { width: "80%" } })
    ),
  Ro = ({
    isLoading: e,
    error: t,
    language: r,
    code: a,
    dark: o,
    format: l,
    ...i
  }) => {
    if (e) return n.createElement(s3, null);
    if (t) return n.createElement(mu, null, t);
    let u = n.createElement(
      l3,
      {
        bordered: !0,
        copyable: !0,
        format: l,
        language: r,
        className: "docblock-source sb-unstyled",
        ...i,
      },
      a
    );
    if (typeof o > "u") return u;
    let s = o ? ln.dark : ln.light;
    return n.createElement(_i, { theme: pn(s) }, u);
  };
Ro.defaultProps = { format: !1 };
var ne = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  Fo = 600,
  u3 = _.h1(Q, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: "32px",
    [`@media (min-width: ${Fo}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: "36px",
      marginBottom: "16px",
    },
  })),
  c3 = _.h2(Q, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: "20px",
    borderBottom: "none",
    marginBottom: 15,
    [`@media (min-width: ${Fo}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: "28px",
      marginBottom: 24,
    },
    color: J(0.25, e.color.defaultText),
  })),
  d3 = _.div(({ theme: e }) => {
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
  }),
  p3 = _.div(({ theme: e }) => ({
    background: e.background.content,
    display: "flex",
    justifyContent: "center",
    padding: "4rem 20px",
    minHeight: "100vh",
    boxSizing: "border-box",
    gap: "3rem",
    [`@media (min-width: ${Fo}px)`]: {},
  })),
  f3 = ({ children: e, toc: t }) =>
    n.createElement(
      p3,
      { className: "sbdocs sbdocs-wrapper" },
      n.createElement(d3, { className: "sbdocs sbdocs-content" }, e),
      t
    ),
  Da = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    border: `1px solid ${e.appBorderColor}`,
  }),
  m3 = ({ zoom: e, resetZoom: t }) =>
    n.createElement(
      n.Fragment,
      null,
      n.createElement(
        Rt,
        {
          key: "zoomin",
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: "Zoom in",
        },
        n.createElement(be, { icon: "zoom" })
      ),
      n.createElement(
        Rt,
        {
          key: "zoomout",
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: "Zoom out",
        },
        n.createElement(be, { icon: "zoomout" })
      ),
      n.createElement(
        Rt,
        {
          key: "zoomreset",
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: "Reset zoom",
        },
        n.createElement(be, { icon: "zoomreset" })
      )
    ),
  g3 = _(Oa)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    transition: "transform .2s linear",
  }),
  h3 = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: a,
    resetZoom: o,
    ...l
  }) =>
    n.createElement(
      g3,
      { ...l },
      n.createElement(
        m.Fragment,
        { key: "left" },
        e
          ? [1, 2, 3].map((i) => n.createElement(Xs, { key: i }))
          : n.createElement(m3, { zoom: a, resetZoom: o })
      )
    ),
  gu = m.createContext({ scale: 1 }),
  { window: b3 } = Fe,
  y3 = class extends m.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = b3.document.getElementById(e);
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
  { PREVIEW_URL: v3 } = Fe,
  E3 = v3 || "iframe.html",
  On = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
  x3 = (e) => {
    let t = m.useRef(),
      [r, a] = m.useState(!0),
      [o, l] = m.useState(),
      {
        story: i,
        height: u,
        autoplay: s,
        forceInitialArgs: c,
        renderStoryToElement: d,
      } = e;
    return (
      m.useEffect(() => {
        if (!(i && t.current)) return () => {};
        let f = t.current,
          p = d(
            i,
            f,
            {
              showMain: () => {},
              showError: ({ title: g, description: h }) =>
                l(new Error(`${g} - ${h}`)),
              showException: (g) => l(g),
            },
            { autoplay: s, forceInitialArgs: c }
          );
        return (
          a(!1),
          () => {
            Promise.resolve().then(() => p());
          }
        );
      }, [s, d, i]),
      o
        ? n.createElement("pre", null, n.createElement(Vs, { error: o }))
        : n.createElement(
            n.Fragment,
            null,
            u
              ? n.createElement(
                  "style",
                  null,
                  `#${On(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && n.createElement(To, null),
            n.createElement("div", {
              ref: t,
              id: `${On(e)}-inner`,
              "data-name": i.name,
            })
          )
    );
  },
  A3 = ({ story: e, height: t = "500px" }) =>
    n.createElement(
      "div",
      { style: { width: "100%", height: t } },
      n.createElement(gu.Consumer, null, ({ scale: r }) =>
        n.createElement(y3, {
          key: "iframe",
          id: `iframe--${e.id}`,
          title: e.name,
          src: tu(E3, e.id, { viewMode: "story" }),
          allowFullScreen: !0,
          scale: r,
          style: { width: "100%", height: "100%", border: "0 none" },
        })
      )
    ),
  w3 = (e) => {
    let { inline: t } = e;
    return n.createElement(
      "div",
      {
        id: On(e),
        className: "sb-story sb-unstyled",
        "data-story-block": "true",
      },
      t ? n.createElement(x3, { ...e }) : n.createElement(A3, { ...e })
    );
  },
  To = () => n.createElement(eu, null),
  S3 = _.div(
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
  zl = _(Ro)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: "none",
    background:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.85)"
        : Ge(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : Ge(0.05, e.background.content),
    },
  })),
  C3 = _.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: "relative",
      overflow: "hidden",
      margin: "25px 0 40px",
      ...Da(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      "h3 + &": { marginTop: "16px" },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  k3 = (e, t, r) => {
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
          source: n.createElement(zl, { ...e, dark: !0 }),
          actionItem: {
            title: "Hide code",
            className: "docblock-code-toggle docblock-code-toggle--expanded",
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: n.createElement(zl, { ...e, dark: !0 }),
          actionItem: {
            title: "Show code",
            className: "docblock-code-toggle",
            onClick: () => r(!0),
          },
        };
    }
  };
function _3(e) {
  if (m.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var O3 = _(h3)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
  R3 = _.div({ overflow: "hidden", position: "relative" }),
  Rn = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: a,
    withSource: o,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: c = "padded",
    ...d
  }) => {
    let [f, p] = m.useState(i),
      { source: g, actionItem: h } = k3(o, f, p),
      [b, x] = m.useState(1),
      w = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
      S = o ? [h] : [],
      [v, E] = m.useState(u ? [...u] : []),
      y = [...S, ...v],
      { window: A } = Fe,
      k = m.useCallback(async (O) => {
        let { createCopyToClipboardFunction: R } = await Ft(
          () => Promise.resolve().then(() => $m),
          void 0,
          import.meta.url
        );
        R();
      }, []),
      C = (O) => {
        let R = A.getSelection();
        (R && R.type === "Range") ||
          (O.preventDefault(),
          v.filter((F) => F.title === "Copied").length === 0 &&
            k(g.props.code).then(() => {
              E([...v, { title: "Copied", onClick: () => {} }]),
                A.setTimeout(
                  () => E(v.filter((F) => F.title !== "Copied")),
                  1500
                );
            }));
      };
    return n.createElement(
      C3,
      { withSource: o, withToolbar: l, ...d, className: w.join(" ") },
      l &&
        n.createElement(O3, {
          isLoading: e,
          border: !0,
          zoom: (O) => x(b * O),
          resetZoom: () => x(1),
          storyId: _3(a),
          baseUrl: "./iframe.html",
        }),
      n.createElement(
        gu.Provider,
        { value: { scale: b } },
        n.createElement(
          R3,
          { className: "docs-story", onCopyCapture: o && C },
          n.createElement(
            S3,
            { isColumn: t || !Array.isArray(a), columns: r, layout: c },
            n.createElement(
              Hs.Element,
              { scale: b },
              Array.isArray(a)
                ? a.map((O, R) => n.createElement("div", { key: R }, O))
                : n.createElement("div", null, a)
            )
          ),
          n.createElement(Jn, { actionItems: y })
        )
      ),
      o && f && g
    );
  },
  F3 = _(Rn)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })),
  T3 = () =>
    n.createElement(
      F3,
      { isLoading: !0, withToolbar: !0 },
      n.createElement(To, null)
    ),
  D3 = _.table(({ theme: e }) => ({
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
      code: ct({ theme: e }),
      div: { span: { fontWeight: "bold" } },
      "& code": {
        margin: 0,
        display: "inline-block",
        fontSize: e.typography.size.s1,
      },
    },
  })),
  L3 = ({ tags: e }) => {
    let t = (e.params || []).filter((l) => l.description),
      r = t.length !== 0,
      a = e.deprecated != null,
      o = e.returns != null && e.returns.description != null;
    return !r && !o && !a
      ? null
      : n.createElement(
          n.Fragment,
          null,
          n.createElement(
            D3,
            null,
            n.createElement(
              "tbody",
              null,
              a &&
                n.createElement(
                  "tr",
                  { key: "deprecated" },
                  n.createElement(
                    "td",
                    { colSpan: 2 },
                    n.createElement("strong", null, "Deprecated"),
                    ": ",
                    e.deprecated
                  )
                ),
              r &&
                t.map((l) =>
                  n.createElement(
                    "tr",
                    { key: l.name },
                    n.createElement(
                      "td",
                      null,
                      n.createElement("code", null, l.name)
                    ),
                    n.createElement("td", null, l.description)
                  )
                ),
              o &&
                n.createElement(
                  "tr",
                  { key: "returns" },
                  n.createElement(
                    "td",
                    null,
                    n.createElement("code", null, "Returns")
                  ),
                  n.createElement("td", null, e.returns.description)
                )
            )
          )
        );
  },
  Fn = 8,
  ql = _.div(({ isExpanded: e }) => ({
    display: "flex",
    flexDirection: e ? "column" : "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: "-4px",
    minWidth: 100,
  })),
  M3 = _.span(ct, ({ theme: e, simple: t = !1 }) => ({
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
  })),
  B3 = _.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: "4px",
    background: "none",
    border: "none",
  })),
  $3 = _.div(ct, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
  })),
  P3 = _.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: "content-box",
    "& code": { padding: "0 !important" },
  })),
  I3 = _(be)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  j3 = () => n.createElement("span", null, "-"),
  hu = ({ text: e, simple: t }) => n.createElement(M3, { simple: t }, e),
  N3 = Dt(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  }),
  Z3 = (e) => {
    if (!e) return [e];
    let t = e.split("|").map((r) => r.trim());
    return Rg(t);
  },
  Ul = (e, t = !0) => {
    let r = e;
    return (
      t || (r = e.slice(0, Fn)),
      r.map((a) => n.createElement(hu, { key: a, text: a === "" ? '""' : a }))
    );
  },
  H3 = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: a } = e,
      [o, l] = m.useState(!1),
      [i, u] = m.useState(t || !1);
    if (r == null) return null;
    let s = typeof r.toString == "function" ? r.toString() : r;
    if (a == null) {
      if (/[(){}[\]<>]/.test(s)) return n.createElement(hu, { text: s });
      let c = Z3(s),
        d = c.length;
      return d > Fn
        ? n.createElement(
            ql,
            { isExpanded: i },
            Ul(c, i),
            n.createElement(
              B3,
              { onClick: () => u(!i) },
              i ? "Show less..." : `Show ${d - Fn} more...`
            )
          )
        : n.createElement(ql, null, Ul(c));
    }
    return n.createElement(
      Gs,
      {
        closeOnOutsideClick: !0,
        placement: "bottom",
        visible: o,
        onVisibleChange: (c) => {
          l(c);
        },
        tooltip: n.createElement(
          P3,
          { width: N3(a) },
          n.createElement(Ca, { language: "jsx", format: !1 }, a)
        ),
      },
      n.createElement(
        $3,
        { className: "sbdocs-expandable" },
        n.createElement("span", null, s),
        n.createElement(I3, { icon: o ? "arrowup" : "arrowdown" })
      )
    );
  },
  Ja = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? n.createElement(j3, null)
      : n.createElement(H3, { value: e, initialExpandedArgs: t }),
  V3 = _.label(({ theme: e }) => ({
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
      "&:hover": { boxShadow: `${Nr(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      "&:active": {
        boxShadow: `${Nr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: Nr(1, e.appBorderColor),
      },
      "&:first-of-type": { paddingRight: 8 },
      "&:last-of-type": { paddingLeft: 8 },
    },
    "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === "light"
            ? `${Nr(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: "7px 15px",
      },
  })),
  z3 = (e) => e === "true",
  q3 = ({ name: e, value: t, onChange: r, onBlur: a, onFocus: o }) => {
    let l = m.useCallback(() => r(!1), [r]);
    if (t === void 0)
      return n.createElement(
        Ie.Button,
        { id: da(e), onClick: l },
        "Set boolean"
      );
    let i = je(e),
      u = typeof t == "string" ? z3(t) : t;
    return n.createElement(
      V3,
      { htmlFor: i, "aria-label": e },
      n.createElement("input", {
        id: i,
        type: "checkbox",
        onChange: (s) => r(s.target.checked),
        checked: u,
        role: "switch",
        name: e,
        onBlur: a,
        onFocus: o,
      }),
      n.createElement("span", { "aria-hidden": "true" }, "False"),
      n.createElement("span", { "aria-hidden": "true" }, "True")
    );
  },
  U3 = (e) => {
    let [t, r, a] = e.split("-"),
      o = new Date();
    return (
      o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(a, 10)), o
    );
  },
  W3 = (e) => {
    let [t, r] = e.split(":"),
      a = new Date();
    return a.setHours(parseInt(t, 10)), a.setMinutes(parseInt(r, 10)), a;
  },
  G3 = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      a = `0${t.getMonth() + 1}`.slice(-2),
      o = `0${t.getDate()}`.slice(-2);
    return `${r}-${a}-${o}`;
  },
  Y3 = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      a = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${a}`;
  },
  K3 = _.div(({ theme: e }) => ({
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
  })),
  X3 = ({ name: e, value: t, onChange: r, onFocus: a, onBlur: o }) => {
    let [l, i] = m.useState(!0),
      u = m.useRef(),
      s = m.useRef();
    m.useEffect(() => {
      l !== !1 &&
        (u && u.current && (u.current.value = G3(t)),
        s && s.current && (s.current.value = Y3(t)));
    }, [t]);
    let c = (p) => {
        let g = U3(p.target.value),
          h = new Date(t);
        h.setFullYear(g.getFullYear(), g.getMonth(), g.getDate());
        let b = h.getTime();
        b && r(b), i(!!b);
      },
      d = (p) => {
        let g = W3(p.target.value),
          h = new Date(t);
        h.setHours(g.getHours()), h.setMinutes(g.getMinutes());
        let b = h.getTime();
        b && r(b), i(!!b);
      },
      f = je(e);
    return n.createElement(
      K3,
      null,
      n.createElement(Ie.Input, {
        type: "date",
        max: "9999-12-31",
        ref: u,
        id: `${f}-date`,
        name: `${f}-date`,
        onChange: c,
        onFocus: a,
        onBlur: o,
      }),
      n.createElement(Ie.Input, {
        type: "time",
        id: `${f}-time`,
        name: `${f}-time`,
        ref: s,
        onChange: d,
        onFocus: a,
        onBlur: o,
      }),
      l ? null : n.createElement("div", null, "invalid")
    );
  },
  J3 = _.label({ display: "flex" }),
  Q3 = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  ey = ({
    name: e,
    value: t,
    onChange: r,
    min: a,
    max: o,
    step: l,
    onBlur: i,
    onFocus: u,
  }) => {
    let [s, c] = m.useState(typeof t == "number" ? t : ""),
      [d, f] = m.useState(!1),
      [p, g] = m.useState(null),
      h = m.useCallback(
        (w) => {
          c(w.target.value);
          let S = parseFloat(w.target.value);
          Number.isNaN(S)
            ? g(new Error(`'${w.target.value}' is not a number`))
            : (r(S), g(null));
        },
        [r, g]
      ),
      b = m.useCallback(() => {
        c("0"), r(0), f(!0);
      }, [f]),
      x = m.useRef(null);
    return (
      m.useEffect(() => {
        d && x.current && x.current.select();
      }, [d]),
      m.useEffect(() => {
        s !== (typeof t == "number" ? t : "") && c(t);
      }, [t]),
      !d && t === void 0
        ? n.createElement(Ie.Button, { id: da(e), onClick: b }, "Set number")
        : n.createElement(
            J3,
            null,
            n.createElement(Ie.Input, {
              ref: x,
              id: je(e),
              type: "number",
              onChange: h,
              size: "flex",
              placeholder: "Edit number...",
              value: s,
              valid: p ? "error" : null,
              autoFocus: d,
              name: e,
              min: a,
              max: o,
              step: l,
              onFocus: u,
              onBlur: i,
            })
          )
    );
  },
  bu = (e, t) => {
    let r = t && Object.entries(t).find(([a, o]) => o === e);
    return r ? r[0] : void 0;
  },
  Tn = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  yu = (e, t) => e && t && e.map((r) => t[r]),
  ty = _.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  ry = _.span({}),
  ay = _.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  Wl = ({ name: e, options: t, value: r, onChange: a, isInline: o }) => {
    if (!t)
      return (
        Oo.warn(`Checkbox with no options: ${e}`),
        n.createElement(n.Fragment, null, "-")
      );
    let l = Tn(r, t),
      [i, u] = m.useState(l),
      s = (d) => {
        let f = d.target.value,
          p = [...i];
        p.includes(f) ? p.splice(p.indexOf(f), 1) : p.push(f),
          a(yu(p, t)),
          u(p);
      };
    m.useEffect(() => {
      u(Tn(r, t));
    }, [r]);
    let c = je(e);
    return n.createElement(
      ty,
      { isInline: o },
      Object.keys(t).map((d, f) => {
        let p = `${c}-${f}`;
        return n.createElement(
          ay,
          { key: p, htmlFor: p },
          n.createElement("input", {
            type: "checkbox",
            id: p,
            name: p,
            value: d,
            onChange: s,
            checked: i == null ? void 0 : i.includes(d),
          }),
          n.createElement(ry, null, d)
        );
      })
    );
  },
  ny = _.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  oy = _.span({}),
  ly = _.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  Gl = ({ name: e, options: t, value: r, onChange: a, isInline: o }) => {
    if (!t)
      return (
        Oo.warn(`Radio with no options: ${e}`),
        n.createElement(n.Fragment, null, "-")
      );
    let l = bu(r, t),
      i = je(e);
    return n.createElement(
      ny,
      { isInline: o },
      Object.keys(t).map((u, s) => {
        let c = `${i}-${s}`;
        return n.createElement(
          ly,
          { key: c, htmlFor: c },
          n.createElement("input", {
            type: "radio",
            id: c,
            name: c,
            value: u,
            onChange: (d) => a(t[d.currentTarget.value]),
            checked: u === l,
          }),
          n.createElement(oy, null, u)
        );
      })
    );
  },
  iy = {
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
  vu = _.select(iy, ({ theme: e }) => ({
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
  })),
  Eu = _.span(({ theme: e }) => ({
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
  })),
  Yl = "Choose option...",
  sy = ({ name: e, value: t, options: r, onChange: a }) => {
    let o = (u) => {
        a(r[u.currentTarget.value]);
      },
      l = bu(t, r) || Yl,
      i = je(e);
    return n.createElement(
      Eu,
      null,
      n.createElement(be, { icon: "arrowdown" }),
      n.createElement(
        vu,
        { id: i, value: l, onChange: o },
        n.createElement("option", { key: "no-selection", disabled: !0 }, Yl),
        Object.keys(r).map((u) =>
          n.createElement("option", { key: u, value: u }, u)
        )
      )
    );
  },
  uy = ({ name: e, value: t, options: r, onChange: a }) => {
    let o = (u) => {
        let s = Array.from(u.currentTarget.options)
          .filter((c) => c.selected)
          .map((c) => c.value);
        a(yu(s, r));
      },
      l = Tn(t, r),
      i = je(e);
    return n.createElement(
      Eu,
      null,
      n.createElement(
        vu,
        { id: i, multiple: !0, value: l, onChange: o },
        Object.keys(r).map((u) =>
          n.createElement("option", { key: u, value: u }, u)
        )
      )
    );
  },
  Kl = (e) => {
    let { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? n.createElement(uy, { ...e })
        : n.createElement(sy, { ...e })
      : (Oo.warn(`Select with no options: ${t}`),
        n.createElement(n.Fragment, null, "-"));
  },
  cy = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, a) => ((r[(t == null ? void 0 : t[a]) || String(a)] = a), r),
          {}
        )
      : e,
  dy = {
    check: Wl,
    "inline-check": Wl,
    radio: Gl,
    "inline-radio": Gl,
    select: Kl,
    "multi-select": Kl,
  },
  jt = (e) => {
    let { type: t = "select", labels: r, argType: a } = e,
      o = {
        ...e,
        options: a ? cy(a.options, r) : {},
        isInline: t.includes("inline"),
        isMulti: t.includes("multi"),
      },
      l = dy[t];
    if (l) return n.createElement(l, { ...o });
    throw new Error(`Unknown options type: ${t}`);
  },
  Do = "value",
  py = "key",
  fy = "Error",
  my = "Object",
  gy = "Array",
  hy = "String",
  by = "Number",
  yy = "Boolean",
  vy = "Date",
  Ey = "Null",
  xy = "Undefined",
  Ay = "Function",
  wy = "Symbol",
  xu = "ADD_DELTA_TYPE",
  Au = "REMOVE_DELTA_TYPE",
  wu = "UPDATE_DELTA_TYPE";
function mt(e) {
  return e !== null &&
    typeof e == "object" &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(e).slice(8, -1);
}
function Su(e, t) {
  let r = mt(e),
    a = mt(t);
  return (r === "Function" || a === "Function") && a !== r;
}
var Lo = class extends m.Component {
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
      { inputRefKey: l, inputRefValue: i } = this.state,
      u = {};
    if (!t) {
      if (!l.value) return;
      u.key = l.value;
    }
    (u.newValue = r(!1, a, o, u.key, i.value)), e(u);
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
        deep: i,
      } = this.props,
      u = m.cloneElement(r, { onClick: this.onSubmit }),
      s = m.cloneElement(a, { onClick: e }),
      c = o(Do, l, i),
      d = m.cloneElement(c, { placeholder: "Value", ref: this.refInputValue }),
      f = null;
    if (!t) {
      let p = o(py, l, i);
      f = m.cloneElement(p, { placeholder: "Key", ref: this.refInputKey });
    }
    return n.createElement(
      "span",
      { className: "rejt-add-value-node" },
      f,
      d,
      s,
      u
    );
  }
};
Lo.defaultProps = {
  onlyValue: !1,
  addButtonElement: n.createElement("button", null, "+"),
  cancelButtonElement: n.createElement("button", null, "c"),
};
var Cu = class extends m.Component {
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
        i = a[e];
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: Au };
          a.splice(e, 1), this.setState({ data: a });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(o[o.length - 1], a), c(u);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: a } = this.state,
      { beforeAddAction: o, logger: l } = this.props;
    o(t.length, r, a, e)
      .then(() => {
        let i = [...t, e];
        this.setState({ data: i }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(r[r.length - 1], i),
          s({ type: xu, keyPath: r, deep: a, key: i.length - 1, newValue: e });
      })
      .catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, a) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      o(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], l),
            d({
              type: wu,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
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
        getStyle: i,
        dataType: u,
        minusMenuElement: s,
      } = this.props,
      { minus: c, collapsed: d } = i(e, t, r, a, u),
      f = l(e, t, r, a, u),
      p = m.cloneElement(s, {
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
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: p,
        cancelButtonElement: g,
        editButtonElement: h,
        inputElementGenerator: b,
        textareaElementGenerator: x,
        minusMenuElement: w,
        plusMenuElement: S,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: y,
        logger: A,
        onSubmitValueParser: k,
      } = this.props,
      { minus: C, plus: O, delimiter: R, ul: F, addForm: L } = d(e, t, r, a, f),
      T = c(e, t, r, a, f),
      I = m.cloneElement(S, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: O,
      }),
      D = m.cloneElement(w, {
        onClick: u,
        className: "rejt-minus-menu",
        style: C,
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
      !o && I,
      n.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: F },
        t.map(($, Z) =>
          n.createElement(La, {
            key: Z,
            name: Z.toString(),
            data: $,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: c,
            getStyle: d,
            addButtonElement: p,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: w,
            plusMenuElement: S,
            beforeRemoveAction: v,
            beforeAddAction: E,
            beforeUpdateAction: y,
            logger: A,
            onSubmitValueParser: k,
          })
        )
      ),
      !T &&
        o &&
        n.createElement(
          "div",
          { className: "rejt-add-form", style: L },
          n.createElement(Lo, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: M,
            addButtonElement: p,
            cancelButtonElement: g,
            inputElementGenerator: b,
            keyPath: r,
            deep: a,
            onSubmitValueParser: k,
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
      { dataType: l, getStyle: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, a, o, l);
    return n.createElement(
      "div",
      { className: "rejt-array-node" },
      n.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        n.createElement(
          "span",
          { className: "rejt-name", style: s.name },
          e,
          " :",
          " "
        )
      ),
      u
    );
  }
};
Cu.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: n.createElement("span", null, " - "),
  plusMenuElement: n.createElement("span", null, " + "),
};
var ku = class extends m.Component {
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
      { readOnly: i, dataType: u } = this.props,
      s = i(r, a, o, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
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
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = a(!0, o, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        Su(t, s) || this.handleCancelEdit();
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
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        textareaElementGenerator: p,
        minusMenuElement: g,
        keyPath: h,
      } = this.props,
      b = c(e, i, a, o, s),
      x = null,
      w = null,
      S = u(e, i, a, o, s);
    if (r && !S) {
      let v = p(Do, h, o, e, i, s),
        E = m.cloneElement(d, { onClick: this.handleEdit }),
        y = m.cloneElement(f, { onClick: this.handleCancelEdit }),
        A = m.cloneElement(v, { ref: this.refInput, defaultValue: i });
      (x = n.createElement(
        "span",
        { className: "rejt-edit-form", style: b.editForm },
        A,
        " ",
        y,
        E
      )),
        (w = null);
    } else {
      x = n.createElement(
        "span",
        {
          className: "rejt-value",
          style: b.value,
          onClick: S ? null : this.handleEditMode,
        },
        t
      );
      let v = m.cloneElement(g, {
        onClick: l,
        className: "rejt-minus-menu",
        style: b.minus,
      });
      w = S ? null : v;
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
      x,
      w
    );
  }
};
ku.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: n.createElement("button", null, "e"),
  cancelButtonElement: n.createElement("button", null, "c"),
  minusMenuElement: n.createElement("span", null, " - "),
};
var La = class extends m.Component {
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
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        addButtonElement: f,
        cancelButtonElement: p,
        editButtonElement: g,
        inputElementGenerator: h,
        textareaElementGenerator: b,
        minusMenuElement: x,
        plusMenuElement: w,
        beforeRemoveAction: S,
        beforeAddAction: v,
        beforeUpdateAction: E,
        logger: y,
        onSubmitValueParser: A,
      } = this.props,
      k = () => !0,
      C = mt(e);
    switch (C) {
      case fy:
        return n.createElement(Dn, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: k,
          dataType: C,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: w,
          beforeRemoveAction: S,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: A,
        });
      case my:
        return n.createElement(Dn, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: w,
          beforeRemoveAction: S,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: A,
        });
      case gy:
        return n.createElement(Cu, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: a,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: C,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: w,
          beforeRemoveAction: S,
          beforeAddAction: v,
          beforeUpdateAction: E,
          logger: y,
          onSubmitValueParser: A,
        });
      case hy:
        return n.createElement(pt, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case by:
        return n.createElement(pt, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case yy:
        return n.createElement(pt, {
          name: t,
          value: e ? "true" : "false",
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case vy:
        return n.createElement(pt, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case Ey:
        return n.createElement(pt, {
          name: t,
          value: "null",
          originalValue: "null",
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case xy:
        return n.createElement(pt, {
          name: t,
          value: "undefined",
          originalValue: "undefined",
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case Ay:
        return n.createElement(ku, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          textareaElementGenerator: b,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      case wy:
        return n.createElement(pt, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: a,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: C,
          getStyle: d,
          cancelButtonElement: p,
          editButtonElement: g,
          inputElementGenerator: h,
          minusMenuElement: x,
          logger: y,
          onSubmitValueParser: A,
        });
      default:
        return null;
    }
  }
};
La.defaultProps = { keyPath: [], deep: 0 };
var Dn = class extends m.Component {
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
      { beforeAddAction: l, logger: i } = this.props;
    l(e, a, o, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(a[a.length - 1], r),
          s({ type: xu, keyPath: a, deep: o, key: e, newValue: t });
      })
      .catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: a, keyPath: o, nextDeep: l } = this.state,
        i = a[e];
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: Au };
          delete a[e], this.setState({ data: a });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(o[o.length - 1], a), c(u);
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
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      o(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], l),
            d({
              type: wu,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
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
        dataType: i,
        getStyle: u,
        minusMenuElement: s,
      } = this.props,
      { minus: c, collapsed: d } = u(e, a, t, r, i),
      f = Object.getOwnPropertyNames(a),
      p = l(e, a, t, r, i),
      g = m.cloneElement(s, {
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
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: p,
        cancelButtonElement: g,
        editButtonElement: h,
        inputElementGenerator: b,
        textareaElementGenerator: x,
        minusMenuElement: w,
        plusMenuElement: S,
        beforeRemoveAction: v,
        beforeAddAction: E,
        beforeUpdateAction: y,
        logger: A,
        onSubmitValueParser: k,
      } = this.props,
      { minus: C, plus: O, addForm: R, ul: F, delimiter: L } = d(e, t, r, a, f),
      T = Object.getOwnPropertyNames(t),
      I = c(e, t, r, a, f),
      D = m.cloneElement(S, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: O,
      }),
      M = m.cloneElement(w, {
        onClick: u,
        className: "rejt-minus-menu",
        style: C,
      }),
      N = T.map((Z) =>
        n.createElement(La, {
          key: Z,
          name: Z,
          data: t[Z],
          keyPath: r,
          deep: o,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(Z),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: c,
          getStyle: d,
          addButtonElement: p,
          cancelButtonElement: g,
          editButtonElement: h,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: w,
          plusMenuElement: S,
          beforeRemoveAction: v,
          beforeAddAction: E,
          beforeUpdateAction: y,
          logger: A,
          onSubmitValueParser: k,
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
      !I && D,
      n.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: F },
        N
      ),
      !I &&
        l &&
        n.createElement(
          "div",
          { className: "rejt-add-form", style: R },
          n.createElement(Lo, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: p,
            cancelButtonElement: g,
            inputElementGenerator: b,
            keyPath: r,
            deep: a,
            onSubmitValueParser: k,
          })
        ),
      n.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: L },
        $
      ),
      !I && M
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: a, deep: o } = this.state,
      { getStyle: l, dataType: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, a, o, i);
    return n.createElement(
      "div",
      { className: "rejt-object-node" },
      n.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        n.createElement(
          "span",
          { className: "rejt-name", style: s.name },
          e,
          " :",
          " "
        )
      ),
      u
    );
  }
};
Dn.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: n.createElement("span", null, " - "),
  plusMenuElement: n.createElement("span", null, " + "),
};
var pt = class extends m.Component {
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
      { readOnly: i, dataType: u } = this.props,
      s = i(r, a, o, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
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
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = a(!0, o, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        Su(t, s) || this.handleCancelEdit();
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
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        inputElementGenerator: p,
        minusMenuElement: g,
        keyPath: h,
      } = this.props,
      b = c(e, i, a, o, s),
      x = u(e, i, a, o, s),
      w = r && !x,
      S = p(Do, h, o, e, i, s),
      v = m.cloneElement(d, { onClick: this.handleEdit }),
      E = m.cloneElement(f, { onClick: this.handleCancelEdit }),
      y = m.cloneElement(S, {
        ref: this.refInput,
        defaultValue: JSON.stringify(i),
      }),
      A = m.cloneElement(g, {
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
              onClick: x ? null : this.handleEditMode,
            },
            String(t)
          ),
      !x && !w && A
    );
  }
};
pt.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: n.createElement("button", null, "e"),
  cancelButtonElement: n.createElement("button", null, "c"),
  minusMenuElement: n.createElement("span", null, " - "),
};
var Sy = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  Cy = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  ky = {
    minus: { color: "red" },
    editForm: {},
    value: { color: "#7bba3d" },
    li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
    name: { color: "#2287CD" },
  };
function _y(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var _u = class extends m.Component {
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
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: f,
        plusMenuElement: p,
        beforeRemoveAction: g,
        beforeAddAction: h,
        beforeUpdateAction: b,
        logger: x,
        onSubmitValueParser: w,
        fallback: S = null,
      } = this.props,
      v = mt(e),
      E = o;
    mt(o) === "Boolean" && (E = () => o);
    let y = c;
    c && mt(c) !== "Function" && (y = () => c);
    let A = d;
    return (
      d && mt(d) !== "Function" && (A = () => d),
      v === "Object" || v === "Array"
        ? n.createElement(
            "div",
            { className: "rejt-tree" },
            n.createElement(La, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: a,
              readOnly: E,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: u,
              editButtonElement: s,
              inputElementGenerator: y,
              textareaElementGenerator: A,
              minusMenuElement: f,
              plusMenuElement: p,
              handleRemove: this.removeRoot,
              beforeRemoveAction: g,
              beforeAddAction: h,
              beforeUpdateAction: b,
              logger: x,
              onSubmitValueParser: w,
            })
          )
        : S
    );
  }
};
_u.defaultProps = {
  rootName: "root",
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, a, o) => {
    switch (o) {
      case "Object":
      case "Error":
        return Sy;
      case "Array":
        return Cy;
      default:
        return ky;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, a, o) => _y(o),
  inputElement: () => n.createElement("input", null),
  textareaElement: () => n.createElement("textarea", null),
  fallback: null,
};
var { window: Oy } = Fe,
  Ry = _.div(({ theme: e }) => ({
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
  })),
  Qa = _.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : "transparent",
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? "bold" : "normal",
    cursor: "pointer",
    order: t ? "initial" : 9,
  })),
  Xl = _(be)(({ theme: e, icon: t, disabled: r }) => ({
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
  })),
  Jl = _.input(({ theme: e, placeholder: t }) => ({
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
  })),
  Fy = _(Rt)(({ theme: e }) => ({
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
  })),
  Ty = _(Ie.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: "7px 6px",
    fontFamily: e.typography.fonts.mono,
    fontSize: "12px",
    lineHeight: "18px",
    "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
    "&:placeholder-shown": { padding: "7px 10px" },
  })),
  Dy = {
    bubbles: !0,
    cancelable: !0,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
  },
  Ly = (e) => {
    e.currentTarget.dispatchEvent(new Oy.KeyboardEvent("keydown", Dy));
  },
  My = (e) => {
    e.currentTarget.select();
  },
  By = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
    li: { outline: 0 },
  }),
  Ql = ({ name: e, value: t, onChange: r }) => {
    let a = Z0(),
      o = m.useMemo(() => t && Bg(t), [t]),
      l = o != null,
      [i, u] = m.useState(!l),
      [s, c] = m.useState(null),
      d = m.useCallback(
        (x) => {
          try {
            x && r(JSON.parse(x)), c(void 0);
          } catch (w) {
            c(w);
          }
        },
        [r]
      ),
      [f, p] = m.useState(!1),
      g = m.useCallback(() => {
        r({}), p(!0);
      }, [p]),
      h = m.useRef(null);
    if (
      (m.useEffect(() => {
        f && h.current && h.current.select();
      }, [f]),
      !l)
    )
      return n.createElement(
        Ie.Button,
        { id: da(e), onClick: g },
        "Set object"
      );
    let b = n.createElement(Ty, {
      ref: h,
      id: je(e),
      name: e,
      defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
      onBlur: (x) => d(x.target.value),
      placeholder: "Edit JSON string...",
      autoFocus: f,
      valid: s ? "error" : null,
    });
    return n.createElement(
      Ry,
      null,
      ["Object", "Array"].includes(mt(o)) &&
        n.createElement(
          Fy,
          {
            href: "#",
            onClick: (x) => {
              x.preventDefault(), u((w) => !w);
            },
          },
          n.createElement(be, { icon: i ? "eyeclose" : "eye" }),
          n.createElement("span", null, "RAW")
        ),
      i
        ? b
        : n.createElement(_u, {
            data: o,
            rootName: e,
            onFullyUpdate: r,
            getStyle: By(a),
            cancelButtonElement: n.createElement(
              Qa,
              { type: "button" },
              "Cancel"
            ),
            editButtonElement: n.createElement(Qa, { type: "submit" }, "Save"),
            addButtonElement: n.createElement(
              Qa,
              { type: "submit", primary: !0 },
              "Save"
            ),
            plusMenuElement: n.createElement(Xl, { icon: "add" }),
            minusMenuElement: n.createElement(Xl, { icon: "subtract" }),
            inputElement: (x, w, S, v) =>
              v
                ? n.createElement(Jl, { onFocus: My, onBlur: Ly })
                : n.createElement(Jl, null),
            fallback: b,
          })
    );
  },
  $y = _.input(({ theme: e, min: t, max: r, value: a }) => ({
    "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
    "&::-webkit-slider-runnable-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((a - t) / (r - t)) * 100
            }%, 
            ${Ge(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ge(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((a - t) / (r - t)) * 100
            }%, 
            ${At(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${At(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${It(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${It(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      appearance: "none",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${Ge(0.05, e.input.background)}`,
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
        borderColor: It(e.color.secondary, 0.4),
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
            ${Ge(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ge(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((a - t) / (r - t)) * 100
            }%, 
            ${At(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${At(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${It(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${It(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${Ge(0.05, e.input.background)}`,
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
            ${Ge(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${Ge(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((a - t) / (r - t)) * 100
            }%, 
            ${At(0.02, e.input.background)} ${((a - t) / (r - t)) * 100}%, 
            ${At(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${It(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: "grab",
      marginTop: 0,
    },
    "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
  })),
  Ou = _.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: "nowrap",
    fontFeatureSettings: "tnum",
    fontVariantNumeric: "tabular-nums",
  }),
  Py = _(Ou)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: "right",
    flexShrink: 0,
  })),
  Iy = _.div({ display: "flex", alignItems: "center", width: "100%" });
function jy(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var Ny = ({
    name: e,
    value: t,
    onChange: r,
    min: a = 0,
    max: o = 100,
    step: l = 1,
    onBlur: i,
    onFocus: u,
  }) => {
    let s = (f) => {
        r(Q3(f.target.value));
      },
      c = t !== void 0,
      d = m.useMemo(() => jy(l), [l]);
    return n.createElement(
      Iy,
      null,
      n.createElement(Ou, null, a),
      n.createElement($y, {
        id: je(e),
        type: "range",
        onChange: s,
        name: e,
        value: t,
        min: a,
        max: o,
        step: l,
        onFocus: u,
        onBlur: i,
      }),
      n.createElement(
        Py,
        { numberOFDecimalsPlaces: d, max: o },
        c ? t.toFixed(d) : "--",
        " / ",
        o
      )
    );
  },
  Zy = _.label({ display: "flex" }),
  Hy = _.div(({ isMaxed: e }) => ({
    marginLeft: "0.75rem",
    paddingTop: "0.35rem",
    color: e ? "red" : void 0,
  })),
  Vy = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: a,
    onBlur: o,
    maxLength: l,
  }) => {
    let i = (f) => {
        r(f.target.value);
      },
      [u, s] = m.useState(!1),
      c = m.useCallback(() => {
        r(""), s(!0);
      }, [s]);
    if (t === void 0)
      return n.createElement(
        Ie.Button,
        { id: da(e), onClick: c },
        "Set string"
      );
    let d = typeof t == "string";
    return n.createElement(
      Zy,
      null,
      n.createElement(Ie.Textarea, {
        id: je(e),
        maxLength: l,
        onChange: i,
        size: "flex",
        placeholder: "Edit string...",
        autoFocus: u,
        valid: d ? null : "error",
        name: e,
        value: d ? t : "",
        onFocus: a,
        onBlur: o,
      }),
      l &&
        n.createElement(
          Hy,
          { isMaxed: (t == null ? void 0 : t.length) === l },
          (t == null ? void 0 : t.length) ?? 0,
          " / ",
          l
        )
    );
  },
  zy = _(Ie.Input)({ padding: 10 });
function qy(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var Uy = ({ onChange: e, name: t, accept: r = "image/*", value: a }) => {
    let o = m.useRef(null);
    function l(i) {
      if (!i.target.files) return;
      let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
      e(u), qy(a);
    }
    return (
      m.useEffect(() => {
        a == null && o.current && (o.current.value = null);
      }, [a, t]),
      n.createElement(zy, {
        ref: o,
        id: je(t),
        type: "file",
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: "flex",
      })
    );
  },
  Wy = m.lazy(() =>
    Ft(
      () => import("./Color-6VNJS4EI-f7f29a22.js"),
      [
        "./Color-6VNJS4EI-f7f29a22.js",
        "./index-c013ead5.js",
        "./commonjsHelpers-725317a4.js",
        "./throttle-bc039b84.js",
        "./doctrine-744fe685.js",
        "./iframe-92f28330.js",
        "./index-1b89a1c6.js",
        "./isNativeReflectConstruct-81b4d0cb.js",
        "./index-169ee69c.js",
        "./index-11d98b33.js",
        "./index-cf0e44f3.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  Gy = (e) =>
    n.createElement(
      m.Suspense,
      { fallback: n.createElement("div", null) },
      n.createElement(Wy, { ...e })
    ),
  Yy = {
    array: Ql,
    object: Ql,
    boolean: q3,
    color: Gy,
    date: X3,
    number: ey,
    check: jt,
    "inline-check": jt,
    radio: jt,
    "inline-radio": jt,
    select: jt,
    "multi-select": jt,
    range: Ny,
    text: Vy,
    file: Uy,
  },
  ei = () => n.createElement(n.Fragment, null, "-"),
  Ky = ({ row: e, arg: t, updateArgs: r, isHovered: a }) => {
    let { key: o, control: l } = e,
      [i, u] = m.useState(!1),
      [s, c] = m.useState({ value: t });
    m.useEffect(() => {
      i || c({ value: t });
    }, [i, t]);
    let d = m.useCallback((b) => (c({ value: b }), r({ [o]: b }), b), [r, o]),
      f = m.useCallback(() => u(!1), []),
      p = m.useCallback(() => u(!0), []);
    if (!l || l.disable)
      return a
        ? n.createElement(
            gt,
            {
              href: "https://storybook.js.org/docs/react/essentials/controls",
              target: "_blank",
              withArrow: !0,
            },
            "Setup controls"
          )
        : n.createElement(ei, null);
    let g = {
        name: o,
        argType: e,
        value: s.value,
        onChange: d,
        onBlur: f,
        onFocus: p,
      },
      h = Yy[l.type] || ei;
    return n.createElement(h, { ...g, ...l, controlType: l.type });
  },
  Xy = _.span({ fontWeight: "bold" }),
  Jy = _.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: "help",
  })),
  Qy = _.div(({ theme: e }) => ({
    "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
    code: {
      ...ct({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    "& code": { margin: 0, display: "inline-block" },
    "& pre > code": { whiteSpace: "pre-wrap" },
  })),
  e4 = _.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? J(0.1, e.color.defaultText)
        : J(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  t4 = _.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? J(0.1, e.color.defaultText)
        : J(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  r4 = _.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? "40px !important" : "20px !important",
  })),
  Ur = (e) => {
    var b;
    let [t, r] = m.useState(!1),
      {
        row: a,
        updateArgs: o,
        compact: l,
        expandable: i,
        initialExpandedArgs: u,
      } = e,
      { name: s, description: c } = a,
      d = a.table || {},
      f = d.type || a.type,
      p = d.defaultValue || a.defaultValue,
      g = (b = a.type) == null ? void 0 : b.required,
      h = c != null && c !== "";
    return n.createElement(
      "tr",
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      n.createElement(
        r4,
        { expandable: i },
        n.createElement(Xy, null, s),
        g ? n.createElement(Jy, { title: "Required" }, "*") : null
      ),
      l
        ? null
        : n.createElement(
            "td",
            null,
            h && n.createElement(Qy, null, n.createElement(ai, null, c)),
            d.jsDocTags != null
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    t4,
                    { hasDescription: h },
                    n.createElement(Ja, { value: f, initialExpandedArgs: u })
                  ),
                  n.createElement(L3, { tags: d.jsDocTags })
                )
              : n.createElement(
                  e4,
                  { hasDescription: h },
                  n.createElement(Ja, { value: f, initialExpandedArgs: u })
                )
          ),
      l
        ? null
        : n.createElement(
            "td",
            null,
            n.createElement(Ja, { value: p, initialExpandedArgs: u })
          ),
      o
        ? n.createElement(
            "td",
            null,
            n.createElement(Ky, { ...e, isHovered: t })
          )
        : null
    );
  },
  a4 = _(be)(({ theme: e }) => ({
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
  })),
  n4 = _.span(({ theme: e }) => ({
    display: "flex",
    lineHeight: "20px",
    alignItems: "center",
  })),
  o4 = _.td(({ theme: e }) => ({
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
  })),
  l4 = _.td(({ theme: e }) => ({
    position: "relative",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  i4 = _.td(() => ({ position: "relative" })),
  s4 = _.tr(({ theme: e }) => ({
    "&:hover > td": {
      backgroundColor: `${At(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: "row-resize",
    },
  })),
  ti = _.button(() => ({
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
  })),
  en = ({
    level: e = "section",
    label: t,
    children: r,
    initialExpanded: a = !0,
    colSpan: o = 3,
  }) => {
    let [l, i] = m.useState(a),
      u = e === "subsection" ? l4 : o4,
      s = (r == null ? void 0 : r.length) || 0,
      c = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
      d = l ? "arrowdown" : "arrowright",
      f = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${
        s !== 1 ? "s" : ""
      }`;
    return n.createElement(
      n.Fragment,
      null,
      n.createElement(
        s4,
        { title: f },
        n.createElement(
          u,
          { colSpan: 1 },
          n.createElement(ti, { onClick: (p) => i(!l), tabIndex: 0 }, f),
          n.createElement(n4, null, n.createElement(a4, { icon: d }), t)
        ),
        n.createElement(
          i4,
          { colSpan: o - 1 },
          n.createElement(
            ti,
            { onClick: (p) => i(!l), tabIndex: -1, style: { outline: "none" } },
            f
          ),
          l ? null : c
        )
      ),
      l ? r : null
    );
  },
  Wr = _.div(({ theme: e }) => ({
    display: "flex",
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    "&:last-child": { borderBottom: 0 },
  })),
  pe = _.div(({ numColumn: e }) => ({
    display: "flex",
    flexDirection: "column",
    flex: e || 1,
    gap: 5,
    padding: "12px 20px",
  })),
  oe = _.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || "100%",
    height: r || 16,
    borderRadius: 3,
  })),
  fe = [2, 4, 2, 2],
  u4 = () =>
    n.createElement(
      n.Fragment,
      null,
      n.createElement(
        Wr,
        null,
        n.createElement(
          pe,
          { numColumn: fe[0] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[1] },
          n.createElement(oe, { width: "30%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[2] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[3] },
          n.createElement(oe, { width: "60%" })
        )
      ),
      n.createElement(
        Wr,
        null,
        n.createElement(
          pe,
          { numColumn: fe[0] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[1] },
          n.createElement(oe, { width: "80%" }),
          n.createElement(oe, { width: "30%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[2] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[3] },
          n.createElement(oe, { width: "60%" })
        )
      ),
      n.createElement(
        Wr,
        null,
        n.createElement(
          pe,
          { numColumn: fe[0] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[1] },
          n.createElement(oe, { width: "80%" }),
          n.createElement(oe, { width: "30%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[2] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[3] },
          n.createElement(oe, { width: "60%" })
        )
      ),
      n.createElement(
        Wr,
        null,
        n.createElement(
          pe,
          { numColumn: fe[0] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[1] },
          n.createElement(oe, { width: "80%" }),
          n.createElement(oe, { width: "30%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[2] },
          n.createElement(oe, { width: "60%" })
        ),
        n.createElement(
          pe,
          { numColumn: fe[3] },
          n.createElement(oe, { width: "60%" })
        )
      )
    ),
  c4 = _.div(({ inAddonPanel: e, theme: t }) => ({
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
  })),
  d4 = _.div({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    maxWidth: 415,
  }),
  p4 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textColor,
  })),
  f4 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textMutedColor,
  })),
  m4 = _.div(({ theme: e }) => ({
    display: "flex",
    fontSize: e.typography.size.s2 - 1,
    gap: 25,
  })),
  g4 = _.div(({ theme: e }) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  })),
  h4 = ({ inAddonPanel: e }) => {
    let [t, r] = m.useState(!0);
    return (
      m.useEffect(() => {
        let a = setTimeout(() => {
          r(!1);
        }, 100);
        return () => clearTimeout(a);
      }, []),
      t
        ? null
        : n.createElement(
            c4,
            { inAddonPanel: e },
            n.createElement(
              d4,
              null,
              n.createElement(
                p4,
                null,
                e
                  ? "Interactive story playground"
                  : "Args table with interactive controls couldn't be auto-generated"
              ),
              n.createElement(
                f4,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            n.createElement(
              m4,
              null,
              e &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    gt,
                    {
                      href: "https://youtu.be/0gOfS6K0x0E",
                      target: "_blank",
                      withArrow: !0,
                    },
                    n.createElement(be, { icon: "video" }),
                    " Watch 5m video"
                  ),
                  n.createElement(g4, null),
                  n.createElement(
                    gt,
                    {
                      href: "https://storybook.js.org/docs/react/essentials/controls",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Read docs"
                  )
                ),
              !e &&
                n.createElement(
                  gt,
                  {
                    href: "https://storybook.js.org/docs/react/essentials/controls",
                    target: "_blank",
                    withArrow: !0,
                  },
                  "Learn how to set that up"
                )
            )
          )
    );
  },
  b4 = _.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
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
  })),
  y4 = _(Rt)(({ theme: e }) => ({
    color: e.barTextColor,
    margin: "-4px -12px -4px 0",
  })),
  v4 = _.span({ display: "flex", justifyContent: "space-between" }),
  E4 = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, a;
      return (
        +!!((r = t.type) != null && r.required) -
          +!!((a = e.type) != null && a.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0,
  },
  x4 = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([l, i]) => {
      let { category: u, subcategory: s } =
        (i == null ? void 0 : i.table) || {};
      if (u) {
        let c = r.sections[u] || { ungrouped: [], subsections: {} };
        if (!s) c.ungrouped.push({ key: l, ...i });
        else {
          let d = c.subsections[s] || [];
          d.push({ key: l, ...i }), (c.subsections[s] = d);
        }
        r.sections[u] = c;
      } else if (s) {
        let c = r.ungroupedSubsections[s] || [];
        c.push({ key: l, ...i }), (r.ungroupedSubsections[s] = c);
      } else r.ungrouped.push({ key: l, ...i });
    });
    let a = E4[t],
      o = (l) =>
        a
          ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(a) }), {})
          : l;
    return {
      ungrouped: r.ungrouped.sort(a),
      ungroupedSubsections: o(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: {
            ungrouped: r.sections[i].ungrouped.sort(a),
            subsections: o(r.sections[i].subsections),
          },
        }),
        {}
      ),
    };
  },
  A4 = (e, t, r) => {
    try {
      return zu(e, t, r);
    } catch (a) {
      return e3.warn(a.message), !1;
    }
  },
  w4 = (e) => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: a,
      inAddonPanel: o,
      initialExpandedArgs: l,
      sort: i = "none",
      isLoading: u,
    } = e;
    if ("error" in e) {
      let { error: S } = e;
      return n.createElement(
        mu,
        null,
        S,
        " ",
        n.createElement(
          gt,
          {
            href: "http://storybook.js.org/docs/",
            target: "_blank",
            withArrow: !0,
          },
          "Read the docs"
        )
      );
    }
    if (u) return n.createElement(u4, null);
    let { rows: s, args: c, globals: d } = "rows" in e && e,
      f = x4(
        eg(s, (S) => {
          var v;
          return (
            !((v = S == null ? void 0 : S.table) != null && v.disable) &&
            A4(S, c || {}, d || {})
          );
        }),
        i
      ),
      p = f.ungrouped.length === 0,
      g = Object.entries(f.sections).length === 0,
      h = Object.entries(f.ungroupedSubsections).length === 0;
    if (p && g && h) return n.createElement(h4, { inAddonPanel: o });
    let b = 1;
    t && (b += 1), a || (b += 2);
    let x = Object.keys(f.sections).length > 0,
      w = {
        updateArgs: t,
        compact: a,
        inAddonPanel: o,
        initialExpandedArgs: l,
      };
    return n.createElement(
      ho,
      null,
      n.createElement(
        b4,
        {
          compact: a,
          inAddonPanel: o,
          className: "docblock-argstable sb-unstyled",
        },
        n.createElement(
          "thead",
          { className: "docblock-argstable-head" },
          n.createElement(
            "tr",
            null,
            n.createElement("th", null, n.createElement("span", null, "Name")),
            a
              ? null
              : n.createElement(
                  "th",
                  null,
                  n.createElement("span", null, "Description")
                ),
            a
              ? null
              : n.createElement(
                  "th",
                  null,
                  n.createElement("span", null, "Default")
                ),
            t
              ? n.createElement(
                  "th",
                  null,
                  n.createElement(
                    v4,
                    null,
                    "Control",
                    " ",
                    !u &&
                      r &&
                      n.createElement(
                        y4,
                        { onClick: () => r(), title: "Reset controls" },
                        n.createElement(be, { icon: "undo", "aria-hidden": !0 })
                      )
                  )
                )
              : null
          )
        ),
        n.createElement(
          "tbody",
          { className: "docblock-argstable-body" },
          f.ungrouped.map((S) =>
            n.createElement(Ur, {
              key: S.key,
              row: S,
              arg: c && c[S.key],
              ...w,
            })
          ),
          Object.entries(f.ungroupedSubsections).map(([S, v]) =>
            n.createElement(
              en,
              { key: S, label: S, level: "subsection", colSpan: b },
              v.map((E) =>
                n.createElement(Ur, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  expandable: x,
                  ...w,
                })
              )
            )
          ),
          Object.entries(f.sections).map(([S, v]) =>
            n.createElement(
              en,
              { key: S, label: S, level: "section", colSpan: b },
              v.ungrouped.map((E) =>
                n.createElement(Ur, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  ...w,
                })
              ),
              Object.entries(v.subsections).map(([E, y]) =>
                n.createElement(
                  en,
                  { key: E, label: E, level: "subsection", colSpan: b },
                  y.map((A) =>
                    n.createElement(Ur, {
                      key: A.key,
                      row: A,
                      arg: c && c[A.key],
                      expandable: x,
                      ...w,
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
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
  ...Da(e),
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
  ...Da(e),
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
  ...Da(e),
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
var S4 = (e) => `anchor--${e}`,
  Ru = ({ storyId: e, children: t }) =>
    n.createElement("div", { id: S4(e), className: "sb-anchor" }, t);
Fe &&
  Fe.__DOCS_CONTEXT__ === void 0 &&
  ((Fe.__DOCS_CONTEXT__ = m.createContext(null)),
  (Fe.__DOCS_CONTEXT__.displayName = "DocsContext"));
var we = Fe ? Fe.__DOCS_CONTEXT__ : m.createContext(null),
  $r = (e, t) => m.useContext(we).resolveOf(e, t);
function C4(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function k4(e, t) {
  let r = Mo([e], t);
  return r && r[0];
}
function Mo(e, t) {
  let [r, a] = m.useState({});
  return (
    m.useEffect(() => {
      Promise.all(
        e.map(async (o) => {
          let l = await t.loadStory(o);
          a((i) => (i[o] === l ? i : { ...i, [o]: l }));
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
function Fu(e) {
  return Qb(e);
}
var Tu = m.createContext({ sources: {} }),
  Du = "--unknown--",
  _4 = ({ children: e, channel: t }) => {
    let [r, a] = m.useState({});
    return (
      m.useEffect(() => {
        let o = (l, i = null, u = !1) => {
          let {
              id: s,
              args: c = void 0,
              source: d,
              format: f,
            } = typeof l == "string" ? { id: l, source: i, format: u } : l,
            p = c ? Fu(c) : Du;
          a((g) => ({ ...g, [s]: { ...g[s], [p]: { code: d, format: f } } }));
        };
        return t.on(Vo, o), () => t.off(Vo, o);
      }, []),
      n.createElement(Tu.Provider, { value: { sources: r } }, e)
    );
  },
  O4 = ((e) => (
    (e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e
  ))(O4 || {}),
  R4 = (e) => {
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
  F4 = (e, t, r) => {
    let { sources: a } = r,
      o = a == null ? void 0 : a[e];
    return (
      (o == null ? void 0 : o[Fu(t)]) ||
      (o == null ? void 0 : o[Du]) || { code: "" }
    );
  },
  T4 = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: a,
  }) => {
    var s, c, d, f, p, g;
    let { __isArgsStory: o } = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || $a.AUTO;
    if (l.code !== void 0) return l.code;
    let u =
      i === $a.DYNAMIC || (i === $a.AUTO && e && o)
        ? e
        : l.originalSource || "";
    return (
      l.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
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
  Lu = (e, t, r) => {
    var g, h, b;
    let a = e.ids || (e.id ? [e.id] : []),
      o = Mo(a, t),
      l = o,
      { of: i } = e;
    if ("of" in e && i === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (i) l = [t.resolveOf(i, ["story"]).story];
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
      { code: s } = e,
      c = e.format ?? u.format,
      d = e.language ?? u.language ?? "jsx",
      f = e.dark ?? u.dark ?? !1;
    s ||
      (s = l.map((x, w) => {
        var y, A;
        if (!x) return "";
        let S = t.getStoryContext(x),
          v = e.__forceInitialArgs ? S.initialArgs : S.unmappedArgs,
          E = F4(x.id, v, r);
        return (
          w === 0 &&
            (c =
              E.format ??
              ((A = (y = x.parameters.docs) == null ? void 0 : y.source) == null
                ? void 0
                : A.format) ??
              !1),
          T4({
            snippet: E.code,
            storyContext: { ...S, args: v },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    let p = R4(l);
    return s
      ? { code: s, format: c, language: d, dark: f, state: p }
      : { error: "Oh no! The source is not available.", state: p };
  },
  Mu = (e, t) => {
    let { id: r, of: a, meta: o, story: l } = e;
    if ("of" in e && a === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (r)
      return (
        ce(ve`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    let { name: i } = e;
    return i
      ? (ce(ve`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (l &&
          ce(ve`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        o && t.referenceMeta(o, !1),
        t.resolveOf(a || l || "story", ["story"]).story.id);
  },
  D4 = (e, t, r) => {
    let { parameters: a = {} } = t || {},
      { docs: o = {} } = a,
      l = o.story || {};
    if (o.disable) return null;
    let { inlineStories: i, iframeHeight: u } = o;
    typeof i < "u" &&
      ce(ve`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let s = e.inline ?? l.inline ?? i ?? !1;
    if (
      (typeof u < "u" &&
        ce(ve`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
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
  L4 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = m.useContext(we),
      r = Mu(e, t),
      a = k4(r, t);
    if (!a) return n.createElement(To, null);
    let o = D4(e, a, t);
    return o ? n.createElement(w3, { ...o }) : null;
  },
  M4 = (
    { withSource: e, mdxSource: t, children: r, layout: a, ...o },
    l,
    i
  ) => {
    let u = m.Children.toArray(r)
        .filter((p) => p.props && (p.props.id || p.props.name || p.props.of))
        .map((p) => Mu(p.props, l)),
      s = Mo(u, l),
      c = s.some((p) => !p),
      d = Lu(
        {
          ...(t ? { code: decodeURI(t) } : { ids: u }),
          ...(o.of && { of: o.of }),
        },
        l,
        i
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
      s.forEach((p) => {
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
  B4 = (e) => {
    var x, w, S, v, E, y, A, k, C, O;
    let t = m.useContext(we),
      r = m.useContext(Tu),
      { children: a, of: o, source: l } = e;
    if ("of" in e && o === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let { isLoading: i, previewProps: u } = M4(e, t, r),
      s,
      c,
      d;
    try {
      ({ story: s } = $r(o || "story", ["story"]));
    } catch (R) {
      a || (d = R);
    }
    try {
      c = Lu({ ...l, ...(o && { of: o }) }, t, r);
    } catch (R) {
      a || (d = R);
    }
    if (d) throw d;
    if (
      (e.withSource &&
        ce(ve`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        ce(ve`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        ce(ve`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      a)
    )
      return (
        ce(ve`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? n.createElement(T3, null) : n.createElement(Rn, { ...u }, a)
      );
    let f =
        e.layout ??
        s.parameters.layout ??
        ((w = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null
          ? void 0
          : w.layout) ??
        "padded",
      p =
        e.withToolbar ??
        ((v = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null
          ? void 0
          : v.withToolbar) ??
        !1,
      g =
        e.additionalActions ??
        ((y = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : y.additionalActions),
      h =
        e.sourceState ??
        ((k = (A = s.parameters.docs) == null ? void 0 : A.canvas) == null
          ? void 0
          : k.sourceState) ??
        "hidden",
      b =
        e.className ??
        ((O = (C = s.parameters.docs) == null ? void 0 : C.canvas) == null
          ? void 0
          : O.className);
    return n.createElement(
      Rn,
      {
        withSource: h === "none" ? void 0 : c,
        isExpanded: h === "shown",
        withToolbar: p,
        additionalActions: g,
        className: b,
        layout: f,
      },
      n.createElement(L4, { of: o || s.moduleExport, meta: e.meta, ...e.story })
    );
  },
  $4 = (e, t) => {
    let r = t.getStoryContext(e),
      [a, o] = m.useState(r.globals);
    return (
      m.useEffect(() => {
        let l = (i) => {
          o(i.globals);
        };
        return t.channel.on(Vl, l), () => t.channel.off(Vl, l);
      }, [t.channel]),
      [a]
    );
  },
  P4 = (e, t) => {
    let r = I4(e, t);
    if (!r) throw new Error("No result when story was defined");
    return r;
  },
  I4 = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: a } = e || { id: "none" },
      [o, l] = m.useState(r.args);
    m.useEffect(() => {
      let s = (c) => {
        c.storyId === a && l(c.args);
      };
      return t.channel.on(Hl, s), () => t.channel.off(Hl, s);
    }, [a, t.channel]);
    let i = m.useCallback(
        (s) => t.channel.emit(r3, { storyId: a, updatedArgs: s }),
        [a, t.channel]
      ),
      u = m.useCallback(
        (s) => t.channel.emit(a3, { storyId: a, argNames: s }),
        [a, t.channel]
      );
    return e && [o, i, u];
  },
  j4 = (e) => {
    var b;
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let r = m.useContext(we),
      { story: a } = r.resolveOf(t || "story", ["story"]),
      { parameters: o, argTypes: l } = a,
      i = ((b = o.docs) == null ? void 0 : b.controls) || {},
      u = e.include ?? i.include,
      s = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [d, f, p] = P4(a, r),
      [g] = $4(a, r),
      h = t3(l, u, s);
    return n.createElement(w4, {
      rows: h,
      args: d,
      globals: g,
      updateArgs: f,
      resetArgs: p,
      sort: c,
    });
  },
  { document: Bu } = Fe,
  N4 = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
      return n.createElement(fo, null, t);
    let a = e && e.split("-");
    return n.createElement(Ro, {
      language: (a && a[1]) || "plaintext",
      format: !1,
      code: t,
      ...r,
    });
  };
function Bo(e, t) {
  e.channel.emit(n3, t);
}
var Ln = ru.a,
  Z4 = ({ hash: e, children: t }) => {
    let r = m.useContext(we);
    return n.createElement(
      Ln,
      {
        href: e,
        target: "_self",
        onClick: (a) => {
          let o = e.substring(1);
          Bu.getElementById(o) && Bo(r, e);
        },
      },
      t
    );
  },
  H4 = (e) => {
    let { href: t, target: r, children: a, ...o } = e,
      l = m.useContext(we);
    if (t) {
      if (t.startsWith("#")) return n.createElement(Z4, { hash: t }, a);
      if (r !== "_blank" && !t.startsWith("https://"))
        return n.createElement(
          Ln,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                Bo(l, i.currentTarget.getAttribute("href")));
            },
            target: r,
            ...o,
          },
          a
        );
    }
    return n.createElement(Ln, { ...e });
  },
  $u = ["h1", "h2", "h3", "h4", "h5", "h6"],
  V4 = $u.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
        "&:hover svg": { visibility: "visible" },
      }),
    }),
    {}
  ),
  z4 = _.a(() => ({
    float: "left",
    lineHeight: "inherit",
    paddingRight: "10px",
    marginLeft: "-24px",
    color: "inherit",
  })),
  q4 = ({ as: e, id: t, children: r, ...a }) => {
    let o = m.useContext(we),
      l = V4[e],
      i = `#${t}`;
    return n.createElement(
      l,
      { id: t, ...a },
      n.createElement(
        z4,
        {
          "aria-hidden": "true",
          href: i,
          tabIndex: -1,
          target: "_self",
          onClick: (u) => {
            Bu.getElementById(t) && Bo(o, i);
          },
        },
        n.createElement(be, { icon: "link" })
      ),
      r
    );
  },
  $o = (e) => {
    let { as: t, id: r, children: a, ...o } = e;
    if (r) return n.createElement(q4, { as: t, id: r, ...o }, a);
    let l = t,
      { as: i, ...u } = e;
    return n.createElement(l, { ...X(u, t) });
  },
  U4 = $u.reduce(
    (e, t) => ({ ...e, [t]: (r) => n.createElement($o, { as: t, ...r }) }),
    {}
  ),
  W4 = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != "string")
      throw new Error(ve`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return n.createElement(ai, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: N4,
          a: H4,
          ...U4,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides),
        },
        ...(e == null ? void 0 : e.options),
      },
    });
  },
  G4 = ((e) => (
    (e.INFO = "info"),
    (e.NOTES = "notes"),
    (e.DOCGEN = "docgen"),
    (e.AUTO = "auto"),
    e
  ))(G4 || {}),
  ra =
    "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
  Y4 = (e) => e && (typeof e == "string" ? e : tn(e.markdown) || tn(e.text)),
  K4 = (e) => e && (typeof e == "string" ? e : tn(e.text)),
  X4 = (e) => null,
  J4 = (e) => {
    var t, r, a, o, l, i, u, s;
    switch (e.type) {
      case "story":
        return (
          ((r =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : r.story) || null
        );
      case "meta": {
        let { parameters: c, component: d } = e.preparedMeta;
        return (
          ((o = (a = c.docs) == null ? void 0 : a.description) == null
            ? void 0
            : o.component) ||
          ((i =
            (l = c.docs) == null ? void 0 : l.extractComponentDescription) ==
          null
            ? void 0
            : i.call(l, d, { component: d, parameters: c })) ||
          null
        );
      }
      case "component": {
        let {
          component: c,
          projectAnnotations: { parameters: d },
        } = e;
        return (
          ((s =
            (u = d.docs) == null ? void 0 : u.extractComponentDescription) ==
          null
            ? void 0
            : s.call(u, c, { component: c, parameters: d })) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        );
    }
  },
  Q4 = ({ type: e, markdown: t, children: r }, { storyById: a }) => {
    let { component: o, parameters: l } = a();
    if (r || t) return r || t;
    let { notes: i, info: u, docs: s } = l;
    (i || u) &&
      ce(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${ra}`
      );
    let { extractComponentDescription: c = X4, description: d } = s || {},
      f = d == null ? void 0 : d.component;
    if (f) return f;
    switch (e) {
      case "info":
        return K4(u);
      case "notes":
        return Y4(i);
      case "docgen":
      case "auto":
      default:
        return c(o, { component: o, ...l });
    }
  },
  Mn = (e) => {
    let { of: t, type: r, markdown: a, children: o } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let l = m.useContext(we),
      i = $r(t || "meta"),
      u;
    return (
      r || a || o ? (u = Q4(e, l)) : (u = J4(i)),
      r && ce(`Manually specifying description type is deprecated. See ${ra}`),
      a &&
        ce(
          `The 'markdown' prop on the Description block is deprecated. See ${ra}`
        ),
      o &&
        ce(
          `The 'children' prop on the Description block is deprecated. See ${ra}`
        ),
      u ? n.createElement(W4, null, u) : null
    );
  },
  e7 = _.div(({ theme: e }) => ({
    width: "10rem",
    "@media (max-width: 768px)": { display: "none" },
  })),
  t7 = _.div(({ theme: e }) => ({
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
  })),
  r7 = _.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: "0.875em",
    color: e.textColor,
    textTransform: "uppercase",
    marginBottom: 10,
  })),
  a7 = ({ title: e }) =>
    e === null ? null : typeof e == "string" ? n.createElement(r7, null, e) : e,
  n7 = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: a,
    ignoreSelector: o,
    unsafeTocbotOptions: l,
  }) => (
    m.useEffect(() => {
      let i = {
          tocSelector: ".toc-wrapper",
          contentSelector: a ?? ".sbdocs-content",
          headingSelector: r ?? "h3",
          ignoreSelector: o ?? ".skip-toc",
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...l,
        },
        u = setTimeout(() => Ho.init(i), 100);
      return () => {
        clearTimeout(u), Ho.destroy();
      };
    }, [t]),
    n.createElement(
      n.Fragment,
      null,
      n.createElement(
        e7,
        null,
        t
          ? null
          : n.createElement(
              t7,
              null,
              n.createElement(a7, { title: e || null }),
              n.createElement("div", { className: "toc-wrapper" })
            )
      )
    )
  ),
  { document: o7, window: l7 } = Fe,
  i7 = ({ context: e, theme: t, children: r }) => {
    var o, l, i, u, s;
    let a;
    try {
      a =
        (l =
          (o = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null
            ? void 0
            : o.docs) == null
          ? void 0
          : l.toc;
    } catch {
      a =
        (s =
          (u =
            (i = e == null ? void 0 : e.projectAnnotations) == null
              ? void 0
              : i.parameters) == null
            ? void 0
            : u.docs) == null
          ? void 0
          : s.toc;
    }
    return (
      m.useEffect(() => {
        let c;
        try {
          if (((c = new URL(l7.parent.location.toString())), c.hash)) {
            let d = o7.getElementById(c.hash.substring(1));
            d &&
              setTimeout(() => {
                C4(d);
              }, 200);
          }
        } catch {}
      }),
      n.createElement(
        we.Provider,
        { value: e },
        n.createElement(
          _4,
          { channel: e.channel },
          n.createElement(
            _i,
            { theme: w1(t) },
            n.createElement(
              f3,
              {
                toc: a
                  ? n.createElement(n7, {
                      className: "sbdocs sbdocs-toc--custom",
                      ...a,
                    })
                  : null,
              },
              r
            )
          )
        )
      )
    );
  },
  s7 = /\s*\/\s*/,
  u7 = (e) => {
    let t = e.trim().split(s7);
    return (t && t[t.length - 1]) || e;
  },
  c7 = ({ children: e }) => {
    let t = m.useContext(we),
      r = e || u7(t.storyById().title);
    return r
      ? n.createElement(u3, { className: "sbdocs-title sb-unstyled" }, r)
      : null;
  },
  d7 = ({ children: e }) => {
    var a;
    let t = m.useContext(we),
      r =
        e ||
        ((a = t.storyById().parameters) == null ? void 0 : a.componentSubtitle);
    return r
      ? n.createElement(c3, { className: "sbdocs-subtitle sb-unstyled" }, r)
      : null;
  },
  p7 = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != "string") return n.createElement(go, null, e);
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return n.createElement($o, { as: "h3", id: r }, e);
  },
  Pu = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: a = !1,
    __primary: o = !1,
  }) => {
    var u, s;
    let { story: l } = $r(e || "story", ["story"]),
      i =
        ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null
          ? void 0
          : s.withToolbar) ?? r;
    return n.createElement(
      Ru,
      { storyId: l.id },
      t &&
        n.createElement(
          n.Fragment,
          null,
          n.createElement(p7, null, l.name),
          n.createElement(Mn, { of: e })
        ),
      n.createElement(B4, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: a, __primary: o },
        source: { __forceInitialArgs: a },
      })
    );
  },
  f7 = (e) => {
    let { name: t, of: r } = e;
    if ("of" in e && r === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let a = m.useContext(we),
      o;
    if ((r && (o = $r(r || "meta", ["meta"]).csfFile.stories[0] || null), !o)) {
      let l = t && a.storyIdByName(t);
      o = a.storyById(l);
    }
    return (
      t &&
        ce(ve`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `),
      o
        ? n.createElement(Pu, {
            of: o.moduleExport,
            expanded: !1,
            __primary: !0,
            withToolbar: !0,
          })
        : null
    );
  },
  m7 = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != "string") return n.createElement(mo, null, e);
    let a = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return n.createElement($o, { as: "h2", id: a, ...r }, e);
  },
  g7 = _(m7)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: "16px",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: e.textMutedColor,
    border: 0,
    marginBottom: "12px",
    "&:first-of-type": { marginTop: "56px" },
  })),
  h7 = ({ title: e = "Stories", includePrimary: t = !0 }) => {
    let { componentStories: r } = m.useContext(we),
      a = r().filter((o) => {
        var l, i;
        return !(
          (i = (l = o.parameters) == null ? void 0 : l.docs) != null &&
          i.disable
        );
      });
    return (
      t || (a = a.slice(1)),
      !a || a.length === 0
        ? null
        : n.createElement(
            n.Fragment,
            null,
            n.createElement(g7, null, e),
            a.map(
              (o) =>
                o &&
                n.createElement(Pu, {
                  key: o.id,
                  of: o.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                })
            )
          )
    );
  },
  b7 = () => {
    let e = $r("meta", ["meta"]),
      { stories: t } = e.csfFile,
      r = Object.keys(t).length === 1;
    return n.createElement(
      n.Fragment,
      null,
      n.createElement(c7, null),
      n.createElement(d7, null),
      n.createElement(Mn, { of: "meta" }),
      r ? n.createElement(Mn, { of: "story" }) : null,
      n.createElement(f7, null),
      n.createElement(j4, null),
      r ? null : n.createElement(h7, null)
    );
  };
function D7({ context: e, docsParameter: t }) {
  let r = t.container || i7,
    a = t.page || b7;
  return n.createElement(
    r,
    { context: e, theme: t.theme },
    n.createElement(a, null)
  );
}
var L7 = ({ of: e }) => {
  let t = m.useContext(we);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return n.createElement(Ru, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  H4 as A,
  B4 as C,
  D7 as D,
  Ie as F,
  U4 as H,
  be as I,
  L7 as M,
  to as S,
  em as T,
  b2 as W,
  ke as _,
  bs as a,
  N4 as b,
  ns as c,
  Uf as d,
  H as e,
  je as g,
  _ as n,
  O7 as s,
};
