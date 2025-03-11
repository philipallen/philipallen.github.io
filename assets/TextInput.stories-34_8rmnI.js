import{j as r}from"./jsx-runtime-DQ32znRX.js";import{f as ye}from"./index-Cnk2rnxF.js";import{T as Le,f as Se}from"./index-BYwLR37K.js";import{g as We}from"./index-BgzBzW_7.js";import{r as t}from"./index-DH5ua8nC.js";import{u as ve}from"./index-CzvSJj6w.js";import{T as Ae,P as Be,C as De,I as we}from"./TextInput.styled-D6gbZfr2.js";import{I as je}from"./InputLabelTop-D1rAIOKb.js";import{I as Re}from"./InputWrapper-C7of_464.js";import{I as Ce}from"./InlineAlert-D3r_vEqv.js";import{O as Ee}from"./OuterField-l9eRKZdu.js";import{C as Oe}from"./CharactersCounter-OqJnolXU.js";import{b as He}from"./AlertAssociationProps-C5Idu2_l.js";const g=t.forwardRef((x,be)=>{var w;const{id:I,hasError:fe,prefix:P,icon:T,onChange:f,testID:a="input",labelProps:y,alertProps:L,noCounter:he,...h}=x,S=t.useId(),W=t.useId(),v=t.useId(),{labelHint:ge}=y,{maxLength:A}=h,B=!he&&A,{tokens:{textInput:D}}=ve(),[xe,Ie]=t.useState(((w=h.value||h.defaultValue)==null?void 0:w.length)||0),Pe=He(v,x,ge?W:void 0),Te=t.useCallback(j=>{Ie(j.target.value.length),f==null||f(j)},[f]);return r.jsxs(Re,{gap:B?"4px":"8px",alert:L?r.jsx(Ce,{id:v,...L,testID:`${a}-alert`}):void 0,children:[r.jsx(je,{...y,labelHintID:W,htmlFor:I||S,"data-testid":`${a}-label`,children:r.jsx(Ee,{hasError:fe,children:r.jsxs(Ae,{children:[P?r.jsx(Be,{variant:D.prefix.typography.variant,fontFamily:D.prefix.typography.fontFamily,testID:`${a}-prefix`,children:P}):void 0,r.jsx(De,{...h,...Pe,ref:be,id:I||S,onChange:Te,"data-testid":a}),T?r.jsx(we,{"data-testid":`${a}-icon-wrapper`,children:T}):void 0]})})}),B?r.jsx(Oe,{length:xe,maxLength:A,testID:`${a}-characters-counter`}):void 0]})});g.displayName="TextInput";g.__docgenInfo={description:"",methods:[],displayName:"TextInput"};const _e={title:"Components/Inputs/TextInput",component:g,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"},icon:We(Se,24)},args:{onChange:ye(),hasError:!1,readOnly:!1}},e={args:{labelProps:{"aria-label":"TextInput"}}},o={...e,args:{labelProps:{label:"Label for TextInput",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={...e,args:{labelProps:{label:"Label for TextInput",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{prefix:"€",labelProps:{label:"Label for TextInput"}}},l={args:{icon:r.jsx(Le,{height:24,width:24}),labelProps:{label:"Label for TextInput"}}},i={args:{maxLength:15,labelProps:{label:"Label for TextInput"}}},p={...e,args:{hasError:!0,labelProps:{label:"Label for TextInput"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},c={...e,args:{defaultValue:"Small horse",labelProps:{label:"TextInput with default string"}}},u={...e,args:{defaultValue:12.1,labelProps:{label:"TextInput with default number"}}},d={...e,args:{defaultValue:["12.1","45.7","or a horse"],labelProps:{label:"TextInput with default string[]"}}},m={...e,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}},b={...e,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextInput"}}};var R,C,E;e.parameters={...e.parameters,docs:{...(R=e.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextInput"
    }
  }
}`,...(E=(C=e.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,H,_;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(H=o.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var V,k,$;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(k=n.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var F,N,q;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prefix: "€",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var z,M,G;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: <Icons.TickIcon height={24} width={24} />,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,K,Q;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: "Small horse",
    labelProps: {
      label: "TextInput with default string"
    }
  }
}`,...(re=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.1,
    labelProps: {
      label: "TextInput with default number"
    }
  }
}`,...(oe=(te=u.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,le;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: ["12.1", "45.7", "or a horse"],
    labelProps: {
      label: "TextInput with default string[]"
    }
  }
}`,...(le=(se=d.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,pe,ce;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(ce=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,de,me;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextInput"
    }
  }
}`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Ve=["Basic","WithLabel","WithHint","WithPrefix","WithIcon","WithLimit","WithError","WithDefaultString","WithDefaultNumber","WithDefaultStringArray","Disabled","ReadOnly"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:m,ReadOnly:b,WithDefaultNumber:u,WithDefaultString:c,WithDefaultStringArray:d,WithError:p,WithHint:n,WithIcon:l,WithLabel:o,WithLimit:i,WithPrefix:s,__namedExportsOrder:Ve,default:_e},Symbol.toStringTag,{value:"Module"}));export{e as B,m as D,b as R,Ze as T,o as W,n as a,s as b,l as c,i as d,p as e,c as f,u as g,d as h};
