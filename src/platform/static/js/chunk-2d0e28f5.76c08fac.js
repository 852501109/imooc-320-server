(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e28f5"],{"7ee6":function(e,t,a){"use strict";a.r(t),a("386d"),a("8e6e"),a("456d"),a("ac6a"),a("28a5");var n=a("ade3"),l=a("2f62");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o={data:function(){return{isSearch:!1,param:{page:1,rows:10,channelName:null,msgType:null,enable:null},statusList:[{label:"启动",value:1},{label:"关闭",value:0}],msgTypeList:[{label:"公告",value:1},{label:"消息",value:2},{label:"任务",value:3},{label:"告警",value:4},{label:"其他",value:0}],msgTypeObj:{},tableList:{rows:[],total:0}}},created:function(){this.loadMsgType(),this.loadData()},mixins:[a("d574").default],methods:i(i({},Object(l.b)(["_AJAX"])),{},{loadData:function(){var e=this;this.parameterEchoMixin(),this.adqSearchListMixin={param:this.param},this._AJAX({url:"news.sys.channel.list",method:"GET",data:this.param}).then((function(t){if(0==t.code){var a=t.result;a.rows.map((function(e){e.msgType?e.msgType=e.msgType.split(","):e.msgType=[]})),e.tableList=a}}))},loadMsgType:function(){var e=this;this.msgTypeList.forEach((function(t){e.msgTypeObj[t.value]=t.label}))},handleSizeChange:function(e){this.param.page=1,this.param.rows=e,this.loadData()},handleCurrentChange:function(e){this.param.page=e,this.loadData()},search:function(e){this.param.page=1,0==e&&(this.param.channelName=null,this.param.msgType=null,this.param.enable=null,this.param.rows=10),this.loadData()},pageType:function(e,t){this.$router.push({path:"/news/newsChannelSysEdit",query:{optType:e,id:t?t.id:null}})},editStatus:function(e,t){var a=this,n=this;this.$store.commit("SHOW_LOADING",!0),1==e?this._AJAX({url:"news.sys.channel.edit",method:"POST",data:{id:t.id,enable:1}}).then((function(e){0==e.code&&a.$AudaqueToast.tip({template:"启动成功",methods:{okEvent:function(){n.loadData()}}})})):this._AJAX({url:"news.sys.channel.edit",method:"POST",data:{id:t.id,enable:0}}).then((function(e){0==e.code&&a.$AudaqueToast.tip({template:"关闭成功",methods:{okEvent:function(){n.loadData()}}})}))},del:function(e){var t=this;this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){t.$store.commit("SHOW_LOADING",!0),t._AJAX({url:"news.sys.channel.del",method:"GET",data:{id:e.id}}).then((function(e){0==e.code&&t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){t.loadData()}}})}))}}})}})},r=a("2877"),c=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("audaque-table-list-page",[t("template",{slot:"title"},[t("audaque-table-title",{attrs:{title:"消息渠道"}},[t("i",{staticClass:"iconfont iconxinzeng2 audaque-rect-icon",on:{click:function(t){return e.pageType("add")}}},[e._v(" 新增")]),t("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(t){e.isSearch=!e.isSearch}}},[e._v("筛选 ")])])],1),t("template",{slot:"search"},[t("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.isSearch,expression:"isSearch"}],on:{close:function(t){e.isSearch=!1},search:function(t){return e.search(1)},reset:function(t){return e.search(0)}}},[t("audaque-table-search-item",{attrs:{title:"渠道名称"}},[t("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:e.param.channelName,callback:function(t){e.$set(e.param,"channelName","string"==typeof t?t.trim():t)},expression:"param.channelName"}})],1),t("audaque-table-search-item",{attrs:{title:"消息类型"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.param.msgType,callback:function(t){e.$set(e.param,"msgType",t)},expression:"param.msgType"}},e._l(e.msgTypeList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),t("audaque-table-search-item",{attrs:{title:"状态"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.param.enable,callback:function(t){e.$set(e.param,"enable",t)},expression:"param.enable"}},e._l(e.statusList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),[t("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:e.tableList.rows,border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(t){return e.$utils._indexMethod(t,e.param.page,e.param.rows)},width:"50"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"channelName",label:"渠道名称"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"msgType",label:"消息类型"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.msgType,(function(a,n){return t("span",{key:n},[e._v(e._s(e.msgTypeObj[a]+"  "))])}))}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"dataState",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(1==t.row.enable?"启动":"关闭")+"\n                ")]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.permitList.channelEdit?t("span",{staticClass:"iconfont iconFill",attrs:{title:"编辑"},on:{click:function(t){return e.pageType("edit",a.row)}}}):e._e(),e.permitList.channelId?t("span",{staticClass:"iconfont iconchakan11",attrs:{title:"查看详情"},on:{click:function(t){return e.pageType("view",a.row)}}}):e._e(),e.permitList.channelEdit&&1==a.row.enable?t("span",{staticClass:"iconfont iconjinyong1",attrs:{title:"关闭"},on:{click:function(t){return e.editStatus(0,a.row)}}}):e._e(),e.permitList.channelEdit&&0==a.row.enable?t("span",{staticClass:"iconfont iconqiyong2",attrs:{title:"启动"},on:{click:function(t){return e.editStatus(1,a.row)}}}):e._e(),e.permitList.channelDel?t("span",{staticClass:"iconfont iconShape1",attrs:{title:"删除"},on:{click:function(t){return e.del(a.row)}}}):e._e()]}}])}),t("template",{slot:"empty"},[t("audaque-table-empty",{attrs:{tableFetchStatus:e.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(t){return e.loadData()}}})],1)],2),t("adq-pagination",{attrs:{"current-page":e.param.page,"page-size":e.param.rows,total:e.tableList.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})]],2)}),[],!1,null,null,null);t.default=c.exports}}]);