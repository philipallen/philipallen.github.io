import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as c}from"./index-c013ead5.js";import{F as $}from"./FormElementContainer-e117c707.js";import{a as k,u as T,b as F}from"./index-2b4c4340.js";import{s as u}from"./index-56ffe10b.js";import{E as z}from"./ExampleSpacer-bebbd935.js";import"./ExampleBlock.styled-28f955b6.js";import{F as A}from"./FormExamplesContainer.styled-c554a265.js";import{c as B,a as D}from"./commonProps-af166571.js";import{T as G}from"./Typography-2ed3318f.js";import"./_commonjsHelpers-725317a4.js";import"./index-f9a152de.js";const _=k.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
`,I=k.input`
  ${({disabled:t,$backgroundSize:a})=>{const{tokens:s}=T(),{color:o}=s;function r(n){return n?o.groundGrey:o.digitalBlue}return F`
      -webkit-appearance: none;
      height: 8px;
      width: 100%;
      background: ${o.groundGrey};
      border-radius: 2px;
      background-size: ${a};
      background-image: linear-gradient(
        ${r(t)},
        ${r(t)}
      );
      background-repeat: no-repeat;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        background-color: ${r(t)};
        border-radius: 50%;
        cursor: ${t?"auto":"pointer"};
      }
    `}}
`,i=({testID:t="slider-test",errorText:a,labelText:s,labelId:o,labelTestId:r,onChange:n,...l})=>{const{id:m,min:x=0,max:y=100,value:v=0}=l,E=()=>{const g=u(y)-u(x);return`${(u(v)-u(x))/g*100}% 100%`},w=g=>{if(typeof n=="function"){const h=u(g.target.value);n(h)}};return e.jsx($,{errorText:a,labelText:s,elementId:m,labelId:o,labelTestId:r,children:e.jsx(_,{children:e.jsx(I,{...l,id:m,"data-testid":t,onChange:w,type:"range",$backgroundSize:E()})})})},X={title:"v1/Slider",component:i,argTypes:{onChange:{action:"changed"},...B}},p={decorators:[(t,{args:a})=>{const[s,o]=c.useState(0);return e.jsx(i,{...a,value:s,onChange:(...r)=>{var l;(l=a.onChange)==null||l.call(a,...r);const[n]=r;o(n)}})}],args:{disabled:!1,min:"0",max:"100",...D}},d={};d.decorators=[()=>{const[t,a]=c.useState(0),[s,o]=c.useState(25),[r,n]=c.useState(0),[l,m]=c.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(G,{variant:"headlineS",children:"Examples"}),e.jsx(A,{children:e.jsxs(z,{children:[e.jsx(i,{value:t,onChange:a}),e.jsx(i,{labelText:"Value 25 selected",value:s,onChange:o}),e.jsx(i,{labelText:"Disabled",disabled:!0,value:r,onChange:n}),e.jsx(i,{labelText:"With error",errorText:"This is not valid amount",value:l,onChange:m})]})})]})}];var b,S,V;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var C,f,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const Y=["Editable","Examples"];export{p as Editable,d as Examples,Y as __namedExportsOrder,X as default};
