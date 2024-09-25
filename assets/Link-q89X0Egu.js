import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as f}from"./index-DH5ua8nC.js";import{L as x}from"./index-DgS1v8YF.js";import{a as r,u as s,b as i}from"./index-D3TaQYms.js";import{L as h}from"./LinkBase-PirqjvE3.js";import{T as u}from"./Typography-squJd_7u.js";const a=r(h)``,$=r(u)`
  ${({$isUnderlined:e})=>{const{tokens:t}=s(),{link:o}=t;return[i`
        background: ${o.backgroundColor.base};

        text-decoration-thickness: ${o.decoration.thickness.base};
        text-underline-offset: ${o.decoration.offset};

        &:hover {
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-thickness: ${o.decoration.thickness.hover};
        }

        &:active {
          background: ${o.backgroundColor.active};
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-thickness: ${o.decoration.thickness.active};
        }

        ${a}:focus-visible && {
          text-decoration-line: ${o.decoration.line.focus};
        }
      `,e&&i`
          text-decoration-line: ${o.decoration.line.base};
        `]}}
`,c=f.forwardRef((e,t)=>{const{isUnderlined:o=!0,variant:d=x.DEFAULT_VARIANT,children:l,...p}=e,{tokens:k}=s(),{link:m}=k;return n.jsx(a,{...p,ref:t,children:n.jsx($,{component:"span",color:"inherit",variant:d,fontFamily:m.typography.fontFamily,$isUnderlined:o,children:l})})});c.displayName="Link";c.__docgenInfo={description:"",methods:[],displayName:"Link"};export{c as L};
