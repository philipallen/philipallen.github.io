import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as Y}from"./index-6eef940f.js";import{r as Q}from"./index-c013ead5.js";import{u as Z,S as ee,M as ne,m as te}from"./Select.mocks-a4e80ae5.js";import{a as g,u as m,b as a}from"./index-1940508f.js";import{T as re}from"./index-7aafd469.js";import{I as oe,a as ae}from"./InputAlert-7e99775e.js";import{I as le}from"./InputLabelTop-ca51ab3b.js";import{T}from"./Typography-5392f73e.js";const ie=g.div`
  ${({$isDisabled:t,$hasSelectedItem:n})=>{const{tokens:o}=m(),{select:e}=o;return[a`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,t&&a`
          color: ${e.button.placeholder.color.disabled};
        `,n&&a`
          color: ${e.button.text.color.base};
        `,t&&n&&a`
          color: ${e.button.text.color.disabled};
        `]}}
`,se=g.li`
  ${()=>{const{tokens:t}=m(),{select:n}=t;return[a`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,pe=g.div`
  ${({$isSelected:t,$isHighlighted:n})=>{const{tokens:o}=m(),{select:e}=o;return[a`
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
      `,t&&a`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,n&&a`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,ce=g(re)`
  ${({$isSelected:t})=>{const{tokens:n}=m(),{select:o}=n;return[a`
        visibility: ${t?"visible":"hidden"};
        width: ${o.menu.option.inner.icon.width};
        height: ${o.menu.option.inner.icon.height};
      `]}}
`;function de(t){return t?t.title:""}function y(t){const{labelProps:n,placeholder:o="Select",selectedItem:e,onChange:u,alertProps:f,testID:v="select",...I}=t,{isDisabled:R,items:M}=I,{tokens:N}=m(),{select:b}=N,{getLabelProps:X,getToggleButtonProps:J,getMenuProps:z,isOpen:G,getItemProps:K,highlightedIndex:U}=Z({items:M,selectedItem:e,itemToString:de,onSelectedItemChange:({selectedItem:h})=>u(h)}),P=Q.useId(),{labelHint:V}=n;return r.jsx(oe,{alert:f?r.jsx(ae,{...f,testID:`${v}-alert`}):void 0,children:r.jsx(le,{...n,...X(),labelHintID:P,children:r.jsx(ee,{...I,toggleButtonProps:{"aria-describedby":V?P:void 0},getToggleButtonProps:J,getMenuProps:z,isOpen:G,renderButtonContent:()=>r.jsx(ie,{$isDisabled:R,$hasSelectedItem:!!e,children:r.jsx(T,{component:"div",color:"inherit",variant:b.button.text.typography.variant,fontFamily:b.button.text.typography.fontFamily,noWrap:!0,children:e?e.title:o})}),renderListItem:(h,l,k)=>{const $=e===l,S=U===k;return r.jsx(se,{...K({key:l.id,ref:h,item:l,index:k}),"data-hovered":S||void 0,children:r.jsxs(pe,{$isSelected:$,$isHighlighted:S,children:[r.jsx(ce,{$isSelected:$,"aria-hidden":"true"}),r.jsx(T,{component:"div",color:"inherit",title:l.title,variant:b.menu.option.inner.text.typography.variant,fontFamily:b.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:l.title})]})})},maxListHeight:ne,testID:v})})})}y.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "id" | "htmlFor" | "onClick" | "labelHintID" | "children"
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:me}=__STORYBOOK_MODULE_PREVIEW_API__,ue={title:"Components/Inputs/Select",component:y,render:function(n){const[,o]=me();function e(u){n.onChange(u),o({selectedItem:u})}return r.jsx("div",{style:{height:400},children:r.jsx(y,{...n,onChange:e})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:Y(),items:te,hasError:!1,isDisabled:!1}},i={args:{labelProps:{"aria-label":"Label"}}},s={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},p={args:{labelProps:{label:"Label"}}},c={args:{labelProps:{label:"Label",labelHint:"Additional information"}}},d={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var H,C,x;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,L,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var W,j,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var _,O,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label",
      labelHint: "Additional information"
    }
  }
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var B,F,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(F=d.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const be=["Basic","Disabled","WithLabel","WithHint","WithError"],Se=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:s,WithError:d,WithHint:c,WithLabel:p,__namedExportsOrder:be,default:ue},Symbol.toStringTag,{value:"Module"}));export{i as B,s as D,Se as S,p as W,c as a,d as b};
