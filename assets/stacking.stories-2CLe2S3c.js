import{j as s}from"./jsx-runtime-DQ32znRX.js";import{u as l}from"./index-CtBUti8q.js";import{a as m}from"./index-BB684epc.js";const u=()=>{const{tokens:d}=l(),{zIndex:o,themeColor:n,radius:p}=d;return s.jsx("div",{style:{height:"300px"},children:Object.keys(o).map((r,t)=>s.jsx("div",{style:{position:"absolute",display:"flex",alignItems:"end",padding:"0.5rem",top:40*t,left:30*t,height:"100px",width:"200px",borderRadius:p.r16,zIndex:o[r],backgroundColor:n.hueB100,border:`2px solid ${n.hueB300}`,filter:`brightness(${100-5*t}%)`},children:s.jsx(m,{variant:"bodyM",children:`${r}, ${o[r]}`})},t))})},g={title:"Tokens/Stacking",component:u},e={};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const h=["Stacking"],k=Object.freeze(Object.defineProperty({__proto__:null,Stacking:e,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{k as S,e as a};