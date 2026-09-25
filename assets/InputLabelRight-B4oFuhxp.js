import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as n,i,a as l,p as c}from"./index-BpMil6Tx.js";import{T as p}from"./Typography-G_YOndja.js";const u=l.div`
  ${()=>{const{tokens:o}=n(),{inputLabelRight:t}=o;return i`
      display: inline-grid;
      grid-template-columns: auto;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: ${t.gap};
      vertical-align: top;
      cursor: pointer;

      label[data-disabled] && {
        cursor: not-allowed;
      }

      label[data-focus-visible] && {
        outline-width: ${t.focusRing.width};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset};
        border-radius: ${t.focusRing.radius};
      }
    `}}
`,d=l.div`
  ${({$label:o})=>{const{tokens:t}=n(),{inputLabelRight:a}=t;return[i`
        display: grid;
        place-items: center;
      `,o&&i`
          height: ${c(a.inputWrapper.height)};
        `]}}
`,g=l.div`
  ${()=>{const{tokens:o}=n(),{inputLabelRight:t}=o;return i`
      color: ${t.label.color.base};

      label[data-disabled] && {
        color: ${t.label.color.disabled};
      }
    `}}
`;function m(o){const{label:t,children:a}=o,{tokens:r}=n(),{inputLabelRight:s}=r;return e.jsxs(u,{children:[e.jsx(d,{$label:t,children:a}),t&&e.jsx(g,{children:e.jsx(p,{component:"span",color:"inherit",variant:s.label.typography.variant,fontFamily:s.label.typography.fontFamily,children:t})})]})}export{m as I};
