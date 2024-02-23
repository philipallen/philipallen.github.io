import{a as r,u as i,b as l,j as o}from"./index-d88b625c.js";import{a as M}from"./index-583b5bb5.js";import{c as y,d as X,e as H}from"./index-c13ff105.js";import{r as K}from"./index-c013ead5.js";import{T as F}from"./Typography-06318a9b.js";import{I as Z}from"./InputLabelTop-ca7a27c6.js";const x="0.4s",n=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return l`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return[l`
        position: relative;
        width: ${e.inner.size[t].width};
        height: ${e.inner.size[t].height};
        display: flex;
        align-items: center;
        background-color: ${e.inner.backgroundColor.base};
        border-radius: ${e.inner.size[t].height};
        margin: ${e.inner.size[t].margin};
        transition: transform ${x};

        ${n}:has(input:checked) && {
          transform: translateX(
            ${e.inner.size[t].uncheckedOffset}
          );
        }

        ${n}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,Q=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${e.text.size[t].padding};
        transition: opacity ${x};

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
`,ee=r(F)`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return[l`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${e.text.size[t].padding};
        transition: opacity ${x};

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
`,te=r.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,oe=r.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return l`
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:e}}=i();return l`
      width: ${e.size[t].width};
      background-color: transparent;
    `}}
`;function se(t){const{children:e,toggleSize:c}=t;return o.jsx(oe,{$toggleSize:c,children:o.jsx(ae,{$toggleSize:c,children:e})})}function T(t){const{id:e,labelProps:c,testID:k="toggle",textValueType:d="on-off",toggleSize:s="default",...G}=t,$=K.useId(),{tokens:{toggle:m}}=i();return o.jsx(Z,{...c,htmlFor:e||$,children:o.jsx(se,{toggleSize:s,children:o.jsxs(n,{$toggleSize:s,children:[o.jsx(q,{...G,id:e||$,role:"switch",type:"checkbox","data-testid":k}),o.jsxs(te,{children:[o.jsx(Q,{"aria-hidden":!0,$toggleSize:s,variant:m.text.size[s].typographyVariant,fontFamily:m.text.size[s].fontFamily,children:y[d].checked}),o.jsx(ee,{"aria-hidden":!0,$toggleSize:s,variant:m.text.size[s].typographyVariant,fontFamily:m.text.size[s].fontFamily,children:y[d].unchecked})]}),o.jsx(J,{$toggleSize:s})]})})})}const{useArgs:ne}=__STORYBOOK_MODULE_CLIENT_API__,re={title:"Inputs/Toggle",component:T,render:function(e){const[,c]=ne();function k(d){c({checked:d.target.checked}),M("onChange")(d)}return o.jsx(T,{...e,onChange:k})},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:X},textValueType:{control:{type:"select"},options:H}},args:{checked:!0,disabled:!1}},a={args:{labelProps:{"aria-label":"Labelled Input"}}},u={...a,args:{textValueType:"yes-no",toggleSize:"default"}},p={...a,args:{disabled:!0,checked:!0,textValueType:"on-off"}},g={...a,args:{disabled:!0,checked:!1,textValueType:"yes-no"}},h={...a,args:{textValueType:"yes-no",toggleSize:"small"}},b={...a,args:{textValueType:"on-off",toggleSize:"small",checked:!1}},f={...a,args:{labelProps:{label:"Labelled Input","aria-label":"Labelled Input"}}};var S,z,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(Y=(R=b.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var A,U,W;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled Input",
      "aria-label": "Labelled Input"
    }
  }
}`,...(W=(U=f.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ie=["Basic","YesNo","DisabledOnOffChecked","DisabledYesNoUnchecked","SmallYesNo","SmallOnOffUnchecked","WithLabel"],he=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,DisabledOnOffChecked:p,DisabledYesNoUnchecked:g,SmallOnOffUnchecked:b,SmallYesNo:h,WithLabel:f,YesNo:u,__namedExportsOrder:ie,default:re},Symbol.toStringTag,{value:"Module"}));export{a as B,p as D,h as S,he as T,f as W,u as Y,g as a,b};
