import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as k}from"./index-DH5ua8nC.js";import{a as b,u,b as c}from"./index-D3TaQYms.js";import{T as y}from"./Typography-squJd_7u.js";import{$ as L}from"./VisuallyHidden-KFGkQyAi.js";import{S as R}from"./Select-DWBAliPo.js";const C=b.div`
  font-size: 0;
`,D=b.div`
  ${({$tabsView:n})=>{const{tokens:e}=u(),{tabs:t}=e;return[c`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!n||n==="mobile")&&c`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,A=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
      display: grid;
      gap: ${e.desktop.container.gap};
    `}}
`,q=b.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,E=b.label`
  position: relative;
  display: grid;
  text-wrap: nowrap;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,H=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
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
`,_=b.div`
  ${({$withIcon:n,$isActive:e})=>{const{tokens:t}=u(),{tabs:o}=t;return[c`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${o.desktop.tab.backgroundColor.base};

        border-top-left-radius: ${o.desktop.tab.radius.topLeft};
        border-top-right-radius: ${o.desktop.tab.radius.topLeft};
        border-top-width: ${o.desktop.tab.strokeTop.width};
        border-top-style: ${o.desktop.tab.strokeTop.style};
        border-top-color: ${o.desktop.tab.strokeTop.color.base};

        padding-top: ${o.desktop.tab.padding.top};
        padding-bottom: ${o.desktop.tab.padding.bottom};
        padding-left: ${o.desktop.tab.padding.left.base};
        padding-right: ${o.desktop.tab.padding.right.base};

        label:hover && {
          background: ${o.desktop.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
          outline-width: ${o.desktop.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${o.desktop.tab.activeRing.color};
          outline-offset: ${o.desktop.tab.activeRing.offset};
        }

        user-select: none;
      `,n&&c`
          padding-left: ${o.desktop.tab.padding.left.withIcon};
          padding-right: ${o.desktop.tab.padding.right.withIcon};
        `,e&&c`
          background: ${o.desktop.tab.backgroundColor.active};
          border-top-color: ${o.desktop.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${o.desktop.tab.backgroundColor.active};
          }
        `]}}
`,S=b.div`
  ${({$isActive:n})=>{const{tokens:e}=u(),{tabs:t}=e;return[c`
        color: ${t.desktop.tab.label.color.base};

        label:hover && {
          color: ${t.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.desktop.tab.label.color.disabled};
        }
      `,n&&c`
          color: ${t.desktop.tab.label.color.active};

          label:hover && {
            color: ${t.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.desktop.tab.label.color.disabled};
          }
        `]}}
`,F=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
      color: ${e.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${e.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`,P=b.div`
  ${({$isActive:n})=>{const{tokens:e}=u(),{tabs:t}=e;return[c`
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
      `,n&&c`
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
`,z=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
      width: ${e.desktop.tab.separator.width};
      background-color: ${e.desktop.tab.separator.color};
      margin-top: ${e.desktop.tab.separator.marginTop};
    `}}
`,N=2;function w(n){return`${n}-panel`}function J(n,e,t){let o=t;const a=e.filter(d=>!d.isDisabled),r=a[0],p=a[a.length-1],g=a.find(d=>d.id===t);if(!g)return o;const i=a.indexOf(g);switch(n.key){case"ArrowLeft":{const d=a[i-1];o=d?d.id:p?p.id:t;break}case"ArrowRight":{const d=a[i+1];o=d?d.id:r?r.id:t;break}case"Home":{o=r?r.id:t;break}case"End":{o=p?p.id:t;break}}return o}function T(n){const{items:e,activeItemId:t,desktopHeading:o,desktopHeadingLevel:a=N,onChange:r,testID:p="tabs"}=n,{tokens:g}=u(),{tabs:i}=g,d=k.useRef(new Map);function v(l){const{id:h}=l.currentTarget;h!==t&&r(h)}function m(l){var f;const h=J(l,e,t);(f=d.current.get(h))==null||f.focus(),r(h)}return s.jsxs(A,{children:[o&&s.jsx(y,{component:`h${a}`,variant:i.desktop.heading.typography.variant,fontFamily:i.desktop.heading.typography.fontFamily,testID:`${p}-heading`,children:o}),s.jsx("div",{children:s.jsx(q,{role:"tablist",children:e.map((l,h)=>{const f=!!l.icon,$=l.id===t,x=h===e.length-1;return s.jsxs(k.Fragment,{children:[s.jsxs(E,{"data-testid":`${p}-tab`,children:[s.jsx(L,{children:s.jsx("button",{ref:j=>d.current.set(l.id,j),type:"button",role:"tab",id:l.id,onClick:v,onKeyDown:m,disabled:l.isDisabled,tabIndex:$?void 0:-1,"aria-label":l.label,"aria-selected":$,"aria-controls":w(l.id)})}),s.jsxs(_,{$withIcon:f,$isActive:$,children:[s.jsxs("div",{children:[s.jsx(S,{$isActive:$,children:s.jsx(y,{component:"span",variant:i.desktop.tab.label.typography.variant,fontFamily:i.desktop.tab.label.typography.fontFamily,color:"inherit",children:l.label})}),l.secondaryLabel&&s.jsx(F,{children:s.jsx(y,{component:"span",variant:i.desktop.tab.secondaryLabel.typography.variant,fontFamily:i.desktop.tab.secondaryLabel.typography.fontFamily,color:"inherit",children:l.secondaryLabel})})]}),f&&s.jsx(P,{$isActive:$,children:l.icon})]}),s.jsx(H,{})]}),!x&&s.jsx(z,{})]},l.id)})})})]})}T.__docgenInfo={description:"",methods:[],displayName:"DesktopTabs"};const M=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
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
`;function I(n){const{items:e,activeItemId:t,mobileHeading:o,onChange:a}=n,r=k.useMemo(()=>e.filter(i=>!i.isDisabled).map(i=>({id:i.id,title:i.label,value:i.label})),[e]),p=r.find(i=>i.id===t);function g(i){const{id:d}=i;d!==t&&a(d)}return s.jsx(M,{children:s.jsx(R,{labelProps:{label:o},selectedItem:p,items:r,onChange:g})})}I.__docgenInfo={description:"",methods:[],displayName:"MobileTabs"};function W(n){const{mobileHeading:e,desktopHeading:t,desktopHeadingLevel:o,testID:a="tabs",...r}=n,[p,g]=k.useState(null),i=k.useRef(null),d=k.useRef(null);return k.useEffect(()=>{if(!i.current||!d.current)return;const v={threshold:1,root:i.current},m=new IntersectionObserver(([l])=>{l&&g(l.isIntersecting?"desktop":"mobile")},v);return m.observe(d.current),()=>{m.disconnect()}},[]),s.jsxs(C,{ref:i,"data-testid":a,children:[s.jsx(D,{ref:d,$tabsView:p,inert:p==="desktop"?void 0:"",children:s.jsx(T,{desktopHeading:t,desktopHeadingLevel:o,...r})}),p==="mobile"&&s.jsx(I,{mobileHeading:e,...r})]})}W.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  panel: JSX.Element;
  icon?: JSX.Element;
  secondaryLabel?: string;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"panel",value:{name:"JSX.Element",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"TabsItem[]"},description:""},activeItemId:{required:!0,tsType:{name:"string",raw:'TabsItem["id"]'},description:""},mobileHeading:{required:!0,tsType:{name:"string"},description:""},desktopHeading:{required:!1,tsType:{name:"string"},description:""},desktopHeadingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(activeItemId: TabsItem["id"]) => void',signature:{arguments:[{type:{name:"string",raw:'TabsItem["id"]'},name:"activeItemId"}],return:{name:"void"}}},description:""}}};const X=b.div`
  ${()=>{const{tokens:n}=u(),{tabs:e}=n;return c`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,B=b.div`
  ${({$withIcon:n,$isActive:e,$withPadding:t})=>{const{tokens:o}=u(),{tabs:a}=o;return[c`
        display: ${e?"block":"none"};
        background: ${a.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${a.panel.focusRing.width};
          outline-style: ${a.panel.focusRing.style};
          outline-color: ${a.panel.focusRing.color};
        }
      `,t&&c`
          padding-top: ${a.panel.padding.top};
          padding-bottom: ${a.panel.padding.bottom};
          padding-left: ${a.panel.padding.left.base};
          padding-right: ${a.panel.padding.right.base};
        `,t&&n&&c`
          padding-left: ${a.panel.padding.left.withIcon};
          padding-right: ${a.panel.padding.right.withIcon};
        `]}}
`;function K(n){const{items:e,activeItemId:t,withPadding:o=!0,testID:a="tab-panels"}=n;return s.jsx(X,{"data-testid":a,children:e.map(r=>{const p=!!r.icon,g=r.id===t;return s.jsx(B,{role:"tabpanel",id:w(r.id),tabIndex:g?0:-1,$withIcon:p,$isActive:g,$withPadding:o,"aria-labelledby":r.id,children:r.panel},r.id)})})}K.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{withPadding:{required:!1,tsType:{name:"boolean"},description:""}}};export{W as T,K as a};
