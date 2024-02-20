import{a as l,u as n,b as i,j as e}from"./index-e4c57c99.js";import{T as u}from"./Typography-2bd14f01.js";const d=l.label`
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return i`
      display: grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${o.gap};
      user-select: none;

      &:has(:disabled) {
        pointer-events: none;
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
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return i`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function f(t){const{label:o,children:a,...r}=t,{tokens:c}=n(),{inputLabelRight:s}=c;return e.jsxs(d,{...r,children:[e.jsx("div",{children:a}),o&&e.jsx(p,{children:e.jsx(u,{component:"span",color:"inherit",fontFamily:s.label.fontFamily,variant:s.label.typographyVariant,children:o})})]})}export{f as I};
