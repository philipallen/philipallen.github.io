var T=Object.defineProperty;var r=(s,e)=>T(s,"name",{value:e,configurable:!0});import{S as x,i as C,s as b,e as k,a as f,q as d,y as S,d as u,r as y,u as q,z as g,v as w,w as c}from"./index.5495e455.js";function m(s,e,a){const n=s.slice();return n[1]=e[a],n}r(m,"get_each_context");function _(s){let e,a,n=s[1]+"",t,l,o,p;return{c(){e=y("div"),a=y("div"),t=q(n),l=g(),o=y("div"),o.textContent="The quick brown fox jumps over the lazy dog",p=g(),w(e,"class","container "+s[1]+" svelte-186eykn")},m(i,v){f(i,e,v),c(e,a),c(a,t),c(e,l),c(e,o),c(e,p)},p:d,d(i){i&&u(e)}}}r(_,"create_each_block");function L(s){let e,a=s[0],n=[];for(let t=0;t<a.length;t+=1)n[t]=_(m(s,a,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=k()},m(t,l){for(let o=0;o<n.length;o+=1)n[o].m(t,l);f(t,e,l)},p(t,[l]){if(l&1){a=t[0];let o;for(o=0;o<a.length;o+=1){const p=m(t,a,o);n[o]?n[o].p(p,l):(n[o]=_(p),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=a.length}},i:d,o:d,d(t){S(n,t),t&&u(e)}}}r(L,"create_fragment");function z(s){return[["heading1","heading2","heading3","heading4","bodyLarge","bodyDefault","bodySmall","bodyXSmall"]]}r(z,"instance");class h extends x{constructor(e){super(),C(this,e,z,L,b,{})}}r(h,"Typography$1");h.__docgen={version:3,name:"Typography.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j={parameters:{storySource:{source:`import TypographyComponent from "./Typography.svelte";

export default {
  title: "Composites/Typography",
};

export const Typography = () => ({
  Component: TypographyComponent,
});
`,locationsMap:{typography:{startLoc:{col:26,line:7},endLoc:{col:2,line:9},startBody:{col:26,line:7},endBody:{col:2,line:9}}}}},title:"Composites/Typography"},D=r(()=>({Component:h}),"Typography"),E=["Typography"];export{D as Typography,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Typography.stories.452e614c.js.map
