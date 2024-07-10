import{j as r}from"./jsx-runtime-DQ32znRX.js";import{b as s}from"./index-Cee7vv5h.js";import{a as d,u as c,b,p as L}from"./index-CWEVnOcG.js";import{E as T,W as j,S as A,g as I}from"./index-ef8Z-xiF.js";import{T as p}from"./Typography-BayW6epx.js";import{L as w}from"./Link-D0BT7lgf.js";const S=d.div`
  ${({$severity:o})=>{const{tokens:t}=c(),{alert:e}=t;return b`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.gap};
      border-radius: ${e.radius};
      border-top-width: ${e.stroke.width.top};
      border-left-width: ${e.stroke.width.left};
      border-right-width: ${e.stroke.width.right};
      border-bottom-width: ${e.stroke.width.bottom};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color[o]};
      padding-top: ${e.padding.top};
      padding-left: ${e.padding.left};
      padding-right: ${e.padding.right};
      padding-bottom: ${e.padding.bottom};
      background-color: ${e.background[o]};
    `}}
`,F=d.div`
  ${({$severity:o})=>{const{tokens:t}=c(),{alert:e}=t;return b`
      display: grid;
      place-items: center;
      height: ${L(e.iconWrapper.height)};

      svg {
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};

        & [data-primary-color] {
          color: ${e.icon.primaryColor[o]};
        }

        & [data-secondary-color] {
          color: ${e.icon.secondaryColor[o]};
        }
      }
    `}}
`,D=d.div`
  overflow-wrap: anywhere;
`;function E(o){const{severity:t=s.DEFAULT_SEVERITY,heading:e,headingLevel:x=s.DEFAULT_HEADING_LEVEL,children:l,testID:v="alert"}=o,{tokens:$}=c(),{alert:a}=$,k={error:"alert",warning:"alert",success:"status",info:"status"},_={error:r.jsx(T,{}),warning:r.jsx(j,{}),success:r.jsx(A,{}),info:r.jsx(I,{})};return r.jsxs(S,{role:k[t],$severity:t,"data-testid":v,children:[r.jsx("div",{children:r.jsx(F,{$severity:t,children:_[t]})}),r.jsxs(D,{children:[r.jsx(p,{component:`h${x}`,color:a.heading.typography.color,variant:a.heading.typography.variant,fontFamily:a.heading.typography.fontFamily,children:e}),l&&r.jsx(p,{color:a.body.typography.color,variant:a.body.typography.variant,fontFamily:a.body.typography.fontFamily,children:l})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"CoreAlert.Severity"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"CoreAlert.HeadingLevel"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const W={title:"Components/Feedback/Alert",component:E,argTypes:{severity:{control:{type:"select"},options:s.SEVERITIES},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:s.HEADING_LEVELS},children:{control:{disable:!0}}},args:{severity:s.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:s.DEFAULT_HEADING_LEVEL}},n={},i={args:{children:r.jsxs(r.Fragment,{children:["Body message text and ",r.jsx(w,{href:"#",children:"text link if necessary"}),"."]})}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,u,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const B=["Basic","WithBody"],U=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,WithBody:i,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{U as A,n as B,i as W};
