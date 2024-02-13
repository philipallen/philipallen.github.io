import { r as u, R as p } from "./index-c013ead5.js";
import { t as O, Z as T, H as L, u as X, c as g } from "./throttle-bc039b84.js";
import { n as x, d as R, T as z, F as B, I as G } from "./index-796cc39e.js";
import "./commonjsHelpers-725317a4.js";
import "./doctrine-744fe685.js";
import "./iframe-92f28330.js";
import "../sb-preview/runtime.js";
import "./index-1b89a1c6.js";
import "./isNativeReflectConstruct-81b4d0cb.js";
import "./index-169ee69c.js";
import "./index-356e4a49.js";
var V = (e) => `control-${e.replace(/\s+/g, "-")}`,
  F = x.div({ position: "relative", maxWidth: 250 }),
  M = x(R)({ position: "absolute", zIndex: 1, top: 4, left: 4 }),
  W = x.div({
    width: 200,
    margin: 5,
    ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
    ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" },
    ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
  }),
  N = x(z)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
  A = x.div({
    display: "grid",
    gridTemplateColumns: "repeat(9, 16px)",
    gap: 6,
    padding: 3,
    marginTop: 5,
    width: 200,
  }),
  j = x.div(({ theme: e, active: t }) => ({
    width: 16,
    height: 16,
    boxShadow: t
      ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
      : `${e.appBorderColor} 0 0 0 1px inset`,
    borderRadius: e.appBorderRadius,
  })),
  Z = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  S = ({ value: e, active: t, onClick: s, style: i, ...a }) => {
    let o = `linear-gradient(${e}, ${e}), ${Z}, linear-gradient(#fff, #fff)`;
    return p.createElement(j, {
      ...a,
      active: t,
      onClick: s,
      style: { ...i, backgroundImage: o },
    });
  },
  q = x(B.Input)(({ theme: e }) => ({
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: "border-box",
    fontFamily: e.typography.fonts.base,
  })),
  D = x(G)(({ theme: e }) => ({
    position: "absolute",
    zIndex: 1,
    top: 6,
    right: 7,
    width: 20,
    height: 20,
    padding: 4,
    boxSizing: "border-box",
    cursor: "pointer",
    color: e.input.color,
  })),
  _ = ((e) => ((e.RGB = "rgb"), (e.HSL = "hsl"), (e.HEX = "hex"), e))(_ || {}),
  w = Object.values(_),
  J = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
  K = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
  Q = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
  k = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
  U = /^\s*#?([0-9a-f]{3})\s*$/i,
  Y = { hex: T, rgb: L, hsl: X },
  y = {
    hex: "transparent",
    rgb: "rgba(0, 0, 0, 0)",
    hsl: "hsla(0, 0%, 0%, 0)",
  },
  v = (e) => {
    let t = e == null ? void 0 : e.match(J);
    if (!t) return [0, 0, 0, 1];
    let [, s, i, a, o = 1] = t;
    return [s, i, a, o].map(Number);
  },
  f = (e) => {
    if (!e) return;
    let t = !0;
    if (K.test(e)) {
      let [n, r, d, m] = v(e),
        [b, h, l] = g.rgb.hsl([n, r, d]) || [0, 0, 0];
      return {
        valid: t,
        value: e,
        keyword: g.rgb.keyword([n, r, d]),
        colorSpace: "rgb",
        rgb: e,
        hsl: `hsla(${b}, ${h}%, ${l}%, ${m})`,
        hex: `#${g.rgb.hex([n, r, d]).toLowerCase()}`,
      };
    }
    if (Q.test(e)) {
      let [n, r, d, m] = v(e),
        [b, h, l] = g.hsl.rgb([n, r, d]) || [0, 0, 0];
      return {
        valid: t,
        value: e,
        keyword: g.hsl.keyword([n, r, d]),
        colorSpace: "hsl",
        rgb: `rgba(${b}, ${h}, ${l}, ${m})`,
        hsl: e,
        hex: `#${g.hsl.hex([n, r, d]).toLowerCase()}`,
      };
    }
    let s = e.replace("#", ""),
      i = g.keyword.rgb(s) || g.hex.rgb(s),
      a = g.rgb.hsl(i),
      o = e;
    if (
      (/[^#a-f0-9]/i.test(e) ? (o = s) : k.test(e) && (o = `#${s}`),
      o.startsWith("#"))
    )
      t = k.test(o);
    else
      try {
        g.keyword.hex(o);
      } catch {
        t = !1;
      }
    return {
      valid: t,
      value: o,
      keyword: g.rgb.keyword(i),
      colorSpace: "hex",
      rgb: `rgba(${i[0]}, ${i[1]}, ${i[2]}, 1)`,
      hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
      hex: o,
    };
  },
  ee = (e, t, s) => {
    if (!e || !(t != null && t.valid)) return y[s];
    if (s !== "hex") return (t == null ? void 0 : t[s]) || y[s];
    if (!t.hex.startsWith("#"))
      try {
        return `#${g.keyword.hex(t.hex)}`;
      } catch {
        return y.hex;
      }
    let i = t.hex.match(U);
    if (!i) return k.test(t.hex) ? t.hex : y.hex;
    let [a, o, n] = i[1].split("");
    return `#${a}${a}${o}${o}${n}${n}`;
  },
  te = (e, t) => {
    let [s, i] = u.useState(e || ""),
      [a, o] = u.useState(() => f(s)),
      [n, r] = u.useState((a == null ? void 0 : a.colorSpace) || "hex");
    u.useEffect(() => {
      let h = e || "",
        l = f(h);
      i(h), o(l), r((l == null ? void 0 : l.colorSpace) || "hex");
    }, [e]);
    let d = u.useMemo(() => ee(s, a, n).toLowerCase(), [s, a, n]),
      m = u.useCallback(
        (h) => {
          let l = f(h),
            $ = (l == null ? void 0 : l.value) || h || "";
          i($),
            $ === "" && (o(void 0), t(void 0)),
            l && (o(l), r(l.colorSpace), t(l.value));
        },
        [t]
      ),
      b = u.useCallback(() => {
        let h = w.indexOf(n) + 1;
        h >= w.length && (h = 0), r(w[h]);
        let l = (a == null ? void 0 : a[w[h]]) || "";
        i(l), t(l);
      }, [a, n, t]);
    return {
      value: s,
      realValue: d,
      updateValue: m,
      color: a,
      colorSpace: n,
      cycleColorSpace: b,
    };
  },
  E = (e) => e.replace(/\s*/, "").toLowerCase(),
  ae = (e, t, s) => {
    let [i, a] = u.useState(t != null && t.valid ? [t] : []);
    u.useEffect(() => {
      t === void 0 && a([]);
    }, [t]);
    let o = u.useMemo(
        () =>
          (e || [])
            .map((r) =>
              typeof r == "string"
                ? f(r)
                : r.title
                ? { ...f(r.color), keyword: r.title }
                : f(r.color)
            )
            .concat(i)
            .filter(Boolean)
            .slice(-27),
        [e, i]
      ),
      n = u.useCallback(
        (r) => {
          r != null &&
            r.valid &&
            (o.some((d) => E(d[s]) === E(r[s])) || a((d) => d.concat(r)));
        },
        [s, o]
      );
    return { presets: o, addPreset: n };
  },
  re = ({
    name: e,
    value: t,
    onChange: s,
    onFocus: i,
    onBlur: a,
    presetColors: o,
    startOpen: n = !1,
  }) => {
    let r = u.useCallback(O(s, 200), [s]),
      {
        value: d,
        realValue: m,
        updateValue: b,
        color: h,
        colorSpace: l,
        cycleColorSpace: $,
      } = te(t, r),
      { presets: C, addPreset: P } = ae(o, h, l),
      H = Y[l];
    return p.createElement(
      F,
      null,
      p.createElement(
        M,
        {
          startOpen: n,
          closeOnOutsideClick: !0,
          onVisibleChange: () => P(h),
          tooltip: p.createElement(
            W,
            null,
            p.createElement(H, {
              color: m === "transparent" ? "#000000" : m,
              onChange: b,
              onFocus: i,
              onBlur: a,
            }),
            C.length > 0 &&
              p.createElement(
                A,
                null,
                C.map((c, I) =>
                  p.createElement(
                    R,
                    {
                      key: `${c.value}-${I}`,
                      hasChrome: !1,
                      tooltip: p.createElement(N, {
                        note: c.keyword || c.value,
                      }),
                    },
                    p.createElement(S, {
                      value: c[l],
                      active: h && E(c[l]) === E(h[l]),
                      onClick: () => b(c.value),
                    })
                  )
                )
              )
          ),
        },
        p.createElement(S, { value: m, style: { margin: 4 } })
      ),
      p.createElement(q, {
        id: V(e),
        value: d,
        onChange: (c) => b(c.target.value),
        onFocus: (c) => c.target.select(),
        placeholder: "Choose color...",
      }),
      d ? p.createElement(D, { icon: "markup", onClick: $ }) : null
    );
  },
  me = re;
export { re as ColorControl, me as default };
