import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{r as T}from"./index-KmaxkdDD.js";import{R as S}from"./index-DYe-GrfV.js";import{a as j}from"./index-ByEiyUmp.js";import{T as e,L as g}from"./Table.constants-BkkURiNH.js";import{T as L,a as P,b as $}from"./TooltipTrigger-9BknpwOm.js";import{T as D,a as k}from"./InputLabelTopTooltip-D8DIL0uV.js";import{S as _}from"./Select-DfjT98s-.js";import{T as b}from"./Tabs-nrdibrUp.js";const z=j.div`
  @supports (container-type: inline-size) {
    container-type: inline-size;
  }
`,B=j.div`
  display: block;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: none;
    }
  }
`,M=j.div`
  display: none;

  @supports (container-type: inline-size) {
    @container (min-width: ${({$minWidth:i})=>i}px) {
      display: block;
    }
  }
`;function O(i){const{standardLayout:r,headers:s,rows:a,testID:n}=i;return t.jsxs(e,{layout:r,testID:`${n}-standard`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:s.map((o,d)=>t.jsxs(e.Th,{align:o.align,"data-testid":`${n}-standard-header`,children:[o.tooltip&&t.jsxs(L,{children:[t.jsx(P,{children:t.jsx(D,{"aria-label":`${o.text} tooltip`})}),t.jsx($,{children:o.tooltip})]}),o.text]},d))})}),t.jsx(e.Tbody,{children:a.map((o,d)=>t.jsx(e.Tr,{"data-testid":`${n}-standard-row`,children:o.map((m,u)=>{var c;return t.jsx(e.Td,{align:(c=s[u])==null?void 0:c.align,"data-testid":`${n}-standard-data`,children:m.text},u)})},d))})]})}function V(i){const{compactLayout:r,headers:s,rows:a,testID:n}=i,[o,d]=T.useState(0),m=T.useMemo(()=>S.getSelectItems(a),[a]),u=s[0],c=a[o]||a[0];function W(l){d(l&&parseInt(l.id,10)||0)}return t.jsxs(e,{layout:r,testID:`${n}-compact`,children:[t.jsx(e.Thead,{children:t.jsx(e.Tr,{children:t.jsx(e.Th,{align:"left",colSpan:2,children:t.jsx(_,{labelProps:{label:u.text},items:m,selectedItem:m[o],onChange:W})})})}),t.jsx(e.Tbody,{children:s.map((l,h)=>h===0?null:t.jsxs(e.Tr,{"data-testid":`${n}-compact-row`,children:[t.jsxs(e.Th,{align:"left","data-testid":`${n}-compact-header`,children:[l.text,l.tooltip&&t.jsxs(L,{children:[t.jsx(P,{children:t.jsx(k,{"aria-label":`${l.text} tooltip`})}),t.jsx($,{children:l.tooltip})]})]}),c[h]&&t.jsx(e.Td,{"data-testid":`${n}-compact-data`,children:c[h].text})]},h))})]})}function y(i){const{minWidth:r,testID:s="responsive-table",...a}=i,{headers:n,rows:o}=a;return S.isDataValid(n,o)?t.jsxs(z,{"data-testid":s,children:[t.jsx(B,{$minWidth:r,children:t.jsx(V,{...a,testID:s})}),t.jsx(M,{$minWidth:r,children:t.jsx(O,{...a,testID:s})})]}):(console.warn("Invalid responsive table data"),null)}const A={minWidth:650,headers:[{text:"Loan amount",align:"left"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR variable",tooltip:"Additional information"},{text:"Repayment term"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€8,000"},{text:"8.25%"},{text:"8.5%"},{text:"60 months"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€15,000"},{text:"7.3%"},{text:"7.5%"},{text:"60 months"},{text:"€298.83"},{text:"€2,929.80"}],[{text:"€20,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000"},{text:"6.6%"},{text:"6.8%"},{text:"60 months"},{text:"€783.85"},{text:"€7,031.00"}]]},E={minWidth:750,headers:[{text:"Loan amount"},{text:"Interest rate",tooltip:"Additional information"},{text:"APR (Annual Percentage Rate)",tooltip:"Additional information"},{text:"Sample loan amount"},{text:"Loan term",tooltip:"Additional information"},{text:"Monthly repayment"},{text:"Cost of credit"}],rows:[[{text:"€2,000 – €9,999"},{text:"8.25%"},{text:"8.5%"},{text:"€8,000"},{text:"5 years"},{text:"€162.95"},{text:"€1,777.00"}],[{text:"€10,000 – €19,999"},{text:"7.3%"},{text:"7.5%"},{text:"€15,000"},{text:"5 years"},{text:"€298.83"},{text:"€2,929.800"}],[{text:"€20,000 – €39,999"},{text:"6.6%"},{text:"6.8%"},{text:"€20,000"},{text:"5 years"},{text:"€391.92"},{text:"€3,515.20"}],[{text:"€40,000 – €65,000"},{text:"6.6%"},{text:"6.8%"},{text:"€40,000"},{text:"5 years"},{text:"€783.85"},{text:"€7,031.00"}]]},H={title:"Components/Data Display/ResponsiveTable",component:y,argTypes:{minWidth:{control:"number",description:"The minimum width of the container, in pixels, needed to display the table in full."},compactLayout:{control:{type:"select"},options:g},standardLayout:{control:{type:"select"},options:g}},args:{minWidth:650,compactLayout:"auto",standardLayout:"auto"}},p={args:{...A}},x={argTypes:{compactLayout:{control:{disable:!0}},standardLayout:{control:{disable:!0}}},render:function(){const[r,s]=T.useState("car-loan");function a(n){s(n)}return t.jsx(t.Fragment,{children:t.jsxs(b,{items:[{id:"car-loan",label:"Car loan",panel:t.jsx(y,{...A})},{id:"green-car-loan",label:"Green car loan",panel:t.jsx(y,{...E})}],activeItemId:r,mobileHeading:"Tab group title",onChange:a,withPadding:!1,children:[t.jsx(b.Items,{}),t.jsx(b.Panels,{})]})})}};var f,I,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...mockResponsiveTable01Props
  }
}`,...(v=(I=p.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var R,w,C;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(w=x.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const G=["Basic","WithTabs"],Z=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,WithTabs:x,__namedExportsOrder:G,default:H},Symbol.toStringTag,{value:"Module"}));export{p as B,Z as R,x as W};
