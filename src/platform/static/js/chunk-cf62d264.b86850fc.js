(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cf62d264"],{"1daf":function(e,t,r){"use strict";r("c108")},"2e3a":function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,".user-edit[data-v-67242d7a] .resource{border:1px solid #e1dfdc}.user-edit[data-v-67242d7a] .submit-wrap{text-align:center;margin-top:.2rem}.user-edit[data-v-67242d7a] .el-tree{height:3.5rem;overflow-y:scroll}.user-edit .paf-title[data-v-67242d7a]{cursor:pointer}.user-edit .agree[data-v-67242d7a]{color:red}.user-edit[data-v-67242d7a] .form-item{width:99%;padding-right:0}",""])},"8f7c":function(e,t,r){"use strict";r.r(t),r("7f7f"),r("8e6e"),r("456d"),r("ac6a"),r("c5f6"),r("28a5"),r("96cf");var a=r("1da1"),l=r("ade3"),o=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var n,u=!1,c=!1,d=!1,m={data:function(){var e=this;return{form:{userId:null,account:"",name:"",email:"",phone:"",mainDeptId:null,roles:[],myDept:[]},rules:{account:[{required:!0,trigger:["blur","change"],validator:this.validateUsername}],userId:[{required:!0,trigger:"change",validator:this.validateUsername}],name:[{trigger:"blur",required:!0,message:"姓名不能为空"}],idCardNo:[{required:d,message:"身份证号码不能为空",trigger:"blur"},{pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[Xx])$/,message:"身份证号码格式不正确",trigger:"blur"},{validator:function(t,r,a){e.$utils.idCardValidity(t,r,a,d)},trigger:"blur"}],email:[{trigger:"blur",required:c,validator:function(e,t,r){!c&&!t||/\*/.test(t)?r():t?/\w+@\w+\.\w+/.test(t)?r():r(new Error("输入的不是有效的邮箱格式")):r(new Error("邮箱不能为空"))}}],phone:[{trigger:"blur",required:u,validator:function(e,t,r){!u&&!t||/\*/.test(t)?r():t?/^1\d{10}$/.test(t)?r():r(new Error("手机号码不合法")):r(new Error("手机号码不能为空"))}}]},operateName:"",filter:"",roleList:[],myRoleList:[],myResource:[],defaultProps:{label:"name",disabled:"other"},isUnderstanding:!1,isVariety:!1,pageType:this.$route.query.pageType,optType:this.$route.query.optType,userParams:{page:1,rows:200,name:null,includeDep:!0,tenantId:0},privacyHref:window.urlConfig+"/static/pdf/privacyStatement.pdf",userMaxLength:window.accountMaxLength,isCluster:window.isCluster}},watch:{defTenant:{handler:function(e,t){},deep:!0}},computed:i(i({},Object(o.d)("webkit",["resourceList","isArr","tenantMode","securityUserList","userInfo","defTenant"])),Object(o.d)("user",["editUserInfo"])),created:(n=Object(a.a)(regeneratorRuntime.mark((function e(){var t,r,a,l,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(this.isCluster&&!this.optType||this.isCluster&&"add"===this.optType)&&(this.optType="view"),t=this.$route.query.userId?this.$route.query.userId:0,this.filter="view"!=this.$route.query.filter,this.defTenant&&this.defTenant,this.RESOURCELIST({filter:this.filter}),"view"===this.optType?this.operateName="查看用户":"edit"===this.optType?this.operateName="编辑用户":this.isCluster||(this.operateName="新增用户"),e.next=8,this._AJAX({url:"role.myRoleList",method:"GET",data:{}}).then((function(e){0==e.code&&(o.roleList=e.result)}));case 8:return e.next=10,this.GET_EDIT_USER(t).then((function(e){if(c=e.result.emailSupport,u=e.result.phoneSupport,d=e.result.idCardNoSupport,o.$set(o.rules.email[0],"required",c),o.$set(o.rules.phone[0],"required",u),t){o.myRoleList=e.result.myRoleList;var r=Object.assign({},o.form,e.result.myUser,{roles:e.result.myRole?e.result.myRole.split(",").filter((function(e){return""!==e})).map((function(e){return Number(e)})):[]});r.myDept=e.result.myDept,r.userId=e.result.myUser.id,e.result.myDept.map((function(e){var t=e.namePath.split("→");e.parentName=t[t.length-2]})),o.form=r,o.myResource=e.result.myResource.split(",")}})).catch((function(e){return o.loading=!1}));case 10:t&&this.myRoleList&&(this.myRoleList.map((function(e){return e.disabled=!0})),r=this.roleList.concat(this.myRoleList),a={},l=[],r.map((function(e){a[e.id]||(l.push(e),a[e.id]=!0)})),this.roleList=l);case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),methods:i(i(i(i({},Object(o.b)("user",["GET_EDIT_USER","USER_ROLE_LIST","ADD_USER","MODIFY_USER"])),Object(o.b)("webkit",["RESOURCELIST","SECURTY_TENANT_USER_LIST"])),Object(o.b)(["_AJAX"])),{},{validateUsername:function(e,t,r){if(this.userInfo.myUser&&0!=this.userInfo.myUser.tenantId){if(!(t&&(t+"").length>0))return void r(new Error("用户账号不能为空"));r()}else{for(var a=0;a<"&<>@,，.。/$#\\\\".length;a++){var l="&<>@,，.。/$#\\\\"[a];if("string"==typeof t&&t.indexOf(l)>0)return void r(new Error("用户名不能包含特殊字符"))}this.$utils.validityUserName(e,t,r)}},getSubmitData:function(){var e="",t={};this.$refs.tree.getCheckedNodes().forEach((function(r,a){r&&r.value&&r.value.split(".")[1]&&(e=r.value.split(".")[0],null==t[e]&&(t[e]=""),t[e]+=","+r.value.split(".")[1])}));var r={account:this.form.account,email:this.form.email,level:this.form.level,name:this.form.name,num:this.form.num,phone:this.form.phone,mainDeptId:this.form.mainDeptId,resources:t,roleIds:this.form.roles,userId:this.$route.query.userId||this.form.userId};return r.userId||delete r.userId,r},isUnderstandingFun:function(e){e&&(this.isVariety=!1)},submit:function(){var e=this,t=this.getSubmitData();this.$refs.ruleform.validate((function(r){if(!r)return!1;var a=e,l=e.$route.query.userId;a.$store.commit("SHOW_LOADING",!0),l?e.MODIFY_USER(t).then((function(t){e.$AudaqueToast.tip({template:"修改用户成功",methods:{okEvent:function(){a.$router.go(-1)}}})})).catch((function(t){return e.loading=!1})):e.ADD_USER(t).then((function(t){e.$AudaqueToast.tip({template:"添加用户成功",methods:{okEvent:function(){a.$router.go(-1)}}})})).catch((function(t){return e.loading=!1}))}))}})},p=(r("1daf"),r("2877")),f=Object(p.a)(m,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{staticClass:"user-edit",attrs:{title:e.operateName,"opt-type":e.optType},on:{"submit-click":e.submit}},[[0!=e.defTenant?t("el-form",{ref:"ruleform",staticClass:"form-item",attrs:{model:e.form,"label-width":"120px",rules:e.rules,disabled:"view"===e.optType}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户姓名",prop:"userId"}},[t("adq-user-list-component",{attrs:{disabled:"add"!=e.optType,multiple:!1,userParams:e.userParams},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"角色",prop:"roles"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",multiple:"",clearable:""},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},e._l(e.roleList,(function(r){return t("el-option",{key:r.name,attrs:{label:r.name,value:r.id}},[t("span",{style:{color:r.disabled?"#c0c4cc":"#606266"},attrs:{title:r.disabled?"没有权限删除该角色":""}},[e._v(e._s(r.name))])])})),1)],1)],1),"add"!=e.optType?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"主部门",prop:"mainDeptId"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.mainDeptId,callback:function(t){e.$set(e.form,"mainDeptId",t)},expression:"form.mainDeptId"}},e._l(e.form.myDept,(function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e.id}})})),1)],1)],1):e._e()],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.isCluster,expression:"!isCluster"}]},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"功能权限"}},[t("el-tree",{ref:"tree",staticClass:"resource",attrs:{data:e.resourceList,"show-checkbox":"","node-key":"value","highlight-current":"","default-checked-keys":e.myResource,props:e.defaultProps}})],1)],1)],1),e.$route.query.userId?t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"所在部门"}},[t("el-table",{ref:"deptListTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:e.form.myDept,border:!0}},[t("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"部门名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}],null,!1,1895023226)}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"上一级部门"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.parentName))]}}],null,!1,392051462)})],1)],1)],1)],1):e._e()],1):t("el-form",{ref:"ruleform",staticClass:"form-item",attrs:{model:e.form,"label-width":"120px",rules:e.rules,disabled:"view"===e.optType}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户账号",prop:"account"}},[t("el-input",{attrs:{disabled:"add"!=e.optType,maxlength:e.userMaxLength,"show-word-limit":""},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account","string"==typeof t?t.trim():t)},expression:"form.account"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{maxlength:"20","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"==typeof t?t.trim():t)},expression:"form.email"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"手机",prop:"phone"}},[t("el-input",{attrs:{maxlength:"11","show-word-limit":""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"==typeof t?t.trim():t)},expression:"form.phone"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"角色",prop:"roles"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",multiple:"",clearable:""},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},e._l(e.roleList,(function(r){return t("el-option",{key:r.name,attrs:{label:r.name,value:r.id}},[t("span",{style:{color:r.disabled?"#c0c4cc":"#606266"},attrs:{title:r.disabled?"没有权限删除该角色":""}},[e._v(e._s(r.name))])])})),1)],1)],1),"add"!=e.optType?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"主部门",prop:"mainDeptId"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.mainDeptId,callback:function(t){e.$set(e.form,"mainDeptId",t)},expression:"form.mainDeptId"}},e._l(e.form.myDept,(function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e.id}})})),1)],1)],1):e._e()],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:!e.isCluster,expression:"!isCluster"}]},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"功能权限"}},[t("el-tree",{ref:"tree",staticClass:"resource",attrs:{data:e.resourceList,"show-checkbox":"","node-key":"value","highlight-current":"","default-checked-keys":e.myResource,props:e.defaultProps}})],1)],1)],1),e.$route.query.userId?t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"所在部门"}},[t("el-table",{ref:"deptListTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:e.form.myDept,border:!0}},[t("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"部门名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}],null,!1,1895023226)}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"上一级部门"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.parentName))]}}],null,!1,392051462)})],1)],1)],1)],1):e._e()],1)]],2)}),[],!1,null,"67242d7a",null);t.default=f.exports},c108:function(e,t,r){var a=r("2e3a");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,r("499e").default)("98d46bd0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);