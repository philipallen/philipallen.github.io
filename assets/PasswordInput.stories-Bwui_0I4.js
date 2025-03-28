import{f as C}from"./index-D0csYWE-.js";import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as h}from"./index-KmaxkdDD.js";import{$ as L}from"./TextField-BQkd_d0D.js";import{a as q}from"./index-ByEiyUmp.js";import{I as z}from"./TextInputV2.styled-D_z2JIlT.js";import{V as F,f as M}from"./index-BwV_lsCf.js";import{T as N,a as G,b as J}from"./TooltipTrigger-9BknpwOm.js";import{I as K}from"./IconButtonV2-B7rc2a9H.js";import{I as Q,a as U}from"./InputAlerts-LVMe8NNK.js";import{I as X}from"./InputLabelTopV2-rO-LNy5_.js";import{O as Y}from"./OuterFieldV2-D0K1kZSt.js";import{$ as Z}from"./utils-l5KLAjAw.js";const ee=q(z)`
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
`;function ae(u){const{type:a,setType:b,withTooltip:i}=u,p=a==="password"?"Show password":"Hide password";function m(){b(a==="password"?"text":"password")}const c=e.jsx(K,{onPress:m,"aria-label":p,children:a==="password"?e.jsx(F,{}):e.jsx(M,{})});return i?e.jsxs(N,{offset:6,placement:"bottom",children:[e.jsx(G,{children:c}),e.jsx(J,{children:p})]}):c}const k=h.forwardRef((u,a)=>{const{labelProps:b,alerts:i,withTooltip:p=!1,testID:m="password-input",...c}=u,f=Z(a),[P,O]=h.useState("password");function V(){var d;(d=f.current)==null||d.focus()}return e.jsx(L,{...c,type:P,children:({isDisabled:d})=>e.jsx(Q,{alert:i&&e.jsx(U,{alerts:i}),children:e.jsx(X,{...b,children:e.jsx(Y,{buttonSlot:!d&&e.jsx(ae,{type:P,setType:O,withTooltip:p}),focusElement:V,children:e.jsx(ee,{ref:f,"data-testid":m})})})})})});k.displayName="PasswordInput";const oe={title:"Components/Inputs/PasswordInput",component:k,argTypes:{withTooltip:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{withTooltip:!1,isDisabled:!1,isInvalid:!1,onChange:C()}},o={args:{"aria-label":"PasswordInput label"}},r={args:{labelProps:{label:"PasswordInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"PasswordInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{withTooltip:!0,labelProps:{label:"PasswordInput label"}}},n={args:{isDisabled:!0,labelProps:{label:"PasswordInput label"}}},l={args:{isInvalid:!0,labelProps:{label:"PasswordInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var w,I,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(H=l.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const re=["Basic","WithLabel","WithHint","WithTooltip","Disabled","Invalid"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:n,Invalid:l,WithHint:s,WithLabel:r,WithTooltip:t,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{o as B,n as D,l as I,he as P,r as W,s as a,t as b};
