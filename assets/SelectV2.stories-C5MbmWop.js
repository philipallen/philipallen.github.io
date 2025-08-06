import{f as w}from"./index-WLaP1tkh.js";import{S as L}from"./SelectV2-CFB5KrWR.js";const _={title:"Components/Inputs/SelectV2",component:L,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isRequired:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Select",isDisabled:!1,isRequired:!1,isInvalid:!1,items:w.mockItems}},e={args:{"aria-label":"Select label"}},a={args:{labelProps:{label:"Select label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{labelProps:{label:"Select label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},r={args:{disabledKeys:["02","04"],labelProps:{label:"Select label"}}},o={args:{isDisabled:!0,labelProps:{label:"Select label"}}},t={args:{isInvalid:!0,labelProps:{label:"Select label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},s={args:{items:w.mockItemsWithAriaLabel,placeholder:"Select",labelProps:{label:"Select with ariaLabel on items"}}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select label"
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var b,p,d;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var S,P,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Select label"
    }
  }
}`,...(g=(P=r.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};var f,I,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Select label"
    }
  }
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var y,A,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(A=t.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,D,W;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    placeholder: "Select",
    labelProps: {
      label: "Select with ariaLabel on items"
    }
  }
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const H=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid","ItemsWithCustomAriaLabel"],x=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:o,DisabledItems:r,Invalid:t,ItemsWithCustomAriaLabel:s,WithHint:l,WithLabel:a,__namedExportsOrder:H,default:_},Symbol.toStringTag,{value:"Module"}));export{e as B,r as D,t as I,x as S,a as W,l as a,o as b,s as c};
