(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-80664f54"],{1678:function(e,t,r){"use strict";r("8960")},"3a05":function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,".inputFile[data-v-29a53b33]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;font-size:0;cursor:pointer}",""])},8960:function(e,t,r){var i=r("3a05");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,r("499e").default)("46306f20",i,!0,{sourceMap:!1,shadowMode:!1})},9565:function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("a481");var i=r("ade3"),o=r("9816"),s=r("2f62");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=!0,u=!0,d={data:function(){var e=this;return{tenantList:[],editDialog:!1,userInfoDialog:!1,editForm:{oldPwd:"",newPwd:"",confirmPwd:""},editRules:{oldPwd:[{required:!0,message:"请输入当前密码",trigger:"blur"},{min:6,max:20,message:"密码长度为 6 - 20 个字符",trigger:"blur"}],newPwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"新密码长度为 6 - 20 个字符",trigger:"blur"}],confirmPwd:[{validator:function(t,r,i){""===r?i(new Error("请输入确认密码")):r!==e.editForm.newPwd?i(new Error("两次输入密码不一致!")):i()},trigger:"blur"}]},getPicture:"",files:"",userForm:{name:"",email:"",phone:"",defTenant:""},userRule:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:2,max:15,message:"姓名长度为2-15个字符",trigger:"blur"}],email:[{required:l,trigger:"blur",validator:function(e,t,r){l||t?""===t?r(new Error("请输入邮箱地址!")):/\w+@\w+\.\w+/.test(t)?r():r(new Error("输入的不是有效的邮箱格式!")):r()}}],phone:[{required:u,trigger:"blur",min:11,max:11,message:"输入的不是有效的手机格式",validator:function(e,t,r){u||t?t?/^1\d{10}$/.test(t)?r():r(new Error("电话号码不合法")):r(new Error("不能为空")):r()}}]}}},inject:["reload"],computed:a(a(a({},Object(s.d)("user",["userIcon"])),Object(s.d)("webkit",["headerStic"])),Object(s.d)("webkit",["userInfo"])),methods:a(a(a(a(a({},Object(s.c)("webkit",["headerSticConfig"])),Object(s.c)("user",["resetImage"])),Object(s.b)("user",["GETPUBLICKEY","GET_EDIT_USER","LOGOUT"])),Object(s.b)("webkit",["modifyPwd","setIcon","getBaseInfo","modifyBaseInfo"])),{},{saveEditPassword:function(){var e=this;this.$refs.editForm.validate((function(t){if(!t)return!1;var r=new o.a;e.GETPUBLICKEY().then((function(t){r.setPublicKey(t.result);var i={oldPwd:r.encrypt(e.editForm.oldPwd),newPwd:r.encrypt(e.editForm.newPwd),pwdType:1};e.modifyPwd(i).then((function(){e.editDialog=!1,e.$message({type:"success",message:"修改密码成功！",showClose:!0,duration:1e3}),e.LOGOUT()}))}))}))},editDialogClosed:function(){this.$refs.editForm.resetFields()},userInfoDialogClosed:function(){this.getPicture="",this.files="",this.$refs.userForm.resetFields()},saveBaseInfo:function(){var e=this;this.$refs.userForm.validate((function(t){if(!t)return!1;e.modifyBaseInfo(e.userForm).then((function(t){if(e.$message({type:"success",message:"修改用户基本信息成功！",showClose:!0,duration:1e3}),e.userInfoDialog=!1,e.$route.path.indexOf("index")>-1)return window.location.reload();e.$router.replace("/index"),e.$store.state.isUpdateMenu=!0,e.loadBaseInfo()}))}))},uploadFile:function(e){if(e.target.files.length<1)return this.getPicture="";if(e.target.files[0].size/1024/1024>.1)return this.$message({type:"warning",message:"上传图片大于100Kb,请压缩图片后重新上传!",showClose:!0,duration:1500});var t=window.URL.createObjectURL(e.target.files[0]),r=new Image;r.src=t;var i=this;r.onload=function(){if(r.width>200||r.height>200)return i.$message({type:"warning",message:"图片的宽高不能大于200！",showClose:!0,duration:1500})},this.files=e.target.files[0],this.getPicture=this.getFileUrl(e.target),this.getPicture?this.$refs.uploadPic.src=this.getPicture:this.$refs.uploadPic.src=this.userIcon,e.target.value=""},getFileUrl:function(e){return window.URL.createObjectURL(e.files.item(0))},uploadimage:function(){var e=this;if(this.files.length<1)return!1;var t=new FormData;t.append("file",this.files),this.setIcon(t).then((function(t){e.$message({type:"success",message:"上传头像成功！",showClose:!0,duration:1e3}),e.files="",e.getPicture="",e.resetImage()}))},loadBaseInfo:function(){var e=this;this.getBaseInfo().then((function(t){e.userForm.name=e.userInfo.myUser.name,e.userForm.email=e.userInfo.myUser.email,e.userForm.phone=e.userInfo.myUser.phone,e.userForm.defTenant=e.userInfo.myUser.defTenant,l=e.userInfo.emailSupport,u=e.userInfo.phoneSupport,e.$set(e.userRule.email[0],"required",l),e.$set(e.userRule.phone[0],"required",u),e.userInfo.tenantList&&e.userInfo.tenantList.length>0&&(e.tenantList=e.userInfo.tenantList)}))}}),watch:{headerStic:function(e){var t=this;e&&("edit"==e?this.editDialog=!0:"base"==e&&(this.userInfoDialog=!0,this.$nextTick((function(){t.loadBaseInfo()}))),this.headerSticConfig(""))}}},c=(r("1678"),r("2877")),f=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._t("default"),r("el-dialog",{attrs:{visible:e.editDialog,width:"50%"},on:{close:e.editDialogClosed,"update:visible":function(t){e.editDialog=t}}},[r("el-form",{ref:"editForm",attrs:{model:e.editForm,rules:e.editRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.editForm.oldPwd,callback:function(t){e.$set(e.editForm,"oldPwd",t)},expression:"editForm.oldPwd"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.editForm.newPwd,callback:function(t){e.$set(e.editForm,"newPwd",t)},expression:"editForm.newPwd"}})],1),r("el-form-item",{attrs:{label:"确认新密码",prop:"confirmPwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.editForm.confirmPwd,callback:function(t){e.$set(e.editForm,"confirmPwd",t)},expression:"editForm.confirmPwd"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialog=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEditPassword}},[e._v("保 存")])],1)],1),r("el-dialog",{attrs:{visible:e.userInfoDialog,width:"50%"},on:{close:e.userInfoDialogClosed,"update:visible":function(t){e.userInfoDialog=t}}},[r("el-row",{attrs:{justify:"center",type:"flex"}},[r("div",{staticStyle:{position:"relative",overflow:"hidden",width:"75px",height:"75px"}},[r("img",{ref:"uploadPic",staticStyle:{"border-radius":"50%",border:"solid 1px #dddddd"},attrs:{src:e.userIcon,width:"75",height:"75"}}),r("input",{ref:"upload",staticClass:"inputFile",attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.uploadFile(t)}}})])]),r("el-row",{staticStyle:{margin:"10px 0"},attrs:{justify:"center",type:"flex"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.uploadimage}},[e._v("上传头像\n            ")])],1),r("el-row",[r("el-form",{ref:"userForm",staticClass:"demo-ruleForm",attrs:{model:e.userForm,rules:e.userRule,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"phone"}},[r("el-input",{model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}})],1),e.tenantList.length>0?r("el-form-item",{attrs:{label:"当前租户"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userForm.defTenant,callback:function(t){e.$set(e.userForm,"defTenant",t)},expression:"userForm.defTenant"}},e._l(e.tenantList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e()],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.userInfoDialog=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveBaseInfo}},[e._v("保 存")])],1)],1)],2)}),[],!1,null,"29a53b33",null);t.default=f.exports}}]);