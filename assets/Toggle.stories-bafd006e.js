import{a as l,u as c,p as d,b as g,j as r}from"./index-74fe31d7.js";import{a as ee}from"./index-583b5bb5.js";import{b as $}from"./index-f9a152de.js";import{r as P}from"./index-c013ead5.js";import{T as G}from"./Typography-5c86d7b4.js";import{I as oe}from"./InputLabelTop-9f3f61cf.js";const y="0.4s",n=l.div`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c(),a=d(e.size[o].width),t=d(e.size[o].height);return g`
      position: relative;
      width: ${a};
      height: ${t};
      display: flex;
      align-items: center;
      border-radius: ${t};

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
`,ae=l.input`
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
`,te=l.div`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c(),a=d(e.size[o].width),t=e.thumb.size[o].margin;return[g`
        position: relative;
        width: ${e.thumb.size[o].width};
        height: ${e.thumb.size[o].height};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[o].height};
        margin: ${t};
        transition: transform ${y};
        ${n}:has(input:checked) && {
          transform: translateX(calc(${a} - ${t} - ${t} - 100%));
        }

        ${n}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,se=l(G)`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[o].padding};
        transition: opacity ${y};

        ${n}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${n}:has(input:checked) && {
          opacity: 1;
        }

        ${n}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,re=l(G)`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c();return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[o].padding};
        transition: opacity ${y};

        ${n}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${n}:has(input:checked) && {
          opacity: 0;
        }

        ${n}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,ne=l.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,le=l.div`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c(),a=d(e.size[o].width),t=d(e.size[o].height);return g`
      cursor: pointer;
      width: ${a};

      outline-style: solid;
      border-radius: ${t};
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
`,ie=l.div`
  ${({$toggleSize:o})=>{const{tokens:{toggle:e}}=c(),a=d(e.size[o].width);return g`
      width: ${a};
      background-color: transparent;
    `}}
`;function ce(o){const{children:e,toggleSize:a}=o;return r.jsx(le,{$toggleSize:a,children:r.jsx(ie,{$toggleSize:a,children:e})})}function _(o){const{id:e,labelProps:a,testID:t="toggle",textValueType:u="on-off",toggleSize:i="default",...J}=o,S=P.useId(),z=P.useId(),{labelHint:Q}=a,{tokens:{toggle:x}}=c();return r.jsx(oe,{...a,labelHintID:z,htmlFor:e||S,children:r.jsx(ce,{toggleSize:i,children:r.jsxs(n,{$toggleSize:i,children:[r.jsx(ae,{...J,id:e||S,role:"switch",type:"checkbox","aria-describedby":Q?z:void 0,"data-testid":t}),r.jsxs(ne,{children:[r.jsx(se,{"aria-hidden":!0,$toggleSize:i,variant:x.text.size[i].typographyVariant,fontFamily:x.text.fontFamily,children:$.TEXT_VALUES_TO_TYPE_MAP[u].checked}),r.jsx(re,{"aria-hidden":!0,$toggleSize:i,variant:x.text.size[i].typographyVariant,fontFamily:x.text.fontFamily,children:$.TEXT_VALUES_TO_TYPE_MAP[u].unchecked})]}),r.jsx(te,{$toggleSize:i})]})})})}const{useArgs:de}=__STORYBOOK_MODULE_CLIENT_API__,ge={title:"Inputs/Toggle",component:_,render:function(e){const[,a]=de();function t(u){a({checked:u.target.checked}),ee("onChange")(u)}return r.jsx(_,{...e,onChange:t})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:$.SIZES},textValueType:{control:{type:"select"},options:$.TEXT_VALUE_TYPES}},args:{checked:!0,disabled:!1}},s={args:{labelProps:{"aria-label":"Labelled Toggle"}}},p={...s,args:{textValueType:"yes-no",toggleSize:"default",labelProps:{"aria-label":"Labelled Toggle"}}},h={...s,args:{disabled:!0,checked:!0,textValueType:"on-off",labelProps:{"aria-label":"Labelled Toggle"}}},b={...s,args:{disabled:!0,checked:!1,textValueType:"yes-no",labelProps:{"aria-label":"Labelled Toggle"}}},m={...s,args:{textValueType:"yes-no",toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},f={...s,args:{textValueType:"on-off",toggleSize:"small",checked:!1,labelProps:{"aria-label":"Labelled Toggle"}}},k={...s,args:{labelProps:{label:"Labelled Toggle"}}},T={...s,args:{labelProps:{label:"Labelled Toggle",labelHint:"Additional information"}}};var w,L,O;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var V,C,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "default",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,v,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    textValueType: "on-off",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(E=(v=h.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var A,B,D;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    textValueType: "yes-no",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(D=(B=b.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var Y,N,R;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,W,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "on-off",
    toggleSize: "small",
    checked: false,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var F,M,X;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Toggle"
    }
  }
}`,...(X=(M=k.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var K,Z,q;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Toggle",
      labelHint: "Additional information"
    }
  }
}`,...(q=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};const ue=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOffUnchecked","WithLabel","WithHint"],Te=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,DisabledOnOffChecked:h,DisabledYesNoUnchecked:b,SmallOnOffUnchecked:f,SmallYesNo:m,WithHint:T,WithLabel:k,YesNo:p,__namedExportsOrder:ue,default:ge},Symbol.toStringTag,{value:"Module"}));export{s as B,h as D,m as S,Te as T,k as W,p as Y,b as a,f as b,T as c};
