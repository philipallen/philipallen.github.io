import{f as R}from"./index-Cnk2rnxF.js";import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as I}from"./index-DH5ua8nC.js";import{u as C}from"./index-CtBUti8q.js";import{b as W,I as q}from"./AlertAssociationProps-x_hs0fx1.js";import{I as T}from"./InlineAlert-uKr_Jbz9.js";import{F as A}from"./Fieldset-BYDjfDFG.js";import{R as j}from"./Radio-7zUOngsH.js";function d(n){const{alertProps:t,legend:v,legendHint:g,name:b,inputs:h,onChange:P,testID:l="radio-group"}=n,{tokens:y}=C(),{radioGroup:f}=y,s=I.useId(),O=W(s,n);return a.jsx(q,{gap:f.gap,alert:t?a.jsx(T,{id:s,...t,testID:`${l}-alert`}):void 0,children:a.jsx(A,{legend:v,legendHint:g,components:h.map(w=>({component:a.jsx(j,{...w,name:b,onChange:P})})),testID:l,ariaAlertAssociationProps:O})})}d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<RadioBaseProps, "children"> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"input">,
  "type" | "style" | "className" | "aria-errormessage" | "aria-invalid"
> & {
  hasError?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className" | "aria-errormessage" | "aria-invalid"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"aria-errormessage"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  ComponentPropsWithRef<"input">,
  "type" | "style" | "className" | "aria-errormessage" | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
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
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "name" | "onChange"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"name"'},{name:"literal",value:'"onChange"'}]}],raw:'Omit<RadioProps, "alertProps" | "name" | "onChange">'}],raw:"RadioGroupInput[]"},description:""},onChange:{required:!1,tsType:{name:'intersection["onChange"]',raw:'RadioProps["onChange"]'},description:""}}};const k={title:"Components/Inputs/RadioGroup",component:d,argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{legend:"Group title",name:"group",inputs:[{value:"bacon",labelProps:{label:"Bacon"}},{value:"cheese",labelProps:{label:"Cheese"}},{value:"onions",labelProps:{label:"Onions"}},{value:"lettuce",labelProps:{label:"Lettuce"}},{value:"tomato",labelProps:{label:"Tomato"}}],onChange:R()}},e={},r={...e,args:{inputs:[{value:"bacon",labelProps:{label:"Bacon"},hasError:!0},{value:"cheese",labelProps:{label:"Cheese"}},{value:"onions",labelProps:{label:"Onions"}},{value:"lettuce",labelProps:{label:"Lettuce"}},{value:"tomato",labelProps:{label:"Tomato"}}],alertProps:{severity:"error",children:"Error description over two lines if required."}}};var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Basic,
  args: {
    inputs: [{
      value: "bacon",
      labelProps: {
        label: "Bacon"
      },
      hasError: true
    }, {
      value: "cheese",
      labelProps: {
        label: "Cheese"
      }
    }, {
      value: "onions",
      labelProps: {
        label: "Onions"
      }
    }, {
      value: "lettuce",
      labelProps: {
        label: "Lettuce"
      }
    }, {
      value: "tomato",
      labelProps: {
        label: "Tomato"
      }
    }],
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const E=["Basic","WithError"],L=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,WithError:r,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{e as B,L as R,r as W};
