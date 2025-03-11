import{f as M}from"./index-Cnk2rnxF.js";import{m as X}from"./index-BrtwDHqb.js";import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as f}from"./index-DH5ua8nC.js";import{a as s,u as p,p as c,b as u}from"./index-CzvSJj6w.js";import{T as L}from"./Typography-RMDmhaRB.js";import{I as Z}from"./InputLabelTop-C-3-u6fK.js";const v="0.4s",l=s.div`
  ${({$toggleSize:n})=>{const{tokens:a}=p(),{toggle:e}=a,t=c(e.size[n].width),o=c(e.size[n].height);return u`
      position: relative;
      width: ${t};
      height: ${o};
      display: flex;
      align-items: center;
      border-radius: ${o};

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
`,G=s.input`
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
`,J=s.div`
  ${({$toggleSize:n})=>{const{tokens:a}=p(),{toggle:e}=a,t=c(e.size[n].width);return[u`
        position: relative;
        width: ${e.thumb.size[n]};
        height: ${e.thumb.size[n]};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[n]};
        margin: ${e.thumb.padding};
        transition: transform ${v};
        ${l}:has(input:checked) && {
          transform: translateX(
            calc(
              ${t} - ${e.thumb.padding} - ${e.thumb.padding} -
                100%
            )
          );
        }

        ${l}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,F=n=>{const{tokens:a}=p(),{toggle:e}=a;return`${parseInt(e.thumb.size[n])+parseInt(e.thumb.padding)*3}px`},K=s(L)`
  ${({$toggleSize:n})=>{const a=F(n),{tokens:e}=p(),{toggle:t}=e;return[u`
        position: absolute;
        width: 100%;
        color: ${t.text.color.base};
        text-align: right;
        padding-right: ${a};
        transition: opacity ${v};

        ${l}:has(input:disabled) && {
          color: ${t.text.color.disabled};
        }

        ${l}:has(input:checked) && {
          opacity: 1;
        }

        ${l}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,Q=s(L)`
  ${({$toggleSize:n})=>{const a=F(n),{tokens:e}=p(),{toggle:t}=e;return[u`
        position: absolute;
        width: 100%;
        color: ${t.text.color.base};
        padding-left: ${a};
        transition: opacity ${v};

        ${l}:has(input:disabled) && {
          color: ${t.text.color.disabled};
        }

        ${l}:has(input:checked) && {
          opacity: 0;
        }

        ${l}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,Y=s.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,ee=s.div`
  ${({$toggleSize:n})=>{const{tokens:{toggle:a}}=p(),e=c(a.size[n].width),t=c(a.size[n].height);return u`
      cursor: pointer;
      width: ${e};

      outline-style: solid;
      border-radius: ${t};
      outline-offset: 0;
      outline-width: 0;

      &:has(input:disabled) {
        cursor: not-allowed;
      }

      &:has(input:not(:disabled)):hover {
        outline-color: ${a.focusRing.color};
        outline-width: ${a.focusRing.width};
        outline-offset: ${a.focusRing.offset};
      }

      &:has(input:focus) {
        outline-color: ${a.focusRing.color};
        outline-width: ${a.focusRing.width};
        outline-offset: ${a.focusRing.offset};
      }
    `}}
`,ae=s.div`
  ${({$toggleSize:n})=>{const{tokens:{toggle:a}}=p(),e=c(a.size[n].width);return u`
      width: ${e};
      background-color: transparent;
    `}}
`;function A(n){const{children:a,toggleSize:e}=n;return r.jsx(ee,{$toggleSize:e,children:r.jsx(ae,{$toggleSize:e,children:a})})}A.__docgenInfo={description:"",methods:[],displayName:"ToggleWrapper",props:{toggleSize:{required:!0,tsType:{name:"CoreToggle.Size"},description:""}}};function _(n){const{id:a,labelProps:e,testID:t="toggle",toggleSize:o="default",...E}=n,P=f.useId(),T=f.useId(),{labelHint:U}=e,{tokens:{toggle:y}}=p();return r.jsx(Z,{...e,labelHintID:T,htmlFor:a||P,children:r.jsx(A,{toggleSize:o,children:r.jsxs(l,{$toggleSize:o,children:[r.jsx(G,{...E,id:a||P,role:"switch",type:"checkbox","aria-describedby":U?T:void 0,"data-testid":t}),r.jsxs(Y,{children:[r.jsx(K,{"aria-hidden":!0,$toggleSize:o,component:"span",variant:y.text.size[o].typography.variant,fontFamily:y.text.size[o].typography.fontFamily,children:"On"}),r.jsx(Q,{"aria-hidden":!0,$toggleSize:o,component:"span",variant:y.text.size[o].typography.variant,fontFamily:y.text.size[o].typography.fontFamily,children:"Off"})]}),r.jsx(J,{$toggleSize:o})]})})})}_.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:'Omit<InputLabelTopTooltipProps, "otherIconButtonProps">',required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<\r
  InputLabelTopProps,\r
  "htmlFor" | "labelHintID" | "children"\r
>`},description:""},toggleSize:{required:!1,tsType:{name:"CoreToggle.Size"},description:""}}};const ne={title:"Components/Inputs/Toggle",component:_,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:X.SIZES}},args:{onChange:M()}},i={args:{labelProps:{"aria-label":"Labelled Toggle"}}},m={...i,args:{disabled:!0,checked:!0,labelProps:{"aria-label":"Labelled Toggle"}}},d={...i,args:{disabled:!0,checked:!1,labelProps:{"aria-label":"Labelled Toggle"}}},g={...i,args:{toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},h={...i,args:{labelProps:{label:"Label for Toggle",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={...i,args:{labelProps:{label:"Label for Toggle",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}};var k,I,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,V,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(R=(V=m.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var x,B,$;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...($=(B=d.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var O,W,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(N=(W=g.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var q,j,z;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(j=h.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var S,D,H;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(D=b.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const te=["Basic","DisabledChecked","DisabledUnchecked","Small","WithLabel","WithHint"],ue=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,DisabledChecked:m,DisabledUnchecked:d,Small:g,WithHint:b,WithLabel:h,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{i as B,m as D,g as S,ue as T,h as W,d as a,b};
