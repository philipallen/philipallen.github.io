import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as o}from"./index-CcKhGcwW.js";import{a as G}from"./Label-CxUBTwi1.js";import{a as q}from"./Text-DC2Lycci.js";import{a as J}from"./TextField-DSnhXm7w.js";import{a as p,u as w,b as E}from"./index-COZsQx0K.js";import{$ as K}from"./Group-oOA39aJ_.js";import{T as H}from"./TextInputV2-BJ5g6Jvu.js";import{a as c,I as Q}from"./InputAlerts-Bp_UC4fJ.js";import{I as U}from"./InputLabelTopV2-DNCsgte8.js";const X=p(K)`
  ${()=>{const{tokens:r}=w(),{spacing:a}=r;return E`
      display: inline-flex;
      gap: ${a.s16};
    `}}
`,Z=p.div`
  ${()=>{const{tokens:r}=w(),{spacing:a}=r;return E`
      display: grid;
      gap: ${a.s4};
    `}}
`,S=p(H).attrs({inputmode:"numeric",maxLength:2})`
  width: 60px;

  input {
    width: 100%;
  }
`,ee=p(H).attrs({inputmode:"numeric",maxLength:4})`
  width: 88px;

  input {
    width: 100%;
  }
`;function t(r){const{labelProps:a,alerts:n,children:C,testID:V="date-input",...W}=r,_=!!(a!=null&&a.label),k=!!(a!=null&&a.labelHint),b=o.useId(),m=o.useId(),h=o.useId(),I=o.useId(),f=o.useId(),N={id:b,elementType:"span"},O={slots:{description:{id:m},dayErrorMessage:{id:h},monthErrorMessage:{id:I},yearErrorMessage:{id:f}}},F={slots:{dayInput:{"aria-describedby":h},monthInput:{"aria-describedby":I},yearInput:{"aria-describedby":f}}},z=o.useMemo(()=>e.jsxs(Z,{children:[(n==null?void 0:n.day)&&e.jsx(c,{slot:"dayErrorMessage",alerts:n.day}),(n==null?void 0:n.month)&&e.jsx(c,{slot:"monthErrorMessage",alerts:n.month}),(n==null?void 0:n.year)&&e.jsx(c,{slot:"yearErrorMessage",alerts:n.year})]}),[n]);return e.jsx(G.Provider,{value:N,children:e.jsx(q.Provider,{value:O,children:e.jsx(J.Provider,{value:F,children:e.jsx(Q,{alert:z,children:e.jsx(U,{...a,children:e.jsx(X,{...W,"aria-labelledby":[_&&b,k&&m].filter(Boolean).join(" ")||void 0,"data-testid":V,children:C})})})})})})}t.Day=o.forwardRef((r,a)=>e.jsx(S,{...r,ref:a,slot:"dayInput"}));t.Day.displayName="DateInputDay";t.Month=o.forwardRef((r,a)=>e.jsx(S,{...r,ref:a,slot:"monthInput"}));t.Month.displayName="DateInputMonth";t.Year=o.forwardRef((r,a)=>e.jsx(ee,{...r,ref:a,slot:"yearInput"}));t.Year.displayName="DateInputYear";const ae={title:"Components/Inputs/DateInput",component:t,render:function(a){return e.jsxs(t,{...a,children:[e.jsx(t.Day,{"aria-label":"Day"}),e.jsx(t.Month,{"aria-label":"Month"}),e.jsx(t.Year,{"aria-label":"Year"})]})},argTypes:{alerts:{control:{disable:!0}}}},s={args:{"aria-label":"Label for DateInput"}},l={args:{labelProps:{label:"Label for DateInput",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},i={args:{labelProps:{label:"Label for DateInput",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={render:function(a){return e.jsxs(t,{...a,children:[e.jsx(t.Day,{"aria-label":"Day",isDisabled:!0}),e.jsx(t.Month,{"aria-label":"Month",isDisabled:!0}),e.jsx(t.Year,{"aria-label":"Year",isDisabled:!0})]})},args:{labelProps:{label:"Label for DateInput"}}},u={render:function(a){return e.jsxs(t,{...a,children:[e.jsx(t.Day,{"aria-label":"Day",isInvalid:!0}),e.jsx(t.Month,{"aria-label":"Month",isInvalid:!0}),e.jsx(t.Year,{"aria-label":"Year",defaultValue:"2000"})]})},args:{labelProps:{label:"Label for DateInput"},alerts:{day:[{severity:"error",children:"The date must include a day."}],month:[{severity:"error",children:"The date must include a month."}]}}};var y,D,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "Label for DateInput"
  }
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var g,j,P;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for DateInput",
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
}`,...(P=(j=l.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var M,v,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for DateInput",
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
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var L,R,$;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function Render(args) {
    return <DateInput {...args}>
        <DateInput.Day aria-label="Day" isDisabled />
        <DateInput.Month aria-label="Month" isDisabled />
        <DateInput.Year aria-label="Year" isDisabled />
      </DateInput>;
  },
  args: {
    labelProps: {
      label: "Label for DateInput"
    }
  }
}`,...($=(R=d.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var B,A,Y;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function Render(args) {
    return <DateInput {...args}>
        <DateInput.Day aria-label="Day" isInvalid />
        <DateInput.Month aria-label="Month" isInvalid />
        <DateInput.Year aria-label="Year" defaultValue="2000" />
      </DateInput>;
  },
  args: {
    labelProps: {
      label: "Label for DateInput"
    },
    alerts: {
      day: [{
        severity: "error",
        children: "The date must include a day."
      }],
      month: [{
        severity: "error",
        children: "The date must include a month."
      }]
    }
  }
}`,...(Y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};const te=["Basic","WithLabel","WithHint","Disabled","Invalid"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:d,Invalid:u,WithHint:i,WithLabel:l,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{s as B,be as D,u as I,l as W,i as a,d as b};
