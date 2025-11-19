import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as h}from"./ListBox-DAs4lUDL.js";import{a as j,$}from"./Select-EXq63j9m.js";import{B as y,L as I}from"./Select.styled-D4-UA16l.js";import{O as L}from"./OuterField-u7hPFJdi.js";import{a as v,u as c,b as B}from"./index-5VPm3mt9.js";import{T as S}from"./Typography-CWLzUOZE.js";import{C as D,P}from"./Popover-Zb55DozQ.js";import{L as R}from"./ListBoxItem-CZXrOmm6.js";import{R as g}from"./ReactAriaProviders-ugwUmcA7.js";import{I as k,a as T,b as C}from"./InputLabelTop-DU97nOut.js";const F=v(j)`
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
`;function V(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(F,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:b,isRequired:i,testID:x="select",...p}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(g,{fieldID:l||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:u,describedBy:f})=>e.jsx(k,{alert:t&&e.jsx(T,{alerts:t}),children:e.jsx(C,{...o,children:e.jsxs($,{...p,id:l||d,"aria-labelledby":u,"aria-describedby":f,"data-testid":x,isRequired:i,"aria-label":m,children:[e.jsx(L,{children:e.jsxs(y,{ref:r,children:[e.jsx(V,{}),e.jsx(D,{})]})}),e.jsx(P,{children:e.jsx(I,{children:e.jsx(h,{items:b,children:s=>e.jsx(R,{id:s.value,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})})]})})})})});q.displayName="Select";export{q as S};
