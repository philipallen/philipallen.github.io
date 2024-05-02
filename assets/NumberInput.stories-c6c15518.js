import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as h}from"./index-c013ead5.js";import{I as E}from"./Input-0898ee37.js";import{f as S}from"./index-56ffe10b.js";import{E as f}from"./ExampleSpacer-bebbd935.js";import"./ExampleBlock.styled-28f955b6.js";import{F as g}from"./FormExamplesContainer.styled-c554a265.js";import{c as y,b as T,a as I}from"./commonProps-af166571.js";import{T as F}from"./Typography-2ed3318f.js";import"./_commonjsHelpers-725317a4.js";import"./index-2b4c4340.js";import"./ClearButton-b4960495.js";import"./index-b1e3628a.js";import"./FormElementContainer-e117c707.js";import"./index-f9a152de.js";const a=({onChange:o,max:r,min:t=0,maxDecimalPlaces:s=0,value:m="",...c})=>{const l=j=>{const C=S({value:j,max:r,min:t,maxDecimalPlaces:s});o&&o(C)};return e.jsx(E,{...c,type:"tel",pattern:"[0-9]+([\\.,][0-9+])?",step:"0.01",value:m,onChange:l,inputMode:s>0?"decimal":"numeric"})},G={title:"v1/NumberInput",component:a,argTypes:{...y,...T}},p={decorators:[(o,{args:r})=>{const[t,s]=h.useState(r.value??"");return e.jsx(g,{children:e.jsx(a,{...r,value:t,onChange:(...m)=>{var l;(l=r.onChange)==null||l.call(r,...m);const[c]=m;s(c)}})})}],args:{name:"number-input-name",...I}},n={};n.decorators=[()=>{const[o,r]=h.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"headlineS",children:"Examples"}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx(a,{value:o,onChange:t=>r(t),maxDecimalPlaces:2,labelText:"Controlled input"}),e.jsx(a,{maxDecimalPlaces:2,value:"10.15",labelText:"Positive, with 2 decimal places"}),e.jsx(a,{maxDecimalPlaces:2,value:"-10.15",labelText:"Negative, with 2 decimal places"}),e.jsx(a,{errorText:"Incorrect amount",value:"7",labelText:"With an error"})]})})]})}];var i,u,x;p.parameters={...p.parameters,docs:{...(i=p.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value ?? "");
    return <FormExamplesContainer>
          <NumberInput {...args} value={value} onChange={(...params) => {
        args.onChange?.(...params);
        const [value] = params;
        setValue(value);
      }} />
        </FormExamplesContainer>;
  }],
  args: {
    name: "number-input-name",
    ...commonStorybookArgs
  }
}`,...(x=(u=p.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var d,v,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const H=["Editable","Examples"];export{p as Editable,n as Examples,H as __namedExportsOrder,G as default};
