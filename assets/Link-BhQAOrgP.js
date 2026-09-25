import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{L as $}from"./index-EybPYVoN.js";import{a as r,u as a,i as n}from"./index-BpMil6Tx.js";import{f as h}from"./index-Doj3HQ5r.js";import{L as p}from"./LinkBase-Jw3utSHY.js";import{T as m}from"./Typography-G_YOndja.js";const c=r(p)``,x=r(m)`
  ${({$isUnderlined:e,$isDashed:t})=>{const{tokens:i}=a(),{link:o}=i;return[n`
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
      `,e&&n`
          text-decoration-line: ${o.decoration.line.base};
          text-decoration-style: ${o.decoration.style.solid};
        `,e&&t&&n`
          text-decoration-style: ${o.decoration.style.dashed};
        `]}}
`,g=h((e,t)=>{const{isUnderlined:i=!0,isDashed:o=!1,variant:d=$.DEFAULT_VARIANT,children:l,...f}=e,{tokens:u}=a(),{link:k}=u;return s.jsx(c,{...f,ref:t,hasFocusRing:!1,children:s.jsx(x,{component:"span",color:"inherit",variant:d,fontFamily:k.typography.fontFamily,$isUnderlined:i,$isDashed:o,children:l})})});g.displayName="Link";export{g as L};
