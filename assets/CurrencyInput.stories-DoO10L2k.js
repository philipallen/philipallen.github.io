import{j as l}from"./jsx-runtime-BkBIjjFT.js";import{f as R}from"./index-D0csYWE-.js";import{r as B}from"./index-KmaxkdDD.js";import{C as e}from"./index-DYe-GrfV.js";import{N as L}from"./NumberInput-guieaGEb.js";import{a as x}from"./context-CQmu07jL.js";const _=B.forwardRef((s,v)=>{const{currencySymbol:S=e.DEFAULT_SYMBOL,currencyFormat:D=e.DEFAULT_DECIMAL_PLACES,testID:O="currency-input",...T}=s,E=D===e.TWO_DECIMAL_PLACES?e.TWO_DP_FORMAT_OPTIONS:e.ZERO_DP_FORMAT_OPTIONS;return l.jsx(L,{...T,ref:v,startSlot:S,formatOptions:E,testID:O})});_.displayName="CurrencyInput";const j={title:"Components/Inputs/CurrencyInput",component:_,decorators:[s=>l.jsx(x,{locale:"en-IE",children:l.jsx(s,{})})],argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,onChange:R()}},r={args:{"aria-label":"CurrencyInput label"}},a={args:{labelProps:{label:"CurrencyInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{labelProps:{label:"CurrencyInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{isDisabled:!0,labelProps:{label:"CurrencyInput label"}}},n={args:{isInvalid:!0,labelProps:{label:"CurrencyInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "aria-label": "CurrencyInput label"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,b,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CurrencyInput label",
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
}`,...(d=(b=a.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var m,P,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CurrencyInput label",
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
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var I,y,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CurrencyInput label"
    }
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,C,A;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "CurrencyInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const w=["Basic","WithLabel","WithLabelHint","Disabled","Invalid"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:t,Invalid:n,WithLabel:a,WithLabelHint:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{r as B,q as C,t as D,n as I,a as W,o as a};
