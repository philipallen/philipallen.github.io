import{j as o}from"./jsx-runtime-DQ32znRX.js";import{M as T,a as y}from"./Modal-CydmzXwy.js";import{a as A}from"./index-BGt6MgUo.js";import{r as h}from"./index-DH5ua8nC.js";import{a as l,u as c,b as a}from"./index-jNFq1OWt.js";import{E as L,W as S,S as w,I as C}from"./index-M-g1GIMf.js";import{T as _}from"./Typography-D5AcRl6x.js";import{B as g}from"./Button-A4XDzPNF.js";const R=l.div`
  ${({$severity:r})=>{const{tokens:n}=c(),{modal:e,alertModal:t}=n;return a`
      display: grid;
      gap: ${t.gap};
      border-top-width: ${t.stroke.top.width};
      border-top-style: ${t.stroke.top.style};
      border-top-color: ${t.stroke.top.color[r]};

      @media (min-width: ${e.desktop.minWidth}) {
        padding-top: ${t.padding.desktop.top};
        padding-left: ${t.padding.desktop.left};
        padding-right: ${t.padding.desktop.right};
        padding-bottom: ${t.padding.desktop.bottom};
      }

      @media (max-width: ${e.desktop.minWidth}) {
        padding-top: ${t.padding.mobile.top};
        padding-left: ${t.padding.mobile.left};
        padding-right: ${t.padding.mobile.right};
        padding-bottom: ${t.padding.mobile.bottom};
      }
    `}}
`,W=l.div`
  display: grid;
  gap: 8px;
`,F=l.div`
  ${({$severity:r})=>{const{tokens:n}=c(),{alertModal:e}=n;return a`
      svg {
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};

        & [data-primary-color] {
          color: ${e.icon.primaryColor[r]};
        }

        & [data-secondary-color] {
          color: ${e.icon.secondaryColor[r]};
        }
      }
    `}}
`,D=l.div`
  ${()=>{const{tokens:r}=c(),{alertModal:n}=r;return a`
      color: ${n.body.color};
    `}}
`,B=l.div`
  ${({$layout:r})=>{const{tokens:n}=c(),{alertModal:e}=n;return[a`
        gap: ${e.footer.gap};
      `,r==="inline"&&a`
          display: inline-grid;
          grid-auto-flow: column;
        `,r==="stacked"&&a`
          display: grid;
          grid-auto-flow: row;
        `]}}
`,$="info",U=2,Y=["inline","stacked"],j="inline",p=h.forwardRef((r,n)=>{const{heading:e,headingLevel:t=U,severity:s=$,footer:i,footerLayout:k=j,children:E,testID:v="alert-modal",...I}=r,{tokens:M}=c(),{alertModal:u}=M,m=h.useId(),O={error:o.jsx(L,{}),warning:o.jsx(S,{}),success:o.jsx(w,{}),info:o.jsx(C,{})};return o.jsx(T,{...I,ref:n,isEscDismissible:!1,"aria-labelledby":m,testID:v,children:o.jsxs(R,{$severity:s,children:[o.jsxs(W,{children:[o.jsx(F,{$severity:s,children:O[s]}),o.jsx(_,{id:m,component:`h${t}`,variant:u.heading.typography.variant,fontFamily:u.heading.typography.fontFamily,children:e}),o.jsx(D,{children:E})]}),o.jsx("div",{children:o.jsx(B,{$layout:k,children:i})})]})})});p.displayName="AlertModal";p.__docgenInfo={description:"",methods:[],displayName:"AlertModal"};const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,V={title:"Components/Surfaces/AlertModal",component:p,render:function(n){const[{isOpen:e},t]=P();function s(){t({isOpen:!0}),y("openModal")()}function i(){t({isOpen:!1}),y("modalClosed")()}return o.jsxs(o.Fragment,{children:[o.jsx(g,{variant:"primary",text:"Open Modal",disabled:e,onClick:s}),o.jsx(p,{...n,isOpen:e,onRequestClose:i,footer:o.jsxs(o.Fragment,{children:[o.jsx(g,{variant:"secondary",fullWidth:!0,text:"Contact us",onClick:i}),o.jsx(g,{variant:"primary",fullWidth:!0,text:"Login",onClick:i})]})})]})},argTypes:{severity:{control:{type:"select"},options:A},footerLayout:{control:{type:"select"},options:Y},children:{control:{disable:!0}}},args:{isOpen:!1,severity:$,footerLayout:j}},d={args:{heading:"We cannot complete your request just now",children:o.jsx(_,{variant:"bodyM",color:"inherit",children:"Sorry about that. You could try again later or you can access your account through 365 phone banking by contacting us."})}};var f,b,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: "We cannot complete your request just now",
    children: <Typography variant="bodyM" color="inherit">
        Sorry about that. You could try again later or you can access your
        account through 365 phone banking by contacting us.
      </Typography>
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const q=["Basic"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,__namedExportsOrder:q,default:V},Symbol.toStringTag,{value:"Module"}));export{Z as A,d as B};
