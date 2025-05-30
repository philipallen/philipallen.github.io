import{f as L}from"./index-iP1lhtUC.js";import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as h}from"./index-CcKhGcwW.js";import{$ as q}from"./TextField-DSnhXm7w.js";import{a as z}from"./index-COZsQx0K.js";import{I as F}from"./TextInputV2.styled-BZ-PUGqS.js";import{V as M,f as N}from"./index-Cng6hRot.js";import{T as G,a as J,b as K}from"./TooltipTrigger-BTZCWnoM.js";import{I as Q}from"./IconButtonV2-DFRYHId_.js";import{I as U,a as X}from"./InputAlerts-Bp_UC4fJ.js";import{I as Y}from"./InputLabelTopV2-DNCsgte8.js";import{O as Z}from"./OuterFieldV2-CSCP22a8.js";import{$ as ee}from"./utils-BPOuYIA2.js";const ae=z(F)`
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
`;function oe(u){const{type:a,setType:b,withTooltip:i}=u,p=a==="password"?"Show password":"Hide password";function m(){b(a==="password"?"text":"password")}const c=e.jsx(Q,{onPress:m,"aria-label":p,children:a==="password"?e.jsx(M,{}):e.jsx(N,{})});return i?e.jsxs(G,{offset:6,placement:"bottom",children:[e.jsx(J,{children:c}),e.jsx(K,{children:p})]}):c}const k=h.forwardRef((u,a)=>{const{labelProps:b,alerts:i,placeholder:p,withTooltip:m=!1,testID:c="password-input",...O}=u,f=ee(a),[P,V]=h.useState("password");function C(){var d;(d=f.current)==null||d.focus()}return e.jsx(q,{...O,type:P,children:({isDisabled:d})=>e.jsx(U,{alert:i&&e.jsx(X,{alerts:i}),children:e.jsx(Y,{...b,children:e.jsx(Z,{buttonSlot:!d&&e.jsx(oe,{type:P,setType:V,withTooltip:m}),focusElement:C,children:e.jsx(ae,{ref:f,placeholder:p,"data-testid":c})})})})})});k.displayName="PasswordInput";const re={title:"Components/Inputs/PasswordInput",component:k,argTypes:{withTooltip:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{withTooltip:!1,isDisabled:!1,isInvalid:!1,onChange:L()}},o={args:{"aria-label":"PasswordInput label"}},r={args:{labelProps:{label:"PasswordInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"PasswordInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{withTooltip:!0,labelProps:{label:"PasswordInput label"}}},n={args:{isDisabled:!0,labelProps:{label:"PasswordInput label"}}},l={args:{isInvalid:!0,labelProps:{label:"PasswordInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var w,I,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    "aria-label": "PasswordInput label"
  }
}`,...(g=(I=o.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var T,x,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "PasswordInput label",
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,v,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "PasswordInput label",
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
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var S,A,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(R=(A=t.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var $,D,W;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,H,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "PasswordInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(E=(H=l.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const se=["Basic","WithLabel","WithHint","WithTooltip","Disabled","Invalid"],we=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:n,Invalid:l,WithHint:s,WithLabel:r,WithTooltip:t,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{o as B,n as D,l as I,we as P,r as W,s as a,t as b};
