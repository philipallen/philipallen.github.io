import{a as r,u as c,b as l,j as o}from"./index-1154a484.js";import{a as M}from"./index-583b5bb5.js";import{e as y,f as X,g as H}from"./index-f91edb4f.js";import{r as K}from"./index-c013ead5.js";import{T as F}from"./Typography-c902fb8d.js";import{I as Z}from"./InputLabelTop-a87f03df.js";const x="0.4s",s=r.div`
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
`,q=r.input`
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
`,J=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: relative;
        width: ${e.thumb.size[t].width};
        height: ${e.thumb.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[t].height};
        margin: ${e.thumb.size[t].margin};
        transition: transform ${x};

        ${s}:has(input:checked) && {
          transform: translateX(
            ${e.thumb.size[t].uncheckedOffset}
          );
        }

        ${s}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,Q=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[t].padding};
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
`,ee=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[t].padding};
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
`,te=r.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,oe=r.div`
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
`,ae=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=c();return l`
      width: ${e.size[t].width};
      background-color: transparent;
    `}}
`;function se(t){const{children:e,toggleSize:i}=t;return o.jsx(oe,{$toggleSize:i,children:o.jsx(ae,{$toggleSize:i,children:e})})}function T(t){const{id:e,labelProps:i,testID:k="toggle",textValueType:d="on-off",toggleSize:n="default",...G}=t,$=K.useId(),{tokens:{toggle:f}}=c();return o.jsx(Z,{...i,htmlFor:e||$,children:o.jsx(se,{toggleSize:n,children:o.jsxs(s,{$toggleSize:n,children:[o.jsx(q,{...G,id:e||$,role:"switch",type:"checkbox","data-testid":k}),o.jsxs(te,{children:[o.jsx(Q,{"aria-hidden":!0,$toggleSize:n,variant:f.text.size[n].typographyVariant,fontFamily:f.text.fontFamily,children:y[d].checked}),o.jsx(ee,{"aria-hidden":!0,$toggleSize:n,variant:f.text.size[n].typographyVariant,fontFamily:f.text.fontFamily,children:y[d].unchecked})]}),o.jsx(J,{$toggleSize:n})]})})})}const{useArgs:re}=__STORYBOOK_MODULE_CLIENT_API__,ne={title:"Inputs/Toggle",component:T,render:function(e){const[,i]=re();function k(d){i({checked:d.target.checked}),M("onChange")(d)}return o.jsx(T,{...e,onChange:k})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:X},textValueType:{control:{type:"select"},options:H}},args:{checked:!0,disabled:!1}},a={args:{labelProps:{"aria-label":"Labelled Input"}}},u={...a,args:{textValueType:"yes-no",toggleSize:"default"}},p={...a,args:{disabled:!0,checked:!0,textValueType:"on-off"}},g={...a,args:{disabled:!0,checked:!1,textValueType:"yes-no"}},h={...a,args:{textValueType:"yes-no",toggleSize:"small"}},b={...a,args:{textValueType:"on-off",toggleSize:"small",checked:!1}},m={...a,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}};var S,z,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Input"
    }
  }
}`,...(O=(z=a.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var _,I,w;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "default"
  }
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var V,C,j;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    textValueType: "on-off"
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var L,v,E;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    textValueType: "yes-no"
  }
}`,...(E=(v=g.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var P,B,D;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "yes-no",
    toggleSize: "small"
  }
}`,...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,R,Y;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Basic,
  args: {
    textValueType: "on-off",
    toggleSize: "small",
    checked: false
  }
}`,...(Y=(R=b.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var A,U,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ce=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOffUnchecked","WithLabel"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,DisabledOnOffChecked:p,DisabledYesNoUnchecked:g,SmallOnOffUnchecked:b,SmallYesNo:h,WithLabel:m,YesNo:u,__namedExportsOrder:ce,default:ne},Symbol.toStringTag,{value:"Module"}));export{a as B,p as D,h as S,he as T,m as W,u as Y,g as a,b};
