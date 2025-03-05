import{j as n}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as a,b as s}from"./index-CzvSJj6w.js";const t=i.div`
  ${()=>{const{tokens:r}=a(),{outerField:e}=r;return s`
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
`,l=i.div`
  ${({$hasError:r})=>{const{tokens:e}=a(),{outerField:o}=e;return[s`
        position: relative;
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
      `,r&&s`
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
`;function u(r){const{hasError:e,children:o}=r;return n.jsx(t,{children:n.jsx(l,{$hasError:e,children:o})})}u.__docgenInfo={description:"",methods:[],displayName:"OuterField"};export{u as O};
