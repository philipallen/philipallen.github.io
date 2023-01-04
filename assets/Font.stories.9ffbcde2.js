var F=Object.defineProperty;var c=(l,e)=>F(l,"name",{value:e,configurable:!0});import{S as x,i as C,s as b,e as k,a as v,q as m,y as S,d as g,r as p,u as q,z as _,v as w,w as i}from"./index.b1c955cf.js";function h(l,e,s){const o=l.slice();return o[1]=e[s],o}c(h,"get_each_context");function u(l){let e,s,o=l[1]+"",t,a,n,r;return{c(){e=p("div"),s=p("div"),t=q(o),a=_(),n=p("div"),n.textContent="The quick brown fox jumps over the lazy dog",r=_(),w(e,"class","container "+l[1]+" svelte-186eykn")},m(d,y){v(d,e,y),i(e,s),i(s,t),i(e,a),i(e,n),i(e,r)},p:m,d(d){d&&g(e)}}}c(u,"create_each_block");function L(l){let e,s=l[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=u(h(l,s,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=k()},m(t,a){for(let n=0;n<o.length;n+=1)o[n].m(t,a);v(t,e,a)},p(t,[a]){if(a&1){s=t[0];let n;for(n=0;n<s.length;n+=1){const r=h(t,s,n);o[n]?o[n].p(r,a):(o[n]=u(r),o[n].c(),o[n].m(e.parentNode,e))}for(;n<o.length;n+=1)o[n].d(1);o.length=s.length}},i:m,o:m,d(t){S(o,t),t&&g(e)}}}c(L,"create_fragment");function z(l){return[["heading1","heading2","heading3","heading4","bodyLarge","bodyDefault","bodySmall","bodyXSmall"]]}c(z,"instance");class f extends x{constructor(e){super(),C(this,e,z,L,b,{})}}c(f,"Font");f.__docgen={version:3,name:"Font.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j={parameters:{storySource:{source:`import FontsComponent from "./Font.svelte";

export default {
  title: "Composites/Fonts",
};

export const Fonts = () => ({
  Component: FontsComponent,
});
`,locationsMap:{fonts:{startLoc:{col:21,line:7},endLoc:{col:2,line:9},startBody:{col:21,line:7},endBody:{col:2,line:9}}}}},title:"Composites/Fonts"},D=c(()=>({Component:f}),"Fonts"),E=["Fonts"];export{D as Fonts,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Font.stories.9ffbcde2.js.map
