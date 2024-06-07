import{j as r}from"./jsx-runtime-6eef64cc.js";import{a as l}from"./index-1940508f.js";import{I as n}from"./InputAdornment-2df9b3d1.js";import{E as x}from"./ExampleSpacer-aa46c54e.js";import{c as g,a as h}from"./commonProps-af166571.js";import{T as u}from"./Typography-5392f73e.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./index-f15beae1.js";const v={title:"Components/v1/InputAdornment",component:n,argTypes:{...g,position:{control:{type:"select"},options:["start","end"]}}},e=l.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  width: 250px;
  border: 1px solid lightgray;
`,t={decorators:[(j,{args:s})=>(console.log("args",s),r.jsx(e,{children:r.jsx(n,{...s,children:"%"})}))],args:{position:"start",...h}},o={};o.decorators=[()=>r.jsxs(r.Fragment,{children:[r.jsx(u,{variant:"headlineS",children:"Examples"}),r.jsxs(x,{children:[r.jsx("p",{children:"InputAdornment at the start"}),r.jsx(e,{children:r.jsx(n,{position:"start",children:"£"})}),r.jsx("p",{children:"InputAdornment at the end"}),r.jsx(e,{children:r.jsx(n,{position:"end",children:"$"})})]})]})];var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    console.log("args", args);
    return <SBAdornmentContainer>
          <InputAdornment {...args}>%</InputAdornment>
        </SBAdornmentContainer>;
  }],
  args: {
    position: "start",
    ...commonStorybookArgs
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Basic","Examples"];export{t as Basic,o as Examples,k as __namedExportsOrder,v as default};
