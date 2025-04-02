import{j as m}from"./jsx-runtime-BkBIjjFT.js";import{T as f}from"./index-VIbBARS4.js";import{f as y}from"./index-BQlaamZD.js";import{r as c}from"./index-KmaxkdDD.js";import{a as d,u as S,p as h,b as p}from"./index-DT8u_GqS.js";const T=d.p`
  ${({$variant:o,$fontFamily:t,$noWrap:n,$color:a})=>{const{tokens:s}=S(),{typography:i,fontFamily:e}=s,r=h(i.fontSize[o]),l=h(i.lineHeight[o]);return[p`
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
        `,f.STANDARD_VARIANTS.includes(o)&&p`
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
            font-family: ${f.BOLD_FONT_FAMILIES.includes(t)?e.OpenSansSemiBoldItalic:e.OpenSansItalic};

            & strong,
            & b {
              font-family: ${e.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function g(o,t){const{variant:n,component:a,color:s,fontFamily:i,noWrap:e,testID:r,...l}=o;return m.jsx(T,{...l,ref:t,as:a,$variant:n,$color:s,$fontFamily:i,$noWrap:e,"data-testid":r})}const A=c.forwardRef(g),u={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"};function I(o,t){const{variant:n=f.DEFAULT_VARIANT,component:a,...s}=o;return m.jsx(A,{...s,ref:t,variant:n,component:a||u[n]})}const B=y(I);export{B as T};
