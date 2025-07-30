import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{L as m}from"./index-WLaP1tkh.js";import{f as P,j as y,v as G,L as M,l as x}from"./index-DrshOz9v.js";import{a as p,u as h,b as l,p as q}from"./index-BHlkTKmU.js";import{L as H}from"./LinkBase-Du981g3_.js";import{T as J}from"./Typography-CYNqbWwa.js";const R=p(H)``,f=p.div`
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
  ${({$variant:n})=>{const{tokens:o}=h(),{link:t}=o,e=q(t.withIcon.size[n]);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,z=P((n,o)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:u=m.DEFAULT_VARIANT,startIcon:I,endIcon:k,children:C,testID:g="link",...F}=n,{tokens:O}=h(),{link:V}=O;return r.jsx(R,{...F,ref:o,display:"inline-flex",testID:g,children:r.jsxs(f,{children:[I&&r.jsx($,{$variant:u,"data-testid":`${g}-start-icon-wrapper`,children:I}),r.jsx(K,{component:"span",color:"inherit",variant:u,fontFamily:V.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:C}),k&&r.jsx($,{$variant:u,"data-testid":`${g}-end-icon-wrapper`,children:k})]})})});z.displayName="LinkWithIcon";const Q={title:"Components/Inputs/LinkWithIcon",component:z,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:m.VARIANTS},startIcon:{...y(x),if:{arg:"endIcon",truthy:!1}},endIcon:{...y(x),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:m.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{isDashed:!0,children:"Download report"}},i={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}},c={args:{children:"Download report",startIcon:r.jsx(G,{})}},d={args:{children:"Log in",endIcon:r.jsx(M,{})}};var D,b,T;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,w,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var S,j,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const X=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],te=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dashed:a,EndIcon:d,NoUnderline:i,StartIcon:c,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,d as E,te as L,i as N,c as S};
