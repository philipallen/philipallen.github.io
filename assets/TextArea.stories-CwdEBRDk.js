import{f as be}from"./index-Cnk2rnxF.js";import{j as i}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{c as he}from"./index-Cee7vv5h.js";import{i as ge}from"./react-textarea-autosize.browser.esm-Dr6hbtpk.js";import{a as v,b as T,u as re,p as k}from"./index-CWEVnOcG.js";import{I as fe}from"./InputLabelTop-B2pFmb23.js";import{I as xe,a as ye}from"./InputAlert-PchpsvMy.js";import{O as Te,C as we}from"./CharactersCounter-DTu2ZANd.js";const ae=v(fe)`
  ${()=>T`
      width: 100%;
    `}
`,ve=v.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:o})=>{const{tokens:e}=re(),{textArea:t,outerField:r}=e;return T`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: ${t.innerShadow.height};
        pointer-events: none;
        opacity: ${t.innerShadow.opacity.inactive};
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

      ${()=>(o==="TOP"||o==="BOTH")&&T`
          &::before {
            opacity: ${t.innerShadow.opacity.active};
          }
        `}

      ${()=>(o==="BOTTOM"||o==="BOTH")&&T`
        &::after {
          opacity: ${t.innerShadow.opacity.active};
      `}
    `}}
`,Pe=v(ge)`
  ${()=>{const{tokens:o}=re(),{textArea:e,typography:t,scrollBar:r,outerField:w}=o,s=e.typography.variant,c=k(t.fontSize[s]),p=k(t.lineHeight[s]);return T`
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
      font-family: ${t.fontFamily[s]};
      font-size: ${c};
      line-height: ${p};

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
          border: 3.5px solid ${w.backgroundColor};
        }
      }
    `}}
`;function te(o){var $;const{id:e,hasError:t,autoGrow:r,autoGrowMaxLines:w,onChange:s,onScroll:c,testID:p="textarea",labelProps:P,alertProps:I,...u}=o,m=l.useRef(null),L=l.useId(),S=l.useId(),{labelHint:ne}=P,{maxLength:A}=u,[oe,se]=l.useState((($=u.value||u.defaultValue)==null?void 0:$.length)||0),[le,ie]=l.useState(null),H=()=>{const n=m.current;if(n){const{scrollTop:ue,scrollHeight:me,offsetHeight:de}=n;ie(he.determineInnerShadowToDisplay(ue,me,de))}},ce=l.useCallback(n=>{H(),c==null||c(n)},[c]),pe=l.useCallback(n=>{se(n.target.value.length),s==null||s(n)},[s]);return l.useEffect(()=>{if(m.current){const n=new ResizeObserver(H);return n.observe(m.current),()=>n.disconnect()}},[m.current]),i.jsxs(xe,{gap:u.maxLength?"4px":"8px",alert:I?i.jsx(ye,{...I,testID:`${p}-alert`}):void 0,children:[i.jsx(ae,{...P,labelHintID:S,htmlFor:e||L,children:i.jsx(Te,{hasError:t,children:i.jsx(ve,{$displayInnerShadow:le,children:i.jsx(Pe,{...u,ref:m,id:e||L,onChange:pe,onScroll:ce,maxRows:r?w||1/0:4,"aria-describedby":ne?S:void 0,"data-testid":p})})})}),A?i.jsx(we,{length:oe,maxLength:A,testID:`${p}-characters-counter`}):void 0]})}te.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},autoGrow:{required:!1,tsType:{name:"boolean"},description:""},autoGrowMaxLines:{required:!1,tsType:{name:"number"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> &
  Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID"> & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const Ie={title:"Components/Inputs/TextArea",component:te,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{onChange:be(),autoGrow:!1,hasError:!1,readOnly:!1}},a={args:{labelProps:{"aria-label":"TextArea"}}},d={...a,args:{labelProps:{label:"Label for TextArea"},autoGrow:!0,autoGrowMaxLines:10}},b={...a,args:{labelProps:{label:"Label for TextArea"}}},h={...a,args:{labelProps:{label:"Label for TextArea",labelHint:"Additional information"}}},g={args:{maxLength:15,labelProps:{label:"Label for TextArea"}}},f={...a,args:{hasError:!0,labelProps:{label:"Label for TextArea"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},x={...a,args:{disabled:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}},y={...a,args:{readOnly:!0,value:"Some text",labelProps:{label:"Label for TextArea"}}};var O,C,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,W,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var B,F,j;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(j=(F=b.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var G,R,_;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "Label for TextArea",
      labelHint: "Additional information"
    }
  }
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,M,N;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(N=(M=g.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var V,J,X;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "Label for TextArea"
    }
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Le=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],We=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:d,Basic:a,Disabled:x,ReadOnly:y,WithError:f,WithHint:h,WithLabel:b,WithLimit:g,__namedExportsOrder:Le,default:Ie},Symbol.toStringTag,{value:"Module"}));export{d as A,a as B,x as D,y as R,We as T,b as W,h as a,g as b,f as c};
