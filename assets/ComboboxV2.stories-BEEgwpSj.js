import{j as o}from"./jsx-runtime-BkBIjjFT.js";import{r as g}from"./index-KmaxkdDD.js";import{$ as oe,a as re}from"./ComboBox-B7JmemaN.js";import{a as te,$ as I}from"./ListBox-Zuz559Ke.js";import{a,u as p,b as f}from"./index-DT8u_GqS.js";import{$ as se}from"./Button-lwQFUGeW.js";import{I as ae}from"./TextInputV2.styled-B04IJZ78.js";import{I as le,a as ne}from"./InputAlerts-BgCOBeSp.js";import{I as ie}from"./InputLabelTopV2-Cca_2KhX.js";import{C as ce,P as de,L as v}from"./ListBoxItem-DDSZHJHB.js";import{$ as be}from"./utils-l5KLAjAw.js";import{m as me,a as N,b as ue}from"./Combobox.mocks-BB-EDtBA.js";const pe=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,s=a(ae)`
  ${()=>{const{tokens:r}=p(),{select:e}=r;return f`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,J=a(se)`
  ${()=>{const{tokens:r}=p(),{select:e}=r;return f`
      all: unset;
      box-sizing: border-box;
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,fe=a(te)`
  ${()=>{const{tokens:r}=p(),{select:e}=r;return f`
      outline: none;
      overflow-y: auto;

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,he=a.div`
  ${()=>{const{tokens:r}=p(),{outerField:e}=r;return f`
      border-radius: ${e.radius};

      &:has(${s}[data-focused]),
      &:has(${s}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,ge=a.div`
  ${()=>{const{tokens:r}=p(),{outerField:e}=r;return f`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${e.gap};
      min-height: ${e.minHeight};
      border-radius: ${e.radius};
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style};
      outline-color: ${e.stroke.color.base};
      outline-offset: ${e.stroke.offset.base};
      background: ${e.backgroundColor};

      .react-aria-ComboBox[data-invalid] & {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has(${s}[data-hovered]),
      &:has(${J}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has(${s}[data-focused]),
      &:has(${s}[aria-expanded="true"]) {
        outline-width: ${e.stroke.width.focus};
        outline-color: ${e.stroke.color.focus};
        outline-offset: ${e.stroke.offset.focus};
      }

      .react-aria-ComboBox[data-disabled] & {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }
    `}}
`;function $e(r){const{children:e}=r;return o.jsx(he,{children:o.jsx(ge,{children:e})})}const Q=g.forwardRef((r,e)=>{const{labelProps:U,alerts:$,placeholder:X,items:h,testID:Y="combobox",...Z}=r,ee=be(e),x=g.useMemo(()=>h.filter(t=>t.isPromoted),[h]),P=g.useMemo(()=>h.filter(t=>!t.isPromoted),[h]);return o.jsx(oe.Provider,{value:{menuTrigger:"focus"},children:o.jsx(re,{...Z,"data-testid":Y,children:o.jsx(le,{alert:$&&o.jsx(ne,{alerts:$}),children:o.jsxs(ie,{...U,children:[o.jsx($e,{children:o.jsxs(pe,{children:[o.jsx(s,{ref:ee,placeholder:X}),o.jsx(J,{children:o.jsx(ce,{})})]})}),o.jsx(de,{children:o.jsxs(fe,{children:[x.length>0&&o.jsx(I,{items:x,children:t=>o.jsx(v,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})}),P.length>0&&o.jsx(I,{items:P,children:t=>o.jsx(v,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})})]})})]})})})})});Q.displayName="ComboboxV2";const xe={title:"Components/Inputs/ComboboxV2",component:Q,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:me}},l={args:{"aria-label":"Combobox label"}},n={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{items:N,labelProps:{label:"Combobox label"}}},d={args:{items:ue,labelProps:{label:"Combobox label"}}},b={args:{items:N,disabledKeys:["02","04"],labelProps:{label:"Combobox label"}}},m={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},u={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var k,C,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,j,B;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Combobox label",
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
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var R,S,A;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Combobox label",
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
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,T,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,V,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,E,O;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var F,M,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,K,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "Combobox label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(G=(K=u.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const Pe=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Te=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:m,DisabledItems:b,IconItems:c,Invalid:u,PromotedItems:d,WithHint:i,WithLabel:n,__namedExportsOrder:Pe,default:xe},Symbol.toStringTag,{value:"Module"}));export{l as B,Te as C,b as D,c as I,d as P,n as W,i as a,m as b,u as c};
