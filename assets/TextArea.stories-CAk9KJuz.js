import{f as ge}from"./index-iP1lhtUC.js";import{j as l}from"./jsx-runtime-sfY7k0Xq.js";import{r as n}from"./index-CcKhGcwW.js";import{g as Pe}from"./index-CmedeESG.js";import{i as Ae}from"./react-textarea-autosize.browser.esm-BTkYjTgr.js";import{a as oe,u as te,b as y,p as R}from"./index-D1OOBdzz.js";import{I as ye}from"./InputLabelTop-CeuiGwLx.js";import{I as we,a as Te}from"./InputAlerts-4hjqy13M.js";import{O as $e}from"./OuterField-DhRloU93.js";import{C as Le}from"./CharactersCounter-BlGpyAKI.js";import{b as Se}from"./AlertAssociationProps-CEhVpbTc.js";import{$ as ve}from"./utils-BPOuYIA2.js";const Ie=oe.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:s})=>{const{tokens:r}=te(),{textArea:e,outerField:a}=r;return y`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${e.innerShadow.height};
        pointer-events: none;
        opacity: ${e.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px ${e.innerShadow.color} inset;
        border-radius: ${a.radius} ${a.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px ${e.innerShadow.color} inset;
        border-radius: 0 0 ${a.radius} ${a.radius};
      }

      ${()=>(s==="TOP"||s==="BOTH")&&y`
          &::before {
            opacity: ${e.innerShadow.opacity.active};
          }
        `}

      ${()=>(s==="BOTTOM"||s==="BOTH")&&y`
        &::after {
          opacity: ${e.innerShadow.opacity.active};
      `}
    `}}
`,Be=oe(Ae)`
  ${()=>{const{tokens:s}=te(),{textArea:r,typography:e,scrollBar:a,outerField:w}=s,p=r.typography.variant,i=R(e.fontSize[p]),c=R(e.lineHeight[p]);return y`
      all: unset;
      white-space: pre-wrap;
      word-wrap: break-word;

      width: 100%;
      resize: none;
      min-height: ${r.minHeight};
      height: 100%;
      padding: calc(${r.paddingVertical} - 2px)
        calc(${r.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${r.color.base};
      font-family: ${e.fontFamily[p]};
      font-size: ${i};
      line-height: ${c};

      &:read-only {
        color: ${r.color.readOnly};
      }
      &:disabled {
        color: ${r.color.disabled};
      }

      scrollbar-color: ${a.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${a.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${a.thumbColor};
          border-radius: ${a.radius};
          border: 3.5px solid ${w.backgroundColor};
        }
      }
    `}}
`,se=n.forwardRef((s,r)=>{var O;const{id:e,hasError:a,autoGrow:w,autoGrowMaxLines:p,onChange:i,onScroll:c,testID:T="textarea",labelProps:$,alertProps:P,noCounter:ne,...A}=s,d=ve(r),L=n.useId(),S=n.useId(),v=n.useId(),{labelHint:le}=$,{maxLength:I}=A,B=!ne&&I,ie=Se(v,s,le?S:void 0),[ce,pe]=n.useState(((O=A.value||A.defaultValue)==null?void 0:O.length)||0),[de,ue]=n.useState(null),H=()=>{const t=d.current;if(t){const{scrollTop:he,scrollHeight:fe,offsetHeight:xe}=t;ue(Pe.determineInnerShadowToDisplay(he,fe,xe))}},be=n.useCallback(t=>{H(),c==null||c(t)},[c]),me=n.useCallback(t=>{pe(t.target.value.length),i==null||i(t)},[i]);return n.useEffect(()=>{if(d.current){const t=new ResizeObserver(H);return t.observe(d.current),()=>t.disconnect()}},[d.current]),l.jsxs(we,{gap:B?"4px":"8px",alert:P&&l.jsx("div",{id:v,"data-testid":`${T}-alerts`,children:l.jsx(Te,{alerts:Array.isArray(P)?P:[P]})}),children:[l.jsx(ye,{...$,labelHintID:S,htmlFor:e||L,children:l.jsx($e,{hasError:a,children:l.jsx(Ie,{$displayInnerShadow:de,children:l.jsx(Be,{...A,...ie,ref:d,id:e||L,onChange:me,onScroll:be,maxRows:w?p||1/0:4,"data-testid":T})})})}),B?l.jsx(Le,{length:ce,maxLength:I,testID:`${T}-characters-counter`}):void 0]})});se.displayName="TextArea";const He={title:"Components/Inputs/TextArea",component:se,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"}},args:{onChange:ge(),autoGrow:!1,hasError:!1,readOnly:!1}},o={args:{labelProps:{"aria-label":"TextArea"}}},u={...o,args:{labelProps:{label:"Label for TextArea"},autoGrow:!0,autoGrowMaxLines:10}},b={...o,args:{labelProps:{label:"Label for TextArea",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={...o,args:{labelProps:{label:"Label for TextArea",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},h={args:{maxLength:15,labelProps:{label:"Label for TextArea"}}},f={...o,args:{hasError:!0,labelProps:{label:"Label for TextArea"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},x={...o,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}},g={...o,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}};var k,C,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,D,W;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var G,z,_;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea",
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
}`,...(_=(z=b.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var M,F,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea",
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
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var q,N,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(J=(N=h.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "Label for TextArea"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Oe=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],qe=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:u,Basic:o,Disabled:x,ReadOnly:g,WithError:f,WithHint:m,WithLabel:b,WithLimit:h,__namedExportsOrder:Oe,default:He},Symbol.toStringTag,{value:"Module"}));export{u as A,o as B,x as D,g as R,qe as T,b as W,m as a,h as b,f as c};
