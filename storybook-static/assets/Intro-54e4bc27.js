import { j as o } from "./index-771fcc08.js";
import { C as i } from "./index-4206f357.js";
import { S as m } from "./Button.stories-5afc7d5d.js";
import { u as e } from "./index-dc1d5b46.js";
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
import "./index-1225df13.js";
import "./index-d9c054de.js";
import "./Button-a518293f.js";
import "./Typography-4da87cb1.js";
function n(t) {
  const r = Object.assign({ h1: "h1", p: "p" }, e(), t.components);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(r.h1, {
        id: "welcome-to-our-storybook",
        children: "Welcome to our storybook",
      }),
      `
`,
      o.jsx(r.p, { children: "These docs are work in progress" }),
      `
`,
      o.jsx(i, { of: m }),
    ],
  });
}
function X(t = {}) {
  const { wrapper: r } = Object.assign({}, e(), t.components);
  return r ? o.jsx(r, Object.assign({}, t, { children: o.jsx(n, t) })) : n(t);
}
export { X as default };
