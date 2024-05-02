import{j as t}from"./jsx-runtime-6eef64cc.js";import{D as w,L as S,I as m}from"./index-b1e3628a.js";import{g}from"./index-aa3a2926.js";import{r as T}from"./index-c013ead5.js";import{a as d,u as a,b as l,p as _}from"./index-2b4c4340.js";import{T as D}from"./Typography-2ed3318f.js";import{L as E}from"./LinkBase-3e4249b4.js";const i=d.div`
  ${()=>{const{tokens:o}=a(),{link:n}=o;return[l`
        display: inline-flex;
        gap: ${n.withIcon.gap};
      `]}}
`,W=d(D)`
  ${()=>{const{tokens:o}=a(),{link:n}=o;return l`
      background: ${n.backgroundColor.base};

      text-decoration-line: ${n.decoration.line};
      text-decoration-thickness: ${n.decoration.thickness.base};
      text-underline-offset: 2px;

      ${i}:hover && {
        text-decoration-thickness: ${n.decoration.thickness.hover};
      }

      ${i}:active && {
        background: ${n.backgroundColor.active};
        text-decoration-thickness: ${n.decoration.thickness.active};
      }
    `}}
`,k=d.div`
  ${()=>{const{tokens:o}=a(),{link:n}=o,s=_(n.withIcon.size);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${s};
        height: ${s};
      }
    `}}
`,b=T.forwardRef((o,n)=>{const{children:s,startIcon:p,endIcon:h,testID:c="link",...j}=o,{tokens:v}=a(),{link:I}=v;return t.jsx(E,{...j,ref:n,display:"inline-flex",testID:c,children:t.jsxs(i,{children:[p&&t.jsx(k,{"data-testid":`${c}-start-icon-wrapper`,children:p}),t.jsx(W,{component:"span",color:"inherit",variant:I.typographyVariant,fontFamily:I.fontFamily,children:s}),h&&t.jsx(k,{"data-testid":`${c}-end-icon-wrapper`,children:h})]})})});b.displayName="LinkWithIcon";const z={title:"Inputs/LinkWithIcon",component:b,argTypes:{href:{control:{type:"text"}},startIcon:{...g(m),if:{arg:"endIcon",truthy:!1}},endIcon:{...g(m),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(w,{})}},r={args:{children:"Log in",endIcon:t.jsx(S,{})}};var u,f,x;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,$,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(L=($=r.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const C=["StartIcon","EndIcon"],N=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{r as E,N as L,e as S};
