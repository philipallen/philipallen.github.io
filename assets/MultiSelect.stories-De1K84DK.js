import{j as r}from"./jsx-runtime-Blucd9Qg.js";import{f as ke}from"./index-BQWhUlWo.js";import{j as oe}from"./index-eS8l-D1x.js";import{r as i}from"./index-CcKhGcwW.js";import{a as fe,$ as $e,b as ve}from"./ListBox-BPkSMD1Y.js";import{d,u,l as s,p as xe}from"./index-C1QKVHyt.js";import{$ as we}from"./Button-T8IefSzn.js";import{u as ye}from"./ScrollShadow.hooks-i9vNmSMF.js";import{C as Ie,P as Se,M as Ce}from"./Popover-CJmY6fdk.js";import{u as je}from"./floating-ui.react-BJ0ak3XJ.js";import{M as Te,T as Le}from"./index-B_KGh3jf.js";import{I as Me,a as We,b as Ee}from"./InputLabelTop-DThkuFi7.js";import{T as E}from"./Typography-BK_ZjFCe.js";import{R as Re}from"./ReactAriaProviders-UpnGrWCN.js";import{O as Be}from"./OuterField-zbUULvu3.js";import{$ as _e}from"./VisuallyHidden-CYAIBC6z.js";const Pe=d.div`
  ${()=>{const{tokens:o}=u(),{spacing:t}=o;return s`
      padding-top: ${t.s12};
      padding-bottom: ${t.s12};
      overflow: hidden;
    `}}
`,De=d.div`
  ${({$isDisabled:o})=>{const{tokens:t}=u(),{multiSelect:e}=t;return s`
      overflow: hidden;
      color: ${o?e.button.headingText.color.disabled:e.button.headingText.color.base};
    `}}
`,Ae=d.div`
  ${({$isDisabled:o})=>{const{tokens:t}=u(),{multiSelect:e}=t;return s`
      overflow: hidden;
      color: ${o?e.button.selectedText.color.disabled:e.button.selectedText.color.base};
    `}}
`,Oe=d(fe)`
  ${()=>{const{tokens:o}=u(),{multiSelect:t,select:e}=o;return[s`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${t.menu.option.minHeight};
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;

        border-bottom-width: ${e.menu.separator.width};
        border-bottom-style: ${e.menu.separator.style};
        border-bottom-color: ${e.menu.separator.color};

        &:last-of-type {
          border-bottom-color: transparent;
        }

        &[data-disabled] {
          cursor: not-allowed;
        }
      `]}}
`,Fe=d.div`
  ${({$isSelected:o,$isHighlighted:t})=>{const{tokens:e}=u(),{multiSelect:n}=e;return[s`
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
        `,t&&s`
          background: ${n.menu.option.inner.backgroundColor.hover};
        `]}}
`,He=d.div`
  ${()=>{const{tokens:o}=u(),{multiSelect:t}=o;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,ze=d.div`
  ${()=>{const{tokens:o}=u(),{multiSelect:t}=o;return[s`
        display: grid;
        place-items: center;
        height: ${xe(t.menu.option.inner.checkboxWrapper.height)};
      `]}}
`,qe=d.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`,Ke=d(we)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Ne=d(Ke)`
  ${()=>{const{tokens:o}=u(),{select:t}=o;return s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding-left: ${t.button.gap};
      padding-right: ${t.button.padding.right};
    `}}
`,Ge=d($e)`
  ${()=>{const o=ye();return s`
      outline: none;
      overflow-y: auto;

      ${o}
    `}}
`;function Ve(o,t){var e;return o.length===t.length?"All":t.length===1?(e=t[0])==null?void 0:e.title:t.length>1?`${t.length} items selected`:"None"}function Ue(o,t){return t?t instanceof Set?o.filter(e=>t.has(e.id)):typeof t=="string"?o.filter(e=>e.id===t):Array.isArray(t)?o.filter(e=>t.includes(e.id)):[]:[]}const B=d.div`
  ${({$hasError:o})=>{const{tokens:t}=u(),{checkbox:e}=t;return[s`
        position: relative;
        display: grid;
        place-items: center;
        width: ${e.width};
        height: ${e.height};
        border-radius: ${e.stroke.radius};
        outline-style: solid;
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          cursor: not-allowed;
        }

        &:has(input:not(:checked)) {
          background: ${e.backgroundColor.unchecked.base};
          outline-width: ${e.stroke.width.unchecked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled, :checked, :indeterminate)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled, :checked, :indeterminate)
          )
          && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:focus:has(input:not(:disabled, :checked, :indeterminate)),
        :is(label:hover, [role="option"][data-focused]):has(
            input:not(:disabled, :checked, :indeterminate)
          )
          && {
          background: ${e.backgroundColor.unchecked.hover};
          outline-width: ${e.stroke.width.unchecked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:not(:checked):disabled) {
          background: ${e.backgroundColor.unchecked.disabled};
          outline-width: ${e.stroke.width.unchecked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:checked) {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):checked),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:checked:disabled) {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }

        &:has(input:indeterminate) {
          background: ${e.backgroundColor.checked.base};
          outline-width: ${e.stroke.width.checked.base};
          outline-color: ${e.stroke.color.base};
        }

        &:hover:has(input:not(:disabled):indeterminate),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):indeterminate
          )
          && {
          background: ${e.backgroundColor.checked.hover};
          outline-width: ${e.stroke.width.checked.hover};
          outline-color: ${e.stroke.color.hover};
        }

        &:has(input:indeterminate:disabled) {
          background: ${e.backgroundColor.checked.disabled};
          outline-width: ${e.stroke.width.checked.disabled};
          outline-color: ${e.stroke.color.disabled};
        }
      `,o&&s`
          &:has(input:not(:checked)) {
            outline-width: ${e.stroke.width.unchecked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :checked, :indeterminate)),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :checked, :indeterminate)
            )
            && {
            outline-width: ${e.stroke.width.unchecked.hover};
            outline-color: ${e.stroke.color.hover};
          }

          &:has(input:checked) {
            outline-width: ${e.stroke.width.checked.error};
            outline-color: ${e.stroke.color.error};
          }

          &:hover:has(input:not(:disabled, :indeterminate):checked),
          :is(label:hover, [role="option"][data-hovered]):has(
              input:not(:disabled, :indeterminate):checked
            )
            && {
            outline-width: ${e.stroke.width.checked.hover};
            outline-color: ${e.stroke.color.hover};
          }
        `]}}
`,Xe=d.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,Ye=d(Te)`
  ${()=>{const{tokens:o}=u(),{checkbox:t}=o;return[s`
        display: none;

        ${B}:has(input:indeterminate) && {
          display: block;
          width: ${t.icon.width};
          height: ${t.icon.height};
          color: ${t.icon.color.base};
        }
      `]}}
`,Je=d(Le)`
  ${()=>{const{tokens:o}=u(),{checkbox:t}=o;return[s`
        display: none;

        ${B}:has(input:not(:indeterminate):checked) && {
          display: block;
          width: ${t.icon.width};
          height: ${t.icon.height};
          color: ${t.icon.color.base};
        }
      `]}}
`;function Qe(o,t){i.useEffect(()=>{o.current&&(o.current.indeterminate=!!t)},[t])}const re=i.forwardRef((o,t)=>{const{hasError:e,isIndeterminate:n,testID:l="checkbox",...c}=o,w=i.useRef(null);Qe(w,n);const k=je([w,t]);function g(y){var I;y.target.indeterminate=!!n,(I=c.onChange)==null||I.call(c,y)}return r.jsxs(B,{$hasError:e,children:[r.jsx(Xe,{...c,ref:k,type:"checkbox",onChange:g,"data-testid":l}),r.jsx(Ye,{}),r.jsx(Je,{})]})});re.displayName="CheckboxBase";const R=i.forwardRef((o,t)=>{const{labelProps:e,heading:n,items:l,selectedItems:c,onChange:w,testID:k="multi-select",isDisabled:g,isInvalid:y,isRequired:I,id:_,alerts:C,...ne}=o,[b,j]=i.useState(!1),[ie,P]=i.useState(!1),[ae,D]=i.useState(!1),[se,A]=i.useState(0),h=i.useRef(null),de=i.useRef(null),le=i.useRef(b),[ce,T]=i.useState(""),ue=()=>j(a=>!a),he=i.useId(),L=i.useId(),{tokens:pe}=u(),{multiSelect:m}=pe,O=i.useId(),F=i.useMemo(()=>new Set(c.map(a=>a.id)),[c]);function be(a){const M=Ue(l,a);w(M)}const ge=a=>{a.key==="Escape"&&(j(!1),a.stopPropagation(),a.preventDefault())},H=Ve(l,c);return i.useLayoutEffect(()=>{h.current&&A(h.current.offsetWidth)},[h.current,b]),i.useEffect(()=>{const a=()=>{h.current&&A(h.current.offsetWidth)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[h]),i.useEffect(()=>{b?T(`${n}. ${l.length} ${l.length===1?"item":"items"}. ${c.length} selected. Multi-selectable list.`):!b&&h.current&&(h.current.focus(),T("")),le.current=b},[b,n,l.length,c.length]),r.jsx(Re,{fieldID:_||O,externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:e,alerts:C,children:({labelledBy:a,describedBy:M})=>{var z;return r.jsx("div",{ref:t,"data-testid":k,className:"react-aria-Select","data-open":b?"":void 0,"data-focused":ie?"":void 0,"data-hovered":ae?"":void 0,"data-invalid":y?"":void 0,"data-disabled":g?"":void 0,"data-required":I?"":void 0,children:r.jsx(Me,{alert:C&&r.jsx(Ee,{alerts:C}),children:r.jsxs(We,{...e,children:[r.jsx(Be,{children:r.jsx(qe,{children:r.jsxs(Ne,{...ne,ref:h,id:_||O,onFocus:()=>P(!0),onBlur:()=>P(!1),onHoverStart:()=>D(!0),onHoverEnd:()=>D(!1),"aria-haspopup":"dialog","aria-controls":L,isDisabled:g,onPress:ue,"data-testid":`${k}-button`,type:"button","aria-expanded":b,"aria-labelledby":a,"aria-describedby":M,children:[r.jsxs(Pe,{children:[r.jsx(De,{$isDisabled:g,children:r.jsx(E,{component:"div",color:"inherit",variant:m.button.headingText.typography.variant,fontFamily:m.button.headingText.typography.fontFamily,noWrap:!0,children:n})}),r.jsx(Ae,{$isDisabled:g,children:r.jsx(E,{component:"div",color:"inherit",variant:m.button.selectedText.typography.variant,fontFamily:m.button.selectedText.typography.fontFamily,noWrap:!0,"aria-label":c.length===1&&((z=c[0])==null?void 0:z.ariaLabel)||H,children:H})})]}),r.jsx(Ie,{})]})})}),r.jsx(Se,{isOpen:b,onOpenChange:j,triggerRef:h,width:se,"aria-label":n,"aria-modal":"true","aria-labelledby":`${L}-dialog-heading`,role:"dialog",children:r.jsxs("div",{tabIndex:-1,onKeyDownCapture:ge,children:[r.jsx(_e,{"aria-live":"polite","aria-atomic":"true",children:ce}),r.jsx(Ge,{id:L,ref:de,"aria-labelledby":a||he,"aria-multiselectable":"true",selectionMode:"multiple",selectedKeys:F,onSelectionChange:be,"data-testid":`${k}-listbox`,style:{maxHeight:Ce},children:r.jsx(ve,{items:l,children:p=>{const W=l.findIndex(S=>S.id===p.id),q=F.has(p.id);return r.jsx(Oe,{id:p.id,textValue:p.title,"aria-label":p.ariaLabel,"aria-posinset":W>=0?W+1:void 0,"aria-setsize":l.length,"aria-selected":q,role:"option",tabIndex:-1,onFocus:()=>T(`${p.title}, ${W+1} of ${l.length}, ${q?"selected":"not selected"}`),children:({isSelected:S,isFocused:me})=>r.jsx(Fe,{$isSelected:S,$isHighlighted:me,children:r.jsxs(He,{children:[r.jsx(ze,{children:r.jsx(re,{inert:"",value:p.title,checked:S,onChange:()=>null})}),r.jsx(E,{component:"div",color:"inherit",title:p.title,variant:m.menu.option.inner.text.typography.variant,fontFamily:m.menu.option.inner.text.typography.fontFamily,children:p.title})]})})},p.id)}})})]})})]})})})}})});R.displayName="MultiSelect";const{useArgs:Ze}=__STORYBOOK_MODULE_PREVIEW_API__,et={title:"Components/Inputs/MultiSelect",component:R,render:function(t){const[,e]=Ze();function n(l){t.onChange(l),e({selectedItems:l})}return r.jsx("div",{style:{height:400},children:r.jsx(R,{...t,onChange:n})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isRequired:{control:"boolean"}},args:{heading:"Heading",items:oe.mockItems,selectedItems:[],onChange:ke(),isDisabled:!1,isInvalid:!1,isRequired:!1}},f={args:{}},$={args:{isInvalid:!0,alerts:[{severity:"error",children:"Error description over two lines if required."}]}},v={args:{labelProps:{label:"MultiSelect label"}}},x={args:{items:oe.mockItemsWithAriaLabel,labelProps:{label:"MultiSelect with ariaLabel on items"}}};var K,N,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {}
}`,...(G=(N=f.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var V,U,X;$.parameters={...$.parameters,docs:{...(V=$.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(X=(U=$.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,J,Q;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "MultiSelect label"
    }
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: CoreSelect.mockItemsWithAriaLabel,
    labelProps: {
      label: "MultiSelect with ariaLabel on items"
    }
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const tt=["Basic","WithError","WithLabel","ItemsWithCustomAriaLabel"],ft=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,ItemsWithCustomAriaLabel:x,WithError:$,WithLabel:v,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{f as B,x as I,ft as M,$ as W,v as a};
