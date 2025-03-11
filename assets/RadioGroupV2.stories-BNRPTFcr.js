import{j as a}from"./jsx-runtime-DQ32znRX.js";import{f as N}from"./index-Cnk2rnxF.js";import{a as D,b as G,$ as A}from"./RadioGroup-Cb3_cV61.js";import{a as h,u as c,b}from"./index-CzvSJj6w.js";import{R as H}from"./ReactAriaProviders-xL7MqhIk.js";import{I as L}from"./InputWrapper-C7of_464.js";import{I as _,a as S}from"./InputLabelTopV2-CysXC_Fl.js";import{r as E}from"./index-DH5ua8nC.js";import{I as z}from"./InputLabelRightV2-CeAo3NfK.js";const F=h(D)`
  ${()=>{const{tokens:n}=c(),{radioGroup:e}=n;return b`
      display: grid;
      gap: ${e.list.gap};
    `}}
`;function W(n){const{labelProps:e,alerts:r,testID:u="radio-group",...d}=n,{tokens:m}=c(),{radioGroup:$}=m;return a.jsx(H,{labelProps:e,alerts:r,children:({labelledBy:q,describedBy:y})=>a.jsx(_,{...e,children:a.jsx(L,{gap:$.gap,alert:r&&a.jsx(S,{alerts:r}),children:a.jsx(G.Provider,{value:{"aria-describedby":y},children:a.jsx(F,{...d,"aria-labelledby":q,"aria-describedby":y,"data-testid":u})})})})})}W.__docgenInfo={description:"",methods:[],displayName:"RadioGroupV2",props:{labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"literal",value:'"children"'}],raw:'Omit<InputLabelTopV2Props, "children">'},description:""},alerts:{required:!1,tsType:{name:"Array",raw:'InputAlertsProps["alerts"]'},description:""}}};const M=h.div`
  ${()=>{const{tokens:n}=c(),{radio:e}=n;return b`
      position: relative;
      display: grid;
      place-items: center;
      width: ${e.width};
      height: ${e.height};
      background: ${e.backgroundColor.base};
      border-radius: 100%;
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style.base};
      outline-color: ${e.stroke.color.base};
      outline-offset: -1px;
      cursor: pointer;

      label[data-invalid] && {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
      }

      label[data-hovered] && {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
      }

      label[data-disabled] && {
        outline-width: ${e.stroke.width.disabled};
        outline-color: ${e.stroke.color.disabled};
        cursor: not-allowed;
      }
    `}}
`,J=h.div`
  ${()=>{const{tokens:n}=c(),{radio:e}=n;return[b`
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        label[data-hovered] && {
          background: ${e.icon.color.hover};
        }

        label[data-disabled] && {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,t=E.forwardRef((n,e)=>{const{labelProps:r,testID:u="radio",...d}=n;return a.jsx(A,{...d,ref:e,"data-testid":u,children:({isSelected:m})=>a.jsx(z,{...r,children:a.jsx(M,{children:m&&a.jsx(J,{"data-testid":`${u}-selected-icon`})})})})});t.displayName="RadioV2";t.__docgenInfo={description:"",methods:[],displayName:"RadioV2"};const K={title:"Components/Inputs/RadioGroupV2",component:W,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:a.jsxs(a.Fragment,{children:[a.jsx(t,{labelProps:{label:"Bacon"},value:"bacon"}),a.jsx(t,{labelProps:{label:"Cheese"},value:"cheese"}),a.jsx(t,{labelProps:{label:"Onions"},value:"onions"}),a.jsx(t,{labelProps:{label:"Lettuce"},value:"lettuce"}),a.jsx(t,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:N()}},o={args:{"aria-label":"RadioGroup label"}},i={args:{labelProps:{label:"RadioGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},l={args:{labelProps:{label:"RadioGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},s={args:{isDisabled:!0,labelProps:{label:"RadioGroup label"}}},p={args:{isInvalid:!0,labelProps:{label:"RadioGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var g,v,P;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "aria-label": "RadioGroup label"
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var I,T,f;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var w,R,V;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var k,C,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "RadioGroup label"
    }
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var x,O,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "RadioGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Q=["Basic","WithLabel","WithLabelHint","Disabled","Invalid"],oe=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,Disabled:s,Invalid:p,WithLabel:i,WithLabelHint:l,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{o as B,s as D,p as I,oe as R,i as W,l as a};
