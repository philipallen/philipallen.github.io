import{f as Ka}from"./index-6eef940f.js";import{j as Pe}from"./jsx-runtime-6eef64cc.js";import{r as c}from"./index-c013ead5.js";import{e as Y}from"./index-f3e1dd3b.js";import{T as Za}from"./TextInput-c14b56e8.js";import{b as L,d as te,c as Ge,a as xe,f as Xe}from"./useLabel-5fa0df63.js";import{$ as Ga,a as Ye,b as Xa,c as Ya,d as Ja,e as Qa,f as er,g as ar}from"./useSpinButton-f88a0128.js";import{$ as K,d as rr,c as ie,a as lr,f as nr}from"./useFocusWithin-94824ed6.js";import{p as tr,q as Je,n as ir,e as sr,t as ur,u as or,$ as dr}from"./useFocusable-47ac2d7b.js";import{$ as ye}from"./useNumberFormatter-0a8e56f3.js";function cr(e){let{minValue:a,maxValue:r,step:i,formatOptions:o,value:t,defaultValue:m=NaN,onChange:p,locale:d,isDisabled:$,isReadOnly:v}=e;t===null&&(t=NaN),t!==void 0&&!isNaN(t)&&(i!==void 0&&!isNaN(i)?t=L(t,a,r,i):t=te(t,a,r)),isNaN(m)||(i!==void 0&&!isNaN(i)?m=L(m,a,r,i):m=te(m,a,r));let[n,l]=Ge(t,isNaN(m)?NaN:m,p),[s,y]=c.useState(()=>isNaN(n)?"":new xe(d,o).format(n)),D=c.useMemo(()=>new Ga(d,o),[d,o]),I=c.useMemo(()=>D.getNumberingSystem(s),[D,s]),h=c.useMemo(()=>new xe(d,{...o,numberingSystem:I}),[d,o,I]),B=c.useMemo(()=>h.resolvedOptions(),[h]),g=c.useCallback(u=>isNaN(u)||u===null?"":h.format(u),[h]),C=Ye({...e,value:n}),b=i!==void 0&&!isNaN(i)?i:1;B.style==="percent"&&(i===void 0||isNaN(i))&&(b=.01);let[J,N]=c.useState(n),[Q,O]=c.useState(d),[ee,V]=c.useState(o);(!Object.is(n,J)||d!==Q||o!==ee)&&(y(g(n)),N(n),O(d),V(o));let f=c.useMemo(()=>D.parse(s),[D,s]),T=()=>{if(!s.length){l(NaN),y(t===void 0?"":g(n));return}if(isNaN(f)){y(g(n));return}let u;i===void 0||isNaN(i)?u=te(f,a,r):u=L(f,a,r,i),u=D.parse(g(u)),l(u),y(g(t===void 0?u:n))},w=(u,X=0)=>{let F=f;if(isNaN(F)){let S=isNaN(X)?0:X;return L(S,a,r,b)}else{let S=L(F,a,r,b);return u==="+"&&S>F||u==="-"&&S<F?S:L(se(u,F,b),a,r,b)}},M=()=>{let u=w("+",a);u===n&&y(g(u)),l(u),C.commitValidation()},k=()=>{let u=w("-",r);u===n&&y(g(u)),l(u),C.commitValidation()},ae=()=>{r!=null&&(l(L(r,a,r,b)),C.commitValidation())},Z=()=>{a!=null&&(l(a),C.commitValidation())},re=c.useMemo(()=>!$&&!v&&(isNaN(f)||r===void 0||isNaN(r)||L(f,a,r,b)>f||se("+",f,b)<=r),[$,v,a,r,b,f]),G=c.useMemo(()=>!$&&!v&&(isNaN(f)||a===void 0||isNaN(a)||L(f,a,r,b)<f||se("-",f,b)>=a),[$,v,a,r,b,f]);return{...C,validate:u=>D.isValidPartialNumber(u,a,r),increment:M,incrementToMax:ae,decrement:k,decrementToMin:Z,canIncrement:re,canDecrement:G,minValue:a,maxValue:r,numberValue:f,setNumberValue:l,setInputValue:y,inputValue:s,commit:T}}function se(e,a,r){let i=e==="+"?a+r:a-r;if(a%1!==0||r%1!==0){const o=a.toString().split("."),t=r.toString().split("."),m=o[1]&&o[1].length||0,p=t[1]&&t[1].length||0,d=Math.pow(10,Math.max(m,p));a=Math.round(a*d),r=Math.round(r*d),i=e==="+"?a+r:a-r,i/=d}return i}function mr(e,a){let{onScroll:r,isDisabled:i}=e,o=c.useCallback(t=>{t.ctrlKey||(t.preventDefault(),t.stopPropagation(),r&&r({deltaX:t.deltaX,deltaY:t.deltaY}))},[r]);Xa(a,"wheel",i?void 0:o)}function br(e,a){let{inputElementType:r="input",isDisabled:i=!1,isRequired:o=!1,isReadOnly:t=!1,type:m="text",validationBehavior:p="aria"}=e,[d,$]=Ge(e.value,e.defaultValue||"",e.onChange),{focusableProps:v}=tr(e,a),n=Ye({...e,value:d}),{isInvalid:l,validationErrors:s,validationDetails:y}=n.displayValidation,{labelProps:D,fieldProps:I,descriptionProps:h,errorMessageProps:B}=Ya({...e,isInvalid:l,errorMessage:e.errorMessage||s}),g=Je(e,{labelable:!0});const C={type:m,pattern:e.pattern};return Xe(a,d,$),Ja(e,n,a),c.useEffect(()=>{if(a.current instanceof ir(a.current).HTMLTextAreaElement){let b=a.current;Object.defineProperty(b,"defaultValue",{get:()=>b.value,set:()=>{},configurable:!0})}},[a]),{labelProps:D,inputProps:K(g,r==="input"&&C,{disabled:i,readOnly:t,required:o&&p==="native","aria-required":o&&p==="aria"||void 0,"aria-invalid":l||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:d,onChange:b=>$(b.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...v,...I}),descriptionProps:h,errorMessageProps:B,isInvalid:l,validationErrors:s,validationDetails:y}}function ge(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function fr(e,a,r){let i=rr(n=>{let l=r.current,s;switch(n.inputType){case"historyUndo":case"historyRedo":return;case"insertLineBreak":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":s=l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteContentForward":s=l.selectionEnd===l.selectionStart?l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd+1):l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteContentBackward":s=l.selectionEnd===l.selectionStart?l.value.slice(0,l.selectionStart-1)+l.value.slice(l.selectionStart):l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":s=l.value.slice(l.selectionStart);break;default:n.data!=null&&(s=l.value.slice(0,l.selectionStart)+n.data+l.value.slice(l.selectionEnd));break}(s==null||!a.validate(s))&&n.preventDefault()});c.useEffect(()=>{if(!ge())return;let n=r.current;return n.addEventListener("beforeinput",i,!1),()=>{n.removeEventListener("beforeinput",i,!1)}},[r,i]);let o=ge()?null:n=>{let l=n.target.value.slice(0,n.target.selectionStart)+n.data+n.target.value.slice(n.target.selectionEnd);a.validate(l)||n.preventDefault()},{labelProps:t,inputProps:m,descriptionProps:p,errorMessageProps:d,...$}=br(e,r),v=c.useRef(null);return{inputProps:K(m,{onBeforeInput:o,onCompositionStart(){let{value:n,selectionStart:l,selectionEnd:s}=r.current;v.current={value:n,selectionStart:l,selectionEnd:s}},onCompositionEnd(){if(!a.validate(r.current.value)){let{value:n,selectionStart:l,selectionEnd:s}=v.current;r.current.value=n,r.current.setSelectionRange(l,s),a.setInputValue(n)}}}),labelProps:t,descriptionProps:p,errorMessageProps:d,...$}}var Qe={};Qe={decrease:e=>`خفض ${e.fieldLabel}`,increase:e=>`زيادة ${e.fieldLabel}`,numberField:"حقل رقمي"};var ea={};ea={decrease:e=>`Намаляване ${e.fieldLabel}`,increase:e=>`Усилване ${e.fieldLabel}`,numberField:"Номер на полето"};var aa={};aa={decrease:e=>`Snížit ${e.fieldLabel}`,increase:e=>`Zvýšit ${e.fieldLabel}`,numberField:"Číselné pole"};var ra={};ra={decrease:e=>`Reducer ${e.fieldLabel}`,increase:e=>`Øg ${e.fieldLabel}`,numberField:"Talfelt"};var la={};la={decrease:e=>`${e.fieldLabel} verringern`,increase:e=>`${e.fieldLabel} erhöhen`,numberField:"Nummernfeld"};var na={};na={decrease:e=>`Μείωση ${e.fieldLabel}`,increase:e=>`Αύξηση ${e.fieldLabel}`,numberField:"Πεδίο αριθμού"};var ta={};ta={decrease:e=>`Decrease ${e.fieldLabel}`,increase:e=>`Increase ${e.fieldLabel}`,numberField:"Number field"};var ia={};ia={decrease:e=>`Reducir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var sa={};sa={decrease:e=>`Vähenda ${e.fieldLabel}`,increase:e=>`Suurenda ${e.fieldLabel}`,numberField:"Numbri väli"};var ua={};ua={decrease:e=>`Vähennä ${e.fieldLabel}`,increase:e=>`Lisää ${e.fieldLabel}`,numberField:"Numerokenttä"};var oa={};oa={decrease:e=>`Diminuer ${e.fieldLabel}`,increase:e=>`Augmenter ${e.fieldLabel}`,numberField:"Champ de nombre"};var da={};da={decrease:e=>`הקטן ${e.fieldLabel}`,increase:e=>`הגדל ${e.fieldLabel}`,numberField:"שדה מספר"};var ca={};ca={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var ma={};ma={decrease:e=>`${e.fieldLabel} csökkentése`,increase:e=>`${e.fieldLabel} növelése`,numberField:"Számmező"};var ba={};ba={decrease:e=>`Riduci ${e.fieldLabel}`,increase:e=>`Aumenta ${e.fieldLabel}`,numberField:"Campo numero"};var fa={};fa={decrease:e=>`${e.fieldLabel}を縮小`,increase:e=>`${e.fieldLabel}を拡大`,numberField:"数値フィールド"};var pa={};pa={decrease:e=>`${e.fieldLabel} 감소`,increase:e=>`${e.fieldLabel} 증가`,numberField:"번호 필드"};var $a={};$a={decrease:e=>`Sumažinti ${e.fieldLabel}`,increase:e=>`Padidinti ${e.fieldLabel}`,numberField:"Numerio laukas"};var va={};va={decrease:e=>`Samazināšana ${e.fieldLabel}`,increase:e=>`Palielināšana ${e.fieldLabel}`,numberField:"Skaitļu lauks"};var Pa={};Pa={decrease:e=>`Reduser ${e.fieldLabel}`,increase:e=>`Øk ${e.fieldLabel}`,numberField:"Tallfelt"};var xa={};xa={decrease:e=>`${e.fieldLabel} verlagen`,increase:e=>`${e.fieldLabel} verhogen`,numberField:"Getalveld"};var ya={};ya={decrease:e=>`Zmniejsz ${e.fieldLabel}`,increase:e=>`Zwiększ ${e.fieldLabel}`,numberField:"Pole numeru"};var ga={};ga={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var Da={};Da={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo numérico"};var ha={};ha={decrease:e=>`Scădere ${e.fieldLabel}`,increase:e=>`Creștere ${e.fieldLabel}`,numberField:"Câmp numeric"};var Ca={};Ca={decrease:e=>`Уменьшение ${e.fieldLabel}`,increase:e=>`Увеличение ${e.fieldLabel}`,numberField:"Числовое поле"};var La={};La={decrease:e=>`Znížiť ${e.fieldLabel}`,increase:e=>`Zvýšiť ${e.fieldLabel}`,numberField:"Číselné pole"};var Fa={};Fa={decrease:e=>`Upadati ${e.fieldLabel}`,increase:e=>`Povečajte ${e.fieldLabel}`,numberField:"Številčno polje"};var Sa={};Sa={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var Ea={};Ea={decrease:e=>`Minska ${e.fieldLabel}`,increase:e=>`Öka ${e.fieldLabel}`,numberField:"Nummerfält"};var Ia={};Ia={decrease:e=>`${e.fieldLabel} azalt`,increase:e=>`${e.fieldLabel} arttır`,numberField:"Sayı alanı"};var Va={};Va={decrease:e=>`Зменшити ${e.fieldLabel}`,increase:e=>`Збільшити ${e.fieldLabel}`,numberField:"Поле номера"};var Ba={};Ba={decrease:e=>`降低 ${e.fieldLabel}`,increase:e=>`提高 ${e.fieldLabel}`,numberField:"数字字段"};var Na={};Na={decrease:e=>`縮小 ${e.fieldLabel}`,increase:e=>`放大 ${e.fieldLabel}`,numberField:"數字欄位"};var Oa={};Oa={"ar-AE":Qe,"bg-BG":ea,"cs-CZ":aa,"da-DK":ra,"de-DE":la,"el-GR":na,"en-US":ta,"es-ES":ia,"et-EE":sa,"fi-FI":ua,"fr-FR":oa,"he-IL":da,"hr-HR":ca,"hu-HU":ma,"it-IT":ba,"ja-JP":fa,"ko-KR":pa,"lt-LT":$a,"lv-LV":va,"nb-NO":Pa,"nl-NL":xa,"pl-PL":ya,"pt-BR":ga,"pt-PT":Da,"ro-RO":ha,"ru-RU":Ca,"sk-SK":La,"sl-SI":Fa,"sr-SP":Sa,"sv-SE":Ea,"tr-TR":Ia,"uk-UA":Va,"zh-CN":Ba,"zh-TW":Na};function pr(e){return e&&e.__esModule?e.default:e}function $r(e,a,r){let{id:i,decrementAriaLabel:o,incrementAriaLabel:t,isDisabled:m,isReadOnly:p,isRequired:d,minValue:$,maxValue:v,autoFocus:n,label:l,formatOptions:s,onBlur:y=()=>{},onFocus:D,onFocusChange:I,onKeyDown:h,onKeyUp:B,description:g,errorMessage:C,isWheelDisabled:b,...J}=e,{increment:N,incrementToMax:Q,decrement:O,decrementToMin:ee,numberValue:V,inputValue:f,commit:T,commitValidation:w}=a;const M=Qa(pr(Oa),"@react-aria/numberfield");let k=ie(i),{focusProps:ae}=sr({onBlur(){T()}}),Z=ye(s),re=c.useMemo(()=>Z.resolvedOptions(),[Z]),G=ye({...s,currencySign:void 0}),ue=c.useMemo(()=>isNaN(V)?"":G.format(V),[G,V]),{spinButtonProps:u,incrementButtonProps:X,decrementButtonProps:F}=er({isDisabled:m,isReadOnly:p,isRequired:d,maxValue:v,minValue:$,onIncrement:N,onIncrementToMax:Q,onDecrement:O,onDecrementToMin:ee,value:V,textValue:ue}),[S,wa]=c.useState(!1),{focusWithinProps:Ma}=lr({isDisabled:m,onFocusWithinChange:wa}),ka=c.useCallback(P=>{Math.abs(P.deltaY)<=Math.abs(P.deltaX)||(P.deltaY>0?N():P.deltaY<0&&O())},[O,N]);mr({onScroll:ka,isDisabled:b||m||p||!S},r);let oe=re.maximumFractionDigits>0,de=a.minValue===void 0||isNaN(a.minValue)||a.minValue<0,R="numeric";ur()?de?R="text":oe&&(R="decimal"):or()&&(de?R="numeric":oe&&(R="decimal"));let Ra=P=>{a.validate(P)&&a.setInputValue(P)},Aa=Je(e),ce=c.useCallback(P=>{P.key==="Enter"?(T(),w()):P.continuePropagation()},[T,w]),{isInvalid:me,validationErrors:Wa,validationDetails:Ha}=a.displayValidation,{labelProps:be,inputProps:qa,descriptionProps:ja,errorMessageProps:_a}=fr({...J,...Aa,name:void 0,label:l,autoFocus:n,isDisabled:m,isReadOnly:p,isRequired:d,validate:void 0,[ar]:a,value:f,defaultValue:void 0,autoComplete:"off","aria-label":e["aria-label"]||void 0,"aria-labelledby":e["aria-labelledby"]||void 0,id:k,type:"text",inputMode:R,onChange:Ra,onBlur:y,onFocus:D,onFocusChange:I,onKeyDown:c.useMemo(()=>nr(ce,h),[ce,h]),onKeyUp:B,description:g,errorMessage:C},a,r);Xe(r,a.numberValue,a.setNumberValue);let fe=K(u,ae,qa,{role:null,"aria-roledescription":dr()?null:M.format("numberField"),"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null,autoCorrect:"off",spellCheck:"false"});e.validationBehavior==="native"&&(fe["aria-required"]=void 0);let pe=P=>{var ne;document.activeElement!==r.current&&(P.pointerType==="mouse"?(ne=r.current)===null||ne===void 0||ne.focus():P.target.focus())},le=e["aria-label"]||(typeof e.label=="string"?e.label:""),E;le||(E=e.label!=null?be.id:e["aria-labelledby"]);let $e=ie(),ve=ie(),za=K(X,{"aria-label":t||M.format("increase",{fieldLabel:le}).trim(),id:E&&!t?$e:null,"aria-labelledby":E&&!t?`${$e} ${E}`:null,"aria-controls":k,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canIncrement,onPressStart:pe}),Ua=K(F,{"aria-label":o||M.format("decrease",{fieldLabel:le}).trim(),id:E&&!o?ve:null,"aria-labelledby":E&&!o?`${ve} ${E}`:null,"aria-controls":k,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canDecrement,onPressStart:pe});return{groupProps:{...Ma,role:"group","aria-disabled":m,"aria-invalid":me?"true":void 0},labelProps:be,inputProps:fe,incrementButtonProps:za,decrementButtonProps:Ua,errorMessageProps:_a,descriptionProps:ja,isInvalid:me,validationErrors:Wa,validationDetails:Ha}}function Ta(e){var s;const{locale:a=Y.DEFAULT_LOCALE,testID:r="currencyinput",currencySymbol:i=Y.DEFAULT_SYMBOL,currencyFormat:o="TwoDecimalPlaces"}=e,t=((s=e.labelProps)==null?void 0:s.label)||"CurrencyInput",m=c.useRef(null),p=o==="TwoDecimalPlaces"?Y.TWO_DP_FORMAT_OPTIONS:Y.ZERO_DP_FORMAT_OPTIONS,d={...e,"aria-label":t,locale:a,isReadOnly:e.readOnly,isDisabled:e.disabled},$=cr({...d,formatOptions:p}),{groupProps:v,inputProps:n}=$r(d,$,m),l={...e,...n,currencyFormat:void 0,currencySymbol:void 0,locale:void 0};return Pe.jsx("div",{...v,children:Pe.jsx(Za,{...l,testID:r,ref:m,prefix:i,defaultValue:void 0,"aria-label":t})})}Ta.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
>`},description:""},currencyFormat:{required:!1,tsType:{name:"union",raw:'"TwoDecimalPlaces" | "NoDecimalPlaces"',elements:[{name:"literal",value:'"TwoDecimalPlaces"'},{name:"literal",value:'"NoDecimalPlaces"'}]},description:""}}};const vr={title:"Components/Inputs/CurrencyInput",component:Ta,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"}},args:{onBlur:Ka(),hasError:!1,readOnly:!1}},x={args:{labelProps:{"aria-label":"CurrencyInput"}}},A={...x,args:{defaultValue:2.13,labelProps:{label:"CurrencyInput"}}},W={...x,args:{defaultValue:5,step:5,labelProps:{label:"CurrencyInput with step 5",labelHint:"Pressing ↑ and ↓ steps value by 5"}}},H={...x,args:{defaultValue:12.54,locale:"de-DE",labelProps:{label:"CurrencyInput (German locale)",labelHint:"Additional information"}}},q={...x,args:{currencyFormat:"NoDecimalPlaces",defaultValue:12,labelProps:{label:"CurrencyInput with zero decimal places"}}},j={...x,args:{defaultValue:15.24,currencySymbol:"$",labelProps:{label:"CurrencyInput with $"}}},_={...x,args:{disabled:!0,defaultValue:89.08,labelProps:{label:"Disabled TextInput"}}},z={...x,args:{hasError:!0,defaultValue:45.89,labelProps:{label:"CurrencyInput with Error"},alertProps:{severity:"error",children:"Amount must be between €1,000 and €2,000."}}},U={...x,args:{readOnly:!0,defaultValue:30.67,labelProps:{label:"ReadOnly CurrencyInput"}}};var De,he,Ce;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "CurrencyInput"
    }
  }
}`,...(Ce=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var Le,Fe,Se;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 2.13,
    labelProps: {
      label: "CurrencyInput"
    }
  }
}`,...(Se=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Ee,Ie,Ve;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 5,
    step: 5,
    labelProps: {
      label: "CurrencyInput with step 5",
      labelHint: "Pressing ↑ and ↓ steps value by 5"
    }
  }
}`,...(Ve=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Be,Ne,Oe;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.54,
    locale: "de-DE",
    labelProps: {
      label: "CurrencyInput (German locale)",
      labelHint: "Additional information"
    }
  }
}`,...(Oe=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Te,we,Me;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...Basic,
  args: {
    currencyFormat: "NoDecimalPlaces",
    defaultValue: 12,
    labelProps: {
      label: "CurrencyInput with zero decimal places"
    }
  }
}`,...(Me=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var ke,Re,Ae;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 15.24,
    currencySymbol: "$",
    labelProps: {
      label: "CurrencyInput with $"
    }
  }
}`,...(Ae=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var We,He,qe;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    defaultValue: 89.08,
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(qe=(He=_.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};var je,_e,ze;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  ...Basic,
  args: {
    hasError: true,
    defaultValue: 45.89,
    labelProps: {
      label: "CurrencyInput with Error"
    },
    alertProps: {
      severity: "error",
      children: "Amount must be between €1,000 and €2,000."
    }
  }
}`,...(ze=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Ue,Ke,Ze;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    defaultValue: 30.67,
    labelProps: {
      label: "ReadOnly CurrencyInput"
    }
  }
}`,...(Ze=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};const Pr=["Basic","WithLabel","WithStep5","WithGermanLocale","WithZeroDecimalPlaces","WithDollarSymbol","Disabled","WithError","ReadOnly"],Vr=Object.freeze(Object.defineProperty({__proto__:null,Basic:x,Disabled:_,ReadOnly:U,WithDollarSymbol:j,WithError:z,WithGermanLocale:H,WithLabel:A,WithStep5:W,WithZeroDecimalPlaces:q,__namedExportsOrder:Pr,default:vr},Symbol.toStringTag,{value:"Module"}));export{x as B,Vr as C,_ as D,U as R,A as W,W as a,H as b,q as c,j as d,z as e};
