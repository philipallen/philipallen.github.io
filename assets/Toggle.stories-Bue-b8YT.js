import{f as X}from"./index-D0csYWE-.js";import{p as Z}from"./index-VIbBARS4.js";import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{r as $}from"./index-KmaxkdDD.js";import{a as i,u as c,p as d,b as p}from"./index-DT8u_GqS.js";import{T as E}from"./Typography-Ck-NcY7i.js";import{I as q}from"./InputLabelTop-C9GtsZQK.js";const y="0.4s",l=i.div`
  ${({$toggleSize:t})=>{const{tokens:o}=c(),{toggle:e}=o,a=d(e.size[t].width),f=d(e.size[t].height);return p`
      position: relative;
      width: ${a};
      height: ${f};
      display: flex;
      align-items: center;
      border-radius: ${f};

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
  ${({$toggleSize:t})=>{const{tokens:o}=c(),{toggle:e}=o,a=d(e.size[t].width);return[p`
        position: relative;
        width: ${e.thumb.size[t]};
        height: ${e.thumb.size[t]};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[t]};
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
`,N=t=>{const{tokens:o}=c(),{toggle:e}=o;return`${parseInt(e.thumb.size[t])+parseInt(e.thumb.padding)*3}px`},K=i(E)`
  ${({$toggleSize:t})=>{const o=N(t),{tokens:e}=c(),{toggle:a}=e;return[p`
        position: absolute;
        width: 100%;
        color: ${a.text.color.base};
        text-align: right;
        padding-right: ${o};
        transition: opacity ${y};

        ${l}:has(input:disabled) && {
          color: ${a.text.color.disabled};
        }

        ${l}:has(input:checked) && {
          opacity: 1;
        }

        ${l}:has(input:not(:checked)) && {
          opacity: 0;
        }
      `]}}
`,Q=i(E)`
  ${({$toggleSize:t})=>{const o=N(t),{tokens:e}=c(),{toggle:a}=e;return[p`
        position: absolute;
        width: 100%;
        color: ${a.text.color.base};
        padding-left: ${o};
        transition: opacity ${y};

        ${l}:has(input:disabled) && {
          color: ${a.text.color.disabled};
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
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=c(),e=d(o.size[t].width),a=d(o.size[t].height);return p`
      cursor: pointer;
      width: ${e};

      outline-style: solid;
      border-radius: ${a};
      outline-offset: 0;
      outline-width: 0;

      &:has(input:disabled) {
        cursor: not-allowed;
      }

      &:has(input:not(:disabled)):hover {
        outline-color: ${o.focusRing.color};
        outline-width: ${o.focusRing.width};
        outline-offset: ${o.focusRing.offset};
      }

      &:has(input:focus) {
        outline-color: ${o.focusRing.color};
        outline-width: ${o.focusRing.width};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`,oe=i.div`
  ${({$toggleSize:t})=>{const{tokens:{toggle:o}}=c(),e=d(o.size[t].width);return p`
      width: ${e};
      background-color: transparent;
    `}}
`;function te(t){const{children:o,toggleSize:e}=t;return s.jsx(ee,{$toggleSize:e,children:s.jsx(oe,{$toggleSize:e,children:o})})}const U=$.forwardRef((t,o)=>{const{id:e,labelProps:a,testID:f="toggle",toggleSize:n="default",...V}=t,T=$.useId(),x=$.useId(),{labelHint:M}=a,{tokens:{toggle:k}}=c();return s.jsx("div",{ref:o,children:s.jsx(q,{...a,labelHintID:x,htmlFor:e||T,children:s.jsx(te,{toggleSize:n,children:s.jsxs(l,{$toggleSize:n,children:[s.jsx(G,{...V,id:e||T,role:"switch",type:"checkbox","aria-describedby":M?x:void 0,"data-testid":f}),s.jsxs(Y,{children:[s.jsx(K,{"aria-hidden":!0,$toggleSize:n,component:"span",variant:k.text.size[n].typography.variant,fontFamily:k.text.size[n].typography.fontFamily,children:"On"}),s.jsx(Q,{"aria-hidden":!0,$toggleSize:n,component:"span",variant:k.text.size[n].typography.variant,fontFamily:k.text.size[n].typography.fontFamily,children:"Off"})]}),s.jsx(J,{$toggleSize:n})]})})})})});U.displayName="Toggle";const ae={title:"Components/Inputs/Toggle",component:U,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},toggleSize:{control:{type:"select"},options:Z.SIZES}},args:{onChange:X()}},r={args:{labelProps:{"aria-label":"Labelled Toggle"}}},g={...r,args:{disabled:!0,checked:!0,labelProps:{"aria-label":"Labelled Toggle"}}},u={...r,args:{disabled:!0,checked:!1,labelProps:{"aria-label":"Labelled Toggle"}}},h={...r,args:{toggleSize:"small",labelProps:{"aria-label":"Labelled Toggle"}}},b={...r,args:{labelProps:{label:"Label for Toggle",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={...r,args:{labelProps:{label:"Label for Toggle",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}};var P,w,v;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,S,I;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: true,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var R,B,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    checked: false,
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,C,A;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    toggleSize: "small",
    labelProps: {
      "aria-label": "Labelled Toggle"
    }
  }
}`,...(A=(C=h.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var D,H,O;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var W,_,F;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const se=["Basic","DisabledChecked","DisabledUnchecked","Small","WithLabel","WithHint"],ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,DisabledChecked:g,DisabledUnchecked:u,Small:h,WithHint:m,WithLabel:b,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{r as B,g as D,h as S,ge as T,b as W,u as a,m as b};
