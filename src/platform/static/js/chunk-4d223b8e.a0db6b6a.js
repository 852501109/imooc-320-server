(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d223b8e","chunk-4d80e918"],{"4ab7":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".title-dropdown-item[data-v-19b11fa6]{margin-top:0}.title-dropdown-item[data-v-19b11fa6] .el-dropdown-menu__item--divided{margin-top:0;padding:5px 15px}.title-dropdown-item[data-v-19b11fa6] .el-dropdown-menu__item--divided:before{height:0}",""])},8011:function(e,t,i){"use strict";i.r(t),i("8e6e"),i("ac6a"),i("456d"),i("a481");var r=i("ade3"),a=i("d574"),s=i("2f62");function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){Object(r.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={data:function(){var e=this;return{searchBarVisible:!1,currentPage:1,rows:10,search_dataRange:null,userExpirationDateDialog:!1,userForm:{userIds:null,effectTime:null,expiredTime:null},pickerOptionsStart:{disabledDate:function(t){var i=e.userForm.expiredTime;if(i)return t.getTime()>new Date(i).getTime()}},pickerOptionsEnd:{disabledDate:function(t){var i=e.userForm.effectTime;if(i)return t.getTime()<new Date(i).getTime()}},isSignIn:window.isSignIn,searchList:{account:"",name:""},userTableList:{rows:[],total:0},checkIds:[]}},created:function(){this.getUserList()},mixins:[a.default],props:{pageType:{type:String,default:""}},computed:o({},Object(s.d)("webkit",["defTenant"])),methods:o(o(o(o({},Object(s.b)(["_AJAX"])),Object(s.b)("user",["GETUSERLIST","RESET_PWD","DELETE_USER_USER","ENABLE_USER","DISABLE_USER","FORCE_LOGOUT_USER","SET_USER_EXPIRATION_DATE"])),Object(s.c)("user",["INIT_USER_LIST","NEXT_USER_LIST","toggle_user_status","delete_user_by_userid"])),{},{handleSelectionChange:function(e){this.checkIds=e.map((function(e){return e.id}))},isCheckTableData:function(e){return e.length>0?(this.$store.commit("SHOW_LOADING",!0),!0):(this.$AudaqueToast.error({template:"请选择要操作的数据",methods:{okEvent:function(){}}}),!1)},getUserList:function(){var e=this;this.parameterEchoMixin(),this.adqSearchListMixin={includeRole:this.includeRole,rows:this.rows,currentPage:this.currentPage,searchList:this.searchList,search_dataRange:this.search_dataRange};var t=Object.assign({includeRole:!0,rows:this.rows,page:this.currentPage},this.searchList);t.beginCreateTimeStr=this.search_dataRange?this.search_dataRange[0]:"",t.endCreateTimeStr=this.search_dataRange?this.search_dataRange[1]:"","system"===this.pageType?this._AJAX({url:"webkit.getUserList",method:"GET",data:t}).then((function(t){0===t.code&&(e.userTableList=t)})):this._AJAX({url:"webkit.myUserList",method:"GET",data:t}).then((function(t){0===t.code&&(e.userTableList=t)}))},queryListFn:function(e){var t=this;this.currentPage=1,1===e&&this.publics.resetFun(this.searchList,(function(){t.search_dataRange=null})),this.getUserList()},forceLogoutUser:function(e){var t=this;this.FORCE_LOGOUT_USER(e).then((function(e){t.$AudaqueToast.tip({template:"强制退出成功",methods:{okEvent:function(){}}})}))},handleSizeChange:function(e){this.rows=e,this.currentPage=1,this.getUserList()},handleCurrentChange:function(e){this.currentPage=e,this.getUserList()},edit:function(e,t){this.$router.push({path:"/webkit/userManageEdit",query:{userId:e,filter:t,pageType:this.pageType,optType:t}})},addUser:function(){this.$router.push({path:"/webkit/userManageEdit",query:{pageType:this.pageType,optType:"add"}})},resetPWD:function(e){var t=this,i=this;this.isCheckTableData(e)&&this.RESET_PWD({userIds:e}).then((function(e){t.$AudaqueToast.tip({template:"密码重置成功",methods:{okEvent:function(){i.getUserList()}}})})).catch((function(e){return t.loading=!1}))},stopStartUser:function(e,t){var i=this,r=this;t?this.isCheckTableData(e)&&this.DISABLE_USER({userIds:e}).then((function(e){i.$AudaqueToast.tip({template:"禁用成功",methods:{okEvent:function(){r.getUserList()}}})})):this.isCheckTableData(e)&&this.ENABLE_USER({userIds:e}).then((function(e){i.$AudaqueToast.tip({template:"启用成功",methods:{okEvent:function(){r.getUserList()}}})}))},deleteUser:function(e){var t=this;this.isCheckTableData(e)&&this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){t.DELETE_USER_USER({userIds:e}).then((function(e){t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){t.getUserList()}}})}))},cancelEvent:function(){t.$store.commit("SHOW_LOADING",!1)}}})},userExpirationDateFun:function(e){return e.effectTime?e.effectTime=this.publics.formatTime(e.effectTime,"Y-M-D h:m:s"):e.effectTime="",e.expiredTime?e.expiredTime=this.publics.formatTime(e.expiredTime,"Y-M-D h:m:s"):e.expiredTime="",e.effectTime||e.expiredTime?!e.effectTime&&e.expiredTime?"有效期至 "+e.expiredTime:e.effectTime&&!e.expiredTime?e.effectTime+" 开始生效":e.effectTime+"  至  "+e.expiredTime:"未设置账号有效期"},userExpirationDate:function(e,t){this.userExpirationDateDialog=!0,this.userForm.userIds=t,e&&e.effectTime&&(this.userForm.effectTime=this.publics.formatTime(e.effectTime,"Y-M-D h:m:s")),e&&e.expiredTime&&(this.userForm.expiredTime=this.publics.formatTime(e.expiredTime,"Y-M-D h:m:s"))},saveExpirationDate:function(){var e=this;""!=this.userForm.effectTime&&null!=this.userForm.effectTime&&(this.userForm.effectTime=this.userForm.effectTime.replace(" ","T")),""!=this.userForm.expiredTime&&null!=this.userForm.expiredTime&&(this.userForm.expiredTime=this.userForm.expiredTime.replace(" ","T")),this.$store.commit("SHOW_LOADING",!0),this.SET_USER_EXPIRATION_DATE(this.userForm).then((function(t){e.getUserList(),e.userExpirationDateDialog=!1})).catch((function(t){e.userExpirationDateDialog=!1}))}})},l=(i("fe75"),i("2877")),u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("audaque-table-list-page",[i("template",{slot:"title"},[i("audaque-table-title",{attrs:{title:"system"===e.pageType?"用户管理":"我的用户"}},["system"===e.pageType&&e.permitList.addUser||"system"===e.pageType&&0!=e.defTenant?i("i",{staticClass:"iconfont iconxinzeng2 audaque-rect-icon",on:{click:e.addUser}},[e._v("\n                新增")]):e._e(),"system"===e.pageType&&0===e.defTenant?[i("el-dropdown",{attrs:{placement:"bottom"}},[i("i",{staticClass:"iconfont iconpiliang-copy audaque-rect-icon"},[e._v("批量操作")]),i("el-dropdown-menu",{staticClass:"title-dropdown-item",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.stopStartUser(e.checkIds,!1)}}},[e._v("启用")]),i("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.stopStartUser(e.checkIds,!0)}}},[e._v("禁用")]),i("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.resetPWD(e.checkIds)}}},[e._v("重置密码")]),i("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.userExpirationDate(null,e.checkIds)}}},[e._v("设置账号有效期")]),i("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.deleteUser(e.checkIds)}}},[e._v("删除")])],1)],1)]:e._e(),i("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(t){e.searchBarVisible=!e.searchBarVisible}}},[e._v("筛选查询\n            ")])],2)],1),i("template",{slot:"search"},[i("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.searchBarVisible,expression:"searchBarVisible"}],on:{close:function(t){e.searchBarVisible=!1},search:function(t){return e.queryListFn(0)},reset:function(t){return e.queryListFn(1)}}},[i("audaque-table-search-item",{attrs:{title:"用户账号"}},[i("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入账号"},model:{value:e.searchList.account,callback:function(t){e.$set(e.searchList,"account",t)},expression:"searchList.account"}})],1),i("audaque-table-search-item",{attrs:{title:"用户姓名"}},[i("el-input",{attrs:{type:"text",clearable:"",placeholder:"请输入姓名"},model:{value:e.searchList.name,callback:function(t){e.$set(e.searchList,"name",t)},expression:"searchList.name"}})],1),i("audaque-table-search-item",{attrs:{title:"注册时间"}},[i("el-date-picker",{staticClass:"search-date",attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.search_dataRange,callback:function(t){e.search_dataRange=t},expression:"search_dataRange"}})],1)],1)],1),[i("el-table",{attrs:{data:e.userTableList.rows,height:"100%",stripe:"",border:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",index:function(t){return e.$utils._indexMethod(t,e.currentPage,e.rows)},align:"center",width:"60",label:"序号"}}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"用户账号",align:"left",sortable:"",prop:"account"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.account))]}}])}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"用户姓名",align:"center",sortable:"",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"加入时间",align:"center",sortable:"",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("audaqueDatetime")(t.row.createTime)))]}}])}),i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"账号有效期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.userExpirationDateFun(t.row)))]}}])}),"system"===e.pageType?i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.permitList.modifyUser?i("span",{staticClass:"iconfont iconziyuan3 operate",attrs:{title:"编辑"},on:{click:function(i){return e.edit(t.row.id,"edit")}}}):e._e(),e.permitList.modifyUser?i("span",{staticClass:"iconfont iconchakan11 operate",attrs:{title:"查看"},on:{click:function(i){return e.edit(t.row.id,"view")}}}):e._e(),e.permitList.effectExpiredUser&&0===e.defTenant&&!t.row.inside?i("span",{staticClass:"iconfont iconpeizhi operate",attrs:{title:"设置账号有效期"},on:{click:function(i){return e.userExpirationDate(t.row,[t.row.id])}}}):e._e(),e.permitList.resetPwd?i("span",{staticClass:"iconfont iconmimazhongzhi operate",attrs:{title:"重置密码"},on:{click:function(i){return e.resetPWD([t.row.id])}}}):e._e(),e.permitList.disableUser&&t.row.enabled&&!t.row.inside||e.permitList.enableUser&&!t.row.enabled&&!t.row.inside?i("span",{class:["iconfont",t.row.enabled?"iconjinyong1":"iconqiyong2","operate"],attrs:{title:t.row.enabled?"禁用":"启用"},on:{click:function(i){return e.stopStartUser([t.row.id],t.row.enabled)}}}):e._e(),e.permitList.forceLogoutUser&&"login"==e.isSignIn&&!t.row.inside?i("span",{staticClass:"iconfont iconweibiaoti-- operate",attrs:{title:"强制退出"},on:{click:function(i){return e.forceLogoutUser(t.row.id)}}}):e._e(),e.permitList.deleteUser?i("span",{staticClass:"iconfont iconShape1 operate",attrs:{title:"删除"},on:{click:function(i){return e.deleteUser([t.row.id])}}}):e._e()]}}],null,!1,610510739)}):e._e(),"dept"===e.pageType?i("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.permitList.resetPwd?i("span",{staticClass:"iconfont iconmimazhongzhi operate",attrs:{title:"重置密码"},on:{click:function(i){return e.resetPWD([t.row.id])}}}):e._e()]}}],null,!1,2726646657)}):e._e(),i("template",{slot:"empty"},[i("audaque-table-empty",{attrs:{tableFetchStatus:e.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:e.getUserList}})],1)],2),i("adq-pagination",{attrs:{total:e.userTableList.total,"page-size":e.rows,"current-page":e.currentPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],i("el-dialog",{staticClass:"expiration-date",attrs:{title:"设置账号有效期",width:"40%",visible:e.userExpirationDateDialog,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{close:function(t){e.userForm.effectTime=null,e.userForm.expiredTime=null},"update:visible":function(t){e.userExpirationDateDialog=t}}},[i("el-form",{ref:"ruleform",staticClass:"form",attrs:{model:e.userForm,"label-width":"100px"}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"账号生效时间",prop:"effectTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择账号生效时间","picker-options":e.pickerOptionsStart,"value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.userForm.effectTime,callback:function(t){e.$set(e.userForm,"effectTime",t)},expression:"userForm.effectTime"}})],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"账号过期时间",prop:"expiredTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择账号过期时间","picker-options":e.pickerOptionsEnd,"value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.userForm.expiredTime,callback:function(t){e.$set(e.userForm,"expiredTime",t)},expression:"userForm.expiredTime"}})],1)],1),i("div",{staticStyle:{clear:"both"}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.userExpirationDateDialog=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.saveExpirationDate}},[e._v("确 定")])],1)],1)],2)}),[],!1,null,"19b11fa6",null);t.default=u.exports},acf8:function(e,t,i){"use strict";i.r(t);var r={data:function(){return{}},components:{userManagePublic:i("8011").default},mounted:function(){},created:function(){},methods:{}},a=i("2877"),s=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("user-manage-public",{attrs:{"page-type":"system"}})}),[],!1,null,null,null);t.default=s.exports},c64c:function(e,t,i){var r=i("4ab7");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,i("499e").default)("70efcde1",r,!0,{sourceMap:!1,shadowMode:!1})},fe75:function(e,t,i){"use strict";i("c64c")}}]);