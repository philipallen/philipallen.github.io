import{a as d,u as a,b as l,p as w,j as t}from"./index-74fe31d7.js";import{D as S,L as T,I as g}from"./index-40416c04.js";import{g as k}from"./index-219738ab.js";import{r as _}from"./index-c013ead5.js";import{T as D}from"./Typography-5c86d7b4.js";import{L as E}from"./LinkBase-1c8efc99.js";const i=d.div`
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
`,m=d.div`
  ${()=>{const{tokens:o}=a(),{link:n}=o,s=w(n.withIcon.size);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${s};
        height: ${s};
      }
    `}}
`,b=_.forwardRef((o,n)=>{const{children:s,startIcon:p,endIcon:h,testID:c="link",...j}=o,{tokens:v}=a(),{link:I}=v;return t.jsx(E,{...j,ref:n,display:"inline-flex",testID:c,children:t.jsxs(i,{children:[p&&t.jsx(m,{"data-testid":`${c}-start-icon-wrapper`,children:p}),t.jsx(W,{component:"span",color:"inherit",variant:I.typographyVariant,fontFamily:I.fontFamily,children:s}),h&&t.jsx(m,{"data-testid":`${c}-end-icon-wrapper`,children:h})]})})});b.displayName="LinkWithIcon";const z={title:"Inputs/LinkWithIcon",component:b,argTypes:{href:{control:{type:"text"}},startIcon:{...k(g),if:{arg:"endIcon",truthy:!1}},endIcon:{...k(g),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(S,{})}},r={args:{children:"Log in",endIcon:t.jsx(T,{})}};var u,f,x;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,$,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(L=($=r.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const C=["StartIcon","EndIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{r as E,M as L,e as S};
