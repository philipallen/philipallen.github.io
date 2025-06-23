import{f as Q}from"./index-iP1lhtUC.js";import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as U}from"./index-CcKhGcwW.js";import{a as X,$ as Y}from"./TextField-Dek19DRu.js";import{$ as Z}from"./useControlledState-Bw1hdnkP.js";import{a as f,u as m,p as y,b as s}from"./index-BHlkTKmU.js";import{I as ee,a as oe}from"./InputAlerts-CKDNBLse.js";import{I as re}from"./InputLabelTopV2-DD5uYda7.js";import{C as ae}from"./CharactersCounter-C7Oab5bb.js";import{a as te}from"./utils-BPOuYIA2.js";const se=f(X)`
  ${({$autoGrow:o,$maxHeight:e})=>{const{tokens:g}=m(),{textArea:r,typography:n,scrollBar:$}=g,l=r.typography.variant,b=y(n.fontSize[l]),x=y(n.lineHeight[l]);return[s`
        all: unset;
        min-height: ${r.minHeight};
        padding: calc(${r.paddingVertical} - 2px)
          calc(${r.paddingHorizontal} - 2px);
        margin: 2px;
        color: ${r.color.base};
        font-family: ${n.fontFamily[l]};
        font-size: ${b};
        line-height: ${x};
        scrollbar-color: ${$.thumbColor} transparent;

        &[data-readonly] {
          color: ${r.color.readOnly};
        }

        &[data-disabled] {
          color: ${r.color.disabled};
        }

        &::placeholder {
          color: ${r.color.placeholder};
        }
      `,e&&s`
          max-height: ${e}px;
        `,o&&s`
          field-sizing: content;
        `]}}
`,ne=f.div`
  ${()=>{const{tokens:o}=m(),{spacing:e}=o;return s`
      width: 100%;
      display: grid;
      gap: ${e.s4};
    `}}
`,le=f.div`
  ${()=>{const{tokens:o}=m(),{outerField:e}=o;return s`
      border-radius: ${e.radius};

      &:has([data-focused]) {
        outline-width: ${e.focusRing.width.focus};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,ie=f.div`
  ${()=>{const{tokens:o}=m(),{outerField:e}=o;return s`
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
    `}}
`;function ce(o){const{children:e}=o;return a.jsx(le,{children:a.jsx(ie,{children:e})})}const M=U.forwardRef((o,e)=>{const{labelProps:g,alerts:r,placeholder:n,autoGrow:$,maxHeight:l,withCharacterCounter:b,onChange:x,testID:A="textarea",...w}=o,{maxLength:P}=w,[N,J]=Z(o.value,o.defaultValue??""),K=te(x,J);return a.jsx(Y,{...w,onChange:K,children:a.jsx(ee,{alert:r&&a.jsx(oe,{alerts:r}),gap:b&&P!==void 0?"4px":"8px",children:a.jsxs(ne,{children:[a.jsx(re,{...g,children:a.jsx(ce,{children:a.jsx(se,{ref:e,$autoGrow:$,$maxHeight:l,placeholder:n,"data-testid":A})})}),b&&P!==void 0&&a.jsx(ae,{length:N.length,maxLength:P,testID:`${A}-character-counter`})]})})})});M.displayName="TextAreaV2";const ue={title:"Components/Inputs/TextAreaV2",component:M,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},autoGrow:{control:"boolean"},maxHeight:{control:"number"},maxLength:{control:"number"},withCharacterCounter:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:Q()}},t={args:{"aria-label":"TextArea label"}},i={...t,args:{labelProps:{label:"TextArea label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},c={...t,args:{labelProps:{label:"TextArea label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"TextArea label"}}},d={args:{isInvalid:!0,labelProps:{label:"TextArea label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},p={args:{withCharacterCounter:!0,maxLength:15,labelProps:{label:"TextArea label"}}},h={...t,args:{labelProps:{label:"TextArea label"},autoGrow:!0,maxHeight:300}};var T,v,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextArea label"
  }
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,I,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var H,j,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var S,D,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,z,G;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var L,_,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    withCharacterCounter: true,
    maxLength: 15,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,F,q;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label"
    },
    autoGrow: true,
    maxHeight: 300
  }
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const de=["Basic","WithLabel","WithHint","Disabled","Invalid","WithCounter","AutoGrow"],we=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:h,Basic:t,Disabled:u,Invalid:d,WithCounter:p,WithHint:c,WithLabel:i,__namedExportsOrder:de,default:ue},Symbol.toStringTag,{value:"Module"}));export{h as A,t as B,u as D,d as I,we as T,i as W,c as a,p as b};
