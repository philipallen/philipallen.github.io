import{j as t}from"./jsx-runtime-DQ32znRX.js";import{C as B,M as O,a as f}from"./Modal-Dy-JrkNV.js";import{f as k,H as _}from"./index-DgS1v8YF.js";import{r as c}from"./index-DH5ua8nC.js";import{a as l,u as p,b as o}from"./index-D3TaQYms.js";import{C as L}from"./index-BFYe-czB.js";import{I as D}from"./IconButton-ByXQWB-P.js";import{T as r}from"./Typography-squJd_7u.js";import{S as w}from"./ScrollShadowContainer-Cz7xGkBB.js";import{B as F}from"./Button-GkTtUO6f.js";const R=l(B)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,H=l.header`
  ${({$borderVisible:i})=>{const{tokens:a}=p(),{standardModal:e,modal:n}=a;return[o`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${e.header.gap};
        overflow: hidden;
        border-bottom-width: ${e.header.stroke.bottom.width};
        border-bottom-style: ${e.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${e.header.padding.mobile.top};
        padding-left: ${e.header.padding.mobile.left};
        padding-right: ${e.header.padding.mobile.right};
        padding-bottom: ${e.header.padding.mobile.bottom};
        transition: border-bottom-color 0.15s;

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-top: ${e.header.padding.tablet.top};
          padding-left: ${e.header.padding.tablet.left};
          padding-right: ${e.header.padding.tablet.right};
          padding-bottom: ${e.header.padding.tablet.bottom};
        }
      `,i&&o`
          border-bottom-color: ${e.header.stroke.bottom.color};
        `]}}
`,W=l.div`
  ${({$headingVisible:i})=>{const{tokens:{modal:a,standardModal:{header:{padding:e}}}}=p(),n=`calc(${e.mobile.top} + ${e.mobile.bottom} + 100%)`,s=`calc(${e.mobile.top} + ${e.mobile.bottom} + 100%)`;return[o`
        overflow: hidden;
        transition: transform 0.35s;
        transform: translateY(${n});
        @media (min-width: ${a.breakpoints.tablet}) {
          transform: translateY(${s});
        }
      `,!i&&o`
          && {
            transform: translateY(0);
          }
        `]}}
`,Q=l.div`
  margin: -6px;
  margin-bottom: -7px;
`,Y=l.div`
  ${()=>{const{tokens:i}=p(),{standardModal:a,modal:e}=i;return o`
      display: grid;
      gap: ${a.content.gap};
      padding-top: ${a.content.padding.mobile.top};
      padding-left: ${a.content.padding.mobile.left};
      padding-right: ${a.content.padding.mobile.right};
      padding-bottom: ${a.content.padding.mobile.bottom};

      @media (min-width: ${e.breakpoints.tablet}) {
        padding-top: ${a.content.padding.tablet.top};
        padding-left: ${a.content.padding.tablet.left};
        padding-right: ${a.content.padding.tablet.right};
        padding-bottom: ${a.content.padding.tablet.bottom};
      }
    `}}
`,G=l.footer`
  ${()=>{const{tokens:i}=p(),{standardModal:a}=i;return o`
      height: ${a.footer.height};
    `}}
`;function U(){const i=c.useRef(null),[a,e]=c.useState(!0);return c.useEffect(()=>{if(!i.current)return;const n=new IntersectionObserver(([s])=>{s&&e(s.isIntersecting)});return n.observe(i.current),()=>{n.disconnect()}},[]),{headingRef:i,headingVisible:a}}function h(i){const{heading:a,headingLevel:e=k.DEFAULT_HEADING_LEVEL,closeButtonProps:n,children:s,testID:u="standard-modal",...v}=i,{isOpen:C,onRequestClose:b}=v,{tokens:P}=p(),{standardModal:g}=P,q=c.useId();function j(){b==null||b()}return t.jsx(O,{...v,"aria-labelledby":q,testID:u,children:C&&t.jsx(J,{children:({borderVisible:T,setBorderVisible:I,headingRef:N,headingVisible:V})=>t.jsxs(R,{children:[t.jsxs(H,{$borderVisible:T,children:[t.jsx(W,{$headingVisible:V,inert:"",children:t.jsx(r,{noWrap:!0,component:"p",variant:g.header.heading.typography.variant,fontFamily:g.header.heading.typography.fontFamily,children:a})}),t.jsx(Q,{children:t.jsx(D,{"aria-label":"Close modal",testID:`${u}-close-button`,...n,onClick:j,children:t.jsx(L,{})})})]}),t.jsx(w,{onChange:({topShadowVisible:A})=>{I(A)},children:t.jsxs(Y,{children:[t.jsx(r,{ref:N,id:q,component:`h${e}`,variant:g.content.heading.typography.variant,fontFamily:g.content.heading.typography.fontFamily,children:a}),t.jsx("div",{children:s})]})}),t.jsx(G,{})]})})})}function J(i){const{children:a}=i,[e,n]=c.useState(!1),{headingRef:s,headingVisible:u}=U();return a({borderVisible:e,setBorderVisible:n,headingRef:s,headingVisible:u})}h.__docgenInfo={description:"",methods:[],displayName:"StandardModal",props:{heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},closeButtonProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
}`,signature:{properties:[{key:"children",value:{name:"JSX.Element",required:!0}},{key:"variant",value:{name:"CoreIconButton.Variant",required:!1}}]}}]},{name:"union",raw:'"onClick" | "children"',elements:[{name:"literal",value:'"onClick"'},{name:"literal",value:'"children"'}]}],raw:'Omit<IconButtonProps, "onClick" | "children">'},description:""}}};const{useArgs:X}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:"Components/Surfaces/StandardModal",component:h,render:function(a){const[{isOpen:e},n]=X();function s(){n({isOpen:!0}),f("openModal")()}function u(){n({isOpen:!1}),f("modalClosed")()}return t.jsxs(t.Fragment,{children:[t.jsx(F,{variant:"primary",text:"Open Modal",disabled:e,onClick:s}),t.jsx(h,{...a,isOpen:e,onRequestClose:u})]})},argTypes:{onRequestClose:{control:{disable:!0}},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:_},children:{control:{disable:!0}}},args:{isOpen:!1}},d={args:{heading:"Short modal content",children:t.jsx(r,{variant:"bodyM",children:"This is the content"})}},m={args:{heading:"Long modal content",children:t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),t.jsx(r,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}};var y,E,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    heading: "Short modal content",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,S,x;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    heading: "Long modal content",
    children: <>
        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
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

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
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

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
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

        <Typography variant="bodyM" style={{
        marginBottom: 12
      }}>
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
      </>
  }
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const K=["Basic","LongContent"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,LongContent:m,__namedExportsOrder:K,default:z},Symbol.toStringTag,{value:"Module"}));export{d as B,m as L,le as S};
