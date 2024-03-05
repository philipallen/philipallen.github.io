import{a as g,u as i,b as c,j as t}from"./index-b51be3ed.js";import{D as _,L as D,I as f}from"./index-3215a802.js";import{g as m}from"./index-219738ab.js";import{r as E}from"./index-c013ead5.js";import{T as B}from"./Typography-c4d9a36b.js";const u=g.a`
  ${({$hasIcon:e})=>{const{tokens:o}=i(),{link:n}=o;return[c`
        all: unset;
        display: inline;
        color: ${n.color.base};
        cursor: pointer;

        &:hover {
          color: ${n.color.hover};
        }

        &:focus-visible {
          outline-width: ${n.focusRing.width};
          outline-style: ${n.focusRing.style};
          outline-color: ${n.focusRing.color};
          outline-offset: ${n.focusRing.offset};
          border-radius: ${n.focusRing.radius};
        }
      `,e&&c`
          display: inline-flex;
          gap: ${n.withIcon.gap};
        `]}}
`,z=g(B)`
  ${()=>{const{tokens:e}=i(),{link:o}=e;return c`
      background: ${o.backgroundColor.base};

      text-decoration-line: ${o.decoration.line};
      text-decoration-thickness: ${o.decoration.thickness.base};
      text-underline-offset: 2px;

      ${u}:hover && {
        text-decoration-thickness: ${o.decoration.thickness.hover};
      }

      ${u}:active && {
        background: ${o.backgroundColor.active};
        text-decoration-thickness: ${o.decoration.thickness.active};
      }
    `}}
`,I=g.div`
  ${()=>{const{tokens:e}=i(),{link:o}=e;return c`
      flex-shrink: 0;

      svg {
        display: block;
        width: ${o.withIcon.size};
        height: ${o.withIcon.size};
      }
    `}}
`,C=E.forwardRef;function F(e,o){const{children:n,startIcon:l,endIcon:d,component:S="a",testID:p="link",...T}=e,{tokens:R}=i(),{link:h}=R;return t.jsxs(u,{...T,ref:o,as:S,"data-testid":p,$hasIcon:!!(l||d),children:[l&&t.jsx(I,{"data-testid":`${p}-start-icon-wrapper`,children:l}),t.jsx("span",{children:t.jsx(z,{component:"span",color:"inherit",variant:h.typographyVariant,fontFamily:h.fontFamily,children:n})}),d&&t.jsx(I,{"data-testid":`${p}-end-icon-wrapper`,children:d})]})}const O=C(F),P={title:"Inputs/Link",component:O,argTypes:{startIcon:{...m(f),if:{arg:"endIcon",truthy:!1}},endIcon:{...m(f),if:{arg:"startIcon",truthy:!1}}},args:{href:"#"}},r={args:{children:"Text link label"}},s={args:{children:"Download report",startIcon:t.jsx(_,{})}},a={args:{children:"Log in",endIcon:t.jsx(D,{})}};var k,x,$;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Text link label"
  }
}`,...($=(x=r.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var y,b,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,j,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const A=["Basic","StartIcon","EndIcon"],G=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,EndIcon:a,StartIcon:s,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{r as B,a as E,G as L,s as S};
