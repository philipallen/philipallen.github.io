import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import{M as d,C as n,a}from"./index-CbdW0LDH.js";import{L as c,B as i,a as l,b as m,c as p,d as h,I as x,e as j,f as u,N as f,C as b,g as L}from"./List.stories-DgwMvb3P.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BvPi49FF.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";import"./index-ba3HtoI3.js";import"./index-BMNx4yaP.js";import"./Link-Bg8fES9C.js";import"./index-DbtYIglS.js";import"./index-Doj3HQ5r.js";import"./LinkBase-mIcNyS13.js";import"./Typography-JwzeacV5.js";import"./VisuallyHidden-OXTKoEg5.js";import"./mergeProps-BolikptB.js";import"./useFocusWithin-B2y0-g2l.js";import"./LinkWithIcon-Dcvm-gPE.js";const{deprecate:I}=__STORYBOOK_MODULE_CLIENT_LOGGER__;I("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function o(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(t.h1,{id:"list",children:"List"}),`
`,e.jsxs(t.p,{children:["Every item is rendered by one ",e.jsx(t.code,{children:"ListItem"})," that adapts its leading slot (bullet, icon or number) to the variant. A list is built either from ",e.jsx(t.code,{children:"data"})," or by composing ",e.jsx(t.code,{children:"ListItem"})," children inside ",e.jsx(t.code,{children:"List"}),"."]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"Build a list from data:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import type { ListItemData } from "@boi/react-components";

const data: ListItemData[] = [
  { description: "Skip up to two payments a year" },
  { description: "Request a payment break" },
];

<List data={data} />;
`})}),`
`,e.jsxs(t.p,{children:["Or compose it from ",e.jsx(t.code,{children:"ListItem"})," children. ",e.jsx(t.code,{children:"ListItem"})," must be a direct child of ",e.jsx(t.code,{children:"List"})," (not inside a fragment or a wrapper component):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<List variant="numbered">
  <ListItem>Search for Bank of Ireland app in your app store</ListItem>
  <ListItem body="Body copy text">
    Once downloaded, follow the instructions
  </ListItem>
</List>
`})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"bulleted-dark-grey",children:"Bulleted dark grey"}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h3,{id:"bulleted-with-rich-text",children:"Bulleted with rich text"}),`
`,e.jsx(t.p,{children:"Inline bold and inline text links are supported in descriptions."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"bulleted-with-link",children:"Bulleted with link"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"bulleted-nested",children:"Bulleted nested"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h3,{id:"icon-dark-grey-semibold",children:"Icon dark grey semibold"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h3,{id:"icon-nested",children:"Icon nested"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"numbered",children:"Numbered"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(t.h3,{id:"composed",children:"Composed"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(t.h3,{id:"composed-nested",children:"Composed nested"}),`
`,e.jsx(n,{of:L})]})}function A(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{A as default};
