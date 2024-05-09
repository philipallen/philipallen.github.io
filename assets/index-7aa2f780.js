var _=Object.defineProperty,l=(a,n)=>{for(var e in n)_(a,e,{get:n[e],enumerable:!0})},E={};l(E,{SPINNER_VARIANTS:()=>h,VARIANTS:()=>O});var O=["primary","secondary"],h={primary:"buttonPrimary",secondary:"buttonSecondary"},v={};l(v,{updateInputs:()=>N});function N(a,n="",e="checked"){const{parentIds:t,inputsMap:r}=m(a),o=r.get(n);o[e]=!o[e],o.isIndeterminate=!1,L(o,e),M(t,r,o,e)}function m(a){const n=new Map,e=new Map;function t(r,o){n.set(r.id,o),e.set(r.id,r),r.children&&r.children.forEach(s=>{t(s,r.id)})}return a.forEach(r=>{t(r)}),{parentIds:n,inputsMap:e}}function L(a,n){function e(t){t[n]=a[n],t.isIndeterminate=!1,t.children&&t.children.forEach(r=>{e(r)})}e(a)}function M(a,n,e,t){function r(o){const s=a.get(o.id),i=n.get(s||"");if(i&&i.children){const{children:d}=i,S=d.filter(I=>I[t]),f=d.filter(({isIndeterminate:I})=>I).length>0,p=S.length===0,u=S.length===d.length;f?(i[t]=!1,i.isIndeterminate=!0):p?(i[t]=!1,i.isIndeterminate=!1):u?(i[t]=!0,i.isIndeterminate=!1):(i[t]=!1,i.isIndeterminate=!0),r(i)}}r(e)}var R={};l(R,{COLOR_PALETTES:()=>D,DEFAULT_HEIGHT:()=>b,DEFAULT_WIDTH:()=>V});var D=["blue","lime","teal","honey"],V=120,b=120,g={};l(g,{SEVERITIES:()=>y});var y=["error"],x={};l(x,{VARIANTS:()=>F});var F=["default","buttonPrimary","buttonSecondary"],P={};l(P,{determineInnerShadowToDisplay:()=>C,getScrollPercentage:()=>T});function T(a,n,e){return e<n?Math.max(0,Math.floor(a)/Math.floor(n-e)):null}function C(a,n,e){const t=T(a,n,e);if(t!==null){if(t>0)return t<1?"BOTH":"TOP";if(t<1)return"BOTTOM"}return null}var B={};l(B,{SIZES:()=>H,TEXT_VALUES_TO_TYPE_MAP:()=>X,TEXT_VALUE_TYPES:()=>U});var U=["yes-no","on-off"],H=["small","default"],X={"on-off":{checked:"On",unchecked:"Off"},"yes-no":{checked:"Yes",unchecked:"No"}},G={};l(G,{DEFAULT_POSITION:()=>w,POSITIONS:()=>Y});var Y=["top","top-end","top-start","right","right-end","right-start","bottom","bottom-end","bottom-start","left","left-end","left-start"],w="top",W={};l(W,{BOLD_FONT_FAMILIES:()=>k,FONT_FAMILIES:()=>j,HEADING_VARIANTS:()=>A,STANDARD_VARIANTS:()=>c,VARIANTS:()=>Z});var A=["displayXL","displayL","displayM","displayS","headlineL","headlineM","headlineS","headlineXS"],c=["titleL","titleM","titleS","titleXS","bodyL","bodyM","bodyS","labelM","labelS"],Z=[...A,...c],j=["OpenSansBold","OpenSansSemiBold","OpenSansItalic","OpenSansSemiBoldItalic"],k=["OpenSansBold","OpenSansSemiBold","OpenSansSemiBoldItalic"];export{E as B,v as C,R as I,W as T,P as a,B as b,G as c};
