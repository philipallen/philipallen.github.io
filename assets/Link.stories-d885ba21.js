import{a as m,u as c,b as u,j as r}from"./index-e76b8df1.js";import{r as h}from"./index-c013ead5.js";import{T as x}from"./Typography-ab363d23.js";import{L as f}from"./LinkBase-697caf8d.js";const g=m(x)`
  ${()=>{const{tokens:o}=c(),{link:e}=o;return u`
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
`,l=h.forwardRef((o,e)=>{const{children:d,...p}=o,{tokens:k}=c(),{link:n}=k;return r.jsx(f,{...p,ref:e,children:r.jsx(g,{component:"span",color:"inherit",variant:n.typographyVariant,fontFamily:n.fontFamily,children:d})})});l.displayName="Link";const b={title:"Inputs/Link",component:l,argTypes:{href:{control:{type:"text"}}},args:{href:"#"}},t={args:{children:"Text link label"}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Basic"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{t as B,j as L};
