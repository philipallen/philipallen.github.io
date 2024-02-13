import {
  e as ea,
  f as ta,
  S as ia,
  g as be,
  h as ra,
  d as zr,
  i as na,
  j as sa,
  T as Hr,
  k as ei,
  l as aa,
} from "./index-cf0e44f3.js";
import { g as ti, c as Vt } from "./commonjsHelpers-725317a4.js";
import {
  x as oa,
  y as wn,
  z as ua,
  k as kn,
  j as ha,
  A as Qr,
} from "./doctrine-744fe685.js";
import { d as la } from "./index-356e4a49.js";
import { R as Qt, r as _t } from "./index-c013ead5.js";
var An = { exports: {} },
  ca = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  pa = ca,
  fa = pa;
function In() {}
function Pn() {}
Pn.resetWarningCache = In;
var da = function () {
  function e(s, o, l, m, x, v) {
    if (v !== fa) {
      var C = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((C.name = "Invariant Violation"), C);
    }
  }
  e.isRequired = e;
  function i() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: i,
    element: e,
    elementType: e,
    instanceOf: i,
    node: e,
    objectOf: i,
    oneOf: i,
    oneOfType: i,
    shape: i,
    exact: i,
    checkPropTypes: Pn,
    resetWarningCache: In,
  };
  return (r.PropTypes = r), r;
};
An.exports = da();
var ma = An.exports;
const Xr = ti(ma),
  ga = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ];
var xa = ga;
const va = ti(xa);
var Tn = {},
  Nn = {};
(function (e) {
  (function i(r) {
    var s, o, l, m, x, v;
    function C(y) {
      var u = {},
        w,
        V;
      for (w in y)
        y.hasOwnProperty(w) &&
          ((V = y[w]),
          typeof V == "object" && V !== null ? (u[w] = C(V)) : (u[w] = V));
      return u;
    }
    function _(y, u) {
      var w, V, H, z;
      for (V = y.length, H = 0; V; )
        (w = V >>> 1),
          (z = H + w),
          u(y[z]) ? (V = w) : ((H = z + 1), (V -= w + 1));
      return H;
    }
    (s = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (l = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (m = {}),
      (x = {}),
      (v = {}),
      (o = { Break: m, Skip: x, Remove: v });
    function A(y, u) {
      (this.parent = y), (this.key = u);
    }
    (A.prototype.replace = function (u) {
      this.parent[this.key] = u;
    }),
      (A.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function P(y, u, w, V) {
      (this.node = y), (this.path = u), (this.wrap = w), (this.ref = V);
    }
    function k() {}
    (k.prototype.path = function () {
      var u, w, V, H, z, te;
      function K(X, he) {
        if (Array.isArray(he))
          for (V = 0, H = he.length; V < H; ++V) X.push(he[V]);
        else X.push(he);
      }
      if (!this.__current.path) return null;
      for (z = [], u = 2, w = this.__leavelist.length; u < w; ++u)
        (te = this.__leavelist[u]), K(z, te.path);
      return K(z, this.__current.path), z;
    }),
      (k.prototype.type = function () {
        var y = this.current();
        return y.type || this.__current.wrap;
      }),
      (k.prototype.parents = function () {
        var u, w, V;
        for (V = [], u = 1, w = this.__leavelist.length; u < w; ++u)
          V.push(this.__leavelist[u].node);
        return V;
      }),
      (k.prototype.current = function () {
        return this.__current.node;
      }),
      (k.prototype.__execute = function (u, w) {
        var V, H;
        return (
          (H = void 0),
          (V = this.__current),
          (this.__current = w),
          (this.__state = null),
          u &&
            (H = u.call(
              this,
              w.node,
              this.__leavelist[this.__leavelist.length - 1].node
            )),
          (this.__current = V),
          H
        );
      }),
      (k.prototype.notify = function (u) {
        this.__state = u;
      }),
      (k.prototype.skip = function () {
        this.notify(x);
      }),
      (k.prototype.break = function () {
        this.notify(m);
      }),
      (k.prototype.remove = function () {
        this.notify(v);
      }),
      (k.prototype.__initialize = function (y, u) {
        (this.visitor = u),
          (this.root = y),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          u.fallback === "iteration"
            ? (this.__fallback = Object.keys)
            : typeof u.fallback == "function" && (this.__fallback = u.fallback),
          (this.__keys = l),
          u.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), u.keys));
      });
    function T(y) {
      return y == null ? !1 : typeof y == "object" && typeof y.type == "string";
    }
    function E(y, u) {
      return (
        (y === s.ObjectExpression || y === s.ObjectPattern) &&
        u === "properties"
      );
    }
    function O(y, u) {
      for (var w = y.length - 1; w >= 0; --w) if (y[w].node === u) return !0;
      return !1;
    }
    (k.prototype.traverse = function (u, w) {
      var V, H, z, te, K, X, he, Ce, Se, ye, oe, Ae;
      for (
        this.__initialize(u, w),
          Ae = {},
          V = this.__worklist,
          H = this.__leavelist,
          V.push(new P(u, null, null, null)),
          H.push(new P(null, null, null, null));
        V.length;

      ) {
        if (((z = V.pop()), z === Ae)) {
          if (
            ((z = H.pop()),
            (X = this.__execute(w.leave, z)),
            this.__state === m || X === m)
          )
            return;
          continue;
        }
        if (z.node) {
          if (((X = this.__execute(w.enter, z)), this.__state === m || X === m))
            return;
          if ((V.push(Ae), H.push(z), this.__state === x || X === x)) continue;
          if (
            ((te = z.node), (K = te.type || z.wrap), (ye = this.__keys[K]), !ye)
          )
            if (this.__fallback) ye = this.__fallback(te);
            else throw new Error("Unknown node type " + K + ".");
          for (Ce = ye.length; (Ce -= 1) >= 0; )
            if (((he = ye[Ce]), (oe = te[he]), !!oe)) {
              if (Array.isArray(oe)) {
                for (Se = oe.length; (Se -= 1) >= 0; )
                  if (oe[Se] && !O(H, oe[Se])) {
                    if (E(K, ye[Ce]))
                      z = new P(oe[Se], [he, Se], "Property", null);
                    else if (T(oe[Se])) z = new P(oe[Se], [he, Se], null, null);
                    else continue;
                    V.push(z);
                  }
              } else if (T(oe)) {
                if (O(H, oe)) continue;
                V.push(new P(oe, he, null, null));
              }
            }
        }
      }
    }),
      (k.prototype.replace = function (u, w) {
        var V, H, z, te, K, X, he, Ce, Se, ye, oe, Ae, Le;
        function ut(W) {
          var Me, ht, De, ge;
          if (W.ref.remove()) {
            for (ht = W.ref.key, ge = W.ref.parent, Me = V.length; Me--; )
              if (((De = V[Me]), De.ref && De.ref.parent === ge)) {
                if (De.ref.key < ht) break;
                --De.ref.key;
              }
          }
        }
        for (
          this.__initialize(u, w),
            oe = {},
            V = this.__worklist,
            H = this.__leavelist,
            Ae = { root: u },
            X = new P(u, null, null, new A(Ae, "root")),
            V.push(X),
            H.push(X);
          V.length;

        ) {
          if (((X = V.pop()), X === oe)) {
            if (
              ((X = H.pop()),
              (K = this.__execute(w.leave, X)),
              K !== void 0 && K !== m && K !== x && K !== v && X.ref.replace(K),
              (this.__state === v || K === v) && ut(X),
              this.__state === m || K === m)
            )
              return Ae.root;
            continue;
          }
          if (
            ((K = this.__execute(w.enter, X)),
            K !== void 0 &&
              K !== m &&
              K !== x &&
              K !== v &&
              (X.ref.replace(K), (X.node = K)),
            (this.__state === v || K === v) && (ut(X), (X.node = null)),
            this.__state === m || K === m)
          )
            return Ae.root;
          if (
            ((z = X.node),
            !!z && (V.push(oe), H.push(X), !(this.__state === x || K === x)))
          ) {
            if (((te = z.type || X.wrap), (Se = this.__keys[te]), !Se))
              if (this.__fallback) Se = this.__fallback(z);
              else throw new Error("Unknown node type " + te + ".");
            for (he = Se.length; (he -= 1) >= 0; )
              if (((Le = Se[he]), (ye = z[Le]), !!ye))
                if (Array.isArray(ye)) {
                  for (Ce = ye.length; (Ce -= 1) >= 0; )
                    if (ye[Ce]) {
                      if (E(te, Se[he]))
                        X = new P(ye[Ce], [Le, Ce], "Property", new A(ye, Ce));
                      else if (T(ye[Ce]))
                        X = new P(ye[Ce], [Le, Ce], null, new A(ye, Ce));
                      else continue;
                      V.push(X);
                    }
                } else T(ye) && V.push(new P(ye, Le, null, new A(z, Le)));
          }
        }
        return Ae.root;
      });
    function D(y, u) {
      var w = new k();
      return w.traverse(y, u);
    }
    function M(y, u) {
      var w = new k();
      return w.replace(y, u);
    }
    function G(y, u) {
      var w;
      return (
        (w = _(u, function (H) {
          return H.range[0] > y.range[0];
        })),
        (y.extendedRange = [y.range[0], y.range[1]]),
        w !== u.length && (y.extendedRange[1] = u[w].range[0]),
        (w -= 1),
        w >= 0 && (y.extendedRange[0] = u[w].range[1]),
        y
      );
    }
    function N(y, u, w) {
      var V = [],
        H,
        z,
        te,
        K;
      if (!y.range) throw new Error("attachComments needs range information");
      if (!w.length) {
        if (u.length) {
          for (te = 0, z = u.length; te < z; te += 1)
            (H = C(u[te])), (H.extendedRange = [0, y.range[0]]), V.push(H);
          y.leadingComments = V;
        }
        return y;
      }
      for (te = 0, z = u.length; te < z; te += 1) V.push(G(C(u[te]), w));
      return (
        (K = 0),
        D(y, {
          enter: function (X) {
            for (
              var he;
              K < V.length &&
              ((he = V[K]), !(he.extendedRange[1] > X.range[0]));

            )
              he.extendedRange[1] === X.range[0]
                ? (X.leadingComments || (X.leadingComments = []),
                  X.leadingComments.push(he),
                  V.splice(K, 1))
                : (K += 1);
            if (K === V.length) return o.Break;
            if (V[K].extendedRange[0] > X.range[1]) return o.Skip;
          },
        }),
        (K = 0),
        D(y, {
          leave: function (X) {
            for (
              var he;
              K < V.length &&
              ((he = V[K]), !(X.range[1] < he.extendedRange[0]));

            )
              X.range[1] === he.extendedRange[0]
                ? (X.trailingComments || (X.trailingComments = []),
                  X.trailingComments.push(he),
                  V.splice(K, 1))
                : (K += 1);
            if (K === V.length) return o.Break;
            if (V[K].extendedRange[0] > X.range[1]) return o.Skip;
          },
        }),
        y
      );
    }
    return (
      (r.Syntax = s),
      (r.traverse = D),
      (r.replace = M),
      (r.attachComments = N),
      (r.VisitorKeys = l),
      (r.VisitorOption = o),
      (r.Controller = k),
      (r.cloneEnvironment = function () {
        return i({});
      }),
      r
    );
  })(e);
})(Nn);
var Wt = {},
  Wi = {},
  gi = {},
  xi = {},
  Jr;
function ya() {
  if (Jr) return xi;
  Jr = 1;
  var e =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      ""
    );
  return (
    (xi.encode = function (i) {
      if (0 <= i && i < e.length) return e[i];
      throw new TypeError("Must be between 0 and 63: " + i);
    }),
    (xi.decode = function (i) {
      var r = 65,
        s = 90,
        o = 97,
        l = 122,
        m = 48,
        x = 57,
        v = 43,
        C = 47,
        _ = 26,
        A = 52;
      return r <= i && i <= s
        ? i - r
        : o <= i && i <= l
        ? i - o + _
        : m <= i && i <= x
        ? i - m + A
        : i == v
        ? 62
        : i == C
        ? 63
        : -1;
    }),
    xi
  );
}
var Kr;
function Ln() {
  if (Kr) return gi;
  Kr = 1;
  var e = ya(),
    i = 5,
    r = 1 << i,
    s = r - 1,
    o = r;
  function l(x) {
    return x < 0 ? (-x << 1) + 1 : (x << 1) + 0;
  }
  function m(x) {
    var v = (x & 1) === 1,
      C = x >> 1;
    return v ? -C : C;
  }
  return (
    (gi.encode = function (v) {
      var C = "",
        _,
        A = l(v);
      do (_ = A & s), (A >>>= i), A > 0 && (_ |= o), (C += e.encode(_));
      while (A > 0);
      return C;
    }),
    (gi.decode = function (v, C, _) {
      var A = v.length,
        P = 0,
        k = 0,
        T,
        E;
      do {
        if (C >= A)
          throw new Error("Expected more digits in base 64 VLQ value.");
        if (((E = e.decode(v.charCodeAt(C++))), E === -1))
          throw new Error("Invalid base64 digit: " + v.charAt(C - 1));
        (T = !!(E & o)), (E &= s), (P = P + (E << k)), (k += i);
      } while (T);
      (_.value = m(P)), (_.rest = C);
    }),
    gi
  );
}
var zi = {},
  $r;
function ii() {
  return (
    $r ||
      (($r = 1),
      (function (e) {
        function i(N, y, u) {
          if (y in N) return N[y];
          if (arguments.length === 3) return u;
          throw new Error('"' + y + '" is a required argument.');
        }
        e.getArg = i;
        var r =
            /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          s = /^data:.+\,.+$/;
        function o(N) {
          var y = N.match(r);
          return y
            ? { scheme: y[1], auth: y[2], host: y[3], port: y[4], path: y[5] }
            : null;
        }
        e.urlParse = o;
        function l(N) {
          var y = "";
          return (
            N.scheme && (y += N.scheme + ":"),
            (y += "//"),
            N.auth && (y += N.auth + "@"),
            N.host && (y += N.host),
            N.port && (y += ":" + N.port),
            N.path && (y += N.path),
            y
          );
        }
        e.urlGenerate = l;
        function m(N) {
          var y = N,
            u = o(N);
          if (u) {
            if (!u.path) return N;
            y = u.path;
          }
          for (
            var w = e.isAbsolute(y),
              V = y.split(/\/+/),
              H,
              z = 0,
              te = V.length - 1;
            te >= 0;
            te--
          )
            (H = V[te]),
              H === "."
                ? V.splice(te, 1)
                : H === ".."
                ? z++
                : z > 0 &&
                  (H === ""
                    ? (V.splice(te + 1, z), (z = 0))
                    : (V.splice(te, 2), z--));
          return (
            (y = V.join("/")),
            y === "" && (y = w ? "/" : "."),
            u ? ((u.path = y), l(u)) : y
          );
        }
        e.normalize = m;
        function x(N, y) {
          N === "" && (N = "."), y === "" && (y = ".");
          var u = o(y),
            w = o(N);
          if ((w && (N = w.path || "/"), u && !u.scheme))
            return w && (u.scheme = w.scheme), l(u);
          if (u || y.match(s)) return y;
          if (w && !w.host && !w.path) return (w.host = y), l(w);
          var V = y.charAt(0) === "/" ? y : m(N.replace(/\/+$/, "") + "/" + y);
          return w ? ((w.path = V), l(w)) : V;
        }
        (e.join = x),
          (e.isAbsolute = function (N) {
            return N.charAt(0) === "/" || r.test(N);
          });
        function v(N, y) {
          N === "" && (N = "."), (N = N.replace(/\/$/, ""));
          for (var u = 0; y.indexOf(N + "/") !== 0; ) {
            var w = N.lastIndexOf("/");
            if (w < 0 || ((N = N.slice(0, w)), N.match(/^([^\/]+:\/)?\/*$/)))
              return y;
            ++u;
          }
          return Array(u + 1).join("../") + y.substr(N.length + 1);
        }
        e.relative = v;
        var C = (function () {
          var N = Object.create(null);
          return !("__proto__" in N);
        })();
        function _(N) {
          return N;
        }
        function A(N) {
          return k(N) ? "$" + N : N;
        }
        e.toSetString = C ? _ : A;
        function P(N) {
          return k(N) ? N.slice(1) : N;
        }
        e.fromSetString = C ? _ : P;
        function k(N) {
          if (!N) return !1;
          var y = N.length;
          if (
            y < 9 ||
            N.charCodeAt(y - 1) !== 95 ||
            N.charCodeAt(y - 2) !== 95 ||
            N.charCodeAt(y - 3) !== 111 ||
            N.charCodeAt(y - 4) !== 116 ||
            N.charCodeAt(y - 5) !== 111 ||
            N.charCodeAt(y - 6) !== 114 ||
            N.charCodeAt(y - 7) !== 112 ||
            N.charCodeAt(y - 8) !== 95 ||
            N.charCodeAt(y - 9) !== 95
          )
            return !1;
          for (var u = y - 10; u >= 0; u--)
            if (N.charCodeAt(u) !== 36) return !1;
          return !0;
        }
        function T(N, y, u) {
          var w = O(N.source, y.source);
          return w !== 0 ||
            ((w = N.originalLine - y.originalLine), w !== 0) ||
            ((w = N.originalColumn - y.originalColumn), w !== 0 || u) ||
            ((w = N.generatedColumn - y.generatedColumn), w !== 0) ||
            ((w = N.generatedLine - y.generatedLine), w !== 0)
            ? w
            : O(N.name, y.name);
        }
        e.compareByOriginalPositions = T;
        function E(N, y, u) {
          var w = N.generatedLine - y.generatedLine;
          return w !== 0 ||
            ((w = N.generatedColumn - y.generatedColumn), w !== 0 || u) ||
            ((w = O(N.source, y.source)), w !== 0) ||
            ((w = N.originalLine - y.originalLine), w !== 0) ||
            ((w = N.originalColumn - y.originalColumn), w !== 0)
            ? w
            : O(N.name, y.name);
        }
        e.compareByGeneratedPositionsDeflated = E;
        function O(N, y) {
          return N === y
            ? 0
            : N === null
            ? 1
            : y === null
            ? -1
            : N > y
            ? 1
            : -1;
        }
        function D(N, y) {
          var u = N.generatedLine - y.generatedLine;
          return u !== 0 ||
            ((u = N.generatedColumn - y.generatedColumn), u !== 0) ||
            ((u = O(N.source, y.source)), u !== 0) ||
            ((u = N.originalLine - y.originalLine), u !== 0) ||
            ((u = N.originalColumn - y.originalColumn), u !== 0)
            ? u
            : O(N.name, y.name);
        }
        e.compareByGeneratedPositionsInflated = D;
        function M(N) {
          return JSON.parse(N.replace(/^\)]}'[^\n]*\n/, ""));
        }
        e.parseSourceMapInput = M;
        function G(N, y, u) {
          if (
            ((y = y || ""),
            N &&
              (N[N.length - 1] !== "/" && y[0] !== "/" && (N += "/"),
              (y = N + y)),
            u)
          ) {
            var w = o(u);
            if (!w) throw new Error("sourceMapURL could not be parsed");
            if (w.path) {
              var V = w.path.lastIndexOf("/");
              V >= 0 && (w.path = w.path.substring(0, V + 1));
            }
            y = x(l(w), y);
          }
          return m(y);
        }
        e.computeSourceURL = G;
      })(zi)),
    zi
  );
}
var Hi = {},
  Yr;
function Rn() {
  if (Yr) return Hi;
  Yr = 1;
  var e = ii(),
    i = Object.prototype.hasOwnProperty,
    r = typeof Map < "u";
  function s() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (s.fromArray = function (l, m) {
      for (var x = new s(), v = 0, C = l.length; v < C; v++) x.add(l[v], m);
      return x;
    }),
    (s.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (s.prototype.add = function (l, m) {
      var x = r ? l : e.toSetString(l),
        v = r ? this.has(l) : i.call(this._set, x),
        C = this._array.length;
      (!v || m) && this._array.push(l),
        v || (r ? this._set.set(l, C) : (this._set[x] = C));
    }),
    (s.prototype.has = function (l) {
      if (r) return this._set.has(l);
      var m = e.toSetString(l);
      return i.call(this._set, m);
    }),
    (s.prototype.indexOf = function (l) {
      if (r) {
        var m = this._set.get(l);
        if (m >= 0) return m;
      } else {
        var x = e.toSetString(l);
        if (i.call(this._set, x)) return this._set[x];
      }
      throw new Error('"' + l + '" is not in the set.');
    }),
    (s.prototype.at = function (l) {
      if (l >= 0 && l < this._array.length) return this._array[l];
      throw new Error("No element indexed by " + l);
    }),
    (s.prototype.toArray = function () {
      return this._array.slice();
    }),
    (Hi.ArraySet = s),
    Hi
  );
}
var Qi = {},
  Zr;
function ba() {
  if (Zr) return Qi;
  Zr = 1;
  var e = ii();
  function i(s, o) {
    var l = s.generatedLine,
      m = o.generatedLine,
      x = s.generatedColumn,
      v = o.generatedColumn;
    return (
      m > l ||
      (m == l && v >= x) ||
      e.compareByGeneratedPositionsInflated(s, o) <= 0
    );
  }
  function r() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (o, l) {
      this._array.forEach(o, l);
    }),
    (r.prototype.add = function (o) {
      i(this._last, o)
        ? ((this._last = o), this._array.push(o))
        : ((this._sorted = !1), this._array.push(o));
    }),
    (r.prototype.toArray = function () {
      return (
        this._sorted ||
          (this._array.sort(e.compareByGeneratedPositionsInflated),
          (this._sorted = !0)),
        this._array
      );
    }),
    (Qi.MappingList = r),
    Qi
  );
}
var en;
function On() {
  if (en) return Wi;
  en = 1;
  var e = Ln(),
    i = ii(),
    r = Rn().ArraySet,
    s = ba().MappingList;
  function o(l) {
    l || (l = {}),
      (this._file = i.getArg(l, "file", null)),
      (this._sourceRoot = i.getArg(l, "sourceRoot", null)),
      (this._skipValidation = i.getArg(l, "skipValidation", !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new s()),
      (this._sourcesContents = null);
  }
  return (
    (o.prototype._version = 3),
    (o.fromSourceMap = function (m) {
      var x = m.sourceRoot,
        v = new o({ file: m.file, sourceRoot: x });
      return (
        m.eachMapping(function (C) {
          var _ = {
            generated: { line: C.generatedLine, column: C.generatedColumn },
          };
          C.source != null &&
            ((_.source = C.source),
            x != null && (_.source = i.relative(x, _.source)),
            (_.original = { line: C.originalLine, column: C.originalColumn }),
            C.name != null && (_.name = C.name)),
            v.addMapping(_);
        }),
        m.sources.forEach(function (C) {
          var _ = C;
          x !== null && (_ = i.relative(x, C)),
            v._sources.has(_) || v._sources.add(_);
          var A = m.sourceContentFor(C);
          A != null && v.setSourceContent(C, A);
        }),
        v
      );
    }),
    (o.prototype.addMapping = function (m) {
      var x = i.getArg(m, "generated"),
        v = i.getArg(m, "original", null),
        C = i.getArg(m, "source", null),
        _ = i.getArg(m, "name", null);
      this._skipValidation || this._validateMapping(x, v, C, _),
        C != null &&
          ((C = String(C)), this._sources.has(C) || this._sources.add(C)),
        _ != null &&
          ((_ = String(_)), this._names.has(_) || this._names.add(_)),
        this._mappings.add({
          generatedLine: x.line,
          generatedColumn: x.column,
          originalLine: v != null && v.line,
          originalColumn: v != null && v.column,
          source: C,
          name: _,
        });
    }),
    (o.prototype.setSourceContent = function (m, x) {
      var v = m;
      this._sourceRoot != null && (v = i.relative(this._sourceRoot, v)),
        x != null
          ? (this._sourcesContents ||
              (this._sourcesContents = Object.create(null)),
            (this._sourcesContents[i.toSetString(v)] = x))
          : this._sourcesContents &&
            (delete this._sourcesContents[i.toSetString(v)],
            Object.keys(this._sourcesContents).length === 0 &&
              (this._sourcesContents = null));
    }),
    (o.prototype.applySourceMap = function (m, x, v) {
      var C = x;
      if (x == null) {
        if (m.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        C = m.file;
      }
      var _ = this._sourceRoot;
      _ != null && (C = i.relative(_, C));
      var A = new r(),
        P = new r();
      this._mappings.unsortedForEach(function (k) {
        if (k.source === C && k.originalLine != null) {
          var T = m.originalPositionFor({
            line: k.originalLine,
            column: k.originalColumn,
          });
          T.source != null &&
            ((k.source = T.source),
            v != null && (k.source = i.join(v, k.source)),
            _ != null && (k.source = i.relative(_, k.source)),
            (k.originalLine = T.line),
            (k.originalColumn = T.column),
            T.name != null && (k.name = T.name));
        }
        var E = k.source;
        E != null && !A.has(E) && A.add(E);
        var O = k.name;
        O != null && !P.has(O) && P.add(O);
      }, this),
        (this._sources = A),
        (this._names = P),
        m.sources.forEach(function (k) {
          var T = m.sourceContentFor(k);
          T != null &&
            (v != null && (k = i.join(v, k)),
            _ != null && (k = i.relative(_, k)),
            this.setSourceContent(k, T));
        }, this);
    }),
    (o.prototype._validateMapping = function (m, x, v, C) {
      if (x && typeof x.line != "number" && typeof x.column != "number")
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      if (
        !(
          m &&
          "line" in m &&
          "column" in m &&
          m.line > 0 &&
          m.column >= 0 &&
          !x &&
          !v &&
          !C
        )
      ) {
        if (
          m &&
          "line" in m &&
          "column" in m &&
          x &&
          "line" in x &&
          "column" in x &&
          m.line > 0 &&
          m.column >= 0 &&
          x.line > 0 &&
          x.column >= 0 &&
          v
        )
          return;
        throw new Error(
          "Invalid mapping: " +
            JSON.stringify({ generated: m, source: v, original: x, name: C })
        );
      }
    }),
    (o.prototype._serializeMappings = function () {
      for (
        var m = 0,
          x = 1,
          v = 0,
          C = 0,
          _ = 0,
          A = 0,
          P = "",
          k,
          T,
          E,
          O,
          D = this._mappings.toArray(),
          M = 0,
          G = D.length;
        M < G;
        M++
      ) {
        if (((T = D[M]), (k = ""), T.generatedLine !== x))
          for (m = 0; T.generatedLine !== x; ) (k += ";"), x++;
        else if (M > 0) {
          if (!i.compareByGeneratedPositionsInflated(T, D[M - 1])) continue;
          k += ",";
        }
        (k += e.encode(T.generatedColumn - m)),
          (m = T.generatedColumn),
          T.source != null &&
            ((O = this._sources.indexOf(T.source)),
            (k += e.encode(O - A)),
            (A = O),
            (k += e.encode(T.originalLine - 1 - C)),
            (C = T.originalLine - 1),
            (k += e.encode(T.originalColumn - v)),
            (v = T.originalColumn),
            T.name != null &&
              ((E = this._names.indexOf(T.name)),
              (k += e.encode(E - _)),
              (_ = E))),
          (P += k);
      }
      return P;
    }),
    (o.prototype._generateSourcesContent = function (m, x) {
      return m.map(function (v) {
        if (!this._sourcesContents) return null;
        x != null && (v = i.relative(x, v));
        var C = i.toSetString(v);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, C)
          ? this._sourcesContents[C]
          : null;
      }, this);
    }),
    (o.prototype.toJSON = function () {
      var m = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (m.file = this._file),
        this._sourceRoot != null && (m.sourceRoot = this._sourceRoot),
        this._sourcesContents &&
          (m.sourcesContent = this._generateSourcesContent(
            m.sources,
            m.sourceRoot
          )),
        m
      );
    }),
    (o.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Wi.SourceMapGenerator = o),
    Wi
  );
}
var zt = {},
  Xi = {},
  tn;
function Sa() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function i(r, s, o, l, m, x) {
          var v = Math.floor((s - r) / 2) + r,
            C = m(o, l[v], !0);
          return C === 0
            ? v
            : C > 0
            ? s - v > 1
              ? i(v, s, o, l, m, x)
              : x == e.LEAST_UPPER_BOUND
              ? s < l.length
                ? s
                : -1
              : v
            : v - r > 1
            ? i(r, v, o, l, m, x)
            : x == e.LEAST_UPPER_BOUND
            ? v
            : r < 0
            ? -1
            : r;
        }
        e.search = function (s, o, l, m) {
          if (o.length === 0) return -1;
          var x = i(-1, o.length, s, o, l, m || e.GREATEST_LOWER_BOUND);
          if (x < 0) return -1;
          for (; x - 1 >= 0 && l(o[x], o[x - 1], !0) === 0; ) --x;
          return x;
        };
      })(Xi)),
    Xi
  );
}
var Ji = {},
  rn;
function _a() {
  if (rn) return Ji;
  rn = 1;
  function e(s, o, l) {
    var m = s[o];
    (s[o] = s[l]), (s[l] = m);
  }
  function i(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function r(s, o, l, m) {
    if (l < m) {
      var x = i(l, m),
        v = l - 1;
      e(s, x, m);
      for (var C = s[m], _ = l; _ < m; _++)
        o(s[_], C) <= 0 && ((v += 1), e(s, v, _));
      e(s, v + 1, _);
      var A = v + 1;
      r(s, o, l, A - 1), r(s, o, A + 1, m);
    }
  }
  return (
    (Ji.quickSort = function (s, o) {
      r(s, o, 0, s.length - 1);
    }),
    Ji
  );
}
var nn;
function Ca() {
  if (nn) return zt;
  nn = 1;
  var e = ii(),
    i = Sa(),
    r = Rn().ArraySet,
    s = Ln(),
    o = _a().quickSort;
  function l(C, _) {
    var A = C;
    return (
      typeof C == "string" && (A = e.parseSourceMapInput(C)),
      A.sections != null ? new v(A, _) : new m(A, _)
    );
  }
  (l.fromSourceMap = function (C, _) {
    return m.fromSourceMap(C, _);
  }),
    (l.prototype._version = 3),
    (l.prototype.__generatedMappings = null),
    Object.defineProperty(l.prototype, "_generatedMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__generatedMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__generatedMappings
        );
      },
    }),
    (l.prototype.__originalMappings = null),
    Object.defineProperty(l.prototype, "_originalMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__originalMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__originalMappings
        );
      },
    }),
    (l.prototype._charIsMappingSeparator = function (_, A) {
      var P = _.charAt(A);
      return P === ";" || P === ",";
    }),
    (l.prototype._parseMappings = function (_, A) {
      throw new Error("Subclasses must implement _parseMappings");
    }),
    (l.GENERATED_ORDER = 1),
    (l.ORIGINAL_ORDER = 2),
    (l.GREATEST_LOWER_BOUND = 1),
    (l.LEAST_UPPER_BOUND = 2),
    (l.prototype.eachMapping = function (_, A, P) {
      var k = A || null,
        T = P || l.GENERATED_ORDER,
        E;
      switch (T) {
        case l.GENERATED_ORDER:
          E = this._generatedMappings;
          break;
        case l.ORIGINAL_ORDER:
          E = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var O = this.sourceRoot;
      E.map(function (D) {
        var M = D.source === null ? null : this._sources.at(D.source);
        return (
          (M = e.computeSourceURL(O, M, this._sourceMapURL)),
          {
            source: M,
            generatedLine: D.generatedLine,
            generatedColumn: D.generatedColumn,
            originalLine: D.originalLine,
            originalColumn: D.originalColumn,
            name: D.name === null ? null : this._names.at(D.name),
          }
        );
      }, this).forEach(_, k);
    }),
    (l.prototype.allGeneratedPositionsFor = function (_) {
      var A = e.getArg(_, "line"),
        P = {
          source: e.getArg(_, "source"),
          originalLine: A,
          originalColumn: e.getArg(_, "column", 0),
        };
      if (((P.source = this._findSourceIndex(P.source)), P.source < 0))
        return [];
      var k = [],
        T = this._findMapping(
          P,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          i.LEAST_UPPER_BOUND
        );
      if (T >= 0) {
        var E = this._originalMappings[T];
        if (_.column === void 0)
          for (var O = E.originalLine; E && E.originalLine === O; )
            k.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++T]);
        else
          for (
            var D = E.originalColumn;
            E && E.originalLine === A && E.originalColumn == D;

          )
            k.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++T]);
      }
      return k;
    }),
    (zt.SourceMapConsumer = l);
  function m(C, _) {
    var A = C;
    typeof C == "string" && (A = e.parseSourceMapInput(C));
    var P = e.getArg(A, "version"),
      k = e.getArg(A, "sources"),
      T = e.getArg(A, "names", []),
      E = e.getArg(A, "sourceRoot", null),
      O = e.getArg(A, "sourcesContent", null),
      D = e.getArg(A, "mappings"),
      M = e.getArg(A, "file", null);
    if (P != this._version) throw new Error("Unsupported version: " + P);
    E && (E = e.normalize(E)),
      (k = k
        .map(String)
        .map(e.normalize)
        .map(function (G) {
          return E && e.isAbsolute(E) && e.isAbsolute(G) ? e.relative(E, G) : G;
        })),
      (this._names = r.fromArray(T.map(String), !0)),
      (this._sources = r.fromArray(k, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (G) {
        return e.computeSourceURL(E, G, _);
      })),
      (this.sourceRoot = E),
      (this.sourcesContent = O),
      (this._mappings = D),
      (this._sourceMapURL = _),
      (this.file = M);
  }
  (m.prototype = Object.create(l.prototype)),
    (m.prototype.consumer = l),
    (m.prototype._findSourceIndex = function (C) {
      var _ = C;
      if (
        (this.sourceRoot != null && (_ = e.relative(this.sourceRoot, _)),
        this._sources.has(_))
      )
        return this._sources.indexOf(_);
      var A;
      for (A = 0; A < this._absoluteSources.length; ++A)
        if (this._absoluteSources[A] == C) return A;
      return -1;
    }),
    (m.fromSourceMap = function (_, A) {
      var P = Object.create(m.prototype),
        k = (P._names = r.fromArray(_._names.toArray(), !0)),
        T = (P._sources = r.fromArray(_._sources.toArray(), !0));
      (P.sourceRoot = _._sourceRoot),
        (P.sourcesContent = _._generateSourcesContent(
          P._sources.toArray(),
          P.sourceRoot
        )),
        (P.file = _._file),
        (P._sourceMapURL = A),
        (P._absoluteSources = P._sources.toArray().map(function (u) {
          return e.computeSourceURL(P.sourceRoot, u, A);
        }));
      for (
        var E = _._mappings.toArray().slice(),
          O = (P.__generatedMappings = []),
          D = (P.__originalMappings = []),
          M = 0,
          G = E.length;
        M < G;
        M++
      ) {
        var N = E[M],
          y = new x();
        (y.generatedLine = N.generatedLine),
          (y.generatedColumn = N.generatedColumn),
          N.source &&
            ((y.source = T.indexOf(N.source)),
            (y.originalLine = N.originalLine),
            (y.originalColumn = N.originalColumn),
            N.name && (y.name = k.indexOf(N.name)),
            D.push(y)),
          O.push(y);
      }
      return o(P.__originalMappings, e.compareByOriginalPositions), P;
    }),
    (m.prototype._version = 3),
    Object.defineProperty(m.prototype, "sources", {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function x() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (m.prototype._parseMappings = function (_, A) {
    for (
      var P = 1,
        k = 0,
        T = 0,
        E = 0,
        O = 0,
        D = 0,
        M = _.length,
        G = 0,
        N = {},
        y = {},
        u = [],
        w = [],
        V,
        H,
        z,
        te,
        K;
      G < M;

    )
      if (_.charAt(G) === ";") P++, G++, (k = 0);
      else if (_.charAt(G) === ",") G++;
      else {
        for (
          V = new x(), V.generatedLine = P, te = G;
          te < M && !this._charIsMappingSeparator(_, te);
          te++
        );
        if (((H = _.slice(G, te)), (z = N[H]), z)) G += H.length;
        else {
          for (z = []; G < te; )
            s.decode(_, G, y), (K = y.value), (G = y.rest), z.push(K);
          if (z.length === 2)
            throw new Error("Found a source, but no line and column");
          if (z.length === 3)
            throw new Error("Found a source and line, but no column");
          N[H] = z;
        }
        (V.generatedColumn = k + z[0]),
          (k = V.generatedColumn),
          z.length > 1 &&
            ((V.source = O + z[1]),
            (O += z[1]),
            (V.originalLine = T + z[2]),
            (T = V.originalLine),
            (V.originalLine += 1),
            (V.originalColumn = E + z[3]),
            (E = V.originalColumn),
            z.length > 4 && ((V.name = D + z[4]), (D += z[4]))),
          w.push(V),
          typeof V.originalLine == "number" && u.push(V);
      }
    o(w, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = w),
      o(u, e.compareByOriginalPositions),
      (this.__originalMappings = u);
  }),
    (m.prototype._findMapping = function (_, A, P, k, T, E) {
      if (_[P] <= 0)
        throw new TypeError(
          "Line must be greater than or equal to 1, got " + _[P]
        );
      if (_[k] < 0)
        throw new TypeError(
          "Column must be greater than or equal to 0, got " + _[k]
        );
      return i.search(_, A, T, E);
    }),
    (m.prototype.computeColumnSpans = function () {
      for (var _ = 0; _ < this._generatedMappings.length; ++_) {
        var A = this._generatedMappings[_];
        if (_ + 1 < this._generatedMappings.length) {
          var P = this._generatedMappings[_ + 1];
          if (A.generatedLine === P.generatedLine) {
            A.lastGeneratedColumn = P.generatedColumn - 1;
            continue;
          }
        }
        A.lastGeneratedColumn = 1 / 0;
      }
    }),
    (m.prototype.originalPositionFor = function (_) {
      var A = {
          generatedLine: e.getArg(_, "line"),
          generatedColumn: e.getArg(_, "column"),
        },
        P = this._findMapping(
          A,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          e.compareByGeneratedPositionsDeflated,
          e.getArg(_, "bias", l.GREATEST_LOWER_BOUND)
        );
      if (P >= 0) {
        var k = this._generatedMappings[P];
        if (k.generatedLine === A.generatedLine) {
          var T = e.getArg(k, "source", null);
          T !== null &&
            ((T = this._sources.at(T)),
            (T = e.computeSourceURL(this.sourceRoot, T, this._sourceMapURL)));
          var E = e.getArg(k, "name", null);
          return (
            E !== null && (E = this._names.at(E)),
            {
              source: T,
              line: e.getArg(k, "originalLine", null),
              column: e.getArg(k, "originalColumn", null),
              name: E,
            }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (m.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (_) {
              return _ == null;
            })
        : !1;
    }),
    (m.prototype.sourceContentFor = function (_, A) {
      if (!this.sourcesContent) return null;
      var P = this._findSourceIndex(_);
      if (P >= 0) return this.sourcesContent[P];
      var k = _;
      this.sourceRoot != null && (k = e.relative(this.sourceRoot, k));
      var T;
      if (this.sourceRoot != null && (T = e.urlParse(this.sourceRoot))) {
        var E = k.replace(/^file:\/\//, "");
        if (T.scheme == "file" && this._sources.has(E))
          return this.sourcesContent[this._sources.indexOf(E)];
        if ((!T.path || T.path == "/") && this._sources.has("/" + k))
          return this.sourcesContent[this._sources.indexOf("/" + k)];
      }
      if (A) return null;
      throw new Error('"' + k + '" is not in the SourceMap.');
    }),
    (m.prototype.generatedPositionFor = function (_) {
      var A = e.getArg(_, "source");
      if (((A = this._findSourceIndex(A)), A < 0))
        return { line: null, column: null, lastColumn: null };
      var P = {
          source: A,
          originalLine: e.getArg(_, "line"),
          originalColumn: e.getArg(_, "column"),
        },
        k = this._findMapping(
          P,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          e.getArg(_, "bias", l.GREATEST_LOWER_BOUND)
        );
      if (k >= 0) {
        var T = this._originalMappings[k];
        if (T.source === P.source)
          return {
            line: e.getArg(T, "generatedLine", null),
            column: e.getArg(T, "generatedColumn", null),
            lastColumn: e.getArg(T, "lastGeneratedColumn", null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (zt.BasicSourceMapConsumer = m);
  function v(C, _) {
    var A = C;
    typeof C == "string" && (A = e.parseSourceMapInput(C));
    var P = e.getArg(A, "version"),
      k = e.getArg(A, "sections");
    if (P != this._version) throw new Error("Unsupported version: " + P);
    (this._sources = new r()), (this._names = new r());
    var T = { line: -1, column: 0 };
    this._sections = k.map(function (E) {
      if (E.url)
        throw new Error("Support for url field in sections not implemented.");
      var O = e.getArg(E, "offset"),
        D = e.getArg(O, "line"),
        M = e.getArg(O, "column");
      if (D < T.line || (D === T.line && M < T.column))
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return (
        (T = O),
        {
          generatedOffset: { generatedLine: D + 1, generatedColumn: M + 1 },
          consumer: new l(e.getArg(E, "map"), _),
        }
      );
    });
  }
  return (
    (v.prototype = Object.create(l.prototype)),
    (v.prototype.constructor = l),
    (v.prototype._version = 3),
    Object.defineProperty(v.prototype, "sources", {
      get: function () {
        for (var C = [], _ = 0; _ < this._sections.length; _++)
          for (var A = 0; A < this._sections[_].consumer.sources.length; A++)
            C.push(this._sections[_].consumer.sources[A]);
        return C;
      },
    }),
    (v.prototype.originalPositionFor = function (_) {
      var A = {
          generatedLine: e.getArg(_, "line"),
          generatedColumn: e.getArg(_, "column"),
        },
        P = i.search(A, this._sections, function (T, E) {
          var O = T.generatedLine - E.generatedOffset.generatedLine;
          return O || T.generatedColumn - E.generatedOffset.generatedColumn;
        }),
        k = this._sections[P];
      return k
        ? k.consumer.originalPositionFor({
            line: A.generatedLine - (k.generatedOffset.generatedLine - 1),
            column:
              A.generatedColumn -
              (k.generatedOffset.generatedLine === A.generatedLine
                ? k.generatedOffset.generatedColumn - 1
                : 0),
            bias: _.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (v.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (_) {
        return _.consumer.hasContentsOfAllSources();
      });
    }),
    (v.prototype.sourceContentFor = function (_, A) {
      for (var P = 0; P < this._sections.length; P++) {
        var k = this._sections[P],
          T = k.consumer.sourceContentFor(_, !0);
        if (T) return T;
      }
      if (A) return null;
      throw new Error('"' + _ + '" is not in the SourceMap.');
    }),
    (v.prototype.generatedPositionFor = function (_) {
      for (var A = 0; A < this._sections.length; A++) {
        var P = this._sections[A];
        if (P.consumer._findSourceIndex(e.getArg(_, "source")) !== -1) {
          var k = P.consumer.generatedPositionFor(_);
          if (k) {
            var T = {
              line: k.line + (P.generatedOffset.generatedLine - 1),
              column:
                k.column +
                (P.generatedOffset.generatedLine === k.line
                  ? P.generatedOffset.generatedColumn - 1
                  : 0),
            };
            return T;
          }
        }
      }
      return { line: null, column: null };
    }),
    (v.prototype._parseMappings = function (_, A) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var P = 0; P < this._sections.length; P++)
        for (
          var k = this._sections[P], T = k.consumer._generatedMappings, E = 0;
          E < T.length;
          E++
        ) {
          var O = T[E],
            D = k.consumer._sources.at(O.source);
          (D = e.computeSourceURL(
            k.consumer.sourceRoot,
            D,
            this._sourceMapURL
          )),
            this._sources.add(D),
            (D = this._sources.indexOf(D));
          var M = null;
          O.name &&
            ((M = k.consumer._names.at(O.name)),
            this._names.add(M),
            (M = this._names.indexOf(M)));
          var G = {
            source: D,
            generatedLine:
              O.generatedLine + (k.generatedOffset.generatedLine - 1),
            generatedColumn:
              O.generatedColumn +
              (k.generatedOffset.generatedLine === O.generatedLine
                ? k.generatedOffset.generatedColumn - 1
                : 0),
            originalLine: O.originalLine,
            originalColumn: O.originalColumn,
            name: M,
          };
          this.__generatedMappings.push(G),
            typeof G.originalLine == "number" &&
              this.__originalMappings.push(G);
        }
      o(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
        o(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (zt.IndexedSourceMapConsumer = v),
    zt
  );
}
var Ki = {},
  sn;
function Ea() {
  if (sn) return Ki;
  sn = 1;
  var e = On().SourceMapGenerator,
    i = ii(),
    r = /(\r?\n)/,
    s = 10,
    o = "$$$isSourceNode$$$";
  function l(m, x, v, C, _) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = m ?? null),
      (this.column = x ?? null),
      (this.source = v ?? null),
      (this.name = _ ?? null),
      (this[o] = !0),
      C != null && this.add(C);
  }
  return (
    (l.fromStringWithSourceMap = function (x, v, C) {
      var _ = new l(),
        A = x.split(r),
        P = 0,
        k = function () {
          var M = N(),
            G = N() || "";
          return M + G;
          function N() {
            return P < A.length ? A[P++] : void 0;
          }
        },
        T = 1,
        E = 0,
        O = null;
      return (
        v.eachMapping(function (M) {
          if (O !== null)
            if (T < M.generatedLine) D(O, k()), T++, (E = 0);
            else {
              var G = A[P] || "",
                N = G.substr(0, M.generatedColumn - E);
              (A[P] = G.substr(M.generatedColumn - E)),
                (E = M.generatedColumn),
                D(O, N),
                (O = M);
              return;
            }
          for (; T < M.generatedLine; ) _.add(k()), T++;
          if (E < M.generatedColumn) {
            var G = A[P] || "";
            _.add(G.substr(0, M.generatedColumn)),
              (A[P] = G.substr(M.generatedColumn)),
              (E = M.generatedColumn);
          }
          O = M;
        }, this),
        P < A.length && (O && D(O, k()), _.add(A.splice(P).join(""))),
        v.sources.forEach(function (M) {
          var G = v.sourceContentFor(M);
          G != null &&
            (C != null && (M = i.join(C, M)), _.setSourceContent(M, G));
        }),
        _
      );
      function D(M, G) {
        if (M === null || M.source === void 0) _.add(G);
        else {
          var N = C ? i.join(C, M.source) : M.source;
          _.add(new l(M.originalLine, M.originalColumn, N, G, M.name));
        }
      }
    }),
    (l.prototype.add = function (x) {
      if (Array.isArray(x))
        x.forEach(function (v) {
          this.add(v);
        }, this);
      else if (x[o] || typeof x == "string") x && this.children.push(x);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            x
        );
      return this;
    }),
    (l.prototype.prepend = function (x) {
      if (Array.isArray(x))
        for (var v = x.length - 1; v >= 0; v--) this.prepend(x[v]);
      else if (x[o] || typeof x == "string") this.children.unshift(x);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            x
        );
      return this;
    }),
    (l.prototype.walk = function (x) {
      for (var v, C = 0, _ = this.children.length; C < _; C++)
        (v = this.children[C]),
          v[o]
            ? v.walk(x)
            : v !== "" &&
              x(v, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name,
              });
    }),
    (l.prototype.join = function (x) {
      var v,
        C,
        _ = this.children.length;
      if (_ > 0) {
        for (v = [], C = 0; C < _ - 1; C++) v.push(this.children[C]), v.push(x);
        v.push(this.children[C]), (this.children = v);
      }
      return this;
    }),
    (l.prototype.replaceRight = function (x, v) {
      var C = this.children[this.children.length - 1];
      return (
        C[o]
          ? C.replaceRight(x, v)
          : typeof C == "string"
          ? (this.children[this.children.length - 1] = C.replace(x, v))
          : this.children.push("".replace(x, v)),
        this
      );
    }),
    (l.prototype.setSourceContent = function (x, v) {
      this.sourceContents[i.toSetString(x)] = v;
    }),
    (l.prototype.walkSourceContents = function (x) {
      for (var v = 0, C = this.children.length; v < C; v++)
        this.children[v][o] && this.children[v].walkSourceContents(x);
      for (
        var _ = Object.keys(this.sourceContents), v = 0, C = _.length;
        v < C;
        v++
      )
        x(i.fromSetString(_[v]), this.sourceContents[_[v]]);
    }),
    (l.prototype.toString = function () {
      var x = "";
      return (
        this.walk(function (v) {
          x += v;
        }),
        x
      );
    }),
    (l.prototype.toStringWithSourceMap = function (x) {
      var v = { code: "", line: 1, column: 0 },
        C = new e(x),
        _ = !1,
        A = null,
        P = null,
        k = null,
        T = null;
      return (
        this.walk(function (E, O) {
          (v.code += E),
            O.source !== null && O.line !== null && O.column !== null
              ? ((A !== O.source ||
                  P !== O.line ||
                  k !== O.column ||
                  T !== O.name) &&
                  C.addMapping({
                    source: O.source,
                    original: { line: O.line, column: O.column },
                    generated: { line: v.line, column: v.column },
                    name: O.name,
                  }),
                (A = O.source),
                (P = O.line),
                (k = O.column),
                (T = O.name),
                (_ = !0))
              : _ &&
                (C.addMapping({
                  generated: { line: v.line, column: v.column },
                }),
                (A = null),
                (_ = !1));
          for (var D = 0, M = E.length; D < M; D++)
            E.charCodeAt(D) === s
              ? (v.line++,
                (v.column = 0),
                D + 1 === M
                  ? ((A = null), (_ = !1))
                  : _ &&
                    C.addMapping({
                      source: O.source,
                      original: { line: O.line, column: O.column },
                      generated: { line: v.line, column: v.column },
                      name: O.name,
                    }))
              : v.column++;
        }),
        this.walkSourceContents(function (E, O) {
          C.setSourceContent(E, O);
        }),
        { code: v.code, map: C }
      );
    }),
    (Ki.SourceNode = l),
    Ki
  );
}
var an;
function wa() {
  return (
    an ||
      ((an = 1),
      (Wt.SourceMapGenerator = On().SourceMapGenerator),
      (Wt.SourceMapConsumer = Ca().SourceMapConsumer),
      (Wt.SourceNode = Ea().SourceNode)),
    Wt
  );
}
const ka = "escodegen",
  Aa = "ECMAScript code generator",
  Ia = "http://github.com/estools/escodegen",
  Pa = "escodegen.js",
  Ta = { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
  Na = ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
  La = "2.1.0",
  Ra = { node: ">=6.0" },
  Oa = [
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "http://github.com/Constellation",
    },
  ],
  Va = { type: "git", url: "http://github.com/estools/escodegen.git" },
  Fa = { estraverse: "^5.2.0", esutils: "^2.0.2", esprima: "^4.0.1" },
  Ba = { "source-map": "~0.6.1" },
  Ma = {
    acorn: "^8.0.4",
    bluebird: "^3.4.7",
    "bower-registry-client": "^1.0.0",
    chai: "^4.2.0",
    "chai-exclude": "^2.0.2",
    "commonjs-everywhere": "^0.9.7",
    gulp: "^4.0.2",
    "gulp-eslint": "^6.0.0",
    "gulp-mocha": "^7.0.2",
    minimist: "^1.2.5",
    optionator: "^0.9.1",
    semver: "^7.3.4",
  },
  Da = "BSD-2-Clause",
  ja = {
    test: "gulp travis",
    "unit-test": "gulp test",
    lint: "gulp lint",
    release: "node tools/release.js",
    "build-min":
      "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
    build:
      "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
  },
  qa = {
    name: ka,
    description: Aa,
    homepage: Ia,
    main: Pa,
    bin: Ta,
    files: Na,
    version: La,
    engines: Ra,
    maintainers: Oa,
    repository: Va,
    dependencies: Fa,
    optionalDependencies: Ba,
    devDependencies: Ma,
    license: Da,
    scripts: ja,
  };
(function (e) {
  (function () {
    var i,
      r,
      s,
      o,
      l,
      m,
      x,
      v,
      C,
      _,
      A,
      P,
      k,
      T,
      E,
      O,
      D,
      M,
      G,
      N,
      y,
      u,
      w,
      V,
      H,
      z;
    (l = Nn), (m = oa), (i = l.Syntax);
    function te(a) {
      return we.Expression.hasOwnProperty(a.type);
    }
    function K(a) {
      return we.Statement.hasOwnProperty(a.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22,
    }),
      (s = {
        "??": r.Coalesce,
        "||": r.LogicalOR,
        "&&": r.LogicalAND,
        "|": r.BitwiseOR,
        "^": r.BitwiseXOR,
        "&": r.BitwiseAND,
        "==": r.Equality,
        "!=": r.Equality,
        "===": r.Equality,
        "!==": r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        "<": r.Relational,
        ">": r.Relational,
        "<=": r.Relational,
        ">=": r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        "<<": r.BitwiseSHIFT,
        ">>": r.BitwiseSHIFT,
        ">>>": r.BitwiseSHIFT,
        "+": r.Additive,
        "-": r.Additive,
        "*": r.Multiplicative,
        "%": r.Multiplicative,
        "/": r.Multiplicative,
        "**": r.Exponentiation,
      });
    var X = 1,
      he = 2,
      Ce = 4,
      Se = 8,
      ye = 16,
      oe = 32,
      Ae = 64,
      Le = he | Ce,
      ut = X | he,
      W = X | he | Ce,
      Me = X,
      ht = Ce,
      De = X | Ce,
      ge = X,
      Ue = X | oe,
      wt = 0,
      xt = X | ye,
      lt = X | Se;
    function kt() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1,
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function Ye(a, d) {
      var c = "";
      for (d |= 0; d > 0; d >>>= 1, a += a) d & 1 && (c += a);
      return c;
    }
    function oi(a) {
      return /[\r\n]/g.test(a);
    }
    function Pe(a) {
      var d = a.length;
      return d && m.code.isLineTerminator(a.charCodeAt(d - 1));
    }
    function At(a, d) {
      var c;
      for (c in d) d.hasOwnProperty(c) && (a[c] = d[c]);
      return a;
    }
    function vt(a, d) {
      var c, f;
      function b(R) {
        return (
          typeof R == "object" && R instanceof Object && !(R instanceof RegExp)
        );
      }
      for (c in d)
        d.hasOwnProperty(c) &&
          ((f = d[c]),
          b(f) ? (b(a[c]) ? vt(a[c], f) : (a[c] = vt({}, f))) : (a[c] = f));
      return a;
    }
    function yt(a) {
      var d, c, f, b, R;
      if (a !== a) throw new Error("Numeric literal whose value is NaN");
      if (a < 0 || (a === 0 && 1 / a < 0))
        throw new Error("Numeric literal whose value is negative");
      if (a === 1 / 0) return C ? "null" : _ ? "1e400" : "1e+400";
      if (((d = "" + a), !_ || d.length < 3)) return d;
      for (
        c = d.indexOf("."),
          !C &&
            d.charCodeAt(0) === 48 &&
            c === 1 &&
            ((c = 0), (d = d.slice(1))),
          f = d,
          d = d.replace("e+", "e"),
          b = 0,
          (R = f.indexOf("e")) > 0 &&
            ((b = +f.slice(R + 1)), (f = f.slice(0, R))),
          c >= 0 &&
            ((b -= f.length - c - 1),
            (f = +(f.slice(0, c) + f.slice(c + 1)) + "")),
          R = 0;
        f.charCodeAt(f.length + R - 1) === 48;

      )
        --R;
      return (
        R !== 0 && ((b -= R), (f = f.slice(0, R))),
        b !== 0 && (f += "e" + b),
        (f.length < d.length ||
          (A &&
            a > 1e12 &&
            Math.floor(a) === a &&
            (f = "0x" + a.toString(16)).length < d.length)) &&
          +f === a &&
          (d = f),
        d
      );
    }
    function It(a, d) {
      return (a & -2) === 8232
        ? (d ? "u" : "\\u") + (a === 8232 ? "2028" : "2029")
        : a === 10 || a === 13
        ? (d ? "" : "\\") + (a === 10 ? "n" : "r")
        : String.fromCharCode(a);
    }
    function jt(a) {
      var d, c, f, b, R, F, B, Q;
      if (((c = a.toString()), a.source)) {
        if (((d = c.match(/\/([^/]*)$/)), !d)) return c;
        for (
          f = d[1], c = "", B = !1, Q = !1, b = 0, R = a.source.length;
          b < R;
          ++b
        )
          (F = a.source.charCodeAt(b)),
            Q
              ? ((c += It(F, Q)), (Q = !1))
              : (B
                  ? F === 93 && (B = !1)
                  : F === 47
                  ? (c += "\\")
                  : F === 91 && (B = !0),
                (c += It(F, Q)),
                (Q = F === 92));
        return "/" + c + "/" + f;
      }
      return c;
    }
    function Pt(a, d) {
      var c;
      return a === 8
        ? "\\b"
        : a === 12
        ? "\\f"
        : a === 9
        ? "\\t"
        : ((c = a.toString(16).toUpperCase()),
          C || a > 255
            ? "\\u" + "0000".slice(c.length) + c
            : a === 0 && !m.code.isDecimalDigit(d)
            ? "\\0"
            : a === 11
            ? "\\x0B"
            : "\\x" + "00".slice(c.length) + c);
    }
    function qt(a) {
      if (a === 92) return "\\\\";
      if (a === 10) return "\\n";
      if (a === 13) return "\\r";
      if (a === 8232) return "\\u2028";
      if (a === 8233) return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function Ke(a) {
      var d, c, f, b;
      for (b = P === "double" ? '"' : "'", d = 0, c = a.length; d < c; ++d)
        if (((f = a.charCodeAt(d)), f === 39)) {
          b = '"';
          break;
        } else if (f === 34) {
          b = "'";
          break;
        } else f === 92 && ++d;
      return b + a + b;
    }
    function ui(a) {
      var d = "",
        c,
        f,
        b,
        R = 0,
        F = 0,
        B,
        Q;
      for (c = 0, f = a.length; c < f; ++c) {
        if (((b = a.charCodeAt(c)), b === 39)) ++R;
        else if (b === 34) ++F;
        else if (b === 47 && C) d += "\\";
        else if (m.code.isLineTerminator(b) || b === 92) {
          d += qt(b);
          continue;
        } else if (
          !m.code.isIdentifierPartES5(b) &&
          ((C && b < 32) || (!C && !k && (b < 32 || b > 126)))
        ) {
          d += Pt(b, a.charCodeAt(c + 1));
          continue;
        }
        d += String.fromCharCode(b);
      }
      if (
        ((B = !(P === "double" || (P === "auto" && F < R))),
        (Q = B ? "'" : '"'),
        !(B ? R : F))
      )
        return Q + d + Q;
      for (a = d, d = Q, c = 0, f = a.length; c < f; ++c)
        (b = a.charCodeAt(c)),
          ((b === 39 && B) || (b === 34 && !B)) && (d += "\\"),
          (d += String.fromCharCode(b));
      return d + Q;
    }
    function Ut(a) {
      var d,
        c,
        f,
        b = "";
      for (d = 0, c = a.length; d < c; ++d)
        (f = a[d]), (b += Array.isArray(f) ? Ut(f) : f);
      return b;
    }
    function fe(a, d) {
      if (!u) return Array.isArray(a) ? Ut(a) : a;
      if (d == null) {
        if (a instanceof o) return a;
        d = {};
      }
      return d.loc == null
        ? new o(null, null, u, a, d.name || null)
        : new o(
            d.loc.start.line,
            d.loc.start.column,
            u === !0 ? d.loc.source || null : u,
            a,
            d.name || null
          );
    }
    function re() {
      return E || " ";
    }
    function Y(a, d) {
      var c, f, b, R;
      return (
        (c = fe(a).toString()),
        c.length === 0
          ? [d]
          : ((f = fe(d).toString()),
            f.length === 0
              ? [a]
              : ((b = c.charCodeAt(c.length - 1)),
                (R = f.charCodeAt(0)),
                ((b === 43 || b === 45) && b === R) ||
                (m.code.isIdentifierPartES5(b) &&
                  m.code.isIdentifierPartES5(R)) ||
                (b === 47 && R === 105)
                  ? [a, re(), d]
                  : m.code.isWhiteSpace(b) ||
                    m.code.isLineTerminator(b) ||
                    m.code.isWhiteSpace(R) ||
                    m.code.isLineTerminator(R)
                  ? [a, d]
                  : [a, E, d]))
      );
    }
    function de(a) {
      return [x, a];
    }
    function Ee(a) {
      var d;
      (d = x), (x += v), a(x), (x = d);
    }
    function Tt(a) {
      var d;
      for (
        d = a.length - 1;
        d >= 0 && !m.code.isLineTerminator(a.charCodeAt(d));
        --d
      );
      return a.length - 1 - d;
    }
    function $(a, d) {
      var c, f, b, R, F, B, Q, ae;
      for (
        c = a.split(/\r\n|[\r\n]/), B = Number.MAX_VALUE, f = 1, b = c.length;
        f < b;
        ++f
      ) {
        for (
          R = c[f], F = 0;
          F < R.length && m.code.isWhiteSpace(R.charCodeAt(F));

        )
          ++F;
        B > F && (B = F);
      }
      for (
        typeof d < "u"
          ? ((Q = x), c[1][B] === "*" && (d += " "), (x = d))
          : (B & 1 && --B, (Q = x)),
          f = 1,
          b = c.length;
        f < b;
        ++f
      )
        (ae = fe(de(c[f].slice(B)))), (c[f] = u ? ae.join("") : ae);
      return (
        (x = Q),
        c.join(`
`)
      );
    }
    function je(a, d) {
      if (a.type === "Line") {
        if (Pe(a.value)) return "//" + a.value;
        var c = "//" + a.value;
        return (
          V ||
            (c += `
`),
          c
        );
      }
      return N.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value)
        ? $("/*" + a.value + "*/", d)
        : "/*" + a.value + "*/";
    }
    function hi(a, d) {
      var c, f, b, R, F, B, Q, ae, ke, Ze, it, ci, pi, Ge;
      if (a.leadingComments && a.leadingComments.length > 0) {
        if (((R = d), V)) {
          for (
            b = a.leadingComments[0],
              d = [],
              ae = b.extendedRange,
              ke = b.range,
              it = w.substring(ae[0], ke[0]),
              Ge = (it.match(/\n/g) || []).length,
              Ge > 0
                ? (d.push(
                    Ye(
                      `
`,
                      Ge
                    )
                  ),
                  d.push(de(je(b))))
                : (d.push(it), d.push(je(b))),
              Ze = ke,
              c = 1,
              f = a.leadingComments.length;
            c < f;
            c++
          )
            (b = a.leadingComments[c]),
              (ke = b.range),
              (ci = w.substring(Ze[1], ke[0])),
              (Ge = (ci.match(/\n/g) || []).length),
              d.push(
                Ye(
                  `
`,
                  Ge
                )
              ),
              d.push(de(je(b))),
              (Ze = ke);
          (pi = w.substring(ke[1], ae[1])),
            (Ge = (pi.match(/\n/g) || []).length),
            d.push(
              Ye(
                `
`,
                Ge
              )
            );
        } else
          for (
            b = a.leadingComments[0],
              d = [],
              M &&
                a.type === i.Program &&
                a.body.length === 0 &&
                d.push(`
`),
              d.push(je(b)),
              Pe(fe(d).toString()) ||
                d.push(`
`),
              c = 1,
              f = a.leadingComments.length;
            c < f;
            ++c
          )
            (b = a.leadingComments[c]),
              (Q = [je(b)]),
              Pe(fe(Q).toString()) ||
                Q.push(`
`),
              d.push(de(Q));
        d.push(de(R));
      }
      if (a.trailingComments)
        if (V)
          (b = a.trailingComments[0]),
            (ae = b.extendedRange),
            (ke = b.range),
            (it = w.substring(ae[0], ke[0])),
            (Ge = (it.match(/\n/g) || []).length),
            Ge > 0
              ? (d.push(
                  Ye(
                    `
`,
                    Ge
                  )
                ),
                d.push(de(je(b))))
              : (d.push(it), d.push(je(b)));
        else
          for (
            F = !Pe(fe(d).toString()),
              B = Ye(" ", Tt(fe([x, d, v]).toString())),
              c = 0,
              f = a.trailingComments.length;
            c < f;
            ++c
          )
            (b = a.trailingComments[c]),
              F
                ? (c === 0 ? (d = [d, v]) : (d = [d, B]), d.push(je(b, B)))
                : (d = [d, de(je(b))]),
              c !== f - 1 &&
                !Pe(fe(d).toString()) &&
                (d = [
                  d,
                  `
`,
                ]);
      return d;
    }
    function ct(a, d, c) {
      var f,
        b = 0;
      for (f = a; f < d; f++)
        w[f] ===
          `
` && b++;
      for (f = 1; f < b; f++) c.push(T);
    }
    function _e(a, d, c) {
      return d < c ? ["(", a, ")"] : a;
    }
    function Nt(a) {
      var d, c, f;
      for (f = a.split(/\r\n|\n/), d = 1, c = f.length; d < c; d++)
        f[d] = T + x + f[d];
      return f;
    }
    function li(a, d) {
      var c, f, b;
      return (
        (c = a[N.verbatim]),
        typeof c == "string"
          ? (f = _e(Nt(c), r.Sequence, d))
          : ((f = Nt(c.content)),
            (b = c.precedence != null ? c.precedence : r.Sequence),
            (f = _e(f, b, d))),
        fe(f, a)
      );
    }
    function we() {}
    (we.prototype.maybeBlock = function (a, d) {
      var c,
        f,
        b = this;
      return (
        (f = !N.comment || !a.leadingComments),
        a.type === i.BlockStatement && f
          ? [E, this.generateStatement(a, d)]
          : a.type === i.EmptyStatement && f
          ? ";"
          : (Ee(function () {
              c = [T, de(b.generateStatement(a, d))];
            }),
            c)
      );
    }),
      (we.prototype.maybeBlockSuffix = function (a, d) {
        var c = Pe(fe(d).toString());
        return a.type === i.BlockStatement &&
          (!N.comment || !a.leadingComments) &&
          !c
          ? [d, E]
          : c
          ? [d, x]
          : [d, T, x];
      });
    function Re(a) {
      return fe(a.name, a);
    }
    function Oe(a, d) {
      return a.async ? "async" + (d ? re() : E) : "";
    }
    function Ve(a) {
      var d = a.generator && !N.moz.starlessGenerator;
      return d ? "*" + E : "";
    }
    function ve(a) {
      var d = a.value,
        c = "";
      return (
        d.async && (c += Oe(d, !a.computed)),
        d.generator && (c += Ve(d) ? "*" : ""),
        c
      );
    }
    (we.prototype.generatePattern = function (a, d, c) {
      return a.type === i.Identifier ? Re(a) : this.generateExpression(a, d, c);
    }),
      (we.prototype.generateFunctionParams = function (a) {
        var d, c, f, b;
        if (
          ((b = !1),
          a.type === i.ArrowFunctionExpression &&
            !a.rest &&
            (!a.defaults || a.defaults.length === 0) &&
            a.params.length === 1 &&
            a.params[0].type === i.Identifier)
        )
          f = [Oe(a, !0), Re(a.params[0])];
        else {
          for (
            f = a.type === i.ArrowFunctionExpression ? [Oe(a, !1)] : [],
              f.push("("),
              a.defaults && (b = !0),
              d = 0,
              c = a.params.length;
            d < c;
            ++d
          )
            b && a.defaults[d]
              ? f.push(
                  this.generateAssignment(
                    a.params[d],
                    a.defaults[d],
                    "=",
                    r.Assignment,
                    W
                  )
                )
              : f.push(this.generatePattern(a.params[d], r.Assignment, W)),
              d + 1 < c && f.push("," + E);
          a.rest &&
            (a.params.length && f.push("," + E),
            f.push("..."),
            f.push(Re(a.rest))),
            f.push(")");
        }
        return f;
      }),
      (we.prototype.generateFunctionBody = function (a) {
        var d, c;
        return (
          (d = this.generateFunctionParams(a)),
          a.type === i.ArrowFunctionExpression && (d.push(E), d.push("=>")),
          a.expression
            ? (d.push(E),
              (c = this.generateExpression(a.body, r.Assignment, W)),
              c.toString().charAt(0) === "{" && (c = ["(", c, ")"]),
              d.push(c))
            : d.push(this.maybeBlock(a.body, lt)),
          d
        );
      }),
      (we.prototype.generateIterationForStatement = function (a, d, c) {
        var f = ["for" + (d.await ? re() + "await" : "") + E + "("],
          b = this;
        return (
          Ee(function () {
            d.left.type === i.VariableDeclaration
              ? Ee(function () {
                  f.push(d.left.kind + re()),
                    f.push(b.generateStatement(d.left.declarations[0], wt));
                })
              : f.push(b.generateExpression(d.left, r.Call, W)),
              (f = Y(f, a)),
              (f = [Y(f, b.generateExpression(d.right, r.Assignment, W)), ")"]);
          }),
          f.push(this.maybeBlock(d.body, c)),
          f
        );
      }),
      (we.prototype.generatePropertyKey = function (a, d) {
        var c = [];
        return (
          d && c.push("["),
          c.push(this.generateExpression(a, r.Assignment, W)),
          d && c.push("]"),
          c
        );
      }),
      (we.prototype.generateAssignment = function (a, d, c, f, b) {
        return (
          r.Assignment < f && (b |= X),
          _e(
            [
              this.generateExpression(a, r.Call, b),
              E + c + E,
              this.generateExpression(d, r.Assignment, b),
            ],
            r.Assignment,
            f
          )
        );
      }),
      (we.prototype.semicolon = function (a) {
        return !D && a & oe ? "" : ";";
      }),
      (we.Statement = {
        BlockStatement: function (a, d) {
          var c,
            f,
            b = ["{", T],
            R = this;
          return (
            Ee(function () {
              a.body.length === 0 &&
                V &&
                ((c = a.range),
                c[1] - c[0] > 2 &&
                  ((f = w.substring(c[0] + 1, c[1] - 1)),
                  f[0] ===
                    `
` && (b = ["{"]),
                  b.push(f)));
              var F, B, Q, ae;
              for (
                ae = ge, d & Se && (ae |= ye), F = 0, B = a.body.length;
                F < B;
                ++F
              )
                V &&
                  (F === 0 &&
                    (a.body[0].leadingComments &&
                      ((c = a.body[0].leadingComments[0].extendedRange),
                      (f = w.substring(c[0], c[1])),
                      f[0] ===
                        `
` && (b = ["{"])),
                    a.body[0].leadingComments ||
                      ct(a.range[0], a.body[0].range[0], b)),
                  F > 0 &&
                    !a.body[F - 1].trailingComments &&
                    !a.body[F].leadingComments &&
                    ct(a.body[F - 1].range[1], a.body[F].range[0], b)),
                  F === B - 1 && (ae |= oe),
                  a.body[F].leadingComments && V
                    ? (Q = R.generateStatement(a.body[F], ae))
                    : (Q = de(R.generateStatement(a.body[F], ae))),
                  b.push(Q),
                  Pe(fe(Q).toString()) ||
                    (V && F < B - 1 && a.body[F + 1].leadingComments) ||
                    b.push(T),
                  V &&
                    F === B - 1 &&
                    (a.body[F].trailingComments ||
                      ct(a.body[F].range[1], a.range[1], b));
            }),
            b.push(de("}")),
            b
          );
        },
        BreakStatement: function (a, d) {
          return a.label
            ? "break " + a.label.name + this.semicolon(d)
            : "break" + this.semicolon(d);
        },
        ContinueStatement: function (a, d) {
          return a.label
            ? "continue " + a.label.name + this.semicolon(d)
            : "continue" + this.semicolon(d);
        },
        ClassBody: function (a, d) {
          var c = ["{", T],
            f = this;
          return (
            Ee(function (b) {
              var R, F;
              for (R = 0, F = a.body.length; R < F; ++R)
                c.push(b),
                  c.push(f.generateExpression(a.body[R], r.Sequence, W)),
                  R + 1 < F && c.push(T);
            }),
            Pe(fe(c).toString()) || c.push(T),
            c.push(x),
            c.push("}"),
            c
          );
        },
        ClassDeclaration: function (a, d) {
          var c, f;
          return (
            (c = ["class"]),
            a.id && (c = Y(c, this.generateExpression(a.id, r.Sequence, W))),
            a.superClass &&
              ((f = Y(
                "extends",
                this.generateExpression(a.superClass, r.Unary, W)
              )),
              (c = Y(c, f))),
            c.push(E),
            c.push(this.generateStatement(a.body, Ue)),
            c
          );
        },
        DirectiveStatement: function (a, d) {
          return N.raw && a.raw
            ? a.raw + this.semicolon(d)
            : Ke(a.directive) + this.semicolon(d);
        },
        DoWhileStatement: function (a, d) {
          var c = Y("do", this.maybeBlock(a.body, ge));
          return (
            (c = this.maybeBlockSuffix(a.body, c)),
            Y(c, [
              "while" + E + "(",
              this.generateExpression(a.test, r.Sequence, W),
              ")" + this.semicolon(d),
            ])
          );
        },
        CatchClause: function (a, d) {
          var c,
            f = this;
          return (
            Ee(function () {
              var b;
              a.param
                ? ((c = [
                    "catch" + E + "(",
                    f.generateExpression(a.param, r.Sequence, W),
                    ")",
                  ]),
                  a.guard &&
                    ((b = f.generateExpression(a.guard, r.Sequence, W)),
                    c.splice(2, 0, " if ", b)))
                : (c = ["catch"]);
            }),
            c.push(this.maybeBlock(a.body, ge)),
            c
          );
        },
        DebuggerStatement: function (a, d) {
          return "debugger" + this.semicolon(d);
        },
        EmptyStatement: function (a, d) {
          return ";";
        },
        ExportDefaultDeclaration: function (a, d) {
          var c = ["export"],
            f;
          return (
            (f = d & oe ? Ue : ge),
            (c = Y(c, "default")),
            K(a.declaration)
              ? (c = Y(c, this.generateStatement(a.declaration, f)))
              : (c = Y(
                  c,
                  this.generateExpression(a.declaration, r.Assignment, W) +
                    this.semicolon(d)
                )),
            c
          );
        },
        ExportNamedDeclaration: function (a, d) {
          var c = ["export"],
            f,
            b = this;
          return (
            (f = d & oe ? Ue : ge),
            a.declaration
              ? Y(c, this.generateStatement(a.declaration, f))
              : (a.specifiers &&
                  (a.specifiers.length === 0
                    ? (c = Y(c, "{" + E + "}"))
                    : a.specifiers[0].type === i.ExportBatchSpecifier
                    ? (c = Y(
                        c,
                        this.generateExpression(a.specifiers[0], r.Sequence, W)
                      ))
                    : ((c = Y(c, "{")),
                      Ee(function (R) {
                        var F, B;
                        for (
                          c.push(T), F = 0, B = a.specifiers.length;
                          F < B;
                          ++F
                        )
                          c.push(R),
                            c.push(
                              b.generateExpression(
                                a.specifiers[F],
                                r.Sequence,
                                W
                              )
                            ),
                            F + 1 < B && c.push("," + T);
                      }),
                      Pe(fe(c).toString()) || c.push(T),
                      c.push(x + "}")),
                  a.source
                    ? (c = Y(c, [
                        "from" + E,
                        this.generateExpression(a.source, r.Sequence, W),
                        this.semicolon(d),
                      ]))
                    : c.push(this.semicolon(d))),
                c)
          );
        },
        ExportAllDeclaration: function (a, d) {
          return [
            "export" + E,
            "*" + E,
            "from" + E,
            this.generateExpression(a.source, r.Sequence, W),
            this.semicolon(d),
          ];
        },
        ExpressionStatement: function (a, d) {
          var c, f;
          function b(B) {
            var Q;
            return B.slice(0, 5) !== "class"
              ? !1
              : ((Q = B.charCodeAt(5)),
                Q === 123 ||
                  m.code.isWhiteSpace(Q) ||
                  m.code.isLineTerminator(Q));
          }
          function R(B) {
            var Q;
            return B.slice(0, 8) !== "function"
              ? !1
              : ((Q = B.charCodeAt(8)),
                Q === 40 ||
                  m.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  m.code.isLineTerminator(Q));
          }
          function F(B) {
            var Q, ae, ke;
            if (
              B.slice(0, 5) !== "async" ||
              !m.code.isWhiteSpace(B.charCodeAt(5))
            )
              return !1;
            for (
              ae = 6, ke = B.length;
              ae < ke && m.code.isWhiteSpace(B.charCodeAt(ae));
              ++ae
            );
            return ae === ke || B.slice(ae, ae + 8) !== "function"
              ? !1
              : ((Q = B.charCodeAt(ae + 8)),
                Q === 40 ||
                  m.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  m.code.isLineTerminator(Q));
          }
          return (
            (c = [this.generateExpression(a.expression, r.Sequence, W)]),
            (f = fe(c).toString()),
            f.charCodeAt(0) === 123 ||
            b(f) ||
            R(f) ||
            F(f) ||
            (G &&
              d & ye &&
              a.expression.type === i.Literal &&
              typeof a.expression.value == "string")
              ? (c = ["(", c, ")" + this.semicolon(d)])
              : c.push(this.semicolon(d)),
            c
          );
        },
        ImportDeclaration: function (a, d) {
          var c,
            f,
            b = this;
          return a.specifiers.length === 0
            ? [
                "import",
                E,
                this.generateExpression(a.source, r.Sequence, W),
                this.semicolon(d),
              ]
            : ((c = ["import"]),
              (f = 0),
              a.specifiers[f].type === i.ImportDefaultSpecifier &&
                ((c = Y(c, [
                  this.generateExpression(a.specifiers[f], r.Sequence, W),
                ])),
                ++f),
              a.specifiers[f] &&
                (f !== 0 && c.push(","),
                a.specifiers[f].type === i.ImportNamespaceSpecifier
                  ? (c = Y(c, [
                      E,
                      this.generateExpression(a.specifiers[f], r.Sequence, W),
                    ]))
                  : (c.push(E + "{"),
                    a.specifiers.length - f === 1
                      ? (c.push(E),
                        c.push(
                          this.generateExpression(
                            a.specifiers[f],
                            r.Sequence,
                            W
                          )
                        ),
                        c.push(E + "}" + E))
                      : (Ee(function (R) {
                          var F, B;
                          for (
                            c.push(T), F = f, B = a.specifiers.length;
                            F < B;
                            ++F
                          )
                            c.push(R),
                              c.push(
                                b.generateExpression(
                                  a.specifiers[F],
                                  r.Sequence,
                                  W
                                )
                              ),
                              F + 1 < B && c.push("," + T);
                        }),
                        Pe(fe(c).toString()) || c.push(T),
                        c.push(x + "}" + E)))),
              (c = Y(c, [
                "from" + E,
                this.generateExpression(a.source, r.Sequence, W),
                this.semicolon(d),
              ])),
              c);
        },
        VariableDeclarator: function (a, d) {
          var c = d & X ? W : Le;
          return a.init
            ? [
                this.generateExpression(a.id, r.Assignment, c),
                E,
                "=",
                E,
                this.generateExpression(a.init, r.Assignment, c),
              ]
            : this.generatePattern(a.id, r.Assignment, c);
        },
        VariableDeclaration: function (a, d) {
          var c,
            f,
            b,
            R,
            F,
            B = this;
          (c = [a.kind]), (F = d & X ? ge : wt);
          function Q() {
            for (
              R = a.declarations[0],
                N.comment && R.leadingComments
                  ? (c.push(`
`),
                    c.push(de(B.generateStatement(R, F))))
                  : (c.push(re()), c.push(B.generateStatement(R, F))),
                f = 1,
                b = a.declarations.length;
              f < b;
              ++f
            )
              (R = a.declarations[f]),
                N.comment && R.leadingComments
                  ? (c.push("," + T), c.push(de(B.generateStatement(R, F))))
                  : (c.push("," + E), c.push(B.generateStatement(R, F)));
          }
          return (
            a.declarations.length > 1 ? Ee(Q) : Q(),
            c.push(this.semicolon(d)),
            c
          );
        },
        ThrowStatement: function (a, d) {
          return [
            Y("throw", this.generateExpression(a.argument, r.Sequence, W)),
            this.semicolon(d),
          ];
        },
        TryStatement: function (a, d) {
          var c, f, b, R;
          if (
            ((c = ["try", this.maybeBlock(a.block, ge)]),
            (c = this.maybeBlockSuffix(a.block, c)),
            a.handlers)
          )
            for (f = 0, b = a.handlers.length; f < b; ++f)
              (c = Y(c, this.generateStatement(a.handlers[f], ge))),
                (a.finalizer || f + 1 !== b) &&
                  (c = this.maybeBlockSuffix(a.handlers[f].body, c));
          else {
            for (R = a.guardedHandlers || [], f = 0, b = R.length; f < b; ++f)
              (c = Y(c, this.generateStatement(R[f], ge))),
                (a.finalizer || f + 1 !== b) &&
                  (c = this.maybeBlockSuffix(R[f].body, c));
            if (a.handler)
              if (Array.isArray(a.handler))
                for (f = 0, b = a.handler.length; f < b; ++f)
                  (c = Y(c, this.generateStatement(a.handler[f], ge))),
                    (a.finalizer || f + 1 !== b) &&
                      (c = this.maybeBlockSuffix(a.handler[f].body, c));
              else
                (c = Y(c, this.generateStatement(a.handler, ge))),
                  a.finalizer && (c = this.maybeBlockSuffix(a.handler.body, c));
          }
          return (
            a.finalizer &&
              (c = Y(c, ["finally", this.maybeBlock(a.finalizer, ge)])),
            c
          );
        },
        SwitchStatement: function (a, d) {
          var c,
            f,
            b,
            R,
            F,
            B = this;
          if (
            (Ee(function () {
              c = [
                "switch" + E + "(",
                B.generateExpression(a.discriminant, r.Sequence, W),
                ")" + E + "{" + T,
              ];
            }),
            a.cases)
          )
            for (F = ge, b = 0, R = a.cases.length; b < R; ++b)
              b === R - 1 && (F |= oe),
                (f = de(this.generateStatement(a.cases[b], F))),
                c.push(f),
                Pe(fe(f).toString()) || c.push(T);
          return c.push(de("}")), c;
        },
        SwitchCase: function (a, d) {
          var c,
            f,
            b,
            R,
            F,
            B = this;
          return (
            Ee(function () {
              for (
                a.test
                  ? (c = [
                      Y("case", B.generateExpression(a.test, r.Sequence, W)),
                      ":",
                    ])
                  : (c = ["default:"]),
                  b = 0,
                  R = a.consequent.length,
                  R &&
                    a.consequent[0].type === i.BlockStatement &&
                    ((f = B.maybeBlock(a.consequent[0], ge)),
                    c.push(f),
                    (b = 1)),
                  b !== R && !Pe(fe(c).toString()) && c.push(T),
                  F = ge;
                b < R;
                ++b
              )
                b === R - 1 && d & oe && (F |= oe),
                  (f = de(B.generateStatement(a.consequent[b], F))),
                  c.push(f),
                  b + 1 !== R && !Pe(fe(f).toString()) && c.push(T);
            }),
            c
          );
        },
        IfStatement: function (a, d) {
          var c,
            f,
            b,
            R = this;
          return (
            Ee(function () {
              c = [
                "if" + E + "(",
                R.generateExpression(a.test, r.Sequence, W),
                ")",
              ];
            }),
            (b = d & oe),
            (f = ge),
            b && (f |= oe),
            a.alternate
              ? (c.push(this.maybeBlock(a.consequent, ge)),
                (c = this.maybeBlockSuffix(a.consequent, c)),
                a.alternate.type === i.IfStatement
                  ? (c = Y(c, [
                      "else ",
                      this.generateStatement(a.alternate, f),
                    ]))
                  : (c = Y(c, Y("else", this.maybeBlock(a.alternate, f)))))
              : c.push(this.maybeBlock(a.consequent, f)),
            c
          );
        },
        ForStatement: function (a, d) {
          var c,
            f = this;
          return (
            Ee(function () {
              (c = ["for" + E + "("]),
                a.init
                  ? a.init.type === i.VariableDeclaration
                    ? c.push(f.generateStatement(a.init, wt))
                    : (c.push(f.generateExpression(a.init, r.Sequence, Le)),
                      c.push(";"))
                  : c.push(";"),
                a.test &&
                  (c.push(E),
                  c.push(f.generateExpression(a.test, r.Sequence, W))),
                c.push(";"),
                a.update &&
                  (c.push(E),
                  c.push(f.generateExpression(a.update, r.Sequence, W))),
                c.push(")");
            }),
            c.push(this.maybeBlock(a.body, d & oe ? Ue : ge)),
            c
          );
        },
        ForInStatement: function (a, d) {
          return this.generateIterationForStatement("in", a, d & oe ? Ue : ge);
        },
        ForOfStatement: function (a, d) {
          return this.generateIterationForStatement("of", a, d & oe ? Ue : ge);
        },
        LabeledStatement: function (a, d) {
          return [
            a.label.name + ":",
            this.maybeBlock(a.body, d & oe ? Ue : ge),
          ];
        },
        Program: function (a, d) {
          var c, f, b, R, F;
          for (
            R = a.body.length,
              c = [
                M && R > 0
                  ? `
`
                  : "",
              ],
              F = xt,
              b = 0;
            b < R;
            ++b
          )
            !M && b === R - 1 && (F |= oe),
              V &&
                (b === 0 &&
                  (a.body[0].leadingComments ||
                    ct(a.range[0], a.body[b].range[0], c)),
                b > 0 &&
                  !a.body[b - 1].trailingComments &&
                  !a.body[b].leadingComments &&
                  ct(a.body[b - 1].range[1], a.body[b].range[0], c)),
              (f = de(this.generateStatement(a.body[b], F))),
              c.push(f),
              b + 1 < R &&
                !Pe(fe(f).toString()) &&
                ((V && a.body[b + 1].leadingComments) || c.push(T)),
              V &&
                b === R - 1 &&
                (a.body[b].trailingComments ||
                  ct(a.body[b].range[1], a.range[1], c));
          return c;
        },
        FunctionDeclaration: function (a, d) {
          return [
            Oe(a, !0),
            "function",
            Ve(a) || re(),
            a.id ? Re(a.id) : "",
            this.generateFunctionBody(a),
          ];
        },
        ReturnStatement: function (a, d) {
          return a.argument
            ? [
                Y("return", this.generateExpression(a.argument, r.Sequence, W)),
                this.semicolon(d),
              ]
            : ["return" + this.semicolon(d)];
        },
        WhileStatement: function (a, d) {
          var c,
            f = this;
          return (
            Ee(function () {
              c = [
                "while" + E + "(",
                f.generateExpression(a.test, r.Sequence, W),
                ")",
              ];
            }),
            c.push(this.maybeBlock(a.body, d & oe ? Ue : ge)),
            c
          );
        },
        WithStatement: function (a, d) {
          var c,
            f = this;
          return (
            Ee(function () {
              c = [
                "with" + E + "(",
                f.generateExpression(a.object, r.Sequence, W),
                ")",
              ];
            }),
            c.push(this.maybeBlock(a.body, d & oe ? Ue : ge)),
            c
          );
        },
      }),
      At(we.prototype, we.Statement),
      (we.Expression = {
        SequenceExpression: function (a, d, c) {
          var f, b, R;
          for (
            r.Sequence < d && (c |= X), f = [], b = 0, R = a.expressions.length;
            b < R;
            ++b
          )
            f.push(this.generateExpression(a.expressions[b], r.Assignment, c)),
              b + 1 < R && f.push("," + E);
          return _e(f, r.Sequence, d);
        },
        AssignmentExpression: function (a, d, c) {
          return this.generateAssignment(a.left, a.right, a.operator, d, c);
        },
        ArrowFunctionExpression: function (a, d, c) {
          return _e(this.generateFunctionBody(a), r.ArrowFunction, d);
        },
        ConditionalExpression: function (a, d, c) {
          return (
            r.Conditional < d && (c |= X),
            _e(
              [
                this.generateExpression(a.test, r.Coalesce, c),
                E + "?" + E,
                this.generateExpression(a.consequent, r.Assignment, c),
                E + ":" + E,
                this.generateExpression(a.alternate, r.Assignment, c),
              ],
              r.Conditional,
              d
            )
          );
        },
        LogicalExpression: function (a, d, c) {
          return (
            a.operator === "??" && (c |= Ae), this.BinaryExpression(a, d, c)
          );
        },
        BinaryExpression: function (a, d, c) {
          var f, b, R, F, B, Q;
          return (
            (F = s[a.operator]),
            (b = a.operator === "**" ? r.Postfix : F),
            (R = a.operator === "**" ? F : F + 1),
            F < d && (c |= X),
            (B = this.generateExpression(a.left, b, c)),
            (Q = B.toString()),
            Q.charCodeAt(Q.length - 1) === 47 &&
            m.code.isIdentifierPartES5(a.operator.charCodeAt(0))
              ? (f = [B, re(), a.operator])
              : (f = Y(B, a.operator)),
            (B = this.generateExpression(a.right, R, c)),
            (a.operator === "/" && B.toString().charAt(0) === "/") ||
            (a.operator.slice(-1) === "<" && B.toString().slice(0, 3) === "!--")
              ? (f.push(re()), f.push(B))
              : (f = Y(f, B)),
            a.operator === "in" && !(c & X)
              ? ["(", f, ")"]
              : (a.operator === "||" || a.operator === "&&") && c & Ae
              ? ["(", f, ")"]
              : _e(f, F, d)
          );
        },
        CallExpression: function (a, d, c) {
          var f, b, R;
          for (
            f = [this.generateExpression(a.callee, r.Call, ut)],
              a.optional && f.push("?."),
              f.push("("),
              b = 0,
              R = a.arguments.length;
            b < R;
            ++b
          )
            f.push(this.generateExpression(a.arguments[b], r.Assignment, W)),
              b + 1 < R && f.push("," + E);
          return f.push(")"), c & he ? _e(f, r.Call, d) : ["(", f, ")"];
        },
        ChainExpression: function (a, d, c) {
          r.OptionalChaining < d && (c |= he);
          var f = this.generateExpression(a.expression, r.OptionalChaining, c);
          return _e(f, r.OptionalChaining, d);
        },
        NewExpression: function (a, d, c) {
          var f, b, R, F, B;
          if (
            ((b = a.arguments.length),
            (B = c & Ce && !O && b === 0 ? De : Me),
            (f = Y("new", this.generateExpression(a.callee, r.New, B))),
            !(c & Ce) || O || b > 0)
          ) {
            for (f.push("("), R = 0, F = b; R < F; ++R)
              f.push(this.generateExpression(a.arguments[R], r.Assignment, W)),
                R + 1 < F && f.push("," + E);
            f.push(")");
          }
          return _e(f, r.New, d);
        },
        MemberExpression: function (a, d, c) {
          var f, b;
          return (
            (f = [this.generateExpression(a.object, r.Call, c & he ? ut : Me)]),
            a.computed
              ? (a.optional && f.push("?."),
                f.push("["),
                f.push(
                  this.generateExpression(
                    a.property,
                    r.Sequence,
                    c & he ? W : De
                  )
                ),
                f.push("]"))
              : (!a.optional &&
                  a.object.type === i.Literal &&
                  typeof a.object.value == "number" &&
                  ((b = fe(f).toString()),
                  b.indexOf(".") < 0 &&
                    !/[eExX]/.test(b) &&
                    m.code.isDecimalDigit(b.charCodeAt(b.length - 1)) &&
                    !(b.length >= 2 && b.charCodeAt(0) === 48) &&
                    f.push(" ")),
                f.push(a.optional ? "?." : "."),
                f.push(Re(a.property))),
            _e(f, r.Member, d)
          );
        },
        MetaProperty: function (a, d, c) {
          var f;
          return (
            (f = []),
            f.push(typeof a.meta == "string" ? a.meta : Re(a.meta)),
            f.push("."),
            f.push(typeof a.property == "string" ? a.property : Re(a.property)),
            _e(f, r.Member, d)
          );
        },
        UnaryExpression: function (a, d, c) {
          var f, b, R, F, B;
          return (
            (b = this.generateExpression(a.argument, r.Unary, W)),
            E === ""
              ? (f = Y(a.operator, b))
              : ((f = [a.operator]),
                a.operator.length > 2
                  ? (f = Y(f, b))
                  : ((F = fe(f).toString()),
                    (B = F.charCodeAt(F.length - 1)),
                    (R = b.toString().charCodeAt(0)),
                    (((B === 43 || B === 45) && B === R) ||
                      (m.code.isIdentifierPartES5(B) &&
                        m.code.isIdentifierPartES5(R))) &&
                      f.push(re()),
                    f.push(b))),
            _e(f, r.Unary, d)
          );
        },
        YieldExpression: function (a, d, c) {
          var f;
          return (
            a.delegate ? (f = "yield*") : (f = "yield"),
            a.argument &&
              (f = Y(f, this.generateExpression(a.argument, r.Yield, W))),
            _e(f, r.Yield, d)
          );
        },
        AwaitExpression: function (a, d, c) {
          var f = Y(
            a.all ? "await*" : "await",
            this.generateExpression(a.argument, r.Await, W)
          );
          return _e(f, r.Await, d);
        },
        UpdateExpression: function (a, d, c) {
          return a.prefix
            ? _e(
                [a.operator, this.generateExpression(a.argument, r.Unary, W)],
                r.Unary,
                d
              )
            : _e(
                [this.generateExpression(a.argument, r.Postfix, W), a.operator],
                r.Postfix,
                d
              );
        },
        FunctionExpression: function (a, d, c) {
          var f = [Oe(a, !0), "function"];
          return (
            a.id
              ? (f.push(Ve(a) || re()), f.push(Re(a.id)))
              : f.push(Ve(a) || E),
            f.push(this.generateFunctionBody(a)),
            f
          );
        },
        ArrayPattern: function (a, d, c) {
          return this.ArrayExpression(a, d, c, !0);
        },
        ArrayExpression: function (a, d, c, f) {
          var b,
            R,
            F = this;
          return a.elements.length
            ? ((R = f ? !1 : a.elements.length > 1),
              (b = ["[", R ? T : ""]),
              Ee(function (B) {
                var Q, ae;
                for (Q = 0, ae = a.elements.length; Q < ae; ++Q)
                  a.elements[Q]
                    ? (b.push(R ? B : ""),
                      b.push(
                        F.generateExpression(a.elements[Q], r.Assignment, W)
                      ))
                    : (R && b.push(B), Q + 1 === ae && b.push(",")),
                    Q + 1 < ae && b.push("," + (R ? T : E));
              }),
              R && !Pe(fe(b).toString()) && b.push(T),
              b.push(R ? x : ""),
              b.push("]"),
              b)
            : "[]";
        },
        RestElement: function (a, d, c) {
          return "..." + this.generatePattern(a.argument);
        },
        ClassExpression: function (a, d, c) {
          var f, b;
          return (
            (f = ["class"]),
            a.id && (f = Y(f, this.generateExpression(a.id, r.Sequence, W))),
            a.superClass &&
              ((b = Y(
                "extends",
                this.generateExpression(a.superClass, r.Unary, W)
              )),
              (f = Y(f, b))),
            f.push(E),
            f.push(this.generateStatement(a.body, Ue)),
            f
          );
        },
        MethodDefinition: function (a, d, c) {
          var f, b;
          return (
            a.static ? (f = ["static" + E]) : (f = []),
            a.kind === "get" || a.kind === "set"
              ? (b = [
                  Y(a.kind, this.generatePropertyKey(a.key, a.computed)),
                  this.generateFunctionBody(a.value),
                ])
              : (b = [
                  ve(a),
                  this.generatePropertyKey(a.key, a.computed),
                  this.generateFunctionBody(a.value),
                ]),
            Y(f, b)
          );
        },
        Property: function (a, d, c) {
          return a.kind === "get" || a.kind === "set"
            ? [
                a.kind,
                re(),
                this.generatePropertyKey(a.key, a.computed),
                this.generateFunctionBody(a.value),
              ]
            : a.shorthand
            ? a.value.type === "AssignmentPattern"
              ? this.AssignmentPattern(a.value, r.Sequence, W)
              : this.generatePropertyKey(a.key, a.computed)
            : a.method
            ? [
                ve(a),
                this.generatePropertyKey(a.key, a.computed),
                this.generateFunctionBody(a.value),
              ]
            : [
                this.generatePropertyKey(a.key, a.computed),
                ":" + E,
                this.generateExpression(a.value, r.Assignment, W),
              ];
        },
        ObjectExpression: function (a, d, c) {
          var f,
            b,
            R,
            F = this;
          return a.properties.length
            ? ((f = a.properties.length > 1),
              Ee(function () {
                R = F.generateExpression(a.properties[0], r.Sequence, W);
              }),
              !f && !oi(fe(R).toString())
                ? ["{", E, R, E, "}"]
                : (Ee(function (B) {
                    var Q, ae;
                    if (((b = ["{", T, B, R]), f))
                      for (
                        b.push("," + T), Q = 1, ae = a.properties.length;
                        Q < ae;
                        ++Q
                      )
                        b.push(B),
                          b.push(
                            F.generateExpression(a.properties[Q], r.Sequence, W)
                          ),
                          Q + 1 < ae && b.push("," + T);
                  }),
                  Pe(fe(b).toString()) || b.push(T),
                  b.push(x),
                  b.push("}"),
                  b))
            : "{}";
        },
        AssignmentPattern: function (a, d, c) {
          return this.generateAssignment(a.left, a.right, "=", d, c);
        },
        ObjectPattern: function (a, d, c) {
          var f,
            b,
            R,
            F,
            B,
            Q = this;
          if (!a.properties.length) return "{}";
          if (((F = !1), a.properties.length === 1))
            (B = a.properties[0]),
              B.type === i.Property &&
                B.value.type !== i.Identifier &&
                (F = !0);
          else
            for (b = 0, R = a.properties.length; b < R; ++b)
              if (
                ((B = a.properties[b]), B.type === i.Property && !B.shorthand)
              ) {
                F = !0;
                break;
              }
          return (
            (f = ["{", F ? T : ""]),
            Ee(function (ae) {
              var ke, Ze;
              for (ke = 0, Ze = a.properties.length; ke < Ze; ++ke)
                f.push(F ? ae : ""),
                  f.push(Q.generateExpression(a.properties[ke], r.Sequence, W)),
                  ke + 1 < Ze && f.push("," + (F ? T : E));
            }),
            F && !Pe(fe(f).toString()) && f.push(T),
            f.push(F ? x : ""),
            f.push("}"),
            f
          );
        },
        ThisExpression: function (a, d, c) {
          return "this";
        },
        Super: function (a, d, c) {
          return "super";
        },
        Identifier: function (a, d, c) {
          return Re(a);
        },
        ImportDefaultSpecifier: function (a, d, c) {
          return Re(a.id || a.local);
        },
        ImportNamespaceSpecifier: function (a, d, c) {
          var f = ["*"],
            b = a.id || a.local;
          return b && f.push(E + "as" + re() + Re(b)), f;
        },
        ImportSpecifier: function (a, d, c) {
          var f = a.imported,
            b = [f.name],
            R = a.local;
          return (
            R && R.name !== f.name && b.push(re() + "as" + re() + Re(R)), b
          );
        },
        ExportSpecifier: function (a, d, c) {
          var f = a.local,
            b = [f.name],
            R = a.exported;
          return (
            R && R.name !== f.name && b.push(re() + "as" + re() + Re(R)), b
          );
        },
        Literal: function (a, d, c) {
          var f;
          if (a.hasOwnProperty("raw") && y && N.raw)
            try {
              if (
                ((f = y(a.raw).body[0].expression),
                f.type === i.Literal && f.value === a.value)
              )
                return a.raw;
            } catch {}
          return a.regex
            ? "/" + a.regex.pattern + "/" + a.regex.flags
            : typeof a.value == "bigint"
            ? a.value.toString() + "n"
            : a.bigint
            ? a.bigint + "n"
            : a.value === null
            ? "null"
            : typeof a.value == "string"
            ? ui(a.value)
            : typeof a.value == "number"
            ? yt(a.value)
            : typeof a.value == "boolean"
            ? a.value
              ? "true"
              : "false"
            : jt(a.value);
        },
        GeneratorExpression: function (a, d, c) {
          return this.ComprehensionExpression(a, d, c);
        },
        ComprehensionExpression: function (a, d, c) {
          var f,
            b,
            R,
            F,
            B = this;
          return (
            (f = a.type === i.GeneratorExpression ? ["("] : ["["]),
            N.moz.comprehensionExpressionStartsWithAssignment &&
              ((F = this.generateExpression(a.body, r.Assignment, W)),
              f.push(F)),
            a.blocks &&
              Ee(function () {
                for (b = 0, R = a.blocks.length; b < R; ++b)
                  (F = B.generateExpression(a.blocks[b], r.Sequence, W)),
                    b > 0 || N.moz.comprehensionExpressionStartsWithAssignment
                      ? (f = Y(f, F))
                      : f.push(F);
              }),
            a.filter &&
              ((f = Y(f, "if" + E)),
              (F = this.generateExpression(a.filter, r.Sequence, W)),
              (f = Y(f, ["(", F, ")"]))),
            N.moz.comprehensionExpressionStartsWithAssignment ||
              ((F = this.generateExpression(a.body, r.Assignment, W)),
              (f = Y(f, F))),
            f.push(a.type === i.GeneratorExpression ? ")" : "]"),
            f
          );
        },
        ComprehensionBlock: function (a, d, c) {
          var f;
          return (
            a.left.type === i.VariableDeclaration
              ? (f = [
                  a.left.kind,
                  re(),
                  this.generateStatement(a.left.declarations[0], wt),
                ])
              : (f = this.generateExpression(a.left, r.Call, W)),
            (f = Y(f, a.of ? "of" : "in")),
            (f = Y(f, this.generateExpression(a.right, r.Sequence, W))),
            ["for" + E + "(", f, ")"]
          );
        },
        SpreadElement: function (a, d, c) {
          return ["...", this.generateExpression(a.argument, r.Assignment, W)];
        },
        TaggedTemplateExpression: function (a, d, c) {
          var f = ut;
          c & he || (f = Me);
          var b = [
            this.generateExpression(a.tag, r.Call, f),
            this.generateExpression(a.quasi, r.Primary, ht),
          ];
          return _e(b, r.TaggedTemplate, d);
        },
        TemplateElement: function (a, d, c) {
          return a.value.raw;
        },
        TemplateLiteral: function (a, d, c) {
          var f, b, R;
          for (f = ["`"], b = 0, R = a.quasis.length; b < R; ++b)
            f.push(this.generateExpression(a.quasis[b], r.Primary, W)),
              b + 1 < R &&
                (f.push("${" + E),
                f.push(
                  this.generateExpression(a.expressions[b], r.Sequence, W)
                ),
                f.push(E + "}"));
          return f.push("`"), f;
        },
        ModuleSpecifier: function (a, d, c) {
          return this.Literal(a, d, c);
        },
        ImportExpression: function (a, d, c) {
          return _e(
            [
              "import(",
              this.generateExpression(a.source, r.Assignment, W),
              ")",
            ],
            r.Call,
            d
          );
        },
      }),
      At(we.prototype, we.Expression),
      (we.prototype.generateExpression = function (a, d, c) {
        var f, b;
        return (
          (b = a.type || i.Property),
          N.verbatim && a.hasOwnProperty(N.verbatim)
            ? li(a, d)
            : ((f = this[b](a, d, c)), N.comment && (f = hi(a, f)), fe(f, a))
        );
      }),
      (we.prototype.generateStatement = function (a, d) {
        var c, f;
        return (
          (c = this[a.type](a, d)),
          N.comment && (c = hi(a, c)),
          (f = fe(c).toString()),
          a.type === i.Program &&
            !M &&
            T === "" &&
            f.charAt(f.length - 1) ===
              `
` &&
            (c = u ? fe(c).replaceRight(/\s+$/, "") : f.replace(/\s+$/, "")),
          fe(c, a)
        );
      });
    function pt(a) {
      var d;
      if (((d = new we()), K(a))) return d.generateStatement(a, ge);
      if (te(a)) return d.generateExpression(a, r.Sequence, W);
      throw new Error("Unknown node type: " + a.type);
    }
    function ee(a, d) {
      var c = kt(),
        f,
        b;
      return (
        d != null
          ? (typeof d.indent == "string" && (c.format.indent.style = d.indent),
            typeof d.base == "number" && (c.format.indent.base = d.base),
            (d = vt(c, d)),
            (v = d.format.indent.style),
            typeof d.base == "string"
              ? (x = d.base)
              : (x = Ye(v, d.format.indent.base)))
          : ((d = c),
            (v = d.format.indent.style),
            (x = Ye(v, d.format.indent.base))),
        (C = d.format.json),
        (_ = d.format.renumber),
        (A = C ? !1 : d.format.hexadecimal),
        (P = C ? "double" : d.format.quotes),
        (k = d.format.escapeless),
        (T = d.format.newline),
        (E = d.format.space),
        d.format.compact && (T = E = v = x = ""),
        (O = d.format.parentheses),
        (D = d.format.semicolons),
        (M = d.format.safeConcatenation),
        (G = d.directive),
        (y = C ? null : d.parse),
        (u = d.sourceMap),
        (w = d.sourceCode),
        (V = d.format.preserveBlankLines && w !== null),
        (N = d),
        u &&
          (e.browser ? (o = Vt.sourceMap.SourceNode) : (o = wa().SourceNode)),
        (f = pt(a)),
        u
          ? ((b = f.toStringWithSourceMap({
              file: d.file,
              sourceRoot: d.sourceMapRoot,
            })),
            d.sourceContent &&
              b.map.setSourceContent(d.sourceMap, d.sourceContent),
            d.sourceMapWithCode ? b : b.map.toString())
          : ((b = { code: f.toString(), map: null }),
            d.sourceMapWithCode ? b : b.code)
      );
    }
    (H = {
      indent: { style: "", base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (z = kt().format),
      (e.version = qa.version),
      (e.generate = ee),
      (e.attachComments = l.attachComments),
      (e.Precedence = vt({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = H),
      (e.FORMAT_DEFAULTS = z);
  })();
})(Tn);
var $i = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict:
      "implements interface let package private protected public static yield",
    strictBind: "eval arguments",
  },
  Yi =
    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
  Ua = {
    5: Yi,
    "5module": Yi + " export import",
    6: Yi + " const class extends export import super",
  },
  Ga = /^in(stanceof)?$/,
  hr =
    "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
  Vn =
    "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
  Wa = new RegExp("[" + hr + "]"),
  za = new RegExp("[" + hr + Vn + "]");
hr = Vn = null;
var Fn = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20,
    28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47,
    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
    39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3,
    21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
    72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95,
    7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
    264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
    31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129,
    74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2,
    18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3,
    1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2,
    0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0,
    1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0,
    2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2,
    6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  Ha = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9,
    7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
    161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193,
    17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12,
    9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9,
    120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
    17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
    4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function er(e, i) {
  for (var r = 65536, s = 0; s < i.length; s += 2) {
    if (((r += i[s]), r > e)) return !1;
    if (((r += i[s + 1]), r >= e)) return !0;
  }
}
function dt(e, i) {
  return e < 65
    ? e === 36
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && Wa.test(String.fromCharCode(e))
    : i === !1
    ? !1
    : er(e, Fn);
}
function Ft(e, i) {
  return e < 48
    ? e === 36
    : e < 58
    ? !0
    : e < 65
    ? !1
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && za.test(String.fromCharCode(e))
    : i === !1
    ? !1
    : er(e, Fn) || er(e, Ha);
}
var me = function (i, r) {
  r === void 0 && (r = {}),
    (this.label = i),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function ze(e, i) {
  return new me(e, { beforeExpr: !0, binop: i });
}
var He = { beforeExpr: !0 },
  qe = { startsExpr: !0 },
  lr = {};
function pe(e, i) {
  return i === void 0 && (i = {}), (i.keyword = e), (lr[e] = new me(e, i));
}
var g = {
    num: new me("num", qe),
    regexp: new me("regexp", qe),
    string: new me("string", qe),
    name: new me("name", qe),
    eof: new me("eof"),
    bracketL: new me("[", { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new me("]"),
    braceL: new me("{", { beforeExpr: !0, startsExpr: !0 }),
    braceR: new me("}"),
    parenL: new me("(", { beforeExpr: !0, startsExpr: !0 }),
    parenR: new me(")"),
    comma: new me(",", He),
    semi: new me(";", He),
    colon: new me(":", He),
    dot: new me("."),
    question: new me("?", He),
    questionDot: new me("?."),
    arrow: new me("=>", He),
    template: new me("template"),
    invalidTemplate: new me("invalidTemplate"),
    ellipsis: new me("...", He),
    backQuote: new me("`", qe),
    dollarBraceL: new me("${", { beforeExpr: !0, startsExpr: !0 }),
    eq: new me("=", { beforeExpr: !0, isAssign: !0 }),
    assign: new me("_=", { beforeExpr: !0, isAssign: !0 }),
    incDec: new me("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new me("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: ze("||", 1),
    logicalAND: ze("&&", 2),
    bitwiseOR: ze("|", 3),
    bitwiseXOR: ze("^", 4),
    bitwiseAND: ze("&", 5),
    equality: ze("==/!=/===/!==", 6),
    relational: ze("</>/<=/>=", 7),
    bitShift: ze("<</>>/>>>", 8),
    plusMin: new me("+/-", {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: ze("%", 10),
    star: ze("*", 10),
    slash: ze("/", 10),
    starstar: new me("**", { beforeExpr: !0 }),
    coalesce: ze("??", 1),
    _break: pe("break"),
    _case: pe("case", He),
    _catch: pe("catch"),
    _continue: pe("continue"),
    _debugger: pe("debugger"),
    _default: pe("default", He),
    _do: pe("do", { isLoop: !0, beforeExpr: !0 }),
    _else: pe("else", He),
    _finally: pe("finally"),
    _for: pe("for", { isLoop: !0 }),
    _function: pe("function", qe),
    _if: pe("if"),
    _return: pe("return", He),
    _switch: pe("switch"),
    _throw: pe("throw", He),
    _try: pe("try"),
    _var: pe("var"),
    _const: pe("const"),
    _while: pe("while", { isLoop: !0 }),
    _with: pe("with"),
    _new: pe("new", { beforeExpr: !0, startsExpr: !0 }),
    _this: pe("this", qe),
    _super: pe("super", qe),
    _class: pe("class", qe),
    _extends: pe("extends", He),
    _export: pe("export"),
    _import: pe("import", qe),
    _null: pe("null", qe),
    _true: pe("true", qe),
    _false: pe("false", qe),
    _in: pe("in", { beforeExpr: !0, binop: 7 }),
    _instanceof: pe("instanceof", { beforeExpr: !0, binop: 7 }),
    _typeof: pe("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: pe("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: pe("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  Xe = /\r\n?|\n|\u2028|\u2029/,
  Kt = new RegExp(Xe.source, "g");
function ri(e, i) {
  return e === 10 || e === 13 || (!i && (e === 8232 || e === 8233));
}
var Bn = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Qe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Mn = Object.prototype,
  Qa = Mn.hasOwnProperty,
  Xa = Mn.toString;
function wi(e, i) {
  return Qa.call(e, i);
}
var on =
  Array.isArray ||
  function (e) {
    return Xa.call(e) === "[object Array]";
  };
function St(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var $t = function (i, r) {
  (this.line = i), (this.column = r);
};
$t.prototype.offset = function (i) {
  return new $t(this.line, this.column + i);
};
var ki = function (i, r, s) {
  (this.start = r),
    (this.end = s),
    i.sourceFile !== null && (this.source = i.sourceFile);
};
function Dn(e, i) {
  for (var r = 1, s = 0; ; ) {
    Kt.lastIndex = s;
    var o = Kt.exec(e);
    if (o && o.index < i) ++r, (s = o.index + o[0].length);
    else return new $t(r, i - s);
  }
}
var tr = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function Ja(e) {
  var i = {};
  for (var r in tr) i[r] = e && wi(e, r) ? e[r] : tr[r];
  if (
    (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009),
    i.allowReserved == null && (i.allowReserved = i.ecmaVersion < 5),
    on(i.onToken))
  ) {
    var s = i.onToken;
    i.onToken = function (o) {
      return s.push(o);
    };
  }
  return on(i.onComment) && (i.onComment = Ka(i, i.onComment)), i;
}
function Ka(e, i) {
  return function (r, s, o, l, m, x) {
    var v = { type: r ? "Block" : "Line", value: s, start: o, end: l };
    e.locations && (v.loc = new ki(this, m, x)),
      e.ranges && (v.range = [o, l]),
      i.push(v);
  };
}
var Yt = 1,
  ni = 2,
  cr = Yt | ni,
  jn = 4,
  qn = 8,
  Un = 16,
  Gn = 32,
  Wn = 64,
  zn = 128;
function pr(e, i) {
  return ni | (e ? jn : 0) | (i ? qn : 0);
}
var un = 0,
  fr = 1,
  st = 2,
  Hn = 3,
  Qn = 4,
  Xn = 5,
  Te = function (i, r, s) {
    (this.options = i = Ja(i)),
      (this.sourceFile = i.sourceFile),
      (this.keywords = St(
        Ua[i.ecmaVersion >= 6 ? 6 : i.sourceType === "module" ? "5module" : 5]
      ));
    var o = "";
    if (i.allowReserved !== !0) {
      for (var l = i.ecmaVersion; !(o = $i[l]); l--);
      i.sourceType === "module" && (o += " await");
    }
    this.reservedWords = St(o);
    var m = (o ? o + " " : "") + $i.strict;
    (this.reservedWordsStrict = St(m)),
      (this.reservedWordsStrictBind = St(m + " " + $i.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      s
        ? ((this.pos = s),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              s - 1
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Xe).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = g.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = i.sourceType === "module"),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        i.allowHashBang &&
        this.input.slice(0, 2) === "#!" &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(Yt),
      (this.regexpState = null);
  },
  Ct = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
Te.prototype.parse = function () {
  var i = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(i);
};
Ct.inFunction.get = function () {
  return (this.currentVarScope().flags & ni) > 0;
};
Ct.inGenerator.get = function () {
  return (this.currentVarScope().flags & qn) > 0;
};
Ct.inAsync.get = function () {
  return (this.currentVarScope().flags & jn) > 0;
};
Ct.allowSuper.get = function () {
  return (this.currentThisScope().flags & Wn) > 0;
};
Ct.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & zn) > 0;
};
Ct.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Te.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & ni) > 0;
};
Te.extend = function () {
  for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
  for (var s = this, o = 0; o < i.length; o++) s = i[o](s);
  return s;
};
Te.parse = function (i, r) {
  return new this(r, i).parse();
};
Te.parseExpressionAt = function (i, r, s) {
  var o = new this(s, i, r);
  return o.nextToken(), o.parseExpression();
};
Te.tokenizer = function (i, r) {
  return new this(r, i);
};
Object.defineProperties(Te.prototype, Ct);
var Be = Te.prototype,
  $a = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Be.strictDirective = function (e) {
  for (;;) {
    (Qe.lastIndex = e), (e += Qe.exec(this.input)[0].length);
    var i = $a.exec(this.input.slice(e));
    if (!i) return !1;
    if ((i[1] || i[2]) === "use strict") {
      Qe.lastIndex = e + i[0].length;
      var r = Qe.exec(this.input),
        s = r.index + r[0].length,
        o = this.input.charAt(s);
      return (
        o === ";" ||
        o === "}" ||
        (Xe.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(o) ||
            (o === "!" && this.input.charAt(s + 1) === "=")
          ))
      );
    }
    (e += i[0].length),
      (Qe.lastIndex = e),
      (e += Qe.exec(this.input)[0].length),
      this.input[e] === ";" && e++;
  }
};
Be.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Be.isContextual = function (e) {
  return this.type === g.name && this.value === e && !this.containsEsc;
};
Be.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Be.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
Be.canInsertSemicolon = function () {
  return (
    this.type === g.eof ||
    this.type === g.braceR ||
    Xe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
Be.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
Be.semicolon = function () {
  !this.eat(g.semi) && !this.insertSemicolon() && this.unexpected();
};
Be.afterTrailingComma = function (e, i) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      i || this.next(),
      !0
    );
};
Be.expect = function (e) {
  this.eat(e) || this.unexpected();
};
Be.unexpected = function (e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Ai() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
Be.checkPatternErrors = function (e, i) {
  if (e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(
        e.trailingComma,
        "Comma is not permitted after the rest element"
      );
    var r = i ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Be.checkExpressionErrors = function (e, i) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    s = e.doubleProto;
  if (!i) return r >= 0 || s >= 0;
  r >= 0 &&
    this.raise(
      r,
      "Shorthand property assignments are valid only in destructuring patterns"
    ),
    s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
Be.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, "Yield expression cannot be a default value"),
    this.awaitPos &&
      this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Be.isSimpleAssignTarget = function (e) {
  return e.type === "ParenthesizedExpression"
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === "Identifier" || e.type === "MemberExpression";
};
var ie = Te.prototype;
ie.parseTopLevel = function (e) {
  var i = {};
  for (e.body || (e.body = []); this.type !== g.eof; ) {
    var r = this.parseStatement(null, !0, i);
    e.body.push(r);
  }
  if (this.inModule)
    for (
      var s = 0, o = Object.keys(this.undefinedExports);
      s < o.length;
      s += 1
    ) {
      var l = o[s];
      this.raiseRecoverable(
        this.undefinedExports[l].start,
        "Export '" + l + "' is not defined"
      );
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, "Program")
  );
};
var dr = { kind: "loop" },
  Ya = { kind: "switch" };
ie.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
  Qe.lastIndex = this.pos;
  var i = Qe.exec(this.input),
    r = this.pos + i[0].length,
    s = this.input.charCodeAt(r);
  if (s === 91) return !0;
  if (e) return !1;
  if (s === 123) return !0;
  if (dt(s, !0)) {
    for (var o = r + 1; Ft(this.input.charCodeAt(o), !0); ) ++o;
    var l = this.input.slice(r, o);
    if (!Ga.test(l)) return !0;
  }
  return !1;
};
ie.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
  Qe.lastIndex = this.pos;
  var e = Qe.exec(this.input),
    i = this.pos + e[0].length;
  return (
    !Xe.test(this.input.slice(this.pos, i)) &&
    this.input.slice(i, i + 8) === "function" &&
    (i + 8 === this.input.length || !Ft(this.input.charAt(i + 8)))
  );
};
ie.parseStatement = function (e, i, r) {
  var s = this.type,
    o = this.startNode(),
    l;
  switch ((this.isLet(e) && ((s = g._var), (l = "let")), s)) {
    case g._break:
    case g._continue:
      return this.parseBreakContinueStatement(o, s.keyword);
    case g._debugger:
      return this.parseDebuggerStatement(o);
    case g._do:
      return this.parseDoStatement(o);
    case g._for:
      return this.parseForStatement(o);
    case g._function:
      return (
        e &&
          (this.strict || (e !== "if" && e !== "label")) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(o, !1, !e)
      );
    case g._class:
      return e && this.unexpected(), this.parseClass(o, !0);
    case g._if:
      return this.parseIfStatement(o);
    case g._return:
      return this.parseReturnStatement(o);
    case g._switch:
      return this.parseSwitchStatement(o);
    case g._throw:
      return this.parseThrowStatement(o);
    case g._try:
      return this.parseTryStatement(o);
    case g._const:
    case g._var:
      return (
        (l = l || this.value),
        e && l !== "var" && this.unexpected(),
        this.parseVarStatement(o, l)
      );
    case g._while:
      return this.parseWhileStatement(o);
    case g._with:
      return this.parseWithStatement(o);
    case g.braceL:
      return this.parseBlock(!0, o);
    case g.semi:
      return this.parseEmptyStatement(o);
    case g._export:
    case g._import:
      if (this.options.ecmaVersion > 10 && s === g._import) {
        Qe.lastIndex = this.pos;
        var m = Qe.exec(this.input),
          x = this.pos + m[0].length,
          v = this.input.charCodeAt(x);
        if (v === 40 || v === 46)
          return this.parseExpressionStatement(o, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (i ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level"
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'"
            )),
        s === g._import ? this.parseImport(o) : this.parseExport(o, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          e && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(o, !0, !e)
        );
      var C = this.value,
        _ = this.parseExpression();
      return s === g.name && _.type === "Identifier" && this.eat(g.colon)
        ? this.parseLabeledStatement(o, C, _, e)
        : this.parseExpressionStatement(o, _);
  }
};
ie.parseBreakContinueStatement = function (e, i) {
  var r = i === "break";
  this.next(),
    this.eat(g.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== g.name
      ? this.unexpected()
      : ((e.label = this.parseIdent()), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var o = this.labels[s];
    if (
      (e.label == null || o.name === e.label.name) &&
      ((o.kind != null && (r || o.kind === "loop")) || (e.label && r))
    )
      break;
  }
  return (
    s === this.labels.length && this.raise(e.start, "Unsyntactic " + i),
    this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
  );
};
ie.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
ie.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(dr),
    (e.body = this.parseStatement("do")),
    this.labels.pop(),
    this.expect(g._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(g.semi) : this.semicolon(),
    this.finishNode(e, "DoWhileStatement")
  );
};
ie.parseForStatement = function (e) {
  this.next();
  var i =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual("await")
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(dr),
    this.enterScope(0),
    this.expect(g.parenL),
    this.type === g.semi)
  )
    return i > -1 && this.unexpected(i), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === g._var || this.type === g._const || r) {
    var s = this.startNode(),
      o = r ? "let" : this.value;
    return (
      this.next(),
      this.parseVar(s, !0, o),
      this.finishNode(s, "VariableDeclaration"),
      (this.type === g._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
      s.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === g._in
              ? i > -1 && this.unexpected(i)
              : (e.await = i > -1)),
          this.parseForIn(e, s))
        : (i > -1 && this.unexpected(i), this.parseFor(e, s))
    );
  }
  var l = new Ai(),
    m = this.parseExpression(!0, l);
  return this.type === g._in ||
    (this.options.ecmaVersion >= 6 && this.isContextual("of"))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === g._in
          ? i > -1 && this.unexpected(i)
          : (e.await = i > -1)),
      this.toAssignable(m, !1, l),
      this.checkLVal(m),
      this.parseForIn(e, m))
    : (this.checkExpressionErrors(l, !0),
      i > -1 && this.unexpected(i),
      this.parseFor(e, m));
};
ie.parseFunctionStatement = function (e, i, r) {
  return this.next(), this.parseFunction(e, Xt | (r ? 0 : ir), !1, i);
};
ie.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement("if")),
    (e.alternate = this.eat(g._else) ? this.parseStatement("if") : null),
    this.finishNode(e, "IfStatement")
  );
};
ie.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(g.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, "ReturnStatement")
  );
};
ie.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(g.braceL),
    this.labels.push(Ya),
    this.enterScope(0);
  for (var i, r = !1; this.type !== g.braceR; )
    if (this.type === g._case || this.type === g._default) {
      var s = this.type === g._case;
      i && this.finishNode(i, "SwitchCase"),
        e.cases.push((i = this.startNode())),
        (i.consequent = []),
        this.next(),
        s
          ? (i.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                "Multiple default clauses"
              ),
            (r = !0),
            (i.test = null)),
        this.expect(g.colon);
    } else i || this.unexpected(), i.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    i && this.finishNode(i, "SwitchCase"),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, "SwitchStatement")
  );
};
ie.parseThrowStatement = function (e) {
  return (
    this.next(),
    Xe.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, "Illegal newline after throw"),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, "ThrowStatement")
  );
};
var Za = [];
ie.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === g._catch)
  ) {
    var i = this.startNode();
    if ((this.next(), this.eat(g.parenL))) {
      i.param = this.parseBindingAtom();
      var r = i.param.type === "Identifier";
      this.enterScope(r ? Gn : 0),
        this.checkLVal(i.param, r ? Qn : st),
        this.expect(g.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (i.param = null),
        this.enterScope(0);
    (i.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(i, "CatchClause"));
  }
  return (
    (e.finalizer = this.eat(g._finally) ? this.parseBlock() : null),
    !e.handler &&
      !e.finalizer &&
      this.raise(e.start, "Missing catch or finally clause"),
    this.finishNode(e, "TryStatement")
  );
};
ie.parseVarStatement = function (e, i) {
  return (
    this.next(),
    this.parseVar(e, !1, i),
    this.semicolon(),
    this.finishNode(e, "VariableDeclaration")
  );
};
ie.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(dr),
    (e.body = this.parseStatement("while")),
    this.labels.pop(),
    this.finishNode(e, "WhileStatement")
  );
};
ie.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement("with")),
    this.finishNode(e, "WithStatement")
  );
};
ie.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
ie.parseLabeledStatement = function (e, i, r, s) {
  for (var o = 0, l = this.labels; o < l.length; o += 1) {
    var m = l[o];
    m.name === i &&
      this.raise(r.start, "Label '" + i + "' is already declared");
  }
  for (
    var x = this.type.isLoop
        ? "loop"
        : this.type === g._switch
        ? "switch"
        : null,
      v = this.labels.length - 1;
    v >= 0;
    v--
  ) {
    var C = this.labels[v];
    if (C.statementStart === e.start)
      (C.statementStart = this.start), (C.kind = x);
    else break;
  }
  return (
    this.labels.push({ name: i, kind: x, statementStart: this.start }),
    (e.body = this.parseStatement(
      s ? (s.indexOf("label") === -1 ? s + "label" : s) : "label"
    )),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, "LabeledStatement")
  );
};
ie.parseExpressionStatement = function (e, i) {
  return (
    (e.expression = i),
    this.semicolon(),
    this.finishNode(e, "ExpressionStatement")
  );
};
ie.parseBlock = function (e, i, r) {
  for (
    e === void 0 && (e = !0),
      i === void 0 && (i = this.startNode()),
      i.body = [],
      this.expect(g.braceL),
      e && this.enterScope(0);
    this.type !== g.braceR;

  ) {
    var s = this.parseStatement(null);
    i.body.push(s);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(i, "BlockStatement")
  );
};
ie.parseFor = function (e, i) {
  return (
    (e.init = i),
    this.expect(g.semi),
    (e.test = this.type === g.semi ? null : this.parseExpression()),
    this.expect(g.semi),
    (e.update = this.type === g.parenR ? null : this.parseExpression()),
    this.expect(g.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, "ForStatement")
  );
};
ie.parseForIn = function (e, i) {
  var r = this.type === g._in;
  return (
    this.next(),
    i.type === "VariableDeclaration" &&
    i.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      i.kind !== "var" ||
      i.declarations[0].id.type !== "Identifier")
      ? this.raise(
          i.start,
          (r ? "for-in" : "for-of") +
            " loop variable declaration may not have an initializer"
        )
      : i.type === "AssignmentPattern" &&
        this.raise(i.start, "Invalid left-hand side in for-loop"),
    (e.left = i),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(g.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
  );
};
ie.parseVar = function (e, i, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var s = this.startNode();
    if (
      (this.parseVarId(s, r),
      this.eat(g.eq)
        ? (s.init = this.parseMaybeAssign(i))
        : r === "const" &&
          !(
            this.type === g._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual("of"))
          )
        ? this.unexpected()
        : s.id.type !== "Identifier" &&
          !(i && (this.type === g._in || this.isContextual("of")))
        ? this.raise(
            this.lastTokEnd,
            "Complex binding patterns require an initialization value"
          )
        : (s.init = null),
      e.declarations.push(this.finishNode(s, "VariableDeclarator")),
      !this.eat(g.comma))
    )
      break;
  }
  return e;
};
ie.parseVarId = function (e, i) {
  (e.id = this.parseBindingAtom()),
    this.checkLVal(e.id, i === "var" ? fr : st, !1);
};
var Xt = 1,
  ir = 2,
  Jn = 4;
ie.parseFunction = function (e, i, r, s) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !s)) &&
      (this.type === g.star && i & ir && this.unexpected(),
      (e.generator = this.eat(g.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!s),
    i & Xt &&
      ((e.id = i & Jn && this.type !== g.name ? null : this.parseIdent()),
      e.id &&
        !(i & ir) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? fr
              : st
            : Hn
        ));
  var o = this.yieldPos,
    l = this.awaitPos,
    m = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(pr(e.async, e.generator)),
    i & Xt || (e.id = this.type === g.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = o),
    (this.awaitPos = l),
    (this.awaitIdentPos = m),
    this.finishNode(e, i & Xt ? "FunctionDeclaration" : "FunctionExpression")
  );
};
ie.parseFunctionParams = function (e) {
  this.expect(g.parenL),
    (e.params = this.parseBindingList(
      g.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams();
};
ie.parseClass = function (e, i) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, i), this.parseClassSuper(e);
  var s = this.startNode(),
    o = !1;
  for (s.body = [], this.expect(g.braceL); this.type !== g.braceR; ) {
    var l = this.parseClassElement(e.superClass !== null);
    l &&
      (s.body.push(l),
      l.type === "MethodDefinition" &&
        l.kind === "constructor" &&
        (o && this.raise(l.start, "Duplicate constructor in the same class"),
        (o = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(s, "ClassBody")),
    this.finishNode(e, i ? "ClassDeclaration" : "ClassExpression")
  );
};
ie.parseClassElement = function (e) {
  var i = this;
  if (this.eat(g.semi)) return null;
  var r = this.startNode(),
    s = function (v, C) {
      C === void 0 && (C = !1);
      var _ = i.start,
        A = i.startLoc;
      return i.eatContextual(v)
        ? i.type !== g.parenL && (!C || !i.canInsertSemicolon())
          ? !0
          : (r.key && i.unexpected(),
            (r.computed = !1),
            (r.key = i.startNodeAt(_, A)),
            (r.key.name = v),
            i.finishNode(r.key, "Identifier"),
            !1)
        : !1;
    };
  (r.kind = "method"), (r.static = s("static"));
  var o = this.eat(g.star),
    l = !1;
  o ||
    (this.options.ecmaVersion >= 8 && s("async", !0)
      ? ((l = !0), (o = this.options.ecmaVersion >= 9 && this.eat(g.star)))
      : s("get")
      ? (r.kind = "get")
      : s("set") && (r.kind = "set")),
    r.key || this.parsePropertyName(r);
  var m = r.key,
    x = !1;
  return (
    !r.computed &&
    !r.static &&
    ((m.type === "Identifier" && m.name === "constructor") ||
      (m.type === "Literal" && m.value === "constructor"))
      ? (r.kind !== "method" &&
          this.raise(m.start, "Constructor can't have get/set modifier"),
        o && this.raise(m.start, "Constructor can't be a generator"),
        l && this.raise(m.start, "Constructor can't be an async method"),
        (r.kind = "constructor"),
        (x = e))
      : r.static &&
        m.type === "Identifier" &&
        m.name === "prototype" &&
        this.raise(
          m.start,
          "Classes may not have a static property named prototype"
        ),
    this.parseClassMethod(r, o, l, x),
    r.kind === "get" &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, "getter should have no params"),
    r.kind === "set" &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(
        r.value.start,
        "setter should have exactly one param"
      ),
    r.kind === "set" &&
      r.value.params[0].type === "RestElement" &&
      this.raiseRecoverable(
        r.value.params[0].start,
        "Setter cannot use rest params"
      ),
    r
  );
};
ie.parseClassMethod = function (e, i, r, s) {
  return (
    (e.value = this.parseMethod(i, r, s)),
    this.finishNode(e, "MethodDefinition")
  );
};
ie.parseClassId = function (e, i) {
  this.type === g.name
    ? ((e.id = this.parseIdent()), i && this.checkLVal(e.id, st, !1))
    : (i === !0 && this.unexpected(), (e.id = null));
};
ie.parseClassSuper = function (e) {
  e.superClass = this.eat(g._extends) ? this.parseExprSubscripts() : null;
};
ie.parseExport = function (e, i) {
  if ((this.next(), this.eat(g.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(i, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual("from"),
      this.type !== g.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, "ExportAllDeclaration")
    );
  if (this.eat(g._default)) {
    this.checkExport(i, "default", this.lastTokStart);
    var r;
    if (this.type === g._function || (r = this.isAsyncFunction())) {
      var s = this.startNode();
      this.next(),
        r && this.next(),
        (e.declaration = this.parseFunction(s, Xt | Jn, !1, r));
    } else if (this.type === g._class) {
      var o = this.startNode();
      e.declaration = this.parseClass(o, "nullableID");
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === "VariableDeclaration"
        ? this.checkVariableExport(i, e.declaration.declarations)
        : this.checkExport(i, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(i)),
      this.eatContextual("from"))
    )
      this.type !== g.string && this.unexpected(),
        (e.source = this.parseExprAtom());
    else {
      for (var l = 0, m = e.specifiers; l < m.length; l += 1) {
        var x = m[l];
        this.checkUnreserved(x.local), this.checkLocalExport(x.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
ie.checkExport = function (e, i, r) {
  e &&
    (wi(e, i) && this.raiseRecoverable(r, "Duplicate export '" + i + "'"),
    (e[i] = !0));
};
ie.checkPatternExport = function (e, i) {
  var r = i.type;
  if (r === "Identifier") this.checkExport(e, i.name, i.start);
  else if (r === "ObjectPattern")
    for (var s = 0, o = i.properties; s < o.length; s += 1) {
      var l = o[s];
      this.checkPatternExport(e, l);
    }
  else if (r === "ArrayPattern")
    for (var m = 0, x = i.elements; m < x.length; m += 1) {
      var v = x[m];
      v && this.checkPatternExport(e, v);
    }
  else
    r === "Property"
      ? this.checkPatternExport(e, i.value)
      : r === "AssignmentPattern"
      ? this.checkPatternExport(e, i.left)
      : r === "RestElement"
      ? this.checkPatternExport(e, i.argument)
      : r === "ParenthesizedExpression" &&
        this.checkPatternExport(e, i.expression);
};
ie.checkVariableExport = function (e, i) {
  if (e)
    for (var r = 0, s = i; r < s.length; r += 1) {
      var o = s[r];
      this.checkPatternExport(e, o.id);
    }
};
ie.shouldParseExportStatement = function () {
  return (
    this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
ie.parseExportSpecifiers = function (e) {
  var i = [],
    r = !0;
  for (this.expect(g.braceL); !this.eat(g.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(g.comma), this.afterTrailingComma(g.braceR))) break;
    var s = this.startNode();
    (s.local = this.parseIdent(!0)),
      (s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local),
      this.checkExport(e, s.exported.name, s.exported.start),
      i.push(this.finishNode(s, "ExportSpecifier"));
  }
  return i;
};
ie.parseImport = function (e) {
  return (
    this.next(),
    this.type === g.string
      ? ((e.specifiers = Za), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual("from"),
        (e.source =
          this.type === g.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, "ImportDeclaration")
  );
};
ie.parseImportSpecifiers = function () {
  var e = [],
    i = !0;
  if (this.type === g.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, st),
      e.push(this.finishNode(r, "ImportDefaultSpecifier")),
      !this.eat(g.comma))
    )
      return e;
  }
  if (this.type === g.star) {
    var s = this.startNode();
    return (
      this.next(),
      this.expectContextual("as"),
      (s.local = this.parseIdent()),
      this.checkLVal(s.local, st),
      e.push(this.finishNode(s, "ImportNamespaceSpecifier")),
      e
    );
  }
  for (this.expect(g.braceL); !this.eat(g.braceR); ) {
    if (i) i = !1;
    else if ((this.expect(g.comma), this.afterTrailingComma(g.braceR))) break;
    var o = this.startNode();
    (o.imported = this.parseIdent(!0)),
      this.eatContextual("as")
        ? (o.local = this.parseIdent())
        : (this.checkUnreserved(o.imported), (o.local = o.imported)),
      this.checkLVal(o.local, st),
      e.push(this.finishNode(o, "ImportSpecifier"));
  }
  return e;
};
ie.adaptDirectivePrologue = function (e) {
  for (var i = 0; i < e.length && this.isDirectiveCandidate(e[i]); ++i)
    e[i].directive = e[i].expression.raw.slice(1, -1);
};
ie.isDirectiveCandidate = function (e) {
  return (
    e.type === "ExpressionStatement" &&
    e.expression.type === "Literal" &&
    typeof e.expression.value == "string" &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var at = Te.prototype;
at.toAssignable = function (e, i, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync &&
          e.name === "await" &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function"
          );
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        (e.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
        for (var s = 0, o = e.properties; s < o.length; s += 1) {
          var l = o[s];
          this.toAssignable(l, i),
            l.type === "RestElement" &&
              (l.argument.type === "ArrayPattern" ||
                l.argument.type === "ObjectPattern") &&
              this.raise(l.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter"
          ),
          this.toAssignable(e.value, i);
        break;
      case "ArrayExpression":
        (e.type = "ArrayPattern"),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, i);
        break;
      case "SpreadElement":
        (e.type = "RestElement"),
          this.toAssignable(e.argument, i),
          e.argument.type === "AssignmentPattern" &&
            this.raise(
              e.argument.start,
              "Rest elements cannot have a default value"
            );
        break;
      case "AssignmentExpression":
        e.operator !== "=" &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value."
          ),
          (e.type = "AssignmentPattern"),
          delete e.operator,
          this.toAssignable(e.left, i);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, i, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(
          e.start,
          "Optional chaining cannot appear in left-hand side"
        );
        break;
      case "MemberExpression":
        if (!i) break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
at.toAssignableList = function (e, i) {
  for (var r = e.length, s = 0; s < r; s++) {
    var o = e[s];
    o && this.toAssignable(o, i);
  }
  if (r) {
    var l = e[r - 1];
    this.options.ecmaVersion === 6 &&
      i &&
      l &&
      l.type === "RestElement" &&
      l.argument.type !== "Identifier" &&
      this.unexpected(l.argument.start);
  }
  return e;
};
at.parseSpread = function (e) {
  var i = this.startNode();
  return (
    this.next(),
    (i.argument = this.parseMaybeAssign(!1, e)),
    this.finishNode(i, "SpreadElement")
  );
};
at.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== g.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, "RestElement")
  );
};
at.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case g.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(g.bracketR, !0, !0)),
          this.finishNode(e, "ArrayPattern")
        );
      case g.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
at.parseBindingList = function (e, i, r) {
  for (var s = [], o = !0; !this.eat(e); )
    if ((o ? (o = !1) : this.expect(g.comma), i && this.type === g.comma))
      s.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === g.ellipsis) {
        var l = this.parseRestBinding();
        this.parseBindingListItem(l),
          s.push(l),
          this.type === g.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            ),
          this.expect(e);
        break;
      } else {
        var m = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(m), s.push(m);
      }
    }
  return s;
};
at.parseBindingListItem = function (e) {
  return e;
};
at.parseMaybeDefault = function (e, i, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(g.eq))
  )
    return r;
  var s = this.startNodeAt(e, i);
  return (
    (s.left = r),
    (s.right = this.parseMaybeAssign()),
    this.finishNode(s, "AssignmentPattern")
  );
};
at.checkLVal = function (e, i, r) {
  switch ((i === void 0 && (i = un), e.type)) {
    case "Identifier":
      i === st &&
        e.name === "let" &&
        this.raiseRecoverable(
          e.start,
          "let is disallowed as a lexically bound name"
        ),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (i ? "Binding " : "Assigning to ") + e.name + " in strict mode"
          ),
        r &&
          (wi(r, e.name) &&
            this.raiseRecoverable(e.start, "Argument name clash"),
          (r[e.name] = !0)),
        i !== un && i !== Xn && this.declareName(e.name, i, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(
        e.start,
        "Optional chaining cannot appear in left-hand side"
      );
      break;
    case "MemberExpression":
      i && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var s = 0, o = e.properties; s < o.length; s += 1) {
        var l = o[s];
        this.checkLVal(l, i, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, i, r);
      break;
    case "ArrayPattern":
      for (var m = 0, x = e.elements; m < x.length; m += 1) {
        var v = x[m];
        v && this.checkLVal(v, i, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, i, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, i, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, i, r);
      break;
    default:
      this.raise(e.start, (i ? "Binding" : "Assigning to") + " rvalue");
  }
};
var se = Te.prototype;
se.checkPropClash = function (e, i, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var s = e.key,
      o;
    switch (s.type) {
      case "Identifier":
        o = s.name;
        break;
      case "Literal":
        o = String(s.value);
        break;
      default:
        return;
    }
    var l = e.kind;
    if (this.options.ecmaVersion >= 6) {
      o === "__proto__" &&
        l === "init" &&
        (i.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = s.start)
            : this.raiseRecoverable(
                s.start,
                "Redefinition of __proto__ property"
              )),
        (i.proto = !0));
      return;
    }
    o = "$" + o;
    var m = i[o];
    if (m) {
      var x;
      l === "init"
        ? (x = (this.strict && m.init) || m.get || m.set)
        : (x = m.init || m[l]),
        x && this.raiseRecoverable(s.start, "Redefinition of property");
    } else m = i[o] = { init: !1, get: !1, set: !1 };
    m[l] = !0;
  }
};
se.parseExpression = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseMaybeAssign(e, i);
  if (this.type === g.comma) {
    var l = this.startNodeAt(r, s);
    for (l.expressions = [o]; this.eat(g.comma); )
      l.expressions.push(this.parseMaybeAssign(e, i));
    return this.finishNode(l, "SequenceExpression");
  }
  return o;
};
se.parseMaybeAssign = function (e, i, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var s = !1,
    o = -1,
    l = -1;
  i
    ? ((o = i.parenthesizedAssign),
      (l = i.trailingComma),
      (i.parenthesizedAssign = i.trailingComma = -1))
    : ((i = new Ai()), (s = !0));
  var m = this.start,
    x = this.startLoc;
  (this.type === g.parenL || this.type === g.name) &&
    (this.potentialArrowAt = this.start);
  var v = this.parseMaybeConditional(e, i);
  if ((r && (v = r.call(this, v, m, x)), this.type.isAssign)) {
    var C = this.startNodeAt(m, x);
    return (
      (C.operator = this.value),
      (C.left = this.type === g.eq ? this.toAssignable(v, !1, i) : v),
      s || (i.parenthesizedAssign = i.trailingComma = i.doubleProto = -1),
      i.shorthandAssign >= C.left.start && (i.shorthandAssign = -1),
      this.checkLVal(v),
      this.next(),
      (C.right = this.parseMaybeAssign(e)),
      this.finishNode(C, "AssignmentExpression")
    );
  } else s && this.checkExpressionErrors(i, !0);
  return (
    o > -1 && (i.parenthesizedAssign = o), l > -1 && (i.trailingComma = l), v
  );
};
se.parseMaybeConditional = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseExprOps(e, i);
  if (this.checkExpressionErrors(i)) return o;
  if (this.eat(g.question)) {
    var l = this.startNodeAt(r, s);
    return (
      (l.test = o),
      (l.consequent = this.parseMaybeAssign()),
      this.expect(g.colon),
      (l.alternate = this.parseMaybeAssign(e)),
      this.finishNode(l, "ConditionalExpression")
    );
  }
  return o;
};
se.parseExprOps = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseMaybeUnary(i, !1);
  return this.checkExpressionErrors(i) ||
    (o.start === r && o.type === "ArrowFunctionExpression")
    ? o
    : this.parseExprOp(o, r, s, -1, e);
};
se.parseExprOp = function (e, i, r, s, o) {
  var l = this.type.binop;
  if (l != null && (!o || this.type !== g._in) && l > s) {
    var m = this.type === g.logicalOR || this.type === g.logicalAND,
      x = this.type === g.coalesce;
    x && (l = g.logicalAND.binop);
    var v = this.value;
    this.next();
    var C = this.start,
      _ = this.startLoc,
      A = this.parseExprOp(this.parseMaybeUnary(null, !1), C, _, l, o),
      P = this.buildBinary(i, r, e, A, v, m || x);
    return (
      ((m && this.type === g.coalesce) ||
        (x && (this.type === g.logicalOR || this.type === g.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
        ),
      this.parseExprOp(P, i, r, s, o)
    );
  }
  return e;
};
se.buildBinary = function (e, i, r, s, o, l) {
  var m = this.startNodeAt(e, i);
  return (
    (m.left = r),
    (m.operator = o),
    (m.right = s),
    this.finishNode(m, l ? "LogicalExpression" : "BinaryExpression")
  );
};
se.parseMaybeUnary = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o;
  if (
    this.isContextual("await") &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (o = this.parseAwait()), (i = !0);
  else if (this.type.prefix) {
    var l = this.startNode(),
      m = this.type === g.incDec;
    (l.operator = this.value),
      (l.prefix = !0),
      this.next(),
      (l.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      m
        ? this.checkLVal(l.argument)
        : this.strict &&
          l.operator === "delete" &&
          l.argument.type === "Identifier"
        ? this.raiseRecoverable(
            l.start,
            "Deleting local variable in strict mode"
          )
        : (i = !0),
      (o = this.finishNode(l, m ? "UpdateExpression" : "UnaryExpression"));
  } else {
    if (((o = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
      return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var x = this.startNodeAt(r, s);
      (x.operator = this.value),
        (x.prefix = !1),
        (x.argument = o),
        this.checkLVal(o),
        this.next(),
        (o = this.finishNode(x, "UpdateExpression"));
    }
  }
  return !i && this.eat(g.starstar)
    ? this.buildBinary(r, s, o, this.parseMaybeUnary(null, !1), "**", !1)
    : o;
};
se.parseExprSubscripts = function (e) {
  var i = this.start,
    r = this.startLoc,
    s = this.parseExprAtom(e);
  if (
    s.type === "ArrowFunctionExpression" &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
  )
    return s;
  var o = this.parseSubscripts(s, i, r);
  return (
    e &&
      o.type === "MemberExpression" &&
      (e.parenthesizedAssign >= o.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= o.start && (e.parenthesizedBind = -1)),
    o
  );
};
se.parseSubscripts = function (e, i, r, s) {
  for (
    var o =
        this.options.ecmaVersion >= 8 &&
        e.type === "Identifier" &&
        e.name === "async" &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      l = !1;
    ;

  ) {
    var m = this.parseSubscript(e, i, r, s, o, l);
    if (
      (m.optional && (l = !0), m === e || m.type === "ArrowFunctionExpression")
    ) {
      if (l) {
        var x = this.startNodeAt(i, r);
        (x.expression = m), (m = this.finishNode(x, "ChainExpression"));
      }
      return m;
    }
    e = m;
  }
};
se.parseSubscript = function (e, i, r, s, o, l) {
  var m = this.options.ecmaVersion >= 11,
    x = m && this.eat(g.questionDot);
  s &&
    x &&
    this.raise(
      this.lastTokStart,
      "Optional chaining cannot appear in the callee of new expressions"
    );
  var v = this.eat(g.bracketL);
  if (
    v ||
    (x && this.type !== g.parenL && this.type !== g.backQuote) ||
    this.eat(g.dot)
  ) {
    var C = this.startNodeAt(i, r);
    (C.object = e),
      (C.property = v
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== "never")),
      (C.computed = !!v),
      v && this.expect(g.bracketR),
      m && (C.optional = x),
      (e = this.finishNode(C, "MemberExpression"));
  } else if (!s && this.eat(g.parenL)) {
    var _ = new Ai(),
      A = this.yieldPos,
      P = this.awaitPos,
      k = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var T = this.parseExprList(g.parenR, this.options.ecmaVersion >= 8, !1, _);
    if (o && !x && !this.canInsertSemicolon() && this.eat(g.arrow))
      return (
        this.checkPatternErrors(_, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function"
          ),
        (this.yieldPos = A),
        (this.awaitPos = P),
        (this.awaitIdentPos = k),
        this.parseArrowExpression(this.startNodeAt(i, r), T, !0)
      );
    this.checkExpressionErrors(_, !0),
      (this.yieldPos = A || this.yieldPos),
      (this.awaitPos = P || this.awaitPos),
      (this.awaitIdentPos = k || this.awaitIdentPos);
    var E = this.startNodeAt(i, r);
    (E.callee = e),
      (E.arguments = T),
      m && (E.optional = x),
      (e = this.finishNode(E, "CallExpression"));
  } else if (this.type === g.backQuote) {
    (x || l) &&
      this.raise(
        this.start,
        "Optional chaining cannot appear in the tag of tagged template expressions"
      );
    var O = this.startNodeAt(i, r);
    (O.tag = e),
      (O.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(O, "TaggedTemplateExpression"));
  }
  return e;
};
se.parseExprAtom = function (e) {
  this.type === g.slash && this.readRegexp();
  var i,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case g._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (i = this.startNode()),
        this.next(),
        this.type === g.parenL &&
          !this.allowDirectSuper &&
          this.raise(i.start, "super() call outside constructor of a subclass"),
        this.type !== g.dot &&
          this.type !== g.bracketL &&
          this.type !== g.parenL &&
          this.unexpected(),
        this.finishNode(i, "Super")
      );
    case g._this:
      return (
        (i = this.startNode()),
        this.next(),
        this.finishNode(i, "ThisExpression")
      );
    case g.name:
      var s = this.start,
        o = this.startLoc,
        l = this.containsEsc,
        m = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !l &&
        m.name === "async" &&
        !this.canInsertSemicolon() &&
        this.eat(g._function)
      )
        return this.parseFunction(this.startNodeAt(s, o), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(g.arrow))
          return this.parseArrowExpression(this.startNodeAt(s, o), [m], !1);
        if (
          this.options.ecmaVersion >= 8 &&
          m.name === "async" &&
          this.type === g.name &&
          !l
        )
          return (
            (m = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(g.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(s, o), [m], !0)
          );
      }
      return m;
    case g.regexp:
      var x = this.value;
      return (
        (i = this.parseLiteral(x.value)),
        (i.regex = { pattern: x.pattern, flags: x.flags }),
        i
      );
    case g.num:
    case g.string:
      return this.parseLiteral(this.value);
    case g._null:
    case g._true:
    case g._false:
      return (
        (i = this.startNode()),
        (i.value = this.type === g._null ? null : this.type === g._true),
        (i.raw = this.type.keyword),
        this.next(),
        this.finishNode(i, "Literal")
      );
    case g.parenL:
      var v = this.start,
        C = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(C) &&
            (e.parenthesizedAssign = v),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = v)),
        C
      );
    case g.bracketL:
      return (
        (i = this.startNode()),
        this.next(),
        (i.elements = this.parseExprList(g.bracketR, !0, !0, e)),
        this.finishNode(i, "ArrayExpression")
      );
    case g.braceL:
      return this.parseObj(!1, e);
    case g._function:
      return (i = this.startNode()), this.next(), this.parseFunction(i, 0);
    case g._class:
      return this.parseClass(this.startNode(), !1);
    case g._new:
      return this.parseNew();
    case g.backQuote:
      return this.parseTemplate();
    case g._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
se.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var i = this.parseIdent(!0);
  switch (this.type) {
    case g.parenL:
      return this.parseDynamicImport(e);
    case g.dot:
      return (e.meta = i), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
se.parseDynamicImport = function (e) {
  if (
    (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(g.parenR))
  ) {
    var i = this.start;
    this.eat(g.comma) && this.eat(g.parenR)
      ? this.raiseRecoverable(i, "Trailing comma is not allowed in import()")
      : this.unexpected(i);
  }
  return this.finishNode(e, "ImportExpression");
};
se.parseImportMeta = function (e) {
  this.next();
  var i = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== "meta" &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'"
      ),
    i &&
      this.raiseRecoverable(
        e.start,
        "'import.meta' must not contain escaped characters"
      ),
    this.options.sourceType !== "module" &&
      this.raiseRecoverable(
        e.start,
        "Cannot use 'import.meta' outside a module"
      ),
    this.finishNode(e, "MetaProperty")
  );
};
se.parseLiteral = function (e) {
  var i = this.startNode();
  return (
    (i.value = e),
    (i.raw = this.input.slice(this.start, this.end)),
    i.raw.charCodeAt(i.raw.length - 1) === 110 &&
      (i.bigint = i.raw.slice(0, -1).replace(/_/g, "")),
    this.next(),
    this.finishNode(i, "Literal")
  );
};
se.parseParenExpression = function () {
  this.expect(g.parenL);
  var e = this.parseExpression();
  return this.expect(g.parenR), e;
};
se.parseParenAndDistinguishExpression = function (e) {
  var i = this.start,
    r = this.startLoc,
    s,
    o = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var l = this.start,
      m = this.startLoc,
      x = [],
      v = !0,
      C = !1,
      _ = new Ai(),
      A = this.yieldPos,
      P = this.awaitPos,
      k;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== g.parenR; )
      if (
        (v ? (v = !1) : this.expect(g.comma),
        o && this.afterTrailingComma(g.parenR, !0))
      ) {
        C = !0;
        break;
      } else if (this.type === g.ellipsis) {
        (k = this.start),
          x.push(this.parseParenItem(this.parseRestBinding())),
          this.type === g.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            );
        break;
      } else x.push(this.parseMaybeAssign(!1, _, this.parseParenItem));
    var T = this.start,
      E = this.startLoc;
    if (
      (this.expect(g.parenR),
      e && !this.canInsertSemicolon() && this.eat(g.arrow))
    )
      return (
        this.checkPatternErrors(_, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = A),
        (this.awaitPos = P),
        this.parseParenArrowList(i, r, x)
      );
    (!x.length || C) && this.unexpected(this.lastTokStart),
      k && this.unexpected(k),
      this.checkExpressionErrors(_, !0),
      (this.yieldPos = A || this.yieldPos),
      (this.awaitPos = P || this.awaitPos),
      x.length > 1
        ? ((s = this.startNodeAt(l, m)),
          (s.expressions = x),
          this.finishNodeAt(s, "SequenceExpression", T, E))
        : (s = x[0]);
  } else s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var O = this.startNodeAt(i, r);
    return (O.expression = s), this.finishNode(O, "ParenthesizedExpression");
  } else return s;
};
se.parseParenItem = function (e) {
  return e;
};
se.parseParenArrowList = function (e, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, i), r);
};
var eo = [];
se.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(),
    i = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(g.dot)) {
    e.meta = i;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== "target" &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'"
        ),
      r &&
        this.raiseRecoverable(
          e.start,
          "'new.target' must not contain escaped characters"
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          "'new.target' can only be used in functions"
        ),
      this.finishNode(e, "MetaProperty")
    );
  }
  var s = this.start,
    o = this.startLoc,
    l = this.type === g._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), s, o, !0)),
    l &&
      e.callee.type === "ImportExpression" &&
      this.raise(s, "Cannot use new with import()"),
    this.eat(g.parenL)
      ? (e.arguments = this.parseExprList(
          g.parenR,
          this.options.ecmaVersion >= 8,
          !1
        ))
      : (e.arguments = eo),
    this.finishNode(e, "NewExpression")
  );
};
se.parseTemplateElement = function (e) {
  var i = e.isTagged,
    r = this.startNode();
  return (
    this.type === g.invalidTemplate
      ? (i ||
          this.raiseRecoverable(
            this.start,
            "Bad escape sequence in untagged template literal"
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === g.backQuote),
    this.finishNode(r, "TemplateElement")
  );
};
se.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var i = e.isTagged;
  i === void 0 && (i = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var s = this.parseTemplateElement({ isTagged: i });
  for (r.quasis = [s]; !s.tail; )
    this.type === g.eof &&
      this.raise(this.pos, "Unterminated template literal"),
      this.expect(g.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(g.braceR),
      r.quasis.push((s = this.parseTemplateElement({ isTagged: i })));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
se.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === "Identifier" &&
    e.key.name === "async" &&
    (this.type === g.name ||
      this.type === g.num ||
      this.type === g.string ||
      this.type === g.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === g.star)) &&
    !Xe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
se.parseObj = function (e, i) {
  var r = this.startNode(),
    s = !0,
    o = {};
  for (r.properties = [], this.next(); !this.eat(g.braceR); ) {
    if (s) s = !1;
    else if (
      (this.expect(g.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(g.braceR))
    )
      break;
    var l = this.parseProperty(e, i);
    e || this.checkPropClash(l, o, i), r.properties.push(l);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
se.parseProperty = function (e, i) {
  var r = this.startNode(),
    s,
    o,
    l,
    m;
  if (this.options.ecmaVersion >= 9 && this.eat(g.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === g.comma &&
          this.raise(
            this.start,
            "Comma is not permitted after the rest element"
          ),
        this.finishNode(r, "RestElement"))
      : (this.type === g.parenL &&
          i &&
          (i.parenthesizedAssign < 0 && (i.parenthesizedAssign = this.start),
          i.parenthesizedBind < 0 && (i.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, i)),
        this.type === g.comma &&
          i &&
          i.trailingComma < 0 &&
          (i.trailingComma = this.start),
        this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || i) && ((l = this.start), (m = this.startLoc)),
    e || (s = this.eat(g.star)));
  var x = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !x && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(r)
      ? ((o = !0),
        (s = this.options.ecmaVersion >= 9 && this.eat(g.star)),
        this.parsePropertyName(r, i))
      : (o = !1),
    this.parsePropertyValue(r, e, s, o, l, m, i, x),
    this.finishNode(r, "Property")
  );
};
se.parsePropertyValue = function (e, i, r, s, o, l, m, x) {
  if (
    ((r || s) && this.type === g.colon && this.unexpected(), this.eat(g.colon))
  )
    (e.value = i
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, m)),
      (e.kind = "init");
  else if (this.options.ecmaVersion >= 6 && this.type === g.parenL)
    i && this.unexpected(),
      (e.kind = "init"),
      (e.method = !0),
      (e.value = this.parseMethod(r, s));
  else if (
    !i &&
    !x &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === "Identifier" &&
    (e.key.name === "get" || e.key.name === "set") &&
    this.type !== g.comma &&
    this.type !== g.braceR &&
    this.type !== g.eq
  ) {
    (r || s) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var v = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== v) {
      var C = e.value.start;
      e.kind === "get"
        ? this.raiseRecoverable(C, "getter should have no params")
        : this.raiseRecoverable(C, "setter should have exactly one param");
    } else
      e.kind === "set" &&
        e.value.params[0].type === "RestElement" &&
        this.raiseRecoverable(
          e.value.params[0].start,
          "Setter cannot use rest params"
        );
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
      ? ((r || s) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === "await" &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = o),
        (e.kind = "init"),
        i
          ? (e.value = this.parseMaybeDefault(o, l, e.key))
          : this.type === g.eq && m
          ? (m.shorthandAssign < 0 && (m.shorthandAssign = this.start),
            (e.value = this.parseMaybeDefault(o, l, e.key)))
          : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
se.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(g.bracketL))
      return (
        (e.computed = !0),
        (e.key = this.parseMaybeAssign()),
        this.expect(g.bracketR),
        e.key
      );
    e.computed = !1;
  }
  return (e.key =
    this.type === g.num || this.type === g.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== "never"));
};
se.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
se.parseMethod = function (e, i, r) {
  var s = this.startNode(),
    o = this.yieldPos,
    l = this.awaitPos,
    m = this.awaitIdentPos;
  return (
    this.initFunction(s),
    this.options.ecmaVersion >= 6 && (s.generator = e),
    this.options.ecmaVersion >= 8 && (s.async = !!i),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(pr(i, s.generator) | Wn | (r ? zn : 0)),
    this.expect(g.parenL),
    (s.params = this.parseBindingList(
      g.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(s, !1, !0),
    (this.yieldPos = o),
    (this.awaitPos = l),
    (this.awaitIdentPos = m),
    this.finishNode(s, "FunctionExpression")
  );
};
se.parseArrowExpression = function (e, i, r) {
  var s = this.yieldPos,
    o = this.awaitPos,
    l = this.awaitIdentPos;
  return (
    this.enterScope(pr(r, !1) | Un),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(i, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = s),
    (this.awaitPos = o),
    (this.awaitIdentPos = l),
    this.finishNode(e, "ArrowFunctionExpression")
  );
};
se.parseFunctionBody = function (e, i, r) {
  var s = i && this.type !== g.braceL,
    o = this.strict,
    l = !1;
  if (s)
    (e.body = this.parseMaybeAssign()),
      (e.expression = !0),
      this.checkParams(e, !1);
  else {
    var m = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!o || m) &&
      ((l = this.strictDirective(this.end)),
      l &&
        m &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list"
        ));
    var x = this.labels;
    (this.labels = []),
      l && (this.strict = !0),
      this.checkParams(
        e,
        !o && !l && !i && !r && this.isSimpleParamList(e.params)
      ),
      this.strict && e.id && this.checkLVal(e.id, Xn),
      (e.body = this.parseBlock(!1, void 0, l && !o)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = x);
  }
  this.exitScope();
};
se.isSimpleParamList = function (e) {
  for (var i = 0, r = e; i < r.length; i += 1) {
    var s = r[i];
    if (s.type !== "Identifier") return !1;
  }
  return !0;
};
se.checkParams = function (e, i) {
  for (var r = {}, s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    this.checkLVal(l, fr, i ? null : r);
  }
};
se.parseExprList = function (e, i, r, s) {
  for (var o = [], l = !0; !this.eat(e); ) {
    if (l) l = !1;
    else if ((this.expect(g.comma), i && this.afterTrailingComma(e))) break;
    var m = void 0;
    r && this.type === g.comma
      ? (m = null)
      : this.type === g.ellipsis
      ? ((m = this.parseSpread(s)),
        s &&
          this.type === g.comma &&
          s.trailingComma < 0 &&
          (s.trailingComma = this.start))
      : (m = this.parseMaybeAssign(!1, s)),
      o.push(m);
  }
  return o;
};
se.checkUnreserved = function (e) {
  var i = e.start,
    r = e.end,
    s = e.name;
  if (
    (this.inGenerator &&
      s === "yield" &&
      this.raiseRecoverable(
        i,
        "Cannot use 'yield' as identifier inside a generator"
      ),
    this.inAsync &&
      s === "await" &&
      this.raiseRecoverable(
        i,
        "Cannot use 'await' as identifier inside an async function"
      ),
    this.keywords.test(s) && this.raise(i, "Unexpected keyword '" + s + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(i, r).indexOf("\\") !== -1
    ))
  ) {
    var o = this.strict ? this.reservedWordsStrict : this.reservedWords;
    o.test(s) &&
      (!this.inAsync &&
        s === "await" &&
        this.raiseRecoverable(
          i,
          "Cannot use keyword 'await' outside an async function"
        ),
      this.raiseRecoverable(i, "The keyword '" + s + "' is reserved"));
  }
};
se.parseIdent = function (e, i) {
  var r = this.startNode();
  return (
    this.type === g.name
      ? (r.name = this.value)
      : this.type.keyword
      ? ((r.name = this.type.keyword),
        (r.name === "class" || r.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 ||
            this.input.charCodeAt(this.lastTokStart) !== 46) &&
          this.context.pop())
      : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, "Identifier"),
    e ||
      (this.checkUnreserved(r),
      r.name === "await" &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
se.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var i = this.startNode();
  return (
    this.next(),
    this.type === g.semi ||
    this.canInsertSemicolon() ||
    (this.type !== g.star && !this.type.startsExpr)
      ? ((i.delegate = !1), (i.argument = null))
      : ((i.delegate = this.eat(g.star)),
        (i.argument = this.parseMaybeAssign(e))),
    this.finishNode(i, "YieldExpression")
  );
};
se.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, "AwaitExpression")
  );
};
var Si = Te.prototype;
Si.raise = function (e, i) {
  var r = Dn(this.input, e);
  i += " (" + r.line + ":" + r.column + ")";
  var s = new SyntaxError(i);
  throw ((s.pos = e), (s.loc = r), (s.raisedAt = this.pos), s);
};
Si.raiseRecoverable = Si.raise;
Si.curPosition = function () {
  if (this.options.locations)
    return new $t(this.curLine, this.pos - this.lineStart);
};
var gt = Te.prototype,
  to = function (i) {
    (this.flags = i),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []);
  };
gt.enterScope = function (e) {
  this.scopeStack.push(new to(e));
};
gt.exitScope = function () {
  this.scopeStack.pop();
};
gt.treatFunctionsAsVarInScope = function (e) {
  return e.flags & ni || (!this.inModule && e.flags & Yt);
};
gt.declareName = function (e, i, r) {
  var s = !1;
  if (i === st) {
    var o = this.currentScope();
    (s =
      o.lexical.indexOf(e) > -1 ||
      o.functions.indexOf(e) > -1 ||
      o.var.indexOf(e) > -1),
      o.lexical.push(e),
      this.inModule && o.flags & Yt && delete this.undefinedExports[e];
  } else if (i === Qn) {
    var l = this.currentScope();
    l.lexical.push(e);
  } else if (i === Hn) {
    var m = this.currentScope();
    this.treatFunctionsAsVar
      ? (s = m.lexical.indexOf(e) > -1)
      : (s = m.lexical.indexOf(e) > -1 || m.var.indexOf(e) > -1),
      m.functions.push(e);
  } else
    for (var x = this.scopeStack.length - 1; x >= 0; --x) {
      var v = this.scopeStack[x];
      if (
        (v.lexical.indexOf(e) > -1 && !(v.flags & Gn && v.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(v) && v.functions.indexOf(e) > -1)
      ) {
        s = !0;
        break;
      }
      if (
        (v.var.push(e),
        this.inModule && v.flags & Yt && delete this.undefinedExports[e],
        v.flags & cr)
      )
        break;
    }
  s &&
    this.raiseRecoverable(
      r,
      "Identifier '" + e + "' has already been declared"
    );
};
gt.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
gt.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
gt.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & cr) return i;
  }
};
gt.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & cr && !(i.flags & Un)) return i;
  }
};
var mr = function (i, r, s) {
    (this.type = ""),
      (this.start = r),
      (this.end = 0),
      i.options.locations && (this.loc = new ki(i, s)),
      i.options.directSourceFile &&
        (this.sourceFile = i.options.directSourceFile),
      i.options.ranges && (this.range = [r, 0]);
  },
  Ii = Te.prototype;
Ii.startNode = function () {
  return new mr(this, this.start, this.startLoc);
};
Ii.startNodeAt = function (e, i) {
  return new mr(this, e, i);
};
function Kn(e, i, r, s) {
  return (
    (e.type = i),
    (e.end = r),
    this.options.locations && (e.loc.end = s),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
Ii.finishNode = function (e, i) {
  return Kn.call(this, e, i, this.lastTokEnd, this.lastTokEndLoc);
};
Ii.finishNodeAt = function (e, i, r, s) {
  return Kn.call(this, e, i, r, s);
};
var $e = function (i, r, s, o, l) {
    (this.token = i),
      (this.isExpr = !!r),
      (this.preserveSpace = !!s),
      (this.override = o),
      (this.generator = !!l);
  },
  Ie = {
    b_stat: new $e("{", !1),
    b_expr: new $e("{", !0),
    b_tmpl: new $e("${", !1),
    p_stat: new $e("(", !1),
    p_expr: new $e("(", !0),
    q_tmpl: new $e("`", !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new $e("function", !1),
    f_expr: new $e("function", !0),
    f_expr_gen: new $e("function", !0, !1, null, !0),
    f_gen: new $e("function", !1, !1, null, !0),
  },
  Pi = Te.prototype;
Pi.initialContext = function () {
  return [Ie.b_stat];
};
Pi.braceIsBlock = function (e) {
  var i = this.curContext();
  return i === Ie.f_expr || i === Ie.f_stat
    ? !0
    : e === g.colon && (i === Ie.b_stat || i === Ie.b_expr)
    ? !i.isExpr
    : e === g._return || (e === g.name && this.exprAllowed)
    ? Xe.test(this.input.slice(this.lastTokEnd, this.start))
    : e === g._else ||
      e === g.semi ||
      e === g.eof ||
      e === g.parenR ||
      e === g.arrow
    ? !0
    : e === g.braceL
    ? i === Ie.b_stat
    : e === g._var || e === g._const || e === g.name
    ? !1
    : !this.exprAllowed;
};
Pi.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var i = this.context[e];
    if (i.token === "function") return i.generator;
  }
  return !1;
};
Pi.updateContext = function (e) {
  var i,
    r = this.type;
  r.keyword && e === g.dot
    ? (this.exprAllowed = !1)
    : (i = r.updateContext)
    ? i.call(this, e)
    : (this.exprAllowed = r.beforeExpr);
};
g.parenR.updateContext = g.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === Ie.b_stat &&
    this.curContext().token === "function" &&
    (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
g.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? Ie.b_stat : Ie.b_expr),
    (this.exprAllowed = !0);
};
g.dollarBraceL.updateContext = function () {
  this.context.push(Ie.b_tmpl), (this.exprAllowed = !0);
};
g.parenL.updateContext = function (e) {
  var i = e === g._if || e === g._for || e === g._with || e === g._while;
  this.context.push(i ? Ie.p_stat : Ie.p_expr), (this.exprAllowed = !0);
};
g.incDec.updateContext = function () {};
g._function.updateContext = g._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== g.semi &&
  e !== g._else &&
  !(
    e === g._return && Xe.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((e === g.colon || e === g.braceL) && this.curContext() === Ie.b_stat)
    ? this.context.push(Ie.f_expr)
    : this.context.push(Ie.f_stat),
    (this.exprAllowed = !1);
};
g.backQuote.updateContext = function () {
  this.curContext() === Ie.q_tmpl
    ? this.context.pop()
    : this.context.push(Ie.q_tmpl),
    (this.exprAllowed = !1);
};
g.star.updateContext = function (e) {
  if (e === g._function) {
    var i = this.context.length - 1;
    this.context[i] === Ie.f_expr
      ? (this.context[i] = Ie.f_expr_gen)
      : (this.context[i] = Ie.f_gen);
  }
  this.exprAllowed = !0;
};
g.name.updateContext = function (e) {
  var i = !1;
  this.options.ecmaVersion >= 6 &&
    e !== g.dot &&
    ((this.value === "of" && !this.exprAllowed) ||
      (this.value === "yield" && this.inGeneratorContext())) &&
    (i = !0),
    (this.exprAllowed = i);
};
var $n =
    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
  Yn = $n + " Extended_Pictographic",
  io = Yn,
  ro = { 9: $n, 10: Yn, 11: io },
  hn =
    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
  Zn =
    "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
  es =
    Zn +
    " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
  no =
    es +
    " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
  so = { 9: Zn, 10: es, 11: no },
  ts = {};
function gr(e) {
  var i = (ts[e] = {
    binary: St(ro[e] + " " + hn),
    nonBinary: { General_Category: St(hn), Script: St(so[e]) },
  });
  (i.nonBinary.Script_Extensions = i.nonBinary.Script),
    (i.nonBinary.gc = i.nonBinary.General_Category),
    (i.nonBinary.sc = i.nonBinary.Script),
    (i.nonBinary.scx = i.nonBinary.Script_Extensions);
}
gr(9);
gr(10);
gr(11);
var Z = Te.prototype,
  ot = function (i) {
    (this.parser = i),
      (this.validFlags =
        "gim" +
        (i.options.ecmaVersion >= 6 ? "uy" : "") +
        (i.options.ecmaVersion >= 9 ? "s" : "")),
      (this.unicodeProperties =
        ts[i.options.ecmaVersion >= 11 ? 11 : i.options.ecmaVersion]),
      (this.source = ""),
      (this.flags = ""),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ""),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
ot.prototype.reset = function (i, r, s) {
  var o = s.indexOf("u") !== -1;
  (this.start = i | 0),
    (this.source = r + ""),
    (this.flags = s),
    (this.switchU = o && this.parser.options.ecmaVersion >= 6),
    (this.switchN = o && this.parser.options.ecmaVersion >= 9);
};
ot.prototype.raise = function (i) {
  this.parser.raiseRecoverable(
    this.start,
    "Invalid regular expression: /" + this.source + "/: " + i
  );
};
ot.prototype.at = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    o = s.length;
  if (i >= o) return -1;
  var l = s.charCodeAt(i);
  if (!(r || this.switchU) || l <= 55295 || l >= 57344 || i + 1 >= o) return l;
  var m = s.charCodeAt(i + 1);
  return m >= 56320 && m <= 57343 ? (l << 10) + m - 56613888 : l;
};
ot.prototype.nextIndex = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    o = s.length;
  if (i >= o) return o;
  var l = s.charCodeAt(i),
    m;
  return !(r || this.switchU) ||
    l <= 55295 ||
    l >= 57344 ||
    i + 1 >= o ||
    (m = s.charCodeAt(i + 1)) < 56320 ||
    m > 57343
    ? i + 1
    : i + 2;
};
ot.prototype.current = function (i) {
  return i === void 0 && (i = !1), this.at(this.pos, i);
};
ot.prototype.lookahead = function (i) {
  return i === void 0 && (i = !1), this.at(this.nextIndex(this.pos, i), i);
};
ot.prototype.advance = function (i) {
  i === void 0 && (i = !1), (this.pos = this.nextIndex(this.pos, i));
};
ot.prototype.eat = function (i, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === i ? (this.advance(r), !0) : !1
  );
};
function _i(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
Z.validateRegExpFlags = function (e) {
  for (var i = e.validFlags, r = e.flags, s = 0; s < r.length; s++) {
    var o = r.charAt(s);
    i.indexOf(o) === -1 &&
      this.raise(e.start, "Invalid regular expression flag"),
      r.indexOf(o, s + 1) > -1 &&
        this.raise(e.start, "Duplicate regular expression flag");
  }
};
Z.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
Z.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ""),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
    e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var i = 0, r = e.backReferenceNames; i < r.length; i += 1) {
    var s = r[i];
    e.groupNames.indexOf(s) === -1 &&
      e.raise("Invalid named capture referenced");
  }
};
Z.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"),
    e.eat(123) && e.raise("Lone quantifier brackets");
};
Z.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
Z.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise("Invalid quantifier"),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
    ? (this.regexp_eatQuantifier(e), !0)
    : !1;
};
Z.regexp_eatAssertion = function (e) {
  var i = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = i;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
    )
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise("Unterminated group"),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = i), !1;
};
Z.regexp_eatQuantifier = function (e, i) {
  return (
    i === void 0 && (i = !1),
    this.regexp_eatQuantifierPrefix(e, i) ? (e.eat(63), !0) : !1
  );
};
Z.regexp_eatQuantifierPrefix = function (e, i) {
  return (
    e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, i)
  );
};
Z.regexp_eatBracedQuantifier = function (e, i) {
  var r = e.pos;
  if (e.eat(123)) {
    var s = 0,
      o = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((s = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (o = e.lastIntValue),
      e.eat(125))
    )
      return (
        o !== -1 &&
          o < s &&
          !i &&
          e.raise("numbers out of order in {} quantifier"),
        !0
      );
    e.switchU && !i && e.raise("Incomplete quantifier"), (e.pos = r);
  }
  return !1;
};
Z.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
Z.regexp_eatReverseSolidusAtomEscape = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatUncapturingGroup = function (e) {
  var i = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise("Unterminated group");
    }
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise("Invalid group"),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise("Unterminated group");
  }
  return !1;
};
Z.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
Z.regexp_eatInvalidBracedQuantifier = function (e) {
  return (
    this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1
  );
};
Z.regexp_eatSyntaxCharacter = function (e) {
  var i = e.current();
  return is(i) ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
function is(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
Z.regexp_eatPatternCharacters = function (e) {
  for (var i = e.pos, r = 0; (r = e.current()) !== -1 && !is(r); ) e.advance();
  return e.pos !== i;
};
Z.regexp_eatExtendedPatternCharacter = function (e) {
  var i = e.current();
  return i !== -1 &&
    i !== 36 &&
    !(i >= 40 && i <= 43) &&
    i !== 46 &&
    i !== 63 &&
    i !== 91 &&
    i !== 94 &&
    i !== 124
    ? (e.advance(), !0)
    : !1;
};
Z.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 &&
        e.raise("Duplicate capture group name"),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
Z.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ""), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
Z.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
    for (
      e.lastStringValue += _i(e.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(e);

    )
      e.lastStringValue += _i(e.lastIntValue);
    return !0;
  }
  return !1;
};
Z.regexp_eatRegExpIdentifierStart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    ao(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function ao(e) {
  return dt(e, !0) || e === 36 || e === 95;
}
Z.regexp_eatRegExpIdentifierPart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    oo(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function oo(e) {
  return Ft(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
Z.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise("Invalid unicode escape"),
        e.raise("Invalid escape")),
      !1);
};
Z.regexp_eatBackReference = function (e) {
  var i = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
Z.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
Z.regexp_eatCControlLetter = function (e) {
  var i = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = i;
  }
  return !1;
};
Z.regexp_eatZero = function (e) {
  return e.current() === 48 && !Ti(e.lookahead())
    ? ((e.lastIntValue = 0), e.advance(), !0)
    : !1;
};
Z.regexp_eatControlEscape = function (e) {
  var i = e.current();
  return i === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : i === 110
    ? ((e.lastIntValue = 10), e.advance(), !0)
    : i === 118
    ? ((e.lastIntValue = 11), e.advance(), !0)
    : i === 102
    ? ((e.lastIntValue = 12), e.advance(), !0)
    : i === 114
    ? ((e.lastIntValue = 13), e.advance(), !0)
    : !1;
};
Z.regexp_eatControlLetter = function (e) {
  var i = e.current();
  return rs(i) ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
function rs(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
Z.regexp_eatRegExpUnicodeEscapeSequence = function (e, i) {
  i === void 0 && (i = !1);
  var r = e.pos,
    s = i || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var o = e.lastIntValue;
      if (s && o >= 55296 && o <= 56319) {
        var l = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var m = e.lastIntValue;
          if (m >= 56320 && m <= 57343)
            return (
              (e.lastIntValue = (o - 55296) * 1024 + (m - 56320) + 65536), !0
            );
        }
        (e.pos = l), (e.lastIntValue = o);
      }
      return !0;
    }
    if (
      s &&
      e.eat(123) &&
      this.regexp_eatHexDigits(e) &&
      e.eat(125) &&
      uo(e.lastIntValue)
    )
      return !0;
    s && e.raise("Invalid unicode escape"), (e.pos = r);
  }
  return !1;
};
function uo(e) {
  return e >= 0 && e <= 1114111;
}
Z.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e)
      ? !0
      : e.eat(47)
      ? ((e.lastIntValue = 47), !0)
      : !1;
  var i = e.current();
  return i !== 99 && (!e.switchN || i !== 107)
    ? ((e.lastIntValue = i), e.advance(), !0)
    : !1;
};
Z.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var i = e.current();
  if (i >= 49 && i <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (i - 48)), e.advance();
    while ((i = e.current()) >= 48 && i <= 57);
    return !0;
  }
  return !1;
};
Z.regexp_eatCharacterClassEscape = function (e) {
  var i = e.current();
  if (ho(i)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (i === 80 || i === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(e) &&
        e.eat(125))
    )
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function ho(e) {
  return (
    e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
  );
}
Z.regexp_eatUnicodePropertyValueExpression = function (e) {
  var i = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, s), !0;
    }
  }
  if (((e.pos = i), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var o = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, o), !0;
  }
  return !1;
};
Z.regexp_validateUnicodePropertyNameAndValue = function (e, i, r) {
  wi(e.unicodeProperties.nonBinary, i) || e.raise("Invalid property name"),
    e.unicodeProperties.nonBinary[i].test(r) ||
      e.raise("Invalid property value");
};
Z.regexp_validateUnicodePropertyNameOrValue = function (e, i) {
  e.unicodeProperties.binary.test(i) || e.raise("Invalid property name");
};
Z.regexp_eatUnicodePropertyName = function (e) {
  var i = 0;
  for (e.lastStringValue = ""; ns((i = e.current())); )
    (e.lastStringValue += _i(i)), e.advance();
  return e.lastStringValue !== "";
};
function ns(e) {
  return rs(e) || e === 95;
}
Z.regexp_eatUnicodePropertyValue = function (e) {
  var i = 0;
  for (e.lastStringValue = ""; lo((i = e.current())); )
    (e.lastStringValue += _i(i)), e.advance();
  return e.lastStringValue !== "";
};
function lo(e) {
  return ns(e) || Ti(e);
}
Z.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
Z.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
Z.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var i = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (i === -1 || r === -1) && e.raise("Invalid character class"),
        i !== -1 &&
          r !== -1 &&
          i > r &&
          e.raise("Range out of order in character class");
    }
  }
};
Z.regexp_eatClassAtom = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || os(r)) && e.raise("Invalid class escape"),
        e.raise("Invalid escape");
    }
    e.pos = i;
  }
  var s = e.current();
  return s !== 93 ? ((e.lastIntValue = s), e.advance(), !0) : !1;
};
Z.regexp_eatClassEscape = function (e) {
  var i = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = i;
  }
  return (
    this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  );
};
Z.regexp_eatClassControlLetter = function (e) {
  var i = e.current();
  return Ti(i) || i === 95 ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
Z.regexp_eatHexEscapeSequence = function (e) {
  var i = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise("Invalid escape"), (e.pos = i);
  }
  return !1;
};
Z.regexp_eatDecimalDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Ti((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== i;
};
function Ti(e) {
  return e >= 48 && e <= 57;
}
Z.regexp_eatHexDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; ss((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + as(r)), e.advance();
  return e.pos !== i;
};
function ss(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function as(e) {
  return e >= 65 && e <= 70
    ? 10 + (e - 65)
    : e >= 97 && e <= 102
    ? 10 + (e - 97)
    : e - 48;
}
Z.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var i = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      i <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = i * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = i * 8 + r);
    } else e.lastIntValue = i;
    return !0;
  }
  return !1;
};
Z.regexp_eatOctalDigit = function (e) {
  var i = e.current();
  return os(i)
    ? ((e.lastIntValue = i - 48), e.advance(), !0)
    : ((e.lastIntValue = 0), !1);
};
function os(e) {
  return e >= 48 && e <= 55;
}
Z.regexp_eatFixedHexDigits = function (e, i) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < i; ++s) {
    var o = e.current();
    if (!ss(o)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + as(o)), e.advance();
  }
  return !0;
};
var xr = function (i) {
    (this.type = i.type),
      (this.value = i.value),
      (this.start = i.start),
      (this.end = i.end),
      i.options.locations && (this.loc = new ki(i, i.startLoc, i.endLoc)),
      i.options.ranges && (this.range = [i.start, i.end]);
  },
  ce = Te.prototype;
ce.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      "Escape sequence in keyword " + this.type.keyword
    ),
    this.options.onToken && this.options.onToken(new xr(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
ce.getToken = function () {
  return this.next(), new xr(this);
};
typeof Symbol < "u" &&
  (ce[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var i = e.getToken();
        return { done: i.type === g.eof, value: i };
      },
    };
  });
ce.curContext = function () {
  return this.context[this.context.length - 1];
};
ce.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(g.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
ce.readToken = function (e) {
  return dt(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
ce.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var i = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + i - 56613888;
};
ce.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    i = this.pos,
    r = this.input.indexOf("*/", (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, "Unterminated comment"),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Kt.lastIndex = i;
    for (var s; (s = Kt.exec(this.input)) && s.index < this.pos; )
      ++this.curLine, (this.lineStart = s.index + s[0].length);
  }
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(i + 2, r),
      i,
      this.pos,
      e,
      this.curPosition()
    );
};
ce.skipLineComment = function (e) {
  for (
    var i = this.pos,
      r = this.options.onComment && this.curPosition(),
      s = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !ri(s);

  )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(i + e, this.pos),
      i,
      this.pos,
      r,
      this.curPosition()
    );
};
ce.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && Bn.test(String.fromCharCode(e))))
          ++this.pos;
        else break e;
    }
  }
};
ce.finishToken = function (e, i) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = i), this.updateContext(r);
};
ce.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var i = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && i === 46
    ? ((this.pos += 3), this.finishToken(g.ellipsis))
    : (++this.pos, this.finishToken(g.dot));
};
ce.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(g.slash, 1);
};
ce.readToken_mult_modulo_exp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1,
    s = e === 42 ? g.star : g.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      i === 42 &&
      (++r, (s = g.starstar), (i = this.input.charCodeAt(this.pos + 2))),
    i === 61 ? this.finishOp(g.assign, r + 1) : this.finishOp(s, r)
  );
};
ce.readToken_pipe_amp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  if (i === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(g.assign, 3);
    }
    return this.finishOp(e === 124 ? g.logicalOR : g.logicalAND, 2);
  }
  return i === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(e === 124 ? g.bitwiseOR : g.bitwiseAND, 1);
};
ce.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(g.assign, 2) : this.finishOp(g.bitwiseXOR, 1);
};
ce.readToken_plus_min = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === e
    ? i === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        Xe.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(g.incDec, 2)
    : i === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(g.plusMin, 1);
};
ce.readToken_lt_gt = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return i === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(g.assign, r + 1)
        : this.finishOp(g.bitShift, r))
    : i === 33 &&
      e === 60 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45
    ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    : (i === 61 && (r = 2), this.finishOp(g.relational, r));
};
ce.readToken_eq_excl = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === 61
    ? this.finishOp(
        g.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
      )
    : e === 61 && i === 62 && this.options.ecmaVersion >= 6
    ? ((this.pos += 2), this.finishToken(g.arrow))
    : this.finishOp(e === 61 ? g.eq : g.prefix, 1);
};
ce.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var i = this.input.charCodeAt(this.pos + 1);
    if (i === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(g.questionDot, 2);
    }
    if (i === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61) return this.finishOp(g.assign, 3);
      }
      return this.finishOp(g.coalesce, 2);
    }
  }
  return this.finishOp(g.question, 1);
};
ce.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(g.parenL);
    case 41:
      return ++this.pos, this.finishToken(g.parenR);
    case 59:
      return ++this.pos, this.finishToken(g.semi);
    case 44:
      return ++this.pos, this.finishToken(g.comma);
    case 91:
      return ++this.pos, this.finishToken(g.bracketL);
    case 93:
      return ++this.pos, this.finishToken(g.bracketR);
    case 123:
      return ++this.pos, this.finishToken(g.braceL);
    case 125:
      return ++this.pos, this.finishToken(g.braceR);
    case 58:
      return ++this.pos, this.finishToken(g.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(g.backQuote);
    case 48:
      var i = this.input.charCodeAt(this.pos + 1);
      if (i === 120 || i === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (i === 111 || i === 79) return this.readRadixNumber(8);
        if (i === 98 || i === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(g.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + vr(e) + "'");
};
ce.finishOp = function (e, i) {
  var r = this.input.slice(this.pos, this.pos + i);
  return (this.pos += i), this.finishToken(e, r);
};
ce.readRegexp = function () {
  for (var e, i, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if ((Xe.test(s) && this.raise(r, "Unterminated regular expression"), e))
      e = !1;
    else {
      if (s === "[") i = !0;
      else if (s === "]" && i) i = !1;
      else if (s === "/" && !i) break;
      e = s === "\\";
    }
    ++this.pos;
  }
  var o = this.input.slice(r, this.pos);
  ++this.pos;
  var l = this.pos,
    m = this.readWord1();
  this.containsEsc && this.unexpected(l);
  var x = this.regexpState || (this.regexpState = new ot(this));
  x.reset(r, o, m), this.validateRegExpFlags(x), this.validateRegExpPattern(x);
  var v = null;
  try {
    v = new RegExp(o, m);
  } catch {}
  return this.finishToken(g.regexp, { pattern: o, flags: m, value: v });
};
ce.readInt = function (e, i, r) {
  for (
    var s = this.options.ecmaVersion >= 12 && i === void 0,
      o = r && this.input.charCodeAt(this.pos) === 48,
      l = this.pos,
      m = 0,
      x = 0,
      v = 0,
      C = i ?? 1 / 0;
    v < C;
    ++v, ++this.pos
  ) {
    var _ = this.input.charCodeAt(this.pos),
      A = void 0;
    if (s && _ === 95) {
      o &&
        this.raiseRecoverable(
          this.pos,
          "Numeric separator is not allowed in legacy octal numeric literals"
        ),
        x === 95 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator must be exactly one underscore"
          ),
        v === 0 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator is not allowed at the first of digits"
          ),
        (x = _);
      continue;
    }
    if (
      (_ >= 97
        ? (A = _ - 97 + 10)
        : _ >= 65
        ? (A = _ - 65 + 10)
        : _ >= 48 && _ <= 57
        ? (A = _ - 48)
        : (A = 1 / 0),
      A >= e)
    )
      break;
    (x = _), (m = m * e + A);
  }
  return (
    s &&
      x === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        "Numeric separator is not allowed at the last of digits"
      ),
    this.pos === l || (i != null && this.pos - l !== i) ? null : m
  );
};
function co(e, i) {
  return i ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function us(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
ce.readRadixNumber = function (e) {
  var i = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, "Expected number in radix " + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = us(this.input.slice(i, this.pos))), ++this.pos)
      : dt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
    this.finishToken(g.num, r)
  );
};
ce.readNumber = function (e) {
  var i = this.pos;
  !e &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(i, "Invalid number");
  var r = this.pos - i >= 2 && this.input.charCodeAt(i) === 48;
  r && this.strict && this.raise(i, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var o = us(this.input.slice(i, this.pos));
    return (
      ++this.pos,
      dt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
      this.finishToken(g.num, o)
    );
  }
  r && /[89]/.test(this.input.slice(i, this.pos)) && (r = !1),
    s === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (s = this.input.charCodeAt(this.pos))),
    (s === 69 || s === 101) &&
      !r &&
      ((s = this.input.charCodeAt(++this.pos)),
      (s === 43 || s === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(i, "Invalid number")),
    dt(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, "Identifier directly after number");
  var l = co(this.input.slice(i, this.pos), r);
  return this.finishToken(g.num, l);
};
ce.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    i;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (i = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
      ++this.pos,
      i > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else i = this.readHexChar(4);
  return i;
};
function vr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
ce.readString = function (e) {
  for (var i = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === e) break;
    s === 92
      ? ((i += this.input.slice(r, this.pos)),
        (i += this.readEscapedChar(!1)),
        (r = this.pos))
      : (ri(s, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, "Unterminated string constant"),
        ++this.pos);
  }
  return (i += this.input.slice(r, this.pos++)), this.finishToken(g.string, i);
};
var hs = {};
ce.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === hs) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
ce.invalidStringToken = function (e, i) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw hs;
  this.raise(e, i);
};
ce.readTmplToken = function () {
  for (var e = "", i = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === g.template || this.type === g.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(g.dollarBraceL))
          : (++this.pos, this.finishToken(g.backQuote))
        : ((e += this.input.slice(i, this.pos)),
          this.finishToken(g.template, e));
    if (r === 92)
      (e += this.input.slice(i, this.pos)),
        (e += this.readEscapedChar(!0)),
        (i = this.pos);
    else if (ri(r)) {
      switch (((e += this.input.slice(i, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (i = this.pos);
    } else ++this.pos;
  }
};
ce.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(
          g.invalidTemplate,
          this.input.slice(this.start, this.pos)
        );
    }
  this.raise(this.start, "Unterminated template");
};
ce.readEscapedChar = function (e) {
  var i = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, i)) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return vr(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ""
      );
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            "Invalid escape sequence in template string"
          ),
          null
        );
      }
    default:
      if (i >= 48 && i <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          o = parseInt(s, 8);
        return (
          o > 255 && ((s = s.slice(0, -1)), (o = parseInt(s, 8))),
          (this.pos += s.length - 1),
          (i = this.input.charCodeAt(this.pos)),
          (s !== "0" || i === 56 || i === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - s.length,
              e
                ? "Octal literal in template string"
                : "Octal literal in strict mode"
            ),
          String.fromCharCode(o)
        );
      }
      return ri(i) ? "" : String.fromCharCode(i);
  }
};
ce.readHexChar = function (e) {
  var i = this.pos,
    r = this.readInt(16, e);
  return (
    r === null && this.invalidStringToken(i, "Bad character escape sequence"), r
  );
};
ce.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = "", i = !0, r = this.pos, s = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var o = this.fullCharCodeAtPos();
    if (Ft(o, s)) this.pos += o <= 65535 ? 1 : 2;
    else if (o === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var l = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          "Expecting Unicode escape sequence \\uXXXX"
        ),
        ++this.pos;
      var m = this.readCodePoint();
      (i ? dt : Ft)(m, s) ||
        this.invalidStringToken(l, "Invalid Unicode escape"),
        (e += vr(m)),
        (r = this.pos);
    } else break;
    i = !1;
  }
  return e + this.input.slice(r, this.pos);
};
ce.readWord = function () {
  var e = this.readWord1(),
    i = g.name;
  return this.keywords.test(e) && (i = lr[e]), this.finishToken(i, e);
};
var po = "7.4.1";
Te.acorn = {
  Parser: Te,
  version: po,
  defaultOptions: tr,
  Position: $t,
  SourceLocation: ki,
  getLineInfo: Dn,
  Node: mr,
  TokenType: me,
  tokTypes: g,
  keywordTypes: lr,
  TokContext: $e,
  tokContexts: Ie,
  isIdentifierChar: Ft,
  isIdentifierStart: dt,
  Token: xr,
  isNewLine: ri,
  lineBreak: Xe,
  lineBreakG: Kt,
  nonASCIIwhitespace: Bn,
};
var ls = { exports: {} },
  fo = {
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦",
  },
  vi = { exports: {} },
  ln;
function cn() {
  return (
    ln ||
      ((ln = 1),
      (function (e, i) {
        (function (r, s) {
          s(i);
        })(Vt, function (r) {
          var s = [
              509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0,
              166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54,
              14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9,
              6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158,
              11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4,
              193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16,
              16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1,
              3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3,
              9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5,
              4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10,
              1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39,
              4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1,
              4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418,
              49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3,
              6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13,
              983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
            ],
            o = [
              0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28,
              4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157,
              19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2,
              14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5,
              3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11,
              21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4,
              28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50,
              14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47,
              20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3,
              0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1,
              64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
              2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21,
              1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38,
              6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0,
              95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20,
              0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22,
              0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125,
              0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026,
              582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6,
              18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9,
              1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15,
              3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3,
              0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27,
              2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30,
              2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61,
              147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2,
              1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0,
              2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0,
              3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3,
              2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7,
              221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191,
            ],
            l =
              "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･",
            m =
              "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            x = {
              3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
              5: "class enum extends super const export import",
              6: "enum",
              strict:
                "implements interface let package private protected public static yield",
              strictBind: "eval arguments",
            },
            v =
              "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            C = {
              5: v,
              "5module": v + " export import",
              6: v + " const class extends export import super",
            },
            _ = /^in(stanceof)?$/,
            A = new RegExp("[" + m + "]"),
            P = new RegExp("[" + m + l + "]");
          function k(t, n) {
            for (var h = 65536, p = 0; p < n.length; p += 2) {
              if (((h += n[p]), h > t)) return !1;
              if (((h += n[p + 1]), h >= t)) return !0;
            }
            return !1;
          }
          function T(t, n) {
            return t < 65
              ? t === 36
              : t < 91
              ? !0
              : t < 97
              ? t === 95
              : t < 123
              ? !0
              : t <= 65535
              ? t >= 170 && A.test(String.fromCharCode(t))
              : n === !1
              ? !1
              : k(t, o);
          }
          function E(t, n) {
            return t < 48
              ? t === 36
              : t < 58
              ? !0
              : t < 65
              ? !1
              : t < 91
              ? !0
              : t < 97
              ? t === 95
              : t < 123
              ? !0
              : t <= 65535
              ? t >= 170 && P.test(String.fromCharCode(t))
              : n === !1
              ? !1
              : k(t, o) || k(t, s);
          }
          var O = function (n, h) {
            h === void 0 && (h = {}),
              (this.label = n),
              (this.keyword = h.keyword),
              (this.beforeExpr = !!h.beforeExpr),
              (this.startsExpr = !!h.startsExpr),
              (this.isLoop = !!h.isLoop),
              (this.isAssign = !!h.isAssign),
              (this.prefix = !!h.prefix),
              (this.postfix = !!h.postfix),
              (this.binop = h.binop || null),
              (this.updateContext = null);
          };
          function D(t, n) {
            return new O(t, { beforeExpr: !0, binop: n });
          }
          var M = { beforeExpr: !0 },
            G = { startsExpr: !0 },
            N = {};
          function y(t, n) {
            return (
              n === void 0 && (n = {}), (n.keyword = t), (N[t] = new O(t, n))
            );
          }
          var u = {
              num: new O("num", G),
              regexp: new O("regexp", G),
              string: new O("string", G),
              name: new O("name", G),
              privateId: new O("privateId", G),
              eof: new O("eof"),
              bracketL: new O("[", { beforeExpr: !0, startsExpr: !0 }),
              bracketR: new O("]"),
              braceL: new O("{", { beforeExpr: !0, startsExpr: !0 }),
              braceR: new O("}"),
              parenL: new O("(", { beforeExpr: !0, startsExpr: !0 }),
              parenR: new O(")"),
              comma: new O(",", M),
              semi: new O(";", M),
              colon: new O(":", M),
              dot: new O("."),
              question: new O("?", M),
              questionDot: new O("?."),
              arrow: new O("=>", M),
              template: new O("template"),
              invalidTemplate: new O("invalidTemplate"),
              ellipsis: new O("...", M),
              backQuote: new O("`", G),
              dollarBraceL: new O("${", { beforeExpr: !0, startsExpr: !0 }),
              eq: new O("=", { beforeExpr: !0, isAssign: !0 }),
              assign: new O("_=", { beforeExpr: !0, isAssign: !0 }),
              incDec: new O("++/--", {
                prefix: !0,
                postfix: !0,
                startsExpr: !0,
              }),
              prefix: new O("!/~", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              logicalOR: D("||", 1),
              logicalAND: D("&&", 2),
              bitwiseOR: D("|", 3),
              bitwiseXOR: D("^", 4),
              bitwiseAND: D("&", 5),
              equality: D("==/!=/===/!==", 6),
              relational: D("</>/<=/>=", 7),
              bitShift: D("<</>>/>>>", 8),
              plusMin: new O("+/-", {
                beforeExpr: !0,
                binop: 9,
                prefix: !0,
                startsExpr: !0,
              }),
              modulo: D("%", 10),
              star: D("*", 10),
              slash: D("/", 10),
              starstar: new O("**", { beforeExpr: !0 }),
              coalesce: D("??", 1),
              _break: y("break"),
              _case: y("case", M),
              _catch: y("catch"),
              _continue: y("continue"),
              _debugger: y("debugger"),
              _default: y("default", M),
              _do: y("do", { isLoop: !0, beforeExpr: !0 }),
              _else: y("else", M),
              _finally: y("finally"),
              _for: y("for", { isLoop: !0 }),
              _function: y("function", G),
              _if: y("if"),
              _return: y("return", M),
              _switch: y("switch"),
              _throw: y("throw", M),
              _try: y("try"),
              _var: y("var"),
              _const: y("const"),
              _while: y("while", { isLoop: !0 }),
              _with: y("with"),
              _new: y("new", { beforeExpr: !0, startsExpr: !0 }),
              _this: y("this", G),
              _super: y("super", G),
              _class: y("class", G),
              _extends: y("extends", M),
              _export: y("export"),
              _import: y("import", G),
              _null: y("null", G),
              _true: y("true", G),
              _false: y("false", G),
              _in: y("in", { beforeExpr: !0, binop: 7 }),
              _instanceof: y("instanceof", { beforeExpr: !0, binop: 7 }),
              _typeof: y("typeof", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              _void: y("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _delete: y("delete", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
            },
            w = /\r\n?|\n|\u2028|\u2029/,
            V = new RegExp(w.source, "g");
          function H(t) {
            return t === 10 || t === 13 || t === 8232 || t === 8233;
          }
          function z(t, n, h) {
            h === void 0 && (h = t.length);
            for (var p = n; p < h; p++) {
              var S = t.charCodeAt(p);
              if (H(S))
                return p < h - 1 && S === 13 && t.charCodeAt(p + 1) === 10
                  ? p + 2
                  : p + 1;
            }
            return -1;
          }
          var te = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            K = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            X = Object.prototype,
            he = X.hasOwnProperty,
            Ce = X.toString,
            Se =
              Object.hasOwn ||
              function (t, n) {
                return he.call(t, n);
              },
            ye =
              Array.isArray ||
              function (t) {
                return Ce.call(t) === "[object Array]";
              },
            oe = Object.create(null);
          function Ae(t) {
            return (
              oe[t] ||
              (oe[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"))
            );
          }
          function Le(t) {
            return t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
          }
          var ut =
              /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
            W = function (n, h) {
              (this.line = n), (this.column = h);
            };
          W.prototype.offset = function (n) {
            return new W(this.line, this.column + n);
          };
          var Me = function (n, h, p) {
            (this.start = h),
              (this.end = p),
              n.sourceFile !== null && (this.source = n.sourceFile);
          };
          function ht(t, n) {
            for (var h = 1, p = 0; ; ) {
              var S = z(t, p, n);
              if (S < 0) return new W(h, n - p);
              ++h, (p = S);
            }
          }
          var De = {
              ecmaVersion: null,
              sourceType: "script",
              onInsertedSemicolon: null,
              onTrailingComma: null,
              allowReserved: null,
              allowReturnOutsideFunction: !1,
              allowImportExportEverywhere: !1,
              allowAwaitOutsideFunction: null,
              allowSuperOutsideMethod: null,
              allowHashBang: !1,
              checkPrivateFields: !0,
              locations: !1,
              onToken: null,
              onComment: null,
              ranges: !1,
              program: null,
              sourceFile: null,
              directSourceFile: null,
              preserveParens: !1,
            },
            ge = !1;
          function Ue(t) {
            var n = {};
            for (var h in De) n[h] = t && Se(t, h) ? t[h] : De[h];
            if (
              (n.ecmaVersion === "latest"
                ? (n.ecmaVersion = 1e8)
                : n.ecmaVersion == null
                ? (!ge &&
                    typeof console == "object" &&
                    console.warn &&
                    ((ge = !0),
                    console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)),
                  (n.ecmaVersion = 11))
                : n.ecmaVersion >= 2015 && (n.ecmaVersion -= 2009),
              n.allowReserved == null && (n.allowReserved = n.ecmaVersion < 5),
              (!t || t.allowHashBang == null) &&
                (n.allowHashBang = n.ecmaVersion >= 14),
              ye(n.onToken))
            ) {
              var p = n.onToken;
              n.onToken = function (S) {
                return p.push(S);
              };
            }
            return ye(n.onComment) && (n.onComment = wt(n, n.onComment)), n;
          }
          function wt(t, n) {
            return function (h, p, S, I, L, j) {
              var U = {
                type: h ? "Block" : "Line",
                value: p,
                start: S,
                end: I,
              };
              t.locations && (U.loc = new Me(this, L, j)),
                t.ranges && (U.range = [S, I]),
                n.push(U);
            };
          }
          var xt = 1,
            lt = 2,
            kt = 4,
            Ye = 8,
            oi = 16,
            Pe = 32,
            At = 64,
            vt = 128,
            yt = 256,
            It = xt | lt | yt;
          function jt(t, n) {
            return lt | (t ? kt : 0) | (n ? Ye : 0);
          }
          var Pt = 0,
            qt = 1,
            Ke = 2,
            ui = 3,
            Ut = 4,
            fe = 5,
            re = function (n, h, p) {
              (this.options = n = Ue(n)),
                (this.sourceFile = n.sourceFile),
                (this.keywords = Ae(
                  C[
                    n.ecmaVersion >= 6
                      ? 6
                      : n.sourceType === "module"
                      ? "5module"
                      : 5
                  ]
                ));
              var S = "";
              n.allowReserved !== !0 &&
                ((S = x[n.ecmaVersion >= 6 ? 6 : n.ecmaVersion === 5 ? 5 : 3]),
                n.sourceType === "module" && (S += " await")),
                (this.reservedWords = Ae(S));
              var I = (S ? S + " " : "") + x.strict;
              (this.reservedWordsStrict = Ae(I)),
                (this.reservedWordsStrictBind = Ae(I + " " + x.strictBind)),
                (this.input = String(h)),
                (this.containsEsc = !1),
                p
                  ? ((this.pos = p),
                    (this.lineStart =
                      this.input.lastIndexOf(
                        `
`,
                        p - 1
                      ) + 1),
                    (this.curLine = this.input
                      .slice(0, this.lineStart)
                      .split(w).length))
                  : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                (this.type = u.eof),
                (this.value = null),
                (this.start = this.end = this.pos),
                (this.startLoc = this.endLoc = this.curPosition()),
                (this.lastTokEndLoc = this.lastTokStartLoc = null),
                (this.lastTokStart = this.lastTokEnd = this.pos),
                (this.context = this.initialContext()),
                (this.exprAllowed = !0),
                (this.inModule = n.sourceType === "module"),
                (this.strict = this.inModule || this.strictDirective(this.pos)),
                (this.potentialArrowAt = -1),
                (this.potentialArrowInForAwait = !1),
                (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                (this.labels = []),
                (this.undefinedExports = Object.create(null)),
                this.pos === 0 &&
                  n.allowHashBang &&
                  this.input.slice(0, 2) === "#!" &&
                  this.skipLineComment(2),
                (this.scopeStack = []),
                this.enterScope(xt),
                (this.regexpState = null),
                (this.privateNameStack = []);
            },
            Y = {
              inFunction: { configurable: !0 },
              inGenerator: { configurable: !0 },
              inAsync: { configurable: !0 },
              canAwait: { configurable: !0 },
              allowSuper: { configurable: !0 },
              allowDirectSuper: { configurable: !0 },
              treatFunctionsAsVar: { configurable: !0 },
              allowNewDotTarget: { configurable: !0 },
              inClassStaticBlock: { configurable: !0 },
            };
          (re.prototype.parse = function () {
            var n = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(n);
          }),
            (Y.inFunction.get = function () {
              return (this.currentVarScope().flags & lt) > 0;
            }),
            (Y.inGenerator.get = function () {
              return (
                (this.currentVarScope().flags & Ye) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (Y.inAsync.get = function () {
              return (
                (this.currentVarScope().flags & kt) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (Y.canAwait.get = function () {
              for (var t = this.scopeStack.length - 1; t >= 0; t--) {
                var n = this.scopeStack[t];
                if (n.inClassFieldInit || n.flags & yt) return !1;
                if (n.flags & lt) return (n.flags & kt) > 0;
              }
              return (
                (this.inModule && this.options.ecmaVersion >= 13) ||
                this.options.allowAwaitOutsideFunction
              );
            }),
            (Y.allowSuper.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                h = t.inClassFieldInit;
              return (n & At) > 0 || h || this.options.allowSuperOutsideMethod;
            }),
            (Y.allowDirectSuper.get = function () {
              return (this.currentThisScope().flags & vt) > 0;
            }),
            (Y.treatFunctionsAsVar.get = function () {
              return this.treatFunctionsAsVarInScope(this.currentScope());
            }),
            (Y.allowNewDotTarget.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                h = t.inClassFieldInit;
              return (n & (lt | yt)) > 0 || h;
            }),
            (Y.inClassStaticBlock.get = function () {
              return (this.currentVarScope().flags & yt) > 0;
            }),
            (re.extend = function () {
              for (var n = [], h = arguments.length; h--; ) n[h] = arguments[h];
              for (var p = this, S = 0; S < n.length; S++) p = n[S](p);
              return p;
            }),
            (re.parse = function (n, h) {
              return new this(h, n).parse();
            }),
            (re.parseExpressionAt = function (n, h, p) {
              var S = new this(p, n, h);
              return S.nextToken(), S.parseExpression();
            }),
            (re.tokenizer = function (n, h) {
              return new this(h, n);
            }),
            Object.defineProperties(re.prototype, Y);
          var de = re.prototype,
            Ee = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
          (de.strictDirective = function (t) {
            if (this.options.ecmaVersion < 5) return !1;
            for (;;) {
              (K.lastIndex = t), (t += K.exec(this.input)[0].length);
              var n = Ee.exec(this.input.slice(t));
              if (!n) return !1;
              if ((n[1] || n[2]) === "use strict") {
                K.lastIndex = t + n[0].length;
                var h = K.exec(this.input),
                  p = h.index + h[0].length,
                  S = this.input.charAt(p);
                return (
                  S === ";" ||
                  S === "}" ||
                  (w.test(h[0]) &&
                    !(
                      /[(`.[+\-/*%<>=,?^&]/.test(S) ||
                      (S === "!" && this.input.charAt(p + 1) === "=")
                    ))
                );
              }
              (t += n[0].length),
                (K.lastIndex = t),
                (t += K.exec(this.input)[0].length),
                this.input[t] === ";" && t++;
            }
          }),
            (de.eat = function (t) {
              return this.type === t ? (this.next(), !0) : !1;
            }),
            (de.isContextual = function (t) {
              return (
                this.type === u.name && this.value === t && !this.containsEsc
              );
            }),
            (de.eatContextual = function (t) {
              return this.isContextual(t) ? (this.next(), !0) : !1;
            }),
            (de.expectContextual = function (t) {
              this.eatContextual(t) || this.unexpected();
            }),
            (de.canInsertSemicolon = function () {
              return (
                this.type === u.eof ||
                this.type === u.braceR ||
                w.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (de.insertSemicolon = function () {
              if (this.canInsertSemicolon())
                return (
                  this.options.onInsertedSemicolon &&
                    this.options.onInsertedSemicolon(
                      this.lastTokEnd,
                      this.lastTokEndLoc
                    ),
                  !0
                );
            }),
            (de.semicolon = function () {
              !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
            }),
            (de.afterTrailingComma = function (t, n) {
              if (this.type === t)
                return (
                  this.options.onTrailingComma &&
                    this.options.onTrailingComma(
                      this.lastTokStart,
                      this.lastTokStartLoc
                    ),
                  n || this.next(),
                  !0
                );
            }),
            (de.expect = function (t) {
              this.eat(t) || this.unexpected();
            }),
            (de.unexpected = function (t) {
              this.raise(t ?? this.start, "Unexpected token");
            });
          var Tt = function () {
            this.shorthandAssign =
              this.trailingComma =
              this.parenthesizedAssign =
              this.parenthesizedBind =
              this.doubleProto =
                -1;
          };
          (de.checkPatternErrors = function (t, n) {
            if (t) {
              t.trailingComma > -1 &&
                this.raiseRecoverable(
                  t.trailingComma,
                  "Comma is not permitted after the rest element"
                );
              var h = n ? t.parenthesizedAssign : t.parenthesizedBind;
              h > -1 &&
                this.raiseRecoverable(
                  h,
                  n ? "Assigning to rvalue" : "Parenthesized pattern"
                );
            }
          }),
            (de.checkExpressionErrors = function (t, n) {
              if (!t) return !1;
              var h = t.shorthandAssign,
                p = t.doubleProto;
              if (!n) return h >= 0 || p >= 0;
              h >= 0 &&
                this.raise(
                  h,
                  "Shorthand property assignments are valid only in destructuring patterns"
                ),
                p >= 0 &&
                  this.raiseRecoverable(
                    p,
                    "Redefinition of __proto__ property"
                  );
            }),
            (de.checkYieldAwaitInDefaultParams = function () {
              this.yieldPos &&
                (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                this.raise(
                  this.yieldPos,
                  "Yield expression cannot be a default value"
                ),
                this.awaitPos &&
                  this.raise(
                    this.awaitPos,
                    "Await expression cannot be a default value"
                  );
            }),
            (de.isSimpleAssignTarget = function (t) {
              return t.type === "ParenthesizedExpression"
                ? this.isSimpleAssignTarget(t.expression)
                : t.type === "Identifier" || t.type === "MemberExpression";
            });
          var $ = re.prototype;
          $.parseTopLevel = function (t) {
            var n = Object.create(null);
            for (t.body || (t.body = []); this.type !== u.eof; ) {
              var h = this.parseStatement(null, !0, n);
              t.body.push(h);
            }
            if (this.inModule)
              for (
                var p = 0, S = Object.keys(this.undefinedExports);
                p < S.length;
                p += 1
              ) {
                var I = S[p];
                this.raiseRecoverable(
                  this.undefinedExports[I].start,
                  "Export '" + I + "' is not defined"
                );
              }
            return (
              this.adaptDirectivePrologue(t.body),
              this.next(),
              (t.sourceType = this.options.sourceType),
              this.finishNode(t, "Program")
            );
          };
          var je = { kind: "loop" },
            hi = { kind: "switch" };
          ($.isLet = function (t) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
              return !1;
            K.lastIndex = this.pos;
            var n = K.exec(this.input),
              h = this.pos + n[0].length,
              p = this.input.charCodeAt(h);
            if (p === 91 || p === 92) return !0;
            if (t) return !1;
            if (p === 123 || (p > 55295 && p < 56320)) return !0;
            if (T(p, !0)) {
              for (var S = h + 1; E((p = this.input.charCodeAt(S)), !0); ) ++S;
              if (p === 92 || (p > 55295 && p < 56320)) return !0;
              var I = this.input.slice(h, S);
              if (!_.test(I)) return !0;
            }
            return !1;
          }),
            ($.isAsyncFunction = function () {
              if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
                return !1;
              K.lastIndex = this.pos;
              var t = K.exec(this.input),
                n = this.pos + t[0].length,
                h;
              return (
                !w.test(this.input.slice(this.pos, n)) &&
                this.input.slice(n, n + 8) === "function" &&
                (n + 8 === this.input.length ||
                  !(
                    E((h = this.input.charCodeAt(n + 8))) ||
                    (h > 55295 && h < 56320)
                  ))
              );
            }),
            ($.parseStatement = function (t, n, h) {
              var p = this.type,
                S = this.startNode(),
                I;
              switch ((this.isLet(t) && ((p = u._var), (I = "let")), p)) {
                case u._break:
                case u._continue:
                  return this.parseBreakContinueStatement(S, p.keyword);
                case u._debugger:
                  return this.parseDebuggerStatement(S);
                case u._do:
                  return this.parseDoStatement(S);
                case u._for:
                  return this.parseForStatement(S);
                case u._function:
                  return (
                    t &&
                      (this.strict || (t !== "if" && t !== "label")) &&
                      this.options.ecmaVersion >= 6 &&
                      this.unexpected(),
                    this.parseFunctionStatement(S, !1, !t)
                  );
                case u._class:
                  return t && this.unexpected(), this.parseClass(S, !0);
                case u._if:
                  return this.parseIfStatement(S);
                case u._return:
                  return this.parseReturnStatement(S);
                case u._switch:
                  return this.parseSwitchStatement(S);
                case u._throw:
                  return this.parseThrowStatement(S);
                case u._try:
                  return this.parseTryStatement(S);
                case u._const:
                case u._var:
                  return (
                    (I = I || this.value),
                    t && I !== "var" && this.unexpected(),
                    this.parseVarStatement(S, I)
                  );
                case u._while:
                  return this.parseWhileStatement(S);
                case u._with:
                  return this.parseWithStatement(S);
                case u.braceL:
                  return this.parseBlock(!0, S);
                case u.semi:
                  return this.parseEmptyStatement(S);
                case u._export:
                case u._import:
                  if (this.options.ecmaVersion > 10 && p === u._import) {
                    K.lastIndex = this.pos;
                    var L = K.exec(this.input),
                      j = this.pos + L[0].length,
                      U = this.input.charCodeAt(j);
                    if (U === 40 || U === 46)
                      return this.parseExpressionStatement(
                        S,
                        this.parseExpression()
                      );
                  }
                  return (
                    this.options.allowImportExportEverywhere ||
                      (n ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may only appear at the top level"
                        ),
                      this.inModule ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may appear only with 'sourceType: module'"
                        )),
                    p === u._import
                      ? this.parseImport(S)
                      : this.parseExport(S, h)
                  );
                default:
                  if (this.isAsyncFunction())
                    return (
                      t && this.unexpected(),
                      this.next(),
                      this.parseFunctionStatement(S, !0, !t)
                    );
                  var ne = this.value,
                    ue = this.parseExpression();
                  return p === u.name &&
                    ue.type === "Identifier" &&
                    this.eat(u.colon)
                    ? this.parseLabeledStatement(S, ne, ue, t)
                    : this.parseExpressionStatement(S, ue);
              }
            }),
            ($.parseBreakContinueStatement = function (t, n) {
              var h = n === "break";
              this.next(),
                this.eat(u.semi) || this.insertSemicolon()
                  ? (t.label = null)
                  : this.type !== u.name
                  ? this.unexpected()
                  : ((t.label = this.parseIdent()), this.semicolon());
              for (var p = 0; p < this.labels.length; ++p) {
                var S = this.labels[p];
                if (
                  (t.label == null || S.name === t.label.name) &&
                  ((S.kind != null && (h || S.kind === "loop")) ||
                    (t.label && h))
                )
                  break;
              }
              return (
                p === this.labels.length &&
                  this.raise(t.start, "Unsyntactic " + n),
                this.finishNode(t, h ? "BreakStatement" : "ContinueStatement")
              );
            }),
            ($.parseDebuggerStatement = function (t) {
              return (
                this.next(),
                this.semicolon(),
                this.finishNode(t, "DebuggerStatement")
              );
            }),
            ($.parseDoStatement = function (t) {
              return (
                this.next(),
                this.labels.push(je),
                (t.body = this.parseStatement("do")),
                this.labels.pop(),
                this.expect(u._while),
                (t.test = this.parseParenExpression()),
                this.options.ecmaVersion >= 6
                  ? this.eat(u.semi)
                  : this.semicolon(),
                this.finishNode(t, "DoWhileStatement")
              );
            }),
            ($.parseForStatement = function (t) {
              this.next();
              var n =
                this.options.ecmaVersion >= 9 &&
                this.canAwait &&
                this.eatContextual("await")
                  ? this.lastTokStart
                  : -1;
              if (
                (this.labels.push(je),
                this.enterScope(0),
                this.expect(u.parenL),
                this.type === u.semi)
              )
                return n > -1 && this.unexpected(n), this.parseFor(t, null);
              var h = this.isLet();
              if (this.type === u._var || this.type === u._const || h) {
                var p = this.startNode(),
                  S = h ? "let" : this.value;
                return (
                  this.next(),
                  this.parseVar(p, !0, S),
                  this.finishNode(p, "VariableDeclaration"),
                  (this.type === u._in ||
                    (this.options.ecmaVersion >= 6 &&
                      this.isContextual("of"))) &&
                  p.declarations.length === 1
                    ? (this.options.ecmaVersion >= 9 &&
                        (this.type === u._in
                          ? n > -1 && this.unexpected(n)
                          : (t.await = n > -1)),
                      this.parseForIn(t, p))
                    : (n > -1 && this.unexpected(n), this.parseFor(t, p))
                );
              }
              var I = this.isContextual("let"),
                L = !1,
                j = new Tt(),
                U = this.parseExpression(n > -1 ? "await" : !0, j);
              return this.type === u._in ||
                (L = this.options.ecmaVersion >= 6 && this.isContextual("of"))
                ? (this.options.ecmaVersion >= 9 &&
                    (this.type === u._in
                      ? n > -1 && this.unexpected(n)
                      : (t.await = n > -1)),
                  I &&
                    L &&
                    this.raise(
                      U.start,
                      "The left-hand side of a for-of loop may not start with 'let'."
                    ),
                  this.toAssignable(U, !1, j),
                  this.checkLValPattern(U),
                  this.parseForIn(t, U))
                : (this.checkExpressionErrors(j, !0),
                  n > -1 && this.unexpected(n),
                  this.parseFor(t, U));
            }),
            ($.parseFunctionStatement = function (t, n, h) {
              return (
                this.next(), this.parseFunction(t, _e | (h ? 0 : Nt), !1, n)
              );
            }),
            ($.parseIfStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                (t.consequent = this.parseStatement("if")),
                (t.alternate = this.eat(u._else)
                  ? this.parseStatement("if")
                  : null),
                this.finishNode(t, "IfStatement")
              );
            }),
            ($.parseReturnStatement = function (t) {
              return (
                !this.inFunction &&
                  !this.options.allowReturnOutsideFunction &&
                  this.raise(this.start, "'return' outside of function"),
                this.next(),
                this.eat(u.semi) || this.insertSemicolon()
                  ? (t.argument = null)
                  : ((t.argument = this.parseExpression()), this.semicolon()),
                this.finishNode(t, "ReturnStatement")
              );
            }),
            ($.parseSwitchStatement = function (t) {
              this.next(),
                (t.discriminant = this.parseParenExpression()),
                (t.cases = []),
                this.expect(u.braceL),
                this.labels.push(hi),
                this.enterScope(0);
              for (var n, h = !1; this.type !== u.braceR; )
                if (this.type === u._case || this.type === u._default) {
                  var p = this.type === u._case;
                  n && this.finishNode(n, "SwitchCase"),
                    t.cases.push((n = this.startNode())),
                    (n.consequent = []),
                    this.next(),
                    p
                      ? (n.test = this.parseExpression())
                      : (h &&
                          this.raiseRecoverable(
                            this.lastTokStart,
                            "Multiple default clauses"
                          ),
                        (h = !0),
                        (n.test = null)),
                    this.expect(u.colon);
                } else
                  n || this.unexpected(),
                    n.consequent.push(this.parseStatement(null));
              return (
                this.exitScope(),
                n && this.finishNode(n, "SwitchCase"),
                this.next(),
                this.labels.pop(),
                this.finishNode(t, "SwitchStatement")
              );
            }),
            ($.parseThrowStatement = function (t) {
              return (
                this.next(),
                w.test(this.input.slice(this.lastTokEnd, this.start)) &&
                  this.raise(this.lastTokEnd, "Illegal newline after throw"),
                (t.argument = this.parseExpression()),
                this.semicolon(),
                this.finishNode(t, "ThrowStatement")
              );
            });
          var ct = [];
          ($.parseCatchClauseParam = function () {
            var t = this.parseBindingAtom(),
              n = t.type === "Identifier";
            return (
              this.enterScope(n ? Pe : 0),
              this.checkLValPattern(t, n ? Ut : Ke),
              this.expect(u.parenR),
              t
            );
          }),
            ($.parseTryStatement = function (t) {
              if (
                (this.next(),
                (t.block = this.parseBlock()),
                (t.handler = null),
                this.type === u._catch)
              ) {
                var n = this.startNode();
                this.next(),
                  this.eat(u.parenL)
                    ? (n.param = this.parseCatchClauseParam())
                    : (this.options.ecmaVersion < 10 && this.unexpected(),
                      (n.param = null),
                      this.enterScope(0)),
                  (n.body = this.parseBlock(!1)),
                  this.exitScope(),
                  (t.handler = this.finishNode(n, "CatchClause"));
              }
              return (
                (t.finalizer = this.eat(u._finally) ? this.parseBlock() : null),
                !t.handler &&
                  !t.finalizer &&
                  this.raise(t.start, "Missing catch or finally clause"),
                this.finishNode(t, "TryStatement")
              );
            }),
            ($.parseVarStatement = function (t, n, h) {
              return (
                this.next(),
                this.parseVar(t, !1, n, h),
                this.semicolon(),
                this.finishNode(t, "VariableDeclaration")
              );
            }),
            ($.parseWhileStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                this.labels.push(je),
                (t.body = this.parseStatement("while")),
                this.labels.pop(),
                this.finishNode(t, "WhileStatement")
              );
            }),
            ($.parseWithStatement = function (t) {
              return (
                this.strict && this.raise(this.start, "'with' in strict mode"),
                this.next(),
                (t.object = this.parseParenExpression()),
                (t.body = this.parseStatement("with")),
                this.finishNode(t, "WithStatement")
              );
            }),
            ($.parseEmptyStatement = function (t) {
              return this.next(), this.finishNode(t, "EmptyStatement");
            }),
            ($.parseLabeledStatement = function (t, n, h, p) {
              for (var S = 0, I = this.labels; S < I.length; S += 1) {
                var L = I[S];
                L.name === n &&
                  this.raise(h.start, "Label '" + n + "' is already declared");
              }
              for (
                var j = this.type.isLoop
                    ? "loop"
                    : this.type === u._switch
                    ? "switch"
                    : null,
                  U = this.labels.length - 1;
                U >= 0;
                U--
              ) {
                var ne = this.labels[U];
                if (ne.statementStart === t.start)
                  (ne.statementStart = this.start), (ne.kind = j);
                else break;
              }
              return (
                this.labels.push({
                  name: n,
                  kind: j,
                  statementStart: this.start,
                }),
                (t.body = this.parseStatement(
                  p ? (p.indexOf("label") === -1 ? p + "label" : p) : "label"
                )),
                this.labels.pop(),
                (t.label = h),
                this.finishNode(t, "LabeledStatement")
              );
            }),
            ($.parseExpressionStatement = function (t, n) {
              return (
                (t.expression = n),
                this.semicolon(),
                this.finishNode(t, "ExpressionStatement")
              );
            }),
            ($.parseBlock = function (t, n, h) {
              for (
                t === void 0 && (t = !0),
                  n === void 0 && (n = this.startNode()),
                  n.body = [],
                  this.expect(u.braceL),
                  t && this.enterScope(0);
                this.type !== u.braceR;

              ) {
                var p = this.parseStatement(null);
                n.body.push(p);
              }
              return (
                h && (this.strict = !1),
                this.next(),
                t && this.exitScope(),
                this.finishNode(n, "BlockStatement")
              );
            }),
            ($.parseFor = function (t, n) {
              return (
                (t.init = n),
                this.expect(u.semi),
                (t.test = this.type === u.semi ? null : this.parseExpression()),
                this.expect(u.semi),
                (t.update =
                  this.type === u.parenR ? null : this.parseExpression()),
                this.expect(u.parenR),
                (t.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, "ForStatement")
              );
            }),
            ($.parseForIn = function (t, n) {
              var h = this.type === u._in;
              return (
                this.next(),
                n.type === "VariableDeclaration" &&
                  n.declarations[0].init != null &&
                  (!h ||
                    this.options.ecmaVersion < 8 ||
                    this.strict ||
                    n.kind !== "var" ||
                    n.declarations[0].id.type !== "Identifier") &&
                  this.raise(
                    n.start,
                    (h ? "for-in" : "for-of") +
                      " loop variable declaration may not have an initializer"
                  ),
                (t.left = n),
                (t.right = h
                  ? this.parseExpression()
                  : this.parseMaybeAssign()),
                this.expect(u.parenR),
                (t.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, h ? "ForInStatement" : "ForOfStatement")
              );
            }),
            ($.parseVar = function (t, n, h, p) {
              for (t.declarations = [], t.kind = h; ; ) {
                var S = this.startNode();
                if (
                  (this.parseVarId(S, h),
                  this.eat(u.eq)
                    ? (S.init = this.parseMaybeAssign(n))
                    : !p &&
                      h === "const" &&
                      !(
                        this.type === u._in ||
                        (this.options.ecmaVersion >= 6 &&
                          this.isContextual("of"))
                      )
                    ? this.unexpected()
                    : !p &&
                      S.id.type !== "Identifier" &&
                      !(n && (this.type === u._in || this.isContextual("of")))
                    ? this.raise(
                        this.lastTokEnd,
                        "Complex binding patterns require an initialization value"
                      )
                    : (S.init = null),
                  t.declarations.push(this.finishNode(S, "VariableDeclarator")),
                  !this.eat(u.comma))
                )
                  break;
              }
              return t;
            }),
            ($.parseVarId = function (t, n) {
              (t.id = this.parseBindingAtom()),
                this.checkLValPattern(t.id, n === "var" ? qt : Ke, !1);
            });
          var _e = 1,
            Nt = 2,
            li = 4;
          ($.parseFunction = function (t, n, h, p, S) {
            this.initFunction(t),
              (this.options.ecmaVersion >= 9 ||
                (this.options.ecmaVersion >= 6 && !p)) &&
                (this.type === u.star && n & Nt && this.unexpected(),
                (t.generator = this.eat(u.star))),
              this.options.ecmaVersion >= 8 && (t.async = !!p),
              n & _e &&
                ((t.id =
                  n & li && this.type !== u.name ? null : this.parseIdent()),
                t.id &&
                  !(n & Nt) &&
                  this.checkLValSimple(
                    t.id,
                    this.strict || t.generator || t.async
                      ? this.treatFunctionsAsVar
                        ? qt
                        : Ke
                      : ui
                  ));
            var I = this.yieldPos,
              L = this.awaitPos,
              j = this.awaitIdentPos;
            return (
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              this.enterScope(jt(t.async, t.generator)),
              n & _e ||
                (t.id = this.type === u.name ? this.parseIdent() : null),
              this.parseFunctionParams(t),
              this.parseFunctionBody(t, h, !1, S),
              (this.yieldPos = I),
              (this.awaitPos = L),
              (this.awaitIdentPos = j),
              this.finishNode(
                t,
                n & _e ? "FunctionDeclaration" : "FunctionExpression"
              )
            );
          }),
            ($.parseFunctionParams = function (t) {
              this.expect(u.parenL),
                (t.params = this.parseBindingList(
                  u.parenR,
                  !1,
                  this.options.ecmaVersion >= 8
                )),
                this.checkYieldAwaitInDefaultParams();
            }),
            ($.parseClass = function (t, n) {
              this.next();
              var h = this.strict;
              (this.strict = !0),
                this.parseClassId(t, n),
                this.parseClassSuper(t);
              var p = this.enterClassBody(),
                S = this.startNode(),
                I = !1;
              for (
                S.body = [], this.expect(u.braceL);
                this.type !== u.braceR;

              ) {
                var L = this.parseClassElement(t.superClass !== null);
                L &&
                  (S.body.push(L),
                  L.type === "MethodDefinition" && L.kind === "constructor"
                    ? (I &&
                        this.raiseRecoverable(
                          L.start,
                          "Duplicate constructor in the same class"
                        ),
                      (I = !0))
                    : L.key &&
                      L.key.type === "PrivateIdentifier" &&
                      we(p, L) &&
                      this.raiseRecoverable(
                        L.key.start,
                        "Identifier '#" +
                          L.key.name +
                          "' has already been declared"
                      ));
              }
              return (
                (this.strict = h),
                this.next(),
                (t.body = this.finishNode(S, "ClassBody")),
                this.exitClassBody(),
                this.finishNode(t, n ? "ClassDeclaration" : "ClassExpression")
              );
            }),
            ($.parseClassElement = function (t) {
              if (this.eat(u.semi)) return null;
              var n = this.options.ecmaVersion,
                h = this.startNode(),
                p = "",
                S = !1,
                I = !1,
                L = "method",
                j = !1;
              if (this.eatContextual("static")) {
                if (n >= 13 && this.eat(u.braceL))
                  return this.parseClassStaticBlock(h), h;
                this.isClassElementNameStart() || this.type === u.star
                  ? (j = !0)
                  : (p = "static");
              }
              if (
                ((h.static = j),
                !p &&
                  n >= 8 &&
                  this.eatContextual("async") &&
                  ((this.isClassElementNameStart() || this.type === u.star) &&
                  !this.canInsertSemicolon()
                    ? (I = !0)
                    : (p = "async")),
                !p && (n >= 9 || !I) && this.eat(u.star) && (S = !0),
                !p && !I && !S)
              ) {
                var U = this.value;
                (this.eatContextual("get") || this.eatContextual("set")) &&
                  (this.isClassElementNameStart() ? (L = U) : (p = U));
              }
              if (
                (p
                  ? ((h.computed = !1),
                    (h.key = this.startNodeAt(
                      this.lastTokStart,
                      this.lastTokStartLoc
                    )),
                    (h.key.name = p),
                    this.finishNode(h.key, "Identifier"))
                  : this.parseClassElementName(h),
                n < 13 || this.type === u.parenL || L !== "method" || S || I)
              ) {
                var ne = !h.static && Re(h, "constructor"),
                  ue = ne && t;
                ne &&
                  L !== "method" &&
                  this.raise(
                    h.key.start,
                    "Constructor can't have get/set modifier"
                  ),
                  (h.kind = ne ? "constructor" : L),
                  this.parseClassMethod(h, S, I, ue);
              } else this.parseClassField(h);
              return h;
            }),
            ($.isClassElementNameStart = function () {
              return (
                this.type === u.name ||
                this.type === u.privateId ||
                this.type === u.num ||
                this.type === u.string ||
                this.type === u.bracketL ||
                this.type.keyword
              );
            }),
            ($.parseClassElementName = function (t) {
              this.type === u.privateId
                ? (this.value === "constructor" &&
                    this.raise(
                      this.start,
                      "Classes can't have an element named '#constructor'"
                    ),
                  (t.computed = !1),
                  (t.key = this.parsePrivateIdent()))
                : this.parsePropertyName(t);
            }),
            ($.parseClassMethod = function (t, n, h, p) {
              var S = t.key;
              t.kind === "constructor"
                ? (n && this.raise(S.start, "Constructor can't be a generator"),
                  h &&
                    this.raise(S.start, "Constructor can't be an async method"))
                : t.static &&
                  Re(t, "prototype") &&
                  this.raise(
                    S.start,
                    "Classes may not have a static property named prototype"
                  );
              var I = (t.value = this.parseMethod(n, h, p));
              return (
                t.kind === "get" &&
                  I.params.length !== 0 &&
                  this.raiseRecoverable(
                    I.start,
                    "getter should have no params"
                  ),
                t.kind === "set" &&
                  I.params.length !== 1 &&
                  this.raiseRecoverable(
                    I.start,
                    "setter should have exactly one param"
                  ),
                t.kind === "set" &&
                  I.params[0].type === "RestElement" &&
                  this.raiseRecoverable(
                    I.params[0].start,
                    "Setter cannot use rest params"
                  ),
                this.finishNode(t, "MethodDefinition")
              );
            }),
            ($.parseClassField = function (t) {
              if (
                (Re(t, "constructor")
                  ? this.raise(
                      t.key.start,
                      "Classes can't have a field named 'constructor'"
                    )
                  : t.static &&
                    Re(t, "prototype") &&
                    this.raise(
                      t.key.start,
                      "Classes can't have a static field named 'prototype'"
                    ),
                this.eat(u.eq))
              ) {
                var n = this.currentThisScope(),
                  h = n.inClassFieldInit;
                (n.inClassFieldInit = !0),
                  (t.value = this.parseMaybeAssign()),
                  (n.inClassFieldInit = h);
              } else t.value = null;
              return this.semicolon(), this.finishNode(t, "PropertyDefinition");
            }),
            ($.parseClassStaticBlock = function (t) {
              t.body = [];
              var n = this.labels;
              for (
                this.labels = [], this.enterScope(yt | At);
                this.type !== u.braceR;

              ) {
                var h = this.parseStatement(null);
                t.body.push(h);
              }
              return (
                this.next(),
                this.exitScope(),
                (this.labels = n),
                this.finishNode(t, "StaticBlock")
              );
            }),
            ($.parseClassId = function (t, n) {
              this.type === u.name
                ? ((t.id = this.parseIdent()),
                  n && this.checkLValSimple(t.id, Ke, !1))
                : (n === !0 && this.unexpected(), (t.id = null));
            }),
            ($.parseClassSuper = function (t) {
              t.superClass = this.eat(u._extends)
                ? this.parseExprSubscripts(null, !1)
                : null;
            }),
            ($.enterClassBody = function () {
              var t = { declared: Object.create(null), used: [] };
              return this.privateNameStack.push(t), t.declared;
            }),
            ($.exitClassBody = function () {
              var t = this.privateNameStack.pop(),
                n = t.declared,
                h = t.used;
              if (this.options.checkPrivateFields)
                for (
                  var p = this.privateNameStack.length,
                    S = p === 0 ? null : this.privateNameStack[p - 1],
                    I = 0;
                  I < h.length;
                  ++I
                ) {
                  var L = h[I];
                  Se(n, L.name) ||
                    (S
                      ? S.used.push(L)
                      : this.raiseRecoverable(
                          L.start,
                          "Private field '#" +
                            L.name +
                            "' must be declared in an enclosing class"
                        ));
                }
            });
          function we(t, n) {
            var h = n.key.name,
              p = t[h],
              S = "true";
            return (
              n.type === "MethodDefinition" &&
                (n.kind === "get" || n.kind === "set") &&
                (S = (n.static ? "s" : "i") + n.kind),
              (p === "iget" && S === "iset") ||
              (p === "iset" && S === "iget") ||
              (p === "sget" && S === "sset") ||
              (p === "sset" && S === "sget")
                ? ((t[h] = "true"), !1)
                : p
                ? !0
                : ((t[h] = S), !1)
            );
          }
          function Re(t, n) {
            var h = t.computed,
              p = t.key;
            return (
              !h &&
              ((p.type === "Identifier" && p.name === n) ||
                (p.type === "Literal" && p.value === n))
            );
          }
          ($.parseExportAllDeclaration = function (t, n) {
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual("as")
                  ? ((t.exported = this.parseModuleExportName()),
                    this.checkExport(n, t.exported, this.lastTokStart))
                  : (t.exported = null)),
              this.expectContextual("from"),
              this.type !== u.string && this.unexpected(),
              (t.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(t, "ExportAllDeclaration")
            );
          }),
            ($.parseExport = function (t, n) {
              if ((this.next(), this.eat(u.star)))
                return this.parseExportAllDeclaration(t, n);
              if (this.eat(u._default))
                return (
                  this.checkExport(n, "default", this.lastTokStart),
                  (t.declaration = this.parseExportDefaultDeclaration()),
                  this.finishNode(t, "ExportDefaultDeclaration")
                );
              if (this.shouldParseExportStatement())
                (t.declaration = this.parseExportDeclaration(t)),
                  t.declaration.type === "VariableDeclaration"
                    ? this.checkVariableExport(n, t.declaration.declarations)
                    : this.checkExport(
                        n,
                        t.declaration.id,
                        t.declaration.id.start
                      ),
                  (t.specifiers = []),
                  (t.source = null);
              else {
                if (
                  ((t.declaration = null),
                  (t.specifiers = this.parseExportSpecifiers(n)),
                  this.eatContextual("from"))
                )
                  this.type !== u.string && this.unexpected(),
                    (t.source = this.parseExprAtom());
                else {
                  for (var h = 0, p = t.specifiers; h < p.length; h += 1) {
                    var S = p[h];
                    this.checkUnreserved(S.local),
                      this.checkLocalExport(S.local),
                      S.local.type === "Literal" &&
                        this.raise(
                          S.local.start,
                          "A string literal cannot be used as an exported binding without `from`."
                        );
                  }
                  t.source = null;
                }
                this.semicolon();
              }
              return this.finishNode(t, "ExportNamedDeclaration");
            }),
            ($.parseExportDeclaration = function (t) {
              return this.parseStatement(null);
            }),
            ($.parseExportDefaultDeclaration = function () {
              var t;
              if (this.type === u._function || (t = this.isAsyncFunction())) {
                var n = this.startNode();
                return (
                  this.next(),
                  t && this.next(),
                  this.parseFunction(n, _e | li, !1, t)
                );
              } else if (this.type === u._class) {
                var h = this.startNode();
                return this.parseClass(h, "nullableID");
              } else {
                var p = this.parseMaybeAssign();
                return this.semicolon(), p;
              }
            }),
            ($.checkExport = function (t, n, h) {
              t &&
                (typeof n != "string" &&
                  (n = n.type === "Identifier" ? n.name : n.value),
                Se(t, n) &&
                  this.raiseRecoverable(h, "Duplicate export '" + n + "'"),
                (t[n] = !0));
            }),
            ($.checkPatternExport = function (t, n) {
              var h = n.type;
              if (h === "Identifier") this.checkExport(t, n, n.start);
              else if (h === "ObjectPattern")
                for (var p = 0, S = n.properties; p < S.length; p += 1) {
                  var I = S[p];
                  this.checkPatternExport(t, I);
                }
              else if (h === "ArrayPattern")
                for (var L = 0, j = n.elements; L < j.length; L += 1) {
                  var U = j[L];
                  U && this.checkPatternExport(t, U);
                }
              else
                h === "Property"
                  ? this.checkPatternExport(t, n.value)
                  : h === "AssignmentPattern"
                  ? this.checkPatternExport(t, n.left)
                  : h === "RestElement" &&
                    this.checkPatternExport(t, n.argument);
            }),
            ($.checkVariableExport = function (t, n) {
              if (t)
                for (var h = 0, p = n; h < p.length; h += 1) {
                  var S = p[h];
                  this.checkPatternExport(t, S.id);
                }
            }),
            ($.shouldParseExportStatement = function () {
              return (
                this.type.keyword === "var" ||
                this.type.keyword === "const" ||
                this.type.keyword === "class" ||
                this.type.keyword === "function" ||
                this.isLet() ||
                this.isAsyncFunction()
              );
            }),
            ($.parseExportSpecifier = function (t) {
              var n = this.startNode();
              return (
                (n.local = this.parseModuleExportName()),
                (n.exported = this.eatContextual("as")
                  ? this.parseModuleExportName()
                  : n.local),
                this.checkExport(t, n.exported, n.exported.start),
                this.finishNode(n, "ExportSpecifier")
              );
            }),
            ($.parseExportSpecifiers = function (t) {
              var n = [],
                h = !0;
              for (this.expect(u.braceL); !this.eat(u.braceR); ) {
                if (h) h = !1;
                else if (
                  (this.expect(u.comma), this.afterTrailingComma(u.braceR))
                )
                  break;
                n.push(this.parseExportSpecifier(t));
              }
              return n;
            }),
            ($.parseImport = function (t) {
              return (
                this.next(),
                this.type === u.string
                  ? ((t.specifiers = ct), (t.source = this.parseExprAtom()))
                  : ((t.specifiers = this.parseImportSpecifiers()),
                    this.expectContextual("from"),
                    (t.source =
                      this.type === u.string
                        ? this.parseExprAtom()
                        : this.unexpected())),
                this.semicolon(),
                this.finishNode(t, "ImportDeclaration")
              );
            }),
            ($.parseImportSpecifier = function () {
              var t = this.startNode();
              return (
                (t.imported = this.parseModuleExportName()),
                this.eatContextual("as")
                  ? (t.local = this.parseIdent())
                  : (this.checkUnreserved(t.imported), (t.local = t.imported)),
                this.checkLValSimple(t.local, Ke),
                this.finishNode(t, "ImportSpecifier")
              );
            }),
            ($.parseImportDefaultSpecifier = function () {
              var t = this.startNode();
              return (
                (t.local = this.parseIdent()),
                this.checkLValSimple(t.local, Ke),
                this.finishNode(t, "ImportDefaultSpecifier")
              );
            }),
            ($.parseImportNamespaceSpecifier = function () {
              var t = this.startNode();
              return (
                this.next(),
                this.expectContextual("as"),
                (t.local = this.parseIdent()),
                this.checkLValSimple(t.local, Ke),
                this.finishNode(t, "ImportNamespaceSpecifier")
              );
            }),
            ($.parseImportSpecifiers = function () {
              var t = [],
                n = !0;
              if (
                this.type === u.name &&
                (t.push(this.parseImportDefaultSpecifier()), !this.eat(u.comma))
              )
                return t;
              if (this.type === u.star)
                return t.push(this.parseImportNamespaceSpecifier()), t;
              for (this.expect(u.braceL); !this.eat(u.braceR); ) {
                if (n) n = !1;
                else if (
                  (this.expect(u.comma), this.afterTrailingComma(u.braceR))
                )
                  break;
                t.push(this.parseImportSpecifier());
              }
              return t;
            }),
            ($.parseModuleExportName = function () {
              if (this.options.ecmaVersion >= 13 && this.type === u.string) {
                var t = this.parseLiteral(this.value);
                return (
                  ut.test(t.value) &&
                    this.raise(
                      t.start,
                      "An export name cannot include a lone surrogate."
                    ),
                  t
                );
              }
              return this.parseIdent(!0);
            }),
            ($.adaptDirectivePrologue = function (t) {
              for (
                var n = 0;
                n < t.length && this.isDirectiveCandidate(t[n]);
                ++n
              )
                t[n].directive = t[n].expression.raw.slice(1, -1);
            }),
            ($.isDirectiveCandidate = function (t) {
              return (
                this.options.ecmaVersion >= 5 &&
                t.type === "ExpressionStatement" &&
                t.expression.type === "Literal" &&
                typeof t.expression.value == "string" &&
                (this.input[t.start] === '"' || this.input[t.start] === "'")
              );
            });
          var Oe = re.prototype;
          (Oe.toAssignable = function (t, n, h) {
            if (this.options.ecmaVersion >= 6 && t)
              switch (t.type) {
                case "Identifier":
                  this.inAsync &&
                    t.name === "await" &&
                    this.raise(
                      t.start,
                      "Cannot use 'await' as identifier inside an async function"
                    );
                  break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  break;
                case "ObjectExpression":
                  (t.type = "ObjectPattern"),
                    h && this.checkPatternErrors(h, !0);
                  for (var p = 0, S = t.properties; p < S.length; p += 1) {
                    var I = S[p];
                    this.toAssignable(I, n),
                      I.type === "RestElement" &&
                        (I.argument.type === "ArrayPattern" ||
                          I.argument.type === "ObjectPattern") &&
                        this.raise(I.argument.start, "Unexpected token");
                  }
                  break;
                case "Property":
                  t.kind !== "init" &&
                    this.raise(
                      t.key.start,
                      "Object pattern can't contain getter or setter"
                    ),
                    this.toAssignable(t.value, n);
                  break;
                case "ArrayExpression":
                  (t.type = "ArrayPattern"),
                    h && this.checkPatternErrors(h, !0),
                    this.toAssignableList(t.elements, n);
                  break;
                case "SpreadElement":
                  (t.type = "RestElement"),
                    this.toAssignable(t.argument, n),
                    t.argument.type === "AssignmentPattern" &&
                      this.raise(
                        t.argument.start,
                        "Rest elements cannot have a default value"
                      );
                  break;
                case "AssignmentExpression":
                  t.operator !== "=" &&
                    this.raise(
                      t.left.end,
                      "Only '=' operator can be used for specifying default value."
                    ),
                    (t.type = "AssignmentPattern"),
                    delete t.operator,
                    this.toAssignable(t.left, n);
                  break;
                case "ParenthesizedExpression":
                  this.toAssignable(t.expression, n, h);
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(
                    t.start,
                    "Optional chaining cannot appear in left-hand side"
                  );
                  break;
                case "MemberExpression":
                  if (!n) break;
                default:
                  this.raise(t.start, "Assigning to rvalue");
              }
            else h && this.checkPatternErrors(h, !0);
            return t;
          }),
            (Oe.toAssignableList = function (t, n) {
              for (var h = t.length, p = 0; p < h; p++) {
                var S = t[p];
                S && this.toAssignable(S, n);
              }
              if (h) {
                var I = t[h - 1];
                this.options.ecmaVersion === 6 &&
                  n &&
                  I &&
                  I.type === "RestElement" &&
                  I.argument.type !== "Identifier" &&
                  this.unexpected(I.argument.start);
              }
              return t;
            }),
            (Oe.parseSpread = function (t) {
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeAssign(!1, t)),
                this.finishNode(n, "SpreadElement")
              );
            }),
            (Oe.parseRestBinding = function () {
              var t = this.startNode();
              return (
                this.next(),
                this.options.ecmaVersion === 6 &&
                  this.type !== u.name &&
                  this.unexpected(),
                (t.argument = this.parseBindingAtom()),
                this.finishNode(t, "RestElement")
              );
            }),
            (Oe.parseBindingAtom = function () {
              if (this.options.ecmaVersion >= 6)
                switch (this.type) {
                  case u.bracketL:
                    var t = this.startNode();
                    return (
                      this.next(),
                      (t.elements = this.parseBindingList(u.bracketR, !0, !0)),
                      this.finishNode(t, "ArrayPattern")
                    );
                  case u.braceL:
                    return this.parseObj(!0);
                }
              return this.parseIdent();
            }),
            (Oe.parseBindingList = function (t, n, h, p) {
              for (var S = [], I = !0; !this.eat(t); )
                if (
                  (I ? (I = !1) : this.expect(u.comma),
                  n && this.type === u.comma)
                )
                  S.push(null);
                else {
                  if (h && this.afterTrailingComma(t)) break;
                  if (this.type === u.ellipsis) {
                    var L = this.parseRestBinding();
                    this.parseBindingListItem(L),
                      S.push(L),
                      this.type === u.comma &&
                        this.raiseRecoverable(
                          this.start,
                          "Comma is not permitted after the rest element"
                        ),
                      this.expect(t);
                    break;
                  } else S.push(this.parseAssignableListItem(p));
                }
              return S;
            }),
            (Oe.parseAssignableListItem = function (t) {
              var n = this.parseMaybeDefault(this.start, this.startLoc);
              return this.parseBindingListItem(n), n;
            }),
            (Oe.parseBindingListItem = function (t) {
              return t;
            }),
            (Oe.parseMaybeDefault = function (t, n, h) {
              if (
                ((h = h || this.parseBindingAtom()),
                this.options.ecmaVersion < 6 || !this.eat(u.eq))
              )
                return h;
              var p = this.startNodeAt(t, n);
              return (
                (p.left = h),
                (p.right = this.parseMaybeAssign()),
                this.finishNode(p, "AssignmentPattern")
              );
            }),
            (Oe.checkLValSimple = function (t, n, h) {
              n === void 0 && (n = Pt);
              var p = n !== Pt;
              switch (t.type) {
                case "Identifier":
                  this.strict &&
                    this.reservedWordsStrictBind.test(t.name) &&
                    this.raiseRecoverable(
                      t.start,
                      (p ? "Binding " : "Assigning to ") +
                        t.name +
                        " in strict mode"
                    ),
                    p &&
                      (n === Ke &&
                        t.name === "let" &&
                        this.raiseRecoverable(
                          t.start,
                          "let is disallowed as a lexically bound name"
                        ),
                      h &&
                        (Se(h, t.name) &&
                          this.raiseRecoverable(t.start, "Argument name clash"),
                        (h[t.name] = !0)),
                      n !== fe && this.declareName(t.name, n, t.start));
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(
                    t.start,
                    "Optional chaining cannot appear in left-hand side"
                  );
                  break;
                case "MemberExpression":
                  p &&
                    this.raiseRecoverable(t.start, "Binding member expression");
                  break;
                case "ParenthesizedExpression":
                  return (
                    p &&
                      this.raiseRecoverable(
                        t.start,
                        "Binding parenthesized expression"
                      ),
                    this.checkLValSimple(t.expression, n, h)
                  );
                default:
                  this.raise(
                    t.start,
                    (p ? "Binding" : "Assigning to") + " rvalue"
                  );
              }
            }),
            (Oe.checkLValPattern = function (t, n, h) {
              switch ((n === void 0 && (n = Pt), t.type)) {
                case "ObjectPattern":
                  for (var p = 0, S = t.properties; p < S.length; p += 1) {
                    var I = S[p];
                    this.checkLValInnerPattern(I, n, h);
                  }
                  break;
                case "ArrayPattern":
                  for (var L = 0, j = t.elements; L < j.length; L += 1) {
                    var U = j[L];
                    U && this.checkLValInnerPattern(U, n, h);
                  }
                  break;
                default:
                  this.checkLValSimple(t, n, h);
              }
            }),
            (Oe.checkLValInnerPattern = function (t, n, h) {
              switch ((n === void 0 && (n = Pt), t.type)) {
                case "Property":
                  this.checkLValInnerPattern(t.value, n, h);
                  break;
                case "AssignmentPattern":
                  this.checkLValPattern(t.left, n, h);
                  break;
                case "RestElement":
                  this.checkLValPattern(t.argument, n, h);
                  break;
                default:
                  this.checkLValPattern(t, n, h);
              }
            });
          var Ve = function (n, h, p, S, I) {
              (this.token = n),
                (this.isExpr = !!h),
                (this.preserveSpace = !!p),
                (this.override = S),
                (this.generator = !!I);
            },
            ve = {
              b_stat: new Ve("{", !1),
              b_expr: new Ve("{", !0),
              b_tmpl: new Ve("${", !1),
              p_stat: new Ve("(", !1),
              p_expr: new Ve("(", !0),
              q_tmpl: new Ve("`", !0, !0, function (t) {
                return t.tryReadTemplateToken();
              }),
              f_stat: new Ve("function", !1),
              f_expr: new Ve("function", !0),
              f_expr_gen: new Ve("function", !0, !1, null, !0),
              f_gen: new Ve("function", !1, !1, null, !0),
            },
            pt = re.prototype;
          (pt.initialContext = function () {
            return [ve.b_stat];
          }),
            (pt.curContext = function () {
              return this.context[this.context.length - 1];
            }),
            (pt.braceIsBlock = function (t) {
              var n = this.curContext();
              return n === ve.f_expr || n === ve.f_stat
                ? !0
                : t === u.colon && (n === ve.b_stat || n === ve.b_expr)
                ? !n.isExpr
                : t === u._return || (t === u.name && this.exprAllowed)
                ? w.test(this.input.slice(this.lastTokEnd, this.start))
                : t === u._else ||
                  t === u.semi ||
                  t === u.eof ||
                  t === u.parenR ||
                  t === u.arrow
                ? !0
                : t === u.braceL
                ? n === ve.b_stat
                : t === u._var || t === u._const || t === u.name
                ? !1
                : !this.exprAllowed;
            }),
            (pt.inGeneratorContext = function () {
              for (var t = this.context.length - 1; t >= 1; t--) {
                var n = this.context[t];
                if (n.token === "function") return n.generator;
              }
              return !1;
            }),
            (pt.updateContext = function (t) {
              var n,
                h = this.type;
              h.keyword && t === u.dot
                ? (this.exprAllowed = !1)
                : (n = h.updateContext)
                ? n.call(this, t)
                : (this.exprAllowed = h.beforeExpr);
            }),
            (pt.overrideContext = function (t) {
              this.curContext() !== t &&
                (this.context[this.context.length - 1] = t);
            }),
            (u.parenR.updateContext = u.braceR.updateContext =
              function () {
                if (this.context.length === 1) {
                  this.exprAllowed = !0;
                  return;
                }
                var t = this.context.pop();
                t === ve.b_stat &&
                  this.curContext().token === "function" &&
                  (t = this.context.pop()),
                  (this.exprAllowed = !t.isExpr);
              }),
            (u.braceL.updateContext = function (t) {
              this.context.push(this.braceIsBlock(t) ? ve.b_stat : ve.b_expr),
                (this.exprAllowed = !0);
            }),
            (u.dollarBraceL.updateContext = function () {
              this.context.push(ve.b_tmpl), (this.exprAllowed = !0);
            }),
            (u.parenL.updateContext = function (t) {
              var n =
                t === u._if || t === u._for || t === u._with || t === u._while;
              this.context.push(n ? ve.p_stat : ve.p_expr),
                (this.exprAllowed = !0);
            }),
            (u.incDec.updateContext = function () {}),
            (u._function.updateContext = u._class.updateContext =
              function (t) {
                t.beforeExpr &&
                t !== u._else &&
                !(t === u.semi && this.curContext() !== ve.p_stat) &&
                !(
                  t === u._return &&
                  w.test(this.input.slice(this.lastTokEnd, this.start))
                ) &&
                !(
                  (t === u.colon || t === u.braceL) &&
                  this.curContext() === ve.b_stat
                )
                  ? this.context.push(ve.f_expr)
                  : this.context.push(ve.f_stat),
                  (this.exprAllowed = !1);
              }),
            (u.colon.updateContext = function () {
              this.curContext().token === "function" && this.context.pop(),
                (this.exprAllowed = !0);
            }),
            (u.backQuote.updateContext = function () {
              this.curContext() === ve.q_tmpl
                ? this.context.pop()
                : this.context.push(ve.q_tmpl),
                (this.exprAllowed = !1);
            }),
            (u.star.updateContext = function (t) {
              if (t === u._function) {
                var n = this.context.length - 1;
                this.context[n] === ve.f_expr
                  ? (this.context[n] = ve.f_expr_gen)
                  : (this.context[n] = ve.f_gen);
              }
              this.exprAllowed = !0;
            }),
            (u.name.updateContext = function (t) {
              var n = !1;
              this.options.ecmaVersion >= 6 &&
                t !== u.dot &&
                ((this.value === "of" && !this.exprAllowed) ||
                  (this.value === "yield" && this.inGeneratorContext())) &&
                (n = !0),
                (this.exprAllowed = n);
            });
          var ee = re.prototype;
          (ee.checkPropClash = function (t, n, h) {
            if (
              !(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") &&
              !(
                this.options.ecmaVersion >= 6 &&
                (t.computed || t.method || t.shorthand)
              )
            ) {
              var p = t.key,
                S;
              switch (p.type) {
                case "Identifier":
                  S = p.name;
                  break;
                case "Literal":
                  S = String(p.value);
                  break;
                default:
                  return;
              }
              var I = t.kind;
              if (this.options.ecmaVersion >= 6) {
                S === "__proto__" &&
                  I === "init" &&
                  (n.proto &&
                    (h
                      ? h.doubleProto < 0 && (h.doubleProto = p.start)
                      : this.raiseRecoverable(
                          p.start,
                          "Redefinition of __proto__ property"
                        )),
                  (n.proto = !0));
                return;
              }
              S = "$" + S;
              var L = n[S];
              if (L) {
                var j;
                I === "init"
                  ? (j = (this.strict && L.init) || L.get || L.set)
                  : (j = L.init || L[I]),
                  j &&
                    this.raiseRecoverable(p.start, "Redefinition of property");
              } else L = n[S] = { init: !1, get: !1, set: !1 };
              L[I] = !0;
            }
          }),
            (ee.parseExpression = function (t, n) {
              var h = this.start,
                p = this.startLoc,
                S = this.parseMaybeAssign(t, n);
              if (this.type === u.comma) {
                var I = this.startNodeAt(h, p);
                for (I.expressions = [S]; this.eat(u.comma); )
                  I.expressions.push(this.parseMaybeAssign(t, n));
                return this.finishNode(I, "SequenceExpression");
              }
              return S;
            }),
            (ee.parseMaybeAssign = function (t, n, h) {
              if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(t);
                this.exprAllowed = !1;
              }
              var p = !1,
                S = -1,
                I = -1,
                L = -1;
              n
                ? ((S = n.parenthesizedAssign),
                  (I = n.trailingComma),
                  (L = n.doubleProto),
                  (n.parenthesizedAssign = n.trailingComma = -1))
                : ((n = new Tt()), (p = !0));
              var j = this.start,
                U = this.startLoc;
              (this.type === u.parenL || this.type === u.name) &&
                ((this.potentialArrowAt = this.start),
                (this.potentialArrowInForAwait = t === "await"));
              var ne = this.parseMaybeConditional(t, n);
              if ((h && (ne = h.call(this, ne, j, U)), this.type.isAssign)) {
                var ue = this.startNodeAt(j, U);
                return (
                  (ue.operator = this.value),
                  this.type === u.eq && (ne = this.toAssignable(ne, !1, n)),
                  p ||
                    (n.parenthesizedAssign =
                      n.trailingComma =
                      n.doubleProto =
                        -1),
                  n.shorthandAssign >= ne.start && (n.shorthandAssign = -1),
                  this.type === u.eq
                    ? this.checkLValPattern(ne)
                    : this.checkLValSimple(ne),
                  (ue.left = ne),
                  this.next(),
                  (ue.right = this.parseMaybeAssign(t)),
                  L > -1 && (n.doubleProto = L),
                  this.finishNode(ue, "AssignmentExpression")
                );
              } else p && this.checkExpressionErrors(n, !0);
              return (
                S > -1 && (n.parenthesizedAssign = S),
                I > -1 && (n.trailingComma = I),
                ne
              );
            }),
            (ee.parseMaybeConditional = function (t, n) {
              var h = this.start,
                p = this.startLoc,
                S = this.parseExprOps(t, n);
              if (this.checkExpressionErrors(n)) return S;
              if (this.eat(u.question)) {
                var I = this.startNodeAt(h, p);
                return (
                  (I.test = S),
                  (I.consequent = this.parseMaybeAssign()),
                  this.expect(u.colon),
                  (I.alternate = this.parseMaybeAssign(t)),
                  this.finishNode(I, "ConditionalExpression")
                );
              }
              return S;
            }),
            (ee.parseExprOps = function (t, n) {
              var h = this.start,
                p = this.startLoc,
                S = this.parseMaybeUnary(n, !1, !1, t);
              return this.checkExpressionErrors(n) ||
                (S.start === h && S.type === "ArrowFunctionExpression")
                ? S
                : this.parseExprOp(S, h, p, -1, t);
            }),
            (ee.parseExprOp = function (t, n, h, p, S) {
              var I = this.type.binop;
              if (I != null && (!S || this.type !== u._in) && I > p) {
                var L = this.type === u.logicalOR || this.type === u.logicalAND,
                  j = this.type === u.coalesce;
                j && (I = u.logicalAND.binop);
                var U = this.value;
                this.next();
                var ne = this.start,
                  ue = this.startLoc,
                  Ne = this.parseExprOp(
                    this.parseMaybeUnary(null, !1, !1, S),
                    ne,
                    ue,
                    I,
                    S
                  ),
                  bt = this.buildBinary(n, h, t, Ne, U, L || j);
                return (
                  ((L && this.type === u.coalesce) ||
                    (j &&
                      (this.type === u.logicalOR ||
                        this.type === u.logicalAND))) &&
                    this.raiseRecoverable(
                      this.start,
                      "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                    ),
                  this.parseExprOp(bt, n, h, p, S)
                );
              }
              return t;
            }),
            (ee.buildBinary = function (t, n, h, p, S, I) {
              p.type === "PrivateIdentifier" &&
                this.raise(
                  p.start,
                  "Private identifier can only be left side of binary expression"
                );
              var L = this.startNodeAt(t, n);
              return (
                (L.left = h),
                (L.operator = S),
                (L.right = p),
                this.finishNode(L, I ? "LogicalExpression" : "BinaryExpression")
              );
            }),
            (ee.parseMaybeUnary = function (t, n, h, p) {
              var S = this.start,
                I = this.startLoc,
                L;
              if (this.isContextual("await") && this.canAwait)
                (L = this.parseAwait(p)), (n = !0);
              else if (this.type.prefix) {
                var j = this.startNode(),
                  U = this.type === u.incDec;
                (j.operator = this.value),
                  (j.prefix = !0),
                  this.next(),
                  (j.argument = this.parseMaybeUnary(null, !0, U, p)),
                  this.checkExpressionErrors(t, !0),
                  U
                    ? this.checkLValSimple(j.argument)
                    : this.strict &&
                      j.operator === "delete" &&
                      j.argument.type === "Identifier"
                    ? this.raiseRecoverable(
                        j.start,
                        "Deleting local variable in strict mode"
                      )
                    : j.operator === "delete" && a(j.argument)
                    ? this.raiseRecoverable(
                        j.start,
                        "Private fields can not be deleted"
                      )
                    : (n = !0),
                  (L = this.finishNode(
                    j,
                    U ? "UpdateExpression" : "UnaryExpression"
                  ));
              } else if (!n && this.type === u.privateId)
                (p || this.privateNameStack.length === 0) &&
                  this.options.checkPrivateFields &&
                  this.unexpected(),
                  (L = this.parsePrivateIdent()),
                  this.type !== u._in && this.unexpected();
              else {
                if (
                  ((L = this.parseExprSubscripts(t, p)),
                  this.checkExpressionErrors(t))
                )
                  return L;
                for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                  var ne = this.startNodeAt(S, I);
                  (ne.operator = this.value),
                    (ne.prefix = !1),
                    (ne.argument = L),
                    this.checkLValSimple(L),
                    this.next(),
                    (L = this.finishNode(ne, "UpdateExpression"));
                }
              }
              if (!h && this.eat(u.starstar))
                if (n) this.unexpected(this.lastTokStart);
                else
                  return this.buildBinary(
                    S,
                    I,
                    L,
                    this.parseMaybeUnary(null, !1, !1, p),
                    "**",
                    !1
                  );
              else return L;
            });
          function a(t) {
            return (
              (t.type === "MemberExpression" &&
                t.property.type === "PrivateIdentifier") ||
              (t.type === "ChainExpression" && a(t.expression))
            );
          }
          (ee.parseExprSubscripts = function (t, n) {
            var h = this.start,
              p = this.startLoc,
              S = this.parseExprAtom(t, n);
            if (
              S.type === "ArrowFunctionExpression" &&
              this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
            )
              return S;
            var I = this.parseSubscripts(S, h, p, !1, n);
            return (
              t &&
                I.type === "MemberExpression" &&
                (t.parenthesizedAssign >= I.start &&
                  (t.parenthesizedAssign = -1),
                t.parenthesizedBind >= I.start && (t.parenthesizedBind = -1),
                t.trailingComma >= I.start && (t.trailingComma = -1)),
              I
            );
          }),
            (ee.parseSubscripts = function (t, n, h, p, S) {
              for (
                var I =
                    this.options.ecmaVersion >= 8 &&
                    t.type === "Identifier" &&
                    t.name === "async" &&
                    this.lastTokEnd === t.end &&
                    !this.canInsertSemicolon() &&
                    t.end - t.start === 5 &&
                    this.potentialArrowAt === t.start,
                  L = !1;
                ;

              ) {
                var j = this.parseSubscript(t, n, h, p, I, L, S);
                if (
                  (j.optional && (L = !0),
                  j === t || j.type === "ArrowFunctionExpression")
                ) {
                  if (L) {
                    var U = this.startNodeAt(n, h);
                    (U.expression = j),
                      (j = this.finishNode(U, "ChainExpression"));
                  }
                  return j;
                }
                t = j;
              }
            }),
            (ee.shouldParseAsyncArrow = function () {
              return !this.canInsertSemicolon() && this.eat(u.arrow);
            }),
            (ee.parseSubscriptAsyncArrow = function (t, n, h, p) {
              return this.parseArrowExpression(
                this.startNodeAt(t, n),
                h,
                !0,
                p
              );
            }),
            (ee.parseSubscript = function (t, n, h, p, S, I, L) {
              var j = this.options.ecmaVersion >= 11,
                U = j && this.eat(u.questionDot);
              p &&
                U &&
                this.raise(
                  this.lastTokStart,
                  "Optional chaining cannot appear in the callee of new expressions"
                );
              var ne = this.eat(u.bracketL);
              if (
                ne ||
                (U && this.type !== u.parenL && this.type !== u.backQuote) ||
                this.eat(u.dot)
              ) {
                var ue = this.startNodeAt(n, h);
                (ue.object = t),
                  ne
                    ? ((ue.property = this.parseExpression()),
                      this.expect(u.bracketR))
                    : this.type === u.privateId && t.type !== "Super"
                    ? (ue.property = this.parsePrivateIdent())
                    : (ue.property = this.parseIdent(
                        this.options.allowReserved !== "never"
                      )),
                  (ue.computed = !!ne),
                  j && (ue.optional = U),
                  (t = this.finishNode(ue, "MemberExpression"));
              } else if (!p && this.eat(u.parenL)) {
                var Ne = new Tt(),
                  bt = this.yieldPos,
                  Gt = this.awaitPos,
                  Lt = this.awaitIdentPos;
                (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.awaitIdentPos = 0);
                var mi = this.parseExprList(
                  u.parenR,
                  this.options.ecmaVersion >= 8,
                  !1,
                  Ne
                );
                if (S && !U && this.shouldParseAsyncArrow())
                  return (
                    this.checkPatternErrors(Ne, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    this.awaitIdentPos > 0 &&
                      this.raise(
                        this.awaitIdentPos,
                        "Cannot use 'await' as identifier inside an async function"
                      ),
                    (this.yieldPos = bt),
                    (this.awaitPos = Gt),
                    (this.awaitIdentPos = Lt),
                    this.parseSubscriptAsyncArrow(n, h, mi, L)
                  );
                this.checkExpressionErrors(Ne, !0),
                  (this.yieldPos = bt || this.yieldPos),
                  (this.awaitPos = Gt || this.awaitPos),
                  (this.awaitIdentPos = Lt || this.awaitIdentPos);
                var Rt = this.startNodeAt(n, h);
                (Rt.callee = t),
                  (Rt.arguments = mi),
                  j && (Rt.optional = U),
                  (t = this.finishNode(Rt, "CallExpression"));
              } else if (this.type === u.backQuote) {
                (U || I) &&
                  this.raise(
                    this.start,
                    "Optional chaining cannot appear in the tag of tagged template expressions"
                  );
                var Ot = this.startNodeAt(n, h);
                (Ot.tag = t),
                  (Ot.quasi = this.parseTemplate({ isTagged: !0 })),
                  (t = this.finishNode(Ot, "TaggedTemplateExpression"));
              }
              return t;
            }),
            (ee.parseExprAtom = function (t, n, h) {
              this.type === u.slash && this.readRegexp();
              var p,
                S = this.potentialArrowAt === this.start;
              switch (this.type) {
                case u._super:
                  return (
                    this.allowSuper ||
                      this.raise(
                        this.start,
                        "'super' keyword outside a method"
                      ),
                    (p = this.startNode()),
                    this.next(),
                    this.type === u.parenL &&
                      !this.allowDirectSuper &&
                      this.raise(
                        p.start,
                        "super() call outside constructor of a subclass"
                      ),
                    this.type !== u.dot &&
                      this.type !== u.bracketL &&
                      this.type !== u.parenL &&
                      this.unexpected(),
                    this.finishNode(p, "Super")
                  );
                case u._this:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    this.finishNode(p, "ThisExpression")
                  );
                case u.name:
                  var I = this.start,
                    L = this.startLoc,
                    j = this.containsEsc,
                    U = this.parseIdent(!1);
                  if (
                    this.options.ecmaVersion >= 8 &&
                    !j &&
                    U.name === "async" &&
                    !this.canInsertSemicolon() &&
                    this.eat(u._function)
                  )
                    return (
                      this.overrideContext(ve.f_expr),
                      this.parseFunction(this.startNodeAt(I, L), 0, !1, !0, n)
                    );
                  if (S && !this.canInsertSemicolon()) {
                    if (this.eat(u.arrow))
                      return this.parseArrowExpression(
                        this.startNodeAt(I, L),
                        [U],
                        !1,
                        n
                      );
                    if (
                      this.options.ecmaVersion >= 8 &&
                      U.name === "async" &&
                      this.type === u.name &&
                      !j &&
                      (!this.potentialArrowInForAwait ||
                        this.value !== "of" ||
                        this.containsEsc)
                    )
                      return (
                        (U = this.parseIdent(!1)),
                        (this.canInsertSemicolon() || !this.eat(u.arrow)) &&
                          this.unexpected(),
                        this.parseArrowExpression(
                          this.startNodeAt(I, L),
                          [U],
                          !0,
                          n
                        )
                      );
                  }
                  return U;
                case u.regexp:
                  var ne = this.value;
                  return (
                    (p = this.parseLiteral(ne.value)),
                    (p.regex = { pattern: ne.pattern, flags: ne.flags }),
                    p
                  );
                case u.num:
                case u.string:
                  return this.parseLiteral(this.value);
                case u._null:
                case u._true:
                case u._false:
                  return (
                    (p = this.startNode()),
                    (p.value =
                      this.type === u._null ? null : this.type === u._true),
                    (p.raw = this.type.keyword),
                    this.next(),
                    this.finishNode(p, "Literal")
                  );
                case u.parenL:
                  var ue = this.start,
                    Ne = this.parseParenAndDistinguishExpression(S, n);
                  return (
                    t &&
                      (t.parenthesizedAssign < 0 &&
                        !this.isSimpleAssignTarget(Ne) &&
                        (t.parenthesizedAssign = ue),
                      t.parenthesizedBind < 0 && (t.parenthesizedBind = ue)),
                    Ne
                  );
                case u.bracketL:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    (p.elements = this.parseExprList(u.bracketR, !0, !0, t)),
                    this.finishNode(p, "ArrayExpression")
                  );
                case u.braceL:
                  return this.overrideContext(ve.b_expr), this.parseObj(!1, t);
                case u._function:
                  return (
                    (p = this.startNode()),
                    this.next(),
                    this.parseFunction(p, 0)
                  );
                case u._class:
                  return this.parseClass(this.startNode(), !1);
                case u._new:
                  return this.parseNew();
                case u.backQuote:
                  return this.parseTemplate();
                case u._import:
                  return this.options.ecmaVersion >= 11
                    ? this.parseExprImport(h)
                    : this.unexpected();
                default:
                  return this.parseExprAtomDefault();
              }
            }),
            (ee.parseExprAtomDefault = function () {
              this.unexpected();
            }),
            (ee.parseExprImport = function (t) {
              var n = this.startNode();
              this.containsEsc &&
                this.raiseRecoverable(
                  this.start,
                  "Escape sequence in keyword import"
                );
              var h = this.parseIdent(!0);
              if (this.type === u.parenL && !t)
                return this.parseDynamicImport(n);
              if (this.type === u.dot)
                return (n.meta = h), this.parseImportMeta(n);
              this.unexpected();
            }),
            (ee.parseDynamicImport = function (t) {
              if (
                (this.next(),
                (t.source = this.parseMaybeAssign()),
                !this.eat(u.parenR))
              ) {
                var n = this.start;
                this.eat(u.comma) && this.eat(u.parenR)
                  ? this.raiseRecoverable(
                      n,
                      "Trailing comma is not allowed in import()"
                    )
                  : this.unexpected(n);
              }
              return this.finishNode(t, "ImportExpression");
            }),
            (ee.parseImportMeta = function (t) {
              this.next();
              var n = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== "meta" &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for import is 'import.meta'"
                  ),
                n &&
                  this.raiseRecoverable(
                    t.start,
                    "'import.meta' must not contain escaped characters"
                  ),
                this.options.sourceType !== "module" &&
                  !this.options.allowImportExportEverywhere &&
                  this.raiseRecoverable(
                    t.start,
                    "Cannot use 'import.meta' outside a module"
                  ),
                this.finishNode(t, "MetaProperty")
              );
            }),
            (ee.parseLiteral = function (t) {
              var n = this.startNode();
              return (
                (n.value = t),
                (n.raw = this.input.slice(this.start, this.end)),
                n.raw.charCodeAt(n.raw.length - 1) === 110 &&
                  (n.bigint = n.raw.slice(0, -1).replace(/_/g, "")),
                this.next(),
                this.finishNode(n, "Literal")
              );
            }),
            (ee.parseParenExpression = function () {
              this.expect(u.parenL);
              var t = this.parseExpression();
              return this.expect(u.parenR), t;
            }),
            (ee.shouldParseArrow = function (t) {
              return !this.canInsertSemicolon();
            }),
            (ee.parseParenAndDistinguishExpression = function (t, n) {
              var h = this.start,
                p = this.startLoc,
                S,
                I = this.options.ecmaVersion >= 8;
              if (this.options.ecmaVersion >= 6) {
                this.next();
                var L = this.start,
                  j = this.startLoc,
                  U = [],
                  ne = !0,
                  ue = !1,
                  Ne = new Tt(),
                  bt = this.yieldPos,
                  Gt = this.awaitPos,
                  Lt;
                for (
                  this.yieldPos = 0, this.awaitPos = 0;
                  this.type !== u.parenR;

                )
                  if (
                    (ne ? (ne = !1) : this.expect(u.comma),
                    I && this.afterTrailingComma(u.parenR, !0))
                  ) {
                    ue = !0;
                    break;
                  } else if (this.type === u.ellipsis) {
                    (Lt = this.start),
                      U.push(this.parseParenItem(this.parseRestBinding())),
                      this.type === u.comma &&
                        this.raiseRecoverable(
                          this.start,
                          "Comma is not permitted after the rest element"
                        );
                    break;
                  } else
                    U.push(this.parseMaybeAssign(!1, Ne, this.parseParenItem));
                var mi = this.lastTokEnd,
                  Rt = this.lastTokEndLoc;
                if (
                  (this.expect(u.parenR),
                  t && this.shouldParseArrow(U) && this.eat(u.arrow))
                )
                  return (
                    this.checkPatternErrors(Ne, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    (this.yieldPos = bt),
                    (this.awaitPos = Gt),
                    this.parseParenArrowList(h, p, U, n)
                  );
                (!U.length || ue) && this.unexpected(this.lastTokStart),
                  Lt && this.unexpected(Lt),
                  this.checkExpressionErrors(Ne, !0),
                  (this.yieldPos = bt || this.yieldPos),
                  (this.awaitPos = Gt || this.awaitPos),
                  U.length > 1
                    ? ((S = this.startNodeAt(L, j)),
                      (S.expressions = U),
                      this.finishNodeAt(S, "SequenceExpression", mi, Rt))
                    : (S = U[0]);
              } else S = this.parseParenExpression();
              if (this.options.preserveParens) {
                var Ot = this.startNodeAt(h, p);
                return (
                  (Ot.expression = S),
                  this.finishNode(Ot, "ParenthesizedExpression")
                );
              } else return S;
            }),
            (ee.parseParenItem = function (t) {
              return t;
            }),
            (ee.parseParenArrowList = function (t, n, h, p) {
              return this.parseArrowExpression(
                this.startNodeAt(t, n),
                h,
                !1,
                p
              );
            });
          var d = [];
          (ee.parseNew = function () {
            this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                "Escape sequence in keyword new"
              );
            var t = this.startNode();
            if (
              (this.next(),
              this.options.ecmaVersion >= 6 && this.type === u.dot)
            ) {
              var n = this.startNodeAt(t.start, t.startLoc);
              (n.name = "new"),
                (t.meta = this.finishNode(n, "Identifier")),
                this.next();
              var h = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== "target" &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for new is 'new.target'"
                  ),
                h &&
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' must not contain escaped characters"
                  ),
                this.allowNewDotTarget ||
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' can only be used in functions and class static block"
                  ),
                this.finishNode(t, "MetaProperty")
              );
            }
            var p = this.start,
              S = this.startLoc;
            return (
              (t.callee = this.parseSubscripts(
                this.parseExprAtom(null, !1, !0),
                p,
                S,
                !0,
                !1
              )),
              this.eat(u.parenL)
                ? (t.arguments = this.parseExprList(
                    u.parenR,
                    this.options.ecmaVersion >= 8,
                    !1
                  ))
                : (t.arguments = d),
              this.finishNode(t, "NewExpression")
            );
          }),
            (ee.parseTemplateElement = function (t) {
              var n = t.isTagged,
                h = this.startNode();
              return (
                this.type === u.invalidTemplate
                  ? (n ||
                      this.raiseRecoverable(
                        this.start,
                        "Bad escape sequence in untagged template literal"
                      ),
                    (h.value = { raw: this.value, cooked: null }))
                  : (h.value = {
                      raw: this.input.slice(this.start, this.end).replace(
                        /\r\n?/g,
                        `
`
                      ),
                      cooked: this.value,
                    }),
                this.next(),
                (h.tail = this.type === u.backQuote),
                this.finishNode(h, "TemplateElement")
              );
            }),
            (ee.parseTemplate = function (t) {
              t === void 0 && (t = {});
              var n = t.isTagged;
              n === void 0 && (n = !1);
              var h = this.startNode();
              this.next(), (h.expressions = []);
              var p = this.parseTemplateElement({ isTagged: n });
              for (h.quasis = [p]; !p.tail; )
                this.type === u.eof &&
                  this.raise(this.pos, "Unterminated template literal"),
                  this.expect(u.dollarBraceL),
                  h.expressions.push(this.parseExpression()),
                  this.expect(u.braceR),
                  h.quasis.push(
                    (p = this.parseTemplateElement({ isTagged: n }))
                  );
              return this.next(), this.finishNode(h, "TemplateLiteral");
            }),
            (ee.isAsyncProp = function (t) {
              return (
                !t.computed &&
                t.key.type === "Identifier" &&
                t.key.name === "async" &&
                (this.type === u.name ||
                  this.type === u.num ||
                  this.type === u.string ||
                  this.type === u.bracketL ||
                  this.type.keyword ||
                  (this.options.ecmaVersion >= 9 && this.type === u.star)) &&
                !w.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (ee.parseObj = function (t, n) {
              var h = this.startNode(),
                p = !0,
                S = {};
              for (h.properties = [], this.next(); !this.eat(u.braceR); ) {
                if (p) p = !1;
                else if (
                  (this.expect(u.comma),
                  this.options.ecmaVersion >= 5 &&
                    this.afterTrailingComma(u.braceR))
                )
                  break;
                var I = this.parseProperty(t, n);
                t || this.checkPropClash(I, S, n), h.properties.push(I);
              }
              return this.finishNode(
                h,
                t ? "ObjectPattern" : "ObjectExpression"
              );
            }),
            (ee.parseProperty = function (t, n) {
              var h = this.startNode(),
                p,
                S,
                I,
                L;
              if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
                return t
                  ? ((h.argument = this.parseIdent(!1)),
                    this.type === u.comma &&
                      this.raiseRecoverable(
                        this.start,
                        "Comma is not permitted after the rest element"
                      ),
                    this.finishNode(h, "RestElement"))
                  : ((h.argument = this.parseMaybeAssign(!1, n)),
                    this.type === u.comma &&
                      n &&
                      n.trailingComma < 0 &&
                      (n.trailingComma = this.start),
                    this.finishNode(h, "SpreadElement"));
              this.options.ecmaVersion >= 6 &&
                ((h.method = !1),
                (h.shorthand = !1),
                (t || n) && ((I = this.start), (L = this.startLoc)),
                t || (p = this.eat(u.star)));
              var j = this.containsEsc;
              return (
                this.parsePropertyName(h),
                !t &&
                !j &&
                this.options.ecmaVersion >= 8 &&
                !p &&
                this.isAsyncProp(h)
                  ? ((S = !0),
                    (p = this.options.ecmaVersion >= 9 && this.eat(u.star)),
                    this.parsePropertyName(h))
                  : (S = !1),
                this.parsePropertyValue(h, t, p, S, I, L, n, j),
                this.finishNode(h, "Property")
              );
            }),
            (ee.parseGetterSetter = function (t) {
              (t.kind = t.key.name),
                this.parsePropertyName(t),
                (t.value = this.parseMethod(!1));
              var n = t.kind === "get" ? 0 : 1;
              if (t.value.params.length !== n) {
                var h = t.value.start;
                t.kind === "get"
                  ? this.raiseRecoverable(h, "getter should have no params")
                  : this.raiseRecoverable(
                      h,
                      "setter should have exactly one param"
                    );
              } else
                t.kind === "set" &&
                  t.value.params[0].type === "RestElement" &&
                  this.raiseRecoverable(
                    t.value.params[0].start,
                    "Setter cannot use rest params"
                  );
            }),
            (ee.parsePropertyValue = function (t, n, h, p, S, I, L, j) {
              (h || p) && this.type === u.colon && this.unexpected(),
                this.eat(u.colon)
                  ? ((t.value = n
                      ? this.parseMaybeDefault(this.start, this.startLoc)
                      : this.parseMaybeAssign(!1, L)),
                    (t.kind = "init"))
                  : this.options.ecmaVersion >= 6 && this.type === u.parenL
                  ? (n && this.unexpected(),
                    (t.kind = "init"),
                    (t.method = !0),
                    (t.value = this.parseMethod(h, p)))
                  : !n &&
                    !j &&
                    this.options.ecmaVersion >= 5 &&
                    !t.computed &&
                    t.key.type === "Identifier" &&
                    (t.key.name === "get" || t.key.name === "set") &&
                    this.type !== u.comma &&
                    this.type !== u.braceR &&
                    this.type !== u.eq
                  ? ((h || p) && this.unexpected(), this.parseGetterSetter(t))
                  : this.options.ecmaVersion >= 6 &&
                    !t.computed &&
                    t.key.type === "Identifier"
                  ? ((h || p) && this.unexpected(),
                    this.checkUnreserved(t.key),
                    t.key.name === "await" &&
                      !this.awaitIdentPos &&
                      (this.awaitIdentPos = S),
                    (t.kind = "init"),
                    n
                      ? (t.value = this.parseMaybeDefault(
                          S,
                          I,
                          this.copyNode(t.key)
                        ))
                      : this.type === u.eq && L
                      ? (L.shorthandAssign < 0 &&
                          (L.shorthandAssign = this.start),
                        (t.value = this.parseMaybeDefault(
                          S,
                          I,
                          this.copyNode(t.key)
                        )))
                      : (t.value = this.copyNode(t.key)),
                    (t.shorthand = !0))
                  : this.unexpected();
            }),
            (ee.parsePropertyName = function (t) {
              if (this.options.ecmaVersion >= 6) {
                if (this.eat(u.bracketL))
                  return (
                    (t.computed = !0),
                    (t.key = this.parseMaybeAssign()),
                    this.expect(u.bracketR),
                    t.key
                  );
                t.computed = !1;
              }
              return (t.key =
                this.type === u.num || this.type === u.string
                  ? this.parseExprAtom()
                  : this.parseIdent(this.options.allowReserved !== "never"));
            }),
            (ee.initFunction = function (t) {
              (t.id = null),
                this.options.ecmaVersion >= 6 &&
                  (t.generator = t.expression = !1),
                this.options.ecmaVersion >= 8 && (t.async = !1);
            }),
            (ee.parseMethod = function (t, n, h) {
              var p = this.startNode(),
                S = this.yieldPos,
                I = this.awaitPos,
                L = this.awaitIdentPos;
              return (
                this.initFunction(p),
                this.options.ecmaVersion >= 6 && (p.generator = t),
                this.options.ecmaVersion >= 8 && (p.async = !!n),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                this.enterScope(jt(n, p.generator) | At | (h ? vt : 0)),
                this.expect(u.parenL),
                (p.params = this.parseBindingList(
                  u.parenR,
                  !1,
                  this.options.ecmaVersion >= 8
                )),
                this.checkYieldAwaitInDefaultParams(),
                this.parseFunctionBody(p, !1, !0, !1),
                (this.yieldPos = S),
                (this.awaitPos = I),
                (this.awaitIdentPos = L),
                this.finishNode(p, "FunctionExpression")
              );
            }),
            (ee.parseArrowExpression = function (t, n, h, p) {
              var S = this.yieldPos,
                I = this.awaitPos,
                L = this.awaitIdentPos;
              return (
                this.enterScope(jt(h, !1) | oi),
                this.initFunction(t),
                this.options.ecmaVersion >= 8 && (t.async = !!h),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                (t.params = this.toAssignableList(n, !0)),
                this.parseFunctionBody(t, !0, !1, p),
                (this.yieldPos = S),
                (this.awaitPos = I),
                (this.awaitIdentPos = L),
                this.finishNode(t, "ArrowFunctionExpression")
              );
            }),
            (ee.parseFunctionBody = function (t, n, h, p) {
              var S = n && this.type !== u.braceL,
                I = this.strict,
                L = !1;
              if (S)
                (t.body = this.parseMaybeAssign(p)),
                  (t.expression = !0),
                  this.checkParams(t, !1);
              else {
                var j =
                  this.options.ecmaVersion >= 7 &&
                  !this.isSimpleParamList(t.params);
                (!I || j) &&
                  ((L = this.strictDirective(this.end)),
                  L &&
                    j &&
                    this.raiseRecoverable(
                      t.start,
                      "Illegal 'use strict' directive in function with non-simple parameter list"
                    ));
                var U = this.labels;
                (this.labels = []),
                  L && (this.strict = !0),
                  this.checkParams(
                    t,
                    !I && !L && !n && !h && this.isSimpleParamList(t.params)
                  ),
                  this.strict && t.id && this.checkLValSimple(t.id, fe),
                  (t.body = this.parseBlock(!1, void 0, L && !I)),
                  (t.expression = !1),
                  this.adaptDirectivePrologue(t.body.body),
                  (this.labels = U);
              }
              this.exitScope();
            }),
            (ee.isSimpleParamList = function (t) {
              for (var n = 0, h = t; n < h.length; n += 1) {
                var p = h[n];
                if (p.type !== "Identifier") return !1;
              }
              return !0;
            }),
            (ee.checkParams = function (t, n) {
              for (
                var h = Object.create(null), p = 0, S = t.params;
                p < S.length;
                p += 1
              ) {
                var I = S[p];
                this.checkLValInnerPattern(I, qt, n ? null : h);
              }
            }),
            (ee.parseExprList = function (t, n, h, p) {
              for (var S = [], I = !0; !this.eat(t); ) {
                if (I) I = !1;
                else if (
                  (this.expect(u.comma), n && this.afterTrailingComma(t))
                )
                  break;
                var L = void 0;
                h && this.type === u.comma
                  ? (L = null)
                  : this.type === u.ellipsis
                  ? ((L = this.parseSpread(p)),
                    p &&
                      this.type === u.comma &&
                      p.trailingComma < 0 &&
                      (p.trailingComma = this.start))
                  : (L = this.parseMaybeAssign(!1, p)),
                  S.push(L);
              }
              return S;
            }),
            (ee.checkUnreserved = function (t) {
              var n = t.start,
                h = t.end,
                p = t.name;
              if (
                (this.inGenerator &&
                  p === "yield" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'yield' as identifier inside a generator"
                  ),
                this.inAsync &&
                  p === "await" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'await' as identifier inside an async function"
                  ),
                this.currentThisScope().inClassFieldInit &&
                  p === "arguments" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'arguments' in class field initializer"
                  ),
                this.inClassStaticBlock &&
                  (p === "arguments" || p === "await") &&
                  this.raise(
                    n,
                    "Cannot use " + p + " in class static initialization block"
                  ),
                this.keywords.test(p) &&
                  this.raise(n, "Unexpected keyword '" + p + "'"),
                !(
                  this.options.ecmaVersion < 6 &&
                  this.input.slice(n, h).indexOf("\\") !== -1
                ))
              ) {
                var S = this.strict
                  ? this.reservedWordsStrict
                  : this.reservedWords;
                S.test(p) &&
                  (!this.inAsync &&
                    p === "await" &&
                    this.raiseRecoverable(
                      n,
                      "Cannot use keyword 'await' outside an async function"
                    ),
                  this.raiseRecoverable(
                    n,
                    "The keyword '" + p + "' is reserved"
                  ));
              }
            }),
            (ee.parseIdent = function (t) {
              var n = this.parseIdentNode();
              return (
                this.next(!!t),
                this.finishNode(n, "Identifier"),
                t ||
                  (this.checkUnreserved(n),
                  n.name === "await" &&
                    !this.awaitIdentPos &&
                    (this.awaitIdentPos = n.start)),
                n
              );
            }),
            (ee.parseIdentNode = function () {
              var t = this.startNode();
              return (
                this.type === u.name
                  ? (t.name = this.value)
                  : this.type.keyword
                  ? ((t.name = this.type.keyword),
                    (t.name === "class" || t.name === "function") &&
                      (this.lastTokEnd !== this.lastTokStart + 1 ||
                        this.input.charCodeAt(this.lastTokStart) !== 46) &&
                      this.context.pop(),
                    (this.type = u.name))
                  : this.unexpected(),
                t
              );
            }),
            (ee.parsePrivateIdent = function () {
              var t = this.startNode();
              return (
                this.type === u.privateId
                  ? (t.name = this.value)
                  : this.unexpected(),
                this.next(),
                this.finishNode(t, "PrivateIdentifier"),
                this.options.checkPrivateFields &&
                  (this.privateNameStack.length === 0
                    ? this.raise(
                        t.start,
                        "Private field '#" +
                          t.name +
                          "' must be declared in an enclosing class"
                      )
                    : this.privateNameStack[
                        this.privateNameStack.length - 1
                      ].used.push(t)),
                t
              );
            }),
            (ee.parseYield = function (t) {
              this.yieldPos || (this.yieldPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                this.type === u.semi ||
                this.canInsertSemicolon() ||
                (this.type !== u.star && !this.type.startsExpr)
                  ? ((n.delegate = !1), (n.argument = null))
                  : ((n.delegate = this.eat(u.star)),
                    (n.argument = this.parseMaybeAssign(t))),
                this.finishNode(n, "YieldExpression")
              );
            }),
            (ee.parseAwait = function (t) {
              this.awaitPos || (this.awaitPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeUnary(null, !0, !1, t)),
                this.finishNode(n, "AwaitExpression")
              );
            });
          var c = re.prototype;
          (c.raise = function (t, n) {
            var h = ht(this.input, t);
            n += " (" + h.line + ":" + h.column + ")";
            var p = new SyntaxError(n);
            throw ((p.pos = t), (p.loc = h), (p.raisedAt = this.pos), p);
          }),
            (c.raiseRecoverable = c.raise),
            (c.curPosition = function () {
              if (this.options.locations)
                return new W(this.curLine, this.pos - this.lineStart);
            });
          var f = re.prototype,
            b = function (n) {
              (this.flags = n),
                (this.var = []),
                (this.lexical = []),
                (this.functions = []),
                (this.inClassFieldInit = !1);
            };
          (f.enterScope = function (t) {
            this.scopeStack.push(new b(t));
          }),
            (f.exitScope = function () {
              this.scopeStack.pop();
            }),
            (f.treatFunctionsAsVarInScope = function (t) {
              return t.flags & lt || (!this.inModule && t.flags & xt);
            }),
            (f.declareName = function (t, n, h) {
              var p = !1;
              if (n === Ke) {
                var S = this.currentScope();
                (p =
                  S.lexical.indexOf(t) > -1 ||
                  S.functions.indexOf(t) > -1 ||
                  S.var.indexOf(t) > -1),
                  S.lexical.push(t),
                  this.inModule &&
                    S.flags & xt &&
                    delete this.undefinedExports[t];
              } else if (n === Ut) {
                var I = this.currentScope();
                I.lexical.push(t);
              } else if (n === ui) {
                var L = this.currentScope();
                this.treatFunctionsAsVar
                  ? (p = L.lexical.indexOf(t) > -1)
                  : (p = L.lexical.indexOf(t) > -1 || L.var.indexOf(t) > -1),
                  L.functions.push(t);
              } else
                for (var j = this.scopeStack.length - 1; j >= 0; --j) {
                  var U = this.scopeStack[j];
                  if (
                    (U.lexical.indexOf(t) > -1 &&
                      !(U.flags & Pe && U.lexical[0] === t)) ||
                    (!this.treatFunctionsAsVarInScope(U) &&
                      U.functions.indexOf(t) > -1)
                  ) {
                    p = !0;
                    break;
                  }
                  if (
                    (U.var.push(t),
                    this.inModule &&
                      U.flags & xt &&
                      delete this.undefinedExports[t],
                    U.flags & It)
                  )
                    break;
                }
              p &&
                this.raiseRecoverable(
                  h,
                  "Identifier '" + t + "' has already been declared"
                );
            }),
            (f.checkLocalExport = function (t) {
              this.scopeStack[0].lexical.indexOf(t.name) === -1 &&
                this.scopeStack[0].var.indexOf(t.name) === -1 &&
                (this.undefinedExports[t.name] = t);
            }),
            (f.currentScope = function () {
              return this.scopeStack[this.scopeStack.length - 1];
            }),
            (f.currentVarScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & It) return n;
              }
            }),
            (f.currentThisScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & It && !(n.flags & oi)) return n;
              }
            });
          var R = function (n, h, p) {
              (this.type = ""),
                (this.start = h),
                (this.end = 0),
                n.options.locations && (this.loc = new Me(n, p)),
                n.options.directSourceFile &&
                  (this.sourceFile = n.options.directSourceFile),
                n.options.ranges && (this.range = [h, 0]);
            },
            F = re.prototype;
          (F.startNode = function () {
            return new R(this, this.start, this.startLoc);
          }),
            (F.startNodeAt = function (t, n) {
              return new R(this, t, n);
            });
          function B(t, n, h, p) {
            return (
              (t.type = n),
              (t.end = h),
              this.options.locations && (t.loc.end = p),
              this.options.ranges && (t.range[1] = h),
              t
            );
          }
          (F.finishNode = function (t, n) {
            return B.call(this, t, n, this.lastTokEnd, this.lastTokEndLoc);
          }),
            (F.finishNodeAt = function (t, n, h, p) {
              return B.call(this, t, n, h, p);
            }),
            (F.copyNode = function (t) {
              var n = new R(this, t.start, this.startLoc);
              for (var h in t) n[h] = t[h];
              return n;
            });
          var Q =
              "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
            ae = Q + " Extended_Pictographic",
            ke = ae,
            Ze = ke + " EBase EComp EMod EPres ExtPict",
            it = Ze,
            ci = it,
            pi = { 9: Q, 10: ae, 11: ke, 12: Ze, 13: it, 14: ci },
            Ge =
              "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji",
            Bs = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: Ge },
            Ar =
              "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
            Ir =
              "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
            Pr =
              Ir +
              " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
            Tr =
              Pr +
              " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
            Nr =
              Tr +
              " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
            Lr =
              Nr +
              " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
            Ms =
              Lr +
              " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz",
            Ds = { 9: Ir, 10: Pr, 11: Tr, 12: Nr, 13: Lr, 14: Ms },
            Rr = {};
          function js(t) {
            var n = (Rr[t] = {
              binary: Ae(pi[t] + " " + Ar),
              binaryOfStrings: Ae(Bs[t]),
              nonBinary: { General_Category: Ae(Ar), Script: Ae(Ds[t]) },
            });
            (n.nonBinary.Script_Extensions = n.nonBinary.Script),
              (n.nonBinary.gc = n.nonBinary.General_Category),
              (n.nonBinary.sc = n.nonBinary.Script),
              (n.nonBinary.scx = n.nonBinary.Script_Extensions);
          }
          for (
            var Gi = 0, Or = [9, 10, 11, 12, 13, 14];
            Gi < Or.length;
            Gi += 1
          ) {
            var qs = Or[Gi];
            js(qs);
          }
          var J = re.prototype,
            et = function (n) {
              (this.parser = n),
                (this.validFlags =
                  "gim" +
                  (n.options.ecmaVersion >= 6 ? "uy" : "") +
                  (n.options.ecmaVersion >= 9 ? "s" : "") +
                  (n.options.ecmaVersion >= 13 ? "d" : "") +
                  (n.options.ecmaVersion >= 15 ? "v" : "")),
                (this.unicodeProperties =
                  Rr[n.options.ecmaVersion >= 14 ? 14 : n.options.ecmaVersion]),
                (this.source = ""),
                (this.flags = ""),
                (this.start = 0),
                (this.switchU = !1),
                (this.switchV = !1),
                (this.switchN = !1),
                (this.pos = 0),
                (this.lastIntValue = 0),
                (this.lastStringValue = ""),
                (this.lastAssertionIsQuantifiable = !1),
                (this.numCapturingParens = 0),
                (this.maxBackReference = 0),
                (this.groupNames = []),
                (this.backReferenceNames = []);
            };
          (et.prototype.reset = function (n, h, p) {
            var S = p.indexOf("v") !== -1,
              I = p.indexOf("u") !== -1;
            (this.start = n | 0),
              (this.source = h + ""),
              (this.flags = p),
              S && this.parser.options.ecmaVersion >= 15
                ? ((this.switchU = !0),
                  (this.switchV = !0),
                  (this.switchN = !0))
                : ((this.switchU = I && this.parser.options.ecmaVersion >= 6),
                  (this.switchV = !1),
                  (this.switchN = I && this.parser.options.ecmaVersion >= 9));
          }),
            (et.prototype.raise = function (n) {
              this.parser.raiseRecoverable(
                this.start,
                "Invalid regular expression: /" + this.source + "/: " + n
              );
            }),
            (et.prototype.at = function (n, h) {
              h === void 0 && (h = !1);
              var p = this.source,
                S = p.length;
              if (n >= S) return -1;
              var I = p.charCodeAt(n);
              if (
                !(h || this.switchU) ||
                I <= 55295 ||
                I >= 57344 ||
                n + 1 >= S
              )
                return I;
              var L = p.charCodeAt(n + 1);
              return L >= 56320 && L <= 57343 ? (I << 10) + L - 56613888 : I;
            }),
            (et.prototype.nextIndex = function (n, h) {
              h === void 0 && (h = !1);
              var p = this.source,
                S = p.length;
              if (n >= S) return S;
              var I = p.charCodeAt(n),
                L;
              return !(h || this.switchU) ||
                I <= 55295 ||
                I >= 57344 ||
                n + 1 >= S ||
                (L = p.charCodeAt(n + 1)) < 56320 ||
                L > 57343
                ? n + 1
                : n + 2;
            }),
            (et.prototype.current = function (n) {
              return n === void 0 && (n = !1), this.at(this.pos, n);
            }),
            (et.prototype.lookahead = function (n) {
              return (
                n === void 0 && (n = !1),
                this.at(this.nextIndex(this.pos, n), n)
              );
            }),
            (et.prototype.advance = function (n) {
              n === void 0 && (n = !1),
                (this.pos = this.nextIndex(this.pos, n));
            }),
            (et.prototype.eat = function (n, h) {
              return (
                h === void 0 && (h = !1),
                this.current(h) === n ? (this.advance(h), !0) : !1
              );
            }),
            (et.prototype.eatChars = function (n, h) {
              h === void 0 && (h = !1);
              for (var p = this.pos, S = 0, I = n; S < I.length; S += 1) {
                var L = I[S],
                  j = this.at(p, h);
                if (j === -1 || j !== L) return !1;
                p = this.nextIndex(p, h);
              }
              return (this.pos = p), !0;
            }),
            (J.validateRegExpFlags = function (t) {
              for (
                var n = t.validFlags, h = t.flags, p = !1, S = !1, I = 0;
                I < h.length;
                I++
              ) {
                var L = h.charAt(I);
                n.indexOf(L) === -1 &&
                  this.raise(t.start, "Invalid regular expression flag"),
                  h.indexOf(L, I + 1) > -1 &&
                    this.raise(t.start, "Duplicate regular expression flag"),
                  L === "u" && (p = !0),
                  L === "v" && (S = !0);
              }
              this.options.ecmaVersion >= 15 &&
                p &&
                S &&
                this.raise(t.start, "Invalid regular expression flag");
            }),
            (J.validateRegExpPattern = function (t) {
              this.regexp_pattern(t),
                !t.switchN &&
                  this.options.ecmaVersion >= 9 &&
                  t.groupNames.length > 0 &&
                  ((t.switchN = !0), this.regexp_pattern(t));
            }),
            (J.regexp_pattern = function (t) {
              (t.pos = 0),
                (t.lastIntValue = 0),
                (t.lastStringValue = ""),
                (t.lastAssertionIsQuantifiable = !1),
                (t.numCapturingParens = 0),
                (t.maxBackReference = 0),
                (t.groupNames.length = 0),
                (t.backReferenceNames.length = 0),
                this.regexp_disjunction(t),
                t.pos !== t.source.length &&
                  (t.eat(41) && t.raise("Unmatched ')'"),
                  (t.eat(93) || t.eat(125)) &&
                    t.raise("Lone quantifier brackets")),
                t.maxBackReference > t.numCapturingParens &&
                  t.raise("Invalid escape");
              for (var n = 0, h = t.backReferenceNames; n < h.length; n += 1) {
                var p = h[n];
                t.groupNames.indexOf(p) === -1 &&
                  t.raise("Invalid named capture referenced");
              }
            }),
            (J.regexp_disjunction = function (t) {
              for (this.regexp_alternative(t); t.eat(124); )
                this.regexp_alternative(t);
              this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
                t.eat(123) && t.raise("Lone quantifier brackets");
            }),
            (J.regexp_alternative = function (t) {
              for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
            }),
            (J.regexp_eatTerm = function (t) {
              return this.regexp_eatAssertion(t)
                ? (t.lastAssertionIsQuantifiable &&
                    this.regexp_eatQuantifier(t) &&
                    t.switchU &&
                    t.raise("Invalid quantifier"),
                  !0)
                : (
                    t.switchU
                      ? this.regexp_eatAtom(t)
                      : this.regexp_eatExtendedAtom(t)
                  )
                ? (this.regexp_eatQuantifier(t), !0)
                : !1;
            }),
            (J.regexp_eatAssertion = function (t) {
              var n = t.pos;
              if (
                ((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))
              )
                return !0;
              if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = n;
              }
              if (t.eat(40) && t.eat(63)) {
                var h = !1;
                if (
                  (this.options.ecmaVersion >= 9 && (h = t.eat(60)),
                  t.eat(61) || t.eat(33))
                )
                  return (
                    this.regexp_disjunction(t),
                    t.eat(41) || t.raise("Unterminated group"),
                    (t.lastAssertionIsQuantifiable = !h),
                    !0
                  );
              }
              return (t.pos = n), !1;
            }),
            (J.regexp_eatQuantifier = function (t, n) {
              return (
                n === void 0 && (n = !1),
                this.regexp_eatQuantifierPrefix(t, n) ? (t.eat(63), !0) : !1
              );
            }),
            (J.regexp_eatQuantifierPrefix = function (t, n) {
              return (
                t.eat(42) ||
                t.eat(43) ||
                t.eat(63) ||
                this.regexp_eatBracedQuantifier(t, n)
              );
            }),
            (J.regexp_eatBracedQuantifier = function (t, n) {
              var h = t.pos;
              if (t.eat(123)) {
                var p = 0,
                  S = -1;
                if (
                  this.regexp_eatDecimalDigits(t) &&
                  ((p = t.lastIntValue),
                  t.eat(44) &&
                    this.regexp_eatDecimalDigits(t) &&
                    (S = t.lastIntValue),
                  t.eat(125))
                )
                  return (
                    S !== -1 &&
                      S < p &&
                      !n &&
                      t.raise("numbers out of order in {} quantifier"),
                    !0
                  );
                t.switchU && !n && t.raise("Incomplete quantifier"),
                  (t.pos = h);
              }
              return !1;
            }),
            (J.regexp_eatAtom = function (t) {
              return (
                this.regexp_eatPatternCharacters(t) ||
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t)
              );
            }),
            (J.regexp_eatReverseSolidusAtomEscape = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (J.regexp_eatUncapturingGroup = function (t) {
              var n = t.pos;
              if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                  if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                  t.raise("Unterminated group");
                }
                t.pos = n;
              }
              return !1;
            }),
            (J.regexp_eatCapturingGroup = function (t) {
              if (t.eat(40)) {
                if (
                  (this.options.ecmaVersion >= 9
                    ? this.regexp_groupSpecifier(t)
                    : t.current() === 63 && t.raise("Invalid group"),
                  this.regexp_disjunction(t),
                  t.eat(41))
                )
                  return (t.numCapturingParens += 1), !0;
                t.raise("Unterminated group");
              }
              return !1;
            }),
            (J.regexp_eatExtendedAtom = function (t) {
              return (
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t) ||
                this.regexp_eatInvalidBracedQuantifier(t) ||
                this.regexp_eatExtendedPatternCharacter(t)
              );
            }),
            (J.regexp_eatInvalidBracedQuantifier = function (t) {
              return (
                this.regexp_eatBracedQuantifier(t, !0) &&
                  t.raise("Nothing to repeat"),
                !1
              );
            }),
            (J.regexp_eatSyntaxCharacter = function (t) {
              var n = t.current();
              return Vr(n) ? ((t.lastIntValue = n), t.advance(), !0) : !1;
            });
          function Vr(t) {
            return (
              t === 36 ||
              (t >= 40 && t <= 43) ||
              t === 46 ||
              t === 63 ||
              (t >= 91 && t <= 94) ||
              (t >= 123 && t <= 125)
            );
          }
          (J.regexp_eatPatternCharacters = function (t) {
            for (var n = t.pos, h = 0; (h = t.current()) !== -1 && !Vr(h); )
              t.advance();
            return t.pos !== n;
          }),
            (J.regexp_eatExtendedPatternCharacter = function (t) {
              var n = t.current();
              return n !== -1 &&
                n !== 36 &&
                !(n >= 40 && n <= 43) &&
                n !== 46 &&
                n !== 63 &&
                n !== 91 &&
                n !== 94 &&
                n !== 124
                ? (t.advance(), !0)
                : !1;
            }),
            (J.regexp_groupSpecifier = function (t) {
              if (t.eat(63)) {
                if (this.regexp_eatGroupName(t)) {
                  t.groupNames.indexOf(t.lastStringValue) !== -1 &&
                    t.raise("Duplicate capture group name"),
                    t.groupNames.push(t.lastStringValue);
                  return;
                }
                t.raise("Invalid group");
              }
            }),
            (J.regexp_eatGroupName = function (t) {
              if (((t.lastStringValue = ""), t.eat(60))) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62))
                  return !0;
                t.raise("Invalid capture group name");
              }
              return !1;
            }),
            (J.regexp_eatRegExpIdentifierName = function (t) {
              if (
                ((t.lastStringValue = ""),
                this.regexp_eatRegExpIdentifierStart(t))
              ) {
                for (
                  t.lastStringValue += Le(t.lastIntValue);
                  this.regexp_eatRegExpIdentifierPart(t);

                )
                  t.lastStringValue += Le(t.lastIntValue);
                return !0;
              }
              return !1;
            }),
            (J.regexp_eatRegExpIdentifierStart = function (t) {
              var n = t.pos,
                h = this.options.ecmaVersion >= 11,
                p = t.current(h);
              return (
                t.advance(h),
                p === 92 &&
                  this.regexp_eatRegExpUnicodeEscapeSequence(t, h) &&
                  (p = t.lastIntValue),
                Us(p) ? ((t.lastIntValue = p), !0) : ((t.pos = n), !1)
              );
            });
          function Us(t) {
            return T(t, !0) || t === 36 || t === 95;
          }
          J.regexp_eatRegExpIdentifierPart = function (t) {
            var n = t.pos,
              h = this.options.ecmaVersion >= 11,
              p = t.current(h);
            return (
              t.advance(h),
              p === 92 &&
                this.regexp_eatRegExpUnicodeEscapeSequence(t, h) &&
                (p = t.lastIntValue),
              Gs(p) ? ((t.lastIntValue = p), !0) : ((t.pos = n), !1)
            );
          };
          function Gs(t) {
            return E(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
          }
          (J.regexp_eatAtomEscape = function (t) {
            return this.regexp_eatBackReference(t) ||
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t) ||
              (t.switchN && this.regexp_eatKGroupName(t))
              ? !0
              : (t.switchU &&
                  (t.current() === 99 && t.raise("Invalid unicode escape"),
                  t.raise("Invalid escape")),
                !1);
          }),
            (J.regexp_eatBackReference = function (t) {
              var n = t.pos;
              if (this.regexp_eatDecimalEscape(t)) {
                var h = t.lastIntValue;
                if (t.switchU)
                  return h > t.maxBackReference && (t.maxBackReference = h), !0;
                if (h <= t.numCapturingParens) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (J.regexp_eatKGroupName = function (t) {
              if (t.eat(107)) {
                if (this.regexp_eatGroupName(t))
                  return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise("Invalid named reference");
              }
              return !1;
            }),
            (J.regexp_eatCharacterEscape = function (t) {
              return (
                this.regexp_eatControlEscape(t) ||
                this.regexp_eatCControlLetter(t) ||
                this.regexp_eatZero(t) ||
                this.regexp_eatHexEscapeSequence(t) ||
                this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) ||
                (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
                this.regexp_eatIdentityEscape(t)
              );
            }),
            (J.regexp_eatCControlLetter = function (t) {
              var n = t.pos;
              if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (J.regexp_eatZero = function (t) {
              return t.current() === 48 && !fi(t.lookahead())
                ? ((t.lastIntValue = 0), t.advance(), !0)
                : !1;
            }),
            (J.regexp_eatControlEscape = function (t) {
              var n = t.current();
              return n === 116
                ? ((t.lastIntValue = 9), t.advance(), !0)
                : n === 110
                ? ((t.lastIntValue = 10), t.advance(), !0)
                : n === 118
                ? ((t.lastIntValue = 11), t.advance(), !0)
                : n === 102
                ? ((t.lastIntValue = 12), t.advance(), !0)
                : n === 114
                ? ((t.lastIntValue = 13), t.advance(), !0)
                : !1;
            }),
            (J.regexp_eatControlLetter = function (t) {
              var n = t.current();
              return Fr(n) ? ((t.lastIntValue = n % 32), t.advance(), !0) : !1;
            });
          function Fr(t) {
            return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
          }
          J.regexp_eatRegExpUnicodeEscapeSequence = function (t, n) {
            n === void 0 && (n = !1);
            var h = t.pos,
              p = n || t.switchU;
            if (t.eat(117)) {
              if (this.regexp_eatFixedHexDigits(t, 4)) {
                var S = t.lastIntValue;
                if (p && S >= 55296 && S <= 56319) {
                  var I = t.pos;
                  if (
                    t.eat(92) &&
                    t.eat(117) &&
                    this.regexp_eatFixedHexDigits(t, 4)
                  ) {
                    var L = t.lastIntValue;
                    if (L >= 56320 && L <= 57343)
                      return (
                        (t.lastIntValue =
                          (S - 55296) * 1024 + (L - 56320) + 65536),
                        !0
                      );
                  }
                  (t.pos = I), (t.lastIntValue = S);
                }
                return !0;
              }
              if (
                p &&
                t.eat(123) &&
                this.regexp_eatHexDigits(t) &&
                t.eat(125) &&
                Ws(t.lastIntValue)
              )
                return !0;
              p && t.raise("Invalid unicode escape"), (t.pos = h);
            }
            return !1;
          };
          function Ws(t) {
            return t >= 0 && t <= 1114111;
          }
          (J.regexp_eatIdentityEscape = function (t) {
            if (t.switchU)
              return this.regexp_eatSyntaxCharacter(t)
                ? !0
                : t.eat(47)
                ? ((t.lastIntValue = 47), !0)
                : !1;
            var n = t.current();
            return n !== 99 && (!t.switchN || n !== 107)
              ? ((t.lastIntValue = n), t.advance(), !0)
              : !1;
          }),
            (J.regexp_eatDecimalEscape = function (t) {
              t.lastIntValue = 0;
              var n = t.current();
              if (n >= 49 && n <= 57) {
                do
                  (t.lastIntValue = 10 * t.lastIntValue + (n - 48)),
                    t.advance();
                while ((n = t.current()) >= 48 && n <= 57);
                return !0;
              }
              return !1;
            });
          var Br = 0,
            rt = 1,
            We = 2;
          J.regexp_eatCharacterClassEscape = function (t) {
            var n = t.current();
            if (zs(n)) return (t.lastIntValue = -1), t.advance(), rt;
            var h = !1;
            if (
              t.switchU &&
              this.options.ecmaVersion >= 9 &&
              ((h = n === 80) || n === 112)
            ) {
              (t.lastIntValue = -1), t.advance();
              var p;
              if (
                t.eat(123) &&
                (p = this.regexp_eatUnicodePropertyValueExpression(t)) &&
                t.eat(125)
              )
                return h && p === We && t.raise("Invalid property name"), p;
              t.raise("Invalid property name");
            }
            return Br;
          };
          function zs(t) {
            return (
              t === 100 ||
              t === 68 ||
              t === 115 ||
              t === 83 ||
              t === 119 ||
              t === 87
            );
          }
          (J.regexp_eatUnicodePropertyValueExpression = function (t) {
            var n = t.pos;
            if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
              var h = t.lastStringValue;
              if (this.regexp_eatUnicodePropertyValue(t)) {
                var p = t.lastStringValue;
                return (
                  this.regexp_validateUnicodePropertyNameAndValue(t, h, p), rt
                );
              }
            }
            if (
              ((t.pos = n), this.regexp_eatLoneUnicodePropertyNameOrValue(t))
            ) {
              var S = t.lastStringValue;
              return this.regexp_validateUnicodePropertyNameOrValue(t, S);
            }
            return Br;
          }),
            (J.regexp_validateUnicodePropertyNameAndValue = function (t, n, h) {
              Se(t.unicodeProperties.nonBinary, n) ||
                t.raise("Invalid property name"),
                t.unicodeProperties.nonBinary[n].test(h) ||
                  t.raise("Invalid property value");
            }),
            (J.regexp_validateUnicodePropertyNameOrValue = function (t, n) {
              if (t.unicodeProperties.binary.test(n)) return rt;
              if (t.switchV && t.unicodeProperties.binaryOfStrings.test(n))
                return We;
              t.raise("Invalid property name");
            }),
            (J.regexp_eatUnicodePropertyName = function (t) {
              var n = 0;
              for (t.lastStringValue = ""; Mr((n = t.current())); )
                (t.lastStringValue += Le(n)), t.advance();
              return t.lastStringValue !== "";
            });
          function Mr(t) {
            return Fr(t) || t === 95;
          }
          J.regexp_eatUnicodePropertyValue = function (t) {
            var n = 0;
            for (t.lastStringValue = ""; Hs((n = t.current())); )
              (t.lastStringValue += Le(n)), t.advance();
            return t.lastStringValue !== "";
          };
          function Hs(t) {
            return Mr(t) || fi(t);
          }
          (J.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
            return this.regexp_eatUnicodePropertyValue(t);
          }),
            (J.regexp_eatCharacterClass = function (t) {
              if (t.eat(91)) {
                var n = t.eat(94),
                  h = this.regexp_classContents(t);
                return (
                  t.eat(93) || t.raise("Unterminated character class"),
                  n &&
                    h === We &&
                    t.raise("Negated character class may contain strings"),
                  !0
                );
              }
              return !1;
            }),
            (J.regexp_classContents = function (t) {
              return t.current() === 93
                ? rt
                : t.switchV
                ? this.regexp_classSetExpression(t)
                : (this.regexp_nonEmptyClassRanges(t), rt);
            }),
            (J.regexp_nonEmptyClassRanges = function (t) {
              for (; this.regexp_eatClassAtom(t); ) {
                var n = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                  var h = t.lastIntValue;
                  t.switchU &&
                    (n === -1 || h === -1) &&
                    t.raise("Invalid character class"),
                    n !== -1 &&
                      h !== -1 &&
                      n > h &&
                      t.raise("Range out of order in character class");
                }
              }
            }),
            (J.regexp_eatClassAtom = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                if (t.switchU) {
                  var h = t.current();
                  (h === 99 || qr(h)) && t.raise("Invalid class escape"),
                    t.raise("Invalid escape");
                }
                t.pos = n;
              }
              var p = t.current();
              return p !== 93 ? ((t.lastIntValue = p), t.advance(), !0) : !1;
            }),
            (J.regexp_eatClassEscape = function (t) {
              var n = t.pos;
              if (t.eat(98)) return (t.lastIntValue = 8), !0;
              if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
              if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = n;
              }
              return (
                this.regexp_eatCharacterClassEscape(t) ||
                this.regexp_eatCharacterEscape(t)
              );
            }),
            (J.regexp_classSetExpression = function (t) {
              var n = rt,
                h;
              if (!this.regexp_eatClassSetRange(t))
                if ((h = this.regexp_eatClassSetOperand(t))) {
                  h === We && (n = We);
                  for (var p = t.pos; t.eatChars([38, 38]); ) {
                    if (
                      t.current() !== 38 &&
                      (h = this.regexp_eatClassSetOperand(t))
                    ) {
                      h !== We && (n = rt);
                      continue;
                    }
                    t.raise("Invalid character in character class");
                  }
                  if (p !== t.pos) return n;
                  for (; t.eatChars([45, 45]); )
                    this.regexp_eatClassSetOperand(t) ||
                      t.raise("Invalid character in character class");
                  if (p !== t.pos) return n;
                } else t.raise("Invalid character in character class");
              for (;;)
                if (!this.regexp_eatClassSetRange(t)) {
                  if (((h = this.regexp_eatClassSetOperand(t)), !h)) return n;
                  h === We && (n = We);
                }
            }),
            (J.regexp_eatClassSetRange = function (t) {
              var n = t.pos;
              if (this.regexp_eatClassSetCharacter(t)) {
                var h = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassSetCharacter(t)) {
                  var p = t.lastIntValue;
                  return (
                    h !== -1 &&
                      p !== -1 &&
                      h > p &&
                      t.raise("Range out of order in character class"),
                    !0
                  );
                }
                t.pos = n;
              }
              return !1;
            }),
            (J.regexp_eatClassSetOperand = function (t) {
              return this.regexp_eatClassSetCharacter(t)
                ? rt
                : this.regexp_eatClassStringDisjunction(t) ||
                    this.regexp_eatNestedClass(t);
            }),
            (J.regexp_eatNestedClass = function (t) {
              var n = t.pos;
              if (t.eat(91)) {
                var h = t.eat(94),
                  p = this.regexp_classContents(t);
                if (t.eat(93))
                  return (
                    h &&
                      p === We &&
                      t.raise("Negated character class may contain strings"),
                    p
                  );
                t.pos = n;
              }
              if (t.eat(92)) {
                var S = this.regexp_eatCharacterClassEscape(t);
                if (S) return S;
                t.pos = n;
              }
              return null;
            }),
            (J.regexp_eatClassStringDisjunction = function (t) {
              var n = t.pos;
              if (t.eatChars([92, 113])) {
                if (t.eat(123)) {
                  var h = this.regexp_classStringDisjunctionContents(t);
                  if (t.eat(125)) return h;
                } else t.raise("Invalid escape");
                t.pos = n;
              }
              return null;
            }),
            (J.regexp_classStringDisjunctionContents = function (t) {
              for (var n = this.regexp_classString(t); t.eat(124); )
                this.regexp_classString(t) === We && (n = We);
              return n;
            }),
            (J.regexp_classString = function (t) {
              for (var n = 0; this.regexp_eatClassSetCharacter(t); ) n++;
              return n === 1 ? rt : We;
            }),
            (J.regexp_eatClassSetCharacter = function (t) {
              var n = t.pos;
              if (t.eat(92))
                return this.regexp_eatCharacterEscape(t) ||
                  this.regexp_eatClassSetReservedPunctuator(t)
                  ? !0
                  : t.eat(98)
                  ? ((t.lastIntValue = 8), !0)
                  : ((t.pos = n), !1);
              var h = t.current();
              return h < 0 || (h === t.lookahead() && Qs(h)) || Xs(h)
                ? !1
                : (t.advance(), (t.lastIntValue = h), !0);
            });
          function Qs(t) {
            return (
              t === 33 ||
              (t >= 35 && t <= 38) ||
              (t >= 42 && t <= 44) ||
              t === 46 ||
              (t >= 58 && t <= 64) ||
              t === 94 ||
              t === 96 ||
              t === 126
            );
          }
          function Xs(t) {
            return (
              t === 40 ||
              t === 41 ||
              t === 45 ||
              t === 47 ||
              (t >= 91 && t <= 93) ||
              (t >= 123 && t <= 125)
            );
          }
          J.regexp_eatClassSetReservedPunctuator = function (t) {
            var n = t.current();
            return Js(n) ? ((t.lastIntValue = n), t.advance(), !0) : !1;
          };
          function Js(t) {
            return (
              t === 33 ||
              t === 35 ||
              t === 37 ||
              t === 38 ||
              t === 44 ||
              t === 45 ||
              (t >= 58 && t <= 62) ||
              t === 64 ||
              t === 96 ||
              t === 126
            );
          }
          (J.regexp_eatClassControlLetter = function (t) {
            var n = t.current();
            return fi(n) || n === 95
              ? ((t.lastIntValue = n % 32), t.advance(), !0)
              : !1;
          }),
            (J.regexp_eatHexEscapeSequence = function (t) {
              var n = t.pos;
              if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise("Invalid escape"), (t.pos = n);
              }
              return !1;
            }),
            (J.regexp_eatDecimalDigits = function (t) {
              var n = t.pos,
                h = 0;
              for (t.lastIntValue = 0; fi((h = t.current())); )
                (t.lastIntValue = 10 * t.lastIntValue + (h - 48)), t.advance();
              return t.pos !== n;
            });
          function fi(t) {
            return t >= 48 && t <= 57;
          }
          J.regexp_eatHexDigits = function (t) {
            var n = t.pos,
              h = 0;
            for (t.lastIntValue = 0; Dr((h = t.current())); )
              (t.lastIntValue = 16 * t.lastIntValue + jr(h)), t.advance();
            return t.pos !== n;
          };
          function Dr(t) {
            return (
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 70) ||
              (t >= 97 && t <= 102)
            );
          }
          function jr(t) {
            return t >= 65 && t <= 70
              ? 10 + (t - 65)
              : t >= 97 && t <= 102
              ? 10 + (t - 97)
              : t - 48;
          }
          (J.regexp_eatLegacyOctalEscapeSequence = function (t) {
            if (this.regexp_eatOctalDigit(t)) {
              var n = t.lastIntValue;
              if (this.regexp_eatOctalDigit(t)) {
                var h = t.lastIntValue;
                n <= 3 && this.regexp_eatOctalDigit(t)
                  ? (t.lastIntValue = n * 64 + h * 8 + t.lastIntValue)
                  : (t.lastIntValue = n * 8 + h);
              } else t.lastIntValue = n;
              return !0;
            }
            return !1;
          }),
            (J.regexp_eatOctalDigit = function (t) {
              var n = t.current();
              return qr(n)
                ? ((t.lastIntValue = n - 48), t.advance(), !0)
                : ((t.lastIntValue = 0), !1);
            });
          function qr(t) {
            return t >= 48 && t <= 55;
          }
          J.regexp_eatFixedHexDigits = function (t, n) {
            var h = t.pos;
            t.lastIntValue = 0;
            for (var p = 0; p < n; ++p) {
              var S = t.current();
              if (!Dr(S)) return (t.pos = h), !1;
              (t.lastIntValue = 16 * t.lastIntValue + jr(S)), t.advance();
            }
            return !0;
          };
          var di = function (n) {
              (this.type = n.type),
                (this.value = n.value),
                (this.start = n.start),
                (this.end = n.end),
                n.options.locations &&
                  (this.loc = new Me(n, n.startLoc, n.endLoc)),
                n.options.ranges && (this.range = [n.start, n.end]);
            },
            le = re.prototype;
          (le.next = function (t) {
            !t &&
              this.type.keyword &&
              this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                "Escape sequence in keyword " + this.type.keyword
              ),
              this.options.onToken && this.options.onToken(new di(this)),
              (this.lastTokEnd = this.end),
              (this.lastTokStart = this.start),
              (this.lastTokEndLoc = this.endLoc),
              (this.lastTokStartLoc = this.startLoc),
              this.nextToken();
          }),
            (le.getToken = function () {
              return this.next(), new di(this);
            }),
            typeof Symbol < "u" &&
              (le[Symbol.iterator] = function () {
                var t = this;
                return {
                  next: function () {
                    var n = t.getToken();
                    return { done: n.type === u.eof, value: n };
                  },
                };
              }),
            (le.nextToken = function () {
              var t = this.curContext();
              if (
                ((!t || !t.preserveSpace) && this.skipSpace(),
                (this.start = this.pos),
                this.options.locations && (this.startLoc = this.curPosition()),
                this.pos >= this.input.length)
              )
                return this.finishToken(u.eof);
              if (t.override) return t.override(this);
              this.readToken(this.fullCharCodeAtPos());
            }),
            (le.readToken = function (t) {
              return T(t, this.options.ecmaVersion >= 6) || t === 92
                ? this.readWord()
                : this.getTokenFromCode(t);
            }),
            (le.fullCharCodeAtPos = function () {
              var t = this.input.charCodeAt(this.pos);
              if (t <= 55295 || t >= 56320) return t;
              var n = this.input.charCodeAt(this.pos + 1);
              return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
            }),
            (le.skipBlockComment = function () {
              var t = this.options.onComment && this.curPosition(),
                n = this.pos,
                h = this.input.indexOf("*/", (this.pos += 2));
              if (
                (h === -1 && this.raise(this.pos - 2, "Unterminated comment"),
                (this.pos = h + 2),
                this.options.locations)
              )
                for (
                  var p = void 0, S = n;
                  (p = z(this.input, S, this.pos)) > -1;

                )
                  ++this.curLine, (S = this.lineStart = p);
              this.options.onComment &&
                this.options.onComment(
                  !0,
                  this.input.slice(n + 2, h),
                  n,
                  this.pos,
                  t,
                  this.curPosition()
                );
            }),
            (le.skipLineComment = function (t) {
              for (
                var n = this.pos,
                  h = this.options.onComment && this.curPosition(),
                  p = this.input.charCodeAt((this.pos += t));
                this.pos < this.input.length && !H(p);

              )
                p = this.input.charCodeAt(++this.pos);
              this.options.onComment &&
                this.options.onComment(
                  !1,
                  this.input.slice(n + t, this.pos),
                  n,
                  this.pos,
                  h,
                  this.curPosition()
                );
            }),
            (le.skipSpace = function () {
              e: for (; this.pos < this.input.length; ) {
                var t = this.input.charCodeAt(this.pos);
                switch (t) {
                  case 32:
                  case 160:
                    ++this.pos;
                    break;
                  case 13:
                    this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++this.pos,
                      this.options.locations &&
                        (++this.curLine, (this.lineStart = this.pos));
                    break;
                  case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                      case 42:
                        this.skipBlockComment();
                        break;
                      case 47:
                        this.skipLineComment(2);
                        break;
                      default:
                        break e;
                    }
                    break;
                  default:
                    if (
                      (t > 8 && t < 14) ||
                      (t >= 5760 && te.test(String.fromCharCode(t)))
                    )
                      ++this.pos;
                    else break e;
                }
              }
            }),
            (le.finishToken = function (t, n) {
              (this.end = this.pos),
                this.options.locations && (this.endLoc = this.curPosition());
              var h = this.type;
              (this.type = t), (this.value = n), this.updateContext(h);
            }),
            (le.readToken_dot = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              if (t >= 48 && t <= 57) return this.readNumber(!0);
              var n = this.input.charCodeAt(this.pos + 2);
              return this.options.ecmaVersion >= 6 && t === 46 && n === 46
                ? ((this.pos += 3), this.finishToken(u.ellipsis))
                : (++this.pos, this.finishToken(u.dot));
            }),
            (le.readToken_slash = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed
                ? (++this.pos, this.readRegexp())
                : t === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.slash, 1);
            }),
            (le.readToken_mult_modulo_exp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                h = 1,
                p = t === 42 ? u.star : u.modulo;
              return (
                this.options.ecmaVersion >= 7 &&
                  t === 42 &&
                  n === 42 &&
                  (++h,
                  (p = u.starstar),
                  (n = this.input.charCodeAt(this.pos + 2))),
                n === 61 ? this.finishOp(u.assign, h + 1) : this.finishOp(p, h)
              );
            }),
            (le.readToken_pipe_amp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              if (n === t) {
                if (this.options.ecmaVersion >= 12) {
                  var h = this.input.charCodeAt(this.pos + 2);
                  if (h === 61) return this.finishOp(u.assign, 3);
                }
                return this.finishOp(t === 124 ? u.logicalOR : u.logicalAND, 2);
              }
              return n === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(t === 124 ? u.bitwiseOR : u.bitwiseAND, 1);
            }),
            (le.readToken_caret = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return t === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.bitwiseXOR, 1);
            }),
            (le.readToken_plus_min = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === t
                ? n === 45 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 62 &&
                  (this.lastTokEnd === 0 ||
                    w.test(this.input.slice(this.lastTokEnd, this.pos)))
                  ? (this.skipLineComment(3),
                    this.skipSpace(),
                    this.nextToken())
                  : this.finishOp(u.incDec, 2)
                : n === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.plusMin, 1);
            }),
            (le.readToken_lt_gt = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                h = 1;
              return n === t
                ? ((h =
                    t === 62 && this.input.charCodeAt(this.pos + 2) === 62
                      ? 3
                      : 2),
                  this.input.charCodeAt(this.pos + h) === 61
                    ? this.finishOp(u.assign, h + 1)
                    : this.finishOp(u.bitShift, h))
                : n === 33 &&
                  t === 60 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 45 &&
                  this.input.charCodeAt(this.pos + 3) === 45
                ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                : (n === 61 && (h = 2), this.finishOp(u.relational, h));
            }),
            (le.readToken_eq_excl = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === 61
                ? this.finishOp(
                    u.equality,
                    this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
                  )
                : t === 61 && n === 62 && this.options.ecmaVersion >= 6
                ? ((this.pos += 2), this.finishToken(u.arrow))
                : this.finishOp(t === 61 ? u.eq : u.prefix, 1);
            }),
            (le.readToken_question = function () {
              var t = this.options.ecmaVersion;
              if (t >= 11) {
                var n = this.input.charCodeAt(this.pos + 1);
                if (n === 46) {
                  var h = this.input.charCodeAt(this.pos + 2);
                  if (h < 48 || h > 57) return this.finishOp(u.questionDot, 2);
                }
                if (n === 63) {
                  if (t >= 12) {
                    var p = this.input.charCodeAt(this.pos + 2);
                    if (p === 61) return this.finishOp(u.assign, 3);
                  }
                  return this.finishOp(u.coalesce, 2);
                }
              }
              return this.finishOp(u.question, 1);
            }),
            (le.readToken_numberSign = function () {
              var t = this.options.ecmaVersion,
                n = 35;
              if (
                t >= 13 &&
                (++this.pos,
                (n = this.fullCharCodeAtPos()),
                T(n, !0) || n === 92)
              )
                return this.finishToken(u.privateId, this.readWord1());
              this.raise(this.pos, "Unexpected character '" + Le(n) + "'");
            }),
            (le.getTokenFromCode = function (t) {
              switch (t) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(u.parenL);
                case 41:
                  return ++this.pos, this.finishToken(u.parenR);
                case 59:
                  return ++this.pos, this.finishToken(u.semi);
                case 44:
                  return ++this.pos, this.finishToken(u.comma);
                case 91:
                  return ++this.pos, this.finishToken(u.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(u.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(u.braceL);
                case 125:
                  return ++this.pos, this.finishToken(u.braceR);
                case 58:
                  return ++this.pos, this.finishToken(u.colon);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(u.backQuote);
                case 48:
                  var n = this.input.charCodeAt(this.pos + 1);
                  if (n === 120 || n === 88) return this.readRadixNumber(16);
                  if (this.options.ecmaVersion >= 6) {
                    if (n === 111 || n === 79) return this.readRadixNumber(8);
                    if (n === 98 || n === 66) return this.readRadixNumber(2);
                  }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return this.readNumber(!1);
                case 34:
                case 39:
                  return this.readString(t);
                case 47:
                  return this.readToken_slash();
                case 37:
                case 42:
                  return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                  return this.readToken_pipe_amp(t);
                case 94:
                  return this.readToken_caret();
                case 43:
                case 45:
                  return this.readToken_plus_min(t);
                case 60:
                case 62:
                  return this.readToken_lt_gt(t);
                case 61:
                case 33:
                  return this.readToken_eq_excl(t);
                case 63:
                  return this.readToken_question();
                case 126:
                  return this.finishOp(u.prefix, 1);
                case 35:
                  return this.readToken_numberSign();
              }
              this.raise(this.pos, "Unexpected character '" + Le(t) + "'");
            }),
            (le.finishOp = function (t, n) {
              var h = this.input.slice(this.pos, this.pos + n);
              return (this.pos += n), this.finishToken(t, h);
            }),
            (le.readRegexp = function () {
              for (var t, n, h = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(h, "Unterminated regular expression");
                var p = this.input.charAt(this.pos);
                if (
                  (w.test(p) &&
                    this.raise(h, "Unterminated regular expression"),
                  t)
                )
                  t = !1;
                else {
                  if (p === "[") n = !0;
                  else if (p === "]" && n) n = !1;
                  else if (p === "/" && !n) break;
                  t = p === "\\";
                }
                ++this.pos;
              }
              var S = this.input.slice(h, this.pos);
              ++this.pos;
              var I = this.pos,
                L = this.readWord1();
              this.containsEsc && this.unexpected(I);
              var j = this.regexpState || (this.regexpState = new et(this));
              j.reset(h, S, L),
                this.validateRegExpFlags(j),
                this.validateRegExpPattern(j);
              var U = null;
              try {
                U = new RegExp(S, L);
              } catch {}
              return this.finishToken(u.regexp, {
                pattern: S,
                flags: L,
                value: U,
              });
            }),
            (le.readInt = function (t, n, h) {
              for (
                var p = this.options.ecmaVersion >= 12 && n === void 0,
                  S = h && this.input.charCodeAt(this.pos) === 48,
                  I = this.pos,
                  L = 0,
                  j = 0,
                  U = 0,
                  ne = n ?? 1 / 0;
                U < ne;
                ++U, ++this.pos
              ) {
                var ue = this.input.charCodeAt(this.pos),
                  Ne = void 0;
                if (p && ue === 95) {
                  S &&
                    this.raiseRecoverable(
                      this.pos,
                      "Numeric separator is not allowed in legacy octal numeric literals"
                    ),
                    j === 95 &&
                      this.raiseRecoverable(
                        this.pos,
                        "Numeric separator must be exactly one underscore"
                      ),
                    U === 0 &&
                      this.raiseRecoverable(
                        this.pos,
                        "Numeric separator is not allowed at the first of digits"
                      ),
                    (j = ue);
                  continue;
                }
                if (
                  (ue >= 97
                    ? (Ne = ue - 97 + 10)
                    : ue >= 65
                    ? (Ne = ue - 65 + 10)
                    : ue >= 48 && ue <= 57
                    ? (Ne = ue - 48)
                    : (Ne = 1 / 0),
                  Ne >= t)
                )
                  break;
                (j = ue), (L = L * t + Ne);
              }
              return (
                p &&
                  j === 95 &&
                  this.raiseRecoverable(
                    this.pos - 1,
                    "Numeric separator is not allowed at the last of digits"
                  ),
                this.pos === I || (n != null && this.pos - I !== n) ? null : L
              );
            });
          function Ks(t, n) {
            return n ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
          }
          function Ur(t) {
            return typeof BigInt != "function"
              ? null
              : BigInt(t.replace(/_/g, ""));
          }
          (le.readRadixNumber = function (t) {
            var n = this.pos;
            this.pos += 2;
            var h = this.readInt(t);
            return (
              h == null &&
                this.raise(this.start + 2, "Expected number in radix " + t),
              this.options.ecmaVersion >= 11 &&
              this.input.charCodeAt(this.pos) === 110
                ? ((h = Ur(this.input.slice(n, this.pos))), ++this.pos)
                : T(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number"),
              this.finishToken(u.num, h)
            );
          }),
            (le.readNumber = function (t) {
              var n = this.pos;
              !t &&
                this.readInt(10, void 0, !0) === null &&
                this.raise(n, "Invalid number");
              var h = this.pos - n >= 2 && this.input.charCodeAt(n) === 48;
              h && this.strict && this.raise(n, "Invalid number");
              var p = this.input.charCodeAt(this.pos);
              if (!h && !t && this.options.ecmaVersion >= 11 && p === 110) {
                var S = Ur(this.input.slice(n, this.pos));
                return (
                  ++this.pos,
                  T(this.fullCharCodeAtPos()) &&
                    this.raise(this.pos, "Identifier directly after number"),
                  this.finishToken(u.num, S)
                );
              }
              h && /[89]/.test(this.input.slice(n, this.pos)) && (h = !1),
                p === 46 &&
                  !h &&
                  (++this.pos,
                  this.readInt(10),
                  (p = this.input.charCodeAt(this.pos))),
                (p === 69 || p === 101) &&
                  !h &&
                  ((p = this.input.charCodeAt(++this.pos)),
                  (p === 43 || p === 45) && ++this.pos,
                  this.readInt(10) === null && this.raise(n, "Invalid number")),
                T(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number");
              var I = Ks(this.input.slice(n, this.pos), h);
              return this.finishToken(u.num, I);
            }),
            (le.readCodePoint = function () {
              var t = this.input.charCodeAt(this.pos),
                n;
              if (t === 123) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var h = ++this.pos;
                (n = this.readHexChar(
                  this.input.indexOf("}", this.pos) - this.pos
                )),
                  ++this.pos,
                  n > 1114111 &&
                    this.invalidStringToken(h, "Code point out of bounds");
              } else n = this.readHexChar(4);
              return n;
            }),
            (le.readString = function (t) {
              for (var n = "", h = ++this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, "Unterminated string constant");
                var p = this.input.charCodeAt(this.pos);
                if (p === t) break;
                p === 92
                  ? ((n += this.input.slice(h, this.pos)),
                    (n += this.readEscapedChar(!1)),
                    (h = this.pos))
                  : p === 8232 || p === 8233
                  ? (this.options.ecmaVersion < 10 &&
                      this.raise(this.start, "Unterminated string constant"),
                    ++this.pos,
                    this.options.locations &&
                      (this.curLine++, (this.lineStart = this.pos)))
                  : (H(p) &&
                      this.raise(this.start, "Unterminated string constant"),
                    ++this.pos);
              }
              return (
                (n += this.input.slice(h, this.pos++)),
                this.finishToken(u.string, n)
              );
            });
          var Gr = {};
          (le.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
              this.readTmplToken();
            } catch (t) {
              if (t === Gr) this.readInvalidTemplateToken();
              else throw t;
            }
            this.inTemplateElement = !1;
          }),
            (le.invalidStringToken = function (t, n) {
              if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                throw Gr;
              this.raise(t, n);
            }),
            (le.readTmplToken = function () {
              for (var t = "", n = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, "Unterminated template");
                var h = this.input.charCodeAt(this.pos);
                if (
                  h === 96 ||
                  (h === 36 && this.input.charCodeAt(this.pos + 1) === 123)
                )
                  return this.pos === this.start &&
                    (this.type === u.template ||
                      this.type === u.invalidTemplate)
                    ? h === 36
                      ? ((this.pos += 2), this.finishToken(u.dollarBraceL))
                      : (++this.pos, this.finishToken(u.backQuote))
                    : ((t += this.input.slice(n, this.pos)),
                      this.finishToken(u.template, t));
                if (h === 92)
                  (t += this.input.slice(n, this.pos)),
                    (t += this.readEscapedChar(!0)),
                    (n = this.pos);
                else if (H(h)) {
                  switch (
                    ((t += this.input.slice(n, this.pos)), ++this.pos, h)
                  ) {
                    case 13:
                      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                    case 10:
                      t += `
`;
                      break;
                    default:
                      t += String.fromCharCode(h);
                      break;
                  }
                  this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos)),
                    (n = this.pos);
                } else ++this.pos;
              }
            }),
            (le.readInvalidTemplateToken = function () {
              for (; this.pos < this.input.length; this.pos++)
                switch (this.input[this.pos]) {
                  case "\\":
                    ++this.pos;
                    break;
                  case "$":
                    if (this.input[this.pos + 1] !== "{") break;
                  case "`":
                    return this.finishToken(
                      u.invalidTemplate,
                      this.input.slice(this.start, this.pos)
                    );
                }
              this.raise(this.start, "Unterminated template");
            }),
            (le.readEscapedChar = function (t) {
              var n = this.input.charCodeAt(++this.pos);
              switch ((++this.pos, n)) {
                case 110:
                  return `
`;
                case 114:
                  return "\r";
                case 120:
                  return String.fromCharCode(this.readHexChar(2));
                case 117:
                  return Le(this.readCodePoint());
                case 116:
                  return "	";
                case 98:
                  return "\b";
                case 118:
                  return "\v";
                case 102:
                  return "\f";
                case 13:
                  this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                case 10:
                  return (
                    this.options.locations &&
                      ((this.lineStart = this.pos), ++this.curLine),
                    ""
                  );
                case 56:
                case 57:
                  if (
                    (this.strict &&
                      this.invalidStringToken(
                        this.pos - 1,
                        "Invalid escape sequence"
                      ),
                    t)
                  ) {
                    var h = this.pos - 1;
                    this.invalidStringToken(
                      h,
                      "Invalid escape sequence in template string"
                    );
                  }
                default:
                  if (n >= 48 && n <= 55) {
                    var p = this.input
                        .substr(this.pos - 1, 3)
                        .match(/^[0-7]+/)[0],
                      S = parseInt(p, 8);
                    return (
                      S > 255 && ((p = p.slice(0, -1)), (S = parseInt(p, 8))),
                      (this.pos += p.length - 1),
                      (n = this.input.charCodeAt(this.pos)),
                      (p !== "0" || n === 56 || n === 57) &&
                        (this.strict || t) &&
                        this.invalidStringToken(
                          this.pos - 1 - p.length,
                          t
                            ? "Octal literal in template string"
                            : "Octal literal in strict mode"
                        ),
                      String.fromCharCode(S)
                    );
                  }
                  return H(n) ? "" : String.fromCharCode(n);
              }
            }),
            (le.readHexChar = function (t) {
              var n = this.pos,
                h = this.readInt(16, t);
              return (
                h === null &&
                  this.invalidStringToken(n, "Bad character escape sequence"),
                h
              );
            }),
            (le.readWord1 = function () {
              this.containsEsc = !1;
              for (
                var t = "",
                  n = !0,
                  h = this.pos,
                  p = this.options.ecmaVersion >= 6;
                this.pos < this.input.length;

              ) {
                var S = this.fullCharCodeAtPos();
                if (E(S, p)) this.pos += S <= 65535 ? 1 : 2;
                else if (S === 92) {
                  (this.containsEsc = !0), (t += this.input.slice(h, this.pos));
                  var I = this.pos;
                  this.input.charCodeAt(++this.pos) !== 117 &&
                    this.invalidStringToken(
                      this.pos,
                      "Expecting Unicode escape sequence \\uXXXX"
                    ),
                    ++this.pos;
                  var L = this.readCodePoint();
                  (n ? T : E)(L, p) ||
                    this.invalidStringToken(I, "Invalid Unicode escape"),
                    (t += Le(L)),
                    (h = this.pos);
                } else break;
                n = !1;
              }
              return t + this.input.slice(h, this.pos);
            }),
            (le.readWord = function () {
              var t = this.readWord1(),
                n = u.name;
              return (
                this.keywords.test(t) && (n = N[t]), this.finishToken(n, t)
              );
            });
          var Wr = "8.11.2";
          re.acorn = {
            Parser: re,
            version: Wr,
            defaultOptions: De,
            Position: W,
            SourceLocation: Me,
            getLineInfo: ht,
            Node: R,
            TokenType: O,
            tokTypes: u,
            keywordTypes: N,
            TokContext: Ve,
            tokContexts: ve,
            isIdentifierChar: E,
            isIdentifierStart: T,
            Token: di,
            isNewLine: H,
            lineBreak: w,
            lineBreakG: V,
            nonASCIIwhitespace: te,
          };
          function $s(t, n) {
            return re.parse(t, n);
          }
          function Ys(t, n, h) {
            return re.parseExpressionAt(t, n, h);
          }
          function Zs(t, n) {
            return re.tokenizer(t, n);
          }
          (r.Node = R),
            (r.Parser = re),
            (r.Position = W),
            (r.SourceLocation = Me),
            (r.TokContext = Ve),
            (r.Token = di),
            (r.TokenType = O),
            (r.defaultOptions = De),
            (r.getLineInfo = ht),
            (r.isIdentifierChar = E),
            (r.isIdentifierStart = T),
            (r.isNewLine = H),
            (r.keywordTypes = N),
            (r.lineBreak = w),
            (r.lineBreakG = V),
            (r.nonASCIIwhitespace = te),
            (r.parse = $s),
            (r.parseExpressionAt = Ys),
            (r.tokContexts = ve),
            (r.tokTypes = u),
            (r.tokenizer = Zs),
            (r.version = Wr);
        });
      })(vi, vi.exports)),
    vi.exports
  );
}
(function (e) {
  const i = fo,
    r = /^[\da-fA-F]+$/,
    s = /^\d+$/,
    o = new WeakMap();
  function l(v) {
    v = v.Parser.acorn || v;
    let C = o.get(v);
    if (!C) {
      const _ = v.tokTypes,
        A = v.TokContext,
        P = v.TokenType,
        k = new A("<tag", !1),
        T = new A("</tag", !1),
        E = new A("<tag>...</tag>", !0, !0),
        O = { tc_oTag: k, tc_cTag: T, tc_expr: E },
        D = {
          jsxName: new P("jsxName"),
          jsxText: new P("jsxText", { beforeExpr: !0 }),
          jsxTagStart: new P("jsxTagStart", { startsExpr: !0 }),
          jsxTagEnd: new P("jsxTagEnd"),
        };
      (D.jsxTagStart.updateContext = function () {
        this.context.push(E), this.context.push(k), (this.exprAllowed = !1);
      }),
        (D.jsxTagEnd.updateContext = function (M) {
          let G = this.context.pop();
          (G === k && M === _.slash) || G === T
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === E))
            : (this.exprAllowed = !0);
        }),
        (C = { tokContexts: O, tokTypes: D }),
        o.set(v, C);
    }
    return C;
  }
  function m(v) {
    if (!v) return v;
    if (v.type === "JSXIdentifier") return v.name;
    if (v.type === "JSXNamespacedName")
      return v.namespace.name + ":" + v.name.name;
    if (v.type === "JSXMemberExpression")
      return m(v.object) + "." + m(v.property);
  }
  (e.exports = function (v) {
    return (
      (v = v || {}),
      function (C) {
        return x(
          {
            allowNamespaces: v.allowNamespaces !== !1,
            allowNamespacedObjects: !!v.allowNamespacedObjects,
          },
          C
        );
      }
    );
  }),
    Object.defineProperty(e.exports, "tokTypes", {
      get: function () {
        return l(cn()).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function x(v, C) {
    const _ = C.acorn || cn(),
      A = l(_),
      P = _.tokTypes,
      k = A.tokTypes,
      T = _.tokContexts,
      E = A.tokContexts.tc_oTag,
      O = A.tokContexts.tc_cTag,
      D = A.tokContexts.tc_expr,
      M = _.isNewLine,
      G = _.isIdentifierStart,
      N = _.isIdentifierChar;
    return class extends C {
      static get acornJsx() {
        return A;
      }
      jsx_readToken() {
        let y = "",
          u = this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated JSX contents");
          let w = this.input.charCodeAt(this.pos);
          switch (w) {
            case 60:
            case 123:
              return this.pos === this.start
                ? w === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(k.jsxTagStart))
                  : this.getTokenFromCode(w)
                : ((y += this.input.slice(u, this.pos)),
                  this.finishToken(k.jsxText, y));
            case 38:
              (y += this.input.slice(u, this.pos)),
                (y += this.jsx_readEntity()),
                (u = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" +
                  this.input[this.pos] +
                  "`. Did you mean `" +
                  (w === 62 ? "&gt;" : "&rbrace;") +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?'
              );
            default:
              M(w)
                ? ((y += this.input.slice(u, this.pos)),
                  (y += this.jsx_readNewLine(!0)),
                  (u = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(y) {
        let u = this.input.charCodeAt(this.pos),
          w;
        return (
          ++this.pos,
          u === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (w = y
                ? `
`
                : `\r
`))
            : (w = String.fromCharCode(u)),
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos)),
          w
        );
      }
      jsx_readString(y) {
        let u = "",
          w = ++this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated string constant");
          let V = this.input.charCodeAt(this.pos);
          if (V === y) break;
          V === 38
            ? ((u += this.input.slice(w, this.pos)),
              (u += this.jsx_readEntity()),
              (w = this.pos))
            : M(V)
            ? ((u += this.input.slice(w, this.pos)),
              (u += this.jsx_readNewLine(!1)),
              (w = this.pos))
            : ++this.pos;
        }
        return (
          (u += this.input.slice(w, this.pos++)), this.finishToken(P.string, u)
        );
      }
      jsx_readEntity() {
        let y = "",
          u = 0,
          w,
          V = this.input[this.pos];
        V !== "&" &&
          this.raise(this.pos, "Entity must start with an ampersand");
        let H = ++this.pos;
        for (; this.pos < this.input.length && u++ < 10; ) {
          if (((V = this.input[this.pos++]), V === ";")) {
            y[0] === "#"
              ? y[1] === "x"
                ? ((y = y.substr(2)),
                  r.test(y) && (w = String.fromCharCode(parseInt(y, 16))))
                : ((y = y.substr(1)),
                  s.test(y) && (w = String.fromCharCode(parseInt(y, 10))))
              : (w = i[y]);
            break;
          }
          y += V;
        }
        return w || ((this.pos = H), "&");
      }
      jsx_readWord() {
        let y,
          u = this.pos;
        do y = this.input.charCodeAt(++this.pos);
        while (N(y) || y === 45);
        return this.finishToken(k.jsxName, this.input.slice(u, this.pos));
      }
      jsx_parseIdentifier() {
        let y = this.startNode();
        return (
          this.type === k.jsxName
            ? (y.name = this.value)
            : this.type.keyword
            ? (y.name = this.type.keyword)
            : this.unexpected(),
          this.next(),
          this.finishNode(y, "JSXIdentifier")
        );
      }
      jsx_parseNamespacedName() {
        let y = this.start,
          u = this.startLoc,
          w = this.jsx_parseIdentifier();
        if (!v.allowNamespaces || !this.eat(P.colon)) return w;
        var V = this.startNodeAt(y, u);
        return (
          (V.namespace = w),
          (V.name = this.jsx_parseIdentifier()),
          this.finishNode(V, "JSXNamespacedName")
        );
      }
      jsx_parseElementName() {
        if (this.type === k.jsxTagEnd) return "";
        let y = this.start,
          u = this.startLoc,
          w = this.jsx_parseNamespacedName();
        for (
          this.type === P.dot &&
          w.type === "JSXNamespacedName" &&
          !v.allowNamespacedObjects &&
          this.unexpected();
          this.eat(P.dot);

        ) {
          let V = this.startNodeAt(y, u);
          (V.object = w),
            (V.property = this.jsx_parseIdentifier()),
            (w = this.finishNode(V, "JSXMemberExpression"));
        }
        return w;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case P.braceL:
            let y = this.jsx_parseExpressionContainer();
            return (
              y.expression.type === "JSXEmptyExpression" &&
                this.raise(
                  y.start,
                  "JSX attributes must only be assigned a non-empty expression"
                ),
              y
            );
          case k.jsxTagStart:
          case P.string:
            return this.parseExprAtom();
          default:
            this.raise(
              this.start,
              "JSX value should be either an expression or a quoted JSX text"
            );
        }
      }
      jsx_parseEmptyExpression() {
        let y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(
          y,
          "JSXEmptyExpression",
          this.start,
          this.startLoc
        );
      }
      jsx_parseExpressionContainer() {
        let y = this.startNode();
        return (
          this.next(),
          (y.expression =
            this.type === P.braceR
              ? this.jsx_parseEmptyExpression()
              : this.parseExpression()),
          this.expect(P.braceR),
          this.finishNode(y, "JSXExpressionContainer")
        );
      }
      jsx_parseAttribute() {
        let y = this.startNode();
        return this.eat(P.braceL)
          ? (this.expect(P.ellipsis),
            (y.argument = this.parseMaybeAssign()),
            this.expect(P.braceR),
            this.finishNode(y, "JSXSpreadAttribute"))
          : ((y.name = this.jsx_parseNamespacedName()),
            (y.value = this.eat(P.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(y, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(y, u) {
        let w = this.startNodeAt(y, u);
        w.attributes = [];
        let V = this.jsx_parseElementName();
        for (
          V && (w.name = V);
          this.type !== P.slash && this.type !== k.jsxTagEnd;

        )
          w.attributes.push(this.jsx_parseAttribute());
        return (
          (w.selfClosing = this.eat(P.slash)),
          this.expect(k.jsxTagEnd),
          this.finishNode(w, V ? "JSXOpeningElement" : "JSXOpeningFragment")
        );
      }
      jsx_parseClosingElementAt(y, u) {
        let w = this.startNodeAt(y, u),
          V = this.jsx_parseElementName();
        return (
          V && (w.name = V),
          this.expect(k.jsxTagEnd),
          this.finishNode(w, V ? "JSXClosingElement" : "JSXClosingFragment")
        );
      }
      jsx_parseElementAt(y, u) {
        let w = this.startNodeAt(y, u),
          V = [],
          H = this.jsx_parseOpeningElementAt(y, u),
          z = null;
        if (!H.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case k.jsxTagStart:
                if (
                  ((y = this.start),
                  (u = this.startLoc),
                  this.next(),
                  this.eat(P.slash))
                ) {
                  z = this.jsx_parseClosingElementAt(y, u);
                  break e;
                }
                V.push(this.jsx_parseElementAt(y, u));
                break;
              case k.jsxText:
                V.push(this.parseExprAtom());
                break;
              case P.braceL:
                V.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          m(z.name) !== m(H.name) &&
            this.raise(
              z.start,
              "Expected corresponding JSX closing tag for <" + m(H.name) + ">"
            );
        }
        let te = H.name ? "Element" : "Fragment";
        return (
          (w["opening" + te] = H),
          (w["closing" + te] = z),
          (w.children = V),
          this.type === P.relational &&
            this.value === "<" &&
            this.raise(
              this.start,
              "Adjacent JSX elements must be wrapped in an enclosing tag"
            ),
          this.finishNode(w, "JSX" + te)
        );
      }
      jsx_parseText() {
        let y = this.parseLiteral(this.value);
        return (y.type = "JSXText"), y;
      }
      jsx_parseElement() {
        let y = this.start,
          u = this.startLoc;
        return this.next(), this.jsx_parseElementAt(y, u);
      }
      parseExprAtom(y) {
        return this.type === k.jsxText
          ? this.jsx_parseText()
          : this.type === k.jsxTagStart
          ? this.jsx_parseElement()
          : super.parseExprAtom(y);
      }
      readToken(y) {
        let u = this.curContext();
        if (u === D) return this.jsx_readToken();
        if (u === E || u === O) {
          if (G(y)) return this.jsx_readWord();
          if (y == 62) return ++this.pos, this.finishToken(k.jsxTagEnd);
          if ((y === 34 || y === 39) && u == E) return this.jsx_readString(y);
        }
        return y === 60 &&
          this.exprAllowed &&
          this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(k.jsxTagStart))
          : super.readToken(y);
      }
      updateContext(y) {
        if (this.type == P.braceL) {
          var u = this.curContext();
          u == E
            ? this.context.push(T.b_expr)
            : u == D
            ? this.context.push(T.b_tmpl)
            : super.updateContext(y),
            (this.exprAllowed = !0);
        } else if (this.type === P.slash && y === k.jsxTagStart)
          (this.context.length -= 2),
            this.context.push(O),
            (this.exprAllowed = !1);
        else return super.updateContext(y);
      }
    };
  }
})(ls);
var mo = ls.exports;
const go = ti(mo);
function cs(e, i, r, s, o) {
  r || (r = q),
    (function l(m, x, v) {
      var C = v || m.type,
        _ = i[C];
      r[C](m, x, l), _ && _(m, x);
    })(e, s, o);
}
function xo(e, i, r, s, o) {
  var l = [];
  r || (r = q),
    (function m(x, v, C) {
      var _ = C || x.type,
        A = i[_],
        P = x !== l[l.length - 1];
      P && l.push(x), r[_](x, v, m), A && A(x, v || l, l), P && l.pop();
    })(e, s, o);
}
function yr(e, i, r) {
  r(e, i);
}
function Et(e, i, r) {}
var q = {};
q.Program = q.BlockStatement = function (e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
q.Statement = yr;
q.EmptyStatement = Et;
q.ExpressionStatement =
  q.ParenthesizedExpression =
  q.ChainExpression =
    function (e, i, r) {
      return r(e.expression, i, "Expression");
    };
q.IfStatement = function (e, i, r) {
  r(e.test, i, "Expression"),
    r(e.consequent, i, "Statement"),
    e.alternate && r(e.alternate, i, "Statement");
};
q.LabeledStatement = function (e, i, r) {
  return r(e.body, i, "Statement");
};
q.BreakStatement = q.ContinueStatement = Et;
q.WithStatement = function (e, i, r) {
  r(e.object, i, "Expression"), r(e.body, i, "Statement");
};
q.SwitchStatement = function (e, i, r) {
  r(e.discriminant, i, "Expression");
  for (var s = 0, o = e.cases; s < o.length; s += 1) {
    var l = o[s];
    l.test && r(l.test, i, "Expression");
    for (var m = 0, x = l.consequent; m < x.length; m += 1) {
      var v = x[m];
      r(v, i, "Statement");
    }
  }
};
q.SwitchCase = function (e, i, r) {
  e.test && r(e.test, i, "Expression");
  for (var s = 0, o = e.consequent; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
q.ReturnStatement =
  q.YieldExpression =
  q.AwaitExpression =
    function (e, i, r) {
      e.argument && r(e.argument, i, "Expression");
    };
q.ThrowStatement = q.SpreadElement = function (e, i, r) {
  return r(e.argument, i, "Expression");
};
q.TryStatement = function (e, i, r) {
  r(e.block, i, "Statement"),
    e.handler && r(e.handler, i),
    e.finalizer && r(e.finalizer, i, "Statement");
};
q.CatchClause = function (e, i, r) {
  e.param && r(e.param, i, "Pattern"), r(e.body, i, "Statement");
};
q.WhileStatement = q.DoWhileStatement = function (e, i, r) {
  r(e.test, i, "Expression"), r(e.body, i, "Statement");
};
q.ForStatement = function (e, i, r) {
  e.init && r(e.init, i, "ForInit"),
    e.test && r(e.test, i, "Expression"),
    e.update && r(e.update, i, "Expression"),
    r(e.body, i, "Statement");
};
q.ForInStatement = q.ForOfStatement = function (e, i, r) {
  r(e.left, i, "ForInit"),
    r(e.right, i, "Expression"),
    r(e.body, i, "Statement");
};
q.ForInit = function (e, i, r) {
  e.type === "VariableDeclaration" ? r(e, i) : r(e, i, "Expression");
};
q.DebuggerStatement = Et;
q.FunctionDeclaration = function (e, i, r) {
  return r(e, i, "Function");
};
q.VariableDeclaration = function (e, i, r) {
  for (var s = 0, o = e.declarations; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.VariableDeclarator = function (e, i, r) {
  r(e.id, i, "Pattern"), e.init && r(e.init, i, "Expression");
};
q.Function = function (e, i, r) {
  e.id && r(e.id, i, "Pattern");
  for (var s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Pattern");
  }
  r(e.body, i, e.expression ? "Expression" : "Statement");
};
q.Pattern = function (e, i, r) {
  e.type === "Identifier"
    ? r(e, i, "VariablePattern")
    : e.type === "MemberExpression"
    ? r(e, i, "MemberPattern")
    : r(e, i);
};
q.VariablePattern = Et;
q.MemberPattern = yr;
q.RestElement = function (e, i, r) {
  return r(e.argument, i, "Pattern");
};
q.ArrayPattern = function (e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Pattern");
  }
};
q.ObjectPattern = function (e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    l.type === "Property"
      ? (l.computed && r(l.key, i, "Expression"), r(l.value, i, "Pattern"))
      : l.type === "RestElement" && r(l.argument, i, "Pattern");
  }
};
q.Expression = yr;
q.ThisExpression = q.Super = q.MetaProperty = Et;
q.ArrayExpression = function (e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Expression");
  }
};
q.ObjectExpression = function (e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.FunctionExpression = q.ArrowFunctionExpression = q.FunctionDeclaration;
q.SequenceExpression = function (e, i, r) {
  for (var s = 0, o = e.expressions; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Expression");
  }
};
q.TemplateLiteral = function (e, i, r) {
  for (var s = 0, o = e.quasis; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  for (var m = 0, x = e.expressions; m < x.length; m += 1) {
    var v = x[m];
    r(v, i, "Expression");
  }
};
q.TemplateElement = Et;
q.UnaryExpression = q.UpdateExpression = function (e, i, r) {
  r(e.argument, i, "Expression");
};
q.BinaryExpression = q.LogicalExpression = function (e, i, r) {
  r(e.left, i, "Expression"), r(e.right, i, "Expression");
};
q.AssignmentExpression = q.AssignmentPattern = function (e, i, r) {
  r(e.left, i, "Pattern"), r(e.right, i, "Expression");
};
q.ConditionalExpression = function (e, i, r) {
  r(e.test, i, "Expression"),
    r(e.consequent, i, "Expression"),
    r(e.alternate, i, "Expression");
};
q.NewExpression = q.CallExpression = function (e, i, r) {
  if ((r(e.callee, i, "Expression"), e.arguments))
    for (var s = 0, o = e.arguments; s < o.length; s += 1) {
      var l = o[s];
      r(l, i, "Expression");
    }
};
q.MemberExpression = function (e, i, r) {
  r(e.object, i, "Expression"), e.computed && r(e.property, i, "Expression");
};
q.ExportNamedDeclaration = q.ExportDefaultDeclaration = function (e, i, r) {
  e.declaration &&
    r(
      e.declaration,
      i,
      e.type === "ExportNamedDeclaration" || e.declaration.id
        ? "Statement"
        : "Expression"
    ),
    e.source && r(e.source, i, "Expression");
};
q.ExportAllDeclaration = function (e, i, r) {
  e.exported && r(e.exported, i), r(e.source, i, "Expression");
};
q.ImportDeclaration = function (e, i, r) {
  for (var s = 0, o = e.specifiers; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  r(e.source, i, "Expression");
};
q.ImportExpression = function (e, i, r) {
  r(e.source, i, "Expression");
};
q.ImportSpecifier =
  q.ImportDefaultSpecifier =
  q.ImportNamespaceSpecifier =
  q.Identifier =
  q.Literal =
    Et;
q.TaggedTemplateExpression = function (e, i, r) {
  r(e.tag, i, "Expression"), r(e.quasi, i, "Expression");
};
q.ClassDeclaration = q.ClassExpression = function (e, i, r) {
  return r(e, i, "Class");
};
q.Class = function (e, i, r) {
  e.id && r(e.id, i, "Pattern"),
    e.superClass && r(e.superClass, i, "Expression"),
    r(e.body, i);
};
q.ClassBody = function (e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.MethodDefinition = q.Property = function (e, i, r) {
  e.computed && r(e.key, i, "Expression"), r(e.value, i, "Expression");
};
var vo = wn,
  yo = ua,
  bo = kn,
  So = "[object Object]",
  _o = Function.prototype,
  Co = Object.prototype,
  ps = _o.toString,
  Eo = Co.hasOwnProperty,
  wo = ps.call(Object);
function ko(e) {
  if (!bo(e) || vo(e) != So) return !1;
  var i = yo(e);
  if (i === null) return !0;
  var r = Eo.call(i, "constructor") && i.constructor;
  return typeof r == "function" && r instanceof r && ps.call(r) == wo;
}
var Ao = ko;
const Io = ti(Ao);
var Po = wn,
  To = ha,
  No = kn,
  Lo = "[object String]";
function Ro(e) {
  return typeof e == "string" || (!To(e) && No(e) && Po(e) == Lo);
}
var Oo = Ro;
const Vo = ti(Oo);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function pn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Fo(e) {
  var i, r;
  return pn(e) === !1
    ? !1
    : ((i = e.constructor),
      i === void 0
        ? !0
        : ((r = i.prototype),
          !(pn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var fs = {},
  Ci =
    (Vt && Vt.__assign) ||
    function () {
      return (
        (Ci =
          Object.assign ||
          function (e) {
            for (var i, r = 1, s = arguments.length; r < s; r++) {
              i = arguments[r];
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
            }
            return e;
          }),
        Ci.apply(this, arguments)
      );
    },
  Bo =
    (Vt && Vt.__spreadArrays) ||
    function () {
      for (var e = 0, i = 0, r = arguments.length; i < r; i++)
        e += arguments[i].length;
      for (var s = Array(e), o = 0, i = 0; i < r; i++)
        for (var l = arguments[i], m = 0, x = l.length; m < x; m++, o++)
          s[o] = l[m];
      return s;
    };
Object.defineProperty(fs, "__esModule", { value: !0 });
var Ht = [];
function Mo(e) {
  var i = typeof e;
  return e !== null && (i === "object" || i === "function");
}
function Do(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function jo(e) {
  return Object.getOwnPropertySymbols(e).filter(function (i) {
    return Object.prototype.propertyIsEnumerable.call(e, i);
  });
}
function bi(e, i, r) {
  r === void 0 && (r = "");
  var s = { indent: "	", singleQuotes: !0 },
    o = Ci(Ci({}, s), i),
    l;
  o.inlineCharacterLimit === void 0
    ? (l = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + o.indent,
      })
    : (l = {
        newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
        newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
        pad: "@@__PRETTY_PRINT_PAD__@@",
        indent: "@@__PRETTY_PRINT_INDENT__@@",
      });
  var m = function (C) {
    if (o.inlineCharacterLimit === void 0) return C;
    var _ = C.replace(new RegExp(l.newLine, "g"), "")
      .replace(new RegExp(l.newLineOrSpace, "g"), " ")
      .replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
    return _.length <= o.inlineCharacterLimit
      ? _
      : C.replace(
          new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"),
          `
`
        )
          .replace(new RegExp(l.pad, "g"), r)
          .replace(new RegExp(l.indent, "g"), r + o.indent);
  };
  if (Ht.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e == "function" ||
    typeof e == "symbol" ||
    Do(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    Ht.push(e);
    var x =
      "[" +
      l.newLine +
      e
        .map(function (C, _) {
          var A = e.length - 1 === _ ? l.newLine : "," + l.newLineOrSpace,
            P = bi(C, o, r + o.indent);
          return o.transform && (P = o.transform(e, _, P)), l.indent + P + A;
        })
        .join("") +
      l.pad +
      "]";
    return Ht.pop(), m(x);
  }
  if (Mo(e)) {
    var v = Bo(Object.keys(e), jo(e));
    if (
      (o.filter &&
        (v = v.filter(function (_) {
          return o.filter && o.filter(e, _);
        })),
      v.length === 0)
    )
      return "{}";
    Ht.push(e);
    var x =
      "{" +
      l.newLine +
      v
        .map(function (_, A) {
          var P = v.length - 1 === A ? l.newLine : "," + l.newLineOrSpace,
            k = typeof _ == "symbol",
            T = !k && /^[a-z$_][a-z$_0-9]*$/i.test(_.toString()),
            E = k || T ? _ : bi(_, o),
            O = bi(e[_], o, r + o.indent);
          return (
            o.transform && (O = o.transform(e, _, O)),
            l.indent + String(E) + ": " + O + P
          );
        })
        .join("") +
      l.pad +
      "}";
    return Ht.pop(), m(x);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (C) {
      return C ===
        `
`
        ? "\\n"
        : "\\r";
    })),
    o.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var qo = (fs.prettyPrint = bi),
  ds = { exports: {} },
  xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  Sr = Symbol.for("react.portal"),
  Ni = Symbol.for("react.fragment"),
  Li = Symbol.for("react.strict_mode"),
  Ri = Symbol.for("react.profiler"),
  Oi = Symbol.for("react.provider"),
  Vi = Symbol.for("react.context"),
  Uo = Symbol.for("react.server_context"),
  Fi = Symbol.for("react.forward_ref"),
  Bi = Symbol.for("react.suspense"),
  Mi = Symbol.for("react.suspense_list"),
  Di = Symbol.for("react.memo"),
  ji = Symbol.for("react.lazy"),
  Go = Symbol.for("react.offscreen"),
  ms;
ms = Symbol.for("react.module.reference");
function Je(e) {
  if (typeof e == "object" && e !== null) {
    var i = e.$$typeof;
    switch (i) {
      case br:
        switch (((e = e.type), e)) {
          case Ni:
          case Ri:
          case Li:
          case Bi:
          case Mi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Uo:
              case Vi:
              case Fi:
              case ji:
              case Di:
              case Oi:
                return e;
              default:
                return i;
            }
        }
      case Sr:
        return i;
    }
  }
}
xe.ContextConsumer = Vi;
xe.ContextProvider = Oi;
xe.Element = br;
xe.ForwardRef = Fi;
xe.Fragment = Ni;
xe.Lazy = ji;
xe.Memo = Di;
xe.Portal = Sr;
xe.Profiler = Ri;
xe.StrictMode = Li;
xe.Suspense = Bi;
xe.SuspenseList = Mi;
xe.isAsyncMode = function () {
  return !1;
};
xe.isConcurrentMode = function () {
  return !1;
};
xe.isContextConsumer = function (e) {
  return Je(e) === Vi;
};
xe.isContextProvider = function (e) {
  return Je(e) === Oi;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
};
xe.isForwardRef = function (e) {
  return Je(e) === Fi;
};
xe.isFragment = function (e) {
  return Je(e) === Ni;
};
xe.isLazy = function (e) {
  return Je(e) === ji;
};
xe.isMemo = function (e) {
  return Je(e) === Di;
};
xe.isPortal = function (e) {
  return Je(e) === Sr;
};
xe.isProfiler = function (e) {
  return Je(e) === Ri;
};
xe.isStrictMode = function (e) {
  return Je(e) === Li;
};
xe.isSuspense = function (e) {
  return Je(e) === Bi;
};
xe.isSuspenseList = function (e) {
  return Je(e) === Mi;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ni ||
    e === Ri ||
    e === Li ||
    e === Bi ||
    e === Mi ||
    e === Go ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ji ||
        e.$$typeof === Di ||
        e.$$typeof === Oi ||
        e.$$typeof === Vi ||
        e.$$typeof === Fi ||
        e.$$typeof === ms ||
        e.getModuleId !== void 0))
  );
};
xe.typeOf = Je;
ds.exports = xe;
var tt = ds.exports,
  nt = function (e, i) {
    return e === 0 ? "" : new Array(e * i).fill(" ").join("");
  };
function Zt(e) {
  "@babel/helpers - typeof";
  return (
    (Zt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i &&
              typeof Symbol == "function" &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    Zt(e)
  );
}
function fn(e) {
  return Wo(e) || zo(e) || Ho(e) || Qo();
}
function Wo(e) {
  if (Array.isArray(e)) return rr(e);
}
function zo(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Ho(e, i) {
  if (e) {
    if (typeof e == "string") return rr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rr(e, i);
  }
}
function rr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, s = new Array(i); r < i; r++) s[r] = e[r];
  return s;
}
function Qo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nr(e, i) {
  return e === null ||
    Zt(e) !== "object" ||
    e instanceof Date ||
    e instanceof RegExp ||
    _t.isValidElement(e)
    ? e
    : (i.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return nr(r, i);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, s) {
              return (
                s === "_owner" ||
                  (s === "current" || i.has(e[s])
                    ? (r[s] = "[Circular]")
                    : (r[s] = nr(e[s], i))),
                r
              );
            }, {}));
}
function Xo(e) {
  return nr(e, new WeakSet());
}
var gs = function (i) {
    return { type: "string", value: i };
  },
  Jo = function (i) {
    return { type: "number", value: i };
  },
  Ko = function (i, r, s, o) {
    return {
      type: "ReactElement",
      displayName: i,
      props: r,
      defaultProps: s,
      childrens: o,
    };
  },
  $o = function (i, r) {
    return { type: "ReactFragment", key: i, childrens: r };
  },
  Yo = !!_t.Fragment,
  xs = function (i) {
    return !i.name || i.name === "_default" ? "No Display Name" : i.name;
  },
  Zo = function e(i) {
    switch (!0) {
      case !!i.displayName:
        return i.displayName;
      case i.$$typeof === tt.Memo:
        return e(i.type);
      case i.$$typeof === tt.ForwardRef:
        return e(i.render);
      default:
        return xs(i);
    }
  },
  eu = function (i) {
    switch (!0) {
      case typeof i.type == "string":
        return i.type;
      case typeof i.type == "function":
        return i.type.displayName ? i.type.displayName : xs(i.type);
      case tt.isForwardRef(i):
      case tt.isMemo(i):
        return Zo(i.type);
      case tt.isContextConsumer(i):
        return "".concat(i.type._context.displayName || "Context", ".Consumer");
      case tt.isContextProvider(i):
        return "".concat(i.type._context.displayName || "Context", ".Provider");
      case tt.isLazy(i):
        return "Lazy";
      case tt.isProfiler(i):
        return "Profiler";
      case tt.isStrictMode(i):
        return "StrictMode";
      case tt.isSuspense(i):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  dn = function (i, r) {
    return r !== "children";
  },
  tu = function (i) {
    return i !== !0 && i !== !1 && i !== null && i !== "";
  },
  mn = function (i, r) {
    var s = {};
    return (
      Object.keys(i)
        .filter(function (o) {
          return r(i[o], o);
        })
        .forEach(function (o) {
          return (s[o] = i[o]);
        }),
      s
    );
  },
  _r = function e(i, r) {
    var s = r.displayName,
      o = s === void 0 ? eu : s;
    if (typeof i == "string") return gs(i);
    if (typeof i == "number") return Jo(i);
    if (!Qt.isValidElement(i))
      throw new Error(
        "react-element-to-jsx-string: Expected a React.Element, got `".concat(
          Zt(i),
          "`"
        )
      );
    var l = o(i),
      m = mn(i.props, dn);
    i.ref !== null && (m.ref = i.ref);
    var x = i.key;
    typeof x == "string" && x.search(/^\./) && (m.key = x);
    var v = mn(i.type.defaultProps || {}, dn),
      C = Qt.Children.toArray(i.props.children)
        .filter(tu)
        .map(function (_) {
          return e(_, r);
        });
    return Yo && i.type === _t.Fragment ? $o(x, C) : Ko(l, m, v, C);
  };
function iu() {}
var ru = function (i) {
    return i
      .toString()
      .split(
        `
`
      )
      .map(function (r) {
        return r.trim();
      })
      .join("");
  },
  gn = ru,
  vs = function (e, i) {
    var r = i.functionValue,
      s = r === void 0 ? gn : r,
      o = i.showFunctions;
    return s(!o && s === gn ? iu : e);
  },
  nu = function (e, i, r, s) {
    var o = Xo(e),
      l = qo(o, {
        transform: function (x, v, C) {
          var _ = x[v];
          return _ && _t.isValidElement(_)
            ? qi(_r(_, s), !0, r, s)
            : typeof _ == "function"
            ? vs(_, s)
            : C;
        },
      });
    return i
      ? l
          .replace(/\s+/g, " ")
          .replace(/{ /g, "{")
          .replace(/ }/g, "}")
          .replace(/\[ /g, "[")
          .replace(/ ]/g, "]")
      : l.replace(/\t/g, nt(1, s.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(nt(r + 1, s.tabStop), "$1")
        );
  },
  su = function (i) {
    return i.replace(/"/g, "&quot;");
  },
  au = function (i, r, s, o) {
    if (typeof i == "number") return "{".concat(String(i), "}");
    if (typeof i == "string") return '"'.concat(su(i), '"');
    if (Zt(i) === "symbol") {
      var l = i
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return l ? "{Symbol('".concat(l, "')}") : "{Symbol()}";
    }
    return typeof i == "function"
      ? "{".concat(vs(i, o), "}")
      : _t.isValidElement(i)
      ? "{".concat(qi(_r(i, o), !0, s, o), "}")
      : i instanceof Date
      ? isNaN(i.valueOf())
        ? "{new Date(NaN)}"
        : '{new Date("'.concat(i.toISOString(), '")}')
      : Fo(i) || Array.isArray(i)
      ? "{".concat(nu(i, r, s, o), "}")
      : "{".concat(String(i), "}");
  },
  ou = function (e, i, r, s, o, l, m, x) {
    if (!i && !s)
      throw new Error(
        'The prop "'.concat(
          e,
          '" has no value and no default: could not be formatted'
        )
      );
    var v = i ? r : o,
      C = x.useBooleanShorthandSyntax,
      _ = x.tabStop,
      A = au(v, l, m, x),
      P = " ",
      k = `
`.concat(nt(m + 1, _)),
      T = A.includes(`
`);
    return (
      C && A === "{false}" && !s
        ? ((P = ""), (k = ""))
        : C && A === "{true}"
        ? ((P += "".concat(e)), (k += "".concat(e)))
        : ((P += "".concat(e, "=").concat(A)),
          (k += "".concat(e, "=").concat(A))),
      {
        attributeFormattedInline: P,
        attributeFormattedMultiline: k,
        isMultilineAttribute: T,
      }
    );
  },
  uu = function (e, i) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      s = e[e.length - 1];
    return (
      s &&
      (i.type === "string" || i.type === "number") &&
      (s.type === "string" || s.type === "number")
        ? r.push(gs(String(s.value) + String(i.value)))
        : (s && r.push(s), r.push(i)),
      r
    );
  },
  hu = function (i) {
    return ["key", "ref"].includes(i);
  },
  lu = function (e) {
    return function (i) {
      var r = i.includes("key"),
        s = i.includes("ref"),
        o = i.filter(function (m) {
          return !hu(m);
        }),
        l = fn(e ? o.sort() : o);
      return s && l.unshift("ref"), r && l.unshift("key"), l;
    };
  };
function cu(e, i) {
  return Array.isArray(i)
    ? function (r) {
        return i.indexOf(r) === -1;
      }
    : function (r) {
        return i(e[r], r);
      };
}
var pu = function (i, r, s, o, l) {
    var m = l.tabStop;
    return i.type === "string"
      ? r
          .split(
            `
`
          )
          .map(function (x, v) {
            return v === 0 ? x : "".concat(nt(o, m)).concat(x);
          }).join(`
`)
      : r;
  },
  fu = function (i, r, s) {
    return function (o) {
      return pu(o, qi(o, i, r, s), i, r, s);
    };
  },
  du = function (i, r) {
    return function (s) {
      var o = Object.keys(i).includes(s);
      return !o || (o && i[s] !== r[s]);
    };
  },
  ys = function (i, r, s, o, l) {
    return l ? nt(s, o).length + r.length > l : i.length > 1;
  },
  mu = function (i, r, s, o, l, m, x) {
    return (ys(i, r, l, m, x) || s) && !o;
  },
  bs = function (e, i, r, s) {
    var o = e.type,
      l = e.displayName,
      m = l === void 0 ? "" : l,
      x = e.childrens,
      v = e.props,
      C = v === void 0 ? {} : v,
      _ = e.defaultProps,
      A = _ === void 0 ? {} : _;
    if (o !== "ReactElement")
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          o
        )
      );
    var P = s.filterProps,
      k = s.maxInlineAttributesLineLength,
      T = s.showDefaultProps,
      E = s.sortProps,
      O = s.tabStop,
      D = "<".concat(m),
      M = D,
      G = D,
      N = !1,
      y = [],
      u = cu(C, P);
    Object.keys(C)
      .filter(u)
      .filter(du(A, C))
      .forEach(function (H) {
        return y.push(H);
      }),
      Object.keys(A)
        .filter(u)
        .filter(function () {
          return T;
        })
        .filter(function (H) {
          return !y.includes(H);
        })
        .forEach(function (H) {
          return y.push(H);
        });
    var w = lu(E)(y);
    if (
      (w.forEach(function (H) {
        var z = ou(
            H,
            Object.keys(C).includes(H),
            C[H],
            Object.keys(A).includes(H),
            A[H],
            i,
            r,
            s
          ),
          te = z.attributeFormattedInline,
          K = z.attributeFormattedMultiline,
          X = z.isMultilineAttribute;
        X && (N = !0), (M += te), (G += K);
      }),
      (G += `
`.concat(nt(r, O))),
      mu(w, M, N, i, r, O, k) ? (D = G) : (D = M),
      x && x.length > 0)
    ) {
      var V = r + 1;
      (D += ">"),
        i ||
          ((D += `
`),
          (D += nt(V, O))),
        (D += x
          .reduce(uu, [])
          .map(fu(i, V, s))
          .join(
            i
              ? ""
              : `
`.concat(nt(V, O))
          )),
        i ||
          ((D += `
`),
          (D += nt(V - 1, O))),
        (D += "</".concat(m, ">"));
    } else ys(w, M, r, O, k) || (D += " "), (D += "/>");
    return D;
  },
  gu = "",
  xn = "React.Fragment",
  xu = function (i, r, s) {
    var o = {};
    return (
      r && (o = { key: r }),
      {
        type: "ReactElement",
        displayName: i,
        props: o,
        defaultProps: {},
        childrens: s,
      }
    );
  },
  vu = function (i) {
    var r = i.key;
    return !!r;
  },
  yu = function (i) {
    var r = i.childrens;
    return r.length === 0;
  },
  bu = function (e, i, r, s) {
    var o = e.type,
      l = e.key,
      m = e.childrens;
    if (o !== "ReactFragment")
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          o
        )
      );
    var x = s.useFragmentShortSyntax,
      v;
    return (
      x ? (yu(e) || vu(e) ? (v = xn) : (v = gu)) : (v = xn),
      bs(xu(v, l, m), i, r, s)
    );
  },
  Su = ["<", ">", "{", "}"],
  _u = function (i) {
    return Su.some(function (r) {
      return i.includes(r);
    });
  },
  Cu = function (i) {
    return _u(i) ? "{`".concat(i, "`}") : i;
  },
  Eu = function (i) {
    var r = i;
    return (
      r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  qi = function (e, i, r, s) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string")
      return e.value ? "".concat(Eu(Cu(String(e.value)))) : "";
    if (e.type === "ReactElement") return bs(e, i, r, s);
    if (e.type === "ReactFragment") return bu(e, i, r, s);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  wu = function (e, i) {
    return qi(e, !1, 0, i);
  },
  Jt = function (i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = r.filterProps,
      o = s === void 0 ? [] : s,
      l = r.showDefaultProps,
      m = l === void 0 ? !0 : l,
      x = r.showFunctions,
      v = x === void 0 ? !1 : x,
      C = r.functionValue,
      _ = r.tabStop,
      A = _ === void 0 ? 2 : _,
      P = r.useBooleanShorthandSyntax,
      k = P === void 0 ? !0 : P,
      T = r.useFragmentShortSyntax,
      E = T === void 0 ? !0 : T,
      O = r.sortProps,
      D = O === void 0 ? !0 : O,
      M = r.maxInlineAttributesLineLength,
      G = r.displayName;
    if (!i)
      throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var N = {
      filterProps: o,
      showDefaultProps: m,
      showFunctions: v,
      functionValue: C,
      tabStop: A,
      useBooleanShorthandSyntax: k,
      useFragmentShortSyntax: E,
      sortProps: D,
      maxInlineAttributesLineLength: M,
      displayName: G,
    };
    return wu(_r(i, N), N);
  };
const {
    defaultDecorateStory: ku,
    addons: Au,
    useEffect: Iu,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  { logger: yi } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function Pu(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return "";
  let o = [];
  if (r) {
    let l = e.map((m) => {
      let x = m.getPrettyName(),
        v = m.getTypeName();
      return v != null ? `${x}: ${v}` : x;
    });
    o.push(`(${l.join(", ")})`);
  } else o.push("()");
  return s && o.push(`=> ${i.getTypeName()}`), o.join(" ");
}
function Tu(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return "";
  let o = [];
  return (
    r ? o.push("( ... )") : o.push("()"),
    s && o.push(`=> ${i.getTypeName()}`),
    o.join(" ")
  );
}
function Nu(e) {
  return e.replace(
    /,/g,
    `,\r
`
  );
}
var sr = "custom",
  si = "object",
  Cr = "array",
  Lu = "class",
  Bt = "func",
  Dt = "element";
function Er(e) {
  return va.includes(e.toLowerCase());
}
var Ss = { format: { indent: { style: "  " }, semicolons: !1 } },
  Ru = { ...Ss, format: { newline: "" } },
  Ou = { ...Ss };
function ft(e, i = !1) {
  return Tn.generate(e, i ? Ru : Ou);
}
function ar(e, i = !1) {
  return i ? Vu(e) : ft(e);
}
function Vu(e) {
  let i = ft(e, !0);
  return i.endsWith(" }") || (i = `${i.slice(0, -1)} }`), i;
}
function vn(e, i = !1) {
  return i ? Bu(e) : Fu(e);
}
function Fu(e) {
  let i = ft(e);
  return i.endsWith("  }]") && (i = la(i)), i;
}
function Bu(e) {
  let i = ft(e, !0);
  return i.startsWith("[    ") && (i = i.replace("[    ", "[")), i;
}
var _s = (e) => e.$$typeof === Symbol.for("react.memo"),
  Mu = (e) => e.$$typeof === Symbol.for("react.forward_ref"),
  wr = { ...q, JSXElement: () => {} },
  Du = Te.extend(go());
function ai(e) {
  return e != null ? e.name : null;
}
function yn(e) {
  return e.filter(
    (i) => i.type === "ObjectExpression" || i.type === "ArrayExpression"
  );
}
function Cs(e) {
  let i = [];
  return (
    xo(
      e,
      {
        ObjectExpression(r, s) {
          i.push(yn(s).length);
        },
        ArrayExpression(r, s) {
          i.push(yn(s).length);
        },
      },
      wr
    ),
    Math.max(...i)
  );
}
function ju(e) {
  return { inferredType: { type: "Identifier", identifier: ai(e) }, ast: e };
}
function qu(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function Uu(e) {
  let i;
  cs(
    e.body,
    {
      JSXElement(o) {
        i = o;
      },
    },
    wr
  );
  let r = {
      type: i != null ? "Element" : "Function",
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    s = ai(e.id);
  return s != null && (r.identifier = s), { inferredType: r, ast: e };
}
function Gu(e) {
  let i;
  return (
    cs(
      e.body,
      {
        JSXElement(r) {
          i = r;
        },
      },
      wr
    ),
    {
      inferredType: {
        type: i != null ? "Element" : "Class",
        identifier: ai(e.id),
      },
      ast: e,
    }
  );
}
function Wu(e) {
  let i = { type: "Element" },
    r = ai(e.openingElement.name);
  return r != null && (i.identifier = r), { inferredType: i, ast: e };
}
function zu(e) {
  let i = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return ai(i) === "shape" ? Es(e.arguments[0]) : null;
}
function Es(e) {
  return { inferredType: { type: "Object", depth: Cs(e) }, ast: e };
}
function Hu(e) {
  return { inferredType: { type: "Array", depth: Cs(e) }, ast: e };
}
function Qu(e) {
  switch (e.type) {
    case "Identifier":
      return ju(e);
    case "Literal":
      return qu(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return Uu(e);
    case "ClassExpression":
      return Gu(e);
    case "JSXElement":
      return Wu(e);
    case "CallExpression":
      return zu(e);
    case "ObjectExpression":
      return Es(e);
    case "ArrayExpression":
      return Hu(e);
    default:
      return null;
  }
}
function Xu(e) {
  let i = Du.parse(`(${e})`),
    r = { inferredType: { type: "Unknown" }, ast: i };
  if (i.body[0] != null) {
    let s = i.body[0];
    switch (s.type) {
      case "ExpressionStatement": {
        let o = Qu(s.expression);
        o != null && (r = o);
        break;
      }
    }
  }
  return r;
}
function mt(e) {
  try {
    return { ...Xu(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
var Ju = 150;
function Fe({ name: e, short: i, compact: r, full: s, inferredType: o }) {
  return { name: e, short: i, compact: r, full: s ?? i, inferredType: o };
}
function ws(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function bn(e) {
  return e.split(/\r?\n/);
}
function Ei(e, i = !1) {
  return ws(ar(e, i));
}
function Sn(e, i = !1) {
  return ws(ft(e, i));
}
function Ku(e) {
  switch (e) {
    case "Object":
      return si;
    case "Array":
      return Cr;
    case "Class":
      return Lu;
    case "Function":
      return Bt;
    case "Element":
      return Dt;
    default:
      return sr;
  }
}
function ks(e, i) {
  let { inferredType: r, ast: s } = mt(e),
    { type: o } = r,
    l,
    m,
    x;
  switch (o) {
    case "Identifier":
    case "Literal":
      (l = e), (m = e);
      break;
    case "Object": {
      let { depth: v } = r;
      (l = si), (m = v === 1 ? Ei(s, !0) : null), (x = Ei(s));
      break;
    }
    case "Element": {
      let { identifier: v } = r;
      (l = v != null && !Er(v) ? v : Dt),
        (m = bn(e).length === 1 ? e : null),
        (x = e);
      break;
    }
    case "Array": {
      let { depth: v } = r;
      (l = Cr), (m = v <= 2 ? Sn(s, !0) : null), (x = Sn(s));
      break;
    }
    default:
      (l = Ku(o)), (m = bn(e).length === 1 ? e : null), (x = e);
      break;
  }
  return Fe({ name: i, short: l, compact: m, full: x, inferredType: o });
}
function $u({ raw: e }) {
  return e != null
    ? ks(e, "custom")
    : Fe({ name: "custom", short: sr, compact: sr });
}
function Yu(e) {
  let { jsDocTags: i } = e;
  return i != null && (i.params != null || i.returns != null)
    ? Fe({
        name: "func",
        short: Tu(i.params, i.returns),
        compact: null,
        full: Pu(i.params, i.returns),
      })
    : Fe({ name: "func", short: Bt, compact: Bt });
}
function Zu(e, i) {
  let r = Object.keys(e.value)
      .map((m) => `${m}: ${Mt(e.value[m], i).full}`)
      .join(", "),
    { inferredType: s, ast: o } = mt(`{ ${r} }`),
    { depth: l } = s;
  return Fe({
    name: "shape",
    short: si,
    compact: l === 1 && o ? Ei(o, !0) : null,
    full: o ? Ei(o) : null,
  });
}
function Zi(e) {
  return `objectOf(${e})`;
}
function eh(e, i) {
  let { short: r, compact: s, full: o } = Mt(e.value, i);
  return Fe({
    name: "objectOf",
    short: Zi(r),
    compact: s != null ? Zi(s) : null,
    full: o && Zi(o),
  });
}
function th(e, i) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (s, o) => {
        let { short: l, compact: m, full: x } = Mt(o, i);
        return s.short.push(l), s.compact.push(m), s.full.push(x), s;
      },
      { short: [], compact: [], full: [] }
    );
    return Fe({
      name: "union",
      short: r.short.join(" | "),
      compact: r.compact.every((s) => s != null) ? r.compact.join(" | ") : null,
      full: r.full.join(" | "),
    });
  }
  return Fe({ name: "union", short: e.value, compact: null });
}
function ih({ value: e, computed: i }) {
  return i
    ? ks(e, "enumvalue")
    : Fe({ name: "enumvalue", short: e, compact: e });
}
function rh(e) {
  if (Array.isArray(e.value)) {
    let i = e.value.reduce(
      (r, s) => {
        let { short: o, compact: l, full: m } = ih(s);
        return r.short.push(o), r.compact.push(l), r.full.push(m), r;
      },
      { short: [], compact: [], full: [] }
    );
    return Fe({
      name: "enum",
      short: i.short.join(" | "),
      compact: i.compact.every((r) => r != null) ? i.compact.join(" | ") : null,
      full: i.full.join(" | "),
    });
  }
  return Fe({ name: "enum", short: e.value, compact: e.value });
}
function or(e) {
  return `${e}[]`;
}
function _n(e) {
  return `[${e}]`;
}
function Cn(e, i, r) {
  return Fe({
    name: "arrayOf",
    short: or(e),
    compact: i != null ? _n(i) : null,
    full: r && _n(r),
  });
}
function nh(e, i) {
  let {
    name: r,
    short: s,
    compact: o,
    full: l,
    inferredType: m,
  } = Mt(e.value, i);
  if (r === "custom") {
    if (m === "Object") return Cn(s, o, l);
  } else if (r === "shape") return Cn(s, o, l);
  return Fe({ name: "arrayOf", short: or(s), compact: or(s) });
}
function Mt(e, i) {
  try {
    switch (e.name) {
      case "custom":
        return $u(e);
      case "func":
        return Yu(i);
      case "shape":
        return Zu(e, i);
      case "instanceOf":
        return Fe({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return eh(e, i);
      case "union":
        return th(e, i);
      case "enum":
        return rh(e);
      case "arrayOf":
        return nh(e, i);
      default:
        return Fe({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Fe({ name: "unknown", short: "unknown", compact: "unknown" });
}
function sh(e) {
  let { type: i } = e.docgenInfo;
  if (i == null) return null;
  try {
    switch (i.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: s, full: o } = Mt(i, e);
        return s != null && !aa(s) ? be(s) : o ? be(r, o) : be(r);
      }
      case "func": {
        let { short: r, full: s } = Mt(i, e),
          o = r,
          l;
        return s && s.length < Ju ? (o = s) : s && (l = Nu(s)), be(o, l);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function As({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r === 1) {
    let s = ar(i, !0);
    if (!ei(s)) return be(s);
  }
  return be(si, ar(i));
}
function Is({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r <= 2) {
    let s = vn(i, !0);
    if (!ei(s)) return be(s);
  }
  return be(Cr, vn(i));
}
function kr(e, i) {
  return i ? `${e}( ... )` : `${e}()`;
}
function Ui(e) {
  return `<${e} />`;
}
function Ps(e) {
  let { type: i, identifier: r } = e;
  switch (i) {
    case "Function":
      return kr(r, e.hasParams);
    case "Element":
      return Ui(r);
    default:
      return r;
  }
}
function ah({ inferredType: e, ast: i }) {
  let { identifier: r } = e;
  if (r != null) return be(Ps(e), ft(i));
  let s = ft(i, !0);
  return ei(s) ? be(Bt, ft(i)) : be(s);
}
function oh(e, i) {
  let { inferredType: r } = i,
    { identifier: s } = r;
  if (s != null && !Er(s)) {
    let o = Ps(r);
    return be(o, e);
  }
  return ei(e) ? be(Dt, e) : be(e);
}
function Ts(e) {
  try {
    let i = mt(e);
    switch (i.inferredType.type) {
      case "Object":
        return As(i);
      case "Function":
        return ah(i);
      case "Element":
        return oh(e, i);
      case "Array":
        return Is(i);
      default:
        return null;
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function Ns(e) {
  return e.$$typeof != null;
}
function Ls(e, i) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== i ? r : null;
}
var uh = (e) => be(JSON.stringify(e));
function hh(e) {
  let { type: i } = e,
    { displayName: r } = i,
    s = Jt(e, {});
  if (r != null) {
    let o = Ui(r);
    return be(o, s);
  }
  if (Vo(i) && Er(i)) {
    let o = Jt(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!ei(o)) return be(o);
  }
  return be(Dt, s);
}
var lh = (e) => {
    if (Ns(e) && e.type != null) return hh(e);
    if (Io(e)) {
      let i = mt(JSON.stringify(e));
      return As(i);
    }
    if (Array.isArray(e)) {
      let i = mt(JSON.stringify(e));
      return Is(i);
    }
    return be(si);
  },
  ch = (e, i) => {
    let r = !1,
      s;
    if (Qr(e.render)) r = !0;
    else if (e.prototype != null && Qr(e.prototype.render)) r = !0;
    else {
      let l;
      try {
        s = mt(e.toString());
        let { hasParams: m, params: x } = s.inferredType;
        m
          ? x.length === 1 && x[0].type === "ObjectPattern" && (l = e({}))
          : (l = e()),
          l != null && Ns(l) && (r = !0);
      } catch {}
    }
    let o = Ls(e, i.name);
    if (o != null) {
      if (r) return be(Ui(o));
      s != null && (s = mt(e.toString()));
      let { hasParams: l } = s.inferredType;
      return be(kr(o, l));
    }
    return be(r ? Dt : Bt);
  },
  ph = (e) => be(e.toString()),
  Rs = { string: uh, object: lh, function: ch, default: ph };
function fh(e = {}) {
  return { ...Rs, ...e };
}
function Os(e, i, r = Rs) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, i);
      case "object":
        return r.object(e, i);
      case "function":
        return r.function(e, i);
      default:
        return r.default(e, i);
    }
  } catch (s) {
    console.error(s);
  }
  return null;
}
function dh(e, i) {
  let { propTypes: r } = i;
  return r != null
    ? Object.keys(r)
        .map((s) => e.find((o) => o.name === s))
        .filter(Boolean)
    : e;
}
var mh = (e, { name: i, type: r }) => {
    let s = r.summary === "element" || r.summary === "elementType",
      o = Ls(e, i);
    if (o != null) {
      if (s) return be(Ui(o));
      let { hasParams: l } = mt(e.toString()).inferredType;
      return be(kr(o, l));
    }
    return be(s ? Dt : Bt);
  },
  gh = fh({ function: mh });
function xh(e, i) {
  let { propDef: r } = e,
    s = sh(e);
  s != null && (r.type = s);
  let { defaultValue: o } = e.docgenInfo;
  if (o != null && o.value != null) {
    let l = Ts(o.value);
    l != null && (r.defaultValue = l);
  } else if (i != null) {
    let l = Os(i, r, gh);
    l != null && (r.defaultValue = l);
  }
  return r;
}
function vh(e, i) {
  let r = i.defaultProps != null ? i.defaultProps : {},
    s = e.map((o) => xh(o, r[o.propDef.name]));
  return dh(s, i);
}
function yh(e, i) {
  let { propDef: r } = e,
    { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let o = Ts(s.value);
    o != null && (r.defaultValue = o);
  } else if (i != null) {
    let o = Os(i, r);
    o != null && (r.defaultValue = o);
  }
  return r;
}
function bh(e) {
  return e.map((i) => yh(i));
}
var En = new Map();
Object.keys(Xr).forEach((e) => {
  let i = Xr[e];
  En.set(i, e), En.set(i.isRequired, e);
});
function Sh(e, i) {
  let r = e;
  !na(e) && !e.propTypes && _s(e) && (r = e.type);
  let s = sa(r, i);
  if (s.length === 0) return [];
  switch (s[0].typeSystem) {
    case Hr.JAVASCRIPT:
      return vh(s, e);
    case Hr.TYPESCRIPT:
      return bh(s);
    default:
      return s.map((o) => o.propDef);
  }
}
var _h = (e) => ({ rows: Sh(e, "props") }),
  Ch = (e) => {
    if (e) {
      let { rows: i } = _h(e);
      if (i)
        return i.reduce((r, s) => {
          let {
            name: o,
            description: l,
            type: m,
            sbType: x,
            defaultValue: v,
            jsDocTags: C,
            required: _,
          } = s;
          return (
            (r[o] = {
              name: o,
              description: l,
              type: { required: _, ...x },
              table: { type: m, jsDocTags: C, defaultValue: v },
            }),
            r
          );
        }, {});
    }
    return null;
  };
function ur(e) {
  if (_t.isValidElement(e)) {
    let i = Object.keys(e.props).reduce(
      (r, s) => ((r[s] = ur(e.props[s])), r),
      {}
    );
    return { ...e, props: i, _owner: null };
  }
  return Array.isArray(e) ? e.map(ur) : e;
}
var Eh = (e, i) => {
    if (typeof e > "u")
      return yi.warn("Too many skip or undefined component"), null;
    let r = e,
      s = r.type;
    for (let l = 0; l < i.skip; l += 1) {
      if (typeof r > "u") return yi.warn("Cannot skip undefined element"), null;
      if (Qt.Children.count(r) > 1)
        return yi.warn("Trying to skip an array of elements"), null;
      typeof r.props.children > "u"
        ? (yi.warn("Not enough children to skip elements."),
          typeof r.type == "function" &&
            r.type.name === "" &&
            (r = Qt.createElement(s, { ...r.props })))
        : typeof r.props.children == "function"
        ? (r = r.props.children())
        : (r = r.props.children);
    }
    let o = {
      ...(typeof i.displayName == "string"
        ? { showFunctions: !0, displayName: () => i.displayName }
        : {
            displayName: (l) =>
              l.type.displayName ||
              (l.type === Symbol.for("react.profiler") ? "Profiler" : null) ||
              ra(l.type, "displayName") ||
              (l.type.name !== "_default" ? l.type.name : null) ||
              (typeof l.type == "function" ? "No Display Name" : null) ||
              (Mu(l.type) ? l.type.render.name : null) ||
              (_s(l.type) ? l.type.type.name : null) ||
              l.type,
          }),
      filterProps: (l, m) => l !== void 0,
      ...i,
    };
    return Qt.Children.map(e, (l) => {
      let m = typeof l == "number" ? l.toString() : l,
        x = (typeof Jt == "function" ? Jt : Jt.default)(ur(m), o);
      if (x.indexOf("&quot;") > -1) {
        let v = x.match(/\S+=\\"([^"]*)\\"/g);
        v &&
          v.forEach((C) => {
            x = x.replace(C, C.replace(/&quot;/g, "'"));
          });
      }
      return x;
    })
      .join(
        `
`
      )
      .replace(/function\s+noRefCheck\(\)\s+\{\}/g, "() => {}");
  },
  wh = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  kh = (e) => {
    var s;
    let i =
        (s = e == null ? void 0 : e.parameters.docs) == null
          ? void 0
          : s.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (i == null ? void 0 : i.type) === zr.DYNAMIC
      ? !1
      : !r ||
          (i == null ? void 0 : i.code) ||
          (i == null ? void 0 : i.type) === zr.CODE;
  },
  Ah = (e) => {
    var i, r;
    return (
      ((i = e.type) == null ? void 0 : i.displayName) === "MDXCreateElement" &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  Vs = (e) => {
    if (!Ah(e)) return e;
    let { mdxType: i, originalType: r, children: s, ...o } = e.props,
      l = [];
    return (
      s && (l = (Array.isArray(s) ? s : [s]).map(Vs)),
      _t.createElement(r, o, ...l)
    );
  },
  Fs = (e, i) => {
    var _, A;
    let r = Au.getChannel(),
      s = kh(i),
      o = "";
    Iu(() => {
      if (!s) {
        let { id: P, unmappedArgs: k } = i;
        r.emit(ia, { id: P, source: o, args: k });
      }
    });
    let l = e();
    if (s) return l;
    let m = { ...wh, ...((i == null ? void 0 : i.parameters.jsx) || {}) },
      x =
        (A =
          (_ = i == null ? void 0 : i.parameters.docs) == null
            ? void 0
            : _.source) != null && A.excludeDecorators
          ? i.originalStoryFn(i.args, i)
          : l,
      v = Vs(x),
      C = Eh(v, m);
    return C && (o = C), l;
  },
  Rh = (e, i) => {
    let r = i.findIndex((o) => o.originalFn === Fs),
      s = r === -1 ? i : [...i.splice(r, 1), ...i];
    return ku(e, s);
  },
  Oh = {
    docs: {
      story: { inline: !0 },
      extractArgTypes: Ch,
      extractComponentDescription: ea,
    },
  },
  Vh = [Fs],
  Fh = [ta];
export {
  Rh as applyDecorators,
  Fh as argTypesEnhancers,
  Vh as decorators,
  Oh as parameters,
};
