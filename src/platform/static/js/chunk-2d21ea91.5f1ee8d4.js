(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21ea91"],{d708:function(t,e,o){"use strict";o.r(e),o("8e6e"),o("456d"),o("7f7f"),o("ac6a");var i=o("ade3"),n=o("d574"),a=o("2f62");function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){Object(i.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var c={data:function(){return{form:{page:1,rows:10},appList:{rows:[],total:0},id:""}},computed:{},created:function(){this.initData()},mixins:[n.default],methods:s(s({},Object(a.b)(["_AJAX"])),{},{initData:function(){var t=this;this.parameterEchoMixin(),this.adqSearchListMixin={form:this.form},this._AJAX({url:"authorManage.platform.findAll",method:"GET",data:this.form}).then((function(e){if(0===e.code){var o=e.result;o.rows.forEach((function(t){t.systems&&t.systems.length>0&&(t.systemList=[],t.systems.forEach((function(e){t.systemList.push(e.name)})))})),t.appList.rows=o.rows,t.appList.total=o.total}}))},deleteRole:function(t){var e=this;this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){e._AJAX({url:"authorManage.platform.delete",method:"POST",data:{id:t.id}}).then((function(t){0==t.code&&e.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){e.initData()}}})}))}}})},sortFun:function(t,e){var o=this;this._AJAX({url:"authorManage.platform.moveOrder",method:"POST",data:{id:t.id,upOrDown:e,step:1}}).then((function(t){0===t.code&&o.initData()}))},sizeChange:function(t){this.form.rows=t,this.form.page=1,this.initData()},currentChange:function(t){this.form.page=t,this.initData()}})},l=o("2877"),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("audaque-table-list-page",[o("template",{slot:"title"},[o("audaque-table-title",{attrs:{title:"平台管理"}},[t.permitList.addApp?o("i",{staticClass:"iconfont iconxinzeng2 audaque-rect-icon",on:{click:function(e){return t.$router.push("/config/systemGroupingEdit?add=true&optType=add")}}},[t._v("\n                新增")]):t._e()])],1),[o("el-table",{staticClass:"el-table-common__list",attrs:{data:t.appList.rows,"tooltip-effect":"light","highlight-current-row":"",stripe:"",border:""}},[o("el-table-column",{attrs:{type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.form.page,t.form.rows)},width:"50"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"平台"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"systemList",label:"系统"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.systemList?e.row.systemList.join(","):"-")+"\n                ")]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"operate"},[o("router-link",{attrs:{title:"编辑",to:"/config/systemGroupingEdit?id="+e.row.id+"&edit=true&optType=edit"}},[o("i",{staticClass:"iconfont iconFill"})]),o("router-link",{attrs:{title:"查看",to:"/config/systemGroupingEdit?id="+e.row.id+"&view=true&optType=view"}},[o("i",{staticClass:"iconfont iconchakan11"})]),o("span",{staticClass:"iconfont iconDesce",attrs:{title:"降序"},on:{click:function(o){return t.sortFun(e.row,!1)}}}),0!=e.$index?o("span",{staticClass:"iconfont iconAsce",attrs:{title:"升序"},on:{click:function(o){return t.sortFun(e.row,!0)}}}):t._e(),o("a",{attrs:{title:"删除"},on:{click:function(o){return t.deleteRole(e.row)}}},[o("i",{staticClass:"iconfont iconShape1"})])],1)]}}])}),o("template",{slot:"empty"},[o("audaque-table-empty",{attrs:{tableFetchStatus:t.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:t.initData}})],1)],2),o("adq-pagination",{attrs:{total:t.appList.total,"page-size":t.form.rows,"current-page":t.form.page},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})]],2)}),[],!1,null,"373dd5f2",null);e.default=u.exports}}]);