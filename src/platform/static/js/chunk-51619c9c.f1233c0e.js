(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-51619c9c"],{"2b55":function(e,t,a){var i=a("a997");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("395c60fe",i,!0,{sourceMap:!1,shadowMode:!1})},"3a1d":function(e,t,a){"use strict";a("2b55")},a997:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".set-administrator-form .el-form-item__error{position:relative}",""])},b5a2:function(e,t,a){var i=a("f5fe");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("6a585cc8",i,!0,{sourceMap:!1,shadowMode:!1})},bb2c:function(e,t,a){"use strict";a("b5a2")},be10:function(e,t,a){"use strict";a.r(t),a("7f7f"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("8e6e"),a("456d"),a("96cf");var i=a("1da1"),o=a("2909"),r=(a("ac6a"),a("ade3")),n=a("2f62"),l=a("365c");function s(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){l=!0,r=e},f:function(){try{n||null==a.return||a.return()}finally{if(l)throw r}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,h=a("d958"),m={data:function(){return{clickedRow:{},nodeClickData:{},defaultProps:{label:"name",children:"children",isLeaf:"isEnd"},defaultExpanded:[],defaultShowNodes:[],treeDialog:{title:"",deptType:1,zoneCode:"",name:"",deptCode:"",industryCategory:"3",roleIds:[],tagIds:[]},treeDialogVisible:!1,treeDialogTitle:"",treeDialogType:"",deptTags:[],industryList:[{name:"党委",id:"1"},{name:"人大",id:"2"},{name:"政府",id:"3"},{name:"政协",id:"4"},{name:"法院",id:"5"},{name:"检察院",id:"6"},{name:"地方",id:"7"},{name:"企业",id:"8"}],nodeTypeList:[{label:"实体组织",value:1},{label:"行政区划",value:2},{label:"虚拟组织",value:3},{label:"部门/团队",value:4},{label:"科室",value:5}],nodeTypeObj:{},availableCharacterList:[],availableTagList:[],tmpResolvephoto:null,rules:{deptType:[{required:!0,message:"请选择组织类型",trigger:"change"}],name:[{required:!0,message:"请输入组织名称",trigger:"blur"}],deptCode:[{required:!0,message:"请输入组织名称的首字母",trigger:"blur"}],industryCategory:[{required:!0,message:"请输入所属行业",trigger:"change"}],zoneCode:[{required:!0,message:"请输入区化代码",trigger:"blur"}]},isDeleteUser:!1,searchBarVisible:!1,userList:{rows:[],total:0},userListForm:{deptId:null,account:"",name:"",page:1,rows:10},path:this.$route.path,filterText:"",deptRoleList:[],treeNode:null,formData:null,loading:!1,isCluster:window.isCluster}},props:{pageType:{type:String,default:""}},watch:{$route:{handler:function(e,t){this.getUserList()},deep:!0},filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){},created:function(){this.loadNodeType()},computed:u({},Object(n.d)("webkit",["defTenant"])),methods:u(u({},Object(n.b)(["_AJAX"])),{},{permitFun:function(e,t){return"system"===this.pageType?e:"dept"===this.pageType?t:void 0},handleKeyup:function(e){if("edit"===this.treeDialogType)return!1;var t=h(e.target.value,{style:h.STYLE_FIRST_LETTER});this.treeDialog.deptCode=t.join("")},queryListFn:function(e){this.userListForm.page=1,1===e?this.getUserList():(this.userListForm.account="",this.userListForm.name="")},loadNodeType:function(){var e=this;this.nodeTypeList.forEach((function(t){e.nodeTypeObj[t.value]=t.label}))},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},loadNode:function(e,t){var a=this;0===e.level&&(this.treeNode=e,this._AJAX({url:"system"===this.pageType?"org.findRootDept":"org.findMyDept",method:"GET",data:{}}).then((function(e){0==e.code&&e.result&&(a.defaultExpanded.push(e.result.id),t([{name:e.result.name,id:e.result.id,level:e.result.level,children:e.result.children,isEnd:0===e.result.childrenNum,managerList:e.result.managerList,isFirstNode:!0,myDept:"system"===a.pageType||e.result.myDept}]))}))),e.level>=1&&(1===e.level&&"dept"===this.pageType&&e.data.children.map((function(e){a.defaultExpanded.push(e.id)})),0===e.data.children.length?this.loadTreeData(e.data.id,(function(e){t(a.parseRes2Nodes(e))})):t(Object(o.a)(e.data.children.map((function(e){return Object.assign({},e,{id:e.id,isEnd:0===e.childrenNum,level:e.level,children:e.children,isEdit:!0,myDept:"system"===a.pageType||e.myDept})})))))},parseRes2Nodes:function(e,t){var a=this;return e.result&&e.result.length>0?Object(o.a)(e.result.map((function(e){return Object.assign({},e,{id:e.id,level:e.level,isEnd:0===e.childrenNum,isEdit:!0,myDept:"system"===a.pageType||e.myDept})}))):[]},loadTreeData:function(e,t){this._AJAX({url:("system"===this.pageType?l.default["org.findChildrenDept"]:l.default["org.findMyChildren"])+"?deptId=1",method:"GET",params:{deptId:1}}).then((function(e){0==e.code&&t(e)}))},partialRefreshpartialRefresh:function(e){e.loaded=!1,e.expand()},updateTreeNode:function(e,t,a){var i=this,o=null;e.isShowFirstNode&&"setNodeAdmin"===a?this.partialRefreshpartialRefresh(this.treeNode):(o="add"===t?e.id:e.pid,this.loadTreeData(o,(function(a){"edit"==t?i.removeTreeNode(e.id):i.nodeClickData.children=[],setTimeout((function(){i.$refs.tree.updateKeyChildren(o,i.parseRes2Nodes(a,"addDept"))}),100)})))},removeTreeNode:function(e){this.$refs.tree.remove(e)},renderTreeItem:function(e,t){var a=t.node,i=t.data,o=(t.store,"iconfont icondrxx95 group");return i.isPosition?o=i.leader?"iconfont iconlingdao leader":"iconfont iconyuangong people":1===a.level&&(o="iconfont icondrxx95 root"),e("span",{class:o,style:""},[" ",i.name])},addManager:function(){var e=this,t={accountList:[{index:1,account:""}]};this.$AudaqueToast.dialog({title:"设置节点管理员",align:"left",className:"",width:"600px",data:{ruleForm:t,rules:{account:[{trigger:"blur",required:!0,message:"请输入用户名"},{validator:function(e,a,i){var o=0;t.accountList&&t.accountList.forEach((function(e){if(e.account===a&&++o>1)return i(new Error("用户不能重复"))})),i()},trigger:"blur"}]},userMaxLength:window.accountMaxLength},mounted:function(){if(e.clickedRow.managerList){var t=[];e.clickedRow.managerList.map((function(e){var a={};a.account=e.account,a.id=e.id,t.push(a)})),this.ruleForm.accountList=t}},template:'\n                          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="set-administrator-form">\n                              <el-form-item label=" " >\n                                  <div style="text-align: left;">\n                                      <el-button class="add-system-btn" @click="publics.addLine(ruleForm.accountList,true)">添加管理员</el-button>\n                                  </div>\n                                  <el-table\n                                          tooltip-effect=\'light\'\n                                          class="el-table-common__list"\n                                          highlight-current-row\n                                          stripe\n                                          :data="ruleForm.accountList"\n                                          border\n                                  >\n                                      <el-table-column\n                                              show-overflow-tooltip\n                                              type="index"\n                                              align="center"\n                                              width="50"\n                                              label="序号"\n                                      >\n                                      </el-table-column>\n                                       <el-table-column\n                                              show-overflow-tooltip\n                                              label="用户"\n                                              prop="account"\n                                      >\n                                          <template slot-scope="scope">\n                                              <el-form-item :prop="\'accountList.\' + scope.$index + \'.account\'"\n                                                :rules=\'rules.account\'>\n                                                  <el-input v-model.trim="scope.row.account" :maxlength="userMaxLength" show-word-limit></el-input>\n                                              </el-form-item>\n                                          </template>\n                                      </el-table-column>\n                                      <el-table-column\n                                              show-overflow-tooltip\n                                              label="操作"\n                                              width="80"\n                                      >\n                                          <template slot-scope="scope">\n                                                   <span\n                                                           title="删除"\n                                                           :class="[\'iconfont\', \'iconShape1\', \'operate\']"\n                                                           @click="publics.removeLine(ruleForm.accountList,[ruleForm.accountList[scope.$index]])"\n                                                   ></span>\n                                          </template>\n                                      </el-table-column>\n                                  </el-table>\n                            </el-form-item>\n                          </el-form>\n                      ',methods:{okEvent:function(){var t=this,a=!1;return this.$refs.ruleForm.validate((function(i){if(!i)return a=!0,!1;e.$store.commit("SHOW_LOADING",!0),e._AJAX({url:"system"===e.pageType?"org.setDeptManager":"org.setMyDeptManager",method:"POST",data:{deptId:e.clickedRow.id,users:t.ruleForm.accountList}}).then((function(t){0==t.code&&e.$AudaqueToast.tip({template:"设置成功",methods:{okEvent:function(){e.getTreeDataInfo(e.clickedRow.id),e.updateTreeNode(e.clickedRow,"edit","setNodeAdmin")}}})})).catch((function(){}))})),a},cancelEvent:function(){}}})},setNodeSys:function(){var e=[],t=Object.assign({},this.clickedRow);t.managerList&&t.managerList.map((function(t){e.push(t.account)})),this.$set(this.clickedRow,"managers",e)},treeOperaDept:(p=Object(i.a)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object.assign({},this.clickedRow),"add"!=t){e.next=8;break}this.getDeptRole(a.id,a,t),this.getDeptTag(a.id),this.treeDialogTitle="新增组织",this.treeDialogType="add",e.next=16;break;case 8:return e.next=10,this.getDeptRole(a.pid,a,t);case 10:return e.next=12,this.getDeptTag(a.pid);case 12:return this.treeDialogTitle="编辑组织",this.treeDialogType="edit",e.next=16,this.getTreeDataInfo(a.id);case 16:this.closeDialog(),this.treeDialogVisible=!0;case 18:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)}),getTreeDataInfo:function(e){var t=this;this._AJAX({url:"system"===this.pageType?"org.findDepartment":"org.findMyDepartment",method:"GET",data:{deptId:e}}).then((function(e){if(0==e.code){var a=e.result;t.treeDialog=a,t.clickedRow=Object.assign(t.clickedRow,a),"system"===t.pageType&&(t.clickedRow.myDept=!0),t.deptRoleList=[],t.deptRoleList=a.roleList,t.loadRoleList(),t.setNodeSys()}}))},loadRoleList:function(){this.deptRoleList&&this.deptRoleList.map((function(e){return e.disabled=!0}));var e=this.availableCharacterList.concat(this.deptRoleList),t={},a=[];e.map((function(e){t[e.id]||(a.push(e),t[e.id]=!0)})),this.availableCharacterList=a},getDeptRole:function(e,t,a){var i=this,o=null;o="system"===this.pageType?1===t.level||2===t.level&&"edit"===a?"role.myRoleList":"org.getDeptRole":1===t.level||2===t.level&&"edit"===a?"role.myRoleList":"org.getMyDeptRole",this._AJAX({url:o,method:"GET",data:{deptId:e}}).then((function(e){0==e.code&&(i.availableCharacterList=e.result)}))},getDeptTag:function(e){var t=this;this._AJAX({url:"system"===this.pageType?"org.getDeptTag":"org.getMyDeptTag",method:"GET",data:{deptId:e}}).then((function(e){0==e.code&&(t.availableTagList=e.result)}))},treeDeleteDept:function(){var e=this,t=Object.assign({},this.clickedRow),a=this;this._AJAX({url:"system"===this.pageType?"org.deleteDepartment":"org.deleteMyDepartment",method:"POST",data:{adq:t.id}}).then((function(i){0==i.code&&e.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){a.removeTreeNode(t.id),a.clickedRow={}}}})}))},submitTreeModify:function(){var e=this,t=Object.assign({},this.clickedRow),a=this;this.$refs.rulesF.validate((function(i){if(!i)return!1;e.$store.commit("SHOW_LOADING",!0);var o=Object.assign({},e.treeDialog);o.pid=t.id,"add"===e.treeDialogType?e._AJAX({url:"system"===e.pageType?"org.addDepartment":"org.addMyDepartment",method:"POST",data:o}).then((function(i){0==i.code&&e.$AudaqueToast.tip({template:"新增成功",methods:{okEvent:function(){a.treeDialogVisible=!1,a.updateTreeNode(t,"add"),a.defaultExpanded.push(t.id)}}})})):e._AJAX({url:"org.checkModify",method:"POST",data:o}).then((function(e){0===e.code&&a.modifyDept(o,t)})).catch((function(i){999999===i.code&&e.$AudaqueToast.warn({template:i.msg,methods:{okEvent:function(){a.modifyDept(o,t)}}})}))}))},modifyDept:function(e,t){var a=this,i=this;this._AJAX({url:"system"===this.pageType?"org.modifyDepartment":"org.modifyMyDepartment",method:"POST",data:e}).then((function(e){0==e.code&&a.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){i.treeDialogVisible=!1,i.updateTreeNode(t,"edit"),i.getTreeDataInfo(t.id),i.defaultExpanded.push(t.id)}}})}))},addUser:function(e){this.clickedRow.id?this.$router.push({path:"/webkit/orgManageAddUser",query:{pid:this.clickedRow.pid,deptId:this.clickedRow.id,deptName:this.clickedRow.name,optType:"add",pageType:this.pageType,addType:e}}):this.$AudaqueToast.tip({template:"请先选择组织架构",methods:{okEvent:function(){}}})},handleNodeClick:function(e,t){this.nodeClickData=e,t.parent.data&&t.parent.data.myDept?e.isMyDept=!0:("system"===this.pageType&&e.isFirstNode&&(e.isShowFirstNode=!0),e.isMyDept=!1),this.clickedRow=Object.assign({},e),this.userListForm.deptId=e.id,this.setNodeSys(),e.myDept?this.getUserList():this.userList={rows:[],total:0}},openTreeDialogEvent:function(){},closeDialog:function(){this.treeDialog={title:"",deptType:1,name:"",deptCode:"",industryCategory:"3",zoneCode:"",roleIds:[],tagIds:[]},this.availableCharacterList=[],this.availableTagList=[]},getUserList:function(){var e=this;if(this.clickedRow.id){var t=Object.assign({},this.userListForm);this._AJAX({url:"system"===this.pageType?"orguser.findDeptUserList":"orguser.findMyDeptUserList",method:"GET",data:t}).then((function(t){e.userList=t})).catch((function(){e.userList.rows=[],e.userList.total=0}))}},handleUserSizeChange:function(e){this.userListForm.rows=e,this.getUserList()},handleUserCurrentChange:function(e){this.userListForm.page=e,this.getUserList()},editUser:function(e,t){this.$router.push({path:"/webkit/orgManageAddUser",query:{pid:this.clickedRow.pid,deptId:this.clickedRow.id,deptName:this.clickedRow.name,userId:e.userId,deptUserId:e.id,optType:t,pageType:this.pageType,isAddUser:!0,addType:"add"}})},deleteUser:function(e){var t=this;this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){t.delUser(e)}}})},delUser:function(e){var t=this;t._AJAX({url:"system"===t.pageType?"orguser.deleteDeptUser":"orguser.deleteMyDeptUser",method:"POST",data:{deptId:e.deptId,userIds:[e.userId]}}).then((function(e){0===e.code&&t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){t.getUserList()}}})}))},dataAuthority:function(e){this.$router.push({path:"/webkit/orgManageAuthority",query:{deptId:e.deptId,deptUserId:e.id,pageType:this.pageType}})},exportTemplate:function(e){this.publics.exportFile(this,e,{})},exportFun:function(e){this.publics.exportFile(this,e,{id:this.clickedRow.id?this.clickedRow.id:null,deptId:this.clickedRow.deptId?this.clickedRow.deptId:null})},uploadFile:function(e){var t=this;this.formData=new FormData;var a=this.clickedRow.id||null;this.formData.append("upFile",e.target.files[0]),this.formData.append("pid",a),this.loading=!0,this._AJAX({url:"org.orgListImport",data:this.formData,method:"POST"}).then((function(e){t.loading=!1,0===e.code?(t.updateTreeNode(t.clickedRow,"edit",1===t.clickedRow.level?"setNodeAdmin":null),t.$message({message:e.msg?e.msg:"导入成功",type:"success"})):t.$AudaqueToast.error({template:"".concat(e.msg),methods:{okEvent:function(){}}}),t.delFormData()})).catch((function(){t.loading=!1,t.delFormData()}))},uploadFile_1:function(e){var t=this;this.formData=new FormData;var a=this.clickedRow.id||null;this.formData.append("upFile",e.target.files[0]),this.formData.append("deptId",a),this.loading=!0,this._AJAX({url:"orguser.orgUserListImport",data:this.formData,method:"POST"}).then((function(e){t.loading=!1,0===e.code?(t.updateTreeNode(t.clickedRow,"edit",1===t.clickedRow.level?"setNodeAdmin":null),t.$message({message:e.msg?e.msg:"导入成功",type:"success"})):t.$AudaqueToast.error({template:"".concat(e.msg),methods:{okEvent:function(){}}}),t.delFormData()})).catch((function(){t.loading=!1,t.delFormData()}))},delFormData:function(){if(this.$refs.upload.value=null,this.$refs.upload1.value=null,this.formData){var e,t=s(this.formData.keys());try{for(t.s();!(e=t.n()).done;){var a=e.value;this.formData.delete(a)}}catch(e){t.e(e)}finally{t.f()}}}})},f=(a("bb2c"),a("3a1d"),a("2877")),g=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100%"}},[t("audaque-resize-split-page",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("template",{slot:"title"},[t("audaque-table-title",{attrs:{title:"system"===e.pageType?"组织管理":"我的组织"}})],1),[t("audaque-tree-title",{staticClass:"operate-zoom",attrs:{title:"组织架构",icon:"icon-jichutubiao-"}},[[t("em",{staticClass:"iconfont iconpeizhi",attrs:{title:"设置"},on:{click:e.addManager}}),t("em",{staticClass:"iconfont iconShape1",attrs:{title:"删除"},on:{click:e.treeDeleteDept}}),t("em",{staticClass:"iconfont iconFill",attrs:{title:"编辑"},on:{click:function(t){return e.treeOperaDept("edit")}}}),t("em",{staticClass:"iconfont iconxinzeng",attrs:{title:"添加"},on:{click:function(t){return e.treeOperaDept("add")}}})]],2),t("el-tree",{ref:"tree",staticClass:"tree-dashed",attrs:{indent:20,props:e.defaultProps,"node-key":"id","default-expanded-keys":e.defaultExpanded,"expand-on-click-node":!1,"render-content":e.renderTreeItem,"filter-node-method":e.filterNode,lazy:"",load:e.loadNode},on:{"node-click":e.handleNodeClick}})]],2),t("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.searchBarVisible,expression:"searchBarVisible"}],on:{close:function(t){e.searchBarVisible=!1},search:function(t){return e.queryListFn(1)},reset:function(t){return e.queryListFn(0)}}},[t("audaque-table-search-item",{attrs:{title:"用户账号"}},[t("el-input",{attrs:{type:"text",placeholder:"请输入用户账号",clearable:""},model:{value:e.userListForm.account,callback:function(t){e.$set(e.userListForm,"account","string"==typeof t?t.trim():t)},expression:"userListForm.account"}})],1),t("audaque-table-search-item",{attrs:{title:"用户姓名"}},[t("el-input",{attrs:{type:"text",placeholder:"请输入用户姓名",clearable:""},model:{value:e.userListForm.name,callback:function(t){e.$set(e.userListForm,"name","string"==typeof t?t.trim():t)},expression:"userListForm.name"}})],1)],1),t("el-dialog",{attrs:{title:e.treeDialogTitle,visible:e.treeDialogVisible,width:"400","close-on-click-modal":!1},on:{open:e.openTreeDialogEvent,"update:visible":function(t){e.treeDialogVisible=t},close:e.closeDialog}},[t("el-form",{ref:"rulesF",attrs:{model:e.treeDialog,rules:e.rules}},[t("el-form-item",{attrs:{label:"组织类型:","label-width":"140px",prop:"deptType"}},[t("el-select",{attrs:{placeholder:"请选择节点类型"},model:{value:e.treeDialog.deptType,callback:function(t){e.$set(e.treeDialog,"deptType",t)},expression:"treeDialog.deptType"}},e._l(e.nodeTypeList,(function(e){return t("el-option",{key:"addDept-"+e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:2==e.treeDialog.deptType?"区划名称:":3==e.treeDialog.deptType?"虚拟组织:":"组织名称:","label-width":"140px",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入",maxlength:"20","show-word-limit":""},nativeOn:{keyup:function(t){return e.handleKeyup(t)}},model:{value:e.treeDialog.name,callback:function(t){e.$set(e.treeDialog,"name","string"==typeof t?t.trim():t)},expression:"treeDialog.name"}})],1),t("el-form-item",{attrs:{label:"组织编码:","label-width":"140px",prop:"deptCode"}},[t("el-input",{attrs:{placeholder:"",disabled:"edit"===e.treeDialogType},model:{value:e.treeDialog.deptCode,callback:function(t){e.$set(e.treeDialog,"deptCode","string"==typeof t?t.trim():t)},expression:"treeDialog.deptCode"}})],1),2==e.treeDialog.deptType?t("el-form-item",{attrs:{label:"区划代码:","label-width":"140px",prop:"zoneCode"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.treeDialog.zoneCode,callback:function(t){e.$set(e.treeDialog,"zoneCode","string"==typeof t?t.trim():t)},expression:"treeDialog.zoneCode"}})],1):e._e(),1==e.treeDialog.deptType?t("el-form-item",{attrs:{label:"所属行业:","label-width":"140px",prop:"industryCategory"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.treeDialog.industryCategory,callback:function(t){e.$set(e.treeDialog,"industryCategory",t)},expression:"treeDialog.industryCategory"}},e._l(e.industryList,(function(e){return t("el-option",{key:"addDept-"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),t("el-form-item",{attrs:{label:"可用角色:","label-width":"140px",prop:"roleIds"}},[t("el-select",{attrs:{placeholder:"请选择",multiple:"",filterable:"",clearable:""},model:{value:e.treeDialog.roleIds,callback:function(t){e.$set(e.treeDialog,"roleIds",t)},expression:"treeDialog.roleIds"}},e._l(e.availableCharacterList,(function(a){return t("el-option",{key:"addDept-"+a.id,attrs:{label:a.name,value:a.id}},[t("span",{style:{color:a.disabled?"#c0c4cc":"#606266"},attrs:{title:a.disabled?"没有权限删除该角色":""}},[e._v(e._s(a.name))])])})),1)],1),t("el-form-item",{attrs:{label:"可用标签:","label-width":"140px",prop:"tagIds"}},[t("el-select",{attrs:{placeholder:"请选择",multiple:"",filterable:""},model:{value:e.treeDialog.tagIds,callback:function(t){e.$set(e.treeDialog,"tagIds",t)},expression:"treeDialog.tagIds"}},e._l(e.availableTagList,(function(e){return t("el-option",{key:"addDept-"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.treeDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:e.submitTreeModify}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,"ca3a51b6",null);t.default=g.exports},f5fe:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".node-info-list[data-v-ca3a51b6]{border-bottom:1px solid #ebebeb;padding-bottom:50px;margin-bottom:50px}.node-info-list li[data-v-ca3a51b6]{display:inline-block;width:33.33%;line-height:40px;white-space:nowrap}.node-info-list li .title[data-v-ca3a51b6]{display:inline-block;font-weight:700;min-width:90px;text-align:right;color:#666;padding-right:15px}[data-v-ca3a51b6] .pane-comp,[data-v-ca3a51b6] .tree-dashed{overflow:auto}[data-v-ca3a51b6] .el-table{overflow:inherit}[data-v-ca3a51b6] .el-table__body-wrapper.is-scrolling-none{height:auto}[data-v-ca3a51b6] .operate-zoom .iconfont{margin-right:6px;cursor:pointer}[data-v-ca3a51b6] .el-tree-node .el-tree-node__children{overflow:visible!important}[data-v-ca3a51b6] .audaque-resize-split__left-layout .tree-dashed{height:calc(100% - 45px)}.import-template[data-v-ca3a51b6]{position:relative}.inputFile[data-v-ca3a51b6]{position:absolute;left:0;top:0;width:100%;height:100%;display:none}.el-dropdown-menu--medium .el-dropdown-menu__item[data-v-ca3a51b6]{padding:0;margin-top:0}.el-dropdown-menu--medium .el-dropdown-menu__item[data-v-ca3a51b6]:before{display:none}.option-btn[data-v-ca3a51b6]{padding:5px 15px}.audaque-tree-title[data-v-ca3a51b6]{white-space:nowrap}",""])}}]);