import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as A}from"./index-Cnk2rnxF.js";import{S as F}from"./index-DKJt7waT.js";import{r as B}from"./index-DH5ua8nC.js";import{u as g}from"./downshift.esm-BloPLloy.js";import{a as c,u as d,b as p}from"./index-CtBUti8q.js";import{S as M,M as X}from"./SelectBase-Db26aECa.js";import{b as J,I as K}from"./AlertAssociationProps-x_hs0fx1.js";import{I as z}from"./InlineAlert-uKr_Jbz9.js";import{I as G}from"./InputLabelTop-CsiLVEXO.js";import{T as y}from"./Typography-v4_88_aK.js";import{C as U}from"./CheckboxBase-Y77fwqSo.js";const Y=c.div`
  overflow: hidden;
`,Q=c.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:e}=t;return p`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,Z=c.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:e}=t;return p`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,ee=c.li`
  ${()=>{const{tokens:t}=d(),{multiSelect:e}=t;return[p`
        all: unset;
        display: grid;
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,ne=c.div`
  ${({$isSelected:t,$isHighlighted:e})=>{const{tokens:r}=d(),{multiSelect:n}=r;return[p`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${n.menu.option.inner.gap};
        color: ${n.menu.option.inner.color.base};
        padding-top: ${n.menu.option.inner.paddingTop};
        padding-bottom: ${n.menu.option.inner.paddingBottom};
        padding-left: ${n.menu.option.inner.paddingLeft};
        padding-right: ${n.menu.option.inner.paddingRight};
        border-radius: ${n.menu.option.inner.radius};
        background: ${n.menu.option.inner.backgroundColor.base};
      `,t&&p`
          background: ${n.menu.option.inner.backgroundColor.active};
        `,e&&p`
          background: ${n.menu.option.inner.backgroundColor.hover};
        `]}}
`;function te(t){return t?t.title:""}function ae(t,e){const{changes:r,type:n}=e;switch(n){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...r,isOpen:!0,highlightedIndex:t.highlightedIndex};default:return r}}function re(t,e){var r;return t.length===e.length?"All":e.length===1?(r=e[0])==null?void 0:r.title:e.length>1?`${e.length} items selected`:"None"}function b(t){const{labelProps:e,heading:r,selectedItems:n,onChange:l,alertProps:v,testID:P="multi-select",...T}=t,{items:I}=T,{tokens:j}=d(),{multiSelect:s}=j,{getLabelProps:H,getToggleButtonProps:S,getMenuProps:D,isOpen:N,getItemProps:L,highlightedIndex:E}=g({items:I,itemToString:te,selectedItem:null,stateReducer:ae,onSelectedItemChange:({selectedItem:o})=>{if(!o)return;const i=n.indexOf(o);i>0?l([...n.slice(0,i),...n.slice(i+1)]):l(i===0?[...n.slice(1)]:[...n,o])}}),f=B.useId(),{labelHint:$}=e,C=$?f:void 0,k=B.useId(),_=J(k,t,C);return a.jsx(K,{alert:v?a.jsx(z,{id:k,...v,testID:`${P}-alert`}):void 0,children:a.jsx(G,{...e,...H(),labelHintID:f,children:a.jsx(M,{...T,toggleButtonProps:{"aria-describedby":C},getToggleButtonProps:S,getMenuProps:D,isOpen:N,renderButtonContent:()=>a.jsxs(Y,{children:[a.jsx(Q,{children:a.jsx(y,{component:"div",color:"inherit",variant:s.button.headingText.typography.variant,fontFamily:s.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),a.jsx(Z,{children:a.jsx(y,{component:"div",color:"inherit",variant:s.button.selectedText.typography.variant,fontFamily:s.button.selectedText.typography.fontFamily,noWrap:!0,children:re(I,n)})})]}),renderListItem:(o,i)=>{const h=n.includes(o),w=E===i;return a.jsx(ee,{...L({item:o,index:i,"aria-selected":h}),"data-hovered":w||void 0,children:a.jsxs(ne,{$isSelected:h,$isHighlighted:w,children:[a.jsx(U,{inert:"",value:o.title,checked:h,onChange:()=>null}),a.jsx(y,{component:"div",color:"inherit",title:o.title,variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:o.title})]})},o.id)},maxListHeight:X,testID:P,alertAssociationProps:_})})})}b.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
} & Pick<
    InputLabelTopBaseProps,
    "labelHint" | "labelHintID" | "labelHintTooltipProps"
  > & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID" | "labelHintTooltipProps"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"labelHintTooltipProps"'}]}],raw:`Pick<
  InputLabelTopBaseProps,
  "labelHint" | "labelHintID" | "labelHintTooltipProps"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
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
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};const{useArgs:oe}=__STORYBOOK_MODULE_PREVIEW_API__,ie={title:"Components/Inputs/MultiSelect",component:b,render:function(e){const[,r]=oe();function n(l){e.onChange(l),r({selectedItems:l})}return a.jsx("div",{style:{height:400},children:a.jsx(b,{...e,onChange:n})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:F.mockItems,selectedItems:[],onChange:A(),hasError:!1,isDisabled:!1}},u={args:{labelProps:{"aria-label":"Label"}}},m={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var x,V,O;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(O=(V=u.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var R,W,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const le=["Basic","WithError"],Te=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,WithError:m,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{u as B,Te as M,m as W};
