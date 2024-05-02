import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as m}from"./index-c013ead5.js";import{a as u,u as c,b as h}from"./index-2b4c4340.js";import{T as x}from"./Typography-2ed3318f.js";import{L as f}from"./LinkBase-3e4249b4.js";const g=u(x)`
  ${()=>{const{tokens:o}=c(),{link:e}=o;return h`
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
`,l=m.forwardRef((o,e)=>{const{children:p,...d}=o,{tokens:k}=c(),{link:r}=k;return n.jsx(f,{...d,ref:e,children:n.jsx(g,{component:"span",color:"inherit",variant:r.typographyVariant,fontFamily:r.fontFamily,children:p})})});l.displayName="Link";const b={title:"Inputs/Link",component:l,argTypes:{href:{control:{type:"text"}}},args:{href:"#"}},t={args:{children:"Text link label"}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Basic"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{t as B,_ as L};
