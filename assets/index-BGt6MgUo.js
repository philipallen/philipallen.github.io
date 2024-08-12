var u=Object.defineProperty,A=(a,r)=>{for(var e in r)u(a,e,{get:r[e],enumerable:!0})},Fe=["error","warning","success","info"],pe=[1,2,3,4,5,6],v={};A(v,{DEFAULT_HEADING_LEVEL:()=>p,DEFAULT_VARIANT:()=>F,VARIANTS:()=>f});var f=["default","nested"],F="default",p=3,N={};A(N,{DEFAULT_HEADING_LEVEL:()=>U,DEFAULT_SEVERITY:()=>m});var m="info",U=2,R={};A(R,{SPINNER_VARIANTS:()=>C,VARIANTS:()=>M});var M=["primary","secondary"],C={primary:"buttonPrimary",secondary:"buttonSecondary"},V={};A(V,{updateInputs:()=>h});function h(a,r="",e="checked"){const{parentIds:t,inputsMap:n}=P(a),T=n.get(r);T[e]=!T[e],T.isIndeterminate=!1,g(T,e),x(t,n,T,e)}function P(a){const r=new Map,e=new Map;function t(n,T){r.set(n.id,T),e.set(n.id,n),n.children&&n.children.forEach(E=>{t(E,n.id)})}return a.forEach(n=>{t(n)}),{parentIds:r,inputsMap:e}}function g(a,r){function e(t){t[r]=a[r],t.isIndeterminate=!1,t.children&&t.children.forEach(n=>{e(n)})}e(a)}function x(a,r,e,t){function n(T){const E=a.get(T.id),i=r.get(E||"");if(i&&i.children){const{children:_}=i,l=_.filter(o=>o[t]),c=_.filter(({isIndeterminate:o})=>o).length>0,D=l.length===0,O=l.length===_.length;c?(i[t]=!1,i.isIndeterminate=!0):D?(i[t]=!1,i.isIndeterminate=!1):O?(i[t]=!0,i.isIndeterminate=!1):(i[t]=!1,i.isIndeterminate=!0),n(i)}}n(e)}var b={};A(b,{CURRENCY_FORMATS:()=>X,DEFAULT_DECIMAL_PLACES:()=>Y,DEFAULT_LOCALE:()=>y,DEFAULT_SYMBOL:()=>B,NO_DECIMAL_PLACES:()=>I,TWO_DECIMAL_PLACES:()=>s,TWO_DP_FORMAT_OPTIONS:()=>H,ZERO_DP_FORMAT_OPTIONS:()=>G});var y="en-IE",B="€",H={minimumFractionDigits:2,maximumFractionDigits:2},G={minimumFractionDigits:0,maximumFractionDigits:0},s="TwoDecimalPlaces",I="NoDecimalPlaces",Y=s,X=[s,I],w={};A(w,{DEFAULT_LOCALE:()=>k,LOCALES:()=>W});var W=["en-IE","en-GB"],k="en-IE",Z={};A(Z,{DEFAULT_VARIANT:()=>j,VARIANTS:()=>$});var $=["default","contained"],j="default",q={};A(q,{COLOR_PALETTES:()=>z,DEFAULT_HEIGHT:()=>K,DEFAULT_WIDTH:()=>J});var z=["blue","lime","teal","honey"],J=120,K=120,Q={};A(Q,{itemToString:()=>ee,mockItems:()=>te});function ee(a){return a?a.title:""}var te=Array.from({length:20},(a,r)=>{const e=`${r+1}`.padStart(2,"0");return{id:`item-${e}`,title:`Item ${e}`,value:e}}),re={};A(re,{DEFAULT_MAX_VALUE:()=>Ae,DEFAULT_MIN_VALUE:()=>ne,DEFAULT_STEP:()=>ae});var ae=1,ne=0,Ae=100,ie={};A(ie,{VARIANTS:()=>Te});var Te=["default","buttonPrimary","buttonSecondary"],Ee={};A(Ee,{determineInnerShadowToDisplay:()=>_e,getScrollPercentage:()=>S});function S(a,r,e){return e<r?Math.max(0,Math.floor(a)/Math.floor(r-e)):null}function _e(a,r,e){const t=S(a,r,e);if(t!==null){if(t>0)return t<1?"BOTH":"TOP";if(t<1)return"BOTTOM"}return null}var oe={};A(oe,{SIZES:()=>le,TEXT_VALUES_TO_TYPE_MAP:()=>Ie,TEXT_VALUE_TYPES:()=>se});var se=["yes-no","on-off"],le=["small","default"],Ie={"on-off":{checked:"On",unchecked:"Off"},"yes-no":{checked:"Yes",unchecked:"No"}},Se={};A(Se,{DEFAULT_OFFSET:()=>Le,DEFAULT_POSITION:()=>ce,POSITIONS:()=>de});var Le=8,de=["top","top-end","top-start","right","right-end","right-start","bottom","bottom-end","bottom-start","left","left-end","left-start"],ce="top",De={};A(De,{BOLD_FONT_FAMILIES:()=>ve,FONT_FAMILIES:()=>ue,HEADING_VARIANTS:()=>L,STANDARD_VARIANTS:()=>d,VARIANTS:()=>Oe});var L=["displayXL","displayL","displayM","displayS","headlineL","headlineM","headlineS","headlineXS"],d=["titleL","titleM","titleS","titleXS","bodyL","bodyM","bodyS","labelM","labelS"],Oe=[...L,...d],ue=["OpenSansBold","OpenSansSemiBold","OpenSansItalic","OpenSansSemiBoldItalic"],ve=["OpenSansBold","OpenSansSemiBold","OpenSansSemiBoldItalic"];export{v as A,R as B,V as C,w as D,pe as H,Z as I,Q as S,De as T,Fe as a,q as b,N as c,Ee as d,oe as e,Se as f,re as g,b as h};
