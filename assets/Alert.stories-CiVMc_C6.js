import{j as r}from"./jsx-runtime-DQ32znRX.js";import{g as i,d as L,H as T}from"./index-DKJt7waT.js";import{a as c,u as l,b,p as j}from"./index-CtBUti8q.js";import{E as A,W as I,S as w,d as S}from"./index-Bkh50RYL.js";import{T as g}from"./Typography-v4_88_aK.js";import{L as F}from"./Link-B1qarITh.js";const D=c.div`
  ${({$severity:o})=>{const{tokens:t}=l(),{alert:e}=t;return b`
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
`,W=c.div`
  ${({$severity:o})=>{const{tokens:t}=l(),{alert:e}=t;return b`
      display: grid;
      place-items: center;
      height: ${j(e.iconWrapper.height)};

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
`,B=c.div`
  overflow-wrap: anywhere;
`;function x(o){const{severity:t=i.DEFAULT_SEVERITY,heading:e,headingLevel:$=i.DEFAULT_HEADING_LEVEL,children:p,testID:d="alert"}=o,{tokens:v}=l(),{alert:a}=v,_={error:"alert",warning:"alert",success:"status",info:"status"},k={error:r.jsx(A,{}),warning:r.jsx(I,{}),success:r.jsx(w,{}),info:r.jsx(S,{})};return r.jsxs(D,{role:_[t],$severity:t,"data-testid":d,children:[r.jsx("div",{children:r.jsx(W,{$severity:t,children:k[t]})}),r.jsxs(B,{children:[r.jsx(g,{component:`h${$}`,color:a.heading.typography.color,variant:a.heading.typography.variant,fontFamily:a.heading.typography.fontFamily,"data-testid":`${d}-heading`,children:e}),p&&r.jsx(g,{color:a.body.typography.color,variant:a.body.typography.variant,fontFamily:a.body.typography.fontFamily,"data-testid":`${d}-body`,children:p})]})]})}x.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"AlertSeverity"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const R={title:"Components/Feedback/Alert",component:x,argTypes:{severity:{control:{type:"select"},options:L},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:T},children:{control:{disable:!0}}},args:{severity:i.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:i.DEFAULT_HEADING_LEVEL}},s={},n={args:{children:r.jsxs(r.Fragment,{children:["Body message text and ",r.jsx(F,{href:"#",children:"text link if necessary"}),"."]})}};var h,y,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(m=(y=s.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,f,E;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const V=["Basic","WithBody"],O=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,WithBody:n,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{O as A,s as B,n as W};
