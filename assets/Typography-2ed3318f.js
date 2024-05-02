import{j as y}from"./jsx-runtime-6eef64cc.js";import{r as d}from"./index-c013ead5.js";import{a as c,u as m,p as f,b as p}from"./index-2b4c4340.js";import{T as h}from"./index-f9a152de.js";const S=c.p`
  ${({$variant:o,$fontFamily:t,$noWrap:n,$color:a})=>{const{tokens:s}=m(),{typography:i,fontFamily:e}=s,r=f(i.fontSize[o]),l=f(i.lineHeight[o]);return[p`
        margin: 0;
        font-weight: normal;
        color: ${a||i.color[o]};
        font-size: ${r};
        line-height: ${l};
        font-family: ${i.fontFamily[o]};
      `,t&&p`
          font-family: ${e[t]};
        `,n&&p`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,h.STANDARD_VARIANTS.includes(o)&&p`
          & strong,
          & b {
            font-family: ${e.OpenSansBold};

            & em,
            & i {
              font-family: ${e.OpenSansSemiBoldItalic};
            }
          }

          & em,
          & i {
            font-family: ${h.BOLD_FONT_FAMILIES.includes(t)?e.OpenSansSemiBoldItalic:e.OpenSansItalic};

            & strong,
            & b {
              font-family: ${e.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function T(o,t){const{variant:n,component:a,color:s,fontFamily:i,noWrap:e,testID:r,...l}=o;return y.jsx(S,{...l,ref:t,as:a,$variant:n,$color:s,$fontFamily:i,$noWrap:e,"data-testid":r})}const g=d.forwardRef(T),u={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},w=d.forwardRef;function A(o,t){const{variant:n="bodyM",component:a,...s}=o;return y.jsx(g,{...s,ref:t,variant:n,component:a||u[n]})}const B=w(A);export{B as T};
