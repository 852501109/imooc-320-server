(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-148e3626"],{"0b1c":function(e,t,a){"use strict";a.r(t),a("a481"),a("6762"),a("2fdb"),a("8e6e"),a("456d"),a("c5f6"),a("7514"),a("ac6a"),a("6b54");var n=a("ade3"),r=a("2f62");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o={props:{show:{type:Boolean,default:!1},currentSelectDatabase:{type:Object,default:function(){}},currentLayerValue:{type:String,default:""},selectParam:{type:Object,default:function(){}},currentType:{type:Object,default:function(){}}},data:function(){return{storey:["au_ods","au_std","au_dwd","au_dwm","au_dws","au_app"],datas:[],templateSelection:"",tableData:[],selectedRow:null,multipleSelection:[],defaultProps:{label:"name",children:"children"},treeExpandData:[],searchText:"",param:{code:"",type:"",tagId:null,tableNameOrComment:"",page:1,rows:10,total:0}}},components:{},computed:{isMultiple:function(){return("au_dwd"===this.currentLayerValue||"au_dws"===this.currentLayerValue)&&"target"!==this.currentType.type}},mounted:function(){this.initValue(),this.init(),this.$nextTick((function(){document.querySelector(".pane-comp")&&(document.querySelector(".pane-comp").style.width="177px")}))},methods:l(l(l({},Object(r.b)("fusionTask",["GET_TREE"])),Object(r.b)(["_AJAX"])),{},{initValue:function(){var e=this.currentType.index;if("target"===this.currentType.type)this.isMultiple?this.templateSelection=this.selectParam.alreadySelectTargetTable:this.templateSelection=this.selectParam.alreadySelectTargetTableValue[0];else{var t=this.selectParam.sourceRows[e];this.isMultiple?this.templateSelection=t.alreadySelectSourceTable:t.alreadySelectSourceTableValue[0]}},init:function(){var e=this;this.$nextTick((function(){var t=document.querySelector(".custom-container");t&&(t.style.height=t.clientHeight+"px",e.getTree().then((function(){e.selectCurrent()})))}))},selectCurrent:function(){this.param.page=1,this.param.rows=10,this.param.code=this.currentSelectDatabase.code,this.param.type=this.currentSelectDatabase.type,this.param.tagId=null,this.param.tableNameOrComment="",this.getTable()},getTree:function(){var e=this;return new Promise((function(t,a){e.param.tableNameOrComment="",e.GET_TREE().then((function(a){e.datas=a||[],e.treeExpandData.push("1"),t(a)})).catch((function(e){a(e)}))}))},onSearch:function(){this.getTable()},getTable:function(){var e=this,t={code:this.param.code,type:this.param.type.toString(),page:this.param.page,rows:this.param.rows,tableNameOrComment:this.param.tableNameOrComment};this.param.tagId&&(t.tagId=this.param.tagId),this._AJAX({url:"task.stepHeader.getTableByDBTag",method:"get",data:t}).then((function(t){if(e.tableData=t.rows,e.param.total=t.total,Array.isArray(e.templateSelection)){var a=e.tableData.filter((function(t){return e.templateSelection.map((function(e){return e.id})).includes(t.id)}));setTimeout((function(){a.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)}))}),100)}}))},flattenArray:function(e){for(var t=[],a=0;a<e.length;a++)Array.isArray(e[a])?t=t.concat(this.flattenArray(e[a])):t.push(e[a]);return t},sure:function(){var e=this,t=this,a=Array.isArray(this.templateSelection)?this.templateSelection:[this.tableData.find((function(t){return t.id===e.templateSelection}))];a=a.filter((function(e){return void 0!==e})),this.storey.includes(this.currentSelectDatabase.code)||1!=a[0].isConfiguredFusion?this.onSubmit():this.$AudaqueToast.warn({template:"该表已经配置过融合任务，是否继续配置？",methods:{okEvent:function(){t.onSubmit()}}})},onSubmit:function(){var e=this,t=Array.isArray(this.templateSelection)?this.templateSelection:[this.tableData.find((function(t){return t.id===e.templateSelection}))];if((t=t.filter((function(e){return void 0!==e}))).some((function(e){return 0===e.tableIscreate}))&&this.storey.includes(this.currentSelectDatabase.code))return this.$AudaqueToast.warn({template:"选中的含有未创建表，请前往：模型分层-".concat(this.currentSelectDatabase.label,"中创建"),methods:{okEvent:function(){}}}),!1;var a,n=JSON.parse(JSON.stringify(this.selectParam.sourceRows));if(n[this.currentType.index]?(n.splice(this.currentType.index,1),a=n.map((function(e){return e.alreadySelectSourceTableValue})).flat()):a=n.map((function(e){return e.alreadySelectSourceTableValue})).flat(),("au_dwd"===this.currentLayerValue||"au_dws"===this.currentLayerValue)&&t.some((function(e){return a.includes(e.id)})))return this.$AudaqueToast.warn({template:"当前选中的表与已选中的表有重复值，请重新选择",methods:{okEvent:function(){}}}),!1;this.$emit("submit",t)},isSelectable:function(e){return!0},handleClose:function(){this.$emit("close")},handleRowClick:function(e){this.selectedRow===e?this.selectedRow=null:this.selectedRow=e},handleSizeChange:function(e){this.param.page=1,this.param.rows=e,this.getTable()},handleCurrentChange:function(e){this.param.page=e,this.getTable()},handleCheckboxChange:function(e){e.checked||(this.selectedRow=null)},rowChange:function(e){this.isMultiple?this.$refs.multipleTable.toggleRowSelection(e):this.templateSelection=e.id},handleSelectionChange:function(e){var t=this,a=this.tableData.filter((function(e){return t.templateSelection.map((function(e){return e.id})).includes(e.id)})),n=e.filter((function(e){return!a.map((function(e){return e.id})).includes(e.id)})),r=a.filter((function(t){return!e.map((function(e){return e.id})).includes(t.id)}));this.templateSelection=this.templateSelection.concat(n),this.templateSelection=this.templateSelection.filter((function(e){return!r.map((function(e){return e.id})).includes(e.id)}))},handleNodeClick:function(e){this.param.code=this.currentSelectDatabase.code,this.param.type=this.currentSelectDatabase.type,this.param.tagId=Number(e.id),this.param.page=1,this.param.rows=10,this.getTable()}})},s=(a("2ce9"),a("2877")),c=Object(s.a)(o,(function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"库表选择",visible:e.show,width:"80%","before-close":e.handleClose,"append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[t("div",{staticClass:"custom-container",staticStyle:{"min-height":"60vh"}},[t("audaque-resize-split-page",[t("template",{slot:"leftPane"},[t("div",{staticStyle:{"padding-left":"24px","white-space":"nowrap",overflow:"hidden"}},[e._v("\n                    当前库："),t("span",{staticStyle:{cursor:"pointer",color:"#409eff"},on:{click:e.selectCurrent}},[e._v(e._s(e.currentSelectDatabase.label)+"--")])]),t("el-tree",{staticClass:"tree-dashed",attrs:{data:e.datas,props:e.defaultProps,"default-expanded-keys":e.treeExpandData,"node-key":"id"},on:{"node-click":e.handleNodeClick}})],1),t("template",{slot:"rightPane"},[t("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[t("div",{staticStyle:{width:"50%"}},[t("el-input",{attrs:{placeholder:"通过表名，表中文名模糊查询"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.param.tableNameOrComment,callback:function(t){e.$set(e.param,"tableNameOrComment",t)},expression:"param.tableNameOrComment"}})],1),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("筛选")])],1)]),t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",border:""},on:{"row-click":e.rowChange,"selection-change":e.handleSelectionChange}},[e.isMultiple?t("el-table-column",{attrs:{type:"selection",width:"55"}}):t("el-table-column",{attrs:{align:"center",width:"55",label:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-radio",{staticClass:"radio",attrs:{label:a.row.id},model:{value:e.templateSelection,callback:function(t){e.templateSelection=t},expression:"templateSelection"}},[e._v(" ")])]}}])}),t("el-table-column",{attrs:{prop:"schemaName",width:"80",label:"数据库名","show-overflow-tooltip":""}}),e.storey.includes(e.currentSelectDatabase.code)?e._e():t("el-table-column",{attrs:{prop:"isConfiguredFusion",label:"已配置融合任务","show-overflow-tooltip":"",width:"140"},scopedSlots:e._u([{key:"default",fn:function(a){return[1==a.row.isConfiguredFusion?t("div",[e._v("是")]):e._e(),0==a.row.isConfiguredFusion?t("div",[e._v("否")]):e._e()]}}],null,!1,1126889692)}),t("el-table-column",{attrs:{prop:"tableName",label:"表名","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"tableComment",label:"表中文描述","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{width:"80",prop:"dataNum",label:"数据量"}}),t("el-table-column",{attrs:{width:"100",prop:"tagFullName",label:"元数据标签"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.tagFullName?t("span",{domProps:{innerHTML:e._s(a.row.tagFullName.replace(/;/g,"<br>").replace(/,/g,"→").replace(/;$/,""))}}):e._e()]}}])}),e.storey.includes(e.currentSelectDatabase.code)?t("el-table-column",{attrs:{prop:"tableIscreate",label:"表是否已创建",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(1===t.row.tableIscreate?"已创建":"未创建")+"\n                        ")]}}],null,!1,1411126668)}):e._e()],1),t("adq-pagination",{attrs:{"current-page":e.param.page,total:e.param.total,"page-size":e.param.rows},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2)],1),t("div",{staticClass:"dialog-footer row",attrs:{slot:"footer"},slot:"footer"},[t("div",[t("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确认")])],1)])])}),[],!1,null,"6e812f26",null);t.default=c.exports},"168c":function(e,t,a){var n=a("6ec1");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,a("499e").default)("84b8bda0",n,!0,{sourceMap:!1,shadowMode:!1})},"2ce9":function(e,t,a){"use strict";a("168c")},"6ec1":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".row[data-v-6e812f26]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.row>div[data-v-6e812f26]:first-child{margin-right:10px}[data-v-6e812f26] .el-dialog__body{max-height:100%!important}[data-v-6e812f26] .pane-comp,[data-v-6e812f26] .tree-dashed{overflow:auto}",""])}}]);