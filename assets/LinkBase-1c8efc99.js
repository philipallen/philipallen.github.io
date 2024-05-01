import{a as i,u as a,b as c,j as l}from"./index-74fe31d7.js";import{r as u}from"./index-c013ead5.js";const f=i.a`
  ${({$display:s})=>{const{tokens:t}=a(),{link:o}=t;return c`
      all: unset;
      display: ${s};
      color: ${o.color.base};
      cursor: pointer;

      &:hover {
        color: ${o.color.hover};
      }

      &:focus-visible {
        outline-width: ${o.focusRing.width};
        outline-style: ${o.focusRing.style};
        outline-color: ${o.focusRing.color};
        outline-offset: ${o.focusRing.offset};
        border-radius: ${o.focusRing.radius};
      }
    `}}
`,d=u.forwardRef;function p(s,t){const{display:o="inline",component:e="a",testID:n="link",...r}=s;return l.jsx(f,{...r,ref:t,as:e,"data-testid":n,$display:o})}const g=d(p);export{g as L};
