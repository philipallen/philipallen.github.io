import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as b}from"./index-DH5ua8nC.js";import{a as c,u,b as d}from"./index-CtBUti8q.js";import{b as T,a as C,g as D}from"./Tabs.utils-1Cl19AkY.js";import{T as I}from"./Typography-v4_88_aK.js";import{$ as E}from"./VisuallyHidden-KFGkQyAi.js";import{S as q}from"./Select-BaZ__m-z.js";const F=c.div`
  font-size: 0;
`,H=c.div`
  ${({$tabsView:a})=>{const{tokens:e}=u(),{tabs:t}=e;return[d`
        display: inline-grid;
        padding-right: ${t.desktop.container.padding.right};
      `,(!a||a==="mobile")&&d`
          height: 1px;
          overflow: hidden;
          visibility: hidden;
        `]}}
`,A=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
      display: grid;
      gap: ${e.desktop.container.gap};
    `}}
`,P=c.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,S=c.label`
  position: relative;
  display: grid;
  text-wrap: nowrap;
  cursor: pointer;

  &:has(button:disabled) {
    cursor: not-allowed;
  }
`,_=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
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
`,z=c.div`
  ${({$withIcon:a,$isActive:e})=>{const{tokens:t}=u(),{tabs:o}=t;return[d`
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

        label:hover:not(:has(button:disabled)) && {
          background: ${o.desktop.tab.backgroundColor.hover};
        }

        label:has(button:active:not(:disabled)) && {
          outline-width: ${o.desktop.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${o.desktop.tab.activeRing.color};
          outline-offset: ${o.desktop.tab.activeRing.offset};
        }

        user-select: none;
      `,a&&d`
          padding-left: ${o.desktop.tab.padding.left.withIcon};
          padding-right: ${o.desktop.tab.padding.right.withIcon};
        `,e&&d`
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
`,M=c.div`
  ${({$isActive:a})=>{const{tokens:e}=u(),{tabs:t}=e;return[d`
        color: ${t.desktop.tab.label.color.base};

        label:hover && {
          color: ${t.desktop.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.desktop.tab.label.color.disabled};
        }
      `,a&&d`
          color: ${t.desktop.tab.label.color.active};

          label:hover && {
            color: ${t.desktop.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.desktop.tab.label.color.disabled};
          }
        `]}}
`,N=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
      color: ${e.desktop.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${e.desktop.tab.secondaryLabel.color.disabled};
      }
    `}}
`,J=c.div`
  ${({$isActive:a})=>{const{tokens:e}=u(),{tabs:t}=e;return[d`
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
      `,a&&d`
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
`,W=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
      width: ${e.desktop.tab.separator.width};
      background-color: ${e.desktop.tab.separator.color};
      margin-top: ${e.desktop.tab.separator.marginTop};
    `}}
`,X=2;function w(a){const{items:e,activeItemId:t,desktopHeading:o,desktopHeadingLevel:i=X,onChange:l,testID:p="tabs"}=a,{tokens:m}=u(),{tabs:s}=m,g=b.useRef(new Map),k=b.useId(),v=b.useMemo(()=>e.map(({id:r})=>r).join(" "),[e]);function y(r){const{id:h}=r.currentTarget;h!==t&&l(h)}function j(r){var f;const h=C(r,e,t);(f=g.current.get(h))==null||f.focus(),l(h)}return n.jsxs(A,{children:[o&&n.jsx(I,{component:`h${i}`,variant:s.desktop.heading.typography.variant,fontFamily:s.desktop.heading.typography.fontFamily,testID:`${p}-heading`,id:k,children:o}),n.jsx("div",{children:n.jsx(P,{role:"tablist","aria-labelledby":o?k:void 0,"aria-owns":v,children:e.map((r,h)=>{const f=!!r.icon,$=r.id===t,L=h===e.length-1;return n.jsxs(b.Fragment,{children:[n.jsxs(S,{"data-testid":`${p}-tab`,children:[n.jsx(E,{children:n.jsx("button",{ref:R=>g.current.set(r.id,R),type:"button",role:"tab",id:r.id,onClick:y,onKeyDown:j,disabled:r.isDisabled,tabIndex:$?void 0:-1,"aria-labelledby":`${k}-tab-label-${h} ${r.secondaryLabel?`${k}-tab-secondary-label-${h}`:""}`,"aria-selected":$,"aria-controls":T(r.id)})}),n.jsxs(z,{$withIcon:f,$isActive:$,children:[n.jsxs("div",{children:[n.jsx(M,{$isActive:$,children:n.jsx(I,{component:"span",id:`${k}-tab-label-${h}`,variant:s.desktop.tab.label.typography.variant,fontFamily:s.desktop.tab.label.typography.fontFamily,color:"inherit",children:r.label})}),r.secondaryLabel&&n.jsx(N,{children:n.jsx(I,{component:"span",id:`${k}-tab-secondary-label-${h}`,variant:s.desktop.tab.secondaryLabel.typography.variant,fontFamily:s.desktop.tab.secondaryLabel.typography.fontFamily,color:"inherit",children:r.secondaryLabel})})]}),f&&n.jsx(J,{$isActive:$,children:r.icon})]}),n.jsx(_,{})]}),!L&&n.jsx(W,{})]},r.id)})})})]})}w.__docgenInfo={description:"",methods:[],displayName:"DesktopTabs"};const K=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
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
`;function x(a){const{items:e,activeItemId:t,mobileHeading:o,onChange:i}=a,l=b.useMemo(()=>e.filter(s=>!s.isDisabled).map(s=>({id:s.id,title:s.label,value:s.label})),[e]),p=l.find(s=>s.id===t);function m(s){const{id:g}=s;g!==t&&i(g)}return n.jsx(K,{children:n.jsx(q,{labelProps:{label:o},selectedItem:p,items:l,onChange:m})})}x.__docgenInfo={description:"",methods:[],displayName:"MobileTabs"};function V(a){const{mobileHeading:e,desktopHeading:t,desktopHeadingLevel:o,testID:i="tabs",...l}=a,[p,m]=b.useState(null),s=b.useRef(null),g=b.useRef(null);return b.useEffect(()=>{if(!s.current||!g.current)return;const k={threshold:1,root:s.current},v=new IntersectionObserver(([y])=>{y&&m(y.isIntersecting?"desktop":"mobile")},k);return v.observe(g.current),()=>{v.disconnect()}},[]),n.jsxs(F,{ref:s,"data-testid":i,children:[n.jsx(H,{ref:g,$tabsView:p,inert:p==="desktop"?void 0:"",children:n.jsx(w,{desktopHeading:t,desktopHeadingLevel:o,...l})}),p==="mobile"&&n.jsx(x,{mobileHeading:e,...l})]})}V.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  panel: JSX.Element;
  icon?: JSX.Element;
  secondaryLabel?: string;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"panel",value:{name:"JSX.Element",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"TabsItem[]"},description:""},activeItemId:{required:!0,tsType:{name:"string",raw:'TabsItem["id"]'},description:""},mobileHeading:{required:!0,tsType:{name:"string"},description:""},desktopHeading:{required:!1,tsType:{name:"string"},description:""},desktopHeadingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(activeItemId: TabsItem["id"]) => void',signature:{arguments:[{type:{name:"string",raw:'TabsItem["id"]'},name:"activeItemId"}],return:{name:"void"}}},description:""}}};const B=c.div`
  ${()=>{const{tokens:a}=u(),{tabs:e}=a;return d`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,O=c.div`
  ${({$withIcon:a,$isActive:e,$withPadding:t})=>{const{tokens:o}=u(),{tabs:i}=o;return[d`
        display: ${e?"block":"none"};
        background: ${i.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${i.panel.focusRing.width};
          outline-style: ${i.panel.focusRing.style};
          outline-color: ${i.panel.focusRing.color};
        }
      `,t&&d`
          padding-top: ${i.panel.padding.top};
          padding-bottom: ${i.panel.padding.bottom};
          padding-left: ${i.panel.padding.left.base};
          padding-right: ${i.panel.padding.right.base};
        `,t&&a&&d`
          padding-left: ${i.panel.padding.left.withIcon};
          padding-right: ${i.panel.padding.right.withIcon};
        `]}}
`;function U(a){const{items:e,activeItemId:t,withPadding:o=!0,testID:i="tab-panels"}=a;return n.jsx(B,{"data-testid":i,children:e.map(l=>n.jsx(G,{item:l,activeItemId:t,withPadding:o},l.id))})}function G(a){const{item:e,activeItemId:t,withPadding:o}=a,i=!!e.icon,l=e.id===t,p=b.useRef(null),[m,s]=b.useState(!1);return b.useEffect(()=>{if(p.current){const g=D(p.current);s(g.length>0)}},[e.panel]),n.jsx(O,{ref:p,role:"tabpanel",id:T(e.id),tabIndex:l&&!m?0:-1,$withIcon:i,$isActive:l,$withPadding:o,"aria-labelledby":e.id,children:e.panel})}U.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{withPadding:{required:!1,tsType:{name:"boolean"},description:""}}};export{V as T,U as a};
