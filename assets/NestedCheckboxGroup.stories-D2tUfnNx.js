import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{f as V}from"./index-iP1lhtUC.js";import{r as f}from"./index-CcKhGcwW.js";import{p as q}from"./immer-VJu7bq0k.js";import{$ as F}from"./RSPContexts-v-WQ8S-5.js";import{a as M}from"./Checkbox-BQcfHITI.js";import{a as z,u as T,b as K}from"./index-BHlkTKmU.js";import{e as U}from"./index-WLaP1tkh.js";import{C as $}from"./CheckboxGroupBaseV2-BOdDk525.js";import{R as Y}from"./ReactAriaProviders-CFG_2kIo.js";import{I as J,a as Q}from"./InputAlerts-C0T-ByS6.js";import{I as X}from"./InputLabelTopV2-B3mcgkks.js";import{C as E}from"./CheckboxV2-h4hywln6.js";const Z=z($)`
  ${()=>{const{tokens:o}=T(),{checkboxGroup:a}=o;return K`
      padding-left: ${a.nestedList.paddingLeft};
    `}}
`,x=f.forwardRef((o,a)=>{const{labelProps:l,alerts:t,inputs:s,onChange:r,testID:O="nested-checkbox-group",...m}=o,{tokens:w}=T(),{checkboxGroup:W}=w,H=s.filter(n=>n.isSelected).map(n=>n.value),g=n=>{const c=q(s,i=>{U.updateInputs(i,n.id,"isSelected")});r(c)};return e.jsx(Y,{externallyLabelledBy:o["aria-labelledby"],externallyDescribedBy:o["aria-describedby"],labelProps:l,alerts:t,children:({labelledBy:n,describedBy:c})=>e.jsx(X,{ref:a,...l,children:e.jsx(J,{gap:W.gap,alert:t&&e.jsx(Q,{alerts:t}),children:e.jsx(M.Provider,{value:{isDisabled:m.isDisabled,isInvalid:m.isInvalid},children:e.jsx(F.Provider,{value:{"aria-describedby":c},children:e.jsx($,{...m,value:H,"aria-labelledby":n,"aria-describedby":c,"data-testid":O,children:s.map(i=>e.jsxs(f.Fragment,{children:[e.jsx(E,{...i,onChange:()=>{g(i)}}),i.children&&e.jsx(L,{input:i,handleChange:g,describedBy:c})]},i.id))})})})})})})});x.displayName="NestedCheckboxGroup";function L(o){const{input:a,handleChange:l,describedBy:t}=o;if(!a.children)return null;const s=a.children.filter(r=>r.isSelected).map(r=>r.value);return e.jsx(Z,{value:s,"aria-label":a.labelProps.label,"aria-describedby":t,children:a.children.map(r=>e.jsxs(f.Fragment,{children:[e.jsx(E,{...r,onChange:()=>{l(r)}}),r.children&&e.jsx(L,{input:r,handleChange:l})]},r.id))})}const{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/Inputs/NestedCheckboxGroup",component:x,render:function(a){const[,l]=ee();function t(s){a.onChange(s),l({inputs:s})}return e.jsx(x,{...a,onChange:t})},argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{inputs:[{id:"1",value:"burger",isSelected:!1,labelProps:{label:"Burger"},children:[{id:"1-1",value:"bacon",isSelected:!1,labelProps:{label:"Bacon"}},{id:"1-2",value:"cheese",isSelected:!1,labelProps:{label:"Cheese"}},{id:"1-3",value:"onions",isSelected:!1,labelProps:{label:"Onions"}},{id:"1-4",value:"lettuce",isSelected:!1,labelProps:{label:"Lettuce"}},{id:"1-5",value:"tomato",isSelected:!1,labelProps:{label:"Tomato"}}]}],isDisabled:!1,isInvalid:!1,onChange:V()}},d={args:{"aria-label":"NestedCheckboxGroup label"}},b={args:{labelProps:{label:"NestedCheckboxGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={args:{labelProps:{label:"NestedCheckboxGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"NestedCheckboxGroup label"}}},h={args:{isInvalid:!0,labelProps:{label:"NestedCheckboxGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var P,v,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "NestedCheckboxGroup label"
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,y,G;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NestedCheckboxGroup label",
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
}`,...(G=(y=b.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var I,j,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NestedCheckboxGroup label",
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
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,B,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "NestedCheckboxGroup label"
    }
  }
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var A,_,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "NestedCheckboxGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(D=(_=h.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const re=["Basic","WithLabel","WithHint","Disabled","Invalid"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:u,Invalid:h,WithHint:p,WithLabel:b,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{d as B,u as D,h as I,fe as N,b as W,p as a};
