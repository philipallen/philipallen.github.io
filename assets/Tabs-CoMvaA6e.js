import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as l}from"./index-CcKhGcwW.js";import{r as w}from"./index-uaANFLeC.js";import{b as L,$ as j,a as I,c as R}from"./Tabs-D2IskL8b.js";import{$ as x}from"./Collection-Bn5P0R-H.js";import{a as c,u,b as s}from"./index-BHlkTKmU.js";import{S as C}from"./SelectV2-CFB5KrWR.js";import{T as y}from"./Typography-CTcPHIiy.js";const D=c.div`
  ${({$tabListView:e})=>{const{tokens:t}=u(),{tabs:o}=t;return[s`
        display: grid;
        width: max-content;
        padding-right: ${o.desktop.container.padding.right};
      `,(!e||e==="mobile")&&s`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,F=c.div`
  ${()=>{const{tokens:e}=u(),{tabs:t}=e;return s`
      border-top-width: ${t.panel.strokeTop.width};
      border-top-style: ${t.panel.strokeTop.style};
      border-top-color: ${t.panel.strokeTop.color};
    `}}
`,P=c(L)`
  ${({$withIcon:e,$withPadding:t})=>{const{tokens:o}=u(),{tabs:n}=o;return[s`
        background: ${n.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${n.panel.focusRing.width};
          outline-style: ${n.panel.focusRing.style};
          outline-color: ${n.panel.focusRing.color};
        }
      `,t&&s`
          padding-top: ${n.panel.padding.top};
          padding-bottom: ${n.panel.padding.bottom};
          padding-left: ${n.panel.padding.left.base};
          padding-right: ${n.panel.padding.right.base};
        `,e&&t&&s`
          padding-left: ${n.panel.padding.left.withIcon};
          padding-right: ${n.panel.padding.right.withIcon};
        `]}}
`,f=l.createContext({}),E=c.div`
  ${()=>{const{tokens:e}=u(),{tabs:t}=e;return s`
      background: ${t.mobile.backgroundColor};
      padding-top: ${t.mobile.padding.top};
      padding-left: ${t.mobile.padding.left};
      padding-right: ${t.mobile.padding.right};
      padding-bottom: ${t.mobile.padding.bottom};
      border-top-left-radius: ${t.mobile.radius.topLeft};
      border-top-right-radius: ${t.mobile.radius.topLeft};
      border-top-width: ${t.mobile.strokeTop.width};
      border-top-style: ${t.mobile.strokeTop.style};
      border-top-color: ${t.mobile.strokeTop.color};
    `}}
`;function S(){const{items:e,selectedKey:t,onSelectionChange:o,mobileHeading:n}=l.useContext(f),i=l.useMemo(()=>e.map(({id:d,label:r})=>({id:d,value:d,title:r})),[e]),b=l.useMemo(()=>e.filter(({isDisabled:d})=>d).map(({id:d})=>d),[e]);return a.jsx(E,{children:a.jsx(C,{labelProps:{label:n},items:i,selectedKey:t,disabledKeys:b,onSelectionChange:o})})}const M=c.div`
  ${()=>{const{tokens:e}=u(),{container:t}=e.tabs.desktop;return s`
      display: grid;
      gap: ${t.gap};
    `}}
`,V=c(j)`
  display: grid;
  grid-auto-flow: column;
`,p=c(I)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  text-wrap: nowrap;
  cursor: pointer;
  outline: none;

  &[aria-disabled] {
    cursor: not-allowed;
  }
`,A=c.div`
  ${()=>{const{tokens:e}=u(),{tab:t}=e.tabs.desktop;return s`
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      border-top-left-radius: ${t.focusRing.radius.topLeft};
      border-top-right-radius: ${t.focusRing.radius.topRight};
      border-bottom-left-radius: ${t.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${t.focusRing.radius.bottomRight};

      ${p}[data-focus-visible="true"] && {
        display: block;
        outline-width: ${t.focusRing.width};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset};
      }
    `}}
`,H=c.div`
  position: relative;
`,K=c.div`
  ${({$withIcon:e})=>{const{tokens:t}=u(),{tab:o}=t.tabs.desktop;return[s`
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

        ${p}[data-hovered="true"] && {
          background: ${o.backgroundColor.hover};
        }

        ${p}[data-pressed="true"] && {
          outline-width: ${o.activeRing.width};
          outline-style: ${o.activeRing.style};
          outline-color: ${o.activeRing.color};
          outline-offset: ${o.activeRing.offset};
        }

        ${p}[aria-selected="true"] && {
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
      `,e&&s`
          padding-left: ${o.padding.left.withIcon};
          padding-right: ${o.padding.right.withIcon};
        `]}}
`,W=c.div`
  ${()=>{const{tokens:e}=u(),{tab:t}=e.tabs.desktop;return s`
      color: ${t.label.color.base};

      ${p}[aria-selected="true"] && {
        color: ${t.label.color.active};
      }

      ${p}:hover && {
        color: ${t.label.color.hover};

        &[aria-selected] {
          color: ${t.label.color.active};
        }
      }

      ${p}[aria-disabled] && {
        color: ${t.label.color.disabled};

        &[aria-selected] {
          color: ${t.label.color.disabled};
        }
      }
    `}}
`,z=c.div`
  ${()=>{const{tokens:e}=u(),{tab:t}=e.tabs.desktop;return s`
      color: ${t.secondaryLabel.color.base};

      ${p}[aria-disabled="true"] && {
        color: ${t.secondaryLabel.color.disabled};
      }
    `}}
`,_=c.div`
  ${()=>{const{tokens:e}=u(),{tab:t}=e.tabs.desktop;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
        color: ${t.icon.color.base};
      }

      ${p}[aria-selected="true"] && {
        svg {
          color: ${t.icon.color.active};
        }
      }

      ${p}:hover && {
        svg {
          color: ${t.icon.color.hover};
        }

        &[aria-selected] {
          svg {
            color: ${t.icon.color.active};
          }
        }
      }

      ${p}[aria-disabled="true"] && {
        svg {
          color: ${t.icon.color.disabled};
        }

        &[aria-selected] {
          svg {
            color: ${t.icon.color.disabled};
          }
        }
      }
    `}}
`,B=c.div`
  ${()=>{const{tokens:e}=u(),{separator:t}=e.tabs.desktop.tab;return s`
      width: ${t.width};
      background: ${t.color};
      margin-top: ${t.marginTop};
    `}}
`,O=2;function G(){const{items:e,desktopHeading:t,desktopHeadingLevel:o=O,testID:n}=l.useContext(f),i=N(),{headingID:b,getTabA11yData:d}=U();return a.jsxs(M,{children:[t&&a.jsx(y,{id:b,component:`h${o}`,variant:i.heading.variant,fontFamily:i.heading.fontFamily,testID:`${n}-heading`,children:t}),a.jsx(V,{"aria-labelledby":b,"data-testid":`${n}-items`,children:a.jsx(x,{items:e,children:r=>{const g=!!r.icon,v=r===e.at(-1),{labelID:h,secondaryLabelID:$}=d(r.id);return a.jsxs(p,{id:r.id,isDisabled:r.isDisabled,"aria-labelledby":`${h} ${$}`,"data-testid":`${n}-item-${r.id}`,children:[a.jsxs(H,{children:[a.jsxs(K,{$withIcon:g,children:[a.jsxs("div",{children:[a.jsx(W,{children:a.jsx(y,{id:h,component:"span",variant:i.tab.label.variant,fontFamily:i.tab.label.fontFamily,color:"inherit",children:r.label})}),r.secondaryLabel&&a.jsx(z,{children:a.jsx(y,{id:$,component:"span",variant:i.tab.secondaryLabel.variant,fontFamily:i.tab.secondaryLabel.fontFamily,color:"inherit",children:r.secondaryLabel})})]}),g&&a.jsx(_,{children:r.icon})]}),a.jsx(A,{})]}),!v&&a.jsx(B,{})]})}})})]})}function N(){const{tokens:e}=u(),{heading:t,tab:o}=e.tabs.desktop;return{heading:{variant:t.typography.variant,fontFamily:t.typography.fontFamily},tab:{label:{variant:o.label.typography.variant,fontFamily:o.label.typography.fontFamily},secondaryLabel:{variant:o.secondaryLabel.typography.variant,fontFamily:o.secondaryLabel.typography.fontFamily}}}}function U(){const e=l.useId(),t=`${e}-heading`;function o(n){const i=`${e}-tab-label-${n}`,b=`${e}-tab-secondary-label-${n}`;return{labelID:i,secondaryLabelID:b}}return{headingID:t,getTabA11yData:o}}function k(e){const{activeItemId:t,onChange:o,children:n,testID:i="tabs",...b}=e,[d,r]=l.useState(null),[g,v]=l.useState();function h(m){v(m)}function $(m){m&&o(m)}const T=l.useMemo(()=>({...b,selectedKey:t,onSelectionChange:$,tabListView:d,setTabListView:r,setMobilePortalRef:h,testID:i}),[b,t,$,d,r,h,i]);return a.jsxs(f.Provider,{value:T,children:[a.jsx(R,{selectedKey:t,onSelectionChange:$,"data-testid":i,children:n}),g&&d==="mobile"&&w.createPortal(a.jsx(S,{}),g)]})}k.Items=function(){const{tabListView:t,setTabListView:o,setMobilePortalRef:n}=l.useContext(f),i=l.useRef(null),b=l.useRef(null);return l.useEffect(()=>{if(!i.current||!b.current)return;const d={threshold:1,root:i.current},r=new IntersectionObserver(([g])=>{g&&g.boundingClientRect.height>0&&o(g.isIntersecting?"desktop":"mobile")},d);return r.observe(b.current),()=>{r.disconnect()}},[]),a.jsxs("div",{ref:i,children:[a.jsx(D,{ref:b,$tabListView:t,children:a.jsx(G,{})}),a.jsx("div",{ref:n})]})};k.Panels=function(){const{items:t,withPadding:o=!0,testID:n}=l.useContext(f);return a.jsx(F,{"data-testid":`${n}-panels`,children:a.jsx(x,{items:t,children:i=>a.jsx(P,{id:i.id,$withPadding:o,$withIcon:!!i.icon,"data-testid":`${n}-panel-${i.id}`,children:i.panel})})})};export{k as T};
