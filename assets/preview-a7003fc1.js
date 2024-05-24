import{j as r}from"./jsx-runtime-6eef64cc.js";import{D as a,c as i,d as c,e as d,B as m,g as l}from"./index-912b60f4.js";import"./chunk-HLWAVYOI-e0f604c0.js";import{f as p,U as g}from"./index-12054c48.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-126a13e8.js";import"../sb-preview/runtime.js";import"./react-18-a99840e4.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const{light:{color:n}}=l("boi"),u=(o,{globals:e})=>r.jsx(d,{brandTheme:e.brandTheme,children:r.jsx(o,{})}),b=(o,{globals:e})=>{const t=e.brandTheme==="boi::dark"?n.dmPrimary:n.groundGrey,s=`
    /* mdx docs canvas */
    .docs-story {
      background-color: ${t} !important
    }
    /* preview page */
    .sb-main-padded {
      background-color: ${t} !important
    }
  `;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:s}),r.jsx(o,{})]})},h=m.filter(o=>o!=="boiKids"),w={globalTypes:{brandTheme:{description:"Global brand (theme)",defaultValue:`${a}::${i}`,toolbar:{icon:"paintbrush",dynamicTitle:!0,title:"Brand / Theme",items:h.flatMap(o=>c(o).filter(e=>e!=="pride").flatMap(e=>({title:`Bank of Ireland (${e})`,value:`${o}::${e}`})))}}},parameters:{docs:{container:({children:o,context:e})=>r.jsx(p,{context:e,children:r.jsx(g,{children:o})})},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Introduction","*","Developer docs",["react-components","react-design-tokens","design-tokens"],"Changelogs",["react-components","react-design-tokens","design-tokens"]]}}},decorators:[u,b]};export{w as default};
