import{j as t}from"./jsx-runtime-Blucd9Qg.js";import{r as g}from"./index-CcKhGcwW.js";import{R as $}from"./index-eS8l-D1x.js";import{d as j}from"./index-C1QKVHyt.js";import{T as e,L as I}from"./Table.constants-tdUSHGOW.js";import{T as c}from"./TooltipPopover-BEG4305A.js";import{b as W,I as D}from"./InlineTooltipIconButton-CWSg2rTo.js";import{S as k}from"./Select-pKTF32JQ.js";import{T as y}from"./Tabs-Bb5kKFA1.js";const _=j.div`
  @supports (container-type: inline-size) {
    container-type: inline-size;
  }
`,z=j.div`
  display: block;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:r})=>r}px) {
      display: none;
    }
  }
`,B=j.div`
  display: none;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:r})=>r}px) {
      display: block;
    }
  }
`;function M(r){const{standardLayout:l,headers:s,rows:o,testID:n}=r;return t.jsxs(e,{layout:l,testID:`${n}-standard`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:s.map((a,d)=>t.jsxs(e.Th,{align:a.align,"data-testid":`${n}-standard-header`,children:[a.tooltip&&t.jsx(c,{children:t.jsxs(c.Trigger,{children:[t.jsx(W,{"aria-label":`${a.text} tooltip`}),t.jsx(c.Content,{children:a.tooltip})]})}),a.text]},d))})}),t.jsx(e.Tbody,{children:o.map((a,d)=>t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:a.map((T,u)=>{var p;return t.jsx(e.Td,{align:(p=s[u])==null?void 0:p.align,"data-testid":`${n}-standard-data`,children:T.text},u)})},d))})]})}function O(r){var v;const{compactLayout:l,headers:s,rows:o,testID:n}=r,a=g.useMemo(()=>$.getSelectItems(o),[o]),[d,T]=g.useState(()=>{var i;return(i=a[0])==null?void 0:i.id}),u=s[0],p=(v=a.find(i=>i.id===d))==null?void 0:v.title,f=p&&o.find(i=>i[0].text===p)||o[0];return t.jsxs(e,{layout:l,testID:`${n}-compact`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{children:t.jsx(e.Th,{align:"left",colSpan:2,children:t.jsx(k,{labelProps:{label:u.text},items:a,selectedKey:d,onSelectionChange:T})})})}),t.jsx(e.Tbody,{children:s.map((i,h)=>h===0?null:t.jsxs(e.Tr,{"data-testid":`${n}-compact-row`,children:[t.jsxs(e.Th,{align:"left","data-testid":`${n}-compact-header`,children:[i.text,i.tooltip&&t.jsx(c,{children:t.jsxs(c.Trigger,{children:[t.jsx(D,{"aria-label":`${i.text} tooltip`}),t.jsx(c.Content,{children:i.tooltip})]})})]}),f[h]&&t.jsx(e.Td,{"data-testid":`${n}-compact-data`,children:f[h].text})]},h))})]})}function b(r){const{minWidth:l,testID:s="responsive-table",...o}=r,{headers:n,rows:a}=o;return $.isDataValid(n,a)?t.jsxs(_,{"data-testid":s,children:[t.jsx(z,{$minWidth:l,children:t.jsx(O,{...o,testID:s})}),t.jsx(B,{$minWidth:l,children:t.jsx(M,{...o,testID:s})})]}):(console.warn("Invalid responsive table data"),null)}b.displayName="ResponsiveTable";const A={minWidth:650,headers:[{text:"Loan amount",align:"right"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR variable",tooltip:"Additional information"},{text:"Repayment term"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€8,000"},{text:"8.25%"},{text:"8.5%"},{text:"60 months"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€15,000"},{text:"7.3%"},{text:"7.5%"},{text:"60 months"},{text:"€298.83"},{text:"€2,929.80"}],[{text:"€20,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€783.85"},{text:"€7,031.00"}]]},E={minWidth:750,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR (Annual Percentage Rate)",tooltip:"Additional information"},{text:"Sample loan amount"},{text:"Loan term",tooltip:"Additional information"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€2,000 – €9,999"},{text:"8.25%"},{text:"8.5%"},{text:"€8,000"},{text:"5 years"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€10,000 – €19,999"},{text:"7.3%"},{text:"7.5%"},{text:"€15,000"},{text:"5 years"},{text:"€298.83"},{text:"€2,929.800"}],[{text:"€20,000 – €39,999"},{text:"6.6%"},{text:"6.8%"},{text:"€20,000"},{text:"5 years"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000 – €65,000"},{text:"6.6%"},{text:"6.8%"},{text:"€40,000"},{text:"5 years"},{text:"€783.85"},{text:"€7,031.00"}]]},H={title:"Components/Data Display/ResponsiveTable",component:b,argTypes:{minWidth:{control:"number",description:"The minimum width of the container, in pixels, needed to display the table in full."},compactLayout:{control:{type:"select"},options:I},standardLayout:{control:{type:"select"},options:I}},args:{minWidth:650,compactLayout:"auto",standardLayout:"auto"}},x={args:{...A}},m={argTypes:{compactLayout:{control:{disable:!0}},standardLayout:{control:{disable:!0}}},render:function(){const[l,s]=g.useState("car-loan");function o(n){s(n)}return t.jsx(t.Fragment,{children:t.jsxs(y,{items:[{id:"car-loan",label:"Car loan",panel:t.jsx(b,{...A})},{id:"green-car-loan",label:"Green car loan",panel:t.jsx(b,{...E})}],activeItemId:l,mobileHeading:"Tab group title",onChange:o,withPadding:!1,children:[t.jsx(y.Items,{}),t.jsx(y.Panels,{})]})})}};var R,S,C;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...mockResponsiveTable01Props
  }
}`,...(C=(S=x.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var P,w,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const G=["Basic","WithTabs"],X=Object.freeze(Object.defineProperty({__proto__:null,Basic:x,WithTabs:m,__namedExportsOrder:G,default:H},Symbol.toStringTag,{value:"Module"}));export{x as B,X as R,m as W};
