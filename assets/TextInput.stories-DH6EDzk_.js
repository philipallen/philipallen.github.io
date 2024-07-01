import{j as Q}from"./jsx-runtime-DQ32znRX.js";import{f as U}from"./index-Cnk2rnxF.js";import{T as X,d as Y}from"./index-B7-70OtY.js";import{g as Z}from"./index-C-NzY7TH.js";import{T as $}from"./TextInput-Cn48XiHn.js";const ee={title:"Components/Inputs/TextInput",component:$,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:Z(Y,24)},args:{onChange:U(),hasError:!1,readOnly:!1}},e={args:{labelProps:{"aria-label":"TextInput"}}},r={...e,args:{labelProps:{label:"Label for TextInput"}}},a={...e,args:{labelProps:{label:"Label for TextInput",labelHint:"Additional information"}}},t={args:{prefix:"€",labelProps:{label:"Label for TextInput"}}},s={args:{icon:Q.jsx(X,{height:24,width:24}),labelProps:{label:"Label for TextInput"}}},o={args:{maxLength:15,labelProps:{label:"Label for TextInput"}}},n={...e,args:{hasError:!0,labelProps:{label:"Label for TextInput"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},l={...e,args:{defaultValue:"Small horse",labelProps:{label:"TextInput with default string"}}},i={...e,args:{defaultValue:12.1,labelProps:{label:"TextInput with default number"}}},c={...e,args:{defaultValue:["12.1","45.7","or a horse"],labelProps:{label:"TextInput with default string[]"}}},p={...e,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}},u={...e,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}};var b,m,d;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,I,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput",
      labelHint: "Additional information"
    }
  }
}`,...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var P,S,L;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var W,y,B;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,E,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var D,O,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Label for TextInput"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var A,V,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: "Small horse",
    labelProps: {
      label: "TextInput with default string"
    }
  }
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var H,R,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.1,
    labelProps: {
      label: "TextInput with default number"
    }
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var k,q,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: ["12.1", "45.7", "or a horse"],
    labelProps: {
      label: "TextInput with default string[]"
    }
  }
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var z,M,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(F=(M=p.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const re=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","WithDefaultString","WithDefaultNumber","WithDefaultStringArray","Disabled","ReadOnly"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:p,ReadOnly:u,WithDefaultNumber:i,WithDefaultString:l,WithDefaultStringArray:c,WithError:n,WithHint:a,WithIcon:s,WithLabel:r,WithLimit:o,WithPrefix:t,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{e as B,p as D,u as R,le as T,r as W,a,t as b,s as c,o as d,n as e,l as f,i as g,c as h};
