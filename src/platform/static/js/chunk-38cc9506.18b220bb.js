(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38cc9506"],{"293c":function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,"[data-v-658a1662] .news-type-sys-introduction{min-height:90px!important;height:auto!important}[data-v-658a1662] .news-type-sys-introduction /deep/ .el-textarea__inner{min-height:90px!important}",""])},"91e4":function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d");var a=r("ade3"),o=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={computed:s({},Object(o.d)(["upload"])),data:function(){return{formTitle:"edit"===this.$route.query.optType?"编辑消息模板":"view"===this.$route.query.optType?"查看消息模板":"新增消息模板",preview:"",ruleForm:{},rules:{templateCode:{required:!0,message:"请输入模板编码",trigger:"blur"},templateType:{required:!0,message:"请选择模板用途",trigger:"change"},templateName:{required:!0,message:"请输入模板标题",trigger:"blur"},templateContent:{required:!0,message:"请输入模板内容",trigger:"change"}},isView:!1,templateList:[{label:"短信",value:0},{label:"邮件",value:1},{label:"系统",value:3}]}},created:function(){this.$route.query.id&&this.loadData(),"view"===this.$route.query.optType&&(this.isView=!0)},methods:s(s({},Object(o.b)(["_AJAX"])),{},{loadData:function(){var e=this;this._AJAX({url:"sys.message.template.id",method:"GET",data:{id:this.$route.query.id}}).then((function(t){if(0==t.code){var r=t.result;e.ruleForm=r}}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){var r=e;if(!t)return!1;var a=Object.assign({},e.ruleForm);e.$route.query.id?e._AJAX({url:"sys.message.template.edit",method:"POST",data:a}).then((function(t){e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){r.$router.go(-1)}}})})):e._AJAX({url:"sys.message.template.add",method:"POST",data:a}).then((function(t){e.$AudaqueToast.tip({template:"新增成功",methods:{okEvent:function(){r.$router.go(-1)}}})}))}))}})},n=(r("e958"),r("2877")),u=Object(n.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("audaque-detail-form-page",{staticClass:"news-type-sys-edit",attrs:{title:e.formTitle,"opt-type":e.$route.query.optType},on:{"submit-click":e.submitForm}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"90px",disabled:e.isView}},[r("el-form-item",{attrs:{label:"模板标题",prop:"templateName"}},[r("el-input",{attrs:{placeholder:"","show-word-limit":"",maxlength:"64"},model:{value:e.ruleForm.templateName,callback:function(t){e.$set(e.ruleForm,"templateName",t)},expression:"ruleForm.templateName"}})],1),r("el-form-item",{attrs:{label:"模板编码",prop:"templateCode"}},[r("el-input",{attrs:{placeholder:"",disabled:"add"!=e.$route.query.optType,"show-word-limit":"",maxlength:"64"},model:{value:e.ruleForm.templateCode,callback:function(t){e.$set(e.ruleForm,"templateCode",t)},expression:"ruleForm.templateCode"}})],1),r("el-form-item",{attrs:{label:"模板用途",prop:"templateType"}},[r("el-select",{model:{value:e.ruleForm.templateType,callback:function(t){e.$set(e.ruleForm,"templateType",t)},expression:"ruleForm.templateType"}},e._l(e.templateList,(function(e){return r("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"模板内容",prop:"templateContent"}},[r("tinymce",{attrs:{disabled:e.isView},model:{value:e.ruleForm.templateContent,callback:function(t){e.$set(e.ruleForm,"templateContent",t)},expression:"ruleForm.templateContent"}})],1),r("el-form-item",{attrs:{label:"模板格式",prop:"templateTestJson"}},[r("el-input",{staticClass:"news-type-sys-introduction",attrs:{type:"textarea",autosize:"",placeholder:"","show-word-limit":"",maxlength:"1000"},model:{value:e.ruleForm.templateTestJson,callback:function(t){e.$set(e.ruleForm,"templateTestJson",t)},expression:"ruleForm.templateTestJson"}})],1)],1)],1)}),[],!1,null,"658a1662",null);t.default=u.exports},e958:function(e,t,r){"use strict";r("fb9a")},fb9a:function(e,t,r){var a=r("293c");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,r("499e").default)("0178a73c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);