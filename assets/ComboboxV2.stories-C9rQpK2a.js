import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{r as $}from"./index-CcKhGcwW.js";import{$ as se}from"./ComboBox-ChhAMG3K.js";import{a as le,$ as C}from"./ListBox-BTSqjZ8H.js";import{a,u as f,b as h}from"./index-5VPm3mt9.js";import{$ as ne}from"./Button-DPtumZN7.js";import{I as ie}from"./TextInputV2.styled-DMNKOOhn.js";import{u as ce}from"./ScrollShadow.hooks-cpOhD3p1.js";import{R as de}from"./ReactAriaProviders-CFG_2kIo.js";import{I as be,a as me}from"./InputAlerts-CqET0I5r.js";import{I as ue}from"./InputLabelTopV2-C0uvm5sO.js";import{C as pe,P as fe}from"./Popover-BBY813ed.js";import{L as w}from"./ListBoxItem-Do5YWcvz.js";import{m as he,a as X,b as xe}from"./Combobox.mocks-7z516NwF.js";const ge=a.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,p=a(ie)`
  ${()=>{const{tokens:r}=f(),{select:e}=r;return h`
      height: 100%;
      padding-left: ${e.button.padding.left};

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,Y=a(ne)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,$e=a(Y)`
  ${()=>{const{tokens:r}=f(),{select:e}=r;return h`
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,Pe=a(le)`
  ${()=>{const{tokens:r}=f(),{select:e}=r,x=ce();return h`
      outline: none;
      overflow-y: auto;

      ${x}

      .react-aria-ListBoxSection:not(:empty, :last-of-type) {
        border-bottom-width: 3px;
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
      }
    `}}
`,Ie=a.div`
  ${()=>{const{tokens:r}=f(),{outerField:e}=r;return h`
      border-radius: ${e.radius};

      &:has(${p}[data-focused]),
      &:has(${p}[aria-expanded="true"]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,ye=a.div`
  ${()=>{const{tokens:r}=f(),{outerField:e}=r;return h`
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

      &:has(${p}[data-hovered]),
      &:has(${Y}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has(${p}[aria-expanded="true"]) {
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
`;function ve(r){const{children:e}=r;return o.jsx(Ie,{children:o.jsx(ye,{children:e})})}const Z=$.forwardRef((r,e)=>{const{labelProps:x,alerts:P,id:I,placeholder:ee,menuTrigger:oe="focus",items:g,testID:re="combobox",...te}=r,y=$.useId(),v=$.useMemo(()=>g.filter(s=>s.isPromoted),[g]),k=$.useMemo(()=>g.filter(s=>!s.isPromoted),[g]);return o.jsx(de,{fieldID:I||y,externallyLabelledBy:r["aria-labelledby"],externallyDescribedBy:r["aria-describedby"],labelProps:x,alerts:P,children:({labelledBy:s,describedBy:ae})=>o.jsx(be,{alert:P&&o.jsx(me,{alerts:P}),children:o.jsx(ue,{...x,children:o.jsxs(se,{...te,id:I||y,"aria-labelledby":s,"aria-describedby":ae,menuTrigger:oe,"data-testid":re,children:[o.jsx(ve,{children:o.jsxs(ge,{children:[o.jsx(p,{ref:e,placeholder:ee}),o.jsx($e,{children:o.jsx(pe,{})})]})}),o.jsx(fe,{children:o.jsxs(Pe,{children:[v.length>0&&o.jsx(C,{items:v,children:t=>o.jsx(w,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})}),k.length>0&&o.jsx(C,{items:k,children:t=>o.jsx(w,{id:t.value,icon:t.icon,textValue:t.title,children:t.title})})]})})]})})})})});Z.displayName="ComboboxV2";const ke={title:"Components/Inputs/ComboboxV2",component:Z,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Search",isDisabled:!1,isInvalid:!1,items:he}},l={args:{"aria-label":"Combobox label"}},n={args:{labelProps:{label:"Combobox label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"Combobox label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{items:X,labelProps:{label:"Combobox label"}}},d={args:{items:xe,labelProps:{label:"Combobox label"}}},b={args:{items:X,disabledKeys:["02","04"],labelProps:{label:"Combobox label"}}},m={args:{isDisabled:!0,labelProps:{label:"Combobox label"}}},u={args:{isInvalid:!0,labelProps:{label:"Combobox label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var j,B,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-label": "Combobox label"
  }
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var S,D,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(D=n.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var T,L,H;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(L=i.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var V,W,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,M,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,q,z;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,G,N;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Combobox label"
    }
  }
}`,...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ce=["Basic","WithLabel","WithHint","IconItems","PromotedItems","DisabledItems","Disabled","Invalid"],Me=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:m,DisabledItems:b,IconItems:c,Invalid:u,PromotedItems:d,WithHint:i,WithLabel:n,__namedExportsOrder:Ce,default:ke},Symbol.toStringTag,{value:"Module"}));export{l as B,Me as C,b as D,c as I,d as P,n as W,i as a,m as b,u as c};
