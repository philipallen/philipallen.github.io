import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{f as V}from"./index-iP1lhtUC.js";import{r as f}from"./index-CcKhGcwW.js";import{p as q}from"./immer-VJu7bq0k.js";import{$ as F}from"./RSPContexts-v-WQ8S-5.js";import{a as M}from"./Checkbox-DKjPjTVw.js";import{a as z,u as T,b as K}from"./index-COZsQx0K.js";import{e as U}from"./index-CssHJ6ns.js";import{C as $}from"./CheckboxGroupBaseV2-n1kmNkBW.js";import{R as Y}from"./ReactAriaProviders-BwEeAT52.js";import{I as J,a as Q}from"./InputAlerts-Bp_UC4fJ.js";import{I as X}from"./InputLabelTopV2-DNCsgte8.js";import{C as E}from"./CheckboxV2-Tet4VZ_l.js";const Z=z($)`
  ${()=>{const{tokens:i}=T(),{checkboxGroup:a}=i;return K`
      padding-left: ${a.nestedList.paddingLeft};
    `}}
`,x=f.forwardRef((i,a)=>{const{labelProps:s,alerts:l,inputs:o,onChange:r,testID:w="nested-checkbox-group",...m}=i,{tokens:L}=T(),{checkboxGroup:W}=L,H=o.filter(t=>t.isSelected).map(t=>t.value),g=t=>{const c=q(o,n=>{U.updateInputs(n,t.id,"isSelected")});r(c)};return e.jsx(Y,{labelProps:s,alerts:l,children:({labelledBy:t,describedBy:c})=>e.jsx(X,{ref:a,...s,children:e.jsx(J,{gap:W.gap,alert:l&&e.jsx(Q,{alerts:l}),children:e.jsx(M.Provider,{value:{isDisabled:m.isDisabled,isInvalid:m.isInvalid},children:e.jsx(F.Provider,{value:{"aria-describedby":c},children:e.jsx($,{...m,value:H,"aria-labelledby":t,"aria-describedby":c,"data-testid":w,children:o.map(n=>e.jsxs(f.Fragment,{children:[e.jsx(E,{...n,onChange:()=>{g(n)}}),n.children&&e.jsx(O,{input:n,handleChange:g,describedBy:c})]},n.id))})})})})})})});x.displayName="NestedCheckboxGroup";function O(i){const{input:a,handleChange:s,describedBy:l}=i;if(!a.children)return null;const o=a.children.filter(r=>r.isSelected).map(r=>r.value);return e.jsx(Z,{value:o,"aria-label":a.labelProps.label,"aria-describedby":l,children:a.children.map(r=>e.jsxs(f.Fragment,{children:[e.jsx(E,{...r,onChange:()=>{s(r)}}),r.children&&e.jsx(O,{input:r,handleChange:s})]},r.id))})}const{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/Inputs/NestedCheckboxGroup",component:x,render:function(a){const[,s]=ee();function l(o){a.onChange(o),s({inputs:o})}return e.jsx(x,{...a,onChange:l})},argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{inputs:[{id:"1",value:"burger",isSelected:!1,labelProps:{label:"Burger"},children:[{id:"1-1",value:"bacon",isSelected:!1,labelProps:{label:"Bacon"}},{id:"1-2",value:"cheese",isSelected:!1,labelProps:{label:"Cheese"}},{id:"1-3",value:"onions",isSelected:!1,labelProps:{label:"Onions"}},{id:"1-4",value:"lettuce",isSelected:!1,labelProps:{label:"Lettuce"}},{id:"1-5",value:"tomato",isSelected:!1,labelProps:{label:"Tomato"}}]}],isDisabled:!1,isInvalid:!1,onChange:V()}},d={args:{"aria-label":"NestedCheckboxGroup label"}},p={args:{labelProps:{label:"NestedCheckboxGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={args:{labelProps:{label:"NestedCheckboxGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"NestedCheckboxGroup label"}}},h={args:{isInvalid:!0,labelProps:{label:"NestedCheckboxGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var P,v,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "aria-label": "NestedCheckboxGroup label"
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,G,I;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var j,S,y;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(S=b.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var N,R,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "NestedCheckboxGroup label"
    }
  }
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,_,D;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(_=h.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const re=["Basic","WithLabel","WithHint","Disabled","Invalid"],fe=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:u,Invalid:h,WithHint:b,WithLabel:p,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{d as B,u as D,h as I,fe as N,p as W,b as a};
