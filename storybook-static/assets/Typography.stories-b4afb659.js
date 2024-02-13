import{j as n,g as m}from"./index-771fcc08.js";import{c as u}from"./index-56ffe10b.js";import{a as g}from"./index-1225df13.js";import{b as p}from"./index-d9c054de.js";import{T as d}from"./Typography-4da87cb1.js";const{light:{color:h}}=m("boi"),y={title:"DataDisplay/Typography",component:d,argTypes:{variant:{control:{type:"select"},options:p},component:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p","span"]},color:g(h),children:{control:{type:"text"}}}},e={args:{variant:"bodyM",testID:"fake-data-test-id",children:"This is some text"}},r={argTypes:{variant:{control:{disable:!0}},component:{control:{disable:!0}},color:{control:{disable:!0}},children:{control:{disable:!0}}},render:function(){return n.jsx(n.Fragment,{children:p.map(t=>n.jsx(d,{children:u(t),variant:t},t))})}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "bodyM",
    testID: "fake-data-test-id",
    children: "This is some text"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        {TYPOGRAPHY_VARIANTS.map(variant => <Typography key={variant} children={capitalizeString(variant)} variant={variant} />)}
      </>;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const T=["Basic","Examples"],A=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Examples:r,__namedExportsOrder:T,default:y},Symbol.toStringTag,{value:"Module"}));export{r as E,A as T};
