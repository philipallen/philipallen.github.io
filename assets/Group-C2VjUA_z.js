import{b as h,c as x,d as m,e as p}from"./useFocusRing-8RL9AhDF.js";import{r as f,R as F}from"./index-DH5ua8nC.js";import{$ as P}from"./useFocusWithin-D15f1-3B.js";const C=f.createContext({}),w=f.forwardRef(function(e,i){[e,i]=h(e,i,C);let{isDisabled:a,isInvalid:d,onHoverStart:c,onHoverChange:v,onHoverEnd:u,...$}=e,{hoverProps:b,isHovered:s}=x({onHoverStart:c,onHoverChange:v,onHoverEnd:u,isDisabled:a}),{isFocused:n,isFocusVisible:t,focusProps:H}=m({within:!0});a??(a=!!e["aria-disabled"]&&e["aria-disabled"]!=="false"),d??(d=!!e["aria-invalid"]&&e["aria-invalid"]!=="false");let l=p({...e,values:{isHovered:s,isFocusWithin:n,isFocusVisible:t,isDisabled:a,isInvalid:d},defaultClassName:"react-aria-Group"});var o,r;return F.createElement("div",{...P($,H,b),...l,ref:i,role:(o=e.role)!==null&&o!==void 0?o:"group",slot:(r=e.slot)!==null&&r!==void 0?r:void 0,"data-focus-within":n||void 0,"data-hovered":s||void 0,"data-focus-visible":t||void 0,"data-disabled":a||void 0,"data-invalid":d||void 0},l.children)});export{C as $,w as a};
