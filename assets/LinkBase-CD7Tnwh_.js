import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{f as a}from"./index-CA_uD5kO.js";import{a as c,u as l,b as u}from"./index-5VPm3mt9.js";const f=c.a`
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
`;function p(s,t){const{display:o="inline",component:e="a",testID:i="link",...n}=s;return r.jsx(f,{...n,ref:t,as:e,"data-testid":i,$display:o})}const R=a(p);export{R as L};
