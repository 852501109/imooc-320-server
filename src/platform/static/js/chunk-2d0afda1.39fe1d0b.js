(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0afda1"],{"0fa6":function(e,r,t){"use strict";t.r(r),t("8e6e"),t("ac6a"),t("456d");var l=t("ade3"),o=t("2f62");function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}var n={created:function(){var e=this,r=this.$route.query.id;r&&this.GET_EVENT_DETAIL({id:r}).then((function(r){e.ruleForm=r.result})).catch((function(r){return e.loading=!1}))},data:function(){return{ruleForm:{}}},methods:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){Object(l.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Object(o.b)("webkit",["GET_EVENT_DETAIL"]))},s=t("2877"),u=Object(s.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("audaque-detail-form-page",{attrs:{title:"查看详情","opt-type":e.$route.query.optType}},[t("el-form",{ref:"ruleForm",staticClass:"source-ruleForm",attrs:{model:e.ruleForm,"status-icon":"","label-width":"130px"}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"事件ID：",prop:"key"}},[t("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.key,callback:function(r){e.$set(e.ruleForm,"key",r)},expression:"ruleForm.key"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"事件名称：",prop:"name"}},[t("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"事件级别：",prop:"level"}},[t("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.level,callback:function(r){e.$set(e.ruleForm,"level",r)},expression:"ruleForm.level"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"产生时间：",prop:"createTime"}},[t("span",{staticClass:"customize"},[e._v(e._s(e.ruleForm.createTime?e.publics.formatTime(e.ruleForm.createTime,"Y-M-D h:m:s"):""))])])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"事件原因：",prop:"content"}},[t("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.content,callback:function(r){e.$set(e.ruleForm,"content",r)},expression:"ruleForm.content"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"定位信息："}},[t("span",{staticClass:"customize"},[e._v("\n                    "+e._s(e.ruleForm.hostInfo+";"+e.ruleForm.appKey+";"+e.ruleForm.key)+"\n                ")])])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"附加信息：",prop:"remark"}},[t("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.remark,callback:function(r){e.$set(e.ruleForm,"remark",r)},expression:"ruleForm.remark"}})],1)],1)],1)],1)}),[],!1,null,null,null);r.default=u.exports}}]);