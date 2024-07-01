import{j as r}from"./jsx-runtime-DQ32znRX.js";import{f as q}from"./index-Cnk2rnxF.js";import{S as A}from"./index-D0yVWoN6.js";import{r as M}from"./index-DH5ua8nC.js";import{u as g,S as R,M as N}from"./SelectBase-DGVYD0c0.js";import{a as m,u as d,b as s}from"./index-CZQU1x5t.js";import{I as X,a as J}from"./InputAlert-Cflz3_wb.js";import{I as K}from"./InputLabelTop-DwsGclHD.js";import{T as b}from"./Typography-BQS1i-up.js";import{C as z}from"./CheckboxBase-C6J8o2H6.js";const G=m.div`
  overflow: hidden;
`,U=m.div`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return s`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,V=m.div`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return s`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,Y=m.li`
  ${()=>{const{tokens:n}=d(),{multiSelect:e}=n;return[s`
        all: unset;
        display: grid;
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,Q=m.div`
  ${({$isSelected:n,$isHighlighted:e})=>{const{tokens:a}=d(),{multiSelect:t}=a;return[s`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: ${t.menu.option.inner.gap};
        color: ${t.menu.option.inner.color.base};
        padding-top: ${t.menu.option.inner.paddingTop};
        padding-bottom: ${t.menu.option.inner.paddingBottom};
        padding-left: ${t.menu.option.inner.paddingLeft};
        padding-right: ${t.menu.option.inner.paddingRight};
        border-radius: ${t.menu.option.inner.radius};
        background: ${t.menu.option.inner.backgroundColor.base};
      `,n&&s`
          background: ${t.menu.option.inner.backgroundColor.active};
        `,e&&s`
          background: ${t.menu.option.inner.backgroundColor.hover};
        `]}}
`;function Z(n){return n?n.title:""}function ee(n,e){const{changes:a,type:t}=e;switch(t){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...a,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return a}}function te(n,e){var a;return n.length===e.length?"All":e.length===1?(a=e[0])==null?void 0:a.title:e.length>1?`${e.length} items selected`:"None"}function y(n){const{labelProps:e,heading:a,selectedItems:t,onChange:o,alertProps:v,testID:f="multi-select",...T}=n,{items:x}=T,{tokens:$}=d(),{multiSelect:l}=$,{getLabelProps:B,getToggleButtonProps:D,getMenuProps:W,isOpen:_,getItemProps:O,highlightedIndex:F}=g({items:x,itemToString:Z,selectedItem:null,stateReducer:ee,onSelectedItemChange:({selectedItem:u})=>{if(!u)return;const i=t.indexOf(u);i>0?o([...t.slice(0,i),...t.slice(i+1)]):o(i===0?[...t.slice(1)]:[...t,u])}}),I=M.useId(),{labelHint:L}=e;return r.jsx(X,{alert:v?r.jsx(J,{...v,testID:`${f}-alert`}):void 0,children:r.jsx(K,{...e,...B(),labelHintID:I,children:r.jsx(R,{...T,toggleButtonProps:{"aria-describedby":L?I:void 0},getToggleButtonProps:D,getMenuProps:W,isOpen:_,renderButtonContent:()=>r.jsxs(G,{children:[r.jsx(U,{children:r.jsx(b,{component:"div",color:"inherit",variant:l.button.headingText.typography.variant,fontFamily:l.button.headingText.typography.fontFamily,noWrap:!0,children:a})}),r.jsx(V,{children:r.jsx(b,{component:"div",color:"inherit",variant:l.button.selectedText.typography.variant,fontFamily:l.button.selectedText.typography.fontFamily,noWrap:!0,children:te(x,t)})})]}),renderListItem:(u,i,C)=>{const h=t.includes(i),P=F===C;return r.jsx(Y,{...O({ref:u,item:i,index:C,"aria-selected":h}),"data-hovered":P||void 0,children:r.jsxs(Q,{$isSelected:h,$isHighlighted:P,children:[r.jsx(z,{inert:"",value:i.title,checked:h,onChange:()=>null}),r.jsx(b,{component:"div",color:"inherit",title:i.title,variant:l.menu.option.inner.text.typography.variant,fontFamily:l.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:i.title})]})},i.id)},maxListHeight:N,testID:f})})})}y.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
>`},description:""},heading:{required:!0,tsType:{name:"string"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:ne}=__STORYBOOK_MODULE_PREVIEW_API__,re={title:"Components/Inputs/MultiSelect",component:y,render:function(e){const[,a]=ne();function t(o){e.onChange(o),a({selectedItems:o})}return r.jsx("div",{style:{height:400},children:r.jsx(y,{...e,onChange:t})})},argTypes:{heading:{type:"string"},hasError:{type:"boolean"}},args:{onChange:q(),heading:"Heading",items:A.mockItems,selectedItems:[],hasError:!1}},p={args:{labelProps:{"aria-label":"Label"}}},c={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var S,k,H;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var w,j,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const ae=["Basic","WithError"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,WithError:c,__namedExportsOrder:ae,default:re},Symbol.toStringTag,{value:"Module"}));export{p as B,he as M,c as W};
