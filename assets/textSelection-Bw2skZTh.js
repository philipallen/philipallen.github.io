import{r as f}from"./index-DH5ua8nC.js";import{o as m,q as v}from"./useFocusRing-CELWytXw.js";import{$}from"./platform-kF5l1-53.js";function S(){let e=f.useRef(new Map),t=f.useCallback((l,c,n,s)=>{let o=s!=null&&s.once?(...b)=>{e.current.delete(n),n(...b)}:n;e.current.set(n,{type:c,eventTarget:l,fn:o,options:s}),l.addEventListener(c,o,s)},[]),d=f.useCallback((l,c,n,s)=>{var o;let b=((o=e.current.get(n))===null||o===void 0?void 0:o.fn)||n;l.removeEventListener(c,b,s),e.current.delete(n)},[]),i=f.useCallback(()=>{e.current.forEach((l,c)=>{d(l.eventTarget,l.type,c,l.options)})},[d]);return f.useEffect(()=>i,[i]),{addGlobalListener:t,removeGlobalListener:d,removeAllGlobalListeners:i}}let r="default",u="",a=new WeakMap;function y(e){if($()){if(r==="default"){const t=m(e);u=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}r="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(a.set(e,e.style.userSelect),e.style.userSelect="none")}function k(e){if($()){if(r!=="disabled")return;r="restoring",setTimeout(()=>{v(()=>{if(r==="restoring"){const t=m(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=u||""),u="",r="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&a.has(e)){let t=a.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),a.delete(e)}}export{S as $,k as a,y as b};
