import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{I as b}from"./index-DKJt7waT.js";import{a as s,u as c,b as i}from"./index-CtBUti8q.js";const e=s.button`
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
`,$=s.div`
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
`,d=p.forwardRef((n,t)=>{const{variant:o=b.DEFAULT_VARIANT,children:a,testID:l="icon-button",...u}=n;return r.jsx(e,{...u,ref:t,$variant:o,"data-testid":l,children:r.jsx($,{$variant:o,children:a})})});d.displayName="IconButton";d.__docgenInfo={description:"",methods:[],displayName:"IconButton"};export{d as I};
