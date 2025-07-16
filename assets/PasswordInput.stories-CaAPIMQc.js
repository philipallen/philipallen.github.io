import{f as q}from"./index-iP1lhtUC.js";import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as w}from"./index-CcKhGcwW.js";import{$ as z}from"./TextField-Dek19DRu.js";import{a as F}from"./index-BHlkTKmU.js";import{I as M}from"./TextInputV2.styled-BTxS94Ab.js";import{V as N,g as G}from"./index-hDdRnVWP.js";import{T as P}from"./TooltipV2-2PZoH9JU.js";import{I as J}from"./IconButtonV2-ZPVEghNH.js";import{I as K,a as Q}from"./InputAlerts-D2s279dZ.js";import{I as U}from"./InputLabelTopV2-Cg0SlHn4.js";import{O as X}from"./OuterFieldV2-BgdbzGx_.js";import{$ as Y}from"./utils-BPOuYIA2.js";const Z=F(M)`
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
`;function ee(u){const{type:a,setType:b,withTooltip:i}=u,p=a==="password"?"Show password":"Hide password";function m(){b(a==="password"?"text":"password")}const c=e.jsx(J,{onPress:m,"aria-label":p,children:a==="password"?e.jsx(N,{}):e.jsx(G,{})});return i?e.jsx(P,{children:e.jsxs(P.Trigger,{children:[c,e.jsx(P.Content,{tooltipProps:{offset:6,placement:"bottom"},children:p})]})}):c}const k=w.forwardRef((u,a)=>{const{labelProps:b,alerts:i,placeholder:p,withTooltip:m=!1,testID:c="password-input",...O}=u,f=Y(a),[h,C]=w.useState("password");function L(){var d;(d=f.current)==null||d.focus()}return e.jsx(z,{...O,type:h,children:({isDisabled:d})=>e.jsx(K,{alert:i&&e.jsx(Q,{alerts:i}),children:e.jsx(U,{...b,children:e.jsx(X,{buttonSlot:!d&&e.jsx(ee,{type:h,setType:C,withTooltip:m}),focusElement:L,children:e.jsx(Z,{ref:f,placeholder:p,"data-testid":c})})})})})});k.displayName="PasswordInput";const ae={title:"Components/Inputs/PasswordInput",component:k,argTypes:{withTooltip:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{withTooltip:!1,isDisabled:!1,isInvalid:!1,onChange:q()}},o={args:{"aria-label":"PasswordInput label"}},r={args:{labelProps:{label:"PasswordInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"PasswordInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{withTooltip:!0,labelProps:{label:"PasswordInput label"}}},n={args:{isDisabled:!0,labelProps:{label:"PasswordInput label"}}},l={args:{isInvalid:!0,labelProps:{label:"PasswordInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var I,g,x;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "aria-label": "PasswordInput label"
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var T,y,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,B,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var A,R,$;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...($=(R=t.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var D,W,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(_=(W=n.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,E,V;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const oe=["Basic","WithLabel","WithHint","WithTooltip","Disabled","Invalid"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:n,Invalid:l,WithHint:s,WithLabel:r,WithTooltip:t,__namedExportsOrder:oe,default:ae},Symbol.toStringTag,{value:"Module"}));export{o as B,n as D,l as I,fe as P,r as W,s as a,t as b};
