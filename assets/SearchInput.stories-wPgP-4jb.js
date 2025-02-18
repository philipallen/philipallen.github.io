import{f as E}from"./index-Cnk2rnxF.js";import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as H}from"./index-DH5ua8nC.js";import{$ as W}from"./SearchField-pjss9763.js";import{S as O,C}from"./index-Bl852yH3.js";import{O as L,I as V}from"./OuterFieldV2-CB2a8MWT.js";import{I as q}from"./InputWrapper-C7of_464.js";import{I as N,a as z}from"./InputLabelTopV2-CmslYZm_.js";import{I as F}from"./IconButtonV2-Dj5DlKHT.js";import{$ as M}from"./useFocusRing-8RL9AhDF.js";const l=H.forwardRef((R,_)=>{const{labelProps:D,alerts:i,endSlot:$,testID:w="search-input",...c}=R,{isDisabled:p}=c,u=M(_);function T(){var s;(s=u.current)==null||s.focus()}return e.jsx(W,{...c,"data-testid":w,children:({state:s})=>e.jsx(q,{alert:i&&e.jsx(N,{alerts:i}),children:e.jsx(z,{...D,children:e.jsx(L,{startSlot:e.jsx(O,{}),endSlot:$,buttonSlot:!p&&s.value!==""&&e.jsx(F,{isDisabled:p,children:e.jsx(C,{})}),focusElement:T,children:e.jsx(V,{ref:u})})})})})});l.displayName="SearchInput";l.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};const k={title:"Components/Inputs/SearchInput",component:l,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:E()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},n={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var d,b,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,f,I;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(f=r.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var P,S,g;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,x,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,B,A;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(B=n.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const G=["Basic","WithLabel","WithHint","Disabled","Invalid"],oe=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:t,Invalid:n,WithHint:o,WithLabel:r,__namedExportsOrder:G,default:k},Symbol.toStringTag,{value:"Module"}));export{a as B,t as D,n as I,oe as S,r as W,o as a};
