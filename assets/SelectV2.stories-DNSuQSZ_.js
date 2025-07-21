import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{f as w}from"./index-WLaP1tkh.js";import{$ as _}from"./Button-DPtumZN7.js";import{$ as H}from"./Label-CxUBTwi1.js";import{a as T,b as a}from"./ListBox-DnebutJd.js";import{b as k}from"./Dialog-fZIrdnKw.js";import{$ as c,a as C}from"./Select-D4jnez6v.js";const q={title:"Components/Inputs/SelectV2",component:c,render:L=>e.jsxs(c,{...L,children:[e.jsx(H,{children:"Favorite Animal"}),e.jsxs(_,{children:[e.jsx(C,{}),e.jsx("span",{"aria-hidden":"true",children:"▼"})]}),e.jsx(k,{children:e.jsxs(T,{children:[e.jsx(a,{children:"Aardvark"}),e.jsx(a,{children:"Cat"}),e.jsx(a,{children:"Dog"}),e.jsx(a,{children:"Kangaroo"}),e.jsx(a,{children:"Panda"}),e.jsx(a,{children:"Snake"})]})})]}),argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isRequired:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Select",isDisabled:!1,isRequired:!0,isInvalid:!1,items:w.mockItems}},r={args:{"aria-label":"Select label"}},l={args:{labelProps:{label:"Select label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"Select label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{disabledKeys:["02","04"],labelProps:{label:"Select label"}}},t={args:{isDisabled:!0,labelProps:{label:"Select label"}}},n={args:{isInvalid:!0,labelProps:{label:"Select label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},i={args:{items:w.mockItemsWithAriaLabel,placeholder:"Select",labelProps:{label:"Select with ariaLabel on items"}}};var d,b,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select label"
  }
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,P,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var g,x,$;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Select label"
    }
  }
}`,...($=(x=o.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var I,j,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Select label"
    }
  }
}`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var A,y,B;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var R,D,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    placeholder: "Select",
    labelProps: {
      label: "Select with ariaLabel on items"
    }
  }
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const E=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid","ItemsWithCustomAriaLabel"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:t,DisabledItems:o,Invalid:n,ItemsWithCustomAriaLabel:i,WithHint:s,WithLabel:l,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{r as B,o as D,n as I,J as S,l as W,s as a,t as b,i as c};
