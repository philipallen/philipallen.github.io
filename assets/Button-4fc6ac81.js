import{a as i,u as d,b as a,j as s}from"./index-1154a484.js";import{r as y}from"./index-c013ead5.js";import{T as h}from"./Typography-c902fb8d.js";const g=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,$=i.span`
  ${()=>{const{tokens:t}=d(),{button:e}=t;return a`
      display: flex;
      flex-shrink: 0;

      svg {
        width: ${e.topLayer.icon.width};
        height: ${e.topLayer.icon.height};
      }
    `}}
`,n=i.button`
  ${({$variant:t,$fullWidth:e})=>{const{tokens:o}=d(),{button:r}=o;return a`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${r.height};
      width: ${e?"100%":"auto"};
      min-width: ${r.minWidth};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: ${r.opacity.disabled};
      }

      &:not(:disabled):focus-visible {
        border-radius: ${r.topLayer.stroke.radius};
        outline-width: ${r.focusRing.width};
        outline-style: ${r.focusRing.style};
        outline-color: ${r.focusRing.color[t]};
        outline-offset: ${r.focusRing.offset};
      }
    `}}
`,f=i.div`
  ${({$variant:t})=>{const{tokens:e}=d(),{button:o}=e;return[a`
        position: relative;
        overflow: hidden;
        color: ${o.topLayer.color[t].base};
        background: ${o.topLayer.backgroundColor[t].base};
        padding-top: ${o.topLayer.padding[t].top};
        padding-bottom: ${o.topLayer.padding[t].bottom};
        padding-left: ${o.topLayer.padding[t].left};
        padding-right: ${o.topLayer.padding[t].right};
        border-width: ${o.topLayer.stroke.width};
        border-style: ${o.topLayer.stroke.style};
        border-color: ${o.topLayer.stroke.color[t].base};
        border-radius: ${o.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${o.topLayer.animationDuration}ms;

        ${n}:not(:disabled):hover && {
          color: ${o.topLayer.color[t].hover};
          background: ${o.topLayer.backgroundColor[t].hover};
          transform: translateY(${o.topLayer.translateY[t].hover});
        }

        ${n}:not(:disabled):active && {
          color: ${o.topLayer.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&a`
          ${n}:not(:disabled):hover && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${n}:not(:disabled):active && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `]}}
`,L=i.div`
  ${({$variant:t})=>{const{tokens:e}=d(),{button:o}=e,{shadow:r}=o.bottomLayer;return a`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${o.bottomLayer.height};
      border-radius: ${o.bottomLayer.radius};
      background: ${o.bottomLayer.backgroundColor[t].base};
      box-shadow: 0px ${r.blur} ${r.offsetY} ${r.color};

      ${n}:not(:disabled):hover && {
        background: ${o.bottomLayer.backgroundColor[t].hover};
      }

      ${n}:not(:disabled):active && {
        background: ${o.bottomLayer.backgroundColor[t].active};
        box-shadow: none;
      }
    `}}
`,m=y.forwardRef((t,e)=>{const{variant:o,children:r,testID:c,type:l,fullWidth:p,...u}=t;return s.jsxs(n,{...u,ref:e,$variant:o,$fullWidth:p,"data-testid":c,type:l||"button",children:[s.jsx(L,{$variant:o}),s.jsx(f,{$variant:o,children:r})]})}),v=y.forwardRef((t,e)=>{const{text:o,variant:r="primary",startIcon:c,testID:l="button",...p}=t,{tokens:u}=d(),{button:b}=u;return s.jsx(m,{...p,ref:e,variant:r,testID:l,children:s.jsxs(g,{children:[c&&s.jsx($,{children:c}),s.jsx(h,{fontFamily:b.topLayer.text.fontFamily,variant:b.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${l}-text`,children:o})]})})});export{v as B};
