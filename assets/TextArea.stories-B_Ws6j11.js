import{f as he}from"./index-Cnk2rnxF.js";import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{h as ye}from"./index-DKJt7waT.js";import{i as ge}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import{a as I,b as T,u as te,p as A}from"./index-CtBUti8q.js";import{I as Pe}from"./InputLabelTop-CsiLVEXO.js";import{b as ve,I as Te}from"./AlertAssociationProps-x_hs0fx1.js";import{I as fe}from"./InlineAlert-uKr_Jbz9.js";import{O as Ie,C as we}from"./CharactersCounter-Bucftjo_.js";const xe=I(Pe)`
  ${()=>T`
      width: 100%;
    `}
`,Be=I.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:o})=>{const{tokens:e}=te(),{textArea:n,outerField:a}=e;return T`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${n.innerShadow.height};
        pointer-events: none;
        opacity: ${n.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px inset;
        border-radius: ${a.radius} ${a.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 ${a.radius} ${a.radius};
      }

      ${()=>(o==="TOP"||o==="BOTH")&&T`
          &::before {
            opacity: ${n.innerShadow.opacity.active};
          }
        `}

      ${()=>(o==="BOTTOM"||o==="BOTH")&&T`
        &::after {
          opacity: ${n.innerShadow.opacity.active};
      `}
    `}}
`,Ce=I(ge)`
  ${()=>{const{tokens:o}=te(),{textArea:e,typography:n,scrollBar:a,outerField:f}=o,i=e.typography.variant,p=A(n.fontSize[i]),u=A(n.lineHeight[i]);return T`
      all: unset;
      white-space: pre-wrap;
      word-wrap: break-word;

      width: 100%;
      resize: none;
      min-height: ${e.minHeight};
      height: 100%;
      padding: calc(${e.paddingVertical} - 2px)
        calc(${e.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${e.color.base};
      font-family: ${n.fontFamily[i]};
      font-size: ${p};
      line-height: ${u};

      &:read-only {
        color: ${e.color.readOnly};
      }
      &:disabled {
        color: ${e.color.disabled};
      }

      scrollbar-color: ${a.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${a.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${a.thumbColor};
          border-radius: ${a.radius};
          border: 3.5px solid ${f.backgroundColor};
        }
      }
    `}}
`;function ne(o){var R;const{id:e,hasError:n,autoGrow:a,autoGrowMaxLines:f,onChange:i,onScroll:p,testID:u="textarea",labelProps:w,alertProps:x,...m}=o,c=l.useRef(null),B=l.useId(),C=l.useId(),k=l.useId(),{labelHint:re}=w,{maxLength:O}=m,oe=ve(k,o,re?C:void 0),[le,ie]=l.useState(((R=m.value||m.defaultValue)==null?void 0:R.length)||0),[se,pe]=l.useState(null),V=()=>{const r=c.current;if(r){const{scrollTop:ce,scrollHeight:de,offsetHeight:be}=r;pe(ye.determineInnerShadowToDisplay(ce,de,be))}},ue=l.useCallback(r=>{V(),p==null||p(r)},[p]),me=l.useCallback(r=>{ie(r.target.value.length),i==null||i(r)},[i]);return l.useEffect(()=>{if(c.current){const r=new ResizeObserver(V);return r.observe(c.current),()=>r.disconnect()}},[c.current]),s.jsxs(Te,{gap:m.maxLength?"4px":"8px",alert:x?s.jsx(fe,{id:k,...x,testID:`${u}-alert`}):void 0,children:[s.jsx(xe,{...w,labelHintID:C,htmlFor:e||B,children:s.jsx(Ie,{hasError:n,children:s.jsx(Be,{$displayInnerShadow:se,children:s.jsx(Ce,{...m,...oe,ref:c,id:e||B,onChange:me,onScroll:ue,maxRows:a?f||1/0:4,"data-testid":u})})})}),O?s.jsx(we,{length:le,maxLength:O,testID:`${u}-characters-counter`}):void 0]})}ne.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},autoGrow:{required:!1,tsType:{name:"boolean"},description:""},autoGrowMaxLines:{required:!1,tsType:{name:"number"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
  id?: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
} & Pick<
    InputLabelTopBaseProps,
    "labelHint" | "labelHintID" | "labelHintTooltipProps"
  > & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
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
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded"> & {
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children" | "aria-expanded"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'},{name:"literal",value:'"aria-expanded"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children" | "aria-expanded">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID" | "labelHintTooltipProps"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"labelHintTooltipProps"'}]}],raw:`Pick<
  InputLabelTopBaseProps,
  "labelHint" | "labelHintID" | "labelHintTooltipProps"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const ke={title:"Components/Inputs/TextArea",component:ne,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{onChange:he(),autoGrow:!1,hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextArea"}}},d={...t,args:{labelProps:{label:"Label for TextArea"},autoGrow:!0,autoGrowMaxLines:10}},b={...t,args:{labelProps:{label:"Label for TextArea",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={...t,args:{labelProps:{label:"Label for TextArea",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},y={args:{maxLength:15,labelProps:{label:"Label for TextArea"}}},g={...t,args:{hasError:!0,labelProps:{label:"Label for TextArea"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},P={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}},v={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}};var W,H,L;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(L=(H=t.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var q,S,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,j,$;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea",
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
}`,...($=(j=b.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var E,F,G;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea",
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
}`,...(G=(F=h.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var _,z,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var J,X,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Label for TextArea"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(K=(X=g.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,U,Y;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(Y=(U=P.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Oe=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],$e=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:d,Basic:t,Disabled:P,ReadOnly:v,WithError:g,WithHint:h,WithLabel:b,WithLimit:y,__namedExportsOrder:Oe,default:ke},Symbol.toStringTag,{value:"Module"}));export{d as A,t as B,P as D,v as R,$e as T,b as W,h as a,y as b,g as c};
