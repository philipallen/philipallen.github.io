import{a as l,u as i,b as a,j as t}from"./index-d88b625c.js";import{T as c}from"./Typography-06318a9b.js";const h=l.fieldset`
  ${()=>{const{tokens:e}=i(),{fieldset:n}=e;return a`
      all: unset;
      display: grid;
      gap: ${n.gap};
    `}}
`,p=l.ul`
  ${()=>{const{tokens:e}=i(),{fieldset:n}=e;return a`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`,j=l(p)`
  ${()=>{const{tokens:e}=i(),{fieldset:n}=e;return a`
      padding-left: ${n.nestedList.paddingLeft};
    `}}
`,g=l.li`
  ${()=>{const{tokens:e}=i(),{fieldset:n}=e;return a`
      all: unset;
      display: grid;
      gap: ${n.list.gap};
    `}}
`;function $(e){const{legend:n,legendHint:s,components:d,testID:r="fieldset"}=e,{tokens:f}=i(),{fieldset:o}=f;return t.jsxs(h,{"data-testid":r,children:[t.jsx(c,{component:"legend",color:o.legend.color.base,fontFamily:o.legend.fontFamily,variant:o.legend.typographyVariant,children:n}),t.jsx("div",{children:s&&t.jsx(c,{component:"span",color:o.legendHint.color.base,fontFamily:o.legendHint.fontFamily,variant:o.legendHint.typographyVariant,children:s})}),t.jsx(p,{children:d.map((u,x)=>t.jsx(g,{children:t.jsx(m,{...u})},x))})]})}function m(e){const{component:n,nestedComponents:s}=e;return t.jsxs(t.Fragment,{children:[n,s&&s.length>0&&t.jsx(j,{children:s.map((d,r)=>t.jsx(g,{children:t.jsx(m,{...d})},r))})]})}export{$ as F};
