import{j as i}from"./jsx-runtime-DQ32znRX.js";import{r as L}from"./index-DH5ua8nC.js";import{B as m}from"./index-DCR-OBjd.js";import{a as l,u as p,p as g,b as n}from"./index-BW2nVlX_.js";import{T as k}from"./Typography-DLg3KiKL.js";import{S as v}from"./Spinner-BV2YAPWt.js";const x=l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,w=l.span`
  ${({$isLoading:t})=>{const{tokens:a}=p(),{button:r}=a,o=g(r.topLayer.icon.width),e=g(r.topLayer.icon.width);return n`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${o};
        height: ${e};
      }
    `}}
`,B=l.div`
  ${({$isLoading:t})=>n`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,j=l.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,s=l.button`
  ${({$variant:t,$isLoading:a,$fullWidth:r})=>{const{tokens:o}=p(),{button:e}=o;return[n`
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

        &[aria-disabled="true"] {
          cursor: not-allowed;
        }
      `,!a&&n`
          &:not(:disabled):focus-visible {
            border-radius: ${e.topLayer.stroke.radius};
            outline-width: ${e.focusRing.width};
            outline-style: ${e.focusRing.style};
            outline-color: ${e.focusRing.color[t]};
            outline-offset: ${e.focusRing.offset};
          }
        `]}}
`,C=l.div`
  ${({$variant:t,$isLoading:a})=>{const{tokens:r}=p(),{button:o}=r;return[n`
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

        ${s}:not(:disabled):hover && {
          color: ${o.topLayer.color[t].hover};
          background: ${o.topLayer.backgroundColor[t].hover};
          transform: translateY(${o.topLayer.translateY[t].hover});
        }

        ${s}:not(:disabled):active && {
          color: ${o.topLayer.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&n`
          ${s}:not(:disabled):hover && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${s}:not(:disabled):active && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `,a&&n`
          color: ${o.topLayer.color[t].active};
          border-color: ${o.topLayer.stroke.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});

          ${s}:not(:disabled):hover && {
            color: ${o.topLayer.color[t].active};
            border-color: ${o.topLayer.stroke.color[t].active};
            background: ${o.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${o.topLayer.translateY[t].active}
            );
          }

          ${s}:not(:disabled):active && {
            color: ${o.topLayer.color[t].active};
            border-color: ${o.topLayer.stroke.color[t].active};
            background: ${o.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${o.topLayer.translateY[t].active}
            );
          }

          ${s}:not(:disabled):focus-visible && {
            border-radius: ${o.topLayer.stroke.radius};
            outline-width: ${o.focusRing.width};
            outline-style: ${o.focusRing.style};
            outline-color: ${o.focusRing.color[t]};
            outline-offset: ${o.focusRing.offset};
          }
        `]}}
`,R=l.div`
  ${({$variant:t,$isLoading:a})=>{const{tokens:r}=p(),{button:o}=r,{shadow:e}=o.bottomLayer;return[n`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${o.bottomLayer.height};
        border-radius: ${o.bottomLayer.radius};
        background: ${o.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

        ${s}:not(:disabled):hover && {
          background: ${o.bottomLayer.backgroundColor[t].hover};
        }

        ${s}:not(:disabled):active && {
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,a&&n`
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${s}:not(:disabled):hover && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }

          ${s}:not(:disabled):active && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,y=L.forwardRef((t,a)=>{const{variant:r,children:o,testID:e,type:d,isLoading:c,fullWidth:u,...b}=t;return i.jsxs(s,{...b,ref:a,$variant:r,$isLoading:c,$fullWidth:u,"data-testid":e,type:d||"button",children:[i.jsx(R,{$variant:r,$isLoading:c}),i.jsx(C,{$variant:r,$isLoading:c,children:o})]})});y.displayName="ButtonBase";y.__docgenInfo={description:"",methods:[],displayName:"ButtonBase"};const $=L.forwardRef((t,a)=>{const{text:r,variant:o="primary",startIcon:e,isLoading:d,testID:c="button",...u}=t,{tokens:b}=p(),{button:h}=b,f={"aria-disabled":d,"aria-label":d?"Loading":void 0};return i.jsx(y,{...u,...f,ref:a,variant:o,isLoading:d,testID:c,children:i.jsxs(x,{children:[e&&i.jsx(w,{$isLoading:d,children:e}),i.jsx(B,{$isLoading:d,children:i.jsx(k,{variant:h.topLayer.text.typography.variant,fontFamily:h.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${c}-text`,children:r})}),d&&i.jsx(j,{children:i.jsx(v,{variant:m.SPINNER_VARIANTS[o],testID:`${c}-spinner`})})]})})});$.displayName="Button";$.__docgenInfo={description:"",methods:[],displayName:"Button"};export{$ as B};
