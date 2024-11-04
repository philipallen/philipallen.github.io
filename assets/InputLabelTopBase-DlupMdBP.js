import{j as t}from"./jsx-runtime-DQ32znRX.js";import{a as u,u as p,b as m,p as I}from"./index-C-LSVLXB.js";import{T as c}from"./Typography-DPnR7vBA.js";import{r as y}from"./index-DH5ua8nC.js";import{b as h,T as b,a as P,c as V}from"./TooltipTrigger-B4AXIaMu.js";import{b as f,T as C}from"./index-C3m9D1_L.js";const w=u.div`
  ${({$labelText:o})=>{const{tokens:n}=p(),{inputLabelTop:e}=n;return[m`
        width: 100%;
        display: grid;
      `,o&&m`
          gap: ${e.gap};
        `]}}
`,B=u.div`
  ${({$variant:o,$typographyVariant:n})=>{const{tokens:e}=p(),{iconButton:r,typography:i,spacing:a}=e;return m`
      width: ${r.inner.icon.width[o]};
      height: ${I(i.lineHeight[n])};
      margin-left: ${a.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,d=y.forwardRef((o,n)=>{const{variant:e=f.DEFAULT_VARIANT,typographyVariant:r=C.DEFAULT_VARIANT,...i}=o;return t.jsx(B,{$variant:e,$typographyVariant:r,children:t.jsx(h,{ref:n,variant:e,...i})})});h.displayName="InlineTooltipIconButton";d.__docgenInfo={description:"",methods:[],displayName:"InlineTooltipIconButton"};function g(o){const{iconButtonProps:n,otherIconButtonProps:e,contentProps:r}=o,[i,a]=y.useState(!1);function s(){a(!i)}return t.jsxs(b,{open:i,onOpenChange:a,children:[t.jsx(P,{children:t.jsx(d,{...n,...e,onClick:s})}),t.jsx(V,{...r})]})}g.__docgenInfo={description:"",methods:[],displayName:"InputLabelTopBaseTooltip",props:{iconButtonProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
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
>`},description:""},otherIconButtonProps:{required:!0,tsType:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
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
>`},description:""},contentProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},description:""}}};function T(o){const{labelElement:n,labelText:e,labelHint:r,labelHintID:i,labelHintTooltipProps:a,children:s}=o,{tokens:v}=p(),{inputLabelTop:l}=v;return t.jsxs(w,{$labelText:e,children:[t.jsxs("div",{children:[n,r&&t.jsxs(c,{id:i,component:"div",color:l.labelHint.color.base,variant:l.labelHint.typography.variant,fontFamily:l.labelHint.typography.fontFamily,children:[r,a&&t.jsx(g,{...a,otherIconButtonProps:{variant:"default20",typographyVariant:l.labelHint.typography.variant}})]})]}),t.jsx("div",{children:s})]})}T.Label=function(n){const{text:e,component:r="span"}=n,{tokens:i}=p(),{inputLabelTop:a}=i;return t.jsx(c,{component:r,color:a.label.color.base,variant:a.label.typography.variant,fontFamily:a.label.typography.fontFamily,children:e})};T.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  text: string;
  component?: ElementType;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"component",value:{name:"ElementType",required:!1}}]},alias:"InputLabelTopBaseLabelProps"}}],returns:null}],displayName:"InputLabelTopBase",props:{labelElement:{required:!0,tsType:{name:"JSX.Element"},description:""},labelText:{required:!1,tsType:{name:"string"},description:""},labelHint:{required:!1,tsType:{name:"string"},description:""},labelHintID:{required:!1,tsType:{name:"string"},description:""},labelHintTooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};export{T as I,g as a};
