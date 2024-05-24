import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as J}from"./index-6eef940f.js";import{u as V,S as z,M as G,m as K}from"./Select.mocks-98a926ac.js";import{a as b,u as m,b as a}from"./index-912b60f4.js";import{T as U}from"./index-5cf7436a.js";import{I as Y,a as Q}from"./InputAlert-0aa61e3e.js";import{I as Z}from"./InputLabelTop-4cd74a97.js";import{T as $}from"./Typography-7961d08c.js";const ee=b.div`
  ${({$isDisabled:n,$hasSelectedItem:t})=>{const{tokens:o}=m(),{select:e}=o;return[a`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,n&&a`
          color: ${e.button.placeholder.color.disabled};
        `,t&&a`
          color: ${e.button.text.color.base};
        `,n&&t&&a`
          color: ${e.button.text.color.disabled};
        `]}}
`,ne=b.li`
  ${()=>{const{tokens:n}=m(),{select:t}=n;return[a`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,te=b.div`
  ${({$isSelected:n,$isHighlighted:t})=>{const{tokens:o}=m(),{select:e}=o;return[a`
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
      `,n&&a`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,t&&a`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,re=b(U)`
  ${({$isSelected:n})=>{const{tokens:t}=m(),{select:o}=t;return[a`
        visibility: ${n?"visible":"hidden"};
        width: ${o.menu.option.inner.icon.width};
        height: ${o.menu.option.inner.icon.height};
      `]}}
`;function oe(n){return n?n.title:""}function h(n){const{labelProps:t,placeholder:o="Select",selectedItem:e,onChange:c,alertProps:y,testID:f="select",...v}=n,{isDisabled:O,items:q}=v,{tokens:F}=m(),{select:d}=F,{getLabelProps:B,getToggleButtonProps:R,getMenuProps:A,isOpen:M,getItemProps:N,highlightedIndex:X}=V({items:q,selectedItem:e,itemToString:oe,onSelectedItemChange:({selectedItem:g})=>c(g)});return r.jsx(Y,{alert:y?r.jsx(Q,{...y,testID:`${f}-alert`}):void 0,children:r.jsx(Z,{...t,...B(),children:r.jsx(z,{...v,getToggleButtonProps:R,getMenuProps:A,isOpen:M,renderButtonContent:()=>r.jsx(ee,{$isDisabled:O,$hasSelectedItem:!!e,children:r.jsx($,{component:"div",color:"inherit",fontFamily:d.button.text.fontFamily,variant:d.button.text.typographyVariant,noWrap:!0,children:e?e.title:o})}),renderListItem:(g,l,I)=>{const k=e===l,P=X===I;return r.jsx(ne,{...N({key:l.id,ref:g,item:l,index:I}),"data-hovered":P||void 0,children:r.jsxs(te,{$isSelected:k,$isHighlighted:P,children:[r.jsx(re,{$isSelected:k,"aria-hidden":"true"}),r.jsx($,{component:"div",color:"inherit",title:l.title,fontFamily:d.menu.option.inner.text.fontFamily,variant:d.menu.option.inner.text.typographyVariant,noWrap:!0,children:l.title})]})})},maxListHeight:G,testID:f})})})}h.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"label",value:{name:"JSX.Element",required:!0}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHint" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "id" | "htmlFor" | "onClick" | "labelHint" | "labelHintID" | "children"
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:ae}=__STORYBOOK_MODULE_PREVIEW_API__,le={title:"Components/Inputs/Select",component:h,render:function(t){const[,o]=ae();function e(c){t.onChange(c),o({selectedItem:c})}return r.jsx("div",{style:{height:400},children:r.jsx(h,{...t,onChange:e})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:J(),items:K,hasError:!1,isDisabled:!1}},i={args:{labelProps:{"aria-label":"Label"}}},s={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},p={args:{labelProps:{label:"Label"}}},u={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var T,S,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var H,x,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,L,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var W,_,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ie=["Basic","Disabled","WithLabel","WithError"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:s,WithError:u,WithLabel:p,__namedExportsOrder:ie,default:le},Symbol.toStringTag,{value:"Module"}));export{i as B,s as D,he as S,p as W,u as a};
