(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-59aa8f85"],{"471e":function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d");var o=i("ade3"),s=i("2f62");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={data:function(){return{param:{page:1,rows:10,status:1},tableList:{},key2:+new Date,isVisibleDialog:!1,formConf:{},dialogTitle:"发起流程",activeData:null,formTitle:null}},created:function(){this.loadData()},methods:n(n({},Object(s.b)(["_AJAX"])),{},{loadData:function(){var t=this;this._AJAX({url:"form.design.list",method:"GET",data:{page:1,rows:1e4,all:0}}).then((function(e){t.tableList=e.result.rows}))},launch:function(t){this.formConf=JSON.parse(t.formJson),this.isVisibleDialog=!0,this.activeData=t},submitForm:function(t){var e=this;if(!this.formTitle||" "==this.formTitle)return this.$AudaqueToast.error({template:"请输入申请标题",methods:{okEvent:function(){}}});var i=this;this._AJAX({url:"activiti.biz.new",method:"POST",data:{title:this.formTitle,tableName:this.activeData.tableName,dataMap:t,procCode:this.activeData.procCode,formId:this.activeData.id}}).then((function(t){e.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){i.isVisibleDialog=!1,i.formTitle=null,i.loadData()}}})}))},resetForm:function(){},closeDialog:function(){this.activeData=null,this.formTitle=null}})},r=(i("f81b"),i("2877")),c=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("audaque-table-list-page",{staticClass:"initiation-process-item"},[i("template",{slot:"title"},[i("audaque-table-title",{attrs:{title:"工单申请"}})],1),[i("el-row",{staticStyle:{height:"100%",overflow:"auto"},attrs:{gutter:20}},[t.tableList&&t.tableList.length>0?t._l(t.tableList,(function(e){return i("div",{key:e.id},[e.procCode?i("el-col",{staticClass:"process-item",attrs:{span:6}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{staticClass:"process-info-item"},[i("div",{staticClass:"top-item"},[i("div",{staticClass:"top-item-info"},[i("div",{staticClass:"title"},[t._v(t._s(e.formName))]),i("div",{staticClass:"process-btn"},[i("el-button",{on:{click:function(i){return t.launch(e)}}},[t._v("发起流程")])],1)])]),i("div",{staticClass:"bottom-item"},[i("div",[i("span",[t._v("备注：")]),i("span",[t._v(t._s(e.formDesc))])])])])])],1):t._e()],1)})):i("div",{staticStyle:{height:"100%",display:"flex"}},[i("audaque-table-empty",{attrs:{tableFetchStatus:t.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(e){return t.loadData()}}})],1)],2),i("el-dialog",{staticClass:"form-parser-dialog",attrs:{title:t.dialogTitle,visible:t.isVisibleDialog,width:"500","close-on-click-modal":!1},on:{"update:visible":function(e){t.isVisibleDialog=e},close:t.closeDialog}},[i("div",{staticClass:"form-line-item"},[i("span",{staticClass:"form-title"},[i("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" 申请标题")]),i("el-input",{attrs:{placeholder:"请输入申请标题",clearable:""},model:{value:t.formTitle,callback:function(e){t.formTitle=e},expression:"formTitle"}})],1),t.isVisibleDialog?i("form-parser",{key:t.key2,ref:"formParser",attrs:{formConf:t.formConf,isShowTitle:!0,isDisabled:!1},on:{submit:t.submitForm,reset:t.resetForm}}):t._e(),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.isVisibleDialog=!t.isVisibleDialog}}},[t._v("取消")]),i("el-button",{attrs:{loading:t.isSHowButtonLoading},on:{click:function(e){return t.$refs.formParser.submitForm()}}},[t._v("提交")])],1)],1)]],2)}),[],!1,null,"d19b21f2",null);e.default=c.exports},"871e":function(t,e,i){var o=i("a64b");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,i("499e").default)("8424c1be",o,!0,{sourceMap:!1,shadowMode:!1})},a64b:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".initiation-process-item .process-item[data-v-d19b21f2]{margin-bottom:20px;min-width:245px}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body{padding:0;font-size:14px}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .top-item{height:50px;line-height:50px;border-bottom:1px solid #e0e0e0}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .top-item .top-item-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .top-item .top-item-info .title{font-weight:700;line-height:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .top-item .top-item-info .process-btn .el-button{height:32px;font-size:12px;margin-top:9px;padding:0 15px}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .top-item .top-item-info .process-btn .el-button>span{line-height:18px}.initiation-process-item .process-item[data-v-d19b21f2] .el-card__body .process-info-item .bottom-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:90px;padding:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.initiation-process-item .form-line-item[data-v-d19b21f2]{margin-bottom:22px}.initiation-process-item .form-line-item .form-title[data-v-d19b21f2]{display:inline-block;width:90px;text-align:right;margin-right:10px}.initiation-process-item .form-line-item[data-v-d19b21f2] .el-input{width:calc(100% - 100px)}",""])},f81b:function(t,e,i){"use strict";i("871e")}}]);