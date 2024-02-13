import { r as D, R as T } from "./index-c013ead5.js";
import { g as pr } from "./commonjsHelpers-725317a4.js";
var vt = { exports: {} },
  Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = D,
  cr = Symbol.for("react.element"),
  hr = Symbol.for("react.fragment"),
  Fr = Object.prototype.hasOwnProperty,
  ur = dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ct(e, t, r) {
  var o,
    a = {},
    n = null,
    i = null;
  r !== void 0 && (n = "" + r),
    t.key !== void 0 && (n = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (o in t) Fr.call(t, o) && !fr.hasOwnProperty(o) && (a[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) a[o] === void 0 && (a[o] = t[o]);
  return {
    $$typeof: cr,
    type: e,
    key: n,
    ref: i,
    props: a,
    _owner: ur.current,
  };
}
Ce.Fragment = hr;
Ce.jsx = Ct;
Ce.jsxs = Ct;
vt.exports = Ce;
var Xe = vt.exports,
  O = function () {
    return (
      (O =
        Object.assign ||
        function (t) {
          for (var r, o = 1, a = arguments.length; o < a; o++) {
            r = arguments[o];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
      O.apply(this, arguments)
    );
  };
function ne(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, n; o < a; o++)
      (n || !(o in t)) &&
        (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
  return e.concat(n || Array.prototype.slice.call(t));
}
var C = "-ms-",
  ae = "-moz-",
  S = "-webkit-",
  kt = "comm",
  ke = "rule",
  Ze = "decl",
  xr = "@import",
  Et = "@keyframes",
  gr = "@layer",
  wt = Math.abs,
  Qe = String.fromCharCode,
  Ne = Object.assign;
function Br(e, t) {
  return R(e, 0) ^ 45
    ? (((((((t << 2) ^ R(e, 0)) << 2) ^ R(e, 1)) << 2) ^ R(e, 2)) << 2) ^
        R(e, 3)
    : 0;
}
function Rt(e) {
  return e.trim();
}
function $(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function g(e, t, r) {
  return e.replace(t, r);
}
function xe(e, t, r) {
  return e.indexOf(t, r);
}
function R(e, t) {
  return e.charCodeAt(t) | 0;
}
function W(e, t, r) {
  return e.slice(t, r);
}
function I(e) {
  return e.length;
}
function Ot(e) {
  return e.length;
}
function oe(e, t) {
  return t.push(e), e;
}
function br(e, t) {
  return e.map(t).join("");
}
function st(e, t) {
  return e.filter(function (r) {
    return !$(r, t);
  });
}
var Ee = 1,
  U = 1,
  At = 0,
  A = 0,
  E = 0,
  Z = "";
function we(e, t, r, o, a, n, i, p) {
  return {
    value: e,
    root: t,
    parent: r,
    type: o,
    props: a,
    children: n,
    line: Ee,
    column: U,
    length: i,
    return: "",
    siblings: p,
  };
}
function G(e, t) {
  return Ne(
    we("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function z(e) {
  for (; e.root; ) e = G(e.root, { children: [e] });
  oe(e, e.siblings);
}
function yr() {
  return E;
}
function mr() {
  return (E = A > 0 ? R(Z, --A) : 0), U--, E === 10 && ((U = 1), Ee--), E;
}
function L() {
  return (E = A < At ? R(Z, A++) : 0), U++, E === 10 && ((U = 1), Ee++), E;
}
function V() {
  return R(Z, A);
}
function ge() {
  return A;
}
function Re(e, t) {
  return W(Z, e, t);
}
function Ve(e) {
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
function Sr(e) {
  return (Ee = U = 1), (At = I((Z = e))), (A = 0), [];
}
function vr(e) {
  return (Z = ""), e;
}
function $e(e) {
  return Rt(Re(A - 1, ze(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cr(e) {
  for (; (E = V()) && E < 33; ) L();
  return Ve(e) > 2 || Ve(E) > 3 ? "" : " ";
}
function kr(e, t) {
  for (
    ;
    --t &&
    L() &&
    !(E < 48 || E > 102 || (E > 57 && E < 65) || (E > 70 && E < 97));

  );
  return Re(e, ge() + (t < 6 && V() == 32 && L() == 32));
}
function ze(e) {
  for (; L(); )
    switch (E) {
      case e:
        return A;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ze(E);
        break;
      case 40:
        e === 41 && ze(e);
        break;
      case 92:
        L();
        break;
    }
  return A;
}
function Er(e, t) {
  for (; L() && e + E !== 47 + 10; ) if (e + E === 42 + 42 && V() === 47) break;
  return "/*" + Re(t, A - 1) + "*" + Qe(e === 47 ? e : L());
}
function wr(e) {
  for (; !Ve(V()); ) L();
  return Re(e, A);
}
function Rr(e) {
  return vr(Be("", null, null, null, [""], (e = Sr(e)), 0, [0], e));
}
function Be(e, t, r, o, a, n, i, p, l) {
  for (
    var s = 0,
      d = 0,
      F = i,
      x = 0,
      u = 0,
      B = 0,
      h = 1,
      f = 1,
      b = 1,
      c = 0,
      y = "",
      k = a,
      w = n,
      v = o,
      m = y;
    f;

  )
    switch (((B = c), (c = L()))) {
      case 40:
        if (B != 108 && R(m, F - 1) == 58) {
          xe((m += g($e(c), "&", "&\f")), "&\f", wt(s ? p[s - 1] : 0)) != -1 &&
            (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += $e(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += Cr(B);
        break;
      case 92:
        m += kr(ge() - 1, 7);
        continue;
      case 47:
        switch (V()) {
          case 42:
          case 47:
            oe(Or(Er(L(), ge()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * h:
        p[s++] = I(m) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            f = 0;
          case 59 + d:
            b == -1 && (m = g(m, /\f/g, "")),
              u > 0 &&
                I(m) - F &&
                oe(
                  u > 32
                    ? pt(m + ";", o, r, F - 1, l)
                    : pt(g(m, " ", "") + ";", o, r, F - 2, l),
                  l
                );
            break;
          case 59:
            m += ";";
          default:
            if (
              (oe(
                (v = lt(m, t, r, s, d, a, p, y, (k = []), (w = []), F, n)),
                n
              ),
              c === 123)
            )
              if (d === 0) Be(m, t, v, v, k, n, F, p, w);
              else
                switch (x === 99 && R(m, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Be(
                      e,
                      v,
                      v,
                      o && oe(lt(e, v, v, 0, 0, a, p, y, a, (k = []), F, w), w),
                      a,
                      w,
                      F,
                      p,
                      o ? k : w
                    );
                    break;
                  default:
                    Be(m, v, v, v, [""], w, 0, p, w);
                }
        }
        (s = d = u = 0), (h = b = 1), (y = m = ""), (F = i);
        break;
      case 58:
        (F = 1 + I(m)), (u = B);
      default:
        if (h < 1) {
          if (c == 123) --h;
          else if (c == 125 && h++ == 0 && mr() == 125) continue;
        }
        switch (((m += Qe(c)), c * h)) {
          case 38:
            b = d > 0 ? 1 : ((m += "\f"), -1);
            break;
          case 44:
            (p[s++] = (I(m) - 1) * b), (b = 1);
            break;
          case 64:
            V() === 45 && (m += $e(L())),
              (x = V()),
              (d = F = I((y = m += wr(ge())))),
              c++;
            break;
          case 45:
            B === 45 && I(m) == 2 && (h = 0);
        }
    }
  return n;
}
function lt(e, t, r, o, a, n, i, p, l, s, d, F) {
  for (
    var x = a - 1, u = a === 0 ? n : [""], B = Ot(u), h = 0, f = 0, b = 0;
    h < o;
    ++h
  )
    for (var c = 0, y = W(e, x + 1, (x = wt((f = i[h])))), k = e; c < B; ++c)
      (k = Rt(f > 0 ? u[c] + " " + y : g(y, /&\f/g, u[c]))) && (l[b++] = k);
  return we(e, t, r, a === 0 ? ke : p, l, s, d, F);
}
function Or(e, t, r, o) {
  return we(e, t, r, kt, Qe(yr()), W(e, 2, -2), 0, o);
}
function pt(e, t, r, o, a) {
  return we(e, t, r, Ze, W(e, 0, o), W(e, o + 1, -1), o, a);
}
function Lt(e, t, r) {
  switch (Br(e, t)) {
    case 5103:
      return S + "print-" + e + e;
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
      return S + e + e;
    case 4789:
      return ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return S + e + ae + e + C + e + e;
    case 5936:
      switch (R(e, t + 11)) {
        case 114:
          return S + e + C + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return S + e + C + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return S + e + C + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return S + e + C + e + e;
    case 6165:
      return S + e + C + "flex-" + e + e;
    case 5187:
      return (
        S + e + g(e, /(\w+).+(:[^]+)/, S + "box-$1$2" + C + "flex-$1$2") + e
      );
    case 5443:
      return (
        S +
        e +
        C +
        "flex-item-" +
        g(e, /flex-|-self/g, "") +
        ($(e, /flex-|baseline/)
          ? ""
          : C + "grid-row-" + g(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        S +
        e +
        C +
        "flex-line-pack" +
        g(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return S + e + C + g(e, "shrink", "negative") + e;
    case 5292:
      return S + e + C + g(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        S +
        "box-" +
        g(e, "-grow", "") +
        S +
        e +
        C +
        g(e, "grow", "positive") +
        e
      );
    case 4554:
      return S + g(e, /([^-])(transform)/g, "$1" + S + "$2") + e;
    case 6187:
      return (
        g(g(g(e, /(zoom-|grab)/, S + "$1"), /(image-set)/, S + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, S + "$1$`$1");
    case 4968:
      return (
        g(
          g(e, /(.+:)(flex-)?(.*)/, S + "box-pack:$3" + C + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        S +
        e +
        e
      );
    case 4200:
      if (!$(e, /flex-|baseline/)) return C + "grid-column-align" + W(e, t) + e;
      break;
    case 2592:
    case 3360:
      return C + g(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r &&
        r.some(function (o, a) {
          return (t = a), $(o.props, /grid-\w+-end/);
        })
        ? ~xe(e + (r = r[t].value), "span", 0)
          ? e
          : C +
            g(e, "-start", "") +
            e +
            C +
            "grid-row-span:" +
            (~xe(r, "span", 0) ? $(r, /\d+/) : +$(r, /\d+/) - +$(e, /\d+/)) +
            ";"
        : C + g(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r &&
        r.some(function (o) {
          return $(o.props, /grid-\w+-start/);
        })
        ? e
        : C + g(g(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, S + "$1$2") + e;
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
      if (I(e) - 1 - t > 6)
        switch (R(e, t + 1)) {
          case 109:
            if (R(e, t + 4) !== 45) break;
          case 102:
            return (
              g(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  S +
                  "$2-$3$1" +
                  ae +
                  (R(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~xe(e, "stretch", 0)
              ? Lt(g(e, "stretch", "fill-available"), t, r) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return g(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (o, a, n, i, p, l, s) {
          return (
            C +
            a +
            ":" +
            n +
            s +
            (i ? C + a + "-span:" + (p ? l : +l - +n) + s : "") +
            e
          );
        }
      );
    case 4949:
      if (R(e, t + 6) === 121) return g(e, ":", ":" + S) + e;
      break;
    case 6444:
      switch (R(e, R(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            g(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                S +
                (R(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                S +
                "$2$3$1" +
                C +
                "$2box$3"
            ) + e
          );
        case 100:
          return g(e, ":", ":" + C) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return g(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function me(e, t) {
  for (var r = "", o = 0; o < e.length; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function Ar(e, t, r, o) {
  switch (e.type) {
    case gr:
      if (e.children.length) break;
    case xr:
    case Ze:
      return (e.return = e.return || e.value);
    case kt:
      return "";
    case Et:
      return (e.return = e.value + "{" + me(e.children, o) + "}");
    case ke:
      if (!I((e.value = e.props.join(",")))) return "";
  }
  return I((r = me(e.children, o))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Lr(e) {
  var t = Ot(e);
  return function (r, o, a, n) {
    for (var i = "", p = 0; p < t; p++) i += e[p](r, o, a, n) || "";
    return i;
  };
}
function Ir(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Dr(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ze:
        e.return = Lt(e.value, e.length, r);
        return;
      case Et:
        return me([G(e, { value: g(e.value, "@", "@" + S) })], o);
      case ke:
        if (e.length)
          return br((r = e.props), function (a) {
            switch ($(a, (o = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                z(G(e, { props: [g(a, /:(read-\w+)/, ":" + ae + "$1")] })),
                  z(G(e, { props: [a] })),
                  Ne(e, { props: st(r, o) });
                break;
              case "::placeholder":
                z(G(e, { props: [g(a, /:(plac\w+)/, ":" + S + "input-$1")] })),
                  z(G(e, { props: [g(a, /:(plac\w+)/, ":" + ae + "$1")] })),
                  z(G(e, { props: [g(a, /:(plac\w+)/, C + "input-$1")] })),
                  z(G(e, { props: [a] })),
                  Ne(e, { props: st(r, o) });
                break;
            }
            return "";
          });
    }
}
var Mr = {
    animationIterationCount: 1,
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
  Y =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  It = "active",
  Dt = "data-styled-version",
  Oe = "6.1.8",
  et = `/*!sc*/
`,
  tt = typeof window < "u" && "HTMLElement" in window,
  $r = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Tr = {},
  Ae = Object.freeze([]),
  K = Object.freeze({});
function Mt(e, t, r) {
  return (
    r === void 0 && (r = K), (e.theme !== r.theme && e.theme) || t || r.theme
  );
}
var $t = new Set([
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
    "tr",
    "track",
    "u",
    "ul",
    "use",
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
    "marker",
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
  ]),
  _r = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Pr = /(^-|-$)/g;
function dt(e) {
  return e.replace(_r, "-").replace(Pr, "");
}
var Gr = /(a)(d)/gi,
  ue = 52,
  ct = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function je(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > ue; t = (t / ue) | 0) r = ct(t % ue) + r;
  return (ct(t % ue) + r).replace(Gr, "$1-$2");
}
var Te,
  Tt = 5381,
  j = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  _t = function (e) {
    return j(Tt, e);
  };
function Pt(e) {
  return je(_t(e) >>> 0);
}
function Hr(e) {
  return e.displayName || e.name || "Component";
}
function _e(e) {
  return typeof e == "string" && !0;
}
var Gt = typeof Symbol == "function" && Symbol.for,
  Ht = Gt ? Symbol.for("react.memo") : 60115,
  Xr = Gt ? Symbol.for("react.forward_ref") : 60112,
  Nr = {
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
  Vr = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Xt = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  zr =
    (((Te = {})[Xr] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Te[Ht] = Xt),
    Te);
function ht(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ht
    ? Xt
    : "$$typeof" in e
    ? zr[e.$$typeof]
    : Nr;
  var t;
}
var jr = Object.defineProperty,
  Wr = Object.getOwnPropertyNames,
  Ft = Object.getOwnPropertySymbols,
  Ur = Object.getOwnPropertyDescriptor,
  Yr = Object.getPrototypeOf,
  ut = Object.prototype;
function Nt(e, t, r) {
  if (typeof t != "string") {
    if (ut) {
      var o = Yr(t);
      o && o !== ut && Nt(e, o, r);
    }
    var a = Wr(t);
    Ft && (a = a.concat(Ft(t)));
    for (var n = ht(e), i = ht(t), p = 0; p < a.length; ++p) {
      var l = a[p];
      if (!(l in Vr || (r && r[l]) || (i && l in i) || (n && l in n))) {
        var s = Ur(t, l);
        try {
          jr(e, l, s);
        } catch {}
      }
    }
  }
  return e;
}
function q(e) {
  return typeof e == "function";
}
function rt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function N(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function We(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], o = 1; o < e.length; o++) r += t ? t + e[o] : e[o];
  return r;
}
function ie(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ue(e, t, r) {
  if ((r === void 0 && (r = !1), !r && !ie(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++) e[o] = Ue(e[o], t[o]);
  else if (ie(t)) for (var o in t) e[o] = Ue(e[o], t[o]);
  return e;
}
function ot(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function le(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Kr = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var r = 0, o = 0; o < t; o++) r += this.groupSizes[o];
        return r;
      }),
      (e.prototype.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var o = this.groupSizes, a = o.length, n = a; t >= n; )
            if ((n <<= 1) < 0) throw le(16, "".concat(t));
          (this.groupSizes = new Uint32Array(n)),
            this.groupSizes.set(o),
            (this.length = n);
          for (var i = a; i < n; i++) this.groupSizes[i] = 0;
        }
        for (
          var p = this.indexOfGroup(t + 1), l = ((i = 0), r.length);
          i < l;
          i++
        )
          this.tag.insertRule(p, r[i]) && (this.groupSizes[t]++, p++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            a = o + r;
          this.groupSizes[t] = 0;
          for (var n = o; n < a; n++) this.tag.deleteRule(o);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var r = "";
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var o = this.groupSizes[t],
            a = this.indexOfGroup(t),
            n = a + o,
            i = a;
          i < n;
          i++
        )
          r += "".concat(this.tag.getRule(i)).concat(et);
        return r;
      }),
      e
    );
  })(),
  be = new Map(),
  Se = new Map(),
  ye = 1,
  fe = function (e) {
    if (be.has(e)) return be.get(e);
    for (; Se.has(ye); ) ye++;
    var t = ye++;
    return be.set(e, t), Se.set(t, e), t;
  },
  qr = function (e, t) {
    (ye = t + 1), be.set(e, t), Se.set(t, e);
  },
  Jr = "style[".concat(Y, "][").concat(Dt, '="').concat(Oe, '"]'),
  Zr = new RegExp(
    "^".concat(Y, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Qr = function (e, t, r) {
    for (var o, a = r.split(","), n = 0, i = a.length; n < i; n++)
      (o = a[n]) && e.registerName(t, o);
  },
  eo = function (e, t) {
    for (
      var r,
        o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(et),
        a = [],
        n = 0,
        i = o.length;
      n < i;
      n++
    ) {
      var p = o[n].trim();
      if (p) {
        var l = p.match(Zr);
        if (l) {
          var s = 0 | parseInt(l[1], 10),
            d = l[2];
          s !== 0 && (qr(d, s), Qr(e, d, l[3]), e.getTag().insertRules(s, a)),
            (a.length = 0);
        } else a.push(p);
      }
    }
  };
function to() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Vt = function (e) {
    var t = document.head,
      r = e || t,
      o = document.createElement("style"),
      a = (function (p) {
        var l = Array.from(p.querySelectorAll("style[".concat(Y, "]")));
        return l[l.length - 1];
      })(r),
      n = a !== void 0 ? a.nextSibling : null;
    o.setAttribute(Y, It), o.setAttribute(Dt, Oe);
    var i = to();
    return i && o.setAttribute("nonce", i), r.insertBefore(o, n), o;
  },
  ro = (function () {
    function e(t) {
      (this.element = Vt(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (r) {
          if (r.sheet) return r.sheet;
          for (var o = document.styleSheets, a = 0, n = o.length; a < n; a++) {
            var i = o[a];
            if (i.ownerNode === r) return i;
          }
          throw le(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        try {
          return this.sheet.insertRule(r, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var r = this.sheet.cssRules[t];
        return r && r.cssText ? r.cssText : "";
      }),
      e
    );
  })(),
  oo = (function () {
    function e(t) {
      (this.element = Vt(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var o = document.createTextNode(r);
          return (
            this.element.insertBefore(o, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  ao = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        return (
          t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  ft = tt,
  no = { isServer: !tt, useCSSOMInjection: !$r },
  ve = (function () {
    function e(t, r, o) {
      t === void 0 && (t = K), r === void 0 && (r = {});
      var a = this;
      (this.options = O(O({}, no), t)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!t.isServer),
        !this.server &&
          tt &&
          ft &&
          ((ft = !1),
          (function (n) {
            for (
              var i = document.querySelectorAll(Jr), p = 0, l = i.length;
              p < l;
              p++
            ) {
              var s = i[p];
              s &&
                s.getAttribute(Y) !== It &&
                (eo(n, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this)),
        ot(this, function () {
          return (function (n) {
            for (
              var i = n.getTag(),
                p = i.length,
                l = "",
                s = function (F) {
                  var x = (function (b) {
                    return Se.get(b);
                  })(F);
                  if (x === void 0) return "continue";
                  var u = n.names.get(x),
                    B = i.getGroup(F);
                  if (u === void 0 || B.length === 0) return "continue";
                  var h = "".concat(Y, ".g").concat(F, '[id="').concat(x, '"]'),
                    f = "";
                  u !== void 0 &&
                    u.forEach(function (b) {
                      b.length > 0 && (f += "".concat(b, ","));
                    }),
                    (l += ""
                      .concat(B)
                      .concat(h, '{content:"')
                      .concat(f, '"}')
                      .concat(et));
                },
                d = 0;
              d < p;
              d++
            )
              s(d);
            return l;
          })(a);
        });
    }
    return (
      (e.registerId = function (t) {
        return fe(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new e(O(O({}, this.options), t), this.gs, (r && this.names) || void 0)
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (r) {
              var o = r.useCSSOMInjection,
                a = r.target;
              return r.isServer ? new ao(a) : o ? new ro(a) : new oo(a);
            })(this.options)),
            new Kr(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.prototype.registerName = function (t, r) {
        if ((fe(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(t, o);
        }
      }),
      (e.prototype.insertRules = function (t, r, o) {
        this.registerName(t, r), this.getTag().insertRules(fe(t), o);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(fe(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  io = /&/g,
  so = /^\s*\/\/.*$/gm;
function zt(e, t) {
  return e.map(function (r) {
    return (
      r.type === "rule" &&
        ((r.value = "".concat(t, " ").concat(r.value)),
        (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
        (r.props = r.props.map(function (o) {
          return "".concat(t, " ").concat(o);
        }))),
      Array.isArray(r.children) &&
        r.type !== "@keyframes" &&
        (r.children = zt(r.children, t)),
      r
    );
  });
}
function lo(e) {
  var t,
    r,
    o,
    a = e === void 0 ? K : e,
    n = a.options,
    i = n === void 0 ? K : n,
    p = a.plugins,
    l = p === void 0 ? Ae : p,
    s = function (x, u, B) {
      return B.startsWith(r) && B.endsWith(r) && B.replaceAll(r, "").length > 0
        ? ".".concat(t)
        : x;
    },
    d = l.slice();
  d.push(function (x) {
    x.type === ke &&
      x.value.includes("&") &&
      (x.props[0] = x.props[0].replace(io, r).replace(o, s));
  }),
    i.prefix && d.push(Dr),
    d.push(Ar);
  var F = function (x, u, B, h) {
    u === void 0 && (u = ""),
      B === void 0 && (B = ""),
      h === void 0 && (h = "&"),
      (t = h),
      (r = u),
      (o = new RegExp("\\".concat(r, "\\b"), "g"));
    var f = x.replace(so, ""),
      b = Rr(B || u ? "".concat(B, " ").concat(u, " { ").concat(f, " }") : f);
    i.namespace && (b = zt(b, i.namespace));
    var c = [];
    return (
      me(
        b,
        Lr(
          d.concat(
            Ir(function (y) {
              return c.push(y);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (F.hash = l.length
      ? l
          .reduce(function (x, u) {
            return u.name || le(15), j(x, u.name);
          }, Tt)
          .toString()
      : ""),
    F
  );
}
var po = new ve(),
  Ye = lo(),
  jt = T.createContext({
    shouldForwardProp: void 0,
    styleSheet: po,
    stylis: Ye,
  });
jt.Consumer;
T.createContext(void 0);
function Ke() {
  return D.useContext(jt);
}
var co = (function () {
    function e(t, r) {
      var o = this;
      (this.inject = function (a, n) {
        n === void 0 && (n = Ye);
        var i = o.name + n.hash;
        a.hasNameForId(o.id, i) ||
          a.insertRules(o.id, i, n(o.rules, i, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = r),
        ot(this, function () {
          throw le(12, String(o.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ye), this.name + t.hash;
      }),
      e
    );
  })(),
  ho = function (e) {
    return e >= "A" && e <= "Z";
  };
function xt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-") return e;
    ho(o) ? (t += "-" + o.toLowerCase()) : (t += o);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Wt = function (e) {
    return e == null || e === !1 || e === "";
  },
  Ut = function (e) {
    var t,
      r,
      o = [];
    for (var a in e) {
      var n = e[a];
      e.hasOwnProperty(a) &&
        !Wt(n) &&
        ((Array.isArray(n) && n.isCss) || q(n)
          ? o.push("".concat(xt(a), ":"), n, ";")
          : ie(n)
          ? o.push.apply(o, ne(ne(["".concat(a, " {")], Ut(n), !1), ["}"], !1))
          : o.push(
              ""
                .concat(xt(a), ": ")
                .concat(
                  ((t = a),
                  (r = n) == null || typeof r == "boolean" || r === ""
                    ? ""
                    : typeof r != "number" ||
                      r === 0 ||
                      t in Mr ||
                      t.startsWith("--")
                    ? String(r).trim()
                    : "".concat(r, "px")),
                  ";"
                )
            ));
    }
    return o;
  };
function H(e, t, r, o) {
  if (Wt(e)) return [];
  if (rt(e)) return [".".concat(e.styledComponentId)];
  if (q(e)) {
    if (!q((n = e)) || (n.prototype && n.prototype.isReactComponent) || !t)
      return [e];
    var a = e(t);
    return H(a, t, r, o);
  }
  var n;
  return e instanceof co
    ? r
      ? (e.inject(r, o), [e.getName(o)])
      : [e]
    : ie(e)
    ? Ut(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ae,
        e.map(function (i) {
          return H(i, t, r, o);
        })
      )
    : [e.toString()];
}
function Yt(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (q(r) && !rt(r)) return !1;
  }
  return !0;
}
var Fo = _t(Oe),
  uo = (function () {
    function e(t, r, o) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (o === void 0 || o.isStatic) && Yt(t)),
        (this.componentId = r),
        (this.baseHash = j(Fo, r)),
        (this.baseStyle = o),
        ve.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, o) {
        var a = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, r, o)
          : "";
        if (this.isStatic && !o.hash)
          if (
            this.staticRulesId &&
            r.hasNameForId(this.componentId, this.staticRulesId)
          )
            a = N(a, this.staticRulesId);
          else {
            var n = We(H(this.rules, t, r, o)),
              i = je(j(this.baseHash, n) >>> 0);
            if (!r.hasNameForId(this.componentId, i)) {
              var p = o(n, ".".concat(i), void 0, this.componentId);
              r.insertRules(this.componentId, i, p);
            }
            (a = N(a, i)), (this.staticRulesId = i);
          }
        else {
          for (
            var l = j(this.baseHash, o.hash), s = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var F = this.rules[d];
            if (typeof F == "string") s += F;
            else if (F) {
              var x = We(H(F, t, r, o));
              (l = j(l, x + d)), (s += x);
            }
          }
          if (s) {
            var u = je(l >>> 0);
            r.hasNameForId(this.componentId, u) ||
              r.insertRules(
                this.componentId,
                u,
                o(s, ".".concat(u), void 0, this.componentId)
              ),
              (a = N(a, u));
          }
        }
        return a;
      }),
      e
    );
  })(),
  at = T.createContext(void 0);
at.Consumer;
var Pe = {};
function fo(e, t, r) {
  var o = rt(e),
    a = e,
    n = !_e(e),
    i = t.attrs,
    p = i === void 0 ? Ae : i,
    l = t.componentId,
    s =
      l === void 0
        ? (function (k, w) {
            var v = typeof k != "string" ? "sc" : dt(k);
            Pe[v] = (Pe[v] || 0) + 1;
            var m = "".concat(v, "-").concat(Pt(Oe + v + Pe[v]));
            return w ? "".concat(w, "-").concat(m) : m;
          })(t.displayName, t.parentComponentId)
        : l,
    d = t.displayName,
    F =
      d === void 0
        ? (function (k) {
            return _e(k) ? "styled.".concat(k) : "Styled(".concat(Hr(k), ")");
          })(e)
        : d,
    x =
      t.displayName && t.componentId
        ? "".concat(dt(t.displayName), "-").concat(t.componentId)
        : t.componentId || s,
    u = o && a.attrs ? a.attrs.concat(p).filter(Boolean) : p,
    B = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var h = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var f = t.shouldForwardProp;
      B = function (k, w) {
        return h(k, w) && f(k, w);
      };
    } else B = h;
  }
  var b = new uo(r, x, o ? a.componentStyle : void 0);
  function c(k, w) {
    return (function (v, m, Q) {
      var pe = v.attrs,
        rr = v.componentStyle,
        or = v.defaultProps,
        ar = v.foldedComponentIds,
        nr = v.styledComponentId,
        ir = v.target,
        sr = T.useContext(at),
        lr = Ke(),
        Ie = v.shouldForwardProp || lr.shouldForwardProp,
        nt = Mt(m, sr, or) || K,
        M = (function (ce, te, he) {
          for (
            var re, X = O(O({}, te), { className: void 0, theme: he }), Me = 0;
            Me < ce.length;
            Me += 1
          ) {
            var Fe = q((re = ce[Me])) ? re(X) : re;
            for (var P in Fe)
              X[P] =
                P === "className"
                  ? N(X[P], Fe[P])
                  : P === "style"
                  ? O(O({}, X[P]), Fe[P])
                  : Fe[P];
          }
          return (
            te.className && (X.className = N(X.className, te.className)), X
          );
        })(pe, m, nt),
        de = M.as || ir,
        ee = {};
      for (var _ in M)
        M[_] === void 0 ||
          _[0] === "$" ||
          _ === "as" ||
          (_ === "theme" && M.theme === nt) ||
          (_ === "forwardedAs"
            ? (ee.as = M.forwardedAs)
            : (Ie && !Ie(_, de)) || (ee[_] = M[_]));
      var it = (function (ce, te) {
          var he = Ke(),
            re = ce.generateAndInjectStyles(te, he.styleSheet, he.stylis);
          return re;
        })(rr, M),
        De = N(ar, nr);
      return (
        it && (De += " " + it),
        M.className && (De += " " + M.className),
        (ee[_e(de) && !$t.has(de) ? "class" : "className"] = De),
        (ee.ref = Q),
        D.createElement(de, ee)
      );
    })(y, k, w);
  }
  c.displayName = F;
  var y = T.forwardRef(c);
  return (
    (y.attrs = u),
    (y.componentStyle = b),
    (y.displayName = F),
    (y.shouldForwardProp = B),
    (y.foldedComponentIds = o
      ? N(a.foldedComponentIds, a.styledComponentId)
      : ""),
    (y.styledComponentId = x),
    (y.target = o ? a.target : e),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (k) {
        this._foldedDefaultProps = o
          ? (function (w) {
              for (var v = [], m = 1; m < arguments.length; m++)
                v[m - 1] = arguments[m];
              for (var Q = 0, pe = v; Q < pe.length; Q++) Ue(w, pe[Q], !0);
              return w;
            })({}, a.defaultProps, k)
          : k;
      },
    }),
    ot(y, function () {
      return ".".concat(y.styledComponentId);
    }),
    n &&
      Nt(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    y
  );
}
function gt(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var Bt = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Kt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (q(e) || ie(e)) return Bt(H(gt(Ae, ne([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string"
    ? H(o)
    : Bt(H(gt(o, t)));
}
function qe(e, t, r) {
  if ((r === void 0 && (r = K), !t)) throw le(1, t);
  var o = function (a) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    return e(t, r, Kt.apply(void 0, ne([a], n, !1)));
  };
  return (
    (o.attrs = function (a) {
      return qe(
        e,
        t,
        O(O({}, r), {
          attrs: Array.prototype.concat(r.attrs, a).filter(Boolean),
        })
      );
    }),
    (o.withConfig = function (a) {
      return qe(e, t, O(O({}, r), a));
    }),
    o
  );
}
var qt = function (e) {
    return qe(fo, e);
  },
  xo = qt;
$t.forEach(function (e) {
  xo[e] = qt(e);
});
var go = (function () {
  function e(t, r) {
    (this.rules = t),
      (this.componentId = r),
      (this.isStatic = Yt(t)),
      ve.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, r, o, a) {
      var n = a(We(H(this.rules, r, o, a)), ""),
        i = this.componentId + t;
      o.insertRules(i, i, n);
    }),
    (e.prototype.removeStyles = function (t, r) {
      r.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, r, o, a) {
      t > 2 && ve.registerId(this.componentId + t),
        this.removeStyles(t, o),
        this.createStyles(t, r, o, a);
    }),
    e
  );
})();
function Bo(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var o = Kt.apply(void 0, ne([e], t, !1)),
    a = "sc-global-".concat(Pt(JSON.stringify(o))),
    n = new go(o, a),
    i = function (l) {
      var s = Ke(),
        d = T.useContext(at),
        F = T.useRef(s.styleSheet.allocateGSInstance(a)).current;
      return (
        s.styleSheet.server && p(F, l, s.styleSheet, d, s.stylis),
        T.useLayoutEffect(
          function () {
            if (!s.styleSheet.server)
              return (
                p(F, l, s.styleSheet, d, s.stylis),
                function () {
                  return n.removeStyles(F, s.styleSheet);
                }
              );
          },
          [F, l, s.styleSheet, d, s.stylis]
        ),
        null
      );
    };
  function p(l, s, d, F, x) {
    if (n.isStatic) n.renderStyles(l, Tr, d, x);
    else {
      var u = O(O({}, s), { theme: Mt(s, F, i.defaultProps) });
      n.renderStyles(l, u, d, x);
    }
  }
  return T.memo(i);
}
const bt = (e) => {
    let t;
    const r = new Set(),
      o = (l, s) => {
        const d = typeof l == "function" ? l(t) : l;
        if (!Object.is(d, t)) {
          const F = t;
          (t = s ?? typeof d != "object" ? d : Object.assign({}, t, d)),
            r.forEach((x) => x(t, F));
        }
      },
      a = () => t,
      p = {
        setState: o,
        getState: a,
        subscribe: (l) => (r.add(l), () => r.delete(l)),
        destroy: () => {
          r.clear();
        },
      };
    return (t = e(o, a, p)), p;
  },
  bo = (e) => (e ? bt(e) : bt);
var Jt = { exports: {} },
  Zt = {},
  Qt = { exports: {} },
  er = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J = D;
function yo(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mo = typeof Object.is == "function" ? Object.is : yo,
  So = J.useState,
  vo = J.useEffect,
  Co = J.useLayoutEffect,
  ko = J.useDebugValue;
function Eo(e, t) {
  var r = t(),
    o = So({ inst: { value: r, getSnapshot: t } }),
    a = o[0].inst,
    n = o[1];
  return (
    Co(
      function () {
        (a.value = r), (a.getSnapshot = t), Ge(a) && n({ inst: a });
      },
      [e, r, t]
    ),
    vo(
      function () {
        return (
          Ge(a) && n({ inst: a }),
          e(function () {
            Ge(a) && n({ inst: a });
          })
        );
      },
      [e]
    ),
    ko(r),
    r
  );
}
function Ge(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !mo(e, r);
  } catch {
    return !0;
  }
}
function wo(e, t) {
  return t();
}
var Ro =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? wo
    : Eo;
er.useSyncExternalStore =
  J.useSyncExternalStore !== void 0 ? J.useSyncExternalStore : Ro;
Qt.exports = er;
var Oo = Qt.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Le = D,
  Ao = Oo;
function Lo(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Io = typeof Object.is == "function" ? Object.is : Lo,
  Do = Ao.useSyncExternalStore,
  Mo = Le.useRef,
  $o = Le.useEffect,
  To = Le.useMemo,
  _o = Le.useDebugValue;
Zt.useSyncExternalStoreWithSelector = function (e, t, r, o, a) {
  var n = Mo(null);
  if (n.current === null) {
    var i = { hasValue: !1, value: null };
    n.current = i;
  } else i = n.current;
  n = To(
    function () {
      function l(u) {
        if (!s) {
          if (((s = !0), (d = u), (u = o(u)), a !== void 0 && i.hasValue)) {
            var B = i.value;
            if (a(B, u)) return (F = B);
          }
          return (F = u);
        }
        if (((B = F), Io(d, u))) return B;
        var h = o(u);
        return a !== void 0 && a(B, h) ? B : ((d = u), (F = h));
      }
      var s = !1,
        d,
        F,
        x = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        x === null
          ? void 0
          : function () {
              return l(x());
            },
      ];
    },
    [t, r, o, a]
  );
  var p = Do(e, n[0], n[1]);
  return (
    $o(
      function () {
        (i.hasValue = !0), (i.value = p);
      },
      [p]
    ),
    _o(p),
    p
  );
};
Jt.exports = Zt;
var Po = Jt.exports;
const Go = pr(Po),
  { useSyncExternalStoreWithSelector: Ho } = Go;
function Xo(e, t = e.getState, r) {
  const o = Ho(e.subscribe, e.getState, e.getServerState || e.getState, t, r);
  return D.useDebugValue(o), o;
}
const yt = (e) => {
    const t = typeof e == "function" ? bo(e) : e,
      r = (o, a) => Xo(t, o, a);
    return Object.assign(r, t), r;
  },
  No = (e) => (e ? yt(e) : yt);
function Vo(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (a) => {
      var n;
      const i = (l) =>
          l === null ? null : JSON.parse(l, t == null ? void 0 : t.reviver),
        p = (n = r.getItem(a)) != null ? n : null;
      return p instanceof Promise ? p.then(i) : i(p);
    },
    setItem: (a, n) =>
      r.setItem(a, JSON.stringify(n, t == null ? void 0 : t.replacer)),
    removeItem: (a) => r.removeItem(a),
  };
}
const se = (e) => (t) => {
    try {
      const r = e(t);
      return r instanceof Promise
        ? r
        : {
            then(o) {
              return se(o)(r);
            },
            catch(o) {
              return this;
            },
          };
    } catch (r) {
      return {
        then(o) {
          return this;
        },
        catch(o) {
          return se(o)(r);
        },
      };
    }
  },
  zo = (e, t) => (r, o, a) => {
    let n = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: (f) => f,
        version: 0,
        merge: (f, b) => ({ ...b, ...f }),
        ...t,
      },
      i = !1;
    const p = new Set(),
      l = new Set();
    let s;
    try {
      s = n.getStorage();
    } catch {}
    if (!s)
      return e(
        (...f) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`
          ),
            r(...f);
        },
        o,
        a
      );
    const d = se(n.serialize),
      F = () => {
        const f = n.partialize({ ...o() });
        let b;
        const c = d({ state: f, version: n.version })
          .then((y) => s.setItem(n.name, y))
          .catch((y) => {
            b = y;
          });
        if (b) throw b;
        return c;
      },
      x = a.setState;
    a.setState = (f, b) => {
      x(f, b), F();
    };
    const u = e(
      (...f) => {
        r(...f), F();
      },
      o,
      a
    );
    let B;
    const h = () => {
      var f;
      if (!s) return;
      (i = !1), p.forEach((c) => c(o()));
      const b =
        ((f = n.onRehydrateStorage) == null ? void 0 : f.call(n, o())) ||
        void 0;
      return se(s.getItem.bind(s))(n.name)
        .then((c) => {
          if (c) return n.deserialize(c);
        })
        .then((c) => {
          if (c)
            if (typeof c.version == "number" && c.version !== n.version) {
              if (n.migrate) return n.migrate(c.state, c.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return c.state;
        })
        .then((c) => {
          var y;
          return (B = n.merge(c, (y = o()) != null ? y : u)), r(B, !0), F();
        })
        .then(() => {
          b == null || b(B, void 0), (i = !0), l.forEach((c) => c(B));
        })
        .catch((c) => {
          b == null || b(void 0, c);
        });
    };
    return (
      (a.persist = {
        setOptions: (f) => {
          (n = { ...n, ...f }), f.getStorage && (s = f.getStorage());
        },
        clearStorage: () => {
          s == null || s.removeItem(n.name);
        },
        getOptions: () => n,
        rehydrate: () => h(),
        hasHydrated: () => i,
        onHydrate: (f) => (
          p.add(f),
          () => {
            p.delete(f);
          }
        ),
        onFinishHydration: (f) => (
          l.add(f),
          () => {
            l.delete(f);
          }
        ),
      }),
      h(),
      B || u
    );
  },
  jo = (e, t) => (r, o, a) => {
    let n = {
        storage: Vo(() => localStorage),
        partialize: (h) => h,
        version: 0,
        merge: (h, f) => ({ ...f, ...h }),
        ...t,
      },
      i = !1;
    const p = new Set(),
      l = new Set();
    let s = n.storage;
    if (!s)
      return e(
        (...h) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`
          ),
            r(...h);
        },
        o,
        a
      );
    const d = () => {
        const h = n.partialize({ ...o() });
        return s.setItem(n.name, { state: h, version: n.version });
      },
      F = a.setState;
    a.setState = (h, f) => {
      F(h, f), d();
    };
    const x = e(
      (...h) => {
        r(...h), d();
      },
      o,
      a
    );
    let u;
    const B = () => {
      var h, f;
      if (!s) return;
      (i = !1),
        p.forEach((c) => {
          var y;
          return c((y = o()) != null ? y : x);
        });
      const b =
        ((f = n.onRehydrateStorage) == null
          ? void 0
          : f.call(n, (h = o()) != null ? h : x)) || void 0;
      return se(s.getItem.bind(s))(n.name)
        .then((c) => {
          if (c)
            if (typeof c.version == "number" && c.version !== n.version) {
              if (n.migrate) return n.migrate(c.state, c.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return c.state;
        })
        .then((c) => {
          var y;
          return (u = n.merge(c, (y = o()) != null ? y : x)), r(u, !0), d();
        })
        .then(() => {
          b == null || b(u, void 0),
            (u = o()),
            (i = !0),
            l.forEach((c) => c(u));
        })
        .catch((c) => {
          b == null || b(void 0, c);
        });
    };
    return (
      (a.persist = {
        setOptions: (h) => {
          (n = { ...n, ...h }), h.storage && (s = h.storage);
        },
        clearStorage: () => {
          s == null || s.removeItem(n.name);
        },
        getOptions: () => n,
        rehydrate: () => B(),
        hasHydrated: () => i,
        onHydrate: (h) => (
          p.add(h),
          () => {
            p.delete(h);
          }
        ),
        onFinishHydration: (h) => (
          l.add(h),
          () => {
            l.delete(h);
          }
        ),
      }),
      n.skipHydration || B(),
      u || x
    );
  },
  Wo = (e, t) =>
    "getStorage" in t || "serialize" in t || "deserialize" in t
      ? zo(e, t)
      : jo(e, t),
  Uo = Wo,
  Yo = { width: { small: "48px", large: "100px" }, color: { base: "#000000" } },
  Ko = {
    a0: 0,
    a16: 0.16,
    a24: 0.24,
    a32: 0.32,
    a48: 0.48,
    a64: 0.64,
    a100: 1,
  },
  qo = { typographyVariant: "bodyM", color: "#666666", textAlign: "right" },
  Jo = {
    width: "24px",
    height: "24px",
    backgroundColor: {
      unchecked: { base: "#FFFFFF", hover: "#FFFFFF", disabled: "#FFFFFF" },
      checked: { base: "#0000FF", hover: "#0000C2", disabled: "#0000ff7a" },
    },
    stroke: {
      radius: "4px",
      width: {
        unchecked: { base: "1px", hover: "2px", disabled: "1px", error: "2px" },
        checked: { base: "0px", hover: "0px", disabled: "0px", error: "2px" },
      },
      color: {
        base: "#666666",
        hover: "#0000C2",
        disabled: "#BBBBBB",
        error: "#CF223F",
      },
    },
    icon: { width: "24px", height: "24px", color: { base: "#FFFFFF" } },
  },
  Zo = { width: "48px", height: "48px", color: { base: "#000000" } },
  Qo = {
    gap: "8px",
    legend: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    legendHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
    list: { gap: "16px" },
    nestedList: { paddingLeft: "32px" },
  },
  ea = {
    OpenSansItalic: "OpenSans-Italic",
    OpenSansRegular: "OpenSans-Regular",
    OpenSansSemiBold: "OpenSans-SemiBold",
    OpenSansSemiBoldItalic: "OpenSans-SemiBoldItalic",
    OpenSansBold: "OpenSans-Bold",
    BankOfIrelandRegular: "BankofIrelandSerif-Rg",
    BankOfIrelandBold: "BankofIrelandSerif-Bd",
  },
  ta = {
    fs32: "64px",
    fs28: "56px",
    fs24: "48px",
    fs20: "40px",
    fs16: "32px",
    fs14: "28px",
    fs12: "24px",
    fs10: "20px",
    fs09: "18px",
    fs08: "16px",
    fs07: "14px",
    fs06: "12px",
    fs05: "10px",
  },
  ra = { height: "48px", maxWidth: "320px" },
  oa = {
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: { base: "#000000", disabled: "#666666", placeholder: "#666666" },
    backgroundColor: { base: "#FFFFFF", disabled: "#ECEEF6" },
    stroke: {
      width: "1px",
      style: "solid",
      color: {
        base: "#666666",
        focus: "#0000FF",
        active: "#0000FF",
        disabled: "#BBBBBB",
        error: "#CF223F",
        readOnly: "#ECEEF6",
      },
    },
  },
  aa = {
    gap: "8px",
    color: { error: "#CF223F" },
    iconWrapper: { height: "24px" },
    icon: { width: "20px", height: "20px", color: { error: "#CF223F" } },
  },
  na = {
    gap: "8px",
    label: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#333333", disabled: "#666666" },
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "#0000FF",
      offset: "2px",
      radius: "4px",
    },
  },
  ia = {
    gap: "8px",
    label: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    labelHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
  },
  sa = {
    lh38: "76px",
    lh34: "68px",
    lh30: "60px",
    lh26: "52px",
    lh22: "44px",
    lh20: "40px",
    lh18: "36px",
    lh15: "30px",
    lh14: "28px",
    lh12: "24px",
    lh10: "20px",
    lh09: "18px",
    lh08: "16px",
  },
  la = {
    backgroundColor: "#FFFFFF",
    radius: "10px",
    focusRing: {
      width: { base: "0px", focus: "2px" },
      offset: { base: "0px", focus: "2px" },
      style: "solid",
      color: "#0000FF",
    },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
      style: "solid",
      color: {
        base: "#666666",
        disabled: "#BBBBBB",
        error: "#CF223F",
        focus: "#0000C2",
        hover: "#0000C2",
        readOnly: "#BBBBBB",
      },
    },
  },
  pa = {
    width: "24px",
    height: "24px",
    backgroundColor: { base: "#FFFFFF" },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", disabled: "1px" },
      color: {
        base: "#666666",
        error: "#CF223F",
        hover: "#0000C2",
        disabled: "#BBBBBB",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      color: { base: "#0000FF", hover: "#0000C2", disabled: "#0000ff7a" },
    },
  },
  da = {
    tab: {
      radius: { topLeft: "4px", topRight: "4px" },
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: { base: "none", hover: "#FFFFFF", active: "#FFFFFF" },
      label: {
        typographyVariant: "bodyL",
        fontFamily: "OpenSansSemiBold",
        color: {
          base: "#0000FF",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      secondaryLabel: {
        typographyVariant: "bodyS",
        fontFamily: "OpenSansSemiBold",
        color: { base: "#666666", disabled: "#666666" },
      },
      icon: {
        width: "24px",
        height: "24px",
        color: {
          base: "#0000FF",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      strokeTop: {
        width: "4px",
        style: "solid",
        color: { base: "#00067b00", active: "#00067B" },
      },
      activeRing: {
        width: "1px",
        style: "solid",
        color: "#00067B",
        offset: "-1px",
      },
      focusRing: {
        radius: {
          topLeft: "4px",
          topRight: "4px",
          bottomLeft: "0px",
          bottomRight: "0px",
        },
        width: "2px",
        style: "solid",
        color: "#0000FF",
        offset: "-2px",
      },
      separator: { marginTop: "4px", width: "1px", color: "#BBBBBB" },
    },
    panel: {
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: "#FFFFFF",
      strokeTop: { width: "1px", style: "solid", color: "#BBBBBB" },
    },
  },
  ca = {
    charactersCounter: {
      typographyVariant: "bodyM",
      color: "#666666",
      textAlign: "right",
    },
    outerField: {
      backgroundColor: "#FFFFFF",
      radius: "10px",
      focusRing: {
        width: { base: "0px", focus: "2px" },
        offset: { base: "0px", focus: "2px" },
        style: "solid",
        color: "#0000FF",
      },
      stroke: {
        width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
        style: "solid",
        color: {
          base: "#666666",
          disabled: "#BBBBBB",
          error: "#CF223F",
          focus: "#0000C2",
          hover: "#0000C2",
          readOnly: "#BBBBBB",
        },
      },
    },
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    typographyVariant: "bodyM",
    color: {
      base: "#000000",
      disabled: "#666666",
      placeholder: "#666666",
      readOnly: "#666666",
    },
    backgroundColor: "#FFFFFF",
    prefix: { marginRight: "8px" },
    icon: { marginLeft: "8px" },
    radius: "10px",
  },
  ha = {
    fontSize: {
      displayXL: "64px",
      displayL: "56px",
      displayM: "48px",
      displayS: "40px",
      headlineL: "32px",
      headlineM: "28px",
      headlineS: "24px",
      headlineXS: "20px",
      titleL: "32px",
      titleM: "28px",
      titleS: "24px",
      titleXS: "20px",
      bodyL: "18px",
      bodyM: "16px",
      bodyS: "14px",
      labelM: "12px",
      labelS: "10px",
    },
    color: {
      displayXL: "#0000FF",
      displayL: "#0000FF",
      displayM: "#0000FF",
      displayS: "#0000FF",
      headlineL: "#0000FF",
      headlineM: "#0000FF",
      headlineS: "#0000FF",
      headlineXS: "#0000FF",
      titleL: "#000000",
      titleM: "#000000",
      titleS: "#000000",
      titleXS: "#000000",
      bodyL: "#000000",
      bodyM: "#000000",
      bodyS: "#000000",
      labelM: "#000000",
      labelS: "#000000",
    },
    lineHeight: {
      displayXL: "76px",
      displayL: "68px",
      displayM: "60px",
      displayS: "52px",
      headlineL: "44px",
      headlineM: "40px",
      headlineS: "36px",
      headlineXS: "30px",
      titleL: "44px",
      titleM: "40px",
      titleS: "36px",
      titleXS: "30px",
      bodyL: "28px",
      bodyM: "24px",
      bodyS: "20px",
      labelM: "18px",
      labelS: "16px",
    },
    fontFamily: {
      displayXL: "BankofIrelandSerif-Bd",
      displayL: "BankofIrelandSerif-Bd",
      displayM: "BankofIrelandSerif-Bd",
      displayS: "BankofIrelandSerif-Bd",
      headlineL: "BankofIrelandSerif-Bd",
      headlineM: "BankofIrelandSerif-Bd",
      headlineS: "BankofIrelandSerif-Bd",
      headlineXS: "BankofIrelandSerif-Bd",
      titleL: "OpenSans-SemiBold",
      titleM: "OpenSans-SemiBold",
      titleS: "OpenSans-SemiBold",
      titleXS: "OpenSans-SemiBold",
      bodyL: "OpenSans-Regular",
      bodyM: "OpenSans-Regular",
      bodyS: "OpenSans-Regular",
      labelM: "OpenSans-Regular",
      labelS: "OpenSans-Regular",
    },
  },
  Fa = {
    digitalBlue: "#0000FF",
    darkDigitalBlue: "#0000C2",
    navyBlue: "#00067B",
    dmSkyBlue: "#78B4FF",
    dmDarkSkyBlue: "#6597D6",
    dmCelestialBlue: "#4887D5",
    black: "#000000",
    darkGrey: "#333333",
    mediumGrey: "#666666",
    lightGrey: "#BBBBBB",
    groundGrey: "#ECEEF6",
    white: "#FFFFFF",
    dmPrimary: "#121212",
    dmSecondary: "#1E1E1E",
    ragRed: "#CF223F",
    dmRagRed: "#E3526A",
    lightRagRed: "#FDF4F5",
    dmDarkRagRed: "#251417",
    ragAmber: "#FCB900",
    lightRagAmber: "#FFFBF2",
    dmDarkRagAmber: "#292310",
    ragGreen: "#429448",
    lightRagGreen: "#F6FAF6",
    dmDarkRagGreen: "#171F17",
    blue: "#78B4FF",
    lightBlue: "#B2DBFF",
    darkBlue: "#1B406D",
    teal: "#63C082",
    lightTeal: "#86FBAD",
    darkTeal: "#1F4648",
    lime: "#A2CF40",
    lightLime: "#C4FB50",
    darkLime: "#384913",
    honey: "#FFA040",
    lightHoney: "#FFD6B2",
    darkHoney: "#5A330F",
  },
  ua = {
    height: "50px",
    paddingLeft: "32px",
    paddingRight: "32px",
    opacity: { disabled: 0.5 },
    color: {
      primary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      primaryAlt: { base: "#0000FF", hover: "#0000C2", active: "#00067B" },
      secondary: { base: "#0000FF", hover: "#0000C2", active: "#00067B" },
      secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
    },
    backgroundColor: {
      primary: { base: "#0000FF", hover: "#0000C2", active: "#00067B" },
      primaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondaryAlt: {
        base: "#00000000",
        hover: "#0000003d",
        active: "#00000052",
      },
    },
    stroke: {
      width: "2px",
      radius: "8px",
      color: {
        secondary: { base: "#0000FF", hover: "#0000C2", active: "#00067B" },
        secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      },
    },
    focusRing: {
      width: "2px",
      color: {
        primary: "#0000FF",
        primaryAlt: "#FFFFFF",
        secondary: "#0000FF",
        secondaryAlt: "#FFFFFF",
      },
      offset: "2px",
    },
  },
  fa = {
    core100: "#0000FF",
    core125: "#0000C2",
    core150: "#00067B",
    base100: "#FFFFFF",
    base150: "#ECEEF6",
    base200: "#BBBBBB",
    base400: "#666666",
    base500: "#333333",
    base700: "#000000",
    hueA100: "#B2DBFF",
    hueA300: "#78B4FF",
    hueA500: "#1B406D",
    hueB100: "#86FBAD",
    hueB300: "#63C082",
    hueB500: "#1F4648",
    hueC100: "#C4FB50",
    hueC300: "#A2CF40",
    hueC500: "#384913",
    hueD100: "#FFD6B2",
    hueD300: "#FFA040",
    hueD500: "#5A330F",
    ragRed: "#CF223F",
    ragRedText: "#CF223F",
    ragRedBase: "#FDF4F5",
    ragAmber: "#FCB900",
    ragAmberBase: "#FFFBF2",
    ragGreen: "#429448",
    ragGreenBase: "#F6FAF6",
  },
  xa = {
    adornment: Yo,
    alpha: Ko,
    charactersCounter: qo,
    checkbox: Jo,
    clearButton: Zo,
    fieldset: Qo,
    fontFamily: ea,
    fontSize: ta,
    formElementContainer: ra,
    input: oa,
    inputAlert: aa,
    inputLabelRight: na,
    inputLabelTop: ia,
    lineHeight: sa,
    outerField: la,
    radio: pa,
    tabs: da,
    textInput: ca,
    typography: ha,
    color: Fa,
    button: ua,
    themeColor: fa,
  },
  ga = { width: { small: "48px", large: "100px" }, color: { base: "#FFFFFF" } },
  Ba = {
    a0: 0,
    a16: 0.16,
    a24: 0.24,
    a32: 0.32,
    a48: 0.48,
    a64: 0.64,
    a100: 1,
  },
  ba = { typographyVariant: "bodyM", color: "#BBBBBB", textAlign: "right" },
  ya = {
    width: "24px",
    height: "24px",
    backgroundColor: {
      unchecked: { base: "#1E1E1E", hover: "#1E1E1E", disabled: "#1E1E1E" },
      checked: { base: "#78B4FF", hover: "#6597D6", disabled: "#78b4ff7a" },
    },
    stroke: {
      radius: "4px",
      width: {
        unchecked: { base: "1px", hover: "2px", disabled: "1px", error: "2px" },
        checked: { base: "0px", hover: "0px", disabled: "0px", error: "2px" },
      },
      color: {
        base: "#BBBBBB",
        hover: "#6597D6",
        disabled: "#666666",
        error: "#CF223F",
      },
    },
    icon: { width: "24px", height: "24px", color: { base: "#1E1E1E" } },
  },
  ma = { width: "48px", height: "48px", color: { base: "#FFFFFF" } },
  Sa = {
    gap: "8px",
    legend: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#ECEEF6", disabled: "#ECEEF6" },
    },
    legendHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#BBBBBB", disabled: "#ECEEF6" },
    },
    list: { gap: "16px" },
    nestedList: { paddingLeft: "32px" },
  },
  va = {
    OpenSansItalic: "OpenSans-Italic",
    OpenSansRegular: "OpenSans-Regular",
    OpenSansSemiBold: "OpenSans-SemiBold",
    OpenSansSemiBoldItalic: "OpenSans-SemiBoldItalic",
    OpenSansBold: "OpenSans-Bold",
    BankOfIrelandRegular: "BankofIrelandSerif-Rg",
    BankOfIrelandBold: "BankofIrelandSerif-Bd",
  },
  Ca = {
    fs32: "64px",
    fs28: "56px",
    fs24: "48px",
    fs20: "40px",
    fs16: "32px",
    fs14: "28px",
    fs12: "24px",
    fs10: "20px",
    fs09: "18px",
    fs08: "16px",
    fs07: "14px",
    fs06: "12px",
    fs05: "10px",
  },
  ka = { height: "48px", maxWidth: "320px" },
  Ea = {
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: { base: "#FFFFFF", disabled: "#BBBBBB", placeholder: "#BBBBBB" },
    backgroundColor: { base: "#1E1E1E", disabled: "#121212" },
    stroke: {
      width: "1px",
      style: "solid",
      color: {
        base: "#BBBBBB",
        focus: "#78B4FF",
        active: "#78B4FF",
        disabled: "#666666",
        error: "#CF223F",
        readOnly: "#121212",
      },
    },
  },
  wa = {
    gap: "8px",
    color: { error: "#E3526A" },
    iconWrapper: { height: "24px" },
    icon: { width: "20px", height: "20px", color: { error: "#CF223F" } },
  },
  Ra = {
    gap: "8px",
    label: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#ECEEF6", disabled: "#BBBBBB" },
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "#78B4FF",
      offset: "2px",
      radius: "4px",
    },
  },
  Oa = {
    gap: "8px",
    label: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#ECEEF6", disabled: "#ECEEF6" },
    },
    labelHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#BBBBBB", disabled: "#ECEEF6" },
    },
  },
  Aa = {
    lh38: "76px",
    lh34: "68px",
    lh30: "60px",
    lh26: "52px",
    lh22: "44px",
    lh20: "40px",
    lh18: "36px",
    lh15: "30px",
    lh14: "28px",
    lh12: "24px",
    lh10: "20px",
    lh09: "18px",
    lh08: "16px",
  },
  La = {
    backgroundColor: "#1E1E1E",
    radius: "10px",
    focusRing: {
      width: { base: "0px", focus: "2px" },
      offset: { base: "0px", focus: "2px" },
      style: "solid",
      color: "#78B4FF",
    },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
      style: "solid",
      color: {
        base: "#BBBBBB",
        disabled: "#666666",
        error: "#CF223F",
        focus: "#6597D6",
        hover: "#6597D6",
        readOnly: "#666666",
      },
    },
  },
  Ia = {
    width: "24px",
    height: "24px",
    backgroundColor: { base: "#1E1E1E" },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", disabled: "1px" },
      color: {
        base: "#BBBBBB",
        error: "#CF223F",
        hover: "#6597D6",
        disabled: "#666666",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      color: { base: "#78B4FF", hover: "#6597D6", disabled: "#78b4ff7a" },
    },
  },
  Da = {
    tab: {
      radius: { topLeft: "4px", topRight: "4px" },
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: { base: "none", hover: "#1E1E1E", active: "#1E1E1E" },
      label: {
        typographyVariant: "bodyL",
        fontFamily: "OpenSansSemiBold",
        color: {
          base: "#78B4FF",
          hover: "#6597D6",
          active: "#4887D5",
          disabled: "#BBBBBB",
        },
      },
      secondaryLabel: {
        typographyVariant: "bodyS",
        fontFamily: "OpenSansSemiBold",
        color: { base: "#BBBBBB", disabled: "#BBBBBB" },
      },
      icon: {
        width: "24px",
        height: "24px",
        color: {
          base: "#78B4FF",
          hover: "#6597D6",
          active: "#4887D5",
          disabled: "#BBBBBB",
        },
      },
      strokeTop: {
        width: "4px",
        style: "solid",
        color: { base: "#4887d500", active: "#4887D5" },
      },
      activeRing: {
        width: "1px",
        style: "solid",
        color: "#4887D5",
        offset: "-1px",
      },
      focusRing: {
        radius: {
          topLeft: "4px",
          topRight: "4px",
          bottomLeft: "0px",
          bottomRight: "0px",
        },
        width: "2px",
        style: "solid",
        color: "#78B4FF",
        offset: "-2px",
      },
      separator: { marginTop: "4px", width: "1px", color: "#666666" },
    },
    panel: {
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: "#1E1E1E",
      strokeTop: { width: "1px", style: "solid", color: "#666666" },
    },
  },
  Ma = {
    charactersCounter: {
      typographyVariant: "bodyM",
      color: "#BBBBBB",
      textAlign: "right",
    },
    outerField: {
      backgroundColor: "#1E1E1E",
      radius: "10px",
      focusRing: {
        width: { base: "0px", focus: "2px" },
        offset: { base: "0px", focus: "2px" },
        style: "solid",
        color: "#78B4FF",
      },
      stroke: {
        width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
        style: "solid",
        color: {
          base: "#BBBBBB",
          disabled: "#666666",
          error: "#CF223F",
          focus: "#6597D6",
          hover: "#6597D6",
          readOnly: "#666666",
        },
      },
    },
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    typographyVariant: "bodyM",
    color: {
      base: "#FFFFFF",
      disabled: "#BBBBBB",
      placeholder: "#BBBBBB",
      readOnly: "#BBBBBB",
    },
    backgroundColor: "#1E1E1E",
    prefix: { marginRight: "8px" },
    icon: { marginLeft: "8px" },
    radius: "10px",
  },
  $a = {
    fontSize: {
      displayXL: "64px",
      displayL: "56px",
      displayM: "48px",
      displayS: "40px",
      headlineL: "32px",
      headlineM: "28px",
      headlineS: "24px",
      headlineXS: "20px",
      titleL: "32px",
      titleM: "28px",
      titleS: "24px",
      titleXS: "20px",
      bodyL: "18px",
      bodyM: "16px",
      bodyS: "14px",
      labelM: "12px",
      labelS: "10px",
    },
    color: {
      displayXL: "#78B4FF",
      displayL: "#78B4FF",
      displayM: "#78B4FF",
      displayS: "#78B4FF",
      headlineL: "#78B4FF",
      headlineM: "#78B4FF",
      headlineS: "#78B4FF",
      headlineXS: "#78B4FF",
      titleL: "#FFFFFF",
      titleM: "#FFFFFF",
      titleS: "#FFFFFF",
      titleXS: "#FFFFFF",
      bodyL: "#FFFFFF",
      bodyM: "#FFFFFF",
      bodyS: "#FFFFFF",
      labelM: "#FFFFFF",
      labelS: "#FFFFFF",
    },
    lineHeight: {
      displayXL: "76px",
      displayL: "68px",
      displayM: "60px",
      displayS: "52px",
      headlineL: "44px",
      headlineM: "40px",
      headlineS: "36px",
      headlineXS: "30px",
      titleL: "44px",
      titleM: "40px",
      titleS: "36px",
      titleXS: "30px",
      bodyL: "28px",
      bodyM: "24px",
      bodyS: "20px",
      labelM: "18px",
      labelS: "16px",
    },
    fontFamily: {
      displayXL: "BankofIrelandSerif-Bd",
      displayL: "BankofIrelandSerif-Bd",
      displayM: "BankofIrelandSerif-Bd",
      displayS: "BankofIrelandSerif-Bd",
      headlineL: "BankofIrelandSerif-Bd",
      headlineM: "BankofIrelandSerif-Bd",
      headlineS: "BankofIrelandSerif-Bd",
      headlineXS: "BankofIrelandSerif-Bd",
      titleL: "OpenSans-SemiBold",
      titleM: "OpenSans-SemiBold",
      titleS: "OpenSans-SemiBold",
      titleXS: "OpenSans-SemiBold",
      bodyL: "OpenSans-Regular",
      bodyM: "OpenSans-Regular",
      bodyS: "OpenSans-Regular",
      labelM: "OpenSans-Regular",
      labelS: "OpenSans-Regular",
    },
  },
  Ta = {
    digitalBlue: "#0000FF",
    darkDigitalBlue: "#0000C2",
    navyBlue: "#00067B",
    dmSkyBlue: "#78B4FF",
    dmDarkSkyBlue: "#6597D6",
    dmCelestialBlue: "#4887D5",
    black: "#000000",
    darkGrey: "#333333",
    mediumGrey: "#666666",
    lightGrey: "#BBBBBB",
    groundGrey: "#ECEEF6",
    white: "#FFFFFF",
    dmPrimary: "#121212",
    dmSecondary: "#1E1E1E",
    ragRed: "#CF223F",
    dmRagRed: "#E3526A",
    lightRagRed: "#FDF4F5",
    dmDarkRagRed: "#251417",
    ragAmber: "#FCB900",
    lightRagAmber: "#FFFBF2",
    dmDarkRagAmber: "#292310",
    ragGreen: "#429448",
    lightRagGreen: "#F6FAF6",
    dmDarkRagGreen: "#171F17",
    blue: "#78B4FF",
    lightBlue: "#B2DBFF",
    darkBlue: "#1B406D",
    teal: "#63C082",
    lightTeal: "#86FBAD",
    darkTeal: "#1F4648",
    lime: "#A2CF40",
    lightLime: "#C4FB50",
    darkLime: "#384913",
    honey: "#FFA040",
    lightHoney: "#FFD6B2",
    darkHoney: "#5A330F",
  },
  _a = {
    height: "50px",
    paddingLeft: "32px",
    paddingRight: "32px",
    opacity: { disabled: 0.5 },
    color: {
      primary: { base: "#1E1E1E", hover: "#121212", active: "#000000" },
      primaryAlt: { base: "#78B4FF", hover: "#6597D6", active: "#4887D5" },
      secondary: { base: "#78B4FF", hover: "#6597D6", active: "#4887D5" },
      secondaryAlt: { base: "#1E1E1E", hover: "#121212", active: "#000000" },
    },
    backgroundColor: {
      primary: { base: "#78B4FF", hover: "#6597D6", active: "#4887D5" },
      primaryAlt: { base: "#1E1E1E", hover: "#121212", active: "#000000" },
      secondary: { base: "#1E1E1E", hover: "#121212", active: "#000000" },
      secondaryAlt: {
        base: "#00000000",
        hover: "#0000003d",
        active: "#00000052",
      },
    },
    stroke: {
      width: "2px",
      radius: "8px",
      color: {
        secondary: { base: "#78B4FF", hover: "#6597D6", active: "#4887D5" },
        secondaryAlt: { base: "#1E1E1E", hover: "#121212", active: "#000000" },
      },
    },
    focusRing: {
      width: "2px",
      color: {
        primary: "#78B4FF",
        primaryAlt: "#1E1E1E",
        secondary: "#78B4FF",
        secondaryAlt: "#1E1E1E",
      },
      offset: "2px",
    },
  },
  Pa = {
    core100: "#78B4FF",
    core125: "#6597D6",
    core150: "#4887D5",
    base100: "#1E1E1E",
    base150: "#121212",
    base200: "#666666",
    base400: "#BBBBBB",
    base500: "#ECEEF6",
    base700: "#FFFFFF",
    hueA100: "#1B406D",
    hueA300: "#78B4FF",
    hueA500: "#B2DBFF",
    hueB100: "#1F4648",
    hueB300: "#63C082",
    hueB500: "#86FBAD",
    hueC100: "#384913",
    hueC300: "#A2CF40",
    hueC500: "#C4FB50",
    hueD100: "#5A330F",
    hueD300: "#FFA040",
    hueD500: "#FFD6B2",
    ragRed: "#CF223F",
    ragRedText: "#E3526A",
    ragRedBase: "#251417",
    ragAmber: "#FCB900",
    ragAmberBase: "#292310",
    ragGreen: "#429448",
    ragGreenBase: "#171F17",
  },
  Ga = {
    adornment: ga,
    alpha: Ba,
    charactersCounter: ba,
    checkbox: ya,
    clearButton: ma,
    fieldset: Sa,
    fontFamily: va,
    fontSize: Ca,
    formElementContainer: ka,
    input: Ea,
    inputAlert: wa,
    inputLabelRight: Ra,
    inputLabelTop: Oa,
    lineHeight: Aa,
    outerField: La,
    radio: Ia,
    tabs: Da,
    textInput: Ma,
    typography: $a,
    color: Ta,
    button: _a,
    themeColor: Pa,
  },
  Ha = { width: { small: "48px", large: "100px" }, color: { base: "#000000" } },
  Xa = {
    a0: 0,
    a16: 0.16,
    a24: 0.24,
    a32: 0.32,
    a48: 0.48,
    a64: 0.64,
    a100: 1,
  },
  Na = { typographyVariant: "bodyM", color: "#666666", textAlign: "right" },
  Va = {
    width: "24px",
    height: "24px",
    backgroundColor: {
      unchecked: { base: "#FFFFFF", hover: "#FFFFFF", disabled: "#FFFFFF" },
      checked: { base: "#CF223F", hover: "#FCB900", disabled: "#cf223f7a" },
    },
    stroke: {
      radius: "4px",
      width: {
        unchecked: { base: "1px", hover: "2px", disabled: "1px", error: "2px" },
        checked: { base: "0px", hover: "0px", disabled: "0px", error: "2px" },
      },
      color: {
        base: "#666666",
        hover: "#FCB900",
        disabled: "#BBBBBB",
        error: "#CF223F",
      },
    },
    icon: { width: "24px", height: "24px", color: { base: "#FFFFFF" } },
  },
  za = { width: "48px", height: "48px", color: { base: "#000000" } },
  ja = {
    gap: "8px",
    legend: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    legendHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
    list: { gap: "16px" },
    nestedList: { paddingLeft: "32px" },
  },
  Wa = {
    OpenSansItalic: "OpenSans-Italic",
    OpenSansRegular: "OpenSans-Regular",
    OpenSansSemiBold: "OpenSans-SemiBold",
    OpenSansSemiBoldItalic: "OpenSans-SemiBoldItalic",
    OpenSansBold: "OpenSans-Bold",
    BankOfIrelandRegular: "BankofIrelandSerif-Rg",
    BankOfIrelandBold: "BankofIrelandSerif-Bd",
  },
  Ua = {
    fs32: "64px",
    fs28: "56px",
    fs24: "48px",
    fs20: "40px",
    fs16: "32px",
    fs14: "28px",
    fs12: "24px",
    fs10: "20px",
    fs09: "18px",
    fs08: "16px",
    fs07: "14px",
    fs06: "12px",
    fs05: "10px",
  },
  Ya = { height: "48px", maxWidth: "320px" },
  Ka = {
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: { base: "#000000", disabled: "#666666", placeholder: "#666666" },
    backgroundColor: { base: "#FFFFFF", disabled: "#ECEEF6" },
    stroke: {
      width: "1px",
      style: "solid",
      color: {
        base: "#666666",
        focus: "#CF223F",
        active: "#CF223F",
        disabled: "#BBBBBB",
        error: "#CF223F",
        readOnly: "#ECEEF6",
      },
    },
  },
  qa = {
    gap: "8px",
    color: { error: "#CF223F" },
    iconWrapper: { height: "24px" },
    icon: { width: "20px", height: "20px", color: { error: "#CF223F" } },
  },
  Ja = {
    gap: "8px",
    label: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#333333", disabled: "#666666" },
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "#CF223F",
      offset: "2px",
      radius: "4px",
    },
  },
  Za = {
    gap: "8px",
    label: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    labelHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
  },
  Qa = {
    lh38: "76px",
    lh34: "68px",
    lh30: "60px",
    lh26: "52px",
    lh22: "44px",
    lh20: "40px",
    lh18: "36px",
    lh15: "30px",
    lh14: "28px",
    lh12: "24px",
    lh10: "20px",
    lh09: "18px",
    lh08: "16px",
  },
  en = {
    backgroundColor: "#FFFFFF",
    radius: "10px",
    focusRing: {
      width: { base: "0px", focus: "2px" },
      offset: { base: "0px", focus: "2px" },
      style: "solid",
      color: "#CF223F",
    },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
      style: "solid",
      color: {
        base: "#666666",
        disabled: "#BBBBBB",
        error: "#CF223F",
        focus: "#FCB900",
        hover: "#FCB900",
        readOnly: "#BBBBBB",
      },
    },
  },
  tn = {
    width: "24px",
    height: "24px",
    backgroundColor: { base: "#FFFFFF" },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", disabled: "1px" },
      color: {
        base: "#666666",
        error: "#CF223F",
        hover: "#FCB900",
        disabled: "#BBBBBB",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      color: { base: "#CF223F", hover: "#FCB900", disabled: "#cf223f7a" },
    },
  },
  rn = {
    tab: {
      radius: { topLeft: "4px", topRight: "4px" },
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: { base: "none", hover: "#FFFFFF", active: "#FFFFFF" },
      label: {
        typographyVariant: "bodyL",
        fontFamily: "OpenSansSemiBold",
        color: {
          base: "#CF223F",
          hover: "#FCB900",
          active: "#429448",
          disabled: "#666666",
        },
      },
      secondaryLabel: {
        typographyVariant: "bodyS",
        fontFamily: "OpenSansSemiBold",
        color: { base: "#666666", disabled: "#666666" },
      },
      icon: {
        width: "24px",
        height: "24px",
        color: {
          base: "#CF223F",
          hover: "#FCB900",
          active: "#429448",
          disabled: "#666666",
        },
      },
      strokeTop: {
        width: "4px",
        style: "solid",
        color: { base: "#42944800", active: "#429448" },
      },
      activeRing: {
        width: "1px",
        style: "solid",
        color: "#429448",
        offset: "-1px",
      },
      focusRing: {
        radius: {
          topLeft: "4px",
          topRight: "4px",
          bottomLeft: "0px",
          bottomRight: "0px",
        },
        width: "2px",
        style: "solid",
        color: "#CF223F",
        offset: "-2px",
      },
      separator: { marginTop: "4px", width: "1px", color: "#BBBBBB" },
    },
    panel: {
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: "#FFFFFF",
      strokeTop: { width: "1px", style: "solid", color: "#BBBBBB" },
    },
  },
  on = {
    charactersCounter: {
      typographyVariant: "bodyM",
      color: "#666666",
      textAlign: "right",
    },
    outerField: {
      backgroundColor: "#FFFFFF",
      radius: "10px",
      focusRing: {
        width: { base: "0px", focus: "2px" },
        offset: { base: "0px", focus: "2px" },
        style: "solid",
        color: "#CF223F",
      },
      stroke: {
        width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
        style: "solid",
        color: {
          base: "#666666",
          disabled: "#BBBBBB",
          error: "#CF223F",
          focus: "#FCB900",
          hover: "#FCB900",
          readOnly: "#BBBBBB",
        },
      },
    },
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    typographyVariant: "bodyM",
    color: {
      base: "#000000",
      disabled: "#666666",
      placeholder: "#666666",
      readOnly: "#666666",
    },
    backgroundColor: "#FFFFFF",
    prefix: { marginRight: "8px" },
    icon: { marginLeft: "8px" },
    radius: "10px",
  },
  an = {
    fontSize: {
      displayXL: "64px",
      displayL: "56px",
      displayM: "48px",
      displayS: "40px",
      headlineL: "32px",
      headlineM: "28px",
      headlineS: "24px",
      headlineXS: "20px",
      titleL: "32px",
      titleM: "28px",
      titleS: "24px",
      titleXS: "20px",
      bodyL: "18px",
      bodyM: "16px",
      bodyS: "14px",
      labelM: "12px",
      labelS: "10px",
    },
    color: {
      displayXL: "#CF223F",
      displayL: "#CF223F",
      displayM: "#CF223F",
      displayS: "#CF223F",
      headlineL: "#CF223F",
      headlineM: "#CF223F",
      headlineS: "#CF223F",
      headlineXS: "#CF223F",
      titleL: "#000000",
      titleM: "#000000",
      titleS: "#000000",
      titleXS: "#000000",
      bodyL: "#000000",
      bodyM: "#000000",
      bodyS: "#000000",
      labelM: "#000000",
      labelS: "#000000",
    },
    lineHeight: {
      displayXL: "76px",
      displayL: "68px",
      displayM: "60px",
      displayS: "52px",
      headlineL: "44px",
      headlineM: "40px",
      headlineS: "36px",
      headlineXS: "30px",
      titleL: "44px",
      titleM: "40px",
      titleS: "36px",
      titleXS: "30px",
      bodyL: "28px",
      bodyM: "24px",
      bodyS: "20px",
      labelM: "18px",
      labelS: "16px",
    },
    fontFamily: {
      displayXL: "BankofIrelandSerif-Bd",
      displayL: "BankofIrelandSerif-Bd",
      displayM: "BankofIrelandSerif-Bd",
      displayS: "BankofIrelandSerif-Bd",
      headlineL: "BankofIrelandSerif-Bd",
      headlineM: "BankofIrelandSerif-Bd",
      headlineS: "BankofIrelandSerif-Bd",
      headlineXS: "BankofIrelandSerif-Bd",
      titleL: "OpenSans-SemiBold",
      titleM: "OpenSans-SemiBold",
      titleS: "OpenSans-SemiBold",
      titleXS: "OpenSans-SemiBold",
      bodyL: "OpenSans-Regular",
      bodyM: "OpenSans-Regular",
      bodyS: "OpenSans-Regular",
      labelM: "OpenSans-Regular",
      labelS: "OpenSans-Regular",
    },
  },
  nn = {
    digitalBlue: "#0000FF",
    darkDigitalBlue: "#0000C2",
    navyBlue: "#00067B",
    dmSkyBlue: "#78B4FF",
    dmDarkSkyBlue: "#6597D6",
    dmCelestialBlue: "#4887D5",
    black: "#000000",
    darkGrey: "#333333",
    mediumGrey: "#666666",
    lightGrey: "#BBBBBB",
    groundGrey: "#ECEEF6",
    white: "#FFFFFF",
    dmPrimary: "#121212",
    dmSecondary: "#1E1E1E",
    ragRed: "#CF223F",
    dmRagRed: "#E3526A",
    lightRagRed: "#FDF4F5",
    dmDarkRagRed: "#251417",
    ragAmber: "#FCB900",
    lightRagAmber: "#FFFBF2",
    dmDarkRagAmber: "#292310",
    ragGreen: "#429448",
    lightRagGreen: "#F6FAF6",
    dmDarkRagGreen: "#171F17",
    blue: "#78B4FF",
    lightBlue: "#B2DBFF",
    darkBlue: "#1B406D",
    teal: "#63C082",
    lightTeal: "#86FBAD",
    darkTeal: "#1F4648",
    lime: "#A2CF40",
    lightLime: "#C4FB50",
    darkLime: "#384913",
    honey: "#FFA040",
    lightHoney: "#FFD6B2",
    darkHoney: "#5A330F",
  },
  sn = {
    height: "50px",
    paddingLeft: "32px",
    paddingRight: "32px",
    opacity: { disabled: 0.5 },
    color: {
      primary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      primaryAlt: { base: "#CF223F", hover: "#FCB900", active: "#429448" },
      secondary: { base: "#CF223F", hover: "#FCB900", active: "#429448" },
      secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
    },
    backgroundColor: {
      primary: { base: "#CF223F", hover: "#FCB900", active: "#429448" },
      primaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondaryAlt: {
        base: "#00000000",
        hover: "#0000003d",
        active: "#00000052",
      },
    },
    stroke: {
      width: "2px",
      radius: "8px",
      color: {
        secondary: { base: "#CF223F", hover: "#FCB900", active: "#429448" },
        secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      },
    },
    focusRing: {
      width: "2px",
      color: {
        primary: "#CF223F",
        primaryAlt: "#FFFFFF",
        secondary: "#CF223F",
        secondaryAlt: "#FFFFFF",
      },
      offset: "2px",
    },
  },
  ln = {
    core100: "#CF223F",
    core125: "#FCB900",
    core150: "#429448",
    base100: "#FFFFFF",
    base150: "#ECEEF6",
    base200: "#BBBBBB",
    base400: "#666666",
    base500: "#333333",
    base700: "#000000",
    hueA100: "#B2DBFF",
    hueA300: "#78B4FF",
    hueA500: "#1B406D",
    hueB100: "#86FBAD",
    hueB300: "#63C082",
    hueB500: "#1F4648",
    hueC100: "#C4FB50",
    hueC300: "#A2CF40",
    hueC500: "#384913",
    hueD100: "#FFD6B2",
    hueD300: "#FFA040",
    hueD500: "#5A330F",
    ragRed: "#CF223F",
    ragRedText: "#CF223F",
    ragRedBase: "#FDF4F5",
    ragAmber: "#FCB900",
    ragAmberBase: "#FFFBF2",
    ragGreen: "#429448",
    ragGreenBase: "#F6FAF6",
  },
  pn = {
    adornment: Ha,
    alpha: Xa,
    charactersCounter: Na,
    checkbox: Va,
    clearButton: za,
    fieldset: ja,
    fontFamily: Wa,
    fontSize: Ua,
    formElementContainer: Ya,
    input: Ka,
    inputAlert: qa,
    inputLabelRight: Ja,
    inputLabelTop: Za,
    lineHeight: Qa,
    outerField: en,
    radio: tn,
    tabs: rn,
    textInput: on,
    typography: an,
    color: nn,
    button: sn,
    themeColor: ln,
  },
  dn = { width: { small: "48px", large: "100px" }, color: { base: "#000000" } },
  cn = {
    a0: 0,
    a16: 0.16,
    a24: 0.24,
    a32: 0.32,
    a48: 0.48,
    a64: 0.64,
    a100: 1,
  },
  hn = { typographyVariant: "bodyM", color: "#666666", textAlign: "right" },
  Fn = {
    width: "24px",
    height: "24px",
    backgroundColor: {
      unchecked: { base: "#FFFFFF", hover: "#FFFFFF", disabled: "#FFFFFF" },
      checked: { base: "#CF223F", hover: "#0000C2", disabled: "#cf223f7a" },
    },
    stroke: {
      radius: "4px",
      width: {
        unchecked: { base: "1px", hover: "2px", disabled: "1px", error: "2px" },
        checked: { base: "0px", hover: "0px", disabled: "0px", error: "2px" },
      },
      color: {
        base: "#666666",
        hover: "#0000C2",
        disabled: "#BBBBBB",
        error: "#CF223F",
      },
    },
    icon: { width: "24px", height: "24px", color: { base: "#FFFFFF" } },
  },
  un = { width: "48px", height: "48px", color: { base: "#000000" } },
  fn = {
    gap: "8px",
    legend: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    legendHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
    list: { gap: "16px" },
    nestedList: { paddingLeft: "32px" },
  },
  xn = {
    OpenSansItalic: "OpenSans-Italic",
    OpenSansRegular: "OpenSans-Regular",
    OpenSansSemiBold: "OpenSans-SemiBold",
    OpenSansSemiBoldItalic: "OpenSans-SemiBoldItalic",
    OpenSansBold: "OpenSans-Bold",
    BankOfIrelandRegular: "BankofIrelandSerif-Rg",
    BankOfIrelandBold: "BankofIrelandSerif-Bd",
  },
  gn = {
    fs32: "64px",
    fs28: "56px",
    fs24: "48px",
    fs20: "40px",
    fs16: "32px",
    fs14: "28px",
    fs12: "24px",
    fs10: "20px",
    fs09: "18px",
    fs08: "16px",
    fs07: "14px",
    fs06: "12px",
    fs05: "10px",
  },
  Bn = { height: "48px", maxWidth: "320px" },
  bn = {
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: { base: "#000000", disabled: "#666666", placeholder: "#666666" },
    backgroundColor: { base: "#FFFFFF", disabled: "#ECEEF6" },
    stroke: {
      width: "1px",
      style: "solid",
      color: {
        base: "#666666",
        focus: "#CF223F",
        active: "#CF223F",
        disabled: "#BBBBBB",
        error: "#CF223F",
        readOnly: "#ECEEF6",
      },
    },
  },
  yn = {
    gap: "8px",
    color: { error: "#CF223F" },
    iconWrapper: { height: "24px" },
    icon: { width: "20px", height: "20px", color: { error: "#CF223F" } },
  },
  mn = {
    gap: "8px",
    label: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#333333", disabled: "#666666" },
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "#CF223F",
      offset: "2px",
      radius: "4px",
    },
  },
  Sn = {
    gap: "8px",
    label: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    labelHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
  },
  vn = {
    lh38: "76px",
    lh34: "68px",
    lh30: "60px",
    lh26: "52px",
    lh22: "44px",
    lh20: "40px",
    lh18: "36px",
    lh15: "30px",
    lh14: "28px",
    lh12: "24px",
    lh10: "20px",
    lh09: "18px",
    lh08: "16px",
  },
  Cn = {
    backgroundColor: "#FFFFFF",
    radius: "10px",
    focusRing: {
      width: { base: "0px", focus: "2px" },
      offset: { base: "0px", focus: "2px" },
      style: "solid",
      color: "#CF223F",
    },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
      style: "solid",
      color: {
        base: "#666666",
        disabled: "#BBBBBB",
        error: "#CF223F",
        focus: "#0000C2",
        hover: "#0000C2",
        readOnly: "#BBBBBB",
      },
    },
  },
  kn = {
    width: "24px",
    height: "24px",
    backgroundColor: { base: "#FFFFFF" },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", disabled: "1px" },
      color: {
        base: "#666666",
        error: "#CF223F",
        hover: "#0000C2",
        disabled: "#BBBBBB",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      color: { base: "#CF223F", hover: "#0000C2", disabled: "#cf223f7a" },
    },
  },
  En = {
    tab: {
      radius: { topLeft: "4px", topRight: "4px" },
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: { base: "none", hover: "#FFFFFF", active: "#FFFFFF" },
      label: {
        typographyVariant: "bodyL",
        fontFamily: "OpenSansSemiBold",
        color: {
          base: "#CF223F",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      secondaryLabel: {
        typographyVariant: "bodyS",
        fontFamily: "OpenSansSemiBold",
        color: { base: "#666666", disabled: "#666666" },
      },
      icon: {
        width: "24px",
        height: "24px",
        color: {
          base: "#CF223F",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      strokeTop: {
        width: "4px",
        style: "solid",
        color: { base: "#00067b00", active: "#00067B" },
      },
      activeRing: {
        width: "1px",
        style: "solid",
        color: "#00067B",
        offset: "-1px",
      },
      focusRing: {
        radius: {
          topLeft: "4px",
          topRight: "4px",
          bottomLeft: "0px",
          bottomRight: "0px",
        },
        width: "2px",
        style: "solid",
        color: "#CF223F",
        offset: "-2px",
      },
      separator: { marginTop: "4px", width: "1px", color: "#BBBBBB" },
    },
    panel: {
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: "#FFFFFF",
      strokeTop: { width: "1px", style: "solid", color: "#BBBBBB" },
    },
  },
  wn = {
    charactersCounter: {
      typographyVariant: "bodyM",
      color: "#666666",
      textAlign: "right",
    },
    outerField: {
      backgroundColor: "#FFFFFF",
      radius: "10px",
      focusRing: {
        width: { base: "0px", focus: "2px" },
        offset: { base: "0px", focus: "2px" },
        style: "solid",
        color: "#CF223F",
      },
      stroke: {
        width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
        style: "solid",
        color: {
          base: "#666666",
          disabled: "#BBBBBB",
          error: "#CF223F",
          focus: "#0000C2",
          hover: "#0000C2",
          readOnly: "#BBBBBB",
        },
      },
    },
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    typographyVariant: "bodyM",
    color: {
      base: "#000000",
      disabled: "#666666",
      placeholder: "#666666",
      readOnly: "#666666",
    },
    backgroundColor: "#FFFFFF",
    prefix: { marginRight: "8px" },
    icon: { marginLeft: "8px" },
    radius: "10px",
  },
  Rn = {
    fontSize: {
      displayXL: "64px",
      displayL: "56px",
      displayM: "48px",
      displayS: "40px",
      headlineL: "32px",
      headlineM: "28px",
      headlineS: "24px",
      headlineXS: "20px",
      titleL: "32px",
      titleM: "28px",
      titleS: "24px",
      titleXS: "20px",
      bodyL: "18px",
      bodyM: "16px",
      bodyS: "14px",
      labelM: "12px",
      labelS: "10px",
    },
    color: {
      displayXL: "#CF223F",
      displayL: "#CF223F",
      displayM: "#CF223F",
      displayS: "#CF223F",
      headlineL: "#CF223F",
      headlineM: "#CF223F",
      headlineS: "#CF223F",
      headlineXS: "#CF223F",
      titleL: "#000000",
      titleM: "#000000",
      titleS: "#000000",
      titleXS: "#000000",
      bodyL: "#000000",
      bodyM: "#000000",
      bodyS: "#000000",
      labelM: "#000000",
      labelS: "#000000",
    },
    lineHeight: {
      displayXL: "76px",
      displayL: "68px",
      displayM: "60px",
      displayS: "52px",
      headlineL: "44px",
      headlineM: "40px",
      headlineS: "36px",
      headlineXS: "30px",
      titleL: "44px",
      titleM: "40px",
      titleS: "36px",
      titleXS: "30px",
      bodyL: "28px",
      bodyM: "24px",
      bodyS: "20px",
      labelM: "18px",
      labelS: "16px",
    },
    fontFamily: {
      displayXL: "BankofIrelandSerif-Bd",
      displayL: "BankofIrelandSerif-Bd",
      displayM: "BankofIrelandSerif-Bd",
      displayS: "BankofIrelandSerif-Bd",
      headlineL: "BankofIrelandSerif-Bd",
      headlineM: "BankofIrelandSerif-Bd",
      headlineS: "BankofIrelandSerif-Bd",
      headlineXS: "BankofIrelandSerif-Bd",
      titleL: "OpenSans-SemiBold",
      titleM: "OpenSans-SemiBold",
      titleS: "OpenSans-SemiBold",
      titleXS: "OpenSans-SemiBold",
      bodyL: "OpenSans-Regular",
      bodyM: "OpenSans-Regular",
      bodyS: "OpenSans-Regular",
      labelM: "OpenSans-Regular",
      labelS: "OpenSans-Regular",
    },
  },
  On = {
    digitalBlue: "#0000FF",
    darkDigitalBlue: "#0000C2",
    navyBlue: "#00067B",
    dmSkyBlue: "#78B4FF",
    dmDarkSkyBlue: "#6597D6",
    dmCelestialBlue: "#4887D5",
    black: "#000000",
    darkGrey: "#333333",
    mediumGrey: "#666666",
    lightGrey: "#BBBBBB",
    groundGrey: "#ECEEF6",
    white: "#FFFFFF",
    dmPrimary: "#121212",
    dmSecondary: "#1E1E1E",
    ragRed: "#CF223F",
    dmRagRed: "#E3526A",
    lightRagRed: "#FDF4F5",
    dmDarkRagRed: "#251417",
    ragAmber: "#FCB900",
    lightRagAmber: "#FFFBF2",
    dmDarkRagAmber: "#292310",
    ragGreen: "#429448",
    lightRagGreen: "#F6FAF6",
    dmDarkRagGreen: "#171F17",
    blue: "#78B4FF",
    lightBlue: "#B2DBFF",
    darkBlue: "#1B406D",
    teal: "#63C082",
    lightTeal: "#86FBAD",
    darkTeal: "#1F4648",
    lime: "#A2CF40",
    lightLime: "#C4FB50",
    darkLime: "#384913",
    honey: "#FFA040",
    lightHoney: "#FFD6B2",
    darkHoney: "#5A330F",
  },
  An = {
    height: "50px",
    paddingLeft: "32px",
    paddingRight: "32px",
    opacity: { disabled: 0.5 },
    color: {
      primary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      primaryAlt: { base: "#CF223F", hover: "#0000C2", active: "#00067B" },
      secondary: { base: "#CF223F", hover: "#0000C2", active: "#00067B" },
      secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
    },
    backgroundColor: {
      primary: { base: "#CF223F", hover: "#0000C2", active: "#00067B" },
      primaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      secondaryAlt: {
        base: "#00000000",
        hover: "#0000003d",
        active: "#00000052",
      },
    },
    stroke: {
      width: "2px",
      radius: "8px",
      color: {
        secondary: { base: "#CF223F", hover: "#0000C2", active: "#00067B" },
        secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#BBBBBB" },
      },
    },
    focusRing: {
      width: "2px",
      color: {
        primary: "#CF223F",
        primaryAlt: "#FFFFFF",
        secondary: "#CF223F",
        secondaryAlt: "#FFFFFF",
      },
      offset: "2px",
    },
  },
  Ln = {
    core100: "#CF223F",
    core125: "#0000C2",
    core150: "#00067B",
    base100: "#FFFFFF",
    base150: "#ECEEF6",
    base200: "#BBBBBB",
    base400: "#666666",
    base500: "#333333",
    base700: "#000000",
    hueA100: "#B2DBFF",
    hueA300: "#78B4FF",
    hueA500: "#1B406D",
    hueB100: "#86FBAD",
    hueB300: "#63C082",
    hueB500: "#1F4648",
    hueC100: "#C4FB50",
    hueC300: "#A2CF40",
    hueC500: "#384913",
    hueD100: "#FFD6B2",
    hueD300: "#FFA040",
    hueD500: "#5A330F",
    ragRed: "#CF223F",
    ragRedText: "#CF223F",
    ragRedBase: "#FDF4F5",
    ragAmber: "#FCB900",
    ragAmberBase: "#FFFBF2",
    ragGreen: "#429448",
    ragGreenBase: "#F6FAF6",
  },
  In = {
    adornment: dn,
    alpha: cn,
    charactersCounter: hn,
    checkbox: Fn,
    clearButton: un,
    fieldset: fn,
    fontFamily: xn,
    fontSize: gn,
    formElementContainer: Bn,
    input: bn,
    inputAlert: yn,
    inputLabelRight: mn,
    inputLabelTop: Sn,
    lineHeight: vn,
    outerField: Cn,
    radio: kn,
    tabs: En,
    textInput: wn,
    typography: Rn,
    color: On,
    button: An,
    themeColor: Ln,
  },
  Dn = { width: { small: "48px", large: "100px" }, color: { base: "#000000" } },
  Mn = {
    a0: 0,
    a16: 0.16,
    a24: 0.24,
    a32: 0.32,
    a48: 0.48,
    a64: 0.64,
    a100: 1,
  },
  $n = { typographyVariant: "bodyM", color: "#666666", textAlign: "right" },
  Tn = {
    width: "24px",
    height: "24px",
    backgroundColor: {
      unchecked: { base: "#FFFFFF", hover: "#FFFFFF", disabled: "#FFFFFF" },
      checked: { base: "#429448", hover: "#0000C2", disabled: "#4294487a" },
    },
    stroke: {
      radius: "4px",
      width: {
        unchecked: { base: "1px", hover: "2px", disabled: "1px", error: "2px" },
        checked: { base: "0px", hover: "0px", disabled: "0px", error: "2px" },
      },
      color: {
        base: "#666666",
        hover: "#0000C2",
        disabled: "#BBBBBB",
        error: "#CF223F",
      },
    },
    icon: { width: "24px", height: "24px", color: { base: "#FFFFFF" } },
  },
  _n = { width: "48px", height: "48px", color: { base: "#000000" } },
  Pn = {
    gap: "8px",
    legend: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    legendHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
    list: { gap: "16px" },
    nestedList: { paddingLeft: "32px" },
  },
  Gn = {
    OpenSansItalic: "OpenSans-Italic",
    OpenSansRegular: "OpenSans-Regular",
    OpenSansSemiBold: "OpenSans-SemiBold",
    OpenSansSemiBoldItalic: "OpenSans-SemiBoldItalic",
    OpenSansBold: "OpenSans-Bold",
    BankOfIrelandRegular: "BankofIrelandSerif-Rg",
    BankOfIrelandBold: "BankofIrelandSerif-Bd",
  },
  Hn = {
    fs32: "64px",
    fs28: "56px",
    fs24: "48px",
    fs20: "40px",
    fs16: "32px",
    fs14: "28px",
    fs12: "24px",
    fs10: "20px",
    fs09: "18px",
    fs08: "16px",
    fs07: "14px",
    fs06: "12px",
    fs05: "10px",
  },
  Xn = { height: "48px", maxWidth: "320px" },
  Nn = {
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: { base: "#000000", disabled: "#666666", placeholder: "#666666" },
    backgroundColor: { base: "#FFFFFF", disabled: "#ECEEF6" },
    stroke: {
      width: "1px",
      style: "solid",
      color: {
        base: "#666666",
        focus: "#429448",
        active: "#429448",
        disabled: "#BBBBBB",
        error: "#CF223F",
        readOnly: "#ECEEF6",
      },
    },
  },
  Vn = {
    gap: "8px",
    color: { error: "#CF223F" },
    iconWrapper: { height: "24px" },
    icon: { width: "20px", height: "20px", color: { error: "#CF223F" } },
  },
  zn = {
    gap: "8px",
    label: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#333333", disabled: "#666666" },
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "#429448",
      offset: "2px",
      radius: "4px",
    },
  },
  jn = {
    gap: "8px",
    label: {
      typographyVariant: "bodyL",
      fontFamily: "OpenSansSemiBold",
      color: { base: "#333333", disabled: "#333333" },
    },
    labelHint: {
      typographyVariant: "bodyM",
      fontFamily: "OpenSans",
      color: { base: "#666666", disabled: "#333333" },
    },
  },
  Wn = {
    lh38: "76px",
    lh34: "68px",
    lh30: "60px",
    lh26: "52px",
    lh22: "44px",
    lh20: "40px",
    lh18: "36px",
    lh15: "30px",
    lh14: "28px",
    lh12: "24px",
    lh10: "20px",
    lh09: "18px",
    lh08: "16px",
  },
  Un = {
    backgroundColor: "#FFFFFF",
    radius: "10px",
    focusRing: {
      width: { base: "0px", focus: "2px" },
      offset: { base: "0px", focus: "2px" },
      style: "solid",
      color: "#429448",
    },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
      style: "solid",
      color: {
        base: "#666666",
        disabled: "#BBBBBB",
        error: "#CF223F",
        focus: "#0000C2",
        hover: "#0000C2",
        readOnly: "#BBBBBB",
      },
    },
  },
  Yn = {
    width: "24px",
    height: "24px",
    backgroundColor: { base: "#FFFFFF" },
    stroke: {
      width: { base: "1px", error: "2px", hover: "2px", disabled: "1px" },
      color: {
        base: "#666666",
        error: "#CF223F",
        hover: "#0000C2",
        disabled: "#BBBBBB",
      },
    },
    icon: {
      width: "16px",
      height: "16px",
      color: { base: "#429448", hover: "#0000C2", disabled: "#4294487a" },
    },
  },
  Kn = {
    tab: {
      radius: { topLeft: "4px", topRight: "4px" },
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: { base: "none", hover: "#FFFFFF", active: "#FFFFFF" },
      label: {
        typographyVariant: "bodyL",
        fontFamily: "OpenSansSemiBold",
        color: {
          base: "#429448",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      secondaryLabel: {
        typographyVariant: "bodyS",
        fontFamily: "OpenSansSemiBold",
        color: { base: "#666666", disabled: "#666666" },
      },
      icon: {
        width: "24px",
        height: "24px",
        color: {
          base: "#429448",
          hover: "#0000C2",
          active: "#00067B",
          disabled: "#666666",
        },
      },
      strokeTop: {
        width: "4px",
        style: "solid",
        color: { base: "#00067b00", active: "#00067B" },
      },
      activeRing: {
        width: "1px",
        style: "solid",
        color: "#00067B",
        offset: "-1px",
      },
      focusRing: {
        radius: {
          topLeft: "4px",
          topRight: "4px",
          bottomLeft: "0px",
          bottomRight: "0px",
        },
        width: "2px",
        style: "solid",
        color: "#429448",
        offset: "-2px",
      },
      separator: { marginTop: "4px", width: "1px", color: "#BBBBBB" },
    },
    panel: {
      padding: {
        top: "12px",
        bottom: "12px",
        left: { base: "24px", withIcon: "16px" },
        right: { base: "24px", withIcon: "16px" },
      },
      backgroundColor: "#FFFFFF",
      strokeTop: { width: "1px", style: "solid", color: "#BBBBBB" },
    },
  },
  qn = {
    charactersCounter: {
      typographyVariant: "bodyM",
      color: "#666666",
      textAlign: "right",
    },
    outerField: {
      backgroundColor: "#FFFFFF",
      radius: "10px",
      focusRing: {
        width: { base: "0px", focus: "2px" },
        offset: { base: "0px", focus: "2px" },
        style: "solid",
        color: "#429448",
      },
      stroke: {
        width: { base: "1px", error: "2px", hover: "2px", focus: "2px" },
        style: "solid",
        color: {
          base: "#666666",
          disabled: "#BBBBBB",
          error: "#CF223F",
          focus: "#0000C2",
          hover: "#0000C2",
          readOnly: "#BBBBBB",
        },
      },
    },
    height: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
    typographyVariant: "bodyM",
    color: {
      base: "#000000",
      disabled: "#666666",
      placeholder: "#666666",
      readOnly: "#666666",
    },
    backgroundColor: "#FFFFFF",
    prefix: { marginRight: "8px" },
    icon: { marginLeft: "8px" },
    radius: "10px",
  },
  Jn = {
    fontSize: {
      displayXL: "64px",
      displayL: "56px",
      displayM: "48px",
      displayS: "40px",
      headlineL: "32px",
      headlineM: "28px",
      headlineS: "24px",
      headlineXS: "20px",
      titleL: "32px",
      titleM: "28px",
      titleS: "24px",
      titleXS: "20px",
      bodyL: "18px",
      bodyM: "16px",
      bodyS: "14px",
      labelM: "12px",
      labelS: "10px",
    },
    color: {
      displayXL: "#429448",
      displayL: "#429448",
      displayM: "#429448",
      displayS: "#429448",
      headlineL: "#429448",
      headlineM: "#429448",
      headlineS: "#429448",
      headlineXS: "#429448",
      titleL: "#000000",
      titleM: "#000000",
      titleS: "#000000",
      titleXS: "#000000",
      bodyL: "#000000",
      bodyM: "#000000",
      bodyS: "#000000",
      labelM: "#000000",
      labelS: "#000000",
    },
    lineHeight: {
      displayXL: "76px",
      displayL: "68px",
      displayM: "60px",
      displayS: "52px",
      headlineL: "44px",
      headlineM: "40px",
      headlineS: "36px",
      headlineXS: "30px",
      titleL: "44px",
      titleM: "40px",
      titleS: "36px",
      titleXS: "30px",
      bodyL: "28px",
      bodyM: "24px",
      bodyS: "20px",
      labelM: "18px",
      labelS: "16px",
    },
    fontFamily: {
      displayXL: "BankofIrelandSerif-Bd",
      displayL: "BankofIrelandSerif-Bd",
      displayM: "BankofIrelandSerif-Bd",
      displayS: "BankofIrelandSerif-Bd",
      headlineL: "BankofIrelandSerif-Bd",
      headlineM: "BankofIrelandSerif-Bd",
      headlineS: "BankofIrelandSerif-Bd",
      headlineXS: "BankofIrelandSerif-Bd",
      titleL: "OpenSans-SemiBold",
      titleM: "OpenSans-SemiBold",
      titleS: "OpenSans-SemiBold",
      titleXS: "OpenSans-SemiBold",
      bodyL: "OpenSans-Regular",
      bodyM: "OpenSans-Regular",
      bodyS: "OpenSans-Regular",
      labelM: "OpenSans-Regular",
      labelS: "OpenSans-Regular",
    },
  },
  Zn = {
    digitalBlue: "#0000FF",
    darkDigitalBlue: "#0000C2",
    navyBlue: "#00067B",
    dmSkyBlue: "#78B4FF",
    dmDarkSkyBlue: "#6597D6",
    dmCelestialBlue: "#4887D5",
    black: "#000000",
    darkGrey: "#333333",
    mediumGrey: "#666666",
    lightGrey: "#BBBBBB",
    groundGrey: "#ECEEF6",
    white: "#FFFFFF",
    dmPrimary: "#121212",
    dmSecondary: "#1E1E1E",
    ragRed: "#CF223F",
    dmRagRed: "#E3526A",
    lightRagRed: "#FDF4F5",
    dmDarkRagRed: "#251417",
    ragAmber: "#FCB900",
    lightRagAmber: "#FFFBF2",
    dmDarkRagAmber: "#292310",
    ragGreen: "#429448",
    lightRagGreen: "#F6FAF6",
    dmDarkRagGreen: "#171F17",
    blue: "#78B4FF",
    lightBlue: "#B2DBFF",
    darkBlue: "#1B406D",
    teal: "#63C082",
    lightTeal: "#86FBAD",
    darkTeal: "#1F4648",
    lime: "#A2CF40",
    lightLime: "#C4FB50",
    darkLime: "#384913",
    honey: "#FFA040",
    lightHoney: "#FFD6B2",
    darkHoney: "#5A330F",
  },
  Qn = {
    height: "50px",
    paddingLeft: "32px",
    paddingRight: "32px",
    opacity: { disabled: 0.5 },
    color: {
      primary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#000000" },
      primaryAlt: { base: "#429448", hover: "#0000C2", active: "#00067B" },
      secondary: { base: "#429448", hover: "#0000C2", active: "#00067B" },
      secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#000000" },
    },
    backgroundColor: {
      primary: { base: "#429448", hover: "#0000C2", active: "#00067B" },
      primaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#000000" },
      secondary: { base: "#FFFFFF", hover: "#ECEEF6", active: "#000000" },
      secondaryAlt: {
        base: "#00000000",
        hover: "#0000003d",
        active: "#00000052",
      },
    },
    stroke: {
      width: "2px",
      radius: "8px",
      color: {
        secondary: { base: "#429448", hover: "#0000C2", active: "#00067B" },
        secondaryAlt: { base: "#FFFFFF", hover: "#ECEEF6", active: "#000000" },
      },
    },
    focusRing: {
      width: "2px",
      color: {
        primary: "#429448",
        primaryAlt: "#FFFFFF",
        secondary: "#429448",
        secondaryAlt: "#FFFFFF",
      },
      offset: "2px",
    },
  },
  ei = {
    core100: "#429448",
    core125: "#0000C2",
    core150: "#00067B",
    base100: "#FFFFFF",
    base150: "#ECEEF6",
    base200: "#BBBBBB",
    base400: "#666666",
    base500: "#333333",
    base700: "#000000",
    hueA100: "#B2DBFF",
    hueA300: "#78B4FF",
    hueA500: "#1B406D",
    hueB100: "#86FBAD",
    hueB300: "#63C082",
    hueB500: "#1F4648",
    hueC100: "#C4FB50",
    hueC300: "#A2CF40",
    hueC500: "#384913",
    hueD100: "#FFD6B2",
    hueD300: "#FFA040",
    hueD500: "#5A330F",
    ragRed: "#CF223F",
    ragRedText: "#CF223F",
    ragRedBase: "#FDF4F5",
    ragAmber: "#FCB900",
    ragAmberBase: "#FFFBF2",
    ragGreen: "#429448",
    ragGreenBase: "#F6FAF6",
  },
  ti = {
    adornment: Dn,
    alpha: Mn,
    charactersCounter: $n,
    checkbox: Tn,
    clearButton: _n,
    fieldset: Pn,
    fontFamily: Gn,
    fontSize: Hn,
    formElementContainer: Xn,
    input: Nn,
    inputAlert: Vn,
    inputLabelRight: zn,
    inputLabelTop: jn,
    lineHeight: Wn,
    outerField: Un,
    radio: Yn,
    tabs: Kn,
    textInput: qn,
    typography: Jn,
    color: Zn,
    button: Qn,
    themeColor: ei,
  };
var ri = No()(
    Uo((e) => ({ theme: void 0, updateTheme: (t) => e({ theme: t }) }), {
      name: "boi-react-design-tokens-store",
    })
  ),
  mt = ri,
  hi = "boi",
  Fi = "light",
  ui = ["boi", "boiKids"],
  St = ["light", "dark", "pride"],
  oi = ["light", "dark"],
  Je = { light: xa, dark: Ga, pride: pn },
  ai = { light: In, dark: ti },
  tr = D.createContext({}),
  He = window.matchMedia("(prefers-color-scheme: light)");
function ni(e) {
  const { theme: t, themeTokens: r = Je, children: o } = e,
    [a, n] = D.useState(() => (He.matches ? "light" : "dark")),
    i = mt((d) => d.theme),
    p = mt((d) => d.updateTheme);
  D.useEffect(() => {
    function d(F) {
      n(F.matches ? "light" : "dark");
    }
    return (
      He.addEventListener("change", d),
      () => He.removeEventListener("change", d)
    );
  }, []);
  const l = t || i || a,
    s = r[l] || r.light;
  return Xe.jsx(tr.Provider, {
    value: { tokens: s, theme: l, updateTheme: p },
    children: o,
  });
}
function fi() {
  return D.useContext(tr);
}
var ii = Bo`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`,
  si = ii;
function xi(e) {
  return e === "boi" ? St : e === "boiKids" ? oi : St;
}
function li(e) {
  return e === "boi" ? Je : e === "boiKids" ? ai : Je;
}
function pi(e) {
  const { brandTheme: t, children: r } = e,
    [o, a] = t.split("::"),
    n = li(o);
  return Xe.jsxs(ni, {
    theme: a,
    themeTokens: n,
    children: [Xe.jsx(si, {}), r],
  });
}
var gi = pi;
export {
  ui as B,
  hi as D,
  xo as a,
  Kt as b,
  Fi as c,
  xi as d,
  gi as e,
  li as g,
  Xe as j,
  fi as u,
};
