import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as P}from"./index-DH5ua8nC.js";import{u as $}from"./downshift.esm-BloPLloy.js";import{a as p,u as l,b as o}from"./index-CtBUti8q.js";import{S as H}from"./index-DKJt7waT.js";import{T as N}from"./index-Bkh50RYL.js";import{S as j,M as D}from"./SelectBase-Db26aECa.js";import{b as S,I as L}from"./AlertAssociationProps-x_hs0fx1.js";import{I as F}from"./InlineAlert-uKr_Jbz9.js";import{I as A}from"./InputLabelTop-CsiLVEXO.js";import{T as I}from"./Typography-v4_88_aK.js";const E=p.div`
  ${({$isDisabled:t,$hasSelectedItem:n})=>{const{tokens:r}=l(),{select:e}=r;return[o`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,t&&o`
          color: ${e.button.placeholder.color.disabled};
        `,n&&o`
          color: ${e.button.text.color.base};
        `,t&&n&&o`
          color: ${e.button.text.color.disabled};
        `]}}
`,_=p.li`
  ${()=>{const{tokens:t}=l(),{select:n}=t;return[o`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,X=p.div`
  ${({$isSelected:t,$isHighlighted:n})=>{const{tokens:r}=l(),{select:e}=r;return[o`
        display: grid;
        align-items: center;
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
      `,t&&o`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&o`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,J=p(N)`
  ${({$isSelected:t})=>{const{tokens:n}=l(),{select:r}=n;return[o`
        visibility: ${t?"visible":"hidden"};
        width: ${r.menu.option.inner.icon.width};
        height: ${r.menu.option.inner.icon.height};
        color: ${r.menu.option.inner.icon.color};
      `]}}
`;function M(t){const{labelProps:n,placeholder:r="Select",selectedItem:e,onChange:T,alertProps:m,testID:u="select",...c}=t,{isDisabled:k,items:f}=c,{tokens:w}=l(),{select:s}=w,{getLabelProps:C,getToggleButtonProps:B,getMenuProps:V,isOpen:x,getItemProps:O,highlightedIndex:R}=$({items:f,selectedItem:e,itemToString:H.itemToString,onSelectedItemChange:({selectedItem:i})=>T(i)}),d=P.useId(),{labelHint:q}=n,y=q?d:void 0,h=P.useId(),W=S(h,t,y);return a.jsx(L,{alert:m?a.jsx(F,{id:h,...m,testID:`${u}-alert`}):void 0,children:a.jsx(A,{...n,...C(),labelHintID:d,children:a.jsx(j,{...c,toggleButtonProps:{"aria-describedby":y},getToggleButtonProps:B,getMenuProps:V,isOpen:x,renderButtonContent:()=>a.jsx(E,{$isDisabled:k,$hasSelectedItem:!!e,children:a.jsx(I,{component:"div",color:"inherit",variant:s.button.text.typography.variant,fontFamily:s.button.text.typography.fontFamily,noWrap:!0,children:e?e.title:r})}),renderListItem:(i,g)=>{const b=e===i,v=R===g;return a.jsx(_,{...O({item:i,index:g}),"data-hovered":v||void 0,children:a.jsxs(X,{$isSelected:b,$isHighlighted:v,children:[a.jsx(J,{$isSelected:b,"aria-hidden":"true"}),a.jsx(I,{component:"div",color:"inherit",title:i.title,variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:i.title})]})},i.id)},maxListHeight:D,testID:u,alertAssociationProps:W})})})}M.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};export{M as S};
