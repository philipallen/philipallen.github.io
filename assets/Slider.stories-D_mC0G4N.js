import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{fn as ae}from"./index-DeN4tkzB.js";import{r as w}from"./index-BVaTkfsr.js";import{$ as ne}from"./VisuallyHidden-8I7ZAGxa.js";import{S as d}from"./index-EybPYVoN.js";import{h as se,M as ie,P as le}from"./index-BVyJnF54.js";import{u as f,i as u,a as m}from"./index-BpMil6Tx.js";import{$ as ce,a as de,b as ue}from"./Slider-CV3OrebJ.js";import{T as pe}from"./Typography-G_YOndja.js";import{I as N}from"./IconButton-CC4dc0T7.js";const he=m.div`
  ${()=>{const{tokens:{slider:e}}=f();return u`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: ${e.track.padding};
    `}}
`,me=m.div`
  ${()=>{const{tokens:{slider:e}}=f();return u`
      width: 100%;

      .react-aria-Slider {
        display: grid;

        .react-aria-SliderTrack {
          position: relative;

          &:before {
            content: "";
            display: block;
            position: absolute;
          }
        }

        .react-aria-SliderThumb {
          width: ${e.thumb.size};
          height: ${e.thumb.size};
          border-radius: 50%;
          forced-color-adjust: none;

          &[data-focus-visible] {
            outline: ${e.thumb.focusRing.width} solid
              ${e.thumb.focusRing.color};
            outline-offset: ${e.thumb.focusRing.offset};
          }
        }

        &[data-orientation="horizontal"] {
          flex-direction: column;

          .react-aria-SliderTrack {
            height: ${e.thumb.size};
            width: 100%;

            &:before {
              height: ${e.track.size};
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
              background: ${e.track.color};
              border-radius: ${e.track.size};
            }
          }

          .react-aria-SliderThumb {
            top: 50%;
            cursor: pointer;

            & [data-primary-color] {
              color: ${e.thumb.primaryColor.base};
            }

            & [data-secondary-color] {
              color: ${e.thumb.secondaryColor.base};
            }

            &:hover [data-primary-color] {
              color: ${e.thumb.primaryColor.hover};
            }

            &:hover [data-secondary-color] {
              color: ${e.thumb.secondaryColor.hover};
            }

            &:active [data-primary-color] {
              color: ${e.thumb.primaryColor.active};
            }

            &:active [data-secondary-color] {
              color: ${e.thumb.secondaryColor.active};
            }
          }
        }
      }
    `}}
`,fe=m.div`
  ${()=>{const{tokens:{slider:e}}=f();return u`
      height: ${e.thumb.size};
      width: 100%;
      display: flex;
      position: relative;

      &:before {
        height: ${e.track.size};
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    `}}
`,be=m.div`
  ${({$notchAsPercent:e})=>{const{tokens:{slider:t}}=f();return u`
      width: ${e}%;
      border-right: ${t.notch.size} ${t.notch.color} solid;
    `}};
`,ge=m.div`
  width: 100%;
`,ve=m.div`
  ${({$leftPercent:e,$visualState:t})=>{const{tokens:r}=f(),{tooltip:o,slider:a}=r;return[u`
        left: ${e}%;
        position: relative;
        transform: translateX(-50%);

        width: 0;
        height: 0;
        border-left: ${a.tooltip.arrowWidth} solid transparent;
        border-right: 12px solid transparent;

        border-bottom: 12px solid ${o.backgroundColor};
      `,t=="hidden"&&u`
          visibility: hidden;
        `,t=="notdisplayed"&&u`
          display: none;
        `]}}
`,S=e=>!e||!e.length?!1:typeof e[0]!="number",xe=e=>e.sort((t,r)=>{const o=t.startValue-r.startValue;return o!==0?o:t.tooltip.localeCompare(r.tooltip)}),$e=(e,t,r)=>e.filter(o=>o.startValue>=t&&o.startValue<=r),Se=e=>{const t={},r=[];return e.forEach(o=>{const a=`${o.startValue}`;t[a]||(t[a]=!0,r.push(o))}),r},Ve=(e,t,r)=>{if(!r||!r.length)return;const o=xe(r),a=$e(o,e,t),s=Se(a);return s.length<a.length&&console.warn("duplicate notches have been discovered"),s},Ae=(e,t,r)=>{const a=r.sort((i,l)=>i-l).filter(i=>i>e&&i<t);return Array.from(new Set(a))},I=(e,t,r)=>{if(!(!r||!r.length))return S(r)?Ve(e,t,r):Ae(e,t,r)},ye=e=>e.filter(t=>!!t),je=({minValue:e=d.DEFAULT_MIN_VALUE,maxValue:t=d.DEFAULT_MAX_VALUE,notches:r})=>{if(!r||!r.length)return;const o=I(e,t,r),a=()=>S(o)?o.map(c=>c.startValue):o,s=t-e;let i=0;const l=a().map(c=>{const A=(c-e)/(s*.01)-i;return i+=A,c===0||i===100?void 0:A});return ye(l)},Q=({value:e,minValue:t=d.DEFAULT_MIN_VALUE,maxValue:r=d.DEFAULT_MAX_VALUE})=>{const o=e-t,a=r-t;return o/a*100},Te=(e,t)=>S(e)?t?"visible":"hidden":"notdisplayed";function C(e){return n.jsx(me,{children:n.jsx(ce,{...e})})}function _e(e){const t=je(e),{testID:r="slider"}=e;return n.jsx(fe,{"data-testid":`${r}-notches`,children:t==null?void 0:t.map((o,a)=>n.jsx(be,{$notchAsPercent:o},a))})}C.UI=e=>{const{notches:t,minValue:r=d.DEFAULT_MIN_VALUE,maxValue:o=d.DEFAULT_MAX_VALUE,testID:a="slider",tooltipText:s}=e,i=I(r,o,t),l=Q(e),c=Te(t,s);return n.jsxs(ge,{children:[n.jsxs(de,{children:[i&&n.jsx(_e,{...e}),n.jsx(ue,{children:n.jsx(se,{"aria-hidden":!0})})]}),n.jsx(ve,{$visualState:c,$leftPercent:l,"data-testid":`${a}-tooltip-arrow`})]})};const we=m.div`
  display: flex;
`,M=m.div`
  ${({$location:e,$sliderPercent:t})=>{const r=e=="left"?t:100-t;return u`
      flex-grow: ${r};
    `}}
`,Ce=m.div`
  ${({$isHidden:e})=>{const{tokens:t}=f(),{tooltip:r,slider:o}=t;return[u`
        min-width: ${o.tooltip.minWidth};
        border-radius: ${r.radius};
        padding-top: ${r.padding.top};
        padding-bottom: ${r.padding.bottom};
        padding-left: ${r.padding.left};
        padding-right: ${r.padding.right.default};
        background: ${r.backgroundColor};
        z-index: ${r.zIndex};
        position: relative;
        display: flex;
        justify-content: center;
        text-align: left;
      `,e&&u`
          visibility: hidden;
        `]}}
`,Z=({value:e,minValue:t=d.DEFAULT_MIN_VALUE,maxValue:r=d.DEFAULT_MAX_VALUE,notches:o})=>{var i;if(!S(o))return;const a=I(t,r,o);if(a[0]&&e<a[0].startValue)return"";let s;return a.every((l,c)=>{var p;return l.startValue>e?(s=(p=a[c-1])==null?void 0:p.tooltip,!1):!0}),s===void 0?(i=a[a.length-1])==null?void 0:i.tooltip:s},Ie=" ";function Le(e){const{notches:t,testID:r="slider"}=e;if(!S(t))return null;const{tokens:o}=f(),{tooltip:a}=o,s=Q(e),i=Z(e),l=i||Ie;return n.jsxs(we,{"data-testid":`${r}-tooltip`,children:[n.jsx(M,{$location:"left",$sliderPercent:s}),n.jsx(Ce,{$isHidden:!i,children:n.jsx(pe,{color:a.color,variant:a.typography.variant,fontFamily:a.typography.fontFamily,testID:`${r}-tooltip-text`,children:l})}),n.jsx(M,{$location:"right",$sliderPercent:s})]})}const T=w.forwardRef((e,t)=>{const{id:r,onChange:o,decrementButtonProps:a,incrementButtonProps:s,testID:i="slider",...l}=e,{step:c=d.DEFAULT_STEP,value:p,minValue:V=d.DEFAULT_MIN_VALUE,maxValue:A=d.DEFAULT_MAX_VALUE}=e,_=w.useId(),y=Z(e),L=y?`${p}, ${y}`:p.toString();function P(){return p+c}function k(){return p<=V}function E(){return P()>A}function te(){if(k())return;let h=p-c;h<V&&(h=V),o(h)}function re(){E()||o(P())}const oe=w.useCallback(h=>{h instanceof Array?h[0]&&o(h[0]):o(h)},[o]);return n.jsxs("div",{ref:t,"data-testid":i,children:[n.jsx(C,{...l,id:r||_,onChange:oe,tooltipText:y,"aria-label":L||void 0,children:n.jsxs(he,{children:[n.jsx("div",{children:n.jsx(N,{"aria-label":"Decrease value","aria-describedby":r||_,testID:`${i}-decrement-button`,...a,variant:"contained",onClick:te,"aria-disabled":k(),children:n.jsx(ie,{})})}),n.jsx(C.UI,{...l,tooltipText:y}),n.jsx("div",{children:n.jsx(N,{"aria-label":"Increase value","aria-describedby":r||_,testID:`${i}-increment-button`,...s,variant:"contained",onClick:re,"aria-disabled":E(),children:n.jsx(le,{})})})]})}),n.jsx(ne,{"aria-live":"assertive","aria-atomic":!0,children:L}),n.jsx(Le,{...e})]})});T.displayName="Slider";const j=(e,t)=>({startValue:e,tooltip:t}),{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,Pe={title:"Components/Inputs/Slider",component:T,render:function(t){const[{value:r},o]=ee();function a(s){t.onChange(s),o({value:s})}return n.jsx(T,{...t,value:r,onChange:a})},argTypes:{step:{control:"number"},value:{control:"number"},decrementButtonProps:{control:{disable:!0}},incrementButtonProps:{control:{disable:!0}}},args:{onChange:ae()}},b={args:{value:30,"aria-label":"Label for Slider"}},g={args:{value:2,minValue:1,maxValue:5,"aria-label":"Label for min / max Slider"}},v={args:{step:1e3,value:1e4,minValue:2e3,maxValue:64e3,notches:[15e3,25e3,58e3],"aria-label":"Label for 'notched' Slider"}},x={args:{step:1e3,value:1e4,minValue:2e3,maxValue:64e3,notches:[j(2e3,"APR of 6.5%  (subject to terms and conditions)"),j(15e3,"APR of 6%"),j(25e3,"APR of 5%"),j(58e3,"APR of 3.5% (subject to terms and conditions)")],"aria-label":"Label for 'notched' Slider with tooltips"}},$={args:{step:499,value:1,minValue:1,maxValue:65e3,"aria-label":"Label for 'variable stepped' Slider"},render:e=>{const[,t]=ee();function r(o){const a=o>=1?o:1,s=a<=2?1:0,i=a<=2?499:500;e.onChange(a),t({value:a}),t({step:i}),t({minValue:s})}return n.jsx(T,{...e,onChange:r})}};var D,U,R;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 30,
    "aria-label": "Label for Slider"
  }
}`,...(R=(U=b.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var B,z,F;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 2,
    minValue: 1,
    maxValue: 5,
    "aria-label": "Label for min / max Slider"
  }
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var W,O,X;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    step: 1000,
    value: 10000,
    minValue: 2000,
    maxValue: 64000,
    notches: [15000, 25000, 58000],
    "aria-label": "Label for 'notched' Slider"
  }
}`,...(X=(O=v.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var q,Y,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    step: 1000,
    value: 10000,
    minValue: 2000,
    maxValue: 64000,
    notches: [tnb(2000, "APR of 6.5%  (subject to terms and conditions)"), tnb(15000, "APR of 6%"), tnb(25000, "APR of 5%"), tnb(58000, "APR of 3.5% (subject to terms and conditions)")],
    "aria-label": "Label for 'notched' Slider with tooltips"
  }
}`,...(H=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var K,G,J;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    step: 499,
    value: 1,
    minValue: 1,
    maxValue: 65000,
    "aria-label": "Label for 'variable stepped' Slider"
  },
  render: args => {
    const [, updateArgs] = useArgs();
    function handleChange(newValue: number) {
      const newSafeValue = newValue >= 1 ? newValue : 1;
      const newSafeMinValue = newSafeValue <= 2 ? 1 : 0;
      const newSafeStep = newSafeValue <= 2 ? 499 : 500;
      args.onChange(newSafeValue);
      updateArgs({
        value: newSafeValue
      });
      updateArgs({
        step: newSafeStep
      });
      updateArgs({
        minValue: newSafeMinValue
      });
    }
    return <Slider {...args} onChange={handleChange} />;
  }
}`,...(J=(G=$.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ke=["Basic","WithMinAndMax","WithNotches","WithTooltipNotches","WithVariableSteps"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,WithMinAndMax:g,WithNotches:v,WithTooltipNotches:x,WithVariableSteps:$,__namedExportsOrder:ke,default:Pe},Symbol.toStringTag,{value:"Module"}));export{b as B,Oe as S,g as W,v as a,x as b,$ as c};
