import{j as n}from"./jsx-runtime-6eef64cc.js";import{D,L as E,I as u}from"./index-7aafd469.js";import{g as f}from"./index-aa3a2926.js";import{r as B}from"./index-c013ead5.js";import{a as c,u as i,b as p,p as z}from"./index-1940508f.js";import{L as C}from"./LinkBase-a3f88253.js";import{T as O}from"./Typography-5392f73e.js";const _=c(C)``,l=c.div`
  ${()=>{const{tokens:e}=i(),{link:o}=e;return[p`
        display: inline-flex;
        gap: ${o.withIcon.gap};
      `]}}
`,F=c(O)`
  ${()=>{const{tokens:e}=i(),{link:o}=e;return p`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line.base};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: ${o.decoration.offset};

      ${l}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${l}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }

      ${_}:focus-visible && {
        text-decoration-line: ${o.decoration.line.focus};
      }
    `}}
`,k=c.div`
  ${()=>{const{tokens:e}=i(),{link:o}=e,a=z(o.withIcon.size);return p`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${a};
        height: ${a};
      }
    `}}
`,h=B.forwardRef((e,o)=>{const{children:a,startIcon:m,endIcon:I,testID:d="link",...T}=e,{tokens:W}=i(),{link:g}=W;return n.jsx(_,{...T,ref:o,display:"inline-flex",testID:d,children:n.jsxs(l,{children:[m&&n.jsx(k,{"data-testid":`${d}-start-icon-wrapper`,children:m}),n.jsx(F,{component:"span",color:"inherit",variant:g.typography.variant,fontFamily:g.typography.fontFamily,children:a}),I&&n.jsx(k,{"data-testid":`${d}-end-icon-wrapper`,children:I})]})})});h.displayName="LinkWithIcon";h.__docgenInfo={description:"",methods:[],displayName:"LinkWithIcon"};const N={title:"Components/Inputs/LinkWithIcon",component:h,argTypes:{href:{control:{type:"text"}},startIcon:{...f(u),if:{arg:"endIcon",truthy:!1}},endIcon:{...f(u),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},t={args:{children:"Download report",startIcon:n.jsx(D,{})}},r={args:{children:"Download report",startIcon:n.jsx(D,{})}},s={args:{children:"Log in",endIcon:n.jsx(E,{})}};var x,y,$;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...($=(y=t.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var b,w,L;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(L=(w=r.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var j,v,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const P=["Basic","StartIcon","EndIcon"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,EndIcon:s,StartIcon:r,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{t as B,s as E,K as L,r as S};
