import{v as R}from"./v4-CQkTLCs1.js";const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,{global:O}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:h}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var m="storybook/actions",D=`${m}/action-event`,S={depth:10,clearOnStoryChange:!0,limit:50},l=(t,o)=>{let e=Object.getPrototypeOf(t);return!e||o(e)?e:l(e,o)},w=t=>!!(typeof t=="object"&&t&&l(t,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof t.persist=="function"),b=t=>{if(w(t)){let o=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));o.persist();let e=Object.getOwnPropertyDescriptor(o,"view"),n=e==null?void 0:e.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...e,value:Object.create(n.constructor.prototype)}),o}return t},v=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?R():Date.now().toString(36)+Math.random().toString(36).substring(2);function A(t,o={}){let e={...S,...o},n=function(...i){var a,s;if(o.implicit){let p=(a="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:a.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(p){let r=!((s=window==null?void 0:window.FEATURES)!=null&&s.disallowImplicitActionsInRenderV8),_=new h({phase:p.phase,name:t,deprecated:r});if(r)console.warn(_);else throw _}}let d=f.getChannel(),E=v(),y=5,c=i.map(b),g=i.length>1?c:c[0],u={id:E,count:0,data:{name:t,args:g},options:{...e,maxDepth:y+(e.depth||3),allowFunction:e.allowFunction||!1}};d.emit(D,u)};return n.isAction=!0,n}export{A as a};
