import{j as i}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import{a as c,u as l,b as u}from"./index-22f9e29b.js";const f=c.a`
  ${({$display:s})=>{const{tokens:t}=l(),{link:o}=t;return u`
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
`,d=a.forwardRef;function p(s,t){const{display:o="inline",component:r="a",testID:e="link",...n}=s;return i.jsx(f,{...n,ref:t,as:r,"data-testid":e,$display:o})}const g=d(p);export{g as L};