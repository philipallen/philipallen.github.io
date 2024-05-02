import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as y}from"./index-c013ead5.js";import{a as i,u as d,p as b,b as a}from"./index-2b4c4340.js";import{T as f}from"./Typography-2ed3318f.js";const $=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,m=i.span`
  ${()=>{const{tokens:t}=d(),{button:r}=t,o=b(r.topLayer.icon.width),e=b(r.topLayer.icon.width);return a`
      display: flex;
      flex-shrink: 0;

      svg {
        width: ${o};
        height: ${e};
      }
    `}}
`,n=i.button`
  ${({$variant:t,$fullWidth:r})=>{const{tokens:o}=d(),{button:e}=o;return a`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${e.height};
      width: ${r?"100%":"auto"};
      min-width: ${e.minWidth};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: ${e.opacity.disabled};
      }

      &:not(:disabled):focus-visible {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[t]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,L=i.div`
  ${({$variant:t})=>{const{tokens:r}=d(),{button:o}=r;return[a`
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
`,k=i.div`
  ${({$variant:t})=>{const{tokens:r}=d(),{button:o}=r,{shadow:e}=o.bottomLayer;return a`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${o.bottomLayer.height};
      border-radius: ${o.bottomLayer.radius};
      background: ${o.bottomLayer.backgroundColor[t].base};
      box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

      ${n}:not(:disabled):hover && {
        background: ${o.bottomLayer.backgroundColor[t].hover};
      }

      ${n}:not(:disabled):active && {
        background: ${o.bottomLayer.backgroundColor[t].active};
        box-shadow: none;
      }
    `}}
`,g=y.forwardRef((t,r)=>{const{variant:o,children:e,testID:c,type:l,fullWidth:p,...u}=t;return s.jsxs(n,{...u,ref:r,$variant:o,$fullWidth:p,"data-testid":c,type:l||"button",children:[s.jsx(k,{$variant:o}),s.jsx(L,{$variant:o,children:e})]})});g.displayName="ButtonBase";const x=y.forwardRef((t,r)=>{const{text:o,variant:e="primary",startIcon:c,testID:l="button",...p}=t,{tokens:u}=d(),{button:h}=u;return s.jsx(g,{...p,ref:r,variant:e,testID:l,children:s.jsxs($,{children:[c&&s.jsx(m,{children:c}),s.jsx(f,{fontFamily:h.topLayer.text.fontFamily,variant:h.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${l}-text`,children:o})]})})});x.displayName="Button";export{x as B};
