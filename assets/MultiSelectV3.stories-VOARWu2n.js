import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{f as re}from"./index-BQWhUlWo.js";import{j as q}from"./index-eS8l-D1x.js";import{r as w}from"./index-CcKhGcwW.js";import{$ as oe,a as ne,b as ae}from"./ListBox-BPkSMD1Y.js";import{$ as ie,a as se}from"./Select-OCV5C0y7.js";import{u as s,l as a,d as i,p as le}from"./index-C1QKVHyt.js";import{$ as de}from"./Button-T8IefSzn.js";import{u as ce}from"./ScrollShadow.hooks-i9vNmSMF.js";import{O as ue}from"./OuterField-zbUULvu3.js";import{C as pe,P as be}from"./Popover-CJmY6fdk.js";import{R as me}from"./ReactAriaProviders-UpnGrWCN.js";import{I as ge,a as he,b as fe}from"./InputLabelTop-DThkuFi7.js";import{T as S}from"./Typography-BK_ZjFCe.js";import{C as xe}from"./Checkbox-DTTSJzSd.js";const $e=i(de)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,ye=i($e)`
  ${()=>{const{tokens:t}=s(),{multiSelect:e}=t;return a`
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      gap: ${e.button.gap};
      padding-left: ${e.button.padding.left};
      padding-right: ${e.button.padding.right};
    `}}
`,Se=i(oe)`
  ${()=>{const t=ce();return a`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`,ve=i.div`
  ${()=>{const{tokens:t}=s(),{spacing:e}=t;return a`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,je=i.div`
  ${({$isDisabled:t})=>{const{tokens:e}=s(),{multiSelect:r}=e;return a`
      overflow: hidden;
      color: ${t?r.button.headingText.color.disabled:r.button.headingText.color.base};
    `}}
`,Ie=i.div`
  ${({$isDisabled:t})=>{const{tokens:e}=s(),{multiSelect:r}=e;return a`
      overflow: hidden;
      color: ${t?r.button.selectedText.color.disabled:r.button.selectedText.color.base};
    `}}
`,z=i(ne)`
  ${()=>{const{tokens:t}=s(),{multiSelect:e,select:r}=t;return[a`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;

        border-bottom-width: ${r.menu.separator.width};
        border-bottom-style: ${r.menu.separator.style};
        border-bottom-color: ${r.menu.separator.color};

        &:last-of-type {
          border-bottom-color: transparent;
        }

        &[data-disabled] {
          cursor: not-allowed;
        }
      `]}}
`,Ce=i.div`
  ${({$isSelected:t,$isHighlighted:e})=>{const{tokens:r}=s(),{multiSelect:n}=r;return[a`
        display: grid;
        align-items: center;
        color: ${n.menu.option.inner.color.base};
        padding-top: ${n.menu.option.inner.padding.top};
        padding-left: ${n.menu.option.inner.padding.left};
        padding-right: ${n.menu.option.inner.padding.right};
        padding-bottom: ${n.menu.option.inner.padding.bottom};
        border-radius: ${n.menu.option.inner.radius};
        background: ${n.menu.option.inner.backgroundColor.base};

        &:active {
          background: ${n.menu.option.inner.backgroundColor.active};
        }
      `,t&&a`
          background: ${n.menu.option.inner.backgroundColor.selected};
        `,e&&a`
          background: ${n.menu.option.inner.backgroundColor.hover};
        `]}}
`,Te=i.div`
  ${()=>{const{tokens:t}=s(),{select:e,multiSelect:r}=t;return[a`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${r.menu.option.inner.gap};
        overflow-wrap: anywhere;

        ${z}[data-disabled] & {
          color: ${e.menu.option.inner.color.disabled};
        }
      `]}}
`,we=i.div`
  ${()=>{const{tokens:t}=s(),{multiSelect:e}=t;return[a`
        display: grid;
        place-items: center;
        height: ${le(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`,Le=i(ie)`
  ${()=>{const{tokens:t}=s(),{select:e}=t;return a`
      color: ${e.button.text.color.base};

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`;function We(t,e,r){return e.length===0?"None":t.length===e.length?"All":r??""}function De(t,e){return e?e instanceof Set?t.filter(r=>e.has(r.id)):typeof e=="string"?t.filter(r=>r.id===e):Array.isArray(e)?t.filter(r=>e.includes(r.id)):[]:[]}function v(t,e){const r=t.find(n=>n.value===e||String(n.value)===String(e));return r?r.id:e}function ke(t,e){if(e){if(e instanceof Set){const r=new Set;return e.forEach(n=>r.add(v(t,n))),r}return Array.isArray(e)?e.map(r=>v(t,r)):new Set([v(t,e)])}}function Be({items:t,selectedItems:e}){return o.jsx(Le,{children:({selectedText:r})=>{var p;const n=We(t,e,r),l=e.length&&e.length!==t.length&&((p=e[0])!=null&&p.ariaLabel)?Array.from(e,d=>d.ariaLabel).join(", "):n;return o.jsx("span",{"aria-label":l,children:n})}})}const j=w.forwardRef((t,e)=>{const{heading:r,labelProps:n,alerts:l,id:p,items:d,selectedItems:H,onChange:N,isRequired:I,testID:U="select",isDisabled:x,disabledKeys:Y,...G}=t,C=w.useId(),{tokens:J}=s(),{multiSelect:c}=J,Q=`${t["aria-label"]||""}${I?" required":""}`.trim()||void 0;function X($){const y=De(d,$);N(y)}const Z=ke(d,Y);return o.jsx(me,{fieldID:p||C,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:n,alerts:l,children:({labelledBy:$,describedBy:y})=>o.jsx(ge,{alert:l&&o.jsx(fe,{alerts:l}),children:o.jsx(he,{...n,children:o.jsxs(se,{...G,selectionMode:"multiple",id:p||C,"aria-labelledby":$,"aria-describedby":y,"data-testid":U,isRequired:I,isDisabled:x,"aria-label":Q,onChange:X,disabledKeys:Z,children:[o.jsx(ue,{children:o.jsxs(ye,{ref:e,children:[o.jsxs(ve,{children:[o.jsx(je,{$isDisabled:x,children:o.jsx(S,{component:"div",color:"inherit",variant:c.button.headingText.typography.variant,fontFamily:c.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),o.jsx(Ie,{$isDisabled:x,children:o.jsx(S,{component:"div",color:"inherit",variant:c.button.selectedText.typography.variant,fontFamily:c.button.selectedText.typography.fontFamily,noWrap:!0,children:o.jsx(Be,{items:d,selectedItems:H})})})]}),o.jsx(pe,{})]})}),o.jsx(be,{children:o.jsx(Se,{children:o.jsx(ae,{items:d,children:u=>o.jsx(z,{id:u.id,textValue:u.title,"aria-label":u.ariaLabel,children:({isSelected:T,isFocused:ee,isDisabled:te})=>o.jsx(Ce,{$isSelected:T,$isHighlighted:ee,children:o.jsxs(Te,{children:[o.jsx(we,{children:o.jsx(xe,{value:u.title,isSelected:T,isDisabled:te})}),o.jsx(S,{component:"div",color:"inherit",title:u.title,variant:c.menu.option.inner.text.typography.variant,fontFamily:c.menu.option.inner.text.typography.fontFamily,children:u.title})]})})})})})})]})})})})});j.displayName="MultiSelectV3";const{useArgs:Me}=__STORYBOOK_MODULE_PREVIEW_API__,Ae={title:"Components/Inputs/MultiSelectV3",component:j,render:function(e){const[,r]=Me();function n(l){e.onChange(l),r({selectedItems:l})}return o.jsx("div",{style:{height:400},children:o.jsx(j,{...e,onChange:n})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:q.mockItems,selectedItems:[],onChange:re(),isDisabled:!1,isInvalid:!1,isRequired:!1}},b={args:{}},m={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},g={args:{labelProps:{label:"MultiSelect label"}}},h={args:{items:q.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}},f={args:{disabledKeys:["02","04"],labelProps:{label:"MultiSelect label"}}};var L,W,D;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {}
}`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var k,B,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var A,P,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var E,R,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(O=(R=h.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var K,V,F;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabledKeys: ["02", "04"],
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Pe=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel","DisabledItems"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,DisabledItems:f,ItemsWithCustomAriaLabel:h,WithError:m,WithLabel:g,__namedExportsOrder:Pe,default:Ae},Symbol.toStringTag,{value:"Module"}));export{b as B,f as D,h as I,Qe as M,m as W,g as a};
