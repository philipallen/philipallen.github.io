import{a as i,u as s,b as r,p as b}from"./index-COZsQx0K.js";import{a as y,$ as u}from"./Tooltip-DVGpamPK.js";import{a as x,b as g,T as I}from"./index-CssHJ6ns.js";import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{d as v,$ as T}from"./Dialog-D7L8ikGJ.js";import{r as l}from"./index-CcKhGcwW.js";import{$ as k}from"./Button-DPtumZN7.js";import{I as C,d as w}from"./index-Cng6hRot.js";const H=i(y)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return r`
      z-index: ${n.zIndex} !important;
    `}}
`,S=i.div`
  ${({$maxWidth:t})=>{const{tokens:n}=s(),{tooltip:o}=n;return r`
      max-width: ${t?`${t}px`:o.maxWidth};
      border-radius: ${o.radius};
      padding-top: ${o.padding.top};
      padding-bottom: ${o.padding.bottom};
      padding-left: ${o.padding.left};
      padding-right: ${o.padding.right.default};
      background: ${o.backgroundColor};
    `}}
`,W=x.DEFAULT_OFFSET,q="top",F=i(v)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return r`
      svg {
        display: block;
        fill: ${n.backgroundColor};
      }

      &[data-placement="top"] svg {
        transform: rotate(0deg);
      }

      &[data-placement="left"] svg {
        transform: rotate(-90deg);
      }

      &[data-placement="right"] svg {
        transform: rotate(90deg);
      }

      &[data-placement="bottom"] svg {
        transform: rotate(180deg);
      }
    `}}
`;function G(){const{tokens:t}=s(),{tooltip:n}=t,o=parseInt(n.arrow.height),e=parseInt(n.arrow.width);return a.jsx(F,{style:{width:e,height:o},children:a.jsx("svg",{width:e,height:o,viewBox:`0 0 ${e} ${o}`,children:a.jsx("path",{d:`M0 0 L${o} ${o} L${e} 0`})})})}const B=i.span`
  ${({$variant:t,$typographyVariant:n})=>{const{tokens:o}=s(),{iconButton:e,typography:d,spacing:$}=o;return r`
      width: ${e.inner.icon.width[t]};
      height: ${b(d.lineHeight[n])};
      margin-left: ${$.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,c=i(k)`
  ${({$tooltipRole:t,$variant:n})=>{const{tokens:o}=s(),{iconButton:e}=o;return[r`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${e.padding[n]};
        margin: -${e.padding[n]};
      `,t==="dialog"&&r`
          &:not([data-disabled]) {
            cursor: pointer;
          }
        `]}}
`,j=i.div`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o}=n;return r`
      display: grid;
      place-items: center;
      padding: ${o.inner.padding[t]};
      border-radius: ${o.inner.radius[t]};
      background: ${o.inner.backgroundColor[t].base};

      ${c}[data-focus-visible] && {
        outline-width: ${o.inner.focusRing.width};
        outline-style: ${o.inner.focusRing.style};
        outline-color: ${o.inner.focusRing.color};
        outline-offset: ${o.inner.focusRing.offset.default};
      }
    `}}
`,f=i(C)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:e}=n;return r`
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${e.icon.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${e.icon.secondaryColor.base};
      }
    `}}
`,A=i(f)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t,o=l.useContext(u),e=(o==null?void 0:o.isOpen)||!1;return[r`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: none;
        }
      `,!e&&r`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${n.icon.primaryColor.hover};
            }
          }
        `,e&&r`
          display: none;
        `]}}
`,E=i(f)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t;return r`
      ${c}[data-hovered] && {
        & [data-primary-color] {
          color: ${n.icon.primaryColor.hover};
        }

        & [data-secondary-color] {
          color: ${n.icon.secondaryColor.hover};
        }
      }

      ${c}[data-pressed] && {
        display: none;
      }
    `}}
`,h=i(w)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:e}=n;return r`
      display: none;
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${e.iconFilled.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${e.iconFilled.secondaryColor.base};
      }
    `}}
`,R=i(h)`
  ${()=>{const t=l.useContext(u),n=(t==null?void 0:t.isOpen)||!1;return[r`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: block;
        }
      `,n&&r`
          display: block;
        `]}}
`,D=i(h)`
  ${()=>r`
      ${c}[data-pressed] && {
        display: block;
      }
    `}
`,m=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,testID:e="tooltip-icon-button",...d}=t,p=l.useContext(T)?"dialog":"tooltip";return a.jsx(c,{...d,ref:n,$tooltipRole:p,$variant:o,"data-testid":e,children:a.jsxs(j,{$variant:o,children:[p==="tooltip"&&a.jsxs(a.Fragment,{children:[a.jsx(A,{$variant:o}),a.jsx(R,{$variant:o})]}),p==="dialog"&&a.jsxs(a.Fragment,{children:[a.jsx(E,{$variant:o}),a.jsx(D,{$variant:o})]})]})})});m.displayName="TooltipIconButtonV2";const _=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,typographyVariant:e=I.DEFAULT_VARIANT,...d}=t;return a.jsx(B,{$variant:o,$typographyVariant:e,children:a.jsx(m,{ref:n,variant:o,...d})})});_.displayName="InlineTooltipIconButtonV2";export{G as A,S as C,W as D,_ as I,m as T,q as a,H as b};
