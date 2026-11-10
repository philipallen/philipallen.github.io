import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BVaTkfsr.js";import{$ as h,a as j}from"./Select-5Vdjxx-j.js";import{B as y,L as $}from"./Select.styled-jjcdFEPa.js";import{O as I}from"./OuterField-CDck7XPV.js";import{u as d,i as L,a as B}from"./index-sM1fMec-.js";import{T as v}from"./Typography-D83ERmMI.js";import{C as S,P as D}from"./Popover-BkTrJAKf.js";import{L as P}from"./ListBoxItem-DQVO4kYp.js";import{R}from"./ReactAriaProviders-C2XMcc1v.js";import{I as g,a as k,b as T}from"./InputLabelTop-0nfXqRZk.js";const C=B(h)`
  ${()=>{const{tokens:a}=d(),{select:r}=a;return L`
      color: ${r.button.text.color.base};

      &[data-placeholder] {
        color: ${r.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${r.button.text.color.disabled};
      }
    `}}
`;function F(){const{tokens:a}=d(),{select:r}=a;return e.jsx(v,{variant:r.button.text.typography.variant,fontFamily:r.button.text.typography.fontFamily,noWrap:!0,children:e.jsx(C,{children:({selectedText:o,selectedItems:t})=>t[0]&&e.jsx("span",{"aria-label":t[0].ariaLabel,children:o})})})}const V=c.forwardRef((a,r)=>{const{labelProps:o,alerts:t,id:l,items:b,testID:x="select",...i}=a,{isRequired:p}=i,n=c.useId(),m=`${a["aria-label"]||""}${p?" required":""}`.trim()||void 0;return e.jsx(R,{fieldID:l||n,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:o,alerts:t,children:({labelledBy:u,describedBy:f})=>e.jsx(g,{alert:t&&e.jsx(T,{alerts:t}),children:e.jsx(k,{...o,children:e.jsxs(j,{...i,id:l||n,"aria-labelledby":u,"aria-describedby":f,"data-testid":x,"aria-label":m,children:[e.jsx(I,{children:e.jsxs(y,{ref:r,children:[e.jsx(F,{}),e.jsx(S,{})]})}),e.jsx(D,{children:e.jsx($,{items:b,children:s=>e.jsx(P,{id:s.id,textValue:s.title,"aria-label":s.ariaLabel,children:s.title})})})]})})})})});V.displayName="Select";export{V as S};
