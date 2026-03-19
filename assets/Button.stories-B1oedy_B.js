import{j as n}from"./jsx-runtime-Blucd9Qg.js";import{i as O,A as k}from"./index-B_KGh3jf.js";import{a as w}from"./index-NgCCK6aN.js";import{B as E}from"./index-eS8l-D1x.js";import{B as r}from"./Button-CbZ__EIw.js";const L={title:"Components/Inputs/Button",component:r,argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"},options:E.VARIANTS},isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:w(O)},args:{children:"Button text"}},t={},a={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",children:"Primary button"}},e={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",children:"Secondary button"}},o={argTypes:{variant:{control:{disable:!0}},isDisabled:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",isDisabled:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",isDisabled:!0,children:"Secondary button"})]})},s={argTypes:{isPending:{control:{disable:!0}},children:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",isPending:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",isPending:!0,children:"Secondary button"})]})},i={argTypes:{variant:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(r,{variant:"primary",fullWidth:!0,children:"Primary button"}),n.jsx(r,{variant:"secondary",fullWidth:!0,children:"Secondary button"})]})},d={args:{startIcon:n.jsx(k,{})},render:({startIcon:c})=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{variant:"primary",startIcon:c,children:"Primary button"}),n.jsx(r,{variant:"secondary",startIcon:c,children:"Secondary button"})]})};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <Button variant="primary" isDisabled>
        Primary button
      </Button>
      <Button variant="secondary" isDisabled>
        Secondary button
      </Button>
    </div>
}`,...(P=(B=o.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var x,j,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <Button variant="primary" isPending>
        Primary button
      </Button>

      <Button variant="secondary" isPending>
        Secondary button
      </Button>
    </div>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var I,T,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      <Button variant="primary" fullWidth>
        Primary button
      </Button>

      <Button variant="secondary" fullWidth>
        Secondary button
      </Button>
    </div>
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,_,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" startIcon={startIcon}>
        Primary button
      </Button>

      <Button variant="secondary" startIcon={startIcon}>
        Secondary button
      </Button>
    </div>
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const R=["Basic","Primary","Secondary","Disabled","Pending","Stacked","WithIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:o,Pending:s,Primary:a,Secondary:e,Stacked:i,WithIcon:d,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{q as B,o as D,s as P,e as S,d as W,t as a,i as b};
