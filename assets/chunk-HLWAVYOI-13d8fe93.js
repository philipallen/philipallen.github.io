import{_ as i}from"./iframe-99282e1b.js";import{R as t,r as p}from"./index-c013ead5.js";import{r as l,u}from"./react-18-a99840e4.js";import{b as h,A as E,H as d,D as x}from"./index-d7143317.js";var D={code:h,a:E,...d},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-3685aeb7.js"),["./index-3685aeb7.js","./index-dc1d5b46.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js"],import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};
