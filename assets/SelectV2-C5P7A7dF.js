import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as d}from"./index-CcKhGcwW.js";import{$ as u}from"./ListBox-Ch6RuDVl.js";import{a as f,$ as h}from"./Select-5wogoinJ.js";import{O as j,B as y,L as $}from"./OuterField-BwZy5Ry2.js";import{a as I,u as n,b as L}from"./index-BHlkTKmU.js";import{T as B}from"./Typography-BeL7-j70.js";import{C as v,P as S,L as V}from"./ListBoxItem-Cs2Cy88W.js";import{R as D}from"./ReactAriaProviders-CFG_2kIo.js";import{I as P,a as g}from"./InputAlerts-D2s279dZ.js";import{I as k}from"./InputLabelTopV2-Cg0SlHn4.js";const R=I(f)`
  ${()=>{const{tokens:t}=n(),{select:a}=t;return L`
      color: ${a.button.text.color.base};

      &[data-placeholder] {
        color: ${a.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${a.button.text.color.disabled};
      }
    `}}
`;function T(){const{tokens:t}=n(),{select:a}=t;return e.jsx(B,{variant:a.button.text.typography.variant,fontFamily:a.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(R,{children:({selectedText:o,selectedItem:r})=>r&&e.jsx("span",{"aria-label":r.ariaLabel,children:o})})})}const C=d.forwardRef((t,a)=>{const{labelProps:o,alerts:r,id:l,items:c,testID:b="select",...p}=t,i=d.useId();return e.jsx(D,{fieldID:l||i,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:o,alerts:r,children:({labelledBy:x,describedBy:m})=>e.jsx(P,{alert:r&&e.jsx(g,{alerts:r}),children:e.jsx(k,{...o,children:e.jsxs(h,{...p,id:l||i,"aria-labelledby":x,"aria-describedby":m,"data-testid":b,children:[e.jsx(j,{children:e.jsxs(y,{ref:a,children:[e.jsx(T,{}),e.jsx(v,{})]})}),e.jsx(S,{children:e.jsx($,{children:e.jsx(u,{items:c,children:s=>e.jsx(V,{id:s.value,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})})]})})})})});C.displayName="SelectV2";export{C as S};
