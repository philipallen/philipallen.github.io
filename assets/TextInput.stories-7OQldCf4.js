import{j as Q}from"./jsx-runtime-DQ32znRX.js";import{f as U}from"./index-Cnk2rnxF.js";import{T as X,e as Y}from"./index-COlUQA8Q.js";import{g as Z}from"./index-BgzBzW_7.js";import{T as $}from"./TextInput-YVV65-zK.js";const ee={title:"Components/Inputs/TextInput",component:$,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:Z(Y,24)},args:{onChange:U(),hasError:!1,readOnly:!1}},e={args:{labelProps:{"aria-label":"TextInput"}}},a={...e,args:{labelProps:{label:"Label for TextInput",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},r={...e,args:{labelProps:{label:"Label for TextInput",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},t={args:{prefix:"€",labelProps:{label:"Label for TextInput"}}},n={args:{icon:Q.jsx(X,{height:24,width:24}),labelProps:{label:"Label for TextInput"}}},o={args:{maxLength:15,labelProps:{label:"Label for TextInput"}}},s={...e,args:{hasError:!0,labelProps:{label:"Label for TextInput"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},l={...e,args:{defaultValue:"Small horse",labelProps:{label:"TextInput with default string"}}},i={...e,args:{defaultValue:12.1,labelProps:{label:"TextInput with default number"}}},c={...e,args:{defaultValue:["12.1","45.7","or a horse"],labelProps:{label:"TextInput with default string[]"}}},p={...e,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}},u={...e,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}};var b,d,m;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var P,x,I;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextInput",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,S,L;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var y,B,W;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var w,A,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(v=(A=o.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var R,E,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(E=s.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var O,_,H;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: "Small horse",
    labelProps: {
      label: "TextInput with default string"
    }
  }
}`,...(H=(_=l.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,j,C;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.1,
    labelProps: {
      label: "TextInput with default number"
    }
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,q,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ae=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","WithDefaultString","WithDefaultNumber","WithDefaultStringArray","Disabled","ReadOnly"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:p,ReadOnly:u,WithDefaultNumber:i,WithDefaultString:l,WithDefaultStringArray:c,WithError:s,WithHint:r,WithIcon:n,WithLabel:a,WithLimit:o,WithPrefix:t,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{e as B,p as D,u as R,le as T,a as W,r as a,t as b,n as c,o as d,s as e,l as f,i as g,c as h};
