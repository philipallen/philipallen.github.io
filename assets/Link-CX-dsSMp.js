import{j as s}from"./jsx-runtime-Blucd9Qg.js";import{L as $}from"./index-eS8l-D1x.js";import{d as r,u as a,l as i}from"./index-C1QKVHyt.js";import{f as h}from"./index-NgCCK6aN.js";import{L as p}from"./LinkBase-CtO2Yn30.js";import{T as m}from"./Typography-BK_ZjFCe.js";const c=r(p)``,x=r(m)`
  ${({$isUnderlined:e,$isDashed:t})=>{const{tokens:n}=a(),{link:o}=n;return[i`
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

        ${c}:focus-visible && {
          text-decoration-line: ${o.decoration.line.focus};
          outline-width: ${o.focusRing.width};
          outline-style: ${o.focusRing.style};
          outline-color: ${o.focusRing.color};
          outline-offset: ${o.focusRing.offset};
          border-radius: ${o.focusRing.radius};
        }
      `,e&&i`
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-style: ${o.decoration.style.solid};
        `,e&&t&&i`
          text-decoration-style: ${o.decoration.style.dashed};
        `]}}
`,g=h((e,t)=>{const{isUnderlined:n=!0,isDashed:o=!1,variant:d=$.DEFAULT_VARIANT,children:l,...f}=e,{tokens:u}=a(),{link:k}=u;return s.jsx(c,{...f,ref:t,hasFocusRing:!1,children:s.jsx(x,{component:"span",color:"inherit",variant:d,fontFamily:k.typography.fontFamily,$isUnderlined:n,$isDashed:o,children:l})})});g.displayName="Link";export{g as L};
