import { j as o } from "./index-771fcc08.js";
import { M as e, C as i } from "./index-796cc39e.js";
import { C as m, B as p, N as a } from "./CheckboxGroup.stories-c519c018.js";
import { u as n } from "./index-dc1d5b46.js";
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
import "./Fieldset-9cc664be.js";
import "./Typography-4da87cb1.js";
import "./index-d9c054de.js";
import "./Checkbox-10b529d9.js";
import "./InputAlert-b00bcc36.js";
import "./index-23ffefe9.js";
import "./index-1225df13.js";
import "./InputLabelRight-fc0b004a.js";
import "./import-9a74973a.js";
function s(t) {
  const r = Object.assign({ h1: "h1", p: "p" }, n(), t.components);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(e, { of: m }),
      `
`,
      o.jsx(r.h1, { id: "checkboxgroup", children: "CheckboxGroup" }),
      `
`,
      o.jsx(r.p, { children: "These docs are work in progress" }),
      `
`,
      o.jsx(i, { of: p }),
      `
`,
      o.jsx(i, { of: a }),
    ],
  });
}
function E(t = {}) {
  const { wrapper: r } = Object.assign({}, n(), t.components);
  return r ? o.jsx(r, Object.assign({}, t, { children: o.jsx(s, t) })) : s(t);
}
export { E as default };
