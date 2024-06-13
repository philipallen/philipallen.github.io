import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as f}from"./index-c013ead5.js";import{I as r}from"./Input-cb680ab4.js";import{I as i}from"./InputAdornment-439d018d.js";import{E as C}from"./ExampleSpacer-334de143.js";import"./ExampleBlock.styled-88930e18.js";import{F as b}from"./FormExamplesContainer.styled-ec2ae408.js";import{c as g,b as E,a as I}from"./commonProps-af166571.js";import{c as y}from"./index-b1778622.js";import{T as S}from"./Typography-401b61b3.js";import"./_commonjsHelpers-725317a4.js";import"./index-f9091704.js";import"./ClearButton-69e338f1.js";import"./FormElementContainer-b1edc2c0.js";import"./index-f5bdf07a.js";const H={title:"Components/v1/Input",component:r,argTypes:{...g,...E}},o={decorators:[(s,{args:a})=>{const[n,j]=f.useState(a.value??"");return e.jsx(b,{children:e.jsx(r,{...a,value:n,onChange:(...l)=>{var m;(m=a.onChange)==null||m.call(a,...l);const[v]=l;j(v)}})})}],args:{name:"input-name",disabled:!1,readOnly:!1,isError:!1,hasClearButton:!0,autoComplete:"off",labelText:"test",labelId:"123",labelTestId:"label-test-id",...I}},t={};t.decorators=[()=>{const[s,a]=f.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"headlineS",children:"Examples"}),e.jsx(b,{children:e.jsxs(C,{children:[e.jsx(r,{labelText:"Controlled input",value:s,onChange:n=>a(n),hasClearButton:!0}),e.jsx(r,{value:"With left adornment",hasClearButton:!0,startAdornment:e.jsx(i,{position:"start",children:"€"})}),e.jsx(r,{value:"With right adornment",endAdornment:e.jsx(i,{position:"end",children:e.jsx(y,{height:24,width:24})})}),e.jsx(r,{placeholder:"With placholder text",value:""}),e.jsx(r,{readOnly:!0,value:"Read only field"}),e.jsx(r,{disabled:!0,value:"Disabled field"}),e.jsx(r,{isError:!0,value:"In an error state"}),e.jsx(r,{value:"With an error message",errorText:"Error occurred"}),e.jsx(r,{value:"Input with label",labelText:"With a label"})]})})]})}];var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Basic","Examples"];export{o as Basic,t as Examples,J as __namedExportsOrder,H as default};
