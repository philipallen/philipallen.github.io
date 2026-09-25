import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-BVaTkfsr.js";import{$ as ae}from"./ComboBox-Qk0maTTQ.js";import{$ as se,b as w}from"./ListBox-Y0CKnc0k.js";import{a as s,u as g,i as x}from"./index-BpMil6Tx.js";import{$ as le}from"./Button-BTZi05NT.js";import{I as ne}from"./TextInput.styled-oOEQm0WJ.js";import{u as ie}from"./ScrollShadow.hooks-IrBnYoiS.js";import{R as ce}from"./ReactAriaProviders-CP7eKay2.js";import{I as de,a as be,b as me}from"./InputLabelTop--1mm_taL.js";import{C as ue,P as pe}from"./Popover-BDZ94LIb.js";import{L as k}from"./ListBoxItem-CmJAxWOy.js";import{n as he,o as fe,p as ge,q as xe,r as $e,s as Ie}from"./index-BVyJnF54.js";const Pe=s.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,f=s(ne)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,X=s(le)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,ye=s(X)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,Ce=s(se)`
  ${()=>{const{tokens:t}=g(),{select:e}=t,r=ie();return x`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,ve=s.div`
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
`,we=s.div`
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
      &:has(${X}[data-hovered]) {
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
`;function ke(t){const{children:e}=t;return o.jsx(ve,{children:o.jsx(we,{children:e})})}const Y=I.forwardRef((t,e)=>{const{labelProps:r,alerts:l,id:P,placeholder:ee,items:$,testID:oe="combobox",...te}=t,y=I.useId(),C=I.useMemo(()=>$.filter(n=>n.isPromoted),[$]),v=I.useMemo(()=>$.filter(n=>!n.isPromoted),[$]);return o.jsx(ce,{fieldID:P||y,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:l,children:({labelledBy:n,describedBy:re})=>o.jsx(de,{alert:l&&o.jsx(me,{alerts:l}),children:o.jsx(be,{...r,children:o.jsxs(ae,{...te,id:P||y,"aria-labelledby":n,"aria-describedby":re,"data-testid":oe,children:[o.jsx(ke,{children:o.jsxs(Pe,{children:[o.jsx(f,{ref:e,placeholder:ee}),o.jsx(ye,{children:o.jsx(ue,{})})]})}),o.jsx(pe,{children:o.jsxs(Ce,{children:[C.length>0&&o.jsx(w,{items:C,children:a=>o.jsx(k,{id:a.id,icon:a.icon,textValue:a.title,children:a.title})}),v.length>0&&o.jsx(w,{items:v,children:a=>o.jsx(k,{id:a.id,icon:a.icon,textValue:a.title,children:a.title})})]})})]})})})})});Y.displayName="Combobox";const je=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),Z=Array.from({length:6},(t,e)=>{const r=`${e+1}`.padStart(2,"0"),l=[o.jsx(he,{width:24,height:24}),o.jsx(fe,{width:24,height:24}),o.jsx(ge,{width:24,height:24}),o.jsx(xe,{width:24,height:24}),o.jsx($e,{width:24,height:24}),o.jsx(Ie,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:l[e]}}),Se=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Be={title:"Components/Inputs/Combobox",component:Y,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:je}},i={args:{"aria-label":"Combobox label"}},c={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{items:Z,labelProps:{label:"Combobox label"}}},m={args:{items:Se,labelProps:{label:"Combobox label"}}},u={args:{items:Z,disabledKeys:["icon-item-02","icon-item-04"],labelProps:{label:"Combobox label"}}},p={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},h={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var j,S,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,A,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var D,L,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var H,W,E;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(E=(W=b.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var M,O,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var F,z,K;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["icon-item-02", "icon-item-04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(K=(z=u.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var N,V,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Re=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:p,DisabledItems:u,IconItems:b,Invalid:h,PromotedItems:m,WithHint:d,WithLabel:c,__namedExportsOrder:Re,default:Be},Symbol.toStringTag,{value:"Module"}));export{i as B,Ke as C,u as D,b as I,m as P,c as W,d as a,p as b,h as c};
