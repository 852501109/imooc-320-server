(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6929f5b8","chunk-2d237543"],{e9ec:function(e,t,a){"use strict";a.r(t),a("386d"),a("8e6e"),a("ac6a"),a("456d");var l=a("ade3"),s=a("d574"),n=a("2f62"),o=a("fb3d");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{isSearch:!1,param:{page:1,rows:10},tableList:{rows:[],total:0},msgTypeList:o.msgTypeList,msgNoticeTypeList:o.msgNoticeTypeList,levelList:o.levelList,sendStatusList:o.sendStatusList,activeLineIds:[],handlerStatus:{null:"<span>未办</span>",1:'<span style="color: #f56c6c;">已办</span>',0:"<span>未办</span>",2:"<span>撤回</span>",3:"<span>部分办理</span>"},readFlags:{null:"<span>未读</span>",1:'<span style="color: #f56c6c;">已读</span>',0:"<span>未读</span>"},sysList:[]}},created:function(){var e=this;this._AJAX({url:"webkit.appList",method:"GET",data:{page:1,rows:999999}}).then((function(t){0===t.code&&(e.sysList=t.rows)})),this.loadData()},mixins:[s.default],methods:i(i({},Object(n.b)(["_AJAX"])),{},{loadData:function(){var e=this;this.parameterEchoMixin(),this.adqSearchListMixin={param:this.param},this._AJAX({url:"sys.message.user",method:"GET",data:this.param}).then((function(t){if(0==t.code){var a=t.result;e.tableList=a}}))},handleSizeChange:function(e){this.param.page=1,this.param.rows=e,this.loadData()},handleCurrentChange:function(e){this.param.page=e,this.loadData()},handleSelectionChange:function(e){this.activeLineIds=e.map((function(e){return e.userMessageId}))},rowChange:function(e){this.$refs.multipleTable.toggleRowSelection(e)},search:function(e){var t=this;this.param.page=1,0==e&&this.publics.resetFun(this.param,(function(){t.param.rows=10})),this.loadData()},translation:function(e,t){if(null==t)return"-";for(var a=0;a<e.length;a++)if(e[a].value===t)return e[a].label},view:function(e){this.$router.push({path:"/news/userAnnouncementEdit",query:{optType:"view",id:e.id,type:e.type}})},handle:function(e){var t=this;this._AJAX({url:"sys.message.update.user.info",method:"POST",data:{uuidCode:e.uuidCode,handlerStatus:1}}).then((function(e){0===e.code&&t.$AudaqueToast.tip({template:"办理成功",methods:{okEvent:function(){t.loadData()}}})}))},del:function(){var e=this;this.activeLineIds&&this.activeLineIds.length>0?this.$AudaqueToast.warn({template:"确定删除?",methods:{okEvent:function(){e._AJAX({url:"sys.message.user.del",method:"GET",data:{idStr:e.activeLineIds.join(",")}}).then((function(t){0===t.code&&e.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){e.loadData()}}})}))}}}):e.$AudaqueToast.error({template:"请选择要删除的消息",methods:{okEvent:function(){}}})}})},c=a("2877"),p=Object(c.a)(u,(function(){var e=this,t=e._self._c;return t("audaque-table-list-page",[t("template",{slot:"title"},[t("audaque-table-title",{attrs:{title:"我的消息"}},[e.permitList.messageUserDel?t("i",{staticClass:"iconfont iconShape1 audaque-rect-icon",on:{click:e.del}},[e._v("删除")]):e._e(),t("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(t){e.isSearch=!e.isSearch}}},[e._v("筛选 ")])])],1),t("template",{slot:"search"},[t("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.isSearch,expression:"isSearch"}],on:{close:function(t){e.isSearch=!1},search:function(t){return e.search(1)},reset:function(t){return e.search(0)}}},[t("audaque-table-search-item",{attrs:{title:"消息码"}},[t("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:e.param.uuidCode,callback:function(t){e.$set(e.param,"uuidCode","string"==typeof t?t.trim():t)},expression:"param.uuidCode"}})],1),t("audaque-table-search-item",{attrs:{title:"消息标题"}},[t("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:e.param.title,callback:function(t){e.$set(e.param,"title","string"==typeof t?t.trim():t)},expression:"param.title"}})],1),t("audaque-table-search-item",{attrs:{title:"消息类型"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.param.type,callback:function(t){e.$set(e.param,"type",t)},expression:"param.type"}},e._l(e.msgTypeList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),[t("el-table",{ref:"multipleTable",staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:e.tableList.rows,border:""},on:{"row-click":e.rowChange,"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(t){return e.$utils._indexMethod(t,e.param.page,e.param.rows)},width:"50"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"uuidCode",label:"消息码"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"title",label:"标题"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"templateCode",label:"模板编码"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"type",label:"消息类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.translation(e.msgTypeList,t.row.type))+"\n                ")]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"receiveType",label:"通知对象",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.translation(e.msgNoticeTypeList,t.row.receiveType))+"\n                ")]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"level",label:"是否已读",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[3===a.row.type?t("span",[t("span",{domProps:{innerHTML:e._s(e.$audaquePreventXss(e.handlerStatus[a.row.handlerStatus],e.$xssWhitelist))}}),e._v("\n                        /\n                        "),t("span",{domProps:{innerHTML:e._s(e.$audaquePreventXss(e.readFlags[a.row.readFlag],e.$xssWhitelist))}})]):t("span",[1===a.row.readFlag?t("span",{staticStyle:{color:"#f56c6c"}},[e._v("已读")]):t("span",[e._v("未读")])])]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"createTime",label:"接收时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.publics.formatTime(t.row.createTime,"Y-M-D h:m:s"))+"\n                ")]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",width:"80px",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.permitList.messageUserGet?t("span",{staticClass:"iconfont iconchakan11",attrs:{title:"查看"},on:{click:function(t){return t.stopPropagation(),e.view(a.row)}}}):e._e(),e.permitList.messageUserUpdate&&3===a.row.type&&1!=a.row.handlerStatus&&2!=a.row.handlerStatus?t("span",{staticClass:"iconfont iconbanli",attrs:{title:"办理"},on:{click:function(t){return t.stopPropagation(),e.handle(a.row)}}}):e._e()]}}])}),t("template",{slot:"empty"},[t("audaque-table-empty",{attrs:{tableFetchStatus:e.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(t){return e.loadData()}}})],1)],2),t("adq-pagination",{attrs:{"current-page":e.param.page,"page-size":e.param.rows,total:e.tableList.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})]],2)}),[],!1,null,null,null);t.default=p.exports},fb3d:function(e,t,a){"use strict";a.r(t),a.d(t,"msgTypeList",(function(){return l})),a.d(t,"msgNoticeTypeList",(function(){return s})),a.d(t,"levelList",(function(){return n})),a.d(t,"sendStatusList",(function(){return o})),a.d(t,"publishStatusList",(function(){return r})),a.d(t,"handleStatusList",(function(){return i})),a.d(t,"channelList",(function(){return u}));var l=[{label:"其他",value:0},{label:"公告",value:1},{label:"消息",value:2},{label:"任务",value:3},{label:"告警",value:4}],s=[{label:"标签",value:0},{label:"全部用户",value:1},{label:"用户",value:2},{label:"部门",value:3}],n=[{label:"默认",value:0},{label:"低",value:1},{label:"中",value:2},{label:"高",value:3}],o=[{label:"初始化",value:0},{label:"已发送",value:1},{label:"推送失败",value:3},{label:"失败不再发送",value:-1}],r=[{label:"未发布",value:0},{label:"已发布",value:1},{label:"已撤销",value:2}],i=[{label:"-",value:null},{label:"部分办理",value:3},{label:"撤销",value:2},{label:"办理",value:1},{label:"未办",value:0}],u=[{label:"系统",value:"1"},{label:"邮件",value:"2"},{label:"短信",value:"3"}]}}]);