import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{f as _}from"./index-iP1lhtUC.js";import{r as T}from"./index-CcKhGcwW.js";import{b as C,a as E,$ as O}from"./RadioGroup-gZYF0EQJ.js";import{a as h,u as b,b as m}from"./index-Dwsyfx_g.js";import{R as q}from"./ReactAriaProviders-CHHp38ws.js";import{b as N,I as z,a as F}from"./InputLabelTop-Cx21JY_9.js";import{I as M}from"./InputLabelRight-CORnX9mk.js";const J=h(C)`
  ${()=>{const{tokens:a}=b(),{radioGroup:e}=a;return m`
      display: grid;
      gap: ${e.list.gap};
    `}}
`,S=T.forwardRef((a,e)=>{const{labelProps:c,alerts:r,testID:p="radio-group",...u}=a,{tokens:H}=b(),{radioGroup:L}=H;return o.jsx(q,{externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:c,alerts:r,children:({labelledBy:W,describedBy:g})=>o.jsx(N,{ref:e,...c,children:o.jsx(z,{gap:L.gap,alert:r&&o.jsx(F,{alerts:r}),children:o.jsx(E.Provider,{value:{"aria-describedby":g},children:o.jsx(J,{...u,"aria-labelledby":W,"aria-describedby":g,"data-testid":p})})})})})});S.displayName="RadioGroup";const K=h.div`
  ${()=>{const{tokens:a}=b(),{radio:e}=a;return m`
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
`,Q=h.div`
  ${()=>{const{tokens:a}=b(),{radio:e}=a;return[m`
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
`,t=T.forwardRef((a,e)=>{const{labelProps:c,testID:r="radio",...p}=a;return o.jsx(O,{...p,ref:e,"data-testid":r,children:({isSelected:u})=>o.jsx(M,{...c,children:o.jsx(K,{children:u&&o.jsx(Q,{"data-testid":`${r}-selected-icon`})})})})});t.displayName="Radio";const U={title:"Components/Inputs/RadioGroup",component:S,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:o.jsxs(o.Fragment,{children:[o.jsx(t,{labelProps:{label:"Bacon"},value:"bacon"}),o.jsx(t,{labelProps:{label:"Cheese"},value:"cheese"}),o.jsx(t,{labelProps:{label:"Onions"},value:"onions"}),o.jsx(t,{labelProps:{label:"Lettuce"},value:"lettuce"}),o.jsx(t,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:_()}},l={args:{"aria-label":"RadioGroup label"}},s={args:{labelProps:{label:"RadioGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"RadioGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={args:{isDisabled:!0,labelProps:{label:"RadioGroup label"}}},d={args:{isInvalid:!0,labelProps:{label:"RadioGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var P,f,$;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "RadioGroup label"
  }
}`,...($=(f=l.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var v,R,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var x,k,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,j,G;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const V=["Basic","WithLabel","WithHint","Disabled","Invalid"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:n,Invalid:d,WithHint:i,WithLabel:s,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{l as B,n as D,d as I,le as R,s as W,i as a};
