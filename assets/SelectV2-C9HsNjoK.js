import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as n}from"./index-CcKhGcwW.js";import{$ as h}from"./ListBox-BTSqjZ8H.js";import{a as j,$}from"./Select-COZj3GVY.js";import{O as y,B as I,L}from"./OuterField-B-reVpLU.js";import{a as v,u as c,b as B}from"./index-BHlkTKmU.js";import{T as S}from"./Typography-CYNqbWwa.js";import{C as V,P as D}from"./Popover-D-ZdapgX.js";import{L as P}from"./ListBoxItem-BvoKzT6L.js";import{R}from"./ReactAriaProviders-CFG_2kIo.js";import{I as g,a as k}from"./InputAlerts-LG8E5-ez.js";import{I as T}from"./InputLabelTopV2-B_vqPxaG.js";const C=v(j)`
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
`;function F(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(C,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:b,isRequired:i,testID:x="select",...p}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(R,{fieldID:l||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:u,describedBy:f})=>e.jsx(g,{alert:t&&e.jsx(k,{alerts:t}),children:e.jsx(T,{...o,children:e.jsxs($,{...p,id:l||d,"aria-labelledby":u,"aria-describedby":f,"data-testid":x,isRequired:i,"aria-label":m,children:[e.jsx(y,{children:e.jsxs(I,{ref:r,children:[e.jsx(F,{}),e.jsx(V,{})]})}),e.jsx(D,{children:e.jsx(L,{children:e.jsx(h,{items:b,children:s=>e.jsx(P,{id:s.value,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})})]})})})})});q.displayName="SelectV2";export{q as S};
