import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{c as H,d as I,o as O,f as P,s as D,F}from"./floating-ui.react-DD7SKzjW.js";import{a as i,u,b as r}from"./index-BVzVw2jm.js";import{e as M}from"./index-Do3d1oBb.js";import{r as z}from"./index-CcKhGcwW.js";import{r as W}from"./index-uaANFLeC.js";import{u as A}from"./OverlayContext-DE6V0lcf.js";import{S as T}from"./ScrollShadowContainer-B53wETGe.js";const V=i.div`
  ${()=>{const{tokens:e}=u(),{select:o}=e;return[r`
        &:has(:not([disabled]):focus-visible) {
          border-radius: ${o.button.focusRing.radius};
          outline-width: ${o.button.focusRing.width};
          outline-style: ${o.button.focusRing.style};
          outline-color: ${o.button.focusRing.color};
          outline-offset: ${o.button.focusRing.offset};
        }
      `]}}
`,U=i.div`
  ${({$isOpen:e,$hasError:o,$isDisabled:n})=>{const{tokens:l}=u(),{select:t}=l;return[r`
        display: grid;
        min-height: ${t.button.minHeight};
        background: ${t.button.backgroundColor.base};
        padding-top: ${t.button.padding.top};
        padding-left: ${t.button.padding.left};
        padding-right: ${t.button.padding.right};
        padding-bottom: ${t.button.padding.bottom};
        border-radius: ${t.button.stroke.radius};
        outline-width: ${t.button.stroke.width.base};
        outline-style: ${t.button.stroke.style};
        outline-color: ${t.button.stroke.color.base};
        outline-offset: ${t.button.stroke.offset.base};
        user-select: none;
        cursor: pointer;

        svg {
          color: ${t.button.icon.color.base};
        }

        &:hover,
        &:focus {
          outline-width: ${t.button.stroke.width.hover};
          outline-color: ${t.button.stroke.color.hover};
          outline-offset: ${t.button.stroke.offset.hover};

          svg {
            color: ${t.button.icon.color.hover};
          }
        }
      `,o&&r`
          & {
            outline-width: ${t.button.stroke.width.error};
            outline-color: ${t.button.stroke.color.error};
            outline-offset: ${t.button.stroke.offset.error};
          }
        `,e&&r`
          &,
          &:hover,
          &:focus {
            outline-width: ${t.button.stroke.width.active};
            outline-color: ${t.button.stroke.color.active};
            outline-offset: ${t.button.stroke.offset.active};

            svg {
              color: ${t.button.icon.color.active};
            }
          }
        `,n&&r`
          cursor: not-allowed;

          &,
          &:hover,
          &:focus {
            outline-width: ${t.button.stroke.width.disabled};
            outline-color: ${t.button.stroke.color.disabled};
            outline-offset: ${t.button.stroke.offset.disabled};

            svg {
              color: ${t.button.icon.color.disabled};
            }
          }
        `]}}
`,_=i.div`
  ${()=>{const{tokens:e}=u(),{select:o}=e;return r`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: ${o.button.gap};
    `}}
`,q=i.div`
  ${()=>{const{tokens:e}=u(),{select:o}=e;return r`
      display: grid;
      place-items: center;

      svg {
        width: ${o.button.icon.width};
        height: ${o.button.icon.height};
      }
    `}}
`,m=i(M)`
  rotate: 0deg;
`,G=i(m)`
  rotate: 180deg;
`,J=i.div`
  ${({$isOpen:e})=>{const{tokens:o}=u(),{select:n}=o;return r`
      display: ${e?"grid":"none"};
      width: 0;
      overflow: hidden;
      border-radius: ${n.menu.radius};
      border-width: ${n.menu.stroke.width};
      border-style: ${n.menu.stroke.style};
      border-color: ${n.menu.stroke.color};
      box-shadow: 0px 2px 2px ${n.menu.shadow.outer.color};
      z-index: ${n.menu.zIndex};
    `}}
`,K=i.ul`
  ${()=>{const{tokens:e}=u(),{select:o}=e;return r`
      all: unset;
      display: grid;
      gap: ${o.menu.separator.width};
      background: ${o.menu.separator.color};
    `}}
`;function N(e){const{offsetValue:o}=e,[n,l]=z.useState(),{refs:t,floatingStyles:a}=H({placement:"bottom",whileElementsMounted:I,middleware:[O(o),P({padding:16}),D({padding:16,apply({rects:d,elements:c,availableHeight:f}){Object.assign(c.floating.style,{minWidth:`${d.reference.width}px`}),W.flushSync(()=>l(f))}})]});return{refs:t,floatingStyles:a,availableListHeight:n}}function nt(e){const{getToggleButtonProps:o,getMenuProps:n,isOpen:l,items:t,toggleButtonProps:a,renderButtonContent:d,renderListItem:c,hasError:f,isDisabled:p,maxListHeight:b,alertAssociationProps:k,testID:v="select"}=e,{tokens:x}=u(),{select:w}=x,{refs:h,floatingStyles:y,availableListHeight:g}=N({offsetValue:parseInt(w.gap,10)}),j={ref:h.setFloating},B={suppressRefError:!0},{ref:L,...R}=n(j,B),{portalElement:S}=A();let $=b;return g&&b&&g<b&&($=g),s.jsxs(s.Fragment,{children:[s.jsx(V,{children:s.jsx(U,{...a,...o({ref:h.setReference,disabled:p}),$isOpen:l,$hasError:f,$isDisabled:p,"data-testid":v,...k,children:s.jsxs(_,{children:[d(),s.jsx(q,{children:l?s.jsx(G,{"aria-hidden":"true"}):s.jsx(m,{"aria-hidden":"true"})})]})})}),s.jsx(F,{root:S,children:s.jsx(J,{ref:L,style:y,$isOpen:l,children:s.jsx("div",{style:{maxHeight:$},children:s.jsx(T,{children:s.jsx(K,{...R,children:t.map((C,E)=>c(C,E))})})})})})]})}export{nt as S};
