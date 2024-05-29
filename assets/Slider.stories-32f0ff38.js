import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as u}from"./index-c013ead5.js";import{F as w}from"./FormElementContainer-4f9351ea.js";import{a as V,u as $,b as q}from"./index-40766bf6.js";import{s as d}from"./index-56ffe10b.js";import{E as I}from"./ExampleSpacer-b4233bf6.js";import"./ExampleBlock.styled-ea77cafa.js";import{F}from"./FormExamplesContainer.styled-bf89e989.js";import{c as _,a as z}from"./commonProps-af166571.js";import{T as A}from"./Typography-ff2e0ce1.js";import"./_commonjsHelpers-725317a4.js";import"./index-f15beae1.js";const D=V.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`,N=V.input`
  ${({disabled:a,$backgroundSize:r})=>{const{tokens:s}=$(),{color:n}=s;function t(o){return o?n.groundGrey:n.digitalBlue}return q`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${n.groundGrey};
      border-radius: 2px;
      background-size: ${r};
      background-image: linear-gradient(
        ${t(a)},
        ${t(a)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${t(a)};
        border-radius: 50%;
        cursor: ${a?"auto":"pointer"};
      }
    `}}
`,l=({testID:a="slider-test",errorText:r,labelText:s,labelId:n,labelTestId:t,onChange:o,...i})=>{const{id:m,min:x=0,max:v=100,value:j=0}=i,k=()=>{const g=d(v)-d(x);return`${(d(j)-d(x))/g*100}% 100%`},E=g=>{if(typeof o=="function"){const h=d(g.target.value);o(h)}};return e.jsx(w,{errorText:r,labelText:s,elementId:m,labelId:n,labelTestId:t,children:e.jsx(D,{children:e.jsx(N,{...i,id:m,"data-testid":a,onChange:E,type:"range",$backgroundSize:k()})})})};l.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},testID:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"slider-test"',computed:!1}},labelTestId:{required:!1,tsType:{name:"string"},description:""},elementId:{required:!1,tsType:{name:"string"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},labelText:{required:!0,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const X={title:"Components/v1/Slider",component:l,argTypes:{onChange:{action:"changed"},..._}},p={decorators:[(a,{args:r})=>{const[s,n]=u.useState(0);return e.jsx(l,{...r,value:s,onChange:(...t)=>{var i;(i=r.onChange)==null||i.call(r,...t);const[o]=t;n(o)}})}],args:{disabled:!1,min:"0",max:"100",...z}},c={};c.decorators=[()=>{const[a,r]=u.useState(0),[s,n]=u.useState(25),[t,o]=u.useState(0),[i,m]=u.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(A,{variant:"headlineS",children:"Examples"}),e.jsx(F,{children:e.jsxs(I,{children:[e.jsx(l,{value:a,onChange:r}),e.jsx(l,{labelText:"Value 25 selected",value:s,onChange:n}),e.jsx(l,{labelText:"Disabled",disabled:!0,value:t,onChange:o}),e.jsx(l,{labelText:"With error",errorText:"This is not valid amount",value:i,onChange:m})]})})]})}];var f,b,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,C,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Y=["Editable","Examples"];export{p as Editable,c as Examples,Y as __namedExportsOrder,X as default};
