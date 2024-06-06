import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import{a as c,u as l,b as u}from"./index-1940508f.js";const f=c.a`
  ${({$display:s})=>{const{tokens:t}=l(),{link:o}=t;return u`
      all: unset;
      display: ${s};
      color: ${o.color.base};
      cursor: pointer;

      &:hover {
        color: ${o.color.hover};
      }

      &:active {
        color: ${o.color.active};
      }

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,d=a.forwardRef;function p(s,t){const{display:o="inline",component:r="a",testID:e="link",...i}=s;return n.jsx(f,{...i,ref:t,as:r,"data-testid":e,$display:o})}const g=d(p);export{g as L};
