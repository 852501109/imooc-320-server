(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-81dae312","chunk-2d0d43f6"],{"5fe4":function(t,e,a){"use strict";a.r(e),a.d(e,"status",(function(){return l})),a.d(e,"reviewStatus",(function(){return o})),e.default={1:{tableName:"oa_leave_bill",type:"请假审核"},2:{tableName:"oa_finance",type:"财务审核"},3:{tableName:"sys_category",type:"流程启用审核"}};var l={0:"草稿",1:"处理中",2:"结束"},o=[{label:"待提交",value:0},{label:"处理中",value:1},{label:"通过",value:2},{label:"驳回",value:3},{label:"撤回",value:4},{label:"不通过",value:5},{label:"终止",value:6}]},dac8:function(t,e,a){"use strict";a.r(e),a("7f7f"),a("386d"),a("8e6e"),a("34ef"),a("456d"),a("ac6a");var l=a("ade3"),o=a("d574"),r=a("2f62"),i=a("5fe4"),s=a("25ca");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(l.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={data:function(){return{isSearch:!1,param:{page:1,rows:10,title:null,categoryId:null,status:null},tableList:{rows:[],total:0},workflowTypes:i.default,statusNS:i.status,categoryOptions:[],activeData:{},applicationTime:"",elExport:"",exportTotalList:[]}},created:function(){this.loadData(),this.loadBusinessName()},mixins:[o.default],mounted:function(){this.elExport=document.getElementById("exportExcel")},methods:c(c({},Object(r.b)(["_AJAX"])),{},{loadData:function(){var t=this;this.parameterEchoMixin(),this.adqSearchListMixin={param:this.param,applicationTime:this.applicationTime};var e=Object.assign({},this.param);e.applyTimeStart=this.applicationTime?this.applicationTime[0]:null,e.applyTimeEnd=this.applicationTime?this.applicationTime[1]:null,this._AJAX({url:"activiti.biz.cc.list",method:"GET",data:e}).then((function(e){0==e.code&&(t.tableList=e.result)}))},loadBusinessName:function(){var t=this;this._AJAX({url:"sys.category.list",method:"GET",data:{page:1,rows:9999}}).then((function(e){t.categoryOptions=e.result.rows}))},handleSizeChange:function(t){this.param.page=1,this.param.rows=t,this.loadData()},handleCurrentChange:function(t){this.param.page=t,this.loadData()},search:function(t){var e=this;this.param.page=1,0==t&&this.publics.resetFun(this.param,(function(){e.param.rows=10,e.applicationTime=null})),this.loadData()},views:function(t){this.$router.push({path:"/process/workbench/myWorkflowEdit",query:{formId:t.formId,bizCode:t.bizCode,tableName:t.tableName,optType:"view"}})},exportFile:function(){var t=this,e=[{key:"categoryName",label:"业务名称"},{key:"processName",label:"流程名称"},{key:"formName",label:"表单名称"},{key:"title",label:"申请标题"},{key:"applyTime",label:"发起时间"},{key:"workTime",label:"已流转(天)"},{key:"status",label:"状态"}];if(this.tableList.total>0){var a=[{}];this.exportData((function(){e.forEach((function(t){a[0][t.key]=t.label})),t.exportTotalList.map((function(e){e.applyTime=t.publics.formatTime(e.applyTime,"Y-M-D h:m:s"),e.status=t.statusNS[e.status]})),a=a.concat(t.exportTotalList),t.exportExcel(a,"抄送我的")}))}else this.$AudaqueToast.error({template:"无可导出的内容"})},exportData:function(t){var e=this,a=Object.assign({},this.param);a.applyTimeStart=this.applicationTime?this.applicationTime[0]:null,a.applyTimeEnd=this.applicationTime?this.applicationTime[1]:null,a.rows=this.tableList.total,this._AJAX({url:"activiti.biz.cc.list",method:"GET",data:a}).then((function(a){0==a.code?(e.exportTotalList=a.result.rows,t()):e.$AudaqueToast.error({template:"导出失败"})}))},exportExcel:function(t,e,a){var l=this,o=[];for(var r in t[0])o.push(r);var i=[];t.map((function(t,e){return o.map((function(a,o){return Object.assign({},{v:t[a],position:(o>25?l.getCharCol(o):String.fromCharCode(65+o))+(e+1)})}))})).reduce((function(t,e){return t.concat(e)})).forEach((function(t){i[t.position]={v:t.v}}));var n=Object.keys(i),c={SheetNames:["mySheet"],Sheets:{mySheet:Object.assign({},i,{"!ref":n[0]+":"+n[n.length-1]})}},p=new Blob([this.s2ab(s.default.write(c,{bookType:void 0===a?"xlsx":a,bookSST:!1,type:"binary"}))],{type:""});this.elExport.download=e+".xlsx",this.elExport.href=URL.createObjectURL(p),this.elExport.click(),setTimeout((function(){return URL.revokeObjectURL(p)}),100)},getCharCol:function(t){for(var e="",a=0;t>0;)a=t%26+1,e=String.fromCharCode(a+64)+e,t=(t-a)/26;return e},s2ab:function(t){for(var e=new ArrayBuffer(t.length),a=new Uint8Array(e),l=0;l!==t.length;++l)a[l]=255&t.charCodeAt(l);return e}})},u=a("2877"),h=Object(u.a)(p,(function(){var t=this,e=t._self._c;return e("audaque-table-list-page",[e("template",{slot:"title"},[e("audaque-table-title",{attrs:{title:t.$route.meta.pageName}},[e("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(e){t.isSearch=!t.isSearch}}},[t._v("筛选 ")])])],1),e("template",{slot:"search"},[e("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}],on:{close:function(e){t.isSearch=!1},search:function(e){return t.search(1)},reset:function(e){return t.search(0)}}},[e("audaque-table-search-item",{attrs:{title:"业务名称"}},[e("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.param.categoryId,callback:function(e){t.$set(t.param,"categoryId",e)},expression:"param.categoryId"}},t._l(t.categoryOptions,(function(t){return e("el-option",{key:"option-"+t.id,attrs:{label:t.name,value:t.id}})})),1)],1),e("audaque-table-search-item",{attrs:{title:"申请标题"}},[e("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:t.param.title,callback:function(e){t.$set(t.param,"title","string"==typeof e?e.trim():e)},expression:"param.title"}})],1),e("audaque-table-search-item",{attrs:{title:"状态"}},[e("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.param.status,callback:function(e){t.$set(t.param,"status",e)},expression:"param.status"}},[e("el-option",{attrs:{label:"草稿",value:0}}),e("el-option",{attrs:{label:"处理中",value:1}}),e("el-option",{attrs:{label:"结束",value:2}})],1)],1),e("audaque-table-search-item",{staticClass:"search-time-line",attrs:{title:"发起时间"}},[e("el-date-picker",{staticClass:"search-date",attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.applicationTime,callback:function(e){t.applicationTime=e},expression:"applicationTime"}})],1)],1)],1),[e("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:t.tableList.rows,border:""}},[e("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.param.page,t.param.rows)},width:"50"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"categoryName",label:"业务名称"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"processName",label:"流程名称"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"formName",label:"表单名称"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"title",label:"申请标题"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"applyTime",label:"发起时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("audaqueDatetime")(e.row.applyTime)))]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"workTime",label:"已流转(天)"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.statusNS[e.row.status]))]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",width:"180",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"iconfont iconchakan11 operate",attrs:{title:"查看"},on:{click:function(e){return t.views(a.row,"view")}}})]}}])}),e("template",{slot:"empty"},[e("audaque-table-empty",{attrs:{tableFetchStatus:t.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(e){return t.loadData()}}})],1)],2),e("adq-pagination",{attrs:{"current-page":t.param.page,"page-size":t.param.rows,total:t.tableList.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),e("a",{staticStyle:{display:"none"},attrs:{id:"exportExcel"}})]],2)}),[],!1,null,null,null);e.default=h.exports}}]);