import{j as t}from"./jsx-runtime-DQ32znRX.js";import{f as Q}from"./index-Cnk2rnxF.js";import{S as R}from"./index-Cee7vv5h.js";import{r as Z}from"./index-DH5ua8nC.js";import{u as ee,S as ne,M as te}from"./SelectBase-CxK8CBbH.js";import{a as g,u as d,b as a}from"./index-CWEVnOcG.js";import{T as re}from"./index-ef8Z-xiF.js";import{I as oe,a as ae}from"./InputAlert-PchpsvMy.js";import{I as le}from"./InputLabelTop-B2pFmb23.js";import{T as $}from"./Typography-BayW6epx.js";const ie=g.div`
  ${({$isDisabled:r,$hasSelectedItem:n})=>{const{tokens:o}=d(),{select:e}=o;return[a`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,r&&a`
          color: ${e.button.placeholder.color.disabled};
        `,n&&a`
          color: ${e.button.text.color.base};
        `,r&&n&&a`
          color: ${e.button.text.color.disabled};
        `]}}
`,se=g.li`
  ${()=>{const{tokens:r}=d(),{select:n}=r;return[a`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,pe=g.div`
  ${({$isSelected:r,$isHighlighted:n})=>{const{tokens:o}=d(),{select:e}=o;return[a`
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
      `,r&&a`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&a`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,ce=g(re)`
  ${({$isSelected:r})=>{const{tokens:n}=d(),{select:o}=n;return[a`
        visibility: ${r?"visible":"hidden"};
        width: ${o.menu.option.inner.icon.width};
        height: ${o.menu.option.inner.icon.height};
      `]}}
`;function f(r){const{labelProps:n,placeholder:o="Select",selectedItem:e,onChange:u,alertProps:y,testID:v="select",...I}=r,{isDisabled:M,items:N}=I,{tokens:X}=d(),{select:b}=X,{getLabelProps:J,getToggleButtonProps:z,getMenuProps:G,isOpen:K,getItemProps:U,highlightedIndex:V}=ee({items:N,selectedItem:e,itemToString:R.itemToString,onSelectedItemChange:({selectedItem:h})=>u(h)}),P=Z.useId(),{labelHint:Y}=n;return t.jsx(oe,{alert:y?t.jsx(ae,{...y,testID:`${v}-alert`}):void 0,children:t.jsx(le,{...n,...J(),labelHintID:P,children:t.jsx(ne,{...I,toggleButtonProps:{"aria-describedby":Y?P:void 0},getToggleButtonProps:z,getMenuProps:G,isOpen:K,renderButtonContent:()=>t.jsx(ie,{$isDisabled:M,$hasSelectedItem:!!e,children:t.jsx($,{component:"div",color:"inherit",variant:b.button.text.typography.variant,fontFamily:b.button.text.typography.fontFamily,noWrap:!0,children:e?e.title:o})}),renderListItem:(h,l,S)=>{const k=e===l,T=V===S;return t.jsx(se,{...U({ref:h,item:l,index:S}),"data-hovered":T||void 0,children:t.jsxs(pe,{$isSelected:k,$isHighlighted:T,children:[t.jsx(ce,{$isSelected:k,"aria-hidden":"true"}),t.jsx($,{component:"div",color:"inherit",title:l.title,variant:b.menu.option.inner.text.typography.variant,fontFamily:b.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:l.title})]})},l.id)},maxListHeight:te,testID:v})})})}f.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:me}=__STORYBOOK_MODULE_PREVIEW_API__,de={title:"Components/Inputs/Select",component:f,render:function(n){const[,o]=me();function e(u){n.onChange(u),o({selectedItem:u})}return t.jsx("div",{style:{height:400},children:t.jsx(f,{...n,onChange:e})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:Q(),items:R.mockItems,hasError:!1,isDisabled:!1}},i={args:{labelProps:{"aria-label":"Label"}}},s={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},p={args:{labelProps:{label:"Label for Select"}}},c={args:{labelProps:{label:"Label for Select",labelHint:"Additional information"}}},m={args:{hasError:!0,labelProps:{label:"Label for Select"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var x,H,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(C=(H=i.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var D,L,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var E,W,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select"
    }
  }
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,q,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
      labelHint: "Additional information"
    }
  }
}`,...(O=(q=c.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var B,F,A;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Select"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const ue=["Basic","Disabled","WithLabel","WithHint","WithError"],Te=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:s,WithError:m,WithHint:c,WithLabel:p,__namedExportsOrder:ue,default:de},Symbol.toStringTag,{value:"Module"}));export{i as B,s as D,Te as S,p as W,c as a,m as b};
