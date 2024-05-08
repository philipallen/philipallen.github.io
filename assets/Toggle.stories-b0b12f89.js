import{f as ae}from"./index-6eef940f.js";import{b as k}from"./index-f9a152de.js";import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as z}from"./index-c013ead5.js";import{a as s,u as c,p as d,b as g}from"./index-2b4c4340.js";import{T as G}from"./Typography-45ec0b3f.js";import{I as te}from"./InputLabelTop-27f46b9d.js";const x="0.4s",r=s.div`
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
`,oe=s.input`
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
`,le=s.div`
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
        ${r}:has(input:checked) && {
          transform: translateX(calc(${t} - ${l} - ${l} - 100%));
        }

        ${r}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,ne=s(G)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[a].padding};
        transition: opacity ${x};

        ${r}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${r}:has(input:checked) && {
          opacity: 1;
        }

        ${r}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,re=s(G)`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[a].padding};
        transition: opacity ${x};

        ${r}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${r}:has(input:checked) && {
          opacity: 0;
        }

        ${r}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,se=s.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,ie=s.div`
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
`,ce=s.div`
  ${({$toggleSize:a})=>{const{tokens:{toggle:e}}=c(),t=d(e.size[a].width);return g`
      width: ${t};
      background-color: transparent;
    `}}
`;function J(a){const{children:e,toggleSize:t}=a;return n.jsx(ie,{$toggleSize:t,children:n.jsx(ce,{$toggleSize:t,children:e})})}J.__docgenInfo={description:"",methods:[],displayName:"ToggleWrapper",props:{toggleSize:{required:!0,tsType:{name:"CoreToggle.Size"},description:""}}};function K(a){const{id:e,labelProps:t,testID:l="toggle",textValueType:$="on-off",toggleSize:i="default",...Q}=a,S=z.useId(),w=z.useId(),{labelHint:ee}=t,{tokens:{toggle:y}}=c();return n.jsx(te,{...t,labelHintID:w,htmlFor:e||S,children:n.jsx(J,{toggleSize:i,children:n.jsxs(r,{$toggleSize:i,children:[n.jsx(oe,{...Q,id:e||S,role:"switch",type:"checkbox","aria-describedby":ee?w:void 0,"data-testid":l}),n.jsxs(se,{children:[n.jsx(ne,{"aria-hidden":!0,$toggleSize:i,variant:y.text.size[i].typographyVariant,fontFamily:y.text.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[$].checked}),n.jsx(re,{"aria-hidden":!0,$toggleSize:i,variant:y.text.size[i].typographyVariant,fontFamily:y.text.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[$].unchecked})]}),n.jsx(le,{$toggleSize:i})]})})})}K.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""},textValueType:{required:!1,tsType:{name:"CoreToggle.TextValueType"},description:""},toggleSize:{required:!1,tsType:{name:"CoreToggle.Size"},description:""}}};const de={title:"Components/Inputs/Toggle",component:K,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:k.SIZES},textValueType:{control:{type:"select"},options:k.TEXT_VALUE_TYPES}},args:{onChange:ae()}},o={args:{labelProps:{"aria-label":"Labelled Toggle"}}},p={...o,args:{textValueType:"yes-no",toggleSize:"default",labelProps:{"aria-label":"Labelled Toggle"}}},u={...o,args:{disabled:!0,checked:!0,textValueType:"on-off",labelProps:{"aria-label":"Labelled Toggle"}}},h={...o,args:{disabled:!0,checked:!1,textValueType:"yes-no",labelProps:{"aria-label":"Labelled Toggle"}}},b={...o,args:{textValueType:"yes-no",toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},m={...o,args:{textValueType:"on-off",toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},f={...o,args:{labelProps:{label:"Labelled Toggle"}}},T={...o,args:{labelProps:{label:"Labelled Toggle",labelHint:"Additional information"}}};var P,v,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var L,O,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "default",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,C,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    textValueType: "on-off",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var H,j,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    textValueType: "yes-no",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var N,E,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(W=(E=b.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var R,A,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "on-off",
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var Y,q,U;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Toggle"
    }
  }
}`,...(U=(q=f.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var X,M,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Toggle",
      labelHint: "Additional information"
    }
  }
}`,...(Z=(M=T.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};const ge=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOff","WithLabel","WithHint"],ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,DisabledOnOffChecked:u,DisabledYesNoUnchecked:h,SmallOnOff:m,SmallYesNo:b,WithHint:T,WithLabel:f,YesNo:p,__namedExportsOrder:ge,default:de},Symbol.toStringTag,{value:"Module"}));export{o as B,u as D,b as S,ye as T,f as W,p as Y,h as a,m as b,T as c};
