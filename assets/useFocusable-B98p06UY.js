import{h as $,i as u,j as n}from"./useFocusRing-CELWytXw.js";import{$ as c}from"./useFocusWithin-Dp0pJUJ1.js";import{r as o,R as l}from"./index-DH5ua8nC.js";import{$ as i}from"./useKeyboard-BZGC9FVW.js";let x=l.createContext(null);function p(e){let t=o.useContext(x)||{};n(t,e);let{ref:a,...r}=t;return r}function h(e,t){let{focusProps:a}=$(e),{keyboardProps:r}=i(e),d=c(a,r),s=p(t),b=e.isDisabled?{}:s,f=o.useRef(e.autoFocus);return o.useEffect(()=>{f.current&&t.current&&u(t.current),f.current=!1},[t]),{focusableProps:c({...d,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},b)}}export{h as $};
