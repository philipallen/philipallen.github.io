import{j as a}from"./jsx-runtime-6eef64cc.js";import{f as B}from"./index-6eef940f.js";import{r as k}from"./index-c013ead5.js";import{a as b,u,b as s}from"./index-912b60f4.js";import{T as d}from"./Typography-a205704a.js";import{$ as z}from"./VisuallyHidden-fa1dbefe.js";import{c as m}from"./index-71d43b47.js";const F=b.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,J=b.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,X=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:e}=r;return s`
      display: none;
      border-top-left-radius: ${e.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${e.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${e.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${e.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${e.tab.focusRing.width};
        outline-style: ${e.tab.focusRing.style};
        outline-color: ${e.tab.focusRing.color};
        outline-offset: ${e.tab.focusRing.offset};
      }
    `}}
`,K=b.div`
  ${({$withIcon:r,$isActive:e})=>{const{tokens:t}=u(),{tabs:o}=t;return[s`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

        background: ${o.tab.backgroundColor.base};

        border-top-left-radius: ${o.tab.radius.topLeft};
        border-top-right-radius: ${o.tab.radius.topLeft};
        border-top-width: ${o.tab.strokeTop.width};
        border-top-style: ${o.tab.strokeTop.style};
        border-top-color: ${o.tab.strokeTop.color.base};

        padding-top: ${o.tab.padding.top};
        padding-bottom: ${o.tab.padding.bottom};
        padding-left: ${o.tab.padding.left.base};
        padding-right: ${o.tab.padding.right.base};

        label:hover && {
          background: ${o.tab.backgroundColor.hover};
        }

        label:has(button:active) && {
          outline-width: ${o.tab.activeRing.width};
          outline-style: solid;
          outline-color: ${o.tab.activeRing.color};
          outline-offset: ${o.tab.activeRing.offset};
        }

        user-select: none;
      `,r&&s`
          padding-left: ${o.tab.padding.left.withIcon};
          padding-right: ${o.tab.padding.right.withIcon};
        `,e&&s`
          background: ${o.tab.backgroundColor.active};
          border-top-color: ${o.tab.strokeTop.color.active};

          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background: ${o.tab.backgroundColor.active};
          }
        `]}}
`,M=b.div`
  ${({$isActive:r})=>{const{tokens:e}=u(),{tabs:t}=e;return[s`
        color: ${t.tab.label.color.base};

        label:hover && {
          color: ${t.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.tab.label.color.disabled};
        }
      `,r&&s`
          color: ${t.tab.label.color.active};

          label:hover && {
            color: ${t.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.tab.label.color.disabled};
          }
        `]}}
`,N=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:e}=r;return s`
      color: ${e.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${e.tab.secondaryLabel.color.disabled};
      }
    `}}
`,V=b.div`
  ${({$isActive:r})=>{const{tokens:e}=u(),{tabs:t}=e;return[s`
        display: grid;
        place-items: center;

        svg {
          width: ${t.tab.icon.width};
          height: ${t.tab.icon.height};
          color: ${t.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${t.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${t.tab.icon.color.disabled};
          }
        }
      `,r&&s`
          svg {
            color: ${t.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${t.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${t.tab.icon.color.disabled};
            }
          }
        `]}}
`,U=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:e}=r;return s`
      width: ${e.tab.separator.width};
      background-color: ${e.tab.separator.color};
      margin-top: ${e.tab.separator.marginTop};
    `}}
`;function E(r){return`${r}-panel`}function H(r,e,t){let o=t;const n=e.filter(c=>!c.isDisabled),l=n[0],g=n[n.length-1],p=n.find(c=>c.id===t);if(!p)return o;const f=n.indexOf(p);switch(r.key){case"ArrowLeft":{const c=n[f-1];o=c?c.id:g?g.id:t;break}case"ArrowRight":{const c=n[f+1];o=c?c.id:l?l.id:t;break}case"Home":{o=l?l.id:t;break}case"End":{o=g?g.id:t;break}}return o}function I(r){const{items:e,activeItemId:t,onChange:o,testID:n="tabs",...l}=r,{tokens:g}=u(),{tabs:p}=g,f=k.useRef(new Map);function c(i){const{id:h}=i.currentTarget;h!==t&&o(h)}function P(i){var $;const h=H(i,e,t);($=f.current.get(h))==null||$.focus(),o(h)}return a.jsx(F,{...l,role:"tablist","data-testid":n,children:e.map((i,h)=>{const $=!!i.icon,y=i.id===t,W=h===e.length-1;return a.jsxs(k.Fragment,{children:[a.jsxs(J,{"data-testid":`${n}-tab`,children:[a.jsx(z,{children:a.jsx("button",{ref:O=>f.current.set(i.id,O),type:"button",role:"tab",id:i.id,onClick:c,onKeyDown:P,disabled:i.isDisabled,tabIndex:y?void 0:-1,"aria-label":i.label,"aria-selected":y,"aria-controls":E(i.id)})}),a.jsxs(K,{$withIcon:$,$isActive:y,children:[a.jsxs("div",{children:[a.jsx(M,{$isActive:y,children:a.jsx(d,{component:"span",fontFamily:p.tab.label.fontFamily,variant:p.tab.label.typographyVariant,color:"inherit",children:i.label})}),i.secondaryLabel&&a.jsx(N,{children:a.jsx(d,{component:"span",variant:p.tab.secondaryLabel.typographyVariant,color:"inherit",children:i.secondaryLabel})})]}),$&&a.jsx(V,{$isActive:y,children:i.icon})]}),a.jsx(X,{})]}),!W&&a.jsx(U,{})]},i.id)})})}I.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  panel: JSX.Element;
  icon?: JSX.Element;
  secondaryLabel?: string;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"panel",value:{name:"JSX.Element",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"TabsItem[]"},description:""},activeItemId:{required:!0,tsType:{name:"string",raw:'TabsItem["id"]'},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(activeItemId: TabsItem["id"]) => void',signature:{arguments:[{type:{name:"string",raw:'TabsItem["id"]'},name:"activeItemId"}],return:{name:"void"}}},description:""}}};const Y=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:e}=r;return s`
      border-top-width: ${e.panel.strokeTop.width};
      border-top-style: ${e.panel.strokeTop.style};
      border-top-color: ${e.panel.strokeTop.color};
    `}}
`,G=b.div`
  ${({$withIcon:r,$isActive:e,$withPadding:t})=>{const{tokens:o}=u(),{tabs:n}=o;return[s`
        display: ${e?"block":"none"};
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
        `,t&&r&&s`
          padding-left: ${n.panel.padding.left.withIcon};
          padding-right: ${n.panel.padding.right.withIcon};
        `]}}
`;function q(r){const{items:e,activeItemId:t,withPadding:o=!0,testID:n="tab-panels"}=r;return a.jsx(Y,{"data-testid":n,children:e.map(l=>{const g=!!l.icon,p=l.id===t;return a.jsx(G,{role:"tabpanel",id:E(l.id),tabIndex:p?0:-1,$withIcon:g,$isActive:p,$withPadding:o,"aria-labelledby":l.id,children:l.panel},l.id)})})}q.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{withPadding:{required:!1,tsType:{name:"boolean"},description:""}}};const Q={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:a.jsx(d,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:a.jsx(d,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:a.jsx(d,{children:"Tab panel 03"})}]},Z={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:a.jsx(d,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:a.jsx(d,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:a.jsx(d,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:a.jsx(d,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})}]},ee={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:a.jsx(d,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:a.jsx(d,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:a.jsx(d,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:a.jsx(m,{})}]},{useArgs:ae}=__STORYBOOK_MODULE_PREVIEW_API__,te={title:"Components/Navigation/Tabs",component:I,render:function(e){const[,t]=ae();function o(n){e.onChange(n),t({activeItemId:n})}return a.jsxs(a.Fragment,{children:[a.jsx(I,{...e,onChange:o}),a.jsx(q,{activeItemId:e.activeItemId,items:e.items})]})},argTypes:{activeItemId:{type:"string"}},args:{onChange:B()}},v={args:{...Q}},T={args:{...Z}},x={args:{...ee}};var w,j,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(R=(j=v.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var L,S,C;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(C=(S=T.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,D,A;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(A=(D=x.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const oe=["Basic","Disabled","WithIcon"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:v,Disabled:T,WithIcon:x,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{v as B,T as D,be as T,x as W};
