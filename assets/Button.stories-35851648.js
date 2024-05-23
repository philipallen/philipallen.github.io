import{j as r}from"./jsx-runtime-6eef64cc.js";import{A as E,I as R}from"./index-71d43b47.js";import{g as z}from"./index-aa3a2926.js";import{B as C}from"./index-7321e5ed.js";import{B as a}from"./Button-782eef4f.js";const M={title:"Components/Inputs/Button",component:a,argTypes:{text:{control:{type:"text"}},variant:{control:{type:"select"},options:C.VARIANTS},disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:z(R)},args:{text:"Button text"}},e={},t={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",text:"Primary button"}},n={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",text:"Secondary button"}},o={argTypes:{variant:{control:{disable:!0}}},args:{...t.args,disabled:!0}},s={argTypes:{variant:{control:{disable:!0}}},args:{...n.args,disabled:!0}},i={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(a,{variant:"primary",text:"Primary button",isLoading:!0}),r.jsx(a,{variant:"secondary",text:"Secondary button",isLoading:!0})]})},c={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(a,{variant:"primary",text:"Primary button",fullWidth:!0}),r.jsx(a,{variant:"secondary",text:"Secondary button",fullWidth:!0})]})},d={args:{startIcon:r.jsx(E,{})},render:({startIcon:l})=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(a,{variant:"primary",text:"Primary button",startIcon:l}),r.jsx(a,{variant:"secondary",text:"Secondary button",startIcon:l})]})};var p,u,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var m,g,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    text: "Primary button"
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    text: "Secondary button"
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,f,B;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var T,P,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    ...Secondary.args,
    disabled: true
  }
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var h,L,W;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" isLoading />
      <Button variant="secondary" text="Secondary button" isLoading />
    </div>
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,A,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" fullWidth />
      <Button variant="secondary" text="Secondary button" fullWidth />
    </div>
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var O,k,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" startIcon={startIcon} />
      <Button variant="secondary" text="Secondary button" startIcon={startIcon} />
    </div>
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const N=["Basic","Primary","Secondary","PrimaryDisabled","SecondaryDisabled","Loading","Stacked","WithIcon"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Loading:i,Primary:t,PrimaryDisabled:o,Secondary:n,SecondaryDisabled:s,Stacked:c,WithIcon:d,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{J as B,i as L,t as P,n as S,d as W,o as a,s as b,c};
