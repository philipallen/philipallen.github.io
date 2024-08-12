import{j as a}from"./jsx-runtime-DQ32znRX.js";import{M as _,a as S}from"./Modal-CydmzXwy.js";import{r as n}from"./index-DH5ua8nC.js";import{a as u,u as d,b as r}from"./index-jNFq1OWt.js";import{C as B}from"./index-M-g1GIMf.js";import{I as D}from"./IconButton-CS65cwJd.js";import{T as c}from"./Typography-D5AcRl6x.js";import{B as R}from"./Button-A4XDzPNF.js";const L=u.div`
  ${()=>{const{tokens:i}=d(),{modal:e}=i;return r`
      display: grid;
      grid-template-rows: auto 1fr auto;
      max-height: ${e.desktop.maxHeight};
    `}}
`,F=u.header`
  ${({$borderVisible:i})=>{const{tokens:e}=d(),{standardModal:t}=e;return[r`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${t.header.gap};
        overflow: hidden;
        border-bottom-width: ${t.header.stroke.bottom.width};
        border-bottom-style: ${t.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${t.header.padding.top};
        padding-left: ${t.header.padding.left};
        padding-right: ${t.header.padding.right};
        padding-bottom: ${t.header.padding.bottom};
        transition: border-bottom-color 0.15s;
      `,i&&r`
          border-bottom-color: ${t.header.stroke.bottom.color};
        `]}}
`,H=u.div`
  ${({$headingVisible:i})=>{const{tokens:{standardModal:{header:{padding:e}}}}=d(),t=`calc(${e.top} + ${e.bottom} + 100%)`;return[r`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${t});
      `,!i&&r`
          transform: translateY(0);
        `]}}
`,Y=u.div`
  margin: -8px;
`,Q=u.div`
  ${()=>{const{tokens:i}=d(),{standardModal:e}=i;return r`
      display: grid;
      gap: ${e.content.gap};
      padding-top: ${e.content.padding.top};
      padding-left: ${e.content.padding.left};
      padding-right: ${e.content.padding.right};
      padding-bottom: ${e.content.padding.bottom};
    `}}
`,U=u.footer`
  ${()=>{const{tokens:i}=d(),{standardModal:e}=i;return r`
      height: ${e.footer.height};
    `}}
`,W=2;function G(){const i=n.useRef(null),[e,t]=n.useState(!0);return n.useEffect(()=>{if(!i.current)return;const s=new IntersectionObserver(([o])=>{o&&t(o.isIntersecting)});return s.observe(i.current),()=>{s.disconnect()}},[]),{headingRef:i,headingVisible:e}}const z=u.div`
  position: relative;
  overflow: hidden;
  min-height: 0;
`,$=u.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10px;
  transition: transform 0.15s;
  pointer-events: none;
`,K=u($)`
  ${({$visible:i})=>{const{tokens:e}=d(),{scrollShadowContainer:t}=e;return[r`
        top: 0;
        transform: translateY(-10px);
        box-shadow: inset 0 7px 9px -7px ${t.shadow.color};
      `,i&&r`
          transform: translateY(0px);
        `]}}
`,J=u($)`
  ${({$visible:i})=>{const{tokens:e}=d(),{scrollShadowContainer:t}=e;return[r`
        bottom: 0;
        transform: translateY(10px);
        box-shadow: inset 0 -7px 9px -7px ${t.shadow.color};
      `,i&&r`
          transform: translateY(0px);
        `]}}
`,X=u.div`
  ${()=>{const{tokens:i}=d(),{thumbColor:e,trackColor:t}=i.scrollBar;return r`
      height: 100%;
      overflow-y: auto;
      scrollbar-color: ${e} ${t};
    `}}
`;function Z(i){const e=n.useRef(null),t=n.useRef(null),[s,o]=n.useState(!1),[l,p]=n.useState(!1);return n.useEffect(()=>{i==null||i({topShadowVisible:s,bottomShadowVisible:l})},[s,l]),n.useEffect(()=>{if(!e.current||!t.current)return;const b=new IntersectionObserver(([m])=>{m&&o(!m.isIntersecting)}),g=new IntersectionObserver(([m])=>{m&&p(!m.isIntersecting)});return b.observe(e.current),g.observe(t.current),()=>{b.disconnect(),g.disconnect()}},[]),{topShadowRef:e,bottomShadowRef:t,topShadowVisible:s,bottomShadowVisible:l}}function C(i){const{onChange:e,children:t}=i,{topShadowRef:s,bottomShadowRef:o,topShadowVisible:l,bottomShadowVisible:p}=Z(e);return a.jsxs(z,{children:[a.jsx(K,{$visible:l}),a.jsxs(X,{children:[a.jsx("div",{ref:s}),t,a.jsx("div",{ref:o})]}),a.jsx(J,{$visible:p})]})}C.__docgenInfo={description:"",methods:[],displayName:"ScrollShadowContainer",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(state: {
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  topShadowVisible: boolean;
  bottomShadowVisible: boolean;
}`,signature:{properties:[{key:"topShadowVisible",value:{name:"boolean",required:!0}},{key:"bottomShadowVisible",value:{name:"boolean",required:!0}}]}},name:"state"}],return:{name:"void"}}},description:""}}};const I=n.forwardRef((i,e)=>{const{heading:t,headingLevel:s=W,closeButtonProps:o,children:l,testID:p="standard-modal",...b}=i,{onRequestClose:g}=b,{tokens:m}=d(),{standardModal:f}=m,y=n.useId(),[T,N]=n.useState(!1),{headingRef:P,headingVisible:A}=G();function k(){g==null||g()}return a.jsx(_,{...b,ref:e,"aria-labelledby":y,testID:p,children:a.jsxs(L,{children:[a.jsxs(F,{$borderVisible:T,children:[a.jsx(H,{$headingVisible:A,inert:"",children:a.jsx(c,{noWrap:!0,component:"p",variant:f.header.heading.typography.variant,fontFamily:f.header.heading.typography.fontFamily,children:t})}),a.jsx(Y,{children:a.jsx(D,{"aria-label":"Close modal",testID:`${p}-close-button`,...o,onClick:k,children:a.jsx(B,{})})})]}),a.jsx(C,{onChange:({topShadowVisible:O})=>{N(O)},children:a.jsxs(Q,{children:[a.jsx(c,{ref:P,id:y,component:`h${s}`,variant:f.content.heading.typography.variant,fontFamily:f.content.heading.typography.fontFamily,children:t}),a.jsx("div",{children:l})]})}),a.jsx(U,{})]})})});I.displayName="StandardModalBase";const q=n.forwardRef((i,e)=>{const{isOpen:t}=i;return t?a.jsx(I,{...i,ref:e}):null});q.displayName="StandardModal";q.__docgenInfo={description:"",methods:[],displayName:"StandardModal"};const{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,te={title:"Components/Surfaces/StandardModal",component:q,render:function(e){const[{isOpen:t},s]=ee();function o(){s({isOpen:!0}),S("openModal")()}function l(){s({isOpen:!1}),S("modalClosed")()}return a.jsxs(a.Fragment,{children:[a.jsx(R,{variant:"primary",text:"Open Modal",disabled:t,onClick:o}),a.jsx(q,{...e,isOpen:t,onRequestClose:l})]})},argTypes:{children:{control:{disable:!0}}},args:{isOpen:!1}},h={args:{heading:"Short Content Modal",children:a.jsx(c,{variant:"bodyM",children:"This is the content"})}},v={args:{heading:"Long Content Modal",children:a.jsxs("div",{style:{display:"grid",gap:8},children:[a.jsx(c,{variant:"bodyM",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),a.jsx(c,{variant:"bodyM",children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),a.jsx(c,{variant:"bodyM",children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),a.jsx(c,{variant:"bodyM",children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),a.jsx(c,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}};var x,w,M;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    heading: "Short Content Modal",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...(M=(w=h.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var j,E,V;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    heading: "Long Content Modal",
    children: <div style={{
      display: "grid",
      gap: 8
    }}>
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
      </div>
  }
}`,...(V=(E=v.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const ie=["Basic","LongContent"],ce=Object.freeze(Object.defineProperty({__proto__:null,Basic:h,LongContent:v,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{h as B,v as L,ce as S};
