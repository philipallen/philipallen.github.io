import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as x}from"./index-DH5ua8nC.js";import{L as h}from"./index-DKJt7waT.js";import{a as r,u as a,b as i}from"./index-CtBUti8q.js";import{L as $}from"./LinkBase-9_uKMkeQ.js";import{T as u}from"./Typography-v4_88_aK.js";const c=r($)``,y=r(u)`
  ${({$isUnderlined:o,$isDashed:t})=>{const{tokens:n}=a(),{link:e}=n;return[i`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        &:hover {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        &:active {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        ${c}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,o&&i`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,o&&t&&i`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,d=x.forwardRef((o,t)=>{const{isUnderlined:n=!0,isDashed:e=!1,variant:l=h.DEFAULT_VARIANT,children:p,...k}=o,{tokens:m}=a(),{link:f}=m;return s.jsx(c,{...k,ref:t,children:s.jsx(y,{component:"span",color:"inherit",variant:l,fontFamily:f.typography.fontFamily,$isUnderlined:n,$isDashed:e,children:p})})});d.displayName="Link";d.__docgenInfo={description:"",methods:[],displayName:"Link"};export{d as L};
