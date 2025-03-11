import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as b}from"./index-DH5ua8nC.js";import{R as L}from"./index-BrtwDHqb.js";import{a as y}from"./index-CzvSJj6w.js";import{T as e,L as j}from"./Table.constants-B84LDBq9.js";import{T as P,a as S,b as D,c as $}from"./TooltipTrigger-BH3L0LN3.js";import{a as H}from"./InputLabelTopTooltip-C3wFl6NO.js";import{S as q}from"./Select--qbTHZY2.js";import{T}from"./Tabs-Cz0Hdaph.js";const z=y.div`
  @supports (container-type: inline-size) {
    container-type: inline-size;
  }
`,B=y.div`
  display: block;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:s})=>s}px) {
      display: none;
    }
  }
`,M=y.div`
  display: none;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:s})=>s}px) {
      display: block;
    }
  }
`;function W(s){const{standardLayout:i,headers:r,rows:a,testID:n}=s;return t.jsxs(e,{layout:i,testID:`${n}-standard`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:r.map((o,d)=>t.jsxs(e.Th,{"data-testid":`${n}-standard-header`,children:[o.tooltip&&t.jsx("div",{style:{margin:-8},children:t.jsxs(P,{children:[t.jsx(S,{children:t.jsx(D,{"aria-label":`${o.text} tooltip`})}),t.jsx($,{children:o.tooltip})]})}),o.text]},d))})}),t.jsx(e.Tbody,{children:a.map((o,d)=>t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:o.map((m,h)=>t.jsx(e.Td,{"data-testid":`${n}-standard-data`,children:m.text},h))},d))})]})}W.__docgenInfo={description:"",methods:[],displayName:"StandardTable"};function _(s){const{compactLayout:i,headers:r,rows:a,testID:n}=s,[o,d]=b.useState(0),m=b.useMemo(()=>L.getSelectItems(a),[a]),h=r[0],f=a[o]||a[0];function k(l){d(l&&parseInt(l.id,10)||0)}return t.jsxs(e,{layout:i,testID:`${n}-compact`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{children:t.jsx(e.Th,{align:"left",colSpan:2,children:t.jsx(q,{labelProps:{label:h.text},items:m,selectedItem:m[o],onChange:k})})})}),t.jsx(e.Tbody,{children:r.map((l,x)=>x===0?null:t.jsxs(e.Tr,{"data-testid":`${n}-compact-row`,children:[t.jsxs(e.Th,{align:"left","data-testid":`${n}-compact-header`,children:[l.text,l.tooltip&&t.jsxs(P,{children:[t.jsx(S,{children:t.jsx(H,{"aria-label":`${l.text} tooltip`})}),t.jsx($,{children:l.tooltip})]})]}),f[x]&&t.jsx(e.Td,{"data-testid":`${n}-compact-data`,children:f[x].text})]},x))})]})}_.__docgenInfo={description:"",methods:[],displayName:"CompactTable"};function u(s){const{minWidth:i,testID:r="responsive-table",...a}=s,{headers:n,rows:o}=a;return L.isDataValid(n,o)?t.jsxs(z,{"data-testid":r,children:[t.jsx(B,{$minWidth:i,children:t.jsx(_,{...a,testID:r})}),t.jsx(M,{$minWidth:i,children:t.jsx(W,{...a,testID:r})})]}):(console.warn("Invalid responsive table data"),null)}u.__docgenInfo={description:"",methods:[],displayName:"ResponsiveTable",props:{minWidth:{required:!0,tsType:{name:"number"},description:""},compactLayout:{required:!1,tsType:{name:'intersection["layout"]',raw:'TableProps["layout"]'},description:""},standardLayout:{required:!1,tsType:{name:'intersection["layout"]',raw:'TableProps["layout"]'},description:""},headers:{required:!0,tsType:{name:"tuple",raw:"[Header, Header, ...Header[]]",elements:[{name:"CoreResponsiveTable.Header"},{name:"CoreResponsiveTable.Header"},{name:"unknown"}]},description:""},rows:{required:!0,tsType:{name:"tuple",raw:"[Row, ...Row[]]",elements:[{name:"CoreResponsiveTable.Row"},{name:"unknown"}]},description:""}}};const A={minWidth:650,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR variable",tooltip:"Additional information"},{text:"Repayment term"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€8,000"},{text:"8.25%"},{text:"8.5%"},{text:"60 months"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€15,000"},{text:"7.3%"},{text:"7.5%"},{text:"60 months"},{text:"€298.83"},{text:"€2,929.80"}],[{text:"€20,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€783.85"},{text:"€7,031.00"}]]},O={minWidth:750,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR (Annual Percentage Rate)",tooltip:"Additional information"},{text:"Sample loan amount"},{text:"Loan term",tooltip:"Additional information"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€2,000 – €9,999"},{text:"8.25%"},{text:"8.5%"},{text:"€8,000"},{text:"5 years"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€10,000 – €19,999"},{text:"7.3%"},{text:"7.5%"},{text:"€15,000"},{text:"5 years"},{text:"€298.83"},{text:"€2,929.800"}],[{text:"€20,000 – €39,999"},{text:"6.6%"},{text:"6.8%"},{text:"€20,000"},{text:"5 years"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000 – €65,000"},{text:"6.6%"},{text:"6.8%"},{text:"€40,000"},{text:"5 years"},{text:"€783.85"},{text:"€7,031.00"}]]},E={title:"Components/Data Display/ResponsiveTable",component:u,argTypes:{minWidth:{control:"number",description:"The minimum width of the container, in pixels, needed to display the table in full."},compactLayout:{control:{type:"select"},options:j},standardLayout:{control:{type:"select"},options:j}},args:{minWidth:650,compactLayout:"auto",standardLayout:"auto"}},c={args:{...A}},p={argTypes:{compactLayout:{control:{disable:!0}},standardLayout:{control:{disable:!0}}},render:function(){const[i,r]=b.useState("car-loan");function a(n){r(n)}return t.jsx(t.Fragment,{children:t.jsxs(T,{items:[{id:"car-loan",label:"Car loan",panel:t.jsx(u,{...A})},{id:"green-car-loan",label:"Green car loan",panel:t.jsx(u,{...O})}],activeItemId:i,mobileHeading:"Tab group title",onChange:a,withPadding:!1,children:[t.jsx(T.Items,{}),t.jsx(T.Panels,{})]})})}};var g,I,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...mockResponsiveTable01Props
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var R,w,C;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const N=["Basic","WithTabs"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,WithTabs:p,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{c as B,Z as R,p as W};
