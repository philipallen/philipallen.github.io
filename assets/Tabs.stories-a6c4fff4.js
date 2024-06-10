import{j as a}from"./jsx-runtime-6eef64cc.js";import{f as y}from"./index-6eef940f.js";import{T as b,a as I}from"./TabPanels-d4aef556.js";import{c as o}from"./index-7aafd469.js";import{T as e}from"./Typography-5392f73e.js";const S={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"})}]},_={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label"},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label"},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(e,{children:"Tab panel 04"}),secondaryLabel:"Secondary label"}]},f={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(e,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(o,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(e,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(o,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(e,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(o,{})}]},{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Navigation/Tabs",component:b,render:function(r){const[,j]=L();function x(t){r.onChange(t),j({activeItemId:t})}return a.jsxs(a.Fragment,{children:[a.jsx(b,{...r,onChange:x}),a.jsx(I,{activeItemId:r.activeItemId,items:r.items})]})},argTypes:{activeItemId:{type:"string"}},args:{onChange:y()}},l={args:{...S}},s={args:{..._}},n={args:{...f}};var c,i,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const D=["Basic","Disabled","WithIcon"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:s,WithIcon:n,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{l as B,s as D,B as T,n as W};
