import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as d}from"./index-CcKhGcwW.js";import{$ as h}from"./NumberField-BZGqV4lP.js";import{d as m,u as D,l as S}from"./index-C1QKVHyt.js";import{$ as v}from"./Button-T8IefSzn.js";import{I as B}from"./TextInput.styled-CrQbybeI.js";import{R as N}from"./ReactAriaProviders-UpnGrWCN.js";import{I as R,a as k,b as E}from"./InputLabelTop-DThkuFi7.js";import{O as P}from"./OuterField-CgJt-t-a.js";import{$ as A}from"./utils-CrCrZF7Z.js";const L=m.div`
  ${({$isDisabled:t})=>{const{tokens:o}=D(),{textInput:r}=o;return S`
      display: contents;
      color: ${t?r.color.disabled:r.color.base};
    `}}
`,p=m(v)`
  display: none;
`,O=d.forwardRef((t,o)=>{const{labelProps:r,alerts:a,id:i,placeholder:f,startSlot:l,endSlot:u,testID:x="number-input",...I}=t,n=A(o),c=d.useId(),b=d.useId(),$=[t["aria-describedby"],l?b:void 0].filter(Boolean).join(" ")||void 0;function j(){var s;(s=n.current)==null||s.focus()}return e.jsx(N,{fieldID:i||c,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:$,labelProps:r,alerts:a,children:({labelledBy:s,describedBy:y})=>e.jsx(R,{alert:a&&e.jsx(E,{alerts:a}),children:e.jsx(k,{...r,children:e.jsx(h,{...I,id:i||c,"aria-labelledby":s,"aria-describedby":y,"data-testid":x,children:e.jsxs(P,{startSlot:l&&e.jsx(L,{id:b,$isDisabled:t.isDisabled,children:l}),endSlot:u,focusElement:j,children:[e.jsx(p,{slot:"increment"}),e.jsx(B,{ref:n,placeholder:f}),e.jsx(p,{slot:"decrement"})]})})})})})});O.displayName="NumberInput";export{O as N};
