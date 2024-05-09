import{j as r}from"./jsx-runtime-6eef64cc.js";import{a as i,u as o,b as a}from"./index-22f9e29b.js";import{T as p}from"./Typography-df6f4efa.js";import{d as c}from"./commonProps-af166571.js";const f=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,u=i.div`
  ${()=>{const{tokens:e}=o(),{formElementContainer:t}=e;return[a`
        width: 100%;
        flex: 2;
        position: relative;
        max-width: ${t.maxWidth};
      `]}}
`,g=i.div`
  ${()=>{const{tokens:e}=o(),{fontFamily:t,themeColor:n}=e;return[a`
        font-family: ${t.OpenSansRegular};
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: left;
        padding-top: 8px;
        color: ${n.ragRed};
        width: 100%;
      `]}}
`,x=({elementId:e,labelId:t,labelText:n,errorText:s,children:d,labelTestId:l,...m})=>r.jsxs(f,{...c(m),children:[n?r.jsx(p,{id:t,component:"label",htmlFor:e,testID:l,children:n}):null,r.jsxs(u,{children:[d,s?r.jsx(g,{children:s}):null]})]});x.__docgenInfo={description:"",methods:[],displayName:"FormElementContainer",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},testID:{required:!1,tsType:{name:"string"},description:""},labelTestId:{required:!1,tsType:{name:"string"},description:""},elementId:{required:!1,tsType:{name:"string"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},labelText:{required:!0,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""}}};export{x as F};
