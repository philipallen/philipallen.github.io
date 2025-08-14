import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{a as i,u as s,b as a}from"./index-DmICCP6d.js";import{e as h}from"./index-CinjkoEf.js";import{b as p,a as $}from"./Dialog-CLGWj2OB.js";import{u as m}from"./OverlayContext-DE6V0lcf.js";const f=i(h)`
  ${()=>{const{tokens:e}=s(),{select:o}=e;return a`
      display: block;
      width: ${o.button.icon.width};
      height: ${o.button.icon.height};
      color: ${o.button.icon.color.base};

      .react-aria-Select [data-hovered] &,
      .react-aria-ComboBox [data-hovered] & {
        color: ${o.button.icon.color.hover};
      }

      .react-aria-Select[data-open] &,
      .react-aria-ComboBox[data-open] & {
        color: ${o.button.icon.color.active};
        rotate: 180deg;
      }

      .react-aria-Select[data-disabled] &,
      .react-aria-ComboBox[data-disabled] & {
        color: ${o.button.icon.color.disabled};
      }
    `}}
`;function H(){return n.jsx(f,{"aria-hidden":"true"})}const x=i(p)`
  ${({$width:e})=>{const{tokens:{select:o,scrollBar:{thumbColor:t,trackColor:r}}}=s();return[a`
        display: grid;
        grid-template-rows: 1fr;
        width: var(--trigger-width);
        border-radius: ${o.menu.radius};
        border-width: ${o.menu.stroke.width};
        border-style: ${o.menu.stroke.style};
        border-color: ${o.menu.stroke.color};
        box-shadow: 0px 2px 2px ${o.menu.shadow.outer.color};
        background: ${o.menu.backgroundColor.base};
        scrollbar-color: ${t} ${r};
        z-index: ${o.menu.zIndex};
        overflow: hidden;

        &:focus,
        &:focus-visible {
          outline: none;
        }
      `,e&&a`
          width: ${e}px;
        `]}}
`,I=6,g=2,T=48,v=T*I,w=g+v;function B(e){const{width:o,isOpen:t,onOpenChange:r,triggerRef:d,...l}=e,{tokens:u}=s(),{select:b}=u,{portalElement:c}=m();return n.jsx($,{getContainer:c&&(()=>c),children:n.jsx(x,{$width:o,maxHeight:w,offset:parseInt(b.gap,10),isOpen:t,onOpenChange:r,triggerRef:d,...l})})}export{H as C,B as P};
