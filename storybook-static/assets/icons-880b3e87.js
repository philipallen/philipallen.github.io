import { j as o } from "./index-771fcc08.js";
import { M as i, C as m } from "./index-4206f357.js";
import { I as e, F as p } from "./icons.stories-925d1de3.js";
import { u as s } from "./index-dc1d5b46.js";
import "./index-c013ead5.js";
import "./commonjsHelpers-725317a4.js";
import "./iframe-92f28330.js";
import "../sb-preview/runtime.js";
import "./index-1b89a1c6.js";
import "./isNativeReflectConstruct-81b4d0cb.js";
import "./doctrine-744fe685.js";
import "./index-169ee69c.js";
import "./index-11d98b33.js";
import "./index-cf0e44f3.js";
import "./index-356e4a49.js";
import "./index-23ffefe9.js";
import "./index-8cc54a97.js";
import "./index-d9c054de.js";
import "./index-1225df13.js";
/* empty css                         */ import "./import-9a74973a.js";
function n(t) {
  const r = Object.assign({ h1: "h1", p: "p" }, s(), t.components);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(i, { of: e }),
      `
`,
      o.jsx(r.h1, { id: "icons", children: "Icons" }),
      `
`,
      o.jsx(r.p, { children: "These docs are work in progress" }),
      `
`,
      o.jsx(m, { of: p }),
    ],
  });
}
function k(t = {}) {
  const { wrapper: r } = Object.assign({}, s(), t.components);
  return r ? o.jsx(r, Object.assign({}, t, { children: o.jsx(n, t) })) : n(t);
}
export { k as default };
