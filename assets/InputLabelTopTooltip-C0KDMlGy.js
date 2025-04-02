import{j as s}from"./jsx-runtime-BkBIjjFT.js";import{r as u}from"./index-KmaxkdDD.js";import{u as g,T as y,a as m,b as I}from"./TooltipTrigger-DTxXleLQ.js";import{a as $,T}from"./index-VIbBARS4.js";import{a as d,u as p,b as a,p as b}from"./index-DT8u_GqS.js";import{$ as x}from"./Button-lwQFUGeW.js";import{I as v,d as B}from"./index-qhhwF6MA.js";const C=d.div`
  ${({$variant:n,$typographyVariant:t})=>{const{tokens:o}=p(),{iconButton:r,typography:e,spacing:i}=o;return a`
      width: ${r.inner.icon.width[n]};
      height: ${b(e.lineHeight[t])};
      margin-left: ${i.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,c=d(x)`
  ${({$isControlled:n,$variant:t})=>{const{tokens:o}=p(),{iconButton:r}=o;return[a`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${r.padding[t]};
        margin: -${r.padding[t]};
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
  ${({$isControlled:n,$isOpen:t,$variant:o})=>{const{tokens:r}=p(),{iconButton:e,tooltipIconButton:i}=r;return[a`
        width: ${e.inner.icon.width[o]};
        height: ${e.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${i.icon.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.icon.secondaryColor.base};
        }
      `,!n&&a`
          ${c}:hover &&,
          ${c}:focus-visible && {
            display: none;
          }
        `,!t&&a`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${i.icon.primaryColor.hover};
            }
          }
        `,t&&a`
          display: none;
        `]}}
`,w=d(B)`
  ${({$isControlled:n,$isOpen:t,$variant:o})=>{const{tokens:r}=p(),{iconButton:e,tooltipIconButton:i}=r;return[a`
        display: none;
        width: ${e.inner.icon.width[o]};
        height: ${e.inner.icon.height[o]};

        & [data-primary-color] {
          color: ${i.iconFilled.primaryColor.base};
        }

        & [data-secondary-color] {
          color: ${i.iconFilled.secondaryColor.base};
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
              color: ${i.iconFilled.primaryColor.hover};
            }
          }
        `]}}
`,h=u.forwardRef((n,t)=>{const{variant:o=$.DEFAULT_VARIANT,testID:r="tooltip-icon-button",...e}=n,{open:i,isControlled:l}=g();return s.jsx(c,{...e,ref:t,"aria-expanded":l?i:void 0,$isControlled:l,$variant:o,"data-testid":r,children:s.jsxs(j,{$variant:o,children:[s.jsx(k,{$isControlled:l,$isOpen:i,$variant:o}),s.jsx(w,{$isControlled:l,$isOpen:i,$variant:o})]})})});h.displayName="TooltipIconButtonV2";const f=u.forwardRef((n,t)=>{const{variant:o=$.DEFAULT_VARIANT,typographyVariant:r=T.DEFAULT_VARIANT,...e}=n;return s.jsx(C,{$variant:o,$typographyVariant:r,children:s.jsx(h,{ref:t,variant:o,...e})})});f.displayName="InlineTooltipIconButtonV2";function E(n){const{iconButtonProps:t,otherIconButtonProps:o,contentProps:r}=n,[e,i]=u.useState(!1);function l(){i(!e)}return s.jsxs(y,{open:e,onOpenChange:i,children:[s.jsx(m,{children:s.jsx(f,{slot:null,...t,...o,onPress:l})}),s.jsx(I,{...r})]})}export{E as I,h as T,f as a};
