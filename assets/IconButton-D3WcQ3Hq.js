import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as u}from"./index-CcKhGcwW.js";import{I as p}from"./index-WLaP1tkh.js";import{a as s,u as c,b as i}from"./index-DmICCP6d.js";const e=s.button`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return i`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${o.padding[n]};
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `}}
`,b=s.div`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return[i`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${o.inner.padding[n]};
        border-radius: ${o.inner.radius[n]};
        background: ${o.inner.backgroundColor[n].base};
        opacity: ${o.inner.opacity.base};

        ${e}:disabled && {
          opacity: ${o.inner.opacity.disabled};
        }

        svg {
          display: block;
          width: ${o.inner.icon.width[n]};
          height: ${o.inner.icon.height[n]};
          color: ${o.inner.icon.color.base};
        }

        ${e}:not(:disabled):hover && {
          background: ${o.inner.backgroundColor[n].hover};

          svg {
            color: ${o.inner.icon.color.hover};
          }
        }

        ${e}:not(:disabled):active &&,
        ${e}:not(:disabled)[aria-pressed] &&,
        ${e}:not(:disabled)[aria-expanded] && {
          background: ${o.inner.backgroundColor[n].active};

          svg {
            color: ${o.inner.icon.color.active};
          }
        }

        ${e}:focus-visible && {
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

          ${e}:not(:disabled):hover &:after {
            outline-color: ${o.inner.stroke.contained.color.hover};
          }

          ${e}:not(:disabled):active &:after {
            outline-color: ${o.inner.stroke.contained.color.active};
          }
        `]}}
`,$=u.forwardRef((n,t)=>{const{variant:o=p.DEFAULT_VARIANT,children:d,testID:a="icon-button",...l}=n;return r.jsx(e,{...l,ref:t,$variant:o,"data-testid":a,children:r.jsx(b,{$variant:o,children:d})})});$.displayName="IconButton";export{$ as I};
