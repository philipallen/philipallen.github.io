import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as M}from"./index-Cnk2rnxF.js";import{r as K}from"./index-DH5ua8nC.js";import{p as U}from"./immer-VJu7bq0k.js";import{g as V}from"./index-BrtwDHqb.js";import{a as b,u,b as g}from"./index-CzvSJj6w.js";import{I as Y}from"./InputWrapper-C7of_464.js";import{I as J}from"./InlineAlert-D3r_vEqv.js";import{F as Q}from"./Fieldset-CXT2gyu-.js";import{C as X}from"./Checkbox-CqbyAip8.js";import{b as Z}from"./AlertAssociationProps-C5Idu2_l.js";const G=b.ul`
  ${()=>{const{tokens:n}=u(),{checkboxGroup:e}=n;return g`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${e.list.gap};
    `}}
`,ee=b(G)`
  ${()=>{const{tokens:n}=u(),{checkboxGroup:e}=n;return g`
      padding-left: ${e.nestedList.paddingLeft};
    `}}
`,ne=b.li`
  ${()=>{const{tokens:n}=u(),{checkboxGroup:e}=n;return g`
      all: unset;
      box-sizing: border-box;
      display: grid;
      gap: ${e.list.gap};
    `}}
`;function h(n){const{alertProps:e,legend:r,legendHint:l,legendTooltipProps:s,legendHintTooltipProps:d,inputs:m,onChange:L,testID:P="checkbox-group"}=n,{tokens:N}=u(),{checkboxGroup:S}=N,k=K.useId(),_=Z(k,n);function D(F){const H=U(m,$=>{const z=F.id;V.updateInputs($,z,"checked")});L(H)}return a.jsx(Y,{gap:S.gap,alert:e?a.jsx(J,{id:k,...e,testID:`${P}-alert`}):void 0,children:a.jsx(Q,{legend:r,legendHint:l,legendTooltipProps:s,legendHintTooltipProps:d,testID:P,ariaAlertAssociationProps:_,children:a.jsx(G,{children:j(m,D)})})})}function j(n,e){return n.map(({children:r,...l},s)=>{let d;return r&&r.length>0&&(d=r.map(m=>m.id).join(" ")),a.jsxs(ne,{children:[a.jsx(X,{...l,onChange:()=>e(l),"aria-controls":d}),r&&r.length>0&&a.jsx(ee,{children:j(r,e)})]},s)})}h.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputs: CheckboxGroupInput[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
> & {
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
> & {
  labelProps: Omit<InputLabelRightProps, "children">;
  alertProps?: InlineAlertProps;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className"> & {
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithRef<"input">'},{name:"union",raw:'"type" | "style" | "className"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:'Omit<ComponentPropsWithRef<"input">, "type" | "style" | "className">'},{name:"signature",type:"object",raw:`{
  hasError?: boolean;
  isIndeterminate?: boolean;
}`,signature:{properties:[{key:"hasError",value:{name:"boolean",required:!1}},{key:"isIndeterminate",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "aria-invalid"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"aria-invalid"'}]}],raw:`Omit<
  CheckboxBaseProps,
  "children" | "aria-invalid"
>`},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],required:!1}}]}}]},{name:"union",raw:'"alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"',elements:[{name:"literal",value:'"alertProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"checked"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"onChange"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  CheckboxProps,
  "alertProps" | "id" | "checked" | "disabled" | "onChange" | "children"
>`},{name:"signature",type:"object",raw:`{
  id: CheckboxProps["id"];
  checked: CheckboxProps["checked"];
  children?: CheckboxGroupInput[];
}`,signature:{properties:[{key:"id",value:{name:'intersection["id"]',raw:'CheckboxProps["id"]',required:!0}},{key:"checked",value:{name:'intersection["checked"]',raw:'CheckboxProps["checked"]',required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CheckboxGroupInput"}],raw:"CheckboxGroupInput[]",required:!1}}]}}]}],raw:"CheckboxGroupInput[]"},name:"inputs"}],return:{name:"void"}}},description:""}}};const{useArgs:re}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/Inputs/CheckboxGroup",component:h,render:function(e){const[,r]=re();function l(s){e.onChange(s),r({inputs:s})}return a.jsx(h,{...e,onChange:l})},argTypes:{legend:{control:"text"},legendHint:{control:"text"}},args:{onChange:M(),legend:"Group title",inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"}},{id:"2",checked:!1,labelProps:{label:"Cheese"}},{id:"3",checked:!1,labelProps:{label:"Onions"}},{id:"4",checked:!1,labelProps:{label:"Lettuce"}},{id:"5",checked:!1,labelProps:{label:"Tomato"}}]}},t={},o={...t,args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Bacon"},hasError:!0},{id:"2",checked:!1,labelProps:{label:"Cheese"},hasError:!0},{id:"3",checked:!1,labelProps:{label:"Onions"},hasError:!0},{id:"4",checked:!1,labelProps:{label:"Lettuce"},hasError:!0},{id:"5",checked:!1,labelProps:{label:"Tomato"},hasError:!0}],alertProps:{severity:"error",children:"Error description over two lines if required."}}},i={...t,args:{legend:"CheckboxGroup title",legendTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},c={...t,args:{legend:"CheckboxGroup title",legendHint:"Additional information",legendHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}},p={args:{inputs:[{id:"1",checked:!1,labelProps:{label:"Burger"},children:[{id:"1-1",checked:!1,labelProps:{label:"Bacon"}},{id:"1-2",checked:!1,labelProps:{label:"Cheese"}},{id:"1-3",checked:!1,labelProps:{label:"Onions"}},{id:"1-4",checked:!1,labelProps:{label:"Lettuce"}},{id:"1-5",checked:!1,labelProps:{label:"Tomato"}}]}]}};var y,v,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,x,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    inputs: [{
      id: "1",
      checked: false,
      labelProps: {
        label: "Bacon"
      },
      hasError: true
    }, {
      id: "2",
      checked: false,
      labelProps: {
        label: "Cheese"
      },
      hasError: true
    }, {
      id: "3",
      checked: false,
      labelProps: {
        label: "Onions"
      },
      hasError: true
    }, {
      id: "4",
      checked: false,
      labelProps: {
        label: "Lettuce"
      },
      hasError: true
    }, {
      id: "5",
      checked: false,
      labelProps: {
        label: "Tomato"
      },
      hasError: true
    }],
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var I,O,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup title",
    legendTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(A=(O=i.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var W,R,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Basic,
  args: {
    legend: "CheckboxGroup title",
    legendHint: "Additional information",
    legendHintTooltipProps: {
      iconButtonProps: {
        "aria-label": "Button label"
      },
      contentProps: {
        children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
      }
    }
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var T,B,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    inputs: [{
      id: "1",
      checked: false,
      labelProps: {
        label: "Burger"
      },
      children: [{
        id: "1-1",
        checked: false,
        labelProps: {
          label: "Bacon"
        }
      }, {
        id: "1-2",
        checked: false,
        labelProps: {
          label: "Cheese"
        }
      }, {
        id: "1-3",
        checked: false,
        labelProps: {
          label: "Onions"
        }
      }, {
        id: "1-4",
        checked: false,
        labelProps: {
          label: "Lettuce"
        }
      }, {
        id: "1-5",
        checked: false,
        labelProps: {
          label: "Tomato"
        }
      }]
    }]
  }
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const te=["Basic","WithError","WithLegend","WithLegendHint","Nested"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Nested:p,WithError:o,WithLegend:i,WithLegendHint:c,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{t as B,Pe as C,p as N,o as W,i as a,c as b};
