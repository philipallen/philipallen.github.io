import{a as d,u as y,b as p,j as r}from"./index-144fe590.js";import{r as l}from"./index-c013ead5.js";import{T as c,a as m}from"./index-d9c054de.js";const S=d.p`
  ${({$variant:o,$fontFamily:t,$noWrap:n,$color:a})=>{const{tokens:s}=y(),{typography:i,fontFamily:e}=s;return[p`
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
        `,c.includes(o)&&p`
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
            font-family: ${m.includes(t)?e.OpenSansSemiBoldItalic:e.OpenSansItalic};

            & strong,
            & b {
              font-family: ${e.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function T(o,t){const{variant:n,component:a,color:s,fontFamily:i,noWrap:e,testID:f,...h}=o;return r.jsx(S,{...h,ref:t,as:a,$variant:n,$color:s,$fontFamily:i,$noWrap:e,"data-testid":f})}const g=l.forwardRef(T),A={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},u=l.forwardRef;function O(o,t){const{variant:n="bodyM",component:a,...s}=o;return r.jsx(g,{...s,ref:t,variant:n,component:a||A[n]})}const I=u(O);export{I as T};
