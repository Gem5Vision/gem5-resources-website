(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{1903:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return s(4229)}])},1466:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/arm.c841c5b2.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEU+jbk9jbo9jbk+jLo+jLk+jbk9jbo9jbk+jLo+jLk9jbo9jbk9jbo9jbo9jbk9jbk9jbk+jLo+jLk+jbk+jLo9jbo9jbk+jLk+jLo+jLo+jLo9jbk9jbk9jbo+jLo9jbk+jbo+jLo+jLk9jbk+jbk+jLo/VehFAAAAJnRSTlMAAAAAAAEBAQEBAgIDBAQICw0QEREWFjI1Nz9LYGJmd3x8fICXmRhesnIAAABGSURBVHjaHcbHEYAwDATA09kgkzMmZ/pvkRn2tZBQnYsCCxUaY0GwK6q2bgz8uV/b+4zwxz0P6zKBfZmkWR5DSYpQQNU/H3VvAyD7LVU8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},3620:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/mips.00461088.png",height:686,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNsrevM+v+P8QYjE4PJ//8MDIyM/xn//2f8BaR1GBgYvjNOW1iox8jA8O//PyYORqa/jOy8n5/9/c0m8OWViBwT818mAHDbGg+i1zK9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5434:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/power.6e197e4c.png",height:411,width:325,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/ASEbH/kCEwUGAgMA/xkcBQDf2/kBAuz8+wEEABr/VHshAC80EwDLy+4A+On1AODH8AABIx8f/v4GAQEYLA4ASFAaAO7j8QCZfOT/AQ8MH/42MwQBZ3UgANXrBAB/YdMAIyEHAAEAABT+cYYgAREkGgB+m+YAILvlAAAiBAABLSMp/hQwHAG/+twAAbPfAC8wMAAGBAX/AUxLS/9LSkwA9fP0AAUJBgD8/PwArqytAAEnJSb5FxkXBRcXF/8A/wEA+Pj4AdTR0vsXM0VN6/zntwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},7891:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/risc_v.6e2d585e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42h3MsQ1BARhF4Y9KIlFZgB1UYgWxgQ3MoLOBHUQjUYsZaPSCDTRPvPuSP7e4OTnJoaePtWjFn5uHA46iEVJb2NRfeXk64Sw+huwxsi0/NyNWpoU7A18iJpbuuAg/8Tamsk0HzSIoqC0nPUIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3236:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/sparc.82e2e341.png",height:223,width:440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAWUlEQVR42mO462+YA8SRQNwAxP53/AwNgbgCyPYB0vEMQEYmEHfc8TfsB9LzgXQ9kN4ExMVAthIDkOECxHZALAvExUAcfdfPUAuIDYEKghiQAVCSH4gZkcUAyt4sXnNjGGcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},201:function(e,t){"use strict";t.Z={src:"/gem5-resources-website//_next/static/media/x86.ac0718a0.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42l3BMQ4BQQAF0Hc/lcohtKLSOADRSTS0SqJUO4NkpxDX2Jn5Ssm+RxFV01VRiC7+VfGw9fV0FZrYmDuZORp5O1hZW9hZevFxd7M3uDjrZNIgqqoZRfkBJns1RCFy+mYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7328:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(7829);async function r(){let e=await (0,a.Z)(),t=await fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*",Authorization:"Bearer "+e},body:JSON.stringify({dataSource:"gem5-vision",database:"gem5-vision",collection:"resources",pipeline:[{$addFields:{a:"$versions"}},{$group:{_id:null,category:{$addToSet:"$category"},architecture:{$addToSet:"$architecture"},versions:{$addToSet:"$a.version"}}}]})}).catch(e=>console.log(e)),s=await t.json();return s.documents[0].architecture=s.documents[0].architecture.filter(e=>null!=e),delete s.documents[0]._id,s.documents[0].versions=s.documents[0].versions.reduce((e,t)=>e.length>t.length?e:t),s.documents[0].versions=s.documents[0].versions,s.documents[0].category.sort(),s.documents[0].architecture.sort(),s.documents[0].versions.sort().reverse(),s.documents[0]}async function n(){return await r()}},7829:function(e,t,s){"use strict";async function a(){return(await (await fetch("https://realm.mongodb.com/api/client/v2.0/app/data-ejhjf/auth/providers/api-key/login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*"},body:JSON.stringify({key:"pKkhRJGJaQ3NdJyDt69u4GPGQTDUIhHlx4a3lrKUNx2hxuc8uba8NrP3IVRvlzlo"})}).catch(e=>console.log(e))).json()).access_token}s.d(t,{Z:function(){return a}})},4229:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return er}});var a=s(5893),r=s(9008),n=s.n(r),i=s(4051),c=s(1555),l=s(7346),o=s(4184),u=s.n(o),d=s(7294),A=s(6792);let h=d.forwardRef(({bsPrefix:e,variant:t,animation:s="border",size:r,as:n="div",className:i,...c},l)=>{e=(0,A.vE)(e,"spinner");let o=`${e}-${s}`;return(0,a.jsx)(n,{ref:l,...c,className:u()(i,o,r&&`${o}-${r}`,t&&`text-${t}`)})});h.displayName="Spinner";var p=s(7829);async function m(e,t,s){let a=[],r=await (0,p.Z)();""===e.query.trim()&&"relevance"===e.sort&&(e.sort="default");let n=[];e.tags&&(n=n.concat([{$addFields:{tag:"$tags"}},{$unwind:"$tag"},{$match:{tag:{$in:e.tags||[]}}},{$group:{_id:"$_id",doc:{$first:"$$ROOT"}}},{$replaceRoot:{newRoot:"$doc"}}])),n=n.concat([{$addFields:{a:"$versions.version",ver_latest:{$last:"$versions.version"}}}]);let i=[];e.category&&i.push({category:{$in:e.category||[]}}),e.architecture&&i.push({architecture:{$in:e.architecture||[]}}),e.versions&&i.push({"versions.version":{$in:e.versions||[]}}),i.length>0&&n.push({$match:{$and:i}}),n=n.concat([{$sort:function(e){switch(e){case"date":return{date:-1};case"name":case"id_asc":return{id:1};case"version":return{ver_latest:-1};case"id_desc":return{id:-1};case"default":return{_id:-1};default:return{score:{$meta:"textScore"}}}}(e.sort)},{$unset:["a","ver_latest"]},{$setWindowFields:{output:{totalCount:{$count:{}}}}},{$skip:(t-1)*s},{$limit:s}]),""!==e.query.trim()&&(n.unshift({$addFields:{score:{$meta:"searchScore"}}}),n.unshift({$search:{text:{query:e.query,path:["id","description","resources","tags"],fuzzy:{maxEdits:2,maxExpansions:100}}}}));let c=await fetch("https://us-west-2.aws.data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*",Authorization:"Bearer "+r},body:JSON.stringify({dataSource:"gem5-vision",database:"gem5-vision",collection:"resources",pipeline:n})}).catch(e=>console.log(e));return[(a=await c.json()).documents,a.documents.length>0?a.documents[0].totalCount:0]}async function g(e,t,s){let a;let r=(a=await m(e,t,s))[1];return{resources:a=a[0],total:r}}var x=s(2210),f=s(1664),j=s.n(f),v=s(201),y=s(7891),b=s(5675),w=s.n(b),N=s(1466),E=s(3236),S=s(3620),R=s(5434),C=s(7977);function k(e){var t,s;let{resource:r}=e;return(0,a.jsx)("div",{className:"search-result",children:(0,a.jsxs)(j(),{href:"/resources/"+r.id,style:{textDecoration:"none",color:"inherit"},children:[(0,a.jsx)("div",{className:"search-result__title",children:(0,a.jsx)("h4",{children:r.id})}),(0,a.jsx)("div",{className:"search-result__description",children:(0,a.jsx)("p",{children:r.description})}),(0,a.jsxs)("div",{className:"d-flex gap-3",children:[(0,a.jsxs)("div",{className:"d-flex gap-1 align-items-center",children:[(0,a.jsx)(w(),{src:function(e){switch(e){case"X86":default:return v.Z;case"RISCV":return y.Z;case"ARM":return N.Z;case"SPARC":return E.Z;case"MIPS":return S.Z;case"POWER":return R.Z}}(r.architecture),alt:null!==(t=r.architecture)&&void 0!==t?t:"Unknown",width:20,className:"mb-3"}),(0,a.jsx)("p",{children:null!==(s=r.architecture)&&void 0!==s?s:"Unknown"})]}),(0,a.jsx)("div",{className:"d-flex flex-row gap-1",children:(0,a.jsx)("p",{className:"text-capitalize font-weight-light ",children:r.category})}),(0,a.jsxs)("div",{className:"d-flex flex-row gap-1",children:[(0,a.jsx)("h6",{style:{lineHeight:"inherit",margin:"0"},children:"v"}),r.versions.length>1?r.versions[1].version:r.versions[0].version]}),(0,a.jsx)("div",{className:"d-flex flex-row gap-1",children:r.tags?r.tags.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(C.Z,{pill:!0,bg:"primary",children:e})},t)):""})]})]})})}var B=s(5446),$=s(6518);function I(e,t){return Array.isArray(e)?e.includes(t):e===t}let U=d.createContext({});U.displayName="AccordionContext";let Z=d.forwardRef(({as:e="div",bsPrefix:t,className:s,children:r,eventKey:n,...i},c)=>{let{activeEventKey:l}=(0,d.useContext)(U);return t=(0,A.vE)(t,"accordion-collapse"),(0,a.jsx)($.Z,{ref:c,in:I(l,n),...i,className:u()(s,t),children:(0,a.jsx)(e,{children:d.Children.only(r)})})});Z.displayName="AccordionCollapse";let q=d.createContext({eventKey:""});q.displayName="AccordionItemContext";let L=d.forwardRef(({as:e="div",bsPrefix:t,className:s,onEnter:r,onEntering:n,onEntered:i,onExit:c,onExiting:l,onExited:o,...h},p)=>{t=(0,A.vE)(t,"accordion-body");let{eventKey:m}=(0,d.useContext)(q);return(0,a.jsx)(Z,{eventKey:m,onEnter:r,onEntering:n,onEntered:i,onExit:c,onExiting:l,onExited:o,children:(0,a.jsx)(e,{ref:p,...h,className:u()(s,t)})})});L.displayName="AccordionBody";let O=d.forwardRef(({as:e="button",bsPrefix:t,className:s,onClick:r,...n},i)=>{t=(0,A.vE)(t,"accordion-button");let{eventKey:c}=(0,d.useContext)(q),l=function(e,t){let{activeEventKey:s,onSelect:a,alwaysOpen:r}=(0,d.useContext)(U);return n=>{let i=e===s?null:e;r&&(i=Array.isArray(s)?s.includes(e)?s.filter(t=>t!==e):[...s,e]:[e]),null==a||a(i,n),null==t||t(n)}}(c,r),{activeEventKey:o}=(0,d.useContext)(U);return"button"===e&&(n.type="button"),(0,a.jsx)(e,{ref:i,onClick:l,...n,"aria-expanded":Array.isArray(o)?o.includes(c):c===o,className:u()(s,t,!I(o,c)&&"collapsed")})});O.displayName="AccordionButton";let P=d.forwardRef(({as:e="h2",bsPrefix:t,className:s,children:r,onClick:n,...i},c)=>(t=(0,A.vE)(t,"accordion-header"),(0,a.jsx)(e,{ref:c,...i,className:u()(s,t),children:(0,a.jsx)(O,{onClick:n,children:r})})));P.displayName="AccordionHeader";let _=d.forwardRef(({as:e="div",bsPrefix:t,className:s,eventKey:r,...n},i)=>{t=(0,A.vE)(t,"accordion-item");let c=(0,d.useMemo)(()=>({eventKey:r}),[r]);return(0,a.jsx)(q.Provider,{value:c,children:(0,a.jsx)(e,{ref:i,...n,className:u()(s,t)})})});_.displayName="AccordionItem";let Q=d.forwardRef((e,t)=>{let{as:s="div",activeKey:r,bsPrefix:n,className:i,onSelect:c,flush:l,alwaysOpen:o,...h}=(0,B.Ch)(e,{activeKey:"onSelect"}),p=(0,A.vE)(n,"accordion"),m=(0,d.useMemo)(()=>({activeEventKey:r,onSelect:c,alwaysOpen:o}),[r,c,o]);return(0,a.jsx)(U.Provider,{value:m,children:(0,a.jsx)(s,{ref:t,...h,className:u()(i,p,l&&`${p}-flush`)})})});Q.displayName="Accordion";var V=Object.assign(Q,{Button:O,Collapse:Z,Item:_,Header:P,Body:L});function M(e){let{filters:t,callback:s}=e,[r,n]=(0,d.useState)({});return(0,d.useEffect)(()=>{t&&n(t)},[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(V,{alwaysOpen:!0,className:"my-accordion",children:Object.keys(r).map((e,t)=>(0,a.jsxs)(V.Item,{eventKey:t,children:[(0,a.jsx)(V.Header,{children:e}),(0,a.jsx)(V.Body,{children:Object.keys(r[e]).map((t,i)=>(0,a.jsx)(l.Z.Check,{type:"checkbox",label:t,id:t,className:"text-capitalize",checked:r[e][t],onChange:a=>{let i={...r};i[e][t]=a.target.checked,n(i),s(i)}},i))})]},t))})})}var H=s(7328),D=s(1163),Y=s(80);let z=d.forwardRef(({active:e,disabled:t,className:s,style:r,activeLabel:n,children:i,...c},l)=>{let o=e||t?"span":Y.Z;return(0,a.jsx)("li",{ref:l,style:r,className:u()(s,"page-item",{active:e,disabled:t}),children:(0,a.jsxs)(o,{className:"page-link",...c,children:[i,e&&n&&(0,a.jsx)("span",{className:"visually-hidden",children:n})]})})});function F(e,t,s=e){let r=d.forwardRef(({children:e,...r},n)=>(0,a.jsxs)(z,{...r,ref:n,children:[(0,a.jsx)("span",{"aria-hidden":"true",children:e||t}),(0,a.jsx)("span",{className:"visually-hidden",children:s})]}));return r.displayName=e,r}z.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},z.displayName="PageItem";let T=F("First","\xab"),G=F("Prev","‹","Previous"),K=F("Ellipsis","…","More"),J=F("Next","›"),W=F("Last","\xbb"),X=d.forwardRef(({bsPrefix:e,className:t,size:s,...r},n)=>{let i=(0,A.vE)(e,"pagination");return(0,a.jsx)("ul",{ref:n,...r,className:u()(t,i,s&&`${i}-${s}`)})});X.displayName="Pagination";var ee=Object.assign(X,{First:T,Prev:G,Ellipsis:K,Item:z,Next:J,Last:W}),et=s(6526),es=s.n(et);function ea(e){let{pageCount:t,currentPage:s,maxPageNumbersShown:r,setCurrentPage:n,paginationSize:i}=e;if(t<=1)return null;let c=Math.max(s-Math.floor(r/2),1),l=Math.min(c+r-1,t);return l-c<r-1&&(c=Math.max(l-r+1,1)),(0,a.jsxs)(ee,{className:"".concat(es().pagination," justify-content-center gap-1"),size:i,children:[(0,a.jsx)(ee.First,{onClick:()=>{n(1)},disabled:1===s}),(0,a.jsx)(ee.Prev,{onClick:()=>{n(s-1)},disabled:1===s}),Array.from({length:l-c+1}).map((e,t)=>{let r=c+t;return(0,a.jsx)(ee.Item,{active:r===s,onClick:()=>n(r),className:"",children:r},r)}),(0,a.jsx)(ee.Next,{onClick:()=>{n(s+1)},disabled:s===t}),(0,a.jsx)(ee.Last,{onClick:()=>{n(t)},disabled:s===t})]})}function er(){let e=(0,D.useRouter)(),[t,s]=(0,d.useState)(null),[r,o]=(0,d.useState)([]),[u,A]=(0,d.useState)({}),[p,m]=(0,d.useState)(null),[f,j]=(0,d.useState)(!0),[v,y]=(0,d.useState)("relevance"),b=(0,d.useRef)(),[w,N]=(0,d.useState)(10),[E,S]=(0,d.useState)(1),[R,C]=(0,d.useState)(1),[B,$]=(0,d.useState)(5),[I,U]=(0,d.useState)("sm"),[Z,q]=(0,d.useState)(0),[L,O]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{if(e.query){if(e.query.page&&S(parseInt(e.query.page)),null!=e.query.q){let t=e.query.q;s(t=(t=decodeURIComponent(t)).replace(/\+/g," "))}e.query.limit&&N(parseInt(e.query.limit)),e.query.sort&&y(e.query.sort)}},[e.query]),(0,d.useEffect)(()=>{if(null!=t){let e={},s=t.split(" ");s.forEach(t=>{let s=t.split(":");2===s.length&&(e[s[0]]?e[s[0]].push(s[1]):e[s[0]]=[s[1]])}),e.query=s.filter(e=>!e.includes(":")),e.query=e.query.join(" "),e.query||(e.query=""),e.sort=v,m(e)}},[t]),(0,d.useEffect)(()=>{let e=async()=>{let e=await (0,H.Z)();A(e);let t={};for(let s in e){let a={};e[s].forEach(e=>{p[s]&&p[s].includes(e)?a[e]=!0:a[e]=!1}),t[s]=a}A(t),j(!0);let s=await g(p,E,w);o(s.resources),q(s.total),C(Math.ceil(s.total/w)),j(!1)};p&&e()},[p,E,w]),(0,d.useEffect)(()=>{function e(){window.innerWidth<768?($(5),U("sm")):($(10),U(null))}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,d.useEffect)(()=>{function e(){window.innerWidth<=425?O(!0):O(!1)}return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Search Resources"}),(0,a.jsx)("meta",{name:"description",content:"Find the resource you need"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsxs)("div",{className:"d-flex flex-column ".concat(L?null:"gap-4"," align-items-center"),children:[(0,a.jsx)("div",{className:"".concat(L?"p-4":"p-5"," w-100 bg-light"),children:(0,a.jsx)(x.Z,{callback:function(t){s(t),e.push({pathname:"/resources",query:{q:t,page:1,sort:p.sort,limit:w}})},query:t,ref:b})}),(0,a.jsx)("div",{className:"".concat(L?"p-4":null," content"),children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{xs:3,className:"filters",children:(0,a.jsx)(M,{filters:u,callback:function(t){let s=function(e){let t="";for(let s in e)for(let a in e[s])e[s][a]&&(t+="".concat(s,":").concat(a," "));let s=b.current.getSearchQuery().split(" ").filter(e=>!e.includes(":"));return(s=s.join(" "))&&(t+=s),t}(t);e.push({pathname:"/resources",query:{q:s,page:1,sort:p.sort,limit:w}})}})}),(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(i.Z,{className:"justify-content-between align-items-center mb-1 results-sortBy-row",children:[(0,a.jsxs)("div",{className:"w-auto",children:[(0,a.jsx)("span",{className:"text-uppercase me-2 text-muted value-label",children:"Results"}),(0,a.jsxs)("span",{className:"primary value",style:{paddingLeft:"0.50rem"},children:[0==Z?0:(E-1)*w+1," - ",Math.min(E*w,Z)," of ",Z]})]}),(0,a.jsxs)(l.Z.Select,{className:"w-auto primary value",defaultValue:w.toString(),value:w.toString(),onChange:s=>{E>Math.ceil(Z/parseInt(s.target.value))?(N(parseInt(s.target.value)),S(Math.ceil(Z/parseInt(s.target.value))),e.push({pathname:"/resources",query:{q:t,page:Math.ceil(Z/parseInt(s.target.value)),limit:parseInt(s.target.value)}})):(N(parseInt(s.target.value)),e.push({pathname:"/resources",query:{q:t,page:E,limit:parseInt(s.target.value)}}))},style:{cursor:"pointer"},children:[(0,a.jsx)("option",{value:"10",children:"10 per page"}),(0,a.jsx)("option",{value:"25",children:"25 per page"}),(0,a.jsx)("option",{value:"50",children:"50 per page"}),(0,a.jsx)("option",{value:"100",children:"100 per page"})]}),(0,a.jsxs)("div",{className:"w-auto d-flex align-items-center",children:[(0,a.jsx)("span",{className:"text-uppercase me-2 text-muted value-label",children:"Sort by"}),(0,a.jsxs)(l.Z.Select,{className:"w-auto primary text-uppercase border-0 value","aria-label":"Default select example",value:v,onChange:function(s){m({...p,sort:s.target.value}),e.push({pathname:"/resources",query:{q:t,page:E,sort:s.target.value,limit:w}})},style:{paddingLeft:"0.50rem",cursor:"pointer"},children:[(0,a.jsx)("option",{value:"relevance",children:"Relevance"}),(0,a.jsx)("option",{value:"date",children:"Date"}),(0,a.jsx)("option",{value:"version",children:"Version"}),(0,a.jsx)("option",{value:"id_asc",children:"Name Ascending"}),(0,a.jsx)("option",{value:"id_desc",children:"Name Descending"})]})]})]}),(0,a.jsx)(i.Z,{className:"mt-2",children:f?(0,a.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center p-5",children:(0,a.jsx)(h,{animation:"border"})}):(0,a.jsx)(function(){return(null==r?void 0:r.length)===0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-center p-5",children:(0,a.jsx)("h1",{className:"text-muted",children:"No results found"})})]}):(0,a.jsx)("div",{children:r.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(k,{resource:e}),(0,a.jsx)("hr",{})]},t))})},{})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(ea,{pageCount:R,currentPage:E,maxPageNumbersShown:B,setCurrentPage:function(s){S(s),e.push({pathname:"/resources",query:{q:t,page:s,sort:p.sort,limit:w}})},paginationSize:I})})]})]})})]})]})}},6526:function(e){e.exports={pagination:"paginate_pagination__jRVSP"}},9008:function(e,t,s){e.exports=s(3121)},7977:function(e,t,s){"use strict";var a=s(4184),r=s.n(a),n=s(7294),i=s(6792),c=s(5893);let l=n.forwardRef(({bsPrefix:e,bg:t,pill:s,text:a,className:n,as:l="span",...o},u)=>{let d=(0,i.vE)(e,"badge");return(0,c.jsx)(l,{ref:u,...o,className:r()(n,d,s&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});l.displayName="Badge",l.defaultProps={bg:"primary",pill:!1},t.Z=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1903)}),_N_E=e.O()}]);