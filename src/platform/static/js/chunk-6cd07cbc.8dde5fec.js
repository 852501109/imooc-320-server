(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cd07cbc"],{"1c8c":function(e,a,t){"use strict";t.r(a),t("8e6e"),t("456d"),t("7f7f"),t("6b54"),t("20d6"),t("c5f6"),t("ac6a");var l=t("ade3"),s=t("2f62");function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){Object(l.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var n={data:function(){return{formRule:{tableName:[{required:!0,message:"表不能为空",trigger:"blur"}],annotation:[{required:!0,message:"表不能为空",trigger:"blur"}]},tableType:"1",params:{dataSourceId:"",handler:{},layer:""},handlerTable:[],importData:{departMent:"",sysName:""},importTable:[],importDataValue:"",topicModuleListandType:[]}},computed:r(r(r(r({},Object(s.d)("bussines",["isHBaseSource"])),Object(s.d)("bussinesCopy",["HbaseTables","colTypeData","createDataFile","topicDbAndModuleList"])),Object(s.d)("metaData",["readMetaTableFileData"])),Object(s.d)("bussinesCopy",["paramsId","TreeData","expandedKeys","depDownloadFile"])),methods:r(r(r(r(r({},Object(s.c)("metaData",["minusTable"])),Object(s.b)("metaData",["readMetaTableFile","batchImportAddTable","manual_AddBussines_SourceTable"])),Object(s.b)("bussinesCopy",["getHbaseTables","getDBColumnType","getTopicDbAndModuleList"])),Object(s.b)("bussines",["getIsHBaseSource","manualAddBussinesSourceTable"])),{},{departChange:function(e){if(e){var a=this.topicDbAndModuleList.filter((function(a){return a.topicDbId==e}));a.length>0?(this.topicModuleListandType=a[0].moduleList,this.params.handler.sysName=this.topicModuleListandType.length>0?this.topicModuleListandType[0].topicDbMoudleId:""):(this.params.handler.sysName="",this.topicModuleListandType=[])}else this.params.handler.sysName="",this.topicModuleListandType=[]},departMentChange:function(e){if(e){var a=this.topicDbAndModuleList.filter((function(a){return a.topicDbId==e}));a.length>0?(this.topicModuleListandType=a[0].moduleList,this.importData.sysName=this.topicModuleListandType.length>0?this.topicModuleListandType[0].topicDbMoudleId:""):(this.importData.sysName="",this.topicModuleListandType=[])}else this.importData.sysName="",this.topicModuleListandType=[]},downloadFiles:function(){window.location=this.createDataFile},removeTab:function(e){var a=this.readMetaTableFileData,t=this.importDataValue;t===e&&a.forEach((function(l,s){if(l.tabName===e){var o=a[s+1]||a[s-1];o&&(t=o.tabName)}})),this.importDataValue=t,this.minusTable(a.filter((function(a){return a.tabName!==e})))},uploadFileClick:function(){this.$refs.upload.click()},layerClick:function(e){this.tableType=e},addHandlerRows:function(){this.handlerTable.push({colName:"",colDesc:"",colLength:"",colType:this.colTypeData[0],keyFlag:"0",nullAble:"1",precision:"",seq:""})},delItemClick:function(e,a){this.readMetaTableFileData[e].paramForManualAddCloumnList.splice(a,1)},delColClick:function(e){this.handlerTable.splice(e,1)},getSave:function(){var e=this;if(1==Number(this.tableType))this.getHandlerPostdata();else if(2==Number(this.tableType)){if(this.readMetaTableFileData.length<1)return;var a=this.params.handler.tableName,t=this.readMetaTableFileData.findIndex((function(e){return e.tableName==a}));-1!==t&&this.readMetaTableFileData[t].paramForManualAddCloumnList.concat(this.handlerTable);var l=this.getimportPostdata();this.batchImportAddTable(l).then((function(){e.$message({type:"success",message:"批量导入建表成功!",showClose:!0}),e.$router.go(-1)}))}},getHandlerPostdata:function(){var e=this,a={};this.$refs.formCreateData.validate((function(t){if(!t)return!1;var l=!1;if(e.handlerTable.forEach((function(e,a){""!=e.colName.trim()&&""!=e.colDesc.trim()||(l=!0),e.seq=a})),l)return e.$message({type:"warning",message:"表中的列名与列中文名不可为空!",showClose:!0}),!1;a=e.getmanualData(),e.manual_AddBussines_SourceTable(a).then((function(){e.$message({type:"success",message:"手工建表成功!",showClose:!0}),e.$router.go(-1)}))}))},getmanualData:function(){var e={};return 0!=this.params.layer&&(e.layerId=this.params.layer.toString()),this.params.layer<3?this.params.type>1?(e.dataSourceId=this.importData.departMent,e.deptId=this.importData.sysName,0==this.params.layer&&(e.dataSourceId=this.params.dataSourceId,e.deptId=this.params.deptId)):(e.dataSourceId=this.params.handler.departMent,e.deptId=this.params.handler.sysName,0==this.params.layer&&(e.dataSourceId=this.params.dataSourceId,e.deptId=this.params.deptId)):(e.topicDbId=this.params.handler.departMent,e.topicDbMoudleId=this.params.handler.sysName),e.paramForManualAddCloumnList=this.handlerTable.map((function(e){return e.seq=e.seq+1,e})),e.tabDesc=this.params.handler.annotation,e.tabName=this.params.handler.tableName,e},getimportPostdata:function(){var e={};return this.params.layer>0&&this.params.type>0?(e.topicDbId=this.importData.departMent,e.topicDbMoudleId=this.importData.sysName):(e.dataSourceId=this.params.dataSouceObj.id,e.deptId=this.params.dataSouceObj.parent.id),e.layerId=this.params.layer.toString(),e.tables=[],this.readMetaTableFileData.map((function(a){var t=a.paramForManualAddCloumnList.map((function(e,a){var t=Object.assign({},e);return t.seq=a+1,t.precision?t.precision=t.precision:t.precision="",t.colLength?t.colLength=t.colLength:t.colLength="",t}));return e.tables.push({tabName:a.tabName,tabDesc:a.tabDesc,paramForManualAddCloumnList:t})})),e},uploadFile:function(e){var a=this,t=new FormData,l=e.target.files[0];if(-1==l.name.indexOf("xls"))return this.$message({type:"warning",message:"请选择excel格式的文件上传！",showClose:!0});t.append("file",l),e.target.value="",this.$confirm("导入后会清空已存在的映射关系，并替换为上传文件中的映射关系。确定上传？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.readMetaTableFile(t).then((function(){a.readMetaTableFileData.length>0&&(a.$message({type:"success",message:"导入成功！",showClose:!0}),a.importDataValue=a.readMetaTableFileData[0].tabName)}))})).catch((function(){}))}}),created:function(){var e=this;if(!this.$route.params.hasOwnProperty("type"))return this.$message({message:"请求参数异常,请点击返回重新进入",type:"warning",showClose:!0});this.minusTable([]),this.params=Object.assign({},this.$route.params),this.tableType=this.params.type.toString(),this.importData.departMent=this.params.handler.departMent,this.importData.sysName=this.params.handler.sysName,this.params.dataSourceId&&this.getIsHBaseSource({dataSourceId:this.params.dataSourceId}).then((function(a){a&&e.getHbaseTables()})),this.getDBColumnType({type:0==this.params.layer?"1":"2"}),this.params.showTable||(this.params.layer>0&&this.params.layer<5?this.getTopicDbAndModuleList(1).then((function(){e.topicDbAndModuleList.length>0?(e.params.handler.departMent=e.topicDbAndModuleList[0].topicDbId,e.importData.departMent=e.topicDbAndModuleList[0].topicDbId,e.topicModuleListandType=e.topicDbAndModuleList[0].moduleList,e.params.handler.sysName=e.topicModuleListandType.length>0?e.topicModuleListandType[0].topicDbMoudleId:"",e.importData.sysName=e.topicModuleListandType.length>0?e.topicModuleListandType[0].topicDbMoudleId:""):(e.params.handler.departMent="",e.importData.departMent="",e.params.handler.sysName="",e.importData.sysName="")})):this.params.layer>4&&this.getTopicDbAndModuleList(2).then((function(){e.topicDbAndModuleList.length>0?(e.params.handler.departMent=e.topicDbAndModuleList[0].topicDbId,e.importData.departMent=e.topicDbAndModuleList[0].topicDbId,e.topicModuleListandType=e.topicDbAndModuleList[0].moduleList,e.params.handler.sysName=e.topicModuleListandType.length>0?e.topicModuleListandType[0].topicDbMoudleId:"",e.importData.sysName=e.topicModuleListandType.length>0?e.topicModuleListandType[0].topicDbMoudleId:""):(e.params.handler.departMent="",e.importData.departMent="",e.params.handler.sysName="",e.importData.sysName="")})))}},i=(t("b797"),t("2877")),p=Object(i.a)(n,(function(){var e=this,a=e._self._c;return a("div",{staticClass:"createData"},[a("el-row",{staticClass:"createData-title",style:e.params.showTable?"":{marginBottom:"20px"},attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:20}},[e._v(e._s(2!=e.params.type||e.params.showTable?1!=e.params.type||e.params.showTable?"元数据创建":"手动建表":"导入建表"))]),a("el-col",{staticClass:"createData-goback",attrs:{span:4},nativeOn:{click:function(a){return e.$router.go(-1)}}},[a("i",{staticClass:"iconfont icon-arrow-right"}),e._v(" 返回\n        ")])],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.params.showTable,expression:"params.showTable"}],staticStyle:{"margin-bottom":"20px","border-bottom":"solid 1px #ddd"}},[a("el-menu",{staticStyle:{"border-right":"0px"},attrs:{mode:"horizontal","default-active":e.tableType},on:{select:e.layerClick}},[a("el-menu-item",{staticClass:"nopad menuStyle",attrs:{index:"1"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("手动建表")])]),a("el-menu-item",{staticClass:"nopad menuStyle",attrs:{index:"2"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导入建表")])])],1)],1),"1"==e.tableType?a("div",{style:{height:e.params.showTable?"calc(100% - 151px)":"calc(100% - 90px)"}},[a("el-form",{ref:"formCreateData",attrs:{model:e.params.handler,rules:e.formRule,"label-width":"80px"}},[e.params.showTable?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"departMent",label:0==e.params.layer||""==e.params.layer?"部门":3==e.params.layer||4==e.params.layer?"基础库":5==e.params.layer?"主题库":6==e.params.layer?"应用库":"部门"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.handler.departMent,callback:function(a){e.$set(e.params.handler,"departMent",a)},expression:"params.handler.departMent"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"sysName",label:0==e.params.layer||""==e.params.layer?"系统":3==e.params.layer||4==e.params.layer?"模块":5==e.params.layer?"专题":6==e.params.layer?"应用服务":"系统"}},[a("el-input",{attrs:{disabled:""},model:{value:e.params.handler.sysName,callback:function(a){e.$set(e.params.handler,"sysName",a)},expression:"params.handler.sysName"}})],1)],1)],1):a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"departMent",label:0==e.params.layer||""==e.params.layer?"部门":3==e.params.layer||4==e.params.layer?"基础库":5==e.params.layer?"主题库":6==e.params.layer?"应用库":"部门"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},on:{change:e.departChange},model:{value:e.params.handler.departMent,callback:function(a){e.$set(e.params.handler,"departMent",a)},expression:"params.handler.departMent"}},e._l(e.topicDbAndModuleList,(function(e,t){return a("el-option",{key:t+e.topicDbId,attrs:{label:e.topicDbName,value:e.topicDbId}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"sysName",label:0==e.params.layer||""==e.params.layer?"系统":3==e.params.layer||4==e.params.layer?"模块":5==e.params.layer?"专题":6==e.params.layer?"应用服务":"系统"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:e.params.handler.sysName,callback:function(a){e.$set(e.params.handler,"sysName",a)},expression:"params.handler.sysName"}},e._l(e.topicModuleListandType,(function(e,t){return a("el-option",{key:e.topicDbMoudleId+t,attrs:{label:e.topicDbMoudleName,value:e.topicDbMoudleId}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"tableName",label:"表名"}},[e.isHBaseSource?a("el-select",{attrs:{filterable:"",placeholder:"请选择HBASE表"},model:{value:e.params.handler.tableName,callback:function(a){e.$set(e.params.handler,"tableName",a)},expression:"params.handler.tableName"}},e._l(e.HbaseTables,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1):a("el-input",{attrs:{placeholder:"请输入表名",maxlength:"50"},model:{value:e.params.handler.tableName,callback:function(a){e.$set(e.params.handler,"tableName",a)},expression:"params.handler.tableName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"annotation",label:"表注释"}},[a("el-input",{attrs:{maxlength:"2000"},model:{value:e.params.handler.annotation,callback:function(a){e.$set(e.params.handler,"annotation",a)},expression:"params.handler.annotation"}})],1)],1),a("el-col",{staticStyle:{display:"flex","justify-content":"flex-end","padding-right":"10px","padding-bottom":"20px"},attrs:{span:24}},[a("el-button",{on:{click:e.addHandlerRows}},[a("i",{staticClass:"iconfont icon-jia"}),e._v(" 增加行 ")])],1)],1)],1),a("el-row",{staticStyle:{height:"calc(100% - 174px)"}},[a("el-table",{staticStyle:{width:"100%",height:"100%","overflow-y":"auto"},attrs:{"tooltip-effect":"light","highlight-current-row":"",data:e.handlerTable,border:"",stripe:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",align:"center",width:"50"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"列名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",maxlength:"15"},model:{value:t.row.colName,callback:function(a){e.$set(t.row,"colName",a)},expression:"scope.row.colName"}})]}}],null,!1,3232669944)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"列中文名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{maxlength:"250",size:"mini"},model:{value:t.row.colDesc,callback:function(a){e.$set(t.row,"colDesc",a)},expression:"scope.row.colDesc"}})]}}],null,!1,3803513725)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{filterable:"",clearable:"",size:"mini"},model:{value:t.row.colType,callback:function(a){e.$set(t.row,"colType",a)},expression:"scope.row.colType"}},e._l(e.colTypeData,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)]}}],null,!1,2281343988)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"可为空"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.nullAble,callback:function(a){e.$set(t.row,"nullAble",a)},expression:"scope.row.nullAble"}},[a("el-option",{key:"1",attrs:{label:"Y",value:"1"}}),a("el-option",{key:"0",attrs:{label:"N",value:"0"}})],1)]}}],null,!1,1105871430)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"keyFlag",align:"center",label:"主键"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.keyFlag,callback:function(a){e.$set(t.row,"keyFlag",a)},expression:"scope.row.keyFlag"}},[a("el-option",{key:"1",attrs:{label:"是",value:"1"}}),a("el-option",{key:"0",attrs:{label:"否",value:"0"}})],1)]}}],null,!1,1502351538)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"长度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",size:"mini"},model:{value:t.row.colLength,callback:function(a){e.$set(t.row,"colLength",a)},expression:"scope.row.colLength"}})]}}],null,!1,2462490484)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"精度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",size:"mini"},model:{value:t.row.precision,callback:function(a){e.$set(t.row,"precision",a)},expression:"scope.row.precision"}})]}}],null,!1,1002477918)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",width:"60",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"iconfont icon-shanchu tableList",on:{click:function(a){return e.delColClick(t.$index)}}})]}}],null,!1,1117327220)})],1)],1)],1):"2"==e.tableType?a("div",{style:{height:e.params.showTable?"calc(100% - 151px)":"calc(100% - 90px)"}},[a("el-form",{ref:"importData",attrs:{model:e.importData,"label-width":"80px"}},[a("el-row",[e.params.showTable?a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"departMent",label:0==e.params.layer||""==e.params.layer?"部门":3==e.params.layer||4==e.params.layer?"基础库":5==e.params.layer?"主题库":6==e.params.layer?"应用库":"部门"}},[a("el-input",{attrs:{disabled:""},model:{value:e.importData.departMent,callback:function(a){e.$set(e.importData,"departMent",a)},expression:"importData.departMent"}})],1)],1):a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"departMent",label:0==e.params.layer||""==e.params.layer?"部门":3==e.params.layer||4==e.params.layer?"基础库":5==e.params.layer?"主题库":6==e.params.layer?"应用库":"部门"}},[a("el-select",{attrs:{clearable:""},on:{change:e.departMentChange},model:{value:e.importData.departMent,callback:function(a){e.$set(e.importData,"departMent",a)},expression:"importData.departMent"}},e._l(e.topicDbAndModuleList,(function(e,t){return a("el-option",{key:t+e.topicDbId,attrs:{label:e.topicDbName,value:e.topicDbId}})})),1)],1)],1),e.params.showTable?a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"sysName",label:0==e.params.layer||""==e.params.layer?"系统":3==e.params.layer||4==e.params.layer?"模块":5==e.params.layer?"专题":6==e.params.layer?"应用服务":"系统"}},[a("el-input",{attrs:{disabled:""},model:{value:e.importData.sysName,callback:function(a){e.$set(e.importData,"sysName",a)},expression:"importData.sysName"}})],1)],1):a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"sysName",label:0==e.params.layer||""==e.params.layer?"系统":3==e.params.layer||4==e.params.layer?"模块":5==e.params.layer?"专题":6==e.params.layer?"应用服务":"系统"}},[a("el-select",{attrs:{clearable:""},model:{value:e.importData.sysName,callback:function(a){e.$set(e.importData,"sysName",a)},expression:"importData.sysName"}},e._l(e.topicModuleListandType,(function(e,t){return a("el-option",{key:e.topicDbMoudleId+t,attrs:{label:e.topicDbMoudleName,value:e.topicDbMoudleId}})})),1)],1)],1),a("el-col",{staticClass:"flexEnd",attrs:{span:12}},[a("el-button",{on:{click:e.downloadFiles}},[a("i",{staticClass:"iconfont icon-standard"}),e._v(" 下载导入模板\n                    ")]),a("el-button",{on:{click:e.uploadFileClick}},[a("i",{staticClass:"iconfont icon-tongyong-daorutubiao"}),e._v(" 导入模板\n                    ")]),a("input",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(a){return e.uploadFile(a)}}})],1)],1),a("el-row",[a("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":e.removeTab},model:{value:e.importDataValue,callback:function(a){e.importDataValue=a},expression:"importDataValue"}},e._l(e.readMetaTableFileData,(function(t,l){return a("el-tab-pane",{key:l+Date.now()+"",attrs:{name:t.tabName}},[a("span",{attrs:{slot:"label",title:t.tabDesc},slot:"label"},[e._v(e._s(t.tabName))]),a("el-table",{style:{width:"100%",height:e.params.showTable?"calc(100vh - 407px)":"calc(100vh - 350px)","overflow-y":"auto"},attrs:{"tooltip-effect":"light","highlight-current-row":"",data:t.paramForManualAddCloumnList,border:"",stripe:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",align:"center",width:"50"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"列名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",maxlength:"15"},model:{value:t.row.colName,callback:function(a){e.$set(t.row,"colName",a)},expression:"scope.row.colName"}})]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"列中文名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",maxlength:"250"},model:{value:t.row.colDesc,callback:function(a){e.$set(t.row,"colDesc",a)},expression:"scope.row.colDesc"}})]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.colType,callback:function(a){e.$set(t.row,"colType",a)},expression:"scope.row.colType"}},e._l(e.colTypeData,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"可为空"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.nullAble,callback:function(a){e.$set(t.row,"nullAble",a)},expression:"scope.row.nullAble"}},[a("el-option",{key:"1",attrs:{label:"Y",value:"1"}}),a("el-option",{key:"0",attrs:{label:"N",value:"0"}})],1)]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"keyFlag",align:"center",label:"主键"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini"},model:{value:t.row.keyFlag,callback:function(a){e.$set(t.row,"keyFlag",a)},expression:"scope.row.keyFlag"}},[a("el-option",{key:"1",attrs:{label:"是",value:"1"}}),a("el-option",{key:"0",attrs:{label:"否",value:"0"}})],1)]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"长度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",size:"mini"},model:{value:t.row.colLength,callback:function(a){e.$set(t.row,"colLength",a)},expression:"scope.row.colLength"}})]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"精度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",size:"mini"},model:{value:t.row.precision,callback:function(a){e.$set(t.row,"precision",a)},expression:"scope.row.precision"}})]}}],null,!0)}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"iconfont icon-shanchu tableList",on:{click:function(a){return e.delItemClick(l,t.$index)}}})]}}],null,!0)})],1)],1)})),1)],1)],1)],1):e._e(),a("el-row",{staticStyle:{margin:"10px 0 0"},attrs:{type:"flex",justify:"center"}},[a("el-button",{on:{click:e.getSave}},[e._v("保存")])],1)],1)}),[],!1,null,"2ff273dc",null);a.default=p.exports},aaf6:function(e,a,t){(e.exports=t("2350")(!1)).push([e.i,".createData-title[data-v-2ff273dc]{font-size:16px;border-bottom:1px solid #ddd;padding:0 0 15px 25px}.createData-goback[data-v-2ff273dc]{text-align:right;padding-right:10px;color:#409eff;cursor:pointer;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.createData .menuStyle[data-v-2ff273dc]{padding:0;margin:0 25px}.createData .controlTable[data-v-2ff273dc]{height:100%;overflow:hidden}.createData .flexEnd[data-v-2ff273dc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px}.tableList[data-v-2ff273dc]{color:#409eff}.tableList[data-v-2ff273dc]:hover{color:#66b1ff}",""])},b797:function(e,a,t){"use strict";t("d15a")},d15a:function(e,a,t){var l=t("aaf6");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,t("499e").default)("f9519948",l,!0,{sourceMap:!1,shadowMode:!1})}}]);