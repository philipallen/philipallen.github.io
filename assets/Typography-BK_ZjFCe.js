import{j as y}from"./jsx-runtime-Blucd9Qg.js";import{T as h}from"./index-eS8l-D1x.js";import{f as d}from"./index-NgCCK6aN.js";import{r as c}from"./index-CcKhGcwW.js";import{u as S,p as f,l as s,d as T}from"./index-C1QKVHyt.js";const g=T.p`
  ${({$variant:o,$fontFamily:t,$noWrap:n,$color:a})=>{const{tokens:p}=S(),{typography:i,fontFamily:e}=p,r=f(i.fontSize[o]),l=f(i.lineHeight[o]);return[s`
        margin: 0;
        font-weight: normal;
        color: ${a||i.color[o]};
        font-size: ${r};
        line-height: ${l};
        font-family: ${i.fontFamily[o]};
      `,t&&s`
          font-family: ${e[t]};
        `,n&&s`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,h.STANDARD_VARIANTS.includes(o)&&s`
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
`;function A(o,t){const{variant:n,component:a,color:p,fontFamily:i,noWrap:e,testID:r,...l}=o;return y.jsx(g,{...l,ref:t,as:a,$variant:n,$color:p,$fontFamily:i,$noWrap:e,"data-testid":r})}const u=c.forwardRef(A),I={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"};function m(o,t){const{variant:n=h.DEFAULT_VARIANT,component:a,...p}=o;return y.jsx(u,{...p,ref:t,variant:n,component:a||I[n]})}m.displayName="Typography";const L=d(m);export{L as T};
