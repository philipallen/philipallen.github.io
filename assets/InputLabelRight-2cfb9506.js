import{a as l,u as e,b as a,j as t}from"./index-e76b8df1.js";import{T as u}from"./Typography-ab363d23.js";const d=l.label`
  ${()=>{const{tokens:s}=e(),{inputLabelRight:o}=s;return a`
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;
      cursor: pointer;

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
`,p=l.div`
  ${()=>{const{tokens:s}=e(),{inputLabelRight:o}=s;return a`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function f(s){const{label:o,children:i,...r}=s,{tokens:c}=e(),{inputLabelRight:n}=c;return t.jsxs(d,{...r,children:[t.jsx("div",{children:i}),o&&t.jsx(p,{children:t.jsx(u,{component:"span",color:"inherit",fontFamily:n.label.fontFamily,variant:n.label.typographyVariant,children:o})})]})}export{f as I};
