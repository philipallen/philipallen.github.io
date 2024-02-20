import{a as C,j as e}from"./index-e4c57c99.js";import{r as v}from"./index-c013ead5.js";import{I as S}from"./InputAdornment-196a3b91.js";import{f as E}from"./index-56ffe10b.js";import{I as T}from"./Input-421b3161.js";import{E as I}from"./ExampleSpacer-d4f2a7bb.js";import"./ExampleBlock.styled-82e3c567.js";import{F as g}from"./FormExamplesContainer.styled-88f00d9c.js";import{c as F,b as k,a as w}from"./commonProps-af166571.js";import{T as V}from"./Typography-2bd14f01.js";import"./_commonjsHelpers-725317a4.js";import"./ClearButton-f6575b19.js";import"./index-e1b96a7a.js";import"./FormElementContainer-55dca9b7.js";import"./index-b62ae16e.js";const W=t=>{const r=parseFloat(t);return isNaN(r)?!1:Math.sign(r)<=0},A=C(({...t})=>e.jsx(T,{...t}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:t})=>W(t)?"#b20000":void 0};
  }
`,b={EUR:e.jsx(e.Fragment,{children:"€"}),STG:e.jsx(e.Fragment,{children:"£"}),GBP:e.jsx(e.Fragment,{children:"£"})},o=({onChange:t,value:r="",isNegativeAllowed:a=!1,hasTwoDecimalPlaces:m=!1,currency:s="EUR",...u})=>{const l=j=>{const f=E({value:j,maxDecimalPlaces:m?2:0,hasCommaSeperators:!0,min:a?-999999999:0});t&&t(f)};return e.jsx(A,{...u,type:"tel",value:r,onChange:l,startAdornment:e.jsx(S,{position:"start",children:b[s]})})},J={title:"v1/CurrencyInput",component:o,argTypes:{...F,...k,currency:{control:{type:"select"},options:Object.keys(b)}}},c={decorators:[(t,{args:r})=>{const[a,m]=v.useState(r.value??"");return e.jsx(g,{children:e.jsx(o,{...r,value:a,onChange:(...s)=>{var l;(l=r.onChange)==null||l.call(r,...s);const[u]=s;m(u)}})})}],args:{name:"currency-input-name",currency:"EUR",...w}},n={};n.decorators=[()=>{const[t,r]=v.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(V,{variant:"headlineS",children:"Examples"}),e.jsx(g,{children:e.jsxs(I,{children:[e.jsx(o,{value:t,onChange:a=>r(a),labelText:"Controlled input"}),e.jsx(o,{placeholder:"Placholder text",value:"",labelText:"With placeholder"}),e.jsx(o,{value:"2,500",currency:"STG",labelText:"With positive number"}),e.jsx(o,{value:"2,500.12",currency:"STG",hasTwoDecimalPlaces:!0,labelText:"With 2 decimal places"}),e.jsx(o,{value:"-10,000",isNegativeAllowed:!0,labelText:"With negative number"}),e.jsx(o,{value:"-100",errorText:"Incorrect amount",labelText:"With negative number and error"})]})})]})}];var i,p,d;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value ?? "");
    return <FormExamplesContainer>
          <CurrencyInput {...args} value={value} onChange={(...params) => {
        args.onChange?.(...params);
        const [value] = params;
        setValue(value);
      }} />
        </FormExamplesContainer>;
  }],
  args: {
    name: "currency-input-name",
    currency: "EUR",
    ...commonStorybookArgs
  }
}`,...(d=(p=c.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const K=["Editable","Examples"];export{c as Editable,n as Examples,K as __namedExportsOrder,J as default};