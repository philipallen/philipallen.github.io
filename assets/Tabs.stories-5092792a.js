import{a as p,u,b as i,j as e}from"./index-144fe590.js";import{a as E}from"./index-583b5bb5.js";import{r as k}from"./index-c013ead5.js";import{T as d}from"./Typography-ad5c06ac.js";import{$ as P}from"./import-9a74973a.js";import{b as $}from"./index-ad927c2b.js";const F=p.div`
  display: inline-grid;
  grid-auto-flow: column;
`,z=p.label`
  position: relative;
  display: grid;
  cursor: pointer;

  &:has(button:disabled) {
    pointer-events: none;
  }
`,K=p.div`
  ${()=>{const{tokens:n}=u(),{tabs:a}=n;return i`
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
`,M=p.div`
  ${({$withIcon:n,$isActive:a})=>{const{tokens:t}=u(),{tabs:o}=t;return[i`
        position: relative;
        z-index: 1;

        display: grid;
        place-items: start;
        grid-template-columns: 1fr;
        grid-auto-flow: column;
        gap: 16px;

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
      `,n&&i`
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
`,N=p.div`
  ${({$isActive:n})=>{const{tokens:a}=u(),{tabs:t}=a;return[i`
        color: ${t.tab.label.color.base};

        label:hover && {
          color: ${t.tab.label.color.hover};
        }

        label:has(button:disabled) && {
          color: ${t.tab.label.color.disabled};
        }
      `,n&&i`
          color: ${t.tab.label.color.active};

          label:hover && {
            color: ${t.tab.label.color.active};
          }

          label:has(button:disabled) && {
            color: ${t.tab.label.color.disabled};
          }
        `]}}
`,U=p.div`
  ${()=>{const{tokens:n}=u(),{tabs:a}=n;return i`
      color: ${a.tab.secondaryLabel.color.base};

      label:has(button:disabled) && {
        color: ${a.tab.secondaryLabel.color.disabled};
      }
    `}}
`,V=p.div`
  ${({$isActive:n})=>{const{tokens:a}=u(),{tabs:t}=a;return[i`
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
      `,n&&i`
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
`,H=p.div`
  ${()=>{const{tokens:n}=u(),{tabs:a}=n;return i`
      width: ${a.tab.separator.width};
      background-color: ${a.tab.separator.color};
      margin-top: ${a.tab.separator.marginTop};
    `}}
`;function O(n){return`${n}-panel`}function Y(n,a,t){let o=t;const r=a.filter(c=>!c.isDisabled),l=r[0],b=r[r.length-1],g=r.find(c=>c.id===t);if(!g)return o;const y=r.indexOf(g);switch(n.key){case"ArrowLeft":{const c=r[y-1];o=c?c.id:b?b.id:t;break}case"ArrowRight":{const c=r[y+1];o=c?c.id:l?l.id:t;break}case"Home":{o=l?l.id:t;break}case"End":{o=b?b.id:t;break}}return o}function j(n){const{items:a,activeItemId:t,onChange:o,testID:r="tabs"}=n,{tokens:l}=u(),{tabs:b}=l,g=k.useRef(new Map);function y(s){const{id:h}=s.currentTarget;h!==t&&o(h)}function c(s){var f;const h=Y(s,a,t);(f=g.current.get(h))==null||f.focus(),o(h)}return e.jsx(F,{role:"tablist","data-testid":r,children:a.map((s,h)=>{const f=!!s.icon,m=s.id===t,W=h===a.length-1;return e.jsxs(k.Fragment,{children:[e.jsxs(z,{"data-testid":`${r}-tab`,children:[e.jsx(P,{children:e.jsx("button",{ref:B=>g.current.set(s.id,B),type:"button",role:"tab",id:s.id,onClick:y,onKeyDown:c,disabled:s.isDisabled,tabIndex:m?void 0:-1,"aria-label":s.label,"aria-selected":m,"aria-controls":O(s.id)})}),e.jsxs(M,{$withIcon:f,$isActive:m,children:[e.jsxs("div",{children:[e.jsx(N,{$isActive:m,children:e.jsx(d,{component:"span",variant:b.tab.label.typographyVariant,fontFamily:b.tab.label.fontFamily,color:"inherit",children:s.label})}),s.secondaryLabel&&e.jsx(U,{children:e.jsx(d,{component:"span",variant:b.tab.secondaryLabel.typographyVariant,color:"inherit",children:s.secondaryLabel})})]}),f&&e.jsx(V,{$isActive:m,children:s.icon})]}),e.jsx(K,{})]}),!W&&e.jsx(H,{})]},s.id)})})}const q=p.div`
  ${()=>{const{tokens:n}=u(),{tabs:a}=n;return i`
      border-top-width: ${a.panel.strokeTop.width};
      border-top-style: ${a.panel.strokeTop.style};
      border-top-color: ${a.panel.strokeTop.color};
    `}}
`,G=p.div`
  ${({$withIcon:n,$isActive:a,$withPadding:t})=>{const{tokens:o}=u(),{tabs:r}=o;return[i`
        display: ${a?"block":"none"};
        background: ${r.panel.backgroundColor};
      `,t&&i`
          padding-top: ${r.panel.padding.top};
          padding-bottom: ${r.panel.padding.bottom};
          padding-left: ${r.panel.padding.left.base};
          padding-right: ${r.panel.padding.right.base};
        `,t&&n&&i`
          padding-left: ${r.panel.padding.left.withIcon};
          padding-right: ${r.panel.padding.right.withIcon};
        `]}}
`;function J(n){const{items:a,activeItemId:t,withPadding:o=!0,testID:r="tab-panels"}=n;return e.jsx(q,{"data-testid":r,children:a.map(l=>{const b=!!l.icon,g=l.id===t;return e.jsx(G,{role:"tabpanel",id:O(l.id),$withIcon:b,$isActive:g,$withPadding:o,"aria-labelledby":l.id,children:l.panel},l.id)})})}const Q={activeItemId:"tab-01",items:[{id:"tab-01",label:"Tab label 01",panel:e.jsx(d,{children:"Tab panel 01"})},{id:"tab-02",label:"Tab label 02",panel:e.jsx(d,{children:"Tab panel 02"})},{id:"tab-03",label:"Tab label 03",panel:e.jsx(d,{children:"Tab panel 03"})}]},X={activeItemId:"tab-disabled-01",items:[{id:"tab-disabled-01",label:"Tab label 01",panel:e.jsx(d,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-disabled-02",label:"Tab label 02",panel:e.jsx(d,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-disabled-03",label:"Tab label 03",panel:e.jsx(d,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:e.jsx($,{}),isDisabled:!0},{id:"tab-disabled-04",label:"Tab label 04",panel:e.jsx(d,{children:"Tab panel 04"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})}]},Z={activeItemId:"tab-with-icon-01",items:[{id:"tab-with-icon-01",label:"Tab label 01",panel:e.jsx(d,{children:"Tab panel 01"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-with-icon-02",label:"Tab label 02",panel:e.jsx(d,{children:"Tab panel 02"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})},{id:"tab-with-icon-03",label:"Tab label 03",panel:e.jsx(d,{children:"Tab panel 03"}),secondaryLabel:"Secondary label",icon:e.jsx($,{})}]},{useArgs:aa}=__STORYBOOK_MODULE_CLIENT_API__,ea={title:"Navigation/Tabs",component:j,render:function(a){const[,t]=aa();function o(r){t({activeItemId:r}),E("onChange")(r)}return e.jsxs(e.Fragment,{children:[e.jsx(j,{...a,onChange:o}),e.jsx(J,{activeItemId:a.activeItemId,items:a.items})]})},argTypes:{activeItemId:{type:"string"}}},v={args:{...Q}},T={args:{...X}},x={args:{...Z}};var I,w,L;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...mockTabs
  }
}`,...(L=(w=v.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var R,C,S;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...mockTabsDisabled
  }
}`,...(S=(C=T.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,D,_;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...mockTabsWithIcon
  }
}`,...(_=(D=x.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ta=["Basic","Disabled","WithIcon"],da=Object.freeze(Object.defineProperty({__proto__:null,Basic:v,Disabled:T,WithIcon:x,__namedExportsOrder:ta,default:ea},Symbol.toStringTag,{value:"Module"}));export{v as B,T as D,da as T,x as W};
