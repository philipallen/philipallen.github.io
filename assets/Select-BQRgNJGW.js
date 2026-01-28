import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as n}from"./index-CcKhGcwW.js";import{b as h}from"./ListBox-CVF3aeug.js";import{$ as j,a as y}from"./Select-DdyyAk9c.js";import{B as $,L as I}from"./Select.styled-CG37go6-.js";import{O as L}from"./OuterField-DpLldcjm.js";import{u as c,l as B,d as v}from"./index-B5pQ5BfA.js";import{T as S}from"./Typography-TwrAENUo.js";import{C as D,P}from"./Popover-CoEOwdgG.js";import{L as R}from"./ListBoxItem-BoWXirT0.js";import{R as g}from"./ReactAriaProviders-UpnGrWCN.js";import{I as k,a as T,b as C}from"./InputLabelTop-DOLgWCXd.js";const F=v(j)`
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
`;function V(){const{tokens:a}=c(),{select:r}=a;return e.jsx(S,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(F,{children:({selectedText:o,selectedItem:t})=>t&&e.jsx("span",{"aria-label":t.ariaLabel,children:o})})})}const q=n.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:s,items:b,isRequired:i,testID:x="select",...p}=a,d=n.useId(),m=`${a["aria-label"]||""}${i?" required":""}`.trim()||void 0;return e.jsx(g,{fieldID:s||d,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:f,describedBy:u})=>e.jsx(k,{alert:t&&e.jsx(C,{alerts:t}),children:e.jsx(T,{...o,children:e.jsxs(y,{...p,id:s||d,"aria-labelledby":f,"aria-describedby":u,"data-testid":x,isRequired:i,"aria-label":m,children:[e.jsx(L,{children:e.jsxs($,{ref:r,children:[e.jsx(V,{}),e.jsx(D,{})]})}),e.jsx(P,{children:e.jsx(I,{children:e.jsx(h,{items:b,children:l=>e.jsx(R,{id:l.id,textValue:l.title,"aria-label":l.ariaLabel,children:l.title})})})})]})})})})});q.displayName="Select";export{q as S};
