import{j as e}from"./jsx-runtime-DQ32znRX.js";import{M as N,a as v}from"./Modal-Dn2Rl2XP.js";import{r as f}from"./index-DH5ua8nC.js";import{a as m,u as c,b as g}from"./index-BSpjoQIR.js";import{C as A}from"./index-CPadiX42.js";import{I as P}from"./IconButton-DvIKb6gE.js";import{T as t}from"./Typography-Dx-yaUty.js";import{B as D}from"./Button-B9YPVZd-.js";const I=m.div`
  ${()=>{const{tokens:a}=c(),{modal:i}=a;return g`
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: ${i.desktop.maxHeight};
      padding-bottom: ${i.desktop.paddingBottom};

      @media (max-width: ${i.desktop.minWidth}) {
        padding-bottom: unset;
      }
    `}}
`,_=m.header`
  ${()=>{const{tokens:a}=c(),{modal:i}=a;return g`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: ${i.backgroundColor};
      padding: ${i.header.padding};
      border-bottom-width: ${i.header.strokeBottom.width};
      border-bottom-style: ${i.header.strokeBottom.style};
      border-bottom-color: ${i.header.strokeBottom.color};
    `}}
`,k=m.div`
  flex-shrink: 0;
  margin-top: -8px;
  margin-right: -8px;
  margin-bottom: -8px;
`,V=m.div`
  ${()=>{const{tokens:{modal:{content:a}}}=c();return g`
      overflow-y: auto;
      padding: ${a.paddingBottom} ${a.paddingHorizontal};
      box-shadow: inset 0px 7px 9px -7px ${a.innerShadowTop.color};
    `}}
`,$=2,o=f.forwardRef((a,i)=>{const{heading:u,headingLevel:r=$,children:d,testID:l="standard-modal",...b}=a,{onRequestClose:p}=b,{tokens:j}=c(),{modal:q}=j,h=f.useId();function C(){p==null||p()}return e.jsx(N,{...b,ref:i,"aria-labelledby":h,testID:l,children:e.jsxs(I,{children:[e.jsxs(_,{children:[e.jsx(t,{id:h,component:`h${r}`,variant:q.header.title.variant,fontFamily:q.header.title.fontFamily,children:u}),e.jsx(k,{children:e.jsx(P,{onClick:C,"aria-label":"Close modal",testID:`${l}-close-button`,children:e.jsx(A,{})})})]}),e.jsx(V,{children:d})]})})});o.displayName="StandardModal";o.__docgenInfo={description:"",methods:[],displayName:"StandardModal"};const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Surfaces/StandardModal",component:o,render:function(i){const[{isOpen:u},r]=L();function d(){r({isOpen:!0}),v("openModal")()}function l(){r({isOpen:!1}),v("modalClosed")()}return e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"primary",text:"Open Modal",disabled:u,onClick:d}),e.jsx(o,{...i,isOpen:u,onRequestClose:l})]})},argTypes:{children:{control:{disable:!0}}},args:{isOpen:!1}},s={args:{heading:"Short Content Modal",children:e.jsx(t,{variant:"bodyM",children:"This is the content"})}},n={args:{heading:"Long Content Modal",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"bodyM",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),e.jsx(t,{variant:"bodyM",children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),e.jsx(t,{variant:"bodyM",children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),e.jsx(t,{variant:"bodyM",children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),e.jsx(t,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."}),e.jsx("span",{style:{fontSize:64,marginTop:"100%"},children:" 🥳"}),e.jsx("span",{style:{fontSize:96,marginTop:"100%"},children:" 🎊"}),e.jsx("span",{style:{fontSize:128,marginTop:"100%"},children:" 🎉"})]})}};var y,x,M;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    heading: "Short Content Modal",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...(M=(x=s.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,S,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    heading: "Long Content Modal",
    children: <>
        <Typography variant="bodyM">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec
          ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at.
          Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor
          id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra
          ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in
          hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum
          enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo
          vel orci porta non. Ut placerat orci nulla pellentesque dignissim.
          Enim lobortis scelerisque fermentum dui faucibus in ornare quam.
        </Typography>
        <Typography variant="bodyM">
          Penatibus et magnis dis parturient montes nascetur. Purus in massa
          tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc
          faucibus a pellentesque sit amet porttitor. At tempor commodo
          ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc
          consequat interdum varius sit amet mattis. Nunc id cursus metus
          aliquam eleifend mi in. Elit pellentesque habitant morbi tristique.
          Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing
          elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue
          mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In
          pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus
          ultricies tristique nulla aliquet enim. Pharetra convallis posuere
          morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis
          aenean et tortor. Egestas pretium aenean pharetra magna ac placerat.
          Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna
          ac. Quis enim lobortis scelerisque fermentum dui faucibus in.
        </Typography>
        <Typography variant="bodyM">
          Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim
          nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum
          varius. Cras semper auctor neque vitae tempus quam pellentesque nec
          nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis
          nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin
          sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit
          amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor
          leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie
          nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet
          aliquam id diam maecenas ultricies. A iaculis at erat pellentesque.
          Quisque sagittis purus sit amet volutpat consequat mauris. Nulla
          porttitor massa id neque aliquam.
        </Typography>
        <Typography variant="bodyM">
          Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis.
          Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam
          purus sit amet luctus venenatis lectus. Pellentesque massa placerat
          duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor
          urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales
          neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac
          turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices.
          Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus
          pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam
          vulputate ut pharetra. Viverra vitae congue eu consequat ac felis
          donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at
          varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis
          dis parturient montes nascetur ridiculus. Non quam lacus suspendisse
          faucibus interdum posuere lorem ipsum dolor.
        </Typography>
        <Typography variant="bodyM">
          Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae
          justo eget magna. Aliquet sagittis id consectetur purus ut faucibus.
          Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et
          malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit
          eget gravida. Elementum facilisis leo vel fringilla est ullamcorper
          eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt
          praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique
          magna sit amet purus gravida quis blandit.
        </Typography>
        <span style={{
        fontSize: 64,
        marginTop: "100%"
      }}> 🥳</span>
        <span style={{
        fontSize: 96,
        marginTop: "100%"
      }}> 🎊</span>
        <span style={{
        fontSize: 128,
        marginTop: "100%"
      }}> 🎉</span>
      </>
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const B=["Basic","LongContent"],W=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,LongContent:n,__namedExportsOrder:B,default:O},Symbol.toStringTag,{value:"Module"}));export{s as B,n as L,W as S};
