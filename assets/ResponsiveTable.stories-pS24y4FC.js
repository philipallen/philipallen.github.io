import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{r as b}from"./index-KmaxkdDD.js";import{R as C}from"./index-VIbBARS4.js";import{a as j}from"./index-DT8u_GqS.js";import{T as e,L as g}from"./Table.constants-t9JWSnk0.js";import{T as L,a as P,b as $}from"./TooltipTrigger-DTxXleLQ.js";import{T as W,a as D}from"./InputLabelTopTooltip-C0KDMlGy.js";import{S as k}from"./SelectV2-CX86qxQe.js";import{T}from"./Tabs-v_mZR_ye.js";const _=j.div`
  @supports (container-type: inline-size) {
    container-type: inline-size;
  }
`,z=j.div`
  display: block;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: none;
    }
  }
`,B=j.div`
  display: none;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: block;
    }
  }
`;function M(i){const{standardLayout:l,headers:s,rows:a,testID:n}=i;return t.jsxs(e,{layout:l,testID:`${n}-standard`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:s.map((o,d)=>t.jsxs(e.Th,{align:o.align,"data-testid":`${n}-standard-header`,children:[o.tooltip&&t.jsxs(L,{children:[t.jsx(P,{children:t.jsx(W,{"aria-label":`${o.text} tooltip`})}),t.jsx($,{children:o.tooltip})]}),o.text]},d))})}),t.jsx(e.Tbody,{children:a.map((o,d)=>t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:o.map((h,m)=>{var c;return t.jsx(e.Td,{align:(c=s[m])==null?void 0:c.align,"data-testid":`${n}-standard-data`,children:h.text},m)})},d))})]})}function O(i){const{compactLayout:l,headers:s,rows:a,testID:n}=i,o=b.useMemo(()=>C.getSelectItems(a),[a]),[d,h]=b.useState(()=>{var r;return(r=o[0])==null?void 0:r.value}),m=s[0],c=a.find(r=>r[0].text===d)||a[0];return t.jsxs(e,{layout:l,testID:`${n}-compact`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{children:t.jsx(e.Th,{align:"left",colSpan:2,children:t.jsx(k,{labelProps:{label:m.text},items:o,selectedKey:d,onSelectionChange:h})})})}),t.jsx(e.Tbody,{children:s.map((r,u)=>u===0?null:t.jsxs(e.Tr,{"data-testid":`${n}-compact-row`,children:[t.jsxs(e.Th,{align:"left","data-testid":`${n}-compact-header`,children:[r.text,r.tooltip&&t.jsxs(L,{children:[t.jsx(P,{children:t.jsx(D,{"aria-label":`${r.text} tooltip`})}),t.jsx($,{children:r.tooltip})]})]}),c[u]&&t.jsx(e.Td,{"data-testid":`${n}-compact-data`,children:c[u].text})]},u))})]})}function y(i){const{minWidth:l,testID:s="responsive-table",...a}=i,{headers:n,rows:o}=a;return C.isDataValid(n,o)?t.jsxs(_,{"data-testid":s,children:[t.jsx(z,{$minWidth:l,children:t.jsx(O,{...a,testID:s})}),t.jsx(B,{$minWidth:l,children:t.jsx(M,{...a,testID:s})})]}):(console.warn("Invalid responsive table data"),null)}const A={minWidth:650,headers:[{text:"Loan amount",align:"left"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR variable",tooltip:"Additional information"},{text:"Repayment term"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€8,000"},{text:"8.25%"},{text:"8.5%"},{text:"60 months"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€15,000"},{text:"7.3%"},{text:"7.5%"},{text:"60 months"},{text:"€298.83"},{text:"€2,929.80"}],[{text:"€20,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€783.85"},{text:"€7,031.00"}]]},V={minWidth:750,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR (Annual Percentage Rate)",tooltip:"Additional information"},{text:"Sample loan amount"},{text:"Loan term",tooltip:"Additional information"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€2,000 – €9,999"},{text:"8.25%"},{text:"8.5%"},{text:"€8,000"},{text:"5 years"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€10,000 – €19,999"},{text:"7.3%"},{text:"7.5%"},{text:"€15,000"},{text:"5 years"},{text:"€298.83"},{text:"€2,929.800"}],[{text:"€20,000 – €39,999"},{text:"6.6%"},{text:"6.8%"},{text:"€20,000"},{text:"5 years"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000 – €65,000"},{text:"6.6%"},{text:"6.8%"},{text:"€40,000"},{text:"5 years"},{text:"€783.85"},{text:"€7,031.00"}]]},E={title:"Components/Data Display/ResponsiveTable",component:y,argTypes:{minWidth:{control:"number",description:"The minimum width of the container, in pixels, needed to display the table in full."},compactLayout:{control:{type:"select"},options:g},standardLayout:{control:{type:"select"},options:g}},args:{minWidth:650,compactLayout:"auto",standardLayout:"auto"}},p={args:{...A}},x={argTypes:{compactLayout:{control:{disable:!0}},standardLayout:{control:{disable:!0}}},render:function(){const[l,s]=b.useState("car-loan");function a(n){s(n)}return t.jsx(t.Fragment,{children:t.jsxs(T,{items:[{id:"car-loan",label:"Car loan",panel:t.jsx(y,{...A})},{id:"green-car-loan",label:"Green car loan",panel:t.jsx(y,{...V})}],activeItemId:l,mobileHeading:"Tab group title",onChange:a,withPadding:!1,children:[t.jsx(T.Items,{}),t.jsx(T.Panels,{})]})})}};var f,v,I;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...mockResponsiveTable01Props
  }
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var R,S,w;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(S=x.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const H=["Basic","WithTabs"],X=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,WithTabs:x,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{p as B,X as R,x as W};
