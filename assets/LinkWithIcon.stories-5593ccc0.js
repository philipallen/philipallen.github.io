import{a as i,u as s,b as d,j as t}from"./index-e76b8df1.js";import{D as v,L as S,I}from"./index-19b017fb.js";import{g}from"./index-219738ab.js";import{r as _}from"./index-c013ead5.js";import{T as D}from"./Typography-ab363d23.js";import{L as T}from"./LinkBase-697caf8d.js";const c=i.div`
  ${()=>{const{tokens:o}=s(),{link:n}=o;return[d`
        display: inline-flex;
        gap: ${n.withIcon.gap};
      `]}}
`,E=i(D)`
  ${()=>{const{tokens:o}=s(),{link:n}=o;return d`
      background: ${n.backgroundColor.base};

      text-decoration-line: ${n.decoration.line};
      text-decoration-thickness: ${n.decoration.thickness.base};
      text-underline-offset: 2px;

      ${c}:hover && {
        text-decoration-thickness: ${n.decoration.thickness.hover};
      }

      ${c}:active && {
        background: ${n.backgroundColor.active};
        text-decoration-thickness: ${n.decoration.thickness.active};
      }
    `}}
`,m=i.div`
  ${()=>{const{tokens:o}=s(),{link:n}=o;return d`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${n.withIcon.size};
        height: ${n.withIcon.size};
      }
    `}}
`,L=_.forwardRef((o,n)=>{const{children:b,startIcon:l,endIcon:p,testID:a="link",...j}=o,{tokens:w}=s(),{link:h}=w;return t.jsx(T,{...j,ref:n,display:"inline-flex",testID:a,children:t.jsxs(c,{children:[l&&t.jsx(m,{"data-testid":`${a}-start-icon-wrapper`,children:l}),t.jsx(E,{component:"span",color:"inherit",variant:h.typographyVariant,fontFamily:h.fontFamily,children:b}),p&&t.jsx(m,{"data-testid":`${a}-end-icon-wrapper`,children:p})]})})});L.displayName="LinkWithIcon";const W={title:"Inputs/LinkWithIcon",component:L,argTypes:{href:{control:{type:"text"}},startIcon:{...g(I),if:{arg:"endIcon",truthy:!1}},endIcon:{...g(I),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(v,{})}},r={args:{children:"Log in",endIcon:t.jsx(S,{})}};var k,u,f;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,y,$;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...($=(y=r.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const z=["StartIcon","EndIcon"],A=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:z,default:W},Symbol.toStringTag,{value:"Module"}));export{r as E,A as L,e as S};
