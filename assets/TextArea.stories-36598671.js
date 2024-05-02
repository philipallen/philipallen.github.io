import{j as i}from"./jsx-runtime-6eef64cc.js";import{a as be}from"./index-583b5bb5.js";import{r as l}from"./index-c013ead5.js";import{a as me}from"./index-f9a152de.js";import{i as he}from"./react-textarea-autosize.browser.esm-05f9ff93.js";import{a as A,b as f,u as re}from"./index-2b4c4340.js";import{I as xe}from"./InputLabelTop-8b2b7093.js";import{I as ge,a as fe}from"./InputAlert-a383ad59.js";import{O as we,C as ye}from"./CharactersCounter-40865d51.js";const ae=A(xe)`
  ${()=>f`
      width: 100%;
    `}
`,Te=A.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:s})=>{const{tokens:e}=re(),{textArea:a,outerField:r}=e;return f`
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

      ${()=>(s==="TOP"||s==="BOTH")&&f`
          &::before {
            opacity: ${a.innerShadow.opacity.active};
          }
        `}

      ${()=>(s==="BOTTOM"||s==="BOTH")&&f`
        &::after {
          opacity: ${a.innerShadow.opacity.active};
      `}
    `}}
`,Ae=A(he)`
  ${()=>{const{tokens:s}=re(),{textArea:e,typography:a,scrollBar:r,outerField:y}=s,n=e.typographyVariant;return f`
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
      font-family: ${a.fontFamily[n]};
      font-size: ${a.fontSize[n]};
      line-height: ${a.lineHeight[n]};

      ${ae}:has(textarea:read-only) && {
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
          border: 3.5px solid ${y.backgroundColor};
        }
      }
    `}}
`;function E(s){var C;const{id:e,hasError:a,autoGrow:r,autoGrowMaxLines:y,onChange:n,onScroll:w,testID:T="textarea",labelProps:$,alertProps:S,...c}=s,p=l.useRef(null),P=l.useId(),v=l.useId(),{labelHint:te}=$,{maxLength:L}=c,[oe,se]=l.useState(((C=c.value||c.defaultValue)==null?void 0:C.length)||0),[ne,le]=l.useState(null),O=()=>{const o=p.current;if(o){const{scrollTop:pe,scrollHeight:de,offsetHeight:ue}=o;le(me.determineInnerShadowToDisplay(pe,de,ue))}},ie=l.useCallback(o=>{O(),w==null||w(o)},[w]),ce=l.useCallback(o=>{se(o.target.value.length),n==null||n(o)},[n]);return l.useEffect(()=>{if(p.current){const o=new ResizeObserver(O);return o.observe(p.current),()=>o.disconnect()}},[p.current]),i.jsxs(ge,{gap:c.maxLength?"4px":"8px",alert:S?i.jsx(fe,{...S,testID:`${T}-alert`}):void 0,children:[i.jsx(ae,{...$,labelHintID:v,htmlFor:e||P,children:i.jsx(we,{hasError:a,children:i.jsx(Te,{$displayInnerShadow:ne,children:i.jsx(Ae,{...c,ref:p,id:e||P,onChange:ce,onScroll:ie,maxRows:r?y||1/0:4,"aria-describedby":te?v:void 0,"data-testid":T})})})}),L?i.jsx(ye,{length:oe,maxLength:L,testID:`${T}-characters-counter`}):void 0]})}const $e={title:"Inputs/TextArea",component:E,render:function(e){function a(r){be("onChange")(r)}return i.jsx(E,{...e,onChange:a})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{autoGrow:!1,hasError:!1,readOnly:!1}},t={args:{labelProps:{"aria-label":"TextArea"}}},d={...t,args:{labelProps:{label:"TextArea with AutoGrow"},autoGrow:!0,autoGrowMaxLines:10}},u={...t,args:{labelProps:{label:"TextArea with Label"}}},b={...t,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information"}}},m={args:{maxLength:15,labelProps:{label:"TextArea with Limit"}}},h={...t,args:{hasError:!0,labelProps:{label:"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},x={...t,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea"}}},g={...t,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea"}}};var H,I,k;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var B,D,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with AutoGrow"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var j,W,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Label"
    }
  }
}`,...(R=(W=u.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,z,M;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(M=(z=b.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,V,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextArea with Limit"
    }
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,K,N;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    labelProps: {
      label: "TextArea with Error"
    },
    alertProps: {
      severity: "error",
      children: "Error description over two lines if required."
    }
  }
}`,...(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea"
    }
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea"
    }
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Se=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],Be=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:d,Basic:t,Disabled:x,ReadOnly:g,WithError:h,WithHint:b,WithLabel:u,WithLimit:m,__namedExportsOrder:Se,default:$e},Symbol.toStringTag,{value:"Module"}));export{d as A,t as B,x as D,g as R,Be as T,u as W,b as a,m as b,h as c};
