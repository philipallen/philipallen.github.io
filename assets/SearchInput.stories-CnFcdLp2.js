import{f as C}from"./index-D0csYWE-.js";import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as b}from"./index-KmaxkdDD.js";import{$ as L}from"./SearchField-DFdJ4_F4.js";import{S as V,C as q}from"./index-By1nkff0.js";import{a as z}from"./index-BMLrhZi-.js";import{I as F}from"./TextInputV2.styled-CwwC8Yh8.js";import{R as M}from"./ReactAriaProviders-xi03RDfa.js";import{I as N,a as G}from"./InputAlerts-B4c5m-Fy.js";import{I as J}from"./InputLabelTopV2-BT9gFvQr.js";import{O as K}from"./OuterFieldV2-DsovPqh-.js";import{I as Q}from"./IconButtonV2-795yXhQF.js";import{$ as U}from"./utils-HuDI8Qn7.js";const X=z(F)`
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`,D=b.forwardRef(($,_)=>{const{labelProps:i,alerts:n,id:c,endSlot:T,testID:k="search-input",...p}=$,{isDisabled:E}=p,u=U(_),d=b.useId();function H(){var l;(l=u.current)==null||l.focus()}return e.jsx(M,{fieldID:c||d,labelProps:i,alerts:n,children:({labelledBy:l,describedBy:W})=>e.jsx(N,{alert:n&&e.jsx(G,{alerts:n}),children:e.jsx(J,{...i,children:e.jsx(L,{...p,id:c||d,"aria-labelledby":l,"aria-describedby":W,children:({state:O})=>e.jsx(K,{startSlot:e.jsx(V,{}),endSlot:T,buttonSlot:!E&&O.value!==""&&e.jsx(Q,{children:e.jsx(q,{})}),focusElement:H,children:e.jsx(X,{ref:u,"data-testid":k})})})})})})});D.displayName="SearchInput";const Y={title:"Components/Inputs/SearchInput",component:D,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:C()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var m,h,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,P,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "SearchInput label",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(S=(P=r.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var g,v,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "SearchInput label",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,B,R;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "SearchInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(R=(B=s.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const Z=["Basic","WithLabel","WithHint","Disabled","Invalid"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithHint:t,WithLabel:r,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,be as S,r as W,t as a};
