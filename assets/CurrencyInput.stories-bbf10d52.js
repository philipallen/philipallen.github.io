import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as f}from"./index-c013ead5.js";import{I as C}from"./InputAdornment-eaf3c95c.js";import{f as S}from"./index-56ffe10b.js";import{a as T}from"./index-912b60f4.js";import{I as E}from"./Input-42544f73.js";import{E as I}from"./ExampleSpacer-355be632.js";import"./ExampleBlock.styled-a6f66e67.js";import{F as v}from"./FormExamplesContainer.styled-d117ee29.js";import{c as F,b as V,a as w}from"./commonProps-af166571.js";import{T as k}from"./Typography-a205704a.js";import"./_commonjsHelpers-725317a4.js";import"./ClearButton-794c34b2.js";import"./index-71d43b47.js";import"./FormElementContainer-b384cd0f.js";import"./index-7321e5ed.js";const N=a=>{const r=parseFloat(a);return isNaN(r)?!1:Math.sign(r)<=0},R=T(({...a})=>e.jsx(E,{...a}))`
  // For now we change the colour of the Input value here for negative numbers
  // We may want to liaise with designers in future as this scenario is not covered
  // in the styleguide
  & input {
    color: ${({value:a})=>N(a)?"#b20000":void 0};
  }
`,g={EUR:e.jsx(e.Fragment,{children:"€"}),STG:e.jsx(e.Fragment,{children:"£"}),GBP:e.jsx(e.Fragment,{children:"£"})},t=({onChange:a,value:r="",isNegativeAllowed:o=!1,hasTwoDecimalPlaces:u=!1,currency:s="EUR",...m})=>{const l=b=>{const j=S({value:b,maxDecimalPlaces:u?2:0,hasCommaSeperators:!0,min:o?-999999999:0});a&&a(j)};return e.jsx(R,{...m,type:"tel",value:r,onChange:l,startAdornment:e.jsx(C,{position:"start",children:g[s]})})};t.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{isNegativeAllowed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasTwoDecimalPlaces:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},currency:{required:!1,tsType:{name:"union",raw:"keyof typeof currencySymbols",elements:[{name:"literal",value:"EUR"},{name:"literal",value:"STG"},{name:"literal",value:"GBP"}]},description:"",defaultValue:{value:'"EUR"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const K={title:"Components/v1/CurrencyInput",component:t,argTypes:{...F,...V,currency:{control:{type:"select"},options:Object.keys(g)}}},c={decorators:[(a,{args:r})=>{const[o,u]=f.useState(r.value??"");return e.jsx(v,{children:e.jsx(t,{...r,value:o,onChange:(...s)=>{var l;(l=r.onChange)==null||l.call(r,...s);const[m]=s;u(m)}})})}],args:{name:"currency-input-name",currency:"EUR",...w}},n={};n.decorators=[()=>{const[a,r]=f.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(k,{variant:"headlineS",children:"Examples"}),e.jsx(v,{children:e.jsxs(I,{children:[e.jsx(t,{value:a,onChange:o=>r(o),labelText:"Controlled input"}),e.jsx(t,{placeholder:"Placholder text",value:"",labelText:"With placeholder"}),e.jsx(t,{value:"2,500",currency:"STG",labelText:"With positive number"}),e.jsx(t,{value:"2,500.12",currency:"STG",hasTwoDecimalPlaces:!0,labelText:"With 2 decimal places"}),e.jsx(t,{value:"-10,000",isNegativeAllowed:!0,labelText:"With negative number"}),e.jsx(t,{value:"-100",errorText:"Incorrect amount",labelText:"With negative number and error"})]})})]})}];var i,p,d;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=c.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,x,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const L=["Editable","Examples"];export{c as Editable,n as Examples,L as __namedExportsOrder,K as default};
