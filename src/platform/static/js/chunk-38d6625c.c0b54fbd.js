(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38d6625c","chunk-4fa306a4"],{"020b":function(t,e,o){"use strict";o.r(e);var i={name:"TableTitle",data:function(){return{}},props:{title:{type:String,default:""},icon:{type:String,default:""},none:String}},n=(o("c1dc"),o("2877")),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["title","iconfont",this.icon?this.icon:"",this.none]},[e("i",{staticClass:"leftBorder"}),e("div",{staticClass:"text"},[this._v(this._s(this.title))]),e("div",{staticClass:"titleIcon"},[this._t("default")],2)])}),[],!1,null,"095b347a",null);e.default=a.exports},"0dd0":function(t,e,o){"use strict";o("9628")},"20ac":function(t,e,o){(t.exports=o("2350")(!1)).push([t.i,".workflow-main .searchBox .el-row[data-v-215fc5b8]{color:#666}.workflow-main .el-table-common__list[data-v-215fc5b8]{height:calc(100% - 102px)}.workflow-main .el-table-common__list .operate[data-v-215fc5b8]{cursor:pointer;color:#53a7f8;font-size:12px}.workflow-main table .iconfont[data-v-215fc5b8]{margin:0 5px}.workflow-main .select-con .con-head[data-v-215fc5b8]{background-color:#fff;height:60px}.workflow-main .select-con .con-head span[data-v-215fc5b8]{font-size:14px;color:#3a405b}.workflow-main .select-con .con-head .head-left[data-v-215fc5b8]{width:49%;line-height:60px;padding-left:10px;text-align:left;display:inline-block}.workflow-main .select-con .con-head .head-right[data-v-215fc5b8]{width:50%;display:inline-block;line-height:60px;text-align:right}.workflow-main .select-con .con-head .head-right .query[data-v-215fc5b8]{padding:10px 16px;border:1px solid #53a7f8;border-top-left-radius:5px;border-bottom-left-radius:5px}.workflow-main .select-con .con-head .head-right .rest[data-v-215fc5b8]{padding:10px 16px;border:1px solid #53a7f8;border-top-right-radius:5px;border-bottom-right-radius:5px}.workflow-main .select-con .con-head .head-right .active[data-v-215fc5b8]{background:#53a7f8;color:#fff}.workflow-main .select-con .con-head .head-right .normal[data-v-215fc5b8]{background:#fff;color:#53a7f8}.workflow-main .select-con .con-child[data-v-215fc5b8]{line-height:80px;background-color:#fff;padding:0 20px;border-top:1px solid #ebebeb;height:80px}.workflow-main .iconfont[data-v-215fc5b8]:before{color:#4885d6}.workflow-main .ueserM-title[data-v-215fc5b8]{height:60px;margin-top:20px;background-color:#fff}.workflow-main .ueserM-title .title-left[data-v-215fc5b8]{width:49%;line-height:60px;text-align:left;display:inline-block}.workflow-main .ueserM-title .title-left .icon-ai-list[data-v-215fc5b8]:before{padding:10px}.workflow-main .ueserM-title .title-left .left-text[data-v-215fc5b8]{font-size:14px;color:#3a405b}.workflow-main .ueserM-title .title-right[data-v-215fc5b8]{width:50%;display:inline-block;line-height:60px;text-align:right}.workflow-main .ueserM-title .title-right .right-text[data-v-215fc5b8]{font-size:14px;color:#3a405b;border:1px solid #ccc;padding:10px;border-radius:2px}.workflow-main .controlRow[data-v-215fc5b8]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.workflow-main .autoSize[data-v-215fc5b8]{width:80px}.workflow-main .autoSize1[data-v-215fc5b8]{width:155px}.workflow-main .autoSize2[data-v-215fc5b8]{width:40px;margin:0 5px}",""])},7900:function(t,e,o){(t.exports=o("2350")(!1)).push([t.i,'.title[data-v-095b347a]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;font-size:14px;padding:0 0 0 16px;color:#717783;line-height:50px;height:50px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #f0f0f0}.title .text[data-v-095b347a]{line-height:20px;font-size:16px;font-weight:400;color:#333}.title div[data-v-095b347a]:nth-child(3){-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right}.title .leftBorder[data-v-095b347a]{width:3px;height:16px;background:#4885d6;margin-right:5px;line-height:16px}.title i.iconfont.rect-icon[data-v-095b347a]:nth-child(n+2):after{content:"";position:absolute;height:20px;border-left:1px solid #e6e6e6;left:0;top:4px}.title .react-active[data-v-095b347a]{color:#4885d6}.top[data-v-095b347a]{border-top:none}',""])},"83fb":function(t,e,o){"use strict";o.r(e),o("8e6e"),o("ac6a"),o("456d");var i=o("ade3"),n=o("2f62");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){Object(i.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var l={data:function(){return{currentPage:1,rows:10,isShowBar:!0,is_query:!0,search_account:"",search_name:"",listData:[],beginTime:"",endTime:""}},components:{TableTitle:o("020b").default},computed:r({},Object(n.d)("workflow",["definitionList","definitionListPage"])),created:function(){this.WORKFLOW_DEFINITION_LISTDATA()},methods:r(r(r({},Object(n.b)("workflow",["WORKFLOW_DEFINITION_LISTDATA"])),Object(n.c)("workflow",["DEFINITION_LIST"])),{},{indexMethod:function(t){return(this.currentPage-1)*this.rows+t+1},getUserList:function(){var t=this,e=this.beginTime,o=this.endTime,i={includeRole:!0,rows:this.rows,page:this.currentPage};this.search_account&&(i.account=this.search_account),this.search_name&&(i.name=this.search_name),e&&(i.beginCreateTimeStr=this.$utils.timeToDate(e)),o&&(i.endCreateTimeStr=this.$utils.timeToDate(o)),this.GETUSERLIST(i).then((function(e){t.INIT_USER_LIST({data:e.rows,total:e.total})})).catch((function(e){return t.loading=!1}))},queryListFn:function(t){this.is_query=0===t,1===t&&(this.search_account="",this.search_name="",this.beginTime="",this.endTime=""),this.getUserList()},showCon:function(t){this.isShowBar=0===t},forceLogoutUser:function(t){var e=this;this.FORCE_LOGOUT_USER(t).then((function(t){e.$AudaqueToast.tip({template:"强制退出成功",methods:{okEvent:function(){}}})}))},handleSelectionChange:function(t){},handleSizeChange:function(t){this.currentPage=1,this.rows=t,this.getUserList()},handleCurrentChange:function(t){this.currentPage=t,this.getUserList()},edit:function(t){this.$router.push({path:"/webkit/userManageEdit",query:{userId:t}})},addUser:function(){this.$router.push({path:"/webkit/userManageEdit"})},resetPWD:function(t){var e=this;this.RESET_PWD(t).then((function(t){e.$AudaqueToast.tip({template:"密码重置成功",methods:{okEvent:function(){}}})})).catch((function(t){return e.loading=!1}))},stopStartUser:function(t){var e=this;t.enabled?this.DISABLE_USER(t.id).then((function(o){e.$AudaqueToast.tip({template:"禁用成功",methods:{okEvent:function(){}}}),e.toggle_user_status(t.id)})):this.ENABLE_USER(t.id).then((function(o){e.$AudaqueToast.tip({template:"启用成功",methods:{okEvent:function(){}}}),e.toggle_user_status(t.id)}))},deleteUser:function(t){var e=this;this.$AudaqueToast.warn({template:"确认删除?",methods:{okEvent:function(){e.DELETE_USER_USER(t).then((function(o){e.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){e.delete_user_by_userid(t)}}})}))}}})}})},c=(o("0dd0"),o("2877")),s=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"workflow-main",staticStyle:{padding:"0"}},[o("table-title",{staticClass:"titleBtnbox",attrs:{title:"流程定义"}},[o("i",{staticClass:"iconfont iconxinzeng2 cur rect-icon",attrs:{title:"新增审批流程"},on:{click:t.addUser}},[t._v(" 新增审批流程")])]),o("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:t.definitionList,border:""},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",index:function(e){return t.$utils._indexMethod(e,t.currentPage,t.rows)},align:"center",width:"50",label:"序号"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图标",align:"center",prop:"icon"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"名称",align:"center",prop:"name"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"分组",align:"center",prop:"category"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"创建时间",align:"center",prop:"createTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("datetime")(e.row.createTime)))]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"更新时间",align:"center",prop:"updateTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("datetime")(e.row.createTime)))]}}])}),o("el-table-column",{attrs:{label:"可见范围",align:"center",prop:"allVisible"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"qs-item"},[t._v(t._s(e.row.allVisible?"全部可见":"部分可见"))])]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"备注",align:"center",prop:"remark"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",align:"center",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"operate",on:{click:function(o){return t.edit(e.row)}}},[t._v("基本信息")]),o("span",{staticClass:"operate",on:{click:function(o){return t.resetPWD(e.row)}}},[t._v("编辑表单")]),o("span",{staticClass:"operate",on:{click:function(o){return t.stopStartUser(e.row)}}},[t._v("审批流程")]),e.enabled?o("span",{staticClass:"operate",on:{click:function(o){return t.deleteUser(e.row)}}},[t._v("禁用")]):t._e(),e.enabled?t._e():o("span",{staticClass:"operate",on:{click:function(o){return t.forceLogoutUser(e.row)}}},[t._v("启用")]),e.enabled?t._e():o("span",{staticClass:"operate",on:{click:function(o){return t.forceLogoutUser(e.row)}}},[t._v("删除")])]}}])})],1),o("adq-pagination",{attrs:{total:t.definitionListPage,"page-size":t.rows,"current-page":t.currentPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)}),[],!1,null,"215fc5b8",null);e.default=s.exports},9628:function(t,e,o){var i=o("20ac");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,o("499e").default)("765ea918",i,!0,{sourceMap:!1,shadowMode:!1})},c1dc:function(t,e,o){"use strict";o("dfbd")},dfbd:function(t,e,o){var i=o("7900");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,o("499e").default)("0f4c07ad",i,!0,{sourceMap:!1,shadowMode:!1})}}]);