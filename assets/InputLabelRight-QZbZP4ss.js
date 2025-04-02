import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{a as r,u as n,b as s,p as u}from"./index-DT8u_GqS.js";import{T as p}from"./Typography-wg1R8lvT.js";const d=r.label`
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return s`
      display: grid;
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
`,g=r.div`
  ${({$label:t})=>{const{tokens:o}=n(),{inputLabelRight:i}=o;return[s`
        display: grid;
        place-items: center;
      `,t&&s`
          height: ${u(i.inputWrapper.height)};
        `]}}
`,b=r.div`
  ${()=>{const{tokens:t}=n(),{inputLabelRight:o}=t;return s`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function $(t){const{label:o,children:i,...l}=t,{tokens:c}=n(),{inputLabelRight:a}=c;return e.jsxs(d,{...l,children:[e.jsx(g,{$label:o,children:i}),o&&e.jsx(b,{children:e.jsx(p,{component:"span",color:"inherit",variant:a.label.typography.variant,fontFamily:a.label.typography.fontFamily,children:o})})]})}export{$ as I};
