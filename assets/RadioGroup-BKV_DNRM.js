import{c as y,d as O,a as q,$ as E,l as k,h as L,b as C,f as _,g as N,i as T}from"./utils-l5KLAjAw.js";import{b as W,a as A,$ as G,c as H,d as K}from"./Form-BxKkh07K.js";import{b as j,$ as U}from"./Label-uyz5dJOn.js";import{a as z}from"./Text-DsbvCy5R.js";import{b as J,c as B,$ as Q}from"./useHover-DDDaVluF.js";import{r as V,e as I}from"./index-KmaxkdDD.js";import{$ as M}from"./usePress-D8-PWMl6.js";import{$ as X}from"./FocusScope-um4QTQqo.js";import{a as Y,$ as Z}from"./useFocusRing-BBh_VJBv.js";import{$ as ee}from"./context-CQmu07jL.js";import{$ as ae}from"./VisuallyHidden-Cl-nnxjw.js";import{$ as ie}from"./useControlledState-BCPvzKxG.js";const S=new WeakMap;function de(a,e,d){let{value:r,children:c,"aria-label":l,"aria-labelledby":t}=a;const i=a.isDisabled||e.isDisabled;let u=c!=null,f=l!=null||t!=null;!u&&!f&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let s=e.selectedValue===r,p=R=>{R.stopPropagation(),e.setSelectedValue(r)},{pressProps:m,isPressed:P}=M({isDisabled:i}),{pressProps:x,isPressed:$}=M({isDisabled:i,onPress(){var R;e.setSelectedValue(r),(R=d.current)===null||R===void 0||R.focus()}}),{focusableProps:F}=J(y(a,{onFocus:()=>e.setLastFocusedValue(r)}),d),g=y(m,F),D=B(a,{labelable:!0}),v=-1;e.selectedValue!=null?e.selectedValue===r&&(v=0):(e.lastFocusedValue===r||e.lastFocusedValue==null)&&(v=0),i&&(v=void 0);let{name:b,descriptionId:o,errorMessageId:h,validationBehavior:n}=S.get(e);return j(d,e.selectedValue,e.setSelectedValue),W({validationBehavior:n},e,d),{labelProps:y(x,{onClick:R=>R.preventDefault()}),inputProps:y(D,{...g,type:"radio",name:b,tabIndex:v,disabled:i,required:e.isRequired&&n==="native",checked:s,value:r,onChange:p,"aria-describedby":[a["aria-describedby"],e.isInvalid?h:null,o].filter(Boolean).join(" ")||void 0}),isDisabled:i,isSelected:s,isPressed:P||$}}function le(a,e){let{name:d,isReadOnly:r,isRequired:c,isDisabled:l,orientation:t="vertical",validationBehavior:i="aria"}=a,{direction:u}=ee(),{isInvalid:f,validationErrors:s,validationDetails:p}=e.displayValidation,{labelProps:m,fieldProps:P,descriptionProps:x,errorMessageProps:$}=A({...a,labelElementType:"span",isInvalid:e.isInvalid,errorMessage:a.errorMessage||s}),F=B(a,{labelable:!0}),{focusWithinProps:g}=Y({onBlurWithin(b){var o;(o=a.onBlur)===null||o===void 0||o.call(a,b),e.selectedValue||e.setLastFocusedValue(null)},onFocusWithin:a.onFocus,onFocusWithinChange:a.onFocusChange}),D=b=>{let o;switch(b.key){case"ArrowRight":u==="rtl"&&t!=="vertical"?o="prev":o="next";break;case"ArrowLeft":u==="rtl"&&t!=="vertical"?o="next":o="prev";break;case"ArrowDown":o="next";break;case"ArrowUp":o="prev";break;default:return}b.preventDefault();let h=X(b.currentTarget,{from:b.target}),n;o==="next"?(n=h.nextNode(),n||(h.currentNode=b.currentTarget,n=h.firstChild())):(n=h.previousNode(),n||(h.currentNode=b.currentTarget,n=h.lastChild())),n&&(n.focus(),e.setSelectedValue(n.value))},v=O(d);return S.set(e,{name:v,descriptionId:x.id,errorMessageId:$.id,validationBehavior:i}),{radioGroupProps:y(F,{role:"radiogroup",onKeyDown:D,"aria-invalid":e.isInvalid||void 0,"aria-errormessage":a["aria-errormessage"],"aria-readonly":r||void 0,"aria-required":c||void 0,"aria-disabled":l||void 0,"aria-orientation":t,...P,...g}),labelProps:m,descriptionProps:x,errorMessageProps:$,isInvalid:f,validationErrors:s,validationDetails:p}}let re=Math.round(Math.random()*1e10),te=0;function se(a){let e=V.useMemo(()=>a.name||`radio-group-${re}-${++te}`,[a.name]);var d;let[r,c]=ie(a.value,(d=a.defaultValue)!==null&&d!==void 0?d:null,a.onChange),[l,t]=V.useState(null),i=G({...a,value:r}),u=s=>{!a.isReadOnly&&!a.isDisabled&&(c(s),i.commitValidation())},f=i.displayValidation.isInvalid;return{...i,name:e,selectedValue:r,setSelectedValue:u,lastFocusedValue:l,setLastFocusedValue:t,isDisabled:a.isDisabled||!1,isReadOnly:a.isReadOnly||!1,isRequired:a.isRequired||!1,validationState:a.validationState||(f?"invalid":null),isInvalid:f}}const oe=V.createContext(null),ne=V.createContext(null),w=V.createContext(null),ye=V.forwardRef(function(e,d){[e,d]=q(e,d,oe);let{validationBehavior:r}=_(H)||{};var c,l;let t=(l=(c=e.validationBehavior)!==null&&c!==void 0?c:r)!==null&&l!==void 0?l:"native",i=se({...e,validationBehavior:t}),[u,f]=N(!e["aria-label"]&&!e["aria-labelledby"]),{radioGroupProps:s,labelProps:p,descriptionProps:m,errorMessageProps:P,...x}=le({...e,label:f,validationBehavior:t},i),$=C({...e,values:{orientation:e.orientation||"vertical",isDisabled:i.isDisabled,isReadOnly:i.isReadOnly,isRequired:i.isRequired,isInvalid:i.isInvalid,state:i},defaultClassName:"react-aria-RadioGroup"});return I.createElement("div",{...s,...$,ref:d,slot:e.slot||void 0,"data-orientation":e.orientation||"vertical","data-invalid":i.isInvalid||void 0,"data-disabled":i.isDisabled||void 0,"data-readonly":i.isReadOnly||void 0,"data-required":i.isRequired||void 0},I.createElement(T,{values:[[w,i],[U,{...p,ref:u,elementType:"span"}],[z,{slots:{description:m,errorMessage:P}}],[K,x]]},$.children))}),Ve=V.forwardRef(function(e,d){let{inputRef:r=null,...c}=e;[e,d]=q(c,d,ne);let l=I.useContext(w),t=E(k(r,e.inputRef!==void 0?e.inputRef:null)),{labelProps:i,inputProps:u,isSelected:f,isDisabled:s,isPressed:p}=de({...L(e),children:typeof e.children=="function"?!0:e.children},l,t),{isFocused:m,isFocusVisible:P,focusProps:x}=Z(),$=s||l.isReadOnly,{hoverProps:F,isHovered:g}=Q({...e,isDisabled:$}),D=C({...e,defaultClassName:"react-aria-Radio",values:{isSelected:f,isPressed:p,isHovered:g,isFocused:m,isFocusVisible:P,isDisabled:s,isReadOnly:l.isReadOnly,isInvalid:l.isInvalid,isRequired:l.isRequired}}),v=B(e);return delete v.id,I.createElement("label",{...y(v,i,F,D),ref:d,"data-selected":f||void 0,"data-pressed":p||void 0,"data-hovered":g||void 0,"data-focused":m||void 0,"data-focus-visible":P||void 0,"data-disabled":s||void 0,"data-readonly":l.isReadOnly||void 0,"data-invalid":l.isInvalid||void 0,"data-required":l.isRequired||void 0},I.createElement(ae,{elementType:"span"},I.createElement("input",{...y(u,x),ref:t})),D.children)});export{ne as $,Ve as a,ye as b};
