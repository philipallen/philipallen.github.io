import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{l as p,H as W,i as V}from"./index-eS8l-D1x.js";import{u as g,l as c,d as l,p as q}from"./index-C1QKVHyt.js";import{b as H,f as N,g as U,W as G,E as O}from"./index-B_KGh3jf.js";import{T as f}from"./Typography-BK_ZjFCe.js";import{I as z}from"./IconButton-52dBxF5j.js";import{L as w}from"./Link-CX-dsSMp.js";const P=l.div`
  ${({$severity:o})=>{const{tokens:r}=g(),{alert:e}=r;return c`
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
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
`,Y=l.div`
  ${({$isDismissible:o})=>{const{tokens:r}=g(),{alert:e}=r;return[c`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${e.contentContainer.gap};
        padding-top: ${e.contentContainer.padding.top};
        padding-left: ${e.contentContainer.padding.left};
        padding-right: ${e.contentContainer.padding.right.default};
        padding-bottom: ${e.contentContainer.padding.bottom};
      `,o&&c`
          padding-right: ${e.contentContainer.padding.right.dismissible};
        `]}}
`,M=l.div`
  ${({$severity:o})=>{const{tokens:r}=g(),{alert:e}=r;return c`
      display: grid;
      place-items: center;
      height: ${q(e.iconWrapper.height)};

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
`,J=l.div`
  overflow-wrap: anywhere;
`,K=l.div`
  ${({$hasBody:o})=>c`
      align-self: ${o?"start":"center"};
    `}
`;function D(o){const{severity:r=p.DEFAULT_SEVERITY,heading:e,headingLevel:A=p.DEFAULT_HEADING_LEVEL,onRequestClose:y,withRole:T=!0,children:h,testID:m="alert"}=o,{tokens:S}=g(),{alert:n}=S,F=!!h,u=!!y,R={error:t.jsx(O,{}),warning:t.jsx(G,{}),success:t.jsx(U,{}),info:t.jsx(N,{})};return t.jsxs(P,{role:T?"alert":void 0,$severity:r,"data-testid":m,children:[t.jsxs(Y,{$isDismissible:u,children:[t.jsx(M,{$severity:r,children:R[r]}),t.jsxs(J,{children:[t.jsx(f,{component:`h${A}`,color:n.heading.typography.color,variant:n.heading.typography.variant,fontFamily:n.heading.typography.fontFamily,"data-testid":`${m}-heading`,children:e}),h&&t.jsx(f,{component:"div",color:n.body.typography.color,variant:n.body.typography.variant,fontFamily:n.body.typography.fontFamily,"data-testid":`${m}-body`,children:h})]})]}),u&&t.jsx(K,{$hasBody:F,children:t.jsx(z,{onPress:y,"aria-label":"Close",children:t.jsx(H,{})})})]})}D.displayName="Alert";const Q={title:"Components/Feedback/Alert",component:D,argTypes:{severity:{control:{type:"select"},options:V},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:W},children:{control:{disable:!0}}},args:{severity:p.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:p.DEFAULT_HEADING_LEVEL}},s={},a={args:{onRequestClose:()=>{}}},i={args:{children:t.jsxs(t.Fragment,{children:["Body message text and ",t.jsx(w,{href:"#",children:"text link if necessary"}),"."]})}},d={args:{children:t.jsxs(t.Fragment,{children:["Body message text and ",t.jsx(w,{href:"#",children:"text link if necessary"}),"."]}),onRequestClose:()=>{}}};var b,$,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=($=s.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var k,E,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onRequestClose: () => {}
  }
}`,...(j=(E=a.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var C,v,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(L=(v=i.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var _,I,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>,
    onRequestClose: () => {}
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const X=["Basic","Dismissible","WithBody","WithBodyDismissible"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Dismissible:a,WithBody:i,WithBodyDismissible:d,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{ae as A,s as B,a as D,i as W,d as a};
