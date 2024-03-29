import{a as b,u as x,b as h,j as o}from"./index-b51be3ed.js";import{d as g,c as u,a as f}from"./commonProps-af166571.js";import{E as y}from"./ExampleSpacer-60219ff7.js";import"./ExampleBlock.styled-ad90202e.js";import"./FormExamplesContainer.styled-86e309be.js";import{b as j}from"./index-3215a802.js";import{T as L}from"./Typography-c4d9a36b.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./index-c13ff105.js";const S=b.label`
  ${()=>{const{tokens:s}=x(),{fontFamily:e}=s;return h`
      display: inline-block;
      color: #161616;
      font-family: ${e.OpenSansBold};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0;
      margin-bottom: 8px;
    `}}
`,a=({children:s,htmlFor:e,...p})=>o.jsx(S,{...g(p),htmlFor:e,children:s}),O={title:"v1/Label",component:a,argTypes:{...u}},t={decorators:[(s,{args:e})=>o.jsx(a,{id:"label-id",...e,children:"Label:"})],args:{...f}},r={};r.decorators=[()=>o.jsxs(o.Fragment,{children:[o.jsx(L,{variant:"headlineS",children:"Examples"}),o.jsxs(y,{children:[o.jsx(a,{id:"label-id",children:"Label:"}),o.jsxs(a,{id:"label-id",children:["Label with additional info:",o.jsx("div",{style:{fontWeight:"bold",display:"inline-block"},children:"(option)"})]}),o.jsxs(a,{id:"label-id",children:["Label with icon: ",o.jsx(j,{width:16,height:16})]})]})]})];var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    return <Label id="label-id" {...args}>
          Label:
        </Label>;
  }],
  args: {
    ...commonStorybookArgs
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["Editable","Examples"];export{t as Editable,r as Examples,z as __namedExportsOrder,O as default};
