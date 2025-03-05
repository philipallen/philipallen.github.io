import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{b as I,d as L,$ as j,a as D,c as R}from"./Tabs-Bg99tFfy.js";import{$ as v}from"./Collection-HyIYbscu.js";import{a as d,u as c,b as s}from"./index-CzvSJj6w.js";import{S as C}from"./Select-w3R5vsXt.js";import{T as $}from"./Typography-RMDmhaRB.js";const F=d.div`
  ${({$tabListView:t})=>{const{tokens:o}=c(),{tabs:e}=o;return[s`
        display: inline-grid;
        padding-right: ${e.desktop.container.padding.right};
      `,(!t||t==="mobile")&&s`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,P=d.div`
  ${()=>{const{tokens:t}=c(),{tabs:o}=t;return s`
      border-top-width: ${o.panel.strokeTop.width};
      border-top-style: ${o.panel.strokeTop.style};
      border-top-color: ${o.panel.strokeTop.color};
    `}}
`,_=d(I)`
  ${({$withIcon:t,$withPadding:o})=>{const{tokens:e}=c(),{tabs:a}=e;return[s`
        background: ${a.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${a.panel.focusRing.width};
          outline-style: ${a.panel.focusRing.style};
          outline-color: ${a.panel.focusRing.color};
        }
      `,o&&s`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,t&&o&&s`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`,g=p.createContext({}),k=t=>{const{children:o,...e}=t;return n.jsx(g.Provider,{value:e,children:o})};k.__docgenInfo={description:"",methods:[],displayName:"TabsProvider"};const S=d.div`
  ${()=>{const{tokens:t}=c(),{tabs:o}=t;return s`
      background: ${o.mobile.backgroundColor};
      padding-top: ${o.mobile.padding.top};
      padding-left: ${o.mobile.padding.left};
      padding-right: ${o.mobile.padding.right};
      padding-bottom: ${o.mobile.padding.bottom};
      border-top-left-radius: ${o.mobile.radius.topLeft};
      border-top-right-radius: ${o.mobile.radius.topLeft};
      border-top-width: ${o.mobile.strokeTop.width};
      border-top-style: ${o.mobile.strokeTop.style};
      border-top-color: ${o.mobile.strokeTop.color};
    `}}
`;function x(){const t=p.useContext(L),{items:o,activeItemId:e,mobileHeading:a}=p.useContext(g),r=p.useMemo(()=>o.filter(i=>!i.isDisabled).map(i=>({id:i.id,title:i.label,value:i.label})),[o]),b=r.find(i=>i.id===e);function u(i){t&&i&&t.setSelectedKey(i.id)}return n.jsx(S,{children:n.jsx(C,{labelProps:{label:a},items:r,selectedItem:b,onChange:u})})}x.__docgenInfo={description:"",methods:[],displayName:"MobileTabList"};const E=d.div`
  ${()=>{const{tokens:t}=c(),{container:o}=t.tabs.desktop;return s`
      display: grid;
      gap: ${o.gap};
    `}}
`,A=d(j)`
  display: inline-grid;
  grid-auto-flow: column;
`,l=d(D)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  text-wrap: nowrap;
  cursor: pointer;
  outline: none;

  &[aria-disabled] {
    cursor: not-allowed;
  }
`,N=d.div`
  ${()=>{const{tokens:t}=c(),{tab:o}=t.tabs.desktop;return s`
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      border-top-left-radius: ${o.focusRing.radius.topLeft};
      border-top-right-radius: ${o.focusRing.radius.topRight};
      border-bottom-left-radius: ${o.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${o.focusRing.radius.bottomRight};

      ${l}[data-focus-visible="true"] && {
        display: block;
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`,H=d.div`
  position: relative;
`,V=d.div`
  ${({$withIcon:t})=>{const{tokens:o}=c(),{tab:e}=o.tabs.desktop;return[s`
        position: relative;
        z-index: 1;
        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;
        height: 100%;
        background: ${e.backgroundColor.base};
        border-top-left-radius: ${e.radius.topLeft};
        border-top-right-radius: ${e.radius.topLeft};
        border-top-width: ${e.strokeTop.width};
        border-top-style: ${e.strokeTop.style};
        border-top-color: ${e.strokeTop.color.base};
        padding-top: ${e.padding.top};
        padding-bottom: ${e.padding.bottom};
        padding-left: ${e.padding.left.base};
        padding-right: ${e.padding.right.base};

        ${l}[data-hovered="true"] && {
          background: ${e.backgroundColor.hover};
        }

        ${l}[data-pressed="true"] && {
          outline-width: ${e.activeRing.width};
          outline-style: ${e.activeRing.style};
          outline-color: ${e.activeRing.color};
          outline-offset: ${e.activeRing.offset};
        }

        ${l}[aria-selected="true"] && {
          background: ${e.backgroundColor.active};
          border-top-color: ${e.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${e.backgroundColor.active};
          }
        }
      `,t&&s`
          padding-left: ${e.padding.left.withIcon};
          padding-right: ${e.padding.right.withIcon};
        `]}}
`,W=d.div`
  ${()=>{const{tokens:t}=c(),{tab:o}=t.tabs.desktop;return s`
      color: ${o.label.color.base};

      ${l}[aria-selected="true"] && {
        color: ${o.label.color.active};
      }

      ${l}:hover && {
        color: ${o.label.color.hover};

        &[aria-selected] {
          color: ${o.label.color.active};
        }
      }

      ${l}[aria-disabled] && {
        color: ${o.label.color.disabled};

        &[aria-selected] {
          color: ${o.label.color.disabled};
        }
      }
    `}}
`,z=d.div`
  ${()=>{const{tokens:t}=c(),{tab:o}=t.tabs.desktop;return s`
      color: ${o.secondaryLabel.color.base};

      ${l}[aria-disabled="true"] && {
        color: ${o.secondaryLabel.color.disabled};
      }
    `}}
`,K=d.div`
  ${()=>{const{tokens:t}=c(),{tab:o}=t.tabs.desktop;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${o.icon.width};
        height: ${o.icon.height};
        color: ${o.icon.color.base};
      }

      ${l}[aria-selected="true"] && {
        svg {
          color: ${o.icon.color.active};
        }
      }

      ${l}:hover && {
        svg {
          color: ${o.icon.color.hover};
        }

        &[aria-selected] {
          svg {
            color: ${o.icon.color.active};
          }
        }
      }

      ${l}[aria-disabled="true"] && {
        svg {
          color: ${o.icon.color.disabled};
        }

        &[aria-selected] {
          svg {
            color: ${o.icon.color.disabled};
          }
        }
      }
    `}}
`,M=d.div`
  ${()=>{const{tokens:t}=c(),{separator:o}=t.tabs.desktop.tab;return s`
      width: ${o.width};
      background: ${o.color};
      margin-top: ${o.marginTop};
    `}}
`,B=2;function T(){const{items:t,desktopHeading:o,desktopHeadingLevel:e=B,testID:a}=p.useContext(g),r=O(),{headingID:b,getTabA11yData:u}=G();return n.jsxs(E,{children:[o&&n.jsx($,{id:b,component:`h${e}`,variant:r.heading.variant,fontFamily:r.heading.fontFamily,testID:`${a}-heading`,children:o}),n.jsx(A,{"aria-labelledby":b,"data-testid":`${a}-items`,children:n.jsx(v,{items:t,children:i=>{const f=!!i.icon,w=i===t.at(-1),{labelID:m,secondaryLabelID:y}=u(i.id);return n.jsxs(l,{id:i.id,isDisabled:i.isDisabled,"aria-labelledby":`${m} ${y}`,"data-testid":`${a}-item-${i.id}`,children:[n.jsxs(H,{children:[n.jsxs(V,{$withIcon:f,children:[n.jsxs("div",{children:[n.jsx(W,{children:n.jsx($,{id:m,component:"span",variant:r.tab.label.variant,fontFamily:r.tab.label.fontFamily,color:"inherit",children:i.label})}),i.secondaryLabel&&n.jsx(z,{children:n.jsx($,{id:y,component:"span",variant:r.tab.secondaryLabel.variant,fontFamily:r.tab.secondaryLabel.fontFamily,color:"inherit",children:i.secondaryLabel})})]}),f&&n.jsx(K,{children:i.icon})]}),n.jsx(N,{})]}),!w&&n.jsx(M,{})]})}})})]})}function O(){const{tokens:t}=c(),{heading:o,tab:e}=t.tabs.desktop;return{heading:{variant:o.typography.variant,fontFamily:o.typography.fontFamily},tab:{label:{variant:e.label.typography.variant,fontFamily:e.label.typography.fontFamily},secondaryLabel:{variant:e.secondaryLabel.typography.variant,fontFamily:e.secondaryLabel.typography.fontFamily}}}}function G(){const t=p.useId(),o=`${t}-heading`;function e(a){const r=`${t}-tab-label-${a}`,b=`${t}-tab-secondary-label-${a}`;return{labelID:r,secondaryLabelID:b}}return{headingID:o,getTabA11yData:e}}T.__docgenInfo={description:"",methods:[],displayName:"DesktopTabList"};function h(t){const{children:o,testID:e="tabs",...a}=t,{activeItemId:r,onChange:b}=a;function u(i){b(i)}return n.jsx(k,{...a,testID:e,children:n.jsx(R,{selectedKey:r,onSelectionChange:u,"data-testid":e,children:o})})}h.Items=function(){const[o,e]=p.useState(null),a=p.useRef(null),r=p.useRef(null);return p.useEffect(()=>{if(!a.current||!r.current)return;const b={threshold:1,root:a.current},u=new IntersectionObserver(([i])=>{i&&e(i.isIntersecting?"desktop":"mobile")},b);return u.observe(r.current),()=>{u.disconnect()}},[]),n.jsxs("div",{ref:a,children:[n.jsx(F,{ref:r,$tabListView:o,children:n.jsx(T,{})}),o==="mobile"&&n.jsx(x,{})]})};h.Panels=function(){const{items:o,withPadding:e=!0,testID:a}=p.useContext(g);return n.jsx(P,{"data-testid":`${a}-panels`,children:n.jsx(v,{items:o,children:r=>n.jsx(_,{id:r.id,$withPadding:e,$withIcon:!!r.icon,"data-testid":`${a}-panel-${r.id}`,children:r.panel},r.id)})})};h.__docgenInfo={description:"",methods:[{name:"Items",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Tabs"};export{h as T};
