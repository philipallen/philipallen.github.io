import{j as a}from"./jsx-runtime-BkBIjjFT.js";import{r as L}from"./index-KmaxkdDD.js";import{B as b}from"./index-BDdHs4nI.js";import{a as n,u as i,b as d,p as y}from"./index-CFGjHfra.js";import{$ as k}from"./Button-BCrc0Htn.js";import{T as m}from"./Typography-B_dK-jVM.js";import{S as x}from"./Spinner-BYDlS5od.js";const r=n(k)`
  ${({$variant:t,$fullWidth:s})=>{const{tokens:o}=i(),{button:e}=o;return d`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${e.height};
      width: ${s?"100%":"auto"};
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
`,w=n.div`
  ${({$variant:t})=>{const{tokens:s}=i(),{button:o}=s;return[d`
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
`,v=n.div`
  ${({$variant:t})=>{const{tokens:s}=i(),{button:o}=s,{shadow:e}=o.bottomLayer;return d`
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
`,j=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,C=n.span`
  ${()=>{const{tokens:t}=i(),{button:s}=t,o=y(s.topLayer.icon.width),e=y(s.topLayer.icon.width);return d`
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
`,Y=n.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,E=L.forwardRef((t,s)=>{const{variant:o=b.DEFAULT_VARIANT,startIcon:e,fullWidth:g,children:c,testID:l="button",...p}=t,{isPending:h}=p,{tokens:f}=i(),{button:u}=f;return a.jsx(r,{...p,ref:s,$variant:o,$fullWidth:g,"data-testid":l,children:$=>a.jsxs(a.Fragment,{children:[a.jsx(v,{$variant:o}),a.jsx(w,{$variant:o,children:a.jsxs(j,{children:[e&&a.jsx(C,{children:e}),a.jsx(R,{children:a.jsx(m,{variant:u.topLayer.text.typography.variant,fontFamily:u.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",component:"div",testID:`${l}-text`,children:typeof c=="function"?c($):c})}),h&&a.jsx(Y,{children:a.jsx(x,{"aria-label":"Loading...",variant:b.SPINNER_VARIANTS[o],testID:`${l}-spinner`})})]})})]})})});export{E as B};
