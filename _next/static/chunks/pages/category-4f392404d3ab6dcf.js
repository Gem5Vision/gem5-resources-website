(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{5957:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return t(86)}])},490:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var a=t(5893),s=t(1117),n=t(3489),i=t(7294);function c(e){let[r,t]=(0,i.useState)(null),[c,o]=(0,i.useState)(!1),l=async e=>{o(!0),await navigator.clipboard.writeText(e),setTimeout(()=>o(!1),750)};return(0,a.jsxs)("div",{style:{position:"relative",width:"auto"},children:[e.children,(0,a.jsx)("span",{ref:t,style:{position:"absolute",right:0,top:0,cursor:"pointer",marginRight:"5px",marginTop:"5px"},children:(0,a.jsx)("div",{className:"copy-button",onClick:async()=>l(function e(r){if("string"==typeof r)return r;if(Array.isArray(r)){let t="";for(let a=0;a<r.length;a++)t+=e(r[a]);return t}if("object"==typeof r){let t="";return r.props.children&&(t+=e(r.props.children)),t}}(e.children.props.children)),children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}),(0,a.jsx)(s.Z,{target:r,show:c,placement:"right",children:e=>(0,a.jsx)(n.Z,{id:"overlay-tooltip",...e,children:"Text has been copied to the clipboard"})})]})}},8950:function(e,r,t){"use strict";t.d(r,{Z:function(){return T}});var a=t(5893),s=t(7294),n=t(4184),i=t.n(n),c=t(6792),o=t(6611),l=t(9602);let d=s.forwardRef(({bsPrefix:e,className:r,variant:t,as:s="img",...n},o)=>{let l=(0,c.vE)(e,"card-img");return(0,a.jsx)(s,{ref:o,className:i()(t?`${l}-${t}`:l,r),...n})});d.displayName="CardImg";var u=t(9059);let h=s.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},o)=>{let l=(0,c.vE)(e,"card-header"),d=(0,s.useMemo)(()=>({cardHeaderBsPrefix:l}),[l]);return(0,a.jsx)(u.Z.Provider,{value:d,children:(0,a.jsx)(t,{ref:o,...n,className:i()(r,l)})})});h.displayName="CardHeader";let m=(0,l.Z)("h5"),f=(0,l.Z)("h6"),p=(0,o.Z)("card-body"),x=(0,o.Z)("card-title",{Component:m}),g=(0,o.Z)("card-subtitle",{Component:f}),j=(0,o.Z)("card-link",{Component:"a"}),y=(0,o.Z)("card-text",{Component:"p"}),b=(0,o.Z)("card-footer"),v=(0,o.Z)("card-img-overlay"),w=s.forwardRef(({bsPrefix:e,className:r,bg:t,text:s,border:n,body:o,children:l,as:d="div",...u},h)=>{let m=(0,c.vE)(e,"card");return(0,a.jsx)(d,{ref:h,...u,className:i()(r,m,t&&`bg-${t}`,s&&`text-${s}`,n&&`border-${n}`),children:o?(0,a.jsx)(p,{children:l}):l})});w.displayName="Card",w.defaultProps={body:!1};var N=Object.assign(w,{Img:d,Title:x,Subtitle:g,Body:p,Link:j,Text:y,Header:h,Footer:b,ImgOverlay:v}),Z=t(5005),_=t(1664),C=t.n(_);function T(e){let{className:r,cardTitle:t,cardText:s,pathRef:n,buttonText:i}=e;return(0,a.jsx)(N,{className:r,children:(0,a.jsxs)(N.Body,{children:[(0,a.jsx)(N.Title,{className:"secondary-text-semi",children:t}),(0,a.jsx)(N.Text,{className:"main-text-regular",children:s}),(0,a.jsx)(C(),{href:n,passHref:!0,legacyBehavior:!0,children:(0,a.jsx)(Z.Z,{variant:"outline-primary",className:"main-text-regular",children:i})})]})})}},86:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var a=t(5893),s=t(682),n=t(8950),i=t(7294),c=t(4051),o=t(1555),l=t(4184),d=t.n(l),u=t(6792),h=t(80);let m=i.forwardRef(({bsPrefix:e,active:r,children:t,className:s,as:n="li",linkAs:i=h.Z,linkProps:c,href:o,title:l,target:m,...f},p)=>{let x=(0,u.vE)(e,"breadcrumb-item");return(0,a.jsx)(n,{ref:p,...f,className:d()(x,s,{active:r}),"aria-current":r?"page":void 0,children:r?t:(0,a.jsx)(i,{...c,href:o,title:l,target:m,children:t})})});m.displayName="BreadcrumbItem",m.defaultProps={active:!1,linkProps:{}};let f=i.forwardRef(({bsPrefix:e,className:r,listProps:t,children:s,label:n,as:i="nav",...c},o)=>{let l=(0,u.vE)(e,"breadcrumb");return(0,a.jsx)(i,{"aria-label":n,className:r,ref:o,...c,children:(0,a.jsx)("ol",{...t,className:d()(l,null==t?void 0:t.className),children:s})})});f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};var p=Object.assign(f,{Item:m}),x=t(5005),g=t(1664),j=t.n(g),y=t(2453),b=t.n(y);function v(e){let{category:r}=e;function t(e){return e.charAt(0).toUpperCase()+e.slice(1)}return(0,a.jsxs)(c.Z,{className:"".concat(b().categoriesHeaderRow," d-flex flex-wrap"),children:[(0,a.jsx)(o.Z,{className:"".concat(b().categoriesHeaderCol," mt-3"),children:(0,a.jsxs)(p,{className:b().categoriesBreadcrumb,children:[(0,a.jsx)(p.Item,{href:"/gem5-resources-website/",children:"Home"}),(0,a.jsx)(p.Item,{href:"/gem5-resources-website/category",children:"Category"}),(0,a.jsx)(p.Item,{active:!0,children:t(r)})]})}),(0,a.jsx)(o.Z,{className:"".concat(b().categoriesHeaderCol," mt-3"),children:(0,a.jsx)(j(),{href:"/resources?q=category:"+r,passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)(x.Z,{variant:"outline-primary",className:"main-text-regular",children:["View All ",function(e){let r=e.slice(-1);return"y"===r?e.slice(0,e.length-1)+"ies":e+"s"}(t(r))]})})})]})}var w=t(4741),N=t(4996),Z=t(8394),_=t(9232),C=t(9721),T=t(3398),k=t(4800),H=t(490),R=t(1163);function E(){let[e,r]=(0,i.useState)([]),[c,o]=(0,i.useState)(null),[l,d]=(0,i.useState)(""),u=(0,R.useRouter)();return(0,i.useEffect)(()=>{async function e(e){try{let r=(await t(3410)("./".concat(e,".md"))).default;d(r)}catch(e){console.log(e),u.push("/404")}}let r=window.location.hash;if(r){let t=r.substr(1);o(t),e(t);return}},[u]),(0,i.useEffect)(()=>{fetch("https://raw.githubusercontent.com/Gem5Vision/json-to-mongodb/main/schema/test.json").then(e=>e.json()).then(e=>{console.log(e.properties.category.enum);let t=e.properties.category.enum.map(r=>({cardTitle:r.charAt(0).toUpperCase()+r.substr(1).toLowerCase(),cardText:e.definitions[r].description,pathRef:"/category#".concat(r),buttonText:"Learn More"}));r(t)})},[]),c?(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(v,{category:c}),(0,a.jsx)(w.D,{className:"markdown-body mt-3",rehypePlugins:[[N.Z,{ignoreMissing:!0}],T.Z,C.Z],remarkPlugins:[Z.Z,_.Z,k.Z],components:{pre:e=>{let{node:r,...t}=e;return(0,a.jsx)(H.Z,{children:(0,a.jsx)("pre",{...t,children:t.children})})}},children:l})]}):(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"cardsBlockContainer mt-5 mb-5",children:[(0,a.jsx)("h2",{className:"secondary page-title mb-3",children:"Categories"}),(0,a.jsx)("p",{className:"text-muted main-text-regular",children:'These are the "Categories" of Resources we use on this website.'}),(0,a.jsx)("div",{className:"cardsContainer",style:{justifyContent:"center"},children:e.map((e,r)=>(0,a.jsx)(n.Z,{className:"cardStyle",cardTitle:e.cardTitle,cardText:e.cardText,pathRef:e.pathRef,buttonText:e.buttonText},r))})]})})}},2453:function(e){e.exports={categoriesBreadcrumb:"categoryheader_categoriesBreadcrumb___w_RS",categoriesHeaderRow:"categoryheader_categoriesHeaderRow__juMXO",categoriesHeaderCol:"categoryheader_categoriesHeaderCol__2VlMp"}},3410:function(e,r,t){var a={"./benchmark.md":[9290,290],"./binary.md":[908,908],"./bootloader.md":[8125,125],"./diskimage.md":[7834,834],"./kernel.md":[914,914],"./simpoint.md":[5093,93],"./workload.md":[153,153]};function s(e){if(!t.o(a,e))return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=a[e],s=r[0];return t.e(r[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(a)},s.id=3410,e.exports=s}},function(e){e.O(0,[936,901,774,888,179],function(){return e(e.s=5957)}),_N_E=e.O()}]);