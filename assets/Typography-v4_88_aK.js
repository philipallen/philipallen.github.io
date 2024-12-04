import{j as y}from"./jsx-runtime-DQ32znRX.js";import{r as h}from"./index-DH5ua8nC.js";import{T as m}from"./index-DKJt7waT.js";import{a as f,u as T,p as d,b as s}from"./index-CtBUti8q.js";const u=f.p`
  ${({$variant:e,$fontFamily:n,$noWrap:t,$color:r})=>{const{tokens:i}=T(),{typography:a,fontFamily:o}=i,p=d(a.fontSize[e]),l=d(a.lineHeight[e]);return[s`
        margin: 0;
        font-weight: normal;
        color: ${r||a.color[e]};
        font-size: ${p};
        line-height: ${l};
        font-family: ${a.fontFamily[e]};
      `,n&&s`
          font-family: ${o[n]};
        `,t&&s`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `,m.STANDARD_VARIANTS.includes(e)&&s`
          & strong,
          & b {
            font-family: ${o.OpenSansBold};

            & em,
            & i {
              font-family: ${o.OpenSansSemiBoldItalic};
            }
          }

          & em,
          & i {
            font-family: ${m.BOLD_FONT_FAMILIES.includes(n)?o.OpenSansSemiBoldItalic:o.OpenSansItalic};

            & strong,
            & b {
              font-family: ${o.OpenSansSemiBoldItalic};
            }
          }
        `]}}
`;function g(e,n){const{variant:t,component:r,color:i,fontFamily:a,noWrap:o,testID:p,...l}=e;return y.jsx(u,{...l,ref:n,as:r,$variant:t,$color:i,$fontFamily:a,$noWrap:o,"data-testid":p})}const c=h.forwardRef(g);c.__docgenInfo={description:"",methods:[],displayName:"TypographyBase",props:{component:{required:!0,tsType:{name:"ElementType"},description:""},variant:{required:!0,tsType:{name:"CoreTypography.Variant"},description:""},fontFamily:{required:!1,tsType:{name:"CoreTypography.FontFamily"},description:""},color:{required:!1,tsType:{name:"union",raw:'"inherit" | ThemeTokens["themeColor" | "color"]',elements:[{name:"literal",value:'"inherit"'},{name:"ThemeTokens[union]",raw:'ThemeTokens["themeColor" | "color"]'}]},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},testID:{required:!1,tsType:{name:"string"},description:""}}};const S={displayXL:"h1",displayL:"h1",displayM:"h1",displayS:"h1",headlineL:"h1",headlineM:"h2",headlineS:"h3",headlineXS:"h4",titleL:"h2",titleM:"h3",titleS:"h4",titleXS:"h5",bodyL:"p",bodyM:"p",bodyS:"p",labelM:"p",labelS:"p"},A=h.forwardRef;function I(e,n){const{variant:t=m.DEFAULT_VARIANT,component:r,...i}=e;return y.jsx(c,{...i,ref:n,variant:t,component:r||S[t]})}const _=A(I);_.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{component:{required:!1,tsType:{name:"T"},description:""}}};export{_ as T};
