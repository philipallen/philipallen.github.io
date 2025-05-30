import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{A as D,i as O}from"./index-Cng6hRot.js";import{g as k}from"./index-CG-U_esM.js";import{B as w}from"./index-CssHJ6ns.js";import{B as t}from"./Button-B7W6LS3Y.js";const E={title:"Components/Inputs/Button",component:t,argTypes:{text:{control:{type:"text"}},variant:{control:{type:"select"},options:w.VARIANTS},disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:k(O)},args:{text:"Button text"}},n={},a={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",text:"Primary button"}},e={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",text:"Secondary button"}},o={argTypes:{variant:{control:{disable:!0}},disabled:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(t,{variant:"primary",text:"Primary button",disabled:!0}),r.jsx(t,{variant:"secondary",text:"Secondary button",disabled:!0})]})},s={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(t,{variant:"primary",text:"Primary button",isLoading:!0}),r.jsx(t,{variant:"secondary",text:"Secondary button",isLoading:!0})]})},i={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(t,{variant:"primary",text:"Primary button",fullWidth:!0}),r.jsx(t,{variant:"secondary",text:"Secondary button",fullWidth:!0})]})},d={args:{startIcon:r.jsx(D,{})},render:({startIcon:c})=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(t,{variant:"primary",text:"Primary button",startIcon:c}),r.jsx(t,{variant:"secondary",text:"Secondary button",startIcon:c})]})};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,m,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,v,x;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(v=e.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,B,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    },
    disabled: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" disabled />
      <Button variant="secondary" text="Secondary button" disabled />
    </div>
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var f,I,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var P,h,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var W,_,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const R=["Basic","Primary","Secondary","Disabled","Loading","Stacked","WithIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Disabled:o,Loading:s,Primary:a,Secondary:e,Stacked:i,WithIcon:d,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{q as B,o as D,s as L,e as S,d as W,n as a,i as b};
