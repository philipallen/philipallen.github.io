import{f as Ya}from"./index-Cnk2rnxF.js";import{j as Pe}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{o as E}from"./index-C3m9D1_L.js";import{T as Ja}from"./TextInput-YVV65-zK.js";import{f as Qe,d as ea,e as V,c as ie,a as he}from"./useLabel-B8zubuc2.js";import{$ as Qa,a as aa,b as en,c as an,d as nn,e as tn,f as rn,g as ln}from"./useSpinButton-Ct_xCUe_.js";import{$ as G,d as on,c as oe,a as sn,f as un}from"./useFocusWithin-DtMhJA8W.js";import{p as cn,q as na,n as dn,e as pn,t as mn,u as bn,$ as fn}from"./useFocusable-C8W1vPXm.js";import{$ as ge}from"./useNumberFormatter-CCIOAssj.js";function yn(e,a){let{onScroll:n,isDisabled:l}=e,u=d.useCallback(i=>{i.ctrlKey||(i.preventDefault(),i.stopPropagation(),n&&n({deltaX:i.deltaX,deltaY:i.deltaY}))},[n]);Qa(a,"wheel",l?void 0:u)}function vn(e,a){let{inputElementType:n="input",isDisabled:l=!1,isRequired:u=!1,isReadOnly:i=!1,type:p="text",validationBehavior:f="aria"}=e,[c,v]=Qe(e.value,e.defaultValue||"",e.onChange),{focusableProps:$}=cn(e,a),r=aa({...e,value:c}),{isInvalid:t,validationErrors:o,validationDetails:h}=r.displayValidation,{labelProps:C,fieldProps:L,descriptionProps:I,errorMessageProps:w}=en({...e,isInvalid:t,errorMessage:e.errorMessage||o}),g=na(e,{labelable:!0});const x={type:p,pattern:e.pattern};return ea(a,c,v),an(e,r,a),d.useEffect(()=>{if(a.current instanceof dn(a.current).HTMLTextAreaElement){let m=a.current;Object.defineProperty(m,"defaultValue",{get:()=>m.value,set:()=>{},configurable:!0})}},[a]),{labelProps:C,inputProps:G(g,n==="input"&&x,{disabled:l,readOnly:i,required:u&&f==="native","aria-required":u&&f==="aria"||void 0,"aria-invalid":t||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:c,onChange:m=>v(m.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...$,...L}),descriptionProps:I,errorMessageProps:w,isInvalid:t,validationErrors:o,validationDetails:h}}function Ce(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function $n(e,a,n){let l=on(r=>{let t=n.current,o;switch(r.inputType){case"historyUndo":case"historyRedo":return;case"insertLineBreak":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":o=t.value.slice(0,t.selectionStart)+t.value.slice(t.selectionEnd);break;case"deleteContentForward":o=t.selectionEnd===t.selectionStart?t.value.slice(0,t.selectionStart)+t.value.slice(t.selectionEnd+1):t.value.slice(0,t.selectionStart)+t.value.slice(t.selectionEnd);break;case"deleteContentBackward":o=t.selectionEnd===t.selectionStart?t.value.slice(0,t.selectionStart-1)+t.value.slice(t.selectionStart):t.value.slice(0,t.selectionStart)+t.value.slice(t.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":o=t.value.slice(t.selectionStart);break;default:r.data!=null&&(o=t.value.slice(0,t.selectionStart)+r.data+t.value.slice(t.selectionEnd));break}(o==null||!a.validate(o))&&r.preventDefault()});d.useEffect(()=>{if(!Ce())return;let r=n.current;return r.addEventListener("beforeinput",l,!1),()=>{r.removeEventListener("beforeinput",l,!1)}},[n,l]);let u=Ce()?null:r=>{let t=r.target.value.slice(0,r.target.selectionStart)+r.data+r.target.value.slice(r.target.selectionEnd);a.validate(t)||r.preventDefault()},{labelProps:i,inputProps:p,descriptionProps:f,errorMessageProps:c,...v}=vn(e,n),$=d.useRef(null);return{inputProps:G(p,{onBeforeInput:u,onCompositionStart(){let{value:r,selectionStart:t,selectionEnd:o}=n.current;$.current={value:r,selectionStart:t,selectionEnd:o}},onCompositionEnd(){if(!a.validate(n.current.value)){let{value:r,selectionStart:t,selectionEnd:o}=$.current;n.current.value=r,n.current.setSelectionRange(t,o),a.setInputValue(r)}}}),labelProps:i,descriptionProps:f,errorMessageProps:c,...v}}var ta={};ta={decrease:e=>`خفض ${e.fieldLabel}`,increase:e=>`زيادة ${e.fieldLabel}`,numberField:"حقل رقمي"};var ra={};ra={decrease:e=>`Намаляване ${e.fieldLabel}`,increase:e=>`Усилване ${e.fieldLabel}`,numberField:"Номер на полето"};var la={};la={decrease:e=>`Snížit ${e.fieldLabel}`,increase:e=>`Zvýšit ${e.fieldLabel}`,numberField:"Číselné pole"};var ia={};ia={decrease:e=>`Reducer ${e.fieldLabel}`,increase:e=>`Øg ${e.fieldLabel}`,numberField:"Talfelt"};var oa={};oa={decrease:e=>`${e.fieldLabel} verringern`,increase:e=>`${e.fieldLabel} erhöhen`,numberField:"Nummernfeld"};var sa={};sa={decrease:e=>`Μείωση ${e.fieldLabel}`,increase:e=>`Αύξηση ${e.fieldLabel}`,numberField:"Πεδίο αριθμού"};var ua={};ua={decrease:e=>`Decrease ${e.fieldLabel}`,increase:e=>`Increase ${e.fieldLabel}`,numberField:"Number field"};var ca={};ca={decrease:e=>`Reducir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var da={};da={decrease:e=>`Vähenda ${e.fieldLabel}`,increase:e=>`Suurenda ${e.fieldLabel}`,numberField:"Numbri väli"};var pa={};pa={decrease:e=>`Vähennä ${e.fieldLabel}`,increase:e=>`Lisää ${e.fieldLabel}`,numberField:"Numerokenttä"};var ma={};ma={decrease:e=>`Diminuer ${e.fieldLabel}`,increase:e=>`Augmenter ${e.fieldLabel}`,numberField:"Champ de nombre"};var ba={};ba={decrease:e=>`הקטן ${e.fieldLabel}`,increase:e=>`הגדל ${e.fieldLabel}`,numberField:"שדה מספר"};var fa={};fa={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var ya={};ya={decrease:e=>`${e.fieldLabel} csökkentése`,increase:e=>`${e.fieldLabel} növelése`,numberField:"Számmező"};var va={};va={decrease:e=>`Riduci ${e.fieldLabel}`,increase:e=>`Aumenta ${e.fieldLabel}`,numberField:"Campo numero"};var $a={};$a={decrease:e=>`${e.fieldLabel}を縮小`,increase:e=>`${e.fieldLabel}を拡大`,numberField:"数値フィールド"};var Pa={};Pa={decrease:e=>`${e.fieldLabel} 감소`,increase:e=>`${e.fieldLabel} 증가`,numberField:"번호 필드"};var ha={};ha={decrease:e=>`Sumažinti ${e.fieldLabel}`,increase:e=>`Padidinti ${e.fieldLabel}`,numberField:"Numerio laukas"};var ga={};ga={decrease:e=>`Samazināšana ${e.fieldLabel}`,increase:e=>`Palielināšana ${e.fieldLabel}`,numberField:"Skaitļu lauks"};var Ca={};Ca={decrease:e=>`Reduser ${e.fieldLabel}`,increase:e=>`Øk ${e.fieldLabel}`,numberField:"Tallfelt"};var Ia={};Ia={decrease:e=>`${e.fieldLabel} verlagen`,increase:e=>`${e.fieldLabel} verhogen`,numberField:"Getalveld"};var xa={};xa={decrease:e=>`Zmniejsz ${e.fieldLabel}`,increase:e=>`Zwiększ ${e.fieldLabel}`,numberField:"Pole numeru"};var Va={};Va={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo de número"};var Ba={};Ba={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:"Campo numérico"};var Da={};Da={decrease:e=>`Scădere ${e.fieldLabel}`,increase:e=>`Creștere ${e.fieldLabel}`,numberField:"Câmp numeric"};var Ta={};Ta={decrease:e=>`Уменьшение ${e.fieldLabel}`,increase:e=>`Увеличение ${e.fieldLabel}`,numberField:"Числовое поле"};var La={};La={decrease:e=>`Znížiť ${e.fieldLabel}`,increase:e=>`Zvýšiť ${e.fieldLabel}`,numberField:"Číselné pole"};var Fa={};Fa={decrease:e=>`Upadati ${e.fieldLabel}`,increase:e=>`Povečajte ${e.fieldLabel}`,numberField:"Številčno polje"};var Ea={};Ea={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Povećaj ${e.fieldLabel}`,numberField:"Polje broja"};var wa={};wa={decrease:e=>`Minska ${e.fieldLabel}`,increase:e=>`Öka ${e.fieldLabel}`,numberField:"Nummerfält"};var Na={};Na={decrease:e=>`${e.fieldLabel} azalt`,increase:e=>`${e.fieldLabel} arttır`,numberField:"Sayı alanı"};var Sa={};Sa={decrease:e=>`Зменшити ${e.fieldLabel}`,increase:e=>`Збільшити ${e.fieldLabel}`,numberField:"Поле номера"};var Oa={};Oa={decrease:e=>`降低 ${e.fieldLabel}`,increase:e=>`提高 ${e.fieldLabel}`,numberField:"数字字段"};var Ra={};Ra={decrease:e=>`縮小 ${e.fieldLabel}`,increase:e=>`放大 ${e.fieldLabel}`,numberField:"數字欄位"};var ka={};ka={"ar-AE":ta,"bg-BG":ra,"cs-CZ":la,"da-DK":ia,"de-DE":oa,"el-GR":sa,"en-US":ua,"es-ES":ca,"et-EE":da,"fi-FI":pa,"fr-FR":ma,"he-IL":ba,"hr-HR":fa,"hu-HU":ya,"it-IT":va,"ja-JP":$a,"ko-KR":Pa,"lt-LT":ha,"lv-LV":ga,"nb-NO":Ca,"nl-NL":Ia,"pl-PL":xa,"pt-BR":Va,"pt-PT":Ba,"ro-RO":Da,"ru-RU":Ta,"sk-SK":La,"sl-SI":Fa,"sr-SP":Ea,"sv-SE":wa,"tr-TR":Na,"uk-UA":Sa,"zh-CN":Oa,"zh-TW":Ra};function Pn(e){return e&&e.__esModule?e.default:e}function hn(e,a,n){let{id:l,decrementAriaLabel:u,incrementAriaLabel:i,isDisabled:p,isReadOnly:f,isRequired:c,minValue:v,maxValue:$,autoFocus:r,label:t,formatOptions:o,onBlur:h=()=>{},onFocus:C,onFocusChange:L,onKeyDown:I,onKeyUp:w,description:g,errorMessage:x,isWheelDisabled:m,...Q}=e,{increment:N,incrementToMax:ee,decrement:S,decrementToMin:ae,numberValue:F,inputValue:b,commit:O,commitValidation:R}=a;const k=nn(Pn(ka),"@react-aria/numberfield");let W=oe(l),{focusProps:ne}=pn({onBlur(){O()}}),X=ge(o),te=d.useMemo(()=>X.resolvedOptions(),[X]),Y=ge({...o,currencySign:void 0}),ue=d.useMemo(()=>isNaN(F)?"":Y.format(F),[Y,F]),{spinButtonProps:s,incrementButtonProps:J,decrementButtonProps:B}=tn({isDisabled:p,isReadOnly:f,isRequired:c,maxValue:$,minValue:v,onIncrement:N,onIncrementToMax:ee,onDecrement:S,onDecrementToMin:ae,value:F,textValue:ue}),[D,Ma]=d.useState(!1),{focusWithinProps:Aa}=sn({isDisabled:p,onFocusWithinChange:Ma}),qa=d.useCallback(P=>{Math.abs(P.deltaY)<=Math.abs(P.deltaX)||(P.deltaY>0?N():P.deltaY<0&&S())},[S,N]);yn({onScroll:qa,isDisabled:m||p||f||!D},n);let ce=te.maximumFractionDigits>0,de=a.minValue===void 0||isNaN(a.minValue)||a.minValue<0,M="numeric";mn()?de?M="text":ce&&(M="decimal"):bn()&&(de?M="numeric":ce&&(M="decimal"));let ja=P=>{a.validate(P)&&a.setInputValue(P)},Ha=na(e),pe=d.useCallback(P=>{P.key==="Enter"?(O(),R()):P.continuePropagation()},[O,R]),{isInvalid:me,validationErrors:_a,validationDetails:Ua}=a.displayValidation,{labelProps:be,inputProps:za,descriptionProps:Ka,errorMessageProps:Za}=$n({...Q,...Ha,name:void 0,label:t,autoFocus:r,isDisabled:p,isReadOnly:f,isRequired:c,validate:void 0,[rn]:a,value:b,defaultValue:void 0,autoComplete:"off","aria-label":e["aria-label"]||void 0,"aria-labelledby":e["aria-labelledby"]||void 0,id:W,type:"text",inputMode:M,onChange:ja,onBlur:h,onFocus:C,onFocusChange:L,onKeyDown:d.useMemo(()=>un(pe,I),[pe,I]),onKeyUp:w,description:g,errorMessage:x},a,n);ea(n,a.numberValue,a.setNumberValue);let fe=G(s,ne,za,{role:null,"aria-roledescription":fn()?null:k.format("numberField"),"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null,autoCorrect:"off",spellCheck:"false"});e.validationBehavior==="native"&&(fe["aria-required"]=void 0);let ye=P=>{var le;document.activeElement!==n.current&&(P.pointerType==="mouse"?(le=n.current)===null||le===void 0||le.focus():P.target.focus())},re=e["aria-label"]||(typeof e.label=="string"?e.label:""),T;re||(T=e.label!=null?be.id:e["aria-labelledby"]);let ve=oe(),$e=oe(),Ga=G(J,{"aria-label":i||k.format("increase",{fieldLabel:re}).trim(),id:T&&!i?ve:null,"aria-labelledby":T&&!i?`${ve} ${T}`:null,"aria-controls":W,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canIncrement,onPressStart:ye}),Xa=G(B,{"aria-label":u||k.format("decrease",{fieldLabel:re}).trim(),id:T&&!u?$e:null,"aria-labelledby":T&&!u?`${$e} ${T}`:null,"aria-controls":W,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!a.canDecrement,onPressStart:ye});return{groupProps:{...Aa,role:"group","aria-disabled":p,"aria-invalid":me?"true":void 0},labelProps:be,inputProps:fe,incrementButtonProps:Ga,decrementButtonProps:Xa,errorMessageProps:Za,descriptionProps:Ka,isInvalid:me,validationErrors:_a,validationDetails:Ua}}function gn(e){let{minValue:a,maxValue:n,step:l,formatOptions:u,value:i,defaultValue:p=NaN,onChange:f,locale:c,isDisabled:v,isReadOnly:$}=e;i===null&&(i=NaN),i!==void 0&&!isNaN(i)&&(l!==void 0&&!isNaN(l)?i=V(i,a,n,l):i=ie(i,a,n)),isNaN(p)||(l!==void 0&&!isNaN(l)?p=V(p,a,n,l):p=ie(p,a,n));let[r,t]=Qe(i,isNaN(p)?NaN:p,f),[o,h]=d.useState(()=>isNaN(r)?"":new he(c,u).format(r)),C=d.useMemo(()=>new ln(c,u),[c,u]),L=d.useMemo(()=>C.getNumberingSystem(o),[C,o]),I=d.useMemo(()=>new he(c,{...u,numberingSystem:L}),[c,u,L]),w=d.useMemo(()=>I.resolvedOptions(),[I]),g=d.useCallback(s=>isNaN(s)||s===null?"":I.format(s),[I]),x=aa({...e,value:r}),m=l!==void 0&&!isNaN(l)?l:1;w.style==="percent"&&(l===void 0||isNaN(l))&&(m=.01);let[Q,N]=d.useState(r),[ee,S]=d.useState(c),[ae,F]=d.useState(u);(!Object.is(r,Q)||c!==ee||u!==ae)&&(h(g(r)),N(r),S(c),F(u));let b=d.useMemo(()=>C.parse(o),[C,o]),O=()=>{if(!o.length){t(NaN),h(i===void 0?"":g(r));return}if(isNaN(b)){h(g(r));return}let s;l===void 0||isNaN(l)?s=ie(b,a,n):s=V(b,a,n,l),s=C.parse(g(s)),t(s),h(g(i===void 0?s:r))},R=(s,J=0)=>{let B=b;if(isNaN(B)){let D=isNaN(J)?0:J;return V(D,a,n,m)}else{let D=V(B,a,n,m);return s==="+"&&D>B||s==="-"&&D<B?D:V(se(s,B,m),a,n,m)}},k=()=>{let s=R("+",a);s===r&&h(g(s)),t(s),x.commitValidation()},W=()=>{let s=R("-",n);s===r&&h(g(s)),t(s),x.commitValidation()},ne=()=>{n!=null&&(t(V(n,a,n,m)),x.commitValidation())},X=()=>{a!=null&&(t(a),x.commitValidation())},te=d.useMemo(()=>!v&&!$&&(isNaN(b)||n===void 0||isNaN(n)||V(b,a,n,m)>b||se("+",b,m)<=n),[v,$,a,n,m,b]),Y=d.useMemo(()=>!v&&!$&&(isNaN(b)||a===void 0||isNaN(a)||V(b,a,n,m)<b||se("-",b,m)>=a),[v,$,a,n,m,b]);return{...x,validate:s=>C.isValidPartialNumber(s,a,n),increment:k,incrementToMax:ne,decrement:W,decrementToMin:X,canIncrement:te,canDecrement:Y,minValue:a,maxValue:n,numberValue:b,setNumberValue:t,setInputValue:h,inputValue:o,commit:O}}function se(e,a,n){let l=e==="+"?a+n:a-n;if(a%1!==0||n%1!==0){const u=a.toString().split("."),i=n.toString().split("."),p=u[1]&&u[1].length||0,f=i[1]&&i[1].length||0,c=Math.pow(10,Math.max(p,f));a=Math.round(a*c),n=Math.round(n*c),l=e==="+"?a+n:a-n,l/=c}return l}function Wa(e){var o;const{locale:a=E.DEFAULT_LOCALE,testID:n="currencyinput",currencySymbol:l=E.DEFAULT_SYMBOL,currencyFormat:u=E.DEFAULT_DECIMAL_PLACES}=e,i=((o=e.labelProps)==null?void 0:o.label)||"CurrencyInput",p=d.useRef(null),f=u===E.TWO_DECIMAL_PLACES?E.TWO_DP_FORMAT_OPTIONS:E.ZERO_DP_FORMAT_OPTIONS,c={...e,"aria-label":i,locale:a,isReadOnly:e.readOnly,isDisabled:e.disabled},v=gn({...c,formatOptions:f}),{groupProps:$,inputProps:r}=hn(c,v,p),t={...r,currencyFormat:void 0,currencySymbol:void 0,locale:void 0};return Pe.jsx("div",{...$,children:Pe.jsx(Ja,{...t,labelProps:e.labelProps,hasError:e.hasError,alertProps:e.alertProps,testID:n,ref:p,prefix:l,defaultValue:void 0,"aria-label":`${l}${t.value}`})})}Wa.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{currencySymbol:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},alertProps:{required:!1,tsType:{name:"intersection",raw:`PropsWithOptionalTestID & {
  severity: AlertSeverity;
  children: string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"signature",type:"object",raw:`{
  severity: AlertSeverity;
  children: string;
}`,signature:{properties:[{key:"severity",value:{name:"AlertSeverity",required:!0}},{key:"children",value:{name:"string",required:!0}}]}}]},description:""},labelProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
> & {
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
} & Pick<
    InputLabelTopBaseProps,
    "labelHint" | "labelHintID" | "labelHintTooltipProps"
  > & {
    htmlFor: string;
    label?: string;
  }`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithRef<"label">'},{name:"union",raw:'"htmlFor" | "style" | "className"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor" | "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  labelTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}},{name:"Pick",elements:[{name:"intersection",raw:`PropsWithChildren & {
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,elements:[{name:"PropsWithChildren"},{name:"signature",type:"object",raw:`{
  labelElement: JSX.Element;
  labelText?: string;
  labelHint?: string;
  labelHintID?: string;
  labelHintTooltipProps?: Omit<
    InputLabelTopBaseTooltipProps,
    "otherIconButtonProps"
  >;
}`,signature:{properties:[{key:"labelElement",value:{name:"JSX.Element",required:!0}},{key:"labelText",value:{name:"string",required:!1}},{key:"labelHint",value:{name:"string",required:!1}},{key:"labelHintID",value:{name:"string",required:!1}},{key:"labelHintTooltipProps",value:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  iconButtonProps: Omit<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant" | "onClick"
  >;
  otherIconButtonProps: Pick<
    InlineTooltipIconButtonProps,
    "variant" | "typographyVariant"
  >;
  contentProps: {
    children: React.ReactNode;
  };
}`,signature:{properties:[{key:"iconButtonProps",value:{name:"Omit",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant" | "onClick"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'},{name:"literal",value:'"onClick"'}]}],raw:`Omit<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant" | "onClick"
>`,required:!0}},{key:"otherIconButtonProps",value:{name:"Pick",elements:[{name:"intersection",raw:`TooltipIconButtonProps & {
  typographyVariant?: CoreTypography.Variant;
}`,elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  variant?: CoreTooltipIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  variant?: CoreTooltipIconButton.Variant;
}`,signature:{properties:[{key:"variant",value:{name:"CoreTooltipIconButton.Variant",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  typographyVariant?: CoreTypography.Variant;
}`,signature:{properties:[{key:"typographyVariant",value:{name:"CoreTypography.Variant",required:!1}}]}}]},{name:"union",raw:'"variant" | "typographyVariant"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"typographyVariant"'}]}],raw:`Pick<
  InlineTooltipIconButtonProps,
  "variant" | "typographyVariant"
>`,required:!0}},{key:"contentProps",value:{name:"signature",type:"object",raw:`{
  children: React.ReactNode;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]},required:!0}}]}},{name:"literal",value:'"otherIconButtonProps"'}],raw:`Omit<
  InputLabelTopBaseTooltipProps,
  "otherIconButtonProps"
>`,required:!1}}]}}]},{name:"union",raw:'"labelHint" | "labelHintID" | "labelHintTooltipProps"',elements:[{name:"literal",value:'"labelHint"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"labelHintTooltipProps"'}]}],raw:`Pick<
  InputLabelTopBaseProps,
  "labelHint" | "labelHintID" | "labelHintTooltipProps"
>`},{name:"signature",type:"object",raw:`{
  htmlFor: string;
  label?: string;
}`,signature:{properties:[{key:"htmlFor",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"htmlFor" | "labelHintID" | "children"',elements:[{name:"literal",value:'"htmlFor"'},{name:"literal",value:'"labelHintID"'},{name:"literal",value:'"children"'}]}],raw:`Omit<
  InputLabelTopProps,
  "htmlFor" | "labelHintID" | "children"
>`},description:""},currencyFormat:{required:!1,tsType:{name:"CoreCurrencyInput.CurrencyFormat"},description:""}}};const Cn={title:"Components/Inputs/CurrencyInput",component:Wa,argTypes:{hasError:{control:"boolean"},readOnly:{control:"boolean"}},args:{onChange:Ya(),hasError:!1,readOnly:!1}},y={args:{labelProps:{"aria-label":"CurrencyInput"}}},A={...y,args:{defaultValue:2.13,labelProps:{label:"CurrencyInput",labelTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},q={...y,args:{defaultValue:5,step:5,labelProps:{label:"CurrencyInput with step 5",labelHint:"Pressing ↑ and ↓ steps value by 5",labelHintTooltipProps:{iconButtonProps:{"aria-label":"Button label"},contentProps:{children:"APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."}}}}},j={...y,args:{defaultValue:12.54,locale:"de-DE",labelProps:{label:"CurrencyInput (German locale)",labelHint:"Additional information"}}},H={...y,args:{currencyFormat:"NoDecimalPlaces",defaultValue:12,labelProps:{label:"CurrencyInput with zero decimal places"}}},_={...y,args:{defaultValue:15.24,currencySymbol:"$",labelProps:{label:"CurrencyInput with $"}}},U={...y,args:{disabled:!0,defaultValue:89.08,labelProps:{label:"Disabled TextInput"}}},z={...y,args:{hasError:!0,defaultValue:45.89,labelProps:{label:"CurrencyInput with Error"},alertProps:{severity:"error",children:"Amount must be between €1,000 and €2,000."}}},K={...y,args:{readOnly:!0,defaultValue:30.67,labelProps:{label:"ReadOnly CurrencyInput"}}},Z={...y,args:{defaultValue:12e3,minValue:1e3,maxValue:2e4,labelProps:{label:"CurrencyInput"}}};var Ie,xe,Ve;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    labelProps: {
      "aria-label": "CurrencyInput"
    }
  }
}`,...(Ve=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var Be,De,Te;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 2.13,
    labelProps: {
      label: "CurrencyInput",
      labelTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(Te=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Le,Fe,Ee;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 5,
    step: 5,
    labelProps: {
      label: "CurrencyInput with step 5",
      labelHint: "Pressing ↑ and ↓ steps value by 5",
      labelHintTooltipProps: {
        iconButtonProps: {
          "aria-label": "Button label"
        },
        contentProps: {
          children: "APR stands for Annual Percentage Rate. It's the rate you will have to pay for the chosen loan amount."
        }
      }
    }
  }
}`,...(Ee=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var we,Ne,Se;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12.54,
    locale: "de-DE",
    labelProps: {
      label: "CurrencyInput (German locale)",
      labelHint: "Additional information"
    }
  }
}`,...(Se=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var Oe,Re,ke;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  ...Basic,
  args: {
    currencyFormat: "NoDecimalPlaces",
    defaultValue: 12,
    labelProps: {
      label: "CurrencyInput with zero decimal places"
    }
  }
}`,...(ke=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var We,Me,Ae;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 15.24,
    currencySymbol: "$",
    labelProps: {
      label: "CurrencyInput with $"
    }
  }
}`,...(Ae=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var qe,je,He;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true,
    defaultValue: 89.08,
    labelProps: {
      label: "Disabled TextInput"
    }
  }
}`,...(He=(je=U.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var _e,Ue,ze;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ke,Ze,Ge;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  ...Basic,
  args: {
    readOnly: true,
    defaultValue: 30.67,
    labelProps: {
      label: "ReadOnly CurrencyInput"
    }
  }
}`,...(Ge=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source}}};var Xe,Ye,Je;Z.parameters={...Z.parameters,docs:{...(Xe=Z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  ...Basic,
  args: {
    defaultValue: 12000,
    minValue: 1000,
    maxValue: 20000,
    labelProps: {
      label: "CurrencyInput"
    }
  }
}`,...(Je=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};const In=["Basic","WithLabel","WithStep5","WithGermanLocale","WithZeroDecimalPlaces","WithDollarSymbol","Disabled","WithError","ReadOnly","WithMinAndMaxValues"],On=Object.freeze(Object.defineProperty({__proto__:null,Basic:y,Disabled:U,ReadOnly:K,WithDollarSymbol:_,WithError:z,WithGermanLocale:j,WithLabel:A,WithMinAndMaxValues:Z,WithStep5:q,WithZeroDecimalPlaces:H,__namedExportsOrder:In,default:Cn},Symbol.toStringTag,{value:"Module"}));export{y as B,On as C,U as D,K as R,A as W,q as a,j as b,H as c,_ as d,z as e};
