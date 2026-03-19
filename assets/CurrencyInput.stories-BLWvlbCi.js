import{j as m}from"./jsx-runtime-Blucd9Qg.js";import{f as U}from"./index-BQWhUlWo.js";import{r as y}from"./index-CcKhGcwW.js";import{C as t}from"./index-eS8l-D1x.js";import{N as z}from"./NumberInput-BRapuuuq.js";import{g as Y}from"./chunk-4HCWVY2M-B1ssy2Ob.js";import{$ as Z}from"./utils-CrCrZF7Z.js";import{a as k}from"./ProgressBar-Cj3OymJH.js";const W=e=>{const{fraction:r}=Y();return e.indexOf(r)},G=e=>{const r=W(e);return r<0?"":e.substring(r+1)},J=e=>{var r,a;return((a=(r=G(e).match(/[0-9]/g))==null?void 0:r.join(""))==null?void 0:a.length)||0},Q=(e,r)=>J(e)>=r,X=e=>/-/.test(e),ee=e=>/[0-9]|\.|,/.test(e),re=e=>/Delete|Backspace|Tab|ArrowRight|ArrowLeft/.test(e),ae=(e,r)=>e<=W(r),te=e=>(e||0)<1,oe=(e,r,a,u)=>ae(a,r)||te(u)||re(e)||X(e)?!0:ee(e)&&!Q(r,u),$=y.forwardRef((e,r)=>{var f;const{currencySymbol:a=t.DEFAULT_SYMBOL,currencyFormat:u=t.DEFAULT_DECIMAL_PLACES,testID:j="currency-input",...V}=e,p=Z(r),b=u===t.TWO_DECIMAL_PLACES?t.TWO_DP_FORMAT_OPTIONS:t.ZERO_DP_FORMAT_OPTIONS,M=y.useCallback(({key:K,preventDefault:q})=>{var g,P;if(!oe(K,((g=p.current)==null?void 0:g.value)||"",((P=p.current)==null?void 0:P.selectionStart)||-1,b.maximumFractionDigits)){q();return}},[p,b]),d=e["aria-label"]??((f=e.labelProps)==null?void 0:f.label)??"",H=`${d?`${d} . `:""}you can only enter ${b.maximumFractionDigits} decimal places`;return m.jsx(z,{...V,ref:p,"aria-label":H,startSlot:a,formatOptions:b,testID:j,onKeyDown:M})});$.displayName="CurrencyInput";const ne={title:"Components/Inputs/CurrencyInput",component:$,decorators:[e=>m.jsx(k,{locale:"en-IE",children:m.jsx(e,{})})],argTypes:{minValue:{control:"number"},maxValue:{control:"number"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,onChange:U()}},o={args:{"aria-label":"CurrencyInput label"}},n={args:{labelProps:{label:"CurrencyInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"CurrencyInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{minValue:-90,defaultValue:-45.67,labelProps:{label:"CurrencyInput label -"}}},i={args:{isDisabled:!0,labelProps:{label:"CurrencyInput label"}}},c={args:{isInvalid:!0,labelProps:{label:"CurrencyInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var I,h,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "aria-label": "CurrencyInput label"
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var S,A,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CurrencyInput label",
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
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,v,O;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "CurrencyInput label",
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
}`,...(O=(v=s.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var T,x,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    minValue: -90,
    defaultValue: -45.67,
    labelProps: {
      label: "CurrencyInput label -"
    }
  }
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var R,B,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CurrencyInput label"
    }
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,L,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "CurrencyInput label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const se=["Basic","WithLabel","WithHint","WithNegativeValues","Disabled","Invalid"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:i,Invalid:c,WithHint:s,WithLabel:n,WithNegativeValues:l,__namedExportsOrder:se,default:ne},Symbol.toStringTag,{value:"Module"}));export{o as B,fe as C,i as D,c as I,n as W,s as a};
