var p=Object.defineProperty,o=(a,n)=>{for(var e in n)p(a,e,{get:n[e],enumerable:!0})},u={};o(u,{DEFAULT_VARIANT:()=>L,HEADING_LEVELS:()=>O,VARIANTS:()=>v});var v=["default","nested"],L="default",O=[1,2,3,4,5],N={};o(N,{SPINNER_VARIANTS:()=>m,VARIANTS:()=>h});var h=["primary","secondary"],m={primary:"buttonPrimary",secondary:"buttonSecondary"},D={};o(D,{updateInputs:()=>R});function R(a,n="",e="checked"){const{parentIds:t,inputsMap:r}=V(a),s=r.get(n);s[e]=!s[e],s.isIndeterminate=!1,M(s,e),F(t,r,s,e)}function V(a){const n=new Map,e=new Map;function t(r,s){n.set(r.id,s),e.set(r.id,r),r.children&&r.children.forEach(l=>{t(l,r.id)})}return a.forEach(r=>{t(r)}),{parentIds:n,inputsMap:e}}function M(a,n){function e(t){t[n]=a[n],t.isIndeterminate=!1,t.children&&t.children.forEach(r=>{e(r)})}e(a)}function F(a,n,e,t){function r(s){const l=a.get(s.id),i=n.get(l||"");if(i&&i.children){const{children:d}=i,T=d.filter(I=>I[t]),_=d.filter(({isIndeterminate:I})=>I).length>0,c=T.length===0,f=T.length===d.length;_?(i[t]=!1,i.isIndeterminate=!0):c?(i[t]=!1,i.isIndeterminate=!1):f?(i[t]=!0,i.isIndeterminate=!1):(i[t]=!1,i.isIndeterminate=!0),r(i)}}r(e)}var b={};o(b,{DEFAULT_LOCALE:()=>g});var g="en-IE",x={};o(x,{COLOR_PALETTES:()=>U,DEFAULT_HEIGHT:()=>C,DEFAULT_WIDTH:()=>y});var U=["blue","lime","teal","honey"],y=120,C=120,P={};o(P,{SEVERITIES:()=>B});var B=["error"],H={};o(H,{VARIANTS:()=>G});var G=["default","buttonPrimary","buttonSecondary"],X={};o(X,{determineInnerShadowToDisplay:()=>Y,getScrollPercentage:()=>A});function A(a,n,e){return e<n?Math.max(0,Math.floor(a)/Math.floor(n-e)):null}function Y(a,n,e){const t=A(a,n,e);if(t!==null){if(t>0)return t<1?"BOTH":"TOP";if(t<1)return"BOTTOM"}return null}var w={};o(w,{SIZES:()=>W,TEXT_VALUES_TO_TYPE_MAP:()=>Z,TEXT_VALUE_TYPES:()=>k});var k=["yes-no","on-off"],W=["small","default"],Z={"on-off":{checked:"On",unchecked:"Off"},"yes-no":{checked:"Yes",unchecked:"No"}},j={};o(j,{DEFAULT_POSITION:()=>z,POSITIONS:()=>q});var q=["top","top-end","top-start","right","right-end","right-start","bottom","bottom-end","bottom-start","left","left-end","left-start"],z="top",J={};o(J,{BOLD_FONT_FAMILIES:()=>$,FONT_FAMILIES:()=>Q,HEADING_VARIANTS:()=>S,STANDARD_VARIANTS:()=>E,VARIANTS:()=>K});var S=["displayXL","displayL","displayM","displayS","headlineL","headlineM","headlineS","headlineXS"],E=["titleL","titleM","titleS","titleXS","bodyL","bodyM","bodyS","labelM","labelS"],K=[...S,...E],Q=["OpenSansBold","OpenSansSemiBold","OpenSansItalic","OpenSansSemiBoldItalic"],$=["OpenSansBold","OpenSansSemiBold","OpenSansSemiBoldItalic"];export{u as A,N as B,D as C,b as D,x as I,J as T,X as a,w as b,j as c};