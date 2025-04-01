import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{f as N}from"./index-D0csYWE-.js";import{r as W}from"./index-KmaxkdDD.js";import{$ as _}from"./RSPContexts-DVGGaWhm.js";import{u as E}from"./index-DT8u_GqS.js";import{R as O}from"./ReactAriaProviders-BGIWsqxe.js";import{I as $,a as q}from"./InputAlerts-BvMSond2.js";import{I as z}from"./InputLabelTopV2-BVu8QFKb.js";import{C as F}from"./CheckboxGroupBaseV2-BDmhCtQy.js";import{C as r}from"./CheckboxV2-BPMhYivS.js";import{L as M}from"./Link-DLN09gdB.js";const L=W.forwardRef((i,T)=>{const{labelProps:p,alerts:c,testID:D="checkbox-group",...S}=i,{tokens:w}=E(),{checkboxGroup:V}=w;return e.jsx(O,{labelProps:p,alerts:c,children:({labelledBy:H,describedBy:b})=>e.jsx("div",{ref:T,children:e.jsx(z,{...p,children:e.jsx($,{gap:V.gap,alert:c&&e.jsx(q,{alerts:c}),children:e.jsx(_.Provider,{value:{"aria-describedby":b},children:e.jsx(F,{...S,"aria-labelledby":H,"aria-describedby":b,"data-testid":D})})})})})})});L.displayName="CheckboxGroupV2";const J={title:"Components/Inputs/CheckboxGroupV2",component:L,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{labelProps:{label:"Bacon"},value:"bacon"}),e.jsx(r,{labelProps:{label:"Cheese"},value:"cheese"}),e.jsx(r,{labelProps:{label:"Onions"},value:"onions"}),e.jsx(r,{labelProps:{label:"Lettuce"},value:"lettuce"}),e.jsx(r,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:N()}},o={args:{"aria-label":"CheckboxGroup label"}},a={args:{labelProps:{label:"CheckboxGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"CheckboxGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{isDisabled:!0,labelProps:{label:"CheckboxGroup label"}}},l={args:{isInvalid:!0,labelProps:{label:"CheckboxGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},n={render:function(){return e.jsx(M,{href:"/?path=/docs/components-inputs-nestedcheckboxgroup--docs",children:"NestedCheckboxGroup"})}};var u,d,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "aria-label": "CheckboxGroup label"
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,x,P;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CheckboxGroup label",
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
}`,...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var f,g,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CheckboxGroup label",
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
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var v,C,G;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CheckboxGroup label"
    }
  }
}`,...(G=(C=t.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var j,I,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "CheckboxGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var R,A,B;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render() {
    return <Link href="/?path=/docs/components-inputs-nestedcheckboxgroup--docs">
        NestedCheckboxGroup
      </Link>;
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const K=["Basic","WithLabel","WithLabelHint","Disabled","Invalid","Nested"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:t,Invalid:l,Nested:n,WithLabel:a,WithLabelHint:s,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{o as B,le as C,t as D,l as I,n as N,a as W,s as a};
