import{j as t}from"./jsx-runtime-DQ32znRX.js";import{a as q}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{j as O,H as B}from"./index-BrtwDHqb.js";import{r as p}from"./index-DH5ua8nC.js";import{a as l,u as g,b as o}from"./index-CzvSJj6w.js";import{C as A}from"./index-BYwLR37K.js";import{C as k,M as w}from"./Modal-BQIbOlDl.js";import{I as _}from"./IconButton-BeRO6QHM.js";import{T as r}from"./Typography-RMDmhaRB.js";import{S as L}from"./ScrollShadowContainer-5PBttQuR.js";import{B as D}from"./Button-Bah0dgkQ.js";const R=l(k)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,F=l.header`
  ${({$borderVisible:i})=>{const{tokens:a}=g(),{standardModal:e,modal:n}=a;return[o`
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
`,H=l.div`
  ${({$headingVisible:i})=>{const{tokens:{modal:a,standardModal:{header:{padding:e}}}}=g(),n=`calc(${e.mobile.top} + ${e.mobile.bottom} + 100%)`,s=`calc(${e.mobile.top} + ${e.mobile.bottom} + 100%)`;return[o`
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
`,W=l.div`
  margin: -6px;
  margin-top: -10px;
  margin-bottom: -11px;
`,Q=l.div`
  ${()=>{const{tokens:i}=g(),{standardModal:a,modal:e}=i;return o`
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
`,Y=l.footer`
  ${()=>{const{tokens:i}=g(),{standardModal:a,modal:e}=i;return o`
      height: ${a.footer.height.mobile};
      @media (min-width: ${e.breakpoints.tablet}) {
        height: ${a.footer.height.tablet};
      }
    `}}
`;function G(){const i=p.useRef(null),[a,e]=p.useState(!0);return p.useEffect(()=>{if(!i.current)return;const n=new IntersectionObserver(([s])=>{s&&e(s.isIntersecting)});return n.observe(i.current),()=>{n.disconnect()}},[]),{headingRef:i,headingVisible:a}}function b(i){const{heading:a,headingLevel:e=O.DEFAULT_HEADING_LEVEL,closeButtonProps:n,children:s,testID:u="standard-modal",...h}=i,{isOpen:S,onRequestClose:x}=h,{tokens:P}=g(),{standardModal:d}=P,v=p.useId();return t.jsx(w,{...h,"aria-labelledby":v,testID:u,children:S&&t.jsx(U,{children:({borderVisible:T,setBorderVisible:j,headingRef:I,headingVisible:N})=>t.jsxs(R,{children:[t.jsxs(F,{$borderVisible:T,children:[t.jsx(H,{$headingVisible:N,inert:"",children:t.jsx(r,{noWrap:!0,component:"p",variant:d.header.heading.typography.variant,fontFamily:d.header.heading.typography.fontFamily,children:a})}),t.jsx(W,{children:t.jsx(_,{"aria-label":"Close modal",testID:`${u}-close-button`,...n,onClick:x,variant:d.header.closeButton.variant,children:t.jsx(A,{})})})]}),t.jsx(L,{onChange:({topShadowVisible:V})=>{j(V)},children:t.jsxs(Q,{children:[t.jsx(r,{ref:I,id:v,component:`h${e}`,variant:d.content.heading.typography.variant,fontFamily:d.content.heading.typography.fontFamily,children:a}),t.jsx("div",{children:s})]})}),t.jsx(Y,{"aria-hidden":"true"})]})})})}function U(i){const{children:a}=i,[e,n]=p.useState(!1),{headingRef:s,headingVisible:u}=G();return a({borderVisible:e,setBorderVisible:n,headingRef:s,headingVisible:u})}b.__docgenInfo={description:"",methods:[],displayName:"StandardModal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},onRequestClose:{required:!0,tsType:{name:"Exclude",elements:[{name:'intersection["onRequestClose"]',raw:'ModalProps["onRequestClose"]'},{name:"undefined"}],raw:'Exclude<ModalProps["onRequestClose"], undefined>'},description:""},focusOpenerElementOnClose:{required:!1,tsType:{name:"boolean"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},closeButtonProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`PropsWithOptionalTestID &
Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children"> & {
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,elements:[{name:"PropsWithOptionalTestID"},{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className" | "children"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'},{name:"literal",value:'"children"'}]}],raw:'Omit<ComponentPropsWithRef<"button">, "style" | "className" | "children">'},{name:"signature",type:"object",raw:`{
  children: JSX.Element;
  variant?: CoreIconButton.Variant;
  "aria-label": string;
}`,signature:{properties:[{key:"children",value:{name:"JSX.Element",required:!0}},{key:"variant",value:{name:"CoreIconButton.Variant",required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"union",raw:'"onClick" | "children"',elements:[{name:"literal",value:'"onClick"'},{name:"literal",value:'"children"'}]}],raw:'Omit<IconButtonProps, "onClick" | "children">'},description:""}}};const{useArgs:J}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:"Components/Surfaces/StandardModal",component:b,render:function(a){const[{isOpen:e},n]=J();function s(){n({isOpen:!0}),q("openModal")()}function u(){n({isOpen:!1}),q("modalClosed")()}return t.jsxs(t.Fragment,{children:[t.jsx(D,{variant:"primary",text:"Open Modal",onClick:s}),t.jsx(b,{...a,isOpen:e,onRequestClose:u})]})},argTypes:{onRequestClose:{control:{disable:!0}},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:B},children:{control:{disable:!0}}},args:{isOpen:!1}},m={args:{heading:"Short modal content",children:t.jsx(r,{variant:"bodyM",children:"This is the content"})}},c={args:{heading:"Long modal content",children:t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),t.jsx(r,{variant:"bodyM",style:{marginBottom:12},children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),t.jsx(r,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}};var f,y,E;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: "Short modal content",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...(E=(y=m.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,$,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=($=c.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const z=["Basic","LongContent"],le=Object.freeze(Object.defineProperty({__proto__:null,Basic:m,LongContent:c,__namedExportsOrder:z,default:X},Symbol.toStringTag,{value:"Module"}));export{m as B,c as L,le as S};
