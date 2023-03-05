(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{8101:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/simpoint",function(){return t(8211)}])},490:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(5893),s=t(6748),o=t(3489),r=t(7294);function c(e){let[i,t]=(0,r.useState)(""),[c,a]=(0,r.useState)(null),[h,p]=(0,r.useState)(!1);(0,r.useState)(()=>{t(function e(i){if("string"==typeof i)return i;if(Array.isArray(i)){let t="";for(let n=0;n<i.length;n++)t+=e(i[n]);return t}if("object"==typeof i){let t="";return i.props.children&&(t+=e(i.props.children)),t}}(e.children.props.children))},[]);let l=async e=>{p(!0),await navigator.clipboard.writeText(e),setTimeout(()=>p(!1),750)};return(0,n.jsxs)("div",{style:{position:"relative",width:"auto"},children:[e.children,(0,n.jsx)("span",{ref:a,style:{position:"absolute",right:0,top:0,cursor:"pointer",marginRight:"5px",marginTop:"5px"},children:(0,n.jsx)("div",{className:"copy-button",onClick:async()=>l(i),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",children:[(0,n.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}),(0,n.jsx)(s.Z,{target:c,show:h,placement:"right",children:e=>(0,n.jsx)(o.Z,{id:"overlay-tooltip",...e,children:"Text has been copied to the clipboard"})})]})}},8211:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return g}});var n=t(5893),s=t(682),o=t(4741),r=t(8394),c=t(9232),a=t(4996),h=t(9721),p=t(3398),l=t(4800),m=t(490),u=t(1664),d=t.n(u);function g(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(d(),{href:"/resources?q=category:simpoint",children:"View all simpoints"}),(0,n.jsx)(o.D,{className:"markdown-body mt-3",rehypePlugins:[[a.Z,{ignoreMissing:!0}],p.Z,h.Z],remarkPlugins:[r.Z,c.Z,l.Z],components:{pre:e=>{let{node:i,...t}=e;return(0,n.jsx)(m.Z,{children:(0,n.jsx)("pre",{...t,children:t.children})})}},children:"# SimPoint\n\nThis page describes what the SimPoints category is.\n\nIn order to increase the speed of gem5 simulations, we use a sampling method known as SimPoints. This methodology divides the program into similar phases, and finds a single continuous window of executed instructions that match the whole program's execution, so that this smaller window of execution can be used for simulation instead of executing the program to completion, rapidly increasing the speed of simulation.\n\nThe SimPoints paper can be found [here](https://cseweb.ucsd.edu//~calder/papers/ASPLOS-02-SimPoint.pdf)\n\nIn combination with gem5 Workloads, we can distribute binaries with SimPoint information and gem5 Checkpoints. These can then be executed via the SimPoint API, thus producing faster simulation runs.\n\nSimPoint source code for the gem5 Standard Library can be found [here](https://github.com/gem5/gem5/blob/stable/src/python/gem5/utils/simpoint.py)\n\nExamples of using SimPoints with gem5 can be found in [`configs/example/gem5_library/checkpoints/simpoints-se-checkpoint.py`](https://github.com/gem5/gem5/blob/stable/configs/example/gem5_library/checkpoints/simpoints-se-checkpoint.py) and [`configs/example/gem5_library/checkpoints/simpoints-se-restore.py`](https://github.com/gem5/gem5/blob/stable/configs/example/gem5_library/checkpoints/simpoints-se-restore.py).\n"})]})}}},function(e){e.O(0,[936,337,774,888,179],function(){return e(e.s=8101)}),_N_E=e.O()}]);