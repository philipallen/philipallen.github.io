import{u as s,i as a,a as i,p as y}from"./index-BpMil6Tx.js";import{$ as x,a as u}from"./Tooltip-RnFmcMOq.js";import{T as b}from"./Typography-G_YOndja.js";import{a as v,b as g,T as I}from"./index-EybPYVoN.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as T,c as k}from"./Dialog-DeeZ7kT2.js";import{r as l}from"./index-BVaTkfsr.js";import{$ as C}from"./Button-BTZi05NT.js";import{I as w,a as B}from"./index-BVyJnF54.js";const W=i(x)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return a`
      z-index: ${n.zIndex} !important;
    `}}
`,q=i.div`
  ${({$maxWidth:t})=>{const{tokens:n}=s(),{tooltip:o}=n;return a`
      position: relative;
      z-index: 1;
      max-width: ${t?`${t}px`:o.maxWidth};
      border-radius: ${o.radius};
      padding-top: ${o.padding.top};
      padding-bottom: ${o.padding.bottom};
      padding-left: ${o.padding.left};
      padding-right: ${o.padding.right.default};
      background: ${o.backgroundColor};
    `}}
`,G=i(b)`
  ${()=>{const{tokens:t}=s(),{scrollBar:n}=t;return a`
      overflow-y: auto;
      max-height: 45dvh;
      scrollbar-color: ${n.thumbColor} transparent;
    `}}
`,J=v.DEFAULT_OFFSET,K="top",F=i(T)`
  ${()=>{const{tokens:t}=s(),{tooltip:n}=t;return a`
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
`;function Q(){const{tokens:t}=s(),{tooltip:n}=t,o=parseInt(n.arrow.height),r=parseInt(n.arrow.width);return e.jsx(F,{style:{width:r,height:o},children:e.jsx("svg",{"aria-hidden":!0,width:r,height:o,viewBox:`0 0 ${r} ${o}`,children:e.jsx("path",{d:`M0 0 L${o} ${o} L${r} 0`})})})}const j=i.span`
  ${({$variant:t,$typographyVariant:n})=>{const{tokens:o}=s(),{iconButton:r,typography:d,spacing:$}=o;return a`
      width: ${r.inner.icon.width[t]};
      height: ${y(d.lineHeight[n])};
      margin-left: ${$.s8};
      display: inline-grid;
      align-content: center;
      justify-content: center;
      vertical-align: top;
    `}}
`,c=i(C)`
  ${({$tooltipRole:t,$variant:n})=>{const{tokens:o}=s(),{iconButton:r}=o;return[a`
        all: unset;
        display: grid;
        place-items: center;
        padding: ${r.padding[n]};
        margin: -${r.padding[n]};
      `,t==="dialog"&&a`
          &:not([data-disabled]) {
            cursor: pointer;
          }
        `]}}
`,A=i.div`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o}=n;return a`
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
`,f=i(w)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:r}=n;return a`
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${r.icon.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${r.icon.secondaryColor.base};
      }
    `}}
`,E=i(f)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t,o=l.useContext(u),r=(o==null?void 0:o.isOpen)||!1;return[a`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: none;
        }
      `,!r&&a`
          ${c}[data-hovered] && {
            & [data-primary-color] {
              color: ${n.icon.primaryColor.hover};
            }
          }
        `,r&&a`
          display: none;
        `]}}
`,R=i(f)`
  ${()=>{const{tokens:t}=s(),{tooltipIconButton:n}=t;return a`
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
`,h=i(B)`
  ${({$variant:t})=>{const{tokens:n}=s(),{iconButton:o,tooltipIconButton:r}=n;return a`
      display: none;
      width: ${o.inner.icon.width[t]};
      height: ${o.inner.icon.height[t]};

      & [data-primary-color] {
        color: ${r.iconFilled.primaryColor.base};
      }

      & [data-secondary-color] {
        color: ${r.iconFilled.secondaryColor.base};
      }
    `}}
`,D=i(h)`
  ${()=>{const t=l.useContext(u),n=(t==null?void 0:t.isOpen)||!1;return[a`
        ${c}[data-hovered] &&,
        ${c}[data-focus-visible] && {
          display: block;
        }
      `,n&&a`
          display: block;
        `]}}
`,_=i(h)`
  ${()=>a`
      ${c}[data-pressed] && {
        display: block;
      }
    `}
`,m=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,testID:r="tooltip-icon-button",...d}=t,p=l.useContext(k)?"dialog":"tooltip";return e.jsx(c,{...d,ref:n,$tooltipRole:p,$variant:o,"data-testid":r,children:e.jsxs(A,{$variant:o,children:[p==="tooltip"&&e.jsxs(e.Fragment,{children:[e.jsx(E,{$variant:o}),e.jsx(D,{$variant:o})]}),p==="dialog"&&e.jsxs(e.Fragment,{children:[e.jsx(R,{$variant:o}),e.jsx(_,{$variant:o})]})]})})});m.displayName="TooltipIconButton";const L=l.forwardRef((t,n)=>{const{variant:o=g.DEFAULT_VARIANT,typographyVariant:r=I.DEFAULT_VARIANT,...d}=t;return e.jsx(j,{$variant:o,$typographyVariant:r,children:e.jsx(m,{ref:n,variant:o,...d})})});L.displayName="InlineTooltipIconButton";export{Q as A,q as C,K as D,L as I,W as T,J as a,G as b,m as c};
