import{j as e}from"./jsx-runtime-DQ32znRX.js";import{a as h,u as g,b as v}from"./index-C-LSVLXB.js";import{A as c}from"./Accordion-BbaKyQ5w.js";import{T as a}from"./Typography-DPnR7vBA.js";const b=h.div`
  ${()=>{const{tokens:n}=g(),{accordionGroup:t}=n;return[v`
        display: grid;
        gap: ${t.gap.default};
      `]}}
`,O=h(b)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:t}=n;return[v`
        gap: ${t.gap.nested};
      `]}}
`;function A(n){const{items:t,testID:s="accordion-group"}=n;return e.jsx(b,{"data-testid":s,children:t.map(o=>Array.isArray(o.content)?e.jsx(c,{title:o.title,content:e.jsx(f,{items:o.content})},o.title):e.jsx(c,{...o,content:o.content},o.title))})}function f(n){const{items:t}=n;return e.jsx(O,{children:t.map(s=>e.jsx(c,{...s,variant:"nested"},s.title))})}A.__docgenInfo={description:"",methods:[],displayName:"AccordionGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<NestedAccordionItem, "content"> & {
  content: NestedAccordionItem["content"] | NestedAccordionItem[];
}`,elements:[{name:"Omit",elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID & {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: HeadingLevel;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: HeadingLevel;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"initialOpen",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"CoreAccordion.Variant",required:!1}},{key:"headingLevel",value:{name:"HeadingLevel",required:!1}}]}}]},{name:"literal",value:'"variant"'}],raw:'Omit<AccordionProps, "variant">'},{name:"literal",value:'"content"'}],raw:'Omit<NestedAccordionItem, "content">'},{name:"signature",type:"object",raw:`{
  content: NestedAccordionItem["content"] | NestedAccordionItem[];
}`,signature:{properties:[{key:"content",value:{name:"union",raw:'NestedAccordionItem["content"] | NestedAccordionItem[]',elements:[{name:'Omit["content"]',raw:'NestedAccordionItem["content"]'},{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID & {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: HeadingLevel;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: HeadingLevel;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"initialOpen",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"CoreAccordion.Variant",required:!1}},{key:"headingLevel",value:{name:"HeadingLevel",required:!1}}]}}]},{name:"literal",value:'"variant"'}],raw:'Omit<AccordionProps, "variant">'}],raw:"NestedAccordionItem[]"}],required:!0}}]}}]}],raw:"AccordionItem[]"},description:""}}};const I={title:"Components/Surfaces/AccordionGroup",component:A,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}},r={},i={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}]}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const k=["Basic","Nested"],N=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Nested:i,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{N as A,r as B,i as N};
