import{j as r}from"./jsx-runtime-DQ32znRX.js";import{f as A}from"./index-Cnk2rnxF.js";import{r as B}from"./index-DH5ua8nC.js";import{a as ye}from"./downshift.esm-BloPLloy.js";import{a as l,u,b as s}from"./index-CtBUti8q.js";import{n as fe}from"./index-DKJt7waT.js";import{T as ve,c as Pe,i as Ie,j as Te,k as we,l as Ce,m as ke,n as xe}from"./index-Bkh50RYL.js";import{a as $e}from"./TextInput.styled-DxtGo_hs.js";import{b as Be,I as Ve}from"./AlertAssociationProps-x_hs0fx1.js";import{I as Re}from"./InlineAlert-uKr_Jbz9.js";import{I as Oe}from"./InputLabelTop-CsiLVEXO.js";import{b as He,c as je,o as Se,f as We,m as Le}from"./floating-ui.react-C2UAdtMt.js";import{S as qe}from"./ScrollShadowContainer-F3QY9P2s.js";import{T as _e}from"./Typography-v4_88_aK.js";const De=l($e)`
  &:disabled {
    cursor: not-allowed;
  }
`,Ee=l.li`
  ${({$withSeparator:o})=>{const{tokens:t}=u(),{select:n}=t;return[s`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `,o&&s`
          border-bottom-style: 2px;
          border-bottom-style: ${n.menu.separator.style};
          border-bottom-color: ${n.menu.separator.color};
        `]}}
`,Ae=l.div`
  ${({$withIcon:o,$isSelected:t,$isHighlighted:n})=>{const{tokens:i}=u(),{select:e}=i;return[s`
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
      `,o&&s`
          grid-template-columns: auto auto 1fr;
        `,t&&s`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&s`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,Ne=l(ve)`
  ${({$isSelected:o})=>{const{tokens:t}=u(),{select:n}=t;return[s`
        visibility: ${o?"visible":"hidden"};
        width: ${n.menu.option.inner.icon.width};
        height: ${n.menu.option.inner.icon.height};
        color: ${n.menu.option.inner.icon.color};
      `]}}
`,Fe=l.div`
  display: grid;
  place-items: center;
  margin-right: 4px;
  min-width: 20px;
  max-width: 30px;
  height: 20px;

  svg {
    width: auto;
    height: 100%;
  }
`,pe=6,Me=48,Xe=1,Je=Me*pe,Ge=Xe*pe-1,ze=Je+Ge,Ue=l.div`
  ${()=>{const{tokens:o}=u(),{select:t}=o;return[s`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${t.button.focusRing.radius};
          outline-width: ${t.button.focusRing.width};
          outline-style: ${t.button.focusRing.style};
          outline-color: ${t.button.focusRing.color};
          outline-offset: ${t.button.focusRing.offset};
        }
      `]}}
`,Ke=l.div`
  ${({$isOpen:o,$hasError:t,$isDisabled:n})=>{const{tokens:i}=u(),{select:e}=i;return[s`
        display: grid;
        background: ${e.button.backgroundColor.base};
        padding-top: ${e.button.paddingTop};
        padding-bottom: ${e.button.paddingBottom};
        padding-left: ${e.button.paddingLeft};
        padding-right: ${e.button.paddingRight};
        border-radius: ${e.button.stroke.radius};
        outline-width: ${e.button.stroke.width.base};
        outline-style: ${e.button.stroke.style};
        outline-color: ${e.button.stroke.color.base};
        outline-offset: ${e.button.stroke.offset.base};

        svg {
          color: ${e.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${e.button.stroke.width.hover};
          outline-color: ${e.button.stroke.color.hover};
          outline-offset: ${e.button.stroke.offset.hover};

          svg {
            color: ${e.button.icon.color.hover};
          }
        }
      `,t&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.error};
            outline-color: ${e.button.stroke.color.error};
            outline-offset: ${e.button.stroke.offset.error};
          }
        `,o&&s`
          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.active};
            outline-color: ${e.button.stroke.color.active};
            outline-offset: ${e.button.stroke.offset.active};

            svg {
              color: ${e.button.icon.color.active};
            }
          }
        `,n&&s`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${e.button.stroke.width.disabled};
            outline-color: ${e.button.stroke.color.disabled};
            outline-offset: ${e.button.stroke.offset.disabled};

            svg {
              color: ${e.button.icon.color.disabled};
            }
          }
        `]}}
`,Ye=l.div`
  ${()=>{const{tokens:o}=u(),{select:t}=o;return s`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${t.button.gap};
    `}}
`,Qe=l.button`
  all: unset;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`,Ze=l.div`
  ${()=>{const{tokens:o}=u(),{select:t}=o;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${t.button.icon.width};
        height: ${t.button.icon.height};
      }
    `}}
`,ue=l(Pe)`
  rotate: 0deg;
`,et=l(ue)`
  rotate: 180deg;
`,tt=l.div`
  ${({$isOpen:o})=>{const{tokens:t}=u(),{select:n}=t;return s`
      display: ${o?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
      z-index: ${n.menu.zIndex};
    `}}
`,nt=l.ul`
  ${()=>{const{tokens:o}=u(),{select:t}=o;return s`
      all: unset;
      display: grid;
      gap: ${t.menu.separator.width};
      background: ${t.menu.separator.color};
    `}}
`;function rt(o){const{offsetValue:t}=o,{refs:n,floatingStyles:i}=He({placement:"bottom-start",whileElementsMounted:je,middleware:[Se(t),We({padding:16}),Le({apply({rects:e,elements:p}){Object.assign(p.floating.style,{minWidth:`${e.reference.width}px`})}})]});return{refs:n,floatingStyles:i}}function me(o){const{getToggleButtonProps:t,getMenuProps:n,isOpen:i,items:e,toggleButtonProps:p,renderHeaderContent:b,renderListItem:V,hasError:w,isDisabled:g,maxListHeight:C,alertAssociationProps:R,testID:m="combobox"}=o,{tokens:O}=u(),{select:H}=O,{refs:k,floatingStyles:x}=rt({offsetValue:parseInt(H.gap,10)}),{ref:j,...S}=n({ref:k.setFloating});return r.jsxs(r.Fragment,{children:[r.jsx(Ue,{children:r.jsx(Ke,{ref:k.setReference,$isOpen:i,$hasError:w,$isDisabled:g,"data-testid":m,...R,children:r.jsxs(Ye,{children:[b(),r.jsx(Qe,{type:"button","aria-label":"Toggle",...p,...t({disabled:g}),children:r.jsx(Ze,{children:i?r.jsx(et,{"aria-hidden":"true"}):r.jsx(ue,{"aria-hidden":"true"})})})]})})}),r.jsx(tt,{ref:j,style:x,$isOpen:i&&e.length>0,children:i&&r.jsx("div",{style:{maxHeight:C},children:r.jsx(qe,{children:r.jsx(nt,{...S,children:e.map((W,L)=>V(W,L))})})})})]})}me.__docgenInfo={description:"",methods:[],displayName:"ComboboxBase",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},toggleButtonProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"literal",value:'"aria-describedby"'}],raw:`Pick<
  ComponentPropsWithoutRef<"div">,
  "aria-describedby"
>`},description:""},renderHeaderContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => JSX.Element",signature:{arguments:[],return:{name:"JSX.Element"}}},description:""},renderListItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},maxListHeight:{required:!1,tsType:{name:"number"},description:""},alertAssociationProps:{required:!1,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"aria-errormessage" | "aria-invalid" | "aria-describedby"',elements:[{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'},{name:"literal",value:'"aria-describedby"'}]}],raw:`Pick<
  ComponentPropsWithRef<"input">,
  "aria-errormessage" | "aria-invalid" | "aria-describedby"
>`},description:""}}};function q(o){const{labelProps:t,placeholder:n="Select",items:i,selectedItem:e,onChange:p,inputValue:b,setInputValue:V,alertProps:w,testID:g="combobox",...C}=o,{isDisabled:R}=C,m=B.useMemo(()=>{let a=i;return b.length>0&&(a=a.filter(c=>{const d=c.title.toLowerCase(),$=b.trim().toLowerCase();return d.includes($)})),a.sort((c,d)=>c.isPromoted===d.isPromoted?0:c.isPromoted?-1:1)},[i,b]),O=m.at(-1),H=B.useMemo(()=>m.filter(a=>a.isPromoted).at(-1),[m]),{tokens:k}=u(),{select:x}=k,{getLabelProps:j,getToggleButtonProps:S,getMenuProps:W,getInputProps:L,isOpen:ce,getItemProps:de,highlightedIndex:be}=ye({onInputValueChange({inputValue:a}){V(a)},items:m,selectedItem:e,itemToString:fe.itemToString,onSelectedItemChange:({selectedItem:a})=>p(a)}),_=B.useId(),{labelHint:ge}=t,D=ge?_:void 0,E=B.useId(),he=Be(E,o,D);return r.jsx(Ve,{alert:w?r.jsx(Re,{id:E,...w,testID:`${g}-alert`}):void 0,children:r.jsx(Oe,{...t,...j(),labelHintID:_,children:r.jsx(me,{...C,items:m,toggleButtonProps:{"aria-describedby":D},getToggleButtonProps:S,getMenuProps:W,isOpen:ce,renderHeaderContent:()=>r.jsx(De,{disabled:R,placeholder:n,...L()}),renderListItem:(a,c)=>{const d=e===a,$=be===c;return r.jsx(Ee,{$withSeparator:a!==O&&a===H,...de({item:a,index:c}),"data-hovered":$||void 0,children:r.jsxs(Ae,{$withIcon:a.icon!==void 0,$isSelected:d,$isHighlighted:$,children:[r.jsx(Ne,{$isSelected:d,"aria-hidden":"true"}),a.icon&&r.jsx(Fe,{children:a.icon}),r.jsx(_e,{component:"div",color:"inherit",title:a.title,variant:x.menu.option.inner.text.typography.variant,fontFamily:x.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:a.title})]})},a.id)},maxListHeight:ze,testID:g,alertAssociationProps:he})})})}q.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},setInputValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""}}};const ot=Array.from({length:20},(o,t)=>{const n=`${t+1}`.padStart(2,"0");return{id:`item-${n}`,title:`Item ${n}`,value:n}}),at=Array.from({length:6},(o,t)=>{const n=`${t+1}`.padStart(2,"0"),i=[r.jsx(Ie,{}),r.jsx(Te,{}),r.jsx(we,{}),r.jsx(Ce,{}),r.jsx(ke,{}),r.jsx(xe,{})];return{id:`icon-item-${n}`,title:`Item ${n}`,value:n,icon:i[t]}}),it=Array.from({length:20},(o,t)=>{const n=`${t+1}`.padStart(2,"0");return{id:`icon-item-${n}`,title:`Item ${n}`,value:n,isPromoted:[3,4,5].includes(t)}}),{useArgs:st}=__STORYBOOK_MODULE_PREVIEW_API__,lt={title:"Components/Inputs/Combobox",component:q,render:function(t){const[,n]=st();function i(p){t.onChange(p),n({selectedItem:p})}function e(p){t.setInputValue(p),n({inputValue:p})}return r.jsx("div",{style:{height:420},children:r.jsx(q,{...t,onChange:i,setInputValue:e})})},argTypes:{labelProps:{control:{disable:!0}},placeholder:{type:"string"},items:{control:{disable:!0}},selectedItem:{control:{disable:!0}},onChange:{control:{disable:!0}},inputValue:{type:"string"},setInputValue:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{placeholder:"Search",items:ot,selectedItem:null,onChange:A(),inputValue:"",setInputValue:A(),hasError:!1,isDisabled:!1}},h={args:{labelProps:{"aria-label":"Label"}}},y={args:{items:at,labelProps:{"aria-label":"Label"}}},f={args:{items:it,labelProps:{"aria-label":"Label"}}},v={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},P={args:{labelProps:{label:"Label for Combobox",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},I={args:{labelProps:{label:"Label for Combobox",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},T={args:{hasError:!0,labelProps:{label:"Label for Combobox"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var N,F,M;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(M=(F=h.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var X,J,G;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: mockIconItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(G=(J=y.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var z,U,K;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: mockPromotedItems,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(K=(U=f.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,Q,Z;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,ae;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,se,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const pt=["Basic","IconItems","PromotedItems","Disabled","WithLabel","WithHint","WithError"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,Disabled:v,IconItems:y,PromotedItems:f,WithError:T,WithHint:I,WithLabel:P,__namedExportsOrder:pt,default:lt},Symbol.toStringTag,{value:"Module"}));export{h as B,Ct as C,v as D,y as I,f as P,P as W,I as a,T as b};
