import{j as t}from"./jsx-runtime-DQ32znRX.js";import{f as p,c as W,H as V}from"./index-1pQtRAy1.js";import{a as l,u as g,b as c,p as q}from"./index-CzvSJj6w.js";import{C as H,E as N,W as U,d as G,e as O}from"./index-Bl852yH3.js";import{T as f}from"./Typography-Dt8pkH_V.js";import{I as z}from"./IconButtonV2-Dj5DlKHT.js";import{L as w}from"./Link-8as3hVkz.js";const P=l.div`
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
`;function D(o){const{severity:r=p.DEFAULT_SEVERITY,heading:e,headingLevel:A=p.DEFAULT_HEADING_LEVEL,onRequestClose:y,children:h,testID:m="alert"}=o,{tokens:T}=g(),{alert:s}=T,S=!!h,u=!!y,F={error:"alert",warning:"alert",success:"status",info:"status"},R={error:t.jsx(N,{}),warning:t.jsx(U,{}),success:t.jsx(G,{}),info:t.jsx(O,{})};return t.jsxs(P,{role:F[r],$severity:r,"data-testid":m,children:[t.jsxs(Y,{$isDismissible:u,children:[t.jsx(M,{$severity:r,children:R[r]}),t.jsxs(J,{children:[t.jsx(f,{component:`h${A}`,color:s.heading.typography.color,variant:s.heading.typography.variant,fontFamily:s.heading.typography.fontFamily,"data-testid":`${m}-heading`,children:e}),h&&t.jsx(f,{component:"div",color:s.body.typography.color,variant:s.body.typography.variant,fontFamily:s.body.typography.fontFamily,"data-testid":`${m}-body`,children:h})]})]}),u&&t.jsx(K,{$hasBody:S,children:t.jsx(z,{onPress:y,"aria-label":"Close",children:t.jsx(H,{})})})]})}D.__docgenInfo={description:"",methods:[],displayName:"Alert"};const Q={title:"Components/Feedback/Alert",component:D,argTypes:{severity:{control:{type:"select"},options:W},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:V},children:{control:{disable:!0}}},args:{severity:p.DEFAULT_SEVERITY,heading:"Alert heading",headingLevel:p.DEFAULT_HEADING_LEVEL}},n={},a={args:{onRequestClose:()=>{}}},i={args:{children:t.jsxs(t.Fragment,{children:["Body message text and ",t.jsx(w,{href:"#",children:"text link if necessary"}),"."]})}},d={args:{children:t.jsxs(t.Fragment,{children:["Body message text and ",t.jsx(w,{href:"#",children:"text link if necessary"}),"."]}),onRequestClose:()=>{}}};var b,$,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=($=n.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var k,E,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onRequestClose: () => {}
  }
}`,...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var _,j,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var L,v,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <>
        Body message text and <Link href="#">text link if necessary</Link>.
      </>,
    onRequestClose: () => {}
  }
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const X=["Basic","Dismissible","WithBody","WithBodyDismissible"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Dismissible:a,WithBody:i,WithBodyDismissible:d,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{ae as A,n as B,a as D,i as W,d as a};
