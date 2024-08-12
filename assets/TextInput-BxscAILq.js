import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as s}from"./index-DH5ua8nC.js";import{a as p,b as l,u as c,p as j}from"./index-jNFq1OWt.js";import{T as w}from"./Typography-D5AcRl6x.js";import{I as F}from"./InputLabelTop-DA_PelCW.js";import{I as z}from"./InputWrapper-B7dHgQQ8.js";import{I as H}from"./InlineAlert-CT5-H_YI.js";import{O as P,C as R}from"./CharactersCounter-DzAd_15E.js";const v=p(F)`
  ${()=>l`
      width: 100%;
    `}
`,S=p.div`
  ${()=>{const{tokens:e}=c(),{textInput:t}=e;return l`
      width: 100%;
      height: ${t.height};
      display: flex;
      align-items: center;
      padding-right: ${t.paddingRight};
      padding-left: ${t.paddingLeft};
    `}}
`,E=p.input`
  ${()=>{const{tokens:e}=c(),{textInput:t,typography:r}=e,o=t.typography.variant,d=j(r.fontSize[o]),h=j(r.lineHeight[o]);return l`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${t.color.base};
      font-family: ${r.fontFamily[o]};
      font-size: ${d};
      line-height: ${h};

      ${v}:has(input:read-only) && {
        color: ${t.color.readOnly};
      }
    `}}
`,O=p(w)`
  ${()=>{const{tokens:e}=c(),{textInput:t}=e;return l`
      color: ${t.prefix.color};
      margin-right: ${t.prefix.marginRight};
    `}}
`,W=p.div`
  ${()=>{const{tokens:e}=c(),{textInput:t}=e;return l`
      display: flex;
      align-items: center;
      margin-left: ${t.icon.marginLeft};
    `}}
`,T=s.forwardRef((e,t)=>{var $;const{id:r,hasError:o,prefix:d,icon:h,onChange:u,testID:a="input",labelProps:g,alertProps:x,...i}=e,m=s.useId(),f=s.useId(),{labelHint:k}=g,{maxLength:I}=i,{tokens:{textInput:y}}=c(),[C,D]=s.useState((($=i.value||i.defaultValue)==null?void 0:$.length)||0),L=s.useCallback(b=>{D(b.target.value.length),u==null||u(b)},[u]);return n.jsxs(z,{gap:i.maxLength?"4px":"8px",alert:x?n.jsx(H,{...x,testID:`${a}-alert`}):void 0,children:[n.jsx(v,{...g,labelHintID:f,htmlFor:r||m,children:n.jsx(P,{hasError:o,children:n.jsxs(S,{children:[d?n.jsx(O,{variant:y.prefix.typography.variant,fontFamily:y.prefix.typography.fontFamily,testID:`${a}-prefix`,children:d}):void 0,n.jsx(E,{...i,ref:t,id:r||m,onChange:L,"aria-describedby":k?f:void 0,"data-testid":a}),h?n.jsx(W,{"data-testid":`${a}-icon-wrapper`,children:h}):void 0]})})}),I?n.jsx(R,{length:C,maxLength:I,testID:`${a}-characters-counter`}):void 0]})});T.displayName="TextInput";T.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{T};
