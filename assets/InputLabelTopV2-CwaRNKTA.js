import{j as e}from"./jsx-runtime-DQ32znRX.js";import{$ as p}from"./Text-X8DQBs4N.js";import{I as m}from"./InlineAlert-D3r_vEqv.js";import{$ as u}from"./useLabel-hJ0mwhYX.js";import{a as h,u as d,b}from"./index-CzvSJj6w.js";import{T as s}from"./Typography-RMDmhaRB.js";import{I as l}from"./InputLabelTopTooltip-D-Cr_l48.js";function f(n){const{alerts:r}=n;return e.jsx(p,{slot:"errorMessage",children:r.map(a=>e.jsx(m,{...a},a.children))})}f.__docgenInfo={description:"",methods:[],displayName:"InputAlerts",props:{alerts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]}],raw:"InlineAlertProps[]"},description:""}}};const g=h.div`
  ${()=>{const{tokens:n}=d(),{inputLabelTop:r}=n;return b`
      width: 100%;
      display: grid;
      gap: ${r.gap};
    `}}
`;function v(n){const{label:r,labelTooltipProps:a,labelHint:o,labelHintTooltipProps:i,children:c}=n,{tokens:y}=d(),{inputLabelTop:t}=y;return e.jsxs(g,{children:[(r||o)&&e.jsxs("div",{children:[r&&e.jsxs(s,{component:"div",color:t.label.color,variant:t.label.typography.variant,fontFamily:t.label.typography.fontFamily,children:[e.jsx(u,{children:r}),a&&e.jsx(l,{...a,otherIconButtonProps:{variant:"default",typographyVariant:t.label.typography.variant}})]}),o&&e.jsxs(s,{component:"div",color:t.labelHint.color,variant:t.labelHint.typography.variant,fontFamily:t.labelHint.typography.fontFamily,children:[e.jsx(p,{slot:"description",children:o}),i&&e.jsx(l,{...i,otherIconButtonProps:{variant:"default20",typographyVariant:t.labelHint.typography.variant}})]})]}),c]})}v.__docgenInfo={description:"",methods:[],displayName:"InputLabelTopV2"};export{v as I,f as a};
