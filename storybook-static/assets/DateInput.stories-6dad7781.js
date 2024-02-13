import { j as s } from "./index-771fcc08.js";
import { r as d } from "./index-c013ead5.js";
import {
  a as O,
  b as V,
  c as $,
  s as R,
  d as w,
  e as B,
  i as L,
  f as Y,
  g as k,
  p as G,
  D as P,
} from "./DateInputBase-68b516d4.js";
import { E as U } from "./ExampleSpacer-2dc26fb5.js";
import "./ExampleBlock.styled-1f914a80.js";
import { F } from "./FormExamplesContainer.styled-5443a517.js";
import { c as W, b as X, a as q } from "./commonProps-af166571.js";
import { T as z } from "./Typography-4da87cb1.js";
import "./commonjsHelpers-725317a4.js";
import "./InputAdornment-c75a5b09.js";
import "./index-23ffefe9.js";
import "./Input-94457b53.js";
import "./ClearButton-12714a40.js";
import "./FormElementContainer-4b521e63.js";
import "./index-d9c054de.js";
const H = /^(\d\d) \/ (\d\d) \/ (\d\d\d\d)$/;
function J(e = "") {
  if (e === "") return null;
  const r = H.exec(e);
  if (r !== null) {
    const [, t, a, n] = r;
    return k(G(`${n}-${a}-${t}`)) ? new Date(`${a}/${t}/${n}`) : null;
  }
  return null;
}
function K(e, r = !1) {
  if (Number(e) === 19 || Number(e) === 20) return e;
  if (Number(e) > 20) return `${r ? "19" : "20"}${e}`;
  if (Number(e) < 19) return `20${e}`;
}
function Q({ value: e = "", isDateInPast: r = !1 }) {
  let t = e.replace(/\D/g, ""),
    a = e.replace(/[^0123456789 /]/g, "");
  (a = a.endsWith(" / /") ? a.slice(0, a.length - 1) : a),
    (t = a.endsWith(" /") ? t.slice(0, t.length - 1) : t);
  let n = t.slice(0, 2),
    o = t.slice(2, 4),
    l = t.slice(4, 8);
  switch (
    ((n = n.length === 1 && parseInt(n) > 3 ? n.padStart(2, "0") : n),
    (o = o.length === 1 && parseInt(o) > 1 ? o.padStart(2, "0") : o),
    l.length === 2 && (l = K(l, r) || ""),
    (t = n + o + l),
    t.length)
  ) {
    case 0:
      return "";
    case 1:
      return n;
    case 2:
      return n + " / ";
    case 3:
      return n + " / " + o;
    case 4:
      return n + " / " + o + " / ";
  }
  return n + " / " + o + " / " + l;
}
function Z(e = "", r = null, t = null) {
  const a = J(e);
  return a
    ? r && L(a, r)
      ? "IS_AFTER_MAX"
      : t && Y(a, t)
      ? "IS_BEFORE_MIN"
      : ""
    : "INVALID_DATE_FORMAT";
}
const ee = (e = [], r = new Date()) => {
    if (e.length <= 0) return null;
    const [t = 0, a = 0, n = 0] = e;
    return O(V($(r, n), a), t);
  },
  te = (e = [], r = new Date()) => {
    if (e.length <= 0) return null;
    const [t = 0, a = 0, n = 0] = e;
    return R(w(B(r, n), a), t);
  },
  re = "Enter a valid date",
  ne = "Date is above the max",
  ae = "Date is below the max",
  i = ({
    value: e = "",
    onChange: r,
    maxErrorMessage: t = ne,
    minErrorMessage: a = ae,
    invalidFormatMessage: n = re,
    maxYearsMonthsDaysFromNow: o = [],
    minYearsMonthsDaysFromNow: l = [],
    isDateInPast: y = !1,
    ...I
  }) => {
    const [p, h] = d.useState(!1),
      M = { IS_AFTER_MAX: t, IS_BEFORE_MIN: a, INVALID_DATE_FORMAT: n },
      _ = ee(o),
      A = te(l),
      T = () => {
        const c = e.replace(/\D/g, "");
        return c.length === 8 || (c.length > 0 && !p);
      },
      g = () => {
        const c = Z(e, _, A);
        return T() && c ? M[c] : "";
      },
      j = (c) => {
        const N = Q({ value: c, isDateInPast: y });
        r && r(N);
      },
      C = () => h(!0),
      v = () => h(!1);
    return s.jsx(P, {
      ...I,
      onFocus: C,
      isFocused: p,
      onBlur: v,
      value: e,
      onChange: j,
      isError: !!g(),
      errorText: g(),
    });
  },
  be = {
    title: "v1/DateInput",
    component: i,
    argTypes: {
      ...W,
      ...X,
      maxErrorMessage: { control: { type: "text" } },
      minErrorMessage: { control: { type: "text" } },
      invalidFormatMessage: { control: { type: "text" } },
      maxYearsMonthsDaysFromNow: { control: { type: "object" } },
      minYearsMonthsDaysFromNow: { control: { type: "object" } },
      isDateInPast: { control: { type: "boolean" } },
    },
  },
  m = {
    decorators: [
      (e, { args: r }) => {
        const [t, a] = d.useState(r.value ?? "");
        return s.jsx(F, {
          children: s.jsx(i, {
            ...r,
            value: t,
            onChange: (n) => {
              var o;
              (o = r.onChange) == null || o.call(r, n), a(n);
            },
          }),
        });
      },
    ],
    args: { name: "date-input-name", ...q },
  },
  u = {};
u.decorators = [
  () => {
    const [e, r] = d.useState("");
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(z, { variant: "headlineS", children: "Examples" }),
        s.jsx(F, {
          children: s.jsxs(U, {
            children: [
              s.jsx(i, {
                value: e,
                onChange: (t) => r(t),
                maxYearsMonthsDaysFromNow: [3, 0, 0],
                minYearsMonthsDaysFromNow: [3, 0, 0],
                labelText: "Controlled input with range +/- 3 years",
              }),
              s.jsx(i, {
                readOnly: !0,
                value: "12 / 05 / 2020",
                labelText: "Read only",
              }),
              s.jsx(i, {
                value: "12 / 05 / 2020",
                labelText: "Setting a default date",
              }),
              s.jsx(i, { labelText: "With an error", value: "46 / 99 / 2020" }),
            ],
          }),
        }),
      ],
    });
  },
];
var x, f, D;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((x = m.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState<string>(args.value ?? "");
    return <FormExamplesContainer>
          <DateInput {...args} value={value} onChange={date => {
        args.onChange?.(date);
        setValue(date);
      }} />
        </FormExamplesContainer>;
  }],
  args: {
    name: "date-input-name",
    ...commonStorybookArgs
  }
}`,
      ...((D = (f = m.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var E, b, S;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((E = u.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: "{}",
      ...((S = (b = u.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : S.source),
    },
  },
};
const Se = ["Editable", "Examples"];
export {
  m as Editable,
  u as Examples,
  Se as __namedExportsOrder,
  be as default,
};
