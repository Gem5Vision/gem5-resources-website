(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{1466:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/arm.c841c5b2.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEU+jbk9jbo9jbk+jLo+jLk+jbk9jbo9jbk+jLo+jLk9jbo9jbk9jbo9jbo9jbk9jbk9jbk+jLo+jLk+jbk+jLo9jbo9jbk+jLk+jLo+jLo+jLo9jbk9jbk9jbo+jLo9jbk+jbo+jLo+jLk9jbk+jbk+jLo/VehFAAAAJnRSTlMAAAAAAAEBAQEBAgIDBAQICw0QEREWFjI1Nz9LYGJmd3x8fICXmRhesnIAAABGSURBVHjaHcbHEYAwDATA09kgkzMmZ/pvkRn2tZBQnYsCCxUaY0GwK6q2bgz8uV/b+4zwxz0P6zKBfZmkWR5DSYpQQNU/H3VvAyD7LVU8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},3620:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/mips.00461088.png",height:686,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNsrevM+v+P8QYjE4PJ//8MDIyM/xn//2f8BaR1GBgYvjNOW1iox8jA8O//PyYORqa/jOy8n5/9/c0m8OWViBwT818mAHDbGg+i1zK9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5434:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/power.6e197e4c.png",height:411,width:325,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/ASEbH/kCEwUGAgMA/xkcBQDf2/kBAuz8+wEEABr/VHshAC80EwDLy+4A+On1AODH8AABIx8f/v4GAQEYLA4ASFAaAO7j8QCZfOT/AQ8MH/42MwQBZ3UgANXrBAB/YdMAIyEHAAEAABT+cYYgAREkGgB+m+YAILvlAAAiBAABLSMp/hQwHAG/+twAAbPfAC8wMAAGBAX/AUxLS/9LSkwA9fP0AAUJBgD8/PwArqytAAEnJSb5FxkXBRcXF/8A/wEA+Pj4AdTR0vsXM0VN6/zntwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},7891:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/risc_v.6e2d585e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42h3MsQ1BARhF4Y9KIlFZgB1UYgWxgQ3MoLOBHUQjUYsZaPSCDTRPvPuSP7e4OTnJoaePtWjFn5uHA46iEVJb2NRfeXk64Sw+huwxsi0/NyNWpoU7A18iJpbuuAg/8Tamsk0HzSIoqC0nPUIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3236:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/sparc.82e2e341.png",height:223,width:440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAWUlEQVR42mO462+YA8SRQNwAxP53/AwNgbgCyPYB0vEMQEYmEHfc8TfsB9LzgXQ9kN4ExMVAthIDkOECxHZALAvExUAcfdfPUAuIDYEKghiQAVCSH4gZkcUAyt4sXnNjGGcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},201:function(e,s){"use strict";s.Z={src:"/gem5-resources-website//_next/static/media/x86.ac0718a0.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42l3BMQ4BQQAF0Hc/lcohtKLSOADRSTS0SqJUO4NkpxDX2Jn5Ssm+RxFV01VRiC7+VfGw9fV0FZrYmDuZORp5O1hZW9hZevFxd7M3uDjrZNIgqqoZRfkBJns1RCFy+mYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3609:function(e,s,t){"use strict";t.d(s,{R:function(){return i}});var r=t(9867);async function n(e){let s=await (0,r.eL)(),t=s.filter(s=>s.id===e);if(0===t.length)return{error:"Resource not found"};let n=[];for(let t in s)for(let r in s[t].resources)s[t].resources[r]===e&&n.push(s[t]);return console.log(n),0===n.length?n=null:t[0].workloads=n,t[0]}async function i(e){return await n(e)}},9867:function(e,s,t){"use strict";async function r(){console.log("Fetching resources from JSON");let e=await fetch("https://raw.githubusercontent.com/Gem5Vision/json-to-mongodb/versions/resources.json").then(e=>e.json());return e}async function n(){return await r()}t.d(s,{eL:function(){return n}})},1793:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return F}});var r=t(5893),n=t(1664),i=t.n(n),c=t(682),l=t(4051),a=t(1555),o=t(3007),A=t.n(o);function d(e){var s,t,n;let{resource:o,className:d}=e;return console.log(o),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{className:A().info+" "+d,children:[(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)(a.Z,{className:"border-end",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:"primary",children:"9001"}),(0,r.jsx)("p",{className:"text-muted",children:"LIKES"})]})}),(0,r.jsx)(a.Z,{className:"border-end",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:"primary",children:"64503"}),(0,r.jsx)("p",{className:"text-muted",children:"VIEWS"})]})}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:"primary",children:"45"}),(0,r.jsx)("p",{className:"text-muted",children:"DOWNLOADS"})]})})]}),(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)("p",{className:"text-muted",children:"Author"}),(0,r.jsx)("h4",{className:"primary",children:o.author?o.author.map((e,s)=>(0,r.jsxs)(r.Fragment,{children:[e,s<o.author.length-1?", ":""]})):"Unknown"})]}),(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)("p",{className:"text-muted",children:"Description"}),(0,r.jsx)("p",{className:"primary",children:null!==(s=o.description)&&void 0!==s?s:"This is a description of the resource."}),o.github_url?(0,r.jsx)(i(),{href:o.github_url,children:"Repository (GitHub)"}):null]}),(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)("p",{className:"text-muted",children:"License"}),(0,r.jsxs)("p",{className:"primary",children:[null!==(t=o.license)&&void 0!==t?t:"BSD-3-Clause"," (",(0,r.jsx)(i(),{href:null!==(n=o.license_url)&&void 0!==n?n:"https://opensource.org/licenses/BSD-3-Clause",children:"LICENSE"}),")"]})]}),(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)("p",{className:"text-muted",children:"Dependencies"}),(0,r.jsx)("p",{className:"primary",children:o.resources?Object.keys(o.resources).map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"/resources/"+o.resources[e],children:o.resources[e]},e),", "]})):"None"})]}),(0,r.jsxs)(l.Z,{className:"border-bottom",children:[(0,r.jsx)("p",{className:"text-muted",children:"Depend on this resource"}),(0,r.jsx)("p",{className:"primary",children:o.workloads?o.workloads.map((e,s)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"/resources/"+e.id,children:e.id},s),", "]})):"None"})]})]})})}var h=t(5675),u=t.n(h),x=t(5114),j=t.n(x),m=t(7891),g=t(6748),p=t(3489),b=t(7294);function f(e){let[s,t]=(0,b.useState)(""),[n,i]=(0,b.useState)(null),[c,l]=(0,b.useState)(!1);(0,b.useState)(()=>{t(function e(s){if("string"==typeof s)return s;if(Array.isArray(s)){let t="";for(let r=0;r<s.length;r++)t+=e(s[r]);return t}if("object"==typeof s){let t="";return s.props.children&&(t+=e(s.props.children)),t}}(e.children.props.children))},[]);let a=async e=>{l(!0),await navigator.clipboard.writeText(e),setTimeout(()=>l(!1),750)};return(0,r.jsxs)("div",{style:{position:"relative",width:"auto"},children:[e.children,(0,r.jsx)("span",{ref:i,style:{position:"absolute",right:0,top:0,cursor:"pointer",marginRight:"5px",marginTop:"5px"},children:(0,r.jsx)("div",{className:"copy-button",onClick:async()=>a(s),children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",children:[(0,r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}),(0,r.jsx)(g.Z,{target:n,show:c,placement:"right",children:e=>(0,r.jsxs)(p.Z,{id:"overlay-tooltip",...e,children:[s," has been copied to the clipboard"]})})]})}var w=t(201),v=t(1466),N=t(3236),E=t(3620),y=t(5434);function R(e){var s,t;let{resource:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{children:(0,r.jsx)("h2",{className:"text-muted pe-3",children:n.id})}),(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[(0,r.jsx)("h5",{className:"text-muted",children:"Published 6 months ago"}),(0,r.jsx)("div",{className:j().dot}),(0,r.jsx)("h5",{className:"primary",children:null!==(s=String(n.category).charAt(0).toUpperCase()+String(n.category).substring(1))&&void 0!==s?s:"Unknown"})]}),(0,r.jsxs)("div",{className:"d-flex gap-4",children:[(0,r.jsxs)("p",{className:"d-flex flex-row align-items-center gap-1",children:[(0,r.jsx)(u(),{src:function(e){switch(e){case"X86":return w.Z;case"RISCV":return m.Z;case"ARM":return v.Z;case"SPARC":return N.Z;case"MIPS":return E.Z;case"POWER":return y.Z;default:return""}}(n.architecture),alt:null!==(t=n.architecture)&&void 0!==t?t:"Unknown",height:15}),n.architecture]}),(0,r.jsxs)("div",{className:"d-flex flex-row gap-1",children:[(0,r.jsx)("h6",{style:{lineHeight:"inherit",margin:"0"},children:"VERSION"}),(0,r.jsx)("p",{children:Object.keys(n.versions).length>1?Object.keys(n.versions)[1]:Object.keys(n.versions)[0]})]})]})]})}var Z=t(9008),k=t.n(Z),S=t(3609),B=t(3192),U=t(5509),L=t(5588),C=t(2490),V=t(9232),O=t(4996),D=t(9721),H=t(9234),I=t(4800),Q=t(1163),M=t(5147);function Y(e){let{versions:s,url:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(M.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Version"}),(0,r.jsx)("th",{children:" "})]})}),(0,r.jsx)("tbody",{children:Object.keys(s).map(e=>{var n;let i;return n=s[e],i=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})}),t||(t="",i=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,r.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})),n=t.replace("{url_base}",n),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:n,children:(0,r.jsx)("div",{style:{width:"16px",height:"16px"},children:i})})})]})})})]})})}function K(e){let{resource:s}=e,t=(0,Q.useRouter)(),[n,i]=(0,b.useState)("readme");(0,b.useEffect)(()=>{let e=t.asPath.split("/").slice(2);e[1]?["readme","changelog","usage","parameters","example","versions"].includes(e[1])?i(e[1]):t.push("/resources/".concat(s.id),void 0,{shallow:!0}):i("readme")},[t,s.id]);let c=e=>{if("readme"===e)return i(e),t.push("/resources/".concat(s.id),void 0,{shallow:!0});i(e),t.push("/resources/".concat(s.id,"/").concat(e),void 0,{shallow:!0})};return(0,r.jsx)("div",{className:"tabs",children:(0,r.jsxs)(U.Z,{defaultActiveKey:"readme",activeKey:null!=n?n:"readme",onSelect:e=>c(e),children:[(0,r.jsx)(B.Z,{eventKey:"readme",title:"Readme",children:(0,r.jsx)(_,{github_url:s.github_url})}),(0,r.jsx)(B.Z,{eventKey:"changelog",title:"Changelog"}),(0,r.jsx)(B.Z,{eventKey:"usage",title:"Usage",children:(0,r.jsx)(P,{})}),(0,r.jsx)(B.Z,{eventKey:"parameters",title:"Parameters"}),(0,r.jsx)(B.Z,{eventKey:"example",title:"Example",children:(0,r.jsx)(P,{})}),(0,r.jsxs)(B.Z,{eventKey:"versions",title:"Versions",children:[(0,r.jsxs)("h3",{className:"font-weight-light",children:["Versions of ",s.id]}),(0,r.jsx)(Y,{versions:s.versions,url:s.download_url})]})]})})}function P(){return(0,r.jsx)(B.Z.Container,{defaultActiveKey:"first",children:(0,r.jsxs)(U.Z,{variant:"pills",defaultActiveKey:"se",id:"uncontrolled-tab-example",children:[(0,r.jsx)(B.Z,{eventKey:"se",title:"SE Mode",children:(0,r.jsx)("code",{children:"## INSERT CODE HERE"})}),(0,r.jsx)(B.Z,{eventKey:"fs",title:"FS Mode",children:(0,r.jsx)("code",{children:"## INSERT CODE HERE"})})]})})}function _(e){let{github_url:s}=e,[t,n]=(0,b.useState)("");return(0,b.useEffect)(()=>{if(!s)return;let e=s.replace("github.com","raw.githubusercontent.com").replace("tree/","")+"/README.md";fetch(e).then(e=>e.text()).then(e=>n(e))},[s]),(0,r.jsx)(B.Z.Container,{defaultActiveKey:"first",children:(0,r.jsx)(L.D,{className:"markdown-body mt-3",rehypePlugins:[[O.Z,{ignoreMissing:!0}],H.Z,D.Z],remarkPlugins:[C.Z,V.Z,I.Z],components:{pre:e=>{let{node:s,...t}=e;return(0,r.jsx)(f,{children:(0,r.jsx)("pre",{...t,children:t.children})})}},children:t})})}var F=function(){let[e,s]=(0,b.useState)([]),[t,n]=(0,b.useState)(!0),i=(0,Q.useRouter)();return(0,b.useEffect)(()=>{async function e(e){n(!0);let t=await (0,S.R)(e);console.log(t),t.error?i.push("/404"):s(t),n(!1)}if(i.isReady&&void 0!==i.query){let s=i.asPath.split("/"),t=s[2];console.log(t),e(t)}},[i.isReady]),t?(0,r.jsx)("div",{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(k(),{children:[(0,r.jsx)("title",{children:"gem5 resources"}),(0,r.jsx)("meta",{name:"description",content:"Find the resource you need"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsxs)(c.Z,{className:"mt-5",children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(R,{resource:null!=e?e:{}})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(K,{resource:null!=e?e:{}}),(0,r.jsx)(d,{resource:null!=e?e:{},className:"ms-5"})]})]})]})}},5114:function(e){e.exports={dot:"banner_dot__hUObP"}},3007:function(e){e.exports={info:"metadata_info__8irfG",col:"metadata_col__8odmI"}}}]);