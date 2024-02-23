import{j as _}from"./index-d88b625c.js";import{a as E}from"./index-583b5bb5.js";import{R as n}from"./Radio-b7714a8f.js";const{useArgs:P}=__STORYBOOK_MODULE_CLIENT_API__,R={title:"Inputs/Radio",component:n,render:function(T){const[,M]=P();function f(o){M({checked:o.target.checked}),E("onChange")(o)}return _.jsx(n,{...T,onChange:f})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"}},args:{checked:!1,disabled:!1,hasError:!1}},r={args:{labelProps:{"aria-label":"Try Me!"}}},e={...r,args:{disabled:!0,labelProps:{label:"Try Me!","aria-label":"Try Me!"}}},a={...r,args:{labelProps:{label:"Try Me!","aria-label":"Try Me!"}}},s={...r,args:{hasError:!0,labelProps:{label:"Try Me!","aria-label":"Try Me!"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var l,t,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Try Me!"
    }
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    labelProps: {
      label: "Try Me!",
      "aria-label": "Try Me!"
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,u,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Try Me!",
      "aria-label": "Try Me!"
    }
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Try Me!",
      "aria-label": "Try Me!"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const S=["Basic","Disabled","WithLabel","WithError"],W=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:e,WithError:s,WithLabel:a,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,W as R,a as W,s as a,R as m};
