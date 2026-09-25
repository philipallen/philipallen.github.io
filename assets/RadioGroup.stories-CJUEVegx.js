import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{fn as C}from"./index-DeN4tkzB.js";import{r as S}from"./index-BVaTkfsr.js";import{b as E,c as O,$ as q,a as F}from"./RadioGroup-DO_AH0r_.js";import{u,i as g,a as b}from"./index-BpMil6Tx.js";import{R as N}from"./ReactAriaProviders-CP7eKay2.js";import{a as z,I as M,b as J}from"./InputLabelTop--1mm_taL.js";import{I as K}from"./InputLabelRight-B4oFuhxp.js";const Q=b(E)`
  ${()=>{const{tokens:a}=u(),{radioGroup:e}=a;return g`
      display: grid;
      gap: ${e.list.gap};
    `}}
`,H=S.forwardRef((a,e)=>{const{labelProps:p,alerts:r,testID:h="radio-group",...m}=a,{tokens:L}=u(),{radioGroup:W}=L;return o.jsx(N,{externallyLabelledBy:a["aria-labelledby"],externallyDescribedBy:a["aria-describedby"],labelProps:p,alerts:r,children:({labelledBy:_,describedBy:$})=>o.jsx(z,{ref:e,...p,children:o.jsx(M,{gap:W.gap,alert:r&&o.jsx(J,{alerts:r}),children:o.jsx(O.Provider,{value:{"aria-describedby":$},children:o.jsx(Q,{...m,"aria-labelledby":_,"aria-describedby":$,"data-testid":h})})})})})});H.displayName="RadioGroup";const s=b(q)`
  display: contents;
`,U=b(F)`
  display: inline-grid;
`,V=b.div`
  ${()=>{const{tokens:a}=u(),{radio:e}=a;return g`
      position: relative;
      display: grid;
      place-items: center;
      width: ${e.width};
      height: ${e.height};
      background: ${e.backgroundColor.base};
      border-radius: 100%;
      outline-width: ${e.stroke.width.base};
      outline-style: ${e.stroke.style.base};
      outline-color: ${e.stroke.color.base};
      outline-offset: -1px;
      cursor: pointer;

      ${s}[data-invalid] && {
        outline-width: ${e.stroke.width.error};
        outline-color: ${e.stroke.color.error};
      }

      ${s}[data-hovered] && {
        outline-width: ${e.stroke.width.hover};
        outline-color: ${e.stroke.color.hover};
      }

      ${s}[data-disabled] && {
        outline-width: ${e.stroke.width.disabled};
        outline-color: ${e.stroke.color.disabled};
        cursor: not-allowed;
      }
    `}}
`,X=b.div`
  ${()=>{const{tokens:a}=u(),{radio:e}=a;return[g`
        display: block;
        width: ${e.icon.width};
        height: ${e.icon.height};
        background: ${e.icon.color.base};
        border-radius: 100%;

        ${s}[data-hovered] && {
          background: ${e.icon.color.hover};
        }

        ${s}[data-disabled] && {
          background: ${e.icon.color.disabled};
        }
      `]}}
`,t=S.forwardRef((a,e)=>{const{labelProps:p,testID:r="radio",...h}=a;return o.jsx(s,{...h,children:o.jsx(U,{ref:e,"data-testid":r,children:({isSelected:m})=>o.jsx(K,{...p,children:o.jsx(V,{children:m&&o.jsx(X,{"data-testid":`${r}-selected-icon`})})})})})});t.displayName="Radio";const Y={title:"Components/Inputs/RadioGroup",component:H,argTypes:{isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},children:{control:{disable:!0}}},args:{isDisabled:!1,isInvalid:!1,children:o.jsxs(o.Fragment,{children:[o.jsx(t,{labelProps:{label:"Bacon"},value:"bacon"}),o.jsx(t,{labelProps:{label:"Cheese"},value:"cheese"}),o.jsx(t,{labelProps:{label:"Onions"},value:"onions"}),o.jsx(t,{labelProps:{label:"Lettuce"},value:"lettuce"}),o.jsx(t,{labelProps:{label:"Tomato"},value:"tomato"})]}),onChange:C()}},l={args:{"aria-label":"RadioGroup label"}},i={args:{labelProps:{label:"RadioGroup label",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},n={args:{labelProps:{label:"RadioGroup label",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},d={args:{isDisabled:!0,labelProps:{label:"RadioGroup label"}}},c={args:{isInvalid:!0,labelProps:{label:"RadioGroup label"},alerts:[{severity:"error",children:"Error description over two lines if required."}]}};var f,P,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    "aria-label": "RadioGroup label"
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var v,y,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,k,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    labelProps: {
      label: "RadioGroup label",
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
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,G,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    labelProps: {
      label: "RadioGroup label"
    }
  }
}`,...(B=(G=d.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var A,D,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    labelProps: {
      label: "RadioGroup label"
    },
    alerts: [{
      severity: "error",
      children: "Error description over two lines if required."
    }]
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Z=["Basic","WithLabel","WithHint","Disabled","Invalid"],ne=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:d,Invalid:c,WithHint:n,WithLabel:i,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as B,d as D,c as I,ne as R,i as W,n as a};
