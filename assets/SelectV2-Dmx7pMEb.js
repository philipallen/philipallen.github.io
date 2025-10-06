import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as h}from"./ListBox-BTSqjZ8H.js";import{a as j,$}from"./Select-COZj3GVY.js";import{B as y,L as I}from"./SelectV2.styled-0hlDv9bv.js";import{O as L}from"./OuterField-OMg1RRPw.js";import{a as v,u as c,b as B}from"./index-BVzVw2jm.js";import{T as S}from"./Typography-DZZq2lFF.js";import{C as V,P as D}from"./Popover-Cyter2jR.js";import{L as P}from"./ListBoxItem-Cv-DnGmf.js";import{R}from"./ReactAriaProviders-CFG_2kIo.js";import{I as g,a as k}from"./InputAlerts-D_tikr4K.js";import{I as T}from"./InputLabelTopV2-DxorfyBg.js";const C=v(j)`
  ${()=>{const{tokens:a}=c(),{select:r}=a;return B`
      color: ${r.button.text.color.base};

      &[data-placeholder] {
        color: ${r.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${r.button.text.color.disabled};
      }
    `}}
`;function F(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(C,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:b,isRequired:i,testID:p="select",...x}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(R,{fieldID:l||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:u,describedBy:f})=>e.jsx(g,{alert:t&&e.jsx(k,{alerts:t}),children:e.jsx(T,{...o,children:e.jsxs($,{...x,id:l||d,"aria-labelledby":u,"aria-describedby":f,"data-testid":p,isRequired:i,"aria-label":m,children:[e.jsx(L,{children:e.jsxs(y,{ref:r,children:[e.jsx(F,{}),e.jsx(V,{})]})}),e.jsx(D,{children:e.jsx(I,{children:e.jsx(h,{items:b,children:s=>e.jsx(P,{id:s.value,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})})]})})})})});q.displayName="SelectV2";export{q as S};
