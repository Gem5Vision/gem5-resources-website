(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{1903:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return s(4229)}])},1466:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/arm.c841c5b2.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEU+jbk9jbo9jbk+jLo+jLk+jbk9jbo9jbk+jLo+jLk9jbo9jbk9jbo9jbo9jbk9jbk9jbk+jLo+jLk+jbk+jLo9jbo9jbk+jLk+jLo+jLo+jLo9jbk9jbk9jbo+jLo9jbk+jbo+jLo+jLk9jbk+jbk+jLo/VehFAAAAJnRSTlMAAAAAAAEBAQEBAgIDBAQICw0QEREWFjI1Nz9LYGJmd3x8fICXmRhesnIAAABGSURBVHjaHcbHEYAwDATA09kgkzMmZ/pvkRn2tZBQnYsCCxUaY0GwK6q2bgz8uV/b+4zwxz0P6zKBfZmkWR5DSYpQQNU/H3VvAyD7LVU8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},3620:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/mips.00461088.png",height:686,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNsrevM+v+P8QYjE4PJ//8MDIyM/xn//2f8BaR1GBgYvjNOW1iox8jA8O//PyYORqa/jOy8n5/9/c0m8OWViBwT818mAHDbGg+i1zK9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5434:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/power.6e197e4c.png",height:411,width:325,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/ASEbH/kCEwUGAgMA/xkcBQDf2/kBAuz8+wEEABr/VHshAC80EwDLy+4A+On1AODH8AABIx8f/v4GAQEYLA4ASFAaAO7j8QCZfOT/AQ8MH/42MwQBZ3UgANXrBAB/YdMAIyEHAAEAABT+cYYgAREkGgB+m+YAILvlAAAiBAABLSMp/hQwHAG/+twAAbPfAC8wMAAGBAX/AUxLS/9LSkwA9fP0AAUJBgD8/PwArqytAAEnJSb5FxkXBRcXF/8A/wEA+Pj4AdTR0vsXM0VN6/zntwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},7891:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/risc_v.6e2d585e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42h3MsQ1BARhF4Y9KIlFZgB1UYgWxgQ3MoLOBHUQjUYsZaPSCDTRPvPuSP7e4OTnJoaePtWjFn5uHA46iEVJb2NRfeXk64Sw+huwxsi0/NyNWpoU7A18iJpbuuAg/8Tamsk0HzSIoqC0nPUIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3236:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/sparc.fde15e4d.png",height:228,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXElEQVR42mP8cfoEIwfH/2/fmOUU/n//BkQM/xmY+PlYQJx3b/99fP/v9UsGJqZ/r16wWdkxS8ky/rx0nklAkIGJ+c+1y0wyssxCwv/ev2MSFmX4DwN/P77/jwQAxGY8XsmCgncAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},201:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/x86.ac0718a0.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42l3BMQ4BQQAF0Hc/lcohtKLSOADRSTS0SqJUO4NkpxDX2Jn5Ssm+RxFV01VRiC7+VfGw9fV0FZrYmDuZORp5O1hZW9hZevFxd7M3uDjrZNIgqqoZRfkBJns1RCFy+mYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7328:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(7829);async function n(){let e=await (0,a.Z)(),t=await fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*",Authorization:"Bearer "+e},body:JSON.stringify({dataSource:"gem5-vision",database:"gem5-vision",collection:"resources",pipeline:[{$addFields:{a:"$versions"}},{$group:{_id:null,category:{$addToSet:"$category"},architecture:{$addToSet:"$architecture"},versions:{$addToSet:"$a.version"}}}]})}).catch(e=>console.log(e)),s=await t.json();return s.documents[0].architecture=s.documents[0].architecture.filter(e=>null!=e),delete s.documents[0]._id,s.documents[0].versions=s.documents[0].versions.reduce((e,t)=>e.length>t.length?e:t),s.documents[0].versions=s.documents[0].versions,s.documents[0].category.sort(),s.documents[0].architecture.sort(),s.documents[0].versions.sort().reverse(),s.documents[0]}async function r(){return await n()}},7829:function(e,t,s){"use strict";async function a(){return(await (await fetch("https://realm.mongodb.com/api/client/v2.0/app/data-ejhjf/auth/providers/api-key/login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*"},body:JSON.stringify({key:"pKkhRJGJaQ3NdJyDt69u4GPGQTDUIhHlx4a3lrKUNx2hxuc8uba8NrP3IVRvlzlo"})}).catch(e=>console.log(e))).json()).access_token}s.d(t,{Z:function(){return a}})},4229:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return er}});var a=s(5893),n=s(9008),r=s.n(n),i=s(4051),c=s(1555),l=s(7346),o=s(4184),d=s.n(o),u=s(7294),h=s(6792);let A=u.forwardRef(({bsPrefix:e,variant:t,animation:s="border",size:n,as:r="div",className:i,...c},l)=>{e=(0,h.vE)(e,"spinner");let o=`${e}-${s}`;return(0,a.jsx)(r,{ref:l,...c,className:d()(i,o,n&&`${o}-${n}`,t&&`text-${t}`)})});A.displayName="Spinner";var m=s(7829);async function p(e,t,s){let a=[],n=await (0,m.Z)();""===e.query.trim()&&"relevance"===e.sort&&(e.sort="default");let r=[];e.tags&&(r=r.concat([{$addFields:{tag:"$tags"}},{$unwind:"$tag"},{$match:{tag:{$in:e.tags||[]}}},{$group:{_id:"$_id",doc:{$first:"$$ROOT"}}},{$replaceRoot:{newRoot:"$doc"}}])),r=r.concat([{$addFields:{a:"$versions.version",ver_latest:{$last:"$versions.version"}}}]);let i=[];e.category&&i.push({category:{$in:e.category||[]}}),e.architecture&&i.push({architecture:{$in:e.architecture||[]}}),e.versions&&i.push({"versions.version":{$in:e.versions||[]}}),i.length>0&&r.push({$match:{$and:i}}),r=r.concat([{$sort:function(e){switch(e){case"date":return{date:-1};case"name":case"id_asc":return{id:1};case"version":return{ver_latest:-1};case"id_desc":return{id:-1};case"default":return{_id:-1};default:return{score:{$meta:"textScore"}}}}(e.sort)},{$unset:["a","ver_latest"]},{$setWindowFields:{output:{totalCount:{$count:{}}}}},{$skip:(t-1)*s},{$limit:s}]),""!==e.query.trim()&&(r.unshift({$addFields:{score:{$meta:"searchScore"}}}),r.unshift({$search:{text:{query:e.query,path:["id","description","resources","tags"],fuzzy:{maxEdits:2,maxExpansions:100}}}}));let c=await fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*",Authorization:"Bearer "+n},body:JSON.stringify({dataSource:"gem5-vision",database:"gem5-vision",collection:"resources",pipeline:r})}).catch(e=>console.log(e));return[(a=await c.json()).documents,a.documents.length>0?a.documents[0].totalCount:0]}async function x(e,t,s){let a;let n=(a=await p(e,t,s))[1];return{resources:a=a[0],total:n}}var g=s(2210),j=s(1664),f=s.n(j),v=s(201),y=s(7891),w=s(5675),b=s.n(w),N=s(1466),E=s(3236),S=s(3620),k=s(5434),R=s(7977);function C(e){var t,s;let{resource:n}=e;return(0,a.jsx)("div",{className:"search-result",children:(0,a.jsxs)(f(),{href:"/resources/"+n.id,style:{textDecoration:"none",color:"inherit"},children:[(0,a.jsx)("div",{className:"search-result__title",children:(0,a.jsx)("h4",{children:n.id})}),(0,a.jsx)("div",{className:"search-result__description",children:(0,a.jsx)("p",{children:n.description})}),(0,a.jsxs)("div",{className:"d-flex gap-3",children:[(0,a.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,a.jsx)(b(),{src:function(e){switch(e){case"X86":default:return v.Z;case"RISCV":return y.Z;case"ARM":return N.Z;case"SPARC":return E.Z;case"MIPS":return S.Z;case"POWER":return k.Z}}(n.architecture),alt:null!==(t=n.architecture)&&void 0!==t?t:"Unknown",width:20,className:"mb-3"}),(0,a.jsx)("p",{children:null!==(s=n.architecture)&&void 0!==s?s:"Unknown"})]}),(0,a.jsx)("div",{className:"d-flex flex-row gap-1",children:(0,a.jsx)("p",{className:"text-capitalize font-weight-light ",children:n.category})}),(0,a.jsxs)("div",{className:"d-flex flex-row gap-1",children:[(0,a.jsx)("h6",{style:{lineHeight:"inherit",margin:"0"},children:"v"}),n.versions.length>1?n.versions[1].version:n.versions[0].version]}),(0,a.jsx)("div",{className:"d-flex flex-row gap-1",children:n.tags?n.tags.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(R.Z,{pill:!0,bg:"primary",children:e})},t)):""})]})]})})}var Z=s(5446),B=s(6518);function $(e,t){return Array.isArray(e)?e.includes(t):e===t}let I=u.createContext({});I.displayName="AccordionContext";let U=u.forwardRef(({as:e="div",bsPrefix:t,className:s,children:n,eventKey:r,...i},c)=>{let{activeEventKey:l}=(0,u.useContext)(I);return t=(0,h.vE)(t,"accordion-collapse"),(0,a.jsx)(B.Z,{ref:c,in:$(l,r),...i,className:d()(s,t),children:(0,a.jsx)(e,{children:u.Children.only(n)})})});U.displayName="AccordionCollapse";let q=u.createContext({eventKey:""});q.displayName="AccordionItemContext";let O=u.forwardRef(({as:e="div",bsPrefix:t,className:s,onEnter:n,onEntering:r,onEntered:i,onExit:c,onExiting:l,onExited:o,...A},m)=>{t=(0,h.vE)(t,"accordion-body");let{eventKey:p}=(0,u.useContext)(q);return(0,a.jsx)(U,{eventKey:p,onEnter:n,onEntering:r,onEntered:i,onExit:c,onExiting:l,onExited:o,children:(0,a.jsx)(e,{ref:m,...A,className:d()(s,t)})})});O.displayName="AccordionBody";let P=u.forwardRef(({as:e="button",bsPrefix:t,className:s,onClick:n,...r},i)=>{t=(0,h.vE)(t,"accordion-button");let{eventKey:c}=(0,u.useContext)(q),l=function(e,t){let{activeEventKey:s,onSelect:a,alwaysOpen:n}=(0,u.useContext)(I);return r=>{let i=e===s?null:e;n&&(i=Array.isArray(s)?s.includes(e)?s.filter(t=>t!==e):[...s,e]:[e]),null==a||a(i,r),null==t||t(r)}}(c,n),{activeEventKey:o}=(0,u.useContext)(I);return"button"===e&&(r.type="button"),(0,a.jsx)(e,{ref:i,onClick:l,...r,"aria-expanded":Array.isArray(o)?o.includes(c):c===o,className:d()(s,t,!$(o,c)&&"collapsed")})});P.displayName="AccordionButton";let L=u.forwardRef(({as:e="h2",bsPrefix:t,className:s,children:n,onClick:r,...i},c)=>(t=(0,h.vE)(t,"accordion-header"),(0,a.jsx)(e,{ref:c,...i,className:d()(s,t),children:(0,a.jsx)(P,{onClick:r,children:n})})));L.displayName="AccordionHeader";let _=u.forwardRef(({as:e="div",bsPrefix:t,className:s,eventKey:n,...r},i)=>{t=(0,h.vE)(t,"accordion-item");let c=(0,u.useMemo)(()=>({eventKey:n}),[n]);return(0,a.jsx)(q.Provider,{value:c,children:(0,a.jsx)(e,{ref:i,...r,className:d()(s,t)})})});_.displayName="AccordionItem";let H=u.forwardRef((e,t)=>{let{as:s="div",activeKey:n,bsPrefix:r,className:i,onSelect:c,flush:l,alwaysOpen:o,...A}=(0,Z.Ch)(e,{activeKey:"onSelect"}),m=(0,h.vE)(r,"accordion"),p=(0,u.useMemo)(()=>({activeEventKey:n,onSelect:c,alwaysOpen:o}),[n,c,o]);return(0,a.jsx)(I.Provider,{value:p,children:(0,a.jsx)(s,{ref:t,...A,className:d()(i,m,l&&`${m}-flush`)})})});H.displayName="Accordion";var M=Object.assign(H,{Button:P,Collapse:U,Item:_,Header:L,Body:O}),Q=s(4331);function V(e){let{filters:t,callback:s}=e,[n,r]=(0,u.useState)({});return(0,u.useEffect)(()=>{t&&r(t)},[t]),(0,a.jsx)(a.Fragment,{children:0===Object.keys(n).length?(0,a.jsxs)(M,{alwaysOpen:!0,className:"my-accordion",children:[(0,a.jsxs)(M.Item,{eventKey:"0",children:[(0,a.jsx)(Q.Z,{as:M.Header,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:8})}),(0,a.jsx)(Q.Z,{as:M.Body,animation:"glow",children:(0,a.jsx)(Q.Z,{as:l.Z.Check,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:10})})})]}),(0,a.jsxs)(M.Item,{eventKey:"1",children:[(0,a.jsx)(Q.Z,{as:M.Header,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:8})}),(0,a.jsx)(Q.Z,{as:M.Body,animation:"glow",children:(0,a.jsx)(Q.Z,{as:l.Z.Check,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:10})})})]}),(0,a.jsxs)(M.Item,{eventKey:"2",children:[(0,a.jsx)(Q.Z,{as:M.Header,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:8})}),(0,a.jsx)(Q.Z,{as:M.Body,animation:"glow",children:(0,a.jsx)(Q.Z,{as:l.Z.Check,animation:"glow",children:(0,a.jsx)(Q.Z,{xs:10})})})]})]}):(0,a.jsx)(M,{alwaysOpen:!0,className:"my-accordion",children:Object.keys(n).map((e,t)=>(0,a.jsxs)(M.Item,{eventKey:t,children:[(0,a.jsx)(M.Header,{children:e}),(0,a.jsx)(M.Body,{children:Object.keys(n[e]).map((t,i)=>(0,a.jsx)(l.Z.Check,{type:"checkbox",label:t,id:t,className:"text-capitalize",checked:n[e][t],onChange:a=>{let i={...n};i[e][t]=a.target.checked,r(i),s(i)}},i))})]},t))})})}var D=s(7328),Y=s(1163),F=s(80);let T=u.forwardRef(({active:e,disabled:t,className:s,style:n,activeLabel:r,children:i,...c},l)=>{let o=e||t?"span":F.Z;return(0,a.jsx)("li",{ref:l,style:n,className:d()(s,"page-item",{active:e,disabled:t}),children:(0,a.jsxs)(o,{className:"page-link",...c,children:[i,e&&r&&(0,a.jsx)("span",{className:"visually-hidden",children:r})]})})});function z(e,t,s=e){let n=u.forwardRef(({children:e,...n},r)=>(0,a.jsxs)(T,{...n,ref:r,children:[(0,a.jsx)("span",{"aria-hidden":"true",children:e||t}),(0,a.jsx)("span",{className:"visually-hidden",children:s})]}));return n.displayName=e,n}T.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},T.displayName="PageItem";let G=z("First","\xab"),K=z("Prev","‹","Previous"),J=z("Ellipsis","…","More"),W=z("Next","›"),X=z("Last","\xbb"),ee=u.forwardRef(({bsPrefix:e,className:t,size:s,...n},r)=>{let i=(0,h.vE)(e,"pagination");return(0,a.jsx)("ul",{ref:r,...n,className:d()(t,i,s&&`${i}-${s}`)})});ee.displayName="Pagination";var et=Object.assign(ee,{First:G,Prev:K,Ellipsis:J,Item:T,Next:W,Last:X}),es=s(6526),ea=s.n(es);function en(e){let{pageCount:t,currentPage:s,maxPageNumbersShown:n,setCurrentPage:r,paginationSize:i}=e;if(t<=1)return null;let c=Math.max(s-Math.floor(n/2),1),l=Math.min(c+n-1,t);return l-c<n-1&&(c=Math.max(l-n+1,1)),(0,a.jsxs)(et,{className:"".concat(ea().pagination," justify-content-center gap-1"),size:i,children:[(0,a.jsx)(et.First,{onClick:()=>{r(1)},disabled:1===s}),(0,a.jsx)(et.Prev,{onClick:()=>{r(s-1)},disabled:1===s}),Array.from({length:l-c+1}).map((e,t)=>{let n=c+t;return(0,a.jsx)(et.Item,{active:n===s,onClick:()=>r(n),className:"",children:n},n)}),(0,a.jsx)(et.Next,{onClick:()=>{r(s+1)},disabled:s===t}),(0,a.jsx)(et.Last,{onClick:()=>{r(t)},disabled:s===t})]})}function er(){let e=(0,Y.useRouter)(),[t,s]=(0,u.useState)(null),[n,o]=(0,u.useState)([]),[d,h]=(0,u.useState)({}),[m,p]=(0,u.useState)(null),[j,f]=(0,u.useState)(!0),[v,y]=(0,u.useState)("relevance"),w=(0,u.useRef)(),[b,N]=(0,u.useState)(10),[E,S]=(0,u.useState)(1),[k,R]=(0,u.useState)(1),[Z,B]=(0,u.useState)(5),[$,I]=(0,u.useState)("sm"),[U,q]=(0,u.useState)(0),[O,P]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{if(e.query){if(e.query.page&&S(parseInt(e.query.page)),null!=e.query.q){let t=e.query.q;s(t=(t=decodeURIComponent(t)).replace(/\+/g," "))}e.query.limit&&N(parseInt(e.query.limit)),e.query.sort&&y(e.query.sort)}},[e.query]),(0,u.useEffect)(()=>{if(null!=t){let e={},s=t.split(" ");s.forEach(t=>{let s=t.split(":");2===s.length&&(e[s[0]]?e[s[0]].push(s[1]):e[s[0]]=[s[1]])}),e.query=s.filter(e=>!e.includes(":")),e.query=e.query.join(" "),e.query||(e.query=""),e.sort=v,p(e)}},[t]),(0,u.useEffect)(()=>{let e=async()=>{let e=await (0,D.Z)();h(e);let t={};for(let s in e){let a={};e[s].forEach(e=>{m[s]&&m[s].includes(e)?a[e]=!0:a[e]=!1}),t[s]=a}h(t),f(!0);let s=await x(m,E,b);o(s.resources),q(s.total),R(Math.ceil(s.total/b)),f(!1)};m&&e()},[m,E,b]),(0,u.useEffect)(()=>{function e(){window.innerWidth<768?(B(5),I("sm")):(B(10),I(null))}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,u.useEffect)(()=>{function e(){window.innerWidth<=425?P(!0):P(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Search Resources"}),(0,a.jsx)("meta",{name:"description",content:"Find the resource you need"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsxs)("div",{className:"d-flex flex-column ".concat(O?null:"gap-4"," align-items-center"),children:[(0,a.jsx)("div",{className:"".concat(O?"p-4":"p-5"," w-100 bg-light"),children:(0,a.jsx)(g.Z,{callback:function(t){s(t),e.push({pathname:"/resources",query:{q:t,page:1,sort:m.sort,limit:b}})},query:t,ref:w})}),(0,a.jsx)("div",{className:"".concat(O?"p-4":null," content"),children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{xs:3,className:"filters",children:(0,a.jsx)(V,{filters:d,callback:function(t){let s=function(e){let t="";for(let s in e)for(let a in e[s])e[s][a]&&(t+="".concat(s,":").concat(a," "));let s=w.current.getSearchQuery().split(" ").filter(e=>!e.includes(":"));return(s=s.join(" "))&&(t+=s),t}(t);e.push({pathname:"/resources",query:{q:s,page:1,sort:m.sort,limit:b}})}})}),(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(i.Z,{className:"justify-content-between align-items-center mb-1 results-sortBy-row",children:[(0,a.jsxs)("div",{className:"w-auto",children:[(0,a.jsx)("span",{className:"text-uppercase me-2 text-muted value-label",children:"Results"}),(0,a.jsxs)("span",{className:"primary value",style:{paddingLeft:"0.50rem"},children:[0==U?0:(E-1)*b+1," - ",Math.min(E*b,U)," of ",U]})]}),(0,a.jsxs)(l.Z.Select,{className:"w-auto primary value",defaultValue:b.toString(),value:b.toString(),onChange:s=>{E>Math.ceil(U/parseInt(s.target.value))?(N(parseInt(s.target.value)),S(Math.ceil(U/parseInt(s.target.value))),e.push({pathname:"/resources",query:{q:t,page:Math.ceil(U/parseInt(s.target.value)),limit:parseInt(s.target.value)}})):(N(parseInt(s.target.value)),e.push({pathname:"/resources",query:{q:t,page:E,limit:parseInt(s.target.value)}}))},style:{cursor:"pointer"},children:[(0,a.jsx)("option",{value:"10",children:"10 per page"}),(0,a.jsx)("option",{value:"25",children:"25 per page"}),(0,a.jsx)("option",{value:"50",children:"50 per page"}),(0,a.jsx)("option",{value:"100",children:"100 per page"})]}),(0,a.jsxs)("div",{className:"w-auto d-flex align-items-center",children:[(0,a.jsx)("span",{className:"text-uppercase me-2 text-muted value-label",children:"Sort by"}),(0,a.jsxs)(l.Z.Select,{className:"w-auto primary text-uppercase border-0 value","aria-label":"Default select example",value:v,onChange:function(s){p({...m,sort:s.target.value}),e.push({pathname:"/resources",query:{q:t,page:E,sort:s.target.value,limit:b}})},style:{paddingLeft:"0.50rem",cursor:"pointer"},children:[(0,a.jsx)("option",{value:"relevance",children:"Relevance"}),(0,a.jsx)("option",{value:"date",children:"Date"}),(0,a.jsx)("option",{value:"version",children:"Version"}),(0,a.jsx)("option",{value:"id_asc",children:"Name Ascending"}),(0,a.jsx)("option",{value:"id_desc",children:"Name Descending"})]})]})]}),(0,a.jsx)(i.Z,{className:"mt-2",children:j?(0,a.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center p-5",children:(0,a.jsx)(A,{animation:"border"})}):(0,a.jsx)(function(){return(null==n?void 0:n.length)===0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center p-5",children:(0,a.jsx)("h1",{className:"text-muted",children:"No results found"})})]}):(0,a.jsx)("div",{children:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(C,{resource:e}),(0,a.jsx)("hr",{})]},t))})},{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(en,{pageCount:k,currentPage:E,maxPageNumbersShown:Z,setCurrentPage:function(s){S(s),e.push({pathname:"/resources",query:{q:t,page:s,sort:m.sort,limit:b}})},paginationSize:$})})]})]})})]})]})}},6526:function(e){e.exports={pagination:"paginate_pagination__jRVSP"}},9008:function(e,t,s){e.exports=s(3121)},7977:function(e,t,s){"use strict";var a=s(4184),n=s.n(a),r=s(7294),i=s(6792),c=s(5893);let l=r.forwardRef(({bsPrefix:e,bg:t,pill:s,text:a,className:r,as:l="span",...o},d)=>{let u=(0,i.vE)(e,"badge");return(0,c.jsx)(l,{ref:d,...o,className:n()(r,u,s&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});l.displayName="Badge",l.defaultProps={bg:"primary",pill:!1},t.Z=l},4331:function(e,t,s){"use strict";s.d(t,{Z:function(){return A}});var a=s(7294),n=s(4184),r=s.n(n),i=s(6792),c=s(1555);function l({animation:e,bg:t,bsPrefix:s,size:a,...n}){s=(0,i.vE)(s,"placeholder");let[{className:l,...o}]=(0,c.r)(n);return{...o,className:r()(l,e?`${s}-${e}`:s,a&&`${s}-${a}`,t&&`bg-${t}`)}}var o=s(5005),d=s(5893);let u=a.forwardRef((e,t)=>{let s=l(e);return(0,d.jsx)(o.Z,{...s,ref:t,disabled:!0,tabIndex:-1})});u.displayName="PlaceholderButton";let h=a.forwardRef(({as:e="span",...t},s)=>{let a=l(t);return(0,d.jsx)(e,{...a,ref:s})});h.displayName="Placeholder";var A=Object.assign(h,{Button:u})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1903)}),_N_E=e.O()}]);