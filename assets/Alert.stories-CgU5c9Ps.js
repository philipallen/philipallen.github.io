import{j as r}from"./jsx-runtime-DQ32znRX.js";import{c as i,a as L,H as T}from"./index-BGt6MgUo.js";import{a as d,u as c,b as E,p as I}from"./index-jNFq1OWt.js";import{E as j,W as A,S as w,I as S}from"./index-M-g1GIMf.js";import{T as p}from"./Typography-D5AcRl6x.js";import{L as F}from"./Link-Zmh0tl2C.js";const D=d.div`
  ${({$severity:o})=>{const{tokens:t}=c(),{alert:e}=t;return E`
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
`,W=d.div`
  ${({$severity:o})=>{const{tokens:t}=c(),{alert:e}=t;return E`
      display: grid;
      place-items: center;
      height: ${I(e.iconWrapper.height)};

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
`,B=d.div`
  overflow-wrap: anywhere;
`;function b(o){const{severity:t=i.DEFAULT_SEVERITY,heading:e,headingLevel:x=i.DEFAULT_HEADING_LEVEL,children:l,testID:v="alert"}=o,{tokens:_}=c(),{alert:a}=_,$={error:"alert",warning:"alert",success:"status",info:"status"},k={error:r.jsx(j,{}),warning:r.jsx(A,{}),success:r.jsx(w,{}),info:r.jsx(S,{})};return r.jsxs(D,{role:$[t],$severity:t,"data-testid":v,children:[r.jsx("div",{children:r.jsx(W,{$severity:t,children:k[t]})}),r.jsxs(B,{children:[r.jsx(p,{component:`h${x}`,color:a.heading.typography.color,variant:a.heading.typography.variant,fontFamily:a.heading.typography.fontFamily,children:e}),l&&r.jsx(p,{color:a.body.typography.color,variant:a.body.typography.variant,fontFamily:a.body.typography.fontFamily,children:l})]})]})}b.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"AlertSeverity"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const R={title:"Components/Feedback/Alert",component:b,argTypes:{severity:{control:{type:"select"},options:L},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:T},children:{control:{disable:!0}}},args:{severity:i.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:i.DEFAULT_HEADING_LEVEL}},s={},n={args:{children:r.jsxs(r.Fragment,{children:["Body message text and ",r.jsx(F,{href:"#",children:"text link if necessary"}),"."]})}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const V=["Basic","WithBody"],O=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,WithBody:n,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{O as A,s as B,n as W};
