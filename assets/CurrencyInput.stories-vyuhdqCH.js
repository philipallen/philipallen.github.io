import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{fn as q}from"./index-DeN4tkzB.js";import{a as U}from"./ProgressBar-Blkxmfkf.js";import{r as I}from"./index-BVaTkfsr.js";import{C as t}from"./index-ba3HtoI3.js";import{N as k}from"./NumberInput-rCawa-Hv.js";import{$ as z}from"./filterDOMProps-ZE2JjJ7r.js";import{g as Y}from"./chunk-4HCWVY2M-B1ssy2Ob.js";const $=e=>{const{fraction:r}=Y();return e.indexOf(r)},Z=e=>{const r=$(e);return r<0?"":e.substring(r+1)},G=e=>{var r,a;return((a=(r=Z(e).match(/[0-9]/g))==null?void 0:r.join(""))==null?void 0:a.length)||0},J=(e,r)=>G(e)>=r,Q=e=>/-/.test(e),X=e=>/[0-9]|\.|,/.test(e),ee=e=>/Delete|Backspace|Tab|ArrowRight|ArrowLeft/.test(e),re=(e,r)=>e<=$(r),ae=e=>(e||0)<1,te=(e,r,a,u)=>re(a,r)||ae(u)||ee(e)||Q(e)?!0:X(e)&&!J(r,u),j=I.forwardRef((e,r)=>{var f;const{currencySymbol:a=t.DEFAULT_SYMBOL,currencyFormat:u=t.DEFAULT_DECIMAL_PLACES,testID:V="currency-input",...M}=e,p=z(r),b=u===t.TWO_DECIMAL_PLACES?t.TWO_DP_FORMAT_OPTIONS:t.ZERO_DP_FORMAT_OPTIONS,H=I.useCallback(g=>{var P,y;if(!te(g.key,((P=p.current)==null?void 0:P.value)||"",((y=p.current)==null?void 0:y.selectionStart)||-1,b.maximumFractionDigits)){g.preventDefault();return}},[p,b]),d=e["aria-label"]??((f=e.labelProps)==null?void 0:f.label)??"",K=`${d?`${d} . `:""}you can only enter ${b.maximumFractionDigits} decimal places`;return m.jsx(k,{...M,ref:p,"aria-label":K,startSlot:a,formatOptions:b,testID:V,onKeyDown:H})});j.displayName="CurrencyInput";const oe={title:"Components/Inputs/CurrencyInput",component:j,decorators:[e=>m.jsx(U,{locale:"en-IE",children:m.jsx(e,{})})],argTypes:{minValue:{control:"number"},maxValue:{control:"number"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,onChange:q()}},o={args:{"aria-label":"CurrencyInput label"}},n={args:{labelProps:{label:"CurrencyInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{labelProps:{label:"CurrencyInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{minValue:-90,defaultValue:-45.67,labelProps:{label:"CurrencyInput label -"}}},i={args:{isDisabled:!0,labelProps:{label:"CurrencyInput label"}}},c={args:{isInvalid:!0,labelProps:{label:"CurrencyInput label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var h,C,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "CurrencyInput label"
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,D,_;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(D=n.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var v,O,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(O=s.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var x,w,R;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    minValue: -90,
    defaultValue: -45.67,
    labelProps: {
      label: "CurrencyInput label -"
    }
  }
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var B,E,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "CurrencyInput label"
    }
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,N,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(N=c.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const ne=["Basic","WithLabel","WithHint","WithNegativeValues","Disabled","Invalid"],de=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:i,Invalid:c,WithHint:s,WithLabel:n,WithNegativeValues:l,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{o as B,de as C,i as D,c as I,n as W,s as a};
