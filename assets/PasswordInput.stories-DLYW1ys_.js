import{f as V}from"./index-Cnk2rnxF.js";import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as I}from"./index-DH5ua8nC.js";import{$ as L}from"./TextField-7rVZ2oDw.js";import{a as N}from"./index-CzvSJj6w.js";import{I as z,O as F}from"./OuterFieldV2-BGsJs17e.js";import{V as M,c as G}from"./index-BYwLR37K.js";import{T as J,a as K,c as Q}from"./TooltipTrigger-CwjP98Rl.js";import"./InputLabelTopTooltip-C9o3uPzb.js";import{I as U}from"./IconButtonV2-CYq5jIXi.js";import{I as X}from"./InputWrapper-C7of_464.js";import{a as Y,I as Z}from"./InputLabelTopV2-CysXC_Fl.js";import{$ as ee}from"./useFocusRing-CELWytXw.js";const oe=N(z)`
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
`;function q(u){const{type:o,setType:b,withTooltip:i}=u,p=o==="password"?"Show password":"Hide password";function m(){b(o==="password"?"text":"password")}const c=e.jsx(U,{onPress:m,"aria-label":p,children:o==="password"?e.jsx(M,{}):e.jsx(G,{})});return i?e.jsxs(J,{offset:6,placement:"bottom",children:[e.jsx(K,{children:c}),e.jsx(Q,{children:p})]}):c}q.__docgenInfo={description:"",methods:[],displayName:"PasswordInputButton",props:{type:{required:!0,tsType:{name:"CorePasswordInput.InputType"},description:""},setType:{required:!0,tsType:{name:"signature",type:"function",raw:"(type: InputType) => void",signature:{arguments:[{type:{name:"CorePasswordInput.InputType"},name:"type"}],return:{name:"void"}}},description:""},withTooltip:{required:!1,tsType:{name:"boolean"},description:""}}};const P=I.forwardRef((u,o)=>{const{labelProps:b,alerts:i,withTooltip:p=!1,testID:m="password-input",...c}=u,f=ee(o),[h,C]=I.useState("password");function O(){var d;(d=f.current)==null||d.focus()}return e.jsx(L,{...c,type:h,children:({isDisabled:d})=>e.jsx(X,{alert:i&&e.jsx(Y,{alerts:i}),children:e.jsx(Z,{...b,children:e.jsx(F,{buttonSlot:!d&&e.jsx(q,{type:h,setType:C,withTooltip:p}),focusElement:O,children:e.jsx(oe,{ref:f,"data-testid":m})})})})})});P.displayName="PasswordInput";P.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};const ae={title:"Components/Inputs/PasswordInput",component:P,argTypes:{withTooltip:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{withTooltip:!1,isDisabled:!1,isInvalid:!1,onChange:V()}},a={args:{"aria-label":"PasswordInput label"}},r={args:{labelProps:{label:"PasswordInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"PasswordInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{withTooltip:!0,labelProps:{label:"PasswordInput label"}}},n={args:{isDisabled:!0,labelProps:{label:"PasswordInput label"}}},l={args:{isInvalid:!0,labelProps:{label:"PasswordInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var w,g,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    "aria-label": "PasswordInput label"
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,B,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var _,A,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var $,D,W;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var H,E,k;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const re=["Basic","WithLabel","WithHint","WithTooltip","Disabled","Invalid"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:n,Invalid:l,WithHint:t,WithLabel:r,WithTooltip:s,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{a as B,n as D,l as I,he as P,r as W,t as a,s as b};
