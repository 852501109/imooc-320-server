(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a44b8ed"],{"1d85":function(e,t,s){(e.exports=s("2350")(!1)).push([e.i,"[data-v-02255f12] .data-permission .iconfont{color:#606266}[data-v-02255f12] .data-permission /deep/ .el-form-item__content{text-align:left}",""])},"5b9c":function(e,t,s){var a=s("1d85");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,s("499e").default)("22e914ad",a,!0,{sourceMap:!1,shadowMode:!1})},a421:function(e,t,s){"use strict";s("5b9c")},c642:function(e,t,s){"use strict";s.r(t),s("8e6e"),s("456d");var a=s("2909"),i=(s("ac6a"),s("96cf"),s("1da1")),o=s("ade3"),r=(s("7f7f"),s("2f62"));function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var c,d={data:function(){return{deptId:this.$route.query.deptId,deptUserId:this.$route.query.deptUserId,authorityList:[],multipleSelection:[],dataPermissionDialog:!1,idVisibleDialog:!1,dialogTitle:"新增",isDialogType:null,form:{appId:"",accessLevel:"",accessDeptIds:""},rules:{appId:[{trigger:"change",required:!0,message:"应用不能为空"}],accessLevel:[{trigger:"change",required:!0,message:"访问范围不能为空"}]},permissionObj:{},permissionList:[{name:"允许访问当前部门及递归子部门的数据",value:2},{name:"允许访问当前部门的数据",value:3},{name:"允许访问递归子部门的数据",value:4}],defaultProps:{label:"name",children:"children",isLeaf:"isEnd"},popDefaultCheckedKeys:[],appList:[],pageType:this.$route.query.pageType}},created:function(){var e=this;this.permissionList.map((function(t){e.permissionObj[t.value]=t.name})),this.loadData()},methods:l(l({},Object(r.b)(["_AJAX"])),{},{loadData:function(){var e=this;this._AJAX({url:"system"===this.pageType?"orguser.findDataAccess":"orguser.findMyDataAccess",method:"GET",data:{deptId:this.deptId,deptUserId:this.deptUserId}}).then((function(t){0===t.code&&(e.authorityList=t.result?t.result:[])}))},adjustment:(c=Object(i.a)(regeneratorRuntime.mark((function e(t,s){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.idVisibleDialog=!0,e.next=3,this.getAppList();case 3:"edit"==t&&(this.form=Object.assign({},s),this.popDefaultCheckedKeys=[],s.accessDept&&s.accessDept.map((function(e){a.popDefaultCheckedKeys.push(e.accessDeptId)})),this.$set(this.form,"accessDeptIds",s.accessDeptIds),this.isDialogType="edit",this.dialogTitle="编辑");case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)}),del:function(e){var t=this,s=JSON.parse(JSON.stringify(this.authorityList)),a=this;s.forEach((function(a,i){a.id===e.id?t.$delete(s,i):a.accessLevel=null}));var i={accessForm:s,deptId:this.deptId,deptUserId:this.deptUserId};this._AJAX({url:"system"===this.pageType?"orguser.setDataAccess":"orguser.setMyDataAccess",method:"POST",data:i}).then((function(e){0===e.code&&t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){a.loadData()}}})}))},closeDialog:function(){this.$refs.ruleform.resetFields(),this.isDialogType=null,this.form={}},getAppList:function(){var e=this;this._AJAX({url:"orguser.allApp",method:"GET",data:{}}).then((function(t){if(0==t.code){var s=t.result;if("edit"!=e.isDialogType){for(var a=[],i=function(t){var i=s[t];e.authorityList.some((function(e){return e.appName===i.appName}))||a.push(i)},o=0;o<s.length;o++)i(o);e.appList=a}else e.appList=s}}))},loadNode:function(e,t){var s=this;0===e.level&&this.getTreeData(this.deptId,(function(e){t(s.parseResNodes(e))})),e.level>=1&&this.getTreeData(e.data.id,(function(e){t(s.parseResNodes(e))}))},parseResNodes:function(e){return e.result&&e.result.length>0?Object(a.a)(e.result.map((function(e){return Object.assign({},e,{isEnd:0===e.childrenNum})}))):[]},getTreeData:function(e,t){this._AJAX({url:"system"===this.pageType?"org.findChildrenDept":"org.findMyChildren",method:"GET",data:{deptId:e}}).then((function(e){0==e.code&&t&&t(e)}))},popHandleNodeClick:function(e,t){},checkChange:function(e,t){},renderTreeItem:function(e,t){var s=t.node,a=t.data,i=(t.store,"iconfont icondrxx95 group");return a.isPosition?i=a.leader?"iconfont iconlingdao leader":"iconfont iconyuangong people":1===s.level&&(i="iconfont icondrxx95 root"),e("span",{class:i,style:""},[" ",a.name])},getSubmitData:function(){var e=this;7===this.form.accessLevel?this.form.accessDeptIds=this.$refs.tree.getCheckedKeys():delete this.form.accessDeptIds;var t=JSON.parse(JSON.stringify(this.authorityList));return t.forEach((function(s,a){e.form.id&&s.id===e.form.id?(e.$set(t,a,{}),e.$set(t,a,e.form)):s.accessLevel=null})),"edit"!=this.isDialogType&&t.push(this.form),{accessForm:t,deptId:this.deptId,deptUserId:this.deptUserId}},submitDataPermission:function(){var e=this,t=this,s=this.getSubmitData();this.$refs.ruleform.validate((function(a){if(!a)return!1;e._AJAX({url:"system"===e.pageType?"orguser.setDataAccess":"orguser.setMyDataAccess",method:"POST",data:s}).then((function(s){0===s.code&&e.$AudaqueToast.tip({template:"提交成功",methods:{okEvent:function(){t.loadData(),t.idVisibleDialog=!1}}})}))}))}})},u=(s("a421"),s("2877")),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("audaque-table-list-page",[s("template",{slot:"title"},[s("audaque-table-title",{attrs:{title:"数据权限"}},[s("span",{staticClass:"iconfont iconxinzeng2",attrs:{title:"新增"},on:{click:function(t){return e.adjustment("add")}}}),s("i",{staticClass:"audaque-edit-tab__return-text iconfont adq-icon-back audaque-rect-icon",on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])])],1),[s("el-table",{ref:"multipleTable",staticClass:"authority-table",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:e.authorityList,border:""}},[s("el-table-column",{attrs:{type:"index",label:"序号",width:"55"}}),s("el-table-column",{attrs:{prop:"appName",label:"系统名称"}}),s("el-table-column",{attrs:{prop:"accessLevel",label:"访问范围"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                        "+e._s(e.permissionObj[t.row.accessLevel])+"\n                    ")]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"iconfont iconFill",attrs:{title:"编辑"},on:{click:function(s){return e.adjustment("edit",t.row)}}}),s("span",{staticClass:"iconfont iconShape1",attrs:{title:"删除"},on:{click:function(s){return e.del(t.row)}}})]}}])})],1)]],2),s("el-dialog",{staticClass:"data-permission",attrs:{title:e.dialogTitle,visible:e.idVisibleDialog,width:"500","close-on-click-modal":!1},on:{"update:visible":function(t){e.idVisibleDialog=t},close:e.closeDialog}},[s("el-form",{ref:"ruleform",attrs:{model:e.form,"label-width":"90px",rules:e.rules}},[s("el-form-item",{attrs:{label:"应用",prop:"appId"}},[s("el-select",{attrs:{placeholder:"请选择",disabled:"edit"==e.isDialogType},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}},e._l(e.appList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.appName,value:e.id}})})),1)],1),s("el-form-item",{attrs:{label:"访问范围",prop:"accessLevel"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.accessLevel,callback:function(t){e.$set(e.form,"accessLevel",t)},expression:"form.accessLevel"}},e._l(e.permissionList,(function(e){return s("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),7===e.form.accessLevel?s("el-form-item",{attrs:{label:"访问部门:","label-width":"80px"}},[s("el-tree",{ref:"tree",staticClass:"tree-dashed",attrs:{props:e.defaultProps,"show-checkbox":"","expand-on-click-node":!0,"node-key":"id","default-checked-keys":e.popDefaultCheckedKeys,"render-content":e.renderTreeItem,"check-strictly":!0,indent:20,lazy:"",load:e.loadNode},on:{"node-click":e.popHandleNodeClick,"check-change":e.checkChange}})],1):e._e()],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.idVisibleDialog=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.submitDataPermission}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,"02255f12",null);t.default=p.exports}}]);