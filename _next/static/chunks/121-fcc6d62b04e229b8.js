(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{8831:function(e,t,n){"use strict";n.d(t,{HK:function(){return a},gP:function(){return l}});var r=n(7294);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o);function a(e){let t=(0,r.useContext)(i),n=(0,r.useMemo)(()=>({prefix:t===o?"":`${t.prefix}-${++t.current}`,current:0}),[t]);return r.createElement(i.Provider,{value:n},e.children)}let s=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function l(e){let t=(0,r.useContext)(i);return t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}},5963:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var r=n(7294),o=n(6626),i=n(7126),a=n(7514),s=n(5893);let l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],u=["activeKey","getControlledId","getControllerId"],f=["as"];function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e){let{active:t,eventKey:n,mountOnEnter:a,transition:s,unmountOnExit:f,role:d="tabpanel",onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}=e,g=c(e,l),x=(0,r.useContext)(o.Z);if(!x)return[Object.assign({},g,{role:d}),{eventKey:n,isActive:t,mountOnEnter:a,transition:s,unmountOnExit:f,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}];let{activeKey:w,getControlledId:O,getControllerId:E}=x,j=c(x,u),Z=(0,i.h)(n);return[Object.assign({},g,{role:d,id:O(n),"aria-labelledby":E(n)}),{eventKey:n,isActive:null==t&&null!=Z?(0,i.h)(w)===Z:t,transition:s||j.transition,mountOnEnter:null!=a?a:j.mountOnEnter,unmountOnExit:null!=f?f:j.unmountOnExit,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y}]}let p=r.forwardRef((e,t)=>{let{as:n="div"}=e,r=c(e,f),[l,{isActive:u,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:x,transition:w=a.Z}]=d(r);return(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(i.Z.Provider,{value:null,children:(0,s.jsx)(w,{in:u,onEnter:p,onEntering:m,onEntered:h,onExit:v,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:x,children:(0,s.jsx)(n,Object.assign({},l,{ref:t,hidden:!u,"aria-hidden":!u}))})})})});p.displayName="TabPanel",t.Z=p},3916:function(e,t,n){"use strict";var r=n(7294),o=n(5446),i=n(8831),a=n(6626),s=n(7126),l=n(5963),u=n(5893);let f=e=>{let{id:t,generateChildId:n,onSelect:l,activeKey:f,defaultActiveKey:c,transition:d,mountOnEnter:p,unmountOnExit:m,children:h}=e,[v,b]=(0,o.$c)(f,c,l),y=(0,i.gP)(t),g=(0,r.useMemo)(()=>n||((e,t)=>y?`${y}-${t}-${e}`:null),[y,n]),x=(0,r.useMemo)(()=>({onSelect:b,activeKey:v,transition:d,mountOnEnter:p||!1,unmountOnExit:m||!1,getControlledId:e=>g(e,"tabpane"),getControllerId:e=>g(e,"tab")}),[b,v,d,p,m,g]);return(0,u.jsx)(a.Z.Provider,{value:x,children:(0,u.jsx)(s.Z.Provider,{value:b||null,children:h})})};f.Panel=l.Z,t.Z=f},9008:function(e,t,n){e.exports=n(3121)},3439:function(e,t,n){"use strict";n.d(t,{Ed:function(){return i},UI:function(){return o},XW:function(){return a}});var r=n(7294);function o(e,t){let n=0;return r.Children.map(e,e=>r.isValidElement(e)?t(e,n++):e)}function i(e,t){let n=0;r.Children.forEach(e,e=>{r.isValidElement(e)&&t(e,n++)})}function a(e,t){return r.Children.toArray(e).some(e=>r.isValidElement(e)&&e.type===t)}},6748:function(e,t,n){"use strict";n.d(t,{Z:function(){return e2}});var r,o,i,a,s,l=n(7294),u=n(4184),f=n.n(u),c=n(3935),d=n(2092),p=n(5654),m=Object.prototype.hasOwnProperty;function h(e,t,n){for(n of e.keys())if(v(n,t))return n}function v(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&v(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=h(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=h(t,o))||!v(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(m.call(e,n)&&++r&&!m.call(t,n)||!(n in t)||!v(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var b=n(6454),y=function(e){var t=(0,b.Z)();return[e[0],(0,l.useCallback)(function(n){if(t())return e[1](n)},[t,e[1]])]};function g(e){return e.split("-")[0]}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){var t=x(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=x(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function E(e){if("undefined"==typeof ShadowRoot)return!1;var t=x(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var j=Math.max,Z=Math.min,C=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function A(){return!/^((?!chrome|android).)*safari/i.test(P())}function D(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&C(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&C(r.height)/e.offsetHeight||1);var a=(w(e)?x(e):window).visualViewport,s=!A()&&n,l=(r.left+(s&&a?a.offsetLeft:0))/o,u=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,c=r.height/i;return{width:f,height:c,top:u,right:l+f,bottom:u+c,left:l,x:l,y:u}}function k(e){var t=D(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function R(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&E(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function T(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){return x(e).getComputedStyle(e)}function N(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return"html"===T(e)?e:e.assignedSlot||e.parentNode||(E(e)?e.host:null)||N(e)}function L(e){return O(e)&&"fixed"!==M(e).position?e.offsetParent:null}function W(e){for(var t=x(e),n=L(e);n&&["table","td","th"].indexOf(T(n))>=0&&"static"===M(n).position;)n=L(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&O(e)&&"fixed"===M(e).position)return null;var n=S(e);for(E(n)&&(n=n.host);O(n)&&0>["html","body"].indexOf(T(n));){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function B(e,t,n){return j(e,Z(t,n))}function H(){return{top:0,right:0,bottom:0,left:0}}function V(e){return Object.assign({},H(),e)}function _(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var I="bottom",U="right",K="left",F="auto",q=["top",I,U,K],z="start",X="viewport",Y="popper",G=q.reduce(function(e,t){return e.concat([t+"-"+z,t+"-end"])},[]),J=[].concat(q,[F]).reduce(function(e,t){return e.concat([t,t+"-"+z,t+"-end"])},[]),Q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ee(e){return e.split("-")[1]}var et={top:"auto",right:"auto",bottom:"auto",left:"auto"};function en(e){var t,n,r,o,i,a,s=e.popper,l=e.popperRect,u=e.placement,f=e.variation,c=e.offsets,d=e.position,p=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=e.isFixed,b=c.x,y=void 0===b?0:b,g=c.y,w=void 0===g?0:g,O="function"==typeof h?h({x:y,y:w}):{x:y,y:w};y=O.x,w=O.y;var E=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),Z=K,P="top",A=window;if(m){var D=W(s),k="clientHeight",R="clientWidth";D===x(s)&&"static"!==M(D=N(s)).position&&"absolute"===d&&(k="scrollHeight",R="scrollWidth"),("top"===u||(u===K||u===U)&&"end"===f)&&(P=I,w-=(v&&D===A&&A.visualViewport?A.visualViewport.height:D[k])-l.height,w*=p?1:-1),(u===K||("top"===u||u===I)&&"end"===f)&&(Z=U,y-=(v&&D===A&&A.visualViewport?A.visualViewport.width:D[R])-l.width,y*=p?1:-1)}var T=Object.assign({position:d},m&&et),S=!0===h?(n=(t={x:y,y:w}).x,r=t.y,{x:C(n*(o=window.devicePixelRatio||1))/o||0,y:C(r*o)/o||0}):{x:y,y:w};return(y=S.x,w=S.y,p)?Object.assign({},T,((a={})[P]=j?"0":"",a[Z]=E?"0":"",a.transform=1>=(A.devicePixelRatio||1)?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",a)):Object.assign({},T,((i={})[P]=j?w+"px":"",i[Z]=E?y+"px":"",i.transform="",i))}var er={passive:!0},eo={left:"right",right:"left",bottom:"top",top:"bottom"};function ei(e){return e.replace(/left|right|bottom|top/g,function(e){return eo[e]})}var ea={start:"end",end:"start"};function es(e){return e.replace(/start|end/g,function(e){return ea[e]})}function el(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eu(e){return D(N(e)).left+el(e).scrollLeft}function ef(e){var t=M(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ec(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(T(t))>=0?t.ownerDocument.body:O(t)&&ef(t)?t:e(S(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=x(r),a=o?[i].concat(i.visualViewport||[],ef(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ec(S(a)))}function ed(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ep(e,t,n){var r,o,i,a,s,l,u,f,c,d;return t===X?ed(function(e,t){var n=x(e),r=N(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var u=A();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+eu(e),y:l}}(e,n)):w(t)?((r=D(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):ed((o=N(e),a=N(o),s=el(o),l=null==(i=o.ownerDocument)?void 0:i.body,u=j(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),f=j(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),c=-s.scrollLeft+eu(o),d=-s.scrollTop,"rtl"===M(l||a).direction&&(c+=j(a.clientWidth,l?l.clientWidth:0)-u),{width:u,height:f,x:c,y:d}))}function em(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?g(o):null,a=o?ee(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case I:t={x:s,y:n.y+n.height};break;case U:t={x:n.x+n.width,y:l};break;case K:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var u=i?$(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case z:t[u]=t[u]-(n[f]/2-r[f]/2);break;case"end":t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}function eh(e,t){void 0===t&&(t={});var n,r,o,i,a,s,l,u=t,f=u.placement,c=void 0===f?e.placement:f,d=u.strategy,p=void 0===d?e.strategy:d,m=u.boundary,h=u.rootBoundary,v=u.elementContext,b=void 0===v?Y:v,y=u.altBoundary,g=u.padding,x=void 0===g?0:g,E=V("number"!=typeof x?x:_(x,q)),C=e.rects.popper,P=e.elements[void 0!==y&&y?b===Y?"reference":Y:b],A=(n=w(P)?P:P.contextElement||N(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=ec(S(n)),w(i=["absolute","fixed"].indexOf(M(n).position)>=0&&O(n)?W(n):n)?o.filter(function(e){return w(e)&&R(e,i)&&"body"!==T(e)}):[]):[].concat(r),[void 0===h?X:h]))[0],(l=a.reduce(function(e,t){var r=ep(n,t,p);return e.top=j(r.top,e.top),e.right=Z(r.right,e.right),e.bottom=Z(r.bottom,e.bottom),e.left=j(r.left,e.left),e},ep(n,s,p))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),k=D(e.elements.reference),L=em({reference:k,element:C,strategy:"absolute",placement:c}),$=ed(Object.assign({},C,L)),B=b===Y?$:k,H={top:A.top-B.top+E.top,bottom:B.bottom-A.bottom+E.bottom,left:A.left-B.left+E.left,right:B.right-A.right+E.right},K=e.modifiersData.offset;if(b===Y&&K){var F=K[c];Object.keys(H).forEach(function(e){var t=[U,I].indexOf(e)>=0?1:-1,n=["top",I].indexOf(e)>=0?"y":"x";H[e]+=F[n]*t})}return H}function ev(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eb(e){return["top",U,I,K].some(function(t){return e[t]>=0})}var ey={placement:"bottom",modifiers:[],strategy:"absolute"};function eg(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let ex=(i=void 0===(o=(r={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eh(t,{elementContext:"reference"}),s=eh(t,{altBoundary:!0}),l=ev(a,r),u=ev(s,o,i),f=eb(l),c=eb(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":c})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=em({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:g(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,en(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,en(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,l=x(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(e){e.addEventListener("scroll",n.update,er)}),s&&l.addEventListener("resize",n.update,er),function(){i&&u.forEach(function(e){e.removeEventListener("scroll",n.update,er)}),s&&l.removeEventListener("resize",n.update,er)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce(function(e,n){var r,o,a,s,l,u;return e[n]=(r=t.rects,a=[K,"top"].indexOf(o=g(n))>=0?-1:1,l=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],u=s[1],l=l||0,u=(u||0)*a,[K,U].indexOf(o)>=0?{x:u,y:l}:{x:l,y:u}),e},{}),s=a[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,u=n.padding,f=n.boundary,c=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,h=n.allowedAutoPlacements,v=t.options.placement,b=g(v),y=[v].concat(l||(b!==v&&m?function(e){if(g(e)===F)return[];var t=ei(e);return[es(e),t,es(t)]}(v):[ei(v)])).reduce(function(e,n){var r,o,i,a,s,l,d,p,v,b,y,x;return e.concat(g(n)===F?(o=(r={placement:n,boundary:f,rootBoundary:c,padding:u,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,l=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?J:d,0===(y=(b=(v=ee(o))?l?G:G.filter(function(e){return ee(e)===v}):q).filter(function(e){return p.indexOf(e)>=0})).length&&(y=b),Object.keys(x=y.reduce(function(e,n){return e[n]=eh(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[g(n)],e},{})).sort(function(e,t){return x[e]-x[t]})):n)},[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,j=y[0],Z=0;Z<y.length;Z++){var C=y[Z],P=g(C),A=ee(C)===z,D=["top",I].indexOf(P)>=0,k=D?"width":"height",R=eh(t,{placement:C,boundary:f,rootBoundary:c,altBoundary:d,padding:u}),T=D?A?U:K:A?I:"top";x[k]>w[k]&&(T=ei(T));var M=ei(T),N=[];if(i&&N.push(R[P]<=0),s&&N.push(R[T]<=0,R[M]<=0),N.every(function(e){return e})){j=C,E=!1;break}O.set(C,N)}if(E)for(var S=m?3:1,L=function(e){var t=y.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return j=t,"break"},W=S;W>0&&"break"!==L(W);W--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,l=n.altBoundary,u=n.padding,f=n.tether,c=void 0===f||f,d=n.tetherOffset,p=void 0===d?0:d,m=eh(t,{boundary:a,rootBoundary:s,padding:u,altBoundary:l}),h=g(t.placement),v=ee(t.placement),b=!v,y=$(h),x="x"===y?"y":"x",w=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,C="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,P="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(w){if(void 0===o||o){var R,T="y"===y?"top":K,M="y"===y?I:U,N="y"===y?"height":"width",S=w[y],L=S+m[T],V=S-m[M],_=c?-E[N]/2:0,F=v===z?O[N]:E[N],q=v===z?-E[N]:-O[N],X=t.elements.arrow,Y=c&&X?k(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:H(),J=G[T],Q=G[M],et=B(0,O[N],Y[N]),en=b?O[N]/2-_-et-J-P.mainAxis:F-et-J-P.mainAxis,er=b?-O[N]/2+_+et+Q+P.mainAxis:q+et+Q+P.mainAxis,eo=t.elements.arrow&&W(t.elements.arrow),ei=eo?"y"===y?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(R=null==A?void 0:A[y])?R:0,es=B(c?Z(L,S+en-ea-ei):L,S,c?j(V,S+er-ea):V);w[y]=es,D[y]=es-S}if(void 0!==i&&i){var el,eu,ef=w[x],ec="y"===x?"height":"width",ed=ef+m["x"===y?"top":K],ep=ef-m["x"===y?I:U],em=-1!==["top",K].indexOf(h),ev=null!=(el=null==A?void 0:A[x])?el:0,eb=em?ed:ef-O[ec]-E[ec]-ev+P.altAxis,ey=em?ef+O[ec]+E[ec]-ev-P.altAxis:ep,eg=c&&em?(eu=B(eb,ef,ey))>ey?ey:eu:B(c?eb:ed,ef,c?ey:ep);w[x]=eg,D[x]=eg-ef}t.modifiersData[r]=D}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,l=g(r.placement),u=$(l),f=[K,U].indexOf(l)>=0?"height":"width";if(a&&s){var c=V("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:_(t,q)),d=k(a),p=r.rects.reference[f]+r.rects.reference[u]-s[u]-r.rects.popper[f],m=s[u]-r.rects.reference[u],h=W(a),v=h?"y"===u?h.clientHeight||0:h.clientWidth||0:0,b=c["y"===u?"top":K],y=v-d[f]-c["y"===u?I:U],x=v/2-d[f]/2+(p/2-m/2),w=B(b,x,y);r.modifiersData[o]=((n={})[u]=w,n.centerOffset=w-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&R(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?ey:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ey,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],l=!1,u={state:o,setOptions:function(n){var r,l,c,d,p,m="function"==typeof n?n(o.options):n;f(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:w(e)?ec(e):e.contextElement?ec(e.contextElement):[],popper:ec(t)};var h=(l=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),c=new Map,d=new Set,p=[],l.forEach(function(e){c.set(e.name,e)}),l.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=c.get(t);n&&e(n)}}),p.push(t)}(e)}),Q.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=h.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:u,options:void 0===n?{}:n});a.push(i||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e,t,n,r,i,a,s,f,c,d,p,m,h=o.elements,v=h.reference,b=h.popper;if(eg(v,b)){o.rects={reference:(t=W(b),n="fixed"===o.options.strategy,r=O(t),f=O(t)&&(a=C((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=C(i.height)/t.offsetHeight||1,1!==a||1!==s),c=N(t),d=D(v,f,n),p={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==T(t)||ef(c))&&(p=(e=t)!==x(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:el(e)),O(t)?(m=D(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):c&&(m.x=eu(c))),{x:d.left+p.scrollLeft-m.x,y:d.top+p.scrollTop-m.y,width:d.width,height:d.height}),popper:k(b)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var y=0;y<o.orderedModifiers.length;y++){if(!0===o.reset){o.reset=!1,y=-1;continue}var g=o.orderedModifiers[y],w=g.fn,E=g.options,j=void 0===E?{}:E,Z=g.name;"function"==typeof w&&(o=w({state:o,options:j,name:Z,instance:u})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){u.forceUpdate(),e(o)}))})})),r},destroy:function(){f(),l=!0}};if(!eg(e,t))return u;function f(){a.forEach(function(e){return e()}),a=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}),ew=["enabled","placement","strategy","modifiers"],eO={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},eE={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},ej=[];var eZ=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=ej}=n,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,ew),u=(0,l.useRef)(a),f=(0,l.useRef)(),c=(0,l.useCallback)(()=>{var e;null==(e=f.current)||e.update()},[]),d=(0,l.useCallback)(()=>{var e;null==(e=f.current)||e.forceUpdate()},[]),[p,m]=y((0,l.useState)({placement:o,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),h=(0,l.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),m({state:e,styles:t,attributes:n,update:c,forceUpdate:d,placement:e.placement})}}),[c,d,m]),b=(0,l.useMemo)(()=>(v(u.current,a)||(u.current=a),u.current),[a]);return(0,l.useEffect)(()=>{f.current&&r&&f.current.setOptions({placement:o,strategy:i,modifiers:[...b,h,eO]})},[i,o,h,r,b]),(0,l.useEffect)(()=>{if(r&&null!=e&&null!=t)return f.current=ex(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...b,eE,h]})),()=>{null!=f.current&&(f.current.destroy(),f.current=void 0,m(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p},eC=n(7130),eP=n(7216),eA=n(8146),eD=n(424),ek=n(2473),eR=n.n(ek);let eT=()=>{},eM=e=>e&&("current"in e?e.current:e),eN={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var eS=function(e,t=eT,{disabled:n,clickTrigger:r="click"}={}){let o=(0,l.useRef)(!1),i=(0,l.useRef)(!1),a=(0,l.useCallback)(t=>{let n=eM(e);eR()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,eD.Z)(n,t.target)||i.current,i.current=!1},[e]),s=(0,eA.Z)(t=>{let n=eM(e);n&&(0,eD.Z)(n,t.target)&&(i.current=!0)}),u=(0,eA.Z)(e=>{o.current||t(e)});(0,l.useEffect)(()=>{if(n||null==e)return;let t=(0,eP.Z)(eM(e)),o=(t.defaultView||window).event,i=null;eN[r]&&(i=(0,eC.Z)(t,eN[r],s,!0));let l=(0,eC.Z)(t,r,a,!0),f=(0,eC.Z)(t,r,e=>{if(e===o){o=void 0;return}u(e)}),c=[];return"ontouchstart"in t.documentElement&&(c=[].slice.call(t.body.children).map(e=>(0,eC.Z)(e,"mousemove",eT))),()=>{null==i||i(),l(),f(),c.forEach(e=>e())}},[e,n,r,a,s,u])};let eL=()=>{};var eW=function(e,t,{disabled:n,clickTrigger:r}={}){let o=t||eL;eS(e,o,{disabled:n,clickTrigger:r});let i=(0,eA.Z)(e=>{27===e.keyCode&&o(e)});(0,l.useEffect)(()=>{if(n||null==e)return;let t=(0,eP.Z)(eM(e)),r=(t.defaultView||window).event,o=(0,eC.Z)(t,"keyup",e=>{if(e===r){r=void 0;return}i(e)});return()=>{o()}},[e,n,i])},e$=n(4194),eB=n(1546);let eH=l.forwardRef((e,t)=>{let{flip:n,offset:r,placement:o,containerPadding:i,popperConfig:a={},transition:s,runTransition:u}=e,[f,m]=(0,d.Z)(),[h,v]=(0,d.Z)(),b=(0,p.Z)(m,t),y=(0,e$.Z)(e.container),g=(0,e$.Z)(e.target),[x,w]=(0,l.useState)(!e.show),O=eZ(g,f,function({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:l={}}){var u,f,c,d,p;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:i?"fixed":l.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(u=m.eventListeners)?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(f=m.preventOverflow)?void 0:f.options):null==(c=m.preventOverflow)?void 0:c.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:h,popperConfig:a}));e.show&&x&&w(!1);let E=(...t)=>{w(!0),e.onExited&&e.onExited(...t)},j=e.show||!x;if(eW(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!j)return null;let{onExit:Z,onExiting:C,onEnter:P,onEntering:A,onEntered:D}=e,k=e.children(Object.assign({},O.attributes.popper,{style:O.styles.popper,ref:b}),{popper:O,placement:o,show:!!e.show,arrowProps:Object.assign({},O.attributes.arrow,{style:O.styles.arrow,ref:v})});return k=(0,eB.sD)(s,u,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:k,onExit:Z,onExiting:C,onExited:E,onEnter:P,onEntering:A,onEntered:D}),y?c.createPortal(k,y):null});eH.displayName="Overlay";var eV=n(9585),e_=n(1132),eI=n(6792),eU=n(6611),eK=(0,eU.Z)("popover-header"),eF=(0,eU.Z)("popover-body"),eq=n(9883),ez=n(3706),eX=n(5893);let eY=l.forwardRef(({bsPrefix:e,placement:t,className:n,style:r,children:o,body:i,arrowProps:a,hasDoneInitialMeasure:s,popper:l,show:u,...c},d)=>{let p=(0,eI.vE)(e,"popover"),m=(0,eI.SC)(),[h]=(null==t?void 0:t.split("-"))||[],v=(0,eq.z)(h,m),b=r;return s||(b={...r,...(0,ez.Z)(null==l?void 0:l.strategy)}),(0,eX.jsxs)("div",{ref:d,role:"tooltip",style:b,"x-placement":h,className:f()(n,p,h&&`bs-popover-${v}`),...c,children:[(0,eX.jsx)("div",{className:"popover-arrow",...a}),i?(0,eX.jsx)(eF,{children:o}):o]})});eY.defaultProps={placement:"right"};var eG=Object.assign(eY,{Header:eK,Body:eF,POPPER_OFFSET:[0,8]}),eJ=n(1068),eQ=n(8285);let e0={transition:eJ.Z,rootClose:!1,show:!1,placement:"top"},e1=l.forwardRef(({children:e,transition:t,popperConfig:n={},...r},o)=>{let i=(0,l.useRef)({}),[a,s]=(0,l.useState)(null),[u,c]=function(e){let t=(0,l.useRef)(null),n=(0,eI.vE)(void 0,"popover"),r=(0,l.useMemo)(()=>({name:"offset",options:{offset:()=>t.current&&(0,e_.Z)(t.current,n)?e||eG.POPPER_OFFSET:e||[0,0]}}),[e,n]);return[t,[r]]}(r.offset),d=(0,p.Z)(o,u),m=!0===t?eJ.Z:t||void 0,h=(0,eA.Z)(e=>{s(e),null==n||null==n.onFirstUpdate||n.onFirstUpdate(e)});return(0,eV.Z)(()=>{a&&(null==i.current.scheduleUpdate||i.current.scheduleUpdate())},[a]),(0,l.useEffect)(()=>{r.show||s(null)},[r.show]),(0,eX.jsx)(eH,{...r,ref:d,popperConfig:{...n,modifiers:c.concat(n.modifiers||[]),onFirstUpdate:h},transition:m,children:(r,{arrowProps:o,popper:s,show:u})=>{var c,d;!function(e,t){let{ref:n}=e,{ref:r}=t;e.ref=n.__wrapped||(n.__wrapped=e=>n((0,eQ.Z)(e))),t.ref=r.__wrapped||(r.__wrapped=e=>r((0,eQ.Z)(e)))}(r,o);let p=null==s?void 0:s.placement,m=Object.assign(i.current,{state:null==s?void 0:s.state,scheduleUpdate:null==s?void 0:s.update,placement:p,outOfBoundaries:(null==s?void 0:null==(c=s.state)?void 0:null==(d=c.modifiersData.hide)?void 0:d.isReferenceHidden)||!1,strategy:n.strategy}),h=!!a;return"function"==typeof e?e({...r,placement:p,show:u,...!t&&u&&{className:"show"},popper:m,arrowProps:o,hasDoneInitialMeasure:h}):l.cloneElement(e,{...r,placement:p,arrowProps:o,popper:m,hasDoneInitialMeasure:h,className:f()(e.props.className,!t&&u&&"show"),style:{...e.props.style,...r.style}})}})});e1.displayName="Overlay",e1.defaultProps=e0;var e2=e1},3192:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5697),o=n.n(r);n(7294);var i=n(3916),a=n(6101),s=n(5893);let l=({transition:e,...t})=>(0,s.jsx)(i.Z,{...t,transition:(0,a.Z)(e)});l.displayName="TabContainer";var u=n(8752),f=n(5103);let c={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},d=()=>{throw Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};d.propTypes=c;var p=Object.assign(d,{Container:l,Content:u.Z,Pane:f.Z})},8752:function(e,t,n){"use strict";var r=n(6611);t.Z=(0,r.Z)("tab-content")},5103:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),a=n(7126),s=n(6626),l=n(5963),u=n(6792),f=n(1068),c=n(6101),d=n(5893);let p=i.forwardRef(({bsPrefix:e,transition:t,...n},r)=>{let[{className:i,as:p="div",...m},{isActive:h,onEnter:v,onEntering:b,onEntered:y,onExit:g,onExiting:x,onExited:w,mountOnEnter:O,unmountOnExit:E,transition:j=f.Z}]=(0,l.W)({...n,transition:(0,c.Z)(t)}),Z=(0,u.vE)(e,"tab-pane");return(0,d.jsx)(s.Z.Provider,{value:null,children:(0,d.jsx)(a.Z.Provider,{value:null,children:(0,d.jsx)(j,{in:h,onEnter:v,onEntering:b,onEntered:y,onExit:g,onExiting:x,onExited:w,mountOnEnter:O,unmountOnExit:E,children:(0,d.jsx)(p,{...m,ref:r,className:o()(i,Z,h&&"active")})})})})});p.displayName="TabPane",t.Z=p},5147:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),a=n(6792),s=n(5893);let l=i.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:i,hover:l,size:u,variant:f,responsive:c,...d},p)=>{let m=(0,a.vE)(e,"table"),h=o()(t,m,f&&`${m}-${f}`,u&&`${m}-${u}`,n&&`${m}-${"string"==typeof n?`striped-${n}`:"striped"}`,r&&`${m}-bordered`,i&&`${m}-borderless`,l&&`${m}-hover`),v=(0,s.jsx)("table",{...d,className:h,ref:p});if(c){let e=`${m}-responsive`;return"string"==typeof c&&(e=`${e}-${c}`),(0,s.jsx)("div",{className:e,children:v})}return v});t.Z=l},5509:function(e,t,n){"use strict";n(7294);var r=n(5446),o=n(3916),i=n(5567),a=n(9796),s=n(1244),l=n(8752),u=n(5103),f=n(3439),c=n(6101),d=n(5893);function p(e){let{title:t,eventKey:n,disabled:r,tabClassName:o,tabAttrs:i,id:l}=e.props;return null==t?null:(0,d.jsx)(s.Z,{as:"li",role:"presentation",children:(0,d.jsx)(a.Z,{as:"button",type:"button",eventKey:n,disabled:r,id:l,className:o,...i,children:t})})}let m=e=>{let t;let{id:n,onSelect:a,transition:s,mountOnEnter:m,unmountOnExit:h,children:v,activeKey:b=((0,f.Ed)(v,e=>{null==t&&(t=e.props.eventKey)}),t),...y}=(0,r.Ch)(e,{activeKey:"onSelect"});return(0,d.jsxs)(o.Z,{id:n,activeKey:b,onSelect:a,transition:(0,c.Z)(s),mountOnEnter:m,unmountOnExit:h,children:[(0,d.jsx)(i.Z,{...y,role:"tablist",as:"ul",children:(0,f.UI)(v,p)}),(0,d.jsx)(l.Z,{children:(0,f.UI)(v,e=>{let t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,d.jsx)(u.Z,{...t})})})]})};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",t.Z=m},3489:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),a=n(6792),s=n(9883),l=n(3706),u=n(5893);let f=i.forwardRef(({bsPrefix:e,placement:t,className:n,style:r,children:i,arrowProps:f,hasDoneInitialMeasure:c,popper:d,show:p,...m},h)=>{e=(0,a.vE)(e,"tooltip");let v=(0,a.SC)(),[b]=(null==t?void 0:t.split("-"))||[],y=(0,s.z)(b,v),g=r;return c||(g={...r,...(0,l.Z)(null==d?void 0:d.strategy)}),(0,u.jsxs)("div",{ref:h,style:g,role:"tooltip","x-placement":b,className:o()(n,e,`bs-tooltip-${y}`),...m,children:[(0,u.jsx)("div",{className:"tooltip-arrow",...f}),(0,u.jsx)("div",{className:`${e}-inner`,children:i})]})});f.defaultProps={placement:"right"},f.displayName="Tooltip",t.Z=f},3706:function(e,t,n){"use strict";function r(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}n.d(t,{Z:function(){return r}})},6101:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7514),o=n(1068);function i(e){return"boolean"==typeof e?e?o.Z:r.Z:e}},9883:function(e,t,n){"use strict";function r(e,t){let n=e;return"left"===e?n=t?"end":"start":"right"===e&&(n=t?"start":"end"),n}n.d(t,{z:function(){return r}}),n(7294)},2473:function(e){"use strict";e.exports=function(){}}}]);