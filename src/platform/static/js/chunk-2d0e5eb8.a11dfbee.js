(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e5eb8"],{9715:function(e,t,r){"use strict";r.r(t),r("c5f6"),r("7f7f"),r("8e6e"),r("456d"),r("ac6a"),r("5df3");var a=r("ade3"),i=(r("96cf"),r("1da1")),o=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d,l=!1,p=!1,u=!1,m={name:"orgManageAddUser",data:function(){var e=this;return{form:{account:"",name:"",email:"",phone:"",roleIds:[],tagIds:[],mainDeptId:null,isLeader:!1},rules:{account:[{required:!0,trigger:["blur","change"],validator:function(t,r,a){for(var i=0;i<"&<>@,/$#\\\\".length;i++){var o="&<>@,/$#\\\\"[i];if(r.indexOf(o)>0)return void a(new Error("用户名不能包含特殊字符"))}e.$utils.validityUserName(t,r,a)}}],name:[{trigger:"blur",required:!0,message:"姓名不能为空"}],idCardNo:[{required:u,message:"身份证号码不能为空",trigger:"blur"},{pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[Xx])$/,message:"身份证号码格式不正确",trigger:"blur"},{validator:function(t,r,a){e.$utils.idCardValidity(t,r,a,u)},trigger:"blur"}],email:[{trigger:"blur",required:p,validator:function(e,t,r){!p&&!t||/\*/.test(t)?r():t?/\w+@\w+\.\w+/.test(t)?r():r(new Error("输入的不是有效的邮箱格式")):r(new Error("请输入邮箱地址"))}}],phone:[{trigger:"blur",required:l,validator:function(e,t,r){!l&&!t||/\*/.test(t)?r():t?/^1\d{10}$/.test(t)?r():r(new Error("手机号码不合法")):r(new Error("不能为空"))}}]},operateName:null,roleList:[],tagList:[],isDisabled:!1,isAddUser:"add"==this.$route.query.addType,deptUserId:this.$route.query.deptUserId,deptId:this.$route.query.deptId,deptName:this.$route.query.deptName,userId:this.$route.query.userId,optType:this.$route.query.optType,pageType:this.$route.query.pageType,isMainDeptDisabled:!1,mainDeptList:[],userMaxLength:window.accountMaxLength,isCluster:window.isCluster}},created:(d=Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"view"==this.optType?(this.operateName="查看用户",this.isDisabled=!0):"edit"==this.optType?(this.operateName="编辑用户",this.isDisabled=!1):(this.operateName=this.isAddUser?"新增用户":"拉取用户",this.isDisabled=!1),e.next=3,this.getDeptRole();case 3:return e.next=5,this.getDeptTag();case 5:this.validatorEmailPhone(),this.deptUserId&&this.getUserInfo();case 7:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)}),watch:{userInfo:function(e){this.validatorEmailPhone()}},computed:n(n({},Object(o.d)("webkit",["defTenant"])),Object(o.d)("webkit",["userInfo"])),methods:n(n({},Object(o.b)(["_AJAX"])),{},{validatorEmailPhone:function(){p=this.userInfo.emailSupport,l=this.userInfo.phoneSupport,u=this.userInfo.idCardNoSupport,this.$set(this.rules.email[0],"required",p),this.$set(this.rules.phone[0],"required",l)},loadUserDep:function(){var e=this;Promise.all([this._AJAX({url:"org.findMyManageDept",method:"GET",data:{}})]).then((function(t){var r=t[0].result.filter((function(t){return e.form.myDept.some((function(e){return e.id===t.id}))})),a=!1,i=e;e.form.mainDeptId?(a=r.some((function(e){return e.id===i.form.mainDeptId})),e.isMainDeptDisabled=!a,e.mainDeptList=a?r:t[0].result.concat(e.form.myDept)):e.mainDeptList=r}))},getUserInfo:function(){var e=this;this._AJAX({url:"system"===this.pageType?"orguser.findDeptUser":"orguser.findMyDeptUser",method:"GET",data:{deptUserId:this.deptUserId}}).then((function(t){0==t.code&&(e.form=t.result,"add"!=e.optType&&e.loadUserDep())}))},getDeptRole:function(){var e=this;this._AJAX({url:"system"===this.pageType?"org.getDeptRole":"org.getMyDeptRole",method:"GET",data:{deptId:this.deptId}}).then((function(t){0==t.code&&(e.roleList=t.result)}))},getDeptTag:function(){var e=this;this._AJAX({url:"system"===this.pageType?"org.getDeptTag":"org.getMyDeptTag",method:"GET",data:{deptId:this.deptId}}).then((function(t){0==t.code&&(e.tagList=t.result)}))},prevPage:function(){this.$router.go(-1)},submit:function(){var e=this,t=this;this.$refs.ruleform.validate((function(r){if(!r)return!1;e.$store.commit("SHOW_LOADING",!0);var a={deptId:e.deptId,isLeader:e.form.isLeader,roleIds:e.form.roleIds,tagIds:e.form.tagIds,mainDeptId:e.form.mainDeptId,user:{account:e.form.account,name:e.form.name,email:e.form.email,phone:e.form.phone}};"add"===e.optType?e.isAddUser?e._AJAX({url:"system"===e.pageType?"orguser.addDeptUser":"orguser.addMyDeptUser",method:"POST",data:a}).then((function(r){0===r.code&&e.$AudaqueToast.tip({template:"添加用户成功",methods:{okEvent:function(){t.$router.go(-1)}}})})).catch((function(t){2222==t.code&&(e.isAddUser=!1,e.operateName="拉取用户")})):e._AJAX({url:"system"===e.pageType?"orguser.addDeptUser":"orguser.addMyDeptUser",method:"POST",data:{deptId:e.deptId,account:e.form.account,roleIds:e.form.roleIds,tagIds:e.form.tagIds,isLeader:e.form.isLeader}}).then((function(r){0===r.code&&e.$AudaqueToast.tip({template:"拉取用户成功",methods:{okEvent:function(){t.$router.go(-1)}}})})):(a=Object.assign({id:e.form.id},a),e._AJAX({url:"system"===e.pageType?"orguser.modifyDeptUser":"orguser.modifyMyDeptUser",method:"POST",data:a}).then((function(r){e.$AudaqueToast.tip({template:"编辑用户成功",methods:{okEvent:function(){t.$router.go(-1)}}})})))}))}})},c=r("2877"),f=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{staticClass:"user-edit",attrs:{"opt-type":e.optType},on:{"submit-click":e.submit}},[t("template",{slot:"title"},[t("audaque-table-title",{attrs:{title:e.operateName}},[t("div",{staticClass:"rewrite_icon"},["add"==e.optType&&e.isAddUser?t("el-button",{attrs:{type:"primary",icon:"iconxuanzeyonghux",size:"mini"},on:{click:function(t){e.isAddUser=!1,e.operateName="拉取用户"}}},[e._v("拉取用户")]):e._e(),e.isCluster?e._e():[t("el-button",{attrs:{type:"primary",icon:"iconxinzeng2",size:"mini"},on:{click:function(t){e.isAddUser=!0,e.operateName="添加用户"}}},[e._v("添加用户")])],t("el-button",{attrs:{type:"primary",icon:"adq-icon-back",size:"mini"},on:{click:e.prevPage}},[e._v("返回")])],2)])],1),[t("el-form",{ref:"ruleform",attrs:{model:e.form,"label-width":"90px",rules:e.rules,disabled:e.isDisabled}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户账号",prop:"account"}},[t("el-input",{attrs:{clearable:"",disabled:"edit"==e.optType,maxlength:e.userMaxLength,"show-word-limit":""},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account","string"==typeof t?t.trim():t)},expression:"form.account"}})],1)],1),e.isAddUser?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{clearable:"",maxlength:"20","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1):e._e(),e.isAddUser?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{clearable:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"==typeof t?t.trim():t)},expression:"form.email"}})],1)],1):e._e(),e.isAddUser?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"手机",prop:"phone"}},[t("el-input",{attrs:{clearable:"",disabled:"edit"==e.optType,maxlength:"11","show-word-limit":""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"==typeof t?t.trim():t)},expression:"form.phone"}})],1)],1):e._e(),"dept"==e.pageType&&e.isAddUser&&"add"===e.optType?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"主部门",prop:"mainDeptId"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:"",disabled:e.isMainDeptDisabled},model:{value:e.form.mainDeptId,callback:function(t){e.$set(e.form,"mainDeptId",t)},expression:"form.mainDeptId"}},[t("el-option",{attrs:{label:e.deptName,value:Number(e.deptId)}})],1)],1)],1):e._e(),"dept"==e.pageType&&e.isAddUser&&"add"!=e.optType?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"主部门",prop:"mainDeptId"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:"",disabled:e.isMainDeptDisabled},model:{value:e.form.mainDeptId,callback:function(t){e.$set(e.form,"mainDeptId",t)},expression:"form.mainDeptId"}},e._l(e.mainDeptList,(function(e){return t("el-option",{attrs:{item:e.id,label:e.name,value:e.id}})})),1)],1)],1):e._e()],1)],1)]],2)}),[],!1,null,null,null);t.default=f.exports}}]);