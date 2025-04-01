import{j as e}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as r}from"./index-CNwVr1BN.js";import{M as a,C as o,a as h}from"./index-DrjCqRy4.js";import{S as l,B as n,W as p,a as m,b as d,c}from"./Slider.stories-B_VSXyNo.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CHOR_NQO.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-D0csYWE-.js";import"./index-VIbBARS4.js";import"./index-qhhwF6MA.js";import"./index-DT8u_GqS.js";import"./Slider-CNkNOX_n.js";import"./utils-l5KLAjAw.js";import"./chain-Z-ySmOka.js";import"./Label-DGdLAgDC.js";import"./useLabels-BOZ2JF2m.js";import"./useFocusRing-xuvxHm_5.js";import"./platform-COItUIJl.js";import"./useNumberFormatter-75ZYSi36.js";import"./context-CQmu07jL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BCPvzKxG.js";import"./number-Q_rDNm0P.js";import"./VisuallyHidden-to5K4EiD.js";import"./Typography-Ck-NcY7i.js";import"./index-DG677SqA.js";import"./IconButton-CAwCZCHp.js";function s(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(t.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{of:n}),`
`,e.jsx(h,{of:n}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"with-a-max-and-min-value",children:"With a max and min value"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"with-notches",children:"With notches"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"with-tooltip-notches",children:"With tooltip notches"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h3,{id:"with-variable-steps",children:"With variable steps"}),`
`,e.jsx(t.h4,{id:"please-note-this-example-shows-how-we-change-the-step-property-based-on-the-value-of-the-slider",children:"Please note this example shows how we change the step property based on the value of the slider"}),`
`,e.jsx(t.p,{children:"This is how you would render the Slider with a step of 500, a minimum value of 1 and a maximum value of 65,000. It fixes the issue between the first value of 1 and the second value of 500 (which would have to have a step of 499)"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code-example-of-the-above",children:"Code example of the above"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const [sliderValue, setSliderValue] = useState(1);
...
<Slider
    minValue={sliderValue <= 1 ? 1 : 0}
    maxValue={65000}
    step={sliderValue <= 1 ? 499 : 500}
    value={sliderValue}
    onChange={(v) => {
        setSliderValue(v >= 1 ? v : 1);
    }}
    aria-label="label"
/>
`})})]})}function G(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{G as default};
