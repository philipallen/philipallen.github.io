import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as f}from"./index-c013ead5.js";import{a as v,u as i,b as m}from"./index-f9091704.js";import{T as j}from"./Typography-401b61b3.js";import{T as k,a as w}from"./TabPanels-5bff21e7.js";const I=v.table`
  ${({$layout:r})=>{const{tokens:a}=i(),{table:t}=a;return[m`
        border-collapse: collapse;
        border-bottom-width: ${t.stroke.bottom.width};
        border-bottom-style: ${t.stroke.bottom.style};
        border-bottom-color: ${t.stroke.bottom.color};

        & thead {
          background: ${t.head.backgroundColor};
          border-bottom-width: ${t.head.stroke.bottom.width};
          border-bottom-style: ${t.head.stroke.bottom.style};
          border-bottom-color: ${t.head.stroke.bottom.color};

          & tr {
            & th {
              text-wrap: balance;
              vertical-align: bottom;
              overflow-wrap: break-word;
              padding-top: ${t.head.cell.padding.top};
              padding-left: ${t.head.cell.padding.left.base};
              padding-right: ${t.head.cell.padding.right.base};
              padding-bottom: ${t.head.cell.padding.bottom};
            }

            & :first-child {
              padding-left: ${t.head.cell.padding.left.first};
            }

            & :last-child {
              padding-right: ${t.head.cell.padding.right.last};
            }
          }
        }

        & tbody {
          & tr {
            & th,
            & td {
              text-wrap: balance;
              overflow-wrap: break-word;
              padding-top: ${t.body.cell.padding.top};
              padding-left: ${t.body.cell.padding.left.base};
              padding-right: ${t.body.cell.padding.right.base};
              padding-bottom: ${t.body.cell.padding.bottom};
            }

            & :first-child {
              padding-left: ${t.body.cell.padding.left.first};
            }

            & :last-child {
              padding-right: ${t.body.cell.padding.right.last};
            }

            &:nth-of-type(odd) {
              background: ${t.body.row.backgroundColor.odd};
            }

            &:nth-of-type(even) {
              background: ${t.body.row.backgroundColor.even};
            }
          }
        }
      `,r&&m`
          table-layout: ${r};
        `]}}
`;function n(r){const{layout:a,testID:t="table",...d}=r;return e.jsx(I,{width:"100%",...d,$layout:a,"data-testid":t})}n.Thead=r=>{const{tokens:a}=i(),{table:t}=a;return e.jsx(j,{component:"thead",variant:t.head.typography.variant,fontFamily:t.head.typography.fontFamily,...r})};n.Tbody=r=>{const{tokens:a}=i(),{table:t}=a;return e.jsx(j,{component:"tbody",variant:t.body.typography.variant,fontFamily:t.body.typography.fontFamily,...r})};n.Tr=r=>e.jsx("tr",{...r});n.Th=r=>{const{align:a="right",...t}=r;return e.jsx("th",{align:a,...t})};n.Td=r=>{const{align:a="right",...t}=r;return e.jsx("td",{align:a,...t})};n.__docgenInfo={description:"",methods:[{name:"Thead",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"Omit",elements:[{name:"intersection",raw:`(
  | HeadingVariantProps
  | StandardVariantProps
) & {
  component?: T;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends T ? "p" : T>,
    "component"
  >`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  component?: T;
}`,signature:{properties:[{key:"component",value:{name:"literal",value:'"thead"',required:!1}}]}},{name:"unknown"}]},{name:"union",raw:'"component" | "fontFamily" | "variant"',elements:[{name:"literal",value:'"component"'},{name:"literal",value:'"fontFamily"'},{name:"literal",value:'"variant"'}]}],raw:`Omit<
  TypographyProps<"thead">,
  "component" | "fontFamily" | "variant"
>`,alias:"TableTheadProps"}}],returns:null},{name:"Tbody",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"Omit",elements:[{name:"intersection",raw:`(
  | HeadingVariantProps
  | StandardVariantProps
) & {
  component?: T;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends T ? "p" : T>,
    "component"
  >`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  component?: T;
}`,signature:{properties:[{key:"component",value:{name:"literal",value:'"tbody"',required:!1}}]}},{name:"unknown"}]},{name:"union",raw:'"component" | "fontFamily" | "variant"',elements:[{name:"literal",value:'"component"'},{name:"literal",value:'"fontFamily"'},{name:"literal",value:'"variant"'}]}],raw:`Omit<
  TypographyProps<"tbody">,
  "component" | "fontFamily" | "variant"
>`,alias:"TableTbodyProps"}}],returns:null},{name:"Tr",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"tr"'}],raw:'ComponentPropsWithRef<"tr">',alias:"TableTrProps"}}],returns:null},{name:"Th",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"th"'}],raw:'ComponentPropsWithRef<"th">',alias:"TableThProps"}}],returns:null},{name:"Td",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"td"'}],raw:'ComponentPropsWithRef<"td">',alias:"TableTdProps"}}],returns:null}],displayName:"Table",props:{layout:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LAYOUTS)[number]"},description:""}}};const P=["auto","fixed"];function c(r){return e.jsxs(n,{...r,children:[e.jsx(n.Thead,{children:e.jsxs(n.Tr,{children:[e.jsx(n.Th,{children:"Loan amount"}),e.jsx(n.Th,{children:"Interest rate"}),e.jsx(n.Th,{children:"APR variable"}),e.jsx(n.Th,{children:"Repayment term"}),e.jsx(n.Th,{children:"Monthly repayment"}),e.jsx(n.Th,{children:"Cost of credit"})]})}),e.jsxs(n.Tbody,{children:[e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€8,000"}),e.jsx(n.Td,{children:"8.25%"}),e.jsx(n.Td,{children:"8.5%"}),e.jsx(n.Td,{children:"60 months"}),e.jsx(n.Td,{children:"€162.95"}),e.jsx(n.Td,{children:"€1,777.00"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€15,000"}),e.jsx(n.Td,{children:"7.3%"}),e.jsx(n.Td,{children:"7.5%"}),e.jsx(n.Td,{children:"60 months"}),e.jsx(n.Td,{children:"€298.83"}),e.jsx(n.Td,{children:"€2,929.80"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€20,000"}),e.jsx(n.Td,{children:"6.6%"}),e.jsx(n.Td,{children:"6.8%"}),e.jsx(n.Td,{children:"60 months"}),e.jsx(n.Td,{children:"€391.92"}),e.jsx(n.Td,{children:"€3,515.20"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€40,000"}),e.jsx(n.Td,{children:"6.6%"}),e.jsx(n.Td,{children:"6.8%"}),e.jsx(n.Td,{children:"60 months"}),e.jsx(n.Td,{children:"€783.85"}),e.jsx(n.Td,{children:"€7,031.00"})]})]})]})}function y(r){return e.jsxs(n,{...r,children:[e.jsx(n.Thead,{children:e.jsxs(n.Tr,{children:[e.jsx(n.Th,{children:"Loan amount"}),e.jsx(n.Th,{children:"Interest rate"}),e.jsx(n.Th,{children:"APR (Annual Percentage Rate)"}),e.jsx(n.Th,{children:"Sample loan amount"}),e.jsx(n.Th,{children:"Loan term"}),e.jsx(n.Th,{children:"Monthly repayment"}),e.jsx(n.Th,{children:"Cost of credit"})]})}),e.jsxs(n.Tbody,{children:[e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€2,000 – €9,999"}),e.jsx(n.Td,{children:"8.25%"}),e.jsx(n.Td,{children:"8.5%"}),e.jsx(n.Td,{children:"€8,000"}),e.jsx(n.Td,{children:"5 years"}),e.jsx(n.Td,{children:"€162.95"}),e.jsx(n.Td,{children:"€1,777.00"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€10,000 – €19,999"}),e.jsx(n.Td,{children:"7.3%"}),e.jsx(n.Td,{children:"7.5%"}),e.jsx(n.Td,{children:"€15,000"}),e.jsx(n.Td,{children:"5 years"}),e.jsx(n.Td,{children:"€298.83"}),e.jsx(n.Td,{children:"€2,929.80"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€20,000 – €39,999"}),e.jsx(n.Td,{children:"6.6%"}),e.jsx(n.Td,{children:"6.8%"}),e.jsx(n.Td,{children:"€20,000"}),e.jsx(n.Td,{children:"5 years"}),e.jsx(n.Td,{children:"€391.92"}),e.jsx(n.Td,{children:"€3,515.20"})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Td,{children:"€40,000 – €65,000"}),e.jsx(n.Td,{children:"6.6%"}),e.jsx(n.Td,{children:"6.8%"}),e.jsx(n.Td,{children:"€40,000"}),e.jsx(n.Td,{children:"5 years"}),e.jsx(n.Td,{children:"€783.85"}),e.jsx(n.Td,{children:"€7,031.00"})]})]})]})}const l={activeItemId:"car-loan",items:[{id:"car-loan",label:"Car loan",panel:e.jsx(c,{})},{id:"green-car-loan",label:"Green car loan",panel:e.jsx(y,{})}]};c.__docgenInfo={description:"",methods:[],displayName:"MockTableOne",props:{layout:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LAYOUTS)[number]"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"MockTableTwo",props:{layout:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LAYOUTS)[number]"},description:""}}};const $={title:"Components/DataDisplay/Table",component:n,argTypes:{layout:{control:{type:"select"},options:P}}},o={render:function(a){return e.jsx(c,{...a})}},s={argTypes:{layout:{control:{disable:!0}}},render:function(){const[a,t]=f.useState(()=>l.activeItemId);function d(g){t(g)}return e.jsxs(e.Fragment,{children:[e.jsx(k,{items:l.items,activeItemId:a,onChange:d}),e.jsx(w,{withPadding:!1,items:l.items,activeItemId:a})]})}};var p,h,T;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    return <MockTableOne {...args} />;
  }
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var u,b,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {
    layout: {
      control: {
        disable: true
      }
    }
  },
  render: function Render() {
    const [activeItemId, setActiveItemId] = useState(() => mockTabs.activeItemId);
    function handleChange(activeItemId: string) {
      setActiveItemId(activeItemId);
    }
    return <>
        <Tabs items={mockTabs.items} activeItemId={activeItemId} onChange={handleChange} />
        <TabPanels withPadding={false} items={mockTabs.items} activeItemId={activeItemId} />
      </>;
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const C=["Basic","WithTabs"],W=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,WithTabs:s,__namedExportsOrder:C,default:$},Symbol.toStringTag,{value:"Module"}));export{o as B,W as T,s as W};
