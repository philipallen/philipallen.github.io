import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as I}from"./index-DH5ua8nC.js";import{u as q,M as N}from"./Select.constants-zwiRAwGS.js";import{a as l,u as i,b as r,p as j}from"./index-CzvSJj6w.js";import{S as D}from"./index-BrtwDHqb.js";import{T as H}from"./index-BYwLR37K.js";import{I as S}from"./InputWrapper-C7of_464.js";import{I as F}from"./InlineAlert-D3r_vEqv.js";import{I as L}from"./InputLabelTop-DhzWCL3B.js";import{S as A}from"./SelectBase-fhqRzdAD.js";import{T as P}from"./Typography-RMDmhaRB.js";import{b as _}from"./AlertAssociationProps-C5Idu2_l.js";const E=l.div`
  ${({$isDisabled:t,$hasSelectedItem:n})=>{const{tokens:s}=i(),{select:e}=s;return[r`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,t&&r`
          color: ${e.button.placeholder.color.disabled};
        `,n&&r`
          color: ${e.button.text.color.base};
        `,t&&n&&r`
          color: ${e.button.text.color.disabled};
        `]}}
`,M=l.li`
  ${()=>{const{tokens:t}=i(),{select:n}=t;return[r`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${n.menu.option.minHeight};
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,z=l.div`
  ${({$isSelected:t,$isHighlighted:n})=>{const{tokens:s}=i(),{select:e}=s;return[r`
        display: grid;
        align-items: center;
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.padding.top};
        padding-left: ${e.menu.option.inner.padding.left};
        padding-right: ${e.menu.option.inner.padding.right};
        padding-bottom: ${e.menu.option.inner.padding.bottom};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
        outline-width: ${e.menu.option.inner.stroke.width};
        outline-style: ${e.menu.option.inner.stroke.style};
        outline-color: ${e.menu.option.inner.stroke.color.base};
        outline-offset: ${e.menu.option.inner.stroke.offset};
      `,t&&r`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&r`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,G=l.div`
  ${()=>{const{tokens:t}=i(),{select:n}=t;return[r`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${n.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `]}}
`,X=l.div`
  ${()=>{const{tokens:t}=i(),{select:n}=t;return[r`
        display: grid;
        place-items: center;
        width: ${n.menu.option.inner.tickIconWrapper.width};
        height: ${j(n.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,J=l(H)`
  ${()=>{const{tokens:t}=i(),{select:n}=t;return[r`
        width: ${n.menu.option.inner.tickIcon.width};
        height: ${n.menu.option.inner.tickIcon.height};
        color: ${n.menu.option.inner.tickIcon.color};
      `]}}
`;function K(t){const{labelProps:n,placeholder:s="Select",selectedItem:e,onChange:T,alertProps:m,testID:u="select",...c}=t,{isDisabled:k,items:f}=c,{tokens:w}=i(),{select:p}=w,{getLabelProps:C,getToggleButtonProps:V,getMenuProps:x,isOpen:B,getItemProps:O,highlightedIndex:R}=q({items:f,selectedItem:e,itemToString:D.itemToString,onSelectedItemChange:({selectedItem:o})=>T(o)}),d=I.useId(),{labelHint:W}=n,y=W?d:void 0,h=I.useId(),$=_(h,t,y);return a.jsx(S,{alert:m?a.jsx(F,{id:h,...m,testID:`${u}-alert`}):void 0,children:a.jsx(L,{...n,...C(),labelHintID:d,children:a.jsx(A,{...c,toggleButtonProps:{"aria-describedby":y},getToggleButtonProps:V,getMenuProps:x,isOpen:B,renderButtonContent:()=>a.jsx(E,{$isDisabled:k,$hasSelectedItem:!!e,children:a.jsx(P,{component:"div",color:"inherit",variant:p.button.text.typography.variant,fontFamily:p.button.text.typography.fontFamily,noWrap:!0,children:e?e.title:s})}),renderListItem:(o,g)=>{const v=e===o,b=R===g;return a.jsx(M,{...O({item:o,index:g}),"data-hovered":b||void 0,children:a.jsx(z,{$isSelected:v,$isHighlighted:b,children:a.jsxs(G,{children:[a.jsx(X,{children:v&&a.jsx(J,{"aria-hidden":"true"})}),a.jsx(P,{component:"div",color:"inherit",title:o.title,variant:p.menu.option.inner.text.typography.variant,fontFamily:p.menu.option.inner.text.typography.fontFamily,children:o.title})]})})},o.id)},maxListHeight:N,testID:u,alertAssociationProps:$})})})}K.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};export{K as S};
