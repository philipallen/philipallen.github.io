import{f as N}from"./index-iP1lhtUC.js";import{h as m,c as A}from"./index-CmedeESG.js";import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as B}from"./index-CcKhGcwW.js";import{a as $,u as P,b as s}from"./index-D1OOBdzz.js";import{T as O}from"./Typography-DU98AY51.js";import{$ as Y}from"./VisuallyHidden-BNZM_wZC.js";import{I as U,a as q}from"./InputAlerts-BK_QjMFS.js";import{F as z}from"./Fieldset-B5Z_JCO1.js";import{b as M}from"./AlertAssociationProps-CEhVpbTc.js";const X=$.div`
  ${({$variant:o})=>{const{tokens:n}=P(),{buttonGroup:e,breakpoint:a}=n;return[s`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${e.items.gap};
        width: 100%;
        max-width: ${e.maxWidth[o]};
      `,o==="center"&&s`
          justify-content: center;
        `,o==="stacked"&&s`
          flex-direction: column;

          @media (min-width: ${a.mobile}) {
            display: inline-flex;
          }
        `]}}
`,J=$.label`
  ${({$hasError:o,$fullWidth:n,$textAlign:e})=>{const{tokens:a}=P(),{buttonAlt:t}=a;return[s`
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

        &:has(:focus-visible) {
          outline-width: ${t.focusRing.width};
          outline-style: ${t.focusRing.style};
          outline-color: ${t.focusRing.color};
          outline-offset: ${t.focusRing.offset};
        }

        &:hover {
          color: ${t.color.hover};
          background: ${t.backgroundColor.hover};
        }

        &:has(:checked) {
          border-color: ${t.stroke.color.active};
          color: ${t.color.active};
          background: ${t.backgroundColor.active};
        }
      `,n&&s`
          width: 100%;
        `,e==="center"&&s`
          text-align: center;
          justify-content: center;
        `,o&&s`
          border-width: ${t.stroke.width.error};
          border-color: ${t.stroke.color.error};
        `]}}
`,K=$(O)`
  overflow-wrap: anywhere;
`;function Q(o){const{label:n,hasError:e=!1,fullWidth:a=!1,textAlign:t=m.DEFAULT_TEXT_ALIGN,typographyVariant:g=m.DEFAULT_TYPOGRAPHY_VARIANT,testID:h="button-group-item",...u}=o,{tokens:b}=P(),{buttonAlt:f}=b;return r.jsxs(J,{$hasError:e,$fullWidth:a,$textAlign:t,"data-testid":`${h}-item`,children:[r.jsx(Y,{children:r.jsx("input",{...u,type:"radio","aria-label":n})}),r.jsx(K,{color:"inherit",variant:g,fontFamily:f.typography.fontFamily,component:"span","aria-hidden":!0,children:n})]})}const F=B.forwardRef((o,n)=>{const{alertProps:e,legend:a,legendHint:t,legendTooltipProps:g,legendHintTooltipProps:h,variant:u=A.DEFAULT_VARIANT,name:b,items:f,onChange:S,typographyVariant:C,testID:y="button-group"}=o,x=B.useId(),L=M(x,o);return r.jsx(U,{alert:e&&r.jsx("div",{id:x,"data-testid":`${y}-alerts`,children:r.jsx(q,{alerts:Array.isArray(e)?e:[e]})}),children:r.jsx(z,{ref:n,legend:a,legendHint:t,legendTooltipProps:g,legendHintTooltipProps:h,testID:y,ariaAlertAssociationProps:L,children:r.jsx(X,{$variant:u,children:f.map(l=>r.jsx(Q,{label:l.label,hasError:l.hasError,fullWidth:["stretch","stacked"].includes(u),textAlign:u==="stacked"?"left":"center",typographyVariant:C,name:b,value:l.value,checked:l.checked,onChange:S,testID:`${y}-item-${l.id}`},l.id))})})})});F.displayName="ButtonGroup";const v={name:"button-group-name",items:[{id:"button-group-item-01",label:"Button label 01",value:"button-group-item-01"},{id:"button-group-item-02",label:"Button label 02",value:"button-group-item-02"}]},T={name:"error-button-group-name",items:[{id:"error-button-group-item-01",label:"Button label 01",value:"error-button-group-item-01",hasError:!0},{id:"error-button-group-item-02",label:"Button label 02",value:"error-button-group-item-02",hasError:!0}]},Z={title:"Components/Inputs/ButtonGroup",component:F,argTypes:{alertProps:{control:{disable:!0}},variant:{control:{type:"select"},options:A.VARIANTS},name:{control:{type:"text"}},items:{control:{disable:!0}},typographyVariant:{control:{type:"select"},options:m.TYPOGRAPHY_VARIANTS},legend:{control:"text"},legendHint:{control:"text"}},args:{variant:A.DEFAULT_VARIANT,name:v.name,items:v.items,onChange:N(),typographyVariant:m.DEFAULT_TYPOGRAPHY_VARIANT}},i={},c={...i,args:{legend:"ButtonGroup legend",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}},name:"button-group-with-legend-name"}},d={...i,args:{legend:"ButtonGroup legend",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}},name:"button-group-with-hint-name"}},p={args:{name:T.name,items:T.items,alertProps:{severity:"error",children:"Error description over two lines if required."}}};var k,w,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var E,I,G;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "ButtonGroup legend",
    legendTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    },
    name: "button-group-with-legend-name"
  }
}`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var _,j,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "ButtonGroup legend",
    legendHint: "Additional information",
    legendHintTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    },
    name: "button-group-with-hint-name"
  }
}`,...(H=(j=d.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var W,V,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: mockErrorButtonGroup.name,
    items: mockErrorButtonGroup.items,
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const tt=["Basic","WithLegend","WithHint","WithError"],dt=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,WithError:p,WithHint:d,WithLegend:c,__namedExportsOrder:tt,default:Z},Symbol.toStringTag,{value:"Module"}));export{dt as B,c as W,i as a,d as b,p as c};
