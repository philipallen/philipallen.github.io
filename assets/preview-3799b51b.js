import{j as o}from"./jsx-runtime-6eef64cc.js";import{D as i,c,B as m,d,g as l,e as u}from"./index-2b4c4340.js";import"./chunk-HLWAVYOI-13d8fe93.js";import{e as p,U as h}from"./index-d7143317.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-99282e1b.js";import"../sb-preview/runtime.js";import"./react-18-a99840e4.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./doctrine-fe9e14af.js";import"./index-356e4a49.js";const{light:{color:s}}=l("boi"),T=(e,{globals:r})=>o.jsx(u,{brandTheme:r.brandTheme,children:o.jsx(e,{})}),y=(e,{globals:r,parameters:a})=>{var t;const n=`.docs-story {
    background-color: ${((t=r==null?void 0:r.backgrounds)==null?void 0:t.value)||a.backgrounds.values[0].value}
  }`;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:n}),o.jsx(e,{})]})},F={globalTypes:{brandTheme:{description:"Global brand / theme for components",defaultValue:`${i}::${c}`,toolbar:{icon:"paintbrush",dynamicTitle:!0,title:"Brand / Theme",items:m.flatMap(e=>d(e).flatMap(r=>({title:`${e} (${r})`,value:`${e}::${r}`})))}}},parameters:{docs:{container:({children:e,context:r})=>o.jsx(p,{context:r,children:o.jsx(h,{children:e})})},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"Ground Grey",values:[{name:"Ground Grey",value:s.groundGrey},{name:"DM Primary",value:s.dmPrimary}]},options:{storySort:{order:["Intro"]}}},decorators:[T,y]};export{F as default};