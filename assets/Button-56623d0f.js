import{a as i,u as d,b as a,j as s}from"./index-d88b625c.js";import{T as b}from"./Typography-06318a9b.js";const y=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,h=i.span`
  ${()=>{const{tokens:t}=d(),{button:e}=t;return a`
      display: flex;
      flex-shrink: 0;

      svg {
        width: ${e.topLayer.icon.width};
        height: ${e.topLayer.icon.height};
      }
    `}}
`,n=i.button`
  ${({$variant:t})=>{const{tokens:e}=d(),{button:o}=e;return a`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${o.height};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: ${o.opacity.disabled};
      }

      &:not(:disabled):focus-visible {
        border-radius: ${o.topLayer.stroke.radius};
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color[t]};
        outline-offset: ${o.focusRing.offset};
      }
    `}}
`,g=i.div`
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
        transition: transform 150ms;

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
`,$=i.div`
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
`;function L(t){const{variant:e,children:o,testID:r,...c}=t;return s.jsxs(n,{...c,$variant:e,"data-testid":r,children:[s.jsx($,{$variant:e}),s.jsx(g,{$variant:e,children:o})]})}function m(t){const{text:e,variant:o="primary",startIcon:r,testID:c="button",...p}=t,{tokens:u}=d(),{button:l}=u;return s.jsx(L,{...p,variant:o,testID:c,children:s.jsxs(y,{children:[r&&s.jsx(h,{children:r}),s.jsx(b,{fontFamily:l.topLayer.text.fontFamily,variant:l.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${c}-text`,children:e})]})})}export{m as B};
