import{j as a}from"./jsx-runtime-BkBIjjFT.js";import{f as H}from"./index-D0csYWE-.js";import{H as D}from"./index-VIbBARS4.js";import{T as r}from"./Tabs-B7hPWvey.js";import{a as l}from"./index-qhhwF6MA.js";import{T as e}from"./Typography-wg1R8lvT.js";import{B as i}from"./Button-DdoqnsX4.js";const _={mobileHeading:"Tab group heading",activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(i,{text:"Tab panel 03"})}]},E={mobileHeading:"Tab group heading",activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(i,{text:"Tab panel 04"})}]},W={mobileHeading:"Tab group heading",activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(i,{text:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})}]},{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Navigation/Tabs",component:r,render:function(b){const[,S]=v();function k(d){b.onChange(d),S({activeItemId:d})}return a.jsx("div",{style:{height:270},children:a.jsxs(r,{...b,onChange:k,children:[a.jsx(r.Items,{}),a.jsx(r.Panels,{})]})})},argTypes:{desktopHeading:{type:"string"},desktopHeadingLevel:{control:{type:"select"},options:D},activeItemId:{type:"string"}},args:{onChange:H()}},s={args:{..._}},n={args:{...E}},o={args:{...W}},t={args:{..._,desktopHeading:"Tab group heading (optional)"}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,T,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,x,j;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,y,I;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...mockTabs,
    desktopHeading: "Tab group heading (optional)"
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const O=["Basic","Disabled","WithIcon","WithHeading"],V=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:n,WithHeading:t,WithIcon:o,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{s as B,n as D,V as T,o as W,t as a};
