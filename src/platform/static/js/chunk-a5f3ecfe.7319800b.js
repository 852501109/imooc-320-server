(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a5f3ecfe","chunk-4128ecef","chunk-1386da56"],{"11cf":function(e,t,o){var l=o("39c9");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("d93a8658",l,!0,{sourceMap:!1,shadowMode:!1})},1993:function(e,t,o){"use strict";o("2f0f")},"2f0f":function(e,t,o){var l=o("e8b3");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("a9f5e59c",l,!0,{sourceMap:!1,shadowMode:!1})},"39c9":function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".get-edit-item[data-v-da63f014]{padding-top:20px;margin:0 50px}.get-edit-item li[data-v-da63f014]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex}.get-edit-item li .get-edit-type[data-v-da63f014]{height:40px;line-height:40px}.get-edit-item li .get-edit-title[data-v-da63f014]{width:80px;color:#3a405b;height:40px;line-height:40px}.get-edit-item li .el-tree[data-v-da63f014]{width:100%;border:1px solid #dcdfe6;padding:24px}.originTable[data-v-da63f014]{position:relative;height:28px;line-height:28px;padding:0 15px;border-radius:3px;cursor:pointer}.originTable .el-icon-error[data-v-da63f014]{display:none;position:absolute;right:-10px;top:-7px;cursor:pointer;font-size:14px;z-index:10;color:#ed6e6e}.originTable:hover .el-icon-error[data-v-da63f014]{display:inline-block}.originTable_content_box[data-v-da63f014]{background:#e6f1ff;padding:10px}.originTable_content .el-icon-remove-outline[data-v-da63f014]{color:#5394eb;cursor:pointer;font-size:20px;margin-left:10px}.originTable.active[data-v-da63f014]{background:#5394eb;border:1px solid #5394eb;color:#fff}.originTable.normal[data-v-da63f014]{border:1px solid #a9d4ff;color:#5394eb}.row[data-v-da63f014]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:10px}.row>div[data-v-da63f014]{margin-right:20px;margin-bottom:5px}.row .el-icon-circle-plus-outline[data-v-da63f014]{cursor:pointer;font-size:26px;color:#5394eb;margin-bottom:5px}.add_table[data-v-da63f014]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:5px}.el-form-item .el-form-item[data-v-da63f014]{margin-bottom:20px}.field_row[data-v-da63f014]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}.field_row>div[data-v-da63f014]{width:47%}.el-icon-remove[data-v-da63f014]{color:#f56c6c;cursor:pointer}.business[data-v-da63f014]{border:1px solid #999}.business .title[data-v-da63f014]{font-size:15px}.init_table[data-v-da63f014]{text-align:center;padding-top:30px}.init_table i[data-v-da63f014]{font-size:22px;color:#00aad3;cursor:pointer}.custom_border[data-v-da63f014]{background:#f9f9f9;padding:17px;border-radius:3px}",""])},"3e2f":function(e,t,o){"use strict";var l=o("5728");class a extends l.c{}!function(e){function t(e){const t=[],o=l.b.getForeignObjectMarkup();return e?t.push({tagName:e,selector:"body"},o):t.push(o),t}e.config({view:"vue-shape-view",markup:t(),attrs:{body:{fill:"none",stroke:"none",refWidth:"100%",refHeight:"100%"},fo:{refWidth:"100%",refHeight:"100%"}},propHooks(e){if(null==e.markup){const o=e.primer;if(o){e.markup=t(o);let a={};switch(o){case"circle":a={refCx:"50%",refCy:"50%",refR:"50%"};break;case"ellipse":a={refCx:"50%",refCy:"50%",refRx:"50%",refRy:"50%"}}e.attrs=l.e.merge({},{body:Object.assign({refWidth:null,refHeight:null},a)},e.attrs||{})}}return e}}),l.c.registry.register("vue-shape",e,!0)}(a||(a={}));var r=o("a026"),n=r.default;r.default.util.warn;const i={};let s=!1;const c=Object(r.reactive)({});function u(){return s}class d extends l.d{getComponentContainer(){return this.selectors&&this.selectors.foContent}confirmUpdate(e){const t=super.confirmUpdate(e);return this.handleAction(t,d.action,()=>{this.renderVueComponent()})}targetId(){return`${this.graph.view.cid}:${this.cell.id}`}renderVueComponent(){this.unmountVueComponent();const e=this.getComponentContainer(),t=this.cell,o=this.graph;if(e){const{component:l}=i[t.shape];if(l){const a=n;this.vm=new a({el:e,render:e=>e(l,{node:t,graph:o}),provide:()=>({getNode:()=>t,getGraph:()=>o})})}}}unmountVueComponent(){const e=this.getComponentContainer();return this.vm&&(this.vm.$destroy(),this.vm=null),e&&(e.innerHTML=""),e}onMouseDown(e,t,o){const l=e.target;if("input"===l.tagName.toLowerCase()){const e=l.getAttribute("type");if(null==e||["text","password","number","email","search","tel","url"].includes(e))return}super.onMouseDown(e,t,o)}unmount(){var e;return u()&&(e=this.targetId(),s&&delete c[e]),this.unmountVueComponent(),super.unmount(),this}}var p;(p=d||(d={})).action="vue",p.config({bootstrap:[p.action],actions:{component:p.action}}),l.d.registry.register("vue-shape-view",p,!0)},7244:function(e,t,o){var l=o("fe22");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("2211005a",l,!0,{sourceMap:!1,shadowMode:!1})},"77f9":function(e,t,o){"use strict";o.r(t),o("20d6"),o("6762"),o("2fdb"),o("ffc1"),o("28a5"),o("7514"),o("ac6a"),o("8615"),o("3e2f");var l=o("5728"),a={props:{isDisabled:{type:Boolean,default:!1},allField:{type:Object,default:function(){}}},data:function(){return{connectingList:[],current:{},loading:!1}},components:{},computed:{currentField:function(){var e=this,t=Object.values(this.allField).flat();if(this.current.id)return t.find((function(t){return t.id==e.current.id.split("-")[1]}))}},mounted:function(){var e=this;setTimeout((function(){document.addEventListener("click",(function(e){document.getElementById("context-menu")&&(document.getElementById("context-menu").style.display="none")})),e.initAntV()}),100)},methods:{antClear:function(){this.graph.clearCells()},initLine:function(e){var t=this;e.forEach((function(e){t.connectingList.some((function(t){return t.sourceColumnId==="1-".concat(e.sourceColumnId,"-out")&&t.target==="2-".concat(e.targetColumnId,"-in")}))||(t.graph.addEdge({source:{cell:"1-".concat(e.sourceColumnId),port:"1-".concat(e.sourceColumnId,"-out")},target:{cell:"2-".concat(e.targetColumnId),port:"2-".concat(e.targetColumnId,"-in")},attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}}),t.connectingList.push({source:"1-".concat(e.sourceColumnId,"-out"),target:"2-".concat(e.targetColumnId,"-in")}))}))},autoMap:function(e){var t=this;Object.entries(e).forEach((function(e){e[1].forEach((function(o){t.connectingList.some((function(t){return t.source==="1-".concat(e[0],"-out")&&t.target==="2-".concat(o,"-in")}))||(t.graph.addEdge({source:{cell:"1-".concat(e[0]),port:"1-".concat(e[0],"-out")},target:{cell:"2-".concat(o),port:"2-".concat(o,"-in")},attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}}),t.connectingList.push({source:"1-".concat(e[0],"-out"),target:"2-".concat(o,"-in")}))}))}))},initField:function(e,t){var o=this;"left"===e?t.forEach((function(e,t){var l=e.columnComment?"(".concat(e.columnComment,")"):"";o.addNode({x:0,y:50*(t+1)},"1-".concat(e.id),"".concat(e.columnName).concat(l),"out")})):t.forEach((function(e,t){var l=e.columnComment?"(".concat(e.columnComment,")"):"";o.addNode({x:600,y:50*(t+1)},"2-".concat(e.id),"".concat(e.columnName).concat(l),"in")}))},emptyMap:function(){var e=this;this.graph.getEdges().forEach((function(t){e.graph.removeEdge(t.id)})),this.connectingList=[]},del:function(){var e=this;"line"===this.current.type&&this.graph.removeEdge(this.current.id),"node"===this.current.type&&this.graph.getConnectedEdges(this.current.id).forEach((function(t){e.graph.removeEdge(t.id)}))},addNode:function(e,t,o,l){var a={id:t,x:e.x,y:e.y,width:250,height:40,label:o.slice(0,18)+(o.length>18?"...":""),attrs:{body:{stroke:"#fff",fill:"#5394eb",color:"#fff",rx:10,ry:10},text:{fill:"#fff",textWrap:{width:-10,height:"50%",ellipsis:!0,breakWord:!0}}},ports:{groups:{in:{position:"left",attrs:{circle:{r:7,magnet:!0,stroke:"#5ea9e2",strokeWidth:1,fill:"#fff"}}},out:{position:"right",attrs:{circle:{r:7,magnet:!0,stroke:"#5ea9e2",strokeWidth:1,fill:"#fff"}}}},items:[]}};a.ports.items="in"===l?[{id:"".concat(t,"-in"),group:"in"}]:[{id:"".concat(t,"-out"),group:"out"}],this.graph.addNode(a)},initAntV:function(){var e=this;this.graph=new l.a({panning:{enabled:!0},container:document.getElementById("container"),connecting:{allowBlank:!1,snap:!0,allowNode:!1,allowLoop:!1,allowEdge:!1,highlight:!0,createEdge:function(){return new l.f.Edge({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2}}})}},width:3e3,height:3e3}),this.graph.on("node:contextmenu",(function(t){t.e;var o=t.x,l=t.y,a=t.node;if(t.view,!e.isDisabled){e.current={type:"node",id:a.id};var r=document.getElementById("context-menu");r.style.display="block",r.style.left=o+"px",r.style.top=l+10+"px"}})),this.graph.on("edge:contextmenu",(function(t){t.e;var o=t.x,l=t.y,a=t.edge;if(t.view,!e.isDisabled){e.current={type:"line",id:a.id};var r=document.getElementById("context-menu");r.style.display="block",r.style.left=o+"px",r.style.top=l+10+"px"}})),this.graph.on("edge:connected",(function(t){t.e,t.isNew;var o=t.edge;if(t.previousCell,t.currentCell,o.getSourceCell()){var l=o.source.port,a=o.target.port;l.includes("in")||a.includes("out")||parseInt(l.split("-")[0])>parseInt(a.split("-")[0])?e.graph.removeEdge(o.id):!e.connectingList.some((function(e){return e.source===l&&e.target===a}))&&l&&a&&e.connectingList.push({source:l,target:a})}})),this.graph.on("edge:removed",(function(t){var o=e.connectingList.findIndex((function(e){return e.source===t.cell.source.cell+"-out"&&e.target===t.cell.target.cell+"-in"}));o>-1&&e.connectingList.splice(o,1)}))}}},r=(o("1993"),o("2877")),n=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ant_wrapper"},[e.isDisabled?e._e():t("div",{staticStyle:{display:"none"},attrs:{id:"context-menu"}},["line"===e.current.type?t("div",{on:{click:e.del}},[e._v("删除映射")]):e._e(),"node"===e.current.type?t("div",{on:{click:e.del}},[e._v("删除所有映射")]):e._e(),"node"===e.current.type?t("div",[t("div",{staticClass:"label"},[e._v("字段名称")]),t("div",[e._v(e._s(e.currentField.columnName))])]):e._e(),"node"===e.current.type&&""!==e.currentField.columnComment?t("div",[t("div",{staticClass:"label"},[e._v("中文名称")]),t("div",[e._v(e._s(e.currentField.columnComment))])]):e._e()]),t("div",{attrs:{id:"container"}})])}),[],!1,null,"50e73b67",null);t.default=n.exports},"7a31":function(e,t,o){"use strict";o("11cf")},b866:function(e,t,o){var l=o("d131");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("3875f97e",l,!0,{sourceMap:!1,shadowMode:!1})},d131:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".cm-s-idea span.cm-meta{color:olive}.cm-s-idea span.cm-number{color:#00f}.cm-s-idea span.cm-keyword{line-height:1em;font-weight:700;color:navy}.cm-s-idea span.cm-atom{font-weight:700;color:navy}.cm-s-idea span.cm-def,.cm-s-idea span.cm-operator,.cm-s-idea span.cm-property,.cm-s-idea span.cm-type,.cm-s-idea span.cm-variable,.cm-s-idea span.cm-variable-2,.cm-s-idea span.cm-variable-3{color:#000}.cm-s-idea span.cm-comment{color:grey}.cm-s-idea span.cm-string,.cm-s-idea span.cm-string-2{color:green}.cm-s-idea span.cm-qualifier{color:#555}.cm-s-idea span.cm-error{color:red}.cm-s-idea span.cm-attribute{color:#00f}.cm-s-idea span.cm-tag{color:navy}.cm-s-idea span.cm-link{color:#00f}.cm-s-idea .CodeMirror-activeline-background{background:#fffae3}.cm-s-idea span.cm-builtin{color:#30a}.cm-s-idea span.cm-bracket{color:#cc7}.cm-s-idea{font-family:Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif}.cm-s-idea .CodeMirror-matchingbracket{outline:1px solid grey;color:#000!important}.CodeMirror-hints.idea{font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#616569;background-color:#ebf3fd!important}.CodeMirror-hints.idea .CodeMirror-hint-active{background-color:#a2b8c9!important;color:#5c6065!important}",""])},d7d5:function(e,t,o){!function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function o(e){t(e);var o=e.state.placeholder=document.createElement("pre");o.style.cssText="height: 0; overflow: visible",o.style.direction=e.getOption("direction"),o.className="CodeMirror-placeholder CodeMirror-line-like";var l=e.getOption("placeholder");"string"==typeof l&&(l=document.createTextNode(l)),o.appendChild(l),e.display.lineSpace.insertBefore(o,e.display.lineSpace.firstChild)}function l(e){r(e)&&o(e)}function a(e){var l=e.getWrapperElement(),a=r(e);l.className=l.className.replace(" CodeMirror-empty","")+(a?" CodeMirror-empty":""),a?o(e):t(e)}function r(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(r,n,i){var s=i&&i!=e.Init;if(n&&!s)r.on("blur",l),r.on("change",a),r.on("swapDoc",a),e.on(r.getInputField(),"compositionupdate",r.state.placeholderCompose=function(){!function(e){setTimeout((function(){var l=!1;if(1==e.lineCount()){var a=e.getInputField();l="TEXTAREA"==a.nodeName?!e.getLine(0).length:!/[^\u200b]/.test(a.querySelector(".CodeMirror-line").textContent)}l?o(e):t(e)}),20)}(r)}),a(r);else if(!n&&s){r.off("blur",l),r.off("change",a),r.off("swapDoc",a),e.off(r.getInputField(),"compositionupdate",r.state.placeholderCompose),t(r);var c=r.getWrapperElement();c.className=c.className.replace(" CodeMirror-empty","")}n&&!r.hasFocus()&&l(r)}))}(o("56b3"))},e6fa:function(e,t,o){"use strict";o("7244")},e8b3:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".ant_wrapper[data-v-50e73b67]{position:relative}.ant_wrapper .disabled[data-v-50e73b67]{position:absolute;width:100%;height:100%;left:0;top:0;z-index:9999;cursor:not-allowed}.container[data-v-50e73b67]{height:3000px;width:1000px}#context-menu[data-v-50e73b67]{position:absolute;-webkit-box-shadow:0 0 6px rgba(0,0,0,.5);box-shadow:0 0 6px rgba(0,0,0,.5);min-width:180px;height:auto;background:#fff;-webkit-transition:display .8s ease;transition:display .8s ease;z-index:999}#context-menu div.label[data-v-50e73b67]{color:#c3c3c3}#context-menu>div[data-v-50e73b67]{padding:11px 0;width:90%;cursor:pointer;text-align:center;color:#686868;border-bottom:1px solid #d6d6d6;margin:0 auto;font-size:14px}",""])},ea37:function(e,t,o){"use strict";o.r(t),o("b866"),o("a7be"),o("f6b6"),o("d7d5");var l=o("db05"),a=o.n(l),r=o("56b3");o("8c33"),o("31c5"),o("ffda"),o("9b74"),o("991c");var n={data:function(){return{editor:null}},props:{value:{type:String,default:""},sqlStyle:{type:String,default:"default"},readOnly:{type:[Boolean,String]},placeholder:{type:String,default:""}},watch:{newVal:function(e,t){this.editor&&this.$emit("changeTextarea",this.editor.getValue())}},computed:{newVal:function(){if(this.editor)return this.editor.getValue()},isView:function(){return"view"===this.$route.query.filter}},mounted:function(){this.initCodeMirror()},methods:{formaterSql:function(){this.editor.setValue(a.a.format(this.editor.getValue()))},initCodeMirror:function(){var e=this,t=this;this.editor=r.fromTextArea(this.$refs.mycode,{value:this.value,mode:"text/x-mariadb",indentWithTabs:!0,smartIndent:!0,lineNumbers:!0,matchBrackets:!0,cursorHeight:1,lineWrapping:!0,readOnly:this.isView,theme:"idea",autofocus:!0,extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1},gutters:["myGutter","CodeMirror-linenumbers"],gutterWidth:40}),this.editor.on("inputRead",(function(){e.editor.showHint()})),this.editor.setOption("extraKeys",{"Ctrl-D":function(e){t.formaterSql()}})},setVal:function(){this.editor&&(""===this.value?this.editor.setValue(""):this.editor.setValue(this.value))}}},i=(o("e6fa"),o("2877")),s=Object(i.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{border:"1px solid #409eff"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"mycode",staticClass:"codesql",attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])}),[],!1,null,"41ac5923",null);t.default=s.exports},fcb6:function(e,t,o){"use strict";o.r(t),o("7f7f"),o("8e6e"),o("456d"),o("ffc1"),o("a481"),o("7514"),o("ac6a");var l=o("ade3"),a=o("2f62"),r=o("ea37"),n=o("77f9");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){Object(l.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c={data:function(){return{placeholder:"请输入主键计算逻辑，比如FSELSE_.DIM.customer.borndate > 1995，输入ctrl+d可格式化",placeholder1:"1.引用原子指标后，可输入$进行引用 2.输入ctrl+d可格式化",indicatorsAsync:!1,indicatorInput:"",indicatorsMultipleSelection:[],indicaTorsPages:{page:1,rows:10},radio:"1",value:"",currentOriginTable:0,currentJgbTable:0,rowId:this.$route.query.id,filter:"view"!=this.$route.query.filter,indicaTorstableData:{row:[]},statuslist:[{name:"关闭",id:"0"},{name:"开启",id:"1"}],param:{slot1:"1",slot2:"1",slot3:"1",slot4:"aaaa",slot5:"1",slot6:"1",slot7:"1",sjlyb:"1",jgb:"1"},jgbTable:[{name:"表1",slot1:"",slot2:"",slot3:"",jgbTableData:[{slot9:"1",slot1:"1",slot2:"1",slot3:"1",slot4:"1",slot5:"1",slot6:"1",slot7:"1",slot8:"1"}]}],originTable:[{name:"表1",slot1:"",slot2:"",slot3:"",originTableData:[{slot9:"1",slot1:"1",slot2:"1",slot3:"1",slot4:"1",slot5:"1",slot6:"1",slot7:"1",slot8:"1"}]}],dataSourceList:[],endOptions:[],allField:{a:[{columnName:"aaaa",sourceColumnId:"1"}],b:[{columnName:"bbb",targetColumnId:"2"}]},sourceId:"a",targetId:"b",rules:{slot1:[{required:!0,message:"请输入数据域",trigger:"change"}],slot2:[{required:!0,message:"请输入业务过程",trigger:"change"}],slot3:[{required:!0,message:"请输入指标名",trigger:"change"}],slot4:[{required:!0,validator:this.checkDimName,trigger:"change"}],sjlyb:[{required:!0,validator:this.success,trigger:"change"}],jgb:[{required:!0,validator:this.success,trigger:"change"}]}}},components:{SqlEditor:r.default,antV6:n.default},methods:s(s({},Object(a.b)("develop",["GET_BUSNESS_DATA_SOURCE_LIST","QUERY_DAP_BUSINESS_DEF_DETAIL","UPDATE_DAP_BUSINESS_DEF","INSERT_DAP_BUSINESS_DEF"])),{},{success:function(e,t,o){o()},autoMap:function(){var e=this.allField[this.sourceId],t=this.allField[this.targetId],o={};e.forEach((function(e){var l=t.find((function(t){return t.columnName===e.columnName})),a=t.find((function(t){return t.columnName!==e.columnName&&t.columnName.toLowerCase()===e.columnName.toLowerCase()})),r=t.find((function(t){return t.columnName!==e.columnName&&t.columnName.toLowerCase()!==e.columnName.toLowerCase()&&t.columnName.replace("_","").toLowerCase()===e.columnName.replace("_","").toLowerCase()}));if(o[e.id]=[],l){o[e.id].push(l.id);var n=t.find((function(e){return e.sourceColumnId===l.id}));n&&o[e.id].push(n.id)}if(a){o[e.id].push(a.id);var i=t.find((function(e){return e.sourceColumnId===a.id}));i&&o[e.id].push(i.id)}r&&(o[e.id].push(r.id),t.find((function(e){return e.sourceColumnId===r.id}))&&o[e.id].push(r.id))})),Object.entries(o).length>0&&this.$refs.antV6.autoMap(o)},checkDimName:function(e,t,o){return t?/^[a-zA-Z].*$/.test(t)?void o():o(new Error("必须以英文开头")):o(new Error("英文名不可为空"))},checkTableData:function(e,t,o){if(0===this.param.tableData.length)return o(new Error("请生成右侧键值对"));o()},indicatorsSubmit:function(){this.indicatorsAsync=!1;var e=this.$refs.indicatorsSqleditor,t=this.indicatorsMultipleSelection.map((function(e){return"${"+e.cn+"}"}));e.editor.setValue(t.join(""))},changeTextarea:function(e){this.$set(this.param,"slot5",e)},delOriginTableRow:function(e,t){this.originTable[e].originTableData.splice(t,1)},delJgbTableRow:function(e,t){this.jgbTable[e].jgbTableData.splice(t,1)},addJgbTableRow:function(e){""!=this.jgbTable[e].slot1?this.jgbTable[e].jgbTableData.push({slot9:"",slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""}):this.$message.warning("请输入表名")},addOriginTableRow:function(e){""!=this.originTable[e].slot1?""!=this.originTable[e].slot3?this.originTable[e].originTableData.push({slot9:"",slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""}):this.$message.warning("请选择数据来源部门"):this.$message.warning("请输入表名")},computedTitle:function(){return"view"==this.$route.query.filter?"查看自定义指标":this.$route.query.id?"编辑自定义指标":"新增自定义指标"},addOriginTable:function(){this.originTable.push({name:"表".concat(this.originTable.length+1),slot1:"",slot2:"",slot3:"",originTableData:[{slot9:"",slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""}]}),this.currentOriginTable=this.originTable.length-1},addJgbTable:function(){this.jgbTable.push({name:"表".concat(this.jgbTable.length+1),slot1:"",slot2:"",slot3:"",jgbTableData:[{slot9:"",slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""}]}),this.currentOriginTable=this.originTable.length-1},changeOriginTable:function(e){this.currentOriginTable=e},changeJgbTable:function(e){this.currentJgbTable=e},delOriginTable:function(e){this.originTable.splice(e,1),this.currentOriginTable===e&&(this.currentOriginTable="")},delJgbTable:function(e){this.jgbTable.splice(e,1),this.currentJgbTable===e&&(this.currentJgbTable="")},subBtn:function(){var e=this;this.$refs.subForm.validate((function(t){if(t){var o="",l="";0===e.originTable.length&&(o="请新增数据来源表",l="sjlyb");for(var a=0;a<e.originTable.length&&!o;a++){var r=e.originTable[a];0===r.originTableData.length&&(o="请添加数据来源表",l="sjlyb",e.currentOriginTable=a);for(var n=0;n<r.originTableData.length;n++){var i=r.originTableData[n];if(""===i.slot2){o="数据来源表-类型不可为空",l="sjlyb",e.currentOriginTable=a;break}if(""===i.slot6){o="数据来源表-逻辑主键不可为空",l="sjlyb",e.currentOriginTable=a;break}if(""===i.slot8){o="数据来源表-代理主键不可为空",l="sjlyb",e.currentOriginTable=a;break}}}0===e.jgbTable.length&&(o="请新增结果表",l="jgb");for(var s=0;s<e.jgbTable.length&&!o;s++){var c=e.jgbTable[s];0===c.jgbTableData.length&&(o="请添加结果表",l="jgb",e.currentJgbTable=s);for(var u=0;u<c.jgbTableData.length;u++){var d=c.jgbTableData[u];if(""===d.slot2){o="结果表-类型不可为空",l="jgb",e.currentJgbTable=s;break}if(""===d.slot6){o="结果表-逻辑主键不可为空",l="jgb",e.currentJgbTable=s;break}if(""===d.slot8){o="结果表-代理主键不可为空",l="jgb",e.currentJgbTable=s;break}}}o&&(document.getElementById(l).scrollIntoView({behavior:"smooth"}),e.$message.warning(o))}}))},getDataSourceList:function(){var e=this;this.GET_BUSNESS_DATA_SOURCE_LIST().then((function(t){e.dataSourceList=t}))},delDataJk:function(e){this.dataJk.splice(e,1),this.currentOriginTable=""}}),mounted:function(){},created:function(){this.rowId}},u=(o("7a31"),o("2877")),d=Object(u.a)(c,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{attrs:{title:e.computedTitle(),"opt-type":e.$route.query.filter},on:{"submit-click":e.subBtn}},[t("el-form",{ref:"subForm",staticClass:"form-item",attrs:{model:e.param,"label-width":"120px",rules:e.rules,disabled:!e.filter}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"数据域",prop:"slot1",rules:e.rules.slot1}},[t("el-input",{attrs:{placeholder:"请输入数据域","show-word-limit":""},model:{value:e.param.slot1,callback:function(t){e.$set(e.param,"slot1","string"==typeof t?t.trim():t)},expression:"param.slot1"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"业务过程",prop:"slot2",rules:e.rules.cycleNameCn}},[t("el-input",{attrs:{placeholder:"请输入业务过程","show-word-limit":""},model:{value:e.param.slot2,callback:function(t){e.$set(e.param,"slot2","string"==typeof t?t.trim():t)},expression:"param.slot2"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"指标名",prop:"slot3",rules:e.rules.slot3}},[t("el-input",{attrs:{placeholder:"请输入指标名","show-word-limit":""},model:{value:e.param.slot3,callback:function(t){e.$set(e.param,"slot3","string"==typeof t?t.trim():t)},expression:"param.slot3"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"指标英文名",prop:"slot4",rules:e.rules.slot4}},[t("el-input",{attrs:{placeholder:"请输入指标英文名","show-word-limit":""},model:{value:e.param.slot4,callback:function(t){e.$set(e.param,"slot4","string"==typeof t?t.trim():t)},expression:"param.slot4"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"数据来源表",prop:"sjlyb",rules:e.rules.sjlyb,id:"sjlyb"}},[t("div",{staticClass:"row"},[e._l(e.originTable,(function(o,l){return t("div",{key:l,staticClass:"originTable",class:[e.currentOriginTable===l?"active":"normal"],attrs:{size:"mini"},on:{click:function(t){return e.changeOriginTable(l)}}},[e._v("\n                            "+e._s(o.name)+"\n                            "),1!=e.originTable.length?t("i",{staticClass:"el-icon-error",on:{click:function(t){return e.delOriginTable(l)}}}):e._e()])})),t("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addOriginTable}})],2),e._l(e.originTable,(function(o,l){return[e.currentOriginTable===l?t("div",{key:l,staticClass:"custom_border"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表名"}},[t("el-input",{attrs:{placeholder:"请输入表名","show-word-limit":""},model:{value:o.slot1,callback:function(t){e.$set(o,"slot1","string"==typeof t?t.trim():t)},expression:"i.slot1"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"注释"}},[t("el-input",{attrs:{placeholder:"请输入注释","show-word-limit":""},model:{value:o.slot2,callback:function(t){e.$set(o,"slot2","string"==typeof t?t.trim():t)},expression:"i.slot2"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"数据来源部门"}},[t("el-select",{model:{value:o.slot3,callback:function(t){e.$set(o,"slot3",t)},expression:"i.slot3"}},[t("el-option",{attrs:{value:1,label:"1"}})],1)],1)],1)],1),t("div",{staticClass:"add_table"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addOriginTableRow(l)}}},[t("i",{staticClass:"iconfont iconxinzeng2",staticStyle:{"font-size":"11px"}}),e._v("\n                                    添加\n                                ")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:o.originTableData,border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",align:"center",label:"序号",width:"80"}}),t("el-table-column",{attrs:{prop:"slot9",label:"列名"}}),t("el-table-column",{attrs:{prop:"slot1",label:"注释"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{attrs:{placeholder:"请输入","show-word-limit":""},model:{value:o.row.slot1,callback:function(t){e.$set(o.row,"slot1",t)},expression:"scope.row.slot1"}})]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot2",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{attrs:{placeholder:"请输入","show-word-limit":""},model:{value:o.row.slot2,callback:function(t){e.$set(o.row,"slot2",t)},expression:"scope.row.slot2"}})]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot3",label:"可为空"}}),t("el-table-column",{attrs:{prop:"slot4",label:"精度"}}),t("el-table-column",{attrs:{prop:"slot5",label:"长度"}}),t("el-table-column",{attrs:{prop:"slot6",label:"逻辑主键"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot6,callback:function(t){e.$set(o.row,"slot6",t)},expression:"scope.row.slot6"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot7",label:"拉链"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot7,callback:function(t){e.$set(o.row,"slot7",t)},expression:"scope.row.slot7"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot8",label:"代理主键"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot8,callback:function(t){e.$set(o.row,"slot8",t)},expression:"scope.row.slot8"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("i",{staticClass:"el-icon-remove",staticStyle:{"font-size":"18px"},on:{click:function(t){return e.delOriginTableRow(l,o.$index)}}})]}}],null,!0)})],1)],1):e._e()]}))],2)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"计算逻辑"}},[t("SqlEditor",{ref:"sqleditor",attrs:{value:e.param.slot5,placeholder:e.placeholder},on:{changeTextarea:function(t){return e.changeTextarea(t)}}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"结果表",prop:"jgb",rules:e.rules.jgb,id:"jgb"}},[t("div",{staticClass:"row"},[e._l(e.jgbTable,(function(o,l){return t("div",{key:l,staticClass:"originTable",class:[e.currentJgbTable===l?"active":"normal"],attrs:{size:"mini"},on:{click:function(t){return e.changeJgbTable(l)}}},[e._v("\n                            "+e._s(o.name)+"\n                            "),1!=e.jgbTable.length?t("i",{staticClass:"el-icon-error",on:{click:function(t){return e.delJgbTable(l)}}}):e._e()])})),t("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addJgbTable}})],2),e._l(e.jgbTable,(function(o,l){return[e.currentJgbTable===l?t("div",{key:l,staticClass:"custom_border"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表名"}},[t("el-input",{attrs:{placeholder:"请输入表名","show-word-limit":""},model:{value:o.slot1,callback:function(t){e.$set(o,"slot1","string"==typeof t?t.trim():t)},expression:"i.slot1"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"注释"}},[t("el-input",{attrs:{placeholder:"请输入注释","show-word-limit":""},model:{value:o.slot2,callback:function(t){e.$set(o,"slot2","string"==typeof t?t.trim():t)},expression:"i.slot2"}})],1)],1)],1),t("div",{staticClass:"add_table"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addJgbTableRow(l)}}},[t("i",{staticClass:"iconfont iconxinzeng2",staticStyle:{"font-size":"11px"}}),e._v("\n                                    添加\n                                ")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:o.jgbTableData,border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",align:"center",label:"序号",width:"80"}}),t("el-table-column",{attrs:{prop:"slot9",label:"列名"}}),t("el-table-column",{attrs:{prop:"slot1",label:"注释"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{attrs:{placeholder:"请输入","show-word-limit":""},model:{value:o.row.slot1,callback:function(t){e.$set(o.row,"slot1",t)},expression:"scope.row.slot1"}})]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot2",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{attrs:{placeholder:"请输入","show-word-limit":""},model:{value:o.row.slot2,callback:function(t){e.$set(o.row,"slot2",t)},expression:"scope.row.slot2"}})]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot3",label:"可为空"}}),t("el-table-column",{attrs:{prop:"slot4",label:"精度"}}),t("el-table-column",{attrs:{prop:"slot5",label:"长度"}}),t("el-table-column",{attrs:{prop:"slot6",label:"逻辑主键"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot6,callback:function(t){e.$set(o.row,"slot6",t)},expression:"scope.row.slot6"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot7",label:"拉链"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot7,callback:function(t){e.$set(o.row,"slot7",t)},expression:"scope.row.slot7"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{prop:"slot8",label:"代理主键"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{model:{value:o.row.slot8,callback:function(t){e.$set(o.row,"slot8",t)},expression:"scope.row.slot8"}},[t("el-option",{attrs:{value:1}},[e._v("1")])],1)]}}],null,!0)}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("i",{staticClass:"el-icon-remove",staticStyle:{"font-size":"18px"},on:{click:function(t){return e.delJgbTableRow(l,o.$index)}}})]}}],null,!0)})],1)],1):e._e()]}))],2)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"字段对应",prop:"slot6",rules:e.rules.slot6}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("自动对应")])],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"指标描述",prop:"slot7",rules:e.rules.slot7}},[t("el-input",{attrs:{placeholder:"请输入",type:"textarea","show-word-limit":""},model:{value:e.param.slot7,callback:function(t){e.$set(e.param,"slot7","string"==typeof t?t.trim():t)},expression:"param.slot7"}})],1)],1)],1)],1)],1)}),[],!1,null,"da63f014",null);t.default=d.exports},fe22:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,"[data-v-41ac5923] .CodeMirror{color:#000;direction:ltr;line-height:22px;border:1px solid #e7e7e7}.CodeMirror-hints[data-v-41ac5923]{z-index:9999!important}[data-v-41ac5923] .CodeMirror pre.CodeMirror-placeholder{color:#929292;font-size:15px}",""])}}]);