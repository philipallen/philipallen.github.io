import{j as t}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as o,b as s}from"./index-D3TaQYms.js";import{T as c}from"./Typography-squJd_7u.js";const d=i.div`
  ${({$labelText:e})=>{const{tokens:n}=o(),{inputLabelTop:a}=n;return[s`
        width: 100%;
        display: grid;
      `,e&&s`
          gap: ${a.gap};
        `]}}
`,y=i.span`
  ${()=>{const{tokens:e}=o(),{inputLabelTop:n}=e;return s`
      color: ${n.label.color.base};
    `}}
`,T=i.div`
  ${()=>{const{tokens:e}=o(),{inputLabelTop:n}=e;return s`
      color: ${n.labelHint.color.base};
    `}}
`;function b(e){const{labelElement:n,labelText:a,labelHint:r,labelHintID:l,children:m}=e,{tokens:u}=o(),{inputLabelTop:p}=u;return t.jsxs(d,{$labelText:a,children:[t.jsxs("div",{children:[n,r&&t.jsx(T,{children:t.jsx(c,{id:l,component:"span",color:"inherit",variant:p.labelHint.typography.variant,fontFamily:p.labelHint.typography.fontFamily,children:r})})]}),t.jsx("div",{children:m})]})}b.Label=e=>{const{text:n,component:a="span"}=e,{tokens:r}=o(),{inputLabelTop:l}=r;return t.jsx(y,{children:t.jsx(c,{component:a,color:"inherit",variant:l.label.typography.variant,fontFamily:l.label.typography.fontFamily,children:n})})};b.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  text: string;
  component?: ElementType;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"component",value:{name:"ElementType",required:!1}}]},alias:"InputLabelTopBaseLabelProps"}}],returns:null}],displayName:"InputLabelTopBase",props:{labelElement:{required:!0,tsType:{name:"JSX.Element"},description:""},labelText:{required:!1,tsType:{name:"string"},description:""},labelHint:{required:!1,tsType:{name:"string"},description:""},labelHintID:{required:!1,tsType:{name:"string"},description:""}}};export{b as I};
