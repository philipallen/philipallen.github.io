import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as E}from"./index-Cnk2rnxF.js";import{S as L}from"./index-C3m9D1_L.js";import{r as $}from"./index-DH5ua8nC.js";import{u as h,S as _,M as F}from"./SelectBase-CSBg8IDD.js";import{a as c,u as d,b as p}from"./index-C-LSVLXB.js";import{I as A}from"./InputWrapper-BBNW5EV4.js";import{I as M}from"./InlineAlert-ClCuOmc7.js";import{I as X}from"./InputLabelTop-66FkqMIr.js";import{T as g}from"./Typography-DPnR7vBA.js";import{C as J}from"./CheckboxBase-efhi1A2V.js";const K=c.div`
  overflow: hidden;
`,z=c.div`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return p`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,G=c.div`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return p`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,U=c.li`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return[p`
        all: unset;
        display: grid;
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,Y=c.div`
  ${({$isSelected:n,$isHighlighted:e})=>{const{tokens:r}=d(),{multiSelect:t}=r;return[p`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        color: ${t.menu.option.inner.color.base};
        padding-top: ${t.menu.option.inner.paddingTop};
        padding-bottom: ${t.menu.option.inner.paddingBottom};
        padding-left: ${t.menu.option.inner.paddingLeft};
        padding-right: ${t.menu.option.inner.paddingRight};
        border-radius: ${t.menu.option.inner.radius};
        background: ${t.menu.option.inner.backgroundColor.base};
      `,n&&p`
          background: ${t.menu.option.inner.backgroundColor.active};
        `,e&&p`
          background: ${t.menu.option.inner.backgroundColor.hover};
        `]}}
`;function Q(n){return n?n.title:""}function Z(n,e){const{changes:r,type:t}=e;switch(t){case h.stateChangeTypes.ToggleButtonKeyDownEnter:case h.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case h.stateChangeTypes.ItemClick:return{...r,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return r}}function ee(n,e){var r;return n.length===e.length?"All":e.length===1?(r=e[0])==null?void 0:r.title:e.length>1?`${e.length} items selected`:"None"}function b(n){const{labelProps:e,heading:r,selectedItems:t,onChange:l,alertProps:v,testID:P="multi-select",...T}=n,{items:I}=T,{tokens:R}=d(),{multiSelect:s}=R,{getLabelProps:W,getToggleButtonProps:j,getMenuProps:q,isOpen:H,getItemProps:S,highlightedIndex:N}=h({items:I,itemToString:Q,selectedItem:null,stateReducer:Z,onSelectedItemChange:({selectedItem:o})=>{if(!o)return;const i=t.indexOf(o);i>0?l([...t.slice(0,i),...t.slice(i+1)]):l(i===0?[...t.slice(1)]:[...t,o])}}),f=$.useId(),{labelHint:D}=e;return a.jsx(A,{alert:v?a.jsx(M,{...v,testID:`${P}-alert`}):void 0,children:a.jsx(X,{...e,...W(),labelHintID:f,children:a.jsx(_,{...T,toggleButtonProps:{"aria-describedby":D?f:void 0},getToggleButtonProps:j,getMenuProps:q,isOpen:H,renderButtonContent:()=>a.jsxs(K,{children:[a.jsx(z,{children:a.jsx(g,{component:"div",color:"inherit",variant:s.button.headingText.typography.variant,fontFamily:s.button.headingText.typography.fontFamily,noWrap:!0,children:r})}),a.jsx(G,{children:a.jsx(g,{component:"div",color:"inherit",variant:s.button.selectedText.typography.variant,fontFamily:s.button.selectedText.typography.fontFamily,noWrap:!0,children:ee(I,t)})})]}),renderListItem:(o,i)=>{const y=t.includes(o),C=N===i;return a.jsx(U,{...S({item:o,index:i,"aria-selected":y}),"data-hovered":C||void 0,children:a.jsxs(Y,{$isSelected:y,$isHighlighted:C,children:[a.jsx(J,{inert:"",value:o.title,checked:y,onChange:()=>null}),a.jsx(g,{component:"div",color:"inherit",title:o.title,variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:o.title})]})},o.id)},maxListHeight:F,testID:P})})})}b.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
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
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:te}=__STORYBOOK_MODULE_PREVIEW_API__,ne={title:"Components/Inputs/MultiSelect",component:b,render:function(e){const[,r]=te();function t(l){e.onChange(l),r({selectedItems:l})}return a.jsx("div",{style:{height:400},children:a.jsx(b,{...e,onChange:t})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:L.mockItems,selectedItems:[],onChange:E(),hasError:!1,isDisabled:!1}},u={args:{labelProps:{"aria-label":"Label"}}},m={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var w,B,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var V,O,x;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(x=(O=m.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const ae=["Basic","WithError"],ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,WithError:m,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"}));export{u as B,ye as M,m as W};
