import{f as X}from"./index-iP1lhtUC.js";import{n as Z}from"./index-WLaP1tkh.js";import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{r as $}from"./index-CcKhGcwW.js";import{a as i,u as c,p,b as g}from"./index-BVzVw2jm.js";import{T as E}from"./Typography-DZZq2lFF.js";import{I as q}from"./InputLabelTop-CIKca_5H.js";const y="0.4s",l=i.div`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=p(e.size[o].width),d=p(e.size[o].height);return g`
      position: relative;
      width: ${a};
      height: ${d};
      display: flex;
      align-items: center;
      border-radius: ${d};

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
`,G=i.input`
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
`,J=i.div`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=p(e.size[o].width);return[g`
        position: relative;
        width: ${e.thumb.size[o]};
        height: ${e.thumb.size[o]};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[o]};
        margin: ${e.thumb.padding};
        transition: transform ${y};

        ${l}:has(input:checked) && {
          transform: translateX(
            calc(
              ${a} - ${e.thumb.padding} - ${e.thumb.padding} -
                100%
            )
          );
        }

        ${l}:has(input:not(:checked)) && {
          transform: translateX(0px);
        }
      `]}}
`,N=o=>{const{tokens:t}=c(),{toggle:e}=t;return`${parseInt(e.thumb.size[o])+parseInt(e.thumb.padding)*3}px`},K=i(E)`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=N(o);return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${a};
        transition: opacity ${y};

        ${l}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${l}:has(input:checked) && {
          opacity: 1;
        }

        ${l}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,Q=i(E)`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=N(o);return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${a};
        transition: opacity ${y};

        ${l}:has(input:disabled) && {
          color: ${e.text.color.disabled};
        }

        ${l}:has(input:checked) && {
          opacity: 0;
        }

        ${l}:has(input:not(:checked)) && {
          opacity: 1;
        }
      `]}}
`,Y=i.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,ee=i.div`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=p(e.size[o].width),d=p(e.size[o].height);return g`
      cursor: pointer;
      width: ${a};

      outline-style: solid;
      border-radius: ${d};
      outline-offset: 0;
      outline-width: 0;

      &:has(input:disabled) {
        cursor: not-allowed;
      }

      &:has(input:focus-visible) {
        outline-color: ${e.focusRing.color};
        outline-width: ${e.focusRing.width};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,oe=i.div`
  ${({$toggleSize:o})=>{const{tokens:t}=c(),{toggle:e}=t,a=p(e.size[o].width);return g`
      width: ${a};
      background-color: transparent;
    `}}
`;function te(o){const{children:t,toggleSize:e}=o;return s.jsx(ee,{$toggleSize:e,children:s.jsx(oe,{$toggleSize:e,children:t})})}const U=$.forwardRef((o,t)=>{const{id:e,labelProps:a,testID:d="toggle",toggleSize:n="default",...V}=o,T=$.useId(),x=$.useId(),{labelHint:M}=a,{tokens:{toggle:k}}=c();return s.jsx("div",{ref:t,children:s.jsx(q,{...a,labelHintID:x,htmlFor:e||T,children:s.jsx(te,{toggleSize:n,children:s.jsxs(l,{$toggleSize:n,children:[s.jsx(G,{...V,id:e||T,role:"switch",type:"checkbox","aria-describedby":M?x:void 0,"data-testid":d}),s.jsxs(Y,{children:[s.jsx(K,{"aria-hidden":!0,$toggleSize:n,component:"span",variant:k.text.size[n].typography.variant,fontFamily:k.text.size[n].typography.fontFamily,children:"On"}),s.jsx(Q,{"aria-hidden":!0,$toggleSize:n,component:"span",variant:k.text.size[n].typography.variant,fontFamily:k.text.size[n].typography.fontFamily,children:"Off"})]}),s.jsx(J,{$toggleSize:n})]})})})})});U.displayName="Toggle";const ae={title:"Components/Inputs/Toggle",component:U,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:Z.SIZES}},args:{onChange:X()}},r={args:{labelProps:{"aria-label":"Labelled Toggle"}}},u={...r,args:{disabled:!0,checked:!0,labelProps:{"aria-label":"Labelled Toggle"}}},h={...r,args:{disabled:!0,checked:!1,labelProps:{"aria-label":"Labelled Toggle"}}},b={...r,args:{toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},m={...r,args:{labelProps:{label:"Label for Toggle",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},f={...r,args:{labelProps:{label:"Label for Toggle",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}};var P,w,v;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,S,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var B,L,j;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(j=(L=h.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var R,C,A;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(A=(C=b.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var D,H,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var W,_,F;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const se=["Basic","DisabledChecked","DisabledUnchecked","Small","WithLabel","WithHint"],ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,DisabledChecked:u,DisabledUnchecked:h,Small:b,WithHint:f,WithLabel:m,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{r as B,u as D,b as S,ge as T,m as W,h as a,f as b};
