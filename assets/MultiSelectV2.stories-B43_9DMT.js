import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{f as de}from"./index-iP1lhtUC.js";import{f as G}from"./index-WLaP1tkh.js";import{r as i}from"./index-CcKhGcwW.js";import{b as ce,a as ue,$ as pe}from"./ListBox-BTSqjZ8H.js";import{a as l,u as d,b as s,p as me}from"./index-DmICCP6d.js";import{$ as be}from"./Button-DPtumZN7.js";import{u as ge}from"./ScrollShadow.hooks-Ce6wLo3a.js";import{M as he}from"./Select.constants-D58dHOlB.js";import{I as fe,a as xe}from"./InputAlerts-CmJaV3As.js";import{I as ve}from"./InputLabelTopV2-BAZ0Ssay.js";import{T as k}from"./Typography-DLKMW7tv.js";import{C as $e}from"./CheckboxBase-DYeN1Az-.js";import{R as ye}from"./ReactAriaProviders-CFG_2kIo.js";import{C as Se,P as Ie}from"./Popover-BHoxzfo9.js";import{O as je}from"./OuterField-B0oa6jkK.js";const Ce=l.div`
  ${()=>{const{tokens:o}=d(),{spacing:e}=o;return s`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,ke=l.div`
  ${({$isDisabled:o})=>{const{tokens:e}=d(),{multiSelect:r}=e;return s`
      overflow: hidden;
      color: ${o?r.button.headingText.color.disabled:r.button.headingText.color.base};
    `}}
`,Te=l.div`
  ${({$isDisabled:o})=>{const{tokens:e}=d(),{multiSelect:r}=e;return s`
      overflow: hidden;
      color: ${o?r.button.selectedText.color.disabled:r.button.selectedText.color.base};
    `}}
`,we=l(ce)`
  ${()=>{const{tokens:o}=d(),{multiSelect:e,select:r}=o;return[s`
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
`,We=l.div`
  ${({$isSelected:o,$isHighlighted:e})=>{const{tokens:r}=d(),{multiSelect:a}=r;return[s`
        display: grid;
        align-items: center;
        color: ${a.menu.option.inner.color.base};
        padding-top: ${a.menu.option.inner.padding.top};
        padding-left: ${a.menu.option.inner.padding.left};
        padding-right: ${a.menu.option.inner.padding.right};
        padding-bottom: ${a.menu.option.inner.padding.bottom};
        border-radius: ${a.menu.option.inner.radius};
        background: ${a.menu.option.inner.backgroundColor.base};

        &:active {
          background: ${a.menu.option.inner.backgroundColor.active};
        }
        &:hover {
          background: ${a.menu.option.inner.backgroundColor.hover};
        }
      `,o&&s`
          background: ${a.menu.option.inner.backgroundColor.selected};
        `,e&&s`
          background: ${a.menu.option.inner.backgroundColor.hover};
        `]}}
`,Le=l.div`
  ${()=>{const{tokens:o}=d(),{multiSelect:e}=o;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,Be=l.div`
  ${()=>{const{tokens:o}=d(),{multiSelect:e}=o;return[s`
        display: grid;
        place-items: center;
        height: ${me(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`,Me=l.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,Pe=l(be)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,_e=l(Pe)`
  ${()=>{const{tokens:o}=d(),{select:e}=o;return s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,De=l(ue)`
  ${()=>{const o=ge();return s`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`;function Ee(o,e){var r;return o.length===e.length?"All":e.length===1?(r=e[0])==null?void 0:r.title:e.length>1?`${e.length} items selected`:"None"}const T=i.forwardRef((o,e)=>{const{labelProps:r,heading:a,items:c,selectedItems:g,onChange:U,testID:I="multi-select",isDisabled:y,isInvalid:X,isRequired:Y,id:w,alerts:j,...J}=o,[S,C]=i.useState(!1),[Q,W]=i.useState(!1),[Z,L]=i.useState(!1),[ee,te]=i.useState(0),h=i.useRef(null),oe=()=>C(n=>!n),re=i.useId(),B=i.useId(),{tokens:ne}=d(),{multiSelect:m}=ne,M=i.useId(),ae=i.useMemo(()=>new Set(g.map(n=>n.id)),[g]);function ie(n){let b=[];n instanceof Set?b=c.filter(u=>n.has(u.id)):typeof n=="string"?b=c.filter(u=>u.id===n):Array.isArray(n)&&(b=c.filter(u=>n.includes(u.id))),U(b)}const se=n=>{n.key==="Escape"&&(C(!1),n.stopPropagation(),n.preventDefault())},P=Ee(c,g);return i.useLayoutEffect(()=>{h.current&&te(h.current.offsetWidth)},[h.current,S]),t.jsx(ye,{fieldID:w||M,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:r,alerts:j,children:({labelledBy:n,describedBy:b})=>{var u;return t.jsx("div",{ref:e,"data-testid":I,className:"react-aria-Select","data-open":S?"":void 0,"data-focused":Q?"":void 0,"data-hovered":Z?"":void 0,"data-invalid":X?"":void 0,"data-disabled":y?"":void 0,"data-required":Y?"":void 0,children:t.jsx(fe,{alert:j&&t.jsx(xe,{alerts:j}),children:t.jsxs(ve,{...r,children:[t.jsx(je,{children:t.jsx(Me,{children:t.jsxs(_e,{...J,ref:h,id:w||M,onFocus:()=>W(!0),onBlur:()=>W(!1),onHoverStart:()=>L(!0),onHoverEnd:()=>L(!1),"aria-haspopup":"listbox","aria-controls":B,isDisabled:y,onPress:oe,"data-testid":`${I}-button`,type:"button","aria-expanded":S,"aria-labelledby":n,"aria-describedby":b,children:[t.jsxs(Ce,{children:[t.jsx(ke,{$isDisabled:y,children:t.jsx(k,{component:"div",color:"inherit",variant:m.button.headingText.typography.variant,fontFamily:m.button.headingText.typography.fontFamily,noWrap:!0,children:a})}),t.jsx(Te,{$isDisabled:y,children:t.jsx(k,{component:"div",color:"inherit",variant:m.button.selectedText.typography.variant,fontFamily:m.button.selectedText.typography.fontFamily,noWrap:!0,"aria-label":g.length===1&&((u=g[0])==null?void 0:u.ariaLabel)||P,children:P})})]}),t.jsx(Se,{})]})})}),t.jsx(Ie,{isOpen:S,onOpenChange:C,triggerRef:h,width:ee,children:t.jsx("div",{tabIndex:-1,onKeyDownCapture:se,children:t.jsx(De,{id:B,"aria-labelledby":re,selectionMode:"multiple",selectedKeys:ae,onSelectionChange:ie,"data-testid":`${I}-listbox`,style:{maxHeight:he},children:t.jsx(pe,{items:c,children:p=>t.jsx(we,{id:p.id,textValue:p.title,"aria-label":p.ariaLabel,children:({isSelected:_,isFocused:le})=>t.jsx(We,{$isSelected:_,$isHighlighted:le,children:t.jsxs(Le,{children:[t.jsx(Be,{children:t.jsx($e,{inert:"",value:p.title,checked:_,onChange:()=>null})}),t.jsx(k,{component:"div",color:"inherit",title:p.title,variant:m.menu.option.inner.text.typography.variant,fontFamily:m.menu.option.inner.text.typography.fontFamily,children:p.title})]})})},p.id)})})})})]})})})}})});T.displayName="MultiSelectV2";const{useArgs:Ae}=__STORYBOOK_MODULE_PREVIEW_API__,Re={title:"Components/Inputs/MultiSelectV2",component:T,render:function(e){const[,r]=Ae();function a(c){e.onChange(c),r({selectedItems:c})}return t.jsx("div",{style:{height:400},children:t.jsx(T,{...e,onChange:a})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:G.mockItems,selectedItems:[],onChange:de(),isDisabled:!1,isInvalid:!1,isRequired:!1}},f={args:{}},x={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},v={args:{labelProps:{label:"MultiSelect label"}}},$={args:{items:G.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}};var D,E,A;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(A=(E=f.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var R,O,F;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(F=(O=x.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var H,V,q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,K,N;$.parameters={...$.parameters,docs:{...(z=$.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(N=(K=$.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const Oe=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel"],ot=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,ItemsWithCustomAriaLabel:$,WithError:x,WithLabel:v,__namedExportsOrder:Oe,default:Re},Symbol.toStringTag,{value:"Module"}));export{f as B,$ as I,ot as M,x as W,v as a};
