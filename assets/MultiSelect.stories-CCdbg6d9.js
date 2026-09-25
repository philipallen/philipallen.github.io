import{o as K}from"./index-EybPYVoN.js";import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BVaTkfsr.js";import{$ as X,a as Y}from"./Select-BXFaTz8y.js";import{u as l,i as c,a as s,p as Z}from"./index-BpMil6Tx.js";import{$ as ee}from"./Button-BTZi05NT.js";import{$ as te,a as oe}from"./ListBox-Y0CKnc0k.js";import{u as ae}from"./ScrollShadow.hooks-IrBnYoiS.js";import{O as re}from"./OuterField-CV3eciED.js";import{T as N}from"./Typography-G_YOndja.js";import{C as ne,P as le}from"./Popover-BDZ94LIb.js";import{C as se}from"./Checkbox-DUsphYoQ.js";import{R as ie}from"./ReactAriaProviders-CP7eKay2.js";import{I as ce,a as de,b as ue}from"./InputLabelTop--1mm_taL.js";const pe=s(ee)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,be=s(pe)`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return c`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${e.button.gap};
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
    `}}
`,me=s(te)`
  ${()=>{const o=ae();return c`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`,ge=s(X)`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return c`
      color: ${e.button.text.color.base};

      .react-aria-Select[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`,he=new Intl.ListFormat("en-GB");function fe({items:o}){const{tokens:e}=l(),{multiSelect:n}=e;return t.jsx(N,{variant:n.button.text.typography.variant,fontFamily:n.button.text.typography.fontFamily,noWrap:!0,children:t.jsx(ge,{children:({selectedText:i,selectedItems:d})=>{const a=d.filter(r=>r!==null);if(a.length===0)return t.jsx("span",{children:"None"});if(o.length===a.length)return t.jsx("span",{children:"All"});const u=he.format(a.map(r=>r.ariaLabel||r.title));return t.jsx("span",{"aria-label":u,children:i})}})})}const p=s(oe)`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return[c`
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        border-bottom-width: ${e.menu.separator.width};
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};
        cursor: pointer;
        outline: none;

        &[data-disabled] {
          cursor: not-allowed;
        }

        &:last-of-type {
          border-bottom-color: transparent;
        }
      `]}}
`,$e=s.div`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return c`
      display: grid;
      align-items: center;
      color: ${e.menu.option.inner.color.base};
      padding-top: ${e.menu.option.inner.padding.top};
      padding-left: ${e.menu.option.inner.padding.left};
      padding-right: ${e.menu.option.inner.padding.right};
      padding-bottom: ${e.menu.option.inner.padding.bottom};
      border-radius: ${e.menu.option.inner.radius};
      background: ${e.menu.option.inner.backgroundColor.base};

      ${p}[data-selected] & {
        background: ${e.menu.option.inner.backgroundColor.selected};
      }

      ${p}[data-hovered] &,
      ${p}[data-focus-visible] & {
        background: ${e.menu.option.inner.backgroundColor.hover};
      }

      ${p}[data-pressed] & {
        background: ${e.menu.option.inner.backgroundColor.active};
      }

      ${p}[data-disabled] & {
        color: ${e.menu.option.inner.color.disabled};
      }
    `}}
`,xe=s.div`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return[c`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,ye=s.div`
  ${()=>{const{tokens:o}=l(),{multiSelect:e}=o;return[c`
        display: grid;
        place-items: center;
        height: ${Z(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`;function Se(o){const{children:e,...n}=o,{textValue:i}=n,{tokens:d}=l(),{multiSelect:a}=d;return t.jsx(p,{...n,children:u=>{const{isSelected:r,isDisabled:S}=u;return t.jsx($e,{children:t.jsxs(xe,{children:[t.jsx(ye,{children:t.jsx(se,{value:i,isSelected:r,isDisabled:S})}),t.jsx(N,{component:"div",color:"inherit",variant:a.menu.option.inner.text.typography.variant,fontFamily:a.menu.option.inner.text.typography.fontFamily,children:typeof e=="function"?e(u):e})]})})}})}const G=v.forwardRef((o,e)=>{const{labelProps:n,alerts:i,id:d,items:a,testID:u="multi-select",...r}=o,{isRequired:S}=r,P=v.useId(),J=`${o["aria-label"]||""}${S?" required":""}`.trim()||void 0;return t.jsx(ie,{fieldID:d||P,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:n,alerts:i,children:({labelledBy:Q,describedBy:U})=>t.jsx(ce,{alert:i&&t.jsx(ue,{alerts:i}),children:t.jsx(de,{...n,children:t.jsxs(Y,{...r,selectionMode:"multiple",id:d||P,"aria-labelledby":Q,"aria-describedby":U,"data-testid":u,"aria-label":J,children:[t.jsx(re,{children:t.jsxs(be,{ref:e,children:[t.jsx(fe,{items:a}),t.jsx(ne,{})]})}),t.jsx(le,{children:t.jsx(me,{items:a,children:y=>t.jsx(Se,{id:y.id,textValue:y.title,"aria-label":y.ariaLabel,children:y.title})})})]})})})})});G.displayName="MultiSelect";const Pe={title:"Components/Inputs/MultiSelect",component:G,argTypes:{isDisabled:{control:"boolean"},isRequired:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isRequired:!1,isInvalid:!1,items:K.mockItems}},b={args:{"aria-label":"MultiSelect label"}},m={args:{labelProps:{label:"MultiSelect label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},g={args:{labelProps:{label:"MultiSelect label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{disabledKeys:["item-02","item-04"],labelProps:{label:"MultiSelect label"}}},f={args:{isDisabled:!0,labelProps:{label:"MultiSelect label"}}},$={args:{isInvalid:!0,labelProps:{label:"MultiSelect label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},x={args:{items:K.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect label"}}};var I,j,k;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "aria-label": "MultiSelect label"
  }
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var M,B,w;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label",
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
}`,...(w=(B=m.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var A,L,C;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label",
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
}`,...(C=(L=g.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var D,R,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["item-02", "item-04"],
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var T,F,H;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,q,E;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "MultiSelect label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(E=(q=$.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var O,V,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: CoreMultiSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(z=(V=x.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const ve=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid","ItemsWithCustomAriaLabel"],He=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Disabled:f,DisabledItems:h,Invalid:$,ItemsWithCustomAriaLabel:x,WithHint:g,WithLabel:m,__namedExportsOrder:ve,default:Pe},Symbol.toStringTag,{value:"Module"}));export{b as B,h as D,$ as I,He as M,m as W,g as a,f as b,x as c};
