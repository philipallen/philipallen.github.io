import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{L as m}from"./index-CssHJ6ns.js";import{a as r,u as a,b as i}from"./index-COZsQx0K.js";import{f as x}from"./index-CG-U_esM.js";import{L as h}from"./LinkBase-UL9JRFwa.js";import{T as $}from"./Typography-cxmeyP_c.js";const c=r(h)``,u=r($)`
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
`,b=x((o,t)=>{const{isUnderlined:n=!0,isDashed:e=!1,variant:d=m.DEFAULT_VARIANT,children:l,...k}=o,{tokens:p}=a(),{link:f}=p;return s.jsx(c,{...k,ref:t,children:s.jsx(u,{component:"span",color:"inherit",variant:d,fontFamily:f.typography.fontFamily,$isUnderlined:n,$isDashed:e,children:l})})});b.displayName="Link";export{b as L};
