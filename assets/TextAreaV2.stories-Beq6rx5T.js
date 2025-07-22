import{f as se}from"./index-iP1lhtUC.js";import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as y}from"./index-CcKhGcwW.js";import{a as ne,$ as le}from"./TextField-Dek19DRu.js";import{$ as ie}from"./useControlledState-Bw1hdnkP.js";import{g as ce}from"./index-WLaP1tkh.js";import{a as m,u as g,p as C,b as n}from"./index-BHlkTKmU.js";import{I as de,a as ue}from"./InputAlerts-DCLtABKX.js";import{I as pe}from"./InputLabelTopV2-BD3mOok3.js";import{C as he}from"./CharactersCounter-BMl8DxiD.js";import{$ as be,a as fe}from"./utils-BPOuYIA2.js";const me=m(ne)`
  ${({$autoGrow:r,$maxHeight:t})=>{const{tokens:e}=g(),{textArea:o,typography:l,scrollBar:$}=e,i=o.typography.variant,f=C(l.fontSize[i]),x=C(l.lineHeight[i]);return[n`
        position: relative;
        z-index: 0;

        all: unset;
        white-space: pre-wrap;
        word-wrap: break-word;
        min-height: ${o.minHeight};
        padding: calc(${o.paddingVertical} - 2px)
          calc(${o.paddingHorizontal} - 2px);
        margin: 2px;
        color: ${o.color.base};
        font-family: ${l.fontFamily[i]};
        font-size: ${f};
        line-height: ${x};
        scrollbar-color: ${$.thumbColor} transparent;

        &[data-readonly] {
          color: ${o.color.readOnly};
        }

        &[data-disabled] {
          color: ${o.color.disabled};
        }

        &::placeholder {
          color: ${o.color.placeholder};
        }
      `,t&&n`
          max-height: ${t}px;
        `,r&&n`
          field-sizing: content;
        `]}}
`,ge=m.div`
  ${()=>{const{tokens:r}=g(),{spacing:t}=r;return n`
      width: 100%;
      display: grid;
      gap: ${t.s4};
    `}}
`,$e=m.div`
  ${()=>{const{tokens:r}=g(),{outerField:t}=r;return n`
      border-radius: ${t.radius};

      &:has([data-focused]) {
        outline-width: ${t.focusRing.width.focus};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset.focus};
      }
    `}}
`,xe=m.div`
  ${({$displayInnerShadow:r})=>{const{tokens:t}=g(),{outerField:e,textArea:o}=t;return n`
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      gap: ${e.gap};
      min-height: ${e.minHeight};
      border-radius: ${e.radius};
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style};
      outline-color: ${e.stroke.color.base};
      outline-offset: ${e.stroke.offset.base};
      background: ${e.backgroundColor};

      &:has([data-invalid]) {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
        outline-offset: ${e.stroke.offset.error};
      }

      &:has([data-hovered]) {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
        outline-offset: ${e.stroke.offset.hover};
      }

      &:has([data-focused]) {
        outline-width: ${e.stroke.width.focus};
        outline-color: ${e.stroke.color.focus};
        outline-offset: ${e.stroke.offset.focus};
      }

      &:has([data-disabled]) {
        outline-width: ${e.stroke.width.base};
        outline-color: ${e.stroke.color.disabled};
        outline-offset: ${e.stroke.offset.base};
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${o.innerShadow.height};
        pointer-events: none;
        opacity: ${o.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px ${o.innerShadow.color} inset;
        border-radius: ${e.radius} ${e.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px ${o.innerShadow.color} inset;
        border-radius: 0 0 ${e.radius} ${e.radius};
      }
      ${(r==="TOP"||r==="BOTH")&&n`
        &::before {
          opacity: ${o.innerShadow.opacity.active};
        }
      `}
      ${(r==="BOTTOM"||r==="BOTH")&&n`
        &::after {
          opacity: ${o.innerShadow.opacity.active};
        }
      `}
    `}}
`;function we(r){const{displayInnerShadow:t,children:e}=r;return a.jsx($e,{children:a.jsx(xe,{$displayInnerShadow:t,children:e})})}const K=y.forwardRef((r,t)=>{const{labelProps:e,alerts:o,placeholder:l,autoGrow:$,maxHeight:i,withCharacterCounter:f,onChange:x,testID:A="textarea",...P}=r,{maxLength:w}=P,[Q,U]=y.useState(null),T=be(t),[X,Y]=ie(r.value,r.defaultValue??""),Z=()=>{const v=T.current;if(v){const{scrollTop:re,scrollHeight:te,offsetHeight:ae}=v;U(ce.determineInnerShadowToDisplay(re,te,ae))}},ee=y.useCallback(()=>{Z()},[]),oe=fe(x,Y);return a.jsx(le,{...P,onChange:oe,children:a.jsx(de,{alert:o&&a.jsx(ue,{alerts:o}),gap:f&&w!==void 0?"4px":"8px",children:a.jsxs(ge,{children:[a.jsx(pe,{...e,children:a.jsx(we,{displayInnerShadow:Q,children:a.jsx(me,{ref:T,$autoGrow:$,$maxHeight:i,placeholder:l,onScroll:ee,"data-testid":A})})}),f&&w!==void 0&&a.jsx(he,{length:X.length,maxLength:w,testID:`${A}-character-counter`})]})})})});K.displayName="TextAreaV2";const ye={title:"Components/Inputs/TextAreaV2",component:K,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},autoGrow:{control:"boolean"},maxHeight:{control:"number"},maxLength:{control:"number"},withCharacterCounter:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:se()}},s={args:{"aria-label":"TextArea label"}},c={...s,args:{labelProps:{label:"TextArea label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={...s,args:{labelProps:{label:"TextArea label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"TextArea label"}}},p={args:{isInvalid:!0,labelProps:{label:"TextArea label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},h={args:{withCharacterCounter:!0,maxLength:15,labelProps:{label:"TextArea label"}}},b={...s,args:{labelProps:{label:"TextArea label"},autoGrow:!0,maxHeight:300}};var k,S,I;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextArea label"
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var H,B,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label",
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
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var j,D,O;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label",
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
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,z,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var G,L,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "TextArea label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var E,F,q;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    withCharacterCounter: true,
    maxLength: 15,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var M,N,J;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label"
    },
    autoGrow: true,
    maxHeight: 300
  }
}`,...(J=(N=b.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const Ae=["Basic","WithLabel","WithHint","Disabled","Invalid","WithCounter","AutoGrow"],De=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:b,Basic:s,Disabled:u,Invalid:p,WithCounter:h,WithHint:d,WithLabel:c,__namedExportsOrder:Ae,default:ye},Symbol.toStringTag,{value:"Module"}));export{b as A,s as B,u as D,p as I,De as T,c as W,d as a,h as b};
