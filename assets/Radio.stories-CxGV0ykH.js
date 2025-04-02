import{f as h}from"./index-D0csYWE-.js";import{R}from"./Radio-1w2UuKTi.js";const f={title:"Components/Inputs/Radio",component:R,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"}},args:{checked:!1,disabled:!1,hasError:!1,onChange:h()}},r={args:{labelProps:{"aria-label":"Radio label"}}},e={...r,args:{disabled:!0,labelProps:{label:"Radio label"}}},a={...r,args:{labelProps:{label:"Radio label"}}},o={...r,args:{hasError:!0,labelProps:{label:"Radio label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var s,l,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Radio label"
    }
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var t,i,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    labelProps: {
      label: "Radio label"
    }
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,b,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Radio label"
    }
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Radio label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const P=["Basic","Disabled","WithLabel","WithError"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:e,WithError:o,WithLabel:a,__namedExportsOrder:P,default:f},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,B as R,a as W,o as a};
