import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{f as ge}from"./index-iP1lhtUC.js";import{g as Q}from"./index-CoGc3U6X.js";import{r as a}from"./index-CcKhGcwW.js";import{b as he,a as fe,$ as xe}from"./ListBox-BTSqjZ8H.js";import{a as d,u as m,b as l,p as $e}from"./index-5VPm3mt9.js";import{$ as ve}from"./Button-DPtumZN7.js";import{u as ye}from"./ScrollShadow.hooks-cpOhD3p1.js";import{M as Se}from"./Select.constants-D58dHOlB.js";import{I as Ie,a as je}from"./InputAlerts-CqET0I5r.js";import{I as Ce}from"./InputLabelTopV2-C0uvm5sO.js";import{T as L}from"./Typography-Fd9Ks9lL.js";import{C as we}from"./CheckboxBase-CyF2npPN.js";import{R as ke}from"./ReactAriaProviders-CFG_2kIo.js";import{C as Te,P as Le}from"./Popover-BBY813ed.js";import{O as We}from"./OuterField-u7hPFJdi.js";import{$ as Me}from"./VisuallyHidden-BNZM_wZC.js";const Ee=d.div`
  ${()=>{const{tokens:t}=m(),{spacing:e}=t;return l`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,Pe=d.div`
  ${({$isDisabled:t})=>{const{tokens:e}=m(),{multiSelect:r}=e;return l`
      overflow: hidden;
      color: ${t?r.button.headingText.color.disabled:r.button.headingText.color.base};
    `}}
`,Re=d.div`
  ${({$isDisabled:t})=>{const{tokens:e}=m(),{multiSelect:r}=e;return l`
      overflow: hidden;
      color: ${t?r.button.selectedText.color.disabled:r.button.selectedText.color.base};
    `}}
`,Be=d(he)`
  ${()=>{const{tokens:t}=m(),{multiSelect:e,select:r}=t;return[l`
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
`,_e=d.div`
  ${({$isSelected:t,$isHighlighted:e})=>{const{tokens:r}=m(),{multiSelect:n}=r;return[l`
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
      `,t&&l`
          background: ${n.menu.option.inner.backgroundColor.selected};
        `,e&&l`
          background: ${n.menu.option.inner.backgroundColor.hover};
        `]}}
`,De=d.div`
  ${()=>{const{tokens:t}=m(),{multiSelect:e}=t;return[l`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,Ae=d.div`
  ${()=>{const{tokens:t}=m(),{multiSelect:e}=t;return[l`
        display: grid;
        place-items: center;
        height: ${$e(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`,Oe=d.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,Fe=d(ve)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,He=d(Fe)`
  ${()=>{const{tokens:t}=m(),{select:e}=t;return l`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,ze=d(fe)`
  ${()=>{const t=ye();return l`
      outline: none;
      overflow-y: auto;

      ${t}
    `}}
`;function Ve(t,e){var r;return t.length===e.length?"All":e.length===1?(r=e[0])==null?void 0:r.title:e.length>1?`${e.length} items selected`:"None"}function qe(t,e){return e?e instanceof Set?t.filter(r=>e.has(r.id)):typeof e=="string"?t.filter(r=>r.id===e):Array.isArray(e)?t.filter(r=>e.includes(r.id)):[]:[]}const W=a.forwardRef((t,e)=>{const{labelProps:r,heading:n,items:s,selectedItems:b,onChange:Z,testID:S="multi-select",isDisabled:v,isInvalid:ee,isRequired:te,id:M,alerts:I,...oe}=t,[p,j]=a.useState(!1),[re,E]=a.useState(!1),[ne,P]=a.useState(!1),[ie,R]=a.useState(0),c=a.useRef(null),ae=a.useRef(null),se=a.useRef(p),[le,C]=a.useState(""),de=()=>j(i=>!i),ce=a.useId(),w=a.useId(),{tokens:ue}=m(),{multiSelect:g}=ue,B=a.useId(),_=a.useMemo(()=>new Set(b.map(i=>i.id)),[b]);function pe(i){const k=qe(s,i);Z(k)}const me=i=>{i.key==="Escape"&&(j(!1),i.stopPropagation(),i.preventDefault())},D=Ve(s,b);return a.useLayoutEffect(()=>{c.current&&R(c.current.offsetWidth)},[c.current,p]),a.useEffect(()=>{const i=()=>{c.current&&R(c.current.offsetWidth)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[c]),a.useEffect(()=>{p?C(`${n}. ${s.length} ${s.length===1?"item":"items"}. ${b.length} selected. Multi-selectable list.`):!p&&c.current&&(c.current.focus(),C("")),se.current=p},[p,n,s.length,b.length]),o.jsx(ke,{fieldID:M||B,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:r,alerts:I,children:({labelledBy:i,describedBy:k})=>{var A;return o.jsx("div",{ref:e,"data-testid":S,className:"react-aria-Select","data-open":p?"":void 0,"data-focused":re?"":void 0,"data-hovered":ne?"":void 0,"data-invalid":ee?"":void 0,"data-disabled":v?"":void 0,"data-required":te?"":void 0,children:o.jsx(Ie,{alert:I&&o.jsx(je,{alerts:I}),children:o.jsxs(Ce,{...r,children:[o.jsx(We,{children:o.jsx(Oe,{children:o.jsxs(He,{...oe,ref:c,id:M||B,onFocus:()=>E(!0),onBlur:()=>E(!1),onHoverStart:()=>P(!0),onHoverEnd:()=>P(!1),"aria-haspopup":"dialog","aria-controls":w,isDisabled:v,onPress:de,"data-testid":`${S}-button`,type:"button","aria-expanded":p,"aria-labelledby":i,"aria-describedby":k,children:[o.jsxs(Ee,{children:[o.jsx(Pe,{$isDisabled:v,children:o.jsx(L,{component:"div",color:"inherit",variant:g.button.headingText.typography.variant,fontFamily:g.button.headingText.typography.fontFamily,noWrap:!0,children:n})}),o.jsx(Re,{$isDisabled:v,children:o.jsx(L,{component:"div",color:"inherit",variant:g.button.selectedText.typography.variant,fontFamily:g.button.selectedText.typography.fontFamily,noWrap:!0,"aria-label":b.length===1&&((A=b[0])==null?void 0:A.ariaLabel)||D,children:D})})]}),o.jsx(Te,{})]})})}),o.jsx(Le,{isOpen:p,onOpenChange:j,triggerRef:c,width:ie,"aria-label":n,"aria-modal":"true","aria-labelledby":`${w}-dialog-heading`,role:"dialog",children:o.jsxs("div",{tabIndex:-1,onKeyDownCapture:me,children:[o.jsx(Me,{"aria-live":"polite","aria-atomic":"true",children:le}),o.jsx(ze,{id:w,ref:ae,"aria-labelledby":i||ce,"aria-multiselectable":"true",selectionMode:"multiple",selectedKeys:_,onSelectionChange:pe,"data-testid":`${S}-listbox`,style:{maxHeight:Se},children:o.jsx(xe,{items:s,children:u=>{const T=s.findIndex(y=>y.id===u.id),O=_.has(u.id);return o.jsx(Be,{id:u.id,textValue:u.title,"aria-label":u.ariaLabel,"aria-posinset":T>=0?T+1:void 0,"aria-setsize":s.length,"aria-selected":O,role:"option",tabIndex:-1,onFocus:()=>C(`${u.title}, ${T+1} of ${s.length}, ${O?"selected":"not selected"}`),children:({isSelected:y,isFocused:be})=>o.jsx(_e,{$isSelected:y,$isHighlighted:be,children:o.jsxs(De,{children:[o.jsx(Ae,{children:o.jsx(we,{inert:"",value:u.title,checked:y,onChange:()=>null})}),o.jsx(L,{component:"div",color:"inherit",title:u.title,variant:g.menu.option.inner.text.typography.variant,fontFamily:g.menu.option.inner.text.typography.fontFamily,children:u.title})]})})},u.id)}})})]})})]})})})}})});W.displayName="MultiSelectV2";const{useArgs:Ke}=__STORYBOOK_MODULE_PREVIEW_API__,Ne={title:"Components/Inputs/MultiSelectV2",component:W,render:function(e){const[,r]=Ke();function n(s){e.onChange(s),r({selectedItems:s})}return o.jsx("div",{style:{height:400},children:o.jsx(W,{...e,onChange:n})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:Q.mockItems,selectedItems:[],onChange:ge(),isDisabled:!1,isInvalid:!1,isRequired:!1}},h={args:{}},f={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},x={args:{labelProps:{label:"MultiSelect label"}}},$={args:{items:Q.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}};var F,H,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {}
}`,...(z=(H=h.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var V,q,K;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var N,G,U;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(U=(G=x.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,Y,J;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(J=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Ge=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel"],ut=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,ItemsWithCustomAriaLabel:$,WithError:f,WithLabel:x,__namedExportsOrder:Ge,default:Ne},Symbol.toStringTag,{value:"Module"}));export{h as B,$ as I,ut as M,f as W,x as a};
