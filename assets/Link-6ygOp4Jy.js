import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as k}from"./index-DH5ua8nC.js";import{a as r,u as s,b as l}from"./index-BW2nVlX_.js";import{L as m}from"./LinkBase-xK6KOb7P.js";import{T as f}from"./Typography-DLg3KiKL.js";const i=r(m)``,h=r(f)`
  ${()=>{const{tokens:t}=s(),{link:o}=t;return l`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      &:hover {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      &:active {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${i}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,a=k.forwardRef((t,o)=>{const{children:c,...d}=t,{tokens:p}=s(),{link:e}=p;return n.jsx(i,{...d,ref:o,children:n.jsx(h,{component:"span",color:"inherit",variant:e.typography.variant,fontFamily:e.typography.fontFamily,children:c})})});a.displayName="Link";a.__docgenInfo={description:"",methods:[],displayName:"Link"};export{a as L};
