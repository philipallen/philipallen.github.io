import{f as ae}from"./index-Cnk2rnxF.js";import{e as k}from"./index-BkD9k7wm.js";import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as w}from"./index-DH5ua8nC.js";import{a as i,u as c,p as d,b as g}from"./index-BSpjoQIR.js";import{T as Z}from"./Typography-Dx-yaUty.js";import{I as te}from"./InputLabelTop-Ccr_VeeL.js";const x="0.4s",s=i.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c(),t=d(e.size[a].width),l=d(e.size[a].height);return g`
      position: relative;
      width: ${t};
      height: ${l};
      display: flex;
      align-items: center;
      border-radius: ${l};

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
`,oe=i.input`
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
`,le=i.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c(),t=d(e.size[a].width),l=e.thumb.size[a].margin;return[g`
        position: relative;
        width: ${e.thumb.size[a].width};
        height: ${e.thumb.size[a].height};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[a].height};
        margin: ${l};
        transition: transform ${x};
        ${s}:has(input:checked) && {
          transform: translateX(calc(${t} - ${l} - ${l} - 100%));
        }

        ${s}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,ne=i(Z)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[a].padding};
        transition: opacity ${x};

        ${s}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${s}:has(input:checked) && {
          opacity: 1;
        }

        ${s}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,re=i(Z)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[a].padding};
        transition: opacity ${x};

        ${s}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${s}:has(input:checked) && {
          opacity: 0;
        }

        ${s}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,se=i.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,ie=i.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c(),t=d(e.size[a].width),l=d(e.size[a].height);return g`
      cursor: pointer;
      width: ${t};

      outline-style: solid;
      border-radius: ${l};
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
`,ce=i.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c(),t=d(e.size[a].width);return g`
      width: ${t};
      background-color: transparent;
    `}}
`;function G(a){const{children:e,toggleSize:t}=a;return n.jsx(ie,{$toggleSize:t,children:n.jsx(ce,{$toggleSize:t,children:e})})}G.__docgenInfo={description:"",methods:[],displayName:"ToggleWrapper",props:{toggleSize:{required:!0,tsType:{name:"CoreToggle.Size"},description:""}}};function K(a){const{id:e,labelProps:t,testID:l="toggle",textValueType:$="on-off",toggleSize:r="default",...Q}=a,S=w.useId(),P=w.useId(),{labelHint:ee}=t,{tokens:{toggle:y}}=c();return n.jsx(te,{...t,labelHintID:P,htmlFor:e||S,children:n.jsx(G,{toggleSize:r,children:n.jsxs(s,{$toggleSize:r,children:[n.jsx(oe,{...Q,id:e||S,role:"switch",type:"checkbox","aria-describedby":ee?P:void 0,"data-testid":l}),n.jsxs(se,{children:[n.jsx(ne,{"aria-hidden":!0,$toggleSize:r,variant:y.text.size[r].typography.variant,fontFamily:y.text.size[r].typography.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[$].checked}),n.jsx(re,{"aria-hidden":!0,$toggleSize:r,variant:y.text.size[r].typography.variant,fontFamily:y.text.size[r].typography.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[$].unchecked})]}),n.jsx(le,{$toggleSize:r})]})})})}K.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> &
  Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID"> & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""},textValueType:{required:!1,tsType:{name:"CoreToggle.TextValueType"},description:""},toggleSize:{required:!1,tsType:{name:"CoreToggle.Size"},description:""}}};const de={title:"Components/Inputs/Toggle",component:K,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:k.SIZES},textValueType:{control:{type:"select"},options:k.TEXT_VALUE_TYPES}},args:{onChange:ae()}},o={args:{labelProps:{"aria-label":"Labelled Toggle"}}},p={...o,args:{textValueType:"yes-no",toggleSize:"default",labelProps:{"aria-label":"Labelled Toggle"}}},u={...o,args:{disabled:!0,checked:!0,textValueType:"on-off",labelProps:{"aria-label":"Labelled Toggle"}}},m={...o,args:{disabled:!0,checked:!1,textValueType:"yes-no",labelProps:{"aria-label":"Labelled Toggle"}}},b={...o,args:{textValueType:"yes-no",toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},h={...o,args:{textValueType:"on-off",toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},f={...o,args:{labelProps:{label:"Label for Toggle"}}},T={...o,args:{labelProps:{label:"Label for Toggle",labelHint:"Additional information"}}};var v,z,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,H,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "default",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(C=(H=p.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var O,_,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    textValueType: "on-off",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,E,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    textValueType: "yes-no",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(j=(E=m.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var F,N,W;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(W=(N=b.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var B,R,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "on-off",
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,Y,X;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for Toggle"
    }
  }
}`,...(X=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var U,M,J;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for Toggle",
      labelHint: "Additional information"
    }
  }
}`,...(J=(M=T.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};const ge=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOff","WithLabel","WithHint"],ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,DisabledOnOffChecked:u,DisabledYesNoUnchecked:m,SmallOnOff:h,SmallYesNo:b,WithHint:T,WithLabel:f,YesNo:p,__namedExportsOrder:ge,default:de},Symbol.toStringTag,{value:"Module"}));export{o as B,u as D,b as S,ye as T,f as W,p as Y,m as a,h as b,T as c};
