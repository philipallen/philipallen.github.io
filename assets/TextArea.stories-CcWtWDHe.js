import{f as fe}from"./index-iP1lhtUC.js";import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as o}from"./index-CcKhGcwW.js";import{h as ge}from"./index-CoGc3U6X.js";import{i as xe}from"./react-textarea-autosize.browser.esm-BTkYjTgr.js";import{a as ae,u as Pe,p as R,b as Ae}from"./index-5VPm3mt9.js";import{I as ye}from"./InputLabelTop-mpJNRpcb.js";import{I as Te,a as we}from"./InputAlerts-CqET0I5r.js";import{O as Le}from"./OuterField-DvoNBDpI.js";import{C as Se}from"./CharactersCounter-ENOmy08R.js";import{b as Ie}from"./AlertAssociationProps-CEhVpbTc.js";import{$ as ve}from"./utils-BPOuYIA2.js";const $e=ae.div`
  display: flex;
  position: relative;
  z-index: 0;
`,Be=ae(xe)`
  ${()=>{const{tokens:x}=Pe(),{textArea:a,typography:s,scrollBar:n,outerField:y}=x,c=a.typography.variant,l=R(s.fontSize[c]),i=R(s.lineHeight[c]);return Ae`
      all: unset;
      white-space: pre-wrap;
      word-wrap: break-word;

      width: 100%;
      resize: none;
      min-height: ${a.minHeight};
      height: 100%;
      padding: calc(${a.paddingVertical} - 2px)
        calc(${a.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${a.color.base};
      font-family: ${s.fontFamily[c]};
      font-size: ${l};
      line-height: ${i};

      &:read-only {
        color: ${a.color.readOnly};
      }
      &:disabled {
        color: ${a.color.disabled};
      }

      scrollbar-color: ${n.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${n.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${n.thumbColor};
          border-radius: ${n.radius};
          border: 3.5px solid ${y.backgroundColor};
        }
      }
    `}}
`,oe=o.forwardRef((x,a)=>{var H;const{id:s,hasError:n,autoGrow:y,autoGrowMaxLines:c,onChange:l,onScroll:i,testID:T="textarea",labelProps:w,alertProps:P,noCounter:te,...A}=x,p=ve(a),L=o.useId(),S=o.useId(),I=o.useId(),{labelHint:se}=w,{maxLength:v}=A,$=!te&&v,ne=Ie(I,x,se?S:void 0),[le,ie]=o.useState(((H=A.value||A.defaultValue)==null?void 0:H.length)||0),[ce,pe]=o.useState(null),B=()=>{const r=p.current;if(r){const{scrollTop:be,scrollHeight:me,offsetHeight:he}=r;pe(ge.determineInnerShadowToDisplay(be,me,he))}},ue=o.useCallback(r=>{B(),i==null||i(r)},[i]),de=o.useCallback(r=>{ie(r.target.value.length),l==null||l(r)},[l]);return o.useEffect(()=>{if(p.current){const r=new ResizeObserver(B);return r.observe(p.current),()=>r.disconnect()}},[p.current]),t.jsxs(Te,{gap:$?"4px":"8px",alert:P&&t.jsx("div",{id:I,"data-testid":`${T}-alerts`,children:t.jsx(we,{alerts:Array.isArray(P)?P:[P]})}),children:[t.jsx(ye,{...w,labelHintID:S,htmlFor:s||L,children:t.jsx(Le,{hasError:n,displayInnerShadow:ce,children:t.jsx($e,{children:t.jsx(Be,{...A,...ne,ref:p,id:s||L,onChange:de,onScroll:ue,maxRows:y?c||1/0:4,"data-testid":T})})})}),$?t.jsx(Se,{length:le,maxLength:v,testID:`${T}-characters-counter`}):void 0]})});oe.displayName="TextArea";const He={title:"Components/Inputs/TextArea",component:oe,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"}},args:{onChange:fe(),autoGrow:!1,hasError:!1,readOnly:!1}},e={args:{labelProps:{"aria-label":"TextArea"}}},u={...e,args:{labelProps:{label:"Label for TextArea"},autoGrow:!0,autoGrowMaxLines:10}},d={...e,args:{labelProps:{label:"Label for TextArea",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},b={...e,args:{labelProps:{label:"Label for TextArea",labelHint:"Additional information",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},m={args:{maxLength:15,labelProps:{label:"Label for TextArea"}}},h={...e,args:{hasError:!0,labelProps:{label:"Label for TextArea"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},f={...e,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}},g={...e,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}};var C,k,E;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(E=(k=e.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,j,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var W,G,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var _,M,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(M=b.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,q,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Re=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],qe=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:u,Basic:e,Disabled:f,ReadOnly:g,WithError:h,WithHint:b,WithLabel:d,WithLimit:m,__namedExportsOrder:Re,default:He},Symbol.toStringTag,{value:"Module"}));export{u as A,e as B,f as D,g as R,qe as T,d as W,b as a,m as b,h as c};
