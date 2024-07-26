import{j as o}from"./jsx-runtime-DQ32znRX.js";import{M as A,a as y}from"./Modal-Dn2Rl2XP.js";import{c as L}from"./index-BkD9k7wm.js";import{r as h}from"./index-DH5ua8nC.js";import{a as d,u as c,b as r}from"./index-BSpjoQIR.js";import{E as M,W as S,S as w,I as C}from"./index-CPadiX42.js";import{T as _}from"./Typography-Dx-yaUty.js";import{B as g}from"./Button-B9YPVZd-.js";const R=d.div`
  ${({$severity:e})=>{const{tokens:n}=c(),{modal:t}=n;return r`
      display: grid;
      gap: ${t.content.alert.gap};
      border-top-width: ${t.content.alert.stroke.top.width};
      border-top-style: ${t.content.alert.stroke.top.style};
      border-top-color: ${t.content.alert.stroke.top.color[e]};

      @media (min-width: ${t.desktop.minWidth}) {
        padding-top: ${t.content.alert.padding.desktop.top};
        padding-left: ${t.content.alert.padding.desktop.left};
        padding-right: ${t.content.alert.padding.desktop.right};
        padding-bottom: ${t.content.alert.padding.desktop.bottom};
      }

      @media (max-width: ${t.desktop.minWidth}) {
        padding-top: ${t.content.alert.padding.mobile.top};
        padding-left: ${t.content.alert.padding.mobile.left};
        padding-right: ${t.content.alert.padding.mobile.right};
        padding-bottom: ${t.content.alert.padding.mobile.bottom};
      }
    `}}
`,W=d.div`
  display: grid;
  gap: 8px;
`,F=d.div`
  ${({$severity:e})=>{const{tokens:n}=c(),{modal:t}=n;return r`
      svg {
        display: block;
        width: ${t.content.alert.icon.width};
        height: ${t.content.alert.icon.height};

        & [data-primary-color] {
          color: ${t.content.alert.icon.primaryColor[e]};
        }

        & [data-secondary-color] {
          color: ${t.content.alert.icon.secondaryColor[e]};
        }
      }
    `}}
`,D=d.div`
  ${()=>{const{tokens:e}=c(),{modal:n}=e;return r`
      color: ${n.content.alert.body.color};
    `}}
`,B=d.div`
  ${({$layout:e})=>{const{tokens:n}=c(),{modal:t}=n;return[r`
        gap: ${t.content.alert.footer.gap};
      `,e==="inline"&&r`
          display: inline-grid;
          grid-auto-flow: column;
        `,e==="stacked"&&r`
          display: grid;
          grid-auto-flow: row;
        `]}}
`,$="info",U=2,Y=["inline","stacked"],j="inline",p=h.forwardRef((e,n)=>{const{heading:t,headingLevel:l=U,severity:a=$,footer:s,footerLayout:k=j,children:E,testID:v="alert-modal",...I}=e,{tokens:O}=c(),{modal:u}=O,m=h.useId(),T={error:o.jsx(M,{}),warning:o.jsx(S,{}),success:o.jsx(w,{}),info:o.jsx(C,{})};return o.jsx(A,{...I,ref:n,isEscDismissible:!1,"aria-labelledby":m,testID:v,children:o.jsxs(R,{$severity:a,children:[o.jsxs(W,{children:[o.jsx(F,{$severity:a,children:T[a]}),o.jsx(_,{id:m,component:`h${l}`,variant:u.content.alert.heading.typography.variant,fontFamily:u.content.alert.heading.typography.fontFamily,children:t}),o.jsx(D,{children:E})]}),o.jsx("div",{children:o.jsx(B,{$layout:k,children:s})})]})})});p.displayName="AlertModal";p.__docgenInfo={description:"",methods:[],displayName:"AlertModal"};const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,V={title:"Components/Surfaces/AlertModal",component:p,render:function(n){const[{isOpen:t},l]=P();function a(){l({isOpen:!0}),y("openModal")()}function s(){l({isOpen:!1}),y("modalClosed")()}return o.jsxs(o.Fragment,{children:[o.jsx(g,{variant:"primary",text:"Open Modal",disabled:t,onClick:a}),o.jsx(p,{...n,isOpen:t,onRequestClose:s,footer:o.jsxs(o.Fragment,{children:[o.jsx(g,{variant:"secondary",fullWidth:!0,text:"Contact us",onClick:s}),o.jsx(g,{variant:"primary",fullWidth:!0,text:"Login",onClick:s})]})})]})},argTypes:{severity:{control:{type:"select"},options:L},footerLayout:{control:{type:"select"},options:Y},children:{control:{disable:!0}}},args:{isOpen:!1,severity:$,footerLayout:j}},i={args:{heading:"We cannot complete your request just now",children:o.jsx(_,{variant:"bodyM",color:"inherit",children:"Sorry about that. You could try again later or you can access your account through 365 phone banking by contacting us."})}};var f,b,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: "We cannot complete your request just now",
    children: <Typography variant="bodyM" color="inherit">
        Sorry about that. You could try again later or you can access your
        account through 365 phone banking by contacting us.
      </Typography>
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const q=["Basic"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,__namedExportsOrder:q,default:V},Symbol.toStringTag,{value:"Module"}));export{Z as A,i as B};
