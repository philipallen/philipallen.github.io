import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{u as n,l,d as b}from"./index-C1QKVHyt.js";import{T as i}from"./Typography-BK_ZjFCe.js";const s=b.table`
  ${({$layout:d})=>{const{tokens:o}=n(),{table:t}=o;return[l`
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
              overflow-wrap: anywhere;
              padding-top: ${t.head.cell.padding.top};
              padding-left: ${t.head.cell.padding.left.base};
              padding-right: ${t.head.cell.padding.right.base};
              padding-bottom: ${t.head.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${t.head.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${t.head.cell.padding.right.last};
            }
          }
        }

        & tbody {
          & tr {
            & th,
            & td {
              text-wrap: balance;
              vertical-align: top;
              overflow-wrap: anywhere;
              padding-top: ${t.body.cell.padding.top};
              padding-left: ${t.body.cell.padding.left.base};
              padding-right: ${t.body.cell.padding.right.base};
              padding-bottom: ${t.body.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${t.body.cell.padding.left.first};
            }

            & > :last-child {
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
      `,d&&l`
          table-layout: ${d};
        `]}}
`;function r(d){const{layout:o,testID:t="table",...a}=d;return e.jsx(s,{width:"100%",...a,$layout:o,"data-testid":t})}r.Thead=function(o){const{tokens:t}=n(),{table:a}=t;return e.jsx(i,{component:"thead",variant:a.head.typography.variant,fontFamily:a.head.typography.fontFamily,...o})};r.Tbody=function(o){const{tokens:t}=n(),{table:a}=t;return e.jsx(i,{component:"tbody",variant:a.body.typography.variant,fontFamily:a.body.typography.fontFamily,...o})};r.Tr=function(o){return e.jsx("tr",{...o})};r.Th=function(o){const{align:t="right",...a}=o;return e.jsx("th",{align:t,...a})};r.Td=function(o){const{align:t="right",...a}=o;return e.jsx("td",{align:t,...a})};const g=["auto","fixed"];export{g as L,r as T};
