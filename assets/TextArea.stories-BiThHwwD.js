import{f as ge}from"./index-Cnk2rnxF.js";import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as i}from"./index-DH5ua8nC.js";import{i as ve}from"./index-BrtwDHqb.js";import{i as Pe}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import{a as re,u as ne,b as f,p as A}from"./index-CzvSJj6w.js";import{I as fe}from"./InputLabelTop-D1rAIOKb.js";import{I as Te}from"./InputWrapper-C7of_464.js";import{I as we}from"./InlineAlert-D3r_vEqv.js";import{O as xe}from"./OuterField-l9eRKZdu.js";import{C as Ie}from"./CharactersCounter-OqJnolXU.js";import{b as Ce}from"./AlertAssociationProps-C5Idu2_l.js";const ke=re.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:o})=>{const{tokens:e}=ne(),{textArea:a,outerField:r}=e;return f`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${a.innerShadow.height};
        pointer-events: none;
        opacity: ${a.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px ${a.innerShadow.color} inset;
        border-radius: ${r.radius} ${r.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px ${a.innerShadow.color} inset;
        border-radius: 0 0 ${r.radius} ${r.radius};
      }

      ${()=>(o==="TOP"||o==="BOTH")&&f`
          &::before {
            opacity: ${a.innerShadow.opacity.active};
          }
        `}

      ${()=>(o==="BOTTOM"||o==="BOTH")&&f`
        &::after {
          opacity: ${a.innerShadow.opacity.active};
      `}
    `}}
`,Be=re(Pe)`
  ${()=>{const{tokens:o}=ne(),{textArea:e,typography:a,scrollBar:r,outerField:T}=o,l=e.typography.variant,p=A(a.fontSize[l]),u=A(a.lineHeight[l]);return f`
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
      font-family: ${a.fontFamily[l]};
      font-size: ${p};
      line-height: ${u};

      &:read-only {
        color: ${e.color.readOnly};
      }
      &:disabled {
        color: ${e.color.disabled};
      }

      scrollbar-color: ${r.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${r.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${r.thumbColor};
          border-radius: ${r.radius};
          border: 3.5px solid ${T.backgroundColor};
        }
      }
    `}}
`;function te(o){var R;const{id:e,hasError:a,autoGrow:r,autoGrowMaxLines:T,onChange:l,onScroll:p,testID:u="textarea",labelProps:w,alertProps:x,noCounter:oe,...P}=o,c=i.useRef(null),I=i.useId(),C=i.useId(),k=i.useId(),{labelHint:ie}=w,{maxLength:B}=P,V=!oe&&B,le=Ce(k,o,ie?C:void 0),[se,pe]=i.useState(((R=P.value||P.defaultValue)==null?void 0:R.length)||0),[ue,ce]=i.useState(null),O=()=>{const t=c.current;if(t){const{scrollTop:he,scrollHeight:ye,offsetHeight:be}=t;ce(ve.determineInnerShadowToDisplay(he,ye,be))}},me=i.useCallback(t=>{O(),p==null||p(t)},[p]),de=i.useCallback(t=>{pe(t.target.value.length),l==null||l(t)},[l]);return i.useEffect(()=>{if(c.current){const t=new ResizeObserver(O);return t.observe(c.current),()=>t.disconnect()}},[c.current]),s.jsxs(Te,{gap:V?"4px":"8px",alert:x?s.jsx(we,{id:k,...x,testID:`${u}-alert`}):void 0,children:[s.jsx(fe,{...w,labelHintID:C,htmlFor:e||I,children:s.jsx(xe,{hasError:a,children:s.jsx(ke,{$displayInnerShadow:ue,children:s.jsx(Be,{...P,...le,ref:c,id:e||I,onChange:de,onScroll:me,maxRows:r?T||1/0:4,"data-testid":u})})})}),V?s.jsx(Ie,{length:se,maxLength:B,testID:`${u}-characters-counter`}):void 0]})}te.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},autoGrow:{required:!1,tsType:{name:"boolean"},description:""},autoGrowMaxLines:{required:!1,tsType:{name:"number"},description:""},noCounter:{required:!1,tsType:{name:"boolean"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
  htmlFor: string;
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: TooltipProps;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelTooltipProps?: TooltipProps;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: TooltipProps;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const Ve={title:"Components/Inputs/TextArea",component:te,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{onChange:ge(),autoGrow:!1,hasError:!1,readOnly:!1}},n={args:{labelProps:{"aria-label":"TextArea"}}},m={...n,args:{labelProps:{label:"Label for TextArea"},autoGrow:!0,autoGrowMaxLines:10}},d={...n,args:{labelProps:{label:"Label for TextArea",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={...n,args:{labelProps:{label:"Label for TextArea",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},y={args:{maxLength:15,labelProps:{label:"Label for TextArea"}}},b={...n,args:{hasError:!0,labelProps:{label:"Label for TextArea"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},g={...n,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}},v={...n,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}};var W,q,L;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(L=(q=n.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var S,H,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var N,$,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=($=d.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var F,E,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(E=h.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var _,z,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Oe=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],Ge=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:m,Basic:n,Disabled:g,ReadOnly:v,WithError:b,WithHint:h,WithLabel:d,WithLimit:y,__namedExportsOrder:Oe,default:Ve},Symbol.toStringTag,{value:"Module"}));export{m as A,n as B,g as D,v as R,Ge as T,d as W,h as a,y as b,b as c};
