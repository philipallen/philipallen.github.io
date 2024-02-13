import { g as le } from "./commonjsHelpers-725317a4.js";
import {
  b as ie,
  c as G,
  d as ce,
  e as oe,
  f as fe,
  g as pe,
  h as me,
  j as $,
  k as ve,
  i as ge,
  l as V,
  a as Y,
  m as ye,
  n as de,
  o as _e,
  p as Te,
  q as be,
  r as Ae,
  s as $e,
} from "./doctrine-744fe685.js";
var L = ie,
  Pe = 1,
  De = Object.prototype,
  Oe = De.hasOwnProperty;
function he(e, r, n, a, t, u) {
  var l = n & Pe,
    s = L(e),
    i = s.length,
    f = L(r),
    p = f.length;
  if (i != p && !l) return !1;
  for (var m = i; m--; ) {
    var o = s[m];
    if (!(l ? o in r : Oe.call(r, o))) return !1;
  }
  var y = u.get(e),
    d = u.get(r);
  if (y && d) return y == r && d == e;
  var v = !0;
  u.set(e, r), u.set(r, e);
  for (var _ = l; ++m < i; ) {
    o = s[m];
    var P = e[o],
      D = r[o];
    if (a) var R = l ? a(D, P, o, r, e, u) : a(P, D, o, e, r, u);
    if (!(R === void 0 ? P === D || t(P, D, n, a, u) : R)) {
      v = !1;
      break;
    }
    _ || (_ = o == "constructor");
  }
  if (v && !_) {
    var O = e.constructor,
      h = r.constructor;
    O != h &&
      "constructor" in e &&
      "constructor" in r &&
      !(
        typeof O == "function" &&
        O instanceof O &&
        typeof h == "function" &&
        h instanceof h
      ) &&
      (v = !1);
  }
  return u.delete(e), u.delete(r), v;
}
var we = he,
  I = G,
  Se = ce,
  Ee = oe,
  Ie = we,
  C = fe,
  M = $,
  J = pe,
  Ne = me,
  xe = 1,
  K = "[object Arguments]",
  q = "[object Array]",
  w = "[object Object]",
  Fe = Object.prototype,
  U = Fe.hasOwnProperty;
function Re(e, r, n, a, t, u) {
  var l = M(e),
    s = M(r),
    i = l ? q : C(e),
    f = s ? q : C(r);
  (i = i == K ? w : i), (f = f == K ? w : f);
  var p = i == w,
    m = f == w,
    o = i == f;
  if (o && J(e)) {
    if (!J(r)) return !1;
    (l = !0), (p = !1);
  }
  if (o && !p)
    return (
      u || (u = new I()),
      l || Ne(e) ? Se(e, r, n, a, t, u) : Ee(e, r, i, n, a, t, u)
    );
  if (!(n & xe)) {
    var y = p && U.call(e, "__wrapped__"),
      d = m && U.call(r, "__wrapped__");
    if (y || d) {
      var v = y ? e.value() : e,
        _ = d ? r.value() : r;
      return u || (u = new I()), t(v, _, n, a, u);
    }
  }
  return o ? (u || (u = new I()), Ie(e, r, n, a, t, u)) : !1;
}
var Le = Re,
  Ce = Le,
  B = ve;
function H(e, r, n, a, t) {
  return e === r
    ? !0
    : e == null || r == null || (!B(e) && !B(r))
    ? e !== e && r !== r
    : Ce(e, r, n, a, H, t);
}
var Q = H,
  Me = G,
  Je = Q,
  Ke = 1,
  qe = 2;
function Ue(e, r, n, a) {
  var t = n.length,
    u = t,
    l = !a;
  if (e == null) return !u;
  for (e = Object(e); t--; ) {
    var s = n[t];
    if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++t < u; ) {
    s = n[t];
    var i = s[0],
      f = e[i],
      p = s[1];
    if (l && s[2]) {
      if (f === void 0 && !(i in e)) return !1;
    } else {
      var m = new Me();
      if (a) var o = a(f, p, i, e, r, m);
      if (!(o === void 0 ? Je(p, f, Ke | qe, a, m) : o)) return !1;
    }
  }
  return !0;
}
var Be = Ue,
  Ge = ge;
function Ve(e) {
  return e === e && !Ge(e);
}
var X = Ve,
  Ye = X,
  He = V;
function Qe(e) {
  for (var r = He(e), n = r.length; n--; ) {
    var a = r[n],
      t = e[a];
    r[n] = [a, t, Ye(t)];
  }
  return r;
}
var Xe = Qe;
function We(e, r) {
  return function (n) {
    return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
  };
}
var W = We,
  Ze = Be,
  ke = Xe,
  ze = W;
function je(e) {
  var r = ke(e);
  return r.length == 1 && r[0][2]
    ? ze(r[0][0], r[0][1])
    : function (n) {
        return n === e || Ze(n, e, r);
      };
}
var er = je,
  rr = $,
  nr = Y,
  ar = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  tr = /^\w*$/;
function ur(e, r) {
  if (rr(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || nr(e)
    ? !0
    : tr.test(e) || !ar.test(e) || (r != null && e in Object(r));
}
var N = ur,
  sr = ye;
function lr(e) {
  return e == null ? "" : sr(e);
}
var ir = lr,
  cr = $,
  or = N,
  fr = de,
  pr = ir;
function mr(e, r) {
  return cr(e) ? e : or(e, r) ? [e] : fr(pr(e));
}
var Z = mr,
  vr = Y,
  gr = 1 / 0;
function yr(e) {
  if (typeof e == "string" || vr(e)) return e;
  var r = e + "";
  return r == "0" && 1 / e == -gr ? "-0" : r;
}
var S = yr,
  dr = Z,
  _r = S;
function Tr(e, r) {
  r = dr(r, e);
  for (var n = 0, a = r.length; e != null && n < a; ) e = e[_r(r[n++])];
  return n && n == a ? e : void 0;
}
var k = Tr,
  br = k;
function Ar(e, r, n) {
  var a = e == null ? void 0 : br(e, r);
  return a === void 0 ? n : a;
}
var $r = Ar;
function Pr(e, r) {
  return e != null && r in Object(e);
}
var Dr = Pr,
  Or = Z,
  hr = _e,
  wr = $,
  Sr = Te,
  Er = be,
  Ir = S;
function Nr(e, r, n) {
  r = Or(r, e);
  for (var a = -1, t = r.length, u = !1; ++a < t; ) {
    var l = Ir(r[a]);
    if (!(u = e != null && n(e, l))) break;
    e = e[l];
  }
  return u || ++a != t
    ? u
    : ((t = e == null ? 0 : e.length),
      !!t && Er(t) && Sr(l, t) && (wr(e) || hr(e)));
}
var xr = Nr,
  Fr = Dr,
  Rr = xr;
function Lr(e, r) {
  return e != null && Rr(e, r, Fr);
}
var Cr = Lr,
  Mr = Q,
  Jr = $r,
  Kr = Cr,
  qr = N,
  Ur = X,
  Br = W,
  Gr = S,
  Vr = 1,
  Yr = 2;
function Hr(e, r) {
  return qr(e) && Ur(r)
    ? Br(Gr(e), r)
    : function (n) {
        var a = Jr(n, e);
        return a === void 0 && a === r ? Kr(n, e) : Mr(r, a, Vr | Yr);
      };
}
var Qr = Hr;
function Xr(e) {
  return e;
}
var Wr = Xr;
function Zr(e) {
  return function (r) {
    return r == null ? void 0 : r[e];
  };
}
var kr = Zr,
  zr = k;
function jr(e) {
  return function (r) {
    return zr(r, e);
  };
}
var en = jr,
  rn = kr,
  nn = en,
  an = N,
  tn = S;
function un(e) {
  return an(e) ? rn(tn(e)) : nn(e);
}
var sn = un,
  ln = er,
  cn = Qr,
  on = Wr,
  fn = $,
  pn = sn;
function mn(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? on
    : typeof e == "object"
    ? fn(e)
      ? cn(e[0], e[1])
      : ln(e)
    : pn(e);
}
var vn = mn;
function gn(e) {
  return function (r, n, a) {
    for (var t = -1, u = Object(r), l = a(r), s = l.length; s--; ) {
      var i = l[e ? s : ++t];
      if (n(u[i], i, u) === !1) break;
    }
    return r;
  };
}
var yn = gn,
  dn = yn,
  _n = dn(),
  Tn = _n,
  bn = Tn,
  An = V;
function $n(e, r) {
  return e && bn(e, r, An);
}
var Pn = $n,
  Dn = Ae,
  On = Pn,
  hn = vn;
function wn(e, r) {
  var n = {};
  return (
    (r = hn(r)),
    On(e, function (a, t, u) {
      Dn(n, t, r(a, t, u));
    }),
    n
  );
}
var Sn = wn;
const En = le(Sn),
  { combineParameters: In } = __STORYBOOK_MODULE_PREVIEW_API__;
var z = /^['"]|['"]$/g,
  Nn = (e) => e.replace(z, ""),
  xn = (e) => z.test(e),
  j = (e) => {
    let r = Nn(e);
    return xn(e) || Number.isNaN(Number(r)) ? r : Number(r);
  },
  Fn = (e) => {
    switch (e.type) {
      case "function":
        return { name: "function" };
      case "object":
        let r = {};
        return (
          e.signature.properties.forEach((n) => {
            r[n.key] = b(n.value);
          }),
          { name: "object", value: r }
        );
      default:
        throw new Error(`Unknown: ${e}`);
    }
  },
  b = (e) => {
    let { name: r, raw: n } = e,
      a = {};
    switch ((typeof n < "u" && (a.raw = n), e.name)) {
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...a, name: r };
      case "Array":
        return { ...a, name: "array", value: e.elements.map(b) };
      case "signature":
        return { ...a, ...Fn(e) };
      case "union":
        let t;
        return (
          e.elements.every((u) => u.name === "literal")
            ? (t = {
                ...a,
                name: "enum",
                value: e.elements.map((u) => j(u.value)),
              })
            : (t = { ...a, name: r, value: e.elements.map(b) }),
          t
        );
      case "intersection":
        return { ...a, name: r, value: e.elements.map(b) };
      default:
        return { ...a, name: "other", value: r };
    }
  },
  Rn = (e) => e.name === "literal",
  Ln = (e) => e.value.replace(/['|"]/g, ""),
  Cn = (e) => {
    switch (e.type) {
      case "function":
        return { name: "function" };
      case "object":
        let r = {};
        return (
          e.signature.properties.forEach((n) => {
            r[n.key] = A(n.value);
          }),
          { name: "object", value: r }
        );
      default:
        throw new Error(`Unknown: ${e}`);
    }
  },
  A = (e) => {
    let { name: r, raw: n } = e,
      a = {};
    switch ((typeof n < "u" && (a.raw = n), e.name)) {
      case "literal":
        return { ...a, name: "other", value: e.value };
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...a, name: r };
      case "Array":
        return { ...a, name: "array", value: e.elements.map(A) };
      case "signature":
        return { ...a, ...Cn(e) };
      case "union":
        return e.elements.every(Rn)
          ? { ...a, name: "enum", value: e.elements.map(Ln) }
          : { ...a, name: r, value: e.elements.map(A) };
      case "intersection":
        return { ...a, name: r, value: e.elements.map(A) };
      default:
        return { ...a, name: "other", value: r };
    }
  },
  Mn = /^\(.*\) => /,
  T = (e) => {
    let { name: r, raw: n, computed: a, value: t } = e,
      u = {};
    switch ((typeof n < "u" && (u.raw = n), r)) {
      case "enum": {
        let s = a ? t : t.map((i) => j(i.value));
        return { ...u, name: r, value: s };
      }
      case "string":
      case "number":
      case "symbol":
        return { ...u, name: r };
      case "func":
        return { ...u, name: "function" };
      case "bool":
      case "boolean":
        return { ...u, name: "boolean" };
      case "arrayOf":
      case "array":
        return { ...u, name: "array", value: t && T(t) };
      case "object":
        return { ...u, name: r };
      case "objectOf":
        return { ...u, name: r, value: T(t) };
      case "shape":
      case "exact":
        let l = En(t, (s) => T(s));
        return { ...u, name: "object", value: l };
      case "union":
        return { ...u, name: "union", value: t.map((s) => T(s)) };
      case "instanceOf":
      case "element":
      case "elementType":
      default: {
        if ((r == null ? void 0 : r.indexOf("|")) > 0)
          try {
            let f = r.split("|").map((p) => JSON.parse(p));
            return { ...u, name: "enum", value: f };
          } catch {}
        let s = t ? `${r}(${t})` : r,
          i = Mn.test(r) ? "function" : "other";
        return { ...u, name: i, value: s };
      }
    }
  },
  x = (e) => {
    let { type: r, tsType: n, flowType: a } = e;
    return r != null ? T(r) : n != null ? b(n) : a != null ? A(a) : null;
  },
  Jn = ((e) => (
    (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown"),
    e
  ))(Jn || {}),
  Kn = ["null", "undefined"];
function F(e) {
  return Kn.some((r) => r === e);
}
var qn = (e) => {
  if (!e) return "";
  if (typeof e == "string") return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
};
function ee(e) {
  return !!e.__docgenInfo;
}
function Un(e) {
  return e != null && Object.keys(e).length > 0;
}
function Bn(e, r) {
  return ee(e) ? e.__docgenInfo[r] : null;
}
function Gn(e) {
  return ee(e) && qn(e.__docgenInfo.description);
}
function Vn(e) {
  return e != null && e.includes("@");
}
function Yn(e, r) {
  let n;
  try {
    n = $e.parse(e, { tags: r, sloppy: !0 });
  } catch (a) {
    throw (console.error(a), new Error("Cannot parse JSDoc tags."));
  }
  return n;
}
var Hn = {
    tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"],
  },
  Qn = (e, r = Hn) => {
    if (!Vn(e)) return { includesJsDoc: !1, ignore: !1 };
    let n = Yn(e, r.tags),
      a = Xn(n);
    return a.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: n.description,
          extractedTags: a,
        };
  };
function Xn(e) {
  let r = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let n = 0; n < e.tags.length; n += 1) {
    let a = e.tags[n];
    if (a.title === "ignore") {
      r.ignore = !0;
      break;
    } else
      switch (a.title) {
        case "param":
        case "arg":
        case "argument": {
          let t = Wn(a);
          t != null && (r.params == null && (r.params = []), r.params.push(t));
          break;
        }
        case "deprecated": {
          let t = Zn(a);
          t != null && (r.deprecated = t);
          break;
        }
        case "returns": {
          let t = kn(a);
          t != null && (r.returns = t);
          break;
        }
      }
  }
  return r;
}
function Wn(e) {
  let r = e.name;
  return r != null && r !== "null-null"
    ? {
        name: e.name,
        type: e.type,
        description: e.description,
        getPrettyName: () =>
          r.includes("null")
            ? r.replace("-null", "").replace(".null", "")
            : e.name,
        getTypeName: () => (e.type != null ? g(e.type) : null),
      }
    : null;
}
function Zn(e) {
  return e.title != null ? e.description : null;
}
function kn(e) {
  return e.type != null
    ? { type: e.type, description: e.description, getTypeName: () => g(e.type) }
    : null;
}
function g(e) {
  return e.type === "NameExpression"
    ? e.name
    : e.type === "RecordType"
    ? `({${e.fields
        .map((r) => {
          if (r.value != null) {
            let n = g(r.value);
            return `${r.key}: ${n}`;
          }
          return r.key;
        })
        .join(", ")}})`
    : e.type === "UnionType"
    ? `(${e.elements.map(g).join("|")})`
    : e.type === "ArrayType"
    ? "[]"
    : e.type === "TypeApplication" &&
      e.expression != null &&
      e.expression.name === "Array"
    ? `${g(e.applications[0])}[]`
    : e.type === "NullableType" ||
      e.type === "NonNullableType" ||
      e.type === "OptionalType"
    ? g(e.expression)
    : e.type === "AllLiteral"
    ? "any"
    : null;
}
function re(e) {
  return e.length > 90;
}
function zn(e) {
  return e.length > 50;
}
function c(e, r) {
  return e === r ? { summary: e } : { summary: e, detail: r };
}
function ne({ name: e, value: r, elements: n, raw: a }) {
  return r ?? (n != null ? n.map(ne).join(" | ") : a ?? e);
}
function jn({ name: e, raw: r, elements: n }) {
  return n != null
    ? c(n.map(ne).join(" | "))
    : r != null
    ? c(r.replace(/^\|\s*/, ""))
    : c(e);
}
function ea({ type: e, raw: r }) {
  return r != null ? c(r) : c(e);
}
function ra({ type: e, raw: r }) {
  return r != null ? (re(r) ? c(e, r) : c(r)) : c(e);
}
function na(e) {
  let { type: r } = e;
  return r === "object" ? ra(e) : ea(e);
}
function aa({ name: e, raw: r }) {
  return r != null ? (re(r) ? c(e, r) : c(r)) : c(e);
}
function ta(e) {
  if (e == null) return null;
  switch (e.name) {
    case "union":
      return jn(e);
    case "signature":
      return na(e);
    default:
      return aa(e);
  }
}
function ua(e, r) {
  if (e != null) {
    let { value: n } = e;
    if (!F(n)) return zn(n) ? c(r.name, n) : c(n);
  }
  return null;
}
var sa = (e, r) => {
  let { flowType: n, description: a, required: t, defaultValue: u } = r;
  return {
    name: e,
    type: ta(n),
    required: t,
    description: a,
    defaultValue: ua(u, n),
  };
};
function la({ tsType: e, required: r }) {
  if (e == null) return null;
  let n = e.name;
  return (
    r || (n = n.replace(" | undefined", "")),
    c(["Array", "Record", "signature"].includes(e.name) ? e.raw : n)
  );
}
function ia({ defaultValue: e }) {
  if (e != null) {
    let { value: r } = e;
    if (!F(r)) return c(r);
  }
  return null;
}
var ca = (e, r) => {
  let { description: n, required: a } = r;
  return {
    name: e,
    type: la(r),
    required: a,
    description: n,
    defaultValue: ia(r),
  };
};
function oa(e) {
  return e != null ? c(e.name) : null;
}
function fa(e) {
  let { computed: r, func: n } = e;
  return typeof r > "u" && typeof n > "u";
}
function pa(e) {
  return e
    ? e.name === "string"
      ? !0
      : e.name === "enum"
      ? Array.isArray(e.value) &&
        e.value.every(
          ({ value: r }) =>
            typeof r == "string" && r[0] === '"' && r[r.length - 1] === '"'
        )
      : !1
    : !1;
}
function ma(e, r) {
  if (e != null) {
    let { value: n } = e;
    if (!F(n)) return fa(e) && pa(r) ? c(JSON.stringify(n)) : c(n);
  }
  return null;
}
function ae(e, r, n) {
  let { description: a, required: t, defaultValue: u } = n;
  return {
    name: e,
    type: oa(r),
    required: t,
    description: a,
    defaultValue: ma(u, r),
  };
}
function E(e, r) {
  var n;
  if (r.includesJsDoc) {
    let { description: a, extractedTags: t } = r;
    a != null && (e.description = r.description);
    let u = {
      ...t,
      params:
        (n = t == null ? void 0 : t.params) == null
          ? void 0
          : n.map((l) => ({
              name: l.getPrettyName(),
              description: l.description,
            })),
    };
    Object.values(u).filter(Boolean).length > 0 && (e.jsDocTags = u);
  }
  return e;
}
var va = (e, r, n) => {
    let a = ae(e, r.type, r);
    return (a.sbType = x(r)), E(a, n);
  },
  ga = (e, r, n) => {
    let a = ca(e, r);
    return (a.sbType = x(r)), E(a, n);
  },
  ya = (e, r, n) => {
    let a = sa(e, r);
    return (a.sbType = x(r)), E(a, n);
  },
  da = (e, r, n) => {
    let a = ae(e, { name: "unknown" }, r);
    return E(a, n);
  },
  te = (e) => {
    switch (e) {
      case "JavaScript":
        return va;
      case "TypeScript":
        return ga;
      case "Flow":
        return ya;
      default:
        return da;
    }
  },
  ue = (e) =>
    e.type != null
      ? "JavaScript"
      : e.flowType != null
      ? "Flow"
      : e.tsType != null
      ? "TypeScript"
      : "Unknown",
  _a = (e) => {
    let r = ue(e[0]),
      n = te(r);
    return e.map((a) => {
      var u;
      let t = a;
      return (
        (u = a.type) != null &&
          u.elements &&
          (t = { ...a, type: { ...a.type, value: a.type.elements } }),
        se(t.name, t, r, n)
      );
    });
  },
  Ta = (e) => {
    let r = Object.keys(e),
      n = ue(e[r[0]]),
      a = te(n);
    return r
      .map((t) => {
        let u = e[t];
        return u != null ? se(t, u, n, a) : null;
      })
      .filter(Boolean);
  },
  Da = (e, r) => {
    let n = Bn(e, r);
    return Un(n) ? (Array.isArray(n) ? _a(n) : Ta(n)) : [];
  };
function se(e, r, n, a) {
  let t = Qn(r.description);
  return t.includesJsDoc && t.ignore
    ? null
    : {
        propDef: a(e, r, t),
        jsDocTags: t.extractedTags,
        docgenInfo: r,
        typeSystem: n,
      };
}
function Oa(e) {
  return e != null && Gn(e);
}
var ha = (e) => {
    let {
        component: r,
        argTypes: n,
        parameters: { docs: a = {} },
      } = e,
      { extractArgTypes: t } = a,
      u = t && r ? t(r) : {};
    return u ? In(u, n) : n;
  },
  ba = "storybook/docs",
  wa = `${ba}/snippet-rendered`,
  Aa = ((e) => (
    (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
  ))(Aa || {});
export {
  wa as S,
  Jn as T,
  Z as _,
  S as a,
  k as b,
  vn as c,
  Aa as d,
  Oa as e,
  ha as f,
  c as g,
  Bn as h,
  ee as i,
  Da as j,
  zn as k,
  re as l,
  qn as s,
};
