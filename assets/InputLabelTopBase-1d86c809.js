import{j as t}from"./jsx-runtime-6eef64cc.js";import{a as i,u as a,b as l}from"./index-1940508f.js";import{T as c}from"./Typography-5392f73e.js";const m=i.div`
  ${()=>{const{tokens:e}=a(),{inputLabelTop:n}=e;return l`
      width: 100%;
      display: grid;
      gap: ${n.gap};
    `}}
`,d=i.span`
  ${()=>{const{tokens:e}=a(),{inputLabelTop:n}=e;return l`
      color: ${n.label.color.base};
    `}}
`,y=i.div`
  ${()=>{const{tokens:e}=a(),{inputLabelTop:n}=e;return l`
      color: ${n.labelHint.color.base};
    `}}
`;function u(e){const{label:n,labelHint:o,labelHintID:s,children:r}=e,{tokens:b}=a(),{inputLabelTop:p}=b;return t.jsxs(m,{children:[t.jsxs("div",{children:[n,o&&t.jsx(y,{children:t.jsx(c,{id:s,component:"span",color:"inherit",variant:p.labelHint.typography.variant,fontFamily:p.labelHint.typography.fontFamily,children:o})})]}),t.jsx("div",{children:r})]})}u.Label=e=>{const{text:n,component:o="span"}=e,{tokens:s}=a(),{inputLabelTop:r}=s;return t.jsx(d,{children:t.jsx(c,{component:o,color:"inherit",variant:r.label.typography.variant,fontFamily:r.label.typography.fontFamily,children:n})})};u.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  text: string;
  component?: ElementType;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"component",value:{name:"ElementType",required:!1}}]},alias:"InputLabelTopBaseLabelProps"}}],returns:null}],displayName:"InputLabelTopBase",props:{label:{required:!0,tsType:{name:"JSX.Element"},description:""},labelHint:{required:!1,tsType:{name:"string"},description:""},labelHintID:{required:!1,tsType:{name:"string"},description:""}}};export{u as I};
