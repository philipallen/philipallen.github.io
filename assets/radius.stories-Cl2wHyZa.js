import{j as o}from"./jsx-runtime-DQ32znRX.js";import{u as p}from"./index-CtBUti8q.js";import{a as m}from"./index-BB684epc.js";const u=()=>{const{tokens:d}=p(),{radius:r,themeColor:t}=d;return o.jsx("div",{children:Object.keys(r).map((s,c)=>o.jsxs("div",{style:{marginBottom:"1rem"},children:[o.jsx("div",{style:{border:`2px solid ${t.hueB300}`,borderRadius:r[s],backgroundColor:t.hueB100,height:"100px",width:"100px"}}),o.jsx(m,{variant:"bodyM",children:`${s}, ${r[s]}`})]},c))})},l={title:"Tokens/Radius",component:u},e={};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const x=["Radius"],g=Object.freeze(Object.defineProperty({__proto__:null,Radius:e,__namedExportsOrder:x,default:l},Symbol.toStringTag,{value:"Module"}));export{g as R,e as a};