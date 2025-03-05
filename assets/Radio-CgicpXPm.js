import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{I as $}from"./InputWrapper-C7of_464.js";import{I as k}from"./InlineAlert-D3r_vEqv.js";import{I as g}from"./InputLabelRight-CBmatMr8.js";import{a as l,u as p,b as n}from"./index-CzvSJj6w.js";import{b as f}from"./AlertAssociationProps-C5Idu2_l.js";const a=l.div`
  ${({$hasError:e})=>{const{tokens:t}=p(),{radio:o}=t;return[n`
        position: relative;
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        background: ${o.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${o.stroke.width.base};
        outline-style: ${o.stroke.style.base};
        outline-color: ${o.stroke.color.base};
        outline-offset: -1px;
        cursor: pointer;

        &:has(input:disabled) {
          outline-width: ${o.stroke.width.disabled};
          outline-color: ${o.stroke.color.disabled};
          cursor: not-allowed;
        }

        &:hover:has(input:not(:disabled)),
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled)
          )
          && {
          outline-width: ${o.stroke.width.hover};
          outline-color: ${o.stroke.color.hover};
        }
      `,e&&n`
          outline-width: ${o.stroke.width.error};
          outline-color: ${o.stroke.color.error};
        `]}}
`,w=l.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`,I=l.div`
  ${()=>{const{tokens:e}=p(),{radio:t}=e;return[n`
        display: none;
        width: ${t.icon.width};
        height: ${t.icon.height};
        background: ${t.icon.color.base};
        border-radius: 100%;

        ${a}:has(input:checked) && {
          display: block;
        }

        ${a}:hover:has(input:not(:disabled):checked) &&,
        :is(label:hover, [role="option"][data-hovered]):has(
            input:not(:disabled):checked
          )
          && {
          background: ${t.icon.color.hover};
        }

        ${a}:has(input:disabled:checked) {
          background: ${t.icon.color.disabled};
        }
      `]}}
`,c=d.forwardRef((e,t)=>{const{hasError:o,testID:i="radio",...s}=e;return r.jsxs(a,{$hasError:o,children:[r.jsx(w,{...s,ref:t,type:"radio","data-testid":i}),r.jsx(I,{})]})});c.displayName="RadioBase";c.__docgenInfo={description:"",methods:[],displayName:"RadioBase"};const u=d.forwardRef((e,t)=>{const{labelProps:o,alertProps:i,...s}=e,{testID:b="radio"}=s,h=d.useId(),m=f(h,e);return r.jsx($,{alert:i?r.jsx(k,{id:h,...i,testID:`${b}-alert`}):void 0,children:r.jsx(g,{...o,children:r.jsx(c,{...s,...m,ref:t})})})});u.displayName="Radio";u.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{u as R};
