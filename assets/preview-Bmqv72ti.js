import{j as r}from"./jsx-runtime-DQ32znRX.js";import{c as a,d as i,e as d,f as c,B as m,g as l}from"./index-CzvSJj6w.js";import"./chunk-HLWAVYOI-INiziEjd.js";import{g as p,U as g}from"./index-IFYCzHGa.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cuil7yz6.js";import"../sb-preview/runtime.js";import"./client-CbiC-Wbs.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const{light:{color:n}}=l("boi"),u=(e,{globals:o})=>r.jsx(c,{brandTheme:o.brandTheme,children:r.jsx(e,{})}),h=(e,{globals:o})=>{const t=o.brandTheme==="boi::dark"?n.dmPrimary:n.groundGrey,s=`
    /* mdx docs canvas */
    .docs-story {
      background-color: ${t} !important
    }
    /* preview page */
    .sb-main-padded {
      background-color: ${t} !important
    }
  `;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:s}),r.jsx(e,{})]})},T=m.filter(e=>e!=="newIreland"),C={globalTypes:{brandTheme:{description:"Global brand (theme)",defaultValue:`${a}::${i}`,toolbar:{icon:"paintbrush",dynamicTitle:!0,title:"Brand / Theme",items:T.flatMap(e=>d(e).filter(o=>o!=="pride").flatMap(o=>({title:`Bank of Ireland (${o})`,value:`${e}::${o}`})))}}},parameters:{docs:{container:({children:e,context:o})=>r.jsx(p,{context:o,children:r.jsx(g,{children:e})})},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Introduction","*","Developer docs",["react-components","react-design-tokens","design-tokens"],"Changelogs",["react-components","react-design-tokens","design-tokens"]]}}},decorators:[u,h]};export{C as default};
