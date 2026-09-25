import{fn as ue}from"./index-DeN4tkzB.js";import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-BVaTkfsr.js";import{$ as he,a as be}from"./filterDOMProps--0WFEK8x.js";import{a as me,$ as fe}from"./TextField-BmI8UxxW.js";import{$ as ge}from"./useControlledState-n_cs0odp.js";import{d as $e}from"./index-EybPYVoN.js";import{u as w,i as n,a as y,p as B}from"./index-BpMil6Tx.js";import{I as xe,a as we,b as ye}from"./InputLabelTop--1mm_taL.js";import{C as Te}from"./CharactersCounter-C6mfTYma.js";const ve=y(me)`
  ${({$autoGrow:o,$maxHeight:a,$isCompact:e})=>{const{tokens:r}=w(),{textArea:t,typography:c,scrollBar:T}=r,i=t.typography.variant,g=B(c.fontSize[i]),v=B(c.lineHeight[i]);return[n`
        position: relative;
        z-index: 0;

        all: unset;
        white-space: pre-wrap;
        word-wrap: break-word;
        min-height: ${t.minHeight};
        padding: calc(${t.paddingVertical} - 2px)
          calc(${t.paddingHorizontal} - 2px);
        margin: 2px;
        color: ${t.color.base};
        font-family: ${c.fontFamily[i]};
        font-size: ${g};
        line-height: ${v};
        scrollbar-color: ${T.thumbColor} transparent;

        &[data-readonly] {
          color: ${t.color.readOnly};
        }

        &[data-disabled] {
          color: ${t.color.disabled};
        }

        &::placeholder {
          color: ${t.color.placeholder};
        }
      `,a&&n`
          max-height: ${a}px;
        `,e&&n`
          min-height: ${v};
        `,o&&n`
          field-sizing: content;
        `]}}
`,Ae=y.div`
  ${()=>{const{tokens:o}=w(),{spacing:a}=o;return n`
      width: 100%;
      display: grid;
      gap: ${a.s4};
    `}}
`,Pe=y.div`
  ${()=>{const{tokens:o}=w(),{outerField:a}=o;return n`
      border-radius: ${a.radius};

      &:has([data-focused]) {
        outline-width: ${a.focusRing.width.focus};
        outline-style: ${a.focusRing.style};
        outline-color: ${a.focusRing.color};
        outline-offset: ${a.focusRing.offset.focus};
      }
    `}}
`,Ce=y.div`
  ${({$displayInnerShadow:o})=>{const{tokens:a}=w(),{outerField:e,textArea:r}=a;return n`
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
        outline-width: ${e.stroke.width.active};
        outline-color: ${e.stroke.color.active};
        outline-offset: ${e.stroke.offset.active};
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
        height: ${r.innerShadow.height};
        pointer-events: none;
        opacity: ${r.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px ${r.innerShadow.color} inset;
        border-radius: ${e.radius} ${e.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px ${r.innerShadow.color} inset;
        border-radius: 0 0 ${e.radius} ${e.radius};
      }
      ${(o==="TOP"||o==="BOTH")&&n`
        &::before {
          opacity: ${r.innerShadow.opacity.active};
        }
      `}
      ${(o==="BOTTOM"||o==="BOTH")&&n`
        &::after {
          opacity: ${r.innerShadow.opacity.active};
        }
      `}
    `}}
`;function ke(o){const{displayInnerShadow:a,children:e}=o;return s.jsx(Pe,{children:s.jsx(Ce,{$displayInnerShadow:a,children:e})})}const ae=x.forwardRef((o,a)=>{const{labelProps:e,alerts:r,placeholder:t,autoGrow:c,maxHeight:T,isCompact:i,withCharacterCounter:g,onChange:v,onScroll:A,testID:H="textarea",...I}=o,{maxLength:P}=I,re=i?!0:c,[te,se]=x.useState(null),C=he(a),[k,ne]=ge(o.value,o.defaultValue||""),le=be(o.onChange,ne),S=x.useCallback(()=>{const $=C.current;if($){const{scrollTop:ce,scrollHeight:de,offsetHeight:pe}=$;se($e.determineInnerShadowToDisplay(ce,de,pe))}},[C]),ie=$=>{S(),A==null||A($)};return x.useLayoutEffect(()=>{S()},[k,S]),s.jsx(fe,{...I,value:k,onChange:le,children:s.jsx(xe,{alert:r&&s.jsx(ye,{alerts:r}),gap:g&&P!==void 0?"4px":"8px",children:s.jsxs(Ae,{children:[s.jsx(we,{...e,children:s.jsx(ke,{displayInnerShadow:te,children:s.jsx(ve,{ref:C,$autoGrow:re,$maxHeight:T,$isCompact:i,rows:i?1:void 0,placeholder:t,onScroll:ie,"data-testid":H})})}),g&&P!==void 0&&s.jsx(Te,{length:k.length,maxLength:P,testID:`${H}-character-counter`})]})})})});ae.displayName="TextArea";const Se={title:"Components/Inputs/TextArea",component:ae,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},autoGrow:{control:"boolean"},maxHeight:{control:"number"},maxLength:{control:"number"},withCharacterCounter:{control:"boolean"},isCompact:{control:"boolean"}},args:{isDisabled:!1,isInvalid:!1,withCharacterCounter:!1,onChange:ue()}},l={args:{"aria-label":"TextArea label"}},d={...l,args:{labelProps:{label:"TextArea label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},p={...l,args:{labelProps:{label:"TextArea label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},u={args:{isDisabled:!0,labelProps:{label:"TextArea label"}}},h={args:{isInvalid:!0,labelProps:{label:"TextArea label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}},b={args:{withCharacterCounter:!0,maxLength:15,labelProps:{label:"TextArea label"}}},m={...l,args:{labelProps:{label:"TextArea label"},autoGrow:!0,maxHeight:300}},f={...l,args:{labelProps:{label:"TextArea label"},isCompact:!0,maxHeight:300,placeholder:"Type a message here"}};var j,R,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    "aria-label": "TextArea label"
  }
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,z,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var L,W,_;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,F,V;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var q,M,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    withCharacterCounter: true,
    maxLength: 15,
    labelProps: {
      label: "TextArea label"
    }
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label"
    },
    autoGrow: true,
    maxHeight: 300
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,oe;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea label"
    },
    isCompact: true,
    maxHeight: 300,
    placeholder: "Type a message here"
  }
}`,...(oe=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const He=["Basic","WithLabel","WithHint","Disabled","Invalid","WithCounter","AutoGrow","Compact"],_e=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:m,Basic:l,Compact:f,Disabled:u,Invalid:h,WithCounter:b,WithHint:p,WithLabel:d,__namedExportsOrder:He,default:Se},Symbol.toStringTag,{value:"Module"}));export{m as A,l as B,f as C,u as D,h as I,_e as T,d as W,p as a,b};
