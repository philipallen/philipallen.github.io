import{a as r,u as c,b as l,j as o}from"./index-e76b8df1.js";import{a as X}from"./index-583b5bb5.js";import{b as k}from"./index-f9a152de.js";import{r as H}from"./index-c013ead5.js";import{T as F}from"./Typography-ab363d23.js";import{I as K}from"./InputLabelTop-e8979608.js";const T="0.4s",s=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return l`
      position: relative;
      width: ${e.size[t].width};
      height: ${e.size[t].height};
      display: flex;
      align-items: center;
      border-radius: ${e.size[t].height};

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
`,Z=r.input`
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
`,q=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: relative;
        width: ${e.thumb.size[t].width};
        height: ${e.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[t].height};
        margin: ${e.thumb.size[t].margin};
        transition: transform ${T};

        ${s}:has(input:checked) && {
          transform: translateX(
            ${e.thumb.size[t].uncheckedOffset}
          );
        }

        ${s}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,G=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[t].padding};
        transition: opacity ${T};

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
`,J=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[t].padding};
        transition: opacity ${T};

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
`,Q=r.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,ee=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return l`
      cursor: pointer;
      width: ${e.size[t].width};

      outline-style: solid;
      border-radius: ${e.size[t].height};
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
`,te=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return l`
      width: ${e.size[t].width};
      background-color: transparent;
    `}}
`;function oe(t){const{children:e,toggleSize:i}=t;return o.jsx(ee,{$toggleSize:i,children:o.jsx(te,{$toggleSize:i,children:e})})}function y(t){const{id:e,labelProps:i,testID:x="toggle",textValueType:d="on-off",toggleSize:n="default",...M}=t,$=H.useId(),{tokens:{toggle:f}}=c();return o.jsx(K,{...i,htmlFor:e||$,children:o.jsx(oe,{toggleSize:n,children:o.jsxs(s,{$toggleSize:n,children:[o.jsx(Z,{...M,id:e||$,role:"switch",type:"checkbox","data-testid":x}),o.jsxs(Q,{children:[o.jsx(G,{"aria-hidden":!0,$toggleSize:n,variant:f.text.size[n].typographyVariant,fontFamily:f.text.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[d].checked}),o.jsx(J,{"aria-hidden":!0,$toggleSize:n,variant:f.text.size[n].typographyVariant,fontFamily:f.text.fontFamily,children:k.TEXT_VALUES_TO_TYPE_MAP[d].unchecked})]}),o.jsx(q,{$toggleSize:n})]})})})}const{useArgs:ae}=__STORYBOOK_MODULE_CLIENT_API__,se={title:"Inputs/Toggle",component:y,render:function(e){const[,i]=ae();function x(d){i({checked:d.target.checked}),X("onChange")(d)}return o.jsx(y,{...e,onChange:x})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:k.SIZES},textValueType:{control:{type:"select"},options:k.TEXT_VALUE_TYPES}},args:{checked:!0,disabled:!1}},a={args:{labelProps:{"aria-label":"Labelled Input"}}},u={...a,args:{textValueType:"yes-no",toggleSize:"default"}},p={...a,args:{disabled:!0,checked:!0,textValueType:"on-off"}},g={...a,args:{disabled:!0,checked:!1,textValueType:"yes-no"}},h={...a,args:{textValueType:"yes-no",toggleSize:"small"}},b={...a,args:{textValueType:"on-off",toggleSize:"small",checked:!1}},m={...a,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}};var S,z,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Input"
    }
  }
}`,...(_=(z=a.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var O,I,V;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "default"
  }
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var w,C,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    textValueType: "on-off"
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var E,v,L;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    textValueType: "yes-no"
  }
}`,...(L=(v=g.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var P,A,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "small"
  }
}`,...(Y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var B,D,N;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "on-off",
    toggleSize: "small",
    checked: false
  }
}`,...(N=(D=b.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,U,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const re=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOffUnchecked","WithLabel"],pe=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,DisabledOnOffChecked:p,DisabledYesNoUnchecked:g,SmallOnOffUnchecked:b,SmallYesNo:h,WithLabel:m,YesNo:u,__namedExportsOrder:re,default:se},Symbol.toStringTag,{value:"Module"}));export{a as B,p as D,h as S,pe as T,m as W,u as Y,g as a,b};
