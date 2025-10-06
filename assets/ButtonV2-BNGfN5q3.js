import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{r as f}from"./index-CcKhGcwW.js";import{B as u}from"./index-WLaP1tkh.js";import{a as n,u as i,b as d,p as b}from"./index-BVzVw2jm.js";import{$ as L}from"./Button-DPtumZN7.js";import{T as k}from"./Typography-DZZq2lFF.js";import{S as m}from"./Spinner-BTyk-FAE.js";const r=n(L)`
  ${({$variant:t,$fullWidth:a})=>{const{tokens:o}=i(),{button:e}=o;return d`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${e.height};
      width: ${a?"100%":"auto"};
      min-width: ${e.minWidth};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
        opacity: ${e.opacity.disabled};
      }

      &[aria-disabled] {
        cursor: not-allowed;
      }

      &[data-focus-visible]:not([data-pending]) {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[t]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,x=n.div`
  ${({$variant:t})=>{const{tokens:a}=i(),{button:o}=a;return[d`
        position: relative;
        overflow: hidden;
        color: ${o.topLayer.color[t].base};
        background: ${o.topLayer.backgroundColor[t].base};
        height: ${o.topLayer.height[t]};
        padding-left: ${o.topLayer.padding[t].left};
        padding-right: ${o.topLayer.padding[t].right};
        border-width: ${o.topLayer.stroke.width};
        border-style: ${o.topLayer.stroke.style};
        border-color: ${o.topLayer.stroke.color[t].base};
        border-radius: ${o.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${o.topLayer.animationDuration}ms;

        ${r}[data-hovered] && {
          color: ${o.topLayer.color[t].hover};
          background: ${o.topLayer.backgroundColor[t].hover};
          transform: translateY(${o.topLayer.translateY[t].hover});
        }

        ${r}[data-pressed] && {
          color: ${o.topLayer.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }

        ${r}[data-pending] && {
          color: ${o.topLayer.color[t].active};
          border-color: ${o.topLayer.stroke.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }

        ${r}[data-pending][data-hovered] && {
          color: ${o.topLayer.color[t].active};
          border-color: ${o.topLayer.stroke.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }

        ${r}[data-pending][data-pressed] && {
          color: ${o.topLayer.color[t].active};
          border-color: ${o.topLayer.stroke.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }

        ${r}[data-pending][data-focus-visible] && {
          border-radius: ${o.topLayer.stroke.radius};
          outline-width: ${o.focusRing.width};
          outline-style: ${o.focusRing.style};
          outline-color: ${o.focusRing.color[t]};
          outline-offset: ${o.focusRing.offset};
        }
      `,t==="secondary"&&d`
          ${r}[data-hovered] && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${r}[data-pressed] && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `]}}
`,w=n.div`
  ${({$variant:t})=>{const{tokens:a}=i(),{button:o}=a,{shadow:e}=o.bottomLayer;return d`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${o.bottomLayer.height};
      border-radius: ${o.bottomLayer.radius};
      background: ${o.bottomLayer.backgroundColor[t].base};
      box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

      ${r}[data-hovered] && {
        background: ${o.bottomLayer.backgroundColor[t].hover};
      }

      ${r}[data-pressed] && {
        background: ${o.bottomLayer.backgroundColor[t].active};
        box-shadow: none;
      }

      ${r}[data-pending] && {
        background: ${o.bottomLayer.backgroundColor[t].active};
        box-shadow: none;
      }

      ${r}[data-pending][data-hovered] && {
        background: ${o.bottomLayer.backgroundColor[t].active};
      }

      ${r}[data-pending][data-pressed] && {
        background: ${o.bottomLayer.backgroundColor[t].active};
      }
    `}}
`,v=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,C=n.span`
  ${()=>{const{tokens:t}=i(),{button:a}=t,o=b(a.topLayer.icon.width),e=b(a.topLayer.icon.width);return d`
      display: flex;
      flex-shrink: 0;

      ${r}[data-pending] && {
        visibility: hidden;
      }

      svg {
        width: ${o};
        height: ${e};
      }
    `}}
`,R=n.div`
  overflow: hidden;

  ${r}[data-pending] && {
    visibility: hidden;
  }
`,j=n.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,Y=f.forwardRef((t,a)=>{const{variant:o=u.DEFAULT_VARIANT,startIcon:e,fullWidth:y,children:g,testID:c="button",...l}=t,{isPending:h}=l,{tokens:$}=i(),{button:p}=$;return s.jsxs(r,{...l,ref:a,$variant:o,$fullWidth:y,"data-testid":c,children:[s.jsx(w,{$variant:o}),s.jsx(x,{$variant:o,children:s.jsxs(v,{children:[e&&s.jsx(C,{children:e}),s.jsx(R,{children:s.jsx(k,{variant:p.topLayer.text.typography.variant,fontFamily:p.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",component:"div",testID:`${c}-text`,children:g})}),h&&s.jsx(j,{children:s.jsx(m,{"aria-label":"Loading...",variant:u.SPINNER_VARIANTS[o],testID:`${c}-spinner`})})]})})]})});Y.displayName="ButtonV2";export{Y as B};
