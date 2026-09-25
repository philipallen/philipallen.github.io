import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-BVaTkfsr.js";import{B as u}from"./index-EybPYVoN.js";import{u as d,i,a as n,p as y}from"./index-BpMil6Tx.js";import{$ as k}from"./Link-8-tVykFp.js";import{T as m}from"./Typography-G_YOndja.js";import{S as x}from"./Spinner-BBq1qDFt.js";const r=n(k)`
  ${({$variant:t,$fullWidth:a})=>{const{tokens:o}=d(),{button:e}=o;return i`
      all: unset;
      position: relative;
      display: ${a?"grid":"inline-grid"};
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

      &[data-pending] {
        cursor: not-allowed;
        opacity: 1;
      }

      &[data-focus-visible]:not([data-pending]) {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[t]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,w=n.div`
  ${({$variant:t})=>{const{tokens:a}=d(),{button:o}=a;return[i`
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
      `,t==="secondary"&&i`
          ${r}[data-hovered] && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${r}[data-pressed] && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `]}}
`,v=n.div`
  ${({$variant:t})=>{const{tokens:a}=d(),{button:o}=a,{shadow:e}=o.bottomLayer;return i`
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
`,C=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,R=n.span`
  ${()=>{const{tokens:t}=d(),{button:a}=t,o=y(a.topLayer.icon.width),e=y(a.topLayer.icon.width);return i`
      display: flex;
      flex-shrink: 0;

      ${r}[data-pending] & {
        visibility: hidden;
      }

      svg {
        width: ${o};
        height: ${e};
      }
    `}}
`,j=n.div`
  overflow: hidden;

  ${r}[data-pending] & {
    visibility: hidden;
  }
`,Y=n.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,T=L.forwardRef((t,a)=>{const{variant:o=u.DEFAULT_VARIANT,startIcon:e,fullWidth:b,isPending:c,isDisabled:g,children:h,testID:l="link-button",...$}=t,{tokens:f}=d(),{button:p}=f;return s.jsxs(r,{...$,ref:a,$variant:o,$fullWidth:b,isDisabled:g||c,"data-pending":c||void 0,"data-testid":l,children:[s.jsx(v,{$variant:o}),s.jsx(w,{$variant:o,children:s.jsxs(C,{children:[e&&s.jsx(R,{children:e}),s.jsx(j,{children:s.jsx(m,{variant:p.topLayer.text.typography.variant,fontFamily:p.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",component:"div",testID:`${l}-text`,children:h})}),c&&s.jsx(Y,{children:s.jsx(x,{"aria-label":"Loading...",variant:u.SPINNER_VARIANTS[o],testID:`${l}-spinner`})})]})})]})});T.displayName="LinkButton";export{T as L};
