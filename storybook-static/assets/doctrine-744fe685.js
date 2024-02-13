import { c as Cu, g as te } from "./commonjsHelpers-725317a4.js";
function de(u, e) {
  for (var r = -1, A = u == null ? 0 : u.length, s = Array(A); ++r < A; )
    s[r] = e(u[r], r, u);
  return s;
}
var ye = de;
function ve() {
  (this.__data__ = []), (this.size = 0);
}
var ge = ve;
function xe(u, e) {
  return u === e || (u !== u && e !== e);
}
var ae = xe,
  me = ae;
function _e(u, e) {
  for (var r = u.length; r--; ) if (me(u[r][0], e)) return r;
  return -1;
}
var pu = _e,
  Te = pu,
  be = Array.prototype,
  Se = be.splice;
function $e(u) {
  var e = this.__data__,
    r = Te(e, u);
  if (r < 0) return !1;
  var A = e.length - 1;
  return r == A ? e.pop() : Se.call(e, r, 1), --this.size, !0;
}
var we = $e,
  Ne = pu;
function Oe(u) {
  var e = this.__data__,
    r = Ne(e, u);
  return r < 0 ? void 0 : e[r][1];
}
var Pe = Oe,
  Ie = pu;
function Re(u) {
  return Ie(this.__data__, u) > -1;
}
var Le = Re,
  ke = pu;
function Me(u, e) {
  var r = this.__data__,
    A = ke(r, u);
  return A < 0 ? (++this.size, r.push([u, e])) : (r[A][1] = e), this;
}
var je = Me,
  Ue = ge,
  Ge = we,
  Ke = Pe,
  ze = Le,
  He = je;
function J(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
J.prototype.clear = Ue;
J.prototype.delete = Ge;
J.prototype.get = Ke;
J.prototype.has = ze;
J.prototype.set = He;
var lu = J,
  We = lu;
function qe() {
  (this.__data__ = new We()), (this.size = 0);
}
var Ve = qe;
function Qe(u) {
  var e = this.__data__,
    r = e.delete(u);
  return (this.size = e.size), r;
}
var Je = Qe;
function Xe(u) {
  return this.__data__.get(u);
}
var Ze = Xe;
function Ye(u) {
  return this.__data__.has(u);
}
var u0 = Ye,
  e0 = typeof Cu == "object" && Cu && Cu.Object === Object && Cu,
  De = e0,
  r0 = De,
  t0 = typeof self == "object" && self && self.Object === Object && self,
  a0 = r0 || t0 || Function("return this")(),
  K = a0,
  D0 = K,
  n0 = D0.Symbol,
  Bu = n0,
  Iu = Bu,
  ne = Object.prototype,
  i0 = ne.hasOwnProperty,
  s0 = ne.toString,
  tu = Iu ? Iu.toStringTag : void 0;
function A0(u) {
  var e = i0.call(u, tu),
    r = u[tu];
  try {
    u[tu] = void 0;
    var A = !0;
  } catch {}
  var s = s0.call(u);
  return A && (e ? (u[tu] = r) : delete u[tu]), s;
}
var F0 = A0,
  C0 = Object.prototype,
  o0 = C0.toString;
function E0(u) {
  return o0.call(u);
}
var c0 = E0,
  Ru = Bu,
  p0 = F0,
  l0 = c0,
  B0 = "[object Null]",
  f0 = "[object Undefined]",
  Lu = Ru ? Ru.toStringTag : void 0;
function h0(u) {
  return u == null
    ? u === void 0
      ? f0
      : B0
    : Lu && Lu in Object(u)
    ? p0(u)
    : l0(u);
}
var nu = h0;
function d0(u) {
  var e = typeof u;
  return u != null && (e == "object" || e == "function");
}
var ie = d0,
  y0 = nu,
  v0 = ie,
  g0 = "[object AsyncFunction]",
  x0 = "[object Function]",
  m0 = "[object GeneratorFunction]",
  _0 = "[object Proxy]";
function T0(u) {
  if (!v0(u)) return !1;
  var e = y0(u);
  return e == x0 || e == m0 || e == g0 || e == _0;
}
var $u = T0;
const yi = te($u);
var b0 = K,
  S0 = b0["__core-js_shared__"],
  $0 = S0,
  gu = $0,
  ku = (function () {
    var u = /[^.]+$/.exec((gu && gu.keys && gu.keys.IE_PROTO) || "");
    return u ? "Symbol(src)_1." + u : "";
  })();
function w0(u) {
  return !!ku && ku in u;
}
var N0 = w0,
  O0 = Function.prototype,
  P0 = O0.toString;
function I0(u) {
  if (u != null) {
    try {
      return P0.call(u);
    } catch {}
    try {
      return u + "";
    } catch {}
  }
  return "";
}
var se = I0,
  R0 = $u,
  L0 = N0,
  k0 = ie,
  M0 = se,
  j0 = /[\\^$.*+?()[\]{}|]/g,
  U0 = /^\[object .+?Constructor\]$/,
  G0 = Function.prototype,
  K0 = Object.prototype,
  z0 = G0.toString,
  H0 = K0.hasOwnProperty,
  W0 = RegExp(
    "^" +
      z0
        .call(H0)
        .replace(j0, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function q0(u) {
  if (!k0(u) || L0(u)) return !1;
  var e = R0(u) ? W0 : U0;
  return e.test(M0(u));
}
var V0 = q0;
function Q0(u, e) {
  return u == null ? void 0 : u[e];
}
var J0 = Q0,
  X0 = V0,
  Z0 = J0;
function Y0(u, e) {
  var r = Z0(u, e);
  return X0(r) ? r : void 0;
}
var V = Y0,
  ur = V,
  er = K,
  rr = ur(er, "Map"),
  wu = rr,
  tr = V,
  ar = tr(Object, "create"),
  fu = ar,
  Mu = fu;
function Dr() {
  (this.__data__ = Mu ? Mu(null) : {}), (this.size = 0);
}
var nr = Dr;
function ir(u) {
  var e = this.has(u) && delete this.__data__[u];
  return (this.size -= e ? 1 : 0), e;
}
var sr = ir,
  Ar = fu,
  Fr = "__lodash_hash_undefined__",
  Cr = Object.prototype,
  or = Cr.hasOwnProperty;
function Er(u) {
  var e = this.__data__;
  if (Ar) {
    var r = e[u];
    return r === Fr ? void 0 : r;
  }
  return or.call(e, u) ? e[u] : void 0;
}
var cr = Er,
  pr = fu,
  lr = Object.prototype,
  Br = lr.hasOwnProperty;
function fr(u) {
  var e = this.__data__;
  return pr ? e[u] !== void 0 : Br.call(e, u);
}
var hr = fr,
  dr = fu,
  yr = "__lodash_hash_undefined__";
function vr(u, e) {
  var r = this.__data__;
  return (
    (this.size += this.has(u) ? 0 : 1),
    (r[u] = dr && e === void 0 ? yr : e),
    this
  );
}
var gr = vr,
  xr = nr,
  mr = sr,
  _r = cr,
  Tr = hr,
  br = gr;
function X(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
X.prototype.clear = xr;
X.prototype.delete = mr;
X.prototype.get = _r;
X.prototype.has = Tr;
X.prototype.set = br;
var Sr = X,
  ju = Sr,
  $r = lu,
  wr = wu;
function Nr() {
  (this.size = 0),
    (this.__data__ = {
      hash: new ju(),
      map: new (wr || $r)(),
      string: new ju(),
    });
}
var Or = Nr;
function Pr(u) {
  var e = typeof u;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean"
    ? u !== "__proto__"
    : u === null;
}
var Ir = Pr,
  Rr = Ir;
function Lr(u, e) {
  var r = u.__data__;
  return Rr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var hu = Lr,
  kr = hu;
function Mr(u) {
  var e = kr(this, u).delete(u);
  return (this.size -= e ? 1 : 0), e;
}
var jr = Mr,
  Ur = hu;
function Gr(u) {
  return Ur(this, u).get(u);
}
var Kr = Gr,
  zr = hu;
function Hr(u) {
  return zr(this, u).has(u);
}
var Wr = Hr,
  qr = hu;
function Vr(u, e) {
  var r = qr(this, u),
    A = r.size;
  return r.set(u, e), (this.size += r.size == A ? 0 : 1), this;
}
var Qr = Vr,
  Jr = Or,
  Xr = jr,
  Zr = Kr,
  Yr = Wr,
  ut = Qr;
function Z(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
Z.prototype.clear = Jr;
Z.prototype.delete = Xr;
Z.prototype.get = Zr;
Z.prototype.has = Yr;
Z.prototype.set = ut;
var Nu = Z,
  et = lu,
  rt = wu,
  tt = Nu,
  at = 200;
function Dt(u, e) {
  var r = this.__data__;
  if (r instanceof et) {
    var A = r.__data__;
    if (!rt || A.length < at - 1)
      return A.push([u, e]), (this.size = ++r.size), this;
    r = this.__data__ = new tt(A);
  }
  return r.set(u, e), (this.size = r.size), this;
}
var nt = Dt,
  it = lu,
  st = Ve,
  At = Je,
  Ft = Ze,
  Ct = u0,
  ot = nt;
function Y(u) {
  var e = (this.__data__ = new it(u));
  this.size = e.size;
}
Y.prototype.clear = st;
Y.prototype.delete = At;
Y.prototype.get = Ft;
Y.prototype.has = Ct;
Y.prototype.set = ot;
var vi = Y,
  Et = "__lodash_hash_undefined__";
function ct(u) {
  return this.__data__.set(u, Et), this;
}
var pt = ct;
function lt(u) {
  return this.__data__.has(u);
}
var Bt = lt,
  ft = Nu,
  ht = pt,
  dt = Bt;
function ou(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.__data__ = new ft(); ++e < r; ) this.add(u[e]);
}
ou.prototype.add = ou.prototype.push = ht;
ou.prototype.has = dt;
var yt = ou;
function vt(u, e) {
  for (var r = -1, A = u == null ? 0 : u.length; ++r < A; )
    if (e(u[r], r, u)) return !0;
  return !1;
}
var gt = vt;
function xt(u, e) {
  return u.has(e);
}
var mt = xt,
  _t = yt,
  Tt = gt,
  bt = mt,
  St = 1,
  $t = 2;
function wt(u, e, r, A, s, F) {
  var a = r & St,
    l = u.length,
    g = e.length;
  if (l != g && !(a && g > l)) return !1;
  var d = F.get(u),
    P = F.get(e);
  if (d && P) return d == e && P == u;
  var S = -1,
    o = !0,
    x = r & $t ? new _t() : void 0;
  for (F.set(u, e), F.set(e, u); ++S < l; ) {
    var v = u[S],
      E = e[S];
    if (A) var B = a ? A(E, v, S, e, u, F) : A(v, E, S, u, e, F);
    if (B !== void 0) {
      if (B) continue;
      o = !1;
      break;
    }
    if (x) {
      if (
        !Tt(e, function (R, k) {
          if (!bt(x, k) && (v === R || s(v, R, r, A, F))) return x.push(k);
        })
      ) {
        o = !1;
        break;
      }
    } else if (!(v === E || s(v, E, r, A, F))) {
      o = !1;
      break;
    }
  }
  return F.delete(u), F.delete(e), o;
}
var Nt = wt,
  Ot = K,
  Pt = Ot.Uint8Array,
  It = Pt;
function Rt(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (A, s) {
      r[++e] = [s, A];
    }),
    r
  );
}
var Lt = Rt;
function kt(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (A) {
      r[++e] = A;
    }),
    r
  );
}
var Mt = kt,
  Uu = Bu,
  Gu = It,
  jt = ae,
  Ut = Nt,
  Gt = Lt,
  Kt = Mt,
  zt = 1,
  Ht = 2,
  Wt = "[object Boolean]",
  qt = "[object Date]",
  Vt = "[object Error]",
  Qt = "[object Map]",
  Jt = "[object Number]",
  Xt = "[object RegExp]",
  Zt = "[object Set]",
  Yt = "[object String]",
  ua = "[object Symbol]",
  ea = "[object ArrayBuffer]",
  ra = "[object DataView]",
  Ku = Uu ? Uu.prototype : void 0,
  xu = Ku ? Ku.valueOf : void 0;
function ta(u, e, r, A, s, F, a) {
  switch (r) {
    case ra:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset)
        return !1;
      (u = u.buffer), (e = e.buffer);
    case ea:
      return !(u.byteLength != e.byteLength || !F(new Gu(u), new Gu(e)));
    case Wt:
    case qt:
    case Jt:
      return jt(+u, +e);
    case Vt:
      return u.name == e.name && u.message == e.message;
    case Xt:
    case Yt:
      return u == e + "";
    case Qt:
      var l = Gt;
    case Zt:
      var g = A & zt;
      if ((l || (l = Kt), u.size != e.size && !g)) return !1;
      var d = a.get(u);
      if (d) return d == e;
      (A |= Ht), a.set(u, e);
      var P = Ut(l(u), l(e), A, s, F, a);
      return a.delete(u), P;
    case ua:
      if (xu) return xu.call(u) == xu.call(e);
  }
  return !1;
}
var gi = ta;
function aa(u, e) {
  for (var r = -1, A = e.length, s = u.length; ++r < A; ) u[s + r] = e[r];
  return u;
}
var Da = aa,
  na = Array.isArray,
  Ou = na,
  ia = Da,
  sa = Ou;
function Aa(u, e, r) {
  var A = e(u);
  return sa(u) ? A : ia(A, r(u));
}
var Fa = Aa;
function Ca(u, e) {
  for (var r = -1, A = u == null ? 0 : u.length, s = 0, F = []; ++r < A; ) {
    var a = u[r];
    e(a, r, u) && (F[s++] = a);
  }
  return F;
}
var oa = Ca;
function Ea() {
  return [];
}
var ca = Ea,
  pa = oa,
  la = ca,
  Ba = Object.prototype,
  fa = Ba.propertyIsEnumerable,
  zu = Object.getOwnPropertySymbols,
  ha = zu
    ? function (u) {
        return u == null
          ? []
          : ((u = Object(u)),
            pa(zu(u), function (e) {
              return fa.call(u, e);
            }));
      }
    : la,
  da = ha;
function ya(u, e) {
  for (var r = -1, A = Array(u); ++r < u; ) A[r] = e(r);
  return A;
}
var va = ya;
function ga(u) {
  return u != null && typeof u == "object";
}
var du = ga,
  xa = nu,
  ma = du,
  _a = "[object Arguments]";
function Ta(u) {
  return ma(u) && xa(u) == _a;
}
var ba = Ta,
  Hu = ba,
  Sa = du,
  Ae = Object.prototype,
  $a = Ae.hasOwnProperty,
  wa = Ae.propertyIsEnumerable,
  Na = Hu(
    (function () {
      return arguments;
    })()
  )
    ? Hu
    : function (u) {
        return Sa(u) && $a.call(u, "callee") && !wa.call(u, "callee");
      },
  Oa = Na,
  Eu = { exports: {} };
function Pa() {
  return !1;
}
var Ia = Pa;
Eu.exports;
(function (u, e) {
  var r = K,
    A = Ia,
    s = e && !e.nodeType && e,
    F = s && !0 && u && !u.nodeType && u,
    a = F && F.exports === s,
    l = a ? r.Buffer : void 0,
    g = l ? l.isBuffer : void 0,
    d = g || A;
  u.exports = d;
})(Eu, Eu.exports);
var Ra = Eu.exports,
  La = 9007199254740991,
  ka = /^(?:0|[1-9]\d*)$/;
function Ma(u, e) {
  var r = typeof u;
  return (
    (e = e ?? La),
    !!e &&
      (r == "number" || (r != "symbol" && ka.test(u))) &&
      u > -1 &&
      u % 1 == 0 &&
      u < e
  );
}
var ja = Ma,
  Ua = 9007199254740991;
function Ga(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Ua;
}
var Fe = Ga,
  Ka = nu,
  za = Fe,
  Ha = du,
  Wa = "[object Arguments]",
  qa = "[object Array]",
  Va = "[object Boolean]",
  Qa = "[object Date]",
  Ja = "[object Error]",
  Xa = "[object Function]",
  Za = "[object Map]",
  Ya = "[object Number]",
  uD = "[object Object]",
  eD = "[object RegExp]",
  rD = "[object Set]",
  tD = "[object String]",
  aD = "[object WeakMap]",
  DD = "[object ArrayBuffer]",
  nD = "[object DataView]",
  iD = "[object Float32Array]",
  sD = "[object Float64Array]",
  AD = "[object Int8Array]",
  FD = "[object Int16Array]",
  CD = "[object Int32Array]",
  oD = "[object Uint8Array]",
  ED = "[object Uint8ClampedArray]",
  cD = "[object Uint16Array]",
  pD = "[object Uint32Array]",
  T = {};
T[iD] = T[sD] = T[AD] = T[FD] = T[CD] = T[oD] = T[ED] = T[cD] = T[pD] = !0;
T[Wa] =
  T[qa] =
  T[DD] =
  T[Va] =
  T[nD] =
  T[Qa] =
  T[Ja] =
  T[Xa] =
  T[Za] =
  T[Ya] =
  T[uD] =
  T[eD] =
  T[rD] =
  T[tD] =
  T[aD] =
    !1;
function lD(u) {
  return Ha(u) && za(u.length) && !!T[Ka(u)];
}
var BD = lD;
function fD(u) {
  return function (e) {
    return u(e);
  };
}
var hD = fD,
  cu = { exports: {} };
cu.exports;
(function (u, e) {
  var r = De,
    A = e && !e.nodeType && e,
    s = A && !0 && u && !u.nodeType && u,
    F = s && s.exports === A,
    a = F && r.process,
    l = (function () {
      try {
        var g = s && s.require && s.require("util").types;
        return g || (a && a.binding && a.binding("util"));
      } catch {}
    })();
  u.exports = l;
})(cu, cu.exports);
var dD = cu.exports,
  yD = BD,
  vD = hD,
  Wu = dD,
  qu = Wu && Wu.isTypedArray,
  gD = qu ? vD(qu) : yD,
  xD = gD,
  mD = va,
  _D = Oa,
  TD = Ou,
  bD = Ra,
  SD = ja,
  $D = xD,
  wD = Object.prototype,
  ND = wD.hasOwnProperty;
function OD(u, e) {
  var r = TD(u),
    A = !r && _D(u),
    s = !r && !A && bD(u),
    F = !r && !A && !s && $D(u),
    a = r || A || s || F,
    l = a ? mD(u.length, String) : [],
    g = l.length;
  for (var d in u)
    (e || ND.call(u, d)) &&
      !(
        a &&
        (d == "length" ||
          (s && (d == "offset" || d == "parent")) ||
          (F && (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
          SD(d, g))
      ) &&
      l.push(d);
  return l;
}
var PD = OD,
  ID = Object.prototype;
function RD(u) {
  var e = u && u.constructor,
    r = (typeof e == "function" && e.prototype) || ID;
  return u === r;
}
var LD = RD;
function kD(u, e) {
  return function (r) {
    return u(e(r));
  };
}
var Ce = kD,
  MD = Ce,
  jD = MD(Object.keys, Object),
  UD = jD,
  GD = LD,
  KD = UD,
  zD = Object.prototype,
  HD = zD.hasOwnProperty;
function WD(u) {
  if (!GD(u)) return KD(u);
  var e = [];
  for (var r in Object(u)) HD.call(u, r) && r != "constructor" && e.push(r);
  return e;
}
var qD = WD,
  VD = $u,
  QD = Fe;
function JD(u) {
  return u != null && QD(u.length) && !VD(u);
}
var XD = JD,
  ZD = PD,
  YD = qD,
  un = XD;
function en(u) {
  return un(u) ? ZD(u) : YD(u);
}
var rn = en,
  tn = Fa,
  an = da,
  Dn = rn;
function nn(u) {
  return tn(u, Dn, an);
}
var xi = nn,
  sn = V,
  An = K,
  Fn = sn(An, "DataView"),
  Cn = Fn,
  on = V,
  En = K,
  cn = on(En, "Promise"),
  pn = cn,
  ln = V,
  Bn = K,
  fn = ln(Bn, "Set"),
  hn = fn,
  dn = V,
  yn = K,
  vn = dn(yn, "WeakMap"),
  gn = vn,
  mu = Cn,
  _u = wu,
  Tu = pn,
  bu = hn,
  Su = gn,
  oe = nu,
  uu = se,
  Vu = "[object Map]",
  xn = "[object Object]",
  Qu = "[object Promise]",
  Ju = "[object Set]",
  Xu = "[object WeakMap]",
  Zu = "[object DataView]",
  mn = uu(mu),
  _n = uu(_u),
  Tn = uu(Tu),
  bn = uu(bu),
  Sn = uu(Su),
  q = oe;
((mu && q(new mu(new ArrayBuffer(1))) != Zu) ||
  (_u && q(new _u()) != Vu) ||
  (Tu && q(Tu.resolve()) != Qu) ||
  (bu && q(new bu()) != Ju) ||
  (Su && q(new Su()) != Xu)) &&
  (q = function (u) {
    var e = oe(u),
      r = e == xn ? u.constructor : void 0,
      A = r ? uu(r) : "";
    if (A)
      switch (A) {
        case mn:
          return Zu;
        case _n:
          return Vu;
        case Tn:
          return Qu;
        case bn:
          return Ju;
        case Sn:
          return Xu;
      }
    return e;
  });
var mi = q,
  $n = nu,
  wn = du,
  Nn = "[object Symbol]";
function On(u) {
  return typeof u == "symbol" || (wn(u) && $n(u) == Nn);
}
var Pn = On,
  Ee = Nu,
  In = "Expected a function";
function Pu(u, e) {
  if (typeof u != "function" || (e != null && typeof e != "function"))
    throw new TypeError(In);
  var r = function () {
    var A = arguments,
      s = e ? e.apply(this, A) : A[0],
      F = r.cache;
    if (F.has(s)) return F.get(s);
    var a = u.apply(this, A);
    return (r.cache = F.set(s, a) || F), a;
  };
  return (r.cache = new (Pu.Cache || Ee)()), r;
}
Pu.Cache = Ee;
var Rn = Pu,
  Ln = Rn,
  kn = 500;
function Mn(u) {
  var e = Ln(u, function (A) {
      return r.size === kn && r.clear(), A;
    }),
    r = e.cache;
  return e;
}
var jn = Mn,
  Un = jn,
  Gn =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Kn = /\\(\\)?/g,
  zn = Un(function (u) {
    var e = [];
    return (
      u.charCodeAt(0) === 46 && e.push(""),
      u.replace(Gn, function (r, A, s, F) {
        e.push(s ? F.replace(Kn, "$1") : A || r);
      }),
      e
    );
  }),
  _i = zn,
  Yu = Bu,
  Hn = ye,
  Wn = Ou,
  qn = Pn,
  Vn = 1 / 0,
  ue = Yu ? Yu.prototype : void 0,
  ee = ue ? ue.toString : void 0;
function ce(u) {
  if (typeof u == "string") return u;
  if (Wn(u)) return Hn(u, ce) + "";
  if (qn(u)) return ee ? ee.call(u) : "";
  var e = u + "";
  return e == "0" && 1 / u == -Vn ? "-0" : e;
}
var Ti = ce,
  Qn = V,
  Jn = (function () {
    try {
      var u = Qn(Object, "defineProperty");
      return u({}, "", {}), u;
    } catch {}
  })(),
  Xn = Jn,
  re = Xn;
function Zn(u, e, r) {
  e == "__proto__" && re
    ? re(u, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (u[e] = r);
}
var bi = Zn,
  Yn = Ce,
  ui = Yn(Object.getPrototypeOf, Object),
  Si = ui,
  pe = {},
  Du = {},
  le = { exports: {} };
(function () {
  function u(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function e(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function A(a) {
    return r(a) || (a != null && a.type === "FunctionDeclaration");
  }
  function s(a) {
    switch (a.type) {
      case "IfStatement":
        return a.alternate != null ? a.alternate : a.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return a.body;
    }
    return null;
  }
  function F(a) {
    var l;
    if (a.type !== "IfStatement" || a.alternate == null) return !1;
    l = a.consequent;
    do {
      if (l.type === "IfStatement" && l.alternate == null) return !0;
      l = s(l);
    } while (l);
    return !1;
  }
  le.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: A,
    isProblematicIfStatement: F,
    trailingStatement: s,
  };
})();
var ei = le.exports,
  Be = { exports: {} };
(function () {
  var u, e, r, A, s, F;
  (e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function a(B) {
    return 48 <= B && B <= 57;
  }
  function l(B) {
    return (
      (48 <= B && B <= 57) || (97 <= B && B <= 102) || (65 <= B && B <= 70)
    );
  }
  function g(B) {
    return B >= 48 && B <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function d(B) {
    return (
      B === 32 ||
      B === 9 ||
      B === 11 ||
      B === 12 ||
      B === 160 ||
      (B >= 5760 && r.indexOf(B) >= 0)
    );
  }
  function P(B) {
    return B === 10 || B === 13 || B === 8232 || B === 8233;
  }
  function S(B) {
    if (B <= 65535) return String.fromCharCode(B);
    var R = String.fromCharCode(Math.floor((B - 65536) / 1024) + 55296),
      k = String.fromCharCode(((B - 65536) % 1024) + 56320);
    return R + k;
  }
  for (A = new Array(128), F = 0; F < 128; ++F)
    A[F] =
      (F >= 97 && F <= 122) || (F >= 65 && F <= 90) || F === 36 || F === 95;
  for (s = new Array(128), F = 0; F < 128; ++F)
    s[F] =
      (F >= 97 && F <= 122) ||
      (F >= 65 && F <= 90) ||
      (F >= 48 && F <= 57) ||
      F === 36 ||
      F === 95;
  function o(B) {
    return B < 128 ? A[B] : e.NonAsciiIdentifierStart.test(S(B));
  }
  function x(B) {
    return B < 128 ? s[B] : e.NonAsciiIdentifierPart.test(S(B));
  }
  function v(B) {
    return B < 128 ? A[B] : u.NonAsciiIdentifierStart.test(S(B));
  }
  function E(B) {
    return B < 128 ? s[B] : u.NonAsciiIdentifierPart.test(S(B));
  }
  Be.exports = {
    isDecimalDigit: a,
    isHexDigit: l,
    isOctalDigit: g,
    isWhiteSpace: d,
    isLineTerminator: P,
    isIdentifierStartES5: o,
    isIdentifierPartES5: x,
    isIdentifierStartES6: v,
    isIdentifierPartES6: E,
  };
})();
var fe = Be.exports,
  he = { exports: {} };
(function () {
  var u = fe;
  function e(o) {
    switch (o) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(o, x) {
    return !x && o === "yield" ? !1 : A(o, x);
  }
  function A(o, x) {
    if (x && e(o)) return !0;
    switch (o.length) {
      case 2:
        return o === "if" || o === "in" || o === "do";
      case 3:
        return o === "var" || o === "for" || o === "new" || o === "try";
      case 4:
        return (
          o === "this" ||
          o === "else" ||
          o === "case" ||
          o === "void" ||
          o === "with" ||
          o === "enum"
        );
      case 5:
        return (
          o === "while" ||
          o === "break" ||
          o === "catch" ||
          o === "throw" ||
          o === "const" ||
          o === "yield" ||
          o === "class" ||
          o === "super"
        );
      case 6:
        return (
          o === "return" ||
          o === "typeof" ||
          o === "delete" ||
          o === "switch" ||
          o === "export" ||
          o === "import"
        );
      case 7:
        return o === "default" || o === "finally" || o === "extends";
      case 8:
        return o === "function" || o === "continue" || o === "debugger";
      case 10:
        return o === "instanceof";
      default:
        return !1;
    }
  }
  function s(o, x) {
    return o === "null" || o === "true" || o === "false" || r(o, x);
  }
  function F(o, x) {
    return o === "null" || o === "true" || o === "false" || A(o, x);
  }
  function a(o) {
    return o === "eval" || o === "arguments";
  }
  function l(o) {
    var x, v, E;
    if (o.length === 0 || ((E = o.charCodeAt(0)), !u.isIdentifierStartES5(E)))
      return !1;
    for (x = 1, v = o.length; x < v; ++x)
      if (((E = o.charCodeAt(x)), !u.isIdentifierPartES5(E))) return !1;
    return !0;
  }
  function g(o, x) {
    return (o - 55296) * 1024 + (x - 56320) + 65536;
  }
  function d(o) {
    var x, v, E, B, R;
    if (o.length === 0) return !1;
    for (R = u.isIdentifierStartES6, x = 0, v = o.length; x < v; ++x) {
      if (((E = o.charCodeAt(x)), 55296 <= E && E <= 56319)) {
        if (
          (++x, x >= v || ((B = o.charCodeAt(x)), !(56320 <= B && B <= 57343)))
        )
          return !1;
        E = g(E, B);
      }
      if (!R(E)) return !1;
      R = u.isIdentifierPartES6;
    }
    return !0;
  }
  function P(o, x) {
    return l(o) && !s(o, x);
  }
  function S(o, x) {
    return d(o) && !F(o, x);
  }
  he.exports = {
    isKeywordES5: r,
    isKeywordES6: A,
    isReservedWordES5: s,
    isReservedWordES6: F,
    isRestrictedWord: a,
    isIdentifierNameES5: l,
    isIdentifierNameES6: d,
    isIdentifierES5: P,
    isIdentifierES6: S,
  };
})();
var ri = he.exports;
(function () {
  (Du.ast = ei), (Du.code = fe), (Du.keyword = ri);
})();
var au = {},
  Q = {};
const ti = "doctrine",
  ai = "JSDoc parser",
  Di = "https://github.com/eslint/doctrine",
  ni = "lib/doctrine.js",
  ii = "3.0.0",
  si = { node: ">=6.0.0" },
  Ai = { lib: "./lib" },
  Fi = ["lib"],
  Ci = [
    {
      name: "Nicholas C. Zakas",
      email: "nicholas+npm@nczconsulting.com",
      web: "https://www.nczonline.net",
    },
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "https://github.com/Constellation",
    },
  ],
  oi = "eslint/doctrine",
  Ei = {
    coveralls: "^3.0.1",
    dateformat: "^1.0.11",
    eslint: "^1.10.3",
    "eslint-release": "^1.0.0",
    linefix: "^0.1.1",
    mocha: "^3.4.2",
    "npm-license": "^0.3.1",
    nyc: "^10.3.2",
    semver: "^5.0.3",
    shelljs: "^0.5.3",
    "shelljs-nodecli": "^0.1.1",
    should: "^5.0.1",
  },
  ci = "Apache-2.0",
  pi = {
    pretest: "npm run lint",
    test: "nyc mocha",
    coveralls: "nyc report --reporter=text-lcov | coveralls",
    lint: "eslint lib/",
    "generate-release": "eslint-generate-release",
    "generate-alpharelease": "eslint-generate-prerelease alpha",
    "generate-betarelease": "eslint-generate-prerelease beta",
    "generate-rcrelease": "eslint-generate-prerelease rc",
    "publish-release": "eslint-publish-release",
  },
  li = { esutils: "^2.0.2" },
  Bi = {
    name: ti,
    description: ai,
    homepage: Di,
    main: ni,
    version: ii,
    engines: si,
    directories: Ai,
    files: Fi,
    maintainers: Ci,
    repository: oi,
    devDependencies: Ei,
    license: ci,
    scripts: pi,
    dependencies: li,
  };
function fi(u, e) {
  if (!u) throw new Error(e || "unknown assertion error");
}
var hi = fi;
(function () {
  var u;
  (u = Bi.version), (Q.VERSION = u);
  function e(A) {
    (this.name = "DoctrineError"), (this.message = A);
  }
  (e.prototype = (function () {
    var A = function () {};
    return (A.prototype = Error.prototype), new A();
  })()),
    (e.prototype.constructor = e),
    (Q.DoctrineError = e);
  function r(A) {
    throw new e(A);
  }
  (Q.throwError = r), (Q.assert = hi);
})();
(function () {
  var u, e, r, A, s, F, a, l, g, d, P, S;
  (g = Du),
    (d = Q),
    (u = {
      NullableLiteral: "NullableLiteral",
      AllLiteral: "AllLiteral",
      NullLiteral: "NullLiteral",
      UndefinedLiteral: "UndefinedLiteral",
      VoidLiteral: "VoidLiteral",
      UnionType: "UnionType",
      ArrayType: "ArrayType",
      RecordType: "RecordType",
      FieldType: "FieldType",
      FunctionType: "FunctionType",
      ParameterType: "ParameterType",
      RestType: "RestType",
      NonNullableType: "NonNullableType",
      OptionalType: "OptionalType",
      NullableType: "NullableType",
      NameExpression: "NameExpression",
      TypeApplication: "TypeApplication",
      StringLiteralType: "StringLiteralType",
      NumericLiteralType: "NumericLiteralType",
      BooleanLiteralType: "BooleanLiteralType",
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function o(t) {
    return (
      "><(){}[],:*|?!=".indexOf(String.fromCharCode(t)) === -1 &&
      !g.code.isWhiteSpace(t) &&
      !g.code.isLineTerminator(t)
    );
  }
  function x(t, D, f, i) {
    (this._previous = t),
      (this._index = D),
      (this._token = f),
      (this._value = i);
  }
  (x.prototype.restore = function () {
    (F = this._previous),
      (s = this._index),
      (a = this._token),
      (l = this._value);
  }),
    (x.save = function () {
      return new x(F, s, a, l);
    });
  function v(t, D) {
    return S && (t.range = [D[0] + P, D[1] + P]), t;
  }
  function E() {
    var t = r.charAt(s);
    return (s += 1), t;
  }
  function B(t) {
    var D,
      f,
      i,
      n = 0;
    for (f = t === "u" ? 4 : 2, D = 0; D < f; ++D)
      if (s < A && g.code.isHexDigit(r.charCodeAt(s)))
        (i = E()), (n = n * 16 + "0123456789abcdef".indexOf(i.toLowerCase()));
      else return "";
    return String.fromCharCode(n);
  }
  function R() {
    var t = "",
      D,
      f,
      i,
      n,
      p;
    for (D = r.charAt(s), ++s; s < A; )
      if (((f = E()), f === D)) {
        D = "";
        break;
      } else if (f === "\\")
        if (((f = E()), g.code.isLineTerminator(f.charCodeAt(0))))
          f === "\r" && r.charCodeAt(s) === 10 && ++s;
        else
          switch (f) {
            case "n":
              t += `
`;
              break;
            case "r":
              t += "\r";
              break;
            case "t":
              t += "	";
              break;
            case "u":
            case "x":
              (p = s), (n = B(f)), n ? (t += n) : ((s = p), (t += f));
              break;
            case "b":
              t += "\b";
              break;
            case "f":
              t += "\f";
              break;
            case "v":
              t += "\v";
              break;
            default:
              g.code.isOctalDigit(f.charCodeAt(0))
                ? ((i = "01234567".indexOf(f)),
                  s < A &&
                    g.code.isOctalDigit(r.charCodeAt(s)) &&
                    ((i = i * 8 + "01234567".indexOf(E())),
                    "0123".indexOf(f) >= 0 &&
                      s < A &&
                      g.code.isOctalDigit(r.charCodeAt(s)) &&
                      (i = i * 8 + "01234567".indexOf(E()))),
                  (t += String.fromCharCode(i)))
                : (t += f);
              break;
          }
      else {
        if (g.code.isLineTerminator(f.charCodeAt(0))) break;
        t += f;
      }
    return D !== "" && d.throwError("unexpected quote"), (l = t), e.STRING;
  }
  function k() {
    var t, D;
    if (((t = ""), (D = r.charCodeAt(s)), D !== 46)) {
      if (((t = E()), (D = r.charCodeAt(s)), t === "0")) {
        if (D === 120 || D === 88) {
          for (
            t += E();
            s < A && ((D = r.charCodeAt(s)), !!g.code.isHexDigit(D));

          )
            t += E();
          return (
            t.length <= 2 && d.throwError("unexpected token"),
            s < A &&
              ((D = r.charCodeAt(s)),
              g.code.isIdentifierStartES5(D) &&
                d.throwError("unexpected token")),
            (l = parseInt(t, 16)),
            e.NUMBER
          );
        }
        if (g.code.isOctalDigit(D)) {
          for (
            t += E();
            s < A && ((D = r.charCodeAt(s)), !!g.code.isOctalDigit(D));

          )
            t += E();
          return (
            s < A &&
              ((D = r.charCodeAt(s)),
              (g.code.isIdentifierStartES5(D) || g.code.isDecimalDigit(D)) &&
                d.throwError("unexpected token")),
            (l = parseInt(t, 8)),
            e.NUMBER
          );
        }
        g.code.isDecimalDigit(D) && d.throwError("unexpected token");
      }
      for (; s < A && ((D = r.charCodeAt(s)), !!g.code.isDecimalDigit(D)); )
        t += E();
    }
    if (D === 46)
      for (
        t += E();
        s < A && ((D = r.charCodeAt(s)), !!g.code.isDecimalDigit(D));

      )
        t += E();
    if (D === 101 || D === 69)
      if (
        ((t += E()),
        (D = r.charCodeAt(s)),
        (D === 43 || D === 45) && (t += E()),
        (D = r.charCodeAt(s)),
        g.code.isDecimalDigit(D))
      )
        for (
          t += E();
          s < A && ((D = r.charCodeAt(s)), !!g.code.isDecimalDigit(D));

        )
          t += E();
      else d.throwError("unexpected token");
    return (
      s < A &&
        ((D = r.charCodeAt(s)),
        g.code.isIdentifierStartES5(D) && d.throwError("unexpected token")),
      (l = parseFloat(t)),
      e.NUMBER
    );
  }
  function iu() {
    var t, D;
    for (l = E(); s < A && o(r.charCodeAt(s)); ) {
      if (((t = r.charCodeAt(s)), t === 46)) {
        if (s + 1 >= A) return e.ILLEGAL;
        if (((D = r.charCodeAt(s + 1)), D === 60)) break;
      }
      l += E();
    }
    return e.NAME;
  }
  function M() {
    var t;
    for (F = s; s < A && g.code.isWhiteSpace(r.charCodeAt(s)); ) E();
    if (s >= A) return (a = e.EOF), a;
    switch (((t = r.charCodeAt(s)), t)) {
      case 39:
      case 34:
        return (a = R()), a;
      case 58:
        return E(), (a = e.COLON), a;
      case 44:
        return E(), (a = e.COMMA), a;
      case 40:
        return E(), (a = e.LPAREN), a;
      case 41:
        return E(), (a = e.RPAREN), a;
      case 91:
        return E(), (a = e.LBRACK), a;
      case 93:
        return E(), (a = e.RBRACK), a;
      case 123:
        return E(), (a = e.LBRACE), a;
      case 125:
        return E(), (a = e.RBRACE), a;
      case 46:
        if (s + 1 < A) {
          if (((t = r.charCodeAt(s + 1)), t === 60))
            return E(), E(), (a = e.DOT_LT), a;
          if (t === 46 && s + 2 < A && r.charCodeAt(s + 2) === 46)
            return E(), E(), E(), (a = e.REST), a;
          if (g.code.isDecimalDigit(t)) return (a = k()), a;
        }
        return (a = e.ILLEGAL), a;
      case 60:
        return E(), (a = e.LT), a;
      case 62:
        return E(), (a = e.GT), a;
      case 42:
        return E(), (a = e.STAR), a;
      case 124:
        return E(), (a = e.PIPE), a;
      case 63:
        return E(), (a = e.QUESTION), a;
      case 33:
        return E(), (a = e.BANG), a;
      case 61:
        return E(), (a = e.EQUAL), a;
      case 45:
        return (a = k()), a;
      default:
        return g.code.isDecimalDigit(t)
          ? ((a = k()), a)
          : (d.assert(o(t)), (a = iu()), a);
    }
  }
  function m(t, D) {
    d.assert(a === t, D || "consumed token not matched"), M();
  }
  function C(t, D) {
    a !== t && d.throwError(D || "unexpected token"), M();
  }
  function I() {
    var t,
      D = s - 1;
    if (
      (m(e.LPAREN, "UnionType should start with ("), (t = []), a !== e.RPAREN)
    )
      for (; t.push(L()), a !== e.RPAREN; ) C(e.PIPE);
    return (
      m(e.RPAREN, "UnionType should end with )"),
      v({ type: u.UnionType, elements: t }, [D, F])
    );
  }
  function c() {
    var t,
      D = s - 1,
      f;
    for (
      m(e.LBRACK, "ArrayType should start with ["), t = [];
      a !== e.RBRACK;

    ) {
      if (a === e.REST) {
        (f = s - 3),
          m(e.REST),
          t.push(v({ type: u.RestType, expression: L() }, [f, F]));
        break;
      } else t.push(L());
      a !== e.RBRACK && C(e.COMMA);
    }
    return C(e.RBRACK), v({ type: u.ArrayType, elements: t }, [D, F]);
  }
  function j() {
    var t = l;
    if (a === e.NAME || a === e.STRING) return M(), t;
    if (a === e.NUMBER) return m(e.NUMBER), String(t);
    d.throwError("unexpected token");
  }
  function U() {
    var t,
      D = F;
    return (
      (t = j()),
      a === e.COLON
        ? (m(e.COLON), v({ type: u.FieldType, key: t, value: L() }, [D, F]))
        : v({ type: u.FieldType, key: t, value: null }, [D, F])
    );
  }
  function y() {
    var t,
      D = s - 1,
      f;
    if (
      (m(e.LBRACE, "RecordType should start with {"), (t = []), a === e.COMMA)
    )
      m(e.COMMA);
    else for (; a !== e.RBRACE; ) t.push(U()), a !== e.RBRACE && C(e.COMMA);
    return (f = s), C(e.RBRACE), v({ type: u.RecordType, fields: t }, [D, f]);
  }
  function eu() {
    var t = l,
      D = s - t.length;
    return (
      C(e.NAME),
      a === e.COLON &&
        (t === "module" || t === "external" || t === "event") &&
        (m(e.COLON), (t += ":" + l), C(e.NAME)),
      v({ type: u.NameExpression, name: t }, [D, F])
    );
  }
  function su() {
    var t = [];
    for (t.push(G()); a === e.COMMA; ) m(e.COMMA), t.push(G());
    return t;
  }
  function H() {
    var t,
      D,
      f = s - l.length;
    return (
      (t = eu()),
      a === e.DOT_LT || a === e.LT
        ? (M(),
          (D = su()),
          C(e.GT),
          v({ type: u.TypeApplication, expression: t, applications: D }, [
            f,
            F,
          ]))
        : t
    );
  }
  function Au() {
    return (
      m(e.COLON, "ResultType should start with :"),
      a === e.NAME && l === "void" ? (m(e.NAME), { type: u.VoidLiteral }) : L()
    );
  }
  function b() {
    for (var t = [], D = !1, f, i = !1, n, p = s - 3, h; a !== e.RPAREN; )
      a === e.REST && (m(e.REST), (i = !0)),
        (n = F),
        (f = L()),
        f.type === u.NameExpression &&
          a === e.COLON &&
          ((h = F - f.name.length),
          m(e.COLON),
          (f = v({ type: u.ParameterType, name: f.name, expression: L() }, [
            h,
            F,
          ]))),
        a === e.EQUAL
          ? (m(e.EQUAL),
            (f = v({ type: u.OptionalType, expression: f }, [n, F])),
            (D = !0))
          : D && d.throwError("unexpected token"),
        i && (f = v({ type: u.RestType, expression: f }, [p, F])),
        t.push(f),
        a !== e.RPAREN && C(e.COMMA);
    return t;
  }
  function yu() {
    var t,
      D,
      f,
      i,
      n,
      p = s - l.length;
    return (
      d.assert(
        a === e.NAME && l === "function",
        "FunctionType should start with 'function'"
      ),
      m(e.NAME),
      C(e.LPAREN),
      (t = !1),
      (f = []),
      (D = null),
      a !== e.RPAREN &&
        (a === e.NAME && (l === "this" || l === "new")
          ? ((t = l === "new"),
            m(e.NAME),
            C(e.COLON),
            (D = H()),
            a === e.COMMA && (m(e.COMMA), (f = b())))
          : (f = b())),
      C(e.RPAREN),
      (i = null),
      a === e.COLON && (i = Au()),
      (n = v({ type: u.FunctionType, params: f, result: i }, [p, F])),
      D && ((n.this = D), t && (n.new = !0)),
      n
    );
  }
  function ru() {
    var t, D;
    switch (a) {
      case e.STAR:
        return m(e.STAR), v({ type: u.AllLiteral }, [F - 1, F]);
      case e.LPAREN:
        return I();
      case e.LBRACK:
        return c();
      case e.LBRACE:
        return y();
      case e.NAME:
        if (((D = s - l.length), l === "null"))
          return m(e.NAME), v({ type: u.NullLiteral }, [D, F]);
        if (l === "undefined")
          return m(e.NAME), v({ type: u.UndefinedLiteral }, [D, F]);
        if (l === "true" || l === "false")
          return (
            m(e.NAME),
            v({ type: u.BooleanLiteralType, value: l === "true" }, [D, F])
          );
        if (((t = x.save()), l === "function"))
          try {
            return yu();
          } catch {
            t.restore();
          }
        return H();
      case e.STRING:
        return (
          M(), v({ type: u.StringLiteralType, value: l }, [F - l.length - 2, F])
        );
      case e.NUMBER:
        return (
          M(),
          v({ type: u.NumericLiteralType, value: l }, [F - String(l).length, F])
        );
      default:
        d.throwError("unexpected token");
    }
  }
  function L() {
    var t, D;
    return a === e.QUESTION
      ? ((D = s - 1),
        m(e.QUESTION),
        a === e.COMMA ||
        a === e.EQUAL ||
        a === e.RBRACE ||
        a === e.RPAREN ||
        a === e.PIPE ||
        a === e.EOF ||
        a === e.RBRACK ||
        a === e.GT
          ? v({ type: u.NullableLiteral }, [D, F])
          : v({ type: u.NullableType, expression: ru(), prefix: !0 }, [D, F]))
      : a === e.BANG
      ? ((D = s - 1),
        m(e.BANG),
        v({ type: u.NonNullableType, expression: ru(), prefix: !0 }, [D, F]))
      : ((D = F),
        (t = ru()),
        a === e.BANG
          ? (m(e.BANG),
            v({ type: u.NonNullableType, expression: t, prefix: !1 }, [D, F]))
          : a === e.QUESTION
          ? (m(e.QUESTION),
            v({ type: u.NullableType, expression: t, prefix: !1 }, [D, F]))
          : a === e.LBRACK
          ? (m(e.LBRACK),
            C(
              e.RBRACK,
              "expected an array-style type declaration (" + l + "[])"
            ),
            v(
              {
                type: u.TypeApplication,
                expression: v({ type: u.NameExpression, name: "Array" }, [
                  D,
                  F,
                ]),
                applications: [t],
              },
              [D, F]
            ))
          : t);
  }
  function G() {
    var t, D;
    if (((t = L()), a !== e.PIPE)) return t;
    for (D = [t], m(e.PIPE); D.push(L()), a === e.PIPE; ) m(e.PIPE);
    return v({ type: u.UnionType, elements: D }, [0, s]);
  }
  function W() {
    var t;
    return a === e.REST
      ? (m(e.REST), v({ type: u.RestType, expression: G() }, [0, s]))
      : ((t = G()),
        a === e.EQUAL
          ? (m(e.EQUAL), v({ type: u.OptionalType, expression: t }, [0, s]))
          : t);
  }
  function Fu(t, D) {
    var f;
    return (
      (r = t),
      (A = r.length),
      (s = 0),
      (F = 0),
      (S = D && D.range),
      (P = (D && D.startIndex) || 0),
      M(),
      (f = G()),
      D && D.midstream
        ? { expression: f, index: F }
        : (a !== e.EOF && d.throwError("not reach to EOF"), f)
    );
  }
  function vu(t, D) {
    var f;
    return (
      (r = t),
      (A = r.length),
      (s = 0),
      (F = 0),
      (S = D && D.range),
      (P = (D && D.startIndex) || 0),
      M(),
      (f = W()),
      D && D.midstream
        ? { expression: f, index: F }
        : (a !== e.EOF && d.throwError("not reach to EOF"), f)
    );
  }
  function $(t, D, f) {
    var i, n, p;
    switch (t.type) {
      case u.NullableLiteral:
        i = "?";
        break;
      case u.AllLiteral:
        i = "*";
        break;
      case u.NullLiteral:
        i = "null";
        break;
      case u.UndefinedLiteral:
        i = "undefined";
        break;
      case u.VoidLiteral:
        i = "void";
        break;
      case u.UnionType:
        for (f ? (i = "") : (i = "("), n = 0, p = t.elements.length; n < p; ++n)
          (i += $(t.elements[n], D)), n + 1 !== p && (i += D ? "|" : " | ");
        f || (i += ")");
        break;
      case u.ArrayType:
        for (i = "[", n = 0, p = t.elements.length; n < p; ++n)
          (i += $(t.elements[n], D)), n + 1 !== p && (i += D ? "," : ", ");
        i += "]";
        break;
      case u.RecordType:
        for (i = "{", n = 0, p = t.fields.length; n < p; ++n)
          (i += $(t.fields[n], D)), n + 1 !== p && (i += D ? "," : ", ");
        i += "}";
        break;
      case u.FieldType:
        t.value ? (i = t.key + (D ? ":" : ": ") + $(t.value, D)) : (i = t.key);
        break;
      case u.FunctionType:
        for (
          i = D ? "function(" : "function (",
            t.this &&
              (t.new
                ? (i += D ? "new:" : "new: ")
                : (i += D ? "this:" : "this: "),
              (i += $(t.this, D)),
              t.params.length !== 0 && (i += D ? "," : ", ")),
            n = 0,
            p = t.params.length;
          n < p;
          ++n
        )
          (i += $(t.params[n], D)), n + 1 !== p && (i += D ? "," : ", ");
        (i += ")"), t.result && (i += (D ? ":" : ": ") + $(t.result, D));
        break;
      case u.ParameterType:
        i = t.name + (D ? ":" : ": ") + $(t.expression, D);
        break;
      case u.RestType:
        (i = "..."), t.expression && (i += $(t.expression, D));
        break;
      case u.NonNullableType:
        t.prefix
          ? (i = "!" + $(t.expression, D))
          : (i = $(t.expression, D) + "!");
        break;
      case u.OptionalType:
        i = $(t.expression, D) + "=";
        break;
      case u.NullableType:
        t.prefix
          ? (i = "?" + $(t.expression, D))
          : (i = $(t.expression, D) + "?");
        break;
      case u.NameExpression:
        i = t.name;
        break;
      case u.TypeApplication:
        for (
          i = $(t.expression, D) + ".<", n = 0, p = t.applications.length;
          n < p;
          ++n
        )
          (i += $(t.applications[n], D)), n + 1 !== p && (i += D ? "," : ", ");
        i += ">";
        break;
      case u.StringLiteralType:
        i = '"' + t.value + '"';
        break;
      case u.NumericLiteralType:
        i = String(t.value);
        break;
      case u.BooleanLiteralType:
        i = String(t.value);
        break;
      default:
        d.throwError("Unknown type " + t.type);
    }
    return i;
  }
  function w(t, D) {
    return D == null && (D = {}), $(t, D.compact, D.topLevel);
  }
  (au.parseType = Fu),
    (au.parseParamType = vu),
    (au.stringify = w),
    (au.Syntax = u);
})();
(function (u) {
  (function () {
    var e, r, A, s, F;
    (s = Du), (e = au), (r = Q);
    function a(C, I, c) {
      return C.slice(I, c);
    }
    F = (function () {
      var C = Object.prototype.hasOwnProperty;
      return function (c, j) {
        return C.call(c, j);
      };
    })();
    function l(C) {
      var I = {},
        c;
      for (c in C) C.hasOwnProperty(c) && (I[c] = C[c]);
      return I;
    }
    function g(C) {
      return (
        (C >= 97 && C <= 122) || (C >= 65 && C <= 90) || (C >= 48 && C <= 57)
      );
    }
    function d(C) {
      return C === "param" || C === "argument" || C === "arg";
    }
    function P(C) {
      return C === "return" || C === "returns";
    }
    function S(C) {
      return C === "property" || C === "prop";
    }
    function o(C) {
      return (
        d(C) ||
        S(C) ||
        C === "alias" ||
        C === "this" ||
        C === "mixes" ||
        C === "requires"
      );
    }
    function x(C) {
      return o(C) || C === "const" || C === "constant";
    }
    function v(C) {
      return S(C) || d(C);
    }
    function E(C) {
      return S(C) || d(C);
    }
    function B(C) {
      return (
        d(C) ||
        P(C) ||
        C === "define" ||
        C === "enum" ||
        C === "implements" ||
        C === "this" ||
        C === "type" ||
        C === "typedef" ||
        S(C)
      );
    }
    function R(C) {
      return (
        B(C) ||
        C === "throws" ||
        C === "const" ||
        C === "constant" ||
        C === "namespace" ||
        C === "member" ||
        C === "var" ||
        C === "module" ||
        C === "constructor" ||
        C === "class" ||
        C === "extends" ||
        C === "augments" ||
        C === "public" ||
        C === "private" ||
        C === "protected"
      );
    }
    var k =
        "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
      iu =
        "(" +
        k +
        "*(?:\\*" +
        k +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function M(C) {
      return C.replace(/^\/\*\*?/, "")
        .replace(/\*\/$/, "")
        .replace(new RegExp(iu, "g"), "$2")
        .replace(/\s*$/, "");
    }
    function m(C, I) {
      for (
        var c = C.replace(/^\/\*\*?/, ""), j = 0, U = new RegExp(iu, "g"), y;
        (y = U.exec(c));

      )
        if (((j += y[1].length), y.index + y[0].length > I + j))
          return I + j + C.length - c.length;
      return C.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function (C) {
      var I, c, j, U, y, eu, su, H, Au;
      function b() {
        var i = y.charCodeAt(c);
        return (
          (c += 1),
          s.code.isLineTerminator(i) &&
            !(i === 13 && y.charCodeAt(c) === 10) &&
            (j += 1),
          String.fromCharCode(i)
        );
      }
      function yu() {
        var i = "";
        for (b(); c < U && g(y.charCodeAt(c)); ) i += b();
        return i;
      }
      function ru() {
        var i,
          n,
          p = c;
        for (n = !1; p < U; ) {
          if (
            ((i = y.charCodeAt(p)),
            s.code.isLineTerminator(i) &&
              !(i === 13 && y.charCodeAt(p + 1) === 10))
          )
            n = !0;
          else if (n) {
            if (i === 64) break;
            s.code.isWhiteSpace(i) || (n = !1);
          }
          p += 1;
        }
        return p;
      }
      function L(i, n, p) {
        for (var h, N, _, O, z = !1; c < n; )
          if (((h = y.charCodeAt(c)), s.code.isWhiteSpace(h))) b();
          else if (h === 123) {
            b();
            break;
          } else {
            z = !0;
            break;
          }
        if (z) return null;
        for (N = 1, _ = ""; c < n; )
          if (((h = y.charCodeAt(c)), s.code.isLineTerminator(h))) b();
          else {
            if (h === 125) {
              if (((N -= 1), N === 0)) {
                b();
                break;
              }
            } else h === 123 && (N += 1);
            _ === "" && (O = c), (_ += b());
          }
        return N !== 0
          ? r.throwError("Braces are not balanced")
          : E(i)
          ? e.parseParamType(_, { startIndex: $(O), range: p })
          : e.parseType(_, { startIndex: $(O), range: p });
      }
      function G(i) {
        var n;
        if (
          !s.code.isIdentifierStartES5(y.charCodeAt(c)) &&
          !y[c].match(/[0-9]/)
        )
          return null;
        for (n = b(); c < i && s.code.isIdentifierPartES5(y.charCodeAt(c)); )
          n += b();
        return n;
      }
      function W(i) {
        for (
          ;
          c < i &&
          (s.code.isWhiteSpace(y.charCodeAt(c)) ||
            s.code.isLineTerminator(y.charCodeAt(c)));

        )
          b();
      }
      function Fu(i, n, p) {
        var h = "",
          N,
          _;
        if ((W(i), c >= i)) return null;
        if (y.charCodeAt(c) === 91)
          if (n) (N = !0), (h = b());
          else return null;
        if (((h += G(i)), p))
          for (
            y.charCodeAt(c) === 58 &&
              (h === "module" || h === "external" || h === "event") &&
              ((h += b()), (h += G(i))),
              y.charCodeAt(c) === 91 &&
                y.charCodeAt(c + 1) === 93 &&
                ((h += b()), (h += b()));
            y.charCodeAt(c) === 46 ||
            y.charCodeAt(c) === 47 ||
            y.charCodeAt(c) === 35 ||
            y.charCodeAt(c) === 45 ||
            y.charCodeAt(c) === 126;

          )
            (h += b()), (h += G(i));
        if (N) {
          if ((W(i), y.charCodeAt(c) === 61)) {
            (h += b()), W(i);
            for (var O, z = 1; c < i; ) {
              if (
                ((O = y.charCodeAt(c)),
                s.code.isWhiteSpace(O) && (_ || (W(i), (O = y.charCodeAt(c)))),
                O === 39 && (_ ? _ === "'" && (_ = "") : (_ = "'")),
                O === 34 && (_ ? _ === '"' && (_ = "") : (_ = '"')),
                O === 91)
              )
                z++;
              else if (O === 93 && --z === 0) break;
              h += b();
            }
          }
          if ((W(i), c >= i || y.charCodeAt(c) !== 93)) return null;
          h += b();
        }
        return h;
      }
      function vu() {
        for (; c < U && y.charCodeAt(c) !== 64; ) b();
        return c >= U ? !1 : (r.assert(y.charCodeAt(c) === 64), !0);
      }
      function $(i) {
        return y === eu ? i : m(eu, i);
      }
      function w(i, n) {
        (this._options = i),
          (this._title = n.toLowerCase()),
          (this._tag = { title: n, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = j),
          (this._first = c - n.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (w.prototype.addError = function (n) {
        var p = Array.prototype.slice.call(arguments, 1),
          h = n.replace(/%(\d)/g, function (N, _) {
            return (
              r.assert(_ < p.length, "Message reference must be in range"), p[_]
            );
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          Au && r.throwError(h),
          this._tag.errors.push(h),
          su
        );
      }),
        (w.prototype.parseType = function () {
          if (B(this._title))
            try {
              if (
                ((this._tag.type = L(
                  this._title,
                  this._last,
                  this._options.range
                )),
                !this._tag.type &&
                  !d(this._title) &&
                  !P(this._title) &&
                  !this.addError("Missing or invalid tag type"))
              )
                return !1;
            } catch (i) {
              if (((this._tag.type = null), !this.addError(i.message)))
                return !1;
            }
          else if (R(this._title))
            try {
              this._tag.type = L(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (w.prototype._parseNamePath = function (i) {
          var n;
          return (
            (n = Fu(this._last, H && E(this._title), !0)),
            !n && !i && !this.addError("Missing or invalid tag name")
              ? !1
              : ((this._tag.name = n), !0)
          );
        }),
        (w.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (w.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (w.prototype.parseName = function () {
          var i, n;
          if (x(this._title))
            if (
              ((this._tag.name = Fu(
                this._last,
                H && E(this._title),
                v(this._title)
              )),
              this._tag.name)
            )
              (n = this._tag.name),
                n.charAt(0) === "[" &&
                  n.charAt(n.length - 1) === "]" &&
                  ((i = n.substring(1, n.length - 1).split("=")),
                  i.length > 1 && (this._tag.default = i.slice(1).join("=")),
                  (this._tag.name = i[0]),
                  this._tag.type &&
                    this._tag.type.type !== "OptionalType" &&
                    (this._tag.type = {
                      type: "OptionalType",
                      expression: this._tag.type,
                    }));
            else {
              if (!o(this._title)) return !0;
              if (d(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError("Missing or invalid tag name")) return !1;
            }
          return !0;
        }),
        (w.prototype.parseDescription = function () {
          var n = a(y, c, this._last).trim();
          return (
            n &&
              (/^-\s+/.test(n) && (n = n.substring(2)),
              (this._tag.description = n)),
            !0
          );
        }),
        (w.prototype.parseCaption = function () {
          var n = a(y, c, this._last).trim(),
            p = "<caption>",
            h = "</caption>",
            N = n.indexOf(p),
            _ = n.indexOf(h);
          return (
            N >= 0 && _ >= 0
              ? ((this._tag.caption = n.substring(N + p.length, _).trim()),
                (this._tag.description = n.substring(_ + h.length).trim()))
              : (this._tag.description = n),
            !0
          );
        }),
        (w.prototype.parseKind = function () {
          var n, p;
          return (
            (p = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (n = a(y, c, this._last).trim()),
            (this._tag.kind = n),
            !(!F(p, n) && !this.addError("Invalid kind name '%0'", n))
          );
        }),
        (w.prototype.parseAccess = function () {
          var n;
          return (
            (n = a(y, c, this._last).trim()),
            (this._tag.access = n),
            !(
              n !== "private" &&
              n !== "protected" &&
              n !== "public" &&
              !this.addError("Invalid access name '%0'", n)
            )
          );
        }),
        (w.prototype.parseThis = function () {
          var n = a(y, c, this._last).trim();
          if (n && n.charAt(0) === "{") {
            var p = this.parseType();
            return (p && this._tag.type.type === "NameExpression") ||
              this._tag.type.type === "UnionType"
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError("Invalid name for this");
          } else return this.parseNamePath();
        }),
        (w.prototype.parseVariation = function () {
          var n, p;
          return (
            (p = a(y, c, this._last).trim()),
            (n = parseFloat(p, 10)),
            (this._tag.variation = n),
            !(isNaN(n) && !this.addError("Invalid variation '%0'", p))
          );
        }),
        (w.prototype.ensureEnd = function () {
          var i = a(y, c, this._last).trim();
          return !(i && !this.addError("Unknown content '%0'", i));
        }),
        (w.prototype.epilogue = function () {
          var n;
          return (
            (n = this._tag.description),
            !(
              E(this._title) &&
              !this._tag.type &&
              n &&
              n.charAt(0) === "[" &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !H && !this.addError("Missing or invalid tag name"))
            )
          );
        }),
        (I = {
          access: ["parseAccess"],
          alias: ["parseNamePath", "ensureEnd"],
          augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
          constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
          class: ["parseType", "parseNamePathOptional", "ensureEnd"],
          extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
          example: ["parseCaption"],
          deprecated: ["parseDescription"],
          global: ["ensureEnd"],
          inner: ["ensureEnd"],
          instance: ["ensureEnd"],
          kind: ["parseKind"],
          mixes: ["parseNamePath", "ensureEnd"],
          mixin: ["parseNamePathOptional", "ensureEnd"],
          member: ["parseType", "parseNamePathOptional", "ensureEnd"],
          method: ["parseNamePathOptional", "ensureEnd"],
          module: ["parseType", "parseNamePathOptional", "ensureEnd"],
          func: ["parseNamePathOptional", "ensureEnd"],
          function: ["parseNamePathOptional", "ensureEnd"],
          var: ["parseType", "parseNamePathOptional", "ensureEnd"],
          name: ["parseNamePath", "ensureEnd"],
          namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
          private: ["parseType", "parseDescription"],
          protected: ["parseType", "parseDescription"],
          public: ["parseType", "parseDescription"],
          readonly: ["ensureEnd"],
          requires: ["parseNamePath", "ensureEnd"],
          since: ["parseDescription"],
          static: ["ensureEnd"],
          summary: ["parseDescription"],
          this: ["parseThis", "ensureEnd"],
          todo: ["parseDescription"],
          typedef: ["parseType", "parseNamePathOptional"],
          variation: ["parseVariation"],
          version: ["parseDescription"],
        }),
        (w.prototype.parse = function () {
          var n, p, h, N;
          if (!this._title && !this.addError("Missing or invalid title"))
            return null;
          for (
            this._last = ru(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  y.slice(0, this._last).replace(/\s*$/, "").length,
                ].map($)),
              F(I, this._title)
                ? (h = I[this._title])
                : (h = [
                    "parseType",
                    "parseName",
                    "parseDescription",
                    "epilogue",
                  ]),
              n = 0,
              p = h.length;
            n < p;
            ++n
          )
            if (((N = h[n]), !this[N]())) return null;
          return this._tag;
        });
      function t(i) {
        var n, p, h;
        if (!vu()) return null;
        for (n = yu(), p = new w(i, n), h = p.parse(); c < p._last; ) b();
        return h;
      }
      function D(i) {
        var n = "",
          p,
          h;
        for (h = !0; c < U && ((p = y.charCodeAt(c)), !(h && p === 64)); )
          s.code.isLineTerminator(p)
            ? (h = !0)
            : h && !s.code.isWhiteSpace(p) && (h = !1),
            (n += b());
        return i ? n : n.trim();
      }
      function f(i, n) {
        var p = [],
          h,
          N,
          _,
          O,
          z;
        if (
          (n === void 0 && (n = {}),
          typeof n.unwrap == "boolean" && n.unwrap ? (y = M(i)) : (y = i),
          (eu = i),
          n.tags)
        )
          if (Array.isArray(n.tags))
            for (_ = {}, O = 0, z = n.tags.length; O < z; O++)
              typeof n.tags[O] == "string"
                ? (_[n.tags[O]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + n.tags);
          else r.throwError('Invalid "tags" parameter: ' + n.tags);
        for (
          U = y.length,
            c = 0,
            j = 0,
            su = n.recoverable,
            H = n.sloppy,
            Au = n.strict,
            N = D(n.preserveWhitespace);
          (h = t(n)), !!h;

        )
          (!_ || _.hasOwnProperty(h.title)) && p.push(h);
        return { description: N, tags: p };
      }
      C.parse = f;
    })((A = {})),
      (u.version = r.VERSION),
      (u.parse = A.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = M),
      (u.Syntax = l(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = {
        Syntax: u.Syntax,
        parseType: e.parseType,
        parseParamType: e.parseParamType,
        stringify: e.stringify,
      });
  })();
})(pe);
const $i = te(pe);
export {
  yi as A,
  ae as B,
  Da as C,
  da as D,
  ca as E,
  LD as F,
  PD as G,
  XD as H,
  Fa as I,
  hn as J,
  It as K,
  Bu as L,
  dD as M,
  hD as N,
  K as _,
  Pn as a,
  xi as b,
  vi as c,
  Nt as d,
  gi as e,
  mi as f,
  Ra as g,
  xD as h,
  ie as i,
  Ou as j,
  du as k,
  rn as l,
  Ti as m,
  _i as n,
  Oa as o,
  ja as p,
  Fe as q,
  bi as r,
  $i as s,
  ye as t,
  yt as u,
  Mt as v,
  mt as w,
  Du as x,
  nu as y,
  Si as z,
};
