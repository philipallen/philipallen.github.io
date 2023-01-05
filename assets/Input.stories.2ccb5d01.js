var f=Object.defineProperty;var a=(t,e)=>f(t,"name",{value:e,configurable:!0});import{S as b,i as m,s as v,r as _,v as u,a as k,y as d,z as I,q as c,d as E}from"./index.d90a5e80.js";function O(t){let e,l,i,r;return{c(){e=_("input"),u(e,"type","text"),u(e,"class",l="input "+(t[3]?"inputError":"")),e.disabled=t[1],e.readOnly=t[2]},m(n,s){k(n,e,s),d(e,t[0]),i||(r=I(e,"input",t[4]),i=!0)},p(n,[s]){s&8&&l!==(l="input "+(n[3]?"inputError":""))&&u(e,"class",l),s&2&&(e.disabled=n[1]),s&4&&(e.readOnly=n[2]),s&1&&e.value!==n[0]&&d(e,n[0])},i:c,o:c,d(n){n&&E(e),i=!1,r()}}}a(O,"create_fragment");function g(t,e,l){let{value:i="This is an input"}=e,{isDisabled:r=!1}=e,{isReadOnly:n=!1}=e,{isError:s=!1}=e;function y(){i=this.value,l(0,i)}return a(y,"input_input_handler"),t.$$set=o=>{"value"in o&&l(0,i=o.value),"isDisabled"in o&&l(1,r=o.isDisabled),"isReadOnly"in o&&l(2,n=o.isReadOnly),"isError"in o&&l(3,s=o.isError)},[i,r,n,s,y]}a(g,"instance");class p extends b{constructor(e){super(),m(this,e,g,O,v,{value:0,isDisabled:1,isReadOnly:2,isError:3})}}a(p,"Input$1");p.__docgen={version:3,name:"Input.svelte",data:[{visibility:"public",description:null,keywords:[],name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"This is an input",bind:[{source:"input",property:"value"}]},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"isReadOnly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"isError",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D={parameters:{storySource:{source:`import InputComponent from "./Input.svelte";

export default {
  title: "Composites/Form/Input",
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    className: { table: { disable: true } },
    isDisabled: { control: { type: "boolean" } },
    isReadOnly: { control: { type: "boolean" } },
    isError: { control: { type: "boolean" } },
  },
};

export const Input = (args) => ({
  Component: InputComponent,
  props: args,
});
`,locationsMap:{input:{startLoc:{col:21,line:15},endLoc:{col:2,line:18},startBody:{col:21,line:15},endBody:{col:2,line:18}}}}},title:"Composites/Form/Input",argTypes:{value:{control:"text"},placeholder:{control:"text"},className:{table:{disable:!0}},isDisabled:{control:{type:"boolean"}},isReadOnly:{control:{type:"boolean"}},isError:{control:{type:"boolean"}}}},R=a(t=>({Component:p,props:t}),"Input"),x=["Input"];export{R as Input,x as __namedExportsOrder,D as default};
//# sourceMappingURL=Input.stories.2ccb5d01.js.map
