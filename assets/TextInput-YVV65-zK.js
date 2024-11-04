import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as s}from"./index-DH5ua8nC.js";import{a as p,b as l,u as d,p as j}from"./index-C-LSVLXB.js";import{T as L}from"./Typography-DPnR7vBA.js";import{I as w}from"./InputLabelTop-66FkqMIr.js";import{I as F}from"./InputWrapper-BBNW5EV4.js";import{I as z}from"./InlineAlert-ClCuOmc7.js";import{O as H,C as P}from"./CharactersCounter-DeuMDZc0.js";const R=p(w)`
  ${()=>l`
      width: 100%;
    `}
`,S=p.div`
  ${()=>{const{tokens:e}=d(),{textInput:t}=e;return l`
      width: 100%;
      height: ${t.height};
      display: flex;
      align-items: center;
      padding-right: ${t.paddingRight};
      padding-left: ${t.paddingLeft};
    `}}
`,E=p.input`
  ${()=>{const{tokens:e}=d(),{textInput:t,typography:o}=e,a=t.typography.variant,c=j(o.fontSize[a]),h=j(o.lineHeight[a]);return l`
      width: 100%;
      background: none;
      padding: 0;
      border: none;
      outline: none;

      color: ${t.color.base};
      font-family: ${o.fontFamily[a]};
      font-size: ${c};
      line-height: ${h};

      &:read-only {
        color: ${t.color.readOnly};
      }
      &:disabled {
        color: ${t.color.disabled};
      }
    `}}
`,O=p(L)`
  ${()=>{const{tokens:e}=d(),{textInput:t}=e;return l`
      color: ${t.prefix.color};
      margin-right: ${t.prefix.marginRight};
    `}}
`,W=p.div`
  ${()=>{const{tokens:e}=d(),{textInput:t}=e;return l`
      display: flex;
      align-items: center;
      margin-left: ${t.icon.marginLeft};
    `}}
`,v=s.forwardRef((e,t)=>{var $;const{id:o,hasError:a,prefix:c,icon:h,onChange:u,testID:r="input",labelProps:g,alertProps:x,...i}=e,m=s.useId(),f=s.useId(),{labelHint:T}=g,{maxLength:I}=i,{tokens:{textInput:y}}=d(),[k,C]=s.useState((($=i.value||i.defaultValue)==null?void 0:$.length)||0),D=s.useCallback(b=>{C(b.target.value.length),u==null||u(b)},[u]);return n.jsxs(F,{gap:i.maxLength?"4px":"8px",alert:x?n.jsx(z,{...x,testID:`${r}-alert`}):void 0,children:[n.jsx(R,{...g,labelHintID:f,htmlFor:o||m,"data-testid":`${r}-label`,children:n.jsx(H,{hasError:a,children:n.jsxs(S,{children:[c?n.jsx(O,{variant:y.prefix.typography.variant,fontFamily:y.prefix.typography.fontFamily,testID:`${r}-prefix`,children:c}):void 0,n.jsx(E,{...i,ref:t,id:o||m,onChange:D,"aria-describedby":T?f:void 0,"data-testid":r}),h?n.jsx(W,{"data-testid":`${r}-icon-wrapper`,children:h}):void 0]})})}),I?n.jsx(P,{length:k,maxLength:I,testID:`${r}-characters-counter`}):void 0]})});v.displayName="TextInput";v.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{v as T};
