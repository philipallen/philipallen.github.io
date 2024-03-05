import{a as $,b as s,u as w,j as i}from"./index-b51be3ed.js";import{a as ne}from"./index-583b5bb5.js";import{r as c}from"./index-c013ead5.js";import{I as le}from"./InputLabelTop-6a5dd95b.js";import{R as ie}from"./index-3215a802.js";import{I as ce,a as de}from"./InputAlert-78cf6765.js";import{O as pe,C as be}from"./CharactersCounter-88cdecf4.js";const f=navigator.userAgent.match(/firefox/gi),Y=$(le)`
  ${()=>s`
      width: 100%;
    `}
`,ue=$.div`
  display: flex;
  position: relative;

  ${({$scrollPercentage:o})=>{const{tokens:r}=w(),{textArea:a,scrollBar:e,outerField:t}=r;return s`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - ${e.width});
        height: ${a.innerShadow.height};
        pointer-events: none;
        opacity: ${a.innerShadow.opacity.inactive};
        transition: opacity 0.3s;
        ${()=>f?s`
                width: 100%;
              `:void 0}
      }
      &::before {
        top: 0px;
        box-shadow: 0 4px 4px inset;
        border-radius: ${t.radius} 0 0 0;
        ${()=>f?s`
                border-radius: 0 0 ${t.radius} ${t.radius};
              `:void 0}
      }
      &::after {
        bottom: 0px;
        box-shadow: 0 -4px 4px inset;
        border-radius: 0 0 0 ${t.radius};
        ${()=>f?s`
                border-radius: 0 0 ${t.radius} ${t.radius};
              `:void 0}
      }

      ${()=>o!==void 0&&o>0&&s`
          &::before {
            opacity: ${a.innerShadow.opacity.active};
          }
        `}

      ${()=>o!==void 0&&o<1&&s`
        &::after {
          opacity: ${a.innerShadow.opacity.active};
      `}
    `}}
`,he=$.textarea`
  ${()=>{const{tokens:o}=w(),{textArea:r,typography:a,scrollBar:e}=o,t=r.typographyVariant;return s`
      all: unset;
      width: 100%;
      height: 100%;

      resize: vertical;
      min-height: ${r.minHeight};
      padding: ${r.paddingVertical} ${r.paddingHorizontal};

      color: ${r.color.base};
      font-family: ${a.fontFamily[t]};
      font-size: ${a.fontSize[t]};
      line-height: ${a.lineHeight[t]};

      ${Y}:has(textarea:read-only) && {
        color: ${r.color.readOnly};
      }

      ${()=>f?s`
              scrollbar-color: ${e.thumbStroke.color.base} transparent;
              margin: 4px;
              padding-top: 4px;
              padding-bottom: 4px;
            `:void 0};

      &::-webkit-scrollbar {
        border-left-color: ${e.strokeLeft.color};
        border-left-width: ${e.strokeLeft.width};
        border-left-style: ${e.strokeLeft.style};
        width: ${e.width};
      }

      &::-webkit-scrollbar-thumb {
        outline-color: ${e.thumbStroke.color.base};
        outline-width: ${e.thumbStroke.width};
        outline-style: ${e.thumbStroke.style};
        border-radius: ${e.thumbStroke.radius};
        outline-offset: -5.5px;
      }

      &::-webkit-scrollbar-thumb:hover {
        outline-color: ${e.thumbStroke.color.hover};
      }
      &::-webkit-scrollbar-corner {
        background-color: transparent;
        border-left-color: ${e.strokeLeft.color};
        border-left-width: ${e.strokeLeft.width};
        border-left-style: ${e.strokeLeft.style};
      }

      &::-webkit-resizer {
        opacity: 0;
      }
    `}}
`,me=$(ie)`
  ${()=>{const{tokens:o}=w(),{textArea:r}=o;return f?s`
          display: none;
        `:s`
          position: absolute;
          right: 5px;
          bottom: 5px;
          width: 9px;
          height: 9px;
          pointer-events: none;
          color: ${r.resizeHandle.color};
        `}}
`;function O(o){var k;const{id:r,hasError:a,onChange:e,onScroll:t,testID:y="textarea",labelProps:Z,alertProps:A,...d}=o,p=c.useRef(null),T=c.useId(),{maxLength:v}=d,[ee,re]=c.useState(((k=d.value||d.defaultValue)==null?void 0:k.length)||0),[te,S]=c.useState(),L=()=>{const n=p.current;if(n){const{scrollTop:se,scrollHeight:P,offsetHeight:E}=n;E<P?S(se/(P-E)):S(void 0)}},ae=c.useCallback(n=>{L(),t==null||t(n)},[t]),oe=c.useCallback(n=>{re(n.target.value.length),e==null||e(n)},[e]);return c.useEffect(()=>{if(p.current){const n=new ResizeObserver(L);return n.observe(p.current),()=>n.disconnect()}},[p.current]),i.jsxs(ce,{gap:d.maxLength?"4px":"8px",alert:A?i.jsx(de,{...A,testID:`${y}-alert`}):void 0,children:[i.jsx(Y,{...Z,htmlFor:r||T,children:i.jsx(pe,{hasError:a,children:i.jsxs(ue,{$scrollPercentage:te,children:[i.jsx(he,{...d,ref:p,id:r||T,onChange:oe,onScroll:ae,"data-testid":y}),i.jsx(me,{})]})})}),v?i.jsx(be,{length:ee,maxLength:v,testID:`${y}-characters-counter`}):void 0]})}const xe={title:"Inputs/TextArea",component:O,render:function(r){function a(e){ne("onChange")(e)}return i.jsx(O,{...r,onChange:a})},argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},prefix:{control:"text"}},args:{hasError:!1,readOnly:!1}},l={args:{labelProps:{"aria-label":"TextArea"}}},b={...l,args:{labelProps:{label:"Labelled TextArea","aria-label":"Labelled TextArea"}}},u={...l,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information","aria-label":"TextArea with Hint"}}},h={args:{maxLength:15,labelProps:{label:"TextArea with Limit","aria-label":"TextArea with Limit"}}},m={...l,args:{hasError:!0,labelProps:{label:"TextArea with Error","aria-label":"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},x={...l,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea","aria-label":"Disabled TextArea"}}},g={...l,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea","aria-label":"ReadOnly TextArea"}}};var H,R,j;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var D,C,I;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Labelled TextArea",
      "aria-label": "Labelled TextArea"
    }
  }
}`,...(I=(C=b.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var W,z,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information",
      "aria-label": "TextArea with Hint"
    }
  }
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var _,F,V;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextArea with Limit",
      "aria-label": "TextArea with Limit"
    }
  }
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var q,M,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,K,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea",
      "aria-label": "Disabled TextArea"
    }
  }
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea",
      "aria-label": "ReadOnly TextArea"
    }
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ge=["Basic","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],Se=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:x,ReadOnly:g,WithError:m,WithHint:u,WithLabel:b,WithLimit:h,__namedExportsOrder:ge,default:xe},Symbol.toStringTag,{value:"Module"}));export{l as B,x as D,g as R,Se as T,b as W,u as a,h as b,m as c};
