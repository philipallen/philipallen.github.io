import{j as r}from"./jsx-runtime-Blucd9Qg.js";import{f as a}from"./index-NgCCK6aN.js";import{u as c,l,d as u}from"./index-mZEjvCBW.js";const f=u.a`
  ${({$display:s})=>{const{tokens:t}=c(),{link:o}=t;return l`
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
`;function d(s,t){const{display:o="inline",component:e="a",testID:i="link",...n}=s;return r.jsx(f,{...n,ref:t,as:e,"data-testid":i,$display:o})}const R=a(d);export{R as L};
