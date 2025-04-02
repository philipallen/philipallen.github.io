import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{r as f}from"./index-KmaxkdDD.js";import{L as m}from"./index-VIbBARS4.js";import{a as r,u as a,b as i}from"./index-DT8u_GqS.js";import{L as h}from"./LinkBase-DNJeKfD_.js";import{T as $}from"./Typography-wg1R8lvT.js";const c=r(h)``,u=r($)`
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
`,b=f.forwardRef((o,t)=>{const{isUnderlined:n=!0,isDashed:e=!1,variant:d=m.DEFAULT_VARIANT,children:l,...k}=o,{tokens:p}=a(),{link:x}=p;return s.jsx(c,{...k,ref:t,children:s.jsx(u,{component:"span",color:"inherit",variant:d,fontFamily:x.typography.fontFamily,$isUnderlined:n,$isDashed:e,children:l})})});b.displayName="Link";export{b as L};
