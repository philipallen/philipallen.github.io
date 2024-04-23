import{a as y,b as w,u as Z,j as l}from"./index-e76b8df1.js";import{a as ue}from"./index-583b5bb5.js";import{r as i}from"./index-c013ead5.js";import{a as de}from"./index-f9a152de.js";import{i as be}from"./react-textarea-autosize.browser.esm-05f9ff93.js";import{I as he}from"./InputLabelTop-e8979608.js";import{I as me,a as xe}from"./InputAlert-e9669a4d.js";import{O as ge,C as we}from"./CharactersCounter-a20fd925.js";const ee=y(he)`
  ${()=>w`
      width: 100%;
    `}
`,fe=y.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:n})=>{const{tokens:e}=Z(),{textArea:a,outerField:r}=e;return w`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${a.innerShadow.height};
        pointer-events: none;
        opacity: ${a.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px inset;
        border-radius: ${r.radius} ${r.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 ${r.radius} ${r.radius};
      }

      ${()=>(n==="TOP"||n==="BOTH")&&w`
          &::before {
            opacity: ${a.innerShadow.opacity.active};
          }
        `}

      ${()=>(n==="BOTTOM"||n==="BOTH")&&w`
        &::after {
          opacity: ${a.innerShadow.opacity.active};
      `}
    `}}
`,Ae=y(be)`
  ${()=>{const{tokens:n}=Z(),{textArea:e,typography:a,scrollBar:r,outerField:A}=n,s=e.typographyVariant;return w`
      all: unset;
      white-space: pre-wrap;
      word-wrap: break-word;

      width: 100%;
      resize: none;
      min-height: ${e.minHeight};
      height: 100%;
      padding: calc(${e.paddingVertical} - 2px)
        calc(${e.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${e.color.base};
      font-family: ${a.fontFamily[s]};
      font-size: ${a.fontSize[s]};
      line-height: ${a.lineHeight[s]};

      ${ee}:has(textarea:read-only) && {
        color: ${e.color.readOnly};
      }

      scrollbar-color: ${r.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${r.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${r.thumbColor};
          border-radius: ${r.radius};
          border: 3.5px solid ${A.backgroundColor};
        }
      }
    `}}
`;function v(n){var O;const{id:e,hasError:a,autoGrow:r,autoGrowMaxLines:A,onChange:s,onScroll:f,testID:T="textarea",labelProps:re,alertProps:$,...c}=n,p=i.useRef(null),S=i.useId(),{maxLength:L}=c,[ae,te]=i.useState(((O=c.value||c.defaultValue)==null?void 0:O.length)||0),[oe,ne]=i.useState(null),P=()=>{const o=p.current;if(o){const{scrollTop:ie,scrollHeight:ce,offsetHeight:pe}=o;ne(de.determineInnerShadowToDisplay(ie,ce,pe))}},se=i.useCallback(o=>{P(),f==null||f(o)},[f]),le=i.useCallback(o=>{te(o.target.value.length),s==null||s(o)},[s]);return i.useEffect(()=>{if(p.current){const o=new ResizeObserver(P);return o.observe(p.current),()=>o.disconnect()}},[p.current]),l.jsxs(me,{gap:c.maxLength?"4px":"8px",alert:$?l.jsx(xe,{...$,testID:`${T}-alert`}):void 0,children:[l.jsx(ee,{...re,htmlFor:e||S,children:l.jsx(ge,{hasError:a,children:l.jsx(fe,{$displayInnerShadow:oe,children:l.jsx(Ae,{...c,ref:p,id:e||S,onChange:le,onScroll:se,"data-testid":T,maxRows:r?A||1/0:4})})})}),L?l.jsx(we,{length:ae,maxLength:L,testID:`${T}-characters-counter`}):void 0]})}const Te={title:"Inputs/TextArea",component:v,render:function(e){function a(r){ue("onChange")(r)}return l.jsx(v,{...e,onChange:a})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{autoGrow:!1,hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextArea"}}},u={...t,args:{labelProps:{label:"TextArea with AutoGrow","aria-label":"TextArea with AutoGrow"},autoGrow:!0,autoGrowMaxLines:10}},d={...t,args:{labelProps:{label:"TextArea with Label","aria-label":"TextArea with Label"}}},b={...t,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information","aria-label":"TextArea with Hint"}}},h={args:{maxLength:15,labelProps:{label:"TextArea with Limit","aria-label":"TextArea with Limit"}}},m={...t,args:{hasError:!0,labelProps:{label:"TextArea with Error","aria-label":"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},x={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea","aria-label":"Disabled TextArea"}}},g={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea","aria-label":"ReadOnly TextArea"}}};var E,C,G;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(G=(C=t.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var H,k,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with AutoGrow",
      "aria-label": "TextArea with AutoGrow"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var B,I,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Label",
      "aria-label": "TextArea with Label"
    }
  }
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var R,W,_;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information",
      "aria-label": "TextArea with Hint"
    }
  }
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,M,F;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextArea with Limit",
      "aria-label": "TextArea with Limit"
    }
  }
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,q,J;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "TextArea with Error",
      "aria-label": "TextArea with Error"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,N,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea",
      "aria-label": "Disabled TextArea"
    }
  }
}`,...(Q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea",
      "aria-label": "ReadOnly TextArea"
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ye=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],Ge=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:u,Basic:t,Disabled:x,ReadOnly:g,WithError:m,WithHint:b,WithLabel:d,WithLimit:h,__namedExportsOrder:ye,default:Te},Symbol.toStringTag,{value:"Module"}));export{u as A,t as B,x as D,g as R,Ge as T,d as W,b as a,h as b,m as c};
