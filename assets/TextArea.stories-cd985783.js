import{f as de}from"./index-6eef940f.js";import{j as i}from"./jsx-runtime-6eef64cc.js";import{r as l}from"./index-c013ead5.js";import{a as be}from"./index-7aa2f780.js";import{i as he}from"./react-textarea-autosize.browser.esm-05f9ff93.js";import{a as v,b as f,u as ee}from"./index-22f9e29b.js";import{I as ge}from"./InputLabelTop-37b968a9.js";import{I as xe,a as fe}from"./InputAlert-5a2c192a.js";import{O as ye,C as we}from"./CharactersCounter-e5c29d18.js";const re=v(ge)`
  ${()=>f`
      width: 100%;
    `}
`,Te=v.div`
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
`,ve=v(he)`
  ${()=>{const{tokens:o}=ee(),{textArea:e,typography:t,scrollBar:r,outerField:w}=o,s=e.typographyVariant;return f`
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
`;function ae(o){var H;const{id:e,hasError:t,autoGrow:r,autoGrowMaxLines:w,onChange:s,onScroll:y,testID:T="textarea",labelProps:A,alertProps:P,...c}=o,p=l.useRef(null),S=l.useId(),I=l.useId(),{labelHint:te}=A,{maxLength:O}=c,[ne,oe]=l.useState(((H=c.value||c.defaultValue)==null?void 0:H.length)||0),[se,le]=l.useState(null),$=()=>{const n=p.current;if(n){const{scrollTop:pe,scrollHeight:ue,offsetHeight:me}=n;le(be.determineInnerShadowToDisplay(pe,ue,me))}},ie=l.useCallback(n=>{$(),y==null||y(n)},[y]),ce=l.useCallback(n=>{oe(n.target.value.length),s==null||s(n)},[s]);return l.useEffect(()=>{if(p.current){const n=new ResizeObserver($);return n.observe(p.current),()=>n.disconnect()}},[p.current]),i.jsxs(xe,{gap:c.maxLength?"4px":"8px",alert:P?i.jsx(fe,{...P,testID:`${T}-alert`}):void 0,children:[i.jsx(re,{...A,labelHintID:I,htmlFor:e||S,children:i.jsx(ye,{hasError:t,children:i.jsx(Te,{$displayInnerShadow:se,children:i.jsx(ve,{...c,ref:p,id:e||S,onChange:ce,onScroll:ie,maxRows:r?w||1/0:4,"aria-describedby":te?I:void 0,"data-testid":T})})})}),O?i.jsx(we,{length:ne,maxLength:O,testID:`${T}-characters-counter`}):void 0]})}ae.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},autoGrow:{required:!1,tsType:{name:"boolean"},description:""},autoGrowMaxLines:{required:!1,tsType:{name:"number"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: CoreInputAlert.Severity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: CoreInputAlert.Severity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"CoreInputAlert.Severity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
  labelHint?: string;
  labelHintID?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""}}};const Ae={title:"Components/Inputs/TextArea",component:ae,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"},autoGrow:{control:"boolean"},autoGrowMaxLines:{control:"number"},prefix:{control:"text"}},args:{onChange:de(),autoGrow:!1,hasError:!1,readOnly:!1}},a={args:{labelProps:{"aria-label":"TextArea"}}},u={...a,args:{labelProps:{label:"TextArea with AutoGrow"},autoGrow:!0,autoGrowMaxLines:10}},m={...a,args:{labelProps:{label:"TextArea with Label"}}},d={...a,args:{labelProps:{label:"TextArea with Hint",labelHint:"Additional information"}}},b={args:{maxLength:15,labelProps:{label:"TextArea with Limit"}}},h={...a,args:{hasError:!0,labelProps:{label:"TextArea with Error"},alertProps:{severity:"error",children:"Error description over two lines if required."}}},g={...a,args:{disabled:!0,value:"Some text",labelProps:{label:"Disabled TextArea"}}},x={...a,args:{readOnly:!0,value:"Some text",labelProps:{label:"ReadOnly TextArea"}}};var L,C,D;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "TextArea"
    }
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,W,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with AutoGrow"
    },
    autoGrow: true,
    autoGrowMaxLines: 10
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Label"
    }
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var j,B,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Basic,
  args: {
    labelProps: {
      label: "TextArea with Hint",
      labelHint: "Additional information"
    }
  }
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,M,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    value: "Some text",
    labelProps: {
      label: "Disabled TextArea"
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    value: "Some text",
    labelProps: {
      label: "ReadOnly TextArea"
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Pe=["Basic","AutoGrow","WithLabel","WithHint","WithLimit","WithError","Disabled","ReadOnly"],We=Object.freeze(Object.defineProperty({__proto__:null,AutoGrow:u,Basic:a,Disabled:g,ReadOnly:x,WithError:h,WithHint:d,WithLabel:m,WithLimit:b,__namedExportsOrder:Pe,default:Ae},Symbol.toStringTag,{value:"Module"}));export{u as A,a as B,g as D,x as R,We as T,m as W,d as a,b,h as c};
