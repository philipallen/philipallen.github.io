import{j as r}from"./jsx-runtime-BkBIjjFT.js";import{f as ye}from"./index-D0csYWE-.js";import{T as Le,i as Se}from"./index-By1nkff0.js";import{g as We}from"./index-BUbIWl_8.js";import{r as t}from"./index-KmaxkdDD.js";import{u as ve}from"./index-BMLrhZi-.js";import{T as Ae,P as Be,C as we,I as De}from"./TextInput.styled-BbNlIVDY.js";import{I as je}from"./InputLabelTop-B9I_xCKv.js";import{I as Re,a as Ee}from"./InputAlerts-NPIxsvOL.js";import{O as Ce}from"./OuterField-CvC33mqu.js";import{C as Oe}from"./CharactersCounter-D50G4CkP.js";import{b as He}from"./AlertAssociationProps-CEhVpbTc.js";const be=t.forwardRef((x,me)=>{var w;const{id:I,hasError:he,prefix:P,icon:T,onChange:h,testID:a="input",labelProps:y,alertProps:f,noCounter:fe,...g}=x,L=t.useId(),S=t.useId(),W=t.useId(),{labelHint:ge}=y,{maxLength:v}=g,A=!fe&&v,{tokens:{textInput:B}}=ve(),[xe,Ie]=t.useState(((w=g.value||g.defaultValue)==null?void 0:w.length)||0),Pe=He(W,x,ge?S:void 0),Te=t.useCallback(D=>{Ie(D.target.value.length),h==null||h(D)},[h]);return r.jsxs(Re,{gap:A?"4px":"8px",alert:f&&r.jsx("div",{id:W,"data-testid":`${a}-alerts`,children:r.jsx(Ee,{alerts:Array.isArray(f)?f:[f]})}),children:[r.jsx(je,{...y,labelHintID:S,htmlFor:I||L,"data-testid":`${a}-label`,children:r.jsx(Ce,{hasError:he,children:r.jsxs(Ae,{children:[P?r.jsx(Be,{variant:B.prefix.typography.variant,fontFamily:B.prefix.typography.fontFamily,testID:`${a}-prefix`,children:P}):void 0,r.jsx(we,{...g,...Pe,ref:me,id:I||L,onChange:Te,"data-testid":a}),T?r.jsx(De,{"data-testid":`${a}-icon-wrapper`,children:T}):void 0]})})}),A?r.jsx(Oe,{length:xe,maxLength:v,testID:`${a}-characters-counter`}):void 0]})});be.displayName="TextInput";const Ve={title:"Components/Inputs/TextInput",component:be,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:We(Se,24)},args:{onChange:ye(),hasError:!1,readOnly:!1}},e={args:{labelProps:{"aria-label":"TextInput"}}},o={...e,args:{labelProps:{label:"Label for TextInput",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={...e,args:{labelProps:{label:"Label for TextInput",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={args:{prefix:"€",labelProps:{label:"Label for TextInput"}}},l={args:{icon:r.jsx(Le,{height:24,width:24}),labelProps:{label:"Label for TextInput"}}},i={args:{maxLength:15,labelProps:{label:"Label for TextInput"}}},p={...e,args:{hasError:!0,labelProps:{label:"Label for TextInput"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},c={...e,args:{defaultValue:"Small horse",labelProps:{label:"TextInput with default string"}}},u={...e,args:{defaultValue:12.1,labelProps:{label:"TextInput with default number"}}},d={...e,args:{defaultValue:["12.1","45.7","or a horse"],labelProps:{label:"TextInput with default string[]"}}},b={...e,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}},m={...e,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}};var j,R,E;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(E=(R=e.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var C,O,H;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(O=o.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var V,_,k;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var $,F,N;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(N=(F=n.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var q,z,M;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(M=(z=l.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var G,J,K;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: "Small horse",
    labelProps: {
      label: "TextInput with default string"
    }
  }
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.1,
    labelProps: {
      label: "TextInput with default number"
    }
  }
}`,...(te=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,ne;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: ["12.1", "45.7", "or a horse"],
    labelProps: {
      label: "TextInput with default string[]"
    }
  }
}`,...(ne=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(pe=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ce,ue,de;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(de=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const _e=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","WithDefaultString","WithDefaultNumber","WithDefaultStringArray","Disabled","ReadOnly"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:b,ReadOnly:m,WithDefaultNumber:u,WithDefaultString:c,WithDefaultStringArray:d,WithError:p,WithHint:s,WithIcon:l,WithLabel:o,WithLimit:i,WithPrefix:n,__namedExportsOrder:_e,default:Ve},Symbol.toStringTag,{value:"Module"}));export{e as B,b as D,m as R,Ye as T,o as W,s as a,n as b,l as c,i as d,p as e,c as f,u as g,d as h};
