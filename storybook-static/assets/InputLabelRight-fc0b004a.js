import{a as l,u as t,b as i,j as s}from"./index-771fcc08.js";import{T as u}from"./Typography-4da87cb1.js";const p=l.label`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return i`
      display: grid;
      grid-template-columns: auto 1fr;
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
`,b=l.div`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return i`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function g(e){const{label:o,children:a,...r}=e,{tokens:c}=t(),{inputLabelRight:n}=c;return s.jsxs(p,{...r,children:[s.jsx("div",{children:a}),s.jsx(b,{children:o&&s.jsx(u,{component:"span",color:"inherit",fontFamily:n.label.fontFamily,variant:n.label.typographyVariant,children:o})})]})}export{g as I};
