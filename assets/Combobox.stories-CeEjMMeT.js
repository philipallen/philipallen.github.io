import{j as r}from"./jsx-runtime-DQ32znRX.js";import{f as z}from"./index-Cnk2rnxF.js";import{r as P}from"./index-DH5ua8nC.js";import{a as ye,M as fe}from"./Select.constants-zwiRAwGS.js";import{a as l,u as p,b as s,p as de}from"./index-CzvSJj6w.js";import{o as ve}from"./index-BrtwDHqb.js";import{T as Pe,b as Ie,k as we,l as ke,m as Ce,n as Te,o as $e,p as xe}from"./index-BYwLR37K.js";import{C as Ve}from"./TextInput.styled-D6gbZfr2.js";import{I as Re}from"./InputWrapper-C7of_464.js";import{I as Be}from"./InlineAlert-D3r_vEqv.js";import{I as Oe}from"./InputLabelTop-D3Ny7VWY.js";import{c as We,d as je,o as qe,f as Le,m as He,F as Se}from"./floating-ui.react-Bc49jMsR.js";import{r as De}from"./index-D9uilScg.js";import{u as Ne}from"./OverlayContext-0eIRNS6h.js";import{S as _e}from"./ScrollShadowContainer-5PBttQuR.js";import{T as Ae}from"./Typography-RMDmhaRB.js";import{b as Ee}from"./AlertAssociationProps-C5Idu2_l.js";const Fe=l(Ve)`
  &:disabled {
    cursor: not-allowed;
  }
`,Me=l.li`
  ${({$withSeparator:o})=>{const{tokens:e}=p(),{select:t}=e;return[s`
        all: unset;
        box-sizing: border-box;
        display: grid;
        min-height: ${t.menu.option.minHeight};
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `,o&&s`
          border-bottom-style: 2px;
          border-bottom-style: ${t.menu.separator.style};
          border-bottom-color: ${t.menu.separator.color};
        `]}}
`,ze=l.div`
  ${({$isSelected:o,$isHighlighted:e})=>{const{tokens:t}=p(),{select:a}=t;return[s`
        display: grid;
        align-items: center;
        color: ${a.menu.option.inner.color.base};
        padding-top: ${a.menu.option.inner.padding.top};
        padding-left: ${a.menu.option.inner.padding.left};
        padding-right: ${a.menu.option.inner.padding.right};
        padding-bottom: ${a.menu.option.inner.padding.bottom};
        border-radius: ${a.menu.option.inner.radius};
        background: ${a.menu.option.inner.backgroundColor.base};
        outline-width: ${a.menu.option.inner.stroke.width};
        outline-style: ${a.menu.option.inner.stroke.style};
        outline-color: ${a.menu.option.inner.stroke.color.base};
        outline-offset: ${a.menu.option.inner.stroke.offset};
      `,o&&s`
          background: ${a.menu.option.inner.backgroundColor.active};
          outline-color: ${a.menu.option.inner.stroke.color.active};
        `,e&&s`
          background: ${a.menu.option.inner.backgroundColor.hover};
          outline-color: ${a.menu.option.inner.stroke.color.hover};
        `]}}
`,Xe=l.div`
  ${({$withIcon:o})=>{const{tokens:e}=p(),{select:t}=e;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${t.menu.option.inner.gap};
        overflow-wrap: anywhere;
      `,o&&s`
          grid-template-columns: auto auto 1fr;
        `]}}
`,Je=l.div`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return[s`
        display: grid;
        place-items: center;
        width: ${e.menu.option.inner.tickIconWrapper.width};
        height: ${de(e.menu.option.inner.tickIconWrapper.height)};
      `]}}
`,Ue=l(Pe)`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return[s`
        width: ${e.menu.option.inner.tickIcon.width};
        height: ${e.menu.option.inner.tickIcon.height};
        color: ${e.menu.option.inner.tickIcon.color};
      `]}}
`,Ge=l.div`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return[s`
        display: grid;
        place-items: center;
        margin-right: 4px;
        height: ${de(e.menu.option.inner.iconWrapper.height)};

        svg {
          width: ${e.menu.option.inner.icon.width};
          max-height: ${e.menu.option.inner.icon.maxHeight};
        }
      `]}}
`,Ke=l.div`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return[s`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${e.button.focusRing.radius};
          outline-width: ${e.button.focusRing.width};
          outline-style: ${e.button.focusRing.style};
          outline-color: ${e.button.focusRing.color};
          outline-offset: ${e.button.focusRing.offset};
        }
      `]}}
`,Ye=l.div`
  ${({$isOpen:o,$hasError:e,$isDisabled:t})=>{const{tokens:a}=p(),{select:n}=a;return[s`
        display: grid;
        min-height: ${n.button.minHeight};
        background: ${n.button.backgroundColor.base};
        padding-top: ${n.button.padding.top};
        padding-left: ${n.button.padding.left};
        padding-right: ${n.button.padding.right};
        padding-bottom: ${n.button.padding.bottom};
        border-radius: ${n.button.stroke.radius};
        outline-width: ${n.button.stroke.width.base};
        outline-style: ${n.button.stroke.style};
        outline-color: ${n.button.stroke.color.base};
        outline-offset: ${n.button.stroke.offset.base};

        svg {
          color: ${n.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${n.button.stroke.width.hover};
          outline-color: ${n.button.stroke.color.hover};
          outline-offset: ${n.button.stroke.offset.hover};

          svg {
            color: ${n.button.icon.color.hover};
          }
        }
      `,e&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.error};
            outline-color: ${n.button.stroke.color.error};
            outline-offset: ${n.button.stroke.offset.error};
          }
        `,o&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.active};
            outline-color: ${n.button.stroke.color.active};
            outline-offset: ${n.button.stroke.offset.active};

            svg {
              color: ${n.button.icon.color.active};
            }
          }
        `,t&&s`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${n.button.stroke.width.disabled};
            outline-color: ${n.button.stroke.color.disabled};
            outline-offset: ${n.button.stroke.offset.disabled};

            svg {
              color: ${n.button.icon.color.disabled};
            }
          }
        `]}}
`,Qe=l.div`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return s`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${e.button.gap};
    `}}
`,Ze=l.button`
  all: unset;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`,et=l.div`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${e.button.icon.width};
        height: ${e.button.icon.height};
      }
    `}}
`,he=l(Ie)`
  rotate: 0deg;
`,tt=l(he)`
  rotate: 180deg;
`,nt=l.div`
  ${({$isOpen:o})=>{const{tokens:e}=p(),{select:t}=e;return s`
      display: ${o?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${t.menu.radius};
      border-width: ${t.menu.stroke.width};
      border-style: ${t.menu.stroke.style};
      border-color: ${t.menu.stroke.color};
      box-shadow: 0px 2px 2px ${t.menu.shadow.outer.color};
      z-index: ${t.menu.zIndex};
    `}}
`,ot=l.ul`
  ${()=>{const{tokens:o}=p(),{select:e}=o;return s`
      all: unset;
      display: grid;
      gap: ${e.menu.separator.width};
      background: ${e.menu.separator.color};
    `}}
`;function rt(o){const{offsetValue:e}=o,[t,a]=P.useState(),{refs:n,floatingStyles:u}=We({placement:"bottom",whileElementsMounted:je,middleware:[qe(e),Le({padding:16}),He({padding:16,apply({rects:c,elements:y,availableHeight:h}){Object.assign(y.floating.style,{minWidth:`${c.reference.width}px`}),De.flushSync(()=>a(h))}})]});return{refs:n,floatingStyles:u,availableListHeight:t}}function ge(o){const{getToggleButtonProps:e,getMenuProps:t,isOpen:a,items:n,toggleButtonProps:u,renderHeaderContent:c,renderListItem:y,hasError:h,isDisabled:f,maxListHeight:g,alertAssociationProps:j,testID:m="combobox"}=o,{tokens:q}=p(),{select:L}=q,{refs:V,floatingStyles:R,availableListHeight:v}=rt({offsetValue:parseInt(L.gap,10)}),H={ref:V.setFloating},S={suppressRefError:!0},{ref:D,...N}=t(H,S),{portalElement:_}=Ne();let B=g;return v&&g&&v<g&&(B=v),r.jsxs(r.Fragment,{children:[r.jsx(Ke,{children:r.jsx(Ye,{ref:V.setReference,$isOpen:a,$hasError:h,$isDisabled:f,"data-testid":m,...j,children:r.jsxs(Qe,{children:[c(),r.jsx(Ze,{type:"button","aria-label":"Toggle",...u,...e({disabled:f}),children:r.jsx(et,{children:a?r.jsx(tt,{"aria-hidden":"true"}):r.jsx(he,{"aria-hidden":"true"})})})]})})}),r.jsx(Se,{root:_,children:r.jsx(nt,{ref:D,style:R,$isOpen:a&&n.length>0,children:r.jsx("div",{style:{maxHeight:B},children:r.jsx(_e,{children:r.jsx(ot,{...N,children:n.map((O,A)=>y(O,A))})})})})})]})}ge.__docgenInfo={description:"",methods:[],displayName:"ComboboxBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderHeaderContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""},alertAssociationProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"aria-invalid" | "aria-describedby"',elements:[{name:"literal",value:'"aria-invalid"'},{name:"literal",value:'"aria-describedby"'}]}],raw:`Pick<
  ComponentPropsWithRef<"input">,
  "aria-invalid" | "aria-describedby"
>`},description:""}}};function E(o){const{labelProps:e,placeholder:t="Select",items:a,selectedItem:n,onChange:u,inputValue:c,setInputValue:y,alertProps:h,testID:f="combobox",...g}=o,{isDisabled:j}=g,m=P.useMemo(()=>{let i=a;return c.length>0&&(i=i.filter(d=>{const b=d.title.toLowerCase(),W=c.trim().toLowerCase();return b.includes(W)})),i.sort((d,b)=>d.isPromoted===b.isPromoted?0:d.isPromoted?-1:1)},[a,c]),q=m.at(-1),L=P.useMemo(()=>m.filter(i=>i.isPromoted).at(-1),[m]),{tokens:V}=p(),{select:R}=V,{getLabelProps:v,getToggleButtonProps:H,getMenuProps:S,getInputProps:D,isOpen:N,getItemProps:_,highlightedIndex:B}=ye({onInputValueChange({inputValue:i}){y(i)},items:m,selectedItem:n,itemToString:ve.itemToString,onSelectedItemChange:({selectedItem:i})=>u(i)}),O=P.useId(),{labelHint:A}=e,F=A?O:void 0,M=P.useId(),be=Ee(M,o,F);return r.jsx(Re,{alert:h?r.jsx(Be,{id:M,...h,testID:`${f}-alert`}):void 0,children:r.jsx(Oe,{...e,...v(),labelHintID:O,children:r.jsx(ge,{...g,items:m,toggleButtonProps:{"aria-describedby":F},getToggleButtonProps:H,getMenuProps:S,isOpen:N,renderHeaderContent:()=>r.jsx(Fe,{disabled:j,placeholder:t,...D()}),renderListItem:(i,d)=>{const b=n===i,W=B===d;return r.jsx(Me,{$withSeparator:i!==q&&i===L,..._({item:i,index:d}),"data-hovered":W||void 0,children:r.jsx(ze,{$isSelected:b,$isHighlighted:W,children:r.jsxs(Xe,{$withIcon:i.icon!==void 0,children:[r.jsx(Je,{children:b&&r.jsx(Ue,{"aria-hidden":"true"})}),i.icon&&r.jsx(Ge,{children:i.icon}),r.jsx(Ae,{component:"div",color:"inherit",title:i.title,variant:R.menu.option.inner.text.typography.variant,fontFamily:R.menu.option.inner.text.typography.fontFamily,children:i.title})]})})},i.id)},maxListHeight:fe,testID:f,alertAssociationProps:be})})})}E.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};const at=Array.from({length:20},(o,e)=>{const t=`${e+1}`.padStart(2,"0");return{id:`item-${t}`,title:`Item ${t}`,value:t}}),it=Array.from({length:6},(o,e)=>{const t=`${e+1}`.padStart(2,"0"),a=[r.jsx(we,{width:24,height:24}),r.jsx(ke,{width:24,height:24}),r.jsx(Ce,{width:24,height:24}),r.jsx(Te,{width:24,height:24}),r.jsx($e,{width:24,height:24}),r.jsx(xe,{width:24,height:24})];return{id:`icon-item-${t}`,title:`Item ${t}`,value:t,icon:a[e]}}),st=Array.from({length:20},(o,e)=>{const t=`${e+1}`.padStart(2,"0");return{id:`icon-item-${t}`,title:`Item ${t}`,value:t,isPromoted:[3,4,5].includes(e)}}),{useArgs:lt}=__STORYBOOK_MODULE_PREVIEW_API__,pt={title:"Components/Inputs/Combobox",component:E,render:function(e){const[,t]=lt();function a(u){e.onChange(u),t({selectedItem:u})}function n(u){e.setInputValue(u),t({inputValue:u})}return r.jsx("div",{style:{height:420},children:r.jsx(E,{...e,onChange:a,setInputValue:n})})},argTypes:{labelProps:{control:{disable:!0}},placeholder:{type:"string"},items:{control:{disable:!0}},selectedItem:{control:{disable:!0}},onChange:{control:{disable:!0}},inputValue:{type:"string"},setInputValue:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Search",items:at,selectedItem:null,onChange:z(),inputValue:"",setInputValue:z(),hasError:!1,isDisabled:!1}},I={args:{labelProps:{"aria-label":"Label"}}},w={args:{items:it,labelProps:{"aria-label":"Label"}}},k={args:{items:st,labelProps:{"aria-label":"Label"}}},C={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},T={args:{labelProps:{label:"Label for Combobox",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},$={args:{labelProps:{label:"Label for Combobox",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},x={args:{hasError:!0,labelProps:{label:"Label for Combobox"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var X,J,U;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(U=(J=I.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var G,K,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(Y=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,Z,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ae,ie;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Combobox",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(ie=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var se,le,pe;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Combobox",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(pe=(le=$.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,ce,me;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Combobox"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(me=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const ut=["Basic","IconItems","PromotedItems","Disabled","WithLabel","WithHint","WithError"],Vt=Object.freeze(Object.defineProperty({__proto__:null,Basic:I,Disabled:C,IconItems:w,PromotedItems:k,WithError:x,WithHint:$,WithLabel:T,__namedExportsOrder:ut,default:pt},Symbol.toStringTag,{value:"Module"}));export{I as B,Vt as C,C as D,w as I,k as P,T as W,$ as a,x as b};
