import{a as k,u as $,b as T,j as e}from"./index-b51be3ed.js";import{r as c}from"./index-c013ead5.js";import{F}from"./FormElementContainer-2c91b8e9.js";import{s as u}from"./index-56ffe10b.js";import{E as z}from"./ExampleSpacer-60219ff7.js";import"./ExampleBlock.styled-ad90202e.js";import{F as A}from"./FormExamplesContainer.styled-86e309be.js";import{c as B,a as D}from"./commonProps-af166571.js";import{T as G}from"./Typography-c4d9a36b.js";import"./_commonjsHelpers-725317a4.js";import"./index-c13ff105.js";const _=k.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`,I=k.input`
  ${({disabled:r,$backgroundSize:a})=>{const{tokens:s}=$(),{color:o}=s;function t(n){return n?o.groundGrey:o.digitalBlue}return T`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${o.groundGrey};
      border-radius: 2px;
      background-size: ${a};
      background-image: linear-gradient(
        ${t(r)},
        ${t(r)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${t(r)};
        border-radius: 50%;
        cursor: ${r?"auto":"pointer"};
      }
    `}}
`,i=({testID:r="slider-test",errorText:a,labelText:s,labelId:o,labelTestId:t,onChange:n,...l})=>{const{id:m,min:x=0,max:y=100,value:v=0}=l,E=()=>{const g=u(y)-u(x);return`${(u(v)-u(x))/g*100}% 100%`},w=g=>{if(typeof n=="function"){const h=u(g.target.value);n(h)}};return e.jsx(F,{errorText:a,labelText:s,elementId:m,labelId:o,labelTestId:t,children:e.jsx(_,{children:e.jsx(I,{...l,id:m,"data-testid":r,onChange:w,type:"range",$backgroundSize:E()})})})},U={title:"v1/Slider",component:i,argTypes:{onChange:{action:"changed"},...B}},p={decorators:[(r,{args:a})=>{const[s,o]=c.useState(0);return e.jsx(i,{...a,value:s,onChange:(...t)=>{var l;(l=a.onChange)==null||l.call(a,...t);const[n]=t;o(n)}})}],args:{disabled:!1,min:"0",max:"100",...D}},d={};d.decorators=[()=>{const[r,a]=c.useState(0),[s,o]=c.useState(25),[t,n]=c.useState(0),[l,m]=c.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(G,{variant:"headlineS",children:"Examples"}),e.jsx(A,{children:e.jsxs(z,{children:[e.jsx(i,{value:r,onChange:a}),e.jsx(i,{labelText:"Value 25 selected",value:s,onChange:o}),e.jsx(i,{labelText:"Disabled",disabled:!0,value:t,onChange:n}),e.jsx(i,{labelText:"With error",errorText:"This is not valid amount",value:l,onChange:m})]})})]})}];var b,S,V;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(0);
    return <Slider {...args} value={value} onChange={(...params: any) => {
      args.onChange?.(...params);
      const [newValue] = params;
      setValue(newValue);
    }} />;
  }],
  args: {
    disabled: false,
    min: "0",
    max: "100",
    ...commonStorybookArgs
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var C,f,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const X=["Editable","Examples"];export{p as Editable,d as Examples,X as __namedExportsOrder,U as default};
