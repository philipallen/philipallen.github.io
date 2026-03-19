import{j as e}from"./jsx-runtime-Blucd9Qg.js";import{$ as g,a as f,h as m,f as b}from"./Dialog-DbzGPUs_.js";import{u as n,l as c,d as r}from"./index-C1QKVHyt.js";import{b as x}from"./index-B_KGh3jf.js";import{$ as v}from"./Button-T8IefSzn.js";import{C,D as y,a as B,A as T}from"./InlineTooltipIconButton-CWSg2rTo.js";import{u as k}from"./OverlayContext-BmgfW47V.js";import{T as j}from"./Typography-BK_ZjFCe.js";const w=r(g)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return c`
      z-index: ${o.zIndex} !important;
    `}}
`,E=r(f)`
  outline: none;
`,P=r(C)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return c`
      padding-right: ${o.padding.right.large};
    `}}
`,i=r(v)`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return c`
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
`,D=r.div`
  ${()=>{const{tokens:t}=n(),{tooltip:o}=t;return c`
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
`;function s({children:t}){return t}s.Trigger=m;s.Content=function(o){const{popoverProps:d,maxWidth:p,children:u,testID:$="tooltip-popover"}=o,{tokens:h}=n(),{tooltip:l}=h,{portalElement:a}=k();return e.jsx(b,{getContainer:a&&(()=>a),children:e.jsxs(w,{offset:B,placement:y,...d,"data-testid":$,children:[e.jsx(T,{}),e.jsx(E,{children:e.jsxs(P,{$maxWidth:p,children:[e.jsx(j,{color:l.color,variant:l.typography.variant,fontFamily:l.typography.fontFamily,children:u}),e.jsx(i,{slot:"close","aria-label":"Close tooltip",children:e.jsx(D,{children:e.jsx(x,{})})})]})})]})})};s.displayName="TooltipPopover";s.Content.displayName="TooltipPopover.Content";s.Trigger.displayName="TooltipPopover.Trigger";export{s as T};
