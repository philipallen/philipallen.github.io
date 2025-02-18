import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as s}from"./index-COxJNofV.js";import{M as a,C as o,d as h}from"./index-BjSWr0wt.js";import{S as l,B as r,W as p,a as m,b as d}from"./Slider.stories-DCOcmbdl.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DQL38U2H.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";import"./index-Cnk2rnxF.js";import"./index-1pQtRAy1.js";import"./index-Bl852yH3.js";import"./index-CzvSJj6w.js";import"./useFocusRing-8RL9AhDF.js";import"./useFocusWithin-D15f1-3B.js";import"./chain-Crd5RmWG.js";import"./focusSafely-CjmyL4wt.js";import"./platform-Dbfj6p2q.js";import"./Label-5FlWBL7a.js";import"./useNumberFormatter-BM_nWW5M.js";import"./context-ERQbR2fL.js";import"./NumberFormatter-_LhaN6n2.js";import"./useControlledState-BSXamw7l.js";import"./useLabel-DxA8NU2E.js";import"./useLabels-DOmbfuka.js";import"./useFocusable-bM5OvyXg.js";import"./useKeyboard-BZGC9FVW.js";import"./VisuallyHidden-D60Ve5Tm.js";import"./Typography-Dt8pkH_V.js";import"./IconButton-Dj4gUpiT.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(t.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"with-a-max-and-min-value",children:"With a max and min value"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"with-notches",children:"With notches"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"with-variable-steps",children:"With variable steps"}),`
`,e.jsx(t.h4,{id:"please-note-this-example-shows-how-we-change-the-step-property-based-on-the-value-of-the-slider",children:"Please note this example shows how we change the step property based on the value of the slider"}),`
`,e.jsx(t.p,{children:"This is how you would render the Slider with a step of 500, a minimum value of 1 and a maximum value of 65,000. It fixes the issue between the first value of 1 and the second value of 500 (which would have to have a step of 499)"}),`
`,e.jsx(o,{of:d}),`
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
`})})]})}function K(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{K as default};
