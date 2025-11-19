import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{L as g}from"./index-HXCmP3Qs.js";import{k as R,D as G,L as M,i as x}from"./index-jIEI4ct_.js";import{f as q,g as y}from"./index-Bt5smqGw.js";import{a as p,u as h,b as l,p as H}from"./index-5VPm3mt9.js";import{L as J}from"./LinkBase-DY7MZ5vY.js";import{T as K}from"./Typography-CWLzUOZE.js";const z=p(J)``,I=p.div`
  ${()=>{const{tokens:o}=h(),{link:r}=o;return[l`
        display: inline-flex;
        gap: ${r.withIcon.gap};
      `]}}
`,Q=p(K)`
  ${({$isUnderlined:o,$isDashed:r})=>{const{tokens:t}=h(),{link:e}=t;return[l`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${I}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${I}:active && {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        ${z}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,o&&l`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,o&&r&&l`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=p.div`
  ${({$variant:o})=>{const{tokens:r}=h(),{link:t}=r,e=H(t.withIcon.size[o]);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,C=q((o,r)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:u=g.DEFAULT_VARIANT,startIcon:f,endIcon:k,children:F,testID:m="link",...O}=o,{tokens:V}=h(),{link:P}=V;return n.jsx(z,{...O,ref:r,display:"inline-flex",testID:m,children:n.jsxs(I,{children:[f&&n.jsx($,{$variant:u,"data-testid":`${m}-start-icon-wrapper`,children:f}),n.jsx(Q,{component:"span",color:"inherit",variant:u,fontFamily:P.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:F}),k&&n.jsx($,{$variant:u,"data-testid":`${m}-end-icon-wrapper`,children:k})]})})});C.displayName="LinkWithIcon";const X={title:"Components/Inputs/LinkWithIcon",component:C,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS},startIcon:{...y(x),if:{arg:"endIcon",truthy:!1}},endIcon:{...y(x),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:n.jsx(R,{}),isDashed:!0,children:"Download report"}},c={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:n.jsx(R,{}),isUnderlined:!1,children:"Download report"}},i={args:{children:"Download report",startIcon:n.jsx(G,{})}},d={args:{children:"Log in",endIcon:n.jsx(M,{})}};var D,b,T;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,L,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  argTypes: {
    isDashed: {
      control: {
        disable: true
      }
    }
  },
  args: {
    startIcon: <Icons.AccountIcon />,
    isDashed: true,
    children: "Download report"
  }
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var S,j,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    isUnderlined: {
      control: {
        disable: true
      }
    }
  },
  args: {
    startIcon: <Icons.AccountIcon />,
    isUnderlined: false,
    children: "Download report"
  }
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var _,U,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(E=(U=i.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var N,W,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Y=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dashed:a,EndIcon:d,NoUnderline:c,StartIcon:i,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,d as E,ae as L,c as N,i as S};
