import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as d}from"./index-CcKhGcwW.js";import{$ as u}from"./ListBox-BmY3IeC_.js";import{a as f,$ as h}from"./Select-Dk5P5P1R.js";import{O as j,B as y,L as $}from"./OuterField-B0uQ4O2M.js";import{a as I,u as c,b as B}from"./index-D1OOBdzz.js";import{T as v}from"./Typography-BoEAGT7d.js";import{C as L,P as S,L as V}from"./ListBoxItem-qVnSWJ6v.js";import{R as D}from"./ReactAriaProviders-CFG_2kIo.js";import{I as P,a as g}from"./InputAlerts-4hjqy13M.js";import{I as k}from"./InputLabelTopV2-CAihz7dz.js";const R=I(f)`
  ${()=>{const{tokens:r}=c(),{select:t}=r;return B`
      color: ${t.button.text.color.base};

      &[data-placeholder] {
        color: ${t.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${t.button.text.color.disabled};
      }
    `}}
`;function T(){const{tokens:r}=c(),{select:t}=r;return e.jsx(v,{variant:t.button.text.typography.variant,fontFamily:t.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(R,{children:({selectedText:a})=>a})})}const C=d.forwardRef((r,t)=>{const{labelProps:a,alerts:o,id:l,items:n,testID:p="select",...x}=r,i=d.useId();return e.jsx(D,{fieldID:l||i,externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:a,alerts:o,children:({labelledBy:b,describedBy:m})=>e.jsx(P,{alert:o&&e.jsx(g,{alerts:o}),children:e.jsx(k,{...a,children:e.jsxs(h,{...x,id:l||i,"aria-labelledby":b,"aria-describedby":m,"data-testid":p,children:[e.jsx(j,{children:e.jsxs(y,{ref:t,children:[e.jsx(T,{}),e.jsx(L,{})]})}),e.jsx(S,{children:e.jsx($,{children:e.jsx(u,{items:n,children:s=>e.jsx(V,{id:s.value,textValue:s.title,children:s.title})})})})]})})})})});C.displayName="SelectV2";export{C as S};
