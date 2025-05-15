import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{r as $}from"./index-KmaxkdDD.js";import{$ as lo}from"./ComboBox-JM0ZuwgH.js";import{a as no,$ as C}from"./ListBox-BVF5357G.js";import{a,u as f,b as h}from"./index-BMLrhZi-.js";import{$ as io}from"./Button-rO-PiLt4.js";import{I as co}from"./TextInputV2.styled-CwwC8Yh8.js";import{u as bo}from"./ScrollShadow.hooks-BtmOWN6N.js";import{R as mo}from"./ReactAriaProviders-xi03RDfa.js";import{I as uo,a as po}from"./InputAlerts-B4c5m-Fy.js";import{I as fo}from"./InputLabelTopV2-BT9gFvQr.js";import{C as ho,P as go,L as w}from"./ListBoxItem-CwIlXz9v.js";import{$ as xo}from"./utils-HuDI8Qn7.js";import{m as $o,a as X,b as Po}from"./Combobox.mocks-CeIN8LtY.js";const Io=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,s=a(co)`
  ${()=>{const{tokens:r}=f(),{select:o}=r;return h`
      height: 100%;
      padding-left: ${o.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,Y=a(io)`
  ${()=>{const{tokens:r}=f(),{select:o}=r;return h`
      all: unset;
      box-sizing: border-box;
      height: 100%;
      padding-left: ${o.button.gap};
      padding-right: ${o.button.padding.right};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,ko=a(no)`
  ${()=>{const{tokens:r}=f(),{select:o}=r,g=bo();return h`
      outline: none;
      overflow-y: auto;

      ${g}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${o.menu.separator.style};
        border-bottom-color: ${o.menu.separator.color};
      }
    `}}
`,vo=a.div`
  ${()=>{const{tokens:r}=f(),{outerField:o}=r;return h`
      border-radius: ${o.radius};

      &:has(${s}[data-focused]),
      &:has(${s}[aria-expanded="true"]) {
        outline-width: ${o.focusRing.width.focus};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset.focus};
      }
    `}}
`,yo=a.div`
  ${()=>{const{tokens:r}=f(),{outerField:o}=r;return h`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${o.gap};
      min-height: ${o.minHeight};
      border-radius: ${o.radius};
      outline-width: ${o.stroke.width.base};
      outline-style: ${o.stroke.style};
      outline-color: ${o.stroke.color.base};
      outline-offset: ${o.stroke.offset.base};
      background: ${o.backgroundColor};

      .react-aria-ComboBox[data-invalid] & {
        outline-width: ${o.stroke.width.error};
        outline-color: ${o.stroke.color.error};
        outline-offset: ${o.stroke.offset.error};
      }

      &:has(${s}[data-hovered]),
      &:has(${Y}[data-hovered]) {
        outline-width: ${o.stroke.width.hover};
        outline-color: ${o.stroke.color.hover};
        outline-offset: ${o.stroke.offset.hover};
      }

      &:has(${s}[data-focused]),
      &:has(${s}[aria-expanded="true"]) {
        outline-width: ${o.stroke.width.focus};
        outline-color: ${o.stroke.color.focus};
        outline-offset: ${o.stroke.offset.focus};
      }

      .react-aria-ComboBox[data-disabled] & {
        outline-width: ${o.stroke.width.base};
        outline-color: ${o.stroke.color.disabled};
        outline-offset: ${o.stroke.offset.base};
      }
    `}}
`;function Co(r){const{children:o}=r;return e.jsx(vo,{children:e.jsx(yo,{children:o})})}const Z=$.forwardRef((r,o)=>{const{labelProps:g,alerts:P,id:I,placeholder:oo,menuTrigger:eo="focus",items:x,testID:ro="combobox",...to}=r,so=xo(o),k=$.useId(),v=$.useMemo(()=>x.filter(l=>l.isPromoted),[x]),y=$.useMemo(()=>x.filter(l=>!l.isPromoted),[x]);return e.jsx(mo,{fieldID:I||k,labelProps:g,alerts:P,children:({labelledBy:l,describedBy:ao})=>e.jsx(uo,{alert:P&&e.jsx(po,{alerts:P}),children:e.jsx(fo,{...g,children:e.jsxs(lo,{...to,id:I||k,"aria-labelledby":l,"aria-describedby":ao,menuTrigger:eo,"data-testid":ro,children:[e.jsx(Co,{children:e.jsxs(Io,{children:[e.jsx(s,{ref:so,placeholder:oo}),e.jsx(Y,{children:e.jsx(ho,{})})]})}),e.jsx(go,{children:e.jsxs(ko,{children:[v.length>0&&e.jsx(C,{items:v,children:t=>e.jsx(w,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})}),y.length>0&&e.jsx(C,{items:y,children:t=>e.jsx(w,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})})]})})]})})})})});Z.displayName="ComboboxV2";const wo={title:"Components/Inputs/ComboboxV2",component:Z,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:$o}},n={args:{"aria-label":"Combobox label"}},i={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{items:X,labelProps:{label:"Combobox label"}}},b={args:{items:Po,labelProps:{label:"Combobox label"}}},m={args:{items:X,disabledKeys:["02","04"],labelProps:{label:"Combobox label"}}},u={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},p={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var j,B,R;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(R=(B=n.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var S,D,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var T,H,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,W,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,M,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,q,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,G,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var J,Q,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const jo=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Fo=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Disabled:u,DisabledItems:m,IconItems:d,Invalid:p,PromotedItems:b,WithHint:c,WithLabel:i,__namedExportsOrder:jo,default:wo},Symbol.toStringTag,{value:"Module"}));export{n as B,Fo as C,m as D,d as I,b as P,i as W,c as a,u as b,p as c};
