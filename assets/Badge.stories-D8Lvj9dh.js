import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as Q}from"./index-BVaTkfsr.js";import{u as g,i as E,a as m,p as _}from"./index-BRwMcuml.js";import{n as r}from"./index-BqWt56HC.js";import{u as J,v as I,w as ee,x as te,r as A}from"./index-WPiYv3Ve.js";import{T as ae}from"./Typography-Cewaurru.js";const re=m.div`
  ${({$variant:a,$status:t,$color:s})=>{const{tokens:c}=g(),{badge:o}=c,{stroke:i,padding:d}=o,l=a==="decorative",w=l?i.color.decorative[s]:i.color.status[t],y=l?o.backgroundColor.decorative[s]:o.backgroundColor.status[t],j=l?o.color.decorative[s]:o.color.status[t],C=l?d.right.decorative:d.right.default;return E`
      display: inline-flex;
      gap: ${o.gap};
      align-items: flex-start;
      align-self: baseline;
      box-sizing: border-box;
      max-width: 100%;
      padding-top: calc(${d.top} - ${i.width});
      padding-bottom: calc(${d.bottom} - ${i.width});
      padding-left: calc(${d.left} - ${i.width});
      padding-right: calc(${C} - ${i.width});
      border: ${i.width} ${i.style} ${w};
      border-radius: ${i.radius};
      background-color: ${y};
      color: ${j};
    `}}
`,ne=m(ae)`
  min-width: 0;
  white-space: pre-line;
  word-break: normal;
  overflow-wrap: anywhere;
  hyphens: none;
`,se=m.div`
  ${({$size:a})=>{const{tokens:t}=g(),{badge:s,typography:c}=t,o=_(s.icon.size[a]);return E`
      display: flex;
      flex-shrink: 0;
      align-items: center;
      align-self: flex-start;
      font-size: ${_(c.fontSize[a])};
      line-height: ${o};

      /* Zero-width strut: keeps the slot one rendered label line tall under text-only zoom. */
      &::before {
        content: "\\200B";
        width: 0;
      }

      svg {
        display: block;
        width: ${o};
        height: ${o};
      }
    `}}
`;function n(a){const{text:t,size:s=r.DEFAULT_SIZE,testID:c=r.DEFAULT_TEST_ID,variant:o=r.DEFAULT_VARIANT,status:i=r.DEFAULT_STATUS,color:d=r.DEFAULT_COLOR,icon:l,...w}=a,{tokens:y}=g(),{badge:j}=y;if(!t.trim())return null;const C=o==="decorative"?l:void 0;return e.jsxs(re,{...w,$variant:o,$status:i,$color:d,"data-testid":c,children:[!!C&&e.jsx(se,{$size:s,"aria-hidden":!0,"data-testid":`${c}-${r.ICON_TEST_ID_SUFFIX}`,children:e.jsx(C,{})}),e.jsx(ne,{component:"span",color:"inherit",variant:s,fontFamily:j.fontFamily,children:t})]})}n.displayName="Badge";const{useArgs:oe}=__STORYBOOK_MODULE_PREVIEW_API__,T=m.div`
  ${()=>{const{tokens:a}=g(),{spacing:t}=a;return E`
      display: flex;
      flex-direction: column;
      gap: ${t.s16};
    `}}
`,b=m.div`
  ${()=>{const{tokens:a}=g(),{spacing:t}=a;return E`
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: ${t.s16};
    `}}
`,B=m.div`
  ${()=>{const{tokens:a}=g(),{spacing:t}=a;return E`
      width: ${t.s136};
    `}}
`,ie={title:"Components/Data Display/Badge",component:n,argTypes:{text:{control:{type:"text"}},size:{control:{type:"select"},options:r.SIZES},status:{if:{arg:"variant",eq:"status"},control:{type:"select"},options:r.STATUSES},color:{if:{arg:"variant",eq:"decorative"},control:{type:"select"},options:r.COLORS},variant:{control:{type:"select"},options:r.VARIANTS},icon:{if:{arg:"variant",eq:"decorative"},control:{type:"select"},mapping:Object.entries({...A}).reduce((a,[t,s])=>({...a,[t]:s}),{}),options:Object.keys(A)},testID:{table:{disable:!0}}},args:{text:"Active",size:r.DEFAULT_SIZE}},u={args:{variant:"status",status:r.DEFAULT_STATUS},render:function(t){const[{variant:s},c]=oe();return Q.useEffect(()=>{c(s==="decorative"?{...p.args}:{...u.args})},[s,c]),e.jsx(n,{...t,text:"Label"})}},x={args:{variant:"status",status:"default"},argTypes:{icon:{table:{disable:!0}},color:{table:{disable:!0}}}},v={parameters:{controls:{disable:!0}},render:()=>e.jsx(T,{children:r.SIZES.map(a=>e.jsx(b,{children:r.STATUSES.map(t=>e.jsx(n,{status:t,size:a,text:t},t))},a))})},p={args:{variant:"decorative",text:"Lowest rate",color:r.DEFAULT_COLOR,icon:J},argTypes:{status:{table:{disable:!0}}}},S={parameters:{controls:{disable:!0}},render:()=>e.jsx(T,{children:r.SIZES.map(a=>e.jsx(b,{children:r.COLORS.map(t=>e.jsx(n,{variant:"decorative",color:t,size:a,icon:I,text:t},t))},a))})},f={parameters:{controls:{disable:!0}},render:()=>e.jsxs(T,{children:[e.jsxs(b,{children:[e.jsx(n,{text:"Offline"}),e.jsx(n,{text:"Pending",status:"outline"}),e.jsx(n,{text:"Active",status:"positive"}),e.jsx(n,{text:"Incomplete",status:"warning"}),e.jsx(n,{text:"Failed",status:"negative"})]}),e.jsxs(b,{children:[e.jsx(n,{variant:"decorative",icon:I,text:"Secured"}),e.jsx(n,{variant:"decorative",icon:J,color:"hueB",text:"Lowest rate"}),e.jsx(n,{variant:"decorative",icon:ee,color:"hueC",text:"Cashback offer"}),e.jsx(n,{variant:"decorative",icon:te,color:"hueD",text:"Limited time"})]})]})},h={parameters:{controls:{disable:!0}},render:()=>e.jsx(T,{children:r.SIZES.map(a=>e.jsxs(b,{children:[e.jsx(B,{children:e.jsx(n,{size:a,text:"Exclusive Electric Picnic tickets"})}),e.jsx(B,{children:e.jsx(n,{variant:"decorative",icon:I,size:a,text:"Exclusive Electric Picnic tickets"})})]},a))})};var k,D,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "status",
    status: CoreBadge.DEFAULT_STATUS
  },
  render: function Render(args) {
    const [{
      variant
    }, updateArgs] = useArgs();
    useEffect(() => {
      if (variant === "decorative") {
        updateArgs({
          ...Decorative.args
        });
      } else {
        updateArgs({
          ...Default.args
        });
      }
    }, [variant, updateArgs]);
    return <Badge {...args} text="Label" />;
  }
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var L,R,O;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "status",
    status: "default"
  },
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var z,U,F;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Column>
      {CoreBadge.SIZES.map(size => <Row key={size}>
          {CoreBadge.STATUSES.map(status => <Badge key={status} status={status} size={size} text={status} />)}
        </Row>)}
    </Column>
}`,...(F=(U=v.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var P,Z,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "decorative",
    text: "Lowest rate",
    color: CoreBadge.DEFAULT_COLOR,
    icon: icons.ThumbsUpIcon
  },
  argTypes: {
    status: {
      table: {
        disable: true
      }
    }
  }
}`,...(N=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var W,q,V;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Column>
      {CoreBadge.SIZES.map(size => <Row key={size}>
          {CoreBadge.COLORS.map(color => <Badge key={color} variant="decorative" color={color} size={size} icon={icons.ShieldIcon} text={color} />)}
        </Row>)}
    </Column>
}`,...(V=(q=S.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var M,K,X;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Column>
      <Row>
        <Badge text="Offline" />
        <Badge text="Pending" status="outline" />
        <Badge text="Active" status="positive" />
        <Badge text="Incomplete" status="warning" />
        <Badge text="Failed" status="negative" />
      </Row>
      <Row>
        <Badge variant="decorative" icon={icons.ShieldIcon} text="Secured" />
        <Badge variant="decorative" icon={icons.ThumbsUpIcon} color="hueB" text="Lowest rate" />
        <Badge variant="decorative" icon={icons.EuroCoinIcon} color="hueC" text="Cashback offer" />
        <Badge variant="decorative" icon={icons.PendingIcon} color="hueD" text="Limited time" />
      </Row>
    </Column>
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,G,H;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Column>
      {CoreBadge.SIZES.map(size => <Row key={size}>
          <NarrowContainer>
            <Badge size={size} text="Exclusive Electric Picnic tickets" />
          </NarrowContainer>
          <NarrowContainer>
            <Badge variant="decorative" icon={icons.ShieldIcon} size={size} text="Exclusive Electric Picnic tickets" />
          </NarrowContainer>
        </Row>)}
    </Column>
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ce=["Default","Status","Statuses","Decorative","Colors","Examples","Wrapping"],xe=Object.freeze(Object.defineProperty({__proto__:null,Colors:S,Decorative:p,Default:u,Examples:f,Status:x,Statuses:v,Wrapping:h,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{xe as B,S as C,u as D,f as E,x as S,h as W,p as a,v as b};
