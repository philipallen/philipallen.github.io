import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{f as ee}from"./index-D0csYWE-.js";import{p as te,i as re}from"./index-qhhwF6MA.js";import{g as ae}from"./index-BQlaamZD.js";import{r as b}from"./index-KmaxkdDD.js";import{$ as oe}from"./TextField-C4j0Nh0A.js";import{C as se,I as ne}from"./TextInputV2.styled-B04IJZ78.js";import{I as le,a as ie}from"./InputAlerts-BgCOBeSp.js";import{I as ce}from"./InputLabelTopV2-Cca_2KhX.js";import{O as pe}from"./OuterFieldV2-CvQ6t54L.js";import{C as ue}from"./CharactersCounter-DBhpAW1O.js";import{$ as de}from"./utils-l5KLAjAw.js";const z=b.forwardRef((M,N)=>{const{labelProps:G,alerts:m,startSlot:J,endSlot:K,withCharacterCounter:Q,onChange:p,testID:h="text-input",...g}=M,{value:u,defaultValue:d,maxLength:I}=g,f=de(N);function U(){var t;(t=f.current)==null||t.focus()}const[X,Y]=b.useState(()=>(u==null?void 0:u.length)||(d==null?void 0:d.length)||0),Z=b.useCallback(t=>{Y(t.length),p==null||p(t)},[p]);return e.jsx(oe,{...g,onChange:Z,children:e.jsx(le,{alert:m&&e.jsx(ie,{alerts:m}),children:e.jsxs(se,{children:[e.jsx(ce,{...G,children:e.jsx(pe,{startSlot:J,endSlot:K,focusElement:U,children:e.jsx(ne,{ref:f,"data-testid":h})})}),I!==void 0&&Q&&e.jsx(ue,{length:X,maxLength:I,testID:`${h}-character-counter`})]})})})});z.displayName="TextInputV2";const be={title:"Components/Inputs/TextInputV2",component:z,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},startSlot:{control:"text"},endSlot:ae(re,24),maxLength:{control:"number"},withCharacterCounter:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:ee()}},r={args:{"aria-label":"TextInput label"}},a={args:{labelProps:{label:"TextInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{labelProps:{label:"TextInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{isDisabled:!0,labelProps:{label:"TextInput label"}}},n={args:{isInvalid:!0,labelProps:{label:"TextInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},l={args:{maxLength:20,withCharacterCounter:!0,labelProps:{label:"TextInput label"}}},i={args:{startSlot:"€",labelProps:{label:"TextInput label"}}},c={args:{endSlot:e.jsx(te,{color:"#429448"}),labelProps:{label:"TextInput label"}}};var x,P,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextInput label"
  }
}`,...(T=(P=r.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var S,C,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "TextInput label",
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
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,j,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "TextInput label",
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
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,W,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var L,R,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "TextInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var $,E,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    maxLength: 20,
    withCharacterCounter: true,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var H,O,V;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    startSlot: "€",
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var k,F,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    endSlot: <Icons.CircledTickFilledIcon color="#429448" />,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const me=["Basic","WithLabel","WithHint","Disabled","Invalid","WithLimit","WithStartSlot","WithEndSlot"],we=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Disabled:s,Invalid:n,WithEndSlot:c,WithHint:o,WithLabel:a,WithLimit:l,WithStartSlot:i,__namedExportsOrder:me,default:be},Symbol.toStringTag,{value:"Module"}));export{r as B,s as D,n as I,we as T,a as W,o as a,l as b,i as c,c as d};
