import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{f as W}from"./index-iP1lhtUC.js";import{r as T}from"./index-CcKhGcwW.js";import{b as _,$ as C,a as E}from"./RadioGroup-BMsy2tD6.js";import{a as h,u as p,b as m}from"./index-BVzVw2jm.js";import{R as O}from"./ReactAriaProviders-CFG_2kIo.js";import{I as q,a as N}from"./InputAlerts-qNYk2mzd.js";import{I as z}from"./InputLabelTopV2-Bx3mNyBv.js";import{I as F}from"./InputLabelRightV2-WTWoURu-.js";const M=h(_)`
  ${()=>{const{tokens:a}=p(),{radioGroup:e}=a;return m`
      display: grid;
      gap: ${e.list.gap};
    `}}
`,S=T.forwardRef((a,e)=>{const{labelProps:c,alerts:r,testID:b="radio-group",...u}=a,{tokens:V}=p(),{radioGroup:H}=V;return o.jsx(O,{externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:c,alerts:r,children:({labelledBy:L,describedBy:g})=>o.jsx(z,{ref:e,...c,children:o.jsx(q,{gap:H.gap,alert:r&&o.jsx(N,{alerts:r}),children:o.jsx(C.Provider,{value:{"aria-describedby":g},children:o.jsx(M,{...u,"aria-labelledby":L,"aria-describedby":g,"data-testid":b})})})})})});S.displayName="RadioGroupV2";const J=h.div`
  ${()=>{const{tokens:a}=p(),{radio:e}=a;return m`
      position: relative;
      display: grid;
      place-items: center;
      width: ${e.width};
      height: ${e.height};
      background: ${e.backgroundColor.base};
      border-radius: 100%;
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style.base};
      outline-color: ${e.stroke.color.base};
      outline-offset: -1px;
      cursor: pointer;

      label[data-invalid] && {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
      }

      label[data-hovered] && {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
      }

      label[data-disabled] && {
        outline-width: ${e.stroke.width.disabled};
        outline-color: ${e.stroke.color.disabled};
        cursor: not-allowed;
      }
    `}}
`,K=h.div`
  ${()=>{const{tokens:a}=p(),{radio:e}=a;return[m`
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        label[data-hovered] && {
          background: ${e.icon.color.hover};
        }

        label[data-disabled] && {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,t=T.forwardRef((a,e)=>{const{labelProps:c,testID:r="radio",...b}=a;return o.jsx(E,{...b,ref:e,"data-testid":r,children:({isSelected:u})=>o.jsx(F,{...c,children:o.jsx(J,{children:u&&o.jsx(K,{"data-testid":`${r}-selected-icon`})})})})});t.displayName="RadioV2";const Q={title:"Components/Inputs/RadioGroupV2",component:S,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:o.jsxs(o.Fragment,{children:[o.jsx(t,{labelProps:{label:"Bacon"},value:"bacon"}),o.jsx(t,{labelProps:{label:"Cheese"},value:"cheese"}),o.jsx(t,{labelProps:{label:"Onions"},value:"onions"}),o.jsx(t,{labelProps:{label:"Lettuce"},value:"lettuce"}),o.jsx(t,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:W()}},l={args:{"aria-label":"RadioGroup label"}},s={args:{labelProps:{label:"RadioGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"RadioGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={args:{isDisabled:!0,labelProps:{label:"RadioGroup label"}}},d={args:{isInvalid:!0,labelProps:{label:"RadioGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var P,f,v;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "RadioGroup label"
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var R,$,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var x,I,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,j,G;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "RadioGroup label"
    }
  }
}`,...(G=(j=n.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var B,A,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "RadioGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const U=["Basic","WithLabel","WithHint","Disabled","Invalid"],se=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:n,Invalid:d,WithHint:i,WithLabel:s,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{l as B,n as D,d as I,se as R,s as W,i as a};
