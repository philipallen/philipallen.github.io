import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{f as W}from"./index-BQWhUlWo.js";import{r as _}from"./index-CcKhGcwW.js";import{a as E}from"./Text-CoyfJyUy.js";import{u as O}from"./index-C1QKVHyt.js";import{R as $}from"./ReactAriaProviders-UpnGrWCN.js";import{a as q,I as z,b as F}from"./InputLabelTop-DThkuFi7.js";import{C as M}from"./CheckboxGroupBase-BU96kPGR.js";import{C as r}from"./Checkbox-DTTSJzSd.js";import{L as J}from"./Link-CX-dsSMp.js";const D=_.forwardRef((c,T)=>{const{labelProps:p,alerts:i,testID:L="checkbox-group",...S}=c,{tokens:w}=O(),{checkboxGroup:H}=w;return e.jsx($,{externallyLabelledBy:c["aria-labelledby"],externallyDescribedBy:c["aria-describedby"],labelProps:p,alerts:i,children:({labelledBy:N,describedBy:b})=>e.jsx(q,{ref:T,...p,children:e.jsx(z,{gap:H.gap,alert:i&&e.jsx(F,{alerts:i}),children:e.jsx(E.Provider,{value:{"aria-describedby":b},children:e.jsx(M,{...S,"aria-labelledby":N,"aria-describedby":b,"data-testid":L})})})})})});D.displayName="CheckboxGroup";const K={title:"Components/Inputs/CheckboxGroup",component:D,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{labelProps:{label:"Bacon"},value:"bacon"}),e.jsx(r,{labelProps:{label:"Cheese"},value:"cheese"}),e.jsx(r,{labelProps:{label:"Onions"},value:"onions"}),e.jsx(r,{labelProps:{label:"Lettuce"},value:"lettuce"}),e.jsx(r,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:W()}},o={args:{"aria-label":"CheckboxGroup label"}},a={args:{labelProps:{label:"CheckboxGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"CheckboxGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{isDisabled:!0,labelProps:{label:"CheckboxGroup label"}}},t={args:{isInvalid:!0,labelProps:{label:"CheckboxGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},n={render:function(){return e.jsx(J,{href:"/?path=/docs/components-inputs-nestedcheckboxgroup--docs",children:"NestedCheckboxGroup"})}};var u,d,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var C,v,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CheckboxGroup label"
    }
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var G,j,I;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var B,R,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function Render() {
    return <Link href="/?path=/docs/components-inputs-nestedcheckboxgroup--docs">
        NestedCheckboxGroup
      </Link>;
  }
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const Q=["Basic","WithLabel","WithHint","Disabled","Invalid","Nested"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:l,Invalid:t,Nested:n,WithHint:s,WithLabel:a,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{o as B,le as C,l as D,t as I,n as N,a as W,s as a};
