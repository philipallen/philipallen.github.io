import{a as n,u,b as l,j as r}from"./index-771fcc08.js";import{T as h}from"./Typography-4da87cb1.js";const p=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,d=n.span`
  display: flex;
  flex-shrink: 0;
`,b=n.button`
  ${({$variant:e})=>{const{tokens:t}=u(),{button:o}=t;return[l`
        height: ${o.height};
        max-width: 100%;
        padding-left: ${o.paddingLeft};
        padding-right: ${o.paddingRight};
        border-width: ${o.stroke.width};
        border-style: solid;
        border-color: transparent;
        border-radius: ${o.stroke.radius};
        user-select: none;
        cursor: pointer;
        outline-style: none;

        color: ${o.color[e].base};
        background-color: ${o.backgroundColor[e].base};

        &:disabled {
          pointer-events: none;
          opacity: ${o.opacity.disabled};
        }

        &:focus-visible:not(:active) {
          outline-width: ${o.focusRing.width};
          outline-style: solid;
          outline-color: ${o.focusRing.color[e]};
          outline-offset: ${o.focusRing.offset};
        }

        &:hover {
          color: ${o.color[e].hover};
          background-color: ${o.backgroundColor[e].hover};
        }

        &:active {
          color: ${o.color[e].active};
          background-color: ${o.backgroundColor[e].active};
        }
      `,(e==="secondary"||e==="secondaryAlt")&&l`
          border-color: ${o.stroke.color[e].base};

          &:hover {
            border-color: ${o.stroke.color[e].hover};
          }

          &:active {
            border-color: ${o.stroke.color[e].active};
          }
        `]}}
`;function g(e){const{variant:t,testID:o,...s}=e;return r.jsx(b,{...s,$variant:t,"data-testid":o})}function y(e){const{text:t,variant:o="primary",startIcon:s,endIcon:c,testID:i="button",...a}=e;return r.jsx(g,{...a,variant:o,testID:i,children:r.jsxs(p,{children:[s&&r.jsx(d,{children:s}),r.jsx(h,{variant:"bodyM",fontFamily:"OpenSansSemiBold",noWrap:!0,style:{color:"inherit"},testID:`${i}-text`,children:t}),c&&r.jsx(d,{children:c})]})})}export{y as B};
