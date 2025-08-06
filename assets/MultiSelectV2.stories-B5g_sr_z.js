import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{f as de}from"./index-iP1lhtUC.js";import{f as N}from"./index-WLaP1tkh.js";import{r as i}from"./index-CcKhGcwW.js";import{b as ce,a as ue,$ as pe}from"./ListBox-BTSqjZ8H.js";import{a as l,u as d,b as s,p as me}from"./index-BHlkTKmU.js";import{$ as be}from"./Button-DPtumZN7.js";import{u as ge}from"./ScrollShadow.hooks-Yaq7MoTD.js";import{M as he}from"./Select.constants-D58dHOlB.js";import{I as fe,a as xe}from"./InputAlerts-C0T-ByS6.js";import{I as ve}from"./InputLabelTopV2-B3mcgkks.js";import{T as C}from"./Typography-CTcPHIiy.js";import{C as $e}from"./CheckboxBase-Km-voR_z.js";import{R as ye}from"./ReactAriaProviders-CFG_2kIo.js";import{C as Se,P as Ie}from"./Popover-DBXO1Qhj.js";import{O as je}from"./OuterField-B-reVpLU.js";const Ce=l.div`
  ${()=>{const{tokens:o}=d(),{spacing:e}=o;return s`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,ke=l.div`
  ${()=>{const{tokens:o}=d(),{multiSelect:e}=o;return s`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,we=l.div`
  ${()=>{const{tokens:o}=d(),{multiSelect:e}=o;return s`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,Te=l(ce)`
  ${()=>{const{tokens:o}=d(),{multiSelect:e,select:a}=o;return[s`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;

        border-bottom-width: ${a.menu.separator.width};
        border-bottom-style: ${a.menu.separator.style};
        border-bottom-color: ${a.menu.separator.color};

        &:last-of-type {
          border-bottom-color: transparent;
        }

        &[data-disabled] {
          cursor: not-allowed;
        }
      `]}}
`,We=l.div`
  ${({$isSelected:o,$isHighlighted:e})=>{const{tokens:a}=d(),{multiSelect:n}=a;return[s`
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
        &:hover {
          background: ${n.menu.option.inner.backgroundColor.hover};
        }
      `,o&&s`
          background: ${n.menu.option.inner.backgroundColor.selected};
        `,e&&s`
          background: ${n.menu.option.inner.backgroundColor.hover};
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
`,Ee=l(ue)`
  ${()=>{const o=ge();return s`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`;function Ae(o,e){var a;return o.length===e.length?"All":e.length===1?(a=e[0])==null?void 0:a.title:e.length>1?`${e.length} items selected`:"None"}const _=i.forwardRef((o,e)=>{const{labelProps:a,heading:n,items:c,selectedItems:g,onChange:U,testID:S="multi-select",isDisabled:k,isInvalid:X,isRequired:Y,id:w,alerts:I,...J}=o,[y,j]=i.useState(!1),[Q,T]=i.useState(!1),[Z,W]=i.useState(!1),[ee,te]=i.useState(0),h=i.useRef(null),oe=()=>j(r=>!r),re=i.useId(),L=i.useId(),{tokens:ne}=d(),{multiSelect:m}=ne,B=i.useId(),ae=i.useMemo(()=>new Set(g.map(r=>r.id)),[g]);function ie(r){let b=[];r instanceof Set?b=c.filter(u=>r.has(u.id)):typeof r=="string"?b=c.filter(u=>u.id===r):Array.isArray(r)&&(b=c.filter(u=>r.includes(u.id))),U(b)}const se=r=>{r.key==="Escape"&&(j(!1),r.stopPropagation(),r.preventDefault())},M=Ae(c,g);return i.useLayoutEffect(()=>{h.current&&te(h.current.offsetWidth)},[h.current,y]),t.jsx(ye,{fieldID:w||B,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:a,alerts:I,children:({labelledBy:r,describedBy:b})=>{var u;return t.jsx("div",{ref:e,"data-testid":S,className:"react-aria-Select","data-open":y?"":void 0,"data-focused":Q?"":void 0,"data-hovered":Z?"":void 0,"data-invalid":X?"":void 0,"data-disabled":k?"":void 0,"data-required":Y?"":void 0,children:t.jsx(fe,{alert:I&&t.jsx(xe,{alerts:I}),children:t.jsxs(ve,{...a,children:[t.jsx(je,{children:t.jsx(Me,{children:t.jsxs(_e,{...J,ref:h,id:w||B,onFocus:()=>T(!0),onBlur:()=>T(!1),onHoverStart:()=>W(!0),onHoverEnd:()=>W(!1),"aria-haspopup":"listbox","aria-controls":L,isDisabled:k,onPress:oe,"data-testid":`${S}-button`,type:"button","aria-expanded":y,"aria-labelledby":r,"aria-describedby":b,children:[t.jsxs(Ce,{children:[t.jsx(ke,{children:t.jsx(C,{component:"div",color:"inherit",variant:m.button.headingText.typography.variant,fontFamily:m.button.headingText.typography.fontFamily,noWrap:!0,children:n})}),t.jsx(we,{children:t.jsx(C,{component:"div",color:"inherit",variant:m.button.selectedText.typography.variant,fontFamily:m.button.selectedText.typography.fontFamily,noWrap:!0,"aria-label":g.length===1&&((u=g[0])==null?void 0:u.ariaLabel)||M,children:M})})]}),t.jsx(Se,{})]})})}),t.jsx(Ie,{isOpen:y,onOpenChange:j,triggerRef:h,width:ee,children:t.jsx("div",{tabIndex:-1,onKeyDownCapture:se,children:t.jsx(Ee,{id:L,"aria-labelledby":re,selectionMode:"multiple",selectedKeys:ae,onSelectionChange:ie,"data-testid":`${S}-listbox`,style:{maxHeight:he},children:t.jsx(pe,{items:c,children:p=>t.jsx(Te,{id:p.id,textValue:p.title,"aria-label":p.ariaLabel,children:({isSelected:P,isFocused:le})=>t.jsx(We,{$isSelected:P,$isHighlighted:le,children:t.jsxs(Le,{children:[t.jsx(Be,{children:t.jsx($e,{inert:"",value:p.title,checked:P,onChange:()=>null})}),t.jsx(C,{component:"div",color:"inherit",title:p.title,variant:m.menu.option.inner.text.typography.variant,fontFamily:m.menu.option.inner.text.typography.fontFamily,children:p.title})]})})},p.id)})})})})]})})})}})}),{useArgs:Re}=__STORYBOOK_MODULE_PREVIEW_API__,De={title:"Components/Inputs/MultiSelectV2",component:_,render:function(e){const[,a]=Re();function n(c){e.onChange(c),a({selectedItems:c})}return t.jsx("div",{style:{height:400},children:t.jsx(_,{...e,onChange:n})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:N.mockItems,selectedItems:[],onChange:de(),isDisabled:!1,isInvalid:!1,isRequired:!1}},f={args:{}},x={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},v={args:{labelProps:{label:"MultiSelect label"}}},$={args:{items:N.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}};var E,A,R;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,O,F;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(F=(O=x.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var H,q,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(V=(q=v.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var z,K,G;$.parameters={...$.parameters,docs:{...(z=$.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(G=(K=$.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const Oe=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel"],ot=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,ItemsWithCustomAriaLabel:$,WithError:x,WithLabel:v,__namedExportsOrder:Oe,default:De},Symbol.toStringTag,{value:"Module"}));export{f as B,$ as I,ot as M,x as W,v as a};
