import{r}from"./index-KmaxkdDD.js";import{$ as h}from"./useOverlayTriggerState-BVShW717.js";function i(n,a){const l=r.useRef(!0),c=r.useRef(null);r.useEffect(()=>(l.current=!0,()=>{l.current=!1}),[]),r.useEffect(()=>{let f=c.current;l.current?l.current=!1:(!f||a.some((t,e)=>!Object.is(t,f[e])))&&n(),c.current=a},a)}function C(n){let a=h({usage:"search",...n}),l=r.useCallback((t,e)=>e.length===0?!0:(t=t.normalize("NFC"),e=e.normalize("NFC"),a.compare(t.slice(0,e.length),e)===0),[a]),c=r.useCallback((t,e)=>e.length===0?!0:(t=t.normalize("NFC"),e=e.normalize("NFC"),a.compare(t.slice(-e.length),e)===0),[a]),f=r.useCallback((t,e)=>{if(e.length===0)return!0;t=t.normalize("NFC"),e=e.normalize("NFC");let o=0,u=e.length;for(;o+u<=t.length;o++){let m=t.slice(o,o+u);if(a.compare(e,m)===0)return!0}return!1},[a]);return r.useMemo(()=>({startsWith:l,endsWith:c,contains:f}),[l,c,f])}export{i as $,C as a};
