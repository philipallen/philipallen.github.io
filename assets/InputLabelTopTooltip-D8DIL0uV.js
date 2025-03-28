import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{r as u}from"./index-KmaxkdDD.js";import{u as g,T as y,a as m,b as I}from"./TooltipTrigger-9BknpwOm.js";import{a as $,T}from"./index-DYe-GrfV.js";import{a as d,u as p,b as a,p as b}from"./index-ByEiyUmp.js";import{$ as x}from"./Button-D3muM46r.js";import{I as v,d as B}from"./index-BwV_lsCf.js";const C=d.div`
  ${({$variant:n,$typographyVariant:t})=>{const{tokens:o}=p(),{iconButton:i,typography:e,spacing:r}=o;return a`
      width: ${i.inner.icon.width[n]};
      height: ${b(e.lineHeight[t])};
      margin-left: ${r.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,c=d(x)`
  ${({$isControlled:n,$variant:t})=>{const{tokens:o}=p(),{iconButton:i}=o;return[a`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${i.padding[t]};
        margin: -${i.padding[t]};
      `,n&&a`
          &:not([data-disabled]) {
            cursor: pointer;
          }
        `]}}
`,j=d.div`
  ${({$variant:n})=>{const{tokens:t}=p(),{iconButton:o}=t;return a`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding[n]};
      border-radius: ${o.inner.radius[n]};
      background: ${o.inner.backgroundColor[n].base};

      ${c}[data-focus-visible] && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,k=d(v)`
  ${({$isControlled:n,$isOpen:t,$variant:o})=>{const{tokens:i}=p(),{iconButton:e,tooltipIconButton:r}=i;return[a`
        width: ${e.inner.icon.width[o]};
        height: ${e.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.icon.secondaryColor.base};
        }
      `,!n&&a`
          ${c}:hover &&,
          ${c}:focus-visible && {
            display: none;
          }
        `,!t&&a`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${r.icon.primaryColor.hover};
            }
          }
        `,t&&a`
          display: none;
        `]}}
`,w=d(B)`
  ${({$isControlled:n,$isOpen:t,$variant:o})=>{const{tokens:i}=p(),{iconButton:e,tooltipIconButton:r}=i;return[a`
        display: none;
        width: ${e.inner.icon.width[o]};
        height: ${e.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${r.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${r.iconFilled.secondaryColor.base};
        }
      `,!n&&a`
          ${c}[data-hovered] &&,
          ${c}[data-focus-visible] && {
            display: block;
          }
        `,t&&a`
          display: block;
        `,n&&t&&a`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${r.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,h=u.forwardRef((n,t)=>{const{variant:o=$.DEFAULT_VARIANT,testID:i="tooltip-icon-button",...e}=n,{open:r,isControlled:l}=g();return s.jsx(c,{...e,ref:t,"aria-expanded":r?"true":void 0,$isControlled:l,$variant:o,"data-testid":i,children:s.jsxs(j,{$variant:o,children:[s.jsx(k,{$isControlled:l,$isOpen:r,$variant:o}),s.jsx(w,{$isControlled:l,$isOpen:r,$variant:o})]})})});h.displayName="TooltipIconButtonV2";const f=u.forwardRef((n,t)=>{const{variant:o=$.DEFAULT_VARIANT,typographyVariant:i=T.DEFAULT_VARIANT,...e}=n;return s.jsx(C,{$variant:o,$typographyVariant:i,children:s.jsx(h,{ref:t,variant:o,...e})})});f.displayName="InlineTooltipIconButtonV2";function E(n){const{iconButtonProps:t,otherIconButtonProps:o,contentProps:i}=n,[e,r]=u.useState(!1);function l(){r(!e)}return s.jsxs(y,{open:e,onOpenChange:r,children:[s.jsx(m,{children:s.jsx(f,{...t,...o,onPress:l})}),s.jsx(I,{...i})]})}export{E as I,h as T,f as a};
