import{h as n,b as s,u as a}from"./index-BVzVw2jm.js";function e(o){return n`
    0% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: transparent;
    }
    0.01% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: ${o};
    }
    99.9% {
      --top-shadow-color: ${o};
      --bottom-shadow-color: ${o};
    }
    100% {
      --top-shadow-color: transparent;
      --bottom-shadow-color: ${o};
    }
  `}function r(o){return s`
    scroll-timeline-name: --scroll-shadow;
    scroll-timeline-axis: block;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      user-select: none;
      pointer-events: none;

      box-shadow: inset 0 -7px 9px -7px var(--top-shadow-color),
        inset 0 7px 9px -7px var(--bottom-shadow-color);

      animation: ${o} linear;
      animation-timeline: --scroll-shadow;
    }
  `}function c(){const{tokens:o}=a(),{scrollShadowContainer:t}=o;return r(e(t.shadow.color))}export{c as u};
