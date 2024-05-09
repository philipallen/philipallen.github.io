import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as b,u as g,b as u}from"./index-22f9e29b.js";import{d as x,c as f,a as h}from"./commonProps-af166571.js";import{E as y}from"./ExampleSpacer-0f644691.js";import"./ExampleBlock.styled-f3034b98.js";import"./FormExamplesContainer.styled-2342a816.js";import{e as j}from"./index-b1e3628a.js";import{T as L}from"./Typography-df6f4efa.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./index-7aa2f780.js";const S=b.label`
  ${()=>{const{tokens:a}=g(),{fontFamily:s}=a;return u`
      display: inline-block;
      color: #161616;
      font-family: ${s.OpenSansBold};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0;
      margin-bottom: 8px;
    `}}
`,r=({children:a,htmlFor:s,...c})=>e.jsx(S,{...x(c),htmlFor:s,children:a});r.__docgenInfo={description:"",methods:[],displayName:"Label",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},testID:{required:!1,tsType:{name:"string"},description:""},labelTestId:{required:!1,tsType:{name:"string"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/v1/Label",component:r,argTypes:{...f}},t={decorators:[(a,{args:s})=>e.jsx(r,{id:"label-id",...s,children:"Label:"})],args:{...h}},o={};o.decorators=[()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"headlineS",children:"Examples"}),e.jsxs(y,{children:[e.jsx(r,{id:"label-id",children:"Label:"}),e.jsxs(r,{id:"label-id",children:["Label with additional info:",e.jsx("div",{style:{fontWeight:"bold",display:"inline-block"},children:"(option)"})]}),e.jsxs(r,{id:"label-id",children:["Label with icon: ",e.jsx(j,{width:16,height:16})]})]})]})];var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const D=["Editable","Examples"];export{t as Editable,o as Examples,D as __namedExportsOrder,A as default};
