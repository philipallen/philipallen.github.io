import{f as G}from"./index-Cnk2rnxF.js";import{a as p,l as h}from"./index-DKJt7waT.js";import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as w}from"./index-DH5ua8nC.js";import{a as f,u as y,b as i}from"./index-CtBUti8q.js";import{T as j}from"./Typography-v4_88_aK.js";import{$ as P}from"./VisuallyHidden-KFGkQyAi.js";import{b as R,I as V}from"./AlertAssociationProps-x_hs0fx1.js";import{I as C}from"./InlineAlert-uKr_Jbz9.js";const D=f.fieldset`
  ${({$variant:r})=>{const{tokens:o}=y(),{buttonGroup:e,breakpoint:a}=o;return[i`
        all: unset;
        display: flex;
        gap: ${e.items.gap};
        width: 100%;
        max-width: ${e.maxWidth[r]};
      `,r==="center"&&i`
          justify-content: center;
        `,r==="stacked"&&i`
          flex-direction: column;

          @media (min-width: ${a.mobile}) {
            display: inline-flex;
          }
        `]}}
`,W=f.label`
  ${({$hasError:r,$fullWidth:o,$textAlign:e})=>{const{tokens:a}=y(),{buttonAlt:t}=a;return[i`
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
        `,e==="center"&&i`
          text-align: center;
          justify-content: center;
        `,r&&i`
          border-width: ${t.stroke.width.error};
          border-color: ${t.stroke.color.error};
        `]}}
`,N=f(j)`
  word-break: break-word;
`;function B(r){const{label:o,hasError:e=!1,fullWidth:a=!1,textAlign:t=p.DEFAULT_TEXT_ALIGN,typographyVariant:m=p.DEFAULT_TYPOGRAPHY_VARIANT,testID:g="button-group-item",...l}=r,{tokens:d}=y(),{buttonAlt:b}=d;return n.jsxs(W,{$hasError:e,$fullWidth:a,$textAlign:t,"data-testid":`${g}-item`,children:[n.jsx(P,{children:n.jsx("input",{...l,type:"radio","aria-label":o})}),n.jsx(N,{color:"inherit",variant:m,fontFamily:b.typography.fontFamily,children:o})]})}B.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{label:{required:!0,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},textAlign:{required:!1,tsType:{name:"CoreButtonAlt.TextAlign"},description:""},typographyVariant:{required:!1,tsType:{name:"CoreButtonAlt.TypographyVariant"},description:""}}};function _(r){const{alertProps:o,variant:e=h.DEFAULT_VARIANT,name:a,items:t,onChange:m,typographyVariant:g,testID:l="button-group"}=r,d=w.useId(),b=R(d,r);return n.jsx(V,{alert:o?n.jsx(C,{id:d,...o,testID:`${l}-alert`}):void 0,children:n.jsx(D,{$variant:e,"data-testid":l,...b,children:t.map(s=>n.jsx(B,{label:s.label,hasError:s.hasError,fullWidth:["stretch","stacked"].includes(e),textAlign:e==="stacked"?"left":"center",typographyVariant:g,name:a,value:s.value,checked:s.checked,onChange:m,testID:`${l}-item-${s.id}`},s.id))})})}_.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const $={name:"button-group-name",items:[{id:"button-group-item-01",label:"Button label 01",value:"button-group-item-01"},{id:"button-group-item-02",label:"Button label 02",value:"button-group-item-02"}]},A={name:"error-button-group-name",items:[{id:"error-button-group-item-01",label:"Button label 01",value:"error-button-group-item-01",hasError:!0},{id:"error-button-group-item-02",label:"Button label 02",value:"error-button-group-item-02",hasError:!0}]},q={title:"Components/Inputs/ButtonGroup",component:_,argTypes:{alertProps:{control:{disable:!0}},variant:{control:{type:"select"},options:h.VARIANTS},name:{control:{type:"text"}},items:{control:{disable:!0}},typographyVariant:{control:{type:"select"},options:p.TYPOGRAPHY_VARIANTS}},args:{variant:h.DEFAULT_VARIANT,name:$.name,items:$.items,onChange:G(),typographyVariant:p.DEFAULT_TYPOGRAPHY_VARIANT}},u={},c={args:{name:A.name,items:A.items,alertProps:{severity:"error",children:"Error description over two lines if required."}}};var x,k,T;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var E,v,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: mockErrorButtonGroup.name,
    items: mockErrorButtonGroup.items,
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const F=["Basic","WithError"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,WithError:c,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{J as B,c as W,u as a};
