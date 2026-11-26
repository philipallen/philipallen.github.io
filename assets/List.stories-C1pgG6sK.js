import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{f as i}from"./index-BqWt56HC.js";import{h as Oe,i as Re,j as Me,k as Pe,l as Ue,m as Fe,n as Ve,o as We,p as qe,T as g}from"./index-WPiYv3Ve.js";import{L as ze}from"./Link-DBZ-8t3B.js";import{r as c}from"./index-BVaTkfsr.js";import{$ as Ge}from"./VisuallyHidden-OXTKoEg5.js";import{L as Ke}from"./LinkWithIcon-B6NmO8n_.js";import{T as F}from"./Typography-Cewaurru.js";import{a as v,u as k,i as R,p as z}from"./index-BRwMcuml.js";const ke=Symbol.for("@boi/react-components/List"),De=c.createContext(null),q=c.createContext(null),M=c.createContext(null),V=e=>c.isValidElement(e)&&typeof e.type=="function"&&ke in e.type,Qe=e=>c.isValidElement(e)&&e.type===c.Fragment,Ye=v.div`
  position: absolute;
  inset: 0;
  margin: 0;
  overflow: hidden;
  color: transparent;
  user-select: none;
  pointer-events: none;
  text-indent: -9999px;
`,He="text";function Ce({label:e}){return n.jsx(Ye,{role:He,children:e})}Ce.displayName="ListItemAccessibleName";const _e={1:qe,2:We,3:Ve,4:Fe,5:Ue,6:Pe,7:Me,8:Re,9:Oe},Xe=e=>e in _e,Ze=e=>Xe(e)?_e[e]:void 0;function Ee({variant:e,color:t,testID:o,icon:r,position:a}){const{tokens:{list:s}}=k(),d=e==="icon"&&!r;switch(c.useEffect(()=>{},[d]),e){case"icon":return r?n.jsx(r,{width:s.icon.width,height:s.icon.height,color:t,"data-testid":`${o}-${i.ICON_TEST_ID}`,"aria-hidden":!0}):null;case"numbered":{const p=a===void 0?void 0:Ze(a);return p?n.jsx(p,{width:s.icon.width,height:s.icon.height,color:t,"data-testid":`${o}-${i.NUMBER_TEST_ID}`,"aria-hidden":!0}):null}case"bulleted":return n.jsx(F,{variant:"bodyM",component:"span",color:t,testID:`${o}-${i.BULLET_TEST_ID}`,"aria-hidden":!0,children:i.BULLET_CHARACTER})}}Ee.displayName="ListItemIcon";const Je=e=>typeof e=="string"||typeof e=="number",et=e=>{if(!e.every(Je))return null;const t=e.join("").trim();return t===""?null:t},tt=e=>{const t=[],o=[];return c.Children.toArray(e).forEach(r=>{V(r)?o.push(r):t.push(r)}),{description:t,nestedLists:o}},nt=({children:e,body:t,link:o,testID:r})=>{const a=c.useContext(De),s=c.useContext(M),{tokens:{list:d}}=k(),p=a!==null&&s===null;if(c.useEffect(()=>{},[p]),a===null)throw new Error(i.ITEM_OUTSIDE_LIST_ERROR);const u=r??(s==null?void 0:s.testID)??`${a.testID}-${i.ITEM_TEST_ID}`,S=d.color[a.color],{description:l,nestedLists:I}=tt(e),m=et(l),f=typeof t=="string"&&t!==""?t:void 0,x=m===null?null:i.getItemLabel({label:m,body:f,variant:a.variant,position:s==null?void 0:s.position}),T=x===null&&a.variant==="numbered"&&s?`${i.getNumberPrefix(s.position)} `:null,{text:h,...b}=o??{text:""};return{spacingBefore:i.getItemSpacing({variant:a.variant,isNested:a.isNested,position:s==null?void 0:s.position}),variant:a.variant,isSemiBold:a.isSemiBold,position:s==null?void 0:s.position,itemTestID:u,color:S,bodyColor:d.color.body,numberPrefix:T,accessibleName:x,isBodyInAccessibleName:x!==null&&f!==void 0,description:l,nestedLists:I,nestedContextValue:{testID:`${u}-${i.NESTED_TEST_ID}`,isTooDeep:a.isNested},linkText:h,linkProps:b}},st=v.li`
  ${({$spacing:e})=>{const{list:t}=k().tokens;return R`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: ${t.item.gap};
      position: relative;
      margin: ${e?`${t.item.spacing[e]} 0 0`:"0"};
      line-height: initial;
    `}}
`,ot=v.div`
  ${()=>{const{list:e,typography:t}=k().tokens;return R`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: ${e.leading.width};
      font-size: ${z(t.fontSize.bodyM)};
      line-height: ${z(e.leading.height)};

      /* Zero-width strut: keeps the slot one rendered bodyM line tall under text-only zoom. */
      &::before {
        content: "\\200B";
        width: 0;
      }
    `}}
`,at=v.div`
  ${()=>{const{list:e}=k().tokens;return R`
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      gap: ${e.content.gap};
    `}}
`,it=v.div`
  /* Stacks above the absolutely positioned accessible-name overlay so the link stays clickable. */
  position: relative;
  display: flex;
  align-self: flex-start;
`,rt=v.div`
  ${()=>{const{list:e}=k().tokens;return R`
      /* Stacks above the absolutely positioned accessible-name overlay so nested content stays interactive. */
      position: relative;
      margin-left: calc(-1 * ${e.nested.offset});
    `}}
`;function y({children:e,icon:t,body:o,link:r,id:a,testID:s}){const{spacingBefore:d,variant:p,isSemiBold:u,position:S,itemTestID:l,color:I,bodyColor:m,numberPrefix:f,accessibleName:x,isBodyInAccessibleName:T,description:h,nestedLists:b,nestedContextValue:we,linkText:Ae,linkProps:$e}=nt({children:e,body:o,link:r,testID:s}),P=x!==null;return n.jsxs(st,{id:a,role:"listitem","data-testid":l,$spacing:d,children:[P?n.jsx(Ce,{label:x}):null,n.jsx(ot,{"aria-hidden":P||void 0,children:n.jsx(Ee,{variant:p,color:I,testID:l,icon:t,position:S})}),n.jsxs(at,{children:[n.jsxs(F,{variant:"bodyM",color:I,fontFamily:u?"OpenSansSemiBold":void 0,testID:`${l}-${i.DESCRIPTION_TEST_ID}`,"aria-hidden":P||void 0,children:[f?n.jsx(Ge,{children:f}):null,n.jsx(M.Provider,{value:null,children:h})]}),o?n.jsx(F,{variant:"bodyM",color:m,testID:`${l}-${i.BODY_TEST_ID}`,"aria-hidden":T||void 0,children:o}):null,r?n.jsx(it,{children:n.jsx(Ke,{...$e,variant:"bodyM",testID:`${l}-${i.LINK_TEST_ID}`,children:Ae})}):null,b.length>0?n.jsx(rt,{children:n.jsx(q.Provider,{value:we,children:n.jsx(M.Provider,{value:null,children:b})})}):null]})]})}y.displayName="ListItem";const U=e=>c.isValidElement(e)&&e.type===y,ct=({variant:e,color:t,isSemiBold:o,testID:r,nodes:a})=>{const s=c.useContext(q);s&&(e!=="bulleted"||s.isTooDeep);const d=s!==null,p=r??(s==null?void 0:s.testID)??i.DEFAULT_TEST_ID,u=a.filter(U).length,S=e==="numbered"?i.MAX_COUNTER_ICON:u,l=Math.min(u,S),I=u>l;c.useEffect(()=>{},[I]);const m=a.some(V),f=a.some(h=>!U(h)&&!V(h)&&!Qe(h));c.useEffect(()=>{},[m]),c.useEffect(()=>{},[f]);let x=0;const T=[];return a.forEach(h=>{if(!U(h)){T.push({node:h});return}const b=x;x+=1,!(b>=l)&&T.push({node:h,itemContext:{position:b+1,testID:`${p}-${i.ITEM_TEST_ID}-${String(b)}`}})}),{isEmpty:u===0,listTestID:p,listContext:{variant:e,color:d?i.NESTED_COLOR:t,isSemiBold:!d&&o,isNested:d,testID:p},entries:T}},Ne=R`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`,lt=v.ul`
  ${Ne}
`,dt=v.ol`
  ${Ne}
`,pt=e=>e.map((t,o)=>n.jsxs(y,{id:t.id,testID:t.testID,icon:"icon"in t?t.icon:void 0,body:t.body,link:t.link,children:[t.description,t.nestedList&&t.nestedList.length>0?n.jsx(L,{variant:"bulleted",data:t.nestedList}):null]},t.id??o));function L({variant:e=i.DEFAULT_VARIANT,color:t=i.DEFAULT_COLOR,isSemiBold:o=!1,testID:r,"aria-label":a,data:s,children:d}){const{isEmpty:p,listTestID:u,listContext:S,entries:l}=ct({variant:e,color:t,isSemiBold:o,testID:r,nodes:c.Children.toArray(s?pt(s):d)});if(p)return null;const I=e==="numbered"?dt:lt;return n.jsx(De.Provider,{value:S,children:n.jsx(q.Provider,{value:null,children:n.jsx(I,{role:"list","aria-label":a,"data-testid":u,children:l.map(({node:m,itemContext:f})=>f&&c.isValidElement(m)?n.jsx(M.Provider,{value:f,children:m},m.key):m)})})})}L.displayName="List";Object.assign(L,{[ke]:!0});const{useArgs:ut}=__STORYBOOK_MODULE_PREVIEW_API__,mt={title:"Components/Data Display/List",component:L,args:{variant:i.DEFAULT_VARIANT,color:i.DEFAULT_COLOR,isSemiBold:!1},argTypes:{variant:{control:{type:"select"},options:i.VARIANTS},color:{control:{type:"select"},options:i.COLORS},data:{control:{type:"object"}},children:{table:{disable:!0}}}},Be={data:{table:{disable:!0}}},W=[{description:"Skip up to two payments a year"},{description:"Choose which payment to skip"},{description:"Repay the skipped amount over the remaining term"}],ht=[{description:"Skip up to two payments a year",icon:g},{description:"Choose which payment to skip",icon:g},{description:"Repay the skipped amount over the remaining term",icon:g}],yt=[{description:"Download the Bank of Ireland app"},{description:"Sign in with your 365 online details",link:{text:"Visit app store",href:"https://example.com/",target:"_blank"}},{description:"Follow the instructions"}],gt=[{description:"Request a payment break",nestedList:[{description:"Up to two payments a year"},{description:"No fees for skipping a payment"}]},{description:"Change your repayment date"}],je=[{icon:g,description:"Skip up to two payments a year"},{icon:g,description:"Request a payment break"},{icon:g,description:"Change your repayment date"}],ft=[{icon:g,description:"Request a payment break",nestedList:[{description:"Up to two payments a year"},{description:"No fees for skipping a payment"}]},{icon:g,description:"Change your repayment date",nestedList:[{description:"Choose a new date"},{description:"Confirm the change"}]}],xt=[{description:"Search for Bank of Ireland app in your app store",link:{text:"Visit app store",href:"https://example.com/",target:"_blank"}},{description:"Once downloaded, follow the instructions",body:"Body copy text"},{description:"Sign in and start banking"}],D={args:{data:W},render:function(t){const[{variant:o},r]=ut();return c.useEffect(()=>{r(o==="icon"?{data:ht}:{data:W})},[o,r]),n.jsx(L,{...t})}},C={args:{color:"base500",data:W}},_={args:{data:[{description:n.jsxs(n.Fragment,{children:["Skip up to ",n.jsx("strong",{children:"two payments"})," a year"]})},{description:n.jsxs(n.Fragment,{children:["Find out more in our ",n.jsx(ze,{href:"https://example.com/",children:"FAQs"})]})}]}},E={args:{data:yt}},N={args:{data:gt}},B={args:{variant:"icon",data:je}},j={args:{variant:"icon",color:"base500",isSemiBold:!0,data:je}},w={args:{variant:"icon",color:"base500",isSemiBold:!0,data:ft}},A={args:{variant:"numbered",color:"base500",isSemiBold:!0,data:xt}},$={argTypes:Be,args:{variant:"numbered"},render:({variant:e,color:t,isSemiBold:o})=>n.jsxs(L,{variant:e,color:t,isSemiBold:o,children:[n.jsx(y,{children:"Search for Bank of Ireland app in your app store"}),n.jsx(y,{link:{text:"Visit app store",href:"https://example.com/",target:"_blank"},children:"Download the app"}),n.jsx(y,{body:"Body copy text",children:"Once downloaded, follow the instructions"})]})},O={argTypes:Be,args:{variant:"icon"},render:({variant:e,color:t,isSemiBold:o})=>n.jsxs(L,{variant:e,color:t,isSemiBold:o,children:[n.jsx(y,{icon:g,children:"Skip up to two payments a year"}),n.jsxs(y,{icon:g,children:["Request a payment break",n.jsxs(L,{variant:"bulleted",children:[n.jsx(y,{children:"Up to two payments a year"}),n.jsx(y,{children:"No fees for skipping a payment"})]})]}),n.jsx(y,{icon:g,children:"Change your repayment date"})]})};var G,K,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: bulletedData
  },
  render: function Render(args) {
    const [{
      variant
    }, updateArgs] = useArgs();
    useEffect(() => {
      if (variant === "icon") {
        updateArgs({
          data: bulletedDataWithIcons
        });
      } else {
        updateArgs({
          data: bulletedData
        });
      }
    }, [variant, updateArgs]);
    return <List {...args} />;
  }
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,H,X;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: "base500",
    data: bulletedData
  }
}`,...(X=(H=C.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var Z,J,ee;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: [{
      description: <>
            Skip up to <strong>two payments</strong> a year
          </>
    }, {
      description: <>
            Find out more in our <Link href="https://example.com/">FAQs</Link>
          </>
    }]
  }
}`,...(ee=(J=_.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,ne,se;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: bulletedLinkData
  }
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ae,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    data: bulletedNestedData
  }
}`,...(ie=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,ce,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: "icon",
    data: iconData
  }
}`,...(le=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,ue;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: "icon",
    color: "base500",
    isSemiBold: true,
    data: iconData
  }
}`,...(ue=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,ye;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: "icon",
    color: "base500",
    isSemiBold: true,
    data: iconNestedData
  }
}`,...(ye=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ge,fe,xe;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: "numbered",
    color: "base500",
    isSemiBold: true,
    data: numberedData
  }
}`,...(xe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Ie,be,Le;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  argTypes: composedArgTypes,
  args: {
    variant: "numbered"
  },
  render: ({
    variant,
    color,
    isSemiBold
  }) => <List variant={variant} color={color} isSemiBold={isSemiBold}>
      <ListItem>Search for Bank of Ireland app in your app store</ListItem>
      <ListItem link={{
      text: "Visit app store",
      href: "https://example.com/",
      target: "_blank"
    }}>
        Download the app
      </ListItem>
      <ListItem body="Body copy text">
        Once downloaded, follow the instructions
      </ListItem>
    </List>
}`,...(Le=(be=$.parameters)==null?void 0:be.docs)==null?void 0:Le.source}}};var ve,Se,Te;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  argTypes: composedArgTypes,
  args: {
    variant: "icon"
  },
  render: ({
    variant,
    color,
    isSemiBold
  }) => <List variant={variant} color={color} isSemiBold={isSemiBold}>
      <ListItem icon={TickIcon}>Skip up to two payments a year</ListItem>
      <ListItem icon={TickIcon}>
        Request a payment break
        <List variant="bulleted">
          <ListItem>Up to two payments a year</ListItem>
          <ListItem>No fees for skipping a payment</ListItem>
        </List>
      </ListItem>
      <ListItem icon={TickIcon}>Change your repayment date</ListItem>
    </List>
}`,...(Te=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};const It=["Bulleted","BulletedDarkGrey","BulletedRichText","BulletedWithLink","BulletedNested","Icon","IconDarkGreySemiBold","IconNested","Numbered","Composed","ComposedNested"],Et=Object.freeze(Object.defineProperty({__proto__:null,Bulleted:D,BulletedDarkGrey:C,BulletedNested:N,BulletedRichText:_,BulletedWithLink:E,Composed:$,ComposedNested:O,Icon:B,IconDarkGreySemiBold:j,IconNested:w,Numbered:A,__namedExportsOrder:It,default:mt},Symbol.toStringTag,{value:"Module"}));export{D as B,$ as C,B as I,Et as L,A as N,C as a,_ as b,E as c,N as d,j as e,w as f,O as g};
