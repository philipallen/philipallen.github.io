import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{b as I,d as L,$ as j,a as D,c as R}from"./Tabs-DdZd5fv-.js";import{$ as v}from"./Collection-C4H3d3-i.js";import{a as d,u as c,b as s}from"./index-CzvSJj6w.js";import{S as C}from"./Select-CHqIUqVY.js";import{T as $}from"./Typography-Dt8pkH_V.js";const F=d.div`
  ${({$tabListView:o})=>{const{tokens:e}=c(),{tabs:t}=e;return[s`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!o||o==="mobile")&&s`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,P=d.div`
  ${()=>{const{tokens:o}=c(),{tabs:e}=o;return s`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,_=d(I)`
  ${({$withIcon:o,$withPadding:e})=>{const{tokens:t}=c(),{tabs:a}=t;return[s`
        background: ${a.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${a.panel.focusRing.width};
          outline-style: ${a.panel.focusRing.style};
          outline-color: ${a.panel.focusRing.color};
        }
      `,e&&s`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,o&&e&&s`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`,g=p.createContext({}),k=o=>{const{children:e,...t}=o;return n.jsx(g.Provider,{value:t,children:e})};k.__docgenInfo={description:"",methods:[],displayName:"TabsProvider"};const S=d.div`
  ${()=>{const{tokens:o}=c(),{tabs:e}=o;return s`
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
`;function x(){const o=p.useContext(L),{items:e,activeItemId:t,mobileHeading:a}=p.useContext(g),r=p.useMemo(()=>e.filter(i=>!i.isDisabled).map(i=>({id:i.id,title:i.label,value:i.label})),[e]),b=r.find(i=>i.id===t);function u(i){o&&i&&o.setSelectedKey(i.id)}return n.jsx(S,{children:n.jsx(C,{labelProps:{label:a},items:r,selectedItem:b,onChange:u})})}x.__docgenInfo={description:"",methods:[],displayName:"MobileTabList"};const E=d.div`
  ${()=>{const{tokens:o}=c(),{container:e}=o.tabs.desktop;return s`
      display: grid;
      gap: ${e.gap};
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

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`,N=d.div`
  ${()=>{const{tokens:o}=c(),{tab:e}=o.tabs.desktop;return s`
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

      ${l}[data-focus-visible="true"] && {
        display: block;
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,H=d.div`
  position: relative;
`,V=d.div`
  ${({$withIcon:o})=>{const{tokens:e}=c(),{tab:t}=e.tabs.desktop;return[s`
        position: relative;
        z-index: 1;
        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;
        height: 100%;
        background: ${t.backgroundColor.base};
        border-top-left-radius: ${t.radius.topLeft};
        border-top-right-radius: ${t.radius.topLeft};
        border-top-width: ${t.strokeTop.width};
        border-top-style: ${t.strokeTop.style};
        border-top-color: ${t.strokeTop.color.base};
        padding-top: ${t.padding.top};
        padding-bottom: ${t.padding.bottom};
        padding-left: ${t.padding.left.base};
        padding-right: ${t.padding.right.base};

        ${l}[data-hovered="true"] && {
          background: ${t.backgroundColor.hover};
        }

        ${l}[data-pressed="true"] && {
          outline-width: ${t.activeRing.width};
          outline-style: ${t.activeRing.style};
          outline-color: ${t.activeRing.color};
          outline-offset: ${t.activeRing.offset};
        }

        ${l}[aria-selected="true"] && {
          background: ${t.backgroundColor.active};
          border-top-color: ${t.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${t.backgroundColor.active};
          }
        }
      `,o&&s`
          padding-left: ${t.padding.left.withIcon};
          padding-right: ${t.padding.right.withIcon};
        `]}}
`,W=d.div`
  ${()=>{const{tokens:o}=c(),{tab:e}=o.tabs.desktop;return s`
      color: ${e.label.color.base};

      ${l}[aria-selected="true"] && {
        color: ${e.label.color.active};
      }

      ${l}:hover && {
        color: ${e.label.color.hover};

        &[aria-selected="true"] {
          color: ${e.label.color.active};
        }
      }

      ${l}[aria-disabled="true"] && {
        color: ${e.label.color.disabled};

        &[aria-selected="true"] {
          color: ${e.label.color.disabled};
        }
      }
    `}}
`,z=d.div`
  ${()=>{const{tokens:o}=c(),{tab:e}=o.tabs.desktop;return s`
      color: ${e.secondaryLabel.color.base};

      ${l}[aria-disabled="true"] && {
        color: ${e.secondaryLabel.color.disabled};
      }
    `}}
`,K=d.div`
  ${()=>{const{tokens:o}=c(),{tab:e}=o.tabs.desktop;return s`
      display: grid;
      place-items: center;

      svg {
        width: ${e.icon.width};
        height: ${e.icon.height};
        color: ${e.icon.color.base};
      }

      ${l}[aria-selected="true"] && {
        svg {
          color: ${e.icon.color.active};
        }
      }

      ${l}:hover && {
        svg {
          color: ${e.icon.color.hover};
        }

        &[aria-selected="true"] {
          svg {
            color: ${e.icon.color.active};
          }
        }
      }

      ${l}[aria-disabled="true"] && {
        svg {
          color: ${e.icon.color.disabled};
        }

        &[aria-selected="true"] {
          svg {
            color: ${e.icon.color.disabled};
          }
        }
      }
    `}}
`,M=d.div`
  ${()=>{const{tokens:o}=c(),{separator:e}=o.tabs.desktop.tab;return s`
      width: ${e.width};
      background: ${e.color};
      margin-top: ${e.marginTop};
    `}}
`,B=2;function T(){const{items:o,desktopHeading:e,desktopHeadingLevel:t=B,testID:a}=p.useContext(g),r=O(),{headingID:b,getTabA11yData:u}=G();return n.jsxs(E,{children:[e&&n.jsx($,{id:b,component:`h${t}`,variant:r.heading.variant,fontFamily:r.heading.fontFamily,testID:`${a}-heading`,children:e}),n.jsx(A,{"aria-labelledby":b,"data-testid":`${a}-items`,children:n.jsx(v,{items:o,children:i=>{const f=!!i.icon,w=i===o.at(-1),{labelID:m,secondaryLabelID:y}=u(i.id);return n.jsxs(l,{id:i.id,isDisabled:i.isDisabled,"aria-labelledby":`${m} ${y}`,"data-testid":`${a}-item-${i.id}`,children:[n.jsxs(H,{children:[n.jsxs(V,{$withIcon:f,children:[n.jsxs("div",{children:[n.jsx(W,{children:n.jsx($,{id:m,component:"span",variant:r.tab.label.variant,fontFamily:r.tab.label.fontFamily,color:"inherit",children:i.label})}),i.secondaryLabel&&n.jsx(z,{children:n.jsx($,{id:y,component:"span",variant:r.tab.secondaryLabel.variant,fontFamily:r.tab.secondaryLabel.fontFamily,color:"inherit",children:i.secondaryLabel})})]}),f&&n.jsx(K,{children:i.icon})]}),n.jsx(N,{})]}),!w&&n.jsx(M,{})]})}})})]})}function O(){const{tokens:o}=c(),{heading:e,tab:t}=o.tabs.desktop;return{heading:{variant:e.typography.variant,fontFamily:e.typography.fontFamily},tab:{label:{variant:t.label.typography.variant,fontFamily:t.label.typography.fontFamily},secondaryLabel:{variant:t.secondaryLabel.typography.variant,fontFamily:t.secondaryLabel.typography.fontFamily}}}}function G(){const o=p.useId(),e=`${o}-heading`;function t(a){const r=`${o}-tab-label-${a}`,b=`${o}-tab-secondary-label-${a}`;return{labelID:r,secondaryLabelID:b}}return{headingID:e,getTabA11yData:t}}T.__docgenInfo={description:"",methods:[],displayName:"DesktopTabList"};function h(o){const{children:e,testID:t="tabs",...a}=o,{activeItemId:r,onChange:b}=a;function u(i){b(i)}return n.jsx(k,{...a,testID:t,children:n.jsx(R,{selectedKey:r,onSelectionChange:u,"data-testid":t,children:e})})}h.Items=function(){const[e,t]=p.useState(null),a=p.useRef(null),r=p.useRef(null);return p.useEffect(()=>{if(!a.current||!r.current)return;const b={threshold:1,root:a.current},u=new IntersectionObserver(([i])=>{i&&t(i.isIntersecting?"desktop":"mobile")},b);return u.observe(r.current),()=>{u.disconnect()}},[]),n.jsxs("div",{ref:a,children:[n.jsx(F,{ref:r,$tabListView:e,children:n.jsx(T,{})}),e==="mobile"&&n.jsx(x,{})]})};h.Panels=function(){const{items:e,withPadding:t=!0,testID:a}=p.useContext(g);return n.jsx(P,{"data-testid":`${a}-panels`,children:n.jsx(v,{items:e,children:r=>n.jsx(_,{id:r.id,$withPadding:t,$withIcon:!!r.icon,"data-testid":`${a}-panel-${r.id}`,children:r.panel},r.id)})})};h.__docgenInfo={description:"",methods:[{name:"Items",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Tabs"};export{h as T};
