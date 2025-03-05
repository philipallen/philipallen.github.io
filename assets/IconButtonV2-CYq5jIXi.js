import{j as s}from"./jsx-runtime-DQ32znRX.js";import{r as $}from"./index-DH5ua8nC.js";import{I as f}from"./index-BrtwDHqb.js";import{a as c,u as d,b as i}from"./index-CzvSJj6w.js";import{$ as g}from"./Button-nmnqENox.js";const e=c(g)`
  ${({$variant:n})=>{const{tokens:t}=d(),{iconButton:o}=t;return i`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${o.padding[n]};
      margin: -${o.padding[n]};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
      }
    `}}
`,b=c.div`
  ${({$variant:n})=>{const{tokens:t}=d(),{iconButton:o}=t;return[i`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${o.inner.padding[n]};
        border-radius: ${o.inner.radius[n]};
        background: ${o.inner.backgroundColor[n].base};
        opacity: ${o.inner.opacity.base};

        ${e}[data-disabled] && {
          opacity: ${o.inner.opacity.disabled};
        }

        svg {
          display: block;
          width: ${o.inner.icon.width[n]};
          height: ${o.inner.icon.height[n]};
          color: ${o.inner.icon.color.base};
        }

        ${e}[data-hovered] && {
          background: ${o.inner.backgroundColor[n].hover};

          svg {
            color: ${o.inner.icon.color.hover};
          }
        }

        ${e}[data-pressed] && {
          background: ${o.inner.backgroundColor[n].active};

          svg {
            color: ${o.inner.icon.color.active};
          }
        }

        ${e}[data-focus-visible] && {
          outline-width: ${o.inner.focusRing.width};
          outline-style: ${o.inner.focusRing.style};
          outline-color: ${o.inner.focusRing.color};
          outline-offset: ${o.inner.focusRing.offset[n]};
        }
      `,n==="contained"&&i`
          &:after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: ${o.inner.radius[n]};
            outline-width: ${o.inner.stroke.contained.width};
            outline-style: ${o.inner.stroke.contained.style};
            outline-color: ${o.inner.stroke.contained.color.base};
            outline-offset: ${o.inner.stroke.contained.offset};
          }

          ${e}[data-hovered] &:after {
            outline-color: ${o.inner.stroke.contained.color.hover};
          }

          ${e}[data-pressed] &:after {
            outline-color: ${o.inner.stroke.contained.color.active};
          }
        `]}}
`,a=$.forwardRef((n,t)=>{const{variant:o=f.DEFAULT_VARIANT,children:r,testID:l="icon-button",...u}=n;return s.jsx(e,{...u,ref:t,$variant:o,"data-testid":l,children:p=>s.jsx(b,{$variant:o,children:typeof r=="function"?r(p):r})})});a.displayName="IconButtonV2";a.__docgenInfo={description:"",methods:[],displayName:"IconButtonV2"};export{a as I};
