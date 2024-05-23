import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as k}from"./index-c013ead5.js";import{a as u,u as l,b as h}from"./index-912b60f4.js";import{T as f}from"./Typography-a205704a.js";import{L as x}from"./LinkBase-19a7c9c9.js";const g=u(f)`
  ${()=>{const{tokens:o}=l(),{link:e}=o;return h`
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
`,n=k.forwardRef((o,e)=>{const{children:d,...p}=o,{tokens:m}=l(),{link:r}=m;return s.jsx(x,{...p,ref:e,children:s.jsx(g,{component:"span",color:"inherit",variant:r.typographyVariant,fontFamily:r.fontFamily,children:d})})});n.displayName="Link";n.__docgenInfo={description:"",methods:[],displayName:"Link"};const b={title:"Components/Inputs/Link",component:n,argTypes:{href:{control:{type:"text"}}},args:{href:"#"}},t={args:{children:"Text link label"}};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["Basic"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{t as B,j as L};
