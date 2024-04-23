import{j as P}from"./index-e76b8df1.js";import{a as T}from"./index-583b5bb5.js";import{R as n}from"./Radio-632d195b.js";const{useArgs:M}=__STORYBOOK_MODULE_CLIENT_API__,R={title:"Inputs/Radio",component:n,render:function(y){const[,_]=M();function E(o){_({checked:o.target.checked}),T("onChange")(o)}return P.jsx(n,{...y,onChange:E})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"}},args:{checked:!1,disabled:!1,hasError:!1}},r={args:{labelProps:{"aria-label":"Try Me!"}}},e={...r,args:{disabled:!0,labelProps:{label:"Try Me!"}}},a={...r,args:{labelProps:{label:"Try Me!"}}},s={...r,args:{hasError:!0,labelProps:{label:"Try Me!"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var t,l,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Try Me!"
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    labelProps: {
      label: "Try Me!"
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,u,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Try Me!"
    }
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const S=["Basic","Disabled","WithLabel","WithError"],W=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:e,WithError:s,WithLabel:a,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,W as R,a as W,s as a,R as m};
