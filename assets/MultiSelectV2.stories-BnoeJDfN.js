import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{f as de}from"./index-iP1lhtUC.js";import{f as U}from"./index-WLaP1tkh.js";import{r as a}from"./index-CcKhGcwW.js";import{b as ce,a as ue,$ as pe}from"./ListBox-BTSqjZ8H.js";import{a as l,u as d,b as s,p as me}from"./index-BVzVw2jm.js";import{$ as be}from"./Button-DPtumZN7.js";import{u as ge}from"./ScrollShadow.hooks-CDta5krf.js";import{M as he}from"./Select.constants-D58dHOlB.js";import{I as fe,a as xe}from"./InputAlerts-qNYk2mzd.js";import{I as ve}from"./InputLabelTopV2-Bx3mNyBv.js";import{T as k}from"./Typography-DlSr2KWZ.js";import{C as $e}from"./CheckboxBase-OxszdByX.js";import{R as ye}from"./ReactAriaProviders-CFG_2kIo.js";import{C as Se,P as Ie}from"./Popover-CmG92hY4.js";import{O as je}from"./OuterField-OMg1RRPw.js";const Ce=l.div`
  ${()=>{const{tokens:o}=d(),{spacing:e}=o;return s`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,ke=l.div`
  ${({$isDisabled:o})=>{const{tokens:e}=d(),{multiSelect:n}=e;return s`
      overflow: hidden;
      color: ${o?n.button.headingText.color.disabled:n.button.headingText.color.base};
    `}}
`,we=l.div`
  ${({$isDisabled:o})=>{const{tokens:e}=d(),{multiSelect:n}=e;return s`
      overflow: hidden;
      color: ${o?n.button.selectedText.color.disabled:n.button.selectedText.color.base};
    `}}
`,Te=l(ce)`
  ${()=>{const{tokens:o}=d(),{multiSelect:e,select:n}=o;return[s`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;

        border-bottom-width: ${n.menu.separator.width};
        border-bottom-style: ${n.menu.separator.style};
        border-bottom-color: ${n.menu.separator.color};

        &:last-of-type {
          border-bottom-color: transparent;
        }

        &[data-disabled] {
          cursor: not-allowed;
        }
      `]}}
`,We=l.div`
  ${({$isSelected:o,$isHighlighted:e})=>{const{tokens:n}=d(),{multiSelect:i}=n;return[s`
        display: grid;
        align-items: center;
        color: ${i.menu.option.inner.color.base};
        padding-top: ${i.menu.option.inner.padding.top};
        padding-left: ${i.menu.option.inner.padding.left};
        padding-right: ${i.menu.option.inner.padding.right};
        padding-bottom: ${i.menu.option.inner.padding.bottom};
        border-radius: ${i.menu.option.inner.radius};
        background: ${i.menu.option.inner.backgroundColor.base};

        &:active {
          background: ${i.menu.option.inner.backgroundColor.active};
        }
        &:hover {
          background: ${i.menu.option.inner.backgroundColor.hover};
        }
      `,o&&s`
          background: ${i.menu.option.inner.backgroundColor.selected};
        `,e&&s`
          background: ${i.menu.option.inner.backgroundColor.hover};
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
`,Ee=l.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,Me=l(be)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Pe=l(Me)`
  ${()=>{const{tokens:o}=d(),{select:e}=o;return s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding-left: ${e.button.gap};
      padding-right: ${e.button.padding.right};
    `}}
`,_e=l(ue)`
  ${()=>{const o=ge();return s`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`;function De(o,e){var n;return o.length===e.length?"All":e.length===1?(n=e[0])==null?void 0:n.title:e.length>1?`${e.length} items selected`:"None"}const w=a.forwardRef((o,e)=>{const{labelProps:n,heading:i,items:c,selectedItems:h,onChange:X,testID:I="multi-select",isDisabled:y,isInvalid:Y,isRequired:J,id:T,alerts:j,...Q}=o,[S,C]=a.useState(!1),[Z,W]=a.useState(!1),[ee,L]=a.useState(!1),[te,B]=a.useState(0),u=a.useRef(null),oe=()=>C(r=>!r),re=a.useId(),E=a.useId(),{tokens:ne}=d(),{multiSelect:b}=ne,M=a.useId(),ie=a.useMemo(()=>new Set(h.map(r=>r.id)),[h]);function ae(r){let g=[];r instanceof Set?g=c.filter(p=>r.has(p.id)):typeof r=="string"?g=c.filter(p=>p.id===r):Array.isArray(r)&&(g=c.filter(p=>r.includes(p.id))),X(g)}const se=r=>{r.key==="Escape"&&(C(!1),r.stopPropagation(),r.preventDefault())},P=De(c,h);return a.useLayoutEffect(()=>{u.current&&B(u.current.offsetWidth)},[u.current,S]),a.useEffect(()=>{const r=()=>{u.current&&B(u.current.offsetWidth)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[u]),t.jsx(ye,{fieldID:T||M,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:n,alerts:j,children:({labelledBy:r,describedBy:g})=>{var p;return t.jsx("div",{ref:e,"data-testid":I,className:"react-aria-Select","data-open":S?"":void 0,"data-focused":Z?"":void 0,"data-hovered":ee?"":void 0,"data-invalid":Y?"":void 0,"data-disabled":y?"":void 0,"data-required":J?"":void 0,children:t.jsx(fe,{alert:j&&t.jsx(xe,{alerts:j}),children:t.jsxs(ve,{...n,children:[t.jsx(je,{children:t.jsx(Ee,{children:t.jsxs(Pe,{...Q,ref:u,id:T||M,onFocus:()=>W(!0),onBlur:()=>W(!1),onHoverStart:()=>L(!0),onHoverEnd:()=>L(!1),"aria-haspopup":"listbox","aria-controls":E,isDisabled:y,onPress:oe,"data-testid":`${I}-button`,type:"button","aria-expanded":S,"aria-labelledby":r,"aria-describedby":g,children:[t.jsxs(Ce,{children:[t.jsx(ke,{$isDisabled:y,children:t.jsx(k,{component:"div",color:"inherit",variant:b.button.headingText.typography.variant,fontFamily:b.button.headingText.typography.fontFamily,noWrap:!0,children:i})}),t.jsx(we,{$isDisabled:y,children:t.jsx(k,{component:"div",color:"inherit",variant:b.button.selectedText.typography.variant,fontFamily:b.button.selectedText.typography.fontFamily,noWrap:!0,"aria-label":h.length===1&&((p=h[0])==null?void 0:p.ariaLabel)||P,children:P})})]}),t.jsx(Se,{})]})})}),t.jsx(Ie,{isOpen:S,onOpenChange:C,triggerRef:u,width:te,children:t.jsx("div",{tabIndex:-1,onKeyDownCapture:se,children:t.jsx(_e,{id:E,"aria-labelledby":re,selectionMode:"multiple",selectedKeys:ie,onSelectionChange:ae,"data-testid":`${I}-listbox`,style:{maxHeight:he},children:t.jsx(pe,{items:c,children:m=>t.jsx(Te,{id:m.id,textValue:m.title,"aria-label":m.ariaLabel,children:({isSelected:_,isFocused:le})=>t.jsx(We,{$isSelected:_,$isHighlighted:le,children:t.jsxs(Le,{children:[t.jsx(Be,{children:t.jsx($e,{inert:"",value:m.title,checked:_,onChange:()=>null})}),t.jsx(k,{component:"div",color:"inherit",title:m.title,variant:b.menu.option.inner.text.typography.variant,fontFamily:b.menu.option.inner.text.typography.fontFamily,children:m.title})]})})},m.id)})})})})]})})})}})});w.displayName="MultiSelectV2";const{useArgs:Ae}=__STORYBOOK_MODULE_PREVIEW_API__,Re={title:"Components/Inputs/MultiSelectV2",component:w,render:function(e){const[,n]=Ae();function i(c){e.onChange(c),n({selectedItems:c})}return t.jsx("div",{style:{height:400},children:t.jsx(w,{...e,onChange:i})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:U.mockItems,selectedItems:[],onChange:de(),isDisabled:!1,isInvalid:!1,isRequired:!1}},f={args:{}},x={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},v={args:{labelProps:{label:"MultiSelect label"}}},$={args:{items:U.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}};var D,A,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,F,H;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var V,q,z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,N,G;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(G=(N=$.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const Oe=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel"],ot=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,ItemsWithCustomAriaLabel:$,WithError:x,WithLabel:v,__namedExportsOrder:Oe,default:Re},Symbol.toStringTag,{value:"Module"}));export{f as B,$ as I,ot as M,x as W,v as a};
