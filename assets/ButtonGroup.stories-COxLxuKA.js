import{d as m,c as P}from"./index-t7j5zUOh.js";import{j as r}from"./jsx-runtime-Blucd9Qg.js";import{r as Y}from"./index-CcKhGcwW.js";import{u as $,l as n,d as A}from"./index-DO5xE0d-.js";import{$ as C,a as U}from"./ToggleButton-DLLSO2b2.js";import{T as q}from"./Typography-WuGUrHnn.js";import{R as z}from"./ReactAriaProviders-UpnGrWCN.js";import{I as M,a as X,b as J}from"./InputLabelTop-lXupNj3X.js";const K=A(C)`
  ${({$variant:e})=>{const{tokens:a}=$(),{buttonGroup:o}=a;return[n`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${o.items.gap};
        width: 100%;
        max-width: ${o.maxWidth[e]};
      `,e==="center"&&n`
          justify-content: center;
        `,e==="stacked"&&n`
          flex-direction: column;
        `]}}
`,Q=A(U)`
  ${({$isInvalid:e,$fullWidth:a,$textAlign:o})=>{const{tokens:l}=$(),{buttonAlt:t}=l;return[n`
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

        &[data-disabled] {
          cursor: not-allowed;
          border-color: ${t.stroke.color.disabled};
          color: ${t.color.disabled};
          background: ${t.backgroundColor.disabled};
        }
      `,a&&n`
          width: 100%;
        `,o==="center"&&n`
          text-align: center;
          justify-content: center;
        `,e&&n`
          border-width: ${t.stroke.width.error};
          border-color: ${t.stroke.color.error};
        `]}}
`,Z=A(q)`
  overflow-wrap: anywhere;
`;function tt(e){const{label:a,isInvalid:o=!1,fullWidth:l=!1,textAlign:t=m.DEFAULT_TEXT_ALIGN,typographyVariant:g=m.DEFAULT_TYPOGRAPHY_VARIANT,testID:h="button-group-item",...p}=e,{tokens:f}=$(),{buttonAlt:y}=f;return r.jsx(Q,{...p,$isInvalid:o,$fullWidth:l,$textAlign:t,"data-testid":h,children:r.jsx(Z,{color:"inherit",variant:g,fontFamily:y.typography.fontFamily,component:"span",children:a})})}const O=Y.forwardRef((e,a)=>{const{labelProps:o,alerts:l,variant:t=P.DEFAULT_VARIANT,typographyVariant:g,items:h,testID:p="button-group",...f}=e;return r.jsx(z,{externallyLabelledBy:e["aria-labelledby"],externallyDescribedBy:e["aria-describedby"],labelProps:o,alerts:l,children:({labelledBy:y,describedBy:v})=>r.jsx(M,{alert:l&&r.jsx(J,{alerts:l}),children:r.jsx(X,{...o,children:r.jsx(K,{disallowEmptySelection:!0,...f,ref:a,$variant:t,orientation:t==="stacked"?"vertical":void 0,"aria-labelledby":y,"aria-describedby":v,"data-testid":p,children:h.map(B=>r.jsx(tt,{...B,fullWidth:["stretch","stacked"].includes(t),textAlign:t==="stacked"?"left":"center",typographyVariant:g,"aria-describedby":v,testID:`${p}-item-${B.id}`},B.id))})})})})});O.displayName="ButtonGroup";const et={title:"Components/Inputs/ButtonGroup",component:O,argTypes:{variant:{control:{type:"select"},options:P.VARIANTS},typographyVariant:{control:{type:"select"},options:m.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}}},args:{variant:P.DEFAULT_VARIANT,typographyVariant:m.DEFAULT_TYPOGRAPHY_VARIANT,items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Button label 02"}]}},s={args:{"aria-label":"ButtonGroup label"}},i={args:{labelProps:{label:"ButtonGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"ButtonGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"error-button-group-item-01",label:"Button label 01",isInvalid:!0},{id:"error-button-group-item-02",label:"Button label 02",isInvalid:!0}],alerts:[{severity:"error",children:"Error description over two lines if required."}]}},c={args:{isDisabled:!0,labelProps:{label:"Disabled ButtonGroup label"}}},b={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Disabled Button",isDisabled:!0},{id:"button-group-item-03",label:"Button label 03"}]}};var x,I,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    "aria-label": "ButtonGroup label"
  }
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var R,G,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(G=i.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var D,w,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var j,W,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var S,H,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Disabled ButtonGroup label"
    }
  }
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,N,F;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "ButtonGroup label"
    },
    items: [{
      id: "button-group-item-01",
      label: "Button label 01"
    }, {
      id: "button-group-item-02",
      label: "Disabled Button",
      isDisabled: true
    }, {
      id: "button-group-item-03",
      label: "Button label 03"
    }]
  }
}`,...(F=(N=b.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const ot=["Basic","WithLabel","WithHint","Invalid","Disabled","WithDisabledItem"],ct=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:c,Invalid:u,WithDisabledItem:b,WithHint:d,WithLabel:i,__namedExportsOrder:ot,default:et},Symbol.toStringTag,{value:"Module"}));export{ct as B,c as D,u as I,i as W,s as a,d as b,b as c};
