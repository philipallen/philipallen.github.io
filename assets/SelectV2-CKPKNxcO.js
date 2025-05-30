import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as f}from"./index-CcKhGcwW.js";import{a as g,$ as k}from"./ListBox-BmY3IeC_.js";import{a as j,$ as w}from"./Select-Dk5P5P1R.js";import{a as r,u as s,b as a}from"./index-COZsQx0K.js";import{$ as y}from"./Button-DPtumZN7.js";import{u as v}from"./ScrollShadow.hooks-CBOUl6zy.js";import{T as S}from"./Typography-cxmeyP_c.js";import{C as I,P as R,L as C}from"./ListBoxItem-CZSnQC0-.js";import{R as V}from"./ReactAriaProviders-BwEeAT52.js";import{I as F,a as P}from"./InputAlerts-Bp_UC4fJ.js";import{I as B}from"./InputLabelTopV2-DNCsgte8.js";import{$ as D}from"./utils-BPOuYIA2.js";const d=r(y)`
  ${()=>{const{tokens:o}=s(),{select:e}=o;return a`
      all: unset;
      box-sizing: border-box;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${e.button.gap};
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,L=r(g)`
  ${()=>{const o=v();return a`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`,T=r.div`
  ${()=>{const{tokens:o}=s(),{outerField:e}=o;return a`
      border-radius: ${e.radius};

      &:has(${d}[data-focus-visible]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,A=r.div`
  ${()=>{const{tokens:o}=s(),{outerField:e}=o;return a`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${e.gap};
      min-height: ${e.minHeight};
      border-radius: ${e.radius};
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style};
      outline-color: ${e.stroke.color.base};
      outline-offset: ${e.stroke.offset.base};
      background: ${e.backgroundColor};

      .react-aria-Select[data-invalid] & {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has(${d}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-Select:where(:not([data-invalid]))[data-focused] & {
        outline-width: ${e.stroke.width.focus};
        outline-color: ${e.stroke.color.focus};
        outline-offset: ${e.stroke.offset.focus};
      }

      .react-aria-Select[data-disabled] & {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }
    `}}
`;function E(o){const{children:e}=o;return t.jsx(T,{children:t.jsx(A,{children:e})})}const M=r(j)`
  ${()=>{const{tokens:o}=s(),{select:e}=o;return a`
      color: ${e.button.text.color.base};

      &[data-placeholder] {
        color: ${e.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`;function W(){const{tokens:o}=s(),{select:e}=o;return t.jsx(S,{variant:e.button.text.typography.variant,fontFamily:e.button.text.typography.fontFamily,noWrap:!0,children:t.jsx(M,{children:({selectedText:i})=>i})})}const z=f.forwardRef((o,e)=>{const{labelProps:i,alerts:n,id:c,items:$,testID:p="select",...b}=o,h=D(e),u=f.useId();return t.jsx(V,{fieldID:c||u,labelProps:i,alerts:n,children:({labelledBy:m,describedBy:x})=>t.jsx(F,{alert:n&&t.jsx(P,{alerts:n}),children:t.jsx(B,{...i,children:t.jsxs(w,{...b,id:c||u,"aria-labelledby":m,"aria-describedby":x,"data-testid":p,children:[t.jsx(E,{children:t.jsxs(d,{ref:h,children:[t.jsx(W,{}),t.jsx(I,{})]})}),t.jsx(R,{children:t.jsx(L,{children:t.jsx(k,{items:$,children:l=>t.jsx(C,{id:l.value,textValue:l.title,children:l.title})})})})]})})})})});z.displayName="SelectV2";export{z as S};
