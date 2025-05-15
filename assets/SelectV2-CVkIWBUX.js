import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{r as f}from"./index-KmaxkdDD.js";import{a as g,$ as k}from"./ListBox-BVF5357G.js";import{a as j,$ as w}from"./Select-BGL-I20U.js";import{a as r,u as s,b as a}from"./index-BMLrhZi-.js";import{$ as y}from"./Button-rO-PiLt4.js";import{u as v}from"./ScrollShadow.hooks-BtmOWN6N.js";import{T as S}from"./Typography-Bt5r6amG.js";import{C as I,P as R,L as C}from"./ListBoxItem-CwIlXz9v.js";import{R as V}from"./ReactAriaProviders-xi03RDfa.js";import{I as F,a as P}from"./InputAlerts-B4c5m-Fy.js";import{I as B}from"./InputLabelTopV2-BT9gFvQr.js";import{$ as D}from"./utils-HuDI8Qn7.js";const d=r(y)`
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
