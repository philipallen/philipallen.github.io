import{j as r}from"./jsx-runtime-6eef64cc.js";import{f as D}from"./index-6eef940f.js";import{u as g,S as L,M as q,m as A}from"./Select.mocks-ae7f873d.js";import{a as p,u as m,b as s}from"./index-2b4c4340.js";import{I as M,a as R}from"./InputAlert-cb8a3cee.js";import{I as N}from"./InputLabelTop-27f46b9d.js";import{T as b}from"./Typography-45ec0b3f.js";import{C as V}from"./CheckboxBase-9a27cdc3.js";const K=p.div`
  overflow: hidden;
`,z=p.div`
  ${()=>{const{tokens:n}=m(),{multiSelect:t}=n;return s`
      overflow: hidden;
      color: ${t.button.headingText.color.base};
    `}}
`,G=p.div`
  ${()=>{const{tokens:n}=m(),{multiSelect:t}=n;return s`
      overflow: hidden;
      color: ${t.button.selectedText.color.base};
    `}}
`,U=p.li`
  ${()=>{const{tokens:n}=m(),{multiSelect:t}=n;return[s`
        all: unset;
        display: grid;
        padding: ${t.menu.option.padding};
        background: ${t.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,X=p.div`
  ${({$isSelected:n,$isHighlighted:t})=>{const{tokens:i}=m(),{multiSelect:e}=i;return[s`
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
      `,n&&s`
          background: ${e.menu.option.inner.backgroundColor.active};
        `,t&&s`
          background: ${e.menu.option.inner.backgroundColor.hover};
        `]}}
`;function Y(n){return n?n.title:""}function J(n,t){const{changes:i,type:e}=t;switch(e){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...i,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return i}}function Q(n,t){var i;return n.length===t.length?"All":t.length===1?(i=t[0])==null?void 0:i.title:t.length>1?`${t.length} items selected`:"None"}function y(n){const{labelProps:t,heading:i,selectedItems:e,onChange:a,alertProps:f,testID:v="multi-select",...T}=n,{items:x}=T,{tokens:H}=m(),{multiSelect:l}=H,{getLabelProps:B,getToggleButtonProps:O,getMenuProps:_,isOpen:F,getItemProps:W,highlightedIndex:E}=g({items:x,itemToString:Y,selectedItem:null,stateReducer:J,onSelectedItemChange:({selectedItem:u})=>{if(!u)return;const o=e.indexOf(u);o>0?a([...e.slice(0,o),...e.slice(o+1)]):a(o===0?[...e.slice(1)]:[...e,u])}});return r.jsx(M,{alert:f?r.jsx(R,{...f,testID:`${v}-alert`}):void 0,children:r.jsx(N,{...t,...B(),children:r.jsx(L,{...T,getToggleButtonProps:O,getMenuProps:_,isOpen:F,renderButtonContent:()=>r.jsxs(K,{children:[r.jsx(z,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:l.button.headingText.fontFamily,variant:l.button.headingText.typographyVariant,noWrap:!0,children:i})}),r.jsx(G,{children:r.jsx(b,{component:"div",color:"inherit",fontFamily:l.button.selectedText.fontFamily,variant:l.button.selectedText.typographyVariant,noWrap:!0,children:Q(x,e)})})]}),renderListItem:(u,o,I)=>{const h=e.includes(o),C=E===I;return r.jsx(U,{...W({key:o.id,ref:u,item:o,index:I,"aria-selected":h}),"data-hovered":C||void 0,children:r.jsxs(X,{$isSelected:h,$isHighlighted:C,children:[r.jsx(V,{inert:"",value:o.title,checked:h,onChange:()=>null}),r.jsx(b,{component:"div",color:"inherit",title:o.title,fontFamily:l.menu.option.inner.text.fontFamily,variant:l.menu.option.inner.text.typographyVariant,noWrap:!0,children:o.title})]})})},maxListHeight:q,testID:v})})})}y.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},heading:{required:!0,tsType:{name:"string"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:Z}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Components/Inputs/MultiSelect",component:y,render:function(t){const[,i]=Z();function e(a){t.onChange(a),i({selectedItems:a})}return r.jsx("div",{style:{height:400},children:r.jsx(y,{...t,onChange:e})})},argTypes:{heading:{type:"string"},hasError:{type:"boolean"}},args:{onChange:D(),heading:"Heading",items:A,selectedItems:[],hasError:!1}},c={args:{labelProps:{"aria-label":"Label"}}},d={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var k,S,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var $,j,w;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const te=["Basic","WithError"],ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,WithError:d,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as B,ce as M,d as W};
