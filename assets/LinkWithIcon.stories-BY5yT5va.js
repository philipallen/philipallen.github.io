import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{L as I}from"./index-t7j5zUOh.js";import{i as y,k as R,D as P,L as G}from"./index-B_KGh3jf.js";import{f as q,a as x}from"./index-NgCCK6aN.js";import{d as p,u as h,l,p as H}from"./index-DO5xE0d-.js";import{L as J}from"./LinkBase-EPV9qQFN.js";import{T as K}from"./Typography-WuGUrHnn.js";const z=p(J)``,g=p.div`
  ${()=>{const{tokens:n}=h(),{link:r}=n;return[l`
        display: inline-flex;
        gap: ${r.withIcon.gap};
      `]}}
`,Q=p(K)`
  ${({$isUnderlined:n,$isDashed:r})=>{const{tokens:t}=h(),{link:e}=t;return[l`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${g}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${g}:active && {
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
        `,n&&r&&l`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,$=p.div`
  ${({$variant:n})=>{const{tokens:r}=h(),{link:t}=r,e=H(t.withIcon.size[n]);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${e};
        height: ${e};
      }
    `}}
`,C=q((n,r)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:u=I.DEFAULT_VARIANT,startIcon:f,endIcon:k,children:F,testID:m="link",...O}=n,{tokens:V}=h(),{link:M}=V;return o.jsx(z,{...O,ref:r,display:"inline-flex",testID:m,children:o.jsxs(g,{children:[f&&o.jsx($,{$variant:u,"data-testid":`${m}-start-icon-wrapper`,children:f}),o.jsx(Q,{component:"span",color:"inherit",variant:u,fontFamily:M.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:F}),k&&o.jsx($,{$variant:u,"data-testid":`${m}-end-icon-wrapper`,children:k})]})})});C.displayName="LinkWithIcon";const X={title:"Components/Inputs/LinkWithIcon",component:C,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:I.VARIANTS.filter(n=>["bodyL","bodyM","bodyS"].includes(n))},startIcon:{...x(y),if:{arg:"endIcon",truthy:!1}},endIcon:{...x(y),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:I.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:o.jsx(R,{}),isDashed:!0,children:"Download report"}},c={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:o.jsx(R,{}),isUnderlined:!1,children:"Download report"}},i={args:{children:"Download report",startIcon:o.jsx(P,{})}},d={args:{children:"Log in",endIcon:o.jsx(G,{})}};var D,b,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var T,w,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,j,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
