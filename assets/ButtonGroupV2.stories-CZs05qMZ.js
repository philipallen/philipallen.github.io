import{i as p,c as y}from"./index-CoGc3U6X.js";import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as W}from"./index-CcKhGcwW.js";import{a as A,u as $,b as l}from"./index-5VPm3mt9.js";import{$ as D,a as H}from"./ToggleButton-DlPSlCYG.js";import{T as L}from"./Typography-Fd9Ks9lL.js";import{R as S}from"./ReactAriaProviders-CFG_2kIo.js";import{I as N,a as F}from"./InputAlerts-CqET0I5r.js";import{I as O}from"./InputLabelTopV2-C0uvm5sO.js";const Y=A(D)`
  ${({$variant:e})=>{const{tokens:a}=$(),{buttonGroup:o}=a;return[l`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${o.items.gap};
        width: 100%;
        max-width: ${o.maxWidth[e]};
      `,e==="center"&&l`
          justify-content: center;
        `,e==="stacked"&&l`
          flex-direction: column;
        `]}}
`,U=A(H)`
  ${({$isInvalid:e,$fullWidth:a,$textAlign:o})=>{const{tokens:n}=$(),{buttonAlt:t}=n;return[l`
        display: inline-flex;
        align-items: center;
        border-width: ${t.stroke.width.base};
        border-style: ${t.stroke.style};
        border-color: ${t.stroke.color.base};
        border-radius: ${t.radius};
        min-width: ${t.minWidth};
        min-height: ${t.minHeight.lg};
        padding-top: ${t.padding.top};
        padding-left: ${t.padding.left};
        padding-right: ${t.padding.right};
        padding-bottom: ${t.padding.bottom};
        color: ${t.color.base};
        background: ${t.backgroundColor.base};
        cursor: pointer;

        &[data-focus-visible] {
          outline-width: ${t.focusRing.width};
          outline-style: ${t.focusRing.style};
          outline-color: ${t.focusRing.color};
          outline-offset: ${t.focusRing.offset};
        }

        &[data-hovered] {
          color: ${t.color.hover};
          background: ${t.backgroundColor.hover};
        }

        &[data-selected] {
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};
        }
      `,a&&l`
          width: 100%;
        `,o==="center"&&l`
          text-align: center;
          justify-content: center;
        `,e&&l`
          border-width: ${t.stroke.width.error};
          border-color: ${t.stroke.color.error};
        `]}}
`,C=A(L)`
  overflow-wrap: anywhere;
`;function q(e){const{label:a,isInvalid:o=!1,fullWidth:n=!1,textAlign:t=p.DEFAULT_TEXT_ALIGN,typographyVariant:b=p.DEFAULT_TYPOGRAPHY_VARIANT,testID:m="button-group-item",...u}=e,{tokens:g}=$(),{buttonAlt:h}=g;return r.jsx(U,{...u,$isInvalid:o,$fullWidth:n,$textAlign:t,"data-testid":m,children:r.jsx(C,{color:"inherit",variant:b,fontFamily:h.typography.fontFamily,component:"span",children:a})})}const E=W.forwardRef((e,a)=>{const{labelProps:o,alerts:n,variant:t=y.DEFAULT_VARIANT,typographyVariant:b,items:m,testID:u="button-group",...g}=e;return r.jsx(S,{externallyLabelledBy:e["aria-labelledby"],externallyDescribedBy:e["aria-describedby"],labelProps:o,alerts:n,children:({labelledBy:h,describedBy:P})=>r.jsx(N,{alert:n&&r.jsx(F,{alerts:n}),children:r.jsx(O,{...o,children:r.jsx(Y,{disallowEmptySelection:!0,...g,ref:a,$variant:t,orientation:t==="stacked"?"vertical":void 0,"aria-labelledby":h,"aria-describedby":P,"data-testid":u,children:m.map(f=>r.jsx(q,{...f,fullWidth:["stretch","stacked"].includes(t),textAlign:t==="stacked"?"left":"center",typographyVariant:b,"aria-describedby":P,testID:`${u}-item-${f.id}`},f.id))})})})})});E.displayName="ButtonGroupV2";const z={title:"Components/Inputs/ButtonGroupV2",component:E,argTypes:{variant:{control:{type:"select"},options:y.VARIANTS},typographyVariant:{control:{type:"select"},options:p.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}}},args:{variant:y.DEFAULT_VARIANT,typographyVariant:p.DEFAULT_TYPOGRAPHY_VARIANT,items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Button label 02"}]}},s={args:{"aria-label":"ButtonGroup label"}},i={args:{labelProps:{label:"ButtonGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"ButtonGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"error-button-group-item-01",label:"Button label 01",isInvalid:!0},{id:"error-button-group-item-02",label:"Button label 02",isInvalid:!0}],alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var B,v,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    "aria-label": "ButtonGroup label"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,T,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "ButtonGroup label",
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
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var w,k,G;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "ButtonGroup label",
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
}`,...(G=(k=c.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var _,V,j;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "ButtonGroup label"
    },
    items: [{
      id: "error-button-group-item-01",
      label: "Button label 01",
      isInvalid: true
    }, {
      id: "error-button-group-item-02",
      label: "Button label 02",
      isInvalid: true
    }],
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const M=["Basic","WithLabel","WithHint","Invalid"],at=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Invalid:d,WithHint:c,WithLabel:i,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{at as B,d as I,i as W,s as a,c as b};
