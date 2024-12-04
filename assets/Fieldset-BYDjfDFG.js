import{j as e}from"./jsx-runtime-DQ32znRX.js";import{a as r,u as a,b as o}from"./index-CtBUti8q.js";import{T as p}from"./Typography-v4_88_aK.js";const x=r.fieldset`
  ${()=>{const{tokens:n}=a(),{fieldset:t}=n;return o`
      all: unset;
      display: grid;
      gap: ${t.gap};
    `}}
`,j=r(p).attrs({component:"legend"})`
  padding: 0;
`,c=r.ul`
  ${()=>{const{tokens:n}=a(),{fieldset:t}=n;return o`
      all: unset;
      display: grid;
      gap: ${t.list.gap};
    `}}
`,v=r(c)`
  ${()=>{const{tokens:n}=a(),{fieldset:t}=n;return o`
      padding-left: ${t.nestedList.paddingLeft};
    `}}
`,m=r.li`
  ${()=>{const{tokens:n}=a(),{fieldset:t}=n;return o`
      all: unset;
      display: grid;
      gap: ${t.list.gap};
    `}}
`;function F(n){const{legend:t,legendHint:s,components:l,ariaAlertAssociationProps:d,testID:u="fieldset"}=n,{tokens:y}=a(),{fieldset:i}=y;return e.jsxs(x,{"data-testid":u,...d,children:[e.jsx(j,{color:i.legend.color.base,variant:i.legend.typography.variant,fontFamily:i.legend.typography.fontFamily,children:t}),e.jsx("div",{children:s&&e.jsx(p,{component:"span",color:i.legendHint.color.base,variant:i.legendHint.typography.variant,fontFamily:i.legendHint.typography.fontFamily,children:s})}),e.jsx(c,{children:l.map((f,h)=>e.jsx(m,{children:e.jsx(g,{...f})},h))})]})}function g(n){const{component:t,nestedComponents:s}=n;return e.jsxs(e.Fragment,{children:[t,s&&s.length>0&&e.jsx(v,{children:s.map((l,d)=>e.jsx(m,{children:e.jsx(g,{...l})},d))})]})}F.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!0,tsType:{name:"string"},description:""},legendHint:{required:!1,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"CoreFieldset.Component"}],raw:"CoreFieldset.Component[]"},description:""},ariaAlertAssociationProps:{required:!0,tsType:{name:"Pick",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"aria-errormessage" | "aria-invalid" | "aria-describedby"',elements:[{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'},{name:"literal",value:'"aria-describedby"'}]}],raw:`Pick<
  ComponentPropsWithRef<"input">,
  "aria-errormessage" | "aria-invalid" | "aria-describedby"
>`},description:""}}};export{F};
