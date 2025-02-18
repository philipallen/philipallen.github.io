import{j as t}from"./jsx-runtime-DQ32znRX.js";import{a as r,u as n,b as s,p as c}from"./index-CzvSJj6w.js";import{T as u}from"./Typography-Dt8pkH_V.js";const d=r.label`
  ${()=>{const{tokens:e}=n(),{inputLabelRight:o}=e;return s`
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
  ${({$label:e})=>{const{tokens:o}=n(),{inputLabelRight:i}=o;return[s`
        display: grid;
        place-items: center;
      `,e&&s`
          height: ${c(i.inputWrapper.height)};
        `]}}
`,b=r.div`
  ${()=>{const{tokens:e}=n(),{inputLabelRight:o}=e;return s`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function h(e){const{label:o,children:i,...l}=e,{tokens:p}=n(),{inputLabelRight:a}=p;return t.jsxs(d,{...l,children:[t.jsx(g,{$label:o,children:i}),o&&t.jsx(b,{children:t.jsx(u,{component:"span",color:"inherit",variant:a.label.typography.variant,fontFamily:a.label.typography.fontFamily,children:o})})]})}h.__docgenInfo={description:"",methods:[],displayName:"InputLabelRight",props:{label:{required:!1,tsType:{name:"string"},description:""}}};export{h as I};
