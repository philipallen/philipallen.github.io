import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{r as I}from"./index-CcKhGcwW.js";import{$ as se}from"./ComboBox-BijWyYPF.js";import{a as le,$ as w}from"./ListBox-fUycZjtt.js";import{a as s,u as g,b as x}from"./index-Dwsyfx_g.js";import{$ as ne}from"./Button-DHrRVfeM.js";import{I as ie}from"./TextInput.styled-_dmNhEnn.js";import{u as ce}from"./ScrollShadow.hooks-ggsIV_6p.js";import{R as de}from"./ReactAriaProviders-CHHp38ws.js";import{I as be,a as ue,b as me}from"./InputLabelTop-Cx21JY_9.js";import{C as pe,P as he}from"./Popover-Jn1wiCeB.js";import{L as k}from"./ListBoxItem-CKleqKFF.js";import{n as fe,o as ge,p as xe,q as $e,r as Ie,s as Pe}from"./index-BKbNTvCu.js";const ye=s.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,f=s(ie)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,X=s(ne)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Ce=s(X)`
  ${()=>{const{tokens:t}=g(),{select:e}=t;return x`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,ve=s(le)`
  ${()=>{const{tokens:t}=g(),{select:e}=t,r=ce();return x`
      outline: none;
      overflow-y: auto;

      ${r}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,we=s.div`
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
`,ke=s.div`
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
`;function je(t){const{children:e}=t;return o.jsx(we,{children:o.jsx(ke,{children:e})})}const Y=I.forwardRef((t,e)=>{const{labelProps:r,alerts:l,id:P,placeholder:ee,menuTrigger:oe="focus",items:$,testID:te="combobox",...re}=t,y=I.useId(),C=I.useMemo(()=>$.filter(n=>n.isPromoted),[$]),v=I.useMemo(()=>$.filter(n=>!n.isPromoted),[$]);return o.jsx(de,{fieldID:P||y,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:l,children:({labelledBy:n,describedBy:ae})=>o.jsx(be,{alert:l&&o.jsx(ue,{alerts:l}),children:o.jsx(me,{...r,children:o.jsxs(se,{...re,id:P||y,"aria-labelledby":n,"aria-describedby":ae,menuTrigger:oe,"data-testid":te,children:[o.jsx(je,{children:o.jsxs(ye,{children:[o.jsx(f,{ref:e,placeholder:ee}),o.jsx(Ce,{children:o.jsx(pe,{})})]})}),o.jsx(he,{children:o.jsxs(ve,{children:[C.length>0&&o.jsx(w,{items:C,children:a=>o.jsx(k,{id:a.id,icon:a.icon,textValue:a.title,children:a.title})}),v.length>0&&o.jsx(w,{items:v,children:a=>o.jsx(k,{id:a.id,icon:a.icon,textValue:a.title,children:a.title})})]})})]})})})})});Y.displayName="Combobox";const Se=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`item-${r}`,title:`Item ${r}`,value:r}}),Z=Array.from({length:6},(t,e)=>{const r=`${e+1}`.padStart(2,"0"),l=[o.jsx(fe,{width:24,height:24}),o.jsx(ge,{width:24,height:24}),o.jsx(xe,{width:24,height:24}),o.jsx($e,{width:24,height:24}),o.jsx(Ie,{width:24,height:24}),o.jsx(Pe,{width:24,height:24})];return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,icon:l[e]}}),Be=Array.from({length:20},(t,e)=>{const r=`${e+1}`.padStart(2,"0");return{id:`icon-item-${r}`,title:`Item ${r}`,value:r,isPromoted:[3,4,5].includes(e)}}),Re={title:"Components/Inputs/Combobox",component:Y,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:Se}},i={args:{"aria-label":"Combobox label"}},c={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{items:Z,labelProps:{label:"Combobox label"}}},u={args:{items:Be,labelProps:{label:"Combobox label"}}},m={args:{items:Z,disabledKeys:["02","04"],labelProps:{label:"Combobox label"}}},p={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},h={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var j,S,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var D,T,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var H,W,E;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(E=(W=b.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var M,O,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var F,z,K;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(K=(z=m.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var N,V,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ae=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:p,DisabledItems:m,IconItems:b,Invalid:h,PromotedItems:u,WithHint:d,WithLabel:c,__namedExportsOrder:Ae,default:Re},Symbol.toStringTag,{value:"Module"}));export{i as B,Ne as C,m as D,b as I,u as P,c as W,d as a,p as b,h as c};
