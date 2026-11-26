import{q as K}from"./index-BqWt56HC.js";import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BVaTkfsr.js";import{$ as X,a as Y}from"./Select-CXK83NTL.js";import{u as l,i as c,a as s,p as Z}from"./index-BRwMcuml.js";import{$ as ee}from"./Button-BzFa2UX0.js";import{$ as te,a as ae}from"./ListBox-c1YHq7Zo.js";import{u as oe}from"./ScrollShadow.hooks-BC8x-UmR.js";import{O as re}from"./OuterField-CJ_478Bv.js";import{T as N}from"./Typography-Cewaurru.js";import{C as ne,P as le}from"./Popover-DPxno_m5.js";import{C as se}from"./Checkbox-v0ZzjJJN.js";import{R as ie}from"./ReactAriaProviders-Bz5XBzo7.js";import{I as ce,a as de,b as ue}from"./InputLabelTop-CbRmLUop.js";const pe=s(ee)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,be=s(pe)`
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return c`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${e.button.gap};
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
    `}}
`,me=s(te)`
  ${()=>{const a=oe();return c`
      outline: none;
      overflow-y: auto;

      ${a}
    `}}
`,ge=s(X)`
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return c`
      color: ${e.button.text.color.base};

      .react-aria-Select[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`,he=new Intl.ListFormat("en-GB");function fe({items:a}){const{tokens:e}=l(),{multiSelect:n}=e;return t.jsx(N,{variant:n.button.text.typography.variant,fontFamily:n.button.text.typography.fontFamily,noWrap:!0,children:t.jsx(ge,{children:({selectedText:i,selectedItems:d})=>{const o=d.filter(r=>r!==null);if(o.length===0)return t.jsx("span",{children:"None"});if(a.length===o.length)return t.jsx("span",{children:"All"});const u=he.format(o.map(r=>r.ariaLabel||r.title));return t.jsx("span",{"aria-label":u,children:i})}})})}const p=s(ae)`
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return[c`
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
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return c`
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
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return[c`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,ye=s.div`
  ${()=>{const{tokens:a}=l(),{multiSelect:e}=a;return[c`
        display: grid;
        place-items: center;
        height: ${Z(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`;function Se(a){const{children:e,...n}=a,{textValue:i}=n,{tokens:d}=l(),{multiSelect:o}=d;return t.jsx(p,{...n,children:u=>{const{isSelected:r,isDisabled:S}=u;return t.jsx($e,{children:t.jsxs(xe,{children:[t.jsx(ye,{children:t.jsx(se,{value:i,isSelected:r,isDisabled:S})}),t.jsx(N,{component:"div",color:"inherit",variant:o.menu.option.inner.text.typography.variant,fontFamily:o.menu.option.inner.text.typography.fontFamily,children:typeof e=="function"?e(u):e})]})})}})}const G=v.forwardRef((a,e)=>{const{labelProps:n,alerts:i,id:d,items:o,testID:u="multi-select",...r}=a,{isRequired:S}=r,P=v.useId(),J=`${a["aria-label"]||""}${S?" required":""}`.trim()||void 0;return t.jsx(ie,{fieldID:d||P,externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:n,alerts:i,children:({labelledBy:Q,describedBy:U})=>t.jsx(ce,{alert:i&&t.jsx(ue,{alerts:i}),children:t.jsx(de,{...n,children:t.jsxs(Y,{...r,selectionMode:"multiple",id:d||P,"aria-labelledby":Q,"aria-describedby":U,"data-testid":u,"aria-label":J,children:[t.jsx(re,{children:t.jsxs(be,{ref:e,children:[t.jsx(fe,{items:o}),t.jsx(ne,{})]})}),t.jsx(le,{children:t.jsx(me,{items:o,children:y=>t.jsx(Se,{id:y.id,textValue:y.title,"aria-label":y.ariaLabel,children:y.title})})})]})})})})});G.displayName="MultiSelect";const Pe={title:"Components/Inputs/MultiSelect",component:G,argTypes:{isDisabled:{control:"boolean"},isRequired:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isRequired:!1,isInvalid:!1,items:K.mockItems}},b={args:{"aria-label":"MultiSelect label"}},m={args:{labelProps:{label:"MultiSelect label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},g={args:{labelProps:{label:"MultiSelect label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{disabledKeys:["item-02","item-04"],labelProps:{label:"MultiSelect label"}}},f={args:{isDisabled:!0,labelProps:{label:"MultiSelect label"}}},$={args:{isInvalid:!0,labelProps:{label:"MultiSelect label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},x={args:{items:K.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect label"}}};var I,j,k;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var T,q,F;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(F=(q=f.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,_,E;$.parameters={...$.parameters,docs:{...(H=$.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(_=$.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,V,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: CoreMultiSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(z=(V=x.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const ve=["Basic","WithLabel","WithHint","DisabledItems","Disabled","Invalid","ItemsWithCustomAriaLabel"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Disabled:f,DisabledItems:h,Invalid:$,ItemsWithCustomAriaLabel:x,WithHint:g,WithLabel:m,__namedExportsOrder:ve,default:Pe},Symbol.toStringTag,{value:"Module"}));export{b as B,h as D,$ as I,Fe as M,m as W,g as a,f as b,x as c};
