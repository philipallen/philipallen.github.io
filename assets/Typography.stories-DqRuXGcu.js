import{j as n}from"./jsx-runtime-DQ32znRX.js";import{g as m}from"./index-CZQU1x5t.js";import{c as h}from"./index--zbiGJy6.js";import{a as y}from"./index-C-NzY7TH.js";import{T as l}from"./index-D0yVWoN6.js";import{T as d}from"./Typography-BQS1i-up.js";const{light:{color:g}}=m("boi"),u={title:"Components/Data Display/Typography",component:d,argTypes:{variant:{control:{type:"select"},options:l.VARIANTS},component:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p","span"],description:"Renders the text as a tag of your choice and overrides the default tag"},color:y(g),children:{control:{type:"text"}}}},e={args:{variant:"bodyM",children:"This is some text"}},r={argTypes:{variant:{control:{disable:!0}},component:{control:{disable:!0}},color:{control:{disable:!0}},children:{control:{disable:!0}}},render:function(){return n.jsx(n.Fragment,{children:l.VARIANTS.map(o=>n.jsx(d,{children:h(o),variant:o},o))})}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "bodyM",
    children: "This is some text"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const T=["Basic","Examples"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Examples:r,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,r as E,_ as T};
