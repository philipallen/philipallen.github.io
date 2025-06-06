import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{T as n,a as o}from"./index-DEyQ2aqW.js";import{c as t}from"./index-DDVW1aFH.js";const u=({country:l})=>{const a=l.component;return e.jsxs(e.Fragment,{children:[a?e.jsx(a,{}):null,e.jsxs(o,{children:[e.jsx("b",{children:"code:"})," ",l.code]}),e.jsxs(o,{children:[e.jsx("b",{children:"label:"})," ",l.label]}),e.jsxs(o,{children:[e.jsx("b",{children:"callingCode:"})," ",l.callingCode]})]})},f={title:"Components/Data Display/Country assets",component:u,argTypes:{country:{control:"select",options:t.map(l=>l.label),mapping:Object.fromEntries(t.map(l=>[l.label,l]))}}},r={args:{country:t[0]}},s={argTypes:{country:{control:{disable:!0}}},render:function(){return e.jsxs(n,{children:[e.jsx(n.Thead,{children:e.jsxs(n.Tr,{children:[e.jsx(n.Th,{align:"left",children:"flag"}),e.jsx(n.Th,{align:"left",children:"label"}),e.jsx(n.Th,{align:"left",children:"code"}),e.jsx(n.Th,{align:"left",children:"callingCode"})]})}),e.jsx(n.Tbody,{children:t.map(({code:a,label:h,callingCode:m,component:c})=>e.jsxs(n.Tr,{children:[e.jsx(n.Td,{align:"left",children:c?e.jsx(c,{}):e.jsx("span",{children:"🏳️"})}),e.jsx(n.Td,{align:"left",children:h}),e.jsx(n.Td,{align:"left",children:a}),e.jsx(n.Td,{align:"left",children:m})]},a))})]})}};var d,i,T;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    country: countriesData[0]
  }
}`,...(T=(i=r.parameters)==null?void 0:i.docs)==null?void 0:T.source}}};var b,p,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    country: {
      control: {
        disable: true
      }
    }
  },
  render: function Render() {
    return <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th align="left">flag</Table.Th>
            <Table.Th align="left">label</Table.Th>
            <Table.Th align="left">code</Table.Th>
            <Table.Th align="left">callingCode</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {countriesData.map(({
          code,
          label,
          callingCode,
          component: FlagComponent
        }: CountryData) => {
          return <Table.Tr key={code}>
                  <Table.Td align="left">
                    {FlagComponent ? <FlagComponent /> : <span>🏳️</span>}
                  </Table.Td>
                  <Table.Td align="left">{label}</Table.Td>
                  <Table.Td align="left">{code}</Table.Td>
                  <Table.Td align="left">{callingCode}</Table.Td>
                </Table.Tr>;
        })}
        </Table.Tbody>
      </Table>;
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const j=["Basic","FullList"],F=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,FullList:s,__namedExportsOrder:j,default:f},Symbol.toStringTag,{value:"Module"}));export{r as B,F as C,s as F};
