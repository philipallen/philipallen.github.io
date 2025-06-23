import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as i,u as a,b as s}from"./index-BHlkTKmU.js";const e=i.div`
  ${()=>{const{tokens:r}=a(),{outerField:t}=r;return s`
      width: 100%;

      outline-color: ${t.focusRing.color};
      outline-width: ${t.focusRing.width.base};
      outline-style: ${t.focusRing.style};
      outline-offset: ${t.focusRing.offset.base};
      border-radius: ${t.radius};

      &:has(input:not(:read-only):focus),
      &:has(textarea:not(:read-only):focus) {
        outline-width: ${t.focusRing.width.focus};
        outline-offset: ${t.focusRing.offset.focus};
      }
    `}}
`,l=i.div`
  ${({$hasError:r})=>{const{tokens:t}=a(),{outerField:o}=t;return[s`
        position: relative;
        width: 100%;
        background: ${o.backgroundColor};

        outline-color: ${o.stroke.color.base};
        outline-width: ${o.stroke.width.base};
        outline-offset: ${o.stroke.offset.base};
        outline-style: ${o.stroke.style};
        border-radius: ${o.radius};

        ${e}:has(input:not(:disabled):not(:read-only)):hover &&,
        ${e}:has(textarea:not(:disabled):not(:read-only)):hover && {
          outline-color: ${o.stroke.color.hover};
          outline-width: ${o.stroke.width.hover};
          outline-offset: ${o.stroke.offset.hover};
        }

        ${e}:has(input:read-only) &&,
        ${e}:has(textarea:read-only) && {
          outline-color: ${o.stroke.color.readOnly};
        }

        ${e}:has(input:focus:not(:read-only)) &&,
        ${e}:has(textarea:focus:not(:read-only)) && {
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
`;function f(r){const{hasError:t,children:o}=r;return n.jsx(e,{children:n.jsx(l,{$hasError:t,children:o})})}export{f as O};
