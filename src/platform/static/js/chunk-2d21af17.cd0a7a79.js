(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21af17"],{be53:function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d");var o=a("ade3"),n=a("2f62"),r=a("365c");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(o.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={data:function(){return{isSearch:!1,param:{page:1,rows:10,name:null,categoryId:null,procDefKey:this.$route.query.procDefKey?this.$route.query.procDefKey:"-"},tableList:{rows:[],total:0},typeList:[],action:r.default["activiti.models.import"],categoryId:this.$route.query.categoryId,token:sessionStorage.getItem("token")}},created:function(){var t=this;this._AJAX({url:"sys.category.list",method:"GET",data:{page:1,rows:99999}}).then((function(e){t.typeList=e.result.rows})),this.loadData()},methods:l(l({},Object(n.b)(["_AJAX"])),{},{loadData:function(){var t=this,e=Object.assign({},this.param);this._AJAX({url:"activiti.process.list",method:"GET",data:e}).then((function(e){0==e.code&&(t.tableList=e.result)}))},handleSizeChange:function(t){this.param.page=1,this.param.rows=t,this.loadData()},handleCurrentChange:function(t){this.param.page=t,this.loadData()},search:function(t){var e=this;this.param.page=1,0==t&&this.publics.resetFun(this.param,(function(){e.param.rows=10,e.applicationTime=null})),this.loadData()},designFlow:function(t){this.$router.push({path:"/process/index",query:{modelId:t?t.id:null}})},config:function(t,e){this.$router.push({path:"/process/workflow/procesNodeConfig",query:{optType:e,procDefId:t?t.procDefId:null}})},disableSource:function(t){var e=this,a=this;this._AJAX({url:"activiti.process.update",method:"POST",data:{id:t.id,latest:1===t.latest?0:1}}).then((function(o){e.$AudaqueToast.tip({template:1===t.latest?"禁用成功":"启用成功",methods:{okEvent:function(){a.loadData()}}})}))},del:function(t){var e=this,a=r.default["activiti.process.del"]+"/"+t.deploymentId;this.$AudaqueToast.warn({template:"确定删除",methods:{okEvent:function(){e._AJAX({url:a,method:"GET",data:{}}).then((function(t){e.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){e.loadData()}}})}))}}})},preview:function(t){this.$AudaqueToast.dialog({title:"流程",width:"1000px",data:{pic:r.default["activiti.models.img"]+"?procDefId="+t.procDefId+"&t="+Date.now()},template:'\n                        <div style="text-align:center;">\n                            <img :src="pic" style="min-height:250px"/>\n                        </div>\n\n                    '})},versionDeploy:function(t){var e=this,a=r.default["activiti.models.deploy"]+"/"+t.id;this._AJAX({url:a,method:"POST",data:{}}).then((function(t){0==t.code&&e.$AudaqueToast.tip({template:"部署成功",methods:{okEvent:function(){}}})}))},exportFile:function(t){this.publics.exportFile(this,"/activiti/models/export",{modelId:t.modelId})}})},c=a("2877"),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("audaque-table-list-page",[a("template",{slot:"title"},[a("audaque-table-title",{attrs:{title:"版本管理"}},[a("i",{staticClass:"iconfont iconfanhui1 audaque-rect-icon",on:{click:function(e){return t.$router.go(-1)}}},[t._v(" 返回")])])],1),a("template",{slot:"search"},[a("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}],on:{close:function(e){t.isSearch=!1},search:function(e){return t.search(1)},reset:function(e){return t.search(0)}}},[a("audaque-table-search-item",{attrs:{title:"流程名称"}},[a("el-input",{staticClass:"autoSize f14",model:{value:t.param.name,callback:function(e){t.$set(t.param,"name",e)},expression:"param.name"}})],1),a("audaque-table-search-item",{attrs:{title:"类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.param.categoryId,callback:function(e){t.$set(t.param,"categoryId",e)},expression:"param.categoryId"}},t._l(t.typeList,(function(t){return a("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})})),1)],1)],1)],1),[a("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:t.tableList.rows,border:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.param.page,t.param.rows)},width:"50"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"procDefKey",label:"流程Key"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"categoryName",label:"业务名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"version",label:"版本"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.version?"V."+e.row.version:"-")+"\n                ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"diagramName",label:"图片名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{cursor:"pointer",color:"#5394eb"},on:{click:function(a){return t.preview(e.row)}}},[t._v(t._s(e.row.diagramName))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"latest",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(1===e.row.latest?"启用":"禁用")+"\n                ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"deploymentTime",label:"部署时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t.publics.formatTime(e.row.createTime,"Y-M-D h:m:s"))+"\n                ")]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"220px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"iconfont iconchakan11",attrs:{title:"查看"},on:{click:function(a){return t.config(e.row,"view")}}}),0===e.row.latest?a("span",{staticClass:"iconfont iconliuchengpeizhi",attrs:{title:"流程节点配置"},on:{click:function(a){return t.config(e.row,"add")}}}):t._e(),1===e.row.latest?a("a",{attrs:{title:"禁用"},on:{click:function(a){return t.disableSource(e.row)}}},[a("i",{staticClass:"iconfont iconjinyong1"})]):t._e(),0===e.row.latest?a("a",{attrs:{title:"启用"},on:{click:function(a){return t.disableSource(e.row)}}},[a("i",{staticClass:"iconfont iconqiyong2"})]):t._e(),0===e.row.latest?a("span",{staticClass:"iconfont iconShape1",attrs:{title:"删除"},on:{click:function(a){return t.del(e.row)}}}):t._e(),a("span",{staticClass:"iconfont icondaochu2 operate",attrs:{title:"导出流程"},on:{click:function(a){return t.exportFile(e.row)}}})]}}])}),a("template",{slot:"empty"},[a("audaque-table-empty",{attrs:{tableFetchStatus:t.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(e){return t.loadData()}}})],1)],2),a("adq-pagination",{attrs:{"current-page":t.param.page,"page-size":t.param.rows,total:t.tableList.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})]],2)}),[],!1,null,null,null);e.default=u.exports}}]);