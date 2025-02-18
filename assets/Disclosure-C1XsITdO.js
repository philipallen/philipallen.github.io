import{a as h}from"./Button-Dm6TiVPZ.js";import{e as b,b as F,d as g,i as P,j as M,k as A}from"./useFocusRing-8RL9AhDF.js";import{r as V}from"./index-D9uilScg.js";import{r as n,R as c}from"./index-DH5ua8nC.js";import{c as p,d as W,$ as k}from"./useFocusWithin-D15f1-3B.js";import{$ as I}from"./chain-Crd5RmWG.js";import{$ as N}from"./useEvent-Ck1tIt86.js";import{$ as D}from"./useControlledState-BSXamw7l.js";import{$ as x}from"./focusSafely-CjmyL4wt.js";function B(s,e,d){let{isDisabled:a}=s,t=p(),l=p(),o=!W()&&"onbeforematch"in document.body,i=n.useRef(null),u=n.useCallback(()=>{i.current=requestAnimationFrame(()=>{d.current&&d.current.setAttribute("hidden","until-found")}),V.flushSync(()=>{e.toggle()})},[d,e]);return N(d,"beforematch",o?u:null),I(()=>{i.current&&cancelAnimationFrame(i.current),o&&d.current&&!a&&(e.isExpanded?d.current.removeAttribute("hidden"):d.current.setAttribute("hidden","until-found"))},[a,d,e.isExpanded,o]),n.useEffect(()=>()=>{i.current&&cancelAnimationFrame(i.current)},[]),{buttonProps:{id:t,"aria-expanded":e.isExpanded,"aria-controls":l,onPress:f=>{!a&&f.pointerType!=="keyboard"&&e.toggle()},isDisabled:a,onPressStart(f){f.pointerType==="keyboard"&&!a&&e.toggle()}},panelProps:{id:l,role:"group","aria-labelledby":t,"aria-hidden":!e.isExpanded,hidden:o?!0:!e.isExpanded}}}function G(s){let[e,d]=D(s.isExpanded,s.defaultExpanded||!1,s.onExpandedChange);const a=n.useCallback(()=>{d(!0)},[d]),t=n.useCallback(()=>{d(!1)},[d]),l=n.useCallback(()=>{d(!e)},[d,e]);return{isExpanded:e,setExpanded:d,expand:a,collapse:t,toggle:l}}function T(s){let{allowsMultipleExpanded:e=!1,isDisabled:d=!1}=s,[a,t]=D(n.useMemo(()=>s.expandedKeys?new Set(s.expandedKeys):void 0,[s.expandedKeys]),n.useMemo(()=>s.defaultExpandedKeys?new Set(s.defaultExpandedKeys):new Set,[s.defaultExpandedKeys]),s.onExpandedChange);return n.useEffect(()=>{!e&&a.size>1&&t(new Set([a.values().next().value]))}),{allowsMultipleExpanded:e,isDisabled:d,expandedKeys:a,setExpandedKeys:t,toggleKey(l){let r;e?(r=new Set(a),r.has(l)?r.delete(l):r.add(l)):r=new Set(a.has(l)?[]:[l]),t(r)}}}const v=n.createContext(null),Y=n.forwardRef(function(e,d){let a=T(e),t=b({...e,defaultClassName:"react-aria-DisclosureGroup",values:{isDisabled:a.isDisabled,state:a}}),l=x(e);return c.createElement("div",{...l,...t,ref:d,"data-disabled":e.isDisabled||void 0},c.createElement(v.Provider,{value:a},t.children))}),_=n.createContext(null),j=n.createContext(null),C=n.createContext(null),Z=n.forwardRef(function(e,d){[e,d]=F(e,d,_);let a=n.useContext(v),{id:t,...l}=e,r=p();t||(t=r);let o=a?a.expandedKeys.has(t):e.isExpanded,i=G({...e,isExpanded:o,onExpandedChange(S){var $;a&&a.toggleKey(t),($=e.onExpandedChange)===null||$===void 0||$.call(e,S)}}),u=c.useRef(null),f=e.isDisabled||(a==null?void 0:a.isDisabled)||!1,{buttonProps:y,panelProps:w}=B({...e,isExpanded:o,isDisabled:f},i,u),{isFocusVisible:m,focusProps:K}=g({within:!0}),E=b({...e,id:void 0,defaultClassName:"react-aria-Disclosure",values:{isExpanded:i.isExpanded,isDisabled:f,isFocusVisibleWithin:m,state:i}}),R=x(l);return c.createElement(P,{values:[[h,{slots:{[M]:{},trigger:y}}],[C,{panelProps:w,panelRef:u}],[j,i]]},c.createElement("div",{ref:d,"data-expanded":i.isExpanded||void 0,"data-disabled":f||void 0,"data-focus-visible-within":m||void 0,...R,...K,...E},E.children))}),ee=n.forwardRef(function(e,d){let{role:a="group"}=e,{panelProps:t,panelRef:l}=n.useContext(C),{isFocusVisible:r,focusProps:o}=g({within:!0}),i=b({...e,defaultClassName:"react-aria-DisclosurePanel",values:{isFocusVisibleWithin:r}}),u=x(e);return c.createElement("div",{...u,ref:A(d,l),...k(t,o),...i,role:a,"data-focus-visible-within":r||void 0},c.createElement(P,{values:[[h,null]]},e.children))});export{Z as $,ee as a,Y as b};
