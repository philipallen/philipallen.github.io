var L=Object.defineProperty,i=(a,r)=>{for(var e in r)L(a,e,{get:r[e],enumerable:!0})},O={};i(O,{DEFAULT_VARIANT:()=>v,HEADING_LEVELS:()=>f,VARIANTS:()=>p});var p=["default","nested"],v="default",f=[1,2,3,4,5],D={};i(D,{SPINNER_VARIANTS:()=>N,VARIANTS:()=>m});var m=["primary","secondary"],N={primary:"buttonPrimary",secondary:"buttonSecondary"},F={};i(F,{updateInputs:()=>h});function h(a,r="",e="checked"){const{parentIds:t,inputsMap:n}=R(a),A=n.get(r);A[e]=!A[e],A.isIndeterminate=!1,U(A,e),V(t,n,A,e)}function R(a){const r=new Map,e=new Map;function t(n,A){r.set(n.id,A),e.set(n.id,n),n.children&&n.children.forEach(T=>{t(T,n.id)})}return a.forEach(n=>{t(n)}),{parentIds:r,inputsMap:e}}function U(a,r){function e(t){t[r]=a[r],t.isIndeterminate=!1,t.children&&t.children.forEach(n=>{e(n)})}e(a)}function V(a,r,e,t){function n(A){const T=a.get(A.id),o=r.get(T||"");if(o&&o.children){const{children:s}=o,I=s.filter(l=>l[t]),d=s.filter(({isIndeterminate:l})=>l).length>0,c=I.length===0,u=I.length===s.length;d?(o[t]=!1,o.isIndeterminate=!0):c?(o[t]=!1,o.isIndeterminate=!1):u?(o[t]=!0,o.isIndeterminate=!1):(o[t]=!1,o.isIndeterminate=!0),n(o)}}n(e)}var M={};i(M,{DEFAULT_LOCALE:()=>g,DEFAULT_SYMBOL:()=>P,TWO_DP_FORMAT_OPTIONS:()=>x,ZERO_DP_FORMAT_OPTIONS:()=>C});var g="en-IE",P="€",x={minimumFractionDigits:2,maximumFractionDigits:2},C={minimumFractionDigits:0,maximumFractionDigits:0},b={};i(b,{DEFAULT_LOCALE:()=>y});var y="en-IE",B={};i(B,{DEFAULT_VARIANT:()=>X,VARIANTS:()=>H});var H=["default","contained"],X="default",G={};i(G,{COLOR_PALETTES:()=>Y,DEFAULT_HEIGHT:()=>w,DEFAULT_WIDTH:()=>k});var Y=["blue","lime","teal","honey"],k=120,w=120,W={};i(W,{SEVERITIES:()=>Z});var Z=["error"],$={};i($,{itemToString:()=>j,mockItems:()=>q});function j(a){return a?a.title:""}var q=Array.from({length:20},(a,r)=>{const e=`${r+1}`.padStart(2,"0");return{id:`item-${e}`,title:`Item ${e}`,value:e}}),z={};i(z,{DEFAULT_MAX_VALUE:()=>Q,DEFAULT_MIN_VALUE:()=>K,DEFAULT_STEP:()=>J});var J=1,K=0,Q=100,ee={};i(ee,{VARIANTS:()=>te});var te=["default","buttonPrimary","buttonSecondary"],re={};i(re,{determineInnerShadowToDisplay:()=>ae,getScrollPercentage:()=>S});function S(a,r,e){return e<r?Math.max(0,Math.floor(a)/Math.floor(r-e)):null}function ae(a,r,e){const t=S(a,r,e);if(t!==null){if(t>0)return t<1?"BOTH":"TOP";if(t<1)return"BOTTOM"}return null}var ne={};i(ne,{SIZES:()=>oe,TEXT_VALUES_TO_TYPE_MAP:()=>Ae,TEXT_VALUE_TYPES:()=>ie});var ie=["yes-no","on-off"],oe=["small","default"],Ae={"on-off":{checked:"On",unchecked:"Off"},"yes-no":{checked:"Yes",unchecked:"No"}},Te={};i(Te,{DEFAULT_OFFSET:()=>se,DEFAULT_POSITION:()=>Ie,POSITIONS:()=>le});var se=8,le=["top","top-end","top-start","right","right-end","right-start","bottom","bottom-end","bottom-start","left","left-end","left-start"],Ie="top",Se={};i(Se,{BOLD_FONT_FAMILIES:()=>de,FONT_FAMILIES:()=>Ee,HEADING_VARIANTS:()=>_,STANDARD_VARIANTS:()=>E,VARIANTS:()=>_e});var _=["displayXL","displayL","displayM","displayS","headlineL","headlineM","headlineS","headlineXS"],E=["titleL","titleM","titleS","titleXS","bodyL","bodyM","bodyS","labelM","labelS"],_e=[..._,...E],Ee=["OpenSansBold","OpenSansSemiBold","OpenSansItalic","OpenSansSemiBoldItalic"],de=["OpenSansBold","OpenSansSemiBold","OpenSansSemiBoldItalic"];export{O as A,D as B,F as C,b as D,B as I,$ as S,Se as T,G as a,re as b,ne as c,Te as d,z as e,M as f};