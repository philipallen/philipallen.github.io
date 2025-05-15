import{g as x,b as T}from"./index-BDdHs4nI.js";import{j as f}from"./jsx-runtime-BkBIjjFT.js";import{r as b,e as B}from"./index-KmaxkdDD.js";import{a as w,u as D,b as g}from"./index-BMLrhZi-.js";import{k as U,c as L,j as Y,a as N,b as W}from"./utils-HuDI8Qn7.js";import{$ as q}from"./useControlledState-TGcPotj3.js";import{b as X}from"./Button-rO-PiLt4.js";import{b as J}from"./FocusScope-U4VFcwgb.js";import{$ as Q}from"./filterDOMProps-CeZl_uWj.js";import{c as Z}from"./useNumberFormatter-0Jg9Jb_k.js";import{$ as ee}from"./useToggleState-ChXRUrxj.js";import{a as te,$ as oe}from"./useFocusRing-sAzOUMLq.js";import{T as re}from"./Typography-Bt5r6amG.js";import{R as ae}from"./ReactAriaProviders-xi03RDfa.js";import{I as ne,a as le}from"./InputAlerts-B4c5m-Fy.js";import{I as se}from"./InputLabelTopV2-BT9gFvQr.js";function M(o,t,r){const{isSelected:a}=t,{isPressed:e,buttonProps:s}=X({...o,onPress:U(t.toggle,o.onPress)},r);return{isPressed:e,isSelected:a,isDisabled:o.isDisabled||!1,buttonProps:L(s,{"aria-pressed":a})}}function ie(o,t){const{"aria-label":r,"aria-labelledby":a,orientation:e="horizontal"}=o;let[s,i]=b.useState(!1);Y(()=>{var n;i(!!(t.current&&(!((n=t.current.parentElement)===null||n===void 0)&&n.closest('[role="toolbar"]'))))});const{direction:l}=Z(),u=l==="rtl"&&e==="horizontal";let c=J(t);const p=n=>{if(n.currentTarget.contains(n.target)){if(e==="horizontal"&&n.key==="ArrowRight"||e==="vertical"&&n.key==="ArrowDown")u?c.focusPrevious():c.focusNext();else if(e==="horizontal"&&n.key==="ArrowLeft"||e==="vertical"&&n.key==="ArrowUp")u?c.focusNext():c.focusPrevious();else if(n.key==="Tab"){n.stopPropagation(),d.current=document.activeElement,n.shiftKey?c.focusFirst():c.focusLast();return}else return;n.stopPropagation(),n.preventDefault()}},d=b.useRef(null),S=n=>{!n.currentTarget.contains(n.relatedTarget)&&!d.current&&(d.current=n.target)},v=n=>{var m;if(d.current&&!n.currentTarget.contains(n.relatedTarget)&&(!((m=t.current)===null||m===void 0)&&m.contains(n.target))){var A;(A=d.current)===null||A===void 0||A.focus(),d.current=null}};return{toolbarProps:{...Q(o,{labelable:!0}),role:s?"group":"toolbar","aria-orientation":e,"aria-label":r,"aria-labelledby":r==null?a:void 0,onKeyDownCapture:s?void 0:p,onFocusCapture:s?void 0:v,onBlurCapture:s?void 0:S}}}function de(o,t,r){let{isDisabled:a}=o,{toolbarProps:e}=ie(o,r);return{groupProps:{...e,role:t.selectionMode==="single"?"radiogroup":e.role,"aria-disabled":a}}}function ce(o,t,r){let a={isSelected:t.selectedKeys.has(o.id),setSelected(u){t.setSelected(o.id,u)},toggle(){t.toggleKey(o.id)}},{isPressed:e,isSelected:s,isDisabled:i,buttonProps:l}=M({...o,id:void 0,isDisabled:o.isDisabled||t.isDisabled},a,r);return t.selectionMode==="single"&&(l.role="radio",l["aria-checked"]=a.isSelected,delete l["aria-pressed"]),{isPressed:e,isSelected:s,isDisabled:i,buttonProps:l}}function ue(o){let{selectionMode:t="single",disallowEmptySelection:r,isDisabled:a=!1}=o,[e,s]=q(b.useMemo(()=>o.selectedKeys?new Set(o.selectedKeys):void 0,[o.selectedKeys]),b.useMemo(()=>o.defaultSelectedKeys?new Set(o.defaultSelectedKeys):new Set,[o.defaultSelectedKeys]),o.onSelectionChange);return{selectionMode:t,isDisabled:a,selectedKeys:e,setSelectedKeys:s,toggleKey(i){let l;t==="multiple"?(l=new Set(e),l.has(i)&&(!r||l.size>1)?l.delete(i):l.add(i)):l=new Set(e.has(i)&&!r?[]:[i]),s(l)},setSelected(i,l){l!==e.has(i)&&this.toggleKey(i)}}}const be=b.createContext({}),z=b.createContext(null),fe=b.forwardRef(function(t,r){[t,r]=N(t,r,be);let a=ue(t),{groupProps:e}=de(t,a,r),s=W({...t,values:{isDisabled:a.isDisabled,state:a},defaultClassName:"react-aria-ToggleButtonGroup"});return B.createElement("div",{...e,...s,ref:r,slot:t.slot||void 0,"data-orientation":t.orientation||"horizontal","data-disabled":t.isDisabled||void 0},B.createElement(z.Provider,{value:a},s.children))}),pe=b.createContext({}),ge=b.forwardRef(function(t,r){[t,r]=N(t,r,pe);let a=b.useContext(z),e=ee(a&&t.id!=null?{isSelected:a.selectedKeys.has(t.id),onChange(m){a.setSelected(t.id,m)}}:t),{buttonProps:s,isPressed:i,isSelected:l,isDisabled:u}=a&&t.id!=null?ce({...t,id:t.id},a,r):M({...t,id:t.id!=null?String(t.id):void 0},e,r),{focusProps:c,isFocused:p,isFocusVisible:d}=te(t),{hoverProps:S,isHovered:v}=oe(t),n=W({...t,id:void 0,values:{isHovered:v,isPressed:i,isFocused:p,isSelected:e.isSelected,isFocusVisible:d,isDisabled:u,state:e},defaultClassName:"react-aria-ToggleButton"});return B.createElement("button",{...L(s,c,S),...n,ref:r,slot:t.slot||void 0,"data-focused":p||void 0,"data-disabled":u||void 0,"data-pressed":i||void 0,"data-selected":l||void 0,"data-hovered":v||void 0,"data-focus-visible":d||void 0})}),me=w(fe)`
  ${({$variant:o})=>{const{tokens:t}=D(),{buttonGroup:r,breakpoint:a}=t;return[g`
        all: unset;
        box-sizing: border-box;
        display: flex;
        gap: ${r.items.gap};
        width: 100%;
        max-width: ${r.maxWidth[o]};
      `,o==="center"&&g`
          justify-content: center;
        `,o==="stacked"&&g`
          flex-direction: column;

          @media (min-width: ${a.mobile}) {
            display: inline-flex;
          }
        `]}}
`,$e=w(ge)`
  ${({$isInvalid:o,$fullWidth:t,$textAlign:r})=>{const{tokens:a}=D(),{buttonAlt:e}=a;return[g`
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
      `,t&&g`
          width: 100%;
        `,r==="center"&&g`
          text-align: center;
          justify-content: center;
        `,o&&g`
          border-width: ${e.stroke.width.error};
          border-color: ${e.stroke.color.error};
        `]}}
`,he=w(re)`
  overflow-wrap: anywhere;
`;function Pe(o){const{label:t,isInvalid:r=!1,fullWidth:a=!1,textAlign:e=x.DEFAULT_TEXT_ALIGN,typographyVariant:s=x.DEFAULT_TYPOGRAPHY_VARIANT,testID:i="button-group-item",...l}=o,{tokens:u}=D(),{buttonAlt:c}=u;return f.jsx($e,{...l,$isInvalid:r,$fullWidth:a,$textAlign:e,"data-testid":i,children:f.jsx(he,{color:"inherit",variant:s,fontFamily:c.typography.fontFamily,component:"span",children:t})})}const O=b.forwardRef((o,t)=>{const{labelProps:r,alerts:a,variant:e=T.DEFAULT_VARIANT,typographyVariant:s,items:i,testID:l="button-group",...u}=o;return f.jsx(ae,{labelProps:r,alerts:a,children:({labelledBy:c,describedBy:p})=>f.jsx(ne,{alert:a&&f.jsx(le,{alerts:a}),children:f.jsx(se,{...r,children:f.jsx(me,{disallowEmptySelection:!0,...u,ref:t,$variant:e,orientation:e==="stacked"?"vertical":void 0,"aria-labelledby":c,"aria-describedby":p,"data-testid":l,children:i.map(d=>f.jsx(Pe,{...d,fullWidth:["stretch","stacked"].includes(e),textAlign:e==="stacked"?"left":"center",typographyVariant:s,"aria-describedby":p,testID:`${l}-item-${d.id}`},d.id))})})})})});O.displayName="ButtonGroupV2";const ye={title:"Components/Inputs/ButtonGroupV2",component:O,argTypes:{variant:{control:{type:"select"},options:T.VARIANTS},typographyVariant:{control:{type:"select"},options:x.TYPOGRAPHY_VARIANTS},items:{control:{disable:!0}}},args:{variant:T.DEFAULT_VARIANT,typographyVariant:x.DEFAULT_TYPOGRAPHY_VARIANT,items:[{id:"button-group-item-01",label:"Button label 01"},{id:"button-group-item-02",label:"Button label 02"}]}},$={args:{"aria-label":"ButtonGroup label"}},h={args:{labelProps:{label:"ButtonGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},P={args:{labelProps:{label:"ButtonGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},y={args:{labelProps:{label:"ButtonGroup label"},items:[{id:"error-button-group-item-01",label:"Button label 01",isInvalid:!0},{id:"error-button-group-item-02",label:"Button label 02",isInvalid:!0}],alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var I,R,k;$.parameters={...$.parameters,docs:{...(I=$.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "aria-label": "ButtonGroup label"
  }
}`,...(k=(R=$.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,E,V;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(E=h.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var K,_,j;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(_=P.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var C,F,H;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const ve=["Basic","WithLabel","WithHint","Invalid"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:$,Invalid:y,WithHint:P,WithLabel:h,__namedExportsOrder:ve,default:ye},Symbol.toStringTag,{value:"Module"}));export{Ce as B,y as I,h as W,$ as a,P as b};
