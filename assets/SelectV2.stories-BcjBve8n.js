import{e as E}from"./index-DYe-GrfV.js";import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{r as F}from"./index-KmaxkdDD.js";import{a as O,$ as q}from"./ListBox-BvcAl4ro.js";import{a as z,$ as K}from"./Select-FRMuhISC.js";import{a as c,u as d,b as u}from"./index-ByEiyUmp.js";import{$ as M}from"./Button-D3muM46r.js";import{T as N}from"./Typography-C-GpEjPp.js";import{C as G,P as J,L as Q}from"./ListBoxItem-IsiwPc8u.js";import{I as U,a as X}from"./InputAlerts-LVMe8NNK.js";import{I as Y}from"./InputLabelTopV2-rO-LNy5_.js";import{S as Z}from"./ScrollShadowContainer-CrezkSh-.js";import{$ as ee}from"./utils-l5KLAjAw.js";const f=c(M)`
  ${()=>{const{tokens:o}=d(),{select:e}=o;return u`
      all: unset;
      box-sizing: border-box;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${e.button.gap};
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,te=c(O)`
  outline: none;
`,oe=c.div`
  ${()=>{const{tokens:o}=d(),{outerField:e}=o;return u`
      border-radius: ${e.radius};

      &:has(${f}[data-focus-visible]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,re=c.div`
  ${()=>{const{tokens:o}=d(),{outerField:e}=o;return u`
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

      .react-aria-Select[data-invalid] & {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has(${f}[data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-Select:where(:not([data-invalid]))[data-focused] & {
        outline-width: ${e.stroke.width.focus};
        outline-color: ${e.stroke.color.focus};
        outline-offset: ${e.stroke.offset.focus};
      }

      .react-aria-Select[data-disabled] & {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }
    `}}
`;function ae(o){const{children:e}=o;return t.jsx(oe,{children:t.jsx(re,{children:e})})}const se=c(z)`
  ${()=>{const{tokens:o}=d(),{select:e}=o;return u`
      color: ${e.button.text.color.base};

      &[data-placeholder] {
        color: ${e.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`;function le(){const{tokens:o}=d(),{select:e}=o;return t.jsx(N,{variant:e.button.text.typography.variant,fontFamily:e.button.text.typography.fontFamily,noWrap:!0,children:t.jsx(se,{children:({selectedText:p})=>p})})}const V=F.forwardRef((o,e)=>{const{labelProps:p,alerts:m,items:H,testID:W="select",..._}=o,L=ee(e);return t.jsx(K,{..._,"data-testid":W,children:t.jsx(U,{alert:m&&t.jsx(X,{alerts:m}),children:t.jsxs(Y,{...p,children:[t.jsx(ae,{children:t.jsxs(f,{ref:L,children:[t.jsx(le,{}),t.jsx(G,{})]})}),t.jsx(J,{children:t.jsx(Z,{tabIndex:-1,children:t.jsx(te,{children:t.jsx(q,{items:H,children:b=>t.jsx(Q,{id:b.value,textValue:b.title,children:b.title})})})})})]})})})});V.displayName="SelectV2";const ne={title:"Components/Inputs/SelectV2",component:V,argTypes:{placeholder:{control:"text"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{placeholder:"Select",isDisabled:!1,isInvalid:!1,items:E.mockItems}},r={args:{"aria-label":"Select label"}},a={args:{labelProps:{label:"Select label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"Select label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{disabledKeys:["02","04"],labelProps:{label:"Select label"}}},n={args:{isDisabled:!0,labelProps:{label:"Select label"}}},i={args:{isInvalid:!0,labelProps:{label:"Select label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var h,$,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select label"
  }
}`,...(g=($=r.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var x,S,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Select label",
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
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var y,v,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Select label",
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var I,w,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "Select label"
    }
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var B,R,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "Select label"
    }
  }
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,T,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "Select label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ie=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid"],ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:n,DisabledItems:l,Invalid:i,WithHint:s,WithLabel:a,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{r as B,l as D,i as I,ye as S,a as W,s as a,n as b};
