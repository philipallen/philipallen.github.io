import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{L as y}from"./index-ba3HtoI3.js";import{a,u as c,i as r,p as g}from"./index-DbtYIglS.js";import{f as v}from"./index-Doj3HQ5r.js";import{L as b}from"./LinkBase-mIcNyS13.js";import{T as I}from"./Typography-JwzeacV5.js";const h=a(b)``,l=a.div`
  ${()=>{const{tokens:t}=c(),{link:n}=t;return[r`
        display: inline-flex;
        gap: ${n.withIcon.gap};
      `]}}
`,L=a(I)`
  ${({$isUnderlined:t,$isDashed:n})=>{const{tokens:i}=c(),{link:e}=i;return[r`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${l}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${l}:active && {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        ${h}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,t&&r`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,t&&n&&r`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=a.div`
  ${({$variant:t,$isCentered:n})=>{const{tokens:i}=c(),{link:e}=i,o=g(e.withIcon.size[t]);return r`
      display: flex;
      flex-shrink: 0;
      align-items: ${n?"center":"flex-start"};

      svg {
        display: block;
        width: ${o};
        height: ${o};
      }
    `}}
`,j=v((t,n)=>{const{isUnderlined:i=!0,isDashed:e=!1,variant:o=y.DEFAULT_VARIANT,startIcon:p,endIcon:k,children:x,testID:d="link",...f}=t,{tokens:m}=c(),{link:u}=m;return s.jsx(h,{...f,ref:n,display:"inline-flex",testID:d,children:s.jsxs(l,{children:[p&&s.jsx($,{$variant:o,"data-testid":`${d}-start-icon-wrapper`,children:p}),s.jsx(L,{component:"span",color:"inherit",variant:o,fontFamily:u.typography.fontFamily,$isUnderlined:i,$isDashed:e,children:x}),k&&s.jsx($,{$isCentered:!0,$variant:o,"data-testid":`${d}-end-icon-wrapper`,children:k})]})})});j.displayName="LinkWithIcon";export{j as L};
