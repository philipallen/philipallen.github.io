import{j as n}from"./jsx-runtime-BkBIjjFT.js";import{r as p}from"./index-KmaxkdDD.js";import{b as x,d as T,$ as w,a as L,c as j}from"./Tabs-BsPeZygm.js";import{$ as y}from"./Collection-EYIO8LIo.js";import{a as d,u as c,b as s}from"./index-DT8u_GqS.js";import{S as I}from"./Select-DNn43_tY.js";import{T as $}from"./Typography-wg1R8lvT.js";const D=d.div`
  ${({$tabListView:e})=>{const{tokens:t}=c(),{tabs:o}=t;return[s`
        display: inline-grid;
        padding-right: ${o.desktop.container.padding.right};
      `,(!e||e==="mobile")&&s`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,R=d.div`
  ${()=>{const{tokens:e}=c(),{tabs:t}=e;return s`
      border-top-width: ${t.panel.strokeTop.width};
      border-top-style: ${t.panel.strokeTop.style};
      border-top-color: ${t.panel.strokeTop.color};
    `}}
`,C=d(x)`
  ${({$withIcon:e,$withPadding:t})=>{const{tokens:o}=c(),{tabs:a}=o;return[s`
        background: ${a.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${a.panel.focusRing.width};
          outline-style: ${a.panel.focusRing.style};
          outline-color: ${a.panel.focusRing.color};
        }
      `,t&&s`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,e&&t&&s`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`,u=p.createContext({}),F=e=>{const{children:t,...o}=e;return n.jsx(u.Provider,{value:o,children:t})},P=d.div`
  ${()=>{const{tokens:e}=c(),{tabs:t}=e;return s`
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
`;function S(){const e=p.useContext(T),{items:t,activeItemId:o,mobileHeading:a}=p.useContext(u),r=p.useMemo(()=>t.filter(i=>!i.isDisabled).map(i=>({id:i.id,title:i.label,value:i.label})),[t]),b=r.find(i=>i.id===o);function g(i){e&&i&&e.setSelectedKey(i.id)}return n.jsx(P,{children:n.jsx(I,{labelProps:{label:a},items:r,selectedItem:b,onChange:g})})}const E=d.div`
  ${()=>{const{tokens:e}=c(),{container:t}=e.tabs.desktop;return s`
      display: grid;
      gap: ${t.gap};
    `}}
`,A=d(w)`
  display: inline-grid;
  grid-auto-flow: column;
`,l=d(L)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  text-wrap: nowrap;
  cursor: pointer;
  outline: none;

  &[aria-disabled] {
    cursor: not-allowed;
  }
`,H=d.div`
  ${()=>{const{tokens:e}=c(),{tab:t}=e.tabs.desktop;return s`
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

      ${l}[data-focus-visible="true"] && {
        display: block;
        outline-width: ${t.focusRing.width};
        outline-style: ${t.focusRing.style};
        outline-color: ${t.focusRing.color};
        outline-offset: ${t.focusRing.offset};
      }
    `}}
`,V=d.div`
  position: relative;
`,W=d.div`
  ${({$withIcon:e})=>{const{tokens:t}=c(),{tab:o}=t.tabs.desktop;return[s`
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

        ${l}[data-hovered="true"] && {
          background: ${o.backgroundColor.hover};
        }

        ${l}[data-pressed="true"] && {
          outline-width: ${o.activeRing.width};
          outline-style: ${o.activeRing.style};
          outline-color: ${o.activeRing.color};
          outline-offset: ${o.activeRing.offset};
        }

        ${l}[aria-selected="true"] && {
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
`,z=d.div`
  ${()=>{const{tokens:e}=c(),{tab:t}=e.tabs.desktop;return s`
      color: ${t.label.color.base};

      ${l}[aria-selected="true"] && {
        color: ${t.label.color.active};
      }

      ${l}:hover && {
        color: ${t.label.color.hover};

        &[aria-selected] {
          color: ${t.label.color.active};
        }
      }

      ${l}[aria-disabled] && {
        color: ${t.label.color.disabled};

        &[aria-selected] {
          color: ${t.label.color.disabled};
        }
      }
    `}}
`,K=d.div`
  ${()=>{const{tokens:e}=c(),{tab:t}=e.tabs.desktop;return s`
      color: ${t.secondaryLabel.color.base};

      ${l}[aria-disabled="true"] && {
        color: ${t.secondaryLabel.color.disabled};
      }
    `}}
`,_=d.div`
  ${()=>{const{tokens:e}=c(),{tab:t}=e.tabs.desktop;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${t.icon.width};
        height: ${t.icon.height};
        color: ${t.icon.color.base};
      }

      ${l}[aria-selected="true"] && {
        svg {
          color: ${t.icon.color.active};
        }
      }

      ${l}:hover && {
        svg {
          color: ${t.icon.color.hover};
        }

        &[aria-selected] {
          svg {
            color: ${t.icon.color.active};
          }
        }
      }

      ${l}[aria-disabled="true"] && {
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
`,B=d.div`
  ${()=>{const{tokens:e}=c(),{separator:t}=e.tabs.desktop.tab;return s`
      width: ${t.width};
      background: ${t.color};
      margin-top: ${t.marginTop};
    `}}
`,M=2;function O(){const{items:e,desktopHeading:t,desktopHeadingLevel:o=M,testID:a}=p.useContext(u),r=G(),{headingID:b,getTabA11yData:g}=N();return n.jsxs(E,{children:[t&&n.jsx($,{id:b,component:`h${o}`,variant:r.heading.variant,fontFamily:r.heading.fontFamily,testID:`${a}-heading`,children:t}),n.jsx(A,{"aria-labelledby":b,"data-testid":`${a}-items`,children:n.jsx(y,{items:e,children:i=>{const h=!!i.icon,k=i===e.at(-1),{labelID:f,secondaryLabelID:v}=g(i.id);return n.jsxs(l,{id:i.id,isDisabled:i.isDisabled,"aria-labelledby":`${f} ${v}`,"data-testid":`${a}-item-${i.id}`,children:[n.jsxs(V,{children:[n.jsxs(W,{$withIcon:h,children:[n.jsxs("div",{children:[n.jsx(z,{children:n.jsx($,{id:f,component:"span",variant:r.tab.label.variant,fontFamily:r.tab.label.fontFamily,color:"inherit",children:i.label})}),i.secondaryLabel&&n.jsx(K,{children:n.jsx($,{id:v,component:"span",variant:r.tab.secondaryLabel.variant,fontFamily:r.tab.secondaryLabel.fontFamily,color:"inherit",children:i.secondaryLabel})})]}),h&&n.jsx(_,{children:i.icon})]}),n.jsx(H,{})]}),!k&&n.jsx(B,{})]})}})})]})}function G(){const{tokens:e}=c(),{heading:t,tab:o}=e.tabs.desktop;return{heading:{variant:t.typography.variant,fontFamily:t.typography.fontFamily},tab:{label:{variant:o.label.typography.variant,fontFamily:o.label.typography.fontFamily},secondaryLabel:{variant:o.secondaryLabel.typography.variant,fontFamily:o.secondaryLabel.typography.fontFamily}}}}function N(){const e=p.useId(),t=`${e}-heading`;function o(a){const r=`${e}-tab-label-${a}`,b=`${e}-tab-secondary-label-${a}`;return{labelID:r,secondaryLabelID:b}}return{headingID:t,getTabA11yData:o}}function m(e){const{children:t,testID:o="tabs",...a}=e,{activeItemId:r,onChange:b}=a;function g(i){b(i)}return n.jsx(F,{...a,testID:o,children:n.jsx(j,{selectedKey:r,onSelectionChange:g,"data-testid":o,children:t})})}m.Items=function(){const[t,o]=p.useState(null),a=p.useRef(null),r=p.useRef(null);return p.useEffect(()=>{if(!a.current||!r.current)return;const b={threshold:1,root:a.current},g=new IntersectionObserver(([i])=>{i&&o(i.isIntersecting?"desktop":"mobile")},b);return g.observe(r.current),()=>{g.disconnect()}},[]),n.jsxs("div",{ref:a,children:[n.jsx(D,{ref:r,$tabListView:t,children:n.jsx(O,{})}),t==="mobile"&&n.jsx(S,{})]})};m.Panels=function(){const{items:t,withPadding:o=!0,testID:a}=p.useContext(u);return n.jsx(R,{"data-testid":`${a}-panels`,children:n.jsx(y,{items:t,children:r=>n.jsx(C,{id:r.id,$withPadding:o,$withIcon:!!r.icon,"data-testid":`${a}-panel-${r.id}`,children:r.panel},r.id)})})};export{m as T};
