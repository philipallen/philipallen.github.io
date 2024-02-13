import {
  D as c,
  c as d,
  B as i,
  d as l,
  g as u,
  j as o,
  e as m,
} from "./index-771fcc08.js";
import "./index-c013ead5.js";
import "./commonjsHelpers-725317a4.js";
const {
    light: { color: a },
  } = u("boi"),
  h = (r, { globals: e }) =>
    o.jsx(m, { brandTheme: e.brandTheme, children: o.jsx(r, {}) }),
  T = (r, { globals: e, parameters: s }) => {
    var t;
    const n = `.docs-story {
    background-color: ${
      ((t = e == null ? void 0 : e.backgrounds) == null ? void 0 : t.value) ||
      s.backgrounds.values[0].value
    }
  }`;
    return o.jsxs(o.Fragment, {
      children: [o.jsx("style", { children: n }), o.jsx(r, {})],
    });
  },
  b = {
    globalTypes: {
      brandTheme: {
        description: "Global brand / theme for components",
        defaultValue: `${c}::${d}`,
        toolbar: {
          icon: "paintbrush",
          dynamicTitle: !0,
          title: "Brand / Theme",
          items: i.flatMap((r) =>
            l(r).flatMap((e) => ({ title: `${r} (${e})`, value: `${r}::${e}` }))
          ),
        },
      },
    },
    parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
      backgrounds: {
        default: "Ground Grey",
        values: [
          { name: "Ground Grey", value: a.groundGrey },
          { name: "DM Primary", value: a.dmPrimary },
        ],
      },
    },
    decorators: [h, T],
  };
export { b as default };
