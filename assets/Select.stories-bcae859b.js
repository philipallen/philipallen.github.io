import{a as g,u as p,b as s,j as t}from"./index-74fe31d7.js";import{a as G}from"./index-583b5bb5.js";import{u as K,S as N,M as U,m as X}from"./Select.mocks-e3244786.js";import{T as Y}from"./index-40416c04.js";import{I as J,a as Q}from"./InputAlert-aec6a2b5.js";import{I as Z}from"./InputLabelTop-9f3f61cf.js";import{T as I}from"./Typography-5c86d7b4.js";const ee=g.div`
  ${({$isDisabled:o,$hasSelectedItem:r})=>{const{tokens:n}=p(),{select:e}=n;return[s`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,o&&s`
          color: ${e.button.placeholder.color.disabled};
        `,r&&s`
          color: ${e.button.text.color.base};
        `,o&&r&&s`
          color: ${e.button.text.color.disabled};
        `]}}
`,oe=g.li`
  ${()=>{const{tokens:o}=p(),{select:r}=o;return[s`
        all: unset;
        display: grid;
        padding: ${r.menu.option.padding};
        background: ${r.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,re=g.div`
  ${({$isSelected:o,$isHighlighted:r})=>{const{tokens:n}=p(),{select:e}=n;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.paddingTop};
        padding-bottom: ${e.menu.option.inner.paddingBottom};
        padding-left: ${e.menu.option.inner.paddingLeft};
        padding-right: ${e.menu.option.inner.paddingRight};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
        outline-width: ${e.menu.option.inner.stroke.width};
        outline-style: ${e.menu.option.inner.stroke.style};
        outline-color: ${e.menu.option.inner.stroke.color.base};
        outline-offset: ${e.menu.option.inner.stroke.offset};
      `,o&&s`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,r&&s`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,te=g(Y)`
  ${({$isSelected:o})=>{const{tokens:r}=p(),{select:n}=r;return[s`
        visibility: ${o?"visible":"hidden"};
        width: ${n.menu.option.inner.icon.width};
        height: ${n.menu.option.inner.icon.height};
      `]}}
`;function ne(o){return o?o.title:""}function v(o){const{labelProps:r,placeholder:n="Select",selectedItem:e,onChange:u,alertProps:h,testID:$="select",...f}=o,{isDisabled:w,items:A}=f,{tokens:H}=p(),{select:m}=H,{getLabelProps:M,getToggleButtonProps:F,getMenuProps:R,isOpen:q,getItemProps:V,highlightedIndex:z}=K({items:A,selectedItem:e,itemToString:ne,onSelectedItemChange:({selectedItem:b})=>u(b)});return t.jsx(J,{alert:h?t.jsx(Q,{...h,testID:`${$}-alert`}):void 0,children:t.jsx(Z,{...r,...M(),children:t.jsx(N,{...f,getToggleButtonProps:F,getMenuProps:R,isOpen:q,renderButtonContent:()=>t.jsx(ee,{$isDisabled:w,$hasSelectedItem:!!e,children:t.jsx(I,{component:"div",color:"inherit",fontFamily:m.button.text.fontFamily,variant:m.button.text.typographyVariant,noWrap:!0,children:e?e.title:n})}),renderListItem:(b,a,y)=>{const x=e===a,k=z===y;return t.jsx(oe,{...V({key:a.id,ref:b,item:a,index:y}),"data-hovered":k||void 0,children:t.jsxs(re,{$isSelected:x,$isHighlighted:k,children:[t.jsx(te,{$isSelected:x,"aria-hidden":"true"}),t.jsx(I,{component:"div",color:"inherit",title:a.title,fontFamily:m.menu.option.inner.text.fontFamily,variant:m.menu.option.inner.text.typographyVariant,noWrap:!0,children:a.title})]})})},maxListHeight:U,testID:$})})})}const{useArgs:se}=__STORYBOOK_MODULE_CLIENT_API__,ae={title:"Inputs/Select",component:v,render:function(r){const[,n]=se();function e(u){n({selectedItem:u}),G("onChange")(u)}return t.jsx("div",{style:{height:400},children:t.jsx(v,{...r,onChange:e})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{items:X,hasError:!1,isDisabled:!1}},i={args:{labelProps:{"aria-label":"Label"}}},l={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},c={args:{labelProps:{label:"Label"}}},d={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var S,L,P;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var j,T,_;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,C,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,W,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ie=["Basic","Disabled","WithLabel","WithError"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:l,WithError:d,WithLabel:c,__namedExportsOrder:ie,default:ae},Symbol.toStringTag,{value:"Module"}));export{i as B,l as D,be as S,c as W,d as a};
