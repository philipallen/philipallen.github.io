import{f as N}from"./index-Cnk2rnxF.js";import{l as m,n as A}from"./index-BrtwDHqb.js";import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as S}from"./index-DH5ua8nC.js";import{a as $,u as P,b as i}from"./index-CzvSJj6w.js";import{T as q}from"./Typography-RMDmhaRB.js";import{$ as O}from"./VisuallyHidden-C0e1y2IE.js";import{I as Y}from"./InputWrapper-C7of_464.js";import{I as U}from"./InlineAlert-D3r_vEqv.js";import{F as z}from"./Fieldset-Dfe_wDSF.js";import{b as M}from"./AlertAssociationProps-C5Idu2_l.js";const X=$.div`
  ${({$variant:e})=>{const{tokens:o}=P(),{buttonGroup:n,breakpoint:a}=o;return[i`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${n.items.gap};
        width: 100%;
        max-width: ${n.maxWidth[e]};
      `,e==="center"&&i`
          justify-content: center;
        `,e==="stacked"&&i`
          flex-direction: column;

          @media (min-width: ${a.mobile}) {
            display: inline-flex;
          }
        `]}}
`,J=$.label`
  ${({$hasError:e,$fullWidth:o,$textAlign:n})=>{const{tokens:a}=P(),{buttonAlt:t}=a;return[i`
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
      `,o&&i`
          width: 100%;
        `,n==="center"&&i`
          text-align: center;
          justify-content: center;
        `,e&&i`
          border-width: ${t.stroke.width.error};
          border-color: ${t.stroke.color.error};
        `]}}
`,K=$(q)`
  overflow-wrap: anywhere;
`;function C(e){const{label:o,hasError:n=!1,fullWidth:a=!1,textAlign:t=m.DEFAULT_TEXT_ALIGN,typographyVariant:g=m.DEFAULT_TYPOGRAPHY_VARIANT,testID:u="button-group-item",...h}=e,{tokens:b}=P(),{buttonAlt:f}=b;return r.jsxs(J,{$hasError:n,$fullWidth:a,$textAlign:t,"data-testid":`${u}-item`,children:[r.jsx(O,{children:r.jsx("input",{...h,type:"radio","aria-label":o})}),r.jsx(K,{color:"inherit",variant:g,fontFamily:f.typography.fontFamily,component:"span","aria-hidden":!0,children:o})]})}C.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{label:{required:!0,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},textAlign:{required:!1,tsType:{name:"CoreButtonAlt.TextAlign"},description:""},typographyVariant:{required:!1,tsType:{name:"CoreButtonAlt.TypographyVariant"},description:""}}};function D(e){const{alertProps:o,legend:n,legendHint:a,legendTooltipProps:t,legendHintTooltipProps:g,variant:u=A.DEFAULT_VARIANT,name:h,items:b,onChange:f,typographyVariant:L,testID:y="button-group"}=e,x=S.useId(),F=M(x,e);return r.jsx(Y,{alert:o?r.jsx(U,{id:x,...o,testID:`${y}-alert`}):void 0,children:r.jsx(z,{legend:n,legendHint:a,legendTooltipProps:t,legendHintTooltipProps:g,testID:y,ariaAlertAssociationProps:F,children:r.jsx(X,{$variant:u,children:b.map(l=>r.jsx(C,{label:l.label,hasError:l.hasError,fullWidth:["stretch","stacked"].includes(u),textAlign:u==="stacked"?"left":"center",typographyVariant:L,name:h,value:l.value,checked:l.checked,onChange:f,testID:`${y}-item-${l.id}`},l.id))})})})}D.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const B={name:"button-group-name",items:[{id:"button-group-item-01",label:"Button label 01",value:"button-group-item-01"},{id:"button-group-item-02",label:"Button label 02",value:"button-group-item-02"}]},T={name:"error-button-group-name",items:[{id:"error-button-group-item-01",label:"Button label 01",value:"error-button-group-item-01",hasError:!0},{id:"error-button-group-item-02",label:"Button label 02",value:"error-button-group-item-02",hasError:!0}]},Q={title:"Components/Inputs/ButtonGroup",component:D,argTypes:{alertProps:{control:{disable:!0}},variant:{control:{type:"select"},options:A.VARIANTS},name:{control:{type:"text"}},items:{control:{disable:!0}},typographyVariant:{control:{type:"select"},options:m.TYPOGRAPHY_VARIANTS},legend:{control:"text"},legendHint:{control:"text"}},args:{variant:A.DEFAULT_VARIANT,name:B.name,items:B.items,onChange:N(),typographyVariant:m.DEFAULT_TYPOGRAPHY_VARIANT}},s={},p={...s,args:{legend:"ButtonGroup title",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}},name:"button-group-with-legend-name"}},c={...s,args:{legend:"ButtonGroup title",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}},name:"button-group-with-legend-hint-name"}},d={args:{name:T.name,items:T.items,alertProps:{severity:"error",children:"Error description over two lines if required."}}};var v,k,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var w,E,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "ButtonGroup title",
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
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,G,j;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "ButtonGroup title",
    legendHint: "Additional information",
    legendHintTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    },
    name: "button-group-with-legend-hint-name"
  }
}`,...(j=(G=c.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var W,H,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: mockErrorButtonGroup.name,
    items: mockErrorButtonGroup.items,
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const Z=["Basic","WithLegend","WithLegendHint","WithError"],ct=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,WithError:d,WithLegend:p,WithLegendHint:c,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{ct as B,p as W,s as a,c as b,d as c};
