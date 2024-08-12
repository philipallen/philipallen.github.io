import{j as r}from"./jsx-runtime-DQ32znRX.js";import{c as a,d as i,e as d,f as c,B as m,g as l}from"./index-jNFq1OWt.js";import"./chunk-HLWAVYOI-BX6xYzJ5.js";import{g as p,U as g}from"./index-Bh9NnRX_.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-OoFsiUG9.js";import"../sb-preview/runtime.js";import"./client-CoCFDeS7.js";import"./index-5Gu-hNp0.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const{light:{color:n}}=l("boi"),u=(o,{globals:e})=>r.jsx(c,{brandTheme:e.brandTheme,children:r.jsx(o,{})}),h=(o,{globals:e})=>{const t=e.brandTheme==="boi::dark"?n.dmPrimary:n.groundGrey,s=`
    /* mdx docs canvas */
    .docs-story {
      background-color: ${t} !important
    }
    /* preview page */
    .sb-main-padded {
      background-color: ${t} !important
    }
  `;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:s}),r.jsx(o,{})]})},b=m.filter(o=>o!=="boiKids"),C={globalTypes:{brandTheme:{description:"Global brand (theme)",defaultValue:`${a}::${i}`,toolbar:{icon:"paintbrush",dynamicTitle:!0,title:"Brand / Theme",items:b.flatMap(o=>d(o).filter(e=>e!=="pride").flatMap(e=>({title:`Bank of Ireland (${e})`,value:`${o}::${e}`})))}}},parameters:{docs:{container:({children:o,context:e})=>r.jsx(p,{context:e,children:r.jsx(g,{children:o})})},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Introduction","*","Developer docs",["react-components","react-design-tokens","design-tokens"],"Changelogs",["react-components","react-design-tokens","design-tokens"]]}}},decorators:[u,h]};export{C as default};
