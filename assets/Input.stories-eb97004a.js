import{j as e}from"./index-b51be3ed.js";import{r as f}from"./index-c013ead5.js";import{I as r}from"./Input-0462cc28.js";import{I as u}from"./InputAdornment-82ccfcd2.js";import{E as C}from"./ExampleSpacer-60219ff7.js";import"./ExampleBlock.styled-ad90202e.js";import{F as b}from"./FormExamplesContainer.styled-86e309be.js";import{c as E,b as g,a as I}from"./commonProps-af166571.js";import{e as y}from"./index-3215a802.js";import{T as S}from"./Typography-c4d9a36b.js";import"./_commonjsHelpers-725317a4.js";import"./ClearButton-a36c9a00.js";import"./FormElementContainer-2c91b8e9.js";import"./index-c13ff105.js";const G={title:"v1/Input",component:r,argTypes:{...E,...g}},o={decorators:[(s,{args:a})=>{const[n,j]=f.useState(a.value??"");return e.jsx(b,{children:e.jsx(r,{...a,value:n,onChange:(...l)=>{var m;(m=a.onChange)==null||m.call(a,...l);const[v]=l;j(v)}})})}],args:{name:"input-name",disabled:!1,readOnly:!1,isError:!1,hasClearButton:!0,autoComplete:"off",labelText:"test",labelId:"123",labelTestId:"label-test-id",...I}},t={};t.decorators=[()=>{const[s,a]=f.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"headlineS",children:"Examples"}),e.jsx(b,{children:e.jsxs(C,{children:[e.jsx(r,{labelText:"Controlled input",value:s,onChange:n=>a(n),hasClearButton:!0}),e.jsx(r,{value:"With left adornment",hasClearButton:!0,startAdornment:e.jsx(u,{position:"start",children:"€"})}),e.jsx(r,{value:"With right adornment",endAdornment:e.jsx(u,{position:"end",children:e.jsx(y,{height:24,width:24})})}),e.jsx(r,{placeholder:"With placholder text",value:""}),e.jsx(r,{readOnly:!0,value:"Read only field"}),e.jsx(r,{disabled:!0,value:"Disabled field"}),e.jsx(r,{isError:!0,value:"In an error state"}),e.jsx(r,{value:"With an error message",errorText:"Error occurred"}),e.jsx(r,{value:"Input with label",labelText:"With a label"})]})})]})}];var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value ?? "");
    return <FormExamplesContainer>
          <Input {...args} value={value} onChange={(...params) => {
        args.onChange?.(...params);
        const [value] = params;
        setValue(value);
      }} />
        </FormExamplesContainer>;
  }],
  args: {
    name: "input-name",
    disabled: false,
    readOnly: false,
    isError: false,
    hasClearButton: true,
    autoComplete: "off",
    labelText: "test",
    labelId: "123",
    labelTestId: "label-test-id",
    ...commonStorybookArgs
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const H=["Editable","Examples"];export{o as Editable,t as Examples,H as __namedExportsOrder,G as default};
