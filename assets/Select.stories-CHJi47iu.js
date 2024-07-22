import{j as n}from"./jsx-runtime-DQ32znRX.js";import{f as x}from"./index-Cnk2rnxF.js";import{S as O}from"./index-DCR-OBjd.js";import{S as i}from"./Select-BMI-pO5o.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Inputs/Select",component:i,render:function(l){const[,D]=j();function W(t){l.onChange(t),D({selectedItem:t})}return n.jsx("div",{style:{height:400},children:n.jsx(i,{...l,onChange:W})})},argTypes:{placeholder:{type:"string"},hasError:{type:"boolean"},isDisabled:{type:"boolean"}},args:{onChange:x(),items:O.mockItems,hasError:!1,isDisabled:!1}},e={args:{labelProps:{"aria-label":"Label"}}},r={args:{isDisabled:!0,labelProps:{"aria-label":"Label"}}},a={args:{labelProps:{label:"Label for Select"}}},s={args:{labelProps:{label:"Label for Select",labelHint:"Additional information"}}},o={args:{hasError:!0,labelProps:{label:"Label for Select"},alertProps:{severity:"error",children:"Error description over two lines if required."}}};var c,p,b;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      "aria-label": "Label"
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select"
    }
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,P,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "Label for Select",
      labelHint: "Additional information"
    }
  }
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var E,L,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    hasError: true,
    labelProps: {
      label: "Label for Select"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const A=["Basic","Disabled","WithLabel","WithHint","WithError"],T=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:r,WithError:o,WithHint:s,WithLabel:a,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{e as B,r as D,T as S,a as W,s as a,o as b};
