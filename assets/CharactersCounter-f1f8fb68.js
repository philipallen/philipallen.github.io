import{a as i,u as n,b as s,j as a}from"./index-1154a484.js";import{r as d}from"./index-c013ead5.js";import{T as $}from"./Typography-c902fb8d.js";const e=i.div`
  ${()=>{const{tokens:r}=n(),{outerField:t}=r;return s`
      width: 100%;

      outline-color: ${t.focusRing.color};
      outline-width: ${t.focusRing.width.base};
      outline-style: ${t.focusRing.style};
      outline-offset: ${t.focusRing.offset.base};
      border-radius: ${t.radius};

      &:has(input:focus),
      &:has(textarea:focus) {
        outline-width: ${t.focusRing.width.focus};
        outline-offset: ${t.focusRing.offset.focus};
      }
    `}}
`,f=i.div`
  ${({$hasError:r})=>{const{tokens:t}=n(),{outerField:o}=t;return[s`
        position: relative;
        width: 100%;
        background: ${o.backgroundColor};

        outline-color: ${o.stroke.color.base};
        outline-width: ${o.stroke.width.base};
        outline-style: ${o.stroke.style};
        border-radius: ${o.radius};

        ${e}:has(input:not(:disabled)):hover &&,
        ${e}:has(textarea:not(:disabled)):hover && {
          outline-color: ${o.stroke.color.hover};
          outline-width: ${o.stroke.width.hover};
          outline-offset: ${o.stroke.offset.hover};
        }

        ${e}:has(input:read-only) &&,
        ${e}:has(textarea:read-only) && {
          outline-color: ${o.stroke.color.readOnly};
        }

        ${e}:has(input:focus) &&,
        ${e}:has(textarea:focus) && {
          outline-color: ${o.stroke.color.focus};
          outline-width: ${o.stroke.width.focus};
          outline-offset: ${o.stroke.offset.focus};
        }
      `,r&&s`
          &&,
          ${e}:has(input:read-only) &&,
          ${e}:has(input:disabled) &&,
          ${e}:has(textarea:read-only) &&,
          ${e}:has(textarea:disabled) && {
            outline-width: ${o.stroke.width.error};
            outline-color: ${o.stroke.color.error};
            outline-offset: ${o.stroke.offset.error};
          }
        `]}}
`;function m(r){const{hasError:t,children:o}=r;return a.jsx(e,{children:a.jsx(f,{$hasError:t,children:o})})}const p=i($)`
  ${()=>{const{tokens:r}=n(),{charactersCounter:t}=r;return s`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function k(r){const{length:t,maxLength:o,testID:c}=r,{tokens:l}=n(),{charactersCounter:h}=l,u=Math.max(0,o-t);return a.jsx(p,{variant:h.typographyVariant,testID:c,"aria-live":"polite",children:`${u} character${u!==1?"s":""} remaining`})}const b=d.memo(k);export{b as C,m as O};
