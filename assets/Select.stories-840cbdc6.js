import{f as z}from"./index-6eef940f.js";import{j as r}from"./jsx-runtime-6eef64cc.js";import{u as G,S as X,M as J,m as K}from"./Select.mocks-ae7f873d.js";import{a as m,u as d,b as o}from"./index-2b4c4340.js";import{T as Q}from"./index-b1e3628a.js";import{I as U,a as Y}from"./InputAlert-cb8a3cee.js";import{I as Z}from"./InputLabelTop-27f46b9d.js";import{T as $}from"./Typography-45ec0b3f.js";const ee=m.div`
  ${({$isDisabled:n,$hasSelectedItem:t})=>{const{tokens:a}=d(),{select:e}=a;return[o`
        overflow: hidden;
        color: ${e.button.placeholder.color.base};
      `,n&&o`
          color: ${e.button.placeholder.color.disabled};
        `,t&&o`
          color: ${e.button.text.color.base};
        `,n&&t&&o`
          color: ${e.button.text.color.disabled};
        `]}}
`,ne=m.li`
  ${()=>{const{tokens:n}=d(),{select:t}=n;return[o`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,te=m.div`
  ${({$isSelected:n,$isHighlighted:t})=>{const{tokens:a}=d(),{select:e}=a;return[o`
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
      `,n&&o`
          background: ${e.menu.option.inner.backgroundColor.active};
          outline-color: ${e.menu.option.inner.stroke.color.active};
        `,t&&o`
          background: ${e.menu.option.inner.backgroundColor.hover};
          outline-color: ${e.menu.option.inner.stroke.color.hover};
        `]}}
`,re=m(Q)`
  ${({$isSelected:n})=>{const{tokens:t}=d(),{select:a}=t;return[o`
        visibility: ${n?"visible":"hidden"};
        width: ${a.menu.option.inner.icon.width};
        height: ${a.menu.option.inner.icon.height};
      `]}}
`;function oe(n){return n?n.title:""}function F(n){const{labelProps:t,placeholder:a="Select",selectedItem:e,onChange:q,alertProps:g,testID:h="select",...y}=n,{isDisabled:E,items:O}=y,{tokens:_}=d(),{select:u}=_,{getLabelProps:B,getToggleButtonProps:R,getMenuProps:A,isOpen:N,getItemProps:M,highlightedIndex:V}=G({items:O,selectedItem:e,itemToString:oe,onSelectedItemChange:({selectedItem:b})=>q(b)});return r.jsx(U,{alert:g?r.jsx(Y,{...g,testID:`${h}-alert`}):void 0,children:r.jsx(Z,{...t,...B(),children:r.jsx(X,{...y,getToggleButtonProps:R,getMenuProps:A,isOpen:N,renderButtonContent:()=>r.jsx(ee,{$isDisabled:E,$hasSelectedItem:!!e,children:r.jsx($,{component:"div",color:"inherit",fontFamily:u.button.text.fontFamily,variant:u.button.text.typographyVariant,noWrap:!0,children:e?e.title:a})}),renderListItem:(b,i,f)=>{const v=e===i,I=V===f;return r.jsx(ne,{...M({key:i.id,ref:b,item:i,index:f}),"data-hovered":I||void 0,children:r.jsxs(te,{$isSelected:v,$isHighlighted:I,children:[r.jsx(re,{$isSelected:v,"aria-hidden":"true"}),r.jsx($,{component:"div",color:"inherit",title:i.title,fontFamily:u.menu.option.inner.text.fontFamily,variant:u.menu.option.inner.text.typographyVariant,noWrap:!0,children:i.title})]})})},maxListHeight:J,testID:h})})})}F.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const ae={title:"Components/Inputs/Select",component:F,argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:z(),items:K,hasError:!1,isDisabled:!1}},l={args:{labelProps:{"aria-label":"Label"}}},s={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},p={args:{labelProps:{label:"Label"}}},c={args:{hasError:!0,labelProps:{label:"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var k,P,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var S,x,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var L,w,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label"
    }
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var H,j,W;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const ie=["Basic","Disabled","WithLabel","WithError"],ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:s,WithError:c,WithLabel:p,__namedExportsOrder:ie,default:ae},Symbol.toStringTag,{value:"Module"}));export{l as B,s as D,ge as S,p as W,c as a};
