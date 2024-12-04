import{f as X}from"./index-Cnk2rnxF.js";import{k as U}from"./index-DKJt7waT.js";import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as k}from"./index-DH5ua8nC.js";import{a as s,u as p,p as c,b as u}from"./index-CtBUti8q.js";import{T as L}from"./Typography-v4_88_aK.js";import{I as J}from"./InputLabelTop-CsiLVEXO.js";const P="0.4s",i=s.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p(),t=c(e.size[a].width),n=c(e.size[a].height);return u`
      position: relative;
      width: ${t};
      height: ${n};
      display: flex;
      align-items: center;
      border-radius: ${n};

      &:hover:has(input:not(:checked)) {
        background-color: ${e.backgroundColor.unchecked.hover};
      }

      &:hover:has(input:checked) {
        background-color: ${e.backgroundColor.checked.hover};
      }

      &:has(input:not(:checked)) {
        background-color: ${e.backgroundColor.unchecked.base};
      }

      &:has(input:checked) {
        background-color: ${e.backgroundColor.checked.base};
      }

      &:has(input:disabled:checked) {
        background-color: ${e.backgroundColor.checked.disabled};
      }

      &:has(input:disabled:not(:checked)) {
        background-color: ${e.backgroundColor.unchecked.disabled};
      }
    `}}
`,M=s.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,Z=s.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p(),t=c(e.size[a].width),n=e.thumb.size[a].margin;return[u`
        position: relative;
        width: ${e.thumb.size[a].width};
        height: ${e.thumb.size[a].height};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[a].height};
        margin: ${n};
        transition: transform ${P};
        ${i}:has(input:checked) && {
          transform: translateX(calc(${t} - ${n} - ${n} - 100%));
        }

        ${i}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,G=s(L)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p();return[u`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[a].padding};
        transition: opacity ${P};

        ${i}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${i}:has(input:checked) && {
          opacity: 1;
        }

        ${i}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,K=s(L)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p();return[u`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[a].padding};
        transition: opacity ${P};

        ${i}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${i}:has(input:checked) && {
          opacity: 0;
        }

        ${i}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,Q=s.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,Y=s.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p(),t=c(e.size[a].width),n=c(e.size[a].height);return u`
      cursor: pointer;
      width: ${t};

      outline-style: solid;
      border-radius: ${n};
      outline-offset: 0;
      outline-width: 0;

      &:has(input:disabled) {
        cursor: not-allowed;
      }

      &:has(input:not(:disabled)):hover {
        outline-color: ${e.focusRing.color};
        outline-width: ${e.focusRing.width};
        outline-offset: ${e.focusRing.offset};
      }

      &:has(input:focus) {
        outline-color: ${e.focusRing.color};
        outline-width: ${e.focusRing.width};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,ee=s.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=p(),t=c(e.size[a].width);return u`
      width: ${t};
      background-color: transparent;
    `}}
`;function F(a){const{children:e,toggleSize:t}=a;return r.jsx(Y,{$toggleSize:t,children:r.jsx(ee,{$toggleSize:t,children:e})})}F.__docgenInfo={description:"",methods:[],displayName:"ToggleWrapper",props:{toggleSize:{required:!0,tsType:{name:"CoreToggle.Size"},description:""}}};function A(a){const{id:e,labelProps:t,testID:n="toggle",toggleSize:l="default",..._}=a,v=k.useId(),T=k.useId(),{labelHint:E}=t,{tokens:{toggle:y}}=p();return r.jsx(J,{...t,labelHintID:T,htmlFor:e||v,children:r.jsx(F,{toggleSize:l,children:r.jsxs(i,{$toggleSize:l,children:[r.jsx(M,{..._,id:e||v,role:"switch",type:"checkbox","aria-describedby":E?T:void 0,"data-testid":n}),r.jsxs(Q,{children:[r.jsx(G,{"aria-hidden":!0,$toggleSize:l,variant:y.text.size[l].typography.variant,fontFamily:y.text.size[l].typography.fontFamily,children:"On"}),r.jsx(K,{"aria-hidden":!0,$toggleSize:l,variant:y.text.size[l].typography.variant,fontFamily:y.text.size[l].typography.fontFamily,children:"Off"})]}),r.jsx(Z,{$toggleSize:l})]})})})}A.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<\r
  InputLabelTopProps,\r
  "htmlFor" | "labelHintID" | "children"\r
>`},description:""},toggleSize:{required:!1,tsType:{name:"CoreToggle.Size"},description:""}}};const ae={title:"Components/Inputs/Toggle",component:A,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:U.SIZES}},args:{onChange:X()}},o={args:{labelProps:{"aria-label":"Labelled Toggle"}}},m={...o,args:{disabled:!0,checked:!0,labelProps:{"aria-label":"Labelled Toggle"}}},d={...o,args:{disabled:!0,checked:!1,labelProps:{"aria-label":"Labelled Toggle"}}},h={...o,args:{toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},g={...o,args:{labelProps:{label:"Label for Toggle",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={...o,args:{labelProps:{label:"Label for Toggle",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}};var f,I,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,B,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(x=(B=m.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var V,R,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...($=(R=d.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var O,W,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,q,j;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for Toggle",
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
}`,...(j=(q=g.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var z,D,S;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for Toggle",
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
}`,...(S=(D=b.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const te=["Basic","DisabledChecked","DisabledUnchecked","Small","WithLabel","WithHint"],ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,DisabledChecked:m,DisabledUnchecked:d,Small:h,WithHint:b,WithLabel:g,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{o as B,m as D,h as S,ce as T,g as W,d as a,b};
