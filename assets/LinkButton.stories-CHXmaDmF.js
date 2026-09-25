import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{A as _,i as A}from"./index-BVyJnF54.js";import{a as O}from"./index-Doj3HQ5r.js";import{B as w}from"./index-EybPYVoN.js";import{L as r}from"./LinkButton-Co33k5qZ.js";const E={title:"Components/Inputs/LinkButton",component:r,argTypes:{children:{control:{type:"text"}},href:{control:{type:"text"}},target:{control:{type:"text"}},variant:{control:{type:"select"},options:w.VARIANTS},isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:O(A)},args:{href:"#",children:"Link button text"}},e={},t={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",children:"Primary link button"}},a={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",children:"Secondary link button"}},i={argTypes:{variant:{control:{disable:!0}},isDisabled:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{href:"#",variant:"primary",isDisabled:!0,children:"Primary link button"}),n.jsx(r,{href:"#",variant:"secondary",isDisabled:!0,children:"Secondary link button"})]})},o={argTypes:{isPending:{control:{disable:!0}},children:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{href:"#",variant:"primary",isPending:!0,children:"Primary link button"}),n.jsx(r,{href:"#",variant:"secondary",isPending:!0,children:"Secondary link button"})]})},s={argTypes:{variant:{control:{disable:!0}}},render:()=>n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(r,{href:"#",variant:"primary",fullWidth:!0,children:"Primary link button"}),n.jsx(r,{href:"#",variant:"secondary",fullWidth:!0,children:"Secondary link button"})]})},d={args:{startIcon:n.jsx(_,{})},render:({startIcon:c})=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(r,{href:"#",variant:"primary",startIcon:c,children:"Primary link button"}),n.jsx(r,{href:"#",variant:"secondary",startIcon:c,children:"Secondary link button"})]})};var l,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    children: "Primary link button"
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    children: "Secondary link button"
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,f,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      <LinkButton href="#" variant="primary" isDisabled>
        Primary link button
      </LinkButton>
      <LinkButton href="#" variant="secondary" isDisabled>
        Secondary link button
      </LinkButton>
    </div>
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,L,P;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      <LinkButton href="#" variant="primary" isPending>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" isPending>
        Secondary link button
      </LinkButton>
    </div>
}`,...(P=(L=o.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var x,j,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <LinkButton href="#" variant="primary" fullWidth>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" fullWidth>
        Secondary link button
      </LinkButton>
    </div>
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var T,D,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <LinkButton href="#" variant="primary" startIcon={startIcon}>
        Primary link button
      </LinkButton>

      <LinkButton href="#" variant="secondary" startIcon={startIcon}>
        Secondary link button
      </LinkButton>
    </div>
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const R=["Basic","Primary","Secondary","Disabled","Pending","Stacked","WithIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,Disabled:i,Pending:o,Primary:t,Secondary:a,Stacked:s,WithIcon:d,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{e as B,i as D,q as L,o as P,a as S,d as W,s as a};
