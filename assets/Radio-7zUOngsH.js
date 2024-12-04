import{j as i}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{b as k,I as m}from"./AlertAssociationProps-x_hs0fx1.js";import{I as g}from"./InlineAlert-uKr_Jbz9.js";import{I as w}from"./InputLabelRight-E-1fk8fR.js";import{a as l,u as p,b as n}from"./index-CtBUti8q.js";const a=l.div`
  ${({$hasError:e})=>{const{tokens:t}=p(),{radio:o}=t;return[n`
        position: relative;
        display: grid;
        place-items: center;
        width: ${o.width};
        height: ${o.height};
        background: ${o.backgroundColor.base};
        border-radius: 100%;
        outline-width: ${o.stroke.width.base};
        outline-style: solid;
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
`,f=l.input`
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
`,c=d.forwardRef((e,t)=>{const{hasError:o,testID:r="radio",...s}=e;return i.jsxs(a,{$hasError:o,children:[i.jsx(f,{...s,ref:t,type:"radio","data-testid":r}),i.jsx(I,{})]})});c.displayName="RadioBase";c.__docgenInfo={description:"",methods:[],displayName:"RadioBase"};const u=d.forwardRef((e,t)=>{const{labelProps:o,alertProps:r,...s}=e,{testID:b="radio"}=s,h=d.useId(),$=k(h,e);return i.jsx(m,{alert:r?i.jsx(g,{id:h,...r,testID:`${b}-alert`}):void 0,children:i.jsx(w,{...o,children:i.jsx(c,{...s,...$,ref:t})})})});u.displayName="Radio";u.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{u as R};
