import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as h,u as g,b as v}from"./index-912b60f4.js";import{A as c}from"./Accordion-edde66cf.js";import{T as a}from"./Typography-a205704a.js";const A=h.div`
  ${()=>{const{tokens:n}=g(),{accordionGroup:o}=n;return[v`
        display: grid;
        gap: ${o.gap.default};
      `]}}
`,O=h(A)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:o}=n;return[v`
        gap: ${o.gap.nested};
      `]}}
`;function b(n){const{items:o,testID:s="accordion-group"}=n;return e.jsx(A,{"data-testid":s,children:o.map(t=>Array.isArray(t.content)?e.jsx(c,{title:t.title,content:e.jsx(f,{items:t.content})},t.title):e.jsx(c,{...t,content:t.content},t.title))})}function f(n){const{items:o}=n;return e.jsx(O,{children:o.map(s=>e.jsx(c,{...s,variant:"nested"},s.title))})}b.__docgenInfo={description:"",methods:[],displayName:"AccordionGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<NestedAccordionItem, "content"> & {
  content: NestedAccordionItem["content"] | NestedAccordionItem[];
}`,elements:[{name:"Omit",elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID & {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: CoreAccordion.HeadingLevel;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: CoreAccordion.HeadingLevel;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"initialOpen",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"CoreAccordion.Variant",required:!1}},{key:"headingLevel",value:{name:"CoreAccordion.HeadingLevel",required:!1}}]}}]},{name:"literal",value:'"variant"'}],raw:'Omit<AccordionProps, "variant">'},{name:"literal",value:'"content"'}],raw:'Omit<NestedAccordionItem, "content">'},{name:"signature",type:"object",raw:`{
  content: NestedAccordionItem["content"] | NestedAccordionItem[];
}`,signature:{properties:[{key:"content",value:{name:"union",raw:'NestedAccordionItem["content"] | NestedAccordionItem[]',elements:[{name:'Omit["content"]',raw:'NestedAccordionItem["content"]'},{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID & {
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: CoreAccordion.HeadingLevel;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  title: string;
  content: JSX.Element;
  isOpen?: boolean;
  initialOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  variant?: CoreAccordion.Variant;
  headingLevel?: CoreAccordion.HeadingLevel;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"initialOpen",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"CoreAccordion.Variant",required:!1}},{key:"headingLevel",value:{name:"CoreAccordion.HeadingLevel",required:!1}}]}}]},{name:"literal",value:'"variant"'}],raw:'Omit<AccordionProps, "variant">'}],raw:"NestedAccordionItem[]"}],required:!0}}]}}]}],raw:"AccordionItem[]"},description:""}}};const I={title:"Components/Surfaces/AccordionGroup",component:b,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}},r={},i={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}]}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const k=["Basic","Nested"],q=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Nested:i,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{q as A,r as B,i as N};
