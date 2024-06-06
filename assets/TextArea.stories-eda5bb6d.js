import{f as de}from"./index-6eef940f.js";import{j as i}from"./jsx-runtime-6eef64cc.js";import{r as l}from"./index-c013ead5.js";import{a as be}from"./index-f15beae1.js";import{i as he}from"./react-textarea-autosize.browser.esm-ede8cc8b.js";import{a as T,b as f,u as ee}from"./index-1940508f.js";import{I as ge}from"./InputLabelTop-ca51ab3b.js";import{I as xe,a as fe}from"./InputAlert-7e99775e.js";import{O as ye,C as we}from"./CharactersCounter-fa0177be.js";const re=T(ge)`
  ${()=>f`
      width: 100%;
    `}
`,ve=T.div`
  display: flex;
  position: relative;

  ${({$displayInnerShadow:o})=>{const{tokens:e}=ee(),{textArea:t,outerField:r}=e;return f`
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

      ${()=>(o==="TOP"||o==="BOTH")&&f`
          &::before {
            opacity: ${t.innerShadow.opacity.active};
          }
        `}

      ${()=>(o==="BOTTOM"||o==="BOTH")&&f`
        &::after {
          opacity: ${t.innerShadow.opacity.active};
      `}
    `}}
`,Te=T(he)`
  ${()=>{const{tokens:o}=ee(),{textArea:e,typography:t,scrollBar:r,outerField:w}=o,s=e.typography.variant;return f`
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
      font-size: ${t.fontSize[s]};
      line-height: ${t.lineHeight[s]};

      ${re}:has(textarea:read-only) && {
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
`;function ae(o){var $;const{id:e,hasError:t,autoGrow:r,autoGrowMaxLines:w,onChange:s,onScroll:y,testID:v="textarea",labelProps:P,alertProps:A,...c}=o,p=l.useRef(null),I=l.useId(),H=l.useId(),{labelHint:te}=P,{maxLength:S}=c,[ne,oe]=l.useState((($=c.value||c.defaultValue)==null?void 0:$.length)||0),[se,le]=l.useState(null),O=()=>{const n=p.current;if(n){const{scrollTop:pe,scrollHeight:ue,offsetHeight:me}=n;le(be.determineInnerShadowToDisplay(pe,ue,me))}},ie=l.useCallback(n=>{O(),y==null||y(n)},[y]),ce=l.useCallback(n=>{oe(n.target.value.length),s==null||s(n)},[s]);return l.useEffect(()=>{if(p.current){const n=new ResizeObserver(O);return n.observe(p.current),()=>n.disconnect()}},[p.current]),i.jsxs(xe,{gap:c.maxLength?"4px":"8px",alert:A?i.jsx(fe,{...A,testID:`${v}-alert`}):void 0,children:[i.jsx(re,{...P,labelHintID:H,htmlFor:e||I,children:i.jsx(ye,{hasError:t,children:i.jsx(ve,{$displayInnerShadow:se,children:i.jsx(Te,{...c,ref:p,id:e||I,onChange:ce,onScroll:ie,maxRows:r?w||1/0:4,"aria-describedby":te?H:void 0,"data-testid":v})})})}),S?i.jsx(we,{length:ne,maxLength:S,testID:`${v}-characters-counter`}):void 0]})}ae.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},autoGrow:{required:!1,tsType:{name:"boolean"},description:""},autoGrowMaxLines:{required:!1,tsType:{name:"number"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  label: JSX.Element;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"label",value:{name:"JSX.Element",required:!0}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'}]}],raw:'Pick<InputLabelTopBaseProps, "labelHint" | "labelHintID">'},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const Pe={title:"Components/Inputs/TextArea",component:ae,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{onChange:de(),autoGrow:!1,hasError:!1,readOnly:!1}},a={args:{labelProps:{"aria-label":"TextArea"}}},u={...a,args:{labelProps:{label:"TextArea with AutoGrow"},autoGrow:!0,autoGrowMaxLines:10}},m={...a,args:{labelProps:{label:"TextArea with Label"}}},d={...a,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information"}}},b={args:{maxLength:15,labelProps:{label:"TextArea with Limit"}}},h={...a,args:{hasError:!0,labelProps:{label:"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},g={...a,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea"}}},x={...a,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea"}}};var D,k,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(L=(k=a.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var C,W,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with AutoGrow"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,B,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Label"
    }
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,j,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var _,M,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLength: 15,
    labelProps: {
      label: "TextArea with Limit"
    }
  }
}`,...(z=(M=b.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var N,V,J;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var X,K,Q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea"
    }
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea"
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ae=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],We=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:u,Basic:a,Disabled:g,ReadOnly:x,WithError:h,WithHint:d,WithLabel:m,WithLimit:b,__namedExportsOrder:Ae,default:Pe},Symbol.toStringTag,{value:"Module"}));export{u as A,a as B,g as D,x as R,We as T,m as W,d as a,b,h as c};
