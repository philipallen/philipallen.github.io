import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as b}from"./index-c013ead5.js";import{I as r}from"./Input-11549a68.js";import{I as i}from"./InputAdornment-2df9b3d1.js";import{E as C}from"./ExampleSpacer-aa46c54e.js";import"./ExampleBlock.styled-ce46c528.js";import{F as f}from"./FormExamplesContainer.styled-7fd68ce7.js";import{c as E,b as g,a as I}from"./commonProps-af166571.js";import{b as y}from"./index-7aafd469.js";import{T as S}from"./Typography-5392f73e.js";import"./_commonjsHelpers-725317a4.js";import"./index-1940508f.js";import"./ClearButton-680d3184.js";import"./FormElementContainer-c03e3225.js";import"./index-f15beae1.js";const H={title:"Components/v1/Input",component:r,argTypes:{...E,...g}},o={decorators:[(s,{args:t})=>{const[n,j]=b.useState(t.value??"");return e.jsx(f,{children:e.jsx(r,{...t,value:n,onChange:(...l)=>{var m;(m=t.onChange)==null||m.call(t,...l);const[v]=l;j(v)}})})}],args:{name:"input-name",disabled:!1,readOnly:!1,isError:!1,hasClearButton:!0,autoComplete:"off",labelText:"test",labelId:"123",labelTestId:"label-test-id",...I}},a={};a.decorators=[()=>{const[s,t]=b.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"headlineS",children:"Examples"}),e.jsx(f,{children:e.jsxs(C,{children:[e.jsx(r,{labelText:"Controlled input",value:s,onChange:n=>t(n),hasClearButton:!0}),e.jsx(r,{value:"With left adornment",hasClearButton:!0,startAdornment:e.jsx(i,{position:"start",children:"€"})}),e.jsx(r,{value:"With right adornment",endAdornment:e.jsx(i,{position:"end",children:e.jsx(y,{height:24,width:24})})}),e.jsx(r,{placeholder:"With placholder text",value:""}),e.jsx(r,{readOnly:!0,value:"Read only field"}),e.jsx(r,{disabled:!0,value:"Disabled field"}),e.jsx(r,{isError:!0,value:"In an error state"}),e.jsx(r,{value:"With an error message",errorText:"Error occurred"}),e.jsx(r,{value:"Input with label",labelText:"With a label"})]})})]})}];var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Editable","Examples"];export{o as Editable,a as Examples,J as __namedExportsOrder,H as default};
