import{f as y}from"./index-Cnk2rnxF.js";import{R as h}from"./Radio-7zUOngsH.js";const P={title:"Components/Inputs/Radio",component:h,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"}},args:{onChange:y()}},r={args:{labelProps:{"aria-label":"Try Me!"}}},e={...r,args:{disabled:!0,labelProps:{label:"Try Me!"}}},a={...r,args:{labelProps:{label:"Try Me!"}}},s={...r,args:{hasError:!0,labelProps:{label:"Try Me!"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Try Me!"
    }
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    labelProps: {
      label: "Try Me!"
    }
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Try Me!"
    }
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Try Me!"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const T=["Basic","Disabled","WithLabel","WithError"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:e,WithError:s,WithLabel:a,__namedExportsOrder:T,default:P},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,E as R,a as W,s as a,P as m};
