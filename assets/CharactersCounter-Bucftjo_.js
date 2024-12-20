import{j as a}from"./jsx-runtime-DQ32znRX.js";import{a as i,u as n,b as s}from"./index-CtBUti8q.js";import{r as f}from"./index-DH5ua8nC.js";import{T as $}from"./Typography-v4_88_aK.js";const e=i.div`
  ${()=>{const{tokens:r}=n(),{outerField:t}=r;return s`
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
`,p=i.div`
  ${({$hasError:r})=>{const{tokens:t}=n(),{outerField:o}=t;return[s`
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
`;function m(r){const{hasError:t,children:o}=r;return a.jsx(e,{children:a.jsx(p,{$hasError:t,children:o})})}m.__docgenInfo={description:"",methods:[],displayName:"OuterField"};const y=i($)`
  ${()=>{const{tokens:r}=n(),{charactersCounter:t}=r;return s`
      width: 100%;
      color: ${t.color};
      text-align: ${t.textAlign};
    `}}
`;function c(r){const{length:t,maxLength:o,testID:d}=r,{tokens:h}=n(),{charactersCounter:u}=h,l=Math.max(0,o-t);return a.jsx(y,{variant:u.typography.variant,fontFamily:u.typography.fontFamily,testID:d,"aria-live":"polite",children:`${l} character${l!==1?"s":""} remaining`})}const w=f.memo(c);c.__docgenInfo={description:"",methods:[],displayName:"CharactersCounter",props:{length:{required:!0,tsType:{name:"number"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""}}};export{w as C,m as O};
