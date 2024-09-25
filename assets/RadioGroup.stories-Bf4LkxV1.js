import{f as h}from"./index-Cnk2rnxF.js";import{j as n}from"./jsx-runtime-DQ32znRX.js";import{F as g}from"./Fieldset-DEP3qX79.js";import{R as y}from"./Radio-DoMqWt5L.js";function l(o){const{legend:s,legendHint:i,name:m,inputs:p,onChange:u,testID:c="radio-group"}=o;return n.jsx(g,{legend:s,legendHint:i,components:p.map(d=>({component:n.jsx(y,{...d,name:m,onChange:u})})),testID:c})}l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<RadioBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<RadioBaseProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  label?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightProps, "children">',required:!0}},{key:"alertProps",value:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}],required:!1}}]}}]},{name:"union",raw:'"name" | "onChange"',elements:[{name:"literal",value:'"name"'},{name:"literal",value:'"onChange"'}]}],raw:'Omit<RadioProps, "name" | "onChange">'}],raw:"RadioGroupInput[]"},description:""},onChange:{required:!1,tsType:{name:'intersection["onChange"]',raw:'RadioProps["onChange"]'},description:""}}};const b={title:"Components/Inputs/RadioGroup",component:l,argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{legend:"Group title",name:"group",inputs:[{value:"bacon",labelProps:{label:"Bacon"}},{value:"cheese",labelProps:{label:"Cheese"}},{value:"onions",labelProps:{label:"Onions"}},{value:"lettuce",labelProps:{label:"Lettuce"}},{value:"tomato",labelProps:{label:"Tomato"}}],onChange:h()}},e={};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const P=["Basic"],w=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,__namedExportsOrder:P,default:b},Symbol.toStringTag,{value:"Module"}));export{e as B,w as R};
