import{j as r}from"./jsx-runtime-DQ32znRX.js";import{f as L}from"./index-Cnk2rnxF.js";import{S as q}from"./index-DgS1v8YF.js";import{r as A}from"./index-DH5ua8nC.js";import{u as g,S as M,M as R}from"./SelectBase-80ycTYV8.js";import{a as d,u as m,b as u}from"./index-D3TaQYms.js";import{I as N}from"./InputWrapper-B0780bTF.js";import{I as X}from"./InlineAlert-CH1C3FDk.js";import{I as J}from"./InputLabelTop-DUWaKlIG.js";import{T as b}from"./Typography-squJd_7u.js";import{C as K}from"./CheckboxBase-CUR96BEc.js";const z=d.div`
  overflow: hidden;
`,G=d.div`
  ${()=>{const{tokens:n}=m(),{multiSelect:e}=n;return u`
      overflow: hidden;
      color: ${e.button.headingText.color.base};
    `}}
`,U=d.div`
  ${()=>{const{tokens:n}=m(),{multiSelect:e}=n;return u`
      overflow: hidden;
      color: ${e.button.selectedText.color.base};
    `}}
`,V=d.li`
  ${()=>{const{tokens:n}=m(),{multiSelect:e}=n;return[u`
        all: unset;
        display: grid;
        padding: ${e.menu.option.padding};
        background: ${e.menu.option.backgroundColor.base};
        cursor: pointer;
      `]}}
`,Y=d.div`
  ${({$isSelected:n,$isHighlighted:e})=>{const{tokens:a}=m(),{multiSelect:t}=a;return[u`
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
      `,n&&u`
          background: ${t.menu.option.inner.backgroundColor.active};
        `,e&&u`
          background: ${t.menu.option.inner.backgroundColor.hover};
        `]}}
`;function Q(n){return n?n.title:""}function Z(n,e){const{changes:a,type:t}=e;switch(t){case g.stateChangeTypes.ToggleButtonKeyDownEnter:case g.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case g.stateChangeTypes.ItemClick:return{...a,isOpen:!0,highlightedIndex:n.highlightedIndex};default:return a}}function ee(n,e){var a;return n.length===e.length?"All":e.length===1?(a=e[0])==null?void 0:a.title:e.length>1?`${e.length} items selected`:"None"}function y(n){const{labelProps:e,heading:a,selectedItems:t,onChange:l,alertProps:f,testID:v="multi-select",...T}=n,{items:x}=T,{tokens:E}=m(),{multiSelect:s}=E,{getLabelProps:$,getToggleButtonProps:D,getMenuProps:B,isOpen:W,getItemProps:_,highlightedIndex:O}=g({items:x,itemToString:Q,selectedItem:null,stateReducer:Z,onSelectedItemChange:({selectedItem:i})=>{if(!i)return;const o=t.indexOf(i);o>0?l([...t.slice(0,o),...t.slice(o+1)]):l(o===0?[...t.slice(1)]:[...t,i])}}),I=A.useId(),{labelHint:F}=e;return r.jsx(N,{alert:f?r.jsx(X,{...f,testID:`${v}-alert`}):void 0,children:r.jsx(J,{...e,...$(),labelHintID:I,children:r.jsx(M,{...T,toggleButtonProps:{"aria-describedby":F?I:void 0},getToggleButtonProps:D,getMenuProps:B,isOpen:W,renderButtonContent:()=>r.jsxs(z,{children:[r.jsx(G,{children:r.jsx(b,{component:"div",color:"inherit",variant:s.button.headingText.typography.variant,fontFamily:s.button.headingText.typography.fontFamily,noWrap:!0,children:a})}),r.jsx(U,{children:r.jsx(b,{component:"div",color:"inherit",variant:s.button.selectedText.typography.variant,fontFamily:s.button.selectedText.typography.fontFamily,noWrap:!0,children:ee(x,t)})})]}),renderListItem:(i,o)=>{const h=t.includes(i),P=O===o;return r.jsx(V,{..._({item:i,index:o,"aria-selected":h}),"data-hovered":P||void 0,children:r.jsxs(Y,{$isSelected:h,$isHighlighted:P,children:[r.jsx(K,{inert:"",value:i.title,checked:h,onChange:()=>null}),r.jsx(b,{component:"div",color:"inherit",title:i.title,variant:s.menu.option.inner.text.typography.variant,fontFamily:s.menu.option.inner.text.typography.fontFamily,noWrap:!0,children:i.title})]})},i.id)},maxListHeight:R,testID:v})})})}y.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
  severity: AlertSeverity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""}}};const{useArgs:te}=__STORYBOOK_MODULE_PREVIEW_API__,ne={title:"Components/Inputs/MultiSelect",component:y,render:function(e){const[,a]=te();function t(l){e.onChange(l),a({selectedItems:l})}return r.jsx("div",{style:{height:400},children:r.jsx(y,{...e,onChange:t})})},argTypes:{labelProps:{control:{disable:!0}},heading:{type:"string"},items:{control:{disable:!0}},selectedItems:{control:{disable:!0}},onChange:{control:{disable:!0}},alertProps:{control:{disable:!0}},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{heading:"Heading",items:q.mockItems,selectedItems:[],onChange:L(),hasError:!1,isDisabled:!1}},p={args:{labelProps:{"aria-label":"Label"}}},c={args:{hasError:!0,labelProps:{"aria-label":"Label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var S,k,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var H,w,j;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const re=["Basic","WithError"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,WithError:c,__namedExportsOrder:re,default:ne},Symbol.toStringTag,{value:"Module"}));export{p as B,he as M,c as W};
