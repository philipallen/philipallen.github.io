import{j as o}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as l,b as r}from"./index-jNFq1OWt.js";import{d}from"./commonProps-PXE5vIpT.js";const a="1px",m=i.div`
  ${({position:e})=>{const{tokens:s}=l(),{adornment:t,input:n}=s;return[r`
        width: ${t.width.small};
        color: ${t.color.base};

        font-family: "OpenSans-Regular";
        font-size: 16px;
        letter-spacing: 0;
        text-align: "left";

        position: absolute;
        right: ${e==="end"?"0":"auto"};
        height: calc(100% - 1rem);
        display: flex;
        align-items: center;
        justify-content: center;

        ${e==="start"&&r`
          border-right: ${a} solid ${n.stroke.color.base};
        `}
        ${e==="end"&&r`
          border-left: ${a} solid ${n.stroke.color.base};
        `};
      `]}}
`,p=({children:e,position:s="start",...t})=>o.jsx(m,{...d(t),position:s,children:e});p.__docgenInfo={description:"",methods:[],displayName:"InputAdornment",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},testID:{required:!1,tsType:{name:"string"},description:""},labelTestId:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};export{p as I};
