import{fn as z}from"./index-DeN4tkzB.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-BVaTkfsr.js";import{$ as F}from"./filterDOMProps--0WFEK8x.js";import{$ as M}from"./SearchField-xltWEq34.js";import{b as N,S as G}from"./index-BVyJnF54.js";import{a as J,u as K}from"./index-BpMil6Tx.js";import{I as Q}from"./TextInput.styled-oOEQm0WJ.js";import{R as U}from"./ReactAriaProviders-CP7eKay2.js";import{I as V,a as X,b as Y}from"./InputLabelTop--1mm_taL.js";import{O as Z}from"./OuterField-PMcrB0SD.js";import{I as ee}from"./IconButton-CC4dc0T7.js";const ae=J(Q)`
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
`,k=h.forwardRef((n,T)=>{const{labelProps:c,alerts:i,id:p,placeholder:_,endSlot:E,testID:H="search-input",...d}=n,{tokens:W}=K(),{textInput:O}=W,{isDisabled:u}=d,b=F(T),m=h.useId();function L(){var l;(l=b.current)==null||l.focus()}return e.jsx(U,{fieldID:p||m,externallyLabelledBy:n["aria-labelledby"],externallyDescribedBy:n["aria-describedby"],labelProps:c,alerts:i,children:({labelledBy:l,describedBy:C})=>e.jsx(V,{alert:i&&e.jsx(Y,{alerts:i}),children:e.jsx(X,{...c,children:e.jsx(M,{...d,id:p||m,"aria-labelledby":l,"aria-describedby":C,children:({state:q})=>e.jsx(Z,{startSlot:e.jsx(G,{color:u?`${O.color.disabled}`:void 0}),endSlot:E,buttonSlot:!u&&q.value!==""&&e.jsx(ee,{children:e.jsx(N,{})}),focusElement:L,children:e.jsx(ae,{ref:b,placeholder:_,"data-testid":H})})})})})})});k.displayName="SearchInput";const re={title:"Components/Inputs/SearchInput",component:k,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:z()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var f,I,P;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "aria-label": "SearchInput label"
  }
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,g,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,D,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "SearchInput label"
    }
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,R,$;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(R=s.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const te=["Basic","WithLabel","WithHint","Disabled","Invalid"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithHint:t,WithLabel:r,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,fe as S,r as W,t as a};
