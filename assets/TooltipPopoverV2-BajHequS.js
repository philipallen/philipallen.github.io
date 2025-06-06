import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{b as g,c as h,g as f,a as b}from"./Dialog-D7L8ikGJ.js";import{a as n,u as s,b as c}from"./index-COZsQx0K.js";import{C as m}from"./index-Cng6hRot.js";import{$ as x}from"./Button-DPtumZN7.js";import{C as v,D as B,a as C,A as y}from"./InlineTooltipIconButtonV2-Crl1YSz6.js";import{u as k}from"./OverlayContext-DE6V0lcf.js";import{T as j}from"./Typography-cxmeyP_c.js";const T=n(g)`
  ${()=>{const{tokens:t}=s(),{tooltip:o}=t;return c`
      z-index: ${o.zIndex} !important;
    `}}
`,w=n(h)`
  outline: none;
`,E=n(v)`
  ${()=>{const{tokens:t}=s(),{tooltip:o}=t;return c`
      padding-right: ${o.padding.right.large};
    `}}
`,D=n(x)`
  ${()=>{const{tokens:t}=s(),{tooltip:o}=t;return c`
      all: unset;
      position: absolute;
      top: 0;
      right: 0;
      display: grid;
      place-items: center;
      width: ${o.closeButton.width};
      height: ${o.closeButton.height};
      cursor: pointer;

      svg {
        display: block;
        width: ${o.closeButton.icon.width};
        height: ${o.closeButton.icon.height};
        color: ${o.closeButton.icon.color.base};
        background: ${o.closeButton.icon.backgroundColor.base};
        border-radius: ${o.closeButton.icon.radius};
      }

      &[data-hovered] {
        svg {
          color: ${o.closeButton.icon.color.hover};
          background: ${o.closeButton.icon.backgroundColor.hover};
        }
      }

      &[data-pressed] {
        svg {
          color: ${o.closeButton.icon.color.active};
          background: ${o.closeButton.icon.backgroundColor.active};
        }
      }

      &[data-focus-visible] {
        svg {
          outline-width: ${o.closeButton.icon.focusRing.width};
          outline-style: ${o.closeButton.icon.focusRing.style};
          outline-color: ${o.closeButton.icon.focusRing.color};
        }
      }
    `}}
`;function a({children:t}){return t}a.Trigger=f;a.Content=function(o){const{popoverProps:l,maxWidth:d,children:u,testID:p="tooltip-popover"}=o,{tokens:$}=s(),{tooltip:r}=$,{portalElement:i}=k();return e.jsx(b,{getContainer:i&&(()=>i),children:e.jsxs(T,{offset:B,placement:C,...l,"data-testid":p,children:[e.jsx(y,{}),e.jsx(w,{children:e.jsxs(E,{$maxWidth:d,children:[e.jsx(j,{color:r.color,variant:r.typography.variant,fontFamily:r.typography.fontFamily,children:u}),e.jsx(D,{slot:"close","aria-label":"Close tooltip",children:e.jsx(m,{})})]})})]})})};export{a as T};
