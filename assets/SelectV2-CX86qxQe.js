import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as p}from"./index-KmaxkdDD.js";import{a as h,$ as b}from"./ListBox-Zuz559Ke.js";import{a as x,$ as m}from"./Select-C_dq5qTI.js";import{a as r,u as s,b as a}from"./index-DT8u_GqS.js";import{$ as g}from"./Button-lwQFUGeW.js";import{T as k}from"./Typography-wg1R8lvT.js";import{C as j,P as w,L as y}from"./ListBoxItem-DDSZHJHB.js";import{I as v,a as S}from"./InputAlerts-BgCOBeSp.js";import{I}from"./InputLabelTopV2-Cca_2KhX.js";import{S as C}from"./ScrollShadowContainer-1gPuGy8j.js";import{$ as R}from"./utils-l5KLAjAw.js";const l=r(g)`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return a`
      all: unset;
      box-sizing: border-box;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${t.button.gap};
      padding-left: ${t.button.padding.left};
      padding-right: ${t.button.padding.right};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,V=r(h)`
  outline: none;
`,F=r.div`
  ${()=>{const{tokens:o}=s(),{outerField:t}=o;return a`
      border-radius: ${t.radius};

      &:has(${l}[data-focus-visible]) {
        outline-width: ${t.focusRing.width.focus};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset.focus};
      }
    `}}
`,B=r.div`
  ${()=>{const{tokens:o}=s(),{outerField:t}=o;return a`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${t.gap};
      min-height: ${t.minHeight};
      border-radius: ${t.radius};
      outline-width: ${t.stroke.width.base};
      outline-style: ${t.stroke.style};
      outline-color: ${t.stroke.color.base};
      outline-offset: ${t.stroke.offset.base};
      background: ${t.backgroundColor};

      .react-aria-Select[data-invalid] & {
        outline-width: ${t.stroke.width.error};
        outline-color: ${t.stroke.color.error};
        outline-offset: ${t.stroke.offset.error};
      }

      &:has(${l}[data-hovered]) {
        outline-width: ${t.stroke.width.hover};
        outline-color: ${t.stroke.color.hover};
        outline-offset: ${t.stroke.offset.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-Select:where(:not([data-invalid]))[data-focused] & {
        outline-width: ${t.stroke.width.focus};
        outline-color: ${t.stroke.color.focus};
        outline-offset: ${t.stroke.offset.focus};
      }

      .react-aria-Select[data-disabled] & {
        outline-width: ${t.stroke.width.base};
        outline-color: ${t.stroke.color.disabled};
        outline-offset: ${t.stroke.offset.base};
      }
    `}}
`;function L(o){const{children:t}=o;return e.jsx(F,{children:e.jsx(B,{children:t})})}const P=r(x)`
  ${()=>{const{tokens:o}=s(),{select:t}=o;return a`
      color: ${t.button.text.color.base};

      &[data-placeholder] {
        color: ${t.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${t.button.text.color.disabled};
      }
    `}}
`;function T(){const{tokens:o}=s(),{select:t}=o;return e.jsx(k,{variant:t.button.text.typography.variant,fontFamily:t.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(P,{children:({selectedText:i})=>i})})}const D=p.forwardRef((o,t)=>{const{labelProps:i,alerts:d,items:c,testID:u="select",...f}=o,$=R(t);return e.jsx(m,{...f,"data-testid":u,children:e.jsx(v,{alert:d&&e.jsx(S,{alerts:d}),children:e.jsxs(I,{...i,children:[e.jsx(L,{children:e.jsxs(l,{ref:$,children:[e.jsx(T,{}),e.jsx(j,{})]})}),e.jsx(w,{children:e.jsx(C,{tabIndex:-1,children:e.jsx(V,{children:e.jsx(b,{items:c,children:n=>e.jsx(y,{id:n.value,textValue:n.title,children:n.title})})})})})]})})})});D.displayName="SelectV2";export{D as S};
