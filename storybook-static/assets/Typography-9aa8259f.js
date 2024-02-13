import { j as o } from "./index-771fcc08.js";
import { M as e, C as i } from "./index-796cc39e.js";
import { T as p, E as m } from "./Typography.stories-b4afb659.js";
import { u as s } from "./index-dc1d5b46.js";
import "./index-c013ead5.js";
import "./commonjsHelpers-725317a4.js";
import "./iframe-92f28330.js";
import "../sb-preview/runtime.js";
import "./index-1b89a1c6.js";
import "./isNativeReflectConstruct-81b4d0cb.js";
import "./doctrine-744fe685.js";
import "./index-169ee69c.js";
import "./index-356e4a49.js";
import "./index-56ffe10b.js";
import "./index-1225df13.js";
import "./index-d9c054de.js";
import "./Typography-4da87cb1.js";
function n(t) {
  const r = Object.assign({ h1: "h1", p: "p" }, s(), t.components);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(e, { of: p }),
      `
`,
      o.jsx(r.h1, { id: "typography", children: "Typography" }),
      `
`,
      o.jsx(r.p, { children: "These docs are work in progress" }),
      `
`,
      o.jsx(i, { of: m }),
    ],
  });
}
function O(t = {}) {
  const { wrapper: r } = Object.assign({}, s(), t.components);
  return r ? o.jsx(r, Object.assign({}, t, { children: o.jsx(n, t) })) : n(t);
}
export { O as default };
