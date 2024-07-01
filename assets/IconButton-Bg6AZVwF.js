import{j as i}from"./jsx-runtime-DQ32znRX.js";import{r as p}from"./index-DH5ua8nC.js";import{I as f}from"./index-D0yVWoN6.js";import{a as s,u as c,b as r}from"./index-CZQU1x5t.js";const e=s.button`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return r`
      all: unset;
      display: grid;
      place-items: center;
      padding: ${o.padding[n]};

      &:not(:disabled) {
        cursor: pointer;
      }
    `}}
`,g=s.div`
  ${({$variant:n})=>{const{tokens:t}=c(),{iconButton:o}=t;return[r`
        position: relative;
        display: grid;
        place-items: center;
        padding: ${o.inner.padding[n]};
        border-radius: ${o.inner.radius[n]};
        background: ${o.inner.backgroundColor[n].base};

        svg {
          display: block;
          width: ${o.inner.icon.width[n]};
          height: ${o.inner.icon.height[n]};
          color: ${o.inner.icon.color.base};
        }

        ${e}:hover && {
          background: ${o.inner.backgroundColor[n].hover};

          svg {
            color: ${o.inner.icon.color.hover};
          }
        }

        ${e}:active && {
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
      `,n==="contained"&&r`
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

          ${e}:hover &:after {
            outline-color: ${o.inner.stroke.contained.color.hover};
          }

          ${e}:active &:after {
            outline-color: ${o.inner.stroke.contained.color.active};
          }
        `]}}
`,d=p.forwardRef((n,t)=>{const{variant:o=f.DEFAULT_VARIANT,children:a,testID:l="icon-button",...u}=n;return i.jsx(e,{...u,ref:t,$variant:o,"data-testid":l,children:i.jsx(g,{$variant:o,children:a})})});d.displayName="IconButton";d.__docgenInfo={description:"",methods:[],displayName:"IconButton"};export{d as I};
