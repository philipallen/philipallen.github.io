import{f as z}from"./index-BQWhUlWo.js";import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{r as h}from"./index-CcKhGcwW.js";import{$ as F}from"./SearchField-D6V0_qPP.js";import{b as M,S as N}from"./index-B_KGh3jf.js";import{d as G,u as J}from"./index-C1QKVHyt.js";import{I as K}from"./TextInput.styled-CrQbybeI.js";import{R as Q}from"./ReactAriaProviders-UpnGrWCN.js";import{I as U,a as V,b as X}from"./InputLabelTop-DThkuFi7.js";import{O as Y}from"./OuterField-CgJt-t-a.js";import{I as Z}from"./IconButton-52dBxF5j.js";import{$ as ee}from"./utils-CrCrZF7Z.js";const ae=G(K)`
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
`,k=h.forwardRef((n,T)=>{const{labelProps:c,alerts:i,id:p,placeholder:_,endSlot:E,testID:H="search-input",...d}=n,{tokens:W}=J(),{textInput:O}=W,{isDisabled:b}=d,u=ee(T),m=h.useId();function L(){var l;(l=u.current)==null||l.focus()}return e.jsx(Q,{fieldID:p||m,externallyLabelledBy:n["aria-labelledby"],externallyDescribedBy:n["aria-describedby"],labelProps:c,alerts:i,children:({labelledBy:l,describedBy:C})=>e.jsx(U,{alert:i&&e.jsx(X,{alerts:i}),children:e.jsx(V,{...c,children:e.jsx(F,{...d,id:p||m,"aria-labelledby":l,"aria-describedby":C,children:({state:q})=>e.jsx(Y,{startSlot:e.jsx(N,{color:b?`${O.color.disabled}`:void 0}),endSlot:E,buttonSlot:!b&&q.value!==""&&e.jsx(Z,{children:e.jsx(M,{})}),focusElement:L,children:e.jsx(ae,{ref:u,placeholder:_,"data-testid":H})})})})})})});k.displayName="SearchInput";const re={title:"Components/Inputs/SearchInput",component:k,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,onChange:z()}},a={args:{"aria-label":"SearchInput label"}},r={args:{labelProps:{label:"SearchInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"SearchInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"SearchInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"SearchInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var f,I,P;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
