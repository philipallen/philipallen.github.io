import{j as t}from"./jsx-runtime-DQ32znRX.js";import{g as u}from"./index-BSpjoQIR.js";import{a as h}from"./index-BgzBzW_7.js";import{T as d}from"./index-BkD9k7wm.js";import{T as m}from"./Typography-Dx-yaUty.js";function y(o){return o.slice(0,1).toUpperCase()+o.slice(1)}const{light:{color:g}}=u("boi"),T={title:"Components/Data Display/Typography",component:m,argTypes:{variant:{control:{type:"select"},options:d.VARIANTS},component:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p","span"],description:"Renders the text as a tag of your choice and overrides the default tag"},color:h(g),children:{control:{type:"text"}}}},e={args:{variant:"bodyM",children:"This is some text"}},r={argTypes:{variant:{control:{disable:!0}},component:{control:{disable:!0}},color:{control:{disable:!0}},children:{control:{disable:!0}}},render:function(){return t.jsx(t.Fragment,{children:d.VARIANTS.map(n=>t.jsx(m,{children:y(n),variant:n},n))})}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: "bodyM",
    children: "This is some text"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const b=["Basic","Examples"],R=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Examples:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{e as B,r as E,R as T};
