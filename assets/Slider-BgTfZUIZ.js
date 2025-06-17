import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as n}from"./index-BRkUXrbv.js";import{M as r,C as o,a as h}from"./index-Cd40qdGw.js";import{S as l,B as a,W as p,a as m,b as d,c}from"./Slider.stories-DnJh4bu5.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D4OE1iNc.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-iP1lhtUC.js";import"./index-CmedeESG.js";import"./index-Al28d7yc.js";import"./index-D1OOBdzz.js";import"./Slider-BLl02R-d.js";import"./utils-BPOuYIA2.js";import"./Label-CxUBTwi1.js";import"./filterDOMProps-CeZl_uWj.js";import"./useNumberFormatter-Be2B0OXy.js";import"./useControlledState-Bw1hdnkP.js";import"./useFocusRing-G-z0GAlQ.js";import"./focusSafely-B-zcuC90.js";import"./useFormReset-Bq-COY0f.js";import"./VisuallyHidden-BNZM_wZC.js";import"./Typography-DU98AY51.js";import"./index-C_4KMkng.js";import"./IconButton-ByGO4_d_.js";function s(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(t.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.p,{children:["For a complete list of available props, please refer to the React Aria ",e.jsx("a",{href:"https://react-spectrum.adobe.com/react-aria/Slider.html#props",className:"boi-mdx-link",target:"_blank",children:"documentation"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(h,{of:a}),`
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
`})})]})}function L(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{L as default};
