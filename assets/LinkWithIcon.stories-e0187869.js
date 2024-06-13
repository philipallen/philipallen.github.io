import{j as e}from"./jsx-runtime-6eef64cc.js";import{D as W,L as E,I as u}from"./index-b1778622.js";import{g as f}from"./index-aa3a2926.js";import{r as B}from"./index-c013ead5.js";import{a as c,u as i,b as l,p as z}from"./index-f9091704.js";import{L as C}from"./LinkBase-690383f0.js";import{T as O}from"./Typography-401b61b3.js";const _=c(C)``,p=c.div`
  ${()=>{const{tokens:n}=i(),{link:o}=n;return[l`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,F=c(O)`
  ${()=>{const{tokens:n}=i(),{link:o}=n;return l`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${p}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${p}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${_}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,k=c.div`
  ${()=>{const{tokens:n}=i(),{link:o}=n,a=z(o.withIcon.size);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${a};
        height: ${a};
      }
    `}}
`,h=B.forwardRef((n,o)=>{const{children:a,startIcon:m,endIcon:g,testID:d="link",...D}=n,{tokens:T}=i(),{link:I}=T;return e.jsx(_,{...D,ref:o,display:"inline-flex",testID:d,children:e.jsxs(p,{children:[m&&e.jsx(k,{"data-testid":`${d}-start-icon-wrapper`,children:m}),e.jsx(F,{component:"span",color:"inherit",variant:I.typography.variant,fontFamily:I.typography.fontFamily,children:a}),g&&e.jsx(k,{"data-testid":`${d}-end-icon-wrapper`,children:g})]})})});h.displayName="LinkWithIcon";h.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const N={title:"Components/Inputs/LinkWithIcon",component:h,argTypes:{href:{control:{type:"text"}},startIcon:{...f(u),if:{arg:"endIcon",truthy:!1}},endIcon:{...f(u),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},t={args:{children:"Download report"}},r={args:{children:"Download report",startIcon:e.jsx(W,{})}},s={args:{children:"Log in",endIcon:e.jsx(E,{})}};var x,y,$;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...($=(y=t.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var b,L,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(v=(L=r.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var w,j,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const P=["Basic","StartIcon","EndIcon"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,EndIcon:s,StartIcon:r,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{t as B,s as E,K as L,r as S};
