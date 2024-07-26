import{j as s}from"./jsx-runtime-DQ32znRX.js";import{a,u as t,b as i}from"./index-BSpjoQIR.js";import{T as u}from"./Typography-Dx-yaUty.js";const p=a.label`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return i`
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
`,d=a.span`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return i`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function g(e){const{label:o,children:l,...r}=e,{tokens:c}=t(),{inputLabelRight:n}=c;return s.jsxs(p,{...r,children:[s.jsx("span",{children:l}),o&&s.jsx(d,{children:s.jsx(u,{component:"span",color:"inherit",variant:n.label.typography.variant,fontFamily:n.label.typography.fontFamily,children:o})})]})}g.__docgenInfo={description:"",methods:[],displayName:"InputLabelRight",props:{label:{required:!1,tsType:{name:"string"},description:""}}};export{g as I};
