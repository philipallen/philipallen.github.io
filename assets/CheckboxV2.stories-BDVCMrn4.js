import{j as D}from"./jsx-runtime-sfY7k0Xq.js";import{f as k}from"./index-iP1lhtUC.js";import{C as l}from"./CheckboxV2-h4hywln6.js";const{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Inputs/CheckboxV2",component:l,render:function(o){const[,W]=v();function L(t){o.onChange&&o.onChange(t),W({isSelected:t})}return D.jsx(l,{...o,onChange:L})},argTypes:{isSelected:{control:"boolean"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},isIndeterminate:{control:"boolean"}},args:{isSelected:!1,isDisabled:!1,isInvalid:!1,isIndeterminate:!1,onChange:k()}},a={args:{"aria-label":"Checkbox label"}},e={args:{labelProps:{label:"Checkbox label"}}},r={...e,args:{...e.args,isDisabled:!0}},s={...e,args:{...e.args,isInvalid:!0}},n={...e,args:{...e.args,isIndeterminate:!0}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "aria-label": "Checkbox label"
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,m,p;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Checkbox label"
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...WithLabel,
  args: {
    ...WithLabel.args,
    isDisabled: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,C,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...WithLabel,
  args: {
    ...WithLabel.args,
    isInvalid: true
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var _,x,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...WithLabel,
  args: {
    ...WithLabel.args,
    isIndeterminate: true
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const j=["Basic","WithLabel","Disabled","Invalid","Indeterminate"],V=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:r,Indeterminate:n,Invalid:s,WithLabel:e,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{a as B,V as C,r as D,s as I,e as W,n as a};
