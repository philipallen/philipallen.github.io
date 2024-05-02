import{j as e}from"./jsx-runtime-6eef64cc.js";import{a as E}from"./index-583b5bb5.js";import{r as k}from"./index-c013ead5.js";import{a as b,u,b as i}from"./index-2b4c4340.js";import{T as c}from"./Typography-2ed3318f.js";import{$ as z}from"./import-013e5c49.js";import{e as $}from"./index-b1e3628a.js";const F=b.div`
  display: inline-grid;
  grid-auto-flow: column;
  font-size: 0;
`,K=b.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,M=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:a}=r;return i`
      display: none;
      border-top-left-radius: ${a.tab.focusRing.radius.topLeft};
      border-top-right-radius: ${a.tab.focusRing.radius.topRight};
      border-bottom-left-radius: ${a.tab.focusRing.radius.bottomLeft};
      border-bottom-right-radius: ${a.tab.focusRing.radius.bottomRight};

      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      label:has(button:focus-visible) && {
        display: block;
        outline-width: ${a.tab.focusRing.width};
        outline-style: ${a.tab.focusRing.style};
        outline-color: ${a.tab.focusRing.color};
        outline-offset: ${a.tab.focusRing.offset};
      }
    `}}
`,N=b.div`
  ${({$withIcon:r,$isActive:a})=>{const{tokens:t}=u(),{tabs:o}=t;return[i`
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
      `,r&&i`
          padding-left: ${o.tab.padding.left.withIcon};
          padding-right: ${o.tab.padding.right.withIcon};
        `,a&&i`
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
`,U=b.div`
  ${({$isActive:r})=>{const{tokens:a}=u(),{tabs:t}=a;return[i`
        color: ${t.tab.label.color.base};

        label:hover && {
          color: ${t.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.tab.label.color.disabled};
        }
      `,r&&i`
          color: ${t.tab.label.color.active};

          label:hover && {
            color: ${t.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.tab.label.color.disabled};
          }
        `]}}
`,V=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:a}=r;return i`
      color: ${a.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${a.tab.secondaryLabel.color.disabled};
      }
    `}}
`,H=b.div`
  ${({$isActive:r})=>{const{tokens:a}=u(),{tabs:t}=a;return[i`
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
      `,r&&i`
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
`,Y=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:a}=r;return i`
      width: ${a.tab.separator.width};
      background-color: ${a.tab.separator.color};
      margin-top: ${a.tab.separator.marginTop};
    `}}
`;function O(r){return`${r}-panel`}function q(r,a,t){let o=t;const n=a.filter(d=>!d.isDisabled),l=n[0],g=n[n.length-1],p=n.find(d=>d.id===t);if(!p)return o;const f=n.indexOf(p);switch(r.key){case"ArrowLeft":{const d=n[f-1];o=d?d.id:g?g.id:t;break}case"ArrowRight":{const d=n[f+1];o=d?d.id:l?l.id:t;break}case"Home":{o=l?l.id:t;break}case"End":{o=g?g.id:t;break}}return o}function j(r){const{items:a,activeItemId:t,onChange:o,testID:n="tabs",...l}=r,{tokens:g}=u(),{tabs:p}=g,f=k.useRef(new Map);function d(s){const{id:h}=s.currentTarget;h!==t&&o(h)}function W(s){var m;const h=q(s,a,t);(m=f.current.get(h))==null||m.focus(),o(h)}return e.jsx(F,{...l,role:"tablist","data-testid":n,children:a.map((s,h)=>{const m=!!s.icon,v=s.id===t,B=h===a.length-1;return e.jsxs(k.Fragment,{children:[e.jsxs(K,{"data-testid":`${n}-tab`,children:[e.jsx(z,{children:e.jsx("button",{ref:P=>f.current.set(s.id,P),type:"button",role:"tab",id:s.id,onClick:d,onKeyDown:W,disabled:s.isDisabled,tabIndex:v?void 0:-1,"aria-label":s.label,"aria-selected":v,"aria-controls":O(s.id)})}),e.jsxs(N,{$withIcon:m,$isActive:v,children:[e.jsxs("div",{children:[e.jsx(U,{$isActive:v,children:e.jsx(c,{component:"span",fontFamily:p.tab.label.fontFamily,variant:p.tab.label.typographyVariant,color:"inherit",children:s.label})}),s.secondaryLabel&&e.jsx(V,{children:e.jsx(c,{component:"span",variant:p.tab.secondaryLabel.typographyVariant,color:"inherit",children:s.secondaryLabel})})]}),m&&e.jsx(H,{$isActive:v,children:s.icon})]}),e.jsx(M,{})]}),!B&&e.jsx(Y,{})]},s.id)})})}const G=b.div`
  ${()=>{const{tokens:r}=u(),{tabs:a}=r;return i`
      border-top-width: ${a.panel.strokeTop.width};
      border-top-style: ${a.panel.strokeTop.style};
      border-top-color: ${a.panel.strokeTop.color};
    `}}
`,J=b.div`
  ${({$withIcon:r,$isActive:a,$withPadding:t})=>{const{tokens:o}=u(),{tabs:n}=o;return[i`
        display: ${a?"block":"none"};
        background: ${n.panel.backgroundColor};

        &:focus-visible {
          position: relative;
          z-index: 1;
          outline-width: ${n.panel.focusRing.width};
          outline-style: ${n.panel.focusRing.style};
          outline-color: ${n.panel.focusRing.color};
        }
      `,t&&i`
          padding-top: ${n.panel.padding.top};
          padding-bottom: ${n.panel.padding.bottom};
          padding-left: ${n.panel.padding.left.base};
          padding-right: ${n.panel.padding.right.base};
        `,t&&r&&i`
          padding-left: ${n.panel.padding.left.withIcon};
          padding-right: ${n.panel.padding.right.withIcon};
        `]}}
`;function Q(r){const{items:a,activeItemId:t,withPadding:o=!0,testID:n="tab-panels"}=r;return e.jsx(G,{"data-testid":n,children:a.map(l=>{const g=!!l.icon,p=l.id===t;return e.jsx(J,{role:"tabpanel",id:O(l.id),tabIndex:p?0:-1,$withIcon:g,$isActive:p,$withPadding:o,"aria-labelledby":l.id,children:l.panel},l.id)})})}const X={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:e.jsx(c,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:e.jsx(c,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:e.jsx(c,{children:"Tab panel 03"})}]},Z={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:e.jsx(c,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:e.jsx(c,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:e.jsx(c,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:e.jsx($,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:e.jsx(c,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})}]},aa={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:e.jsx(c,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:e.jsx(c,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:e.jsx(c,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})}]},{useArgs:ea}=__STORYBOOK_MODULE_CLIENT_API__,ta={title:"Navigation/Tabs",component:j,render:function(a){const[,t]=ea();function o(n){t({activeItemId:n}),E("onChange")(n)}return e.jsxs(e.Fragment,{children:[e.jsx(j,{...a,onChange:o}),e.jsx(Q,{activeItemId:a.activeItemId,items:a.items})]})},argTypes:{activeItemId:{type:"string"}}},T={args:{...X}},x={args:{...Z}},y={args:{...aa}};var I,w,R;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(R=(w=T.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,C,S;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(S=(C=x.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,D,_;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(_=(D=y.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const oa=["Basic","Disabled","WithIcon"],ba=Object.freeze(Object.defineProperty({__proto__:null,Basic:T,Disabled:x,WithIcon:y,__namedExportsOrder:oa,default:ta},Symbol.toStringTag,{value:"Module"}));export{T as B,x as D,ba as T,y as W};
