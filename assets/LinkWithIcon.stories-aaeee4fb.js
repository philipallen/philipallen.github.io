import{a as i,u as s,b as d,j as t}from"./index-1154a484.js";import{D as L,L as v,I}from"./index-8544f6ee.js";import{g}from"./index-219738ab.js";import{T as w}from"./Typography-c902fb8d.js";import{L as S}from"./LinkBase-b486544d.js";const c=i.div`
  ${()=>{const{tokens:o}=s(),{link:n}=o;return[d`
        display: inline-flex;
        gap: ${n.withIcon.gap};
      `]}}
`,_=i(w)`
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
`,u=i.div`
  ${()=>{const{tokens:o}=s(),{link:n}=o;return d`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${n.withIcon.size};
        height: ${n.withIcon.size};
      }
    `}}
`;function D(o){const{children:n,startIcon:l,endIcon:p,testID:a="link",...b}=o,{tokens:j}=s(),{link:h}=j;return t.jsx(S,{...b,display:"inline-flex",testID:a,children:t.jsxs(c,{children:[l&&t.jsx(u,{"data-testid":`${a}-start-icon-wrapper`,children:l}),t.jsx(_,{component:"span",color:"inherit",variant:h.typographyVariant,fontFamily:h.fontFamily,children:n}),p&&t.jsx(u,{"data-testid":`${a}-end-icon-wrapper`,children:p})]})})}const T={title:"Inputs/LinkWithIcon",component:D,argTypes:{href:{control:{type:"text"}},startIcon:{...g(I),if:{arg:"endIcon",truthy:!1}},endIcon:{...g(I),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},e={args:{children:"Download report",startIcon:t.jsx(L,{})}},r={args:{children:"Log in",endIcon:t.jsx(v,{})}};var k,m,f;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,y,$;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...($=(y=r.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const E=["StartIcon","EndIcon"],F=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:r,StartIcon:e,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{r as E,F as L,e as S};
