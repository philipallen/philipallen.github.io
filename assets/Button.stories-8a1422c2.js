import{j as c}from"./jsx-runtime-6eef64cc.js";import{c as D,I as O}from"./index-b1e3628a.js";import{g as k}from"./index-aa3a2926.js";import{B as w}from"./index-f9a152de.js";import{B as i}from"./Button-5cb0e456.js";const E={title:"Inputs/Button",component:i,argTypes:{text:{control:{type:"text"}},variant:{control:{type:"select"},options:w.VARIANTS},disabled:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:k(O)},args:{text:"Button text"}},e={},r={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",text:"Primary button"}},a={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",text:"Secondary button"}},t={argTypes:{variant:{control:{disable:!0}}},args:{...r.args,disabled:!0}},n={argTypes:{variant:{control:{disable:!0}}},args:{...a.args,disabled:!0}},s={render:()=>c.jsxs("div",{style:{display:"grid",gap:10},children:[c.jsx(i,{variant:"primary",text:"Primary button",fullWidth:!0}),c.jsx(i,{variant:"secondary",text:"Secondary button",fullWidth:!0})]})},o={args:{startIcon:c.jsx(D,{})}};var d,p,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,m,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,b,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,B,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(B=n.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var P,h,j;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" fullWidth />
      <Button variant="secondary" text="Secondary button" fullWidth />
    </div>
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var W,_,A;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  }
}`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const L=["Basic","Primary","Secondary","PrimaryDisabled","SecondaryDisabled","Stacked","WithIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Primary:r,PrimaryDisabled:t,Secondary:a,SecondaryDisabled:n,Stacked:s,WithIcon:o,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{q as B,r as P,a as S,o as W,t as a,n as b,s as c};
