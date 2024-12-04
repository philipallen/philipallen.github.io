import{j as t}from"./jsx-runtime-DQ32znRX.js";import{a as n,u as s,b as i,p as c}from"./index-CtBUti8q.js";import{T as u}from"./Typography-v4_88_aK.js";const d=n.label`
  ${()=>{const{tokens:e}=s(),{inputLabelRight:o}=e;return i`
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
`,g=n.div`
  ${()=>{const{tokens:e}=s(),{inputLabelRight:o}=e;return i`
      display: grid;
      place-items: center;
      height: ${c(o.inputWrapper.height)};
    `}}
`,h=n.div`
  ${()=>{const{tokens:e}=s(),{inputLabelRight:o}=e;return i`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function b(e){const{label:o,children:a,...l}=e,{tokens:p}=s(),{inputLabelRight:r}=p;return t.jsxs(d,{...l,children:[t.jsx(g,{children:a}),o&&t.jsx(h,{children:t.jsx(u,{component:"span",color:"inherit",variant:r.label.typography.variant,fontFamily:r.label.typography.fontFamily,children:o})})]})}b.__docgenInfo={description:"",methods:[],displayName:"InputLabelRight",props:{label:{required:!1,tsType:{name:"string"},description:""}}};export{b as I};
