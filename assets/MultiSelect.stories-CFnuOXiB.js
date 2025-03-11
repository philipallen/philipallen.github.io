import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as E}from"./index-Cnk2rnxF.js";import{S as F}from"./index-BrtwDHqb.js";import{r as x}from"./index-DH5ua8nC.js";import{u as g,M}from"./Select.constants-zwiRAwGS.js";import{a as p,u as l,b as i,p as z}from"./index-CzvSJj6w.js";import{I as K}from"./InputWrapper-C7of_464.js";import{I as G}from"./InlineAlert-D3r_vEqv.js";import{I as U}from"./InputLabelTop-C-3-u6fK.js";import{S as X}from"./SelectBase-fhqRzdAD.js";import{T as y}from"./Typography-RMDmhaRB.js";import{C as Y}from"./CheckboxBase-Bg6oUyk6.js";import{b as J}from"./AlertAssociationProps-C5Idu2_l.js";const Q=p.div`
  ${()=>{const{tokens:n}=l(),{spacing:e}=n;return i`
      padding-top: ${e.s12};
      padding-bottom: ${e.s12};
      overflow: hidden;
    `}}
`,Z=p.div`
  ${()=>{const{tokens:n}=l(),{multiSelect:e}=n;return i`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,ee=p.div`
  ${()=>{const{tokens:n}=l(),{multiSelect:e}=n;return i`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,ne=p.li`
  ${()=>{const{tokens:n}=l(),{multiSelect:e}=n;return[i`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${e.menu.option.minHeight};
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,te=p.div`
  ${({$isSelected:n,$isHighlighted:e})=>{const{tokens:r}=l(),{multiSelect:t}=r;return[i`
        display: grid;
        align-items: center;
        color: ${t.menu.option.inner.color.base};
        padding-top: ${t.menu.option.inner.padding.top};
        padding-left: ${t.menu.option.inner.padding.left};
        padding-right: ${t.menu.option.inner.padding.right};
        padding-bottom: ${t.menu.option.inner.padding.bottom};
        border-radius: ${t.menu.option.inner.radius};
        background: ${t.menu.option.inner.backgroundColor.base};
      `,n&&i`
          background: ${t.menu.option.inner.backgroundColor.active};
        `,e&&i`
          background: ${t.menu.option.inner.backgroundColor.hover};
        `]}}
`,ae=p.div`
  ${()=>{const{tokens:n}=l(),{multiSelect:e}=n;return[i`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,re=p.div`
  ${()=>{const{tokens:n}=l(),{multiSelect:e}=n;return[i`
        display: grid;
        place-items: center;
        height: ${z(e.menu.option.inner.checkboxWrapper.height)};
      `]}}
`;function oe(n){return n?n.title:""}function ie(n,e){const{changes:r,type:t}=e;switch(t){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...r,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return r}}function le(n,e){var r;return n.length===e.length?"All":e.length===1?(r=e[0])==null?void 0:r.title:e.length>1?`${e.length} items selected`:"None"}function v(n){const{labelProps:e,heading:r,selectedItems:t,onChange:u,alertProps:b,testID:P="multi-select",...T}=n,{items:I}=T,{tokens:j}=l(),{multiSelect:m}=j,{getLabelProps:S,getToggleButtonProps:N,getMenuProps:$,isOpen:D,getItemProps:H,highlightedIndex:L}=g({items:I,itemToString:oe,selectedItem:null,stateReducer:ie,onSelectedItemChange:({selectedItem:o})=>{if(!o)return;const s=t.indexOf(o);s>0?u([...t.slice(0,s),...t.slice(s+1)]):u(s===0?[...t.slice(1)]:[...t,o])}}),f=x.useId(),{labelHint:_}=e,C=_?f:void 0,k=x.useId(),A=J(k,n,C);return a.jsx(K,{alert:b?a.jsx(G,{id:k,...b,testID:`${P}-alert`}):void 0,children:a.jsx(U,{...e,...S(),labelHintID:f,children:a.jsx(X,{...T,toggleButtonProps:{"aria-describedby":C},getToggleButtonProps:N,getMenuProps:$,isOpen:D,renderButtonContent:()=>a.jsxs(Q,{children:[a.jsx(Z,{children:a.jsx(y,{component:"div",color:"inherit",variant:m.button.headingText.typography.variant,fontFamily:m.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),a.jsx(ee,{children:a.jsx(y,{component:"div",color:"inherit",variant:m.button.selectedText.typography.variant,fontFamily:m.button.selectedText.typography.fontFamily,noWrap:!0,children:le(I,t)})})]}),renderListItem:(o,s)=>{const h=t.includes(o),w=L===s;return a.jsx(ne,{...H({item:o,index:s,"aria-selected":h}),"data-hovered":w||void 0,children:a.jsx(te,{$isSelected:h,$isHighlighted:w,children:a.jsxs(ae,{children:[a.jsx(re,{children:a.jsx(Y,{inert:"",value:o.title,checked:h,onChange:()=>null})}),a.jsx(y,{component:"div",color:"inherit",title:o.title,variant:m.menu.option.inner.text.typography.variant,fontFamily:m.menu.option.inner.text.typography.fontFamily,children:o.title})]})})},o.id)},maxListHeight:M,testID:P,alertAssociationProps:A})})})}v.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  htmlFor: string;
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: TooltipProps;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: TooltipProps;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "id" | "htmlFor" | "onClick" | "labelHintID" | "children"
>`},description:""},heading:{required:!0,tsType:{name:"string"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};const{useArgs:se}=__STORYBOOK_MODULE_PREVIEW_API__,pe={title:"Components/Inputs/MultiSelect",component:v,render:function(e){const[,r]=se();function t(u){e.onChange(u),r({selectedItems:u})}return a.jsx("div",{style:{height:400},children:a.jsx(v,{...e,onChange:t})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:F.mockItems,selectedItems:[],onChange:E(),hasError:!1,isDisabled:!1}},c={args:{labelProps:{"aria-label":"Label"}}},d={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var B,V,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var W,R,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ue=["Basic","WithError"],ke=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,WithError:d,__namedExportsOrder:ue,default:pe},Symbol.toStringTag,{value:"Module"}));export{c as B,ke as M,d as W};
