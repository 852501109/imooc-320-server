(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b094dabe"],{3419:function(e,r,t){"use strict";t("5fa2")},"5d8d":function(e,r,t){"use strict";t.r(r),t("7f7f"),t("8e6e"),t("456d"),t("a481"),t("ac6a");var a=t("ade3"),n=(t("c5f6"),t("28a5"),t("96cf"),t("1da1")),u=t("2f62");function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l,i={data:function(){return{ruleForm:{},rules:{name:[{required:!0,message:"请输入租户名称",trigger:"blur"},{min:2,max:15,message:"租户名称长度为2-15个字符",trigger:"blur"}],realm:[{required:!0,message:"请输入管理域",trigger:"blur"},{min:3,max:50,message:"管理域长度为3-50个字符",trigger:"blur"}],managerId:[{required:!1,message:"请选择租户管理员",trigger:"change"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{min:5,max:50,message:"邮箱长度为5-50个字符",trigger:"blur"},{validator:function(e,r,t){/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(r)?t():t(new Error("输入的不是有效的邮箱格式"))},trigger:"blur"}]},myResource:[],defaultProps:{label:"name",disabled:"other"},query:{userId:this.$route.query.userId,tenantId:this.$route.query.tenantId,name:this.$route.query.name},treeData:[]}},created:(l=Object(n.a)(regeneratorRuntime.mark((function e(){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("add"!==this.$route.query.optType){e.next=5;break}return e.next=3,this.RESOURCELIST({filter:!0}).then((function(){r.treeData=r.resourceList}));case 3:e.next=7;break;case 5:return e.next=7,this.GET_RESOURCE_LIST({filter:!0,userId:this.query.userId,tenantId:this.query.tenantId}).then((function(){r.treeData=r.getResourceList}));case 7:if(!this.query.tenantId){e.next=15;break}if(1!=this.tenantMode){e.next=13;break}return e.next=11,this.TENANT_DETAIL(this.query.tenantId).then((function(e){r.ruleForm=e.result,r.ruleForm.id=e.result.tenantId,delete r.ruleForm.tenantId,r.GET_EDIT_USER(r.query.tenantId).then((function(e){r.myResource=e.result.myResource.split(",")})).catch((function(e){return r.loading=!1}))}));case 11:e.next=15;break;case 13:return e.next=15,this._AJAX({url:"user.getTenantIdManagerUser",method:"GET",data:{userId:this.query.userId,tenantId:this.query.tenantId}}).then((function(e){0===e.code&&(r.$set(r.ruleForm,"name",r.query.name),r.myResource=e.result.myResource.split(","),r.$set(r.ruleForm,"managerId",Number(r.query.userId)),r._userList&&r._userList.length>0&&(-1!=r._userList.map((function(e){return e.id})).indexOf(Number(r.query.userId))?r.$set(r.ruleForm,"managerId",Number(r.query.userId)):r.$set(r.ruleForm,"managerId",null)))}));case 15:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),computed:o(o({},Object(u.d)("webkit",["userInfo","getResourceList","resourceList","securityUserList","tenantMode"])),Object(u.d)(["_userList"])),methods:o(o(o(o({},Object(u.b)("webkit",["ADD_TENANT","MODIFY_TENANT","TENANT_DETAIL","GET_RESOURCE_LIST","RESOURCELIST","SECURTY_TENANT_USER_LIST"])),Object(u.b)("user",["GET_EDIT_USER"])),Object(u.b)(["_AJAX"])),{},{submitForm:function(){var e=this,r=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var a={},n={};if(1==e.tenantMode);else if(2==e.tenantMode){var u="";e.$refs.tree.getCheckedNodes().forEach((function(e,r){e&&e.value&&e.value.split(".")[1]&&(u=e.value.split(".")[0],null==a[u]&&(a[u]=""),a[u]+=","+e.value.split(".")[1])})),n.resources=a}e.ruleForm.managerId==e.query.userId?(n.name=e.ruleForm.name,n.userId=e.ruleForm.managerId,n.managerId=null,n.defTenant=e.query.tenantId):(n.name=e.ruleForm.name,n.userId=e.ruleForm.managerId,n.managerId=e.query.userId,n.defTenant=e.query.tenantId),e.$store.commit("SHOW_LOADING",!0),e.$route.query.tenantId?e._AJAX({url:"webkit.modifyTenant",method:"POST",data:n}).then((function(t){0===t.code&&e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){r.$router.replace("/webkit/tenantManage")}}})})):e.ADD_TENANT({managerId:e.ruleForm.managerId,name:e.ruleForm.name,resources:a}).then((function(t){e.$AudaqueToast.tip({template:"添加成功",methods:{okEvent:function(){r.$router.replace("/webkit/tenantManage")}}})}))}))}})},m=(t("3419"),t("2877")),c=Object(m.a)(i,(function(){var e=this,r=e._self._c;return r("audaque-detail-form-page",{attrs:{title:e.$route.query.tenantId?"编辑租户":"新增租户","opt-type":e.$route.query.optType},on:{"submit-click":e.submitForm}},[1==e.tenantMode?r("el-form",{ref:"ruleForm",staticClass:"source-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"120px"}},[r("el-form-item",{staticClass:"source-list",attrs:{label:"租户名称",prop:"name"}},[r("el-input",{attrs:{disabled:!!e.$route.query.tenantId,maxlength:"15","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name","string"==typeof r?r.trim():r)},expression:"ruleForm.name"}})],1),r("el-form-item",{staticClass:"source-list",attrs:{label:"管理域",prop:"realm"}},[r("el-input",{attrs:{disabled:!!e.$route.query.tenantId},model:{value:e.ruleForm.realm,callback:function(r){e.$set(e.ruleForm,"realm","string"==typeof r?r.trim():r)},expression:"ruleForm.realm"}})],1),r("el-form-item",{staticClass:"source-list",attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email","string"==typeof r?r.trim():r)},expression:"ruleForm.email"}})],1),r("el-form-item",{staticClass:"source-list",attrs:{label:"平台租户",prop:"extTenant"}},[r("el-input",{model:{value:e.ruleForm.extTenant,callback:function(r){e.$set(e.ruleForm,"extTenant","string"==typeof r?r.trim():r)},expression:"ruleForm.extTenant"}})],1)],1):e._e(),2==e.tenantMode?r("el-form",{ref:"ruleForm",staticClass:"source-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"120px"}},[r("el-form-item",{staticClass:"source-list",attrs:{label:"租户名称",prop:"name"}},[r("el-input",{attrs:{disabled:!!e.$route.query.tenantId,maxlength:"15","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name","string"==typeof r?r.trim():r)},expression:"ruleForm.name"}})],1),r("el-form-item",{staticClass:"source-list",attrs:{label:"租户管理员",prop:"managerId"}},[r("adq-user-list-component",{attrs:{multiple:!1},model:{value:e.ruleForm.managerId,callback:function(r){e.$set(e.ruleForm,"managerId",r)},expression:"ruleForm.managerId"}})],1),r("el-form-item",{attrs:{label:"功能权限"}},[r("el-tree",{ref:"tree",staticClass:"resource",attrs:{data:e.treeData,"show-checkbox":"","node-key":"value","highlight-current":"","default-checked-keys":e.myResource,props:e.defaultProps}})],1)],1):e._e()],1)}),[],!1,null,"334ca040",null);r.default=c.exports},"5fa2":function(e,r,t){var a=t("e4e0");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,t("499e").default)("6aa2c8fb",a,!0,{sourceMap:!1,shadowMode:!1})},e4e0:function(e,r,t){(e.exports=t("2350")(!1)).push([e.i,".source-ruleForm[data-v-334ca040] .resource{border:1px solid #e1dfdc}.source-ruleForm[data-v-334ca040] .submit-wrap{text-align:center;margin-top:.2rem}.source-ruleForm[data-v-334ca040] .el-tree{height:3.5rem;overflow-y:scroll}.source-ruleForm .paf-title[data-v-334ca040]{cursor:pointer}.source-ruleForm .agree[data-v-334ca040]{color:red}",""])}}]);