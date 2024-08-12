import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as D}from"./index-DH5ua8nC.js";import{u as j,S as F,M as q}from"./SelectBase-DPBnt8zN.js";import{a as m,u as a,b as i}from"./index-jNFq1OWt.js";import{S as L}from"./index-BGt6MgUo.js";import{T as W}from"./index-M-g1GIMf.js";import{I as B}from"./InputWrapper-B7dHgQQ8.js";import{I as E}from"./InlineAlert-CT5-H_YI.js";import{I as O}from"./InputLabelTop-DA_PelCW.js";import{T as v}from"./Typography-D5AcRl6x.js";const R=m.div`
  ${({$isDisabled:t,$hasSelectedItem:n})=>{const{tokens:o}=a(),{select:e}=o;return[i`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,t&&i`
          color: ${e.button.placeholder.color.disabled};
        `,n&&i`
          color: ${e.button.text.color.base};
        `,t&&n&&i`
          color: ${e.button.text.color.disabled};
        `]}}
`,_=m.li`
  ${()=>{const{tokens:t}=a(),{select:n}=t;return[i`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,A=m.div`
  ${({$isSelected:t,$isHighlighted:n})=>{const{tokens:o}=a(),{select:e}=o;return[i`
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
      `,t&&i`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&i`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,N=m(W)`
  ${({$isSelected:t})=>{const{tokens:n}=a(),{select:o}=n;return[i`
        visibility: ${t?"visible":"hidden"};
        width: ${o.menu.option.inner.icon.width};
        height: ${o.menu.option.inner.icon.height};
      `]}}
`;function X(t){const{labelProps:n,placeholder:o="Select",selectedItem:e,onChange:f,alertProps:p,testID:d="select",...c}=t,{isDisabled:I,items:k}=c,{tokens:$}=a(),{select:s}=$,{getLabelProps:T,getToggleButtonProps:x,getMenuProps:H,isOpen:P,getItemProps:S,highlightedIndex:w}=j({items:k,selectedItem:e,itemToString:L.itemToString,onSelectedItemChange:({selectedItem:u})=>f(u)}),g=D.useId(),{labelHint:C}=n;return r.jsx(B,{alert:p?r.jsx(E,{...p,testID:`${d}-alert`}):void 0,children:r.jsx(O,{...n,...T(),labelHintID:g,children:r.jsx(F,{...c,toggleButtonProps:{"aria-describedby":C?g:void 0},getToggleButtonProps:x,getMenuProps:H,isOpen:P,renderButtonContent:()=>r.jsx(R,{$isDisabled:I,$hasSelectedItem:!!e,children:r.jsx(v,{component:"div",color:"inherit",variant:s.button.text.typography.variant,fontFamily:s.button.text.typography.fontFamily,noWrap:!0,children:e?e.title:o})}),renderListItem:(u,l,b)=>{const h=e===l,y=w===b;return r.jsx(_,{...S({ref:u,item:l,index:b}),"data-hovered":y||void 0,children:r.jsxs(A,{$isSelected:h,$isHighlighted:y,children:[r.jsx(N,{$isSelected:h,"aria-hidden":"true"}),r.jsx(v,{component:"div",color:"inherit",title:l.title,variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:l.title})]})},l.id)},maxListHeight:q,testID:d})})})}X.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> &
  Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID"> & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "id" | "htmlFor" | "onClick" | "labelHintID" | "children"
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};export{X as S};
