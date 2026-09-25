import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BVaTkfsr.js";import{$ as h}from"./filterDOMProps--0WFEK8x.js";import{$ as D}from"./NumberField-B-A7hJaB.js";import{a as m,u as S,i as v}from"./index-BpMil6Tx.js";import{$ as B}from"./Button-BTZi05NT.js";import{I as N}from"./TextInput.styled-oOEQm0WJ.js";import{R}from"./ReactAriaProviders-CP7eKay2.js";import{I as k,a as E,b as P}from"./InputLabelTop--1mm_taL.js";import{O as A}from"./OuterField-PMcrB0SD.js";const L=m.div`
  ${({$isDisabled:t})=>{const{tokens:o}=S(),{textInput:r}=o;return v`
      display: contents;
      color: ${t?r.color.disabled:r.color.base};
    `}}
`,b=m(B)`
  display: none;
`,O=l.forwardRef((t,o)=>{const{labelProps:r,alerts:a,id:n,placeholder:f,startSlot:i,endSlot:u,testID:x="number-input",...I}=t,d=h(o),c=l.useId(),p=l.useId(),$=[t["aria-describedby"],i?p:void 0].filter(Boolean).join(" ")||void 0;function j(){var s;(s=d.current)==null||s.focus()}return e.jsx(R,{fieldID:n||c,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:$,labelProps:r,alerts:a,children:({labelledBy:s,describedBy:y})=>e.jsx(k,{alert:a&&e.jsx(P,{alerts:a}),children:e.jsx(E,{...r,children:e.jsx(D,{...I,id:n||c,"aria-labelledby":s,"aria-describedby":y,"data-testid":x,children:e.jsxs(A,{startSlot:i&&e.jsx(L,{id:p,$isDisabled:t.isDisabled,children:i}),endSlot:u,focusElement:j,children:[e.jsx(b,{slot:"increment"}),e.jsx(N,{ref:d,placeholder:f}),e.jsx(b,{slot:"decrement"})]})})})})})});O.displayName="NumberInput";export{O as N};
