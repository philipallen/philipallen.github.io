import{f as Ka}from"./index-Cnk2rnxF.js";import{j as xe}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{g as B}from"./index-Cee7vv5h.js";import{T as Za}from"./TextInput-CDuGzN9q.js";import{b as L,d as te,c as Ge,a as ye,f as Xe}from"./useLabel-IkqvFfsj.js";import{$ as Ga,a as Ye,b as Xa,c as Ya,d as Ja,e as Qa,f as er,g as ar}from"./useSpinButton-CN-rnFND.js";import{$ as Z,d as rr,c as ie,a as lr,f as nr}from"./useFocusWithin-DtMhJA8W.js";import{p as tr,q as Je,n as ir,e as sr,t as ur,u as or,$ as dr}from"./useFocusable-C8W1vPXm.js";import{$ as Pe}from"./useNumberFormatter-DiMkG4Gc.js";function cr(e){let{minValue:a,maxValue:r,step:i,formatOptions:o,value:t,defaultValue:b=NaN,onChange:p,locale:d,isDisabled:$,isReadOnly:v}=e;t===null&&(t=NaN),t!==void 0&&!isNaN(t)&&(i!==void 0&&!isNaN(i)?t=L(t,a,r,i):t=te(t,a,r)),isNaN(b)||(i!==void 0&&!isNaN(i)?b=L(b,a,r,i):b=te(b,a,r));let[n,l]=Ge(t,isNaN(b)?NaN:b,p),[s,P]=c.useState(()=>isNaN(n)?"":new ye(d,o).format(n)),D=c.useMemo(()=>new Ga(d,o),[d,o]),I=c.useMemo(()=>D.getNumberingSystem(s),[D,s]),C=c.useMemo(()=>new ye(d,{...o,numberingSystem:I}),[d,o,I]),N=c.useMemo(()=>C.resolvedOptions(),[C]),g=c.useCallback(u=>isNaN(u)||u===null?"":C.format(u),[C]),h=Ye({...e,value:n}),m=i!==void 0&&!isNaN(i)?i:1;N.style==="percent"&&(i===void 0||isNaN(i))&&(m=.01);let[J,O]=c.useState(n),[Q,T]=c.useState(d),[ee,V]=c.useState(o);(!Object.is(n,J)||d!==Q||o!==ee)&&(P(g(n)),O(n),T(d),V(o));let f=c.useMemo(()=>D.parse(s),[D,s]),M=()=>{if(!s.length){l(NaN),P(t===void 0?"":g(n));return}if(isNaN(f)){P(g(n));return}let u;i===void 0||isNaN(i)?u=te(f,a,r):u=L(f,a,r,i),u=D.parse(g(u)),l(u),P(g(t===void 0?u:n))},w=(u,Y=0)=>{let F=f;if(isNaN(F)){let E=isNaN(Y)?0:Y;return L(E,a,r,m)}else{let E=L(F,a,r,m);return u==="+"&&E>F||u==="-"&&E<F?E:L(se(u,F,m),a,r,m)}},k=()=>{let u=w("+",a);u===n&&P(g(u)),l(u),h.commitValidation()},A=()=>{let u=w("-",r);u===n&&P(g(u)),l(u),h.commitValidation()},ae=()=>{r!=null&&(l(L(r,a,r,m)),h.commitValidation())},G=()=>{a!=null&&(l(a),h.commitValidation())},re=c.useMemo(()=>!$&&!v&&(isNaN(f)||r===void 0||isNaN(r)||L(f,a,r,m)>f||se("+",f,m)<=r),[$,v,a,r,m,f]),X=c.useMemo(()=>!$&&!v&&(isNaN(f)||a===void 0||isNaN(a)||L(f,a,r,m)<f||se("-",f,m)>=a),[$,v,a,r,m,f]);return{...h,validate:u=>D.isValidPartialNumber(u,a,r),increment:k,incrementToMax:ae,decrement:A,decrementToMin:G,canIncrement:re,canDecrement:X,minValue:a,maxValue:r,numberValue:f,setNumberValue:l,setInputValue:P,inputValue:s,commit:M}}function se(e,a,r){let i=e==="+"?a+r:a-r;if(a%1!==0||r%1!==0){const o=a.toString().split("."),t=r.toString().split("."),b=o[1]&&o[1].length||0,p=t[1]&&t[1].length||0,d=Math.pow(10,Math.max(b,p));a=Math.round(a*d),r=Math.round(r*d),i=e==="+"?a+r:a-r,i/=d}return i}function br(e,a){let{onScroll:r,isDisabled:i}=e,o=c.useCallback(t=>{t.ctrlKey||(t.preventDefault(),t.stopPropagation(),r&&r({deltaX:t.deltaX,deltaY:t.deltaY}))},[r]);Xa(a,"wheel",i?void 0:o)}function mr(e,a){let{inputElementType:r="input",isDisabled:i=!1,isRequired:o=!1,isReadOnly:t=!1,type:b="text",validationBehavior:p="aria"}=e,[d,$]=Ge(e.value,e.defaultValue||"",e.onChange),{focusableProps:v}=tr(e,a),n=Ye({...e,value:d}),{isInvalid:l,validationErrors:s,validationDetails:P}=n.displayValidation,{labelProps:D,fieldProps:I,descriptionProps:C,errorMessageProps:N}=Ya({...e,isInvalid:l,errorMessage:e.errorMessage||s}),g=Je(e,{labelable:!0});const h={type:b,pattern:e.pattern};return Xe(a,d,$),Ja(e,n,a),c.useEffect(()=>{if(a.current instanceof ir(a.current).HTMLTextAreaElement){let m=a.current;Object.defineProperty(m,"defaultValue",{get:()=>m.value,set:()=>{},configurable:!0})}},[a]),{labelProps:D,inputProps:Z(g,r==="input"&&h,{disabled:i,readOnly:t,required:o&&p==="native","aria-required":o&&p==="aria"||void 0,"aria-invalid":l||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:d,onChange:m=>$(m.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...v,...I}),descriptionProps:C,errorMessageProps:N,isInvalid:l,validationErrors:s,validationDetails:P}}function ge(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function fr(e,a,r){let i=rr(n=>{let l=r.current,s;switch(n.inputType){case"historyUndo":case"historyRedo":return;case"insertLineBreak":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":s=l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteContentForward":s=l.selectionEnd===l.selectionStart?l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd+1):l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteContentBackward":s=l.selectionEnd===l.selectionStart?l.value.slice(0,l.selectionStart-1)+l.value.slice(l.selectionStart):l.value.slice(0,l.selectionStart)+l.value.slice(l.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":s=l.value.slice(l.selectionStart);break;default:n.data!=null&&(s=l.value.slice(0,l.selectionStart)+n.data+l.value.slice(l.selectionEnd));break}(s==null||!a.validate(s))&&n.preventDefault()});c.useEffect(()=>{if(!ge())return;let n=r.current;return n.addEventListener("beforeinput",i,!1),()=>{n.removeEventListener("beforeinput",i,!1)}},[r,i]);let o=ge()?null:n=>{let l=n.target.value.slice(0,n.target.selectionStart)+n.data+n.target.value.slice(n.target.selectionEnd);a.validate(l)||n.preventDefault()},{labelProps:t,inputProps:b,descriptionProps:p,errorMessageProps:d,...$}=mr(e,r),v=c.useRef(null);return{inputProps:Z(b,{onBeforeInput:o,onCompositionStart(){let{value:n,selectionStart:l,selectionEnd:s}=r.current;v.current={value:n,selectionStart:l,selectionEnd:s}},onCompositionEnd(){if(!a.validate(r.current.value)){let{value:n,selectionStart:l,selectionEnd:s}=v.current;r.current.value=n,r.current.setSelectionRange(l,s),a.setInputValue(n)}}}),labelProps:t,descriptionProps:p,errorMessageProps:d,...$}}var Qe={};Qe={decrease:e=>`خفض ${e.fieldLabel}`,increase:e=>`زيادة ${e.fieldLabel}`,numberField:"حقل رقمي"};var ea={};ea={decrease:e=>`Намаляване ${e.fieldLabel}`,increase:e=>`Усилване ${e.fieldLabel}`,numberField:"Номер на полето"};var aa={};aa={decrease:e=>`Snížit ${e.fieldLabel}`,increase:e=>`Zvýšit ${e.fieldLabel}`,numberField:"Číselné pole"};var ra={};ra={decrease:e=>`Reducer ${e.fieldLabel}`,increase:e=>`Øg ${e.fieldLabel}`,numberField:"Talfelt"};var la={};la={decrease:e=>`${e.fieldLabel} verringern`,increase:e=>`${e.fieldLabel} erhöhen`,numberField:"Nummernfeld"};var na={};na={decrease:e=>`Μείωση ${e.fieldLabel}`,increase:e=>`Αύξηση ${e.fieldLabel}`,numberField:"Πεδίο αριθμού"};var ta={};ta={decrease:e=>`Decrease ${e.fieldLabel}`,increase:e=>`Increase ${e.fieldLabel}`,numberField:"Number field"};var ia={};ia={decrease:e=>`Reducir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var sa={};sa={decrease:e=>`Vähenda ${e.fieldLabel}`,increase:e=>`Suurenda ${e.fieldLabel}`,numberField:"Numbri väli"};var ua={};ua={decrease:e=>`Vähennä ${e.fieldLabel}`,increase:e=>`Lisää ${e.fieldLabel}`,numberField:"Numerokenttä"};var oa={};oa={decrease:e=>`Diminuer ${e.fieldLabel}`,increase:e=>`Augmenter ${e.fieldLabel}`,numberField:"Champ de nombre"};var da={};da={decrease:e=>`הקטן ${e.fieldLabel}`,increase:e=>`הגדל ${e.fieldLabel}`,numberField:"שדה מספר"};var ca={};ca={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var ba={};ba={decrease:e=>`${e.fieldLabel} csökkentése`,increase:e=>`${e.fieldLabel} növelése`,numberField:"Számmező"};var ma={};ma={decrease:e=>`Riduci ${e.fieldLabel}`,increase:e=>`Aumenta ${e.fieldLabel}`,numberField:"Campo numero"};var fa={};fa={decrease:e=>`${e.fieldLabel}を縮小`,increase:e=>`${e.fieldLabel}を拡大`,numberField:"数値フィールド"};var pa={};pa={decrease:e=>`${e.fieldLabel} 감소`,increase:e=>`${e.fieldLabel} 증가`,numberField:"번호 필드"};var $a={};$a={decrease:e=>`Sumažinti ${e.fieldLabel}`,increase:e=>`Padidinti ${e.fieldLabel}`,numberField:"Numerio laukas"};var va={};va={decrease:e=>`Samazināšana ${e.fieldLabel}`,increase:e=>`Palielināšana ${e.fieldLabel}`,numberField:"Skaitļu lauks"};var xa={};xa={decrease:e=>`Reduser ${e.fieldLabel}`,increase:e=>`Øk ${e.fieldLabel}`,numberField:"Tallfelt"};var ya={};ya={decrease:e=>`${e.fieldLabel} verlagen`,increase:e=>`${e.fieldLabel} verhogen`,numberField:"Getalveld"};var Pa={};Pa={decrease:e=>`Zmniejsz ${e.fieldLabel}`,increase:e=>`Zwiększ ${e.fieldLabel}`,numberField:"Pole numeru"};var ga={};ga={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var Da={};Da={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo numérico"};var Ca={};Ca={decrease:e=>`Scădere ${e.fieldLabel}`,increase:e=>`Creștere ${e.fieldLabel}`,numberField:"Câmp numeric"};var ha={};ha={decrease:e=>`Уменьшение ${e.fieldLabel}`,increase:e=>`Увеличение ${e.fieldLabel}`,numberField:"Числовое поле"};var La={};La={decrease:e=>`Znížiť ${e.fieldLabel}`,increase:e=>`Zvýšiť ${e.fieldLabel}`,numberField:"Číselné pole"};var Fa={};Fa={decrease:e=>`Upadati ${e.fieldLabel}`,increase:e=>`Povečajte ${e.fieldLabel}`,numberField:"Številčno polje"};var Ea={};Ea={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var Sa={};Sa={decrease:e=>`Minska ${e.fieldLabel}`,increase:e=>`Öka ${e.fieldLabel}`,numberField:"Nummerfält"};var Ia={};Ia={decrease:e=>`${e.fieldLabel} azalt`,increase:e=>`${e.fieldLabel} arttır`,numberField:"Sayı alanı"};var Va={};Va={decrease:e=>`Зменшити ${e.fieldLabel}`,increase:e=>`Збільшити ${e.fieldLabel}`,numberField:"Поле номера"};var Ba={};Ba={decrease:e=>`降低 ${e.fieldLabel}`,increase:e=>`提高 ${e.fieldLabel}`,numberField:"数字字段"};var Na={};Na={decrease:e=>`縮小 ${e.fieldLabel}`,increase:e=>`放大 ${e.fieldLabel}`,numberField:"數字欄位"};var Oa={};Oa={"ar-AE":Qe,"bg-BG":ea,"cs-CZ":aa,"da-DK":ra,"de-DE":la,"el-GR":na,"en-US":ta,"es-ES":ia,"et-EE":sa,"fi-FI":ua,"fr-FR":oa,"he-IL":da,"hr-HR":ca,"hu-HU":ba,"it-IT":ma,"ja-JP":fa,"ko-KR":pa,"lt-LT":$a,"lv-LV":va,"nb-NO":xa,"nl-NL":ya,"pl-PL":Pa,"pt-BR":ga,"pt-PT":Da,"ro-RO":Ca,"ru-RU":ha,"sk-SK":La,"sl-SI":Fa,"sr-SP":Ea,"sv-SE":Sa,"tr-TR":Ia,"uk-UA":Va,"zh-CN":Ba,"zh-TW":Na};function pr(e){return e&&e.__esModule?e.default:e}function $r(e,a,r){let{id:i,decrementAriaLabel:o,incrementAriaLabel:t,isDisabled:b,isReadOnly:p,isRequired:d,minValue:$,maxValue:v,autoFocus:n,label:l,formatOptions:s,onBlur:P=()=>{},onFocus:D,onFocusChange:I,onKeyDown:C,onKeyUp:N,description:g,errorMessage:h,isWheelDisabled:m,...J}=e,{increment:O,incrementToMax:Q,decrement:T,decrementToMin:ee,numberValue:V,inputValue:f,commit:M,commitValidation:w}=a;const k=Qa(pr(Oa),"@react-aria/numberfield");let A=ie(i),{focusProps:ae}=sr({onBlur(){M()}}),G=Pe(s),re=c.useMemo(()=>G.resolvedOptions(),[G]),X=Pe({...s,currencySign:void 0}),ue=c.useMemo(()=>isNaN(V)?"":X.format(V),[X,V]),{spinButtonProps:u,incrementButtonProps:Y,decrementButtonProps:F}=er({isDisabled:b,isReadOnly:p,isRequired:d,maxValue:v,minValue:$,onIncrement:O,onIncrementToMax:Q,onDecrement:T,onDecrementToMin:ee,value:V,textValue:ue}),[E,Ma]=c.useState(!1),{focusWithinProps:wa}=lr({isDisabled:b,onFocusWithinChange:Ma}),ka=c.useCallback(x=>{Math.abs(x.deltaY)<=Math.abs(x.deltaX)||(x.deltaY>0?O():x.deltaY<0&&T())},[T,O]);br({onScroll:ka,isDisabled:m||b||p||!E},r);let oe=re.maximumFractionDigits>0,de=a.minValue===void 0||isNaN(a.minValue)||a.minValue<0,R="numeric";ur()?de?R="text":oe&&(R="decimal"):or()&&(de?R="numeric":oe&&(R="decimal"));let Aa=x=>{a.validate(x)&&a.setInputValue(x)},Ra=Je(e),ce=c.useCallback(x=>{x.key==="Enter"?(M(),w()):x.continuePropagation()},[M,w]),{isInvalid:be,validationErrors:Wa,validationDetails:qa}=a.displayValidation,{labelProps:me,inputProps:Ha,descriptionProps:_a,errorMessageProps:ja}=fr({...J,...Ra,name:void 0,label:l,autoFocus:n,isDisabled:b,isReadOnly:p,isRequired:d,validate:void 0,[ar]:a,value:f,defaultValue:void 0,autoComplete:"off","aria-label":e["aria-label"]||void 0,"aria-labelledby":e["aria-labelledby"]||void 0,id:A,type:"text",inputMode:R,onChange:Aa,onBlur:P,onFocus:D,onFocusChange:I,onKeyDown:c.useMemo(()=>nr(ce,C),[ce,C]),onKeyUp:N,description:g,errorMessage:h},a,r);Xe(r,a.numberValue,a.setNumberValue);let fe=Z(u,ae,Ha,{role:null,"aria-roledescription":dr()?null:k.format("numberField"),"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null,autoCorrect:"off",spellCheck:"false"});e.validationBehavior==="native"&&(fe["aria-required"]=void 0);let pe=x=>{var ne;document.activeElement!==r.current&&(x.pointerType==="mouse"?(ne=r.current)===null||ne===void 0||ne.focus():x.target.focus())},le=e["aria-label"]||(typeof e.label=="string"?e.label:""),S;le||(S=e.label!=null?me.id:e["aria-labelledby"]);let $e=ie(),ve=ie(),Ua=Z(Y,{"aria-label":t||k.format("increase",{fieldLabel:le}).trim(),id:S&&!t?$e:null,"aria-labelledby":S&&!t?`${$e} ${S}`:null,"aria-controls":A,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canIncrement,onPressStart:pe}),za=Z(F,{"aria-label":o||k.format("decrease",{fieldLabel:le}).trim(),id:S&&!o?ve:null,"aria-labelledby":S&&!o?`${ve} ${S}`:null,"aria-controls":A,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canDecrement,onPressStart:pe});return{groupProps:{...wa,role:"group","aria-disabled":b,"aria-invalid":be?"true":void 0},labelProps:me,inputProps:fe,incrementButtonProps:Ua,decrementButtonProps:za,errorMessageProps:ja,descriptionProps:_a,isInvalid:be,validationErrors:Wa,validationDetails:qa}}function Ta(e){var s;const{locale:a=B.DEFAULT_LOCALE,testID:r="currencyinput",currencySymbol:i=B.DEFAULT_SYMBOL,currencyFormat:o=B.DEFAULT_DECIMAL_PLACES}=e,t=((s=e.labelProps)==null?void 0:s.label)||"CurrencyInput",b=c.useRef(null),p=o===B.TWO_DECIMAL_PLACES?B.TWO_DP_FORMAT_OPTIONS:B.ZERO_DP_FORMAT_OPTIONS,d={...e,"aria-label":t,locale:a,isReadOnly:e.readOnly,isDisabled:e.disabled},$=cr({...d,formatOptions:p}),{groupProps:v,inputProps:n}=$r(d,$,b),l={...e,...n,currencyFormat:void 0,currencySymbol:void 0,locale:void 0};return xe.jsx("div",{...v,children:xe.jsx(Za,{...l,testID:r,ref:b,prefix:i,defaultValue:void 0,"aria-label":t})})}Ta.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
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
>`},description:""},currencyFormat:{required:!1,tsType:{name:"CoreCurrencyInput.CurrencyFormat"},description:""}}};const vr={title:"Components/Inputs/CurrencyInput",component:Ta,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"}},args:{onBlur:Ka(),hasError:!1,readOnly:!1}},y={args:{labelProps:{"aria-label":"CurrencyInput"}}},W={...y,args:{defaultValue:2.13,labelProps:{label:"CurrencyInput"}}},q={...y,args:{defaultValue:5,step:5,labelProps:{label:"CurrencyInput with step 5",labelHint:"Pressing ↑ and ↓ steps value by 5"}}},H={...y,args:{defaultValue:12.54,locale:"de-DE",labelProps:{label:"CurrencyInput (German locale)",labelHint:"Additional information"}}},_={...y,args:{currencyFormat:"NoDecimalPlaces",defaultValue:12,labelProps:{label:"CurrencyInput with zero decimal places"}}},j={...y,args:{defaultValue:15.24,currencySymbol:"$",labelProps:{label:"CurrencyInput with $"}}},U={...y,args:{disabled:!0,defaultValue:89.08,labelProps:{label:"Disabled TextInput"}}},z={...y,args:{hasError:!0,defaultValue:45.89,labelProps:{label:"CurrencyInput with Error"},alertProps:{severity:"error",children:"Amount must be between €1,000 and €2,000."}}},K={...y,args:{readOnly:!0,defaultValue:30.67,labelProps:{label:"ReadOnly CurrencyInput"}}};var De,Ce,he;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "CurrencyInput"
    }
  }
}`,...(he=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var Le,Fe,Ee;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 2.13,
    labelProps: {
      label: "CurrencyInput"
    }
  }
}`,...(Ee=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var Se,Ie,Ve;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 5,
    step: 5,
    labelProps: {
      label: "CurrencyInput with step 5",
      labelHint: "Pressing ↑ and ↓ steps value by 5"
    }
  }
}`,...(Ve=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Be,Ne,Oe;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.54,
    locale: "de-DE",
    labelProps: {
      label: "CurrencyInput (German locale)",
      labelHint: "Additional information"
    }
  }
}`,...(Oe=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Te,Me,we;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...Basic,
  args: {
    currencyFormat: "NoDecimalPlaces",
    defaultValue: 12,
    labelProps: {
      label: "CurrencyInput with zero decimal places"
    }
  }
}`,...(we=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var ke,Ae,Re;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 15.24,
    currencySymbol: "$",
    labelProps: {
      label: "CurrencyInput with $"
    }
  }
}`,...(Re=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var We,qe,He;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    defaultValue: 89.08,
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(He=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var _e,je,Ue;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ue=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var ze,Ke,Ze;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    defaultValue: 30.67,
    labelProps: {
      label: "ReadOnly CurrencyInput"
    }
  }
}`,...(Ze=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};const xr=["Basic","WithLabel","WithStep5","WithGermanLocale","WithZeroDecimalPlaces","WithDollarSymbol","Disabled","WithError","ReadOnly"],Vr=Object.freeze(Object.defineProperty({__proto__:null,Basic:y,Disabled:U,ReadOnly:K,WithDollarSymbol:j,WithError:z,WithGermanLocale:H,WithLabel:W,WithStep5:q,WithZeroDecimalPlaces:_,__namedExportsOrder:xr,default:vr},Symbol.toStringTag,{value:"Module"}));export{y as B,Vr as C,U as D,K as R,W,q as a,H as b,_ as c,j as d,z as e};
