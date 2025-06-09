import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{f as K}from"./index-iP1lhtUC.js";import{f as q}from"./index-CmedeESG.js";import{r as C}from"./index-CcKhGcwW.js";import{a as m}from"./downshift.esm-CA7rj1sz.js";import{a as d,u as l,b as a,p as G}from"./index-D1OOBdzz.js";import{f as N}from"./index-D5asf8ox.js";import{M as U}from"./Select.constants-D58dHOlB.js";import{I as V,a as X}from"./InputAlerts-4hjqy13M.js";import{I as Y}from"./InputLabelTop-CeuiGwLx.js";import{S as J}from"./SelectBase-BbRnw57-.js";import{T as x}from"./Typography-BoEAGT7d.js";import{C as Q}from"./CheckboxBase-CXIOT4Xi.js";import{b as Z}from"./AlertAssociationProps-CEhVpbTc.js";const ee=d.div`
  ${()=>{const{tokens:t}=l(),{spacing:e}=t;return a`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,te=d.div`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return a`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,ne=d.div`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return a`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,re=d.li`
  ${()=>{const{tokens:t}=l(),{multiSelect:e}=t;return[a`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,oe=d.div`
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
`;function ae(t){return t?t.title:""}function le(t,e){const{changes:o,type:r}=e;switch(r){case m.stateChangeTypes.ToggleButtonKeyDownEnter:case m.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case m.stateChangeTypes.ItemClick:return{...o,isOpen:!0,highlightedIndex:t.highlightedIndex};default:return o}}function ce(t,e){var o;return t.length===e.length?"All":e.length===1?(o=e[0])==null?void 0:o.title:e.length>1?`${e.length} items selected`:"None"}function de(t,e){const{labelProps:o,heading:r,selectedItems:i,onChange:b,alertProps:h,testID:y="multi-select",...v}=t,{items:$}=v,{tokens:w}=l(),{multiSelect:p}=w,{getLabelProps:W,getToggleButtonProps:H,getMenuProps:M,isOpen:O,getItemProps:D,highlightedIndex:F}=m({items:$,itemToString:ae,selectedItem:null,stateReducer:le,onSelectedItemChange:({selectedItem:s})=>{if(!s)return;const c=i.indexOf(s);c>0?b([...i.slice(0,c),...i.slice(c+1)]):b(c===0?[...i.slice(1)]:[...i,s])}}),S=C.useId(),{labelHint:R}=o,T=R?S:void 0,k=C.useId(),z=Z(k,t,T);return n.jsx("div",{ref:e,children:n.jsx(V,{alert:h&&n.jsx("div",{id:k,"data-testid":`${y}-alerts`,children:n.jsx(X,{alerts:Array.isArray(h)?h:[h]})}),children:n.jsx(Y,{...o,...W(),labelHintID:S,children:n.jsx(J,{...v,toggleButtonProps:{"aria-describedby":T},getToggleButtonProps:H,getMenuProps:M,isOpen:O,renderButtonContent:()=>n.jsxs(ee,{children:[n.jsx(te,{children:n.jsx(x,{component:"div",color:"inherit",variant:p.button.headingText.typography.variant,fontFamily:p.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),n.jsx(ne,{children:n.jsx(x,{component:"div",color:"inherit",variant:p.button.selectedText.typography.variant,fontFamily:p.button.selectedText.typography.fontFamily,noWrap:!0,children:ce($,i)})})]}),renderListItem:(s,c)=>{const f=i.includes(s),I=F===c;return n.jsx(re,{...D({item:s,index:c,"aria-selected":f}),"data-hovered":I||void 0,tabIndex:-1,children:n.jsx(oe,{$isSelected:f,$isHighlighted:I,children:n.jsxs(ie,{children:[n.jsx(se,{children:n.jsx(Q,{inert:"",value:s.title,checked:f,onChange:()=>null})}),n.jsx(x,{component:"div",color:"inherit",title:s.title,variant:p.menu.option.inner.text.typography.variant,fontFamily:p.menu.option.inner.text.typography.fontFamily,children:s.title})]})})},s.id)},maxListHeight:U,testID:y,alertAssociationProps:z})})})})}const j=N(de),{useArgs:pe}=__STORYBOOK_MODULE_PREVIEW_API__,ue={title:"Components/Inputs/MultiSelect",component:j,render:function(e){const[,o]=pe();function r(i){e.onChange(i),o({selectedItems:i})}return n.jsx("div",{style:{height:400},children:n.jsx(j,{...e,onChange:r})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:q.mockItems,selectedItems:[],onChange:K(),hasError:!1,isDisabled:!1}},u={args:{labelProps:{"aria-label":"Label"}}},g={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var P,B,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
