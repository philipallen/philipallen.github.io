import{j as r}from"./jsx-runtime-DQ32znRX.js";import{L as g}from"./index-DKJt7waT.js";import{D as P,L as M,e as x}from"./index-Bkh50RYL.js";import{g as $}from"./index-BgzBzW_7.js";import{r as q}from"./index-DH5ua8nC.js";import{a as p,u as h,b as l,p as G}from"./index-CtBUti8q.js";import{L as H}from"./LinkBase-9_uKMkeQ.js";import{T as J}from"./Typography-v4_88_aK.js";const z=p(H)``,f=p.div`
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

        ${z}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,n&&l`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,n&&o&&l`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,D=p.div`
  ${({$variant:n})=>{const{tokens:o}=h(),{link:t}=o,e=G(t.withIcon.size[n]);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,I=q.forwardRef((n,o)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:m=g.DEFAULT_VARIANT,startIcon:k,endIcon:y,children:C,testID:u="link",...F}=n,{tokens:O}=h(),{link:V}=O;return r.jsx(z,{...F,ref:o,display:"inline-flex",testID:u,children:r.jsxs(f,{children:[k&&r.jsx(D,{$variant:m,"data-testid":`${u}-start-icon-wrapper`,children:k}),r.jsx(K,{component:"span",color:"inherit",variant:m,fontFamily:V.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:C}),y&&r.jsx(D,{$variant:m,"data-testid":`${u}-end-icon-wrapper`,children:y})]})})});I.displayName="LinkWithIcon";I.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const Q={title:"Components/Inputs/LinkWithIcon",component:I,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS},startIcon:{...$(x),if:{arg:"endIcon",truthy:!1}},endIcon:{...$(x),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{isDashed:!0,children:"Download report"}},i={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}},c={args:{children:"Download report",startIcon:r.jsx(P,{})}},d={args:{children:"Log in",endIcon:r.jsx(M,{})}};var b,L,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(T=(L=s.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var w,v,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,j,U;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(j=i.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var A,E,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var W,B,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const X=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dashed:a,EndIcon:d,NoUnderline:i,StartIcon:c,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,d as E,ae as L,i as N,c as S};
