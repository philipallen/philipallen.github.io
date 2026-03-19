import{j as o}from"./jsx-runtime-Blucd9Qg.js";import{u as m,l as f,d as g}from"./index-C1QKVHyt.js";import{b}from"./Disclosure-DomN6hwn.js";import{A as i}from"./Accordion-DdUMchKD.js";import{T as r}from"./Typography-BK_ZjFCe.js";const x=g(b)`
  ${()=>{const{tokens:n}=m(),{accordionGroup:e}=n;return[f`
        display: grid;
        gap: ${e.gap.default};
      `]}}
`,A=g(x)`
  ${()=>{const{tokens:n}=m(),{accordionGroup:e}=n;return[f`
        gap: ${e.gap.nested};
      `]}}
`;function j(n){const{items:e,testID:c="accordion-group"}=n;return o.jsx(x,{allowsMultipleExpanded:!0,"data-testid":c,children:e.map(t=>Array.isArray(t.content)?o.jsx(i,{title:t.title,content:o.jsx(v,{items:t.content})},t.title):o.jsx(i,{...t,content:t.content},t.title))})}function v(n){const{items:e}=n;return o.jsx(A,{allowsMultipleExpanded:!0,children:e.map(c=>o.jsx(i,{...c,variant:"nested"},c.title))})}j.displayName="AccordionGroup";const I={title:"Components/Surfaces/AccordionGroup",component:j,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}},a={},s={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:o.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}]}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "What is the Bank of Ireland UK ISA?",
      content: [{
        title: "How does it work?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }, {
        title: "What does my holding account do?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }, {
        title: "Do I pay tax on my savings in an ISA?",
        content: <Typography>
                You can apply online, over the phone or in your branch.
              </Typography>
      }]
    }]
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const T=["Basic","Nested"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Nested:s,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{$ as A,a as B,s as N};
