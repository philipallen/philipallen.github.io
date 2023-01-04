var j=Object.defineProperty;var m=(a,t)=>j(a,"name",{value:t,configurable:!0});import{S,i as O,s as q,j as g,z as v,m as h,a as d,b as x,t as y,n as w,d as _,y as D,u as $,r as k,v as I,w as f,q as L}from"./index.5495e455.js";import{T as z,a as E}from"./TokenInstructions.edaacb72.js";const M={xSmall:{value:"567px"},small:{value:"767px"},medium:{value:"1023px"},large:{value:"1280px"}},N={breakpoint:M};function T(a,t,o){const r=a.slice();return r[1]=t[o][0],r[2]=t[o][1],r}m(T,"get_each_context");function A(a){let t;return{c(){t=$("Tokens:")},m(o,r){d(o,t,r)},d(o){o&&_(t)}}}m(A,"create_default_slot");function C(a){let t,o,r=a[1]+"",p,u,i,n=a[2].value+"",e;return{c(){t=k("div"),o=k("div"),p=$(r),u=v(),i=k("div"),e=$(n),I(t,"class","container svelte-7ynw2j")},m(s,c){d(s,t,c),f(t,o),f(o,p),f(t,u),f(t,i),f(i,e)},p:L,d(s){s&&_(t)}}}m(C,"create_each_block");function F(a){let t,o,r,p,u;t=new z({props:{$$slots:{default:[A]},$$scope:{ctx:a}}});let i=Object.entries(a[0]),n=[];for(let e=0;e<i.length;e+=1)n[e]=C(T(a,i,e));return p=new E({props:{token:"breakpoint",value:"small",cssInstruction:"@media only screen and (max-width: var(--breakpoint-small)) {...}"}}),{c(){g(t.$$.fragment),o=v();for(let e=0;e<n.length;e+=1)n[e].c();r=v(),g(p.$$.fragment)},m(e,s){h(t,e,s),d(e,o,s);for(let c=0;c<n.length;c+=1)n[c].m(e,s);d(e,r,s),h(p,e,s),u=!0},p(e,[s]){const c={};if(s&32&&(c.$$scope={dirty:s,ctx:e}),t.$set(c),s&1){i=Object.entries(e[0]);let l;for(l=0;l<i.length;l+=1){const B=T(e,i,l);n[l]?n[l].p(B,s):(n[l]=C(B),n[l].c(),n[l].m(r.parentNode,r))}for(;l<n.length;l+=1)n[l].d(1);n.length=i.length}},i(e){u||(x(t.$$.fragment,e),x(p.$$.fragment,e),u=!0)},o(e){y(t.$$.fragment,e),y(p.$$.fragment,e),u=!1},d(e){w(t,e),e&&_(o),D(n,e),e&&_(r),w(p,e)}}}m(F,"create_fragment");function G(a){return[N.breakpoint]}m(G,"instance");class b extends S{constructor(t){super(),O(this,t,G,F,q,{})}}m(b,"Breakpoints$1");b.__docgen={version:3,name:"Breakpoints.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const P={parameters:{storySource:{source:`import BreakpointsComponent from "./Breakpoints.svelte";

export default {
  title: "Tokens/Breakpoints",
};

export const Breakpoints = () => ({
  Component: BreakpointsComponent,
});
`,locationsMap:{breakpoints:{startLoc:{col:27,line:7},endLoc:{col:2,line:9},startBody:{col:27,line:7},endBody:{col:2,line:9}}}}},title:"Tokens/Breakpoints"},Q=m(()=>({Component:b}),"Breakpoints"),R=["Breakpoints"];export{Q as Breakpoints,R as __namedExportsOrder,P as default};
//# sourceMappingURL=Breakpoints.stories.0797b85d.js.map