import{d as f,c as v}from"./index-eS8l-D1x.js";import{j as a}from"./jsx-runtime-Blucd9Qg.js";import{r as $}from"./index-CcKhGcwW.js";import{u as z}from"./floating-ui.react-BJ0ak3XJ.js";import{u as I,l as s,d as x}from"./index-C1QKVHyt.js";import{$ as M,a as X}from"./ToggleButton-DQLwluQ6.js";import{T as J}from"./Typography-BK_ZjFCe.js";import{R as K}from"./ReactAriaProviders-UpnGrWCN.js";import{I as Q,a as Z,b as ee}from"./InputLabelTop-DThkuFi7.js";const te=x(M)`
  ${({$variant:t})=>{const{tokens:l}=I(),{buttonGroup:r}=l;return[s`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${r.items.gap};
        width: 100%;
        max-width: ${r.maxWidth[t]};
      `,t==="center"&&s`
          justify-content: center;
        `,t==="stacked"&&s`
          flex-direction: column;
        `]}}
`,oe=x(X)`
  ${({$isInvalid:t,$fullWidth:l,$textAlign:r})=>{const{tokens:o}=I(),{buttonAlt:e}=o;return[s`
        display: inline-flex;
        align-items: center;
        border-width: ${e.stroke.width.base};
        border-style: ${e.stroke.style};
        border-color: ${e.stroke.color.base};
        border-radius: ${e.radius};
        min-width: ${e.minWidth};
        min-height: ${e.minHeight.lg};
        padding-top: ${e.padding.top};
        padding-left: ${e.padding.left};
        padding-right: ${e.padding.right};
        padding-bottom: ${e.padding.bottom};
        color: ${e.color.base};
        background: ${e.backgroundColor.base};
        cursor: pointer;

        &[data-focus-visible] {
          outline-width: ${e.focusRing.width};
          outline-style: ${e.focusRing.style};
          outline-color: ${e.focusRing.color};
          outline-offset: ${e.focusRing.offset};
        }

        &[data-hovered] {
          color: ${e.color.hover};
          background: ${e.backgroundColor.hover};
        }

        &[data-selected] {
          border-color: ${e.stroke.color.active};
          color: ${e.color.active};
          background: ${e.backgroundColor.active};
        }

        &[data-disabled] {
          cursor: not-allowed;
          border-color: ${e.stroke.color.disabled};
          color: ${e.color.disabled};
          background: ${e.backgroundColor.disabled};
        }
      `,l&&s`
          width: 100%;
        `,r==="center"&&s`
          text-align: center;
          justify-content: center;
        `,t&&s`
          border-width: ${e.stroke.width.error};
          border-color: ${e.stroke.color.error};
        `]}}
`,re=x(J)`
  overflow-wrap: anywhere;
`;function ae(t){const{label:l,isInvalid:r=!1,fullWidth:o=!1,textAlign:e=f.DEFAULT_TEXT_ALIGN,typographyVariant:h=f.DEFAULT_TYPOGRAPHY_VARIANT,testID:y="button-group-item",...m}=t,{tokens:B}=I(),{buttonAlt:n}=B;return a.jsx(oe,{...m,$isInvalid:r,$fullWidth:o,$textAlign:e,"data-testid":y,children:a.jsx(re,{color:"inherit",variant:h,fontFamily:n.typography.fontFamily,component:"span",children:l})})}const U=$.forwardRef((t,l)=>{const{labelProps:r,alerts:o,variant:e=v.DEFAULT_VARIANT,typographyVariant:h,items:y,testID:m="button-group",...B}=t;let{isInvalid:n}=t;n=n!==void 0?n:(o==null?void 0:o.some(A=>A.severity==="error"))||!1;const g=$.useRef(null),q=z([g,l]);return $.useLayoutEffect(()=>{g.current&&(n?g.current.setAttribute("aria-invalid","true"):g.current.removeAttribute("aria-invalid"))},[n]),a.jsx(K,{externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:o,children:({labelledBy:A,describedBy:R})=>a.jsx(Q,{alert:o&&a.jsx(ee,{alerts:o}),children:a.jsx(Z,{...r,children:a.jsx(te,{disallowEmptySelection:!0,...B,ref:q,$variant:e,orientation:e==="stacked"?"vertical":void 0,"aria-labelledby":A,"aria-describedby":R,"data-testid":m,children:y.map(P=>a.jsx(ae,{...P,fullWidth:["stretch","stacked"].includes(e),textAlign:e==="stacked"?"left":"center",typographyVariant:h,"aria-describedby":R,testID:`${m}-item-${P.id}`},P.id))})})})})});U.displayName="ButtonGroup";const le={title:"Components/Inputs/ButtonGroup",component:U,argTypes:{variant:{control:{type:"select"},options:v.VARIANTS},typographyVariant:{control:{type:"select"},options:f.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}}},args:{variant:v.DEFAULT_VARIANT,typographyVariant:f.DEFAULT_TYPOGRAPHY_VARIANT,items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Button label 02"}]}},i={args:{"aria-label":"ButtonGroup label"}},u={args:{labelProps:{label:"ButtonGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"ButtonGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"error-button-group-item-01",label:"Button label 01",isInvalid:!0},{id:"error-button-group-item-02",label:"Button label 02",isInvalid:!0}],alerts:[{severity:"error",children:"Error description over two lines if required."}]}},b={args:{isDisabled:!0,labelProps:{label:"Disabled ButtonGroup label"}}},p={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Disabled Button",isDisabled:!0},{id:"button-group-item-03",label:"Button label 03"}]}};var T,G,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    "aria-label": "ButtonGroup label"
  }
}`,...(k=(G=i.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var D,w,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var j,E,W;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var S,L,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(L=c.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var V,N,F;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Disabled ButtonGroup label"
    }
  }
}`,...(F=(N=b.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var O,Y,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:C.source}}};const ne=["Basic","WithLabel","WithHint","Invalid","Disabled","WithDisabledItem"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:b,Invalid:c,WithDisabledItem:p,WithHint:d,WithLabel:u,__namedExportsOrder:ne,default:le},Symbol.toStringTag,{value:"Module"}));export{fe as B,b as D,c as I,u as W,i as a,d as b,p as c};
