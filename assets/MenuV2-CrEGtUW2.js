import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{e as l,r as b}from"./index-KmaxkdDD.js";import{$ as x,a as g,b as k}from"./Menu-DH7g12se.js";import{M as I}from"./index-VIbBARS4.js";import{a as p,u,b as $}from"./index-DT8u_GqS.js";import{$ as v}from"./Dialog-CL2ju9PL.js";import{u as E}from"./OverlayContext-CQkNAI0D.js";import{S as w}from"./ScrollShadowContainer-1gPuGy8j.js";import{$ as T}from"./usePress-DcYN71RK.js";import{d as M,f as C,m as P}from"./useFocusRing-xuvxHm_5.js";import{$ as _,c as y,l as S}from"./utils-l5KLAjAw.js";const j=l.forwardRef(({children:e,...o},t)=>{t=_(t);let{pressProps:a}=T({...o,ref:t}),{focusableProps:i}=M(o,t),c=l.Children.only(e);b.useEffect(()=>{let n=t.current;if(!n||!(n instanceof C(n).Element)){console.error("<Pressable> child must forward its ref to a DOM element.");return}if(!P(n)){console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");return}if(n.localName!=="button"&&n.localName!=="input"&&n.localName!=="select"&&n.localName!=="textarea"&&n.localName!=="a"&&n.localName!=="area"&&n.localName!=="summary"){let r=n.getAttribute("role");r?r!=="application"&&r!=="button"&&r!=="checkbox"&&r!=="combobox"&&r!=="gridcell"&&r!=="link"&&r!=="menuitem"&&r!=="menuitemcheckbox"&&r!=="menuitemradio"&&r!=="option"&&r!=="radio"&&r!=="searchbox"&&r!=="separator"&&r!=="slider"&&r!=="spinbutton"&&r!=="switch"&&r!=="tab"&&r!=="textbox"&&r!=="treeitem"&&console.warn(`<Pressable> child must have an interactive ARIA role. Got "${r}".`):console.warn("<Pressable> child must have an interactive ARIA role.")}},[t]);let h=parseInt(l.version,10)<19?c.ref:c.props.ref;return l.cloneElement(c,{...y(a,i,c.props),ref:S(h,t)})}),A=p(v)`
  ${()=>{const{tokens:{menu:e,scrollBar:{thumbColor:o,trackColor:t}}}=u();return $`
      display: grid;
      grid-template-rows: 1fr;
      width: max-content;
      max-width: ${e.maxWidth};
      border-radius: ${e.radius};
      border-width: ${e.stroke.width};
      border-style: ${e.stroke.style};
      border-color: ${e.stroke.color};
      box-shadow: 0px 2px 2px ${e.shadow.outer.color};
      background: ${e.backgroundColor.base};
      scrollbar-color: ${o} ${t};
      z-index: ${e.zIndex};
      overflow: hidden;
    `}}
`,H=p(x)`
  outline: none;
`,d=p(g)`
  ${()=>{const{tokens:e}=u(),{menu:o}=e;return $`
      display: grid;
      min-height: ${o.option.minHeight};
      padding: ${o.option.padding};
      background: ${o.option.backgroundColor.base};
      border-bottom-width: ${o.separator.width};
      border-bottom-style: ${o.separator.style};
      border-bottom-color: ${o.separator.color};
      cursor: pointer;
      outline: none;

      &:last-of-type {
        border-bottom-color: transparent;
      }
    `}}
`,L=p.div`
  ${()=>{const{tokens:e}=u(),{menu:o}=e;return $`
      display: grid;
      align-items: center;
      color: ${o.option.inner.color.base};
      border-radius: ${o.option.inner.radius};
      background: ${o.option.inner.backgroundColor.base};
      outline-width: ${o.option.inner.stroke.width};
      outline-style: ${o.option.inner.stroke.style};
      outline-color: ${o.option.inner.stroke.color.base};
      outline-offset: ${o.option.inner.stroke.offset};
      overflow: hidden;

      ${d}[data-hovered] &,
      ${d}[data-focus-visible] & {
        background: ${o.option.inner.backgroundColor.hover};
        outline-color: ${o.option.inner.stroke.color.hover};
      }

      ${d}[data-pressed] & {
        background: ${o.option.inner.backgroundColor.active};
        outline-color: ${o.option.inner.stroke.color.active};
      }
    `}}
`,Z="bottom end",N=6,D=2,V=48,R=V*N,G=D+R,f=b.createContext({}),B=e=>{const{children:o,...t}=e;return s.jsx(f.Provider,{value:t,children:o})};function m(e){const{children:o,testID:t="menu",...a}=e;return s.jsx(B,{...a,testID:t,children:s.jsx(k,{children:o})})}m.Trigger=function(o){return s.jsx(j,{...o})};m.Content=function(o){const{children:t}=o,{popoverProps:a,testID:i}=b.useContext(f),{portalElement:c}=E();return s.jsx(A,{offset:I.DEFAULT_OFFSET,maxHeight:G,...a,UNSTABLE_portalContainer:c,children:s.jsx(w,{tabIndex:-1,children:s.jsx(H,{"data-testid":i,children:t})})})};m.Item=function(o){const{children:t,...a}=o;return s.jsx(d,{...a,children:i=>s.jsx(L,{children:typeof t=="function"?t(i):t})})};export{Z as D,m as M};
