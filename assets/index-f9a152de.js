var u=Object.defineProperty,s=(a,n)=>{for(var e in n)u(a,e,{get:n[e],enumerable:!0})},E={};s(E,{VARIANTS:()=>O});var O=["primary","secondary"],h={};s(h,{updateInputs:()=>v});function v(a,n="",e="checked"){const{parentIds:t,inputsMap:r}=L(a),l=r.get(n);l[e]=!l[e],l.isIndeterminate=!1,m(l,e),N(t,r,l,e)}function L(a){const n=new Map,e=new Map;function t(r,l){n.set(r.id,l),e.set(r.id,r),r.children&&r.children.forEach(o=>{t(o,r.id)})}return a.forEach(r=>{t(r)}),{parentIds:n,inputsMap:e}}function m(a,n){function e(t){t[n]=a[n],t.isIndeterminate=!1,t.children&&t.children.forEach(r=>{e(r)})}e(a)}function N(a,n,e,t){function r(l){const o=a.get(l.id),i=n.get(o||"");if(i&&i.children){const{children:d}=i,T=d.filter(I=>I[t]),p=d.filter(({isIndeterminate:I})=>I).length>0,A=T.length===0,_=T.length===d.length;p?(i[t]=!1,i.isIndeterminate=!0):A?(i[t]=!1,i.isIndeterminate=!1):_?(i[t]=!0,i.isIndeterminate=!1):(i[t]=!1,i.isIndeterminate=!0),r(i)}}r(e)}var M={};s(M,{COLOR_PALETTES:()=>D,DEFAULT_HEIGHT:()=>F,DEFAULT_WIDTH:()=>g});var D=["blue","lime","teal","honey"],g=120,F=120,R={};s(R,{SEVERITIES:()=>V});var V=["error"],b={};s(b,{determineInnerShadowToDisplay:()=>x,getScrollPercentage:()=>S});function S(a,n,e){return e<n?Math.max(0,Math.floor(a)/Math.floor(n-e)):null}function x(a,n,e){const t=S(a,n,e);if(t!==null){if(t>0)return t<1?"BOTH":"TOP";if(t<1)return"BOTTOM"}return null}var C={};s(C,{SIZES:()=>U,TEXT_VALUES_TO_TYPE_MAP:()=>P,TEXT_VALUE_TYPES:()=>B});var B=["yes-no","on-off"],U=["small","default"],P={"on-off":{checked:"On",unchecked:"Off"},"yes-no":{checked:"Yes",unchecked:"No"}},y={};s(y,{DEFAULT_POSITION:()=>X,POSITIONS:()=>H});var H=["top","top-end","top-start","right","right-end","right-start","bottom","bottom-end","bottom-start","left","left-end","left-start"],X="top",G={};s(G,{BOLD_FONT_FAMILIES:()=>W,FONT_FAMILIES:()=>w,HEADING_VARIANTS:()=>f,STANDARD_VARIANTS:()=>c,VARIANTS:()=>Y});var f=["displayXL","displayL","displayM","displayS","headlineL","headlineM","headlineS","headlineXS"],c=["titleL","titleM","titleS","titleXS","bodyL","bodyM","bodyS","labelM","labelS"],Y=[...f,...c],w=["OpenSansBold","OpenSansSemiBold","OpenSansItalic","OpenSansSemiBoldItalic"],W=["OpenSansBold","OpenSansSemiBold","OpenSansSemiBoldItalic"];export{E as B,h as C,M as I,G as T,b as a,C as b,y as c};