import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{r as P}from"./index-CcKhGcwW.js";import{$ as ne}from"./ComboBox-DBhbE5OG.js";import{$ as ie,b as j}from"./ListBox-BPkSMD1Y.js";import{d as a,u as g,l as x}from"./index-C1QKVHyt.js";import{$ as ce}from"./Button-T8IefSzn.js";import{I as de}from"./TextInput.styled-CrQbybeI.js";import{u as be}from"./ScrollShadow.hooks-i9vNmSMF.js";import{R as ue}from"./ReactAriaProviders-UpnGrWCN.js";import{I as me,a as pe,b as he}from"./InputLabelTop-DThkuFi7.js";import{C as fe,P as ge}from"./Popover-CJmY6fdk.js";import{L as S}from"./ListBoxItem-_ura-Fpc.js";import{n as xe,o as $e,p as Ie,q as Pe,r as ye,s as Ce}from"./index-B_KGh3jf.js";const ve=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,f=a(de)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,Z=a(ce)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,we=a(Z)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,ke=a(ie)`
  ${()=>{const{tokens:t}=g(),{select:e}=t,r=be();return x`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,je=a.div`
  ${()=>{const{tokens:t}=g(),{outerField:e}=t;return x`
      border-radius: ${e.radius};

      &:has(${f}[data-focused]),
      &:has(${f}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,Se=a.div`
  ${()=>{const{tokens:t}=g(),{outerField:e}=t;return x`
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

      &:has(${f}[data-hovered]),
      &:has(${Z}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has(${f}[aria-expanded="true"]) {
        outline-width: ${e.stroke.width.active};
        outline-color: ${e.stroke.color.active};
        outline-offset: ${e.stroke.offset.active};
      }

      .react-aria-ComboBox[data-disabled] & {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }
    `}}
`;function Be(t){const{children:e}=t;return o.jsx(je,{children:o.jsx(Se,{children:e})})}const ee=P.forwardRef((t,e)=>{const{labelProps:r,alerts:l,id:C,placeholder:te,menuTrigger:re,items:$,testID:se="combobox",disabledKeys:I,...ae}=t,v=P.useId(),w=P.useMemo(()=>$.filter(n=>n.isPromoted),[$]),k=P.useMemo(()=>$.filter(n=>!n.isPromoted),[$]);return o.jsx(ue,{fieldID:C||v,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:l,children:({labelledBy:n,describedBy:le})=>o.jsx(me,{alert:l&&o.jsx(he,{alerts:l}),children:o.jsx(pe,{...r,children:o.jsxs(ne,{...ae,id:C||v,"aria-labelledby":n,"aria-describedby":le,menuTrigger:re,"data-testid":se,children:[o.jsx(Be,{children:o.jsxs(ve,{children:[o.jsx(f,{ref:e,placeholder:te}),o.jsx(we,{children:o.jsx(fe,{})})]})}),o.jsx(ge,{children:o.jsxs(ke,{children:[w.length>0&&o.jsx(j,{items:w,children:s=>{const y=I?I.includes(s.id):!1;return o.jsx(S,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:y,children:s.title})}}),k.length>0&&o.jsx(j,{items:k,children:s=>{const y=I?I.includes(s.id):!1;return o.jsx(S,{id:s.id,icon:s.icon,textValue:s.title,isDisabled:y,children:s.title})}})]})})]})})})})});ee.displayName="Combobox";const De=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),oe=Array.from({length:6},(t,e)=>{const r=`${e+1}`.padStart(2,"0"),l=[o.jsx(xe,{width:24,height:24}),o.jsx($e,{width:24,height:24}),o.jsx(Ie,{width:24,height:24}),o.jsx(Pe,{width:24,height:24}),o.jsx(ye,{width:24,height:24}),o.jsx(Ce,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:l[e]}}),Re=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Ae={title:"Components/Inputs/Combobox",component:ee,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:De}},i={args:{"aria-label":"Combobox label"}},c={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{items:oe,labelProps:{label:"Combobox label"}}},u={args:{items:Re,labelProps:{label:"Combobox label"}}},m={args:{items:oe,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},p={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},h={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var B,D,R;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var A,_,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var L,H,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var E,M,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,F,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,N,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["icon-item-02", "icon-item-04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var G,J,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const _e=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:p,DisabledItems:m,IconItems:b,Invalid:h,PromotedItems:u,WithHint:d,WithLabel:c,__namedExportsOrder:_e,default:Ae},Symbol.toStringTag,{value:"Module"}));export{i as B,Ge as C,m as D,b as I,u as P,c as W,d as a,p as b,h as c};
