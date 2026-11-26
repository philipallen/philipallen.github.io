import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{$ as k}from"./ProgressBar-Blkxmfkf.js";import{u as i,i as u,a as d}from"./index-BRwMcuml.js";import{T as y}from"./Typography-Cewaurru.js";import{r as p}from"./index-BVaTkfsr.js";const B=d.div`
  ${()=>{const{tokens:r}=i(),{progressBar:e}=r;return[u`
        display: flex;
        align-items: center;
        width: 100%;
        min-width: ${e.container.minWidth};
        gap: ${e.container.gap};
      `]}}
`,j=d.div`
  ${()=>{const{tokens:r}=i(),{progressBar:e}=r;return[u`
        flex-grow: 1;
        height: ${e.track.height};
        border-radius: ${e.track.borderRadius};
        background-color: ${e.track.backgroundColor};
        overflow: hidden;
      `]}}
`,w=d.div`
  ${({$percentage:r=0,$isAnimated:e})=>{const{tokens:a}=i(),{progressBar:n}=a;return[u`
        width: 100%;
        border-radius: ${n.fill.borderRadius};
        height: 100%;
        background-color: ${r===100?n.fill.backgroundColor.filled:n.fill.backgroundColor.default};

        transition: all cubic-bezier(0.5, 0, 0.5, 1) 300ms;
        transform: translateX(${r-100}%);

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `,!e&&u`
          transition: none;
        `]}}
`,C=d(y)`
  ${()=>{const{tokens:{progressBar:r}}=i();return u`
      color: ${r.label.color};
    `}}
`,A="progress";function g({testID:r=A,isAnimated:e=!0,...a}){const{tokens:{progressBar:n}}=i();return t.jsx(k,{"data-testid":r,...a,children:({percentage:o,valueText:m})=>{const c=a.valueLabel!==void 0?a.valueLabel:m;return t.jsxs(B,{children:[t.jsx(j,{children:t.jsx(w,{$isAnimated:e,$percentage:o})}),c&&t.jsx(C,{variant:n.label.typography.variant,fontFamily:n.label.typography.fontFamily,children:c})]})}})}g.displayName="ProgressBar";const P={title:"Components/Data Display/ProgressBar",component:g,argTypes:{value:{control:"number"},maxValue:{control:"number"},minValue:{control:"number"},valueLabel:{control:"text"},isAnimated:{control:"boolean"}},args:{value:50,"aria-label":"Aria Label",isAnimated:!0}},s={},l={args:{value:0,maxValue:100,minValue:0,isAnimated:!1},render:function(e){const[a,n]=p.useState(e.value||0),o=p.useRef(0);return p.useEffect(()=>{const m=setInterval(()=>{n(c=>{let f=c+1+Math.round(20*Math.random());return f>Number(e.maxValue)&&(o.current>5?(o.current=0,f=e.minValue||0):o.current+=1),f})},500);return()=>{clearInterval(m)}},[]),t.jsx(g,{...e,value:a})}};var v,b,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,V,$;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 0,
    maxValue: 100,
    minValue: 0,
    isAnimated: false
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value || 0);
    const overflowCount = useRef(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(curValue => {
          let nextValue = curValue + 1 + Math.round(20 * Math.random());
          if (nextValue > Number(args.maxValue)) {
            if (overflowCount.current > 5) {
              overflowCount.current = 0;
              nextValue = args.minValue || 0;
            } else {
              overflowCount.current += 1;
            }
          }
          return nextValue;
        });
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <ProgressBar {...args} value={value} />;
  }
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const R=["Basic","Animated"],I=Object.freeze(Object.defineProperty({__proto__:null,Animated:l,Basic:s,__namedExportsOrder:R,default:P},Symbol.toStringTag,{value:"Module"}));export{s as B,I as P};
