import{a as T,b as p,u as y,j as n}from"./index-1154a484.js";import{a as se}from"./index-583b5bb5.js";import{r as i}from"./index-c013ead5.js";import{d as ne}from"./index-f91edb4f.js";import{R as le}from"./index-8544f6ee.js";import{I as ie}from"./InputLabelTop-a87f03df.js";import{I as ce,a as pe}from"./InputAlert-f9984731.js";import{O as de,C as be}from"./CharactersCounter-f1f8fb68.js";const N=T(ie)`
  ${()=>p`
      width: 100%;
    `}
`,ue=T.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:t})=>{const{tokens:r}=y(),{textArea:a,outerField:e}=r;return p`
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
        border-radius: ${e.radius} ${e.radius} 0 0;
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 ${e.radius} ${e.radius};
      }

      ${()=>(t==="TOP"||t==="BOTH")&&p`
          &::before {
            opacity: ${a.innerShadow.opacity.active};
          }
        `}

      ${()=>(t==="BOTTOM"||t==="BOTH")&&p`
        &::after {
          opacity: ${a.innerShadow.opacity.active};
      `}
    `}}
`,he=T.textarea`
  ${()=>{const{tokens:t}=y(),{textArea:r,typography:a,scrollBar:e,outerField:c}=t,l=r.typographyVariant;return p`
      all: unset;
      width: 100%;
      height: 100%;

      white-space: pre-wrap;
      word-wrap: break-word;
      resize: vertical;
      min-height: ${r.minHeight};
      padding: calc(${r.paddingVertical} - 2px)
        calc(${r.paddingHorizontal} - 2px);
      margin: 2px;

      color: ${r.color.base};
      font-family: ${a.fontFamily[l]};
      font-size: ${a.fontSize[l]};
      line-height: ${a.lineHeight[l]};

      ${N}:has(textarea:read-only) && {
        color: ${r.color.readOnly};
      }

      &::-webkit-resizer {
        opacity: 0;
      }

      scrollbar-color: ${e.thumbColor} transparent;

      /* Workaround for Safari */
      @supports not (scrollbar-color: ${e.thumbColor} transparent) {
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-corner {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: ${e.thumbColor};
          border-radius: ${e.radius};
          border: 3.5px solid ${c.backgroundColor};
        }
      }
    `}}
`,me=T(le)`
  ${()=>{const{tokens:t}=y(),{textArea:r}=t;return p`
      display: none;

      @supports selector(::-webkit-resizer) {
        display: block;
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 9px;
        height: 9px;
        pointer-events: none;
        color: ${r.resizeHandle.color};
      }
    `}}
`;function O(t){var v;const{id:r,hasError:a,onChange:e,onScroll:c,testID:l="textarea",labelProps:Q,alertProps:A,...d}=t,b=i.useRef(null),w=i.useId(),{maxLength:$}=d,[U,X]=i.useState(((v=d.value||d.defaultValue)==null?void 0:v.length)||0),[Y,Z]=i.useState(null),S=()=>{const o=b.current;if(o){const{scrollTop:ae,scrollHeight:te,offsetHeight:oe}=o;Z(ne.determineInnerShadowToDisplay(ae,te,oe))}},ee=i.useCallback(o=>{S(),c==null||c(o)},[c]),re=i.useCallback(o=>{X(o.target.value.length),e==null||e(o)},[e]);return i.useEffect(()=>{if(b.current){const o=new ResizeObserver(S);return o.observe(b.current),()=>o.disconnect()}},[b.current]),n.jsxs(ce,{gap:d.maxLength?"4px":"8px",alert:A?n.jsx(pe,{...A,testID:`${l}-alert`}):void 0,children:[n.jsx(N,{...Q,htmlFor:r||w,children:n.jsx(de,{hasError:a,children:n.jsxs(ue,{$displayInnerShadow:Y,children:[n.jsx(he,{...d,ref:b,id:r||w,onChange:re,onScroll:ee,"data-testid":l}),n.jsx(me,{})]})})}),$?n.jsx(be,{length:U,maxLength:$,testID:`${l}-characters-counter`}):void 0]})}const xe={title:"Inputs/TextArea",component:O,render:function(r){function a(e){se("onChange")(e)}return n.jsx(O,{...r,onChange:a})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"}},args:{hasError:!1,readOnly:!1}},s={args:{labelProps:{"aria-label":"TextArea"}}},u={...s,args:{labelProps:{label:"Labelled TextArea","aria-label":"Labelled TextArea"}}},h={...s,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information","aria-label":"TextArea with Hint"}}},m={args:{maxLength:15,labelProps:{label:"TextArea with Limit","aria-label":"TextArea with Limit"}}},x={...s,args:{hasError:!0,labelProps:{label:"TextArea with Error","aria-label":"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},g={...s,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea","aria-label":"Disabled TextArea"}}},f={...s,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea","aria-label":"ReadOnly TextArea"}}};var P,L,k;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var E,H,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextArea",
      "aria-label": "Labelled TextArea"
    }
  }
}`,...(C=(H=u.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var D,R,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information",
      "aria-label": "TextArea with Hint"
    }
  }
}`,...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var B,I,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextArea with Limit",
      "aria-label": "TextArea with Limit"
    }
  }
}`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,_,F;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(_=x.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var V,q,M;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea",
      "aria-label": "Disabled TextArea"
    }
  }
}`,...(M=(q=g.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea",
      "aria-label": "ReadOnly TextArea"
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["Basic","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,Disabled:g,ReadOnly:f,WithError:x,WithHint:h,WithLabel:u,WithLimit:m,__namedExportsOrder:ge,default:xe},Symbol.toStringTag,{value:"Module"}));export{s as B,g as D,f as R,Oe as T,u as W,h as a,m as b,x as c};
