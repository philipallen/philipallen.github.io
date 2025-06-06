import{f as L}from"./index-iP1lhtUC.js";import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as m}from"./index-CcKhGcwW.js";import{$ as V}from"./SearchField-hkaZAb_f.js";import{S as q,C as z}from"./index-Cng6hRot.js";import{a as F}from"./index-COZsQx0K.js";import{I as M}from"./TextInputV2.styled-BnGGUVNw.js";import{R as N}from"./ReactAriaProviders-CFG_2kIo.js";import{I as G,a as J}from"./InputAlerts-Bp_UC4fJ.js";import{I as K}from"./InputLabelTopV2-e97HOkZh.js";import{O as Q}from"./OuterFieldV2-CSCP22a8.js";import{I as U}from"./IconButtonV2-DFRYHId_.js";import{$ as X}from"./utils-BPOuYIA2.js";const Y=F(M)`
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
`,$=m.forwardRef((n,_)=>{const{labelProps:c,alerts:i,id:p,placeholder:T,endSlot:k,testID:E="search-input",...d}=n,{isDisabled:H}=d,u=X(_),b=m.useId();function W(){var l;(l=u.current)==null||l.focus()}return e.jsx(N,{fieldID:p||b,externallyLabelledBy:n["aria-labelledby"],externallyDescribedBy:n["aria-describedby"],labelProps:c,alerts:i,children:({labelledBy:l,describedBy:O})=>e.jsx(G,{alert:i&&e.jsx(J,{alerts:i}),children:e.jsx(K,{...c,children:e.jsx(V,{...d,id:p||b,"aria-labelledby":l,"aria-describedby":O,children:({state:C})=>e.jsx(Q,{startSlot:e.jsx(q,{}),endSlot:k,buttonSlot:!H&&C.value!==""&&e.jsx(U,{children:e.jsx(z,{})}),focusElement:W,children:e.jsx(Y,{ref:u,placeholder:T,"data-testid":E})})})})})})});$.displayName="SearchInput";const Z={title:"Components/Inputs/SearchInput",component:$,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:L()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var h,f,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var P,S,g;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,x,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,B,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var A,D,R;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ee=["Basic","WithLabel","WithHint","Disabled","Invalid"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithHint:t,WithLabel:r,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,me as S,r as W,t as a};
