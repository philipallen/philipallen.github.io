import{a as l,u as n,b as a,j as t}from"./index-74fe31d7.js";import{T as u}from"./Typography-5c86d7b4.js";const p=l.label`
  ${()=>{const{tokens:s}=n(),{inputLabelRight:o}=s;return a`
      display: grid;
      align-items: center;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;
      cursor: pointer;
      font-size: 0;

      &:has(:disabled) {
        cursor: not-allowed;
      }

      &:has(:focus-visible) {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,d=l.span`
  ${()=>{const{tokens:s}=n(),{inputLabelRight:o}=s;return a`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function f(s){const{label:o,children:i,...r}=s,{tokens:c}=n(),{inputLabelRight:e}=c;return t.jsxs(p,{...r,children:[t.jsx("span",{children:i}),o&&t.jsx(d,{children:t.jsx(u,{component:"span",color:"inherit",fontFamily:e.label.fontFamily,variant:e.label.typographyVariant,children:o})})]})}export{f as I};
