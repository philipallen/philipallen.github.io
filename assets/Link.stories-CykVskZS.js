import{L as s}from"./index-BDdHs4nI.js";import{L as u}from"./Link-CEL1QOgH.js";const g={title:"Components/Inputs/Link",component:u,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:s.VARIANTS}},args:{href:"#",isUnderlined:!0,variant:s.DEFAULT_VARIANT}},e={args:{children:"Text link label"}},r={argTypes:{isDashed:{control:{disable:!0}}},args:{isDashed:!0,children:"Download report"}},n={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}};var o,a,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: {
    isDashed: {
      control: {
        disable: true
      }
    }
  },
  args: {
    isDashed: true,
    children: "Download report"
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    isUnderlined: {
      control: {
        disable: true
      }
    }
  },
  args: {
    isUnderlined: false,
    children: "Download report"
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const h=["Basic","Dashed","NoUnderline"],y=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Dashed:r,NoUnderline:n,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{e as B,r as D,y as L,n as N};
