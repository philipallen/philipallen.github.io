import{j as e}from"./jsx-runtime-DQ32znRX.js";import{f as H}from"./index-Cnk2rnxF.js";import{r as T}from"./index-DH5ua8nC.js";import{$ as W}from"./NumberField-7zLURgOK.js";import{a as L}from"./index-CzvSJj6w.js";import{$ as O}from"./Button-Dm6TiVPZ.js";import{O as q,I as C}from"./OuterFieldV2-CB2a8MWT.js";import{I as V}from"./InputWrapper-C7of_464.js";import{I as z,a as F}from"./InputLabelTopV2-CmslYZm_.js";import{$ as M}from"./useFocusRing-8RL9AhDF.js";import{a as k}from"./context-ERQbR2fL.js";const u=L(O)`
  display: none;
`,l=T.forwardRef((s,A)=>{const{labelProps:R,alerts:i,startSlot:S,endSlot:D,testID:_="number-input",...w}=s,p=M(A);function E(){var c;(c=p.current)==null||c.focus()}return e.jsxs(W,{...w,"data-testid":_,children:[e.jsx(u,{slot:"increment"}),e.jsx(V,{alert:i&&e.jsx(z,{alerts:i}),children:e.jsx(F,{...R,children:e.jsx(q,{startSlot:S,endSlot:D,focusElement:E,children:e.jsx(C,{ref:p})})})}),e.jsx(u,{slot:"decrement"})]})});l.displayName="NumberInput";l.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};const G={title:"Components/Inputs/NumberInput",component:l,decorators:[s=>e.jsx(k,{locale:"en-IE",children:e.jsx(s,{})})],argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,onChange:H()}},r={args:{"aria-label":"NumberInput label"}},a={args:{labelProps:{label:"NumberInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{labelProps:{label:"NumberInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"NumberInput label"}}},n={args:{isInvalid:!0,labelProps:{label:"NumberInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var b,d,m;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    "aria-label": "NumberInput label"
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,I,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NumberInput label",
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
}`,...(h=(I=a.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var P,g,x;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NumberInput label",
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
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var N,y,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "NumberInput label"
    }
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var $,j,B;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "NumberInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const J=["Basic","WithLabel","WithLabelHint","Disabled","Invalid"],ne=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:o,Invalid:n,WithLabel:a,WithLabelHint:t,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{r as B,o as D,n as I,ne as N,a as W,t as a};
