import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as l}from"./index-CcKhGcwW.js";import{r as L}from"./index-uaANFLeC.js";import{b as w,$ as I,a as R,c as D}from"./Tabs-jx_MHFSE.js";import{$ as v}from"./Collection-DeW_zP-L.js";import{a as b,u as p,b as d}from"./index-BHlkTKmU.js";import{$ as C}from"./ListBox-DnebutJd.js";import{a as P,$ as F}from"./Select-D4jnez6v.js";import{O as S,a as V,L as E}from"./OuterField-XuDbQp9u.js";import{T as y}from"./Typography-BTmT2kbZ.js";import{C as B,P as A,L as M}from"./ListBoxItem-DbYguSpn.js";import{R as W}from"./ReactAriaProviders-CFG_2kIo.js";import{I as H,a as K}from"./InputAlerts-DCLtABKX.js";import{I as O}from"./InputLabelTopV2-DoVj3nB4.js";const z=b(P)`
  ${()=>{const{tokens:t}=p(),{select:e}=t;return d`
      color: ${e.button.text.color.base};

      &[data-placeholder] {
        color: ${e.button.placeholder.color.base};
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${e.button.text.color.disabled};
      }
    `}}
`;function _(){const{tokens:t}=p(),{select:e}=t;return a.jsx(y,{variant:e.button.text.typography.variant,fontFamily:e.button.text.typography.fontFamily,noWrap:!0,children:a.jsx(z,{children:({selectedText:o,selectedItem:r})=>r&&a.jsx("span",{"aria-label":r.ariaLabel,children:o})})})}const k=l.forwardRef((t,e)=>{const{labelProps:o,alerts:r,id:n,items:c,testID:s="select",...i}=t,u=l.useId();return a.jsx(W,{fieldID:n||u,externallyLabelledBy:t["aria-labelledby"],externallyDescribedBy:t["aria-describedby"],labelProps:o,alerts:r,children:({labelledBy:f,describedBy:h})=>a.jsx(H,{alert:r&&a.jsx(K,{alerts:r}),children:a.jsx(O,{...o,children:a.jsxs(F,{...i,id:n||u,"aria-labelledby":f,"aria-describedby":h,"data-testid":s,children:[a.jsx(S,{children:a.jsxs(V,{ref:e,children:[a.jsx(_,{}),a.jsx(B,{})]})}),a.jsx(A,{children:a.jsx(E,{children:a.jsx(C,{items:c,children:g=>a.jsx(M,{id:g.value,textValue:g.title,"aria-label":g.ariaLabel,children:g.title})})})})]})})})})});k.displayName="SelectV2";const N=b.div`
  ${({$tabListView:t})=>{const{tokens:e}=p(),{tabs:o}=e;return[d`
        display: grid;
        width: max-content;
        padding-right: ${o.desktop.container.padding.right};
      `,(!t||t==="mobile")&&d`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,G=b.div`
  ${()=>{const{tokens:t}=p(),{tabs:e}=t;return d`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,U=b(w)`
  ${({$withIcon:t,$withPadding:e})=>{const{tokens:o}=p(),{tabs:r}=o;return[d`
        background: ${r.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${r.panel.focusRing.width};
          outline-style: ${r.panel.focusRing.style};
          outline-color: ${r.panel.focusRing.color};
        }
      `,e&&d`
          padding-top: ${r.panel.padding.top};
          padding-bottom: ${r.panel.padding.bottom};
          padding-left: ${r.panel.padding.left.base};
          padding-right: ${r.panel.padding.right.base};
        `,t&&e&&d`
          padding-left: ${r.panel.padding.left.withIcon};
          padding-right: ${r.panel.padding.right.withIcon};
        `]}}
`,m=l.createContext({}),q=b.div`
  ${()=>{const{tokens:t}=p(),{tabs:e}=t;return d`
      background: ${e.mobile.backgroundColor};
      padding-top: ${e.mobile.padding.top};
      padding-left: ${e.mobile.padding.left};
      padding-right: ${e.mobile.padding.right};
      padding-bottom: ${e.mobile.padding.bottom};
      border-top-left-radius: ${e.mobile.radius.topLeft};
      border-top-right-radius: ${e.mobile.radius.topLeft};
      border-top-width: ${e.mobile.strokeTop.width};
      border-top-style: ${e.mobile.strokeTop.style};
      border-top-color: ${e.mobile.strokeTop.color};
    `}}
`;function J(){const{items:t,selectedKey:e,onSelectionChange:o,mobileHeading:r}=l.useContext(m),n=l.useMemo(()=>t.map(({id:s,label:i})=>({id:s,value:s,title:i})),[t]),c=l.useMemo(()=>t.filter(({isDisabled:s})=>s).map(({id:s})=>s),[t]);return a.jsx(q,{children:a.jsx(k,{labelProps:{label:r},items:n,selectedKey:e,disabledKeys:c,onSelectionChange:o})})}const Q=b.div`
  ${()=>{const{tokens:t}=p(),{container:e}=t.tabs.desktop;return d`
      display: grid;
      gap: ${e.gap};
    `}}
`,X=b(I)`
  display: grid;
  grid-auto-flow: column;
`,$=b(R)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  text-wrap: nowrap;
  cursor: pointer;
  outline: none;

  &[aria-disabled] {
    cursor: not-allowed;
  }
`,Y=b.div`
  ${()=>{const{tokens:t}=p(),{tab:e}=t.tabs.desktop;return d`
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      border-top-left-radius: ${e.focusRing.radius.topLeft};
      border-top-right-radius: ${e.focusRing.radius.topRight};
      border-bottom-left-radius: ${e.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${e.focusRing.radius.bottomRight};

      ${$}[data-focus-visible="true"] && {
        display: block;
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,Z=b.div`
  position: relative;
`,ee=b.div`
  ${({$withIcon:t})=>{const{tokens:e}=p(),{tab:o}=e.tabs.desktop;return[d`
        position: relative;
        z-index: 1;
        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;
        height: 100%;
        background: ${o.backgroundColor.base};
        border-top-left-radius: ${o.radius.topLeft};
        border-top-right-radius: ${o.radius.topLeft};
        border-top-width: ${o.strokeTop.width};
        border-top-style: ${o.strokeTop.style};
        border-top-color: ${o.strokeTop.color.base};
        padding-top: ${o.padding.top};
        padding-bottom: ${o.padding.bottom};
        padding-left: ${o.padding.left.base};
        padding-right: ${o.padding.right.base};

        ${$}[data-hovered="true"] && {
          background: ${o.backgroundColor.hover};
        }

        ${$}[data-pressed="true"] && {
          outline-width: ${o.activeRing.width};
          outline-style: ${o.activeRing.style};
          outline-color: ${o.activeRing.color};
          outline-offset: ${o.activeRing.offset};
        }

        ${$}[aria-selected="true"] && {
          background: ${o.backgroundColor.active};
          border-top-color: ${o.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${o.backgroundColor.active};
          }
        }
      `,t&&d`
          padding-left: ${o.padding.left.withIcon};
          padding-right: ${o.padding.right.withIcon};
        `]}}
`,te=b.div`
  ${()=>{const{tokens:t}=p(),{tab:e}=t.tabs.desktop;return d`
      color: ${e.label.color.base};

      ${$}[aria-selected="true"] && {
        color: ${e.label.color.active};
      }

      ${$}:hover && {
        color: ${e.label.color.hover};

        &[aria-selected] {
          color: ${e.label.color.active};
        }
      }

      ${$}[aria-disabled] && {
        color: ${e.label.color.disabled};

        &[aria-selected] {
          color: ${e.label.color.disabled};
        }
      }
    `}}
`,oe=b.div`
  ${()=>{const{tokens:t}=p(),{tab:e}=t.tabs.desktop;return d`
      color: ${e.secondaryLabel.color.base};

      ${$}[aria-disabled="true"] && {
        color: ${e.secondaryLabel.color.disabled};
      }
    `}}
`,ae=b.div`
  ${()=>{const{tokens:t}=p(),{tab:e}=t.tabs.desktop;return d`
      display: grid;
      place-items: center;

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
        color: ${e.icon.color.base};
      }

      ${$}[aria-selected="true"] && {
        svg {
          color: ${e.icon.color.active};
        }
      }

      ${$}:hover && {
        svg {
          color: ${e.icon.color.hover};
        }

        &[aria-selected] {
          svg {
            color: ${e.icon.color.active};
          }
        }
      }

      ${$}[aria-disabled="true"] && {
        svg {
          color: ${e.icon.color.disabled};
        }

        &[aria-selected] {
          svg {
            color: ${e.icon.color.disabled};
          }
        }
      }
    `}}
`,re=b.div`
  ${()=>{const{tokens:t}=p(),{separator:e}=t.tabs.desktop.tab;return d`
      width: ${e.width};
      background: ${e.color};
      margin-top: ${e.marginTop};
    `}}
`,ne=2;function ie(){const{items:t,desktopHeading:e,desktopHeadingLevel:o=ne,testID:r}=l.useContext(m),n=se(),{headingID:c,getTabA11yData:s}=le();return a.jsxs(Q,{children:[e&&a.jsx(y,{id:c,component:`h${o}`,variant:n.heading.variant,fontFamily:n.heading.fontFamily,testID:`${r}-heading`,children:e}),a.jsx(X,{"aria-labelledby":c,"data-testid":`${r}-items`,children:a.jsx(v,{items:t,children:i=>{const u=!!i.icon,f=i===t.at(-1),{labelID:h,secondaryLabelID:g}=s(i.id);return a.jsxs($,{id:i.id,isDisabled:i.isDisabled,"aria-labelledby":`${h} ${g}`,"data-testid":`${r}-item-${i.id}`,children:[a.jsxs(Z,{children:[a.jsxs(ee,{$withIcon:u,children:[a.jsxs("div",{children:[a.jsx(te,{children:a.jsx(y,{id:h,component:"span",variant:n.tab.label.variant,fontFamily:n.tab.label.fontFamily,color:"inherit",children:i.label})}),i.secondaryLabel&&a.jsx(oe,{children:a.jsx(y,{id:g,component:"span",variant:n.tab.secondaryLabel.variant,fontFamily:n.tab.secondaryLabel.fontFamily,color:"inherit",children:i.secondaryLabel})})]}),u&&a.jsx(ae,{children:i.icon})]}),a.jsx(Y,{})]}),!f&&a.jsx(re,{})]})}})})]})}function se(){const{tokens:t}=p(),{heading:e,tab:o}=t.tabs.desktop;return{heading:{variant:e.typography.variant,fontFamily:e.typography.fontFamily},tab:{label:{variant:o.label.typography.variant,fontFamily:o.label.typography.fontFamily},secondaryLabel:{variant:o.secondaryLabel.typography.variant,fontFamily:o.secondaryLabel.typography.fontFamily}}}}function le(){const t=l.useId(),e=`${t}-heading`;function o(r){const n=`${t}-tab-label-${r}`,c=`${t}-tab-secondary-label-${r}`;return{labelID:n,secondaryLabelID:c}}return{headingID:e,getTabA11yData:o}}function j(t){const{activeItemId:e,onChange:o,children:r,testID:n="tabs",...c}=t,[s,i]=l.useState(null),[u,f]=l.useState();function h(x){f(x)}function g(x){x&&o(x)}const T=l.useMemo(()=>({...c,selectedKey:e,onSelectionChange:g,tabListView:s,setTabListView:i,setMobilePortalRef:h,testID:n}),[c,e,g,s,i,h,n]);return a.jsxs(m.Provider,{value:T,children:[a.jsx(D,{selectedKey:e,onSelectionChange:g,"data-testid":n,children:r}),u&&s==="mobile"&&L.createPortal(a.jsx(J,{}),u)]})}j.Items=function(){const{tabListView:e,setTabListView:o,setMobilePortalRef:r}=l.useContext(m),n=l.useRef(null),c=l.useRef(null);return l.useEffect(()=>{if(!n.current||!c.current)return;const s={threshold:1,root:n.current},i=new IntersectionObserver(([u])=>{u&&u.boundingClientRect.height>0&&o(u.isIntersecting?"desktop":"mobile")},s);return i.observe(c.current),()=>{i.disconnect()}},[]),a.jsxs("div",{ref:n,children:[a.jsx(N,{ref:c,$tabListView:e,children:a.jsx(ie,{})}),a.jsx("div",{ref:r})]})};j.Panels=function(){const{items:e,withPadding:o=!0,testID:r}=l.useContext(m);return a.jsx(G,{"data-testid":`${r}-panels`,children:a.jsx(v,{items:e,children:n=>a.jsx(U,{id:n.id,$withPadding:o,$withIcon:!!n.icon,"data-testid":`${r}-panel-${n.id}`,children:n.panel})})})};export{k as S,j as T};
