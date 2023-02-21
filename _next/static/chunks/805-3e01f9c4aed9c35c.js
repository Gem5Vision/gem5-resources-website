"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{8831:function(e,t,n){n.d(t,{HK:function(){return a},gP:function(){return l}});var r=n(7294);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o);function a(e){let t=(0,r.useContext)(i),n=(0,r.useMemo)(()=>({prefix:t===o?"":`${t.prefix}-${++t.current}`,current:0}),[t]);return r.createElement(i.Provider,{value:n},e.children)}let s=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function l(e){let t=(0,r.useContext)(i);return t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}},5963:function(e,t,n){n.d(t,{W:function(){return d}});var r=n(7294),o=n(6626),i=n(7126),a=n(7514),s=n(5893);let l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f=["activeKey","getControlledId","getControllerId"],u=["as"];function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e){let{active:t,eventKey:n,mountOnEnter:a,transition:s,unmountOnExit:u,role:d="tabpanel",onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}=e,g=c(e,l),x=(0,r.useContext)(o.Z);if(!x)return[Object.assign({},g,{role:d}),{eventKey:n,isActive:t,mountOnEnter:a,transition:s,unmountOnExit:u,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}];let{activeKey:w,getControlledId:O,getControllerId:E}=x,j=c(x,f),Z=(0,i.h)(n);return[Object.assign({},g,{role:d,id:O(n),"aria-labelledby":E(n)}),{eventKey:n,isActive:null==t&&null!=Z?(0,i.h)(w)===Z:t,transition:s||j.transition,mountOnEnter:null!=a?a:j.mountOnEnter,unmountOnExit:null!=u?u:j.unmountOnExit,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}]}let p=r.forwardRef((e,t)=>{let{as:n="div"}=e,r=c(e,u),[l,{isActive:f,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:x,transition:w=a.Z}]=d(r);return(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(i.Z.Provider,{value:null,children:(0,s.jsx)(w,{in:f,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:x,children:(0,s.jsx)(n,Object.assign({},l,{ref:t,hidden:!f,"aria-hidden":!f}))})})})});p.displayName="TabPanel",t.Z=p},3916:function(e,t,n){var r=n(7294),o=n(5446),i=n(8831),a=n(6626),s=n(7126),l=n(5963),f=n(5893);let u=e=>{let{id:t,generateChildId:n,onSelect:l,activeKey:u,defaultActiveKey:c,transition:d,mountOnEnter:p,unmountOnExit:m,children:h}=e,[v,b]=(0,o.$c)(u,c,l),y=(0,i.gP)(t),g=(0,r.useMemo)(()=>n||((e,t)=>y?`${y}-${t}-${e}`:null),[y,n]),x=(0,r.useMemo)(()=>({onSelect:b,activeKey:v,transition:d,mountOnEnter:p||!1,unmountOnExit:m||!1,getControlledId:e=>g(e,"tabpane"),getControllerId:e=>g(e,"tab")}),[b,v,d,p,m,g]);return(0,f.jsx)(a.Z.Provider,{value:x,children:(0,f.jsx)(s.Z.Provider,{value:b||null,children:h})})};u.Panel=l.Z,t.Z=u},3439:function(e,t,n){n.d(t,{Ed:function(){return i},UI:function(){return o},XW:function(){return a}});var r=n(7294);function o(e,t){let n=0;return r.Children.map(e,e=>r.isValidElement(e)?t(e,n++):e)}function i(e,t){let n=0;r.Children.forEach(e,e=>{r.isValidElement(e)&&t(e,n++)})}function a(e,t){return r.Children.toArray(e).some(e=>r.isValidElement(e)&&e.type===t)}},6748:function(e,t,n){n.d(t,{Z:function(){return e2}});var r,o,i,a,s,l=n(7294),f=n(4184),u=n.n(f),c=n(3935),d=n(2092),p=n(5654),m=Object.prototype.hasOwnProperty;function h(e,t,n){for(n of e.keys())if(v(n,t))return n}function v(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&v(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=h(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=h(t,o))||!v(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(m.call(e,n)&&++r&&!m.call(t,n)||!(n in t)||!v(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var b=n(6454),y=function(e){var t=(0,b.Z)();return[e[0],(0,l.useCallback)(function(n){if(t())return e[1](n)},[t,e[1]])]};function g(e){return e.split("-")[0]}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){var t=x(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=x(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function E(e){if("undefined"==typeof ShadowRoot)return!1;var t=x(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var j=Math.max,Z=Math.min,C=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function A(){return!/^((?!chrome|android).)*safari/i.test(P())}function D(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&C(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&C(r.height)/e.offsetHeight||1);var a=(w(e)?x(e):window).visualViewport,s=!A()&&n,l=(r.left+(s&&a?a.offsetLeft:0))/o,f=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,c=r.height/i;return{width:u,height:c,top:f,right:l+u,bottom:f+c,left:l,x:l,y:f}}function k(e){var t=D(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function R(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&E(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function T(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){return x(e).getComputedStyle(e)}function S(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function L(e){return"html"===T(e)?e:e.assignedSlot||e.parentNode||(E(e)?e.host:null)||S(e)}function N(e){return O(e)&&"fixed"!==M(e).position?e.offsetParent:null}function W(e){for(var t=x(e),n=N(e);n&&["table","td","th"].indexOf(T(n))>=0&&"static"===M(n).position;)n=N(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&O(e)&&"fixed"===M(e).position)return null;var n=L(e);for(E(n)&&(n=n.host);O(n)&&0>["html","body"].indexOf(T(n));){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function B(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function H(e,t,n){return j(e,Z(t,n))}function V(){return{top:0,right:0,bottom:0,left:0}}function _(e){return Object.assign({},V(),e)}function I(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var U="bottom",K="right",$="left",F="auto",q=["top",U,K,$],z="start",X="viewport",Y="popper",G=q.reduce(function(e,t){return e.concat([t+"-"+z,t+"-end"])},[]),J=[].concat(q,[F]).reduce(function(e,t){return e.concat([t,t+"-"+z,t+"-end"])},[]),Q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ee(e){return e.split("-")[1]}var et={top:"auto",right:"auto",bottom:"auto",left:"auto"};function en(e){var t,n,r,o,i,a,s=e.popper,l=e.popperRect,f=e.placement,u=e.variation,c=e.offsets,d=e.position,p=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=e.isFixed,b=c.x,y=void 0===b?0:b,g=c.y,w=void 0===g?0:g,O="function"==typeof h?h({x:y,y:w}):{x:y,y:w};y=O.x,w=O.y;var E=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),Z=$,P="top",A=window;if(m){var D=W(s),k="clientHeight",R="clientWidth";D===x(s)&&"static"!==M(D=S(s)).position&&"absolute"===d&&(k="scrollHeight",R="scrollWidth"),("top"===f||(f===$||f===K)&&"end"===u)&&(P=U,w-=(v&&D===A&&A.visualViewport?A.visualViewport.height:D[k])-l.height,w*=p?1:-1),(f===$||("top"===f||f===U)&&"end"===u)&&(Z=K,y-=(v&&D===A&&A.visualViewport?A.visualViewport.width:D[R])-l.width,y*=p?1:-1)}var T=Object.assign({position:d},m&&et),L=!0===h?(n=(t={x:y,y:w}).x,r=t.y,{x:C(n*(o=window.devicePixelRatio||1))/o||0,y:C(r*o)/o||0}):{x:y,y:w};return(y=L.x,w=L.y,p)?Object.assign({},T,((a={})[P]=j?"0":"",a[Z]=E?"0":"",a.transform=1>=(A.devicePixelRatio||1)?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",a)):Object.assign({},T,((i={})[P]=j?w+"px":"",i[Z]=E?y+"px":"",i.transform="",i))}var er={passive:!0},eo={left:"right",right:"left",bottom:"top",top:"bottom"};function ei(e){return e.replace(/left|right|bottom|top/g,function(e){return eo[e]})}var ea={start:"end",end:"start"};function es(e){return e.replace(/start|end/g,function(e){return ea[e]})}function el(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ef(e){return D(S(e)).left+el(e).scrollLeft}function eu(e){var t=M(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ec(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(T(t))>=0?t.ownerDocument.body:O(t)&&eu(t)?t:e(L(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=x(r),a=o?[i].concat(i.visualViewport||[],eu(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ec(L(a)))}function ed(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ep(e,t,n){var r,o,i,a,s,l,f,u,c,d;return t===X?ed(function(e,t){var n=x(e),r=S(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var f=A();(f||!f&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+ef(e),y:l}}(e,n)):w(t)?((r=D(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):ed((o=S(e),a=S(o),s=el(o),l=null==(i=o.ownerDocument)?void 0:i.body,f=j(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=j(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),c=-s.scrollLeft+ef(o),d=-s.scrollTop,"rtl"===M(l||a).direction&&(c+=j(a.clientWidth,l?l.clientWidth:0)-f),{width:f,height:u,x:c,y:d}))}function em(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?g(o):null,a=o?ee(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case U:t={x:s,y:n.y+n.height};break;case K:t={x:n.x+n.width,y:l};break;case $:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var f=i?B(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case z:t[f]=t[f]-(n[u]/2-r[u]/2);break;case"end":t[f]=t[f]+(n[u]/2-r[u]/2)}}return t}function eh(e,t){void 0===t&&(t={});var n,r,o,i,a,s,l,f=t,u=f.placement,c=void 0===u?e.placement:u,d=f.strategy,p=void 0===d?e.strategy:d,m=f.boundary,h=f.rootBoundary,v=f.elementContext,b=void 0===v?Y:v,y=f.altBoundary,g=f.padding,x=void 0===g?0:g,E=_("number"!=typeof x?x:I(x,q)),C=e.rects.popper,P=e.elements[void 0!==y&&y?b===Y?"reference":Y:b],A=(n=w(P)?P:P.contextElement||S(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=ec(L(n)),w(i=["absolute","fixed"].indexOf(M(n).position)>=0&&O(n)?W(n):n)?o.filter(function(e){return w(e)&&R(e,i)&&"body"!==T(e)}):[]):[].concat(r),[void 0===h?X:h]))[0],(l=a.reduce(function(e,t){var r=ep(n,t,p);return e.top=j(r.top,e.top),e.right=Z(r.right,e.right),e.bottom=Z(r.bottom,e.bottom),e.left=j(r.left,e.left),e},ep(n,s,p))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),k=D(e.elements.reference),N=em({reference:k,element:C,strategy:"absolute",placement:c}),B=ed(Object.assign({},C,N)),H=b===Y?B:k,V={top:A.top-H.top+E.top,bottom:H.bottom-A.bottom+E.bottom,left:A.left-H.left+E.left,right:H.right-A.right+E.right},$=e.modifiersData.offset;if(b===Y&&$){var F=$[c];Object.keys(V).forEach(function(e){var t=[K,U].indexOf(e)>=0?1:-1,n=["top",U].indexOf(e)>=0?"y":"x";V[e]+=F[n]*t})}return V}function ev(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eb(e){return["top",K,U,$].some(function(t){return e[t]>=0})}var ey={placement:"bottom",modifiers:[],strategy:"absolute"};function eg(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let ex=(i=void 0===(o=(r={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eh(t,{elementContext:"reference"}),s=eh(t,{altBoundary:!0}),l=ev(a,r),f=ev(s,o,i),u=eb(l),c=eb(f);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=em({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:g(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,en(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,en(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,l=x(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(e){e.addEventListener("scroll",n.update,er)}),s&&l.addEventListener("resize",n.update,er),function(){i&&f.forEach(function(e){e.removeEventListener("scroll",n.update,er)}),s&&l.removeEventListener("resize",n.update,er)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce(function(e,n){var r,o,a,s,l,f;return e[n]=(r=t.rects,a=[$,"top"].indexOf(o=g(n))>=0?-1:1,l=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],f=s[1],l=l||0,f=(f||0)*a,[$,K].indexOf(o)>=0?{x:f,y:l}:{x:l,y:f}),e},{}),s=a[t.placement],l=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,f=n.padding,u=n.boundary,c=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,h=n.allowedAutoPlacements,v=t.options.placement,b=g(v),y=[v].concat(l||(b!==v&&m?function(e){if(g(e)===F)return[];var t=ei(e);return[es(e),t,es(t)]}(v):[ei(v)])).reduce(function(e,n){var r,o,i,a,s,l,d,p,v,b,y,x;return e.concat(g(n)===F?(o=(r={placement:n,boundary:u,rootBoundary:c,padding:f,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,l=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?J:d,0===(y=(b=(v=ee(o))?l?G:G.filter(function(e){return ee(e)===v}):q).filter(function(e){return p.indexOf(e)>=0})).length&&(y=b),Object.keys(x=y.reduce(function(e,n){return e[n]=eh(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[g(n)],e},{})).sort(function(e,t){return x[e]-x[t]})):n)},[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,j=y[0],Z=0;Z<y.length;Z++){var C=y[Z],P=g(C),A=ee(C)===z,D=["top",U].indexOf(P)>=0,k=D?"width":"height",R=eh(t,{placement:C,boundary:u,rootBoundary:c,altBoundary:d,padding:f}),T=D?A?K:$:A?U:"top";x[k]>w[k]&&(T=ei(T));var M=ei(T),S=[];if(i&&S.push(R[P]<=0),s&&S.push(R[T]<=0,R[M]<=0),S.every(function(e){return e})){j=C,E=!1;break}O.set(C,S)}if(E)for(var L=m?3:1,N=function(e){var t=y.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return j=t,"break"},W=L;W>0&&"break"!==N(W);W--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,l=n.altBoundary,f=n.padding,u=n.tether,c=void 0===u||u,d=n.tetherOffset,p=void 0===d?0:d,m=eh(t,{boundary:a,rootBoundary:s,padding:f,altBoundary:l}),h=g(t.placement),v=ee(t.placement),b=!v,y=B(h),x="x"===y?"y":"x",w=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,C="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,P="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(w){if(void 0===o||o){var R,T="y"===y?"top":$,M="y"===y?U:K,S="y"===y?"height":"width",L=w[y],N=L+m[T],_=L-m[M],I=c?-E[S]/2:0,F=v===z?O[S]:E[S],q=v===z?-E[S]:-O[S],X=t.elements.arrow,Y=c&&X?k(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:V(),J=G[T],Q=G[M],et=H(0,O[S],Y[S]),en=b?O[S]/2-I-et-J-P.mainAxis:F-et-J-P.mainAxis,er=b?-O[S]/2+I+et+Q+P.mainAxis:q+et+Q+P.mainAxis,eo=t.elements.arrow&&W(t.elements.arrow),ei=eo?"y"===y?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(R=null==A?void 0:A[y])?R:0,es=H(c?Z(N,L+en-ea-ei):N,L,c?j(_,L+er-ea):_);w[y]=es,D[y]=es-L}if(void 0!==i&&i){var el,ef,eu=w[x],ec="y"===x?"height":"width",ed=eu+m["x"===y?"top":$],ep=eu-m["x"===y?U:K],em=-1!==["top",$].indexOf(h),ev=null!=(el=null==A?void 0:A[x])?el:0,eb=em?ed:eu-O[ec]-E[ec]-ev+P.altAxis,ey=em?eu+O[ec]+E[ec]-ev-P.altAxis:ep,eg=c&&em?(ef=H(eb,eu,ey))>ey?ey:ef:H(c?eb:ed,eu,c?ey:ep);w[x]=eg,D[x]=eg-eu}t.modifiersData[r]=D}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,l=g(r.placement),f=B(l),u=[$,K].indexOf(l)>=0?"height":"width";if(a&&s){var c=_("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:I(t,q)),d=k(a),p=r.rects.reference[u]+r.rects.reference[f]-s[f]-r.rects.popper[u],m=s[f]-r.rects.reference[f],h=W(a),v=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,b=c["y"===f?"top":$],y=v-d[u]-c["y"===f?U:K],x=v/2-d[u]/2+(p/2-m/2),w=H(b,x,y);r.modifiersData[o]=((n={})[f]=w,n.centerOffset=w-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&R(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?ey:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ey,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],l=!1,f={state:o,setOptions:function(n){var r,l,c,d,p,m="function"==typeof n?n(o.options):n;u(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:w(e)?ec(e):e.contextElement?ec(e.contextElement):[],popper:ec(t)};var h=(l=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),c=new Map,d=new Set,p=[],l.forEach(function(e){c.set(e.name,e)}),l.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=c.get(t);n&&e(n)}}),p.push(t)}(e)}),Q.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=h.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:f,options:void 0===n?{}:n});a.push(i||function(){})}}),f.update()},forceUpdate:function(){if(!l){var e,t,n,r,i,a,s,u,c,d,p,m,h=o.elements,v=h.reference,b=h.popper;if(eg(v,b)){o.rects={reference:(t=W(b),n="fixed"===o.options.strategy,r=O(t),u=O(t)&&(a=C((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=C(i.height)/t.offsetHeight||1,1!==a||1!==s),c=S(t),d=D(v,u,n),p={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==T(t)||eu(c))&&(p=(e=t)!==x(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:el(e)),O(t)?(m=D(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):c&&(m.x=ef(c))),{x:d.left+p.scrollLeft-m.x,y:d.top+p.scrollTop-m.y,width:d.width,height:d.height}),popper:k(b)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var y=0;y<o.orderedModifiers.length;y++){if(!0===o.reset){o.reset=!1,y=-1;continue}var g=o.orderedModifiers[y],w=g.fn,E=g.options,j=void 0===E?{}:E,Z=g.name;"function"==typeof w&&(o=w({state:o,options:j,name:Z,instance:f})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){f.forceUpdate(),e(o)}))})})),r},destroy:function(){u(),l=!0}};if(!eg(e,t))return f;function u(){a.forEach(function(e){return e()}),a=[]}return f.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),f}),ew=["enabled","placement","strategy","modifiers"],eO={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},eE={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},ej=[];var eZ=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=ej}=n,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,ew),f=(0,l.useRef)(a),u=(0,l.useRef)(),c=(0,l.useCallback)(()=>{var e;null==(e=u.current)||e.update()},[]),d=(0,l.useCallback)(()=>{var e;null==(e=u.current)||e.forceUpdate()},[]),[p,m]=y((0,l.useState)({placement:o,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),h=(0,l.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),m({state:e,styles:t,attributes:n,update:c,forceUpdate:d,placement:e.placement})}}),[c,d,m]),b=(0,l.useMemo)(()=>(v(f.current,a)||(f.current=a),f.current),[a]);return(0,l.useEffect)(()=>{u.current&&r&&u.current.setOptions({placement:o,strategy:i,modifiers:[...b,h,eO]})},[i,o,h,r,b]),(0,l.useEffect)(()=>{if(r&&null!=e&&null!=t)return u.current=ex(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...b,eE,h]})),()=>{null!=u.current&&(u.current.destroy(),u.current=void 0,m(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p},eC=n(7130),eP=n(7216),eA=n(8146),eD=n(424),ek=n(2473),eR=n.n(ek);let eT=()=>{},eM=e=>e&&("current"in e?e.current:e),eS={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var eL=function(e,t=eT,{disabled:n,clickTrigger:r="click"}={}){let o=(0,l.useRef)(!1),i=(0,l.useRef)(!1),a=(0,l.useCallback)(t=>{let n=eM(e);eR()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,eD.Z)(n,t.target)||i.current,i.current=!1},[e]),s=(0,eA.Z)(t=>{let n=eM(e);n&&(0,eD.Z)(n,t.target)&&(i.current=!0)}),f=(0,eA.Z)(e=>{o.current||t(e)});(0,l.useEffect)(()=>{if(n||null==e)return;let t=(0,eP.Z)(eM(e)),o=(t.defaultView||window).event,i=null;eS[r]&&(i=(0,eC.Z)(t,eS[r],s,!0));let l=(0,eC.Z)(t,r,a,!0),u=(0,eC.Z)(t,r,e=>{if(e===o){o=void 0;return}f(e)}),c=[];return"ontouchstart"in t.documentElement&&(c=[].slice.call(t.body.children).map(e=>(0,eC.Z)(e,"mousemove",eT))),()=>{null==i||i(),l(),u(),c.forEach(e=>e())}},[e,n,r,a,s,f])};let eN=()=>{};var eW=function(e,t,{disabled:n,clickTrigger:r}={}){let o=t||eN;eL(e,o,{disabled:n,clickTrigger:r});let i=(0,eA.Z)(e=>{27===e.keyCode&&o(e)});(0,l.useEffect)(()=>{if(n||null==e)return;let t=(0,eP.Z)(eM(e)),r=(t.defaultView||window).event,o=(0,eC.Z)(t,"keyup",e=>{if(e===r){r=void 0;return}i(e)});return()=>{o()}},[e,n,i])},eB=n(4194),eH=n(1546);let eV=l.forwardRef((e,t)=>{let{flip:n,offset:r,placement:o,containerPadding:i,popperConfig:a={},transition:s,runTransition:f}=e,[u,m]=(0,d.Z)(),[h,v]=(0,d.Z)(),b=(0,p.Z)(m,t),y=(0,eB.Z)(e.container),g=(0,eB.Z)(e.target),[x,w]=(0,l.useState)(!e.show),O=eZ(g,u,function({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:l={}}){var f,u,c,d,p;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:i?"fixed":l.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(f=m.eventListeners)?void 0:f.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(u=m.preventOverflow)?void 0:u.options):null==(c=m.preventOverflow)?void 0:c.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:h,popperConfig:a}));e.show&&x&&w(!1);let E=(...t)=>{w(!0),e.onExited&&e.onExited(...t)},j=e.show||!x;if(eW(u,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!j)return null;let{onExit:Z,onExiting:C,onEnter:P,onEntering:A,onEntered:D}=e,k=e.children(Object.assign({},O.attributes.popper,{style:O.styles.popper,ref:b}),{popper:O,placement:o,show:!!e.show,arrowProps:Object.assign({},O.attributes.arrow,{style:O.styles.arrow,ref:v})});return k=(0,eH.sD)(s,f,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:k,onExit:Z,onExiting:C,onExited:E,onEnter:P,onEntering:A,onEntered:D}),y?c.createPortal(k,y):null});eV.displayName="Overlay";var e_=n(9585),eI=n(1132),eU=n(6792),eK=n(6611),e$=(0,eK.Z)("popover-header"),eF=(0,eK.Z)("popover-body"),eq=n(9883),ez=n(3706),eX=n(5893);let eY=l.forwardRef(({bsPrefix:e,placement:t,className:n,style:r,children:o,body:i,arrowProps:a,hasDoneInitialMeasure:s,popper:l,show:f,...c},d)=>{let p=(0,eU.vE)(e,"popover"),m=(0,eU.SC)(),[h]=(null==t?void 0:t.split("-"))||[],v=(0,eq.z)(h,m),b=r;return s||(b={...r,...(0,ez.Z)(null==l?void 0:l.strategy)}),(0,eX.jsxs)("div",{ref:d,role:"tooltip",style:b,"x-placement":h,className:u()(n,p,h&&`bs-popover-${v}`),...c,children:[(0,eX.jsx)("div",{className:"popover-arrow",...a}),i?(0,eX.jsx)(eF,{children:o}):o]})});eY.defaultProps={placement:"right"};var eG=Object.assign(eY,{Header:e$,Body:eF,POPPER_OFFSET:[0,8]}),eJ=n(1068),eQ=n(8285);let e0={transition:eJ.Z,rootClose:!1,show:!1,placement:"top"},e1=l.forwardRef(({children:e,transition:t,popperConfig:n={},...r},o)=>{let i=(0,l.useRef)({}),[a,s]=(0,l.useState)(null),[f,c]=function(e){let t=(0,l.useRef)(null),n=(0,eU.vE)(void 0,"popover"),r=(0,l.useMemo)(()=>({name:"offset",options:{offset:()=>t.current&&(0,eI.Z)(t.current,n)?e||eG.POPPER_OFFSET:e||[0,0]}}),[e,n]);return[t,[r]]}(r.offset),d=(0,p.Z)(o,f),m=!0===t?eJ.Z:t||void 0,h=(0,eA.Z)(e=>{s(e),null==n||null==n.onFirstUpdate||n.onFirstUpdate(e)});return(0,e_.Z)(()=>{a&&(null==i.current.scheduleUpdate||i.current.scheduleUpdate())},[a]),(0,l.useEffect)(()=>{r.show||s(null)},[r.show]),(0,eX.jsx)(eV,{...r,ref:d,popperConfig:{...n,modifiers:c.concat(n.modifiers||[]),onFirstUpdate:h},transition:m,children:(r,{arrowProps:o,popper:s,show:f})=>{var c,d;!function(e,t){let{ref:n}=e,{ref:r}=t;e.ref=n.__wrapped||(n.__wrapped=e=>n((0,eQ.Z)(e))),t.ref=r.__wrapped||(r.__wrapped=e=>r((0,eQ.Z)(e)))}(r,o);let p=null==s?void 0:s.placement,m=Object.assign(i.current,{state:null==s?void 0:s.state,scheduleUpdate:null==s?void 0:s.update,placement:p,outOfBoundaries:(null==s?void 0:null==(c=s.state)?void 0:null==(d=c.modifiersData.hide)?void 0:d.isReferenceHidden)||!1,strategy:n.strategy}),h=!!a;return"function"==typeof e?e({...r,placement:p,show:f,...!t&&f&&{className:"show"},popper:m,arrowProps:o,hasDoneInitialMeasure:h}):l.cloneElement(e,{...r,placement:p,arrowProps:o,popper:m,hasDoneInitialMeasure:h,className:u()(e.props.className,!t&&f&&"show"),style:{...e.props.style,...r.style}})}})});e1.displayName="Overlay",e1.defaultProps=e0;var e2=e1},3192:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(5697),o=n.n(r);n(7294);var i=n(3916),a=n(6101),s=n(5893);let l=({transition:e,...t})=>(0,s.jsx)(i.Z,{...t,transition:(0,a.Z)(e)});l.displayName="TabContainer";var f=n(8752),u=n(5103);let c={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},d=()=>{throw Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};d.propTypes=c;var p=Object.assign(d,{Container:l,Content:f.Z,Pane:u.Z})},8752:function(e,t,n){var r=n(6611);t.Z=(0,r.Z)("tab-content")},5103:function(e,t,n){var r=n(4184),o=n.n(r),i=n(7294),a=n(7126),s=n(6626),l=n(5963),f=n(6792),u=n(1068),c=n(6101),d=n(5893);let p=i.forwardRef(({bsPrefix:e,transition:t,...n},r)=>{let[{className:i,as:p="div",...m},{isActive:h,onEnter:v,onEntering:b,onEntered:y,onExit:g,onExiting:x,onExited:w,mountOnEnter:O,unmountOnExit:E,transition:j=u.Z}]=(0,l.W)({...n,transition:(0,c.Z)(t)}),Z=(0,f.vE)(e,"tab-pane");return(0,d.jsx)(s.Z.Provider,{value:null,children:(0,d.jsx)(a.Z.Provider,{value:null,children:(0,d.jsx)(j,{in:h,onEnter:v,onEntering:b,onEntered:y,onExit:g,onExiting:x,onExited:w,mountOnEnter:O,unmountOnExit:E,children:(0,d.jsx)(p,{...m,ref:r,className:o()(i,Z,h&&"active")})})})})});p.displayName="TabPane",t.Z=p},5509:function(e,t,n){n(7294);var r=n(5446),o=n(3916),i=n(5567),a=n(9796),s=n(1244),l=n(8752),f=n(5103),u=n(3439),c=n(6101),d=n(5893);function p(e){let{title:t,eventKey:n,disabled:r,tabClassName:o,tabAttrs:i,id:l}=e.props;return null==t?null:(0,d.jsx)(s.Z,{as:"li",role:"presentation",children:(0,d.jsx)(a.Z,{as:"button",type:"button",eventKey:n,disabled:r,id:l,className:o,...i,children:t})})}let m=e=>{let t;let{id:n,onSelect:a,transition:s,mountOnEnter:m,unmountOnExit:h,children:v,activeKey:b=((0,u.Ed)(v,e=>{null==t&&(t=e.props.eventKey)}),t),...y}=(0,r.Ch)(e,{activeKey:"onSelect"});return(0,d.jsxs)(o.Z,{id:n,activeKey:b,onSelect:a,transition:(0,c.Z)(s),mountOnEnter:m,unmountOnExit:h,children:[(0,d.jsx)(i.Z,{...y,role:"tablist",as:"ul",children:(0,u.UI)(v,p)}),(0,d.jsx)(l.Z,{children:(0,u.UI)(v,e=>{let t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,d.jsx)(f.Z,{...t})})})]})};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",t.Z=m},3489:function(e,t,n){var r=n(4184),o=n.n(r),i=n(7294),a=n(6792),s=n(9883),l=n(3706),f=n(5893);let u=i.forwardRef(({bsPrefix:e,placement:t,className:n,style:r,children:i,arrowProps:u,hasDoneInitialMeasure:c,popper:d,show:p,...m},h)=>{e=(0,a.vE)(e,"tooltip");let v=(0,a.SC)(),[b]=(null==t?void 0:t.split("-"))||[],y=(0,s.z)(b,v),g=r;return c||(g={...r,...(0,l.Z)(null==d?void 0:d.strategy)}),(0,f.jsxs)("div",{ref:h,style:g,role:"tooltip","x-placement":b,className:o()(n,e,`bs-tooltip-${y}`),...m,children:[(0,f.jsx)("div",{className:"tooltip-arrow",...u}),(0,f.jsx)("div",{className:`${e}-inner`,children:i})]})});u.defaultProps={placement:"right"},u.displayName="Tooltip",t.Z=u},3706:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}},6101:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7514),o=n(1068);function i(e){return"boolean"==typeof e?e?o.Z:r.Z:e}},9883:function(e,t,n){function r(e,t){let n=e;return"left"===e?n=t?"end":"start":"right"===e&&(n=t?"start":"end"),n}n.d(t,{z:function(){return r}}),n(7294)},2473:function(e){e.exports=function(){}}}]);