(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e0cf30a"],{1913:function(t,e,n){(t.exports=n("2350")(!1)).push([t.i,".ant_wrapper[data-v-39a62972]{position:relative}.ant_wrapper .disabled[data-v-39a62972]{position:absolute;width:100%;height:100%;left:0;top:0;z-index:9999;cursor:not-allowed}.container[data-v-39a62972]{height:3000px;width:1000px}#context-menu[data-v-39a62972]{position:absolute;-webkit-box-shadow:0 0 6px rgba(0,0,0,.5);box-shadow:0 0 6px rgba(0,0,0,.5);min-width:180px;height:auto;background:#fff;-webkit-transition:display .8s ease;transition:display .8s ease;z-index:999}#context-menu div.label[data-v-39a62972]{color:#c3c3c3}#context-menu>div[data-v-39a62972]{padding:11px 0;width:90%;cursor:pointer;text-align:center;color:#686868;border-bottom:1px solid #d6d6d6;margin:0 auto;font-size:14px}",""])},"21d4":function(t,e,n){"use strict";n.r(e),n("20d6"),n("6762"),n("2fdb"),n("ffc1"),n("28a5"),n("7514"),n("ac6a"),n("8615"),n("3e2f");var o=n("5728"),i={props:{isDisabled:{type:Boolean,default:!1},allField:{type:Object,default:function(){}}},data:function(){return{connectingList:[],current:{},loading:!1}},components:{},computed:{currentField:function(){var t=this,e=Object.values(this.allField).flat();if(this.current.id)return e.find((function(e){return e.id==t.current.id.split("-")[1]}))}},mounted:function(){var t=this;setTimeout((function(){document.addEventListener("click",(function(t){document.getElementById("context-menu")&&(document.getElementById("context-menu").style.display="none")})),t.initAntV()}),100)},methods:{antClear:function(){this.graph.clearCells()},initLine:function(t){var e=this;t.forEach((function(t){e.connectingList.some((function(e){return e.sourceColumnId==="1-".concat(t.sourceColumnId,"-out")&&e.target==="2-".concat(t.targetColumnId,"-in")}))||(e.graph.addEdge({source:{cell:"1-".concat(t.sourceColumnId),port:"1-".concat(t.sourceColumnId,"-out")},target:{cell:"2-".concat(t.targetColumnId),port:"2-".concat(t.targetColumnId,"-in")},attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}}),e.connectingList.push({source:"1-".concat(t.sourceColumnId,"-out"),target:"2-".concat(t.targetColumnId,"-in")}))}))},autoMap:function(t){var e=this;Object.entries(t).forEach((function(t){t[1].forEach((function(n){e.connectingList.some((function(e){return e.source==="1-".concat(t[0],"-out")&&e.target==="2-".concat(n,"-in")}))||(e.graph.addEdge({source:{cell:"1-".concat(t[0]),port:"1-".concat(t[0],"-out")},target:{cell:"2-".concat(n),port:"2-".concat(n,"-in")},attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}}),e.connectingList.push({source:"1-".concat(t[0],"-out"),target:"2-".concat(n,"-in")}))}))}))},initField:function(t,e){var n=this;"left"===t?e.forEach((function(t,e){var o=t.columnComment?"(".concat(t.columnComment,")"):"";n.addNode({x:0,y:50*(e+1)},"1-".concat(t.id),"".concat(t.columnName).concat(o),"out")})):e.forEach((function(t,e){var o=t.columnComment?"(".concat(t.columnComment,")"):"";n.addNode({x:600,y:50*(e+1)},"2-".concat(t.id),"".concat(t.columnName).concat(o),"in")}))},emptyMap:function(){var t=this;this.graph.getEdges().forEach((function(e){t.graph.removeEdge(e.id)})),this.connectingList=[]},del:function(){var t=this;"line"===this.current.type&&this.graph.removeEdge(this.current.id),"node"===this.current.type&&this.graph.getConnectedEdges(this.current.id).forEach((function(e){t.graph.removeEdge(e.id)}))},addNode:function(t,e,n,o){var i={id:e,x:t.x,y:t.y,width:250,height:40,label:n.slice(0,18)+(n.length>18?"...":""),attrs:{body:{stroke:"#fff",fill:"#5394eb",color:"#fff",rx:10,ry:10},text:{fill:"#fff",textWrap:{width:-10,height:"50%",ellipsis:!0,breakWord:!0}}},ports:{groups:{in:{position:"left",attrs:{circle:{r:7,magnet:!0,stroke:"#5ea9e2",strokeWidth:1,fill:"#fff"}}},out:{position:"right",attrs:{circle:{r:7,magnet:!0,stroke:"#5ea9e2",strokeWidth:1,fill:"#fff"}}}},items:[]}};i.ports.items="in"===o?[{id:"".concat(e,"-in"),group:"in"}]:[{id:"".concat(e,"-out"),group:"out"}],this.graph.addNode(i)},initAntV:function(){var t=this;this.graph=new o.a({panning:{enabled:!0},container:document.getElementById("container"),connecting:{allowBlank:!1,snap:!0,allowNode:!1,allowLoop:!1,allowEdge:!1,highlight:!0,createEdge:function(){return new o.f.Edge({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}})}},width:3e3,height:3e3}),this.graph.on("node:contextmenu",(function(e){e.e;var n=e.x,o=e.y,i=e.node;if(e.view,!t.isDisabled){t.current={type:"node",id:i.id};var r=document.getElementById("context-menu");r.style.display="block",r.style.left=n+"px",r.style.top=o+10+"px"}})),this.graph.on("edge:contextmenu",(function(e){e.e;var n=e.x,o=e.y,i=e.edge;if(e.view,!t.isDisabled){t.current={type:"line",id:i.id};var r=document.getElementById("context-menu");r.style.display="block",r.style.left=n+"px",r.style.top=o+10+"px"}})),this.graph.on("edge:connected",(function(e){e.e,e.isNew;var n=e.edge;if(e.previousCell,e.currentCell,n.getSourceCell()){var o=n.source.port,i=n.target.port;o.includes("in")||i.includes("out")||parseInt(o.split("-")[0])>parseInt(i.split("-")[0])?t.graph.removeEdge(n.id):!t.connectingList.some((function(t){return t.source===o&&t.target===i}))&&o&&i&&t.connectingList.push({source:o,target:i})}})),this.graph.on("edge:removed",(function(e){var n=t.connectingList.findIndex((function(t){return t.source===e.cell.source.cell+"-out"&&t.target===e.cell.target.cell+"-in"}));n>-1&&t.connectingList.splice(n,1)}))}}},r=(n("2781"),n("2877")),c=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ant_wrapper"},[t.isDisabled?t._e():e("div",{staticStyle:{display:"none"},attrs:{id:"context-menu"}},["line"===t.current.type?e("div",{on:{click:t.del}},[t._v("删除映射")]):t._e(),"node"===t.current.type?e("div",{on:{click:t.del}},[t._v("删除所有映射")]):t._e(),"node"===t.current.type?e("div",[e("div",{staticClass:"label"},[t._v("字段名称")]),e("div",[t._v(t._s(t.currentField.columnName))])]):t._e(),"node"===t.current.type&&""!==t.currentField.columnComment?e("div",[e("div",{staticClass:"label"},[t._v("中文名称")]),e("div",[t._v(t._s(t.currentField.columnComment))])]):t._e()]),e("div",{attrs:{id:"container"}})])}),[],!1,null,"39a62972",null);e.default=c.exports},2781:function(t,e,n){"use strict";n("b399")},"3e2f":function(t,e,n){"use strict";var o=n("5728");class i extends o.c{}!function(t){function e(t){const e=[],n=o.b.getForeignObjectMarkup();return t?e.push({tagName:t,selector:"body"},n):e.push(n),e}t.config({view:"vue-shape-view",markup:e(),attrs:{body:{fill:"none",stroke:"none",refWidth:"100%",refHeight:"100%"},fo:{refWidth:"100%",refHeight:"100%"}},propHooks(t){if(null==t.markup){const n=t.primer;if(n){t.markup=e(n);let i={};switch(n){case"circle":i={refCx:"50%",refCy:"50%",refR:"50%"};break;case"ellipse":i={refCx:"50%",refCy:"50%",refRx:"50%",refRy:"50%"}}t.attrs=o.e.merge({},{body:Object.assign({refWidth:null,refHeight:null},i)},t.attrs||{})}}return t}}),o.c.registry.register("vue-shape",t,!0)}(i||(i={}));var r=n("a026"),c=r.default;r.default.util.warn;const a={};let s=!1;const u=Object(r.reactive)({});function d(){return s}class l extends o.d{getComponentContainer(){return this.selectors&&this.selectors.foContent}confirmUpdate(t){const e=super.confirmUpdate(t);return this.handleAction(e,l.action,()=>{this.renderVueComponent()})}targetId(){return`${this.graph.view.cid}:${this.cell.id}`}renderVueComponent(){this.unmountVueComponent();const t=this.getComponentContainer(),e=this.cell,n=this.graph;if(t){const{component:o}=a[e.shape];if(o){const i=c;this.vm=new i({el:t,render:t=>t(o,{node:e,graph:n}),provide:()=>({getNode:()=>e,getGraph:()=>n})})}}}unmountVueComponent(){const t=this.getComponentContainer();return this.vm&&(this.vm.$destroy(),this.vm=null),t&&(t.innerHTML=""),t}onMouseDown(t,e,n){const o=t.target;if("input"===o.tagName.toLowerCase()){const t=o.getAttribute("type");if(null==t||["text","password","number","email","search","tel","url"].includes(t))return}super.onMouseDown(t,e,n)}unmount(){var t;return d()&&(t=this.targetId(),s&&delete u[t]),this.unmountVueComponent(),super.unmount(),this}}var p;(p=l||(l={})).action="vue",p.config({bootstrap:[p.action],actions:{component:p.action}}),o.d.registry.register("vue-shape-view",p,!0)},b399:function(t,e,n){var o=n("1913");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,n("499e").default)("10a03d66",o,!0,{sourceMap:!1,shadowMode:!1})}}]);