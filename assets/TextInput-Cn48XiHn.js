import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as s}from"./index-DH5ua8nC.js";import{a as p,b as l,u as c,p as j}from"./index-CZQU1x5t.js";import{T as w}from"./Typography-BQS1i-up.js";import{I as F}from"./InputLabelTop-DwsGclHD.js";import{I as z,a as H}from"./InputAlert-Cflz3_wb.js";import{O as P,C as R}from"./CharactersCounter-CIoKY_pQ.js";const v=p(F)`
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
  ${()=>{const{tokens:e}=c(),{textInput:t,typography:r}=e,o=t.typography.variant,d=j(r.fontSize[o]),u=j(r.lineHeight[o]);return l`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${t.color.base};
      font-family: ${r.fontFamily[o]};
      font-size: ${d};
      line-height: ${u};

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
`,T=s.forwardRef((e,t)=>{var $;const{id:r,hasError:o,prefix:d,icon:u,onChange:h,testID:a="input",labelProps:g,alertProps:x,...i}=e,f=s.useId(),m=s.useId(),{labelHint:k}=g,{maxLength:I}=i,{tokens:{textInput:y}}=c(),[C,D]=s.useState((($=i.value||i.defaultValue)==null?void 0:$.length)||0),L=s.useCallback(b=>{D(b.target.value.length),h==null||h(b)},[h]);return n.jsxs(z,{gap:i.maxLength?"4px":"8px",alert:x?n.jsx(H,{...x,testID:`${a}-alert`}):void 0,children:[n.jsx(v,{...g,labelHintID:m,htmlFor:r||f,children:n.jsx(P,{hasError:o,children:n.jsxs(S,{children:[d?n.jsx(O,{variant:y.prefix.typography.variant,fontFamily:y.prefix.typography.fontFamily,testID:`${a}-prefix`,children:d}):void 0,n.jsx(E,{...i,ref:t,id:r||f,onChange:L,"aria-describedby":k?m:void 0,"data-testid":a}),u?n.jsx(W,{"data-testid":`${a}-icon-wrapper`,children:u}):void 0]})})}),I?n.jsx(R,{length:C,maxLength:I,testID:`${a}-characters-counter`}):void 0]})});T.displayName="TextInput";T.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{T};
