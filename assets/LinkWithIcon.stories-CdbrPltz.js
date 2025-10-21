import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{L as g}from"./index-CoGc3U6X.js";import{f as G,j as x,v as R,w as M,L as q,l as y}from"./index-CA_uD5kO.js";import{a as p,u as h,b as l,p as H}from"./index-5VPm3mt9.js";import{L as J}from"./LinkBase-CD7Tnwh_.js";import{T as K}from"./Typography-Fd9Ks9lL.js";const z=p(J)``,m=p.div`
  ${()=>{const{tokens:o}=h(),{link:r}=o;return[l`
        display: inline-flex;
        gap: ${r.withIcon.gap};
      `]}}
`,Q=p(K)`
  ${({$isUnderlined:o,$isDashed:r})=>{const{tokens:t}=h(),{link:e}=t;return[l`
        background: ${e.backgroundColor.base};

        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        ${m}:hover && {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        ${m}:active && {
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
`,C=G((o,r)=>{const{isUnderlined:t=!0,isDashed:e=!1,variant:u=g.DEFAULT_VARIANT,startIcon:f,endIcon:k,children:F,testID:I="link",...O}=o,{tokens:V}=h(),{link:P}=V;return n.jsx(z,{...O,ref:r,display:"inline-flex",testID:I,children:n.jsxs(m,{children:[f&&n.jsx($,{$variant:u,"data-testid":`${I}-start-icon-wrapper`,children:f}),n.jsx(Q,{component:"span",color:"inherit",variant:u,fontFamily:P.typography.fontFamily,$isUnderlined:t,$isDashed:e,children:F}),k&&n.jsx($,{$variant:u,"data-testid":`${I}-end-icon-wrapper`,children:k})]})})});C.displayName="LinkWithIcon";const X={title:"Components/Inputs/LinkWithIcon",component:C,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:g.VARIANTS},startIcon:{...x(y),if:{arg:"endIcon",truthy:!1}},endIcon:{...x(y),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:g.DEFAULT_VARIANT}},s={args:{children:"Download report"}},a={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:n.jsx(R,{}),isDashed:!0,children:"Download report"}},c={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:n.jsx(R,{}),isUnderlined:!1,children:"Download report"}},i={args:{children:"Download report",startIcon:n.jsx(M,{})}},d={args:{children:"Log in",endIcon:n.jsx(q,{})}};var D,b,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,v,L;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var j,S,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var _,U,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(E=(U=i.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var N,W,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Y=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],se=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dashed:a,EndIcon:d,NoUnderline:c,StartIcon:i,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,d as E,se as L,c as N,i as S};
