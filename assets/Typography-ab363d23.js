import{a as d,u as c,b as p,j as l}from"./index-e76b8df1.js";import{r as h}from"./index-c013ead5.js";import{T as r}from"./index-f9a152de.js";const m=d.p`
  ${({$variant:o,$fontFamily:t,$noWrap:n,$color:a})=>{const{tokens:s}=c(),{typography:i,fontFamily:e}=s;return[p`
        margin: 0;
        font-weight: normal;
        color: ${a||i.color[o]};
        font-size: ${i.fontSize[o]};
        line-height: ${i.lineHeight[o]};
        font-family: ${i.fontFamily[o]};
      `,t&&p`
          font-family: ${e[t]};
        `,n&&p`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,r.STANDARD_VARIANTS.includes(o)&&p`
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
            font-family: ${r.BOLD_FONT_FAMILIES.includes(t)?e.OpenSansSemiBoldItalic:e.OpenSansItalic};

            & strong,
            & b {
              font-family: ${e.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function S(o,t){const{variant:n,component:a,color:s,fontFamily:i,noWrap:e,testID:f,...y}=o;return l.jsx(m,{...y,ref:t,as:a,$variant:n,$color:s,$fontFamily:i,$noWrap:e,"data-testid":f})}const T=h.forwardRef(S),g={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},u=h.forwardRef;function w(o,t){const{variant:n="bodyM",component:a,...s}=o;return l.jsx(T,{...s,ref:t,variant:n,component:a||g[n]})}const I=u(w);export{I as T};
