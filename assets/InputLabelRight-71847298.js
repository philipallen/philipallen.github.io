import{j as s}from"./jsx-runtime-6eef64cc.js";import{a as i,u as t,b as l}from"./index-912b60f4.js";import{T as u}from"./Typography-a205704a.js";const p=i.label`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return l`
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
`,d=i.span`
  ${()=>{const{tokens:e}=t(),{inputLabelRight:o}=e;return l`
      color: ${o.label.color.base};

      label:has(:disabled) && {
        color: ${o.label.color.disabled};
      }
    `}}
`;function b(e){const{label:o,children:a,...r}=e,{tokens:c}=t(),{inputLabelRight:n}=c;return s.jsxs(p,{...r,children:[s.jsx("span",{children:a}),o&&s.jsx(d,{children:s.jsx(u,{component:"span",color:"inherit",fontFamily:n.label.fontFamily,variant:n.label.typographyVariant,children:o})})]})}b.__docgenInfo={description:"",methods:[],displayName:"InputLabelRight",props:{label:{required:!1,tsType:{name:"string"},description:""}}};export{b as I};
