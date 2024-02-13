import { j as t } from "./index-771fcc08.js";
import { M as e, C as r } from "./index-796cc39e.js";
import { T as m, B as a, D as p, W as c } from "./Tabs.stories-319a64e2.js";
import { u as i } from "./index-dc1d5b46.js";
import "./index-c013ead5.js";
import "./commonjsHelpers-725317a4.js";
import "./iframe-92f28330.js";
import "../sb-preview/runtime.js";
import "./index-1b89a1c6.js";
import "./isNativeReflectConstruct-81b4d0cb.js";
import "./doctrine-744fe685.js";
import "./index-169ee69c.js";
import "./index-356e4a49.js";
import "./index-583b5bb5.js";
import "./Typography-4da87cb1.js";
import "./index-d9c054de.js";
import "./import-9a74973a.js";
import "./index-23ffefe9.js";
function n(o) {
  const s = Object.assign({ h1: "h1", p: "p" }, i(), o.components);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(e, { of: m }),
      `
`,
      t.jsx(s.h1, { id: "tabs", children: "Tabs" }),
      `
`,
      t.jsx(s.p, { children: "These docs are work in progress" }),
      `
`,
      t.jsx(r, { of: a }),
      `
`,
      t.jsx(r, { of: p }),
      `
`,
      t.jsx(r, { of: c }),
    ],
  });
}
function _(o = {}) {
  const { wrapper: s } = Object.assign({}, i(), o.components);
  return s ? t.jsx(s, Object.assign({}, o, { children: t.jsx(n, o) })) : n(o);
}
export { _ as default };
