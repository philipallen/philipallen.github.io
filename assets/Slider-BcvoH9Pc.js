import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as a}from"./index-COxJNofV.js";import{M as r,C as o,d as h}from"./index-rUyKbrOa.js";import{S as l,B as n,W as d,a as p,b as m}from"./Slider.stories-DGOTAgdr.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-cZDWrRLx.js";import"../sb-preview/runtime.js";import"./index-5Gu-hNp0.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";import"./index-Cnk2rnxF.js";import"./index-DKJt7waT.js";import"./index-Bkh50RYL.js";import"./index-CtBUti8q.js";import"./utils-DMjC9_eM.js";import"./useFocusable-C8W1vPXm.js";import"./useFocusWithin-DtMhJA8W.js";import"./Label-DOSTzuh-.js";import"./useNumberFormatter-CCIOAssj.js";import"./useLabel-B8zubuc2.js";import"./VisuallyHidden-KFGkQyAi.js";import"./IconButton-CQCemVia.js";function s(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(t.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{of:n}),`
`,e.jsx(h,{of:n}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"with-a-max-and-min-value",children:"With a max and min value"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h3,{id:"with-notches",children:"With notches"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"with-variable-steps",children:"With variable steps"}),`
`,e.jsx(t.h4,{id:"please-note-this-example-shows-how-we-change-the-step-property-based-on-the-value-of-the-slider",children:"Please note this example shows how we change the step property based on the value of the slider"}),`
`,e.jsx(t.p,{children:"This is how you would render the Slider with a step of 500, a minimum value of 1 and a maximum value of 65,000. It fixes the issue between the first value of 1 and the second value of 500 (which would have to have a step of 499)"}),`
`,e.jsx(o,{of:m}),`
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
`})})]})}function L(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{L as default};
