import{j as o}from"./jsx-runtime-6eef64cc.js";import{g as m}from"./index-1940508f.js";import{c as y}from"./index-af65c48d.js";import{a as g}from"./index-aa3a2926.js";import{T as l}from"./index-f15beae1.js";import{T as d}from"./Typography-5392f73e.js";const{light:{color:h}}=m("boi"),u={title:"Components/DataDisplay/Typography",component:d,argTypes:{variant:{control:{type:"select"},options:l.VARIANTS},component:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p","span"]},color:g(h),children:{control:{type:"text"}}}},e={args:{variant:"bodyM",testID:"fake-data-test-id",children:"This is some text"}},r={argTypes:{variant:{control:{disable:!0}},component:{control:{disable:!0}},color:{control:{disable:!0}},children:{control:{disable:!0}}},render:function(){return o.jsx(o.Fragment,{children:l.VARIANTS.map(t=>o.jsx(d,{children:y(t),variant:t},t))})}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "bodyM",
    testID: "fake-data-test-id",
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const T=["Basic","Examples"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Examples:r,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{r as E,j as T};
