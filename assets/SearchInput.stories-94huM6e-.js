import{f as E}from"./index-Cnk2rnxF.js";import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as H}from"./index-DH5ua8nC.js";import{$ as W}from"./SearchField-CjE0l0cJ.js";import{S as k,C as O}from"./index-BYwLR37K.js";import{a as C}from"./index-CzvSJj6w.js";import{I as L,O as V}from"./OuterFieldV2-BGsJs17e.js";import{I as q}from"./InputWrapper-C7of_464.js";import{a as N,I as z}from"./InputLabelTopV2-DL3rAtCw.js";import{I as F}from"./IconButtonV2-CYq5jIXi.js";import{$ as M}from"./useFocusRing-CELWytXw.js";const G=C(L)`
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
`,l=H.forwardRef((B,A)=>{const{labelProps:R,alerts:i,endSlot:_,testID:D="search-input",...c}=B,{isDisabled:$}=c,p=M(A);function T(){var s;(s=p.current)==null||s.focus()}return e.jsx(W,{...c,children:({state:s})=>e.jsx(q,{alert:i&&e.jsx(N,{alerts:i}),children:e.jsx(z,{...R,children:e.jsx(V,{startSlot:e.jsx(k,{}),endSlot:_,buttonSlot:!$&&s.value!==""&&e.jsx(F,{children:e.jsx(O,{})}),focusElement:T,children:e.jsx(G,{ref:p,"data-testid":D})})})})})});l.displayName="SearchInput";l.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};const J={title:"Components/Inputs/SearchInput",component:l,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:E()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},n={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var u,d,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var m,h,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,P,S;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var g,v,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,j,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const K=["Basic","WithLabel","WithHint","Disabled","Invalid"],se=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:n,WithHint:t,WithLabel:r,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,n as I,se as S,r as W,t as a};
