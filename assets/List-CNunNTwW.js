import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CR-ysAsT.js";import"./blocks-De-Geas2.js";import{L as d,B as s,a,b as l,c,d as m,I as h,e as p,f as x,N as j,C as u,g as f}from"./List.stories-C1pgG6sK.js";import{M as b,C as t,a as L}from"./index-BVtMZgJX.js";import"./index-BVaTkfsr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqWt56HC.js";import"./index-WPiYv3Ve.js";import"./Link-DBZ-8t3B.js";import"./index-BRwMcuml.js";import"./index-Doj3HQ5r.js";import"./LinkBase-TJoyPf1u.js";import"./Typography-Cewaurru.js";import"./VisuallyHidden-OXTKoEg5.js";import"./mergeProps-BolikptB.js";import"./useFocusWithin-B2y0-g2l.js";import"./LinkWithIcon-B6NmO8n_.js";import"./iframe-D8y55ObM.js";import"./index-CNGsMlyN.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{of:d}),`
`,e.jsx(n.h1,{id:"list",children:"List"}),`
`,e.jsxs(n.p,{children:["Every item is rendered by one ",e.jsx(n.code,{children:"ListItem"})," that adapts its leading slot (bullet, icon or number) to the variant. A list is built either from ",e.jsx(n.code,{children:"data"})," or by composing ",e.jsx(n.code,{children:"ListItem"})," children inside ",e.jsx(n.code,{children:"List"}),"."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(L,{of:s}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Build a list from data:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ListItemData } from "@boi/react-components";

const data: ListItemData[] = [
  { description: "Skip up to two payments a year" },
  { description: "Request a payment break" },
];

<List data={data} />;
`})}),`
`,e.jsxs(n.p,{children:["Or compose it from ",e.jsx(n.code,{children:"ListItem"})," children. ",e.jsx(n.code,{children:"ListItem"})," must be a direct child of ",e.jsx(n.code,{children:"List"})," (not inside a fragment or a wrapper component):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<List variant="numbered">
  <ListItem>Search for Bank of Ireland app in your app store</ListItem>
  <ListItem body="Body copy text">
    Once downloaded, follow the instructions
  </ListItem>
</List>
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"bulleted-dark-grey",children:"Bulleted dark grey"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h3,{id:"bulleted-with-rich-text",children:"Bulleted with rich text"}),`
`,e.jsx(n.p,{children:"Inline bold and inline text links are supported in descriptions."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"bulleted-with-link",children:"Bulleted with link"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"bulleted-nested",children:"Bulleted nested"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"icon-dark-grey-semibold",children:"Icon dark grey semibold"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"icon-nested",children:"Icon nested"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"numbered",children:"Numbered"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"composed",children:"Composed"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"composed-nested",children:"Composed nested"}),`
`,e.jsx(t,{of:f})]})}function T(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{T as default};
