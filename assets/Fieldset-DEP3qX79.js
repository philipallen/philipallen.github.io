import{j as e}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as r,b as d}from"./index-D3TaQYms.js";import{T as p}from"./Typography-squJd_7u.js";const h=i.fieldset`
  ${()=>{const{tokens:t}=r(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.gap};
    `}}
`,x=i(p).attrs({component:"legend"})`
  padding: 0;
`,c=i.ul`
  ${()=>{const{tokens:t}=r(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`,j=i(c)`
  ${()=>{const{tokens:t}=r(),{fieldset:n}=t;return d`
      padding-left: ${n.nestedList.paddingLeft};
    `}}
`,g=i.li`
  ${()=>{const{tokens:t}=r(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`;function F(t){const{legend:n,legendHint:s,components:l,testID:a="fieldset"}=t,{tokens:y}=r(),{fieldset:o}=y;return e.jsxs(h,{"data-testid":a,children:[e.jsx(x,{color:o.legend.color.base,variant:o.legend.typography.variant,fontFamily:o.legend.typography.fontFamily,children:n}),e.jsx("div",{children:s&&e.jsx(p,{component:"span",color:o.legendHint.color.base,variant:o.legendHint.typography.variant,fontFamily:o.legendHint.typography.fontFamily,children:s})}),e.jsx(c,{children:l.map((u,f)=>e.jsx(g,{children:e.jsx(m,{...u})},f))})]})}function m(t){const{component:n,nestedComponents:s}=t;return e.jsxs(e.Fragment,{children:[n,s&&s.length>0&&e.jsx(j,{children:s.map((l,a)=>e.jsx(g,{children:e.jsx(m,{...l})},a))})]})}F.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},legendHint:{required:!1,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"CoreFieldset.Component"}],raw:"CoreFieldset.Component[]"},description:""}}};export{F};
