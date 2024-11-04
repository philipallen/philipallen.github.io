import{j as r}from"./jsx-runtime-DQ32znRX.js";import{L as h}from"./index-C3m9D1_L.js";import{D as z,L as C,e as k}from"./index-COlUQA8Q.js";import{g as x}from"./index-BgzBzW_7.js";import{r as F}from"./index-DH5ua8nC.js";import{a as l,u as p,b as d,p as O}from"./index-C-LSVLXB.js";import{L as V}from"./LinkBase-hWnxd0rd.js";import{T as P}from"./Typography-DPnR7vBA.js";const E=l(V)``,g=l.div`
  ${()=>{const{tokens:e}=p(),{link:o}=e;return[d`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,M=l(P)`
  ${({$isUnderlined:e})=>{const{tokens:o}=p(),{link:n}=o;return[d`
        background: ${n.backgroundColor.base};

        text-decoration-thickness: ${n.decoration.thickness.base};
        text-underline-offset: ${n.decoration.offset};

        ${g}:hover && {
          text-decoration-line: ${n.decoration.line.base};
          text-decoration-thickness: ${n.decoration.thickness.hover};
        }

        ${g}:active && {
          background: ${n.backgroundColor.active};
          text-decoration-line: ${n.decoration.line.base};
          text-decoration-thickness: ${n.decoration.thickness.active};
        }

        ${E}:focus-visible && {
          text-decoration-line: ${n.decoration.line.focus};
        }
      `,e&&d`
          text-decoration-line: ${n.decoration.line.base};
        `]}}
`,$=l.div`
  ${({$variant:e})=>{const{tokens:o}=p(),{link:n}=o,t=O(n.withIcon.size[e]);return d`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${t};
        height: ${t};
      }
    `}}
`,u=F.forwardRef((e,o)=>{const{isUnderlined:n=!0,variant:t=h.DEFAULT_VARIANT,startIcon:I,endIcon:f,children:N,testID:m="link",...W}=e,{tokens:B}=p(),{link:R}=B;return r.jsx(E,{...W,ref:o,display:"inline-flex",testID:m,children:r.jsxs(g,{children:[I&&r.jsx($,{$variant:t,"data-testid":`${m}-start-icon-wrapper`,children:I}),r.jsx(M,{component:"span",color:"inherit",variant:t,fontFamily:R.typography.fontFamily,$isUnderlined:n,children:N}),f&&r.jsx($,{$variant:t,"data-testid":`${m}-end-icon-wrapper`,children:f})]})})});u.displayName="LinkWithIcon";u.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const q={title:"Components/Inputs/LinkWithIcon",component:u,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},variant:{control:{type:"select"},options:h.VARIANTS},startIcon:{...x(k),if:{arg:"endIcon",truthy:!1}},endIcon:{...x(k),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:h.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}},i={args:{children:"Download report",startIcon:r.jsx(z,{})}},c={args:{children:"Log in",endIcon:r.jsx(C,{})}};var y,b,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var v,T,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(T=a.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,S,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var j,U,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(A=(U=c.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const G=["Basic","NoUnderline","StartIcon","EndIcon"],en=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,EndIcon:c,NoUnderline:a,StartIcon:i,__namedExportsOrder:G,default:q},Symbol.toStringTag,{value:"Module"}));export{s as B,c as E,en as L,a as N,i as S};
