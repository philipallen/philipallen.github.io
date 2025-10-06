import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{f as H}from"./index-iP1lhtUC.js";import{H as D}from"./index-WLaP1tkh.js";import{T as l}from"./Tabs-caQysLm7.js";import{a as t}from"./index-Do3d1oBb.js";import{T as e}from"./Typography-DZZq2lFF.js";import{B as i}from"./ButtonV2-BNGfN5q3.js";const _={mobileHeading:"Tab group heading",activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(i,{children:"Tab panel 03"})}]},E={mobileHeading:"Tab group heading",activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(i,{children:"Tab panel 04"})}]},W={mobileHeading:"Tab group heading",activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(i,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})}]},{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Navigation/Tabs",component:l,render:function(b){const[,S]=v();function k(d){b.onChange(d),S({activeItemId:d})}return a.jsx("div",{style:{height:270},children:a.jsxs(l,{...b,onChange:k,children:[a.jsx(l.Items,{}),a.jsx(l.Panels,{})]})})},argTypes:{desktopHeading:{type:"string"},desktopHeadingLevel:{control:{type:"select"},options:D},activeItemId:{type:"string"}},args:{onChange:H()}},s={args:{..._}},n={args:{...E}},o={args:{...W}},r={args:{..._,desktopHeading:"Tab group heading (optional)"}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,T,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,j,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(x=(j=o.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var I,f,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...mockTabs,
    desktopHeading: "Tab group heading (optional)"
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const O=["Basic","DisabledItems","WithIcon","WithHeading"],N=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,DisabledItems:n,WithHeading:r,WithIcon:o,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{s as B,n as D,N as T,o as W,r as a};
