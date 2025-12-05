import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{c as h,e as f,a as m,b}from"./Dialog-CYmhaE2o.js";import{a as n,u as r,b as c}from"./index-Dwsyfx_g.js";import{C as x}from"./index-BKbNTvCu.js";import{$ as C}from"./Button-DHrRVfeM.js";import{C as v,D as y,a as B,A as T}from"./InlineTooltipIconButton-D5bVAli8.js";import{u as k}from"./OverlayContext-DE6V0lcf.js";import{T as j}from"./Typography-Ck2BLUk-.js";const w=n(h)`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      z-index: ${o.zIndex} !important;
    `}}
`,E=n(f)`
  outline: none;
`,P=n(v)`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      padding-right: ${o.padding.right.large};
    `}}
`,i=n(C)`
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
`,D=n.div`
  ${()=>{const{tokens:t}=r(),{tooltip:o}=t;return c`
      width: ${o.closeButton.icon.width};
      height: ${o.closeButton.icon.height};
      color: ${o.closeButton.icon.color.base};
      background: ${o.closeButton.icon.backgroundColor.base};
      border-radius: ${o.closeButton.icon.radius};

      ${i}[data-hovered] && {
        color: ${o.closeButton.icon.color.hover};
        background: ${o.closeButton.icon.backgroundColor.hover};
      }

      ${i}[data-pressed] && {
        color: ${o.closeButton.icon.color.active};
        background: ${o.closeButton.icon.backgroundColor.active};
      }

      ${i}[data-focus-visible] && {
        outline-width: ${o.closeButton.icon.focusRing.width};
        outline-style: ${o.closeButton.icon.focusRing.style};
        outline-color: ${o.closeButton.icon.focusRing.color};
      }
    `}}
`;function s({children:t}){return t}s.Trigger=m;s.Content=function(o){const{popoverProps:p,maxWidth:d,children:u,testID:$="tooltip-popover"}=o,{tokens:g}=r(),{tooltip:a}=g,{portalElement:l}=k();return e.jsx(b,{getContainer:l&&(()=>l),children:e.jsxs(w,{offset:y,placement:B,...p,"data-testid":$,children:[e.jsx(T,{}),e.jsx(E,{children:e.jsxs(P,{$maxWidth:d,children:[e.jsx(j,{color:a.color,variant:a.typography.variant,fontFamily:a.typography.fontFamily,children:u}),e.jsx(i,{slot:"close","aria-label":"Close tooltip",children:e.jsx(D,{children:e.jsx(x,{})})})]})})]})})};s.displayName="TooltipPopover";s.Content.displayName="TooltipPopover.Content";s.Trigger.displayName="TooltipPopover.Trigger";export{s as T};
