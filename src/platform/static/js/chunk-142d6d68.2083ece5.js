(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-142d6d68"],{4642:function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,".news-type-sys-edit[data-v-2a0fb045] .news-type-sys-introduction{min-height:90px!important;height:auto!important}.news-type-sys-edit[data-v-2a0fb045] .news-type-sys-introduction /deep/ .el-textarea__inner{min-height:90px!important}",""])},"6ab0":function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d");var o=r("ade3"),a=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var n={computed:s({},Object(a.d)(["upload"])),data:function(){return{formTitle:"edit"===this.$route.query.optType?"编辑消息类型":"view"===this.$route.query.optType?"查看消息类型":"新增消息类型",preview:"",ruleForm:{code:"",name:"",remark:""},rules:{code:[{required:!0,message:"类型编号不能为空",trigger:"blur"}],name:[{required:!0,message:"类型名称不能为空",trigger:"blur"}]},isView:!1}},created:function(){this.$route.query.id&&this.loadData(),"view"===this.$route.query.optType&&(this.isView=!0)},methods:s(s({},Object(a.b)(["_AJAX"])),{},{loadData:function(){var e=this;this._AJAX({url:"news.sys.msg.type.id",method:"GET",data:{id:this.$route.query.id}}).then((function(t){if(0==t.code){var r=t.result;e.ruleForm=r}}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){var r=e;if(!t)return!1;var o=Object.assign({},e.ruleForm);e.$route.query.id?e._AJAX({url:"news.sys.msg.edit",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){r.$router.go(-1)}}})})):e._AJAX({url:"news.sys.msg.new",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"新增成功",methods:{okEvent:function(){r.$router.go(-1)}}})}))}))}})},u=(r("ddae"),r("2877")),l=Object(u.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("audaque-detail-form-page",{staticClass:"news-type-sys-edit",attrs:{title:e.formTitle,"opt-type":e.$route.query.optType},on:{"submit-click":e.submitForm}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"90px",disabled:e.isView}},[r("el-form-item",{attrs:{label:"类型编号",prop:"code"}},[r("el-input",{attrs:{maxlength:"24","show-word-limit":""},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),r("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[r("el-input",{attrs:{maxlength:"24","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{staticClass:"news-type-sys-introduction",attrs:{type:"textarea",autosize:"",placeholder:"",maxlength:"100","show-word-limit":""},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)],1)}),[],!1,null,"2a0fb045",null);t.default=l.exports},be85:function(e,t,r){var o=r("4642");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,r("499e").default)("7fd2e175",o,!0,{sourceMap:!1,shadowMode:!1})},ddae:function(e,t,r){"use strict";r("be85")}}]);