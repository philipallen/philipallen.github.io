import{j as r}from"./jsx-runtime-DQ32znRX.js";import{b as i,H as L}from"./index-DCR-OBjd.js";import{a as d,u as c,b,p as T}from"./index-BW2nVlX_.js";import{E as j,W as I,S as w,g as A}from"./index-ef8Z-xiF.js";import{T as p}from"./Typography-DLg3KiKL.js";import{L as S}from"./Link-6ygOp4Jy.js";const F=d.div`
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
`,D=d.div`
  ${({$severity:o})=>{const{tokens:t}=c(),{alert:e}=t;return b`
      display: grid;
      place-items: center;
      height: ${T(e.iconWrapper.height)};

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
`,W=d.div`
  overflow-wrap: anywhere;
`;function E(o){const{severity:t=i.DEFAULT_SEVERITY,heading:e,headingLevel:x=i.DEFAULT_HEADING_LEVEL,children:l,testID:v="alert"}=o,{tokens:$}=c(),{alert:a}=$,k={error:"alert",warning:"alert",success:"status",info:"status"},_={error:r.jsx(j,{}),warning:r.jsx(I,{}),success:r.jsx(w,{}),info:r.jsx(A,{})};return r.jsxs(F,{role:k[t],$severity:t,"data-testid":v,children:[r.jsx("div",{children:r.jsx(D,{$severity:t,children:_[t]})}),r.jsxs(W,{children:[r.jsx(p,{component:`h${x}`,color:a.heading.typography.color,variant:a.heading.typography.variant,fontFamily:a.heading.typography.fontFamily,children:e}),l&&r.jsx(p,{color:a.body.typography.color,variant:a.body.typography.variant,fontFamily:a.body.typography.fontFamily,children:l})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"CoreAlert.Severity"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const B={title:"Components/Feedback/Alert",component:E,argTypes:{severity:{control:{type:"select"},options:i.SEVERITIES},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:L},children:{control:{disable:!0}}},args:{severity:i.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:i.DEFAULT_HEADING_LEVEL}},s={},n={args:{children:r.jsxs(r.Fragment,{children:["Body message text and ",r.jsx(S,{href:"#",children:"text link if necessary"}),"."]})}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const R=["Basic","WithBody"],G=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,WithBody:n,__namedExportsOrder:R,default:B},Symbol.toStringTag,{value:"Module"}));export{G as A,s as B,n as W};
