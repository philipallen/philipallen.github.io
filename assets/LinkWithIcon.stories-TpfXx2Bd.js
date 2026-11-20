import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{L as t}from"./index-ba3HtoI3.js";import{s as w,L as T,D as A,r as c}from"./index-BMNx4yaP.js";import{a as d}from"./index-Doj3HQ5r.js";import{L as j}from"./LinkWithIcon-Dcvm-gPE.js";const U={title:"Components/Inputs/LinkWithIcon",component:j,argTypes:{href:{control:{type:"text"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:t.VARIANTS.filter(x=>["bodyL","bodyM","bodyS"].includes(x))},startIcon:{...d(c),if:{arg:"endIcon",truthy:!1}},endIcon:{...d(c),if:{arg:"startIcon",truthy:!1}}},args:{href:"#",variant:t.DEFAULT_VARIANT}},r={args:{children:"Download report"}},o={argTypes:{isDashed:{control:{disable:!0}}},args:{startIcon:a.jsx(w,{}),isDashed:!0,children:"Download report"}},n={argTypes:{isUnderlined:{control:{disable:!0}}},args:{startIcon:a.jsx(w,{}),isUnderlined:!1,children:"Download report"}},e={args:{children:"Download report",startIcon:a.jsx(A,{})}},s={args:{children:"Log in",endIcon:a.jsx(T,{})}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Download report"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,I;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(I=(u=o.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var D,y,L;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(L=(y=e.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var S,b,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(_=(b=s.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const E=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],R=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Dashed:o,EndIcon:s,NoUnderline:n,StartIcon:e,__namedExportsOrder:E,default:U},Symbol.toStringTag,{value:"Module"}));export{r as B,o as D,s as E,R as L,n as N,e as S};
