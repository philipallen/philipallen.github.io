import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{f as K}from"./index-iP1lhtUC.js";import{f as q}from"./index-WLaP1tkh.js";import{r as C}from"./index-CcKhGcwW.js";import{a as b}from"./downshift.esm-CA7rj1sz.js";import{a as d,u as l,b as a,p as G}from"./index-BVzVw2jm.js";import{f as N}from"./index-DrIl6pf4.js";import{M as U}from"./Select.constants-D58dHOlB.js";import{I as V,a as X}from"./InputAlerts-qNYk2mzd.js";import{I as Y}from"./InputLabelTop-86u1agOo.js";import{S as J}from"./SelectBase-DMV_Ilny.js";import{T as y}from"./Typography-DlSr2KWZ.js";import{C as Q}from"./CheckboxBase-OxszdByX.js";import{b as Z}from"./AlertAssociationProps-CEhVpbTc.js";const ee=d.div`
  ${()=>{const{tokens:t}=l(),{spacing:e}=t;return a`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,te=d.div`
  ${({$isDisabled:t})=>{const{tokens:e}=l(),{multiSelect:o}=e;return a`
      overflow: hidden;
      color: ${t?o.button.headingText.color.disabled:o.button.headingText.color.base};
    `}}
`,ne=d.div`
  ${({$isDisabled:t})=>{const{tokens:e}=l(),{multiSelect:o}=e;return a`
      overflow: hidden;
      color: ${t?o.button.selectedText.color.disabled:o.button.selectedText.color.base};
    `}}
`,oe=d.li`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return[a`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,re=d.div`
  ${({$isSelected:t,$isHighlighted:e})=>{const{tokens:o}=l(),{multiSelect:r}=o;return[a`
        display: grid;
        align-items: center;
        color: ${r.menu.option.inner.color.base};
        padding-top: ${r.menu.option.inner.padding.top};
        padding-left: ${r.menu.option.inner.padding.left};
        padding-right: ${r.menu.option.inner.padding.right};
        padding-bottom: ${r.menu.option.inner.padding.bottom};
        border-radius: ${r.menu.option.inner.radius};
        background: ${r.menu.option.inner.backgroundColor.base};

        &:active {
          background: ${r.menu.option.inner.backgroundColor.active};
        }
      `,t&&a`
          background: ${r.menu.option.inner.backgroundColor.selected};
        `,e&&a`
          background: ${r.menu.option.inner.backgroundColor.hover};
        `]}}
`,ie=d.div`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return[a`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,se=d.div`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return[a`
        display: grid;
        place-items: center;
        height: ${G(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`;function ae(t){return t?t.title:""}function le(t,e){const{changes:o,type:r}=e;switch(r){case b.stateChangeTypes.ToggleButtonKeyDownEnter:case b.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case b.stateChangeTypes.ItemClick:return{...o,isOpen:!0,highlightedIndex:t.highlightedIndex};default:return o}}function ce(t,e){var o;return t.length===e.length?"All":e.length===1?(o=e[0])==null?void 0:o.title:e.length>1?`${e.length} items selected`:"None"}function de(t,e){const{labelProps:o,heading:r,selectedItems:i,onChange:f,alertProps:h,testID:v="multi-select",...m}=t,{items:$}=m,{tokens:D}=l(),{multiSelect:p}=D,{getLabelProps:w,getToggleButtonProps:W,getMenuProps:H,isOpen:M,getItemProps:O,highlightedIndex:F}=b({items:$,itemToString:ae,selectedItem:null,stateReducer:le,onSelectedItemChange:({selectedItem:s})=>{if(!s)return;const c=i.indexOf(s);c>0?f([...i.slice(0,c),...i.slice(c+1)]):f(c===0?[...i.slice(1)]:[...i,s])}}),S=C.useId(),{labelHint:R}=o,T=R?S:void 0,k=C.useId(),z=Z(k,t,T);return n.jsx("div",{ref:e,children:n.jsx(V,{alert:h&&n.jsx("div",{id:k,"data-testid":`${v}-alerts`,children:n.jsx(X,{alerts:Array.isArray(h)?h:[h]})}),children:n.jsx(Y,{...o,...w(),labelHintID:S,children:n.jsx(J,{...m,toggleButtonProps:{"aria-describedby":T},getToggleButtonProps:W,getMenuProps:H,isOpen:M,renderButtonContent:()=>n.jsxs(ee,{children:[n.jsx(te,{$isDisabled:m.isDisabled,children:n.jsx(y,{component:"div",color:"inherit",variant:p.button.headingText.typography.variant,fontFamily:p.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),n.jsx(ne,{$isDisabled:m.isDisabled,children:n.jsx(y,{component:"div",color:"inherit",variant:p.button.selectedText.typography.variant,fontFamily:p.button.selectedText.typography.fontFamily,noWrap:!0,children:ce($,i)})})]}),renderListItem:(s,c)=>{const x=i.includes(s),I=F===c;return n.jsx(oe,{...O({item:s,index:c,"aria-selected":x}),"data-hovered":I||void 0,tabIndex:-1,children:n.jsx(re,{$isSelected:x,$isHighlighted:I,children:n.jsxs(ie,{children:[n.jsx(se,{children:n.jsx(Q,{inert:"",value:s.title,checked:x,onChange:()=>null})}),n.jsx(y,{component:"div",color:"inherit",title:s.title,variant:p.menu.option.inner.text.typography.variant,fontFamily:p.menu.option.inner.text.typography.fontFamily,children:s.title})]})})},s.id)},maxListHeight:U,testID:v,alertAssociationProps:z})})})})}const j=N(de),{useArgs:pe}=__STORYBOOK_MODULE_PREVIEW_API__,ue={title:"Components/Inputs/MultiSelect",component:j,render:function(e){const[,o]=pe();function r(i){e.onChange(i),o({selectedItems:i})}return n.jsx("div",{style:{height:400},children:n.jsx(j,{...e,onChange:r})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:q.mockItems,selectedItems:[],onChange:K(),hasError:!1,isDisabled:!1}},u={args:{labelProps:{"aria-label":"Label"}}},g={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var P,B,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(E=(B=u.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,L,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      "aria-label": "Label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const ge=["Basic","WithError"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,WithError:g,__namedExportsOrder:ge,default:ue},Symbol.toStringTag,{value:"Module"}));export{u as B,Pe as M,g as W};
