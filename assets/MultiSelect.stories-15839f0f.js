import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as F}from"./index-6eef940f.js";import{u as g,S as L,M as q,m as A}from"./Select.mocks-98a926ac.js";import{a as m,u as d,b as s}from"./index-912b60f4.js";import{I as M,a as R}from"./InputAlert-0aa61e3e.js";import{I as N}from"./InputLabelTop-4cd74a97.js";import{T as b}from"./Typography-7961d08c.js";import{C as V}from"./CheckboxBase-2dd3ee63.js";const X=m.div`
  overflow: hidden;
`,J=m.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:n}=t;return s`
      overflow: hidden;
      color: ${n.button.headingText.color.base};
    `}}
`,K=m.div`
  ${()=>{const{tokens:t}=d(),{multiSelect:n}=t;return s`
      overflow: hidden;
      color: ${n.button.selectedText.color.base};
    `}}
`,z=m.li`
  ${()=>{const{tokens:t}=d(),{multiSelect:n}=t;return[s`
        all: unset;
        display: grid;
        padding: ${n.menu.option.padding};
        background: ${n.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,G=m.div`
  ${({$isSelected:t,$isHighlighted:n})=>{const{tokens:a}=d(),{multiSelect:e}=a;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: ${e.menu.option.inner.gap};
        color: ${e.menu.option.inner.color.base};
        padding-top: ${e.menu.option.inner.paddingTop};
        padding-bottom: ${e.menu.option.inner.paddingBottom};
        padding-left: ${e.menu.option.inner.paddingLeft};
        padding-right: ${e.menu.option.inner.paddingRight};
        border-radius: ${e.menu.option.inner.radius};
        background: ${e.menu.option.inner.backgroundColor.base};
      `,t&&s`
          background: ${e.menu.option.inner.backgroundColor.active};
        `,n&&s`
          background: ${e.menu.option.inner.backgroundColor.hover};
        `]}}
`;function U(t){return t?t.title:""}function Y(t,n){const{changes:a,type:e}=n;switch(e){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...a,isOpen:!0,highlightedIndex:t.highlightedIndex};default:return a}}function Q(t,n){var a;return t.length===n.length?"All":n.length===1?(a=n[0])==null?void 0:a.title:n.length>1?`${n.length} items selected`:"None"}function y(t){const{labelProps:n,heading:a,selectedItems:e,onChange:o,alertProps:f,testID:v="multi-select",...T}=t,{items:I}=T,{tokens:$}=d(),{multiSelect:l}=$,{getLabelProps:B,getToggleButtonProps:D,getMenuProps:E,isOpen:W,getItemProps:O,highlightedIndex:_}=g({items:I,itemToString:U,selectedItem:null,stateReducer:Y,onSelectedItemChange:({selectedItem:u})=>{if(!u)return;const i=e.indexOf(u);i>0?o([...e.slice(0,i),...e.slice(i+1)]):o(i===0?[...e.slice(1)]:[...e,u])}});return r.jsx(M,{alert:f?r.jsx(R,{...f,testID:`${v}-alert`}):void 0,children:r.jsx(N,{...n,...B(),children:r.jsx(L,{...T,getToggleButtonProps:D,getMenuProps:E,isOpen:W,renderButtonContent:()=>r.jsxs(X,{children:[r.jsx(J,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:l.button.headingText.fontFamily,variant:l.button.headingText.typographyVariant,noWrap:!0,children:a})}),r.jsx(K,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:l.button.selectedText.fontFamily,variant:l.button.selectedText.typographyVariant,noWrap:!0,children:Q(I,e)})})]}),renderListItem:(u,i,x)=>{const h=e.includes(i),C=_===x;return r.jsx(z,{...O({key:i.id,ref:u,item:i,index:x,"aria-selected":h}),"data-hovered":C||void 0,children:r.jsxs(G,{$isSelected:h,$isHighlighted:C,children:[r.jsx(V,{inert:"",value:i.title,checked:h,onChange:()=>null}),r.jsx(b,{component:"div",color:"inherit",title:i.title,fontFamily:l.menu.option.inner.text.fontFamily,variant:l.menu.option.inner.text.typographyVariant,noWrap:!0,children:i.title})]})})},maxListHeight:q,testID:v})})})}y.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},heading:{required:!0,tsType:{name:"string"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:Z}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Components/Inputs/MultiSelect",component:y,render:function(n){const[,a]=Z();function e(o){n.onChange(o),a({selectedItems:o})}return r.jsx("div",{style:{height:400},children:r.jsx(y,{...n,onChange:e})})},argTypes:{heading:{type:"string"},hasError:{type:"boolean"}},args:{onChange:F(),heading:"Heading",items:A,selectedItems:[],hasError:!1}},p={args:{labelProps:{"aria-label":"Label"}}},c={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var k,P,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var H,w,j;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      "aria-label": "Label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const ne=["Basic","WithError"],pe=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,WithError:c,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{p as B,pe as M,c as W};
