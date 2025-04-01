import{f as E}from"./index-D0csYWE-.js";import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as H}from"./index-KmaxkdDD.js";import{$ as W}from"./SearchField-7SfLJVZJ.js";import{S as k,C as O}from"./index-qhhwF6MA.js";import{a as C}from"./index-DT8u_GqS.js";import{I as L}from"./TextInputV2.styled-B04IJZ78.js";import{I as V,a as q}from"./InputAlerts-BvMSond2.js";import{I as z}from"./InputLabelTopV2-BVu8QFKb.js";import{O as F}from"./OuterFieldV2-gUvNU5x4.js";import{I as M}from"./IconButtonV2-DtbOd6YA.js";import{$ as N}from"./utils-l5KLAjAw.js";const G=C(L)`
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
`,w=H.forwardRef((B,A)=>{const{labelProps:R,alerts:l,endSlot:D,testID:$="search-input",...i}=B,{isDisabled:_}=i,c=N(A);function T(){var n;(n=c.current)==null||n.focus()}return e.jsx(W,{...i,children:({state:n})=>e.jsx(V,{alert:l&&e.jsx(q,{alerts:l}),children:e.jsx(z,{...R,children:e.jsx(F,{startSlot:e.jsx(k,{}),endSlot:D,buttonSlot:!_&&n.value!==""&&e.jsx(M,{children:e.jsx(O,{})}),focusElement:T,children:e.jsx(G,{ref:c,"data-testid":$})})})})})});w.displayName="SearchInput";const J={title:"Components/Inputs/SearchInput",component:w,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:E()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,I,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,g,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const K=["Basic","WithLabel","WithHint","Disabled","Invalid"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithHint:t,WithLabel:r,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,le as S,r as W,t as a};
