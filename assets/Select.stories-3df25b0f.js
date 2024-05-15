import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as z}from"./index-6eef940f.js";import{u as G,S as K,M as U,m as X}from"./Select.mocks-c18b8e39.js";import{a as g,u as p,b as a}from"./index-4d2d77c0.js";import{T as Y}from"./index-71d43b47.js";import{I as J,a as Q}from"./InputAlert-462acbf7.js";import{I as Z}from"./InputLabelTop-96bc7de1.js";import{T as P}from"./Typography-30fd340f.js";const ee=g.div`
  ${({$isDisabled:n,$hasSelectedItem:t})=>{const{tokens:o}=p(),{select:e}=o;return[a`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,n&&a`
          color: ${e.button.placeholder.color.disabled};
        `,t&&a`
          color: ${e.button.text.color.base};
        `,n&&t&&a`
          color: ${e.button.text.color.disabled};
        `]}}
`,ne=g.li`
  ${()=>{const{tokens:n}=p(),{select:t}=n;return[a`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,te=g.div`
  ${({$isSelected:n,$isHighlighted:t})=>{const{tokens:o}=p(),{select:e}=o;return[a`
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
`,re=g(Y)`
  ${({$isSelected:n})=>{const{tokens:t}=p(),{select:o}=t;return[a`
        visibility: ${n?"visible":"hidden"};
        width: ${o.menu.option.inner.icon.width};
        height: ${o.menu.option.inner.icon.height};
      `]}}
`;function oe(n){return n?n.title:""}function h(n){const{labelProps:t,placeholder:o="Select",selectedItem:e,onChange:u,alertProps:f,testID:y="select",...v}=n,{isDisabled:E,items:F}=v,{tokens:q}=p(),{select:m}=q,{getLabelProps:B,getToggleButtonProps:R,getMenuProps:A,isOpen:M,getItemProps:N,highlightedIndex:V}=G({items:F,selectedItem:e,itemToString:oe,onSelectedItemChange:({selectedItem:b})=>u(b)});return r.jsx(J,{alert:f?r.jsx(Q,{...f,testID:`${y}-alert`}):void 0,children:r.jsx(Z,{...t,...B(),children:r.jsx(K,{...v,getToggleButtonProps:R,getMenuProps:A,isOpen:M,renderButtonContent:()=>r.jsx(ee,{$isDisabled:E,$hasSelectedItem:!!e,children:r.jsx(P,{component:"div",color:"inherit",fontFamily:m.button.text.fontFamily,variant:m.button.text.typographyVariant,noWrap:!0,children:e?e.title:o})}),renderListItem:(b,i,I)=>{const $=e===i,k=V===I;return r.jsx(ne,{...N({key:i.id,ref:b,item:i,index:I}),"data-hovered":k||void 0,children:r.jsxs(te,{$isSelected:$,$isHighlighted:k,children:[r.jsx(re,{$isSelected:$,"aria-hidden":"true"}),r.jsx(P,{component:"div",color:"inherit",title:i.title,fontFamily:m.menu.option.inner.text.fontFamily,variant:m.menu.option.inner.text.typographyVariant,noWrap:!0,children:i.title})]})})},maxListHeight:U,testID:y})})})}h.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"id" | "htmlFor" | "onClick" | "labelHint" | "labelHintID" | "children"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"onClick"'},{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "id" | "htmlFor" | "onClick" | "labelHint" | "labelHintID" | "children"
>`},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItem: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"selectedItem"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:ae}=__STORYBOOK_MODULE_PREVIEW_API__,ie={title:"Components/Inputs/Select",component:h,render:function(t){const[,o]=ae();function e(u){t.onChange(u),o({selectedItem:u})}return r.jsx("div",{style:{height:400},children:r.jsx(h,{...t,onChange:e})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:z(),items:X,hasError:!1,isDisabled:!1}},l={args:{labelProps:{"aria-label":"Label"}}},s={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},c={args:{labelProps:{label:"Label"}}},d={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var T,S,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,L,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(D=(L=s.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var w,j,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var H,W,O;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const le=["Basic","Disabled","WithLabel","WithError"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:s,WithError:d,WithLabel:c,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{l as B,s as D,he as S,c as W,d as a};
