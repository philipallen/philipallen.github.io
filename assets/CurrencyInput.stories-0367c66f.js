import{a as C,j as e}from"./index-b51be3ed.js";import{r as v}from"./index-c013ead5.js";import{I as S}from"./InputAdornment-82ccfcd2.js";import{f as E}from"./index-56ffe10b.js";import{I as T}from"./Input-0462cc28.js";import{E as I}from"./ExampleSpacer-60219ff7.js";import"./ExampleBlock.styled-ad90202e.js";import{F as g}from"./FormExamplesContainer.styled-86e309be.js";import{c as F,b as k,a as w}from"./commonProps-af166571.js";import{T as V}from"./Typography-c4d9a36b.js";import"./_commonjsHelpers-725317a4.js";import"./ClearButton-a36c9a00.js";import"./index-3215a802.js";import"./FormElementContainer-2c91b8e9.js";import"./index-c13ff105.js";const W=t=>{const r=parseFloat(t);return isNaN(r)?!1:Math.sign(r)<=0},A=C(({...t})=>e.jsx(T,{...t}))`
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
