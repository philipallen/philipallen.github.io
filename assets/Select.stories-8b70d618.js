import{a as m,u as k,b as p,j as e}from"./index-e4c57c99.js";import{r as g}from"./index-c013ead5.js";import{F as z}from"./FormElementContainer-55dca9b7.js";import{c as R}from"./index-e1b96a7a.js";import{E as _}from"./ExampleSpacer-d4f2a7bb.js";import"./ExampleBlock.styled-82e3c567.js";import{F as T}from"./FormExamplesContainer.styled-88f00d9c.js";import{c as A,a as W}from"./commonProps-af166571.js";import{T as P}from"./Typography-2bd14f01.js";import"./_commonjsHelpers-725317a4.js";import"./index-b62ae16e.js";const q=m.select`
  ${({$isError:t})=>{const{tokens:o}=k(),{fontFamily:d,formElementContainer:i}=o;return[p`
        max-width: ${i.maxWidth};
        height: ${i.height};
        font-family: "${d.OpenSansRegular}";
        font-size: 16px;
        outline: none;
        border: 1px solid #ccc;
        cursor: pointer;
        padding: 0px 2.5rem 0px 8px;
        text-align: left;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &:focus {
          background-color: #ffffff;
          border: 1px solid #00f;
        }

        &:active {
          background-color: #ffffff;
          border: 1px solid #00f;
        }

        &:disabled {
          border: 1px solid #ccc;
          background-color: #fff;
          opacity: 0.5;
          color: #a0a1a3;
          cursor: default;
        }
      `,t&&p`
          &,
          &:focus,
          &:active {
            border: 1px solid #b20000;
            background-color: #ffffff;
          }
        `]}}
`;m.div`
  ${()=>{const{tokens:t}=k(),{fontFamily:o}=t;return p`
      font-family: "${o.OpenSansRegular}";
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
      color: #b20000;
      padding-top: 5px;
      text-align: left;
      width: 100%;
    `}}
`;const B=m(R)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 24px;
  width: 24px;
  pointer-events: none;
  color: #161616;
`,a=({placeholder:t="Please Select",defaultSelectedId:o="",options:d,isError:i,errorText:f,labelText:C,labelId:F,labelTestId:I,onChange:x,testID:O,...u})=>{const{id:$}=u,[w,b]=g.useState(o||"");g.useEffect(()=>{b(o)},[o]);const D=r=>{const l=r.target.value;b(l),x&&x(l)};return e.jsxs(z,{errorText:f,labelText:C,elementId:$,labelId:F,labelTestId:I,children:[e.jsxs(q,{...u,"data-testid":O,$isError:i||!!f,onChange:D,value:w,children:[o?null:e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t}),d.map((r,l)=>e.jsx("option",{id:r.id??l.toString(),value:r.id,children:r.value},r.value))]}),e.jsx(B,{})]})},n=[{id:"1",value:"Option1"},{id:"2",value:"Option2"},{id:"3",value:"Option3"},{id:"4",value:"Option4"}],Y={title:"v1/Select",component:a,argTypes:{...A,options:{options:[],control:{type:"select"}},defaultSelectedId:{control:{type:"text"}},isError:{control:{type:"boolean"},options:[!0,!1]},errorText:{control:{type:"text"}},onChange:{action:"changed"}}},c={decorators:[(t,{args:o})=>e.jsx(T,{children:e.jsx(a,{...o,options:n})})],args:{disabled:!1,name:"select-name",isError:!1,labelText:"",labelId:"123",labelTestId:"label-test-id",...W}},s={};s.decorators=[()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"headlineS",children:"Examples"}),e.jsx(T,{children:e.jsxs(_,{children:[e.jsx(a,{options:n}),e.jsx(a,{options:n,labelText:"Default option selected",defaultSelectedId:"4"}),e.jsx(a,{options:n,labelText:"Disabled",disabled:!0}),e.jsx(a,{options:n,labelText:"With error",isError:!0,errorText:"This is not valid amount"})]})})]})];var h,E,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => <FormExamplesContainer>
        <Select {...args} options={fakeOptions} />
      </FormExamplesContainer>],
  args: {
    disabled: false,
    name: "select-name",
    isError: false,
    labelText: "",
    labelId: "123",
    labelTestId: "label-test-id",
    ...commonStorybookArgs
  }
}`,...(v=(E=c.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,j,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Z=["Editable","Examples"];export{c as Editable,s as Examples,Z as __namedExportsOrder,Y as default};
