import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as r,u as i,b as d}from"./index-2b4c4340.js";import{T as p}from"./Typography-45ec0b3f.js";const h=r.fieldset`
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
`;function j(t){const{legend:n,legendHint:s,components:l,testID:a="fieldset"}=t,{tokens:u}=i(),{fieldset:o}=u;return e.jsxs(h,{"data-testid":a,children:[e.jsx(p,{component:"legend",color:o.legend.color.base,fontFamily:o.legend.fontFamily,variant:o.legend.typographyVariant,children:n}),e.jsx("div",{children:s&&e.jsx(p,{component:"span",color:o.legendHint.color.base,fontFamily:o.legendHint.fontFamily,variant:o.legendHint.typographyVariant,children:s})}),e.jsx(c,{children:l.map((f,y)=>e.jsx(g,{children:e.jsx(m,{...f})},y))})]})}function m(t){const{component:n,nestedComponents:s}=t;return e.jsxs(e.Fragment,{children:[n,s&&s.length>0&&e.jsx(x,{children:s.map((l,a)=>e.jsx(g,{children:e.jsx(m,{...l})},a))})]})}j.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},legendHint:{required:!1,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"CoreFieldset.Component"}],raw:"CoreFieldset.Component[]"},description:""}}};export{j as F};
