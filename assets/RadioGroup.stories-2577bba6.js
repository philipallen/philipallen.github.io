import{f as e}from"./index-6eef940f.js";import{j as t}from"./jsx-runtime-6eef64cc.js";import{F as d}from"./Fieldset-132c9541.js";import{R as g}from"./Radio-133222cb.js";function l(s){const{legend:i,legendHint:m,inputs:p,testID:u="radio-group"}=s;return t.jsx(d,{legend:i,legendHint:m,components:p.map(c=>({component:t.jsx(g,{...c})})),testID:u})}l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{inputs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<RadioProps, "name"> & {
  name: RadioProps["name"];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<RadioBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"children"'}],raw:'Omit<RadioBaseProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InputAlertProps;
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
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}],required:!1}}]}}]},{name:"literal",value:'"name"'}],raw:'Omit<RadioProps, "name">'},{name:"signature",type:"object",raw:`{
  name: RadioProps["name"];
}`,signature:{properties:[{key:"name",value:{name:'intersection["name"]',raw:'RadioProps["name"]',required:!0}}]}}]}],raw:"RadioGroupInput[]"},description:""}}};const h={title:"Components/Inputs/RadioGroup",component:l,argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{legend:"Group title",inputs:[{name:"group",onChange:e(),labelProps:{label:"Bacon"}},{name:"group",onChange:e(),labelProps:{label:"Cheese"}},{name:"group",onChange:e(),labelProps:{label:"Onions"}},{name:"group",onChange:e(),labelProps:{label:"Lettuce"}},{name:"group",onChange:e(),labelProps:{label:"Tomato"}}]}},n={};var a,r,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const y=["Basic"],O=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{n as B,O as R};
