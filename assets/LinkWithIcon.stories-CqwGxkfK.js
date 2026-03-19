import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{L as g}from"./index-eS8l-D1x.js";import{i as k,k as C,D as P,L as G}from"./index-B_KGh3jf.js";import{f as q,a as x}from"./index-NgCCK6aN.js";import{d as u,u as h,l as p,p as H}from"./index-C1QKVHyt.js";import{L as J}from"./LinkBase-CtO2Yn30.js";import{T as K}from"./Typography-BK_ZjFCe.js";const R=u(J)``,I=u.div`
  ${()=>{const{tokens:n}=h(),{link:r}=n;return[p`
        display: inline-flex;
        gap: ${r.withIcon.gap};
      `]}}
`,Q=u(K)`
  ${({$isUnderlined:n,$isDashed:r})=>{const{tokens:s}=h(),{link:e}=s;return[p`
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

        ${R}:focus-visible && {
          text-decoration-line: ${e.decoration.line.focus};
        }
      `,n&&p`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,n&&r&&p`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=u.div`
  ${({$variant:n,$isCentered:r})=>{const{tokens:s}=h(),{link:e}=s,t=H(e.withIcon.size[n]);return p`
      display: flex;
      flex-shrink: 0;
      align-items: ${r?"center":"flex-start"};

      svg {
        display: block;
        width: ${t};
        height: ${t};
      }
    `}}
`,z=q((n,r)=>{const{isUnderlined:s=!0,isDashed:e=!1,variant:t=g.DEFAULT_VARIANT,startIcon:f,endIcon:y,children:F,testID:m="link",...O}=n,{tokens:V}=h(),{link:M}=V;return o.jsx(R,{...O,ref:r,display:"inline-flex",testID:m,children:o.jsxs(I,{children:[f&&o.jsx($,{$variant:t,"data-testid":`${m}-start-icon-wrapper`,children:f}),o.jsx(Q,{component:"span",color:"inherit",variant:t,fontFamily:M.typography.fontFamily,$isUnderlined:s,$isDashed:e,children:F}),y&&o.jsx($,{$isCentered:!0,$variant:t,"data-testid":`${m}-end-icon-wrapper`,children:y})]})})});z.displayName="LinkWithIcon";const X={title:"Components/Inputs/LinkWithIcon",component:z,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS.filter(n=>["bodyL","bodyM","bodyS"].includes(n))},startIcon:{...x(k),if:{arg:"endIcon",truthy:!1}},endIcon:{...x(k),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},a={args:{children:"Download report"}},c={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:o.jsx(C,{}),isDashed:!0,children:"Download report"}},i={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:o.jsx(C,{}),isUnderlined:!1,children:"Download report"}},d={args:{children:"Download report",startIcon:o.jsx(P,{})}},l={args:{children:"Log in",endIcon:o.jsx(G,{})}};var D,b,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(L=(b=a.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var T,w,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,j,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var _,U,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(E=(U=d.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var N,W,B;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Y=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Dashed:c,EndIcon:l,NoUnderline:i,StartIcon:d,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{a as B,c as D,l as E,ae as L,i as N,d as S};
