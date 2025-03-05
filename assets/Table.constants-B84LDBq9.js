import{j as o}from"./jsx-runtime-DQ32znRX.js";import{a as s,u as l,b as i}from"./index-CzvSJj6w.js";import{T as d}from"./Typography-RMDmhaRB.js";const p=s.table`
  ${({$layout:a})=>{const{tokens:t}=l(),{table:e}=t;return[i`
        border-collapse: collapse;
        border-bottom-width: ${e.stroke.bottom.width};
        border-bottom-style: ${e.stroke.bottom.style};
        border-bottom-color: ${e.stroke.bottom.color};

        & thead {
          background: ${e.head.backgroundColor};
          border-bottom-width: ${e.head.stroke.bottom.width};
          border-bottom-style: ${e.head.stroke.bottom.style};
          border-bottom-color: ${e.head.stroke.bottom.color};

          & tr {
            & th {
              text-wrap: balance;
              vertical-align: bottom;
              overflow-wrap: anywhere;
              padding-top: ${e.head.cell.padding.top};
              padding-left: ${e.head.cell.padding.left.base};
              padding-right: ${e.head.cell.padding.right.base};
              padding-bottom: ${e.head.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${e.head.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${e.head.cell.padding.right.last};
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
              padding-top: ${e.body.cell.padding.top};
              padding-left: ${e.body.cell.padding.left.base};
              padding-right: ${e.body.cell.padding.right.base};
              padding-bottom: ${e.body.cell.padding.bottom};
            }

            & > :first-child {
              padding-left: ${e.body.cell.padding.left.first};
            }

            & > :last-child {
              padding-right: ${e.body.cell.padding.right.last};
            }

            &:nth-of-type(odd) {
              background: ${e.body.row.backgroundColor.odd};
            }

            &:nth-of-type(even) {
              background: ${e.body.row.backgroundColor.even};
            }
          }
        }
      `,a&&i`
          table-layout: ${a};
        `]}}
`;function r(a){const{layout:t,testID:e="table",...n}=a;return o.jsx(p,{width:"100%",...n,$layout:t,"data-testid":e})}r.Thead=function(t){const{tokens:e}=l(),{table:n}=e;return o.jsx(d,{component:"thead",variant:n.head.typography.variant,fontFamily:n.head.typography.fontFamily,...t})};r.Tbody=function(t){const{tokens:e}=l(),{table:n}=e;return o.jsx(d,{component:"tbody",variant:n.body.typography.variant,fontFamily:n.body.typography.fontFamily,...t})};r.Tr=function(t){return o.jsx("tr",{...t})};r.Th=function(t){const{align:e="right",...n}=t;return o.jsx("th",{align:e,...n})};r.Td=function(t){const{align:e="right",...n}=t;return o.jsx("td",{align:e,...n})};r.__docgenInfo={description:"",methods:[{name:"Thead",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"Omit",elements:[{name:"intersection",raw:`(
  | HeadingVariantProps
  | StandardVariantProps
) & {
  component?: T;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends T ? "p" : T>,
    "component"
  >`,elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  component?: T;
}`,signature:{properties:[{key:"component",value:{name:"literal",value:'"thead"',required:!1}}]}},{name:"unknown"}]},{name:"union",raw:'"component" | "variant" | "fontFamily"',elements:[{name:"literal",value:'"component"'},{name:"literal",value:'"variant"'},{name:"literal",value:'"fontFamily"'}]}],raw:`Omit<
  TypographyProps<"thead">,
  "component" | "variant" | "fontFamily"
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
}`,signature:{properties:[{key:"component",value:{name:"literal",value:'"tbody"',required:!1}}]}},{name:"unknown"}]},{name:"union",raw:'"component" | "variant" | "fontFamily"',elements:[{name:"literal",value:'"component"'},{name:"literal",value:'"variant"'},{name:"literal",value:'"fontFamily"'}]}],raw:`Omit<
  TypographyProps<"tbody">,
  "component" | "variant" | "fontFamily"
>`,alias:"TableTbodyProps"}}],returns:null},{name:"Tr",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"tr"'}],raw:'ComponentPropsWithRef<"tr">',alias:"TableTrProps"}}],returns:null},{name:"Th",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"th"'}],raw:'ComponentPropsWithRef<"th">',alias:"TableThProps"}}],returns:null},{name:"Td",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"td"'}],raw:'ComponentPropsWithRef<"td">',alias:"TableTdProps"}}],returns:null}],displayName:"Table",props:{layout:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LAYOUTS)[number]"},description:""}}};const u=["auto","fixed"];export{u as L,r as T};
