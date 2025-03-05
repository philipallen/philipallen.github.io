import{j as e}from"./jsx-runtime-DQ32znRX.js";import{a as h,u as g,b as v}from"./index-CzvSJj6w.js";import{b as A}from"./Disclosure-CFwmEZX-.js";import{A as l}from"./Accordion-MBkGruNw.js";import{T as a}from"./Typography-RMDmhaRB.js";const b=h(A)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:t}=n;return[v`
        display: grid;
        gap: ${t.gap.default};
      `]}}
`,O=h(b)`
  ${()=>{const{tokens:n}=g(),{accordionGroup:t}=n;return[v`
        gap: ${t.gap.nested};
      `]}}
`;function f(n){const{items:t,testID:s="accordion-group"}=n;return e.jsx(b,{allowsMultipleExpanded:!0,"data-testid":s,children:t.map(o=>Array.isArray(o.content)?e.jsx(l,{title:o.title,content:e.jsx(I,{items:o.content})},o.title):e.jsx(l,{...o,content:o.content},o.title))})}function I(n){const{items:t}=n;return e.jsx(O,{allowsMultipleExpanded:!0,children:t.map(s=>e.jsx(l,{...s,variant:"nested"},s.title))})}f.__docgenInfo={description:"",methods:[],displayName:"AccordionGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<NestedAccordionItem, "content"> & {
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"JSX.Element",required:!0}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"initialOpen",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"CoreAccordion.Variant",required:!1}},{key:"headingLevel",value:{name:"HeadingLevel",required:!1}}]}}]},{name:"literal",value:'"variant"'}],raw:'Omit<AccordionProps, "variant">'}],raw:"NestedAccordionItem[]"}],required:!0}}]}}]}],raw:"AccordionItem[]"},description:""}}};const k={title:"Components/Surfaces/AccordionGroup",component:f,argTypes:{items:{control:{disable:!0}}},args:{items:[{title:"What is a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"How do I apply for a loan?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What types of loan do Bank of Ireland offer?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}},r={},i={args:{items:[{title:"What is the Bank of Ireland UK ISA?",content:[{title:"How does it work?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"What does my holding account do?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})},{title:"Do I pay tax on my savings in an ISA?",content:e.jsx(a,{children:"You can apply online, over the phone or in your branch."})}]}]}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const w=["Basic","Nested"],T=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Nested:i,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{T as A,r as B,i as N};
