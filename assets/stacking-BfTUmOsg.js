import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as i,C as s}from"./index-Cc2OBFLd.js";import{S as a,a as c}from"./stacking.stories-BnvJ4_kP.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CGicjiFl.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index-Dwsyfx_g.js";import"./index-DIR-JP_f.js";import"./index-ChacPRz0.js";import"./index-BKbNTvCu.js";import"./Text-D9_Nw8NF.js";import"./utils-mOq_cyPo.js";import"./Button-DHrRVfeM.js";import"./ProgressBar-MIXQhSCM.js";import"./Label-8khcU0p_.js";import"./useFocusRing-BhJTmJfA.js";import"./Heading-BOh7G33Y.js";import"./Dialog-CYmhaE2o.js";import"./Collection-CJarBQHz.js";import"./useEvent-DG0nK5SM.js";import"./FocusScope-BJNVAOd7.js";import"./useControlledState-Bw1hdnkP.js";import"./usePreventScroll-CWak9jJX.js";import"./VisuallyHidden-CAvdYakS.js";import"./useFilter-CrAh1U0S.js";import"./Group-C9HJNTvQ.js";import"./Input-DybsVE8b.js";import"./Form-DoljDVQn.js";import"./useFormReset-V1ahBCEg.js";import"./useSpinButton-DdPW9kNL.js";import"./Checkbox-BCm2gw4t.js";import"./useToggle-B_IekEbK.js";import"./useToggleState-eLSQACY8.js";import"./ComboBox-BijWyYPF.js";import"./ListBox-fUycZjtt.js";import"./useListState-D7JViK0B.js";import"./useSingleSelectListState-Cld86MW-.js";import"./useTextField-1dbKxhqo.js";import"./Disclosure-DP_NoHsP.js";import"./NumberField-BNrXmByi.js";import"./RadioGroup-gZYF0EQJ.js";import"./SearchField-DHsZMMCp.js";import"./Select-CCjQdJRK.js";import"./Slider-D9Oju8GB.js";import"./Switch-CIV2wJ-1.js";import"./Tabs-Cci01m9Y.js";import"./TextField-B-eHT8nI.js";import"./ToggleButton-hOG5Ls5t.js";import"./Tooltip-CclobC8x.js";import"./index-BfVxfGWx.js";import"./chunk-4HCWVY2M-B1ssy2Ob.js";import"./floating-ui.react-tt5DnblY.js";import"./immer-VJu7bq0k.js";import"./Pressable-eToF6ols.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(t.h1,{id:"stacking",children:"Stacking"}),`
`,e.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(t.p,{children:"An example of usage might be:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:"zIndex: ${zIndex.modal}; // z-index of 5000\n"})}),`
`,e.jsx(t.h3,{id:"react-project",children:"React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your React project, see ",e.jsx("a",{href:"./?path=/docs/about-solas-developer-docs-react-design-tokens--docs#using-design-tokens",className:"boi-mdx-link",children:`
the react-design-tokens instructions`})]}),`
`,e.jsxs(t.p,{children:["You will be able to use ",e.jsx(t.code,{children:"zIndex"})," from the ",e.jsx(t.code,{children:"tokens"})," property."]}),`
`,e.jsx(t.h3,{id:"non-react-project",children:"Non-React project"}),`
`,e.jsxs(t.p,{children:["To understand how to use the z-index property in your non-React project, see ",e.jsx("a",{href:"./?path=/docs/about-solas-developer-docs-design-tokens--docs#web-tokens",className:"boi-mdx-link",children:`
the design-tokens instructions`})]}),`
`,e.jsx(t.h2,{id:"list-of-values",children:"List of values"}),`
`,e.jsx(t.p,{children:"Below is a list of z-index values available to use."}),`
`,e.jsx(s,{of:c,sourceState:"none"}),`
`,e.jsxs(t.p,{children:["According to our z-index values the ",e.jsx(t.code,{children:"Tooltip"})," and ",e.jsx(t.code,{children:"Menu"})," components should render under navigation elements (e.g. sticky header). This is fine for most page content, but when a ",e.jsx(t.code,{children:"Tooltip"})," or ",e.jsx(t.code,{children:"Menu"})," is rendered ",e.jsx(t.strong,{children:"inside"})," a sticky header then we don't want that to be the case as we wouldn't be able to see the floating elements."]}),`
`,e.jsxs(t.p,{children:["By default all our floating UI elements are rendered in a React portal at the bottom of the page, but the process of creating a sticky header in CSS (setting the ",e.jsx(t.code,{children:"position"})," property) makes a new stacking context so we need to add a new React portal inside the sticky header so that the ",e.jsx(t.code,{children:"Tooltip"})," and ",e.jsx(t.code,{children:"Menu"})," render as expected."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function StickyHeader(props: StickyHeaderProps) {
  const { children } = props;

  /**
   * Note: the OverlayProvider intentionally takes the DOM node, not refs, in order to be able to update when the nodes change.
   * A callback ref is used here to permit this behaviour, and useState is an appropriate way to implement this.
   */
  const [portalElement, setPortalElement] = useState<HTMLDivElement>();

  function setPortalRef(element: HTMLDivElement | null) {
    if (element) {
      setPortalElement(element);
    }
  }

  return (
    <OverlayProvider portalElement={portalElement}>
      <S.Container>
        {children}
        <div ref={setPortalRef} />
      </S.Container>
    </OverlayProvider>
  );
}
`})}),`
`,e.jsxs(t.p,{children:["You can find a working example here: ",e.jsx(t.code,{children:"packages/react-components/src/Modal/Modal.tsx"}),"."]}),`
`,e.jsx(t.h2,{id:"related-links",children:"Related links"}),`
`,e.jsx("a",{target:"_blank",href:"https://floating-ui.com/docs/floatingportal",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://floating-ui.com/docs/floatingportal",rel:"nofollow",children:"https://floating-ui.com/docs/floatingportal"})})}),`
`,e.jsx("a",{target:"_blank",href:"https://www.joshwcomeau.com/css/stacking-contexts",className:"boi-mdx-link",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.joshwcomeau.com/css/stacking-contexts",rel:"nofollow",children:"https://www.joshwcomeau.com/css/stacking-contexts"})})})]})}function he(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{he as default};
