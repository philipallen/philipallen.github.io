import{j as e}from"./jsx-runtime-DQ32znRX.js";import{f as ee}from"./index-Cnk2rnxF.js";import{h as te,f as ae}from"./index-BYwLR37K.js";import{g as re}from"./index-BgzBzW_7.js";import{r as b}from"./index-DH5ua8nC.js";import{$ as ne}from"./TextField-7rVZ2oDw.js";import{C as oe,O as se,I as le}from"./OuterFieldV2-BGsJs17e.js";import{I as ie}from"./InputWrapper-C7of_464.js";import{a as ce,I as pe}from"./InputLabelTopV2-CysXC_Fl.js";import{C as ue}from"./CharactersCounter-OqJnolXU.js";import{$ as de}from"./useFocusRing-CELWytXw.js";const m=b.forwardRef((z,M)=>{const{labelProps:G,alerts:h,startSlot:J,endSlot:K,withCharacterCounter:Q,onChange:p,testID:I="text-input",...g}=z,{value:u,defaultValue:d,maxLength:f}=g,x=de(M);function U(){var t;(t=x.current)==null||t.focus()}const[X,Y]=b.useState(()=>(u==null?void 0:u.length)||(d==null?void 0:d.length)||0),Z=b.useCallback(t=>{Y(t.length),p==null||p(t)},[p]);return e.jsx(ne,{...g,onChange:Z,children:e.jsx(ie,{alert:h&&e.jsx(ce,{alerts:h}),children:e.jsxs(oe,{children:[e.jsx(pe,{...G,children:e.jsx(se,{startSlot:J,endSlot:K,focusElement:U,children:e.jsx(le,{ref:x,"data-testid":I})})}),f!==void 0&&Q&&e.jsx(ue,{length:X,maxLength:f,testID:`${I}-character-counter`})]})})})});m.displayName="TextInputV2";m.__docgenInfo={description:"",methods:[],displayName:"TextInputV2"};const be={title:"Components/Inputs/TextInputV2",component:m,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},startSlot:{control:"text"},endSlot:re(ae,24),maxLength:{control:"number"},withCharacterCounter:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:ee()}},a={args:{"aria-label":"TextInput label"}},r={args:{labelProps:{label:"TextInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={args:{labelProps:{label:"TextInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},o={args:{isDisabled:!0,labelProps:{label:"TextInput label"}}},s={args:{isInvalid:!0,labelProps:{label:"TextInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},l={args:{maxLength:20,withCharacterCounter:!0,labelProps:{label:"TextInput label"}}},i={args:{startSlot:"€",labelProps:{label:"TextInput label"}}},c={args:{endSlot:e.jsx(te,{color:"#429448"}),labelProps:{label:"TextInput label"}}};var P,T,S;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextInput label"
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,y,v;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,A,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var W,B,L;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,D,_;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var $,E,H;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    maxLength: 20,
    withCharacterCounter: true,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,O,k;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    startSlot: "€",
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var F,q,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    endSlot: <Icons.CircledTickFilledIcon color="#429448" />,
    labelProps: {
      label: "TextInput label"
    }
  }
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const me=["Basic","WithLabel","WithHint","Disabled","Invalid","WithLimit","WithStartSlot","WithEndSlot"],je=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,Invalid:s,WithEndSlot:c,WithHint:n,WithLabel:r,WithLimit:l,WithStartSlot:i,__namedExportsOrder:me,default:be},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as I,je as T,r as W,n as a,l as b,i as c,c as d};
