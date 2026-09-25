import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BVaTkfsr.js";import{a as q}from"./useLabel-Di5ZsSG1.js";import{a as J}from"./Text-BjRUEV8n.js";import{u as V,i as W,a as h}from"./index-BpMil6Tx.js";import{a as K}from"./Input-DAn3HBs7.js";import{T as _}from"./TextInput-CAmTEWb0.js";import{a as Q}from"./filterDOMProps--0WFEK8x.js";import{$ as U}from"./useControlledState-n_cs0odp.js";import{b as D,I as X,a as Z}from"./InputLabelTop--1mm_taL.js";const ee=h(K)`
  ${()=>{const{tokens:r}=V(),{spacing:e}=r;return W`
      display: inline-flex;
      gap: ${e.s16};
    `}}
`,ae=h.div`
  ${()=>{const{tokens:r}=V(),{spacing:e}=r;return W`
      display: grid;
      gap: ${e.s4};
    `}}
`,k=h(_).attrs({inputmode:"numeric",maxLength:2})`
  width: 60px;
`,te=h(_).attrs({inputmode:"numeric",maxLength:4})`
  width: 88px;
`;function y(r){function e(i){return i.replace(/\D/g,"")}const[t,o]=U(r.value,r.defaultValue||"");function l(i){return Q(r.onChange,o)(e(i))}return{value:t,handleChange:l}}const m=s.createContext({});function n(r){const{labelProps:e,alerts:t,children:o,testID:l="date-input",...i}=r,N=!!(e!=null&&e.label),O=!!(e!=null&&e.labelHint),I=s.useId(),g=s.useId(),x=s.useId(),f=s.useId(),j=s.useId(),z={id:I,elementType:"span"},F={slots:{description:{id:g},dayErrorMessage:{id:x},monthErrorMessage:{id:f},yearErrorMessage:{id:j}}},G=s.useMemo(()=>a.jsxs(ae,{children:[(t==null?void 0:t.day)&&a.jsx(D,{slot:"dayErrorMessage",alerts:t.day}),(t==null?void 0:t.month)&&a.jsx(D,{slot:"monthErrorMessage",alerts:t.month}),(t==null?void 0:t.year)&&a.jsx(D,{slot:"yearErrorMessage",alerts:t.year})]}),[t]);return a.jsx(m.Provider,{value:{dayDescribedBy:x,monthDescribedBy:f,yearDescribedBy:j},children:a.jsx(q.Provider,{value:z,children:a.jsx(J.Provider,{value:F,children:a.jsx(X,{alert:t&&G,children:a.jsx(Z,{...e,children:a.jsx(ee,{...i,"aria-labelledby":[N&&I,O&&g].filter(Boolean).join(" ")||void 0,"data-testid":l,children:o})})})})})})}n.displayName="DateInput";n.Day=s.forwardRef((r,e)=>{const{dayDescribedBy:t}=s.useContext(m),{value:o,handleChange:l}=y(r);return a.jsx(k,{"aria-label":"Day",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Day.displayName="DateInputDay";n.Month=s.forwardRef((r,e)=>{const{monthDescribedBy:t}=s.useContext(m),{value:o,handleChange:l}=y(r);return a.jsx(k,{"aria-label":"Month",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Month.displayName="DateInputMonth";n.Year=s.forwardRef((r,e)=>{const{yearDescribedBy:t}=s.useContext(m),{value:o,handleChange:l}=y(r);return a.jsx(te,{"aria-label":"Year",...r,ref:e,value:o,onChange:l,"aria-describedby":t})});n.Year.displayName="DateInputYear";const re={title:"Components/Inputs/DateInput",component:n,render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{}),a.jsx(n.Month,{}),a.jsx(n.Year,{})]})},argTypes:{alerts:{control:{disable:!0}}}},u={args:{"aria-label":"DateInput label"}},d={args:{labelProps:{label:"DateInput label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"DateInput label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{isDisabled:!0}),a.jsx(n.Month,{isDisabled:!0}),a.jsx(n.Year,{isDisabled:!0})]})},args:{labelProps:{label:"DateInput label"}}},b={render:function(e){return a.jsxs(n,{...e,children:[a.jsx(n.Day,{isInvalid:!0}),a.jsx(n.Month,{isInvalid:!0}),a.jsx(n.Year,{defaultValue:"2000"})]})},args:{labelProps:{label:"DateInput label"},alerts:{day:[{severity:"error",children:"The date must include a day."}],month:[{severity:"error",children:"The date must include a month."}]}}};var P,v,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "DateInput label"
  }
}`,...(B=(v=u.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,M,$;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var T,R,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,w,Y;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(Y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:Y.source}}};var H,S,L;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(S=b.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const ne=["Basic","WithLabel","WithHint","Disabled","Invalid"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:u,Disabled:p,Invalid:b,WithHint:c,WithLabel:d,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{u as B,me as D,b as I,d as W,c as a,p as b};
