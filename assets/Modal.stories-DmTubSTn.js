import{j as i}from"./jsx-runtime-DQ32znRX.js";import{v as w}from"./v4-CQkTLCs1.js";import{a as g,u as h,b as y}from"./index-BW2nVlX_.js";import{C as $}from"./index-ef8Z-xiF.js";import{u as N}from"./floating-ui.react-BezaurJz.js";import{r as m}from"./index-DH5ua8nC.js";import{I as C}from"./IconButton-BdnLi7sC.js";import{T as r}from"./Typography-DLg3KiKL.js";import{B as k}from"./Button-CXJFxKg-.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:B}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var L="storybook/actions",F=`${L}/action-event`,W={depth:10,clearOnStoryChange:!0,limit:50},R=(t,e)=>{let a=Object.getPrototypeOf(t);return!a||e(a)?a:R(a,e)},z=t=>!!(typeof t=="object"&&t&&R(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),H=t=>{if(z(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let a=Object.getOwnPropertyDescriptor(e,"view"),s=a==null?void 0:a.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...a,value:Object.create(s.constructor.prototype)}),e}return t},U=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(t,e={}){let a={...W,...e},s=function(...u){var l,E;if(e.implicit){let _=(l="__STORYBOOK_PREVIEW__"in M?M.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(_){let c=!((E=window==null?void 0:window.FEATURES)!=null&&E.disallowImplicitActionsInRenderV8),O=new B({phase:_.phase,name:t,deprecated:c});if(c)console.warn(O);else throw O}}let o=V.getChannel(),b=U(),v=5,n=u.map(H),x=u.length>1?n:n[0],f={id:b,count:0,data:{name:t,args:x},options:{...a,maxDepth:v+(a.depth||3),allowFunction:a.allowFunction||!1}};o.emit(F,f)};return s.isAction=!0,s}const K=g.dialog`
  ${()=>{const{tokens:t}=h(),{modal:e}=t;return y`
      border: unset;
      padding: unset;
      margin: unset;
      border-radius: ${e.radius};
      background-color: ${e.backgroundColor};

      height: fit-content;
      margin: auto;
      overflow: hidden;

      @media (min-width: ${e.desktop.minWidth}) {
        max-width: ${e.desktop.maxWidth};
        max-height: ${e.desktop.maxHeight};
        min-height: ${e.desktop.minHeight};
      }

      @media (max-width: ${e.desktop.minWidth}) {
        max-width: ${e.mobile.maxWidth};
        min-width: ${e.mobile.minWidth};
        max-height: 90%;
        min-height: ${e.mobile.minHeight};
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}}
`,Q=g.div`
  ${()=>{const{tokens:t}=h(),{modal:e}=t;return y`
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: ${e.desktop.maxHeight};
      padding-bottom: ${e.desktop.paddingBottom};
      @media (max-width: ${e.desktop.minWidth}) {
        padding-bottom: unset;
      }
    `}}
`,Y=g.header`
  ${()=>{const{tokens:t}=h(),{modal:e}=t;return y`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: ${e.backgroundColor};
      padding: ${e.header.padding};
      border-bottom-width: ${e.header.strokeBottom.width};
      border-bottom-style: ${e.header.strokeBottom.style};
      border-bottom-color: ${e.header.strokeBottom.color};
    `}}
`,G=g.div`
  flex-shrink: 0;
  margin: -8px -8px -8px 0;
`,J=g.div`
  ${()=>{const{tokens:t}=h(),{modal:{content:e}}=t;return y`
      overflow-y: scroll;
      min-height: 200px;
      padding: ${e.paddingBottom} ${e.paddingHorizontal};
      box-shadow: inset 0px 7px 9px -7px ${e.innerShadowTop.color};
    `}}
`,q=m.forwardRef((t,e)=>{const{isOpen:a,onRequestClose:s,title:u,children:o,testID:b="modal"}=t,v=m.useId(),n=m.useRef(null),x=N([n,e]);return m.useEffect(()=>{n.current&&(a&&!n.current.open?n.current.showModal():!a&&n.current.open&&n.current.close())},[a,n]),m.useEffect(()=>{function f(){s==null||s()}if(n.current)return n.current.addEventListener("close",f),()=>{var l;(l=n.current)==null||l.removeEventListener("close",f)}},[n,s]),i.jsx(K,{ref:x,"data-testid":b,"aria-labelledby":v,children:i.jsxs(Q,{children:[i.jsxs(Y,{children:[i.jsx(X,{id:v,children:u}),i.jsx(G,{children:i.jsx(C,{testID:`${b}-close-button`,onClick:s,children:i.jsx($,{})})})]}),i.jsx(J,{children:o})]})})});q.displayName="Modal";function X(t){const{tokens:{modal:e}}=h();return i.jsx(r,{id:t.id,variant:e.header.title.variant,fontFamily:e.header.title.fontFamily,children:t.children})}q.__docgenInfo={description:"",methods:[],displayName:"Modal"};const{useArgs:Z}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Components/Surfaces/Modal",component:q,render:function(e){const[{isOpen:a},s]=Z();function u(){s({isOpen:!0}),j("openModal")()}function o(){s({isOpen:!1}),j("modalClosed")()}return i.jsxs(i.Fragment,{children:[i.jsx(k,{variant:"primary",text:"Open Modal",disabled:a,onClick:u}),i.jsx(q,{...e,isOpen:a,onRequestClose:o})]})},argTypes:{children:{control:{disable:!0}}},args:{isOpen:!1}},d={args:{title:"Short Content Modal",children:i.jsx(i.Fragment,{children:i.jsx("div",{style:{alignItems:"center"},children:i.jsx(r,{variant:"bodyM",children:"This is the content"})})})}},p={args:{title:"Long Content Modal",children:i.jsx(i.Fragment,{children:i.jsxs("div",{style:{alignItems:"center"},children:[i.jsx(r,{variant:"bodyM",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Consectetur a erat nam at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc sed. Fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim. Enim lobortis scelerisque fermentum dui faucibus in ornare quam."}),i.jsx(r,{variant:"bodyM",children:"Penatibus et magnis dis parturient montes nascetur. Purus in massa tempor nec feugiat nisl. Sed sed risus pretium quam. Enim nunc faucibus a pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus. Malesuada fames ac turpis egestas. Libero nunc consequat interdum varius sit amet mattis. Nunc id cursus metus aliquam eleifend mi in. Elit pellentesque habitant morbi tristique. Venenatis tellus in metus vulputate eu scelerisque felis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. In pellentesque massa placerat duis ultricies. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Pharetra convallis posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas pretium aenean pharetra magna ac placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean pharetra magna ac. Quis enim lobortis scelerisque fermentum dui faucibus in."}),i.jsx(r,{variant:"bodyM",children:"Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum varius. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum morbi blandit cursus. Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna. Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis at erat pellentesque. Quisque sagittis purus sit amet volutpat consequat mauris. Nulla porttitor massa id neque aliquam."}),i.jsx(r,{variant:"bodyM",children:"Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis. Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor at auctor urna nunc id cursus. Turpis cursus in hac habitasse platea. Sodales neque sodales ut etiam sit amet nisl. Netus et malesuada fames ac turpis. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit. Magnis dis parturient montes nascetur ridiculus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor."}),i.jsx(r,{variant:"bodyM",children:"Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Et malesuada fames ac turpis egestas. Nulla malesuada pellentesque elit eget gravida. Elementum facilisis leo vel fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla. Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit ut tortor pretium. Tristique magna sit amet purus gravida quis blandit."}),i.jsx("span",{style:{fontSize:64,marginTop:"100%"},children:" 🥳"}),i.jsx("span",{style:{fontSize:96,marginTop:"100%"},children:" 🎊"}),i.jsx("span",{style:{fontSize:128,marginTop:"100%"},children:" 🎉"})]})})}};var S,T,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Short Content Modal",
    children: <>
        <div style={{
        alignItems: "center"
      }}>
          <Typography variant="bodyM">This is the content</Typography>
        </div>
      </>
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,A,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "Long Content Modal",
    children: <>
        <div style={{
        alignItems: "center"
      }}>
          <Typography variant="bodyM">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec
            ultrices tincidunt arcu non sodales neque. Consectetur a erat nam
            at. Ornare arcu odio ut sem nulla pharetra diam. Diam sollicitudin
            tempor id eu nisl nunc mi. Vel turpis nunc eget lorem dolor sed
            viverra ipsum. Quam quisque id diam vel quam elementum. Sed viverra
            tellus in hac habitasse platea dictumst vestibulum. Ipsum nunc
            aliquet bibendum enim facilisis. Dapibus ultrices in iaculis nunc
            sed. Fermentum leo vel orci porta non. Ut placerat orci nulla
            pellentesque dignissim. Enim lobortis scelerisque fermentum dui
            faucibus in ornare quam.
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
            pellentesque massa placerat duis ultricies. Vestibulum lorem sed
            risus ultricies tristique nulla aliquet enim. Pharetra convallis
            posuere morbi leo urna molestie. Gravida arcu ac tortor dignissim
            convallis aenean et tortor. Egestas pretium aenean pharetra magna ac
            placerat. Iaculis nunc sed augue lacus viverra. Pretium aenean
            pharetra magna ac. Quis enim lobortis scelerisque fermentum dui
            faucibus in.
          </Typography>
          <Typography variant="bodyM">
            Nunc vel risus commodo viverra maecenas accumsan lacus. Morbi enim
            nunc faucibus a pellentesque. Vivamus at augue eget arcu dictum
            varius. Cras semper auctor neque vitae tempus quam pellentesque nec
            nam. Massa id neque aliquam vestibulum morbi blandit cursus.
            Sagittis nisl rhoncus mattis rhoncus. Nisl vel pretium lectus quam
            id. Proin sed libero enim sed faucibus. Nascetur ridiculus mus
            mauris vitae. Sit amet nulla facilisi morbi tempus iaculis urna.
            Aliquam ut porttitor leo a diam sollicitudin. Eu lobortis elementum
            nibh tellus molestie nunc non. Id neque aliquam vestibulum morbi
            blandit cursus. Amet aliquam id diam maecenas ultricies. A iaculis
            at erat pellentesque. Quisque sagittis purus sit amet volutpat
            consequat mauris. Nulla porttitor massa id neque aliquam.
          </Typography>
          <Typography variant="bodyM">
            Pellentesque elit eget gravida cum. Etiam tempor orci eu lobortis.
            Viverra aliquet eget sit amet tellus cras. Adipiscing elit ut
            aliquam purus sit amet luctus venenatis lectus. Pellentesque massa
            placerat duis ultricies lacus sed turpis tincidunt id. Enim tortor
            at auctor urna nunc id cursus. Turpis cursus in hac habitasse
            platea. Sodales neque sodales ut etiam sit amet nisl. Netus et
            malesuada fames ac turpis. Pharetra magna ac placerat vestibulum
            lectus mauris ultrices. Nisi scelerisque eu ultrices vitae auctor
            eu. Egestas sed sed risus pretium. Nulla facilisi morbi tempus
            iaculis. Donec enim diam vulputate ut pharetra. Viverra vitae congue
            eu consequat ac felis donec. Amet nisl purus in mollis. Eu augue ut
            lectus arcu bibendum at varius. Adipiscing elit duis tristique
            sollicitudin nibh sit. Magnis dis parturient montes nascetur
            ridiculus. Non quam lacus suspendisse faucibus interdum posuere
            lorem ipsum dolor.
          </Typography>
          <Typography variant="bodyM">
            Dui accumsan sit amet nulla facilisi. Sodales ut eu sem integer
            vitae justo eget magna. Aliquet sagittis id consectetur purus ut
            faucibus. Nunc sed id semper risus in hendrerit gravida rutrum
            quisque. Et malesuada fames ac turpis egestas. Nulla malesuada
            pellentesque elit eget gravida. Elementum facilisis leo vel
            fringilla est ullamcorper eget. Eu tincidunt tortor aliquam nulla.
            Posuere urna nec tincidunt praesent semper feugiat. Fusce id velit
            ut tortor pretium. Tristique magna sit amet purus gravida quis
            blandit.
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
        </div>
      </>
  }
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const te=["Basic","LongContent"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,LongContent:p,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as B,p as L,me as M};
