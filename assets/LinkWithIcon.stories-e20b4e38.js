import{j as t}from"./jsx-runtime-6eef64cc.js";import{D as S,L as _,I as f}from"./index-7aafd469.js";import{g}from"./index-aa3a2926.js";import{r as T}from"./index-c013ead5.js";import{a,u as c,b as l,p as D}from"./index-1940508f.js";import{L as W}from"./LinkBase-a3f88253.js";import{T as E}from"./Typography-5392f73e.js";const v=a(W)``,d=a.div`
  ${()=>{const{tokens:n}=c(),{link:o}=n;return[l`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,z=a(E)`
  ${()=>{const{tokens:n}=c(),{link:o}=n;return l`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${d}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${d}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${v}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,k=a.div`
  ${()=>{const{tokens:n}=c(),{link:o}=n,s=D(o.withIcon.size);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${s};
        height: ${s};
      }
    `}}
`,p=T.forwardRef((n,o)=>{const{children:s,startIcon:h,endIcon:m,testID:i="link",...j}=n,{tokens:w}=c(),{link:I}=w;return t.jsx(v,{...j,ref:o,display:"inline-flex",testID:i,children:t.jsxs(d,{children:[h&&t.jsx(k,{"data-testid":`${i}-start-icon-wrapper`,children:h}),t.jsx(z,{component:"span",color:"inherit",variant:I.typography.variant,fontFamily:I.typography.fontFamily,children:s}),m&&t.jsx(k,{"data-testid":`${i}-end-icon-wrapper`,children:m})]})})});p.displayName="LinkWithIcon";p.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const C={title:"Components/Inputs/LinkWithIcon",component:p,argTypes:{href:{control:{type:"text"}},startIcon:{...g(f),if:{arg:"endIcon",truthy:!1}},endIcon:{...g(f),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(S,{})}},r={args:{children:"Log in",endIcon:t.jsx(_,{})}};var u,x,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var $,b,L;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(L=(b=r.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const O=["StartIcon","EndIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:O,default:C},Symbol.toStringTag,{value:"Module"}));export{r as E,q as L,e as S};
