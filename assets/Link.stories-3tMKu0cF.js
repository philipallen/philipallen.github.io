import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as u}from"./index-DH5ua8nC.js";import{a as l,u as d,b as h}from"./index-CZQU1x5t.js";import{L as x}from"./LinkBase-B3OHF2KD.js";import{T as g}from"./Typography-BQS1i-up.js";const p=l(x)``,b=l(g)`
  ${()=>{const{tokens:t}=d(),{link:e}=t;return h`
      background: ${e.backgroundColor.base};

      text-decoration-line: ${e.decoration.line.base};
      text-decoration-thickness: ${e.decoration.thickness.base};
      text-underline-offset: ${e.decoration.offset};

      &:hover {
        text-decoration-thickness: ${e.decoration.thickness.hover};
      }

      &:active {
        background: ${e.backgroundColor.active};
        text-decoration-thickness: ${e.decoration.thickness.active};
      }

      ${p}:focus-visible && {
        text-decoration-line: ${e.decoration.line.focus};
      }
    `}}
`,n=u.forwardRef((t,e)=>{const{children:m,...k}=t,{tokens:f}=d(),{link:r}=f;return s.jsx(p,{...k,ref:e,children:s.jsx(b,{component:"span",color:"inherit",variant:r.typography.variant,fontFamily:r.typography.fontFamily,children:m})})});n.displayName="Link";n.__docgenInfo={description:"",methods:[],displayName:"Link"};const y={title:"Components/Inputs/Link",component:n,argTypes:{href:{control:{type:"text"}}},args:{href:"#"}},o={args:{children:"Text link label"}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const $=["Basic"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,__namedExportsOrder:$,default:y},Symbol.toStringTag,{value:"Module"}));export{o as B,B as L};
