import{a as p,u as c,b as k,j as r}from"./index-1154a484.js";import{T as u}from"./Typography-c902fb8d.js";import{L as m}from"./LinkBase-b486544d.js";const h=p(u)`
  ${()=>{const{tokens:o}=c(),{link:e}=o;return k`
      background: ${e.backgroundColor.base};

      text-decoration-line: ${e.decoration.line};
      text-decoration-thickness: ${e.decoration.thickness.base};
      text-underline-offset: 2px;

      &:hover {
        text-decoration-thickness: ${e.decoration.thickness.hover};
      }

      &:active {
        background: ${e.backgroundColor.active};
        text-decoration-thickness: ${e.decoration.thickness.active};
      }
    `}}
`;function x(o){const{children:e,...l}=o,{tokens:d}=c(),{link:n}=d;return r.jsx(m,{...l,children:r.jsx(h,{component:"span",color:"inherit",variant:n.typographyVariant,fontFamily:n.fontFamily,children:e})})}const g={title:"Inputs/Link",component:x,argTypes:{href:{control:{type:"text"}}},args:{href:"#"}},t={args:{children:"Text link label"}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Basic"],v=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{t as B,v as L};
