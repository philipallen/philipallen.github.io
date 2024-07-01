import{j as s}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as r,b as a}from"./index-CZQU1x5t.js";import{C as c}from"./index-B7-70OtY.js";import{d as p}from"./commonProps-PXE5vIpT.js";const u=i.div`
  ${()=>{const{tokens:e}=r(),{clearButton:t}=e;return a`
      width: ${t.width};
      height: ${t.height};
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;

      &:active {
        opacity: 0.5;
      }
    `}}
`,d=({onClick:e,...t})=>{const{tokens:o}=r(),{clearButton:n}=o;return s.jsx(u,{...p(t),role:"button",onClick:e,children:s.jsx(c,{width:16,height:16,color:n.color.base})})};d.__docgenInfo={description:"",methods:[],displayName:"ClearButton",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},testID:{required:!1,tsType:{name:"string"},description:""},labelTestId:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{d as C};
