import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{g as y}from"./index-BHlkTKmU.js";import{k as g}from"./index-DTdU3ZNX.js";import{T as a}from"./index-WLaP1tkh.js";import{T as m}from"./Typography-CTcPHIiy.js";function h(e){return e.slice(0,1).toUpperCase()+e.slice(1)}const{light:{color:T}}=y("boi"),f={title:"Components/Data Display/Typography",component:m,decorators:[(e,{args:r,globals:u})=>(u.isHeadingVariant=a.HEADING_VARIANTS.includes(r.variant),n.jsx(e,{}))],argTypes:{variant:{control:{type:"select"},options:a.VARIANTS},fontFamily:{control:{type:"select"},options:a.FONT_FAMILIES,if:{global:"isHeadingVariant",truthy:!1}},component:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p","span"],description:"Renders the text as a tag of your choice and overrides the default tag"},color:g(T),children:{control:{type:"text"}}}},o={args:{variant:"bodyM",children:"This is some text"}},t={argTypes:{variant:{control:{disable:!0}},component:{control:{disable:!0}},color:{control:{disable:!0}},children:{control:{disable:!0}}},render:function(){return n.jsx(n.Fragment,{children:a.VARIANTS.map(r=>n.jsx(m,{children:h(r),variant:r},r))})}};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "bodyM",
    children: "This is some text"
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    },
    component: {
      control: {
        disable: true
      }
    },
    color: {
      control: {
        disable: true
      }
    },
    children: {
      control: {
        disable: true
      }
    }
  },
  render: function Render() {
    return <>
        {CoreTypography.VARIANTS.map(variant => <Typography key={variant} children={capitalizeString(variant)} variant={variant} />)}
      </>;
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const b=["Basic","Examples"],R=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Examples:t,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{o as B,t as E,R as T};
