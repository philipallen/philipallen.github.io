import{j as s}from"./jsx-runtime-DQ32znRX.js";import{f as R}from"./index-Cnk2rnxF.js";import{S as v}from"./index-C3m9D1_L.js";import{S as i}from"./Select-Ba5-jlF2.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/Inputs/Select",component:i,render:function(n){const[,L]=I();function B(l){n.onChange(l),L({selectedItem:l})}return s.jsx("div",{style:{height:420},children:s.jsx(i,{...n,onChange:B})})},argTypes:{labelProps:{control:{disable:!0}},placeholder:{type:"string"},items:{control:{disable:!0}},selectedItem:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Select",items:v.mockItems,selectedItem:null,onChange:R(),hasError:!1,isDisabled:!1}},e={args:{labelProps:{"aria-label":"Label"}}},r={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},a={args:{labelProps:{label:"Label for Select",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{labelProps:{label:"Label for Select",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{hasError:!0,labelProps:{label:"Label for Select"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var c,p,b;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,P,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
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
}`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var g,S,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
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
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,A,E;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Select"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const W=["Basic","Disabled","WithLabel","WithHint","WithError"],C=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:r,WithError:t,WithHint:o,WithLabel:a,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{e as B,r as D,C as S,a as W,o as a,t as b};
