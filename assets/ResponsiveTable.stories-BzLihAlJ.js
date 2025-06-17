import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as y}from"./index-CcKhGcwW.js";import{R as w}from"./index-CmedeESG.js";import{a as j}from"./index-D1OOBdzz.js";import{T as e,L as f}from"./Table.constants-6CKdZtGU.js";import{T as c}from"./TooltipPopoverV2-gNB5e3aG.js";import{b as $,I as A}from"./InlineTooltipIconButtonV2-C0ouqbrk.js";import{S as W}from"./SelectV2-BA1CxLnc.js";import{T}from"./Tabs-DFin5-Rs.js";const D=j.div`
  @supports (container-type: inline-size) {
    container-type: inline-size;
  }
`,k=j.div`
  display: block;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: none;
    }
  }
`,_=j.div`
  display: none;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: block;
    }
  }
`;function z(i){const{standardLayout:l,headers:s,rows:a,testID:n}=i;return t.jsxs(e,{layout:l,testID:`${n}-standard`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:s.map((o,d)=>t.jsxs(e.Th,{align:o.align,"data-testid":`${n}-standard-header`,children:[o.tooltip&&t.jsx(c,{children:t.jsxs(c.Trigger,{children:[t.jsx($,{"aria-label":`${o.text} tooltip`}),t.jsx(c.Content,{children:o.tooltip})]})}),o.text]},d))})}),t.jsx(e.Tbody,{children:a.map((o,d)=>t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:o.map((b,u)=>{var p;return t.jsx(e.Td,{align:(p=s[u])==null?void 0:p.align,"data-testid":`${n}-standard-data`,children:b.text},u)})},d))})]})}function B(i){const{compactLayout:l,headers:s,rows:a,testID:n}=i,o=y.useMemo(()=>w.getSelectItems(a),[a]),[d,b]=y.useState(()=>{var r;return(r=o[0])==null?void 0:r.value}),u=s[0],p=a.find(r=>r[0].text===d)||a[0];return t.jsxs(e,{layout:l,testID:`${n}-compact`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{children:t.jsx(e.Th,{align:"left",colSpan:2,children:t.jsx(W,{labelProps:{label:u.text},items:o,selectedKey:d,onSelectionChange:b})})})}),t.jsx(e.Tbody,{children:s.map((r,h)=>h===0?null:t.jsxs(e.Tr,{"data-testid":`${n}-compact-row`,children:[t.jsxs(e.Th,{align:"left","data-testid":`${n}-compact-header`,children:[r.text,r.tooltip&&t.jsx(c,{children:t.jsxs(c.Trigger,{children:[t.jsx(A,{"aria-label":`${r.text} tooltip`}),t.jsx(c.Content,{children:r.tooltip})]})})]}),p[h]&&t.jsx(e.Td,{"data-testid":`${n}-compact-data`,children:p[h].text})]},h))})]})}function g(i){const{minWidth:l,testID:s="responsive-table",...a}=i,{headers:n,rows:o}=a;return w.isDataValid(n,o)?t.jsxs(D,{"data-testid":s,children:[t.jsx(k,{$minWidth:l,children:t.jsx(B,{...a,testID:s})}),t.jsx(_,{$minWidth:l,children:t.jsx(z,{...a,testID:s})})]}):(console.warn("Invalid responsive table data"),null)}const L={minWidth:650,headers:[{text:"Loan amount",align:"left"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR variable",tooltip:"Additional information"},{text:"Repayment term"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€8,000"},{text:"8.25%"},{text:"8.5%"},{text:"60 months"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€15,000"},{text:"7.3%"},{text:"7.5%"},{text:"60 months"},{text:"€298.83"},{text:"€2,929.80"}],[{text:"€20,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€783.85"},{text:"€7,031.00"}]]},V={minWidth:750,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR (Annual Percentage Rate)",tooltip:"Additional information"},{text:"Sample loan amount"},{text:"Loan term",tooltip:"Additional information"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€2,000 – €9,999"},{text:"8.25%"},{text:"8.5%"},{text:"€8,000"},{text:"5 years"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€10,000 – €19,999"},{text:"7.3%"},{text:"7.5%"},{text:"€15,000"},{text:"5 years"},{text:"€298.83"},{text:"€2,929.800"}],[{text:"€20,000 – €39,999"},{text:"6.6%"},{text:"6.8%"},{text:"€20,000"},{text:"5 years"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000 – €65,000"},{text:"6.6%"},{text:"6.8%"},{text:"€40,000"},{text:"5 years"},{text:"€783.85"},{text:"€7,031.00"}]]},M={title:"Components/Data Display/ResponsiveTable",component:g,argTypes:{minWidth:{control:"number",description:"The minimum width of the container, in pixels, needed to display the table in full."},compactLayout:{control:{type:"select"},options:f},standardLayout:{control:{type:"select"},options:f}},args:{minWidth:650,compactLayout:"auto",standardLayout:"auto"}},x={args:{...L}},m={argTypes:{compactLayout:{control:{disable:!0}},standardLayout:{control:{disable:!0}}},render:function(){const[l,s]=y.useState("car-loan");function a(n){s(n)}return t.jsx(t.Fragment,{children:t.jsxs(T,{items:[{id:"car-loan",label:"Car loan",panel:t.jsx(g,{...L})},{id:"green-car-loan",label:"Green car loan",panel:t.jsx(g,{...V})}],activeItemId:l,mobileHeading:"Tab group title",onChange:a,withPadding:!1,children:[t.jsx(T.Items,{}),t.jsx(T.Panels,{})]})})}};var v,I,R;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...mockResponsiveTable01Props
  }
}`,...(R=(I=x.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var S,C,P;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    compactLayout: {
      control: {
        disable: true
      }
    },
    standardLayout: {
      control: {
        disable: true
      }
    }
  },
  render: function Render() {
    const [activeItemId, setActiveItemId] = useState("car-loan");
    function handleChange(activeItemId: string) {
      setActiveItemId(activeItemId);
    }
    return <>
        <Tabs items={[{
        id: "car-loan",
        label: "Car loan",
        panel: <ResponsiveTable {...mockResponsiveTable01Props} />
      }, {
        id: "green-car-loan",
        label: "Green car loan",
        panel: <ResponsiveTable {...mockResponsiveTable02Props} />
      }]} activeItemId={activeItemId} mobileHeading="Tab group title" onChange={handleChange} withPadding={false}>
          <Tabs.Items />
          <Tabs.Panels />
        </Tabs>
      </>;
  }
}`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const O=["Basic","WithTabs"],N=Object.freeze(Object.defineProperty({__proto__:null,Basic:x,WithTabs:m,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{x as B,N as R,m as W};
