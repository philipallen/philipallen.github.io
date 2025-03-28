import{j as S}from"./jsx-runtime-BkBIjjFT.js";import{f as B}from"./index-D0csYWE-.js";import{C as t}from"./Checkbox-DmEBb6bc.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/Inputs/Checkbox",component:t,render:function(n){const[,_]=O();function I(l){n.onChange&&n.onChange(l),_({checked:l.target.checked})}return S.jsx(t,{...n,onChange:I})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"},isIndeterminate:{control:"boolean"}},args:{checked:!1,disabled:!1,hasError:!1,isIndeterminate:!1,onChange:B()}},e={args:{labelProps:{"aria-label":"Checkbox label"}}},r={...e,args:{disabled:!0,labelProps:{label:"Checkbox label"}}},a={...e,args:{labelProps:{label:"Checkbox label"}}},o={...e,args:{hasError:!0,labelProps:{label:"Checkbox label"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},s={...e,args:{isIndeterminate:!0,labelProps:{label:"Checkbox label"}}};var c,i,b;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Checkbox label"
    }
  }
}`,...(b=(i=e.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    labelProps: {
      label: "Checkbox label"
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Checkbox label"
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,x,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Checkbox label"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,P,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Basic,
  args: {
    isIndeterminate: true,
    labelProps: {
      label: "Checkbox label"
    }
  }
}`,...(E=(P=s.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const j=["Basic","Disabled","WithLabel","WithError","Indeterminate"],A=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:r,Indeterminate:s,WithError:o,WithLabel:a,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{e as B,A as C,r as D,s as I,a as W,o as a};
