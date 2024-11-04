import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as k}from"./index-DH5ua8nC.js";import{a as c,u as p,b as d}from"./index-C-LSVLXB.js";import{a as T,g as L}from"./Tabs.utils-MQt-APGj.js";import{T as y}from"./Typography-DPnR7vBA.js";import{$ as R}from"./VisuallyHidden-KFGkQyAi.js";import{S as C}from"./Select-Ba5-jlF2.js";const D=c.div`
  font-size: 0;
`,q=c.div`
  ${({$tabsView:o})=>{const{tokens:e}=p(),{tabs:t}=e;return[d`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!o||o==="mobile")&&d`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,E=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
      display: grid;
      gap: ${e.desktop.container.gap};
    `}}
`,A=c.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,H=c.label`
  position: relative;
  display: grid;
  text-wrap: nowrap;
  cursor: pointer;

  &:has(button:disabled) {
    cursor: not-allowed;
  }
`,_=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
      display: none;
      border-top-left-radius: ${e.desktop.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${e.desktop.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${e.desktop.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${e.desktop.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${e.desktop.tab.focusRing.width};
        outline-style: ${e.desktop.tab.focusRing.style};
        outline-color: ${e.desktop.tab.focusRing.color};
        outline-offset: ${e.desktop.tab.focusRing.offset};
      }
    `}}
`,S=c.div`
  ${({$withIcon:o,$isActive:e})=>{const{tokens:t}=p(),{tabs:a}=t;return[d`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${a.desktop.tab.backgroundColor.base};

        border-top-left-radius: ${a.desktop.tab.radius.topLeft};
        border-top-right-radius: ${a.desktop.tab.radius.topLeft};
        border-top-width: ${a.desktop.tab.strokeTop.width};
        border-top-style: ${a.desktop.tab.strokeTop.style};
        border-top-color: ${a.desktop.tab.strokeTop.color.base};

        padding-top: ${a.desktop.tab.padding.top};
        padding-bottom: ${a.desktop.tab.padding.bottom};
        padding-left: ${a.desktop.tab.padding.left.base};
        padding-right: ${a.desktop.tab.padding.right.base};

        label:hover:not(:has(button:disabled)) && {
          background: ${a.desktop.tab.backgroundColor.hover};
        }

        label:has(button:active:not(:disabled)) && {
          outline-width: ${a.desktop.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${a.desktop.tab.activeRing.color};
          outline-offset: ${a.desktop.tab.activeRing.offset};
        }

        user-select: none;
      `,o&&d`
          padding-left: ${a.desktop.tab.padding.left.withIcon};
          padding-right: ${a.desktop.tab.padding.right.withIcon};
        `,e&&d`
          background: ${a.desktop.tab.backgroundColor.active};
          border-top-color: ${a.desktop.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${a.desktop.tab.backgroundColor.active};
          }
        `]}}
`,F=c.div`
  ${({$isActive:o})=>{const{tokens:e}=p(),{tabs:t}=e;return[d`
        color: ${t.desktop.tab.label.color.base};

        label:hover && {
          color: ${t.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.desktop.tab.label.color.disabled};
        }
      `,o&&d`
          color: ${t.desktop.tab.label.color.active};

          label:hover && {
            color: ${t.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.desktop.tab.label.color.disabled};
          }
        `]}}
`,P=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
      color: ${e.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${e.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`,z=c.div`
  ${({$isActive:o})=>{const{tokens:e}=p(),{tabs:t}=e;return[d`
        display: grid;
        place-items: center;

        svg {
          width: ${t.desktop.tab.icon.width};
          height: ${t.desktop.tab.icon.height};
          color: ${t.desktop.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${t.desktop.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${t.desktop.tab.icon.color.disabled};
          }
        }
      `,o&&d`
          svg {
            color: ${t.desktop.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${t.desktop.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${t.desktop.tab.icon.color.disabled};
            }
          }
        `]}}
`,N=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
      width: ${e.desktop.tab.separator.width};
      background-color: ${e.desktop.tab.separator.color};
      margin-top: ${e.desktop.tab.separator.marginTop};
    `}}
`,J=2;function w(o){const{items:e,activeItemId:t,desktopHeading:a,desktopHeadingLevel:r=J,onChange:l,testID:b="tabs"}=o,{tokens:g}=p(),{tabs:s}=g,u=k.useRef(new Map);function v(i){const{id:h}=i.currentTarget;h!==t&&l(h)}function m(i){var f;const h=L(i,e,t);(f=u.current.get(h))==null||f.focus(),l(h)}return n.jsxs(E,{children:[a&&n.jsx(y,{component:`h${r}`,variant:s.desktop.heading.typography.variant,fontFamily:s.desktop.heading.typography.fontFamily,testID:`${b}-heading`,children:a}),n.jsx("div",{children:n.jsx(A,{role:"tablist",children:e.map((i,h)=>{const f=!!i.icon,$=i.id===t,x=h===e.length-1;return n.jsxs(k.Fragment,{children:[n.jsxs(H,{"data-testid":`${b}-tab`,children:[n.jsx(R,{children:n.jsx("button",{ref:j=>u.current.set(i.id,j),type:"button",role:"tab",id:i.id,onClick:v,onKeyDown:m,disabled:i.isDisabled,tabIndex:$?void 0:-1,"aria-label":i.label,"aria-selected":$,"aria-controls":T(i.id)})}),n.jsxs(S,{$withIcon:f,$isActive:$,children:[n.jsxs("div",{children:[n.jsx(F,{$isActive:$,children:n.jsx(y,{component:"span",variant:s.desktop.tab.label.typography.variant,fontFamily:s.desktop.tab.label.typography.fontFamily,color:"inherit",children:i.label})}),i.secondaryLabel&&n.jsx(P,{children:n.jsx(y,{component:"span",variant:s.desktop.tab.secondaryLabel.typography.variant,fontFamily:s.desktop.tab.secondaryLabel.typography.fontFamily,color:"inherit",children:i.secondaryLabel})})]}),f&&n.jsx(z,{$isActive:$,children:i.icon})]}),n.jsx(_,{})]}),!x&&n.jsx(N,{})]},i.id)})})})]})}w.__docgenInfo={description:"",methods:[],displayName:"DesktopTabs"};const M=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
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
`;function I(o){const{items:e,activeItemId:t,mobileHeading:a,onChange:r}=o,l=k.useMemo(()=>e.filter(s=>!s.isDisabled).map(s=>({id:s.id,title:s.label,value:s.label})),[e]),b=l.find(s=>s.id===t);function g(s){const{id:u}=s;u!==t&&r(u)}return n.jsx(M,{children:n.jsx(C,{labelProps:{label:a},selectedItem:b,items:l,onChange:g})})}I.__docgenInfo={description:"",methods:[],displayName:"MobileTabs"};function W(o){const{mobileHeading:e,desktopHeading:t,desktopHeadingLevel:a,testID:r="tabs",...l}=o,[b,g]=k.useState(null),s=k.useRef(null),u=k.useRef(null);return k.useEffect(()=>{if(!s.current||!u.current)return;const v={threshold:1,root:s.current},m=new IntersectionObserver(([i])=>{i&&g(i.isIntersecting?"desktop":"mobile")},v);return m.observe(u.current),()=>{m.disconnect()}},[]),n.jsxs(D,{ref:s,"data-testid":r,children:[n.jsx(q,{ref:u,$tabsView:b,inert:b==="desktop"?void 0:"",children:n.jsx(w,{desktopHeading:t,desktopHeadingLevel:a,...l})}),b==="mobile"&&n.jsx(I,{mobileHeading:e,...l})]})}W.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  panel: JSX.Element;
  icon?: JSX.Element;
  secondaryLabel?: string;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"panel",value:{name:"JSX.Element",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"TabsItem[]"},description:""},activeItemId:{required:!0,tsType:{name:"string",raw:'TabsItem["id"]'},description:""},mobileHeading:{required:!0,tsType:{name:"string"},description:""},desktopHeading:{required:!1,tsType:{name:"string"},description:""},desktopHeadingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(activeItemId: TabsItem["id"]) => void',signature:{arguments:[{type:{name:"string",raw:'TabsItem["id"]'},name:"activeItemId"}],return:{name:"void"}}},description:""}}};const X=c.div`
  ${()=>{const{tokens:o}=p(),{tabs:e}=o;return d`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,K=c.div`
  ${({$withIcon:o,$isActive:e,$withPadding:t})=>{const{tokens:a}=p(),{tabs:r}=a;return[d`
        display: ${e?"block":"none"};
        background: ${r.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${r.panel.focusRing.width};
          outline-style: ${r.panel.focusRing.style};
          outline-color: ${r.panel.focusRing.color};
        }
      `,t&&d`
          padding-top: ${r.panel.padding.top};
          padding-bottom: ${r.panel.padding.bottom};
          padding-left: ${r.panel.padding.left.base};
          padding-right: ${r.panel.padding.right.base};
        `,t&&o&&d`
          padding-left: ${r.panel.padding.left.withIcon};
          padding-right: ${r.panel.padding.right.withIcon};
        `]}}
`;function V(o){const{items:e,activeItemId:t,withPadding:a=!0,testID:r="tab-panels"}=o;return n.jsx(X,{"data-testid":r,children:e.map(l=>{const b=!!l.icon,g=l.id===t;return n.jsx(K,{role:"tabpanel",id:T(l.id),tabIndex:g?0:-1,$withIcon:b,$isActive:g,$withPadding:a,"aria-labelledby":l.id,children:l.panel},l.id)})})}V.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{withPadding:{required:!1,tsType:{name:"boolean"},description:""}}};export{W as T,V as a};
