import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as r,u as i,b as d}from"./index-f9091704.js";import{T as p}from"./Typography-401b61b3.js";const h=r.fieldset`
  ${()=>{const{tokens:t}=i(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.gap};
    `}}
`,c=r.ul`
  ${()=>{const{tokens:t}=i(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`,x=r(c)`
  ${()=>{const{tokens:t}=i(),{fieldset:n}=t;return d`
      padding-left: ${n.nestedList.paddingLeft};
    `}}
`,g=r.li`
  ${()=>{const{tokens:t}=i(),{fieldset:n}=t;return d`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`;function j(t){const{legend:n,legendHint:s,components:l,testID:a="fieldset"}=t,{tokens:y}=i(),{fieldset:o}=y;return e.jsxs(h,{"data-testid":a,children:[e.jsx(p,{component:"legend",color:o.legend.color.base,variant:o.legend.typography.variant,fontFamily:o.legend.typography.fontFamily,children:n}),e.jsx("div",{children:s&&e.jsx(p,{component:"span",color:o.legendHint.color.base,variant:o.legendHint.typography.variant,fontFamily:o.legendHint.typography.fontFamily,children:s})}),e.jsx(c,{children:l.map((u,f)=>e.jsx(g,{children:e.jsx(m,{...u})},f))})]})}function m(t){const{component:n,nestedComponents:s}=t;return e.jsxs(e.Fragment,{children:[n,s&&s.length>0&&e.jsx(x,{children:s.map((l,a)=>e.jsx(g,{children:e.jsx(m,{...l})},a))})]})}j.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},legendHint:{required:!1,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"CoreFieldset.Component"}],raw:"CoreFieldset.Component[]"},description:""}}};export{j as F};
