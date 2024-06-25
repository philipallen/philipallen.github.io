import{j as i}from"./jsx-runtime-6eef64cc.js";import{r as m}from"./index-c013ead5.js";import{a as b,u as p,b as s}from"./index-7d8df789.js";import{T as v}from"./Typography-7855a6b7.js";import{$ as x}from"./VisuallyHidden-02ab3b0d.js";const T=b.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,R=b.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,j=b.div`
  ${()=>{const{tokens:a}=p(),{tabs:t}=a;return s`
      display: none;
      border-top-left-radius: ${t.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${t.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${t.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${t.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${t.tab.focusRing.width};
        outline-style: ${t.tab.focusRing.style};
        outline-color: ${t.tab.focusRing.color};
        outline-offset: ${t.tab.focusRing.offset};
      }
    `}}
`,L=b.div`
  ${({$withIcon:a,$isActive:t})=>{const{tokens:e}=p(),{tabs:o}=e;return[s`
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
      `,a&&s`
          padding-left: ${o.tab.padding.left.withIcon};
          padding-right: ${o.tab.padding.right.withIcon};
        `,t&&s`
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
`,C=b.div`
  ${({$isActive:a})=>{const{tokens:t}=p(),{tabs:e}=t;return[s`
        color: ${e.tab.label.color.base};

        label:hover && {
          color: ${e.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${e.tab.label.color.disabled};
        }
      `,a&&s`
          color: ${e.tab.label.color.active};

          label:hover && {
            color: ${e.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${e.tab.label.color.disabled};
          }
        `]}}
`,A=b.div`
  ${()=>{const{tokens:a}=p(),{tabs:t}=a;return s`
      color: ${t.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${t.tab.secondaryLabel.color.disabled};
      }
    `}}
`,q=b.div`
  ${({$isActive:a})=>{const{tokens:t}=p(),{tabs:e}=t;return[s`
        display: grid;
        place-items: center;

        svg {
          width: ${e.tab.icon.width};
          height: ${e.tab.icon.height};
          color: ${e.tab.icon.color.base};
        }

        label:hover && {
          svg {
            color: ${e.tab.icon.color.hover};
          }
        }

        label:has(button:disabled) && {
          svg {
            color: ${e.tab.icon.color.disabled};
          }
        }
      `,a&&s`
          svg {
            color: ${e.tab.icon.color.active};
          }

          label:hover && {
            svg {
              color: ${e.tab.icon.color.active};
            }
          }

          label:has(button:disabled) && {
            svg {
              color: ${e.tab.icon.color.disabled};
            }
          }
        `]}}
`,D=b.div`
  ${()=>{const{tokens:a}=p(),{tabs:t}=a;return s`
      width: ${t.tab.separator.width};
      background-color: ${t.tab.separator.color};
      margin-top: ${t.tab.separator.marginTop};
    `}}
`;function y(a){return`${a}-panel`}function E(a,t,e){let o=e;const n=t.filter(d=>!d.isDisabled),l=n[0],u=n[n.length-1],c=n.find(d=>d.id===e);if(!c)return o;const h=n.indexOf(c);switch(a.key){case"ArrowLeft":{const d=n[h-1];o=d?d.id:u?u.id:e;break}case"ArrowRight":{const d=n[h+1];o=d?d.id:l?l.id:e;break}case"Home":{o=l?l.id:e;break}case"End":{o=u?u.id:e;break}}return o}function P(a){const{items:t,activeItemId:e,onChange:o,testID:n="tabs",...l}=a,{tokens:u}=p(),{tabs:c}=u,h=m.useRef(new Map);function d(r){const{id:g}=r.currentTarget;g!==e&&o(g)}function k(r){var $;const g=E(r,t,e);($=h.current.get(g))==null||$.focus(),o(g)}return i.jsx(T,{...l,role:"tablist","data-testid":n,children:t.map((r,g)=>{const $=!!r.icon,f=r.id===e,w=g===t.length-1;return i.jsxs(m.Fragment,{children:[i.jsxs(R,{"data-testid":`${n}-tab`,children:[i.jsx(x,{children:i.jsx("button",{ref:I=>h.current.set(r.id,I),type:"button",role:"tab",id:r.id,onClick:d,onKeyDown:k,disabled:r.isDisabled,tabIndex:f?void 0:-1,"aria-label":r.label,"aria-selected":f,"aria-controls":y(r.id)})}),i.jsxs(L,{$withIcon:$,$isActive:f,children:[i.jsxs("div",{children:[i.jsx(C,{$isActive:f,children:i.jsx(v,{component:"span",variant:c.tab.label.typography.variant,fontFamily:c.tab.label.typography.fontFamily,color:"inherit",children:r.label})}),r.secondaryLabel&&i.jsx(A,{children:i.jsx(v,{component:"span",variant:c.tab.secondaryLabel.typography.variant,fontFamily:c.tab.secondaryLabel.typography.fontFamily,color:"inherit",children:r.secondaryLabel})})]}),$&&i.jsx(q,{$isActive:f,children:r.icon})]}),i.jsx(j,{})]}),!w&&i.jsx(D,{})]},r.id)})})}P.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  panel: JSX.Element;
  icon?: JSX.Element;
  secondaryLabel?: string;
  isDisabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"panel",value:{name:"JSX.Element",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!1}},{key:"secondaryLabel",value:{name:"string",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}}],raw:"TabsItem[]"},description:""},activeItemId:{required:!0,tsType:{name:"string",raw:'TabsItem["id"]'},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(activeItemId: TabsItem["id"]) => void',signature:{arguments:[{type:{name:"string",raw:'TabsItem["id"]'},name:"activeItemId"}],return:{name:"void"}}},description:""}}};const F=b.div`
  ${()=>{const{tokens:a}=p(),{tabs:t}=a;return s`
      border-top-width: ${t.panel.strokeTop.width};
      border-top-style: ${t.panel.strokeTop.style};
      border-top-color: ${t.panel.strokeTop.color};
    `}}
`,S=b.div`
  ${({$withIcon:a,$isActive:t,$withPadding:e})=>{const{tokens:o}=p(),{tabs:n}=o;return[s`
        display: ${t?"block":"none"};
        background: ${n.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${n.panel.focusRing.width};
          outline-style: ${n.panel.focusRing.style};
          outline-color: ${n.panel.focusRing.color};
        }
      `,e&&s`
          padding-top: ${n.panel.padding.top};
          padding-bottom: ${n.panel.padding.bottom};
          padding-left: ${n.panel.padding.left.base};
          padding-right: ${n.panel.padding.right.base};
        `,e&&a&&s`
          padding-left: ${n.panel.padding.left.withIcon};
          padding-right: ${n.panel.padding.right.withIcon};
        `]}}
`;function z(a){const{items:t,activeItemId:e,withPadding:o=!0,testID:n="tab-panels"}=a;return i.jsx(F,{"data-testid":n,children:t.map(l=>{const u=!!l.icon,c=l.id===e;return i.jsx(S,{role:"tabpanel",id:y(l.id),tabIndex:c?0:-1,$withIcon:u,$isActive:c,$withPadding:o,"aria-labelledby":l.id,children:l.panel},l.id)})})}z.__docgenInfo={description:"",methods:[],displayName:"TabPanels",props:{withPadding:{required:!1,tsType:{name:"boolean"},description:""}}};export{P as T,z as a};
