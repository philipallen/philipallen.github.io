import{j as t}from"./jsx-runtime-6eef64cc.js";import{D as w,L as S,I as g}from"./index-fc1df4e3.js";import{g as k}from"./index-aa3a2926.js";import{r as _}from"./index-c013ead5.js";import{a as d,u as a,b as l,p as T}from"./index-40766bf6.js";import{T as D}from"./Typography-ff2e0ce1.js";import{L as E}from"./LinkBase-55375781.js";const i=d.div`
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
`,f=d.div`
  ${()=>{const{tokens:o}=a(),{link:n}=o,s=T(n.withIcon.size);return l`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${s};
        height: ${s};
      }
    `}}
`,p=_.forwardRef((o,n)=>{const{children:s,startIcon:h,endIcon:m,testID:c="link",...j}=o,{tokens:v}=a(),{link:I}=v;return t.jsx(E,{...j,ref:n,display:"inline-flex",testID:c,children:t.jsxs(i,{children:[h&&t.jsx(f,{"data-testid":`${c}-start-icon-wrapper`,children:h}),t.jsx(W,{component:"span",color:"inherit",variant:I.typographyVariant,fontFamily:I.fontFamily,children:s}),m&&t.jsx(f,{"data-testid":`${c}-end-icon-wrapper`,children:m})]})})});p.displayName="LinkWithIcon";p.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const z={title:"Components/Inputs/LinkWithIcon",component:p,argTypes:{href:{control:{type:"text"}},startIcon:{...k(g),if:{arg:"endIcon",truthy:!1}},endIcon:{...k(g),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(w,{})}},r={args:{children:"Log in",endIcon:t.jsx(S,{})}};var u,x,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var $,L,b;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(b=(L=r.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const C=["StartIcon","EndIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{r as E,M as L,e as S};
