(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{8101:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/simpoint",function(){return n(8211)}])},9885:function(e,i,n){"use strict";n.d(i,{Z:function(){return c}});var t=n(5893),s=n(6748),o=n(3489),r=n(7294);function c(e){let[i,n]=(0,r.useState)(""),[c,a]=(0,r.useState)(null),[h,p]=(0,r.useState)(!1);(0,r.useState)(()=>{n(function e(i){if("string"==typeof i)return i;if(Array.isArray(i)){let n="";for(let t=0;t<i.length;t++)n+=e(i[t]);return n}if("object"==typeof i){let n="";return i.props.children&&(n+=e(i.props.children)),n}}(e.children.props.children))},[]);let l=async e=>{p(!0),await navigator.clipboard.writeText(e),setTimeout(()=>p(!1),750)};return(0,t.jsxs)("div",{style:{position:"relative",width:"auto"},children:[e.children,(0,t.jsx)("span",{ref:a,style:{position:"absolute",right:0,top:0,cursor:"pointer",marginRight:"5px",marginTop:"5px"},children:(0,t.jsx)("div",{className:"copy-button",onClick:async()=>l(i),children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",children:[(0,t.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}),(0,t.jsx)(s.Z,{target:c,show:h,placement:"right",children:e=>(0,t.jsxs)(o.Z,{id:"overlay-tooltip",...e,children:[i," has been copied to the clipboard"]})})]})}},8211:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return g}});var t=n(5893),s=n(682),o=n(5588),r=n(2490),c=n(9232),a=n(4996),h=n(9721),p=n(9234),l=n(4800),m=n(9885),u=n(1664),d=n.n(u);function g(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(d(),{href:"/resources?q=category:simpoint",children:"View all simpoints"}),(0,t.jsx)(o.D,{className:"markdown-body mt-3",rehypePlugins:[[a.Z,{ignoreMissing:!0}],p.Z,h.Z],remarkPlugins:[r.Z,c.Z,l.Z],components:{pre:e=>{let{node:i,...n}=e;return(0,t.jsx)(m.Z,{children:(0,t.jsx)("pre",{...n,children:n.children})})}},children:"# SimPoint\n\nThis page describes what the SimPoints category is.\n\nIn order to increase the speed of gem5 simulations, we use a sampling method known as SimPoints. This methodology divides the program into similar phases, and finds a single continuous window of executed instructions that match the whole program's execution, so that this smaller window of execution can be used for simulation instead of executing the program to completion, rapidly increasing the speed of simulation.\n\nThe SimPoints paper can be found [here](https://cseweb.ucsd.edu//~calder/papers/ASPLOS-02-SimPoint.pdf)\n\nIn combination with gem5 Workloads, we can distribute binaries with SimPoint information and gem5 Checkpoints. These can then be executed via the SimPoint API, thus producing faster simulation runs.\n\nSimPoint source code for the gem5 Standard Library can be found [here](https://github.com/gem5/gem5/blob/stable/src/python/gem5/utils/simpoint.py)\n\nExamples of using SimPoints with gem5 can be found in [`configs/example/gem5_library/checkpoints/simpoints-se-checkpoint.py`](https://github.com/gem5/gem5/blob/stable/configs/example/gem5_library/checkpoints/simpoints-se-checkpoint.py) and [`configs/example/gem5_library/checkpoints/simpoints-se-restore.py`](https://github.com/gem5/gem5/blob/stable/configs/example/gem5_library/checkpoints/simpoints-se-restore.py).\n"})]})}}},function(e){e.O(0,[475,337,774,888,179],function(){return e(e.s=8101)}),_N_E=e.O()}]);