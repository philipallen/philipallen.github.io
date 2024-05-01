import{a as p,u as g,b as l,j as r}from"./index-74fe31d7.js";import{a as H}from"./index-583b5bb5.js";import{u as h,S as A,M as D,m as F}from"./Select.mocks-e3244786.js";import{I as R,a as K}from"./InputAlert-aec6a2b5.js";import{I as V}from"./InputLabelTop-9f3f61cf.js";import{T as b}from"./Typography-5c86d7b4.js";import{C as q}from"./CheckboxBase-0ad0bb82.js";const N=p.div`
  overflow: hidden;
`,z=p.div`
  ${()=>{const{tokens:n}=g(),{multiSelect:t}=n;return l`
      overflow: hidden;
      color: ${t.button.headingText.color.base};
    `}}
`,G=p.div`
  ${()=>{const{tokens:n}=g(),{multiSelect:t}=n;return l`
      overflow: hidden;
      color: ${t.button.selectedText.color.base};
    `}}
`,U=p.li`
  ${()=>{const{tokens:n}=g(),{multiSelect:t}=n;return[l`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,X=p.div`
  ${({$isSelected:n,$isHighlighted:t})=>{const{tokens:o}=g(),{multiSelect:e}=o;return[l`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: ${e.menu.option.inner.gap};
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.paddingTop};
        padding-bottom: ${e.menu.option.inner.paddingBottom};
        padding-left: ${e.menu.option.inner.paddingLeft};
        padding-right: ${e.menu.option.inner.paddingRight};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
      `,n&&l`
          background: ${e.menu.option.inner.backgroundColor.active};
        `,t&&l`
          background: ${e.menu.option.inner.backgroundColor.hover};
        `]}}
`;function Y(n){return n?n.title:""}function J(n,t){const{changes:o,type:e}=t;switch(e){case h.stateChangeTypes.ToggleButtonKeyDownEnter:case h.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case h.stateChangeTypes.ItemClick:return{...o,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return o}}function Q(n,t){var o;return n.length===t.length?"All":t.length===1?(o=t[0])==null?void 0:o.title:t.length>1?`${t.length} items selected`:"None"}function $(n){const{labelProps:t,heading:o,selectedItems:e,onChange:a,alertProps:f,testID:x="multi-select",...y}=n,{items:T}=y,{tokens:_}=g(),{multiSelect:s}=_,{getLabelProps:E,getToggleButtonProps:L,getMenuProps:O,isOpen:M,getItemProps:W,highlightedIndex:w}=h({items:T,itemToString:Y,selectedItem:null,stateReducer:J,onSelectedItemChange:({selectedItem:c})=>{if(!c)return;const i=e.indexOf(c);i>0?a([...e.slice(0,i),...e.slice(i+1)]):a(i===0?[...e.slice(1)]:[...e,c])}});return r.jsx(R,{alert:f?r.jsx(K,{...f,testID:`${x}-alert`}):void 0,children:r.jsx(V,{...t,...E(),children:r.jsx(A,{...y,getToggleButtonProps:L,getMenuProps:O,isOpen:M,renderButtonContent:()=>r.jsxs(N,{children:[r.jsx(z,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:s.button.headingText.fontFamily,variant:s.button.headingText.typographyVariant,noWrap:!0,children:o})}),r.jsx(G,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:s.button.selectedText.fontFamily,variant:s.button.selectedText.typographyVariant,noWrap:!0,children:Q(T,e)})})]}),renderListItem:(c,i,v)=>{const m=e.includes(i),S=w===v;return r.jsx(U,{...W({key:i.id,ref:c,item:i,index:v,"aria-selected":m}),"data-hovered":S||void 0,children:r.jsxs(X,{$isSelected:m,$isHighlighted:S,children:[r.jsx(q,{inert:"",value:i.title,checked:m,onChange:()=>null}),r.jsx(b,{component:"div",color:"inherit",title:i.title,fontFamily:s.menu.option.inner.text.fontFamily,variant:s.menu.option.inner.text.typographyVariant,noWrap:!0,children:i.title})]})})},maxListHeight:D,testID:x})})})}const{useArgs:Z}=__STORYBOOK_MODULE_CLIENT_API__,ee={title:"Inputs/MultiSelect",component:$,render:function(t){const[,o]=Z();function e(a){o({selectedItems:a}),H("onChange")(a)}return r.jsx("div",{style:{height:400},children:r.jsx($,{...t,onChange:e})})},argTypes:{heading:{type:"string"},hasError:{type:"boolean"}},args:{heading:"Heading",items:F,selectedItems:[],hasError:!1}},d={args:{labelProps:{"aria-label":"Label"}}},u={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var C,j,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var I,B,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const te=["Basic","WithError"],ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,WithError:u,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as B,ce as M,u as W};
