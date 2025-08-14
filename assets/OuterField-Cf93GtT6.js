import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{a as u,u as d,b as i}from"./index-DmICCP6d.js";const t=u.div`
  ${()=>{const{tokens:s}=d(),{outerField:e}=s;return i`
      width: 100%;

      outline-color: ${e.focusRing.color};
      outline-width: ${e.focusRing.width.base};
      outline-style: ${e.focusRing.style};
      outline-offset: ${e.focusRing.offset.base};
      border-radius: ${e.radius};

      &:has(input:not(:read-only):focus),
      &:has(textarea:not(:read-only):focus) {
        outline-width: ${e.focusRing.width.focus};
        outline-offset: ${e.focusRing.offset.focus};
      }
    `}}
`,l=u.div`
  ${({$hasError:s,$displayInnerShadow:e})=>{const{tokens:n}=d(),{outerField:o,textArea:r}=n;return[i`
        position: relative;
        z-index: 1;
        width: 100%;
        background: ${o.backgroundColor};

        outline-color: ${o.stroke.color.base};
        outline-width: ${o.stroke.width.base};
        outline-offset: ${o.stroke.offset.base};
        outline-style: ${o.stroke.style};
        border-radius: ${o.radius};

        ${t}:has(input:not(:disabled):not(:read-only)):hover &&,
        ${t}:has(textarea:not(:disabled):not(:read-only)):hover && {
          outline-color: ${o.stroke.color.hover};
          outline-width: ${o.stroke.width.hover};
          outline-offset: ${o.stroke.offset.hover};
        }

        ${t}:has(input:read-only) &&,
        ${t}:has(textarea:read-only) && {
          outline-color: ${o.stroke.color.readOnly};
        }

        ${t}:has(input:focus:not(:read-only)) &&,
        ${t}:has(textarea:focus:not(:read-only)) && {
          outline-color: ${o.stroke.color.focus};
          outline-width: ${o.stroke.width.focus};
          outline-offset: ${o.stroke.offset.focus};
        }

        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: ${r.innerShadow.height};
          pointer-events: none;
          opacity: ${r.innerShadow.opacity.inactive};
          transition: opacity 0.3s;
        }
        &::before {
          top: 0px;
          box-shadow: 0 4px 4px ${r.innerShadow.color} inset;
          border-radius: ${o.radius} ${o.radius} 0 0;
        }
        &::after {
          bottom: 0px;
          box-shadow: 0 -4px 4px ${r.innerShadow.color} inset;
          border-radius: 0 0 ${o.radius} ${o.radius};
        }
        ${(e==="TOP"||e==="BOTH")&&i`
          &::before {
            opacity: ${r.innerShadow.opacity.active};
          }
        `}
        ${(e==="BOTTOM"||e==="BOTH")&&i`
          &::after {
            opacity: ${r.innerShadow.opacity.active};
          }
        `}
      `,s&&i`
          &&,
          ${t}:has(input:read-only) &&,
          ${t}:has(input:disabled) &&,
          ${t}:has(textarea:read-only) &&,
          ${t}:has(textarea:disabled) && {
            outline-width: ${o.stroke.width.error};
            outline-color: ${o.stroke.color.error};
            outline-offset: ${o.stroke.offset.error};
          }
        `]}}
`;function h(s){const{hasError:e,displayInnerShadow:n,children:o}=s;return a.jsx(t,{children:a.jsx(l,{$hasError:e,$displayInnerShadow:n,children:o})})}export{h as O};
