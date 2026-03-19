import{j as s}from"./jsx-runtime-Blucd9Qg.js";import{r as p}from"./index-CcKhGcwW.js";import{I as $}from"./index-eS8l-D1x.js";import{u as c,l as i,d}from"./index-C1QKVHyt.js";import{$ as f}from"./Button-T8IefSzn.js";const e=d(f)`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return i`
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
`,g=d.div`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return[i`
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
`,b=p.forwardRef((n,t)=>{const{variant:o=$.DEFAULT_VARIANT,children:r,testID:a="icon-button",...l}=n;return s.jsx(e,{...l,ref:t,$variant:o,"data-testid":a,children:u=>s.jsx(g,{$variant:o,children:typeof r=="function"?r(u):r})})});b.displayName="IconButton";export{b as I};
