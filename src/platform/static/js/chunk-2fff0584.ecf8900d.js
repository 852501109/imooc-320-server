(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2fff0584"],{"026a":function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,".process-config-edit[data-v-834e2bf6] .news-type-sys-introduction{min-height:90px!important;height:auto!important}.process-config-edit[data-v-834e2bf6] .news-type-sys-introduction /deep/ .el-textarea__inner{min-height:90px!important}",""])},"5d26":function(e,t,r){"use strict";r("6b27")},"66e5":function(e,t,r){"use strict";r.r(t),r("7f7f"),r("8e6e"),r("ac6a"),r("456d");var o=r("ade3"),i=r("2f62"),n=r("365c");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{formTitle:"edit"===this.$route.query.optType?"编辑业务注册":"view"===this.$route.query.optType?"查看业务注册":"新增业务注册",preview:"",ruleForm:{name:null,code:null,description:null},rules:{name:[{required:!0,message:"业务名称不能为空",trigger:"blur"}],code:[{required:!0,message:"业务编码不能为空",trigger:"blur"},{pattern:/^[A-Za-z0-9_\-]+$/gi,message:"只能包含数字、字母、下划线",trigger:"blur"}]},isView:!1}},created:function(){this.$route.query.id&&this.loadData(),"view"===this.$route.query.optType&&(this.isView=!0)},methods:a(a({},Object(i.b)(["_AJAX"])),{},{loadData:function(){var e=this,t=n.default["sys.category.id"]+"/"+this.$route.query.id;this._AJAX({url:t,method:"GET",data:{}}).then((function(t){0==t.code&&(e.ruleForm=t.result)}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){var r=e;if(!t)return!1;var o=Object.assign({},e.ruleForm);e.$store.commit("SHOW_LOADING",!0),e.$route.query.id?e._AJAX({url:"sys.category.update",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){r.$router.go(-1)}}})})):e._AJAX({url:"sys.category.insert",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"新增成功",methods:{okEvent:function(){r.$router.go(-1)}}})}))}))}})},l=(r("5d26"),r("2877")),c=Object(l.a)(u,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{staticClass:"process-config-edit",attrs:{title:e.formTitle,"opt-type":e.$route.query.optType},on:{"submit-click":e.submitForm}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"90px",disabled:e.isView}},[t("el-form-item",{attrs:{label:"业务名称",prop:"name"}},[t("el-input",{attrs:{maxlength:"24","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name","string"==typeof t?t.trim():t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"业务编号",prop:"code"}},[t("el-input",{attrs:{maxlength:"30","show-word-limit":""},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code","string"==typeof t?t.trim():t)},expression:"ruleForm.code"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"description"}},[t("el-input",{staticClass:"news-type-sys-introduction",attrs:{type:"textarea",autosize:"",placeholder:"",maxlength:"100","show-word-limit":""},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description","string"==typeof t?t.trim():t)},expression:"ruleForm.description"}})],1)],1)],1)}),[],!1,null,"834e2bf6",null);t.default=c.exports},"6b27":function(e,t,r){var o=r("026a");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,r("499e").default)("7deb841d",o,!0,{sourceMap:!1,shadowMode:!1})}}]);