import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{b as f,c as g,g as b,a as m}from"./Dialog-CLGWj2OB.js";import{a as n,u as r,b as c}from"./index-BVzVw2jm.js";import{C as x}from"./index-DrIl6pf4.js";import{$ as C}from"./Button-DPtumZN7.js";import{C as B,D as v,a as k,A as y}from"./InlineTooltipIconButtonV2-iU80A_PU.js";import{u as j}from"./OverlayContext-DE6V0lcf.js";import{T}from"./Typography-DlSr2KWZ.js";const w=n(f)`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      z-index: ${o.zIndex} !important;
    `}}
`,E=n(g)`
  outline: none;
`,D=n(B)`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      padding-right: ${o.padding.right.large};
    `}}
`,s=n(C)`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      all: unset;
      position: absolute;
      top: 0;
      right: 0;
      display: grid;
      place-items: center;
      width: ${o.closeButton.width};
      height: ${o.closeButton.height};
      cursor: pointer;
    `}}
`,F=n.div`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      width: ${o.closeButton.icon.width};
      height: ${o.closeButton.icon.height};
      color: ${o.closeButton.icon.color.base};
      background: ${o.closeButton.icon.backgroundColor.base};
      border-radius: ${o.closeButton.icon.radius};

      ${s}[data-hovered] && {
        color: ${o.closeButton.icon.color.hover};
        background: ${o.closeButton.icon.backgroundColor.hover};
      }

      ${s}[data-pressed] && {
        color: ${o.closeButton.icon.color.active};
        background: ${o.closeButton.icon.backgroundColor.active};
      }

      ${s}[data-focus-visible] && {
        outline-width: ${o.closeButton.icon.focusRing.width};
        outline-style: ${o.closeButton.icon.focusRing.style};
        outline-color: ${o.closeButton.icon.focusRing.color};
      }
    `}}
`;function l({children:t}){return t}l.Trigger=b;l.Content=function(o){const{popoverProps:d,maxWidth:u,children:p,testID:$="tooltip-popover"}=o,{tokens:h}=r(),{tooltip:i}=h,{portalElement:a}=j();return e.jsx(m,{getContainer:a&&(()=>a),children:e.jsxs(w,{offset:v,placement:k,...d,"data-testid":$,children:[e.jsx(y,{}),e.jsx(E,{children:e.jsxs(D,{$maxWidth:u,children:[e.jsx(T,{color:i.color,variant:i.typography.variant,fontFamily:i.typography.fontFamily,children:p}),e.jsx(s,{slot:"close","aria-label":"Close tooltip",children:e.jsx(F,{children:e.jsx(x,{})})})]})})]})})};export{l as T};
