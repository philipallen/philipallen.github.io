import{f as L}from"./index-Cnk2rnxF.js";import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as w}from"./index-DH5ua8nC.js";import{$ as N}from"./TextField-BNeveLeM.js";import{O as z,I as F}from"./OuterFieldV2-CB2a8MWT.js";import{V as M,c as k}from"./index-Bl852yH3.js";import{T as G,a as J,c as K}from"./TooltipTrigger-BgKVYKo_.js";import"./InputLabelTopTooltip-D1g6QsRs.js";import{I as Q}from"./IconButtonV2-Dj5DlKHT.js";import{I as U}from"./InputWrapper-C7of_464.js";import{I as X,a as Y}from"./InputLabelTopV2-CmslYZm_.js";import{$ as Z}from"./useFocusRing-8RL9AhDF.js";function O(u){const{type:a,setType:m,isDisabled:o,withTooltip:b}=u,c=a==="password"?"Show password":"Hide password";function f(){m(a==="password"?"text":"password")}const r=e.jsx(Q,{isDisabled:o,onPress:f,"aria-label":c,children:a==="password"?e.jsx(M,{}):e.jsx(k,{})});return b?e.jsxs(G,{offset:6,placement:"bottom",open:o?!1:void 0,children:[e.jsx(J,{children:r}),e.jsx(K,{children:c})]}):r}O.__docgenInfo={description:"",methods:[],displayName:"PasswordInputButton",props:{type:{required:!0,tsType:{name:"union",raw:'"password" | "text"',elements:[{name:"literal",value:'"password"'},{name:"literal",value:'"text"'}]},description:""},setType:{required:!0,tsType:{name:"signature",type:"function",raw:"(type: InputType) => void",signature:{arguments:[{type:{name:"union",raw:'"password" | "text"',elements:[{name:"literal",value:'"password"'},{name:"literal",value:'"text"'}]},name:"type"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},withTooltip:{required:!1,tsType:{name:"boolean"},description:""}}};const P=w.forwardRef((u,a)=>{const{labelProps:m,alerts:o,withTooltip:b=!1,testID:c="password-input",...f}=u,r=Z(a),[h,V]=w.useState("password");function C(){var s;(s=r.current)==null||s.focus()}return e.jsx(N,{...f,type:h,"data-testid":c,children:({isDisabled:s})=>e.jsx(U,{alert:o&&e.jsx(X,{alerts:o}),children:e.jsx(Y,{...m,children:e.jsx(z,{buttonSlot:!s&&e.jsx(O,{type:h,setType:V,isDisabled:s,withTooltip:b}),focusElement:C,children:e.jsx(F,{ref:r})})})})})});P.displayName="PasswordInput";P.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};const ee={title:"Components/Inputs/PasswordInput",component:P,argTypes:{withTooltip:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{withTooltip:!1,isDisabled:!1,isInvalid:!1,onChange:L()}},t={args:{"aria-label":"PasswordInput label"}},n={args:{labelProps:{label:"PasswordInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{labelProps:{label:"PasswordInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{withTooltip:!0,labelProps:{label:"PasswordInput label"}}},p={args:{isDisabled:!0,labelProps:{label:"PasswordInput label"}}},d={args:{isInvalid:!0,labelProps:{label:"PasswordInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var I,g,y;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "aria-label": "PasswordInput label"
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,B,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var _,A,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,W,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "PasswordInput label"
    }
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var H,q,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const ae=["Basic","WithLabel","WithHint","WithTooltip","Disabled","Invalid"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:p,Invalid:d,WithHint:l,WithLabel:n,WithTooltip:i,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{t as B,p as D,d as I,be as P,n as W,l as a,i as b};
