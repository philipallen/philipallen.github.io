import{f as L}from"./index-Cnk2rnxF.js";import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as D}from"./index-DH5ua8nC.js";import{a as w,u as s,b as I}from"./index-CzvSJj6w.js";import{I as H}from"./InputWrapper-C7of_464.js";import{I as N}from"./InlineAlert-D3r_vEqv.js";import{F as _}from"./Fieldset-DKYR2U1X.js";import{R as F}from"./Radio-CgicpXPm.js";import{b as $}from"./AlertAssociationProps-C5Idu2_l.js";const z=w.ul`
  ${()=>{const{tokens:n}=s(),{radioGroup:r}=n;return I`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${r.list.gap};
    `}}
`,M=w.li`
  ${()=>{const{tokens:n}=s(),{radioGroup:r}=n;return I`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${r.list.gap};
    `}}
`;function O(n){const{alertProps:r,legend:A,legendHint:T,legendTooltipProps:W,legendHintTooltipProps:C,name:E,inputs:B,onChange:x,testID:i="radio-group"}=n,{tokens:q}=s(),{radioGroup:j}=q,p=D.useId(),k=$(p,n);return a.jsx(H,{gap:j.gap,alert:r?a.jsx(N,{id:p,...r,testID:`${i}-alert`}):void 0,children:a.jsx(_,{legend:A,legendHint:T,legendTooltipProps:W,legendHintTooltipProps:C,testID:i,ariaAlertAssociationProps:k,children:a.jsx(z,{children:B.map((G,S)=>a.jsx(M,{children:a.jsx(F,{...G,name:E,onChange:x})},S))})})})}O.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<RadioBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"input">,
  "type" | "style" | "className"  | "aria-invalid"
> & {
  hasError?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"  | "aria-invalid"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  ComponentPropsWithRef<"input">,
  "type" | "style" | "className"  | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<RadioBaseProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  label?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightProps, "children">',required:!0}},{key:"alertProps",value:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "name" | "onChange"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"name"'},{name:"literal",value:'"onChange"'}]}],raw:'Omit<RadioProps, "alertProps" | "name" | "onChange">'}],raw:"RadioGroupInput[]"},description:""},onChange:{required:!1,tsType:{name:'intersection["onChange"]',raw:'RadioProps["onChange"]'},description:""}}};const J={title:"Components/Inputs/RadioGroup",component:O,argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{legend:"RadioGroup legend",name:"group",inputs:[{value:"bacon",labelProps:{label:"Bacon"}},{value:"cheese",labelProps:{label:"Cheese"}},{value:"onions",labelProps:{label:"Onions"}},{value:"lettuce",labelProps:{label:"Lettuce"}},{value:"tomato",labelProps:{label:"Tomato"}}],onChange:L()}},e={},t={...e,args:{legend:"RadioGroup legend",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},o={...e,args:{legend:"RadioGroup legend",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},l={...e,args:{inputs:[{value:"bacon",labelProps:{label:"Bacon"},hasError:!0},{value:"cheese",labelProps:{label:"Cheese"},hasError:!0},{value:"onions",labelProps:{label:"Onions"},hasError:!0},{value:"lettuce",labelProps:{label:"Lettuce"},hasError:!0},{value:"tomato",labelProps:{label:"Tomato"},hasError:!0}],alertProps:{severity:"error",children:"Error description over two lines if required."}}};var u,m,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,g,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var P,b,v;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,f,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(f=l.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const K=["Basic","WithLegend","WithLegendHint","WithError"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,WithError:l,WithLegend:t,WithLegendHint:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{e as B,ae as R,t as W,o as a,l as b};
