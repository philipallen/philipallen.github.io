import{f as k}from"./index-iP1lhtUC.js";import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{r as c}from"./index-CcKhGcwW.js";import{a as B,u as i,b as E}from"./index-BHlkTKmU.js";import{I as z,a as q}from"./InputAlerts-DCLtABKX.js";import{F as D}from"./Fieldset-CIq3orit.js";import{R as F}from"./Radio-uroQwU0B.js";import{b as M}from"./AlertAssociationProps-CEhVpbTc.js";const N=B.ul`
  ${()=>{const{tokens:r}=i(),{radioGroup:a}=r;return E`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${a.list.gap};
    `}}
`,J=B.li`
  ${()=>{const{tokens:r}=i(),{radioGroup:a}=r;return E`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${a.list.gap};
    `}}
`,G=c.forwardRef((r,a)=>{const{alertProps:l,legend:I,legendHint:T,legendTooltipProps:j,legendHintTooltipProps:H,name:W,inputs:w,onChange:L,testID:p="radio-group"}=r,{tokens:S}=i(),{radioGroup:C}=S,u=c.useId(),O=M(u,r);return o.jsx(z,{gap:C.gap,alert:l&&o.jsx("div",{id:u,"data-testid":`${p}-alerts`,children:o.jsx(q,{alerts:Array.isArray(l)?l:[l]})}),children:o.jsx(D,{ref:a,legend:I,legendHint:T,legendTooltipProps:j,legendHintTooltipProps:H,testID:p,ariaAlertAssociationProps:O,children:o.jsx(N,{children:w.map((_,$)=>o.jsx(J,{children:o.jsx(F,{..._,name:W,onChange:L})},$))})})})});G.displayName="RadioGroup";const K={title:"Components/Inputs/RadioGroup",component:G,argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{legend:"RadioGroup legend",name:"group",inputs:[{value:"bacon",labelProps:{label:"Bacon"}},{value:"cheese",labelProps:{label:"Cheese"}},{value:"onions",labelProps:{label:"Onions"}},{value:"lettuce",labelProps:{label:"Lettuce"}},{value:"tomato",labelProps:{label:"Tomato"}}],onChange:k()}},e={},t={...e,args:{legend:"RadioGroup legend",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},n={...e,args:{legend:"RadioGroup legend",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},s={...e,args:{inputs:[{value:"bacon",labelProps:{label:"Bacon"},hasError:!0},{value:"cheese",labelProps:{label:"Cheese"},hasError:!0},{value:"onions",labelProps:{label:"Onions"},hasError:!0},{value:"lettuce",labelProps:{label:"Lettuce"},hasError:!0},{value:"tomato",labelProps:{label:"Tomato"},hasError:!0}],alertProps:{severity:"error",children:"Error description over two lines if required."}}};var d,g,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,h,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "RadioGroup legend",
    legendTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(P=(h=t.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var f,v,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "RadioGroup legend",
    legendHint: "Additional information",
    legendHintTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var x,y,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Basic,
  args: {
    inputs: [{
      value: "bacon",
      labelProps: {
        label: "Bacon"
      },
      hasError: true
    }, {
      value: "cheese",
      labelProps: {
        label: "Cheese"
      },
      hasError: true
    }, {
      value: "onions",
      labelProps: {
        label: "Onions"
      },
      hasError: true
    }, {
      value: "lettuce",
      labelProps: {
        label: "Lettuce"
      },
      hasError: true
    }, {
      value: "tomato",
      labelProps: {
        label: "Tomato"
      },
      hasError: true
    }],
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const Q=["Basic","WithLegend","WithHint","WithError"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,WithError:s,WithHint:n,WithLegend:t,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{e as B,ae as R,t as W,n as a,s as b};
