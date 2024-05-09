import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as f}from"./index-c013ead5.js";import{I as r}from"./Input-6f65b783.js";import{I as i}from"./InputAdornment-b3860d1e.js";import{E as C}from"./ExampleSpacer-0f644691.js";import"./ExampleBlock.styled-f3034b98.js";import{F as b}from"./FormExamplesContainer.styled-2342a816.js";import{c as E,b as g,a as I}from"./commonProps-af166571.js";import{d as y}from"./index-b1e3628a.js";import{T as S}from"./Typography-df6f4efa.js";import"./_commonjsHelpers-725317a4.js";import"./index-22f9e29b.js";import"./ClearButton-cdfec58c.js";import"./FormElementContainer-c955e894.js";import"./index-7aa2f780.js";const H={title:"Components/v1/Input",component:r,argTypes:{...E,...g}},o={decorators:[(s,{args:t})=>{const[n,j]=f.useState(t.value??"");return e.jsx(b,{children:e.jsx(r,{...t,value:n,onChange:(...l)=>{var m;(m=t.onChange)==null||m.call(t,...l);const[v]=l;j(v)}})})}],args:{name:"input-name",disabled:!1,readOnly:!1,isError:!1,hasClearButton:!0,autoComplete:"off",labelText:"test",labelId:"123",labelTestId:"label-test-id",...I}},a={};a.decorators=[()=>{const[s,t]=f.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"headlineS",children:"Examples"}),e.jsx(b,{children:e.jsxs(C,{children:[e.jsx(r,{labelText:"Controlled input",value:s,onChange:n=>t(n),hasClearButton:!0}),e.jsx(r,{value:"With left adornment",hasClearButton:!0,startAdornment:e.jsx(i,{position:"start",children:"€"})}),e.jsx(r,{value:"With right adornment",endAdornment:e.jsx(i,{position:"end",children:e.jsx(y,{height:24,width:24})})}),e.jsx(r,{placeholder:"With placholder text",value:""}),e.jsx(r,{readOnly:!0,value:"Read only field"}),e.jsx(r,{disabled:!0,value:"Disabled field"}),e.jsx(r,{isError:!0,value:"In an error state"}),e.jsx(r,{value:"With an error message",errorText:"Error occurred"}),e.jsx(r,{value:"Input with label",labelText:"With a label"})]})})]})}];var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Editable","Examples"];export{o as Editable,a as Examples,J as __namedExportsOrder,H as default};
