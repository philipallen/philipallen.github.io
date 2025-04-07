import{j as r}from"./jsx-runtime-BkBIjjFT.js";import{c as a,d as i,e as d,f as c,B as m,g as l}from"./index-DT8u_GqS.js";import"./preview-DnE3ynZU.js";import"./DocsRenderer-CFRXHY34-fCsaZ0Hp.js";import{D as p,U as g}from"./index-BQNdGnmF.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DaCOH5i2.js";import"./react-18-CQbQK8dD.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";__STORYBOOK_MODULE_PREVIEW_API__;const{light:{color:n}}=l("boi"),u=(e,{globals:o})=>r.jsx(c,{brandTheme:o.brandTheme,children:r.jsx(e,{})}),h=(e,{globals:o})=>{const t=o.brandTheme==="boi::dark"?n.dmPrimary:n.groundGrey,s=`
    /* mdx docs canvas */
    .docs-story {
      background-color: ${t} !important
    }
    /* preview page */
    .sb-main-padded {
      background-color: ${t} !important
    }
  `;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:s}),r.jsx(e,{})]})},T=m.filter(e=>e!=="newIreland"),v={globalTypes:{brandTheme:{description:"Global brand (theme)",defaultValue:`${a}::${i}`,toolbar:{icon:"paintbrush",dynamicTitle:!0,title:"Brand / Theme",items:T.flatMap(e=>d(e).filter(o=>o!=="pride").flatMap(o=>({title:`Bank of Ireland (${o})`,value:`${e}::${o}`})))}}},parameters:{docs:{container:({children:e,context:o})=>r.jsx(p,{context:o,children:r.jsx(g,{children:e})})},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Introduction","*","Developer docs",["react-components","react-design-tokens","design-tokens"],"Changelogs",["react-components","react-design-tokens","design-tokens"]]}}},decorators:[u,h]};export{v as default};
