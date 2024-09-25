import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as k}from"./index-Cnk2rnxF.js";import{H}from"./index-DgS1v8YF.js";import{T as b,a as v}from"./TabPanels-D9SgMZ3y.js";import{f as t}from"./index-BFYe-czB.js";import{T as e}from"./Typography-squJd_7u.js";const _={mobileHeading:"Tab group heading",activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"})}]},D={mobileHeading:"Tab group heading",activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(e,{children:"Tab panel 04"})}]},E={mobileHeading:"Tab group heading",activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(t,{})}]},{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Navigation/Tabs",component:b,render:function(r){const[,y]=W();function S(i){r.onChange(i),y({activeItemId:i})}return a.jsxs("div",{style:{height:270},children:[a.jsx(b,{...r,onChange:S}),a.jsx(v,{activeItemId:r.activeItemId,items:r.items})]})},argTypes:{desktopHeadingLevel:{control:{type:"select"},options:H},activeItemId:{type:"string"}},args:{onChange:k()}},s={args:{..._}},n={args:{...D}},o={args:{...E}},l={args:{..._,desktopHeading:"Tab group heading (optional)"}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,T,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,u,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(j=(u=o.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var x,I,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...mockTabs,
    desktopHeading: "Tab group heading (optional)"
  }
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const O=["Basic","Disabled","WithIcon","WithHeading"],N=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:n,WithHeading:l,WithIcon:o,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{s as B,n as D,N as T,o as W,l as a};
