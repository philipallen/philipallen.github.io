import { _ as a } from "./iframe-92f28330.js";
import { R as e, r as c } from "./index-c013ead5.js";
import { r as l, u } from "./react-18-170c9fcf.js";
import { b as h, A as E, H as d, D as x } from "./index-4206f357.js";
import "../sb-preview/runtime.js";
import "./commonjsHelpers-725317a4.js";
import "./index-169ee69c.js";
import "./index-1b89a1c6.js";
import "./isNativeReflectConstruct-81b4d0cb.js";
import "./doctrine-744fe685.js";
import "./index-11d98b33.js";
import "./index-cf0e44f3.js";
import "./index-356e4a49.js";
var _ = { code: h, a: E, ...d },
  D = class extends c.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(t) {
      let { showException: r } = this.props;
      r(t);
    }
    render() {
      let { hasError: t } = this.state,
        { children: r } = this.props;
      return t ? null : e.createElement(e.Fragment, null, r);
    }
  },
  T = class {
    constructor() {
      (this.render = async (t, r, o) => {
        let n = { ..._, ...(r == null ? void 0 : r.components) },
          s = x;
        return new Promise((m, i) => {
          a(
            () => import("./index-3685aeb7.js"),
            [
              "./index-3685aeb7.js",
              "./index-dc1d5b46.js",
              "./index-c013ead5.js",
              "./commonjsHelpers-725317a4.js",
            ],
            import.meta.url
          )
            .then(({ MDXProvider: p }) =>
              l(
                e.createElement(
                  D,
                  { showException: i, key: Math.random() },
                  e.createElement(
                    p,
                    { components: n },
                    e.createElement(s, { context: t, docsParameter: r })
                  )
                ),
                o
              )
            )
            .then(() => m());
        });
      }),
        (this.unmount = (t) => {
          u(t);
        });
    }
  };
export { T as DocsRenderer, _ as defaultComponents };
