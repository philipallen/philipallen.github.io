import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as a}from"./index-BRkUXrbv.js";import{M as r,C as t,a as l}from"./index-BUjMt0e0.js";import{T as h,B as o,E as c}from"./Typography.stories-DQUt9q6w.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-QWjLwNRX.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-BHlkTKmU.js";import"./index-hDdRnVWP.js";import"./index-WLaP1tkh.js";import"./Typography-BeL7-j70.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:h}),`
`,n.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.h2,{id:"full-list",children:"Full list"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"changing-the-entire-strings-font-weight-or-style",children:"Changing the entire string's font weight or style"}),`
`,n.jsxs(e.p,{children:["If you want to change the default ",n.jsx(e.code,{children:"font-weight"})," or ",n.jsx(e.code,{children:"font-style"}),", it's important that you use the ",n.jsx(e.code,{children:"fontFamily"})," prop. e.g."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography>This is normal</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography fontFamily="OpenSansBold">This is bold</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography fontFamily="OpenSansItalic">This is italic</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography fontFamily="OpenSansSemiBoldItalic">
  This is bold and italic
</Typography>
`})}),`
`,n.jsxs(e.p,{children:["Note: You can't change all Typography variants' styles. Design rules state the Display and Headline variants should not change. You will encounter Typescript errors if you try to change the ",n.jsx(e.code,{children:"fontFamily"})," of these variants."]}),`
`,n.jsx(e.h3,{id:"changing-part-of-the-strings-font-weight-or-style",children:"Changing part of the string's font weight or style"}),`
`,n.jsxs(e.p,{children:["If you want to change part of your sentence's ",n.jsx(e.code,{children:"font-weight"})," or ",n.jsx(e.code,{children:"font-style"})," you can do the following and the correct ",n.jsx(e.code,{children:"font-family"})," will be assigned:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography>
  Only <b>this text</b> is bold
</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography>
  Only <strong>this text</strong> is bold
</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography>
  Only <em>this text</em> is italic
</Typography>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Typography>
  Only <i>this text</i> is italic
</Typography>
`})}),`
`,n.jsx(e.p,{children:"You can also nest bold and italic to make text italic and bold:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Typography>
  Only
  <b>
    <i>this text</i>
  </b>
  is bold and italic
</Typography>
`})})]})}function O(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{O as default};
