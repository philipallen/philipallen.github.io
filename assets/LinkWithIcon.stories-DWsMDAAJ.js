import{j as r}from"./jsx-runtime-BkBIjjFT.js";import{L as g}from"./index-VIbBARS4.js";import{D as P,L as M,i as x}from"./index-qhhwF6MA.js";import{g as y}from"./index-BQlaamZD.js";import{r as q}from"./index-KmaxkdDD.js";import{a as p,u as h,b as l,p as G}from"./index-DT8u_GqS.js";import{L as H}from"./LinkBase-DNJeKfD_.js";import{T as J}from"./Typography-wg1R8lvT.js";const R=p(H)``,f=p.div`
  ${()=>{const{tokens:n}=h(),{link:o}=n;return[l`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,K=p(J)`
  ${({$isUnderlined:n,$isDashed:o})=>{const{tokens:t}=h(),{link:e}=t;return[l`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${f}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${f}:active && {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        ${R}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,n&&l`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,n&&o&&l`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=p.div`
  ${({$variant:n})=>{const{tokens:o}=h(),{link:t}=o,e=G(t.withIcon.size[n]);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,z=q.forwardRef((n,o)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:m=g.DEFAULT_VARIANT,startIcon:I,endIcon:k,children:C,testID:u="link",...F}=n,{tokens:O}=h(),{link:V}=O;return r.jsx(R,{...F,ref:o,display:"inline-flex",testID:u,children:r.jsxs(f,{children:[I&&r.jsx($,{$variant:m,"data-testid":`${u}-start-icon-wrapper`,children:I}),r.jsx(K,{component:"span",color:"inherit",variant:m,fontFamily:V.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:C}),k&&r.jsx($,{$variant:m,"data-testid":`${u}-end-icon-wrapper`,children:k})]})})});z.displayName="LinkWithIcon";const Q={title:"Components/Inputs/LinkWithIcon",component:z,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS},startIcon:{...y(x),if:{arg:"endIcon",truthy:!1}},endIcon:{...y(x),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{isDashed:!0,children:"Download report"}},i={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}},c={args:{children:"Download report",startIcon:r.jsx(P,{})}},d={args:{children:"Log in",endIcon:r.jsx(M,{})}};var D,b,T;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    isDashed: true,
    children: "Download report"
  }
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var S,j,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    isUnderlined: {
      control: {
        disable: true
      }
    }
  },
  args: {
    isUnderlined: false,
    children: "Download report"
  }
}`,...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var U,A,E;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var N,W,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const X=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dashed:a,EndIcon:d,NoUnderline:i,StartIcon:c,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,d as E,ae as L,i as N,c as S};
