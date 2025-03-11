import{j as e}from"./jsx-runtime-DQ32znRX.js";import{f as H}from"./index-Cnk2rnxF.js";import{r as j}from"./index-DH5ua8nC.js";import{p as $}from"./immer-VJu7bq0k.js";import{$ as E}from"./RSPContexts-BdMZCg0Y.js";import{b as F}from"./Checkbox-BGx8Jbfn.js";import{a as M,u as N,b as z}from"./index-CzvSJj6w.js";import{g as K}from"./index-BrtwDHqb.js";import{C as D}from"./CheckboxGroupBaseV2-CawQN3pj.js";import{R as U}from"./ReactAriaProviders-xL7MqhIk.js";import{I as Y}from"./InputWrapper-C7of_464.js";import{I as J,a as Q}from"./InputLabelTopV2-CbvHZF4p.js";import{C as S}from"./CheckboxV2-E9AETJjF.js";const X=M(D)`
  ${()=>{const{tokens:o}=N(),{checkboxGroup:a}=o;return z`
      padding-left: ${a.nestedList.paddingLeft};
    `}}
`;function P(o){const{labelProps:a,alerts:r,inputs:t,onChange:s,testID:n="nested-checkbox-group",...b}=o,{tokens:A}=N(),{checkboxGroup:G}=A,_=t.filter(i=>i.isSelected).map(i=>i.value),g=i=>{const p=$(t,l=>{K.updateInputs(l,i.id,"isSelected")});s(p)};return e.jsx(U,{labelProps:a,alerts:r,children:({labelledBy:i,describedBy:p})=>e.jsx(J,{...a,children:e.jsx(Y,{gap:G.gap,alert:r&&e.jsx(Q,{alerts:r}),children:e.jsx(F.Provider,{value:{isDisabled:b.isDisabled,isInvalid:b.isInvalid},children:e.jsx(E.Provider,{value:{"aria-describedby":p},children:e.jsx(D,{...b,value:_,"aria-labelledby":i,"aria-describedby":p,"data-testid":n,children:t.map(l=>e.jsxs(j.Fragment,{children:[e.jsx(S,{...l,onChange:()=>{g(l)}}),l.children&&e.jsx(L,{input:l,handleChange:g,describedBy:p})]},l.id))})})})})})})}function L(o){const{input:a,handleChange:r,describedBy:t}=o;if(!a.children)return null;const s=a.children.filter(n=>n.isSelected).map(n=>n.value);return e.jsx(X,{value:s,"aria-label":a.labelProps.label,"aria-describedby":t,children:a.children.map(n=>e.jsxs(j.Fragment,{children:[e.jsx(S,{...n,onChange:()=>{r(n)}}),n.children&&e.jsx(L,{input:n,handleChange:r})]},n.id))})}P.__docgenInfo={description:"",methods:[],displayName:"NestedCheckboxGroup",props:{labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintTooltipProps?: TooltipProps;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className" | "children" | "aria-expanded"
>`},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}}]}}],raw:`PropsWithChildren<{
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintTooltipProps?: TooltipProps;
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelTopV2Props, "children">'},description:""},alerts:{required:!1,tsType:{name:"Array",raw:'InputAlertsProps["alerts"]'},description:""},inputs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<CheckboxV2Props, "onChange"> &
Required<
  Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">
> & {
  children?: Input[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<CheckboxPrimitiveProps, "children"> & {
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"CheckboxPrimitiveProps"},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxPrimitiveProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}],raw:`PropsWithChildren<{
  label?: string;
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightV2Props, "children">',required:!1}}]}}]},{name:"literal",value:'"onChange"'}],raw:'Omit<CheckboxV2Props, "onChange">'},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<CheckboxPrimitiveProps, "children"> & {
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"CheckboxPrimitiveProps"},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxPrimitiveProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}],raw:`PropsWithChildren<{
  label?: string;
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightV2Props, "children">',required:!1}}]}}]},{name:"union",raw:'"labelProps" | "id" | "value" | "isSelected"',elements:[{name:"literal",value:'"labelProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"value"'},{name:"literal",value:'"isSelected"'}]}],raw:'Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">'}],raw:`Required<
  Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">
>`},{name:"signature",type:"object",raw:`{
  children?: Input[];
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"Input"}],raw:"Input[]",required:!1}}]}}]}],raw:"Input[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputs: Input[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`Omit<CheckboxV2Props, "onChange"> &
Required<
  Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">
> & {
  children?: Input[];
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<CheckboxPrimitiveProps, "children"> & {
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"CheckboxPrimitiveProps"},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxPrimitiveProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}],raw:`PropsWithChildren<{
  label?: string;
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightV2Props, "children">',required:!1}}]}}]},{name:"literal",value:'"onChange"'}],raw:'Omit<CheckboxV2Props, "onChange">'},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<CheckboxPrimitiveProps, "children"> & {
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"CheckboxPrimitiveProps"},{name:"literal",value:'"children"'}],raw:'Omit<CheckboxPrimitiveProps, "children">'},{name:"signature",type:"object",raw:`{
  labelProps?: Omit<InputLabelRightV2Props, "children">;
}`,signature:{properties:[{key:"labelProps",value:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}}]}}],raw:`PropsWithChildren<{
  label?: string;
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelRightV2Props, "children">',required:!1}}]}}]},{name:"union",raw:'"labelProps" | "id" | "value" | "isSelected"',elements:[{name:"literal",value:'"labelProps"'},{name:"literal",value:'"id"'},{name:"literal",value:'"value"'},{name:"literal",value:'"isSelected"'}]}],raw:'Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">'}],raw:`Required<
  Pick<CheckboxV2Props, "labelProps" | "id" | "value" | "isSelected">
>`},{name:"signature",type:"object",raw:`{
  children?: Input[];
}`,signature:{properties:[{key:"children",value:{name:"Array",elements:[{name:"Input"}],raw:"Input[]",required:!1}}]}}]}],raw:"Input[]"},name:"inputs"}],return:{name:"void"}}},description:""}}};const{useArgs:Z}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Components/Inputs/NestedCheckboxGroup",component:P,render:function(a){const[,r]=Z();function t(s){a.onChange(s),r({inputs:s})}return e.jsx(P,{...a,onChange:t})},argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"}},args:{inputs:[{id:"1",value:"burger",isSelected:!1,labelProps:{label:"Burger"},children:[{id:"1-1",value:"bacon",isSelected:!1,labelProps:{label:"Bacon"}},{id:"1-2",value:"cheese",isSelected:!1,labelProps:{label:"Cheese"}},{id:"1-3",value:"onions",isSelected:!1,labelProps:{label:"Onions"}},{id:"1-4",value:"lettuce",isSelected:!1,labelProps:{label:"Lettuce"}},{id:"1-5",value:"tomato",isSelected:!1,labelProps:{label:"Tomato"}}]}],isDisabled:!1,isInvalid:!1,onChange:H()}},m={args:{"aria-label":"NestedCheckboxGroup label"}},u={args:{labelProps:{label:"NestedCheckboxGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={args:{labelProps:{label:"NestedCheckboxGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{isDisabled:!0,labelProps:{label:"NestedCheckboxGroup label"}}},h={args:{isInvalid:!0,labelProps:{label:"NestedCheckboxGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var y,v,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "NestedCheckboxGroup label"
  }
}`,...(C=(v=m.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,I,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NestedCheckboxGroup label",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var f,x,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "NestedCheckboxGroup label",
      labelHint: "Additional information",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var T,V,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "NestedCheckboxGroup label"
    }
  }
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var B,W,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "NestedCheckboxGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(q=(W=h.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const ae=["Basic","WithLabel","WithLabelHint","Disabled","Invalid"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:m,Disabled:d,Invalid:h,WithLabel:u,WithLabelHint:c,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{m as B,d as D,h as I,be as N,u as W,c as a};
