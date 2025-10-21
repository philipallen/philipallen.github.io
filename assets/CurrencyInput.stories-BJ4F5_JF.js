import{j as m}from"./jsx-runtime-sfY7k0Xq.js";import{f as K}from"./index-iP1lhtUC.js";import{r as g}from"./index-CcKhGcwW.js";import{C as t}from"./index-CoGc3U6X.js";import{N as q}from"./NumberInput-Z5epix32.js";import{g as U}from"./chunk-4HCWVY2M-B1ssy2Ob.js";import{$ as z}from"./utils-BPOuYIA2.js";import{$ as Y}from"./useNumberFormatter-Be2B0OXy.js";const L=e=>{const{fraction:r}=U();return e.indexOf(r)},Z=e=>{const r=L(e);return r<0?"":e.substring(r+1)},k=e=>{var r,a;return((a=(r=Z(e).match(/[0-9]/g))==null?void 0:r.join(""))==null?void 0:a.length)||0},G=(e,r)=>k(e)>=r,J=e=>/-/.test(e),Q=e=>/[0-9]|\.|,/.test(e),X=e=>/Delete|Backspace|Tab|ArrowRight|ArrowLeft/.test(e),ee=(e,r)=>e<=L(r),re=e=>(e||0)<1,ae=(e,r,a,u)=>ee(a,r)||re(u)||X(e)||J(e)?!0:Q(e)&&!G(r,u),$=g.forwardRef((e,r)=>{const{currencySymbol:a=t.DEFAULT_SYMBOL,currencyFormat:u=t.DEFAULT_DECIMAL_PLACES,testID:N="currency-input",...W}=e,p=z(r),b=u===t.TWO_DECIMAL_PLACES?t.TWO_DP_FORMAT_OPTIONS:t.ZERO_DP_FORMAT_OPTIONS,j=g.useCallback(({key:M,preventDefault:H})=>{var d,f;if(!ae(M,((d=p.current)==null?void 0:d.value)||"",((f=p.current)==null?void 0:f.selectionStart)||-1,b.maximumFractionDigits)){H();return}},[p,b]),V=`${e["aria-label"]?`${e["aria-label"]} . `:""}you can only enter ${b.maximumFractionDigits} decimal places`;return m.jsx(q,{...W,ref:p,"aria-label":V,startSlot:a,formatOptions:b,testID:N,onKeyDown:j})});$.displayName="CurrencyInput";const te={title:"Components/Inputs/CurrencyInput",component:$,decorators:[e=>m.jsx(Y,{locale:"en-IE",children:m.jsx(e,{})})],argTypes:{minValue:{control:"number"},maxValue:{control:"number"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,onChange:K()}},o={args:{"aria-label":"CurrencyInput label"}},n={args:{labelProps:{label:"CurrencyInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"CurrencyInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{minValue:-90,defaultValue:-45.67,labelProps:{label:"CurrencyInput label -"}}},i={args:{isDisabled:!0,labelProps:{label:"CurrencyInput label"}}},c={args:{isInvalid:!0,labelProps:{label:"CurrencyInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var P,y,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "CurrencyInput label"
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var h,C,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,D,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var v,O,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    minValue: -90,
    defaultValue: -45.67,
    labelProps: {
      label: "CurrencyInput label -"
    }
  }
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var x,w,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CurrencyInput label"
    }
  }
}`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var B,E,F;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const oe=["Basic","WithLabel","WithHint","WithNegativeValues","Disabled","Invalid"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:i,Invalid:c,WithHint:s,WithLabel:n,WithNegativeValues:l,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{o as B,me as C,i as D,c as I,n as W,s as a};
