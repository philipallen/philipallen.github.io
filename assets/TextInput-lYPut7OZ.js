import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as a}from"./index-DH5ua8nC.js";import{u as P}from"./index-CtBUti8q.js";import{C as L,T as A,P as $,a as k,I as F}from"./TextInput.styled-DxtGo_hs.js";import{b as H,I as E}from"./AlertAssociationProps-x_hs0fx1.js";import{I as W}from"./InlineAlert-uKr_Jbz9.js";import{O as w,C as N}from"./CharactersCounter-Bucftjo_.js";const g=a.forwardRef((o,b)=>{var f;const{id:n,hasError:j,prefix:i,icon:l,onChange:r,testID:e="input",labelProps:p,alertProps:d,...s}=o,c=a.useId(),u=a.useId(),x=a.useId(),{labelHint:D}=p,{maxLength:m}=s,{tokens:{textInput:I}}=P(),[v,y]=a.useState(((f=s.value||s.defaultValue)==null?void 0:f.length)||0),C=H(x,o,D?u:void 0),T=a.useCallback(h=>{y(h.target.value.length),r==null||r(h)},[r]);return t.jsxs(E,{gap:s.maxLength?"4px":"8px",alert:d?t.jsx(W,{id:x,...d,testID:`${e}-alert`}):void 0,children:[t.jsx(L,{...p,labelHintID:u,htmlFor:n||c,"data-testid":`${e}-label`,children:t.jsx(w,{hasError:j,children:t.jsxs(A,{children:[i?t.jsx($,{variant:I.prefix.typography.variant,fontFamily:I.prefix.typography.fontFamily,testID:`${e}-prefix`,children:i}):void 0,t.jsx(k,{...s,...C,ref:b,id:n||c,onChange:T,"data-testid":e}),l?t.jsx(F,{"data-testid":`${e}-icon-wrapper`,children:l}):void 0]})})}),m?t.jsx(N,{length:v,maxLength:m,testID:`${e}-characters-counter`}):void 0]})});g.displayName="TextInput";g.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{g as T};