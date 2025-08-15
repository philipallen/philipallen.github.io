import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{T as n,a as o}from"./index-CWzsFhZP.js";import{c as s}from"./index-rDNCPyWx.js";const u=({country:l})=>{const a=l.component;return e.jsxs(e.Fragment,{children:[a?e.jsx(a,{}):null,e.jsxs(o,{children:[e.jsx("b",{children:"code:"})," ",l.code]}),e.jsxs(o,{children:[e.jsx("b",{children:"label:"})," ",l.label]}),e.jsxs(o,{children:[e.jsx("b",{children:"callingCode:"})," ",l.callingCode]})]})},f={title:"Components/Data Display/Country assets",component:u,argTypes:{country:{control:"select",options:s.map(l=>l.label),mapping:Object.fromEntries(s.map(l=>[l.label,l]))}}},r={args:{country:s[0]}},t={argTypes:{country:{control:{disable:!0}}},render:function(){return e.jsxs(n,{children:[e.jsx(n.Thead,{children:e.jsxs(n.Tr,{children:[e.jsx(n.Th,{align:"left",children:"flag"}),e.jsx(n.Th,{align:"left",children:"label"}),e.jsx(n.Th,{align:"left",children:"code"}),e.jsx(n.Th,{align:"left",children:"callingCode"})]})}),e.jsx(n.Tbody,{children:s.map(({code:a,label:p,callingCode:h,component:m})=>e.jsxs(n.Tr,{children:[e.jsx(n.Td,{align:"left",children:e.jsx(m,{})}),e.jsx(n.Td,{align:"left",children:p}),e.jsx(n.Td,{align:"left",children:a}),e.jsx(n.Td,{align:"left",children:h})]},a))})]})}};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    country: countriesData[0]
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var T,b,g;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                    <FlagComponent />
                  </Table.Td>
                  <Table.Td align="left">{label}</Table.Td>
                  <Table.Td align="left">{code}</Table.Td>
                  <Table.Td align="left">{callingCode}</Table.Td>
                </Table.Tr>;
        })}
        </Table.Tbody>
      </Table>;
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const j=["Basic","FullList"],F=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,FullList:t,__namedExportsOrder:j,default:f},Symbol.toStringTag,{value:"Module"}));export{r as B,F as C,t as F};
