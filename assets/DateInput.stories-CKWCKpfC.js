import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as s}from"./index-CcKhGcwW.js";import{a as q}from"./Label-CxUBTwi1.js";import{a as J}from"./Text-DC2Lycci.js";import{a as b,u as S,b as L}from"./index-BHlkTKmU.js";import{$ as K}from"./Group-oOA39aJ_.js";import{T as W}from"./TextInputV2-C2jYP29W.js";import{$ as Q}from"./useControlledState-Bw1hdnkP.js";import{a as U}from"./utils-BPOuYIA2.js";import{a as m,I as X}from"./InputAlerts-DCLtABKX.js";import{I as Z}from"./InputLabelTopV2-BD3mOok3.js";const ee=b(K)`
  ${()=>{const{tokens:r}=S(),{spacing:e}=r;return L`
      display: inline-flex;
      gap: ${e.s16};
    `}}
`,ae=b.div`
  ${()=>{const{tokens:r}=S(),{spacing:e}=r;return L`
      display: grid;
      gap: ${e.s4};
    `}}
`,_=b(W).attrs({inputmode:"numeric",maxLength:2})`
  width: 60px;
`,te=b(W).attrs({inputmode:"numeric",maxLength:4})`
  width: 88px;
`;function D(r){const[e,t]=Q(r.value,r.defaultValue||"");function o(l){return U(r.onChange,t)(l.replace(/\D/g,""))}return{value:e,handleChange:o}}const h=s.createContext({});function n(r){const{labelProps:e,alerts:t,children:o,testID:l="date-input",...k}=r,N=!!(e!=null&&e.label),O=!!(e!=null&&e.labelHint),I=s.useId(),y=s.useId(),f=s.useId(),g=s.useId(),x=s.useId(),z={id:I,elementType:"span"},F={slots:{description:{id:y},dayErrorMessage:{id:f},monthErrorMessage:{id:g},yearErrorMessage:{id:x}}},G=s.useMemo(()=>a.jsxs(ae,{children:[(t==null?void 0:t.day)&&a.jsx(m,{slot:"dayErrorMessage",alerts:t.day}),(t==null?void 0:t.month)&&a.jsx(m,{slot:"monthErrorMessage",alerts:t.month}),(t==null?void 0:t.year)&&a.jsx(m,{slot:"yearErrorMessage",alerts:t.year})]}),[t]);return a.jsx(h.Provider,{value:{dayDescribedBy:f,monthDescribedBy:g,yearDescribedBy:x},children:a.jsx(q.Provider,{value:z,children:a.jsx(J.Provider,{value:F,children:a.jsx(X,{alert:t&&G,children:a.jsx(Z,{...e,children:a.jsx(ee,{...k,"aria-labelledby":[N&&I,O&&y].filter(Boolean).join(" ")||void 0,"data-testid":l,children:o})})})})})})}n.Day=s.forwardRef((r,e)=>{const{dayDescribedBy:t}=s.useContext(h),{value:o,handleChange:l}=D(r);return a.jsx(_,{"aria-label":"Day",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Day.displayName="DateInputDay";n.Month=s.forwardRef((r,e)=>{const{monthDescribedBy:t}=s.useContext(h),{value:o,handleChange:l}=D(r);return a.jsx(_,{"aria-label":"Month",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Month.displayName="DateInputMonth";n.Year=s.forwardRef((r,e)=>{const{yearDescribedBy:t}=s.useContext(h),{value:o,handleChange:l}=D(r);return a.jsx(te,{"aria-label":"Year",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Year.displayName="DateInputYear";const re={title:"Components/Inputs/DateInput",component:n,render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{}),a.jsx(n.Month,{}),a.jsx(n.Year,{})]})},argTypes:{alerts:{control:{disable:!0}}}},i={args:{"aria-label":"DateInput label"}},d={args:{labelProps:{label:"DateInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{labelProps:{label:"DateInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{isDisabled:!0}),a.jsx(n.Month,{isDisabled:!0}),a.jsx(n.Year,{isDisabled:!0})]})},args:{labelProps:{label:"DateInput label"}}},p={render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{isInvalid:!0}),a.jsx(n.Month,{isInvalid:!0}),a.jsx(n.Year,{defaultValue:"2000"})]})},args:{labelProps:{label:"DateInput label"},alerts:{day:[{severity:"error",children:"The date must include a day."}],month:[{severity:"error",children:"The date must include a month."}]}}};var j,P,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-label": "DateInput label"
  }
}`,...(v=(P=i.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var $,B,C;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "DateInput label",
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
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var M,T,R;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "DateInput label",
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
}`,...(R=(T=u.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var A,E,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render(args) {
    return <DateInput {...args}>
        <DateInput.Day isDisabled />
        <DateInput.Month isDisabled />
        <DateInput.Year isDisabled />
      </DateInput>;
  },
  args: {
    labelProps: {
      label: "DateInput label"
    }
  }
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var V,Y,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    return <DateInput {...args}>
        <DateInput.Day isInvalid />
        <DateInput.Month isInvalid />
        <DateInput.Year defaultValue="2000" />
      </DateInput>;
  },
  args: {
    labelProps: {
      label: "DateInput label"
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
}`,...(H=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const ne=["Basic","WithLabel","WithHint","Disabled","Invalid"],De=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Disabled:c,Invalid:p,WithHint:u,WithLabel:d,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{i as B,De as D,p as I,d as W,u as a,c as b};
