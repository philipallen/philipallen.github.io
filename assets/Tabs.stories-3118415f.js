import{j as a}from"./jsx-runtime-6eef64cc.js";import{f as y}from"./index-6eef940f.js";import{T as b,a as I}from"./TabPanels-d4aef556.js";import{c as s}from"./index-7aafd469.js";import{T as e}from"./Typography-5392f73e.js";const S={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"})}]},_={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(e,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})}]},f={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(s,{})}]},{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Navigation/Tabs",component:b,render:function(r){const[,u]=L();function g(t){r.onChange(t),u({activeItemId:t})}return a.jsxs(a.Fragment,{children:[a.jsx(b,{...r,onChange:g}),a.jsx(I,{activeItemId:r.activeItemId,items:r.items})]})},argTypes:{activeItemId:{type:"string"}},args:{onChange:y()}},n={args:{...S}},l={args:{..._}},o={args:{...f}};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,T;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(T=(m=l.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var h,j,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(x=(j=o.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const D=["Basic","Disabled","WithIcon"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Disabled:l,WithIcon:o,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{n as B,l as D,B as T,o as W};
