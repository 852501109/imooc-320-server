(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f714a31e"],{"3d0b":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".get-edit-item[data-v-aef91b8e]{padding-top:20px;margin:0 50px}.get-edit-item li[data-v-aef91b8e]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex}.get-edit-item li .get-edit-type[data-v-aef91b8e]{height:40px;line-height:40px}.get-edit-item li .get-edit-title[data-v-aef91b8e]{width:80px;color:#3a405b;height:40px;line-height:40px}.get-edit-item li .el-tree[data-v-aef91b8e]{width:100%;border:1px solid #dcdfe6;padding:24px}.el-icon-arrow-down[data-v-aef91b8e]:before{color:#fff!important}",""])},"5e24":function(e,t,i){var o=i("3d0b");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,i("499e").default)("25bdb00a",o,!0,{sourceMap:!1,shadowMode:!1})},9304:function(e,t,i){"use strict";i.r(t),i("8e6e"),i("456d"),i("ac6a");var o=i("ade3"),a=i("2f62");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){Object(o.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var n={data:function(){return{value:"",rowId:this.$route.query.id,routeTemplateId:this.$route.query.templateId,param:{reourceId:"",templateId:"",templateName:"",templateDesc:"",isDefaultTemplate:"",columnConfigDtoList:[]},columnConfigDtoResidualList:[],multipleSelection:[],rules:{createTime:[{required:!0,message:"请输入创建时间",trigger:"blur"}],createUser:[{required:!0,message:"请输入创建人",trigger:"blur"}],dataSourceId:[{required:!0,message:"请输入数据源id",trigger:"blur"}],departmentId:[{required:!0,message:"请输入部门id",trigger:"blur"}],id:[{required:!0,message:"请输入自增id，主键",trigger:"blur"}],metaTableId:[{required:!0,message:"请输入表元数据id",trigger:"blur"}],resourceName:[{required:!0,message:"请输入资源名称",trigger:"blur"}],updateTime:[{required:!0,message:"请输入修改时间",trigger:"blur"}],updateUser:[{required:!0,message:"请输入修改人",trigger:"blur"}]}}},computed:{filter:function(){return"look"==this.$route.query.filter?"look":"edit"==this.$route.query.filter?"edit":"add"},dynamicTitle:function(){return"look"==this.$route.query.filter?"查看模板":"edit"==this.$route.query.filter?"修改模板":"新建模板"},isDisable:function(){return"look"==this.$route.query.filter}},methods:l(l({},Object(a.b)("gdrsTemplate",["query_ColumnConfig_ByResourceId","echo_UpdateTemplateBefore","echo_UpdateDefaultTemplateBefore","UPDATE","delete_DefaultTemplate_ByResourceId","delete_Template_ById","INSERT","look_Template"])),{},{deepClone:function(e){return JSON.parse(JSON.stringify(e))},subBtn:function(){var e=this,t=this;this.$refs.structTemplateTableForm.validate((function(i){if(!i)return!1;if("修改模板"===e.dynamicTitle){var o=e.convertParam(e.deepClone(e.param));if(!o.columnConfigDtoList||!o.columnConfigDtoList.length)return void e.$message.error("模板字段配置不能为空!");e.$store.commit("SHOW_LOADING",!0),e.UPDATE(o).then((function(i){0==i.code&&e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){t.$router.go(-1)}}})}))}else if("新建模板"===e.dynamicTitle){var a=e.convertParam(e.deepClone(e.param));if(!a.columnConfigDtoList||!a.columnConfigDtoList.length)return void e.$message.error("模板字段配置不能为空!");e.$store.commit("SHOW_LOADING",!0),e.INSERT(a).then((function(i){0==i.code&&e.$AudaqueToast.tip({template:"添加成功",methods:{okEvent:function(){t.$router.go(-1)}}})}))}}))},queryColumnConfigByResourceId:function(){var e=this;"新建模板"===this.dynamicTitle&&this.query_ColumnConfig_ByResourceId({resourceId:this.rowId}).then((function(t){e.param.columnConfigDtoList=t}))},getSelection:function(){return this.multipleSelection.map((function(e,t){return l(l({},e),{},{sortNum:t})}))},convertParam:function(e){var t=e;return t.isDefaultTemplate=t.isDefaultTemplate?1:0,t.reourceId=this.rowId,t.columnConfigDtoList=this.getSelection(),t},rowChange:function(e){this.$refs.multipleTable.toggleRowSelection(e),this.multipleSelection=e},handleSelectionChange:function(e){this.multipleSelection=e},moveUp:function(e){if(e>0){var t=this.param.columnConfigDtoList.splice(e,1)[0];this.param.columnConfigDtoList.splice(e-1,0,t)}},moveDown:function(e){if(e<this.param.columnConfigDtoList.length-1){var t=this.param.columnConfigDtoList.splice(e,1)[0];this.param.columnConfigDtoList.splice(e+1,0,t)}},moveTop:function(e){if(e>0){var t=this.param.columnConfigDtoList.splice(e,1)[0];this.param.columnConfigDtoList.splice(0,0,t)}},moveBottom:function(e){if(e<this.param.columnConfigDtoList.length-1){var t=this.param.columnConfigDtoList.splice(e,1)[0];this.param.columnConfigDtoList.push(t)}},echoUpdateBefore:function(){var e=this;"修改模板"===this.dynamicTitle&&(this.routeTemplateId?this.echo_UpdateTemplateBefore({resourceId:this.rowId,templateId:this.routeTemplateId}).then((function(t){e.param=t.templateData,e.$nextTick((function(){e.param.columnConfigDtoList.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})),e.columnConfigDtoResidualList=t.columnConfigDtoResidualList,e.columnConfigDtoResidualList.forEach((function(t){e.param.columnConfigDtoList.push(t)})),e.param.isDefaultTemplate=1==e.param.isDefaultTemplate}))})).catch((function(){e.$router.go(-1)})):this.echo_UpdateDefaultTemplateBefore({resourceId:this.rowId}).then((function(t){e.param=t.templateData,e.$nextTick((function(){e.param.columnConfigDtoList.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})),e.columnConfigDtoResidualList=t.columnConfigDtoResidualList,e.columnConfigDtoResidualList.forEach((function(t){e.param.columnConfigDtoList.push(t)})),e.param.isDefaultTemplate=1==e.param.isDefaultTemplate}))})).catch((function(){e.$router.go(-1)})))},echoLookBefore:function(){var e=this;"查看模板"===this.dynamicTitle&&(this.routeTemplateId?this.look_Template({resourceId:this.rowId,templateId:this.routeTemplateId}).then((function(t){e.param=t,e.$nextTick((function(){e.param.columnConfigDtoList.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})),e.param.isDefaultTemplate=1==e.param.isDefaultTemplate}))})).catch((function(){e.$router.go(-1)})):this.look_Template({resourceId:this.rowId}).then((function(t){e.param=t,e.$nextTick((function(){e.param.columnConfigDtoList.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})),e.param.isDefaultTemplate=1==e.param.isDefaultTemplate}))})).catch((function(){e.$router.go(-1)})))}}),mounted:function(){this.queryColumnConfigByResourceId(),this.echoUpdateBefore(),this.echoLookBefore()},created:function(){}},s=(i("cff2"),i("2877")),u=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{attrs:{title:e.dynamicTitle,"opt-type":e.$route.query.filter},on:{"submit-click":e.subBtn}},[[t("el-form",{ref:"structTemplateTableForm",staticClass:"form-item",attrs:{model:e.param,"label-width":"120px",rules:e.rules,disabled:e.isDisable}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"模板名称",prop:"templateName",rules:e.rules.resourceName}},[t("el-input",{attrs:{disabled:e.isDisable,placeholder:"请输入模板名称",maxlength:"200","show-word-limit":""},model:{value:e.param.templateName,callback:function(t){e.$set(e.param,"templateName","string"==typeof t?t.trim():t)},expression:"param.templateName"}})],1),t("el-form-item",{attrs:{label:"模板描述",prop:"templateDesc"}},[t("el-input",{attrs:{type:"textarea",rows:4,disabled:e.isDisable,placeholder:"请输入模板描述",maxlength:"400","show-word-limit":""},model:{value:e.param.templateDesc,callback:function(t){e.$set(e.param,"templateDesc","string"==typeof t?t.trim():t)},expression:"param.templateDesc"}})],1),t("el-form-item",{attrs:{label:"默认模板",prop:"isDefaultTemplate"}},[t("el-checkbox",{attrs:{disabled:e.isDisable},model:{value:e.param.isDefaultTemplate,callback:function(t){e.$set(e.param,"isDefaultTemplate","string"==typeof t?t.trim():t)},expression:"param.isDefaultTemplate"}})],1),t("el-form-item",{attrs:{label:"模板配置",prop:""}},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.param.columnConfigDtoList,"tooltip-effect":"dark"},on:{"row-click":e.rowChange,"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),t("el-table-column",{attrs:{prop:"columnComment",label:"中文描述","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"columnName",label:"对应字段","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{staticClass:"operate"},[t("span",[t("el-button",{staticClass:"el-icon-arrow-up",attrs:{title:"上移",disabled:0===i.$index||e.isDisable,type:"primary",size:"small",circle:""},on:{click:function(t){return t.stopPropagation(),e.moveUp(i.$index)}}})],1),e._v("\n                                         \n                                        "),t("span",[t("el-button",{staticClass:"el-icon-arrow-down",attrs:{title:"下移",disabled:i.$index===e.param.columnConfigDtoList.length-1||e.isDisable,type:"primary",size:"small",circle:""},on:{click:function(t){return t.stopPropagation(),e.moveDown(i.$index)}}})],1),e._v("\n                                         \n                                        "),t("span",[t("el-button",{staticClass:"el-icon-top",attrs:{title:"置顶",disabled:0===i.$index||e.isDisable,type:"primary",size:"small",circle:""},on:{click:function(t){return t.stopPropagation(),e.moveTop(i.$index)}}})],1),e._v("\n                                         \n                                        "),t("span",[t("el-button",{staticClass:"el-icon-bottom",attrs:{title:"置底",disabled:i.$index===e.param.columnConfigDtoList.length-1||e.isDisable,type:"primary",size:"small",circle:""},on:{click:function(t){return t.stopPropagation(),e.moveBottom(i.$index)}}})],1),e._v("\n                                         \n                                    ")])]}}])})],1)],1)],1)],1)],1)]],2)}),[],!1,null,"aef91b8e",null);t.default=u.exports},cff2:function(e,t,i){"use strict";i("5e24")}}]);