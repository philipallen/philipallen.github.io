import{f as q}from"./index-iP1lhtUC.js";import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as h}from"./index-CcKhGcwW.js";import{$ as z}from"./SearchField-CtwmztgD.js";import{S as F,C as M}from"./index-DrIl6pf4.js";import{a as N,u as G}from"./index-BVzVw2jm.js";import{I as J}from"./TextInputV2.styled-DoYEoHmS.js";import{R as K}from"./ReactAriaProviders-CFG_2kIo.js";import{I as Q,a as U}from"./InputAlerts-qNYk2mzd.js";import{I as X}from"./InputLabelTopV2-Bx3mNyBv.js";import{O as Y}from"./OuterFieldV2-eAeNS_P8.js";import{I as Z}from"./IconButtonV2-C4_MOnZe.js";import{$ as ee}from"./utils-BPOuYIA2.js";const ae=N(J)`
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
`,k=h.forwardRef((n,T)=>{const{labelProps:c,alerts:i,id:p,placeholder:_,endSlot:E,testID:H="search-input",...d}=n,{tokens:W}=G(),{textInput:O}=W,{isDisabled:u}=d,b=ee(T),m=h.useId();function C(){var l;(l=b.current)==null||l.focus()}return e.jsx(K,{fieldID:p||m,externallyLabelledBy:n["aria-labelledby"],externallyDescribedBy:n["aria-describedby"],labelProps:c,alerts:i,children:({labelledBy:l,describedBy:L})=>e.jsx(Q,{alert:i&&e.jsx(U,{alerts:i}),children:e.jsx(X,{...c,children:e.jsx(z,{...d,id:p||m,"aria-labelledby":l,"aria-describedby":L,children:({state:V})=>e.jsx(Y,{startSlot:e.jsx(F,{color:u?`${O.color.disabled}`:void 0}),endSlot:E,buttonSlot:!u&&V.value!==""&&e.jsx(Z,{children:e.jsx(M,{})}),focusElement:C,children:e.jsx(ae,{ref:b,placeholder:_,"data-testid":H})})})})})})});k.displayName="SearchInput";const re={title:"Components/Inputs/SearchInput",component:k,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:q()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var f,I,P;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,g,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,D,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,R,$;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(R=s.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const te=["Basic","WithLabel","WithHint","Disabled","Invalid"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithHint:t,WithLabel:r,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,Ie as S,r as W,t as a};
