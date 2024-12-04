import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as H}from"./index-Cnk2rnxF.js";import{H as v}from"./index-DKJt7waT.js";import{T as d,a as D}from"./TabPanels-DqXeds_c.js";import{f as l}from"./index-Bkh50RYL.js";import{T as e}from"./Typography-v4_88_aK.js";import{B as i}from"./Button-ClpVcpa0.js";const _={mobileHeading:"Tab group heading",activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(i,{text:"Tab panel 03"})}]},E={mobileHeading:"Tab group heading",activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(i,{text:"Tab panel 04"})}]},W={mobileHeading:"Tab group heading",activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(i,{text:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(l,{})}]},{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Navigation/Tabs",component:d,render:function(r){const[,S]=L();function k(b){r.onChange(b),S({activeItemId:b})}return a.jsxs("div",{style:{height:270},children:[a.jsx(d,{...r,onChange:k}),a.jsx(D,{activeItemId:r.activeItemId,items:r.items})]})},argTypes:{desktopHeading:{type:"string"},desktopHeadingLevel:{control:{type:"select"},options:v},activeItemId:{type:"string"}},args:{onChange:H()}},s={args:{..._}},n={args:{...E}},o={args:{...W}},t={args:{..._,desktopHeading:"Tab group heading (optional)"}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,f,y;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...mockTabs,
    desktopHeading: "Tab group heading (optional)"
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["Basic","Disabled","WithIcon","WithHeading"],z=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:n,WithHeading:t,WithIcon:o,__namedExportsOrder:B,default:O},Symbol.toStringTag,{value:"Module"}));export{s as B,n as D,z as T,o as W,t as a};
