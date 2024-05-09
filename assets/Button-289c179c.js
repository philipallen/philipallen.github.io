import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as L}from"./index-c013ead5.js";import{B as m}from"./index-7aa2f780.js";import{a as d,u as p,p as g,b as i}from"./index-22f9e29b.js";import{T as f}from"./Typography-df6f4efa.js";import{S as k}from"./Spinner-ad785f98.js";const x=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,v=d.span`
  ${({$isLoading:t})=>{const{tokens:r}=p(),{button:e}=r,o=g(e.topLayer.icon.width),a=g(e.topLayer.icon.width);return i`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${o};
        height: ${a};
      }
    `}}
`,w=d.div`
  ${({$isLoading:t})=>i`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,B=d.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,s=d.button`
  ${({$variant:t,$fullWidth:r})=>{const{tokens:e}=p(),{button:o}=e;return i`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${o.height};
      width: ${r?"100%":"auto"};
      min-width: ${o.minWidth};
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
`,j=d.div`
  ${({$variant:t,$isLoading:r})=>{const{tokens:e}=p(),{button:o}=e;return[i`
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
      `,t==="secondary"&&i`
          ${s}:not(:disabled):hover && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${s}:not(:disabled):active && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `,r&&i`
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
        `]}}
`,C=d.div`
  ${({$variant:t,$isLoading:r})=>{const{tokens:e}=p(),{button:o}=e,{shadow:a}=o.bottomLayer;return[i`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${o.bottomLayer.height};
        border-radius: ${o.bottomLayer.radius};
        background: ${o.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${a.blur} ${a.offsetY} ${a.color};

        ${s}:not(:disabled):hover && {
          background: ${o.bottomLayer.backgroundColor[t].hover};
        }

        ${s}:not(:disabled):active && {
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,r&&i`
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${s}:not(:disabled):hover && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }

          ${s}:not(:disabled):active && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,y=L.forwardRef((t,r)=>{const{variant:e,children:o,testID:a,type:c,isLoading:l,fullWidth:b,...u}=t;return n.jsxs(s,{...u,ref:r,$variant:e,$fullWidth:b,"data-testid":a,type:c||"button",children:[n.jsx(C,{$variant:e,$isLoading:l}),n.jsx(j,{$variant:e,$isLoading:l,children:o})]})});y.displayName="ButtonBase";y.__docgenInfo={description:"",methods:[],displayName:"ButtonBase"};const $=L.forwardRef((t,r)=>{const{text:e,variant:o="primary",startIcon:a,isLoading:c,testID:l="button",...b}=t,{tokens:u}=p(),{button:h}=u;return n.jsx(y,{...b,ref:r,variant:o,isLoading:c,testID:l,children:n.jsxs(x,{children:[a&&n.jsx(v,{$isLoading:c,children:a}),n.jsx(w,{$isLoading:c,children:n.jsx(f,{fontFamily:h.topLayer.text.fontFamily,variant:h.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${l}-text`,children:e})}),c&&n.jsx(B,{children:n.jsx(k,{variant:m.SPINNER_VARIANTS[o],testID:`${l}-spinner`})})]})})});$.displayName="Button";$.__docgenInfo={description:"",methods:[],displayName:"Button"};export{$ as B};
