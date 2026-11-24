import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as f}from"./index-B-lxVbXh.js";import{m as L,H as F}from"./index-CllsIOLz.js";import{r as O}from"./index-BVaTkfsr.js";import{a as l,u as g,i as r,p as _}from"./index-CiimbDfo.js";import{b as k}from"./index-BVyJnF54.js";import{p as H}from"./useHover-D4rWRZh8.js";import{C as Q,M as w,a as W,S as R,h as G}from"./ScrollShadowContainer-qbELqbBi.js";import{I as U}from"./IconButton-bdzodGwk.js";import{T as t}from"./Typography-BBiZk7wC.js";import{B as Y}from"./Button-BTyF2Npk.js";const z=l(Q)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,K=l.header`
  ${({$borderVisible:s})=>{const{tokens:i}=g(),{standardModal:a,modal:n}=i;return[r`
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        gap: ${a.header.gap};
        overflow: hidden;
        border-bottom-width: ${a.header.stroke.bottom.width};
        border-bottom-style: ${a.header.stroke.bottom.style};
        border-bottom-color: transparent;
        padding-top: ${a.header.padding.mobile.top};
        padding-left: ${a.header.padding.mobile.left};
        padding-right: ${a.header.padding.mobile.right};
        padding-bottom: ${a.header.padding.mobile.bottom};
        transition: border-bottom-color 0.15s;

        @media (min-width: ${n.breakpoints.tablet}) {
          padding-top: ${a.header.padding.tablet.top};
          padding-left: ${a.header.padding.tablet.left};
          padding-right: ${a.header.padding.tablet.right};
          padding-bottom: ${a.header.padding.tablet.bottom};
        }
      `,s&&r`
          border-bottom-color: ${a.header.stroke.bottom.color};
        `]}}
`,J=l.div`
  ${({$headingVisible:s})=>{const{tokens:i}=g(),{standardModal:a,modal:n}=i,{heading:o,padding:u}=a.header,b=`calc(${u.mobile.top} + ${u.mobile.bottom} + 100%)`,q=`calc(${u.tablet.top} + ${u.tablet.bottom} + 100%)`;return[r`
        overflow: hidden;
        min-height: ${_(o.minHeight)};
        transition: transform 0.35s;
        transform: translateY(${b});
        @media (min-width: ${n.breakpoints.tablet}) {
          transform: translateY(${q});
        }
      `,!s&&r`
          && {
            transform: translateY(0);
          }
        `]}}
`,X=l.div`
  margin-top: -10px;
  margin-bottom: -11px;
`,Z=l.div`
  ${()=>{const{tokens:s}=g(),{standardModal:i,modal:a}=s;return r`
      display: grid;
      gap: ${i.content.gap};
      padding-top: ${i.content.padding.mobile.top};
      padding-left: ${i.content.padding.mobile.left};
      padding-right: ${i.content.padding.mobile.right};
      padding-bottom: ${i.content.padding.mobile.bottom};

      @media (min-width: ${a.breakpoints.tablet}) {
        padding-top: ${i.content.padding.tablet.top};
        padding-left: ${i.content.padding.tablet.left};
        padding-right: ${i.content.padding.tablet.right};
        padding-bottom: ${i.content.padding.tablet.bottom};
      }
    `}}
`,ee=l.footer`
  ${()=>{const{tokens:s}=g(),{standardModal:i,modal:a}=s;return r`
      height: ${i.footer.height.mobile};
      @media (min-width: ${a.breakpoints.tablet}) {
        height: ${i.footer.height.tablet};
      }
    `}}
`;function h(s){const{heading:i,headingLevel:a=L.DEFAULT_HEADING_LEVEL,closeButtonProps:n,children:o,testID:u="standard-modal",...b}=s,{isOpen:q,onRequestClose:x}=b,{tokens:j}=g(),{standardModal:m}=j,v=O.useId();return e.jsx(w,{...b,"aria-labelledby":i?v:void 0,testID:u,children:q&&e.jsx(W,{children:({borderVisible:V,setBorderVisible:B,headingRef:C,headingVisible:I})=>e.jsxs(z,{children:[e.jsxs(K,{$borderVisible:V,children:[e.jsx(J,{$headingVisible:I,inert:!0,children:i&&e.jsx(t,{noWrap:!0,component:"p",variant:m.header.heading.typography.variant,fontFamily:m.header.heading.typography.fontFamily,children:i})}),e.jsx(X,{children:e.jsx(U,{"aria-label":H()?`${i}, dialog, Close modal`:i,testID:`${u}-close-button`,...n,onClick:x,variant:m.header.closeButton.variant,children:e.jsx(k,{})})})]}),e.jsx(R,{onChange:({topShadowVisible:D})=>{B(D)},children:e.jsxs(Z,{children:[i&&e.jsx(t,{ref:C,id:v,component:`h${a}`,variant:m.content.heading.typography.variant,fontFamily:m.content.heading.typography.fontFamily,"aria-label":G()?`${i}, dialog`:i,children:i}),e.jsx("div",{children:o})]})}),e.jsx(ee,{"aria-hidden":"true"})]})})})}h.displayName="StandardModal";const{useArgs:ie}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/Surfaces/StandardModal",component:h,render:function(i){const[{isOpen:a},n]=ie();function o(){n({isOpen:!0}),f("openModal")()}function u(){n({isOpen:!1}),f("modalClosed")()}return e.jsxs(e.Fragment,{children:[e.jsx(Y,{variant:"primary",onClick:o,children:"Open Modal"}),e.jsx(h,{...i,isOpen:a,onRequestClose:u})]})},argTypes:{onRequestClose:{control:{disable:!0}},heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:F},tabletWidth:{control:{type:"number"}},children:{control:{disable:!0}}},args:{isOpen:!1}},c={args:{heading:"Short modal content",children:e.jsx(t,{variant:"bodyM",children:"This is the content"})}},d={args:{heading:"Long modal content",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),e.jsx(t,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}},p={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{component:"h2",variant:"titleM",fontFamily:"OpenSansSemiBold",style:{marginBottom:12},children:"Custom Heading"}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),e.jsx(t,{variant:"bodyM",style:{marginBottom:12},children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),e.jsx(t,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."})]})}};var y,E,M;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    heading: "Short modal content",
    children: <Typography variant="bodyM">This is the content</Typography>
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,N,$;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...($=(N=d.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var T,A,P;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <>
        <Typography component="h2" variant="titleM" fontFamily="OpenSansSemiBold" style={{
        marginBottom: 12
      }}>
          Custom Heading
        </Typography>

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
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const te=["Basic","LongContent","WithCustomHeading"],be=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,LongContent:d,WithCustomHeading:p,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{c as B,d as L,be as S,p as W};
