(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2bffb08a"],{"3e2f":function(t,e,r){"use strict";var o=r("5728");class i extends o.c{}!function(t){function e(t){const e=[],r=o.b.getForeignObjectMarkup();return t?e.push({tagName:t,selector:"body"},r):e.push(r),e}t.config({view:"vue-shape-view",markup:e(),attrs:{body:{fill:"none",stroke:"none",refWidth:"100%",refHeight:"100%"},fo:{refWidth:"100%",refHeight:"100%"}},propHooks(t){if(null==t.markup){const r=t.primer;if(r){t.markup=e(r);let i={};switch(r){case"circle":i={refCx:"50%",refCy:"50%",refR:"50%"};break;case"ellipse":i={refCx:"50%",refCy:"50%",refRx:"50%",refRy:"50%"}}t.attrs=o.e.merge({},{body:Object.assign({refWidth:null,refHeight:null},i)},t.attrs||{})}}return t}}),o.c.registry.register("vue-shape",t,!0)}(i||(i={}));var n=r("a026"),a=n.default;n.default.util.warn;const s={};let l=!1;const p=Object(n.reactive)({});function c(){return l}class u extends o.d{getComponentContainer(){return this.selectors&&this.selectors.foContent}confirmUpdate(t){const e=super.confirmUpdate(t);return this.handleAction(e,u.action,()=>{this.renderVueComponent()})}targetId(){return`${this.graph.view.cid}:${this.cell.id}`}renderVueComponent(){this.unmountVueComponent();const t=this.getComponentContainer(),e=this.cell,r=this.graph;if(t){const{component:o}=s[e.shape];if(o){const i=a;this.vm=new i({el:t,render:t=>t(o,{node:e,graph:r}),provide:()=>({getNode:()=>e,getGraph:()=>r})})}}}unmountVueComponent(){const t=this.getComponentContainer();return this.vm&&(this.vm.$destroy(),this.vm=null),t&&(t.innerHTML=""),t}onMouseDown(t,e,r){const o=t.target;if("input"===o.tagName.toLowerCase()){const t=o.getAttribute("type");if(null==t||["text","password","number","email","search","tel","url"].includes(t))return}super.onMouseDown(t,e,r)}unmount(){var t;return c()&&(t=this.targetId(),l&&delete p[t]),this.unmountVueComponent(),super.unmount(),this}}var d;(d=u||(u={})).action="vue",d.config({bootstrap:[d.action],actions:{component:d.action}}),o.d.registry.register("vue-shape-view",d,!0)},c060:function(t,e,r){"use strict";r.r(e),r("3e2f");var o=r("5728"),i=[{id:"1",shape:"er-rect",label:"学生",width:150,height:24,position:{x:24,y:150},ports:[{id:"1-1",group:"list",img:{x:6,y:6,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},attrs:{portNameLabel:{text:"ID"},portTypeLabel:{text:"STRING"}}},{id:"1-2",group:"list",attrs:{portNameLabel:{text:"Name"},portTypeLabel:{text:"STRING"}}},{id:"1-3",group:"list",attrs:{portNameLabel:{text:"Class"},portTypeLabel:{text:"NUMBER"}}},{id:"1-4",group:"list",attrs:{portNameLabel:{text:"Gender"},portTypeLabel:{text:"BOOLEAN"}}}]},{id:"2",shape:"er-rect",label:"课程",width:150,height:24,position:{x:250,y:210},ports:[{id:"2-1",group:"list",attrs:{img:{x:6,y:3,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},portNameLabel:{text:"ID"},portTypeLabel:{text:"STRING"}}},{id:"2-2",group:"list",attrs:{img:{x:6,y:3,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},portNameLabel:{text:"Name"},portTypeLabel:{text:"STRING"}}},{id:"2-3",group:"list",attrs:{img:{x:6,y:3,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},portNameLabel:{text:"StudentID"},portTypeLabel:{text:"STRING"}}},{id:"2-4",group:"list",attrs:{img:{x:6,y:3,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},portNameLabel:{text:"TeacherID"},portTypeLabel:{text:"STRING"}}},{id:"2-5",group:"list",attrs:{img:{x:6,y:3,width:16,height:16,"xlink:href":"https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ"},portNameLabel:{text:"Description"},portTypeLabel:{text:"STRING"}}}]},{id:"3",shape:"er-rect",label:"老师",width:150,height:24,position:{x:480,y:350},ports:[{id:"3-1",group:"list",attrs:{portNameLabel:{text:"ID"},portTypeLabel:{text:"STRING"}}},{id:"3-2",group:"list",attrs:{portNameLabel:{text:"Name"},portTypeLabel:{text:"STRING"}}},{id:"3-3",group:"list",attrs:{portNameLabel:{text:"Age"},portTypeLabel:{text:"NUMBER"}}}]}],n={data:function(){return{}},components:{},computed:{},mounted:function(){var t=this;setTimeout((function(){t.initAntV()}),100)},methods:{initAntV:function(){o.a.registerPortLayout("erPortPosition",(function(t){return t.map((function(t,e){return{position:{x:0,y:24*(e+1)},angle:0}}))}),!0),o.a.registerNode("er-rect",{inherit:"rect",markup:[{tagName:"rect",selector:"body"},{tagName:"image",selector:"img"},{tagName:"text",selector:"label"}],attrs:{rect:{strokeWidth:1,stroke:"#5F95FF",fill:"#5F95FF"},label:{fontWeight:"bold",fill:"#ffffff",fontSize:12}},ports:{groups:{list:{markup:[{tagName:"rect",selector:"portBody"},{tagName:"image",selector:"img"},{tagName:"text",selector:"portNameLabel"},{tagName:"text",selector:"portTypeLabel"}],attrs:{portBody:{width:150,height:24,strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF",magnet:!0},portNameLabel:{ref:"portBody",refX:46,refY:6,fontSize:10},portTypeLabel:{ref:"portBody",refX:95,refY:6,fontSize:10}},position:"erPortPosition"}}}},!0);var t=new o.a({container:document.getElementById("container"),width:800,height:600,interacting:{magnetConnectable:!1,edgeMovable:!1,edgeLabelMovable:!1,arrowheadMovable:!1,vertexMovable:!1,vertexAddable:!1,vertexDeletable:!1},connecting:{router:{name:"er",args:{offset:25,direction:"H"}},createEdge:function(){return new o.f.Edge({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}})}}});setTimeout((function(){t.addEdge({source:{cell:"1",port:"1-1"},target:{cell:"3",port:"3-1"}})}),2e3),t.on("cell:click",(function(t){t.e,t.x,t.y,t.cell,t.view,alert(1)})),t.on("node:click",(function(t){t.e,t.x,t.y,t.node,t.view,alert(2)})),t.on("edge:click",(function(t){t.e,t.x,t.y,t.edge,t.view,alert(2)})),t.on("blank:click",(function(t){t.e,t.x,t.y,alert(3)})),this.$nextTick((function(){var e=[];i.forEach((function(r){"edge"===r.shape?e.push(t.createEdge(r)):e.push(t.createNode(r))})),t.resetCells(e),t.zoomToFit({padding:10,maxScale:1})}))}}},a=r("2877"),s=Object(a.a)(n,(function(){return(0,this._self._c)("div",{attrs:{id:"container"}})}),[],!1,null,"b6223ba6",null);e.default=s.exports}}]);