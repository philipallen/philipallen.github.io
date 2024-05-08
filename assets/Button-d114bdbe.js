import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as g}from"./index-c013ead5.js";import{a as i,u as d,p as y,b as a}from"./index-2b4c4340.js";import{T as $}from"./Typography-45ec0b3f.js";const m=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,L=i.span`
  ${()=>{const{tokens:t}=d(),{button:r}=t,o=y(r.topLayer.icon.width),e=y(r.topLayer.icon.width);return a`
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
`,k=i.div`
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
`,x=i.div`
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
`,h=g.forwardRef((t,r)=>{const{variant:o,children:e,testID:c,type:l,fullWidth:p,...u}=t;return s.jsxs(n,{...u,ref:r,$variant:o,$fullWidth:p,"data-testid":c,type:l||"button",children:[s.jsx(x,{$variant:o}),s.jsx(k,{$variant:o,children:e})]})});h.displayName="ButtonBase";h.__docgenInfo={description:"",methods:[],displayName:"ButtonBase"};const f=g.forwardRef((t,r)=>{const{text:o,variant:e="primary",startIcon:c,testID:l="button",...p}=t,{tokens:u}=d(),{button:b}=u;return s.jsx(h,{...p,ref:r,variant:e,testID:l,children:s.jsxs(m,{children:[c&&s.jsx(L,{children:c}),s.jsx($,{fontFamily:b.topLayer.text.fontFamily,variant:b.topLayer.text.typographyVariant,noWrap:!0,color:"inherit",testID:`${l}-text`,children:o})]})})});f.displayName="Button";f.__docgenInfo={description:"",methods:[],displayName:"Button"};export{f as B};
