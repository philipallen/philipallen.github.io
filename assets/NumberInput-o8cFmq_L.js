import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as l}from"./index-CcKhGcwW.js";import{$ as h}from"./NumberField-s9AESjo0.js";import{a as b,u as D,b as S}from"./index-BVzVw2jm.js";import{$ as v}from"./Button-DPtumZN7.js";import{I as B}from"./TextInputV2.styled-DoYEoHmS.js";import{R as N}from"./ReactAriaProviders-CFG_2kIo.js";import{I as R,a as k}from"./InputAlerts-D_tikr4K.js";import{I as E}from"./InputLabelTopV2-DxorfyBg.js";import{O as P}from"./OuterFieldV2-eSBdxaO0.js";import{$ as A}from"./utils-BPOuYIA2.js";const L=b.div`
  ${({$isDisabled:t})=>{const{tokens:o}=D(),{textInput:r}=o;return S`
      display: contents;
      color: ${t?r.color.disabled:r.color.base};
    `}}
`,p=b(v)`
  display: none;
`,O=l.forwardRef((t,o)=>{const{labelProps:r,alerts:a,id:n,placeholder:f,startSlot:i,endSlot:u,testID:x="number-input",...I}=t,d=A(o),c=l.useId(),m=l.useId(),$=[t["aria-describedby"],i?m:void 0].filter(Boolean).join(" ")||void 0;function j(){var s;(s=d.current)==null||s.focus()}return e.jsx(N,{fieldID:n||c,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:$,labelProps:r,alerts:a,children:({labelledBy:s,describedBy:y})=>e.jsx(R,{alert:a&&e.jsx(k,{alerts:a}),children:e.jsx(E,{...r,children:e.jsx(h,{...I,id:n||c,"aria-labelledby":s,"aria-describedby":y,"data-testid":x,children:e.jsxs(P,{startSlot:i&&e.jsx(L,{id:m,$isDisabled:t.isDisabled,children:i}),endSlot:u,focusElement:j,children:[e.jsx(p,{slot:"increment"}),e.jsx(B,{ref:d,placeholder:f}),e.jsx(p,{slot:"decrement"})]})})})})})});O.displayName="NumberInput";export{O as N};
