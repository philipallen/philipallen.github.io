import{j as n}from"./jsx-runtime-BkBIjjFT.js";import{A,i as O}from"./index-By1nkff0.js";import{g as k}from"./index-BUbIWl_8.js";import{B as w}from"./index-BDdHs4nI.js";import{B as r}from"./ButtonV2-DxOCenlT.js";const E={title:"Components/Inputs/ButtonV2",component:r,argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"},options:w.VARIANTS},isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:k(O)},args:{children:"Button text"}},t={},a={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",children:"Primary button"}},e={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",children:"Secondary button"}},o={argTypes:{variant:{control:{disable:!0}},isDisabled:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",isDisabled:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",isDisabled:!0,children:"Secondary button"})]})},s={argTypes:{isPending:{control:{disable:!0}},children:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",isPending:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",isPending:!0,children:"Secondary button"})]})},i={argTypes:{variant:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(r,{variant:"primary",fullWidth:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",fullWidth:!0,children:"Secondary button"})]})},d={args:{startIcon:n.jsx(A,{})},render:({startIcon:c})=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",startIcon:c,children:"Primary button"}),n.jsx(r,{variant:"secondary",startIcon:c,children:"Secondary button"})]})};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    children: "Primary button"
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,v,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    children: "Secondary button"
  }
}`,...(h=(v=e.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var S,B,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    },
    isDisabled: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" isDisabled>
        Primary button
      </ButtonV2>
      <ButtonV2 variant="secondary" isDisabled>
        Secondary button
      </ButtonV2>
    </div>
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var x,V,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    isPending: {
      control: {
        disable: true
      }
    },
    children: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" isPending>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" isPending>
        Secondary button
      </ButtonV2>
    </div>
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var f,I,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <ButtonV2 variant="primary" fullWidth>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" fullWidth>
        Secondary button
      </ButtonV2>
    </div>
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,W,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" startIcon={startIcon}>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" startIcon={startIcon}>
        Secondary button
      </ButtonV2>
    </div>
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const L=["Basic","Primary","Secondary","Disabled","Pending","Stacked","WithIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:o,Pending:s,Primary:a,Secondary:e,Stacked:i,WithIcon:d,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{q as B,o as D,s as P,e as S,d as W,t as a,i as b};
