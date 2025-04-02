import{d as Pe,a as Z,b as Ke,c as ee,g as Se,$ as Me,f as te,h as Ce,j as ke,i as Fe}from"./Collection-EYIO8LIo.js";import{c as H,m as R,d as Ee,i as E,a as oe,$ as ae,l as we,b as N,g as _e,f as De,k as Ue}from"./utils-l5KLAjAw.js";import{$ as Ie,a as Ve,f as Te,c as X,e as Ae,b as Re}from"./Separator-DM_ENBr9.js";import{r as i,e as y}from"./index-KmaxkdDD.js";import{c as ze,d as Be,e as He,f as Ne,g as Oe}from"./Dialog-CL2ju9PL.js";import{a as We}from"./Text-DsbvCy5R.js";import{e as w,$ as ne,q as Y,v as Le,w as je}from"./useFocusRing-xuvxHm_5.js";import{b as qe,$ as Ge,a as Je}from"./usePress-DcYN71RK.js";import{$ as Qe}from"./useControlledState-BCPvzKxG.js";import{a as Xe}from"./FocusScope-DK63zPm7.js";const le=new WeakMap;function Ye(o,e,t){let{shouldFocusWrap:l=!0,onKeyDown:a,onKeyUp:r,...c}=o;!o["aria-label"]&&!o["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let s=w(o,{labelable:!0}),{listProps:n}=Ie({...c,ref:t,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:l,linkBehavior:"override"});return le.set(e,{onClose:o.onClose,onAction:o.onAction,shouldUseVirtualFocus:o.shouldUseVirtualFocus}),{menuProps:H(s,{onKeyDown:a,onKeyUp:r},{role:"menu",...n,onKeyDown:f=>{var u;(f.key!=="Escape"||o.shouldUseVirtualFocus)&&((u=n.onKeyDown)===null||u===void 0||u.call(n,f))}})}}function Ze(o,e,t){let{id:l,key:a,closeOnSelect:r,isVirtualized:c,"aria-haspopup":s,onPressStart:n,onPressUp:f,onPress:u,onPressChange:p,onPressEnd:g,onHoverStart:b,onHoverChange:v,onHoverEnd:P,onKeyDown:h,onKeyUp:_,onFocus:ie,onFocusChange:de,onBlur:ce,selectionManager:m=e.selectionManager}=o,x=!!s,D=x&&o["aria-expanded"]==="true";var U;let K=(U=o.isDisabled)!==null&&U!==void 0?U:m.isDisabled(a);var I;let W=(I=o.isSelected)!==null&&I!==void 0?I:m.isSelected(a),S=le.get(e),$=e.collection.getItem(a),M=o.onClose||S.onClose,ue=qe(),V=d=>{var A;if(!x){if(!($==null||(A=$.props)===null||A===void 0)&&A.onAction?$.props.onAction():o.onAction&&o.onAction(a),S.onAction){let ve=S.onAction;ve(a)}d.target instanceof HTMLAnchorElement&&$&&ue.open(d.target,d,$.props.href,$.props.routerOptions)}},T="menuitem";x||(m.selectionMode==="single"?T="menuitemradio":m.selectionMode==="multiple"&&(T="menuitemcheckbox"));let L=R(),j=R(),q=R(),k={id:l,"aria-disabled":K||void 0,role:T,"aria-label":o["aria-label"],"aria-labelledby":L,"aria-describedby":[j,q].filter(Boolean).join(" ")||void 0,"aria-controls":o["aria-controls"],"aria-haspopup":s,"aria-expanded":o["aria-expanded"]};m.selectionMode!=="none"&&!x&&(k["aria-checked"]=W),c&&(k["aria-posinset"]=$==null?void 0:$.index,k["aria-setsize"]=Ve(e.collection));let fe=d=>{d.pointerType==="keyboard"&&V(d),n==null||n(d)},G=()=>{!x&&M&&(r??(m.selectionMode!=="multiple"||m.isLink(a)))&&M()},be=d=>{d.pointerType==="mouse"&&(V(d),G()),f==null||f(d)},$e=d=>{d.pointerType!=="keyboard"&&d.pointerType!=="mouse"&&(V(d),G()),u==null||u(d)},{itemProps:C,isFocused:J}=Pe({id:l,selectionManager:m,key:a,ref:t,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:S.shouldUseVirtualFocus}),{pressProps:pe,isPressed:ye}=Ge({onPressStart:fe,onPress:$e,onPressUp:be,onPressChange:p,onPressEnd:g,isDisabled:K}),{hoverProps:me}=ne({isDisabled:K,onHoverStart(d){!Y()&&!(D&&s)&&(m.setFocused(!0),m.setFocusedKey(a)),b==null||b(d)},onHoverChange:v,onHoverEnd:P}),{keyboardProps:xe}=Le({onKeyDown:d=>{if(d.repeat){d.continuePropagation();return}switch(d.key){case" ":!K&&m.selectionMode==="none"&&!x&&r!==!1&&M&&M();break;case"Enter":!K&&r!==!1&&!x&&M&&M();break;default:x||d.continuePropagation(),h==null||h(d);break}},onKeyUp:_}),{focusProps:ge}=je({onBlur:ce,onFocus:ie,onFocusChange:de}),Q=w($==null?void 0:$.props);delete Q.id;let he=Je($==null?void 0:$.props);return{menuItemProps:{...k,...H(Q,he,x?{onFocus:C.onFocus,"data-collection":C["data-collection"],"data-key":C["data-key"]}:C,pe,me,xe,ge,S.shouldUseVirtualFocus||x?{onMouseDown:d=>d.preventDefault()}:void 0),tabIndex:C.tabIndex!=null&&D&&!S.shouldUseVirtualFocus?-1:C.tabIndex},labelProps:{id:L},descriptionProps:{id:j},keyboardShortcutProps:{id:q},isFocused:J,isFocusVisible:J&&m.isFocused&&Y()&&!D,isSelected:W,isPressed:ye,isDisabled:K}}function et(o){let{heading:e,"aria-label":t}=o,l=Ee();return{itemProps:{role:"presentation"},headingProps:e?{id:l,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":e?l:void 0}}}function se(o){let e=ze(o),[t,l]=i.useState(null),[a,r]=i.useState([]),c=()=>{r([]),e.close()};return{focusStrategy:t,...e,open(f=null){l(f),e.open()},toggle(f=null){l(f),e.toggle()},close(){c()},expandedKeysStack:a,openSubmenu:(f,u)=>{r(p=>u>p.length?p:[...p.slice(0,u),f])},closeSubmenu:(f,u)=>{r(p=>p[u]===f?p.slice(0,u):p)}}}class tt{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);var l;return t&&(l=t.prevKey)!==null&&l!==void 0?l:null}getKeyAfter(e){let t=this.keyMap.get(e);var l;return t&&(l=t.nextKey)!==null&&l!==void 0?l:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var t;return(t=this.keyMap.get(e))!==null&&t!==void 0?t:null}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e,{expandedKeys:t}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e,t=t||new Set;let l=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&(s.type==="section"||t.has(s.key)))for(let n of s.childNodes)l(n)};for(let s of e)l(s);let a=null,r=0;for(let[s,n]of this.keyMap)a?(a.nextKey=s,n.prevKey=a.key):(this.firstKey=s,n.prevKey=void 0),n.type==="item"&&(n.index=r++),a=n,a.nextKey=void 0;var c;this.lastKey=(c=a==null?void 0:a.key)!==null&&c!==void 0?c:null}}function ot(o){let{onExpandedChange:e}=o,[t,l]=Qe(o.expandedKeys?new Set(o.expandedKeys):void 0,o.defaultExpandedKeys?new Set(o.defaultExpandedKeys):new Set,e),a=Z(o),r=i.useMemo(()=>o.disabledKeys?new Set(o.disabledKeys):new Set,[o.disabledKeys]),c=Ke(o,i.useCallback(n=>new tt(n,{expandedKeys:t}),[t]),null);return i.useEffect(()=>{a.focusedKey!=null&&!c.getItem(a.focusedKey)&&a.setFocusedKey(null)},[c,a.focusedKey]),{collection:c,expandedKeys:t,disabledKeys:r,toggleKey:n=>{l(at(t,n))},setExpandedKeys:l,selectionManager:new ee(c,a)}}function at(o,e){let t=new Set(o);return t.has(e)?t.delete(e):t.add(e),t}const nt=i.createContext({}),re=i.createContext(null),O=i.createContext(null),z=i.createContext(null),F=i.createContext(null);function gt(o){let e=se(o),t=i.useRef(null),{menuTriggerProps:l,menuProps:a}=Te({...o,type:"menu"},e,t),[r,c]=i.useState(null),s=i.useCallback(()=>{t.current&&c(t.current.offsetWidth+"px")},[t]);Be({ref:t,onResize:s});let n=i.useRef(null);return y.createElement(E,{values:[[re,{...a,ref:n}],[He,e],[z,e],[Ne,{trigger:"MenuTrigger",triggerRef:t,scrollRef:n,placement:"bottom start",style:{"--trigger-width":r},"aria-labelledby":a["aria-labelledby"]}]]},y.createElement(Oe,{...l,ref:t,isPressed:e.isOpen},o.children))}const lt=i.createContext(null),ht=i.forwardRef(function(e,t){return[e,t]=oe(e,t,re),y.createElement(Se,{content:y.createElement(Me,e)},l=>y.createElement(st,{props:e,collection:l,menuRef:t}))});function st({props:o,collection:e,menuRef:t}){let{filter:l,collectionProps:a,collectionRef:r}=i.useContext(X)||{};t=ae(i.useMemo(()=>we(t,r!==void 0?r:null),[r,t]));let c=i.useMemo(()=>l?e.UNSTABLE_filter(l):e,[e,l]),s=ot({...o,collection:c,children:void 0}),n=i.useContext(z),{isVirtualized:f,CollectionRoot:u}=i.useContext(te),{menuProps:p}=Ye({...o,...a,isVirtualized:f,onClose:o.onClose||(n==null?void 0:n.close)},s,t),g=N({defaultClassName:"react-aria-Menu",className:o.className,style:o.style,values:{isEmpty:s.collection.size===0}}),b=null;return s.collection.size===0&&o.renderEmptyState&&(b=y.createElement("div",{role:"menuitem",style:{display:"contents"}},o.renderEmptyState())),y.createElement(Xe,null,y.createElement("div",{...w(o),...p,...g,ref:t,slot:o.slot||void 0,"data-empty":s.collection.size===0||void 0,onScroll:o.onScroll},y.createElement(E,{values:[[O,s],[Ae,{elementType:"div"}],[Ce,{name:"MenuSection",render:it}],[lt,{parentMenuRef:t,shouldUseVirtualFocus:a==null?void 0:a.shouldUseVirtualFocus}],[B,null],[X,null],[F,s.selectionManager],[z,n??se({})]]},y.createElement(u,{collection:s.collection,persistedKeys:ke(s.selectionManager.focusedKey),scrollRef:t})),b))}class rt extends ee{get focusedKey(){return this.parent.focusedKey}get isFocused(){return this.parent.isFocused}setFocusedKey(e,t){return this.parent.setFocusedKey(e,t)}setFocused(e){this.parent.setFocused(e)}get childFocusStrategy(){return this.parent.childFocusStrategy}constructor(e,t){super(e.collection,t),this.parent=e}}function it(o,e,t,l="react-aria-MenuSection"){var a,r;let c=i.useContext(O),{CollectionBranch:s}=i.useContext(te),[n,f]=_e();var u;let{headingProps:p,groupProps:g}=et({heading:f,"aria-label":(u=t.props["aria-label"])!==null&&u!==void 0?u:void 0}),b=N({defaultClassName:l,className:(a=t.props)===null||a===void 0?void 0:a.className,style:(r=t.props)===null||r===void 0?void 0:r.style,values:{}}),v=i.useContext(F),P=Z(o),h=o.selectionMode!=null?new rt(v,P):v;return y.createElement("section",{...w(o),...g,...b,ref:e},y.createElement(E,{values:[[Re,{...p,ref:n}],[F,h]]},y.createElement(s,{collection:c.collection,parent:t})))}const B=i.createContext(null),vt=Fe("item",function(e,t,l){var a;[e,t]=oe(e,t,B);let r=(a=De(B))===null||a===void 0?void 0:a.id,c=i.useContext(O),s=ae(t),n=i.useContext(F),{menuItemProps:f,labelProps:u,descriptionProps:p,keyboardShortcutProps:g,...b}=Ze({...e,id:r,key:l.key,selectionManager:n},c,s),{hoverProps:v,isHovered:P}=ne({isDisabled:b.isDisabled}),h=N({...e,id:void 0,children:l.rendered,defaultClassName:"react-aria-MenuItem",values:{...b,isHovered:P,isFocusVisible:b.isFocusVisible,selectionMode:n.selectionMode,selectionBehavior:n.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),_=e.href?"a":"div";return y.createElement(_,{...H(f,v),...h,ref:s,"data-disabled":b.isDisabled||void 0,"data-hovered":P||void 0,"data-focused":b.isFocused||void 0,"data-focus-visible":b.isFocusVisible||void 0,"data-pressed":b.isPressed||void 0,"data-selected":b.isSelected||void 0,"data-selection-mode":n.selectionMode==="none"?void 0:n.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},y.createElement(E,{values:[[We,{slots:{[Ue]:u,label:u,description:p}}],[nt,g]]},h.children))});export{ht as $,vt as a,gt as b};
