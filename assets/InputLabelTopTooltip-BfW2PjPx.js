import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{b as p,T as u,a as c,c as y}from"./TooltipTrigger-Bn78i0XI.js";import{a as d,T as h}from"./index-BrtwDHqb.js";import{a as g,u as T,b as v,p as I}from"./index-CzvSJj6w.js";const V=g.div`
  ${({$variant:t,$typographyVariant:r})=>{const{tokens:e}=T(),{iconButton:o,typography:n,spacing:i}=e;return v`
      width: ${o.inner.icon.width[t]};
      height: ${I(n.lineHeight[r])};
      margin-left: ${i.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,s=l.forwardRef((t,r)=>{const{variant:e=d.DEFAULT_VARIANT,typographyVariant:o=h.DEFAULT_VARIANT,...n}=t;return a.jsx(V,{$variant:e,$typographyVariant:o,children:a.jsx(p,{ref:r,variant:e,...n})})});p.displayName="InlineTooltipIconButton";s.__docgenInfo={description:"",methods:[],displayName:"InlineTooltipIconButton"};function C(t){const{iconButtonProps:r,otherIconButtonProps:e,contentProps:o}=t,[n,i]=l.useState(!1);function m(){i(!n)}return a.jsxs(u,{open:n,onOpenChange:i,children:[a.jsx(c,{children:a.jsx(s,{...r,...e,onClick:m})}),a.jsx(y,{...o})]})}C.__docgenInfo={description:"",methods:[],displayName:"InputLabelTopTooltip",props:{iconButtonProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
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
>`},description:""},otherIconButtonProps:{required:!0,tsType:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
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
>`},description:""},contentProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},description:""}}};export{C as I,s as a};
