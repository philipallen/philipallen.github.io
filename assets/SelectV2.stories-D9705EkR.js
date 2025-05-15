import{e as A}from"./index-BDdHs4nI.js";import{S as D}from"./SelectV2-CVkIWBUX.js";const R={title:"Components/Inputs/SelectV2",component:D,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Select",isDisabled:!1,isInvalid:!1,items:A.mockItems}},e={args:{"aria-label":"Select label"}},a={args:{labelProps:{label:"Select label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{labelProps:{label:"Select label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},r={args:{disabledKeys:["02","04"],labelProps:{label:"Select label"}}},o={args:{isDisabled:!0,labelProps:{label:"Select label"}}},t={args:{isInvalid:!0,labelProps:{label:"Select label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select label"
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Select label",
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
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Select label",
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
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var P,h,S;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Select label"
    }
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Select label"
    }
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,I,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "Select label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(B=(I=t.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const _=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid"],T=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:o,DisabledItems:r,Invalid:t,WithHint:l,WithLabel:a,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{e as B,r as D,t as I,T as S,a as W,l as a,o as b};
