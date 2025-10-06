import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as m,u as f,b as g}from"./index-BVzVw2jm.js";import{b}from"./Disclosure-Cqq4V_T6.js";import{A as i}from"./Accordion-DqHwDQol.js";import{T as r}from"./Typography-DZZq2lFF.js";const x=m(b)`
  ${()=>{const{tokens:o}=f(),{accordionGroup:e}=o;return[g`
        display: grid;
        gap: ${e.gap.default};
      `]}}
`,j=m(x)`
  ${()=>{const{tokens:o}=f(),{accordionGroup:e}=o;return[g`
        gap: ${e.gap.nested};
      `]}}
`;function v(o){const{items:e,testID:c="accordion-group"}=o;return n.jsx(x,{allowsMultipleExpanded:!0,"data-testid":c,children:e.map(t=>Array.isArray(t.content)?n.jsx(i,{title:t.title,content:n.jsx(A,{items:t.content})},t.title):n.jsx(i,{...t,content:t.content},t.title))})}function A(o){const{items:e}=o;return n.jsx(j,{allowsMultipleExpanded:!0,children:e.map(c=>n.jsx(i,{...c,variant:"nested"},c.title))})}const I={title:"Components/Surfaces/AccordionGroup",component:v,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}},a={},s={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:n.jsx(r,{children:"You can apply online, over the phone or in your branch."})}]}]}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const T=["Basic","Nested"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Nested:s,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{B as A,a as B,s as N};
